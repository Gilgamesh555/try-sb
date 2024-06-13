import Icon from '../icon/icon.component';
import UIKitElement from '../../internal/uikit-element';
import type { CSSResultGroup } from 'lit';
/**
 * @summary Breadcrumbs provide a group of links so users can easily navigate a website's hierarchy.
 * @documentation https://kind-desert-0fb80550f.5.azurestaticapps.net/?path=/docs/components-breadcrumb--docs
 * @status stable
 * @since 2.0
 *
 * @slot - One or more breadcrumb items to display.
 * @slot separator - The separator to use between breadcrumb items. Works best with `<koerber-icon>`.
 *
 * @dependency koerber-icon
 *
 * @csspart base - The component's base wrapper.
 */
export default class Breadcrumb extends UIKitElement {
    static styles: CSSResultGroup;
    static dependencies: {
        'koerber-icon': typeof Icon;
    };
    private readonly localize;
    private separatorDir;
    defaultSlot: HTMLSlotElement;
    separatorSlot: HTMLSlotElement;
    /**
     * The label to use for the breadcrumb control. This will not be shown on the screen, but it will be announced by
     * screen readers and other assistive devices to provide more context for users.
     */
    label: string;
    private getSeparator;
    private handleSlotChange;
    render(): import("lit").TemplateResult<1>;
}
