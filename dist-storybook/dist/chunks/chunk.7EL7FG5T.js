// src/components/menu/menu.styles.ts
import { css } from "lit";
var menu_styles_default = css`
  :host {
    display: block;
    position: relative;
    background: var(--koerber-panel-background-color);
    border: solid var(--koerber-shape-border-divider) var(--koerber-color-border);
    border-radius: var(--koerber-border-radius-small);
    padding: var(--koerber-spacing-xs) 0 0 0;
    overflow: auto;
    overscroll-behavior: none;
    max-width: 290px;
    min-width: 180px;
    width: min-content;
  }

  ::slotted(koerber-divider) {
    --spacing: var(--koerber-spacing-xs);
  }
`;

export {
  menu_styles_default
};
//# sourceMappingURL=chunk.7EL7FG5T.js.map
