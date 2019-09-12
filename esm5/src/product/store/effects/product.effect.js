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
var ProductEffects = /** @class */ (function () {
    function ProductEffects(actions$, productConnector) {
        var _this = this;
        this.actions$ = actions$;
        this.productConnector = productConnector;
        this.loadProduct$ = this.actions$.pipe(ofType(ProductActions.LOAD_PRODUCT), map((/**
         * @param {?} action
         * @return {?}
         */
        function (action) { return action.payload; })), groupBy((/**
         * @param {?} productCode
         * @return {?}
         */
        function (productCode) { return productCode; })), mergeMap((/**
         * @param {?} group
         * @return {?}
         */
        function (group) {
            return group.pipe(switchMap((/**
             * @param {?} productCode
             * @return {?}
             */
            function (productCode) {
                return _this.productConnector.get(productCode).pipe(map((/**
                 * @param {?} product
                 * @return {?}
                 */
                function (product) {
                    return new ProductActions.LoadProductSuccess(product);
                })), catchError((/**
                 * @param {?} error
                 * @return {?}
                 */
                function (error) {
                    return of(new ProductActions.LoadProductFail(productCode, makeErrorSerializable(error)));
                })));
            })));
        })));
    }
    ProductEffects.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    ProductEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: ProductConnector }
    ]; };
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Observable)
    ], ProductEffects.prototype, "loadProduct$", void 0);
    return ProductEffects;
}());
export { ProductEffects };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC5lZmZlY3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvcHJvZHVjdC9zdG9yZS9lZmZlY3RzL3Byb2R1Y3QuZWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMvRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUMxRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUM5RSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFFbEQ7SUE4QkUsd0JBQ1UsUUFBaUIsRUFDakIsZ0JBQWtDO1FBRjVDLGlCQUdJO1FBRk0sYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUNqQixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBN0I1QyxpQkFBWSxHQUVSLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUNwQixNQUFNLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxFQUNuQyxHQUFHOzs7O1FBQUMsVUFBQyxNQUFrQyxJQUFLLE9BQUEsTUFBTSxDQUFDLE9BQU8sRUFBZCxDQUFjLEVBQUMsRUFDM0QsT0FBTzs7OztRQUFDLFVBQUEsV0FBVyxJQUFJLE9BQUEsV0FBVyxFQUFYLENBQVcsRUFBQyxFQUNuQyxRQUFROzs7O1FBQUMsVUFBQSxLQUFLO1lBQ1osT0FBQSxLQUFLLENBQUMsSUFBSSxDQUNSLFNBQVM7Ozs7WUFBQyxVQUFBLFdBQVc7Z0JBQ25CLE9BQU8sS0FBSSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQ2hELEdBQUc7Ozs7Z0JBQUMsVUFBQSxPQUFPO29CQUNULE9BQU8sSUFBSSxjQUFjLENBQUMsa0JBQWtCLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ3hELENBQUMsRUFBQyxFQUNGLFVBQVU7Ozs7Z0JBQUMsVUFBQSxLQUFLO29CQUNkLE9BQUEsRUFBRSxDQUNBLElBQUksY0FBYyxDQUFDLGVBQWUsQ0FDaEMsV0FBVyxFQUNYLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUM3QixDQUNGO2dCQUxELENBS0MsRUFDRixDQUNGLENBQUM7WUFDSixDQUFDLEVBQUMsQ0FDSDtRQWhCRCxDQWdCQyxFQUNGLENBQ0YsQ0FBQztJQUtDLENBQUM7O2dCQWpDTCxVQUFVOzs7O2dCQVBGLE9BQU87Z0JBSVAsZ0JBQWdCOztJQU12QjtRQURDLE1BQU0sRUFBRTswQ0FDSyxVQUFVO3dEQXlCdEI7SUFNSixxQkFBQztDQUFBLEFBbENELElBa0NDO1NBakNZLGNBQWM7OztJQUN6QixzQ0EwQkU7Ozs7O0lBR0Esa0NBQXlCOzs7OztJQUN6QiwwQ0FBMEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QsIG9mVHlwZSB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGNhdGNoRXJyb3IsIGdyb3VwQnksIG1hcCwgbWVyZ2VNYXAsIHN3aXRjaE1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IG1ha2VFcnJvclNlcmlhbGl6YWJsZSB9IGZyb20gJy4uLy4uLy4uL3V0aWwvc2VyaWFsaXphdGlvbi11dGlscyc7XG5pbXBvcnQgeyBQcm9kdWN0Q29ubmVjdG9yIH0gZnJvbSAnLi4vLi4vY29ubmVjdG9ycy9wcm9kdWN0L3Byb2R1Y3QuY29ubmVjdG9yJztcbmltcG9ydCB7IFByb2R1Y3RBY3Rpb25zIH0gZnJvbSAnLi4vYWN0aW9ucy9pbmRleCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBQcm9kdWN0RWZmZWN0cyB7XG4gIEBFZmZlY3QoKVxuICBsb2FkUHJvZHVjdCQ6IE9ic2VydmFibGU8XG4gICAgUHJvZHVjdEFjdGlvbnMuTG9hZFByb2R1Y3RTdWNjZXNzIHwgUHJvZHVjdEFjdGlvbnMuTG9hZFByb2R1Y3RGYWlsXG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKFByb2R1Y3RBY3Rpb25zLkxPQURfUFJPRFVDVCksXG4gICAgbWFwKChhY3Rpb246IFByb2R1Y3RBY3Rpb25zLkxvYWRQcm9kdWN0KSA9PiBhY3Rpb24ucGF5bG9hZCksXG4gICAgZ3JvdXBCeShwcm9kdWN0Q29kZSA9PiBwcm9kdWN0Q29kZSksXG4gICAgbWVyZ2VNYXAoZ3JvdXAgPT5cbiAgICAgIGdyb3VwLnBpcGUoXG4gICAgICAgIHN3aXRjaE1hcChwcm9kdWN0Q29kZSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMucHJvZHVjdENvbm5lY3Rvci5nZXQocHJvZHVjdENvZGUpLnBpcGUoXG4gICAgICAgICAgICBtYXAocHJvZHVjdCA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiBuZXcgUHJvZHVjdEFjdGlvbnMuTG9hZFByb2R1Y3RTdWNjZXNzKHByb2R1Y3QpO1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+XG4gICAgICAgICAgICAgIG9mKFxuICAgICAgICAgICAgICAgIG5ldyBQcm9kdWN0QWN0aW9ucy5Mb2FkUHJvZHVjdEZhaWwoXG4gICAgICAgICAgICAgICAgICBwcm9kdWN0Q29kZSxcbiAgICAgICAgICAgICAgICAgIG1ha2VFcnJvclNlcmlhbGl6YWJsZShlcnJvcilcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgICApO1xuICAgICAgICB9KVxuICAgICAgKVxuICAgIClcbiAgKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zLFxuICAgIHByaXZhdGUgcHJvZHVjdENvbm5lY3RvcjogUHJvZHVjdENvbm5lY3RvclxuICApIHt9XG59XG4iXX0=