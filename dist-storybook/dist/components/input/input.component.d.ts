/** Exception due eslint doesn't support WAI-ARIA 1.3 that supports aria-description attr */
import Divider from '../divider/divider.component';
import Icon from '../icon/icon.component';
import UIKitElement from '../../internal/uikit-element';
import type { CSSResultGroup } from 'lit';
import type { UIKitFormControl } from '../../internal/uikit-element';
/**
 * @summary Inputs collect data from the user.
 * @documentation https://kind-desert-0fb80550f.5.azurestaticapps.net/?path=/docs/components-input--docs
 * @status stable
 * @since 2.0
 *
 * @dependency koerber-icon
 *
 * @slot prefix - Used to prepend a presentational icon or similar element to the input.
 * @slot suffix - Used to append a presentational icon or similar element to the input.
 * @slot clear-icon - An icon to use in lieu of the default clear icon.
 * @slot show-password-icon - An icon to use in lieu of the default show password icon.
 * @slot hide-password-icon - An icon to use in lieu of the default hide password icon.
 *
 * @event koerber-blur - Emitted when the control loses focus.
 * @event koerber-change - Emitted when an alteration to the control's value is committed by the user.
 * @event koerber-clear - Emitted when the clear button is activated.
 * @event koerber-focus - Emitted when the control gains focus.
 * @event koerber-input - Emitted when the control receives input.
 *
 * @csspart base - The component's base wrapper.
 * @csspart input - The internal `<input>` control.
 * @csspart prefix - The container that wraps the prefix.
 * @csspart clear-button - The clear button.
 * @csspart password-toggle-button - The password toggle button.
 * @csspart suffix - The container that wraps the suffix.

 */
export default class Input extends UIKitElement implements UIKitFormControl {
    static styles: CSSResultGroup;
    static dependencies: {
        'koerber-icon': typeof Icon;
        'koerber-divider': typeof Divider;
    };
    private readonly localize;
    input: HTMLInputElement;
    private hasFocus;
    title: string;
    /**
     * The type of input. Works the same as a native `<input>` element, but only a subset of types are supported. Defaults
     * to `text`.
     */
    type: 'date' | 'datetime-local' | 'email' | 'number' | 'password' | 'search' | 'tel' | 'text' | 'time' | 'url';
    /** The name of the input, submitted as a name/value pair with form data. */
    name: string;
    /** The current value of the input, submitted as a name/value pair with form data. */
    value: string;
    /** The default value of the form control. Primarily used for resetting the form control. */
    defaultValue: string;
    /** The input's size. */
    size: 'small' | 'medium' | 'large';
    /** Adds a clear button when the input is not empty. */
    clearable: boolean;
    /** Disables the input. */
    disabled: boolean;
    /** Placeholder text to show as a hint when the input is empty. */
    placeholder: string;
    /** Makes the input readonly. */
    readonly: boolean;
    /** Adds a button to toggle the password's visibility. Only applies to password types. */
    passwordToggle: boolean;
    /** Determines whether or not the password is currently visible. Only applies to password input types. */
    passwordVisible: boolean;
    /**
     * Specifies the granularity that the value must adhere to, or the special value `any` which means no stepping is
     * implied, allowing any numeric value. Only applies to date and number input types.
     */
    step: number | 'any';
    /** Controls whether and how text input is automatically capitalized as it is entered by the user. */
    autocapitalize: 'off' | 'none' | 'on' | 'sentences' | 'words' | 'characters';
    /** Indicates whether the browser's autocorrect feature is on or off. */
    autocorrect: 'off' | 'on';
    /**
     * Specifies what permission the browser has to provide assistance in filling out form field values. Refer to
     * [this page on MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete) for available values.
     */
    autocomplete: string;
    /** Indicates that the input should receive focus on page load. */
    autofocus: boolean;
    /** Used to customize the label or icon of the Enter key on virtual keyboards. */
    enterkeyhint: 'enter' | 'done' | 'go' | 'next' | 'previous' | 'search' | 'send';
    /** Enables spell checking on the input. */
    spellcheck: boolean;
    /**
     * Tells the browser what type of data will be entered by the user, allowing it to display the appropriate virtual
     * keyboard on supportive devices.
     */
    inputmode: 'none' | 'text' | 'decimal' | 'numeric' | 'tel' | 'search' | 'email' | 'url';
    /**
     * Used to indicate that the input has some error based on some rule.
     */
    error: boolean;
    /**
     * Used to define an Icon as a prefix of Input
     */
    prefixIcon: string;
    /** Used to define an Icon as a suffix of Input */
    suffixIcon: string;
    /** Used to define an accessible name for the input */
    accessibleName: string;
    /** Used to define an accessible description for the input */
    accessibleDescription: string;
    /** Gets or sets the current value as a `Date` object. Returns `null` if the value can't be converted. */
    get valueAsDate(): Date | null;
    set valueAsDate(newValue: Date | null);
    /** Gets or sets the current value as a number. Returns `NaN` if the value can't be converted. */
    get valueAsNumber(): number;
    set valueAsNumber(newValue: number);
    private handleBlur;
    private handleChange;
    private handleClearClick;
    private handleIncreaseValueClick;
    private handleDecreaseValueClick;
    private handleFocus;
    private handleInput;
    private handlePasswordToggle;
    handleStepChange(): void;
    handleValueChange(): Promise<void>;
    /** Sets focus on the input. */
    focus(options?: FocusOptions): void;
    /** Removes focus from the input. */
    blur(): void;
    /** Selects all the text in the input. */
    select(): void;
    /** Sets the start and end positions of the text selection (0-based). */
    setSelectionRange(selectionStart: number, selectionEnd: number, selectionDirection?: 'forward' | 'backward' | 'none'): void;
    /** Replaces a range of text with a new string. */
    setRangeText(replacement: string, start?: number, end?: number, selectMode?: 'select' | 'start' | 'end' | 'preserve'): void;
    /** Displays the browser picker for an input element (only works if the browser supports it for the input type). */
    showPicker(): void;
    /** Increments the value of a numeric input type by the value of the step attribute. */
    stepUp(): void;
    /** Decrements the value of a numeric input type by the value of the step attribute. */
    stepDown(): void;
    render(): import("lit").TemplateResult<1>;
}
