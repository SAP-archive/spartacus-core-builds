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
export class WindowRef {
    /**
     * @param {?} document
     */
    constructor(document) {
        // it's a workaround to have document property properly typed
        // see: https://github.com/angular/angular/issues/15640
        this.document = document;
    }
    /**
     * @return {?}
     */
    get nativeWindow() {
        return typeof window !== 'undefined' ? window : undefined;
    }
    /**
     * @return {?}
     */
    get sessionStorage() {
        return this.nativeWindow ? this.nativeWindow.sessionStorage : undefined;
    }
    /**
     * @return {?}
     */
    get localStorage() {
        return this.nativeWindow ? this.nativeWindow.localStorage : undefined;
    }
    /**
     * Returns an observable for the window resize event and emits an event
     * every 300ms in case of resizing. An event is simulated initially.
     *
     * If there's no window object availale (i.e. in SSR), a null value is emitted.
     * @return {?}
     */
    get resize$() {
        if (!this.nativeWindow) {
            return of(null);
        }
        else {
            return fromEvent(this.nativeWindow, 'resize').pipe(debounceTime(300), startWith({ target: this.nativeWindow }), distinctUntilChanged());
        }
    }
}
WindowRef.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
WindowRef.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
];
/** @nocollapse */ WindowRef.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function WindowRef_Factory() { return new WindowRef(i0.ɵɵinject(i1.DOCUMENT)); }, token: WindowRef, providedIn: "root" });
if (false) {
    /** @type {?} */
    WindowRef.prototype.document;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2luZG93LXJlZi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy93aW5kb3cvd2luZG93LXJlZi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxTQUFTLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxZQUFZLEVBQUUsb0JBQW9CLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7OztBQUsvRSxNQUFNLE9BQU8sU0FBUzs7OztJQUdwQixZQUE4QixRQUFRO1FBQ3BDLDZEQUE2RDtRQUM3RCx1REFBdUQ7UUFDdkQsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7SUFDM0IsQ0FBQzs7OztJQUVELElBQUksWUFBWTtRQUNkLE9BQU8sT0FBTyxNQUFNLEtBQUssV0FBVyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUM1RCxDQUFDOzs7O0lBRUQsSUFBSSxjQUFjO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUMxRSxDQUFDOzs7O0lBRUQsSUFBSSxZQUFZO1FBQ2QsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQ3hFLENBQUM7Ozs7Ozs7O0lBUUQsSUFBSSxPQUFPO1FBQ1QsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDdEIsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDakI7YUFBTTtZQUNMLE9BQU8sU0FBUyxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUNoRCxZQUFZLENBQUMsR0FBRyxDQUFDLEVBQ2pCLFNBQVMsQ0FBQyxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsRUFDeEMsb0JBQW9CLEVBQUUsQ0FDdkIsQ0FBQztTQUNIO0lBQ0gsQ0FBQzs7O1lBeENGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7Ozs0Q0FJYyxNQUFNLFNBQUMsUUFBUTs7Ozs7SUFGNUIsNkJBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBmcm9tRXZlbnQsIE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUsIGRpc3RpbmN0VW50aWxDaGFuZ2VkLCBzdGFydFdpdGggfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBXaW5kb3dSZWYge1xuICByZWFkb25seSBkb2N1bWVudDogRG9jdW1lbnQ7XG5cbiAgY29uc3RydWN0b3IoQEluamVjdChET0NVTUVOVCkgZG9jdW1lbnQpIHtcbiAgICAvLyBpdCdzIGEgd29ya2Fyb3VuZCB0byBoYXZlIGRvY3VtZW50IHByb3BlcnR5IHByb3Blcmx5IHR5cGVkXG4gICAgLy8gc2VlOiBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2lzc3Vlcy8xNTY0MFxuICAgIHRoaXMuZG9jdW1lbnQgPSBkb2N1bWVudDtcbiAgfVxuXG4gIGdldCBuYXRpdmVXaW5kb3coKTogV2luZG93IHtcbiAgICByZXR1cm4gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBnZXQgc2Vzc2lvblN0b3JhZ2UoKTogU3RvcmFnZSB7XG4gICAgcmV0dXJuIHRoaXMubmF0aXZlV2luZG93ID8gdGhpcy5uYXRpdmVXaW5kb3cuc2Vzc2lvblN0b3JhZ2UgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBnZXQgbG9jYWxTdG9yYWdlKCk6IFN0b3JhZ2Uge1xuICAgIHJldHVybiB0aGlzLm5hdGl2ZVdpbmRvdyA/IHRoaXMubmF0aXZlV2luZG93LmxvY2FsU3RvcmFnZSA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIG9ic2VydmFibGUgZm9yIHRoZSB3aW5kb3cgcmVzaXplIGV2ZW50IGFuZCBlbWl0cyBhbiBldmVudFxuICAgKiBldmVyeSAzMDBtcyBpbiBjYXNlIG9mIHJlc2l6aW5nLiBBbiBldmVudCBpcyBzaW11bGF0ZWQgaW5pdGlhbGx5LlxuICAgKlxuICAgKiBJZiB0aGVyZSdzIG5vIHdpbmRvdyBvYmplY3QgYXZhaWxhbGUgKGkuZS4gaW4gU1NSKSwgYSBudWxsIHZhbHVlIGlzIGVtaXR0ZWQuXG4gICAqL1xuICBnZXQgcmVzaXplJCgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIGlmICghdGhpcy5uYXRpdmVXaW5kb3cpIHtcbiAgICAgIHJldHVybiBvZihudWxsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZyb21FdmVudCh0aGlzLm5hdGl2ZVdpbmRvdywgJ3Jlc2l6ZScpLnBpcGUoXG4gICAgICAgIGRlYm91bmNlVGltZSgzMDApLFxuICAgICAgICBzdGFydFdpdGgoeyB0YXJnZXQ6IHRoaXMubmF0aXZlV2luZG93IH0pLFxuICAgICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpXG4gICAgICApO1xuICAgIH1cbiAgfVxufVxuIl19