import {
  button_group_styles_default
} from "./chunk.RN3GBZFZ.js";
import {
  UIKitElement
} from "./chunk.YCDYUGC2.js";
import {
  component_styles_default
} from "./chunk.2NT3B5WJ.js";
import {
  __decorateClass
} from "./chunk.DJOAQ4JU.js";

// src/components/button-group/button-group.component.ts
import { html } from "lit";
import { property, query, state } from "lit/decorators.js";
var ButtonGroup = class extends UIKitElement {
  constructor() {
    super(...arguments);
    this.disableRole = false;
    this.label = "";
    this.split = false;
  }
  handleFocus(event) {
    const button = findButton(event.target);
    button == null ? void 0 : button.classList.add("koerber-button-group__button--focus");
  }
  handleBlur(event) {
    const button = findButton(event.target);
    button == null ? void 0 : button.classList.remove("koerber-button-group__button--focus");
  }
  handleMouseOver(event) {
    const button = findButton(event.target);
    button == null ? void 0 : button.classList.add("koerber-button-group__button--hover");
  }
  handleMouseOut(event) {
    const button = findButton(event.target);
    button == null ? void 0 : button.classList.remove("koerber-button-group__button--hover");
  }
  handleSlotChange() {
    const slottedElements = [...this.defaultSlot.assignedElements({ flatten: true })];
    slottedElements.forEach((el) => {
      const index = slottedElements.indexOf(el);
      const button = findButton(el);
      if (button !== null) {
        button.classList.add("koerber-button-group__button");
        button.classList.toggle("koerber-button-group__button--first", index === 0);
        button.classList.toggle("koerber-button-group__button--inner", index > 0 && index < slottedElements.length - 1);
        button.classList.toggle(
          "koerber-button-group__button--split",
          this.split && index >= 0 && index < slottedElements.length - 1
        );
        button.classList.toggle("koerber-button-group__button--last", index === slottedElements.length - 1);
        button.classList.toggle(
          "koerber-button-group__button--radio",
          button.tagName.toLowerCase() === "koerber-radio-button"
        );
      }
    });
  }
  render() {
    return html`
      <slot
        part="base"
        class="button-group"
        role="${this.disableRole ? "presentation" : "group"}"
        aria-label=${this.label}
        @focusout=${this.handleBlur}
        @focusin=${this.handleFocus}
        @mouseover=${this.handleMouseOver}
        @mouseout=${this.handleMouseOut}
        @slotchange=${this.handleSlotChange}
      ></slot>
    `;
  }
};
ButtonGroup.styles = [component_styles_default, button_group_styles_default];
__decorateClass([
  query("slot")
], ButtonGroup.prototype, "defaultSlot", 2);
__decorateClass([
  state()
], ButtonGroup.prototype, "disableRole", 2);
__decorateClass([
  property()
], ButtonGroup.prototype, "label", 2);
__decorateClass([
  property({ type: Boolean })
], ButtonGroup.prototype, "split", 2);
function findButton(el) {
  var _a;
  const selector = "koerber-button, koerber-radio-button";
  return (_a = el.closest(selector)) != null ? _a : el.querySelector(selector);
}

export {
  ButtonGroup
};
//# sourceMappingURL=chunk.CSOPA4B2.js.map
