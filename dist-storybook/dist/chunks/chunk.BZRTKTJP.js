// src/components/accordion/accordion.styles.ts
import { css } from "lit";
var accordion_styles_default = css`
  :host {
    display: block;
  }

  .accordion {
    background-color: var(--koerber-color-bg);
    overflow-anchor: none;
    font-family: var(--koerber-font-family-default);
    font-weight: var(--koerber-font-weight-regular);
    font-size: var(--koerber-text-base-font-size);
    color: var(--koerber-color-text-secondary);
  }

  .accordion--disabled {
    background-color: var(--koerber-color-bg-fill-disabled);
    color: var(--koerber-color-text-disabled);
    opacity: 0.8;
  }

  .accordion--disabled .accordion__body {
    background-color: var(--koerber-color-bg-fill-disabled);
    color: var(--koerber-color-text-disabled);
  }

  .accordion__header {
    display: flex;
    align-items: center;
    border-radius: inherit;
    gap: var(--koerber-spacing-s);
    padding: 0 var(--koerber-spacing-s);
    flex-grow: 1;
    user-select: none;
    cursor: pointer;
  }

  /** Sizes */
  .accordion--small,
  .accordion--medium {
    font-size: var(--koerber-text-base-font-size);
  }

  .accordion--large {
    font-size: var(--koerber-text-md-font-size);
  }

  .accordion__header.accordion__header--small,
  .accordion__body.accordion__body--small {
    min-height: var(--koerber-height-size-compact);
  }

  .accordion__header.accordion__header--medium,
  .accordion__body.accordion__body--medium {
    min-height: var(--koerber-height-size-standard);
  }

  .accordion__header.accordion__header--large,
  .accordion__body.accordion__body--large {
    min-height: var(--koerber-height-size-comfortable);
  }

  .accordion__header:focus {
    outline: none;
  }

  .accordion__header:focus-visible {
    outline: var(--koerber-focus-ring);
    outline-offset: var(--koerber-border-offset);
  }

  .accordion--disabled .accordion__header {
    cursor: not-allowed;
  }

  .accordion--disabled .accordion__body,
  .accordion--disabled ::slotted([slot='suffix-content']),
  .accordion--disabled ::slotted([slot='prefix-content']),
  .accordion--disabled ::slotted([slot='suffix']),
  .accordion--disabled ::slotted([slot='prefix']) {
    cursor: not-allowed;
  }

  .accordion--disabled .accordion__header:focus-visible {
    outline: none;
    box-shadow: none;
  }

  .accordion__body-summary {
    display: flex;
    flex: 1 1 auto;
    justify-content: space-between;
    flex-direction: column;
  }

  .accordion__summary {
    flex: 1 1 auto;
    display: flex;
    align-items: center;
  }

  .accordion__title-icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    transition: var(--koerber-transition-medium) rotate ease;
  }

  .accordion--open .accordion__summary-icon {
    rotate: 180deg;
  }

  .accordion--open.accordion--rtl .accordion__summary-icon {
    rotate: 180deg;
  }

  .accordion--open slot[name='expand-icon'],
  .accordion:not(.accordion--open) slot[name='collapse-icon'] {
    display: none;
  }

  .accordion__body {
    display: flex;
    flex-direction: row;
    align-items: center;
    overflow: hidden;
    border-left: 1px solid rgba(0, 96, 255, 1);
    padding: 0 var(--koerber-spacing-xs) 0 var(--koerber-spacing-xl);
    gap: var(--koerber-spacing-xs);
  }

  .accordion__content {
    display: block;
    flex: 1 1 auto;
  }

  .accordion__subtitle {
    color: var(--koerber-color-text-tertiary);
    font-size: var(--koerber-text-sm-font-size);
  }

  .accordion--large .accordion__subtitle {
    font-size: var(--koerber-text-base-font-size);
  }

  ::slotted(koerber-checkbox[slot='prefix-content']) {
    display: flex;
    padding: 0.25rem; /* 4px */
  }

  ::slotted(koerber-button[slot='suffix-content']) {
    --koerber-spacing-s: 0.4375rem; /* 7px */
  }

  /** Interaction States */
  .accordion:not(.accordion--disabled) .accordion__header:hover {
    background-color: var(--koerber-color-bg-surface-secondary-hover);
    color: var(--koerber-color-text);
  }

  .accordion:not(.accordion--disabled) .accordion__body:hover {
    background-color: var(--koerber-color-bg-surface-secondary-hover);
  }

  .accordion:not(.accordion--disabled) .accordion__header:focus {
    background-color: var(--koerber-color-bg);
    color: var(--koerber-color-text);
    border: var(--koerber-border-width-m) solid var(--koerber-color-border-hover);
  }

  .accordion:not(.accordion--disabled) .accordion__header:active {
    background-color: var(--koerber-color-bg-alt);
    color: var(--koerber-color-text);
  }

  .accordion:not(.accordion--disabled) .accordion.accordion--open .accordion__header {
    background-color: var(--koerber-color-bg-alt);
    color: var(--koerber-color-text);
  }
`;

export {
  accordion_styles_default
};
//# sourceMappingURL=chunk.BZRTKTJP.js.map
