// src/components/search-option/search-option.styles.ts
import { css } from "lit";
var search_option_styles_default = css`
  :host {
    display: block;
    user-select: none;
    -webkit-user-select: none;
    --koerber-search-spacing-vertical: 10px;
  }

  :host(:focus) {
    outline: none;
  }

  .search-option {
    position: relative;
    display: flex;
    align-items: center;
    font-family: var(--koerber-font-family-default);
    font-weight: var(--koerber-font-weight-regular);
    color: var(--koerber-color-text);
    padding: var(--koerber-spacing-xs) var(--koerber-search-spacing-vertical);
    transition: var(--koerber-transition-fast) fill;
    cursor: pointer;
  }

  .search-option--hover:not(.search-option--current):not(.search-option--disabled) {
    background-color: var(--koerber-color-bg-surface-secondary-hover);
    color: var(--koerber-color-text-link);
  }

  .search-option--current,
  .search-option--current.search-option--disabled {
    background-color: var(--koerber-color-bg-fill-secondary-hover);
    color: var(--koerber-color-text-link);
  }

  .search-option--disabled {
    outline: none;
    opacity: 0.5;
    cursor: not-allowed;
  }

  .search-option__label {
    flex: 1 1 auto;
    display: inline-block;
  }

  .search-option__prefix,
  .search-option__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .search-option__prefix::slotted(*) {
    margin-inline-end: var(--koerber-spacing-xs);
  }

  .search-option__suffix::slotted(*) {
    margin-inline-start: var(--koerber-spacing-xs);
  }

  /* Size modifiers */
  .search-option--small {
    font-size: var(--koerber-text-base-font-size);
    height: var(--koerber-height-size-compact);
    line-height: var(--koerber-text-base-line-height);
  }

  .search-option--medium {
    font-size: var(--koerber-text-base-font-size);
    height: var(--koerber-height-size-standard);
    line-height: var(--koerber-text-base-line-height);
  }

  .search-option--large {
    font-size: var(--koerber-text-md-font-size);
    height: var(--koerber-height-size-comfortable);
    line-height: var(--koerber-text-md-line-height);
  }

  @media (forced-colors: active) {
    :host(:hover:not([aria-disabled='true'])) .search-option {
      outline: dashed 1px SelectedItem;
      outline-offset: -1px;
    }
  }
`;

export {
  search_option_styles_default
};
//# sourceMappingURL=chunk.6CXQPVO6.js.map
