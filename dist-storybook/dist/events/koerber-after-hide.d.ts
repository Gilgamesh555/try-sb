type KoerberAfterHideEvent = CustomEvent<Record<PropertyKey, never>>;
declare global {
    interface GlobalEventHandlersEventMap {
        'koerber-after-hide': KoerberAfterHideEvent;
    }
}
export default KoerberAfterHideEvent;
