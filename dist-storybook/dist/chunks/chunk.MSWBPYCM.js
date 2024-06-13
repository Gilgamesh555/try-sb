// src/components/input/input.styles.ts
import { css } from "lit";
var input_styles_default = css`
  :host {
    display: block;
    --koerber-input-top-bottom-padding: 12px;
    --koerber-input-divider-height-medium: 16px;
    --koerber-input-divider-height-large: 24px;
    --koerber-input-divider-margin-small: 8px 0px 8px 0px;
    --koerber-input-divider-margin-medium: 12px 0px 12px 0px;
  }

  .form-control {
    border: none;
    padding: 0;
    margin: 0;
    font-family: var(--koerber-font-family-default);
  }

  .input {
    flex: 1 1 auto;
    display: inline-flex;
    align-items: stretch;
    justify-content: start;
    position: relative;
    width: 100%;
    font-family: var(--koerber-font-family-default);
    font-weight: var(--koerber-font-weight-regular);
    letter-spacing: var(--koerber-letter-spacing-normal);
    vertical-align: middle;
    overflow: hidden;
    cursor: text;
    transition:
      var(--koerber-transition-fast) color,
      var(--koerber-transition-fast) border,
      var(--koerber-transition-fast) box-shadow,
      var(--koerber-transition-fast) background-color;
  }

  /* Standard inputs */
  .input--standard {
    background-color: var(--koerber-color-bg);
    border: solid var(--koerber-border-width-s) var(--koerber-color-border);
  }

  .input--standard:hover:not(.input--disabled) {
    background-color: var(--koerber-color-bg);
    border-color: var(--koerber-color-border-hover);
  }

  .input--standard.input--focused:not(.input--disabled) {
    background-color: var(--koerber-color-bg);
    border-color: var(--koerber-color-border-focus);
    box-shadow: 0 0 0 var(--koerber-border-width-m) var(--koerber-color-border-focus);
  }

  .input--standard.input--focused:not(.input--disabled) .input__control {
    color: var(--koerber-color-text);
  }

  .input--standard.input--disabled {
    background-color: var(--koerber-color-bg-fill-disabled);
    border-color: var(--koerber-color-border-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input--standard.input--disabled .input__control {
    color: var(--koerber-color-text-disabled);
  }

  .input--standard.input--disabled .input__control::placeholder {
    color: var(--koerber-color-text-disabled);
  }

  .input__control {
    flex: 1 1 auto;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    min-width: 0;
    height: 100%;
    color: var(--koerber-color-text);
    border: none;
    background: inherit;
    box-shadow: none;
    padding: 0;
    margin: 0;
    cursor: inherit;
    -webkit-appearance: none;
  }

  .input__control::-webkit-search-decoration,
  .input__control::-webkit-search-cancel-button,
  .input__control::-webkit-search-results-button,
  .input__control::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  .input__control:-webkit-autofill,
  .input__control:-webkit-autofill:hover,
  .input__control:-webkit-autofill:focus,
  .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--koerber-height-size-comfortable) var(--koerber-color-bg) inset !important;
    caret-color: var(--koerber-color-text);
  }

  .input__control::placeholder {
    color: var(--koerber-color-text-tertiary);
    user-select: none;
  }

  .input:hover:not(.input--disabled) .input__control {
    color: var(--koerber-color-text);
  }

  .input__control:focus {
    outline: none;
  }

  .input__prefix,
  .input__suffix {
    display: inline-flex;
    flex: 0 0 auto;
    align-items: center;
    cursor: default;
  }

  .input__prefix::slotted(koerber-icon),
  .input__suffix::slotted(koerber-icon) {
    color: var(--koerber-color-icon-secondary);
  }

  /*
   * Size modifiers
   */

  .input--small {
    border-radius: var(--koerber-border-radius-small);
    font-size: var(--koerber-text-base-font-size);
    height: var(--koerber-height-size-compact);
  }

  .input--small .input__control {
    height: var(--koerber-height-size-compact);
    padding: var(--koerber-spacing-xs) var(--koerber-spacing-xs);
  }

  .input--small .input__clear,
  .input--small .input__decrease,
  .input--small .input__password-toggle {
    margin: var(--koerber-spacing-xs) var(--koerber-spacing-xs) var(--koerber-spacing-xs) 0px;
  }

  .input--small .input__increase {
    margin: var(--koerber-spacing-xs);
  }

  .input--small .input__prefix {
    margin: var(--koerber-spacing-xs);
  }

  .input--small .input__suffix {
    margin: var(--koerber-spacing-xs) var(--koerber-spacing-xs) var(--koerber-spacing-xs) 0px;
  }

  .input--medium {
    border-radius: var(--koerber-border-radius-medium);
    font-size: var(--koerber-text-md-font-size);
    height: var(--koerber-height-size-standard);
  }

  .input--medium .input__control {
    height: var(--koerber-height-size-standard);
    padding: var(--koerber-spacing-s) var(--koerber-spacing-xs);
  }

  .input--medium .input__clear,
  .input--medium .input__decrease,
  .input--medium .input__password-toggle {
    margin: var(--koerber-spacing-xs) var(--koerber-spacing-xs) var(--koerber-spacing-xs) 0px;
  }

  .input--medium .input__increase {
    margin: var(--koerber-spacing-xs);
  }

  .input--medium .input__prefix {
    margin: var(--koerber-spacing-xs);
  }

  .input--medium .input__suffix {
    margin: var(--koerber-spacing-xs) var(--koerber-spacing-xs) var(--koerber-spacing-xs) 0px;
  }

  .input--large {
    border-radius: var(--koerber-border-radius-medium);
    font-size: var(--koerber-text-xl-font-size);
    height: var(--koerber-height-size-comfortable);
  }

  .input--large .input__control {
    height: var(--koerber-height-size-comfortable);
    padding: var(--koerber-input-top-bottom-padding) var(--koerber-spacing-xs);
  }

  .input--large .input__clear,
  .input--large .input__decrease,
  .input--large .input__password-toggle {
    margin: var(--koerber-spacing-xs) var(--koerber-spacing-xs) var(--koerber-spacing-xs) 0px;
  }

  .input--large .input__increase {
    margin: var(--koerber-spacing-xs);
  }

  .input--large .input__prefix {
    margin: var(--koerber-spacing-xs);
  }

  .input--large .input__suffix {
    margin: var(--koerber-spacing-xs) var(--koerber-spacing-xs) var(--koerber-spacing-xs) 0px;
  }

  /*
   * Buttons
   */

  .input__clear,
  .input__decrease,
  .input__increase,
  .input__password-toggle {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: inherit;
    color: var(--koerber-color-icon-secondary);
    border: none;
    background: none;
    padding: 0;
    transition: var(--koerber-transition-fast) color;
    cursor: pointer;
  }

  .divider__vertical {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: inherit;
    width: 0;
  }
  .input--small .divider__vertical {
    margin: var(--koerber-input-divider-margin-small);
    height: var(--koerber-input-divider-height-medium);
  }
  .input--medium .divider__vertical {
    margin: var(--koerber-input-divider-margin-medium);
    height: var(--koerber-input-divider-height-medium);
  }
  .input--large .divider__vertical {
    margin: var(--koerber-input-divider-margin-medium);
    height: var(--koerber-input-divider-height-large);
  }

  .input__clear:hover,
  .input__decrease:hover,
  .input__increase:hover,
  .input__password-toggle:hover {
    color: var(--koerber-color-icon-hover);
  }

  .input__clear:focus,
  .input__decrease:focus,
  .input__increase:focus,
  .input__password-toggle:focus {
    outline: none;
  }

  .input--empty .input__clear {
    visibility: hidden;
  }

  /* Don't show the browser's password toggle in Edge */
  ::-ms-reveal {
    display: none;
  }

  /* Hide the built-in number spinner */
  .input--no-spin-buttons input[type='number']::-webkit-outer-spin-button,
  .input--no-spin-buttons input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    display: none;
  }

  .input--no-spin-buttons input[type='number'] {
    -moz-appearance: textfield;
  }

  /* Error inputs */

  .input-error-icon {
    color: var(--koerber-color-text-error);
  }

  .input--error {
    background-color: var(--koerber-color-bg);
    border: solid var(--koerber-border-width-s) var(--koerber-color-bg-fill-error);
  }

  .input-error-icon-slot {
    display: flex;
    align-items: center;
    margin: var(--koerber-spacing-xs) var(--koerber-spacing-xs) var(--koerber-spacing-xs) 0px;
    justify-content: center;
  }
`;

export {
  input_styles_default
};
//# sourceMappingURL=chunk.MSWBPYCM.js.map
