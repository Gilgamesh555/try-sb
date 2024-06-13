type KoerberFinishEvent = CustomEvent<Record<PropertyKey, never>>;
declare global {
    interface GlobalEventHandlersEventMap {
        'koerber-finish': KoerberFinishEvent;
    }
}
export default KoerberFinishEvent;
