# InstallComputer

## Install Ubuntu 20.04.4 LTS from DVD

- Plug computer to power.
- Check that power led lights.
- Plug external DVD reader having Ubuntu 20.04.4 LTS disk within.
- Power on computer.
- Hit boot selection menu key (F12) until the menu display.
- Make (Ctrl + C) to avoid the first data integrity check.
- Make a full install on the harddrive.

## Customize prompt
You've got sample in HOME/.bashrc
[.bashrc customized lines](https://github.com/jlemanjs/InstallComputer/blob/11812da87ac28ad520095f5327a8baa0aeba52a5/HOME/.bashrc#L58-L70)

## Connection github throught limited internet connection
You've got sample in .ssh/config

## Firefox customization

browser.tabs.insertAfterCurrent true
browser.ctrlTab.sortByRecentlyUsed true
toolkit.legacyUserProfileCustomizations.stylesheets true

## Visual Studio Code

Exclude search files :
``dist/*,node_modules/*,client/dist/*``

## Copy files for an other PC
### Install open ssh server on source PC
``sudo apt install openssh-server``
### Copy files from source home folder to local backup folder
``rsync -avzh --stats --progress sourceUserName@sourceIP:~/ ./``
