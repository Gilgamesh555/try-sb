import Tag from './tag.component';
export * from './tag.component';
export default Tag;
declare global {
    interface HTMLElementTagNameMap {
        'koerber-tag': Tag;
    }
}
