/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { map, shareReplay, tap } from 'rxjs/operators';
import * as fromStore from '../store/index';
export class ProductService {
    /**
     * @param {?} store
     */
    constructor(store) {
        this.store = store;
        this.products = {};
    }
    /**
     * Returns the product observable. The product will be loaded
     * whenever there's no value observed.
     *
     * The underlying product loader ensures that the product is
     * only loaded once, even in case of parallel observers.
     * @param {?} productCode
     * @return {?}
     */
    get(productCode) {
        if (!this.products[productCode]) {
            this.products[productCode] = this.store.pipe(select(fromStore.getSelectedProductStateFactory(productCode)), tap((/**
             * @param {?} productState
             * @return {?}
             */
            productState => {
                /** @type {?} */
                const attemptedLoad = productState.loading || productState.success || productState.error;
                if (!attemptedLoad) {
                    this.store.dispatch(new fromStore.LoadProduct(productCode));
                }
            })), map((/**
             * @param {?} productState
             * @return {?}
             */
            productState => productState.value)), shareReplay({ bufferSize: 1, refCount: true }));
        }
        return this.products[productCode];
    }
    /**
     * Returns boolean observable for product's loading state
     * @param {?} productCode
     * @return {?}
     */
    isLoading(productCode) {
        return this.store.pipe(select(fromStore.getSelectedProductLoadingFactory(productCode)));
    }
    /**
     * Returns boolean observable for product's load success state
     * @param {?} productCode
     * @return {?}
     */
    isSuccess(productCode) {
        return this.store.pipe(select(fromStore.getSelectedProductSuccessFactory(productCode)));
    }
    /**
     * Returns boolean observable for product's load error state
     * @param {?} productCode
     * @return {?}
     */
    hasError(productCode) {
        return this.store.pipe(select(fromStore.getSelectedProductErrorFactory(productCode)));
    }
    /**
     * Reloads the product. The product is loaded implicetly
     * whenever selected by the `get`, but in some cases an
     * explicit reload might be needed.
     * @param {?} productCode
     * @return {?}
     */
    reload(productCode) {
        this.store.dispatch(new fromStore.LoadProduct(productCode));
    }
}
ProductService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ProductService.ctorParameters = () => [
    { type: Store }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    ProductService.prototype.products;
    /**
     * @type {?}
     * @protected
     */
    ProductService.prototype.store;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3Byb2R1Y3QvZmFjYWRlL3Byb2R1Y3Quc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUU1QyxPQUFPLEVBQUUsR0FBRyxFQUFFLFdBQVcsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN2RCxPQUFPLEtBQUssU0FBUyxNQUFNLGdCQUFnQixDQUFDO0FBSTVDLE1BQU0sT0FBTyxjQUFjOzs7O0lBQ3pCLFlBQXNCLEtBQXdDO1FBQXhDLFVBQUssR0FBTCxLQUFLLENBQW1DO1FBRXRELGFBQVEsR0FBNEMsRUFBRSxDQUFDO0lBRkUsQ0FBQzs7Ozs7Ozs7OztJQVdsRSxHQUFHLENBQUMsV0FBbUI7UUFDckIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLEVBQUU7WUFDL0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FDMUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyw4QkFBOEIsQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUM3RCxHQUFHOzs7O1lBQUMsWUFBWSxDQUFDLEVBQUU7O3NCQUNYLGFBQWEsR0FDakIsWUFBWSxDQUFDLE9BQU8sSUFBSSxZQUFZLENBQUMsT0FBTyxJQUFJLFlBQVksQ0FBQyxLQUFLO2dCQUVwRSxJQUFJLENBQUMsYUFBYSxFQUFFO29CQUNsQixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLFNBQVMsQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztpQkFDN0Q7WUFDSCxDQUFDLEVBQUMsRUFDRixHQUFHOzs7O1lBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFDLEVBQ3ZDLFdBQVcsQ0FBQyxFQUFFLFVBQVUsRUFBRSxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDLENBQy9DLENBQUM7U0FDSDtRQUNELE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNwQyxDQUFDOzs7Ozs7SUFLRCxTQUFTLENBQUMsV0FBbUI7UUFDM0IsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FDcEIsTUFBTSxDQUFDLFNBQVMsQ0FBQyxnQ0FBZ0MsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUNoRSxDQUFDO0lBQ0osQ0FBQzs7Ozs7O0lBS0QsU0FBUyxDQUFDLFdBQW1CO1FBQzNCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQ3BCLE1BQU0sQ0FBQyxTQUFTLENBQUMsZ0NBQWdDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FDaEUsQ0FBQztJQUNKLENBQUM7Ozs7OztJQUtELFFBQVEsQ0FBQyxXQUFtQjtRQUMxQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUNwQixNQUFNLENBQUMsU0FBUyxDQUFDLDhCQUE4QixDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQzlELENBQUM7SUFDSixDQUFDOzs7Ozs7OztJQU9ELE1BQU0sQ0FBQyxXQUFtQjtRQUN4QixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLFNBQVMsQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztJQUM5RCxDQUFDOzs7WUFsRUYsVUFBVTs7OztZQU5NLEtBQUs7Ozs7Ozs7SUFVcEIsa0NBQStEOzs7OztJQUZuRCwrQkFBa0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBzZWxlY3QsIFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCBzaGFyZVJlcGxheSwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0ICogYXMgZnJvbVN0b3JlIGZyb20gJy4uL3N0b3JlL2luZGV4JztcbmltcG9ydCB7IFByb2R1Y3QgfSBmcm9tICcuLi8uLi9tb2RlbC9wcm9kdWN0Lm1vZGVsJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFByb2R1Y3RTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIHN0b3JlOiBTdG9yZTxmcm9tU3RvcmUuU3RhdGVXaXRoUHJvZHVjdD4pIHt9XG5cbiAgcHJpdmF0ZSBwcm9kdWN0czogeyBbY29kZTogc3RyaW5nXTogT2JzZXJ2YWJsZTxQcm9kdWN0PiB9ID0ge307XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHByb2R1Y3Qgb2JzZXJ2YWJsZS4gVGhlIHByb2R1Y3Qgd2lsbCBiZSBsb2FkZWRcbiAgICogd2hlbmV2ZXIgdGhlcmUncyBubyB2YWx1ZSBvYnNlcnZlZC5cbiAgICpcbiAgICogVGhlIHVuZGVybHlpbmcgcHJvZHVjdCBsb2FkZXIgZW5zdXJlcyB0aGF0IHRoZSBwcm9kdWN0IGlzXG4gICAqIG9ubHkgbG9hZGVkIG9uY2UsIGV2ZW4gaW4gY2FzZSBvZiBwYXJhbGxlbCBvYnNlcnZlcnMuXG4gICAqL1xuICBnZXQocHJvZHVjdENvZGU6IHN0cmluZyk6IE9ic2VydmFibGU8UHJvZHVjdD4ge1xuICAgIGlmICghdGhpcy5wcm9kdWN0c1twcm9kdWN0Q29kZV0pIHtcbiAgICAgIHRoaXMucHJvZHVjdHNbcHJvZHVjdENvZGVdID0gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgICBzZWxlY3QoZnJvbVN0b3JlLmdldFNlbGVjdGVkUHJvZHVjdFN0YXRlRmFjdG9yeShwcm9kdWN0Q29kZSkpLFxuICAgICAgICB0YXAocHJvZHVjdFN0YXRlID0+IHtcbiAgICAgICAgICBjb25zdCBhdHRlbXB0ZWRMb2FkID1cbiAgICAgICAgICAgIHByb2R1Y3RTdGF0ZS5sb2FkaW5nIHx8IHByb2R1Y3RTdGF0ZS5zdWNjZXNzIHx8IHByb2R1Y3RTdGF0ZS5lcnJvcjtcblxuICAgICAgICAgIGlmICghYXR0ZW1wdGVkTG9hZCkge1xuICAgICAgICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgZnJvbVN0b3JlLkxvYWRQcm9kdWN0KHByb2R1Y3RDb2RlKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KSxcbiAgICAgICAgbWFwKHByb2R1Y3RTdGF0ZSA9PiBwcm9kdWN0U3RhdGUudmFsdWUpLFxuICAgICAgICBzaGFyZVJlcGxheSh7IGJ1ZmZlclNpemU6IDEsIHJlZkNvdW50OiB0cnVlIH0pXG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5wcm9kdWN0c1twcm9kdWN0Q29kZV07XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBib29sZWFuIG9ic2VydmFibGUgZm9yIHByb2R1Y3QncyBsb2FkaW5nIHN0YXRlXG4gICAqL1xuICBpc0xvYWRpbmcocHJvZHVjdENvZGU6IHN0cmluZyk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoZnJvbVN0b3JlLmdldFNlbGVjdGVkUHJvZHVjdExvYWRpbmdGYWN0b3J5KHByb2R1Y3RDb2RlKSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYm9vbGVhbiBvYnNlcnZhYmxlIGZvciBwcm9kdWN0J3MgbG9hZCBzdWNjZXNzIHN0YXRlXG4gICAqL1xuICBpc1N1Y2Nlc3MocHJvZHVjdENvZGU6IHN0cmluZyk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoZnJvbVN0b3JlLmdldFNlbGVjdGVkUHJvZHVjdFN1Y2Nlc3NGYWN0b3J5KHByb2R1Y3RDb2RlKSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYm9vbGVhbiBvYnNlcnZhYmxlIGZvciBwcm9kdWN0J3MgbG9hZCBlcnJvciBzdGF0ZVxuICAgKi9cbiAgaGFzRXJyb3IocHJvZHVjdENvZGU6IHN0cmluZyk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoZnJvbVN0b3JlLmdldFNlbGVjdGVkUHJvZHVjdEVycm9yRmFjdG9yeShwcm9kdWN0Q29kZSkpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWxvYWRzIHRoZSBwcm9kdWN0LiBUaGUgcHJvZHVjdCBpcyBsb2FkZWQgaW1wbGljZXRseVxuICAgKiB3aGVuZXZlciBzZWxlY3RlZCBieSB0aGUgYGdldGAsIGJ1dCBpbiBzb21lIGNhc2VzIGFuXG4gICAqIGV4cGxpY2l0IHJlbG9hZCBtaWdodCBiZSBuZWVkZWQuXG4gICAqL1xuICByZWxvYWQocHJvZHVjdENvZGU6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IGZyb21TdG9yZS5Mb2FkUHJvZHVjdChwcm9kdWN0Q29kZSkpO1xuICB9XG59XG4iXX0=