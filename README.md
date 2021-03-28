## Obsidian-tabs
### CSS snippet for tabbed obsidian usage


[Watch the demo.](https://i.imgur.com/7V0m2Ub.mp4)


[Get the snippet.](https://raw.githubusercontent.com/gitobsidiantutorial/obsidian-tabs/main/tabs.css)

Tabbed mode is made to be used in unison with the [pane relief plugin](https://github.com/pjeby/pane-relief), in particular the _cycle to workspace pane_ hotkeys, but can certainly be used without.


#### Features: 

- Click on tab to bring in focus

- Numbering of tabs for usage with the pane relief jump to pane number hotkeys (up to 20)

- Automatic hiding of the tab bar when only one pane is open

- Smaller tab styling relative to main pane (optional)

- Maximum width left aligned tabs (optional)

- Hide buttons on unfocused tabs for more title visibility (optional)

 - The next tab to be brought up by ctrl+tab is the underlined tab. Inversely, the tab to the left of the underlined tab is the tab brought into focus by ctrl+shift+tab. (optional)


#### Issues:

- When the last pane is focused on, **no** tabs are underlined. The tab that will be focused on by pressing ctrl+tab is the left-most one.

- Doesn't work with split view.

- The focused tab doesn't appear in the tab overview, hence the underlining workaround to clarify its relative position.

- Tab bar can be hidden by the maximise pane plugin, but the focused pane does not occupy the freed space.

#### Usage:

I recommend saving the snippet with a number or underscore in the front, so you can quickly toggle it on and off.

Comment out or remove optional sections of the snippet if they do not apply to your use case.

[Visual guide to snippet usage.](https://i.imgur.com/aB3eMRn.mp4)
