"use strict";(self.webpackChunk_koerber_uikit=self.webpackChunk_koerber_uikit||[]).push([[6021],{"./src/stories/components/breadcrumb/breadcrumb.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Label:()=>Label,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _utils__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/stories/utils.ts");__webpack_require__("./src/stories/component-imports.ts");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Breadcrumb-Stories",component:"koerber-breadcrumb",argTypes:{label:{control:{type:"text"},description:"The label to use for the breadcrumb control. This will not be shown on the screen, but it will be announced by\nscreen readers and other assistive devices to provide more context for users.",defaultValue:"''",table:{type:{summary:"string",detail:"string"},defaultValue:{summary:"''"}}}}},Default={render:args=>{const breadcrumbHTML=`<koerber-breadcrumb ${(0,_utils__WEBPACK_IMPORTED_MODULE_0__.c)({args})}\n >\n    <koerber-breadcrumb-item href="../?path=/docs/getting-started-introduction--docs/">Home</koerber-breadcrumb-item>\n    <koerber-breadcrumb-item href="../?path=/docs/components-icon--docs">Icon</koerber-breadcrumb-item>\n    <koerber-breadcrumb-item href="../?path=/docs/components-alert--docs">Alert</koerber-breadcrumb-item>\n  <koerber-breadcrumb-item href="/docs/components-alert--docs" active>Breadcrumb</koerber-breadcrumb-item>\n</koerber-breadcrumb>`;return(0,_utils__WEBPACK_IMPORTED_MODULE_0__.a)(breadcrumbHTML)},args:{label:"Default"},storyName:"Default"},Label={render:args=>{const breadcrumbHTML=`<koerber-breadcrumb ${(0,_utils__WEBPACK_IMPORTED_MODULE_0__.c)({args})}\n >\n    <koerber-breadcrumb-item href="../?path=/docs/getting-started-introduction--docs/">Home</koerber-breadcrumb-item>\n    <koerber-breadcrumb-item href="../?path=/docs/components-icon--docs">Icon</koerber-breadcrumb-item>\n    <koerber-breadcrumb-item href="../?path=/docs/components-alert--docs">Alert</koerber-breadcrumb-item>\n  <koerber-breadcrumb-item href="/docs/components-alert--docs" active>Breadcrumb</koerber-breadcrumb-item>\n</koerber-breadcrumb>`;return(0,_utils__WEBPACK_IMPORTED_MODULE_0__.a)(breadcrumbHTML)},args:{label:"Label"},storyName:"Label"};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  render: args => {\n    const attributes = generateAttributes({\n      args\n    });\n    const breadcrumbHTML = `<koerber-breadcrumb ${attributes}\n >\n    <koerber-breadcrumb-item href="../?path=/docs/getting-started-introduction--docs/">Home</koerber-breadcrumb-item>\n    <koerber-breadcrumb-item href="../?path=/docs/components-icon--docs">Icon</koerber-breadcrumb-item>\n    <koerber-breadcrumb-item href="../?path=/docs/components-alert--docs">Alert</koerber-breadcrumb-item>\n  <koerber-breadcrumb-item href="/docs/components-alert--docs" active>Breadcrumb</koerber-breadcrumb-item>\n</koerber-breadcrumb>`;\n    return getStoryTemplate(breadcrumbHTML);\n  },\n  args: {\n    label: \'Default\'\n  }\n}',...Default.parameters?.docs?.source}}},Label.parameters={...Label.parameters,docs:{...Label.parameters?.docs,source:{originalSource:'{\n  render: args => {\n    const attributes = generateAttributes({\n      args\n    });\n    const breadcrumbHTML = `<koerber-breadcrumb ${attributes}\n >\n    <koerber-breadcrumb-item href="../?path=/docs/getting-started-introduction--docs/">Home</koerber-breadcrumb-item>\n    <koerber-breadcrumb-item href="../?path=/docs/components-icon--docs">Icon</koerber-breadcrumb-item>\n    <koerber-breadcrumb-item href="../?path=/docs/components-alert--docs">Alert</koerber-breadcrumb-item>\n  <koerber-breadcrumb-item href="/docs/components-alert--docs" active>Breadcrumb</koerber-breadcrumb-item>\n</koerber-breadcrumb>`;\n    return getStoryTemplate(breadcrumbHTML);\n  },\n  args: {\n    label: \'Label\'\n  }\n}',...Label.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Label"]}}]);