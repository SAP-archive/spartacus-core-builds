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
import { ProductImageConverterService } from '../converters/product-image-converter.service';
import { ProductSearchLoaderService } from '../../occ/product-search.service';
var ProductsSearchEffects = /** @class */ (function () {
    function ProductsSearchEffects(actions$, occProductSearchService, productImageConverter) {
        var _this = this;
        this.actions$ = actions$;
        this.occProductSearchService = occProductSearchService;
        this.productImageConverter = productImageConverter;
        this.searchProducts$ = this.actions$.pipe(ofType(productsSearchActions.SEARCH_PRODUCTS), switchMap(function (action) {
            return _this.occProductSearchService
                .loadSearch(action.payload.queryText, action.payload.searchConfig)
                .pipe(map(function (data) {
                _this.productImageConverter.convertList(data.products);
                return new productsSearchActions.SearchProductsSuccess(data, action.auxiliary);
            }), catchError(function (error) {
                return of(new productsSearchActions.SearchProductsFail(error, action.auxiliary));
            }));
        }));
        this.getProductSuggestions$ = this.actions$.pipe(ofType(productsSearchActions.GET_PRODUCT_SUGGESTIONS), map(function (action) { return action.payload; }), switchMap(function (payload) {
            return _this.occProductSearchService
                .loadSuggestions(payload.term, payload.searchConfig.pageSize)
                .pipe(map(function (data) {
                if (data.suggestions === undefined) {
                    return new productsSearchActions.GetProductSuggestionsSuccess([]);
                }
                return new productsSearchActions.GetProductSuggestionsSuccess(data.suggestions);
            }), catchError(function (error) {
                return of(new productsSearchActions.GetProductSuggestionsFail(error));
            }));
        }));
    }
    ProductsSearchEffects.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    ProductsSearchEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: ProductSearchLoaderService },
        { type: ProductImageConverterService }
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
    ProductsSearchEffects.prototype.occProductSearchService;
    /**
     * @type {?}
     * @private
     */
    ProductsSearchEffects.prototype.productImageConverter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1zZWFyY2guZWZmZWN0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3Byb2R1Y3Qvc3RvcmUvZWZmZWN0cy9wcm9kdWN0LXNlYXJjaC5lZmZlY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV4RCxPQUFPLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsR0FBRyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU1RCxPQUFPLEtBQUsscUJBQXFCLE1BQU0sa0NBQWtDLENBQUM7QUFDMUUsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDN0YsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFFOUU7SUEyREUsK0JBQ1UsUUFBaUIsRUFDakIsdUJBQW1ELEVBQ25ELHFCQUFtRDtRQUg3RCxpQkFJSTtRQUhNLGFBQVEsR0FBUixRQUFRLENBQVM7UUFDakIsNEJBQXVCLEdBQXZCLHVCQUF1QixDQUE0QjtRQUNuRCwwQkFBcUIsR0FBckIscUJBQXFCLENBQThCO1FBM0Q3RCxvQkFBZSxHQUdYLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUNwQixNQUFNLENBQUMscUJBQXFCLENBQUMsZUFBZSxDQUFDLEVBQzdDLFNBQVMsQ0FBQyxVQUFDLE1BQTRDO1lBQ3JELE9BQU8sS0FBSSxDQUFDLHVCQUF1QjtpQkFDaEMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDO2lCQUNqRSxJQUFJLENBQ0gsR0FBRyxDQUFDLFVBQUEsSUFBSTtnQkFDTixLQUFJLENBQUMscUJBQXFCLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDdEQsT0FBTyxJQUFJLHFCQUFxQixDQUFDLHFCQUFxQixDQUNwRCxJQUFJLEVBQ0osTUFBTSxDQUFDLFNBQVMsQ0FDakIsQ0FBQztZQUNKLENBQUMsQ0FBQyxFQUNGLFVBQVUsQ0FBQyxVQUFBLEtBQUs7Z0JBQ2QsT0FBQSxFQUFFLENBQ0EsSUFBSSxxQkFBcUIsQ0FBQyxrQkFBa0IsQ0FDMUMsS0FBSyxFQUNMLE1BQU0sQ0FBQyxTQUFTLENBQ2pCLENBQ0Y7WUFMRCxDQUtDLENBQ0YsQ0FDRixDQUFDO1FBQ04sQ0FBQyxDQUFDLENBQ0gsQ0FBQztRQUdGLDJCQUFzQixHQUdsQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDcEIsTUFBTSxDQUFDLHFCQUFxQixDQUFDLHVCQUF1QixDQUFDLEVBQ3JELEdBQUcsQ0FDRCxVQUFDLE1BQW1ELElBQUssT0FBQSxNQUFNLENBQUMsT0FBTyxFQUFkLENBQWMsQ0FDeEUsRUFDRCxTQUFTLENBQUMsVUFBQSxPQUFPO1lBQ2YsT0FBTyxLQUFJLENBQUMsdUJBQXVCO2lCQUNoQyxlQUFlLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQztpQkFDNUQsSUFBSSxDQUNILEdBQUcsQ0FBQyxVQUFBLElBQUk7Z0JBQ04sSUFBSSxJQUFJLENBQUMsV0FBVyxLQUFLLFNBQVMsRUFBRTtvQkFDbEMsT0FBTyxJQUFJLHFCQUFxQixDQUFDLDRCQUE0QixDQUFDLEVBQUUsQ0FBQyxDQUFDO2lCQUNuRTtnQkFDRCxPQUFPLElBQUkscUJBQXFCLENBQUMsNEJBQTRCLENBQzNELElBQUksQ0FBQyxXQUFXLENBQ2pCLENBQUM7WUFDSixDQUFDLENBQUMsRUFDRixVQUFVLENBQUMsVUFBQSxLQUFLO2dCQUNkLE9BQUEsRUFBRSxDQUFDLElBQUkscUJBQXFCLENBQUMseUJBQXlCLENBQUMsS0FBSyxDQUFDLENBQUM7WUFBOUQsQ0FBOEQsQ0FDL0QsQ0FDRixDQUFDO1FBQ04sQ0FBQyxDQUFDLENBQ0gsQ0FBQztJQU1DLENBQUM7O2dCQS9ETCxVQUFVOzs7O2dCQVRNLE9BQU87Z0JBT2YsMEJBQTBCO2dCQUQxQiw0QkFBNEI7O0lBTW5DO1FBREMsTUFBTSxFQUFFOzBDQUNRLFVBQVU7a0VBMEJ6QjtJQUdGO1FBREMsTUFBTSxFQUFFOzBDQUNlLFVBQVU7eUVBeUJoQztJQU9KLDRCQUFDO0NBQUEsQUFoRUQsSUFnRUM7U0EvRFkscUJBQXFCOzs7SUFDaEMsZ0RBMkJFOztJQUVGLHVEQTBCRTs7Ozs7SUFHQSx5Q0FBeUI7Ozs7O0lBQ3pCLHdEQUEyRDs7Ozs7SUFDM0Qsc0RBQTJEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBFZmZlY3QsIEFjdGlvbnMsIG9mVHlwZSB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCBjYXRjaEVycm9yLCBzd2l0Y2hNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCAqIGFzIHByb2R1Y3RzU2VhcmNoQWN0aW9ucyBmcm9tICcuLi9hY3Rpb25zL3Byb2R1Y3Qtc2VhcmNoLmFjdGlvbic7XG5pbXBvcnQgeyBQcm9kdWN0SW1hZ2VDb252ZXJ0ZXJTZXJ2aWNlIH0gZnJvbSAnLi4vY29udmVydGVycy9wcm9kdWN0LWltYWdlLWNvbnZlcnRlci5zZXJ2aWNlJztcbmltcG9ydCB7IFByb2R1Y3RTZWFyY2hMb2FkZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vb2NjL3Byb2R1Y3Qtc2VhcmNoLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUHJvZHVjdHNTZWFyY2hFZmZlY3RzIHtcbiAgQEVmZmVjdCgpXG4gIHNlYXJjaFByb2R1Y3RzJDogT2JzZXJ2YWJsZTxcbiAgICB8IHByb2R1Y3RzU2VhcmNoQWN0aW9ucy5TZWFyY2hQcm9kdWN0c1N1Y2Nlc3NcbiAgICB8IHByb2R1Y3RzU2VhcmNoQWN0aW9ucy5TZWFyY2hQcm9kdWN0c0ZhaWxcbiAgPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUocHJvZHVjdHNTZWFyY2hBY3Rpb25zLlNFQVJDSF9QUk9EVUNUUyksXG4gICAgc3dpdGNoTWFwKChhY3Rpb246IHByb2R1Y3RzU2VhcmNoQWN0aW9ucy5TZWFyY2hQcm9kdWN0cykgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMub2NjUHJvZHVjdFNlYXJjaFNlcnZpY2VcbiAgICAgICAgLmxvYWRTZWFyY2goYWN0aW9uLnBheWxvYWQucXVlcnlUZXh0LCBhY3Rpb24ucGF5bG9hZC5zZWFyY2hDb25maWcpXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIG1hcChkYXRhID0+IHtcbiAgICAgICAgICAgIHRoaXMucHJvZHVjdEltYWdlQ29udmVydGVyLmNvbnZlcnRMaXN0KGRhdGEucHJvZHVjdHMpO1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBwcm9kdWN0c1NlYXJjaEFjdGlvbnMuU2VhcmNoUHJvZHVjdHNTdWNjZXNzKFxuICAgICAgICAgICAgICBkYXRhLFxuICAgICAgICAgICAgICBhY3Rpb24uYXV4aWxpYXJ5XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT5cbiAgICAgICAgICAgIG9mKFxuICAgICAgICAgICAgICBuZXcgcHJvZHVjdHNTZWFyY2hBY3Rpb25zLlNlYXJjaFByb2R1Y3RzRmFpbChcbiAgICAgICAgICAgICAgICBlcnJvcixcbiAgICAgICAgICAgICAgICBhY3Rpb24uYXV4aWxpYXJ5XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgfSlcbiAgKTtcblxuICBARWZmZWN0KClcbiAgZ2V0UHJvZHVjdFN1Z2dlc3Rpb25zJDogT2JzZXJ2YWJsZTxcbiAgICB8IHByb2R1Y3RzU2VhcmNoQWN0aW9ucy5HZXRQcm9kdWN0U3VnZ2VzdGlvbnNTdWNjZXNzXG4gICAgfCBwcm9kdWN0c1NlYXJjaEFjdGlvbnMuR2V0UHJvZHVjdFN1Z2dlc3Rpb25zRmFpbFxuICA+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShwcm9kdWN0c1NlYXJjaEFjdGlvbnMuR0VUX1BST0RVQ1RfU1VHR0VTVElPTlMpLFxuICAgIG1hcChcbiAgICAgIChhY3Rpb246IHByb2R1Y3RzU2VhcmNoQWN0aW9ucy5HZXRQcm9kdWN0U3VnZ2VzdGlvbnMpID0+IGFjdGlvbi5wYXlsb2FkXG4gICAgKSxcbiAgICBzd2l0Y2hNYXAocGF5bG9hZCA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5vY2NQcm9kdWN0U2VhcmNoU2VydmljZVxuICAgICAgICAubG9hZFN1Z2dlc3Rpb25zKHBheWxvYWQudGVybSwgcGF5bG9hZC5zZWFyY2hDb25maWcucGFnZVNpemUpXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIG1hcChkYXRhID0+IHtcbiAgICAgICAgICAgIGlmIChkYXRhLnN1Z2dlc3Rpb25zID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIG5ldyBwcm9kdWN0c1NlYXJjaEFjdGlvbnMuR2V0UHJvZHVjdFN1Z2dlc3Rpb25zU3VjY2VzcyhbXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbmV3IHByb2R1Y3RzU2VhcmNoQWN0aW9ucy5HZXRQcm9kdWN0U3VnZ2VzdGlvbnNTdWNjZXNzKFxuICAgICAgICAgICAgICBkYXRhLnN1Z2dlc3Rpb25zXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT5cbiAgICAgICAgICAgIG9mKG5ldyBwcm9kdWN0c1NlYXJjaEFjdGlvbnMuR2V0UHJvZHVjdFN1Z2dlc3Rpb25zRmFpbChlcnJvcikpXG4gICAgICAgICAgKVxuICAgICAgICApO1xuICAgIH0pXG4gICk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9ucyxcbiAgICBwcml2YXRlIG9jY1Byb2R1Y3RTZWFyY2hTZXJ2aWNlOiBQcm9kdWN0U2VhcmNoTG9hZGVyU2VydmljZSxcbiAgICBwcml2YXRlIHByb2R1Y3RJbWFnZUNvbnZlcnRlcjogUHJvZHVjdEltYWdlQ29udmVydGVyU2VydmljZVxuICApIHt9XG59XG4iXX0=