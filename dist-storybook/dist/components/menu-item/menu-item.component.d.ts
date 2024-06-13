import Icon from '../icon/icon';
import Popup from '../popup/popup';
import Tooltip from '../tooltip/tooltip';
import UIKitElement from '../../internal/uikit-element';
import type { CSSResultGroup } from 'lit';
/**
 * @summary Menu items provide options for the user to pick from in a menu.
 * @documentation https://kind-desert-0fb80550f.5.azurestaticapps.net
 * @status stable
 * @since 2.0
 *
 * @dependency koerber-icon
 * @dependency koerber-popup
 * @dependency koerber-spinner
 * @dependency koerber-tooltip
 *
 * @slot - The menu item's label.
 * @slot prefix - Used to prepend an icon or similar element to the menu item.
 * @slot suffix - Used to append an icon or similar element to the menu item.
 * @slot submenu - Used to denote a nested menu.
 *
 * @csspart base - The component's base wrapper.
 * @csspart prefix - The prefix container.
 * @csspart label - The menu item label.
 * @csspart suffix - The suffix container.
 * @csspart spinner - The spinner that shows when the menu item is in the loading state.
 * @csspart spinner__base - The spinner's base part.
 * @csspart submenu-icon - The submenu icon, visible only when the menu item has a submenu (not yet implemented).
 *
 * @cssproperty [--submenu-offset=-2px] - The distance submenus shift to overlap the parent menu.
 */
export default class MenuItem extends UIKitElement {
    static styles: CSSResultGroup;
    static dependencies: {
        'koerber-icon': typeof Icon;
        'koerber-popup': typeof Popup;
        'koerber-tooltip': typeof Tooltip;
    };
    private cachedTextLabel;
    private tooltipContent;
    private isLabelOverflowing;
    defaultSlot: HTMLSlotElement;
    menuItem: HTMLElement;
    labelContentSlot: HTMLSlotElement;
    /** The type of menu item to render. To use `checked`, this value must be set t`. */
    type: string;
    /** Draws the item in a selected state. */
    selected: boolean;
    /** A unique value to store in the menu item. This can be used as a way to identify menu items when selected. */
    value: string;
    /** Draws the menu item in a loading state. */
    /** Draws the menu item in a disabled state, preventing selection. */
    disabled: boolean;
    /** The height size value of the item - medium by default */
    size: 'small' | 'medium' | 'large';
    private readonly localize;
    private readonly hasSlotController;
    private submenuController;
    connectedCallback(): void;
    protected firstUpdated(): void;
    disconnectedCallback(): void;
    private checkTextOverflow;
    private handleDefaultSlotChange;
    private handleHostClick;
    private handleMouseOver;
    handleCheckedChange(): void;
    handleDisabledChange(): void;
    /** Returns a text label based on the contents of the menu item's default slot. */
    getTextLabel(): string;
    isSubmenu(): boolean;
    render(): import("lit").TemplateResult<1>;
}
