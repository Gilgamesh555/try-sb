import {
  tooltip_styles_default
} from "./chunk.EJSCK53U.js";
import {
  Popup
} from "./chunk.B6R6WNOD.js";
import {
  animateTo,
  parseDuration,
  stopAnimations,
  waitForEvent
} from "./chunk.OUP7BSVP.js";
import {
  getAnimation,
  setDefaultAnimation
} from "./chunk.CIQI33YD.js";
import {
  LocalizeController
} from "./chunk.75KWNL5E.js";
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

// src/components/tooltip/tooltip.component.ts
import { classMap } from "lit/directives/class-map.js";
import { html } from "lit";
import { property, query } from "lit/decorators.js";
var Tooltip = class extends UIKitElement {
  constructor() {
    super();
    this.localize = new LocalizeController(this);
    /** The distance in pixels from which to offset the tooltip away from its target. */
    this.distance = 8;
    /** The distance in pixels from which to offset the tooltip along its target. */
    this.skidding = 0;
    /**
     * Controls how the tooltip is activated. Possible options include `click`, `hover`, `focus`, and `manual`. Multiple
     * options can be passed by separating them with a space. When manual is used, the tooltip must be activated
     * programmatically.
     */
    this.trigger = "hover focus";
    this.content = "";
    this.placement = "top";
    this.open = false;
    this.hoist = false;
    this.handleBlur = () => {
      if (this.hasTrigger("focus")) {
        this.hide();
      }
    };
    this.handleFocus = () => {
      if (this.hasTrigger("focus")) {
        this.show();
      }
    };
    this.handleDocumentKeyDown = (event) => {
      if (event.key === "Escape") {
        event.stopPropagation();
        this.hide();
      }
    };
    this.handleMouseOver = () => {
      if (this.hasTrigger("hover")) {
        const delay = parseDuration(getComputedStyle(this).getPropertyValue("--show-delay"));
        clearTimeout(this.hoverTimeout);
        this.hoverTimeout = window.setTimeout(() => this.show(), delay);
      }
    };
    this.handleMouseOut = () => {
      if (this.hasTrigger("hover")) {
        const delay = parseDuration(getComputedStyle(this).getPropertyValue("--hide-delay"));
        clearTimeout(this.hoverTimeout);
        this.hoverTimeout = window.setTimeout(() => this.hide(), delay);
      }
    };
    this.addEventListener("blur", this.handleBlur, true);
    this.addEventListener("focus", this.handleFocus, true);
    this.addEventListener("mouseover", this.handleMouseOver);
    this.addEventListener("mouseout", this.handleMouseOut);
  }
  disconnectedCallback() {
    document.removeEventListener("keydown", this.handleDocumentKeyDown);
  }
  firstUpdated() {
    this.body.hidden = !this.open;
    if (this.open) {
      this.popup.active = true;
      this.popup.reposition();
    }
  }
  hasTrigger(triggerType) {
    const triggers = this.trigger.split(" ");
    return triggers.includes(triggerType);
  }
  async handleOpenChange() {
    if (this.open) {
      this.emit("koerber-show");
      document.addEventListener("keydown", this.handleDocumentKeyDown);
      await stopAnimations(this.body);
      this.body.hidden = false;
      this.popup.active = true;
      const { keyframes, options } = getAnimation(this, "tooltip.show", { dir: this.localize.dir() });
      await animateTo(this.popup.popup, keyframes, options);
      this.popup.reposition();
      this.emit("koerber-after-show");
    } else {
      this.emit("koerber-hide");
      document.removeEventListener("keydown", this.handleDocumentKeyDown);
      await stopAnimations(this.body);
      const { keyframes, options } = getAnimation(this, "tooltip.hide", { dir: this.localize.dir() });
      await animateTo(this.popup.popup, keyframes, options);
      this.popup.active = false;
      this.body.hidden = true;
      this.emit("koerber-after-hide");
    }
  }
  async handleOptionsChange() {
    if (this.hasUpdated) {
      await this.updateComplete;
      this.popup.reposition();
    }
  }
  /** Shows the tooltip. */
  async show() {
    if (this.open) {
      return void 0;
    }
    this.open = true;
    return waitForEvent(this, "koerber-after-show");
  }
  /** Hides the tooltip */
  async hide() {
    if (!this.open) {
      return void 0;
    }
    this.open = false;
    return waitForEvent(this, "koerber-after-hide");
  }
  //
  // NOTE: Tooltip is a bit unique in that we're using aria-live instead of aria-labelledby to trick screen readers into
  // announcing the content. It works really well, but it violates an accessibility rule. We're also adding the
  // aria-describedby attribute to a slot, which is required by <koerber-popup> to correctly locate the first assigned
  // element, otherwise positioning is incorrect.
  //
  render() {
    return html`
      <koerber-popup
        part="base"
        exportparts="
          popup:base__popup,
          arrow:base__arrow
        "
        class=${classMap({
      tooltip: true,
      "tooltip--open": this.open
    })}
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        strategy=${this.hoist ? "fixed" : "absolute"}
        flip
        shift
        arrow
        hover-bridge
      >
        <slot slot="anchor" aria-describedby="tooltip"></slot>

        <slot
          name="content"
          part="body"
          id="tooltip"
          class="tooltip__body"
          role="tooltip"
          aria-live=${this.open ? "polite" : "off"}
        >
          ${this.content}
        </slot>
      </koerber-popup>
    `;
  }
};
Tooltip.styles = [component_styles_default, tooltip_styles_default];
Tooltip.dependencies = { "koerber-popup": Popup };
__decorateClass([
  query("slot:not([name])")
], Tooltip.prototype, "defaultSlot", 2);
__decorateClass([
  query(".tooltip__body")
], Tooltip.prototype, "body", 2);
__decorateClass([
  query("koerber-popup")
], Tooltip.prototype, "popup", 2);
__decorateClass([
  property({ type: String, attribute: "content" })
], Tooltip.prototype, "content", 2);
__decorateClass([
  property()
], Tooltip.prototype, "placement", 2);
__decorateClass([
  property({ type: Boolean, reflect: true })
], Tooltip.prototype, "open", 2);
__decorateClass([
  property({ type: Boolean })
], Tooltip.prototype, "hoist", 2);
__decorateClass([
  watch("open", { waitUntilFirstUpdate: true })
], Tooltip.prototype, "handleOpenChange", 1);
__decorateClass([
  watch(["content", "distance", "hoist", "placement", "skidding"])
], Tooltip.prototype, "handleOptionsChange", 1);
setDefaultAnimation("tooltip.show", {
  keyframes: [
    { opacity: 0, scale: 0.8 },
    { opacity: 1, scale: 1 }
  ],
  options: { duration: 150, easing: "ease" }
});
setDefaultAnimation("tooltip.hide", {
  keyframes: [
    { opacity: 1, scale: 1 },
    { opacity: 0, scale: 0.8 }
  ],
  options: { duration: 150, easing: "ease" }
});

export {
  Tooltip
};
//# sourceMappingURL=chunk.DCXL77BX.js.map
