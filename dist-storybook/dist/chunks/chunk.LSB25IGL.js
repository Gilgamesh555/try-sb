// src/components/list-item/list-item.styles.ts
import { css } from "lit";
var list_item_styles_default = css`
  :host {
    display: block;
    --koerber-padding: 10px;
    --koerber-avatar-padding: 1px;
    --koerber-list-item-padding: 12px;
  }

  .list-item {
    position: relative;
    display: flex;
    align-items: stretch;

    font-family: var(--koerber-font-family-default);
    font-size: var(--koerber-text-md-font-size);
    font-weight: var(--koerber-font-weight-regular);
    letter-spacing: var(--koerber-letter-spacing-normal);
    padding: var(--koerber-spacing-xs) var(--koerber-spacing-xs) var(--koerber-spacing-xs) var(--koerber-spacing-s);
    transition: var(--koerber-transition-fast) fill;
    user-select: none;
    white-space: nowrap;
    cursor: pointer;
  }

  .list-item .text-container {
    flex: 1 1 auto;
    display: flex;
    position: relative;
    overflow: hidden;
    flex-direction: column;
    align-self: center;
  }

  .list-item .list-item__label-text,
  .list-item .list-item__secondary-text,
  .list-item .list-item__tertiary-text {
    flex: 1 1 auto;
    display: inline-block;
    text-overflow: ellipsis;
    word-wrap: break-word;
    overflow: hidden;
  }

  .list-item .list-item__prefix::slotted(koerber-icon) {
    flex: 0 0 auto;
    margin-right: var(--koerber-spacing-xs);
  }

  .line-item--has-no-subtext .list-item__prefix::slotted(koerber-icon) {
    display: flex;
  }

  .list-item .list-item__prefix::slotted(koerber-avatar) {
    flex: 0 0 auto;
    display: flex;
    align-self: center;
    margin-right: var(--koerber-spacing-xs);
  }

  .list-item .list-item__suffix::slotted(koerber-button) {
    flex: 0 0 auto;
    display: flex;
    z-index: 999;
  }

  .line-item--has-no-subtext .list-item__suffix::slotted(koerber-button) {
    top: 0px;
    right: 0px;
    position: absolute;
  }

  /*
   * Size modifiers
   */

  .list-item--small {
    min-height: var(--koerber-height-size-compact);
    padding-top: var(--koerber-spacing-xs);
    padding-bottom: var(--koerber-spacing-xs);
  }

  .list-item--medium {
    min-height: var(--koerber-height-size-standard);
    padding-top: var(--koerber-padding);
    padding-bottom: var(--koerber-padding);
  }

  .list-item--large {
    min-height: var(--koerber-height-size-comfortable);
    padding-top: var(--koerber-list-item-padding);
    padding-bottom: var(--koerber-list-item-padding);
  }

  .line-item--has-subtext {
    padding-top: var(--koerber-spacing-xs);
    padding-bottom: var(--koerber-spacing-xs);
  }

  /** prefix avatar margin adjustments */

  .list-item--small .list-item__prefix::slotted(koerber-avatar) {
    margin-top: calc(var(--koerber-spacing-2xs) * -1);
    margin-bottom: calc(var(--koerber-spacing-2xs) * -1);
  }

  .list-item--medium .list-item__prefix::slotted(koerber-avatar) {
    margin-top: var(--koerber-avatar-padding);
    margin-bottom: var(--koerber-avatar-padding);
  }

  /** Text container margin for overlaid suffix button */

  .list-item--small .text-container-has-suffix {
    margin-right: var(--koerber-height-size-compact);
  }

  .list-item--medium .text-container-has-suffix {
    margin-right: var(--koerber-height-size-standard);
  }

  .list-item--large .text-container-has-suffix {
    margin-right: var(--koerber-height-size-comfortable);
  }

  .line-item--has-subtext .text-container-has-suffix {
    margin-right: 0px;
  }

  /** text styles based on the size of respective text lines */

  .list-item--small .list-item__secondary-text,
  .list-item--small .list-item__tertiary-text,
  .list-item--medium .list-item__secondary-text,
  .list-item--medium .list-item__tertiary-text,
  .list-item--large .list-item__secondary-text,
  .list-item--large .list-item__tertiary-text {
    font-size: var(--koerber-text-sm-font-size);
    color: var(--koerber-color-text-tertiary);
    line-height: var(--koerber-text-sm-line-height);
  }

  .list-item--small .list-item__label-text,
  .list-item--medium .list-item__label-text {
    font-size: var(--koerber-text-base-font-size);
    color: var(--koerber-color-text-secondary);
  }

  .list-item--small .list-item__label-text {
    line-height: var(--koerber-text-sm-line-height);
  }

  .list-item--medium .list-item__label-text {
    line-height: var(--koerber-text-base-line-height);
  }

  .list-item--large .list-item__label-text {
    font-size: var(--koerber-text-md-font-size);
    color: var(--koerber-color-text-secondary);
    line-height: var(--koerber-text-md-line-height);
  }

  .list-item--large .text-container--has-subtext .list-item__label-text {
    font-size: var(--koerber-text-base-font-size);
    line-height: var(--koerber-text-base-line-height);
  }

  .line-item--has-subtext .list-item__label-text {
    margin-bottom: var(--koerber-spacing-2xs);
  }

  .line-item--has-subtext .list-item__tertiary-text {
    margin-top: var(--koerber-spacing-2xs);
  }

  /** focus and hover styles */

  :host(:focus-visible) {
    outline: none;
  }

  .list-item:hover,
  .list-item:focus-visible {
    background-color: var(--koerber-color-bg-fill-secondary-hover);
    color: var(--koerber-color-acce1);
    outline: none;
  }
`;

export {
  list_item_styles_default
};
//# sourceMappingURL=chunk.LSB25IGL.js.map
