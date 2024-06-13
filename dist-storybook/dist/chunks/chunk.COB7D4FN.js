// src/components/checkbox/checkbox.styles.ts
import { css } from "lit";
var checkbox_styles_default = css`
  :host {
    display: block;
    --koerber-checkbox-required-content: '*';
    --koerber-checkbox-required-content-offset: -2px;
    --koerber-checkbox-size-medium: 16px;
    --component-height-standard: 20px;
    --component-height-comfortable: 22px;
  }

  :host([disabled]) {
    cursor: not-allowed;
  }

  :host([size='standard']) {
    --spacing: calc(
      (var(--koerber-clickable-size-standard) - var(--component-height-standard)) / 2
    ); // Half of 24px and minus component to create a 24px high clickable area
  }

  :host([size='comfortable']) {
    --spacing: calc(
      (var(--koerber-clickable-size-comfortable) - var(--component-height-comfortable)) / 2
    ); // Half of 48px and minus component size to create a 48px high clickable area
  }

  .checkbox {
    position: relative;
    display: inline-flex;
    align-items: center; /* Centering vertically */
    font-family: var(--koerber-font-family-default);
    font-weight: var(--koerber-font-weight-regular);
    color: inherit;
    vertical-align: middle;
    cursor: pointer;
  }

  .checkbox--standard {
    --toggle-size: var(--koerber-checkbox-size-medium);
    font-size: var(--koerber-text-base-font-size);
  }

  .checkbox--comfortable {
    --toggle-size: var(--koerber-checkbox-size-medium);
    font-size: var(--koerber-text-md-font-size);
  }

  .checkbox-wrapper {
    display: inline-flex;
    align-items: center; /* Centering vertically */
    padding: var(--spacing);
    cursor: pointer;
  }

  .checkbox-wrapper input {
    cursor: pointer;
  }

  .checkbox__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-right: var(--koerber-spacing-xs);
    width: var(--koerber-checkbox-size-medium);
    height: var(--koerber-checkbox-size-medium);
    border: solid var(--koerber-border-width-s) var(--koerber-color-border);
    border-radius: 2px;
    background-color: var(--koerber-color-bg);
    transition:
      var(--koerber-transition-fast) border-color,
      var(--koerber-transition-fast) background-color,
      var(--koerber-transition-fast) color,
      var(--koerber-transition-fast) box-shadow;
  }

  .checkbox__input {
    position: absolute;
    opacity: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    cursor: pointer;
  }

  .checkbox__checked-icon,
  .checkbox__indeterminate-icon {
    display: inline-flex;
    width: var(--toggle-size);
    height: var(--toggle-size);
    color: var(--koerber-color-text-bg-fill);
  }

  /* Hover */
  .checkbox:not(.checkbox--checked):not(.checkbox--disabled) .checkbox__control:hover {
    border-color: var(--koerber-color-border-hover);
    background-color: var(--koerber-color-bg);
  }

  /* Focus */
  .checkbox:not(.checkbox--checked):not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control {
    outline: solid var(--koerber-border-width-m) var(--koerber-color-bg-fill);
    border-color: var(--koerber-color-border-hover);
    outline-offset: var(--koerber-border-offset);
  }

  /* Checked/indeterminate */
  .checkbox--checked .checkbox__control,
  .checkbox--indeterminate .checkbox__control {
    border-color: var(--koerber-color-border-focus);
    background-color: var(--koerber-color-bg-fill);
  }

  /* Checked/indeterminate + hover */
  .checkbox.checkbox--checked:not(.checkbox--disabled) .checkbox__control:hover,
  .checkbox.checkbox--indeterminate:not(.checkbox--disabled) .checkbox__control:hover {
    border-color: var(--koerber-color-border-hover);
    background-color: var(--koerber-color-bg-fill-hover);
  }

  /* Checked/indeterminate + focus */
  .checkbox.checkbox--checked:not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control,
  .checkbox.checkbox--indeterminate:not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control {
    outline: solid var(--koerber-border-width-m) var(--koerber-color-bg-fill);
    border-color: var(--koerber-color-border-focus);
    outline-offset: var(--koerber-border-offset);
  }

  /* Disabled */
  .checkbox--disabled {
    cursor: not-allowed;
    border-color: var(--koerber-color-border-disabled);
    color: var(--koerber-color-icon-disabled);
  }

  /* Error */
  .checkbox--error .checkbox__control {
    border-color: var(--koerber-color-border-error);
  }

  /* checkbox unchecked disabled */
  .checkbox.checkbox--disabled .checkbox__control {
    border-color: var(--koerber-color-border-disabled);
  }

  /* Checked/indeterminate + disabled */
  .checkbox.checkbox--checked.checkbox--disabled .checkbox__control,
  .checkbox.checkbox--indeterminate.checkbox--disabled .checkbox__control {
    background-color: var(--koerber-color-bg-fill-disabled);
    border-color: var (--koerber-color-border-disabled);
  }

  .checkbox__checked .checkbox__control {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .checkbox__label {
    display: inline-flex;
    align-items: center;
    color: inherit;
    margin-inline-start: 0.5em;
    user-select: none;
  }

  :host([required]) .checkbox__label::after {
    content: var(--koerber-checkbox-required-content);
    margin-inline-start: var(--koerber-checkbox-required-content-offset);
  }
`;

export {
  checkbox_styles_default
};
//# sourceMappingURL=chunk.COB7D4FN.js.map
