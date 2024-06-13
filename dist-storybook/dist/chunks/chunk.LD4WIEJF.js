// src/components/popup/popup.styles.ts
import { css } from "lit";
var popup_styles_default = css`
  :host {
    --arrow-color: var(--koerber-color-bg-surface-quaternary);
    --koerber-tooltip-arrow-size: 6px;

    /*
     * These properties are computed to account for the arrow's dimensions after being rotated 45º. The constant
     * 0.7071 is derived from sin(45), which is the diagonal size of the arrow's container after rotating.
     */
    --arrow-size-diagonal: calc(var(--koerber-tooltip-arrow-size) * 0.7071);
    --arrow-padding-offset: calc(var(--arrow-size-diagonal) - var(--koerber-tooltip-arrow-size));

    display: contents;
  }

  .popup {
    position: absolute;
    isolation: isolate;
    max-width: var(--auto-size-available-width, none);
    max-height: var(--auto-size-available-height, none);
  }

  /* Color Variants */

  .popup__body {
    border-radius: var(--koerber-border-radius-small);
  }

  .popup__body.popup__body--unstyled {
    background-color: none;
  }

  .popup__arrow.popup__arrow--unstyled {
    background-color: none;
  }

  .popup__body.popup__body--default {
    background-color: var(--koerber-color-bg-surface-secondary);
    box-shadow: 0px 2px 8px 0px rgba(35, 38, 37, 0.15);
    width: 100%;
    height: 100%;
  }

  .popup__arrow.popup__arrow--default {
    background-color: var(--koerber-color-bg-surface-secondary);
  }

  .popup__body.popup__body--interactive {
    background-color: var(--koerber-color-bg-surface-quaternary);
  }

  .popup__arrow.popup__arrow--interactive {
    background-color: var(--koerber-color-bg-surface-quaternary);
  }

  .popup--fixed {
    position: fixed;
  }

  .popup:not(.popup--active) {
    display: none;
  }

  .popup__arrow {
    position: absolute;
    width: calc(var(--arrow-size-diagonal) * 2);
    height: calc(var(--arrow-size-diagonal) * 2);
    rotate: 45deg;
    background: var(--arrow-color);
    z-index: -1;
  }

  /* Hover bridge */
  .popup-hover-bridge:not(.popup-hover-bridge--visible) {
    display: none;
  }

  .popup-hover-bridge {
    position: fixed;
    z-index: calc(var(--sl-z-index-dropdown) - 1);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    clip-path: polygon(
      var(--hover-bridge-top-left-x, 0) var(--hover-bridge-top-left-y, 0),
      var(--hover-bridge-top-right-x, 0) var(--hover-bridge-top-right-y, 0),
      var(--hover-bridge-bottom-right-x, 0) var(--hover-bridge-bottom-right-y, 0),
      var(--hover-bridge-bottom-left-x, 0) var(--hover-bridge-bottom-left-y, 0)
    );
  }
`;

export {
  popup_styles_default
};
//# sourceMappingURL=chunk.LD4WIEJF.js.map
