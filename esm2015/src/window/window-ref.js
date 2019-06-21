/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2luZG93LXJlZi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy93aW5kb3cvd2luZG93LXJlZi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDOzs7QUFLM0MsTUFBTSxPQUFPLFNBQVM7Ozs7SUFHcEIsWUFBOEIsUUFBUTtRQUNwQyw2REFBNkQ7UUFDN0QsdURBQXVEO1FBQ3ZELElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0lBQzNCLENBQUM7Ozs7SUFFRCxJQUFJLFlBQVk7UUFDZCxPQUFPLE9BQU8sTUFBTSxLQUFLLFdBQVcsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDNUQsQ0FBQzs7OztJQUVELElBQUksY0FBYztRQUNoQixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDMUUsQ0FBQzs7OztJQUVELElBQUksWUFBWTtRQUNkLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUN4RSxDQUFDOzs7WUF0QkYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7OzRDQUljLE1BQU0sU0FBQyxRQUFROzs7OztJQUY1Qiw2QkFBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIFdpbmRvd1JlZiB7XG4gIHJlYWRvbmx5IGRvY3VtZW50OiBEb2N1bWVudDtcblxuICBjb25zdHJ1Y3RvcihASW5qZWN0KERPQ1VNRU5UKSBkb2N1bWVudCkge1xuICAgIC8vIGl0J3MgYSB3b3JrYXJvdW5kIHRvIGhhdmUgZG9jdW1lbnQgcHJvcGVydHkgcHJvcGVybHkgdHlwZWRcbiAgICAvLyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvaXNzdWVzLzE1NjQwXG4gICAgdGhpcy5kb2N1bWVudCA9IGRvY3VtZW50O1xuICB9XG5cbiAgZ2V0IG5hdGl2ZVdpbmRvdygpOiBXaW5kb3cge1xuICAgIHJldHVybiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdyA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGdldCBzZXNzaW9uU3RvcmFnZSgpOiBTdG9yYWdlIHtcbiAgICByZXR1cm4gdGhpcy5uYXRpdmVXaW5kb3cgPyB0aGlzLm5hdGl2ZVdpbmRvdy5zZXNzaW9uU3RvcmFnZSA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGdldCBsb2NhbFN0b3JhZ2UoKTogU3RvcmFnZSB7XG4gICAgcmV0dXJuIHRoaXMubmF0aXZlV2luZG93ID8gdGhpcy5uYXRpdmVXaW5kb3cubG9jYWxTdG9yYWdlIDogdW5kZWZpbmVkO1xuICB9XG59XG4iXX0=