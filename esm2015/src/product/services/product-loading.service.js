/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Actions, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { combineLatest, defer, merge, of, using, } from 'rxjs';
import { auditTime, debounceTime, delay, distinctUntilChanged, filter, map, mapTo, shareReplay, tap, withLatestFrom, } from 'rxjs/operators';
import { deepMerge } from '../../config/utils/deep-merge';
import { LoadingScopesService } from '../../occ/services/loading-scopes.service';
import { withdrawOn } from '../../util/withdraw-on';
import { ProductActions } from '../store/actions/index';
import { ProductSelectors } from '../store/selectors/index';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1sb2FkaW5nLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvcHJvZHVjdC9zZXJ2aWNlcy9wcm9kdWN0LWxvYWRpbmcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDcEQsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2hFLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2hELE9BQU8sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzVDLE9BQU8sRUFDTCxhQUFhLEVBQ2IsS0FBSyxFQUNMLEtBQUssRUFFTCxFQUFFLEVBRUYsS0FBSyxHQUNOLE1BQU0sTUFBTSxDQUFDO0FBQ2QsT0FBTyxFQUNMLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUNMLG9CQUFvQixFQUNwQixNQUFNLEVBQ04sR0FBRyxFQUNILEtBQUssRUFDTCxXQUFXLEVBQ1gsR0FBRyxFQUNILGNBQWMsR0FDZixNQUFNLGdCQUFnQixDQUFDO0FBQ3hCLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUUxRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUNqRixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRXhELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDOzs7OztBQUs1RCxNQUFNLE9BQU8scUJBQXFCOzs7Ozs7O0lBS2hDLFlBQ1ksS0FBOEIsRUFDOUIsYUFBbUMsRUFDbkMsUUFBaUIsRUFDSSxVQUFl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QUUsaUJBQWlCLENBQUMsQ0FBQzthQUMzQztpQkFBTSxJQUFJLEdBQUcsS0FBSyxDQUFDLEVBQUU7Z0JBQ3BCLG9FQUFvRTtnQkFDcEUsMENBQTBDO2dCQUMxQyxPQUFPLGlCQUFpQixDQUFDO2FBQzFCO2lCQUFNO2dCQUNMLGtEQUFrRDtnQkFDbEQsT0FBTyxLQUFLLENBQ1YsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLEdBQUcsRUFBRSxTQUFTLENBQUMsQ0FBQyxFQUM3QyxpQkFBaUIsQ0FDbEIsQ0FBQzthQUNIO1FBQ0gsQ0FBQyxFQUFDO1FBRUYsT0FBTyxhQUFhLENBQUM7SUFDdkIsQ0FBQzs7O1lBbE1GLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQWhDZ0IsS0FBSztZQXdCYixvQkFBb0I7WUF6QnBCLE9BQU87NENBMkNYLE1BQU0sU0FBQyxXQUFXOzs7Ozs7OztJQVJyQix5Q0FFTzs7Ozs7SUFHTCxzQ0FBd0M7Ozs7O0lBQ3hDLDhDQUE2Qzs7Ozs7SUFDN0MseUNBQTJCOzs7OztJQUMzQiwyQ0FBOEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpc1BsYXRmb3JtQnJvd3NlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIFBMQVRGT1JNX0lEIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3Rpb25zLCBvZlR5cGUgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcbmltcG9ydCB7IHNlbGVjdCwgU3RvcmUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQge1xuICBjb21iaW5lTGF0ZXN0LFxuICBkZWZlcixcbiAgbWVyZ2UsXG4gIE9ic2VydmFibGUsXG4gIG9mLFxuICBTY2hlZHVsZXJMaWtlLFxuICB1c2luZyxcbn0gZnJvbSAncnhqcyc7XG5pbXBvcnQge1xuICBhdWRpdFRpbWUsXG4gIGRlYm91bmNlVGltZSxcbiAgZGVsYXksXG4gIGRpc3RpbmN0VW50aWxDaGFuZ2VkLFxuICBmaWx0ZXIsXG4gIG1hcCxcbiAgbWFwVG8sXG4gIHNoYXJlUmVwbGF5LFxuICB0YXAsXG4gIHdpdGhMYXRlc3RGcm9tLFxufSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBkZWVwTWVyZ2UgfSBmcm9tICcuLi8uLi9jb25maWcvdXRpbHMvZGVlcC1tZXJnZSc7XG5pbXBvcnQgeyBQcm9kdWN0IH0gZnJvbSAnLi4vLi4vbW9kZWwvcHJvZHVjdC5tb2RlbCc7XG5pbXBvcnQgeyBMb2FkaW5nU2NvcGVzU2VydmljZSB9IGZyb20gJy4uLy4uL29jYy9zZXJ2aWNlcy9sb2FkaW5nLXNjb3Blcy5zZXJ2aWNlJztcbmltcG9ydCB7IHdpdGhkcmF3T24gfSBmcm9tICcuLi8uLi91dGlsL3dpdGhkcmF3LW9uJztcbmltcG9ydCB7IFByb2R1Y3RBY3Rpb25zIH0gZnJvbSAnLi4vc3RvcmUvYWN0aW9ucy9pbmRleCc7XG5pbXBvcnQgeyBTdGF0ZVdpdGhQcm9kdWN0IH0gZnJvbSAnLi4vc3RvcmUvcHJvZHVjdC1zdGF0ZSc7XG5pbXBvcnQgeyBQcm9kdWN0U2VsZWN0b3JzIH0gZnJvbSAnLi4vc3RvcmUvc2VsZWN0b3JzL2luZGV4JztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIFByb2R1Y3RMb2FkaW5nU2VydmljZSB7XG4gIHByb3RlY3RlZCBwcm9kdWN0czoge1xuICAgIFtjb2RlOiBzdHJpbmddOiB7IFtzY29wZTogc3RyaW5nXTogT2JzZXJ2YWJsZTxQcm9kdWN0PiB9O1xuICB9ID0ge307XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIHN0b3JlOiBTdG9yZTxTdGF0ZVdpdGhQcm9kdWN0PixcbiAgICBwcm90ZWN0ZWQgbG9hZGluZ1Njb3BlczogTG9hZGluZ1Njb3Blc1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGFjdGlvbnMkOiBBY3Rpb25zLFxuICAgIEBJbmplY3QoUExBVEZPUk1fSUQpIHByb3RlY3RlZCBwbGF0Zm9ybUlkOiBhbnlcbiAgKSB7fVxuXG4gIGdldChwcm9kdWN0Q29kZTogc3RyaW5nLCBzY29wZXM6IHN0cmluZ1tdKTogT2JzZXJ2YWJsZTxQcm9kdWN0PiB7XG4gICAgc2NvcGVzID0gdGhpcy5sb2FkaW5nU2NvcGVzLmV4cGFuZCgncHJvZHVjdCcsIHNjb3Blcyk7XG5cbiAgICB0aGlzLmluaXRQcm9kdWN0U2NvcGVzKHByb2R1Y3RDb2RlLCBzY29wZXMpO1xuXG4gICAgaWYgKHNjb3Blcy5sZW5ndGggPiAxKSB7XG4gICAgICByZXR1cm4gY29tYmluZUxhdGVzdChcbiAgICAgICAgc2NvcGVzLm1hcChzY29wZSA9PiB0aGlzLnByb2R1Y3RzW3Byb2R1Y3RDb2RlXVtzY29wZV0pXG4gICAgICApLnBpcGUoXG4gICAgICAgIGF1ZGl0VGltZSgwKSxcbiAgICAgICAgbWFwKFxuICAgICAgICAgIHByb2R1Y3RQYXJ0cyA9PlxuICAgICAgICAgICAgcHJvZHVjdFBhcnRzLmZpbmQoQm9vbGVhbikgJiYgZGVlcE1lcmdlKHt9LCAuLi5wcm9kdWN0UGFydHMpXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLnByb2R1Y3RzW3Byb2R1Y3RDb2RlXVtzY29wZXNbMF1dO1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCBpbml0UHJvZHVjdFNjb3Blcyhwcm9kdWN0Q29kZTogc3RyaW5nLCBzY29wZXM6IHN0cmluZ1tdKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLnByb2R1Y3RzW3Byb2R1Y3RDb2RlXSkge1xuICAgICAgdGhpcy5wcm9kdWN0c1twcm9kdWN0Q29kZV0gPSB7fTtcbiAgICB9XG5cbiAgICBmb3IgKGNvbnN0IHNjb3BlIG9mIHNjb3Blcykge1xuICAgICAgaWYgKCF0aGlzLnByb2R1Y3RzW3Byb2R1Y3RDb2RlXVtzY29wZV0pIHtcbiAgICAgICAgdGhpcy5wcm9kdWN0c1twcm9kdWN0Q29kZV1bc2NvcGVdID0gdGhpcy5nZXRQcm9kdWN0Rm9yU2NvcGUoXG4gICAgICAgICAgcHJvZHVjdENvZGUsXG4gICAgICAgICAgc2NvcGVcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBvYnNlcnZhYmxlIGZvciBwcm92aWRpbmcgc3BlY2lmaWVkIHByb2R1Y3QgZGF0YSBmb3IgdGhlIHNjb3BlXG4gICAqXG4gICAqIEBwYXJhbSBwcm9kdWN0Q29kZVxuICAgKiBAcGFyYW0gc2NvcGVcbiAgICovXG4gIHByb3RlY3RlZCBnZXRQcm9kdWN0Rm9yU2NvcGUoXG4gICAgcHJvZHVjdENvZGU6IHN0cmluZyxcbiAgICBzY29wZTogc3RyaW5nXG4gICk6IE9ic2VydmFibGU8UHJvZHVjdD4ge1xuICAgIGNvbnN0IHNob3VsZExvYWQkID0gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KFxuICAgICAgICBQcm9kdWN0U2VsZWN0b3JzLmdldFNlbGVjdGVkUHJvZHVjdFN0YXRlRmFjdG9yeShwcm9kdWN0Q29kZSwgc2NvcGUpXG4gICAgICApLFxuICAgICAgbWFwKFxuICAgICAgICBwcm9kdWN0U3RhdGUgPT5cbiAgICAgICAgICAhcHJvZHVjdFN0YXRlLmxvYWRpbmcgJiYgIXByb2R1Y3RTdGF0ZS5zdWNjZXNzICYmICFwcm9kdWN0U3RhdGUuZXJyb3JcbiAgICAgICksXG4gICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpLFxuICAgICAgZmlsdGVyKHggPT4geClcbiAgICApO1xuXG4gICAgY29uc3QgaXNMb2FkaW5nJCA9IHRoaXMuc3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChcbiAgICAgICAgUHJvZHVjdFNlbGVjdG9ycy5nZXRTZWxlY3RlZFByb2R1Y3RMb2FkaW5nRmFjdG9yeShwcm9kdWN0Q29kZSwgc2NvcGUpXG4gICAgICApXG4gICAgKTtcblxuICAgIGNvbnN0IHByb2R1Y3RMb2FkTG9naWMkID0gbWVyZ2UoXG4gICAgICBzaG91bGRMb2FkJCxcbiAgICAgIC4uLnRoaXMuZ2V0UHJvZHVjdFJlbG9hZFRyaWdnZXJzKHByb2R1Y3RDb2RlLCBzY29wZSlcbiAgICApLnBpcGUoXG4gICAgICBkZWJvdW5jZVRpbWUoMCksXG4gICAgICB3aXRoTGF0ZXN0RnJvbShpc0xvYWRpbmckKSxcbiAgICAgIHRhcCgoWywgaXNMb2FkaW5nXSkgPT4ge1xuICAgICAgICBpZiAoIWlzTG9hZGluZykge1xuICAgICAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXG4gICAgICAgICAgICBuZXcgUHJvZHVjdEFjdGlvbnMuTG9hZFByb2R1Y3QocHJvZHVjdENvZGUsIHNjb3BlKVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgKTtcblxuICAgIGNvbnN0IHByb2R1Y3REYXRhJCA9IHRoaXMuc3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChQcm9kdWN0U2VsZWN0b3JzLmdldFNlbGVjdGVkUHJvZHVjdEZhY3RvcnkocHJvZHVjdENvZGUsIHNjb3BlKSlcbiAgICApO1xuXG4gICAgcmV0dXJuIHVzaW5nKCgpID0+IHByb2R1Y3RMb2FkTG9naWMkLnN1YnNjcmliZSgpLCAoKSA9PiBwcm9kdWN0RGF0YSQpLnBpcGUoXG4gICAgICBzaGFyZVJlcGxheSh7IGJ1ZmZlclNpemU6IDEsIHJlZkNvdW50OiB0cnVlIH0pXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHJlbG9hZCB0cmlnZ2VycyBmb3IgcHJvZHVjdCBwZXIgc2NvcGVcbiAgICpcbiAgICogQHBhcmFtIHByb2R1Y3RDb2RlXG4gICAqIEBwYXJhbSBzY29wZVxuICAgKi9cbiAgcHJvdGVjdGVkIGdldFByb2R1Y3RSZWxvYWRUcmlnZ2VycyhcbiAgICBwcm9kdWN0Q29kZTogc3RyaW5nLFxuICAgIHNjb3BlOiBzdHJpbmdcbiAgKTogT2JzZXJ2YWJsZTxib29sZWFuPltdIHtcbiAgICBjb25zdCB0cmlnZ2VycyA9IFtdO1xuXG4gICAgLy8gbWF4IGFnZSB0cmlnZ2VyIGFkZFxuICAgIGNvbnN0IG1heEFnZSA9IHRoaXMubG9hZGluZ1Njb3Blcy5nZXRNYXhBZ2UoJ3Byb2R1Y3QnLCBzY29wZSk7XG4gICAgaWYgKG1heEFnZSAmJiBpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpKSB7XG4gICAgICAvLyB3ZSB3YW50IHRvIGdyYWIgbG9hZCBwcm9kdWN0IHN1Y2Nlc3MgYW5kIGxvYWQgcHJvZHVjdCBmYWlsIGZvciB0aGlzIHByb2R1Y3QgYW5kIHNjb3BlXG4gICAgICBjb25zdCBsb2FkRmluaXNoJCA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICAgICAgZmlsdGVyKFxuICAgICAgICAgIChcbiAgICAgICAgICAgIGFjdGlvbjpcbiAgICAgICAgICAgICAgfCBQcm9kdWN0QWN0aW9ucy5Mb2FkUHJvZHVjdFN1Y2Nlc3NcbiAgICAgICAgICAgICAgfCBQcm9kdWN0QWN0aW9ucy5Mb2FkUHJvZHVjdEZhaWxcbiAgICAgICAgICApID0+XG4gICAgICAgICAgICAoYWN0aW9uLnR5cGUgPT09IFByb2R1Y3RBY3Rpb25zLkxPQURfUFJPRFVDVF9TVUNDRVNTIHx8XG4gICAgICAgICAgICAgIGFjdGlvbi50eXBlID09PSBQcm9kdWN0QWN0aW9ucy5MT0FEX1BST0RVQ1RfRkFJTCkgJiZcbiAgICAgICAgICAgIGFjdGlvbi5tZXRhLmVudGl0eUlkID09PSBwcm9kdWN0Q29kZSAmJlxuICAgICAgICAgICAgYWN0aW9uLm1ldGEuc2NvcGUgPT09IHNjb3BlXG4gICAgICAgIClcbiAgICAgICk7XG5cbiAgICAgIGNvbnN0IGxvYWRTdGFydCQgPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgICAgIG9mVHlwZShQcm9kdWN0QWN0aW9ucy5MT0FEX1BST0RVQ1QpLFxuICAgICAgICBmaWx0ZXIoXG4gICAgICAgICAgKGFjdGlvbjogUHJvZHVjdEFjdGlvbnMuTG9hZFByb2R1Y3QpID0+XG4gICAgICAgICAgICBhY3Rpb24ucGF5bG9hZCA9PT0gcHJvZHVjdENvZGUgJiYgYWN0aW9uLm1ldGEuc2NvcGUgPT09IHNjb3BlXG4gICAgICAgIClcbiAgICAgICk7XG5cbiAgICAgIHRyaWdnZXJzLnB1c2godGhpcy5nZXRNYXhBZ2VUcmlnZ2VyKGxvYWRTdGFydCQsIGxvYWRGaW5pc2gkLCBtYXhBZ2UpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJpZ2dlcnM7XG4gIH1cblxuICAvKipcbiAgICogR2VuZXJpYyBtZXRob2QgdGhhdCByZXR1cm5zIHN0cmVhbSB0cmlnZ2VyaW5nIHJlbG9hZCBieSBtYXhBZ2VcbiAgICpcbiAgICogQ291bGQgYmUgcmVmYWN0b3JlZCB0byBzZXBhcmF0ZSBzZXJ2aWNlIGluIGZ1dHVyZSB0byB1c2UgaW4gb3RoZXJcbiAgICogbWF4IGFnZSByZWxvYWQgaW1wbGVtZW50YXRpb25zXG4gICAqXG4gICAqIEBwYXJhbSBsb2FkU3RhcnQkIFN0cmVhbSB0aGF0IGVtaXRzIG9uIGxvYWQgc3RhcnRcbiAgICogQHBhcmFtIGxvYWRGaW5pc2gkIFN0cmVhbSB0aGF0IGVtaXRzIG9uIGxvYWQgZmluaXNoXG4gICAqIEBwYXJhbSBtYXhBZ2UgbWF4IGFnZVxuICAgKi9cbiAgcHJpdmF0ZSBnZXRNYXhBZ2VUcmlnZ2VyKFxuICAgIGxvYWRTdGFydCQ6IE9ic2VydmFibGU8YW55PixcbiAgICBsb2FkRmluaXNoJDogT2JzZXJ2YWJsZTxhbnk+LFxuICAgIG1heEFnZTogbnVtYmVyLFxuICAgIHNjaGVkdWxlcj86IFNjaGVkdWxlckxpa2VcbiAgKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgbGV0IHRpbWVzdGFtcCA9IDA7XG5cbiAgICBjb25zdCBub3cgPSAoKSA9PiAoc2NoZWR1bGVyID8gc2NoZWR1bGVyLm5vdygpIDogRGF0ZS5ub3coKSk7XG5cbiAgICBjb25zdCB0aW1lc3RhbXAkID0gbG9hZEZpbmlzaCQucGlwZSh0YXAoKCkgPT4gKHRpbWVzdGFtcCA9IG5vdygpKSkpO1xuXG4gICAgY29uc3Qgc2hvdWxkUmVsb2FkJDogT2JzZXJ2YWJsZTxib29sZWFuPiA9IGRlZmVyKCgpID0+IHtcbiAgICAgIGNvbnN0IGFnZSA9IG5vdygpIC0gdGltZXN0YW1wO1xuXG4gICAgICBjb25zdCB0aW1lc3RhbXBSZWZyZXNoJCA9IHRpbWVzdGFtcCQucGlwZShcbiAgICAgICAgZGVsYXkobWF4QWdlLCBzY2hlZHVsZXIpLFxuICAgICAgICBtYXBUbyh0cnVlKSxcbiAgICAgICAgd2l0aGRyYXdPbihsb2FkU3RhcnQkKVxuICAgICAgKTtcblxuICAgICAgaWYgKGFnZSA+IG1heEFnZSkge1xuICAgICAgICAvLyB3ZSBzaG91bGQgZW1pdCBmaXJzdCB2YWx1ZSBpbW1lZGlhdGVseVxuICAgICAgICByZXR1cm4gbWVyZ2Uob2YodHJ1ZSksIHRpbWVzdGFtcFJlZnJlc2gkKTtcbiAgICAgIH0gZWxzZSBpZiAoYWdlID09PSAwKSB7XG4gICAgICAgIC8vIGVkZ2UgY2FzZSwgd2Ugc2hvdWxkIGVtaXQgbWF4IGFnZSB0aW1lb3V0IGFmdGVyIG5leHQgbG9hZCBzdWNjZXNzXG4gICAgICAgIC8vIGNvdWxkIGhhcHBlbiB3aXRoIGFydGlmaWNpYWwgc2NoZWR1bGVyc1xuICAgICAgICByZXR1cm4gdGltZXN0YW1wUmVmcmVzaCQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyB3ZSBzaG91bGQgZW1pdCBmaXJzdCB2YWx1ZSB3aGVuIGFnZSB3aWxsIGV4cGlyZVxuICAgICAgICByZXR1cm4gbWVyZ2UoXG4gICAgICAgICAgb2YodHJ1ZSkucGlwZShkZWxheShtYXhBZ2UgLSBhZ2UsIHNjaGVkdWxlcikpLFxuICAgICAgICAgIHRpbWVzdGFtcFJlZnJlc2gkXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gc2hvdWxkUmVsb2FkJDtcbiAgfVxufVxuIl19