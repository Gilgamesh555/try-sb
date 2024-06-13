import Icon from '../icon/icon.component';
import UIKitElement from '../../internal/uikit-element';
import type { CSSResultGroup } from 'lit';
/**
 * @summary Radios allow the user to select a single option from a group.
 * @documentation https://kind-desert-0fb80550f.5.azurestaticapps.net
 * @status stable
 * @since 2.0
 *
 * @dependency koerber-icon
 *
 * @slot - The radio's label.
 *
 * @event koerber-blur - Emitted when the control loses focus.
 * @event koerber-focus - Emitted when the control gains focus.
 * @event koerber-input - Emitted when the control receives user input.
 * @event koerber-change - Emitted when the control's checked state changes.
 *
 * @csspart base - The component's base wrapper.
 * @csspart control - The circular container that wraps the radio's checked state.
 * @csspart control--checked - The radio control when the radio is checked.
 * @csspart checked-icon - The checked icon, an `<koerber-icon>` element.
 * @csspart label - The container that wraps the radio's label.
 */
export default class Radio extends UIKitElement {
    static styles: CSSResultGroup;
    static dependencies: {
        'koerber-icon': typeof Icon;
    };
    checked: boolean;
    protected hasFocus: boolean;
    /** The radio's value. When selected, the radio group will receive this value. */
    value: string;
    /** Label of the radio. */
    label: string;
    /**
     * The radio's size. When used inside a radio group, the size will be determined by the radio group's size so this
     * attribute can typically be omitted.
     */
    size: 'standard' | 'comfortable';
    /** Disables the radio. */
    disabled: boolean;
    error: boolean;
    /** The component accessible label name */
    accessibleName: string;
    /** The component accessible description */
    accessibleDescription: string;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private addEventListeners;
    private removeEventListeners;
    private handleClick;
    private handleBlur;
    private handleFocus;
    private setInitialAttributes;
    handleCheckedChange(): void;
    handleDisabledChange(): void;
    render(): import("lit").TemplateResult<1>;
}
