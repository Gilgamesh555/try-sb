"use strict";(self.webpackChunk_koerber_uikit=self.webpackChunk_koerber_uikit||[]).push([[8006],{"./src/stories/components/radio-button/radio-button.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Disabled:()=>Disabled,RadioButton_Sizes:()=>RadioButton_Sizes,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _utils__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/stories/utils.ts");__webpack_require__("./src/stories/component-imports.ts");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/RadioButton-Stories",component:"koerber-radio-button",argTypes:{value:{control:{type:"text"},description:"The radio's value. When selected, the radio group will receive this value.",table:{type:{summary:"string",detail:"string"},defaultValue:{}}},disabled:{control:{type:"boolean"},description:"Disables the radio button.",defaultValue:"false",table:{type:{summary:"boolean",detail:"boolean"},defaultValue:{summary:"false"}}},size:{control:{type:"select"},options:["small","medium","large"],description:"The radio button's size. When used inside a radio group, the size will be determined by the radio group's size so\nthis attribute can typically be omitted.",defaultValue:"'medium'",table:{type:{summary:"'small' | 'medium' | 'large'",detail:"'small' | 'medium' | 'large'"},defaultValue:{summary:"'medium'"}}}}},Default={render:args=>{const radioGroupHTML=`<koerber-radio-group value="1" ${(0,_utils__WEBPACK_IMPORTED_MODULE_0__.c)({args})}>\n        <koerber-radio-button value="1">Assigned</koerber-radio-button>\n        <koerber-radio-button value="2">Unassigned</koerber-radio-button>\n      </koerber-radio-group>\n    `;return(0,_utils__WEBPACK_IMPORTED_MODULE_0__.a)(radioGroupHTML)},args:{value:""},storyName:"Default"},Disabled={render:args=>{const radioGroupHTML=`<koerber-radio-group value="1" ${(0,_utils__WEBPACK_IMPORTED_MODULE_0__.c)({args})}>\n        <koerber-radio-button value="1">Assigned</koerber-radio-button>\n        <koerber-radio-button value="2" disabled="">Unassigned</koerber-radio-button>\n      </koerber-radio-group>\n    `;return(0,_utils__WEBPACK_IMPORTED_MODULE_0__.a)(radioGroupHTML)},args:{value:""},storyName:"Disabled"},RadioButton_Sizes={render:()=>(0,_utils__WEBPACK_IMPORTED_MODULE_0__.a)('\n      <div class="grid grid-cols-3">\n        <div style="display: flex;align-items: center;">\n          <koerber-radio-group value="1" size="small">\n            <koerber-radio-button value="1">Assigned</koerber-radio-button>\n            <koerber-radio-button value="2">Unassigned</koerber-radio-button>\n          </koerber-radio-group>\n        </div>\n        <div style="display: flex;align-items: center;">\n          <koerber-radio-group value="1" size="medium">\n            <koerber-radio-button value="1">Assigned</koerber-radio-button>\n            <koerber-radio-button value="2">Unassigned</koerber-radio-button>\n          </koerber-radio-group>\n        </div>\n        <div style="display: flex;align-items: center;">\n          <koerber-radio-group value="1" size="large">\n            <koerber-radio-button value="1">Assigned</koerber-radio-button>\n            <koerber-radio-button value="2">Unassigned</koerber-radio-button>\n          </koerber-radio-group>\n        </div>\n      </div>\n    ')};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  render: args => {\n    const attributes = generateAttributes({\n      args\n    });\n    const radioGroupHTML = `<koerber-radio-group value="1" ${attributes}>\n        <koerber-radio-button value="1">Assigned</koerber-radio-button>\n        <koerber-radio-button value="2">Unassigned</koerber-radio-button>\n      </koerber-radio-group>\n    `;\n    return getStoryTemplate(radioGroupHTML);\n  },\n  args: {\n    value: \'\'\n  }\n}',...Default.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:'{\n  render: args => {\n    const attributes = generateAttributes({\n      args\n    });\n    const radioGroupHTML = `<koerber-radio-group value="1" ${attributes}>\n        <koerber-radio-button value="1">Assigned</koerber-radio-button>\n        <koerber-radio-button value="2" disabled="">Unassigned</koerber-radio-button>\n      </koerber-radio-group>\n    `;\n    return getStoryTemplate(radioGroupHTML);\n  },\n  args: {\n    value: \'\'\n  }\n}',...Disabled.parameters?.docs?.source}}},RadioButton_Sizes.parameters={...RadioButton_Sizes.parameters,docs:{...RadioButton_Sizes.parameters?.docs,source:{originalSource:'{\n  render: () => {\n    const radioButtonHtml = `\n      <div class="grid grid-cols-3">\n        <div style="display: flex;align-items: center;">\n          <koerber-radio-group value="1" size="small">\n            <koerber-radio-button value="1">Assigned</koerber-radio-button>\n            <koerber-radio-button value="2">Unassigned</koerber-radio-button>\n          </koerber-radio-group>\n        </div>\n        <div style="display: flex;align-items: center;">\n          <koerber-radio-group value="1" size="medium">\n            <koerber-radio-button value="1">Assigned</koerber-radio-button>\n            <koerber-radio-button value="2">Unassigned</koerber-radio-button>\n          </koerber-radio-group>\n        </div>\n        <div style="display: flex;align-items: center;">\n          <koerber-radio-group value="1" size="large">\n            <koerber-radio-button value="1">Assigned</koerber-radio-button>\n            <koerber-radio-button value="2">Unassigned</koerber-radio-button>\n          </koerber-radio-group>\n        </div>\n      </div>\n    `;\n    return getStoryTemplate(radioButtonHtml);\n  }\n}',...RadioButton_Sizes.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Disabled","RadioButton_Sizes"]}}]);