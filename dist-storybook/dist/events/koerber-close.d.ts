type KoerberCloseEvent = CustomEvent<Record<PropertyKey, never>>;
declare global {
    interface GlobalEventHandlersEventMap {
        'koerber-close': KoerberCloseEvent;
    }
}
export default KoerberCloseEvent;
