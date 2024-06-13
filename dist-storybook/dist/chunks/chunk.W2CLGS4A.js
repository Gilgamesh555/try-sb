// src/components/textarea/textarea.styles.ts
import { css } from "lit";
var textarea_styles_default = css`
  :host {
    display: block;
  }

  .textarea {
    display: flex;
    align-items: start;
    position: relative;
    width: 100%;
    font-family: var(--koerber-font-family-default);
    font-family: var(--koerber-font-family-default);
    font-weight: var(--koerber-font-weight-regular);
    line-height: var(--koerber-text-lg-line-height);
    letter-spacing: var(--koerber-letter-spacing-normal);
    vertical-align: middle;
    transition:
      var(--koerber-transition-fast) color,
      var(--koerber-transition-fast) border,
      var(--koerber-transition-fast) box-shadow,
      var(--koerber-transition-fast) background-color;
    cursor: text;
  }

  /* Standard textareas */
  .textarea--standard {
    background-color: var(--koerber-input-background-color);
    border: solid var(--koerber-border-width-s) var(--koerber-color-border);
  }

  .textarea--standard:hover:not(.textarea--disabled) {
    background-color: var(--koerber-input-background-color-hover);
    border-color: var(--koerber-color-border-hover);
  }
  .textarea--standard:hover:not(.textarea--disabled) .textarea__control {
    color: var(--koerber-input-color-hover);
  }

  .textarea--standard.textarea--focused:not(.textarea--disabled) {
    background-color: var(--koerber-input-background-color-focus);
    color: var(--koerber-input-color-focus);
    border-color: var(--koerber-color-border-focus);
  }

  .textarea--standard.textarea--focused:not(.textarea--disabled) .textarea__control {
    color: var(--koerber-input-color-focus);
  }

  .textarea--standard.textarea--disabled {
    background-color: var(--koerber-color-bg-fill-disabled);
    opacity: 0.5;
    cursor: not-allowed;
    border-color: var(--koerber-color-border-disabled);
  }

  .textarea--standard.textarea--disabled .textarea__control {
    color: var(--koerber-input-color-disabled);
  }

  .textarea--standard.textarea--disabled .textarea__control::placeholder {
    color: var(--koerber-color-text-tertiary-disabled);
  }

  .textarea--standard.textarea--error {
    border-color: var(--koerber-color-border-error);
  }

  .textarea__control {
    flex: 1 1 auto;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: 1.4;
    color: var(--koerber-input-color);
    border: none;
    background: none;
    box-shadow: none;
    cursor: inherit;
    -webkit-appearance: none;
  }

  .textarea__control::-webkit-search-decoration,
  .textarea__control::-webkit-search-cancel-button,
  .textarea__control::-webkit-search-results-button,
  .textarea__control::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  .textarea__control:-webkit-autofill,
  .textarea__control:-webkit-autofill:hover,
  .textarea__control:-webkit-autofill:focus,
  .textarea__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--koerber-height-size-comfortable) var(--koerber-color-bg) inset !important;
    caret-color: var(--koerber-color-text);
  }

  .textarea__control::placeholder {
    color: var(--koerber-color-text-tertiary);
    user-select: none;
  }

  .textarea__control:focus {
    outline: none;
  }

  /*
   * Size modifiers
   */

  .textarea--small {
    border-radius: var(--koerber-border-radius-small);
    font-size: var(--koerber-text-base-font-size);
  }

  .textarea--small .textarea__control {
    padding: var(--koerber-spacing-xs);
  }

  .textarea--medium {
    border-radius: var(--koerber-border-radius-medium);
    font-size: var(--koerber-text-md-font-size);
  }

  .textarea--medium .textarea__control {
    padding: var(--koerber-spacing-xs);
  }

  .textarea--large {
    border-radius: var(--koerber-border-radius-medium);
    font-size: var(--koerber-text-xl-font-size);
  }

  .textarea--large .textarea__control {
    padding: var(--koerber-spacing-xs);
  }

  /*
   * Resize types
   */

  .textarea--resize-none .textarea__control {
    resize: none;
  }

  .textarea--resize-vertical .textarea__control {
    resize: vertical;
  }

  .textarea--resize-auto .textarea__control {
    height: auto;
    resize: none;
    overflow-y: hidden;
  }

  /** Error */
  .textarea-error-icon-container {
    padding-right: var(--koerber-spacing-xs);
  }

  .textarea-error-icon {
    color: var(--koerber-color-icon-error);
  }
`;

export {
  textarea_styles_default
};
//# sourceMappingURL=chunk.W2CLGS4A.js.map
