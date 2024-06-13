import {
  list_item_styles_default
} from "./chunk.LSB25IGL.js";
import {
  Avatar
} from "./chunk.45NLWZDY.js";
import {
  Button
} from "./chunk.3EZ6DTUK.js";
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

// src/components/list-item/list-item.component.ts
import { classMap } from "lit/directives/class-map.js";
import { html } from "lit";
import { property, query } from "lit/decorators.js";
var ListItem = class extends UIKitElement {
  constructor() {
    super(...arguments);
    this.label = "";
    this.secondaryText = "";
    this.tertiaryText = "";
    this.size = "medium";
  }
  connectedCallback() {
    super.connectedCallback();
  }
  getPrefixIcon() {
    return this.querySelector("koerber-icon");
  }
  getPrefixAvatar() {
    return this.querySelector("koerber-avatar");
  }
  async syncPrefix() {
    const icon = this.getPrefixIcon();
    const avatar = this.getPrefixAvatar();
    const hasSubtext = this.secondaryText || this.tertiaryText;
    if (icon) {
      await icon.updateComplete;
      icon.size = hasSubtext || this.size === "large" ? "large" : "medium";
    } else if (avatar) {
      await avatar.updateComplete;
      avatar.size = "small";
    }
  }
  getSuffixButton() {
    return this.querySelector("koerber-button");
  }
  async syncSuffixButton() {
    const button = this.getSuffixButton();
    if (button) {
      await button.updateComplete;
      button.variant = "ghost";
      this.shadowRoot.querySelector(".text-container").classList.add("text-container-has-suffix");
    }
  }
  render() {
    const hasSubtext = this.secondaryText || this.tertiaryText;
    return html`
      <div
        part="base"
        class=${classMap({
      "list-item": true,
      "line-item--has-subtext": hasSubtext,
      "line-item--has-no-subtext": !hasSubtext,
      "list-item--small": this.size === "small",
      "list-item--medium": this.size === "medium",
      "list-item--large": this.size === "large"
    })}
      >
        <slot name="prefix" class="list-item__prefix" @slotchange=${this.syncPrefix}></slot>

        <div
          class=${classMap({
      "text-container": true,
      "text-container--has-subtext": hasSubtext
    })}
        >
          <slot name="label" class="list-item__label-text">${this.label}</slot>
          ${this.secondaryText ? html`<slot name="secondary-text" class="list-item__secondary-text">${this.secondaryText}</slot>` : ""}
          ${this.tertiaryText ? html`<slot name="tertiary-text" class="list-item__tertiary-text">${this.tertiaryText}</slot>` : ""}
        </div>

        <slot name="suffix" class="list-item__suffix" @slotchange=${this.syncSuffixButton}></slot>
      </div>
    `;
  }
};
ListItem.styles = [component_styles_default, list_item_styles_default];
ListItem.dependencies = { "koerber-avatar": Avatar, "koerber-button": Button, "koerber-icon": Icon };
__decorateClass([
  query("slot:not([name])")
], ListItem.prototype, "defaultSlot", 2);
__decorateClass([
  property()
], ListItem.prototype, "label", 2);
__decorateClass([
  property({ type: String, attribute: "secondary-text" })
], ListItem.prototype, "secondaryText", 2);
__decorateClass([
  property({ type: String, attribute: "tertiary-text" })
], ListItem.prototype, "tertiaryText", 2);
__decorateClass([
  property({ reflect: true })
], ListItem.prototype, "size", 2);
__decorateClass([
  property()
], ListItem.prototype, "value", 2);

export {
  ListItem
};
//# sourceMappingURL=chunk.KKVKABM4.js.map
