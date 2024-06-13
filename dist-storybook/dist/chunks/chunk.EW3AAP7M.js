// src/components/radio/radio.styles.ts
import { css } from "lit";
var radio_styles_default = css`
  :host {
    display: block;
    --koerber-radio-size-medium: 14px;
    --component-height-standard: 19px;
    --component-height-comfortable: 22px;
    padding: var(--spacing);
    cursor: pointer;
  }

  koerber-icon {
    --koerber-icon-size-medium: 10px;
  }

  :host(:focus-visible) {
    outline: 0px;
  }

  :host([disabled]) {
    cursor: not-allowed;
  }

  .radio {
    display: flex;
    align-items: center;
    font-family: var(--koerber-font-family-default);
    font-size: var(--koerber-text-md-font-size);
    font-weight: var(--koerber-font-weight-regular);
    color: inherit;
    vertical-align: middle;
    cursor: pointer;
  }

  .radio--standard {
    --toggle-size: var(--koerber-radio-size-medium);
    font-size: var(--koerber-text-base-font-size);
  }

  .radio--comfortable {
    --toggle-size: var(--koerber-radio-size-medium);
    font-size: var(--koerber-text-md-font-size);
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

  .radio__control {
    display: flex;
    align-items: center;
    margin-right: var(--koerber-spacing-xs);
    width: var(--koerber-radio-size-medium);
    height: var(--koerber-radio-size-medium);
    border: solid var(--koerber-border-width-s) var(--koerber-color-border);
    border-radius: 50%;
    background-color: var(--koerber-color-bg);
    color: transparent;
    transition:
      var(--koerber-transition-fast) border-color,
      var(--koerber-transition-fast) background-color,
      var(--koerber-transition-fast) color,
      var(--koerber-transition-fast) box-shadow;
  }

  .radio__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  /* Hover */
  .radio:not(.radio--checked):not(.radio--disabled) .radio__control:hover {
    border-color: var(--koerber-color-border-hover);
    background-color: var(--koerber-color-bg);
  }

  /* Focus */
  .radio:not(.radio--checked):not(.radio--disabled) .radio__input:focus-visible ~ .radio__control {
    outline: solid var(--koerber-border-width-m) var(--koerber-color-bg-fill);
    border-color: var(--koerber-color-border-hover);
    outline-offset: var(--koerber-border-offset);
  }

  /* Checked */
  .radio--checked .radio__control {
    margin-right: var(--koerber-spacing-xs);
    border-color: var(--koerber-color-border-focus);
    color: var(--koerber-color-text-link);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Checked + hover */
  .radio.radio--checked:not(.radio--disabled) .radio__control:hover {
    border-color: var(--koerber-color-border-hover);
    color: var(--koerber-color-text-link-hover);
  }

  .radio__label {
    margin-inline-start: 0.5em;
    user-select: none;
  }

  .radio__label:not(.radio--disabled) {
    color: inherit;
  }

  /* Checked + focus */
  :host(:focus-visible) .radio__control {
    outline: solid var(--koerber-border-width-m) var(--koerber-color-bg-fill);
    border-color: var(--koerber-color-border-focus);
    outline-offset: var(--koerber-border-offset);
  }

  /* Disabled */
  .radio--disabled .radio__label {
    color: var(--koerber-color-text-disabled);
  }

  .radio--error .radio__control {
    outline: solid var(--koerber-border-width-m) var(--koerber-color-border-error);
    border-color: var(--koerber-color-border-focus);
    outline-offset: var(--koerber-border-offset);
  }

  .radio--disabled .radio__control {
    border-color: var(--koerber-color-text-disabled);
  }

  .radio--disabled {
    cursor: not-allowed;
  }

  /* When the control isn't checked, hide the circle for Windows High Contrast mode a11y */
  .radio:not(.radio--checked) svg circle {
    opacity: 0;
  }
`;

export {
  radio_styles_default
};
//# sourceMappingURL=chunk.EW3AAP7M.js.map
