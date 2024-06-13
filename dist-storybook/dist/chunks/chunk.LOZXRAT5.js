import {
  chip_styles_default
} from "./chunk.DCOOXT7L.js";
import {
  Button
} from "./chunk.3EZ6DTUK.js";
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

// src/components/chip/chip.component.ts
import { classMap } from "lit/directives/class-map.js";
import { html } from "lit";
import { live } from "lit/directives/live.js";
import { property, query, state } from "lit/decorators.js";
var Chip = class extends UIKitElement {
  constructor() {
    super(...arguments);
    this.localize = new LocalizeController(this);
    this.hasFocus = false;
    this.size = "medium";
    this.variants = "info";
    this.removable = false;
    this.disabled = false;
    this.selected = false;
    this.prefixIcon = "";
    this.suffixIcon = "";
  }
  /** Methods */
  /** Simulates a click on the chip. */
  click() {
    this.chip.click();
  }
  /** Sets focus on the chip. */
  focus(options) {
    this.chip.focus(options);
  }
  /** Removes focus from the chip. */
  blur() {
    this.chip.blur();
  }
  /** Removes the chip. */
  delete() {
    this.handleDeleteClick();
  }
  handleDisabledChange() {
    this.setAttribute("aria-disabled", this.disabled ? "true" : "false");
  }
  handleSelectedChange() {
    this.setAttribute("aria-selected", this.selected ? "true" : "false");
  }
  /** Events */
  handleDeleteClick() {
    this.emit("koerber-remove");
  }
  handleClick() {
    this.emit("koerber-click");
  }
  handleFocus() {
    this.hasFocus = true;
    this.emit("koerber-focus");
  }
  handleBlur() {
    this.hasFocus = false;
    this.emit("koerber-blur");
  }
  render() {
    return html`
      <div part="container" class="chip--container">
        <span
          part="base"
          class=${classMap({
      chip: true,
      "chip--primary": this.variants === "primary",
      "chip--info": this.variants === "info",
      "chip--danger": this.variants === "danger",
      "chip--tertiary": this.variants === "tertiary",
      "chip--primary-outline": this.variants === "primary-outline",
      "chip--info-outline": this.variants === "info-outline",
      "chip--danger-outline": this.variants === "danger-outline",
      "chip--tertiary-outline": this.variants === "tertiary-outline",
      // Sizes
      "chip--small": this.size === "small",
      "chip--medium": this.size === "medium",
      "chip--large": this.size === "large",
      // Modifiers
      "chip--removable": this.removable || this.suffixIcon.length > 0,
      "chip--focused": this.hasFocus,
      "chip--disabled": this.disabled,
      "chip--selected": this.selected || this.prefixIcon.length > 0
    })}
          ?disabled=${this.disabled}
          ?checked="${live(this.selected)}"
          tabindex=${this.disabled ? "-1" : "0"}
          @click=${this.handleClick}
          @focus=${this.handleFocus}
          @blur=${this.handleBlur}
        >
          ${this.selected ? html` <koerber-icon
                part="selected-button"
                exportparts="base:remove-button__base"
                name="check-circle"
                size="medium"
                label=${"select"}
                class="chip__selected"
                tabindex="-1"
              ></koerber-icon>` : ""}
          ${this.prefixIcon ? html` <koerber-icon part="prefix-icon" class="chip__prefix" name=${this.prefixIcon}></koerber-icon>` : ""}

          <slot part="content" class="chip__label"></slot>

          ${this.suffixIcon ? html` <koerber-icon part="suffix-icon" class="chip__suffix" name=${this.suffixIcon}></koerber-icon>` : ""}
          ${this.removable ? html` <koerber-button
                variant="ghost"
                part="remove-button"
                exportparts="base:remove-button__base"
                size="medium"
                label=${this.localize.term("remove")}
                class="chip__remove"
                @click=${this.handleDeleteClick}
                @focus=${this.handleFocus}
                tabindex="-1"
                ?disabled=${this.disabled}
                ><koerber-icon name="close">close</koerber-icon></koerber-button
              >` : ""}

          <slot part="tooltip"></slot>
        </span>
      </div>
    `;
  }
};
Chip.styles = [component_styles_default, chip_styles_default];
Chip.dependencies = { "koerber-button": Button };
__decorateClass([
  query(".chip")
], Chip.prototype, "chip", 2);
__decorateClass([
  state()
], Chip.prototype, "hasFocus", 2);
__decorateClass([
  property({ reflect: true })
], Chip.prototype, "size", 2);
__decorateClass([
  property({ reflect: true })
], Chip.prototype, "variants", 2);
__decorateClass([
  property({ type: Boolean, reflect: true })
], Chip.prototype, "removable", 2);
__decorateClass([
  property({ type: Boolean, reflect: true })
], Chip.prototype, "disabled", 2);
__decorateClass([
  property({ type: Boolean, reflect: true })
], Chip.prototype, "selected", 2);
__decorateClass([
  property({ type: String, reflect: true, attribute: "prefix-icon" })
], Chip.prototype, "prefixIcon", 2);
__decorateClass([
  property({ type: String, reflect: true, attribute: "suffix-icon" })
], Chip.prototype, "suffixIcon", 2);
__decorateClass([
  watch("disabled")
], Chip.prototype, "handleDisabledChange", 1);
__decorateClass([
  watch("selected")
], Chip.prototype, "handleSelectedChange", 1);

export {
  Chip
};
//# sourceMappingURL=chunk.LOZXRAT5.js.map
