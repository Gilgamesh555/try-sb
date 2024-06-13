import Accordion from './accordion.component';
export * from './accordion.component';
export default Accordion;
declare global {
    interface HTMLElementTagNameMap {
        'koerber-accordion': Accordion;
    }
}
