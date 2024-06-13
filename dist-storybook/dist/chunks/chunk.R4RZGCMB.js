import {
  form_field_styles_default
} from "./chunk.ADYWMFJO.js";
import {
  FormFieldLabel
} from "./chunk.YUCOQNH2.js";
import {
  FormFieldError
} from "./chunk.D5N2YXRP.js";
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

// src/components/form-field/form-field.component.ts
import { html } from "lit";
import { property, query, queryAssignedElements } from "lit/decorators.js";
var FormField = class extends UIKitElement {
  constructor() {
    super(...arguments);
    this.hasSlotController = new HasSlotController(this, "label", "error", "footer");
    this.helpText = "";
    this.valueHint = "";
    this.required = false;
  }
  connectedCallback() {
    super.connectedCallback();
    this.updateComplete.then(() => {
      if (this.suffixSlot) {
        const suffix = this.suffixSlot.assignedElements({ flatten: true })[0];
        const getSuffixAttribute = (attribute) => parseInt(getComputedStyle(suffix).getPropertyValue(attribute).replace("px", ""));
        const valueHintElement = this.shadowRoot.querySelector(".value-hint");
        if (suffix) {
          const suffixWidth = getSuffixAttribute("width") + getSuffixAttribute("margin-left") + getSuffixAttribute("margin-right");
          if (valueHintElement) {
            valueHintElement.style.marginRight = `${suffixWidth}px`;
          }
        }
      }
    });
  }
  updated() {
    this.handleSlotChange();
  }
  handleSlotChange() {
    const [controlElement] = this._controlElements;
    if (controlElement) {
      this.setAccessibilityAttributes(controlElement);
    }
    this.setErrorOnControlElement(controlElement);
  }
  setAccessibilityAttributes(item) {
    var _a;
    const itemFormControl = item;
    if (!itemFormControl.accessibleName && this.label) {
      itemFormControl.accessibleName = this.label;
    }
    if (!itemFormControl.accessibleDescription && this.helpText) {
      itemFormControl.accessibleDescription = this.helpText;
    }
    if (itemFormControl.accessibleName) {
      const [labelElement] = this._labelElements;
      const labelItem = labelElement;
      if (labelItem) {
        labelItem.accessibleHidden = true;
      } else {
        const defaultLabel = (_a = this.shadowRoot) == null ? void 0 : _a.querySelector("koerber-form-field-label");
        if (defaultLabel) {
          defaultLabel.accessibleHidden = true;
        }
      }
    }
  }
  setErrorOnControlElement(controlElement) {
    var _a;
    if (controlElement && ((_a = this.errors) == null ? void 0 : _a.length) > 0) {
      controlElement.setAttribute("error", "true");
    } else {
      controlElement == null ? void 0 : controlElement.removeAttribute("error");
    }
  }
  handleErrorSlotChanged() {
    const items = this.errorSlot.assignedElements({ flatten: true });
    this.errors = items.map((item) => item.textContent || "");
  }
  handleErrorsChanged() {
    const [controlElement] = this._controlElements;
    this.setErrorOnControlElement(controlElement);
  }
  /** Sets the errors for the form-field. */
  setErrors(errors) {
    this.errors = errors;
  }
  /** Clears the errors for the form-field. */
  clearErrors() {
    this.errors = [];
  }
  render() {
    var _a;
    return html`
      <div part="base" class="form-field">
        <div class="heading-container">
          ${this.hasSlotController.test("label") ? html`<div class="label" part="label">
                <slot name="label"></slot>
              </div>` : this.label ? html`<koerber-form-field-label
                  class="label"
                  label=${this.label}
                  tooltip=${this.tooltip}
                  ?required=${this.required}
                ></koerber-form-field-label>` : ""}
          ${this.valueHint ? html`<div class="value-hint">${this.valueHint}</div>` : ""}
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

        ${this.hasSlotController.test("error") ? html`<div class="error" part="error">
              <slot name="error" @slotchange=${this.handleErrorSlotChanged}></slot>
            </div>` : this.errors && this.errors.length !== 0 ? html`<div class="error" part="error">
                ${(_a = this.errors) == null ? void 0 : _a.map(
      (error) => html`<koerber-form-field-error class="error-message">${error}</koerber-form-field-error>`
    )}
              </div>` : ""}
        ${this.hasSlotController.test("footer") ? html`<div class="footer">
              <slot name="footer" part="form-field-footer"></slot>
            </div>` : ""}
      </div>
    `;
  }
};
FormField.styles = form_field_styles_default;
FormField.dependencies = { "koerber-form-field-label": FormFieldLabel, "koerber-form-field-error": FormFieldError };
__decorateClass([
  query("slot:not([name])")
], FormField.prototype, "defaultSlot", 2);
__decorateClass([
  query("slot[name=error]")
], FormField.prototype, "errorSlot", 2);
__decorateClass([
  query('slot[name="suffix"]')
], FormField.prototype, "suffixSlot", 2);
__decorateClass([
  queryAssignedElements()
], FormField.prototype, "_controlElements", 2);
__decorateClass([
  queryAssignedElements({ slot: "label" })
], FormField.prototype, "_labelElements", 2);
__decorateClass([
  property({ attribute: "help-text" })
], FormField.prototype, "helpText", 2);
__decorateClass([
  property({ type: Array, reflect: true })
], FormField.prototype, "errors", 2);
__decorateClass([
  property({ reflect: true })
], FormField.prototype, "label", 2);
__decorateClass([
  property({ attribute: "value-hint" })
], FormField.prototype, "valueHint", 2);
__decorateClass([
  property({ type: Boolean, reflect: true })
], FormField.prototype, "required", 2);
__decorateClass([
  property({ reflect: true })
], FormField.prototype, "tooltip", 2);
__decorateClass([
  watch("errors")
], FormField.prototype, "handleErrorsChanged", 1);

export {
  FormField
};
//# sourceMappingURL=chunk.R4RZGCMB.js.map
