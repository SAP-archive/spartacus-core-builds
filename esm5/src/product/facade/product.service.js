/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { ReplaySubject } from 'rxjs';
import { map, multicast, refCount, tap } from 'rxjs/operators';
import * as fromStore from '../store/index';
var ProductService = /** @class */ (function () {
    function ProductService(store) {
        this.store = store;
        this.products = {};
    }
    /**
     * Returns the product observable. The product will be loaded
     * whenever there's no value observed.
     *
     * The underlying product loader ensures that the product is
     * only loaded once, even in case of parallel observers.
     */
    /**
     * Returns the product observable. The product will be loaded
     * whenever there's no value observed.
     *
     * The underlying product loader ensures that the product is
     * only loaded once, even in case of parallel observers.
     * @param {?} productCode
     * @return {?}
     */
    ProductService.prototype.get = /**
     * Returns the product observable. The product will be loaded
     * whenever there's no value observed.
     *
     * The underlying product loader ensures that the product is
     * only loaded once, even in case of parallel observers.
     * @param {?} productCode
     * @return {?}
     */
    function (productCode) {
        var _this = this;
        if (!this.products[productCode]) {
            this.products[productCode] = this.store.pipe(select(fromStore.getSelectedProductStateFactory(productCode)), tap(function (productState) {
                /** @type {?} */
                var attemptedLoad = productState.loading || productState.success || productState.error;
                if (!attemptedLoad) {
                    _this.store.dispatch(new fromStore.LoadProduct(productCode));
                }
            }), map(function (productState) { return productState.value; }), 
            // TODO: Replace next two lines with shareReplay(1, undefined, true) when RxJS 6.4 will be in use
            multicast(function () { return new ReplaySubject(1); }), refCount());
        }
        return this.products[productCode];
    };
    /**
     * Returns boolean observable for product's loading state
     */
    /**
     * Returns boolean observable for product's loading state
     * @param {?} productCode
     * @return {?}
     */
    ProductService.prototype.isLoading = /**
     * Returns boolean observable for product's loading state
     * @param {?} productCode
     * @return {?}
     */
    function (productCode) {
        return this.store.pipe(select(fromStore.getSelectedProductLoadingFactory(productCode)));
    };
    /**
     * Returns boolean observable for product's load success state
     */
    /**
     * Returns boolean observable for product's load success state
     * @param {?} productCode
     * @return {?}
     */
    ProductService.prototype.isSuccess = /**
     * Returns boolean observable for product's load success state
     * @param {?} productCode
     * @return {?}
     */
    function (productCode) {
        return this.store.pipe(select(fromStore.getSelectedProductSuccessFactory(productCode)));
    };
    /**
     * Returns boolean observable for product's load error state
     */
    /**
     * Returns boolean observable for product's load error state
     * @param {?} productCode
     * @return {?}
     */
    ProductService.prototype.hasError = /**
     * Returns boolean observable for product's load error state
     * @param {?} productCode
     * @return {?}
     */
    function (productCode) {
        return this.store.pipe(select(fromStore.getSelectedProductErrorFactory(productCode)));
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
     * @return {?}
     */
    ProductService.prototype.reload = /**
     * Reloads the product. The product is loaded implicetly
     * whenever selected by the `get`, but in some cases an
     * explicit reload might be needed.
     * @param {?} productCode
     * @return {?}
     */
    function (productCode) {
        this.store.dispatch(new fromStore.LoadProduct(productCode));
    };
    ProductService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    ProductService.ctorParameters = function () { return [
        { type: Store }
    ]; };
    return ProductService;
}());
export { ProductService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ProductService.prototype.products;
    /**
     * @type {?}
     * @private
     */
    ProductService.prototype.store;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3Byb2R1Y3QvZmFjYWRlL3Byb2R1Y3Quc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUU1QyxPQUFPLEVBQWMsYUFBYSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUvRCxPQUFPLEtBQUssU0FBUyxNQUFNLGdCQUFnQixDQUFDO0FBRzVDO0lBRUUsd0JBQW9CLEtBQXdDO1FBQXhDLFVBQUssR0FBTCxLQUFLLENBQW1DO1FBRXBELGFBQVEsR0FBNEMsRUFBRSxDQUFDO0lBRkEsQ0FBQztJQUloRTs7Ozs7O09BTUc7Ozs7Ozs7Ozs7SUFDSCw0QkFBRzs7Ozs7Ozs7O0lBQUgsVUFBSSxXQUFtQjtRQUF2QixpQkFtQkM7UUFsQkMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLEVBQUU7WUFDL0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FDMUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyw4QkFBOEIsQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUM3RCxHQUFHLENBQUMsVUFBQSxZQUFZOztvQkFDUixhQUFhLEdBQ2pCLFlBQVksQ0FBQyxPQUFPLElBQUksWUFBWSxDQUFDLE9BQU8sSUFBSSxZQUFZLENBQUMsS0FBSztnQkFFcEUsSUFBSSxDQUFDLGFBQWEsRUFBRTtvQkFDbEIsS0FBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxTQUFTLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7aUJBQzdEO1lBQ0gsQ0FBQyxDQUFDLEVBQ0YsR0FBRyxDQUFDLFVBQUEsWUFBWSxJQUFJLE9BQUEsWUFBWSxDQUFDLEtBQUssRUFBbEIsQ0FBa0IsQ0FBQztZQUN2QyxpR0FBaUc7WUFDakcsU0FBUyxDQUFDLGNBQU0sT0FBQSxJQUFJLGFBQWEsQ0FBQyxDQUFDLENBQUMsRUFBcEIsQ0FBb0IsQ0FBQyxFQUNyQyxRQUFRLEVBQUUsQ0FDWCxDQUFDO1NBQ0g7UUFDRCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUVEOztPQUVHOzs7Ozs7SUFDSCxrQ0FBUzs7Ozs7SUFBVCxVQUFVLFdBQW1CO1FBQzNCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQ3BCLE1BQU0sQ0FBQyxTQUFTLENBQUMsZ0NBQWdDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FDaEUsQ0FBQztJQUNKLENBQUM7SUFFRDs7T0FFRzs7Ozs7O0lBQ0gsa0NBQVM7Ozs7O0lBQVQsVUFBVSxXQUFtQjtRQUMzQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUNwQixNQUFNLENBQUMsU0FBUyxDQUFDLGdDQUFnQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQ2hFLENBQUM7SUFDSixDQUFDO0lBRUQ7O09BRUc7Ozs7OztJQUNILGlDQUFROzs7OztJQUFSLFVBQVMsV0FBbUI7UUFDMUIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FDcEIsTUFBTSxDQUFDLFNBQVMsQ0FBQyw4QkFBOEIsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUM5RCxDQUFDO0lBQ0osQ0FBQztJQUVEOzs7O09BSUc7Ozs7Ozs7O0lBQ0gsK0JBQU07Ozs7Ozs7SUFBTixVQUFPLFdBQW1CO1FBQ3hCLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksU0FBUyxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO0lBQzlELENBQUM7O2dCQXBFRixVQUFVOzs7O2dCQVJGLEtBQUs7O0lBNkVkLHFCQUFDO0NBQUEsQUFyRUQsSUFxRUM7U0FwRVksY0FBYzs7Ozs7O0lBR3pCLGtDQUErRDs7Ozs7SUFGbkQsK0JBQWdEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTdG9yZSwgc2VsZWN0IH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBSZXBsYXlTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAsIG11bHRpY2FzdCwgcmVmQ291bnQsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0ICogYXMgZnJvbVN0b3JlIGZyb20gJy4uL3N0b3JlL2luZGV4JztcbmltcG9ydCB7IFByb2R1Y3QgfSBmcm9tICcuLi8uLi9vY2Mvb2NjLW1vZGVscy9vY2MubW9kZWxzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFByb2R1Y3RTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzdG9yZTogU3RvcmU8ZnJvbVN0b3JlLlN0YXRlV2l0aFByb2R1Y3Q+KSB7fVxuXG4gIHByaXZhdGUgcHJvZHVjdHM6IHsgW2NvZGU6IHN0cmluZ106IE9ic2VydmFibGU8UHJvZHVjdD4gfSA9IHt9O1xuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBwcm9kdWN0IG9ic2VydmFibGUuIFRoZSBwcm9kdWN0IHdpbGwgYmUgbG9hZGVkXG4gICAqIHdoZW5ldmVyIHRoZXJlJ3Mgbm8gdmFsdWUgb2JzZXJ2ZWQuXG4gICAqXG4gICAqIFRoZSB1bmRlcmx5aW5nIHByb2R1Y3QgbG9hZGVyIGVuc3VyZXMgdGhhdCB0aGUgcHJvZHVjdCBpc1xuICAgKiBvbmx5IGxvYWRlZCBvbmNlLCBldmVuIGluIGNhc2Ugb2YgcGFyYWxsZWwgb2JzZXJ2ZXJzLlxuICAgKi9cbiAgZ2V0KHByb2R1Y3RDb2RlOiBzdHJpbmcpOiBPYnNlcnZhYmxlPFByb2R1Y3Q+IHtcbiAgICBpZiAoIXRoaXMucHJvZHVjdHNbcHJvZHVjdENvZGVdKSB7XG4gICAgICB0aGlzLnByb2R1Y3RzW3Byb2R1Y3RDb2RlXSA9IHRoaXMuc3RvcmUucGlwZShcbiAgICAgICAgc2VsZWN0KGZyb21TdG9yZS5nZXRTZWxlY3RlZFByb2R1Y3RTdGF0ZUZhY3RvcnkocHJvZHVjdENvZGUpKSxcbiAgICAgICAgdGFwKHByb2R1Y3RTdGF0ZSA9PiB7XG4gICAgICAgICAgY29uc3QgYXR0ZW1wdGVkTG9hZCA9XG4gICAgICAgICAgICBwcm9kdWN0U3RhdGUubG9hZGluZyB8fCBwcm9kdWN0U3RhdGUuc3VjY2VzcyB8fCBwcm9kdWN0U3RhdGUuZXJyb3I7XG5cbiAgICAgICAgICBpZiAoIWF0dGVtcHRlZExvYWQpIHtcbiAgICAgICAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IGZyb21TdG9yZS5Mb2FkUHJvZHVjdChwcm9kdWN0Q29kZSkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSksXG4gICAgICAgIG1hcChwcm9kdWN0U3RhdGUgPT4gcHJvZHVjdFN0YXRlLnZhbHVlKSxcbiAgICAgICAgLy8gVE9ETzogUmVwbGFjZSBuZXh0IHR3byBsaW5lcyB3aXRoIHNoYXJlUmVwbGF5KDEsIHVuZGVmaW5lZCwgdHJ1ZSkgd2hlbiBSeEpTIDYuNCB3aWxsIGJlIGluIHVzZVxuICAgICAgICBtdWx0aWNhc3QoKCkgPT4gbmV3IFJlcGxheVN1YmplY3QoMSkpLFxuICAgICAgICByZWZDb3VudCgpXG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5wcm9kdWN0c1twcm9kdWN0Q29kZV07XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBib29sZWFuIG9ic2VydmFibGUgZm9yIHByb2R1Y3QncyBsb2FkaW5nIHN0YXRlXG4gICAqL1xuICBpc0xvYWRpbmcocHJvZHVjdENvZGU6IHN0cmluZyk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoZnJvbVN0b3JlLmdldFNlbGVjdGVkUHJvZHVjdExvYWRpbmdGYWN0b3J5KHByb2R1Y3RDb2RlKSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYm9vbGVhbiBvYnNlcnZhYmxlIGZvciBwcm9kdWN0J3MgbG9hZCBzdWNjZXNzIHN0YXRlXG4gICAqL1xuICBpc1N1Y2Nlc3MocHJvZHVjdENvZGU6IHN0cmluZyk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoZnJvbVN0b3JlLmdldFNlbGVjdGVkUHJvZHVjdFN1Y2Nlc3NGYWN0b3J5KHByb2R1Y3RDb2RlKSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYm9vbGVhbiBvYnNlcnZhYmxlIGZvciBwcm9kdWN0J3MgbG9hZCBlcnJvciBzdGF0ZVxuICAgKi9cbiAgaGFzRXJyb3IocHJvZHVjdENvZGU6IHN0cmluZyk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoZnJvbVN0b3JlLmdldFNlbGVjdGVkUHJvZHVjdEVycm9yRmFjdG9yeShwcm9kdWN0Q29kZSkpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWxvYWRzIHRoZSBwcm9kdWN0LiBUaGUgcHJvZHVjdCBpcyBsb2FkZWQgaW1wbGljZXRseVxuICAgKiB3aGVuZXZlciBzZWxlY3RlZCBieSB0aGUgYGdldGAsIGJ1dCBpbiBzb21lIGNhc2VzIGFuXG4gICAqIGV4cGxpY2l0IHJlbG9hZCBtaWdodCBiZSBuZWVkZWQuXG4gICAqL1xuICByZWxvYWQocHJvZHVjdENvZGU6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IGZyb21TdG9yZS5Mb2FkUHJvZHVjdChwcm9kdWN0Q29kZSkpO1xuICB9XG59XG4iXX0=