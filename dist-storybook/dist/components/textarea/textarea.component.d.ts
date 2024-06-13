/** Exception due eslint doesn't support WAI-ARIA 1.3 that supports aria-description attr */
import Icon from '../icon/icon.component';
import UIKitElement from '../../internal/uikit-element';
import type { CSSResultGroup } from 'lit';
import type { UIKitFormControl } from '../../internal/uikit-element';
/**
 * @summary Textareas collect data from the user and allow multiple lines of text.
 * @documentation https://kind-desert-0fb80550f.5.azurestaticapps.net/?path=/docs/components-textarea--docs
 * @status stable
 * @since 2.0
 *
 * @event koerber-blur - Emitted when the control loses focus.
 * @event koerber-change - Emitted when an alteration to the control's value is committed by the user.
 * @event koerber-focus - Emitted when the control gains focus.
 * @event koerber-input - Emitted when the control receives input.
 *
 * @csspart base - The component's base wrapper.
 * @csspart textarea - The internal `<textarea>` control.
 */
export default class Textarea extends UIKitElement implements UIKitFormControl {
    static styles: CSSResultGroup;
    static dependencies: {
        'koerber-icon': typeof Icon;
    };
    private resizeObserver;
    input: HTMLTextAreaElement;
    private hasFocus;
    title: string;
    /** The name of the textarea, submitted as a name/value pair with form data. */
    name: string;
    /** The current value of the textarea, submitted as a name/value pair with form data. */
    value: string;
    /** The textarea's size. */
    size: 'small' | 'medium' | 'large';
    /** Placeholder text to show as a hint when the input is empty. */
    placeholder: string;
    /** The number of rows to display by default. */
    rows: number;
    /** Controls how the textarea can be resized. */
    resize: 'none' | 'vertical' | 'auto';
    /** Disables the textarea. */
    disabled: boolean;
    /** Makes the textarea readonly. */
    readonly: boolean;
    /** Makes the textarea a required field. */
    required: boolean;
    /** The current character count in the textarea. */
    characterCount: number;
    /** Controls whether and how text input is automatically capitalized as it is entered by the user. */
    autocapitalize: 'off' | 'none' | 'on' | 'sentences' | 'words' | 'characters';
    /** Indicates whether the browser's autocorrect feature is on or off. */
    autocorrect: string;
    /**
     * Specifies what permission the browser has to provide assistance in filling out form field values. Refer to
     * [this page on MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete) for available values.
     */
    autocomplete: string;
    /** Indicates that the input should receive focus on page load. */
    autofocus: boolean;
    /** Used to customize the label or icon of the Enter key on virtual keyboards. */
    enterkeyhint: 'enter' | 'done' | 'go' | 'next' | 'previous' | 'search' | 'send';
    /** Enables spell checking on the textarea. */
    spellcheck: boolean;
    /**
     * Tells the browser what type of data will be entered by the user, allowing it to display the appropriate virtual
     * keyboard on supportive devices.
     */
    inputmode: 'none' | 'text' | 'decimal' | 'numeric' | 'tel' | 'search' | 'email' | 'url';
    /**
     * to indicate that the text area is used for an error.
     */
    error: boolean;
    /** The default value of the form control. Primarily used for resetting the form control. */
    defaultValue: string;
    /** The component accessible label name */
    accessibleName: string;
    /** The component accessible description */
    accessibleDescription: string;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private handleBlur;
    private handleChange;
    private handleFocus;
    private handleInput;
    private setTextareaHeight;
    handleRowsChange(): void;
    handleValueChange(): Promise<void>;
    /** Sets focus on the textarea. */
    focus(options?: FocusOptions): void;
    /** Removes focus from the textarea. */
    blur(): void;
    /** Selects all the text in the textarea. */
    select(): void;
    /** Gets or sets the textarea's scroll position. */
    scrollPosition(position?: {
        top?: number;
        left?: number;
    }): {
        top: number;
        left: number;
    } | undefined;
    /** Sets the start and end positions of the text selection (0-based). */
    setSelectionRange(selectionStart: number, selectionEnd: number, selectionDirection?: 'forward' | 'backward' | 'none'): void;
    /** Replaces a range of text with a new string. */
    setRangeText(replacement: string, start?: number, end?: number, selectMode?: 'select' | 'start' | 'end' | 'preserve'): void;
    render(): import("lit").TemplateResult<1>;
}
