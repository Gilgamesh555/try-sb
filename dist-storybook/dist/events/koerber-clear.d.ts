type KoerberClearEvent = CustomEvent<Record<PropertyKey, never>>;
declare global {
    interface GlobalEventHandlersEventMap {
        'koerber-clear': KoerberClearEvent;
    }
}
export default KoerberClearEvent;
