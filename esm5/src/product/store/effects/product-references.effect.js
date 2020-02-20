import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { ProductReferencesConnector } from '../../connectors/references/product-references.connector';
import { ProductActions } from '../actions/index';
var ProductReferencesEffects = /** @class */ (function () {
    function ProductReferencesEffects(actions$, productReferencesConnector) {
        var _this = this;
        this.actions$ = actions$;
        this.productReferencesConnector = productReferencesConnector;
        this.loadProductReferences$ = this.actions$.pipe(ofType(ProductActions.LOAD_PRODUCT_REFERENCES), map(function (action) { return action.payload; }), mergeMap(function (payload) {
            return _this.productReferencesConnector
                .get(payload.productCode, payload.referenceType, payload.pageSize)
                .pipe(map(function (data) {
                return new ProductActions.LoadProductReferencesSuccess({
                    productCode: payload.productCode,
                    list: data,
                });
            }), catchError(function (_error) {
                return of(new ProductActions.LoadProductReferencesFail({
                    message: payload.productCode,
                }));
            }));
        }));
    }
    ProductReferencesEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: ProductReferencesConnector }
    ]; };
    __decorate([
        Effect()
    ], ProductReferencesEffects.prototype, "loadProductReferences$", void 0);
    ProductReferencesEffects = __decorate([
        Injectable()
    ], ProductReferencesEffects);
    return ProductReferencesEffects;
}());
export { ProductReferencesEffects };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1yZWZlcmVuY2VzLmVmZmVjdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9wcm9kdWN0L3N0b3JlL2VmZmVjdHMvcHJvZHVjdC1yZWZlcmVuY2VzLmVmZmVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEQsT0FBTyxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsVUFBVSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzRCxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSwwREFBMEQsQ0FBQztBQUN0RyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFHbEQ7SUE2QkUsa0NBQ1UsUUFBaUIsRUFDakIsMEJBQXNEO1FBRmhFLGlCQUdJO1FBRk0sYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUNqQiwrQkFBMEIsR0FBMUIsMEJBQTBCLENBQTRCO1FBN0JoRSwyQkFBc0IsR0FHbEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ3BCLE1BQU0sQ0FBQyxjQUFjLENBQUMsdUJBQXVCLENBQUMsRUFDOUMsR0FBRyxDQUFDLFVBQUMsTUFBNEMsSUFBSyxPQUFBLE1BQU0sQ0FBQyxPQUFPLEVBQWQsQ0FBYyxDQUFDLEVBQ3JFLFFBQVEsQ0FBQyxVQUFBLE9BQU87WUFDZCxPQUFPLEtBQUksQ0FBQywwQkFBMEI7aUJBQ25DLEdBQUcsQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLE9BQU8sQ0FBQyxhQUFhLEVBQUUsT0FBTyxDQUFDLFFBQVEsQ0FBQztpQkFDakUsSUFBSSxDQUNILEdBQUcsQ0FBQyxVQUFBLElBQUk7Z0JBQ04sT0FBTyxJQUFJLGNBQWMsQ0FBQyw0QkFBNEIsQ0FBQztvQkFDckQsV0FBVyxFQUFFLE9BQU8sQ0FBQyxXQUFXO29CQUNoQyxJQUFJLEVBQUUsSUFBSTtpQkFDWCxDQUFDLENBQUM7WUFDTCxDQUFDLENBQUMsRUFDRixVQUFVLENBQUMsVUFBQSxNQUFNO2dCQUNmLE9BQUEsRUFBRSxDQUNBLElBQUksY0FBYyxDQUFDLHlCQUF5QixDQUFDO29CQUMzQyxPQUFPLEVBQUUsT0FBTyxDQUFDLFdBQVc7aUJBQ2YsQ0FBQyxDQUNqQjtZQUpELENBSUMsQ0FDRixDQUNGLENBQUM7UUFDTixDQUFDLENBQUMsQ0FDSCxDQUFDO0lBS0MsQ0FBQzs7Z0JBRmdCLE9BQU87Z0JBQ1csMEJBQTBCOztJQTdCaEU7UUFEQyxNQUFNLEVBQUU7NEVBMEJQO0lBM0JTLHdCQUF3QjtRQURwQyxVQUFVLEVBQUU7T0FDQSx3QkFBd0IsQ0FpQ3BDO0lBQUQsK0JBQUM7Q0FBQSxBQWpDRCxJQWlDQztTQWpDWSx3QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QsIG9mVHlwZSB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGNhdGNoRXJyb3IsIG1hcCwgbWVyZ2VNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBFcnJvck1vZGVsIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvbWlzYy5tb2RlbCc7XG5pbXBvcnQgeyBQcm9kdWN0UmVmZXJlbmNlc0Nvbm5lY3RvciB9IGZyb20gJy4uLy4uL2Nvbm5lY3RvcnMvcmVmZXJlbmNlcy9wcm9kdWN0LXJlZmVyZW5jZXMuY29ubmVjdG9yJztcbmltcG9ydCB7IFByb2R1Y3RBY3Rpb25zIH0gZnJvbSAnLi4vYWN0aW9ucy9pbmRleCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBQcm9kdWN0UmVmZXJlbmNlc0VmZmVjdHMge1xuICBARWZmZWN0KClcbiAgbG9hZFByb2R1Y3RSZWZlcmVuY2VzJDogT2JzZXJ2YWJsZTxcbiAgICB8IFByb2R1Y3RBY3Rpb25zLkxvYWRQcm9kdWN0UmVmZXJlbmNlc1N1Y2Nlc3NcbiAgICB8IFByb2R1Y3RBY3Rpb25zLkxvYWRQcm9kdWN0UmVmZXJlbmNlc0ZhaWxcbiAgPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoUHJvZHVjdEFjdGlvbnMuTE9BRF9QUk9EVUNUX1JFRkVSRU5DRVMpLFxuICAgIG1hcCgoYWN0aW9uOiBQcm9kdWN0QWN0aW9ucy5Mb2FkUHJvZHVjdFJlZmVyZW5jZXMpID0+IGFjdGlvbi5wYXlsb2FkKSxcbiAgICBtZXJnZU1hcChwYXlsb2FkID0+IHtcbiAgICAgIHJldHVybiB0aGlzLnByb2R1Y3RSZWZlcmVuY2VzQ29ubmVjdG9yXG4gICAgICAgIC5nZXQocGF5bG9hZC5wcm9kdWN0Q29kZSwgcGF5bG9hZC5yZWZlcmVuY2VUeXBlLCBwYXlsb2FkLnBhZ2VTaXplKVxuICAgICAgICAucGlwZShcbiAgICAgICAgICBtYXAoZGF0YSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb2R1Y3RBY3Rpb25zLkxvYWRQcm9kdWN0UmVmZXJlbmNlc1N1Y2Nlc3Moe1xuICAgICAgICAgICAgICBwcm9kdWN0Q29kZTogcGF5bG9hZC5wcm9kdWN0Q29kZSxcbiAgICAgICAgICAgICAgbGlzdDogZGF0YSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGNhdGNoRXJyb3IoX2Vycm9yID0+XG4gICAgICAgICAgICBvZihcbiAgICAgICAgICAgICAgbmV3IFByb2R1Y3RBY3Rpb25zLkxvYWRQcm9kdWN0UmVmZXJlbmNlc0ZhaWwoe1xuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IHBheWxvYWQucHJvZHVjdENvZGUsXG4gICAgICAgICAgICAgIH0gYXMgRXJyb3JNb2RlbClcbiAgICAgICAgICAgIClcbiAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgfSlcbiAgKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zLFxuICAgIHByaXZhdGUgcHJvZHVjdFJlZmVyZW5jZXNDb25uZWN0b3I6IFByb2R1Y3RSZWZlcmVuY2VzQ29ubmVjdG9yXG4gICkge31cbn1cbiJdfQ==