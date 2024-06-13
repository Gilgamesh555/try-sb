type KoerberFocusEvent = CustomEvent<Record<PropertyKey, never>>;
declare global {
    interface GlobalEventHandlersEventMap {
        'koerber-focus': KoerberFocusEvent;
    }
}
export default KoerberFocusEvent;
