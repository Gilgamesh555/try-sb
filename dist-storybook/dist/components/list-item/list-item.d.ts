import ListItem from './list-item.component';
export * from './list-item.component';
export default ListItem;
declare global {
    interface HTMLElementTagNameMap {
        'koerber-list-item': ListItem;
    }
}
