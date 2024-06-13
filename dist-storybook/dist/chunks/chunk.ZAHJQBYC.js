import {
  card_styles_default
} from "./chunk.QBCLCN7E.js";
import {
  HasSlotController
} from "./chunk.SIMXNE26.js";
import {
  UIKitElement
} from "./chunk.YCDYUGC2.js";
import {
  __decorateClass
} from "./chunk.DJOAQ4JU.js";

// src/components/card/card.component.ts
import { classMap } from "lit/directives/class-map.js";
import { html } from "lit";
import { query } from "lit/decorators.js";
var Card = class extends UIKitElement {
  constructor() {
    super(...arguments);
    this.hasSlotController = new HasSlotController(this, "footer", "header", "image");
  }
  render() {
    var _a;
    const defaultSlotAssignedNodes = (_a = this.defaultSlot) == null ? void 0 : _a.assignedNodes({ flatten: true });
    const defaultSlotHasContent = defaultSlotAssignedNodes == null ? void 0 : defaultSlotAssignedNodes.some((node) => {
      var _a2;
      return node.nodeType === Node.ELEMENT_NODE || node.nodeType === Node.TEXT_NODE && ((_a2 = node == null ? void 0 : node.textContent) == null ? void 0 : _a2.trim()) !== "";
    });
    return html`
      <div
        part="base"
        class=${classMap({
      card: true,
      "card--has-footer": this.hasSlotController.test("footer"),
      "card--has-image": this.hasSlotController.test("image"),
      "card--has-header": this.hasSlotController.test("header")
    })}
      >
        <slot name="image" part="image" class="card__image"></slot>
        <div class="card-content">
          <slot
            name="header"
            part="header"
            class="
              card__header: true"
          ></slot>
          <slot
            part="body"
            class=${classMap({
      card__body: true,
      "card__body--has-margin-bottom": this.hasSlotController.test("footer"),
      "card__body--has-margin-top": this.hasSlotController.test("header") && defaultSlotHasContent
    })}
          ></slot>
          <slot name="footer" part="footer" class="card__footer"></slot>
        </div>
      </div>
    `;
  }
};
Card.styles = card_styles_default;
__decorateClass([
  query("slot:not([name])")
], Card.prototype, "defaultSlot", 2);

export {
  Card
};
//# sourceMappingURL=chunk.ZAHJQBYC.js.map
