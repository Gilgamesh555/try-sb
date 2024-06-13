import UIKitElement from '../../internal/uikit-element';
import type { CSSResultGroup } from 'lit';
/**
 * @summary Badges are used to draw attention and display statuses or counts.
 * @documentation https://kind-desert-0fb80550f.5.azurestaticapps.net/?path=/docs/components-badge--docs
 * @status stable
 * @since 2.0
 *
 * @slot - The badge's content.
 *
 * @csspart base - The component's base wrapper.
 * @csspart label - The chip's label.
 */
export default class Badge extends UIKitElement {
    static styles: CSSResultGroup;
    /** The badge's theme variant. */
    size: 'extra-small' | 'small' | 'medium' | 'large';
    render(): import("lit").TemplateResult<1>;
}
