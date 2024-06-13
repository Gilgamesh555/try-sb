import {
  radio_button_styles_default
} from "./chunk.5HGDZHSE.js";
import {
  button_styles_default
} from "./chunk.XOJKXQ5O.js";
import {
  HasSlotController
} from "./chunk.SIMXNE26.js";
import {
  watch
} from "./chunk.H257LPKH.js";
import {
  UIKitElement
} from "./chunk.YCDYUGC2.js";
import {
  __decorateClass
} from "./chunk.DJOAQ4JU.js";

// src/components/radio-button/radio-button.component.ts
import { classMap } from "lit/directives/class-map.js";
import { html } from "lit/static-html.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { property, query, state } from "lit/decorators.js";
var RadioButton = class extends UIKitElement {
  constructor() {
    super(...arguments);
    this.hasSlotController = new HasSlotController(this, "[default]", "prefix", "suffix");
    this.hasFocus = false;
    this.checked = false;
    this.disabled = false;
    this.size = "medium";
    this.error = false;
  }
  connectedCallback() {
    super.connectedCallback();
    this.setAttribute("role", "presentation");
  }
  handleBlur() {
    this.hasFocus = false;
    this.emit("koerber-blur");
  }
  handleClick(e) {
    if (this.disabled) {
      e.preventDefault();
      e.stopPropagation();
      return;
    }
    this.checked = true;
  }
  handleFocus() {
    this.hasFocus = true;
    this.emit("koerber-focus");
  }
  handleDisabledChange() {
    this.setAttribute("aria-disabled", this.disabled ? "true" : "false");
  }
  /** Sets focus on the radio button. */
  focus(options) {
    this.input.focus(options);
  }
  /** Removes focus from the radio button. */
  blur() {
    this.input.blur();
  }
  render() {
    const radioButtonContent = html`
      ${this.hasSlotController.test("prefix") ? html`<slot name="prefix" part="prefix" class="button__prefix"></slot>` : ""}
      ${this.hasSlotController.test("[default]") ? html`<slot part="label" class="button__label"></slot>` : ""}
      ${this.hasSlotController.test("suffix") ? html`<slot name="suffix" part="suffix" class="button__suffix"></slot>` : ""}
    `;
    return html`
      <div part="base" role="presentation">
        <button
          part="${`button${this.checked ? " button--checked" : ""}`}"
          role="radio"
          aria-checked="${this.checked}"
          class=${classMap({
      button: true,
      "button--default": true,
      "button--small": this.size === "small",
      "button--medium": this.size === "medium",
      "button--large": this.size === "large",
      "button--checked": this.checked,
      "button--disabled": this.disabled,
      "button--focused": this.hasFocus,
      "button--has-label": this.hasSlotController.test("[default]"),
      "button--has-prefix": this.hasSlotController.test("prefix"),
      "button--has-suffix": this.hasSlotController.test("suffix")
    })}
          aria-disabled=${this.disabled}
          type="button"
          value=${ifDefined(this.value)}
          tabindex="${this.checked ? "0" : "-1"}"
          @blur=${this.handleBlur}
          @focus=${this.handleFocus}
          @click=${this.handleClick}
        >
          ${radioButtonContent}
        </button>
      </div>
    `;
  }
};
RadioButton.styles = [button_styles_default, radio_button_styles_default];
__decorateClass([
  query(".button")
], RadioButton.prototype, "input", 2);
__decorateClass([
  query(".hidden-input")
], RadioButton.prototype, "hiddenInput", 2);
__decorateClass([
  state()
], RadioButton.prototype, "hasFocus", 2);
__decorateClass([
  property({ type: Boolean, reflect: true })
], RadioButton.prototype, "checked", 2);
__decorateClass([
  property()
], RadioButton.prototype, "value", 2);
__decorateClass([
  property({ type: Boolean, reflect: true })
], RadioButton.prototype, "disabled", 2);
__decorateClass([
  property({ reflect: true })
], RadioButton.prototype, "size", 2);
__decorateClass([
  property({ type: Boolean, reflect: true })
], RadioButton.prototype, "error", 2);
__decorateClass([
  watch("disabled", { waitUntilFirstUpdate: true })
], RadioButton.prototype, "handleDisabledChange", 1);

export {
  RadioButton
};
//# sourceMappingURL=chunk.I5ODWVKZ.js.map
