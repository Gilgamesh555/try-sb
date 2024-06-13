import IconButton from '../icon-button/icon-button.component';
import Modal from '../../internal/modal';
import UIKitElement from '../../internal/uikit-element';
import type { CSSResultGroup } from 'lit';
/**
 * @summary Drawers slide in from a container to expose additional options and information.
 * @documentation https://kind-desert-0fb80550f.5.azurestaticapps.net/?path=/docs/components-drawer--docs
 * @status stable
 * @since 2.0
 *
 * @dependency koerber-icon-button
 *
 * @slot - The drawer's main content.
 * @slot icon - Optional icon to add to the icon before the label. Works best with `<koerber-icon>`.
 * @slot label - The drawer's label. Alternatively, you can use the `label` attribute.
 * @slot footer - The drawer's footer, usually one or more buttons representing various options.
 *
 * @event koerber-show - Emitted when the drawer opens.
 * @event koerber-after-show - Emitted after the drawer opens and all animations are complete.
 * @event koerber-hide - Emitted when the drawer closes.
 * @event koerber-after-hide - Emitted after the drawer closes and all animations are complete.
 * @event koerber-initial-focus - Emitted when the drawer opens and is ready to receive focus. Calling
 *   `event.preventDefault()` will prevent focusing and allow you to set it on a different element, such as an input.
 * @event koerber-request-close - Emitted when the user attempts to
 *   close the drawer by clicking the close button, clicking the overlay, or pressing escape. Calling
 *   `event.preventDefault()` will keep the drawer open. Avoid using this unless closing the drawer will result in
 *   destructive behavior such as data loss.
 *
 * @csspart base - The component's base wrapper.
 * @csspart overlay - The overlay that covers the screen behind the drawer.
 * @csspart panel - The drawer's panel (where the drawer and its content are rendered).
 * @csspart header - The drawer's header. This element wraps the title and header actions.
 * @csspart icon - Optional icon to add to the header before the label. Works best with `<koerber-icon>`.
 * @csspart title - The drawer's title.
 * @csspart close-button - The close button, an `<koerber-icon-button>`.
 * @csspart close-button__base - The close button's exported `base` part.
 * @csspart body - The drawer's body.
 * @csspart footer - The drawer's footer.
 *
 * @cssproperty --koerber-drawer-contained-z-index - The z-index for contained (non-modal) drawer.
 * @cssproperty --koerber-drawer-z-index - The z-index for modal drawer.
 * @cssproperty --koerber-drawer-small-max-width - The max width for drawer with small size.
 * @cssproperty --koerber-drawer-large-max-width - The max width for drawer with large size.
 * @cssproperty --koerber-drawer-header-spacing - The amount of padding to use for the header.
 * @cssproperty --koerber-drawer-body-spacing - The amount of padding to use for the body.
 * @cssproperty --koerber-drawer-footer-spacing - The amount of padding to use for the footer.
 * @cssproperty --koerber-drawer-panel-spacing: - The amount of margin to use for the panel.
 * @cssproperty --koerber-drawer-overlay-color - The background color of the overlay.
 * @cssproperty --koerber-drawer-overlay-opacity - The target opacity of the overlay in percents.
 *
 * @animation drawer.showEnd - The animation to use when showing a drawer with `end` placement.
 * @animation drawer.showStart - The animation to use when showing a drawer with `start` placement.
 * @animation drawer.hideEnd - The animation to use when hiding a drawer with `end` placement.
 * @animation drawer.hideStart - The animation to use when hiding a drawer with `start` placement.
 * @animation drawer.denyClose - The animation to use when a request to close the drawer is denied.
 * @animation drawer.overlay.show - The animation to use when showing the drawer's overlay.
 * @animation drawer.overlay.hide - The animation to use when hiding the drawer's overlay.
 *
 * @property modal - Exposes the internal modal utility that controls focus trapping. To temporarily disable focus
 *   trapping and allow third-party modals spawned from an active modal, call `modal.activateExternal()` when
 *   the third-party modal opens. Upon closing, call `modal.deactivateExternal()` to restore Shoelace's focus trapping.
 */
export default class Drawer extends UIKitElement {
    static styles: CSSResultGroup;
    static dependencies: {
        'koerber-icon-button': typeof IconButton;
    };
    private readonly hasSlotController;
    private readonly localize;
    private originalTrigger;
    modal: Modal;
    drawer: HTMLElement;
    panel: HTMLElement;
    overlay: HTMLElement;
    /**
     * Indicates whether or not the drawer is open. You can toggle this attribute to show and hide the drawer, or you can
     * use the `show()` and `hide()` methods and this attribute will reflect the drawer's open state.
     */
    open: boolean;
    /**
     * The drawer's label as displayed in the header. You should always include a relevant label even when using
     * `no-header`, as it is required for proper accessibility. If you need to display HTML, use the `label` slot instead.
     */
    label: string;
    /** The direction from which the drawer will open. */
    placement: 'end' | 'start';
    /** The drawer's size. */
    size: 'small' | 'large';
    /**
     * By default, the drawer slides out of its containing block (usually the viewport). To make the drawer slide out of
     * its parent element, set this attribute and add `position: relative` to the parent.
     */
    contained: boolean;
    /**
     * Removes the header. This will also remove the default close button, so please ensure you provide an easy,
     * accessible way for users to dismiss the drawer.
     */
    noHeader: boolean;
    firstUpdated(): void;
    disconnectedCallback(): void;
    private requestClose;
    private addOpenListeners;
    private removeOpenListeners;
    private handleDocumentKeyDown;
    handleOpenChange(): Promise<void>;
    handleNoModalChange(): void;
    /** Shows the drawer. */
    show(): Promise<void>;
    /** Hides the drawer */
    hide(): Promise<void>;
    render(): import("lit").TemplateResult<1>;
}
