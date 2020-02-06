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
        return this.products[productCode][this.getScopesIndex(scopes)];
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
        if (scopes.length > 1) {
            this.products[productCode][this.getScopesIndex(scopes)] = combineLatest(scopes.map((/**
             * @param {?} scope
             * @return {?}
             */
            scope => this.products[productCode][scope]))).pipe(auditTime(0), map((/**
             * @param {?} productParts
             * @return {?}
             */
            productParts => productParts.every(Boolean)
                ? deepMerge({}, ...productParts)
                : undefined)), distinctUntilChanged());
        }
    }
    /**
     * @protected
     * @param {?} scopes
     * @return {?}
     */
    getScopesIndex(scopes) {
        return scopes.join('ɵ');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1sb2FkaW5nLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvcHJvZHVjdC9zZXJ2aWNlcy9wcm9kdWN0LWxvYWRpbmcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDcEQsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2hFLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2hELE9BQU8sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzVDLE9BQU8sRUFDTCxhQUFhLEVBQ2IsS0FBSyxFQUNMLEtBQUssRUFFTCxFQUFFLEVBRUYsS0FBSyxHQUNOLE1BQU0sTUFBTSxDQUFDO0FBQ2QsT0FBTyxFQUNMLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUNMLG9CQUFvQixFQUNwQixNQUFNLEVBQ04sR0FBRyxFQUNILEtBQUssRUFDTCxXQUFXLEVBQ1gsR0FBRyxFQUNILGNBQWMsR0FDZixNQUFNLGdCQUFnQixDQUFDO0FBQ3hCLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUUxRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUNqRixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRXhELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDOzs7OztBQUs1RCxNQUFNLE9BQU8scUJBQXFCOzs7Ozs7O0lBS2hDLFlBQ1ksS0FBOEIsRUFDOUIsYUFBbUMsRUFDbkMsUUFBaUIsRUFDSSxVQUFlO1FBSHBDLFVBQUssR0FBTCxLQUFLLENBQXlCO1FBQzlCLGtCQUFhLEdBQWIsYUFBYSxDQUFzQjtRQUNuQyxhQUFRLEdBQVIsUUFBUSxDQUFTO1FBQ0ksZUFBVSxHQUFWLFVBQVUsQ0FBSztRQVJ0QyxhQUFRLEdBRWQsRUFBRSxDQUFDO0lBT0osQ0FBQzs7Ozs7O0lBRUosR0FBRyxDQUFDLFdBQW1CLEVBQUUsTUFBZ0I7UUFDdkMsTUFBTSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUV0RCxJQUFJLENBQUMsaUJBQWlCLENBQUMsV0FBVyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQzVDLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDakUsQ0FBQzs7Ozs7OztJQUVTLGlCQUFpQixDQUFDLFdBQW1CLEVBQUUsTUFBZ0I7UUFDL0QsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLEVBQUU7WUFDL0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsR0FBRyxFQUFFLENBQUM7U0FDakM7UUFFRCxLQUFLLE1BQU0sS0FBSyxJQUFJLE1BQU0sRUFBRTtZQUMxQixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDdEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQ3pELFdBQVcsRUFDWCxLQUFLLENBQ04sQ0FBQzthQUNIO1NBQ0Y7UUFFRCxJQUFJLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ3JCLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLGFBQWEsQ0FDckUsTUFBTSxDQUFDLEdBQUc7Ozs7WUFBQyxLQUFLLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUMsQ0FDdkQsQ0FBQyxJQUFJLENBQ0osU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUNaLEdBQUc7Ozs7WUFBQyxZQUFZLENBQUMsRUFBRSxDQUNqQixZQUFZLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQztnQkFDekIsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxFQUFFLEVBQUUsR0FBRyxZQUFZLENBQUM7Z0JBQ2hDLENBQUMsQ0FBQyxTQUFTLEVBQ2QsRUFDRCxvQkFBb0IsRUFBRSxDQUN2QixDQUFDO1NBQ0g7SUFDSCxDQUFDOzs7Ozs7SUFFUyxjQUFjLENBQUMsTUFBZ0I7UUFDdkMsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzFCLENBQUM7Ozs7Ozs7OztJQVFTLGtCQUFrQixDQUMxQixXQUFtQixFQUNuQixLQUFhOztjQUVQLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FDakMsTUFBTSxDQUNKLGdCQUFnQixDQUFDLDhCQUE4QixDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsQ0FDcEUsRUFDRCxHQUFHOzs7O1FBQ0QsWUFBWSxDQUFDLEVBQUUsQ0FDYixDQUFDLFlBQVksQ0FBQyxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssRUFDeEUsRUFDRCxvQkFBb0IsRUFBRSxFQUN0QixNQUFNOzs7O1FBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUMsQ0FDZjs7Y0FFSyxVQUFVLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQ2hDLE1BQU0sQ0FDSixnQkFBZ0IsQ0FBQyxnQ0FBZ0MsQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLENBQ3RFLENBQ0Y7O2NBRUssaUJBQWlCLEdBQUcsS0FBSyxDQUM3QixXQUFXLEVBQ1gsR0FBRyxJQUFJLENBQUMsd0JBQXdCLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxDQUNyRCxDQUFDLElBQUksQ0FDSixZQUFZLENBQUMsQ0FBQyxDQUFDLEVBQ2YsY0FBYyxDQUFDLFVBQVUsQ0FBQyxFQUMxQixHQUFHOzs7O1FBQUMsQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLEVBQUUsRUFBRTtZQUNwQixJQUFJLENBQUMsU0FBUyxFQUFFO2dCQUNkLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUNqQixJQUFJLGNBQWMsQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxDQUNuRCxDQUFDO2FBQ0g7UUFDSCxDQUFDLEVBQUMsQ0FDSDs7Y0FFSyxZQUFZLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQ2xDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyx5QkFBeUIsQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FDdkU7UUFFRCxPQUFPLEtBQUs7OztRQUFDLEdBQUcsRUFBRSxDQUFDLGlCQUFpQixDQUFDLFNBQVMsRUFBRTs7O1FBQUUsR0FBRyxFQUFFLENBQUMsWUFBWSxFQUFDLENBQUMsSUFBSSxDQUN4RSxXQUFXLENBQUMsRUFBRSxVQUFVLEVBQUUsQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUMvQyxDQUFDO0lBQ0osQ0FBQzs7Ozs7Ozs7O0lBUVMsd0JBQXdCLENBQ2hDLFdBQW1CLEVBQ25CLEtBQWE7O2NBRVAsUUFBUSxHQUFHLEVBQUU7OztjQUdiLE1BQU0sR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDO1FBQzdELElBQUksTUFBTSxJQUFJLGlCQUFpQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRTs7O2tCQUUxQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ3BDLE1BQU07Ozs7WUFDSixDQUNFLE1BRWtDLEVBQ2xDLEVBQUUsQ0FDRixDQUFDLE1BQU0sQ0FBQyxJQUFJLEtBQUssY0FBYyxDQUFDLG9CQUFvQjtnQkFDbEQsTUFBTSxDQUFDLElBQUksS0FBSyxjQUFjLENBQUMsaUJBQWlCLENBQUM7Z0JBQ25ELE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxLQUFLLFdBQVc7Z0JBQ3BDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxLQUFLLEtBQUssRUFDOUIsQ0FDRjs7a0JBRUssVUFBVSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUNuQyxNQUFNLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxFQUNuQyxNQUFNOzs7O1lBQ0osQ0FBQyxNQUFrQyxFQUFFLEVBQUUsQ0FDckMsTUFBTSxDQUFDLE9BQU8sS0FBSyxXQUFXLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLEtBQUssS0FBSyxFQUNoRSxDQUNGO1lBRUQsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxFQUFFLFdBQVcsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDO1NBQ3ZFO1FBRUQsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7SUFZTyxnQkFBZ0IsQ0FDdEIsVUFBMkIsRUFDM0IsV0FBNEIsRUFDNUIsTUFBYyxFQUNkLFNBQXlCOztZQUVyQixTQUFTLEdBQUcsQ0FBQzs7Y0FFWCxHQUFHOzs7UUFBRyxHQUFHLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQTs7Y0FFdEQsVUFBVSxHQUFHLFdBQVcsQ0FBQyxJQUFJLENBQUMsR0FBRzs7O1FBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxTQUFTLEdBQUcsR0FBRyxFQUFFLENBQUMsRUFBQyxDQUFDOztjQUU3RCxhQUFhLEdBQXdCLEtBQUs7OztRQUFDLEdBQUcsRUFBRTs7a0JBQzlDLEdBQUcsR0FBRyxHQUFHLEVBQUUsR0FBRyxTQUFTOztrQkFFdkIsaUJBQWlCLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FDdkMsS0FBSyxDQUFDLE1BQU0sRUFBRSxTQUFTLENBQUMsRUFDeEIsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUNYLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FDdkI7WUFFRCxJQUFJLEdBQUcsR0FBRyxNQUFNLEVBQUU7Z0JBQ2hCLHlDQUF5QztnQkFDekMsT0FBTyxLQUFLLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLGlCQUFpQixDQUFDLENBQUM7YUFDM0M7aUJBQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxFQUFFO2dCQUNwQixvRUFBb0U7Z0JBQ3BFLDBDQUEwQztnQkFDMUMsT0FBTyxpQkFBaUIsQ0FBQzthQUMxQjtpQkFBTTtnQkFDTCxrREFBa0Q7Z0JBQ2xELE9BQU8sS0FBSyxDQUNWLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxHQUFHLEVBQUUsU0FBUyxDQUFDLENBQUMsRUFDN0MsaUJBQWlCLENBQ2xCLENBQUM7YUFDSDtRQUNILENBQUMsRUFBQztRQUVGLE9BQU8sYUFBYSxDQUFDO0lBQ3ZCLENBQUM7OztZQXZNRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7WUFoQ2dCLEtBQUs7WUF3QmIsb0JBQW9CO1lBekJwQixPQUFPOzRDQTJDWCxNQUFNLFNBQUMsV0FBVzs7Ozs7Ozs7SUFSckIseUNBRU87Ozs7O0lBR0wsc0NBQXdDOzs7OztJQUN4Qyw4Q0FBNkM7Ozs7O0lBQzdDLHlDQUEyQjs7Ozs7SUFDM0IsMkNBQThDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBQTEFURk9STV9JRCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aW9ucywgb2ZUeXBlIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5pbXBvcnQgeyBzZWxlY3QsIFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHtcbiAgY29tYmluZUxhdGVzdCxcbiAgZGVmZXIsXG4gIG1lcmdlLFxuICBPYnNlcnZhYmxlLFxuICBvZixcbiAgU2NoZWR1bGVyTGlrZSxcbiAgdXNpbmcsXG59IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtcbiAgYXVkaXRUaW1lLFxuICBkZWJvdW5jZVRpbWUsXG4gIGRlbGF5LFxuICBkaXN0aW5jdFVudGlsQ2hhbmdlZCxcbiAgZmlsdGVyLFxuICBtYXAsXG4gIG1hcFRvLFxuICBzaGFyZVJlcGxheSxcbiAgdGFwLFxuICB3aXRoTGF0ZXN0RnJvbSxcbn0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgZGVlcE1lcmdlIH0gZnJvbSAnLi4vLi4vY29uZmlnL3V0aWxzL2RlZXAtbWVyZ2UnO1xuaW1wb3J0IHsgUHJvZHVjdCB9IGZyb20gJy4uLy4uL21vZGVsL3Byb2R1Y3QubW9kZWwnO1xuaW1wb3J0IHsgTG9hZGluZ1Njb3Blc1NlcnZpY2UgfSBmcm9tICcuLi8uLi9vY2Mvc2VydmljZXMvbG9hZGluZy1zY29wZXMuc2VydmljZSc7XG5pbXBvcnQgeyB3aXRoZHJhd09uIH0gZnJvbSAnLi4vLi4vdXRpbC93aXRoZHJhdy1vbic7XG5pbXBvcnQgeyBQcm9kdWN0QWN0aW9ucyB9IGZyb20gJy4uL3N0b3JlL2FjdGlvbnMvaW5kZXgnO1xuaW1wb3J0IHsgU3RhdGVXaXRoUHJvZHVjdCB9IGZyb20gJy4uL3N0b3JlL3Byb2R1Y3Qtc3RhdGUnO1xuaW1wb3J0IHsgUHJvZHVjdFNlbGVjdG9ycyB9IGZyb20gJy4uL3N0b3JlL3NlbGVjdG9ycy9pbmRleCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBQcm9kdWN0TG9hZGluZ1NlcnZpY2Uge1xuICBwcm90ZWN0ZWQgcHJvZHVjdHM6IHtcbiAgICBbY29kZTogc3RyaW5nXTogeyBbc2NvcGU6IHN0cmluZ106IE9ic2VydmFibGU8UHJvZHVjdD4gfTtcbiAgfSA9IHt9O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBzdG9yZTogU3RvcmU8U3RhdGVXaXRoUHJvZHVjdD4sXG4gICAgcHJvdGVjdGVkIGxvYWRpbmdTY29wZXM6IExvYWRpbmdTY29wZXNTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBhY3Rpb25zJDogQWN0aW9ucyxcbiAgICBASW5qZWN0KFBMQVRGT1JNX0lEKSBwcm90ZWN0ZWQgcGxhdGZvcm1JZDogYW55XG4gICkge31cblxuICBnZXQocHJvZHVjdENvZGU6IHN0cmluZywgc2NvcGVzOiBzdHJpbmdbXSk6IE9ic2VydmFibGU8UHJvZHVjdD4ge1xuICAgIHNjb3BlcyA9IHRoaXMubG9hZGluZ1Njb3Blcy5leHBhbmQoJ3Byb2R1Y3QnLCBzY29wZXMpO1xuXG4gICAgdGhpcy5pbml0UHJvZHVjdFNjb3Blcyhwcm9kdWN0Q29kZSwgc2NvcGVzKTtcbiAgICByZXR1cm4gdGhpcy5wcm9kdWN0c1twcm9kdWN0Q29kZV1bdGhpcy5nZXRTY29wZXNJbmRleChzY29wZXMpXTtcbiAgfVxuXG4gIHByb3RlY3RlZCBpbml0UHJvZHVjdFNjb3Blcyhwcm9kdWN0Q29kZTogc3RyaW5nLCBzY29wZXM6IHN0cmluZ1tdKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLnByb2R1Y3RzW3Byb2R1Y3RDb2RlXSkge1xuICAgICAgdGhpcy5wcm9kdWN0c1twcm9kdWN0Q29kZV0gPSB7fTtcbiAgICB9XG5cbiAgICBmb3IgKGNvbnN0IHNjb3BlIG9mIHNjb3Blcykge1xuICAgICAgaWYgKCF0aGlzLnByb2R1Y3RzW3Byb2R1Y3RDb2RlXVtzY29wZV0pIHtcbiAgICAgICAgdGhpcy5wcm9kdWN0c1twcm9kdWN0Q29kZV1bc2NvcGVdID0gdGhpcy5nZXRQcm9kdWN0Rm9yU2NvcGUoXG4gICAgICAgICAgcHJvZHVjdENvZGUsXG4gICAgICAgICAgc2NvcGVcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc2NvcGVzLmxlbmd0aCA+IDEpIHtcbiAgICAgIHRoaXMucHJvZHVjdHNbcHJvZHVjdENvZGVdW3RoaXMuZ2V0U2NvcGVzSW5kZXgoc2NvcGVzKV0gPSBjb21iaW5lTGF0ZXN0KFxuICAgICAgICBzY29wZXMubWFwKHNjb3BlID0+IHRoaXMucHJvZHVjdHNbcHJvZHVjdENvZGVdW3Njb3BlXSlcbiAgICAgICkucGlwZShcbiAgICAgICAgYXVkaXRUaW1lKDApLFxuICAgICAgICBtYXAocHJvZHVjdFBhcnRzID0+XG4gICAgICAgICAgcHJvZHVjdFBhcnRzLmV2ZXJ5KEJvb2xlYW4pXG4gICAgICAgICAgICA/IGRlZXBNZXJnZSh7fSwgLi4ucHJvZHVjdFBhcnRzKVxuICAgICAgICAgICAgOiB1bmRlZmluZWRcbiAgICAgICAgKSxcbiAgICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0U2NvcGVzSW5kZXgoc2NvcGVzOiBzdHJpbmdbXSk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHNjb3Blcy5qb2luKCfJtScpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgb2JzZXJ2YWJsZSBmb3IgcHJvdmlkaW5nIHNwZWNpZmllZCBwcm9kdWN0IGRhdGEgZm9yIHRoZSBzY29wZVxuICAgKlxuICAgKiBAcGFyYW0gcHJvZHVjdENvZGVcbiAgICogQHBhcmFtIHNjb3BlXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0UHJvZHVjdEZvclNjb3BlKFxuICAgIHByb2R1Y3RDb2RlOiBzdHJpbmcsXG4gICAgc2NvcGU6IHN0cmluZ1xuICApOiBPYnNlcnZhYmxlPFByb2R1Y3Q+IHtcbiAgICBjb25zdCBzaG91bGRMb2FkJCA9IHRoaXMuc3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChcbiAgICAgICAgUHJvZHVjdFNlbGVjdG9ycy5nZXRTZWxlY3RlZFByb2R1Y3RTdGF0ZUZhY3RvcnkocHJvZHVjdENvZGUsIHNjb3BlKVxuICAgICAgKSxcbiAgICAgIG1hcChcbiAgICAgICAgcHJvZHVjdFN0YXRlID0+XG4gICAgICAgICAgIXByb2R1Y3RTdGF0ZS5sb2FkaW5nICYmICFwcm9kdWN0U3RhdGUuc3VjY2VzcyAmJiAhcHJvZHVjdFN0YXRlLmVycm9yXG4gICAgICApLFxuICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKSxcbiAgICAgIGZpbHRlcih4ID0+IHgpXG4gICAgKTtcblxuICAgIGNvbnN0IGlzTG9hZGluZyQgPSB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoXG4gICAgICAgIFByb2R1Y3RTZWxlY3RvcnMuZ2V0U2VsZWN0ZWRQcm9kdWN0TG9hZGluZ0ZhY3RvcnkocHJvZHVjdENvZGUsIHNjb3BlKVxuICAgICAgKVxuICAgICk7XG5cbiAgICBjb25zdCBwcm9kdWN0TG9hZExvZ2ljJCA9IG1lcmdlKFxuICAgICAgc2hvdWxkTG9hZCQsXG4gICAgICAuLi50aGlzLmdldFByb2R1Y3RSZWxvYWRUcmlnZ2Vycyhwcm9kdWN0Q29kZSwgc2NvcGUpXG4gICAgKS5waXBlKFxuICAgICAgZGVib3VuY2VUaW1lKDApLFxuICAgICAgd2l0aExhdGVzdEZyb20oaXNMb2FkaW5nJCksXG4gICAgICB0YXAoKFssIGlzTG9hZGluZ10pID0+IHtcbiAgICAgICAgaWYgKCFpc0xvYWRpbmcpIHtcbiAgICAgICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKFxuICAgICAgICAgICAgbmV3IFByb2R1Y3RBY3Rpb25zLkxvYWRQcm9kdWN0KHByb2R1Y3RDb2RlLCBzY29wZSlcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICk7XG5cbiAgICBjb25zdCBwcm9kdWN0RGF0YSQgPSB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoUHJvZHVjdFNlbGVjdG9ycy5nZXRTZWxlY3RlZFByb2R1Y3RGYWN0b3J5KHByb2R1Y3RDb2RlLCBzY29wZSkpXG4gICAgKTtcblxuICAgIHJldHVybiB1c2luZygoKSA9PiBwcm9kdWN0TG9hZExvZ2ljJC5zdWJzY3JpYmUoKSwgKCkgPT4gcHJvZHVjdERhdGEkKS5waXBlKFxuICAgICAgc2hhcmVSZXBsYXkoeyBidWZmZXJTaXplOiAxLCByZWZDb3VudDogdHJ1ZSB9KVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyByZWxvYWQgdHJpZ2dlcnMgZm9yIHByb2R1Y3QgcGVyIHNjb3BlXG4gICAqXG4gICAqIEBwYXJhbSBwcm9kdWN0Q29kZVxuICAgKiBAcGFyYW0gc2NvcGVcbiAgICovXG4gIHByb3RlY3RlZCBnZXRQcm9kdWN0UmVsb2FkVHJpZ2dlcnMoXG4gICAgcHJvZHVjdENvZGU6IHN0cmluZyxcbiAgICBzY29wZTogc3RyaW5nXG4gICk6IE9ic2VydmFibGU8Ym9vbGVhbj5bXSB7XG4gICAgY29uc3QgdHJpZ2dlcnMgPSBbXTtcblxuICAgIC8vIG1heCBhZ2UgdHJpZ2dlciBhZGRcbiAgICBjb25zdCBtYXhBZ2UgPSB0aGlzLmxvYWRpbmdTY29wZXMuZ2V0TWF4QWdlKCdwcm9kdWN0Jywgc2NvcGUpO1xuICAgIGlmIChtYXhBZ2UgJiYgaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xuICAgICAgLy8gd2Ugd2FudCB0byBncmFiIGxvYWQgcHJvZHVjdCBzdWNjZXNzIGFuZCBsb2FkIHByb2R1Y3QgZmFpbCBmb3IgdGhpcyBwcm9kdWN0IGFuZCBzY29wZVxuICAgICAgY29uc3QgbG9hZEZpbmlzaCQgPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgICAgIGZpbHRlcihcbiAgICAgICAgICAoXG4gICAgICAgICAgICBhY3Rpb246XG4gICAgICAgICAgICAgIHwgUHJvZHVjdEFjdGlvbnMuTG9hZFByb2R1Y3RTdWNjZXNzXG4gICAgICAgICAgICAgIHwgUHJvZHVjdEFjdGlvbnMuTG9hZFByb2R1Y3RGYWlsXG4gICAgICAgICAgKSA9PlxuICAgICAgICAgICAgKGFjdGlvbi50eXBlID09PSBQcm9kdWN0QWN0aW9ucy5MT0FEX1BST0RVQ1RfU1VDQ0VTUyB8fFxuICAgICAgICAgICAgICBhY3Rpb24udHlwZSA9PT0gUHJvZHVjdEFjdGlvbnMuTE9BRF9QUk9EVUNUX0ZBSUwpICYmXG4gICAgICAgICAgICBhY3Rpb24ubWV0YS5lbnRpdHlJZCA9PT0gcHJvZHVjdENvZGUgJiZcbiAgICAgICAgICAgIGFjdGlvbi5tZXRhLnNjb3BlID09PSBzY29wZVxuICAgICAgICApXG4gICAgICApO1xuXG4gICAgICBjb25zdCBsb2FkU3RhcnQkID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgICAgICBvZlR5cGUoUHJvZHVjdEFjdGlvbnMuTE9BRF9QUk9EVUNUKSxcbiAgICAgICAgZmlsdGVyKFxuICAgICAgICAgIChhY3Rpb246IFByb2R1Y3RBY3Rpb25zLkxvYWRQcm9kdWN0KSA9PlxuICAgICAgICAgICAgYWN0aW9uLnBheWxvYWQgPT09IHByb2R1Y3RDb2RlICYmIGFjdGlvbi5tZXRhLnNjb3BlID09PSBzY29wZVxuICAgICAgICApXG4gICAgICApO1xuXG4gICAgICB0cmlnZ2Vycy5wdXNoKHRoaXMuZ2V0TWF4QWdlVHJpZ2dlcihsb2FkU3RhcnQkLCBsb2FkRmluaXNoJCwgbWF4QWdlKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRyaWdnZXJzO1xuICB9XG5cbiAgLyoqXG4gICAqIEdlbmVyaWMgbWV0aG9kIHRoYXQgcmV0dXJucyBzdHJlYW0gdHJpZ2dlcmluZyByZWxvYWQgYnkgbWF4QWdlXG4gICAqXG4gICAqIENvdWxkIGJlIHJlZmFjdG9yZWQgdG8gc2VwYXJhdGUgc2VydmljZSBpbiBmdXR1cmUgdG8gdXNlIGluIG90aGVyXG4gICAqIG1heCBhZ2UgcmVsb2FkIGltcGxlbWVudGF0aW9uc1xuICAgKlxuICAgKiBAcGFyYW0gbG9hZFN0YXJ0JCBTdHJlYW0gdGhhdCBlbWl0cyBvbiBsb2FkIHN0YXJ0XG4gICAqIEBwYXJhbSBsb2FkRmluaXNoJCBTdHJlYW0gdGhhdCBlbWl0cyBvbiBsb2FkIGZpbmlzaFxuICAgKiBAcGFyYW0gbWF4QWdlIG1heCBhZ2VcbiAgICovXG4gIHByaXZhdGUgZ2V0TWF4QWdlVHJpZ2dlcihcbiAgICBsb2FkU3RhcnQkOiBPYnNlcnZhYmxlPGFueT4sXG4gICAgbG9hZEZpbmlzaCQ6IE9ic2VydmFibGU8YW55PixcbiAgICBtYXhBZ2U6IG51bWJlcixcbiAgICBzY2hlZHVsZXI/OiBTY2hlZHVsZXJMaWtlXG4gICk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIGxldCB0aW1lc3RhbXAgPSAwO1xuXG4gICAgY29uc3Qgbm93ID0gKCkgPT4gKHNjaGVkdWxlciA/IHNjaGVkdWxlci5ub3coKSA6IERhdGUubm93KCkpO1xuXG4gICAgY29uc3QgdGltZXN0YW1wJCA9IGxvYWRGaW5pc2gkLnBpcGUodGFwKCgpID0+ICh0aW1lc3RhbXAgPSBub3coKSkpKTtcblxuICAgIGNvbnN0IHNob3VsZFJlbG9hZCQ6IE9ic2VydmFibGU8Ym9vbGVhbj4gPSBkZWZlcigoKSA9PiB7XG4gICAgICBjb25zdCBhZ2UgPSBub3coKSAtIHRpbWVzdGFtcDtcblxuICAgICAgY29uc3QgdGltZXN0YW1wUmVmcmVzaCQgPSB0aW1lc3RhbXAkLnBpcGUoXG4gICAgICAgIGRlbGF5KG1heEFnZSwgc2NoZWR1bGVyKSxcbiAgICAgICAgbWFwVG8odHJ1ZSksXG4gICAgICAgIHdpdGhkcmF3T24obG9hZFN0YXJ0JClcbiAgICAgICk7XG5cbiAgICAgIGlmIChhZ2UgPiBtYXhBZ2UpIHtcbiAgICAgICAgLy8gd2Ugc2hvdWxkIGVtaXQgZmlyc3QgdmFsdWUgaW1tZWRpYXRlbHlcbiAgICAgICAgcmV0dXJuIG1lcmdlKG9mKHRydWUpLCB0aW1lc3RhbXBSZWZyZXNoJCk7XG4gICAgICB9IGVsc2UgaWYgKGFnZSA9PT0gMCkge1xuICAgICAgICAvLyBlZGdlIGNhc2UsIHdlIHNob3VsZCBlbWl0IG1heCBhZ2UgdGltZW91dCBhZnRlciBuZXh0IGxvYWQgc3VjY2Vzc1xuICAgICAgICAvLyBjb3VsZCBoYXBwZW4gd2l0aCBhcnRpZmljaWFsIHNjaGVkdWxlcnNcbiAgICAgICAgcmV0dXJuIHRpbWVzdGFtcFJlZnJlc2gkO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gd2Ugc2hvdWxkIGVtaXQgZmlyc3QgdmFsdWUgd2hlbiBhZ2Ugd2lsbCBleHBpcmVcbiAgICAgICAgcmV0dXJuIG1lcmdlKFxuICAgICAgICAgIG9mKHRydWUpLnBpcGUoZGVsYXkobWF4QWdlIC0gYWdlLCBzY2hlZHVsZXIpKSxcbiAgICAgICAgICB0aW1lc3RhbXBSZWZyZXNoJFxuICAgICAgICApO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHNob3VsZFJlbG9hZCQ7XG4gIH1cbn1cbiJdfQ==