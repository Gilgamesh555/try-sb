// src/components/avatar/avatar.styles.ts
import { css } from "lit";
var avatar_styles_default = css`
  :host {
    display: inline-block;
    --size: 2rem;
    --koerber-avatar-size-small: 24px;
  }

  .avatar {
    display: inline-flex;
    border-radius: var(--koerber-color-border-disabled);
    align-items: center;
    justify-content: center;
    position: relative;
    width: var(--size);
    height: var(--size);
    background-color: var(--koerber-color-bg-fill-tertiary);
    color: var(--koerber-color-text);
    font-family: var(--koerber-font-family-default);
    font-size: var(--koerber-text-base-font-size);
    font-weight: var(--koerber-font-weight-regular);
    user-select: none;
    vertical-align: middle;
    border-radius: 100%;
  }

  /** States */

  /** Hover */
  .avatar:hover {
    outline: solid var(--koerber-border-width-s) var(--koerber-color-border-hover);
  }

  /** Focus */
  .avatar.avatar--focused {
    outline: solid var(--koerber-border-width-s) var(--koerber-color-border-pressed);
  }

  /** Avatar Sizes */
  .avatar--large {
    height: var(--koerber-height-size-comfortable);
    width: var(--koerber-height-size-comfortable);
    font-size: var(--koerber-text-lg-font-size);
  }

  .avatar--medium {
    height: var(--size);
    width: var(--size);
    font-size: var(--koerber-text-base-font-size);
  }

  .avatar--small {
    height: var(--koerber-avatar-size-small);
    width: var(--koerber-avatar-size-small);
    font-size: var(--koerber-text-sm-font-size);
  }

  .avatar__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .avatar__initials {
    line-height: 1;
    text-transform: uppercase;
  }

  .avatar__image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    overflow: hidden;
    border-radius: 100%;
  }
`;

export {
  avatar_styles_default
};
//# sourceMappingURL=chunk.QUHQK5GT.js.map
