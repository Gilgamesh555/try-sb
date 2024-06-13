type MediaQueryCallback = (breakpoint: string) => void;
type OrientationCallback = (orientation: string) => void;
interface Query {
    name: string;
    query: string;
}
export declare class MediaObserver {
    private currentBreakpoint;
    private subscriptions;
    constructor();
    private init;
    subscribe(callback: MediaQueryCallback): void;
    unsubscribeAll(): void;
}
export declare class MediaOrientationObserver {
    private currentOrientation;
    private subscriptions;
    constructor();
    private handleOrientationChange;
    private init;
    subscribe(callback: OrientationCallback): void;
    unsubscribeAll(): void;
}
export declare const ORIENTATION_QUERIES: Query[];
export declare const SCREEN_SIZES: Query[];
export {};
