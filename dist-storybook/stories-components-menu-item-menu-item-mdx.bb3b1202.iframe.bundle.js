/*! For license information please see stories-components-menu-item-menu-item-mdx.bb3b1202.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_koerber_uikit=self.webpackChunk_koerber_uikit||[]).push([[6883,3797],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>MDXProvider,a:()=>useMDXComponents});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const emptyComponents={},MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents);function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((function(){return"function"==typeof components?components(contextComponents):{...contextComponents,...components}}),[contextComponents,components])}function MDXProvider(properties){let allComponents;return allComponents=properties.disableParentContext?"function"==typeof properties.components?properties.components(emptyComponents):properties.components||emptyComponents:useMDXComponents(properties.components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},properties.children)}},"./node_modules/@storybook/addon-docs/dist/blocks.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Xz:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Xz,ZX:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.ZX,h_:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.h_});var _storybook_client_logger__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("@storybook/client-logger"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");(0,_storybook_client_logger__WEBPACK_IMPORTED_MODULE_0__.deprecate)("Import from '@storybook/addon-docs/blocks' is deprecated. Please import from '@storybook/blocks' instead.")},"./src/stories/components/menu-item/menu-item.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>MDXContent});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),E_jalasoft_uikit_uikit_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/blocks.mjs"),_menu_item_stories__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/stories/components/menu-item/menu-item.stories.ts");function _createMdxContent(props){const _components={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,E_jalasoft_uikit_uikit_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_4__.a)(),...props.components};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.h_,{title:"Components/Menu item"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"menu-item",children:"Menu item"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("code",{class:"koerber-text-xl",children:" <koerber-menu-item> | MenuItem "}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Menu items are used to present a list of actions or options that are relevant to a specific context or control. They are typically used in menus and context menus to provide a set of actions that can be performed on a selected item or within a specific area of an application."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong,{children:"Menu item"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong,{children:"API reference"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#slots",children:"Slots"})," | ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#methods",children:"Methods"})," | ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#dependencies",children:"Dependencies"})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong,{children:"Examples"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#prefix",children:"Prefix"})," | ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#suffix",children:"Suffix"})," | ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#mixing-slots",children:"Mixing slots"})," | ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#size",children:"Size"})," | ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#disabled",children:"Disabled"})," | ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#value-and-selection",children:"Value and selection"})," | ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#truncated-text",children:"Truncated text"})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong,{children:"Usage guidelines"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#when-to-use",children:"When to use"})," | ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#usage-recommendations",children:"Usage recommendations"})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Xz,{of:_menu_item_stories__WEBPACK_IMPORTED_MODULE_3__.Default}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.ZX,{of:_menu_item_stories__WEBPACK_IMPORTED_MODULE_3__.Default}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"api-reference",children:"API reference"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"slots",children:"Slots"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.table,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.thead,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tr,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.th,{children:"Name"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.th,{children:"Description"})]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tbody,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tr,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"(default)"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td,{children:"The menu item's label."})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tr,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"prefix"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td,{children:"Used to prepend an icon or similar element to the menu item."})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tr,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"suffix"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td,{children:"Used to append an icon or similar element to the menu item."})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tr,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"submenu"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td,{children:"Used to denote a nested menu."})]})]})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Learn more about ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"/docs/getting-started-using-components--docs#slots",children:"Slots"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"methods",children:"Methods"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.table,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.thead,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tr,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.th,{children:"Name"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.th,{children:"Description"})]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.tbody,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tr,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"getTextLabel()"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td,{children:"Returns a text label based on the contents of the menu item's default slot."})]})})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Learn more about ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"/docs/getting-started-using-components--docs#methods",children:"Methods"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"dependencies",children:"Dependencies"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"This component automatically imports the following dependencies:"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:"<koerber-icon>"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:"<koerber-popup>"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:"<koerber-tooltip>"}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"examples",children:"Examples"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"prefix",children:"Prefix"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Use the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"prefix"})," slot to add an icon or similar element to the menu item."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Xz,{of:_menu_item_stories__WEBPACK_IMPORTED_MODULE_3__.Menu_Item_Prefix}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"suffix",children:"Suffix"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Use the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"suffix"})," slot to add reference text like a keyboard shortcut or an icon."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Xz,{of:_menu_item_stories__WEBPACK_IMPORTED_MODULE_3__.Menu_Item_Suffix}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"mixing-slots",children:"Mixing slots"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Use the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"prefix"})," and ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"suffix"})," slots together to add an icon and a reference text to the menu item."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Xz,{of:_menu_item_stories__WEBPACK_IMPORTED_MODULE_3__.Menu_Item_Prefix_And_Suffix}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"size",children:"Size"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Use the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"size"})," attribute to change the size of the menu item.\nThe allowed values are ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"small"}),", ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"medium"}),", and ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"large"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Xz,{of:_menu_item_stories__WEBPACK_IMPORTED_MODULE_3__.Menu_Item_Sizes}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"disabled",children:"Disabled"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Use the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"disabled"})," property to disable the menu item, disabling all type of interactivity with the item."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Xz,{of:_menu_item_stories__WEBPACK_IMPORTED_MODULE_3__.Disabled}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"value-and-selection",children:"Value and selection"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Use the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"value"})," property to set a custom value for the menu item. This value will be emitted when the item is selected.\nFor further details check the 'Menu' item docs."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Xz,{of:_menu_item_stories__WEBPACK_IMPORTED_MODULE_3__.Value}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"truncated-text",children:"Truncated text"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"When the label content exceeds the width of the menu item, the text will be automatically truncated, and a tooltip will appear when hovering over the truncated text, displaying the full content."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Xz,{of:_menu_item_stories__WEBPACK_IMPORTED_MODULE_3__.Menu_Item_TruncatedText}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"usage-guidelines",children:"Usage guidelines"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"when-to-use",children:"When to use"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:"Use menu items to provide a list of actions or options that are relevant to a specific context or control."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:"Use menus to display a set of actions applicable to a selected item or within a particular area of the application."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:"Use menus to offer navigation options or commands relevant to the current user context."}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"usage-recommendations",children:"Usage recommendations"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:"Use clear and concise labels for menu items. Avoid jargon or ambiguous terms."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:"If using icons, ensure they are meaningful and easily recognizable. Consider adding text labels alongside icons for clarity."}),"\n"]})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,E_jalasoft_uikit_uikit_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_4__.a)(),...props.components};return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}},"./src/stories/components/menu-item/menu-item.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Disabled:()=>Disabled,Menu_Item_Prefix:()=>Menu_Item_Prefix,Menu_Item_Prefix_And_Suffix:()=>Menu_Item_Prefix_And_Suffix,Menu_Item_Sizes:()=>Menu_Item_Sizes,Menu_Item_Suffix:()=>Menu_Item_Suffix,Menu_Item_TruncatedText:()=>Menu_Item_TruncatedText,Selected:()=>Selected,Size_Large:()=>Size_Large,Size_Medium:()=>Size_Medium,Size_Small:()=>Size_Small,Type:()=>Type,Value:()=>Value,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _utils__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/stories/utils.ts");__webpack_require__("./src/stories/component-imports.ts");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/MenuItem-Stories",component:"koerber-menu-item",argTypes:{type:{control:{type:"text"},description:"The type of menu item to render. To use `checked`, this value must be set t`.",defaultValue:"'checkbox'",table:{type:{summary:"string",detail:"string"},defaultValue:{summary:"'checkbox'"}}},selected:{control:{type:"boolean"},description:"Draws the item in a selected state.",defaultValue:"false",table:{type:{summary:"boolean",detail:"boolean"},defaultValue:{summary:"false"}}},value:{control:{type:"text"},description:"A unique value to store in the menu item. This can be used as a way to identify menu items when selected.",defaultValue:"''",table:{type:{summary:"string",detail:"string"},defaultValue:{summary:"''"}}},disabled:{control:{type:"boolean"},description:"Draws the menu item in a disabled state, preventing selection.",defaultValue:"false",table:{type:{summary:"boolean",detail:"boolean"},defaultValue:{summary:"false"}}},size:{control:{type:"select"},options:["small","medium","large"],description:"The height size value of the item - medium by default",defaultValue:"'medium'",table:{type:{summary:"'small' | 'medium' | 'large'",detail:"'small' | 'medium' | 'large'"},defaultValue:{summary:"'medium'"}}}}},Default={render:args=>{const menuitemHTML=`<koerber-menu-item ${(0,_utils__WEBPACK_IMPORTED_MODULE_0__.c)({args})}>Default</koerber-menu-item>`;return(0,_utils__WEBPACK_IMPORTED_MODULE_0__.a)(menuitemHTML)},args:{type:"'checkbox'"},storyName:"Default"},Type={render:args=>{const menuitemHTML=`<koerber-menu-item ${(0,_utils__WEBPACK_IMPORTED_MODULE_0__.c)({args})}>Type</koerber-menu-item>`;return(0,_utils__WEBPACK_IMPORTED_MODULE_0__.a)(menuitemHTML)},args:{type:"'checkbox'"},storyName:"Type"},Selected={render:args=>{const menuitemHTML=`<koerber-menu-item ${(0,_utils__WEBPACK_IMPORTED_MODULE_0__.c)({args})}>Selected</koerber-menu-item>`;return(0,_utils__WEBPACK_IMPORTED_MODULE_0__.a)(menuitemHTML)},args:{selected:!0},storyName:"Selected"},Value={render:args=>{const menuitemHTML=`<koerber-menu-item ${(0,_utils__WEBPACK_IMPORTED_MODULE_0__.c)({args})}>Value</koerber-menu-item>`;return(0,_utils__WEBPACK_IMPORTED_MODULE_0__.a)(menuitemHTML)},args:{value:""},storyName:"Value"},Disabled={render:args=>{const menuitemHTML=`<koerber-menu-item ${(0,_utils__WEBPACK_IMPORTED_MODULE_0__.c)({args})}>Disabled</koerber-menu-item>`;return(0,_utils__WEBPACK_IMPORTED_MODULE_0__.a)(menuitemHTML)},args:{disabled:!0},storyName:"Disabled"},Size_Small={render:args=>{const menuitemHTML=`<koerber-menu-item ${(0,_utils__WEBPACK_IMPORTED_MODULE_0__.c)({args})}>Small</koerber-menu-item>`;return(0,_utils__WEBPACK_IMPORTED_MODULE_0__.a)(menuitemHTML)},args:{size:"small"},storyName:"Size: Small"},Size_Medium={render:args=>{const menuitemHTML=`<koerber-menu-item ${(0,_utils__WEBPACK_IMPORTED_MODULE_0__.c)({args})}>Medium</koerber-menu-item>`;return(0,_utils__WEBPACK_IMPORTED_MODULE_0__.a)(menuitemHTML)},args:{size:"medium"},storyName:"Size: Medium"},Size_Large={render:args=>{const menuitemHTML=`<koerber-menu-item ${(0,_utils__WEBPACK_IMPORTED_MODULE_0__.c)({args})}>Large</koerber-menu-item>`;return(0,_utils__WEBPACK_IMPORTED_MODULE_0__.a)(menuitemHTML)},args:{size:"large"},storyName:"Size: Large"},Menu_Item_Prefix={render:()=>(0,_utils__WEBPACK_IMPORTED_MODULE_0__.a)('<koerber-menu-item>\n      <koerber-icon slot="prefix" name="home"></koerber-icon>\n      Home\n    </koerber-menu-item>')},Menu_Item_Suffix={render:()=>(0,_utils__WEBPACK_IMPORTED_MODULE_0__.a)('<koerber-menu-item>\n      <span slot="suffix">⌘B︎</span>\n      Copy\n    </koerber-menu-item>')},Menu_Item_Prefix_And_Suffix={render:()=>(0,_utils__WEBPACK_IMPORTED_MODULE_0__.a)('<koerber-menu-item>\n      <koerber-icon slot="prefix" name="content-copy"></koerber-icon>\n      Copy\n      <span slot="suffix">⌘B︎</span>\n    </koerber-menu-item>')},Menu_Item_Sizes={render:()=>(0,_utils__WEBPACK_IMPORTED_MODULE_0__.a)('\n<koerber-menu-item size="small">Small</koerber-menu-item>\n\n<koerber-menu-item size="medium" >Medium</koerber-menu-item>\n\n<koerber-menu-item size="large">Large</koerber-menu-item>\n    ')},Menu_Item_TruncatedText={render:()=>(0,_utils__WEBPACK_IMPORTED_MODULE_0__.a)('\n<div style="width: 200px;">\n  <koerber-menu-item>Pan-Seared Atlantic Salmon with a Butter</koerber-menu-item>\n</div>')};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  render: args => {\n    const attributes = generateAttributes({\n      args\n    });\n    const menuitemHTML = `<koerber-menu-item ${attributes}>Default</koerber-menu-item>`;\n    return getStoryTemplate(menuitemHTML);\n  },\n  args: {\n    type: \"'checkbox'\"\n  }\n}",...Default.parameters?.docs?.source}}},Type.parameters={...Type.parameters,docs:{...Type.parameters?.docs,source:{originalSource:"{\n  render: args => {\n    const attributes = generateAttributes({\n      args\n    });\n    const menuitemHTML = `<koerber-menu-item ${attributes}>Type</koerber-menu-item>`;\n    return getStoryTemplate(menuitemHTML);\n  },\n  args: {\n    type: \"'checkbox'\"\n  }\n}",...Type.parameters?.docs?.source}}},Selected.parameters={...Selected.parameters,docs:{...Selected.parameters?.docs,source:{originalSource:"{\n  render: args => {\n    const attributes = generateAttributes({\n      args\n    });\n    const menuitemHTML = `<koerber-menu-item ${attributes}>Selected</koerber-menu-item>`;\n    return getStoryTemplate(menuitemHTML);\n  },\n  args: {\n    selected: true\n  }\n}",...Selected.parameters?.docs?.source}}},Value.parameters={...Value.parameters,docs:{...Value.parameters?.docs,source:{originalSource:"{\n  render: args => {\n    const attributes = generateAttributes({\n      args\n    });\n    const menuitemHTML = `<koerber-menu-item ${attributes}>Value</koerber-menu-item>`;\n    return getStoryTemplate(menuitemHTML);\n  },\n  args: {\n    value: ''\n  }\n}",...Value.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:"{\n  render: args => {\n    const attributes = generateAttributes({\n      args\n    });\n    const menuitemHTML = `<koerber-menu-item ${attributes}>Disabled</koerber-menu-item>`;\n    return getStoryTemplate(menuitemHTML);\n  },\n  args: {\n    disabled: true\n  }\n}",...Disabled.parameters?.docs?.source}}},Size_Small.parameters={...Size_Small.parameters,docs:{...Size_Small.parameters?.docs,source:{originalSource:"{\n  render: args => {\n    const attributes = generateAttributes({\n      args\n    });\n    const menuitemHTML = `<koerber-menu-item ${attributes}>Small</koerber-menu-item>`;\n    return getStoryTemplate(menuitemHTML);\n  },\n  args: {\n    size: 'small'\n  }\n}",...Size_Small.parameters?.docs?.source}}},Size_Medium.parameters={...Size_Medium.parameters,docs:{...Size_Medium.parameters?.docs,source:{originalSource:"{\n  render: args => {\n    const attributes = generateAttributes({\n      args\n    });\n    const menuitemHTML = `<koerber-menu-item ${attributes}>Medium</koerber-menu-item>`;\n    return getStoryTemplate(menuitemHTML);\n  },\n  args: {\n    size: 'medium'\n  }\n}",...Size_Medium.parameters?.docs?.source}}},Size_Large.parameters={...Size_Large.parameters,docs:{...Size_Large.parameters?.docs,source:{originalSource:"{\n  render: args => {\n    const attributes = generateAttributes({\n      args\n    });\n    const menuitemHTML = `<koerber-menu-item ${attributes}>Large</koerber-menu-item>`;\n    return getStoryTemplate(menuitemHTML);\n  },\n  args: {\n    size: 'large'\n  }\n}",...Size_Large.parameters?.docs?.source}}},Menu_Item_Prefix.parameters={...Menu_Item_Prefix.parameters,docs:{...Menu_Item_Prefix.parameters?.docs,source:{originalSource:'{\n  render: () => {\n    const menuitemHTML = `<koerber-menu-item>\n      <koerber-icon slot="prefix" name="home"></koerber-icon>\n      Home\n    </koerber-menu-item>`;\n    return getStoryTemplate(menuitemHTML);\n  }\n}',...Menu_Item_Prefix.parameters?.docs?.source}}},Menu_Item_Suffix.parameters={...Menu_Item_Suffix.parameters,docs:{...Menu_Item_Suffix.parameters?.docs,source:{originalSource:'{\n  render: () => {\n    const menuitemHTML = `<koerber-menu-item>\n      <span slot="suffix">⌘B︎</span>\n      Copy\n    </koerber-menu-item>`;\n    return getStoryTemplate(menuitemHTML);\n  }\n}',...Menu_Item_Suffix.parameters?.docs?.source}}},Menu_Item_Prefix_And_Suffix.parameters={...Menu_Item_Prefix_And_Suffix.parameters,docs:{...Menu_Item_Prefix_And_Suffix.parameters?.docs,source:{originalSource:'{\n  render: () => {\n    const menuitemHTML = `<koerber-menu-item>\n      <koerber-icon slot="prefix" name="content-copy"></koerber-icon>\n      Copy\n      <span slot="suffix">⌘B︎</span>\n    </koerber-menu-item>`;\n    return getStoryTemplate(menuitemHTML);\n  }\n}',...Menu_Item_Prefix_And_Suffix.parameters?.docs?.source}}},Menu_Item_Sizes.parameters={...Menu_Item_Sizes.parameters,docs:{...Menu_Item_Sizes.parameters?.docs,source:{originalSource:'{\n  render: () => {\n    const menuitemHTML = `\n<koerber-menu-item size="small">Small</koerber-menu-item>\n\n<koerber-menu-item size="medium" >Medium</koerber-menu-item>\n\n<koerber-menu-item size="large">Large</koerber-menu-item>\n    `;\n    return getStoryTemplate(menuitemHTML);\n  }\n}',...Menu_Item_Sizes.parameters?.docs?.source}}},Menu_Item_TruncatedText.parameters={...Menu_Item_TruncatedText.parameters,docs:{...Menu_Item_TruncatedText.parameters?.docs,source:{originalSource:'{\n  render: () => {\n    const menuitemHTML = `\n<div style="width: 200px;">\n  <koerber-menu-item>Pan-Seared Atlantic Salmon with a Butter</koerber-menu-item>\n</div>`;\n    return getStoryTemplate(menuitemHTML);\n  }\n}',...Menu_Item_TruncatedText.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Type","Selected","Value","Disabled","Size_Small","Size_Medium","Size_Large","Menu_Item_Prefix","Menu_Item_Suffix","Menu_Item_Prefix_And_Suffix","Menu_Item_Sizes","Menu_Item_TruncatedText"]},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);