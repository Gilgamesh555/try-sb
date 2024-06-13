import {
  breadcrumb_item_styles_default
} from "./chunk.FZL3UMKP.js";
import {
  HasSlotController
} from "./chunk.SIMXNE26.js";
import {
  UIKitElement
} from "./chunk.YCDYUGC2.js";
import {
  component_styles_default
} from "./chunk.2NT3B5WJ.js";
import {
  __decorateClass
} from "./chunk.DJOAQ4JU.js";

// src/components/breadcrumb-item/breadcrumb-item.component.ts
import { classMap } from "lit/directives/class-map.js";
import { html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";
import { property, query, state } from "lit/decorators.js";
var BreadcrumbItem = class extends UIKitElement {
  constructor() {
    super(...arguments);
    this.hasSlotController = new HasSlotController(this, "prefix", "suffix");
    this.isTextOverflowing = false;
    this.maxWidth = 0;
    this.rel = "noreferrer noopener";
    this.isActive = false;
  }
  connectedCallback() {
    super.connectedCallback();
    this.updateComplete.then(() => {
      this.resizeObserver.observe(this.labelContentSlot);
    });
  }
  updated(_changedProperties) {
    if (_changedProperties.has("isTextOverflowing")) {
      this.attachOverflowObserver();
    }
  }
  attachOverflowObserver() {
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
    }
    this.resizeObserver = new ResizeObserver(() => this.checkIfTextIsTruncated());
    this.updateComplete.then(() => {
      this.resizeObserver.observe(this.labelContentSlot);
    });
  }
  // This function checks if item width exceeds the max width if set
  checkIfTextIsTruncated() {
    if (this.labelContentSlot) {
      if (this.labelContentSlot.scrollWidth > this.labelContentSlot.clientWidth) {
        this.isTextOverflowing = true;
      } else {
        this.isTextOverflowing = false;
      }
    }
    return this.isTextOverflowing;
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.resizeObserver.disconnect();
  }
  // This function will return only the direct text nodes of the custom element, excluding slots.
  getTextContentExcludingSlots() {
    const nodes = Array.from(this.childNodes);
    const filteredTextContent = nodes.filter((node) => {
      var _a;
      return node.nodeType === Node.TEXT_NODE && ((_a = node.textContent) == null ? void 0 : _a.trim()) !== "";
    }).map((node) => {
      var _a;
      return (_a = node.textContent) == null ? void 0 : _a.trim();
    }).join(" ");
    return filteredTextContent;
  }
  render() {
    const isLink = this.href ? true : false;
    const textContent = this.getTextContentExcludingSlots();
    const content = this.isActive ? html`
          <span id="breadcrumb-item" part="label" class="breadcrumb-item__label">
            <slot></slot>
          </span>
        ` : isLink ? html`
            <a
              id="breadcrumb-item"
              part="label"
              class="breadcrumb-item__label breadcrumb-item__label--link"
              href="${this.href}"
              target="${ifDefined(this.target ? this.target : void 0)}"
              rel=${ifDefined(this.target ? this.rel : void 0)}
            >
              <slot></slot>
            </a>
          ` : html`
            <button
              id="breadcrumb-item"
              part="label"
              type="button"
              class="breadcrumb-item__label breadcrumb-item__label--button"
            >
              <slot></slot>
            </button>
          `;
    return html`
      <style>
        .breadcrumb-item__label {
          max-width: ${this.maxWidth > 0 ? `${this.maxWidth}px` : `100%`};
        }
      </style>
      <div
        part="base"
        class=${classMap({
      "breadcrumb-item": true,
      "breadcrumb-item--has-prefix": this.hasSlotController.test("prefix"),
      "breadcrumb-item--has-suffix": this.hasSlotController.test("suffix")
    })}
      >
        ${this.isTextOverflowing ? html` <koerber-tooltip hoist content=${ifDefined(textContent)}>${content}</koerber-tooltip> ` : html` ${content} `}

        <slot name="separator" part="separator" class="breadcrumb-item__separator" aria-hidden="true"></slot>
      </div>
    `;
  }
};
BreadcrumbItem.styles = [component_styles_default, breadcrumb_item_styles_default];
__decorateClass([
  state()
], BreadcrumbItem.prototype, "isTextOverflowing", 2);
__decorateClass([
  property({ type: Number, attribute: "max-width" })
], BreadcrumbItem.prototype, "maxWidth", 2);
__decorateClass([
  property()
], BreadcrumbItem.prototype, "href", 2);
__decorateClass([
  property()
], BreadcrumbItem.prototype, "target", 2);
__decorateClass([
  property()
], BreadcrumbItem.prototype, "rel", 2);
__decorateClass([
  property({ type: Boolean, attribute: "active" })
], BreadcrumbItem.prototype, "isActive", 2);
__decorateClass([
  query(".breadcrumb-item__label")
], BreadcrumbItem.prototype, "labelContentSlot", 2);

export {
  BreadcrumbItem
};
//# sourceMappingURL=chunk.ZN45RFDU.js.map
