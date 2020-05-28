import { Observable } from 'rxjs';
export declare class WindowRef {
    readonly document: Document;
    constructor(document: any);
    get nativeWindow(): Window;
    get sessionStorage(): Storage;
    get localStorage(): Storage;
    /**
     * Returns an observable for the window resize event and emits an event
     * every 300ms in case of resizing. An event is simulated initially.
     *
     * If there's no window object availale (i.e. in SSR), a null value is emitted.
     */
    get resize$(): Observable<any>;
}
