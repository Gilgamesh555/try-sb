// src/components/select/select.styles.ts
import { css } from "lit";
var select_styles_default = css`
  :host {
    display: block;
    --koerber-select-popup-max-height: 15rem;
    --koerber-z-index-dropdown: 900;
  }

  /** The popup */
  .select {
    flex: 1 1 auto;
    display: inline-flex;
    width: 100%;
    position: relative;
    vertical-align: middle;
    border: solid var(--koerber-border-width-s) var(--koerber-color-border);
    border-radius: var(--koerber-border-radius-small);
  }

  .select::part(popup) {
    z-index: var(--koerber-z-index-dropdown);
    --max-height: var(--koerber-select-popup-max-height, 0);
  }

  .select[data-current-placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .select[data-current-placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  /* Combobox */
  .select__combobox {
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

  .select__display-input {
    position: relative;
    width: 100%;
    border: none;
    background: none;
    color: var(--koerber-input-color);
    overflow: hidden;
    padding: 0;
    margin: 0;
    -webkit-appearance: none;
  }

  .select__display-input.select--small {
    font-size: var(--koerber-text-base-font-size);
    line-height: var(--koerber-text-xl-line-height);
  }

  .select__display-input.select--medium {
    font-size: var(--koerber-text-md-font-size);
    line-height: var(--koerber-text-xl-line-height);
  }

  .select__display-input.select--large {
    font-size: var(--koerber-text-xl-font-size);
    line-height: var(--koerber-text-xl-line-height);
  }

  .select__value-input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    opacity: 0;
    z-index: -1;
  }

  .select:not(.select--disabled):hover .select__display-input {
    color: var(--koerber-input-color-hover);
  }

  .select__display-input:focus {
    outline: none;
  }

  /* Visually hide the display input when multiple is enabled */
  .select--multiple:not(.select--placeholder-visible) .select__display-input {
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
  }

  .select__tags {
    display: flex;
    flex: 1;
    align-items: center;
    flex-wrap: wrap;
    margin-inline-start: var(--koerber-spacing-2xs);
  }

  .select__tags::slotted(koerber-tag) {
  }

  .select--disabled .select__tags,
  .select--disabled .select__tags::slotted(koerber-tag) {
    cursor: not-allowed !important;
    user-select: none;
  }

  /* Standard selects */
  .select--standard .select__combobox {
  }

  .select--standard.select--small:hover:not(.select--disabled) {
    border-color: var(--koerber-color-border-hover);
  }

  .select--standard.select--medium:hover:not(.select--disabled) {
    border-color: var(--koerber-color-border-hover);
  }

  .select--standard.select--large:hover:not(.select--disabled) {
    border-color: var(--koerber-color-border-hover);
  }

  .select--standard.select--small:hover.select--loading {
    border-color: var(--koerber-color-border-disabled);
  }

  .select--standard.select--medium:hover.select--loading {
    border-color: var(--koerber-color-border-disabled);
  }

  .select--standard.select--large:hover.select--loading {
    border-color: var(--koerber-color-border-disabled);
  }

  .select--standard.select--disabled .select__combobox {
    color: var(--koerber-input-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
    outline: none;
    border-color: var(--koerber-color-border-disabled);
    background-color: var(--koerber-color-bg-fill-disabled);
  }

  .select--standard:not(.select--disabled).select--open .select__combobox,
  .select--standard:not(.select--disabled).select--focused .select__combobox {
    border-radius: var(--koerber-border-radius-small);
    box-shadow: 0 0 0 var(--koerber-border-width-m) var(--koerber-color-border-focus);
    border-color: var(--koerber-color-border-focus);
  }

  /* Sizes */
  .select--small .select__combobox {
    min-height: var(--koerber-height-size-compact);
    height: var(--koerber-height-size-compact);
    font-size: var(--koerber-text-base-font-size);
    padding-block: 0;
    padding-inline: var(--koerber-spacing-xs);
    border-color: var(--koerber-color-border);
  }

  .select--small .select__clear {
    margin-inline-start: var(--koerber-spacing-xs);
  }

  .select--small .select__prefix::slotted(*) {
    margin-inline-end: var(--koerber-spacing-xs);
  }

  .select--small.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-block: 2px;
    padding-inline-start: 0;
  }

  .select--small .select__tags {
    gap: 2px;
  }

  .select--medium .select__combobox {
    min-height: var(--koerber-height-size-standard);
    height: var(--koerber-height-size-standard);
    font-size: var(--koerber-text-md-font-size);
    padding-block: 0;
    padding-inline: var(--koerber-spacing-xs);
    border-color: var(--koerber-color-border);
  }

  .select--medium .select__clear {
    margin-inline-start: var(--koerber-spacing-xs);
  }

  .select--medium .select__prefix::slotted(*) {
    margin-inline-end: var(--koerber-spacing-xs);
  }

  .select--medium.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-inline-start: 0;
    padding-block: 3px;
  }

  .select--medium .select__tags {
    gap: 3px;
  }

  .select--large .select__combobox {
    min-height: var(--koerber-height-size-comfortable);
    height: var(--koerber-height-size-comfortable);
    font-size: var(--koerber-text-xl-font-size);
    padding-block: 0;
    padding-inline: var(--koerber-spacing-xs);
    border-color: var(--koerber-color-border);
  }

  .select--large .select__clear {
    margin-inline-start: var(--koerber-spacing-s);
  }

  .select--large .select__prefix::slotted(*) {
    margin-inline-end: var(--koerber-spacing-s);
  }

  .select--large.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-inline-start: 0;
    padding-block: 4px;
  }

  .select--large .select__tags {
    gap: 4px;
  }

  .select--placeholder-visible:not(.select--disabled) {
    color: var(--koerber-color-text-tertiary);
  }

  .select--placeholder-visible:hover:not(.select--disabled) {
    color: var(--koerber-color-text);
  }

  /* Prefix */
  .select__prefix {
    flex: 0;
    display: inline-flex;
    align-items: center;
    color: var(--koerber-color-text-tertiary);
  }

  /* Clear button */
  .select__clear {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: var(--koerber-color-icon-secondary);
    border: none;
    background: none;
    padding: 0;
    transition: var(--koerber-transition-fast) color;
  }

  .select__clear:hover {
    color: var(--koerber-color-icon-secondary);
  }

  .select__loading:hover {
    color: var(--koerber-color-border-active);
  }

  .select__clear:focus {
    outline: none;
  }

  /* Expand icon */
  .select__expand-icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    transition: var(--koerber-transition-medium) rotate ease;
    rotate: 0;
    margin-inline-start: var(--koerber-spacing-xs);
  }

  .select--open .select__expand-icon {
    rotate: -180deg;
  }

  /* Listbox */
  .select__listbox {
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
  .select__listbox::-webkit-scrollbar {
    width: 4px;
  }

  .select__listbox::-webkit-scrollbar-thumb {
    background-color: var(--koerber-color-neutral5);
    border-radius: var(--koerber-border-radius-large);
  }

  /* Hide the scrollbar arrows */
  .select__listbox::-webkit-scrollbar-button {
    display: none;
  }

  .select__listbox::-webkit-scrollbar-track {
    background-color: var(--koerber-color-neutral4);
  }

  .select__listbox ::slotted(koerber-divider) {
    --spacing: var(--koerber-spacing-xs);
  }

  .select__listbox ::slotted(small) {
    color: var(--koerber-color-neutral-500);
    padding-block: var(--koerber-spacing-xs);
    padding-inline: var(--koerber-spacing-m);
  }

  /* Error inputs */

  .select-error-icon {
    color: var(--koerber-color-sema2);
  }

  .select--error {
    background-color: var(--koerber-color-bg);
    border: solid var(--koerber-border-width-s) var(--koerber-color-bg-fill-error);
  }

  .select-error-icon-slot {
    display: flex;
    align-items: center;
    width: 1em;
    justify-content: center;
  }

  .form-control__error-message {
    font-size: var(--koerber-text-base-font-size);
    color: var(--koerber-color-text-error);
  }

  .select--standard.select--loading .select--loading:hover .select--standard:hover {
    color: var(--koerber-color-border-disabled);
    opacity: 0.5;
    cursor: not-allowed;
    border-color: var(--koerber-color-border-disabled);
    background-color: transparent;
  }
`;

export {
  select_styles_default
};
//# sourceMappingURL=chunk.TPC4T4Q2.js.map
