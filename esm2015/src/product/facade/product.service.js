/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { ReplaySubject } from 'rxjs';
import { map, multicast, refCount, tap } from 'rxjs/operators';
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
            this.products[productCode] = this.store.pipe(select(fromStore.getSelectedProductStateFactory(productCode)), tap(productState => {
                /** @type {?} */
                const attemptedLoad = productState.loading || productState.success || productState.error;
                if (!attemptedLoad) {
                    this.store.dispatch(new fromStore.LoadProduct(productCode));
                }
            }), map(productState => productState.value), 
            // TODO: Replace next two lines with shareReplay(1, undefined, true) when RxJS 6.4 will be in use
            multicast(() => new ReplaySubject(1)), refCount());
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
     * @private
     */
    ProductService.prototype.store;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3Byb2R1Y3QvZmFjYWRlL3Byb2R1Y3Quc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUM1QyxPQUFPLEVBQWMsYUFBYSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMvRCxPQUFPLEtBQUssU0FBUyxNQUFNLGdCQUFnQixDQUFDO0FBSTVDLE1BQU0sT0FBTyxjQUFjOzs7O0lBQ3pCLFlBQW9CLEtBQXdDO1FBQXhDLFVBQUssR0FBTCxLQUFLLENBQW1DO1FBRXBELGFBQVEsR0FBOEMsRUFBRSxDQUFDO0lBRkYsQ0FBQzs7Ozs7Ozs7OztJQVdoRSxHQUFHLENBQUMsV0FBbUI7UUFDckIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLEVBQUU7WUFDL0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FDMUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyw4QkFBOEIsQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUM3RCxHQUFHLENBQUMsWUFBWSxDQUFDLEVBQUU7O3NCQUNYLGFBQWEsR0FDakIsWUFBWSxDQUFDLE9BQU8sSUFBSSxZQUFZLENBQUMsT0FBTyxJQUFJLFlBQVksQ0FBQyxLQUFLO2dCQUVwRSxJQUFJLENBQUMsYUFBYSxFQUFFO29CQUNsQixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLFNBQVMsQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztpQkFDN0Q7WUFDSCxDQUFDLENBQUMsRUFDRixHQUFHLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDO1lBQ3ZDLGlHQUFpRztZQUNqRyxTQUFTLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFDckMsUUFBUSxFQUFFLENBQ1gsQ0FBQztTQUNIO1FBQ0QsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7Ozs7OztJQUtELFNBQVMsQ0FBQyxXQUFtQjtRQUMzQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUNwQixNQUFNLENBQUMsU0FBUyxDQUFDLGdDQUFnQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQ2hFLENBQUM7SUFDSixDQUFDOzs7Ozs7SUFLRCxTQUFTLENBQUMsV0FBbUI7UUFDM0IsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FDcEIsTUFBTSxDQUFDLFNBQVMsQ0FBQyxnQ0FBZ0MsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUNoRSxDQUFDO0lBQ0osQ0FBQzs7Ozs7O0lBS0QsUUFBUSxDQUFDLFdBQW1CO1FBQzFCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQ3BCLE1BQU0sQ0FBQyxTQUFTLENBQUMsOEJBQThCLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FDOUQsQ0FBQztJQUNKLENBQUM7Ozs7Ozs7O0lBT0QsTUFBTSxDQUFDLFdBQW1CO1FBQ3hCLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksU0FBUyxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO0lBQzlELENBQUM7OztZQXBFRixVQUFVOzs7O1lBTk0sS0FBSzs7Ozs7OztJQVVwQixrQ0FBaUU7Ozs7O0lBRnJELCtCQUFnRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHNlbGVjdCwgU3RvcmUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBSZXBsYXlTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAsIG11bHRpY2FzdCwgcmVmQ291bnQsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCAqIGFzIGZyb21TdG9yZSBmcm9tICcuLi9zdG9yZS9pbmRleCc7XG5pbXBvcnQgeyBVSVByb2R1Y3QgfSBmcm9tICcuLi9tb2RlbC9wcm9kdWN0JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFByb2R1Y3RTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzdG9yZTogU3RvcmU8ZnJvbVN0b3JlLlN0YXRlV2l0aFByb2R1Y3Q+KSB7fVxuXG4gIHByaXZhdGUgcHJvZHVjdHM6IHsgW2NvZGU6IHN0cmluZ106IE9ic2VydmFibGU8VUlQcm9kdWN0PiB9ID0ge307XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHByb2R1Y3Qgb2JzZXJ2YWJsZS4gVGhlIHByb2R1Y3Qgd2lsbCBiZSBsb2FkZWRcbiAgICogd2hlbmV2ZXIgdGhlcmUncyBubyB2YWx1ZSBvYnNlcnZlZC5cbiAgICpcbiAgICogVGhlIHVuZGVybHlpbmcgcHJvZHVjdCBsb2FkZXIgZW5zdXJlcyB0aGF0IHRoZSBwcm9kdWN0IGlzXG4gICAqIG9ubHkgbG9hZGVkIG9uY2UsIGV2ZW4gaW4gY2FzZSBvZiBwYXJhbGxlbCBvYnNlcnZlcnMuXG4gICAqL1xuICBnZXQocHJvZHVjdENvZGU6IHN0cmluZyk6IE9ic2VydmFibGU8VUlQcm9kdWN0PiB7XG4gICAgaWYgKCF0aGlzLnByb2R1Y3RzW3Byb2R1Y3RDb2RlXSkge1xuICAgICAgdGhpcy5wcm9kdWN0c1twcm9kdWN0Q29kZV0gPSB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICAgIHNlbGVjdChmcm9tU3RvcmUuZ2V0U2VsZWN0ZWRQcm9kdWN0U3RhdGVGYWN0b3J5KHByb2R1Y3RDb2RlKSksXG4gICAgICAgIHRhcChwcm9kdWN0U3RhdGUgPT4ge1xuICAgICAgICAgIGNvbnN0IGF0dGVtcHRlZExvYWQgPVxuICAgICAgICAgICAgcHJvZHVjdFN0YXRlLmxvYWRpbmcgfHwgcHJvZHVjdFN0YXRlLnN1Y2Nlc3MgfHwgcHJvZHVjdFN0YXRlLmVycm9yO1xuXG4gICAgICAgICAgaWYgKCFhdHRlbXB0ZWRMb2FkKSB7XG4gICAgICAgICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBmcm9tU3RvcmUuTG9hZFByb2R1Y3QocHJvZHVjdENvZGUpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pLFxuICAgICAgICBtYXAocHJvZHVjdFN0YXRlID0+IHByb2R1Y3RTdGF0ZS52YWx1ZSksXG4gICAgICAgIC8vIFRPRE86IFJlcGxhY2UgbmV4dCB0d28gbGluZXMgd2l0aCBzaGFyZVJlcGxheSgxLCB1bmRlZmluZWQsIHRydWUpIHdoZW4gUnhKUyA2LjQgd2lsbCBiZSBpbiB1c2VcbiAgICAgICAgbXVsdGljYXN0KCgpID0+IG5ldyBSZXBsYXlTdWJqZWN0KDEpKSxcbiAgICAgICAgcmVmQ291bnQoKVxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMucHJvZHVjdHNbcHJvZHVjdENvZGVdO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYm9vbGVhbiBvYnNlcnZhYmxlIGZvciBwcm9kdWN0J3MgbG9hZGluZyBzdGF0ZVxuICAgKi9cbiAgaXNMb2FkaW5nKHByb2R1Y3RDb2RlOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KGZyb21TdG9yZS5nZXRTZWxlY3RlZFByb2R1Y3RMb2FkaW5nRmFjdG9yeShwcm9kdWN0Q29kZSkpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGJvb2xlYW4gb2JzZXJ2YWJsZSBmb3IgcHJvZHVjdCdzIGxvYWQgc3VjY2VzcyBzdGF0ZVxuICAgKi9cbiAgaXNTdWNjZXNzKHByb2R1Y3RDb2RlOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KGZyb21TdG9yZS5nZXRTZWxlY3RlZFByb2R1Y3RTdWNjZXNzRmFjdG9yeShwcm9kdWN0Q29kZSkpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGJvb2xlYW4gb2JzZXJ2YWJsZSBmb3IgcHJvZHVjdCdzIGxvYWQgZXJyb3Igc3RhdGVcbiAgICovXG4gIGhhc0Vycm9yKHByb2R1Y3RDb2RlOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KGZyb21TdG9yZS5nZXRTZWxlY3RlZFByb2R1Y3RFcnJvckZhY3RvcnkocHJvZHVjdENvZGUpKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmVsb2FkcyB0aGUgcHJvZHVjdC4gVGhlIHByb2R1Y3QgaXMgbG9hZGVkIGltcGxpY2V0bHlcbiAgICogd2hlbmV2ZXIgc2VsZWN0ZWQgYnkgdGhlIGBnZXRgLCBidXQgaW4gc29tZSBjYXNlcyBhblxuICAgKiBleHBsaWNpdCByZWxvYWQgbWlnaHQgYmUgbmVlZGVkLlxuICAgKi9cbiAgcmVsb2FkKHByb2R1Y3RDb2RlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBmcm9tU3RvcmUuTG9hZFByb2R1Y3QocHJvZHVjdENvZGUpKTtcbiAgfVxufVxuIl19