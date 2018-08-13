/* eslint-env mocha */
/* @flow */

const should = require('should')

const configHelpers = require('../support/helpers/config')
const cozyHelpers = require('../support/helpers/cozy')
const { onPlatforms } = require('../support/helpers/platform')
const pouchHelpers = require('../support/helpers/pouch')
const { IntegrationTestHelpers } = require('../support/helpers/integration')

describe('Identity conflict', () => {
  let cozy, helpers

  before(configHelpers.createConfig)
  before(configHelpers.registerClient)
  beforeEach(pouchHelpers.createDatabase)
  beforeEach(cozyHelpers.deleteAll)

  afterEach(() => helpers.local.clean())
  afterEach(pouchHelpers.cleanDatabase)
  after(configHelpers.cleanConfig)

  beforeEach(async function () {
    cozy = cozyHelpers.cozy
    helpers = new IntegrationTestHelpers(this.config, this.pouch, cozy)

    await helpers.local.setupTrash()
    await helpers.remote.ignorePreviousChanges()
  })

  describe('initial detection', () => {
    let idConflicts

    beforeEach(async () => {
      // FIXME: Extract event capture logic
      idConflicts = []
      helpers.events.on('id-conflict', idConflict => {
        idConflicts.push(idConflict._id)
      })

      await cozy.files.createDirectoryByPath('/alfred')
      await helpers.pullAndSyncAll()

      await cozy.files.createDirectoryByPath('/Alfred')
      await helpers.pullAndSyncAll()
      should(await helpers.remote.tree()).deepEqual([
        '.cozy_trash/',
        'Alfred/',
        'alfred/'
      ])
    })

    onPlatforms('win32', 'darwin', () => {
      it('syncs the first one but rejects the second one', async () => {
        const actual = {
          idConflicts,
          incompatible: await helpers.incompatibleTree(),
          local: await helpers.local.tree()
        }
        should(actual).deepEqual({
          idConflicts: [
            'ALFRED'
          ],
          incompatible: [
            // Empty since none of them is incompatible by itself
          ],
          local: [
            'alfred/' // First one was synced
          ]
        })
      })
    })
  })

  describe('remote resolution', () => {
    let idConflicts

    beforeEach(async () => {
      await cozy.files.createDirectoryByPath('/alfred')
      await helpers.pullAndSyncAll()

      await cozy.files.createDirectoryByPath('/Alfred')
      await helpers.pullAndSyncAll()

      // FIXME: Extract event capture logic
      idConflicts = []
      helpers.events.on('id-conflict', idConflict => {
        idConflicts.push(idConflict._id)
      })

      await cozy.files.updateAttributesByPath('/Alfred', {name: 'john'})
      await helpers.pullAndSyncAll()
    })

    onPlatforms('win32', 'darwin', () => {
      it('works', async () => {
        const actual = {
          idConflicts,
          incompatible: await helpers.incompatibleTree(),
          local: await helpers.local.tree(),
          remote: await helpers.remote.tree()
        }
        should(actual).deepEqual({
          idConflicts: [],
          incompatible: [],
          local: [
            'alfred/',
            'john/'
          ],
          remote: [
            '.cozy_trash/',
            'alfred/',
            'john/'
          ]
        })
      })
    })
  })

  describe.skip('local resolution', () => {
    // TODO
  })
})
