## 3.9.1-beta.1 - 2018-08-16

Improvements for all users:

- Fix synchronization bugs when merging and overwriting folders.

Improvements for macOS users:

- Better support for APFS

See also [known issues](https://github.com/cozy-labs/cozy-desktop/blob/master/KNOWN_ISSUES.md).

Happy syncing!


## 3.9.0 - 2018-07-20

Improvements for all users:

- Improved timestamp conflict handling (see [3.9.0-beta.1][3.9.0-beta.1])
- New diff-based data comparison algorithm (see [3.9.0-beta.1][3.9.0-beta.1])
- Improved file move + overwrite handling (see [3.9.0-beta.2][3.9.0-beta.2])
- New TOS update dialog (see [3.9.0-beta.2][3.9.0-beta.2])

Improvements for Windows & macOS users:

- Initial scan properly ignores platform-incompatible remote files (see [3.9.0-beta.1][3.9.0-beta.1])

Note for GNOME 3.28 or later users:

- Better use TopIcons, not TopIcons-Plus (see [3.9.0-beta.1][3.9.0-beta.1])

See also [known issues](https://github.com/cozy-labs/cozy-desktop/blob/master/KNOWN_ISSUES.md).

Happy syncing!

[3.9.0-beta.1]: https://github.com/cozy-labs/cozy-desktop/releases/tag/v3.9.0-beta.1
[3.9.0-beta.2]: https://github.com/cozy-labs/cozy-desktop/releases/tag/v3.9.0-beta.2

## 3.9.0-beta.2 - 2018-07-19

Improvements for all users:

- Moving a file to overwrite an existing one is now effectively synchronized
  as expected.
- Users don't look at the systray popover so often. So people who have not
  accepted the new TOS may be unaware that the synchronization is currently
  paused. The app now shows up a reminder dialog on start when appropriate.

See also [known issues](https://github.com/cozy-labs/cozy-desktop/blob/master/KNOWN_ISSUES.md).

Happy syncing!

## 3.9.0-beta.1 - 2018-07-17

Improvements for all users:

- When a file or directory exists in the cozy, the app will never try to
  assign it an older timestamp anymore. This will ensure synchronization still
  works, even when the local timestamp is actually more accurate than the remote
  one. We'll later introduce a way to save the correct timestamp without being
  rejected by the Cozy.
- The data comparison algorithm is now diff-based. This will help us investigate
  a very rare (but hard to fix) bug where a file is detected as modified while
  no change is actually visible.

Improvements for Windows & macOS users:

- When a file or directory couldn't not be synchronized locally because of
  some platform incompatibility (e.g. reserved character), it will be properly
  ignored during initial scan after restarting the app.

Improvements for support:

- Summarized and detailed traces are now always stored together to make
  analysis easier.

Note for GNOME 3.28 or later users:

- You may have to switch from TopIcons-Plus back to good old TopIcons in case
  the app doesn't show up when clicking on the tray icon, whatever the app
  version.

See also [known issues](https://github.com/cozy-labs/cozy-desktop/blob/master/KNOWN_ISSUES.md).

Happy syncing!

## 3.8.1 - 2018-07-02

There was no 3.8.0 stable release since we had to release a 3.8.1-alpha first.
So 3.8.1 is the first stable release since 3.7.0.

Improvements for all users:

- When a change could not be applied on the other side, the document was not
  considered up-to-date anymore on the source side. This was fixed as part of
  the [3.8.0-beta.1 release][3.8.0-beta.1].

Improvements for Windows users:

- Office temporary files should be effectively ignored since
  [3.8.0-beta.1][3.8.0-beta.1] too.

Improvements for macOS users:

- In macOS 10.13 (High Sierra), Apple removed the feature we were using to add
  the *Cozy Drive* directory to the Finder's favorite items. We had to find
  another way to bring it back. It should work as expected now.

Improvements for developers / contributors:

- One step less to build the app: `yarn build:core` is not needed anymore. If
  you were using `yarn build`, it should work the same as before. But now you
  won't have to rebuild in case of a core change before running the GUI.
  Less dependencies. Shorter stacktraces. This also fixed a few oddities.
- We also improved logs and jq filters.

See also [known issues][KNOWN_ISSUES.md].

Happy syncing!

## 3.8.0-beta.1 - 2018-06-25

Improvements for all users:

- When a file could not be uploaded/downloaded that may generate conflicts when editing/saving a file multiple times.
- Ignored files (e.g. Office temporary files) should now be effectively ignored on Windows.

Improvements for Arch Linux users:

- You should now be able to install `cozy-desktop` from community repo, courtesy of ArchangeGabriel. Huge thanks to him!

See also [known issues][KNOWN_ISSUES.md].

Happy syncing!

## 3.7.0 - 2018-06-13

Improvements for all users:

- Handle [user action required][3.7.0-beta.1] and [action completion][3.7.0-beta.3]
- Make [Auto-Update Error Transparent][3.7.0-beta.2]
- Handle [emptied folder][3.7.0-beta.1]

Please see the previous beta releases for more details.
See also [known issues][KNOWN_ISSUES.md].

Happy syncing!

## 3.7.0-beta.3 - 2018-06-12

Improvements for all users:

- The app should detect (may take between 5 seconds and 1 minute according to
  elapsed time between click inside the app and completion) when required user
  action has been completed (i.e. new TOS validation) and restart
  automatically.

Improvements for developers:

- New jq file extension/gui/issues filters for logs

See also [known issues](https://github.com/cozy-labs/cozy-desktop/blob/master/KNOWN_ISSUES.md).

Happy syncing!

## 3.7.0-beta.2 - 2018-04-27

Improvements for all users:

- The app won't display an error in case of an auto-update failure. Errors
  are logged anyway and auto-update will be retried automatically at some
  point.

Improvements for developers:

- Developers won't have to wait for the above error to disappear.

See also [known issues](https://github.com/cozy-labs/cozy-desktop/blob/master/KNOWN_ISSUES.md).

Happy syncing!

## 3.7.0-beta.1 - 2018-04-27

Improvements for all users:

- The app now detects when the *Cozy Drive* folder was made empty while it
  used to have contents before. Synchronization is stopped. User can either
  restart later in case the folder is a mount point that was not available
  yet, or delete the root folder before restart to actually restart from
  scratch.
- Warnings from the Cozy instance (e.g. TOS updates) are now detected.
  A bottom banner is shown in the UI prompting the user to read the detail
  before the deadline. After the deadline, synchronisation is stopped and
  reading the detail will be mandatory.
- We also fixed an issue that was preventing some errors to be correctly
  written in logs.

Improvements for developers:

- Logs are dumped on failing test (will help debugging random CI issues)
- Upgrade to Go 1.9 & Couchdb 2.1 on Travis CI

See also [known issues](https://github.com/cozy-labs/cozy-desktop/blob/master/KNOWN_ISSUES.md).

Happy syncing!

## 3.6.0 - 2018-04-12

See:

- [3.6.0-beta.5](https://github.com/cozy-labs/cozy-desktop/releases/tag/v3.6.0-beta.5)
- [3.6.0-beta.4](https://github.com/cozy-labs/cozy-desktop/releases/tag/v3.6.0-beta.4)
- [3.6.0-beta.3](https://github.com/cozy-labs/cozy-desktop/releases/tag/v3.6.0-beta.3)
- [3.6.0-beta.2](https://github.com/cozy-labs/cozy-desktop/releases/tag/v3.6.0-beta.2)
- [3.6.0-beta.1](https://github.com/cozy-labs/cozy-desktop/releases/tag/v3.6.0-beta.1)

See also [known issues](https://github.com/cozy-labs/cozy-desktop/blob/master/KNOWN_ISSUES.md).

Happy syncing!

## 3.6.0-beta.5 - 2018-04-05

Improvements for all users:

- Moved & renamed files are now listed in the *Recents* tab.

Improvements for Windows users:

- Starting from this beta release, the app should be signed with our renewed
  certificate.

See also [known issues](https://github.com/cozy-labs/cozy-desktop/blob/master/KNOWN_ISSUES.md).

Happy syncing!

## 3.6.0-beta.4 - 2018-03-30

Improvements for all users:

- The *Recents* tab is now clearer and more reliable.
- The app will suggest sending support requests from each desktop device you own
  so we can pinpoint multi-device issues.

Improvements for developers & support team:

- You can now filter log entries on multiple path fields (e.g.
  `yarn jq 'filter_path("pattern")'`)
- User-sent logs archive extension now matches the actual format.
- Logs also include less noise.

See also [known issues](https://github.com/cozy-labs/cozy-desktop/blob/master/KNOWN_ISSUES.md).

Happy syncing!

## 3.6.0-beta.3 - 2018-03-27

Improvements for all users:

- The app won't poll the Cozy anymore when descendant synchronization is
  already in progress.
- Errors occurring during auto-update are now properly reported to the user,
  with a generic message by default and a more specific one whenever possible
  (e.g. permission issue or disk full).
- The app also properly waits for dir trashing to succeed (issue introduced
  in 3.6.0-beta.1).
- The icon used in the systray window header is now the official blue one on
  Windows and GNU/Linux (we still use the symbolic icon on macOS since it
  integrates better with the overall desktop environment).

Improvements for Windows users:

- We set up a temporary workaround for a bug in electron that is preventing
  notifications to show up on Windows.

Improvements for i3wm (and possibly other tiling window managers) users:

- You can now force an option so the systray Window stays visible when loosing
  focus (please look at the [GNU/Linux documentation](https://github.com/cozy-labs/cozy-desktop/blob/master/doc/usage/linux.md#install)
  for more details). Please tell us whether or not it also helps with other
  tiling window managers.

See also [known issues](https://github.com/cozy-labs/cozy-desktop/blob/master/KNOWN_ISSUES.md).

Happy syncing!

## 3.6.0-beta.2 - 2018-03-22

Improvements for all users:

- The app won't recompute the checksum of a file when its last modification
  date has not changed.

See also [known issues](https://github.com/cozy-labs/cozy-desktop/blob/master/KNOWN_ISSUES.md).

Happy syncing!

## 3.6.0-beta.1 - 2018-03-19

Improvements for all users:

- Electron was upgraded from 1.7.9 to 1.8.3 (including quite a few security and
  bug fixes).
- The file/directory move synchronization logic (the part that takes
  already-merged metadata changes and turn them into actions on the other side)
  was substantially rewritten to make it more robust and handle more complex
  cases (e.g. moving `a/` to `b/` then `c/` to `a/`, or moving `a/` to `b/` then
  deleting `b/`).
- A file won't be updated when only its mtime changed. This is a first necessary
  step to later stop computing checksums for files with unmodified mtime, making
  the initial scan faster.

Improvements for macOS and BSD users:

- We fixed a weird recurring error that was generating useless logging on every
  run.

Improvements for developers and support team:

- ES6 modules were replaced with node.js ones. This is a first necessary step
  to get rid of Babel, simplify our build process and make stacktraces smaller
  and easier to read.
- The app now waits for the configuration to be loaded before logging full
  client information (not just some part of it).
- We introduced a few [jq](https://stedolan.github.io/jq/) filters to help
  filtering huge logs. Those should work well with multiple huge log files
  (e.g. > 1GB).

## 3.5.0 - 2018-03-12

This is the same release as [3.5.0-beta.4](https://github.com/cozy-labs/cozy-desktop/releases/tag/v3.5.0-beta.4),
but the version has been updated.

Main changes:

- Improved upload reliability
- Files and folders with name starting with a `.` are now ignored by default.
  If this is an issue for you, please contact us and explain your use case.
- Support requests from the app now uploads your logs directly to our servers.
- When a platform-incompatible folder name is fixed, its files are synced too.
- You can choose to sync a non-empty folder.
- You can exit without confirming unattended revocation and try again later.
- We added traces to spot weird blank page issue on Windows, please try with
  this new release and send us your logs.

And more... See previous beta releases for more details:

- [3.5.0-beta.4](https://github.com/cozy-labs/cozy-desktop/releases/tag/v3.5.0-beta.4)
- [3.5.0-beta.3](https://github.com/cozy-labs/cozy-desktop/releases/tag/v3.5.0-beta.3)
- [3.5.0-beta.2](https://github.com/cozy-labs/cozy-desktop/releases/tag/v3.5.0-beta.2)
- [3.5.0-beta.1](https://github.com/cozy-labs/cozy-desktop/releases/tag/v3.5.0-beta.1)

See also [known issues](https://github.com/cozy-labs/cozy-desktop/blob/master/KNOWN_ISSUES.md).

Happy syncing!

## 3.5.0-beta.4 - 2018-03-08

Improvements for all users:

* Files and folders with name starting with a `.` will now be ignored by
  default. We used to blacklist a few special hidden files and folders, but it
  didn't prove an efficient way to prevent unsupported use cases and issues. So
  we decided to go the opposite way. Please report specific issues with as many
  context as possible so we can understand the actual need.
* When sending a support request from the app, your logs are now uploaded
  directly to our own servers. They're not sent by email anymore, so it should
  work even with huge files (although the upload may take some time).
* The app now detects and handle a few file and folder deletion events
  miscategorized by a third-party component (very rare bug).
* A few users where looking for the CLI, not knowing it was actually disabled.
  The documentation was updated to reflect this.

Improvements for Windows and macOS users:

* When taking a folder with a platform-compatible name, renaming it with a
  platform-incompatible name then renaming it back to a compatible one, files
  were still not synced back (it worked in other cases though). This issue is
  fixed now.

Improvements for Windows users:

* We added UI traces to help us spot a weird issue: at least 2 Windows users
  recently reported blank windows when starting the app (at least one of them
  solved the issue by switching to automatic video card selection, but we're
  still investigating). In case you encountered this issue, please try again
  with this new release and send us a support request from the app.

See also [known issues](https://github.com/cozy-labs/cozy-desktop/blob/master/KNOWN_ISSUES.md).

Happy syncing!

## 3.5.0-beta.3 - 2018-03-02

Improvements for all users:

- A lot of desktop clients were disconnected recently. Although it seems the
  issue is not on the app side, users were forced to disconnect, go through the
  onboarding steps again, and synchronize there whole drive back. The latest
  stable release (v3.4.5) allowed selecting a non empty synced directory to
  lower the impact of this issue. This new beta release allows user to exit the
  app from the revocation notification dialog without actually disconnecting
  and try synchronizing again later.

We apologize for the inconvenience.

## 3.5.0-beta.2 - 2018-03-01

Improvements for all users:

- All dual-screen window positioning issues should be fixed.

Improvements for macOS users:

- Notifications used to be quite broken on macOS. Everything should just work
  now.
- Special `Icon\r` files were not properly ignored during synchronization,
  probably due to a weird bug in some third-party component. Although it could
  make sense to synchronize them between 2 macOS computers, the cozy-stack
  actually doesn't support creating a file with name containing a `\r`
  character. We made sure those files were properly ignored.

Improvements for developers:

- Test reports recently stopped working when run with coverage enabled (e.g. on
  CI). Everything is back to normal.

See also [known issues](https://github.com/cozy-labs/cozy-desktop/blob/master/KNOWN_ISSUES.md).

Happy syncing!

## 3.5.0-beta.1 - 2018-02-27

Improvements for KDE users:

- the icon is now correctly sized, thanks to @hleroy

Improvements for all users:

- File uploads are now made with `Content-Length` instead of `Transfer: chunked` which should improve stability.

See also [known issues](https://github.com/cozy-labs/cozy-desktop/blob/master/KNOWN_ISSUES.md).

Happy syncing!


## 3.4.4 & 3.4.5 - 2018-02-26

Improvements for all users:

- Allow selection of an non-empty sync dir as a quickfix following the 26/02 forced logout production incident.

The 3.4.4 build was broken.

Also include all changes from [3.4.4-beta.1](https://github.com/cozy-labs/cozy-desktop/releases/tag/v3.4.4-beta.1), [3.4.4-beta.2](https://github.com/cozy-labs/cozy-desktop/releases/tag/v3.4.4-beta.2) and
[3.4.3-beta.3](https://github.com/cozy-labs/cozy-desktop/releases/tag/v3.4.4-beta.3).


See also [known issues](https://github.com/cozy-labs/cozy-desktop/blob/master/KNOWN_ISSUES.md).

Happy syncing!


## 3.4.4-beta.3 - 2018-02-20

Improvements for all users:

- We added more traces and test cases to help us fix popover positioning issues.
  Please send us a message from the app in case you encounter an issue, so we
  can get your traces and understand your specific case.

Improvements for macOS users:

- Make sure the popover at least shows up to the top right when the reported
  tray icon position is broken (as it seems to happen from time to time).

Improvements for GNOME 3 + Wayland users:

- Show the popover near the top icon, not at the bottom of the screen.

Improvements for KDE users:

- Fix issue preventing the popover to show up when clicking the systray icon
  on KDE (@hleroy)

Improvements for developers & contributors:

- Use unique user agent per client instance, so we can know how many people are
  actually using it.
- Instructions to set up a development environment on Ubuntu (@hleroy)


## 3.4.4-beta.2 - 2018-02-15

Improvements for all users:

- The remaining files counter didn't update anymore when encountering a
  synchronization error. Everything should work as expected now.
- We also fixed a couple of issues regarding the popover positioning. It should
  now properly detect the systray position and orientation. Please tell us in
  case the popover still shows up at weird locations on your desktop.
- We were using a temporary fix for some third-party component to make sure
  auto-update was working on Windows. The issue was fixed upstream and the
  component upgraded. Please tell us in case you still encounter auto-update
  issues, especially on Windows.

See also [known issues](https://github.com/cozy-labs/cozy-desktop/blob/master/KNOWN_ISSUES.md).

Happy syncing!

## 3.4.4-beta.1 - 2018-02-12

Improvements for all users:

- When creating a folder with some platform-incompatible character in the name
  (e.g. `:`), then renaming to a valid name, its content is now correctly synchronized.

See also [known issues](https://github.com/cozy-labs/cozy-desktop/blob/master/KNOWN_ISSUES.md).

Happy syncing!

## 3.4.3 - 2018-02-12

Improvements for all users:

- Added more logs to better debug performance and compatibilities issues.
- All improvements from [3.4.3-beta.1](https://github.com/cozy-labs/cozy-desktop/releases/tag/3.4.3-beta.1)

See also [known issues](https://github.com/cozy-labs/cozy-desktop/blob/master/KNOWN_ISSUES.md).

Happy syncing!

## 3.4.3-beta.1 - 2018-02-01

Improvements for all users:

- During onboarding, you can now copy whatever URL from your browser pointing to
  your **Cozy-hosted** instance and paste it as your Cozy address in the
  configuration window. When submitted, the application will identify the
  corresponding Cozy address and remove the useless parts for you. Please tell
  us in case you find an URL that doesn't work. Also please note that there is
  no such automation for self-hosted users for now.
- You'll get quicker visual feedback when trying to select a non-empty directory
  as your synced location.
- In some rare cases, users ended up with a few files improperly uploaded to
  their Cozy. Those files were never considered up-to-date by the app,
  triggering useless synchronization cycles. They will now be detected and not
  synchronized indefinitely. Final work to improve upload reliability is planned
  for week 7 or 8.
- Support requests sent from the help form will now include more debugging and
  benchmarking information (including the application & OS versions). Please
  note debugging information only include filenames as usual, and benchmarking
  information only include time spent on various operations. This will help us
  to improve the overall performances.
- The documentation now lists the supported
  [Windows](https://github.com/cozy-labs/cozy-desktop/blob/master/doc/usage/windows.md)
  and [macOS](https://github.com/cozy-labs/cozy-desktop/blob/master/doc/usage/macos.md)
  versions. Work was previously done on the
  [GNU/Linux](https://github.com/cozy-labs/cozy-desktop/blob/master/doc/usage/linux.md#supported-distributions)
  side.
- An issue was fixed were the application was trying to put the focus

Improvements for GNU/Linux users:

- The application now tries to detect and display a user-friendly message when
  the system glibc is too old to run properly. Please note we may possibly try
  to lower the bar regarding the required version at some point.

See also [known issues](https://github.com/cozy-labs/cozy-desktop/blob/master/KNOWN_ISSUES.md).

Happy syncing!

## 3.4.2 - 2018-01-24

Improvements for all users:

- Synchronization & a few performance improvements
- Starting the app when already running will show the popover
- The Cozy configuration should be more user-friendly (including automatic address correction)
- Better support for Windows/macOS workspaces
- And more... Please [see](https://github.com/cozy-labs/cozy-desktop/releases/tag/v3.4.2-beta.7) [the](https://github.com/cozy-labs/cozy-desktop/releases/tag/v3.4.2-beta.6) [beta](https://github.com/cozy-labs/cozy-desktop/releases/tag/v3.4.2-beta.5) [releases](https://github.com/cozy-labs/cozy-desktop/releases/tag/v3.4.2-beta.4) [for](https://github.com/cozy-labs/cozy-desktop/releases/tag/v3.4.2-beta.3) [more](https://github.com/cozy-labs/cozy-desktop/releases/tag/v3.4.2-beta.2) [details](https://github.com/cozy-labs/cozy-desktop/releases/tag/v3.4.2-beta.1).

See also [known issues](https://github.com/cozy-labs/cozy-desktop/blob/master/KNOWN_ISSUES.md).

Happy syncing!

## 3.4.2-beta.7 - 2018-01-24

Improvements for all users

- Improvements on synchronization, especially for moves or when changing files
  on both sides.

Improvements for early adopters with old Cozy instances:

- Recover when Cozy contains invalid data

Improvements for GNU/Linux users:

- We are progressively listing
  [supported distributions](https://github.com/cozy-labs/cozy-desktop/blob/master/doc/usage/linux.md#supported-distributions).

Improvements for developers:

- `yarn repl` works again, with useful `helpers`, also introduced `yarn cozy-stack`.

See [known issues](https://github.com/cozy-labs/cozy-desktop/blob/master/KNOWN_ISSUES.md).

Happy syncing!

## 3.4.2-beta.6 - 2018-01-22

Improvements for Unity users:

- You can now open the application from the tray icon.

Improvements for all users:

- Attempting to restart the application will open the popover.
- Improve the design of error case on Cozy address wizard step.
- Minimal performance improvements. More soon!

See [known issues](https://github.com/cozy-labs/cozy-desktop/blob/master/KNOWN_ISSUES.md).

Happy syncing!

## 3.4.2-beta.5 - 2018-01-22

Improvements for all users:

- To mitigate performance issues, we temporarily prevented choosing a non-empty
  directory to synchronize.
- Heuristic-based Cozy address correction

See [known issues](https://github.com/cozy-labs/cozy-desktop/blob/master/KNOWN_ISSUES.md).

Happy syncing!

## 3.4.2-beta.4 - 2018-01-19

Improvements for all users:

- The onboarding includes a few more improvements for people not familiar with URL.
- We fixed an issue that prevented disconnecting the app from the Cozy.

Improvements for Windows users:

- Files checksum computation will be retried a few times when file is busy.

See [known issues](https://github.com/cozy-labs/cozy-desktop/blob/master/KNOWN_ISSUES.md).

Happy syncing!

## 3.4.2-beta.3 - 2018-01-19

Improvements for all users:

- The app should now log and recover from remote files with an invalid parent
  directory. This issue was happening rarely and only on old Cozy instances.
- Showing up the popover near the systray could fail in rare cases for unknown
  reasons. We temporarily fixed the issue by falling back to showing the popover
  in the middle of the screen. Please send us a support request from the app in
  case it happens to you, so we can get all the information we were missing to
  fix it for good.

See [known issues](https://github.com/cozy-labs/cozy-desktop/blob/master/KNOWN_ISSUES.md).

Happy syncing!

## 3.4.2-beta.2 - 2018-01-18

Improvements for all users:

- The app now shows the popover on the current workspace.
- We fixed an edge case where moving files or folders before or after moving
  their source or destination was generating a conflict.
- We also fixed another case where a folder created or moved locally could end
  up with the wrong last modification date.

See [known issues](https://github.com/cozy-labs/cozy-desktop/blob/master/KNOWN_ISSUES.md).

Happy syncing!

## 3.4.2-beta.1 - 2018-01-18

Improvements for all users:

- It was possible in some specific cases to mess up the synchronization by
  moving around files & folders during the analysis phase. This is fixed now.
  Feel free to move everything around anytime :)
- In some cases, moving then immediately deleting a file was handled as 2
  distinct actions. The file is now directly detected as deleted.
- The Cozy address page shown during onboarding should now be clearer for people
  not familiar with URL.
- When disconnecting then reconnecting to your Cozy, you could eventually see
  your old files for a few seconds in the dashboard. The fix was published in
  an old minor release, but not properly integrated to the subsequent releases.
  This is fixed now.

Improvements for support team & developers:

- Support requests from the app are now sent to the usual support email.
- Code coverage is back

See [known issues](https://github.com/cozy-labs/cozy-desktop/blob/master/KNOWN_ISSUES.md).

Happy syncing!

## 3.4.1 - 2018-01-09

See [3.4.1-beta.1](https://github.com/cozy-labs/cozy-desktop/releases/tag/v3.4.1-beta.1)
and [3.4.1-beta.2](https://github.com/cozy-labs/cozy-desktop/releases/tag/v3.4.1-beta.2)
release notes.

Happy syncing!

## 3.4.1-beta.2 - 2018-01-09

Improvements for all users:

* Fix weird packaging issue ([detail](https://trello.com/c/QAOsWBCx))

Known issue for GNU/Linux users:

* The systray icon may appear twice (with only one icon actually working).
  Workaround: quit and restart. This should not happen on subsequent updates.

Happy syncing!

## 3.4.1-beta.1 - 2017-12-26

Improvements for all users:

* Deleting the synchronization folder will not trash all files on the cozy.

Changes for technical users (contributors, packagers, CLI users):

* Builds are now made in CI, which will allow us to quickly send patched versions for specific issues before they make it to the master, as well as quicker testing, so hopefully quicker releases.

See [known issues](https://github.com/cozy-labs/cozy-desktop/blob/master/KNOWN_ISSUES.md).

Happy syncing!

## 3.4.0 - 2017-12-19

Improvements for all users:

* The new quit button now appears busy once clicked.
* We added a missing french translation for the new message showing when
  selecting your whole system or personal folder to be synced.

Changes for technical users (contributors, packagers, CLI users):

* We moved to a new flat repository layout: single npm package, single runtime
  (electron), single node version (the electron one). This is a first step to
  make development easier and faster. The CLI & code coverage support are
  temporarily disabled. We should bring them back at some point, although the
  CLI will probably depend on the electron runtime for now.

See [known issues](https://github.com/cozy-labs/cozy-desktop/blob/master/KNOWN_ISSUES.md).

Happy syncing!

## 3.4.0-beta.2 - 2017-12-14

Improvements for GNU/Linux users:

* Auto-update works!
* Auto-launch on system startup too!
* The application should now be visible as expected on alt+tab.

Improvements for all users:

* Invalid cozy address detection was improved, including automatic detection of
  `mycoSy.cloud` with an `s` instead of `mycoZy.cloud` with a `z` (which seems
  to be a common mistake).
* The app also detects and prevent synchronizing your whole system or personal
  folder.
* Auto-update should be more reliable.
* The settings tab includes a new *quit* button.

See [known issues](https://github.com/cozy-labs/cozy-desktop/blob/master/KNOWN_ISSUES.md).

Happy syncing!

## 3.4.0-beta.1 - 2017-12-08

Improvements for GNU/Linux users:

* **First GNU/Linux release!**
* Download the `*.AppImage` file, move it wherever you want, make it executable
  and run it. See [details](https://github.com/cozy-labs/cozy-desktop/blob/master/doc/usage/linux.md).
* Since GNOME 3 doesn't have a systray anymore by default, you may need to
  install some third-party extension (e.g. TopIcons-Plus). See the
  [dedicated section](https://github.com/cozy-labs/cozy-desktop/blob/master/KNOWN_ISSUES.md#gnulinux-integration)
  for remaining GNU/Linux integration issues.

Improvements for macOS users:

* The previous 3.3.1 fix regarding application visibility only worked when you
  had not pinned the Cozy Drive application in the dock.
  This should always work from now. See the
  [dedicated section](https://github.com/cozy-labs/cozy-desktop/blob/master/KNOWN_ISSUES.md#macos-integration)
  for remaining macOS integration issues.

Improvements for all users:

* We upgraded a major third-party component of the application, which may fix
  a few bugs related to the user interface (including the application hanging
  when started multiple times).

See [known issues](https://github.com/cozy-labs/cozy-desktop/blob/master/KNOWN_ISSUES.md).

Happy syncing!

## 3.3.1 - 2017-11-30

Improvements for all users:

* The Cozy Drive app now tries to automatically detect and use any configured
  proxy (including authentication, i.e. Kerberos authentication shoud
  *just work*).
  We also added a few command-line options and environment variables to force
  the configuration as needed:
  - `--proxy-script path/to/your/script.pac` or
    `COZY_DRIVE_PROXY_SCRIPT=path/to/your/script.pac`
  - `--proxy-ntlm-domains '*example.com,*foobar.com,*baz'` or
    `COZY_DRIVE_PROXY_NTLM_DOMAINS='*example.com,*foobar.com,*baz'` to specify
    servers for which integrated authentication is enabled (use `'*'` for all
    servers).
  - `--login-by-realm 'realm1:login1:password1,realm2:login2:password2'` or
    `COZY_DRIVE_LOGIN_BY_REALM='realm1:login1:password1,realm2:login2:password2'`
    to pass credentials manually.
  - `--proxy-rules`, `--proxy-bypassrules`, `COZY_DRIVE_PROXY_RULES` and
    `COZY_DRIVE_PROXYBYPASSRULES` for specifying which proxy should be used in
    which case (see [details](https://github.com/electron/electron/blob/master/docs/api/session.md#sessetproxyconfig-callback)).
  Please tell us in case you still can't run the Cozy Drive app behind you
  proxy so we can support as many configurations as possible.
* We also fixed an edge case where simultaneous moves ended up with files in the
  Cozy / OS trash. Expect a few more fixes very soon.

Improvements for macOS users:

* The app is not visible anymore in the dock and with `Cmd+Tab` when running in
  the background or showing the popover from the systray. It now behaves more
  like other systray-running apps. Also expect a few more fixes regarding
  systray integration.

Happy syncing!

## 3.3.0 - 2017-11-24

Improvements for all users:

* Some miscellaneous style and translations fixes

See [known issues](https://github.com/cozy-labs/cozy-desktop/blob/master/KNOWN_ISSUES.md).

Happy syncing!

## 3.3.0-beta.1 - 2017-11-23

Improvements for all users:

* **Updates will now be detected automatically when starting Cozy Drive**.
  When an update is available, a splash screen will ask you to wait while
  downloading (including the download progress on Windows only) and the app
  will restart automatically. When no update is available, the app will start
  as usual. Since the update check is quite fast, we decided to display a
  splash screen only during download, not while checking. In case of network
  issues, the app may take more time to start than usual, but it should still
  work.
* **New revamped UI**: the dashboard window was replaced with a popover showing
  up next to the (new) system tray icon. The synchronization status on top of
  the popover should give you more indications about what is actually occurring
  in the background. Navigation was simplified and moved to the top of the
  popover and the help form now shows up in its own separate window.
* **Disconnecting the device from the Cozy or the app** should work as expected
  now. Also since most people encountering issues were trying to reconfigure
  their device, we made sure logs were not deleted anymore in the process.

See [known issues](https://github.com/cozy-labs/cozy-desktop/blob/master/KNOWN_ISSUES.md).

Happy syncing!

## 3.2.0-beta.2 - 2017-11-13

Improvements for all users:

* The synchronization now detects when remote files or directories were already
  deleted. [details](https://trello.com/c/wYoxynqg)
* The remote Cozy overloading guard was disabled so the app doesn't hold on in
  case of synchronization errors. An improved version will be reenabled later.
  [details](https://trello.com/c/SSi06JwO)
* The authorization screen should not be bigger than screen anymore.
  [details](https://trello.com/c/YrwWv2mm)
* Changing only case or encoding in a file or directory name won't trigger
  conflicts on other devices anymore. The case or encoding won't be synced
  though. We'll come up with a better solution at some point.
  [details](https://trello.com/c/krk8ZY9V)

See [known issues](https://github.com/cozy-labs/cozy-desktop/blob/master/KNOWN_ISSUES.md).

Happy syncing!

## 3.2.0-beta.1 - 2017-11-09

It took us some time, but we're almost there, finally!

Improvements for all users:

* Moving or renaming shared directories should not break the sharing anymore.
* Moving or renaming connector directories should work as expected (the
  connector will put upcoming documents to the new location instead of
  recreating and filling up the old one).
* Moving or renaming a directory should now be more reliable, even with
  filesystem events occurring in random order as it seems to happen from time to
  time.

See [known issues](https://github.com/cozy-labs/cozy-desktop/blob/master/KNOWN_ISSUES.md).

Happy syncing!

## 3.1.0 - 2017-09-08

Improvements for all users:

* Fixed the styling of the *Show more files* button in the *Dashboard* screen.
* The default content of the support request form should now be translated
  properly.

Happy syncing!

## 3.1.0-beta.1 - 2017-09-08

Hello there! Sorry for the summer delay, the team took some rest, and recently
we were quite busy working on some huge synchronization improvements, but
that's for another story. So let's get back to the current release...

Improvements for all users:

* The onboarding (the successive screens where you configure Cozy Drive for
  Desktop on first launch) now follows the new Cozy v3 design guidelines and
  wording. The other screens were mostly updated too, especially the settings
  which were merged into a single tab. In future releases, the tabs should
  move to the top and we should progressively transition to a new popover
  layout sticking to your systray, instead of the current floating window.
  Some screens will still make use of a separate windows when relevant
  (e.g. the *Help* one).
* We also enlarged the Cozy login screen, the authorization screen (were you
  allow the Cozy Drive for Desktop app to access the data in your Cozy) and
  the Dashboard screen (the one showing recent updates). In case your display
  has a small resolution, the app should not exceed the available space and
  fall back to scrolling.
* The disk space gauge should now effectively match the available space.
* The app was occasionnaly crashing on startup with a weird *db Lock* error.
  This should not happen anymore. Please shout out loud in case it still does
  for you.
* We fixed an issue that was preventing errors to be properly notified
  when sending a support request from the *Help* screen. We also made sure
  that a favorite creation failure would not block the application.
* We now have traces of failures for almost everything in the app except for
  upgrades (which unfortunately seemed to be the source of issues recently, so
  we'll probably add it too). This should help us fix issues regarding the
  onboarding step for example.
* We also added some missing translations.
* Last but not least we added the hopefully last missing checks to detect
  conflicts while trashing/deleting folders from the Cozy.

Improvements for Windows users:

* Once configured, the app now adds a favorite to Windows 7 and Windows 8.x
  explorer.
* While uploading files from a Windows device, missing folders creation was
  failing. This is fixed now.
* We changed the way we hide some special folders on Windows. We extensively
  checked it was working as usual on every supported Windows version, so this
  should not be visible in any way for you. But in case you still start seing
  some weird `.cozy-desktop` or `.system-tmp-cozy-drive` directories, please
  tell us.

Happy syncing!

## 3.0.1 - 2017-07-31

Improvements for all users:

* When creating folders and uploading files on the remote Cozy, sometimes the
  parent folder doesn't exist yet. This case didn't occur before the 3.0.0
  release and it didn't happen during the release testing, so we were not
  handling it correctly. The issue is fixed now. We apologize for the
  inconvenience.

Happy syncing!

## 3.0.0 - 2017-07-31

Improvements for all users:

* We improved support for unicode filenames for files already in your synchronization folder before starting cozy-drive
* Moved folders on your computer does not fill your cozy's trash.
* We fixed an issue preventing conflict resolution for a folder trashed on one side while content was added on the other side

Improvements for Windows users:

* When you first register your computer on the Cozy, the app will add your Cozy Drive folder to the Windows Explorer sidebar
* Both the installer and the application should now work on 32-bit Windows.

Happy syncing!

## 3.0.0-beta.6 - 2017-07-11

Improvements for Windows users:

* The Windows 10 cloud storage registration was disabled because it was not
  stable enough yet. This means you won't get the `Cozy Drive` shortcut in
  the Windows Explorer sidebar, near the OneDrive one. We'll come up with
  another solution, possibly compatible with older Windows releases.
  Please contact us in case you get stuck with broken shortcut(s) in your
  sidebar, we'll help you to fix it. We apologize for the inconvenience.

Happy syncing!

## 3.0.0-beta.5 - 2017-07-10

Improvements for all users:

* **The application was renamed to Cozy Drive!**
* Deleted files and folders on Cozy are now correctly synchronized on your
  computer.
* An infinite synchronization issue between multiple devices was fixed.
* Network load is now smaller when retrieving changes from the remote Cozy.
* Most useless copies of folders should not end up in the Windows recycle bin,
  the macOS trash or the Cozy trash anymore. Some issues remain though.
* Useless conflicts for trashed files/folders won't happen anymore (this was
  only visible in logs).
* Documentation was updated.
* Some typos in the french locale were fixed.
* We started adding more automated tests to prevent regressions and ensure a
  better quality for future releases.

## 3.0.0-beta.4 - 2017-06-12

Improvements for Windows 10 users:

* When you first register your computer on the Cozy, the app will add your
  Cozy Drive folder to the Windows Explorer sidebar (near the OneDrive one).
  If you disconnect from the settings, the sidebar shortcut will be removed.

Improvements for macOS users:

* When you first register your computer on the Cozy, the app will add your
  Cozy Drive folder to the Finder favorites. It will still have a normal
  folder icon though (same as the real folder).
  Also the favorite will not be removed when you disconnect. You can still
  easily remove it by hand.
  These small details should be fixed soon.
* The app will synchronize macOS folders without their custom icons (those
  are stored in hidden files with weird character in their name, which is
  not supported by the Cozy at the moment, and was triggering synchronization
  errors).

Improvements for all users:

* The temporary .cozy-desktop folder inside your Cozy Drive one was renamed
  to .system-tmp-cozy-desktop, to make sure even people displaying hidden
  files in their file browser won't try to put files in it and expect them
  to be synchronized.
* Logging improvements (for debugging purpose)

Happy syncing!

## 3.0.0-beta.3 - 2017-06-02

This is for testing purpose only.
Do not install it, unless you know what you're doing.

Improvements for all users:

* You can now request support directly from the application.
* On the onboarding screen, you'll be warned in case you typed your email
  address instead of the address of your Cozy.
* The app will now start by default on login. You can still disable it in the
  settings.
* The activity indicator is now visible on deletions.
* Links are now opened in a new windows, so users don't end up with no way to
  get back.
* The content of a folder renamed offline will not be uploaded again.
* When a file was both updated locally and trashed remotely, it will be kept
  with the updated content.
* The app now enforces MD5Sum for all files, to ensure data consistency and to
  prevent weird issues.
* Disk space and revocation error messages should be clearer.
* Logs are easier to filter, which should help us to debug synchronization
  issues.

Improvements for Windows users:

* You should not see weird `.cozy-desktop` directories anymore (including in
  your home and your `Cozy Drive` directories).
* Fixed an issue with last modification date, which was preventing a file first
  uploaded through the Cozy Drive web app, then renamed locally, to be synced.

## 3.0.0-beta.2 - 2017-05-17

This is for testing purpose only.
Do not install it, unless you know what you're doing.

Improvements for all platforms:

* When an update was available, the app used to display the version number and
  the release notes in the Settings. This was broken while migrating to the new
  auto-update system. The issue is partially fixed, but it only shows the
  summary instead of the full release notes for now.
* The auto-update migration also revealed another issue: the app was checking
  for updates every 1 or 2 minutes, triggering successive downloads of the
  latest release. This should work as expected now.

Improvements for Windows users:

* The app was not downloading updates from the appropriate location on Windows
  (while it was working on other platforms). This was fixed too.

Happy syncing!

## 3.0.0-beta.1 - 2017-05-15

This is for testing purpose only.
Do not install it, unless you know what you're doing.

Improvements for all platforms:

* A beta release! Although some cases remain where synchronization breaks, it
  mostly works on all 3 platforms. Please report every issue!
* Switching to beta was good timing to change the version number format, which
  should finally fix the last auto-updates issue.
* The app will detect and prevent synchronization of files/folders with
  paths/names too long for your system, so you never end up with unusable
  content on your hard drive.
* When starting Cozy Desktop, it will detect an already running instance of the
  app, make it visible and exit (instead of displaying a weird error message).

Improvements for Windows users:

* The app now detects and displays using the user language.

Happy syncing!

## 3.0.0-alpha5 - 2017-05-11

This is for testing purpose only.
Do not install it, unless you know what you're doing.

Improvements for all platforms:

* A new auto-updates system which should work better on both Windows and macOS
* Fixed an issue preventing a locally renamed file to be updated on the remote
  Cozy

Improvements for Windows users:

* The weird animation that was displayed while installing the app since the
  alpha4 release should be replaced with a normal install dialog.

Finally, we would like to apologize to our Windows users, since auto-updates
actually didn't work in the alpha4 release. This should be fixed now. Thanks
for your patience.

Happy syncing!

## 3.0.0-alpha4 - 2017-05-09

This is for testing purpose only.
Do not install it, unless you know what you're doing.

Improvements for all platforms:

* Files are now synchronized to your *Cozy Drive* folder (to better match the
  *Cozy Drive* app name). If your already had a *Cozy* folder set up,
  *Cozy Desktop* will continue to use it. If you want to switch to the new
  folder, you can disconnect from your Cozy in the Settings, rename your local
  *Cozy* folder to *Cozy Drive* (so you don't need to download everything
  again), then restart *Cozy Desktop*, register and use the new folder.
* Your computer now appears in your Cozy as *Cozy Drive (your computer name)*.

Improvements for Windows users:

* Installer and app are signed now, which should prevent warnings and allow
  us to support automatic updates. Since we use a standard certificate (not
  one with Extended Validation), you'll still get a confirmation popup at
  install time, until the app gets enough reputation in Microsoft SmartScreen
  (the anti-phishing system included in Windows 8 and later).
* This release (and upcoming ones) should now support automatic updates. But
  previous releases didn't, so you'll still have to download and install this
  one by hand.
* A third-party component used by *Cozy Desktop* to monitor your local folder
  was updated, fixing some issues on Windows.

Happy syncing!

## 3.0.0-alpha3 - 2017-05-05

This is for testing purpose only.
Do not install it, unless you know what you're doing.

Improvements for all platforms:

* Restoring a folder from the Cozy trash is now supported.
* We fixed some conflict resolution issues. Creating / changing / restoring
  files with the same name should be more reliable now. Some issues remain,
  though.
* Most offline actions should work now, except for deletions.

Improvements for Windows users:

* A release! Getting a code signing certificate took more time than expected,
  though, so the app is not signed yet. This should be fixed in the next one.
* Windows file/dir paths are now supported, making the synchronization usable,
  hence the release.
* Files and folders with reserved name, reserved characters or terminating
  characters will not be synchronized locally and user will be warned.

Improvements for macOS users:

* The dock icon is now hidden when closing the Cozy Desktop window, so you
  don't see it with cmd-tab when running in background
* Files and folders with colon in their name will not be synchronized locally
  and user will be warned of this character as being reserved on macOS

## 3.0.0-alpha2 - 2017-04-24

This is for testing purpose only.
Do not install it, unless you know what you're doing.

* Improve macOS packaging
* Improve conflict management
* Improve error management
* Improve log report
* Improve Windows support


## 3.0.0-alpha1 - 2017-04-14

This is for testing purpose only.
Do not install it, unless you know what you're doing.
Please note that future releases will only support the new Cozy stack v3.

## Previous releases

* Proof of concept

[KNOWN_ISSUES.md]: https://github.com/cozy-labs/cozy-desktop/blob/master/KNOWN_ISSUES.md
[3.7.0-beta.1]: https://github.com/cozy-labs/cozy-desktop/releases/tag/v3.7.0-beta.1
[3.7.0-beta.2]: https://github.com/cozy-labs/cozy-desktop/releases/tag/v3.7.0-beta.2
[3.7.0-beta.3]: https://github.com/cozy-labs/cozy-desktop/releases/tag/v3.7.0-beta.3
[3.8.0-beta.1]: https://github.com/cozy-labs/cozy-desktop/releases/v3.8.0-beta.1
