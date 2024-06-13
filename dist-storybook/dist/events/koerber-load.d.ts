type KoerberLoadEvent = CustomEvent<Record<PropertyKey, never>>;
declare global {
    interface GlobalEventHandlersEventMap {
        'koerber-load': KoerberLoadEvent;
    }
}
export default KoerberLoadEvent;
