import UIKitElement from '../../internal/uikit-element';
import type { CSSResultGroup } from 'lit';
/**
 * @summary List is used for displaying single-level information/data.
 * @documentation https://kind-desert-0fb80550f.5.azurestaticapps.net/?path=/docs/components-list--docs
 *
 * @slot - The list's content, includes only list items
 *
 * @csspart base - The component's base wrapper.
 */
export default class List extends UIKitElement {
    static styles: CSSResultGroup;
    defaultSlot: HTMLSlotElement;
    /** The list's size. This size will be applied to all child list-items. */
    size: 'small' | 'medium' | 'large';
    connectedCallback(): void;
    private getAllLists;
    private syncListElements;
    handleSizeChange(): void;
    render(): import("lit").TemplateResult<1>;
}
