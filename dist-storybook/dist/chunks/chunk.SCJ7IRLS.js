import {
  breadcrumb_styles_default
} from "./chunk.CPGBSKE5.js";
import {
  LocalizeController
} from "./chunk.75KWNL5E.js";
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

// src/components/breadcrumb/breadcrumb.component.ts
import { html } from "lit";
import { property, query } from "lit/decorators.js";
var Breadcrumb = class extends UIKitElement {
  constructor() {
    super(...arguments);
    this.localize = new LocalizeController(this);
    this.separatorDir = this.localize.dir();
    this.label = "";
  }
  // Generates a clone of the separator element to use for each breadcrumb item
  getSeparator() {
    const separator = this.separatorSlot.assignedElements({ flatten: true })[0];
    const clone = separator.cloneNode(true);
    [clone, ...clone.querySelectorAll("[id]")].forEach((el) => el.removeAttribute("id"));
    clone.setAttribute("data-default", "");
    clone.slot = "separator";
    return clone;
  }
  handleSlotChange() {
    const items = [...this.defaultSlot.assignedElements({ flatten: true })].filter(
      (item) => item.tagName.toLowerCase() === "koerber-breadcrumb-item"
    );
    items.forEach((item, index) => {
      const separator = item.querySelector('[slot="separator"]');
      if (separator === null) {
        item.append(this.getSeparator());
      } else if (separator.hasAttribute("data-default")) {
        separator.replaceWith(this.getSeparator());
      }
      if (index === items.length - 1) {
        item.setAttribute("aria-current", "page");
      } else {
        item.removeAttribute("aria-current");
      }
    });
  }
  render() {
    if (this.separatorDir !== this.localize.dir()) {
      this.separatorDir = this.localize.dir();
      this.updateComplete.then(() => this.handleSlotChange());
    }
    return html`
      <nav part="base" class="breadcrumb" aria-label=${this.label}>
        <slot @slotchange=${this.handleSlotChange}></slot>
      </nav>

      <slot name="separator" hidden aria-hidden="true">
        <koerber-icon
          name=${this.localize.dir() === "rtl" ? "chevron-left" : "chevron-right"}
          library="system"
        ></koerber-icon>
      </slot>
    `;
  }
};
Breadcrumb.styles = [component_styles_default, breadcrumb_styles_default];
Breadcrumb.dependencies = { "koerber-icon": Icon };
__decorateClass([
  query("slot")
], Breadcrumb.prototype, "defaultSlot", 2);
__decorateClass([
  query('slot[name="separator"]')
], Breadcrumb.prototype, "separatorSlot", 2);
__decorateClass([
  property()
], Breadcrumb.prototype, "label", 2);

export {
  Breadcrumb
};
//# sourceMappingURL=chunk.SCJ7IRLS.js.map
