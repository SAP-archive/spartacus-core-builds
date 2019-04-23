/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { map, catchError, switchMap } from 'rxjs/operators';
import * as productsSearchActions from '../actions/product-search.action';
import { ProductImageNormalizer } from '../../occ/converters/product-image-normalizer';
import { ProductSearchLoaderService } from '../../occ/product-search.service';
export class ProductsSearchEffects {
    /**
     * @param {?} actions$
     * @param {?} occProductSearchService
     * @param {?} productImageConverter
     */
    constructor(actions$, occProductSearchService, productImageConverter) {
        this.actions$ = actions$;
        this.occProductSearchService = occProductSearchService;
        this.productImageConverter = productImageConverter;
        this.searchProducts$ = this.actions$.pipe(ofType(productsSearchActions.SEARCH_PRODUCTS), switchMap((action) => {
            return this.occProductSearchService
                .loadSearch(action.payload.queryText, action.payload.searchConfig)
                .pipe(map(data => {
                this.productImageConverter.convertList(data.products);
                return new productsSearchActions.SearchProductsSuccess(data, action.auxiliary);
            }), catchError(error => of(new productsSearchActions.SearchProductsFail(error, action.auxiliary))));
        }));
        this.getProductSuggestions$ = this.actions$.pipe(ofType(productsSearchActions.GET_PRODUCT_SUGGESTIONS), map((action) => action.payload), switchMap(payload => {
            return this.occProductSearchService
                .loadSuggestions(payload.term, payload.searchConfig.pageSize)
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
    { type: ProductSearchLoaderService },
    { type: ProductImageNormalizer }
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
    ProductsSearchEffects.prototype.occProductSearchService;
    /**
     * @type {?}
     * @private
     */
    ProductsSearchEffects.prototype.productImageConverter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1zZWFyY2guZWZmZWN0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3Byb2R1Y3Qvc3RvcmUvZWZmZWN0cy9wcm9kdWN0LXNlYXJjaC5lZmZlY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV4RCxPQUFPLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsR0FBRyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU1RCxPQUFPLEtBQUsscUJBQXFCLE1BQU0sa0NBQWtDLENBQUM7QUFDMUUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDdkYsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFHOUUsTUFBTSxPQUFPLHFCQUFxQjs7Ozs7O0lBMERoQyxZQUNVLFFBQWlCLEVBQ2pCLHVCQUFtRCxFQUNuRCxxQkFBNkM7UUFGN0MsYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUNqQiw0QkFBdUIsR0FBdkIsdUJBQXVCLENBQTRCO1FBQ25ELDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBd0I7UUEzRHZELG9CQUFlLEdBR1gsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ3BCLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxlQUFlLENBQUMsRUFDN0MsU0FBUyxDQUFDLENBQUMsTUFBNEMsRUFBRSxFQUFFO1lBQ3pELE9BQU8sSUFBSSxDQUFDLHVCQUF1QjtpQkFDaEMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDO2lCQUNqRSxJQUFJLENBQ0gsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUNULElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUN0RCxPQUFPLElBQUkscUJBQXFCLENBQUMscUJBQXFCLENBQ3BELElBQUksRUFDSixNQUFNLENBQUMsU0FBUyxDQUNqQixDQUFDO1lBQ0osQ0FBQyxDQUFDLEVBQ0YsVUFBVSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQ2pCLEVBQUUsQ0FDQSxJQUFJLHFCQUFxQixDQUFDLGtCQUFrQixDQUMxQyxLQUFLLEVBQ0wsTUFBTSxDQUFDLFNBQVMsQ0FDakIsQ0FDRixDQUNGLENBQ0YsQ0FBQztRQUNOLENBQUMsQ0FBQyxDQUNILENBQUM7UUFHRiwyQkFBc0IsR0FHbEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ3BCLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyx1QkFBdUIsQ0FBQyxFQUNyRCxHQUFHLENBQ0QsQ0FBQyxNQUFtRCxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUN4RSxFQUNELFNBQVMsQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUNsQixPQUFPLElBQUksQ0FBQyx1QkFBdUI7aUJBQ2hDLGVBQWUsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDO2lCQUM1RCxJQUFJLENBQ0gsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUNULElBQUksSUFBSSxDQUFDLFdBQVcsS0FBSyxTQUFTLEVBQUU7b0JBQ2xDLE9BQU8sSUFBSSxxQkFBcUIsQ0FBQyw0QkFBNEIsQ0FBQyxFQUFFLENBQUMsQ0FBQztpQkFDbkU7Z0JBQ0QsT0FBTyxJQUFJLHFCQUFxQixDQUFDLDRCQUE0QixDQUMzRCxJQUFJLENBQUMsV0FBVyxDQUNqQixDQUFDO1lBQ0osQ0FBQyxDQUFDLEVBQ0YsVUFBVSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQ2pCLEVBQUUsQ0FBQyxJQUFJLHFCQUFxQixDQUFDLHlCQUF5QixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQy9ELENBQ0YsQ0FBQztRQUNOLENBQUMsQ0FBQyxDQUNILENBQUM7SUFNQyxDQUFDOzs7WUEvREwsVUFBVTs7OztZQVRNLE9BQU87WUFPZiwwQkFBMEI7WUFEMUIsc0JBQXNCOztBQU03QjtJQURDLE1BQU0sRUFBRTtzQ0FDUSxVQUFVOzhEQTBCekI7QUFHRjtJQURDLE1BQU0sRUFBRTtzQ0FDZSxVQUFVO3FFQXlCaEM7OztJQXZERixnREEyQkU7O0lBRUYsdURBMEJFOzs7OztJQUdBLHlDQUF5Qjs7Ozs7SUFDekIsd0RBQTJEOzs7OztJQUMzRCxzREFBcUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEVmZmVjdCwgQWN0aW9ucywgb2ZUeXBlIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5cbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAsIGNhdGNoRXJyb3IsIHN3aXRjaE1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0ICogYXMgcHJvZHVjdHNTZWFyY2hBY3Rpb25zIGZyb20gJy4uL2FjdGlvbnMvcHJvZHVjdC1zZWFyY2guYWN0aW9uJztcbmltcG9ydCB7IFByb2R1Y3RJbWFnZU5vcm1hbGl6ZXIgfSBmcm9tICcuLi8uLi9vY2MvY29udmVydGVycy9wcm9kdWN0LWltYWdlLW5vcm1hbGl6ZXInO1xuaW1wb3J0IHsgUHJvZHVjdFNlYXJjaExvYWRlclNlcnZpY2UgfSBmcm9tICcuLi8uLi9vY2MvcHJvZHVjdC1zZWFyY2guc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBQcm9kdWN0c1NlYXJjaEVmZmVjdHMge1xuICBARWZmZWN0KClcbiAgc2VhcmNoUHJvZHVjdHMkOiBPYnNlcnZhYmxlPFxuICAgIHwgcHJvZHVjdHNTZWFyY2hBY3Rpb25zLlNlYXJjaFByb2R1Y3RzU3VjY2Vzc1xuICAgIHwgcHJvZHVjdHNTZWFyY2hBY3Rpb25zLlNlYXJjaFByb2R1Y3RzRmFpbFxuICA+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShwcm9kdWN0c1NlYXJjaEFjdGlvbnMuU0VBUkNIX1BST0RVQ1RTKSxcbiAgICBzd2l0Y2hNYXAoKGFjdGlvbjogcHJvZHVjdHNTZWFyY2hBY3Rpb25zLlNlYXJjaFByb2R1Y3RzKSA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5vY2NQcm9kdWN0U2VhcmNoU2VydmljZVxuICAgICAgICAubG9hZFNlYXJjaChhY3Rpb24ucGF5bG9hZC5xdWVyeVRleHQsIGFjdGlvbi5wYXlsb2FkLnNlYXJjaENvbmZpZylcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgbWFwKGRhdGEgPT4ge1xuICAgICAgICAgICAgdGhpcy5wcm9kdWN0SW1hZ2VDb252ZXJ0ZXIuY29udmVydExpc3QoZGF0YS5wcm9kdWN0cyk7XG4gICAgICAgICAgICByZXR1cm4gbmV3IHByb2R1Y3RzU2VhcmNoQWN0aW9ucy5TZWFyY2hQcm9kdWN0c1N1Y2Nlc3MoXG4gICAgICAgICAgICAgIGRhdGEsXG4gICAgICAgICAgICAgIGFjdGlvbi5hdXhpbGlhcnlcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PlxuICAgICAgICAgICAgb2YoXG4gICAgICAgICAgICAgIG5ldyBwcm9kdWN0c1NlYXJjaEFjdGlvbnMuU2VhcmNoUHJvZHVjdHNGYWlsKFxuICAgICAgICAgICAgICAgIGVycm9yLFxuICAgICAgICAgICAgICAgIGFjdGlvbi5hdXhpbGlhcnlcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICB9KVxuICApO1xuXG4gIEBFZmZlY3QoKVxuICBnZXRQcm9kdWN0U3VnZ2VzdGlvbnMkOiBPYnNlcnZhYmxlPFxuICAgIHwgcHJvZHVjdHNTZWFyY2hBY3Rpb25zLkdldFByb2R1Y3RTdWdnZXN0aW9uc1N1Y2Nlc3NcbiAgICB8IHByb2R1Y3RzU2VhcmNoQWN0aW9ucy5HZXRQcm9kdWN0U3VnZ2VzdGlvbnNGYWlsXG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKHByb2R1Y3RzU2VhcmNoQWN0aW9ucy5HRVRfUFJPRFVDVF9TVUdHRVNUSU9OUyksXG4gICAgbWFwKFxuICAgICAgKGFjdGlvbjogcHJvZHVjdHNTZWFyY2hBY3Rpb25zLkdldFByb2R1Y3RTdWdnZXN0aW9ucykgPT4gYWN0aW9uLnBheWxvYWRcbiAgICApLFxuICAgIHN3aXRjaE1hcChwYXlsb2FkID0+IHtcbiAgICAgIHJldHVybiB0aGlzLm9jY1Byb2R1Y3RTZWFyY2hTZXJ2aWNlXG4gICAgICAgIC5sb2FkU3VnZ2VzdGlvbnMocGF5bG9hZC50ZXJtLCBwYXlsb2FkLnNlYXJjaENvbmZpZy5wYWdlU2l6ZSlcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgbWFwKGRhdGEgPT4ge1xuICAgICAgICAgICAgaWYgKGRhdGEuc3VnZ2VzdGlvbnMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICByZXR1cm4gbmV3IHByb2R1Y3RzU2VhcmNoQWN0aW9ucy5HZXRQcm9kdWN0U3VnZ2VzdGlvbnNTdWNjZXNzKFtdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBuZXcgcHJvZHVjdHNTZWFyY2hBY3Rpb25zLkdldFByb2R1Y3RTdWdnZXN0aW9uc1N1Y2Nlc3MoXG4gICAgICAgICAgICAgIGRhdGEuc3VnZ2VzdGlvbnNcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PlxuICAgICAgICAgICAgb2YobmV3IHByb2R1Y3RzU2VhcmNoQWN0aW9ucy5HZXRQcm9kdWN0U3VnZ2VzdGlvbnNGYWlsKGVycm9yKSlcbiAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgfSlcbiAgKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zLFxuICAgIHByaXZhdGUgb2NjUHJvZHVjdFNlYXJjaFNlcnZpY2U6IFByb2R1Y3RTZWFyY2hMb2FkZXJTZXJ2aWNlLFxuICAgIHByaXZhdGUgcHJvZHVjdEltYWdlQ29udmVydGVyOiBQcm9kdWN0SW1hZ2VOb3JtYWxpemVyXG4gICkge31cbn1cbiJdfQ==