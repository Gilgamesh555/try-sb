// src/components/form-field/form-field.styles.ts
import { css } from "lit";
var form_field_styles_default = css`
  :host {
    display: block;
  }

  .form-field {
    display: flex;
    flex-direction: column;
  }

  .heading-container {
    display: flex;
    justify-content: space-between;
  }

  .value-hint {
    font-size: var(--koerber-text-sm-font-size);
    color: var(--koerber-color-text-tertiary);
  }

  .form-control {
    display: flex;
    align-items: center;
  }

  .form-control .control {
    display: flex;
    flex-direction: column;
    flex: 1;
    position: relative;
  }

  .help-text {
    font-size: var(--koerber-text-sm-font-size);
    color: var(--koerber-color-text-tertiary);
  }

  .label,
  .value-hint,
  .form-control,
  .error {
    padding-bottom: var(--koerber-spacing-2xs);
  }

  ::slotted([slot='prefix']) {
    margin-right: var(--koerber-spacing-xs);
  }
  ::slotted([slot='suffix']) {
    margin-left: var(--koerber-spacing-xs);
  }
`;

export {
  form_field_styles_default
};
//# sourceMappingURL=chunk.ADYWMFJO.js.map
