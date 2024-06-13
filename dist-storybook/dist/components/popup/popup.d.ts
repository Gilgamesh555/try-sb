import Popup from './popup.component';
export * from './popup.component';
export default Popup;
declare global {
    interface HTMLElementTagNameMap {
        'koerber-popup': Popup;
    }
}
