// src/components/icon-button/icon-button.styles.ts
import { css } from "lit";
var icon_button_styles_default = css`
  :host {
    display: inline-block;
  }

  .icon-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--koerber-border-radius-medium);
    font-size: inherit;
    color: inherit;
    padding: var(--koerber-spacing-xs);
    cursor: pointer;
    transition: var(--koerber-transition-x-fast) color;
    -webkit-appearance: none;
  }

  .icon-button:focus {
    outline: none;
  }

  .icon-button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .icon-button:focus-visible {
    outline: var(--koerber-focus-ring);
    outline-offset: var(--koerber-border-offset);
  }

  .icon-button__icon {
    pointer-events: none;
  }

  .icon-button:hover {
    color: var(--koerber-color-icon-hover);
  }
`;

export {
  icon_button_styles_default
};
//# sourceMappingURL=chunk.PRFIYQFP.js.map
