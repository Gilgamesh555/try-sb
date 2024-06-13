import Icon from '../icon/icon.component';
import UIKitElement from '../../internal/uikit-element';
import type { CSSResultGroup } from 'lit';
/**
 * @summary Links are used as navigational elements.
 * @documentation https://kind-desert-0fb80550f.5.azurestaticapps.net
 *
 * @dependency koerber-icon
 *
 * @event koerber-blur - Emitted when the link loses focus.
 * @event koerber-focus - Emitted when the link gains focus.
 *
 * @slot - The link's label.
 *
 * @csspart base - The component's base wrapper.
 * @csspart prefix - The container that wraps the prefix.
 * @csspart label - The button's label.
 * @csspart suffix - The container that wraps the suffix.
 * @csspart caret - The button's caret icon, an `<koerber-icon>` element.
 */
export default class Link extends UIKitElement {
    static styles: CSSResultGroup;
    static dependencies: {
        'koerber-icon': typeof Icon;
    };
    href: string;
    /** Tells the browser where to open the link. Only used when `href` is set. */
    target: string;
    /** The `rel` attribute to use on the link. Only used when `href` is set. */
    rel: string;
    title: string;
    /** The link's size. */
    size: 'small' | 'medium' | 'large';
    /** Disables the link. */
    disabled: boolean;
    underline: boolean;
    /** Shows the Icon */
    showIcon: boolean;
    link: HTMLLinkElement;
    private hasFocus;
    private handleBlur;
    private handleFocus;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private handleHostClick;
    handleDisabledChange(): void;
    /** Simulates a click on the link. */
    click(): void;
    /** Sets focus on the link. */
    focus(options?: FocusOptions): void;
    /** Removes focus from the link. */
    blur(): void;
    render(): import("lit").TemplateResult<1>;
}
