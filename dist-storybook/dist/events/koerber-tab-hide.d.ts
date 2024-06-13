type KoerberTabHideEvent = CustomEvent<{
    name: string;
}>;
declare global {
    interface GlobalEventHandlersEventMap {
        'koerber-tab-hide': KoerberTabHideEvent;
    }
}
export default KoerberTabHideEvent;
