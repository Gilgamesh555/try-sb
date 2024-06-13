// src/components/radio-button/radio-button.styles.ts
import { css } from "lit";
var radio_button_styles_default = css`
  .button__prefix,
  .button__suffix,
  .button__label {
    display: inline-flex;
    position: relative;
    align-items: center;
  }

  .button--default:not(.button--disabled) {
    background-color: var(--koerber-color-bg-surface-secondary);
    color: var(--koerber-color-text-secondary);
    border: none;
  }

  .button--checked:not(.button--disabled) {
    background-color: var(--koerber-color-bg-fill);
    color: var(--koerber-color-text-bg-fill);
    border: none;
  }

  .button:hover:not(.button--disabled) {
    background-color: var(--koerber-color-bg-fill-hover);
    border: none;
    color: var(--koerber-color-text-bg-fill);
  }

  .button:active:not(.button--disabled) {
    background-color: var(--koerber-color-bg-fill-pressed);
    border-color: none;
    color: var(--koerber-color-text-bg-fill);
  }

  .button--disabled {
    background-color: var(--koerber-color-bg-fill-disabled);
    border: none;
    color: var(--koerber-color-text-disabled);
  }

  /* We use a hidden input so constraint validation errors work, since they don't appear to show when used with buttons.
    We can't actually hide it, though, otherwise the messages will be suppressed by the browser. */
  .hidden-input {
    all: unset;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    outline: dotted 1px red;
    opacity: 0;
    z-index: -1;
  }
`;

export {
  radio_button_styles_default
};
//# sourceMappingURL=chunk.5HGDZHSE.js.map
