var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement } from 'lit';
import { property } from 'lit/decorators.js';
class UIKitElement extends LitElement {
    emit(name, options) {
        const event = new CustomEvent(name, Object.assign({ bubbles: true, cancelable: false, composed: true, detail: {} }, options));
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
        let newVersion = ' (unknown version)';
        let existingVersion = newVersion;
        if ('version' in elementConstructor && elementConstructor.version) {
            newVersion = ' v' + elementConstructor.version;
        }
        if ('version' in currentlyRegisteredConstructor && currentlyRegisteredConstructor.version) {
            existingVersion = ' v' + currentlyRegisteredConstructor.version;
        }
        // Need to make sure we're not working with null or empty strings before doing version comparisons.
        if (newVersion && existingVersion && newVersion === existingVersion) {
            // If versions match, we don't need to warn anyone. Carry on.
            return;
        }
        console.warn(`Attempted to register <${name}>${newVersion}, but <${name}>${existingVersion} has already been registered.`);
    }
    constructor() {
        super();
        Object.entries(this.constructor.dependencies).forEach(([name, component]) => {
            this.constructor.define(name, component);
        });
    }
}
/* eslint-disable */
// @ts-expect-error This is auto-injected at build time.
UIKitElement.version = __UIKIT_VERSION__;
UIKitElement.dependencies = {};
export default UIKitElement;
__decorate([
    property()
], UIKitElement.prototype, "dir", void 0);
__decorate([
    property()
], UIKitElement.prototype, "lang", void 0);
