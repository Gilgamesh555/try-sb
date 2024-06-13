type KoerberMutationEvent = CustomEvent<{
    mutationList: MutationRecord[];
}>;
declare global {
    interface GlobalEventHandlersEventMap {
        'koerber-mutation': KoerberMutationEvent;
    }
}
export default KoerberMutationEvent;
