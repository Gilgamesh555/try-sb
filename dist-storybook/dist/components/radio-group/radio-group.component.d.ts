import ButtonGroup from '../button-group/button-group.component';
import UIKitElement from '../../internal/uikit-element';
import type { CSSResultGroup } from 'lit';
import type { UIKitFormControl } from '../../internal/uikit-element';
/**
 * @summary Radio groups are used to group multiple [radios](/components/radio) or [radio buttons](/components/radio-button) so they function as a single form control.
 * @documentation https://kind-desert-0fb80550f.5.azurestaticapps.net
 * @status stable
 * @since 2.0
 *
 * @dependency koerber-button-group
 *
 * @slot - The default slot where `<koerber-radio>` or `<koerber-radio-button>` elements are placed.
 *  attribute.
 *
 * @event koerber-change - Emitted when the radio group's selected value changes.
 * @event koerber-input - Emitted when the radio group receives user input.
 *
 * @csspart button-group - The button group that wraps radio buttons.
 * @csspart button-group__base - The button group's `base` part.
 */
export default class RadioGroup extends UIKitElement implements UIKitFormControl {
    static styles: CSSResultGroup;
    static dependencies: {
        'koerber-button-group': typeof ButtonGroup;
    };
    defaultSlot: HTMLSlotElement;
    private hasButtonGroup;
    defaultValue: string;
    /** The name of the radio group, submitted as a name/value pair with form data. */
    name: string;
    /** The current value of the radio group, submitted as a name/value pair with form data. */
    value: string;
    /** The radio group's size. This size will be applied to all child radios and radio buttons. */
    size: 'small' | 'medium' | 'large';
    /** Ensures a child radio is checked before allowing the containing form to submit. */
    required: boolean;
    /** set layout horizontal/vertical. */
    horizontal: boolean;
    /** Disables all child radio buttons. */
    disabled: boolean;
    /** Put the checked item to error state - indicating an error to the user. */
    error: boolean;
    connectedCallback(): void;
    private getAllRadios;
    private handleRadioClick;
    private handleKeyDown;
    private syncRadioElements;
    private syncRadios;
    private updateCheckedRadio;
    handleSizeChange(): void;
    handleValueChange(): void;
    handleDisabledChange(): void;
    handleErrorChange(): void;
    focus(): void;
    blur(): void;
    render(): import("lit").TemplateResult<1>;
}
