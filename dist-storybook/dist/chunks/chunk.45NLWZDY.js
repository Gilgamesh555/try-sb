import {
  avatar_styles_default
} from "./chunk.QUHQK5GT.js";
import {
  Icon
} from "./chunk.P72BJC7O.js";
import {
  watch
} from "./chunk.H257LPKH.js";
import {
  Badge
} from "./chunk.SU72EIVH.js";
import {
  UIKitElement
} from "./chunk.YCDYUGC2.js";
import {
  component_styles_default
} from "./chunk.2NT3B5WJ.js";
import {
  __decorateClass
} from "./chunk.DJOAQ4JU.js";

// src/components/avatar/avatar.component.ts
import { classMap } from "lit/directives/class-map.js";
import { html } from "lit";
import { property, query, state } from "lit/decorators.js";
var iconSizeParser = {
  small: "medium",
  medium: "large",
  large: "large"
};
var Avatar = class extends UIKitElement {
  constructor() {
    super(...arguments);
    this.hasError = false;
    this.hasFocus = false;
    this.image = "";
    this.icon = "account";
    this.label = "";
    this.initials = "";
    this.loading = "eager";
    this.size = "medium";
  }
  handleImageChange() {
    this.hasError = false;
  }
  handleClick() {
    this.hasFocus = true;
    this.emit("koerber-focus");
    setTimeout(() => {
      this.hasFocus = false;
      this.emit("koerber-blur");
    }, 100);
  }
  handleMouseUp() {
    this.hasFocus = false;
    this.emit("koerber-blur");
  }
  handleMouseDown() {
    this.hasFocus = true;
    this.emit("koerber-focus");
  }
  /** Simulates click on the component */
  click() {
    this.avatar.click();
  }
  /** Simulates the component press certain amount of time in mil-seconds */
  press(time) {
    this.handleMouseDown();
    setTimeout(() => {
      this.handleMouseUp();
    }, time);
  }
  render() {
    const avatarWithImage = html`
      <img
        part="image"
        class="avatar__image"
        src="${this.image}"
        loading="${this.loading}"
        alt=""
        @error="${() => this.hasError = true}"
      />
    `;
    let avatarWithoutImage = html``;
    if (this.initials) {
      avatarWithoutImage = html`<div part="initials" class="avatar__initials">${this.initials}</div>`;
    } else {
      avatarWithoutImage = html`
        <div part="icon" class="avatar__icon" aria-hidden="true">
          <slot name="icon">
            <koerber-icon name=${this.icon} size=${iconSizeParser[this.size]}></koerber-icon>
          </slot>
        </div>
      `;
    }
    return html`
      <div
        part="base"
        class=${classMap({
      avatar: true,
      [`avatar--${this.size}`]: true,
      "avatar--focused": this.hasFocus
    })}
        role="img"
        aria-label=${this.label}
        @click=${this.handleClick}
        @mousedown=${this.handleMouseDown}
        @mouseup=${this.handleMouseUp}
      >
        ${this.image && !this.hasError ? avatarWithImage : avatarWithoutImage}
      </div>
    `;
  }
};
Avatar.styles = [component_styles_default, avatar_styles_default];
Avatar.dependencies = {
  "koerber-icon": Icon,
  "koerber-badge": Badge
};
__decorateClass([
  query(".avatar")
], Avatar.prototype, "avatar", 2);
__decorateClass([
  state()
], Avatar.prototype, "hasError", 2);
__decorateClass([
  state()
], Avatar.prototype, "hasFocus", 2);
__decorateClass([
  property()
], Avatar.prototype, "image", 2);
__decorateClass([
  property()
], Avatar.prototype, "icon", 2);
__decorateClass([
  property()
], Avatar.prototype, "label", 2);
__decorateClass([
  property()
], Avatar.prototype, "initials", 2);
__decorateClass([
  property()
], Avatar.prototype, "loading", 2);
__decorateClass([
  property()
], Avatar.prototype, "size", 2);
__decorateClass([
  watch("image")
], Avatar.prototype, "handleImageChange", 1);

export {
  Avatar
};
//# sourceMappingURL=chunk.45NLWZDY.js.map
