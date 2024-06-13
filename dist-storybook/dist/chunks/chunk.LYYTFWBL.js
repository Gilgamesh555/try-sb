import {
  link_styles_default
} from "./chunk.YVUT3675.js";
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

// src/components/link/link.component.ts
import { classMap } from "lit/directives/class-map.js";
import { html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";
import { property, query, state } from "lit/decorators.js";
var Link = class extends UIKitElement {
  constructor() {
    super(...arguments);
    this.href = "";
    this.target = "_blank";
    this.rel = "noreferrer noopener";
    this.title = "";
    this.size = "medium";
    this.disabled = false;
    this.underline = false;
    this.showIcon = false;
    this.hasFocus = false;
    this.handleHostClick = (event) => {
      if (this.disabled) {
        event.preventDefault();
        event.stopImmediatePropagation();
      }
    };
  }
  handleBlur() {
    this.hasFocus = false;
    this.emit("koerber-blur");
  }
  handleFocus() {
    this.hasFocus = true;
    this.emit("koerber-focus");
  }
  connectedCallback() {
    super.connectedCallback();
    this.addEventListener("click", this.handleHostClick);
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener("click", this.handleHostClick);
  }
  handleDisabledChange() {
    this.setAttribute("aria-disabled", this.disabled ? "true" : "false");
  }
  /** Simulates a click on the link. */
  click() {
    this.link.click();
  }
  /** Sets focus on the link. */
  focus(options) {
    this.link.focus(options);
  }
  /** Removes focus from the link. */
  blur() {
    this.link.blur();
  }
  render() {
    let iconContent;
    if (this.showIcon) {
      iconContent = html` <div part="icon" class="link__icon" aria-hidden="true">
        <koerber-icon name="arrow-down" size=${this.size}></koerber-icon>
      </div>`;
    }
    return html`
      <a
        id="link"
        part="label"
        class=${classMap({
      link: true,
      "link--small": this.size === "small",
      "link--medium": this.size === "medium",
      "link--large": this.size === "large",
      "link--disabled": this.disabled,
      "link--underline": this.underline,
      "link--focused": this.hasFocus
    })}
        ?disabled=${this.disabled}
        role=${ifDefined("link")}
        aria-disabled=${this.disabled ? "true" : "false"}
        tabindex=${this.disabled ? "-1" : "0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.disabled ? void 0 : this.handleHostClick}
        href="${this.href}"
        target="${ifDefined(this.target ? this.target : void 0)}"
        rel=${ifDefined(this.target ? this.rel : void 0)}
        title=${this.title}
      >
        <slot></slot>
        ${iconContent}
      </a>
    `;
  }
};
Link.styles = [component_styles_default, link_styles_default];
Link.dependencies = {
  "koerber-icon": Icon
};
__decorateClass([
  property({ type: String, reflect: true })
], Link.prototype, "href", 2);
__decorateClass([
  property({ reflect: true })
], Link.prototype, "target", 2);
__decorateClass([
  property()
], Link.prototype, "rel", 2);
__decorateClass([
  property({ type: String, reflect: true })
], Link.prototype, "title", 2);
__decorateClass([
  property({ reflect: true })
], Link.prototype, "size", 2);
__decorateClass([
  property({ type: Boolean, reflect: true })
], Link.prototype, "disabled", 2);
__decorateClass([
  property({ type: Boolean, reflect: true })
], Link.prototype, "underline", 2);
__decorateClass([
  property({ type: Boolean, reflect: true })
], Link.prototype, "showIcon", 2);
__decorateClass([
  query(".link")
], Link.prototype, "link", 2);
__decorateClass([
  state()
], Link.prototype, "hasFocus", 2);
__decorateClass([
  watch("disabled")
], Link.prototype, "handleDisabledChange", 1);

export {
  Link
};
//# sourceMappingURL=chunk.LYYTFWBL.js.map
