/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';
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
    WindowRef.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    WindowRef.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
    ]; };
    /** @nocollapse */ WindowRef.ngInjectableDef = i0.defineInjectable({ factory: function WindowRef_Factory() { return new WindowRef(i0.inject(i1.DOCUMENT)); }, token: WindowRef, providedIn: "root" });
    return WindowRef;
}());
export { WindowRef };
if (false) {
    /** @type {?} */
    WindowRef.prototype.document;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2luZG93LXJlZi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy93aW5kb3cvd2luZG93LXJlZi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDOzs7QUFFM0M7SUFNRSxtQkFBOEIsUUFBUTtRQUNwQyw2REFBNkQ7UUFDN0QsdURBQXVEO1FBQ3ZELElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0lBQzNCLENBQUM7SUFFRCxzQkFBSSxtQ0FBWTs7OztRQUFoQjtZQUNFLE9BQU8sT0FBTyxNQUFNLEtBQUssV0FBVyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUM1RCxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLHFDQUFjOzs7O1FBQWxCO1lBQ0UsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQzFFLENBQUM7OztPQUFBO0lBRUQsc0JBQUksbUNBQVk7Ozs7UUFBaEI7WUFDRSxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDeEUsQ0FBQzs7O09BQUE7O2dCQXRCRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O2dEQUljLE1BQU0sU0FBQyxRQUFROzs7b0JBVDlCO0NBMEJDLEFBdkJELElBdUJDO1NBcEJZLFNBQVM7OztJQUNwQiw2QkFBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIFdpbmRvd1JlZiB7XG4gIHJlYWRvbmx5IGRvY3VtZW50OiBEb2N1bWVudDtcblxuICBjb25zdHJ1Y3RvcihASW5qZWN0KERPQ1VNRU5UKSBkb2N1bWVudCkge1xuICAgIC8vIGl0J3MgYSB3b3JrYXJvdW5kIHRvIGhhdmUgZG9jdW1lbnQgcHJvcGVydHkgcHJvcGVybHkgdHlwZWRcbiAgICAvLyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvaXNzdWVzLzE1NjQwXG4gICAgdGhpcy5kb2N1bWVudCA9IGRvY3VtZW50O1xuICB9XG5cbiAgZ2V0IG5hdGl2ZVdpbmRvdygpOiBXaW5kb3cge1xuICAgIHJldHVybiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdyA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGdldCBzZXNzaW9uU3RvcmFnZSgpOiBTdG9yYWdlIHtcbiAgICByZXR1cm4gdGhpcy5uYXRpdmVXaW5kb3cgPyB0aGlzLm5hdGl2ZVdpbmRvdy5zZXNzaW9uU3RvcmFnZSA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGdldCBsb2NhbFN0b3JhZ2UoKTogU3RvcmFnZSB7XG4gICAgcmV0dXJuIHRoaXMubmF0aXZlV2luZG93ID8gdGhpcy5uYXRpdmVXaW5kb3cubG9jYWxTdG9yYWdlIDogdW5kZWZpbmVkO1xuICB9XG59XG4iXX0=