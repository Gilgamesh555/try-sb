import Avatar from './avatar.component';
export * from './avatar.component';
export default Avatar;
declare global {
    interface HTMLElementTagNameMap {
        'koerber-avatar': Avatar;
    }
}