import UIKitElement from '../../internal/uikit-element';
import type { CSSResultGroup } from 'lit';
/**
 * @summary Cards can be used to group related subjects in a container.
 * @documentation https://kind-desert-0fb80550f.5.azurestaticapps.net/?path=/docs/components-card--docs
 * @status stable
 * @since 2.0
 *
 * @slot - The card's main content.
 * @slot header - An optional header for the card.
 * @slot footer - An optional footer for the card.
 * @slot image - An optional image to render at the start of the card.
 *
 * @csspart base - The component's base wrapper.
 * @csspart image - The container that wraps the card's image.
 * @csspart header - The container that wraps the card's header.
 * @csspart body - The container that wraps the card's main content.
 * @csspart footer - The container that wraps the card's footer.
 *
 * @cssproperty --border-color - The card's border color, including borders that occur inside the card.
 * @cssproperty --border-radius - The border radius for the card's edges.
 * @cssproperty --border-width - The width of the card's borders.
 * @cssproperty --padding - The padding to use for the card's sections.
 */
export default class Card extends UIKitElement {
    static styles: CSSResultGroup;
    private readonly hasSlotController;
    defaultSlot: HTMLSlotElement;
    render(): import("lit").TemplateResult<1>;
}
