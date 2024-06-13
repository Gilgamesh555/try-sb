type KoerberExpandEvent = CustomEvent<Record<PropertyKey, never>>;
declare global {
    interface GlobalEventHandlersEventMap {
        'koerber-expand': KoerberExpandEvent;
    }
}
export default KoerberExpandEvent;
