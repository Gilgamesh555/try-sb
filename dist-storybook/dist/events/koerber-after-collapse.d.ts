type KoerberAfterCollapseEvent = CustomEvent<Record<PropertyKey, never>>;
declare global {
    interface GlobalEventHandlersEventMap {
        'koerber-after-collapse': KoerberAfterCollapseEvent;
    }
}
export default KoerberAfterCollapseEvent;
