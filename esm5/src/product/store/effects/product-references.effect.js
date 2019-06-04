/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { ProductReferencesConnector } from '../../connectors/references/product-references.connector';
import * as productReferencesActions from './../actions/product-references.action';
var ProductReferencesEffects = /** @class */ (function () {
    function ProductReferencesEffects(actions$, productReferencesConnector) {
        var _this = this;
        this.actions$ = actions$;
        this.productReferencesConnector = productReferencesConnector;
        this.loadProductReferences$ = this.actions$.pipe(ofType(productReferencesActions.LOAD_PRODUCT_REFERENCES), map((/**
         * @param {?} action
         * @return {?}
         */
        function (action) { return action.payload; })), mergeMap((/**
         * @param {?} payload
         * @return {?}
         */
        function (payload) {
            return _this.productReferencesConnector
                .get(payload.productCode, payload.referenceType, payload.pageSize)
                .pipe(map((/**
             * @param {?} data
             * @return {?}
             */
            function (data) {
                return new productReferencesActions.LoadProductReferencesSuccess({
                    productCode: payload.productCode,
                    list: data,
                });
            })), catchError((/**
             * @param {?} _error
             * @return {?}
             */
            function (_error) {
                return of(new productReferencesActions.LoadProductReferencesFail((/** @type {?} */ ({
                    message: payload.productCode,
                }))));
            })));
        })));
    }
    ProductReferencesEffects.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    ProductReferencesEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: ProductReferencesConnector }
    ]; };
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Observable)
    ], ProductReferencesEffects.prototype, "loadProductReferences$", void 0);
    return ProductReferencesEffects;
}());
export { ProductReferencesEffects };
if (false) {
    /** @type {?} */
    ProductReferencesEffects.prototype.loadProductReferences$;
    /**
     * @type {?}
     * @private
     */
    ProductReferencesEffects.prototype.actions$;
    /**
     * @type {?}
     * @private
     */
    ProductReferencesEffects.prototype.productReferencesConnector;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1yZWZlcmVuY2VzLmVmZmVjdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9wcm9kdWN0L3N0b3JlL2VmZmVjdHMvcHJvZHVjdC1yZWZlcmVuY2VzLmVmZmVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hELE9BQU8sRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTNELE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDBEQUEwRCxDQUFDO0FBQ3RHLE9BQU8sS0FBSyx3QkFBd0IsTUFBTSx3Q0FBd0MsQ0FBQztBQUVuRjtJQWdDRSxrQ0FDVSxRQUFpQixFQUNqQiwwQkFBc0Q7UUFGaEUsaUJBR0k7UUFGTSxhQUFRLEdBQVIsUUFBUSxDQUFTO1FBQ2pCLCtCQUEwQixHQUExQiwwQkFBMEIsQ0FBNEI7UUEvQmhFLDJCQUFzQixHQUdsQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDcEIsTUFBTSxDQUFDLHdCQUF3QixDQUFDLHVCQUF1QixDQUFDLEVBQ3hELEdBQUc7Ozs7UUFDRCxVQUFDLE1BQXNELElBQUssT0FBQSxNQUFNLENBQUMsT0FBTyxFQUFkLENBQWMsRUFDM0UsRUFDRCxRQUFROzs7O1FBQUMsVUFBQSxPQUFPO1lBQ2QsT0FBTyxLQUFJLENBQUMsMEJBQTBCO2lCQUNuQyxHQUFHLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxPQUFPLENBQUMsYUFBYSxFQUFFLE9BQU8sQ0FBQyxRQUFRLENBQUM7aUJBQ2pFLElBQUksQ0FDSCxHQUFHOzs7O1lBQUMsVUFBQSxJQUFJO2dCQUNOLE9BQU8sSUFBSSx3QkFBd0IsQ0FBQyw0QkFBNEIsQ0FBQztvQkFDL0QsV0FBVyxFQUFFLE9BQU8sQ0FBQyxXQUFXO29CQUNoQyxJQUFJLEVBQUUsSUFBSTtpQkFDWCxDQUFDLENBQUM7WUFDTCxDQUFDLEVBQUMsRUFDRixVQUFVOzs7O1lBQUMsVUFBQSxNQUFNO2dCQUNmLE9BQUEsRUFBRSxDQUNBLElBQUksd0JBQXdCLENBQUMseUJBQXlCLENBQUMsbUJBQUE7b0JBQ3JELE9BQU8sRUFBRSxPQUFPLENBQUMsV0FBVztpQkFDN0IsRUFBYyxDQUFDLENBQ2pCO1lBSkQsQ0FJQyxFQUNGLENBQ0YsQ0FBQztRQUNOLENBQUMsRUFBQyxDQUNILENBQUM7SUFLQyxDQUFDOztnQkFuQ0wsVUFBVTs7OztnQkFQRixPQUFPO2dCQUlQLDBCQUEwQjs7SUFNakM7UUFEQyxNQUFNLEVBQUU7MENBQ2UsVUFBVTs0RUEyQmhDO0lBTUosK0JBQUM7Q0FBQSxBQXBDRCxJQW9DQztTQW5DWSx3QkFBd0I7OztJQUNuQywwREE0QkU7Ozs7O0lBR0EsNENBQXlCOzs7OztJQUN6Qiw4REFBOEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QsIG9mVHlwZSB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGNhdGNoRXJyb3IsIG1hcCwgbWVyZ2VNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBFcnJvck1vZGVsIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvbWlzYy5tb2RlbCc7XG5pbXBvcnQgeyBQcm9kdWN0UmVmZXJlbmNlc0Nvbm5lY3RvciB9IGZyb20gJy4uLy4uL2Nvbm5lY3RvcnMvcmVmZXJlbmNlcy9wcm9kdWN0LXJlZmVyZW5jZXMuY29ubmVjdG9yJztcbmltcG9ydCAqIGFzIHByb2R1Y3RSZWZlcmVuY2VzQWN0aW9ucyBmcm9tICcuLy4uL2FjdGlvbnMvcHJvZHVjdC1yZWZlcmVuY2VzLmFjdGlvbic7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBQcm9kdWN0UmVmZXJlbmNlc0VmZmVjdHMge1xuICBARWZmZWN0KClcbiAgbG9hZFByb2R1Y3RSZWZlcmVuY2VzJDogT2JzZXJ2YWJsZTxcbiAgICB8IHByb2R1Y3RSZWZlcmVuY2VzQWN0aW9ucy5Mb2FkUHJvZHVjdFJlZmVyZW5jZXNTdWNjZXNzXG4gICAgfCBwcm9kdWN0UmVmZXJlbmNlc0FjdGlvbnMuTG9hZFByb2R1Y3RSZWZlcmVuY2VzRmFpbFxuICA+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShwcm9kdWN0UmVmZXJlbmNlc0FjdGlvbnMuTE9BRF9QUk9EVUNUX1JFRkVSRU5DRVMpLFxuICAgIG1hcChcbiAgICAgIChhY3Rpb246IHByb2R1Y3RSZWZlcmVuY2VzQWN0aW9ucy5Mb2FkUHJvZHVjdFJlZmVyZW5jZXMpID0+IGFjdGlvbi5wYXlsb2FkXG4gICAgKSxcbiAgICBtZXJnZU1hcChwYXlsb2FkID0+IHtcbiAgICAgIHJldHVybiB0aGlzLnByb2R1Y3RSZWZlcmVuY2VzQ29ubmVjdG9yXG4gICAgICAgIC5nZXQocGF5bG9hZC5wcm9kdWN0Q29kZSwgcGF5bG9hZC5yZWZlcmVuY2VUeXBlLCBwYXlsb2FkLnBhZ2VTaXplKVxuICAgICAgICAucGlwZShcbiAgICAgICAgICBtYXAoZGF0YSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IHByb2R1Y3RSZWZlcmVuY2VzQWN0aW9ucy5Mb2FkUHJvZHVjdFJlZmVyZW5jZXNTdWNjZXNzKHtcbiAgICAgICAgICAgICAgcHJvZHVjdENvZGU6IHBheWxvYWQucHJvZHVjdENvZGUsXG4gICAgICAgICAgICAgIGxpc3Q6IGRhdGEsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBjYXRjaEVycm9yKF9lcnJvciA9PlxuICAgICAgICAgICAgb2YoXG4gICAgICAgICAgICAgIG5ldyBwcm9kdWN0UmVmZXJlbmNlc0FjdGlvbnMuTG9hZFByb2R1Y3RSZWZlcmVuY2VzRmFpbCh7XG4gICAgICAgICAgICAgICAgbWVzc2FnZTogcGF5bG9hZC5wcm9kdWN0Q29kZSxcbiAgICAgICAgICAgICAgfSBhcyBFcnJvck1vZGVsKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICB9KVxuICApO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnMsXG4gICAgcHJpdmF0ZSBwcm9kdWN0UmVmZXJlbmNlc0Nvbm5lY3RvcjogUHJvZHVjdFJlZmVyZW5jZXNDb25uZWN0b3JcbiAgKSB7fVxufVxuIl19