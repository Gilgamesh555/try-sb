import UIKitElement from '../../internal/uikit-element';
import type { CSSResultGroup } from 'lit';
/**
 * @summary Icons are symbols that can be used to represent various options within an application.
 * @documentation https://kind-desert-0fb80550f.5.azurestaticapps.net/?path=/docs/components-icon--docs
 * @status stable
 * @since 1.0
 *
 * @event koerber-load - Emitted when the icon has loaded.
 * @event koerber-error - Emitted when the icon fails to load due to an error.
 *
 * @csspart svg - The internal SVG element.
 */
export default class Icon extends UIKitElement {
    static styles: CSSResultGroup;
    private svg;
    /** The name of a registered custom icon library. */
    library: string;
    /** The name of the icon to draw. */
    name?: string;
    /** The icon's size. */
    size: 'medium' | 'large';
    /** The title (tooltip) of the attribute */
    title: string;
    /**
     * An alternate description to use for assistive devices. If omitted, the icon will be considered presentational and
     * ignored by assistive devices.
     */
    label: string;
    connectedCallback(): void;
    firstUpdated(): void;
    disconnectedCallback(): void;
    private getUrl;
    handleLabelChange(): void;
    setIcon(): Promise<void>;
    render(): import("lit").TemplateResult<1>;
}
