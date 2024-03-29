import { Plugin, App, Workspace, PluginSettingTab, Setting } from "obsidian";
export default class TabbedView extends Plugin {
  settings: TabSettings;

  async onload() {
    await this.loadSettings();
    this.addSettingTab(new TabSettingTab(this.app, this));
    this.handleTabs=this.handleTabs.bind(this);
    this.handleOpen=this.handleOpen.bind(this);
    this.registerEvent(this.app.workspace.on("layout-change", this.handleTabs));
    this.registerEvent(
      this.app.workspace.on("active-leaf-change", this.handleOpen)
    );
    this.app.workspace.onLayoutReady(() => {
      this.startTabs();
      this.refresh();
    });
    this.addCommand({
      id: 'toggle-tabs',
      name: 'Toggle Obsidian Tabs',
      callback: () => {
        // switch the disabled setting and save
        this.settings.tabEnabled = !this.settings.tabEnabled;
        this.saveData(this.settings);

        // disable or enable as necessary
        this.refresh();
      }
    });
	this.addCommand({
                id: 'toggle-horizontal-splits',
                name: 'Toggle Proper Horizontal Splits',
                callback: () => {
                    // switch the disabled setting and save
                    this.settings.horizontalToVertical = !this.settings.horizontalToVertical;
                    this.saveData(this.settings);
                    // disable or enable as necessary
                    this.refresh();
                }
    });
  }
  async loadSettings() {
    this.settings = Object.assign(DEFAULT_SETTINGS, await this.loadData());
  }

  //prevent tabbed views besides the active pane from being collapsed on startup
  startTabs() {
    let childsplitfirsttab = Array.from(
      this.app.workspace.rootSplit.containerEl.querySelectorAll(
        ".mod-vertical .workspace-leaf:first-of-type"
      )
    );
    childsplitfirsttab.forEach((node) => {
      node.addClass("stayopen");
    });
  }

  removeStyle() {
    document.body.removeClass(
      "rowoverflow",
      "horizontal-to-vertical",
      "hide-buttons",
      "small-title",
      "compact-title",
      "tab-numbering",
      "tab-underline"
    );
    this.app.workspace.rootSplit.containerEl.style.removeProperty("--headerheight");
    this.app.workspace.rootSplit.containerEl.style.removeProperty("--jstabs");
    this.app.workspace.rootSplit.containerEl.style.removeProperty("--rowsjs");

    let childsplittabs = Array.from(
      this.app.workspace.rootSplit.containerEl.querySelectorAll(".mod-vertical")
    );
    childsplittabs.forEach((node) => {
      node.style.removeProperty("--rowsjs");
      node.style.removeProperty("--jstabs");
    });
  }

  updateStyle() {
    document.body.classList.toggle("rowoverflow", this.settings.rowOverflow);
    document.body.classList.toggle(
      "horizontal-to-vertical",
      this.settings.horizontalToVertical
    );
    document.body.classList.toggle("hide-buttons", this.settings.hideButtons);
    document.body.classList.toggle("small-title", this.settings.smallTitle);
    document.body.classList.toggle("compact-title", this.settings.compactTitle);
    document.body.classList.toggle("tab-numbering", this.settings.tabNumbering);
    document.body.classList.toggle("tab-underline", this.settings.tabUnderline);
    document.body.classList.toggle("plugin-tabs", this.settings.tabEnabled);
    this.handleOpen();
    this.handleTabs();
    this.app.workspace.rootSplit.containerEl.style.setProperty("--headerheight", this.settings.headerHeight + "px");
  }

  refresh() {
    // re-load the style
    this.removeStyle();
    this.updateStyle();
  }

  //remove class when plugin is disabled
  onunload() {
    this.removeStyle();
    let openedTabs = Array.from(
      this.app.workspace.rootSplit.containerEl.querySelectorAll(".stayopen")
    );
    openedTabs.forEach((node) => {
      node.removeClass("stayopen");
    });
  }

  handleOpen() {
		setTimeout(function(){
		if (this.app.workspace.activeLeaf) {
            let removeopen = Array.from(this.app.workspace.activeLeaf.containerEl.parentNode.children); //remove class from siblings of active pane, but intentionally not from all
            removeopen.forEach((node) => {
                node.removeClass("stayopen");
            });
            this.app.workspace.activeLeaf.containerEl.addClass("stayopen");
        }
		},110);
    }

  handleTabs() {
    function assignStylesToTab(tabparent) {
      let tabwidth = tabparent.children.length - 1;
      tabparent.style.setProperty("--jstabs", tabwidth);
      if (tabwidth > 7) {
        tabparent.style.setProperty("--rowsjs", 2);
      } else {
        tabparent.style.removeProperty("--rowsjs");
      }
    }

    let rootsplittabs = this.app.workspace.rootSplit.containerEl;
    assignStylesToTab(rootsplittabs);

    let childsplittabs = Array.from(
      this.app.workspace.rootSplit.containerEl.querySelectorAll(".mod-vertical")
    );
    childsplittabs.forEach(assignStylesToTab);
  }
}

interface TabSettings {
  tabEnabled: boolean;
  rowOverflow: boolean;
  horizontalToVertical: boolean;
  hideButtons: boolean;
  smallTitle: boolean;
  compactTitle: boolean;
  tabNumbering: boolean;
  tabUnderline: boolean;
  headerHeight: number;
}

const DEFAULT_SETTINGS: TabSettings = {
  tabEnabled: true,
  rowOverflow: false,
  horizontalToVertical: false,
  hideButtons: false,
  smallTitle: false,
  compactTitle: false,
  tabNumbering: true,
  tabUnderline: false,
  headerHeight: 29,
};

class TabSettingTab extends PluginSettingTab {
  plugin: TabbedView;
  constructor(app: App, plugin: TabbedView) {
    super(app, plugin);
    this.plugin = plugin;
  }

  display(): void {
    let { containerEl } = this;

    containerEl.empty();
    containerEl.createEl("h3", { text: "Obsidian Tabs Settings" });

    new Setting(containerEl)
      .setName("Enable Obsidian Tabs")
      .setDesc(
        "Toggle to enable or disable Obsidian Tabs."
      )
      .addToggle((toggle) =>
        toggle.setValue(this.plugin.settings.tabEnabled).onChange((value) => {
          this.plugin.settings.tabEnabled = value;
          this.plugin.saveData(this.plugin.settings);
          this.plugin.refresh();
        })
      );

    new Setting(containerEl)
      .setName("Two Row Tab Overview")
      .setDesc(
        "When sufficient tabs have been opened, display tabs in two rows."
      )
      .addToggle((toggle) =>
        toggle.setValue(this.plugin.settings.rowOverflow).onChange((value) => {
          this.plugin.settings.rowOverflow = value;
          this.plugin.saveData(this.plugin.settings);
          this.plugin.refresh();
        })
      );

    new Setting(containerEl)
      .setName("Tab Height")
      .setDesc("Sets the height of tabs and leaf headers (default 29).")
      .addText((text) =>
        text
          .setPlaceholder("29")
          .setValue((this.plugin.settings.headerHeight || "") + "")
          .onChange((value) => {
          let headerHeightTemp = parseInt(value.trim(),10);
          if (
            headerHeightTemp == null ||
            Number.isNaN(headerHeightTemp)
          ) {this.plugin.settings.headerHeight = DEFAULT_SETTINGS.headerHeight
          } else (
          this.plugin.settings.headerHeight = headerHeightTemp
          )            
            this.plugin.saveData(this.plugin.settings);
            this.plugin.refresh();
          })
      );

    new Setting(containerEl)
      .setName("Proper Horizontal Splits")
      .setDesc(
        "Enable to make 'horizontal' splits actually horizontal. Handy for resizing the tabbed split for side-by-side view."
      )
      .addToggle((toggle) =>
        toggle
          .setValue(this.plugin.settings.horizontalToVertical)
          .onChange((value) => {
            this.plugin.settings.horizontalToVertical = value;
            this.plugin.saveData(this.plugin.settings);
            this.plugin.refresh();
          })
      );
    new Setting(containerEl)
      .setName("Show Tab Buttons")
      .setDesc("Enable to show tab buttons.")
      .addToggle((toggle) =>
        toggle.setValue(this.plugin.settings.hideButtons).onChange((value) => {
          this.plugin.settings.hideButtons = value;
          this.plugin.saveData(this.plugin.settings);
          this.plugin.refresh();
        })
      );
    new Setting(containerEl)
      .setName("Full Sized Title Text")
      .setDesc("Enable full sized title text.")
      .addToggle((toggle) =>
        toggle.setValue(this.plugin.settings.smallTitle).onChange((value) => {
          this.plugin.settings.smallTitle = value;
          this.plugin.saveData(this.plugin.settings);
          this.plugin.refresh();
        })
      );
    new Setting(containerEl)
      .setName("Full Tab Spacing.")
      .setDesc("Enable for default tab button spacing.")
      .addToggle((toggle) =>
        toggle.setValue(this.plugin.settings.compactTitle).onChange((value) => {
          this.plugin.settings.compactTitle = value;
          this.plugin.saveData(this.plugin.settings);
          this.plugin.refresh();
        })
      );

    containerEl.createEl("h4", { text: "Pane Relief Specific Settings" });

    new Setting(containerEl)
      .setName("Remove Tab Numbers")
      .setDesc(
        "By default, tabs are numbered, for ease of use with Pane Relief."
      )
      .addToggle((toggle) =>
        toggle.setValue(this.plugin.settings.tabNumbering).onChange((value) => {
          this.plugin.settings.tabNumbering = value;
          this.plugin.saveData(this.plugin.settings);
          this.plugin.refresh();
        })
      );
    new Setting(containerEl)
      .setName("Remove Tab Underline")
      .setDesc(
        "By default, the next tab is underlined, for ease of use with Pane Relief."
      )
      .addToggle((toggle) =>
        toggle.setValue(this.plugin.settings.tabUnderline).onChange((value) => {
          this.plugin.settings.tabUnderline = value;
          this.plugin.saveData(this.plugin.settings);
          this.plugin.refresh();
        })
      );
  }
}
