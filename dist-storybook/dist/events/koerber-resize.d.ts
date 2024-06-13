type KoerberResizeEvent = CustomEvent<{
    entries: ResizeObserverEntry[];
}>;
declare global {
    interface GlobalEventHandlersEventMap {
        'koerber-resize': KoerberResizeEvent;
    }
}
export default KoerberResizeEvent;
