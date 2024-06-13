import {
  form_control_styles_default
} from "./chunk.Q5ZCBLEP.js";
import {
  input_styles_default
} from "./chunk.MSWBPYCM.js";
import {
  Divider
} from "./chunk.BM3ENIDZ.js";
import {
  defaultValue
} from "./chunk.CXIPJHGP.js";
import {
  LocalizeController
} from "./chunk.75KWNL5E.js";
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

// src/components/input/input.component.ts
import { classMap } from "lit/directives/class-map.js";
import { html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";
import { live } from "lit/directives/live.js";
import { property, query, state } from "lit/decorators.js";
var Input = class extends UIKitElement {
  constructor() {
    super(...arguments);
    this.localize = new LocalizeController(this);
    this.hasFocus = false;
    this.title = "";
    this.type = "text";
    this.name = "";
    this.value = "";
    this.defaultValue = "";
    this.size = "medium";
    this.clearable = false;
    this.disabled = false;
    this.placeholder = "";
    this.readonly = false;
    this.passwordToggle = false;
    this.passwordVisible = false;
    this.spellcheck = true;
    this.error = false;
    this.prefixIcon = "";
    this.suffixIcon = "";
  }
  /** Gets or sets the current value as a `Date` object. Returns `null` if the value can't be converted. */
  get valueAsDate() {
    var _a, _b;
    return (_b = (_a = this.input) == null ? void 0 : _a.valueAsDate) != null ? _b : null;
  }
  set valueAsDate(newValue) {
    const input = document.createElement("input");
    input.type = "date";
    input.valueAsDate = newValue;
    this.value = input.value;
  }
  /** Gets or sets the current value as a number. Returns `NaN` if the value can't be converted. */
  get valueAsNumber() {
    var _a, _b;
    return (_b = (_a = this.input) == null ? void 0 : _a.valueAsNumber) != null ? _b : parseFloat(this.value);
  }
  set valueAsNumber(newValue) {
    const input = document.createElement("input");
    input.type = "number";
    input.valueAsNumber = newValue;
    this.value = input.value;
  }
  handleBlur() {
    this.hasFocus = false;
    this.emit("koerber-blur");
  }
  handleChange() {
    this.value = this.input.value;
    this.emit("koerber-change");
  }
  handleClearClick(event) {
    this.value = "";
    this.emit("koerber-clear");
    this.emit("koerber-input");
    this.emit("koerber-change");
    this.input.focus();
    event.stopPropagation();
  }
  handleIncreaseValueClick(event) {
    this.stepUp();
    this.emit("koerber-input");
    this.emit("koerber-change");
    this.input.focus();
    event.stopPropagation();
  }
  handleDecreaseValueClick(event) {
    this.stepDown();
    this.emit("koerber-input");
    this.emit("koerber-change");
    this.input.focus();
    event.stopPropagation();
  }
  handleFocus() {
    this.hasFocus = true;
    this.emit("koerber-focus");
  }
  handleInput() {
    this.value = this.input.value;
    this.emit("koerber-input");
  }
  handlePasswordToggle() {
    this.passwordVisible = !this.passwordVisible;
  }
  handleStepChange() {
    this.input.step = String(this.step);
  }
  async handleValueChange() {
    await this.updateComplete;
  }
  /** Sets focus on the input. */
  focus(options) {
    this.input.focus(options);
  }
  /** Removes focus from the input. */
  blur() {
    this.input.blur();
  }
  /** Selects all the text in the input. */
  select() {
    this.input.select();
  }
  /** Sets the start and end positions of the text selection (0-based). */
  setSelectionRange(selectionStart, selectionEnd, selectionDirection = "none") {
    this.input.setSelectionRange(selectionStart, selectionEnd, selectionDirection);
  }
  /** Replaces a range of text with a new string. */
  setRangeText(replacement, start, end, selectMode) {
    this.input.setRangeText(replacement, start, end, selectMode);
    if (this.value !== this.input.value) {
      this.value = this.input.value;
    }
  }
  /** Displays the browser picker for an input element (only works if the browser supports it for the input type). */
  showPicker() {
    if ("showPicker" in HTMLInputElement.prototype) {
      this.input.showPicker();
    }
  }
  /** Increments the value of a numeric input type by the value of the step attribute. */
  stepUp() {
    this.input.stepUp();
    if (this.value !== this.input.value) {
      this.value = this.input.value;
    }
  }
  /** Decrements the value of a numeric input type by the value of the step attribute. */
  stepDown() {
    this.input.stepDown();
    if (this.value !== this.input.value) {
      this.value = this.input.value;
    }
  }
  render() {
    const hasClearIcon = this.clearable && !this.disabled && !this.readonly && (typeof this.value === "number" || this.value.length > 0);
    const iconSize = this.size === "small" ? "medium" : this.size;
    return html`
      <div
        part="form-control"
        class=${classMap({
      "form-control": true,
      "form-control--small": this.size === "small",
      "form-control--medium": this.size === "medium",
      "form-control--large": this.size === "large"
    })}
      >
        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${classMap({
      input: true,
      // Sizes
      "input--small": this.size === "small",
      "input--medium": this.size === "medium",
      "input--large": this.size === "large",
      // States
      "input--standard": true,
      "input--disabled": this.disabled,
      "input--focused": this.hasFocus,
      "input--empty": !this.value,
      "input--no-spin-buttons": this.type === "number",
      // add error
      "input--error": this.error
    })}
          >
        ${this.prefixIcon ? html`<koerber-icon size=${iconSize} class="input__prefix" name=${this.prefixIcon}></koerber-icon>` : ""}

            <input
              part="input"
              id="input"
              class="input__control"
              type=${this.type === "password" && this.passwordVisible ? "text" : this.type}
              title=${this.title}
              name=${ifDefined(this.name)}
              aria-label=${ifDefined(this.accessibleName)}
              aria-description=${ifDefined(this.accessibleDescription)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              placeholder=${ifDefined(this.placeholder)}
              step=${ifDefined(this.step)}
              .value=${live(this.value)}
              autocapitalize=${ifDefined(this.autocapitalize)}
              autocomplete=${ifDefined(this.autocomplete)}
              autocorrect=${ifDefined(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${this.spellcheck}
              enterkeyhint=${ifDefined(this.enterkeyhint)}
              inputmode=${ifDefined(this.inputmode)}
              @change=${this.handleChange}
              @input=${this.handleInput}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            />

            ${hasClearIcon ? html`
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
                  ` : ""}
              ${this.error ? html`
                      <div class="input-error-icon-slot">
                        <koerber-icon class="input-error-icon" name="alert" size=${iconSize}></koerber-icon>
                      </div>
                    ` : ""}
            ${this.type === "password" && this.passwordToggle && !this.disabled ? html`
                    <button
                      part="password-toggle-button"
                      class="input__password-toggle"
                      type="button"
                      aria-label=${this.localize.term(this.passwordVisible ? "hidePassword" : "showPassword")}
                      @click=${this.handlePasswordToggle}
                      tabindex="-1"
                    >
                      ${this.passwordVisible ? html`
                            <slot name="show-password-icon">
                              <koerber-icon name="eye-off" library="system" size=${iconSize}></koerber-icon>
                            </slot>
                          ` : html`
                            <slot name="hide-password-icon">
                              <koerber-icon name="eye" library="system" size=${iconSize}></koerber-icon>
                            </slot>
                          `}
                    </button>
                  ` : ""}
          ${this.suffixIcon ? html` <koerber-icon size=${iconSize} class="input__suffix" name=${this.suffixIcon}></koerber-icon>` : ""}
          ${this.type === "number" ? html` <button
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
                  </button>` : ""}
          </div>
        </div>
        </div>
      </div>
    `;
  }
};
Input.styles = [component_styles_default, form_control_styles_default, input_styles_default];
Input.dependencies = { "koerber-icon": Icon, "koerber-divider": Divider };
__decorateClass([
  query(".input__control")
], Input.prototype, "input", 2);
__decorateClass([
  state()
], Input.prototype, "hasFocus", 2);
__decorateClass([
  property()
], Input.prototype, "title", 2);
__decorateClass([
  property({ reflect: true })
], Input.prototype, "type", 2);
__decorateClass([
  property()
], Input.prototype, "name", 2);
__decorateClass([
  property()
], Input.prototype, "value", 2);
__decorateClass([
  defaultValue()
], Input.prototype, "defaultValue", 2);
__decorateClass([
  property({ reflect: true })
], Input.prototype, "size", 2);
__decorateClass([
  property({ type: Boolean })
], Input.prototype, "clearable", 2);
__decorateClass([
  property({ type: Boolean, reflect: true })
], Input.prototype, "disabled", 2);
__decorateClass([
  property()
], Input.prototype, "placeholder", 2);
__decorateClass([
  property({ type: Boolean, reflect: true })
], Input.prototype, "readonly", 2);
__decorateClass([
  property({ attribute: "password-toggle", type: Boolean })
], Input.prototype, "passwordToggle", 2);
__decorateClass([
  property({ attribute: "password-visible", type: Boolean })
], Input.prototype, "passwordVisible", 2);
__decorateClass([
  property()
], Input.prototype, "step", 2);
__decorateClass([
  property()
], Input.prototype, "autocapitalize", 2);
__decorateClass([
  property()
], Input.prototype, "autocorrect", 2);
__decorateClass([
  property()
], Input.prototype, "autocomplete", 2);
__decorateClass([
  property({ type: Boolean })
], Input.prototype, "autofocus", 2);
__decorateClass([
  property()
], Input.prototype, "enterkeyhint", 2);
__decorateClass([
  property({
    type: Boolean,
    converter: {
      // Allow "true|false" attribute values but keep the property boolean
      fromAttribute: (value) => !value || value === "false" ? false : true,
      toAttribute: (value) => value ? "true" : "false"
    }
  })
], Input.prototype, "spellcheck", 2);
__decorateClass([
  property()
], Input.prototype, "inputmode", 2);
__decorateClass([
  property({ type: Boolean })
], Input.prototype, "error", 2);
__decorateClass([
  property({ attribute: "prefix-icon" })
], Input.prototype, "prefixIcon", 2);
__decorateClass([
  property({ attribute: "suffix-icon" })
], Input.prototype, "suffixIcon", 2);
__decorateClass([
  property({ attribute: "accessible-name", reflect: true })
], Input.prototype, "accessibleName", 2);
__decorateClass([
  property({ attribute: "accessible-description", reflect: true })
], Input.prototype, "accessibleDescription", 2);
__decorateClass([
  watch("step", { waitUntilFirstUpdate: true })
], Input.prototype, "handleStepChange", 1);
__decorateClass([
  watch("value", { waitUntilFirstUpdate: true })
], Input.prototype, "handleValueChange", 1);

export {
  Input
};
//# sourceMappingURL=chunk.2P2ZTKFP.js.map
