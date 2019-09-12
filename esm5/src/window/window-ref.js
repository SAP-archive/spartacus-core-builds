/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { fromEvent, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, startWith } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
var WindowRef = /** @class */ (function () {
    function WindowRef(document) {
        // it's a workaround to have document property properly typed
        // see: https://github.com/angular/angular/issues/15640
        this.document = document;
    }
    Object.defineProperty(WindowRef.prototype, "nativeWindow", {
        get: /**
         * @return {?}
         */
        function () {
            return typeof window !== 'undefined' ? window : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WindowRef.prototype, "sessionStorage", {
        get: /**
         * @return {?}
         */
        function () {
            return this.nativeWindow ? this.nativeWindow.sessionStorage : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WindowRef.prototype, "localStorage", {
        get: /**
         * @return {?}
         */
        function () {
            return this.nativeWindow ? this.nativeWindow.localStorage : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WindowRef.prototype, "resize$", {
        /**
         * Returns an observable for the window resize event and emits an event
         * every 300ms in case of resizing. An event is simulated initially.
         *
         * If there's no window object availale (i.e. in SSR), a null value is emitted.
         */
        get: /**
         * Returns an observable for the window resize event and emits an event
         * every 300ms in case of resizing. An event is simulated initially.
         *
         * If there's no window object availale (i.e. in SSR), a null value is emitted.
         * @return {?}
         */
        function () {
            if (!this.nativeWindow) {
                return of(null);
            }
            else {
                return fromEvent(this.nativeWindow, 'resize').pipe(debounceTime(300), startWith({ target: this.nativeWindow }), distinctUntilChanged());
            }
        },
        enumerable: true,
        configurable: true
    });
    WindowRef.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    WindowRef.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
    ]; };
    /** @nocollapse */ WindowRef.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function WindowRef_Factory() { return new WindowRef(i0.ɵɵinject(i1.DOCUMENT)); }, token: WindowRef, providedIn: "root" });
    return WindowRef;
}());
export { WindowRef };
if (false) {
    /** @type {?} */
    WindowRef.prototype.document;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2luZG93LXJlZi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy93aW5kb3cvd2luZG93LXJlZi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxTQUFTLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxZQUFZLEVBQUUsb0JBQW9CLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7OztBQUUvRTtJQU1FLG1CQUE4QixRQUFRO1FBQ3BDLDZEQUE2RDtRQUM3RCx1REFBdUQ7UUFDdkQsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7SUFDM0IsQ0FBQztJQUVELHNCQUFJLG1DQUFZOzs7O1FBQWhCO1lBQ0UsT0FBTyxPQUFPLE1BQU0sS0FBSyxXQUFXLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQzVELENBQUM7OztPQUFBO0lBRUQsc0JBQUkscUNBQWM7Ozs7UUFBbEI7WUFDRSxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDMUUsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSxtQ0FBWTs7OztRQUFoQjtZQUNFLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUN4RSxDQUFDOzs7T0FBQTtJQVFELHNCQUFJLDhCQUFPO1FBTlg7Ozs7O1dBS0c7Ozs7Ozs7O1FBQ0g7WUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRTtnQkFDdEIsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDakI7aUJBQU07Z0JBQ0wsT0FBTyxTQUFTLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQ2hELFlBQVksQ0FBQyxHQUFHLENBQUMsRUFDakIsU0FBUyxDQUFDLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxFQUN4QyxvQkFBb0IsRUFBRSxDQUN2QixDQUFDO2FBQ0g7UUFDSCxDQUFDOzs7T0FBQTs7Z0JBeENGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0RBSWMsTUFBTSxTQUFDLFFBQVE7OztvQkFYOUI7Q0E4Q0MsQUF6Q0QsSUF5Q0M7U0F0Q1ksU0FBUzs7O0lBQ3BCLDZCQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgZnJvbUV2ZW50LCBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGVib3VuY2VUaW1lLCBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgc3RhcnRXaXRoIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgV2luZG93UmVmIHtcbiAgcmVhZG9ubHkgZG9jdW1lbnQ6IERvY3VtZW50O1xuXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoRE9DVU1FTlQpIGRvY3VtZW50KSB7XG4gICAgLy8gaXQncyBhIHdvcmthcm91bmQgdG8gaGF2ZSBkb2N1bWVudCBwcm9wZXJ0eSBwcm9wZXJseSB0eXBlZFxuICAgIC8vIHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9pc3N1ZXMvMTU2NDBcbiAgICB0aGlzLmRvY3VtZW50ID0gZG9jdW1lbnQ7XG4gIH1cblxuICBnZXQgbmF0aXZlV2luZG93KCk6IFdpbmRvdyB7XG4gICAgcmV0dXJuIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgZ2V0IHNlc3Npb25TdG9yYWdlKCk6IFN0b3JhZ2Uge1xuICAgIHJldHVybiB0aGlzLm5hdGl2ZVdpbmRvdyA/IHRoaXMubmF0aXZlV2luZG93LnNlc3Npb25TdG9yYWdlIDogdW5kZWZpbmVkO1xuICB9XG5cbiAgZ2V0IGxvY2FsU3RvcmFnZSgpOiBTdG9yYWdlIHtcbiAgICByZXR1cm4gdGhpcy5uYXRpdmVXaW5kb3cgPyB0aGlzLm5hdGl2ZVdpbmRvdy5sb2NhbFN0b3JhZ2UgOiB1bmRlZmluZWQ7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbiBvYnNlcnZhYmxlIGZvciB0aGUgd2luZG93IHJlc2l6ZSBldmVudCBhbmQgZW1pdHMgYW4gZXZlbnRcbiAgICogZXZlcnkgMzAwbXMgaW4gY2FzZSBvZiByZXNpemluZy4gQW4gZXZlbnQgaXMgc2ltdWxhdGVkIGluaXRpYWxseS5cbiAgICpcbiAgICogSWYgdGhlcmUncyBubyB3aW5kb3cgb2JqZWN0IGF2YWlsYWxlIChpLmUuIGluIFNTUiksIGEgbnVsbCB2YWx1ZSBpcyBlbWl0dGVkLlxuICAgKi9cbiAgZ2V0IHJlc2l6ZSQoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICBpZiAoIXRoaXMubmF0aXZlV2luZG93KSB7XG4gICAgICByZXR1cm4gb2YobnVsbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmcm9tRXZlbnQodGhpcy5uYXRpdmVXaW5kb3csICdyZXNpemUnKS5waXBlKFxuICAgICAgICBkZWJvdW5jZVRpbWUoMzAwKSxcbiAgICAgICAgc3RhcnRXaXRoKHsgdGFyZ2V0OiB0aGlzLm5hdGl2ZVdpbmRvdyB9KSxcbiAgICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKVxuICAgICAgKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==