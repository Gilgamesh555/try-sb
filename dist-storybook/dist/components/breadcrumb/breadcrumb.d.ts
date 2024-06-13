import Breadcrumb from './breadcrumb.component';
export * from './breadcrumb.component';
export default Breadcrumb;
declare global {
    interface HTMLElementTagNameMap {
        'koerber-breadcrumb': Breadcrumb;
    }
}
