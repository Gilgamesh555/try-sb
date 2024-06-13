// src/components/drawer/drawer.styles.ts
import { css } from "lit";
var drawer_styles_default = css`
  :host {
    --koerber-drawer-contained-z-index: 910;
    --koerber-drawer-z-index: 920;
    --koerber-drawer-small-max-width: 428px;
    --koerber-drawer-large-max-width: 1094px;
    --koerber-drawer-header-spacing: var(--koerber-spacing-m);
    --koerber-drawer-body-spacing: var(--koerber-spacing-m);
    --koerber-drawer-footer-spacing: var(--koerber-spacing-m);
    --koerber-drawer-panel-spacing: var(--koerber-spacing-xs);
    --koerber-drawer-overlay-color: var(--koerber-color-bg-fill-alt);
    --koerber-drawer-overlay-opacity: 35%;

    display: contents;
  }

  .drawer {
    top: 0;
    inset-inline-start: 0;
    width: 100%;
    height: calc(100% - var(--koerber-drawer-panel-spacing));
    pointer-events: none;
    overflow: hidden;
  }

  .drawer--contained {
    position: absolute;
    z-index: var(--koerber-drawer-contained-z-index);
  }

  .drawer--fixed {
    position: fixed;
    z-index: var(--koerber-drawer-z-index);
  }

  .drawer__panel {
    position: absolute;
    display: flex;
    flex-direction: column;
    z-index: var(--koerber-drawer-z-index);
    max-height: 100%;
    background-color: var(--koerber-color-bg-surface);
    box-shadow: var(--koerber-shadow-x-large);
    overflow: auto;
    pointer-events: all;
    border-radius: var(--koerber-border-radius-small);
    margin: var(--koerber-drawer-panel-spacing);
  }

  .drawer--small .drawer__panel {
    width: 100%;
    max-width: var(--koerber-drawer-small-max-width);
  }

  .drawer--large .drawer__panel {
    width: 80%;
    max-width: var(--koerber-drawer-large-max-width);
  }

  .drawer__panel:focus {
    outline: none;
  }

  .drawer--end .drawer__panel {
    top: 0;
    inset-inline-end: 0;
    bottom: auto;
    inset-inline-start: auto;
    height: 100%;
  }

  .drawer--start .drawer__panel {
    top: 0;
    inset-inline-end: auto;
    bottom: auto;
    inset-inline-start: 0;
    height: 100%;
  }

  .drawer__header {
    display: flex;
    align-items: center;
  }

  .drawer__title {
    display: flex;
    flex: 1 1 auto;
    font: inherit;
    color: var(--koerber-color-text);
    font-size: var(--koerber-text-lg-font-size);
    line-height: var(--koerber-text-lg-line-height);
    font-weight: var(--koerber-font-weight-bold);
    padding: var(--koerber-drawer-header-spacing) 0 0 var(--koerber-drawer-header-spacing);
    margin: 0;
  }

  .drawer:not(.drawer--has-icon) .drawer__title-icon {
    display: none;
  }

  .drawer__title-icon {
    padding: var(--koerber-spacing-xs);
    display: flex;
    align-items: center;
  }

  .drawer__title-label {
    display: flex;
    align-items: center;
    padding-left: var(--koerber-spacing-s);
  }

  .drawer:not(.drawer--has-icon) .drawer__title-label {
    padding-left: 0;
  }

  .drawer__header-actions {
    flex-shrink: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
    gap: var(--koerber-spacing-2x-small);
    padding: var(--koerber-drawer-header-spacing) var(--koerber-drawer-header-spacing) 0 0;
  }

  .drawer__header-actions koerber-icon-button,
  .drawer__header-actions ::slotted(koerber-icon-button) {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--koerber-font-size-medium);
  }

  .drawer__body {
    flex: 1 1 auto;
    display: block;
    padding: var(--koerber-drawer-body-spacing) var(--koerber-drawer-body-spacing) 0 var(--koerber-drawer-body-spacing);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
  }
  .drawer:not(.drawer--has-footer) .drawer__body {
    padding-bottom: calc(var(--koerber-drawer-footer-spacing) + var(--koerber-drawer-panel-spacing));
  }
  .drawer__footer {
    display: flex;
    justify-content: end;
    text-align: right;
    padding: var(--koerber-drawer-footer-spacing) var(--koerber-drawer-footer-spacing)
      calc(var(--koerber-drawer-footer-spacing) + var(--koerber-drawer-panel-spacing))
      var(--koerber-drawer-footer-spacing);
  }

  .drawer__footer ::slotted(koerber-button:not(:last-of-type)) {
    margin-inline-end: var(--koerber-spacing-xs);
  }

  .drawer--small .drawer__footer ::slotted(koerber-button) {
    width: 100%;
  }

  .drawer:not(.drawer--has-footer) .drawer__footer {
    display: none;
  }

  .drawer__overlay {
    display: block;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    pointer-events: all;
    background-color: color-mix(
      in srgb,
      var(--koerber-drawer-overlay-color) var(--koerber-drawer-overlay-opacity),
      transparent
    );
  }

  .drawer--contained .drawer__overlay {
    display: none;
  }

  @media (forced-colors: active) {
    .drawer__panel {
      border: solid 1px var(--koerber-color-neutral-0);
    }
  }
`;

export {
  drawer_styles_default
};
//# sourceMappingURL=chunk.FKNIDBZ2.js.map
