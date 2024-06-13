import {
  toggle_styles_default
} from "./chunk.JCSPM4FV.js";
import {
  defaultValue
} from "./chunk.CXIPJHGP.js";
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

// src/components/toggle/toggle.component.ts
import { classMap } from "lit/directives/class-map.js";
import { html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";
import { live } from "lit/directives/live.js";
import { property, query, state } from "lit/decorators.js";
var Toggle = class extends UIKitElement {
  constructor() {
    super(...arguments);
    this.hasFocus = false;
    this.title = "";
    this.name = "";
    this.size = "standard";
    this.disabled = false;
    this.checked = false;
    this.defaultChecked = false;
    this.required = false;
    this.error = false;
  }
  handleBlur() {
    this.hasFocus = false;
    this.emit("koerber-blur");
  }
  handleInput() {
    this.emit("koerber-input");
  }
  handleClick() {
    this.checked = !this.checked;
    this.emit("koerber-change");
  }
  handleFocus() {
    this.hasFocus = true;
    this.emit("koerber-focus");
  }
  handleKeyDown(event) {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      this.checked = false;
      this.emit("koerber-change");
      this.emit("koerber-input");
    }
    if (event.key === "ArrowRight") {
      event.preventDefault();
      this.checked = true;
      this.emit("koerber-change");
      this.emit("koerber-input");
    }
  }
  handleCheckedChange() {
    this.input.checked = this.checked;
  }
  /** Simulates a click on the toggle. */
  click() {
    this.input.click();
  }
  /** Sets focus on the toggle. */
  focus(options) {
    this.input.focus(options);
  }
  /** Removes focus from the toggle. */
  blur() {
    this.input.blur();
  }
  render() {
    return html`
      <label
        part="base"
        class=${classMap({
      toggle: true,
      "toggle--checked": this.checked,
      "toggle--disabled": this.disabled,
      "toggle--focused": this.hasFocus,
      "toggle--standard": this.size === "standard",
      "toggle--comfortable": this.size === "comfortable",
      "toggle--error": this.error
    })}
      >
        <input
          class="toggle__input"
          type="checkbox"
          title=${this.title}
          name=${this.name}
          value=${ifDefined(this.value)}
          .checked=${live(this.checked)}
          .disabled=${this.disabled}
          .required=${this.required}
          role="switch"
          aria-checked=${this.checked ? "true" : "false"}
          aria-label=${ifDefined(this.accessibleName)}
          aria-description=${ifDefined(this.accessibleDescription)}
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
    `;
  }
};
Toggle.styles = [component_styles_default, toggle_styles_default];
__decorateClass([
  query('input[type="checkbox"]')
], Toggle.prototype, "input", 2);
__decorateClass([
  state()
], Toggle.prototype, "hasFocus", 2);
__decorateClass([
  property()
], Toggle.prototype, "title", 2);
__decorateClass([
  property()
], Toggle.prototype, "name", 2);
__decorateClass([
  property()
], Toggle.prototype, "value", 2);
__decorateClass([
  property()
], Toggle.prototype, "label", 2);
__decorateClass([
  property({ reflect: true })
], Toggle.prototype, "size", 2);
__decorateClass([
  property({ type: Boolean, reflect: true })
], Toggle.prototype, "disabled", 2);
__decorateClass([
  property({ type: Boolean, reflect: true })
], Toggle.prototype, "checked", 2);
__decorateClass([
  defaultValue("checked")
], Toggle.prototype, "defaultChecked", 2);
__decorateClass([
  property({ type: Boolean, reflect: true })
], Toggle.prototype, "required", 2);
__decorateClass([
  property({ type: Boolean, reflect: true })
], Toggle.prototype, "error", 2);
__decorateClass([
  property({ attribute: "accessible-name", reflect: true })
], Toggle.prototype, "accessibleName", 2);
__decorateClass([
  property({ attribute: "accessible-description", reflect: true })
], Toggle.prototype, "accessibleDescription", 2);
__decorateClass([
  watch("checked", { waitUntilFirstUpdate: true })
], Toggle.prototype, "handleCheckedChange", 1);

export {
  Toggle
};
//# sourceMappingURL=chunk.HUVNBGO6.js.map
