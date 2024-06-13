type KoerberRepositionEvent = CustomEvent<Record<PropertyKey, never>>;
declare global {
    interface GlobalEventHandlersEventMap {
        'koerber-reposition': KoerberRepositionEvent;
    }
}
export default KoerberRepositionEvent;
