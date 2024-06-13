import Popup from '../popup/popup.component';
import UIKitElement from '../../internal/uikit-element';
import type { CSSResultGroup } from 'lit';
/**
 * @summary Tooltips display additional information based on a specific action.
 * @documentation https://kind-desert-0fb80550f.5.azurestaticapps.net/?path=/docs/components-tooltip--docs
 * @status stable
 * @since 2.0
 *
 * @dependency koerber-popup
 *
 * @slot - The tooltip's target element. Avoid slotting in more than one element, as subsequent ones will be ignored.
 * @slot content - The content to render in the tooltip. Alternatively, you can use the `content` attribute.
 *
 * @event koerber-show - Emitted when the tooltip begins to show.
 * @event koerber-after-show - Emitted after the tooltip has shown and all animations are complete.
 * @event koerber-hide - Emitted when the tooltip begins to hide.
 * @event koerber-after-hide - Emitted after the tooltip has hidden and all animations are complete.
 *
 * @csspart base - The component's base wrapper, an `<koerber-popup>` element.
 * @csspart base__popup - The popup's exported `popup` part. Use this to target the tooltip's popup container.
 * @csspart base__arrow - The popup's exported `arrow` part. Use this to target the tooltip's arrow.
 * @csspart body - The tooltip's body where its content is rendered.
 *
 * @cssproperty --max-width - The maximum width of the tooltip before its content will wrap.
 * @cssproperty --hide-delay - The amount of time to wait before hiding the tooltip when hovering.
 * @cssproperty --show-delay - The amount of time to wait before showing the tooltip when hovering.
 *
 * @animation tooltip.show - The animation to use when showing the tooltip.
 * @animation tooltip.hide - The animation to use when hiding the tooltip.
 */
export default class Tooltip extends UIKitElement {
    static styles: CSSResultGroup;
    static dependencies: {
        'koerber-popup': typeof Popup;
    };
    private hoverTimeout;
    private readonly localize;
    /** The distance in pixels from which to offset the tooltip away from its target. */
    private readonly distance;
    /** The distance in pixels from which to offset the tooltip along its target. */
    private readonly skidding;
    /**
     * Controls how the tooltip is activated. Possible options include `click`, `hover`, `focus`, and `manual`. Multiple
     * options can be passed by separating them with a space. When manual is used, the tooltip must be activated
     * programmatically.
     */
    private readonly trigger;
    defaultSlot: HTMLSlotElement;
    body: HTMLElement;
    popup: Popup;
    /** The tooltip's content. If you need to display HTML, use the `content` slot instead. */
    content: string;
    /**
     * The preferred placement of the tooltip. Note that the actual placement may vary as needed to keep the tooltip
     * inside of the viewport.
     */
    placement: 'top' | 'top-start' | 'top-end' | 'right' | 'right-start' | 'right-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'left' | 'left-start' | 'left-end';
    /** Indicates whether or not the tooltip is open. You can use this in lieu of the show/hide methods. */
    open: boolean;
    /**
     * Enable this option to prevent the tooltip from being clipped when the component is placed inside a container with
     * `overflow: auto|hidden|scroll`. Hoisting uses a fixed positioning strategy that works in many, but not all,
     * scenarios.
     */
    hoist: boolean;
    constructor();
    disconnectedCallback(): void;
    firstUpdated(): void;
    private handleBlur;
    private handleFocus;
    private handleDocumentKeyDown;
    private handleMouseOver;
    private handleMouseOut;
    private hasTrigger;
    handleOpenChange(): Promise<void>;
    handleOptionsChange(): Promise<void>;
    /** Shows the tooltip. */
    show(): Promise<void>;
    /** Hides the tooltip */
    hide(): Promise<void>;
    render(): import("lit").TemplateResult<1>;
}
