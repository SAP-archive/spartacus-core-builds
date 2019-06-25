/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { tap } from 'rxjs/operators';
import * as fromProductActions from '../store/actions/index';
import { ProductSelectors } from '../store/selectors/index';
export class ProductReferenceService {
    /**
     * @param {?} store
     */
    constructor(store) {
        this.store = store;
    }
    /**
     * @param {?} productCode
     * @param {?=} referenceType
     * @param {?=} pageSize
     * @return {?}
     */
    get(productCode, referenceType, pageSize) {
        return this.store.pipe(select(ProductSelectors.getSelectedProductReferencesFactory(productCode)), tap((/**
         * @param {?} references
         * @return {?}
         */
        references => {
            if (references === undefined && productCode !== undefined) {
                this.store.dispatch(new fromProductActions.LoadProductReferences({
                    productCode,
                    referenceType,
                    pageSize,
                }));
            }
        })));
    }
}
ProductReferenceService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ProductReferenceService.ctorParameters = () => [
    { type: Store }
];
if (false) {
    /**
     * @type {?}
     * @protected
     */
    ProductReferenceService.prototype.store;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1yZWZlcmVuY2Uuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9wcm9kdWN0L2ZhY2FkZS9wcm9kdWN0LXJlZmVyZW5jZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBRTVDLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVyQyxPQUFPLEtBQUssa0JBQWtCLE1BQU0sd0JBQXdCLENBQUM7QUFFN0QsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFHNUQsTUFBTSxPQUFPLHVCQUF1Qjs7OztJQUNsQyxZQUFzQixLQUE4QjtRQUE5QixVQUFLLEdBQUwsS0FBSyxDQUF5QjtJQUFHLENBQUM7Ozs7Ozs7SUFFeEQsR0FBRyxDQUNELFdBQW1CLEVBQ25CLGFBQXNCLEVBQ3RCLFFBQWlCO1FBRWpCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQ3BCLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxtQ0FBbUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUN6RSxHQUFHOzs7O1FBQUMsVUFBVSxDQUFDLEVBQUU7WUFDZixJQUFJLFVBQVUsS0FBSyxTQUFTLElBQUksV0FBVyxLQUFLLFNBQVMsRUFBRTtnQkFDekQsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQ2pCLElBQUksa0JBQWtCLENBQUMscUJBQXFCLENBQUM7b0JBQzNDLFdBQVc7b0JBQ1gsYUFBYTtvQkFDYixRQUFRO2lCQUNULENBQUMsQ0FDSCxDQUFDO2FBQ0g7UUFDSCxDQUFDLEVBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQzs7O1lBdkJGLFVBQVU7Ozs7WUFSTSxLQUFLOzs7Ozs7O0lBVVIsd0NBQXdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgc2VsZWN0LCBTdG9yZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFByb2R1Y3RSZWZlcmVuY2UgfSBmcm9tICcuLi8uLi9tb2RlbC9wcm9kdWN0Lm1vZGVsJztcbmltcG9ydCAqIGFzIGZyb21Qcm9kdWN0QWN0aW9ucyBmcm9tICcuLi9zdG9yZS9hY3Rpb25zL2luZGV4JztcbmltcG9ydCB7IFN0YXRlV2l0aFByb2R1Y3QgfSBmcm9tICcuLi9zdG9yZS9wcm9kdWN0LXN0YXRlJztcbmltcG9ydCB7IFByb2R1Y3RTZWxlY3RvcnMgfSBmcm9tICcuLi9zdG9yZS9zZWxlY3RvcnMvaW5kZXgnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUHJvZHVjdFJlZmVyZW5jZVNlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgc3RvcmU6IFN0b3JlPFN0YXRlV2l0aFByb2R1Y3Q+KSB7fVxuXG4gIGdldChcbiAgICBwcm9kdWN0Q29kZTogc3RyaW5nLFxuICAgIHJlZmVyZW5jZVR5cGU/OiBzdHJpbmcsXG4gICAgcGFnZVNpemU/OiBudW1iZXJcbiAgKTogT2JzZXJ2YWJsZTxQcm9kdWN0UmVmZXJlbmNlW10+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KFByb2R1Y3RTZWxlY3RvcnMuZ2V0U2VsZWN0ZWRQcm9kdWN0UmVmZXJlbmNlc0ZhY3RvcnkocHJvZHVjdENvZGUpKSxcbiAgICAgIHRhcChyZWZlcmVuY2VzID0+IHtcbiAgICAgICAgaWYgKHJlZmVyZW5jZXMgPT09IHVuZGVmaW5lZCAmJiBwcm9kdWN0Q29kZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcbiAgICAgICAgICAgIG5ldyBmcm9tUHJvZHVjdEFjdGlvbnMuTG9hZFByb2R1Y3RSZWZlcmVuY2VzKHtcbiAgICAgICAgICAgICAgcHJvZHVjdENvZGUsXG4gICAgICAgICAgICAgIHJlZmVyZW5jZVR5cGUsXG4gICAgICAgICAgICAgIHBhZ2VTaXplLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICk7XG4gIH1cbn1cbiJdfQ==