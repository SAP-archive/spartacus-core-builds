/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
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
        this.searchProducts$ = this.actions$.pipe(ofType(productsSearchActions.SEARCH_PRODUCTS), switchMap((action) => {
            return this.productSearchConnector
                .search(action.payload.queryText, action.payload.searchConfig)
                .pipe(map(data => {
                return new productsSearchActions.SearchProductsSuccess(data, action.auxiliary);
            }), catchError(error => of(new productsSearchActions.SearchProductsFail(error, action.auxiliary))));
        }));
        this.getProductSuggestions$ = this.actions$.pipe(ofType(productsSearchActions.GET_PRODUCT_SUGGESTIONS), map((action) => action.payload), switchMap(payload => {
            return this.productSearchConnector
                .getSuggestions(payload.term, payload.searchConfig.pageSize)
                .pipe(map(data => {
                if (data.suggestions === undefined) {
                    return new productsSearchActions.GetProductSuggestionsSuccess([]);
                }
                return new productsSearchActions.GetProductSuggestionsSuccess(data.suggestions);
            }), catchError(error => of(new productsSearchActions.GetProductSuggestionsFail(error))));
        }));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1zZWFyY2guZWZmZWN0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3Byb2R1Y3Qvc3RvcmUvZWZmZWN0cy9wcm9kdWN0LXNlYXJjaC5lZmZlY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV4RCxPQUFPLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsVUFBVSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU1RCxPQUFPLEtBQUsscUJBQXFCLE1BQU0sa0NBQWtDLENBQUM7QUFDMUUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFHMUYsTUFBTSxPQUFPLHFCQUFxQjs7Ozs7SUF5RGhDLFlBQ1UsUUFBaUIsRUFDakIsc0JBQThDO1FBRDlDLGFBQVEsR0FBUixRQUFRLENBQVM7UUFDakIsMkJBQXNCLEdBQXRCLHNCQUFzQixDQUF3QjtRQXpEeEQsb0JBQWUsR0FHWCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDcEIsTUFBTSxDQUFDLHFCQUFxQixDQUFDLGVBQWUsQ0FBQyxFQUM3QyxTQUFTLENBQUMsQ0FBQyxNQUE0QyxFQUFFLEVBQUU7WUFDekQsT0FBTyxJQUFJLENBQUMsc0JBQXNCO2lCQUMvQixNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUM7aUJBQzdELElBQUksQ0FDSCxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ1QsT0FBTyxJQUFJLHFCQUFxQixDQUFDLHFCQUFxQixDQUNwRCxJQUFJLEVBQ0osTUFBTSxDQUFDLFNBQVMsQ0FDakIsQ0FBQztZQUNKLENBQUMsQ0FBQyxFQUNGLFVBQVUsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUNqQixFQUFFLENBQ0EsSUFBSSxxQkFBcUIsQ0FBQyxrQkFBa0IsQ0FDMUMsS0FBSyxFQUNMLE1BQU0sQ0FBQyxTQUFTLENBQ2pCLENBQ0YsQ0FDRixDQUNGLENBQUM7UUFDTixDQUFDLENBQUMsQ0FDSCxDQUFDO1FBR0YsMkJBQXNCLEdBR2xCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUNwQixNQUFNLENBQUMscUJBQXFCLENBQUMsdUJBQXVCLENBQUMsRUFDckQsR0FBRyxDQUNELENBQUMsTUFBbUQsRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FDeEUsRUFDRCxTQUFTLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDbEIsT0FBTyxJQUFJLENBQUMsc0JBQXNCO2lCQUMvQixjQUFjLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQztpQkFDM0QsSUFBSSxDQUNILEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDVCxJQUFJLElBQUksQ0FBQyxXQUFXLEtBQUssU0FBUyxFQUFFO29CQUNsQyxPQUFPLElBQUkscUJBQXFCLENBQUMsNEJBQTRCLENBQUMsRUFBRSxDQUFDLENBQUM7aUJBQ25FO2dCQUNELE9BQU8sSUFBSSxxQkFBcUIsQ0FBQyw0QkFBNEIsQ0FDM0QsSUFBSSxDQUFDLFdBQVcsQ0FDakIsQ0FBQztZQUNKLENBQUMsQ0FBQyxFQUNGLFVBQVUsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUNqQixFQUFFLENBQUMsSUFBSSxxQkFBcUIsQ0FBQyx5QkFBeUIsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUMvRCxDQUNGLENBQUM7UUFDTixDQUFDLENBQUMsQ0FDSCxDQUFDO0lBS0MsQ0FBQzs7O1lBN0RMLFVBQVU7Ozs7WUFSRixPQUFPO1lBTVAsc0JBQXNCOztBQUs3QjtJQURDLE1BQU0sRUFBRTtzQ0FDUSxVQUFVOzhEQXlCekI7QUFHRjtJQURDLE1BQU0sRUFBRTtzQ0FDZSxVQUFVO3FFQXlCaEM7OztJQXRERixnREEwQkU7O0lBRUYsdURBMEJFOzs7OztJQUdBLHlDQUF5Qjs7Ozs7SUFDekIsdURBQXNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QsIG9mVHlwZSB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgY2F0Y2hFcnJvciwgbWFwLCBzd2l0Y2hNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCAqIGFzIHByb2R1Y3RzU2VhcmNoQWN0aW9ucyBmcm9tICcuLi9hY3Rpb25zL3Byb2R1Y3Qtc2VhcmNoLmFjdGlvbic7XG5pbXBvcnQgeyBQcm9kdWN0U2VhcmNoQ29ubmVjdG9yIH0gZnJvbSAnLi4vLi4vY29ubmVjdG9ycy9zZWFyY2gvcHJvZHVjdC1zZWFyY2guY29ubmVjdG9yJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFByb2R1Y3RzU2VhcmNoRWZmZWN0cyB7XG4gIEBFZmZlY3QoKVxuICBzZWFyY2hQcm9kdWN0cyQ6IE9ic2VydmFibGU8XG4gICAgfCBwcm9kdWN0c1NlYXJjaEFjdGlvbnMuU2VhcmNoUHJvZHVjdHNTdWNjZXNzXG4gICAgfCBwcm9kdWN0c1NlYXJjaEFjdGlvbnMuU2VhcmNoUHJvZHVjdHNGYWlsXG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKHByb2R1Y3RzU2VhcmNoQWN0aW9ucy5TRUFSQ0hfUFJPRFVDVFMpLFxuICAgIHN3aXRjaE1hcCgoYWN0aW9uOiBwcm9kdWN0c1NlYXJjaEFjdGlvbnMuU2VhcmNoUHJvZHVjdHMpID0+IHtcbiAgICAgIHJldHVybiB0aGlzLnByb2R1Y3RTZWFyY2hDb25uZWN0b3JcbiAgICAgICAgLnNlYXJjaChhY3Rpb24ucGF5bG9hZC5xdWVyeVRleHQsIGFjdGlvbi5wYXlsb2FkLnNlYXJjaENvbmZpZylcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgbWFwKGRhdGEgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBwcm9kdWN0c1NlYXJjaEFjdGlvbnMuU2VhcmNoUHJvZHVjdHNTdWNjZXNzKFxuICAgICAgICAgICAgICBkYXRhLFxuICAgICAgICAgICAgICBhY3Rpb24uYXV4aWxpYXJ5XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT5cbiAgICAgICAgICAgIG9mKFxuICAgICAgICAgICAgICBuZXcgcHJvZHVjdHNTZWFyY2hBY3Rpb25zLlNlYXJjaFByb2R1Y3RzRmFpbChcbiAgICAgICAgICAgICAgICBlcnJvcixcbiAgICAgICAgICAgICAgICBhY3Rpb24uYXV4aWxpYXJ5XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgfSlcbiAgKTtcblxuICBARWZmZWN0KClcbiAgZ2V0UHJvZHVjdFN1Z2dlc3Rpb25zJDogT2JzZXJ2YWJsZTxcbiAgICB8IHByb2R1Y3RzU2VhcmNoQWN0aW9ucy5HZXRQcm9kdWN0U3VnZ2VzdGlvbnNTdWNjZXNzXG4gICAgfCBwcm9kdWN0c1NlYXJjaEFjdGlvbnMuR2V0UHJvZHVjdFN1Z2dlc3Rpb25zRmFpbFxuICA+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShwcm9kdWN0c1NlYXJjaEFjdGlvbnMuR0VUX1BST0RVQ1RfU1VHR0VTVElPTlMpLFxuICAgIG1hcChcbiAgICAgIChhY3Rpb246IHByb2R1Y3RzU2VhcmNoQWN0aW9ucy5HZXRQcm9kdWN0U3VnZ2VzdGlvbnMpID0+IGFjdGlvbi5wYXlsb2FkXG4gICAgKSxcbiAgICBzd2l0Y2hNYXAocGF5bG9hZCA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5wcm9kdWN0U2VhcmNoQ29ubmVjdG9yXG4gICAgICAgIC5nZXRTdWdnZXN0aW9ucyhwYXlsb2FkLnRlcm0sIHBheWxvYWQuc2VhcmNoQ29uZmlnLnBhZ2VTaXplKVxuICAgICAgICAucGlwZShcbiAgICAgICAgICBtYXAoZGF0YSA9PiB7XG4gICAgICAgICAgICBpZiAoZGF0YS5zdWdnZXN0aW9ucyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgIHJldHVybiBuZXcgcHJvZHVjdHNTZWFyY2hBY3Rpb25zLkdldFByb2R1Y3RTdWdnZXN0aW9uc1N1Y2Nlc3MoW10pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG5ldyBwcm9kdWN0c1NlYXJjaEFjdGlvbnMuR2V0UHJvZHVjdFN1Z2dlc3Rpb25zU3VjY2VzcyhcbiAgICAgICAgICAgICAgZGF0YS5zdWdnZXN0aW9uc1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+XG4gICAgICAgICAgICBvZihuZXcgcHJvZHVjdHNTZWFyY2hBY3Rpb25zLkdldFByb2R1Y3RTdWdnZXN0aW9uc0ZhaWwoZXJyb3IpKVxuICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICB9KVxuICApO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnMsXG4gICAgcHJpdmF0ZSBwcm9kdWN0U2VhcmNoQ29ubmVjdG9yOiBQcm9kdWN0U2VhcmNoQ29ubmVjdG9yXG4gICkge31cbn1cbiJdfQ==