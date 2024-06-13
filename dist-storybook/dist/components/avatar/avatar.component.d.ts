import Badge from '../badge/badge.component';
import Icon from '../icon/icon.component';
import UIKitElement from '../../internal/uikit-element';
import type { CSSResultGroup } from 'lit';
/**
 * @summary Avatars are used to represent a person or object.
 * @documentation https://kind-desert-0fb80550f.5.azurestaticapps.net/?path=/docs/components-avatar--docs
 * @status stable
 * @since 2.0
 *
 * @dependency koerber-icon
 * @dependency koerber-badge
 *
 * @slot icon - The default icon to use when no image or initials are present. Works best with `<koerber-icon>`.
 *
 * @csspart base - The component's base wrapper.
 * @csspart icon - The container that wraps the avatar's icon.
 * @csspart initials - The container that wraps the avatar's initials.
 * @csspart image - The avatar image. Only shown when the `image` attribute is set.
 *
 * @cssproperty --size - The size of the avatar.
 */
export default class Avatar extends UIKitElement {
    static styles: CSSResultGroup;
    static dependencies: {
        'koerber-icon': typeof Icon;
        'koerber-badge': typeof Badge;
    };
    avatar: HTMLButtonElement | HTMLLinkElement;
    /** Check if the image has an error on its download */
    private hasError;
    /** Focus state on component */
    private hasFocus;
    /** The image source to use for the avatar. */
    image: string;
    /** Icon name attribute */
    icon: string;
    /** A label to use to describe the avatar to assistive devices. */
    label: string;
    /** Initials to use as a fallback when no image is available (1-2 characters max recommended). */
    initials: string;
    /** Indicates how the browser should load the image. */
    loading: 'eager' | 'lazy';
    /** Indicates how the browser should load the image. */
    size: 'small' | 'medium' | 'large';
    handleImageChange(): void;
    private handleClick;
    private handleMouseUp;
    private handleMouseDown;
    /** Simulates click on the component */
    click(): void;
    /** Simulates the component press certain amount of time in mil-seconds */
    press(time: number): void;
    render(): import("lit").TemplateResult<1>;
}
