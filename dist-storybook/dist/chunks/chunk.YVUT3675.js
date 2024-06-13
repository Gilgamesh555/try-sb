// src/components/link/link.styles.ts
import { css } from "lit";
var link_styles_default = css`
  :host {
    display: flex;
  }

  .link {
    text-decoration: none;
    display: flex;
  }

  .link--small {
    color: var(--koerber-color-text-link);
    font-size: var(--koerber-text-sm-font-size);
    line-height: var(--koerber-text-sm-line-height);
    font-weight: var(--koerber-font-weight-regular);
  }

  .link--medium {
    color: var(--koerber-color-text-link);
    font-size: var(--koerber-text-base-font-size);
    line-height: var(--koerber-text-base-line-height);
    font-weight: var(--koerber-font-weight-regular);
  }

  .link--large {
    color: var(--koerber-color-text-link);
    font-size: var(--koerber-text-md-font-size);
    line-height: var(--koerber-text-md-line-height);
    font-weight: var(--koerber-font-weight-regular);
  }

  .link--underline {
    color: var(--koerber-color-text-link);
    text-decoration: underline;
  }

  .link--disabled {
    color: var(--koerber-color-text-disabled);
    cursor: default;
  }

  .link--disabled .link__icon {
    color: var(--koerber-color-icon-disabled);
  }

  .link__icon {
    margin-top: -1px;
    margin-left: var(--koerber-spacing-2xs);
    display: inline-block;
  }

  .link:visited:not(.link--disabled) {
    color: var(--koerber-color-text-link-visited);
  }

  .link:hover:not(.link--disabled) {
    color: var(--koerber-color-text-link-hover);
  }

  .link:active:not(.link--disabled) {
    color: var(--koerber-color-text);
  }

  .link:focus:not(.link--disabled) {
    color: var(--koerber-color-text-link);
    outline: var(--koerber-border-width-s) solid var(--koerber-color-border-focus);
  }
`;

export {
  link_styles_default
};
//# sourceMappingURL=chunk.YVUT3675.js.map
