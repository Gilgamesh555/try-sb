"use strict";(self.webpackChunk_koerber_uikit=self.webpackChunk_koerber_uikit||[]).push([[8791],{"./src/stories/components/link/link.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Disabled:()=>Disabled,Href:()=>Href,Link_Sizes:()=>Link_Sizes,Rel:()=>Rel,Showicon:()=>Showicon,Size_Large:()=>Size_Large,Size_Medium:()=>Size_Medium,Size_Small:()=>Size_Small,Target:()=>Target,Title:()=>Title,Underline:()=>Underline,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _utils__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/stories/utils.ts");__webpack_require__("./src/stories/component-imports.ts");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Link-Stories",component:"koerber-link",argTypes:{href:{control:{type:"text"},defaultValue:"''",table:{type:{summary:"string",detail:"string"},defaultValue:{summary:"''"}}},target:{control:{type:"text"},description:"Tells the browser where to open the link. Only used when `href` is set.",defaultValue:"'_blank'",table:{type:{summary:"string",detail:"string"},defaultValue:{summary:"'_blank'"}}},rel:{control:{type:"text"},description:"The `rel` attribute to use on the link. Only used when `href` is set.",defaultValue:"'noreferrer noopener'",table:{type:{summary:"string",detail:"string"},defaultValue:{summary:"'noreferrer noopener'"}}},title:{control:{type:"text"},defaultValue:"''",table:{type:{summary:"string",detail:"string"},defaultValue:{summary:"''"}}},size:{control:{type:"select"},options:["small","medium","large"],description:"The link's size.",defaultValue:"'medium'",table:{type:{summary:"'small' | 'medium' | 'large'",detail:"'small' | 'medium' | 'large'"},defaultValue:{summary:"'medium'"}}},disabled:{control:{type:"boolean"},description:"Disables the link.",defaultValue:"false",table:{type:{summary:"boolean",detail:"boolean"},defaultValue:{summary:"false"}}},underline:{control:{type:"boolean"},defaultValue:"false",table:{type:{summary:"boolean",detail:"boolean"},defaultValue:{summary:"false"}}},showIcon:{control:{type:"boolean"},description:"Shows the Icon",defaultValue:"false",table:{type:{summary:"boolean",detail:"boolean"},defaultValue:{summary:"false"}}}}},Default={render:args=>{const linkHTML=`<koerber-link ${(0,_utils__WEBPACK_IMPORTED_MODULE_0__.c)({args})} href="https://www.google.com" title="Google">See More</koerber-link>`;return(0,_utils__WEBPACK_IMPORTED_MODULE_0__.a)(linkHTML)},args:{href:"https://www.google.com"},storyName:"Default"},Href={render:args=>{const linkHTML=`<koerber-link ${(0,_utils__WEBPACK_IMPORTED_MODULE_0__.c)({args})} href="https://www.google.com" title="Google">See More</koerber-link>`;return(0,_utils__WEBPACK_IMPORTED_MODULE_0__.a)(linkHTML)},args:{href:"https://www.google.com"},storyName:"Href"},Target={render:args=>{const linkHTML=`<koerber-link ${(0,_utils__WEBPACK_IMPORTED_MODULE_0__.c)({args})} href="https://www.google.com" title="Google">See More</koerber-link>`;return(0,_utils__WEBPACK_IMPORTED_MODULE_0__.a)(linkHTML)},args:{target:"'_blank'"},storyName:"Target"},Rel={render:args=>{const linkHTML=`<koerber-link ${(0,_utils__WEBPACK_IMPORTED_MODULE_0__.c)({args})} href="https://www.google.com" title="Google">See More</koerber-link>`;return(0,_utils__WEBPACK_IMPORTED_MODULE_0__.a)(linkHTML)},args:{rel:"'noreferrer noopener'"},storyName:"Rel"},Title={render:args=>{const linkHTML=`<koerber-link ${(0,_utils__WEBPACK_IMPORTED_MODULE_0__.c)({args})} href="https://www.google.com" title="Google">See More</koerber-link>`;return(0,_utils__WEBPACK_IMPORTED_MODULE_0__.a)(linkHTML)},args:{title:"Google"},storyName:"Title"},Size_Small={render:args=>{const linkHTML=`<koerber-link ${(0,_utils__WEBPACK_IMPORTED_MODULE_0__.c)({args})} href="https://www.google.com" title="Google">See More</koerber-link>`;return(0,_utils__WEBPACK_IMPORTED_MODULE_0__.a)(linkHTML)},args:{size:"small"},storyName:"Size: Small"},Size_Medium={render:args=>{const linkHTML=`<koerber-link ${(0,_utils__WEBPACK_IMPORTED_MODULE_0__.c)({args})} href="https://www.google.com" title="Google">See More</koerber-link>`;return(0,_utils__WEBPACK_IMPORTED_MODULE_0__.a)(linkHTML)},args:{size:"medium"},storyName:"Size: Medium"},Size_Large={render:args=>{const linkHTML=`<koerber-link ${(0,_utils__WEBPACK_IMPORTED_MODULE_0__.c)({args})} href="https://www.google.com" title="Google">See More</koerber-link>`;return(0,_utils__WEBPACK_IMPORTED_MODULE_0__.a)(linkHTML)},args:{size:"large"},storyName:"Size: Large"},Disabled={render:args=>{const linkHTML=`<koerber-link ${(0,_utils__WEBPACK_IMPORTED_MODULE_0__.c)({args})} href="https://www.google.com" title="Google">See More</koerber-link>`;return(0,_utils__WEBPACK_IMPORTED_MODULE_0__.a)(linkHTML)},args:{disabled:!0},storyName:"Disabled"},Underline={render:args=>{const linkHTML=`<koerber-link ${(0,_utils__WEBPACK_IMPORTED_MODULE_0__.c)({args})} href="https://www.google.com" title="Google">See More</koerber-link>`;return(0,_utils__WEBPACK_IMPORTED_MODULE_0__.a)(linkHTML)},args:{underline:!0},storyName:"Underline"},Showicon={render:args=>{const linkHTML=`<koerber-link ${(0,_utils__WEBPACK_IMPORTED_MODULE_0__.c)({args})} href="https://www.google.com" title="Google">See More</koerber-link>`;return(0,_utils__WEBPACK_IMPORTED_MODULE_0__.a)(linkHTML)},args:{showIcon:!0},storyName:"Showicon"},Link_Sizes={render:()=>(0,_utils__WEBPACK_IMPORTED_MODULE_0__.a)('\n<div class="grid grid-cols-3 gap-s">\n  <div style="display: flex;align-items: center;justify-content: center">\n    <koerber-link size="small" href="https://www.google.com" title="Google">See More</koerber-link>\n  </div>\n\n  <div style="display: flex;align-items: center;justify-content: center">\n    <koerber-link size="medium" href="https://www.google.com" title="Google">See More</koerber-link>\n  </div>\n\n  <div style="display: flex;align-items: center;justify-content: center">\n    <koerber-link size="large" href="https://www.google.com" title="Google">See More</koerber-link>\n  </div>\n</div>\n    ')};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  render: args => {\n    const attributes = generateAttributes({\n      args\n    });\n    const linkHTML = `<koerber-link ${attributes} href="https://www.google.com" title="Google">See More</koerber-link>`;\n    return getStoryTemplate(linkHTML);\n  },\n  args: {\n    href: \'https://www.google.com\'\n  }\n}',...Default.parameters?.docs?.source}}},Href.parameters={...Href.parameters,docs:{...Href.parameters?.docs,source:{originalSource:'{\n  render: args => {\n    const attributes = generateAttributes({\n      args\n    });\n    const linkHTML = `<koerber-link ${attributes} href="https://www.google.com" title="Google">See More</koerber-link>`;\n    return getStoryTemplate(linkHTML);\n  },\n  args: {\n    href: \'https://www.google.com\'\n  }\n}',...Href.parameters?.docs?.source}}},Target.parameters={...Target.parameters,docs:{...Target.parameters?.docs,source:{originalSource:'{\n  render: args => {\n    const attributes = generateAttributes({\n      args\n    });\n    const linkHTML = `<koerber-link ${attributes} href="https://www.google.com" title="Google">See More</koerber-link>`;\n    return getStoryTemplate(linkHTML);\n  },\n  args: {\n    target: "\'_blank\'"\n  }\n}',...Target.parameters?.docs?.source}}},Rel.parameters={...Rel.parameters,docs:{...Rel.parameters?.docs,source:{originalSource:'{\n  render: args => {\n    const attributes = generateAttributes({\n      args\n    });\n    const linkHTML = `<koerber-link ${attributes} href="https://www.google.com" title="Google">See More</koerber-link>`;\n    return getStoryTemplate(linkHTML);\n  },\n  args: {\n    rel: "\'noreferrer noopener\'"\n  }\n}',...Rel.parameters?.docs?.source}}},Title.parameters={...Title.parameters,docs:{...Title.parameters?.docs,source:{originalSource:'{\n  render: args => {\n    const attributes = generateAttributes({\n      args\n    });\n    const linkHTML = `<koerber-link ${attributes} href="https://www.google.com" title="Google">See More</koerber-link>`;\n    return getStoryTemplate(linkHTML);\n  },\n  args: {\n    title: \'Google\'\n  }\n}',...Title.parameters?.docs?.source}}},Size_Small.parameters={...Size_Small.parameters,docs:{...Size_Small.parameters?.docs,source:{originalSource:'{\n  render: args => {\n    const attributes = generateAttributes({\n      args\n    });\n    const linkHTML = `<koerber-link ${attributes} href="https://www.google.com" title="Google">See More</koerber-link>`;\n    return getStoryTemplate(linkHTML);\n  },\n  args: {\n    size: \'small\'\n  }\n}',...Size_Small.parameters?.docs?.source}}},Size_Medium.parameters={...Size_Medium.parameters,docs:{...Size_Medium.parameters?.docs,source:{originalSource:'{\n  render: args => {\n    const attributes = generateAttributes({\n      args\n    });\n    const linkHTML = `<koerber-link ${attributes} href="https://www.google.com" title="Google">See More</koerber-link>`;\n    return getStoryTemplate(linkHTML);\n  },\n  args: {\n    size: \'medium\'\n  }\n}',...Size_Medium.parameters?.docs?.source}}},Size_Large.parameters={...Size_Large.parameters,docs:{...Size_Large.parameters?.docs,source:{originalSource:'{\n  render: args => {\n    const attributes = generateAttributes({\n      args\n    });\n    const linkHTML = `<koerber-link ${attributes} href="https://www.google.com" title="Google">See More</koerber-link>`;\n    return getStoryTemplate(linkHTML);\n  },\n  args: {\n    size: \'large\'\n  }\n}',...Size_Large.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:'{\n  render: args => {\n    const attributes = generateAttributes({\n      args\n    });\n    const linkHTML = `<koerber-link ${attributes} href="https://www.google.com" title="Google">See More</koerber-link>`;\n    return getStoryTemplate(linkHTML);\n  },\n  args: {\n    disabled: true\n  }\n}',...Disabled.parameters?.docs?.source}}},Underline.parameters={...Underline.parameters,docs:{...Underline.parameters?.docs,source:{originalSource:'{\n  render: args => {\n    const attributes = generateAttributes({\n      args\n    });\n    const linkHTML = `<koerber-link ${attributes} href="https://www.google.com" title="Google">See More</koerber-link>`;\n    return getStoryTemplate(linkHTML);\n  },\n  args: {\n    underline: true\n  }\n}',...Underline.parameters?.docs?.source}}},Showicon.parameters={...Showicon.parameters,docs:{...Showicon.parameters?.docs,source:{originalSource:'{\n  render: args => {\n    const attributes = generateAttributes({\n      args\n    });\n    const linkHTML = `<koerber-link ${attributes} href="https://www.google.com" title="Google">See More</koerber-link>`;\n    return getStoryTemplate(linkHTML);\n  },\n  args: {\n    showIcon: true\n  }\n}',...Showicon.parameters?.docs?.source}}},Link_Sizes.parameters={...Link_Sizes.parameters,docs:{...Link_Sizes.parameters?.docs,source:{originalSource:'{\n  render: () => {\n    const linkHTML = `\n<div class="grid grid-cols-3 gap-s">\n  <div style="display: flex;align-items: center;justify-content: center">\n    <koerber-link size="small" href="https://www.google.com" title="Google">See More</koerber-link>\n  </div>\n\n  <div style="display: flex;align-items: center;justify-content: center">\n    <koerber-link size="medium" href="https://www.google.com" title="Google">See More</koerber-link>\n  </div>\n\n  <div style="display: flex;align-items: center;justify-content: center">\n    <koerber-link size="large" href="https://www.google.com" title="Google">See More</koerber-link>\n  </div>\n</div>\n    `;\n    return getStoryTemplate(linkHTML);\n  }\n}',...Link_Sizes.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Href","Target","Rel","Title","Size_Small","Size_Medium","Size_Large","Disabled","Underline","Showicon","Link_Sizes"]}}]);