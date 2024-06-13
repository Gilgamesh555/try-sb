import {
  accordion_styles_default
} from "./chunk.BZRTKTJP.js";
import {
  animateTo,
  shimKeyframesHeightAuto,
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
  HasSlotController
} from "./chunk.SIMXNE26.js";
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

// src/components/accordion/accordion.component.ts
import { classMap } from "lit/directives/class-map.js";
import { html } from "lit";
import { property, query } from "lit/decorators.js";
var Accordion = class extends UIKitElement {
  constructor() {
    super(...arguments);
    this.localize = new LocalizeController(this);
    this.hasSlotController = new HasSlotController(this, "[default]", "prefix-content", "suffix-content");
    this.open = false;
    this.disabled = false;
    this.size = "medium";
    this.direction = "left";
  }
  firstUpdated() {
    this.body.hidden = !this.open;
    this.body.style.height = this.open ? "auto" : "0";
  }
  handleSummaryClick(event) {
    const target = event.target;
    const checkbox = target.closest("koerber-checkbox");
    if (checkbox) {
      return;
    }
    if (!this.disabled) {
      if (this.open) {
        this.hide();
      } else {
        this.show();
      }
      this.header.focus();
    }
  }
  handleSummaryKeyDown(event) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      if (this.open) {
        this.hide();
      } else {
        this.show();
      }
    }
    if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
      event.preventDefault();
      this.hide();
    }
    if (event.key === "ArrowDown" || event.key === "ArrowRight") {
      event.preventDefault();
      this.show();
    }
  }
  async handleOpenChange() {
    if (this.open) {
      const koerberShow = this.emit("koerber-show", { cancelable: true });
      if (koerberShow.defaultPrevented) {
        this.open = false;
        return;
      }
      await stopAnimations(this.body);
      this.body.hidden = false;
      const { keyframes, options } = getAnimation(this, "accordion.show", { dir: this.localize.dir() });
      await animateTo(this.body, shimKeyframesHeightAuto(keyframes, this.body.scrollHeight), options);
      this.body.style.height = "auto";
      this.emit("koerber-after-show");
    } else {
      const koerberHide = this.emit("koerber-hide", { cancelable: true });
      if (koerberHide.defaultPrevented) {
        this.open = true;
        return;
      }
      await stopAnimations(this.body);
      const { keyframes, options } = getAnimation(this, "accordion.hide", { dir: this.localize.dir() });
      await animateTo(this.body, shimKeyframesHeightAuto(keyframes, this.body.scrollHeight), options);
      this.body.hidden = true;
      this.body.style.height = "auto";
      this.emit("koerber-after-hide");
    }
  }
  /** Shows the accordion. */
  async show() {
    if (this.open || this.disabled) {
      return void 0;
    }
    this.open = true;
    return waitForEvent(this, "koerber-after-show");
  }
  /** Hides the accordion */
  async hide() {
    if (!this.open || this.disabled) {
      return void 0;
    }
    this.open = false;
    return waitForEvent(this, "koerber-after-hide");
  }
  render() {
    const isRtl = this.localize.dir() === "rtl";
    const summary_icon_part = html`
      <span part="summary-icon" class="accordion__summary-icon">
        <slot name="expand-icon">
          <koerber-icon library="system" name="chevron-down"></koerber-icon>
        </slot>
        <slot name="collapse-icon">
          <koerber-icon library="system" name="chevron-down"></koerber-icon>
        </slot>
      </span>
    `;
    return html`
      <div
        part="base"
        class=${classMap({
      accordion: true,
      "accordion--open": this.open,
      "accordion--disabled": this.disabled,
      "accordion--rtl": isRtl,
      [`accordion--${this.size}`]: true
    })}
      >
        <div
          part="header"
          id="header"
          class=${classMap({
      accordion__header: true,
      [`accordion__header--${this.size}`]: true
    })}
          role="button"
          aria-expanded=${this.open ? "true" : "false"}
          aria-controls="content"
          aria-disabled=${this.disabled ? "true" : "false"}
          aria-label="Expand/Collapse"
          tabindex=${this.disabled ? "-1" : "0"}
          @click=${this.handleSummaryClick}
          @keydown=${this.handleSummaryKeyDown}
        >
          ${this.direction === "left" ? summary_icon_part : ""}

          <slot name="prefix" part="prefix-side" class="accordion__title__prefix"></slot>

          <div part="body-summary" class="accordion__body-summary">
            <slot name="summary" part="summary" class="accordion__summary">${this.summary}</slot>
            <slot name="subtitle" part="subtitle" class="accordion__subtitle">${this.subtitle}</slot>
          </div>

          <slot name="suffix" part="suffix-side" class="accordion__title__suffix"></slot>

          ${this.direction === "right" ? summary_icon_part : ""}
        </div>

        <div
          class=${classMap({
      accordion__body: true,
      [`accordion__body--${this.size}`]: true
    })}
          role="region"
          aria-labelledby="header"
        >
          <slot name="prefix-content" part="prefix-content" class="accordion__body__prefix-content"></slot>
          <slot
            part="content"
            id="content"
            class=${classMap({
      accordion__content: true
    })}
          >
          </slot>
          ${this.hasSlotController.test("suffix-content") ? html`<div part="suffix-content" class="accordion__body__suffix-content">
                <slot name="suffix-content"></slot>
              </div>` : ""}
        </div>
      </div>
    `;
  }
};
Accordion.styles = [component_styles_default, accordion_styles_default];
Accordion.dependencies = { "koerber-icon": Icon };
__decorateClass([
  query(".accordion")
], Accordion.prototype, "accordion", 2);
__decorateClass([
  query(".accordion__header")
], Accordion.prototype, "header", 2);
__decorateClass([
  query(".accordion__body")
], Accordion.prototype, "body", 2);
__decorateClass([
  query(".accordion__expand-icon-slot")
], Accordion.prototype, "expandIconSlot", 2);
__decorateClass([
  property({ type: Boolean, reflect: true })
], Accordion.prototype, "open", 2);
__decorateClass([
  property()
], Accordion.prototype, "summary", 2);
__decorateClass([
  property()
], Accordion.prototype, "subtitle", 2);
__decorateClass([
  property({ type: Boolean, reflect: true })
], Accordion.prototype, "disabled", 2);
__decorateClass([
  property({ reflect: true })
], Accordion.prototype, "size", 2);
__decorateClass([
  property({ reflect: true })
], Accordion.prototype, "direction", 2);
__decorateClass([
  watch("open", { waitUntilFirstUpdate: true })
], Accordion.prototype, "handleOpenChange", 1);
setDefaultAnimation("accordion.show", {
  keyframes: [
    { height: "0", opacity: "0" },
    { height: "auto", opacity: "1" }
  ],
  options: { duration: 250, easing: "linear" }
});
setDefaultAnimation("accordion.hide", {
  keyframes: [
    { height: "auto", opacity: "1" },
    { height: "0", opacity: "0" }
  ],
  options: { duration: 250, easing: "linear" }
});

export {
  Accordion
};
//# sourceMappingURL=chunk.TI5MTETU.js.map
