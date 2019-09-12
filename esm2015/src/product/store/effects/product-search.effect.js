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
import { ProductSearchConnector } from '../../connectors/search/product-search.connector';
import { ProductActions } from '../actions/index';
export class ProductsSearchEffects {
    /**
     * @param {?} actions$
     * @param {?} productSearchConnector
     */
    constructor(actions$, productSearchConnector) {
        this.actions$ = actions$;
        this.productSearchConnector = productSearchConnector;
        this.searchProducts$ = this.actions$.pipe(ofType(ProductActions.SEARCH_PRODUCTS), groupBy((/**
         * @param {?} action
         * @return {?}
         */
        (action) => action.auxiliary)), mergeMap((/**
         * @param {?} group
         * @return {?}
         */
        group => group.pipe(switchMap((/**
         * @param {?} action
         * @return {?}
         */
        (action) => {
            return this.productSearchConnector
                .search(action.payload.queryText, action.payload.searchConfig)
                .pipe(map((/**
             * @param {?} data
             * @return {?}
             */
            data => {
                return new ProductActions.SearchProductsSuccess(data, action.auxiliary);
            })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            error => of(new ProductActions.SearchProductsFail(makeErrorSerializable(error), action.auxiliary)))));
        }))))));
        this.getProductSuggestions$ = this.actions$.pipe(ofType(ProductActions.GET_PRODUCT_SUGGESTIONS), map((/**
         * @param {?} action
         * @return {?}
         */
        (action) => action.payload)), switchMap((/**
         * @param {?} payload
         * @return {?}
         */
        payload => {
            return this.productSearchConnector
                .getSuggestions(payload.term, payload.searchConfig.pageSize)
                .pipe(map((/**
             * @param {?} suggestions
             * @return {?}
             */
            suggestions => {
                if (suggestions === undefined) {
                    return new ProductActions.GetProductSuggestionsSuccess([]);
                }
                return new ProductActions.GetProductSuggestionsSuccess(suggestions);
            })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            error => of(new ProductActions.GetProductSuggestionsFail(makeErrorSerializable(error))))));
        })));
    }
}
ProductsSearchEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ProductsSearchEffects.ctorParameters = () => [
    { type: Actions },
    { type: ProductSearchConnector }
];
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Observable)
], ProductsSearchEffects.prototype, "searchProducts$", void 0);
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Observable)
], ProductsSearchEffects.prototype, "getProductSuggestions$", void 0);
if (false) {
    /** @type {?} */
    ProductsSearchEffects.prototype.searchProducts$;
    /** @type {?} */
    ProductsSearchEffects.prototype.getProductSuggestions$;
    /**
     * @type {?}
     * @private
     */
    ProductsSearchEffects.prototype.actions$;
    /**
     * @type {?}
     * @private
     */
    ProductsSearchEffects.prototype.productSearchConnector;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1zZWFyY2guZWZmZWN0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3Byb2R1Y3Qvc3RvcmUvZWZmZWN0cy9wcm9kdWN0LXNlYXJjaC5lZmZlY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4RCxPQUFPLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQy9FLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBQzFGLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUdsRCxNQUFNLE9BQU8scUJBQXFCOzs7OztJQTZEaEMsWUFDVSxRQUFpQixFQUNqQixzQkFBOEM7UUFEOUMsYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUNqQiwyQkFBc0IsR0FBdEIsc0JBQXNCLENBQXdCO1FBN0R4RCxvQkFBZSxHQUVYLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUNwQixNQUFNLENBQUMsY0FBYyxDQUFDLGVBQWUsQ0FBQyxFQUN0QyxPQUFPOzs7O1FBQUMsQ0FBQyxNQUFxQyxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFDLEVBQ3BFLFFBQVE7Ozs7UUFBQyxLQUFLLENBQUMsRUFBRSxDQUNmLEtBQUssQ0FBQyxJQUFJLENBQ1IsU0FBUzs7OztRQUFDLENBQUMsTUFBcUMsRUFBRSxFQUFFO1lBQ2xELE9BQU8sSUFBSSxDQUFDLHNCQUFzQjtpQkFDL0IsTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDO2lCQUM3RCxJQUFJLENBQ0gsR0FBRzs7OztZQUFDLElBQUksQ0FBQyxFQUFFO2dCQUNULE9BQU8sSUFBSSxjQUFjLENBQUMscUJBQXFCLENBQzdDLElBQUksRUFDSixNQUFNLENBQUMsU0FBUyxDQUNqQixDQUFDO1lBQ0osQ0FBQyxFQUFDLEVBQ0YsVUFBVTs7OztZQUFDLEtBQUssQ0FBQyxFQUFFLENBQ2pCLEVBQUUsQ0FDQSxJQUFJLGNBQWMsQ0FBQyxrQkFBa0IsQ0FDbkMscUJBQXFCLENBQUMsS0FBSyxDQUFDLEVBQzVCLE1BQU0sQ0FBQyxTQUFTLENBQ2pCLENBQ0YsRUFDRixDQUNGLENBQUM7UUFDTixDQUFDLEVBQUMsQ0FDSCxFQUNGLENBQ0YsQ0FBQztRQUdGLDJCQUFzQixHQUdsQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDcEIsTUFBTSxDQUFDLGNBQWMsQ0FBQyx1QkFBdUIsQ0FBQyxFQUM5QyxHQUFHOzs7O1FBQUMsQ0FBQyxNQUE0QyxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFDLEVBQ3JFLFNBQVM7Ozs7UUFBQyxPQUFPLENBQUMsRUFBRTtZQUNsQixPQUFPLElBQUksQ0FBQyxzQkFBc0I7aUJBQy9CLGNBQWMsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDO2lCQUMzRCxJQUFJLENBQ0gsR0FBRzs7OztZQUFDLFdBQVcsQ0FBQyxFQUFFO2dCQUNoQixJQUFJLFdBQVcsS0FBSyxTQUFTLEVBQUU7b0JBQzdCLE9BQU8sSUFBSSxjQUFjLENBQUMsNEJBQTRCLENBQUMsRUFBRSxDQUFDLENBQUM7aUJBQzVEO2dCQUNELE9BQU8sSUFBSSxjQUFjLENBQUMsNEJBQTRCLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDdEUsQ0FBQyxFQUFDLEVBQ0YsVUFBVTs7OztZQUFDLEtBQUssQ0FBQyxFQUFFLENBQ2pCLEVBQUUsQ0FDQSxJQUFJLGNBQWMsQ0FBQyx5QkFBeUIsQ0FDMUMscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQzdCLENBQ0YsRUFDRixDQUNGLENBQUM7UUFDTixDQUFDLEVBQUMsQ0FDSCxDQUFDO0lBS0MsQ0FBQzs7O1lBakVMLFVBQVU7Ozs7WUFQRixPQUFPO1lBSVAsc0JBQXNCOztBQU03QjtJQURDLE1BQU0sRUFBRTtzQ0FDUSxVQUFVOzhEQTZCekI7QUFHRjtJQURDLE1BQU0sRUFBRTtzQ0FDZSxVQUFVO3FFQXlCaEM7OztJQTFERixnREE4QkU7O0lBRUYsdURBMEJFOzs7OztJQUdBLHlDQUF5Qjs7Ozs7SUFDekIsdURBQXNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0LCBvZlR5cGUgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBjYXRjaEVycm9yLCBncm91cEJ5LCBtYXAsIG1lcmdlTWFwLCBzd2l0Y2hNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBtYWtlRXJyb3JTZXJpYWxpemFibGUgfSBmcm9tICcuLi8uLi8uLi91dGlsL3NlcmlhbGl6YXRpb24tdXRpbHMnO1xuaW1wb3J0IHsgUHJvZHVjdFNlYXJjaENvbm5lY3RvciB9IGZyb20gJy4uLy4uL2Nvbm5lY3RvcnMvc2VhcmNoL3Byb2R1Y3Qtc2VhcmNoLmNvbm5lY3Rvcic7XG5pbXBvcnQgeyBQcm9kdWN0QWN0aW9ucyB9IGZyb20gJy4uL2FjdGlvbnMvaW5kZXgnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUHJvZHVjdHNTZWFyY2hFZmZlY3RzIHtcbiAgQEVmZmVjdCgpXG4gIHNlYXJjaFByb2R1Y3RzJDogT2JzZXJ2YWJsZTxcbiAgICBQcm9kdWN0QWN0aW9ucy5TZWFyY2hQcm9kdWN0c1N1Y2Nlc3MgfCBQcm9kdWN0QWN0aW9ucy5TZWFyY2hQcm9kdWN0c0ZhaWxcbiAgPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoUHJvZHVjdEFjdGlvbnMuU0VBUkNIX1BST0RVQ1RTKSxcbiAgICBncm91cEJ5KChhY3Rpb246IFByb2R1Y3RBY3Rpb25zLlNlYXJjaFByb2R1Y3RzKSA9PiBhY3Rpb24uYXV4aWxpYXJ5KSxcbiAgICBtZXJnZU1hcChncm91cCA9PlxuICAgICAgZ3JvdXAucGlwZShcbiAgICAgICAgc3dpdGNoTWFwKChhY3Rpb246IFByb2R1Y3RBY3Rpb25zLlNlYXJjaFByb2R1Y3RzKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMucHJvZHVjdFNlYXJjaENvbm5lY3RvclxuICAgICAgICAgICAgLnNlYXJjaChhY3Rpb24ucGF5bG9hZC5xdWVyeVRleHQsIGFjdGlvbi5wYXlsb2FkLnNlYXJjaENvbmZpZylcbiAgICAgICAgICAgIC5waXBlKFxuICAgICAgICAgICAgICBtYXAoZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9kdWN0QWN0aW9ucy5TZWFyY2hQcm9kdWN0c1N1Y2Nlc3MoXG4gICAgICAgICAgICAgICAgICBkYXRhLFxuICAgICAgICAgICAgICAgICAgYWN0aW9uLmF1eGlsaWFyeVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+XG4gICAgICAgICAgICAgICAgb2YoXG4gICAgICAgICAgICAgICAgICBuZXcgUHJvZHVjdEFjdGlvbnMuU2VhcmNoUHJvZHVjdHNGYWlsKFxuICAgICAgICAgICAgICAgICAgICBtYWtlRXJyb3JTZXJpYWxpemFibGUoZXJyb3IpLFxuICAgICAgICAgICAgICAgICAgICBhY3Rpb24uYXV4aWxpYXJ5XG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApO1xuICAgICAgICB9KVxuICAgICAgKVxuICAgIClcbiAgKTtcblxuICBARWZmZWN0KClcbiAgZ2V0UHJvZHVjdFN1Z2dlc3Rpb25zJDogT2JzZXJ2YWJsZTxcbiAgICB8IFByb2R1Y3RBY3Rpb25zLkdldFByb2R1Y3RTdWdnZXN0aW9uc1N1Y2Nlc3NcbiAgICB8IFByb2R1Y3RBY3Rpb25zLkdldFByb2R1Y3RTdWdnZXN0aW9uc0ZhaWxcbiAgPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoUHJvZHVjdEFjdGlvbnMuR0VUX1BST0RVQ1RfU1VHR0VTVElPTlMpLFxuICAgIG1hcCgoYWN0aW9uOiBQcm9kdWN0QWN0aW9ucy5HZXRQcm9kdWN0U3VnZ2VzdGlvbnMpID0+IGFjdGlvbi5wYXlsb2FkKSxcbiAgICBzd2l0Y2hNYXAocGF5bG9hZCA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5wcm9kdWN0U2VhcmNoQ29ubmVjdG9yXG4gICAgICAgIC5nZXRTdWdnZXN0aW9ucyhwYXlsb2FkLnRlcm0sIHBheWxvYWQuc2VhcmNoQ29uZmlnLnBhZ2VTaXplKVxuICAgICAgICAucGlwZShcbiAgICAgICAgICBtYXAoc3VnZ2VzdGlvbnMgPT4ge1xuICAgICAgICAgICAgaWYgKHN1Z2dlc3Rpb25zID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9kdWN0QWN0aW9ucy5HZXRQcm9kdWN0U3VnZ2VzdGlvbnNTdWNjZXNzKFtdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvZHVjdEFjdGlvbnMuR2V0UHJvZHVjdFN1Z2dlc3Rpb25zU3VjY2VzcyhzdWdnZXN0aW9ucyk7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PlxuICAgICAgICAgICAgb2YoXG4gICAgICAgICAgICAgIG5ldyBQcm9kdWN0QWN0aW9ucy5HZXRQcm9kdWN0U3VnZ2VzdGlvbnNGYWlsKFxuICAgICAgICAgICAgICAgIG1ha2VFcnJvclNlcmlhbGl6YWJsZShlcnJvcilcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICB9KVxuICApO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnMsXG4gICAgcHJpdmF0ZSBwcm9kdWN0U2VhcmNoQ29ubmVjdG9yOiBQcm9kdWN0U2VhcmNoQ29ubmVjdG9yXG4gICkge31cbn1cbiJdfQ==