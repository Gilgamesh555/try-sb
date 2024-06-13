import Animation from './animation.component';
export * from './animation.component';
export default Animation;
declare global {
    interface HTMLElementTagNameMap {
        'koerber-animation': Animation;
    }
}
