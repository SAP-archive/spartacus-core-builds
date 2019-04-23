/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { of, Observable } from 'rxjs';
import { map, catchError, mergeMap, switchMap, groupBy } from 'rxjs/operators';
import * as actions from '../actions/index';
import { ProductConnector } from '../../connectors/product/product.connector';
export class ProductEffects {
    /**
     * @param {?} actions$
     * @param {?} productConnector
     */
    constructor(actions$, productConnector) {
        this.actions$ = actions$;
        this.productConnector = productConnector;
        this.loadProduct$ = this.actions$.pipe(ofType(actions.LOAD_PRODUCT), map((action) => action.payload), groupBy(productCode => productCode), mergeMap(group => group.pipe(switchMap(productCode => {
            return this.productConnector.get(productCode).pipe(map(product => {
                return new actions.LoadProductSuccess(product);
            }), catchError(error => of(new actions.LoadProductFail(productCode, error))));
        }))));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC5lZmZlY3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvcHJvZHVjdC9zdG9yZS9lZmZlY3RzL3Byb2R1Y3QuZWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEQsT0FBTyxFQUFFLEVBQUUsRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLEdBQUcsRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUvRSxPQUFPLEtBQUssT0FBTyxNQUFNLGtCQUFrQixDQUFDO0FBQzVDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBRzlFLE1BQU0sT0FBTyxjQUFjOzs7OztJQXdCekIsWUFDVSxRQUFpQixFQUNqQixnQkFBa0M7UUFEbEMsYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUNqQixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBeEI1QyxpQkFBWSxHQUVSLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUNwQixNQUFNLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxFQUM1QixHQUFHLENBQUMsQ0FBQyxNQUEyQixFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQ3BELE9BQU8sQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxFQUNuQyxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FDZixLQUFLLENBQUMsSUFBSSxDQUNSLFNBQVMsQ0FBQyxXQUFXLENBQUMsRUFBRTtZQUN0QixPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUMsSUFBSSxDQUNoRCxHQUFHLENBQUMsT0FBTyxDQUFDLEVBQUU7Z0JBQ1osT0FBTyxJQUFJLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNqRCxDQUFDLENBQUMsRUFDRixVQUFVLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FDakIsRUFBRSxDQUFDLElBQUksT0FBTyxDQUFDLGVBQWUsQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FDcEQsQ0FDRixDQUFDO1FBQ0osQ0FBQyxDQUFDLENBQ0gsQ0FDRixDQUNGLENBQUM7SUFLQyxDQUFDOzs7WUE1QkwsVUFBVTs7OztZQVBNLE9BQU87WUFLZixnQkFBZ0I7O0FBS3ZCO0lBREMsTUFBTSxFQUFFO3NDQUNLLFVBQVU7b0RBb0J0Qjs7O0lBckJGLHNDQXFCRTs7Ozs7SUFHQSxrQ0FBeUI7Ozs7O0lBQ3pCLDBDQUEwQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRWZmZWN0LCBBY3Rpb25zLCBvZlR5cGUgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcbmltcG9ydCB7IG9mLCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAsIGNhdGNoRXJyb3IsIG1lcmdlTWFwLCBzd2l0Y2hNYXAsIGdyb3VwQnkgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCAqIGFzIGFjdGlvbnMgZnJvbSAnLi4vYWN0aW9ucy9pbmRleCc7XG5pbXBvcnQgeyBQcm9kdWN0Q29ubmVjdG9yIH0gZnJvbSAnLi4vLi4vY29ubmVjdG9ycy9wcm9kdWN0L3Byb2R1Y3QuY29ubmVjdG9yJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFByb2R1Y3RFZmZlY3RzIHtcbiAgQEVmZmVjdCgpXG4gIGxvYWRQcm9kdWN0JDogT2JzZXJ2YWJsZTxcbiAgICBhY3Rpb25zLkxvYWRQcm9kdWN0U3VjY2VzcyB8IGFjdGlvbnMuTG9hZFByb2R1Y3RGYWlsXG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKGFjdGlvbnMuTE9BRF9QUk9EVUNUKSxcbiAgICBtYXAoKGFjdGlvbjogYWN0aW9ucy5Mb2FkUHJvZHVjdCkgPT4gYWN0aW9uLnBheWxvYWQpLFxuICAgIGdyb3VwQnkocHJvZHVjdENvZGUgPT4gcHJvZHVjdENvZGUpLFxuICAgIG1lcmdlTWFwKGdyb3VwID0+XG4gICAgICBncm91cC5waXBlKFxuICAgICAgICBzd2l0Y2hNYXAocHJvZHVjdENvZGUgPT4ge1xuICAgICAgICAgIHJldHVybiB0aGlzLnByb2R1Y3RDb25uZWN0b3IuZ2V0KHByb2R1Y3RDb2RlKS5waXBlKFxuICAgICAgICAgICAgbWFwKHByb2R1Y3QgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gbmV3IGFjdGlvbnMuTG9hZFByb2R1Y3RTdWNjZXNzKHByb2R1Y3QpO1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+XG4gICAgICAgICAgICAgIG9mKG5ldyBhY3Rpb25zLkxvYWRQcm9kdWN0RmFpbChwcm9kdWN0Q29kZSwgZXJyb3IpKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICk7XG4gICAgICAgIH0pXG4gICAgICApXG4gICAgKVxuICApO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnMsXG4gICAgcHJpdmF0ZSBwcm9kdWN0Q29ubmVjdG9yOiBQcm9kdWN0Q29ubmVjdG9yXG4gICkge31cbn1cbiJdfQ==