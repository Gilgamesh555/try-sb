"use strict";(self.webpackChunk_koerber_uikit=self.webpackChunk_koerber_uikit||[]).push([[9440],{"./src/stories/components/tree/tree.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Tree_Multiple_Levels:()=>Tree_Multiple_Levels,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _utils__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/stories/utils.ts"),lit__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./src/stories/component-imports.ts"),__webpack_require__("./node_modules/lit/index.js"));const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Tree-Stories",component:"koerber-tree",argTypes:{}},Default={render:args=>{const treeHTML=`<koerber-tree ${(0,_utils__WEBPACK_IMPORTED_MODULE_0__.c)({args})}>\n<koerber-tree-item>\nDeciduous And Other Trees Available\n<koerber-button slot="actions" variant="ghost"><koerber-icon name="delete"></koerber-icon></koerber-button>\n<koerber-button slot="actions" variant="ghost"><koerber-icon name="pencil"></koerber-icon></koerber-button>\n<koerber-icon name="file" slot="support">chevron-right</koerber-icon>\n<koerber-tree-item>Birch</koerber-tree-item>\n<span slot="hint">3 files</span>\n<koerber-tree-item>\nMaple<koerber-tree-item>Birch</koerber-tree-item>\n<koerber-tree-item>Field maple</koerber-tree-item>\n<koerber-tree-item>Red maple</koerber-tree-item>\n<koerber-tree-item>Sugar maple</koerber-tree-item>\n</koerber-tree-item>\n<koerber-tree-item>Oak</koerber-tree-item>\n</koerber-tree-item>\n<koerber-tree-item>\nConiferous<koerber-tree-item>Cedar</koerber-tree-item>\n<koerber-tree-item>Pine</koerber-tree-item>\n<koerber-tree-item>Spruce</koerber-tree-item>\n</koerber-tree-item>\n<koerber-tree-item>\nNon-trees<koerber-tree-item>Bamboo</koerber-tree-item>\n<koerber-tree-item>Cactus</koerber-tree-item>\n<koerber-tree-item>Fern</koerber-tree-item>\n</koerber-tree-item>\n</koerber-tree>\n`;return(0,_utils__WEBPACK_IMPORTED_MODULE_0__.a)(treeHTML)},args:{},storyName:"Default"},Tree_Multiple_Levels={render:()=>lit__WEBPACK_IMPORTED_MODULE_2__.dy`
    <koerber-tree>
      <koerber-tree-item>
        Node 1
        <koerber-tree-item>
          Node 1.1
          <koerber-tree-item>Node 1.1.1</koerber-tree-item>
          <koerber-tree-item>Node 1.1.2</koerber-tree-item>
        </koerber-tree-item>
        <koerber-tree-item>
          Node 1.2
          <koerber-tree-item>Node 1.2.1</koerber-tree-item>
          <koerber-tree-item>Node 1.2.2</koerber-tree-item>
        </koerber-tree-item>
      </koerber-tree-item>
      <koerber-tree-item>
        Node 2
        <koerber-tree-item>
          Node 2.1
          <koerber-tree-item>Node 2.1.1</koerber-tree-item>
          <koerber-tree-item>Node 2.1.2</koerber-tree-item>
        </koerber-tree-item>
        <koerber-tree-item>
          Node 2.2
          <koerber-tree-item>Node 2.2.1</koerber-tree-item>
          <koerber-tree-item>Node 2.2.2</koerber-tree-item>
        </koerber-tree-item>
      </koerber-tree-item>
    </koerber-tree>
  `};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  render: args => {\n    const attributes = generateAttributes({\n      args\n    });\n    const treeHTML = `<koerber-tree ${attributes}>\n<koerber-tree-item>\nDeciduous And Other Trees Available\n<koerber-button slot="actions" variant="ghost"><koerber-icon name="delete"></koerber-icon></koerber-button>\n<koerber-button slot="actions" variant="ghost"><koerber-icon name="pencil"></koerber-icon></koerber-button>\n<koerber-icon name="file" slot="support">chevron-right</koerber-icon>\n<koerber-tree-item>Birch</koerber-tree-item>\n<span slot="hint">3 files</span>\n<koerber-tree-item>\nMaple<koerber-tree-item>Birch</koerber-tree-item>\n<koerber-tree-item>Field maple</koerber-tree-item>\n<koerber-tree-item>Red maple</koerber-tree-item>\n<koerber-tree-item>Sugar maple</koerber-tree-item>\n</koerber-tree-item>\n<koerber-tree-item>Oak</koerber-tree-item>\n</koerber-tree-item>\n<koerber-tree-item>\nConiferous<koerber-tree-item>Cedar</koerber-tree-item>\n<koerber-tree-item>Pine</koerber-tree-item>\n<koerber-tree-item>Spruce</koerber-tree-item>\n</koerber-tree-item>\n<koerber-tree-item>\nNon-trees<koerber-tree-item>Bamboo</koerber-tree-item>\n<koerber-tree-item>Cactus</koerber-tree-item>\n<koerber-tree-item>Fern</koerber-tree-item>\n</koerber-tree-item>\n</koerber-tree>\n`;\n    return getStoryTemplate(treeHTML);\n  },\n  args: {}\n}',...Default.parameters?.docs?.source}}},Tree_Multiple_Levels.parameters={...Tree_Multiple_Levels.parameters,docs:{...Tree_Multiple_Levels.parameters?.docs,source:{originalSource:"{\n  render: () => html`\n    <koerber-tree>\n      <koerber-tree-item>\n        Node 1\n        <koerber-tree-item>\n          Node 1.1\n          <koerber-tree-item>Node 1.1.1</koerber-tree-item>\n          <koerber-tree-item>Node 1.1.2</koerber-tree-item>\n        </koerber-tree-item>\n        <koerber-tree-item>\n          Node 1.2\n          <koerber-tree-item>Node 1.2.1</koerber-tree-item>\n          <koerber-tree-item>Node 1.2.2</koerber-tree-item>\n        </koerber-tree-item>\n      </koerber-tree-item>\n      <koerber-tree-item>\n        Node 2\n        <koerber-tree-item>\n          Node 2.1\n          <koerber-tree-item>Node 2.1.1</koerber-tree-item>\n          <koerber-tree-item>Node 2.1.2</koerber-tree-item>\n        </koerber-tree-item>\n        <koerber-tree-item>\n          Node 2.2\n          <koerber-tree-item>Node 2.2.1</koerber-tree-item>\n          <koerber-tree-item>Node 2.2.2</koerber-tree-item>\n        </koerber-tree-item>\n      </koerber-tree-item>\n    </koerber-tree>\n  `\n}",...Tree_Multiple_Levels.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Tree_Multiple_Levels"]}}]);
//# sourceMappingURL=stories-components-tree-tree-stories.a2df7ab9.iframe.bundle.js.map