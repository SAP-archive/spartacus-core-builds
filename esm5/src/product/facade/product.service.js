/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { map, shareReplay, tap } from 'rxjs/operators';
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
            }), map(function (productState) { return productState.value; }), shareReplay({ bufferSize: 1, refCount: true }));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3Byb2R1Y3QvZmFjYWRlL3Byb2R1Y3Quc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUU1QyxPQUFPLEVBQUUsR0FBRyxFQUFFLFdBQVcsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN2RCxPQUFPLEtBQUssU0FBUyxNQUFNLGdCQUFnQixDQUFDO0FBRzVDO0lBRUUsd0JBQW9CLEtBQXdDO1FBQXhDLFVBQUssR0FBTCxLQUFLLENBQW1DO1FBRXBELGFBQVEsR0FBNEMsRUFBRSxDQUFDO0lBRkEsQ0FBQztJQUloRTs7Ozs7O09BTUc7Ozs7Ozs7Ozs7SUFDSCw0QkFBRzs7Ozs7Ozs7O0lBQUgsVUFBSSxXQUFtQjtRQUF2QixpQkFpQkM7UUFoQkMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLEVBQUU7WUFDL0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FDMUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyw4QkFBOEIsQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUM3RCxHQUFHLENBQUMsVUFBQSxZQUFZOztvQkFDUixhQUFhLEdBQ2pCLFlBQVksQ0FBQyxPQUFPLElBQUksWUFBWSxDQUFDLE9BQU8sSUFBSSxZQUFZLENBQUMsS0FBSztnQkFFcEUsSUFBSSxDQUFDLGFBQWEsRUFBRTtvQkFDbEIsS0FBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxTQUFTLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7aUJBQzdEO1lBQ0gsQ0FBQyxDQUFDLEVBQ0YsR0FBRyxDQUFDLFVBQUEsWUFBWSxJQUFJLE9BQUEsWUFBWSxDQUFDLEtBQUssRUFBbEIsQ0FBa0IsQ0FBQyxFQUN2QyxXQUFXLENBQUMsRUFBRSxVQUFVLEVBQUUsQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUMvQyxDQUFDO1NBQ0g7UUFDRCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUVEOztPQUVHOzs7Ozs7SUFDSCxrQ0FBUzs7Ozs7SUFBVCxVQUFVLFdBQW1CO1FBQzNCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQ3BCLE1BQU0sQ0FBQyxTQUFTLENBQUMsZ0NBQWdDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FDaEUsQ0FBQztJQUNKLENBQUM7SUFFRDs7T0FFRzs7Ozs7O0lBQ0gsa0NBQVM7Ozs7O0lBQVQsVUFBVSxXQUFtQjtRQUMzQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUNwQixNQUFNLENBQUMsU0FBUyxDQUFDLGdDQUFnQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQ2hFLENBQUM7SUFDSixDQUFDO0lBRUQ7O09BRUc7Ozs7OztJQUNILGlDQUFROzs7OztJQUFSLFVBQVMsV0FBbUI7UUFDMUIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FDcEIsTUFBTSxDQUFDLFNBQVMsQ0FBQyw4QkFBOEIsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUM5RCxDQUFDO0lBQ0osQ0FBQztJQUVEOzs7O09BSUc7Ozs7Ozs7O0lBQ0gsK0JBQU07Ozs7Ozs7SUFBTixVQUFPLFdBQW1CO1FBQ3hCLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksU0FBUyxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO0lBQzlELENBQUM7O2dCQWxFRixVQUFVOzs7O2dCQU5NLEtBQUs7O0lBeUV0QixxQkFBQztDQUFBLEFBbkVELElBbUVDO1NBbEVZLGNBQWM7Ozs7OztJQUd6QixrQ0FBK0Q7Ozs7O0lBRm5ELCtCQUFnRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHNlbGVjdCwgU3RvcmUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAsIHNoYXJlUmVwbGF5LCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgKiBhcyBmcm9tU3RvcmUgZnJvbSAnLi4vc3RvcmUvaW5kZXgnO1xuaW1wb3J0IHsgUHJvZHVjdCB9IGZyb20gJy4uLy4uL21vZGVsL3Byb2R1Y3QubW9kZWwnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUHJvZHVjdFNlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHN0b3JlOiBTdG9yZTxmcm9tU3RvcmUuU3RhdGVXaXRoUHJvZHVjdD4pIHt9XG5cbiAgcHJpdmF0ZSBwcm9kdWN0czogeyBbY29kZTogc3RyaW5nXTogT2JzZXJ2YWJsZTxQcm9kdWN0PiB9ID0ge307XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHByb2R1Y3Qgb2JzZXJ2YWJsZS4gVGhlIHByb2R1Y3Qgd2lsbCBiZSBsb2FkZWRcbiAgICogd2hlbmV2ZXIgdGhlcmUncyBubyB2YWx1ZSBvYnNlcnZlZC5cbiAgICpcbiAgICogVGhlIHVuZGVybHlpbmcgcHJvZHVjdCBsb2FkZXIgZW5zdXJlcyB0aGF0IHRoZSBwcm9kdWN0IGlzXG4gICAqIG9ubHkgbG9hZGVkIG9uY2UsIGV2ZW4gaW4gY2FzZSBvZiBwYXJhbGxlbCBvYnNlcnZlcnMuXG4gICAqL1xuICBnZXQocHJvZHVjdENvZGU6IHN0cmluZyk6IE9ic2VydmFibGU8UHJvZHVjdD4ge1xuICAgIGlmICghdGhpcy5wcm9kdWN0c1twcm9kdWN0Q29kZV0pIHtcbiAgICAgIHRoaXMucHJvZHVjdHNbcHJvZHVjdENvZGVdID0gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgICBzZWxlY3QoZnJvbVN0b3JlLmdldFNlbGVjdGVkUHJvZHVjdFN0YXRlRmFjdG9yeShwcm9kdWN0Q29kZSkpLFxuICAgICAgICB0YXAocHJvZHVjdFN0YXRlID0+IHtcbiAgICAgICAgICBjb25zdCBhdHRlbXB0ZWRMb2FkID1cbiAgICAgICAgICAgIHByb2R1Y3RTdGF0ZS5sb2FkaW5nIHx8IHByb2R1Y3RTdGF0ZS5zdWNjZXNzIHx8IHByb2R1Y3RTdGF0ZS5lcnJvcjtcblxuICAgICAgICAgIGlmICghYXR0ZW1wdGVkTG9hZCkge1xuICAgICAgICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgZnJvbVN0b3JlLkxvYWRQcm9kdWN0KHByb2R1Y3RDb2RlKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KSxcbiAgICAgICAgbWFwKHByb2R1Y3RTdGF0ZSA9PiBwcm9kdWN0U3RhdGUudmFsdWUpLFxuICAgICAgICBzaGFyZVJlcGxheSh7IGJ1ZmZlclNpemU6IDEsIHJlZkNvdW50OiB0cnVlIH0pXG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5wcm9kdWN0c1twcm9kdWN0Q29kZV07XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBib29sZWFuIG9ic2VydmFibGUgZm9yIHByb2R1Y3QncyBsb2FkaW5nIHN0YXRlXG4gICAqL1xuICBpc0xvYWRpbmcocHJvZHVjdENvZGU6IHN0cmluZyk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoZnJvbVN0b3JlLmdldFNlbGVjdGVkUHJvZHVjdExvYWRpbmdGYWN0b3J5KHByb2R1Y3RDb2RlKSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYm9vbGVhbiBvYnNlcnZhYmxlIGZvciBwcm9kdWN0J3MgbG9hZCBzdWNjZXNzIHN0YXRlXG4gICAqL1xuICBpc1N1Y2Nlc3MocHJvZHVjdENvZGU6IHN0cmluZyk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoZnJvbVN0b3JlLmdldFNlbGVjdGVkUHJvZHVjdFN1Y2Nlc3NGYWN0b3J5KHByb2R1Y3RDb2RlKSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYm9vbGVhbiBvYnNlcnZhYmxlIGZvciBwcm9kdWN0J3MgbG9hZCBlcnJvciBzdGF0ZVxuICAgKi9cbiAgaGFzRXJyb3IocHJvZHVjdENvZGU6IHN0cmluZyk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoZnJvbVN0b3JlLmdldFNlbGVjdGVkUHJvZHVjdEVycm9yRmFjdG9yeShwcm9kdWN0Q29kZSkpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWxvYWRzIHRoZSBwcm9kdWN0LiBUaGUgcHJvZHVjdCBpcyBsb2FkZWQgaW1wbGljZXRseVxuICAgKiB3aGVuZXZlciBzZWxlY3RlZCBieSB0aGUgYGdldGAsIGJ1dCBpbiBzb21lIGNhc2VzIGFuXG4gICAqIGV4cGxpY2l0IHJlbG9hZCBtaWdodCBiZSBuZWVkZWQuXG4gICAqL1xuICByZWxvYWQocHJvZHVjdENvZGU6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IGZyb21TdG9yZS5Mb2FkUHJvZHVjdChwcm9kdWN0Q29kZSkpO1xuICB9XG59XG4iXX0=