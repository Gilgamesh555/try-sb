import Avatar from '../avatar/avatar.component';
import Button from '../button/button.component';
import Icon from '../icon/icon.component';
import UIKitElement from '../../internal/uikit-element';
import type { CSSResultGroup } from 'lit';
/**
 * @summary list items provide options for the user to select in a list.
 * @documentation https://kind-desert-0fb80550f.5.azurestaticapps.net/?path=/docs/components-list-item--docs
 *
 * @dependency koerber-icon
 * @dependency koerber-button
 * @dependency koerber-avatar
 *
 * @slot label - list item's label text.
 * @slot prefix - list item's prefix icon or avatar.
 * @slot secondary-text - secondary text to the list item.
 * @slot tertiary-text - tertiary text to the list item.
 * @slot suffix - list item's suffix icon-only button.
 *
 * @csspart base - The component's base wrapper.
 */
export default class ListItem extends UIKitElement {
    static styles: CSSResultGroup;
    static dependencies: {
        'koerber-avatar': typeof Avatar;
        'koerber-button': typeof Button;
        'koerber-icon': typeof Icon;
    };
    defaultSlot: HTMLSlotElement;
    /** The label of the list item */
    label: string;
    /** The secondary text of the list item */
    secondaryText: string;
    /** The tertiary text of the list item */
    tertiaryText: string;
    /** The size of the list item */
    size: 'small' | 'medium' | 'large';
    /** A unique value to store in the list item. This can be used as a way to identify list items when clicked. */
    value: string;
    connectedCallback(): void;
    private getPrefixIcon;
    private getPrefixAvatar;
    private syncPrefix;
    private getSuffixButton;
    private syncSuffixButton;
    render(): import("lit").TemplateResult<1>;
}
