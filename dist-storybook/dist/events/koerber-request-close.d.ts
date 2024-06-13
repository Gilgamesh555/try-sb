type KoerberRequestCloseEvent = CustomEvent<{
    source: 'close-button' | 'keyboard' | 'overlay';
}>;
declare global {
    interface GlobalEventHandlersEventMap {
        'koerber-request-close': KoerberRequestCloseEvent;
    }
}
export default KoerberRequestCloseEvent;
