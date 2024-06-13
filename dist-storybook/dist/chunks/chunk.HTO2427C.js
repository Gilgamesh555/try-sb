// src/components/search/search.styles.ts
import { css } from "lit";
var search_styles_default = css`
  :host {
    display: block;
    --koerber-search-popup-max-height: 15rem;
    --koerber-search-vertical-input-spacing: 10px;
    --koerber-z-index-dropdown: 900;
  }

  /** The popup */
  .search {
    flex: 1 1 auto;
    display: inline-flex;
    width: 100%;
    position: relative;
    vertical-align: middle;
    border: solid var(--koerber-border-width-s) var(--koerber-color-border);
    border-radius: var(--koerber-border-radius-small);
  }

  .search__display-input::placeholder {
    color: var(--koerber-color-text-tertiary);
    font-family: var(--koerber-font-family-default);
    font-size: var(--koerber-text-base-font-size);
  }

  .search--placeholder .search__icon {
    color: var(--koerber-color-text-tertiary);
  }

  .search::part(popup) {
    z-index: var(--koerber-z-index-dropdown);
    --max-height: var(--koerber-search-popup-max-height, 0);
  }

  .search[data-current-placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .search[data-current-placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  /* Combobox */
  .search__combobox {
    background-color: transparent;
    flex: 1;
    display: flex;
    width: 100%;
    min-width: 0;
    position: relative;
    align-items: center;
    justify-content: start;
    letter-spacing: var(--koerber-letter-spacing-normal);
    vertical-align: middle;
    overflow: hidden;
    transition:
      var(--koerber-transition-fast) color,
      var(--koerber-transition-fast) border,
      var(--koerber-transition-fast) box-shadow,
      var(--koerber-transition-fast) background-color;
  }

  .search__display-input {
    position: relative;
    width: 100%;
    border: none;
    background: none;
    font-weight: var(--koerber-font-weight-regular);
    color: var(--koerber-input-color);
    overflow: hidden;
    padding: 0;
    margin: 0;
    -webkit-appearance: none;
  }

  .search__display-input.search--small {
    font-size: var(--koerber-text-base-font-size);
    line-height: var(--koerber-text-base-line-height);
  }

  .search__display-input.search--medium {
    font-size: var(--koerber-text-base-font-size);
    line-height: var(--koerber-text-base-line-height);
  }

  .search__display-input.search--large {
    font-size: var(--koerber-text-md-font-size);
    line-height: var(--koerber-text-md-line-height);
  }

  .search__value-input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    border: 0;
    margin: 0;
    opacity: 0;
    z-index: -1;
  }

  .search:not(.search--disabled):hover .search__display-input {
    color: var(--koerber-input-color-hover);
  }

  .search__display-input:focus {
    outline: none;
  }

  .search__tags {
    display: flex;
    flex: 1;
    align-items: center;
    flex-wrap: wrap;
    margin-inline-start: var(--koerber-spacing-2xs);
  }

  .search__tags::slotted(koerber-tag) {
  }

  .search--disabled .search__tags,
  .search--disabled .search__tags::slotted(koerber-tag) {
    cursor: not-allowed !important;
    user-select: none;
  }

  /* Standard searches */
  .search--standard.search--small:hover:not(.search--disabled) {
    border-color: var(--koerber-color-border-hover);
  }

  .search--standard.search--medium:hover:not(.search--disabled) {
    border-color: var(--koerber-color-border-hover);
  }

  .search--standard.search--large:hover:not(.search--disabled) {
    border-color: var(--koerber-color-border-hover);
  }

  .search--standard.search--small:hover.search--loading {
    border-color: var(--koerber-color-border-disabled);
  }

  .search--standard.search--medium:hover.search--loading {
    border-color: var(--koerber-color-border-disabled);
  }

  .search--standard.search--large:hover.search--loading {
    border-color: var(--koerber-color-border-disabled);
  }

  .search--standard.search--disabled {
    border-color: var(--koerber-color-border-disabled);
  }

  .search--standard.search--disabled .search__combobox {
    color: var(--koerber-color-text-disabled);
    opacity: 0.5;
    cursor: not-allowed;
    outline: none;
    border-color: var(--koerber-color-border-disabled);
    background-color: var(--koerber-color-bg-fill-disabled);
  }

  .search--standard.search--disabled .search__display-input {
    cursor: not-allowed;
  }

  .search--standard.search--disabled .search__clear {
    cursor: not-allowed;
    user-select: none;
  }

  .search--standard:not(.search--disabled).search--open .search__combobox,
  .search--standard:not(.search--disabled).search--focused .search__combobox {
    border-radius: var(--koerber-border-radius-small);
    box-shadow: 0 0 0 var(--koerber-border-width-m) var(--koerber-color-border-focus);
    border-color: var(--koerber-color-border-focus);
  }

  /* Sizes */
  .search--small .search__combobox {
    min-height: var(--koerber-height-size-compact);
    height: var(--koerber-height-size-compact);
    font-size: var(--koerber-text-base-font-size);
    padding-block: 0;
    padding-inline: var(--koerber-spacing-xs);
    border-color: var(--koerber-color-border);
  }

  .search--small .search__prefix::slotted(*) {
    margin-inline-end: var(--koerber-spacing-xs);
  }

  .search--small .search__tags {
    gap: 2px;
  }

  .search--medium .search__combobox {
    min-height: var(--koerber-height-size-standard);
    height: var(--koerber-height-size-standard);
    font-size: var(--koerber-text-md-font-size);
    padding-block: 0;
    padding: var(--koerber-search-vertical-input-spacing) var(--koerber-spacing-xs);
    border-color: var(--koerber-color-border);
  }

  .search--medium .search__prefix::slotted(*) {
    margin-inline-end: var(--koerber-spacing-xs);
  }

  .search--medium .search__tags {
    gap: 3px;
  }

  .search--large .search__combobox {
    min-height: var(--koerber-height-size-comfortable);
    height: var(--koerber-height-size-comfortable);
    font-size: var(--koerber-text-xl-font-size);
    padding-block: 0;
    padding-inline: var(--koerber-spacing-xs);
    border-color: var(--koerber-color-border);
  }

  .search--large .search__clear {
    margin-inline-start: var(--koerber-spacing-s);
  }

  .search--large .search__prefix::slotted(*) {
    margin-inline-end: var(--koerber-spacing-s);
  }

  .search--large .search__tags {
    gap: 4px;
  }

  /* Prefix */
  .search__prefix {
    flex: 0;
    display: inline-flex;
    align-items: center;
    color: var(--koerber-color-text-tertiary);
  }

  /* Clear button */
  .search__clear {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: var(--koerber-color-icon-secondary);
    border: none;
    background: none;
    padding: 0;
    cursor: pointer;
    transition: var(--koerber-transition-fast) color;
  }

  .search__clear:hover {
    color: var(--koerber-color-icon-secondary);
  }

  .search__loading:hover {
    color: var(--koerber-color-border-active);
  }

  .search__clear:focus {
    outline: none;
  }

  /* Expand icon */
  .search__icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    margin-inline-start: var(--koerber-spacing-xs);
  }

  /* Listbox */
  .search__listbox {
    display: block;
    position: relative;
    border: solid var(--koerber-border-width-s) var(--koerber-panel-border-color);
    padding-block: var(--koerber-spacing-xs);
    padding-inline: 0;
    overflow: auto;
    overscroll-behavior: none;

    /* Make sure it adheres to the popup's auto size */
    max-width: var(--auto-size-available-width);
    max-height: var(--max-height);
    border: solid;
    border-width: var(--koerber-border-width-s);
    border-color: var(--koerber-color-border);
    background: var(--koerber-color-text-bg-fill);
    border-radius: var(--koerber-border-radius-small);
  }

  /* Style the scrollbar */
  .search__listbox::-webkit-scrollbar {
    width: 4px;
  }

  .search__listbox::-webkit-scrollbar-thumb {
    background-color: var(--koerber-color-neutral5);
    border-radius: var(--koerber-border-radius-large);
  }

  /* Hide the scrollbar arrows */
  .search__listbox::-webkit-scrollbar-button {
    display: none;
  }

  .search__listbox::-webkit-scrollbar-track {
    background-color: var(--koerber-color-neutral4);
  }

  .search__listbox ::slotted(koerber-divider) {
    --spacing: var(--koerber-spacing-xs);
  }

  .search__listbox ::slotted(small) {
    color: var(--koerber-color-neutral-500);
    padding-block: var(--koerber-spacing-xs);
    padding-inline: var(--koerber-spacing-m);
  }

  /* Error inputs */

  .search-error-icon {
    color: var(--koerber-color-sema2);
  }

  .search--error {
    background-color: var(--koerber-color-bg);
    border: solid var(--koerber-border-width-s) var(--koerber-color-bg-fill-error);
  }

  .search-error-icon-slot {
    display: flex;
    align-items: center;
    width: 1em;
    justify-content: center;
  }

  .form-control__error-message {
    font-size: var(--koerber-text-base-font-size);
    color: var(--koerber-color-text-error);
  }

  .search--standard.search--loading .search--loading:hover .search--standard:hover {
    color: var(--koerber-color-border-disabled);
    opacity: 0.5;
    cursor: not-allowed;
    border-color: var(--koerber-color-border-disabled);
    background-color: transparent;
  }

  /** Custom messages - TODO Error and Loading */
  .search__listbox-min-length {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--koerber-spacing-xs);
  }

  .search__listbox-min-length .message {
    font-size: var(--koerber-text-base-font-size);
    font-weight: var(--koerber-font-weight-regular);
    line-height: var(--koerber-text-base-line-height);
    color: var(--koerber-color-text-secondary);
  }

  .options {
    display: contents;
  }

  .options--hidden {
    display: none;
  }
`;

export {
  search_styles_default
};
//# sourceMappingURL=chunk.HTO2427C.js.map
