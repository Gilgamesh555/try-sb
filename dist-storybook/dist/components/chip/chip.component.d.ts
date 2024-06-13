import Button from '../button/button.component';
import UIKitElement from '../../internal/uikit-element';
import type { CSSResultGroup } from 'lit';
/**
 * @summary Chips are used as labels to organize things or to indicate a selection.
 * @documentation https://kind-desert-0fb80550f.5.azurestaticapps.net/?path=/docs/components-chip--docs
 * @status stable
 * @since 2.0
 *
 * @dependency koerber-icon-button
 * @dependency koerber-icon
 *
 * @slot - The chip's content.
 * @slot next-icon - Optional next icon to use instead of the default. Works best with `<koerber-icon>`.
 * @slot previous-icon - Optional previous icon to use instead of the default. Works best with `<koerber-icon>`.
 *
 * @event koerber-click - Emitted when the chip is clicked.
 * @event koerber-remove - Emitted when the remove button is activated.
 * @event koerber-focus - Emitted when the chip gains focus.
 * @event koerber-blur - Emitted when the chip loses focus.
 *
 * @method click - Simulates a click on the chip.
 * @method focus - Sets focus on the chip.
 * @method blur - Removes focus from the chip.
 * @method delete - Removes the chip.
 *
 *
 * @csspart base - The component's base wrapper.
 * @csspart content - The chip's content.
 * @csspart remove-button - The chip's remove button, an `<sl-icon-button>`.
 * @csspart remove-button__base - The remove button's exported `base` part.
 */
export default class Chip extends UIKitElement {
    static styles: CSSResultGroup;
    static dependencies: {
        'koerber-button': typeof Button;
    };
    private readonly localize;
    /** The chip element itself */
    chip: HTMLButtonElement | HTMLLinkElement;
    /** The chip's focus state. */
    private hasFocus;
    /** The chip's size. */
    size: 'small' | 'medium' | 'large';
    /** The chip's theme variant. */
    variants: 'primary' | 'primary-outline' | 'info' | 'info-outline' | 'danger' | 'danger-outline' | 'tertiary' | 'tertiary-outline';
    /** Makes the chip removable and shows a remove button. */
    removable: boolean;
    /** Disables the chip. */
    disabled: boolean;
    /** Draws the chip in a selected state. */
    selected: boolean;
    /** Set the prefixIcon name to render */
    prefixIcon: string;
    /** Set the suffixIcon name to render */
    suffixIcon: string;
    /** Methods */
    /** Simulates a click on the chip. */
    click(): void;
    /** Sets focus on the chip. */
    focus(options?: FocusOptions): void;
    /** Removes focus from the chip. */
    blur(): void;
    /** Removes the chip. */
    delete(): void;
    handleDisabledChange(): void;
    handleSelectedChange(): void;
    /** Events */
    private handleDeleteClick;
    private handleClick;
    private handleFocus;
    private handleBlur;
    render(): import("lit").TemplateResult<1>;
}
