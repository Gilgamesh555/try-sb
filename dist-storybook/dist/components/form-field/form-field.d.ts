import FormField from './form-field.component';
export * from './form-field.component';
export default FormField;
declare global {
    interface HTMLElementTagNameMap {
        'koerber-form-field': FormField;
    }
}
