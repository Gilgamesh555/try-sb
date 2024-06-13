type KoerberHideEvent = CustomEvent<Record<PropertyKey, never>>;
declare global {
    interface GlobalEventHandlersEventMap {
        'koerber-hide': KoerberHideEvent;
    }
}
export default KoerberHideEvent;
