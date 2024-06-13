import UIKitElement from '../../internal/uikit-element';
import type { CSSResultGroup } from 'lit';
/**
 * @summary Dividers are used to visually separate or group elements.
 * @documentation https://kind-desert-0fb80550f.5.azurestaticapps.net/?path=/docs/components-divider--docs
 * @status stable
 * @since 2.0
 *
 * @cssproperty --color - The color of the divider.
 * @cssproperty --width - The width of the divider.
 * @cssproperty --spacing - The spacing of the divider.
 */
export default class Divider extends UIKitElement {
    static styles: CSSResultGroup;
    /** The divider's theme variant. */
    variant: 'primary' | 'secondary';
    /** Draws the divider in a vertical orientation. */
    vertical: boolean;
    /** The width of the divider. */
    width: number;
    connectedCallback(): void;
    handleVerticalChange(): void;
    handleVariantChange(): void;
    handleWidthChange(): void;
}
