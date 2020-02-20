import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { queueScheduler } from 'rxjs';
import { map, observeOn, shareReplay, tap } from 'rxjs/operators';
import { ProductActions } from '../store/actions/index';
import { ProductSelectors } from '../store/selectors/index';
import { ProductLoadingService } from '../services/product-loading.service';
var ProductService = /** @class */ (function () {
    function ProductService(store, productLoading) {
        this.store = store;
        this.productLoading = productLoading;
        /** @deprecated since 1.4 */
        this.products = {};
    }
    /**
     * Returns the product observable. The product will be loaded
     * whenever there's no value observed.
     *
     * The underlying product loader ensures that the product is
     * only loaded once, even in case of parallel observers.
     *
     * You should provide product data scope you are interested in to not load all
     * the data if not needed. You can provide more than one scope.
     *
     * @param productCode Product code to load
     * @param scopes Scope or scopes of the product data
     */
    ProductService.prototype.get = function (productCode, scopes) {
        var _this = this;
        if (scopes === void 0) { scopes = ''; }
        // TODO: Remove, deprecated since 1.4
        if (!this.productLoading) {
            if (!this.products[productCode]) {
                this.products[productCode] = this.store.pipe(select(ProductSelectors.getSelectedProductStateFactory(productCode)), observeOn(queueScheduler), tap(function (productState) {
                    var attemptedLoad = productState.loading ||
                        productState.success ||
                        productState.error;
                    if (!attemptedLoad) {
                        _this.store.dispatch(new ProductActions.LoadProduct(productCode));
                    }
                }), map(function (productState) { return productState.value; }), shareReplay({ bufferSize: 1, refCount: true }));
            }
            return this.products[productCode];
        }
        // END OF (TODO: Remove, deprecated since 1.4)
        return this.productLoading.get(productCode, [].concat(scopes));
    };
    /**
     * Returns boolean observable for product's loading state
     */
    ProductService.prototype.isLoading = function (productCode, scope) {
        if (scope === void 0) { scope = ''; }
        return this.store.pipe(select(ProductSelectors.getSelectedProductLoadingFactory(productCode, scope)));
    };
    /**
     * Returns boolean observable for product's load success state
     */
    ProductService.prototype.isSuccess = function (productCode, scope) {
        if (scope === void 0) { scope = ''; }
        return this.store.pipe(select(ProductSelectors.getSelectedProductSuccessFactory(productCode, scope)));
    };
    /**
     * Returns boolean observable for product's load error state
     */
    ProductService.prototype.hasError = function (productCode, scope) {
        if (scope === void 0) { scope = ''; }
        return this.store.pipe(select(ProductSelectors.getSelectedProductErrorFactory(productCode, scope)));
    };
    /**
     * Reloads the product. The product is loaded implicetly
     * whenever selected by the `get`, but in some cases an
     * explicit reload might be needed.
     */
    ProductService.prototype.reload = function (productCode, scope) {
        if (scope === void 0) { scope = ''; }
        this.store.dispatch(new ProductActions.LoadProduct(productCode, scope));
    };
    ProductService.ctorParameters = function () { return [
        { type: Store },
        { type: ProductLoadingService }
    ]; };
    ProductService = __decorate([
        Injectable()
    ], ProductService);
    return ProductService;
}());
export { ProductService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3Byb2R1Y3QvZmFjYWRlL3Byb2R1Y3Quc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUM1QyxPQUFPLEVBQWMsY0FBYyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2xELE9BQU8sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVsRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFeEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDNUQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFJNUU7SUFXRSx3QkFDWSxLQUE4QixFQUM5QixjQUFzQztRQUR0QyxVQUFLLEdBQUwsS0FBSyxDQUF5QjtRQUM5QixtQkFBYyxHQUFkLGNBQWMsQ0FBd0I7UUFHbEQsNEJBQTRCO1FBQ3BCLGFBQVEsR0FBNEMsRUFBRSxDQUFDO0lBSDVELENBQUM7SUFLSjs7Ozs7Ozs7Ozs7O09BWUc7SUFDSCw0QkFBRyxHQUFILFVBQ0UsV0FBbUIsRUFDbkIsTUFBOEQ7UUFGaEUsaUJBNkJDO1FBM0JDLHVCQUFBLEVBQUEsV0FBOEQ7UUFFOUQscUNBQXFDO1FBQ3JDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFO1lBQ3hCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxFQUFFO2dCQUMvQixJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUMxQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsOEJBQThCLENBQUMsV0FBVyxDQUFDLENBQUMsRUFDcEUsU0FBUyxDQUFDLGNBQWMsQ0FBQyxFQUN6QixHQUFHLENBQUMsVUFBQSxZQUFZO29CQUNkLElBQU0sYUFBYSxHQUNqQixZQUFZLENBQUMsT0FBTzt3QkFDcEIsWUFBWSxDQUFDLE9BQU87d0JBQ3BCLFlBQVksQ0FBQyxLQUFLLENBQUM7b0JBRXJCLElBQUksQ0FBQyxhQUFhLEVBQUU7d0JBQ2xCLEtBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksY0FBYyxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO3FCQUNsRTtnQkFDSCxDQUFDLENBQUMsRUFDRixHQUFHLENBQUMsVUFBQSxZQUFZLElBQUksT0FBQSxZQUFZLENBQUMsS0FBSyxFQUFsQixDQUFrQixDQUFDLEVBQ3ZDLFdBQVcsQ0FBQyxFQUFFLFVBQVUsRUFBRSxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDLENBQy9DLENBQUM7YUFDSDtZQUNELE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUNuQztRQUNELDhDQUE4QztRQUU5QyxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDakUsQ0FBQztJQUVEOztPQUVHO0lBQ0gsa0NBQVMsR0FBVCxVQUNFLFdBQW1CLEVBQ25CLEtBQWlDO1FBQWpDLHNCQUFBLEVBQUEsVUFBaUM7UUFFakMsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FDcEIsTUFBTSxDQUNKLGdCQUFnQixDQUFDLGdDQUFnQyxDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsQ0FDdEUsQ0FDRixDQUFDO0lBQ0osQ0FBQztJQUVEOztPQUVHO0lBQ0gsa0NBQVMsR0FBVCxVQUNFLFdBQW1CLEVBQ25CLEtBQWlDO1FBQWpDLHNCQUFBLEVBQUEsVUFBaUM7UUFFakMsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FDcEIsTUFBTSxDQUNKLGdCQUFnQixDQUFDLGdDQUFnQyxDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsQ0FDdEUsQ0FDRixDQUFDO0lBQ0osQ0FBQztJQUVEOztPQUVHO0lBQ0gsaUNBQVEsR0FBUixVQUNFLFdBQW1CLEVBQ25CLEtBQWlDO1FBQWpDLHNCQUFBLEVBQUEsVUFBaUM7UUFFakMsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FDcEIsTUFBTSxDQUNKLGdCQUFnQixDQUFDLDhCQUE4QixDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsQ0FDcEUsQ0FDRixDQUFDO0lBQ0osQ0FBQztJQUVEOzs7O09BSUc7SUFDSCwrQkFBTSxHQUFOLFVBQU8sV0FBbUIsRUFBRSxLQUFpQztRQUFqQyxzQkFBQSxFQUFBLFVBQWlDO1FBQzNELElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksY0FBYyxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUMxRSxDQUFDOztnQkFwR2tCLEtBQUs7Z0JBQ0sscUJBQXFCOztJQWJ2QyxjQUFjO1FBRDFCLFVBQVUsRUFBRTtPQUNBLGNBQWMsQ0FpSDFCO0lBQUQscUJBQUM7Q0FBQSxBQWpIRCxJQWlIQztTQWpIWSxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgc2VsZWN0LCBTdG9yZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIHF1ZXVlU2NoZWR1bGVyIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAsIG9ic2VydmVPbiwgc2hhcmVSZXBsYXksIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFByb2R1Y3QgfSBmcm9tICcuLi8uLi9tb2RlbC9wcm9kdWN0Lm1vZGVsJztcbmltcG9ydCB7IFByb2R1Y3RBY3Rpb25zIH0gZnJvbSAnLi4vc3RvcmUvYWN0aW9ucy9pbmRleCc7XG5pbXBvcnQgeyBTdGF0ZVdpdGhQcm9kdWN0IH0gZnJvbSAnLi4vc3RvcmUvcHJvZHVjdC1zdGF0ZSc7XG5pbXBvcnQgeyBQcm9kdWN0U2VsZWN0b3JzIH0gZnJvbSAnLi4vc3RvcmUvc2VsZWN0b3JzL2luZGV4JztcbmltcG9ydCB7IFByb2R1Y3RMb2FkaW5nU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL3Byb2R1Y3QtbG9hZGluZy5zZXJ2aWNlJztcbmltcG9ydCB7IFByb2R1Y3RTY29wZSB9IGZyb20gJy4uL21vZGVsL3Byb2R1Y3Qtc2NvcGUnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUHJvZHVjdFNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBzdG9yZTogU3RvcmU8U3RhdGVXaXRoUHJvZHVjdD4sXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnVuaWZpZWQtc2lnbmF0dXJlc1xuICAgIHByb2R1Y3RMb2FkaW5nOiBQcm9kdWN0TG9hZGluZ1NlcnZpY2VcbiAgKTtcbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIHNpbmNlIDEuNFxuICAgKi9cbiAgY29uc3RydWN0b3Ioc3RvcmU6IFN0b3JlPFN0YXRlV2l0aFByb2R1Y3Q+KTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgc3RvcmU6IFN0b3JlPFN0YXRlV2l0aFByb2R1Y3Q+LFxuICAgIHByb3RlY3RlZCBwcm9kdWN0TG9hZGluZz86IFByb2R1Y3RMb2FkaW5nU2VydmljZVxuICApIHt9XG5cbiAgLyoqIEBkZXByZWNhdGVkIHNpbmNlIDEuNCAqL1xuICBwcml2YXRlIHByb2R1Y3RzOiB7IFtjb2RlOiBzdHJpbmddOiBPYnNlcnZhYmxlPFByb2R1Y3Q+IH0gPSB7fTtcblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgcHJvZHVjdCBvYnNlcnZhYmxlLiBUaGUgcHJvZHVjdCB3aWxsIGJlIGxvYWRlZFxuICAgKiB3aGVuZXZlciB0aGVyZSdzIG5vIHZhbHVlIG9ic2VydmVkLlxuICAgKlxuICAgKiBUaGUgdW5kZXJseWluZyBwcm9kdWN0IGxvYWRlciBlbnN1cmVzIHRoYXQgdGhlIHByb2R1Y3QgaXNcbiAgICogb25seSBsb2FkZWQgb25jZSwgZXZlbiBpbiBjYXNlIG9mIHBhcmFsbGVsIG9ic2VydmVycy5cbiAgICpcbiAgICogWW91IHNob3VsZCBwcm92aWRlIHByb2R1Y3QgZGF0YSBzY29wZSB5b3UgYXJlIGludGVyZXN0ZWQgaW4gdG8gbm90IGxvYWQgYWxsXG4gICAqIHRoZSBkYXRhIGlmIG5vdCBuZWVkZWQuIFlvdSBjYW4gcHJvdmlkZSBtb3JlIHRoYW4gb25lIHNjb3BlLlxuICAgKlxuICAgKiBAcGFyYW0gcHJvZHVjdENvZGUgUHJvZHVjdCBjb2RlIHRvIGxvYWRcbiAgICogQHBhcmFtIHNjb3BlcyBTY29wZSBvciBzY29wZXMgb2YgdGhlIHByb2R1Y3QgZGF0YVxuICAgKi9cbiAgZ2V0KFxuICAgIHByb2R1Y3RDb2RlOiBzdHJpbmcsXG4gICAgc2NvcGVzOiAoUHJvZHVjdFNjb3BlIHwgc3RyaW5nKVtdIHwgUHJvZHVjdFNjb3BlIHwgc3RyaW5nID0gJydcbiAgKTogT2JzZXJ2YWJsZTxQcm9kdWN0PiB7XG4gICAgLy8gVE9ETzogUmVtb3ZlLCBkZXByZWNhdGVkIHNpbmNlIDEuNFxuICAgIGlmICghdGhpcy5wcm9kdWN0TG9hZGluZykge1xuICAgICAgaWYgKCF0aGlzLnByb2R1Y3RzW3Byb2R1Y3RDb2RlXSkge1xuICAgICAgICB0aGlzLnByb2R1Y3RzW3Byb2R1Y3RDb2RlXSA9IHRoaXMuc3RvcmUucGlwZShcbiAgICAgICAgICBzZWxlY3QoUHJvZHVjdFNlbGVjdG9ycy5nZXRTZWxlY3RlZFByb2R1Y3RTdGF0ZUZhY3RvcnkocHJvZHVjdENvZGUpKSxcbiAgICAgICAgICBvYnNlcnZlT24ocXVldWVTY2hlZHVsZXIpLFxuICAgICAgICAgIHRhcChwcm9kdWN0U3RhdGUgPT4ge1xuICAgICAgICAgICAgY29uc3QgYXR0ZW1wdGVkTG9hZCA9XG4gICAgICAgICAgICAgIHByb2R1Y3RTdGF0ZS5sb2FkaW5nIHx8XG4gICAgICAgICAgICAgIHByb2R1Y3RTdGF0ZS5zdWNjZXNzIHx8XG4gICAgICAgICAgICAgIHByb2R1Y3RTdGF0ZS5lcnJvcjtcblxuICAgICAgICAgICAgaWYgKCFhdHRlbXB0ZWRMb2FkKSB7XG4gICAgICAgICAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IFByb2R1Y3RBY3Rpb25zLkxvYWRQcm9kdWN0KHByb2R1Y3RDb2RlKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgbWFwKHByb2R1Y3RTdGF0ZSA9PiBwcm9kdWN0U3RhdGUudmFsdWUpLFxuICAgICAgICAgIHNoYXJlUmVwbGF5KHsgYnVmZmVyU2l6ZTogMSwgcmVmQ291bnQ6IHRydWUgfSlcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLnByb2R1Y3RzW3Byb2R1Y3RDb2RlXTtcbiAgICB9XG4gICAgLy8gRU5EIE9GIChUT0RPOiBSZW1vdmUsIGRlcHJlY2F0ZWQgc2luY2UgMS40KVxuXG4gICAgcmV0dXJuIHRoaXMucHJvZHVjdExvYWRpbmcuZ2V0KHByb2R1Y3RDb2RlLCBbXS5jb25jYXQoc2NvcGVzKSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBib29sZWFuIG9ic2VydmFibGUgZm9yIHByb2R1Y3QncyBsb2FkaW5nIHN0YXRlXG4gICAqL1xuICBpc0xvYWRpbmcoXG4gICAgcHJvZHVjdENvZGU6IHN0cmluZyxcbiAgICBzY29wZTogUHJvZHVjdFNjb3BlIHwgc3RyaW5nID0gJydcbiAgKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChcbiAgICAgICAgUHJvZHVjdFNlbGVjdG9ycy5nZXRTZWxlY3RlZFByb2R1Y3RMb2FkaW5nRmFjdG9yeShwcm9kdWN0Q29kZSwgc2NvcGUpXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGJvb2xlYW4gb2JzZXJ2YWJsZSBmb3IgcHJvZHVjdCdzIGxvYWQgc3VjY2VzcyBzdGF0ZVxuICAgKi9cbiAgaXNTdWNjZXNzKFxuICAgIHByb2R1Y3RDb2RlOiBzdHJpbmcsXG4gICAgc2NvcGU6IFByb2R1Y3RTY29wZSB8IHN0cmluZyA9ICcnXG4gICk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoXG4gICAgICAgIFByb2R1Y3RTZWxlY3RvcnMuZ2V0U2VsZWN0ZWRQcm9kdWN0U3VjY2Vzc0ZhY3RvcnkocHJvZHVjdENvZGUsIHNjb3BlKVxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBib29sZWFuIG9ic2VydmFibGUgZm9yIHByb2R1Y3QncyBsb2FkIGVycm9yIHN0YXRlXG4gICAqL1xuICBoYXNFcnJvcihcbiAgICBwcm9kdWN0Q29kZTogc3RyaW5nLFxuICAgIHNjb3BlOiBQcm9kdWN0U2NvcGUgfCBzdHJpbmcgPSAnJ1xuICApOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KFxuICAgICAgICBQcm9kdWN0U2VsZWN0b3JzLmdldFNlbGVjdGVkUHJvZHVjdEVycm9yRmFjdG9yeShwcm9kdWN0Q29kZSwgc2NvcGUpXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWxvYWRzIHRoZSBwcm9kdWN0LiBUaGUgcHJvZHVjdCBpcyBsb2FkZWQgaW1wbGljZXRseVxuICAgKiB3aGVuZXZlciBzZWxlY3RlZCBieSB0aGUgYGdldGAsIGJ1dCBpbiBzb21lIGNhc2VzIGFuXG4gICAqIGV4cGxpY2l0IHJlbG9hZCBtaWdodCBiZSBuZWVkZWQuXG4gICAqL1xuICByZWxvYWQocHJvZHVjdENvZGU6IHN0cmluZywgc2NvcGU6IFByb2R1Y3RTY29wZSB8IHN0cmluZyA9ICcnKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgUHJvZHVjdEFjdGlvbnMuTG9hZFByb2R1Y3QocHJvZHVjdENvZGUsIHNjb3BlKSk7XG4gIH1cbn1cbiJdfQ==