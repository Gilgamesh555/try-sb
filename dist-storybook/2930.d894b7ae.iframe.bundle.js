"use strict";(self.webpackChunk_koerber_uikit=self.webpackChunk_koerber_uikit||[]).push([[2930],{"./src/components/badge/badge.ts":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{__webpack_require__("./src/components/badge/badge.component.ts").Z.define("koerber-badge")},"./src/components/card/card.ts":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{var class_map=__webpack_require__("./node_modules/lit/directives/class-map.js"),slot=__webpack_require__("./src/internal/slot.ts"),lit=__webpack_require__("./node_modules/lit/index.js"),decorators=__webpack_require__("./node_modules/lit/decorators.js"),component_styles=__webpack_require__("./src/styles/component.styles.ts");const card_styles=lit.iv`
  ${component_styles.Z}

  :host {
    --border-color: var(--koerber-color-border-secondary);
    --border-radius: var(--koerber-border-radius-medium);
    --border-width: var(--koerber-border-width-s);
    --padding: var(--koerber-spacing-s);

    display: inline-block;
  }

  .card {
    display: flex;
    flex-direction: column;
    background-color: var(--koerber-color-bg-surface);
    border: solid var(--border-width) var(--border-color);
    border-radius: var(--border-radius);
  }

  .card__image {
    display: flex;
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
    margin: calc(-1 * var(--border-width));
    overflow: hidden;
  }

  .card__image::slotted(img) {
    display: block;
    width: 100%;
  }

  .card:not(.card--has-image) .card__image {
    display: none;
  }

  .card-content {
    padding: var(--padding);
  }

  .card__header {
    display: block;
  }

  .card:not(.card--has-header) .card__header {
    display: none;
  }

  .card:not(.card--has-image) .card__header {
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
  }

  .card__body {
    display: block;
  }

  .card__body--has-margin-bottom {
    margin-bottom: var(--koerber-spacing-m);
  }

  .card__body--has-margin-top {
    margin-top: var(--koerber-spacing-m);
  }

  ::slotted([slot='footer']) {
    display: flex;
    flex-direction: row;
    gap: var(--koerber-spacing-xs);
    flex: 1;
    justify-content: flex-end;
  }

  .card:not(.card--has-footer) .card__footer {
    display: none;
  }
`;var uikit_element=__webpack_require__("./src/internal/uikit-element.ts"),__decorate=function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r};class card_component_Card extends uikit_element.Z{constructor(){super(...arguments),this.hasSlotController=new slot.rc(this,"footer","header","image")}render(){var _a;const defaultSlotAssignedNodes=null===(_a=this.defaultSlot)||void 0===_a?void 0:_a.assignedNodes({flatten:!0}),defaultSlotHasContent=null==defaultSlotAssignedNodes?void 0:defaultSlotAssignedNodes.some((node=>{var _a;return node.nodeType===Node.ELEMENT_NODE||node.nodeType===Node.TEXT_NODE&&""!==(null===(_a=null==node?void 0:node.textContent)||void 0===_a?void 0:_a.trim())}));return lit.dy`
      <div
        part="base"
        class=${(0,class_map.$)({card:!0,"card--has-footer":this.hasSlotController.test("footer"),"card--has-image":this.hasSlotController.test("image"),"card--has-header":this.hasSlotController.test("header")})}
      >
        <slot name="image" part="image" class="card__image"></slot>
        <div class="card-content">
          <slot
            name="header"
            part="header"
            class="
              card__header: true"
          ></slot>
          <slot
            part="body"
            class=${(0,class_map.$)({card__body:!0,"card__body--has-margin-bottom":this.hasSlotController.test("footer"),"card__body--has-margin-top":this.hasSlotController.test("header")&&defaultSlotHasContent})}
          ></slot>
          <slot name="footer" part="footer" class="card__footer"></slot>
        </div>
      </div>
    `}}card_component_Card.styles=card_styles;const card_component=card_component_Card;__decorate([(0,decorators.IO)("slot:not([name])")],card_component_Card.prototype,"defaultSlot",void 0);card_component.define("koerber-card")},"./src/components/checkbox/checkbox.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>checkbox_component});var class_map=__webpack_require__("./node_modules/lit/directives/class-map.js"),default_value=__webpack_require__("./src/internal/default-value.ts"),lit=__webpack_require__("./node_modules/lit/index.js"),if_defined=__webpack_require__("./node_modules/lit/directives/if-defined.js"),live=__webpack_require__("./node_modules/lit/directives/live.js"),decorators=__webpack_require__("./node_modules/lit/decorators.js"),watch=__webpack_require__("./src/internal/watch.ts"),component_styles=__webpack_require__("./src/styles/component.styles.ts"),icon_component=__webpack_require__("./src/components/icon/icon.component.ts");const checkbox_styles=lit.iv`
  :host {
    display: block;
    --koerber-checkbox-required-content: '*';
    --koerber-checkbox-required-content-offset: -2px;
    --koerber-checkbox-size-medium: 16px;
    --component-height-standard: 20px;
    --component-height-comfortable: 22px;
  }

  :host([disabled]) {
    cursor: not-allowed;
  }

  :host([size='standard']) {
    --spacing: calc(
      (var(--koerber-clickable-size-standard) - var(--component-height-standard)) / 2
    ); // Half of 24px and minus component to create a 24px high clickable area
  }

  :host([size='comfortable']) {
    --spacing: calc(
      (var(--koerber-clickable-size-comfortable) - var(--component-height-comfortable)) / 2
    ); // Half of 48px and minus component size to create a 48px high clickable area
  }

  .checkbox {
    position: relative;
    display: inline-flex;
    align-items: center; /* Centering vertically */
    font-family: var(--koerber-font-family-default);
    font-weight: var(--koerber-font-weight-regular);
    color: inherit;
    vertical-align: middle;
    cursor: pointer;
  }

  .checkbox--standard {
    --toggle-size: var(--koerber-checkbox-size-medium);
    font-size: var(--koerber-text-base-font-size);
  }

  .checkbox--comfortable {
    --toggle-size: var(--koerber-checkbox-size-medium);
    font-size: var(--koerber-text-md-font-size);
  }

  .checkbox-wrapper {
    display: inline-flex;
    align-items: center; /* Centering vertically */
    padding: var(--spacing);
    cursor: pointer;
  }

  .checkbox-wrapper input {
    cursor: pointer;
  }

  .checkbox__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-right: var(--koerber-spacing-xs);
    width: var(--koerber-checkbox-size-medium);
    height: var(--koerber-checkbox-size-medium);
    border: solid var(--koerber-border-width-s) var(--koerber-color-border);
    border-radius: 2px;
    background-color: var(--koerber-color-bg);
    transition:
      var(--koerber-transition-fast) border-color,
      var(--koerber-transition-fast) background-color,
      var(--koerber-transition-fast) color,
      var(--koerber-transition-fast) box-shadow;
  }

  .checkbox__input {
    position: absolute;
    opacity: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    cursor: pointer;
  }

  .checkbox__checked-icon,
  .checkbox__indeterminate-icon {
    display: inline-flex;
    width: var(--toggle-size);
    height: var(--toggle-size);
    color: var(--koerber-color-text-bg-fill);
  }

  /* Hover */
  .checkbox:not(.checkbox--checked):not(.checkbox--disabled) .checkbox__control:hover {
    border-color: var(--koerber-color-border-hover);
    background-color: var(--koerber-color-bg);
  }

  /* Focus */
  .checkbox:not(.checkbox--checked):not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control {
    outline: solid var(--koerber-border-width-m) var(--koerber-color-bg-fill);
    border-color: var(--koerber-color-border-hover);
    outline-offset: var(--koerber-border-offset);
  }

  /* Checked/indeterminate */
  .checkbox--checked .checkbox__control,
  .checkbox--indeterminate .checkbox__control {
    border-color: var(--koerber-color-border-focus);
    background-color: var(--koerber-color-bg-fill);
  }

  /* Checked/indeterminate + hover */
  .checkbox.checkbox--checked:not(.checkbox--disabled) .checkbox__control:hover,
  .checkbox.checkbox--indeterminate:not(.checkbox--disabled) .checkbox__control:hover {
    border-color: var(--koerber-color-border-hover);
    background-color: var(--koerber-color-bg-fill-hover);
  }

  /* Checked/indeterminate + focus */
  .checkbox.checkbox--checked:not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control,
  .checkbox.checkbox--indeterminate:not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control {
    outline: solid var(--koerber-border-width-m) var(--koerber-color-bg-fill);
    border-color: var(--koerber-color-border-focus);
    outline-offset: var(--koerber-border-offset);
  }

  /* Disabled */
  .checkbox--disabled {
    cursor: not-allowed;
    border-color: var(--koerber-color-border-disabled);
    color: var(--koerber-color-icon-disabled);
  }

  /* Error */
  .checkbox--error .checkbox__control {
    border-color: var(--koerber-color-border-error);
  }

  /* checkbox unchecked disabled */
  .checkbox.checkbox--disabled .checkbox__control {
    border-color: var(--koerber-color-border-disabled);
  }

  /* Checked/indeterminate + disabled */
  .checkbox.checkbox--checked.checkbox--disabled .checkbox__control,
  .checkbox.checkbox--indeterminate.checkbox--disabled .checkbox__control {
    background-color: var(--koerber-color-bg-fill-disabled);
    border-color: var (--koerber-color-border-disabled);
  }

  .checkbox__checked .checkbox__control {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .checkbox__label {
    display: inline-flex;
    align-items: center;
    color: inherit;
    margin-inline-start: 0.5em;
    user-select: none;
  }

  :host([required]) .checkbox__label::after {
    content: var(--koerber-checkbox-required-content);
    margin-inline-start: var(--koerber-checkbox-required-content-offset);
  }
`;var uikit_element=__webpack_require__("./src/internal/uikit-element.ts"),__decorate=function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r};class Checkbox extends uikit_element.Z{constructor(){super(...arguments),this.hasFocus=!1,this.title="",this.name="",this.size="standard",this.disabled=!1,this.checked=!1,this.indeterminate=!1,this.defaultChecked=!1,this.required=!1,this.error=!1}handleClick(event){event.preventDefault(),this.checked=!this.checked,this.indeterminate=!1,this.emit("koerber-change")}handleWrapperClick(event){event.preventDefault(),"INPUT"!==event.target.tagName&&(this.checked=!this.checked,this.emit("koerber-change"))}handleKeyDown(event){" "===event.key&&(event.preventDefault(),this.checked=!this.checked,this.emit("koerber-change"))}simulateSpacebarPress(){const event=new KeyboardEvent("keydown",{key:" ",code:"Space",keyCode:32,charCode:32,which:32,bubbles:!0,cancelable:!0,composed:!0});this.handleKeyDown(event)}handleBlur(){this.hasFocus=!1,this.emit("koerber-blur")}handleInput(){this.emit("koerber-input")}handleFocus(){this.hasFocus=!0,this.emit("koerber-focus")}handleStateChange(){this.input.checked=this.checked,this.input.indeterminate=this.indeterminate}click(){this.input.click()}focus(options){this.input.focus(options)}blur(){this.input.blur()}render(){return lit.dy`
      <div class="checkbox-wrapper" @click=${this.handleWrapperClick}>
        <label
          part="base"
          class=${(0,class_map.$)({checkbox:!0,"checkbox--checked":this.checked,"checkbox--disabled":this.disabled,"checkbox--focused":this.hasFocus,"checkbox--indeterminate":this.indeterminate,"checkbox--standard":"standard"===this.size,"checkbox--comfortable":"comfortable"===this.size,"checkbox--error":this.error})}
        >
          <input
            class="checkbox__input"
            type="checkbox"
            title=${this.title}
            name=${this.name}
            value=${(0,if_defined.o)(this.value)}
            .indeterminate=${(0,live.a)(this.indeterminate)}
            .checked=${(0,live.a)(this.checked)}
            .disabled=${this.disabled}
            .required=${this.required}
            aria-checked=${this.checked?"true":"false"}
            aria-label=${(0,if_defined.o)(this.accessibleName)}
            aria-description=${(0,if_defined.o)(this.accessibleDescription)}
            @click=${this.handleClick}
            @input=${this.handleInput}
            @blur=${this.handleBlur}
            @focus=${this.handleFocus}
            @keydown=${this.handleKeyDown}
          />

          <span
            part="control${this.checked?" control--checked":""}${this.indeterminate?" control--indeterminate":""}"
            class="checkbox__control"
          >
            ${this.checked?lit.dy`
                  <koerber-icon
                    part="checked-icon"
                    class="checkbox__checked-icon"
                    library="system"
                    name="check"
                    size="medium"
                  ></koerber-icon>
                `:""}
            ${!this.checked&&this.indeterminate?lit.dy`
                  <koerber-icon
                    part="indeterminate-icon"
                    class="checkbox__indeterminate-icon"
                    library="system"
                    name="minus"
                    size="medium"
                  ></koerber-icon>
                `:""}
          </span>

          <div part="label" class="checkbox__label">
            <slot>
              <koerber-form-field-label label="${this.label}"></koerber-form-field-label>
            </slot>
          </div>
        </label>
      </div>
    `}}Checkbox.styles=[component_styles.Z,checkbox_styles],Checkbox.dependencies={"koerber-icon":icon_component.Z};const checkbox_component=Checkbox;__decorate([(0,decorators.IO)('input[type="checkbox"]')],Checkbox.prototype,"input",void 0),__decorate([(0,decorators.SB)()],Checkbox.prototype,"hasFocus",void 0),__decorate([(0,decorators.Cb)()],Checkbox.prototype,"title",void 0),__decorate([(0,decorators.Cb)()],Checkbox.prototype,"name",void 0),__decorate([(0,decorators.Cb)()],Checkbox.prototype,"value",void 0),__decorate([(0,decorators.Cb)()],Checkbox.prototype,"label",void 0),__decorate([(0,decorators.Cb)({reflect:!0})],Checkbox.prototype,"size",void 0),__decorate([(0,decorators.Cb)({type:Boolean,reflect:!0})],Checkbox.prototype,"disabled",void 0),__decorate([(0,decorators.Cb)({type:Boolean,reflect:!0})],Checkbox.prototype,"checked",void 0),__decorate([(0,decorators.Cb)({type:Boolean,reflect:!0})],Checkbox.prototype,"indeterminate",void 0),__decorate([(0,default_value.L)("checked")],Checkbox.prototype,"defaultChecked",void 0),__decorate([(0,decorators.Cb)({type:Boolean,reflect:!0})],Checkbox.prototype,"required",void 0),__decorate([(0,decorators.Cb)({type:Boolean})],Checkbox.prototype,"error",void 0),__decorate([(0,decorators.Cb)({attribute:"accessible-name",reflect:!0})],Checkbox.prototype,"accessibleName",void 0),__decorate([(0,decorators.Cb)({attribute:"accessible-description",reflect:!0})],Checkbox.prototype,"accessibleDescription",void 0),__decorate([(0,watch.Y)(["checked","indeterminate"],{waitUntilFirstUpdate:!0})],Checkbox.prototype,"handleStateChange",null)},"./src/components/checkbox/checkbox.ts":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{__webpack_require__("./src/components/checkbox/checkbox.component.ts").Z.define("koerber-checkbox")},"./src/components/divider/divider.ts":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{__webpack_require__("./src/components/divider/divider.component.ts").Z.define("koerber-divider")},"./src/components/icon-button/icon-button.ts":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{__webpack_require__("./src/components/icon-button/icon-button.component.ts").Z.define("koerber-icon-button")},"./src/components/menu-item/menu-item.ts":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{var class_map=__webpack_require__("./node_modules/lit/directives/class-map.js"),slot=__webpack_require__("./src/internal/slot.ts"),lit=__webpack_require__("./node_modules/lit/index.js"),localize=__webpack_require__("./src/utilities/localize.ts"),decorators=__webpack_require__("./node_modules/lit/decorators.js"),ref=__webpack_require__("./node_modules/lit/directives/ref.js");class SubmenuController{constructor(host,hasSlotController,localize){this.popupRef=(0,ref.V)(),this.enableSubmenuTimer=-1,this.isConnected=!1,this.isPopupConnected=!1,this.skidding=0,this.submenuOpenDelay=100,this.handleMouseMove=event=>{this.host.style.setProperty("--safe-triangle-cursor-x",`${event.clientX}px`),this.host.style.setProperty("--safe-triangle-cursor-y",`${event.clientY}px`)},this.handleMouseOver=()=>{this.hasSlotController.test("submenu")&&this.enableSubmenu()},this.handleKeyDown=event=>{switch(event.key){case"Escape":case"Tab":this.disableSubmenu();break;case"ArrowLeft":event.target!==this.host&&(event.preventDefault(),event.stopPropagation(),this.host.focus(),this.disableSubmenu());break;case"ArrowRight":case"Enter":case" ":this.handleSubmenuEntry(event)}},this.handleClick=event=>{var _a;event.target===this.host||event.target instanceof Element&&("KOERBER-MENU-ITEM"===event.target.tagName||(null===(_a=event.target.role)||void 0===_a?void 0:_a.startsWith("menuitem")))&&(this.disableSubmenu(),event.preventDefault(),event.stopPropagation())},this.handleFocusOut=event=>{event.relatedTarget&&event.relatedTarget instanceof Element&&this.host.contains(event.relatedTarget)||this.disableSubmenu()},this.handlePopupMouseover=event=>{event.stopPropagation()},this.handlePopupReposition=()=>{const submenuSlot=this.host.renderRoot.querySelector("slot[name='submenu']"),menu=null==submenuSlot?void 0:submenuSlot.assignedElements({flatten:!0}).filter((el=>"koerber-menu"===el.localName))[0],isRtl="rtl"===this.localize.dir();if(!menu)return;const{left,top,width,height}=menu.getBoundingClientRect();this.host.style.setProperty("--safe-triangle-submenu-start-x",`${isRtl?left+width:left}px`),this.host.style.setProperty("--safe-triangle-submenu-start-y",`${top}px`),this.host.style.setProperty("--safe-triangle-submenu-end-x",`${isRtl?left+width:left}px`),this.host.style.setProperty("--safe-triangle-submenu-end-y",`${top+height}px`)},(this.host=host).addController(this),this.hasSlotController=hasSlotController,this.localize=localize}hostConnected(){this.hasSlotController.test("submenu")&&!this.host.disabled&&this.addListeners()}hostDisconnected(){this.removeListeners()}hostUpdated(){this.hasSlotController.test("submenu")&&!this.host.disabled?(this.addListeners(),this.updateSkidding()):this.removeListeners()}addListeners(){this.isConnected||(this.host.addEventListener("mousemove",this.handleMouseMove),this.host.addEventListener("mouseover",this.handleMouseOver),this.host.addEventListener("keydown",this.handleKeyDown),this.host.addEventListener("click",this.handleClick),this.host.addEventListener("focusout",this.handleFocusOut),this.isConnected=!0),this.isPopupConnected||this.popupRef.value&&(this.popupRef.value.addEventListener("mouseover",this.handlePopupMouseover),this.popupRef.value.addEventListener("koerber-reposition",this.handlePopupReposition),this.isPopupConnected=!0)}removeListeners(){this.isConnected&&(this.host.removeEventListener("mousemove",this.handleMouseMove),this.host.removeEventListener("mouseover",this.handleMouseOver),this.host.removeEventListener("keydown",this.handleKeyDown),this.host.removeEventListener("click",this.handleClick),this.host.removeEventListener("focusout",this.handleFocusOut),this.isConnected=!1),this.isPopupConnected&&this.popupRef.value&&(this.popupRef.value.removeEventListener("mouseover",this.handlePopupMouseover),this.popupRef.value.removeEventListener("koerber-reposition",this.handlePopupReposition),this.isPopupConnected=!1)}handleSubmenuEntry(event){const submenuSlot=this.host.renderRoot.querySelector("slot[name='submenu']");if(!submenuSlot)return void console.error("Cannot activate a submenu if no corresponding menuitem can be found.",this);let menuItems=null;for(const elt of submenuSlot.assignedElements())if(menuItems=elt.querySelectorAll("koerber-menu-item, [role^='menuitem']"),0!==menuItems.length)break;if(menuItems&&0!==menuItems.length){menuItems[0].setAttribute("tabindex","0");for(let i=1;i!==menuItems.length;++i)menuItems[i].setAttribute("tabindex","-1");this.popupRef.value&&(event.preventDefault(),event.stopPropagation(),this.popupRef.value.active?menuItems[0]instanceof HTMLElement&&menuItems[0].focus():(this.enableSubmenu(!1),this.host.updateComplete.then((()=>{(null==menuItems?void 0:menuItems[0])instanceof HTMLElement&&menuItems[0].focus()})),this.host.requestUpdate()))}}setSubmenuState(state){this.popupRef.value&&this.popupRef.value.active!==state&&(this.popupRef.value.active=state,this.host.requestUpdate())}enableSubmenu(delay=!0){delay?(window.clearTimeout(this.enableSubmenuTimer),this.enableSubmenuTimer=window.setTimeout((()=>{this.setSubmenuState(!0)}),this.submenuOpenDelay)):this.setSubmenuState(!0)}disableSubmenu(){window.clearTimeout(this.enableSubmenuTimer),this.setSubmenuState(!1)}updateSkidding(){var _a;if(!(null===(_a=this.host.parentElement)||void 0===_a?void 0:_a.computedStyleMap))return;const styleMap=this.host.parentElement.computedStyleMap(),skidding=["padding-top","border-top-width","margin-top"].reduce(((accumulator,attr)=>{var _a;const styleValue=null!==(_a=styleMap.get(attr))&&void 0!==_a?_a:new CSSUnitValue(0,"px");return accumulator-(styleValue instanceof CSSUnitValue?styleValue:new CSSUnitValue(0,"px")).to("px").value}),0);this.skidding=skidding}isExpanded(){return!!this.popupRef.value&&this.popupRef.value.active}renderSubmenu(){const isLtr="ltr"===this.localize.dir();return this.isConnected?lit.dy`
      <koerber-popup
        ${(0,ref.i)(this.popupRef)}
        placement=${isLtr?"right-start":"left-start"}
        anchor="anchor"
        distance="4"
        flip
        flip-fallback-strategy="best-fit"
        skidding="${this.skidding}"
        strategy="fixed"
      >
        <slot name="submenu"></slot>
      </koerber-popup>
    `:lit.dy` <slot name="submenu" hidden></slot> `}}var watch=__webpack_require__("./src/internal/watch.ts"),component_styles=__webpack_require__("./src/styles/component.styles.ts"),icon=__webpack_require__("./src/components/icon/icon.ts"),popup=__webpack_require__("./src/components/popup/popup.ts");const menu_item_styles=lit.iv`
  :host {
    display: block;
    --koerber-spacing-xxs: 10px;
  }

  :host([inert]) {
    display: none;
  }

  .menu-item {
    position: relative;
    display: flex;
    align-items: stretch;
    background-color: var(--koerber-color-bg-fill-secondary);
    gap: var(--koerber-spacing-xs);
    font-family: var(--koerber-font-family-default);
    font-size: var(--koerber-text-base-font-size);
    font-weight: var(--koerber-font-weight-regular);
    line-height: var(--koerber-text-base-line-height);
    letter-spacing: var(--koerber-letter-spacing-normal);
    color: var(--koerber-color-text-secondary);
    padding: var(--koerber-spacing-xxs) var(--koerber-spacing-xs) var(--koerber-spacing-xxs) var(--koerber-spacing-s);
    transition: var(--koerber-transition-fast) fill;
    user-select: none;
    cursor: pointer;
  }

  /* Disabled */

  .menu-item.menu-item--disabled {
    outline: none;
    color: var(--koerber-color-text-disabled);
    background-color: var(--koerber-color-bg-fill-disabled);
    cursor: not-allowed;
  }

  .menu-item.menu-item--disabled .menu-item__prefix,
  .menu-item.menu-item--disabled .menu-item__suffix,
  .menu-item.menu-item--disabled .menu-item__chevron {
    color: var(--koerber-color-text-disabled);
  }

  .menu-item .menu-item__label {
    flex: 1 1 auto;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-box-pack: center;
    -webkit-line-clamp: 1;
    overflow: hidden;
  }

  .menu-item .menu-item__suffix,
  .menu-item .menu-item__prefix,
  .menu-item .menu-item__chevron {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    color: var(--koerber-color-text-tertiary);
  }

  :host(:focus-visible) {
    outline: none;
  }

  /* Hover */
  :host(:not([aria-disabled='true']):hover:focus) .menu-item {
    outline: none;
    background-color: var(--koerber-color-bg-fill-secondary-hover);
    color: var(--koerber-color-text-link);
    border: none;
  }

  :host(:not([aria-disabled='true']):hover:focus) .menu-item .menu-item__prefix,
  :host(:not([aria-disabled='true']):hover:focus) .menu-item .menu-item__chevron {
    color: var(--koerber-color-text-link);
  }

  :host(:hover:not([aria-disabled='true'], :focus-visible)) .menu-item,
  .menu-item--submenu-expanded {
    outline: none;
    background-color: var(--koerber-color-bg-fill-secondary-hover);
    color: var(--koerber-color-text-secondary);
  }

  /* Focus */
  :host(:focus-visible:not([aria-disabled='true'])) .menu-item {
    outline: none;
    background-color: var(--koerber-color-bg-fill-secondary-hover);
    color: var(--koerber-color-text-link);
  }

  :host(:focus-visible:not([aria-disabled='true'])) .menu-item .menu-item__prefix,
  :host(:focus-visible:not([aria-disabled='true'])) .menu-item .menu-item__chevron {
    color: var(--koerber-color-text-link);
  }

  /* Selected */

  :host(:focus-visible) .menu-item.menu-item--selected {
    color: var(--koerber-color-text-link);
    background-color: var(--koerber-color-bg-fill-secondary);
  }

  .menu-item .menu-item__chevron {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.5em;
    visibility: hidden;
  }

  .menu-item--has-submenu .menu-item__chevron {
    visibility: visible;
  }

  .menu-item.menu-item--selected {
    color: var(--koerber-color-text-link);
    background-color: var(--koerber-color-bg-fill-secondary);
  }

  .menu-item.menu-item--selected .menu-item__prefix,
  .menu-item.menu-item--selected .menu-item__chevron {
    color: var(--koerber-color-text-link);
  }

  .menu-item--small {
    height: var(--koerber-height-size-compact); /* 32px */
    --koerber-spacing-xxs: 6px;
  }

  .menu-item--medium {
    height: var(--koerber-height-size-standard); /* 40px */
  }

  .menu-item--large {
    height: var(--koerber-height-size-comfortable); /* 48px */
    font-size: var(--koerber-text-md-font-size);
    line-height: var(--koerber-text-lg-line-height);
    --koerber-spacing-xxs: 12px;
  }

  @media (forced-colors: active) {
    :host(:hover:not([aria-disabled='true'])) .menu-item,
    :host(:focus-visible) .menu-item {
      outline: dashed 1px SelectedItem;
      outline-offset: -1px;
    }
  }
`;var tooltip=__webpack_require__("./src/components/tooltip/tooltip.ts"),uikit_element=__webpack_require__("./src/internal/uikit-element.ts"),__decorate=function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r};class menu_item_component_MenuItem extends uikit_element.Z{constructor(){super(...arguments),this.tooltipContent="",this.isLabelOverflowing=!1,this.type="checkbox",this.selected=!1,this.value="",this.disabled=!1,this.size="medium",this.localize=new localize.V(this),this.hasSlotController=new slot.rc(this,"submenu","prefix","suffix"),this.submenuController=new SubmenuController(this,this.hasSlotController,this.localize),this.handleHostClick=event=>{this.disabled&&(event.preventDefault(),event.stopImmediatePropagation())},this.handleMouseOver=event=>{this.focus(),event.stopPropagation()}}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this.handleHostClick),this.addEventListener("mouseover",this.handleMouseOver),this.setAttribute("role","menuitemcheckbox"),this.setAttribute("aria-checked",this.selected?"true":"false")}firstUpdated(){this.checkTextOverflow()}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this.handleHostClick),this.removeEventListener("mouseover",this.handleMouseOver)}checkTextOverflow(){this.labelContentSlot.scrollHeight>this.labelContentSlot.clientHeight?(this.isLabelOverflowing=!0,this.tooltipContent=this.getTextLabel()):(this.isLabelOverflowing=!1,this.tooltipContent="")}handleDefaultSlotChange(){const textLabel=this.getTextLabel();void 0!==this.cachedTextLabel?textLabel!==this.cachedTextLabel&&(this.cachedTextLabel=textLabel,this.emit("slotchange",{bubbles:!0,composed:!1,cancelable:!1})):this.cachedTextLabel=textLabel}handleCheckedChange(){this.setAttribute("aria-checked",this.selected?"true":"false")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}getTextLabel(){return(0,slot.FB)(this.defaultSlot)}isSubmenu(){return this.hasSlotController.test("submenu")}render(){var _a;const isRtl="rtl"===this.localize.dir(),isSubmenuExpanded=this.submenuController.isExpanded();return lit.dy`
      <div
        id="anchor"
        part="base"
        class=${(0,class_map.$)({"menu-item":!0,"menu-item--rtl":isRtl,"menu-item--selected":this.selected,"menu-item--disabled":this.disabled,"menu-item--has-submenu":this.isSubmenu(),"menu-item--submenu-expanded":isSubmenuExpanded,[`menu-item--${this.size}`]:!0})}
        ?aria-haspopup="${this.isSubmenu()}"
        ?aria-expanded="${!!isSubmenuExpanded}"
      >
        ${this.hasSlotController.test("prefix")?lit.dy`<slot name="prefix" part="prefix" class="menu-item__prefix"></slot>`:""}
        ${this.isLabelOverflowing?lit.dy`<koerber-tooltip
              class="menu-item__tooltip"
              placement="top"
              hoist
              content="${null!==(_a=this.tooltipContent)&&void 0!==_a?_a:""}"
            >
              <div><slot part="label" class="menu-item__label" @slotchange=${this.handleDefaultSlotChange}></slot></div>
            </koerber-tooltip>`:lit.dy`<slot part="label" class="menu-item__label" @slotchange=${this.handleDefaultSlotChange}></slot>`}
        ${this.hasSlotController.test("suffix")?lit.dy`<slot name="suffix" part="suffix" class="menu-item__suffix"></slot>`:""}
        ${this.isSubmenu()?lit.dy`<span part="submenu-icon" class="menu-item__chevron">
              <koerber-icon name=${isRtl?"chevron-left":"chevron-right"} aria-hidden="true"></koerber-icon>
            </span>`:""}
        ${this.submenuController.renderSubmenu()}
      </div>
    `}}menu_item_component_MenuItem.styles=[component_styles.Z,menu_item_styles],menu_item_component_MenuItem.dependencies={"koerber-icon":icon.Z,"koerber-popup":popup.Z,"koerber-tooltip":tooltip.Z};const menu_item_component=menu_item_component_MenuItem;__decorate([(0,decorators.SB)()],menu_item_component_MenuItem.prototype,"isLabelOverflowing",void 0),__decorate([(0,decorators.IO)("slot:not([name])")],menu_item_component_MenuItem.prototype,"defaultSlot",void 0),__decorate([(0,decorators.IO)(".menu-item")],menu_item_component_MenuItem.prototype,"menuItem",void 0),__decorate([(0,decorators.IO)(".menu-item__label")],menu_item_component_MenuItem.prototype,"labelContentSlot",void 0),__decorate([(0,decorators.Cb)()],menu_item_component_MenuItem.prototype,"type",void 0),__decorate([(0,decorators.Cb)({type:Boolean,reflect:!0})],menu_item_component_MenuItem.prototype,"selected",void 0),__decorate([(0,decorators.Cb)()],menu_item_component_MenuItem.prototype,"value",void 0),__decorate([(0,decorators.Cb)({type:Boolean,reflect:!0})],menu_item_component_MenuItem.prototype,"disabled",void 0),__decorate([(0,decorators.Cb)({reflect:!0})],menu_item_component_MenuItem.prototype,"size",void 0),__decorate([(0,watch.Y)("selected")],menu_item_component_MenuItem.prototype,"handleCheckedChange",null),__decorate([(0,watch.Y)("disabled")],menu_item_component_MenuItem.prototype,"handleDisabledChange",null);menu_item_component.define("koerber-menu-item")},"./src/components/menu/menu.ts":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{var lit=__webpack_require__("./node_modules/lit/index.js"),decorators=__webpack_require__("./node_modules/lit/decorators.js"),component_styles=__webpack_require__("./src/styles/component.styles.ts");const menu_styles=lit.iv`
  :host {
    display: block;
    position: relative;
    background: var(--koerber-panel-background-color);
    border: solid var(--koerber-shape-border-divider) var(--koerber-color-border);
    border-radius: var(--koerber-border-radius-small);
    padding: var(--koerber-spacing-xs) 0 0 0;
    overflow: auto;
    overscroll-behavior: none;
    max-width: 290px;
    min-width: 180px;
    width: min-content;
  }

  ::slotted(koerber-divider) {
    --spacing: var(--koerber-spacing-xs);
  }
`;var uikit_element=__webpack_require__("./src/internal/uikit-element.ts"),__decorate=function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r};class menu_component_Menu extends uikit_element.Z{connectedCallback(){super.connectedCallback(),this.setAttribute("role","menu")}handleClick(event){const target=event.target,menuItem=target.closest("koerber-menu-item");if(!target)return;const item=menuItem;this.emit("koerber-select",{detail:{item}})}handleKeyDown(event){if("Enter"===event.key||" "===event.key){const item=this.getCurrentItem();event.preventDefault(),event.stopPropagation(),null==item||item.click()}else if(["ArrowDown","ArrowUp","Home","End"].includes(event.key)){const items=this.getAllItems(),activeItem=this.getCurrentItem();let index=activeItem?items.indexOf(activeItem):0;items.length>0&&(event.preventDefault(),event.stopPropagation(),"ArrowDown"===event.key?index++:"ArrowUp"===event.key?index--:"Home"===event.key?index=0:"End"===event.key&&(index=items.length-1),index<0&&(index=items.length-1),index>items.length-1&&(index=0),this.setCurrentItem(items[index]),items[index].focus())}}handleMouseDown(event){const target=event.target;this.isMenuItem(target)&&this.setCurrentItem(target)}handleSlotChange(){const items=this.getAllItems();items.length>0&&this.setCurrentItem(items[0])}isMenuItem(item){var _a;return"koerber-menu-item"===item.tagName.toLowerCase()||["menuitem","menuitemradio"].includes(null!==(_a=item.getAttribute("role"))&&void 0!==_a?_a:"")}getAllItems(){return[...this.defaultSlot.assignedElements({flatten:!0})].filter((el=>!(el.inert||!this.isMenuItem(el))))}getCurrentItem(){return this.getAllItems().find((i=>"0"===i.getAttribute("tabindex")))}setCurrentItem(item){this.getAllItems().forEach((i=>{i.setAttribute("tabindex",i===item?"0":"-1")}))}render(){return lit.dy`
      <slot
        @slotchange=${this.handleSlotChange}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      ></slot>
    `}}menu_component_Menu.styles=[component_styles.Z,menu_styles];const menu_component=menu_component_Menu;__decorate([(0,decorators.IO)("slot")],menu_component_Menu.prototype,"defaultSlot",void 0);menu_component.define("koerber-menu")},"./src/components/popup/popup.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _popup_component__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/popup/popup.component.ts");const __WEBPACK_DEFAULT_EXPORT__=_popup_component__WEBPACK_IMPORTED_MODULE_0__.Z;_popup_component__WEBPACK_IMPORTED_MODULE_0__.Z.define("koerber-popup")},"./src/components/select-option/select-option.ts":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{var class_map=__webpack_require__("./node_modules/lit/directives/class-map.js"),lit=__webpack_require__("./node_modules/lit/index.js"),localize=__webpack_require__("./src/utilities/localize.ts"),decorators=__webpack_require__("./node_modules/lit/decorators.js"),watch=__webpack_require__("./src/internal/watch.ts"),checkbox_component=__webpack_require__("./src/components/checkbox/checkbox.component.ts"),component_styles=__webpack_require__("./src/styles/component.styles.ts"),icon_component=__webpack_require__("./src/components/icon/icon.component.ts");const select_option_styles=lit.iv`
  :host {
    display: block;
    user-select: none;
  }

  :host(:focus) {
    outline: none;
  }

  .select-option {
    position: relative;
    display: flex;
    align-items: center;
    color: var(--koerber-color-text-secondary);
    padding: var(--koerber-spacing-xs) var(--koerber-spacing-s) var(--koerber-spacing-xs) var(--koerber-spacing-xs);
    transition: var(--koerber-transition-fast) fill;
    cursor: pointer;
    letter-spacing: var(--koerber-letter-spacing-normal);
  }

  .select-option--small {
    height: var(--koerber-height-size-compact);
    font-size: var(--koerber-text-base-font-size);
    line-height: var(--koerber-text-3xl-line-height);
  }

  .select-option--medium {
    height: var(--koerber-height-size-standard);
    font-size: var(--koerber-text-md-font-size);
    line-height: var(--koerber-text-3xl-line-height);
  }

  .select-option--large {
    height: var(--koerber-height-size-comfortable);
    font-size: var(--koerber-text-xl-font-size);
    line-height: var(--koerber-text-3xl-line-height);
  }

  .select-option-label--small {
    font-size: var(--koerber-text-base-font-size);
  }

  .select-option-label--medium {
    font-size: var(--koerber-text-md-font-size);
  }

  .select-option-label--large {
    font-size: var(--koerber-text-xl-font-size);
  }

  koerber-icon::part(base) {
    width: 100px;
  }

  .select-option--hover:not(.select-option--selected):not(.select-option--disabled) {
    background-color: var(--koerber-color-bg-surface-secondary-hover);
    color: var(--koerber-color-text-link);
  }

  .select-option--current:not(.select-option--selected):not(.select-option--disabled) {
    background-color: var(--koerber-color-bg-surface-secondary-hover);
    color: var(--koerber-color-text-link);
  }

  .select-option--selected:not(.select-option--disabled) {
    background-color: var(--koerber-color-bg-surface-secondary-hover);
    color: var(--koerber-color-text-link);
  }

  .select-option--selected,
  .select-option--selected.select-option--disabled {
    color: var(--koerber-color-text-link);
    opacity: 1;
  }

  .select-option--disabled {
    outline: none;
    opacity: 0.5;
    cursor: not-allowed;
  }

  .select-option__label {
    flex: 1 1 auto;
    display: inline-block;
  }

  .select-option__checkbox {
    padding: 4px 12px 4px 4px;
  }

  .select-option .select-option__check {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    visibility: hidden;
    padding-inline-end: var(--koerber-spacing-2xs);
  }

  .select-option--selected .select-option__check {
    visibility: visible;
  }

  .select-option__prefix,
  .select-option__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .select-option__prefix::slotted(*) {
    margin-inline-end: var(--koerber-spacing-xs);
  }

  .select-option__suffix::slotted(*) {
    margin-inline-start: var(--koerber-spacing-xs);
  }

  @media (forced-colors: active) {
    :host(:hover:not([aria-disabled='true'])) .select-option {
      outline: dashed 1px SelectedItem;
      outline-offset: -1px;
    }
  }
`;var uikit_element=__webpack_require__("./src/internal/uikit-element.ts"),__decorate=function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r};class select_option_component_SelectOption extends uikit_element.Z{constructor(){super(...arguments),this.localize=new localize.V(this),this.current=!1,this.selected=!1,this.hasHover=!1,this.value="",this.disabled=!1,this.checkbox=!1,this.size="medium"}connectedCallback(){super.connectedCallback(),this.setAttribute("role","option"),this.setAttribute("aria-selected","false")}handleDefaultSlotChange(){const textLabel=this.getTextLabel();void 0!==this.cachedTextLabel?textLabel!==this.cachedTextLabel&&(this.cachedTextLabel=textLabel,this.emit("slotchange",{bubbles:!0,composed:!1,cancelable:!1})):this.cachedTextLabel=textLabel}handleMouseEnter(){this.hasHover=!0,this.current=!0}handleMouseLeave(){this.hasHover=!1,this.current=!1}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleSelectedChange(){this.setAttribute("aria-selected",this.selected?"true":"false")}handleValueChange(){"string"!=typeof this.value&&(this.value=String(this.value)),this.value.includes(" ")&&(console.error("Option values cannot include a space. All spaces have been replaced with underscores.",this),this.value=this.value.replace(/ /g,"_"))}handleCheckboxClick(event){this.selected=!this.selected,this.emit("koerber-change"),event.preventDefault()}getTextLabel(){var _a;return(null!==(_a=this.textContent)&&void 0!==_a?_a:"").trim()}render(){return lit.dy`
      <div
        part="base"
        class=${(0,class_map.$)({"select-option":!0,"select-option--current":this.current,"select-option--disabled":this.disabled,"select-option--selected":this.selected,"select-option--hover":this.hasHover,"select-option--small":"small"===this.size,"select-option--medium":"medium"===this.size,"select-option--large":"large"===this.size})}
        @mouseenter=${this.handleMouseEnter}
        @mouseleave=${this.handleMouseLeave}
      >
        ${this.checkbox?lit.dy` <koerber-checkbox
              class=${(0,class_map.$)({"select-option__checkbox":!0,"checkbox--small":"small"===this.size,"checkbox--medium":"medium"===this.size,"checkbox--large":"large"===this.size})}
              @click=${this.handleCheckboxClick}
              ?checked=${this.selected}
            >
            </koerber-checkbox>`:""}
        <slot part="prefix" name="prefix" class="select-option__prefix"></slot>
        <slot
          part="label"
          class=${(0,class_map.$)({"select-option__label":!0,"select-option-label--small":"small"===this.size,"select-option-label--medium":"medium"===this.size,"select-option-label--large":"large"===this.size})}
          @slotchange=${this.handleDefaultSlotChange}
        >
        </slot>
        <slot part="suffix" name="suffix" class="select-option__suffix"></slot>
        ${this.checkbox?"":lit.dy` <koerber-icon
              part="checked-icon"
              class=${(0,class_map.$)({"select-option__check":!0,"icon--small":"small"===this.size,"icon--medium":"medium"===this.size,"icon--large":"large"===this.size})}
              name="check"
              size=${this.size}
              library="system"
              aria-hidden="true"
            >
            </koerber-icon>`}
      </div>
    `}}select_option_component_SelectOption.styles=[component_styles.Z,select_option_styles],select_option_component_SelectOption.dependencies={"koerber-icon":icon_component.Z,"koerber-checkbox":checkbox_component.Z};const select_option_component=select_option_component_SelectOption;__decorate([(0,decorators.IO)(".select-option__label")],select_option_component_SelectOption.prototype,"defaultSlot",void 0),__decorate([(0,decorators.SB)()],select_option_component_SelectOption.prototype,"current",void 0),__decorate([(0,decorators.SB)()],select_option_component_SelectOption.prototype,"selected",void 0),__decorate([(0,decorators.SB)()],select_option_component_SelectOption.prototype,"hasHover",void 0),__decorate([(0,decorators.Cb)({reflect:!0})],select_option_component_SelectOption.prototype,"value",void 0),__decorate([(0,decorators.Cb)({type:Boolean,reflect:!0})],select_option_component_SelectOption.prototype,"disabled",void 0),__decorate([(0,decorators.Cb)({type:Boolean,reflect:!0})],select_option_component_SelectOption.prototype,"checkbox",void 0),__decorate([(0,decorators.Cb)({reflect:!0})],select_option_component_SelectOption.prototype,"size",void 0),__decorate([(0,watch.Y)("disabled")],select_option_component_SelectOption.prototype,"handleDisabledChange",null),__decorate([(0,watch.Y)("selected")],select_option_component_SelectOption.prototype,"handleSelectedChange",null),__decorate([(0,watch.Y)("value")],select_option_component_SelectOption.prototype,"handleValueChange",null);select_option_component.define("koerber-select-option")},"./src/components/select/select.ts":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{var animate=__webpack_require__("./src/internal/animate.ts"),class_map=__webpack_require__("./node_modules/lit/directives/class-map.js"),default_value=__webpack_require__("./src/internal/default-value.ts"),animation_registry=__webpack_require__("./src/utilities/animation-registry.ts"),lit=__webpack_require__("./node_modules/lit/index.js"),if_defined=__webpack_require__("./node_modules/lit/directives/if-defined.js"),localize=__webpack_require__("./src/utilities/localize.ts"),decorators=__webpack_require__("./node_modules/lit/decorators.js"),internal_scroll=__webpack_require__("./src/internal/scroll.ts"),internal_event=__webpack_require__("./src/internal/event.ts"),watch=__webpack_require__("./src/internal/watch.ts"),component_styles=__webpack_require__("./src/styles/component.styles.ts"),form_control_styles=__webpack_require__("./src/styles/form-control.styles.ts"),icon_component=__webpack_require__("./src/components/icon/icon.component.ts"),popup_component=__webpack_require__("./src/components/popup/popup.component.ts"),spinner_component=__webpack_require__("./src/components/spinner/spinner.component.ts");const select_styles=lit.iv`
  :host {
    display: block;
    --koerber-select-popup-max-height: 15rem;
    --koerber-z-index-dropdown: 900;
  }

  /** The popup */
  .select {
    flex: 1 1 auto;
    display: inline-flex;
    width: 100%;
    position: relative;
    vertical-align: middle;
    border: solid var(--koerber-border-width-s) var(--koerber-color-border);
    border-radius: var(--koerber-border-radius-small);
  }

  .select::part(popup) {
    z-index: var(--koerber-z-index-dropdown);
    --max-height: var(--koerber-select-popup-max-height, 0);
  }

  .select[data-current-placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .select[data-current-placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  /* Combobox */
  .select__combobox {
    background-color: transparent;
    flex: 1;
    display: flex;
    width: 100%;
    min-width: 0;
    position: relative;
    align-items: center;
    justify-content: start;
    letter-spacing: var(--koerber-letter-spacing-normal);
    vertical-align: middle;
    overflow: hidden;
    transition:
      var(--koerber-transition-fast) color,
      var(--koerber-transition-fast) border,
      var(--koerber-transition-fast) box-shadow,
      var(--koerber-transition-fast) background-color;
  }

  .select__display-input {
    position: relative;
    width: 100%;
    border: none;
    background: none;
    color: var(--koerber-input-color);
    overflow: hidden;
    padding: 0;
    margin: 0;
    -webkit-appearance: none;
  }

  .select__display-input.select--small {
    font-size: var(--koerber-text-base-font-size);
    line-height: var(--koerber-text-xl-line-height);
  }

  .select__display-input.select--medium {
    font-size: var(--koerber-text-md-font-size);
    line-height: var(--koerber-text-xl-line-height);
  }

  .select__display-input.select--large {
    font-size: var(--koerber-text-xl-font-size);
    line-height: var(--koerber-text-xl-line-height);
  }

  .select__value-input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    opacity: 0;
    z-index: -1;
  }

  .select:not(.select--disabled):hover .select__display-input {
    color: var(--koerber-input-color-hover);
  }

  .select__display-input:focus {
    outline: none;
  }

  /* Visually hide the display input when multiple is enabled */
  .select--multiple:not(.select--placeholder-visible) .select__display-input {
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
  }

  .select__tags {
    display: flex;
    flex: 1;
    align-items: center;
    flex-wrap: wrap;
    margin-inline-start: var(--koerber-spacing-2xs);
  }

  .select__tags::slotted(koerber-tag) {
  }

  .select--disabled .select__tags,
  .select--disabled .select__tags::slotted(koerber-tag) {
    cursor: not-allowed !important;
    user-select: none;
  }

  /* Standard selects */
  .select--standard .select__combobox {
  }

  .select--standard.select--small:hover:not(.select--disabled) {
    border-color: var(--koerber-color-border-hover);
  }

  .select--standard.select--medium:hover:not(.select--disabled) {
    border-color: var(--koerber-color-border-hover);
  }

  .select--standard.select--large:hover:not(.select--disabled) {
    border-color: var(--koerber-color-border-hover);
  }

  .select--standard.select--small:hover.select--loading {
    border-color: var(--koerber-color-border-disabled);
  }

  .select--standard.select--medium:hover.select--loading {
    border-color: var(--koerber-color-border-disabled);
  }

  .select--standard.select--large:hover.select--loading {
    border-color: var(--koerber-color-border-disabled);
  }

  .select--standard.select--disabled .select__combobox {
    color: var(--koerber-input-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
    outline: none;
    border-color: var(--koerber-color-border-disabled);
    background-color: var(--koerber-color-bg-fill-disabled);
  }

  .select--standard:not(.select--disabled).select--open .select__combobox,
  .select--standard:not(.select--disabled).select--focused .select__combobox {
    border-radius: var(--koerber-border-radius-small);
    box-shadow: 0 0 0 var(--koerber-border-width-m) var(--koerber-color-border-focus);
    border-color: var(--koerber-color-border-focus);
  }

  /* Sizes */
  .select--small .select__combobox {
    min-height: var(--koerber-height-size-compact);
    height: var(--koerber-height-size-compact);
    font-size: var(--koerber-text-base-font-size);
    padding-block: 0;
    padding-inline: var(--koerber-spacing-xs);
    border-color: var(--koerber-color-border);
  }

  .select--small .select__clear {
    margin-inline-start: var(--koerber-spacing-xs);
  }

  .select--small .select__prefix::slotted(*) {
    margin-inline-end: var(--koerber-spacing-xs);
  }

  .select--small.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-block: 2px;
    padding-inline-start: 0;
  }

  .select--small .select__tags {
    gap: 2px;
  }

  .select--medium .select__combobox {
    min-height: var(--koerber-height-size-standard);
    height: var(--koerber-height-size-standard);
    font-size: var(--koerber-text-md-font-size);
    padding-block: 0;
    padding-inline: var(--koerber-spacing-xs);
    border-color: var(--koerber-color-border);
  }

  .select--medium .select__clear {
    margin-inline-start: var(--koerber-spacing-xs);
  }

  .select--medium .select__prefix::slotted(*) {
    margin-inline-end: var(--koerber-spacing-xs);
  }

  .select--medium.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-inline-start: 0;
    padding-block: 3px;
  }

  .select--medium .select__tags {
    gap: 3px;
  }

  .select--large .select__combobox {
    min-height: var(--koerber-height-size-comfortable);
    height: var(--koerber-height-size-comfortable);
    font-size: var(--koerber-text-xl-font-size);
    padding-block: 0;
    padding-inline: var(--koerber-spacing-xs);
    border-color: var(--koerber-color-border);
  }

  .select--large .select__clear {
    margin-inline-start: var(--koerber-spacing-s);
  }

  .select--large .select__prefix::slotted(*) {
    margin-inline-end: var(--koerber-spacing-s);
  }

  .select--large.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-inline-start: 0;
    padding-block: 4px;
  }

  .select--large .select__tags {
    gap: 4px;
  }

  .select--placeholder-visible:not(.select--disabled) {
    color: var(--koerber-color-text-tertiary);
  }

  .select--placeholder-visible:hover:not(.select--disabled) {
    color: var(--koerber-color-text);
  }

  /* Prefix */
  .select__prefix {
    flex: 0;
    display: inline-flex;
    align-items: center;
    color: var(--koerber-color-text-tertiary);
  }

  /* Clear button */
  .select__clear {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: var(--koerber-color-icon-secondary);
    border: none;
    background: none;
    padding: 0;
    transition: var(--koerber-transition-fast) color;
  }

  .select__clear:hover {
    color: var(--koerber-color-icon-secondary);
  }

  .select__loading:hover {
    color: var(--koerber-color-border-active);
  }

  .select__clear:focus {
    outline: none;
  }

  /* Expand icon */
  .select__expand-icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    transition: var(--koerber-transition-medium) rotate ease;
    rotate: 0;
    margin-inline-start: var(--koerber-spacing-xs);
  }

  .select--open .select__expand-icon {
    rotate: -180deg;
  }

  /* Listbox */
  .select__listbox {
    display: block;
    position: relative;
    border: solid var(--koerber-border-width-s) var(--koerber-panel-border-color);
    padding-block: var(--koerber-spacing-xs);
    padding-inline: 0;
    overflow: auto;
    overscroll-behavior: none;

    /* Make sure it adheres to the popup's auto size */
    max-width: var(--auto-size-available-width);
    max-height: var(--max-height);
    border: solid;
    border-width: var(--koerber-border-width-s);
    border-color: var(--koerber-color-border);
    background: var(--koerber-color-text-bg-fill);
    border-radius: var(--koerber-border-radius-small);
  }

  /* Style the scrollbar */
  .select__listbox::-webkit-scrollbar {
    width: 4px;
  }

  .select__listbox::-webkit-scrollbar-thumb {
    background-color: var(--koerber-color-neutral5);
    border-radius: var(--koerber-border-radius-large);
  }

  /* Hide the scrollbar arrows */
  .select__listbox::-webkit-scrollbar-button {
    display: none;
  }

  .select__listbox::-webkit-scrollbar-track {
    background-color: var(--koerber-color-neutral4);
  }

  .select__listbox ::slotted(koerber-divider) {
    --spacing: var(--koerber-spacing-xs);
  }

  .select__listbox ::slotted(small) {
    color: var(--koerber-color-neutral-500);
    padding-block: var(--koerber-spacing-xs);
    padding-inline: var(--koerber-spacing-m);
  }

  /* Error inputs */

  .select-error-icon {
    color: var(--koerber-color-sema2);
  }

  .select--error {
    background-color: var(--koerber-color-bg);
    border: solid var(--koerber-border-width-s) var(--koerber-color-bg-fill-error);
  }

  .select-error-icon-slot {
    display: flex;
    align-items: center;
    width: 1em;
    justify-content: center;
  }

  .form-control__error-message {
    font-size: var(--koerber-text-base-font-size);
    color: var(--koerber-color-text-error);
  }

  .select--standard.select--loading .select--loading:hover .select--standard:hover {
    color: var(--koerber-color-border-disabled);
    opacity: 0.5;
    cursor: not-allowed;
    border-color: var(--koerber-color-border-disabled);
    background-color: transparent;
  }
`;var tag_component=__webpack_require__("./src/components/tag/tag.component.ts"),uikit_element=__webpack_require__("./src/internal/uikit-element.ts"),__decorate=function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r};class select_component_Select extends uikit_element.Z{constructor(){super(...arguments),this.localize=new localize.V(this),this.typeToSelectString="",this.hasFocus=!1,this.displayLabel="",this.selectedOptions=[],this.hasClearIcon=this.shouldShowClearIcon(),this.name="",this.value="",this.defaultValue="",this.placeholder="",this.size="medium",this.loading=!1,this.loadingMessage="Disabled while loading",this.multiple=!1,this.maxHeight=0,this.maxOptionsVisible=3,this.disabled=!1,this.clearable=!1,this.open=!1,this.hoist=!1,this.placement="bottom",this.required=!1,this.allowSearch=!1,this.error=!1,this.handleDocumentFocusIn=event=>{const path=event.composedPath();this&&!path.includes(this)&&this.hide()},this.handleDocumentKeyDown=event=>{const target=event.target,isClearButton=null!==target.closest(".select__clear"),isIconButton=null!==target.closest("koerber-icon-button");if(!isClearButton&&!isIconButton){if("Escape"===event.key&&this.open&&(event.preventDefault(),event.stopPropagation(),this.hide(),this.displayInput.focus({preventScroll:!0})),"Enter"===event.key||" "===event.key&&""===this.typeToSelectString)return event.preventDefault(),event.stopImmediatePropagation(),this.open?void(this.currentOption&&!this.currentOption.disabled&&(this.multiple?this.toggleOptionSelection(this.currentOption):this.setSelectedOptions(this.currentOption),this.typeToSelectString="",this.updateComplete.then((()=>{this.emit("koerber-input"),this.emit("koerber-change")})),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})))):void this.show();if(["ArrowUp","ArrowDown","Home","End"].includes(event.key)){const allOptions=this.getAllOptions(),currentIndex=allOptions.indexOf(this.currentOption);let newIndex=Math.max(0,currentIndex);if(event.preventDefault(),!this.open&&(this.show(),this.currentOption))return;"ArrowDown"===event.key?(newIndex=currentIndex+1,newIndex>allOptions.length-1&&(newIndex=0)):"ArrowUp"===event.key?(newIndex=currentIndex-1,newIndex<0&&(newIndex=allOptions.length-1)):"Home"===event.key?newIndex=0:"End"===event.key&&(newIndex=allOptions.length-1),this.setCurrentOption(allOptions[newIndex])}if(this.allowSearch&&(1===event.key.length||"Backspace"===event.key)){const allOptions=this.getAllOptions();if(event.metaKey||event.ctrlKey||event.altKey)return;if(!this.open){if("Backspace"===event.key)return;this.show()}if(event.stopPropagation(),event.preventDefault(),clearTimeout(this.typeToSelectTimeout),this.typeToSelectTimeout=window.setTimeout((()=>this.typeToSelectString=""),1e4),"Backspace"===event.key)this.typeToSelectString=this.typeToSelectString.slice(0,-1);else{const charToAdd=event.shiftKey?event.key:event.key.toLowerCase();this.typeToSelectString+=charToAdd}this.displayInput.value=this.typeToSelectString,this.displayInput.focus({preventScroll:!0}),this.setCurrentOption(this.currentOption),this.hasClearIcon=this.shouldShowClearIcon(),this.currentOption&&(0,internal_scroll.zT)(this.currentOption,this.listbox,"vertical","auto"),this.emit("koerber-input"),this.emit("koerber-change");for(const option of allOptions){if(option.getTextLabel().toLowerCase().startsWith(this.typeToSelectString.toLowerCase())){this.setCurrentOption(option);break}}}}},this.handleDocumentMouseDown=event=>{const path=event.composedPath();this&&!path.includes(this)&&this.hide()}}connectedCallback(){super.connectedCallback(),this.open=!1}addOpenListeners(){document.addEventListener("focusin",this.handleDocumentFocusIn),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown)}removeOpenListeners(){document.removeEventListener("focusin",this.handleDocumentFocusIn),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown)}handleFocus(){this.hasFocus=!0,this.displayInput.setSelectionRange(0,0),this.emit("koerber-focus")}handleBlur(){this.hasFocus=!1,this.emit("koerber-blur")}shouldShowClearIcon(){return(this.isSearchable()||this.isClearable())&&!this.isDisabled()}isSearchable(){return this.allowSearch&&""!==this.typeToSelectString&&!this.multiple}isClearable(){return this.clearable&&this.value.length>0}isDisabled(){return this.disabled}handleComboboxMouseDown(event){const isIconButton=event.composedPath().some((el=>el instanceof Element&&"koerber-icon-button"===el.tagName.toLowerCase()));this.disabled||isIconButton||(event.preventDefault(),this.open=!this.open)}handleComboboxKeyDown(event){event.stopPropagation(),this.handleDocumentKeyDown(event)}handleClearClick(event){event.stopPropagation(),this.typeToSelectString="",this.displayInput.value=this.typeToSelectString,""!==this.value&&(this.setSelectedOptions([]),this.displayInput.focus({preventScroll:!0}),this.updateComplete.then((()=>{this.emit("koerber-clear"),this.emit("koerber-input"),this.emit("koerber-change")}))),this.hasClearIcon=!1}handleClearMouseDown(event){event.stopPropagation(),event.preventDefault()}handleOptionClick(event){const option=event.target.closest("koerber-select-option"),isCheckbox=event.composedPath().some((el=>{var _a;return null===(_a=null==el?void 0:el.classList)||void 0===_a?void 0:_a.contains("select-option__checkbox")})),oldValue=this.value;option&&!option.disabled&&(this.multiple?isCheckbox?option.addEventListener("koerber-change",(()=>this.selectionChanged())):this.toggleOptionSelection(option):this.setSelectedOptions(option),this.typeToSelectString="",this.updateComplete.then((()=>this.displayInput.focus({preventScroll:!0}))),this.value!==oldValue&&this.updateComplete.then((()=>{this.emit("koerber-input"),this.emit("koerber-change")})),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})))}handleDefaultSlotChange(){const allOptions=this.getAllOptions(),value=Array.isArray(this.value)?this.value:[this.value],values=[];customElements.get("koerber-select-option")?(allOptions.forEach((option=>values.push(option.value))),this.setSelectedOptions(allOptions.filter((el=>value.includes(el.value))))):customElements.whenDefined("koerber-select-option").then((()=>this.handleDefaultSlotChange()))}handleTagRemove(event,option){event.stopPropagation(),this.disabled||(this.toggleOptionSelection(option,!1),this.updateComplete.then((()=>{this.emit("koerber-input"),this.emit("koerber-change")})))}getAllOptions(){return[...this.querySelectorAll("koerber-select-option")]}getFirstOption(){return this.querySelector("koerber-select-option")}setCurrentOption(option){this.getAllOptions().forEach((el=>{el.current=!1,el.tabIndex=-1})),option&&(this.currentOption=option,option.current=!0,option.tabIndex=0)}setSelectedOptions(option){const allOptions=this.getAllOptions(),newSelectedOptions=Array.isArray(option)?option:[option];allOptions.forEach((el=>el.selected=!1)),newSelectedOptions.length&&newSelectedOptions.forEach((el=>el.selected=!0)),this.selectionChanged()}toggleOptionSelection(option,force){option.selected=!0===force||!1===force?force:!option.selected,this.selectionChanged()}selectionChanged(){var _a,_b,_c,_d;this.selectedOptions=this.getAllOptions().filter((el=>el.selected)),this.multiple?(this.value=this.selectedOptions.map((el=>el.value)),this.placeholder&&0===this.value.length?this.displayLabel="":this.displayLabel=this.localize.term("numOptionsSelected",this.selectedOptions.length)):(this.value=null!==(_b=null===(_a=this.selectedOptions[0])||void 0===_a?void 0:_a.value)&&void 0!==_b?_b:"",this.displayLabel=null!==(_d=null===(_c=this.selectedOptions[0])||void 0===_c?void 0:_c.getTextLabel())&&void 0!==_d?_d:"")}async syncOptions(){const options=this.getAllOptions();await Promise.all(options.map((async option=>{await option.updateComplete,option.size=this.size})))}handleSizeChange(){this.syncOptions()}handleDisabledChange(){this.disabled&&(this.open=!1,this.handleOpenChange())}handleValueChange(){const allOptions=this.getAllOptions(),value=Array.isArray(this.value)?this.value:[this.value];this.setSelectedOptions(allOptions.filter((el=>value.includes(el.value)))),this.hasClearIcon=this.shouldShowClearIcon()}async handleOpenChange(){if(!this.open||this.disabled||this.loading){this.emit("koerber-hide"),this.removeOpenListeners(),await(0,animate.U_)(this);const{keyframes,options}=(0,animation_registry.O8)(this,"select.hide",{dir:this.localize.dir()});await(0,animate.nv)(this.popup.popup,keyframes,options),this.listbox.hidden=!0,this.popup.active=!1,this.emit("koerber-after-hide")}else{this.maxHeight>0&&this.listbox.style.setProperty("max-height",`${this.maxHeight}px`),this.handleSizeChange(),this.setCurrentOption(this.selectedOptions[0]||this.getFirstOption()),this.emit("koerber-show"),this.addOpenListeners(),await(0,animate.U_)(this),this.listbox.hidden=!1,this.popup.active=!0,requestAnimationFrame((()=>{this.setCurrentOption(this.currentOption)}));const{keyframes,options}=(0,animation_registry.O8)(this,"select.show",{dir:this.localize.dir()});await(0,animate.nv)(this.popup.popup,keyframes,options),this.currentOption&&(0,internal_scroll.zT)(this.currentOption,this.listbox,"vertical","auto"),this.emit("koerber-after-show"),this.displayInput.focus({preventScroll:!0})}}async show(){if(!(this.open||this.disabled||this.loading))return this.open=!0,(0,internal_event.m)(this,"koerber-after-show");this.open=!1}async hide(){if(this.open&&!this.disabled&&!this.loading)return this.open=!1,(0,internal_event.m)(this,"koerber-after-hide");this.open=!1}focus(options){this.displayInput.focus(options)}blur(){this.displayInput.blur()}render(){const isPlaceholderVisible=this.placeholder&&0===this.value.length,hasError=this.error;return lit.dy`
      <div
        part="form-control"
        class=${(0,class_map.$)({"form-control":!0,"form-control--small":"small"===this.size,"form-control--medium":"medium"===this.size,"form-control--large":"large"===this.size,"form-control__label--disabled":this.disabled})}
      >
        <div part="form-control-input" class="form-control-input">
          <koerber-popup
            class=${(0,class_map.$)({select:!0,"select--standard":!0,"select--open":this.open&&!this.loading,"select--disabled":this.disabled,"select--multiple":this.multiple,"select--focused":this.hasFocus,"select--placeholder-visible":isPlaceholderVisible,"select--top":"top"===this.placement,"select--bottom":"bottom"===this.placement,"select--small":"small"===this.size,"select--medium":"medium"===this.size,"select--large":"large"===this.size,"select--loading":this.loading,"select--error":hasError})}
            placement=${this.placement}
            strategy=${this.hoist?"fixed":"absolute"}
            flip
            shift
            sync="width"
            auto-size="vertical"
            auto-size-padding="10"
          >
            <div
              part="combobox"
              class="select__combobox"
              slot="anchor"
              @keydown=${this.handleComboboxKeyDown}
              @mousedown=${this.handleComboboxMouseDown}
            >
              <slot part="prefix" name="prefix" class="select__prefix"></slot>

              <input
                part="display-input"
                class=${(0,class_map.$)({"select__display-input":!0,"select--small":"small"===this.size,"select--medium":"medium"===this.size,"select--large":"large"===this.size,"select--allowSearch":this.allowSearch})}
                type="text"
                placeholder=${this.placeholder}
                .disabled=${this.disabled||this.loading}
                .value=${this.displayLabel}
                autocomplete="off"
                spellcheck="false"
                autocapitalize="off"
                ?readonly=${!this.allowSearch}
                aria-label=${(0,if_defined.o)(this.accessibleName)}
                aria-description=${(0,if_defined.o)(this.accessibleDescription)}
                aria-controls="listbox"
                aria-expanded=${this.open?"true":"false"}
                aria-haspopup="listbox"
                aria-labelledby="label"
                aria-disabled=${this.disabled||this.loading}
                role="combobox"
                tabindex="0"
                @focus=${this.handleFocus}
                @blur=${this.handleBlur}
              />

              ${this.multiple?lit.dy`
                    <div part="tags" class="select__tags">
                      ${this.selectedOptions.map(((option,index)=>index<this.maxOptionsVisible||this.maxOptionsVisible<=0?lit.dy`
                            <koerber-tag
                              part="tag"
                              exportparts="
                                base:tag__base,
                                content:tag__content,
                                remove-button:tag__remove-button,
                                remove-button__base:tag__remove-button__base
                              "
                              size=${this.size}
                              pill="true"
                              removable
                              @koerber-remove=${event=>this.handleTagRemove(event,option)}
                            >
                              ${option.getTextLabel()}
                            </koerber-tag>
                          `:index===this.maxOptionsVisible?lit.dy`
                            <koerber-tag size=${this.size}> +${this.selectedOptions.length-index} </koerber-tag>
                          `:null))}
                    </div>
                  `:""}

              <input
                class="select__value-input"
                type="text"
                ?disabled=${this.disabled||this.loading}
                ?required=${this.required}
                .value=${Array.isArray(this.value)?this.value.join(", "):this.value}
                tabindex="-1"
                aria-hidden="true"
                @focus=${()=>this.focus()}
              />

              ${this.loading&&!this.error?lit.dy`
                    <koerber-tooltip hoist content=${this.loadingMessage}>
                      <div>
                        <koerber-spinner></koerber-spinner>
                      </div>
                    </koerber-tooltip>
                  `:""}
              ${this.hasClearIcon?lit.dy`
                    <button
                      part="clear-button"
                      class="select__clear"
                      type="button"
                      aria-label=${this.localize.term("clearEntry")}
                      @mousedown=${this.handleClearMouseDown}
                      @click=${this.handleClearClick}
                      tabindex="-1"
                    >
                      <slot name="clear-icon">
                        <koerber-icon name="close" library="system"></koerber-icon>
                      </slot>
                    </button>
                  `:""}
              ${hasError?lit.dy`
                    <div class="select-error-icon-slot">
                      <koerber-icon class="select-error-icon" name="alert"></koerber-icon>
                    </div>
                  `:""}

              <slot name="expand-icon" part="expand-icon" class="select__expand-icon">
                <koerber-icon library="system" name="chevron-down"></koerber-icon>
              </slot>
            </div>

            <div
              id="listbox"
              role="listbox"
              aria-expanded=${this.open?"true":"false"}
              aria-multiselectable=${this.multiple?"true":"false"}
              part="listbox"
              class="select__listbox"
              tabindex="-1"
              @mouseup=${this.handleOptionClick}
              @slotchange=${this.handleDefaultSlotChange}
            >
              <slot></slot>
            </div>
          </koerber-popup>
        </div>
        ${this.loadingErrorMessage?lit.dy`
              <slot
                name="error-message"
                part="form-control-error-message"
                id="error-message"
                class="form-control__error-message"
                aria-hidden=${this.loadingErrorMessage?"false":"true"}
              >
                ${this.loadingErrorMessage}
              </slot>
            `:""}
      </div>
    `}}select_component_Select.styles=[component_styles.Z,form_control_styles.Z,select_styles],select_component_Select.dependencies={"koerber-icon":icon_component.Z,"koerber-popup":popup_component.Z,"koerber-tag":tag_component.Z,"koerber-spinner":spinner_component.Z};const select_component=select_component_Select;__decorate([(0,decorators.IO)(".select")],select_component_Select.prototype,"popup",void 0),__decorate([(0,decorators.IO)(".select__combobox")],select_component_Select.prototype,"combobox",void 0),__decorate([(0,decorators.IO)(".select__display-input")],select_component_Select.prototype,"displayInput",void 0),__decorate([(0,decorators.IO)(".select__value-input")],select_component_Select.prototype,"valueInput",void 0),__decorate([(0,decorators.IO)(".select__listbox")],select_component_Select.prototype,"listbox",void 0),__decorate([(0,decorators.SB)()],select_component_Select.prototype,"hasFocus",void 0),__decorate([(0,decorators.SB)()],select_component_Select.prototype,"displayLabel",void 0),__decorate([(0,decorators.SB)()],select_component_Select.prototype,"currentOption",void 0),__decorate([(0,decorators.SB)()],select_component_Select.prototype,"selectedOptions",void 0),__decorate([(0,decorators.SB)()],select_component_Select.prototype,"hasClearIcon",void 0),__decorate([(0,decorators.Cb)()],select_component_Select.prototype,"name",void 0),__decorate([(0,decorators.Cb)({converter:{fromAttribute:value=>value.split(" "),toAttribute:value=>value.join(" ")}})],select_component_Select.prototype,"value",void 0),__decorate([(0,default_value.L)()],select_component_Select.prototype,"defaultValue",void 0),__decorate([(0,decorators.Cb)()],select_component_Select.prototype,"placeholder",void 0),__decorate([(0,decorators.Cb)({reflect:!0})],select_component_Select.prototype,"size",void 0),__decorate([(0,decorators.Cb)({type:Boolean})],select_component_Select.prototype,"loading",void 0),__decorate([(0,decorators.Cb)({type:String})],select_component_Select.prototype,"loadingMessage",void 0),__decorate([(0,decorators.Cb)({type:Boolean,reflect:!0})],select_component_Select.prototype,"multiple",void 0),__decorate([(0,decorators.Cb)({attribute:"max-height",type:Number})],select_component_Select.prototype,"maxHeight",void 0),__decorate([(0,decorators.Cb)({attribute:"max-options-visible",type:Number})],select_component_Select.prototype,"maxOptionsVisible",void 0),__decorate([(0,decorators.Cb)({type:Boolean,reflect:!0})],select_component_Select.prototype,"disabled",void 0),__decorate([(0,decorators.Cb)({type:Boolean})],select_component_Select.prototype,"clearable",void 0),__decorate([(0,decorators.Cb)({type:Boolean,reflect:!0})],select_component_Select.prototype,"open",void 0),__decorate([(0,decorators.Cb)({type:Boolean})],select_component_Select.prototype,"hoist",void 0),__decorate([(0,decorators.Cb)({reflect:!0})],select_component_Select.prototype,"placement",void 0),__decorate([(0,decorators.Cb)({type:Boolean,reflect:!0})],select_component_Select.prototype,"required",void 0),__decorate([(0,decorators.Cb)({type:Boolean})],select_component_Select.prototype,"allowSearch",void 0),__decorate([(0,decorators.Cb)({type:Boolean})],select_component_Select.prototype,"error",void 0),__decorate([(0,decorators.Cb)({attribute:"loading-error-message"})],select_component_Select.prototype,"loadingErrorMessage",void 0),__decorate([(0,decorators.Cb)({attribute:"accessible-name",reflect:!0})],select_component_Select.prototype,"accessibleName",void 0),__decorate([(0,decorators.Cb)({attribute:"accessible-description",reflect:!0})],select_component_Select.prototype,"accessibleDescription",void 0),__decorate([(0,watch.Y)("disabled",{waitUntilFirstUpdate:!0})],select_component_Select.prototype,"handleDisabledChange",null),__decorate([(0,watch.Y)("value",{waitUntilFirstUpdate:!0})],select_component_Select.prototype,"handleValueChange",null),__decorate([(0,watch.Y)("open",{waitUntilFirstUpdate:!0})],select_component_Select.prototype,"handleOpenChange",null),(0,animation_registry.jx)("select.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}}),(0,animation_registry.jx)("select.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}});select_component.define("koerber-select")},"./src/components/tag/tag.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>tag_component});var class_map=__webpack_require__("./node_modules/lit/directives/class-map.js"),lit=__webpack_require__("./node_modules/lit/index.js"),localize=__webpack_require__("./src/utilities/localize.ts"),decorators=__webpack_require__("./node_modules/lit/decorators.js"),component_styles=__webpack_require__("./src/styles/component.styles.ts"),icon_button_component=__webpack_require__("./src/components/icon-button/icon-button.component.ts");const tag_styles=lit.iv`
  :host {
    display: inline-block;
    --koerber-tag-height-small: 20px;
    --koerber-tag-height-medium: 24px;
  }

  .tag {
    display: flex;
    align-items: center;
    border: solid 1px;
    line-height: 1;
    white-space: nowrap;
    user-select: none;
    background-color: var(--koerber-color-text-disabled);
    color: var(--koerber-color-text-bg-fill);
  }

  .tag__remove::part(base) {
    color: inherit;
    padding: 0;
  }

  /*
   * Size modifiers
   */

  .tag--small {
    font-size: var(--koerber-text-sm-font-size);
    height: var(--koerber-tag-height-small);
    line-height: var(--koerber-text-md-line-height);
    border-radius: var(--koerber-border-radius-small);
    padding-left: var(--koerber-spacing-xs);
    padding-right: var(--koerber-spacing-2xs);
  }

  .tag--medium {
    font-size: var(--koerber-text-base-font-size);
    height: var(--koerber-tag-height-medium);
    line-height: var(--koerber-text-md-line-height);
    border-radius: var(--koerber-border-radius-medium);
    padding-left: var(--koerber-spacing-xs);
    padding-right: var(--koerber-spacing-2xs);
  }

  .tag--large {
    font-size: var(--koerber-text-md-font-size);
    height: var(--koerber-height-size-compact);
    line-height: var(--koerber-text-md-line-height);
    border-radius: var(--koerber-border-radius-medium);
    padding-left: var(--koerber-spacing-xs);
    padding-right: var(--koerber-spacing-2xs);
  }

  .tag__remove {
    margin-inline-start: var(--koerber-spacing-xs);
  }

  /*
   * Pill modifier
   */

  .tag--pill {
    border-radius: var(--koerber-border-radius-pill);
  }
`;var uikit_element=__webpack_require__("./src/internal/uikit-element.ts"),__decorate=function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r};class Tag extends uikit_element.Z{constructor(){super(...arguments),this.localize=new localize.V(this),this.size="medium",this.pill=!1,this.removable=!1}handleRemoveClick(){this.emit("koerber-remove")}render(){return lit.dy`
      <span
        part="base"
        class=${(0,class_map.$)({tag:!0,"tag--small":"small"===this.size,"tag--medium":"medium"===this.size,"tag--large":"large"===this.size,"tag--pill":this.pill,"tag--removable":this.removable})}
      >
        <slot part="content" class="tag__content"></slot>

        ${this.removable?lit.dy`
              <koerber-icon-button
                part="remove-button"
                exportparts="base:remove-button__base"
                name="close"
                library="system"
                label=${this.localize.term("remove")}
                class="tag__remove"
                @click=${this.handleRemoveClick}
                tabindex="-1"
              ></koerber-icon-button>
            `:""}
      </span>
    `}}Tag.styles=[component_styles.Z,tag_styles],Tag.dependencies={"koerber-icon-button":icon_button_component.Z};const tag_component=Tag;__decorate([(0,decorators.Cb)({reflect:!0})],Tag.prototype,"size",void 0),__decorate([(0,decorators.Cb)({type:Boolean,reflect:!0})],Tag.prototype,"pill",void 0),__decorate([(0,decorators.Cb)({type:Boolean})],Tag.prototype,"removable",void 0)},"./src/components/toggle/toggle.ts":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{var class_map=__webpack_require__("./node_modules/lit/directives/class-map.js"),default_value=__webpack_require__("./src/internal/default-value.ts"),lit=__webpack_require__("./node_modules/lit/index.js"),if_defined=__webpack_require__("./node_modules/lit/directives/if-defined.js"),live=__webpack_require__("./node_modules/lit/directives/live.js"),decorators=__webpack_require__("./node_modules/lit/decorators.js"),watch=__webpack_require__("./src/internal/watch.ts"),component_styles=__webpack_require__("./src/styles/component.styles.ts");const toggle_styles=lit.iv`
  :host {
    display: inline-block;
    --koerber-toggle-required-content: '*';
    --koerber-toggle-required-content-offset: -2px;
    --koerber-toggle-size: 20px;
  }

  :host([size='standard']) {
    --height: var(--koerber-toggle-size);
    --thumb-size: calc(var(--koerber-toggle-size) - 0.2rem);
    --width: calc(var(--height) * 2);

    font-size: var(--koerber-text-base-font-size);
    --padding: 2px;
  }

  :host([size='comfortable']) {
    position: relative;
    display: inline-block;
    align-items: center;
    justify-content: center;
    --height: var(--koerber-toggle-size);
    --thumb-size: calc(var(--koerber-toggle-size) - 0.2rem);
    --width: calc(var(--height) * 2);

    font-size: var(--koerber-text-md-font-size);
    --padding: 14px var(--koerber-spacing-s) 14px var(--koerber-spacing-s);
  }

  :host([disabled]) {
    cursor: not-allowed;
  }

  .toggle {
    position: relative;
    display: flex;
    align-items: center;
    font-family: var(--koerber-font-family-default);
    font-size: inherit;
    font-weight: var(--koerber-font-weight-regular);
    color: inherit;
    vertical-align: middle;
    cursor: pointer;
    padding: var(--padding);
  }

  .toggle__control {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--width);
    height: var(--height);
    border: solid var(--koerber-border-width-s) var(--koerber-color-border);
    border-radius: var(--height);
    transition:
      var(--koerber-transition-fast) border-color,
      var(--koerber-transition-fast) background-color;
  }

  .toggle__control .toggle__thumb {
    width: calc(var(--thumb-size) - 0.13rem);
    height: calc(var(--thumb-size) - 0.13rem);
    background-color: var(--koerber-color-bg-fill-secondary);
    border-radius: 50%;
    border: solid var(--koerber-border-width-s) var(--koerber-color-border);
    translate: calc((var(--width) - var(--height)) / -2);
    transition:
      var(--koerber-transition-fast) translate ease,
      var(--koerber-transition-fast) background-color,
      var(--koerber-transition-fast) border-color,
      var(--koerber-transition-fast) box-shadow;
  }

  .toggle__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  /* Hover */
  .toggle:not(.toggle--checked):not(.toggle--disabled) .toggle__control:hover {
    border-color: var(--koerber-color-border-hover);
  }

  .toggle:not(.toggle--checked):not(.toggle--disabled) .toggle__control:hover .toggle__thumb {
    border-color: var(--koerber-color-border-hover);
  }

  /* Focus */
  .toggle:not(.toggle--checked):not(.toggle--disabled) .toggle__input:focus-visible ~ .toggle__control {
    border-color: var(--koerber-color-border-focus);
  }

  .toggle:not(.toggle--checked):not(.toggle--disabled) .toggle__input:focus-visible ~ .toggle__control .toggle__thumb {
    background-color: var(--koerber-color-bg-fill-secondary);
    border-color: var(--koerber-color-border-hover);
    outline: var(--koerber-focus-ring);
    outline-offset: var(--koerber-border-offset);
  }

  /* Checked */
  .toggle--checked .toggle__control {
    background-color: var(--koerber-color-bg-fill);
    border-color: var(--koerber-color-border-focus);
  }

  /* Error */
  .toggle--error .toggle__control {
    border-color: var(--koerber-color-border-error);
  }

  .toggle--checked .toggle__control .toggle__thumb {
    background-color: var(--koerber-color-bg-fill-secondary);
    border-color: var(--koerber-color-border-focus);
    translate: calc((var(--width) - var(--height)) / 2);
  }

  /* Checked + hover */
  .toggle.toggle--checked:not(.toggle--disabled) .toggle__control:hover {
    border-color: var(--koerber-color-border-hover);
    background-color: var(--koerber-color-bg-fill-hover);
  }

  .toggle.toggle--checked:not(.toggle--disabled) .toggle__control:hover .toggle__thumb {
    border-color: var(--koerber-color-border-hover);
  }

  /* Checked + focus */
  .toggle.toggle--checked:not(.toggle--disabled) .toggle__input:focus-visible ~ .toggle__control {
    background-color: var(--koerber-color-bg-fill);
    border-color: var(--koerber-color-border-focus);
    outline: solid var(--koerber-border-width-m) var(--koerber-color-bg-fill);
    outline-offset: var(--koerber-border-offset);
  }

  /* Disabled */
  .toggle--disabled {
    cursor: not-allowed;
    border-color: var(--koerber-color-border-disabled);
    color: var(--koerber-color-text-disabled);
  }

  /* Checked + Disabled Thumb */
  .toggle.toggle--checked.toggle--disabled .toggle__input:disabled ~ .toggle__control {
    background-color: var(--koerber-color-bg-fill-disabled);
    border-color: var(--koerber-color-border-disabled);
    color: var(--koerber-color-text-disabled);
  }

  /* Checked + Disabled Thumb */
  .toggle.toggle--checked.toggle--disabled .toggle__control .toggle__thumb {
    background-color: var(--koerber-color-bg-fill-tertiary); /* Adjust as needed */
    border-color: var(--koerber-color-border-disabled); /* Adjust as needed */
    cursor: not-allowed;
  }

  /* Unchecked + Disabled */
  .toggle:not(.toggle--checked).toggle--disabled .toggle__input:disabled ~ .toggle__control {
    background-color: var(--koerber-color-bg-fill-disabled);
    color: var(--koerber-color-text-disabled);
  }

  /* Unchecked + Disabled Thumb */
  .toggle:not(.toggle--checked).toggle--disabled .toggle__control .toggle__thumb {
    background-color: var(--koerber-color-bg-fill-disabled);
    cursor: not-allowed;
  }

  .toggle__label {
    display: inline-block;
    line-height: var(--height);
    margin-inline-start: var(--koerber-spacing-xs);
    user-select: none;
  }

  :host([required]) .toggle__label::after {
    content: var(--koerber-toggle-required-content);
    margin-inline-start: var(--koerber-toggle-required-content-offset);
  }

  @media (forced-colors: active) {
    .toggle.toggle--checked:not(.toggle--disabled) .toggle__control:hover .toggle__thumb,
    .toggle--checked .toggle__control .toggle__thumb {
      background-color: ButtonText;
    }
  }
`;var uikit_element=__webpack_require__("./src/internal/uikit-element.ts"),__decorate=function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r};class toggle_component_Toggle extends uikit_element.Z{constructor(){super(...arguments),this.hasFocus=!1,this.title="",this.name="",this.size="standard",this.disabled=!1,this.checked=!1,this.defaultChecked=!1,this.required=!1,this.error=!1}handleBlur(){this.hasFocus=!1,this.emit("koerber-blur")}handleInput(){this.emit("koerber-input")}handleClick(){this.checked=!this.checked,this.emit("koerber-change")}handleFocus(){this.hasFocus=!0,this.emit("koerber-focus")}handleKeyDown(event){"ArrowLeft"===event.key&&(event.preventDefault(),this.checked=!1,this.emit("koerber-change"),this.emit("koerber-input")),"ArrowRight"===event.key&&(event.preventDefault(),this.checked=!0,this.emit("koerber-change"),this.emit("koerber-input"))}handleCheckedChange(){this.input.checked=this.checked}click(){this.input.click()}focus(options){this.input.focus(options)}blur(){this.input.blur()}render(){return lit.dy`
      <label
        part="base"
        class=${(0,class_map.$)({toggle:!0,"toggle--checked":this.checked,"toggle--disabled":this.disabled,"toggle--focused":this.hasFocus,"toggle--standard":"standard"===this.size,"toggle--comfortable":"comfortable"===this.size,"toggle--error":this.error})}
      >
        <input
          class="toggle__input"
          type="checkbox"
          title=${this.title}
          name=${this.name}
          value=${(0,if_defined.o)(this.value)}
          .checked=${(0,live.a)(this.checked)}
          .disabled=${this.disabled}
          .required=${this.required}
          role="switch"
          aria-checked=${this.checked?"true":"false"}
          aria-label=${(0,if_defined.o)(this.accessibleName)}
          aria-description=${(0,if_defined.o)(this.accessibleDescription)}
          @click=${this.handleClick}
          @input=${this.handleInput}
          @blur=${this.handleBlur}
          @focus=${this.handleFocus}
          @keydown=${this.handleKeyDown}
        />

        <span part="control" class="toggle__control">
          <span part="thumb" class="toggle__thumb"></span>
        </span>

        <slot part="label" class="toggle__label">
          <koerber-form-field-label label="${this.label}"></koerber-form-field-label>
        </slot>
      </label>
    `}}toggle_component_Toggle.styles=[component_styles.Z,toggle_styles];const toggle_component=toggle_component_Toggle;__decorate([(0,decorators.IO)('input[type="checkbox"]')],toggle_component_Toggle.prototype,"input",void 0),__decorate([(0,decorators.SB)()],toggle_component_Toggle.prototype,"hasFocus",void 0),__decorate([(0,decorators.Cb)()],toggle_component_Toggle.prototype,"title",void 0),__decorate([(0,decorators.Cb)()],toggle_component_Toggle.prototype,"name",void 0),__decorate([(0,decorators.Cb)()],toggle_component_Toggle.prototype,"value",void 0),__decorate([(0,decorators.Cb)()],toggle_component_Toggle.prototype,"label",void 0),__decorate([(0,decorators.Cb)({reflect:!0})],toggle_component_Toggle.prototype,"size",void 0),__decorate([(0,decorators.Cb)({type:Boolean,reflect:!0})],toggle_component_Toggle.prototype,"disabled",void 0),__decorate([(0,decorators.Cb)({type:Boolean,reflect:!0})],toggle_component_Toggle.prototype,"checked",void 0),__decorate([(0,default_value.L)("checked")],toggle_component_Toggle.prototype,"defaultChecked",void 0),__decorate([(0,decorators.Cb)({type:Boolean,reflect:!0})],toggle_component_Toggle.prototype,"required",void 0),__decorate([(0,decorators.Cb)({type:Boolean,reflect:!0})],toggle_component_Toggle.prototype,"error",void 0),__decorate([(0,decorators.Cb)({attribute:"accessible-name",reflect:!0})],toggle_component_Toggle.prototype,"accessibleName",void 0),__decorate([(0,decorators.Cb)({attribute:"accessible-description",reflect:!0})],toggle_component_Toggle.prototype,"accessibleDescription",void 0),__decorate([(0,watch.Y)("checked",{waitUntilFirstUpdate:!0})],toggle_component_Toggle.prototype,"handleCheckedChange",null);toggle_component.define("koerber-toggle")},"./src/components/tooltip/tooltip.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _tooltip_component__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/tooltip/tooltip.component.ts");const __WEBPACK_DEFAULT_EXPORT__=_tooltip_component__WEBPACK_IMPORTED_MODULE_0__.Z;_tooltip_component__WEBPACK_IMPORTED_MODULE_0__.Z.define("koerber-tooltip")},"./src/components/tree-item/tree-item.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>tree_item_component});var animate=__webpack_require__("./src/internal/animate.ts"),class_map=__webpack_require__("./node_modules/lit/directives/class-map.js"),animation_registry=__webpack_require__("./src/utilities/animation-registry.ts"),lit=__webpack_require__("./node_modules/lit/index.js"),live=__webpack_require__("./node_modules/lit/directives/live.js"),localize=__webpack_require__("./src/utilities/localize.ts"),decorators=__webpack_require__("./node_modules/lit/decorators.js"),watch=__webpack_require__("./src/internal/watch.ts"),when=__webpack_require__("./node_modules/lit/node_modules/lit-html/directives/when.js"),checkbox_component=__webpack_require__("./src/components/checkbox/checkbox.component.ts"),component_styles=__webpack_require__("./src/styles/component.styles.ts"),icon_component=__webpack_require__("./src/components/icon/icon.component.ts"),spinner_component=__webpack_require__("./src/components/spinner/spinner.component.ts");const tree_item_styles=lit.iv`
  :host {
    display: block;
    outline: 0;
    z-index: 0;
  }

  :host(:focus) {
    outline: none;
  }

  slot:not([name])::slotted(sl-icon) {
    margin-inline-end: var(--koerber-spacing-xs);
  }

  .tree-item {
    position: relative;
    display: flex;
    align-items: stretch;
    flex-direction: column;
    font-family: var(--koerber-font-family-default);
    font-weight: var(--koerber-font-weight-regular);
    color: var(--koerber-color-text-secondary);
    background-color: var(--koerber-color-bg-fill-secondary);
    cursor: pointer;
  }

  .tree-item--size-small .tree-item__item {
    min-height: var(--koerber-height-size-compact);
  }

  .tree-item--size-medium .tree-item__item {
    min-height: var(--koerber-height-size-standard);
  }

  .tree-item--size-large .tree-item__item {
    min-height: var(--koerber-height-size-comfortable);
  }

  .tree-item__checkbox {
    cursor: pointer;
  }

  .tree-item__expand-button,
  .tree-item__checkbox,
  .tree-item__content {
    font-family: var(--koerber-font-family-default);
    font-size: var(--koerber-text-base-font-size);
    font-weight: var(--koerber-font-weight-regular);
    line-height: var(--koerber-text-md-line-height);
    letter-spacing: var(--koerber-letter-spacing-normal);
  }

  .tree-item--size-large .tree-item__expand-button,
  .tree-item--size-large .tree-item__checkbox,
  .tree-item--size-large .tree-item__content {
    font-family: var(--koerber-font-family-default);
    font-size: var(--koerber-text-md-font-size);
    font-weight: var(--koerber-font-weight-regular);
    line-height: var(--koerber-text-md-line-height);
    letter-spacing: var(--koerber-letter-spacing-normal);
  }

  .tree-item__hint {
    font-size: var(--koerber-text-sm-font-size);
  }

  .tree-item__checkbox::part(base) {
    display: flex;
    align-items: center;
    padding: var(--koerber-spacing-2xs);
  }

  .tree-item__checkbox::part(label) {
    margin: 0;
  }

  .tree-item__indentation {
    display: block;
    width: 1.2em; /*1.2 - 24px*/
    flex-shrink: 0;
  }

  .tree-item__expand-button {
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: content-box;
    width: 1rem;
    height: 1rem;
    flex-shrink: 0;
    margin: 0 0 0 var(--koerber-spacing-xs);
  }

  .tree-item__expand-button {
    transition: var(--koerber-transition-medium) rotate ease;
  }

  .tree-item--open .tree-item__expand-button {
    rotate: 180deg;
  }

  .tree-item--open.tree-item--rtl .tree-item__expand-button {
    rotate: -90deg;
  }

  .tree-item--open slot[name='expand-icon'],
  .tree-item:not(.tree-item--open) slot[name='collapse-icon'] {
    display: none;
  }

  .tree-item:not(.tree-item--has-expand-button) .tree-item__expand-icon-slot {
    display: none;
  }

  .tree-item__expand-button--visible {
    cursor: pointer;
  }

  .tree-item__item {
    display: flex;
    align-items: center;
    gap: var(--koerber-spacing-xs);
  }

  .tree-item__content {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: space-between;
    transition: var(--koerber-transition-fast) color;
  }

  /* Actions Part*/

  .tree-item__actions {
    display: flex;
    margin: 0 var(--koerber-spacing-s) 0 0;
    gap: 0;
  }

  .tree-item__children {
    display: block;
    font-size: var(--koerber-text-md-font-size);
    padding-left: var(--koerber-spacing-s);
  }

  /* Indentation lines */
  .tree-item__children {
    position: relative;
  }

  .tree-item__children::before {
    content: '';
    position: absolute;
    top: var(--indent-guide-offset);
    bottom: var(--indent-guide-offset);
    left: calc(1em - (var(--indent-guide-width) / 2) - 1px);
    border-inline-end: var(--ind ent-guide-width) var(--indent-guide-style) var(--indent-guide-color);
    z-index: 1;
  }

  .tree-item--rtl .tree-item__children::before {
    left: auto;
    right: 1em;
  }

  @media (forced-colors: active) {
    :host(:not([aria-disabled='true'])) .tree-item--selected .tree-item__item {
      outline: dashed 1px SelectedItem;
    }
  }

  /* States */
  /* Hover */
  :host(:not([aria-disabled='true'])) .tree-item__item:hover {
    background-color: var(--koerber-color-bg-fill-secondary-hover);
    color: var(--koerber-color-text);
  }

  :host(:not([aria-disabled='true'])) .tree-item__item:hover .tree-item__expand-button {
    color: var(--koerber-color-text);
  }

  :host(:not([aria-disabled='true'])) .tree-item__item:hover .tree-item__actions {
    color: var(--koerber-color-icon);
  }

  /* Focus */
  :host(:focus-visible) .tree-item__item {
    outline: solid var(--koerber-border-width-m) var(--koerber-color-bg-fill);
    outline-offset: var(--koerber-border-offset);
    z-index: 2;
  }

  /* Selected */
  :host(:not([aria-disabled='true'])) .tree-item--open .tree-item__expand-button--visible {
    color: var(--koerber-color-bg-fill);
  }

  .tree-item--disabled .tree-item__expand-button,
  .tree-item--disabled .tree-item__item {
    background-color: var(--koerber-color-bg-fill-disabled);
    color: var(--koerber-color-text-disabled);
    outline: none;
    cursor: not-allowed;
  }

  /* Text truncation */
  .tree-item__label {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-box-pack: center;
    -webkit-line-clamp: 1;
    overflow: hidden;
  }
`;var tooltip_component=__webpack_require__("./src/components/tooltip/tooltip.component.ts"),uikit_element=__webpack_require__("./src/internal/uikit-element.ts"),__decorate=function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r};class TreeItem extends uikit_element.Z{constructor(){super(...arguments),this.localize=new localize.V(this),this.tooltipContent="",this.isTextOverflowing=!1,this.indeterminate=!1,this.isLeaf=!1,this.loading=!1,this.selectable=!1,this.open=!1,this.selected=!1,this.disabled=!1,this.lazy=!1,this.size="medium",this.getChildrenItems=({includeDisabled=!0}={})=>this.childrenSlot?[...this.childrenSlot.assignedElements({flatten:!0})].filter((item=>TreeItem.isTreeItem(item)&&(includeDisabled||!item.disabled))):[]}static isTreeItem(node){return node instanceof Element&&"treeitem"===node.getAttribute("role")}connectedCallback(){super.connectedCallback(),this.setAttribute("role","treeitem"),this.setAttribute("tabindex","-1"),this.isNestedItem()&&(this.slot="children"),this.resizeObserver=new ResizeObserver((()=>this.checkTextOverflow())),this.updateComplete.then((()=>{this.resizeObserver.observe(this.labelContentSlot)}))}firstUpdated(){this.childrenContainer.hidden=!this.open,this.childrenContainer.style.height=this.open?"auto":"0",this.isLeaf=!this.lazy&&0===this.getChildrenItems().length,this.handleOpenChange(),this.checkTextOverflow()}updated(_changedProperties){_changedProperties.has("isTextOverflowing")&&this.attachOverflowObserver()}async animateCollapse(){this.emit("koerber-collapse"),await(0,animate.U_)(this.childrenContainer);const{keyframes,options}=(0,animation_registry.O8)(this,"tree-item.collapse",{dir:this.localize.dir()});await(0,animate.nv)(this.childrenContainer,(0,animate.GH)(keyframes,this.childrenContainer.scrollHeight),options),this.childrenContainer.hidden=!0,this.emit("koerber-after-collapse")}isNestedItem(){const parent=this.parentElement;return!!parent&&TreeItem.isTreeItem(parent)}handleChildrenSlotChange(){this.loading=!1,this.isLeaf=!this.lazy&&0===this.getChildrenItems().length}willUpdate(changedProperties){changedProperties.has("selected")&&!changedProperties.has("indeterminate")&&(this.indeterminate=!1)}async animateExpand(){this.emit("koerber-expand"),await(0,animate.U_)(this.childrenContainer),this.childrenContainer.hidden=!1;const{keyframes,options}=(0,animation_registry.O8)(this,"tree-item.expand",{dir:this.localize.dir()});await(0,animate.nv)(this.childrenContainer,(0,animate.GH)(keyframes,this.childrenContainer.scrollHeight),options),this.childrenContainer.style.height="auto",this.emit("koerber-after-expand")}attachOverflowObserver(){this.resizeObserver&&this.resizeObserver.disconnect(),this.resizeObserver=new ResizeObserver((()=>this.checkTextOverflow())),this.updateComplete.then((()=>{this.resizeObserver.observe(this.labelContentSlot)}))}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver.disconnect()}checkTextOverflow(){requestAnimationFrame((()=>{this.labelContentSlot.scrollHeight>this.labelContentSlot.clientHeight?(this.isTextOverflowing=!0,this.tooltipContent=this.getTextContent()):(this.isTextOverflowing=!1,this.tooltipContent="")}))}getTextContent(){const nodes=this.labelContentSlot.assignedNodes();let textContent="";return nodes.forEach((node=>{node.nodeType===Node.TEXT_NODE&&(textContent+=node.textContent)})),textContent}handleLoadingChange(){this.setAttribute("aria-busy",this.loading?"true":"false"),this.loading||this.animateExpand()}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleSelectedChange(){this.setAttribute("aria-selected",this.selected?"true":"false")}handleOpenChange(){this.isLeaf?this.removeAttribute("aria-expanded"):this.setAttribute("aria-expanded",this.open?"true":"false")}handleExpandAnimation(){this.open?this.lazy?(this.loading=!0,this.emit("koerber-lazy-load")):this.animateExpand():this.animateCollapse()}handleLazyChange(){this.emit("koerber-lazy-change")}render(){var _a;const isRtl="rtl"===this.localize.dir(),showExpandButton=!this.loading&&(!this.isLeaf||this.lazy),treeItemContent=lit.dy` <div
      class="tree-item__item"
      part="
          item
          ${this.disabled?"item--disabled":""}
          ${this.open?"item--open":""}
          ${this.indeterminate?"item--indeterminate":""}
          ${this.selected?"item--selected":""}
        "
    >
      <div class="tree-item__indentation" part="indentation"></div>

      <div
        part="expand-button"
        class=${(0,class_map.$)({"tree-item__expand-button":!0,"tree-item__expand-button--visible":showExpandButton})}
        aria-hidden="true"
      >
        ${(0,when.g)(this.loading,(()=>lit.dy` <koerber-spinner></koerber-spinner> `))}
        <slot class="tree-item__expand-icon-slot" name="expand-icon">
          <koerber-icon library="system" name=${isRtl?"chevron-left":"chevron-up"}></koerber-icon>
        </slot>
        <slot class="tree-item__expand-icon-slot" name="collapse-icon">
          <koerber-icon library="system" name=${isRtl?"chevron-left":"chevron-up"}></koerber-icon>
        </slot>
      </div>

      ${(0,when.g)(this.selectable,(()=>lit.dy` <koerber-checkbox
            part="checkbox"
            exportparts="
                  base:checkbox__base,
                  control:checkbox__control,
                  control--checked:checkbox__control--checked,
                  control--indeterminate:checkbox__control--indeterminate,
                  checked-icon:checkbox__checked-icon,
                  indeterminate-icon:checkbox__indeterminate-icon,
                  label:checkbox__label
                "
            class="tree-item__checkbox"
            title="select-checkbox"
            accessible-name="selection box"
            ?disabled="${this.disabled}"
            ?checked="${(0,live.a)(this.selected)}"
            ?indeterminate="${this.indeterminate}"
          ></koerber-checkbox>`))}

      <slot class="tree-item__support" part="support" name="support"></slot>

      <div class="tree-item__content" part="content">
        ${this.isTextOverflowing?lit.dy`<koerber-tooltip
              class="tree-item__tooltip"
              placement="top"
              hoist
              content="${null!==(_a=this.tooltipContent)&&void 0!==_a?_a:""}"
            >
              <div><slot class="tree-item__label" part="label"></slot></div>
            </koerber-tooltip>`:lit.dy`<slot class="tree-item__label" part="label"></slot>`}
        <slot class="tree-item__hint" part="hint" name="hint"></slot>
      </div>

      <div class="tree-item__actions" part="actions">
        <slot class="tree-item__actions-slot" name="actions"></slot>
      </div>
    </div>`;return lit.dy`
      <div
        part="base"
        class="${(0,class_map.$)({"tree-item":!0,"tree-item--open":this.open,"tree-item--selected":this.selected,"tree-item--disabled":this.disabled,"tree-item--leaf":this.isLeaf,"tree-item--has-expand-button":showExpandButton,"tree-item--rtl":"rtl"===this.localize.dir(),[`tree-item--size-${this.size}`]:!0})}"
      >
        ${treeItemContent}

        <div class="tree-item__children" part="children" role="group">
          <slot name="children" @slotchange="${this.handleChildrenSlotChange}"></slot>
        </div>
      </div>
    `}}TreeItem.styles=[component_styles.Z,tree_item_styles],TreeItem.dependencies={"koerber-checkbox":checkbox_component.Z,"koerber-icon":icon_component.Z,"koerber-spinner":spinner_component.Z,"koerber-tooltip":tooltip_component.Z};const tree_item_component=TreeItem;__decorate([(0,decorators.SB)()],TreeItem.prototype,"isTextOverflowing",void 0),__decorate([(0,decorators.SB)()],TreeItem.prototype,"indeterminate",void 0),__decorate([(0,decorators.SB)()],TreeItem.prototype,"isLeaf",void 0),__decorate([(0,decorators.SB)()],TreeItem.prototype,"loading",void 0),__decorate([(0,decorators.SB)()],TreeItem.prototype,"selectable",void 0),__decorate([(0,decorators.Cb)({type:Boolean,reflect:!0})],TreeItem.prototype,"open",void 0),__decorate([(0,decorators.Cb)({type:Boolean,reflect:!0})],TreeItem.prototype,"selected",void 0),__decorate([(0,decorators.Cb)({type:Boolean,reflect:!0})],TreeItem.prototype,"disabled",void 0),__decorate([(0,decorators.Cb)({type:Boolean,reflect:!0})],TreeItem.prototype,"lazy",void 0),__decorate([(0,decorators.Cb)({reflect:!0})],TreeItem.prototype,"size",void 0),__decorate([(0,decorators.IO)("slot:not([name])")],TreeItem.prototype,"defaultSlot",void 0),__decorate([(0,decorators.IO)("slot[name=children]")],TreeItem.prototype,"childrenSlot",void 0),__decorate([(0,decorators.IO)(".tree-item__item")],TreeItem.prototype,"itemElement",void 0),__decorate([(0,decorators.IO)(".tree-item__children")],TreeItem.prototype,"childrenContainer",void 0),__decorate([(0,decorators.IO)(".tree-item__expand-button slot")],TreeItem.prototype,"expandButtonSlot",void 0),__decorate([(0,decorators.IO)(".tree-item__label")],TreeItem.prototype,"labelContentSlot",void 0),__decorate([(0,watch.Y)("loading",{waitUntilFirstUpdate:!0})],TreeItem.prototype,"handleLoadingChange",null),__decorate([(0,watch.Y)("disabled")],TreeItem.prototype,"handleDisabledChange",null),__decorate([(0,watch.Y)("selected")],TreeItem.prototype,"handleSelectedChange",null),__decorate([(0,watch.Y)("open",{waitUntilFirstUpdate:!0})],TreeItem.prototype,"handleOpenChange",null),__decorate([(0,watch.Y)("open",{waitUntilFirstUpdate:!0})],TreeItem.prototype,"handleExpandAnimation",null),__decorate([(0,watch.Y)("lazy",{waitUntilFirstUpdate:!0})],TreeItem.prototype,"handleLazyChange",null),(0,animation_registry.jx)("tree-item.expand",{keyframes:[{height:"0",opacity:"0",overflow:"hidden"},{height:"auto",opacity:"1",overflow:"hidden"}],options:{duration:250,easing:"cubic-bezier(0.4, 0.0, 0.2, 1)"}}),(0,animation_registry.jx)("tree-item.collapse",{keyframes:[{height:"auto",opacity:"1",overflow:"hidden"},{height:"0",opacity:"0",overflow:"hidden"}],options:{duration:200,easing:"cubic-bezier(0.4, 0.0, 0.2, 1)"}})},"./src/components/tree-item/tree-item.ts":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{__webpack_require__("./src/components/tree-item/tree-item.component.ts").Z.define("koerber-tree-item")},"./src/stories/component-imports.ts":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{var animate=__webpack_require__("./src/internal/animate.ts"),class_map=__webpack_require__("./node_modules/lit/directives/class-map.js"),animation_registry=__webpack_require__("./src/utilities/animation-registry.ts"),slot=__webpack_require__("./src/internal/slot.ts"),lit=__webpack_require__("./node_modules/lit/index.js"),localize=__webpack_require__("./src/utilities/localize.ts"),decorators=__webpack_require__("./node_modules/lit/decorators.js"),internal_event=__webpack_require__("./src/internal/event.ts"),watch=__webpack_require__("./src/internal/watch.ts"),component_styles=__webpack_require__("./src/styles/component.styles.ts"),icon_component=__webpack_require__("./src/components/icon/icon.component.ts");const accordion_styles=lit.iv`
  :host {
    display: block;
  }

  .accordion {
    background-color: var(--koerber-color-bg);
    overflow-anchor: none;
    font-family: var(--koerber-font-family-default);
    font-weight: var(--koerber-font-weight-regular);
    font-size: var(--koerber-text-base-font-size);
    color: var(--koerber-color-text-secondary);
  }

  .accordion--disabled {
    background-color: var(--koerber-color-bg-fill-disabled);
    color: var(--koerber-color-text-disabled);
    opacity: 0.8;
  }

  .accordion--disabled .accordion__body {
    background-color: var(--koerber-color-bg-fill-disabled);
    color: var(--koerber-color-text-disabled);
  }

  .accordion__header {
    display: flex;
    align-items: center;
    border-radius: inherit;
    gap: var(--koerber-spacing-s);
    padding: 0 var(--koerber-spacing-s);
    flex-grow: 1;
    user-select: none;
    cursor: pointer;
  }

  /** Sizes */
  .accordion--small,
  .accordion--medium {
    font-size: var(--koerber-text-base-font-size);
  }

  .accordion--large {
    font-size: var(--koerber-text-md-font-size);
  }

  .accordion__header.accordion__header--small,
  .accordion__body.accordion__body--small {
    min-height: var(--koerber-height-size-compact);
  }

  .accordion__header.accordion__header--medium,
  .accordion__body.accordion__body--medium {
    min-height: var(--koerber-height-size-standard);
  }

  .accordion__header.accordion__header--large,
  .accordion__body.accordion__body--large {
    min-height: var(--koerber-height-size-comfortable);
  }

  .accordion__header:focus {
    outline: none;
  }

  .accordion__header:focus-visible {
    outline: var(--koerber-focus-ring);
    outline-offset: var(--koerber-border-offset);
  }

  .accordion--disabled .accordion__header {
    cursor: not-allowed;
  }

  .accordion--disabled .accordion__body,
  .accordion--disabled ::slotted([slot='suffix-content']),
  .accordion--disabled ::slotted([slot='prefix-content']),
  .accordion--disabled ::slotted([slot='suffix']),
  .accordion--disabled ::slotted([slot='prefix']) {
    cursor: not-allowed;
  }

  .accordion--disabled .accordion__header:focus-visible {
    outline: none;
    box-shadow: none;
  }

  .accordion__body-summary {
    display: flex;
    flex: 1 1 auto;
    justify-content: space-between;
    flex-direction: column;
  }

  .accordion__summary {
    flex: 1 1 auto;
    display: flex;
    align-items: center;
  }

  .accordion__title-icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    transition: var(--koerber-transition-medium) rotate ease;
  }

  .accordion--open .accordion__summary-icon {
    rotate: 180deg;
  }

  .accordion--open.accordion--rtl .accordion__summary-icon {
    rotate: 180deg;
  }

  .accordion--open slot[name='expand-icon'],
  .accordion:not(.accordion--open) slot[name='collapse-icon'] {
    display: none;
  }

  .accordion__body {
    display: flex;
    flex-direction: row;
    align-items: center;
    overflow: hidden;
    border-left: 1px solid rgba(0, 96, 255, 1);
    padding: 0 var(--koerber-spacing-xs) 0 var(--koerber-spacing-xl);
    gap: var(--koerber-spacing-xs);
  }

  .accordion__content {
    display: block;
    flex: 1 1 auto;
  }

  .accordion__subtitle {
    color: var(--koerber-color-text-tertiary);
    font-size: var(--koerber-text-sm-font-size);
  }

  .accordion--large .accordion__subtitle {
    font-size: var(--koerber-text-base-font-size);
  }

  ::slotted(koerber-checkbox[slot='prefix-content']) {
    display: flex;
    padding: 0.25rem; /* 4px */
  }

  ::slotted(koerber-button[slot='suffix-content']) {
    --koerber-spacing-s: 0.4375rem; /* 7px */
  }

  /** Interaction States */
  .accordion:not(.accordion--disabled) .accordion__header:hover {
    background-color: var(--koerber-color-bg-surface-secondary-hover);
    color: var(--koerber-color-text);
  }

  .accordion:not(.accordion--disabled) .accordion__body:hover {
    background-color: var(--koerber-color-bg-surface-secondary-hover);
  }

  .accordion:not(.accordion--disabled) .accordion__header:focus {
    background-color: var(--koerber-color-bg);
    color: var(--koerber-color-text);
    border: var(--koerber-border-width-m) solid var(--koerber-color-border-hover);
  }

  .accordion:not(.accordion--disabled) .accordion__header:active {
    background-color: var(--koerber-color-bg-alt);
    color: var(--koerber-color-text);
  }

  .accordion:not(.accordion--disabled) .accordion.accordion--open .accordion__header {
    background-color: var(--koerber-color-bg-alt);
    color: var(--koerber-color-text);
  }
`;var uikit_element=__webpack_require__("./src/internal/uikit-element.ts"),__decorate=function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r};class accordion_component_Accordion extends uikit_element.Z{constructor(){super(...arguments),this.localize=new localize.V(this),this.hasSlotController=new slot.rc(this,"[default]","prefix-content","suffix-content"),this.open=!1,this.disabled=!1,this.size="medium",this.direction="left"}firstUpdated(){this.body.hidden=!this.open,this.body.style.height=this.open?"auto":"0"}handleSummaryClick(event){event.target.closest("koerber-checkbox")||this.disabled||(this.open?this.hide():this.show(),this.header.focus())}handleSummaryKeyDown(event){"Enter"!==event.key&&" "!==event.key||(event.preventDefault(),this.open?this.hide():this.show()),"ArrowUp"!==event.key&&"ArrowLeft"!==event.key||(event.preventDefault(),this.hide()),"ArrowDown"!==event.key&&"ArrowRight"!==event.key||(event.preventDefault(),this.show())}async handleOpenChange(){if(this.open){if(this.emit("koerber-show",{cancelable:!0}).defaultPrevented)return void(this.open=!1);await(0,animate.U_)(this.body),this.body.hidden=!1;const{keyframes,options}=(0,animation_registry.O8)(this,"accordion.show",{dir:this.localize.dir()});await(0,animate.nv)(this.body,(0,animate.GH)(keyframes,this.body.scrollHeight),options),this.body.style.height="auto",this.emit("koerber-after-show")}else{if(this.emit("koerber-hide",{cancelable:!0}).defaultPrevented)return void(this.open=!0);await(0,animate.U_)(this.body);const{keyframes,options}=(0,animation_registry.O8)(this,"accordion.hide",{dir:this.localize.dir()});await(0,animate.nv)(this.body,(0,animate.GH)(keyframes,this.body.scrollHeight),options),this.body.hidden=!0,this.body.style.height="auto",this.emit("koerber-after-hide")}}async show(){if(!this.open&&!this.disabled)return this.open=!0,(0,internal_event.m)(this,"koerber-after-show")}async hide(){if(this.open&&!this.disabled)return this.open=!1,(0,internal_event.m)(this,"koerber-after-hide")}render(){const isRtl="rtl"===this.localize.dir(),summary_icon_part=lit.dy`
      <span part="summary-icon" class="accordion__summary-icon">
        <slot name="expand-icon">
          <koerber-icon library="system" name="chevron-down"></koerber-icon>
        </slot>
        <slot name="collapse-icon">
          <koerber-icon library="system" name="chevron-down"></koerber-icon>
        </slot>
      </span>
    `;return lit.dy`
      <div
        part="base"
        class=${(0,class_map.$)({accordion:!0,"accordion--open":this.open,"accordion--disabled":this.disabled,"accordion--rtl":isRtl,[`accordion--${this.size}`]:!0})}
      >
        <div
          part="header"
          id="header"
          class=${(0,class_map.$)({accordion__header:!0,[`accordion__header--${this.size}`]:!0})}
          role="button"
          aria-expanded=${this.open?"true":"false"}
          aria-controls="content"
          aria-disabled=${this.disabled?"true":"false"}
          aria-label="Expand/Collapse"
          tabindex=${this.disabled?"-1":"0"}
          @click=${this.handleSummaryClick}
          @keydown=${this.handleSummaryKeyDown}
        >
          ${"left"===this.direction?summary_icon_part:""}

          <slot name="prefix" part="prefix-side" class="accordion__title__prefix"></slot>

          <div part="body-summary" class="accordion__body-summary">
            <slot name="summary" part="summary" class="accordion__summary">${this.summary}</slot>
            <slot name="subtitle" part="subtitle" class="accordion__subtitle">${this.subtitle}</slot>
          </div>

          <slot name="suffix" part="suffix-side" class="accordion__title__suffix"></slot>

          ${"right"===this.direction?summary_icon_part:""}
        </div>

        <div
          class=${(0,class_map.$)({accordion__body:!0,[`accordion__body--${this.size}`]:!0})}
          role="region"
          aria-labelledby="header"
        >
          <slot name="prefix-content" part="prefix-content" class="accordion__body__prefix-content"></slot>
          <slot
            part="content"
            id="content"
            class=${(0,class_map.$)({accordion__content:!0})}
          >
          </slot>
          ${this.hasSlotController.test("suffix-content")?lit.dy`<div part="suffix-content" class="accordion__body__suffix-content">
                <slot name="suffix-content"></slot>
              </div>`:""}
        </div>
      </div>
    `}}accordion_component_Accordion.styles=[component_styles.Z,accordion_styles],accordion_component_Accordion.dependencies={"koerber-icon":icon_component.Z};const accordion_component=accordion_component_Accordion;__decorate([(0,decorators.IO)(".accordion")],accordion_component_Accordion.prototype,"accordion",void 0),__decorate([(0,decorators.IO)(".accordion__header")],accordion_component_Accordion.prototype,"header",void 0),__decorate([(0,decorators.IO)(".accordion__body")],accordion_component_Accordion.prototype,"body",void 0),__decorate([(0,decorators.IO)(".accordion__expand-icon-slot")],accordion_component_Accordion.prototype,"expandIconSlot",void 0),__decorate([(0,decorators.Cb)({type:Boolean,reflect:!0})],accordion_component_Accordion.prototype,"open",void 0),__decorate([(0,decorators.Cb)()],accordion_component_Accordion.prototype,"summary",void 0),__decorate([(0,decorators.Cb)()],accordion_component_Accordion.prototype,"subtitle",void 0),__decorate([(0,decorators.Cb)({type:Boolean,reflect:!0})],accordion_component_Accordion.prototype,"disabled",void 0),__decorate([(0,decorators.Cb)({reflect:!0})],accordion_component_Accordion.prototype,"size",void 0),__decorate([(0,decorators.Cb)({reflect:!0})],accordion_component_Accordion.prototype,"direction",void 0),__decorate([(0,watch.Y)("open",{waitUntilFirstUpdate:!0})],accordion_component_Accordion.prototype,"handleOpenChange",null),(0,animation_registry.jx)("accordion.show",{keyframes:[{height:"0",opacity:"0"},{height:"auto",opacity:"1"}],options:{duration:250,easing:"linear"}}),(0,animation_registry.jx)("accordion.hide",{keyframes:[{height:"auto",opacity:"1"},{height:"0",opacity:"0"}],options:{duration:250,easing:"linear"}});accordion_component.define("koerber-accordion");var dist=__webpack_require__("./node_modules/@shoelace-style/localize/dist/index.js"),button_component=__webpack_require__("./src/components/button/button.component.ts");const alert_styles=lit.iv`
  :host {
    display: contents;

    /* For better DX, we'll reset the margin here so the base part can inherit it */
    margin: 0;
  }

  .alert {
    position: relative;
    display: flex;
    align-items: stretch;
    gap: var(--koerber-spacing-xs);
    background-color: var(--koerber-color-bg-fill-alt);
    border-radius: var(--koerber-border-radius-small);
    font-family: var(--koerber-font-family-default);
    font-size: var(--koerber-text-base-font-size);
    font-weight: var(--koerber-font-weight-normal);
    line-height: var(--koerber-text-base-line-height);
    color: var(--koerber-color-text-bg-fill);
    margin: inherit;
    padding: var(--koerber-spacing-xs) var(--koerber-spacing-s);
    min-height: var(--koerber-spacing-xl);
  }

  .alert--multiline {
    align-items: flex-start;
  }

  .alert--info {
    background-color: var(--koerber-color-bg-fill-info);
    color: var(--koerber-color-text-bg-fill);
  }

  .alert--info .alert__icon {
    color: var(--koerber-color-text-bg-fill);
  }

  .alert--success {
    background-color: var(--koerber-color-bg-fill-success);
    color: var(--koerber-color-text);
  }

  .alert--success .alert__icon {
    color: var(--koerber-color-text);
  }

  .alert--warning {
    background-color: var(--koerber-color-sema1);
    color: var(--koerber-color-text);
  }

  .alert--warning .alert__icon {
    color: var(--koerber-color-text);
  }

  .alert--danger {
    background-color: var(--koerber-color-sema2);
    color: var(--koerber-color-text-bg-fill);
  }

  .alert--danger .alert__icon {
    color: var(--koerber-color-text-bg-fill);
  }

  .alert--alt-info {
    background-color: var(--koerber-color-bg-fill-alt);
    color: var(--koerber-color-text-bg-fill);
  }

  .alert--alt-info .alert__icon {
    color: var(--koerber-color-bg-fill-info);
  }

  .alert--alt-success {
    background-color: var(--koerber-color-bg-fill-alt);
    color: var(--koerber-color-text-bg-fill);
  }

  .alert--alt-success .alert__icon {
    color: var(--koerber-color-bg-fill-success);
  }

  .alert--alt-warning {
    background-color: var(--koerber-color-bg-fill-alt);
    color: var(--koerber-color-text-bg-fill);
  }

  .alert--alt-warning .alert__icon {
    color: var(--koerber-color-bg-fill-warning);
  }

  .alert--alt-danger {
    background-color: var(--koerber-color-bg-fill-alt);
    color: var(--koerber-color-text-bg-fill);
  }

  .alert--alt-danger .alert__icon {
    color: var(--koerber-color-bg-fill-error);
  }

  .alert__body-container {
    flex: 1 1 auto;
    display: flex;
    align-items: flex-start;
    gap: var(--koerber-spacing-xs);
  }

  .alert__body-container-multiline {
    flex-direction: column;
  }

  .alert__icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--koerber-text-xl-font-size);
  }

  .alert__icon__multiline {
    sex: yes;
  }

  .alert__message {
    flex: 1 1 auto;
    display: block;
    align-self: center;
  }

  .multiline {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-box-pack: center;
    -webkit-line-clamp: 3;
    overflow: hidden;
  }

  .footer--active {
    align-self: start;
  }

  .alert__close-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--koerber-text-md-font-size);
  }

  /* OVerride Button Interaction States */
  .alert--info ::slotted(koerber-button[slot='action']),
  .alert--danger ::slotted(koerber-button[slot='action']),
  .alert--alt-info ::slotted(koerber-button[slot='action']),
  .alert--alt-danger ::slotted(koerber-button[slot='action']),
  .alert--alt-success ::slotted(koerber-button[slot='action']),
  .alert--alt-warning ::slotted(koerber-button[slot='action']) {
    --koerber-color-bg-fill: var(--koerber-color-text-bg-fill);
    --koerber-color-bg-fill-hover: var(--koerber-color-text-bg-fill);
    --koerber-color-bg-fill-pressed: var(--koerber-color-text-bg-fill);
  }

  .alert--info ::slotted(koerber-link[slot='action']),
  .alert--danger ::slotted(koerber-link[slot='action']),
  .alert--info ::slotted(koerber-link[slot='action']),
  .alert--danger ::slotted(koerber-link[slot='action']),
  .alert--info ::slotted(koerber-link[slot='action']),
  .alert--danger ::slotted(koerber-link[slot='action']),
  .alert--alt-info ::slotted(koerber-link[slot='action']),
  .alert--alt-danger ::slotted(koerber-link[slot='action']),
  .alert--alt-success ::slotted(koerber-link[slot='action']),
  .alert--alt-warning ::slotted(koerber-link[slot='action']),
  .alert--info ::slotted(koerber-link[slot='expand']),
  .alert--danger ::slotted(koerber-link[slot='expand']),
  .alert--info ::slotted(koerber-link[slot='expand']),
  .alert--danger ::slotted(koerber-link[slot='expand']),
  .alert--info ::slotted(koerber-link[slot='expand']),
  .alert--danger ::slotted(koerber-link[slot='expand']),
  .alert--alt-info ::slotted(koerber-link[slot='expand']),
  .alert--alt-danger ::slotted(koerber-link[slot='expand']),
  .alert--alt-success ::slotted(koerber-link[slot='expand']),
  .alert--alt-warning ::slotted(koerber-link[slot='expand']) {
    --koerber-color-text-link: var(--koerber-color-text-bg-fill);
    --koerber-color-text-link-hover: var(--koerber-color-text-bg-fill);
    --koerber-color-text-link-visited: var(--koerber-color-text-bg-fill);
  }

  .alert--success ::slotted(koerber-button[slot='action']),
  .alert--warning ::slotted(koerber-button[slot='action']) {
    --koerber-color-bg-fill: var(--koerber-color-text);
    --koerber-color-bg-fill-hover: var(--koerber-color-text);
    --koerber-color-bg-fill-pressed: var(--koerber-color-text);
  }

  .alert--success ::slotted(koerber-link[slot='action']),
  .alert--warning ::slotted(koerber-link[slot='action']),
  .alert--success ::slotted(koerber-link[slot='expand']),
  .alert--warning ::slotted(koerber-link[slot='expand']) {
    --koerber-color-text-link: var(--koerber-color-text);
    --koerber-color-text-link-hover: var(--koerber-color-text);
    --koerber-color-text-link-visited: var(--koerber-color-text);
  }

  koerber-button.alert__close-button::part(base) {
    color: inherit;
  }

  .alert--multiline koerber-button.alert__close-button::part(base) {
    height: 0;
    padding-right: 0;
  }

  .alert__actions,
  .alert__expand {
    gap: var(--koerber-spacing-xs);
    display: flex;
    align-items: center;
  }

  .alert__actions_multiline,
  .alert__expand_multiline {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  koerber-link::part(label) {
    color: inherit;
  }

  .alert__content-container {
    flex: 1 1 auto;
    display: flex;
    height: 100%;
    gap: var(--koerber-spacing-xs);
  }
`;var alert_component_decorate=function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r};const toastStack=Object.assign(document.createElement("div"),{className:"koerber-toast-stack"});class alert_component_Alert extends uikit_element.Z{constructor(){super(...arguments),this.hasSlotController=new slot.rc(this,"[default]","icon","action-primary","action-secondary"),this.localize=new dist.Ve(this),this.isTextOverflowing=!1,this.open=!1,this.closable=!1,this.variant="info",this.actionsPlacement="inline",this.duration=1/0}firstUpdated(){var _a;this.base.hidden=!this.open;const textContainer=null===(_a=this.shadowRoot)||void 0===_a?void 0:_a.querySelector(".multiline"),observer=new ResizeObserver((()=>{textContainer&&textContainer.scrollHeight>textContainer.clientHeight?(this.isTextOverflowing=!0,this.emit("koerber-show")):this.isTextOverflowing&&(this.isTextOverflowing=!1,this.emit("koerber-hide"))}));textContainer&&observer.observe(textContainer)}restartAutoHide(){clearTimeout(this.autoHideTimeout),this.open&&this.duration<1/0&&(this.autoHideTimeout=window.setTimeout((()=>this.hide()),this.duration))}handleCloseClick(){this.hide()}handleMouseMove(){this.restartAutoHide()}async toast(){return new Promise((resolve=>{var _a;if(this.classList.contains("koerber-alert-child")){const childAlert=null===(_a=this.shadowRoot)||void 0===_a?void 0:_a.querySelector(".alert");return childAlert.style.position="absolute",childAlert.style.bottom="var(--koerber-toast-stack-spacing)",childAlert.style.right="0",childAlert.style.width="100%",void(this.open||this.show())}null===toastStack.parentElement&&document.body.append(toastStack),toastStack.appendChild(this),requestAnimationFrame((()=>{this.clientWidth,this.show()})),this.addEventListener("koerber-after-hide",(()=>{toastStack.removeChild(this),resolve(),null===toastStack.querySelector("koerber-alert")&&toastStack.remove()}),{once:!0})}))}async handleOpenChange(){if(this.open){this.emit("koerber-show"),this.duration<1/0&&this.restartAutoHide(),await(0,animate.U_)(this.base),this.base.hidden=!1;const{keyframes,options}=(0,animation_registry.O8)(this,"alert.show",{dir:this.localize.dir()});await(0,animate.nv)(this.base,keyframes,options),this.emit("koerber-after-show")}else{this.emit("koerber-hide"),clearTimeout(this.autoHideTimeout),await(0,animate.U_)(this.base);const{keyframes,options}=(0,animation_registry.O8)(this,"alert.hide",{dir:this.localize.dir()});await(0,animate.nv)(this.base,keyframes,options),this.base.hidden=!0,this.emit("koerber-after-hide")}}handleDurationChange(){this.restartAutoHide()}async show(){return this.open=!0,(0,internal_event.m)(this,"koerber-after-show")}async hide(){return this.open=!1,(0,internal_event.m)(this,"koerber-after-hide")}render(){return lit.dy`
      <div
        part="base"
        class=${(0,class_map.$)({alert:!0,"alert--multiline":"footer"===this.actionsPlacement,"alert--open":this.open,"alert--closable":this.closable,[`alert--${this.variant}`]:!0})}
        role="alert"
        aria-hidden=${this.open?"false":"true"}
        @mousemove=${this.handleMouseMove}
      >
        <div
          class=${(0,class_map.$)({"alert__body-container":!0,"alert__body-container-multiline":"footer"===this.actionsPlacement})}
        >
          <div
            class=${(0,class_map.$)({"alert__content-container":!0,"alert__content-container-multiline":"footer"===this.actionsPlacement})}
          >
            ${this.hasSlotController.test("icon")?lit.dy`
                  <slot
                    name="icon"
                    class=${(0,class_map.$)({alert__icon:!0,alert__icon__multiline:"footer"===this.actionsPlacement})}
                  ></slot>
                `:""}
            <div
              part="message"
              class=${(0,class_map.$)({alert__message:!0,multiline:!0,"footer--active":"footer"===this.actionsPlacement})}
              aria-live="polite"
            >
              <slot></slot>
            </div>
          </div>
          <div
            part="expand"
            class=${(0,class_map.$)({alert__expand:!0,alert__expand_multiline:"footer"===this.actionsPlacement})}
          >
            <slot name="expand"></slot>
          </div>
          <div
            part="actions"
            class=${(0,class_map.$)({alert__actions:!0,alert__actions_multiline:"footer"===this.actionsPlacement})}
          >
            <slot name="action"></slot>
          </div>
        </div>

        ${this.closable?lit.dy`
              <koerber-button
                part="close-button"
                exportparts="base:close-button__base"
                class="alert__close-button"
                aria-label=${this.localize.term("close")}
                name=${this.localize.term("close")}
                label=${this.localize.term("close")}
                @click=${this.handleCloseClick}
                icon-only
                variant="ghost"
                icon="close"
              >
                <koerber-icon name="close"></koerber-icon>
              </koerber-button>
            `:""}
      </div>
    `}}alert_component_Alert.styles=[component_styles.Z,alert_styles],alert_component_Alert.dependencies={"koerber-button":button_component.Z};const alert_component=alert_component_Alert;alert_component_decorate([(0,decorators.IO)('[part~="base"]')],alert_component_Alert.prototype,"base",void 0),alert_component_decorate([(0,decorators.SB)()],alert_component_Alert.prototype,"isTextOverflowing",void 0),alert_component_decorate([(0,decorators.Cb)({type:Boolean,reflect:!0})],alert_component_Alert.prototype,"open",void 0),alert_component_decorate([(0,decorators.Cb)({type:Boolean,reflect:!0})],alert_component_Alert.prototype,"closable",void 0),alert_component_decorate([(0,decorators.Cb)({reflect:!0})],alert_component_Alert.prototype,"variant",void 0),alert_component_decorate([(0,decorators.Cb)({attribute:"actions-placement"})],alert_component_Alert.prototype,"actionsPlacement",void 0),alert_component_decorate([(0,decorators.Cb)({type:Number})],alert_component_Alert.prototype,"duration",void 0),alert_component_decorate([(0,watch.Y)("open",{waitUntilFirstUpdate:!0})],alert_component_Alert.prototype,"handleOpenChange",null),alert_component_decorate([(0,watch.Y)("duration")],alert_component_Alert.prototype,"handleDurationChange",null),(0,animation_registry.jx)("alert.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}}),(0,animation_registry.jx)("alert.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}});alert_component.define("koerber-alert");var animations_dist=__webpack_require__("./node_modules/@shoelace-style/animations/dist/index.js");const animation_styles=lit.iv`
  :host {
    display: contents;
  }
`;var animation_component_decorate=function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r};class KoerberAnimation extends uikit_element.Z{constructor(){super(...arguments),this.hasStarted=!1,this.name="none",this.play=!1,this.delay=0,this.direction="normal",this.duration=1e3,this.easing="linear",this.endDelay=0,this.fill="auto",this.iterations=1/0,this.iterationStart=0,this.playbackRate=1}get currentTime(){var _a,_b;return null!==(_b=null===(_a=this.animation)||void 0===_a?void 0:_a.currentTime)&&void 0!==_b?_b:0}set currentTime(time){this.animation&&(this.animation.currentTime=time)}connectedCallback(){super.connectedCallback(),this.createAnimation(),this.handleAnimationCancel=this.handleAnimationCancel.bind(this),this.handleAnimationFinish=this.handleAnimationFinish.bind(this)}disconnectedCallback(){super.disconnectedCallback(),this.destroyAnimation()}handleAnimationFinish(){this.play=!1,this.hasStarted=!1,this.emit("koerber-finish")}handleAnimationCancel(){this.play=!1,this.hasStarted=!1,this.emit("koerber-cancel")}handleSlotChange(){this.destroyAnimation(),this.createAnimation()}async createAnimation(){var _a,_b;const easing=null!==(_a=animations_dist.easings[this.easing])&&void 0!==_a?_a:this.easing,keyframes=null!==(_b=this.keyframes)&&void 0!==_b?_b:animations_dist[this.name],element=(await this.defaultSlot).assignedElements()[0];return!(!element||!keyframes)&&(this.destroyAnimation(),this.animation=element.animate(keyframes,{delay:this.delay,direction:this.direction,duration:this.duration,easing,endDelay:this.endDelay,fill:this.fill,iterationStart:this.iterationStart,iterations:this.iterations}),this.animation.playbackRate=this.playbackRate,this.animation.addEventListener("cancel",this.handleAnimationCancel),this.animation.addEventListener("finish",this.handleAnimationFinish),this.play?(this.hasStarted=!0,this.emit("koerber-start")):this.animation.pause(),!0)}destroyAnimation(){this.animation&&(this.animation.cancel(),this.animation.removeEventListener("cancel",this.handleAnimationCancel),this.animation.removeEventListener("finish",this.handleAnimationFinish),this.hasStarted=!1)}handleAnimationChange(){this.hasUpdated&&this.createAnimation()}handlePlayChange(){return!!this.animation&&(this.play&&!this.hasStarted&&(this.hasStarted=!0,this.emit("koerber-start")),this.play?this.animation.play():this.animation.pause(),!0)}handlePlaybackRateChange(){this.animation&&(this.animation.playbackRate=this.playbackRate)}cancel(){var _a;null===(_a=this.animation)||void 0===_a||_a.cancel()}finish(){var _a;null===(_a=this.animation)||void 0===_a||_a.finish()}render(){return lit.dy` <slot @slotchange=${this.handleSlotChange}></slot> `}}KoerberAnimation.styles=[component_styles.Z,animation_styles];const animation_component=KoerberAnimation;animation_component_decorate([(0,decorators.GC)("slot")],KoerberAnimation.prototype,"defaultSlot",void 0),animation_component_decorate([(0,decorators.Cb)()],KoerberAnimation.prototype,"name",void 0),animation_component_decorate([(0,decorators.Cb)({type:Boolean,reflect:!0})],KoerberAnimation.prototype,"play",void 0),animation_component_decorate([(0,decorators.Cb)({type:Number})],KoerberAnimation.prototype,"delay",void 0),animation_component_decorate([(0,decorators.Cb)()],KoerberAnimation.prototype,"direction",void 0),animation_component_decorate([(0,decorators.Cb)({type:Number})],KoerberAnimation.prototype,"duration",void 0),animation_component_decorate([(0,decorators.Cb)()],KoerberAnimation.prototype,"easing",void 0),animation_component_decorate([(0,decorators.Cb)({attribute:"end-delay",type:Number})],KoerberAnimation.prototype,"endDelay",void 0),animation_component_decorate([(0,decorators.Cb)()],KoerberAnimation.prototype,"fill",void 0),animation_component_decorate([(0,decorators.Cb)({type:Number})],KoerberAnimation.prototype,"iterations",void 0),animation_component_decorate([(0,decorators.Cb)({attribute:"iteration-start",type:Number})],KoerberAnimation.prototype,"iterationStart",void 0),animation_component_decorate([(0,decorators.Cb)({attribute:!1})],KoerberAnimation.prototype,"keyframes",void 0),animation_component_decorate([(0,decorators.Cb)({attribute:"playback-rate",type:Number})],KoerberAnimation.prototype,"playbackRate",void 0),animation_component_decorate([(0,watch.Y)(["name","delay","direction","duration","easing","endDelay","fill","iterations","iterationsStart","keyframes"])],KoerberAnimation.prototype,"handleAnimationChange",null),animation_component_decorate([(0,watch.Y)("play")],KoerberAnimation.prototype,"handlePlayChange",null),animation_component_decorate([(0,watch.Y)("playbackRate")],KoerberAnimation.prototype,"handlePlaybackRateChange",null);animation_component.define("koerber-animation");__webpack_require__("./src/components/avatar/avatar.ts"),__webpack_require__("./src/components/badge/badge.ts");var if_defined=__webpack_require__("./node_modules/lit/directives/if-defined.js");const breadcrumb_item_styles=lit.iv`
  :host {
    display: inline-flex;
  }

  .breadcrumb-item {
    display: inline-flex;
    align-items: center;
    font-family: var(--koerber-font-family-default);
    font-size: var(--koerber-text-base-font-size);
    font-weight: var(--koerber-font-weight-regular);
    color: var(--koerber-color-text-link);
    line-height: var(--koerber-text-lg-line-height);
    white-space: nowrap;
  }

  .breadcrumb-item__label {
    display: inline-block;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: inherit;
    text-decoration: none;
    color: inherit;
    background: none;
    border: none;
    border-radius: var(--koerber-border-radius-medium);
    padding: 0;
    margin: 0;
    transition: var(--koerber-transition-fast) --color;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    max-lines: 1;
  }

  :host(:not(:last-of-type)) .breadcrumb-item__label {
    color: var(--koerber-color-text-secondary);
  }

  :host(:not(:last-of-type)) .breadcrumb-item__separator {
    color: var(--koerber-color-text-secondary);
  }

  :host(:not(:last-of-type)) .breadcrumb-item__label:hover {
    color: var(--koerber-color-text-link-hover);
  }

  :host(:not(:last-of-type)) .breadcrumb-item__label:active {
    color: var(--koerber-color-text-link-pressed);
  }

  .breadcrumb-item__label:focus {
    outline: none;
  }

  .breadcrumb-item__label:focus-visible {
    outline: solid var(--koerber-border-width-m) var(--koerber-color-bg-fill);
    outline-offset: var(--koerber-border-offset);
  }

  .breadcrumb-item__prefix,
  .breadcrumb-item__suffix {
    display: none;
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .breadcrumb-item--has-prefix .breadcrumb-item__prefix {
    display: inline-flex;
    margin-inline-end: var(--koerber-spacing-2xs);
  }

  .breadcrumb-item--has-suffix .breadcrumb-item__suffix {
    display: inline-flex;
    margin-inline-start: var(--koerber-spacing-2xs);
  }

  :host(:last-of-type) .breadcrumb-item__separator {
    display: none;
  }

  .breadcrumb-item__separator {
    display: inline-flex;
    align-items: center;
    margin: 0 var(--koerber-spacing-2xs);
    user-select: none;
  }
`;var breadcrumb_item_component_decorate=function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r};class breadcrumb_item_component_BreadcrumbItem extends uikit_element.Z{constructor(){super(...arguments),this.hasSlotController=new slot.rc(this,"prefix","suffix"),this.isTextOverflowing=!1,this.maxWidth=0,this.rel="noreferrer noopener",this.isActive=!1}connectedCallback(){super.connectedCallback(),this.updateComplete.then((()=>{this.resizeObserver.observe(this.labelContentSlot)}))}updated(_changedProperties){_changedProperties.has("isTextOverflowing")&&this.attachOverflowObserver()}attachOverflowObserver(){this.resizeObserver&&this.resizeObserver.disconnect(),this.resizeObserver=new ResizeObserver((()=>this.checkIfTextIsTruncated())),this.updateComplete.then((()=>{this.resizeObserver.observe(this.labelContentSlot)}))}checkIfTextIsTruncated(){return this.labelContentSlot&&(this.labelContentSlot.scrollWidth>this.labelContentSlot.clientWidth?this.isTextOverflowing=!0:this.isTextOverflowing=!1),this.isTextOverflowing}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver.disconnect()}getTextContentExcludingSlots(){return Array.from(this.childNodes).filter((node=>{var _a;return node.nodeType===Node.TEXT_NODE&&""!==(null===(_a=node.textContent)||void 0===_a?void 0:_a.trim())})).map((node=>{var _a;return null===(_a=node.textContent)||void 0===_a?void 0:_a.trim()})).join(" ")}render(){const isLink=!!this.href,textContent=this.getTextContentExcludingSlots(),content=this.isActive?lit.dy`
          <span id="breadcrumb-item" part="label" class="breadcrumb-item__label">
            <slot></slot>
          </span>
        `:isLink?lit.dy`
            <a
              id="breadcrumb-item"
              part="label"
              class="breadcrumb-item__label breadcrumb-item__label--link"
              href="${this.href}"
              target="${(0,if_defined.o)(this.target?this.target:void 0)}"
              rel=${(0,if_defined.o)(this.target?this.rel:void 0)}
            >
              <slot></slot>
            </a>
          `:lit.dy`
            <button
              id="breadcrumb-item"
              part="label"
              type="button"
              class="breadcrumb-item__label breadcrumb-item__label--button"
            >
              <slot></slot>
            </button>
          `;return lit.dy`
      <style>
        .breadcrumb-item__label {
          max-width: ${this.maxWidth>0?`${this.maxWidth}px`:"100%"};
        }
      </style>
      <div
        part="base"
        class=${(0,class_map.$)({"breadcrumb-item":!0,"breadcrumb-item--has-prefix":this.hasSlotController.test("prefix"),"breadcrumb-item--has-suffix":this.hasSlotController.test("suffix")})}
      >
        ${this.isTextOverflowing?lit.dy` <koerber-tooltip hoist content=${(0,if_defined.o)(textContent)}>${content}</koerber-tooltip> `:lit.dy` ${content} `}

        <slot name="separator" part="separator" class="breadcrumb-item__separator" aria-hidden="true"></slot>
      </div>
    `}}breadcrumb_item_component_BreadcrumbItem.styles=[component_styles.Z,breadcrumb_item_styles];const breadcrumb_item_component=breadcrumb_item_component_BreadcrumbItem;breadcrumb_item_component_decorate([(0,decorators.SB)()],breadcrumb_item_component_BreadcrumbItem.prototype,"isTextOverflowing",void 0),breadcrumb_item_component_decorate([(0,decorators.Cb)({type:Number,attribute:"max-width"})],breadcrumb_item_component_BreadcrumbItem.prototype,"maxWidth",void 0),breadcrumb_item_component_decorate([(0,decorators.Cb)()],breadcrumb_item_component_BreadcrumbItem.prototype,"href",void 0),breadcrumb_item_component_decorate([(0,decorators.Cb)()],breadcrumb_item_component_BreadcrumbItem.prototype,"target",void 0),breadcrumb_item_component_decorate([(0,decorators.Cb)()],breadcrumb_item_component_BreadcrumbItem.prototype,"rel",void 0),breadcrumb_item_component_decorate([(0,decorators.Cb)({type:Boolean,attribute:"active"})],breadcrumb_item_component_BreadcrumbItem.prototype,"isActive",void 0),breadcrumb_item_component_decorate([(0,decorators.IO)(".breadcrumb-item__label")],breadcrumb_item_component_BreadcrumbItem.prototype,"labelContentSlot",void 0);breadcrumb_item_component.define("koerber-breadcrumb-item");const breadcrumb_styles=lit.iv`
  .breadcrumb {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
`;var breadcrumb_component_decorate=function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r};class breadcrumb_component_Breadcrumb extends uikit_element.Z{constructor(){super(...arguments),this.localize=new localize.V(this),this.separatorDir=this.localize.dir(),this.label=""}getSeparator(){const clone=this.separatorSlot.assignedElements({flatten:!0})[0].cloneNode(!0);return[clone,...clone.querySelectorAll("[id]")].forEach((el=>el.removeAttribute("id"))),clone.setAttribute("data-default",""),clone.slot="separator",clone}handleSlotChange(){const items=[...this.defaultSlot.assignedElements({flatten:!0})].filter((item=>"koerber-breadcrumb-item"===item.tagName.toLowerCase()));items.forEach(((item,index)=>{const separator=item.querySelector('[slot="separator"]');null===separator?item.append(this.getSeparator()):separator.hasAttribute("data-default")&&separator.replaceWith(this.getSeparator()),index===items.length-1?item.setAttribute("aria-current","page"):item.removeAttribute("aria-current")}))}render(){return this.separatorDir!==this.localize.dir()&&(this.separatorDir=this.localize.dir(),this.updateComplete.then((()=>this.handleSlotChange()))),lit.dy`
      <nav part="base" class="breadcrumb" aria-label=${this.label}>
        <slot @slotchange=${this.handleSlotChange}></slot>
      </nav>

      <slot name="separator" hidden aria-hidden="true">
        <koerber-icon
          name=${"rtl"===this.localize.dir()?"chevron-left":"chevron-right"}
          library="system"
        ></koerber-icon>
      </slot>
    `}}breadcrumb_component_Breadcrumb.styles=[component_styles.Z,breadcrumb_styles],breadcrumb_component_Breadcrumb.dependencies={"koerber-icon":icon_component.Z};const breadcrumb_component=breadcrumb_component_Breadcrumb;breadcrumb_component_decorate([(0,decorators.IO)("slot")],breadcrumb_component_Breadcrumb.prototype,"defaultSlot",void 0),breadcrumb_component_decorate([(0,decorators.IO)('slot[name="separator"]')],breadcrumb_component_Breadcrumb.prototype,"separatorSlot",void 0),breadcrumb_component_decorate([(0,decorators.Cb)()],breadcrumb_component_Breadcrumb.prototype,"label",void 0);breadcrumb_component.define("koerber-breadcrumb");const button_group_styles=lit.iv`
  :host {
    display: inline-block;
  }

  .button-group {
    display: flex;
    flex-wrap: nowrap;
  }
`;var button_group_component_decorate=function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r};class button_group_component_ButtonGroup extends uikit_element.Z{constructor(){super(...arguments),this.disableRole=!1,this.label="",this.split=!1}handleFocus(event){const button=findButton(event.target);null==button||button.classList.add("koerber-button-group__button--focus")}handleBlur(event){const button=findButton(event.target);null==button||button.classList.remove("koerber-button-group__button--focus")}handleMouseOver(event){const button=findButton(event.target);null==button||button.classList.add("koerber-button-group__button--hover")}handleMouseOut(event){const button=findButton(event.target);null==button||button.classList.remove("koerber-button-group__button--hover")}handleSlotChange(){const slottedElements=[...this.defaultSlot.assignedElements({flatten:!0})];slottedElements.forEach((el=>{const index=slottedElements.indexOf(el),button=findButton(el);null!==button&&(button.classList.add("koerber-button-group__button"),button.classList.toggle("koerber-button-group__button--first",0===index),button.classList.toggle("koerber-button-group__button--inner",index>0&&index<slottedElements.length-1),button.classList.toggle("koerber-button-group__button--split",this.split&&index>=0&&index<slottedElements.length-1),button.classList.toggle("koerber-button-group__button--last",index===slottedElements.length-1),button.classList.toggle("koerber-button-group__button--radio","koerber-radio-button"===button.tagName.toLowerCase()))}))}render(){return lit.dy`
      <slot
        part="base"
        class="button-group"
        role="${this.disableRole?"presentation":"group"}"
        aria-label=${this.label}
        @focusout=${this.handleBlur}
        @focusin=${this.handleFocus}
        @mouseover=${this.handleMouseOver}
        @mouseout=${this.handleMouseOut}
        @slotchange=${this.handleSlotChange}
      ></slot>
    `}}button_group_component_ButtonGroup.styles=[component_styles.Z,button_group_styles];const button_group_component=button_group_component_ButtonGroup;function findButton(el){var _a;const selector="koerber-button, koerber-radio-button";return null!==(_a=el.closest(selector))&&void 0!==_a?_a:el.querySelector(selector)}button_group_component_decorate([(0,decorators.IO)("slot")],button_group_component_ButtonGroup.prototype,"defaultSlot",void 0),button_group_component_decorate([(0,decorators.SB)()],button_group_component_ButtonGroup.prototype,"disableRole",void 0),button_group_component_decorate([(0,decorators.Cb)()],button_group_component_ButtonGroup.prototype,"label",void 0),button_group_component_decorate([(0,decorators.Cb)({type:Boolean})],button_group_component_ButtonGroup.prototype,"split",void 0);button_group_component.define("koerber-button-group");__webpack_require__("./src/components/button/button.ts"),__webpack_require__("./src/components/card/card.ts"),__webpack_require__("./src/components/checkbox/checkbox.ts");var live=__webpack_require__("./node_modules/lit/directives/live.js");const chip_styles=lit.iv`
  :host {
    display: inline-block;
    vertical-align: middle;
    --koerber-chip-size-small: 20px;
    --koerber-chip-size-medium: 24px;
    --koerber-chip-size-large: 32px;
  }

  .chip--container {
    display: flex;
    align-items: center;
    gap: var(--koerber-spacing-s);
  }

  .chip {
    display: inline-flex;
    padding: 2px var(--koerber-spacing-xs);
    gap: var(--koerber-spacing-xs);
    border-radius: var(--koerber-border-radius-pill);
    white-space: nowrap;
    user-select: none;
    font-family: var(--koerber-font-family-default);
    font-style: normal;
  }

  .chip--text {
    font-size: var(--koerber-text-base-font-size);
    font-style: normal;
    font-family: var(--koerber-font-family-default);
    line-height: var(--koerber-text-base-line-height);
  }

  .chip--text.chip--large {
    font-size: var(--koerber-text-md-font-size);
    line-height: var(--koerber-text-lg-line-height);
  }

  /** Restore outline in chromium browsers */
  *:focus {
    outline: none;
  }

  /*
   * Size modifiers
   */

  .chip--small {
    font-size: var(--koerber-text-base-font-size);
    line-height: var(--koerber-text-sm-line-height);
    height: var(--koerber-chip-size-small);
  }

  .chip--medium {
    font-size: var(--koerber-text-base-font-size);
    line-height: var(--koerber-text-base-line-height);
    height: var(--koerber-chip-size-medium);
  }

  .chip--large {
    padding: var(--koerber-border-radius-small) var(--koerber-spacing-xs);
    font-size: var(--koerber-text-md-font-size);
    line-height: var(--koerber-text-lg-line-height);
    height: var(--koerber-chip-size-large);
  }

  /*
   * Pill outline
   */

  .chip--outline {
    border-radius: var(--koerber-border-radius-pill);
  }

  .chip--removable {
    padding-right: var(--koerber-spacing-2xs);
  }

  .chip--selected {
    padding-left: var(--koerber-spacing-2xs);
  }

  koerber-button.chip__remove::part(base) {
    padding: 0;
    color: inherit;
  }

  .chip__remove,
  .chip__suffix,
  .chip__prefix,
  .chip__selected {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  /** Color Variants */

  .chip--primary {
    background-color: var(--koerber-color-bg-fill);
    color: var(--koerber-color-text-bg-fill);
  }

  .chip--primary:hover {
    background-color: var(--koerber-color-bg-fill-hover);
  }

  .chip--primary:focus-visible:not(.chip--disabled) {
    background-color: var(--koerber-color-bg-fill-hover);
    outline: var(--koerber-border-width-m) solid var(--koerber-color-border-focus);
  }

  .chip--primary.chip--dragged {
    box-shadow: var(--koerber-shadow-card);
  }

  .chip--primary.chip--disabled {
    color: var(--koerber-color-text-disabled);
    background-color: var(--koerber-color-bg-fill-disabled);
  }

  .chip--primary:active:not(.chip--disabled) {
    background-color: var(--koerber-color-bg-fill);
    color: var(--koerber-color-text-bg-fill);
    box-shadow: var(--koerber-shadow-card);
  }

  .chip--danger {
    background-color: var(--koerber-color-bg-fill-error);
    color: var(--koerber-color-text-bg-fill);
  }

  .chip--danger:hover {
    background-color: var(--koerber-color-bg-fill-error-hover);
  }

  .chip--danger:focus-visible:not(.chip--disabled) {
    background-color: var(--koerber-color-bg-fill-error-hover);
    outline: var(--koerber-border-width-m) solid var(--koerber-color-border-error);
  }

  .chip--danger.chip--dragged {
    box-shadow: var(--koerber-shadow-card);
  }

  .chip--danger.chip--disabled {
    color: var(--koerber-color-text-disabled);
    background-color: var(--koerber-color-bg-fill-disabled);
  }

  .chip--danger:active:not(.chip--disabled) {
    background-color: var(--koerber-color-bg-fill-error);
    color: var(--koerber-color-text-bg-fill);
    box-shadow: var(--koerber-shadow-card);
  }

  .chip--info {
    background-color: var(--koerber-color-bg-fill-info);
    color: var(--koerber-color-text-bg-fill);
  }

  .chip--info:hover {
    background-color: var(--koerber-color-border-info-hover);
  }

  .chip--info:focus-visible:not(.chip--disabled) {
    background-color: var(--koerber-color-border-info-hover);
    outline: var(--koerber-border-width-m) solid var(--koerber-color-border-info);
  }

  .chip--info.chip--dragged {
    box-shadow: var(--koerber-shadow-card);
  }

  .chip--info.chip--disabled {
    color: var(--koerber-color-text-disabled);
    background-color: var(--koerber-color-bg-fill-disabled);
  }

  .chip--info:active:not(.chip--disabled) {
    background-color: var(--koerber-color-bg-fill-info);
    color: var(--koerber-color-text-bg-fill);
    box-shadow: var(--koerber-shadow-card);
  }

  .chip--tertiary {
    color: var(--koerber-color-text-bg-fill);
    background-color: var(--koerber-color-bg-surface-quaternary);
  }

  .chip--tertiary:hover {
    color: var(--koerber-color-text);
    background-color: var(--koerber-color-bg-fill-secondary-hover);
  }

  .chip--tertiary:focus-visible:not(.chip--disabled) {
    color: var(--koerber-color-text);
    background-color: var(--koerber-color-bg-fill-secondary-hover);
    outline: var(--koerber-border-width-m) solid var(--koerber-color-border-focus);
  }

  .chip--tertiary.chip--dragged {
    color: var(--koerber-color-text-bg-fill);
    background-color: var(--koerber-color-bg-surface-quaternary);
    box-shadow: var(--koerber-shadow-card);
  }

  .chip--tertiary.chip--disabled {
    color: var(--koerber-color-text-disabled);
    background-color: var(--koerber-color-bg-fill-disabled);
  }

  .chip--tertiary:active:not(.chip--disabled) {
    background-color: var(--koerber-color-bg-surface-quaternary);
    color: var(--koerber-color-text-bg-fill);
    box-shadow: var(--koerber-shadow-card);
  }

  /** Outline Themes */

  .chip--primary-outline {
    outline: var(--koerber-border-width-s) solid var(--koerber-color-border-focus);
    color: var(--koerber-color-bg-fill);
  }

  .chip--primary-outline:hover {
    background-color: var(--koerber-color-bg-fill-hover);
    color: var(--koerber-color-text-bg-fill);
    outline: none;
  }

  .chip--primary-outline:focus-visible:not(.chip--disabled) {
    background-color: var(--koerber-color-bg-fill-hover);
    outline: var(--koerber-border-width-m) solid var(--koerber-color-border-focus);
    color: var(--koerber-color-text-bg-fill);
  }

  .chip--primary-outline.chip--dragged {
    box-shadow: var(--koerber-shadow-card);
  }

  .chip--primary-outline.chip--disabled {
    outline: var(--koerber-border-width-s) solid var(--koerber-color-border-disabled);
    background: var(--koerber-color-bg-fill-disabled);
    color: var(--koerber-color-text-disabled);
  }

  .chip--primary-outline:active:not(.chip--disabled) {
    color: var(--koerber-color-text-link);
    outline: var(--koerber-border-width-s) solid var(--koerber-color-border-focus);
    background-color: var(--koerber-color-bg-fill-secondary);
    box-shadow: var(--koerber-shadow-card);
  }

  .chip--danger-outline {
    outline: var(--koerber-border-width-s) solid var(--koerber-color-border-error);
    color: var(--koerber-color-text-error);
  }

  .chip--danger-outline:hover {
    background-color: var(--koerber-color-bg-fill-error-hover);
    color: var(--koerber-color-text-bg-fill);
    outline: none;
  }

  .chip--danger-outline:focus-visible:not(.chip--disabled) {
    background-color: var(--koerber-color-bg-fill-error-hover);
    outline: var(--koerber-border-width-m) solid var(--koerber-color-border-error);
    color: var(--koerber-color-text-bg-fill);
  }

  .chip--danger-outline.chip--dragged {
    box-shadow: var(--koerber-shadow-card);
  }

  .chip--danger-outline.chip--disabled {
    outline: var(--koerber-border-width-s) solid var(--koerber-color-border-disabled);
    background: var(--koerber-color-bg-fill-disabled);
    color: var(--koerber-color-text-disabled);
  }

  .chip--danger-outline:active:not(.chip--disabled) {
    color: var(--koerber-color-text-error);
    outline: var(--koerber-border-width-s) solid var(--koerber-color-border-error);
    background-color: var(--koerber-color-bg-fill-secondary);
    box-shadow: var(--koerber-shadow-card);
  }

  .chip--info-outline {
    outline: var(--koerber-border-width-s) solid var(--koerber-color-border-info);
    color: var(--koerber-color-bg-fill-info);
  }

  .chip--info-outline:hover {
    background-color: var(--koerber-color-border-info-hover);
    color: var(--koerber-color-text-bg-fill);
    outline: none;
  }

  .chip--info-outline:focus-visible:not(.chip--disabled) {
    background-color: var(--koerber-color-border-info-hover);
    outline: var(--koerber-border-width-m) solid var(--koerber-color-border-info);
    color: var(--koerber-color-text-bg-fill);
  }

  .chip--info-outline.chip--dragged {
    box-shadow: var(--koerber-shadow-card);
  }

  .chip--info-outline.chip--disabled {
    outline: var(--koerber-border-width-s) solid var(--koerber-color-border-disabled);
    background: var(--koerber-color-bg-fill-disabled);
    color: var(--koerber-color-text-disabled);
  }

  .chip--info-outline:active:not(.chip--disabled) {
    color: var(--koerber-color-text-info);
    outline: var(--koerber-border-width-s) solid var(--koerber-color-border-info);
    background-color: var(--koerber-color-bg-fill-secondary);
    box-shadow: var(--koerber-shadow-card);
  }

  .chip--tertiary-outline {
    color: var(--koerber-color-text);
    outline: var(--koerber-border-width-s) solid var(--koerber-color-border);
  }

  .chip--tertiary-outline:hover {
    color: var(--koerber-color-text);
    outline: none;
    background: var(--koerber-color-bg-fill-secondary-hover);
  }

  .chip--tertiary-outline:focus-visible:not(.chip--disabled) {
    color: var(--koerber-color-text);
    background-color: var(--koerber-color-bg-fill-secondary-hover);
    outline: var(--koerber-border-width-m) solid var(--koerber-color-border-focus);
  }

  .chip--tertiary-outline.chip--selected {
    outline: var(--koerber-border-width-s) solid var(--koerber-color-border-active);
    color: var(--koerber-color-text);
  }

  .chip--tertiary-outline.chip--dragged {
    color: var(--koerber-color-text);
    outline: var(--koerber-border-width-s) solid var(--koerber-color-border-active);
    box-shadow: var(--koerber-shadow-card);
    background: var(--koerber-color-bg);
  }

  .chip--tertiary-outline.chip--disabled {
    outline: var(--koerber-border-width-s) solid var(--koerber-color-border-disabled);
    background: var(--koerber-color-bg-fill-disabled);
    color: var(--koerber-color-text-disabled);
  }

  .chip--tertiary-outline:active:not(.chip--disabled) {
    color: var(--koerber-color-text);
    outline: var(--koerber-border-width-s) solid var(--koerber-color-border);
    background-color: var(--koerber-color-bg-fill-secondary);
    box-shadow: var(--koerber-shadow-card);
  }
`;var chip_component_decorate=function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r};class chip_component_Chip extends uikit_element.Z{constructor(){super(...arguments),this.localize=new localize.V(this),this.hasFocus=!1,this.size="medium",this.variants="info",this.removable=!1,this.disabled=!1,this.selected=!1,this.prefixIcon="",this.suffixIcon=""}click(){this.chip.click()}focus(options){this.chip.focus(options)}blur(){this.chip.blur()}delete(){this.handleDeleteClick()}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleSelectedChange(){this.setAttribute("aria-selected",this.selected?"true":"false")}handleDeleteClick(){this.emit("koerber-remove")}handleClick(){this.emit("koerber-click")}handleFocus(){this.hasFocus=!0,this.emit("koerber-focus")}handleBlur(){this.hasFocus=!1,this.emit("koerber-blur")}render(){return lit.dy`
      <div part="container" class="chip--container">
        <span
          part="base"
          class=${(0,class_map.$)({chip:!0,"chip--primary":"primary"===this.variants,"chip--info":"info"===this.variants,"chip--danger":"danger"===this.variants,"chip--tertiary":"tertiary"===this.variants,"chip--primary-outline":"primary-outline"===this.variants,"chip--info-outline":"info-outline"===this.variants,"chip--danger-outline":"danger-outline"===this.variants,"chip--tertiary-outline":"tertiary-outline"===this.variants,"chip--small":"small"===this.size,"chip--medium":"medium"===this.size,"chip--large":"large"===this.size,"chip--removable":this.removable||this.suffixIcon.length>0,"chip--focused":this.hasFocus,"chip--disabled":this.disabled,"chip--selected":this.selected||this.prefixIcon.length>0})}
          ?disabled=${this.disabled}
          ?checked="${(0,live.a)(this.selected)}"
          tabindex=${this.disabled?"-1":"0"}
          @click=${this.handleClick}
          @focus=${this.handleFocus}
          @blur=${this.handleBlur}
        >
          ${this.selected?lit.dy` <koerber-icon
                part="selected-button"
                exportparts="base:remove-button__base"
                name="check-circle"
                size="medium"
                label=${"select"}
                class="chip__selected"
                tabindex="-1"
              ></koerber-icon>`:""}
          ${this.prefixIcon?lit.dy` <koerber-icon part="prefix-icon" class="chip__prefix" name=${this.prefixIcon}></koerber-icon>`:""}

          <slot part="content" class="chip__label"></slot>

          ${this.suffixIcon?lit.dy` <koerber-icon part="suffix-icon" class="chip__suffix" name=${this.suffixIcon}></koerber-icon>`:""}
          ${this.removable?lit.dy` <koerber-button
                variant="ghost"
                part="remove-button"
                exportparts="base:remove-button__base"
                size="medium"
                label=${this.localize.term("remove")}
                class="chip__remove"
                @click=${this.handleDeleteClick}
                @focus=${this.handleFocus}
                tabindex="-1"
                ?disabled=${this.disabled}
                ><koerber-icon name="close">close</koerber-icon></koerber-button
              >`:""}

          <slot part="tooltip"></slot>
        </span>
      </div>
    `}}chip_component_Chip.styles=[component_styles.Z,chip_styles],chip_component_Chip.dependencies={"koerber-button":button_component.Z};const chip_component=chip_component_Chip;chip_component_decorate([(0,decorators.IO)(".chip")],chip_component_Chip.prototype,"chip",void 0),chip_component_decorate([(0,decorators.SB)()],chip_component_Chip.prototype,"hasFocus",void 0),chip_component_decorate([(0,decorators.Cb)({reflect:!0})],chip_component_Chip.prototype,"size",void 0),chip_component_decorate([(0,decorators.Cb)({reflect:!0})],chip_component_Chip.prototype,"variants",void 0),chip_component_decorate([(0,decorators.Cb)({type:Boolean,reflect:!0})],chip_component_Chip.prototype,"removable",void 0),chip_component_decorate([(0,decorators.Cb)({type:Boolean,reflect:!0})],chip_component_Chip.prototype,"disabled",void 0),chip_component_decorate([(0,decorators.Cb)({type:Boolean,reflect:!0})],chip_component_Chip.prototype,"selected",void 0),chip_component_decorate([(0,decorators.Cb)({type:String,reflect:!0,attribute:"prefix-icon"})],chip_component_Chip.prototype,"prefixIcon",void 0),chip_component_decorate([(0,decorators.Cb)({type:String,reflect:!0,attribute:"suffix-icon"})],chip_component_Chip.prototype,"suffixIcon",void 0),chip_component_decorate([(0,watch.Y)("disabled")],chip_component_Chip.prototype,"handleDisabledChange",null),chip_component_decorate([(0,watch.Y)("selected")],chip_component_Chip.prototype,"handleSelectedChange",null);chip_component.define("koerber-chip");__webpack_require__("./src/components/divider/divider.ts");var tabbable=__webpack_require__("./src/internal/tabbable.ts");const dropdown_styles=lit.iv`
  :host {
    display: inline-block;
    --koerber-z-index-dropdown: 900;
    --koerber-panel-width-minimum: 192px;
    --koerber-panel-width-maximum: 280px;
  }

  .dropdown::part(popup) {
    z-index: var(--koerber-z-index-dropdown);
  }

  .dropdown[data-current-placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .dropdown[data-current-placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .dropdown[data-current-placement^='left']::part(popup) {
    transform-origin: right;
  }

  .dropdown[data-current-placement^='right']::part(popup) {
    transform-origin: left;
  }

  .dropdown__trigger {
    display: block;
  }

  .dropdown__panel {
    font-family: var(--koerber-font-family-default);
    font-size: var(--koerber-text-md-font-size);
    font-weight: var(--koerber-font-weight-regular);
    border-radius: var(--koerber-border-radius-medium);
    pointer-events: none;
    margin: 4px 0 4px 0;
  }

  .dropdown--open .dropdown__panel {
    display: block;
    pointer-events: all;
  }

  /* When users slot a menu, make sure it conforms to the popup's auto-size */
  ::slotted(koerber-menu) {
    min-width: clamp(var(--koerber-panel-width-minimum), var(--width), var(--koerber-panel-width-maximum)) !important;
    max-height: var(--auto-size-available-height) !important;
  }
`;var dropdown_component_decorate=function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r};class dropdown_component_Dropdown extends uikit_element.Z{constructor(){super(...arguments),this.localize=new localize.V(this),this.open=!1,this.placement="bottom-start",this.disabled=!1,this.stayOpenOnSelect=!1,this.distance=0,this.skidding=0,this.hoist=!1,this.sync=void 0,this.handleKeyDown=event=>{this.open&&"Escape"===event.key&&(event.stopPropagation(),this.hide(),this.focusOnTrigger())},this.handleDocumentKeyDown=event=>{var _a;if("Escape"===event.key&&this.open)return event.stopPropagation(),this.focusOnTrigger(),void this.hide();if("Tab"===event.key){if(this.open&&"koerber-menu-item"===(null===(_a=document.activeElement)||void 0===_a?void 0:_a.tagName.toLowerCase()))return event.preventDefault(),this.hide(),void this.focusOnTrigger();setTimeout((()=>{var _a,_b,_c;const activeElement=(null===(_a=this.containingElement)||void 0===_a?void 0:_a.getRootNode())instanceof ShadowRoot?null===(_c=null===(_b=document.activeElement)||void 0===_b?void 0:_b.shadowRoot)||void 0===_c?void 0:_c.activeElement:document.activeElement;this.containingElement&&(null==activeElement?void 0:activeElement.closest(this.containingElement.tagName.toLowerCase()))===this.containingElement||this.hide()}))}},this.handleDocumentMouseDown=event=>{const path=event.composedPath();this.containingElement&&!path.includes(this.containingElement)&&this.hide()},this.handlePanelSelect=event=>{const target=event.target;this.stayOpenOnSelect||"koerber-menu"!==target.tagName.toLowerCase()||(this.hide(),this.focusOnTrigger())}}connectedCallback(){super.connectedCallback(),this.containingElement||(this.containingElement=this)}firstUpdated(){this.panel.hidden=!this.open,this.open&&(this.addOpenListeners(),this.popup.active=!0)}disconnectedCallback(){super.disconnectedCallback(),this.removeOpenListeners(),this.hide()}focusOnTrigger(){const trigger=this.trigger.assignedElements({flatten:!0})[0];"function"==typeof(null==trigger?void 0:trigger.focus)&&trigger.focus()}getMenu(){return this.panel.assignedElements({flatten:!0}).find((el=>"koerber-menu"===el.tagName.toLowerCase()))}handleTriggerClick(){this.open?this.hide():(this.buttonWidth=`${this.trigger.clientWidth}px`,this.show(),this.focusOnTrigger())}async handleTriggerKeyDown(event){if([" ","Enter"].includes(event.key))return event.preventDefault(),void this.handleTriggerClick();const menu=this.getMenu();if(menu){const menuItems=menu.getAllItems(),firstMenuItem=menuItems[0],lastMenuItem=menuItems[menuItems.length-1];["ArrowDown","ArrowUp","Home","End"].includes(event.key)&&(event.preventDefault(),this.open||(this.show(),await this.updateComplete),menuItems.length>0&&this.updateComplete.then((()=>{"ArrowDown"!==event.key&&"Home"!==event.key||(menu.setCurrentItem(firstMenuItem),firstMenuItem.focus()),"ArrowUp"!==event.key&&"End"!==event.key||(menu.setCurrentItem(lastMenuItem),lastMenuItem.focus())})))}}handleTriggerKeyUp(event){" "===event.key&&event.preventDefault()}handleTriggerSlotChange(){this.updateAccessibleTrigger()}updateAccessibleTrigger(){const accessibleTrigger=this.trigger.assignedElements({flatten:!0}).find((el=>(0,tabbable.C)(el).start));let target;if(accessibleTrigger){switch(accessibleTrigger.tagName.toLowerCase()){case"koerber-button":case"koerber-icon-button":target=accessibleTrigger.button;break;default:target=accessibleTrigger}target.setAttribute("aria-haspopup","true"),target.setAttribute("aria-expanded",this.open?"true":"false")}}async show(){if(!this.open)return this.open=!0,(0,internal_event.m)(this,"koerber-after-show")}async hide(){if(this.open)return this.open=!1,(0,internal_event.m)(this,"koerber-after-hide")}reposition(){this.popup.reposition()}addOpenListeners(){this.panel.addEventListener("koerber-select",this.handlePanelSelect),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown)}removeOpenListeners(){this.panel&&(this.panel.removeEventListener("koerber-select",this.handlePanelSelect),this.panel.removeEventListener("keydown",this.handleKeyDown)),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown)}async handleOpenChange(){if(this.disabled)this.open=!1;else if(this.updateAccessibleTrigger(),this.open){this.emit("koerber-show"),this.addOpenListeners(),await(0,animate.U_)(this),this.panel.hidden=!1,this.popup.active=!0;const{keyframes,options}=(0,animation_registry.O8)(this,"dropdown.show",{dir:this.localize.dir()});await(0,animate.nv)(this.popup.popup,keyframes,options),this.emit("koerber-after-show")}else{this.emit("koerber-hide"),this.removeOpenListeners(),await(0,animate.U_)(this);const{keyframes,options}=(0,animation_registry.O8)(this,"dropdown.hide",{dir:this.localize.dir()});await(0,animate.nv)(this.popup.popup,keyframes,options),this.panel.hidden=!0,this.popup.active=!1,this.emit("koerber-after-hide")}}render(){return lit.dy`
      <koerber-popup
        part="base"
        id="dropdown"
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        strategy=${this.hoist?"fixed":"absolute"}
        flip
        shift
        auto-size="vertical"
        auto-size-padding="10"
        sync=${(0,if_defined.o)(this.sync?this.sync:void 0)}
        class=${(0,class_map.$)({dropdown:!0,"dropdown--open":this.open})}
      >
        <slot
          name="trigger"
          slot="anchor"
          part="trigger"
          class="dropdown__trigger"
          @click=${this.handleTriggerClick}
          @keydown=${this.handleTriggerKeyDown}
          @keyup=${this.handleTriggerKeyUp}
          @slotchange=${this.handleTriggerSlotChange}
        ></slot>

        <div aria-hidden=${this.open?"false":"true"} aria-labelledby="dropdown">
          <slot part="panel" class="dropdown__panel" style="--width: ${this.buttonWidth}"></slot>
        </div>
      </koerber-popup>
    `}}dropdown_component_Dropdown.styles=[component_styles.Z,dropdown_styles];const dropdown_component=dropdown_component_Dropdown;dropdown_component_decorate([(0,decorators.IO)(".dropdown")],dropdown_component_Dropdown.prototype,"popup",void 0),dropdown_component_decorate([(0,decorators.IO)(".dropdown__trigger")],dropdown_component_Dropdown.prototype,"trigger",void 0),dropdown_component_decorate([(0,decorators.IO)(".dropdown__panel")],dropdown_component_Dropdown.prototype,"panel",void 0),dropdown_component_decorate([(0,decorators.Cb)({type:Boolean,reflect:!0})],dropdown_component_Dropdown.prototype,"open",void 0),dropdown_component_decorate([(0,decorators.Cb)({reflect:!0})],dropdown_component_Dropdown.prototype,"placement",void 0),dropdown_component_decorate([(0,decorators.Cb)({type:Boolean,reflect:!0})],dropdown_component_Dropdown.prototype,"disabled",void 0),dropdown_component_decorate([(0,decorators.Cb)({attribute:"stay-open-on-select",type:Boolean,reflect:!0})],dropdown_component_Dropdown.prototype,"stayOpenOnSelect",void 0),dropdown_component_decorate([(0,decorators.Cb)({attribute:!1})],dropdown_component_Dropdown.prototype,"containingElement",void 0),dropdown_component_decorate([(0,decorators.Cb)({type:Number})],dropdown_component_Dropdown.prototype,"distance",void 0),dropdown_component_decorate([(0,decorators.Cb)({type:Number})],dropdown_component_Dropdown.prototype,"skidding",void 0),dropdown_component_decorate([(0,decorators.Cb)({type:Boolean})],dropdown_component_Dropdown.prototype,"hoist",void 0),dropdown_component_decorate([(0,decorators.Cb)({reflect:!0})],dropdown_component_Dropdown.prototype,"sync",void 0),dropdown_component_decorate([(0,watch.Y)("open",{waitUntilFirstUpdate:!0})],dropdown_component_Dropdown.prototype,"handleOpenChange",null),(0,animation_registry.jx)("dropdown.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}}),(0,animation_registry.jx)("dropdown.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}});dropdown_component.define("koerber-dropdown");__webpack_require__("./src/components/form-field-error/form-field-error.component.ts").Z.define("koerber-form-field-error");__webpack_require__("./src/components/form-field-label/form-field-label.component.ts").Z.define("koerber-form-field-label");__webpack_require__("./src/components/form-field/form-field.ts"),__webpack_require__("./src/components/icon-button/icon-button.ts"),__webpack_require__("./src/components/icon/icon.ts");var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),request=__webpack_require__("./src/components/include/request.ts");const include_styles=lit.iv`
  :host {
    display: block;
  }
`;let Include=class SlInclude extends uikit_element.Z{constructor(...args){super(...args),this.mode="cors",this.allowScripts=!1}executeScript(script){const newScript=document.createElement("script");[...script.attributes].forEach((attr=>newScript.setAttribute(attr.name,attr.value))),newScript.textContent=script.textContent,script.parentNode.replaceChild(newScript,script)}async handleSrcChange(){try{const src=this.src,file=await(0,request.X)(src,this.mode);if(src!==this.src)return;if(!file.ok)return void this.emit("koerber-error",{detail:{status:file.status}});this.innerHTML=file.html,this.allowScripts&&[...this.querySelectorAll("script")].forEach((script=>this.executeScript(script))),this.emit("koerber-load")}catch(_a){this.emit("koerber-error",{detail:{status:-1}})}}render(){return lit.dy`<slot></slot>`}};Include.styles=include_styles,(0,tslib_es6.gn)([(0,decorators.Cb)()],Include.prototype,"src",void 0),(0,tslib_es6.gn)([(0,decorators.Cb)()],Include.prototype,"mode",void 0),(0,tslib_es6.gn)([(0,decorators.Cb)({attribute:"allow-scripts",type:Boolean})],Include.prototype,"allowScripts",void 0),(0,tslib_es6.gn)([(0,watch.Y)("src")],Include.prototype,"handleSrcChange",null),Include=(0,tslib_es6.gn)([(0,decorators.Mo)("koerber-include")],Include);__webpack_require__("./src/components/input/input.ts");const link_styles=lit.iv`
  :host {
    display: flex;
  }

  .link {
    text-decoration: none;
    display: flex;
  }

  .link--small {
    color: var(--koerber-color-text-link);
    font-size: var(--koerber-text-sm-font-size);
    line-height: var(--koerber-text-sm-line-height);
    font-weight: var(--koerber-font-weight-regular);
  }

  .link--medium {
    color: var(--koerber-color-text-link);
    font-size: var(--koerber-text-base-font-size);
    line-height: var(--koerber-text-base-line-height);
    font-weight: var(--koerber-font-weight-regular);
  }

  .link--large {
    color: var(--koerber-color-text-link);
    font-size: var(--koerber-text-md-font-size);
    line-height: var(--koerber-text-md-line-height);
    font-weight: var(--koerber-font-weight-regular);
  }

  .link--underline {
    color: var(--koerber-color-text-link);
    text-decoration: underline;
  }

  .link--disabled {
    color: var(--koerber-color-text-disabled);
    cursor: default;
  }

  .link--disabled .link__icon {
    color: var(--koerber-color-icon-disabled);
  }

  .link__icon {
    margin-top: -1px;
    margin-left: var(--koerber-spacing-2xs);
    display: inline-block;
  }

  .link:visited:not(.link--disabled) {
    color: var(--koerber-color-text-link-visited);
  }

  .link:hover:not(.link--disabled) {
    color: var(--koerber-color-text-link-hover);
  }

  .link:active:not(.link--disabled) {
    color: var(--koerber-color-text);
  }

  .link:focus:not(.link--disabled) {
    color: var(--koerber-color-text-link);
    outline: var(--koerber-border-width-s) solid var(--koerber-color-border-focus);
  }
`;var link_component_decorate=function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r};class link_component_Link extends uikit_element.Z{constructor(){super(...arguments),this.href="",this.target="_blank",this.rel="noreferrer noopener",this.title="",this.size="medium",this.disabled=!1,this.underline=!1,this.showIcon=!1,this.hasFocus=!1,this.handleHostClick=event=>{this.disabled&&(event.preventDefault(),event.stopImmediatePropagation())}}handleBlur(){this.hasFocus=!1,this.emit("koerber-blur")}handleFocus(){this.hasFocus=!0,this.emit("koerber-focus")}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this.handleHostClick)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this.handleHostClick)}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}click(){this.link.click()}focus(options){this.link.focus(options)}blur(){this.link.blur()}render(){let iconContent;return this.showIcon&&(iconContent=lit.dy` <div part="icon" class="link__icon" aria-hidden="true">
        <koerber-icon name="arrow-down" size=${this.size}></koerber-icon>
      </div>`),lit.dy`
      <a
        id="link"
        part="label"
        class=${(0,class_map.$)({link:!0,"link--small":"small"===this.size,"link--medium":"medium"===this.size,"link--large":"large"===this.size,"link--disabled":this.disabled,"link--underline":this.underline,"link--focused":this.hasFocus})}
        ?disabled=${this.disabled}
        role=${(0,if_defined.o)("link")}
        aria-disabled=${this.disabled?"true":"false"}
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.disabled?void 0:this.handleHostClick}
        href="${this.href}"
        target="${(0,if_defined.o)(this.target?this.target:void 0)}"
        rel=${(0,if_defined.o)(this.target?this.rel:void 0)}
        title=${this.title}
      >
        <slot></slot>
        ${iconContent}
      </a>
    `}}link_component_Link.styles=[component_styles.Z,link_styles],link_component_Link.dependencies={"koerber-icon":icon_component.Z};const link_component=link_component_Link;link_component_decorate([(0,decorators.Cb)({type:String,reflect:!0})],link_component_Link.prototype,"href",void 0),link_component_decorate([(0,decorators.Cb)({reflect:!0})],link_component_Link.prototype,"target",void 0),link_component_decorate([(0,decorators.Cb)()],link_component_Link.prototype,"rel",void 0),link_component_decorate([(0,decorators.Cb)({type:String,reflect:!0})],link_component_Link.prototype,"title",void 0),link_component_decorate([(0,decorators.Cb)({reflect:!0})],link_component_Link.prototype,"size",void 0),link_component_decorate([(0,decorators.Cb)({type:Boolean,reflect:!0})],link_component_Link.prototype,"disabled",void 0),link_component_decorate([(0,decorators.Cb)({type:Boolean,reflect:!0})],link_component_Link.prototype,"underline",void 0),link_component_decorate([(0,decorators.Cb)({type:Boolean,reflect:!0})],link_component_Link.prototype,"showIcon",void 0),link_component_decorate([(0,decorators.IO)(".link")],link_component_Link.prototype,"link",void 0),link_component_decorate([(0,decorators.SB)()],link_component_Link.prototype,"hasFocus",void 0),link_component_decorate([(0,watch.Y)("disabled")],link_component_Link.prototype,"handleDisabledChange",null);link_component.define("koerber-link");__webpack_require__("./src/components/list-item/list-item.ts"),__webpack_require__("./src/components/list/list.ts"),__webpack_require__("./src/components/menu-item/menu-item.ts"),__webpack_require__("./src/components/menu/menu.ts"),__webpack_require__("./src/components/popup/popup.ts");var static_html=__webpack_require__("./node_modules/lit/static-html.js"),button_styles=__webpack_require__("./src/components/button/button.styles.ts");const radio_button_styles=lit.iv`
  .button__prefix,
  .button__suffix,
  .button__label {
    display: inline-flex;
    position: relative;
    align-items: center;
  }

  .button--default:not(.button--disabled) {
    background-color: var(--koerber-color-bg-surface-secondary);
    color: var(--koerber-color-text-secondary);
    border: none;
  }

  .button--checked:not(.button--disabled) {
    background-color: var(--koerber-color-bg-fill);
    color: var(--koerber-color-text-bg-fill);
    border: none;
  }

  .button:hover:not(.button--disabled) {
    background-color: var(--koerber-color-bg-fill-hover);
    border: none;
    color: var(--koerber-color-text-bg-fill);
  }

  .button:active:not(.button--disabled) {
    background-color: var(--koerber-color-bg-fill-pressed);
    border-color: none;
    color: var(--koerber-color-text-bg-fill);
  }

  .button--disabled {
    background-color: var(--koerber-color-bg-fill-disabled);
    border: none;
    color: var(--koerber-color-text-disabled);
  }

  /* We use a hidden input so constraint validation errors work, since they don't appear to show when used with buttons.
    We can't actually hide it, though, otherwise the messages will be suppressed by the browser. */
  .hidden-input {
    all: unset;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    outline: dotted 1px red;
    opacity: 0;
    z-index: -1;
  }
`;var radio_button_component_decorate=function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r};class radio_button_component_RadioButton extends uikit_element.Z{constructor(){super(...arguments),this.hasSlotController=new slot.rc(this,"[default]","prefix","suffix"),this.hasFocus=!1,this.checked=!1,this.disabled=!1,this.size="medium",this.error=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","presentation")}handleBlur(){this.hasFocus=!1,this.emit("koerber-blur")}handleClick(e){if(this.disabled)return e.preventDefault(),void e.stopPropagation();this.checked=!0}handleFocus(){this.hasFocus=!0,this.emit("koerber-focus")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}focus(options){this.input.focus(options)}blur(){this.input.blur()}render(){const radioButtonContent=static_html.dy`
      ${this.hasSlotController.test("prefix")?static_html.dy`<slot name="prefix" part="prefix" class="button__prefix"></slot>`:""}
      ${this.hasSlotController.test("[default]")?static_html.dy`<slot part="label" class="button__label"></slot>`:""}
      ${this.hasSlotController.test("suffix")?static_html.dy`<slot name="suffix" part="suffix" class="button__suffix"></slot>`:""}
    `;return static_html.dy`
      <div part="base" role="presentation">
        <button
          part="${"button"+(this.checked?" button--checked":"")}"
          role="radio"
          aria-checked="${this.checked}"
          class=${(0,class_map.$)({button:!0,"button--default":!0,"button--small":"small"===this.size,"button--medium":"medium"===this.size,"button--large":"large"===this.size,"button--checked":this.checked,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
          aria-disabled=${this.disabled}
          type="button"
          value=${(0,if_defined.o)(this.value)}
          tabindex="${this.checked?"0":"-1"}"
          @blur=${this.handleBlur}
          @focus=${this.handleFocus}
          @click=${this.handleClick}
        >
          ${radioButtonContent}
        </button>
      </div>
    `}}radio_button_component_RadioButton.styles=[button_styles.Z,radio_button_styles];const radio_button_component=radio_button_component_RadioButton;radio_button_component_decorate([(0,decorators.IO)(".button")],radio_button_component_RadioButton.prototype,"input",void 0),radio_button_component_decorate([(0,decorators.IO)(".hidden-input")],radio_button_component_RadioButton.prototype,"hiddenInput",void 0),radio_button_component_decorate([(0,decorators.SB)()],radio_button_component_RadioButton.prototype,"hasFocus",void 0),radio_button_component_decorate([(0,decorators.Cb)({type:Boolean,reflect:!0})],radio_button_component_RadioButton.prototype,"checked",void 0),radio_button_component_decorate([(0,decorators.Cb)()],radio_button_component_RadioButton.prototype,"value",void 0),radio_button_component_decorate([(0,decorators.Cb)({type:Boolean,reflect:!0})],radio_button_component_RadioButton.prototype,"disabled",void 0),radio_button_component_decorate([(0,decorators.Cb)({reflect:!0})],radio_button_component_RadioButton.prototype,"size",void 0),radio_button_component_decorate([(0,decorators.Cb)({type:Boolean,reflect:!0})],radio_button_component_RadioButton.prototype,"error",void 0),radio_button_component_decorate([(0,watch.Y)("disabled",{waitUntilFirstUpdate:!0})],radio_button_component_RadioButton.prototype,"handleDisabledChange",null);radio_button_component.define("koerber-radio-button");var form_control_styles=__webpack_require__("./src/styles/form-control.styles.ts");const radio_group_styles=lit.iv`
  :host {
    display: block;
    --koerber-input-required-content: '*';
    --koerber-input-required-content-offset: -2px;
  }

  .form-control {
    border: none;
    padding: 0;
    margin: 0;
    font-family: var(--koerber-font-family-default);
  }

  .form-control__label {
    padding: 0;
  }

  .radio-group--required .radio-group__label::after {
    content: var(--koerber-input-required-content);
    margin-inline-start: var(--koerber-input-required-content-offset);
  }

  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }

  .radio-group--horizontal {
    display: flex;
    flex-direction: row;
  }

  ::slotted(koerber-radio) {
    padding-top: var(--koerber-spacing-xs);
    padding-bottom: var(--koerber-spacing-xs);
  }

  .radio-group--horizontal ::slotted(koerber-radio:not(:last-child)) {
    margin-right: var(--koerber-spacing-s);
  }
`;var radio_group_component_decorate=function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r};class radio_group_component_RadioGroup extends uikit_element.Z{constructor(){super(...arguments),this.hasButtonGroup=!1,this.defaultValue="",this.name="option",this.value="",this.size="medium",this.required=!1,this.horizontal=!1,this.disabled=!1,this.error=!1}connectedCallback(){super.connectedCallback(),this.defaultValue=this.value}getAllRadios(){return[...this.querySelectorAll("koerber-radio, koerber-radio-button")]}handleRadioClick(event){const target=event.target.closest("koerber-radio, koerber-radio-button"),radios=this.getAllRadios(),oldValue=this.value;target.disabled||(this.value=target.value,radios.forEach((radio=>radio.checked=radio===target)),this.value!==oldValue&&(this.emit("koerber-change"),this.emit("koerber-input")))}handleKeyDown(event){var _a;if(!["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"," "].includes(event.key))return;const radios=this.getAllRadios().filter((radio=>!radio.disabled)),checkedRadio=null!==(_a=radios.find((radio=>radio.checked)))&&void 0!==_a?_a:radios[0],incr=" "===event.key?0:["ArrowUp","ArrowLeft"].includes(event.key)?-1:1,oldValue=this.value;let index=radios.indexOf(checkedRadio)+incr;index<0&&(index=radios.length-1),index>radios.length-1&&(index=0),this.getAllRadios().forEach((radio=>{radio.checked=!1,this.hasButtonGroup||(radio.tabIndex=-1)})),this.value=radios[index].value,radios[index].checked=!0,this.hasButtonGroup?radios[index].shadowRoot.querySelector("button").focus():(radios[index].tabIndex=0,radios[index].focus()),this.value!==oldValue&&(this.emit("koerber-change"),this.emit("koerber-input")),event.preventDefault()}async syncRadioElements(){var _a,_b;const radios=this.getAllRadios();if(await Promise.all(radios.map((async radio=>{await radio.updateComplete,radio.checked=radio.value===this.value,radio.size=this.size}))),this.hasButtonGroup=radios.some((radio=>"koerber-radio-button"===radio.tagName.toLowerCase())),!radios.some((radio=>radio.checked)))if(this.hasButtonGroup){const buttonRadio=null===(_a=radios[0].shadowRoot)||void 0===_a?void 0:_a.querySelector("button");buttonRadio&&(buttonRadio.tabIndex=0)}else radios[0].tabIndex=0;if(this.hasButtonGroup){const buttonGroup=null===(_b=this.shadowRoot)||void 0===_b?void 0:_b.querySelector("koerber-button-group");buttonGroup&&(buttonGroup.disableRole=!0)}}syncRadios(){customElements.get("koerber-radio")&&customElements.get("koerber-radio-button")?this.syncRadioElements():(customElements.get("koerber-radio")?this.syncRadioElements():customElements.whenDefined("koerber-radio").then((()=>this.syncRadios())),customElements.get("koerber-radio-button")?this.syncRadioElements():customElements.whenDefined("koerber-radio-button").then((()=>this.syncRadios())))}updateCheckedRadio(){this.getAllRadios().forEach((radio=>radio.checked=radio.value===this.value))}handleSizeChange(){this.syncRadios()}handleValueChange(){this.hasUpdated&&this.updateCheckedRadio()}handleDisabledChange(){this.disabled&&this.getAllRadios().forEach((radio=>radio.disabled=this.disabled))}handleErrorChange(){this.error?this.getAllRadios().forEach((radio=>{radio.error=!0})):this.getAllRadios().forEach((radio=>{radio.error=!1}))}focus(){const radios=this.getAllRadios(),radioToFocus=radios.find((radio=>radio.checked))||radios[0];radioToFocus&&radioToFocus.focus()}blur(){this.getAllRadios().forEach((radio=>radio.blur()))}render(){const defaultSlot=lit.dy`
      <slot
        @click=${this.handleRadioClick}
        @keydown=${this.handleKeyDown}
        @slotchange=${this.syncRadios}
        role="presentation"
      ></slot>
    `;return lit.dy`
      <fieldset
        part="form-control"
        class=${(0,class_map.$)({"form-control":!0,"form-control--small":"small"===this.size,"form-control--medium":"medium"===this.size,"form-control--large":"large"===this.size,"form-control--radio-group":!0})}
        role="radiogroup"
      >
        <div
          part="form-control-input"
          class=${(0,class_map.$)({"form-control-input":!0,"radio-group--horizontal":this.horizontal})}
        >
          ${this.hasButtonGroup?lit.dy`
                <koerber-button-group part="button-group" exportparts="base:button-group__base">
                  ${defaultSlot}
                </koerber-button-group>
              `:defaultSlot}
        </div>
      </fieldset>
    `}}radio_group_component_RadioGroup.styles=[component_styles.Z,form_control_styles.Z,radio_group_styles],radio_group_component_RadioGroup.dependencies={"koerber-button-group":button_group_component};const radio_group_component=radio_group_component_RadioGroup;radio_group_component_decorate([(0,decorators.IO)("slot:not([name])")],radio_group_component_RadioGroup.prototype,"defaultSlot",void 0),radio_group_component_decorate([(0,decorators.SB)()],radio_group_component_RadioGroup.prototype,"hasButtonGroup",void 0),radio_group_component_decorate([(0,decorators.SB)()],radio_group_component_RadioGroup.prototype,"defaultValue",void 0),radio_group_component_decorate([(0,decorators.Cb)()],radio_group_component_RadioGroup.prototype,"name",void 0),radio_group_component_decorate([(0,decorators.Cb)({reflect:!0})],radio_group_component_RadioGroup.prototype,"value",void 0),radio_group_component_decorate([(0,decorators.Cb)({reflect:!0})],radio_group_component_RadioGroup.prototype,"size",void 0),radio_group_component_decorate([(0,decorators.Cb)({type:Boolean,reflect:!0})],radio_group_component_RadioGroup.prototype,"required",void 0),radio_group_component_decorate([(0,decorators.Cb)({type:Boolean,reflect:!0})],radio_group_component_RadioGroup.prototype,"horizontal",void 0),radio_group_component_decorate([(0,decorators.Cb)({type:Boolean,reflect:!0})],radio_group_component_RadioGroup.prototype,"disabled",void 0),radio_group_component_decorate([(0,decorators.Cb)({type:Boolean,reflect:!0})],radio_group_component_RadioGroup.prototype,"error",void 0),radio_group_component_decorate([(0,watch.Y)("size",{waitUntilFirstUpdate:!0})],radio_group_component_RadioGroup.prototype,"handleSizeChange",null),radio_group_component_decorate([(0,watch.Y)("value")],radio_group_component_RadioGroup.prototype,"handleValueChange",null),radio_group_component_decorate([(0,watch.Y)("disabled")],radio_group_component_RadioGroup.prototype,"handleDisabledChange",null),radio_group_component_decorate([(0,watch.Y)("error")],radio_group_component_RadioGroup.prototype,"handleErrorChange",null);radio_group_component.define("koerber-radio-group");const radio_styles=lit.iv`
  :host {
    display: block;
    --koerber-radio-size-medium: 14px;
    --component-height-standard: 19px;
    --component-height-comfortable: 22px;
    padding: var(--spacing);
    cursor: pointer;
  }

  koerber-icon {
    --koerber-icon-size-medium: 10px;
  }

  :host(:focus-visible) {
    outline: 0px;
  }

  :host([disabled]) {
    cursor: not-allowed;
  }

  .radio {
    display: flex;
    align-items: center;
    font-family: var(--koerber-font-family-default);
    font-size: var(--koerber-text-md-font-size);
    font-weight: var(--koerber-font-weight-regular);
    color: inherit;
    vertical-align: middle;
    cursor: pointer;
  }

  .radio--standard {
    --toggle-size: var(--koerber-radio-size-medium);
    font-size: var(--koerber-text-base-font-size);
  }

  .radio--comfortable {
    --toggle-size: var(--koerber-radio-size-medium);
    font-size: var(--koerber-text-md-font-size);
  }

  :host([size='standard']) {
    --spacing: calc(
      (var(--koerber-clickable-size-standard) - var(--component-height-standard)) / 2
    ); // Half of 24px and minus component to create a 24px high clickable area
  }

  :host([size='comfortable']) {
    --spacing: calc(
      (var(--koerber-clickable-size-comfortable) - var(--component-height-comfortable)) / 2
    ); // Half of 48px and minus component size to create a 48px high clickable area
  }

  .radio__control {
    display: flex;
    align-items: center;
    margin-right: var(--koerber-spacing-xs);
    width: var(--koerber-radio-size-medium);
    height: var(--koerber-radio-size-medium);
    border: solid var(--koerber-border-width-s) var(--koerber-color-border);
    border-radius: 50%;
    background-color: var(--koerber-color-bg);
    color: transparent;
    transition:
      var(--koerber-transition-fast) border-color,
      var(--koerber-transition-fast) background-color,
      var(--koerber-transition-fast) color,
      var(--koerber-transition-fast) box-shadow;
  }

  .radio__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  /* Hover */
  .radio:not(.radio--checked):not(.radio--disabled) .radio__control:hover {
    border-color: var(--koerber-color-border-hover);
    background-color: var(--koerber-color-bg);
  }

  /* Focus */
  .radio:not(.radio--checked):not(.radio--disabled) .radio__input:focus-visible ~ .radio__control {
    outline: solid var(--koerber-border-width-m) var(--koerber-color-bg-fill);
    border-color: var(--koerber-color-border-hover);
    outline-offset: var(--koerber-border-offset);
  }

  /* Checked */
  .radio--checked .radio__control {
    margin-right: var(--koerber-spacing-xs);
    border-color: var(--koerber-color-border-focus);
    color: var(--koerber-color-text-link);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Checked + hover */
  .radio.radio--checked:not(.radio--disabled) .radio__control:hover {
    border-color: var(--koerber-color-border-hover);
    color: var(--koerber-color-text-link-hover);
  }

  .radio__label {
    margin-inline-start: 0.5em;
    user-select: none;
  }

  .radio__label:not(.radio--disabled) {
    color: inherit;
  }

  /* Checked + focus */
  :host(:focus-visible) .radio__control {
    outline: solid var(--koerber-border-width-m) var(--koerber-color-bg-fill);
    border-color: var(--koerber-color-border-focus);
    outline-offset: var(--koerber-border-offset);
  }

  /* Disabled */
  .radio--disabled .radio__label {
    color: var(--koerber-color-text-disabled);
  }

  .radio--error .radio__control {
    outline: solid var(--koerber-border-width-m) var(--koerber-color-border-error);
    border-color: var(--koerber-color-border-focus);
    outline-offset: var(--koerber-border-offset);
  }

  .radio--disabled .radio__control {
    border-color: var(--koerber-color-text-disabled);
  }

  .radio--disabled {
    cursor: not-allowed;
  }

  /* When the control isn't checked, hide the circle for Windows High Contrast mode a11y */
  .radio:not(.radio--checked) svg circle {
    opacity: 0;
  }
`;var radio_component_decorate=function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r};class radio_component_Radio extends uikit_element.Z{constructor(){super(...arguments),this.checked=!1,this.hasFocus=!1,this.size="standard",this.disabled=!1,this.error=!1}connectedCallback(){super.connectedCallback(),this.handleBlur=this.handleBlur.bind(this),this.handleClick=this.handleClick.bind(this),this.handleFocus=this.handleFocus.bind(this),this.setInitialAttributes(),this.addEventListeners()}disconnectedCallback(){this.removeEventListeners()}addEventListeners(){this.addEventListener("blur",this.handleBlur),this.addEventListener("click",this.handleClick),this.addEventListener("focus",this.handleFocus)}removeEventListeners(){this.removeEventListener("blur",this.handleBlur),this.removeEventListener("click",this.handleClick),this.removeEventListener("focus",this.handleFocus)}handleClick(){var _a;if(!this.disabled){if("koerber-radio-group"===(null===(_a=this.parentElement)||void 0===_a?void 0:_a.tagName.toLowerCase()))return;this.checked||(this.emit("koerber-input"),this.emit("koerber-change")),this.checked=!0}}handleBlur(){this.hasFocus=!1,this.emit("koerber-blur")}handleFocus(){this.hasFocus=!0,this.emit("koerber-focus")}setInitialAttributes(){this.setAttribute("role","radio"),this.setAttribute("tabindex","-1"),this.setAttribute("aria-disabled",this.disabled?"true":"false"),this.accessibleName&&this.setAttribute("aria-label",this.accessibleName),this.accessibleDescription&&this.setAttribute("aria-description",this.accessibleDescription)}handleCheckedChange(){this.setAttribute("aria-checked",this.checked?"true":"false"),this.setAttribute("tabindex",this.checked?"0":"-1")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}render(){return lit.dy`
      <span
        part="base"
        class=${(0,class_map.$)({radio:!0,"radio--checked":this.checked,"radio--disabled":this.disabled,"radio--error":this.error,"radio--focused":this.hasFocus,"radio--standard":"standard"===this.size,"radio--comfortable":"comfortable"===this.size})}
      >
        <span part="${"control"+(this.checked?" control--checked":"")}" class="radio__control">
          ${this.checked?lit.dy`
                <koerber-icon
                  part="checked-icon"
                  size="medium"
                  class=${(0,class_map.$)({"radio__checked-icon":!0,"icon--medium":!0})}
                  library="system"
                  name="circle"
                ></koerber-icon>
              `:""}
        </span>

        <slot part="label" class="radio__label">
          <koerber-form-field-label label="${this.label}"></koerber-form-field-label>
        </slot>
      </span>
    `}}radio_component_Radio.styles=[component_styles.Z,radio_styles],radio_component_Radio.dependencies={"koerber-icon":icon_component.Z};const radio_component=radio_component_Radio;radio_component_decorate([(0,decorators.SB)()],radio_component_Radio.prototype,"checked",void 0),radio_component_decorate([(0,decorators.SB)()],radio_component_Radio.prototype,"hasFocus",void 0),radio_component_decorate([(0,decorators.Cb)()],radio_component_Radio.prototype,"value",void 0),radio_component_decorate([(0,decorators.Cb)()],radio_component_Radio.prototype,"label",void 0),radio_component_decorate([(0,decorators.Cb)({reflect:!0})],radio_component_Radio.prototype,"size",void 0),radio_component_decorate([(0,decorators.Cb)({type:Boolean,reflect:!0})],radio_component_Radio.prototype,"disabled",void 0),radio_component_decorate([(0,decorators.Cb)({type:Boolean,reflect:!0})],radio_component_Radio.prototype,"error",void 0),radio_component_decorate([(0,decorators.Cb)({attribute:"accessible-name",reflect:!0})],radio_component_Radio.prototype,"accessibleName",void 0),radio_component_decorate([(0,decorators.Cb)({attribute:"accessible-description",reflect:!0})],radio_component_Radio.prototype,"accessibleDescription",void 0),radio_component_decorate([(0,watch.Y)("checked")],radio_component_Radio.prototype,"handleCheckedChange",null),radio_component_decorate([(0,watch.Y)("disabled",{waitUntilFirstUpdate:!0})],radio_component_Radio.prototype,"handleDisabledChange",null);radio_component.define("koerber-radio");const search_option_styles=lit.iv`
  :host {
    display: block;
    user-select: none;
    -webkit-user-select: none;
    --koerber-search-spacing-vertical: 10px;
  }

  :host(:focus) {
    outline: none;
  }

  .search-option {
    position: relative;
    display: flex;
    align-items: center;
    font-family: var(--koerber-font-family-default);
    font-weight: var(--koerber-font-weight-regular);
    color: var(--koerber-color-text);
    padding: var(--koerber-spacing-xs) var(--koerber-search-spacing-vertical);
    transition: var(--koerber-transition-fast) fill;
    cursor: pointer;
  }

  .search-option--hover:not(.search-option--current):not(.search-option--disabled) {
    background-color: var(--koerber-color-bg-surface-secondary-hover);
    color: var(--koerber-color-text-link);
  }

  .search-option--current,
  .search-option--current.search-option--disabled {
    background-color: var(--koerber-color-bg-fill-secondary-hover);
    color: var(--koerber-color-text-link);
  }

  .search-option--disabled {
    outline: none;
    opacity: 0.5;
    cursor: not-allowed;
  }

  .search-option__label {
    flex: 1 1 auto;
    display: inline-block;
  }

  .search-option__prefix,
  .search-option__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .search-option__prefix::slotted(*) {
    margin-inline-end: var(--koerber-spacing-xs);
  }

  .search-option__suffix::slotted(*) {
    margin-inline-start: var(--koerber-spacing-xs);
  }

  /* Size modifiers */
  .search-option--small {
    font-size: var(--koerber-text-base-font-size);
    height: var(--koerber-height-size-compact);
    line-height: var(--koerber-text-base-line-height);
  }

  .search-option--medium {
    font-size: var(--koerber-text-base-font-size);
    height: var(--koerber-height-size-standard);
    line-height: var(--koerber-text-base-line-height);
  }

  .search-option--large {
    font-size: var(--koerber-text-md-font-size);
    height: var(--koerber-height-size-comfortable);
    line-height: var(--koerber-text-md-line-height);
  }

  @media (forced-colors: active) {
    :host(:hover:not([aria-disabled='true'])) .search-option {
      outline: dashed 1px SelectedItem;
      outline-offset: -1px;
    }
  }
`;var search_option_component_decorate=function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r};class search_option_component_SearchOption extends uikit_element.Z{constructor(){super(...arguments),this.localize=new localize.V(this),this.current=!1,this.selected=!1,this.hasHover=!1,this.value="",this.disabled=!1,this.size="medium"}connectedCallback(){super.connectedCallback(),this.setAttribute("role","option"),this.setAttribute("aria-selected","false")}handleMouseEnter(){this.hasHover=!0}handleMouseLeave(){this.hasHover=!1}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleSelectedChange(){this.setAttribute("aria-selected",this.selected?"true":"false")}handleValueChange(){"string"!=typeof this.value&&(this.value=String(this.value)),this.value.includes(" ")&&console.warn("search-option values preferably should not include spaces.",this)}getTextLabel(){const nodes=this.childNodes;let label="";return[...nodes].forEach((node=>{node.nodeType===Node.ELEMENT_NODE&&(node.hasAttribute("slot")||(label+=node.textContent)),node.nodeType===Node.TEXT_NODE&&(label+=node.textContent)})),label.trim()}render(){return lit.dy`
      <div
        part="base"
        class=${(0,class_map.$)({"search-option":!0,"search-option--current":this.current,"search-option--disabled":this.disabled,"search-option--selected":this.selected,"search-option--hover":this.hasHover,[`search-option--${this.size}`]:!0})}
        @mouseenter=${this.handleMouseEnter}
        @mouseleave=${this.handleMouseLeave}
      >
        <!-- Hide prefix slot instead of removing it entirely -->
        <!-- <slot part="prefix" name="prefix" class="search-option__prefix"></slot> -->
        <span part="label" class="search-option__label">${this.value}</span>
        <slot part="suffix" name="suffix" class="search-option__suffix"></slot>
      </div>
    `}}search_option_component_SearchOption.styles=[component_styles.Z,search_option_styles];const search_option_component=search_option_component_SearchOption;search_option_component_decorate([(0,decorators.IO)(".search-option__label")],search_option_component_SearchOption.prototype,"defaultSlot",void 0),search_option_component_decorate([(0,decorators.SB)()],search_option_component_SearchOption.prototype,"current",void 0),search_option_component_decorate([(0,decorators.SB)()],search_option_component_SearchOption.prototype,"selected",void 0),search_option_component_decorate([(0,decorators.SB)()],search_option_component_SearchOption.prototype,"hasHover",void 0),search_option_component_decorate([(0,decorators.Cb)({reflect:!0})],search_option_component_SearchOption.prototype,"value",void 0),search_option_component_decorate([(0,decorators.Cb)({type:Boolean,reflect:!0})],search_option_component_SearchOption.prototype,"disabled",void 0),search_option_component_decorate([(0,decorators.Cb)({reflect:!0})],search_option_component_SearchOption.prototype,"size",void 0),search_option_component_decorate([(0,watch.Y)("disabled")],search_option_component_SearchOption.prototype,"handleDisabledChange",null),search_option_component_decorate([(0,watch.Y)("selected")],search_option_component_SearchOption.prototype,"handleSelectedChange",null),search_option_component_decorate([(0,watch.Y)("value")],search_option_component_SearchOption.prototype,"handleValueChange",null);search_option_component.define("koerber-search-option");var default_value=__webpack_require__("./src/internal/default-value.ts"),internal_scroll=__webpack_require__("./src/internal/scroll.ts"),popup_component=__webpack_require__("./src/components/popup/popup.component.ts"),spinner_component=__webpack_require__("./src/components/spinner/spinner.component.ts");const search_styles=lit.iv`
  :host {
    display: block;
    --koerber-search-popup-max-height: 15rem;
    --koerber-search-vertical-input-spacing: 10px;
    --koerber-z-index-dropdown: 900;
  }

  /** The popup */
  .search {
    flex: 1 1 auto;
    display: inline-flex;
    width: 100%;
    position: relative;
    vertical-align: middle;
    border: solid var(--koerber-border-width-s) var(--koerber-color-border);
    border-radius: var(--koerber-border-radius-small);
  }

  .search__display-input::placeholder {
    color: var(--koerber-color-text-tertiary);
    font-family: var(--koerber-font-family-default);
    font-size: var(--koerber-text-base-font-size);
  }

  .search--placeholder .search__icon {
    color: var(--koerber-color-text-tertiary);
  }

  .search::part(popup) {
    z-index: var(--koerber-z-index-dropdown);
    --max-height: var(--koerber-search-popup-max-height, 0);
  }

  .search[data-current-placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .search[data-current-placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  /* Combobox */
  .search__combobox {
    background-color: transparent;
    flex: 1;
    display: flex;
    width: 100%;
    min-width: 0;
    position: relative;
    align-items: center;
    justify-content: start;
    letter-spacing: var(--koerber-letter-spacing-normal);
    vertical-align: middle;
    overflow: hidden;
    transition:
      var(--koerber-transition-fast) color,
      var(--koerber-transition-fast) border,
      var(--koerber-transition-fast) box-shadow,
      var(--koerber-transition-fast) background-color;
  }

  .search__display-input {
    position: relative;
    width: 100%;
    border: none;
    background: none;
    font-weight: var(--koerber-font-weight-regular);
    color: var(--koerber-input-color);
    overflow: hidden;
    padding: 0;
    margin: 0;
    -webkit-appearance: none;
  }

  .search__display-input.search--small {
    font-size: var(--koerber-text-base-font-size);
    line-height: var(--koerber-text-base-line-height);
  }

  .search__display-input.search--medium {
    font-size: var(--koerber-text-base-font-size);
    line-height: var(--koerber-text-base-line-height);
  }

  .search__display-input.search--large {
    font-size: var(--koerber-text-md-font-size);
    line-height: var(--koerber-text-md-line-height);
  }

  .search__value-input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    border: 0;
    margin: 0;
    opacity: 0;
    z-index: -1;
  }

  .search:not(.search--disabled):hover .search__display-input {
    color: var(--koerber-input-color-hover);
  }

  .search__display-input:focus {
    outline: none;
  }

  .search__tags {
    display: flex;
    flex: 1;
    align-items: center;
    flex-wrap: wrap;
    margin-inline-start: var(--koerber-spacing-2xs);
  }

  .search__tags::slotted(koerber-tag) {
  }

  .search--disabled .search__tags,
  .search--disabled .search__tags::slotted(koerber-tag) {
    cursor: not-allowed !important;
    user-select: none;
  }

  /* Standard searches */
  .search--standard.search--small:hover:not(.search--disabled) {
    border-color: var(--koerber-color-border-hover);
  }

  .search--standard.search--medium:hover:not(.search--disabled) {
    border-color: var(--koerber-color-border-hover);
  }

  .search--standard.search--large:hover:not(.search--disabled) {
    border-color: var(--koerber-color-border-hover);
  }

  .search--standard.search--small:hover.search--loading {
    border-color: var(--koerber-color-border-disabled);
  }

  .search--standard.search--medium:hover.search--loading {
    border-color: var(--koerber-color-border-disabled);
  }

  .search--standard.search--large:hover.search--loading {
    border-color: var(--koerber-color-border-disabled);
  }

  .search--standard.search--disabled {
    border-color: var(--koerber-color-border-disabled);
  }

  .search--standard.search--disabled .search__combobox {
    color: var(--koerber-color-text-disabled);
    opacity: 0.5;
    cursor: not-allowed;
    outline: none;
    border-color: var(--koerber-color-border-disabled);
    background-color: var(--koerber-color-bg-fill-disabled);
  }

  .search--standard.search--disabled .search__display-input {
    cursor: not-allowed;
  }

  .search--standard.search--disabled .search__clear {
    cursor: not-allowed;
    user-select: none;
  }

  .search--standard:not(.search--disabled).search--open .search__combobox,
  .search--standard:not(.search--disabled).search--focused .search__combobox {
    border-radius: var(--koerber-border-radius-small);
    box-shadow: 0 0 0 var(--koerber-border-width-m) var(--koerber-color-border-focus);
    border-color: var(--koerber-color-border-focus);
  }

  /* Sizes */
  .search--small .search__combobox {
    min-height: var(--koerber-height-size-compact);
    height: var(--koerber-height-size-compact);
    font-size: var(--koerber-text-base-font-size);
    padding-block: 0;
    padding-inline: var(--koerber-spacing-xs);
    border-color: var(--koerber-color-border);
  }

  .search--small .search__prefix::slotted(*) {
    margin-inline-end: var(--koerber-spacing-xs);
  }

  .search--small .search__tags {
    gap: 2px;
  }

  .search--medium .search__combobox {
    min-height: var(--koerber-height-size-standard);
    height: var(--koerber-height-size-standard);
    font-size: var(--koerber-text-md-font-size);
    padding-block: 0;
    padding: var(--koerber-search-vertical-input-spacing) var(--koerber-spacing-xs);
    border-color: var(--koerber-color-border);
  }

  .search--medium .search__prefix::slotted(*) {
    margin-inline-end: var(--koerber-spacing-xs);
  }

  .search--medium .search__tags {
    gap: 3px;
  }

  .search--large .search__combobox {
    min-height: var(--koerber-height-size-comfortable);
    height: var(--koerber-height-size-comfortable);
    font-size: var(--koerber-text-xl-font-size);
    padding-block: 0;
    padding-inline: var(--koerber-spacing-xs);
    border-color: var(--koerber-color-border);
  }

  .search--large .search__clear {
    margin-inline-start: var(--koerber-spacing-s);
  }

  .search--large .search__prefix::slotted(*) {
    margin-inline-end: var(--koerber-spacing-s);
  }

  .search--large .search__tags {
    gap: 4px;
  }

  /* Prefix */
  .search__prefix {
    flex: 0;
    display: inline-flex;
    align-items: center;
    color: var(--koerber-color-text-tertiary);
  }

  /* Clear button */
  .search__clear {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: var(--koerber-color-icon-secondary);
    border: none;
    background: none;
    padding: 0;
    cursor: pointer;
    transition: var(--koerber-transition-fast) color;
  }

  .search__clear:hover {
    color: var(--koerber-color-icon-secondary);
  }

  .search__loading:hover {
    color: var(--koerber-color-border-active);
  }

  .search__clear:focus {
    outline: none;
  }

  /* Expand icon */
  .search__icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    margin-inline-start: var(--koerber-spacing-xs);
  }

  /* Listbox */
  .search__listbox {
    display: block;
    position: relative;
    border: solid var(--koerber-border-width-s) var(--koerber-panel-border-color);
    padding-block: var(--koerber-spacing-xs);
    padding-inline: 0;
    overflow: auto;
    overscroll-behavior: none;

    /* Make sure it adheres to the popup's auto size */
    max-width: var(--auto-size-available-width);
    max-height: var(--max-height);
    border: solid;
    border-width: var(--koerber-border-width-s);
    border-color: var(--koerber-color-border);
    background: var(--koerber-color-text-bg-fill);
    border-radius: var(--koerber-border-radius-small);
  }

  /* Style the scrollbar */
  .search__listbox::-webkit-scrollbar {
    width: 4px;
  }

  .search__listbox::-webkit-scrollbar-thumb {
    background-color: var(--koerber-color-neutral5);
    border-radius: var(--koerber-border-radius-large);
  }

  /* Hide the scrollbar arrows */
  .search__listbox::-webkit-scrollbar-button {
    display: none;
  }

  .search__listbox::-webkit-scrollbar-track {
    background-color: var(--koerber-color-neutral4);
  }

  .search__listbox ::slotted(koerber-divider) {
    --spacing: var(--koerber-spacing-xs);
  }

  .search__listbox ::slotted(small) {
    color: var(--koerber-color-neutral-500);
    padding-block: var(--koerber-spacing-xs);
    padding-inline: var(--koerber-spacing-m);
  }

  /* Error inputs */

  .search-error-icon {
    color: var(--koerber-color-sema2);
  }

  .search--error {
    background-color: var(--koerber-color-bg);
    border: solid var(--koerber-border-width-s) var(--koerber-color-bg-fill-error);
  }

  .search-error-icon-slot {
    display: flex;
    align-items: center;
    width: 1em;
    justify-content: center;
  }

  .form-control__error-message {
    font-size: var(--koerber-text-base-font-size);
    color: var(--koerber-color-text-error);
  }

  .search--standard.search--loading .search--loading:hover .search--standard:hover {
    color: var(--koerber-color-border-disabled);
    opacity: 0.5;
    cursor: not-allowed;
    border-color: var(--koerber-color-border-disabled);
    background-color: transparent;
  }

  /** Custom messages - TODO Error and Loading */
  .search__listbox-min-length {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--koerber-spacing-xs);
  }

  .search__listbox-min-length .message {
    font-size: var(--koerber-text-base-font-size);
    font-weight: var(--koerber-font-weight-regular);
    line-height: var(--koerber-text-base-line-height);
    color: var(--koerber-color-text-secondary);
  }

  .options {
    display: contents;
  }

  .options--hidden {
    display: none;
  }
`;var tag_component=__webpack_require__("./src/components/tag/tag.component.ts"),search_component_decorate=function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r};class search_component_Search extends uikit_element.Z{constructor(){super(...arguments),this.localize=new localize.V(this),this.hasFocus=!1,this.selectedOptions=[],this.minLengthMessage="",this.searchResults=0,this.name="",this.value="",this.defaultValue="",this.placeholder="",this.size="medium",this.loading=!1,this.loadingMessage="Disabled while loading",this.maxHeight=0,this.minLength=0,this.disabled=!1,this.open=!1,this.hoist=!1,this.placement="bottom",this.required=!1,this.error=!1,this.handleDocumentFocusIn=event=>{const path=event.composedPath();this&&!path.includes(this)&&this.hide()},this.handleDocumentKeyDown=event=>{if("Escape"===event.key&&this.open&&(event.preventDefault(),event.stopPropagation(),this.hide(),this.displayInput.focus({preventScroll:!0})),"Enter"===event.key)return event.preventDefault(),event.stopImmediatePropagation(),this.open?void(this.currentOption&&!this.currentOption.disabled&&(this.setSelectedOptions(this.currentOption),this.updateComplete.then((()=>{this.emit("koerber-input"),this.emit("koerber-change")})),this.hide(),this.displayInput.focus({preventScroll:!0}))):void this.show();if(["ArrowUp","ArrowDown","Home","End"].includes(event.key)){const allOptions=this.getAllOptions(),currentIndex=allOptions.indexOf(this.currentOption);let newIndex=Math.max(0,currentIndex);if(event.preventDefault(),!this.open&&(this.show(),this.currentOption))return;"ArrowDown"===event.key?(newIndex=currentIndex+1,newIndex>allOptions.length-1&&(newIndex=0)):"ArrowUp"===event.key?(newIndex=currentIndex-1,newIndex<0&&(newIndex=allOptions.length-1)):"Home"===event.key?newIndex=0:"End"===event.key&&(newIndex=allOptions.length-1),this.setCurrentOption(allOptions[newIndex])}if(1===event.key.length||"Backspace"===event.key){if(event.metaKey||event.ctrlKey||event.altKey)return;if(!this.open){if("Backspace"===event.key)return;this.show()}"Backspace"===event.key&&0===this.value.length&&this.hide(),this.setCurrentOption(this.currentOption),this.currentOption&&(0,internal_scroll.zT)(this.currentOption,this.listbox,"vertical","auto")}},this.handleDocumentMouseDown=event=>{const path=event.composedPath();this&&!path.includes(this)&&this.hide()}}connectedCallback(){super.connectedCallback(),this.open=!1}firstUpdated(){this.handleDefaultSlotChange()}addOpenListeners(){document.addEventListener("focusin",this.handleDocumentFocusIn),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown)}removeOpenListeners(){document.removeEventListener("focusin",this.handleDocumentFocusIn),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown)}async handleAnimations(previousValue){const{keyframes,options}=(0,animation_registry.O8)(this,"search.icon.show",{dir:this.localize.dir()});(0===previousValue.length&&this.value.length>0||0===this.value.length)&&await(0,animate.nv)(this.searchButton,keyframes,options)}handleInput(){const previousValue=this.value;this.value=this.displayInput.value,this.handleAnimations(previousValue),this.value.length>=this.minLength&&this.emit("koerber-change"),this.emit("koerber-input")}handleChange(){const previousValue=this.value;this.value=this.displayInput.value,this.handleAnimations(previousValue),this.emit("koerber-change")}handleFocus(){this.hasFocus=!0,this.emit("koerber-focus")}handleBlur(){this.hasFocus=!1,this.emit("koerber-blur")}handleComboboxClick(event){const isIconButton=event.composedPath().some((el=>el instanceof Element&&"koerber-icon-button"===el.tagName.toLowerCase()));this.disabled||isIconButton||0===this.value.length||(event.preventDefault(),this.open||this.show(),this.displayInput.focus({preventScroll:!0}))}handleComboboxKeyDown(event){event.stopPropagation(),requestAnimationFrame((()=>{this.handleDocumentKeyDown(event)}))}handleClearClick(event){event.stopPropagation(),this.value="",this.displayInput.focus({preventScroll:!0}),this.hide(),this.updateComplete.then((()=>{this.emit("koerber-clear"),this.emit("koerber-input"),this.emit("koerber-change")}))}handleClearMouseDown(event){event.stopPropagation(),event.preventDefault()}handleOptionClick(event){const option=event.target.closest("koerber-search-option"),oldValue=this.value;option&&!option.disabled&&(this.setSelectedOptions(option),this.updateComplete.then((()=>this.displayInput.focus({preventScroll:!0}))),this.value!==oldValue&&this.updateComplete.then((()=>{this.emit("koerber-input"),this.emit("koerber-change")})),this.hide(),this.displayInput.focus({preventScroll:!0}))}handleDefaultSlotChange(){const allOptions=this.getAllOptions();this.searchResults=allOptions.length}getAllOptions(){return[...this.querySelectorAll("koerber-search-option")]}getFirstOption(){return this.querySelector("koerber-search-option")}setCurrentOption(option){this.getAllOptions().forEach((el=>{el.current=!1,el.tabIndex=-1})),option&&(this.currentOption=option,option.current=!0,option.tabIndex=0)}setSelectedOptions(option){const newSelectedOptions=[option];this.getAllOptions().forEach((el=>el.selected=!1)),newSelectedOptions.length&&newSelectedOptions.forEach((el=>el.selected=!0)),this.selectionChanged()}selectionChanged(){this.selectedOptions=this.getAllOptions().filter((el=>el.selected)),this.value=this.selectedOptions[0].value}async updateMessage(){await this.updateComplete,this.searchResults<=0&&(this.minLengthMessage="No Results"),this.value.length<this.minLength&&(this.minLengthMessage=`No Results - Minimum Characters Required: ${this.minLength}`)}async syncOptions(){const options=this.getAllOptions();await Promise.all(options.map((async option=>{option.size=this.size,await option.updateComplete})))}handleSizeChange(){this.syncOptions()}handleDisabledChange(){this.disabled&&(this.open=!1,this.handleOpenChange())}handleValueChange(){this.updateMessage()}handleMinLengthChange(){this.updateMessage()}async handleOpenChange(){if(!this.open||this.disabled||this.loading){this.emit("koerber-hide"),this.removeOpenListeners(),await(0,animate.U_)(this);const{keyframes,options}=(0,animation_registry.O8)(this,"search.hide",{dir:this.localize.dir()});await(0,animate.nv)(this.popup.popup,keyframes,options),this.listbox.hidden=!0,this.popup.active=!1,this.emit("koerber-after-hide")}else{this.maxHeight>0&&this.listbox.style.setProperty("max-height",`${this.maxHeight}px`),this.handleSizeChange(),this.setCurrentOption(this.selectedOptions[0]||this.getFirstOption()),this.emit("koerber-show"),this.addOpenListeners(),await(0,animate.U_)(this),this.listbox.hidden=!1,this.popup.active=!0,requestAnimationFrame((()=>{this.setCurrentOption(this.currentOption)}));const{keyframes,options}=(0,animation_registry.O8)(this,"search.show",{dir:this.localize.dir()});await(0,animate.nv)(this.popup.popup,keyframes,options),this.currentOption&&(0,internal_scroll.zT)(this.currentOption,this.listbox,"vertical","auto"),this.emit("koerber-after-show"),this.displayInput.focus({preventScroll:!0})}}async show(){if(!(this.open||this.disabled||this.loading))return this.open=!0,(0,internal_event.m)(this,"koerber-after-show")}async hide(){if(this.open&&!this.disabled&&!this.loading)return this.open=!1,(0,internal_event.m)(this,"koerber-after-hide")}focus(options){this.displayInput.focus(options)}blur(){this.displayInput.blur()}render(){const isResultEmpty=this.minLength>this.value.length||this.searchResults<=0,noResultHTML=lit.dy`
      <div class="search__listbox-min-length">
        <koerber-icon name="alert-circle"></koerber-icon>
        <span class="message">${this.minLengthMessage}</span>
      </div>
    `;return lit.dy`
      <div
        part="form-control"
        class=${(0,class_map.$)({"form-control":!0,"form-control--small":"small"===this.size,"form-control--medium":"medium"===this.size,"form-control--large":"large"===this.size,"form-control__label--disabled":this.disabled})}
      >
        <div part="form-control-input" class="form-control-input">
          <koerber-popup
            class=${(0,class_map.$)({search:!0,"search--standard":!0,"search--open":this.open&&!this.loading,"search--disabled":this.disabled,"search--focused":this.hasFocus,"search--placeholder":0===this.value.length,"search--top":"top"===this.placement,"search--bottom":"bottom"===this.placement,"search--small":"small"===this.size,"search--medium":"medium"===this.size,"search--large":"large"===this.size,"search--loading":this.loading,"search--error":this.error})}
            placement=${this.placement}
            strategy=${this.hoist?"fixed":"absolute"}
            flip
            shift
            sync="width"
            auto-size="vertical"
            auto-size-padding="10"
          >
            <div
              part="combobox"
              class="search__combobox"
              slot="anchor"
              @keydown=${this.handleComboboxKeyDown}
              @click=${this.handleComboboxClick}
            >
              <slot part="prefix" name="prefix" class="search__prefix"></slot>

              <input
                part="display-input"
                class=${(0,class_map.$)({"search__display-input":!0,"search--small":"small"===this.size,"search--medium":"medium"===this.size,"search--large":"large"===this.size})}
                type="text"
                placeholder=${this.placeholder}
                .disabled=${this.disabled||this.loading}
                .value=${(0,live.a)(this.value)}
                autocomplete="off"
                spellcheck="false"
                autocapitalize="off"
                aria-label=${(0,if_defined.o)(this.accessibleName)}
                aria-description=${(0,if_defined.o)(this.accessibleDescription)}
                aria-controls="listbox"
                aria-expanded=${this.open?"true":"false"}
                aria-haspopup="listbox"
                aria-labelledby="label"
                aria-disabled=${this.disabled||this.loading}
                role="combobox"
                tabindex="0"
                @input=${this.handleInput}
                @change=${this.handleChange}
                @focus=${this.handleFocus}
                @blur=${this.handleBlur}
              />

              <slot name="search-icon" part="search__icon" class="search__icon">
                ${this.value&&this.value.length>0?lit.dy`
                      <button
                        part="clear-button"
                        class="search__clear"
                        type="button"
                        aria-label=${this.localize.term("clearEntry")}
                        @mousedown=${this.handleClearMouseDown}
                        @click=${this.handleClearClick}
                        ?disabled=${this.disabled||this.loading}
                        tabindex="-1"
                      >
                        <koerber-icon name="close" library="system"></koerber-icon>
                      </button>
                    `:lit.dy` <koerber-icon name="magnify"></koerber-icon> `}
              </slot>
            </div>

            <div
              id="listbox"
              role="listbox"
              aria-expanded=${this.open?"true":"false"}
              part="listbox"
              class="search__listbox"
              tabindex="-1"
              @mouseup=${this.handleOptionClick}
              @slotchange=${this.handleDefaultSlotChange}
            >
              ${isResultEmpty?lit.dy` ${noResultHTML} `:""}

              <slot class="${(0,class_map.$)({options:!0,"options--hidden":isResultEmpty})}"> </slot>

              <slot></slot>
            </div>
          </koerber-popup>
        </div>
      </div>
    `}}search_component_Search.styles=[component_styles.Z,form_control_styles.Z,search_styles],search_component_Search.dependencies={"koerber-icon":icon_component.Z,"koerber-popup":popup_component.Z,"koerber-tag":tag_component.Z,"koerber-spinner":spinner_component.Z};const search_component=search_component_Search;search_component_decorate([(0,decorators.IO)(".search")],search_component_Search.prototype,"popup",void 0),search_component_decorate([(0,decorators.IO)(".search__display-input")],search_component_Search.prototype,"displayInput",void 0),search_component_decorate([(0,decorators.IO)(".search__listbox")],search_component_Search.prototype,"listbox",void 0),search_component_decorate([(0,decorators.IO)(".search__icon")],search_component_Search.prototype,"searchButton",void 0),search_component_decorate([(0,decorators.SB)()],search_component_Search.prototype,"hasFocus",void 0),search_component_decorate([(0,decorators.SB)()],search_component_Search.prototype,"currentOption",void 0),search_component_decorate([(0,decorators.SB)()],search_component_Search.prototype,"selectedOptions",void 0),search_component_decorate([(0,decorators.SB)()],search_component_Search.prototype,"minLengthMessage",void 0),search_component_decorate([(0,decorators.SB)()],search_component_Search.prototype,"searchResults",void 0),search_component_decorate([(0,decorators.Cb)()],search_component_Search.prototype,"name",void 0),search_component_decorate([(0,decorators.Cb)({reflect:!0})],search_component_Search.prototype,"value",void 0),search_component_decorate([(0,default_value.L)()],search_component_Search.prototype,"defaultValue",void 0),search_component_decorate([(0,decorators.Cb)()],search_component_Search.prototype,"placeholder",void 0),search_component_decorate([(0,decorators.Cb)({reflect:!0})],search_component_Search.prototype,"size",void 0),search_component_decorate([(0,decorators.Cb)({type:Boolean,reflect:!0})],search_component_Search.prototype,"loading",void 0),search_component_decorate([(0,decorators.Cb)({type:String})],search_component_Search.prototype,"loadingMessage",void 0),search_component_decorate([(0,decorators.Cb)({attribute:"max-height",type:Number})],search_component_Search.prototype,"maxHeight",void 0),search_component_decorate([(0,decorators.Cb)({type:Number,reflect:!0,attribute:"min-length"})],search_component_Search.prototype,"minLength",void 0),search_component_decorate([(0,decorators.Cb)({type:Boolean,reflect:!0})],search_component_Search.prototype,"disabled",void 0),search_component_decorate([(0,decorators.Cb)({type:Boolean,reflect:!0})],search_component_Search.prototype,"open",void 0),search_component_decorate([(0,decorators.Cb)({type:Boolean})],search_component_Search.prototype,"hoist",void 0),search_component_decorate([(0,decorators.Cb)({reflect:!0})],search_component_Search.prototype,"placement",void 0),search_component_decorate([(0,decorators.Cb)({type:Boolean,reflect:!0})],search_component_Search.prototype,"required",void 0),search_component_decorate([(0,decorators.Cb)({type:Boolean})],search_component_Search.prototype,"error",void 0),search_component_decorate([(0,decorators.Cb)({attribute:"accessible-name",reflect:!0})],search_component_Search.prototype,"accessibleName",void 0),search_component_decorate([(0,decorators.Cb)({attribute:"accessible-description",reflect:!0})],search_component_Search.prototype,"accessibleDescription",void 0),search_component_decorate([(0,watch.Y)("disabled",{waitUntilFirstUpdate:!0})],search_component_Search.prototype,"handleDisabledChange",null),search_component_decorate([(0,watch.Y)("value",{waitUntilFirstUpdate:!0})],search_component_Search.prototype,"handleValueChange",null),search_component_decorate([(0,watch.Y)("minLength")],search_component_Search.prototype,"handleMinLengthChange",null),search_component_decorate([(0,watch.Y)("open",{waitUntilFirstUpdate:!0})],search_component_Search.prototype,"handleOpenChange",null),(0,animation_registry.jx)("search.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}}),(0,animation_registry.jx)("search.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}}),(0,animation_registry.jx)("search.icon.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}});search_component.define("koerber-search");__webpack_require__("./src/components/select-option/select-option.ts"),__webpack_require__("./src/components/select/select.ts");spinner_component.Z.define("koerber-spinner");tag_component.Z.define("koerber-tag");__webpack_require__("./src/components/textarea/textarea.ts"),__webpack_require__("./src/components/toggle/toggle.ts"),__webpack_require__("./src/components/tooltip/tooltip.ts"),__webpack_require__("./src/components/tree-item/tree-item.ts");const tree_styles=lit.iv`
  :host {
    /*
     * These are actually used by tree item, but we define them here so they can more easily be set and all tree items
     * stay consistent.
     */
    --indent-guide-color: var(--koerber-color-neutral-200);
    --indent-guide-offset: 0;
    --indent-guide-style: solid;
    --indent-guide-width: 0;
    --indent-size: var(--koerber-spacing-m);

    display: block;
    isolation: isolate;

    /*
     * Tree item indentation uses the "em" unit to increment its width on each level, so setting the font size to zero
     * here removes the indentation for all the nodes on the first level.
     */
    font-size: 0;
  }
`;var tree_item_component=__webpack_require__("./src/components/tree-item/tree-item.component.ts"),tree_component_decorate=function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r};function syncCheckboxes(changedTreeItem,initialSync=!1){function syncParentItem(treeItem){const children=treeItem.getChildrenItems({includeDisabled:!1});if(children.length){const allChecked=children.every((item=>item.selected)),allUnchecked=children.every((item=>!item.selected&&!item.indeterminate));treeItem.selected=allChecked,treeItem.indeterminate=!allChecked&&!allUnchecked}}!function syncDescendants(treeItem){for(const childItem of treeItem.getChildrenItems())childItem.selected=initialSync?treeItem.selected||childItem.selected:!childItem.disabled&&treeItem.selected,syncDescendants(childItem);initialSync&&syncParentItem(treeItem)}(changedTreeItem),function syncAncestors(treeItem){const parentItem=treeItem.parentElement;tree_item_component.Z.isTreeItem(parentItem)&&(syncParentItem(parentItem),syncAncestors(parentItem))}(changedTreeItem)}class tree_component_Tree extends uikit_element.Z{constructor(){super(),this.selection="multiple",this.localize=new localize.V(this),this.clickTarget=null,this.initTreeItem=item=>{item.selectable="multiple"===this.selection,["expand","collapse"].filter((status=>!!this.querySelector(`[slot="${status}-icon"]`))).forEach((status=>{const existingIcon=item.querySelector(`[slot="${status}-icon"]`);null===existingIcon?item.append(this.getExpandButtonIcon(status)):existingIcon.hasAttribute("data-default")&&existingIcon.replaceWith(this.getExpandButtonIcon(status))}))},this.handleTreeChanged=mutations=>{for(const mutation of mutations){const addedNodes=[...mutation.addedNodes].filter(tree_item_component.Z.isTreeItem),removedNodes=[...mutation.removedNodes].filter(tree_item_component.Z.isTreeItem);addedNodes.forEach(this.initTreeItem),removedNodes.includes(this.lastFocusedItem)&&this.focusItem(this.getFocusableItems()[0])}},this.handleFocusOut=event=>{const relatedTarget=event.relatedTarget;relatedTarget&&this.contains(relatedTarget)||(this.tabIndex=0)},this.handleFocusIn=event=>{const target=event.target;event.target===this&&this.focusItem(this.lastFocusedItem||this.getAllTreeItems()[0]),tree_item_component.Z.isTreeItem(target)&&!target.disabled&&(this.lastFocusedItem&&(this.lastFocusedItem.tabIndex=-1),this.lastFocusedItem=target,this.tabIndex=-1,target.tabIndex=0)},this.addEventListener("focusin",this.handleFocusIn),this.addEventListener("focusout",this.handleFocusOut),this.addEventListener("koerber-lazy-change",this.handleSlotChange)}async connectedCallback(){super.connectedCallback(),this.setAttribute("role","tree"),this.setAttribute("tabindex","0"),await this.updateComplete,this.mutationObserver=new MutationObserver(this.handleTreeChanged),this.mutationObserver.observe(this,{childList:!0,subtree:!0})}disconnectedCallback(){super.disconnectedCallback(),this.mutationObserver.disconnect()}getExpandButtonIcon(status){const icon=("expand"===status?this.expandedIconSlot:this.collapsedIconSlot).assignedElements({flatten:!0})[0];if(icon){const clone=icon.cloneNode(!0);return[clone,...clone.querySelectorAll("[id]")].forEach((el=>el.removeAttribute("id"))),clone.setAttribute("data-default",""),clone.slot=`${status}-icon`,clone}return null}syncTreeItems(selectedItem){const items=this.getAllTreeItems();if("multiple"===this.selection)syncCheckboxes(selectedItem);else for(const item of items)item!==selectedItem&&(item.selected=!1)}selectItem(selectedItem){const previousSelection=[...this.selectedItems];"multiple"===this.selection?(selectedItem.selected=!selectedItem.selected,selectedItem.lazy&&(selectedItem.open=!0),this.syncTreeItems(selectedItem)):"single"===this.selection||selectedItem.isLeaf?(selectedItem.selected=!0,this.syncTreeItems(selectedItem)):"leaf"===this.selection&&(selectedItem.open=!selectedItem.open);const nextSelection=this.selectedItems;(previousSelection.length!==nextSelection.length||nextSelection.some((item=>!previousSelection.includes(item))))&&Promise.all(nextSelection.map((el=>el.updateComplete))).then((()=>{this.emit("koerber-selection-change",{detail:{selection:nextSelection}})}))}getAllTreeItems(){return[...this.querySelectorAll("koerber-tree-item")]}focusItem(item){null==item||item.focus()}handleKeyDown(event){if(!["ArrowDown","ArrowUp","ArrowRight","ArrowLeft","Home","End","Enter"," "].includes(event.key))return;const items=this.getFocusableItems(),isLtr="ltr"===this.localize.dir(),isRtl="rtl"===this.localize.dir();if(items.length>0){event.preventDefault();const activeItemIndex=items.findIndex((item=>item.matches(":focus"))),activeItem=items[activeItemIndex],focusItemAt=index=>{const item=items[function clamp(value,min,max){return n=value<min?min:value>max?max:value,Object.is(n,-0)?0:n;var n}(index,0,items.length-1)];this.focusItem(item)},toggleExpand=open=>{activeItem.open=open};"ArrowDown"===event.key?focusItemAt(activeItemIndex+1):"ArrowUp"===event.key?focusItemAt(activeItemIndex-1):isLtr&&"ArrowRight"===event.key||isRtl&&"ArrowLeft"===event.key?!activeItem||activeItem.disabled||activeItem.open||activeItem.isLeaf&&!activeItem.lazy?focusItemAt(activeItemIndex+1):toggleExpand(!0):isLtr&&"ArrowLeft"===event.key||isRtl&&"ArrowRight"===event.key?!activeItem||activeItem.disabled||activeItem.isLeaf||!activeItem.open?focusItemAt(activeItemIndex-1):toggleExpand(!1):"Home"===event.key?focusItemAt(0):"End"===event.key?focusItemAt(items.length-1):"Enter"!==event.key&&" "!==event.key||activeItem.disabled||this.selectItem(activeItem)}}handleClick(event){const target=event.target,treeItem=target.closest("koerber-tree-item"),isExpandButton=event.composedPath().some((el=>{var _a;return null===(_a=null==el?void 0:el.classList)||void 0===_a?void 0:_a.contains("tree-item__expand-button")})),isAction=event.composedPath().some((el=>{var _a;return null===(_a=null==el?void 0:el.classList)||void 0===_a?void 0:_a.contains("tree-item__actions")})),isCheckbox=event.composedPath().some((el=>{var _a;return null===(_a=null==el?void 0:el.classList)||void 0===_a?void 0:_a.contains("tree-item__checkbox")}));treeItem&&!treeItem.disabled&&target===this.clickTarget&&(isExpandButton?treeItem.open=!treeItem.open:("multiple"!==this.selection||isAction)&&"single"!==this.selection&&"leaf"!==this.selection||this.selectItem(treeItem),isCheckbox&&event.preventDefault())}handleMouseDown(event){this.clickTarget=event.target}handleSlotChange(){this.getAllTreeItems().forEach(this.initTreeItem)}async handleSelectionChange(){const isSelectionMultiple="multiple"===this.selection,items=this.getAllTreeItems();this.setAttribute("aria-multiselectable",isSelectionMultiple?"true":"false");for(const item of items)item.selectable=isSelectionMultiple;isSelectionMultiple&&(await this.updateComplete,[...this.querySelectorAll(":scope > koerber-tree-item")].forEach((treeItem=>syncCheckboxes(treeItem,!0))))}get selectedItems(){return this.getAllTreeItems().filter((item=>item.selected))}getFocusableItems(){const items=this.getAllTreeItems(),collapsedItems=new Set;return items.filter((item=>{var _a;if(item.disabled)return!1;const parent=null===(_a=item.parentElement)||void 0===_a?void 0:_a.closest("[role=treeitem]");return parent&&(!parent.open||parent.loading||collapsedItems.has(parent))&&collapsedItems.add(item),!collapsedItems.has(item)}))}render(){return lit.dy`
      <div
        part="base"
        class="tree"
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      >
        <slot @slotchange=${this.handleSlotChange}></slot>
        <slot name="expand-icon" hidden aria-hidden="true"> </slot>
        <slot name="collapse-icon" hidden aria-hidden="true"> </slot>
      </div>
    `}}tree_component_Tree.styles=[component_styles.Z,tree_styles];const tree_component=tree_component_Tree;tree_component_decorate([(0,decorators.IO)("slot:not([name])")],tree_component_Tree.prototype,"defaultSlot",void 0),tree_component_decorate([(0,decorators.IO)("slot[name=expand-icon]")],tree_component_Tree.prototype,"expandedIconSlot",void 0),tree_component_decorate([(0,decorators.IO)("slot[name=collapse-icon]")],tree_component_Tree.prototype,"collapsedIconSlot",void 0),tree_component_decorate([(0,decorators.SB)()],tree_component_Tree.prototype,"selection",void 0),tree_component_decorate([(0,watch.Y)("selection")],tree_component_Tree.prototype,"handleSelectionChange",null);tree_component.define("koerber-tree");__webpack_require__("./src/styles/foundations/grid.css"),__webpack_require__("./src/styles/foundations/typography.css")},"./src/stories/utils.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>getStoryTemplate,c:()=>generateAttributes});var lit__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/lit/index.js"),lit_html_directives_unsafe_html_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/lit-html/directives/unsafe-html.js");const generateAttributes=({args})=>Object.entries(args).map((([key,value])=>"click"===key?`${key}="() => {}"`:"boolean"==typeof value?value?`${key}`:null:`${key}="${value}"`)).filter(Boolean).join(" "),getStoryTemplate=htmlString=>lit__WEBPACK_IMPORTED_MODULE_0__.dy`${(0,lit_html_directives_unsafe_html_js__WEBPACK_IMPORTED_MODULE_1__.A)(htmlString)}`}}]);
//# sourceMappingURL=2930.d894b7ae.iframe.bundle.js.map