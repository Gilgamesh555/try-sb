import {
  animation_styles_default
} from "./chunk.YYJB57LS.js";
import {
  animations
} from "./chunk.W4XGKNX4.js";
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

// src/components/animation/animation.component.ts
import { html } from "lit";
import { property, queryAsync } from "lit/decorators.js";
var KoerberAnimation = class extends UIKitElement {
  constructor() {
    super(...arguments);
    this.hasStarted = false;
    this.name = "none";
    this.play = false;
    this.delay = 0;
    this.direction = "normal";
    this.duration = 1e3;
    this.easing = "linear";
    this.endDelay = 0;
    this.fill = "auto";
    this.iterations = Infinity;
    this.iterationStart = 0;
    this.playbackRate = 1;
  }
  /** Gets and sets the current animation time. */
  get currentTime() {
    var _a, _b;
    return (_b = (_a = this.animation) == null ? void 0 : _a.currentTime) != null ? _b : 0;
  }
  set currentTime(time) {
    if (this.animation) {
      this.animation.currentTime = time;
    }
  }
  connectedCallback() {
    super.connectedCallback();
    this.createAnimation();
    this.handleAnimationCancel = this.handleAnimationCancel.bind(this);
    this.handleAnimationFinish = this.handleAnimationFinish.bind(this);
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.destroyAnimation();
  }
  handleAnimationFinish() {
    this.play = false;
    this.hasStarted = false;
    this.emit("koerber-finish");
  }
  handleAnimationCancel() {
    this.play = false;
    this.hasStarted = false;
    this.emit("koerber-cancel");
  }
  handleSlotChange() {
    this.destroyAnimation();
    this.createAnimation();
  }
  async createAnimation() {
    var _a, _b;
    const easing = (_a = animations.easings[this.easing]) != null ? _a : this.easing;
    const keyframes = (_b = this.keyframes) != null ? _b : animations[this.name];
    const slot = await this.defaultSlot;
    const element = slot.assignedElements()[0];
    if (!element || !keyframes) {
      return false;
    }
    this.destroyAnimation();
    this.animation = element.animate(keyframes, {
      delay: this.delay,
      direction: this.direction,
      duration: this.duration,
      easing,
      endDelay: this.endDelay,
      fill: this.fill,
      iterationStart: this.iterationStart,
      iterations: this.iterations
    });
    this.animation.playbackRate = this.playbackRate;
    this.animation.addEventListener("cancel", this.handleAnimationCancel);
    this.animation.addEventListener("finish", this.handleAnimationFinish);
    if (this.play) {
      this.hasStarted = true;
      this.emit("koerber-start");
    } else {
      this.animation.pause();
    }
    return true;
  }
  destroyAnimation() {
    if (this.animation) {
      this.animation.cancel();
      this.animation.removeEventListener("cancel", this.handleAnimationCancel);
      this.animation.removeEventListener("finish", this.handleAnimationFinish);
      this.hasStarted = false;
    }
  }
  handleAnimationChange() {
    if (!this.hasUpdated) {
      return;
    }
    this.createAnimation();
  }
  handlePlayChange() {
    if (this.animation) {
      if (this.play && !this.hasStarted) {
        this.hasStarted = true;
        this.emit("koerber-start");
      }
      if (this.play) {
        this.animation.play();
      } else {
        this.animation.pause();
      }
      return true;
    }
    return false;
  }
  handlePlaybackRateChange() {
    if (this.animation) {
      this.animation.playbackRate = this.playbackRate;
    }
  }
  /** Clears all keyframe effects caused by this animation and aborts its playback. */
  cancel() {
    var _a;
    (_a = this.animation) == null ? void 0 : _a.cancel();
  }
  /** Sets the playback time to the end of the animation corresponding to the current playback direction. */
  finish() {
    var _a;
    (_a = this.animation) == null ? void 0 : _a.finish();
  }
  render() {
    return html` <slot @slotchange=${this.handleSlotChange}></slot> `;
  }
};
KoerberAnimation.styles = [component_styles_default, animation_styles_default];
__decorateClass([
  queryAsync("slot")
], KoerberAnimation.prototype, "defaultSlot", 2);
__decorateClass([
  property()
], KoerberAnimation.prototype, "name", 2);
__decorateClass([
  property({ type: Boolean, reflect: true })
], KoerberAnimation.prototype, "play", 2);
__decorateClass([
  property({ type: Number })
], KoerberAnimation.prototype, "delay", 2);
__decorateClass([
  property()
], KoerberAnimation.prototype, "direction", 2);
__decorateClass([
  property({ type: Number })
], KoerberAnimation.prototype, "duration", 2);
__decorateClass([
  property()
], KoerberAnimation.prototype, "easing", 2);
__decorateClass([
  property({ attribute: "end-delay", type: Number })
], KoerberAnimation.prototype, "endDelay", 2);
__decorateClass([
  property()
], KoerberAnimation.prototype, "fill", 2);
__decorateClass([
  property({ type: Number })
], KoerberAnimation.prototype, "iterations", 2);
__decorateClass([
  property({ attribute: "iteration-start", type: Number })
], KoerberAnimation.prototype, "iterationStart", 2);
__decorateClass([
  property({ attribute: false })
], KoerberAnimation.prototype, "keyframes", 2);
__decorateClass([
  property({ attribute: "playback-rate", type: Number })
], KoerberAnimation.prototype, "playbackRate", 2);
__decorateClass([
  watch([
    "name",
    "delay",
    "direction",
    "duration",
    "easing",
    "endDelay",
    "fill",
    "iterations",
    "iterationsStart",
    "keyframes"
  ])
], KoerberAnimation.prototype, "handleAnimationChange", 1);
__decorateClass([
  watch("play")
], KoerberAnimation.prototype, "handlePlayChange", 1);
__decorateClass([
  watch("playbackRate")
], KoerberAnimation.prototype, "handlePlaybackRateChange", 1);

export {
  KoerberAnimation
};
//# sourceMappingURL=chunk.JPAHFY2G.js.map
