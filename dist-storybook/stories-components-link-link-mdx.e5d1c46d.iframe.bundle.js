/*! For license information please see stories-components-link-link-mdx.e5d1c46d.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_koerber_uikit=self.webpackChunk_koerber_uikit||[]).push([[3271,8791],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>MDXProvider,a:()=>useMDXComponents});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const emptyComponents={},MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents);function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((function(){return"function"==typeof components?components(contextComponents):{...contextComponents,...components}}),[contextComponents,components])}function MDXProvider(properties){let allComponents;return allComponents=properties.disableParentContext?"function"==typeof properties.components?properties.components(emptyComponents):properties.components||emptyComponents:useMDXComponents(properties.components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},properties.children)}},"./src/stories/components/link/link.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>MDXContent});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),E_jalasoft_uikit_uikit_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_link_stories__WEBPACK_IMPORTED_MODULE_4__=(__webpack_require__("./node_modules/lit-html/lit-html.js"),__webpack_require__("./node_modules/lit-html/directives/unsafe-html.js"),__webpack_require__("./src/stories/components/link/link.stories.ts"));function _createMdxContent(props){const _components={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,E_jalasoft_uikit_uikit_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_5__.a)(),...props.components};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_6__.h_,{title:"Components/Link"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"link",children:"Link"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("code",{class:"koerber-text-xl",children:" <koerber-link> | Link "}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Links are used as navigational elements. They appear on their own, within a sentence or paragraph, or directly\nfollowing the content."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong,{children:"API reference"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#slots",children:"Slots"})," | ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#methods",children:"Methods"})," | ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#events",children:"Events"})," | ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#dependencies",children:"Dependencies"})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong,{children:"Examples"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#show-icon",children:"Show icon"})," | ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#underline",children:"Underline"})," | ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#size",children:"Size"})," | ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#disabled",children:"Disabled"})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong,{children:"Usage guidelines"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#when-to-use",children:"When to use"})," | ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#usage-recommendations",children:"Usage recommendations"})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_6__.Xz,{of:_link_stories__WEBPACK_IMPORTED_MODULE_4__.Default}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_6__.ZX,{of:_link_stories__WEBPACK_IMPORTED_MODULE_4__.Default}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"api-reference",children:"API reference"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"slots",children:"Slots"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.table,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.thead,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tr,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.th,{children:"Name"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.th,{children:"Description"})]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.tbody,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tr,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"(default)"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td,{children:"The link's label."})]})})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Learn more about ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"/docs/getting-started-using-components--docs#slots",children:"Slots"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"methods",children:"Methods"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.table,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.thead,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tr,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.th,{children:"Name"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.th,{children:"Description"})]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tbody,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tr,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"click()"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td,{children:"Simulates a click on the link."})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tr,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"focus()"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td,{children:"Sets focus on the link."})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tr,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"blur()"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td,{children:"Removes focus from the link."})]})]})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Learn more about ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"/docs/getting-started-using-components--docs#methods",children:"Methods"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"events",children:"Events"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.table,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.thead,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tr,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.th,{children:"Name"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.th,{children:"Description"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.th,{children:"Detail"})]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tbody,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tr,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"koerber-blur"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td,{children:"Emitted when the link loses focus."}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td,{children:"-"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tr,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"koerber-focus"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td,{children:"Emitted when the link gains focus."}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td,{children:"-"})]})]})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Learn more about ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"/docs/getting-started-using-components--docs#events",children:"Events"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"dependencies",children:"Dependencies"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"This component automatically imports the following dependencies:"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:"<koerber-icon>"}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"examples",children:"Examples"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"show-icon",children:"Show icon"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Use the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"showicon"})," attribute to display the icon on a link."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_6__.Xz,{of:_link_stories__WEBPACK_IMPORTED_MODULE_4__.Showicon}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"underline",children:"Underline"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Use the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"underline"})," attribute to underline a link."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_6__.Xz,{of:_link_stories__WEBPACK_IMPORTED_MODULE_4__.Underline}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"size",children:"Size"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Use the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"size"})," attribute to change the size of the link."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_6__.Xz,{of:_link_stories__WEBPACK_IMPORTED_MODULE_4__.Link_Sizes}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"disabled",children:"Disabled"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Use the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"disabled"})," attribute to disable a link. Clicks will be suppressed until the disabled state is removed."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_6__.Xz,{of:_link_stories__WEBPACK_IMPORTED_MODULE_4__.Disabled}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"usage-guidelines",children:"Usage guidelines"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"when-to-use",children:"When to use"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:"Transitioning to a different page within the application."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:"Navigating to an entirely different site."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:"Jumping to an element on the same page"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:"Linking to emails or phone numbers."}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.table,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.thead,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tr,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.th,{children:"Variant"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.th,{children:"Usage"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.th,{children:"Examples"})]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tbody,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tr,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td,{children:"Link"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("ul",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("li",{children:"These links are the default link variant."}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("li",{children:"They are used on their own or directly following content and they do not use underlines."})," ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("li",{children:"They can be paired with an icon."})]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("li",{children:"Learn more option."})})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tr,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td,{children:"Underline link"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("ul",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("li",{children:"To navigate to a new destination, either internally or externally."})," ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("li",{children:"Within a block of body text or other text element."})]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("li",{children:"Some link in the middle of the text."})})]})]})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"usage-recommendations",children:"Usage recommendations"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:"Ensure that link names match the page name they lead to."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:"Avoid using the full name of a document or program as a link name."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:"Prioritize explicitness; longer descriptions are preferable to ambiguity."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:"Make sure the linked text conveys meaningful information."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:"Size links appropriately for optimal usability."}),"\n"]})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,E_jalasoft_uikit_uikit_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_5__.a)(),...props.components};return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}},"./src/stories/components/link/link.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Disabled:()=>Disabled,Href:()=>Href,Link_Sizes:()=>Link_Sizes,Rel:()=>Rel,Showicon:()=>Showicon,Size_Large:()=>Size_Large,Size_Medium:()=>Size_Medium,Size_Small:()=>Size_Small,Target:()=>Target,Title:()=>Title,Underline:()=>Underline,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _utils__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/stories/utils.ts");__webpack_require__("./src/stories/component-imports.ts");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Link-Stories",component:"koerber-link",argTypes:{href:{control:{type:"text"},defaultValue:"''",table:{type:{summary:"string",detail:"string"},defaultValue:{summary:"''"}}},target:{control:{type:"text"},description:"Tells the browser where to open the link. Only used when `href` is set.",defaultValue:"'_blank'",table:{type:{summary:"string",detail:"string"},defaultValue:{summary:"'_blank'"}}},rel:{control:{type:"text"},description:"The `rel` attribute to use on the link. Only used when `href` is set.",defaultValue:"'noreferrer noopener'",table:{type:{summary:"string",detail:"string"},defaultValue:{summary:"'noreferrer noopener'"}}},title:{control:{type:"text"},defaultValue:"''",table:{type:{summary:"string",detail:"string"},defaultValue:{summary:"''"}}},size:{control:{type:"select"},options:["small","medium","large"],description:"The link's size.",defaultValue:"'medium'",table:{type:{summary:"'small' | 'medium' | 'large'",detail:"'small' | 'medium' | 'large'"},defaultValue:{summary:"'medium'"}}},disabled:{control:{type:"boolean"},description:"Disables the link.",defaultValue:"false",table:{type:{summary:"boolean",detail:"boolean"},defaultValue:{summary:"false"}}},underline:{control:{type:"boolean"},defaultValue:"false",table:{type:{summary:"boolean",detail:"boolean"},defaultValue:{summary:"false"}}},showIcon:{control:{type:"boolean"},description:"Shows the Icon",defaultValue:"false",table:{type:{summary:"boolean",detail:"boolean"},defaultValue:{summary:"false"}}}}},Default={render:args=>{const linkHTML=`<koerber-link ${(0,_utils__WEBPACK_IMPORTED_MODULE_0__.c)({args})} href="https://www.google.com" title="Google">See More</koerber-link>`;return(0,_utils__WEBPACK_IMPORTED_MODULE_0__.a)(linkHTML)},args:{href:"https://www.google.com"},storyName:"Default"},Href={render:args=>{const linkHTML=`<koerber-link ${(0,_utils__WEBPACK_IMPORTED_MODULE_0__.c)({args})} href="https://www.google.com" title="Google">See More</koerber-link>`;return(0,_utils__WEBPACK_IMPORTED_MODULE_0__.a)(linkHTML)},args:{href:"https://www.google.com"},storyName:"Href"},Target={render:args=>{const linkHTML=`<koerber-link ${(0,_utils__WEBPACK_IMPORTED_MODULE_0__.c)({args})} href="https://www.google.com" title="Google">See More</koerber-link>`;return(0,_utils__WEBPACK_IMPORTED_MODULE_0__.a)(linkHTML)},args:{target:"'_blank'"},storyName:"Target"},Rel={render:args=>{const linkHTML=`<koerber-link ${(0,_utils__WEBPACK_IMPORTED_MODULE_0__.c)({args})} href="https://www.google.com" title="Google">See More</koerber-link>`;return(0,_utils__WEBPACK_IMPORTED_MODULE_0__.a)(linkHTML)},args:{rel:"'noreferrer noopener'"},storyName:"Rel"},Title={render:args=>{const linkHTML=`<koerber-link ${(0,_utils__WEBPACK_IMPORTED_MODULE_0__.c)({args})} href="https://www.google.com" title="Google">See More</koerber-link>`;return(0,_utils__WEBPACK_IMPORTED_MODULE_0__.a)(linkHTML)},args:{title:"Google"},storyName:"Title"},Size_Small={render:args=>{const linkHTML=`<koerber-link ${(0,_utils__WEBPACK_IMPORTED_MODULE_0__.c)({args})} href="https://www.google.com" title="Google">See More</koerber-link>`;return(0,_utils__WEBPACK_IMPORTED_MODULE_0__.a)(linkHTML)},args:{size:"small"},storyName:"Size: Small"},Size_Medium={render:args=>{const linkHTML=`<koerber-link ${(0,_utils__WEBPACK_IMPORTED_MODULE_0__.c)({args})} href="https://www.google.com" title="Google">See More</koerber-link>`;return(0,_utils__WEBPACK_IMPORTED_MODULE_0__.a)(linkHTML)},args:{size:"medium"},storyName:"Size: Medium"},Size_Large={render:args=>{const linkHTML=`<koerber-link ${(0,_utils__WEBPACK_IMPORTED_MODULE_0__.c)({args})} href="https://www.google.com" title="Google">See More</koerber-link>`;return(0,_utils__WEBPACK_IMPORTED_MODULE_0__.a)(linkHTML)},args:{size:"large"},storyName:"Size: Large"},Disabled={render:args=>{const linkHTML=`<koerber-link ${(0,_utils__WEBPACK_IMPORTED_MODULE_0__.c)({args})} href="https://www.google.com" title="Google">See More</koerber-link>`;return(0,_utils__WEBPACK_IMPORTED_MODULE_0__.a)(linkHTML)},args:{disabled:!0},storyName:"Disabled"},Underline={render:args=>{const linkHTML=`<koerber-link ${(0,_utils__WEBPACK_IMPORTED_MODULE_0__.c)({args})} href="https://www.google.com" title="Google">See More</koerber-link>`;return(0,_utils__WEBPACK_IMPORTED_MODULE_0__.a)(linkHTML)},args:{underline:!0},storyName:"Underline"},Showicon={render:args=>{const linkHTML=`<koerber-link ${(0,_utils__WEBPACK_IMPORTED_MODULE_0__.c)({args})} href="https://www.google.com" title="Google">See More</koerber-link>`;return(0,_utils__WEBPACK_IMPORTED_MODULE_0__.a)(linkHTML)},args:{showIcon:!0},storyName:"Showicon"},Link_Sizes={render:()=>(0,_utils__WEBPACK_IMPORTED_MODULE_0__.a)('\n<div class="grid grid-cols-3 gap-s">\n  <div style="display: flex;align-items: center;justify-content: center">\n    <koerber-link size="small" href="https://www.google.com" title="Google">See More</koerber-link>\n  </div>\n\n  <div style="display: flex;align-items: center;justify-content: center">\n    <koerber-link size="medium" href="https://www.google.com" title="Google">See More</koerber-link>\n  </div>\n\n  <div style="display: flex;align-items: center;justify-content: center">\n    <koerber-link size="large" href="https://www.google.com" title="Google">See More</koerber-link>\n  </div>\n</div>\n    ')};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  render: args => {\n    const attributes = generateAttributes({\n      args\n    });\n    const linkHTML = `<koerber-link ${attributes} href="https://www.google.com" title="Google">See More</koerber-link>`;\n    return getStoryTemplate(linkHTML);\n  },\n  args: {\n    href: \'https://www.google.com\'\n  }\n}',...Default.parameters?.docs?.source}}},Href.parameters={...Href.parameters,docs:{...Href.parameters?.docs,source:{originalSource:'{\n  render: args => {\n    const attributes = generateAttributes({\n      args\n    });\n    const linkHTML = `<koerber-link ${attributes} href="https://www.google.com" title="Google">See More</koerber-link>`;\n    return getStoryTemplate(linkHTML);\n  },\n  args: {\n    href: \'https://www.google.com\'\n  }\n}',...Href.parameters?.docs?.source}}},Target.parameters={...Target.parameters,docs:{...Target.parameters?.docs,source:{originalSource:'{\n  render: args => {\n    const attributes = generateAttributes({\n      args\n    });\n    const linkHTML = `<koerber-link ${attributes} href="https://www.google.com" title="Google">See More</koerber-link>`;\n    return getStoryTemplate(linkHTML);\n  },\n  args: {\n    target: "\'_blank\'"\n  }\n}',...Target.parameters?.docs?.source}}},Rel.parameters={...Rel.parameters,docs:{...Rel.parameters?.docs,source:{originalSource:'{\n  render: args => {\n    const attributes = generateAttributes({\n      args\n    });\n    const linkHTML = `<koerber-link ${attributes} href="https://www.google.com" title="Google">See More</koerber-link>`;\n    return getStoryTemplate(linkHTML);\n  },\n  args: {\n    rel: "\'noreferrer noopener\'"\n  }\n}',...Rel.parameters?.docs?.source}}},Title.parameters={...Title.parameters,docs:{...Title.parameters?.docs,source:{originalSource:'{\n  render: args => {\n    const attributes = generateAttributes({\n      args\n    });\n    const linkHTML = `<koerber-link ${attributes} href="https://www.google.com" title="Google">See More</koerber-link>`;\n    return getStoryTemplate(linkHTML);\n  },\n  args: {\n    title: \'Google\'\n  }\n}',...Title.parameters?.docs?.source}}},Size_Small.parameters={...Size_Small.parameters,docs:{...Size_Small.parameters?.docs,source:{originalSource:'{\n  render: args => {\n    const attributes = generateAttributes({\n      args\n    });\n    const linkHTML = `<koerber-link ${attributes} href="https://www.google.com" title="Google">See More</koerber-link>`;\n    return getStoryTemplate(linkHTML);\n  },\n  args: {\n    size: \'small\'\n  }\n}',...Size_Small.parameters?.docs?.source}}},Size_Medium.parameters={...Size_Medium.parameters,docs:{...Size_Medium.parameters?.docs,source:{originalSource:'{\n  render: args => {\n    const attributes = generateAttributes({\n      args\n    });\n    const linkHTML = `<koerber-link ${attributes} href="https://www.google.com" title="Google">See More</koerber-link>`;\n    return getStoryTemplate(linkHTML);\n  },\n  args: {\n    size: \'medium\'\n  }\n}',...Size_Medium.parameters?.docs?.source}}},Size_Large.parameters={...Size_Large.parameters,docs:{...Size_Large.parameters?.docs,source:{originalSource:'{\n  render: args => {\n    const attributes = generateAttributes({\n      args\n    });\n    const linkHTML = `<koerber-link ${attributes} href="https://www.google.com" title="Google">See More</koerber-link>`;\n    return getStoryTemplate(linkHTML);\n  },\n  args: {\n    size: \'large\'\n  }\n}',...Size_Large.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:'{\n  render: args => {\n    const attributes = generateAttributes({\n      args\n    });\n    const linkHTML = `<koerber-link ${attributes} href="https://www.google.com" title="Google">See More</koerber-link>`;\n    return getStoryTemplate(linkHTML);\n  },\n  args: {\n    disabled: true\n  }\n}',...Disabled.parameters?.docs?.source}}},Underline.parameters={...Underline.parameters,docs:{...Underline.parameters?.docs,source:{originalSource:'{\n  render: args => {\n    const attributes = generateAttributes({\n      args\n    });\n    const linkHTML = `<koerber-link ${attributes} href="https://www.google.com" title="Google">See More</koerber-link>`;\n    return getStoryTemplate(linkHTML);\n  },\n  args: {\n    underline: true\n  }\n}',...Underline.parameters?.docs?.source}}},Showicon.parameters={...Showicon.parameters,docs:{...Showicon.parameters?.docs,source:{originalSource:'{\n  render: args => {\n    const attributes = generateAttributes({\n      args\n    });\n    const linkHTML = `<koerber-link ${attributes} href="https://www.google.com" title="Google">See More</koerber-link>`;\n    return getStoryTemplate(linkHTML);\n  },\n  args: {\n    showIcon: true\n  }\n}',...Showicon.parameters?.docs?.source}}},Link_Sizes.parameters={...Link_Sizes.parameters,docs:{...Link_Sizes.parameters?.docs,source:{originalSource:'{\n  render: () => {\n    const linkHTML = `\n<div class="grid grid-cols-3 gap-s">\n  <div style="display: flex;align-items: center;justify-content: center">\n    <koerber-link size="small" href="https://www.google.com" title="Google">See More</koerber-link>\n  </div>\n\n  <div style="display: flex;align-items: center;justify-content: center">\n    <koerber-link size="medium" href="https://www.google.com" title="Google">See More</koerber-link>\n  </div>\n\n  <div style="display: flex;align-items: center;justify-content: center">\n    <koerber-link size="large" href="https://www.google.com" title="Google">See More</koerber-link>\n  </div>\n</div>\n    `;\n    return getStoryTemplate(linkHTML);\n  }\n}',...Link_Sizes.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Href","Target","Rel","Title","Size_Small","Size_Medium","Size_Large","Disabled","Underline","Showicon","Link_Sizes"]},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);