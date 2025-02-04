import { type HasSlotController } from '../../internal/slot';
import { type LocalizeController } from '../../utilities/localize';
import type { ReactiveController, ReactiveControllerHost } from 'lit';
import type MenuItem from './menu-item';
/** A reactive controller to manage the registration of event listeners for submenus. */
export declare class SubmenuController implements ReactiveController {
    private host;
    private popupRef;
    private enableSubmenuTimer;
    private isConnected;
    private isPopupConnected;
    private skidding;
    private readonly hasSlotController;
    private readonly localize;
    private readonly submenuOpenDelay;
    constructor(host: ReactiveControllerHost & MenuItem, hasSlotController: HasSlotController, localize: LocalizeController);
    hostConnected(): void;
    hostDisconnected(): void;
    hostUpdated(): void;
    private addListeners;
    private removeListeners;
    private handleMouseMove;
    private handleMouseOver;
    private handleSubmenuEntry;
    private handleKeyDown;
    private handleClick;
    private handleFocusOut;
    private handlePopupMouseover;
    private handlePopupReposition;
    private setSubmenuState;
    private enableSubmenu;
    private disableSubmenu;
    private updateSkidding;
    isExpanded(): boolean;
    renderSubmenu(): import("lit").TemplateResult<1>;
}
