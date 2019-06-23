/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, groupBy, map, mergeMap, switchMap } from 'rxjs/operators';
import { makeErrorSerializable } from '../../../util/serialization-utils';
import { ProductSearchConnector } from '../../connectors/search/product-search.connector';
import * as productsSearchActions from '../actions/product-search.action';
var ProductsSearchEffects = /** @class */ (function () {
    function ProductsSearchEffects(actions$, productSearchConnector) {
        var _this = this;
        this.actions$ = actions$;
        this.productSearchConnector = productSearchConnector;
        this.searchProducts$ = this.actions$.pipe(ofType(productsSearchActions.SEARCH_PRODUCTS), groupBy((/**
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
                    return new productsSearchActions.SearchProductsSuccess(data, action.auxiliary);
                })), catchError((/**
                 * @param {?} error
                 * @return {?}
                 */
                function (error) {
                    return of(new productsSearchActions.SearchProductsFail(makeErrorSerializable(error), action.auxiliary));
                })));
            })));
        })));
        this.getProductSuggestions$ = this.actions$.pipe(ofType(productsSearchActions.GET_PRODUCT_SUGGESTIONS), map((/**
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
                    return new productsSearchActions.GetProductSuggestionsSuccess([]);
                }
                return new productsSearchActions.GetProductSuggestionsSuccess(suggestions);
            })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                return of(new productsSearchActions.GetProductSuggestionsFail(makeErrorSerializable(error)));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1zZWFyY2guZWZmZWN0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3Byb2R1Y3Qvc3RvcmUvZWZmZWN0cy9wcm9kdWN0LXNlYXJjaC5lZmZlY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4RCxPQUFPLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQy9FLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBQzFGLE9BQU8sS0FBSyxxQkFBcUIsTUFBTSxrQ0FBa0MsQ0FBQztBQUUxRTtJQW1FRSwrQkFDVSxRQUFpQixFQUNqQixzQkFBOEM7UUFGeEQsaUJBR0k7UUFGTSxhQUFRLEdBQVIsUUFBUSxDQUFTO1FBQ2pCLDJCQUFzQixHQUF0QixzQkFBc0IsQ0FBd0I7UUFsRXhELG9CQUFlLEdBR1gsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ3BCLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxlQUFlLENBQUMsRUFDN0MsT0FBTzs7OztRQUFDLFVBQUMsTUFBNEMsSUFBSyxPQUFBLE1BQU0sQ0FBQyxTQUFTLEVBQWhCLENBQWdCLEVBQUMsRUFDM0UsUUFBUTs7OztRQUFDLFVBQUEsS0FBSztZQUNaLE9BQUEsS0FBSyxDQUFDLElBQUksQ0FDUixTQUFTOzs7O1lBQUMsVUFBQyxNQUE0QztnQkFDckQsT0FBTyxLQUFJLENBQUMsc0JBQXNCO3FCQUMvQixNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUM7cUJBQzdELElBQUksQ0FDSCxHQUFHOzs7O2dCQUFDLFVBQUEsSUFBSTtvQkFDTixPQUFPLElBQUkscUJBQXFCLENBQUMscUJBQXFCLENBQ3BELElBQUksRUFDSixNQUFNLENBQUMsU0FBUyxDQUNqQixDQUFDO2dCQUNKLENBQUMsRUFBQyxFQUNGLFVBQVU7Ozs7Z0JBQUMsVUFBQSxLQUFLO29CQUNkLE9BQUEsRUFBRSxDQUNBLElBQUkscUJBQXFCLENBQUMsa0JBQWtCLENBQzFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxFQUM1QixNQUFNLENBQUMsU0FBUyxDQUNqQixDQUNGO2dCQUxELENBS0MsRUFDRixDQUNGLENBQUM7WUFDTixDQUFDLEVBQUMsQ0FDSDtRQXJCRCxDQXFCQyxFQUNGLENBQ0YsQ0FBQztRQUdGLDJCQUFzQixHQUdsQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDcEIsTUFBTSxDQUFDLHFCQUFxQixDQUFDLHVCQUF1QixDQUFDLEVBQ3JELEdBQUc7Ozs7UUFDRCxVQUFDLE1BQW1ELElBQUssT0FBQSxNQUFNLENBQUMsT0FBTyxFQUFkLENBQWMsRUFDeEUsRUFDRCxTQUFTOzs7O1FBQUMsVUFBQSxPQUFPO1lBQ2YsT0FBTyxLQUFJLENBQUMsc0JBQXNCO2lCQUMvQixjQUFjLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQztpQkFDM0QsSUFBSSxDQUNILEdBQUc7Ozs7WUFBQyxVQUFBLFdBQVc7Z0JBQ2IsSUFBSSxXQUFXLEtBQUssU0FBUyxFQUFFO29CQUM3QixPQUFPLElBQUkscUJBQXFCLENBQUMsNEJBQTRCLENBQUMsRUFBRSxDQUFDLENBQUM7aUJBQ25FO2dCQUNELE9BQU8sSUFBSSxxQkFBcUIsQ0FBQyw0QkFBNEIsQ0FDM0QsV0FBVyxDQUNaLENBQUM7WUFDSixDQUFDLEVBQUMsRUFDRixVQUFVOzs7O1lBQUMsVUFBQSxLQUFLO2dCQUNkLE9BQUEsRUFBRSxDQUNBLElBQUkscUJBQXFCLENBQUMseUJBQXlCLENBQ2pELHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUM3QixDQUNGO1lBSkQsQ0FJQyxFQUNGLENBQ0YsQ0FBQztRQUNOLENBQUMsRUFBQyxDQUNILENBQUM7SUFLQyxDQUFDOztnQkF0RUwsVUFBVTs7OztnQkFQRixPQUFPO2dCQUlQLHNCQUFzQjs7SUFNN0I7UUFEQyxNQUFNLEVBQUU7MENBQ1EsVUFBVTtrRUE4QnpCO0lBR0Y7UUFEQyxNQUFNLEVBQUU7MENBQ2UsVUFBVTt5RUE2QmhDO0lBTUosNEJBQUM7Q0FBQSxBQXZFRCxJQXVFQztTQXRFWSxxQkFBcUI7OztJQUNoQyxnREErQkU7O0lBRUYsdURBOEJFOzs7OztJQUdBLHlDQUF5Qjs7Ozs7SUFDekIsdURBQXNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0LCBvZlR5cGUgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBjYXRjaEVycm9yLCBncm91cEJ5LCBtYXAsIG1lcmdlTWFwLCBzd2l0Y2hNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBtYWtlRXJyb3JTZXJpYWxpemFibGUgfSBmcm9tICcuLi8uLi8uLi91dGlsL3NlcmlhbGl6YXRpb24tdXRpbHMnO1xuaW1wb3J0IHsgUHJvZHVjdFNlYXJjaENvbm5lY3RvciB9IGZyb20gJy4uLy4uL2Nvbm5lY3RvcnMvc2VhcmNoL3Byb2R1Y3Qtc2VhcmNoLmNvbm5lY3Rvcic7XG5pbXBvcnQgKiBhcyBwcm9kdWN0c1NlYXJjaEFjdGlvbnMgZnJvbSAnLi4vYWN0aW9ucy9wcm9kdWN0LXNlYXJjaC5hY3Rpb24nO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUHJvZHVjdHNTZWFyY2hFZmZlY3RzIHtcbiAgQEVmZmVjdCgpXG4gIHNlYXJjaFByb2R1Y3RzJDogT2JzZXJ2YWJsZTxcbiAgICB8IHByb2R1Y3RzU2VhcmNoQWN0aW9ucy5TZWFyY2hQcm9kdWN0c1N1Y2Nlc3NcbiAgICB8IHByb2R1Y3RzU2VhcmNoQWN0aW9ucy5TZWFyY2hQcm9kdWN0c0ZhaWxcbiAgPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUocHJvZHVjdHNTZWFyY2hBY3Rpb25zLlNFQVJDSF9QUk9EVUNUUyksXG4gICAgZ3JvdXBCeSgoYWN0aW9uOiBwcm9kdWN0c1NlYXJjaEFjdGlvbnMuU2VhcmNoUHJvZHVjdHMpID0+IGFjdGlvbi5hdXhpbGlhcnkpLFxuICAgIG1lcmdlTWFwKGdyb3VwID0+XG4gICAgICBncm91cC5waXBlKFxuICAgICAgICBzd2l0Y2hNYXAoKGFjdGlvbjogcHJvZHVjdHNTZWFyY2hBY3Rpb25zLlNlYXJjaFByb2R1Y3RzKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMucHJvZHVjdFNlYXJjaENvbm5lY3RvclxuICAgICAgICAgICAgLnNlYXJjaChhY3Rpb24ucGF5bG9hZC5xdWVyeVRleHQsIGFjdGlvbi5wYXlsb2FkLnNlYXJjaENvbmZpZylcbiAgICAgICAgICAgIC5waXBlKFxuICAgICAgICAgICAgICBtYXAoZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBwcm9kdWN0c1NlYXJjaEFjdGlvbnMuU2VhcmNoUHJvZHVjdHNTdWNjZXNzKFxuICAgICAgICAgICAgICAgICAgZGF0YSxcbiAgICAgICAgICAgICAgICAgIGFjdGlvbi5hdXhpbGlhcnlcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PlxuICAgICAgICAgICAgICAgIG9mKFxuICAgICAgICAgICAgICAgICAgbmV3IHByb2R1Y3RzU2VhcmNoQWN0aW9ucy5TZWFyY2hQcm9kdWN0c0ZhaWwoXG4gICAgICAgICAgICAgICAgICAgIG1ha2VFcnJvclNlcmlhbGl6YWJsZShlcnJvciksXG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbi5hdXhpbGlhcnlcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICk7XG4gICAgICAgIH0pXG4gICAgICApXG4gICAgKVxuICApO1xuXG4gIEBFZmZlY3QoKVxuICBnZXRQcm9kdWN0U3VnZ2VzdGlvbnMkOiBPYnNlcnZhYmxlPFxuICAgIHwgcHJvZHVjdHNTZWFyY2hBY3Rpb25zLkdldFByb2R1Y3RTdWdnZXN0aW9uc1N1Y2Nlc3NcbiAgICB8IHByb2R1Y3RzU2VhcmNoQWN0aW9ucy5HZXRQcm9kdWN0U3VnZ2VzdGlvbnNGYWlsXG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKHByb2R1Y3RzU2VhcmNoQWN0aW9ucy5HRVRfUFJPRFVDVF9TVUdHRVNUSU9OUyksXG4gICAgbWFwKFxuICAgICAgKGFjdGlvbjogcHJvZHVjdHNTZWFyY2hBY3Rpb25zLkdldFByb2R1Y3RTdWdnZXN0aW9ucykgPT4gYWN0aW9uLnBheWxvYWRcbiAgICApLFxuICAgIHN3aXRjaE1hcChwYXlsb2FkID0+IHtcbiAgICAgIHJldHVybiB0aGlzLnByb2R1Y3RTZWFyY2hDb25uZWN0b3JcbiAgICAgICAgLmdldFN1Z2dlc3Rpb25zKHBheWxvYWQudGVybSwgcGF5bG9hZC5zZWFyY2hDb25maWcucGFnZVNpemUpXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIG1hcChzdWdnZXN0aW9ucyA9PiB7XG4gICAgICAgICAgICBpZiAoc3VnZ2VzdGlvbnMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICByZXR1cm4gbmV3IHByb2R1Y3RzU2VhcmNoQWN0aW9ucy5HZXRQcm9kdWN0U3VnZ2VzdGlvbnNTdWNjZXNzKFtdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBuZXcgcHJvZHVjdHNTZWFyY2hBY3Rpb25zLkdldFByb2R1Y3RTdWdnZXN0aW9uc1N1Y2Nlc3MoXG4gICAgICAgICAgICAgIHN1Z2dlc3Rpb25zXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT5cbiAgICAgICAgICAgIG9mKFxuICAgICAgICAgICAgICBuZXcgcHJvZHVjdHNTZWFyY2hBY3Rpb25zLkdldFByb2R1Y3RTdWdnZXN0aW9uc0ZhaWwoXG4gICAgICAgICAgICAgICAgbWFrZUVycm9yU2VyaWFsaXphYmxlKGVycm9yKVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgICApO1xuICAgIH0pXG4gICk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9ucyxcbiAgICBwcml2YXRlIHByb2R1Y3RTZWFyY2hDb25uZWN0b3I6IFByb2R1Y3RTZWFyY2hDb25uZWN0b3JcbiAgKSB7fVxufVxuIl19