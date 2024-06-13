import Alert from './alert.component';
export * from './alert.component';
export default Alert;
declare global {
    interface HTMLElementTagNameMap {
        'koerber-alert': Alert;
    }
}
