type KoerberCollapseEvent = CustomEvent<Record<PropertyKey, never>>;
declare global {
    interface GlobalEventHandlersEventMap {
        'koerber-collapse': KoerberCollapseEvent;
    }
}
export default KoerberCollapseEvent;
