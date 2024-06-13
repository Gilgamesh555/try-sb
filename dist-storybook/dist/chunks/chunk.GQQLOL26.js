// src/components/divider/divider.styles.ts
import { css } from "lit";
var divider_styles_default = css`
  :host {
    --color: var(--koerber-color-bg-fill);
    --width: var(--koerber-border-width-s);
    --spacing: var(--koerber-spacing-s);
    width: 100%;
    height: 100%;
  }

  :host(:not([vertical])) {
    display: block;
    border-top: solid var(--width) var(--color);
    margin: 0;
    color: var(--color);
  }

  :host([vertical]) {
    display: flex;
    height: 10rem;
    border-left: solid var(--width) var(--color);
    margin: 0;
    color: var(--color);
  }
`;

export {
  divider_styles_default
};
//# sourceMappingURL=chunk.GQQLOL26.js.map
