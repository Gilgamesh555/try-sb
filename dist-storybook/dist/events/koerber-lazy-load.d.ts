type KoerberLazyLoadEvent = CustomEvent<Record<PropertyKey, never>>;
declare global {
    interface GlobalEventHandlersEventMap {
        'koerber-lazy-load': KoerberLazyLoadEvent;
    }
}
export default KoerberLazyLoadEvent;
