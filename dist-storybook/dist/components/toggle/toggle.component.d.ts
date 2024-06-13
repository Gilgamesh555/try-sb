import UIKitElement from '../../internal/uikit-element';
import type { CSSResultGroup } from 'lit';
import type { UIKitFormControl } from '../../internal/uikit-element';
/**
 * @summary toggles allow the user to toggle an option on or off.
 * @documentation https://kind-desert-0fb80550f.5.azurestaticapps.net
 * @status stable
 * @since 2.0
 *
 * @slot - The toggle's label.
 *
 * @event koerber-blur - Emitted when the control loses focus.
 * @event koerber-change - Emitted when the control's checked state changes.
 * @event koerber-input - Emitted when the control receives input.
 * @event koerber-focus - Emitted when the control gains focus.
 *
 * @csspart base - The component's base wrapper.
 * @csspart control - The control that houses the toggle's thumb.
 * @csspart thumb - The toggle's thumb.
 * @csspart label - The toggle's label.
 *
 * @cssproperty --width - The width of the toggle.
 * @cssproperty --height - The height of the toggle.
 * @cssproperty --thumb-size - The size of the thumb.
 */
export default class Toggle extends UIKitElement implements UIKitFormControl {
    static styles: CSSResultGroup;
    input: HTMLInputElement;
    private hasFocus;
    title: string;
    /** The name of the toggle, submitted as a name/value pair with form data. */
    name: string;
    /** The current value of the toggle, submitted as a name/value pair with form data. */
    value: string;
    /** Label of the toggle. */
    label: string;
    /** The toggle's size. */
    size: 'standard' | 'comfortable';
    /** Disables the toggle. */
    disabled: boolean;
    /** Draws the toggle in a checked state. */
    checked: boolean;
    /** The default value of the form control. Primarily used for resetting the form control. */
    defaultChecked: boolean;
    /** Makes the toggle a required field. */
    required: boolean;
    /** Indicates the form control is in an error state. */
    error: boolean;
    /** The component accessible label name */
    accessibleName: string;
    /** The component accessible description */
    accessibleDescription: string;
    private handleBlur;
    private handleInput;
    private handleClick;
    private handleFocus;
    private handleKeyDown;
    handleCheckedChange(): void;
    /** Simulates a click on the toggle. */
    click(): void;
    /** Sets focus on the toggle. */
    focus(options?: FocusOptions): void;
    /** Removes focus from the toggle. */
    blur(): void;
    render(): import("lit").TemplateResult<1>;
}
