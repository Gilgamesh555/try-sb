import Icon from '../icon/icon.component';
import UIKitElement from '../../internal/uikit-element';
import type { CSSResultGroup } from 'lit';
import type { UIKitFormControl } from '../../internal/uikit-element';
/**
 * @summary Checkboxes allow the user to toggle an option on or off.
 * @documentation https://kind-desert-0fb80550f.5.azurestaticapps.net/?path=/docs/components-checkbox--docs
 * @status stable
 * @since 2.0
 *
 * @dependency koerber-icon
 *
 * @slot - The checkbox's label.
 *
 * @event koerber-blur - Emitted when the checkbox loses focus.
 * @event koerber-change - Emitted when the checked state changes.
 * @event koerber-focus - Emitted when the checkbox gains focus.
 * @event koerber-input - Emitted when the checkbox receives input.
 *
 * @csspart base - The component's base wrapper.
 * @csspart control - The square container that wraps the checkbox's checked state.
 * @csspart control--checked - Matches the control part when the checkbox is checked.
 * @csspart control--indeterminate - Matches the control part when the checkbox is indeterminate.
 * @csspart checked-icon - The checked icon, an `<koerber-icon>` element.
 * @csspart indeterminate-icon - The indeterminate icon, an `<koerber-icon>` element.
 * @csspart label - The container that wraps the checkbox's label.
 */
export default class Checkbox extends UIKitElement implements UIKitFormControl {
    static styles: CSSResultGroup;
    static dependencies: {
        'koerber-icon': typeof Icon;
    };
    input: HTMLInputElement;
    private hasFocus;
    title: string;
    /** The name of the checkbox, submitted as a name/value pair with form data. */
    name: string;
    /** The current value of the checkbox, submitted as a name/value pair with form data. */
    value: string;
    /** Label of the checkbox. */
    label: string;
    /** The checkbox's size. */
    size: 'standard' | 'comfortable';
    /** Disables the checkbox. */
    disabled: boolean;
    /** Draws the checkbox in a checked state. */
    checked: boolean;
    /**
     * Draws the checkbox in an indeterminate state. This is usually applied to checkboxes that represents a "select
     * all/none" behavior when associated checkboxes have a mix of checked and unchecked states.
     */
    indeterminate: boolean;
    /** The default value of the form control. Primarily used for resetting the form control. */
    defaultChecked: boolean;
    /** Makes the checkbox a required field. */
    required: boolean;
    /**
     * Used to indicate that the input has some error based on some rule.
     */
    error: boolean;
    /** The component accessible label name */
    accessibleName: string;
    /** The component accessible description */
    accessibleDescription: string;
    private handleClick;
    private handleWrapperClick;
    private handleKeyDown;
    simulateSpacebarPress(): void;
    private handleBlur;
    private handleInput;
    private handleFocus;
    handleStateChange(): void;
    /** Simulates a click on the checkbox. */
    click(): void;
    /** Sets focus on the checkbox. */
    focus(options?: FocusOptions): void;
    /** Removes focus from the checkbox. */
    blur(): void;
    render(): import("lit").TemplateResult<1>;
}
