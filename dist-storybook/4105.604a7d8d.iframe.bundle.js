"use strict";(self.webpackChunk_koerber_uikit=self.webpackChunk_koerber_uikit||[]).push([[4105],{"./src/components/divider/divider.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>divider_component});var decorators=__webpack_require__("./node_modules/lit/decorators.js"),watch=__webpack_require__("./src/internal/watch.ts"),component_styles=__webpack_require__("./src/styles/component.styles.ts");const divider_styles=__webpack_require__("./node_modules/lit/index.js").iv`
  :host {
    --color: var(--koerber-color-bg-fill);
    --width: var(--koerber-border-width-s);
    --spacing: var(--koerber-spacing-s);
    width: 100%;
    height: 100%;
  }

  :host(:not([vertical])) {
    display: block;
    border-top: solid var(--width) var(--color);
    margin: 0;
    color: var(--color);
  }

  :host([vertical]) {
    display: flex;
    height: 10rem;
    border-left: solid var(--width) var(--color);
    margin: 0;
    color: var(--color);
  }
`;var uikit_element=__webpack_require__("./src/internal/uikit-element.ts"),__decorate=function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r};class Divider extends uikit_element.Z{constructor(){super(...arguments),this.variant="primary",this.vertical=!1,this.width=0}connectedCallback(){super.connectedCallback(),this.setAttribute("role","separator")}handleVerticalChange(){this.setAttribute("aria-orientation",this.vertical?"vertical":"horizontal")}handleVariantChange(){const widthStyle=`--width : ${this.width>0?this.width:1}px`;this.setAttribute("style","primary"===this.variant?`--color:var(--koerber-color-border); ${widthStyle}`:`--color:var(--koerber-color-border-secondary); ${widthStyle}`)}handleWidthChange(){const colorStyle="primary"===this.variant?"--color:var(--koerber-color-border); ":"--color:var(--koerber-color-border-secondary); ";this.setAttribute("style",colorStyle+`--width: ${this.width>0?this.width:1}px`)}}Divider.styles=[component_styles.Z,divider_styles];const divider_component=Divider;__decorate([(0,decorators.Cb)({reflect:!0})],Divider.prototype,"variant",void 0),__decorate([(0,decorators.Cb)({type:Boolean,reflect:!0})],Divider.prototype,"vertical",void 0),__decorate([(0,decorators.Cb)({type:Number,reflect:!0})],Divider.prototype,"width",void 0),__decorate([(0,watch.Y)("vertical")],Divider.prototype,"handleVerticalChange",null),__decorate([(0,watch.Y)("variant")],Divider.prototype,"handleVariantChange",null),__decorate([(0,watch.Y)("width")],Divider.prototype,"handleWidthChange",null)},"./src/components/form-field-error/form-field-error.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>form_field_error_component});var lit=__webpack_require__("./node_modules/lit/index.js"),component_styles=__webpack_require__("./src/styles/component.styles.ts");const form_field_error_styles=lit.iv`
  :host {
    display: block;
  }

  .form-field-error {
    display: flex;
    color: var(--koerber-color-bg-fill-error);
    font-size: var(--koerber-font-size-caption-desktop);
    line-height: var(--koerber-font-line-height-1-desktop);
  }
`;var uikit_element=__webpack_require__("./src/internal/uikit-element.ts");class FormFieldError extends uikit_element.Z{render(){return lit.dy`<div part="base" class="form-field-error"><slot></slot></div>`}}FormFieldError.styles=[form_field_error_styles,component_styles.Z];const form_field_error_component=FormFieldError},"./src/components/form-field-label/form-field-label.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>form_field_label_component});var lit=__webpack_require__("./node_modules/lit/index.js"),decorators=__webpack_require__("./node_modules/lit/decorators.js"),watch=__webpack_require__("./src/internal/watch.ts"),icon_component=__webpack_require__("./src/components/icon/icon.component.ts");const form_field_label_styles=lit.iv`
  :host {
    display: block;
  }

  .body {
    height: 1.2em;
    line-height: 1em;
    display: flex;
  }

  .label_container {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .asterisk {
    padding-right: 5px;
  }

  .info_icon {
    padding-left: 10px;
    padding-right: 10px;
    height: 16px;
    width: 16px;
    padding-bottom: 3px;
  }
`;var tooltip_component=__webpack_require__("./src/components/tooltip/tooltip.component.ts"),uikit_element=__webpack_require__("./src/internal/uikit-element.ts"),__decorate=function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r};class FormFieldLabel extends uikit_element.Z{constructor(){super(...arguments),this.label="",this.tooltip="",this.required=!1,this.accessibleHidden=!1}handleRequiredChange(){this.required=!this.required}render(){const infoIcon=this.tooltip.trim().length>0?lit.dy`
            <koerber-tooltip placement="top-start" hoist content=${this.tooltip}>
              <koerber-icon class="info_icon" size="medium" name="information"></koerber-icon>
            </koerber-tooltip>
          `:"";return lit.dy`${this.label.trim().length>0?lit.dy`
          <div class="body" aria-label=${this.label} ?aria-hidden=${this.accessibleHidden}>
            ${this.required?lit.dy`<span class="asterisk">*</span>`:""}
            <span class="label_container">${this.label}</span>
            ${infoIcon}
          </div>
        `:""}`}}FormFieldLabel.styles=form_field_label_styles,FormFieldLabel.dependencies={"koerber-icon":icon_component.Z,"koerber-tooltip":tooltip_component.Z};const form_field_label_component=FormFieldLabel;__decorate([(0,decorators.IO)("slot:not([name])")],FormFieldLabel.prototype,"defaultSlot",void 0),__decorate([(0,decorators.Cb)()],FormFieldLabel.prototype,"label",void 0),__decorate([(0,decorators.Cb)({reflect:!0})],FormFieldLabel.prototype,"tooltip",void 0),__decorate([(0,decorators.Cb)({reflect:!0,type:Boolean})],FormFieldLabel.prototype,"required",void 0),__decorate([(0,decorators.Cb)({type:Boolean,reflect:!0,attribute:"accessible-hidden"})],FormFieldLabel.prototype,"accessibleHidden",void 0),__decorate([(0,watch.Y)("required",{waitUntilFirstUpdate:!0})],FormFieldLabel.prototype,"handleRequiredChange",null)},"./src/components/form-field/form-field.ts":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{var slot=__webpack_require__("./src/internal/slot.ts"),lit=__webpack_require__("./node_modules/lit/index.js"),decorators=__webpack_require__("./node_modules/lit/decorators.js"),watch=__webpack_require__("./src/internal/watch.ts"),form_field_error_component=__webpack_require__("./src/components/form-field-error/form-field-error.component.ts"),form_field_label_component=__webpack_require__("./src/components/form-field-label/form-field-label.component.ts");const form_field_styles=lit.iv`
  :host {
    display: block;
  }

  .form-field {
    display: flex;
    flex-direction: column;
  }

  .heading-container {
    display: flex;
    justify-content: space-between;
  }

  .value-hint {
    font-size: var(--koerber-text-sm-font-size);
    color: var(--koerber-color-text-tertiary);
  }

  .form-control {
    display: flex;
    align-items: center;
  }

  .form-control .control {
    display: flex;
    flex-direction: column;
    flex: 1;
    position: relative;
  }

  .help-text {
    font-size: var(--koerber-text-sm-font-size);
    color: var(--koerber-color-text-tertiary);
  }

  .label,
  .value-hint,
  .form-control,
  .error {
    padding-bottom: var(--koerber-spacing-2xs);
  }

  ::slotted([slot='prefix']) {
    margin-right: var(--koerber-spacing-xs);
  }
  ::slotted([slot='suffix']) {
    margin-left: var(--koerber-spacing-xs);
  }
`;var uikit_element=__webpack_require__("./src/internal/uikit-element.ts"),__decorate=function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r};class form_field_component_FormField extends uikit_element.Z{constructor(){super(...arguments),this.hasSlotController=new slot.rc(this,"label","error","footer"),this.helpText="",this.valueHint="",this.required=!1}connectedCallback(){super.connectedCallback(),this.updateComplete.then((()=>{if(this.suffixSlot){const suffix=this.suffixSlot.assignedElements({flatten:!0})[0],getSuffixAttribute=attribute=>parseInt(getComputedStyle(suffix).getPropertyValue(attribute).replace("px","")),valueHintElement=this.shadowRoot.querySelector(".value-hint");if(suffix){const suffixWidth=getSuffixAttribute("width")+getSuffixAttribute("margin-left")+getSuffixAttribute("margin-right");valueHintElement&&(valueHintElement.style.marginRight=`${suffixWidth}px`)}}}))}updated(){this.handleSlotChange()}handleSlotChange(){const[controlElement]=this._controlElements;controlElement&&this.setAccessibilityAttributes(controlElement),this.setErrorOnControlElement(controlElement)}setAccessibilityAttributes(item){var _a;const itemFormControl=item;if(!itemFormControl.accessibleName&&this.label&&(itemFormControl.accessibleName=this.label),!itemFormControl.accessibleDescription&&this.helpText&&(itemFormControl.accessibleDescription=this.helpText),itemFormControl.accessibleName){const[labelElement]=this._labelElements;if(labelElement)labelElement.accessibleHidden=!0;else{const defaultLabel=null===(_a=this.shadowRoot)||void 0===_a?void 0:_a.querySelector("koerber-form-field-label");defaultLabel&&(defaultLabel.accessibleHidden=!0)}}}setErrorOnControlElement(controlElement){var _a;controlElement&&(null===(_a=this.errors)||void 0===_a?void 0:_a.length)>0?controlElement.setAttribute("error","true"):null==controlElement||controlElement.removeAttribute("error")}handleErrorSlotChanged(){const items=this.errorSlot.assignedElements({flatten:!0});this.errors=items.map((item=>item.textContent||""))}handleErrorsChanged(){const[controlElement]=this._controlElements;this.setErrorOnControlElement(controlElement)}setErrors(errors){this.errors=errors}clearErrors(){this.errors=[]}render(){var _a;return lit.dy`
      <div part="base" class="form-field">
        <div class="heading-container">
          ${this.hasSlotController.test("label")?lit.dy`<div class="label" part="label">
                <slot name="label"></slot>
              </div>`:this.label?lit.dy`<koerber-form-field-label
                  class="label"
                  label=${this.label}
                  tooltip=${this.tooltip}
                  ?required=${this.required}
                ></koerber-form-field-label>`:""}
          ${this.valueHint?lit.dy`<div class="value-hint">${this.valueHint}</div>`:""}
        </div>
        <div part="form-control" class="form-control">
          <slot name="prefix"></slot>
          <div class="control">
            <slot @slotchange=${this.handleSlotChange}></slot>
          </div>
          <slot name="suffix"></slot>
        </div>

        <!-- DO NOT TOUCH ARIA-HIDDEN PROPERTY -->
        <slot name="help-text" class="help-text" aria-hidden>${this.helpText}</slot>

        ${this.hasSlotController.test("error")?lit.dy`<div class="error" part="error">
              <slot name="error" @slotchange=${this.handleErrorSlotChanged}></slot>
            </div>`:this.errors&&0!==this.errors.length?lit.dy`<div class="error" part="error">
                ${null===(_a=this.errors)||void 0===_a?void 0:_a.map((error=>lit.dy`<koerber-form-field-error class="error-message">${error}</koerber-form-field-error>`))}
              </div>`:""}
        ${this.hasSlotController.test("footer")?lit.dy`<div class="footer">
              <slot name="footer" part="form-field-footer"></slot>
            </div>`:""}
      </div>
    `}}form_field_component_FormField.styles=form_field_styles,form_field_component_FormField.dependencies={"koerber-form-field-label":form_field_label_component.Z,"koerber-form-field-error":form_field_error_component.Z};const form_field_component=form_field_component_FormField;__decorate([(0,decorators.IO)("slot:not([name])")],form_field_component_FormField.prototype,"defaultSlot",void 0),__decorate([(0,decorators.IO)("slot[name=error]")],form_field_component_FormField.prototype,"errorSlot",void 0),__decorate([(0,decorators.IO)('slot[name="suffix"]')],form_field_component_FormField.prototype,"suffixSlot",void 0),__decorate([(0,decorators.NH)()],form_field_component_FormField.prototype,"_controlElements",void 0),__decorate([(0,decorators.NH)({slot:"label"})],form_field_component_FormField.prototype,"_labelElements",void 0),__decorate([(0,decorators.Cb)({attribute:"help-text"})],form_field_component_FormField.prototype,"helpText",void 0),__decorate([(0,decorators.Cb)({type:Array,reflect:!0})],form_field_component_FormField.prototype,"errors",void 0),__decorate([(0,decorators.Cb)({reflect:!0})],form_field_component_FormField.prototype,"label",void 0),__decorate([(0,decorators.Cb)({attribute:"value-hint"})],form_field_component_FormField.prototype,"valueHint",void 0),__decorate([(0,decorators.Cb)({type:Boolean,reflect:!0})],form_field_component_FormField.prototype,"required",void 0),__decorate([(0,decorators.Cb)({reflect:!0})],form_field_component_FormField.prototype,"tooltip",void 0),__decorate([(0,watch.Y)("errors")],form_field_component_FormField.prototype,"handleErrorsChanged",null);form_field_component.define("koerber-form-field")},"./src/components/icon-button/icon-button.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>icon_button_component});var class_map=__webpack_require__("./node_modules/lit/directives/class-map.js"),static_html=__webpack_require__("./node_modules/lit/static-html.js"),if_defined=__webpack_require__("./node_modules/lit/directives/if-defined.js"),decorators=__webpack_require__("./node_modules/lit/decorators.js"),component_styles=__webpack_require__("./src/styles/component.styles.ts"),icon_component=__webpack_require__("./src/components/icon/icon.component.ts");const icon_button_styles=__webpack_require__("./node_modules/lit/index.js").iv`
  :host {
    display: inline-block;
  }

  .icon-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--koerber-border-radius-medium);
    font-size: inherit;
    color: inherit;
    padding: var(--koerber-spacing-xs);
    cursor: pointer;
    transition: var(--koerber-transition-x-fast) color;
    -webkit-appearance: none;
  }

  .icon-button:focus {
    outline: none;
  }

  .icon-button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .icon-button:focus-visible {
    outline: var(--koerber-focus-ring);
    outline-offset: var(--koerber-border-offset);
  }

  .icon-button__icon {
    pointer-events: none;
  }

  .icon-button:hover {
    color: var(--koerber-color-icon-hover);
  }
`;var uikit_element=__webpack_require__("./src/internal/uikit-element.ts"),__decorate=function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r};class IconButton extends uikit_element.Z{constructor(){super(...arguments),this.hasFocus=!1,this.size="medium",this.label="",this.disabled=!1}handleBlur(){this.hasFocus=!1,this.emit("koerber-blur")}handleFocus(){this.hasFocus=!0,this.emit("koerber-focus")}handleClick(event){this.disabled&&(event.preventDefault(),event.stopPropagation())}click(){this.button.click()}focus(options){this.button.focus(options)}blur(){this.button.blur()}render(){const isLink=!!this.href,tag=isLink?static_html.i0`a`:static_html.i0`button`;return static_html.dy`
      <${tag}
        part="base"
        class=${(0,class_map.$)({"icon-button":!0,"icon-button--disabled":!isLink&&this.disabled,"icon-button--focused":this.hasFocus})}
        ?disabled=${(0,if_defined.o)(isLink?void 0:this.disabled)}
        type=${(0,if_defined.o)(isLink?void 0:"button")}
        href=${(0,if_defined.o)(isLink?this.href:void 0)}
        target=${(0,if_defined.o)(isLink?this.target:void 0)}
        download=${(0,if_defined.o)(isLink?this.download:void 0)}
        rel=${(0,if_defined.o)(isLink&&this.target?"noreferrer noopener":void 0)}
        role=${(0,if_defined.o)(isLink?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        aria-label="${this.label}"
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <koerber-icon
          size=${(0,if_defined.o)(this.size)}
          class="icon-button__icon"
          name=${(0,if_defined.o)(this.name)}
          library=${(0,if_defined.o)(this.library)}
          src=${(0,if_defined.o)(this.src)}
          aria-hidden="true"
        ></koerber-icon>
      </${tag}>
    `}}IconButton.styles=[component_styles.Z,icon_button_styles],IconButton.dependencies={"koerber-icon":icon_component.Z};const icon_button_component=IconButton;__decorate([(0,decorators.IO)(".icon-button")],IconButton.prototype,"button",void 0),__decorate([(0,decorators.SB)()],IconButton.prototype,"hasFocus",void 0),__decorate([(0,decorators.Cb)()],IconButton.prototype,"name",void 0),__decorate([(0,decorators.Cb)()],IconButton.prototype,"library",void 0),__decorate([(0,decorators.Cb)()],IconButton.prototype,"src",void 0),__decorate([(0,decorators.Cb)()],IconButton.prototype,"href",void 0),__decorate([(0,decorators.Cb)()],IconButton.prototype,"target",void 0),__decorate([(0,decorators.Cb)()],IconButton.prototype,"download",void 0),__decorate([(0,decorators.Cb)({reflect:!0})],IconButton.prototype,"size",void 0),__decorate([(0,decorators.Cb)()],IconButton.prototype,"label",void 0),__decorate([(0,decorators.Cb)({type:Boolean,reflect:!0})],IconButton.prototype,"disabled",void 0)},"./src/components/input/input.ts":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{var divider_component=__webpack_require__("./src/components/divider/divider.component.ts"),icon_component=__webpack_require__("./src/components/icon/icon.component.ts"),class_map=__webpack_require__("./node_modules/lit/directives/class-map.js"),lit=__webpack_require__("./node_modules/lit/index.js"),if_defined=__webpack_require__("./node_modules/lit/directives/if-defined.js"),live=__webpack_require__("./node_modules/lit/directives/live.js"),decorators=__webpack_require__("./node_modules/lit/decorators.js"),default_value=__webpack_require__("./src/internal/default-value.ts"),localize=__webpack_require__("./src/utilities/localize.ts"),watch=__webpack_require__("./src/internal/watch.ts"),component_styles=__webpack_require__("./src/styles/component.styles.ts"),form_control_styles=__webpack_require__("./src/styles/form-control.styles.ts");const input_styles=lit.iv`
  :host {
    display: block;
    --koerber-input-top-bottom-padding: 12px;
    --koerber-input-divider-height-medium: 16px;
    --koerber-input-divider-height-large: 24px;
    --koerber-input-divider-margin-small: 8px 0px 8px 0px;
    --koerber-input-divider-margin-medium: 12px 0px 12px 0px;
  }

  .form-control {
    border: none;
    padding: 0;
    margin: 0;
    font-family: var(--koerber-font-family-default);
  }

  .input {
    flex: 1 1 auto;
    display: inline-flex;
    align-items: stretch;
    justify-content: start;
    position: relative;
    width: 100%;
    font-family: var(--koerber-font-family-default);
    font-weight: var(--koerber-font-weight-regular);
    letter-spacing: var(--koerber-letter-spacing-normal);
    vertical-align: middle;
    overflow: hidden;
    cursor: text;
    transition:
      var(--koerber-transition-fast) color,
      var(--koerber-transition-fast) border,
      var(--koerber-transition-fast) box-shadow,
      var(--koerber-transition-fast) background-color;
  }

  /* Standard inputs */
  .input--standard {
    background-color: var(--koerber-color-bg);
    border: solid var(--koerber-border-width-s) var(--koerber-color-border);
  }

  .input--standard:hover:not(.input--disabled) {
    background-color: var(--koerber-color-bg);
    border-color: var(--koerber-color-border-hover);
  }

  .input--standard.input--focused:not(.input--disabled) {
    background-color: var(--koerber-color-bg);
    border-color: var(--koerber-color-border-focus);
    box-shadow: 0 0 0 var(--koerber-border-width-m) var(--koerber-color-border-focus);
  }

  .input--standard.input--focused:not(.input--disabled) .input__control {
    color: var(--koerber-color-text);
  }

  .input--standard.input--disabled {
    background-color: var(--koerber-color-bg-fill-disabled);
    border-color: var(--koerber-color-border-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input--standard.input--disabled .input__control {
    color: var(--koerber-color-text-disabled);
  }

  .input--standard.input--disabled .input__control::placeholder {
    color: var(--koerber-color-text-disabled);
  }

  .input__control {
    flex: 1 1 auto;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    min-width: 0;
    height: 100%;
    color: var(--koerber-color-text);
    border: none;
    background: inherit;
    box-shadow: none;
    padding: 0;
    margin: 0;
    cursor: inherit;
    -webkit-appearance: none;
  }

  .input__control::-webkit-search-decoration,
  .input__control::-webkit-search-cancel-button,
  .input__control::-webkit-search-results-button,
  .input__control::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  .input__control:-webkit-autofill,
  .input__control:-webkit-autofill:hover,
  .input__control:-webkit-autofill:focus,
  .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--koerber-height-size-comfortable) var(--koerber-color-bg) inset !important;
    caret-color: var(--koerber-color-text);
  }

  .input__control::placeholder {
    color: var(--koerber-color-text-tertiary);
    user-select: none;
  }

  .input:hover:not(.input--disabled) .input__control {
    color: var(--koerber-color-text);
  }

  .input__control:focus {
    outline: none;
  }

  .input__prefix,
  .input__suffix {
    display: inline-flex;
    flex: 0 0 auto;
    align-items: center;
    cursor: default;
  }

  .input__prefix::slotted(koerber-icon),
  .input__suffix::slotted(koerber-icon) {
    color: var(--koerber-color-icon-secondary);
  }

  /*
   * Size modifiers
   */

  .input--small {
    border-radius: var(--koerber-border-radius-small);
    font-size: var(--koerber-text-base-font-size);
    height: var(--koerber-height-size-compact);
  }

  .input--small .input__control {
    height: var(--koerber-height-size-compact);
    padding: var(--koerber-spacing-xs) var(--koerber-spacing-xs);
  }

  .input--small .input__clear,
  .input--small .input__decrease,
  .input--small .input__password-toggle {
    margin: var(--koerber-spacing-xs) var(--koerber-spacing-xs) var(--koerber-spacing-xs) 0px;
  }

  .input--small .input__increase {
    margin: var(--koerber-spacing-xs);
  }

  .input--small .input__prefix {
    margin: var(--koerber-spacing-xs);
  }

  .input--small .input__suffix {
    margin: var(--koerber-spacing-xs) var(--koerber-spacing-xs) var(--koerber-spacing-xs) 0px;
  }

  .input--medium {
    border-radius: var(--koerber-border-radius-medium);
    font-size: var(--koerber-text-md-font-size);
    height: var(--koerber-height-size-standard);
  }

  .input--medium .input__control {
    height: var(--koerber-height-size-standard);
    padding: var(--koerber-spacing-s) var(--koerber-spacing-xs);
  }

  .input--medium .input__clear,
  .input--medium .input__decrease,
  .input--medium .input__password-toggle {
    margin: var(--koerber-spacing-xs) var(--koerber-spacing-xs) var(--koerber-spacing-xs) 0px;
  }

  .input--medium .input__increase {
    margin: var(--koerber-spacing-xs);
  }

  .input--medium .input__prefix {
    margin: var(--koerber-spacing-xs);
  }

  .input--medium .input__suffix {
    margin: var(--koerber-spacing-xs) var(--koerber-spacing-xs) var(--koerber-spacing-xs) 0px;
  }

  .input--large {
    border-radius: var(--koerber-border-radius-medium);
    font-size: var(--koerber-text-xl-font-size);
    height: var(--koerber-height-size-comfortable);
  }

  .input--large .input__control {
    height: var(--koerber-height-size-comfortable);
    padding: var(--koerber-input-top-bottom-padding) var(--koerber-spacing-xs);
  }

  .input--large .input__clear,
  .input--large .input__decrease,
  .input--large .input__password-toggle {
    margin: var(--koerber-spacing-xs) var(--koerber-spacing-xs) var(--koerber-spacing-xs) 0px;
  }

  .input--large .input__increase {
    margin: var(--koerber-spacing-xs);
  }

  .input--large .input__prefix {
    margin: var(--koerber-spacing-xs);
  }

  .input--large .input__suffix {
    margin: var(--koerber-spacing-xs) var(--koerber-spacing-xs) var(--koerber-spacing-xs) 0px;
  }

  /*
   * Buttons
   */

  .input__clear,
  .input__decrease,
  .input__increase,
  .input__password-toggle {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: inherit;
    color: var(--koerber-color-icon-secondary);
    border: none;
    background: none;
    padding: 0;
    transition: var(--koerber-transition-fast) color;
    cursor: pointer;
  }

  .divider__vertical {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: inherit;
    width: 0;
  }
  .input--small .divider__vertical {
    margin: var(--koerber-input-divider-margin-small);
    height: var(--koerber-input-divider-height-medium);
  }
  .input--medium .divider__vertical {
    margin: var(--koerber-input-divider-margin-medium);
    height: var(--koerber-input-divider-height-medium);
  }
  .input--large .divider__vertical {
    margin: var(--koerber-input-divider-margin-medium);
    height: var(--koerber-input-divider-height-large);
  }

  .input__clear:hover,
  .input__decrease:hover,
  .input__increase:hover,
  .input__password-toggle:hover {
    color: var(--koerber-color-icon-hover);
  }

  .input__clear:focus,
  .input__decrease:focus,
  .input__increase:focus,
  .input__password-toggle:focus {
    outline: none;
  }

  .input--empty .input__clear {
    visibility: hidden;
  }

  /* Don't show the browser's password toggle in Edge */
  ::-ms-reveal {
    display: none;
  }

  /* Hide the built-in number spinner */
  .input--no-spin-buttons input[type='number']::-webkit-outer-spin-button,
  .input--no-spin-buttons input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    display: none;
  }

  .input--no-spin-buttons input[type='number'] {
    -moz-appearance: textfield;
  }

  /* Error inputs */

  .input-error-icon {
    color: var(--koerber-color-text-error);
  }

  .input--error {
    background-color: var(--koerber-color-bg);
    border: solid var(--koerber-border-width-s) var(--koerber-color-bg-fill-error);
  }

  .input-error-icon-slot {
    display: flex;
    align-items: center;
    margin: var(--koerber-spacing-xs) var(--koerber-spacing-xs) var(--koerber-spacing-xs) 0px;
    justify-content: center;
  }
`;var uikit_element=__webpack_require__("./src/internal/uikit-element.ts"),__decorate=function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r};class input_component_Input extends uikit_element.Z{constructor(){super(...arguments),this.localize=new localize.V(this),this.hasFocus=!1,this.title="",this.type="text",this.name="",this.value="",this.defaultValue="",this.size="medium",this.clearable=!1,this.disabled=!1,this.placeholder="",this.readonly=!1,this.passwordToggle=!1,this.passwordVisible=!1,this.spellcheck=!0,this.error=!1,this.prefixIcon="",this.suffixIcon=""}get valueAsDate(){var _a,_b;return null!==(_b=null===(_a=this.input)||void 0===_a?void 0:_a.valueAsDate)&&void 0!==_b?_b:null}set valueAsDate(newValue){const input=document.createElement("input");input.type="date",input.valueAsDate=newValue,this.value=input.value}get valueAsNumber(){var _a,_b;return null!==(_b=null===(_a=this.input)||void 0===_a?void 0:_a.valueAsNumber)&&void 0!==_b?_b:parseFloat(this.value)}set valueAsNumber(newValue){const input=document.createElement("input");input.type="number",input.valueAsNumber=newValue,this.value=input.value}handleBlur(){this.hasFocus=!1,this.emit("koerber-blur")}handleChange(){this.value=this.input.value,this.emit("koerber-change")}handleClearClick(event){this.value="",this.emit("koerber-clear"),this.emit("koerber-input"),this.emit("koerber-change"),this.input.focus(),event.stopPropagation()}handleIncreaseValueClick(event){this.stepUp(),this.emit("koerber-input"),this.emit("koerber-change"),this.input.focus(),event.stopPropagation()}handleDecreaseValueClick(event){this.stepDown(),this.emit("koerber-input"),this.emit("koerber-change"),this.input.focus(),event.stopPropagation()}handleFocus(){this.hasFocus=!0,this.emit("koerber-focus")}handleInput(){this.value=this.input.value,this.emit("koerber-input")}handlePasswordToggle(){this.passwordVisible=!this.passwordVisible}handleStepChange(){this.input.step=String(this.step)}async handleValueChange(){await this.updateComplete}focus(options){this.input.focus(options)}blur(){this.input.blur()}select(){this.input.select()}setSelectionRange(selectionStart,selectionEnd,selectionDirection="none"){this.input.setSelectionRange(selectionStart,selectionEnd,selectionDirection)}setRangeText(replacement,start,end,selectMode){this.input.setRangeText(replacement,start,end,selectMode),this.value!==this.input.value&&(this.value=this.input.value)}showPicker(){"showPicker"in HTMLInputElement.prototype&&this.input.showPicker()}stepUp(){this.input.stepUp(),this.value!==this.input.value&&(this.value=this.input.value)}stepDown(){this.input.stepDown(),this.value!==this.input.value&&(this.value=this.input.value)}render(){const hasClearIcon=this.clearable&&!this.disabled&&!this.readonly&&("number"==typeof this.value||this.value.length>0),iconSize="small"===this.size?"medium":this.size;return lit.dy`
      <div
        part="form-control"
        class=${(0,class_map.$)({"form-control":!0,"form-control--small":"small"===this.size,"form-control--medium":"medium"===this.size,"form-control--large":"large"===this.size})}
      >
        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${(0,class_map.$)({input:!0,"input--small":"small"===this.size,"input--medium":"medium"===this.size,"input--large":"large"===this.size,"input--standard":!0,"input--disabled":this.disabled,"input--focused":this.hasFocus,"input--empty":!this.value,"input--no-spin-buttons":"number"===this.type,"input--error":this.error})}
          >
        ${this.prefixIcon?lit.dy`<koerber-icon size=${iconSize} class="input__prefix" name=${this.prefixIcon}></koerber-icon>`:""}

            <input
              part="input"
              id="input"
              class="input__control"
              type=${"password"===this.type&&this.passwordVisible?"text":this.type}
              title=${this.title}
              name=${(0,if_defined.o)(this.name)}
              aria-label=${(0,if_defined.o)(this.accessibleName)}
              aria-description=${(0,if_defined.o)(this.accessibleDescription)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              placeholder=${(0,if_defined.o)(this.placeholder)}
              step=${(0,if_defined.o)(this.step)}
              .value=${(0,live.a)(this.value)}
              autocapitalize=${(0,if_defined.o)(this.autocapitalize)}
              autocomplete=${(0,if_defined.o)(this.autocomplete)}
              autocorrect=${(0,if_defined.o)(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${this.spellcheck}
              enterkeyhint=${(0,if_defined.o)(this.enterkeyhint)}
              inputmode=${(0,if_defined.o)(this.inputmode)}
              @change=${this.handleChange}
              @input=${this.handleInput}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            />

            ${hasClearIcon?lit.dy`
                    <button
                      part="clear-button"
                      class="input__clear"
                      type="button"
                      aria-label=${this.localize.term("clearEntry")}
                      @click=${this.handleClearClick}
                      tabindex="-1"
                    >
                      <slot name="clear-icon">
                        <koerber-icon name="close" library="system" size=${iconSize}></koerber-icon>
                      </slot>
                    </button>
                  `:""}
              ${this.error?lit.dy`
                      <div class="input-error-icon-slot">
                        <koerber-icon class="input-error-icon" name="alert" size=${iconSize}></koerber-icon>
                      </div>
                    `:""}
            ${"password"===this.type&&this.passwordToggle&&!this.disabled?lit.dy`
                    <button
                      part="password-toggle-button"
                      class="input__password-toggle"
                      type="button"
                      aria-label=${this.localize.term(this.passwordVisible?"hidePassword":"showPassword")}
                      @click=${this.handlePasswordToggle}
                      tabindex="-1"
                    >
                      ${this.passwordVisible?lit.dy`
                            <slot name="show-password-icon">
                              <koerber-icon name="eye-off" library="system" size=${iconSize}></koerber-icon>
                            </slot>
                          `:lit.dy`
                            <slot name="hide-password-icon">
                              <koerber-icon name="eye" library="system" size=${iconSize}></koerber-icon>
                            </slot>
                          `}
                    </button>
                  `:""}
          ${this.suffixIcon?lit.dy` <koerber-icon size=${iconSize} class="input__suffix" name=${this.suffixIcon}></koerber-icon>`:""}
          ${"number"===this.type?lit.dy` <button
                    part="decrease-button"
                    class="input__decrease"
                    type="button"
                    aria-label=${this.localize.term("decreaseValue")}
                    @click=${this.handleDecreaseValueClick}
                    tabindex="-1"
                  >
                    <koerber-icon name="minus" library="system" size=${iconSize}></koerber-icon>
                  </button>
                  <koerber-divider class="divider__vertical" vertical></koerber-divider>
                  <button
                    part="increase-button"
                    class="input__increase"
                    type="button"
                    aria-label=${this.localize.term("increaseValue")}
                    @click=${this.handleIncreaseValueClick}
                    tabindex="-1"
                  >
                    <koerber-icon name="plus" library="system" size=${iconSize}></koerber-icon>
                  </button>`:""}
          </div>
        </div>
        </div>
      </div>
    `}}input_component_Input.styles=[component_styles.Z,form_control_styles.Z,input_styles],input_component_Input.dependencies={"koerber-icon":icon_component.Z,"koerber-divider":divider_component.Z};const input_component=input_component_Input;__decorate([(0,decorators.IO)(".input__control")],input_component_Input.prototype,"input",void 0),__decorate([(0,decorators.SB)()],input_component_Input.prototype,"hasFocus",void 0),__decorate([(0,decorators.Cb)()],input_component_Input.prototype,"title",void 0),__decorate([(0,decorators.Cb)({reflect:!0})],input_component_Input.prototype,"type",void 0),__decorate([(0,decorators.Cb)()],input_component_Input.prototype,"name",void 0),__decorate([(0,decorators.Cb)()],input_component_Input.prototype,"value",void 0),__decorate([(0,default_value.L)()],input_component_Input.prototype,"defaultValue",void 0),__decorate([(0,decorators.Cb)({reflect:!0})],input_component_Input.prototype,"size",void 0),__decorate([(0,decorators.Cb)({type:Boolean})],input_component_Input.prototype,"clearable",void 0),__decorate([(0,decorators.Cb)({type:Boolean,reflect:!0})],input_component_Input.prototype,"disabled",void 0),__decorate([(0,decorators.Cb)()],input_component_Input.prototype,"placeholder",void 0),__decorate([(0,decorators.Cb)({type:Boolean,reflect:!0})],input_component_Input.prototype,"readonly",void 0),__decorate([(0,decorators.Cb)({attribute:"password-toggle",type:Boolean})],input_component_Input.prototype,"passwordToggle",void 0),__decorate([(0,decorators.Cb)({attribute:"password-visible",type:Boolean})],input_component_Input.prototype,"passwordVisible",void 0),__decorate([(0,decorators.Cb)()],input_component_Input.prototype,"step",void 0),__decorate([(0,decorators.Cb)()],input_component_Input.prototype,"autocapitalize",void 0),__decorate([(0,decorators.Cb)()],input_component_Input.prototype,"autocorrect",void 0),__decorate([(0,decorators.Cb)()],input_component_Input.prototype,"autocomplete",void 0),__decorate([(0,decorators.Cb)({type:Boolean})],input_component_Input.prototype,"autofocus",void 0),__decorate([(0,decorators.Cb)()],input_component_Input.prototype,"enterkeyhint",void 0),__decorate([(0,decorators.Cb)({type:Boolean,converter:{fromAttribute:value=>!(!value||"false"===value),toAttribute:value=>value?"true":"false"}})],input_component_Input.prototype,"spellcheck",void 0),__decorate([(0,decorators.Cb)()],input_component_Input.prototype,"inputmode",void 0),__decorate([(0,decorators.Cb)({type:Boolean})],input_component_Input.prototype,"error",void 0),__decorate([(0,decorators.Cb)({attribute:"prefix-icon"})],input_component_Input.prototype,"prefixIcon",void 0),__decorate([(0,decorators.Cb)({attribute:"suffix-icon"})],input_component_Input.prototype,"suffixIcon",void 0),__decorate([(0,decorators.Cb)({attribute:"accessible-name",reflect:!0})],input_component_Input.prototype,"accessibleName",void 0),__decorate([(0,decorators.Cb)({attribute:"accessible-description",reflect:!0})],input_component_Input.prototype,"accessibleDescription",void 0),__decorate([(0,watch.Y)("step",{waitUntilFirstUpdate:!0})],input_component_Input.prototype,"handleStepChange",null),__decorate([(0,watch.Y)("value",{waitUntilFirstUpdate:!0})],input_component_Input.prototype,"handleValueChange",null);input_component.define("koerber-input")},"./src/components/popup/popup.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>popup_component});var floating_ui_dom=__webpack_require__("./node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs"),floating_ui_core=__webpack_require__("./node_modules/@floating-ui/core/dist/floating-ui.core.mjs"),class_map=__webpack_require__("./node_modules/lit/directives/class-map.js"),lit=__webpack_require__("./node_modules/lit/index.js"),composed_offset_position_browser_min=__webpack_require__("./node_modules/composed-offset-position/dist/composed-offset-position.browser.min.mjs"),decorators=__webpack_require__("./node_modules/lit/decorators.js"),component_styles=__webpack_require__("./src/styles/component.styles.ts");const popup_styles=lit.iv`
  :host {
    --arrow-color: var(--koerber-color-bg-surface-quaternary);
    --koerber-tooltip-arrow-size: 6px;

    /*
     * These properties are computed to account for the arrow's dimensions after being rotated 45º. The constant
     * 0.7071 is derived from sin(45), which is the diagonal size of the arrow's container after rotating.
     */
    --arrow-size-diagonal: calc(var(--koerber-tooltip-arrow-size) * 0.7071);
    --arrow-padding-offset: calc(var(--arrow-size-diagonal) - var(--koerber-tooltip-arrow-size));

    display: contents;
  }

  .popup {
    position: absolute;
    isolation: isolate;
    max-width: var(--auto-size-available-width, none);
    max-height: var(--auto-size-available-height, none);
  }

  /* Color Variants */

  .popup__body {
    border-radius: var(--koerber-border-radius-small);
  }

  .popup__body.popup__body--unstyled {
    background-color: none;
  }

  .popup__arrow.popup__arrow--unstyled {
    background-color: none;
  }

  .popup__body.popup__body--default {
    background-color: var(--koerber-color-bg-surface-secondary);
    box-shadow: 0px 2px 8px 0px rgba(35, 38, 37, 0.15);
    width: 100%;
    height: 100%;
  }

  .popup__arrow.popup__arrow--default {
    background-color: var(--koerber-color-bg-surface-secondary);
  }

  .popup__body.popup__body--interactive {
    background-color: var(--koerber-color-bg-surface-quaternary);
  }

  .popup__arrow.popup__arrow--interactive {
    background-color: var(--koerber-color-bg-surface-quaternary);
  }

  .popup--fixed {
    position: fixed;
  }

  .popup:not(.popup--active) {
    display: none;
  }

  .popup__arrow {
    position: absolute;
    width: calc(var(--arrow-size-diagonal) * 2);
    height: calc(var(--arrow-size-diagonal) * 2);
    rotate: 45deg;
    background: var(--arrow-color);
    z-index: -1;
  }

  /* Hover bridge */
  .popup-hover-bridge:not(.popup-hover-bridge--visible) {
    display: none;
  }

  .popup-hover-bridge {
    position: fixed;
    z-index: calc(var(--sl-z-index-dropdown) - 1);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    clip-path: polygon(
      var(--hover-bridge-top-left-x, 0) var(--hover-bridge-top-left-y, 0),
      var(--hover-bridge-top-right-x, 0) var(--hover-bridge-top-right-y, 0),
      var(--hover-bridge-bottom-right-x, 0) var(--hover-bridge-bottom-right-y, 0),
      var(--hover-bridge-bottom-left-x, 0) var(--hover-bridge-bottom-left-y, 0)
    );
  }
`;var uikit_element=__webpack_require__("./src/internal/uikit-element.ts"),__decorate=function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r};class Popup extends uikit_element.Z{constructor(){super(...arguments),this.active=!1,this.colorVariant="unstyled",this.placement="top",this.strategy="absolute",this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl){const anchorRect=this.anchorEl.getBoundingClientRect(),popupRect=this.popup.getBoundingClientRect();let topLeftX=0,topLeftY=0,topRightX=0,topRightY=0,bottomLeftX=0,bottomLeftY=0,bottomRightX=0,bottomRightY=0;this.placement.includes("top")||this.placement.includes("bottom")?anchorRect.top<popupRect.top?(topLeftX=anchorRect.left,topLeftY=anchorRect.bottom,topRightX=anchorRect.right,topRightY=anchorRect.bottom,bottomLeftX=popupRect.left,bottomLeftY=popupRect.top,bottomRightX=popupRect.right,bottomRightY=popupRect.top):(topLeftX=popupRect.left,topLeftY=popupRect.bottom,topRightX=popupRect.right,topRightY=popupRect.bottom,bottomLeftX=anchorRect.left,bottomLeftY=anchorRect.top,bottomRightX=anchorRect.right,bottomRightY=anchorRect.top):anchorRect.left<popupRect.left?(topLeftX=anchorRect.right,topLeftY=anchorRect.top,topRightX=popupRect.left,topRightY=popupRect.top,bottomLeftX=anchorRect.right,bottomLeftY=anchorRect.bottom,bottomRightX=popupRect.left,bottomRightY=popupRect.bottom):(topLeftX=popupRect.right,topLeftY=popupRect.top,topRightX=anchorRect.left,topRightY=anchorRect.top,bottomLeftX=popupRect.right,bottomLeftY=popupRect.bottom,bottomRightX=anchorRect.left,bottomRightY=anchorRect.bottom),this.style.setProperty("--hover-bridge-top-left-x",`${topLeftX}px`),this.style.setProperty("--hover-bridge-top-left-y",`${topLeftY}px`),this.style.setProperty("--hover-bridge-top-right-x",`${topRightX}px`),this.style.setProperty("--hover-bridge-top-right-y",`${topRightY}px`),this.style.setProperty("--hover-bridge-bottom-left-x",`${bottomLeftX}px`),this.style.setProperty("--hover-bridge-bottom-left-y",`${bottomLeftY}px`),this.style.setProperty("--hover-bridge-bottom-right-x",`${bottomRightX}px`),this.style.setProperty("--hover-bridge-bottom-right-y",`${bottomRightY}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(changedProps){super.updated(changedProps),changedProps.has("active")&&(this.active?this.start():this.stop()),this.hasAttribute("distance")||(this.distance=this.arrow?10:4),changedProps.has("anchor")&&await this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&"string"==typeof this.anchor){const root=this.getRootNode();this.anchorEl=root.getElementById(this.anchor)}else this.anchor instanceof Element||function isVirtualElement(e){return null!==e&&"object"==typeof e&&"getBoundingClientRect"in e}(this.anchor)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]');if(this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),!this.anchorEl)throw new Error("Invalid anchor element: no anchor could be found using the anchor slot or the anchor attribute.");this.start()}start(){this.anchorEl&&(this.cleanup=(0,floating_ui_dom.Me)(this.anchorEl,this.popup,(()=>{this.reposition()})))}async stop(){return new Promise((resolve=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame((()=>resolve()))):resolve()}))}reposition(){if(!this.active||!this.anchorEl)return;const middleware=[(0,floating_ui_core.cv)({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?middleware.push((0,floating_ui_dom.dp)({apply:({rects})=>{const syncWidth="width"===this.sync||"both"===this.sync,syncHeight="height"===this.sync||"both"===this.sync;this.popup.style.width=syncWidth?`${rects.reference.width}px`:"",this.popup.style.height=syncHeight?`${rects.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height=""),this.flip&&middleware.push((0,floating_ui_dom.RR)({boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:"best-fit"===this.flipFallbackStrategy?"bestFit":"initialPlacement",padding:this.flipPadding})),this.shift&&middleware.push((0,floating_ui_dom.uY)({boundary:this.shiftBoundary,padding:this.shiftPadding})),this.autoSize?middleware.push((0,floating_ui_dom.dp)({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth,availableHeight})=>{"vertical"===this.autoSize||"both"===this.autoSize?this.style.setProperty("--auto-size-available-height",`${availableHeight}px`):this.style.removeProperty("--auto-size-available-height"),"horizontal"===this.autoSize||"both"===this.autoSize?this.style.setProperty("--auto-size-available-width",`${availableWidth}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&middleware.push((0,floating_ui_dom.x7)({element:this.arrowEl,padding:this.arrowPadding}));const getOffsetParent="absolute"===this.strategy?element=>floating_ui_dom.Jv.getOffsetParent(element,composed_offset_position_browser_min.y8):floating_ui_dom.Jv.getOffsetParent;(0,floating_ui_dom.oo)(this.anchorEl,this.popup,{placement:this.placement,middleware,strategy:this.strategy,platform:Object.assign(Object.assign({},floating_ui_dom.Jv),{getOffsetParent})}).then((({x,y,middlewareData,placement})=>{const isRtl="rtl"===getComputedStyle(this).direction,staticSide={top:"bottom",right:"left",bottom:"top",left:"right"}[placement.split("-")[0]];if(this.setAttribute("data-current-placement",placement),Object.assign(this.popup.style,{left:`${x}px`,top:`${y}px`}),this.arrow){const arrowX=middlewareData.arrow.x,arrowY=middlewareData.arrow.y;let top="",right="",bottom="",left="";if("start"===this.arrowPlacement){const value="number"==typeof arrowX?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";top="number"==typeof arrowY?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",right=isRtl?value:"",left=isRtl?"":value}else if("end"===this.arrowPlacement){const value="number"==typeof arrowX?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";right=isRtl?"":value,left=isRtl?value:"",bottom="number"==typeof arrowY?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else"center"===this.arrowPlacement?(left="number"==typeof arrowX?"calc(50% - var(--arrow-size-diagonal))":"",top="number"==typeof arrowY?"calc(50% - var(--arrow-size-diagonal))":""):(left="number"==typeof arrowX?`${arrowX}px`:"",top="number"==typeof arrowY?`${arrowY}px`:"");Object.assign(this.arrowEl.style,{top,right,bottom,left,[staticSide]:"calc(var(--arrow-size-diagonal) * -1)"})}})),requestAnimationFrame((()=>this.updateHoverBridge())),this.emit("koerber-reposition")}render(){return lit.dy`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${(0,class_map.$)({"popup-hover-bridge":!0,"popup-hover-bridge--visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        part="popup"
        class=${(0,class_map.$)({popup:!0,"popup--active":this.active,"popup--fixed":"fixed"===this.strategy,"popup--has-arrow":this.arrow})}
      >
        ${"unstyled"===this.colorVariant?lit.dy`<slot></slot>`:lit.dy`<div
              class=${(0,class_map.$)({popup__body:!0,[`popup__body--${this.colorVariant}`]:!0})}
            >
              <slot></slot>
            </div>`}
        ${this.arrow?lit.dy`<div
              part="arrow"
              class=${(0,class_map.$)({popup__arrow:!0,[`popup__arrow--${this.colorVariant}`]:!0})}
              role="presentation"
            ></div>`:""}
      </div>
    `}}Popup.styles=[component_styles.Z,popup_styles];const popup_component=Popup;__decorate([(0,decorators.IO)(".popup")],Popup.prototype,"popup",void 0),__decorate([(0,decorators.IO)(".popup__arrow")],Popup.prototype,"arrowEl",void 0),__decorate([(0,decorators.Cb)()],Popup.prototype,"anchor",void 0),__decorate([(0,decorators.Cb)({type:Boolean,reflect:!0})],Popup.prototype,"active",void 0),__decorate([(0,decorators.Cb)({attribute:"color-variant",reflect:!0})],Popup.prototype,"colorVariant",void 0),__decorate([(0,decorators.Cb)({reflect:!0})],Popup.prototype,"placement",void 0),__decorate([(0,decorators.Cb)({reflect:!0})],Popup.prototype,"strategy",void 0),__decorate([(0,decorators.Cb)({type:Number})],Popup.prototype,"distance",void 0),__decorate([(0,decorators.Cb)({type:Number})],Popup.prototype,"skidding",void 0),__decorate([(0,decorators.Cb)({type:Boolean})],Popup.prototype,"arrow",void 0),__decorate([(0,decorators.Cb)({attribute:"arrow-placement"})],Popup.prototype,"arrowPlacement",void 0),__decorate([(0,decorators.Cb)({attribute:"arrow-padding",type:Number})],Popup.prototype,"arrowPadding",void 0),__decorate([(0,decorators.Cb)({type:Boolean})],Popup.prototype,"flip",void 0),__decorate([(0,decorators.Cb)({attribute:"flip-fallback-placements",converter:{fromAttribute:value=>value.split(" ").map((p=>p.trim())).filter((p=>""!==p)),toAttribute:value=>value.join(" ")}})],Popup.prototype,"flipFallbackPlacements",void 0),__decorate([(0,decorators.Cb)({attribute:"flip-fallback-strategy"})],Popup.prototype,"flipFallbackStrategy",void 0),__decorate([(0,decorators.Cb)({type:Object})],Popup.prototype,"flipBoundary",void 0),__decorate([(0,decorators.Cb)({attribute:"flip-padding",type:Number})],Popup.prototype,"flipPadding",void 0),__decorate([(0,decorators.Cb)({type:Boolean})],Popup.prototype,"shift",void 0),__decorate([(0,decorators.Cb)({type:Object})],Popup.prototype,"shiftBoundary",void 0),__decorate([(0,decorators.Cb)({attribute:"shift-padding",type:Number})],Popup.prototype,"shiftPadding",void 0),__decorate([(0,decorators.Cb)({attribute:"auto-size"})],Popup.prototype,"autoSize",void 0),__decorate([(0,decorators.Cb)()],Popup.prototype,"sync",void 0),__decorate([(0,decorators.Cb)({type:Object})],Popup.prototype,"autoSizeBoundary",void 0),__decorate([(0,decorators.Cb)({attribute:"auto-size-padding",type:Number})],Popup.prototype,"autoSizePadding",void 0),__decorate([(0,decorators.Cb)({attribute:"hover-bridge",type:Boolean})],Popup.prototype,"hoverBridge",void 0)},"./src/components/textarea/textarea.ts":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{var icon_component=__webpack_require__("./src/components/icon/icon.component.ts"),class_map=__webpack_require__("./node_modules/lit/directives/class-map.js"),default_value=__webpack_require__("./src/internal/default-value.ts"),lit=__webpack_require__("./node_modules/lit/index.js"),if_defined=__webpack_require__("./node_modules/lit/directives/if-defined.js"),live=__webpack_require__("./node_modules/lit/directives/live.js"),decorators=__webpack_require__("./node_modules/lit/decorators.js"),watch=__webpack_require__("./src/internal/watch.ts"),component_styles=__webpack_require__("./src/styles/component.styles.ts"),form_control_styles=__webpack_require__("./src/styles/form-control.styles.ts");const textarea_styles=lit.iv`
  :host {
    display: block;
  }

  .textarea {
    display: flex;
    align-items: start;
    position: relative;
    width: 100%;
    font-family: var(--koerber-font-family-default);
    font-family: var(--koerber-font-family-default);
    font-weight: var(--koerber-font-weight-regular);
    line-height: var(--koerber-text-lg-line-height);
    letter-spacing: var(--koerber-letter-spacing-normal);
    vertical-align: middle;
    transition:
      var(--koerber-transition-fast) color,
      var(--koerber-transition-fast) border,
      var(--koerber-transition-fast) box-shadow,
      var(--koerber-transition-fast) background-color;
    cursor: text;
  }

  /* Standard textareas */
  .textarea--standard {
    background-color: var(--koerber-input-background-color);
    border: solid var(--koerber-border-width-s) var(--koerber-color-border);
  }

  .textarea--standard:hover:not(.textarea--disabled) {
    background-color: var(--koerber-input-background-color-hover);
    border-color: var(--koerber-color-border-hover);
  }
  .textarea--standard:hover:not(.textarea--disabled) .textarea__control {
    color: var(--koerber-input-color-hover);
  }

  .textarea--standard.textarea--focused:not(.textarea--disabled) {
    background-color: var(--koerber-input-background-color-focus);
    color: var(--koerber-input-color-focus);
    border-color: var(--koerber-color-border-focus);
  }

  .textarea--standard.textarea--focused:not(.textarea--disabled) .textarea__control {
    color: var(--koerber-input-color-focus);
  }

  .textarea--standard.textarea--disabled {
    background-color: var(--koerber-color-bg-fill-disabled);
    opacity: 0.5;
    cursor: not-allowed;
    border-color: var(--koerber-color-border-disabled);
  }

  .textarea--standard.textarea--disabled .textarea__control {
    color: var(--koerber-input-color-disabled);
  }

  .textarea--standard.textarea--disabled .textarea__control::placeholder {
    color: var(--koerber-color-text-tertiary-disabled);
  }

  .textarea--standard.textarea--error {
    border-color: var(--koerber-color-border-error);
  }

  .textarea__control {
    flex: 1 1 auto;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: 1.4;
    color: var(--koerber-input-color);
    border: none;
    background: none;
    box-shadow: none;
    cursor: inherit;
    -webkit-appearance: none;
  }

  .textarea__control::-webkit-search-decoration,
  .textarea__control::-webkit-search-cancel-button,
  .textarea__control::-webkit-search-results-button,
  .textarea__control::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  .textarea__control:-webkit-autofill,
  .textarea__control:-webkit-autofill:hover,
  .textarea__control:-webkit-autofill:focus,
  .textarea__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--koerber-height-size-comfortable) var(--koerber-color-bg) inset !important;
    caret-color: var(--koerber-color-text);
  }

  .textarea__control::placeholder {
    color: var(--koerber-color-text-tertiary);
    user-select: none;
  }

  .textarea__control:focus {
    outline: none;
  }

  /*
   * Size modifiers
   */

  .textarea--small {
    border-radius: var(--koerber-border-radius-small);
    font-size: var(--koerber-text-base-font-size);
  }

  .textarea--small .textarea__control {
    padding: var(--koerber-spacing-xs);
  }

  .textarea--medium {
    border-radius: var(--koerber-border-radius-medium);
    font-size: var(--koerber-text-md-font-size);
  }

  .textarea--medium .textarea__control {
    padding: var(--koerber-spacing-xs);
  }

  .textarea--large {
    border-radius: var(--koerber-border-radius-medium);
    font-size: var(--koerber-text-xl-font-size);
  }

  .textarea--large .textarea__control {
    padding: var(--koerber-spacing-xs);
  }

  /*
   * Resize types
   */

  .textarea--resize-none .textarea__control {
    resize: none;
  }

  .textarea--resize-vertical .textarea__control {
    resize: vertical;
  }

  .textarea--resize-auto .textarea__control {
    height: auto;
    resize: none;
    overflow-y: hidden;
  }

  /** Error */
  .textarea-error-icon-container {
    padding-right: var(--koerber-spacing-xs);
  }

  .textarea-error-icon {
    color: var(--koerber-color-icon-error);
  }
`;var uikit_element=__webpack_require__("./src/internal/uikit-element.ts"),__decorate=function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r};class textarea_component_Textarea extends uikit_element.Z{constructor(){super(...arguments),this.hasFocus=!1,this.title="",this.name="",this.value="",this.size="medium",this.placeholder="",this.rows=4,this.resize="none",this.disabled=!1,this.readonly=!1,this.required=!1,this.characterCount=0,this.spellcheck=!0,this.defaultValue=""}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver((()=>this.setTextareaHeight())),this.updateComplete.then((()=>{this.setTextareaHeight(),this.resizeObserver.observe(this.input)}))}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver.unobserve(this.input)}handleBlur(){this.hasFocus=!1,this.emit("koerber-blur")}handleChange(){this.value=this.input.value,this.characterCount=this.value.length,this.setTextareaHeight(),this.emit("koerber-change")}handleFocus(){this.hasFocus=!0,this.emit("koerber-focus")}handleInput(){this.value=this.input.value,this.characterCount=this.value.length,this.emit("koerber-input")}setTextareaHeight(){"auto"===this.resize?(this.input.style.height="auto",this.input.style.height=`${this.input.scrollHeight}px`):this.input.style.height=void 0}handleRowsChange(){this.setTextareaHeight()}async handleValueChange(){await this.updateComplete,this.setTextareaHeight()}focus(options){this.input.focus(options)}blur(){this.input.blur()}select(){this.input.select()}scrollPosition(position){return position?("number"==typeof position.top&&(this.input.scrollTop=position.top),void("number"==typeof position.left&&(this.input.scrollLeft=position.left))):{top:this.input.scrollTop,left:this.input.scrollTop}}setSelectionRange(selectionStart,selectionEnd,selectionDirection="none"){this.input.setSelectionRange(selectionStart,selectionEnd,selectionDirection)}setRangeText(replacement,start,end,selectMode){this.input.setRangeText(replacement,start,end,selectMode),this.value!==this.input.value&&(this.value=this.input.value),this.value!==this.input.value&&(this.value=this.input.value,this.setTextareaHeight())}render(){return lit.dy`
      <div
        part="form-control"
        class=${(0,class_map.$)({"form-control":!0,"form-control--small":"small"===this.size,"form-control--medium":"medium"===this.size,"form-control--large":"large"===this.size})}
      >
        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${(0,class_map.$)({textarea:!0,"textarea--small":"small"===this.size,"textarea--medium":"medium"===this.size,"textarea--large":"large"===this.size,"textarea--standard":!0,"textarea--disabled":this.disabled,"textarea--focused":this.hasFocus,"textarea--empty":!this.value,"textarea--resize-none":"none"===this.resize,"textarea--resize-vertical":"vertical"===this.resize,"textarea--resize-auto":"auto"===this.resize,"textarea--error":this.error})}
          >
            <textarea
              part="textarea"
              id="input"
              class="textarea__control"
              title=${this.title}
              name=${(0,if_defined.o)(this.name)}
              aria-label=${(0,if_defined.o)(this.accessibleName)}
              aria-description=${(0,if_defined.o)(this.accessibleDescription)}
              .value=${(0,live.a)(this.value)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${(0,if_defined.o)(this.placeholder)}
              rows=${(0,if_defined.o)(this.rows)}
              autocapitalize=${(0,if_defined.o)(this.autocapitalize)}
              autocorrect=${(0,if_defined.o)(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${(0,if_defined.o)(this.spellcheck)}
              enterkeyhint=${(0,if_defined.o)(this.enterkeyhint)}
              inputmode=${(0,if_defined.o)(this.inputmode)}
              @change=${this.handleChange}
              @input=${this.handleInput}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            ></textarea>

            ${this.error?lit.dy`
                  <div class="textarea-error-icon-container">
                    <koerber-icon class="textarea-error-icon" name="alert"></koerber-icon>
                  </div>
                `:""}
          </div>
        </div>
      </div>
    `}}textarea_component_Textarea.styles=[component_styles.Z,form_control_styles.Z,textarea_styles],textarea_component_Textarea.dependencies={"koerber-icon":icon_component.Z};const textarea_component=textarea_component_Textarea;__decorate([(0,decorators.IO)(".textarea__control")],textarea_component_Textarea.prototype,"input",void 0),__decorate([(0,decorators.SB)()],textarea_component_Textarea.prototype,"hasFocus",void 0),__decorate([(0,decorators.Cb)()],textarea_component_Textarea.prototype,"title",void 0),__decorate([(0,decorators.Cb)()],textarea_component_Textarea.prototype,"name",void 0),__decorate([(0,decorators.Cb)()],textarea_component_Textarea.prototype,"value",void 0),__decorate([(0,decorators.Cb)({reflect:!0})],textarea_component_Textarea.prototype,"size",void 0),__decorate([(0,decorators.Cb)()],textarea_component_Textarea.prototype,"placeholder",void 0),__decorate([(0,decorators.Cb)({type:Number})],textarea_component_Textarea.prototype,"rows",void 0),__decorate([(0,decorators.Cb)()],textarea_component_Textarea.prototype,"resize",void 0),__decorate([(0,decorators.Cb)({type:Boolean,reflect:!0})],textarea_component_Textarea.prototype,"disabled",void 0),__decorate([(0,decorators.Cb)({type:Boolean,reflect:!0})],textarea_component_Textarea.prototype,"readonly",void 0),__decorate([(0,decorators.Cb)({type:Boolean,reflect:!0})],textarea_component_Textarea.prototype,"required",void 0),__decorate([(0,decorators.SB)()],textarea_component_Textarea.prototype,"characterCount",void 0),__decorate([(0,decorators.Cb)()],textarea_component_Textarea.prototype,"autocapitalize",void 0),__decorate([(0,decorators.Cb)()],textarea_component_Textarea.prototype,"autocorrect",void 0),__decorate([(0,decorators.Cb)()],textarea_component_Textarea.prototype,"autocomplete",void 0),__decorate([(0,decorators.Cb)({type:Boolean})],textarea_component_Textarea.prototype,"autofocus",void 0),__decorate([(0,decorators.Cb)()],textarea_component_Textarea.prototype,"enterkeyhint",void 0),__decorate([(0,decorators.Cb)({type:Boolean,converter:{fromAttribute:value=>!(!value||"false"===value),toAttribute:value=>value?"true":"false"}})],textarea_component_Textarea.prototype,"spellcheck",void 0),__decorate([(0,decorators.Cb)()],textarea_component_Textarea.prototype,"inputmode",void 0),__decorate([(0,decorators.Cb)({type:Boolean})],textarea_component_Textarea.prototype,"error",void 0),__decorate([(0,default_value.L)()],textarea_component_Textarea.prototype,"defaultValue",void 0),__decorate([(0,decorators.Cb)({attribute:"accessible-name",reflect:!0})],textarea_component_Textarea.prototype,"accessibleName",void 0),__decorate([(0,decorators.Cb)({attribute:"accessible-description",reflect:!0})],textarea_component_Textarea.prototype,"accessibleDescription",void 0),__decorate([(0,watch.Y)("rows",{waitUntilFirstUpdate:!0})],textarea_component_Textarea.prototype,"handleRowsChange",null),__decorate([(0,watch.Y)("value",{waitUntilFirstUpdate:!0})],textarea_component_Textarea.prototype,"handleValueChange",null);textarea_component.define("koerber-textarea")},"./src/components/tooltip/tooltip.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>tooltip_component});var popup_component=__webpack_require__("./src/components/popup/popup.component.ts"),animate=__webpack_require__("./src/internal/animate.ts"),class_map=__webpack_require__("./node_modules/lit/directives/class-map.js"),animation_registry=__webpack_require__("./src/utilities/animation-registry.ts"),lit=__webpack_require__("./node_modules/lit/index.js"),localize=__webpack_require__("./src/utilities/localize.ts"),decorators=__webpack_require__("./node_modules/lit/decorators.js"),internal_event=__webpack_require__("./src/internal/event.ts"),watch=__webpack_require__("./src/internal/watch.ts"),component_styles=__webpack_require__("./src/styles/component.styles.ts");const tooltip_styles=lit.iv`
  :host {
    --max-width: 300px;
    --hide-delay: 0ms;
    --show-delay: 150ms;

    display: contents;
    --koerber-z-index-tooltip: 1000;
    --koerber-tooltip-arrow-size: 6px;
  }

  .tooltip {
    --arrow-size: var(--koerber-tooltip-arrow-size);
    --arrow-color: var(--koerber-color-bg-surface-quaternary);
  }

  .tooltip::part(popup) {
    user-select: none;
    z-index: var(--koerber-z-index-tooltip);
  }

  .tooltip[placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .tooltip[placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .tooltip[placement^='left']::part(popup) {
    transform-origin: right;
  }

  .tooltip[placement^='right']::part(popup) {
    transform-origin: left;
  }

  .tooltip__body {
    display: block;
    width: max-content;
    max-width: var(--max-width);
    border-radius: var(--koerber-border-radius-small);
    background-color: var(--koerber-color-bg-surface-quaternary);
    font-family: var(--koerber-font-family-default);
    font-size: var(--koerber-text-base-font-size);
    font-weight: var(--koerber-font-weight-regular);
    line-height: var(--koerber-text-md-line-height);
    color: var(--koerber-color-text-bg-fill);
    padding: var(--koerber-spacing-xs) var(--koerber-spacing-s);
    pointer-events: none;
    user-select: none;
  }
`;var uikit_element=__webpack_require__("./src/internal/uikit-element.ts"),__decorate=function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r};class Tooltip extends uikit_element.Z{constructor(){super(),this.localize=new localize.V(this),this.distance=8,this.skidding=0,this.trigger="hover focus",this.content="",this.placement="top",this.open=!1,this.hoist=!1,this.handleBlur=()=>{this.hasTrigger("focus")&&this.hide()},this.handleFocus=()=>{this.hasTrigger("focus")&&this.show()},this.handleDocumentKeyDown=event=>{"Escape"===event.key&&(event.stopPropagation(),this.hide())},this.handleMouseOver=()=>{if(this.hasTrigger("hover")){const delay=(0,animate.RA)(getComputedStyle(this).getPropertyValue("--show-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout((()=>this.show()),delay)}},this.handleMouseOut=()=>{if(this.hasTrigger("hover")){const delay=(0,animate.RA)(getComputedStyle(this).getPropertyValue("--hide-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout((()=>this.hide()),delay)}},this.addEventListener("blur",this.handleBlur,!0),this.addEventListener("focus",this.handleFocus,!0),this.addEventListener("mouseover",this.handleMouseOver),this.addEventListener("mouseout",this.handleMouseOut)}disconnectedCallback(){document.removeEventListener("keydown",this.handleDocumentKeyDown)}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}hasTrigger(triggerType){return this.trigger.split(" ").includes(triggerType)}async handleOpenChange(){if(this.open){this.emit("koerber-show"),document.addEventListener("keydown",this.handleDocumentKeyDown),await(0,animate.U_)(this.body),this.body.hidden=!1,this.popup.active=!0;const{keyframes,options}=(0,animation_registry.O8)(this,"tooltip.show",{dir:this.localize.dir()});await(0,animate.nv)(this.popup.popup,keyframes,options),this.popup.reposition(),this.emit("koerber-after-show")}else{this.emit("koerber-hide"),document.removeEventListener("keydown",this.handleDocumentKeyDown),await(0,animate.U_)(this.body);const{keyframes,options}=(0,animation_registry.O8)(this,"tooltip.hide",{dir:this.localize.dir()});await(0,animate.nv)(this.popup.popup,keyframes,options),this.popup.active=!1,this.body.hidden=!0,this.emit("koerber-after-hide")}}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}async show(){if(!this.open)return this.open=!0,(0,internal_event.m)(this,"koerber-after-show")}async hide(){if(this.open)return this.open=!1,(0,internal_event.m)(this,"koerber-after-hide")}render(){return lit.dy`
      <koerber-popup
        part="base"
        exportparts="
          popup:base__popup,
          arrow:base__arrow
        "
        class=${(0,class_map.$)({tooltip:!0,"tooltip--open":this.open})}
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        strategy=${this.hoist?"fixed":"absolute"}
        flip
        shift
        arrow
        hover-bridge
      >
        <slot slot="anchor" aria-describedby="tooltip"></slot>

        <slot
          name="content"
          part="body"
          id="tooltip"
          class="tooltip__body"
          role="tooltip"
          aria-live=${this.open?"polite":"off"}
        >
          ${this.content}
        </slot>
      </koerber-popup>
    `}}Tooltip.styles=[component_styles.Z,tooltip_styles],Tooltip.dependencies={"koerber-popup":popup_component.Z};const tooltip_component=Tooltip;__decorate([(0,decorators.IO)("slot:not([name])")],Tooltip.prototype,"defaultSlot",void 0),__decorate([(0,decorators.IO)(".tooltip__body")],Tooltip.prototype,"body",void 0),__decorate([(0,decorators.IO)("koerber-popup")],Tooltip.prototype,"popup",void 0),__decorate([(0,decorators.Cb)({type:String,attribute:"content"})],Tooltip.prototype,"content",void 0),__decorate([(0,decorators.Cb)()],Tooltip.prototype,"placement",void 0),__decorate([(0,decorators.Cb)({type:Boolean,reflect:!0})],Tooltip.prototype,"open",void 0),__decorate([(0,decorators.Cb)({type:Boolean})],Tooltip.prototype,"hoist",void 0),__decorate([(0,watch.Y)("open",{waitUntilFirstUpdate:!0})],Tooltip.prototype,"handleOpenChange",null),__decorate([(0,watch.Y)(["content","distance","hoist","placement","skidding"])],Tooltip.prototype,"handleOptionsChange",null),(0,animation_registry.jx)("tooltip.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:150,easing:"ease"}}),(0,animation_registry.jx)("tooltip.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:150,easing:"ease"}})},"./src/internal/animate.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function animateTo(el,keyframes,options){return new Promise((resolve=>{if((null==options?void 0:options.duration)===1/0)throw new Error("Promise-based animations must be finite.");const animation=el.animate(keyframes,Object.assign(Object.assign({},options),{duration:prefersReducedMotion()?0:options.duration}));animation.addEventListener("cancel",resolve,{once:!0}),animation.addEventListener("finish",resolve,{once:!0})}))}function parseDuration(delay){return(delay=delay.toString().toLowerCase()).indexOf("ms")>-1?parseFloat(delay):delay.indexOf("s")>-1?1e3*parseFloat(delay):parseFloat(delay)}function prefersReducedMotion(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function stopAnimations(el){return Promise.all(el.getAnimations().map((animation=>new Promise((resolve=>{const handleAnimationEvent=requestAnimationFrame(resolve);animation.addEventListener("cancel",(()=>handleAnimationEvent),{once:!0}),animation.addEventListener("finish",(()=>handleAnimationEvent),{once:!0}),animation.cancel()})))))}function shimKeyframesHeightAuto(keyframes,calculatedHeight){return keyframes.map((keyframe=>Object.assign(Object.assign({},keyframe),{height:"auto"===keyframe.height?`${calculatedHeight}px`:keyframe.height})))}__webpack_require__.d(__webpack_exports__,{GH:()=>shimKeyframesHeightAuto,RA:()=>parseDuration,U_:()=>stopAnimations,nv:()=>animateTo})},"./src/internal/default-value.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{L:()=>defaultValue});var lit__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/lit/index.js");const defaultValue=(propertyName="value")=>(proto,key)=>{const ctor=proto.constructor,attributeChangedCallback=ctor.prototype.attributeChangedCallback;ctor.prototype.attributeChangedCallback=function(name,old,value){var _a;const options=ctor.getPropertyOptions(propertyName);if(name===("string"==typeof options.attribute?options.attribute:propertyName)){const converter=options.converter||lit__WEBPACK_IMPORTED_MODULE_0__.Ts,newValue=("function"==typeof converter?converter:null!==(_a=null==converter?void 0:converter.fromAttribute)&&void 0!==_a?_a:lit__WEBPACK_IMPORTED_MODULE_0__.Ts.fromAttribute)(value,options.type);this[propertyName]!==newValue&&(this[key]=newValue)}attributeChangedCallback.call(this,name,old,value)}}},"./src/internal/event.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function waitForEvent(el,eventName){return new Promise((resolve=>{el.addEventListener(eventName,(function done(event){event.target===el&&(el.removeEventListener(eventName,done),resolve())}))}))}__webpack_require__.d(__webpack_exports__,{m:()=>waitForEvent})},"./src/internal/scroll.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{M4:()=>lockBodyScrolling,zT:()=>scrollIntoView,gG:()=>unlockBodyScrolling});const locks=new Set;function lockBodyScrolling(lockingEl){if(locks.add(lockingEl),!document.body.classList.contains("koerber-scroll-lock")){const scrollbarWidth=function getScrollbarWidth(){const documentWidth=document.documentElement.clientWidth;return Math.abs(window.innerWidth-documentWidth)}();document.body.classList.add("koerber-scroll-lock"),document.body.style.setProperty("--koerber-scroll-lock-size",`${scrollbarWidth}px`)}}function unlockBodyScrolling(lockingEl){locks.delete(lockingEl),0===locks.size&&(document.body.classList.remove("koerber-scroll-lock"),document.body.style.removeProperty("--koerber-scroll-lock-size"))}function scrollIntoView(element,container,direction="vertical",behavior="smooth"){const offset=function getOffset(element,parent){return{top:Math.round(element.getBoundingClientRect().top-parent.getBoundingClientRect().top),left:Math.round(element.getBoundingClientRect().left-parent.getBoundingClientRect().left)}}(element,container),offsetTop=offset.top+container.scrollTop,offsetLeft=offset.left+container.scrollLeft,minX=container.scrollLeft,maxX=container.scrollLeft+container.offsetWidth,minY=container.scrollTop,maxY=container.scrollTop+container.offsetHeight;"horizontal"!==direction&&"both"!==direction||(offsetLeft<minX?container.scrollTo({left:offsetLeft,behavior}):offsetLeft+element.clientWidth>maxX&&container.scrollTo({left:offsetLeft-container.offsetWidth+element.clientWidth,behavior})),"vertical"!==direction&&"both"!==direction||(offsetTop<minY?container.scrollTo({top:offsetTop,behavior}):offsetTop+element.clientHeight>maxY&&container.scrollTo({top:offsetTop-container.offsetHeight+element.clientHeight,behavior}))}},"./src/internal/tabbable.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function isTabbable(el){const tag=el.tagName.toLowerCase();return"-1"!==el.getAttribute("tabindex")&&(!el.hasAttribute("disabled")&&((!el.hasAttribute("aria-disabled")||"false"===el.getAttribute("aria-disabled"))&&(!("input"===tag&&"radio"===el.getAttribute("type")&&!el.hasAttribute("checked"))&&(null!==el.offsetParent&&("hidden"!==window.getComputedStyle(el).visibility&&(!("audio"!==tag&&"video"!==tag||!el.hasAttribute("controls"))||(!!el.hasAttribute("tabindex")||(!(!el.hasAttribute("contenteditable")||"false"===el.getAttribute("contenteditable"))||["button","input","select","textarea","a","audio","video","summary"].includes(tag)))))))))}function getTabbableBoundary(root){var _a,_b;const allElements=[];!function walk(el){el instanceof HTMLElement&&(allElements.push(el),null!==el.shadowRoot&&"open"===el.shadowRoot.mode&&walk(el.shadowRoot)),[...el.children].forEach((e=>walk(e)))}(root);return{start:null!==(_a=allElements.find((el=>isTabbable(el))))&&void 0!==_a?_a:null,end:null!==(_b=allElements.reverse().find((el=>isTabbable(el))))&&void 0!==_b?_b:null}}__webpack_require__.d(__webpack_exports__,{C:()=>getTabbableBoundary})},"./src/styles/form-control.styles.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=__webpack_require__("./node_modules/lit/index.js").iv`
  .form-control {
    border: none;
    padding: 0;
    margin: 0;
    font-family: var(--koerber-font-family-default);
    --koerber-input-required-content: '*';
    --koerber-input-required-content-offset: -2px;
  }

  .form-control .form-control__label {
    display: none;
  }

  .form-control .form-control__help-text {
    display: none;
  }

  /* Label */
  .form-control--has-label .form-control__label {
    display: inline-block;
    color: inherit;
    margin-bottom: var(--koerber-spacing-2xs);
  }

  .form-control--has-label.form-control--small .form-control__label {
    font-size: var(--koerber-text-base-font-size);
  }

  .form-control--has-label.form-control--medium .form-control__label {
    font-size: var(--koerber-text-md-font-size);
  }

  .form-control--has-label.form-control--large .form-control__label {
    font-size: var(--koerber-text-xl-font-size);
  }

  :host([required]) .form-control--has-label .form-control__label::before {
    content: var(--koerber-input-required-content);
    margin-inline-start: var(--koerber-input-required-content-offset);
    color: inherit;
  }

  /* Help text */
  .form-control--has-help-text .form-control__help-text {
    display: block;
    color: var(--koerber-color-text-tertiary);
    margin-top: var(--koerber-spacing-2xs);
    font-family: inherit;
  }

  .form-control--has-help-text.form-control--small .form-control__help-text {
    font-size: var(--koerber-text-sm-font-size);
  }

  .form-control--has-help-text.form-control--medium .form-control__help-text {
    font-size: var(--koerber-text-base-font-size);
  }

  .form-control--has-help-text.form-control--large .form-control__help-text {
    font-size: var(--koerber-text-md-font-size);
  }

  .form-control--has-help-text.form-control--radio-group .form-control__help-text {
    margin-top: var(--koerber-spacing-2xs);
  }

  .form-control--has-error-message .form-control__error-message {
    display: block;
    color: var(--koerber-color-text-error);
    margin-top: var(--koerber-spacing-2xs);
    font-family: inherit;
  }

  .form-control--has-error-message.form-control--small .form-control__error-message {
    font-size: var(--koerber-text-sm-font-size);
  }

  .form-control--has-error-message.form-control--medium .form-control__error-message {
    font-size: var(--koerber-text-md-font-size);
  }

  .form-control--has-error-message.form-control--large .form-control__error-message {
    font-size: var(--koerber-text-lg-font-size);
  }

  .form-control__label.form-control__label--disabled {
    color: var(--koerber-color-text-disabled);
  }

  .form-control__help-text.form-control__help-text--disabled {
    color: var(--koerber-color-text-disabled);
  }
`},"./src/utilities/animation-registry.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{O8:()=>getAnimation,jx:()=>setDefaultAnimation});const defaultAnimationRegistry=new Map,customAnimationRegistry=new WeakMap;function ensureAnimation(animation){return null!=animation?animation:{keyframes:[],options:{duration:0}}}function getLogicalAnimation(animation,dir){return"rtl"===dir.toLowerCase()?{keyframes:animation.rtlKeyframes||animation.keyframes,options:animation.options}:animation}function setDefaultAnimation(animationName,animation){defaultAnimationRegistry.set(animationName,ensureAnimation(animation))}function getAnimation(el,animationName,options){const customAnimation=customAnimationRegistry.get(el);if(null==customAnimation?void 0:customAnimation[animationName])return getLogicalAnimation(customAnimation[animationName],options.dir);const defaultAnimation=defaultAnimationRegistry.get(animationName);return defaultAnimation?getLogicalAnimation(defaultAnimation,options.dir):{keyframes:[],options:{duration:0}}}}}]);
//# sourceMappingURL=4105.604a7d8d.iframe.bundle.js.map