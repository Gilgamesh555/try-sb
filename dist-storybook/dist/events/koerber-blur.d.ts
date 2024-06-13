type KoerberBlurEvent = CustomEvent<Record<PropertyKey, never>>;
declare global {
    interface GlobalEventHandlersEventMap {
        'koerber-blur': KoerberBlurEvent;
    }
}
export default KoerberBlurEvent;
