import {
  icon_button_styles_default
} from "./chunk.PRFIYQFP.js";
import {
  Icon
} from "./chunk.P72BJC7O.js";
import {
  UIKitElement
} from "./chunk.YCDYUGC2.js";
import {
  component_styles_default
} from "./chunk.2NT3B5WJ.js";
import {
  __decorateClass
} from "./chunk.DJOAQ4JU.js";

// src/components/icon-button/icon-button.component.ts
import { classMap } from "lit/directives/class-map.js";
import { html, literal } from "lit/static-html.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { property, query, state } from "lit/decorators.js";
var IconButton = class extends UIKitElement {
  constructor() {
    super(...arguments);
    this.hasFocus = false;
    this.size = "medium";
    this.label = "";
    this.disabled = false;
  }
  handleBlur() {
    this.hasFocus = false;
    this.emit("koerber-blur");
  }
  handleFocus() {
    this.hasFocus = true;
    this.emit("koerber-focus");
  }
  handleClick(event) {
    if (this.disabled) {
      event.preventDefault();
      event.stopPropagation();
    }
  }
  /** Simulates a click on the icon button. */
  click() {
    this.button.click();
  }
  /** Sets focus on the icon button. */
  focus(options) {
    this.button.focus(options);
  }
  /** Removes focus from the icon button. */
  blur() {
    this.button.blur();
  }
  render() {
    const isLink = this.href ? true : false;
    const tag = isLink ? literal`a` : literal`button`;
    return html`
      <${tag}
        part="base"
        class=${classMap({
      "icon-button": true,
      "icon-button--disabled": !isLink && this.disabled,
      "icon-button--focused": this.hasFocus
    })}
        ?disabled=${ifDefined(isLink ? void 0 : this.disabled)}
        type=${ifDefined(isLink ? void 0 : "button")}
        href=${ifDefined(isLink ? this.href : void 0)}
        target=${ifDefined(isLink ? this.target : void 0)}
        download=${ifDefined(isLink ? this.download : void 0)}
        rel=${ifDefined(isLink && this.target ? "noreferrer noopener" : void 0)}
        role=${ifDefined(isLink ? void 0 : "button")}
        aria-disabled=${this.disabled ? "true" : "false"}
        aria-label="${this.label}"
        tabindex=${this.disabled ? "-1" : "0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <koerber-icon
          size=${ifDefined(this.size)}
          class="icon-button__icon"
          name=${ifDefined(this.name)}
          library=${ifDefined(this.library)}
          src=${ifDefined(this.src)}
          aria-hidden="true"
        ></koerber-icon>
      </${tag}>
    `;
  }
};
IconButton.styles = [component_styles_default, icon_button_styles_default];
IconButton.dependencies = { "koerber-icon": Icon };
__decorateClass([
  query(".icon-button")
], IconButton.prototype, "button", 2);
__decorateClass([
  state()
], IconButton.prototype, "hasFocus", 2);
__decorateClass([
  property()
], IconButton.prototype, "name", 2);
__decorateClass([
  property()
], IconButton.prototype, "library", 2);
__decorateClass([
  property()
], IconButton.prototype, "src", 2);
__decorateClass([
  property()
], IconButton.prototype, "href", 2);
__decorateClass([
  property()
], IconButton.prototype, "target", 2);
__decorateClass([
  property()
], IconButton.prototype, "download", 2);
__decorateClass([
  property({ reflect: true })
], IconButton.prototype, "size", 2);
__decorateClass([
  property()
], IconButton.prototype, "label", 2);
__decorateClass([
  property({ type: Boolean, reflect: true })
], IconButton.prototype, "disabled", 2);

export {
  IconButton
};
//# sourceMappingURL=chunk.BVPLSUKH.js.map
