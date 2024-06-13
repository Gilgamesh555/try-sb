"use strict";(self.webpackChunk_koerber_uikit=self.webpackChunk_koerber_uikit||[]).push([[3707],{"./src/stories/components/divider/divider.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Horizontal_Use:()=>Horizontal_Use,Variant_Primary:()=>Variant_Primary,Variant_Secondary:()=>Variant_Secondary,Variants:()=>Variants,Vertical:()=>Vertical,Vertical_Use:()=>Vertical_Use,Width:()=>Width,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _utils__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/stories/utils.ts");__webpack_require__("./src/stories/component-imports.ts");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Divider-Stories",component:"koerber-divider",argTypes:{variant:{control:{type:"select"},options:["primary","secondary"],description:"The divider's theme variant.",defaultValue:"'primary'",table:{type:{summary:"'primary' | 'secondary'",detail:"'primary' | 'secondary'"},defaultValue:{summary:"'primary'"}}},vertical:{control:{type:"boolean"},description:"Draws the divider in a vertical orientation.",defaultValue:"false",table:{type:{summary:"boolean",detail:"boolean"},defaultValue:{summary:"false"}}},width:{control:{type:"number"},description:"The width of the divider.",defaultValue:"0",table:{type:{summary:"number",detail:"number"},defaultValue:{summary:"0"}}}}},Default={render:args=>{const dividerHTML=`<koerber-divider ${(0,_utils__WEBPACK_IMPORTED_MODULE_0__.c)({args})}></koerber-divider>`;return(0,_utils__WEBPACK_IMPORTED_MODULE_0__.a)(dividerHTML)},args:{variant:"primary"},storyName:"Default"},Variant_Primary={render:args=>{const dividerHTML=`<koerber-divider ${(0,_utils__WEBPACK_IMPORTED_MODULE_0__.c)({args})}></koerber-divider>`;return(0,_utils__WEBPACK_IMPORTED_MODULE_0__.a)(dividerHTML)},args:{variant:"primary"},storyName:"Variant: Primary"},Variant_Secondary={render:args=>{const dividerHTML=`<koerber-divider ${(0,_utils__WEBPACK_IMPORTED_MODULE_0__.c)({args})}></koerber-divider>`;return(0,_utils__WEBPACK_IMPORTED_MODULE_0__.a)(dividerHTML)},args:{variant:"secondary"},storyName:"Variant: Secondary"},Vertical={render:args=>{const dividerHTML=`<koerber-divider ${(0,_utils__WEBPACK_IMPORTED_MODULE_0__.c)({args})}></koerber-divider>`;return(0,_utils__WEBPACK_IMPORTED_MODULE_0__.a)(dividerHTML)},args:{vertical:!0},storyName:"Vertical"},Width={render:args=>{const dividerHTML=`<koerber-divider ${(0,_utils__WEBPACK_IMPORTED_MODULE_0__.c)({args})}></koerber-divider>`;return(0,_utils__WEBPACK_IMPORTED_MODULE_0__.a)(dividerHTML)},args:{width:"0"},storyName:"Width"},Vertical_Use={render:()=>(0,_utils__WEBPACK_IMPORTED_MODULE_0__.a)('<div style="display: inline-flex; align-items: center; height: 5rem; padding: 1rem;">\n      First\n      <koerber-divider vertical style="padding: 20px"></koerber-divider>\n      Middle\n      <koerber-divider vertical></koerber-divider>\n      Last\n    </div>')},Horizontal_Use={render:()=>(0,_utils__WEBPACK_IMPORTED_MODULE_0__.a)('<div style="text-align: center;">\n      Above\n        <koerber-divider></koerber-divider>\n      Below\n    </div>')},Variants={render:()=>(0,_utils__WEBPACK_IMPORTED_MODULE_0__.a)("<div style=\"width: 55rem\">\n      Primary\n      <koerber-divider></koerber-divider>\n      <br />\n      Secondary\n      <koerber-divider variant='secondary'></koerber-divider>\n    </div>")};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  render: args => {\n    const attributes = generateAttributes({\n      args\n    });\n    const dividerHTML = `<koerber-divider ${attributes}></koerber-divider>`;\n    return getStoryTemplate(dividerHTML);\n  },\n  args: {\n    variant: 'primary'\n  }\n}",...Default.parameters?.docs?.source}}},Variant_Primary.parameters={...Variant_Primary.parameters,docs:{...Variant_Primary.parameters?.docs,source:{originalSource:"{\n  render: args => {\n    const attributes = generateAttributes({\n      args\n    });\n    const dividerHTML = `<koerber-divider ${attributes}></koerber-divider>`;\n    return getStoryTemplate(dividerHTML);\n  },\n  args: {\n    variant: 'primary'\n  }\n}",...Variant_Primary.parameters?.docs?.source}}},Variant_Secondary.parameters={...Variant_Secondary.parameters,docs:{...Variant_Secondary.parameters?.docs,source:{originalSource:"{\n  render: args => {\n    const attributes = generateAttributes({\n      args\n    });\n    const dividerHTML = `<koerber-divider ${attributes}></koerber-divider>`;\n    return getStoryTemplate(dividerHTML);\n  },\n  args: {\n    variant: 'secondary'\n  }\n}",...Variant_Secondary.parameters?.docs?.source}}},Vertical.parameters={...Vertical.parameters,docs:{...Vertical.parameters?.docs,source:{originalSource:"{\n  render: args => {\n    const attributes = generateAttributes({\n      args\n    });\n    const dividerHTML = `<koerber-divider ${attributes}></koerber-divider>`;\n    return getStoryTemplate(dividerHTML);\n  },\n  args: {\n    vertical: true\n  }\n}",...Vertical.parameters?.docs?.source}}},Width.parameters={...Width.parameters,docs:{...Width.parameters?.docs,source:{originalSource:"{\n  render: args => {\n    const attributes = generateAttributes({\n      args\n    });\n    const dividerHTML = `<koerber-divider ${attributes}></koerber-divider>`;\n    return getStoryTemplate(dividerHTML);\n  },\n  args: {\n    width: '0'\n  }\n}",...Width.parameters?.docs?.source}}},Vertical_Use.parameters={...Vertical_Use.parameters,docs:{...Vertical_Use.parameters?.docs,source:{originalSource:'{\n  render: () => {\n    const dividerHTML = `<div style="display: inline-flex; align-items: center; height: 5rem; padding: 1rem;">\n      First\n      <koerber-divider vertical style="padding: 20px"></koerber-divider>\n      Middle\n      <koerber-divider vertical></koerber-divider>\n      Last\n    </div>`;\n    return getStoryTemplate(dividerHTML);\n  }\n}',...Vertical_Use.parameters?.docs?.source}}},Horizontal_Use.parameters={...Horizontal_Use.parameters,docs:{...Horizontal_Use.parameters?.docs,source:{originalSource:'{\n  render: () => {\n    const dividerHTML = `<div style="text-align: center;">\n      Above\n        <koerber-divider></koerber-divider>\n      Below\n    </div>`;\n    return getStoryTemplate(dividerHTML);\n  }\n}',...Horizontal_Use.parameters?.docs?.source}}},Variants.parameters={...Variants.parameters,docs:{...Variants.parameters?.docs,source:{originalSource:"{\n  render: () => {\n    const dividerHTML = `<div style=\"width: 55rem\">\n      Primary\n      <koerber-divider></koerber-divider>\n      <br />\n      Secondary\n      <koerber-divider variant='secondary'></koerber-divider>\n    </div>`;\n    return getStoryTemplate(dividerHTML);\n  }\n}",...Variants.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Variant_Primary","Variant_Secondary","Vertical","Width","Vertical_Use","Horizontal_Use","Variants"]}}]);