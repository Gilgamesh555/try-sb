import {
  divider_styles_default
} from "./chunk.GQQLOL26.js";
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

// src/components/divider/divider.component.ts
import { property } from "lit/decorators.js";
var Divider = class extends UIKitElement {
  constructor() {
    super(...arguments);
    this.variant = "primary";
    this.vertical = false;
    this.width = 0;
  }
  connectedCallback() {
    super.connectedCallback();
    this.setAttribute("role", "separator");
  }
  handleVerticalChange() {
    this.setAttribute("aria-orientation", this.vertical ? "vertical" : "horizontal");
  }
  handleVariantChange() {
    const widthStyle = `--width : ${this.width > 0 ? this.width : 1}px`;
    this.setAttribute(
      "style",
      this.variant === "primary" ? `--color:var(--koerber-color-border); ${widthStyle}` : `--color:var(--koerber-color-border-secondary); ${widthStyle}`
    );
  }
  handleWidthChange() {
    const colorStyle = this.variant === "primary" ? "--color:var(--koerber-color-border); " : "--color:var(--koerber-color-border-secondary); ";
    this.setAttribute("style", colorStyle + `--width: ${this.width > 0 ? this.width : 1}px`);
  }
};
Divider.styles = [component_styles_default, divider_styles_default];
__decorateClass([
  property({ reflect: true })
], Divider.prototype, "variant", 2);
__decorateClass([
  property({ type: Boolean, reflect: true })
], Divider.prototype, "vertical", 2);
__decorateClass([
  property({ type: Number, reflect: true })
], Divider.prototype, "width", 2);
__decorateClass([
  watch("vertical")
], Divider.prototype, "handleVerticalChange", 1);
__decorateClass([
  watch("variant")
], Divider.prototype, "handleVariantChange", 1);
__decorateClass([
  watch("width")
], Divider.prototype, "handleWidthChange", 1);

export {
  Divider
};
//# sourceMappingURL=chunk.BM3ENIDZ.js.map
