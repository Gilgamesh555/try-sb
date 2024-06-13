import {
  tooltip_default
} from "./chunk.KHG2WQTV.js";
import {
  SubmenuController
} from "./chunk.KFAFL4P4.js";
import {
  popup_default
} from "./chunk.7D65TN44.js";
import {
  menu_item_styles_default
} from "./chunk.ECRHQ42T.js";
import {
  icon_default
} from "./chunk.MYHM7LEU.js";
import {
  LocalizeController
} from "./chunk.75KWNL5E.js";
import {
  HasSlotController,
  getTextContent
} from "./chunk.SIMXNE26.js";
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

// src/components/menu-item/menu-item.component.ts
import { classMap } from "lit/directives/class-map.js";
import { html } from "lit";
import { property, query, state } from "lit/decorators.js";
var MenuItem = class extends UIKitElement {
  constructor() {
    super(...arguments);
    this.tooltipContent = "";
    this.isLabelOverflowing = false;
    this.type = "checkbox";
    this.selected = false;
    this.value = "";
    this.disabled = false;
    this.size = "medium";
    this.localize = new LocalizeController(this);
    this.hasSlotController = new HasSlotController(this, "submenu", "prefix", "suffix");
    this.submenuController = new SubmenuController(this, this.hasSlotController, this.localize);
    this.handleHostClick = (event) => {
      if (this.disabled) {
        event.preventDefault();
        event.stopImmediatePropagation();
      }
    };
    this.handleMouseOver = (event) => {
      this.focus();
      event.stopPropagation();
    };
  }
  connectedCallback() {
    super.connectedCallback();
    this.addEventListener("click", this.handleHostClick);
    this.addEventListener("mouseover", this.handleMouseOver);
    this.setAttribute("role", "menuitemcheckbox");
    this.setAttribute("aria-checked", this.selected ? "true" : "false");
  }
  firstUpdated() {
    this.checkTextOverflow();
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener("click", this.handleHostClick);
    this.removeEventListener("mouseover", this.handleMouseOver);
  }
  checkTextOverflow() {
    if (this.labelContentSlot.scrollHeight > this.labelContentSlot.clientHeight) {
      this.isLabelOverflowing = true;
      this.tooltipContent = this.getTextLabel();
    } else {
      this.isLabelOverflowing = false;
      this.tooltipContent = "";
    }
  }
  handleDefaultSlotChange() {
    const textLabel = this.getTextLabel();
    if (typeof this.cachedTextLabel === "undefined") {
      this.cachedTextLabel = textLabel;
      return;
    }
    if (textLabel !== this.cachedTextLabel) {
      this.cachedTextLabel = textLabel;
      this.emit("slotchange", { bubbles: true, composed: false, cancelable: false });
    }
  }
  handleCheckedChange() {
    this.setAttribute("aria-checked", this.selected ? "true" : "false");
  }
  handleDisabledChange() {
    this.setAttribute("aria-disabled", this.disabled ? "true" : "false");
  }
  /** Returns a text label based on the contents of the menu item's default slot. */
  getTextLabel() {
    return getTextContent(this.defaultSlot);
  }
  isSubmenu() {
    return this.hasSlotController.test("submenu");
  }
  render() {
    var _a;
    const isRtl = this.localize.dir() === "rtl";
    const isSubmenuExpanded = this.submenuController.isExpanded();
    return html`
      <div
        id="anchor"
        part="base"
        class=${classMap({
      "menu-item": true,
      "menu-item--rtl": isRtl,
      "menu-item--selected": this.selected,
      "menu-item--disabled": this.disabled,
      // 'menu-item--loading': this.loading,
      "menu-item--has-submenu": this.isSubmenu(),
      "menu-item--submenu-expanded": isSubmenuExpanded,
      [`menu-item--${this.size}`]: true
    })}
        ?aria-haspopup="${this.isSubmenu()}"
        ?aria-expanded="${isSubmenuExpanded ? true : false}"
      >
        ${this.hasSlotController.test("prefix") ? html`<slot name="prefix" part="prefix" class="menu-item__prefix"></slot>` : ""}
        ${this.isLabelOverflowing ? html`<koerber-tooltip
              class="menu-item__tooltip"
              placement="top"
              hoist
              content="${(_a = this.tooltipContent) != null ? _a : ""}"
            >
              <div><slot part="label" class="menu-item__label" @slotchange=${this.handleDefaultSlotChange}></slot></div>
            </koerber-tooltip>` : html`<slot part="label" class="menu-item__label" @slotchange=${this.handleDefaultSlotChange}></slot>`}
        ${this.hasSlotController.test("suffix") ? html`<slot name="suffix" part="suffix" class="menu-item__suffix"></slot>` : ""}
        ${this.isSubmenu() ? html`<span part="submenu-icon" class="menu-item__chevron">
              <koerber-icon name=${isRtl ? "chevron-left" : "chevron-right"} aria-hidden="true"></koerber-icon>
            </span>` : ""}
        ${this.submenuController.renderSubmenu()}
      </div>
    `;
  }
};
MenuItem.styles = [component_styles_default, menu_item_styles_default];
MenuItem.dependencies = {
  "koerber-icon": icon_default,
  "koerber-popup": popup_default,
  "koerber-tooltip": tooltip_default
};
__decorateClass([
  state()
], MenuItem.prototype, "isLabelOverflowing", 2);
__decorateClass([
  query("slot:not([name])")
], MenuItem.prototype, "defaultSlot", 2);
__decorateClass([
  query(".menu-item")
], MenuItem.prototype, "menuItem", 2);
__decorateClass([
  query(".menu-item__label")
], MenuItem.prototype, "labelContentSlot", 2);
__decorateClass([
  property()
], MenuItem.prototype, "type", 2);
__decorateClass([
  property({ type: Boolean, reflect: true })
], MenuItem.prototype, "selected", 2);
__decorateClass([
  property()
], MenuItem.prototype, "value", 2);
__decorateClass([
  property({ type: Boolean, reflect: true })
], MenuItem.prototype, "disabled", 2);
__decorateClass([
  property({ reflect: true })
], MenuItem.prototype, "size", 2);
__decorateClass([
  watch("selected")
], MenuItem.prototype, "handleCheckedChange", 1);
__decorateClass([
  watch("disabled")
], MenuItem.prototype, "handleDisabledChange", 1);

export {
  MenuItem
};
//# sourceMappingURL=chunk.TP3MBZ73.js.map
