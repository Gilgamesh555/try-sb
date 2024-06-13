type KoerberInitialFocusEvent = CustomEvent<Record<PropertyKey, never>>;
declare global {
    interface GlobalEventHandlersEventMap {
        'koerber-initial-focus': KoerberInitialFocusEvent;
    }
}
export default KoerberInitialFocusEvent;
