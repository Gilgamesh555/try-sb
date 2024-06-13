type KoerberShowEvent = CustomEvent<Record<PropertyKey, never>>;
declare global {
    interface GlobalEventHandlersEventMap {
        'koerber-show': KoerberShowEvent;
    }
}
export default KoerberShowEvent;
