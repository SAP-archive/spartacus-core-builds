/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { ProductReferencesConnector } from '../../connectors/references/product-references.connector';
import * as productReferencesActions from './../actions/product-references.action';
export class ProductReferencesEffects {
    /**
     * @param {?} actions$
     * @param {?} productReferencesConnector
     */
    constructor(actions$, productReferencesConnector) {
        this.actions$ = actions$;
        this.productReferencesConnector = productReferencesConnector;
        this.loadProductReferences$ = this.actions$.pipe(ofType(productReferencesActions.LOAD_PRODUCT_REFERENCES), map((action) => action.payload), mergeMap(payload => {
            return this.productReferencesConnector
                .get(payload.productCode, payload.referenceType, payload.pageSize)
                .pipe(map(data => {
                return new productReferencesActions.LoadProductReferencesSuccess({
                    productCode: payload.productCode,
                    list: data,
                });
            }), catchError(_error => of(new productReferencesActions.LoadProductReferencesFail((/** @type {?} */ ({
                message: payload.productCode,
            }))))));
        }));
    }
}
ProductReferencesEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ProductReferencesEffects.ctorParameters = () => [
    { type: Actions },
    { type: ProductReferencesConnector }
];
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Observable)
], ProductReferencesEffects.prototype, "loadProductReferences$", void 0);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1yZWZlcmVuY2VzLmVmZmVjdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9wcm9kdWN0L3N0b3JlL2VmZmVjdHMvcHJvZHVjdC1yZWZlcmVuY2VzLmVmZmVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hELE9BQU8sRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTNELE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDBEQUEwRCxDQUFDO0FBQ3RHLE9BQU8sS0FBSyx3QkFBd0IsTUFBTSx3Q0FBd0MsQ0FBQztBQUduRixNQUFNLE9BQU8sd0JBQXdCOzs7OztJQStCbkMsWUFDVSxRQUFpQixFQUNqQiwwQkFBc0Q7UUFEdEQsYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUNqQiwrQkFBMEIsR0FBMUIsMEJBQTBCLENBQTRCO1FBL0JoRSwyQkFBc0IsR0FHbEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ3BCLE1BQU0sQ0FBQyx3QkFBd0IsQ0FBQyx1QkFBdUIsQ0FBQyxFQUN4RCxHQUFHLENBQ0QsQ0FBQyxNQUFzRCxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUMzRSxFQUNELFFBQVEsQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUNqQixPQUFPLElBQUksQ0FBQywwQkFBMEI7aUJBQ25DLEdBQUcsQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLE9BQU8sQ0FBQyxhQUFhLEVBQUUsT0FBTyxDQUFDLFFBQVEsQ0FBQztpQkFDakUsSUFBSSxDQUNILEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDVCxPQUFPLElBQUksd0JBQXdCLENBQUMsNEJBQTRCLENBQUM7b0JBQy9ELFdBQVcsRUFBRSxPQUFPLENBQUMsV0FBVztvQkFDaEMsSUFBSSxFQUFFLElBQUk7aUJBQ1gsQ0FBQyxDQUFDO1lBQ0wsQ0FBQyxDQUFDLEVBQ0YsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQ2xCLEVBQUUsQ0FDQSxJQUFJLHdCQUF3QixDQUFDLHlCQUF5QixDQUFDLG1CQUFBO2dCQUNyRCxPQUFPLEVBQUUsT0FBTyxDQUFDLFdBQVc7YUFDN0IsRUFBYyxDQUFDLENBQ2pCLENBQ0YsQ0FDRixDQUFDO1FBQ04sQ0FBQyxDQUFDLENBQ0gsQ0FBQztJQUtDLENBQUM7OztZQW5DTCxVQUFVOzs7O1lBUEYsT0FBTztZQUlQLDBCQUEwQjs7QUFNakM7SUFEQyxNQUFNLEVBQUU7c0NBQ2UsVUFBVTt3RUEyQmhDOzs7SUE1QkYsMERBNEJFOzs7OztJQUdBLDRDQUF5Qjs7Ozs7SUFDekIsOERBQThEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0LCBvZlR5cGUgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBjYXRjaEVycm9yLCBtYXAsIG1lcmdlTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgRXJyb3JNb2RlbCB9IGZyb20gJy4uLy4uLy4uL21vZGVsL21pc2MubW9kZWwnO1xuaW1wb3J0IHsgUHJvZHVjdFJlZmVyZW5jZXNDb25uZWN0b3IgfSBmcm9tICcuLi8uLi9jb25uZWN0b3JzL3JlZmVyZW5jZXMvcHJvZHVjdC1yZWZlcmVuY2VzLmNvbm5lY3Rvcic7XG5pbXBvcnQgKiBhcyBwcm9kdWN0UmVmZXJlbmNlc0FjdGlvbnMgZnJvbSAnLi8uLi9hY3Rpb25zL3Byb2R1Y3QtcmVmZXJlbmNlcy5hY3Rpb24nO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUHJvZHVjdFJlZmVyZW5jZXNFZmZlY3RzIHtcbiAgQEVmZmVjdCgpXG4gIGxvYWRQcm9kdWN0UmVmZXJlbmNlcyQ6IE9ic2VydmFibGU8XG4gICAgfCBwcm9kdWN0UmVmZXJlbmNlc0FjdGlvbnMuTG9hZFByb2R1Y3RSZWZlcmVuY2VzU3VjY2Vzc1xuICAgIHwgcHJvZHVjdFJlZmVyZW5jZXNBY3Rpb25zLkxvYWRQcm9kdWN0UmVmZXJlbmNlc0ZhaWxcbiAgPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUocHJvZHVjdFJlZmVyZW5jZXNBY3Rpb25zLkxPQURfUFJPRFVDVF9SRUZFUkVOQ0VTKSxcbiAgICBtYXAoXG4gICAgICAoYWN0aW9uOiBwcm9kdWN0UmVmZXJlbmNlc0FjdGlvbnMuTG9hZFByb2R1Y3RSZWZlcmVuY2VzKSA9PiBhY3Rpb24ucGF5bG9hZFxuICAgICksXG4gICAgbWVyZ2VNYXAocGF5bG9hZCA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5wcm9kdWN0UmVmZXJlbmNlc0Nvbm5lY3RvclxuICAgICAgICAuZ2V0KHBheWxvYWQucHJvZHVjdENvZGUsIHBheWxvYWQucmVmZXJlbmNlVHlwZSwgcGF5bG9hZC5wYWdlU2l6ZSlcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgbWFwKGRhdGEgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBwcm9kdWN0UmVmZXJlbmNlc0FjdGlvbnMuTG9hZFByb2R1Y3RSZWZlcmVuY2VzU3VjY2Vzcyh7XG4gICAgICAgICAgICAgIHByb2R1Y3RDb2RlOiBwYXlsb2FkLnByb2R1Y3RDb2RlLFxuICAgICAgICAgICAgICBsaXN0OiBkYXRhLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgY2F0Y2hFcnJvcihfZXJyb3IgPT5cbiAgICAgICAgICAgIG9mKFxuICAgICAgICAgICAgICBuZXcgcHJvZHVjdFJlZmVyZW5jZXNBY3Rpb25zLkxvYWRQcm9kdWN0UmVmZXJlbmNlc0ZhaWwoe1xuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IHBheWxvYWQucHJvZHVjdENvZGUsXG4gICAgICAgICAgICAgIH0gYXMgRXJyb3JNb2RlbClcbiAgICAgICAgICAgIClcbiAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgfSlcbiAgKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zLFxuICAgIHByaXZhdGUgcHJvZHVjdFJlZmVyZW5jZXNDb25uZWN0b3I6IFByb2R1Y3RSZWZlcmVuY2VzQ29ubmVjdG9yXG4gICkge31cbn1cbiJdfQ==