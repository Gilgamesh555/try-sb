// src/components/radio-group/radio-group.styles.ts
import { css } from "lit";
var radio_group_styles_default = css`
  :host {
    display: block;
    --koerber-input-required-content: '*';
    --koerber-input-required-content-offset: -2px;
  }

  .form-control {
    border: none;
    padding: 0;
    margin: 0;
    font-family: var(--koerber-font-family-default);
  }

  .form-control__label {
    padding: 0;
  }

  .radio-group--required .radio-group__label::after {
    content: var(--koerber-input-required-content);
    margin-inline-start: var(--koerber-input-required-content-offset);
  }

  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }

  .radio-group--horizontal {
    display: flex;
    flex-direction: row;
  }

  ::slotted(koerber-radio) {
    padding-top: var(--koerber-spacing-xs);
    padding-bottom: var(--koerber-spacing-xs);
  }

  .radio-group--horizontal ::slotted(koerber-radio:not(:last-child)) {
    margin-right: var(--koerber-spacing-s);
  }
`;

export {
  radio_group_styles_default
};
//# sourceMappingURL=chunk.YW7RMRYI.js.map
