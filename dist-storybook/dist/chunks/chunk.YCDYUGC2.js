import {
  __decorateClass,
  __spreadValues
} from "./chunk.DJOAQ4JU.js";

// src/internal/uikit-element.ts
import { LitElement } from "lit";
import { property } from "lit/decorators.js";
var UIKitElement = class extends LitElement {
  emit(name, options) {
    const event = new CustomEvent(name, __spreadValues({
      bubbles: true,
      cancelable: false,
      composed: true,
      detail: {}
    }, options));
    this.dispatchEvent(event);
    return event;
  }
  /* eslint-enable */
  static define(name, elementConstructor = this, options = {}) {
    const currentlyRegisteredConstructor = customElements.get(name);
    if (!currentlyRegisteredConstructor) {
      customElements.define(name, class extends elementConstructor {
      }, options);
      return;
    }
    let newVersion = " (unknown version)";
    let existingVersion = newVersion;
    if ("version" in elementConstructor && elementConstructor.version) {
      newVersion = " v" + elementConstructor.version;
    }
    if ("version" in currentlyRegisteredConstructor && currentlyRegisteredConstructor.version) {
      existingVersion = " v" + currentlyRegisteredConstructor.version;
    }
    if (newVersion && existingVersion && newVersion === existingVersion) {
      return;
    }
    console.warn(
      `Attempted to register <${name}>${newVersion}, but <${name}>${existingVersion} has already been registered.`
    );
  }
  constructor() {
    super();
    Object.entries(this.constructor.dependencies).forEach(([name, component]) => {
      this.constructor.define(name, component);
    });
  }
};
/* eslint-disable */
// @ts-expect-error This is auto-injected at build time.
UIKitElement.version = "3.0.0-prealpha.0";
UIKitElement.dependencies = {};
__decorateClass([
  property()
], UIKitElement.prototype, "dir", 2);
__decorateClass([
  property()
], UIKitElement.prototype, "lang", 2);

export {
  UIKitElement
};
//# sourceMappingURL=chunk.YCDYUGC2.js.map
