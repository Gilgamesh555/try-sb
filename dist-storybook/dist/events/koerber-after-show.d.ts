type KoerberAfterShowEvent = CustomEvent<Record<PropertyKey, never>>;
declare global {
    interface GlobalEventHandlersEventMap {
        'koerber-after-show': KoerberAfterShowEvent;
    }
}
export default KoerberAfterShowEvent;
