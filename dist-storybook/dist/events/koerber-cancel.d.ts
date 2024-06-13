type KoerberCancelEvent = CustomEvent<Record<PropertyKey, never>>;
declare global {
    interface GlobalEventHandlersEventMap {
        'koerber-cancel': KoerberCancelEvent;
    }
}
export default KoerberCancelEvent;
