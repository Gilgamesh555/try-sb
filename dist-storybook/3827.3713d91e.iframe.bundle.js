"use strict";(self.webpackChunk_koerber_uikit=self.webpackChunk_koerber_uikit||[]).push([[3827],{"./src/components/avatar/avatar.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>avatar_component});var class_map=__webpack_require__("./node_modules/lit/directives/class-map.js"),lit=__webpack_require__("./node_modules/lit/index.js"),decorators=__webpack_require__("./node_modules/lit/decorators.js"),watch=__webpack_require__("./src/internal/watch.ts"),badge_component=__webpack_require__("./src/components/badge/badge.component.ts"),component_styles=__webpack_require__("./src/styles/component.styles.ts"),icon_component=__webpack_require__("./src/components/icon/icon.component.ts");const avatar_styles=lit.iv`
  :host {
    display: inline-block;
    --size: 2rem;
    --koerber-avatar-size-small: 24px;
  }

  .avatar {
    display: inline-flex;
    border-radius: var(--koerber-color-border-disabled);
    align-items: center;
    justify-content: center;
    position: relative;
    width: var(--size);
    height: var(--size);
    background-color: var(--koerber-color-bg-fill-tertiary);
    color: var(--koerber-color-text);
    font-family: var(--koerber-font-family-default);
    font-size: var(--koerber-text-base-font-size);
    font-weight: var(--koerber-font-weight-regular);
    user-select: none;
    vertical-align: middle;
    border-radius: 100%;
  }

  /** States */

  /** Hover */
  .avatar:hover {
    outline: solid var(--koerber-border-width-s) var(--koerber-color-border-hover);
  }

  /** Focus */
  .avatar.avatar--focused {
    outline: solid var(--koerber-border-width-s) var(--koerber-color-border-pressed);
  }

  /** Avatar Sizes */
  .avatar--large {
    height: var(--koerber-height-size-comfortable);
    width: var(--koerber-height-size-comfortable);
    font-size: var(--koerber-text-lg-font-size);
  }

  .avatar--medium {
    height: var(--size);
    width: var(--size);
    font-size: var(--koerber-text-base-font-size);
  }

  .avatar--small {
    height: var(--koerber-avatar-size-small);
    width: var(--koerber-avatar-size-small);
    font-size: var(--koerber-text-sm-font-size);
  }

  .avatar__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .avatar__initials {
    line-height: 1;
    text-transform: uppercase;
  }

  .avatar__image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    overflow: hidden;
    border-radius: 100%;
  }
`;var uikit_element=__webpack_require__("./src/internal/uikit-element.ts"),__decorate=function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r};const iconSizeParser={small:"medium",medium:"large",large:"large"};class Avatar extends uikit_element.Z{constructor(){super(...arguments),this.hasError=!1,this.hasFocus=!1,this.image="",this.icon="account",this.label="",this.initials="",this.loading="eager",this.size="medium"}handleImageChange(){this.hasError=!1}handleClick(){this.hasFocus=!0,this.emit("koerber-focus"),setTimeout((()=>{this.hasFocus=!1,this.emit("koerber-blur")}),100)}handleMouseUp(){this.hasFocus=!1,this.emit("koerber-blur")}handleMouseDown(){this.hasFocus=!0,this.emit("koerber-focus")}click(){this.avatar.click()}press(time){this.handleMouseDown(),setTimeout((()=>{this.handleMouseUp()}),time)}render(){const avatarWithImage=lit.dy`
      <img
        part="image"
        class="avatar__image"
        src="${this.image}"
        loading="${this.loading}"
        alt=""
        @error="${()=>this.hasError=!0}"
      />
    `;let avatarWithoutImage=lit.dy``;return avatarWithoutImage=this.initials?lit.dy`<div part="initials" class="avatar__initials">${this.initials}</div>`:lit.dy`
        <div part="icon" class="avatar__icon" aria-hidden="true">
          <slot name="icon">
            <koerber-icon name=${this.icon} size=${iconSizeParser[this.size]}></koerber-icon>
          </slot>
        </div>
      `,lit.dy`
      <div
        part="base"
        class=${(0,class_map.$)({avatar:!0,[`avatar--${this.size}`]:!0,"avatar--focused":this.hasFocus})}
        role="img"
        aria-label=${this.label}
        @click=${this.handleClick}
        @mousedown=${this.handleMouseDown}
        @mouseup=${this.handleMouseUp}
      >
        ${this.image&&!this.hasError?avatarWithImage:avatarWithoutImage}
      </div>
    `}}Avatar.styles=[component_styles.Z,avatar_styles],Avatar.dependencies={"koerber-icon":icon_component.Z,"koerber-badge":badge_component.Z};const avatar_component=Avatar;__decorate([(0,decorators.IO)(".avatar")],Avatar.prototype,"avatar",void 0),__decorate([(0,decorators.SB)()],Avatar.prototype,"hasError",void 0),__decorate([(0,decorators.SB)()],Avatar.prototype,"hasFocus",void 0),__decorate([(0,decorators.Cb)()],Avatar.prototype,"image",void 0),__decorate([(0,decorators.Cb)()],Avatar.prototype,"icon",void 0),__decorate([(0,decorators.Cb)()],Avatar.prototype,"label",void 0),__decorate([(0,decorators.Cb)()],Avatar.prototype,"initials",void 0),__decorate([(0,decorators.Cb)()],Avatar.prototype,"loading",void 0),__decorate([(0,decorators.Cb)()],Avatar.prototype,"size",void 0),__decorate([(0,watch.Y)("image")],Avatar.prototype,"handleImageChange",null)},"./src/components/avatar/avatar.ts":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{__webpack_require__("./src/components/avatar/avatar.component.ts").Z.define("koerber-avatar")},"./src/components/badge/badge.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>badge_component});var class_map=__webpack_require__("./node_modules/lit/directives/class-map.js"),lit=__webpack_require__("./node_modules/lit/index.js"),decorators=__webpack_require__("./node_modules/lit/decorators.js"),component_styles=__webpack_require__("./src/styles/component.styles.ts");const badge_styles=lit.iv`
  :host {
    display: inline-flex;
    --koerber-badge-height-extra-small: 4px;
    --koerber-badge-height-small: 8px;
    --koerber-badge-height-medium: 16px;
    --koerber-badge-height-large: 24px;
  }

  .badge {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: var(--koerber-text-sm-font-size);
    font-weight: var(--koerber-font-weight-regular);
    font-style: normal;
    font-family: var(--koerber-font-family-default);
    line-height: var(--koerber-text-sm-line-height);
    border-radius: var(--koerber-border-radius-x-large);
    white-space: nowrap;
    background: var(--koerber-color-bg-fill-error);
    user-select: none;
    cursor: inherit;
    color: var(--koerber-color-text-bg-fill);
  }

  /* Variant modifiers */
  .badge--extra-small {
    width: var(--koerber-spacing-2xs);
    height: var(--koerber-badge-height-extra-small);
  }

  .badge--small {
    width: var(--koerber-spacing-xs);
    height: var(--koerber-badge-height-small);
  }

  .badge--medium {
    width: var(--koerber-spacing-s);
    height: var(--koerber-badge-height-medium);
  }

  .badge--large {
    padding: var(--koerber-text-sm-font-size);
    height: var(--koerber-badge-height-large);
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 var(--pulse-color);
    }
    70% {
      box-shadow: 0 0 0 0.5rem transparent;
    }
    100% {
      box-shadow: 0 0 0 0 transparent;
    }
  }
`;var uikit_element=__webpack_require__("./src/internal/uikit-element.ts"),__decorate=function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r};class Badge extends uikit_element.Z{constructor(){super(...arguments),this.size="medium"}render(){return lit.dy`
      <span
        part="base"
        class=${(0,class_map.$)({badge:!0,"badge--extra-small":"extra-small"===this.size,"badge--small":"small"===this.size,"badge--medium":"medium"===this.size,"badge--large":"large"===this.size})}
        role="status"
      >
        ${"large"===this.size?lit.dy`<slot part="label"></slot>`:""}
      </span>
    `}}Badge.styles=[component_styles.Z,badge_styles];const badge_component=Badge;__decorate([(0,decorators.Cb)({reflect:!0})],Badge.prototype,"size",void 0)},"./src/components/icon/icon.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _icon_component__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/icon/icon.component.ts");const __WEBPACK_DEFAULT_EXPORT__=_icon_component__WEBPACK_IMPORTED_MODULE_0__.Z;_icon_component__WEBPACK_IMPORTED_MODULE_0__.Z.define("koerber-icon")},"./src/components/list-item/list-item.ts":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{var class_map=__webpack_require__("./node_modules/lit/directives/class-map.js"),lit=__webpack_require__("./node_modules/lit/index.js"),decorators=__webpack_require__("./node_modules/lit/decorators.js"),avatar_component=__webpack_require__("./src/components/avatar/avatar.component.ts"),button_component=__webpack_require__("./src/components/button/button.component.ts"),component_styles=__webpack_require__("./src/styles/component.styles.ts"),icon_component=__webpack_require__("./src/components/icon/icon.component.ts");const list_item_styles=lit.iv`
  :host {
    display: block;
    --koerber-padding: 10px;
    --koerber-avatar-padding: 1px;
    --koerber-list-item-padding: 12px;
  }

  .list-item {
    position: relative;
    display: flex;
    align-items: stretch;

    font-family: var(--koerber-font-family-default);
    font-size: var(--koerber-text-md-font-size);
    font-weight: var(--koerber-font-weight-regular);
    letter-spacing: var(--koerber-letter-spacing-normal);
    padding: var(--koerber-spacing-xs) var(--koerber-spacing-xs) var(--koerber-spacing-xs) var(--koerber-spacing-s);
    transition: var(--koerber-transition-fast) fill;
    user-select: none;
    white-space: nowrap;
    cursor: pointer;
  }

  .list-item .text-container {
    flex: 1 1 auto;
    display: flex;
    position: relative;
    overflow: hidden;
    flex-direction: column;
    align-self: center;
  }

  .list-item .list-item__label-text,
  .list-item .list-item__secondary-text,
  .list-item .list-item__tertiary-text {
    flex: 1 1 auto;
    display: inline-block;
    text-overflow: ellipsis;
    word-wrap: break-word;
    overflow: hidden;
  }

  .list-item .list-item__prefix::slotted(koerber-icon) {
    flex: 0 0 auto;
    margin-right: var(--koerber-spacing-xs);
  }

  .line-item--has-no-subtext .list-item__prefix::slotted(koerber-icon) {
    display: flex;
  }

  .list-item .list-item__prefix::slotted(koerber-avatar) {
    flex: 0 0 auto;
    display: flex;
    align-self: center;
    margin-right: var(--koerber-spacing-xs);
  }

  .list-item .list-item__suffix::slotted(koerber-button) {
    flex: 0 0 auto;
    display: flex;
    z-index: 999;
  }

  .line-item--has-no-subtext .list-item__suffix::slotted(koerber-button) {
    top: 0px;
    right: 0px;
    position: absolute;
  }

  /*
   * Size modifiers
   */

  .list-item--small {
    min-height: var(--koerber-height-size-compact);
    padding-top: var(--koerber-spacing-xs);
    padding-bottom: var(--koerber-spacing-xs);
  }

  .list-item--medium {
    min-height: var(--koerber-height-size-standard);
    padding-top: var(--koerber-padding);
    padding-bottom: var(--koerber-padding);
  }

  .list-item--large {
    min-height: var(--koerber-height-size-comfortable);
    padding-top: var(--koerber-list-item-padding);
    padding-bottom: var(--koerber-list-item-padding);
  }

  .line-item--has-subtext {
    padding-top: var(--koerber-spacing-xs);
    padding-bottom: var(--koerber-spacing-xs);
  }

  /** prefix avatar margin adjustments */

  .list-item--small .list-item__prefix::slotted(koerber-avatar) {
    margin-top: calc(var(--koerber-spacing-2xs) * -1);
    margin-bottom: calc(var(--koerber-spacing-2xs) * -1);
  }

  .list-item--medium .list-item__prefix::slotted(koerber-avatar) {
    margin-top: var(--koerber-avatar-padding);
    margin-bottom: var(--koerber-avatar-padding);
  }

  /** Text container margin for overlaid suffix button */

  .list-item--small .text-container-has-suffix {
    margin-right: var(--koerber-height-size-compact);
  }

  .list-item--medium .text-container-has-suffix {
    margin-right: var(--koerber-height-size-standard);
  }

  .list-item--large .text-container-has-suffix {
    margin-right: var(--koerber-height-size-comfortable);
  }

  .line-item--has-subtext .text-container-has-suffix {
    margin-right: 0px;
  }

  /** text styles based on the size of respective text lines */

  .list-item--small .list-item__secondary-text,
  .list-item--small .list-item__tertiary-text,
  .list-item--medium .list-item__secondary-text,
  .list-item--medium .list-item__tertiary-text,
  .list-item--large .list-item__secondary-text,
  .list-item--large .list-item__tertiary-text {
    font-size: var(--koerber-text-sm-font-size);
    color: var(--koerber-color-text-tertiary);
    line-height: var(--koerber-text-sm-line-height);
  }

  .list-item--small .list-item__label-text,
  .list-item--medium .list-item__label-text {
    font-size: var(--koerber-text-base-font-size);
    color: var(--koerber-color-text-secondary);
  }

  .list-item--small .list-item__label-text {
    line-height: var(--koerber-text-sm-line-height);
  }

  .list-item--medium .list-item__label-text {
    line-height: var(--koerber-text-base-line-height);
  }

  .list-item--large .list-item__label-text {
    font-size: var(--koerber-text-md-font-size);
    color: var(--koerber-color-text-secondary);
    line-height: var(--koerber-text-md-line-height);
  }

  .list-item--large .text-container--has-subtext .list-item__label-text {
    font-size: var(--koerber-text-base-font-size);
    line-height: var(--koerber-text-base-line-height);
  }

  .line-item--has-subtext .list-item__label-text {
    margin-bottom: var(--koerber-spacing-2xs);
  }

  .line-item--has-subtext .list-item__tertiary-text {
    margin-top: var(--koerber-spacing-2xs);
  }

  /** focus and hover styles */

  :host(:focus-visible) {
    outline: none;
  }

  .list-item:hover,
  .list-item:focus-visible {
    background-color: var(--koerber-color-bg-fill-secondary-hover);
    color: var(--koerber-color-acce1);
    outline: none;
  }
`;var uikit_element=__webpack_require__("./src/internal/uikit-element.ts"),__decorate=function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r};class list_item_component_ListItem extends uikit_element.Z{constructor(){super(...arguments),this.label="",this.secondaryText="",this.tertiaryText="",this.size="medium"}connectedCallback(){super.connectedCallback()}getPrefixIcon(){return this.querySelector("koerber-icon")}getPrefixAvatar(){return this.querySelector("koerber-avatar")}async syncPrefix(){const icon=this.getPrefixIcon(),avatar=this.getPrefixAvatar(),hasSubtext=this.secondaryText||this.tertiaryText;icon?(await icon.updateComplete,icon.size=hasSubtext||"large"===this.size?"large":"medium"):avatar&&(await avatar.updateComplete,avatar.size="small")}getSuffixButton(){return this.querySelector("koerber-button")}async syncSuffixButton(){const button=this.getSuffixButton();button&&(await button.updateComplete,button.variant="ghost",this.shadowRoot.querySelector(".text-container").classList.add("text-container-has-suffix"))}render(){const hasSubtext=this.secondaryText||this.tertiaryText;return lit.dy`
      <div
        part="base"
        class=${(0,class_map.$)({"list-item":!0,"line-item--has-subtext":hasSubtext,"line-item--has-no-subtext":!hasSubtext,"list-item--small":"small"===this.size,"list-item--medium":"medium"===this.size,"list-item--large":"large"===this.size})}
      >
        <slot name="prefix" class="list-item__prefix" @slotchange=${this.syncPrefix}></slot>

        <div
          class=${(0,class_map.$)({"text-container":!0,"text-container--has-subtext":hasSubtext})}
        >
          <slot name="label" class="list-item__label-text">${this.label}</slot>
          ${this.secondaryText?lit.dy`<slot name="secondary-text" class="list-item__secondary-text">${this.secondaryText}</slot>`:""}
          ${this.tertiaryText?lit.dy`<slot name="tertiary-text" class="list-item__tertiary-text">${this.tertiaryText}</slot>`:""}
        </div>

        <slot name="suffix" class="list-item__suffix" @slotchange=${this.syncSuffixButton}></slot>
      </div>
    `}}list_item_component_ListItem.styles=[component_styles.Z,list_item_styles],list_item_component_ListItem.dependencies={"koerber-avatar":avatar_component.Z,"koerber-button":button_component.Z,"koerber-icon":icon_component.Z};const list_item_component=list_item_component_ListItem;__decorate([(0,decorators.IO)("slot:not([name])")],list_item_component_ListItem.prototype,"defaultSlot",void 0),__decorate([(0,decorators.Cb)()],list_item_component_ListItem.prototype,"label",void 0),__decorate([(0,decorators.Cb)({type:String,attribute:"secondary-text"})],list_item_component_ListItem.prototype,"secondaryText",void 0),__decorate([(0,decorators.Cb)({type:String,attribute:"tertiary-text"})],list_item_component_ListItem.prototype,"tertiaryText",void 0),__decorate([(0,decorators.Cb)({reflect:!0})],list_item_component_ListItem.prototype,"size",void 0),__decorate([(0,decorators.Cb)()],list_item_component_ListItem.prototype,"value",void 0);list_item_component.define("koerber-list-item")},"./src/components/list/list.ts":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{var lit=__webpack_require__("./node_modules/lit/index.js"),decorators=__webpack_require__("./node_modules/lit/decorators.js"),watch=__webpack_require__("./src/internal/watch.ts"),component_styles=__webpack_require__("./src/styles/component.styles.ts");const list_styles=lit.iv`
  ${component_styles.Z}

  :host {
    display: block;
  }

  .list {
    position: relative;
    padding: var(--koerber-spacing-s);
  }
`;var uikit_element=__webpack_require__("./src/internal/uikit-element.ts"),__decorate=function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r};class list_component_List extends uikit_element.Z{constructor(){super(...arguments),this.size="medium"}connectedCallback(){super.connectedCallback(),this.setAttribute("role","list")}getAllLists(){return[...this.querySelectorAll("koerber-list-item")]}async syncListElements(){const list_items=this.getAllLists();await Promise.all(list_items.map((async list_item=>{await list_item.updateComplete,list_item.size=this.size})))}handleSizeChange(){this.syncListElements()}render(){return lit.dy`
      <div part="base" class="list">
        <slot @slotchange=${this.syncListElements}></slot>
      </div>
    `}}list_component_List.styles=list_styles;const list_component=list_component_List;__decorate([(0,decorators.IO)("slot:not([name])")],list_component_List.prototype,"defaultSlot",void 0),__decorate([(0,decorators.Cb)({reflect:!0})],list_component_List.prototype,"size",void 0),__decorate([(0,watch.Y)("size",{waitUntilFirstUpdate:!0})],list_component_List.prototype,"handleSizeChange",null);list_component.define("koerber-list")}}]);
//# sourceMappingURL=3827.3713d91e.iframe.bundle.js.map