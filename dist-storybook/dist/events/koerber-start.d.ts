type KoerberStartEvent = CustomEvent<Record<PropertyKey, never>>;
declare global {
    interface GlobalEventHandlersEventMap {
        'koerber-start': KoerberStartEvent;
    }
}
export default KoerberStartEvent;
