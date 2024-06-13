import {
  Tag
} from "./chunk.2EPLUBTB.js";
import {
  search_styles_default
} from "./chunk.HTO2427C.js";
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

// src/components/search/search.component.ts
import { classMap } from "lit/directives/class-map.js";
import { html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";
import { live } from "lit/directives/live.js";
import { property, query, state } from "lit/decorators.js";
var Search = class extends UIKitElement {
  constructor() {
    super(...arguments);
    this.localize = new LocalizeController(this);
    this.hasFocus = false;
    this.selectedOptions = [];
    this.minLengthMessage = "";
    this.searchResults = 0;
    this.name = "";
    this.value = "";
    this.defaultValue = "";
    this.placeholder = "";
    this.size = "medium";
    this.loading = false;
    this.loadingMessage = "Disabled while loading";
    this.maxHeight = 0;
    this.minLength = 0;
    this.disabled = false;
    this.open = false;
    this.hoist = false;
    this.placement = "bottom";
    this.required = false;
    this.error = false;
    this.handleDocumentFocusIn = (event) => {
      const path = event.composedPath();
      if (this && !path.includes(this)) {
        this.hide();
      }
    };
    this.handleDocumentKeyDown = (event) => {
      if (event.key === "Escape" && this.open) {
        event.preventDefault();
        event.stopPropagation();
        this.hide();
        this.displayInput.focus({ preventScroll: true });
      }
      if (event.key === "Enter") {
        event.preventDefault();
        event.stopImmediatePropagation();
        if (!this.open) {
          this.show();
          return;
        }
        if (this.currentOption && !this.currentOption.disabled) {
          this.setSelectedOptions(this.currentOption);
          this.updateComplete.then(() => {
            this.emit("koerber-input");
            this.emit("koerber-change");
          });
          this.hide();
          this.displayInput.focus({ preventScroll: true });
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
      if (event.key.length === 1 || event.key === "Backspace") {
        if (event.metaKey || event.ctrlKey || event.altKey) {
          return;
        }
        if (!this.open) {
          if (event.key === "Backspace") {
            return;
          }
          this.show();
        }
        if (event.key === "Backspace" && this.value.length === 0) {
          this.hide();
        }
        this.setCurrentOption(this.currentOption);
        if (this.currentOption) {
          scrollIntoView(this.currentOption, this.listbox, "vertical", "auto");
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
  firstUpdated() {
    this.handleDefaultSlotChange();
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
  async handleAnimations(previousValue) {
    const { keyframes, options } = getAnimation(this, "search.icon.show", { dir: this.localize.dir() });
    if (previousValue.length === 0 && this.value.length > 0) {
      await animateTo(this.searchButton, keyframes, options);
    } else if (this.value.length === 0) {
      await animateTo(this.searchButton, keyframes, options);
    }
  }
  handleInput() {
    const previousValue = this.value;
    this.value = this.displayInput.value;
    this.handleAnimations(previousValue);
    if (this.value.length >= this.minLength) {
      this.emit("koerber-change");
    }
    this.emit("koerber-input");
  }
  handleChange() {
    const previousValue = this.value;
    this.value = this.displayInput.value;
    this.handleAnimations(previousValue);
    this.emit("koerber-change");
  }
  handleFocus() {
    this.hasFocus = true;
    this.emit("koerber-focus");
  }
  handleBlur() {
    this.hasFocus = false;
    this.emit("koerber-blur");
  }
  handleComboboxClick(event) {
    const path = event.composedPath();
    const isIconButton = path.some((el) => el instanceof Element && el.tagName.toLowerCase() === "koerber-icon-button");
    if (this.disabled || isIconButton || this.value.length === 0) {
      return;
    }
    event.preventDefault();
    if (!this.open) {
      this.show();
    }
    this.displayInput.focus({ preventScroll: true });
  }
  handleComboboxKeyDown(event) {
    event.stopPropagation();
    requestAnimationFrame(() => {
      this.handleDocumentKeyDown(event);
    });
  }
  handleClearClick(event) {
    event.stopPropagation();
    this.value = "";
    this.displayInput.focus({ preventScroll: true });
    this.hide();
    this.updateComplete.then(() => {
      this.emit("koerber-clear");
      this.emit("koerber-input");
      this.emit("koerber-change");
    });
  }
  handleClearMouseDown(event) {
    event.stopPropagation();
    event.preventDefault();
  }
  handleOptionClick(event) {
    const target = event.target;
    const option = target.closest("koerber-search-option");
    const oldValue = this.value;
    if (option && !option.disabled) {
      this.setSelectedOptions(option);
      this.updateComplete.then(() => this.displayInput.focus({ preventScroll: true }));
      if (this.value !== oldValue) {
        this.updateComplete.then(() => {
          this.emit("koerber-input");
          this.emit("koerber-change");
        });
      }
      this.hide();
      this.displayInput.focus({ preventScroll: true });
    }
  }
  handleDefaultSlotChange() {
    const allOptions = this.getAllOptions();
    this.searchResults = allOptions.length;
  }
  // Gets an array of all <koerber-search-option> elements
  getAllOptions() {
    return [...this.querySelectorAll("koerber-search-option")];
  }
  // Gets the first <koerber-search-option> element
  getFirstOption() {
    return this.querySelector("koerber-search-option");
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
    const newSelectedOptions = [option];
    allOptions.forEach((el) => el.selected = false);
    if (newSelectedOptions.length) {
      newSelectedOptions.forEach((el) => el.selected = true);
    }
    this.selectionChanged();
  }
  // This method must be called whenever the selection changes. It will update the selected options cache, the current
  // value, and the display value
  selectionChanged() {
    this.selectedOptions = this.getAllOptions().filter((el) => el.selected);
    this.value = this.selectedOptions[0].value;
  }
  async updateMessage() {
    await this.updateComplete;
    if (this.searchResults <= 0) {
      this.minLengthMessage = "No Results";
    }
    if (this.value.length < this.minLength) {
      this.minLengthMessage = `No Results - Minimum Characters Required: ${this.minLength}`;
    }
  }
  async syncOptions() {
    const options = this.getAllOptions();
    await Promise.all(
      // Sync the checked state and size
      options.map(async (option) => {
        option.size = this.size;
        await option.updateComplete;
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
    this.updateMessage();
  }
  handleMinLengthChange() {
    this.updateMessage();
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
      const { keyframes, options } = getAnimation(this, "search.show", { dir: this.localize.dir() });
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
      const { keyframes, options } = getAnimation(this, "search.hide", { dir: this.localize.dir() });
      await animateTo(this.popup.popup, keyframes, options);
      this.listbox.hidden = true;
      this.popup.active = false;
      this.emit("koerber-after-hide");
    }
  }
  /** Shows the listbox. */
  async show() {
    if (this.open || this.disabled || this.loading) {
      return void 0;
    }
    this.open = true;
    return waitForEvent(this, "koerber-after-show");
  }
  /** Hides the listbox. */
  async hide() {
    if (!this.open || this.disabled || this.loading) {
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
    const isResultEmpty = this.minLength > this.value.length || this.searchResults <= 0;
    const noResultHTML = html`
      <div class="search__listbox-min-length">
        <koerber-icon name="alert-circle"></koerber-icon>
        <span class="message">${this.minLengthMessage}</span>
      </div>
    `;
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
      search: true,
      "search--standard": true,
      "search--open": this.open && !this.loading,
      "search--disabled": this.disabled,
      "search--focused": this.hasFocus,
      "search--placeholder": this.value.length === 0,
      "search--top": this.placement === "top",
      "search--bottom": this.placement === "bottom",
      "search--small": this.size === "small",
      "search--medium": this.size === "medium",
      "search--large": this.size === "large",
      "search--loading": this.loading,
      "search--error": this.error
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
              class="search__combobox"
              slot="anchor"
              @keydown=${this.handleComboboxKeyDown}
              @click=${this.handleComboboxClick}
            >
              <slot part="prefix" name="prefix" class="search__prefix"></slot>

              <input
                part="display-input"
                class=${classMap({
      "search__display-input": true,
      "search--small": this.size === "small",
      "search--medium": this.size === "medium",
      "search--large": this.size === "large"
    })}
                type="text"
                placeholder=${this.placeholder}
                .disabled=${this.disabled || this.loading}
                .value=${live(this.value)}
                autocomplete="off"
                spellcheck="false"
                autocapitalize="off"
                aria-label=${ifDefined(this.accessibleName)}
                aria-description=${ifDefined(this.accessibleDescription)}
                aria-controls="listbox"
                aria-expanded=${this.open ? "true" : "false"}
                aria-haspopup="listbox"
                aria-labelledby="label"
                aria-disabled=${this.disabled || this.loading}
                role="combobox"
                tabindex="0"
                @input=${this.handleInput}
                @change=${this.handleChange}
                @focus=${this.handleFocus}
                @blur=${this.handleBlur}
              />

              <slot name="search-icon" part="search__icon" class="search__icon">
                ${this.value && this.value.length > 0 ? html`
                      <button
                        part="clear-button"
                        class="search__clear"
                        type="button"
                        aria-label=${this.localize.term("clearEntry")}
                        @mousedown=${this.handleClearMouseDown}
                        @click=${this.handleClearClick}
                        ?disabled=${this.disabled || this.loading}
                        tabindex="-1"
                      >
                        <koerber-icon name="close" library="system"></koerber-icon>
                      </button>
                    ` : html` <koerber-icon name="magnify"></koerber-icon> `}
              </slot>
            </div>

            <div
              id="listbox"
              role="listbox"
              aria-expanded=${this.open ? "true" : "false"}
              part="listbox"
              class="search__listbox"
              tabindex="-1"
              @mouseup=${this.handleOptionClick}
              @slotchange=${this.handleDefaultSlotChange}
            >
              ${isResultEmpty ? html` ${noResultHTML} ` : ""}

              <slot class="${classMap({ options: true, "options--hidden": isResultEmpty })}"> </slot>

              <slot></slot>
            </div>
          </koerber-popup>
        </div>
      </div>
    `;
  }
};
Search.styles = [component_styles_default, form_control_styles_default, search_styles_default];
Search.dependencies = {
  "koerber-icon": Icon,
  "koerber-popup": Popup,
  "koerber-tag": Tag,
  "koerber-spinner": Spinner
};
__decorateClass([
  query(".search")
], Search.prototype, "popup", 2);
__decorateClass([
  query(".search__display-input")
], Search.prototype, "displayInput", 2);
__decorateClass([
  query(".search__listbox")
], Search.prototype, "listbox", 2);
__decorateClass([
  query(".search__icon")
], Search.prototype, "searchButton", 2);
__decorateClass([
  state()
], Search.prototype, "hasFocus", 2);
__decorateClass([
  state()
], Search.prototype, "currentOption", 2);
__decorateClass([
  state()
], Search.prototype, "selectedOptions", 2);
__decorateClass([
  state()
], Search.prototype, "minLengthMessage", 2);
__decorateClass([
  state()
], Search.prototype, "searchResults", 2);
__decorateClass([
  property()
], Search.prototype, "name", 2);
__decorateClass([
  property({ reflect: true })
], Search.prototype, "value", 2);
__decorateClass([
  defaultValue()
], Search.prototype, "defaultValue", 2);
__decorateClass([
  property()
], Search.prototype, "placeholder", 2);
__decorateClass([
  property({ reflect: true })
], Search.prototype, "size", 2);
__decorateClass([
  property({ type: Boolean, reflect: true })
], Search.prototype, "loading", 2);
__decorateClass([
  property({ type: String })
], Search.prototype, "loadingMessage", 2);
__decorateClass([
  property({ attribute: "max-height", type: Number })
], Search.prototype, "maxHeight", 2);
__decorateClass([
  property({ type: Number, reflect: true, attribute: "min-length" })
], Search.prototype, "minLength", 2);
__decorateClass([
  property({ type: Boolean, reflect: true })
], Search.prototype, "disabled", 2);
__decorateClass([
  property({ type: Boolean, reflect: true })
], Search.prototype, "open", 2);
__decorateClass([
  property({ type: Boolean })
], Search.prototype, "hoist", 2);
__decorateClass([
  property({ reflect: true })
], Search.prototype, "placement", 2);
__decorateClass([
  property({ type: Boolean, reflect: true })
], Search.prototype, "required", 2);
__decorateClass([
  property({ type: Boolean })
], Search.prototype, "error", 2);
__decorateClass([
  property({ attribute: "accessible-name", reflect: true })
], Search.prototype, "accessibleName", 2);
__decorateClass([
  property({ attribute: "accessible-description", reflect: true })
], Search.prototype, "accessibleDescription", 2);
__decorateClass([
  watch("disabled", { waitUntilFirstUpdate: true })
], Search.prototype, "handleDisabledChange", 1);
__decorateClass([
  watch("value", { waitUntilFirstUpdate: true })
], Search.prototype, "handleValueChange", 1);
__decorateClass([
  watch("minLength")
], Search.prototype, "handleMinLengthChange", 1);
__decorateClass([
  watch("open", { waitUntilFirstUpdate: true })
], Search.prototype, "handleOpenChange", 1);
setDefaultAnimation("search.show", {
  keyframes: [
    { opacity: 0, scale: 0.9 },
    { opacity: 1, scale: 1 }
  ],
  options: { duration: 100, easing: "ease" }
});
setDefaultAnimation("search.hide", {
  keyframes: [
    { opacity: 1, scale: 1 },
    { opacity: 0, scale: 0.9 }
  ],
  options: { duration: 100, easing: "ease" }
});
setDefaultAnimation("search.icon.show", {
  keyframes: [
    { opacity: 0, scale: 0.9 },
    { opacity: 1, scale: 1 }
  ],
  options: { duration: 250, easing: "ease" }
});

export {
  Search
};
//# sourceMappingURL=chunk.SPLVGK44.js.map
