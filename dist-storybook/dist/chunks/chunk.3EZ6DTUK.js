import {
  Spinner
} from "./chunk.7Y2JEYX6.js";
import {
  button_styles_default
} from "./chunk.XOJKXQ5O.js";
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
  UIKitElement
} from "./chunk.YCDYUGC2.js";
import {
  component_styles_default
} from "./chunk.2NT3B5WJ.js";
import {
  __decorateClass
} from "./chunk.DJOAQ4JU.js";

// src/components/button/button.component.ts
import { classMap } from "lit/directives/class-map.js";
import { html } from "lit/static-html.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { property, query, state } from "lit/decorators.js";
var Button = class extends UIKitElement {
  constructor() {
    super(...arguments);
    this.hasSlotController = new HasSlotController(this, "[default]", "prefix", "suffix");
    this.localize = new LocalizeController(this);
    /**
     * The type of button. Note that the default value is `button` instead of `submit`, which is opposite of how native
     * `<button>` elements behave. When the type is `submit`, the button will submit the surrounding form.
     */
    this.type = "button";
    this.hasFocus = false;
    this.title = "";
    this.variant = "primary";
    this.size = "medium";
    this.caret = false;
    this.disabled = false;
    this.loading = false;
    this.name = "";
    this.value = "";
  }
  connectedCallback() {
    super.connectedCallback();
    this.handleHostClick = this.handleHostClick.bind(this);
    this.addEventListener("click", this.handleHostClick);
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener("click", this.handleHostClick);
  }
  handleBlur() {
    this.hasFocus = false;
    this.emit("koerber-blur");
  }
  handleFocus() {
    this.hasFocus = true;
    this.emit("koerber-focus");
  }
  handleClick() {
    setTimeout(() => {
      this.hasFocus = false;
      this.emit("koerber-focus");
    }, 100);
  }
  handleHostClick(event) {
    if (this.disabled || this.loading) {
      event.preventDefault();
      event.stopImmediatePropagation();
    }
  }
  /** Simulates a click on the button. */
  click() {
    this.button.click();
  }
  /** Sets focus on the button. */
  focus(options) {
    this.button.focus(options);
  }
  /** Removes focus from the button. */
  blur() {
    this.button.blur();
  }
  render() {
    let buttonContent;
    if (this.loading) {
      buttonContent = html`<koerber-spinner></koerber-spinner>`;
    } else {
      buttonContent = html`
        ${this.hasSlotController.test("prefix") ? html`<slot part="prefix" name="prefix" class="button__prefix"></slot>` : ""}
        ${this.hasSlotController.test("[default]") ? html`<slot part="label" class="button__label"></slot>` : ""}
        ${this.caret ? html`<koerber-icon size=${this.size} part="caret" class="button__caret" name="chevron-down"></koerber-icon>` : ""}
        ${this.hasSlotController.test("suffix") ? html`<slot part="suffix" name="suffix" class="button__suffix"></slot>` : ""}
      `;
    }
    return html`
      <button
        part="base"
        class=${classMap({
      button: true,
      "button--primary": this.variant === "primary",
      "button--secondary": this.variant === "secondary",
      "button--tertiary": this.variant === "tertiary",
      "button--ghost": this.variant === "ghost",
      "button--danger": this.variant === "danger",
      "button--secondary-danger": this.variant === "secondary-danger",
      "button--ghost-danger": this.variant === "ghost-danger",
      "button--small": this.size === "small",
      "button--medium": this.size === "medium",
      "button--large": this.size === "large",
      "button--caret": this.caret,
      "button--disabled": this.disabled,
      "button--focused": this.hasFocus,
      "button--loading": this.loading,
      "button--standard": this.variant !== "secondary",
      "button--rtl": this.localize.dir() === "rtl",
      "button--has-label": this.hasSlotController.test("[default]"),
      "button--has-prefix": this.hasSlotController.test("prefix"),
      "button--has-suffix": this.hasSlotController.test("suffix")
    })}
        ?disabled=${this.disabled}
        type=${ifDefined(this.type)}
        title=${this.title}
        name=${ifDefined(this.name)}
        value=${ifDefined(this.value)}
        role=${ifDefined("button")}
        aria-disabled=${this.disabled ? "true" : "false"}
        tabindex=${this.disabled ? "-1" : "0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
        aria-label=${this.name}
      >
        <slot name="badge" part="badge"></slot>
        ${buttonContent}
      </button>
    `;
  }
};
Button.styles = [component_styles_default, button_styles_default];
Button.dependencies = { "koerber-icon": Icon, "koerber-spinner": Spinner };
__decorateClass([
  query(".button")
], Button.prototype, "button", 2);
__decorateClass([
  state()
], Button.prototype, "hasFocus", 2);
__decorateClass([
  property()
], Button.prototype, "title", 2);
__decorateClass([
  property({ reflect: true })
], Button.prototype, "variant", 2);
__decorateClass([
  property({ reflect: true })
], Button.prototype, "size", 2);
__decorateClass([
  property({ type: Boolean, reflect: true })
], Button.prototype, "caret", 2);
__decorateClass([
  property({ type: Boolean, reflect: true })
], Button.prototype, "disabled", 2);
__decorateClass([
  property({ type: Boolean, reflect: true })
], Button.prototype, "loading", 2);
__decorateClass([
  property()
], Button.prototype, "name", 2);
__decorateClass([
  property()
], Button.prototype, "value", 2);

export {
  Button
};
//# sourceMappingURL=chunk.3EZ6DTUK.js.map
