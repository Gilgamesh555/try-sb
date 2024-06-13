import Link from './link.component';
export * from './link.component';
export default Link;
declare global {
    interface HTMLElementTagNameMap {
        'koerber-link': Link;
    }
}
