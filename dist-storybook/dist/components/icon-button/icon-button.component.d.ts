import Icon from '../icon/icon.component';
import UIKitElement from '../../internal/uikit-element';
import type { CSSResultGroup } from 'lit';
/**
 * @summary Icons buttons are simple, icon-only buttons that can be used for actions and in toolbars.
 * @documentation https://kind-desert-0fb80550f.5.azurestaticapps.net
 * @status stable
 * @since 2.0
 *
 * @dependency koerber-icon
 *
 * @event koerber-blur - Emitted when the icon button loses focus.
 * @event koerber-focus - Emitted when the icon button gains focus.
 *
 * @csspart base - The component's base wrapper.
 */
export default class IconButton extends UIKitElement {
    static styles: CSSResultGroup;
    static dependencies: {
        'koerber-icon': typeof Icon;
    };
    button: HTMLButtonElement | HTMLLinkElement;
    private hasFocus;
    /** The name of the icon to draw. Available names depend on the icon library being used. */
    name?: string;
    /** The name of a registered custom icon library. */
    library?: string;
    /**
     * An external URL of an SVG file. Be sure you trust the content you are including, as it will be executed as code and
     * can result in XSS attacks.
     */
    src?: string;
    /** When set, the underlying button will be rendered as an `<a>` with this `href` instead of a `<button>`. */
    href?: string;
    /** Tells the browser where to open the link. Only used when `href` is set. */
    target?: '_blank' | '_parent' | '_self' | '_top';
    /** Tells the browser to download the linked file as this filename. Only used when `href` is set. */
    download?: string;
    /** The icon's size. */
    size: 'medium' | 'large';
    /**
     * A description that gets read by assistive devices. For optimal accessibility, you should always include a label
     * that describes what the icon button does.
     */
    label: string;
    /** Disables the button. */
    disabled: boolean;
    private handleBlur;
    private handleFocus;
    private handleClick;
    /** Simulates a click on the icon button. */
    click(): void;
    /** Sets focus on the icon button. */
    focus(options?: FocusOptions): void;
    /** Removes focus from the icon button. */
    blur(): void;
    render(): import("lit").TemplateResult;
}
