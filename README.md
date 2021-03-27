## obsidian-tabs
### css snippet for tabbed obsidian browsing


[Watch the demo.](https://i.imgur.com/7V0m2Ub.mp4)


[Get the snippet.](https://github.com/gitobsidiantutorial/obsidian-tabs/blob/main/tabs.css)

Tabbed mode is made to be used in unison with the [pane relief plugin](https://github.com/pjeby/pane-relief), in particular the cycle to workspace pane hotkeys, but can certainly be used without.


#### Features: 

- Click on tab to bring in focus

- Automatic hiding of the tab bar when only one pane is focussed

- Smaller tab styling relative to main pane (optional)

- Limited width left aligned tabs (optional)

- Hide buttons on unfocussed tabs for more title visibility (optional)

 - The next tab to be brought up by ctrl+tab is the first one that is underlined. Inversely, the last tab that is **not** underlined is the one that is focussed on by ctrl+shift+tab. (optional)


#### Issues:

- When the first pane is focussed on, **no** tabs are underlined. The tab that will be focussed on by pressing ctrl+tab is the left-most one.

- Doesn't work with split view.

- The focussed tab doesn't appear in the tab overview, hence the underlining workaround to clarify its relative position.

- Tab bar can be hidden by the maximise pane plugin, but the focussed pane does not occupy the freed space.

#### Usage:
I recommend saving the snippet with a number or underscore in the front, so you can quickly toggle it on and off.
