import {
  textarea_styles_default
} from "./chunk.W2CLGS4A.js";
import {
  form_control_styles_default
} from "./chunk.Q5ZCBLEP.js";
import {
  defaultValue
} from "./chunk.CXIPJHGP.js";
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

// src/components/textarea/textarea.component.ts
import { classMap } from "lit/directives/class-map.js";
import { html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";
import { live } from "lit/directives/live.js";
import { property, query, state } from "lit/decorators.js";
var Textarea = class extends UIKitElement {
  constructor() {
    super(...arguments);
    this.hasFocus = false;
    this.title = "";
    this.name = "";
    this.value = "";
    this.size = "medium";
    this.placeholder = "";
    this.rows = 4;
    this.resize = "none";
    this.disabled = false;
    this.readonly = false;
    this.required = false;
    this.characterCount = 0;
    this.spellcheck = true;
    this.defaultValue = "";
  }
  connectedCallback() {
    super.connectedCallback();
    this.resizeObserver = new ResizeObserver(() => this.setTextareaHeight());
    this.updateComplete.then(() => {
      this.setTextareaHeight();
      this.resizeObserver.observe(this.input);
    });
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.resizeObserver.unobserve(this.input);
  }
  handleBlur() {
    this.hasFocus = false;
    this.emit("koerber-blur");
  }
  handleChange() {
    this.value = this.input.value;
    this.characterCount = this.value.length;
    this.setTextareaHeight();
    this.emit("koerber-change");
  }
  handleFocus() {
    this.hasFocus = true;
    this.emit("koerber-focus");
  }
  handleInput() {
    this.value = this.input.value;
    this.characterCount = this.value.length;
    this.emit("koerber-input");
  }
  setTextareaHeight() {
    if (this.resize === "auto") {
      this.input.style.height = "auto";
      this.input.style.height = `${this.input.scrollHeight}px`;
    } else {
      this.input.style.height = void 0;
    }
  }
  handleRowsChange() {
    this.setTextareaHeight();
  }
  async handleValueChange() {
    await this.updateComplete;
    this.setTextareaHeight();
  }
  /** Sets focus on the textarea. */
  focus(options) {
    this.input.focus(options);
  }
  /** Removes focus from the textarea. */
  blur() {
    this.input.blur();
  }
  /** Selects all the text in the textarea. */
  select() {
    this.input.select();
  }
  /** Gets or sets the textarea's scroll position. */
  scrollPosition(position) {
    if (position) {
      if (typeof position.top === "number")
        this.input.scrollTop = position.top;
      if (typeof position.left === "number")
        this.input.scrollLeft = position.left;
      return void 0;
    }
    return {
      top: this.input.scrollTop,
      left: this.input.scrollTop
    };
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
    if (this.value !== this.input.value) {
      this.value = this.input.value;
      this.setTextareaHeight();
    }
  }
  render() {
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
      textarea: true,
      "textarea--small": this.size === "small",
      "textarea--medium": this.size === "medium",
      "textarea--large": this.size === "large",
      "textarea--standard": true,
      "textarea--disabled": this.disabled,
      "textarea--focused": this.hasFocus,
      "textarea--empty": !this.value,
      "textarea--resize-none": this.resize === "none",
      "textarea--resize-vertical": this.resize === "vertical",
      "textarea--resize-auto": this.resize === "auto",
      "textarea--error": this.error
    })}
          >
            <textarea
              part="textarea"
              id="input"
              class="textarea__control"
              title=${this.title}
              name=${ifDefined(this.name)}
              aria-label=${ifDefined(this.accessibleName)}
              aria-description=${ifDefined(this.accessibleDescription)}
              .value=${live(this.value)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${ifDefined(this.placeholder)}
              rows=${ifDefined(this.rows)}
              autocapitalize=${ifDefined(this.autocapitalize)}
              autocorrect=${ifDefined(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${ifDefined(this.spellcheck)}
              enterkeyhint=${ifDefined(this.enterkeyhint)}
              inputmode=${ifDefined(this.inputmode)}
              @change=${this.handleChange}
              @input=${this.handleInput}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            ></textarea>

            ${this.error ? html`
                  <div class="textarea-error-icon-container">
                    <koerber-icon class="textarea-error-icon" name="alert"></koerber-icon>
                  </div>
                ` : ""}
          </div>
        </div>
      </div>
    `;
  }
};
Textarea.styles = [component_styles_default, form_control_styles_default, textarea_styles_default];
Textarea.dependencies = { "koerber-icon": Icon };
__decorateClass([
  query(".textarea__control")
], Textarea.prototype, "input", 2);
__decorateClass([
  state()
], Textarea.prototype, "hasFocus", 2);
__decorateClass([
  property()
], Textarea.prototype, "title", 2);
__decorateClass([
  property()
], Textarea.prototype, "name", 2);
__decorateClass([
  property()
], Textarea.prototype, "value", 2);
__decorateClass([
  property({ reflect: true })
], Textarea.prototype, "size", 2);
__decorateClass([
  property()
], Textarea.prototype, "placeholder", 2);
__decorateClass([
  property({ type: Number })
], Textarea.prototype, "rows", 2);
__decorateClass([
  property()
], Textarea.prototype, "resize", 2);
__decorateClass([
  property({ type: Boolean, reflect: true })
], Textarea.prototype, "disabled", 2);
__decorateClass([
  property({ type: Boolean, reflect: true })
], Textarea.prototype, "readonly", 2);
__decorateClass([
  property({ type: Boolean, reflect: true })
], Textarea.prototype, "required", 2);
__decorateClass([
  state()
], Textarea.prototype, "characterCount", 2);
__decorateClass([
  property()
], Textarea.prototype, "autocapitalize", 2);
__decorateClass([
  property()
], Textarea.prototype, "autocorrect", 2);
__decorateClass([
  property()
], Textarea.prototype, "autocomplete", 2);
__decorateClass([
  property({ type: Boolean })
], Textarea.prototype, "autofocus", 2);
__decorateClass([
  property()
], Textarea.prototype, "enterkeyhint", 2);
__decorateClass([
  property({
    type: Boolean,
    converter: {
      // Allow "true|false" attribute values but keep the property boolean
      fromAttribute: (value) => !value || value === "false" ? false : true,
      toAttribute: (value) => value ? "true" : "false"
    }
  })
], Textarea.prototype, "spellcheck", 2);
__decorateClass([
  property()
], Textarea.prototype, "inputmode", 2);
__decorateClass([
  property({ type: Boolean })
], Textarea.prototype, "error", 2);
__decorateClass([
  defaultValue()
], Textarea.prototype, "defaultValue", 2);
__decorateClass([
  property({ attribute: "accessible-name", reflect: true })
], Textarea.prototype, "accessibleName", 2);
__decorateClass([
  property({ attribute: "accessible-description", reflect: true })
], Textarea.prototype, "accessibleDescription", 2);
__decorateClass([
  watch("rows", { waitUntilFirstUpdate: true })
], Textarea.prototype, "handleRowsChange", 1);
__decorateClass([
  watch("value", { waitUntilFirstUpdate: true })
], Textarea.prototype, "handleValueChange", 1);

export {
  Textarea
};
//# sourceMappingURL=chunk.VIFOVCL4.js.map
