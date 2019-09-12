/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { ProductReferencesConnector } from '../../connectors/references/product-references.connector';
import { ProductActions } from '../actions/index';
export class ProductReferencesEffects {
    /**
     * @param {?} actions$
     * @param {?} productReferencesConnector
     */
    constructor(actions$, productReferencesConnector) {
        this.actions$ = actions$;
        this.productReferencesConnector = productReferencesConnector;
        this.loadProductReferences$ = this.actions$.pipe(ofType(ProductActions.LOAD_PRODUCT_REFERENCES), map((/**
         * @param {?} action
         * @return {?}
         */
        (action) => action.payload)), mergeMap((/**
         * @param {?} payload
         * @return {?}
         */
        payload => {
            return this.productReferencesConnector
                .get(payload.productCode, payload.referenceType, payload.pageSize)
                .pipe(map((/**
             * @param {?} data
             * @return {?}
             */
            data => {
                return new ProductActions.LoadProductReferencesSuccess({
                    productCode: payload.productCode,
                    list: data,
                });
            })), catchError((/**
             * @param {?} _error
             * @return {?}
             */
            _error => of(new ProductActions.LoadProductReferencesFail((/** @type {?} */ ({
                message: payload.productCode,
            })))))));
        })));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1yZWZlcmVuY2VzLmVmZmVjdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9wcm9kdWN0L3N0b3JlL2VmZmVjdHMvcHJvZHVjdC1yZWZlcmVuY2VzLmVmZmVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hELE9BQU8sRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTNELE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDBEQUEwRCxDQUFDO0FBQ3RHLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUdsRCxNQUFNLE9BQU8sd0JBQXdCOzs7OztJQTZCbkMsWUFDVSxRQUFpQixFQUNqQiwwQkFBc0Q7UUFEdEQsYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUNqQiwrQkFBMEIsR0FBMUIsMEJBQTBCLENBQTRCO1FBN0JoRSwyQkFBc0IsR0FHbEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ3BCLE1BQU0sQ0FBQyxjQUFjLENBQUMsdUJBQXVCLENBQUMsRUFDOUMsR0FBRzs7OztRQUFDLENBQUMsTUFBNEMsRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBQyxFQUNyRSxRQUFROzs7O1FBQUMsT0FBTyxDQUFDLEVBQUU7WUFDakIsT0FBTyxJQUFJLENBQUMsMEJBQTBCO2lCQUNuQyxHQUFHLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxPQUFPLENBQUMsYUFBYSxFQUFFLE9BQU8sQ0FBQyxRQUFRLENBQUM7aUJBQ2pFLElBQUksQ0FDSCxHQUFHOzs7O1lBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ1QsT0FBTyxJQUFJLGNBQWMsQ0FBQyw0QkFBNEIsQ0FBQztvQkFDckQsV0FBVyxFQUFFLE9BQU8sQ0FBQyxXQUFXO29CQUNoQyxJQUFJLEVBQUUsSUFBSTtpQkFDWCxDQUFDLENBQUM7WUFDTCxDQUFDLEVBQUMsRUFDRixVQUFVOzs7O1lBQUMsTUFBTSxDQUFDLEVBQUUsQ0FDbEIsRUFBRSxDQUNBLElBQUksY0FBYyxDQUFDLHlCQUF5QixDQUFDLG1CQUFBO2dCQUMzQyxPQUFPLEVBQUUsT0FBTyxDQUFDLFdBQVc7YUFDN0IsRUFBYyxDQUFDLENBQ2pCLEVBQ0YsQ0FDRixDQUFDO1FBQ04sQ0FBQyxFQUFDLENBQ0gsQ0FBQztJQUtDLENBQUM7OztZQWpDTCxVQUFVOzs7O1lBUEYsT0FBTztZQUlQLDBCQUEwQjs7QUFNakM7SUFEQyxNQUFNLEVBQUU7c0NBQ2UsVUFBVTt3RUF5QmhDOzs7SUExQkYsMERBMEJFOzs7OztJQUdBLDRDQUF5Qjs7Ozs7SUFDekIsOERBQThEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0LCBvZlR5cGUgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBjYXRjaEVycm9yLCBtYXAsIG1lcmdlTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgRXJyb3JNb2RlbCB9IGZyb20gJy4uLy4uLy4uL21vZGVsL21pc2MubW9kZWwnO1xuaW1wb3J0IHsgUHJvZHVjdFJlZmVyZW5jZXNDb25uZWN0b3IgfSBmcm9tICcuLi8uLi9jb25uZWN0b3JzL3JlZmVyZW5jZXMvcHJvZHVjdC1yZWZlcmVuY2VzLmNvbm5lY3Rvcic7XG5pbXBvcnQgeyBQcm9kdWN0QWN0aW9ucyB9IGZyb20gJy4uL2FjdGlvbnMvaW5kZXgnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUHJvZHVjdFJlZmVyZW5jZXNFZmZlY3RzIHtcbiAgQEVmZmVjdCgpXG4gIGxvYWRQcm9kdWN0UmVmZXJlbmNlcyQ6IE9ic2VydmFibGU8XG4gICAgfCBQcm9kdWN0QWN0aW9ucy5Mb2FkUHJvZHVjdFJlZmVyZW5jZXNTdWNjZXNzXG4gICAgfCBQcm9kdWN0QWN0aW9ucy5Mb2FkUHJvZHVjdFJlZmVyZW5jZXNGYWlsXG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKFByb2R1Y3RBY3Rpb25zLkxPQURfUFJPRFVDVF9SRUZFUkVOQ0VTKSxcbiAgICBtYXAoKGFjdGlvbjogUHJvZHVjdEFjdGlvbnMuTG9hZFByb2R1Y3RSZWZlcmVuY2VzKSA9PiBhY3Rpb24ucGF5bG9hZCksXG4gICAgbWVyZ2VNYXAocGF5bG9hZCA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5wcm9kdWN0UmVmZXJlbmNlc0Nvbm5lY3RvclxuICAgICAgICAuZ2V0KHBheWxvYWQucHJvZHVjdENvZGUsIHBheWxvYWQucmVmZXJlbmNlVHlwZSwgcGF5bG9hZC5wYWdlU2l6ZSlcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgbWFwKGRhdGEgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9kdWN0QWN0aW9ucy5Mb2FkUHJvZHVjdFJlZmVyZW5jZXNTdWNjZXNzKHtcbiAgICAgICAgICAgICAgcHJvZHVjdENvZGU6IHBheWxvYWQucHJvZHVjdENvZGUsXG4gICAgICAgICAgICAgIGxpc3Q6IGRhdGEsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBjYXRjaEVycm9yKF9lcnJvciA9PlxuICAgICAgICAgICAgb2YoXG4gICAgICAgICAgICAgIG5ldyBQcm9kdWN0QWN0aW9ucy5Mb2FkUHJvZHVjdFJlZmVyZW5jZXNGYWlsKHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBwYXlsb2FkLnByb2R1Y3RDb2RlLFxuICAgICAgICAgICAgICB9IGFzIEVycm9yTW9kZWwpXG4gICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgICApO1xuICAgIH0pXG4gICk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9ucyxcbiAgICBwcml2YXRlIHByb2R1Y3RSZWZlcmVuY2VzQ29ubmVjdG9yOiBQcm9kdWN0UmVmZXJlbmNlc0Nvbm5lY3RvclxuICApIHt9XG59XG4iXX0=