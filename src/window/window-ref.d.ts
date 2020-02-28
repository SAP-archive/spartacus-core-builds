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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2luZG93LXJlZi5kLnRzIiwic291cmNlcyI6WyJ3aW5kb3ctcmVmLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FBYUE7Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgV2luZG93UmVmIHtcbiAgICByZWFkb25seSBkb2N1bWVudDogRG9jdW1lbnQ7XG4gICAgY29uc3RydWN0b3IoZG9jdW1lbnQ6IGFueSk7XG4gICAgZ2V0IG5hdGl2ZVdpbmRvdygpOiBXaW5kb3c7XG4gICAgZ2V0IHNlc3Npb25TdG9yYWdlKCk6IFN0b3JhZ2U7XG4gICAgZ2V0IGxvY2FsU3RvcmFnZSgpOiBTdG9yYWdlO1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgYW4gb2JzZXJ2YWJsZSBmb3IgdGhlIHdpbmRvdyByZXNpemUgZXZlbnQgYW5kIGVtaXRzIGFuIGV2ZW50XG4gICAgICogZXZlcnkgMzAwbXMgaW4gY2FzZSBvZiByZXNpemluZy4gQW4gZXZlbnQgaXMgc2ltdWxhdGVkIGluaXRpYWxseS5cbiAgICAgKlxuICAgICAqIElmIHRoZXJlJ3Mgbm8gd2luZG93IG9iamVjdCBhdmFpbGFsZSAoaS5lLiBpbiBTU1IpLCBhIG51bGwgdmFsdWUgaXMgZW1pdHRlZC5cbiAgICAgKi9cbiAgICBnZXQgcmVzaXplJCgpOiBPYnNlcnZhYmxlPGFueT47XG59XG4iXX0=