import {
  defaultValue
} from "./chunk.CXIPJHGP.js";
import {
  checkbox_styles_default
} from "./chunk.COB7D4FN.js";
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

// src/components/checkbox/checkbox.component.ts
import { classMap } from "lit/directives/class-map.js";
import { html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";
import { live } from "lit/directives/live.js";
import { property, query, state } from "lit/decorators.js";
var Checkbox = class extends UIKitElement {
  constructor() {
    super(...arguments);
    this.hasFocus = false;
    this.title = "";
    this.name = "";
    this.size = "standard";
    this.disabled = false;
    this.checked = false;
    this.indeterminate = false;
    this.defaultChecked = false;
    this.required = false;
    this.error = false;
  }
  handleClick(event) {
    event.preventDefault();
    this.checked = !this.checked;
    this.indeterminate = false;
    this.emit("koerber-change");
  }
  handleWrapperClick(event) {
    event.preventDefault();
    if (event.target.tagName !== "INPUT") {
      this.checked = !this.checked;
      this.emit("koerber-change");
    }
  }
  handleKeyDown(event) {
    if (event.key === " ") {
      event.preventDefault();
      this.checked = !this.checked;
      this.emit("koerber-change");
    }
  }
  simulateSpacebarPress() {
    const event = new KeyboardEvent("keydown", {
      key: " ",
      code: "Space",
      keyCode: 32,
      charCode: 32,
      which: 32,
      bubbles: true,
      cancelable: true,
      composed: true
    });
    this.handleKeyDown(event);
  }
  handleBlur() {
    this.hasFocus = false;
    this.emit("koerber-blur");
  }
  handleInput() {
    this.emit("koerber-input");
  }
  handleFocus() {
    this.hasFocus = true;
    this.emit("koerber-focus");
  }
  handleStateChange() {
    this.input.checked = this.checked;
    this.input.indeterminate = this.indeterminate;
  }
  /** Simulates a click on the checkbox. */
  click() {
    this.input.click();
  }
  /** Sets focus on the checkbox. */
  focus(options) {
    this.input.focus(options);
  }
  /** Removes focus from the checkbox. */
  blur() {
    this.input.blur();
  }
  render() {
    return html`
      <div class="checkbox-wrapper" @click=${this.handleWrapperClick}>
        <label
          part="base"
          class=${classMap({
      checkbox: true,
      "checkbox--checked": this.checked,
      "checkbox--disabled": this.disabled,
      "checkbox--focused": this.hasFocus,
      "checkbox--indeterminate": this.indeterminate,
      "checkbox--standard": this.size === "standard",
      "checkbox--comfortable": this.size === "comfortable",
      "checkbox--error": this.error
    })}
        >
          <input
            class="checkbox__input"
            type="checkbox"
            title=${this.title}
            name=${this.name}
            value=${ifDefined(this.value)}
            .indeterminate=${live(this.indeterminate)}
            .checked=${live(this.checked)}
            .disabled=${this.disabled}
            .required=${this.required}
            aria-checked=${this.checked ? "true" : "false"}
            aria-label=${ifDefined(this.accessibleName)}
            aria-description=${ifDefined(this.accessibleDescription)}
            @click=${this.handleClick}
            @input=${this.handleInput}
            @blur=${this.handleBlur}
            @focus=${this.handleFocus}
            @keydown=${this.handleKeyDown}
          />

          <span
            part="control${this.checked ? " control--checked" : ""}${this.indeterminate ? " control--indeterminate" : ""}"
            class="checkbox__control"
          >
            ${this.checked ? html`
                  <koerber-icon
                    part="checked-icon"
                    class="checkbox__checked-icon"
                    library="system"
                    name="check"
                    size="medium"
                  ></koerber-icon>
                ` : ""}
            ${!this.checked && this.indeterminate ? html`
                  <koerber-icon
                    part="indeterminate-icon"
                    class="checkbox__indeterminate-icon"
                    library="system"
                    name="minus"
                    size="medium"
                  ></koerber-icon>
                ` : ""}
          </span>

          <div part="label" class="checkbox__label">
            <slot>
              <koerber-form-field-label label="${this.label}"></koerber-form-field-label>
            </slot>
          </div>
        </label>
      </div>
    `;
  }
};
Checkbox.styles = [component_styles_default, checkbox_styles_default];
Checkbox.dependencies = { "koerber-icon": Icon };
__decorateClass([
  query('input[type="checkbox"]')
], Checkbox.prototype, "input", 2);
__decorateClass([
  state()
], Checkbox.prototype, "hasFocus", 2);
__decorateClass([
  property()
], Checkbox.prototype, "title", 2);
__decorateClass([
  property()
], Checkbox.prototype, "name", 2);
__decorateClass([
  property()
], Checkbox.prototype, "value", 2);
__decorateClass([
  property()
], Checkbox.prototype, "label", 2);
__decorateClass([
  property({ reflect: true })
], Checkbox.prototype, "size", 2);
__decorateClass([
  property({ type: Boolean, reflect: true })
], Checkbox.prototype, "disabled", 2);
__decorateClass([
  property({ type: Boolean, reflect: true })
], Checkbox.prototype, "checked", 2);
__decorateClass([
  property({ type: Boolean, reflect: true })
], Checkbox.prototype, "indeterminate", 2);
__decorateClass([
  defaultValue("checked")
], Checkbox.prototype, "defaultChecked", 2);
__decorateClass([
  property({ type: Boolean, reflect: true })
], Checkbox.prototype, "required", 2);
__decorateClass([
  property({ type: Boolean })
], Checkbox.prototype, "error", 2);
__decorateClass([
  property({ attribute: "accessible-name", reflect: true })
], Checkbox.prototype, "accessibleName", 2);
__decorateClass([
  property({ attribute: "accessible-description", reflect: true })
], Checkbox.prototype, "accessibleDescription", 2);
__decorateClass([
  watch(["checked", "indeterminate"], { waitUntilFirstUpdate: true })
], Checkbox.prototype, "handleStateChange", 1);

export {
  Checkbox
};
//# sourceMappingURL=chunk.CSOSMLIW.js.map
