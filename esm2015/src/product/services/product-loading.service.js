/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { combineLatest, defer, merge, of, using, } from 'rxjs';
import { auditTime, debounceTime, delay, distinctUntilChanged, filter, map, mapTo, shareReplay, tap, withLatestFrom, } from 'rxjs/operators';
import { ProductActions } from '../store/actions/index';
import { ProductSelectors } from '../store/selectors/index';
import { LoadingScopesService } from '../../occ/services/loading-scopes.service';
import { deepMerge } from '../../config/utils/deep-merge';
import { withdrawOn } from '../../util/withdraw-on';
import { Actions, ofType } from '@ngrx/effects';
import { isPlatformBrowser } from '@angular/common';
import * as i0 from "@angular/core";
import * as i1 from "@ngrx/store";
import * as i2 from "../../occ/services/loading-scopes.service";
import * as i3 from "@ngrx/effects";
export class ProductLoadingService {
    /**
     * @param {?} store
     * @param {?} loadingScopes
     * @param {?} actions$
     * @param {?} platformId
     */
    constructor(store, loadingScopes, actions$, platformId) {
        this.store = store;
        this.loadingScopes = loadingScopes;
        this.actions$ = actions$;
        this.platformId = platformId;
        this.products = {};
    }
    /**
     * @param {?} productCode
     * @param {?} scopes
     * @return {?}
     */
    get(productCode, scopes) {
        scopes = this.loadingScopes.expand('product', scopes);
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
     * @protected
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
     * @protected
     * @param {?} productCode
     * @param {?} scope
     * @return {?}
     */
    getProductForScope(productCode, scope) {
        /** @type {?} */
        const shouldLoad$ = this.store.pipe(select(ProductSelectors.getSelectedProductStateFactory(productCode, scope)), map((/**
         * @param {?} productState
         * @return {?}
         */
        productState => !productState.loading && !productState.success && !productState.error)), distinctUntilChanged(), filter((/**
         * @param {?} x
         * @return {?}
         */
        x => x)));
        /** @type {?} */
        const isLoading$ = this.store.pipe(select(ProductSelectors.getSelectedProductLoadingFactory(productCode, scope)));
        /** @type {?} */
        const productLoadLogic$ = merge(shouldLoad$, ...this.getProductReloadTriggers(productCode, scope)).pipe(debounceTime(0), withLatestFrom(isLoading$), tap((/**
         * @param {?} __0
         * @return {?}
         */
        ([, isLoading]) => {
            if (!isLoading) {
                this.store.dispatch(new ProductActions.LoadProduct(productCode, scope));
            }
        })));
        /** @type {?} */
        const productData$ = this.store.pipe(select(ProductSelectors.getSelectedProductFactory(productCode, scope)));
        return using((/**
         * @return {?}
         */
        () => productLoadLogic$.subscribe()), (/**
         * @return {?}
         */
        () => productData$)).pipe(shareReplay({ bufferSize: 1, refCount: true }));
    }
    /**
     * Returns reload triggers for product per scope
     *
     * @protected
     * @param {?} productCode
     * @param {?} scope
     * @return {?}
     */
    getProductReloadTriggers(productCode, scope) {
        /** @type {?} */
        const triggers = [];
        // max age trigger add
        /** @type {?} */
        const maxAge = this.loadingScopes.getMaxAge('product', scope);
        if (maxAge && isPlatformBrowser(this.platformId)) {
            // we want to grab load product success and load product fail for this product and scope
            /** @type {?} */
            const loadFinish$ = this.actions$.pipe(filter((/**
             * @param {?} action
             * @return {?}
             */
            (action) => (action.type === ProductActions.LOAD_PRODUCT_SUCCESS ||
                action.type === ProductActions.LOAD_PRODUCT_FAIL) &&
                action.meta.entityId === productCode &&
                action.meta.scope === scope)));
            /** @type {?} */
            const loadStart$ = this.actions$.pipe(ofType(ProductActions.LOAD_PRODUCT), filter((/**
             * @param {?} action
             * @return {?}
             */
            (action) => action.payload === productCode && action.meta.scope === scope)));
            triggers.push(this.getMaxAgeTrigger(loadStart$, loadFinish$, maxAge));
        }
        return triggers;
    }
    /**
     * Generic method that returns stream triggering reload by maxAge
     *
     * Could be refactored to separate service in future to use in other
     * max age reload implementations
     *
     * @private
     * @param {?} loadStart$ Stream that emits on load start
     * @param {?} loadFinish$ Stream that emits on load finish
     * @param {?} maxAge max age
     * @param {?=} scheduler
     * @return {?}
     */
    getMaxAgeTrigger(loadStart$, loadFinish$, maxAge, scheduler) {
        /** @type {?} */
        let timestamp = 0;
        /** @type {?} */
        const now = (/**
         * @return {?}
         */
        () => (scheduler ? scheduler.now() : Date.now()));
        /** @type {?} */
        const timestamp$ = loadFinish$.pipe(tap((/**
         * @return {?}
         */
        () => (timestamp = now()))));
        /** @type {?} */
        const shouldReload$ = defer((/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            const age = now() - timestamp;
            /** @type {?} */
            const timestampRefresh$ = timestamp$.pipe(delay(maxAge, scheduler), mapTo(true), withdrawOn(loadStart$));
            if (age > maxAge) {
                // we should emit first value immediately
                return merge(of(true), timestampRefresh$);
            }
            else if (age === 0) {
                // edge case, we should emit max age timeout after next load success
                // could happen with artificial schedulers
                return timestampRefresh$;
            }
            else {
                // we should emit first value when age will expire
                return merge(of(true).pipe(delay(maxAge - age, scheduler)), timestampRefresh$);
            }
        }));
        return shouldReload$;
    }
}
ProductLoadingService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
ProductLoadingService.ctorParameters = () => [
    { type: Store },
    { type: LoadingScopesService },
    { type: Actions },
    { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
];
/** @nocollapse */ ProductLoadingService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function ProductLoadingService_Factory() { return new ProductLoadingService(i0.ɵɵinject(i1.Store), i0.ɵɵinject(i2.LoadingScopesService), i0.ɵɵinject(i3.Actions), i0.ɵɵinject(i0.PLATFORM_ID)); }, token: ProductLoadingService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @protected
     */
    ProductLoadingService.prototype.products;
    /**
     * @type {?}
     * @protected
     */
    ProductLoadingService.prototype.store;
    /**
     * @type {?}
     * @protected
     */
    ProductLoadingService.prototype.loadingScopes;
    /**
     * @type {?}
     * @protected
     */
    ProductLoadingService.prototype.actions$;
    /**
     * @type {?}
     * @protected
     */
    ProductLoadingService.prototype.platformId;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1sb2FkaW5nLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvcHJvZHVjdC9zZXJ2aWNlcy9wcm9kdWN0LWxvYWRpbmcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2hFLE9BQU8sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzVDLE9BQU8sRUFDTCxhQUFhLEVBQ2IsS0FBSyxFQUNMLEtBQUssRUFFTCxFQUFFLEVBRUYsS0FBSyxHQUNOLE1BQU0sTUFBTSxDQUFDO0FBQ2QsT0FBTyxFQUNMLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUNMLG9CQUFvQixFQUNwQixNQUFNLEVBQ04sR0FBRyxFQUNILEtBQUssRUFDTCxXQUFXLEVBQ1gsR0FBRyxFQUNILGNBQWMsR0FDZixNQUFNLGdCQUFnQixDQUFDO0FBRXhCLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUV4RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUNqRixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDMUQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2hELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDOzs7OztBQUtwRCxNQUFNLE9BQU8scUJBQXFCOzs7Ozs7O0lBS2hDLFlBQ1ksS0FBOEIsRUFDOUIsYUFBbUMsRUFDbkMsUUFBaUIsRUFDSSxVQUFl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QUUsaUJBQWlCLENBQUMsQ0FBQzthQUMzQztpQkFBTSxJQUFJLEdBQUcsS0FBSyxDQUFDLEVBQUU7Z0JBQ3BCLG9FQUFvRTtnQkFDcEUsMENBQTBDO2dCQUMxQyxPQUFPLGlCQUFpQixDQUFDO2FBQzFCO2lCQUFNO2dCQUNMLGtEQUFrRDtnQkFDbEQsT0FBTyxLQUFLLENBQ1YsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLEdBQUcsRUFBRSxTQUFTLENBQUMsQ0FBQyxFQUM3QyxpQkFBaUIsQ0FDbEIsQ0FBQzthQUNIO1FBQ0gsQ0FBQyxFQUFDO1FBRUYsT0FBTyxhQUFhLENBQUM7SUFDdkIsQ0FBQzs7O1lBbE1GLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQWxDZ0IsS0FBSztZQTBCYixvQkFBb0I7WUFHcEIsT0FBTzs0Q0FlWCxNQUFNLFNBQUMsV0FBVzs7Ozs7Ozs7SUFSckIseUNBRU87Ozs7O0lBR0wsc0NBQXdDOzs7OztJQUN4Qyw4Q0FBNkM7Ozs7O0lBQzdDLHlDQUEyQjs7Ozs7SUFDM0IsMkNBQThDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBQTEFURk9STV9JRCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgc2VsZWN0LCBTdG9yZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7XG4gIGNvbWJpbmVMYXRlc3QsXG4gIGRlZmVyLFxuICBtZXJnZSxcbiAgT2JzZXJ2YWJsZSxcbiAgb2YsXG4gIFNjaGVkdWxlckxpa2UsXG4gIHVzaW5nLFxufSBmcm9tICdyeGpzJztcbmltcG9ydCB7XG4gIGF1ZGl0VGltZSxcbiAgZGVib3VuY2VUaW1lLFxuICBkZWxheSxcbiAgZGlzdGluY3RVbnRpbENoYW5nZWQsXG4gIGZpbHRlcixcbiAgbWFwLFxuICBtYXBUbyxcbiAgc2hhcmVSZXBsYXksXG4gIHRhcCxcbiAgd2l0aExhdGVzdEZyb20sXG59IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFByb2R1Y3QgfSBmcm9tICcuLi8uLi9tb2RlbC9wcm9kdWN0Lm1vZGVsJztcbmltcG9ydCB7IFByb2R1Y3RBY3Rpb25zIH0gZnJvbSAnLi4vc3RvcmUvYWN0aW9ucy9pbmRleCc7XG5pbXBvcnQgeyBTdGF0ZVdpdGhQcm9kdWN0IH0gZnJvbSAnLi4vc3RvcmUvcHJvZHVjdC1zdGF0ZSc7XG5pbXBvcnQgeyBQcm9kdWN0U2VsZWN0b3JzIH0gZnJvbSAnLi4vc3RvcmUvc2VsZWN0b3JzL2luZGV4JztcbmltcG9ydCB7IExvYWRpbmdTY29wZXNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vb2NjL3NlcnZpY2VzL2xvYWRpbmctc2NvcGVzLnNlcnZpY2UnO1xuaW1wb3J0IHsgZGVlcE1lcmdlIH0gZnJvbSAnLi4vLi4vY29uZmlnL3V0aWxzL2RlZXAtbWVyZ2UnO1xuaW1wb3J0IHsgd2l0aGRyYXdPbiB9IGZyb20gJy4uLy4uL3V0aWwvd2l0aGRyYXctb24nO1xuaW1wb3J0IHsgQWN0aW9ucywgb2ZUeXBlIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5pbXBvcnQgeyBpc1BsYXRmb3JtQnJvd3NlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBQcm9kdWN0TG9hZGluZ1NlcnZpY2Uge1xuICBwcm90ZWN0ZWQgcHJvZHVjdHM6IHtcbiAgICBbY29kZTogc3RyaW5nXTogeyBbc2NvcGU6IHN0cmluZ106IE9ic2VydmFibGU8UHJvZHVjdD4gfTtcbiAgfSA9IHt9O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBzdG9yZTogU3RvcmU8U3RhdGVXaXRoUHJvZHVjdD4sXG4gICAgcHJvdGVjdGVkIGxvYWRpbmdTY29wZXM6IExvYWRpbmdTY29wZXNTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBhY3Rpb25zJDogQWN0aW9ucyxcbiAgICBASW5qZWN0KFBMQVRGT1JNX0lEKSBwcm90ZWN0ZWQgcGxhdGZvcm1JZDogYW55XG4gICkge31cblxuICBnZXQocHJvZHVjdENvZGU6IHN0cmluZywgc2NvcGVzOiBzdHJpbmdbXSk6IE9ic2VydmFibGU8UHJvZHVjdD4ge1xuICAgIHNjb3BlcyA9IHRoaXMubG9hZGluZ1Njb3Blcy5leHBhbmQoJ3Byb2R1Y3QnLCBzY29wZXMpO1xuXG4gICAgdGhpcy5pbml0UHJvZHVjdFNjb3Blcyhwcm9kdWN0Q29kZSwgc2NvcGVzKTtcblxuICAgIGlmIChzY29wZXMubGVuZ3RoID4gMSkge1xuICAgICAgcmV0dXJuIGNvbWJpbmVMYXRlc3QoXG4gICAgICAgIHNjb3Blcy5tYXAoc2NvcGUgPT4gdGhpcy5wcm9kdWN0c1twcm9kdWN0Q29kZV1bc2NvcGVdKVxuICAgICAgKS5waXBlKFxuICAgICAgICBhdWRpdFRpbWUoMCksXG4gICAgICAgIG1hcChcbiAgICAgICAgICBwcm9kdWN0UGFydHMgPT5cbiAgICAgICAgICAgIHByb2R1Y3RQYXJ0cy5maW5kKEJvb2xlYW4pICYmIGRlZXBNZXJnZSh7fSwgLi4ucHJvZHVjdFBhcnRzKVxuICAgICAgICApXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5wcm9kdWN0c1twcm9kdWN0Q29kZV1bc2NvcGVzWzBdXTtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgaW5pdFByb2R1Y3RTY29wZXMocHJvZHVjdENvZGU6IHN0cmluZywgc2NvcGVzOiBzdHJpbmdbXSk6IHZvaWQge1xuICAgIGlmICghdGhpcy5wcm9kdWN0c1twcm9kdWN0Q29kZV0pIHtcbiAgICAgIHRoaXMucHJvZHVjdHNbcHJvZHVjdENvZGVdID0ge307XG4gICAgfVxuXG4gICAgZm9yIChjb25zdCBzY29wZSBvZiBzY29wZXMpIHtcbiAgICAgIGlmICghdGhpcy5wcm9kdWN0c1twcm9kdWN0Q29kZV1bc2NvcGVdKSB7XG4gICAgICAgIHRoaXMucHJvZHVjdHNbcHJvZHVjdENvZGVdW3Njb3BlXSA9IHRoaXMuZ2V0UHJvZHVjdEZvclNjb3BlKFxuICAgICAgICAgIHByb2R1Y3RDb2RlLFxuICAgICAgICAgIHNjb3BlXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgb2JzZXJ2YWJsZSBmb3IgcHJvdmlkaW5nIHNwZWNpZmllZCBwcm9kdWN0IGRhdGEgZm9yIHRoZSBzY29wZVxuICAgKlxuICAgKiBAcGFyYW0gcHJvZHVjdENvZGVcbiAgICogQHBhcmFtIHNjb3BlXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0UHJvZHVjdEZvclNjb3BlKFxuICAgIHByb2R1Y3RDb2RlOiBzdHJpbmcsXG4gICAgc2NvcGU6IHN0cmluZ1xuICApOiBPYnNlcnZhYmxlPFByb2R1Y3Q+IHtcbiAgICBjb25zdCBzaG91bGRMb2FkJCA9IHRoaXMuc3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChcbiAgICAgICAgUHJvZHVjdFNlbGVjdG9ycy5nZXRTZWxlY3RlZFByb2R1Y3RTdGF0ZUZhY3RvcnkocHJvZHVjdENvZGUsIHNjb3BlKVxuICAgICAgKSxcbiAgICAgIG1hcChcbiAgICAgICAgcHJvZHVjdFN0YXRlID0+XG4gICAgICAgICAgIXByb2R1Y3RTdGF0ZS5sb2FkaW5nICYmICFwcm9kdWN0U3RhdGUuc3VjY2VzcyAmJiAhcHJvZHVjdFN0YXRlLmVycm9yXG4gICAgICApLFxuICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKSxcbiAgICAgIGZpbHRlcih4ID0+IHgpXG4gICAgKTtcblxuICAgIGNvbnN0IGlzTG9hZGluZyQgPSB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoXG4gICAgICAgIFByb2R1Y3RTZWxlY3RvcnMuZ2V0U2VsZWN0ZWRQcm9kdWN0TG9hZGluZ0ZhY3RvcnkocHJvZHVjdENvZGUsIHNjb3BlKVxuICAgICAgKVxuICAgICk7XG5cbiAgICBjb25zdCBwcm9kdWN0TG9hZExvZ2ljJCA9IG1lcmdlKFxuICAgICAgc2hvdWxkTG9hZCQsXG4gICAgICAuLi50aGlzLmdldFByb2R1Y3RSZWxvYWRUcmlnZ2Vycyhwcm9kdWN0Q29kZSwgc2NvcGUpXG4gICAgKS5waXBlKFxuICAgICAgZGVib3VuY2VUaW1lKDApLFxuICAgICAgd2l0aExhdGVzdEZyb20oaXNMb2FkaW5nJCksXG4gICAgICB0YXAoKFssIGlzTG9hZGluZ10pID0+IHtcbiAgICAgICAgaWYgKCFpc0xvYWRpbmcpIHtcbiAgICAgICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKFxuICAgICAgICAgICAgbmV3IFByb2R1Y3RBY3Rpb25zLkxvYWRQcm9kdWN0KHByb2R1Y3RDb2RlLCBzY29wZSlcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICk7XG5cbiAgICBjb25zdCBwcm9kdWN0RGF0YSQgPSB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoUHJvZHVjdFNlbGVjdG9ycy5nZXRTZWxlY3RlZFByb2R1Y3RGYWN0b3J5KHByb2R1Y3RDb2RlLCBzY29wZSkpXG4gICAgKTtcblxuICAgIHJldHVybiB1c2luZygoKSA9PiBwcm9kdWN0TG9hZExvZ2ljJC5zdWJzY3JpYmUoKSwgKCkgPT4gcHJvZHVjdERhdGEkKS5waXBlKFxuICAgICAgc2hhcmVSZXBsYXkoeyBidWZmZXJTaXplOiAxLCByZWZDb3VudDogdHJ1ZSB9KVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyByZWxvYWQgdHJpZ2dlcnMgZm9yIHByb2R1Y3QgcGVyIHNjb3BlXG4gICAqXG4gICAqIEBwYXJhbSBwcm9kdWN0Q29kZVxuICAgKiBAcGFyYW0gc2NvcGVcbiAgICovXG4gIHByb3RlY3RlZCBnZXRQcm9kdWN0UmVsb2FkVHJpZ2dlcnMoXG4gICAgcHJvZHVjdENvZGU6IHN0cmluZyxcbiAgICBzY29wZTogc3RyaW5nXG4gICk6IE9ic2VydmFibGU8Ym9vbGVhbj5bXSB7XG4gICAgY29uc3QgdHJpZ2dlcnMgPSBbXTtcblxuICAgIC8vIG1heCBhZ2UgdHJpZ2dlciBhZGRcbiAgICBjb25zdCBtYXhBZ2UgPSB0aGlzLmxvYWRpbmdTY29wZXMuZ2V0TWF4QWdlKCdwcm9kdWN0Jywgc2NvcGUpO1xuICAgIGlmIChtYXhBZ2UgJiYgaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xuICAgICAgLy8gd2Ugd2FudCB0byBncmFiIGxvYWQgcHJvZHVjdCBzdWNjZXNzIGFuZCBsb2FkIHByb2R1Y3QgZmFpbCBmb3IgdGhpcyBwcm9kdWN0IGFuZCBzY29wZVxuICAgICAgY29uc3QgbG9hZEZpbmlzaCQgPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgICAgIGZpbHRlcihcbiAgICAgICAgICAoXG4gICAgICAgICAgICBhY3Rpb246XG4gICAgICAgICAgICAgIHwgUHJvZHVjdEFjdGlvbnMuTG9hZFByb2R1Y3RTdWNjZXNzXG4gICAgICAgICAgICAgIHwgUHJvZHVjdEFjdGlvbnMuTG9hZFByb2R1Y3RGYWlsXG4gICAgICAgICAgKSA9PlxuICAgICAgICAgICAgKGFjdGlvbi50eXBlID09PSBQcm9kdWN0QWN0aW9ucy5MT0FEX1BST0RVQ1RfU1VDQ0VTUyB8fFxuICAgICAgICAgICAgICBhY3Rpb24udHlwZSA9PT0gUHJvZHVjdEFjdGlvbnMuTE9BRF9QUk9EVUNUX0ZBSUwpICYmXG4gICAgICAgICAgICBhY3Rpb24ubWV0YS5lbnRpdHlJZCA9PT0gcHJvZHVjdENvZGUgJiZcbiAgICAgICAgICAgIGFjdGlvbi5tZXRhLnNjb3BlID09PSBzY29wZVxuICAgICAgICApXG4gICAgICApO1xuXG4gICAgICBjb25zdCBsb2FkU3RhcnQkID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgICAgICBvZlR5cGUoUHJvZHVjdEFjdGlvbnMuTE9BRF9QUk9EVUNUKSxcbiAgICAgICAgZmlsdGVyKFxuICAgICAgICAgIChhY3Rpb246IFByb2R1Y3RBY3Rpb25zLkxvYWRQcm9kdWN0KSA9PlxuICAgICAgICAgICAgYWN0aW9uLnBheWxvYWQgPT09IHByb2R1Y3RDb2RlICYmIGFjdGlvbi5tZXRhLnNjb3BlID09PSBzY29wZVxuICAgICAgICApXG4gICAgICApO1xuXG4gICAgICB0cmlnZ2Vycy5wdXNoKHRoaXMuZ2V0TWF4QWdlVHJpZ2dlcihsb2FkU3RhcnQkLCBsb2FkRmluaXNoJCwgbWF4QWdlKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRyaWdnZXJzO1xuICB9XG5cbiAgLyoqXG4gICAqIEdlbmVyaWMgbWV0aG9kIHRoYXQgcmV0dXJucyBzdHJlYW0gdHJpZ2dlcmluZyByZWxvYWQgYnkgbWF4QWdlXG4gICAqXG4gICAqIENvdWxkIGJlIHJlZmFjdG9yZWQgdG8gc2VwYXJhdGUgc2VydmljZSBpbiBmdXR1cmUgdG8gdXNlIGluIG90aGVyXG4gICAqIG1heCBhZ2UgcmVsb2FkIGltcGxlbWVudGF0aW9uc1xuICAgKlxuICAgKiBAcGFyYW0gbG9hZFN0YXJ0JCBTdHJlYW0gdGhhdCBlbWl0cyBvbiBsb2FkIHN0YXJ0XG4gICAqIEBwYXJhbSBsb2FkRmluaXNoJCBTdHJlYW0gdGhhdCBlbWl0cyBvbiBsb2FkIGZpbmlzaFxuICAgKiBAcGFyYW0gbWF4QWdlIG1heCBhZ2VcbiAgICovXG4gIHByaXZhdGUgZ2V0TWF4QWdlVHJpZ2dlcihcbiAgICBsb2FkU3RhcnQkOiBPYnNlcnZhYmxlPGFueT4sXG4gICAgbG9hZEZpbmlzaCQ6IE9ic2VydmFibGU8YW55PixcbiAgICBtYXhBZ2U6IG51bWJlcixcbiAgICBzY2hlZHVsZXI/OiBTY2hlZHVsZXJMaWtlXG4gICk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIGxldCB0aW1lc3RhbXAgPSAwO1xuXG4gICAgY29uc3Qgbm93ID0gKCkgPT4gKHNjaGVkdWxlciA/IHNjaGVkdWxlci5ub3coKSA6IERhdGUubm93KCkpO1xuXG4gICAgY29uc3QgdGltZXN0YW1wJCA9IGxvYWRGaW5pc2gkLnBpcGUodGFwKCgpID0+ICh0aW1lc3RhbXAgPSBub3coKSkpKTtcblxuICAgIGNvbnN0IHNob3VsZFJlbG9hZCQ6IE9ic2VydmFibGU8Ym9vbGVhbj4gPSBkZWZlcigoKSA9PiB7XG4gICAgICBjb25zdCBhZ2UgPSBub3coKSAtIHRpbWVzdGFtcDtcblxuICAgICAgY29uc3QgdGltZXN0YW1wUmVmcmVzaCQgPSB0aW1lc3RhbXAkLnBpcGUoXG4gICAgICAgIGRlbGF5KG1heEFnZSwgc2NoZWR1bGVyKSxcbiAgICAgICAgbWFwVG8odHJ1ZSksXG4gICAgICAgIHdpdGhkcmF3T24obG9hZFN0YXJ0JClcbiAgICAgICk7XG5cbiAgICAgIGlmIChhZ2UgPiBtYXhBZ2UpIHtcbiAgICAgICAgLy8gd2Ugc2hvdWxkIGVtaXQgZmlyc3QgdmFsdWUgaW1tZWRpYXRlbHlcbiAgICAgICAgcmV0dXJuIG1lcmdlKG9mKHRydWUpLCB0aW1lc3RhbXBSZWZyZXNoJCk7XG4gICAgICB9IGVsc2UgaWYgKGFnZSA9PT0gMCkge1xuICAgICAgICAvLyBlZGdlIGNhc2UsIHdlIHNob3VsZCBlbWl0IG1heCBhZ2UgdGltZW91dCBhZnRlciBuZXh0IGxvYWQgc3VjY2Vzc1xuICAgICAgICAvLyBjb3VsZCBoYXBwZW4gd2l0aCBhcnRpZmljaWFsIHNjaGVkdWxlcnNcbiAgICAgICAgcmV0dXJuIHRpbWVzdGFtcFJlZnJlc2gkO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gd2Ugc2hvdWxkIGVtaXQgZmlyc3QgdmFsdWUgd2hlbiBhZ2Ugd2lsbCBleHBpcmVcbiAgICAgICAgcmV0dXJuIG1lcmdlKFxuICAgICAgICAgIG9mKHRydWUpLnBpcGUoZGVsYXkobWF4QWdlIC0gYWdlLCBzY2hlZHVsZXIpKSxcbiAgICAgICAgICB0aW1lc3RhbXBSZWZyZXNoJFxuICAgICAgICApO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHNob3VsZFJlbG9hZCQ7XG4gIH1cbn1cbiJdfQ==