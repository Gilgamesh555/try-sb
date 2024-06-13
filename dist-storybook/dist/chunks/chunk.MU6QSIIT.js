// src/components/tree-item/tree-item.styles.ts
import { css } from "lit";
var tree_item_styles_default = css`
  :host {
    display: block;
    outline: 0;
    z-index: 0;
  }

  :host(:focus) {
    outline: none;
  }

  slot:not([name])::slotted(sl-icon) {
    margin-inline-end: var(--koerber-spacing-xs);
  }

  .tree-item {
    position: relative;
    display: flex;
    align-items: stretch;
    flex-direction: column;
    font-family: var(--koerber-font-family-default);
    font-weight: var(--koerber-font-weight-regular);
    color: var(--koerber-color-text-secondary);
    background-color: var(--koerber-color-bg-fill-secondary);
    cursor: pointer;
  }

  .tree-item--size-small .tree-item__item {
    min-height: var(--koerber-height-size-compact);
  }

  .tree-item--size-medium .tree-item__item {
    min-height: var(--koerber-height-size-standard);
  }

  .tree-item--size-large .tree-item__item {
    min-height: var(--koerber-height-size-comfortable);
  }

  .tree-item__checkbox {
    cursor: pointer;
  }

  .tree-item__expand-button,
  .tree-item__checkbox,
  .tree-item__content {
    font-family: var(--koerber-font-family-default);
    font-size: var(--koerber-text-base-font-size);
    font-weight: var(--koerber-font-weight-regular);
    line-height: var(--koerber-text-md-line-height);
    letter-spacing: var(--koerber-letter-spacing-normal);
  }

  .tree-item--size-large .tree-item__expand-button,
  .tree-item--size-large .tree-item__checkbox,
  .tree-item--size-large .tree-item__content {
    font-family: var(--koerber-font-family-default);
    font-size: var(--koerber-text-md-font-size);
    font-weight: var(--koerber-font-weight-regular);
    line-height: var(--koerber-text-md-line-height);
    letter-spacing: var(--koerber-letter-spacing-normal);
  }

  .tree-item__hint {
    font-size: var(--koerber-text-sm-font-size);
  }

  .tree-item__checkbox::part(base) {
    display: flex;
    align-items: center;
    padding: var(--koerber-spacing-2xs);
  }

  .tree-item__checkbox::part(label) {
    margin: 0;
  }

  .tree-item__indentation {
    display: block;
    width: 1.2em; /*1.2 - 24px*/
    flex-shrink: 0;
  }

  .tree-item__expand-button {
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: content-box;
    width: 1rem;
    height: 1rem;
    flex-shrink: 0;
    margin: 0 0 0 var(--koerber-spacing-xs);
  }

  .tree-item__expand-button {
    transition: var(--koerber-transition-medium) rotate ease;
  }

  .tree-item--open .tree-item__expand-button {
    rotate: 180deg;
  }

  .tree-item--open.tree-item--rtl .tree-item__expand-button {
    rotate: -90deg;
  }

  .tree-item--open slot[name='expand-icon'],
  .tree-item:not(.tree-item--open) slot[name='collapse-icon'] {
    display: none;
  }

  .tree-item:not(.tree-item--has-expand-button) .tree-item__expand-icon-slot {
    display: none;
  }

  .tree-item__expand-button--visible {
    cursor: pointer;
  }

  .tree-item__item {
    display: flex;
    align-items: center;
    gap: var(--koerber-spacing-xs);
  }

  .tree-item__content {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: space-between;
    transition: var(--koerber-transition-fast) color;
  }

  /* Actions Part*/

  .tree-item__actions {
    display: flex;
    margin: 0 var(--koerber-spacing-s) 0 0;
    gap: 0;
  }

  .tree-item__children {
    display: block;
    font-size: var(--koerber-text-md-font-size);
    padding-left: var(--koerber-spacing-s);
  }

  /* Indentation lines */
  .tree-item__children {
    position: relative;
  }

  .tree-item__children::before {
    content: '';
    position: absolute;
    top: var(--indent-guide-offset);
    bottom: var(--indent-guide-offset);
    left: calc(1em - (var(--indent-guide-width) / 2) - 1px);
    border-inline-end: var(--ind ent-guide-width) var(--indent-guide-style) var(--indent-guide-color);
    z-index: 1;
  }

  .tree-item--rtl .tree-item__children::before {
    left: auto;
    right: 1em;
  }

  @media (forced-colors: active) {
    :host(:not([aria-disabled='true'])) .tree-item--selected .tree-item__item {
      outline: dashed 1px SelectedItem;
    }
  }

  /* States */
  /* Hover */
  :host(:not([aria-disabled='true'])) .tree-item__item:hover {
    background-color: var(--koerber-color-bg-fill-secondary-hover);
    color: var(--koerber-color-text);
  }

  :host(:not([aria-disabled='true'])) .tree-item__item:hover .tree-item__expand-button {
    color: var(--koerber-color-text);
  }

  :host(:not([aria-disabled='true'])) .tree-item__item:hover .tree-item__actions {
    color: var(--koerber-color-icon);
  }

  /* Focus */
  :host(:focus-visible) .tree-item__item {
    outline: solid var(--koerber-border-width-m) var(--koerber-color-bg-fill);
    outline-offset: var(--koerber-border-offset);
    z-index: 2;
  }

  /* Selected */
  :host(:not([aria-disabled='true'])) .tree-item--open .tree-item__expand-button--visible {
    color: var(--koerber-color-bg-fill);
  }

  .tree-item--disabled .tree-item__expand-button,
  .tree-item--disabled .tree-item__item {
    background-color: var(--koerber-color-bg-fill-disabled);
    color: var(--koerber-color-text-disabled);
    outline: none;
    cursor: not-allowed;
  }

  /* Text truncation */
  .tree-item__label {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-box-pack: center;
    -webkit-line-clamp: 1;
    overflow: hidden;
  }
`;

export {
  tree_item_styles_default
};
//# sourceMappingURL=chunk.MU6QSIIT.js.map
