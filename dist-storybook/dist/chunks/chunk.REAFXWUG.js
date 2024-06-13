import {
  search_option_styles_default
} from "./chunk.6CXQPVO6.js";
import {
  LocalizeController
} from "./chunk.75KWNL5E.js";
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

// src/components/search-option/search-option.component.ts
import { classMap } from "lit/directives/class-map.js";
import { html } from "lit";
import { property, query, state } from "lit/decorators.js";
var SearchOption = class extends UIKitElement {
  constructor() {
    super(...arguments);
    // @ts-expect-error - Controller is currently unused
    this.localize = new LocalizeController(this);
    this.current = false;
    this.selected = false;
    this.hasHover = false;
    this.value = "";
    this.disabled = false;
    this.size = "medium";
  }
  connectedCallback() {
    super.connectedCallback();
    this.setAttribute("role", "option");
    this.setAttribute("aria-selected", "false");
  }
  handleMouseEnter() {
    this.hasHover = true;
  }
  handleMouseLeave() {
    this.hasHover = false;
  }
  handleDisabledChange() {
    this.setAttribute("aria-disabled", this.disabled ? "true" : "false");
  }
  handleSelectedChange() {
    this.setAttribute("aria-selected", this.selected ? "true" : "false");
  }
  handleValueChange() {
    if (typeof this.value !== "string") {
      this.value = String(this.value);
    }
    if (this.value.includes(" ")) {
      console.warn(`search-option values preferably should not include spaces.`, this);
    }
  }
  /** Returns a plain text label based on the search-option's content. */
  getTextLabel() {
    const nodes = this.childNodes;
    let label = "";
    [...nodes].forEach((node) => {
      if (node.nodeType === Node.ELEMENT_NODE) {
        if (!node.hasAttribute("slot")) {
          label += node.textContent;
        }
      }
      if (node.nodeType === Node.TEXT_NODE) {
        label += node.textContent;
      }
    });
    return label.trim();
  }
  render() {
    return html`
      <div
        part="base"
        class=${classMap({
      "search-option": true,
      "search-option--current": this.current,
      "search-option--disabled": this.disabled,
      "search-option--selected": this.selected,
      "search-option--hover": this.hasHover,
      [`search-option--${this.size}`]: true
    })}
        @mouseenter=${this.handleMouseEnter}
        @mouseleave=${this.handleMouseLeave}
      >
        <!-- Hide prefix slot instead of removing it entirely -->
        <!-- <slot part="prefix" name="prefix" class="search-option__prefix"></slot> -->
        <span part="label" class="search-option__label">${this.value}</span>
        <slot part="suffix" name="suffix" class="search-option__suffix"></slot>
      </div>
    `;
  }
};
SearchOption.styles = [component_styles_default, search_option_styles_default];
__decorateClass([
  query(".search-option__label")
], SearchOption.prototype, "defaultSlot", 2);
__decorateClass([
  state()
], SearchOption.prototype, "current", 2);
__decorateClass([
  state()
], SearchOption.prototype, "selected", 2);
__decorateClass([
  state()
], SearchOption.prototype, "hasHover", 2);
__decorateClass([
  property({ reflect: true })
], SearchOption.prototype, "value", 2);
__decorateClass([
  property({ type: Boolean, reflect: true })
], SearchOption.prototype, "disabled", 2);
__decorateClass([
  property({ reflect: true })
], SearchOption.prototype, "size", 2);
__decorateClass([
  watch("disabled")
], SearchOption.prototype, "handleDisabledChange", 1);
__decorateClass([
  watch("selected")
], SearchOption.prototype, "handleSelectedChange", 1);
__decorateClass([
  watch("value")
], SearchOption.prototype, "handleValueChange", 1);

export {
  SearchOption
};
//# sourceMappingURL=chunk.REAFXWUG.js.map
