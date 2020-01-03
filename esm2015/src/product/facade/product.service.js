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
export class ProductService {
    /**
     * @param {?} store
     * @param {?=} productLoading
     */
    constructor(store, productLoading) {
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
     * @param {?} productCode Product code to load
     * @param {?=} scopes Scope or scopes of the product data
     * @return {?}
     */
    get(productCode, scopes = '') {
        // TODO: Remove, deprecated since 1.4
        if (!this.productLoading) {
            if (!this.products[productCode]) {
                this.products[productCode] = this.store.pipe(select(ProductSelectors.getSelectedProductStateFactory(productCode)), observeOn(queueScheduler), tap((/**
                 * @param {?} productState
                 * @return {?}
                 */
                productState => {
                    /** @type {?} */
                    const attemptedLoad = productState.loading ||
                        productState.success ||
                        productState.error;
                    if (!attemptedLoad) {
                        this.store.dispatch(new ProductActions.LoadProduct(productCode));
                    }
                })), map((/**
                 * @param {?} productState
                 * @return {?}
                 */
                productState => productState.value)), shareReplay({ bufferSize: 1, refCount: true }));
            }
            return this.products[productCode];
        }
        // END OF (TODO: Remove, deprecated since 1.4)
        return this.productLoading.get(productCode, [].concat(scopes));
    }
    /**
     * Returns boolean observable for product's loading state
     * @param {?} productCode
     * @param {?=} scope
     * @return {?}
     */
    isLoading(productCode, scope = '') {
        return this.store.pipe(select(ProductSelectors.getSelectedProductLoadingFactory(productCode, scope)));
    }
    /**
     * Returns boolean observable for product's load success state
     * @param {?} productCode
     * @param {?=} scope
     * @return {?}
     */
    isSuccess(productCode, scope = '') {
        return this.store.pipe(select(ProductSelectors.getSelectedProductSuccessFactory(productCode, scope)));
    }
    /**
     * Returns boolean observable for product's load error state
     * @param {?} productCode
     * @param {?=} scope
     * @return {?}
     */
    hasError(productCode, scope = '') {
        return this.store.pipe(select(ProductSelectors.getSelectedProductErrorFactory(productCode, scope)));
    }
    /**
     * Reloads the product. The product is loaded implicetly
     * whenever selected by the `get`, but in some cases an
     * explicit reload might be needed.
     * @param {?} productCode
     * @param {?=} scope
     * @return {?}
     */
    reload(productCode, scope = '') {
        this.store.dispatch(new ProductActions.LoadProduct(productCode, scope));
    }
}
ProductService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ProductService.ctorParameters = () => [
    { type: Store },
    { type: ProductLoadingService }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3Byb2R1Y3QvZmFjYWRlL3Byb2R1Y3Quc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUM1QyxPQUFPLEVBQWMsY0FBYyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2xELE9BQU8sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVsRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFeEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDNUQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFJNUUsTUFBTSxPQUFPLGNBQWM7Ozs7O0lBV3pCLFlBQ1ksS0FBOEIsRUFDOUIsY0FBc0M7UUFEdEMsVUFBSyxHQUFMLEtBQUssQ0FBeUI7UUFDOUIsbUJBQWMsR0FBZCxjQUFjLENBQXdCOzs7O1FBSTFDLGFBQVEsR0FBNEMsRUFBRSxDQUFDO0lBSDVELENBQUM7Ozs7Ozs7Ozs7Ozs7OztJQWtCSixHQUFHLENBQ0QsV0FBbUIsRUFDbkIsU0FBNEQsRUFBRTtRQUU5RCxxQ0FBcUM7UUFDckMsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUU7WUFDeEIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLEVBQUU7Z0JBQy9CLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQzFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyw4QkFBOEIsQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUNwRSxTQUFTLENBQUMsY0FBYyxDQUFDLEVBQ3pCLEdBQUc7Ozs7Z0JBQUMsWUFBWSxDQUFDLEVBQUU7OzBCQUNYLGFBQWEsR0FDakIsWUFBWSxDQUFDLE9BQU87d0JBQ3BCLFlBQVksQ0FBQyxPQUFPO3dCQUNwQixZQUFZLENBQUMsS0FBSztvQkFFcEIsSUFBSSxDQUFDLGFBQWEsRUFBRTt3QkFDbEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxjQUFjLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7cUJBQ2xFO2dCQUNILENBQUMsRUFBQyxFQUNGLEdBQUc7Ozs7Z0JBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFDLEVBQ3ZDLFdBQVcsQ0FBQyxFQUFFLFVBQVUsRUFBRSxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDLENBQy9DLENBQUM7YUFDSDtZQUNELE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUNuQztRQUNELDhDQUE4QztRQUU5QyxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDakUsQ0FBQzs7Ozs7OztJQUtELFNBQVMsQ0FDUCxXQUFtQixFQUNuQixRQUErQixFQUFFO1FBRWpDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQ3BCLE1BQU0sQ0FDSixnQkFBZ0IsQ0FBQyxnQ0FBZ0MsQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLENBQ3RFLENBQ0YsQ0FBQztJQUNKLENBQUM7Ozs7Ozs7SUFLRCxTQUFTLENBQ1AsV0FBbUIsRUFDbkIsUUFBK0IsRUFBRTtRQUVqQyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUNwQixNQUFNLENBQ0osZ0JBQWdCLENBQUMsZ0NBQWdDLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxDQUN0RSxDQUNGLENBQUM7SUFDSixDQUFDOzs7Ozs7O0lBS0QsUUFBUSxDQUNOLFdBQW1CLEVBQ25CLFFBQStCLEVBQUU7UUFFakMsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FDcEIsTUFBTSxDQUNKLGdCQUFnQixDQUFDLDhCQUE4QixDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsQ0FDcEUsQ0FDRixDQUFDO0lBQ0osQ0FBQzs7Ozs7Ozs7O0lBT0QsTUFBTSxDQUFDLFdBQW1CLEVBQUUsUUFBK0IsRUFBRTtRQUMzRCxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLGNBQWMsQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDMUUsQ0FBQzs7O1lBakhGLFVBQVU7Ozs7WUFWTSxLQUFLO1lBT2IscUJBQXFCOzs7Ozs7OztJQXFCNUIsa0NBQStEOzs7OztJQUw3RCwrQkFBd0M7Ozs7O0lBQ3hDLHdDQUFnRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHNlbGVjdCwgU3RvcmUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBxdWV1ZVNjaGVkdWxlciB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCBvYnNlcnZlT24sIHNoYXJlUmVwbGF5LCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBQcm9kdWN0IH0gZnJvbSAnLi4vLi4vbW9kZWwvcHJvZHVjdC5tb2RlbCc7XG5pbXBvcnQgeyBQcm9kdWN0QWN0aW9ucyB9IGZyb20gJy4uL3N0b3JlL2FjdGlvbnMvaW5kZXgnO1xuaW1wb3J0IHsgU3RhdGVXaXRoUHJvZHVjdCB9IGZyb20gJy4uL3N0b3JlL3Byb2R1Y3Qtc3RhdGUnO1xuaW1wb3J0IHsgUHJvZHVjdFNlbGVjdG9ycyB9IGZyb20gJy4uL3N0b3JlL3NlbGVjdG9ycy9pbmRleCc7XG5pbXBvcnQgeyBQcm9kdWN0TG9hZGluZ1NlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9wcm9kdWN0LWxvYWRpbmcuc2VydmljZSc7XG5pbXBvcnQgeyBQcm9kdWN0U2NvcGUgfSBmcm9tICcuLi9tb2RlbC9wcm9kdWN0LXNjb3BlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFByb2R1Y3RTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgc3RvcmU6IFN0b3JlPFN0YXRlV2l0aFByb2R1Y3Q+LFxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTp1bmlmaWVkLXNpZ25hdHVyZXNcbiAgICBwcm9kdWN0TG9hZGluZzogUHJvZHVjdExvYWRpbmdTZXJ2aWNlXG4gICk7XG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCBzaW5jZSAxLjRcbiAgICovXG4gIGNvbnN0cnVjdG9yKHN0b3JlOiBTdG9yZTxTdGF0ZVdpdGhQcm9kdWN0Pik7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIHN0b3JlOiBTdG9yZTxTdGF0ZVdpdGhQcm9kdWN0PixcbiAgICBwcm90ZWN0ZWQgcHJvZHVjdExvYWRpbmc/OiBQcm9kdWN0TG9hZGluZ1NlcnZpY2VcbiAgKSB7fVxuXG4gIC8qKiBAZGVwcmVjYXRlZCBzaW5jZSAxLjQgKi9cbiAgcHJpdmF0ZSBwcm9kdWN0czogeyBbY29kZTogc3RyaW5nXTogT2JzZXJ2YWJsZTxQcm9kdWN0PiB9ID0ge307XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHByb2R1Y3Qgb2JzZXJ2YWJsZS4gVGhlIHByb2R1Y3Qgd2lsbCBiZSBsb2FkZWRcbiAgICogd2hlbmV2ZXIgdGhlcmUncyBubyB2YWx1ZSBvYnNlcnZlZC5cbiAgICpcbiAgICogVGhlIHVuZGVybHlpbmcgcHJvZHVjdCBsb2FkZXIgZW5zdXJlcyB0aGF0IHRoZSBwcm9kdWN0IGlzXG4gICAqIG9ubHkgbG9hZGVkIG9uY2UsIGV2ZW4gaW4gY2FzZSBvZiBwYXJhbGxlbCBvYnNlcnZlcnMuXG4gICAqXG4gICAqIFlvdSBzaG91bGQgcHJvdmlkZSBwcm9kdWN0IGRhdGEgc2NvcGUgeW91IGFyZSBpbnRlcmVzdGVkIGluIHRvIG5vdCBsb2FkIGFsbFxuICAgKiB0aGUgZGF0YSBpZiBub3QgbmVlZGVkLiBZb3UgY2FuIHByb3ZpZGUgbW9yZSB0aGFuIG9uZSBzY29wZS5cbiAgICpcbiAgICogQHBhcmFtIHByb2R1Y3RDb2RlIFByb2R1Y3QgY29kZSB0byBsb2FkXG4gICAqIEBwYXJhbSBzY29wZXMgU2NvcGUgb3Igc2NvcGVzIG9mIHRoZSBwcm9kdWN0IGRhdGFcbiAgICovXG4gIGdldChcbiAgICBwcm9kdWN0Q29kZTogc3RyaW5nLFxuICAgIHNjb3BlczogKFByb2R1Y3RTY29wZSB8IHN0cmluZylbXSB8IFByb2R1Y3RTY29wZSB8IHN0cmluZyA9ICcnXG4gICk6IE9ic2VydmFibGU8UHJvZHVjdD4ge1xuICAgIC8vIFRPRE86IFJlbW92ZSwgZGVwcmVjYXRlZCBzaW5jZSAxLjRcbiAgICBpZiAoIXRoaXMucHJvZHVjdExvYWRpbmcpIHtcbiAgICAgIGlmICghdGhpcy5wcm9kdWN0c1twcm9kdWN0Q29kZV0pIHtcbiAgICAgICAgdGhpcy5wcm9kdWN0c1twcm9kdWN0Q29kZV0gPSB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICAgICAgc2VsZWN0KFByb2R1Y3RTZWxlY3RvcnMuZ2V0U2VsZWN0ZWRQcm9kdWN0U3RhdGVGYWN0b3J5KHByb2R1Y3RDb2RlKSksXG4gICAgICAgICAgb2JzZXJ2ZU9uKHF1ZXVlU2NoZWR1bGVyKSxcbiAgICAgICAgICB0YXAocHJvZHVjdFN0YXRlID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGF0dGVtcHRlZExvYWQgPVxuICAgICAgICAgICAgICBwcm9kdWN0U3RhdGUubG9hZGluZyB8fFxuICAgICAgICAgICAgICBwcm9kdWN0U3RhdGUuc3VjY2VzcyB8fFxuICAgICAgICAgICAgICBwcm9kdWN0U3RhdGUuZXJyb3I7XG5cbiAgICAgICAgICAgIGlmICghYXR0ZW1wdGVkTG9hZCkge1xuICAgICAgICAgICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBQcm9kdWN0QWN0aW9ucy5Mb2FkUHJvZHVjdChwcm9kdWN0Q29kZSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIG1hcChwcm9kdWN0U3RhdGUgPT4gcHJvZHVjdFN0YXRlLnZhbHVlKSxcbiAgICAgICAgICBzaGFyZVJlcGxheSh7IGJ1ZmZlclNpemU6IDEsIHJlZkNvdW50OiB0cnVlIH0pXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy5wcm9kdWN0c1twcm9kdWN0Q29kZV07XG4gICAgfVxuICAgIC8vIEVORCBPRiAoVE9ETzogUmVtb3ZlLCBkZXByZWNhdGVkIHNpbmNlIDEuNClcblxuICAgIHJldHVybiB0aGlzLnByb2R1Y3RMb2FkaW5nLmdldChwcm9kdWN0Q29kZSwgW10uY29uY2F0KHNjb3BlcykpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYm9vbGVhbiBvYnNlcnZhYmxlIGZvciBwcm9kdWN0J3MgbG9hZGluZyBzdGF0ZVxuICAgKi9cbiAgaXNMb2FkaW5nKFxuICAgIHByb2R1Y3RDb2RlOiBzdHJpbmcsXG4gICAgc2NvcGU6IFByb2R1Y3RTY29wZSB8IHN0cmluZyA9ICcnXG4gICk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoXG4gICAgICAgIFByb2R1Y3RTZWxlY3RvcnMuZ2V0U2VsZWN0ZWRQcm9kdWN0TG9hZGluZ0ZhY3RvcnkocHJvZHVjdENvZGUsIHNjb3BlKVxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBib29sZWFuIG9ic2VydmFibGUgZm9yIHByb2R1Y3QncyBsb2FkIHN1Y2Nlc3Mgc3RhdGVcbiAgICovXG4gIGlzU3VjY2VzcyhcbiAgICBwcm9kdWN0Q29kZTogc3RyaW5nLFxuICAgIHNjb3BlOiBQcm9kdWN0U2NvcGUgfCBzdHJpbmcgPSAnJ1xuICApOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KFxuICAgICAgICBQcm9kdWN0U2VsZWN0b3JzLmdldFNlbGVjdGVkUHJvZHVjdFN1Y2Nlc3NGYWN0b3J5KHByb2R1Y3RDb2RlLCBzY29wZSlcbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYm9vbGVhbiBvYnNlcnZhYmxlIGZvciBwcm9kdWN0J3MgbG9hZCBlcnJvciBzdGF0ZVxuICAgKi9cbiAgaGFzRXJyb3IoXG4gICAgcHJvZHVjdENvZGU6IHN0cmluZyxcbiAgICBzY29wZTogUHJvZHVjdFNjb3BlIHwgc3RyaW5nID0gJydcbiAgKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChcbiAgICAgICAgUHJvZHVjdFNlbGVjdG9ycy5nZXRTZWxlY3RlZFByb2R1Y3RFcnJvckZhY3RvcnkocHJvZHVjdENvZGUsIHNjb3BlKVxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmVsb2FkcyB0aGUgcHJvZHVjdC4gVGhlIHByb2R1Y3QgaXMgbG9hZGVkIGltcGxpY2V0bHlcbiAgICogd2hlbmV2ZXIgc2VsZWN0ZWQgYnkgdGhlIGBnZXRgLCBidXQgaW4gc29tZSBjYXNlcyBhblxuICAgKiBleHBsaWNpdCByZWxvYWQgbWlnaHQgYmUgbmVlZGVkLlxuICAgKi9cbiAgcmVsb2FkKHByb2R1Y3RDb2RlOiBzdHJpbmcsIHNjb3BlOiBQcm9kdWN0U2NvcGUgfCBzdHJpbmcgPSAnJyk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IFByb2R1Y3RBY3Rpb25zLkxvYWRQcm9kdWN0KHByb2R1Y3RDb2RlLCBzY29wZSkpO1xuICB9XG59XG4iXX0=