type KoerberErrorEvent = CustomEvent<{
    status?: number;
}>;
declare global {
    interface GlobalEventHandlersEventMap {
        'koerber-error': KoerberErrorEvent;
    }
}
export default KoerberErrorEvent;
