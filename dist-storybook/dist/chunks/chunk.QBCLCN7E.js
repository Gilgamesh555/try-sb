import {
  component_styles_default
} from "./chunk.2NT3B5WJ.js";

// src/components/card/card.styles.ts
import { css } from "lit";
var card_styles_default = css`
  ${component_styles_default}

  :host {
    --border-color: var(--koerber-color-border-secondary);
    --border-radius: var(--koerber-border-radius-medium);
    --border-width: var(--koerber-border-width-s);
    --padding: var(--koerber-spacing-s);

    display: inline-block;
  }

  .card {
    display: flex;
    flex-direction: column;
    background-color: var(--koerber-color-bg-surface);
    border: solid var(--border-width) var(--border-color);
    border-radius: var(--border-radius);
  }

  .card__image {
    display: flex;
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
    margin: calc(-1 * var(--border-width));
    overflow: hidden;
  }

  .card__image::slotted(img) {
    display: block;
    width: 100%;
  }

  .card:not(.card--has-image) .card__image {
    display: none;
  }

  .card-content {
    padding: var(--padding);
  }

  .card__header {
    display: block;
  }

  .card:not(.card--has-header) .card__header {
    display: none;
  }

  .card:not(.card--has-image) .card__header {
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
  }

  .card__body {
    display: block;
  }

  .card__body--has-margin-bottom {
    margin-bottom: var(--koerber-spacing-m);
  }

  .card__body--has-margin-top {
    margin-top: var(--koerber-spacing-m);
  }

  ::slotted([slot='footer']) {
    display: flex;
    flex-direction: row;
    gap: var(--koerber-spacing-xs);
    flex: 1;
    justify-content: flex-end;
  }

  .card:not(.card--has-footer) .card__footer {
    display: none;
  }
`;

export {
  card_styles_default
};
//# sourceMappingURL=chunk.QBCLCN7E.js.map
