import {
  tree_item_styles_default
} from "./chunk.MU6QSIIT.js";
import {
  Tooltip
} from "./chunk.DCXL77BX.js";
import {
  Checkbox
} from "./chunk.CSOSMLIW.js";
import {
  Spinner
} from "./chunk.7Y2JEYX6.js";
import {
  animateTo,
  shimKeyframesHeightAuto,
  stopAnimations
} from "./chunk.OUP7BSVP.js";
import {
  getAnimation,
  setDefaultAnimation
} from "./chunk.CIQI33YD.js";
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

// src/components/tree-item/tree-item.component.ts
import { classMap } from "lit/directives/class-map.js";
import { html } from "lit";
import { live } from "lit/directives/live.js";
import { property, query, state } from "lit/decorators.js";
import { when } from "lit/directives/when.js";
var _TreeItem = class _TreeItem extends UIKitElement {
  constructor() {
    super(...arguments);
    this.localize = new LocalizeController(this);
    this.tooltipContent = "";
    this.isTextOverflowing = false;
    this.indeterminate = false;
    this.isLeaf = false;
    this.loading = false;
    this.selectable = false;
    this.open = false;
    this.selected = false;
    this.disabled = false;
    this.lazy = false;
    this.size = "medium";
    /** Gets all the nested tree items in this node. */
    this.getChildrenItems = ({ includeDisabled = true } = {}) => {
      return this.childrenSlot ? [...this.childrenSlot.assignedElements({ flatten: true })].filter(
        (item) => _TreeItem.isTreeItem(item) && (includeDisabled || !item.disabled)
      ) : [];
    };
  }
  static isTreeItem(node) {
    return node instanceof Element && node.getAttribute("role") === "treeitem";
  }
  connectedCallback() {
    super.connectedCallback();
    this.setAttribute("role", "treeitem");
    this.setAttribute("tabindex", "-1");
    if (this.isNestedItem()) {
      this.slot = "children";
    }
    this.resizeObserver = new ResizeObserver(() => this.checkTextOverflow());
    this.updateComplete.then(() => {
      this.resizeObserver.observe(this.labelContentSlot);
    });
  }
  firstUpdated() {
    this.childrenContainer.hidden = !this.open;
    this.childrenContainer.style.height = this.open ? "auto" : "0";
    this.isLeaf = !this.lazy && this.getChildrenItems().length === 0;
    this.handleOpenChange();
    this.checkTextOverflow();
  }
  updated(_changedProperties) {
    if (_changedProperties.has("isTextOverflowing")) {
      this.attachOverflowObserver();
    }
  }
  async animateCollapse() {
    this.emit("koerber-collapse");
    await stopAnimations(this.childrenContainer);
    const { keyframes, options } = getAnimation(this, "tree-item.collapse", { dir: this.localize.dir() });
    await animateTo(
      this.childrenContainer,
      shimKeyframesHeightAuto(keyframes, this.childrenContainer.scrollHeight),
      options
    );
    this.childrenContainer.hidden = true;
    this.emit("koerber-after-collapse");
  }
  // Checks whether the item is nested into an item
  isNestedItem() {
    const parent = this.parentElement;
    return !!parent && _TreeItem.isTreeItem(parent);
  }
  handleChildrenSlotChange() {
    this.loading = false;
    this.isLeaf = !this.lazy && this.getChildrenItems().length === 0;
  }
  willUpdate(changedProperties) {
    if (changedProperties.has("selected") && !changedProperties.has("indeterminate")) {
      this.indeterminate = false;
    }
  }
  async animateExpand() {
    this.emit("koerber-expand");
    await stopAnimations(this.childrenContainer);
    this.childrenContainer.hidden = false;
    const { keyframes, options } = getAnimation(this, "tree-item.expand", { dir: this.localize.dir() });
    await animateTo(
      this.childrenContainer,
      shimKeyframesHeightAuto(keyframes, this.childrenContainer.scrollHeight),
      options
    );
    this.childrenContainer.style.height = "auto";
    this.emit("koerber-after-expand");
  }
  attachOverflowObserver() {
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
    }
    this.resizeObserver = new ResizeObserver(() => this.checkTextOverflow());
    this.updateComplete.then(() => {
      this.resizeObserver.observe(this.labelContentSlot);
    });
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.resizeObserver.disconnect();
  }
  checkTextOverflow() {
    requestAnimationFrame(() => {
      if (this.labelContentSlot.scrollHeight > this.labelContentSlot.clientHeight) {
        this.isTextOverflowing = true;
        this.tooltipContent = this.getTextContent();
      } else {
        this.isTextOverflowing = false;
        this.tooltipContent = "";
      }
    });
  }
  getTextContent() {
    const nodes = this.labelContentSlot.assignedNodes();
    let textContent = "";
    nodes.forEach((node) => {
      if (node.nodeType === Node.TEXT_NODE) {
        textContent += node.textContent;
      }
    });
    return textContent;
  }
  handleLoadingChange() {
    this.setAttribute("aria-busy", this.loading ? "true" : "false");
    if (!this.loading) {
      this.animateExpand();
    }
  }
  handleDisabledChange() {
    this.setAttribute("aria-disabled", this.disabled ? "true" : "false");
  }
  handleSelectedChange() {
    this.setAttribute("aria-selected", this.selected ? "true" : "false");
  }
  handleOpenChange() {
    if (!this.isLeaf) {
      this.setAttribute("aria-expanded", this.open ? "true" : "false");
    } else {
      this.removeAttribute("aria-expanded");
    }
  }
  handleExpandAnimation() {
    if (this.open) {
      if (this.lazy) {
        this.loading = true;
        this.emit("koerber-lazy-load");
      } else {
        this.animateExpand();
      }
    } else {
      this.animateCollapse();
    }
  }
  handleLazyChange() {
    this.emit("koerber-lazy-change");
  }
  render() {
    var _a;
    const isRtl = this.localize.dir() === "rtl";
    const showExpandButton = !this.loading && (!this.isLeaf || this.lazy);
    const treeItemContent = html` <div
      class="tree-item__item"
      part="
          item
          ${this.disabled ? "item--disabled" : ""}
          ${this.open ? "item--open" : ""}
          ${this.indeterminate ? "item--indeterminate" : ""}
          ${this.selected ? "item--selected" : ""}
        "
    >
      <div class="tree-item__indentation" part="indentation"></div>

      <div
        part="expand-button"
        class=${classMap({
      "tree-item__expand-button": true,
      "tree-item__expand-button--visible": showExpandButton
    })}
        aria-hidden="true"
      >
        ${when(this.loading, () => html` <koerber-spinner></koerber-spinner> `)}
        <slot class="tree-item__expand-icon-slot" name="expand-icon">
          <koerber-icon library="system" name=${isRtl ? "chevron-left" : "chevron-up"}></koerber-icon>
        </slot>
        <slot class="tree-item__expand-icon-slot" name="collapse-icon">
          <koerber-icon library="system" name=${isRtl ? "chevron-left" : "chevron-up"}></koerber-icon>
        </slot>
      </div>

      ${when(
      this.selectable,
      () => html` <koerber-checkbox
            part="checkbox"
            exportparts="
                  base:checkbox__base,
                  control:checkbox__control,
                  control--checked:checkbox__control--checked,
                  control--indeterminate:checkbox__control--indeterminate,
                  checked-icon:checkbox__checked-icon,
                  indeterminate-icon:checkbox__indeterminate-icon,
                  label:checkbox__label
                "
            class="tree-item__checkbox"
            title="select-checkbox"
            accessible-name="selection box"
            ?disabled="${this.disabled}"
            ?checked="${live(this.selected)}"
            ?indeterminate="${this.indeterminate}"
          ></koerber-checkbox>`
    )}

      <slot class="tree-item__support" part="support" name="support"></slot>

      <div class="tree-item__content" part="content">
        ${this.isTextOverflowing ? html`<koerber-tooltip
              class="tree-item__tooltip"
              placement="top"
              hoist
              content="${(_a = this.tooltipContent) != null ? _a : ""}"
            >
              <div><slot class="tree-item__label" part="label"></slot></div>
            </koerber-tooltip>` : html`<slot class="tree-item__label" part="label"></slot>`}
        <slot class="tree-item__hint" part="hint" name="hint"></slot>
      </div>

      <div class="tree-item__actions" part="actions">
        <slot class="tree-item__actions-slot" name="actions"></slot>
      </div>
    </div>`;
    return html`
      <div
        part="base"
        class="${classMap({
      "tree-item": true,
      "tree-item--open": this.open,
      "tree-item--selected": this.selected,
      "tree-item--disabled": this.disabled,
      "tree-item--leaf": this.isLeaf,
      "tree-item--has-expand-button": showExpandButton,
      "tree-item--rtl": this.localize.dir() === "rtl",
      [`tree-item--size-${this.size}`]: true
    })}"
      >
        ${treeItemContent}

        <div class="tree-item__children" part="children" role="group">
          <slot name="children" @slotchange="${this.handleChildrenSlotChange}"></slot>
        </div>
      </div>
    `;
  }
};
_TreeItem.styles = [component_styles_default, tree_item_styles_default];
_TreeItem.dependencies = {
  "koerber-checkbox": Checkbox,
  "koerber-icon": Icon,
  "koerber-spinner": Spinner,
  "koerber-tooltip": Tooltip
};
__decorateClass([
  state()
], _TreeItem.prototype, "isTextOverflowing", 2);
__decorateClass([
  state()
], _TreeItem.prototype, "indeterminate", 2);
__decorateClass([
  state()
], _TreeItem.prototype, "isLeaf", 2);
__decorateClass([
  state()
], _TreeItem.prototype, "loading", 2);
__decorateClass([
  state()
], _TreeItem.prototype, "selectable", 2);
__decorateClass([
  property({ type: Boolean, reflect: true })
], _TreeItem.prototype, "open", 2);
__decorateClass([
  property({ type: Boolean, reflect: true })
], _TreeItem.prototype, "selected", 2);
__decorateClass([
  property({ type: Boolean, reflect: true })
], _TreeItem.prototype, "disabled", 2);
__decorateClass([
  property({ type: Boolean, reflect: true })
], _TreeItem.prototype, "lazy", 2);
__decorateClass([
  property({ reflect: true })
], _TreeItem.prototype, "size", 2);
__decorateClass([
  query("slot:not([name])")
], _TreeItem.prototype, "defaultSlot", 2);
__decorateClass([
  query("slot[name=children]")
], _TreeItem.prototype, "childrenSlot", 2);
__decorateClass([
  query(".tree-item__item")
], _TreeItem.prototype, "itemElement", 2);
__decorateClass([
  query(".tree-item__children")
], _TreeItem.prototype, "childrenContainer", 2);
__decorateClass([
  query(".tree-item__expand-button slot")
], _TreeItem.prototype, "expandButtonSlot", 2);
__decorateClass([
  query(".tree-item__label")
], _TreeItem.prototype, "labelContentSlot", 2);
__decorateClass([
  watch("loading", { waitUntilFirstUpdate: true })
], _TreeItem.prototype, "handleLoadingChange", 1);
__decorateClass([
  watch("disabled")
], _TreeItem.prototype, "handleDisabledChange", 1);
__decorateClass([
  watch("selected")
], _TreeItem.prototype, "handleSelectedChange", 1);
__decorateClass([
  watch("open", { waitUntilFirstUpdate: true })
], _TreeItem.prototype, "handleOpenChange", 1);
__decorateClass([
  watch("open", { waitUntilFirstUpdate: true })
], _TreeItem.prototype, "handleExpandAnimation", 1);
__decorateClass([
  watch("lazy", { waitUntilFirstUpdate: true })
], _TreeItem.prototype, "handleLazyChange", 1);
var TreeItem = _TreeItem;
setDefaultAnimation("tree-item.expand", {
  keyframes: [
    { height: "0", opacity: "0", overflow: "hidden" },
    { height: "auto", opacity: "1", overflow: "hidden" }
  ],
  options: { duration: 250, easing: "cubic-bezier(0.4, 0.0, 0.2, 1)" }
});
setDefaultAnimation("tree-item.collapse", {
  keyframes: [
    { height: "auto", opacity: "1", overflow: "hidden" },
    { height: "0", opacity: "0", overflow: "hidden" }
  ],
  options: { duration: 200, easing: "cubic-bezier(0.4, 0.0, 0.2, 1)" }
});

export {
  TreeItem
};
//# sourceMappingURL=chunk.C5I4LVLR.js.map
