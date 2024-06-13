import {
  badge_styles_default
} from "./chunk.AUE2Y67B.js";
import {
  UIKitElement
} from "./chunk.YCDYUGC2.js";
import {
  component_styles_default
} from "./chunk.2NT3B5WJ.js";
import {
  __decorateClass
} from "./chunk.DJOAQ4JU.js";

// src/components/badge/badge.component.ts
import { classMap } from "lit/directives/class-map.js";
import { html } from "lit";
import { property } from "lit/decorators.js";
var Badge = class extends UIKitElement {
  constructor() {
    super(...arguments);
    this.size = "medium";
  }
  render() {
    return html`
      <span
        part="base"
        class=${classMap({
      badge: true,
      "badge--extra-small": this.size === "extra-small",
      "badge--small": this.size === "small",
      "badge--medium": this.size === "medium",
      "badge--large": this.size === "large"
    })}
        role="status"
      >
        ${this.size === "large" ? html`<slot part="label"></slot>` : ""}
      </span>
    `;
  }
};
Badge.styles = [component_styles_default, badge_styles_default];
__decorateClass([
  property({ reflect: true })
], Badge.prototype, "size", 2);

export {
  Badge
};
//# sourceMappingURL=chunk.SU72EIVH.js.map
