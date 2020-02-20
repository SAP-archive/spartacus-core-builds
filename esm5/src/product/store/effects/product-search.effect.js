import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, groupBy, map, mergeMap, switchMap } from 'rxjs/operators';
import { makeErrorSerializable } from '../../../util/serialization-utils';
import { ProductSearchConnector } from '../../connectors/search/product-search.connector';
import { ProductActions } from '../actions/index';
var ProductsSearchEffects = /** @class */ (function () {
    function ProductsSearchEffects(actions$, productSearchConnector) {
        var _this = this;
        this.actions$ = actions$;
        this.productSearchConnector = productSearchConnector;
        this.searchProducts$ = this.actions$.pipe(ofType(ProductActions.SEARCH_PRODUCTS), groupBy(function (action) { return action.auxiliary; }), mergeMap(function (group) {
            return group.pipe(switchMap(function (action) {
                return _this.productSearchConnector
                    .search(action.payload.queryText, action.payload.searchConfig)
                    .pipe(map(function (data) {
                    return new ProductActions.SearchProductsSuccess(data, action.auxiliary);
                }), catchError(function (error) {
                    return of(new ProductActions.SearchProductsFail(makeErrorSerializable(error), action.auxiliary));
                }));
            }));
        }));
        this.getProductSuggestions$ = this.actions$.pipe(ofType(ProductActions.GET_PRODUCT_SUGGESTIONS), map(function (action) { return action.payload; }), switchMap(function (payload) {
            return _this.productSearchConnector
                .getSuggestions(payload.term, payload.searchConfig.pageSize)
                .pipe(map(function (suggestions) {
                if (suggestions === undefined) {
                    return new ProductActions.GetProductSuggestionsSuccess([]);
                }
                return new ProductActions.GetProductSuggestionsSuccess(suggestions);
            }), catchError(function (error) {
                return of(new ProductActions.GetProductSuggestionsFail(makeErrorSerializable(error)));
            }));
        }));
    }
    ProductsSearchEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: ProductSearchConnector }
    ]; };
    __decorate([
        Effect()
    ], ProductsSearchEffects.prototype, "searchProducts$", void 0);
    __decorate([
        Effect()
    ], ProductsSearchEffects.prototype, "getProductSuggestions$", void 0);
    ProductsSearchEffects = __decorate([
        Injectable()
    ], ProductsSearchEffects);
    return ProductsSearchEffects;
}());
export { ProductsSearchEffects };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1zZWFyY2guZWZmZWN0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3Byb2R1Y3Qvc3RvcmUvZWZmZWN0cy9wcm9kdWN0LXNlYXJjaC5lZmZlY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hELE9BQU8sRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMvRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUMxRSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUMxRixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFHbEQ7SUE2REUsK0JBQ1UsUUFBaUIsRUFDakIsc0JBQThDO1FBRnhELGlCQUdJO1FBRk0sYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUNqQiwyQkFBc0IsR0FBdEIsc0JBQXNCLENBQXdCO1FBN0R4RCxvQkFBZSxHQUVYLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUNwQixNQUFNLENBQUMsY0FBYyxDQUFDLGVBQWUsQ0FBQyxFQUN0QyxPQUFPLENBQUMsVUFBQyxNQUFxQyxJQUFLLE9BQUEsTUFBTSxDQUFDLFNBQVMsRUFBaEIsQ0FBZ0IsQ0FBQyxFQUNwRSxRQUFRLENBQUMsVUFBQSxLQUFLO1lBQ1osT0FBQSxLQUFLLENBQUMsSUFBSSxDQUNSLFNBQVMsQ0FBQyxVQUFDLE1BQXFDO2dCQUM5QyxPQUFPLEtBQUksQ0FBQyxzQkFBc0I7cUJBQy9CLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQztxQkFDN0QsSUFBSSxDQUNILEdBQUcsQ0FBQyxVQUFBLElBQUk7b0JBQ04sT0FBTyxJQUFJLGNBQWMsQ0FBQyxxQkFBcUIsQ0FDN0MsSUFBSSxFQUNKLE1BQU0sQ0FBQyxTQUFTLENBQ2pCLENBQUM7Z0JBQ0osQ0FBQyxDQUFDLEVBQ0YsVUFBVSxDQUFDLFVBQUEsS0FBSztvQkFDZCxPQUFBLEVBQUUsQ0FDQSxJQUFJLGNBQWMsQ0FBQyxrQkFBa0IsQ0FDbkMscUJBQXFCLENBQUMsS0FBSyxDQUFDLEVBQzVCLE1BQU0sQ0FBQyxTQUFTLENBQ2pCLENBQ0Y7Z0JBTEQsQ0FLQyxDQUNGLENBQ0YsQ0FBQztZQUNOLENBQUMsQ0FBQyxDQUNIO1FBckJELENBcUJDLENBQ0YsQ0FDRixDQUFDO1FBR0YsMkJBQXNCLEdBR2xCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUNwQixNQUFNLENBQUMsY0FBYyxDQUFDLHVCQUF1QixDQUFDLEVBQzlDLEdBQUcsQ0FBQyxVQUFDLE1BQTRDLElBQUssT0FBQSxNQUFNLENBQUMsT0FBTyxFQUFkLENBQWMsQ0FBQyxFQUNyRSxTQUFTLENBQUMsVUFBQSxPQUFPO1lBQ2YsT0FBTyxLQUFJLENBQUMsc0JBQXNCO2lCQUMvQixjQUFjLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQztpQkFDM0QsSUFBSSxDQUNILEdBQUcsQ0FBQyxVQUFBLFdBQVc7Z0JBQ2IsSUFBSSxXQUFXLEtBQUssU0FBUyxFQUFFO29CQUM3QixPQUFPLElBQUksY0FBYyxDQUFDLDRCQUE0QixDQUFDLEVBQUUsQ0FBQyxDQUFDO2lCQUM1RDtnQkFDRCxPQUFPLElBQUksY0FBYyxDQUFDLDRCQUE0QixDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQ3RFLENBQUMsQ0FBQyxFQUNGLFVBQVUsQ0FBQyxVQUFBLEtBQUs7Z0JBQ2QsT0FBQSxFQUFFLENBQ0EsSUFBSSxjQUFjLENBQUMseUJBQXlCLENBQzFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUM3QixDQUNGO1lBSkQsQ0FJQyxDQUNGLENBQ0YsQ0FBQztRQUNOLENBQUMsQ0FBQyxDQUNILENBQUM7SUFLQyxDQUFDOztnQkFGZ0IsT0FBTztnQkFDTyxzQkFBc0I7O0lBN0R4RDtRQURDLE1BQU0sRUFBRTtrRUE4QlA7SUFHRjtRQURDLE1BQU0sRUFBRTt5RUEwQlA7SUEzRFMscUJBQXFCO1FBRGpDLFVBQVUsRUFBRTtPQUNBLHFCQUFxQixDQWlFakM7SUFBRCw0QkFBQztDQUFBLEFBakVELElBaUVDO1NBakVZLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCwgb2ZUeXBlIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgY2F0Y2hFcnJvciwgZ3JvdXBCeSwgbWFwLCBtZXJnZU1hcCwgc3dpdGNoTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgbWFrZUVycm9yU2VyaWFsaXphYmxlIH0gZnJvbSAnLi4vLi4vLi4vdXRpbC9zZXJpYWxpemF0aW9uLXV0aWxzJztcbmltcG9ydCB7IFByb2R1Y3RTZWFyY2hDb25uZWN0b3IgfSBmcm9tICcuLi8uLi9jb25uZWN0b3JzL3NlYXJjaC9wcm9kdWN0LXNlYXJjaC5jb25uZWN0b3InO1xuaW1wb3J0IHsgUHJvZHVjdEFjdGlvbnMgfSBmcm9tICcuLi9hY3Rpb25zL2luZGV4JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFByb2R1Y3RzU2VhcmNoRWZmZWN0cyB7XG4gIEBFZmZlY3QoKVxuICBzZWFyY2hQcm9kdWN0cyQ6IE9ic2VydmFibGU8XG4gICAgUHJvZHVjdEFjdGlvbnMuU2VhcmNoUHJvZHVjdHNTdWNjZXNzIHwgUHJvZHVjdEFjdGlvbnMuU2VhcmNoUHJvZHVjdHNGYWlsXG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKFByb2R1Y3RBY3Rpb25zLlNFQVJDSF9QUk9EVUNUUyksXG4gICAgZ3JvdXBCeSgoYWN0aW9uOiBQcm9kdWN0QWN0aW9ucy5TZWFyY2hQcm9kdWN0cykgPT4gYWN0aW9uLmF1eGlsaWFyeSksXG4gICAgbWVyZ2VNYXAoZ3JvdXAgPT5cbiAgICAgIGdyb3VwLnBpcGUoXG4gICAgICAgIHN3aXRjaE1hcCgoYWN0aW9uOiBQcm9kdWN0QWN0aW9ucy5TZWFyY2hQcm9kdWN0cykgPT4ge1xuICAgICAgICAgIHJldHVybiB0aGlzLnByb2R1Y3RTZWFyY2hDb25uZWN0b3JcbiAgICAgICAgICAgIC5zZWFyY2goYWN0aW9uLnBheWxvYWQucXVlcnlUZXh0LCBhY3Rpb24ucGF5bG9hZC5zZWFyY2hDb25maWcpXG4gICAgICAgICAgICAucGlwZShcbiAgICAgICAgICAgICAgbWFwKGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUHJvZHVjdEFjdGlvbnMuU2VhcmNoUHJvZHVjdHNTdWNjZXNzKFxuICAgICAgICAgICAgICAgICAgZGF0YSxcbiAgICAgICAgICAgICAgICAgIGFjdGlvbi5hdXhpbGlhcnlcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PlxuICAgICAgICAgICAgICAgIG9mKFxuICAgICAgICAgICAgICAgICAgbmV3IFByb2R1Y3RBY3Rpb25zLlNlYXJjaFByb2R1Y3RzRmFpbChcbiAgICAgICAgICAgICAgICAgICAgbWFrZUVycm9yU2VyaWFsaXphYmxlKGVycm9yKSxcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uLmF1eGlsaWFyeVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSlcbiAgICAgIClcbiAgICApXG4gICk7XG5cbiAgQEVmZmVjdCgpXG4gIGdldFByb2R1Y3RTdWdnZXN0aW9ucyQ6IE9ic2VydmFibGU8XG4gICAgfCBQcm9kdWN0QWN0aW9ucy5HZXRQcm9kdWN0U3VnZ2VzdGlvbnNTdWNjZXNzXG4gICAgfCBQcm9kdWN0QWN0aW9ucy5HZXRQcm9kdWN0U3VnZ2VzdGlvbnNGYWlsXG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKFByb2R1Y3RBY3Rpb25zLkdFVF9QUk9EVUNUX1NVR0dFU1RJT05TKSxcbiAgICBtYXAoKGFjdGlvbjogUHJvZHVjdEFjdGlvbnMuR2V0UHJvZHVjdFN1Z2dlc3Rpb25zKSA9PiBhY3Rpb24ucGF5bG9hZCksXG4gICAgc3dpdGNoTWFwKHBheWxvYWQgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMucHJvZHVjdFNlYXJjaENvbm5lY3RvclxuICAgICAgICAuZ2V0U3VnZ2VzdGlvbnMocGF5bG9hZC50ZXJtLCBwYXlsb2FkLnNlYXJjaENvbmZpZy5wYWdlU2l6ZSlcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgbWFwKHN1Z2dlc3Rpb25zID0+IHtcbiAgICAgICAgICAgIGlmIChzdWdnZXN0aW9ucyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgIHJldHVybiBuZXcgUHJvZHVjdEFjdGlvbnMuR2V0UHJvZHVjdFN1Z2dlc3Rpb25zU3VjY2VzcyhbXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb2R1Y3RBY3Rpb25zLkdldFByb2R1Y3RTdWdnZXN0aW9uc1N1Y2Nlc3Moc3VnZ2VzdGlvbnMpO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT5cbiAgICAgICAgICAgIG9mKFxuICAgICAgICAgICAgICBuZXcgUHJvZHVjdEFjdGlvbnMuR2V0UHJvZHVjdFN1Z2dlc3Rpb25zRmFpbChcbiAgICAgICAgICAgICAgICBtYWtlRXJyb3JTZXJpYWxpemFibGUoZXJyb3IpXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgfSlcbiAgKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zLFxuICAgIHByaXZhdGUgcHJvZHVjdFNlYXJjaENvbm5lY3RvcjogUHJvZHVjdFNlYXJjaENvbm5lY3RvclxuICApIHt9XG59XG4iXX0=