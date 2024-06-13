import Menu from './menu.component';
export * from './menu.component';
export default Menu;
declare global {
    interface HTMLElementTagNameMap {
        'koerber-menu': Menu;
    }
}
