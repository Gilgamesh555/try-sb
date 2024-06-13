import Icon from '../icon/icon.component';
import Tooltip from '../tooltip/tooltip.component';
import UIKitElement from '../../internal/uikit-element';
import type { CSSResultGroup } from 'lit';
/**
 * @documentation https://kind-desert-0fb80550f.5.azurestaticapps.net
 *
 * @slot - The Form field label’s main content.
 * @slot tooltip - Use to display tooltip content for the form field label.
 * @slot required - Use to mark the form field label as required.
 *
 * @dependency koerber-icon
 *
 * @csspart base - The component's base wrapper.
 * @csspart label - The form field label container.
 */
export default class FormFieldLabel extends UIKitElement {
    static styles: CSSResultGroup;
    static dependencies: {
        'koerber-icon': typeof Icon;
        'koerber-tooltip': typeof Tooltip;
    };
    defaultSlot: HTMLSlotElement;
    /** The label of the Form Field */
    label: string;
    /** The tooltip of the Form field label */
    tooltip: string;
    /** Makes the form field label a required field. */
    required: boolean;
    accessibleHidden: boolean;
    handleRequiredChange(): void;
    render(): import("lit").TemplateResult<1>;
}
