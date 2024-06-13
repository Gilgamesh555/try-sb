// src/components/toggle/toggle.styles.ts
import { css } from "lit";
var toggle_styles_default = css`
  :host {
    display: inline-block;
    --koerber-toggle-required-content: '*';
    --koerber-toggle-required-content-offset: -2px;
    --koerber-toggle-size: 20px;
  }

  :host([size='standard']) {
    --height: var(--koerber-toggle-size);
    --thumb-size: calc(var(--koerber-toggle-size) - 0.2rem);
    --width: calc(var(--height) * 2);

    font-size: var(--koerber-text-base-font-size);
    --padding: 2px;
  }

  :host([size='comfortable']) {
    position: relative;
    display: inline-block;
    align-items: center;
    justify-content: center;
    --height: var(--koerber-toggle-size);
    --thumb-size: calc(var(--koerber-toggle-size) - 0.2rem);
    --width: calc(var(--height) * 2);

    font-size: var(--koerber-text-md-font-size);
    --padding: 14px var(--koerber-spacing-s) 14px var(--koerber-spacing-s);
  }

  :host([disabled]) {
    cursor: not-allowed;
  }

  .toggle {
    position: relative;
    display: flex;
    align-items: center;
    font-family: var(--koerber-font-family-default);
    font-size: inherit;
    font-weight: var(--koerber-font-weight-regular);
    color: inherit;
    vertical-align: middle;
    cursor: pointer;
    padding: var(--padding);
  }

  .toggle__control {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--width);
    height: var(--height);
    border: solid var(--koerber-border-width-s) var(--koerber-color-border);
    border-radius: var(--height);
    transition:
      var(--koerber-transition-fast) border-color,
      var(--koerber-transition-fast) background-color;
  }

  .toggle__control .toggle__thumb {
    width: calc(var(--thumb-size) - 0.13rem);
    height: calc(var(--thumb-size) - 0.13rem);
    background-color: var(--koerber-color-bg-fill-secondary);
    border-radius: 50%;
    border: solid var(--koerber-border-width-s) var(--koerber-color-border);
    translate: calc((var(--width) - var(--height)) / -2);
    transition:
      var(--koerber-transition-fast) translate ease,
      var(--koerber-transition-fast) background-color,
      var(--koerber-transition-fast) border-color,
      var(--koerber-transition-fast) box-shadow;
  }

  .toggle__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  /* Hover */
  .toggle:not(.toggle--checked):not(.toggle--disabled) .toggle__control:hover {
    border-color: var(--koerber-color-border-hover);
  }

  .toggle:not(.toggle--checked):not(.toggle--disabled) .toggle__control:hover .toggle__thumb {
    border-color: var(--koerber-color-border-hover);
  }

  /* Focus */
  .toggle:not(.toggle--checked):not(.toggle--disabled) .toggle__input:focus-visible ~ .toggle__control {
    border-color: var(--koerber-color-border-focus);
  }

  .toggle:not(.toggle--checked):not(.toggle--disabled) .toggle__input:focus-visible ~ .toggle__control .toggle__thumb {
    background-color: var(--koerber-color-bg-fill-secondary);
    border-color: var(--koerber-color-border-hover);
    outline: var(--koerber-focus-ring);
    outline-offset: var(--koerber-border-offset);
  }

  /* Checked */
  .toggle--checked .toggle__control {
    background-color: var(--koerber-color-bg-fill);
    border-color: var(--koerber-color-border-focus);
  }

  /* Error */
  .toggle--error .toggle__control {
    border-color: var(--koerber-color-border-error);
  }

  .toggle--checked .toggle__control .toggle__thumb {
    background-color: var(--koerber-color-bg-fill-secondary);
    border-color: var(--koerber-color-border-focus);
    translate: calc((var(--width) - var(--height)) / 2);
  }

  /* Checked + hover */
  .toggle.toggle--checked:not(.toggle--disabled) .toggle__control:hover {
    border-color: var(--koerber-color-border-hover);
    background-color: var(--koerber-color-bg-fill-hover);
  }

  .toggle.toggle--checked:not(.toggle--disabled) .toggle__control:hover .toggle__thumb {
    border-color: var(--koerber-color-border-hover);
  }

  /* Checked + focus */
  .toggle.toggle--checked:not(.toggle--disabled) .toggle__input:focus-visible ~ .toggle__control {
    background-color: var(--koerber-color-bg-fill);
    border-color: var(--koerber-color-border-focus);
    outline: solid var(--koerber-border-width-m) var(--koerber-color-bg-fill);
    outline-offset: var(--koerber-border-offset);
  }

  /* Disabled */
  .toggle--disabled {
    cursor: not-allowed;
    border-color: var(--koerber-color-border-disabled);
    color: var(--koerber-color-text-disabled);
  }

  /* Checked + Disabled Thumb */
  .toggle.toggle--checked.toggle--disabled .toggle__input:disabled ~ .toggle__control {
    background-color: var(--koerber-color-bg-fill-disabled);
    border-color: var(--koerber-color-border-disabled);
    color: var(--koerber-color-text-disabled);
  }

  /* Checked + Disabled Thumb */
  .toggle.toggle--checked.toggle--disabled .toggle__control .toggle__thumb {
    background-color: var(--koerber-color-bg-fill-tertiary); /* Adjust as needed */
    border-color: var(--koerber-color-border-disabled); /* Adjust as needed */
    cursor: not-allowed;
  }

  /* Unchecked + Disabled */
  .toggle:not(.toggle--checked).toggle--disabled .toggle__input:disabled ~ .toggle__control {
    background-color: var(--koerber-color-bg-fill-disabled);
    color: var(--koerber-color-text-disabled);
  }

  /* Unchecked + Disabled Thumb */
  .toggle:not(.toggle--checked).toggle--disabled .toggle__control .toggle__thumb {
    background-color: var(--koerber-color-bg-fill-disabled);
    cursor: not-allowed;
  }

  .toggle__label {
    display: inline-block;
    line-height: var(--height);
    margin-inline-start: var(--koerber-spacing-xs);
    user-select: none;
  }

  :host([required]) .toggle__label::after {
    content: var(--koerber-toggle-required-content);
    margin-inline-start: var(--koerber-toggle-required-content-offset);
  }

  @media (forced-colors: active) {
    .toggle.toggle--checked:not(.toggle--disabled) .toggle__control:hover .toggle__thumb,
    .toggle--checked .toggle__control .toggle__thumb {
      background-color: ButtonText;
    }
  }
`;

export {
  toggle_styles_default
};
//# sourceMappingURL=chunk.JCSPM4FV.js.map
