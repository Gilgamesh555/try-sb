import Spinner from './spinner.component';
export * from './spinner.component';
export default Spinner;
declare global {
    interface HTMLElementTagNameMap {
        'koerber-spinner': Spinner;
    }
}
