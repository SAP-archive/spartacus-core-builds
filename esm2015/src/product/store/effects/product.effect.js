/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, groupBy, map, mergeMap, switchMap } from 'rxjs/operators';
import { makeErrorSerializable } from '../../../util/serialization-utils';
import { ProductConnector } from '../../connectors/product/product.connector';
import * as actions from '../actions/index';
export class ProductEffects {
    /**
     * @param {?} actions$
     * @param {?} productConnector
     */
    constructor(actions$, productConnector) {
        this.actions$ = actions$;
        this.productConnector = productConnector;
        this.loadProduct$ = this.actions$.pipe(ofType(actions.LOAD_PRODUCT), map((/**
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
                return new actions.LoadProductSuccess(product);
            })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            error => of(new actions.LoadProductFail(productCode, makeErrorSerializable(error))))));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC5lZmZlY3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvcHJvZHVjdC9zdG9yZS9lZmZlY3RzL3Byb2R1Y3QuZWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMvRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUMxRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUM5RSxPQUFPLEtBQUssT0FBTyxNQUFNLGtCQUFrQixDQUFDO0FBRzVDLE1BQU0sT0FBTyxjQUFjOzs7OztJQTZCekIsWUFDVSxRQUFpQixFQUNqQixnQkFBa0M7UUFEbEMsYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUNqQixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBN0I1QyxpQkFBWSxHQUVSLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUNwQixNQUFNLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxFQUM1QixHQUFHOzs7O1FBQUMsQ0FBQyxNQUEyQixFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFDLEVBQ3BELE9BQU87Ozs7UUFBQyxXQUFXLENBQUMsRUFBRSxDQUFDLFdBQVcsRUFBQyxFQUNuQyxRQUFROzs7O1FBQUMsS0FBSyxDQUFDLEVBQUUsQ0FDZixLQUFLLENBQUMsSUFBSSxDQUNSLFNBQVM7Ozs7UUFBQyxXQUFXLENBQUMsRUFBRTtZQUN0QixPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUMsSUFBSSxDQUNoRCxHQUFHOzs7O1lBQUMsT0FBTyxDQUFDLEVBQUU7Z0JBQ1osT0FBTyxJQUFJLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNqRCxDQUFDLEVBQUMsRUFDRixVQUFVOzs7O1lBQUMsS0FBSyxDQUFDLEVBQUUsQ0FDakIsRUFBRSxDQUNBLElBQUksT0FBTyxDQUFDLGVBQWUsQ0FDekIsV0FBVyxFQUNYLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUM3QixDQUNGLEVBQ0YsQ0FDRixDQUFDO1FBQ0osQ0FBQyxFQUFDLENBQ0gsRUFDRixDQUNGLENBQUM7SUFLQyxDQUFDOzs7WUFqQ0wsVUFBVTs7OztZQVBGLE9BQU87WUFJUCxnQkFBZ0I7O0FBTXZCO0lBREMsTUFBTSxFQUFFO3NDQUNLLFVBQVU7b0RBeUJ0Qjs7O0lBMUJGLHNDQTBCRTs7Ozs7SUFHQSxrQ0FBeUI7Ozs7O0lBQ3pCLDBDQUEwQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCwgb2ZUeXBlIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgY2F0Y2hFcnJvciwgZ3JvdXBCeSwgbWFwLCBtZXJnZU1hcCwgc3dpdGNoTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgbWFrZUVycm9yU2VyaWFsaXphYmxlIH0gZnJvbSAnLi4vLi4vLi4vdXRpbC9zZXJpYWxpemF0aW9uLXV0aWxzJztcbmltcG9ydCB7IFByb2R1Y3RDb25uZWN0b3IgfSBmcm9tICcuLi8uLi9jb25uZWN0b3JzL3Byb2R1Y3QvcHJvZHVjdC5jb25uZWN0b3InO1xuaW1wb3J0ICogYXMgYWN0aW9ucyBmcm9tICcuLi9hY3Rpb25zL2luZGV4JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFByb2R1Y3RFZmZlY3RzIHtcbiAgQEVmZmVjdCgpXG4gIGxvYWRQcm9kdWN0JDogT2JzZXJ2YWJsZTxcbiAgICBhY3Rpb25zLkxvYWRQcm9kdWN0U3VjY2VzcyB8IGFjdGlvbnMuTG9hZFByb2R1Y3RGYWlsXG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKGFjdGlvbnMuTE9BRF9QUk9EVUNUKSxcbiAgICBtYXAoKGFjdGlvbjogYWN0aW9ucy5Mb2FkUHJvZHVjdCkgPT4gYWN0aW9uLnBheWxvYWQpLFxuICAgIGdyb3VwQnkocHJvZHVjdENvZGUgPT4gcHJvZHVjdENvZGUpLFxuICAgIG1lcmdlTWFwKGdyb3VwID0+XG4gICAgICBncm91cC5waXBlKFxuICAgICAgICBzd2l0Y2hNYXAocHJvZHVjdENvZGUgPT4ge1xuICAgICAgICAgIHJldHVybiB0aGlzLnByb2R1Y3RDb25uZWN0b3IuZ2V0KHByb2R1Y3RDb2RlKS5waXBlKFxuICAgICAgICAgICAgbWFwKHByb2R1Y3QgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gbmV3IGFjdGlvbnMuTG9hZFByb2R1Y3RTdWNjZXNzKHByb2R1Y3QpO1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+XG4gICAgICAgICAgICAgIG9mKFxuICAgICAgICAgICAgICAgIG5ldyBhY3Rpb25zLkxvYWRQcm9kdWN0RmFpbChcbiAgICAgICAgICAgICAgICAgIHByb2R1Y3RDb2RlLFxuICAgICAgICAgICAgICAgICAgbWFrZUVycm9yU2VyaWFsaXphYmxlKGVycm9yKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICk7XG4gICAgICAgIH0pXG4gICAgICApXG4gICAgKVxuICApO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnMsXG4gICAgcHJpdmF0ZSBwcm9kdWN0Q29ubmVjdG9yOiBQcm9kdWN0Q29ubmVjdG9yXG4gICkge31cbn1cbiJdfQ==