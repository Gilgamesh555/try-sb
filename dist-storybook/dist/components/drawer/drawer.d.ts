import Drawer from './drawer.component';
export * from './drawer.component';
export default Drawer;
declare global {
    interface HTMLElementTagNameMap {
        'koerber-drawer': Drawer;
    }
}
