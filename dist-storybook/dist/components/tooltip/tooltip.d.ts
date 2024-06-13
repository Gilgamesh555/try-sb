import Tooltip from './tooltip.component';
export * from './tooltip.component';
export default Tooltip;
declare global {
    interface HTMLElementTagNameMap {
        'koerber-tooltip': Tooltip;
    }
}
