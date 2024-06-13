import {
  Tooltip
} from "./chunk.DCXL77BX.js";
import {
  form_field_label_styles_default
} from "./chunk.BJLE7WYG.js";
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
  __decorateClass
} from "./chunk.DJOAQ4JU.js";

// src/components/form-field-label/form-field-label.component.ts
import { html } from "lit";
import { property, query } from "lit/decorators.js";
var FormFieldLabel = class extends UIKitElement {
  constructor() {
    super(...arguments);
    this.label = "";
    this.tooltip = "";
    this.required = false;
    this.accessibleHidden = false;
  }
  handleRequiredChange() {
    this.required = !this.required;
  }
  render() {
    const infoIcon = this.tooltip.trim().length > 0 ? html`
            <koerber-tooltip placement="top-start" hoist content=${this.tooltip}>
              <koerber-icon class="info_icon" size="medium" name="information"></koerber-icon>
            </koerber-tooltip>
          ` : "";
    return html`${this.label.trim().length > 0 ? html`
          <div class="body" aria-label=${this.label} ?aria-hidden=${this.accessibleHidden}>
            ${this.required ? html`<span class="asterisk">*</span>` : ""}
            <span class="label_container">${this.label}</span>
            ${infoIcon}
          </div>
        ` : ""}`;
  }
};
FormFieldLabel.styles = form_field_label_styles_default;
FormFieldLabel.dependencies = { "koerber-icon": Icon, "koerber-tooltip": Tooltip };
__decorateClass([
  query("slot:not([name])")
], FormFieldLabel.prototype, "defaultSlot", 2);
__decorateClass([
  property()
], FormFieldLabel.prototype, "label", 2);
__decorateClass([
  property({ reflect: true })
], FormFieldLabel.prototype, "tooltip", 2);
__decorateClass([
  property({ reflect: true, type: Boolean })
], FormFieldLabel.prototype, "required", 2);
__decorateClass([
  property({ type: Boolean, reflect: true, attribute: "accessible-hidden" })
], FormFieldLabel.prototype, "accessibleHidden", 2);
__decorateClass([
  watch("required", { waitUntilFirstUpdate: true })
], FormFieldLabel.prototype, "handleRequiredChange", 1);

export {
  FormFieldLabel
};
//# sourceMappingURL=chunk.YUCOQNH2.js.map
