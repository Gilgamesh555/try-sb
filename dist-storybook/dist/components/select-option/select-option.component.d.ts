import Checkbox from '../checkbox/checkbox.component';
import Icon from '../icon/icon.component';
import UIKitElement from '../../internal/uikit-element';
import type { CSSResultGroup } from 'lit';
/**
 * @summary Options define the selectable items within various form controls such as [select](/components/select).
 * @documentation https://kind-desert-0fb80550f.5.azurestaticapps.net/?path=/docs/components-select-option--docs
 * @status stable
 * @since 2.0
 *
 * @dependency koerber-icon
 *
 * @slot - The option's label.
 * @slot prefix - Used to prepend an icon or similar element to the menu item.
 * @slot suffix - Used to append an icon or similar element to the menu item.
 *
 * @csspart checked-icon - The checked icon, an `<koerber-icon>` element.
 * @csspart base - The component's base wrapper.
 * @csspart label - The option's label.
 * @csspart prefix - The container that wraps the prefix.
 * @csspart suffix - The container that wraps the suffix.
 */
export default class SelectOption extends UIKitElement {
    static styles: CSSResultGroup;
    static dependencies: {
        'koerber-icon': typeof Icon;
        'koerber-checkbox': typeof Checkbox;
    };
    private cachedTextLabel;
    private readonly localize;
    defaultSlot: HTMLSlotElement;
    current: boolean;
    selected: boolean;
    hasHover: boolean;
    /**
     * The option's value. When selected, the containing form control will receive this value. The value must be unique
     * from other options in the same group. Values may not contain spaces, as spaces are used as delimiters when listing
     * multiple values.
     */
    value: string;
    /** Draws the option in a disabled state, preventing selection. */
    disabled: boolean;
    /** Draws the option in a checkbox state. */
    checkbox: boolean;
    /**
     * The option's size. When used inside a select, the size will be determined by the select's size so this
     * attribute can typically be omitted.
     */
    size: 'small' | 'medium' | 'large';
    connectedCallback(): void;
    private handleDefaultSlotChange;
    private handleMouseEnter;
    private handleMouseLeave;
    handleDisabledChange(): void;
    handleSelectedChange(): void;
    handleValueChange(): void;
    private handleCheckboxClick;
    /** Returns a plain text label based on the option's content. */
    getTextLabel(): string;
    render(): import("lit").TemplateResult<1>;
}
