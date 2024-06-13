import UIKitElement from '../../internal/uikit-element';
import type { CSSResultGroup } from 'lit';
/**
 * @summary Button groups can be used to group related buttons into sections.
 * @documentation https://kind-desert-0fb80550f.5.azurestaticapps.net
 * @status stable
 * @since 2.0
 *
 * @slot - One or more `<koerber-button>` elements to display in the button group.
 *
 * @csspart base - The component's base wrapper.
 */
export default class ButtonGroup extends UIKitElement {
    static styles: CSSResultGroup;
    defaultSlot: HTMLSlotElement;
    disableRole: boolean;
    /**
     * A label to use for the button group. This won't be displayed on the screen, but it will be announced by assistive
     * devices when interacting with the control and is strongly recommended.
     */
    label: string;
    split: boolean;
    private handleFocus;
    private handleBlur;
    private handleMouseOver;
    private handleMouseOut;
    private handleSlotChange;
    render(): import("lit").TemplateResult<1>;
}
