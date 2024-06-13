type KoerberClickEvent = CustomEvent<Record<PropertyKey, never>>;
declare global {
    interface GlobalEventHandlersEventMap {
        'koerber-click': KoerberClickEvent;
    }
}
export default KoerberClickEvent;
