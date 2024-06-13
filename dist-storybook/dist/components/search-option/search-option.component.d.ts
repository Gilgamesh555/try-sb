import UIKitElement from '../../internal/uikit-element';
import type { CSSResultGroup } from 'lit';
/**
 * @summary Search Options define the selectable options within the Search Component.
 * @documentation https://kind-desert-0fb80550f.5.azurestaticapps.net/?path=/docs/components-search-option--docs
 * @status stable
 * @since 2.0
 *
 * @slot - The search option's label.
 * @slot suffix - Used to append an icon or similar element to the search option.
 *
 * @csspart base - The component's base wrapper.
 * @csspart label - The search option's label.
 * @csspart prefix - The container that wraps the prefix.
 * @csspart suffix - The container that wraps the suffix.
 */
export default class SearchOption extends UIKitElement {
    static styles: CSSResultGroup;
    private readonly localize;
    defaultSlot: HTMLSlotElement;
    current: boolean;
    selected: boolean;
    hasHover: boolean;
    /**
     * The search-option's value. When selected, the containing form control will receive this value. The value must be unique
     * from other search-options in the same group.
     */
    value: string;
    /** Draws the search-option in a disabled state, preventing selection. */
    disabled: boolean;
    size: 'small' | 'medium' | 'large';
    connectedCallback(): void;
    private handleMouseEnter;
    private handleMouseLeave;
    handleDisabledChange(): void;
    handleSelectedChange(): void;
    handleValueChange(): void;
    /** Returns a plain text label based on the search-option's content. */
    getTextLabel(): string;
    render(): import("lit").TemplateResult<1>;
}
