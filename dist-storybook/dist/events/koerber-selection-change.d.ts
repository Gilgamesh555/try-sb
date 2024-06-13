import type TreeItem from '../components/tree-item/tree-item';
type KoerberSelectionChangeEvent = CustomEvent<{
    selection: TreeItem[];
}>;
declare global {
    interface GlobalEventHandlersEventMap {
        'koerber-selection-change': KoerberSelectionChangeEvent;
    }
}
export default KoerberSelectionChangeEvent;
