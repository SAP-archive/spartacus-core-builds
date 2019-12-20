/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { combineLatest, defer, merge, of, using } from 'rxjs';
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
            /** @type {?} */
            const loadSuccess$ = this.actions$.pipe(ofType(ProductActions.LOAD_PRODUCT_SUCCESS), filter((/**
             * @param {?} action
             * @return {?}
             */
            (action) => action.payload.code === productCode && action.meta.scope === scope)));
            /** @type {?} */
            const loadStart$ = this.actions$.pipe(ofType(ProductActions.LOAD_PRODUCT), filter((/**
             * @param {?} action
             * @return {?}
             */
            (action) => action.payload === productCode && action.meta.scope === scope)));
            triggers.push(this.getMaxAgeTrigger(loadStart$, loadSuccess$, maxAge));
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
     * @param {?} loadSuccess$ Stream that emits on load success
     * @param {?} maxAge max age
     * @return {?}
     */
    getMaxAgeTrigger(loadStart$, loadSuccess$, maxAge) {
        /** @type {?} */
        let timestamp = 0;
        /** @type {?} */
        const timestamp$ = loadSuccess$.pipe(tap((/**
         * @return {?}
         */
        () => (timestamp = Date.now()))));
        /** @type {?} */
        const shouldReload$ = defer((/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            const age = Date.now() - timestamp;
            /** @type {?} */
            const timestampRefresh$ = timestamp$.pipe(delay(maxAge), mapTo(true), withdrawOn(loadStart$));
            if (age > maxAge) {
                return merge(of(true), timestampRefresh$);
            }
            else {
                return merge(of(true).pipe(delay(maxAge - age)), timestampRefresh$);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1sb2FkaW5nLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvcHJvZHVjdC9zZXJ2aWNlcy9wcm9kdWN0LWxvYWRpbmcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2hFLE9BQU8sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzVDLE9BQU8sRUFBRSxhQUFhLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBYyxFQUFFLEVBQUUsS0FBSyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzFFLE9BQU8sRUFDTCxTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFDTCxvQkFBb0IsRUFDcEIsTUFBTSxFQUNOLEdBQUcsRUFDSCxLQUFLLEVBQ0wsV0FBVyxFQUNYLEdBQUcsRUFDSCxjQUFjLEdBQ2YsTUFBTSxnQkFBZ0IsQ0FBQztBQUV4QixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFeEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDNUQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDakYsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQzFELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7Ozs7QUFLcEQsTUFBTSxPQUFPLHFCQUFxQjs7Ozs7OztJQUtoQyxZQUNZLEtBQThCLEVBQzlCLGFBQW1DLEVBQ25DLFFBQWlCLEVBQ0ksVUFB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LFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQTFCZ0IsS0FBSztZQWtCYixvQkFBb0I7WUFHcEIsT0FBTzs0Q0FlWCxNQUFNLFNBQUMsV0FBVzs7Ozs7Ozs7SUFSckIseUNBRU87Ozs7O0lBR0wsc0NBQXdDOzs7OztJQUN4Qyw4Q0FBNkM7Ozs7O0lBQzdDLHlDQUEyQjs7Ozs7SUFDM0IsMkNBQThDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBQTEFURk9STV9JRCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgc2VsZWN0LCBTdG9yZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IGNvbWJpbmVMYXRlc3QsIGRlZmVyLCBtZXJnZSwgT2JzZXJ2YWJsZSwgb2YsIHVzaW5nIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQge1xuICBhdWRpdFRpbWUsXG4gIGRlYm91bmNlVGltZSxcbiAgZGVsYXksXG4gIGRpc3RpbmN0VW50aWxDaGFuZ2VkLFxuICBmaWx0ZXIsXG4gIG1hcCxcbiAgbWFwVG8sXG4gIHNoYXJlUmVwbGF5LFxuICB0YXAsXG4gIHdpdGhMYXRlc3RGcm9tLFxufSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBQcm9kdWN0IH0gZnJvbSAnLi4vLi4vbW9kZWwvcHJvZHVjdC5tb2RlbCc7XG5pbXBvcnQgeyBQcm9kdWN0QWN0aW9ucyB9IGZyb20gJy4uL3N0b3JlL2FjdGlvbnMvaW5kZXgnO1xuaW1wb3J0IHsgU3RhdGVXaXRoUHJvZHVjdCB9IGZyb20gJy4uL3N0b3JlL3Byb2R1Y3Qtc3RhdGUnO1xuaW1wb3J0IHsgUHJvZHVjdFNlbGVjdG9ycyB9IGZyb20gJy4uL3N0b3JlL3NlbGVjdG9ycy9pbmRleCc7XG5pbXBvcnQgeyBMb2FkaW5nU2NvcGVzU2VydmljZSB9IGZyb20gJy4uLy4uL29jYy9zZXJ2aWNlcy9sb2FkaW5nLXNjb3Blcy5zZXJ2aWNlJztcbmltcG9ydCB7IGRlZXBNZXJnZSB9IGZyb20gJy4uLy4uL2NvbmZpZy91dGlscy9kZWVwLW1lcmdlJztcbmltcG9ydCB7IHdpdGhkcmF3T24gfSBmcm9tICcuLi8uLi91dGlsL3dpdGhkcmF3LW9uJztcbmltcG9ydCB7IEFjdGlvbnMsIG9mVHlwZSB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuaW1wb3J0IHsgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgUHJvZHVjdExvYWRpbmdTZXJ2aWNlIHtcbiAgcHJvdGVjdGVkIHByb2R1Y3RzOiB7XG4gICAgW2NvZGU6IHN0cmluZ106IHsgW3Njb3BlOiBzdHJpbmddOiBPYnNlcnZhYmxlPFByb2R1Y3Q+IH07XG4gIH0gPSB7fTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgc3RvcmU6IFN0b3JlPFN0YXRlV2l0aFByb2R1Y3Q+LFxuICAgIHByb3RlY3RlZCBsb2FkaW5nU2NvcGVzOiBMb2FkaW5nU2NvcGVzU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgYWN0aW9ucyQ6IEFjdGlvbnMsXG4gICAgQEluamVjdChQTEFURk9STV9JRCkgcHJvdGVjdGVkIHBsYXRmb3JtSWQ6IGFueVxuICApIHt9XG5cbiAgZ2V0KHByb2R1Y3RDb2RlOiBzdHJpbmcsIHNjb3Blczogc3RyaW5nW10pOiBPYnNlcnZhYmxlPFByb2R1Y3Q+IHtcbiAgICBzY29wZXMgPSB0aGlzLmxvYWRpbmdTY29wZXMuZXhwYW5kKCdwcm9kdWN0Jywgc2NvcGVzKTtcblxuICAgIHRoaXMuaW5pdFByb2R1Y3RTY29wZXMocHJvZHVjdENvZGUsIHNjb3Blcyk7XG5cbiAgICBpZiAoc2NvcGVzLmxlbmd0aCA+IDEpIHtcbiAgICAgIHJldHVybiBjb21iaW5lTGF0ZXN0KFxuICAgICAgICBzY29wZXMubWFwKHNjb3BlID0+IHRoaXMucHJvZHVjdHNbcHJvZHVjdENvZGVdW3Njb3BlXSlcbiAgICAgICkucGlwZShcbiAgICAgICAgYXVkaXRUaW1lKDApLFxuICAgICAgICBtYXAoXG4gICAgICAgICAgcHJvZHVjdFBhcnRzID0+XG4gICAgICAgICAgICBwcm9kdWN0UGFydHMuZmluZChCb29sZWFuKSAmJiBkZWVwTWVyZ2Uoe30sIC4uLnByb2R1Y3RQYXJ0cylcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMucHJvZHVjdHNbcHJvZHVjdENvZGVdW3Njb3Blc1swXV07XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIGluaXRQcm9kdWN0U2NvcGVzKHByb2R1Y3RDb2RlOiBzdHJpbmcsIHNjb3Blczogc3RyaW5nW10pOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMucHJvZHVjdHNbcHJvZHVjdENvZGVdKSB7XG4gICAgICB0aGlzLnByb2R1Y3RzW3Byb2R1Y3RDb2RlXSA9IHt9O1xuICAgIH1cblxuICAgIGZvciAoY29uc3Qgc2NvcGUgb2Ygc2NvcGVzKSB7XG4gICAgICBpZiAoIXRoaXMucHJvZHVjdHNbcHJvZHVjdENvZGVdW3Njb3BlXSkge1xuICAgICAgICB0aGlzLnByb2R1Y3RzW3Byb2R1Y3RDb2RlXVtzY29wZV0gPSB0aGlzLmdldFByb2R1Y3RGb3JTY29wZShcbiAgICAgICAgICBwcm9kdWN0Q29kZSxcbiAgICAgICAgICBzY29wZVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIG9ic2VydmFibGUgZm9yIHByb3ZpZGluZyBzcGVjaWZpZWQgcHJvZHVjdCBkYXRhIGZvciB0aGUgc2NvcGVcbiAgICpcbiAgICogQHBhcmFtIHByb2R1Y3RDb2RlXG4gICAqIEBwYXJhbSBzY29wZVxuICAgKi9cbiAgcHJvdGVjdGVkIGdldFByb2R1Y3RGb3JTY29wZShcbiAgICBwcm9kdWN0Q29kZTogc3RyaW5nLFxuICAgIHNjb3BlOiBzdHJpbmdcbiAgKTogT2JzZXJ2YWJsZTxQcm9kdWN0PiB7XG4gICAgY29uc3Qgc2hvdWxkTG9hZCQgPSB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoXG4gICAgICAgIFByb2R1Y3RTZWxlY3RvcnMuZ2V0U2VsZWN0ZWRQcm9kdWN0U3RhdGVGYWN0b3J5KHByb2R1Y3RDb2RlLCBzY29wZSlcbiAgICAgICksXG4gICAgICBtYXAoXG4gICAgICAgIHByb2R1Y3RTdGF0ZSA9PlxuICAgICAgICAgICFwcm9kdWN0U3RhdGUubG9hZGluZyAmJiAhcHJvZHVjdFN0YXRlLnN1Y2Nlc3MgJiYgIXByb2R1Y3RTdGF0ZS5lcnJvclxuICAgICAgKSxcbiAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCksXG4gICAgICBmaWx0ZXIoeCA9PiB4KVxuICAgICk7XG5cbiAgICBjb25zdCBpc0xvYWRpbmckID0gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KFxuICAgICAgICBQcm9kdWN0U2VsZWN0b3JzLmdldFNlbGVjdGVkUHJvZHVjdExvYWRpbmdGYWN0b3J5KHByb2R1Y3RDb2RlLCBzY29wZSlcbiAgICAgIClcbiAgICApO1xuXG4gICAgY29uc3QgcHJvZHVjdExvYWRMb2dpYyQgPSBtZXJnZShcbiAgICAgIHNob3VsZExvYWQkLFxuICAgICAgLi4udGhpcy5nZXRQcm9kdWN0UmVsb2FkVHJpZ2dlcnMocHJvZHVjdENvZGUsIHNjb3BlKVxuICAgICkucGlwZShcbiAgICAgIGRlYm91bmNlVGltZSgwKSxcbiAgICAgIHdpdGhMYXRlc3RGcm9tKGlzTG9hZGluZyQpLFxuICAgICAgdGFwKChbLCBpc0xvYWRpbmddKSA9PiB7XG4gICAgICAgIGlmICghaXNMb2FkaW5nKSB7XG4gICAgICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcbiAgICAgICAgICAgIG5ldyBQcm9kdWN0QWN0aW9ucy5Mb2FkUHJvZHVjdChwcm9kdWN0Q29kZSwgc2NvcGUpXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICApO1xuXG4gICAgY29uc3QgcHJvZHVjdERhdGEkID0gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KFByb2R1Y3RTZWxlY3RvcnMuZ2V0U2VsZWN0ZWRQcm9kdWN0RmFjdG9yeShwcm9kdWN0Q29kZSwgc2NvcGUpKVxuICAgICk7XG5cbiAgICByZXR1cm4gdXNpbmcoKCkgPT4gcHJvZHVjdExvYWRMb2dpYyQuc3Vic2NyaWJlKCksICgpID0+IHByb2R1Y3REYXRhJCkucGlwZShcbiAgICAgIHNoYXJlUmVwbGF5KHsgYnVmZmVyU2l6ZTogMSwgcmVmQ291bnQ6IHRydWUgfSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgcmVsb2FkIHRyaWdnZXJzIGZvciBwcm9kdWN0IHBlciBzY29wZVxuICAgKlxuICAgKiBAcGFyYW0gcHJvZHVjdENvZGVcbiAgICogQHBhcmFtIHNjb3BlXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0UHJvZHVjdFJlbG9hZFRyaWdnZXJzKFxuICAgIHByb2R1Y3RDb2RlOiBzdHJpbmcsXG4gICAgc2NvcGU6IHN0cmluZ1xuICApOiBPYnNlcnZhYmxlPGJvb2xlYW4+W10ge1xuICAgIGNvbnN0IHRyaWdnZXJzID0gW107XG5cbiAgICAvLyBtYXggYWdlIHRyaWdnZXIgYWRkXG4gICAgY29uc3QgbWF4QWdlID0gdGhpcy5sb2FkaW5nU2NvcGVzLmdldE1heEFnZSgncHJvZHVjdCcsIHNjb3BlKTtcbiAgICBpZiAobWF4QWdlICYmIGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkpIHtcbiAgICAgIGNvbnN0IGxvYWRTdWNjZXNzJCA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICAgICAgb2ZUeXBlKFByb2R1Y3RBY3Rpb25zLkxPQURfUFJPRFVDVF9TVUNDRVNTKSxcbiAgICAgICAgZmlsdGVyKFxuICAgICAgICAgIChhY3Rpb246IFByb2R1Y3RBY3Rpb25zLkxvYWRQcm9kdWN0U3VjY2VzcykgPT5cbiAgICAgICAgICAgIGFjdGlvbi5wYXlsb2FkLmNvZGUgPT09IHByb2R1Y3RDb2RlICYmIGFjdGlvbi5tZXRhLnNjb3BlID09PSBzY29wZVxuICAgICAgICApXG4gICAgICApO1xuXG4gICAgICBjb25zdCBsb2FkU3RhcnQkID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgICAgICBvZlR5cGUoUHJvZHVjdEFjdGlvbnMuTE9BRF9QUk9EVUNUKSxcbiAgICAgICAgZmlsdGVyKFxuICAgICAgICAgIChhY3Rpb246IFByb2R1Y3RBY3Rpb25zLkxvYWRQcm9kdWN0KSA9PlxuICAgICAgICAgICAgYWN0aW9uLnBheWxvYWQgPT09IHByb2R1Y3RDb2RlICYmIGFjdGlvbi5tZXRhLnNjb3BlID09PSBzY29wZVxuICAgICAgICApXG4gICAgICApO1xuXG4gICAgICB0cmlnZ2Vycy5wdXNoKHRoaXMuZ2V0TWF4QWdlVHJpZ2dlcihsb2FkU3RhcnQkLCBsb2FkU3VjY2VzcyQsIG1heEFnZSkpO1xuICAgIH1cblxuICAgIHJldHVybiB0cmlnZ2VycztcbiAgfVxuXG4gIC8qKlxuICAgKiBHZW5lcmljIG1ldGhvZCB0aGF0IHJldHVybnMgc3RyZWFtIHRyaWdnZXJpbmcgcmVsb2FkIGJ5IG1heEFnZVxuICAgKlxuICAgKiBDb3VsZCBiZSByZWZhY3RvcmVkIHRvIHNlcGFyYXRlIHNlcnZpY2UgaW4gZnV0dXJlIHRvIHVzZSBpbiBvdGhlclxuICAgKiBtYXggYWdlIHJlbG9hZCBpbXBsZW1lbnRhdGlvbnNcbiAgICpcbiAgICogQHBhcmFtIGxvYWRTdGFydCQgU3RyZWFtIHRoYXQgZW1pdHMgb24gbG9hZCBzdGFydFxuICAgKiBAcGFyYW0gbG9hZFN1Y2Nlc3MkIFN0cmVhbSB0aGF0IGVtaXRzIG9uIGxvYWQgc3VjY2Vzc1xuICAgKiBAcGFyYW0gbWF4QWdlIG1heCBhZ2VcbiAgICovXG4gIHByaXZhdGUgZ2V0TWF4QWdlVHJpZ2dlcihcbiAgICBsb2FkU3RhcnQkOiBPYnNlcnZhYmxlPGFueT4sXG4gICAgbG9hZFN1Y2Nlc3MkOiBPYnNlcnZhYmxlPGFueT4sXG4gICAgbWF4QWdlOiBudW1iZXJcbiAgKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgbGV0IHRpbWVzdGFtcCA9IDA7XG5cbiAgICBjb25zdCB0aW1lc3RhbXAkID0gbG9hZFN1Y2Nlc3MkLnBpcGUodGFwKCgpID0+ICh0aW1lc3RhbXAgPSBEYXRlLm5vdygpKSkpO1xuXG4gICAgY29uc3Qgc2hvdWxkUmVsb2FkJDogT2JzZXJ2YWJsZTxib29sZWFuPiA9IGRlZmVyKCgpID0+IHtcbiAgICAgIGNvbnN0IGFnZSA9IERhdGUubm93KCkgLSB0aW1lc3RhbXA7XG5cbiAgICAgIGNvbnN0IHRpbWVzdGFtcFJlZnJlc2gkID0gdGltZXN0YW1wJC5waXBlKFxuICAgICAgICBkZWxheShtYXhBZ2UpLFxuICAgICAgICBtYXBUbyh0cnVlKSxcbiAgICAgICAgd2l0aGRyYXdPbihsb2FkU3RhcnQkKVxuICAgICAgKTtcblxuICAgICAgaWYgKGFnZSA+IG1heEFnZSkge1xuICAgICAgICByZXR1cm4gbWVyZ2Uob2YodHJ1ZSksIHRpbWVzdGFtcFJlZnJlc2gkKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBtZXJnZShvZih0cnVlKS5waXBlKGRlbGF5KG1heEFnZSAtIGFnZSkpLCB0aW1lc3RhbXBSZWZyZXNoJCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gc2hvdWxkUmVsb2FkJDtcbiAgfVxufVxuIl19