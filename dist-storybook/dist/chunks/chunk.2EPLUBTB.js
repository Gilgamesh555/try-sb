import {
  tag_styles_default
} from "./chunk.KISTGNVH.js";
import {
  IconButton
} from "./chunk.BVPLSUKH.js";
import {
  LocalizeController
} from "./chunk.75KWNL5E.js";
import {
  UIKitElement
} from "./chunk.YCDYUGC2.js";
import {
  component_styles_default
} from "./chunk.2NT3B5WJ.js";
import {
  __decorateClass
} from "./chunk.DJOAQ4JU.js";

// src/components/tag/tag.component.ts
import { classMap } from "lit/directives/class-map.js";
import { html } from "lit";
import { property } from "lit/decorators.js";
var Tag = class extends UIKitElement {
  constructor() {
    super(...arguments);
    this.localize = new LocalizeController(this);
    this.size = "medium";
    this.pill = false;
    this.removable = false;
  }
  handleRemoveClick() {
    this.emit("koerber-remove");
  }
  render() {
    return html`
      <span
        part="base"
        class=${classMap({
      tag: true,
      // Sizes
      "tag--small": this.size === "small",
      "tag--medium": this.size === "medium",
      "tag--large": this.size === "large",
      // Modifiers
      "tag--pill": this.pill,
      "tag--removable": this.removable
    })}
      >
        <slot part="content" class="tag__content"></slot>

        ${this.removable ? html`
              <koerber-icon-button
                part="remove-button"
                exportparts="base:remove-button__base"
                name="close"
                library="system"
                label=${this.localize.term("remove")}
                class="tag__remove"
                @click=${this.handleRemoveClick}
                tabindex="-1"
              ></koerber-icon-button>
            ` : ""}
      </span>
    `;
  }
};
Tag.styles = [component_styles_default, tag_styles_default];
Tag.dependencies = {
  "koerber-icon-button": IconButton
};
__decorateClass([
  property({ reflect: true })
], Tag.prototype, "size", 2);
__decorateClass([
  property({ type: Boolean, reflect: true })
], Tag.prototype, "pill", 2);
__decorateClass([
  property({ type: Boolean })
], Tag.prototype, "removable", 2);

export {
  Tag
};
//# sourceMappingURL=chunk.2EPLUBTB.js.map
