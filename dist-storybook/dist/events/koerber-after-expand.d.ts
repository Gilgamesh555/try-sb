type KoerberAfterExpandEvent = CustomEvent<Record<PropertyKey, never>>;
declare global {
    interface GlobalEventHandlersEventMap {
        'koerber-after-expand': KoerberAfterExpandEvent;
    }
}
export default KoerberAfterExpandEvent;
