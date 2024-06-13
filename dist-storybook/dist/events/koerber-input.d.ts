type KoerberInputEvent = CustomEvent<Record<PropertyKey, never>>;
declare global {
    interface GlobalEventHandlersEventMap {
        'koerber-input': KoerberInputEvent;
    }
}
export default KoerberInputEvent;
