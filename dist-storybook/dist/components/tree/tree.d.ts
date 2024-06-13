import Tree from './tree.component';
export * from './tree.component';
export default Tree;
declare global {
    interface HTMLElementTagNameMap {
        'koerber-tree': Tree;
    }
}
