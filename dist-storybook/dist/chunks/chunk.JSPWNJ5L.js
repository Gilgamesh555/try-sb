import {
  radio_group_styles_default
} from "./chunk.YW7RMRYI.js";
import {
  form_control_styles_default
} from "./chunk.Q5ZCBLEP.js";
import {
  ButtonGroup
} from "./chunk.CSOPA4B2.js";
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

// src/components/radio-group/radio-group.component.ts
import { classMap } from "lit/directives/class-map.js";
import { html } from "lit";
import { property, query, state } from "lit/decorators.js";
var RadioGroup = class extends UIKitElement {
  constructor() {
    super(...arguments);
    this.hasButtonGroup = false;
    this.defaultValue = "";
    this.name = "option";
    this.value = "";
    this.size = "medium";
    this.required = false;
    this.horizontal = false;
    this.disabled = false;
    this.error = false;
  }
  connectedCallback() {
    super.connectedCallback();
    this.defaultValue = this.value;
  }
  getAllRadios() {
    return [...this.querySelectorAll("koerber-radio, koerber-radio-button")];
  }
  handleRadioClick(event) {
    const target = event.target.closest("koerber-radio, koerber-radio-button");
    const radios = this.getAllRadios();
    const oldValue = this.value;
    if (target.disabled) {
      return;
    }
    this.value = target.value;
    radios.forEach((radio) => radio.checked = radio === target);
    if (this.value !== oldValue) {
      this.emit("koerber-change");
      this.emit("koerber-input");
    }
  }
  handleKeyDown(event) {
    var _a;
    if (!["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", " "].includes(event.key)) {
      return;
    }
    const radios = this.getAllRadios().filter((radio) => !radio.disabled);
    const checkedRadio = (_a = radios.find((radio) => radio.checked)) != null ? _a : radios[0];
    const incr = event.key === " " ? 0 : ["ArrowUp", "ArrowLeft"].includes(event.key) ? -1 : 1;
    const oldValue = this.value;
    let index = radios.indexOf(checkedRadio) + incr;
    if (index < 0) {
      index = radios.length - 1;
    }
    if (index > radios.length - 1) {
      index = 0;
    }
    this.getAllRadios().forEach((radio) => {
      radio.checked = false;
      if (!this.hasButtonGroup) {
        radio.tabIndex = -1;
      }
    });
    this.value = radios[index].value;
    radios[index].checked = true;
    if (!this.hasButtonGroup) {
      radios[index].tabIndex = 0;
      radios[index].focus();
    } else {
      radios[index].shadowRoot.querySelector("button").focus();
    }
    if (this.value !== oldValue) {
      this.emit("koerber-change");
      this.emit("koerber-input");
    }
    event.preventDefault();
  }
  async syncRadioElements() {
    var _a, _b;
    const radios = this.getAllRadios();
    await Promise.all(
      // Sync the checked state and size
      radios.map(async (radio) => {
        await radio.updateComplete;
        radio.checked = radio.value === this.value;
        radio.size = this.size;
      })
    );
    this.hasButtonGroup = radios.some((radio) => radio.tagName.toLowerCase() === "koerber-radio-button");
    if (!radios.some((radio) => radio.checked)) {
      if (this.hasButtonGroup) {
        const buttonRadio = (_a = radios[0].shadowRoot) == null ? void 0 : _a.querySelector("button");
        if (buttonRadio) {
          buttonRadio.tabIndex = 0;
        }
      } else {
        radios[0].tabIndex = 0;
      }
    }
    if (this.hasButtonGroup) {
      const buttonGroup = (_b = this.shadowRoot) == null ? void 0 : _b.querySelector("koerber-button-group");
      if (buttonGroup) {
        buttonGroup.disableRole = true;
      }
    }
  }
  syncRadios() {
    if (customElements.get("koerber-radio") && customElements.get("koerber-radio-button")) {
      this.syncRadioElements();
      return;
    }
    if (customElements.get("koerber-radio")) {
      this.syncRadioElements();
    } else {
      customElements.whenDefined("koerber-radio").then(() => this.syncRadios());
    }
    if (customElements.get("koerber-radio-button")) {
      this.syncRadioElements();
    } else {
      customElements.whenDefined("koerber-radio-button").then(() => this.syncRadios());
    }
  }
  updateCheckedRadio() {
    const radios = this.getAllRadios();
    radios.forEach((radio) => radio.checked = radio.value === this.value);
  }
  handleSizeChange() {
    this.syncRadios();
  }
  handleValueChange() {
    if (this.hasUpdated) {
      this.updateCheckedRadio();
    }
  }
  handleDisabledChange() {
    if (this.disabled) {
      this.getAllRadios().forEach((radio) => radio.disabled = this.disabled);
    }
  }
  handleErrorChange() {
    if (this.error) {
      this.getAllRadios().forEach((radio) => {
        radio.error = true;
      });
    } else {
      this.getAllRadios().forEach((radio) => {
        radio.error = false;
      });
    }
  }
  focus() {
    const radios = this.getAllRadios();
    const checked = radios.find((radio) => radio.checked);
    const radioToFocus = checked || radios[0];
    if (radioToFocus) {
      radioToFocus.focus();
    }
  }
  blur() {
    const radios = this.getAllRadios();
    radios.forEach((radio) => radio.blur());
  }
  render() {
    const defaultSlot = html`
      <slot
        @click=${this.handleRadioClick}
        @keydown=${this.handleKeyDown}
        @slotchange=${this.syncRadios}
        role="presentation"
      ></slot>
    `;
    return html`
      <fieldset
        part="form-control"
        class=${classMap({
      "form-control": true,
      "form-control--small": this.size === "small",
      "form-control--medium": this.size === "medium",
      "form-control--large": this.size === "large",
      "form-control--radio-group": true
    })}
        role="radiogroup"
      >
        <div
          part="form-control-input"
          class=${classMap({
      "form-control-input": true,
      "radio-group--horizontal": this.horizontal
    })}
        >
          ${this.hasButtonGroup ? html`
                <koerber-button-group part="button-group" exportparts="base:button-group__base">
                  ${defaultSlot}
                </koerber-button-group>
              ` : defaultSlot}
        </div>
      </fieldset>
    `;
  }
};
RadioGroup.styles = [component_styles_default, form_control_styles_default, radio_group_styles_default];
RadioGroup.dependencies = { "koerber-button-group": ButtonGroup };
__decorateClass([
  query("slot:not([name])")
], RadioGroup.prototype, "defaultSlot", 2);
__decorateClass([
  state()
], RadioGroup.prototype, "hasButtonGroup", 2);
__decorateClass([
  state()
], RadioGroup.prototype, "defaultValue", 2);
__decorateClass([
  property()
], RadioGroup.prototype, "name", 2);
__decorateClass([
  property({ reflect: true })
], RadioGroup.prototype, "value", 2);
__decorateClass([
  property({ reflect: true })
], RadioGroup.prototype, "size", 2);
__decorateClass([
  property({ type: Boolean, reflect: true })
], RadioGroup.prototype, "required", 2);
__decorateClass([
  property({ type: Boolean, reflect: true })
], RadioGroup.prototype, "horizontal", 2);
__decorateClass([
  property({ type: Boolean, reflect: true })
], RadioGroup.prototype, "disabled", 2);
__decorateClass([
  property({ type: Boolean, reflect: true })
], RadioGroup.prototype, "error", 2);
__decorateClass([
  watch("size", { waitUntilFirstUpdate: true })
], RadioGroup.prototype, "handleSizeChange", 1);
__decorateClass([
  watch("value")
], RadioGroup.prototype, "handleValueChange", 1);
__decorateClass([
  watch("disabled")
], RadioGroup.prototype, "handleDisabledChange", 1);
__decorateClass([
  watch("error")
], RadioGroup.prototype, "handleErrorChange", 1);

export {
  RadioGroup
};
//# sourceMappingURL=chunk.JSPWNJ5L.js.map
