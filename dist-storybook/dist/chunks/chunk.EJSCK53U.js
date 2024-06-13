// src/components/tooltip/tooltip.styles.ts
import { css } from "lit";
var tooltip_styles_default = css`
  :host {
    --max-width: 300px;
    --hide-delay: 0ms;
    --show-delay: 150ms;

    display: contents;
    --koerber-z-index-tooltip: 1000;
    --koerber-tooltip-arrow-size: 6px;
  }

  .tooltip {
    --arrow-size: var(--koerber-tooltip-arrow-size);
    --arrow-color: var(--koerber-color-bg-surface-quaternary);
  }

  .tooltip::part(popup) {
    user-select: none;
    z-index: var(--koerber-z-index-tooltip);
  }

  .tooltip[placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .tooltip[placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .tooltip[placement^='left']::part(popup) {
    transform-origin: right;
  }

  .tooltip[placement^='right']::part(popup) {
    transform-origin: left;
  }

  .tooltip__body {
    display: block;
    width: max-content;
    max-width: var(--max-width);
    border-radius: var(--koerber-border-radius-small);
    background-color: var(--koerber-color-bg-surface-quaternary);
    font-family: var(--koerber-font-family-default);
    font-size: var(--koerber-text-base-font-size);
    font-weight: var(--koerber-font-weight-regular);
    line-height: var(--koerber-text-md-line-height);
    color: var(--koerber-color-text-bg-fill);
    padding: var(--koerber-spacing-xs) var(--koerber-spacing-s);
    pointer-events: none;
    user-select: none;
  }
`;

export {
  tooltip_styles_default
};
//# sourceMappingURL=chunk.EJSCK53U.js.map
