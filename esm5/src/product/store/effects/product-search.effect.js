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
var ProductsSearchEffects = /** @class */ (function () {
    function ProductsSearchEffects(actions$, productSearchConnector) {
        var _this = this;
        this.actions$ = actions$;
        this.productSearchConnector = productSearchConnector;
        this.searchProducts$ = this.actions$.pipe(ofType(ProductActions.SEARCH_PRODUCTS), groupBy((/**
         * @param {?} action
         * @return {?}
         */
        function (action) { return action.auxiliary; })), mergeMap((/**
         * @param {?} group
         * @return {?}
         */
        function (group) {
            return group.pipe(switchMap((/**
             * @param {?} action
             * @return {?}
             */
            function (action) {
                return _this.productSearchConnector
                    .search(action.payload.queryText, action.payload.searchConfig)
                    .pipe(map((/**
                 * @param {?} data
                 * @return {?}
                 */
                function (data) {
                    return new ProductActions.SearchProductsSuccess(data, action.auxiliary);
                })), catchError((/**
                 * @param {?} error
                 * @return {?}
                 */
                function (error) {
                    return of(new ProductActions.SearchProductsFail(makeErrorSerializable(error), action.auxiliary));
                })));
            })));
        })));
        this.getProductSuggestions$ = this.actions$.pipe(ofType(ProductActions.GET_PRODUCT_SUGGESTIONS), map((/**
         * @param {?} action
         * @return {?}
         */
        function (action) { return action.payload; })), switchMap((/**
         * @param {?} payload
         * @return {?}
         */
        function (payload) {
            return _this.productSearchConnector
                .getSuggestions(payload.term, payload.searchConfig.pageSize)
                .pipe(map((/**
             * @param {?} suggestions
             * @return {?}
             */
            function (suggestions) {
                if (suggestions === undefined) {
                    return new ProductActions.GetProductSuggestionsSuccess([]);
                }
                return new ProductActions.GetProductSuggestionsSuccess(suggestions);
            })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                return of(new ProductActions.GetProductSuggestionsFail(makeErrorSerializable(error)));
            })));
        })));
    }
    ProductsSearchEffects.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    ProductsSearchEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: ProductSearchConnector }
    ]; };
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Observable)
    ], ProductsSearchEffects.prototype, "searchProducts$", void 0);
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Observable)
    ], ProductsSearchEffects.prototype, "getProductSuggestions$", void 0);
    return ProductsSearchEffects;
}());
export { ProductsSearchEffects };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1zZWFyY2guZWZmZWN0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3Byb2R1Y3Qvc3RvcmUvZWZmZWN0cy9wcm9kdWN0LXNlYXJjaC5lZmZlY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4RCxPQUFPLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQy9FLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBQzFGLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUVsRDtJQThERSwrQkFDVSxRQUFpQixFQUNqQixzQkFBOEM7UUFGeEQsaUJBR0k7UUFGTSxhQUFRLEdBQVIsUUFBUSxDQUFTO1FBQ2pCLDJCQUFzQixHQUF0QixzQkFBc0IsQ0FBd0I7UUE3RHhELG9CQUFlLEdBRVgsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ3BCLE1BQU0sQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFDLEVBQ3RDLE9BQU87Ozs7UUFBQyxVQUFDLE1BQXFDLElBQUssT0FBQSxNQUFNLENBQUMsU0FBUyxFQUFoQixDQUFnQixFQUFDLEVBQ3BFLFFBQVE7Ozs7UUFBQyxVQUFBLEtBQUs7WUFDWixPQUFBLEtBQUssQ0FBQyxJQUFJLENBQ1IsU0FBUzs7OztZQUFDLFVBQUMsTUFBcUM7Z0JBQzlDLE9BQU8sS0FBSSxDQUFDLHNCQUFzQjtxQkFDL0IsTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDO3FCQUM3RCxJQUFJLENBQ0gsR0FBRzs7OztnQkFBQyxVQUFBLElBQUk7b0JBQ04sT0FBTyxJQUFJLGNBQWMsQ0FBQyxxQkFBcUIsQ0FDN0MsSUFBSSxFQUNKLE1BQU0sQ0FBQyxTQUFTLENBQ2pCLENBQUM7Z0JBQ0osQ0FBQyxFQUFDLEVBQ0YsVUFBVTs7OztnQkFBQyxVQUFBLEtBQUs7b0JBQ2QsT0FBQSxFQUFFLENBQ0EsSUFBSSxjQUFjLENBQUMsa0JBQWtCLENBQ25DLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxFQUM1QixNQUFNLENBQUMsU0FBUyxDQUNqQixDQUNGO2dCQUxELENBS0MsRUFDRixDQUNGLENBQUM7WUFDTixDQUFDLEVBQUMsQ0FDSDtRQXJCRCxDQXFCQyxFQUNGLENBQ0YsQ0FBQztRQUdGLDJCQUFzQixHQUdsQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDcEIsTUFBTSxDQUFDLGNBQWMsQ0FBQyx1QkFBdUIsQ0FBQyxFQUM5QyxHQUFHOzs7O1FBQUMsVUFBQyxNQUE0QyxJQUFLLE9BQUEsTUFBTSxDQUFDLE9BQU8sRUFBZCxDQUFjLEVBQUMsRUFDckUsU0FBUzs7OztRQUFDLFVBQUEsT0FBTztZQUNmLE9BQU8sS0FBSSxDQUFDLHNCQUFzQjtpQkFDL0IsY0FBYyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUM7aUJBQzNELElBQUksQ0FDSCxHQUFHOzs7O1lBQUMsVUFBQSxXQUFXO2dCQUNiLElBQUksV0FBVyxLQUFLLFNBQVMsRUFBRTtvQkFDN0IsT0FBTyxJQUFJLGNBQWMsQ0FBQyw0QkFBNEIsQ0FBQyxFQUFFLENBQUMsQ0FBQztpQkFDNUQ7Z0JBQ0QsT0FBTyxJQUFJLGNBQWMsQ0FBQyw0QkFBNEIsQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUN0RSxDQUFDLEVBQUMsRUFDRixVQUFVOzs7O1lBQUMsVUFBQSxLQUFLO2dCQUNkLE9BQUEsRUFBRSxDQUNBLElBQUksY0FBYyxDQUFDLHlCQUF5QixDQUMxQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FDN0IsQ0FDRjtZQUpELENBSUMsRUFDRixDQUNGLENBQUM7UUFDTixDQUFDLEVBQUMsQ0FDSCxDQUFDO0lBS0MsQ0FBQzs7Z0JBakVMLFVBQVU7Ozs7Z0JBUEYsT0FBTztnQkFJUCxzQkFBc0I7O0lBTTdCO1FBREMsTUFBTSxFQUFFOzBDQUNRLFVBQVU7a0VBNkJ6QjtJQUdGO1FBREMsTUFBTSxFQUFFOzBDQUNlLFVBQVU7eUVBeUJoQztJQU1KLDRCQUFDO0NBQUEsQUFsRUQsSUFrRUM7U0FqRVkscUJBQXFCOzs7SUFDaEMsZ0RBOEJFOztJQUVGLHVEQTBCRTs7Ozs7SUFHQSx5Q0FBeUI7Ozs7O0lBQ3pCLHVEQUFzRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCwgb2ZUeXBlIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgY2F0Y2hFcnJvciwgZ3JvdXBCeSwgbWFwLCBtZXJnZU1hcCwgc3dpdGNoTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgbWFrZUVycm9yU2VyaWFsaXphYmxlIH0gZnJvbSAnLi4vLi4vLi4vdXRpbC9zZXJpYWxpemF0aW9uLXV0aWxzJztcbmltcG9ydCB7IFByb2R1Y3RTZWFyY2hDb25uZWN0b3IgfSBmcm9tICcuLi8uLi9jb25uZWN0b3JzL3NlYXJjaC9wcm9kdWN0LXNlYXJjaC5jb25uZWN0b3InO1xuaW1wb3J0IHsgUHJvZHVjdEFjdGlvbnMgfSBmcm9tICcuLi9hY3Rpb25zL2luZGV4JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFByb2R1Y3RzU2VhcmNoRWZmZWN0cyB7XG4gIEBFZmZlY3QoKVxuICBzZWFyY2hQcm9kdWN0cyQ6IE9ic2VydmFibGU8XG4gICAgUHJvZHVjdEFjdGlvbnMuU2VhcmNoUHJvZHVjdHNTdWNjZXNzIHwgUHJvZHVjdEFjdGlvbnMuU2VhcmNoUHJvZHVjdHNGYWlsXG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKFByb2R1Y3RBY3Rpb25zLlNFQVJDSF9QUk9EVUNUUyksXG4gICAgZ3JvdXBCeSgoYWN0aW9uOiBQcm9kdWN0QWN0aW9ucy5TZWFyY2hQcm9kdWN0cykgPT4gYWN0aW9uLmF1eGlsaWFyeSksXG4gICAgbWVyZ2VNYXAoZ3JvdXAgPT5cbiAgICAgIGdyb3VwLnBpcGUoXG4gICAgICAgIHN3aXRjaE1hcCgoYWN0aW9uOiBQcm9kdWN0QWN0aW9ucy5TZWFyY2hQcm9kdWN0cykgPT4ge1xuICAgICAgICAgIHJldHVybiB0aGlzLnByb2R1Y3RTZWFyY2hDb25uZWN0b3JcbiAgICAgICAgICAgIC5zZWFyY2goYWN0aW9uLnBheWxvYWQucXVlcnlUZXh0LCBhY3Rpb24ucGF5bG9hZC5zZWFyY2hDb25maWcpXG4gICAgICAgICAgICAucGlwZShcbiAgICAgICAgICAgICAgbWFwKGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUHJvZHVjdEFjdGlvbnMuU2VhcmNoUHJvZHVjdHNTdWNjZXNzKFxuICAgICAgICAgICAgICAgICAgZGF0YSxcbiAgICAgICAgICAgICAgICAgIGFjdGlvbi5hdXhpbGlhcnlcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PlxuICAgICAgICAgICAgICAgIG9mKFxuICAgICAgICAgICAgICAgICAgbmV3IFByb2R1Y3RBY3Rpb25zLlNlYXJjaFByb2R1Y3RzRmFpbChcbiAgICAgICAgICAgICAgICAgICAgbWFrZUVycm9yU2VyaWFsaXphYmxlKGVycm9yKSxcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uLmF1eGlsaWFyeVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSlcbiAgICAgIClcbiAgICApXG4gICk7XG5cbiAgQEVmZmVjdCgpXG4gIGdldFByb2R1Y3RTdWdnZXN0aW9ucyQ6IE9ic2VydmFibGU8XG4gICAgfCBQcm9kdWN0QWN0aW9ucy5HZXRQcm9kdWN0U3VnZ2VzdGlvbnNTdWNjZXNzXG4gICAgfCBQcm9kdWN0QWN0aW9ucy5HZXRQcm9kdWN0U3VnZ2VzdGlvbnNGYWlsXG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKFByb2R1Y3RBY3Rpb25zLkdFVF9QUk9EVUNUX1NVR0dFU1RJT05TKSxcbiAgICBtYXAoKGFjdGlvbjogUHJvZHVjdEFjdGlvbnMuR2V0UHJvZHVjdFN1Z2dlc3Rpb25zKSA9PiBhY3Rpb24ucGF5bG9hZCksXG4gICAgc3dpdGNoTWFwKHBheWxvYWQgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMucHJvZHVjdFNlYXJjaENvbm5lY3RvclxuICAgICAgICAuZ2V0U3VnZ2VzdGlvbnMocGF5bG9hZC50ZXJtLCBwYXlsb2FkLnNlYXJjaENvbmZpZy5wYWdlU2l6ZSlcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgbWFwKHN1Z2dlc3Rpb25zID0+IHtcbiAgICAgICAgICAgIGlmIChzdWdnZXN0aW9ucyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgIHJldHVybiBuZXcgUHJvZHVjdEFjdGlvbnMuR2V0UHJvZHVjdFN1Z2dlc3Rpb25zU3VjY2VzcyhbXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb2R1Y3RBY3Rpb25zLkdldFByb2R1Y3RTdWdnZXN0aW9uc1N1Y2Nlc3Moc3VnZ2VzdGlvbnMpO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT5cbiAgICAgICAgICAgIG9mKFxuICAgICAgICAgICAgICBuZXcgUHJvZHVjdEFjdGlvbnMuR2V0UHJvZHVjdFN1Z2dlc3Rpb25zRmFpbChcbiAgICAgICAgICAgICAgICBtYWtlRXJyb3JTZXJpYWxpemFibGUoZXJyb3IpXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgfSlcbiAgKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zLFxuICAgIHByaXZhdGUgcHJvZHVjdFNlYXJjaENvbm5lY3RvcjogUHJvZHVjdFNlYXJjaENvbm5lY3RvclxuICApIHt9XG59XG4iXX0=