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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1yZWZlcmVuY2VzLmVmZmVjdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9wcm9kdWN0L3N0b3JlL2VmZmVjdHMvcHJvZHVjdC1yZWZlcmVuY2VzLmVmZmVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEQsT0FBTyxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsVUFBVSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzRCxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSwwREFBMEQsQ0FBQztBQUN0RyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFHbEQ7SUE2QkUsa0NBQ1UsUUFBaUIsRUFDakIsMEJBQXNEO1FBRmhFLGlCQUdJO1FBRk0sYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUNqQiwrQkFBMEIsR0FBMUIsMEJBQTBCLENBQTRCO1FBN0JoRSwyQkFBc0IsR0FHbEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ3BCLE1BQU0sQ0FBQyxjQUFjLENBQUMsdUJBQXVCLENBQUMsRUFDOUMsR0FBRyxDQUFDLFVBQUMsTUFBNEMsSUFBSyxPQUFBLE1BQU0sQ0FBQyxPQUFPLEVBQWQsQ0FBYyxDQUFDLEVBQ3JFLFFBQVEsQ0FBQyxVQUFDLE9BQU87WUFDZixPQUFPLEtBQUksQ0FBQywwQkFBMEI7aUJBQ25DLEdBQUcsQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLE9BQU8sQ0FBQyxhQUFhLEVBQUUsT0FBTyxDQUFDLFFBQVEsQ0FBQztpQkFDakUsSUFBSSxDQUNILEdBQUcsQ0FBQyxVQUFDLElBQUk7Z0JBQ1AsT0FBTyxJQUFJLGNBQWMsQ0FBQyw0QkFBNEIsQ0FBQztvQkFDckQsV0FBVyxFQUFFLE9BQU8sQ0FBQyxXQUFXO29CQUNoQyxJQUFJLEVBQUUsSUFBSTtpQkFDWCxDQUFDLENBQUM7WUFDTCxDQUFDLENBQUMsRUFDRixVQUFVLENBQUMsVUFBQyxNQUFNO2dCQUNoQixPQUFBLEVBQUUsQ0FDQSxJQUFJLGNBQWMsQ0FBQyx5QkFBeUIsQ0FBQztvQkFDM0MsT0FBTyxFQUFFLE9BQU8sQ0FBQyxXQUFXO2lCQUNmLENBQUMsQ0FDakI7WUFKRCxDQUlDLENBQ0YsQ0FDRixDQUFDO1FBQ04sQ0FBQyxDQUFDLENBQ0gsQ0FBQztJQUtDLENBQUM7O2dCQUZnQixPQUFPO2dCQUNXLDBCQUEwQjs7SUE3QmhFO1FBREMsTUFBTSxFQUFFOzRFQTBCUDtJQTNCUyx3QkFBd0I7UUFEcEMsVUFBVSxFQUFFO09BQ0Esd0JBQXdCLENBaUNwQztJQUFELCtCQUFDO0NBQUEsQUFqQ0QsSUFpQ0M7U0FqQ1ksd0JBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0LCBvZlR5cGUgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBjYXRjaEVycm9yLCBtYXAsIG1lcmdlTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgRXJyb3JNb2RlbCB9IGZyb20gJy4uLy4uLy4uL21vZGVsL21pc2MubW9kZWwnO1xuaW1wb3J0IHsgUHJvZHVjdFJlZmVyZW5jZXNDb25uZWN0b3IgfSBmcm9tICcuLi8uLi9jb25uZWN0b3JzL3JlZmVyZW5jZXMvcHJvZHVjdC1yZWZlcmVuY2VzLmNvbm5lY3Rvcic7XG5pbXBvcnQgeyBQcm9kdWN0QWN0aW9ucyB9IGZyb20gJy4uL2FjdGlvbnMvaW5kZXgnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUHJvZHVjdFJlZmVyZW5jZXNFZmZlY3RzIHtcbiAgQEVmZmVjdCgpXG4gIGxvYWRQcm9kdWN0UmVmZXJlbmNlcyQ6IE9ic2VydmFibGU8XG4gICAgfCBQcm9kdWN0QWN0aW9ucy5Mb2FkUHJvZHVjdFJlZmVyZW5jZXNTdWNjZXNzXG4gICAgfCBQcm9kdWN0QWN0aW9ucy5Mb2FkUHJvZHVjdFJlZmVyZW5jZXNGYWlsXG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKFByb2R1Y3RBY3Rpb25zLkxPQURfUFJPRFVDVF9SRUZFUkVOQ0VTKSxcbiAgICBtYXAoKGFjdGlvbjogUHJvZHVjdEFjdGlvbnMuTG9hZFByb2R1Y3RSZWZlcmVuY2VzKSA9PiBhY3Rpb24ucGF5bG9hZCksXG4gICAgbWVyZ2VNYXAoKHBheWxvYWQpID0+IHtcbiAgICAgIHJldHVybiB0aGlzLnByb2R1Y3RSZWZlcmVuY2VzQ29ubmVjdG9yXG4gICAgICAgIC5nZXQocGF5bG9hZC5wcm9kdWN0Q29kZSwgcGF5bG9hZC5yZWZlcmVuY2VUeXBlLCBwYXlsb2FkLnBhZ2VTaXplKVxuICAgICAgICAucGlwZShcbiAgICAgICAgICBtYXAoKGRhdGEpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvZHVjdEFjdGlvbnMuTG9hZFByb2R1Y3RSZWZlcmVuY2VzU3VjY2Vzcyh7XG4gICAgICAgICAgICAgIHByb2R1Y3RDb2RlOiBwYXlsb2FkLnByb2R1Y3RDb2RlLFxuICAgICAgICAgICAgICBsaXN0OiBkYXRhLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgY2F0Y2hFcnJvcigoX2Vycm9yKSA9PlxuICAgICAgICAgICAgb2YoXG4gICAgICAgICAgICAgIG5ldyBQcm9kdWN0QWN0aW9ucy5Mb2FkUHJvZHVjdFJlZmVyZW5jZXNGYWlsKHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBwYXlsb2FkLnByb2R1Y3RDb2RlLFxuICAgICAgICAgICAgICB9IGFzIEVycm9yTW9kZWwpXG4gICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgICApO1xuICAgIH0pXG4gICk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9ucyxcbiAgICBwcml2YXRlIHByb2R1Y3RSZWZlcmVuY2VzQ29ubmVjdG9yOiBQcm9kdWN0UmVmZXJlbmNlc0Nvbm5lY3RvclxuICApIHt9XG59XG4iXX0=