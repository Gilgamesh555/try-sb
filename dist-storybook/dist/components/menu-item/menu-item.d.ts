import MenuItem from './menu-item.component';
export * from './menu-item.component';
export default MenuItem;
declare global {
    interface HTMLElementTagNameMap {
        'koerber-menu-item': MenuItem;
    }
}
