import type MenuItem from '../components/menu-item/menu-item';
type KoerberSelectEvent = CustomEvent<{
    item: MenuItem;
}>;
declare global {
    interface GlobalEventHandlersEventMap {
        'koerber-select': KoerberSelectEvent;
    }
}
export default KoerberSelectEvent;
