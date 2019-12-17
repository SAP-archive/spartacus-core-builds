/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { combineLatest, queueScheduler } from 'rxjs';
import { auditTime, distinctUntilChanged, map, observeOn, shareReplay, tap, } from 'rxjs/operators';
import { ProductActions } from '../store/actions/index';
import { ProductSelectors } from '../store/selectors/index';
import { LoadingScopesService } from '../../occ/services/loading-scopes.service';
import { deepMerge } from '../../config/utils/deep-merge';
export class ProductService {
    /**
     * @param {?} store
     * @param {?=} loadingScopes
     */
    constructor(store, loadingScopes) {
        this.store = store;
        this.loadingScopes = loadingScopes;
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
        scopes = [].concat(scopes);
        if (this.loadingScopes) {
            scopes = this.loadingScopes.expand('product', scopes);
        }
        this.initProductScopes(productCode, scopes);
        if (scopes.length > 1) {
            return combineLatest(scopes.map((/**
             * @param {?} scope
             * @return {?}
             */
            scope => this.products[productCode][scope]))).pipe(auditTime(0), map((/**
             * @param {?} productParts
             * @return {?}
             */
            productParts => productParts.find(Boolean) && deepMerge({}, ...productParts))));
        }
        else {
            return this.products[productCode][scopes[0]];
        }
    }
    /**
     * @private
     * @param {?} productCode
     * @param {?} scopes
     * @return {?}
     */
    initProductScopes(productCode, scopes) {
        if (!this.products[productCode]) {
            this.products[productCode] = {};
        }
        for (const scope of scopes) {
            if (!this.products[productCode][scope]) {
                this.products[productCode][scope] = this.getProductForScope(productCode, scope);
            }
        }
    }
    /**
     * Creates observable for providing specified product data for the scope
     *
     * @private
     * @param {?} productCode
     * @param {?} scope
     * @return {?}
     */
    getProductForScope(productCode, scope) {
        return this.store.pipe(select(ProductSelectors.getSelectedProductStateFactory(productCode, scope)), observeOn(queueScheduler), tap((/**
         * @param {?} productState
         * @return {?}
         */
        productState => {
            /** @type {?} */
            const attemptedLoad = productState.loading || productState.success || productState.error;
            if (!attemptedLoad) {
                this.store.dispatch(new ProductActions.LoadProduct(productCode, scope));
            }
        })), map((/**
         * @param {?} productState
         * @return {?}
         */
        productState => productState.value)), distinctUntilChanged(), shareReplay({ bufferSize: 1, refCount: true }));
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
    { type: LoadingScopesService }
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
    /**
     * @type {?}
     * @protected
     */
    ProductService.prototype.loadingScopes;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3Byb2R1Y3QvZmFjYWRlL3Byb2R1Y3Quc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUM1QyxPQUFPLEVBQUUsYUFBYSxFQUFjLGNBQWMsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNqRSxPQUFPLEVBQ0wsU0FBUyxFQUNULG9CQUFvQixFQUNwQixHQUFHLEVBQ0gsU0FBUyxFQUNULFdBQVcsRUFDWCxHQUFHLEdBQ0osTUFBTSxnQkFBZ0IsQ0FBQztBQUV4QixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFeEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDNUQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDakYsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBRzFELE1BQU0sT0FBTyxjQUFjOzs7OztJQVd6QixZQUNZLEtBQThCLEVBQzlCLGFBQW9DO1FBRHBDLFVBQUssR0FBTCxLQUFLLENBQXlCO1FBQzlCLGtCQUFhLEdBQWIsYUFBYSxDQUF1QjtRQUd4QyxhQUFRLEdBRVosRUFBRSxDQUFDO0lBSkosQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0lBbUJKLEdBQUcsQ0FDRCxXQUFtQixFQUNuQixTQUE0QixFQUFFO1FBRTlCLE1BQU0sR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRTNCLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUN0QixNQUFNLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsU0FB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QUtELFFBQVEsQ0FBQyxXQUFtQixFQUFFLEtBQUssR0FBRyxFQUFFO1FBQ3RDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQ3BCLE1BQU0sQ0FDSixnQkFBZ0IsQ0FBQyw4QkFBOEIsQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLENBQ3BFLENBQ0YsQ0FBQztJQUNKLENBQUM7Ozs7Ozs7OztJQU9ELE1BQU0sQ0FBQyxXQUFtQixFQUFFLEtBQUssR0FBRyxFQUFFO1FBQ3BDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksY0FBYyxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUMxRSxDQUFDOzs7WUFuSkYsVUFBVTs7OztZQWpCTSxLQUFLO1lBY2Isb0JBQW9COzs7Ozs7O0lBb0IzQixrQ0FFTzs7Ozs7SUFOTCwrQkFBd0M7Ozs7O0lBQ3hDLHVDQUE4QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHNlbGVjdCwgU3RvcmUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBjb21iaW5lTGF0ZXN0LCBPYnNlcnZhYmxlLCBxdWV1ZVNjaGVkdWxlciB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtcbiAgYXVkaXRUaW1lLFxuICBkaXN0aW5jdFVudGlsQ2hhbmdlZCxcbiAgbWFwLFxuICBvYnNlcnZlT24sXG4gIHNoYXJlUmVwbGF5LFxuICB0YXAsXG59IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFByb2R1Y3QgfSBmcm9tICcuLi8uLi9tb2RlbC9wcm9kdWN0Lm1vZGVsJztcbmltcG9ydCB7IFByb2R1Y3RBY3Rpb25zIH0gZnJvbSAnLi4vc3RvcmUvYWN0aW9ucy9pbmRleCc7XG5pbXBvcnQgeyBTdGF0ZVdpdGhQcm9kdWN0IH0gZnJvbSAnLi4vc3RvcmUvcHJvZHVjdC1zdGF0ZSc7XG5pbXBvcnQgeyBQcm9kdWN0U2VsZWN0b3JzIH0gZnJvbSAnLi4vc3RvcmUvc2VsZWN0b3JzL2luZGV4JztcbmltcG9ydCB7IExvYWRpbmdTY29wZXNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vb2NjL3NlcnZpY2VzL2xvYWRpbmctc2NvcGVzLnNlcnZpY2UnO1xuaW1wb3J0IHsgZGVlcE1lcmdlIH0gZnJvbSAnLi4vLi4vY29uZmlnL3V0aWxzL2RlZXAtbWVyZ2UnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUHJvZHVjdFNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBzdG9yZTogU3RvcmU8U3RhdGVXaXRoUHJvZHVjdD4sXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnVuaWZpZWQtc2lnbmF0dXJlc1xuICAgIGxvYWRpbmdTY29wZXM6IExvYWRpbmdTY29wZXNTZXJ2aWNlXG4gICk7XG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCBzaW5jZSAxLjRcbiAgICovXG4gIGNvbnN0cnVjdG9yKHN0b3JlOiBTdG9yZTxTdGF0ZVdpdGhQcm9kdWN0Pik7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIHN0b3JlOiBTdG9yZTxTdGF0ZVdpdGhQcm9kdWN0PixcbiAgICBwcm90ZWN0ZWQgbG9hZGluZ1Njb3Blcz86IExvYWRpbmdTY29wZXNTZXJ2aWNlXG4gICkge31cblxuICBwcml2YXRlIHByb2R1Y3RzOiB7XG4gICAgW2NvZGU6IHN0cmluZ106IHsgW3Njb3BlOiBzdHJpbmddOiBPYnNlcnZhYmxlPFByb2R1Y3Q+IH07XG4gIH0gPSB7fTtcblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgcHJvZHVjdCBvYnNlcnZhYmxlLiBUaGUgcHJvZHVjdCB3aWxsIGJlIGxvYWRlZFxuICAgKiB3aGVuZXZlciB0aGVyZSdzIG5vIHZhbHVlIG9ic2VydmVkLlxuICAgKlxuICAgKiBUaGUgdW5kZXJseWluZyBwcm9kdWN0IGxvYWRlciBlbnN1cmVzIHRoYXQgdGhlIHByb2R1Y3QgaXNcbiAgICogb25seSBsb2FkZWQgb25jZSwgZXZlbiBpbiBjYXNlIG9mIHBhcmFsbGVsIG9ic2VydmVycy5cbiAgICpcbiAgICogWW91IHNob3VsZCBwcm92aWRlIHByb2R1Y3QgZGF0YSBzY29wZSB5b3UgYXJlIGludGVyZXN0ZWQgaW4gdG8gbm90IGxvYWQgYWxsXG4gICAqIHRoZSBkYXRhIGlmIG5vdCBuZWVkZWQuIFlvdSBjYW4gcHJvdmlkZSBtb3JlIHRoYW4gb25lIHNjb3BlLlxuICAgKlxuICAgKiBAcGFyYW0gcHJvZHVjdENvZGUgUHJvZHVjdCBjb2RlIHRvIGxvYWRcbiAgICogQHBhcmFtIHNjb3BlcyBTY29wZSBvciBzY29wZXMgb2YgdGhlIHByb2R1Y3QgZGF0YVxuICAgKi9cbiAgZ2V0KFxuICAgIHByb2R1Y3RDb2RlOiBzdHJpbmcsXG4gICAgc2NvcGVzOiBzdHJpbmdbXSB8IHN0cmluZyA9ICcnXG4gICk6IE9ic2VydmFibGU8UHJvZHVjdD4ge1xuICAgIHNjb3BlcyA9IFtdLmNvbmNhdChzY29wZXMpO1xuXG4gICAgaWYgKHRoaXMubG9hZGluZ1Njb3Blcykge1xuICAgICAgc2NvcGVzID0gdGhpcy5sb2FkaW5nU2NvcGVzLmV4cGFuZCgncHJvZHVjdCcsIHNjb3Blcyk7XG4gICAgfVxuXG4gICAgdGhpcy5pbml0UHJvZHVjdFNjb3Blcyhwcm9kdWN0Q29kZSwgc2NvcGVzKTtcblxuICAgIGlmIChzY29wZXMubGVuZ3RoID4gMSkge1xuICAgICAgcmV0dXJuIGNvbWJpbmVMYXRlc3QoXG4gICAgICAgIHNjb3Blcy5tYXAoc2NvcGUgPT4gdGhpcy5wcm9kdWN0c1twcm9kdWN0Q29kZV1bc2NvcGVdKVxuICAgICAgKS5waXBlKFxuICAgICAgICBhdWRpdFRpbWUoMCksXG4gICAgICAgIG1hcChcbiAgICAgICAgICBwcm9kdWN0UGFydHMgPT5cbiAgICAgICAgICAgIHByb2R1Y3RQYXJ0cy5maW5kKEJvb2xlYW4pICYmIGRlZXBNZXJnZSh7fSwgLi4ucHJvZHVjdFBhcnRzKVxuICAgICAgICApXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5wcm9kdWN0c1twcm9kdWN0Q29kZV1bc2NvcGVzWzBdXTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGluaXRQcm9kdWN0U2NvcGVzKHByb2R1Y3RDb2RlOiBzdHJpbmcsIHNjb3Blczogc3RyaW5nW10pOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMucHJvZHVjdHNbcHJvZHVjdENvZGVdKSB7XG4gICAgICB0aGlzLnByb2R1Y3RzW3Byb2R1Y3RDb2RlXSA9IHt9O1xuICAgIH1cblxuICAgIGZvciAoY29uc3Qgc2NvcGUgb2Ygc2NvcGVzKSB7XG4gICAgICBpZiAoIXRoaXMucHJvZHVjdHNbcHJvZHVjdENvZGVdW3Njb3BlXSkge1xuICAgICAgICB0aGlzLnByb2R1Y3RzW3Byb2R1Y3RDb2RlXVtzY29wZV0gPSB0aGlzLmdldFByb2R1Y3RGb3JTY29wZShcbiAgICAgICAgICBwcm9kdWN0Q29kZSxcbiAgICAgICAgICBzY29wZVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIG9ic2VydmFibGUgZm9yIHByb3ZpZGluZyBzcGVjaWZpZWQgcHJvZHVjdCBkYXRhIGZvciB0aGUgc2NvcGVcbiAgICpcbiAgICogQHBhcmFtIHByb2R1Y3RDb2RlXG4gICAqIEBwYXJhbSBzY29wZVxuICAgKi9cbiAgcHJpdmF0ZSBnZXRQcm9kdWN0Rm9yU2NvcGUoXG4gICAgcHJvZHVjdENvZGU6IHN0cmluZyxcbiAgICBzY29wZTogc3RyaW5nXG4gICk6IE9ic2VydmFibGU8UHJvZHVjdD4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoXG4gICAgICAgIFByb2R1Y3RTZWxlY3RvcnMuZ2V0U2VsZWN0ZWRQcm9kdWN0U3RhdGVGYWN0b3J5KHByb2R1Y3RDb2RlLCBzY29wZSlcbiAgICAgICksXG4gICAgICBvYnNlcnZlT24ocXVldWVTY2hlZHVsZXIpLFxuICAgICAgdGFwKHByb2R1Y3RTdGF0ZSA9PiB7XG4gICAgICAgIGNvbnN0IGF0dGVtcHRlZExvYWQgPVxuICAgICAgICAgIHByb2R1Y3RTdGF0ZS5sb2FkaW5nIHx8IHByb2R1Y3RTdGF0ZS5zdWNjZXNzIHx8IHByb2R1Y3RTdGF0ZS5lcnJvcjtcblxuICAgICAgICBpZiAoIWF0dGVtcHRlZExvYWQpIHtcbiAgICAgICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKFxuICAgICAgICAgICAgbmV3IFByb2R1Y3RBY3Rpb25zLkxvYWRQcm9kdWN0KHByb2R1Y3RDb2RlLCBzY29wZSlcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9KSxcbiAgICAgIG1hcChwcm9kdWN0U3RhdGUgPT4gcHJvZHVjdFN0YXRlLnZhbHVlKSxcbiAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCksXG4gICAgICBzaGFyZVJlcGxheSh7IGJ1ZmZlclNpemU6IDEsIHJlZkNvdW50OiB0cnVlIH0pXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGJvb2xlYW4gb2JzZXJ2YWJsZSBmb3IgcHJvZHVjdCdzIGxvYWRpbmcgc3RhdGVcbiAgICovXG4gIGlzTG9hZGluZyhwcm9kdWN0Q29kZTogc3RyaW5nLCBzY29wZSA9ICcnKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChcbiAgICAgICAgUHJvZHVjdFNlbGVjdG9ycy5nZXRTZWxlY3RlZFByb2R1Y3RMb2FkaW5nRmFjdG9yeShwcm9kdWN0Q29kZSwgc2NvcGUpXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGJvb2xlYW4gb2JzZXJ2YWJsZSBmb3IgcHJvZHVjdCdzIGxvYWQgc3VjY2VzcyBzdGF0ZVxuICAgKi9cbiAgaXNTdWNjZXNzKHByb2R1Y3RDb2RlOiBzdHJpbmcsIHNjb3BlID0gJycpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KFxuICAgICAgICBQcm9kdWN0U2VsZWN0b3JzLmdldFNlbGVjdGVkUHJvZHVjdFN1Y2Nlc3NGYWN0b3J5KHByb2R1Y3RDb2RlLCBzY29wZSlcbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYm9vbGVhbiBvYnNlcnZhYmxlIGZvciBwcm9kdWN0J3MgbG9hZCBlcnJvciBzdGF0ZVxuICAgKi9cbiAgaGFzRXJyb3IocHJvZHVjdENvZGU6IHN0cmluZywgc2NvcGUgPSAnJyk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoXG4gICAgICAgIFByb2R1Y3RTZWxlY3RvcnMuZ2V0U2VsZWN0ZWRQcm9kdWN0RXJyb3JGYWN0b3J5KHByb2R1Y3RDb2RlLCBzY29wZSlcbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbG9hZHMgdGhlIHByb2R1Y3QuIFRoZSBwcm9kdWN0IGlzIGxvYWRlZCBpbXBsaWNldGx5XG4gICAqIHdoZW5ldmVyIHNlbGVjdGVkIGJ5IHRoZSBgZ2V0YCwgYnV0IGluIHNvbWUgY2FzZXMgYW5cbiAgICogZXhwbGljaXQgcmVsb2FkIG1pZ2h0IGJlIG5lZWRlZC5cbiAgICovXG4gIHJlbG9hZChwcm9kdWN0Q29kZTogc3RyaW5nLCBzY29wZSA9ICcnKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgUHJvZHVjdEFjdGlvbnMuTG9hZFByb2R1Y3QocHJvZHVjdENvZGUsIHNjb3BlKSk7XG4gIH1cbn1cbiJdfQ==