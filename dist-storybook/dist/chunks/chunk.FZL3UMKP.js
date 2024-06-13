// src/components/breadcrumb-item/breadcrumb-item.styles.ts
import { css } from "lit";
var breadcrumb_item_styles_default = css`
  :host {
    display: inline-flex;
  }

  .breadcrumb-item {
    display: inline-flex;
    align-items: center;
    font-family: var(--koerber-font-family-default);
    font-size: var(--koerber-text-base-font-size);
    font-weight: var(--koerber-font-weight-regular);
    color: var(--koerber-color-text-link);
    line-height: var(--koerber-text-lg-line-height);
    white-space: nowrap;
  }

  .breadcrumb-item__label {
    display: inline-block;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: inherit;
    text-decoration: none;
    color: inherit;
    background: none;
    border: none;
    border-radius: var(--koerber-border-radius-medium);
    padding: 0;
    margin: 0;
    transition: var(--koerber-transition-fast) --color;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    max-lines: 1;
  }

  :host(:not(:last-of-type)) .breadcrumb-item__label {
    color: var(--koerber-color-text-secondary);
  }

  :host(:not(:last-of-type)) .breadcrumb-item__separator {
    color: var(--koerber-color-text-secondary);
  }

  :host(:not(:last-of-type)) .breadcrumb-item__label:hover {
    color: var(--koerber-color-text-link-hover);
  }

  :host(:not(:last-of-type)) .breadcrumb-item__label:active {
    color: var(--koerber-color-text-link-pressed);
  }

  .breadcrumb-item__label:focus {
    outline: none;
  }

  .breadcrumb-item__label:focus-visible {
    outline: solid var(--koerber-border-width-m) var(--koerber-color-bg-fill);
    outline-offset: var(--koerber-border-offset);
  }

  .breadcrumb-item__prefix,
  .breadcrumb-item__suffix {
    display: none;
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .breadcrumb-item--has-prefix .breadcrumb-item__prefix {
    display: inline-flex;
    margin-inline-end: var(--koerber-spacing-2xs);
  }

  .breadcrumb-item--has-suffix .breadcrumb-item__suffix {
    display: inline-flex;
    margin-inline-start: var(--koerber-spacing-2xs);
  }

  :host(:last-of-type) .breadcrumb-item__separator {
    display: none;
  }

  .breadcrumb-item__separator {
    display: inline-flex;
    align-items: center;
    margin: 0 var(--koerber-spacing-2xs);
    user-select: none;
  }
`;

export {
  breadcrumb_item_styles_default
};
//# sourceMappingURL=chunk.FZL3UMKP.js.map
