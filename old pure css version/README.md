# Obsidian-tabs
### CSS snippet for tabbed obsidian usage
Opening a document in a new pane (ctrl+click) instead activates tabbed view. One document is visible in the viewer, and the active document can be switched by selecting another tab.

[Watch the demo.](https://i.imgur.com/oCRMNBn.mp4)


### Features: 
- Create tabs by opening new panes while in a vertical split, such as the default workspace configuration.

- Click on a tab in the tab overview to bring it in focus.

- Made for use with the [pane relief plugin](https://github.com/pjeby/pane-relief).

- Automatic hiding of the tab bar when only one pane is open

- Fully compatible with the [maximise pane plugin](https://github.com/deathau/maximise-active-pane-obsidian).

- When sufficient tabs have been opened, a [second row can be opened](https://i.imgur.com/iZJ5byx.mp4). (Optional)

- Smaller tab styling relative to main pane. (Optional)

- Hide buttons on unfocused tabs for more title visibility. (Optional)

 - The next tab to be brought up by ctrl+tab is the underlined tab. Inversely, the tab to the left of the underlined tab is the tab brought into focus by ctrl+shift+tab. (Optional)

- Side by side view \[[demo](https://raw.githubusercontent.com/gitobsidiantutorial/obsidian-tabs/main/vids/horizontalconfigure.webp) and [instructions](#using-split-view)\].

- Ongoing efforts to maximise [theme compatibility](#theme-compatibility) through compatches.


### Issues:
- When a session is ended with a side-by-side pane as the active pane, rather than a tab, the next session will have the tab view collapsed. Click on a tab to resolve this.

- When the last pane is focused on, **no** tabs are underlined. The tab that will be focused on by pressing ctrl+tab is the left-most one. This does not apply when side-by-side view is used.

- A tab cannot be horizontally split.

- The focused tab is taken out of the tab overview. Tab numbering and underlining are used to make Pane Relief shortcuts easier to use with this in mind.

- The order of operations must be respected when setting a split view, it is not possible to create a split view when already in tabbed mode.

- The backlinks in pane plugin causes unintended behaviour with Pane Relief. This is not caused by this plugin.

- A slight flicker is visible in the tab overview when opening new tabs or selecting a different tab.

If you have found an issue not listed here, ]feel free to document it](https://github.com/gitobsidiantutorial/obsidian-tabs/issues).



### Usage:
You can install the plugin via the Community Plugins tab within Obsidian.
#### Manual Installation
- Download the Latest Release from the Releases section.
- Extract the plugin folder from the archive to your vault's plugins folder: <vault>/.obsidian/plugins/
- Note: On some machines the .obsidian folder may be hidden.
- Reload Obsidian.
- Enable the plugin.

#### Using split view
[![video](https://raw.githubusercontent.com/gitobsidiantutorial/obsidian-tabs/main/vids/horizontalconfigure.webp)](https://raw.githubusercontent.com/gitobsidiantutorial/obsidian-tabs/main/vids/horizontalconfigure.webp)

Split the only pane of a one pane workspace horizontally. Split the left pane (you can split the right one if you're not using the pane relief plugin) vertically. Enable **Horizontal Splits** in the plugin settings to resize the panes in proportion to each other. After adjusting the pane size, you can disable the setting to resume vertical splitting.

[Example of split view usage](https://i.imgur.com/lStwTNI.mp4). A tab has been linked to the pane on the right, to make changing its contents easier. The maximise pane plugin is used when only one document needs focusing on.


### Theme compatibility
Please notify me through the [issues feature](https://github.com/gitobsidiantutorial/obsidian-tabs/issues) whether a theme conflicts with the css of this plugin. If I can find an easy solution, I will share a compatch as an extra snippet which must also be enabled when using that theme.

- Minimal Theme by Kepano
  - [Compatch available](https://raw.githubusercontent.com/gitobsidiantutorial/obsidian-tabs/main/compatch_minimal_theme.css)
- Cybertron Theme by Nickmilo
  - [Compatch available](https://raw.githubusercontent.com/gitobsidiantutorial/obsidian-tabs/main/compatch_cybertron_theme.css)
