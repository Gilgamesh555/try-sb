// src/components/select-option/select-option.styles.ts
import { css } from "lit";
var select_option_styles_default = css`
  :host {
    display: block;
    user-select: none;
  }

  :host(:focus) {
    outline: none;
  }

  .select-option {
    position: relative;
    display: flex;
    align-items: center;
    color: var(--koerber-color-text-secondary);
    padding: var(--koerber-spacing-xs) var(--koerber-spacing-s) var(--koerber-spacing-xs) var(--koerber-spacing-xs);
    transition: var(--koerber-transition-fast) fill;
    cursor: pointer;
    letter-spacing: var(--koerber-letter-spacing-normal);
  }

  .select-option--small {
    height: var(--koerber-height-size-compact);
    font-size: var(--koerber-text-base-font-size);
    line-height: var(--koerber-text-3xl-line-height);
  }

  .select-option--medium {
    height: var(--koerber-height-size-standard);
    font-size: var(--koerber-text-md-font-size);
    line-height: var(--koerber-text-3xl-line-height);
  }

  .select-option--large {
    height: var(--koerber-height-size-comfortable);
    font-size: var(--koerber-text-xl-font-size);
    line-height: var(--koerber-text-3xl-line-height);
  }

  .select-option-label--small {
    font-size: var(--koerber-text-base-font-size);
  }

  .select-option-label--medium {
    font-size: var(--koerber-text-md-font-size);
  }

  .select-option-label--large {
    font-size: var(--koerber-text-xl-font-size);
  }

  koerber-icon::part(base) {
    width: 100px;
  }

  .select-option--hover:not(.select-option--selected):not(.select-option--disabled) {
    background-color: var(--koerber-color-bg-surface-secondary-hover);
    color: var(--koerber-color-text-link);
  }

  .select-option--current:not(.select-option--selected):not(.select-option--disabled) {
    background-color: var(--koerber-color-bg-surface-secondary-hover);
    color: var(--koerber-color-text-link);
  }

  .select-option--selected:not(.select-option--disabled) {
    background-color: var(--koerber-color-bg-surface-secondary-hover);
    color: var(--koerber-color-text-link);
  }

  .select-option--selected,
  .select-option--selected.select-option--disabled {
    color: var(--koerber-color-text-link);
    opacity: 1;
  }

  .select-option--disabled {
    outline: none;
    opacity: 0.5;
    cursor: not-allowed;
  }

  .select-option__label {
    flex: 1 1 auto;
    display: inline-block;
  }

  .select-option__checkbox {
    padding: 4px 12px 4px 4px;
  }

  .select-option .select-option__check {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    visibility: hidden;
    padding-inline-end: var(--koerber-spacing-2xs);
  }

  .select-option--selected .select-option__check {
    visibility: visible;
  }

  .select-option__prefix,
  .select-option__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .select-option__prefix::slotted(*) {
    margin-inline-end: var(--koerber-spacing-xs);
  }

  .select-option__suffix::slotted(*) {
    margin-inline-start: var(--koerber-spacing-xs);
  }

  @media (forced-colors: active) {
    :host(:hover:not([aria-disabled='true'])) .select-option {
      outline: dashed 1px SelectedItem;
      outline-offset: -1px;
    }
  }
`;

export {
  select_option_styles_default
};
//# sourceMappingURL=chunk.M2JUVWWL.js.map
