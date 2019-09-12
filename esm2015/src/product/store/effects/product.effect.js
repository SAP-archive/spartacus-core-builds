/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, groupBy, map, mergeMap, switchMap } from 'rxjs/operators';
import { makeErrorSerializable } from '../../../util/serialization-utils';
import { ProductConnector } from '../../connectors/product/product.connector';
import { ProductActions } from '../actions/index';
export class ProductEffects {
    /**
     * @param {?} actions$
     * @param {?} productConnector
     */
    constructor(actions$, productConnector) {
        this.actions$ = actions$;
        this.productConnector = productConnector;
        this.loadProduct$ = this.actions$.pipe(ofType(ProductActions.LOAD_PRODUCT), map((/**
         * @param {?} action
         * @return {?}
         */
        (action) => action.payload)), groupBy((/**
         * @param {?} productCode
         * @return {?}
         */
        productCode => productCode)), mergeMap((/**
         * @param {?} group
         * @return {?}
         */
        group => group.pipe(switchMap((/**
         * @param {?} productCode
         * @return {?}
         */
        productCode => {
            return this.productConnector.get(productCode).pipe(map((/**
             * @param {?} product
             * @return {?}
             */
            product => {
                return new ProductActions.LoadProductSuccess(product);
            })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            error => of(new ProductActions.LoadProductFail(productCode, makeErrorSerializable(error))))));
        }))))));
    }
}
ProductEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ProductEffects.ctorParameters = () => [
    { type: Actions },
    { type: ProductConnector }
];
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Observable)
], ProductEffects.prototype, "loadProduct$", void 0);
if (false) {
    /** @type {?} */
    ProductEffects.prototype.loadProduct$;
    /**
     * @type {?}
     * @private
     */
    ProductEffects.prototype.actions$;
    /**
     * @type {?}
     * @private
     */
    ProductEffects.prototype.productConnector;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC5lZmZlY3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvcHJvZHVjdC9zdG9yZS9lZmZlY3RzL3Byb2R1Y3QuZWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMvRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUMxRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUM5RSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFHbEQsTUFBTSxPQUFPLGNBQWM7Ozs7O0lBNkJ6QixZQUNVLFFBQWlCLEVBQ2pCLGdCQUFrQztRQURsQyxhQUFRLEdBQVIsUUFBUSxDQUFTO1FBQ2pCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUE3QjVDLGlCQUFZLEdBRVIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ3BCLE1BQU0sQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLEVBQ25DLEdBQUc7Ozs7UUFBQyxDQUFDLE1BQWtDLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUMsRUFDM0QsT0FBTzs7OztRQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsV0FBVyxFQUFDLEVBQ25DLFFBQVE7Ozs7UUFBQyxLQUFLLENBQUMsRUFBRSxDQUNmLEtBQUssQ0FBQyxJQUFJLENBQ1IsU0FBUzs7OztRQUFDLFdBQVcsQ0FBQyxFQUFFO1lBQ3RCLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQ2hELEdBQUc7Ozs7WUFBQyxPQUFPLENBQUMsRUFBRTtnQkFDWixPQUFPLElBQUksY0FBYyxDQUFDLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3hELENBQUMsRUFBQyxFQUNGLFVBQVU7Ozs7WUFBQyxLQUFLLENBQUMsRUFBRSxDQUNqQixFQUFFLENBQ0EsSUFBSSxjQUFjLENBQUMsZUFBZSxDQUNoQyxXQUFXLEVBQ1gscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQzdCLENBQ0YsRUFDRixDQUNGLENBQUM7UUFDSixDQUFDLEVBQUMsQ0FDSCxFQUNGLENBQ0YsQ0FBQztJQUtDLENBQUM7OztZQWpDTCxVQUFVOzs7O1lBUEYsT0FBTztZQUlQLGdCQUFnQjs7QUFNdkI7SUFEQyxNQUFNLEVBQUU7c0NBQ0ssVUFBVTtvREF5QnRCOzs7SUExQkYsc0NBMEJFOzs7OztJQUdBLGtDQUF5Qjs7Ozs7SUFDekIsMENBQTBDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0LCBvZlR5cGUgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBjYXRjaEVycm9yLCBncm91cEJ5LCBtYXAsIG1lcmdlTWFwLCBzd2l0Y2hNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBtYWtlRXJyb3JTZXJpYWxpemFibGUgfSBmcm9tICcuLi8uLi8uLi91dGlsL3NlcmlhbGl6YXRpb24tdXRpbHMnO1xuaW1wb3J0IHsgUHJvZHVjdENvbm5lY3RvciB9IGZyb20gJy4uLy4uL2Nvbm5lY3RvcnMvcHJvZHVjdC9wcm9kdWN0LmNvbm5lY3Rvcic7XG5pbXBvcnQgeyBQcm9kdWN0QWN0aW9ucyB9IGZyb20gJy4uL2FjdGlvbnMvaW5kZXgnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUHJvZHVjdEVmZmVjdHMge1xuICBARWZmZWN0KClcbiAgbG9hZFByb2R1Y3QkOiBPYnNlcnZhYmxlPFxuICAgIFByb2R1Y3RBY3Rpb25zLkxvYWRQcm9kdWN0U3VjY2VzcyB8IFByb2R1Y3RBY3Rpb25zLkxvYWRQcm9kdWN0RmFpbFxuICA+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShQcm9kdWN0QWN0aW9ucy5MT0FEX1BST0RVQ1QpLFxuICAgIG1hcCgoYWN0aW9uOiBQcm9kdWN0QWN0aW9ucy5Mb2FkUHJvZHVjdCkgPT4gYWN0aW9uLnBheWxvYWQpLFxuICAgIGdyb3VwQnkocHJvZHVjdENvZGUgPT4gcHJvZHVjdENvZGUpLFxuICAgIG1lcmdlTWFwKGdyb3VwID0+XG4gICAgICBncm91cC5waXBlKFxuICAgICAgICBzd2l0Y2hNYXAocHJvZHVjdENvZGUgPT4ge1xuICAgICAgICAgIHJldHVybiB0aGlzLnByb2R1Y3RDb25uZWN0b3IuZ2V0KHByb2R1Y3RDb2RlKS5waXBlKFxuICAgICAgICAgICAgbWFwKHByb2R1Y3QgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb2R1Y3RBY3Rpb25zLkxvYWRQcm9kdWN0U3VjY2Vzcyhwcm9kdWN0KTtcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PlxuICAgICAgICAgICAgICBvZihcbiAgICAgICAgICAgICAgICBuZXcgUHJvZHVjdEFjdGlvbnMuTG9hZFByb2R1Y3RGYWlsKFxuICAgICAgICAgICAgICAgICAgcHJvZHVjdENvZGUsXG4gICAgICAgICAgICAgICAgICBtYWtlRXJyb3JTZXJpYWxpemFibGUoZXJyb3IpXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgKTtcbiAgICAgICAgfSlcbiAgICAgIClcbiAgICApXG4gICk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9ucyxcbiAgICBwcml2YXRlIHByb2R1Y3RDb25uZWN0b3I6IFByb2R1Y3RDb25uZWN0b3JcbiAgKSB7fVxufVxuIl19