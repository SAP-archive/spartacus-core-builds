import { Observable } from 'rxjs';
import * as ɵngcc0 from '@angular/core';
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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<WindowRef>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2luZG93LXJlZi5kLnRzIiwic291cmNlcyI6WyJ3aW5kb3ctcmVmLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FBYUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBXaW5kb3dSZWYge1xuICAgIHJlYWRvbmx5IGRvY3VtZW50OiBEb2N1bWVudDtcbiAgICBjb25zdHJ1Y3Rvcihkb2N1bWVudDogYW55KTtcbiAgICBnZXQgbmF0aXZlV2luZG93KCk6IFdpbmRvdztcbiAgICBnZXQgc2Vzc2lvblN0b3JhZ2UoKTogU3RvcmFnZTtcbiAgICBnZXQgbG9jYWxTdG9yYWdlKCk6IFN0b3JhZ2U7XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhbiBvYnNlcnZhYmxlIGZvciB0aGUgd2luZG93IHJlc2l6ZSBldmVudCBhbmQgZW1pdHMgYW4gZXZlbnRcbiAgICAgKiBldmVyeSAzMDBtcyBpbiBjYXNlIG9mIHJlc2l6aW5nLiBBbiBldmVudCBpcyBzaW11bGF0ZWQgaW5pdGlhbGx5LlxuICAgICAqXG4gICAgICogSWYgdGhlcmUncyBubyB3aW5kb3cgb2JqZWN0IGF2YWlsYWxlIChpLmUuIGluIFNTUiksIGEgbnVsbCB2YWx1ZSBpcyBlbWl0dGVkLlxuICAgICAqL1xuICAgIGdldCByZXNpemUkKCk6IE9ic2VydmFibGU8YW55Pjtcbn1cbiJdfQ==