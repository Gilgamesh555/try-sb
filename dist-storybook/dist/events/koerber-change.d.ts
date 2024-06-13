type KoerberChangeEvent = CustomEvent<Record<PropertyKey, never>>;
declare global {
    interface GlobalEventHandlersEventMap {
        'koerber-change': KoerberChangeEvent;
    }
}
export default KoerberChangeEvent;
