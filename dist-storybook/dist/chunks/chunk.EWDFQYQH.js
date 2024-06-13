import {
  radio_styles_default
} from "./chunk.EW3AAP7M.js";
import {
  Icon
} from "./chunk.P72BJC7O.js";
import {
  watch
} from "./chunk.H257LPKH.js";
import {
  UIKitElement
} from "./chunk.YCDYUGC2.js";
import {
  component_styles_default
} from "./chunk.2NT3B5WJ.js";
import {
  __decorateClass
} from "./chunk.DJOAQ4JU.js";

// src/components/radio/radio.component.ts
import { classMap } from "lit/directives/class-map.js";
import { html } from "lit";
import { property, state } from "lit/decorators.js";
var Radio = class extends UIKitElement {
  constructor() {
    super(...arguments);
    this.checked = false;
    this.hasFocus = false;
    this.size = "standard";
    this.disabled = false;
    this.error = false;
  }
  connectedCallback() {
    super.connectedCallback();
    this.handleBlur = this.handleBlur.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.setInitialAttributes();
    this.addEventListeners();
  }
  disconnectedCallback() {
    this.removeEventListeners();
  }
  addEventListeners() {
    this.addEventListener("blur", this.handleBlur);
    this.addEventListener("click", this.handleClick);
    this.addEventListener("focus", this.handleFocus);
  }
  removeEventListeners() {
    this.removeEventListener("blur", this.handleBlur);
    this.removeEventListener("click", this.handleClick);
    this.removeEventListener("focus", this.handleFocus);
  }
  handleClick() {
    var _a;
    if (!this.disabled) {
      const parentElementName = (_a = this.parentElement) == null ? void 0 : _a.tagName.toLowerCase();
      if (parentElementName === "koerber-radio-group") {
        return;
      }
      if (!this.checked) {
        this.emit("koerber-input");
        this.emit("koerber-change");
      }
      this.checked = true;
    }
  }
  handleBlur() {
    this.hasFocus = false;
    this.emit("koerber-blur");
  }
  handleFocus() {
    this.hasFocus = true;
    this.emit("koerber-focus");
  }
  setInitialAttributes() {
    this.setAttribute("role", "radio");
    this.setAttribute("tabindex", "-1");
    this.setAttribute("aria-disabled", this.disabled ? "true" : "false");
    if (this.accessibleName) {
      this.setAttribute("aria-label", this.accessibleName);
    }
    if (this.accessibleDescription) {
      this.setAttribute("aria-description", this.accessibleDescription);
    }
  }
  handleCheckedChange() {
    this.setAttribute("aria-checked", this.checked ? "true" : "false");
    this.setAttribute("tabindex", this.checked ? "0" : "-1");
  }
  handleDisabledChange() {
    this.setAttribute("aria-disabled", this.disabled ? "true" : "false");
  }
  render() {
    return html`
      <span
        part="base"
        class=${classMap({
      radio: true,
      "radio--checked": this.checked,
      "radio--disabled": this.disabled,
      "radio--error": this.error,
      "radio--focused": this.hasFocus,
      "radio--standard": this.size === "standard",
      "radio--comfortable": this.size === "comfortable"
    })}
      >
        <span part="${`control${this.checked ? " control--checked" : ""}`}" class="radio__control">
          ${this.checked ? html`
                <koerber-icon
                  part="checked-icon"
                  size="medium"
                  class=${classMap({
      "radio__checked-icon": true,
      "icon--medium": true
    })}
                  library="system"
                  name="circle"
                ></koerber-icon>
              ` : ""}
        </span>

        <slot part="label" class="radio__label">
          <koerber-form-field-label label="${this.label}"></koerber-form-field-label>
        </slot>
      </span>
    `;
  }
};
Radio.styles = [component_styles_default, radio_styles_default];
Radio.dependencies = { "koerber-icon": Icon };
__decorateClass([
  state()
], Radio.prototype, "checked", 2);
__decorateClass([
  state()
], Radio.prototype, "hasFocus", 2);
__decorateClass([
  property()
], Radio.prototype, "value", 2);
__decorateClass([
  property()
], Radio.prototype, "label", 2);
__decorateClass([
  property({ reflect: true })
], Radio.prototype, "size", 2);
__decorateClass([
  property({ type: Boolean, reflect: true })
], Radio.prototype, "disabled", 2);
__decorateClass([
  property({ type: Boolean, reflect: true })
], Radio.prototype, "error", 2);
__decorateClass([
  property({ attribute: "accessible-name", reflect: true })
], Radio.prototype, "accessibleName", 2);
__decorateClass([
  property({ attribute: "accessible-description", reflect: true })
], Radio.prototype, "accessibleDescription", 2);
__decorateClass([
  watch("checked")
], Radio.prototype, "handleCheckedChange", 1);
__decorateClass([
  watch("disabled", { waitUntilFirstUpdate: true })
], Radio.prototype, "handleDisabledChange", 1);

export {
  Radio
};
//# sourceMappingURL=chunk.EWDFQYQH.js.map
