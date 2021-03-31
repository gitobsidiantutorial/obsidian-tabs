## Obsidian-tabs
### CSS snippet for tabbed obsidian usage
Opening a document in a new pane (ctrl+click) instead activates tabbed view. One document is visible in the viewer, and the active document can be switched by selecting another tab.

[Watch the demo.](https://i.imgur.com/7V0m2Ub.mp4)


[Get the snippet.](https://raw.githubusercontent.com/gitobsidiantutorial/obsidian-tabs/main/tabs.css)

Tabbed mode is made to be used in unison with the [pane relief plugin](https://github.com/pjeby/pane-relief), and the [maximise pane plugin](https://github.com/deathau/maximise-active-pane-obsidian) in particular the _cycle to workspace pane_ hotkeys, but can certainly be used without.


#### Features: 

- Click on tab to bring in focus

- Numbering of tabs for usage with the pane relief jump to pane number hotkeys

- Automatic hiding of the tab bar when only one pane is open

- Fully compatible with the [maximise pane plugin](https://github.com/deathau/maximise-active-pane-obsidian)

- Smaller tab styling relative to main pane (optional)

- Hide buttons on unfocused tabs for more title visibility (optional)

 - The next tab to be brought up by ctrl+tab is the underlined tab. Inversely, the tab to the left of the underlined tab is the tab brought into focus by ctrl+shift+tab. (optional)

- Side by side view \[[demo](https://i.imgur.com/uQ7L8Jt.mp4) and [instructions](#using-split-view)\]

- Ongoing efforts to maximise [theme compatibility](theme-compatibility) through compatches.


#### Issues:

- When the last pane is focused on, **no** tabs are underlined. The tab that will be focused on by pressing ctrl+tab is the left-most one.

- Doesn't work with split view. [partially fixed!] A tab still cannot be horizontally split however.

- The focused tab doesn't appear in the tab overview, hence the underlining workaround to clarify its relative position.

- When in side-by-side view, focusing on the side tab shrinks the tabbed pane. This issue cannot be fixed purely with css, unfortunately.

- Multiple tabbed panes side by side is possible, but not very useful due to the auto-collapsing behaviour described above

- The order of operations must be respected when setting a split view, it is not possible to create split view when already in tabbed mode.

- The backlinks in pane plugin causes strange behaviour with Pane Relief. This is not cause by the css.



#### Usage:

I recommend saving the snippet with a number or underscore in the front, so you can quickly toggle it on and off.

Comment out or remove optional sections of the snippet if they do not apply to your use case.

[Visual guide to snippet usage.](https://i.imgur.com/aB3eMRn.mp4)

##### Using split view
Split the only pane of a one pane workspace horizontally. Split the left pane (you can split the right one if you're not using the pane relief plugin) vertically.

[Example of split view usage](https://i.imgur.com/lStwTNI.mp4). A tab has been linked to the pane on the right, to make changing its contents easier. The maximise pane plugin is used when only one document needs focusing on.

[Adjusting the the size of the reference panes](https://i.imgur.com/5GCrNHU.mp4). Disable the snippet, adjust the horizontal splits, and then re-enable the snippet.


#### Theme compatibility
Please notify me through the [issues feature](https://github.com/gitobsidiantutorial/obsidian-tabs/issues) whether a theme conflicts with the css of this snippet. If I can find an easy solution, I will share a compatch as an extra snippet which must also be enabled when using that theme.

- Minimal Theme by Kepano
  - [Compatch available](https://raw.githubusercontent.com/gitobsidiantutorial/obsidian-tabs/main/compatch_minimal_theme.css)
