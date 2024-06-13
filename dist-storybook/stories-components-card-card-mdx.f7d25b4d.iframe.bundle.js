/*! For license information please see stories-components-card-card-mdx.f7d25b4d.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_koerber_uikit=self.webpackChunk_koerber_uikit||[]).push([[4485,7509],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>MDXProvider,a:()=>useMDXComponents});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const emptyComponents={},MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents);function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((function(){return"function"==typeof components?components(contextComponents):{...contextComponents,...components}}),[contextComponents,components])}function MDXProvider(properties){let allComponents;return allComponents=properties.disableParentContext?"function"==typeof properties.components?properties.components(emptyComponents):properties.components||emptyComponents:useMDXComponents(properties.components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},properties.children)}},"./src/stories/components/card/card.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>MDXContent});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),E_jalasoft_uikit_uikit_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_card_stories__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/stories/components/card/card.stories.ts");__webpack_require__("./src/components/card/card.ts"),__webpack_require__("./src/styles/foundations/typography.css"),__webpack_require__("./src/styles/foundations/grid.css");function _createMdxContent(props){const _components={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,E_jalasoft_uikit_uikit_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_6__.a)(),...props.components};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_7__.h_,{title:"Components/Card"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"card",children:"Card"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("code",{class:"koerber-text-xl",children:" <koerber-card> | Card "}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Use cards to conveniently display content composed of different elements. Cards are also ideal for showcasing\nelements whose size or supported actions vary, like photos with captions of variable length."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong,{children:"API reference"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#slots",children:"Slots"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong,{children:"Examples"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#basic-card",children:"Basic card"})," | ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#card-with-header",children:"Card with header"})," | ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#card-with-footer",children:"Card with footer"})," | ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#images",children:"Images"})," | ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#layout",children:"Layout"})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong,{children:"Usage guidelines"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#when-to-use",children:"When to use"})," | ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#usage-recommendations",children:"Usage recommendations"})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_7__.Xz,{of:_card_stories__WEBPACK_IMPORTED_MODULE_2__.Card_With_All}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"api-reference",children:"API reference"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"slots",children:"Slots"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.table,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.thead,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tr,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.th,{children:"Name"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.th,{children:"Description"})]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tbody,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tr,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"(default)"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td,{children:"The card's main content."})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tr,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"header"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td,{children:"An optional header for the card."})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tr,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"footer"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td,{children:"An optional footer for the card."})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tr,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"image"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td,{children:"An optional image to render at the start of the card."})]})]})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Learn more about ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"/docs/getting-started-using-components--docs#slots",children:"Slots"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"examples",children:"Examples"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"basic-card",children:"Basic card"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"While basic cards may lack visual appeal, they are versatile components which can be used in many contexts."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"This is an example of a basic card. No image, no header and no footer."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_7__.Xz,{of:_card_stories__WEBPACK_IMPORTED_MODULE_2__.Basic_Card}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"card-with-header",children:"Card with header"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Use the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"header"})," slot to display titles and more."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_7__.Xz,{of:_card_stories__WEBPACK_IMPORTED_MODULE_2__.Card_With_Header}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"card-with-footer",children:"Card with footer"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Use footers to display actions, summaries, or other relevant content."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_7__.Xz,{of:_card_stories__WEBPACK_IMPORTED_MODULE_2__.Card_With_Footer}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"images",children:"Images"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Cards accept an ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"image"})," slot. The image is displays at the top of the card and resizes to fit."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_7__.Xz,{of:_card_stories__WEBPACK_IMPORTED_MODULE_2__.Card_With_Image}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"layout",children:"Layout"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Cards can be used in a grid layout to display multiple items."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_7__.Xz,{of:_card_stories__WEBPACK_IMPORTED_MODULE_2__.Grid_Card}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"usage-guidelines",children:"Usage guidelines"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"when-to-use",children:"When to use"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:"Use cards as a collection to display multiple data types like images, videos, and text."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:"Choose cards when direct comparison of images or text is not necessary."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:"Use to visually separate specific parts of content within an application view."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:"Use cards to support content of highly variable length, such as comments."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:"Select cards when the content contains interactivity, like buttons or comments."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:"Use cards instead of grid lists when items need additional content to supplement the image."}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"usage-recommendations",children:"Usage recommendations"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:"Design cards to flexibly support any other components placed inside them, as they are one of the most frequently used components in the product."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:"Ensure that cards maintain product consistency by having a specific structure for their elements, regardless of their flexibility."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:"Use cards to support media sections."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:"Position actions typically at the bottom of the card, or enable tapping the entire card to represent an action."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:"Opt for full-width on mobile viewports to optimize space for content."}),"\n"]})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,E_jalasoft_uikit_uikit_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_6__.a)(),...props.components};return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}},"./src/stories/components/card/card.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic_Card:()=>Basic_Card,Card:()=>Card,Card_Horizontal:()=>Card_Horizontal,Card_With_All:()=>Card_With_All,Card_With_Footer:()=>Card_With_Footer,Card_With_Header:()=>Card_With_Header,Card_With_Header_1:()=>Card_With_Header_1,Card_With_Image:()=>Card_With_Image,Default:()=>Default,Grid_Card:()=>Grid_Card,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _utils__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/stories/utils.ts");__webpack_require__("./src/stories/component-imports.ts");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Card-Stories",component:"koerber-card",argTypes:{}},Default={render:args=>{const cardHTML=`<koerber-card ${(0,_utils__WEBPACK_IMPORTED_MODULE_0__.c)({args})}></koerber-card>`;return(0,_utils__WEBPACK_IMPORTED_MODULE_0__.a)(cardHTML)},args:{},storyName:"Default"},Card_With_Header={render:()=>(0,_utils__WEBPACK_IMPORTED_MODULE_0__.a)('<koerber-card >\n      <div slot="header">\n          <span class="koerber-text-lg koerber-font-weight-bold">Header Title</span>\n      </div>\n      This card has a header. You can put all sorts of things in it!\n</koerber-card>')},Card_With_Header_1={render:()=>(0,_utils__WEBPACK_IMPORTED_MODULE_0__.a)('\n      <koerber-card style="max-width:300px">\n        <img\n          slot="image"\n          src="https://images.unsplash.com/photo-1547191783-94d5f8f6d8b1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80"\n          alt="A kitten walks towards camera on top of pallet."\n        />\n        <div slot="header">\n          <koerber-list-item value="1" secondary-text="Viewer">\n            <div slot="label" class="koerber-text-md koerber-font-weight-bold koerber-color-text" style="color: var(--koerber-color-text);">Configure user</div>\n            <koerber-icon slot="prefix" name="account"></koerber-icon>\n            <koerber-button size="medium" slot="suffix">\n              <koerber-icon name="dots-vertical"></koerber-icon>\n            </koerber-button>\n          </koerber-list-item>\n        </div>\n        This card has a header. You can put all sorts of things in it!\n      </koerber-card>')},Card_With_Footer={render:()=>(0,_utils__WEBPACK_IMPORTED_MODULE_0__.a)('\n      <koerber-card style="max-width:300px">\n        This card has a footer. You can put all sorts of things in it!\n        <div slot="footer">\n          <koerber-button variant="secondary">More Info</koerber-button>\n          <koerber-button variant="primary">Preview</koerber-button>\n        </div>\n      </koerber-card>')},Card_With_All={render:()=>(0,_utils__WEBPACK_IMPORTED_MODULE_0__.a)('\n      <koerber-card style="max-width:300px">\n        <img\n          slot="image"\n          src="https://images.unsplash.com/photo-1547191783-94d5f8f6d8b1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80"\n          alt="A kitten walks towards camera on top of pallet."\n        />\n        This is a kitten, but not just any kitten. This kitten likes walking along pallets.\n        <div slot="header">\n          <span class="koerber-text-lg koerber-font-weight-bold">Header Title</span>\n        </div>\n        <div slot="footer">\n          <koerber-button variant="primary" pill>More Info</koerber-button>\n        </div>\n      </koerber-card>')},Card_With_Image={render:()=>(0,_utils__WEBPACK_IMPORTED_MODULE_0__.a)('\n      <koerber-card style="max-width:300px">\n        <img\n          slot="image"\n          src="https://images.unsplash.com/photo-1547191783-94d5f8f6d8b1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80"\n          alt="A kitten walks towards camera on top of pallet."\n        />\n        This is a kitten, but not just any kitten. This kitten likes walking along pallets.\n</koerber-card>')},Card={render:()=>(0,_utils__WEBPACK_IMPORTED_MODULE_0__.a)('\n      <koerber-card style="max-width:300px">\n        <img slot="image"\n          src="https://images.unsplash.com/photo-1559209172-0ff8f6d49ff7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"\n          alt="A kitten sits patiently between a terracotta pot and decorative grasses."\n        />\n        <div slot="header">\n          <span class="koerber-text-lg koerber-font-weight-bold">Header Title</span>\n        </div>\n        This kitten is as cute as he is playful. Bring him home today!\n        <div slot="footer">\n          <koerber-button variant="primary" pill>More Info</koerber-button>\n        </div>\n      </koerber-card>')},Basic_Card={render:()=>(0,_utils__WEBPACK_IMPORTED_MODULE_0__.a)("\n      <koerber-card>\n        This is just a basic card. No image, no header, and no footer. Just your content.\n      </koerber-card>")},Card_Horizontal={render:()=>(0,_utils__WEBPACK_IMPORTED_MODULE_0__.a)('\n      <koerber-card style="min-width:400px">\n          <koerber-list-item value="1" label="Configure user" secondary-text="Viewer">\n            <koerber-icon slot="prefix" name="account"></koerber-icon>\n            <koerber-button size="medium" slot="suffix">\n              <koerber-icon name="dots-vertical"></koerber-icon>\n            </koerber-button>\n          </koerber-list-item>\n      </koerber-card>')},card='\n  <koerber-card>\n    <img slot="image"\n      src="https://images.unsplash.com/photo-1559209172-0ff8f6d49ff7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"\n      alt="A kitten sits patiently between a terracotta pot and decorative grasses."\n    />\n    <div slot="header">\n      <span class="koerber-text-lg koerber-font-weight-bold">Mittens</span>\n    </div>\n    This kitten is as cute as he is playful. Bring him home today!\n    <div slot="footer">\n      <koerber-button variant="primary" pill>More Info</koerber-button>\n    </div>\n  </koerber-card>',Grid_Card={render:()=>{const cardHTML=`\n      <div class="grid grid-cols-3 gap-m" style="max-width:800px">\n        ${card}\n        ${card}\n        ${card}\n        ${card}\n        ${card}\n        ${card}\n      </div>`;return(0,_utils__WEBPACK_IMPORTED_MODULE_0__.a)(cardHTML)}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  render: args => {\n    const attributes = generateAttributes({\n      args\n    });\n    const cardHTML = `<koerber-card ${attributes}></koerber-card>`;\n    return getStoryTemplate(cardHTML);\n  },\n  args: {}\n}",...Default.parameters?.docs?.source}}},Card_With_Header.parameters={...Card_With_Header.parameters,docs:{...Card_With_Header.parameters?.docs,source:{originalSource:'{\n  render: () => {\n    const cardHTML = `<koerber-card >\n      <div slot="header">\n          <span class="koerber-text-lg koerber-font-weight-bold">Header Title</span>\n      </div>\n      This card has a header. You can put all sorts of things in it!\n</koerber-card>`;\n    return getStoryTemplate(cardHTML);\n  }\n}',...Card_With_Header.parameters?.docs?.source}}},Card_With_Header_1.parameters={...Card_With_Header_1.parameters,docs:{...Card_With_Header_1.parameters?.docs,source:{originalSource:'{\n  render: () => {\n    const cardHTML = `\n      <koerber-card style="max-width:300px">\n        <img\n          slot="image"\n          src="https://images.unsplash.com/photo-1547191783-94d5f8f6d8b1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80"\n          alt="A kitten walks towards camera on top of pallet."\n        />\n        <div slot="header">\n          <koerber-list-item value="1" secondary-text="Viewer">\n            <div slot="label" class="koerber-text-md koerber-font-weight-bold koerber-color-text" style="color: var(--koerber-color-text);">Configure user</div>\n            <koerber-icon slot="prefix" name="account"></koerber-icon>\n            <koerber-button size="medium" slot="suffix">\n              <koerber-icon name="dots-vertical"></koerber-icon>\n            </koerber-button>\n          </koerber-list-item>\n        </div>\n        This card has a header. You can put all sorts of things in it!\n      </koerber-card>`;\n    return getStoryTemplate(cardHTML);\n  }\n}',...Card_With_Header_1.parameters?.docs?.source}}},Card_With_Footer.parameters={...Card_With_Footer.parameters,docs:{...Card_With_Footer.parameters?.docs,source:{originalSource:'{\n  render: () => {\n    const cardHTML = `\n      <koerber-card style="max-width:300px">\n        This card has a footer. You can put all sorts of things in it!\n        <div slot="footer">\n          <koerber-button variant="secondary">More Info</koerber-button>\n          <koerber-button variant="primary">Preview</koerber-button>\n        </div>\n      </koerber-card>`;\n    return getStoryTemplate(cardHTML);\n  }\n}',...Card_With_Footer.parameters?.docs?.source}}},Card_With_All.parameters={...Card_With_All.parameters,docs:{...Card_With_All.parameters?.docs,source:{originalSource:'{\n  render: () => {\n    const cardHTML = `\n      <koerber-card style="max-width:300px">\n        <img\n          slot="image"\n          src="https://images.unsplash.com/photo-1547191783-94d5f8f6d8b1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80"\n          alt="A kitten walks towards camera on top of pallet."\n        />\n        This is a kitten, but not just any kitten. This kitten likes walking along pallets.\n        <div slot="header">\n          <span class="koerber-text-lg koerber-font-weight-bold">Header Title</span>\n        </div>\n        <div slot="footer">\n          <koerber-button variant="primary" pill>More Info</koerber-button>\n        </div>\n      </koerber-card>`;\n    return getStoryTemplate(cardHTML);\n  }\n}',...Card_With_All.parameters?.docs?.source}}},Card_With_Image.parameters={...Card_With_Image.parameters,docs:{...Card_With_Image.parameters?.docs,source:{originalSource:'{\n  render: () => {\n    const cardHTML = `\n      <koerber-card style="max-width:300px">\n        <img\n          slot="image"\n          src="https://images.unsplash.com/photo-1547191783-94d5f8f6d8b1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80"\n          alt="A kitten walks towards camera on top of pallet."\n        />\n        This is a kitten, but not just any kitten. This kitten likes walking along pallets.\n</koerber-card>`;\n    return getStoryTemplate(cardHTML);\n  }\n}',...Card_With_Image.parameters?.docs?.source}}},Card.parameters={...Card.parameters,docs:{...Card.parameters?.docs,source:{originalSource:'{\n  render: () => {\n    const cardHTML = `\n      <koerber-card style="max-width:300px">\n        <img slot="image"\n          src="https://images.unsplash.com/photo-1559209172-0ff8f6d49ff7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"\n          alt="A kitten sits patiently between a terracotta pot and decorative grasses."\n        />\n        <div slot="header">\n          <span class="koerber-text-lg koerber-font-weight-bold">Header Title</span>\n        </div>\n        This kitten is as cute as he is playful. Bring him home today!\n        <div slot="footer">\n          <koerber-button variant="primary" pill>More Info</koerber-button>\n        </div>\n      </koerber-card>`;\n    return getStoryTemplate(cardHTML);\n  }\n}',...Card.parameters?.docs?.source}}},Basic_Card.parameters={...Basic_Card.parameters,docs:{...Basic_Card.parameters?.docs,source:{originalSource:"{\n  render: () => {\n    const cardHTML = `\n      <koerber-card>\n        This is just a basic card. No image, no header, and no footer. Just your content.\n      </koerber-card>`;\n    return getStoryTemplate(cardHTML);\n  }\n}",...Basic_Card.parameters?.docs?.source}}},Card_Horizontal.parameters={...Card_Horizontal.parameters,docs:{...Card_Horizontal.parameters?.docs,source:{originalSource:'{\n  render: () => {\n    const cardHTML = `\n      <koerber-card style="min-width:400px">\n          <koerber-list-item value="1" label="Configure user" secondary-text="Viewer">\n            <koerber-icon slot="prefix" name="account"></koerber-icon>\n            <koerber-button size="medium" slot="suffix">\n              <koerber-icon name="dots-vertical"></koerber-icon>\n            </koerber-button>\n          </koerber-list-item>\n      </koerber-card>`;\n    return getStoryTemplate(cardHTML);\n  }\n}',...Card_Horizontal.parameters?.docs?.source}}},Grid_Card.parameters={...Grid_Card.parameters,docs:{...Grid_Card.parameters?.docs,source:{originalSource:'{\n  render: () => {\n    const cardHTML = `\n      <div class="grid grid-cols-3 gap-m" style="max-width:800px">\n        ${card}\n        ${card}\n        ${card}\n        ${card}\n        ${card}\n        ${card}\n      </div>`;\n    return getStoryTemplate(cardHTML);\n  }\n}',...Grid_Card.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Card_With_Header","Card_With_Header_1","Card_With_Footer","Card_With_All","Card_With_Image","Card","Basic_Card","Card_Horizontal","Grid_Card"]},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);