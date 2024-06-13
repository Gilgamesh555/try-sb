"use strict";(self.webpackChunk_koerber_uikit=self.webpackChunk_koerber_uikit||[]).push([[5586],{"./src/stories/components/breadcrumb-item/breadcrumb-item.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Active:()=>Active,Default:()=>Default,Href_String:()=>Href_String,MaxWidth:()=>MaxWidth,Rel:()=>Rel,Target_Blank:()=>Target_Blank,Target_Parent:()=>Target_Parent,Target_Self:()=>Target_Self,Target_Top:()=>Target_Top,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _utils__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/stories/utils.ts");__webpack_require__("./src/stories/component-imports.ts");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/BreadcrumbItem-Stories",component:"koerber-breadcrumb-item",argTypes:{"max-width":{control:{type:"number"},description:"Indicates the max width of the item text",defaultValue:"0",table:{type:{summary:"number",detail:"number"},defaultValue:{summary:"0"}}},href:{control:{type:"select"},options:["string","undefined"],description:"Optional URL to direct the user to when the breadcrumb item is activated. When set, a link will be rendered\ninternally. When unset, a button will be rendered instead.",table:{type:{summary:"string | undefined",detail:"string | undefined"},defaultValue:{}}},target:{control:{type:"select"},options:["_blank","_parent","_self","_top","undefined"],description:"Tells the browser where to open the link. Only used when `href` is set.",table:{type:{summary:"'_blank' | '_parent' | '_self' | '_top' | undefined",detail:"'_blank' | '_parent' | '_self' | '_top' | undefined"},defaultValue:{}}},rel:{control:{type:"text"},description:"The `rel` attribute to use on the link. Only used when `href` is set.",defaultValue:"'noreferrer noopener'",table:{type:{summary:"string",detail:"string"},defaultValue:{summary:"'noreferrer noopener'"}}},active:{control:{type:"boolean"},description:"Check if the item is the current Active",defaultValue:"false",table:{type:{summary:"boolean",detail:"boolean"},defaultValue:{summary:"false"}}}}},Default={render:args=>{const breadcrumbitemHTML=`<koerber-breadcrumb-item ${(0,_utils__WEBPACK_IMPORTED_MODULE_0__.c)({args})} href="https://www.google.com">Google Homepage</koerber-breadcrumb-item>`;return(0,_utils__WEBPACK_IMPORTED_MODULE_0__.a)(breadcrumbitemHTML)},args:{"max-width":"120"},storyName:"Default"},MaxWidth={render:args=>{const breadcrumbitemHTML=`<koerber-breadcrumb-item ${(0,_utils__WEBPACK_IMPORTED_MODULE_0__.c)({args})} href="https://www.google.com">Google Homepage</koerber-breadcrumb-item>`;return(0,_utils__WEBPACK_IMPORTED_MODULE_0__.a)(breadcrumbitemHTML)},args:{"max-width":"120"},storyName:"MaxWidth"},Href_String={render:args=>{const breadcrumbitemHTML=`<koerber-breadcrumb-item ${(0,_utils__WEBPACK_IMPORTED_MODULE_0__.c)({args})} href="https://www.google.com">Google Homepage</koerber-breadcrumb-item>`;return(0,_utils__WEBPACK_IMPORTED_MODULE_0__.a)(breadcrumbitemHTML)},args:{href:"string"},storyName:"Href: String"},Target_Blank={render:args=>{const breadcrumbitemHTML=`<koerber-breadcrumb-item ${(0,_utils__WEBPACK_IMPORTED_MODULE_0__.c)({args})} href="https://www.google.com">Google Homepage</koerber-breadcrumb-item>`;return(0,_utils__WEBPACK_IMPORTED_MODULE_0__.a)(breadcrumbitemHTML)},args:{target:"_blank"},storyName:"Target: Blank"},Target_Parent={render:args=>{const breadcrumbitemHTML=`<koerber-breadcrumb-item ${(0,_utils__WEBPACK_IMPORTED_MODULE_0__.c)({args})} href="https://www.google.com">Google Homepage</koerber-breadcrumb-item>`;return(0,_utils__WEBPACK_IMPORTED_MODULE_0__.a)(breadcrumbitemHTML)},args:{target:"_parent"},storyName:"Target: Parent"},Target_Self={render:args=>{const breadcrumbitemHTML=`<koerber-breadcrumb-item ${(0,_utils__WEBPACK_IMPORTED_MODULE_0__.c)({args})} href="https://www.google.com">Google Homepage</koerber-breadcrumb-item>`;return(0,_utils__WEBPACK_IMPORTED_MODULE_0__.a)(breadcrumbitemHTML)},args:{target:"_self"},storyName:"Target: Self"},Target_Top={render:args=>{const breadcrumbitemHTML=`<koerber-breadcrumb-item ${(0,_utils__WEBPACK_IMPORTED_MODULE_0__.c)({args})} href="https://www.google.com">Google Homepage</koerber-breadcrumb-item>`;return(0,_utils__WEBPACK_IMPORTED_MODULE_0__.a)(breadcrumbitemHTML)},args:{target:"_top"},storyName:"Target: Top"},Rel={render:args=>{const breadcrumbitemHTML=`<koerber-breadcrumb-item ${(0,_utils__WEBPACK_IMPORTED_MODULE_0__.c)({args})} href="https://www.google.com">Google Homepage</koerber-breadcrumb-item>`;return(0,_utils__WEBPACK_IMPORTED_MODULE_0__.a)(breadcrumbitemHTML)},args:{rel:"noopener noreferrer"},storyName:"Rel"},Active={render:args=>{const breadcrumbitemHTML=`<koerber-breadcrumb-item ${(0,_utils__WEBPACK_IMPORTED_MODULE_0__.c)({args})} href="https://www.google.com">Google Homepage</koerber-breadcrumb-item>`;return(0,_utils__WEBPACK_IMPORTED_MODULE_0__.a)(breadcrumbitemHTML)},args:{active:!0},storyName:"Active"};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  render: args => {\n    const attributes = generateAttributes({\n      args\n    });\n    const breadcrumbitemHTML = `<koerber-breadcrumb-item ${attributes} href=\"https://www.google.com\">Google Homepage</koerber-breadcrumb-item>`;\n    return getStoryTemplate(breadcrumbitemHTML);\n  },\n  args: {\n    'max-width': '120'\n  }\n}",...Default.parameters?.docs?.source}}},MaxWidth.parameters={...MaxWidth.parameters,docs:{...MaxWidth.parameters?.docs,source:{originalSource:"{\n  render: args => {\n    const attributes = generateAttributes({\n      args\n    });\n    const breadcrumbitemHTML = `<koerber-breadcrumb-item ${attributes} href=\"https://www.google.com\">Google Homepage</koerber-breadcrumb-item>`;\n    return getStoryTemplate(breadcrumbitemHTML);\n  },\n  args: {\n    'max-width': '120'\n  }\n}",...MaxWidth.parameters?.docs?.source}}},Href_String.parameters={...Href_String.parameters,docs:{...Href_String.parameters?.docs,source:{originalSource:"{\n  render: args => {\n    const attributes = generateAttributes({\n      args\n    });\n    const breadcrumbitemHTML = `<koerber-breadcrumb-item ${attributes} href=\"https://www.google.com\">Google Homepage</koerber-breadcrumb-item>`;\n    return getStoryTemplate(breadcrumbitemHTML);\n  },\n  args: {\n    href: 'string'\n  }\n}",...Href_String.parameters?.docs?.source}}},Target_Blank.parameters={...Target_Blank.parameters,docs:{...Target_Blank.parameters?.docs,source:{originalSource:"{\n  render: args => {\n    const attributes = generateAttributes({\n      args\n    });\n    const breadcrumbitemHTML = `<koerber-breadcrumb-item ${attributes} href=\"https://www.google.com\">Google Homepage</koerber-breadcrumb-item>`;\n    return getStoryTemplate(breadcrumbitemHTML);\n  },\n  args: {\n    target: '_blank'\n  }\n}",...Target_Blank.parameters?.docs?.source}}},Target_Parent.parameters={...Target_Parent.parameters,docs:{...Target_Parent.parameters?.docs,source:{originalSource:"{\n  render: args => {\n    const attributes = generateAttributes({\n      args\n    });\n    const breadcrumbitemHTML = `<koerber-breadcrumb-item ${attributes} href=\"https://www.google.com\">Google Homepage</koerber-breadcrumb-item>`;\n    return getStoryTemplate(breadcrumbitemHTML);\n  },\n  args: {\n    target: '_parent'\n  }\n}",...Target_Parent.parameters?.docs?.source}}},Target_Self.parameters={...Target_Self.parameters,docs:{...Target_Self.parameters?.docs,source:{originalSource:"{\n  render: args => {\n    const attributes = generateAttributes({\n      args\n    });\n    const breadcrumbitemHTML = `<koerber-breadcrumb-item ${attributes} href=\"https://www.google.com\">Google Homepage</koerber-breadcrumb-item>`;\n    return getStoryTemplate(breadcrumbitemHTML);\n  },\n  args: {\n    target: '_self'\n  }\n}",...Target_Self.parameters?.docs?.source}}},Target_Top.parameters={...Target_Top.parameters,docs:{...Target_Top.parameters?.docs,source:{originalSource:"{\n  render: args => {\n    const attributes = generateAttributes({\n      args\n    });\n    const breadcrumbitemHTML = `<koerber-breadcrumb-item ${attributes} href=\"https://www.google.com\">Google Homepage</koerber-breadcrumb-item>`;\n    return getStoryTemplate(breadcrumbitemHTML);\n  },\n  args: {\n    target: '_top'\n  }\n}",...Target_Top.parameters?.docs?.source}}},Rel.parameters={...Rel.parameters,docs:{...Rel.parameters?.docs,source:{originalSource:"{\n  render: args => {\n    const attributes = generateAttributes({\n      args\n    });\n    const breadcrumbitemHTML = `<koerber-breadcrumb-item ${attributes} href=\"https://www.google.com\">Google Homepage</koerber-breadcrumb-item>`;\n    return getStoryTemplate(breadcrumbitemHTML);\n  },\n  args: {\n    rel: 'noopener noreferrer'\n  }\n}",...Rel.parameters?.docs?.source}}},Active.parameters={...Active.parameters,docs:{...Active.parameters?.docs,source:{originalSource:'{\n  render: args => {\n    const attributes = generateAttributes({\n      args\n    });\n    const breadcrumbitemHTML = `<koerber-breadcrumb-item ${attributes} href="https://www.google.com">Google Homepage</koerber-breadcrumb-item>`;\n    return getStoryTemplate(breadcrumbitemHTML);\n  },\n  args: {\n    active: true\n  }\n}',...Active.parameters?.docs?.source}}};const __namedExportsOrder=["Default","MaxWidth","Href_String","Target_Blank","Target_Parent","Target_Self","Target_Top","Rel","Active"]}}]);