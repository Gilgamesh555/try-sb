// src/components/tag/tag.styles.ts
import { css } from "lit";
var tag_styles_default = css`
  :host {
    display: inline-block;
    --koerber-tag-height-small: 20px;
    --koerber-tag-height-medium: 24px;
  }

  .tag {
    display: flex;
    align-items: center;
    border: solid 1px;
    line-height: 1;
    white-space: nowrap;
    user-select: none;
    background-color: var(--koerber-color-text-disabled);
    color: var(--koerber-color-text-bg-fill);
  }

  .tag__remove::part(base) {
    color: inherit;
    padding: 0;
  }

  /*
   * Size modifiers
   */

  .tag--small {
    font-size: var(--koerber-text-sm-font-size);
    height: var(--koerber-tag-height-small);
    line-height: var(--koerber-text-md-line-height);
    border-radius: var(--koerber-border-radius-small);
    padding-left: var(--koerber-spacing-xs);
    padding-right: var(--koerber-spacing-2xs);
  }

  .tag--medium {
    font-size: var(--koerber-text-base-font-size);
    height: var(--koerber-tag-height-medium);
    line-height: var(--koerber-text-md-line-height);
    border-radius: var(--koerber-border-radius-medium);
    padding-left: var(--koerber-spacing-xs);
    padding-right: var(--koerber-spacing-2xs);
  }

  .tag--large {
    font-size: var(--koerber-text-md-font-size);
    height: var(--koerber-height-size-compact);
    line-height: var(--koerber-text-md-line-height);
    border-radius: var(--koerber-border-radius-medium);
    padding-left: var(--koerber-spacing-xs);
    padding-right: var(--koerber-spacing-2xs);
  }

  .tag__remove {
    margin-inline-start: var(--koerber-spacing-xs);
  }

  /*
   * Pill modifier
   */

  .tag--pill {
    border-radius: var(--koerber-border-radius-pill);
  }
`;

export {
  tag_styles_default
};
//# sourceMappingURL=chunk.KISTGNVH.js.map
