.mod-root.workspace-split.mod-vertical .workspace-split.mod-vertical > div.workspace-leaf.mod-active .view-header-icon,
.mod-root.workspace-split.mod-vertical > div.workspace-leaf.mod-active .view-header-icon {
    background-color: transparent!important;
}

.mod-root.workspace-split.mod-vertical .workspace-split.mod-vertical > div.workspace-leaf.mod-active .view-header-title::before,
.mod-root.workspace-split.mod-vertical > div.workspace-leaf.mod-active .view-header-title::before {
    background-color: transparent!important;
}

.mod-root.workspace-split.mod-vertical .workspace-split.mod-vertical > div.workspace-leaf > .workspace-leaf-content > .view-header .view-header-title::before,
.mod-root.workspace-split.mod-vertical > div.workspace-leaf > .workspace-leaf-content > .view-header .view-header-title::before{
    background-color: transparent!important;
}

.mod-root.workspace-split.mod-vertical .workspace-split.mod-vertical > div.workspace-leaf:not(.stayopen),
.mod-root.workspace-split.mod-vertical > div.workspace-leaf:not(.stayopen){ 
border-radius: 0px 0px 0px 0px!important;
border:0!important; 
border-bottom: 1px solid var(--background-modifier-border)!important;
}

.mod-root.workspace-split.mod-vertical .workspace-split.mod-vertical > div.workspace-leaf:not(.mod-active),
.mod-root.workspace-split.mod-vertical > div.workspace-leaf:not(.mod-active){ 
border-right: 1px solid var(--background-modifier-border)!important;
}

.mod-root.workspace-split.mod-vertical .workspace-split.mod-horizontal > .workspace-leaf:nth-of-type(n+1) {
    border-radius: 0px 0px 0px 0px;
    border-bottom: 0!important;
    border-top: 0!important;
    border-left: 1px solid var(--background-modifier-border)!important;
}

.mod-root.workspace-split.mod-vertical .workspace-split.mod-vertical > div.workspace-leaf.mod-active,
.mod-root.workspace-split.mod-vertical > div.workspace-leaf.mod-active {
border: 0!important;
border-radius: 0px 0px 0px 0px!important;
}

.mod-root.workspace-split.mod-vertical .view-header-title {
    line-height: calc(var(--headerheight) + 4px);
}

.mod-root.workspace-split.mod-vertical > .workspace-leaf hr.workspace-leaf-resize-handle,  .mod-root.workspace-split.mod-vertical .mod-vertical > .workspace-leaf hr.workspace-leaf-resize-handle {display:none}
