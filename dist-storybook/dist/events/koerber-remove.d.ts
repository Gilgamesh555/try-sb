type KoerberRemoveEvent = CustomEvent<Record<PropertyKey, never>>;
declare global {
    interface GlobalEventHandlersEventMap {
        'koerber-remove': KoerberRemoveEvent;
    }
}
export default KoerberRemoveEvent;
