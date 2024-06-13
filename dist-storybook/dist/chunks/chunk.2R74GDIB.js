import {
  include_styles_default
} from "./chunk.VEA6FQDA.js";
import {
  requestInclude
} from "./chunk.ZSX2OJOB.js";
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

// src/components/include/include.component.ts
import { html } from "lit";
import { property } from "lit/decorators.js";
var Include = class extends UIKitElement {
  constructor() {
    super(...arguments);
    this.mode = "cors";
    this.allowScripts = false;
  }
  executeScript(script) {
    const newScript = document.createElement("script");
    [...script.attributes].forEach((attr) => newScript.setAttribute(attr.name, attr.value));
    newScript.textContent = script.textContent;
    script.parentNode.replaceChild(newScript, script);
  }
  async handleSrcChange() {
    try {
      const src = this.src;
      const file = await requestInclude(src, this.mode);
      if (src !== this.src) {
        return;
      }
      if (!file.ok) {
        this.emit("koerber-error", { detail: { status: file.status } });
        return;
      }
      this.innerHTML = file.html;
      if (this.allowScripts) {
        [...this.querySelectorAll("script")].forEach((script) => this.executeScript(script));
      }
      this.emit("koerber-load");
    } catch (e) {
      this.emit("koerber-error", { detail: { status: -1 } });
    }
  }
  render() {
    return html`<slot></slot>`;
  }
};
Include.styles = [component_styles_default, include_styles_default];
__decorateClass([
  property()
], Include.prototype, "src", 2);
__decorateClass([
  property()
], Include.prototype, "mode", 2);
__decorateClass([
  property({ attribute: "allow-scripts", type: Boolean })
], Include.prototype, "allowScripts", 2);
__decorateClass([
  watch("src")
], Include.prototype, "handleSrcChange", 1);

export {
  Include
};
//# sourceMappingURL=chunk.2R74GDIB.js.map
