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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1zZWFyY2guZWZmZWN0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3Byb2R1Y3Qvc3RvcmUvZWZmZWN0cy9wcm9kdWN0LXNlYXJjaC5lZmZlY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hELE9BQU8sRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMvRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUMxRSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUMxRixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFHbEQ7SUE2REUsK0JBQ1UsUUFBaUIsRUFDakIsc0JBQThDO1FBRnhELGlCQUdJO1FBRk0sYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUNqQiwyQkFBc0IsR0FBdEIsc0JBQXNCLENBQXdCO1FBN0R4RCxvQkFBZSxHQUVYLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUNwQixNQUFNLENBQUMsY0FBYyxDQUFDLGVBQWUsQ0FBQyxFQUN0QyxPQUFPLENBQUMsVUFBQyxNQUFxQyxJQUFLLE9BQUEsTUFBTSxDQUFDLFNBQVMsRUFBaEIsQ0FBZ0IsQ0FBQyxFQUNwRSxRQUFRLENBQUMsVUFBQyxLQUFLO1lBQ2IsT0FBQSxLQUFLLENBQUMsSUFBSSxDQUNSLFNBQVMsQ0FBQyxVQUFDLE1BQXFDO2dCQUM5QyxPQUFPLEtBQUksQ0FBQyxzQkFBc0I7cUJBQy9CLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQztxQkFDN0QsSUFBSSxDQUNILEdBQUcsQ0FBQyxVQUFDLElBQUk7b0JBQ1AsT0FBTyxJQUFJLGNBQWMsQ0FBQyxxQkFBcUIsQ0FDN0MsSUFBSSxFQUNKLE1BQU0sQ0FBQyxTQUFTLENBQ2pCLENBQUM7Z0JBQ0osQ0FBQyxDQUFDLEVBQ0YsVUFBVSxDQUFDLFVBQUMsS0FBSztvQkFDZixPQUFBLEVBQUUsQ0FDQSxJQUFJLGNBQWMsQ0FBQyxrQkFBa0IsQ0FDbkMscUJBQXFCLENBQUMsS0FBSyxDQUFDLEVBQzVCLE1BQU0sQ0FBQyxTQUFTLENBQ2pCLENBQ0Y7Z0JBTEQsQ0FLQyxDQUNGLENBQ0YsQ0FBQztZQUNOLENBQUMsQ0FBQyxDQUNIO1FBckJELENBcUJDLENBQ0YsQ0FDRixDQUFDO1FBR0YsMkJBQXNCLEdBR2xCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUNwQixNQUFNLENBQUMsY0FBYyxDQUFDLHVCQUF1QixDQUFDLEVBQzlDLEdBQUcsQ0FBQyxVQUFDLE1BQTRDLElBQUssT0FBQSxNQUFNLENBQUMsT0FBTyxFQUFkLENBQWMsQ0FBQyxFQUNyRSxTQUFTLENBQUMsVUFBQyxPQUFPO1lBQ2hCLE9BQU8sS0FBSSxDQUFDLHNCQUFzQjtpQkFDL0IsY0FBYyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUM7aUJBQzNELElBQUksQ0FDSCxHQUFHLENBQUMsVUFBQyxXQUFXO2dCQUNkLElBQUksV0FBVyxLQUFLLFNBQVMsRUFBRTtvQkFDN0IsT0FBTyxJQUFJLGNBQWMsQ0FBQyw0QkFBNEIsQ0FBQyxFQUFFLENBQUMsQ0FBQztpQkFDNUQ7Z0JBQ0QsT0FBTyxJQUFJLGNBQWMsQ0FBQyw0QkFBNEIsQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUN0RSxDQUFDLENBQUMsRUFDRixVQUFVLENBQUMsVUFBQyxLQUFLO2dCQUNmLE9BQUEsRUFBRSxDQUNBLElBQUksY0FBYyxDQUFDLHlCQUF5QixDQUMxQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FDN0IsQ0FDRjtZQUpELENBSUMsQ0FDRixDQUNGLENBQUM7UUFDTixDQUFDLENBQUMsQ0FDSCxDQUFDO0lBS0MsQ0FBQzs7Z0JBRmdCLE9BQU87Z0JBQ08sc0JBQXNCOztJQTdEeEQ7UUFEQyxNQUFNLEVBQUU7a0VBOEJQO0lBR0Y7UUFEQyxNQUFNLEVBQUU7eUVBMEJQO0lBM0RTLHFCQUFxQjtRQURqQyxVQUFVLEVBQUU7T0FDQSxxQkFBcUIsQ0FpRWpDO0lBQUQsNEJBQUM7Q0FBQSxBQWpFRCxJQWlFQztTQWpFWSxxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QsIG9mVHlwZSB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGNhdGNoRXJyb3IsIGdyb3VwQnksIG1hcCwgbWVyZ2VNYXAsIHN3aXRjaE1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IG1ha2VFcnJvclNlcmlhbGl6YWJsZSB9IGZyb20gJy4uLy4uLy4uL3V0aWwvc2VyaWFsaXphdGlvbi11dGlscyc7XG5pbXBvcnQgeyBQcm9kdWN0U2VhcmNoQ29ubmVjdG9yIH0gZnJvbSAnLi4vLi4vY29ubmVjdG9ycy9zZWFyY2gvcHJvZHVjdC1zZWFyY2guY29ubmVjdG9yJztcbmltcG9ydCB7IFByb2R1Y3RBY3Rpb25zIH0gZnJvbSAnLi4vYWN0aW9ucy9pbmRleCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBQcm9kdWN0c1NlYXJjaEVmZmVjdHMge1xuICBARWZmZWN0KClcbiAgc2VhcmNoUHJvZHVjdHMkOiBPYnNlcnZhYmxlPFxuICAgIFByb2R1Y3RBY3Rpb25zLlNlYXJjaFByb2R1Y3RzU3VjY2VzcyB8IFByb2R1Y3RBY3Rpb25zLlNlYXJjaFByb2R1Y3RzRmFpbFxuICA+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShQcm9kdWN0QWN0aW9ucy5TRUFSQ0hfUFJPRFVDVFMpLFxuICAgIGdyb3VwQnkoKGFjdGlvbjogUHJvZHVjdEFjdGlvbnMuU2VhcmNoUHJvZHVjdHMpID0+IGFjdGlvbi5hdXhpbGlhcnkpLFxuICAgIG1lcmdlTWFwKChncm91cCkgPT5cbiAgICAgIGdyb3VwLnBpcGUoXG4gICAgICAgIHN3aXRjaE1hcCgoYWN0aW9uOiBQcm9kdWN0QWN0aW9ucy5TZWFyY2hQcm9kdWN0cykgPT4ge1xuICAgICAgICAgIHJldHVybiB0aGlzLnByb2R1Y3RTZWFyY2hDb25uZWN0b3JcbiAgICAgICAgICAgIC5zZWFyY2goYWN0aW9uLnBheWxvYWQucXVlcnlUZXh0LCBhY3Rpb24ucGF5bG9hZC5zZWFyY2hDb25maWcpXG4gICAgICAgICAgICAucGlwZShcbiAgICAgICAgICAgICAgbWFwKChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9kdWN0QWN0aW9ucy5TZWFyY2hQcm9kdWN0c1N1Y2Nlc3MoXG4gICAgICAgICAgICAgICAgICBkYXRhLFxuICAgICAgICAgICAgICAgICAgYWN0aW9uLmF1eGlsaWFyeVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBjYXRjaEVycm9yKChlcnJvcikgPT5cbiAgICAgICAgICAgICAgICBvZihcbiAgICAgICAgICAgICAgICAgIG5ldyBQcm9kdWN0QWN0aW9ucy5TZWFyY2hQcm9kdWN0c0ZhaWwoXG4gICAgICAgICAgICAgICAgICAgIG1ha2VFcnJvclNlcmlhbGl6YWJsZShlcnJvciksXG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbi5hdXhpbGlhcnlcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICk7XG4gICAgICAgIH0pXG4gICAgICApXG4gICAgKVxuICApO1xuXG4gIEBFZmZlY3QoKVxuICBnZXRQcm9kdWN0U3VnZ2VzdGlvbnMkOiBPYnNlcnZhYmxlPFxuICAgIHwgUHJvZHVjdEFjdGlvbnMuR2V0UHJvZHVjdFN1Z2dlc3Rpb25zU3VjY2Vzc1xuICAgIHwgUHJvZHVjdEFjdGlvbnMuR2V0UHJvZHVjdFN1Z2dlc3Rpb25zRmFpbFxuICA+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShQcm9kdWN0QWN0aW9ucy5HRVRfUFJPRFVDVF9TVUdHRVNUSU9OUyksXG4gICAgbWFwKChhY3Rpb246IFByb2R1Y3RBY3Rpb25zLkdldFByb2R1Y3RTdWdnZXN0aW9ucykgPT4gYWN0aW9uLnBheWxvYWQpLFxuICAgIHN3aXRjaE1hcCgocGF5bG9hZCkgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMucHJvZHVjdFNlYXJjaENvbm5lY3RvclxuICAgICAgICAuZ2V0U3VnZ2VzdGlvbnMocGF5bG9hZC50ZXJtLCBwYXlsb2FkLnNlYXJjaENvbmZpZy5wYWdlU2l6ZSlcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgbWFwKChzdWdnZXN0aW9ucykgPT4ge1xuICAgICAgICAgICAgaWYgKHN1Z2dlc3Rpb25zID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9kdWN0QWN0aW9ucy5HZXRQcm9kdWN0U3VnZ2VzdGlvbnNTdWNjZXNzKFtdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvZHVjdEFjdGlvbnMuR2V0UHJvZHVjdFN1Z2dlc3Rpb25zU3VjY2VzcyhzdWdnZXN0aW9ucyk7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgY2F0Y2hFcnJvcigoZXJyb3IpID0+XG4gICAgICAgICAgICBvZihcbiAgICAgICAgICAgICAgbmV3IFByb2R1Y3RBY3Rpb25zLkdldFByb2R1Y3RTdWdnZXN0aW9uc0ZhaWwoXG4gICAgICAgICAgICAgICAgbWFrZUVycm9yU2VyaWFsaXphYmxlKGVycm9yKVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgICApO1xuICAgIH0pXG4gICk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9ucyxcbiAgICBwcml2YXRlIHByb2R1Y3RTZWFyY2hDb25uZWN0b3I6IFByb2R1Y3RTZWFyY2hDb25uZWN0b3JcbiAgKSB7fVxufVxuIl19