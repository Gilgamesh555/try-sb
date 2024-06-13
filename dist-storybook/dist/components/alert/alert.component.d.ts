import Button from '../button/button.component';
import UIKitElement from '../../internal/uikit-element';
import type { CSSResultGroup } from 'lit';
export default class Alert extends UIKitElement {
    static styles: CSSResultGroup;
    static dependencies: {
        'koerber-button': typeof Button;
    };
    private autoHideTimeout;
    private readonly hasSlotController;
    private readonly localize;
    base: HTMLElement;
    /** Indicates whether the current text on the alert exceeds its bounds and the maximum number of lines */
    private isTextOverflowing;
    /**
     * Indicates whether or not the alert is open. You can toggle this attribute to show and hide the alert, or you can
     * use the `show()` and `hide()` methods and this attribute will reflect the alert's open state.
     */
    open: boolean;
    /** Enables a close button that allows the user to dismiss the alert. */
    closable: boolean;
    /** The alert's theme variant. */
    variant: 'info' | 'success' | 'warning' | 'danger' | 'alt-info' | 'alt-success' | 'alt-warning' | 'alt-danger';
    /** Set wether actions should be rendered bottom or inline with main content */
    actionsPlacement: 'inline' | 'footer';
    /**
     * The length of time, in milliseconds (ms), the alert will show before closing itself. If the user interacts with
     * the alert before it closes (e.g. moves the mouse over it), the timer will restart. Defaults to `5000` ms, meaning
     * the alert will not close after 5 seconds.
     */
    duration: number;
    firstUpdated(): void;
    private restartAutoHide;
    private handleCloseClick;
    private handleMouseMove;
    /**
     * Displays the alert as a toast alert. This will move the alert out of its position in the DOM and, when dismissed, it will be removed from the DOM completely. By storing a reference to the alert, you can reuse it by calling this method again. The returned promise will resolve after the alert is hidden.
     */
    toast(): Promise<void>;
    handleOpenChange(): Promise<void>;
    handleDurationChange(): void;
    /** Shows the alert. */
    show(): Promise<void>;
    /** Hides the alert */
    hide(): Promise<void>;
    render(): import("lit").TemplateResult<1>;
}
