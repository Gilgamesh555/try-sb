type KoerberInvalidEvent = CustomEvent<Record<PropertyKey, never>>;
declare global {
    interface GlobalEventHandlersEventMap {
        'koerber-invalid': KoerberInvalidEvent;
    }
}
export default KoerberInvalidEvent;
