import Chip from './chip.component';
export * from './chip.component';
export default Chip;
declare global {
    interface HTMLElementTagNameMap {
        'koerber-chip': Chip;
    }
}
