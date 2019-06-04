/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, groupBy, map, mergeMap, switchMap } from 'rxjs/operators';
import * as productsSearchActions from '../actions/product-search.action';
import { ProductSearchConnector } from '../../connectors/search/product-search.connector';
export class ProductsSearchEffects {
    /**
     * @param {?} actions$
     * @param {?} productSearchConnector
     */
    constructor(actions$, productSearchConnector) {
        this.actions$ = actions$;
        this.productSearchConnector = productSearchConnector;
        this.searchProducts$ = this.actions$.pipe(ofType(productsSearchActions.SEARCH_PRODUCTS), groupBy((/**
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
                return new productsSearchActions.SearchProductsSuccess(data, action.auxiliary);
            })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            error => of(new productsSearchActions.SearchProductsFail(error, action.auxiliary)))));
        }))))));
        this.getProductSuggestions$ = this.actions$.pipe(ofType(productsSearchActions.GET_PRODUCT_SUGGESTIONS), map((/**
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
                    return new productsSearchActions.GetProductSuggestionsSuccess([]);
                }
                return new productsSearchActions.GetProductSuggestionsSuccess(suggestions);
            })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            error => of(new productsSearchActions.GetProductSuggestionsFail(error)))));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1zZWFyY2guZWZmZWN0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3Byb2R1Y3Qvc3RvcmUvZWZmZWN0cy9wcm9kdWN0LXNlYXJjaC5lZmZlY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV4RCxPQUFPLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRS9FLE9BQU8sS0FBSyxxQkFBcUIsTUFBTSxrQ0FBa0MsQ0FBQztBQUMxRSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUcxRixNQUFNLE9BQU8scUJBQXFCOzs7OztJQThEaEMsWUFDVSxRQUFpQixFQUNqQixzQkFBOEM7UUFEOUMsYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUNqQiwyQkFBc0IsR0FBdEIsc0JBQXNCLENBQXdCO1FBOUR4RCxvQkFBZSxHQUdYLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUNwQixNQUFNLENBQUMscUJBQXFCLENBQUMsZUFBZSxDQUFDLEVBQzdDLE9BQU87Ozs7UUFBQyxDQUFDLE1BQTRDLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUMsRUFDM0UsUUFBUTs7OztRQUFDLEtBQUssQ0FBQyxFQUFFLENBQ2YsS0FBSyxDQUFDLElBQUksQ0FDUixTQUFTOzs7O1FBQUMsQ0FBQyxNQUE0QyxFQUFFLEVBQUU7WUFDekQsT0FBTyxJQUFJLENBQUMsc0JBQXNCO2lCQUMvQixNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUM7aUJBQzdELElBQUksQ0FDSCxHQUFHOzs7O1lBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ1QsT0FBTyxJQUFJLHFCQUFxQixDQUFDLHFCQUFxQixDQUNwRCxJQUFJLEVBQ0osTUFBTSxDQUFDLFNBQVMsQ0FDakIsQ0FBQztZQUNKLENBQUMsRUFBQyxFQUNGLFVBQVU7Ozs7WUFBQyxLQUFLLENBQUMsRUFBRSxDQUNqQixFQUFFLENBQ0EsSUFBSSxxQkFBcUIsQ0FBQyxrQkFBa0IsQ0FDMUMsS0FBSyxFQUNMLE1BQU0sQ0FBQyxTQUFTLENBQ2pCLENBQ0YsRUFDRixDQUNGLENBQUM7UUFDTixDQUFDLEVBQUMsQ0FDSCxFQUNGLENBQ0YsQ0FBQztRQUdGLDJCQUFzQixHQUdsQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDcEIsTUFBTSxDQUFDLHFCQUFxQixDQUFDLHVCQUF1QixDQUFDLEVBQ3JELEdBQUc7Ozs7UUFDRCxDQUFDLE1BQW1ELEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQ3hFLEVBQ0QsU0FBUzs7OztRQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ2xCLE9BQU8sSUFBSSxDQUFDLHNCQUFzQjtpQkFDL0IsY0FBYyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUM7aUJBQzNELElBQUksQ0FDSCxHQUFHOzs7O1lBQUMsV0FBVyxDQUFDLEVBQUU7Z0JBQ2hCLElBQUksV0FBVyxLQUFLLFNBQVMsRUFBRTtvQkFDN0IsT0FBTyxJQUFJLHFCQUFxQixDQUFDLDRCQUE0QixDQUFDLEVBQUUsQ0FBQyxDQUFDO2lCQUNuRTtnQkFDRCxPQUFPLElBQUkscUJBQXFCLENBQUMsNEJBQTRCLENBQzNELFdBQVcsQ0FDWixDQUFDO1lBQ0osQ0FBQyxFQUFDLEVBQ0YsVUFBVTs7OztZQUFDLEtBQUssQ0FBQyxFQUFFLENBQ2pCLEVBQUUsQ0FBQyxJQUFJLHFCQUFxQixDQUFDLHlCQUF5QixDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQy9ELENBQ0YsQ0FBQztRQUNOLENBQUMsRUFBQyxDQUNILENBQUM7SUFLQyxDQUFDOzs7WUFsRUwsVUFBVTs7OztZQVJGLE9BQU87WUFNUCxzQkFBc0I7O0FBSzdCO0lBREMsTUFBTSxFQUFFO3NDQUNRLFVBQVU7OERBOEJ6QjtBQUdGO0lBREMsTUFBTSxFQUFFO3NDQUNlLFVBQVU7cUVBeUJoQzs7O0lBM0RGLGdEQStCRTs7SUFFRix1REEwQkU7Ozs7O0lBR0EseUNBQXlCOzs7OztJQUN6Qix1REFBc0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCwgb2ZUeXBlIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5cbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBjYXRjaEVycm9yLCBncm91cEJ5LCBtYXAsIG1lcmdlTWFwLCBzd2l0Y2hNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCAqIGFzIHByb2R1Y3RzU2VhcmNoQWN0aW9ucyBmcm9tICcuLi9hY3Rpb25zL3Byb2R1Y3Qtc2VhcmNoLmFjdGlvbic7XG5pbXBvcnQgeyBQcm9kdWN0U2VhcmNoQ29ubmVjdG9yIH0gZnJvbSAnLi4vLi4vY29ubmVjdG9ycy9zZWFyY2gvcHJvZHVjdC1zZWFyY2guY29ubmVjdG9yJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFByb2R1Y3RzU2VhcmNoRWZmZWN0cyB7XG4gIEBFZmZlY3QoKVxuICBzZWFyY2hQcm9kdWN0cyQ6IE9ic2VydmFibGU8XG4gICAgfCBwcm9kdWN0c1NlYXJjaEFjdGlvbnMuU2VhcmNoUHJvZHVjdHNTdWNjZXNzXG4gICAgfCBwcm9kdWN0c1NlYXJjaEFjdGlvbnMuU2VhcmNoUHJvZHVjdHNGYWlsXG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKHByb2R1Y3RzU2VhcmNoQWN0aW9ucy5TRUFSQ0hfUFJPRFVDVFMpLFxuICAgIGdyb3VwQnkoKGFjdGlvbjogcHJvZHVjdHNTZWFyY2hBY3Rpb25zLlNlYXJjaFByb2R1Y3RzKSA9PiBhY3Rpb24uYXV4aWxpYXJ5KSxcbiAgICBtZXJnZU1hcChncm91cCA9PlxuICAgICAgZ3JvdXAucGlwZShcbiAgICAgICAgc3dpdGNoTWFwKChhY3Rpb246IHByb2R1Y3RzU2VhcmNoQWN0aW9ucy5TZWFyY2hQcm9kdWN0cykgPT4ge1xuICAgICAgICAgIHJldHVybiB0aGlzLnByb2R1Y3RTZWFyY2hDb25uZWN0b3JcbiAgICAgICAgICAgIC5zZWFyY2goYWN0aW9uLnBheWxvYWQucXVlcnlUZXh0LCBhY3Rpb24ucGF5bG9hZC5zZWFyY2hDb25maWcpXG4gICAgICAgICAgICAucGlwZShcbiAgICAgICAgICAgICAgbWFwKGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgcHJvZHVjdHNTZWFyY2hBY3Rpb25zLlNlYXJjaFByb2R1Y3RzU3VjY2VzcyhcbiAgICAgICAgICAgICAgICAgIGRhdGEsXG4gICAgICAgICAgICAgICAgICBhY3Rpb24uYXV4aWxpYXJ5XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT5cbiAgICAgICAgICAgICAgICBvZihcbiAgICAgICAgICAgICAgICAgIG5ldyBwcm9kdWN0c1NlYXJjaEFjdGlvbnMuU2VhcmNoUHJvZHVjdHNGYWlsKFxuICAgICAgICAgICAgICAgICAgICBlcnJvcixcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uLmF1eGlsaWFyeVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSlcbiAgICAgIClcbiAgICApXG4gICk7XG5cbiAgQEVmZmVjdCgpXG4gIGdldFByb2R1Y3RTdWdnZXN0aW9ucyQ6IE9ic2VydmFibGU8XG4gICAgfCBwcm9kdWN0c1NlYXJjaEFjdGlvbnMuR2V0UHJvZHVjdFN1Z2dlc3Rpb25zU3VjY2Vzc1xuICAgIHwgcHJvZHVjdHNTZWFyY2hBY3Rpb25zLkdldFByb2R1Y3RTdWdnZXN0aW9uc0ZhaWxcbiAgPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUocHJvZHVjdHNTZWFyY2hBY3Rpb25zLkdFVF9QUk9EVUNUX1NVR0dFU1RJT05TKSxcbiAgICBtYXAoXG4gICAgICAoYWN0aW9uOiBwcm9kdWN0c1NlYXJjaEFjdGlvbnMuR2V0UHJvZHVjdFN1Z2dlc3Rpb25zKSA9PiBhY3Rpb24ucGF5bG9hZFxuICAgICksXG4gICAgc3dpdGNoTWFwKHBheWxvYWQgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMucHJvZHVjdFNlYXJjaENvbm5lY3RvclxuICAgICAgICAuZ2V0U3VnZ2VzdGlvbnMocGF5bG9hZC50ZXJtLCBwYXlsb2FkLnNlYXJjaENvbmZpZy5wYWdlU2l6ZSlcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgbWFwKHN1Z2dlc3Rpb25zID0+IHtcbiAgICAgICAgICAgIGlmIChzdWdnZXN0aW9ucyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgIHJldHVybiBuZXcgcHJvZHVjdHNTZWFyY2hBY3Rpb25zLkdldFByb2R1Y3RTdWdnZXN0aW9uc1N1Y2Nlc3MoW10pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG5ldyBwcm9kdWN0c1NlYXJjaEFjdGlvbnMuR2V0UHJvZHVjdFN1Z2dlc3Rpb25zU3VjY2VzcyhcbiAgICAgICAgICAgICAgc3VnZ2VzdGlvbnNcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PlxuICAgICAgICAgICAgb2YobmV3IHByb2R1Y3RzU2VhcmNoQWN0aW9ucy5HZXRQcm9kdWN0U3VnZ2VzdGlvbnNGYWlsKGVycm9yKSlcbiAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgfSlcbiAgKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zLFxuICAgIHByaXZhdGUgcHJvZHVjdFNlYXJjaENvbm5lY3RvcjogUHJvZHVjdFNlYXJjaENvbm5lY3RvclxuICApIHt9XG59XG4iXX0=