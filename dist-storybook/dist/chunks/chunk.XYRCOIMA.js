import {
  list_styles_default
} from "./chunk.GFOISXF3.js";
import {
  watch
} from "./chunk.H257LPKH.js";
import {
  UIKitElement
} from "./chunk.YCDYUGC2.js";
import {
  __decorateClass
} from "./chunk.DJOAQ4JU.js";

// src/components/list/list.component.ts
import { html } from "lit";
import { property, query } from "lit/decorators.js";
var List = class extends UIKitElement {
  constructor() {
    super(...arguments);
    this.size = "medium";
  }
  connectedCallback() {
    super.connectedCallback();
    this.setAttribute("role", "list");
  }
  getAllLists() {
    return [...this.querySelectorAll("koerber-list-item")];
  }
  async syncListElements() {
    const list_items = this.getAllLists();
    await Promise.all(
      // Sync the size for child list items
      list_items.map(async (list_item) => {
        await list_item.updateComplete;
        list_item.size = this.size;
      })
    );
  }
  handleSizeChange() {
    this.syncListElements();
  }
  render() {
    return html`
      <div part="base" class="list">
        <slot @slotchange=${this.syncListElements}></slot>
      </div>
    `;
  }
};
List.styles = list_styles_default;
__decorateClass([
  query("slot:not([name])")
], List.prototype, "defaultSlot", 2);
__decorateClass([
  property({ reflect: true })
], List.prototype, "size", 2);
__decorateClass([
  watch("size", { waitUntilFirstUpdate: true })
], List.prototype, "handleSizeChange", 1);

export {
  List
};
//# sourceMappingURL=chunk.XYRCOIMA.js.map
