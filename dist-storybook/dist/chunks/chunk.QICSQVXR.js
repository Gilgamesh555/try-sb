import {
  select_option_styles_default
} from "./chunk.M2JUVWWL.js";
import {
  Checkbox
} from "./chunk.CSOSMLIW.js";
import {
  LocalizeController
} from "./chunk.75KWNL5E.js";
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

// src/components/select-option/select-option.component.ts
import { classMap } from "lit/directives/class-map.js";
import { html } from "lit";
import { property, query, state } from "lit/decorators.js";
var SelectOption = class extends UIKitElement {
  constructor() {
    super(...arguments);
    // @ts-expect-error - Controller is currently unused
    this.localize = new LocalizeController(this);
    this.current = false;
    this.selected = false;
    this.hasHover = false;
    this.value = "";
    this.disabled = false;
    this.checkbox = false;
    this.size = "medium";
  }
  connectedCallback() {
    super.connectedCallback();
    this.setAttribute("role", "option");
    this.setAttribute("aria-selected", "false");
  }
  handleDefaultSlotChange() {
    const textLabel = this.getTextLabel();
    if (typeof this.cachedTextLabel === "undefined") {
      this.cachedTextLabel = textLabel;
      return;
    }
    if (textLabel !== this.cachedTextLabel) {
      this.cachedTextLabel = textLabel;
      this.emit("slotchange", { bubbles: true, composed: false, cancelable: false });
    }
  }
  handleMouseEnter() {
    this.hasHover = true;
    this.current = true;
  }
  handleMouseLeave() {
    this.hasHover = false;
    this.current = false;
  }
  handleDisabledChange() {
    this.setAttribute("aria-disabled", this.disabled ? "true" : "false");
  }
  handleSelectedChange() {
    this.setAttribute("aria-selected", this.selected ? "true" : "false");
  }
  handleValueChange() {
    if (typeof this.value !== "string") {
      this.value = String(this.value);
    }
    if (this.value.includes(" ")) {
      console.error(`Option values cannot include a space. All spaces have been replaced with underscores.`, this);
      this.value = this.value.replace(/ /g, "_");
    }
  }
  // We are binding the click event to the options selected value because the first click
  // is not handled correctly as the checkbox does not have focus initially
  handleCheckboxClick(event) {
    this.selected = !this.selected;
    this.emit("koerber-change");
    event.preventDefault();
  }
  /** Returns a plain text label based on the option's content. */
  getTextLabel() {
    var _a;
    return ((_a = this.textContent) != null ? _a : "").trim();
  }
  render() {
    return html`
      <div
        part="base"
        class=${classMap({
      "select-option": true,
      "select-option--current": this.current,
      "select-option--disabled": this.disabled,
      "select-option--selected": this.selected,
      "select-option--hover": this.hasHover,
      "select-option--small": this.size === "small",
      "select-option--medium": this.size === "medium",
      "select-option--large": this.size === "large"
    })}
        @mouseenter=${this.handleMouseEnter}
        @mouseleave=${this.handleMouseLeave}
      >
        ${this.checkbox ? html` <koerber-checkbox
              class=${classMap({
      "select-option__checkbox": true,
      "checkbox--small": this.size === "small",
      "checkbox--medium": this.size === "medium",
      "checkbox--large": this.size === "large"
    })}
              @click=${this.handleCheckboxClick}
              ?checked=${this.selected}
            >
            </koerber-checkbox>` : ""}
        <slot part="prefix" name="prefix" class="select-option__prefix"></slot>
        <slot
          part="label"
          class=${classMap({
      "select-option__label": true,
      "select-option-label--small": this.size === "small",
      "select-option-label--medium": this.size === "medium",
      "select-option-label--large": this.size === "large"
    })}
          @slotchange=${this.handleDefaultSlotChange}
        >
        </slot>
        <slot part="suffix" name="suffix" class="select-option__suffix"></slot>
        ${this.checkbox ? "" : html` <koerber-icon
              part="checked-icon"
              class=${classMap({
      "select-option__check": true,
      "icon--small": this.size === "small",
      "icon--medium": this.size === "medium",
      "icon--large": this.size === "large"
    })}
              name="check"
              size=${this.size}
              library="system"
              aria-hidden="true"
            >
            </koerber-icon>`}
      </div>
    `;
  }
};
SelectOption.styles = [component_styles_default, select_option_styles_default];
SelectOption.dependencies = {
  "koerber-icon": Icon,
  "koerber-checkbox": Checkbox
};
__decorateClass([
  query(".select-option__label")
], SelectOption.prototype, "defaultSlot", 2);
__decorateClass([
  state()
], SelectOption.prototype, "current", 2);
__decorateClass([
  state()
], SelectOption.prototype, "selected", 2);
__decorateClass([
  state()
], SelectOption.prototype, "hasHover", 2);
__decorateClass([
  property({ reflect: true })
], SelectOption.prototype, "value", 2);
__decorateClass([
  property({ type: Boolean, reflect: true })
], SelectOption.prototype, "disabled", 2);
__decorateClass([
  property({ type: Boolean, reflect: true })
], SelectOption.prototype, "checkbox", 2);
__decorateClass([
  property({ reflect: true })
], SelectOption.prototype, "size", 2);
__decorateClass([
  watch("disabled")
], SelectOption.prototype, "handleDisabledChange", 1);
__decorateClass([
  watch("selected")
], SelectOption.prototype, "handleSelectedChange", 1);
__decorateClass([
  watch("value")
], SelectOption.prototype, "handleValueChange", 1);

export {
  SelectOption
};
//# sourceMappingURL=chunk.QICSQVXR.js.map
