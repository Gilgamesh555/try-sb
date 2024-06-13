"use strict";(self.webpackChunk_koerber_uikit=self.webpackChunk_koerber_uikit||[]).push([[5115],{"./src/stories/components/drawer/drawer.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Contained:()=>Contained,Default:()=>Default,InitialFocus:()=>InitialFocus,Placement:()=>Placement,PreventClosing:()=>PreventClosing,Scrolling:()=>Scrolling,Size_Large:()=>Size_Large,Size_Small:()=>Size_Small,__namedExportsOrder:()=>__namedExportsOrder,default:()=>drawer_stories});var lit=__webpack_require__("./node_modules/lit/index.js"),unsafe_html=__webpack_require__("./node_modules/lit-html/directives/unsafe-html.js"),animate=__webpack_require__("./src/internal/animate.ts"),class_map=__webpack_require__("./node_modules/lit/directives/class-map.js"),animation_registry=__webpack_require__("./src/utilities/animation-registry.ts"),slot=__webpack_require__("./src/internal/slot.ts"),if_defined=__webpack_require__("./node_modules/lit/directives/if-defined.js"),localize=__webpack_require__("./src/utilities/localize.ts"),internal_scroll=__webpack_require__("./src/internal/scroll.ts"),decorators=__webpack_require__("./node_modules/lit/decorators.js");function uppercaseFirstLetter(string){return string.charAt(0).toUpperCase()+string.slice(1)}var internal_event=__webpack_require__("./src/internal/event.ts"),watch=__webpack_require__("./src/internal/watch.ts"),component_styles=__webpack_require__("./src/styles/component.styles.ts"),icon_button_component=__webpack_require__("./src/components/icon-button/icon-button.component.ts"),tabbable=__webpack_require__("./src/internal/tabbable.ts");let activeModals=[];class Modal{constructor(element){this.tabDirection="forward",this.element=element,this.handleFocusIn=this.handleFocusIn.bind(this),this.handleKeyDown=this.handleKeyDown.bind(this),this.handleKeyUp=this.handleKeyUp.bind(this)}activate(){activeModals.push(this.element),document.addEventListener("focusin",this.handleFocusIn),document.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keyup",this.handleKeyUp)}deactivate(){activeModals=activeModals.filter((modal=>modal!==this.element)),document.removeEventListener("focusin",this.handleFocusIn),document.removeEventListener("keydown",this.handleKeyDown),document.removeEventListener("keyup",this.handleKeyUp)}isActive(){return activeModals[activeModals.length-1]===this.element}checkFocus(){if(this.isActive()&&!this.element.matches(":focus-within")){const{start,end}=(0,tabbable.C)(this.element),target="forward"===this.tabDirection?start:end;"function"==typeof(null==target?void 0:target.focus)&&target.focus({preventScroll:!0})}}handleFocusIn(){this.checkFocus()}handleKeyDown(event){"Tab"===event.key&&event.shiftKey&&(this.tabDirection="backward",requestAnimationFrame((()=>this.checkFocus())))}handleKeyUp(){this.tabDirection="forward"}}const drawer_styles=lit.iv`
  :host {
    --koerber-drawer-contained-z-index: 910;
    --koerber-drawer-z-index: 920;
    --koerber-drawer-small-max-width: 428px;
    --koerber-drawer-large-max-width: 1094px;
    --koerber-drawer-header-spacing: var(--koerber-spacing-m);
    --koerber-drawer-body-spacing: var(--koerber-spacing-m);
    --koerber-drawer-footer-spacing: var(--koerber-spacing-m);
    --koerber-drawer-panel-spacing: var(--koerber-spacing-xs);
    --koerber-drawer-overlay-color: var(--koerber-color-bg-fill-alt);
    --koerber-drawer-overlay-opacity: 35%;

    display: contents;
  }

  .drawer {
    top: 0;
    inset-inline-start: 0;
    width: 100%;
    height: calc(100% - var(--koerber-drawer-panel-spacing));
    pointer-events: none;
    overflow: hidden;
  }

  .drawer--contained {
    position: absolute;
    z-index: var(--koerber-drawer-contained-z-index);
  }

  .drawer--fixed {
    position: fixed;
    z-index: var(--koerber-drawer-z-index);
  }

  .drawer__panel {
    position: absolute;
    display: flex;
    flex-direction: column;
    z-index: var(--koerber-drawer-z-index);
    max-height: 100%;
    background-color: var(--koerber-color-bg-surface);
    box-shadow: var(--koerber-shadow-x-large);
    overflow: auto;
    pointer-events: all;
    border-radius: var(--koerber-border-radius-small);
    margin: var(--koerber-drawer-panel-spacing);
  }

  .drawer--small .drawer__panel {
    width: 100%;
    max-width: var(--koerber-drawer-small-max-width);
  }

  .drawer--large .drawer__panel {
    width: 80%;
    max-width: var(--koerber-drawer-large-max-width);
  }

  .drawer__panel:focus {
    outline: none;
  }

  .drawer--end .drawer__panel {
    top: 0;
    inset-inline-end: 0;
    bottom: auto;
    inset-inline-start: auto;
    height: 100%;
  }

  .drawer--start .drawer__panel {
    top: 0;
    inset-inline-end: auto;
    bottom: auto;
    inset-inline-start: 0;
    height: 100%;
  }

  .drawer__header {
    display: flex;
    align-items: center;
  }

  .drawer__title {
    display: flex;
    flex: 1 1 auto;
    font: inherit;
    color: var(--koerber-color-text);
    font-size: var(--koerber-text-lg-font-size);
    line-height: var(--koerber-text-lg-line-height);
    font-weight: var(--koerber-font-weight-bold);
    padding: var(--koerber-drawer-header-spacing) 0 0 var(--koerber-drawer-header-spacing);
    margin: 0;
  }

  .drawer:not(.drawer--has-icon) .drawer__title-icon {
    display: none;
  }

  .drawer__title-icon {
    padding: var(--koerber-spacing-xs);
    display: flex;
    align-items: center;
  }

  .drawer__title-label {
    display: flex;
    align-items: center;
    padding-left: var(--koerber-spacing-s);
  }

  .drawer:not(.drawer--has-icon) .drawer__title-label {
    padding-left: 0;
  }

  .drawer__header-actions {
    flex-shrink: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
    gap: var(--koerber-spacing-2x-small);
    padding: var(--koerber-drawer-header-spacing) var(--koerber-drawer-header-spacing) 0 0;
  }

  .drawer__header-actions koerber-icon-button,
  .drawer__header-actions ::slotted(koerber-icon-button) {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--koerber-font-size-medium);
  }

  .drawer__body {
    flex: 1 1 auto;
    display: block;
    padding: var(--koerber-drawer-body-spacing) var(--koerber-drawer-body-spacing) 0 var(--koerber-drawer-body-spacing);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
  }
  .drawer:not(.drawer--has-footer) .drawer__body {
    padding-bottom: calc(var(--koerber-drawer-footer-spacing) + var(--koerber-drawer-panel-spacing));
  }
  .drawer__footer {
    display: flex;
    justify-content: end;
    text-align: right;
    padding: var(--koerber-drawer-footer-spacing) var(--koerber-drawer-footer-spacing)
      calc(var(--koerber-drawer-footer-spacing) + var(--koerber-drawer-panel-spacing))
      var(--koerber-drawer-footer-spacing);
  }

  .drawer__footer ::slotted(koerber-button:not(:last-of-type)) {
    margin-inline-end: var(--koerber-spacing-xs);
  }

  .drawer--small .drawer__footer ::slotted(koerber-button) {
    width: 100%;
  }

  .drawer:not(.drawer--has-footer) .drawer__footer {
    display: none;
  }

  .drawer__overlay {
    display: block;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    pointer-events: all;
    background-color: color-mix(
      in srgb,
      var(--koerber-drawer-overlay-color) var(--koerber-drawer-overlay-opacity),
      transparent
    );
  }

  .drawer--contained .drawer__overlay {
    display: none;
  }

  @media (forced-colors: active) {
    .drawer__panel {
      border: solid 1px var(--koerber-color-neutral-0);
    }
  }
`;var uikit_element=__webpack_require__("./src/internal/uikit-element.ts"),__decorate=function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r};class drawer_component_Drawer extends uikit_element.Z{constructor(){super(...arguments),this.hasSlotController=new slot.rc(this,"footer","icon"),this.localize=new localize.V(this),this.modal=new Modal(this),this.open=!1,this.label="",this.placement="end",this.size="small",this.contained=!1,this.noHeader=!1,this.handleDocumentKeyDown=event=>{this.contained||"Escape"===event.key&&this.modal.isActive()&&this.open&&(event.stopImmediatePropagation(),this.requestClose("keyboard"))}}firstUpdated(){this.drawer.hidden=!this.open,this.open&&(this.addOpenListeners(),this.contained||(this.modal.activate(),(0,internal_scroll.M4)(this)))}disconnectedCallback(){super.disconnectedCallback(),(0,internal_scroll.gG)(this)}requestClose(source){if(this.emit("koerber-request-close",{cancelable:!0,detail:{source}}).defaultPrevented){const animation=(0,animation_registry.O8)(this,"drawer.denyClose",{dir:this.localize.dir()});(0,animate.nv)(this.panel,animation.keyframes,animation.options)}else this.hide()}addOpenListeners(){document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){document.removeEventListener("keydown",this.handleDocumentKeyDown)}async handleOpenChange(){if(this.open){this.emit("koerber-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.contained||(this.modal.activate(),(0,internal_scroll.M4)(this));const autoFocusTarget=this.querySelector("[autofocus]");autoFocusTarget&&autoFocusTarget.removeAttribute("autofocus"),await Promise.all([(0,animate.U_)(this.drawer),(0,animate.U_)(this.overlay)]),this.drawer.hidden=!1,requestAnimationFrame((()=>{this.emit("koerber-initial-focus",{cancelable:!0}).defaultPrevented||(autoFocusTarget?autoFocusTarget.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),autoFocusTarget&&autoFocusTarget.setAttribute("autofocus","")}));const panelAnimation=(0,animation_registry.O8)(this,`drawer.show${uppercaseFirstLetter(this.placement)}`,{dir:this.localize.dir()}),overlayAnimation=(0,animation_registry.O8)(this,"drawer.overlay.show",{dir:this.localize.dir()});await Promise.all([(0,animate.nv)(this.panel,panelAnimation.keyframes,panelAnimation.options),(0,animate.nv)(this.overlay,overlayAnimation.keyframes,overlayAnimation.options)]),this.emit("koerber-after-show")}else{this.emit("koerber-hide"),this.removeOpenListeners(),this.contained||(this.modal.deactivate(),(0,internal_scroll.gG)(this)),await Promise.all([(0,animate.U_)(this.drawer),(0,animate.U_)(this.overlay)]);const panelAnimation=(0,animation_registry.O8)(this,`drawer.hide${uppercaseFirstLetter(this.placement)}`,{dir:this.localize.dir()}),overlayAnimation=(0,animation_registry.O8)(this,"drawer.overlay.hide",{dir:this.localize.dir()});await Promise.all([(0,animate.nv)(this.overlay,overlayAnimation.keyframes,overlayAnimation.options).then((()=>{this.overlay.hidden=!0})),(0,animate.nv)(this.panel,panelAnimation.keyframes,panelAnimation.options).then((()=>{this.panel.hidden=!0}))]),this.drawer.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1;const trigger=this.originalTrigger;"function"==typeof(null==trigger?void 0:trigger.focus)&&setTimeout((()=>trigger.focus())),this.emit("koerber-after-hide")}}handleNoModalChange(){this.open&&!this.contained&&(this.modal.activate(),(0,internal_scroll.M4)(this)),this.open&&this.contained&&(this.modal.deactivate(),(0,internal_scroll.gG)(this))}async show(){if(!this.open)return this.open=!0,(0,internal_event.m)(this,"koerber-after-show")}async hide(){if(this.open)return this.open=!1,(0,internal_event.m)(this,"koerber-after-hide")}render(){return lit.dy`
      <div
        part="base"
        class=${(0,class_map.$)({drawer:!0,"drawer--open":this.open,"drawer--small":"small"===this.size,"drawer--large":"large"===this.size,"drawer--end":"end"===this.placement,"drawer--start":"start"===this.placement,"drawer--contained":this.contained,"drawer--fixed":!this.contained,"drawer--rtl":"rtl"===this.localize.dir(),"drawer--has-footer":this.hasSlotController.test("footer"),"drawer--has-icon":this.hasSlotController.test("icon")})}
      >
        <div part="overlay" class="drawer__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="drawer__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${(0,if_defined.o)(this.noHeader?this.label:void 0)}
          aria-labelledby=${(0,if_defined.o)(this.noHeader?void 0:"title")}
          tabindex="0"
        >
          ${this.noHeader?"":lit.dy`
                <header part="header" class="drawer__header">
                  <h2 part="title" class="drawer__title" id="title">
                    <div part="icon" class="drawer__title-icon">
                      <slot name="icon"></slot>
                    </div>
                    <!-- If there's no label, use an invisible character to prevent the header from collapsing -->
                    <div part="title-label" class="drawer__title-label">
                      <slot name="label"> ${this.label.length>0?this.label:String.fromCharCode(65279)} </slot>
                    </div>
                  </h2>
                  <div class="drawer__header-actions">
                    <koerber-icon-button
                      size="large"
                      part="close-button"
                      exportparts="base:close-button__base"
                      class="drawer__close"
                      name="close"
                      label=${this.localize.term("close")}
                      library="system"
                      @click=${()=>this.requestClose("close-button")}
                    ></koerber-icon-button>
                  </div>
                </header>
              `}

          <slot part="body" class="drawer__body"></slot>

          <footer part="footer" class="drawer__footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    `}}drawer_component_Drawer.styles=[component_styles.Z,drawer_styles],drawer_component_Drawer.dependencies={"koerber-icon-button":icon_button_component.Z};const drawer_component=drawer_component_Drawer;__decorate([(0,decorators.IO)(".drawer")],drawer_component_Drawer.prototype,"drawer",void 0),__decorate([(0,decorators.IO)(".drawer__panel")],drawer_component_Drawer.prototype,"panel",void 0),__decorate([(0,decorators.IO)(".drawer__overlay")],drawer_component_Drawer.prototype,"overlay",void 0),__decorate([(0,decorators.Cb)({type:Boolean,reflect:!0})],drawer_component_Drawer.prototype,"open",void 0),__decorate([(0,decorators.Cb)({reflect:!0})],drawer_component_Drawer.prototype,"label",void 0),__decorate([(0,decorators.Cb)({reflect:!0})],drawer_component_Drawer.prototype,"placement",void 0),__decorate([(0,decorators.Cb)({reflect:!0})],drawer_component_Drawer.prototype,"size",void 0),__decorate([(0,decorators.Cb)({type:Boolean,reflect:!0})],drawer_component_Drawer.prototype,"contained",void 0),__decorate([(0,decorators.Cb)({attribute:"no-header",type:Boolean,reflect:!0})],drawer_component_Drawer.prototype,"noHeader",void 0),__decorate([(0,watch.Y)("open",{waitUntilFirstUpdate:!0})],drawer_component_Drawer.prototype,"handleOpenChange",null),__decorate([(0,watch.Y)("contained",{waitUntilFirstUpdate:!0})],drawer_component_Drawer.prototype,"handleNoModalChange",null),(0,animation_registry.jx)("drawer.showEnd",{keyframes:[{opacity:0,translate:"100%"},{opacity:1,translate:"0"}],rtlKeyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}}),(0,animation_registry.jx)("drawer.hideEnd",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"100%"}],rtlKeyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],options:{duration:250,easing:"ease"}}),(0,animation_registry.jx)("drawer.showStart",{keyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],rtlKeyframes:[{opacity:0,translate:"100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}}),(0,animation_registry.jx)("drawer.hideStart",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],rtlKeyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"100%"}],options:{duration:250,easing:"ease"}}),(0,animation_registry.jx)("drawer.denyClose",{keyframes:[{scale:1},{scale:1.01},{scale:1}],options:{duration:250}}),(0,animation_registry.jx)("drawer.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}}),(0,animation_registry.jx)("drawer.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});drawer_component.define("koerber-drawer");__webpack_require__("./src/components/button/button.ts"),__webpack_require__("./src/components/form-field/form-field.ts"),__webpack_require__("./src/components/input/input.ts"),__webpack_require__("./src/components/textarea/textarea.ts"),__webpack_require__("./src/styles/foundations/grid.css"),__webpack_require__("./src/styles/foundations/typography.css");const drawer_stories={title:"Components/Drawer-Stories",component:"koerber-drawer",argTypes:{open:{control:{type:"boolean"},description:"Indicates whether or not the drawer is open. You can toggle this attribute to show and hide the drawer, or you can\r\nuse the `show()` and `hide()` methods and this attribute will reflect the drawer's open state.",defaultValue:"false",table:{type:{summary:"boolean",detail:"boolean"},defaultValue:{summary:"false"}}},label:{control:{type:"text"},description:"The drawer's label as displayed in the header. You should always include a relevant label even when using\r\n`no-header`, as it is required for proper accessibility. If you need to display HTML, use the `label` slot instead.",defaultValue:"''",table:{type:{summary:"string",detail:"string"},defaultValue:{summary:"''"}}},placement:{control:{type:"select"},options:["end","start"],description:"The direction from which the drawer will open.",defaultValue:"'end'",table:{type:{summary:"'end' | 'start'",detail:"'end' | 'start'"},defaultValue:{summary:"'end'"}}},size:{control:{type:"select"},options:["small","large"],description:"The direction from which the drawer will open.",defaultValue:"'small'",table:{type:{summary:"'small' | 'large'",detail:"'small' | 'large'"},defaultValue:{summary:"'small'"}}},contained:{control:{type:"boolean"},description:"By default, the drawer slides out of its containing block (usually the viewport). To make the drawer slide out of\r\nits parent element, set this attribute and add `position: relative` to the parent.",defaultValue:"false",table:{type:{summary:"boolean",detail:"boolean"},defaultValue:{summary:"false"}}},"no-header":{control:{type:"boolean"},description:"Removes the header. This will also remove the default close button, so please ensure you provide an easy,\r\naccessible way for users to dismiss the drawer.",defaultValue:"false",table:{type:{summary:"boolean",detail:"boolean"},defaultValue:{summary:"false"}}}}},Default={render:args=>{const storyHtml=`\n<koerber-drawer ${Object.entries(args).map((([key,value])=>"click"===key?`${key}="() => {}"`:"boolean"==typeof value?value?`${key}`:"":`${key}="${value}"`)).join(" ")} class="drawer-overview">\n  <koerber-icon name="blur" slot="icon" size="large" class="icon">blur</koerber-icon>\n\n  Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n\n  <koerber-button slot="footer" variant="primary">Close</koerber-button>\n</koerber-drawer>\n  \n<koerber-button>Open Drawer</koerber-button>\n\n<style>\n  .icon{\n    color: var(--koerber-color-icon);\n  }\n</style>\n<script>\n  setTimeout(() =>{\n    const drawer = document.querySelector('.drawer-overview');\n    const openButton = drawer.nextElementSibling;\n    const closeButton = drawer.querySelector('koerber-button[variant="primary"]');\n    \n    openButton.addEventListener('click', () => drawer.show());\n    closeButton.addEventListener('click', () => drawer.hide());\n  }, 0);\n<\/script>`;return lit.dy`${(0,unsafe_html.A)(storyHtml)}`},args:{label:"Drawer"}},Placement={render:()=>lit.dy`${(0,unsafe_html.A)('\n<koerber-drawer placement="start" label="Start Drawer" class="drawer-overview-start" >\n  <koerber-icon name="account-arrow-left" slot="icon" size="large">account</koerber-icon>\n  Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n  <koerber-button slot="footer" variant="primary">Close</koerber-button>\n</koerber-drawer>\n  \n<koerber-button class="button-overview-start">Open Start Drawer</koerber-button>\n\n<koerber-drawer placement="end" label="End Drawer" class="drawer-overview-end">\n  <koerber-icon name="account-arrow-right" slot="icon" size="large">account</koerber-icon>\n  Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n  <koerber-button slot="footer" variant="primary">Close</koerber-button>\n</koerber-drawer>\n  \n<koerber-button class="button-overview-end">Open End Drawer</koerber-button>\n  \n<script>\n  setTimeout(() =>{\n    const startDrawer = document.querySelector(\'.drawer-overview-start\');\n    const openStartButton = document.querySelector(\'.button-overview-start\');\n    const closeStartButton = startDrawer.querySelector(\'koerber-button[variant="primary"]\');\n\n    const endDrawer = document.querySelector(\'.drawer-overview-end\');\n    const openEndButton = document.querySelector(\'.button-overview-end\');\n    const closeEndButton = endDrawer.querySelector(\'koerber-button[variant="primary"]\');\n    \n    openStartButton.addEventListener(\'click\', () => startDrawer.show());\n    closeStartButton.addEventListener(\'click\', () => startDrawer.hide());\n\n    \n    openEndButton.addEventListener(\'click\', () => endDrawer.show());\n    closeEndButton.addEventListener(\'click\', () => endDrawer.hide());\n  }, 0);\n<\/script>')}`},Size_Small={render:()=>lit.dy`${(0,unsafe_html.A)('\n<koerber-drawer size="small" label="Small Drawer" class="drawer-overview-small" >\n  Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n  <koerber-button slot="footer">Button 1</koerber-button>\n  <koerber-button slot="footer">Button 2</koerber-button>\n  <koerber-button slot="footer">Button 3</koerber-button>\n</koerber-drawer>\n  \n<koerber-button class="button-overview-small">Open Small Drawer</koerber-button>\n  \n<script>\n  setTimeout(() =>{\n    const drawer = document.querySelector(\'.drawer-overview-small\');\n    const openButton = document.querySelector(\'.button-overview-small\');\n\n    openButton.addEventListener(\'click\', () => drawer.show());\n  }, 0);\n<\/script>')}`},Size_Large={render:()=>lit.dy`${(0,unsafe_html.A)('\n<koerber-drawer size="large" label="Large Drawer" class="drawer-overview-large" >\n  Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n  <koerber-button slot="footer">Button 1</koerber-button>\n  <koerber-button slot="footer">Button 2</koerber-button>\n  <koerber-button slot="footer">Button 3</koerber-button>\n</koerber-drawer>\n  \n<koerber-button class="button-overview-large">Open Large Drawer</koerber-button>\n  \n<script>\n  setTimeout(() =>{\n    const drawer = document.querySelector(\'.drawer-overview-large\');\n    const openButton = document.querySelector(\'.button-overview-large\');\n\n    openButton.addEventListener(\'click\', () => drawer.show());\n  }, 0);\n<\/script>')}`},Contained={render:()=>lit.dy`${(0,unsafe_html.A)('\n<div class="container">\n  The drawer will be contained to this box. This content won\'t shift or be affected in any way when the drawer opens.\n  <koerber-drawer label="Contained Drawer" class="drawer-overview-contained" contained>\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n    <koerber-button slot="footer" variant="secondary">Button 1</koerber-button>\n    <koerber-button slot="footer" variant="secondary">Button 2</koerber-button>\n   </koerber-drawer>\n</div>\n\n<koerber-button class="button-overview-contained">Open Drawer</koerber-button>\n<style>\n  .container {\n    position: relative; \n    border: solid 2px var(--koerber-color-border); \n    height: 300px; \n    padding: 1rem; \n    margin-bottom: 1rem; \n    background: var(--koerber-color-bg-alt);\n  }\n</style>  \n<script>\n  setTimeout(() =>{\n    const drawer = document.querySelector(\'.drawer-overview-contained\');\n    const openButton = document.querySelector(\'.button-overview-contained\');\n\n    openButton.addEventListener(\'click\', () => drawer.show());\n  }, 0);\n<\/script>')}`},Scrolling={render:()=>lit.dy`${(0,unsafe_html.A)('\n<koerber-drawer label="Scrolling" class="drawer-overview-scrolling">\n  <div class="scrolling-container">\n    <p>Scroll down and give it a try! 👇</p>\n  </div>\n  <koerber-button slot="footer" variant="primary">Close</koerber-button>\n</koerber-drawer>\n    \n<koerber-button>Open Drawer</koerber-button>\n\n<style>\n    .scrolling-container {\n      height: 150vh; \n      border: dashed 2px var(--koerber-color-border); \n      padding: 0 1rem;\n    }\n</style>    \n\n<script>\n  setTimeout(() =>{\n    const drawer = document.querySelector(\'.drawer-overview-scrolling\');\n    const openButton = drawer.nextElementSibling;\n    const closeButton = drawer.querySelector(\'koerber-button[variant="primary"]\');\n    \n    openButton.addEventListener(\'click\', () => drawer.show());\n    closeButton.addEventListener(\'click\', () => drawer.hide());\n  }, 0);\n<\/script>')}`},PreventClosing={render:()=>lit.dy`${(0,unsafe_html.A)("\n <koerber-drawer label=\"Drawer\" class=\"drawer-deny-close\">\n    This drawer will not close when you click on the overlay.\n    <koerber-button slot=\"footer\" variant=\"primary\">Close</koerber-button>\n  </koerber-drawer>\n  \n  <koerber-button>Open Drawer</koerber-button>\n  \n  <script>\n    setTimeout(() =>{\n      const drawer = document.querySelector('.drawer-deny-close');\n      const openButton = drawer.nextElementSibling;\n      const closeButton = drawer.querySelector('koerber-button[variant=\"primary\"]');\n    \n      openButton.addEventListener('click', () => drawer.show());\n      closeButton.addEventListener('click', () => drawer.hide());\n    \n      // Prevent the drawer from closing when the user clicks on the overlay\n      drawer.addEventListener('koerber-request-close', event => {\n        if (event.detail.source === 'overlay') {\n          event.preventDefault();\n        }\n      });\n    }, 0);\n  <\/script>")}`},InitialFocus={render:()=>lit.dy`${(0,unsafe_html.A)('\n<koerber-drawer label="Drawer" class="drawer-focus">\n  <div class="button-group">\n    <koerber-button variant="primary">Basic Info</koerber-button>\n    <koerber-button variant="scondary">More Indo</koerber-button>\n  </div>\n  <koerber-form-field label="Control in focus">\n      <koerber-input autofocus placeholder="I will have focus when the drawer is opened"></koerber-input>\n  </koerber-form-field>\n  <koerber-form-field label="Email">\n      <koerber-input type="email" value="john.doe@mail.com"></koerber-input>\n  </koerber-form-field>\n  <koerber-form-field label="Name">\n      <koerber-input type="text" value="John Doe"></koerber-input>\n  </koerber-form-field>\n  <koerber-form-field label="Details" help-text="Helper Text" value-hint="0/200">\n    <koerber-textarea placeholder="Add some details..." size="medium"></koerber-textarea>\n  </koerber-form-field>\n  <koerber-button slot="footer" variant="secondary">Cancel</koerber-button>\n  <koerber-button slot="footer" variant="primary">Save</koerber-button>\n</koerber-drawer>\n\n<koerber-button>Open Drawer</koerber-button>\n\n<style>\n  koerber-form-field {\n    padding-bottom:16px;\n  }\n\n  .button-group {\n    display: flex; \n    padding-bottom: 24px;\n  }\n\n  .button-group koerber-button {\n    width: 50%;\n  }\n</style>   \n\n<script>\n  setTimeout(() =>{\n    const drawer = document.querySelector(\'.drawer-focus\');\n    const input = drawer.querySelector(\'koerber-input\');\n    const openButton = drawer.nextElementSibling;\n    const allButtons = drawer.querySelectorAll(\'koerber-button\');\n\n    openButton.addEventListener(\'click\', () => drawer.show());\n    allButtons.forEach(button => button.addEventListener(\'click\', () => drawer.hide()));\n  }, 0);\n<\/script>')}`};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  render: args => {\n    const attributes = Object.entries(args).map(([key, value]) => {\n      if (key === \'click\') return `${key}="() => {}"`;\n      if (typeof value === \'boolean\') {\n        if (value) {\n          return `${key}`;\n        }\n        return \'\';\n      }\n      return `${key}="${value}"`;\n    }).join(\' \');\n    const storyHtml = `\n<koerber-drawer ${attributes} class="drawer-overview">\n  <koerber-icon name="blur" slot="icon" size="large" class="icon">blur</koerber-icon>\n\n  Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n\n  <koerber-button slot="footer" variant="primary">Close</koerber-button>\n</koerber-drawer>\n  \n<koerber-button>Open Drawer</koerber-button>\n\n<style>\n  .icon{\n    color: var(--koerber-color-icon);\n  }\n</style>\n<script>\n  setTimeout(() =>{\n    const drawer = document.querySelector(\'.drawer-overview\');\n    const openButton = drawer.nextElementSibling;\n    const closeButton = drawer.querySelector(\'koerber-button[variant="primary"]\');\n    \n    openButton.addEventListener(\'click\', () => drawer.show());\n    closeButton.addEventListener(\'click\', () => drawer.hide());\n  }, 0);\n<\/script>`;\n    return html`${unsafeHTML(storyHtml)}`;\n  },\n  args: {\n    label: \'Drawer\'\n  }\n}',...Default.parameters?.docs?.source}}},Placement.parameters={...Placement.parameters,docs:{...Placement.parameters?.docs,source:{originalSource:'{\n  render: () => {\n    const storyHtml = `\n<koerber-drawer placement="start" label="Start Drawer" class="drawer-overview-start" >\n  <koerber-icon name="account-arrow-left" slot="icon" size="large">account</koerber-icon>\n  Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n  <koerber-button slot="footer" variant="primary">Close</koerber-button>\n</koerber-drawer>\n  \n<koerber-button class="button-overview-start">Open Start Drawer</koerber-button>\n\n<koerber-drawer placement="end" label="End Drawer" class="drawer-overview-end">\n  <koerber-icon name="account-arrow-right" slot="icon" size="large">account</koerber-icon>\n  Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n  <koerber-button slot="footer" variant="primary">Close</koerber-button>\n</koerber-drawer>\n  \n<koerber-button class="button-overview-end">Open End Drawer</koerber-button>\n  \n<script>\n  setTimeout(() =>{\n    const startDrawer = document.querySelector(\'.drawer-overview-start\');\n    const openStartButton = document.querySelector(\'.button-overview-start\');\n    const closeStartButton = startDrawer.querySelector(\'koerber-button[variant="primary"]\');\n\n    const endDrawer = document.querySelector(\'.drawer-overview-end\');\n    const openEndButton = document.querySelector(\'.button-overview-end\');\n    const closeEndButton = endDrawer.querySelector(\'koerber-button[variant="primary"]\');\n    \n    openStartButton.addEventListener(\'click\', () => startDrawer.show());\n    closeStartButton.addEventListener(\'click\', () => startDrawer.hide());\n\n    \n    openEndButton.addEventListener(\'click\', () => endDrawer.show());\n    closeEndButton.addEventListener(\'click\', () => endDrawer.hide());\n  }, 0);\n<\/script>`;\n    return html`${unsafeHTML(storyHtml)}`;\n  }\n}',...Placement.parameters?.docs?.source}}},Size_Small.parameters={...Size_Small.parameters,docs:{...Size_Small.parameters?.docs,source:{originalSource:'{\n  render: () => {\n    const storyHtml = `\n<koerber-drawer size="small" label="Small Drawer" class="drawer-overview-small" >\n  Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n  <koerber-button slot="footer">Button 1</koerber-button>\n  <koerber-button slot="footer">Button 2</koerber-button>\n  <koerber-button slot="footer">Button 3</koerber-button>\n</koerber-drawer>\n  \n<koerber-button class="button-overview-small">Open Small Drawer</koerber-button>\n  \n<script>\n  setTimeout(() =>{\n    const drawer = document.querySelector(\'.drawer-overview-small\');\n    const openButton = document.querySelector(\'.button-overview-small\');\n\n    openButton.addEventListener(\'click\', () => drawer.show());\n  }, 0);\n<\/script>`;\n    return html`${unsafeHTML(storyHtml)}`;\n  }\n}',...Size_Small.parameters?.docs?.source}}},Size_Large.parameters={...Size_Large.parameters,docs:{...Size_Large.parameters?.docs,source:{originalSource:'{\n  render: () => {\n    const storyHtml = `\n<koerber-drawer size="large" label="Large Drawer" class="drawer-overview-large" >\n  Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n  <koerber-button slot="footer">Button 1</koerber-button>\n  <koerber-button slot="footer">Button 2</koerber-button>\n  <koerber-button slot="footer">Button 3</koerber-button>\n</koerber-drawer>\n  \n<koerber-button class="button-overview-large">Open Large Drawer</koerber-button>\n  \n<script>\n  setTimeout(() =>{\n    const drawer = document.querySelector(\'.drawer-overview-large\');\n    const openButton = document.querySelector(\'.button-overview-large\');\n\n    openButton.addEventListener(\'click\', () => drawer.show());\n  }, 0);\n<\/script>`;\n    return html`${unsafeHTML(storyHtml)}`;\n  }\n}',...Size_Large.parameters?.docs?.source}}},Contained.parameters={...Contained.parameters,docs:{...Contained.parameters?.docs,source:{originalSource:'{\n  render: () => {\n    const storyHtml = `\n<div class="container">\n  The drawer will be contained to this box. This content won\'t shift or be affected in any way when the drawer opens.\n  <koerber-drawer label="Contained Drawer" class="drawer-overview-contained" contained>\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n    <koerber-button slot="footer" variant="secondary">Button 1</koerber-button>\n    <koerber-button slot="footer" variant="secondary">Button 2</koerber-button>\n   </koerber-drawer>\n</div>\n\n<koerber-button class="button-overview-contained">Open Drawer</koerber-button>\n<style>\n  .container {\n    position: relative; \n    border: solid 2px var(--koerber-color-border); \n    height: 300px; \n    padding: 1rem; \n    margin-bottom: 1rem; \n    background: var(--koerber-color-bg-alt);\n  }\n</style>  \n<script>\n  setTimeout(() =>{\n    const drawer = document.querySelector(\'.drawer-overview-contained\');\n    const openButton = document.querySelector(\'.button-overview-contained\');\n\n    openButton.addEventListener(\'click\', () => drawer.show());\n  }, 0);\n<\/script>`;\n    return html`${unsafeHTML(storyHtml)}`;\n  }\n}',...Contained.parameters?.docs?.source}}},Scrolling.parameters={...Scrolling.parameters,docs:{...Scrolling.parameters?.docs,source:{originalSource:'{\n  render: () => {\n    const storyHtml = `\n<koerber-drawer label="Scrolling" class="drawer-overview-scrolling">\n  <div class="scrolling-container">\n    <p>Scroll down and give it a try! 👇</p>\n  </div>\n  <koerber-button slot="footer" variant="primary">Close</koerber-button>\n</koerber-drawer>\n    \n<koerber-button>Open Drawer</koerber-button>\n\n<style>\n    .scrolling-container {\n      height: 150vh; \n      border: dashed 2px var(--koerber-color-border); \n      padding: 0 1rem;\n    }\n</style>    \n\n<script>\n  setTimeout(() =>{\n    const drawer = document.querySelector(\'.drawer-overview-scrolling\');\n    const openButton = drawer.nextElementSibling;\n    const closeButton = drawer.querySelector(\'koerber-button[variant="primary"]\');\n    \n    openButton.addEventListener(\'click\', () => drawer.show());\n    closeButton.addEventListener(\'click\', () => drawer.hide());\n  }, 0);\n<\/script>`;\n    return html`${unsafeHTML(storyHtml)}`;\n  }\n}',...Scrolling.parameters?.docs?.source}}},PreventClosing.parameters={...PreventClosing.parameters,docs:{...PreventClosing.parameters?.docs,source:{originalSource:"{\n  render: () => {\n    const storyHtml = `\n <koerber-drawer label=\"Drawer\" class=\"drawer-deny-close\">\n    This drawer will not close when you click on the overlay.\n    <koerber-button slot=\"footer\" variant=\"primary\">Close</koerber-button>\n  </koerber-drawer>\n  \n  <koerber-button>Open Drawer</koerber-button>\n  \n  <script>\n    setTimeout(() =>{\n      const drawer = document.querySelector('.drawer-deny-close');\n      const openButton = drawer.nextElementSibling;\n      const closeButton = drawer.querySelector('koerber-button[variant=\"primary\"]');\n    \n      openButton.addEventListener('click', () => drawer.show());\n      closeButton.addEventListener('click', () => drawer.hide());\n    \n      // Prevent the drawer from closing when the user clicks on the overlay\n      drawer.addEventListener('koerber-request-close', event => {\n        if (event.detail.source === 'overlay') {\n          event.preventDefault();\n        }\n      });\n    }, 0);\n  <\/script>`;\n    return html`${unsafeHTML(storyHtml)}`;\n  }\n}",...PreventClosing.parameters?.docs?.source}}},InitialFocus.parameters={...InitialFocus.parameters,docs:{...InitialFocus.parameters?.docs,source:{originalSource:'{\n  render: () => {\n    const storyHtml = `\n<koerber-drawer label="Drawer" class="drawer-focus">\n  <div class="button-group">\n    <koerber-button variant="primary">Basic Info</koerber-button>\n    <koerber-button variant="scondary">More Indo</koerber-button>\n  </div>\n  <koerber-form-field label="Control in focus">\n      <koerber-input autofocus placeholder="I will have focus when the drawer is opened"></koerber-input>\n  </koerber-form-field>\n  <koerber-form-field label="Email">\n      <koerber-input type="email" value="john.doe@mail.com"></koerber-input>\n  </koerber-form-field>\n  <koerber-form-field label="Name">\n      <koerber-input type="text" value="John Doe"></koerber-input>\n  </koerber-form-field>\n  <koerber-form-field label="Details" help-text="Helper Text" value-hint="0/200">\n    <koerber-textarea placeholder="Add some details..." size="medium"></koerber-textarea>\n  </koerber-form-field>\n  <koerber-button slot="footer" variant="secondary">Cancel</koerber-button>\n  <koerber-button slot="footer" variant="primary">Save</koerber-button>\n</koerber-drawer>\n\n<koerber-button>Open Drawer</koerber-button>\n\n<style>\n  koerber-form-field {\n    padding-bottom:16px;\n  }\n\n  .button-group {\n    display: flex; \n    padding-bottom: 24px;\n  }\n\n  .button-group koerber-button {\n    width: 50%;\n  }\n</style>   \n\n<script>\n  setTimeout(() =>{\n    const drawer = document.querySelector(\'.drawer-focus\');\n    const input = drawer.querySelector(\'koerber-input\');\n    const openButton = drawer.nextElementSibling;\n    const allButtons = drawer.querySelectorAll(\'koerber-button\');\n\n    openButton.addEventListener(\'click\', () => drawer.show());\n    allButtons.forEach(button => button.addEventListener(\'click\', () => drawer.hide()));\n  }, 0);\n<\/script>`;\n    return html`${unsafeHTML(storyHtml)}`;\n  }\n}',...InitialFocus.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Placement","Size_Small","Size_Large","Contained","Scrolling","PreventClosing","InitialFocus"]}}]);
//# sourceMappingURL=stories-components-drawer-drawer-stories.9d3e2466.iframe.bundle.js.map