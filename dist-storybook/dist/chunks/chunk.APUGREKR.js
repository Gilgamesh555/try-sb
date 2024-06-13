import {
  select_styles_default
} from "./chunk.TPC4T4Q2.js";
import {
  Tag
} from "./chunk.2EPLUBTB.js";
import {
  form_control_styles_default
} from "./chunk.Q5ZCBLEP.js";
import {
  Popup
} from "./chunk.B6R6WNOD.js";
import {
  defaultValue
} from "./chunk.CXIPJHGP.js";
import {
  scrollIntoView
} from "./chunk.KVUPQOGO.js";
import {
  Spinner
} from "./chunk.7Y2JEYX6.js";
import {
  animateTo,
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

// src/components/select/select.component.ts
import { classMap } from "lit/directives/class-map.js";
import { html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";
import { property, query, state } from "lit/decorators.js";
var Select = class extends UIKitElement {
  constructor() {
    super(...arguments);
    this.localize = new LocalizeController(this);
    this.typeToSelectString = "";
    this.hasFocus = false;
    this.displayLabel = "";
    this.selectedOptions = [];
    this.hasClearIcon = this.shouldShowClearIcon();
    this.name = "";
    this.value = "";
    this.defaultValue = "";
    this.placeholder = "";
    this.size = "medium";
    this.loading = false;
    this.loadingMessage = "Disabled while loading";
    this.multiple = false;
    this.maxHeight = 0;
    this.maxOptionsVisible = 3;
    this.disabled = false;
    this.clearable = false;
    this.open = false;
    this.hoist = false;
    this.placement = "bottom";
    this.required = false;
    this.allowSearch = false;
    this.error = false;
    this.handleDocumentFocusIn = (event) => {
      const path = event.composedPath();
      if (this && !path.includes(this)) {
        this.hide();
      }
    };
    this.handleDocumentKeyDown = (event) => {
      const target = event.target;
      const isClearButton = target.closest(".select__clear") !== null;
      const isIconButton = target.closest("koerber-icon-button") !== null;
      if (isClearButton || isIconButton) {
        return;
      }
      if (event.key === "Escape" && this.open) {
        event.preventDefault();
        event.stopPropagation();
        this.hide();
        this.displayInput.focus({ preventScroll: true });
      }
      if (event.key === "Enter" || event.key === " " && this.typeToSelectString === "") {
        event.preventDefault();
        event.stopImmediatePropagation();
        if (!this.open) {
          this.show();
          return;
        }
        if (this.currentOption && !this.currentOption.disabled) {
          if (this.multiple) {
            this.toggleOptionSelection(this.currentOption);
          } else {
            this.setSelectedOptions(this.currentOption);
          }
          this.typeToSelectString = "";
          this.updateComplete.then(() => {
            this.emit("koerber-input");
            this.emit("koerber-change");
          });
          if (!this.multiple) {
            this.hide();
            this.displayInput.focus({ preventScroll: true });
          }
        }
        return;
      }
      if (["ArrowUp", "ArrowDown", "Home", "End"].includes(event.key)) {
        const allOptions = this.getAllOptions();
        const currentIndex = allOptions.indexOf(this.currentOption);
        let newIndex = Math.max(0, currentIndex);
        event.preventDefault();
        if (!this.open) {
          this.show();
          if (this.currentOption) {
            return;
          }
        }
        if (event.key === "ArrowDown") {
          newIndex = currentIndex + 1;
          if (newIndex > allOptions.length - 1)
            newIndex = 0;
        } else if (event.key === "ArrowUp") {
          newIndex = currentIndex - 1;
          if (newIndex < 0)
            newIndex = allOptions.length - 1;
        } else if (event.key === "Home") {
          newIndex = 0;
        } else if (event.key === "End") {
          newIndex = allOptions.length - 1;
        }
        this.setCurrentOption(allOptions[newIndex]);
      }
      if (this.allowSearch) {
        if (event.key.length === 1 || event.key === "Backspace") {
          const allOptions = this.getAllOptions();
          if (event.metaKey || event.ctrlKey || event.altKey) {
            return;
          }
          if (!this.open) {
            if (event.key === "Backspace") {
              return;
            }
            this.show();
          }
          event.stopPropagation();
          event.preventDefault();
          clearTimeout(this.typeToSelectTimeout);
          this.typeToSelectTimeout = window.setTimeout(() => this.typeToSelectString = "", 1e4);
          if (event.key === "Backspace") {
            this.typeToSelectString = this.typeToSelectString.slice(0, -1);
          } else {
            const isShiftPressed = event.shiftKey;
            const charToAdd = isShiftPressed ? event.key : event.key.toLowerCase();
            this.typeToSelectString += charToAdd;
          }
          this.displayInput.value = this.typeToSelectString;
          this.displayInput.focus({ preventScroll: true });
          this.setCurrentOption(this.currentOption);
          this.hasClearIcon = this.shouldShowClearIcon();
          if (this.currentOption) {
            scrollIntoView(this.currentOption, this.listbox, "vertical", "auto");
          }
          this.emit("koerber-input");
          this.emit("koerber-change");
          for (const option of allOptions) {
            const label = option.getTextLabel().toLowerCase();
            if (label.startsWith(this.typeToSelectString.toLowerCase())) {
              this.setCurrentOption(option);
              break;
            }
          }
        }
      }
    };
    this.handleDocumentMouseDown = (event) => {
      const path = event.composedPath();
      if (this && !path.includes(this)) {
        this.hide();
      }
    };
  }
  connectedCallback() {
    super.connectedCallback();
    this.open = false;
  }
  addOpenListeners() {
    document.addEventListener("focusin", this.handleDocumentFocusIn);
    document.addEventListener("keydown", this.handleDocumentKeyDown);
    document.addEventListener("mousedown", this.handleDocumentMouseDown);
  }
  removeOpenListeners() {
    document.removeEventListener("focusin", this.handleDocumentFocusIn);
    document.removeEventListener("keydown", this.handleDocumentKeyDown);
    document.removeEventListener("mousedown", this.handleDocumentMouseDown);
  }
  handleFocus() {
    this.hasFocus = true;
    this.displayInput.setSelectionRange(0, 0);
    this.emit("koerber-focus");
  }
  handleBlur() {
    this.hasFocus = false;
    this.emit("koerber-blur");
  }
  shouldShowClearIcon() {
    return (this.isSearchable() || this.isClearable()) && !this.isDisabled();
  }
  isSearchable() {
    return this.allowSearch && this.typeToSelectString !== "" && !this.multiple;
  }
  isClearable() {
    return this.clearable && this.value.length > 0;
  }
  isDisabled() {
    return this.disabled;
  }
  handleComboboxMouseDown(event) {
    const path = event.composedPath();
    const isIconButton = path.some((el) => el instanceof Element && el.tagName.toLowerCase() === "koerber-icon-button");
    if (this.disabled || isIconButton) {
      return;
    }
    event.preventDefault();
    this.open = !this.open;
  }
  handleComboboxKeyDown(event) {
    event.stopPropagation();
    this.handleDocumentKeyDown(event);
  }
  handleClearClick(event) {
    event.stopPropagation();
    this.typeToSelectString = "";
    this.displayInput.value = this.typeToSelectString;
    if (this.value !== "") {
      this.setSelectedOptions([]);
      this.displayInput.focus({ preventScroll: true });
      this.updateComplete.then(() => {
        this.emit("koerber-clear");
        this.emit("koerber-input");
        this.emit("koerber-change");
      });
    }
    this.hasClearIcon = false;
  }
  handleClearMouseDown(event) {
    event.stopPropagation();
    event.preventDefault();
  }
  handleOptionClick(event) {
    const target = event.target;
    const option = target.closest("koerber-select-option");
    const isCheckbox = event.composedPath().some((el) => {
      var _a;
      return (_a = el == null ? void 0 : el.classList) == null ? void 0 : _a.contains("select-option__checkbox");
    });
    const oldValue = this.value;
    if (option && !option.disabled) {
      if (this.multiple) {
        if (isCheckbox) {
          option.addEventListener("koerber-change", () => this.selectionChanged());
        } else {
          this.toggleOptionSelection(option);
        }
      } else {
        this.setSelectedOptions(option);
      }
      this.typeToSelectString = "";
      this.updateComplete.then(() => this.displayInput.focus({ preventScroll: true }));
      if (this.value !== oldValue) {
        this.updateComplete.then(() => {
          this.emit("koerber-input");
          this.emit("koerber-change");
        });
      }
      if (!this.multiple) {
        this.hide();
        this.displayInput.focus({ preventScroll: true });
      }
    }
  }
  handleDefaultSlotChange() {
    const allOptions = this.getAllOptions();
    const value = Array.isArray(this.value) ? this.value : [this.value];
    const values = [];
    if (customElements.get("koerber-select-option")) {
      allOptions.forEach((option) => values.push(option.value));
      this.setSelectedOptions(allOptions.filter((el) => value.includes(el.value)));
    } else {
      customElements.whenDefined("koerber-select-option").then(() => this.handleDefaultSlotChange());
    }
  }
  handleTagRemove(event, option) {
    event.stopPropagation();
    if (!this.disabled) {
      this.toggleOptionSelection(option, false);
      this.updateComplete.then(() => {
        this.emit("koerber-input");
        this.emit("koerber-change");
      });
    }
  }
  // Gets an array of all <koerber-select-option> elements
  getAllOptions() {
    return [...this.querySelectorAll("koerber-select-option")];
  }
  // Gets the first <koerber-select-option> element
  getFirstOption() {
    return this.querySelector("koerber-select-option");
  }
  // Sets the current option, which is the option the user is currently interacting with (e.g. via keyboard). Only one
  // option may be "current" at a time.
  setCurrentOption(option) {
    const allOptions = this.getAllOptions();
    allOptions.forEach((el) => {
      el.current = false;
      el.tabIndex = -1;
    });
    if (option) {
      this.currentOption = option;
      option.current = true;
      option.tabIndex = 0;
    }
  }
  // Sets the selected option(s)
  setSelectedOptions(option) {
    const allOptions = this.getAllOptions();
    const newSelectedOptions = Array.isArray(option) ? option : [option];
    allOptions.forEach((el) => el.selected = false);
    if (newSelectedOptions.length) {
      newSelectedOptions.forEach((el) => el.selected = true);
    }
    this.selectionChanged();
  }
  // Toggles an option's selected state
  toggleOptionSelection(option, force) {
    if (force === true || force === false) {
      option.selected = force;
    } else {
      option.selected = !option.selected;
    }
    this.selectionChanged();
  }
  // This method must be called whenever the selection changes. It will update the selected options cache, the current
  // value, and the display value
  selectionChanged() {
    var _a, _b, _c, _d;
    this.selectedOptions = this.getAllOptions().filter((el) => el.selected);
    if (this.multiple) {
      this.value = this.selectedOptions.map((el) => el.value);
      if (this.placeholder && this.value.length === 0) {
        this.displayLabel = "";
      } else {
        this.displayLabel = this.localize.term("numOptionsSelected", this.selectedOptions.length);
      }
    } else {
      this.value = (_b = (_a = this.selectedOptions[0]) == null ? void 0 : _a.value) != null ? _b : "";
      this.displayLabel = (_d = (_c = this.selectedOptions[0]) == null ? void 0 : _c.getTextLabel()) != null ? _d : "";
    }
  }
  async syncOptions() {
    const options = this.getAllOptions();
    await Promise.all(
      // Sync the checked state and size
      options.map(async (option) => {
        await option.updateComplete;
        option.size = this.size;
      })
    );
  }
  handleSizeChange() {
    this.syncOptions();
  }
  handleDisabledChange() {
    if (this.disabled) {
      this.open = false;
      this.handleOpenChange();
    }
  }
  handleValueChange() {
    const allOptions = this.getAllOptions();
    const value = Array.isArray(this.value) ? this.value : [this.value];
    this.setSelectedOptions(allOptions.filter((el) => value.includes(el.value)));
    this.hasClearIcon = this.shouldShowClearIcon();
  }
  async handleOpenChange() {
    if (this.open && !this.disabled && !this.loading) {
      if (this.maxHeight > 0) {
        this.listbox.style.setProperty("max-height", `${this.maxHeight}px`);
      }
      this.handleSizeChange();
      this.setCurrentOption(this.selectedOptions[0] || this.getFirstOption());
      this.emit("koerber-show");
      this.addOpenListeners();
      await stopAnimations(this);
      this.listbox.hidden = false;
      this.popup.active = true;
      requestAnimationFrame(() => {
        this.setCurrentOption(this.currentOption);
      });
      const { keyframes, options } = getAnimation(this, "select.show", { dir: this.localize.dir() });
      await animateTo(this.popup.popup, keyframes, options);
      if (this.currentOption) {
        scrollIntoView(this.currentOption, this.listbox, "vertical", "auto");
      }
      this.emit("koerber-after-show");
      this.displayInput.focus({ preventScroll: true });
    } else {
      this.emit("koerber-hide");
      this.removeOpenListeners();
      await stopAnimations(this);
      const { keyframes, options } = getAnimation(this, "select.hide", { dir: this.localize.dir() });
      await animateTo(this.popup.popup, keyframes, options);
      this.listbox.hidden = true;
      this.popup.active = false;
      this.emit("koerber-after-hide");
    }
  }
  /** Shows the listbox. */
  async show() {
    if (this.open || this.disabled || this.loading) {
      this.open = false;
      return void 0;
    }
    this.open = true;
    return waitForEvent(this, "koerber-after-show");
  }
  /** Hides the listbox. */
  async hide() {
    if (!this.open || this.disabled || this.loading) {
      this.open = false;
      return void 0;
    }
    this.open = false;
    return waitForEvent(this, "koerber-after-hide");
  }
  /** Sets focus on the control. */
  focus(options) {
    this.displayInput.focus(options);
  }
  /** Removes focus from the control. */
  blur() {
    this.displayInput.blur();
  }
  render() {
    const isPlaceholderVisible = this.placeholder && this.value.length === 0;
    const hasError = this.error;
    return html`
      <div
        part="form-control"
        class=${classMap({
      "form-control": true,
      "form-control--small": this.size === "small",
      "form-control--medium": this.size === "medium",
      "form-control--large": this.size === "large",
      "form-control__label--disabled": this.disabled
    })}
      >
        <div part="form-control-input" class="form-control-input">
          <koerber-popup
            class=${classMap({
      select: true,
      "select--standard": true,
      "select--open": this.open && !this.loading,
      "select--disabled": this.disabled,
      "select--multiple": this.multiple,
      "select--focused": this.hasFocus,
      "select--placeholder-visible": isPlaceholderVisible,
      "select--top": this.placement === "top",
      "select--bottom": this.placement === "bottom",
      "select--small": this.size === "small",
      "select--medium": this.size === "medium",
      "select--large": this.size === "large",
      "select--loading": this.loading,
      "select--error": hasError
    })}
            placement=${this.placement}
            strategy=${this.hoist ? "fixed" : "absolute"}
            flip
            shift
            sync="width"
            auto-size="vertical"
            auto-size-padding="10"
          >
            <div
              part="combobox"
              class="select__combobox"
              slot="anchor"
              @keydown=${this.handleComboboxKeyDown}
              @mousedown=${this.handleComboboxMouseDown}
            >
              <slot part="prefix" name="prefix" class="select__prefix"></slot>

              <input
                part="display-input"
                class=${classMap({
      "select__display-input": true,
      "select--small": this.size === "small",
      "select--medium": this.size === "medium",
      "select--large": this.size === "large",
      "select--allowSearch": this.allowSearch
    })}
                type="text"
                placeholder=${this.placeholder}
                .disabled=${this.disabled || this.loading}
                .value=${this.displayLabel}
                autocomplete="off"
                spellcheck="false"
                autocapitalize="off"
                ?readonly=${!this.allowSearch}
                aria-label=${ifDefined(this.accessibleName)}
                aria-description=${ifDefined(this.accessibleDescription)}
                aria-controls="listbox"
                aria-expanded=${this.open ? "true" : "false"}
                aria-haspopup="listbox"
                aria-labelledby="label"
                aria-disabled=${this.disabled || this.loading}
                role="combobox"
                tabindex="0"
                @focus=${this.handleFocus}
                @blur=${this.handleBlur}
              />

              ${this.multiple ? html`
                    <div part="tags" class="select__tags">
                      ${this.selectedOptions.map((option, index) => {
      if (index < this.maxOptionsVisible || this.maxOptionsVisible <= 0) {
        return html`
                            <koerber-tag
                              part="tag"
                              exportparts="
                                base:tag__base,
                                content:tag__content,
                                remove-button:tag__remove-button,
                                remove-button__base:tag__remove-button__base
                              "
                              size=${this.size}
                              pill="true"
                              removable
                              @koerber-remove=${(event) => this.handleTagRemove(event, option)}
                            >
                              ${option.getTextLabel()}
                            </koerber-tag>
                          `;
      } else if (index === this.maxOptionsVisible) {
        return html`
                            <koerber-tag size=${this.size}> +${this.selectedOptions.length - index} </koerber-tag>
                          `;
      } else {
        return null;
      }
    })}
                    </div>
                  ` : ""}

              <input
                class="select__value-input"
                type="text"
                ?disabled=${this.disabled || this.loading}
                ?required=${this.required}
                .value=${Array.isArray(this.value) ? this.value.join(", ") : this.value}
                tabindex="-1"
                aria-hidden="true"
                @focus=${() => this.focus()}
              />

              ${this.loading && !this.error ? html`
                    <koerber-tooltip hoist content=${this.loadingMessage}>
                      <div>
                        <koerber-spinner></koerber-spinner>
                      </div>
                    </koerber-tooltip>
                  ` : ""}
              ${this.hasClearIcon ? html`
                    <button
                      part="clear-button"
                      class="select__clear"
                      type="button"
                      aria-label=${this.localize.term("clearEntry")}
                      @mousedown=${this.handleClearMouseDown}
                      @click=${this.handleClearClick}
                      tabindex="-1"
                    >
                      <slot name="clear-icon">
                        <koerber-icon name="close" library="system"></koerber-icon>
                      </slot>
                    </button>
                  ` : ""}
              ${hasError ? html`
                    <div class="select-error-icon-slot">
                      <koerber-icon class="select-error-icon" name="alert"></koerber-icon>
                    </div>
                  ` : ""}

              <slot name="expand-icon" part="expand-icon" class="select__expand-icon">
                <koerber-icon library="system" name="chevron-down"></koerber-icon>
              </slot>
            </div>

            <div
              id="listbox"
              role="listbox"
              aria-expanded=${this.open ? "true" : "false"}
              aria-multiselectable=${this.multiple ? "true" : "false"}
              part="listbox"
              class="select__listbox"
              tabindex="-1"
              @mouseup=${this.handleOptionClick}
              @slotchange=${this.handleDefaultSlotChange}
            >
              <slot></slot>
            </div>
          </koerber-popup>
        </div>
        ${this.loadingErrorMessage ? html`
              <slot
                name="error-message"
                part="form-control-error-message"
                id="error-message"
                class="form-control__error-message"
                aria-hidden=${this.loadingErrorMessage ? "false" : "true"}
              >
                ${this.loadingErrorMessage}
              </slot>
            ` : ""}
      </div>
    `;
  }
};
Select.styles = [component_styles_default, form_control_styles_default, select_styles_default];
Select.dependencies = {
  "koerber-icon": Icon,
  "koerber-popup": Popup,
  "koerber-tag": Tag,
  "koerber-spinner": Spinner
};
__decorateClass([
  query(".select")
], Select.prototype, "popup", 2);
__decorateClass([
  query(".select__combobox")
], Select.prototype, "combobox", 2);
__decorateClass([
  query(".select__display-input")
], Select.prototype, "displayInput", 2);
__decorateClass([
  query(".select__value-input")
], Select.prototype, "valueInput", 2);
__decorateClass([
  query(".select__listbox")
], Select.prototype, "listbox", 2);
__decorateClass([
  state()
], Select.prototype, "hasFocus", 2);
__decorateClass([
  state()
], Select.prototype, "displayLabel", 2);
__decorateClass([
  state()
], Select.prototype, "currentOption", 2);
__decorateClass([
  state()
], Select.prototype, "selectedOptions", 2);
__decorateClass([
  state()
], Select.prototype, "hasClearIcon", 2);
__decorateClass([
  property()
], Select.prototype, "name", 2);
__decorateClass([
  property({
    converter: {
      fromAttribute: (value) => value.split(" "),
      toAttribute: (value) => value.join(" ")
    }
  })
], Select.prototype, "value", 2);
__decorateClass([
  defaultValue()
], Select.prototype, "defaultValue", 2);
__decorateClass([
  property()
], Select.prototype, "placeholder", 2);
__decorateClass([
  property({ reflect: true })
], Select.prototype, "size", 2);
__decorateClass([
  property({ type: Boolean })
], Select.prototype, "loading", 2);
__decorateClass([
  property({ type: String })
], Select.prototype, "loadingMessage", 2);
__decorateClass([
  property({ type: Boolean, reflect: true })
], Select.prototype, "multiple", 2);
__decorateClass([
  property({ attribute: "max-height", type: Number })
], Select.prototype, "maxHeight", 2);
__decorateClass([
  property({ attribute: "max-options-visible", type: Number })
], Select.prototype, "maxOptionsVisible", 2);
__decorateClass([
  property({ type: Boolean, reflect: true })
], Select.prototype, "disabled", 2);
__decorateClass([
  property({ type: Boolean })
], Select.prototype, "clearable", 2);
__decorateClass([
  property({ type: Boolean, reflect: true })
], Select.prototype, "open", 2);
__decorateClass([
  property({ type: Boolean })
], Select.prototype, "hoist", 2);
__decorateClass([
  property({ reflect: true })
], Select.prototype, "placement", 2);
__decorateClass([
  property({ type: Boolean, reflect: true })
], Select.prototype, "required", 2);
__decorateClass([
  property({ type: Boolean })
], Select.prototype, "allowSearch", 2);
__decorateClass([
  property({ type: Boolean })
], Select.prototype, "error", 2);
__decorateClass([
  property({ attribute: "loading-error-message" })
], Select.prototype, "loadingErrorMessage", 2);
__decorateClass([
  property({ attribute: "accessible-name", reflect: true })
], Select.prototype, "accessibleName", 2);
__decorateClass([
  property({ attribute: "accessible-description", reflect: true })
], Select.prototype, "accessibleDescription", 2);
__decorateClass([
  watch("disabled", { waitUntilFirstUpdate: true })
], Select.prototype, "handleDisabledChange", 1);
__decorateClass([
  watch("value", { waitUntilFirstUpdate: true })
], Select.prototype, "handleValueChange", 1);
__decorateClass([
  watch("open", { waitUntilFirstUpdate: true })
], Select.prototype, "handleOpenChange", 1);
setDefaultAnimation("select.show", {
  keyframes: [
    { opacity: 0, scale: 0.9 },
    { opacity: 1, scale: 1 }
  ],
  options: { duration: 100, easing: "ease" }
});
setDefaultAnimation("select.hide", {
  keyframes: [
    { opacity: 1, scale: 1 },
    { opacity: 0, scale: 0.9 }
  ],
  options: { duration: 100, easing: "ease" }
});

export {
  Select
};
//# sourceMappingURL=chunk.APUGREKR.js.map
