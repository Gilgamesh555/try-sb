import UIKitElement from '../../internal/uikit-element';
import type { CSSResultGroup } from 'lit';
/**
 * @summary Radios buttons allow the user to select a single option from a group using a button-like control.
 * @documentation https://kind-desert-0fb80550f.5.azurestaticapps.net
 * @status stable
 * @since 2.0
 *
 * @slot - The radio button's label.
 * @slot prefix - A presentational prefix icon or similar element.
 * @slot suffix - A presentational suffix icon or similar element.
 *
 * @event koerber-blur - Emitted when the button loses focus.
 * @event koerber-focus - Emitted when the button gains focus.
 *
 * @csspart base - The component's base wrapper.
 * @csspart button - The internal `<button>` element.
 * @csspart button--checked - The internal button element when the radio button is checked.
 * @csspart prefix - The container that wraps the prefix.
 * @csspart label - The container that wraps the radio button's label.
 * @csspart suffix - The container that wraps the suffix.
 */
export default class RadioButton extends UIKitElement {
    static styles: CSSResultGroup;
    private readonly hasSlotController;
    input: HTMLInputElement;
    hiddenInput: HTMLInputElement;
    protected hasFocus: boolean;
    /**
     * @internal The radio button's checked state. This is exposed as an "internal" attribute so we can reflect it, making
     * it easier to style in button groups.
     */
    checked: boolean;
    /** The radio's value. When selected, the radio group will receive this value. */
    value: string;
    /** Disables the radio button. */
    disabled: boolean;
    /**
     * The radio button's size. When used inside a radio group, the size will be determined by the radio group's size so
     * this attribute can typically be omitted.
     */
    size: 'small' | 'medium' | 'large';
    /** Indicates en error on the component */
    error: boolean;
    connectedCallback(): void;
    private handleBlur;
    private handleClick;
    private handleFocus;
    handleDisabledChange(): void;
    /** Sets focus on the radio button. */
    focus(options?: FocusOptions): void;
    /** Removes focus from the radio button. */
    blur(): void;
    render(): import("lit").TemplateResult;
}
