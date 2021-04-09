import { Plugin, App, Workspace, PluginSettingTab, Setting } from "obsidian";

export default class TabbedView extends Plugin {



async onload() {
  this.settings = await this.loadData() || new TabSettings();
  this.addSettingTab(new TabSettingTab(this.app, this));
  this.registerEvent(this.app.workspace.on('layout-change', this.handleTabs));
  this.registerEvent(this.app.workspace.on('active-leaf-change', this.handleOpen));
  this.addStyle();
  this.refresh()  
};

addStyle() {
  // add a css block for our settings-dependent styles
  const css = document.createElement('style');
  css.id = 'minimal-theme';
  document.getElementsByTagName("head")[0].appendChild(css);

  // update the style with the settings-dependent styles
  this.updateStyle();
}



removeStyle() {
  document.body.removeClass('minimal-light','minimal-light-tonal','minimal-light-contrast','minimal-light-white','minimal-dark','minimal-dark-tonal','minimal-dark-black');
}

updateStyle() {
    this.removeStyle();
    document.body.classList.toggle('rowoverflow', this.settings.RowOverflow);
    document.body.classList.toggle('horizontal-to-vertical', this.settings.HorizontalToVertical);
    document.body.classList.toggle('hide-buttons', this.settings.HideButtons);
    document.body.classList.toggle('small-title', this.settings.SmallTitle);
    document.body.classList.toggle('compact-title', this.settings.CompactTitle);
    document.body.classList.toggle('tab-numbering', this.settings.TabNumbering);
    document.body.classList.toggle('tab-underline', this.settings.TabUnderline);

    if (Number.isNaN(this.settings.HeaderHeight)) {
    document.querySelector(':root').style.setProperty('--headerheight','29px');
    }
    else {
    document.querySelector(':root').style.setProperty('--headerheight', this.settings.HeaderHeight+'px');
    }
  };

refresh() {
  // re-load the style
  this.updateStyle()
  };

//remove class when plugin is disabled
onunload() {
let unloadCleaner = Array.from(document.querySelectorAll('.stayopen'));
  unloadCleaner.forEach(node => {
    node.removeClass('stayopen');
  });
  };

handleOpen() {
let removeopen = Array.from(app.workspace.activeLeaf.containerEl.parentNode.children); //remove class from siblings of active pane, but intentionally not from all 
  removeopen.forEach(node => {
    node.removeClass('stayopen');
  });
app.workspace.activeLeaf.containerEl.addClass('stayopen');

  };

handleTabs() {
let opentabs1 = app.workspace.rootSplit.containerEl.children.length;
let modverticalselector = app.workspace.rootSplit.containerEl.querySelector('.mod-vertical');
if (modverticalselector !== null) {
  var opentabs2 = modverticalselector.children.length);
}
else {
  var opentabs2 = 0;
}
let tabwidth = Math.max(opentabs1,opentabs2) - 1;
document.querySelector(':root').style.setProperty('--jstabs', tabwidth);

if (tabwidth > 7) {
document.querySelector(':root').style.setProperty('--rowsjs', 2);
} 
else {
document.querySelector(':root').style.removeProperty('--rowsjs');
}
  };

class TabSettings {
  RowOverflow: boolean = true;
  HorizontalToVertical: boolean = false;
  HideButtons: boolean = false;
  SmallTitle: boolean = false;
  CompactTitle: boolean = false;
  TabNumbering: boolean = false;
  HeaderHeight: number = 29;
  TabUnderline: boolean = false;
}

class TabSettingTab extends PluginSettingTab {


  plugin: TabView;
  constructor(app: App, plugin: TabView) {
    super(app, plugin);
    this.plugin = plugin;
  }

  display(): void {
    let {containerEl} = this;

    containerEl.empty();
    containerEl.createEl('h3', {text: 'Tabbed View Settings'});

    new Setting(containerEl)
      .setName('Two Row Tab Overview')
      .setDesc('When sufficient tabs have been opened, display tabs in two rows.')
      .addToggle(toggle => toggle.setValue(this.plugin.settings.RowOverflow)
          .onChange((value) => {
            this.plugin.settings.RowOverflow = value;
            this.plugin.saveData(this.plugin.settings);
            this.plugin.refresh();
            })
    );

    new Setting(containerEl)
      .setName('Tab Height')
      .setDesc('Sets the height of tabs and leaf headers (default 29).')
      .addText(text => text.setPlaceholder('29')
        .setValue((this.plugin.settings.HeaderHeight || '') + '')
        .onChange((value) => {
          this.plugin.settings.HeaderHeight = parseInt(value.trim());
          this.plugin.saveData(this.plugin.settings);
          this.plugin.refresh();
          })
    );

    new Setting(containerEl)
      .setName('Horizontal Splits')
      .setDesc('Enable to make \'horizontal\' splits properly horizontal. Handy for resizing the tabbed split when in side-by-side view.')
      .addToggle(toggle => toggle.setValue(this.plugin.settings.HorizontalToVertical)
          .onChange((value) => {
            this.plugin.settings.HorizontalToVertical = value;
            this.plugin.saveData(this.plugin.settings);
            this.plugin.refresh();
            })
    );
    new Setting(containerEl)
      .setName('Show Tab Buttons')
      .setDesc('Enable to show tab buttons.')
      .addToggle(toggle => toggle.setValue(this.plugin.settings.HideButtons)
          .onChange((value) => {
            this.plugin.settings.HideButtons = value;
            this.plugin.saveData(this.plugin.settings);
            this.plugin.refresh();
            })
    );
    new Setting(containerEl)
      .setName('Full sized title text')
      .setDesc('Enable full sized title text.')
      .addToggle(toggle => toggle.setValue(this.plugin.settings.SmallTitle)
          .onChange((value) => {
            this.plugin.settings.SmallTitle = value;
            this.plugin.saveData(this.plugin.settings);
            this.plugin.refresh();
            })
    );
    new Setting(containerEl)
      .setName('Full tab spacing.')
      .setDesc('Enable for default tab button spacing.')
      .addToggle(toggle => toggle.setValue(this.plugin.settings.CompactTitle)
          .onChange((value) => {
            this.plugin.settings.CompactTitle = value;
            this.plugin.saveData(this.plugin.settings);
            this.plugin.refresh();
            })
    );

    containerEl.createEl('h4', {text: 'Pane Relief Specific Settings'});    

    new Setting(containerEl)
      .setName('Remove Tab Numbers')
      .setDesc('By default, tabs are numbered, for ease of use with Pane Relief.')
      .addToggle(toggle => toggle.setValue(this.plugin.settings.TabNumbering)
          .onChange((value) => {
            this.plugin.settings.TabNumbering = value;
            this.plugin.saveData(this.plugin.settings);
            this.plugin.refresh();
            })
    );
    new Setting(containerEl)
      .setName('Remove Tab Underline')
      .setDesc('By default, the next tab is underlined, for ease of use with Pane Relief.')
      .addToggle(toggle => toggle.setValue(this.plugin.settings.TabUnderline)
          .onChange((value) => {
            this.plugin.settings.TabUnderline = value;
            this.plugin.saveData(this.plugin.settings);
            this.plugin.refresh();
            })
    );


  }
  }