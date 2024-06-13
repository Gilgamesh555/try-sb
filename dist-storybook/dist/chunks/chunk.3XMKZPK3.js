import {
  Button
} from "./chunk.3EZ6DTUK.js";
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
  HasSlotController
} from "./chunk.SIMXNE26.js";
import {
  watch
} from "./chunk.H257LPKH.js";
import {
  alert_styles_default
} from "./chunk.N3YGGUXV.js";
import {
  UIKitElement
} from "./chunk.YCDYUGC2.js";
import {
  component_styles_default
} from "./chunk.2NT3B5WJ.js";
import {
  __decorateClass
} from "./chunk.DJOAQ4JU.js";

// src/components/alert/alert.component.ts
import { classMap } from "lit/directives/class-map.js";
import { html } from "lit";
import { LocalizeController } from "@shoelace-style/localize";
import { property, query, state } from "lit/decorators.js";
var toastStack = Object.assign(document.createElement("div"), { className: "koerber-toast-stack" });
var toastChildAlert = "koerber-alert-child";
var Alert = class extends UIKitElement {
  constructor() {
    super(...arguments);
    this.hasSlotController = new HasSlotController(
      this,
      "[default]",
      "icon",
      "action-primary",
      "action-secondary"
    );
    this.localize = new LocalizeController(this);
    this.isTextOverflowing = false;
    this.open = false;
    this.closable = false;
    this.variant = "info";
    this.actionsPlacement = "inline";
    this.duration = Infinity;
  }
  firstUpdated() {
    var _a;
    this.base.hidden = !this.open;
    const textContainer = (_a = this.shadowRoot) == null ? void 0 : _a.querySelector(".multiline");
    const observer = new ResizeObserver(() => {
      if (textContainer && textContainer.scrollHeight > textContainer.clientHeight) {
        this.isTextOverflowing = true;
        this.emit("koerber-show");
      } else if (this.isTextOverflowing) {
        this.isTextOverflowing = false;
        this.emit("koerber-hide");
      }
    });
    if (textContainer) {
      observer.observe(textContainer);
    }
  }
  restartAutoHide() {
    clearTimeout(this.autoHideTimeout);
    if (this.open && this.duration < Infinity) {
      this.autoHideTimeout = window.setTimeout(() => this.hide(), this.duration);
    }
  }
  handleCloseClick() {
    this.hide();
  }
  handleMouseMove() {
    this.restartAutoHide();
  }
  /**
   * Displays the alert as a toast alert. This will move the alert out of its position in the DOM and, when dismissed, it will be removed from the DOM completely. By storing a reference to the alert, you can reuse it by calling this method again. The returned promise will resolve after the alert is hidden.
   */
  async toast() {
    return new Promise((resolve) => {
      var _a;
      if (this.classList.contains(toastChildAlert)) {
        const childAlert = (_a = this.shadowRoot) == null ? void 0 : _a.querySelector(".alert");
        childAlert.style.position = "absolute";
        childAlert.style.bottom = "var(--koerber-toast-stack-spacing)";
        childAlert.style.right = "0";
        childAlert.style.width = "100%";
        if (!this.open) {
          this.show();
        }
        return;
      }
      if (toastStack.parentElement === null) {
        document.body.append(toastStack);
      }
      toastStack.appendChild(this);
      requestAnimationFrame(() => {
        this.clientWidth;
        this.show();
      });
      this.addEventListener(
        "koerber-after-hide",
        () => {
          toastStack.removeChild(this);
          resolve();
          if (toastStack.querySelector("koerber-alert") === null) {
            toastStack.remove();
          }
        },
        { once: true }
      );
    });
  }
  async handleOpenChange() {
    if (this.open) {
      this.emit("koerber-show");
      if (this.duration < Infinity) {
        this.restartAutoHide();
      }
      await stopAnimations(this.base);
      this.base.hidden = false;
      const { keyframes, options } = getAnimation(this, "alert.show", { dir: this.localize.dir() });
      await animateTo(this.base, keyframes, options);
      this.emit("koerber-after-show");
    } else {
      this.emit("koerber-hide");
      clearTimeout(this.autoHideTimeout);
      await stopAnimations(this.base);
      const { keyframes, options } = getAnimation(this, "alert.hide", { dir: this.localize.dir() });
      await animateTo(this.base, keyframes, options);
      this.base.hidden = true;
      this.emit("koerber-after-hide");
    }
  }
  handleDurationChange() {
    this.restartAutoHide();
  }
  /** Shows the alert. */
  async show() {
    this.open = true;
    return waitForEvent(this, "koerber-after-show");
  }
  /** Hides the alert */
  async hide() {
    this.open = false;
    return waitForEvent(this, "koerber-after-hide");
  }
  render() {
    return html`
      <div
        part="base"
        class=${classMap({
      alert: true,
      "alert--multiline": this.actionsPlacement === "footer",
      "alert--open": this.open,
      "alert--closable": this.closable,
      [`alert--${this.variant}`]: true
    })}
        role="alert"
        aria-hidden=${this.open ? "false" : "true"}
        @mousemove=${this.handleMouseMove}
      >
        <div
          class=${classMap({
      "alert__body-container": true,
      "alert__body-container-multiline": this.actionsPlacement === "footer"
    })}
        >
          <div
            class=${classMap({
      "alert__content-container": true,
      "alert__content-container-multiline": this.actionsPlacement === "footer"
    })}
          >
            ${this.hasSlotController.test("icon") ? html`
                  <slot
                    name="icon"
                    class=${classMap({
      alert__icon: true,
      alert__icon__multiline: this.actionsPlacement === "footer"
    })}
                  ></slot>
                ` : ""}
            <div
              part="message"
              class=${classMap({
      alert__message: true,
      multiline: true,
      "footer--active": this.actionsPlacement === "footer"
    })}
              aria-live="polite"
            >
              <slot></slot>
            </div>
          </div>
          <div
            part="expand"
            class=${classMap({
      alert__expand: true,
      alert__expand_multiline: this.actionsPlacement === "footer"
    })}
          >
            <slot name="expand"></slot>
          </div>
          <div
            part="actions"
            class=${classMap({
      alert__actions: true,
      alert__actions_multiline: this.actionsPlacement === "footer"
    })}
          >
            <slot name="action"></slot>
          </div>
        </div>

        ${this.closable ? html`
              <koerber-button
                part="close-button"
                exportparts="base:close-button__base"
                class="alert__close-button"
                aria-label=${this.localize.term("close")}
                name=${this.localize.term("close")}
                label=${this.localize.term("close")}
                @click=${this.handleCloseClick}
                icon-only
                variant="ghost"
                icon="close"
              >
                <koerber-icon name="close"></koerber-icon>
              </koerber-button>
            ` : ""}
      </div>
    `;
  }
};
Alert.styles = [component_styles_default, alert_styles_default];
Alert.dependencies = {
  "koerber-button": Button
};
__decorateClass([
  query('[part~="base"]')
], Alert.prototype, "base", 2);
__decorateClass([
  state()
], Alert.prototype, "isTextOverflowing", 2);
__decorateClass([
  property({ type: Boolean, reflect: true })
], Alert.prototype, "open", 2);
__decorateClass([
  property({ type: Boolean, reflect: true })
], Alert.prototype, "closable", 2);
__decorateClass([
  property({ reflect: true })
], Alert.prototype, "variant", 2);
__decorateClass([
  property({ attribute: "actions-placement" })
], Alert.prototype, "actionsPlacement", 2);
__decorateClass([
  property({ type: Number })
], Alert.prototype, "duration", 2);
__decorateClass([
  watch("open", { waitUntilFirstUpdate: true })
], Alert.prototype, "handleOpenChange", 1);
__decorateClass([
  watch("duration")
], Alert.prototype, "handleDurationChange", 1);
setDefaultAnimation("alert.show", {
  keyframes: [
    { opacity: 0, scale: 0.8 },
    { opacity: 1, scale: 1 }
  ],
  options: { duration: 250, easing: "ease" }
});
setDefaultAnimation("alert.hide", {
  keyframes: [
    { opacity: 1, scale: 1 },
    { opacity: 0, scale: 0.8 }
  ],
  options: { duration: 250, easing: "ease" }
});

export {
  Alert
};
//# sourceMappingURL=chunk.3XMKZPK3.js.map
