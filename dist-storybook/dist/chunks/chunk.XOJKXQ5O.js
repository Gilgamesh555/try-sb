// src/components/button/button.styles.ts
import { css } from "lit";
var button_styles_default = css`
  :host {
    display: inline-block;
    position: relative;
    width: auto;
    cursor: pointer;
    --koerber-padding: 10px;
  }

  .button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    border-style: solid;
    border-width: var(--koerber-border-width-s);
    font-family: var(--koerber-font-family-default);
    font-weight: var(--koerber-font-weight-bold);
    text-decoration: none;
    user-select: none;
    white-space: nowrap;
    vertical-align: middle;
    padding: 0;
    transition:
      var(--koerber-transition-x-fast) background-color,
      var(--koerber-transition-x-fast) color,
      var(--koerber-transition-x-fast) border,
      var(--koerber-transition-x-fast) box-shadow;
    cursor: inherit;
    gap: var(--koerber-spacing-xs);
  }

  .button::-moz-focus-inner {
    border: 0;
  }

  .button:focus {
    outline: none;
  }

  .button--primary:focus-visible {
    outline: solid var(--koerber-border-width-m) var(--koerber-color-bg-fill);
    outline-offset: var(--koerber-border-offset);
  }

  .button--danger:focus-visible,
  .button--secondary-danger:focus-visible:not(.button--disabled),
  .button--ghost-danger:focus-visible:not(.button--disabled) {
    outline: solid var(--koerber-border-width-m) var(--koerber-color-text-error);
    outline-offset: var(--koerber-border-offset);
  }

  .button--disabled {
    cursor: not-allowed;
    color: var(--koerber-color-text-disabled);
  }

  /* When disabled, prevent mouse events from bubbling up from children */
  .button--disabled * {
    pointer-events: none;
  }

  .button__label {
    display: inline-block;
  }

  .button__label::slotted(koerber-icon) {
    vertical-align: -2px;
  }

  /*
   * Standard buttons
   */

  /* Primary */

  .button--standard.button--primary:focus-visible:not(.button--disabled) {
    background-color: var(--koerber-color-bg-fill-hover);
    border-color: var(--koerber-color-border-hover);
  }

  .button--standard.button--primary {
    background-color: var(--koerber-color-bg-fill);
    border-color: var(--koerber-color-border-focus);
    color: var(--koerber-color-text-bg-fill);
  }

  .button--standard.button--primary:hover:not(.button--disabled) {
    background-color: var(--koerber-color-bg-fill-hover);
    border-color: var(--koerber-color-border-hover);
    color: var(--koerber-color-text-bg-fill);
  }

  .button--standard.button--primary:active:not(.button--disabled) {
    background-color: var(--koerber-color-bg-fill-pressed);
    border-color: var(--koerber-color-border-pressed);
    color: var(--koerber-color-text-bg-fill);
  }

  .button--standard.button--primary:disabled {
    background-color: var(--koerber-color-bg-fill-disabled);
    border-color: var(--koerber-color-border-secondary);
    color: var(--koerber-color-text-disabled);
  }

  /* Secondary */

  .button--secondary:focus-visible:not(.button--disabled),
  .button--tertiary:focus-visible:not(.button--disabled) {
    background-color: var(--koerber-color-bg-fill-hover);
    color: var(--koerber-color-text-bg-fill);
    border-color: var(--koerber-color-border-hover);
    outline: solid var(--koerber-border-width-m) var(--koerber-color-bg-fill);
    outline-offset: var(--koerber-border-offset);
  }

  .button--secondary {
    background-color: var(--koerber-color-bg-fill);
    border-color: var(--koerber-color-bg-fill);
    color: var(--koerber-color-bg-fill);
    background: none;
    border: solid 2px;
  }

  .button--secondary:hover:not(.button--disabled) {
    background-color: var(--koerber-color-bg-fill-hover);
    border-color: var(--koerber-color-bg-fill-hover);
    color: var(--koerber-color-bg);
  }

  .button--secondary:active:not(.button--disabled) {
    background-color: var(--koerber-color-bg-fill-pressed);
    border-color: var(--koerber-color-bg-fill-pressed);
    color: var(--koerber-color-bg);
  }

  .button--secondary:disabled {
    background-color: transparent;
    border-color: var(--koerber-color-border-secondary);
    color: var(--koerber-color-text-disabled);
  }

  /* Danger */

  .button--standard.button--danger:focus-visible:not(.button--disabled) {
    background-color: var(--koerber-color-bg-fill-error-hover);
    border-color: var(--koerber-color-border-error-hover);
  }

  .button--standard.button--danger {
    background-color: var(--koerber-color-bg-fill-error);
    border-color: var(--koerber-color-border-error);
    color: var(--koerber-color-text-bg-fill);
  }

  .button--standard.button--danger:hover:not(.button--disabled) {
    background-color: var(--koerber-color-bg-fill-error-hover);
    border-color: var(--koerber-color-border-error-hover);
    color: var(--koerber-color-text-bg-fill);
  }

  .button--standard.button--danger:active:not(.button--disabled) {
    background-color: var(--koerber-color-bg-fill-error-pressed);
    border-color: var(--koerber-color-bg-fill-error-pressed);
    color: var(--koerber-color-text-bg-fill);
  }

  .button--standard.button--danger:disabled {
    background-color: var(--koerber-color-bg-fill-disabled);
    border-color: var(--koerber-color-border-secondary);
    color: var(--koerber-color-text-disabled);
  }

  /* Danger */

  .button--danger:focus-visible:not(.button--disabled),
  .button--secondary-danger:focus-visible:not(.button--disabled),
  .button--ghost-danger:focus-visible:not(.button--disabled) {
    background-color: var(--koerber-color-bg-fill-error-hover);
    border-color: var(--koerber-color-border-error-hover);
    color: var(--koerber-color-text-bg-fill);
  }

  .button--danger {
    border-color: var(--koerber-color-bg-fill-error);
    color: var(--koerber-color-bg-fill-error);
  }

  .button--danger:hover:not(.button--disabled),
  .button--danger.button--checked:not(.button--disabled) {
    background-color: var(--koerber-color-bg-fill-error-hover);
    border-color: var(--koerber-color-border-error-hover);
    color: var(--koerber-color-text-bg-fill);
  }

  .button--danger:active:not(.button--disabled) {
    border-color: var(--koerber-color-bg-fill-error-pressed);
    background-color: var(--koerber-color-bg-fill-error-pressed);
    color: var(--koerber-color-text-bg-fill);
  }

  .button--secondary:disabled {
    border-color: var(--koerber-color-border-secondary);
    color: var(--koerber-color-text-disabled);
  }

  /* Secondary Danger */

  .button--secondary-danger {
    background-color: var(--koerber-color-bg);
    color: var(--koerber-color-text-error);
    border-color: var(--koerber-color-border-error);
  }

  .button--secondary-danger:hover:not(.button--disabled) {
    background-color: var(--koerber-color-bg-fill-error-hover);
    border-color: var(--koerber-color-border-error-hover);
    color: var(--koerber-color-text-bg-fill);
  }

  .button--secondary-danger:active:not(.button--disabled) {
    background-color: var(--koerber-color-bg-fill-error-pressed);
    border-color: var(--koerber-color-bg-fill-error-pressed);
    color: var(--koerber-color-text-bg-fill);
  }

  .button--secondary-danger:disabled {
    background-color: transparent;
    border-color: var(--koerber-color-border-secondary);
    color: var(--koerber-color-text-disabled);
  }

  @media (forced-colors: active) {
    .button.button--secondary.button--checked:not(.button--disabled) {
      outline: solid 2px transparent;
    }
  }

  /*
   * Ghost buttons
   */

  .button--ghost {
    background-color: transparent;
    border-color: transparent;
    color: var(--koerber-color-bg-fill);
  }

  .button--ghost:focus-visible {
    outline: solid var(--koerber-border-width-m) var(--koerber-color-bg-fill);
    outline-offset: var(--koerber-border-offset);
  }

  .button--ghost:focus-visible:not(.button--disabled) {
    background-color: var(--koerber-color-bg-fill-hover);
    border-color: var(--koerber-color-border-hover);
    border-radius: var(--koerber-border-radius-small);
    color: var(--koerber-color-text-bg-fill);
  }

  .button--ghost:hover:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--koerber-color-bg-fill-hover);
  }

  .button--ghost:active:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--koerber-color-bg-fill-pressed);
  }

  .button--ghost:disabled {
    color: var(--koerber-color-text-disabled);
  }

  /*
  * Ghost danger
  */

  .button--ghost-danger {
    background-color: transparent;
    border-color: transparent;
    color: var(--koerber-color-text-error);
  }

  .button--ghost-danger:focus-visible:not(.button--disabled) {
    background-color: var(--koerber-color-bg-fill-error-hover);
    border-color: var(--koerber-color-border-error-hover);
    border-radius: var(--koerber-border-radius-small);
    color: var(--koerber-color-text-bg-fill);
  }

  .button--ghost-danger:hover:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--koerber-color-bg-fill-error-hover);
  }

  .button--ghost-danger:active:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--koerber-color-bg-fill-error-pressed);
  }

  .button--ghost-danger:disabled {
    color: var(--koerber-color-text-disabled);
  }
  /*
   * Size modifiers
   */

  .button--small {
    font-size: var(--koerber-text-base-font-size);
    height: var(--koerber-height-size-compact);
    line-height: var(--koerber-text-xl-line-height);
    border-radius: var(--koerber-border-radius-small);
    padding: calc(var(--koerber-spacing-xs) - 0.125rem) var(--koerber-spacing-s);
  }

  .button--medium {
    font-size: var(--koerber-text-base-font-size);
    height: var(--koerber-height-size-standard);
    line-height: var(--koerber-text-3xl-line-height);
    border-radius: var(--koerber-border-radius-small);
    padding: var(--koerber-padding) var(--koerber-spacing-s);
  }

  .button--large {
    font-size: var(--koerber-text-md-font-size);
    height: var(--koerber-height-size-comfortable);
    line-height: var(--koerber-text-4xl-line-height);
    border-radius: var(--koerber-border-radius-small);
    padding: var(--koerber-padding) var(--koerber-spacing-s);
  }

  /*
   * Loading modifier
   */

  .button--loading {
    position: relative;
    cursor: wait;
  }

  .button--loading koerber-spinner {
    position: relative;
    font-size: 1rem;
    height: 1rem;
    width: 1rem;
    margin: 0 1em;
  }

  /*
   * Tertiary
   */

  .button--tertiary {
    background-color: var(--koerber-color-text-secondary);
    border-color: var(--koerber-color-border-tertiary);
    color: var(--koerber-color-text-secondary);
    background: var(--koerber-color-bg);
  }

  .button--tertiary:hover:not(.button--disabled) {
    background-color: var(--koerber-color-bg-surface-secondary-hover);
    color: var(--koerber-color-text-secondary);
  }

  .button--tertiary:active:not(.button--disabled) {
    background-color: var(--koerber-color-bg);
    color: var(--koerber-color-text-secondary);
  }

  .button--tertiary:disabled {
    background-color: var(--koerber-color-bg-surface-secondary-hover);
    color: var(--koerber-color-text-disabled);
  }

  /*
   * Badges
   */

  .button ::slotted(koerber-badge) {
    position: absolute;
    top: 0;
    right: 0;
    translate: 50% -50%;
    pointer-events: none;
  }

  .button--rtl ::slotted(koerber-badge) {
    right: auto;
    left: 0;
    translate: -50% -50%;
  }

  /*
   * Button spacing
   */

  /*
   * Button groups support a variety of button types (e.g. buttons with tooltips, buttons as dropdown triggers, etc.).
   * This means buttons aren't always direct descendants of the button group, thus we can't target them with the
   * ::slotted selector. To work around this, the button group component does some magic to add these special classes to
   * buttons and we style them here instead.
   */

  :host(.koerber-button-group__button--first:not(.koerber-button-group__button--last)) .button {
    border-start-end-radius: 0;
    border-end-end-radius: 0;
  }

  :host(.koerber-button-group__button--inner) .button {
    border-radius: 0;
    border: none;
  }

  :host(.koerber-button-group__button--last:not(.koerber-button-group__button--first)) .button {
    border: none;
  }

  /* All except the first */
  :host(.koerber-button-group__button:not(.koerber-button-group__button--first)) {
    margin-inline-start: calc(-1 * var(--koerber-border-width-s));
  }

  /* Add a visual separator between solid buttons */
  :host(
      .koerber-button-group__button--split:not(
          .koerber-button-group__button--last,
          .koerber-button-group__button--radio,
          [variant='default']
        )
    ) {
    margin-right: 2px;
  }

  /* Bump hovered, focused, and checked buttons up so their focus ring isn't clipped */
  :host(.koerber-button-group__button--hover) {
    z-index: 1;
  }

  /* Focus and checked are always on top */
  :host(.koerber-button-group__button--focus),
  :host(.koerber-button-group__button[checked]) {
    z-index: 2;
  }
`;

export {
  button_styles_default
};
//# sourceMappingURL=chunk.XOJKXQ5O.js.map
