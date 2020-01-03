/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
        /**
         * @deprecated since 1.4
         */
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
     * @param {?} productCode Product code to load
     * @param {?=} scopes Scope or scopes of the product data
     * @return {?}
     */
    ProductService.prototype.get = /**
     * Returns the product observable. The product will be loaded
     * whenever there's no value observed.
     *
     * The underlying product loader ensures that the product is
     * only loaded once, even in case of parallel observers.
     *
     * You should provide product data scope you are interested in to not load all
     * the data if not needed. You can provide more than one scope.
     *
     * @param {?} productCode Product code to load
     * @param {?=} scopes Scope or scopes of the product data
     * @return {?}
     */
    function (productCode, scopes) {
        var _this = this;
        if (scopes === void 0) { scopes = ''; }
        // TODO: Remove, deprecated since 1.4
        if (!this.productLoading) {
            if (!this.products[productCode]) {
                this.products[productCode] = this.store.pipe(select(ProductSelectors.getSelectedProductStateFactory(productCode)), observeOn(queueScheduler), tap((/**
                 * @param {?} productState
                 * @return {?}
                 */
                function (productState) {
                    /** @type {?} */
                    var attemptedLoad = productState.loading ||
                        productState.success ||
                        productState.error;
                    if (!attemptedLoad) {
                        _this.store.dispatch(new ProductActions.LoadProduct(productCode));
                    }
                })), map((/**
                 * @param {?} productState
                 * @return {?}
                 */
                function (productState) { return productState.value; })), shareReplay({ bufferSize: 1, refCount: true }));
            }
            return this.products[productCode];
        }
        // END OF (TODO: Remove, deprecated since 1.4)
        return this.productLoading.get(productCode, [].concat(scopes));
    };
    /**
     * Returns boolean observable for product's loading state
     */
    /**
     * Returns boolean observable for product's loading state
     * @param {?} productCode
     * @param {?=} scope
     * @return {?}
     */
    ProductService.prototype.isLoading = /**
     * Returns boolean observable for product's loading state
     * @param {?} productCode
     * @param {?=} scope
     * @return {?}
     */
    function (productCode, scope) {
        if (scope === void 0) { scope = ''; }
        return this.store.pipe(select(ProductSelectors.getSelectedProductLoadingFactory(productCode, scope)));
    };
    /**
     * Returns boolean observable for product's load success state
     */
    /**
     * Returns boolean observable for product's load success state
     * @param {?} productCode
     * @param {?=} scope
     * @return {?}
     */
    ProductService.prototype.isSuccess = /**
     * Returns boolean observable for product's load success state
     * @param {?} productCode
     * @param {?=} scope
     * @return {?}
     */
    function (productCode, scope) {
        if (scope === void 0) { scope = ''; }
        return this.store.pipe(select(ProductSelectors.getSelectedProductSuccessFactory(productCode, scope)));
    };
    /**
     * Returns boolean observable for product's load error state
     */
    /**
     * Returns boolean observable for product's load error state
     * @param {?} productCode
     * @param {?=} scope
     * @return {?}
     */
    ProductService.prototype.hasError = /**
     * Returns boolean observable for product's load error state
     * @param {?} productCode
     * @param {?=} scope
     * @return {?}
     */
    function (productCode, scope) {
        if (scope === void 0) { scope = ''; }
        return this.store.pipe(select(ProductSelectors.getSelectedProductErrorFactory(productCode, scope)));
    };
    /**
     * Reloads the product. The product is loaded implicetly
     * whenever selected by the `get`, but in some cases an
     * explicit reload might be needed.
     */
    /**
     * Reloads the product. The product is loaded implicetly
     * whenever selected by the `get`, but in some cases an
     * explicit reload might be needed.
     * @param {?} productCode
     * @param {?=} scope
     * @return {?}
     */
    ProductService.prototype.reload = /**
     * Reloads the product. The product is loaded implicetly
     * whenever selected by the `get`, but in some cases an
     * explicit reload might be needed.
     * @param {?} productCode
     * @param {?=} scope
     * @return {?}
     */
    function (productCode, scope) {
        if (scope === void 0) { scope = ''; }
        this.store.dispatch(new ProductActions.LoadProduct(productCode, scope));
    };
    ProductService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    ProductService.ctorParameters = function () { return [
        { type: Store },
        { type: ProductLoadingService }
    ]; };
    return ProductService;
}());
export { ProductService };
if (false) {
    /**
     * @deprecated since 1.4
     * @type {?}
     * @private
     */
    ProductService.prototype.products;
    /**
     * @type {?}
     * @protected
     */
    ProductService.prototype.store;
    /**
     * @type {?}
     * @protected
     */
    ProductService.prototype.productLoading;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3Byb2R1Y3QvZmFjYWRlL3Byb2R1Y3Quc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUM1QyxPQUFPLEVBQWMsY0FBYyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2xELE9BQU8sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVsRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFeEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDNUQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFHNUU7SUFZRSx3QkFDWSxLQUE4QixFQUM5QixjQUFzQztRQUR0QyxVQUFLLEdBQUwsS0FBSyxDQUF5QjtRQUM5QixtQkFBYyxHQUFkLGNBQWMsQ0FBd0I7Ozs7UUFJMUMsYUFBUSxHQUE0QyxFQUFFLENBQUM7SUFINUQsQ0FBQztJQUtKOzs7Ozs7Ozs7Ozs7T0FZRzs7Ozs7Ozs7Ozs7Ozs7O0lBQ0gsNEJBQUc7Ozs7Ozs7Ozs7Ozs7O0lBQUgsVUFDRSxXQUFtQixFQUNuQixNQUE4RDtRQUZoRSxpQkE2QkM7UUEzQkMsdUJBQUEsRUFBQSxXQUE4RDtRQUU5RCxxQ0FBcUM7UUFDckMsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUU7WUFDeEIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLEVBQUU7Z0JBQy9CLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQzFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyw4QkFBOEIsQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUNwRSxTQUFTLENBQUMsY0FBYyxDQUFDLEVBQ3pCLEdBQUc7Ozs7Z0JBQUMsVUFBQSxZQUFZOzt3QkFDUixhQUFhLEdBQ2pCLFlBQVksQ0FBQyxPQUFPO3dCQUNwQixZQUFZLENBQUMsT0FBTzt3QkFDcEIsWUFBWSxDQUFDLEtBQUs7b0JBRXBCLElBQUksQ0FBQyxhQUFhLEVBQUU7d0JBQ2xCLEtBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksY0FBYyxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO3FCQUNsRTtnQkFDSCxDQUFDLEVBQUMsRUFDRixHQUFHOzs7O2dCQUFDLFVBQUEsWUFBWSxJQUFJLE9BQUEsWUFBWSxDQUFDLEtBQUssRUFBbEIsQ0FBa0IsRUFBQyxFQUN2QyxXQUFXLENBQUMsRUFBRSxVQUFVLEVBQUUsQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUMvQyxDQUFDO2FBQ0g7WUFDRCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDbkM7UUFDRCw4Q0FBOEM7UUFFOUMsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQ2pFLENBQUM7SUFFRDs7T0FFRzs7Ozs7OztJQUNILGtDQUFTOzs7Ozs7SUFBVCxVQUNFLFdBQW1CLEVBQ25CLEtBQWlDO1FBQWpDLHNCQUFBLEVBQUEsVUFBaUM7UUFFakMsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FDcEIsTUFBTSxDQUNKLGdCQUFnQixDQUFDLGdDQUFnQyxDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsQ0FDdEUsQ0FDRixDQUFDO0lBQ0osQ0FBQztJQUVEOztPQUVHOzs7Ozs7O0lBQ0gsa0NBQVM7Ozs7OztJQUFULFVBQ0UsV0FBbUIsRUFDbkIsS0FBaUM7UUFBakMsc0JBQUEsRUFBQSxVQUFpQztRQUVqQyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUNwQixNQUFNLENBQ0osZ0JBQWdCLENBQUMsZ0NBQWdDLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxDQUN0RSxDQUNGLENBQUM7SUFDSixDQUFDO0lBRUQ7O09BRUc7Ozs7Ozs7SUFDSCxpQ0FBUTs7Ozs7O0lBQVIsVUFDRSxXQUFtQixFQUNuQixLQUFpQztRQUFqQyxzQkFBQSxFQUFBLFVBQWlDO1FBRWpDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQ3BCLE1BQU0sQ0FDSixnQkFBZ0IsQ0FBQyw4QkFBOEIsQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLENBQ3BFLENBQ0YsQ0FBQztJQUNKLENBQUM7SUFFRDs7OztPQUlHOzs7Ozs7Ozs7SUFDSCwrQkFBTTs7Ozs7Ozs7SUFBTixVQUFPLFdBQW1CLEVBQUUsS0FBaUM7UUFBakMsc0JBQUEsRUFBQSxVQUFpQztRQUMzRCxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLGNBQWMsQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDMUUsQ0FBQzs7Z0JBakhGLFVBQVU7Ozs7Z0JBVk0sS0FBSztnQkFPYixxQkFBcUI7O0lBcUg5QixxQkFBQztDQUFBLEFBbEhELElBa0hDO1NBakhZLGNBQWM7Ozs7Ozs7SUFpQnpCLGtDQUErRDs7Ozs7SUFMN0QsK0JBQXdDOzs7OztJQUN4Qyx3Q0FBZ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBzZWxlY3QsIFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgcXVldWVTY2hlZHVsZXIgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCwgb2JzZXJ2ZU9uLCBzaGFyZVJlcGxheSwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgUHJvZHVjdCB9IGZyb20gJy4uLy4uL21vZGVsL3Byb2R1Y3QubW9kZWwnO1xuaW1wb3J0IHsgUHJvZHVjdEFjdGlvbnMgfSBmcm9tICcuLi9zdG9yZS9hY3Rpb25zL2luZGV4JztcbmltcG9ydCB7IFN0YXRlV2l0aFByb2R1Y3QgfSBmcm9tICcuLi9zdG9yZS9wcm9kdWN0LXN0YXRlJztcbmltcG9ydCB7IFByb2R1Y3RTZWxlY3RvcnMgfSBmcm9tICcuLi9zdG9yZS9zZWxlY3RvcnMvaW5kZXgnO1xuaW1wb3J0IHsgUHJvZHVjdExvYWRpbmdTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvcHJvZHVjdC1sb2FkaW5nLnNlcnZpY2UnO1xuaW1wb3J0IHsgUHJvZHVjdFNjb3BlIH0gZnJvbSAnLi4vbW9kZWwvcHJvZHVjdC1zY29wZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBQcm9kdWN0U2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHN0b3JlOiBTdG9yZTxTdGF0ZVdpdGhQcm9kdWN0PixcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6dW5pZmllZC1zaWduYXR1cmVzXG4gICAgcHJvZHVjdExvYWRpbmc6IFByb2R1Y3RMb2FkaW5nU2VydmljZVxuICApO1xuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgc2luY2UgMS40XG4gICAqL1xuICBjb25zdHJ1Y3RvcihzdG9yZTogU3RvcmU8U3RhdGVXaXRoUHJvZHVjdD4pO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBzdG9yZTogU3RvcmU8U3RhdGVXaXRoUHJvZHVjdD4sXG4gICAgcHJvdGVjdGVkIHByb2R1Y3RMb2FkaW5nPzogUHJvZHVjdExvYWRpbmdTZXJ2aWNlXG4gICkge31cblxuICAvKiogQGRlcHJlY2F0ZWQgc2luY2UgMS40ICovXG4gIHByaXZhdGUgcHJvZHVjdHM6IHsgW2NvZGU6IHN0cmluZ106IE9ic2VydmFibGU8UHJvZHVjdD4gfSA9IHt9O1xuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBwcm9kdWN0IG9ic2VydmFibGUuIFRoZSBwcm9kdWN0IHdpbGwgYmUgbG9hZGVkXG4gICAqIHdoZW5ldmVyIHRoZXJlJ3Mgbm8gdmFsdWUgb2JzZXJ2ZWQuXG4gICAqXG4gICAqIFRoZSB1bmRlcmx5aW5nIHByb2R1Y3QgbG9hZGVyIGVuc3VyZXMgdGhhdCB0aGUgcHJvZHVjdCBpc1xuICAgKiBvbmx5IGxvYWRlZCBvbmNlLCBldmVuIGluIGNhc2Ugb2YgcGFyYWxsZWwgb2JzZXJ2ZXJzLlxuICAgKlxuICAgKiBZb3Ugc2hvdWxkIHByb3ZpZGUgcHJvZHVjdCBkYXRhIHNjb3BlIHlvdSBhcmUgaW50ZXJlc3RlZCBpbiB0byBub3QgbG9hZCBhbGxcbiAgICogdGhlIGRhdGEgaWYgbm90IG5lZWRlZC4gWW91IGNhbiBwcm92aWRlIG1vcmUgdGhhbiBvbmUgc2NvcGUuXG4gICAqXG4gICAqIEBwYXJhbSBwcm9kdWN0Q29kZSBQcm9kdWN0IGNvZGUgdG8gbG9hZFxuICAgKiBAcGFyYW0gc2NvcGVzIFNjb3BlIG9yIHNjb3BlcyBvZiB0aGUgcHJvZHVjdCBkYXRhXG4gICAqL1xuICBnZXQoXG4gICAgcHJvZHVjdENvZGU6IHN0cmluZyxcbiAgICBzY29wZXM6IChQcm9kdWN0U2NvcGUgfCBzdHJpbmcpW10gfCBQcm9kdWN0U2NvcGUgfCBzdHJpbmcgPSAnJ1xuICApOiBPYnNlcnZhYmxlPFByb2R1Y3Q+IHtcbiAgICAvLyBUT0RPOiBSZW1vdmUsIGRlcHJlY2F0ZWQgc2luY2UgMS40XG4gICAgaWYgKCF0aGlzLnByb2R1Y3RMb2FkaW5nKSB7XG4gICAgICBpZiAoIXRoaXMucHJvZHVjdHNbcHJvZHVjdENvZGVdKSB7XG4gICAgICAgIHRoaXMucHJvZHVjdHNbcHJvZHVjdENvZGVdID0gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgICAgIHNlbGVjdChQcm9kdWN0U2VsZWN0b3JzLmdldFNlbGVjdGVkUHJvZHVjdFN0YXRlRmFjdG9yeShwcm9kdWN0Q29kZSkpLFxuICAgICAgICAgIG9ic2VydmVPbihxdWV1ZVNjaGVkdWxlciksXG4gICAgICAgICAgdGFwKHByb2R1Y3RTdGF0ZSA9PiB7XG4gICAgICAgICAgICBjb25zdCBhdHRlbXB0ZWRMb2FkID1cbiAgICAgICAgICAgICAgcHJvZHVjdFN0YXRlLmxvYWRpbmcgfHxcbiAgICAgICAgICAgICAgcHJvZHVjdFN0YXRlLnN1Y2Nlc3MgfHxcbiAgICAgICAgICAgICAgcHJvZHVjdFN0YXRlLmVycm9yO1xuXG4gICAgICAgICAgICBpZiAoIWF0dGVtcHRlZExvYWQpIHtcbiAgICAgICAgICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgUHJvZHVjdEFjdGlvbnMuTG9hZFByb2R1Y3QocHJvZHVjdENvZGUpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBtYXAocHJvZHVjdFN0YXRlID0+IHByb2R1Y3RTdGF0ZS52YWx1ZSksXG4gICAgICAgICAgc2hhcmVSZXBsYXkoeyBidWZmZXJTaXplOiAxLCByZWZDb3VudDogdHJ1ZSB9KVxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMucHJvZHVjdHNbcHJvZHVjdENvZGVdO1xuICAgIH1cbiAgICAvLyBFTkQgT0YgKFRPRE86IFJlbW92ZSwgZGVwcmVjYXRlZCBzaW5jZSAxLjQpXG5cbiAgICByZXR1cm4gdGhpcy5wcm9kdWN0TG9hZGluZy5nZXQocHJvZHVjdENvZGUsIFtdLmNvbmNhdChzY29wZXMpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGJvb2xlYW4gb2JzZXJ2YWJsZSBmb3IgcHJvZHVjdCdzIGxvYWRpbmcgc3RhdGVcbiAgICovXG4gIGlzTG9hZGluZyhcbiAgICBwcm9kdWN0Q29kZTogc3RyaW5nLFxuICAgIHNjb3BlOiBQcm9kdWN0U2NvcGUgfCBzdHJpbmcgPSAnJ1xuICApOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KFxuICAgICAgICBQcm9kdWN0U2VsZWN0b3JzLmdldFNlbGVjdGVkUHJvZHVjdExvYWRpbmdGYWN0b3J5KHByb2R1Y3RDb2RlLCBzY29wZSlcbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYm9vbGVhbiBvYnNlcnZhYmxlIGZvciBwcm9kdWN0J3MgbG9hZCBzdWNjZXNzIHN0YXRlXG4gICAqL1xuICBpc1N1Y2Nlc3MoXG4gICAgcHJvZHVjdENvZGU6IHN0cmluZyxcbiAgICBzY29wZTogUHJvZHVjdFNjb3BlIHwgc3RyaW5nID0gJydcbiAgKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChcbiAgICAgICAgUHJvZHVjdFNlbGVjdG9ycy5nZXRTZWxlY3RlZFByb2R1Y3RTdWNjZXNzRmFjdG9yeShwcm9kdWN0Q29kZSwgc2NvcGUpXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGJvb2xlYW4gb2JzZXJ2YWJsZSBmb3IgcHJvZHVjdCdzIGxvYWQgZXJyb3Igc3RhdGVcbiAgICovXG4gIGhhc0Vycm9yKFxuICAgIHByb2R1Y3RDb2RlOiBzdHJpbmcsXG4gICAgc2NvcGU6IFByb2R1Y3RTY29wZSB8IHN0cmluZyA9ICcnXG4gICk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoXG4gICAgICAgIFByb2R1Y3RTZWxlY3RvcnMuZ2V0U2VsZWN0ZWRQcm9kdWN0RXJyb3JGYWN0b3J5KHByb2R1Y3RDb2RlLCBzY29wZSlcbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbG9hZHMgdGhlIHByb2R1Y3QuIFRoZSBwcm9kdWN0IGlzIGxvYWRlZCBpbXBsaWNldGx5XG4gICAqIHdoZW5ldmVyIHNlbGVjdGVkIGJ5IHRoZSBgZ2V0YCwgYnV0IGluIHNvbWUgY2FzZXMgYW5cbiAgICogZXhwbGljaXQgcmVsb2FkIG1pZ2h0IGJlIG5lZWRlZC5cbiAgICovXG4gIHJlbG9hZChwcm9kdWN0Q29kZTogc3RyaW5nLCBzY29wZTogUHJvZHVjdFNjb3BlIHwgc3RyaW5nID0gJycpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBQcm9kdWN0QWN0aW9ucy5Mb2FkUHJvZHVjdChwcm9kdWN0Q29kZSwgc2NvcGUpKTtcbiAgfVxufVxuIl19