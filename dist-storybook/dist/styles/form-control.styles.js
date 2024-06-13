import { css } from 'lit';
export default css `
  .form-control {
    border: none;
    padding: 0;
    margin: 0;
    font-family: var(--koerber-font-family-default);
    --koerber-input-required-content: '*';
    --koerber-input-required-content-offset: -2px;
  }

  .form-control .form-control__label {
    display: none;
  }

  .form-control .form-control__help-text {
    display: none;
  }

  /* Label */
  .form-control--has-label .form-control__label {
    display: inline-block;
    color: inherit;
    margin-bottom: var(--koerber-spacing-2xs);
  }

  .form-control--has-label.form-control--small .form-control__label {
    font-size: var(--koerber-text-base-font-size);
  }

  .form-control--has-label.form-control--medium .form-control__label {
    font-size: var(--koerber-text-md-font-size);
  }

  .form-control--has-label.form-control--large .form-control__label {
    font-size: var(--koerber-text-xl-font-size);
  }

  :host([required]) .form-control--has-label .form-control__label::before {
    content: var(--koerber-input-required-content);
    margin-inline-start: var(--koerber-input-required-content-offset);
    color: inherit;
  }

  /* Help text */
  .form-control--has-help-text .form-control__help-text {
    display: block;
    color: var(--koerber-color-text-tertiary);
    margin-top: var(--koerber-spacing-2xs);
    font-family: inherit;
  }

  .form-control--has-help-text.form-control--small .form-control__help-text {
    font-size: var(--koerber-text-sm-font-size);
  }

  .form-control--has-help-text.form-control--medium .form-control__help-text {
    font-size: var(--koerber-text-base-font-size);
  }

  .form-control--has-help-text.form-control--large .form-control__help-text {
    font-size: var(--koerber-text-md-font-size);
  }

  .form-control--has-help-text.form-control--radio-group .form-control__help-text {
    margin-top: var(--koerber-spacing-2xs);
  }

  .form-control--has-error-message .form-control__error-message {
    display: block;
    color: var(--koerber-color-text-error);
    margin-top: var(--koerber-spacing-2xs);
    font-family: inherit;
  }

  .form-control--has-error-message.form-control--small .form-control__error-message {
    font-size: var(--koerber-text-sm-font-size);
  }

  .form-control--has-error-message.form-control--medium .form-control__error-message {
    font-size: var(--koerber-text-md-font-size);
  }

  .form-control--has-error-message.form-control--large .form-control__error-message {
    font-size: var(--koerber-text-lg-font-size);
  }

  .form-control__label.form-control__label--disabled {
    color: var(--koerber-color-text-disabled);
  }

  .form-control__help-text.form-control__help-text--disabled {
    color: var(--koerber-color-text-disabled);
  }
`;
