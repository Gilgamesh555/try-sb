import Button from './button.component';
export * from './button.component';
export default Button;
declare global {
    interface HTMLElementTagNameMap {
        'koerber-button': Button;
    }
}
