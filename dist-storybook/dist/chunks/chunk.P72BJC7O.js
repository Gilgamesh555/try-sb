import {
  icon_styles_default
} from "./chunk.SG37N5QV.js";
import {
  getIconLibrary,
  unwatchIcon,
  watchIcon
} from "./chunk.WW2OJHWD.js";
import {
  requestIcon
} from "./chunk.IIAA7CBN.js";
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

// src/components/icon/icon.component.ts
import { html } from "lit";
import { property, state } from "lit/decorators.js";
import { unsafeSVG } from "lit/directives/unsafe-svg.js";
import { classMap } from "lit/directives/class-map.js";
var parser;
var Icon = class extends UIKitElement {
  constructor() {
    super(...arguments);
    this.svg = "";
    this.library = "default";
    this.size = "medium";
    this.title = "";
    this.label = "";
  }
  connectedCallback() {
    super.connectedCallback();
    watchIcon(this);
  }
  firstUpdated() {
    this.setIcon();
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    unwatchIcon(this);
  }
  getUrl() {
    const library = getIconLibrary(this.library);
    if (this.name && library) {
      return library.resolver(this.name);
    }
    return "";
  }
  handleLabelChange() {
    const hasLabel = typeof this.label === "string" && this.label.length > 0;
    if (hasLabel) {
      this.setAttribute("role", "img");
      this.setAttribute("aria-label", this.label);
      this.removeAttribute("aria-hidden");
    } else {
      this.removeAttribute("role");
      this.removeAttribute("aria-label");
      this.setAttribute("aria-hidden", "true");
    }
  }
  async setIcon() {
    var _a;
    const library = getIconLibrary(this.library);
    const url = this.getUrl();
    if (!parser) {
      parser = new DOMParser();
    }
    if (url) {
      try {
        const file = await requestIcon(url);
        if (url !== this.getUrl()) {
        } else if (file.ok) {
          const doc = parser.parseFromString(file.svg, "text/html");
          const svgEl = doc.body.querySelector("svg");
          svgEl == null ? void 0 : svgEl.setAttribute("fill", "currentColor");
          if (svgEl !== null) {
            svgEl.part.add("svg");
            (_a = library == null ? void 0 : library.mutator) == null ? void 0 : _a.call(library, svgEl);
            this.svg = svgEl.outerHTML;
            this.emit("koerber-load");
          } else {
            this.svg = "";
            this.emit("koerber-error");
          }
        } else {
          this.svg = "";
          this.emit("koerber-error");
        }
      } catch (e) {
        this.emit("koerber-error");
      }
    } else if (this.svg.length > 0) {
      this.svg = "";
    }
  }
  render() {
    return html`
      <div
        class=${classMap({
      icon: true,
      "icon--medium": this.size === "medium",
      "icon--large": this.size === "large"
    })}
        title=${this.title}
      >
        ${unsafeSVG(this.svg)}
      </div>
    `;
  }
};
Icon.styles = [component_styles_default, icon_styles_default];
__decorateClass([
  state()
], Icon.prototype, "svg", 2);
__decorateClass([
  state()
], Icon.prototype, "library", 2);
__decorateClass([
  property({ reflect: true })
], Icon.prototype, "name", 2);
__decorateClass([
  property({ reflect: true })
], Icon.prototype, "size", 2);
__decorateClass([
  property()
], Icon.prototype, "title", 2);
__decorateClass([
  property()
], Icon.prototype, "label", 2);
__decorateClass([
  watch("label")
], Icon.prototype, "handleLabelChange", 1);
__decorateClass([
  watch(["name", "library"])
], Icon.prototype, "setIcon", 1);

export {
  Icon
};
//# sourceMappingURL=chunk.P72BJC7O.js.map
