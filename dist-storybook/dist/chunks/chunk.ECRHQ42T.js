// src/components/menu-item/menu-item.styles.ts
import { css } from "lit";
var menu_item_styles_default = css`
  :host {
    display: block;
    --koerber-spacing-xxs: 10px;
  }

  :host([inert]) {
    display: none;
  }

  .menu-item {
    position: relative;
    display: flex;
    align-items: stretch;
    background-color: var(--koerber-color-bg-fill-secondary);
    gap: var(--koerber-spacing-xs);
    font-family: var(--koerber-font-family-default);
    font-size: var(--koerber-text-base-font-size);
    font-weight: var(--koerber-font-weight-regular);
    line-height: var(--koerber-text-base-line-height);
    letter-spacing: var(--koerber-letter-spacing-normal);
    color: var(--koerber-color-text-secondary);
    padding: var(--koerber-spacing-xxs) var(--koerber-spacing-xs) var(--koerber-spacing-xxs) var(--koerber-spacing-s);
    transition: var(--koerber-transition-fast) fill;
    user-select: none;
    cursor: pointer;
  }

  /* Disabled */

  .menu-item.menu-item--disabled {
    outline: none;
    color: var(--koerber-color-text-disabled);
    background-color: var(--koerber-color-bg-fill-disabled);
    cursor: not-allowed;
  }

  .menu-item.menu-item--disabled .menu-item__prefix,
  .menu-item.menu-item--disabled .menu-item__suffix,
  .menu-item.menu-item--disabled .menu-item__chevron {
    color: var(--koerber-color-text-disabled);
  }

  .menu-item .menu-item__label {
    flex: 1 1 auto;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-box-pack: center;
    -webkit-line-clamp: 1;
    overflow: hidden;
  }

  .menu-item .menu-item__suffix,
  .menu-item .menu-item__prefix,
  .menu-item .menu-item__chevron {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    color: var(--koerber-color-text-tertiary);
  }

  :host(:focus-visible) {
    outline: none;
  }

  /* Hover */
  :host(:not([aria-disabled='true']):hover:focus) .menu-item {
    outline: none;
    background-color: var(--koerber-color-bg-fill-secondary-hover);
    color: var(--koerber-color-text-link);
    border: none;
  }

  :host(:not([aria-disabled='true']):hover:focus) .menu-item .menu-item__prefix,
  :host(:not([aria-disabled='true']):hover:focus) .menu-item .menu-item__chevron {
    color: var(--koerber-color-text-link);
  }

  :host(:hover:not([aria-disabled='true'], :focus-visible)) .menu-item,
  .menu-item--submenu-expanded {
    outline: none;
    background-color: var(--koerber-color-bg-fill-secondary-hover);
    color: var(--koerber-color-text-secondary);
  }

  /* Focus */
  :host(:focus-visible:not([aria-disabled='true'])) .menu-item {
    outline: none;
    background-color: var(--koerber-color-bg-fill-secondary-hover);
    color: var(--koerber-color-text-link);
  }

  :host(:focus-visible:not([aria-disabled='true'])) .menu-item .menu-item__prefix,
  :host(:focus-visible:not([aria-disabled='true'])) .menu-item .menu-item__chevron {
    color: var(--koerber-color-text-link);
  }

  /* Selected */

  :host(:focus-visible) .menu-item.menu-item--selected {
    color: var(--koerber-color-text-link);
    background-color: var(--koerber-color-bg-fill-secondary);
  }

  .menu-item .menu-item__chevron {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.5em;
    visibility: hidden;
  }

  .menu-item--has-submenu .menu-item__chevron {
    visibility: visible;
  }

  .menu-item.menu-item--selected {
    color: var(--koerber-color-text-link);
    background-color: var(--koerber-color-bg-fill-secondary);
  }

  .menu-item.menu-item--selected .menu-item__prefix,
  .menu-item.menu-item--selected .menu-item__chevron {
    color: var(--koerber-color-text-link);
  }

  .menu-item--small {
    height: var(--koerber-height-size-compact); /* 32px */
    --koerber-spacing-xxs: 6px;
  }

  .menu-item--medium {
    height: var(--koerber-height-size-standard); /* 40px */
  }

  .menu-item--large {
    height: var(--koerber-height-size-comfortable); /* 48px */
    font-size: var(--koerber-text-md-font-size);
    line-height: var(--koerber-text-lg-line-height);
    --koerber-spacing-xxs: 12px;
  }

  @media (forced-colors: active) {
    :host(:hover:not([aria-disabled='true'])) .menu-item,
    :host(:focus-visible) .menu-item {
      outline: dashed 1px SelectedItem;
      outline-offset: -1px;
    }
  }
`;

export {
  menu_item_styles_default
};
//# sourceMappingURL=chunk.ECRHQ42T.js.map
