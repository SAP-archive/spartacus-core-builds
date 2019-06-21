/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { tap } from 'rxjs/operators';
import * as fromStore from '../store/index';
var ProductReferenceService = /** @class */ (function () {
    function ProductReferenceService(store) {
        this.store = store;
    }
    /**
     * @param {?} productCode
     * @param {?=} referenceType
     * @param {?=} pageSize
     * @return {?}
     */
    ProductReferenceService.prototype.get = /**
     * @param {?} productCode
     * @param {?=} referenceType
     * @param {?=} pageSize
     * @return {?}
     */
    function (productCode, referenceType, pageSize) {
        var _this = this;
        return this.store.pipe(select(fromStore.getSelectedProductReferencesFactory(productCode)), tap((/**
         * @param {?} references
         * @return {?}
         */
        function (references) {
            if (references === undefined && productCode !== undefined) {
                _this.store.dispatch(new fromStore.LoadProductReferences({
                    productCode: productCode,
                    referenceType: referenceType,
                    pageSize: pageSize,
                }));
            }
        })));
    };
    ProductReferenceService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    ProductReferenceService.ctorParameters = function () { return [
        { type: Store }
    ]; };
    return ProductReferenceService;
}());
export { ProductReferenceService };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    ProductReferenceService.prototype.store;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1yZWZlcmVuY2Uuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9wcm9kdWN0L2ZhY2FkZS9wcm9kdWN0LXJlZmVyZW5jZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBRTVDLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVyQyxPQUFPLEtBQUssU0FBUyxNQUFNLGdCQUFnQixDQUFDO0FBRTVDO0lBRUUsaUNBQXNCLEtBQXdDO1FBQXhDLFVBQUssR0FBTCxLQUFLLENBQW1DO0lBQUcsQ0FBQzs7Ozs7OztJQUVsRSxxQ0FBRzs7Ozs7O0lBQUgsVUFDRSxXQUFtQixFQUNuQixhQUFzQixFQUN0QixRQUFpQjtRQUhuQixpQkFtQkM7UUFkQyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUNwQixNQUFNLENBQUMsU0FBUyxDQUFDLG1DQUFtQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQ2xFLEdBQUc7Ozs7UUFBQyxVQUFBLFVBQVU7WUFDWixJQUFJLFVBQVUsS0FBSyxTQUFTLElBQUksV0FBVyxLQUFLLFNBQVMsRUFBRTtnQkFDekQsS0FBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQ2pCLElBQUksU0FBUyxDQUFDLHFCQUFxQixDQUFDO29CQUNsQyxXQUFXLGFBQUE7b0JBQ1gsYUFBYSxlQUFBO29CQUNiLFFBQVEsVUFBQTtpQkFDVCxDQUFDLENBQ0gsQ0FBQzthQUNIO1FBQ0gsQ0FBQyxFQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7O2dCQXZCRixVQUFVOzs7O2dCQU5NLEtBQUs7O0lBOEJ0Qiw4QkFBQztDQUFBLEFBeEJELElBd0JDO1NBdkJZLHVCQUF1Qjs7Ozs7O0lBQ3RCLHdDQUFrRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHNlbGVjdCwgU3RvcmUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBQcm9kdWN0UmVmZXJlbmNlIH0gZnJvbSAnLi4vLi4vbW9kZWwvcHJvZHVjdC5tb2RlbCc7XG5pbXBvcnQgKiBhcyBmcm9tU3RvcmUgZnJvbSAnLi4vc3RvcmUvaW5kZXgnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUHJvZHVjdFJlZmVyZW5jZVNlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgc3RvcmU6IFN0b3JlPGZyb21TdG9yZS5TdGF0ZVdpdGhQcm9kdWN0Pikge31cblxuICBnZXQoXG4gICAgcHJvZHVjdENvZGU6IHN0cmluZyxcbiAgICByZWZlcmVuY2VUeXBlPzogc3RyaW5nLFxuICAgIHBhZ2VTaXplPzogbnVtYmVyXG4gICk6IE9ic2VydmFibGU8UHJvZHVjdFJlZmVyZW5jZVtdPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChmcm9tU3RvcmUuZ2V0U2VsZWN0ZWRQcm9kdWN0UmVmZXJlbmNlc0ZhY3RvcnkocHJvZHVjdENvZGUpKSxcbiAgICAgIHRhcChyZWZlcmVuY2VzID0+IHtcbiAgICAgICAgaWYgKHJlZmVyZW5jZXMgPT09IHVuZGVmaW5lZCAmJiBwcm9kdWN0Q29kZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcbiAgICAgICAgICAgIG5ldyBmcm9tU3RvcmUuTG9hZFByb2R1Y3RSZWZlcmVuY2VzKHtcbiAgICAgICAgICAgICAgcHJvZHVjdENvZGUsXG4gICAgICAgICAgICAgIHJlZmVyZW5jZVR5cGUsXG4gICAgICAgICAgICAgIHBhZ2VTaXplLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICk7XG4gIH1cbn1cbiJdfQ==