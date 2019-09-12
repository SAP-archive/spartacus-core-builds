/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { ProductReferencesAdapter } from './product-references.adapter';
import * as i0 from "@angular/core";
import * as i1 from "./product-references.adapter";
export class ProductReferencesConnector {
    /**
     * @param {?} adapter
     */
    constructor(adapter) {
        this.adapter = adapter;
    }
    /**
     * @param {?} productCode
     * @param {?=} referenceType
     * @param {?=} pageSize
     * @return {?}
     */
    get(productCode, referenceType, pageSize) {
        return this.adapter.load(productCode, referenceType, pageSize);
    }
}
ProductReferencesConnector.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
ProductReferencesConnector.ctorParameters = () => [
    { type: ProductReferencesAdapter }
];
/** @nocollapse */ ProductReferencesConnector.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function ProductReferencesConnector_Factory() { return new ProductReferencesConnector(i0.ɵɵinject(i1.ProductReferencesAdapter)); }, token: ProductReferencesConnector, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @protected
     */
    ProductReferencesConnector.prototype.adapter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1yZWZlcmVuY2VzLmNvbm5lY3Rvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9wcm9kdWN0L2Nvbm5lY3RvcnMvcmVmZXJlbmNlcy9wcm9kdWN0LXJlZmVyZW5jZXMuY29ubmVjdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzNDLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDOzs7QUFLeEUsTUFBTSxPQUFPLDBCQUEwQjs7OztJQUNyQyxZQUFzQixPQUFpQztRQUFqQyxZQUFPLEdBQVAsT0FBTyxDQUEwQjtJQUFHLENBQUM7Ozs7Ozs7SUFFM0QsR0FBRyxDQUNELFdBQW1CLEVBQ25CLGFBQXNCLEVBQ3RCLFFBQWlCO1FBRWpCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLGFBQWEsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUNqRSxDQUFDOzs7WUFaRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7WUFKUSx3QkFBd0I7Ozs7Ozs7O0lBTW5CLDZDQUEyQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFByb2R1Y3RSZWZlcmVuY2UgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9wcm9kdWN0Lm1vZGVsJztcbmltcG9ydCB7IFByb2R1Y3RSZWZlcmVuY2VzQWRhcHRlciB9IGZyb20gJy4vcHJvZHVjdC1yZWZlcmVuY2VzLmFkYXB0ZXInO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgUHJvZHVjdFJlZmVyZW5jZXNDb25uZWN0b3Ige1xuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgYWRhcHRlcjogUHJvZHVjdFJlZmVyZW5jZXNBZGFwdGVyKSB7fVxuXG4gIGdldChcbiAgICBwcm9kdWN0Q29kZTogc3RyaW5nLFxuICAgIHJlZmVyZW5jZVR5cGU/OiBzdHJpbmcsXG4gICAgcGFnZVNpemU/OiBudW1iZXJcbiAgKTogT2JzZXJ2YWJsZTxQcm9kdWN0UmVmZXJlbmNlW10+IHtcbiAgICByZXR1cm4gdGhpcy5hZGFwdGVyLmxvYWQocHJvZHVjdENvZGUsIHJlZmVyZW5jZVR5cGUsIHBhZ2VTaXplKTtcbiAgfVxufVxuIl19