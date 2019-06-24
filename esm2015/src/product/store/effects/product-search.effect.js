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
            error => of(new productsSearchActions.SearchProductsFail(makeErrorSerializable(error), action.auxiliary)))));
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
            error => of(new productsSearchActions.GetProductSuggestionsFail(makeErrorSerializable(error))))));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1zZWFyY2guZWZmZWN0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3Byb2R1Y3Qvc3RvcmUvZWZmZWN0cy9wcm9kdWN0LXNlYXJjaC5lZmZlY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4RCxPQUFPLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQy9FLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBQzFGLE9BQU8sS0FBSyxxQkFBcUIsTUFBTSxrQ0FBa0MsQ0FBQztBQUcxRSxNQUFNLE9BQU8scUJBQXFCOzs7OztJQWtFaEMsWUFDVSxRQUFpQixFQUNqQixzQkFBOEM7UUFEOUMsYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUNqQiwyQkFBc0IsR0FBdEIsc0JBQXNCLENBQXdCO1FBbEV4RCxvQkFBZSxHQUdYLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUNwQixNQUFNLENBQUMscUJBQXFCLENBQUMsZUFBZSxDQUFDLEVBQzdDLE9BQU87Ozs7UUFBQyxDQUFDLE1BQTRDLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUMsRUFDM0UsUUFBUTs7OztRQUFDLEtBQUssQ0FBQyxFQUFFLENBQ2YsS0FBSyxDQUFDLElBQUksQ0FDUixTQUFTOzs7O1FBQUMsQ0FBQyxNQUE0QyxFQUFFLEVBQUU7WUFDekQsT0FBTyxJQUFJLENBQUMsc0JBQXNCO2lCQUMvQixNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUM7aUJBQzdELElBQUksQ0FDSCxHQUFHOzs7O1lBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ1QsT0FBTyxJQUFJLHFCQUFxQixDQUFDLHFCQUFxQixDQUNwRCxJQUFJLEVBQ0osTUFBTSxDQUFDLFNBQVMsQ0FDakIsQ0FBQztZQUNKLENBQUMsRUFBQyxFQUNGLFVBQVU7Ozs7WUFBQyxLQUFLLENBQUMsRUFBRSxDQUNqQixFQUFFLENBQ0EsSUFBSSxxQkFBcUIsQ0FBQyxrQkFBa0IsQ0FDMUMscUJBQXFCLENBQUMsS0FBSyxDQUFDLEVBQzVCLE1BQU0sQ0FBQyxTQUFTLENBQ2pCLENBQ0YsRUFDRixDQUNGLENBQUM7UUFDTixDQUFDLEVBQUMsQ0FDSCxFQUNGLENBQ0YsQ0FBQztRQUdGLDJCQUFzQixHQUdsQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDcEIsTUFBTSxDQUFDLHFCQUFxQixDQUFDLHVCQUF1QixDQUFDLEVBQ3JELEdBQUc7Ozs7UUFDRCxDQUFDLE1BQW1ELEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQ3hFLEVBQ0QsU0FBUzs7OztRQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ2xCLE9BQU8sSUFBSSxDQUFDLHNCQUFzQjtpQkFDL0IsY0FBYyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUM7aUJBQzNELElBQUksQ0FDSCxHQUFHOzs7O1lBQUMsV0FBVyxDQUFDLEVBQUU7Z0JBQ2hCLElBQUksV0FBVyxLQUFLLFNBQVMsRUFBRTtvQkFDN0IsT0FBTyxJQUFJLHFCQUFxQixDQUFDLDRCQUE0QixDQUFDLEVBQUUsQ0FBQyxDQUFDO2lCQUNuRTtnQkFDRCxPQUFPLElBQUkscUJBQXFCLENBQUMsNEJBQTRCLENBQzNELFdBQVcsQ0FDWixDQUFDO1lBQ0osQ0FBQyxFQUFDLEVBQ0YsVUFBVTs7OztZQUFDLEtBQUssQ0FBQyxFQUFFLENBQ2pCLEVBQUUsQ0FDQSxJQUFJLHFCQUFxQixDQUFDLHlCQUF5QixDQUNqRCxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FDN0IsQ0FDRixFQUNGLENBQ0YsQ0FBQztRQUNOLENBQUMsRUFBQyxDQUNILENBQUM7SUFLQyxDQUFDOzs7WUF0RUwsVUFBVTs7OztZQVBGLE9BQU87WUFJUCxzQkFBc0I7O0FBTTdCO0lBREMsTUFBTSxFQUFFO3NDQUNRLFVBQVU7OERBOEJ6QjtBQUdGO0lBREMsTUFBTSxFQUFFO3NDQUNlLFVBQVU7cUVBNkJoQzs7O0lBL0RGLGdEQStCRTs7SUFFRix1REE4QkU7Ozs7O0lBR0EseUNBQXlCOzs7OztJQUN6Qix1REFBc0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QsIG9mVHlwZSB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGNhdGNoRXJyb3IsIGdyb3VwQnksIG1hcCwgbWVyZ2VNYXAsIHN3aXRjaE1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IG1ha2VFcnJvclNlcmlhbGl6YWJsZSB9IGZyb20gJy4uLy4uLy4uL3V0aWwvc2VyaWFsaXphdGlvbi11dGlscyc7XG5pbXBvcnQgeyBQcm9kdWN0U2VhcmNoQ29ubmVjdG9yIH0gZnJvbSAnLi4vLi4vY29ubmVjdG9ycy9zZWFyY2gvcHJvZHVjdC1zZWFyY2guY29ubmVjdG9yJztcbmltcG9ydCAqIGFzIHByb2R1Y3RzU2VhcmNoQWN0aW9ucyBmcm9tICcuLi9hY3Rpb25zL3Byb2R1Y3Qtc2VhcmNoLmFjdGlvbic7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBQcm9kdWN0c1NlYXJjaEVmZmVjdHMge1xuICBARWZmZWN0KClcbiAgc2VhcmNoUHJvZHVjdHMkOiBPYnNlcnZhYmxlPFxuICAgIHwgcHJvZHVjdHNTZWFyY2hBY3Rpb25zLlNlYXJjaFByb2R1Y3RzU3VjY2Vzc1xuICAgIHwgcHJvZHVjdHNTZWFyY2hBY3Rpb25zLlNlYXJjaFByb2R1Y3RzRmFpbFxuICA+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShwcm9kdWN0c1NlYXJjaEFjdGlvbnMuU0VBUkNIX1BST0RVQ1RTKSxcbiAgICBncm91cEJ5KChhY3Rpb246IHByb2R1Y3RzU2VhcmNoQWN0aW9ucy5TZWFyY2hQcm9kdWN0cykgPT4gYWN0aW9uLmF1eGlsaWFyeSksXG4gICAgbWVyZ2VNYXAoZ3JvdXAgPT5cbiAgICAgIGdyb3VwLnBpcGUoXG4gICAgICAgIHN3aXRjaE1hcCgoYWN0aW9uOiBwcm9kdWN0c1NlYXJjaEFjdGlvbnMuU2VhcmNoUHJvZHVjdHMpID0+IHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5wcm9kdWN0U2VhcmNoQ29ubmVjdG9yXG4gICAgICAgICAgICAuc2VhcmNoKGFjdGlvbi5wYXlsb2FkLnF1ZXJ5VGV4dCwgYWN0aW9uLnBheWxvYWQuc2VhcmNoQ29uZmlnKVxuICAgICAgICAgICAgLnBpcGUoXG4gICAgICAgICAgICAgIG1hcChkYXRhID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IHByb2R1Y3RzU2VhcmNoQWN0aW9ucy5TZWFyY2hQcm9kdWN0c1N1Y2Nlc3MoXG4gICAgICAgICAgICAgICAgICBkYXRhLFxuICAgICAgICAgICAgICAgICAgYWN0aW9uLmF1eGlsaWFyeVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+XG4gICAgICAgICAgICAgICAgb2YoXG4gICAgICAgICAgICAgICAgICBuZXcgcHJvZHVjdHNTZWFyY2hBY3Rpb25zLlNlYXJjaFByb2R1Y3RzRmFpbChcbiAgICAgICAgICAgICAgICAgICAgbWFrZUVycm9yU2VyaWFsaXphYmxlKGVycm9yKSxcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uLmF1eGlsaWFyeVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSlcbiAgICAgIClcbiAgICApXG4gICk7XG5cbiAgQEVmZmVjdCgpXG4gIGdldFByb2R1Y3RTdWdnZXN0aW9ucyQ6IE9ic2VydmFibGU8XG4gICAgfCBwcm9kdWN0c1NlYXJjaEFjdGlvbnMuR2V0UHJvZHVjdFN1Z2dlc3Rpb25zU3VjY2Vzc1xuICAgIHwgcHJvZHVjdHNTZWFyY2hBY3Rpb25zLkdldFByb2R1Y3RTdWdnZXN0aW9uc0ZhaWxcbiAgPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUocHJvZHVjdHNTZWFyY2hBY3Rpb25zLkdFVF9QUk9EVUNUX1NVR0dFU1RJT05TKSxcbiAgICBtYXAoXG4gICAgICAoYWN0aW9uOiBwcm9kdWN0c1NlYXJjaEFjdGlvbnMuR2V0UHJvZHVjdFN1Z2dlc3Rpb25zKSA9PiBhY3Rpb24ucGF5bG9hZFxuICAgICksXG4gICAgc3dpdGNoTWFwKHBheWxvYWQgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMucHJvZHVjdFNlYXJjaENvbm5lY3RvclxuICAgICAgICAuZ2V0U3VnZ2VzdGlvbnMocGF5bG9hZC50ZXJtLCBwYXlsb2FkLnNlYXJjaENvbmZpZy5wYWdlU2l6ZSlcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgbWFwKHN1Z2dlc3Rpb25zID0+IHtcbiAgICAgICAgICAgIGlmIChzdWdnZXN0aW9ucyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgIHJldHVybiBuZXcgcHJvZHVjdHNTZWFyY2hBY3Rpb25zLkdldFByb2R1Y3RTdWdnZXN0aW9uc1N1Y2Nlc3MoW10pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG5ldyBwcm9kdWN0c1NlYXJjaEFjdGlvbnMuR2V0UHJvZHVjdFN1Z2dlc3Rpb25zU3VjY2VzcyhcbiAgICAgICAgICAgICAgc3VnZ2VzdGlvbnNcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PlxuICAgICAgICAgICAgb2YoXG4gICAgICAgICAgICAgIG5ldyBwcm9kdWN0c1NlYXJjaEFjdGlvbnMuR2V0UHJvZHVjdFN1Z2dlc3Rpb25zRmFpbChcbiAgICAgICAgICAgICAgICBtYWtlRXJyb3JTZXJpYWxpemFibGUoZXJyb3IpXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgfSlcbiAgKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zLFxuICAgIHByaXZhdGUgcHJvZHVjdFNlYXJjaENvbm5lY3RvcjogUHJvZHVjdFNlYXJjaENvbm5lY3RvclxuICApIHt9XG59XG4iXX0=