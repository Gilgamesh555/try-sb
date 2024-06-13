import Icon from '../icon/icon.component';
import UIKitElement from '../../internal/uikit-element';
import type { CSSResultGroup } from 'lit';
/**
 * @summary Accordion show a brief summary and expand to show additional content.
 * @documentation https://kind-desert-0fb80550f.5.azurestaticapps.net/?path=/docs/components-accordion--docs
 * @status stable
 * @since 2.0
 *
 * @dependency koerber-icon
 *
 * @slot - The accordion' main content.
 * @slot expand-icon - Optional expand icon to use instead of the default. Works best with `<koerber-icon>`.
 * @slot collapse-icon - Optional collapse icon to use instead of the default. Works best with `<koerber-icon>`.
 * @slot prefix - Optional left side of the summary - Summary section.
 * @slot suffix - Optional right side of the summary - Summary section.
 * @slot prefix-content - Optional left side of the content - Body section.
 * @slot suffix-content - Optional right side of the content - Body section.
 * @slot summary - The accordion' summary. Alternatively, you can use the `summary` attribute.
 * @slot subtitle - The accordion' subtitle. Alternatively, you can use the `subtitle` attribute.
 *
 * @event koerber-show - Emitted when the accordion opens.
 * @event koerber-after-show - Emitted after the accordion opens and all animations are complete.
 * @event koerber-hide - Emitted when the accordion closes.
 * @event koerber-after-hide - Emitted after the accordion closes and all animations are complete.
 *
 * @csspart base - The component's base wrapper.
 * @csspart header - The header that wraps both the summary and the expand/collapse icon.
 * @csspart summary - The container that wraps the summary.
 * @csspart summary-icon - The container that wraps the expand/collapse icons.
 * @csspart content - The accordion content.
 *
 * @animation accordion.show - The animation to use when showing accordion. You can use `height: auto` with this animation.
 * @animation accordion.hide - The animation to use when hiding accordion. You can use `height: auto` with this animation.
 */
export default class Accordion extends UIKitElement {
    static styles: CSSResultGroup;
    static dependencies: {
        'koerber-icon': typeof Icon;
    };
    private readonly localize;
    private readonly hasSlotController;
    accordion: HTMLElement;
    header: HTMLElement;
    body: HTMLElement;
    expandIconSlot: HTMLSlotElement;
    /**
     * Indicates whether or not the accordion is open. You can toggle this attribute to show and hide the accordion, or you
     * can use the `show()` and `hide()` methods and this attribute will reflect the accordion' open state.
     */
    open: boolean;
    /** The summary to show in the header. If you need to display HTML, use the `summary` slot instead. */
    summary: string;
    /** The text to complement the title below of them. */
    subtitle: string;
    /** Disables the accordion so it can't be toggled. */
    disabled: boolean;
    /** The size of the accordion header */
    size: 'small' | 'medium' | 'large';
    /** The direction of which the chevron should be displayed in the summary section */
    direction: 'left' | 'right';
    firstUpdated(): void;
    private handleSummaryClick;
    private handleSummaryKeyDown;
    handleOpenChange(): Promise<void>;
    /** Shows the accordion. */
    show(): Promise<void>;
    /** Hides the accordion */
    hide(): Promise<void>;
    render(): import("lit").TemplateResult<1>;
}
