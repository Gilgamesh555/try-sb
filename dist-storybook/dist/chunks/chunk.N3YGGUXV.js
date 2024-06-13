// src/components/alert/alert.styles.ts
import { css } from "lit";
var alert_styles_default = css`
  :host {
    display: contents;

    /* For better DX, we'll reset the margin here so the base part can inherit it */
    margin: 0;
  }

  .alert {
    position: relative;
    display: flex;
    align-items: stretch;
    gap: var(--koerber-spacing-xs);
    background-color: var(--koerber-color-bg-fill-alt);
    border-radius: var(--koerber-border-radius-small);
    font-family: var(--koerber-font-family-default);
    font-size: var(--koerber-text-base-font-size);
    font-weight: var(--koerber-font-weight-normal);
    line-height: var(--koerber-text-base-line-height);
    color: var(--koerber-color-text-bg-fill);
    margin: inherit;
    padding: var(--koerber-spacing-xs) var(--koerber-spacing-s);
    min-height: var(--koerber-spacing-xl);
  }

  .alert--multiline {
    align-items: flex-start;
  }

  .alert--info {
    background-color: var(--koerber-color-bg-fill-info);
    color: var(--koerber-color-text-bg-fill);
  }

  .alert--info .alert__icon {
    color: var(--koerber-color-text-bg-fill);
  }

  .alert--success {
    background-color: var(--koerber-color-bg-fill-success);
    color: var(--koerber-color-text);
  }

  .alert--success .alert__icon {
    color: var(--koerber-color-text);
  }

  .alert--warning {
    background-color: var(--koerber-color-sema1);
    color: var(--koerber-color-text);
  }

  .alert--warning .alert__icon {
    color: var(--koerber-color-text);
  }

  .alert--danger {
    background-color: var(--koerber-color-sema2);
    color: var(--koerber-color-text-bg-fill);
  }

  .alert--danger .alert__icon {
    color: var(--koerber-color-text-bg-fill);
  }

  .alert--alt-info {
    background-color: var(--koerber-color-bg-fill-alt);
    color: var(--koerber-color-text-bg-fill);
  }

  .alert--alt-info .alert__icon {
    color: var(--koerber-color-bg-fill-info);
  }

  .alert--alt-success {
    background-color: var(--koerber-color-bg-fill-alt);
    color: var(--koerber-color-text-bg-fill);
  }

  .alert--alt-success .alert__icon {
    color: var(--koerber-color-bg-fill-success);
  }

  .alert--alt-warning {
    background-color: var(--koerber-color-bg-fill-alt);
    color: var(--koerber-color-text-bg-fill);
  }

  .alert--alt-warning .alert__icon {
    color: var(--koerber-color-bg-fill-warning);
  }

  .alert--alt-danger {
    background-color: var(--koerber-color-bg-fill-alt);
    color: var(--koerber-color-text-bg-fill);
  }

  .alert--alt-danger .alert__icon {
    color: var(--koerber-color-bg-fill-error);
  }

  .alert__body-container {
    flex: 1 1 auto;
    display: flex;
    align-items: flex-start;
    gap: var(--koerber-spacing-xs);
  }

  .alert__body-container-multiline {
    flex-direction: column;
  }

  .alert__icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--koerber-text-xl-font-size);
  }

  .alert__icon__multiline {
    sex: yes;
  }

  .alert__message {
    flex: 1 1 auto;
    display: block;
    align-self: center;
  }

  .multiline {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-box-pack: center;
    -webkit-line-clamp: 3;
    overflow: hidden;
  }

  .footer--active {
    align-self: start;
  }

  .alert__close-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--koerber-text-md-font-size);
  }

  /* OVerride Button Interaction States */
  .alert--info ::slotted(koerber-button[slot='action']),
  .alert--danger ::slotted(koerber-button[slot='action']),
  .alert--alt-info ::slotted(koerber-button[slot='action']),
  .alert--alt-danger ::slotted(koerber-button[slot='action']),
  .alert--alt-success ::slotted(koerber-button[slot='action']),
  .alert--alt-warning ::slotted(koerber-button[slot='action']) {
    --koerber-color-bg-fill: var(--koerber-color-text-bg-fill);
    --koerber-color-bg-fill-hover: var(--koerber-color-text-bg-fill);
    --koerber-color-bg-fill-pressed: var(--koerber-color-text-bg-fill);
  }

  .alert--info ::slotted(koerber-link[slot='action']),
  .alert--danger ::slotted(koerber-link[slot='action']),
  .alert--info ::slotted(koerber-link[slot='action']),
  .alert--danger ::slotted(koerber-link[slot='action']),
  .alert--info ::slotted(koerber-link[slot='action']),
  .alert--danger ::slotted(koerber-link[slot='action']),
  .alert--alt-info ::slotted(koerber-link[slot='action']),
  .alert--alt-danger ::slotted(koerber-link[slot='action']),
  .alert--alt-success ::slotted(koerber-link[slot='action']),
  .alert--alt-warning ::slotted(koerber-link[slot='action']),
  .alert--info ::slotted(koerber-link[slot='expand']),
  .alert--danger ::slotted(koerber-link[slot='expand']),
  .alert--info ::slotted(koerber-link[slot='expand']),
  .alert--danger ::slotted(koerber-link[slot='expand']),
  .alert--info ::slotted(koerber-link[slot='expand']),
  .alert--danger ::slotted(koerber-link[slot='expand']),
  .alert--alt-info ::slotted(koerber-link[slot='expand']),
  .alert--alt-danger ::slotted(koerber-link[slot='expand']),
  .alert--alt-success ::slotted(koerber-link[slot='expand']),
  .alert--alt-warning ::slotted(koerber-link[slot='expand']) {
    --koerber-color-text-link: var(--koerber-color-text-bg-fill);
    --koerber-color-text-link-hover: var(--koerber-color-text-bg-fill);
    --koerber-color-text-link-visited: var(--koerber-color-text-bg-fill);
  }

  .alert--success ::slotted(koerber-button[slot='action']),
  .alert--warning ::slotted(koerber-button[slot='action']) {
    --koerber-color-bg-fill: var(--koerber-color-text);
    --koerber-color-bg-fill-hover: var(--koerber-color-text);
    --koerber-color-bg-fill-pressed: var(--koerber-color-text);
  }

  .alert--success ::slotted(koerber-link[slot='action']),
  .alert--warning ::slotted(koerber-link[slot='action']),
  .alert--success ::slotted(koerber-link[slot='expand']),
  .alert--warning ::slotted(koerber-link[slot='expand']) {
    --koerber-color-text-link: var(--koerber-color-text);
    --koerber-color-text-link-hover: var(--koerber-color-text);
    --koerber-color-text-link-visited: var(--koerber-color-text);
  }

  koerber-button.alert__close-button::part(base) {
    color: inherit;
  }

  .alert--multiline koerber-button.alert__close-button::part(base) {
    height: 0;
    padding-right: 0;
  }

  .alert__actions,
  .alert__expand {
    gap: var(--koerber-spacing-xs);
    display: flex;
    align-items: center;
  }

  .alert__actions_multiline,
  .alert__expand_multiline {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  koerber-link::part(label) {
    color: inherit;
  }

  .alert__content-container {
    flex: 1 1 auto;
    display: flex;
    height: 100%;
    gap: var(--koerber-spacing-xs);
  }
`;

export {
  alert_styles_default
};
//# sourceMappingURL=chunk.N3YGGUXV.js.map
