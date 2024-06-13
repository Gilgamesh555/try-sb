type KoerberHoverEvent = CustomEvent<{
    phase: 'start' | 'move' | 'end';
    value: number;
}>;
declare global {
    interface GlobalEventHandlersEventMap {
        'koerber-hover': KoerberHoverEvent;
    }
}
export default KoerberHoverEvent;
