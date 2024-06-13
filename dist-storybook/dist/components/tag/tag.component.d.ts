import IconButton from '../icon-button/icon-button.component';
import UIKitElement from '../../internal/uikit-element';
import type { CSSResultGroup } from 'lit';
/**
 * @summary Tags are used as labels to organize things or to indicate a selection.
 * @documentation https://kind-desert-0fb80550f.5.azurestaticapps.net
 * @status stable
 * @since 2.0
 *
 * @dependency koerber-icon-button
 *
 * @slot - The tag's content.
 *
 * @event koerber-remove - Emitted when the remove button is activated.
 *
 * @csspart base - The component's base wrapper.
 * @csspart content - The tag's content.
 * @csspart remove-button - The tag's remove button, an `<koerber-icon-button>`.
 * @csspart remove-button__base - The remove button's exported `base` part.
 */
export default class Tag extends UIKitElement {
    static styles: CSSResultGroup;
    static dependencies: {
        'koerber-icon-button': typeof IconButton;
    };
    private readonly localize;
    /** The tag's size. */
    size: 'small' | 'medium' | 'large';
    /** Draws a pill-style tag with rounded edges. */
    pill: boolean;
    /** Makes the tag removable and shows a remove button. */
    removable: boolean;
    private handleRemoveClick;
    render(): import("lit").TemplateResult<1>;
}
