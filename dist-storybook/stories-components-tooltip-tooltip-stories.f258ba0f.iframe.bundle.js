"use strict";(self.webpackChunk_koerber_uikit=self.webpackChunk_koerber_uikit||[]).push([[3823],{"./src/stories/components/tooltip/tooltip.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Content:()=>Content,Default:()=>Default,Open:()=>Open,TooltipPlacementCode:()=>TooltipPlacementCode,TooltipPlacementStory:()=>TooltipPlacementStory,Tooltip_Definition:()=>Tooltip_Definition,Tooltip_Icon:()=>Tooltip_Icon,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _utils__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/stories/utils.ts");__webpack_require__("./src/stories/component-imports.ts");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Tooltip-Stories",component:"koerber-tooltip",argTypes:{content:{control:{type:"text"},description:"The tooltip's content. If you need to display HTML, use the `content` slot instead.",defaultValue:"''",table:{type:{summary:"string",detail:"string"},defaultValue:{summary:"''"}}},placement:{control:{type:"select"},options:["top","top-start","top-end","right","right-start","right-end","bottom","bottom-start","bottom-end","left","left-start","left-end"],description:"The preferred placement of the tooltip. Note that the actual placement may vary as needed to keep the tooltip\ninside of the viewport.",defaultValue:"'top'",table:{type:{summary:"| 'top'\n    | 'top-start'\n    | 'top-end'\n    | 'right'\n    | 'right-start'\n    | 'right-end'\n    | 'bottom'\n    | 'bottom-start'\n    | 'bottom-end'\n    | 'left'\n    | 'left-start'\n    | 'left-end'",detail:"| 'top'\n    | 'top-start'\n    | 'top-end'\n    | 'right'\n    | 'right-start'\n    | 'right-end'\n    | 'bottom'\n    | 'bottom-start'\n    | 'bottom-end'\n    | 'left'\n    | 'left-start'\n    | 'left-end'"},defaultValue:{summary:"'top'"}}},open:{control:{type:"boolean"},description:"Indicates whether or not the tooltip is open. You can use this in lieu of the show/hide methods.",defaultValue:"false",table:{type:{summary:"boolean",detail:"boolean"},defaultValue:{summary:"false"}}},hoist:{control:{type:"boolean"},description:"Enable this option to prevent the tooltip from being clipped when the component is placed inside a container with\n`overflow: auto|hidden|scroll`. Hoisting uses a fixed positioning strategy that works in many, but not all,\nscenarios.",defaultValue:"false",table:{type:{summary:"boolean",detail:"boolean"},defaultValue:{summary:"false"}}}}},Default={render:args=>{const tooltipHTML=`<koerber-tooltip ${(0,_utils__WEBPACK_IMPORTED_MODULE_0__.c)({args})} hoist><koerber-button size="medium">Button</koerber-button></koerber-tooltip>`;return(0,_utils__WEBPACK_IMPORTED_MODULE_0__.a)(tooltipHTML)},args:{content:"Button Tooltip"},storyName:"Default"},Content={render:args=>{const tooltipHTML=`<koerber-tooltip ${(0,_utils__WEBPACK_IMPORTED_MODULE_0__.c)({args})} hoist><koerber-button size="medium">Button</koerber-button></koerber-tooltip>`;return(0,_utils__WEBPACK_IMPORTED_MODULE_0__.a)(tooltipHTML)},args:{content:"Button Tooltip"},storyName:"Content"},Open={render:args=>{const tooltipHTML=`<koerber-tooltip ${(0,_utils__WEBPACK_IMPORTED_MODULE_0__.c)({args})} hoist><koerber-button size="medium">Button</koerber-button></koerber-tooltip>`;return(0,_utils__WEBPACK_IMPORTED_MODULE_0__.a)(tooltipHTML)},args:{open:!0},storyName:"Open"},PlacementtooltipHTML='\n<div class="tooltip-placement-example">\n  <div class="tooltip-placement-example-row">\n    <koerber-tooltip content="top-start" placement="top-start" hoist>\n    <koerber-button outline></koerber-button>\n    </koerber-tooltip>\n\n    <koerber-tooltip content="top" placement="top" hoist>\n      <koerber-button outline></koerber-button>\n    </koerber-tooltip>\n\n    <koerber-tooltip content="top-end" placement="top-end" hoist>\n      <koerber-button outline></koerber-button>\n    </koerber-tooltip>\n\n  </div>\n\n  <div class="tooltip-placement-example-row">\n    <koerber-tooltip content="left-start" placement="left-start" hoist>\n    <koerber-button outline></koerber-button>\n    </koerber-tooltip>\n\n    <koerber-tooltip content="right-start" placement="right-start" hoist>\n      <koerber-button outline></koerber-button>\n    </koerber-tooltip>\n\n  </div>\n\n  <div class="tooltip-placement-example-row">\n    <koerber-tooltip content="left" placement="left" hoist>\n    <koerber-button outline></koerber-button>\n    </koerber-tooltip>\n\n    <koerber-tooltip content="right" placement="right" hoist>\n      <koerber-button outline></koerber-button>\n    </koerber-tooltip>\n\n  </div>\n\n  <div class="tooltip-placement-example-row">\n    <koerber-tooltip content="left-end" placement="left-end" hoist>\n    <koerber-button outline></koerber-button>\n    </koerber-tooltip>\n\n    <koerber-tooltip content="right-end" placement="right-end" hoist>\n      <koerber-button outline></koerber-button>\n    </koerber-tooltip>\n\n  </div>\n\n  <div class="tooltip-placement-example-row">\n    <koerber-tooltip content="bottom-start" placement="bottom-start" hoist>\n    <koerber-button outline></koerber-button>\n    </koerber-tooltip>\n\n    <koerber-tooltip content="bottom" placement="bottom" hoist>\n      <koerber-button outline></koerber-button>\n    </koerber-tooltip>\n\n    <koerber-tooltip content="bottom-end" placement="bottom-end" hoist>\n      <koerber-button outline></koerber-button>\n    </koerber-tooltip>\n\n  </div>\n</div>',TooltipPlacementStory={render:()=>(0,_utils__WEBPACK_IMPORTED_MODULE_0__.a)(PlacementtooltipHTML)},TooltipPlacementCode={code:`${PlacementtooltipHTML}\n\n<style>\n  .tooltip-placement-example {\n    width: 250px;\n    margin: 1rem;\n  }\n\n  .tooltip-placement-example-row:after {\n    content: "";\n    display: table;\n    clear: both;\n  }\n\n  .tooltip-placement-example koerber-button {\n    float: left;\n    width: 2.5rem;\n    margin-right: 0.25rem;\n   margin-bottom: 0.25rem;\n  }\n\n  .tooltip-placement-example-row:nth-child(1) koerber-tooltip:first-child koerber-button,\n  .tooltip-placement-example-row:nth-child(5) koerber-tooltip:first-child koerber-button {\n    margin-left: calc(40px + 0.25rem);\n  }\n\n  .tooltip-placement-example-row:nth-child(2) koerber-tooltip:nth-child(2) koerber-button,\n  .tooltip-placement-example-row:nth-child(3) koerber-tooltip:nth-child(2) koerber-button,\n  .tooltip-placement-example-row:nth-child(4) koerber-tooltip:nth-child(2) koerber-button {\n    margin-left: calc((40px * 3) + (0.25rem * 3));\n  }\n</style>`},Tooltip_Icon={render:()=>(0,_utils__WEBPACK_IMPORTED_MODULE_0__.a)('\n<div class="icon-tooltip">\n  <koerber-tooltip content="Next" placement="top" hoist>\n    <koerber-icon name="arrow-right"></koerber-icon>\n  </koerber-tooltip>\n</div>')},Tooltip_Definition={render:()=>(0,_utils__WEBPACK_IMPORTED_MODULE_0__.a)('\n<div class="desc-tooltip">\n  <koerber-tooltip\n    content="The definition tooltip provides additional help or defines an item or term."\n    placement="bottom-start"\n    hoist>\n    <p>Definition tooltip</p>\n  </koerber-tooltip>\n</div>')};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  render: args => {\n    const attributes = generateAttributes({\n      args\n    });\n    const tooltipHTML = `<koerber-tooltip ${attributes} hoist><koerber-button size=\"medium\">Button</koerber-button></koerber-tooltip>`;\n    return getStoryTemplate(tooltipHTML);\n  },\n  args: {\n    content: 'Button Tooltip'\n  }\n}",...Default.parameters?.docs?.source}}},Content.parameters={...Content.parameters,docs:{...Content.parameters?.docs,source:{originalSource:"{\n  render: args => {\n    const attributes = generateAttributes({\n      args\n    });\n    const tooltipHTML = `<koerber-tooltip ${attributes} hoist><koerber-button size=\"medium\">Button</koerber-button></koerber-tooltip>`;\n    return getStoryTemplate(tooltipHTML);\n  },\n  args: {\n    content: 'Button Tooltip'\n  }\n}",...Content.parameters?.docs?.source}}},Open.parameters={...Open.parameters,docs:{...Open.parameters?.docs,source:{originalSource:'{\n  render: args => {\n    const attributes = generateAttributes({\n      args\n    });\n    const tooltipHTML = `<koerber-tooltip ${attributes} hoist><koerber-button size="medium">Button</koerber-button></koerber-tooltip>`;\n    return getStoryTemplate(tooltipHTML);\n  },\n  args: {\n    open: true\n  }\n}',...Open.parameters?.docs?.source}}},TooltipPlacementStory.parameters={...TooltipPlacementStory.parameters,docs:{...TooltipPlacementStory.parameters?.docs,source:{originalSource:"{\n  render: () => {\n    return getStoryTemplate(PlacementtooltipHTML);\n  }\n}",...TooltipPlacementStory.parameters?.docs?.source}}},TooltipPlacementCode.parameters={...TooltipPlacementCode.parameters,docs:{...TooltipPlacementCode.parameters?.docs,source:{originalSource:'{\n  code: `${PlacementtooltipHTML}\\n\n<style>\n  .tooltip-placement-example {\n    width: 250px;\n    margin: 1rem;\n  }\n\n  .tooltip-placement-example-row:after {\n    content: "";\n    display: table;\n    clear: both;\n  }\n\n  .tooltip-placement-example koerber-button {\n    float: left;\n    width: 2.5rem;\n    margin-right: 0.25rem;\n   margin-bottom: 0.25rem;\n  }\n\n  .tooltip-placement-example-row:nth-child(1) koerber-tooltip:first-child koerber-button,\n  .tooltip-placement-example-row:nth-child(5) koerber-tooltip:first-child koerber-button {\n    margin-left: calc(40px + 0.25rem);\n  }\n\n  .tooltip-placement-example-row:nth-child(2) koerber-tooltip:nth-child(2) koerber-button,\n  .tooltip-placement-example-row:nth-child(3) koerber-tooltip:nth-child(2) koerber-button,\n  .tooltip-placement-example-row:nth-child(4) koerber-tooltip:nth-child(2) koerber-button {\n    margin-left: calc((40px * 3) + (0.25rem * 3));\n  }\n</style>`\n}',...TooltipPlacementCode.parameters?.docs?.source}}},Tooltip_Icon.parameters={...Tooltip_Icon.parameters,docs:{...Tooltip_Icon.parameters?.docs,source:{originalSource:'{\n  render: () => {\n    const tooltipHTML = `\n<div class="icon-tooltip">\n  <koerber-tooltip content="Next" placement="top" hoist>\n    <koerber-icon name="arrow-right"></koerber-icon>\n  </koerber-tooltip>\n</div>`;\n    return getStoryTemplate(tooltipHTML);\n  }\n}',...Tooltip_Icon.parameters?.docs?.source}}},Tooltip_Definition.parameters={...Tooltip_Definition.parameters,docs:{...Tooltip_Definition.parameters?.docs,source:{originalSource:'{\n  render: () => {\n    const tooltipHTML = `\n<div class="desc-tooltip">\n  <koerber-tooltip\n    content="The definition tooltip provides additional help or defines an item or term."\n    placement="bottom-start"\n    hoist>\n    <p>Definition tooltip</p>\n  </koerber-tooltip>\n</div>`;\n    return getStoryTemplate(tooltipHTML);\n  }\n}',...Tooltip_Definition.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Content","Open","TooltipPlacementStory","TooltipPlacementCode","Tooltip_Icon","Tooltip_Definition"]}}]);