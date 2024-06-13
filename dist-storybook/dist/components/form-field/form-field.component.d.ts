import FormFieldError from '../form-field-error/form-field-error.component';
import FormFieldLabel from '../form-field-label/form-field-label.component';
import UIKitElement from '../../internal/uikit-element';
import type { CSSResultGroup } from 'lit';
/**
 * @documentation https://kind-desert-0fb80550f.5.azurestaticapps.net
 *
 * @slot (default) - form field control or a suitable display value if in readonly mode.
 * @slot prefix - provides custom content for the form field before field control. It is used to provide context or enhance functionality.
 * @slot suffix - provides custom content for the form field before field control. It is used to provide context or enhance functionality.
 * @slot help-text - custom content for help text.
 * @slot error - custom content for error messages below the field control. can be used to provide form field related error messages
 * @slot footer - custom content for form field footer. can be used to provide additional content after form field control and help-text area.
 *
 * @csspart base - The component's base wrapper.
 * @csspart form-control - The component's form control.
 * @csspart error - The component's error wrapper.
 */
export default class FormField extends UIKitElement {
    static styles: CSSResultGroup;
    static dependencies: {
        'koerber-form-field-label': typeof FormFieldLabel;
        'koerber-form-field-error': typeof FormFieldError;
    };
    defaultSlot: HTMLSlotElement;
    errorSlot: HTMLSlotElement;
    suffixSlot: HTMLSlotElement;
    _controlElements: HTMLElement[];
    _labelElements: HTMLElement[];
    private readonly hasSlotController;
    /** The form-field's help text. If you need to display HTML, use the `help-text` slot instead. */
    helpText: string;
    /** The form-field's set of errors */
    errors: string[];
    /** The label of the component */
    label: string;
    /** The Value Hint of the component */
    valueHint: string;
    /** Sets if the user input is strictly required */
    required: boolean;
    /** Handles if the form field will contain a tooltip in its label */
    tooltip: string;
    connectedCallback(): void;
    protected updated(): void;
    private handleSlotChange;
    private setAccessibilityAttributes;
    private setErrorOnControlElement;
    private handleErrorSlotChanged;
    handleErrorsChanged(): void;
    /** Sets the errors for the form-field. */
    setErrors(errors: string[]): void;
    /** Clears the errors for the form-field. */
    clearErrors(): void;
    render(): import("lit").TemplateResult<1>;
}
