import Icon from '../icon/icon.component';
import Spinner from '../spinner/spinner.component';
import UIKitElement from '../../internal/uikit-element';
import type { CSSResultGroup } from 'lit';
import type { UIKitFormControl } from '../../internal/uikit-element';
/**
 * @summary Buttons represent actions that are available to the user.
 * @documentation https://kind-desert-0fb80550f.5.azurestaticapps.net/?path=/docs/components-button--docs
 * @status stable
 * @since 2.0
 *
 * @dependency koerber-icon
 * @dependency koerber-spinner
 *
 * @event koerber-blur - Emitted when the button loses focus.
 * @event koerber-focus - Emitted when the button gains focus.
 *
 * @slot - The button's label.
 * @slot prefix - A presentational prefix icon or similar element.
 * @slot suffix - A presentational suffix icon or similar element.
 *
 * @csspart base - The component's base wrapper.
 * @csspart prefix - The container that wraps the prefix.
 * @csspart label - The button's label.
 * @csspart suffix - The container that wraps the suffix.
 * @csspart caret - The button's caret icon, an `<koerber-icon>` element.
 */
export default class Button extends UIKitElement implements UIKitFormControl {
    static styles: CSSResultGroup;
    static dependencies: {
        'koerber-icon': typeof Icon;
        'koerber-spinner': typeof Spinner;
    };
    private readonly hasSlotController;
    private readonly localize;
    /**
     * The type of button. Note that the default value is `button` instead of `submit`, which is opposite of how native
     * `<button>` elements behave. When the type is `submit`, the button will submit the surrounding form.
     */
    private type;
    button: HTMLButtonElement | HTMLLinkElement;
    private hasFocus;
    title: string;
    /** The button's theme variant. */
    variant: 'primary' | 'secondary' | 'tertiary' | 'ghost' | 'danger' | 'secondary-danger' | 'ghost-danger';
    /** The button's size. */
    size: 'small' | 'medium' | 'large';
    /** Draws the button with a caret. Used to indicate that the button triggers a dropdown menu or similar behavior. */
    caret: boolean;
    /** Disables the button. */
    disabled: boolean;
    /** Draws the button in a loading state. */
    loading: boolean;
    /**
     * The name of the button, submitted as a name/value pair with form data, but only when this button is the submitter.
     * This attribute is ignored when `href` is present.
     */
    name: string;
    /**
     * The value of the button, submitted as a pair with the button's name as part of the form data, but only when this
     * button is the submitter. This attribute is ignored when `href` is present.
     */
    value: string;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private handleBlur;
    private handleFocus;
    private handleClick;
    private handleHostClick;
    /** Simulates a click on the button. */
    click(): void;
    /** Sets focus on the button. */
    focus(options?: FocusOptions): void;
    /** Removes focus from the button. */
    blur(): void;
    render(): import("lit").TemplateResult;
}
