import Checkbox from '../checkbox/checkbox.component';
import Icon from '../icon/icon.component';
import Spinner from '../spinner/spinner.component';
import Tooltip from '../tooltip/tooltip.component';
import UIKitElement from '../../internal/uikit-element';
import type { CSSResultGroup, PropertyValueMap, PropertyValues } from 'lit';
/**
 * @summary A tree item serves as a hierarchical node that lives inside a [tree](/components/tree).
 * @documentation https://kind-desert-0fb80550f.5.azurestaticapps.net/?path=/docs/components-tree-item--docs
 * @status stable
 * @since 2.0
 *
 * @dependency koerber-checkbox
 * @dependency koerber-icon
 * @dependency koerber-spinner
 *
 * @event koerber-expand - Emitted when the tree item expands.
 * @event koerber-after-expand - Emitted after the tree item expands and all animations are complete.
 * @event koerber-collapse - Emitted when the tree item collapses.
 * @event koerber-after-collapse - Emitted after the tree item collapses and all animations are complete.
 * @event koerber-lazy-change - Emitted when the tree item's lazy state changes.
 * @event koerber-lazy-load - Emitted when a lazy item is selected. Use this event to asynchronously load data and append
 *  items to the tree before expanding. After appending new items, remove the `lazy` attribute to remove the loading
 *  state and update the tree.
 *
 * @slot - The default slot.
 * @slot expand-icon - The icon to show when the tree item is expanded.
 * @slot collapse-icon - The icon to show when the tree item is collapsed.
 * @slot actions - The action buttons in the tree item.
 * @slot support - The icon to show the supporting visuals in the tree item.
 * @slot hint - The hint text in the tree item content.
 *
 *
 * @csspart base - The component's base wrapper.
 * @csspart item - The tree item's container. This element wraps everything except slotted tree item children.
 * @csspart item--disabled - Applied when the tree item is disabled.
 * @csspart item--open - Applied when the tree item is open.
 * @csspart item--indeterminate - Applied when the selection is indeterminate.
 * @csspart item--selected - Applied when the tree item is selected.
 * @csspart indentation - The tree item's indentation container.
 * @csspart expand-button - The container that wraps the tree item's expand button and spinner.
 * @csspart label - The tree item's label.
 * @csspart children - The container that wraps the tree item's nested children.
 * @csspart checkbox - The checkbox that shows when using multiselect.
 * @csspart checkbox__base - The checkbox's exported `base` part.
 * @csspart checkbox__control - The checkbox's exported `control` part.
 * @csspart checkbox__control--checked - The checkbox's exported `control--checked` part.
 * @csspart checkbox__control--indeterminate - The checkbox's exported `control--indeterminate` part.
 * @csspart checkbox__checked-icon - The checkbox's exported `checked-icon` part.
 * @csspart checkbox__indeterminate-icon - The checkbox's exported `indeterminate-icon` part.
 * @csspart checkbox__label - The checkbox's exported `label` part.
 */
export default class TreeItem extends UIKitElement {
    static styles: CSSResultGroup;
    static dependencies: {
        'koerber-checkbox': typeof Checkbox;
        'koerber-icon': typeof Icon;
        'koerber-spinner': typeof Spinner;
        'koerber-tooltip': typeof Tooltip;
    };
    static isTreeItem(node: Node): boolean;
    private readonly localize;
    private resizeObserver;
    private tooltipContent;
    private isTextOverflowing;
    indeterminate: boolean;
    isLeaf: boolean;
    loading: boolean;
    selectable: boolean;
    /** Expands the tree item. */
    open: boolean;
    /** Draws the tree item in a selected state. */
    selected: boolean;
    /** Disables the tree item. */
    disabled: boolean;
    /** Enables lazy loading behavior. */
    lazy: boolean;
    /** Set the current size of the tree item */
    size: 'small' | 'medium' | 'large';
    defaultSlot: HTMLSlotElement;
    childrenSlot: HTMLSlotElement;
    itemElement: HTMLDivElement;
    childrenContainer: HTMLDivElement;
    expandButtonSlot: HTMLSlotElement;
    labelContentSlot: HTMLSlotElement;
    connectedCallback(): void;
    firstUpdated(): void;
    protected updated(_changedProperties: PropertyValues): void;
    private animateCollapse;
    private isNestedItem;
    private handleChildrenSlotChange;
    protected willUpdate(changedProperties: PropertyValueMap<TreeItem> | Map<PropertyKey, unknown>): void;
    private animateExpand;
    private attachOverflowObserver;
    disconnectedCallback(): void;
    private checkTextOverflow;
    private getTextContent;
    handleLoadingChange(): void;
    handleDisabledChange(): void;
    handleSelectedChange(): void;
    handleOpenChange(): void;
    handleExpandAnimation(): void;
    handleLazyChange(): void;
    /** Gets all the nested tree items in this node. */
    getChildrenItems: ({ includeDisabled }?: {
        includeDisabled?: boolean | undefined;
    }) => TreeItem[];
    render(): import("lit").TemplateResult<1>;
}
