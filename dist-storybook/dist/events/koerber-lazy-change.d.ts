type KoerberLazyChangeEvent = CustomEvent<Record<PropertyKey, never>>;
declare global {
    interface GlobalEventHandlersEventMap {
        'koerber-lazy-change': KoerberLazyChangeEvent;
    }
}
export default KoerberLazyChangeEvent;
