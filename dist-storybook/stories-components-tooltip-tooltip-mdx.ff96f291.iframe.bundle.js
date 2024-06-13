/*! For license information please see stories-components-tooltip-tooltip-mdx.ff96f291.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_koerber_uikit=self.webpackChunk_koerber_uikit||[]).push([[8362,3823],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>MDXProvider,a:()=>useMDXComponents});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const emptyComponents={},MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents);function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((function(){return"function"==typeof components?components(contextComponents):{...contextComponents,...components}}),[contextComponents,components])}function MDXProvider(properties){let allComponents;return allComponents=properties.disableParentContext?"function"==typeof properties.components?properties.components(emptyComponents):properties.components||emptyComponents:useMDXComponents(properties.components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},properties.children)}},"./src/stories/components/tooltip/tooltip.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>MDXContent});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),tooltip_stories=__webpack_require__("./src/stories/components/tooltip/tooltip.stories.ts"),injectStylesIntoStyleTag=(__webpack_require__("./node_modules/lit-html/lit-html.js"),__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),tooltip=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!./src/stories/components/tooltip/tooltip.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(tooltip.Z,options);tooltip.Z&&tooltip.Z.locals&&tooltip.Z.locals;__webpack_require__("./src/components/tooltip/tooltip.ts"),__webpack_require__("./src/components/button/button.ts");function _createMdxContent(props){const _components={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,lib.a)(),...props.components};return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Components/Tooltip"}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"tooltip",children:"Tooltip"}),"\n",(0,jsx_runtime.jsx)("code",{class:"koerber-text-xl",children:" <koerber-tooltip> | Tooltip "}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Tooltips display additional information based on a specific action."}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["A tooltip's target is its ",(0,jsx_runtime.jsx)(_components.em,{children:"first child element"}),", so you should only wrap one element inside of the tooltip. If you need the tooltip to show up for multiple elements, nest them inside a container first."]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Tooltips use ",(0,jsx_runtime.jsx)(_components.code,{children:"display: contents"})," to ensure they do not disrupt the positioning of elements within a flex or grid layout."]}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:(0,jsx_runtime.jsx)(_components.strong,{children:"API reference"})}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.a,{href:"#slots",children:"Slots"})," | ",(0,jsx_runtime.jsx)(_components.a,{href:"#methods",children:"Methods"})," | ",(0,jsx_runtime.jsx)(_components.a,{href:"#events",children:"Events"})," | ",(0,jsx_runtime.jsx)(_components.a,{href:"#dependencies",children:"Dependencies"})]}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:(0,jsx_runtime.jsx)(_components.strong,{children:"Examples"})}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.a,{href:"#placement",children:"Placement"})," | ",(0,jsx_runtime.jsx)(_components.a,{href:"#icon-tooltip",children:"Icon tooltip"})," | ",(0,jsx_runtime.jsx)(_components.a,{href:"#definition-tooltip",children:"Definition tooltip"})]}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:(0,jsx_runtime.jsx)(_components.strong,{children:"Usage guidelines"})}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.a,{href:"#when-to-use",children:"When to use"})," | ",(0,jsx_runtime.jsx)(_components.a,{href:"#usage-recommendations",children:"Usage recommendations"})]}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{of:tooltip_stories.Default}),"\n",(0,jsx_runtime.jsx)(dist.ZX,{of:tooltip_stories.Default}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"api-reference",children:"API reference"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"slots",children:"Slots"}),"\n",(0,jsx_runtime.jsxs)(_components.table,{children:[(0,jsx_runtime.jsx)(_components.thead,{children:(0,jsx_runtime.jsxs)(_components.tr,{children:[(0,jsx_runtime.jsx)(_components.th,{children:"Name"}),(0,jsx_runtime.jsx)(_components.th,{children:"Description"})]})}),(0,jsx_runtime.jsxs)(_components.tbody,{children:[(0,jsx_runtime.jsxs)(_components.tr,{children:[(0,jsx_runtime.jsx)(_components.td,{children:(0,jsx_runtime.jsx)(_components.code,{children:"(default)"})}),(0,jsx_runtime.jsx)(_components.td,{children:"The tooltip's target element. Avoid slotting in more than one element, as subsequent ones will be ignored."})]}),(0,jsx_runtime.jsxs)(_components.tr,{children:[(0,jsx_runtime.jsx)(_components.td,{children:(0,jsx_runtime.jsx)(_components.code,{children:"content"})}),(0,jsx_runtime.jsxs)(_components.td,{children:["The content to render in the tooltip. Alternatively, you can use the ",(0,jsx_runtime.jsx)(_components.code,{children:"content"})," attribute."]})]})]})]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Learn more about ",(0,jsx_runtime.jsx)(_components.a,{href:"/docs/getting-started-using-components--docs#slots",children:"Slots"}),"."]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"methods",children:"Methods"}),"\n",(0,jsx_runtime.jsxs)(_components.table,{children:[(0,jsx_runtime.jsx)(_components.thead,{children:(0,jsx_runtime.jsxs)(_components.tr,{children:[(0,jsx_runtime.jsx)(_components.th,{children:"Name"}),(0,jsx_runtime.jsx)(_components.th,{children:"Description"})]})}),(0,jsx_runtime.jsxs)(_components.tbody,{children:[(0,jsx_runtime.jsxs)(_components.tr,{children:[(0,jsx_runtime.jsx)(_components.td,{children:(0,jsx_runtime.jsx)(_components.code,{children:"show()"})}),(0,jsx_runtime.jsx)(_components.td,{children:"Shows the tooltip."})]}),(0,jsx_runtime.jsxs)(_components.tr,{children:[(0,jsx_runtime.jsx)(_components.td,{children:(0,jsx_runtime.jsx)(_components.code,{children:"hide()"})}),(0,jsx_runtime.jsx)(_components.td,{children:"Hides the tooltip"})]})]})]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Learn more about ",(0,jsx_runtime.jsx)(_components.a,{href:"/docs/getting-started-using-components--docs#methods",children:"Methods"}),"."]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"events",children:"Events"}),"\n",(0,jsx_runtime.jsxs)(_components.table,{children:[(0,jsx_runtime.jsx)(_components.thead,{children:(0,jsx_runtime.jsxs)(_components.tr,{children:[(0,jsx_runtime.jsx)(_components.th,{children:"Name"}),(0,jsx_runtime.jsx)(_components.th,{children:"Description"}),(0,jsx_runtime.jsx)(_components.th,{children:"Detail"})]})}),(0,jsx_runtime.jsxs)(_components.tbody,{children:[(0,jsx_runtime.jsxs)(_components.tr,{children:[(0,jsx_runtime.jsx)(_components.td,{children:(0,jsx_runtime.jsx)(_components.code,{children:"koerber-show"})}),(0,jsx_runtime.jsx)(_components.td,{children:"Emitted when the tooltip begins to show."}),(0,jsx_runtime.jsx)(_components.td,{children:"-"})]}),(0,jsx_runtime.jsxs)(_components.tr,{children:[(0,jsx_runtime.jsx)(_components.td,{children:(0,jsx_runtime.jsx)(_components.code,{children:"koerber-after-show"})}),(0,jsx_runtime.jsx)(_components.td,{children:"Emitted after the tooltip has shown and all animations are complete."}),(0,jsx_runtime.jsx)(_components.td,{children:"-"})]}),(0,jsx_runtime.jsxs)(_components.tr,{children:[(0,jsx_runtime.jsx)(_components.td,{children:(0,jsx_runtime.jsx)(_components.code,{children:"koerber-hide"})}),(0,jsx_runtime.jsx)(_components.td,{children:"Emitted when the tooltip begins to hide."}),(0,jsx_runtime.jsx)(_components.td,{children:"-"})]}),(0,jsx_runtime.jsxs)(_components.tr,{children:[(0,jsx_runtime.jsx)(_components.td,{children:(0,jsx_runtime.jsx)(_components.code,{children:"koerber-after-hide"})}),(0,jsx_runtime.jsx)(_components.td,{children:"Emitted after the tooltip has hidden and all animations are complete."}),(0,jsx_runtime.jsx)(_components.td,{children:"-"})]})]})]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Learn more about ",(0,jsx_runtime.jsx)(_components.a,{href:"/docs/getting-started-using-components--docs#events",children:"Events"}),"."]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"dependencies",children:"Dependencies"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"This component automatically imports the following dependencies:"}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsx)(_components.li,{children:"<koerber-popup>"}),"\n"]}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"examples",children:"Examples"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"placement",children:"Placement"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"placement"})," attribute to set the preferred placement of the tooltip."]}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{layout:"centered",withToolbar:!0,of:tooltip_stories.TooltipPlacementStory,source:tooltip_stories.TooltipPlacementCode}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"icon-tooltip",children:"Icon tooltip"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["The ",(0,jsx_runtime.jsx)(_components.code,{children:"content"})," attribute is used to set the information displayed in the tooltip. The tooltip for the icon should only have one or two words."]}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{layout:"centered",withToolbar:!0,of:tooltip_stories.Tooltip_Icon}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"definition-tooltip",children:"Definition tooltip"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["The ",(0,jsx_runtime.jsx)(_components.code,{children:"content"})," attribute is used to set the information displayed in the tooltip. A definition tooltip is used to show additional information about an item or text."]}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{layout:"centered",withToolbar:!0,of:tooltip_stories.Tooltip_Definition}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"usage-guidelines",children:"Usage guidelines"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"when-to-use",children:"When to use"}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsx)(_components.li,{children:"Use tooltips to provide contextual, useful information."}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:"Icon tooltip is used to clarify the action or name of an interactive icon button."}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:"Definition tooltip provides additional help or defines an item or term."}),"\n"]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"usage-recommendations",children:"Usage recommendations"}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsx)(_components.li,{children:"Avoid using tooltips for essential information for task completion."}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:"Provide brief and helpful content inside the tooltip."}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:"Use tooltip arrows when multiple elements are nearby."}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:"Use tooltips consistently throughout your site."}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:"Ensure tooltips have moderate contrast against the background."}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:"Position tooltips so they don't block related content."}),"\n"]})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,lib.a)(),...props.components};return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}},"./src/stories/components/tooltip/tooltip.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Content:()=>Content,Default:()=>Default,Open:()=>Open,TooltipPlacementCode:()=>TooltipPlacementCode,TooltipPlacementStory:()=>TooltipPlacementStory,Tooltip_Definition:()=>Tooltip_Definition,Tooltip_Icon:()=>Tooltip_Icon,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _utils__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/stories/utils.ts");__webpack_require__("./src/stories/component-imports.ts");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Tooltip-Stories",component:"koerber-tooltip",argTypes:{content:{control:{type:"text"},description:"The tooltip's content. If you need to display HTML, use the `content` slot instead.",defaultValue:"''",table:{type:{summary:"string",detail:"string"},defaultValue:{summary:"''"}}},placement:{control:{type:"select"},options:["top","top-start","top-end","right","right-start","right-end","bottom","bottom-start","bottom-end","left","left-start","left-end"],description:"The preferred placement of the tooltip. Note that the actual placement may vary as needed to keep the tooltip\ninside of the viewport.",defaultValue:"'top'",table:{type:{summary:"| 'top'\n    | 'top-start'\n    | 'top-end'\n    | 'right'\n    | 'right-start'\n    | 'right-end'\n    | 'bottom'\n    | 'bottom-start'\n    | 'bottom-end'\n    | 'left'\n    | 'left-start'\n    | 'left-end'",detail:"| 'top'\n    | 'top-start'\n    | 'top-end'\n    | 'right'\n    | 'right-start'\n    | 'right-end'\n    | 'bottom'\n    | 'bottom-start'\n    | 'bottom-end'\n    | 'left'\n    | 'left-start'\n    | 'left-end'"},defaultValue:{summary:"'top'"}}},open:{control:{type:"boolean"},description:"Indicates whether or not the tooltip is open. You can use this in lieu of the show/hide methods.",defaultValue:"false",table:{type:{summary:"boolean",detail:"boolean"},defaultValue:{summary:"false"}}},hoist:{control:{type:"boolean"},description:"Enable this option to prevent the tooltip from being clipped when the component is placed inside a container with\n`overflow: auto|hidden|scroll`. Hoisting uses a fixed positioning strategy that works in many, but not all,\nscenarios.",defaultValue:"false",table:{type:{summary:"boolean",detail:"boolean"},defaultValue:{summary:"false"}}}}},Default={render:args=>{const tooltipHTML=`<koerber-tooltip ${(0,_utils__WEBPACK_IMPORTED_MODULE_0__.c)({args})} hoist><koerber-button size="medium">Button</koerber-button></koerber-tooltip>`;return(0,_utils__WEBPACK_IMPORTED_MODULE_0__.a)(tooltipHTML)},args:{content:"Button Tooltip"},storyName:"Default"},Content={render:args=>{const tooltipHTML=`<koerber-tooltip ${(0,_utils__WEBPACK_IMPORTED_MODULE_0__.c)({args})} hoist><koerber-button size="medium">Button</koerber-button></koerber-tooltip>`;return(0,_utils__WEBPACK_IMPORTED_MODULE_0__.a)(tooltipHTML)},args:{content:"Button Tooltip"},storyName:"Content"},Open={render:args=>{const tooltipHTML=`<koerber-tooltip ${(0,_utils__WEBPACK_IMPORTED_MODULE_0__.c)({args})} hoist><koerber-button size="medium">Button</koerber-button></koerber-tooltip>`;return(0,_utils__WEBPACK_IMPORTED_MODULE_0__.a)(tooltipHTML)},args:{open:!0},storyName:"Open"},PlacementtooltipHTML='\n<div class="tooltip-placement-example">\n  <div class="tooltip-placement-example-row">\n    <koerber-tooltip content="top-start" placement="top-start" hoist>\n    <koerber-button outline></koerber-button>\n    </koerber-tooltip>\n\n    <koerber-tooltip content="top" placement="top" hoist>\n      <koerber-button outline></koerber-button>\n    </koerber-tooltip>\n\n    <koerber-tooltip content="top-end" placement="top-end" hoist>\n      <koerber-button outline></koerber-button>\n    </koerber-tooltip>\n\n  </div>\n\n  <div class="tooltip-placement-example-row">\n    <koerber-tooltip content="left-start" placement="left-start" hoist>\n    <koerber-button outline></koerber-button>\n    </koerber-tooltip>\n\n    <koerber-tooltip content="right-start" placement="right-start" hoist>\n      <koerber-button outline></koerber-button>\n    </koerber-tooltip>\n\n  </div>\n\n  <div class="tooltip-placement-example-row">\n    <koerber-tooltip content="left" placement="left" hoist>\n    <koerber-button outline></koerber-button>\n    </koerber-tooltip>\n\n    <koerber-tooltip content="right" placement="right" hoist>\n      <koerber-button outline></koerber-button>\n    </koerber-tooltip>\n\n  </div>\n\n  <div class="tooltip-placement-example-row">\n    <koerber-tooltip content="left-end" placement="left-end" hoist>\n    <koerber-button outline></koerber-button>\n    </koerber-tooltip>\n\n    <koerber-tooltip content="right-end" placement="right-end" hoist>\n      <koerber-button outline></koerber-button>\n    </koerber-tooltip>\n\n  </div>\n\n  <div class="tooltip-placement-example-row">\n    <koerber-tooltip content="bottom-start" placement="bottom-start" hoist>\n    <koerber-button outline></koerber-button>\n    </koerber-tooltip>\n\n    <koerber-tooltip content="bottom" placement="bottom" hoist>\n      <koerber-button outline></koerber-button>\n    </koerber-tooltip>\n\n    <koerber-tooltip content="bottom-end" placement="bottom-end" hoist>\n      <koerber-button outline></koerber-button>\n    </koerber-tooltip>\n\n  </div>\n</div>',TooltipPlacementStory={render:()=>(0,_utils__WEBPACK_IMPORTED_MODULE_0__.a)(PlacementtooltipHTML)},TooltipPlacementCode={code:`${PlacementtooltipHTML}\n\n<style>\n  .tooltip-placement-example {\n    width: 250px;\n    margin: 1rem;\n  }\n\n  .tooltip-placement-example-row:after {\n    content: "";\n    display: table;\n    clear: both;\n  }\n\n  .tooltip-placement-example koerber-button {\n    float: left;\n    width: 2.5rem;\n    margin-right: 0.25rem;\n   margin-bottom: 0.25rem;\n  }\n\n  .tooltip-placement-example-row:nth-child(1) koerber-tooltip:first-child koerber-button,\n  .tooltip-placement-example-row:nth-child(5) koerber-tooltip:first-child koerber-button {\n    margin-left: calc(40px + 0.25rem);\n  }\n\n  .tooltip-placement-example-row:nth-child(2) koerber-tooltip:nth-child(2) koerber-button,\n  .tooltip-placement-example-row:nth-child(3) koerber-tooltip:nth-child(2) koerber-button,\n  .tooltip-placement-example-row:nth-child(4) koerber-tooltip:nth-child(2) koerber-button {\n    margin-left: calc((40px * 3) + (0.25rem * 3));\n  }\n</style>`},Tooltip_Icon={render:()=>(0,_utils__WEBPACK_IMPORTED_MODULE_0__.a)('\n<div class="icon-tooltip">\n  <koerber-tooltip content="Next" placement="top" hoist>\n    <koerber-icon name="arrow-right"></koerber-icon>\n  </koerber-tooltip>\n</div>')},Tooltip_Definition={render:()=>(0,_utils__WEBPACK_IMPORTED_MODULE_0__.a)('\n<div class="desc-tooltip">\n  <koerber-tooltip\n    content="The definition tooltip provides additional help or defines an item or term."\n    placement="bottom-start"\n    hoist>\n    <p>Definition tooltip</p>\n  </koerber-tooltip>\n</div>')};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  render: args => {\n    const attributes = generateAttributes({\n      args\n    });\n    const tooltipHTML = `<koerber-tooltip ${attributes} hoist><koerber-button size=\"medium\">Button</koerber-button></koerber-tooltip>`;\n    return getStoryTemplate(tooltipHTML);\n  },\n  args: {\n    content: 'Button Tooltip'\n  }\n}",...Default.parameters?.docs?.source}}},Content.parameters={...Content.parameters,docs:{...Content.parameters?.docs,source:{originalSource:"{\n  render: args => {\n    const attributes = generateAttributes({\n      args\n    });\n    const tooltipHTML = `<koerber-tooltip ${attributes} hoist><koerber-button size=\"medium\">Button</koerber-button></koerber-tooltip>`;\n    return getStoryTemplate(tooltipHTML);\n  },\n  args: {\n    content: 'Button Tooltip'\n  }\n}",...Content.parameters?.docs?.source}}},Open.parameters={...Open.parameters,docs:{...Open.parameters?.docs,source:{originalSource:'{\n  render: args => {\n    const attributes = generateAttributes({\n      args\n    });\n    const tooltipHTML = `<koerber-tooltip ${attributes} hoist><koerber-button size="medium">Button</koerber-button></koerber-tooltip>`;\n    return getStoryTemplate(tooltipHTML);\n  },\n  args: {\n    open: true\n  }\n}',...Open.parameters?.docs?.source}}},TooltipPlacementStory.parameters={...TooltipPlacementStory.parameters,docs:{...TooltipPlacementStory.parameters?.docs,source:{originalSource:"{\n  render: () => {\n    return getStoryTemplate(PlacementtooltipHTML);\n  }\n}",...TooltipPlacementStory.parameters?.docs?.source}}},TooltipPlacementCode.parameters={...TooltipPlacementCode.parameters,docs:{...TooltipPlacementCode.parameters?.docs,source:{originalSource:'{\n  code: `${PlacementtooltipHTML}\\n\n<style>\n  .tooltip-placement-example {\n    width: 250px;\n    margin: 1rem;\n  }\n\n  .tooltip-placement-example-row:after {\n    content: "";\n    display: table;\n    clear: both;\n  }\n\n  .tooltip-placement-example koerber-button {\n    float: left;\n    width: 2.5rem;\n    margin-right: 0.25rem;\n   margin-bottom: 0.25rem;\n  }\n\n  .tooltip-placement-example-row:nth-child(1) koerber-tooltip:first-child koerber-button,\n  .tooltip-placement-example-row:nth-child(5) koerber-tooltip:first-child koerber-button {\n    margin-left: calc(40px + 0.25rem);\n  }\n\n  .tooltip-placement-example-row:nth-child(2) koerber-tooltip:nth-child(2) koerber-button,\n  .tooltip-placement-example-row:nth-child(3) koerber-tooltip:nth-child(2) koerber-button,\n  .tooltip-placement-example-row:nth-child(4) koerber-tooltip:nth-child(2) koerber-button {\n    margin-left: calc((40px * 3) + (0.25rem * 3));\n  }\n</style>`\n}',...TooltipPlacementCode.parameters?.docs?.source}}},Tooltip_Icon.parameters={...Tooltip_Icon.parameters,docs:{...Tooltip_Icon.parameters?.docs,source:{originalSource:'{\n  render: () => {\n    const tooltipHTML = `\n<div class="icon-tooltip">\n  <koerber-tooltip content="Next" placement="top" hoist>\n    <koerber-icon name="arrow-right"></koerber-icon>\n  </koerber-tooltip>\n</div>`;\n    return getStoryTemplate(tooltipHTML);\n  }\n}',...Tooltip_Icon.parameters?.docs?.source}}},Tooltip_Definition.parameters={...Tooltip_Definition.parameters,docs:{...Tooltip_Definition.parameters?.docs,source:{originalSource:'{\n  render: () => {\n    const tooltipHTML = `\n<div class="desc-tooltip">\n  <koerber-tooltip\n    content="The definition tooltip provides additional help or defines an item or term."\n    placement="bottom-start"\n    hoist>\n    <p>Definition tooltip</p>\n  </koerber-tooltip>\n</div>`;\n    return getStoryTemplate(tooltipHTML);\n  }\n}',...Tooltip_Definition.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Content","Open","TooltipPlacementStory","TooltipPlacementCode","Tooltip_Icon","Tooltip_Definition"]},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!./src/stories/components/tooltip/tooltip.css":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".tooltip-placement-example {\n  width: 250px;\n  margin: 1rem;\n}\n\n.tooltip-placement-example-row:after {\n  content: '';\n  display: table;\n  clear: both;\n}\n\n.tooltip-placement-example koerber-button {\n  float: left;\n  width: 2.5rem;\n  margin-right: 0.25rem;\n  margin-bottom: 0.25rem;\n}\n\n.tooltip-placement-example-row:nth-child(1) koerber-tooltip:first-child koerber-button,\n.tooltip-placement-example-row:nth-child(5) koerber-tooltip:first-child koerber-button {\n  margin-left: calc(40px + 0.25rem);\n}\n\n.tooltip-placement-example-row:nth-child(2) koerber-tooltip:nth-child(2) koerber-button,\n.tooltip-placement-example-row:nth-child(3) koerber-tooltip:nth-child(2) koerber-button,\n.tooltip-placement-example-row:nth-child(4) koerber-tooltip:nth-child(2) koerber-button {\n  margin-left: calc((40px * 3) + (0.25rem * 3));\n}\n\n.icon-tooltip {\n  display: flex;\n  justify-content: center;\n}\n\n.desc-tooltip {\n  display: flex;\n  justify-content: center;\n}\n\n.desc-tooltip p {\n  text-decoration: underline;\n}\n","",{version:3,sources:["webpack://./src/stories/components/tooltip/tooltip.css"],names:[],mappings:"AAAA;EACE,YAAY;EACZ,YAAY;AACd;;AAEA;EACE,WAAW;EACX,cAAc;EACd,WAAW;AACb;;AAEA;EACE,WAAW;EACX,aAAa;EACb,qBAAqB;EACrB,sBAAsB;AACxB;;AAEA;;EAEE,iCAAiC;AACnC;;AAEA;;;EAGE,6CAA6C;AAC/C;;AAEA;EACE,aAAa;EACb,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,uBAAuB;AACzB;;AAEA;EACE,0BAA0B;AAC5B",sourcesContent:[".tooltip-placement-example {\n  width: 250px;\n  margin: 1rem;\n}\n\n.tooltip-placement-example-row:after {\n  content: '';\n  display: table;\n  clear: both;\n}\n\n.tooltip-placement-example koerber-button {\n  float: left;\n  width: 2.5rem;\n  margin-right: 0.25rem;\n  margin-bottom: 0.25rem;\n}\n\n.tooltip-placement-example-row:nth-child(1) koerber-tooltip:first-child koerber-button,\n.tooltip-placement-example-row:nth-child(5) koerber-tooltip:first-child koerber-button {\n  margin-left: calc(40px + 0.25rem);\n}\n\n.tooltip-placement-example-row:nth-child(2) koerber-tooltip:nth-child(2) koerber-button,\n.tooltip-placement-example-row:nth-child(3) koerber-tooltip:nth-child(2) koerber-button,\n.tooltip-placement-example-row:nth-child(4) koerber-tooltip:nth-child(2) koerber-button {\n  margin-left: calc((40px * 3) + (0.25rem * 3));\n}\n\n.icon-tooltip {\n  display: flex;\n  justify-content: center;\n}\n\n.desc-tooltip {\n  display: flex;\n  justify-content: center;\n}\n\n.desc-tooltip p {\n  text-decoration: underline;\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);