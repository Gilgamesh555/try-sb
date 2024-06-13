/*! For license information please see stories-components-list-list-mdx.ab20cd5e.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_koerber_uikit=self.webpackChunk_koerber_uikit||[]).push([[4476,9930],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>MDXProvider,a:()=>useMDXComponents});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const emptyComponents={},MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents);function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((function(){return"function"==typeof components?components(contextComponents):{...contextComponents,...components}}),[contextComponents,components])}function MDXProvider(properties){let allComponents;return allComponents=properties.disableParentContext?"function"==typeof properties.components?properties.components(emptyComponents):properties.components||emptyComponents:useMDXComponents(properties.components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},properties.children)}},"./node_modules/@storybook/addon-docs/dist/blocks.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Xz:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Xz,ZX:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.ZX,h_:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.h_});var _storybook_client_logger__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("@storybook/client-logger"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");(0,_storybook_client_logger__WEBPACK_IMPORTED_MODULE_0__.deprecate)("Import from '@storybook/addon-docs/blocks' is deprecated. Please import from '@storybook/blocks' instead.")},"./src/stories/components/list/list.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>MDXContent});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),E_jalasoft_uikit_uikit_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/blocks.mjs"),_list_stories__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/stories/components/list/list.stories.ts");__webpack_require__("./src/components/list-item/list-item.ts"),__webpack_require__("./src/components/button/button.ts"),__webpack_require__("./src/components/icon/icon.ts");function _createMdxContent(props){const _components={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,E_jalasoft_uikit_uikit_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_7__.a)(),...props.components};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.h_,{title:"Components/List"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"list",children:"List"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("code",{class:"koerber-text-xl",children:" <koerber-list> | List "}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Lists are used to show the single-level information. ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"list-item"})," components are used as children in a list."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong,{children:"API reference"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#slots",children:"Slots"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong,{children:"Examples"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#size",children:"Size"})," | ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#text-only",children:"Text only"})," | ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#prefix-icon-with-text",children:"Prefix icon with text"})," | ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#two-line",children:"Two line"})," | ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#three-line",children:"Three line"})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong,{children:"Usage guidelines"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#when-to-use",children:"When to use"})," | ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#usage-recommendations",children:"Usage recommendations"})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Xz,{of:_list_stories__WEBPACK_IMPORTED_MODULE_3__.Default}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.ZX,{of:_list_stories__WEBPACK_IMPORTED_MODULE_3__.Default}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"api-reference",children:"API reference"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"slots",children:"Slots"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.table,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.thead,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tr,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.th,{children:"Name"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.th,{children:"Description"})]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.tbody,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tr,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"(default)"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td,{children:"The list's content, includes only list items"})]})})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Learn more about ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"/docs/getting-started-using-components--docs#slots",children:"Slots"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"examples",children:"Examples"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"size",children:"Size"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["The ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"size"})," attribute defines the size of the list items in a list. The values allowed are ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"small"}),", ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"medium"})," and ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"large"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Xz,{of:_list_stories__WEBPACK_IMPORTED_MODULE_3__.Sizes}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"text-only",children:"Text only"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["List item's text is a slot with name label. Use the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"label"})," attribute to set list item text."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Xz,{of:_list_stories__WEBPACK_IMPORTED_MODULE_3__.List_TextOnly}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"prefix-icon-with-text",children:"Prefix icon with text"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["List item's prefix is a slot with name ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"prefix"}),". To get the prefix icon in a list-item, ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"koerber-icon"})," element is used with slot and name attributes."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Xz,{of:_list_stories__WEBPACK_IMPORTED_MODULE_3__.List_PrefixIconWithText}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"two-line",children:"Two line"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["The ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"secondary-text"})," attribute is used in a child list item to add a secondary text to that list item."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Xz,{of:_list_stories__WEBPACK_IMPORTED_MODULE_3__.List_TwoLine}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"three-line",children:"Three line"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["The ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"tertiary-text"})," attribute is used in a child list item to add a third line to that list item, when secondary text is also set."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Xz,{of:_list_stories__WEBPACK_IMPORTED_MODULE_3__.List_ThreeLine}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"usage-guidelines",children:"Usage guidelines"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"when-to-use",children:"When to use"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:"Suited for similar data types."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:"When necessary relate or group content."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:"When is necessary visually display single-level information."}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"usage-recommendations",children:"Usage recommendations"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:"Create consistency and use common elements."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:"The use of icons on the left of each item draws the eye in to the activity."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:"Use the white space wisely to guide the eye to important elements."}),"\n"]})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,E_jalasoft_uikit_uikit_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_7__.a)(),...props.components};return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}},"./src/stories/components/list/list.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,List_PrefixIconWithText:()=>List_PrefixIconWithText,List_TextOnly:()=>List_TextOnly,List_ThreeLine:()=>List_ThreeLine,List_TwoLine:()=>List_TwoLine,Sizes:()=>Sizes,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _utils__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/stories/utils.ts"),lit__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./src/stories/component-imports.ts"),__webpack_require__("./node_modules/lit/index.js"));const __WEBPACK_DEFAULT_EXPORT__={title:"Components/List-Stories",component:"koerber-list",argTypes:{size:{control:{type:"select"},options:["small","medium","large"],description:"The list's size. This size will be applied to all child list-items.",defaultValue:"'medium'",table:{type:{summary:"'small' | 'medium' | 'large'",detail:"'small' | 'medium' | 'large'"},defaultValue:{summary:"'medium'"}}}}},Default={render:args=>{const listHTML=`<koerber-list ${(0,_utils__WEBPACK_IMPORTED_MODULE_0__.c)({args})}><koerber-list-item value = "1"  label = "Item 01"><koerber-avatar slot="prefix" image="https://images.unsplash.com/photo-1591871937573-74dbba515c4c"></koerber-avatar><koerber-button slot="suffix" variant="ghost"><koerber-icon name="dots-vertical"></koerber-icon></koerber-button></koerber-list-item><koerber-list-item value = "2"  label = "Item 02"><koerber-avatar slot="prefix" image="https://images.unsplash.com/photo-1591871937573-74dbba515c4c"></koerber-avatar><koerber-button slot="suffix" variant="ghost"><koerber-icon name="dots-vertical"></koerber-icon></koerber-button></koerber-list-item></koerber-list>`;return(0,_utils__WEBPACK_IMPORTED_MODULE_0__.a)(listHTML)},args:{},storyName:"Default"},List_TextOnly={render:()=>(0,_utils__WEBPACK_IMPORTED_MODULE_0__.a)('\n<koerber-list>\n  <koerber-list-item value="1" label="Item 01"></koerber-list-item>\n  <koerber-list-item value="2" label="Item 02"></koerber-list-item>\n  <koerber-list-item value="3" label="Item 03"></koerber-list-item>\n  <koerber-list-item value="4" label="Item 04"></koerber-list-item>\n</koerber-list>\n    ')},List_PrefixIconWithText={render:()=>(0,_utils__WEBPACK_IMPORTED_MODULE_0__.a)('\n<koerber-list label="label">\n  <koerber-list-item value="1" label="Item 01"><koerber-icon slot="prefix" name="file"></koerber-icon></koerber-list-item>\n  <koerber-list-item value="2" label="Item 02"><koerber-icon slot="prefix" name="file"></koerber-icon></koerber-list-item>\n  <koerber-list-item value="3" label="Item 03"><koerber-icon slot="prefix" name="file"></koerber-icon></koerber-list-item>\n  <koerber-list-item value="4" label="Item 04"><koerber-icon slot="prefix" name="file"></koerber-icon></koerber-list-item>\n</koerber-list>\n    ')},List_TwoLine={render:()=>(0,_utils__WEBPACK_IMPORTED_MODULE_0__.a)('\n<koerber-list>\n    <koerber-list-item value="1" label="Item 01" secondary-text="secondary text">\n      <koerber-icon slot="prefix" name="file"></koerber-icon>\n      <koerber-button slot="suffix" icon="dots-vertical"></koerber-button>\n    </koerber-list-item>\n    <koerber-list-item value="2" label="Item 02" secondary-text="secondary text">\n      <koerber-icon slot="prefix" name="file"></koerber-icon>\n      <koerber-button slot="suffix" icon="dots-vertical"></koerber-button>\n    </koerber-list-item>\n</koerber-list>\n    ')},List_ThreeLine={render:()=>(0,_utils__WEBPACK_IMPORTED_MODULE_0__.a)('\n<koerber-list>\n  <koerber-list-item value="1" label="Item 01" secondary-text="secondary text" tertiary-text="tertiary-text">\n    <koerber-icon slot="prefix" name="file"></koerber-icon>\n    <koerber-button slot="suffix" icon="dots-vertical"></koerber-button>\n  </koerber-list-item>\n  <koerber-list-item value="2" label="Item 02" secondary-text="secondary text" tertiary-text="tertiary-text">\n    <koerber-icon slot="prefix" name="file"></koerber-icon>\n    <koerber-button slot="suffix" icon="dots-vertical"></koerber-button>\n  </koerber-list-item>\n</koerber-list>\n    ')},Sizes={render:()=>lit__WEBPACK_IMPORTED_MODULE_2__.dy` ${["small","medium","large"].map((size=>lit__WEBPACK_IMPORTED_MODULE_2__.dy`
        <koerber-list size="${size}">
          <koerber-list-item value="1" label="Item ${size} 01">
            <koerber-icon slot="prefix" name="file"></koerber-icon>
            <koerber-button slot="suffix">
              <koerber-icon name="dots-vertical" size="${size}"></koerber-icon>
            </koerber-button>
          </koerber-list-item>
          <koerber-list-item value="2" label="Item ${size} 02">
            <koerber-icon slot="prefix" name="file"></koerber-icon>
            <koerber-button slot="suffix">
              <koerber-icon name="dots-vertical" size="${size}"></koerber-icon>
            </koerber-button>
          </koerber-list-item>
        </koerber-list>
      `))}`};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  render: args => {\n    const attributes = generateAttributes({\n      args\n    });\n    const listHTML = `<koerber-list ${attributes}><koerber-list-item value = "1"  label = "Item 01"><koerber-avatar slot="prefix" image="https://images.unsplash.com/photo-1591871937573-74dbba515c4c"></koerber-avatar><koerber-button slot="suffix" variant="ghost"><koerber-icon name="dots-vertical"></koerber-icon></koerber-button></koerber-list-item><koerber-list-item value = "2"  label = "Item 02"><koerber-avatar slot="prefix" image="https://images.unsplash.com/photo-1591871937573-74dbba515c4c"></koerber-avatar><koerber-button slot="suffix" variant="ghost"><koerber-icon name="dots-vertical"></koerber-icon></koerber-button></koerber-list-item></koerber-list>`;\n    return getStoryTemplate(listHTML);\n  },\n  args: {}\n}',...Default.parameters?.docs?.source}}},List_TextOnly.parameters={...List_TextOnly.parameters,docs:{...List_TextOnly.parameters?.docs,source:{originalSource:'{\n  render: () => {\n    const listHTML = `\n<koerber-list>\n  <koerber-list-item value="1" label="Item 01"></koerber-list-item>\n  <koerber-list-item value="2" label="Item 02"></koerber-list-item>\n  <koerber-list-item value="3" label="Item 03"></koerber-list-item>\n  <koerber-list-item value="4" label="Item 04"></koerber-list-item>\n</koerber-list>\n    `;\n    return getStoryTemplate(listHTML);\n  }\n}',...List_TextOnly.parameters?.docs?.source}}},List_PrefixIconWithText.parameters={...List_PrefixIconWithText.parameters,docs:{...List_PrefixIconWithText.parameters?.docs,source:{originalSource:'{\n  render: () => {\n    const listHTML = `\n<koerber-list label="label">\n  <koerber-list-item value="1" label="Item 01"><koerber-icon slot="prefix" name="file"></koerber-icon></koerber-list-item>\n  <koerber-list-item value="2" label="Item 02"><koerber-icon slot="prefix" name="file"></koerber-icon></koerber-list-item>\n  <koerber-list-item value="3" label="Item 03"><koerber-icon slot="prefix" name="file"></koerber-icon></koerber-list-item>\n  <koerber-list-item value="4" label="Item 04"><koerber-icon slot="prefix" name="file"></koerber-icon></koerber-list-item>\n</koerber-list>\n    `;\n    return getStoryTemplate(listHTML);\n  }\n}',...List_PrefixIconWithText.parameters?.docs?.source}}},List_TwoLine.parameters={...List_TwoLine.parameters,docs:{...List_TwoLine.parameters?.docs,source:{originalSource:'{\n  render: () => {\n    const listHTML = `\n<koerber-list>\n    <koerber-list-item value="1" label="Item 01" secondary-text="secondary text">\n      <koerber-icon slot="prefix" name="file"></koerber-icon>\n      <koerber-button slot="suffix" icon="dots-vertical"></koerber-button>\n    </koerber-list-item>\n    <koerber-list-item value="2" label="Item 02" secondary-text="secondary text">\n      <koerber-icon slot="prefix" name="file"></koerber-icon>\n      <koerber-button slot="suffix" icon="dots-vertical"></koerber-button>\n    </koerber-list-item>\n</koerber-list>\n    `;\n    return getStoryTemplate(listHTML);\n  }\n}',...List_TwoLine.parameters?.docs?.source}}},List_ThreeLine.parameters={...List_ThreeLine.parameters,docs:{...List_ThreeLine.parameters?.docs,source:{originalSource:'{\n  render: () => {\n    const listHTML = `\n<koerber-list>\n  <koerber-list-item value="1" label="Item 01" secondary-text="secondary text" tertiary-text="tertiary-text">\n    <koerber-icon slot="prefix" name="file"></koerber-icon>\n    <koerber-button slot="suffix" icon="dots-vertical"></koerber-button>\n  </koerber-list-item>\n  <koerber-list-item value="2" label="Item 02" secondary-text="secondary text" tertiary-text="tertiary-text">\n    <koerber-icon slot="prefix" name="file"></koerber-icon>\n    <koerber-button slot="suffix" icon="dots-vertical"></koerber-button>\n  </koerber-list-item>\n</koerber-list>\n    `;\n    return getStoryTemplate(listHTML);\n  }\n}',...List_ThreeLine.parameters?.docs?.source}}},Sizes.parameters={...Sizes.parameters,docs:{...Sizes.parameters?.docs,source:{originalSource:'{\n  render: () => {\n    const sizes = [\'small\', \'medium\', \'large\'];\n    return html` ${sizes.map(size => html`\n        <koerber-list size="${size}">\n          <koerber-list-item value="1" label="Item ${size} 01">\n            <koerber-icon slot="prefix" name="file"></koerber-icon>\n            <koerber-button slot="suffix">\n              <koerber-icon name="dots-vertical" size="${size}"></koerber-icon>\n            </koerber-button>\n          </koerber-list-item>\n          <koerber-list-item value="2" label="Item ${size} 02">\n            <koerber-icon slot="prefix" name="file"></koerber-icon>\n            <koerber-button slot="suffix">\n              <koerber-icon name="dots-vertical" size="${size}"></koerber-icon>\n            </koerber-button>\n          </koerber-list-item>\n        </koerber-list>\n      `)}`;\n  }\n}',...Sizes.parameters?.docs?.source}}};const __namedExportsOrder=["Default","List_TextOnly","List_PrefixIconWithText","List_TwoLine","List_ThreeLine","Sizes"]},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);
//# sourceMappingURL=stories-components-list-list-mdx.ab20cd5e.iframe.bundle.js.map