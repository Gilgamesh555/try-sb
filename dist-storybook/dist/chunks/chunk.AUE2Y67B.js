// src/components/badge/badge.styles.ts
import { css } from "lit";
var badge_styles_default = css`
  :host {
    display: inline-flex;
    --koerber-badge-height-extra-small: 4px;
    --koerber-badge-height-small: 8px;
    --koerber-badge-height-medium: 16px;
    --koerber-badge-height-large: 24px;
  }

  .badge {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: var(--koerber-text-sm-font-size);
    font-weight: var(--koerber-font-weight-regular);
    font-style: normal;
    font-family: var(--koerber-font-family-default);
    line-height: var(--koerber-text-sm-line-height);
    border-radius: var(--koerber-border-radius-x-large);
    white-space: nowrap;
    background: var(--koerber-color-bg-fill-error);
    user-select: none;
    cursor: inherit;
    color: var(--koerber-color-text-bg-fill);
  }

  /* Variant modifiers */
  .badge--extra-small {
    width: var(--koerber-spacing-2xs);
    height: var(--koerber-badge-height-extra-small);
  }

  .badge--small {
    width: var(--koerber-spacing-xs);
    height: var(--koerber-badge-height-small);
  }

  .badge--medium {
    width: var(--koerber-spacing-s);
    height: var(--koerber-badge-height-medium);
  }

  .badge--large {
    padding: var(--koerber-text-sm-font-size);
    height: var(--koerber-badge-height-large);
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 var(--pulse-color);
    }
    70% {
      box-shadow: 0 0 0 0.5rem transparent;
    }
    100% {
      box-shadow: 0 0 0 0 transparent;
    }
  }
`;

export {
  badge_styles_default
};
//# sourceMappingURL=chunk.AUE2Y67B.js.map
