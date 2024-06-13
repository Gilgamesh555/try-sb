// src/components/dropdown/dropdown.styles.ts
import { css } from "lit";
var dropdown_styles_default = css`
  :host {
    display: inline-block;
    --koerber-z-index-dropdown: 900;
    --koerber-panel-width-minimum: 192px;
    --koerber-panel-width-maximum: 280px;
  }

  .dropdown::part(popup) {
    z-index: var(--koerber-z-index-dropdown);
  }

  .dropdown[data-current-placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .dropdown[data-current-placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .dropdown[data-current-placement^='left']::part(popup) {
    transform-origin: right;
  }

  .dropdown[data-current-placement^='right']::part(popup) {
    transform-origin: left;
  }

  .dropdown__trigger {
    display: block;
  }

  .dropdown__panel {
    font-family: var(--koerber-font-family-default);
    font-size: var(--koerber-text-md-font-size);
    font-weight: var(--koerber-font-weight-regular);
    border-radius: var(--koerber-border-radius-medium);
    pointer-events: none;
    margin: 4px 0 4px 0;
  }

  .dropdown--open .dropdown__panel {
    display: block;
    pointer-events: all;
  }

  /* When users slot a menu, make sure it conforms to the popup's auto-size */
  ::slotted(koerber-menu) {
    min-width: clamp(var(--koerber-panel-width-minimum), var(--width), var(--koerber-panel-width-maximum)) !important;
    max-height: var(--auto-size-available-height) !important;
  }
`;

export {
  dropdown_styles_default
};
//# sourceMappingURL=chunk.G3KZRWEQ.js.map
