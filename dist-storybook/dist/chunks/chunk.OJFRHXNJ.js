import {
  lockBodyScrolling,
  unlockBodyScrolling
} from "./chunk.KVUPQOGO.js";
import {
  IconButton
} from "./chunk.BVPLSUKH.js";
import {
  getTabbableBoundary
} from "./chunk.CS7PWYZQ.js";
import {
  drawer_styles_default
} from "./chunk.FKNIDBZ2.js";
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
  HasSlotController
} from "./chunk.SIMXNE26.js";
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

// src/components/drawer/drawer.component.ts
import { classMap } from "lit/directives/class-map.js";
import { html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";
import { property, query } from "lit/decorators.js";

// src/internal/string.ts
function uppercaseFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// src/internal/modal.ts
var activeModals = [];
var Modal = class {
  constructor(element) {
    this.tabDirection = "forward";
    this.element = element;
    this.handleFocusIn = this.handleFocusIn.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
  }
  activate() {
    activeModals.push(this.element);
    document.addEventListener("focusin", this.handleFocusIn);
    document.addEventListener("keydown", this.handleKeyDown);
    document.addEventListener("keyup", this.handleKeyUp);
  }
  deactivate() {
    activeModals = activeModals.filter((modal) => modal !== this.element);
    document.removeEventListener("focusin", this.handleFocusIn);
    document.removeEventListener("keydown", this.handleKeyDown);
    document.removeEventListener("keyup", this.handleKeyUp);
  }
  isActive() {
    return activeModals[activeModals.length - 1] === this.element;
  }
  checkFocus() {
    if (this.isActive()) {
      if (!this.element.matches(":focus-within")) {
        const { start, end } = getTabbableBoundary(this.element);
        const target = this.tabDirection === "forward" ? start : end;
        if (typeof (target == null ? void 0 : target.focus) === "function") {
          target.focus({ preventScroll: true });
        }
      }
    }
  }
  handleFocusIn() {
    this.checkFocus();
  }
  handleKeyDown(event) {
    if (event.key === "Tab" && event.shiftKey) {
      this.tabDirection = "backward";
      requestAnimationFrame(() => this.checkFocus());
    }
  }
  handleKeyUp() {
    this.tabDirection = "forward";
  }
};

// src/components/drawer/drawer.component.ts
var Drawer = class extends UIKitElement {
  constructor() {
    super(...arguments);
    this.hasSlotController = new HasSlotController(this, "footer", "icon");
    this.localize = new LocalizeController(this);
    this.modal = new Modal(this);
    this.open = false;
    this.label = "";
    this.placement = "end";
    this.size = "small";
    this.contained = false;
    this.noHeader = false;
    this.handleDocumentKeyDown = (event) => {
      if (this.contained) {
        return;
      }
      if (event.key === "Escape" && this.modal.isActive() && this.open) {
        event.stopImmediatePropagation();
        this.requestClose("keyboard");
      }
    };
  }
  firstUpdated() {
    this.drawer.hidden = !this.open;
    if (this.open) {
      this.addOpenListeners();
      if (!this.contained) {
        this.modal.activate();
        lockBodyScrolling(this);
      }
    }
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    unlockBodyScrolling(this);
  }
  requestClose(source) {
    const slRequestClose = this.emit("koerber-request-close", {
      cancelable: true,
      detail: { source }
    });
    if (slRequestClose.defaultPrevented) {
      const animation = getAnimation(this, "drawer.denyClose", { dir: this.localize.dir() });
      animateTo(this.panel, animation.keyframes, animation.options);
      return;
    }
    this.hide();
  }
  addOpenListeners() {
    document.addEventListener("keydown", this.handleDocumentKeyDown);
  }
  removeOpenListeners() {
    document.removeEventListener("keydown", this.handleDocumentKeyDown);
  }
  async handleOpenChange() {
    if (this.open) {
      this.emit("koerber-show");
      this.addOpenListeners();
      this.originalTrigger = document.activeElement;
      if (!this.contained) {
        this.modal.activate();
        lockBodyScrolling(this);
      }
      const autoFocusTarget = this.querySelector("[autofocus]");
      if (autoFocusTarget) {
        autoFocusTarget.removeAttribute("autofocus");
      }
      await Promise.all([stopAnimations(this.drawer), stopAnimations(this.overlay)]);
      this.drawer.hidden = false;
      requestAnimationFrame(() => {
        const slInitialFocus = this.emit("koerber-initial-focus", { cancelable: true });
        if (!slInitialFocus.defaultPrevented) {
          if (autoFocusTarget) {
            autoFocusTarget.focus({ preventScroll: true });
          } else {
            this.panel.focus({ preventScroll: true });
          }
        }
        if (autoFocusTarget) {
          autoFocusTarget.setAttribute("autofocus", "");
        }
      });
      const panelAnimation = getAnimation(this, `drawer.show${uppercaseFirstLetter(this.placement)}`, {
        dir: this.localize.dir()
      });
      const overlayAnimation = getAnimation(this, "drawer.overlay.show", { dir: this.localize.dir() });
      await Promise.all([
        animateTo(this.panel, panelAnimation.keyframes, panelAnimation.options),
        animateTo(this.overlay, overlayAnimation.keyframes, overlayAnimation.options)
      ]);
      this.emit("koerber-after-show");
    } else {
      this.emit("koerber-hide");
      this.removeOpenListeners();
      if (!this.contained) {
        this.modal.deactivate();
        unlockBodyScrolling(this);
      }
      await Promise.all([stopAnimations(this.drawer), stopAnimations(this.overlay)]);
      const panelAnimation = getAnimation(this, `drawer.hide${uppercaseFirstLetter(this.placement)}`, {
        dir: this.localize.dir()
      });
      const overlayAnimation = getAnimation(this, "drawer.overlay.hide", { dir: this.localize.dir() });
      await Promise.all([
        animateTo(this.overlay, overlayAnimation.keyframes, overlayAnimation.options).then(() => {
          this.overlay.hidden = true;
        }),
        animateTo(this.panel, panelAnimation.keyframes, panelAnimation.options).then(() => {
          this.panel.hidden = true;
        })
      ]);
      this.drawer.hidden = true;
      this.overlay.hidden = false;
      this.panel.hidden = false;
      const trigger = this.originalTrigger;
      if (typeof (trigger == null ? void 0 : trigger.focus) === "function") {
        setTimeout(() => trigger.focus());
      }
      this.emit("koerber-after-hide");
    }
  }
  handleNoModalChange() {
    if (this.open && !this.contained) {
      this.modal.activate();
      lockBodyScrolling(this);
    }
    if (this.open && this.contained) {
      this.modal.deactivate();
      unlockBodyScrolling(this);
    }
  }
  /** Shows the drawer. */
  async show() {
    if (this.open) {
      return void 0;
    }
    this.open = true;
    return waitForEvent(this, "koerber-after-show");
  }
  /** Hides the drawer */
  async hide() {
    if (!this.open) {
      return void 0;
    }
    this.open = false;
    return waitForEvent(this, "koerber-after-hide");
  }
  render() {
    return html`
      <div
        part="base"
        class=${classMap({
      drawer: true,
      "drawer--open": this.open,
      "drawer--small": this.size === "small",
      "drawer--large": this.size === "large",
      "drawer--end": this.placement === "end",
      "drawer--start": this.placement === "start",
      "drawer--contained": this.contained,
      "drawer--fixed": !this.contained,
      "drawer--rtl": this.localize.dir() === "rtl",
      "drawer--has-footer": this.hasSlotController.test("footer"),
      "drawer--has-icon": this.hasSlotController.test("icon")
    })}
      >
        <div part="overlay" class="drawer__overlay" @click=${() => this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="drawer__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open ? "false" : "true"}
          aria-label=${ifDefined(this.noHeader ? this.label : void 0)}
          aria-labelledby=${ifDefined(!this.noHeader ? "title" : void 0)}
          tabindex="0"
        >
          ${!this.noHeader ? html`
                <header part="header" class="drawer__header">
                  <h2 part="title" class="drawer__title" id="title">
                    <div part="icon" class="drawer__title-icon">
                      <slot name="icon"></slot>
                    </div>
                    <!-- If there's no label, use an invisible character to prevent the header from collapsing -->
                    <div part="title-label" class="drawer__title-label">
                      <slot name="label"> ${this.label.length > 0 ? this.label : String.fromCharCode(65279)} </slot>
                    </div>
                  </h2>
                  <div class="drawer__header-actions">
                    <koerber-icon-button
                      size="large"
                      part="close-button"
                      exportparts="base:close-button__base"
                      class="drawer__close"
                      name="close"
                      label=${this.localize.term("close")}
                      library="system"
                      @click=${() => this.requestClose("close-button")}
                    ></koerber-icon-button>
                  </div>
                </header>
              ` : ""}

          <slot part="body" class="drawer__body"></slot>

          <footer part="footer" class="drawer__footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    `;
  }
};
Drawer.styles = [component_styles_default, drawer_styles_default];
Drawer.dependencies = { "koerber-icon-button": IconButton };
__decorateClass([
  query(".drawer")
], Drawer.prototype, "drawer", 2);
__decorateClass([
  query(".drawer__panel")
], Drawer.prototype, "panel", 2);
__decorateClass([
  query(".drawer__overlay")
], Drawer.prototype, "overlay", 2);
__decorateClass([
  property({ type: Boolean, reflect: true })
], Drawer.prototype, "open", 2);
__decorateClass([
  property({ reflect: true })
], Drawer.prototype, "label", 2);
__decorateClass([
  property({ reflect: true })
], Drawer.prototype, "placement", 2);
__decorateClass([
  property({ reflect: true })
], Drawer.prototype, "size", 2);
__decorateClass([
  property({ type: Boolean, reflect: true })
], Drawer.prototype, "contained", 2);
__decorateClass([
  property({ attribute: "no-header", type: Boolean, reflect: true })
], Drawer.prototype, "noHeader", 2);
__decorateClass([
  watch("open", { waitUntilFirstUpdate: true })
], Drawer.prototype, "handleOpenChange", 1);
__decorateClass([
  watch("contained", { waitUntilFirstUpdate: true })
], Drawer.prototype, "handleNoModalChange", 1);
setDefaultAnimation("drawer.showEnd", {
  keyframes: [
    { opacity: 0, translate: "100%" },
    { opacity: 1, translate: "0" }
  ],
  rtlKeyframes: [
    { opacity: 0, translate: "-100%" },
    { opacity: 1, translate: "0" }
  ],
  options: { duration: 250, easing: "ease" }
});
setDefaultAnimation("drawer.hideEnd", {
  keyframes: [
    { opacity: 1, translate: "0" },
    { opacity: 0, translate: "100%" }
  ],
  rtlKeyframes: [
    { opacity: 1, translate: "0" },
    { opacity: 0, translate: "-100%" }
  ],
  options: { duration: 250, easing: "ease" }
});
setDefaultAnimation("drawer.showStart", {
  keyframes: [
    { opacity: 0, translate: "-100%" },
    { opacity: 1, translate: "0" }
  ],
  rtlKeyframes: [
    { opacity: 0, translate: "100%" },
    { opacity: 1, translate: "0" }
  ],
  options: { duration: 250, easing: "ease" }
});
setDefaultAnimation("drawer.hideStart", {
  keyframes: [
    { opacity: 1, translate: "0" },
    { opacity: 0, translate: "-100%" }
  ],
  rtlKeyframes: [
    { opacity: 1, translate: "0" },
    { opacity: 0, translate: "100%" }
  ],
  options: { duration: 250, easing: "ease" }
});
setDefaultAnimation("drawer.denyClose", {
  keyframes: [{ scale: 1 }, { scale: 1.01 }, { scale: 1 }],
  options: { duration: 250 }
});
setDefaultAnimation("drawer.overlay.show", {
  keyframes: [{ opacity: 0 }, { opacity: 1 }],
  options: { duration: 250 }
});
setDefaultAnimation("drawer.overlay.hide", {
  keyframes: [{ opacity: 1 }, { opacity: 0 }],
  options: { duration: 250 }
});

export {
  Drawer
};
//# sourceMappingURL=chunk.OJFRHXNJ.js.map
