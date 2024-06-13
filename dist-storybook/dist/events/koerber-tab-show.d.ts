type KoerberTabShowEvent = CustomEvent<{
    name: string;
}>;
declare global {
    interface GlobalEventHandlersEventMap {
        'koerber-tab-show': KoerberTabShowEvent;
    }
}
export default KoerberTabShowEvent;
