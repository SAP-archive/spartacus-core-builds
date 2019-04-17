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
import * as converters from '../converters/index';
import { ProductLoaderService } from '../../occ/product.service';
var ProductEffects = /** @class */ (function () {
    function ProductEffects(actions$, occProductService, productImageConverter, productReferenceConverterService) {
        var _this = this;
        this.actions$ = actions$;
        this.occProductService = occProductService;
        this.productImageConverter = productImageConverter;
        this.productReferenceConverterService = productReferenceConverterService;
        this.loadProduct$ = this.actions$.pipe(ofType(actions.LOAD_PRODUCT), map(function (action) { return action.payload; }), groupBy(function (productCode) { return productCode; }), mergeMap(function (group) {
            return group.pipe(switchMap(function (productCode) {
                return _this.occProductService.load(productCode).pipe(map(function (product) {
                    _this.productImageConverter.convertProduct(product);
                    _this.productReferenceConverterService.convertProduct(product);
                    return new actions.LoadProductSuccess(product);
                }), catchError(function (error) {
                    return of(new actions.LoadProductFail(productCode, error));
                }));
            }));
        }));
    }
    ProductEffects.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    ProductEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: ProductLoaderService },
        { type: converters.ProductImageConverterService },
        { type: converters.ProductReferenceConverterService }
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
    ProductEffects.prototype.occProductService;
    /**
     * @type {?}
     * @private
     */
    ProductEffects.prototype.productImageConverter;
    /**
     * @type {?}
     * @private
     */
    ProductEffects.prototype.productReferenceConverterService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC5lZmZlY3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvcHJvZHVjdC9zdG9yZS9lZmZlY3RzL3Byb2R1Y3QuZWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEQsT0FBTyxFQUFFLEVBQUUsRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLEdBQUcsRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUvRSxPQUFPLEtBQUssT0FBTyxNQUFNLGtCQUFrQixDQUFDO0FBQzVDLE9BQU8sS0FBSyxVQUFVLE1BQU0scUJBQXFCLENBQUM7QUFDbEQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFFakU7SUEyQkUsd0JBQ1UsUUFBaUIsRUFDakIsaUJBQXVDLEVBQ3ZDLHFCQUE4RCxFQUM5RCxnQ0FBNkU7UUFKdkYsaUJBS0k7UUFKTSxhQUFRLEdBQVIsUUFBUSxDQUFTO1FBQ2pCLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBc0I7UUFDdkMsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUF5QztRQUM5RCxxQ0FBZ0MsR0FBaEMsZ0NBQWdDLENBQTZDO1FBNUJ2RixpQkFBWSxHQUVSLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUNwQixNQUFNLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxFQUM1QixHQUFHLENBQUMsVUFBQyxNQUEyQixJQUFLLE9BQUEsTUFBTSxDQUFDLE9BQU8sRUFBZCxDQUFjLENBQUMsRUFDcEQsT0FBTyxDQUFDLFVBQUEsV0FBVyxJQUFJLE9BQUEsV0FBVyxFQUFYLENBQVcsQ0FBQyxFQUNuQyxRQUFRLENBQUMsVUFBQSxLQUFLO1lBQ1osT0FBQSxLQUFLLENBQUMsSUFBSSxDQUNSLFNBQVMsQ0FBQyxVQUFBLFdBQVc7Z0JBQ25CLE9BQU8sS0FBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQ2xELEdBQUcsQ0FBQyxVQUFBLE9BQU87b0JBQ1QsS0FBSSxDQUFDLHFCQUFxQixDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDbkQsS0FBSSxDQUFDLGdDQUFnQyxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDOUQsT0FBTyxJQUFJLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDakQsQ0FBQyxDQUFDLEVBQ0YsVUFBVSxDQUFDLFVBQUEsS0FBSztvQkFDZCxPQUFBLEVBQUUsQ0FBQyxJQUFJLE9BQU8sQ0FBQyxlQUFlLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxDQUFDO2dCQUFuRCxDQUFtRCxDQUNwRCxDQUNGLENBQUM7WUFDSixDQUFDLENBQUMsQ0FDSDtRQWJELENBYUMsQ0FDRixDQUNGLENBQUM7SUFPQyxDQUFDOztnQkFoQ0wsVUFBVTs7OztnQkFSTSxPQUFPO2dCQU1mLG9CQUFvQjtnQkFnQ00sVUFBVSxDQUFDLDRCQUE0QjtnQkFDNUIsVUFBVSxDQUFDLGdDQUFnQzs7SUE1QnZGO1FBREMsTUFBTSxFQUFFOzBDQUNLLFVBQVU7d0RBc0J0QjtJQVFKLHFCQUFDO0NBQUEsQUFqQ0QsSUFpQ0M7U0FoQ1ksY0FBYzs7O0lBQ3pCLHNDQXVCRTs7Ozs7SUFHQSxrQ0FBeUI7Ozs7O0lBQ3pCLDJDQUErQzs7Ozs7SUFDL0MsK0NBQXNFOzs7OztJQUN0RSwwREFBcUYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEVmZmVjdCwgQWN0aW9ucywgb2ZUeXBlIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5pbXBvcnQgeyBvZiwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCBjYXRjaEVycm9yLCBtZXJnZU1hcCwgc3dpdGNoTWFwLCBncm91cEJ5IH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgKiBhcyBhY3Rpb25zIGZyb20gJy4uL2FjdGlvbnMvaW5kZXgnO1xuaW1wb3J0ICogYXMgY29udmVydGVycyBmcm9tICcuLi9jb252ZXJ0ZXJzL2luZGV4JztcbmltcG9ydCB7IFByb2R1Y3RMb2FkZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vb2NjL3Byb2R1Y3Quc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBQcm9kdWN0RWZmZWN0cyB7XG4gIEBFZmZlY3QoKVxuICBsb2FkUHJvZHVjdCQ6IE9ic2VydmFibGU8XG4gICAgYWN0aW9ucy5Mb2FkUHJvZHVjdFN1Y2Nlc3MgfCBhY3Rpb25zLkxvYWRQcm9kdWN0RmFpbFxuICA+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShhY3Rpb25zLkxPQURfUFJPRFVDVCksXG4gICAgbWFwKChhY3Rpb246IGFjdGlvbnMuTG9hZFByb2R1Y3QpID0+IGFjdGlvbi5wYXlsb2FkKSxcbiAgICBncm91cEJ5KHByb2R1Y3RDb2RlID0+IHByb2R1Y3RDb2RlKSxcbiAgICBtZXJnZU1hcChncm91cCA9PlxuICAgICAgZ3JvdXAucGlwZShcbiAgICAgICAgc3dpdGNoTWFwKHByb2R1Y3RDb2RlID0+IHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5vY2NQcm9kdWN0U2VydmljZS5sb2FkKHByb2R1Y3RDb2RlKS5waXBlKFxuICAgICAgICAgICAgbWFwKHByb2R1Y3QgPT4ge1xuICAgICAgICAgICAgICB0aGlzLnByb2R1Y3RJbWFnZUNvbnZlcnRlci5jb252ZXJ0UHJvZHVjdChwcm9kdWN0KTtcbiAgICAgICAgICAgICAgdGhpcy5wcm9kdWN0UmVmZXJlbmNlQ29udmVydGVyU2VydmljZS5jb252ZXJ0UHJvZHVjdChwcm9kdWN0KTtcbiAgICAgICAgICAgICAgcmV0dXJuIG5ldyBhY3Rpb25zLkxvYWRQcm9kdWN0U3VjY2Vzcyhwcm9kdWN0KTtcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PlxuICAgICAgICAgICAgICBvZihuZXcgYWN0aW9ucy5Mb2FkUHJvZHVjdEZhaWwocHJvZHVjdENvZGUsIGVycm9yKSlcbiAgICAgICAgICAgIClcbiAgICAgICAgICApO1xuICAgICAgICB9KVxuICAgICAgKVxuICAgIClcbiAgKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zLFxuICAgIHByaXZhdGUgb2NjUHJvZHVjdFNlcnZpY2U6IFByb2R1Y3RMb2FkZXJTZXJ2aWNlLFxuICAgIHByaXZhdGUgcHJvZHVjdEltYWdlQ29udmVydGVyOiBjb252ZXJ0ZXJzLlByb2R1Y3RJbWFnZUNvbnZlcnRlclNlcnZpY2UsXG4gICAgcHJpdmF0ZSBwcm9kdWN0UmVmZXJlbmNlQ29udmVydGVyU2VydmljZTogY29udmVydGVycy5Qcm9kdWN0UmVmZXJlbmNlQ29udmVydGVyU2VydmljZVxuICApIHt9XG59XG4iXX0=