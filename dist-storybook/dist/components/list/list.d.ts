import List from './list.component';
export * from './list.component';
export default List;
declare global {
    interface HTMLElementTagNameMap {
        'koerber-list': List;
    }
}
