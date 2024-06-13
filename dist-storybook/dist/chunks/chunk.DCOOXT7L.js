// src/components/chip/chip.styles.ts
import { css } from "lit";
var chip_styles_default = css`
  :host {
    display: inline-block;
    vertical-align: middle;
    --koerber-chip-size-small: 20px;
    --koerber-chip-size-medium: 24px;
    --koerber-chip-size-large: 32px;
  }

  .chip--container {
    display: flex;
    align-items: center;
    gap: var(--koerber-spacing-s);
  }

  .chip {
    display: inline-flex;
    padding: 2px var(--koerber-spacing-xs);
    gap: var(--koerber-spacing-xs);
    border-radius: var(--koerber-border-radius-pill);
    white-space: nowrap;
    user-select: none;
    font-family: var(--koerber-font-family-default);
    font-style: normal;
  }

  .chip--text {
    font-size: var(--koerber-text-base-font-size);
    font-style: normal;
    font-family: var(--koerber-font-family-default);
    line-height: var(--koerber-text-base-line-height);
  }

  .chip--text.chip--large {
    font-size: var(--koerber-text-md-font-size);
    line-height: var(--koerber-text-lg-line-height);
  }

  /** Restore outline in chromium browsers */
  *:focus {
    outline: none;
  }

  /*
   * Size modifiers
   */

  .chip--small {
    font-size: var(--koerber-text-base-font-size);
    line-height: var(--koerber-text-sm-line-height);
    height: var(--koerber-chip-size-small);
  }

  .chip--medium {
    font-size: var(--koerber-text-base-font-size);
    line-height: var(--koerber-text-base-line-height);
    height: var(--koerber-chip-size-medium);
  }

  .chip--large {
    padding: var(--koerber-border-radius-small) var(--koerber-spacing-xs);
    font-size: var(--koerber-text-md-font-size);
    line-height: var(--koerber-text-lg-line-height);
    height: var(--koerber-chip-size-large);
  }

  /*
   * Pill outline
   */

  .chip--outline {
    border-radius: var(--koerber-border-radius-pill);
  }

  .chip--removable {
    padding-right: var(--koerber-spacing-2xs);
  }

  .chip--selected {
    padding-left: var(--koerber-spacing-2xs);
  }

  koerber-button.chip__remove::part(base) {
    padding: 0;
    color: inherit;
  }

  .chip__remove,
  .chip__suffix,
  .chip__prefix,
  .chip__selected {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  /** Color Variants */

  .chip--primary {
    background-color: var(--koerber-color-bg-fill);
    color: var(--koerber-color-text-bg-fill);
  }

  .chip--primary:hover {
    background-color: var(--koerber-color-bg-fill-hover);
  }

  .chip--primary:focus-visible:not(.chip--disabled) {
    background-color: var(--koerber-color-bg-fill-hover);
    outline: var(--koerber-border-width-m) solid var(--koerber-color-border-focus);
  }

  .chip--primary.chip--dragged {
    box-shadow: var(--koerber-shadow-card);
  }

  .chip--primary.chip--disabled {
    color: var(--koerber-color-text-disabled);
    background-color: var(--koerber-color-bg-fill-disabled);
  }

  .chip--primary:active:not(.chip--disabled) {
    background-color: var(--koerber-color-bg-fill);
    color: var(--koerber-color-text-bg-fill);
    box-shadow: var(--koerber-shadow-card);
  }

  .chip--danger {
    background-color: var(--koerber-color-bg-fill-error);
    color: var(--koerber-color-text-bg-fill);
  }

  .chip--danger:hover {
    background-color: var(--koerber-color-bg-fill-error-hover);
  }

  .chip--danger:focus-visible:not(.chip--disabled) {
    background-color: var(--koerber-color-bg-fill-error-hover);
    outline: var(--koerber-border-width-m) solid var(--koerber-color-border-error);
  }

  .chip--danger.chip--dragged {
    box-shadow: var(--koerber-shadow-card);
  }

  .chip--danger.chip--disabled {
    color: var(--koerber-color-text-disabled);
    background-color: var(--koerber-color-bg-fill-disabled);
  }

  .chip--danger:active:not(.chip--disabled) {
    background-color: var(--koerber-color-bg-fill-error);
    color: var(--koerber-color-text-bg-fill);
    box-shadow: var(--koerber-shadow-card);
  }

  .chip--info {
    background-color: var(--koerber-color-bg-fill-info);
    color: var(--koerber-color-text-bg-fill);
  }

  .chip--info:hover {
    background-color: var(--koerber-color-border-info-hover);
  }

  .chip--info:focus-visible:not(.chip--disabled) {
    background-color: var(--koerber-color-border-info-hover);
    outline: var(--koerber-border-width-m) solid var(--koerber-color-border-info);
  }

  .chip--info.chip--dragged {
    box-shadow: var(--koerber-shadow-card);
  }

  .chip--info.chip--disabled {
    color: var(--koerber-color-text-disabled);
    background-color: var(--koerber-color-bg-fill-disabled);
  }

  .chip--info:active:not(.chip--disabled) {
    background-color: var(--koerber-color-bg-fill-info);
    color: var(--koerber-color-text-bg-fill);
    box-shadow: var(--koerber-shadow-card);
  }

  .chip--tertiary {
    color: var(--koerber-color-text-bg-fill);
    background-color: var(--koerber-color-bg-surface-quaternary);
  }

  .chip--tertiary:hover {
    color: var(--koerber-color-text);
    background-color: var(--koerber-color-bg-fill-secondary-hover);
  }

  .chip--tertiary:focus-visible:not(.chip--disabled) {
    color: var(--koerber-color-text);
    background-color: var(--koerber-color-bg-fill-secondary-hover);
    outline: var(--koerber-border-width-m) solid var(--koerber-color-border-focus);
  }

  .chip--tertiary.chip--dragged {
    color: var(--koerber-color-text-bg-fill);
    background-color: var(--koerber-color-bg-surface-quaternary);
    box-shadow: var(--koerber-shadow-card);
  }

  .chip--tertiary.chip--disabled {
    color: var(--koerber-color-text-disabled);
    background-color: var(--koerber-color-bg-fill-disabled);
  }

  .chip--tertiary:active:not(.chip--disabled) {
    background-color: var(--koerber-color-bg-surface-quaternary);
    color: var(--koerber-color-text-bg-fill);
    box-shadow: var(--koerber-shadow-card);
  }

  /** Outline Themes */

  .chip--primary-outline {
    outline: var(--koerber-border-width-s) solid var(--koerber-color-border-focus);
    color: var(--koerber-color-bg-fill);
  }

  .chip--primary-outline:hover {
    background-color: var(--koerber-color-bg-fill-hover);
    color: var(--koerber-color-text-bg-fill);
    outline: none;
  }

  .chip--primary-outline:focus-visible:not(.chip--disabled) {
    background-color: var(--koerber-color-bg-fill-hover);
    outline: var(--koerber-border-width-m) solid var(--koerber-color-border-focus);
    color: var(--koerber-color-text-bg-fill);
  }

  .chip--primary-outline.chip--dragged {
    box-shadow: var(--koerber-shadow-card);
  }

  .chip--primary-outline.chip--disabled {
    outline: var(--koerber-border-width-s) solid var(--koerber-color-border-disabled);
    background: var(--koerber-color-bg-fill-disabled);
    color: var(--koerber-color-text-disabled);
  }

  .chip--primary-outline:active:not(.chip--disabled) {
    color: var(--koerber-color-text-link);
    outline: var(--koerber-border-width-s) solid var(--koerber-color-border-focus);
    background-color: var(--koerber-color-bg-fill-secondary);
    box-shadow: var(--koerber-shadow-card);
  }

  .chip--danger-outline {
    outline: var(--koerber-border-width-s) solid var(--koerber-color-border-error);
    color: var(--koerber-color-text-error);
  }

  .chip--danger-outline:hover {
    background-color: var(--koerber-color-bg-fill-error-hover);
    color: var(--koerber-color-text-bg-fill);
    outline: none;
  }

  .chip--danger-outline:focus-visible:not(.chip--disabled) {
    background-color: var(--koerber-color-bg-fill-error-hover);
    outline: var(--koerber-border-width-m) solid var(--koerber-color-border-error);
    color: var(--koerber-color-text-bg-fill);
  }

  .chip--danger-outline.chip--dragged {
    box-shadow: var(--koerber-shadow-card);
  }

  .chip--danger-outline.chip--disabled {
    outline: var(--koerber-border-width-s) solid var(--koerber-color-border-disabled);
    background: var(--koerber-color-bg-fill-disabled);
    color: var(--koerber-color-text-disabled);
  }

  .chip--danger-outline:active:not(.chip--disabled) {
    color: var(--koerber-color-text-error);
    outline: var(--koerber-border-width-s) solid var(--koerber-color-border-error);
    background-color: var(--koerber-color-bg-fill-secondary);
    box-shadow: var(--koerber-shadow-card);
  }

  .chip--info-outline {
    outline: var(--koerber-border-width-s) solid var(--koerber-color-border-info);
    color: var(--koerber-color-bg-fill-info);
  }

  .chip--info-outline:hover {
    background-color: var(--koerber-color-border-info-hover);
    color: var(--koerber-color-text-bg-fill);
    outline: none;
  }

  .chip--info-outline:focus-visible:not(.chip--disabled) {
    background-color: var(--koerber-color-border-info-hover);
    outline: var(--koerber-border-width-m) solid var(--koerber-color-border-info);
    color: var(--koerber-color-text-bg-fill);
  }

  .chip--info-outline.chip--dragged {
    box-shadow: var(--koerber-shadow-card);
  }

  .chip--info-outline.chip--disabled {
    outline: var(--koerber-border-width-s) solid var(--koerber-color-border-disabled);
    background: var(--koerber-color-bg-fill-disabled);
    color: var(--koerber-color-text-disabled);
  }

  .chip--info-outline:active:not(.chip--disabled) {
    color: var(--koerber-color-text-info);
    outline: var(--koerber-border-width-s) solid var(--koerber-color-border-info);
    background-color: var(--koerber-color-bg-fill-secondary);
    box-shadow: var(--koerber-shadow-card);
  }

  .chip--tertiary-outline {
    color: var(--koerber-color-text);
    outline: var(--koerber-border-width-s) solid var(--koerber-color-border);
  }

  .chip--tertiary-outline:hover {
    color: var(--koerber-color-text);
    outline: none;
    background: var(--koerber-color-bg-fill-secondary-hover);
  }

  .chip--tertiary-outline:focus-visible:not(.chip--disabled) {
    color: var(--koerber-color-text);
    background-color: var(--koerber-color-bg-fill-secondary-hover);
    outline: var(--koerber-border-width-m) solid var(--koerber-color-border-focus);
  }

  .chip--tertiary-outline.chip--selected {
    outline: var(--koerber-border-width-s) solid var(--koerber-color-border-active);
    color: var(--koerber-color-text);
  }

  .chip--tertiary-outline.chip--dragged {
    color: var(--koerber-color-text);
    outline: var(--koerber-border-width-s) solid var(--koerber-color-border-active);
    box-shadow: var(--koerber-shadow-card);
    background: var(--koerber-color-bg);
  }

  .chip--tertiary-outline.chip--disabled {
    outline: var(--koerber-border-width-s) solid var(--koerber-color-border-disabled);
    background: var(--koerber-color-bg-fill-disabled);
    color: var(--koerber-color-text-disabled);
  }

  .chip--tertiary-outline:active:not(.chip--disabled) {
    color: var(--koerber-color-text);
    outline: var(--koerber-border-width-s) solid var(--koerber-color-border);
    background-color: var(--koerber-color-bg-fill-secondary);
    box-shadow: var(--koerber-shadow-card);
  }
`;

export {
  chip_styles_default
};
//# sourceMappingURL=chunk.DCOOXT7L.js.map
