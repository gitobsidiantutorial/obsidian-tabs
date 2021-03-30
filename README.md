## Obsidian-tabs
### CSS snippet for tabbed obsidian usage
Opening a document in a new pane (ctrl+click) instead activates tabbed view. One document is visible in the viewer, and the active document can be switched by selecting another tab.

[Watch the demo.](https://i.imgur.com/7V0m2Ub.mp4)


[Get the snippet.](https://raw.githubusercontent.com/gitobsidiantutorial/obsidian-tabs/main/tabs.css)

Tabbed mode is made to be used in unison with the [pane relief plugin](https://github.com/pjeby/pane-relief), in particular the _cycle to workspace pane_ hotkeys, but can certainly be used without.


#### Features: 

- Click on tab to bring in focus

- Numbering of tabs for usage with the pane relief jump to pane number hotkeys (up to 20)

- Automatic hiding of the tab bar when only one pane is open

- Fully compatible with the maximise pane plugin 

- Smaller tab styling relative to main pane (optional)

- Maximum width left aligned tabs (optional)

- Hide buttons on unfocused tabs for more title visibility (optional)

 - The next tab to be brought up by ctrl+tab is the underlined tab. Inversely, the tab to the left of the underlined tab is the tab brought into focus by ctrl+shift+tab. (optional)

- Side by side view [demo](https://i.imgur.com/uQ7L8Jt.mp4) and [instructions](#using-split-view)


#### Issues:

- When the last pane is focused on, **no** tabs are underlined. The tab that will be focused on by pressing ctrl+tab is the left-most one.

- Doesn't work with split view. [partially fixed!] A tab still cannot be horizontally split however.

- The focused tab doesn't appear in the tab overview, hence the underlining workaround to clarify its relative position.

- When in side-by-side view, focusing on the side tab shrinks the tabbed views. This issue cannot be fixed purely with css, unfortunately.

- Multiple tab views side by side is possible, but not very useful due to the auto-collapsing behaviour described above



#### Usage:

I recommend saving the snippet with a number or underscore in the front, so you can quickly toggle it on and off.

Comment out or remove optional sections of the snippet if they do not apply to your use case.

[Visual guide to snippet usage.](https://i.imgur.com/aB3eMRn.mp4)

##### Using split view
Split the only pane of a one pane workspace horizontally. Split the left pane (you can split the right one if you're not using the pane relief plugin) vertically.
