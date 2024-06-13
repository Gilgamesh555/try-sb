import Card from './card.component';
export * from './card.component';
export default Card;
declare global {
    interface HTMLElementTagNameMap {
        'koerber-card': Card;
    }
}
