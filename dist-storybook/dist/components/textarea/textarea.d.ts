import Textarea from './textarea.component';
export * from './textarea.component';
export default Textarea;
declare global {
    interface HTMLElementTagNameMap {
        'koerber-textarea': Textarea;
    }
}
