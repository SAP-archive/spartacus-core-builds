/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
var ProductLoadingService = /** @class */ (function () {
    function ProductLoadingService(store, loadingScopes, actions$, platformId) {
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
    ProductLoadingService.prototype.get = /**
     * @param {?} productCode
     * @param {?} scopes
     * @return {?}
     */
    function (productCode, scopes) {
        var _this = this;
        scopes = this.loadingScopes.expand('product', scopes);
        this.initProductScopes(productCode, scopes);
        if (scopes.length > 1) {
            return combineLatest(scopes.map((/**
             * @param {?} scope
             * @return {?}
             */
            function (scope) { return _this.products[productCode][scope]; }))).pipe(auditTime(0), map((/**
             * @param {?} productParts
             * @return {?}
             */
            function (productParts) {
                return productParts.every(Boolean)
                    ? deepMerge.apply(void 0, tslib_1.__spread([{}], productParts)) : undefined;
            })), distinctUntilChanged());
        }
        else {
            return this.products[productCode][scopes[0]];
        }
    };
    /**
     * @protected
     * @param {?} productCode
     * @param {?} scopes
     * @return {?}
     */
    ProductLoadingService.prototype.initProductScopes = /**
     * @protected
     * @param {?} productCode
     * @param {?} scopes
     * @return {?}
     */
    function (productCode, scopes) {
        var e_1, _a;
        if (!this.products[productCode]) {
            this.products[productCode] = {};
        }
        try {
            for (var scopes_1 = tslib_1.__values(scopes), scopes_1_1 = scopes_1.next(); !scopes_1_1.done; scopes_1_1 = scopes_1.next()) {
                var scope = scopes_1_1.value;
                if (!this.products[productCode][scope]) {
                    this.products[productCode][scope] = this.getProductForScope(productCode, scope);
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (scopes_1_1 && !scopes_1_1.done && (_a = scopes_1.return)) _a.call(scopes_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    /**
     * Creates observable for providing specified product data for the scope
     *
     * @param productCode
     * @param scope
     */
    /**
     * Creates observable for providing specified product data for the scope
     *
     * @protected
     * @param {?} productCode
     * @param {?} scope
     * @return {?}
     */
    ProductLoadingService.prototype.getProductForScope = /**
     * Creates observable for providing specified product data for the scope
     *
     * @protected
     * @param {?} productCode
     * @param {?} scope
     * @return {?}
     */
    function (productCode, scope) {
        var _this = this;
        /** @type {?} */
        var shouldLoad$ = this.store.pipe(select(ProductSelectors.getSelectedProductStateFactory(productCode, scope)), map((/**
         * @param {?} productState
         * @return {?}
         */
        function (productState) {
            return !productState.loading && !productState.success && !productState.error;
        })), distinctUntilChanged(), filter((/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return x; })));
        /** @type {?} */
        var isLoading$ = this.store.pipe(select(ProductSelectors.getSelectedProductLoadingFactory(productCode, scope)));
        /** @type {?} */
        var productLoadLogic$ = merge.apply(void 0, tslib_1.__spread([shouldLoad$], this.getProductReloadTriggers(productCode, scope))).pipe(debounceTime(0), withLatestFrom(isLoading$), tap((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = tslib_1.__read(_a, 2), isLoading = _b[1];
            if (!isLoading) {
                _this.store.dispatch(new ProductActions.LoadProduct(productCode, scope));
            }
        })));
        /** @type {?} */
        var productData$ = this.store.pipe(select(ProductSelectors.getSelectedProductFactory(productCode, scope)));
        return using((/**
         * @return {?}
         */
        function () { return productLoadLogic$.subscribe(); }), (/**
         * @return {?}
         */
        function () { return productData$; })).pipe(shareReplay({ bufferSize: 1, refCount: true }));
    };
    /**
     * Returns reload triggers for product per scope
     *
     * @param productCode
     * @param scope
     */
    /**
     * Returns reload triggers for product per scope
     *
     * @protected
     * @param {?} productCode
     * @param {?} scope
     * @return {?}
     */
    ProductLoadingService.prototype.getProductReloadTriggers = /**
     * Returns reload triggers for product per scope
     *
     * @protected
     * @param {?} productCode
     * @param {?} scope
     * @return {?}
     */
    function (productCode, scope) {
        /** @type {?} */
        var triggers = [];
        // max age trigger add
        /** @type {?} */
        var maxAge = this.loadingScopes.getMaxAge('product', scope);
        if (maxAge && isPlatformBrowser(this.platformId)) {
            // we want to grab load product success and load product fail for this product and scope
            /** @type {?} */
            var loadFinish$ = this.actions$.pipe(filter((/**
             * @param {?} action
             * @return {?}
             */
            function (action) {
                return (action.type === ProductActions.LOAD_PRODUCT_SUCCESS ||
                    action.type === ProductActions.LOAD_PRODUCT_FAIL) &&
                    action.meta.entityId === productCode &&
                    action.meta.scope === scope;
            })));
            /** @type {?} */
            var loadStart$ = this.actions$.pipe(ofType(ProductActions.LOAD_PRODUCT), filter((/**
             * @param {?} action
             * @return {?}
             */
            function (action) {
                return action.payload === productCode && action.meta.scope === scope;
            })));
            triggers.push(this.getMaxAgeTrigger(loadStart$, loadFinish$, maxAge));
        }
        return triggers;
    };
    /**
     * Generic method that returns stream triggering reload by maxAge
     *
     * Could be refactored to separate service in future to use in other
     * max age reload implementations
     *
     * @param loadStart$ Stream that emits on load start
     * @param loadFinish$ Stream that emits on load finish
     * @param maxAge max age
     */
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
    ProductLoadingService.prototype.getMaxAgeTrigger = /**
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
    function (loadStart$, loadFinish$, maxAge, scheduler) {
        /** @type {?} */
        var timestamp = 0;
        /** @type {?} */
        var now = (/**
         * @return {?}
         */
        function () { return (scheduler ? scheduler.now() : Date.now()); });
        /** @type {?} */
        var timestamp$ = loadFinish$.pipe(tap((/**
         * @return {?}
         */
        function () { return (timestamp = now()); })));
        /** @type {?} */
        var shouldReload$ = defer((/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var age = now() - timestamp;
            /** @type {?} */
            var timestampRefresh$ = timestamp$.pipe(delay(maxAge, scheduler), mapTo(true), withdrawOn(loadStart$));
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
    };
    ProductLoadingService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    ProductLoadingService.ctorParameters = function () { return [
        { type: Store },
        { type: LoadingScopesService },
        { type: Actions },
        { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
    ]; };
    /** @nocollapse */ ProductLoadingService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function ProductLoadingService_Factory() { return new ProductLoadingService(i0.ɵɵinject(i1.Store), i0.ɵɵinject(i2.LoadingScopesService), i0.ɵɵinject(i3.Actions), i0.ɵɵinject(i0.PLATFORM_ID)); }, token: ProductLoadingService, providedIn: "root" });
    return ProductLoadingService;
}());
export { ProductLoadingService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1sb2FkaW5nLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvcHJvZHVjdC9zZXJ2aWNlcy9wcm9kdWN0LWxvYWRpbmcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoRCxPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUM1QyxPQUFPLEVBQ0wsYUFBYSxFQUNiLEtBQUssRUFDTCxLQUFLLEVBRUwsRUFBRSxFQUVGLEtBQUssR0FDTixNQUFNLE1BQU0sQ0FBQztBQUNkLE9BQU8sRUFDTCxTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFDTCxvQkFBb0IsRUFDcEIsTUFBTSxFQUNOLEdBQUcsRUFDSCxLQUFLLEVBQ0wsV0FBVyxFQUNYLEdBQUcsRUFDSCxjQUFjLEdBQ2YsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4QixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFFMUQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDakYsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUV4RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQzs7Ozs7QUFFNUQ7SUFRRSwrQkFDWSxLQUE4QixFQUM5QixhQUFtQyxFQUNuQyxRQUFpQixFQUNJLFVBQWU7UUFIcEMsVUFBSyxHQUFMLEtBQUss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LEtBQUs7OztRQUFDOztnQkFDekMsR0FBRyxHQUFHLEdBQUcsRUFBRSxHQUFHLFNBQVM7O2dCQUV2QixpQkFBaUIsR0FBRyxVQUFVLENBQUMsSUFBSSxDQUN2QyxLQUFLLENBQUMsTUFBTSxFQUFFLFNBQVMsQ0FBQyxFQUN4QixLQUFLLENBQUMsSUFBSSxDQUFDLEVBQ1gsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUN2QjtZQUVELElBQUksR0FBRyxHQUFHLE1BQU0sRUFBRTtnQkFDaEIseUNBQXlDO2dCQUN6QyxPQUFPLEtBQUssQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsaUJBQWlCLENBQUMsQ0FBQzthQUMzQztpQkFBTSxJQUFJLEdBQUcsS0FBSyxDQUFDLEVBQUU7Z0JBQ3BCLG9FQUFvRTtnQkFDcEUsMENBQTBDO2dCQUMxQyxPQUFPLGlCQUFpQixDQUFDO2FBQzFCO2lCQUFNO2dCQUNMLGtEQUFrRDtnQkFDbEQsT0FBTyxLQUFLLENBQ1YsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLEdBQUcsRUFBRSxTQUFTLENBQUMsQ0FBQyxFQUM3QyxpQkFBaUIsQ0FDbEIsQ0FBQzthQUNIO1FBQ0gsQ0FBQyxFQUFDO1FBRUYsT0FBTyxhQUFhLENBQUM7SUFDdkIsQ0FBQzs7Z0JBcE1GLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBaENnQixLQUFLO2dCQXdCYixvQkFBb0I7Z0JBekJwQixPQUFPO2dEQTJDWCxNQUFNLFNBQUMsV0FBVzs7O2dDQTdDdkI7Q0FzT0MsQUFyTUQsSUFxTUM7U0FsTVkscUJBQXFCOzs7Ozs7SUFDaEMseUNBRU87Ozs7O0lBR0wsc0NBQXdDOzs7OztJQUN4Qyw4Q0FBNkM7Ozs7O0lBQzdDLHlDQUEyQjs7Ozs7SUFDM0IsMkNBQThDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBQTEFURk9STV9JRCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aW9ucywgb2ZUeXBlIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5pbXBvcnQgeyBzZWxlY3QsIFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHtcbiAgY29tYmluZUxhdGVzdCxcbiAgZGVmZXIsXG4gIG1lcmdlLFxuICBPYnNlcnZhYmxlLFxuICBvZixcbiAgU2NoZWR1bGVyTGlrZSxcbiAgdXNpbmcsXG59IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtcbiAgYXVkaXRUaW1lLFxuICBkZWJvdW5jZVRpbWUsXG4gIGRlbGF5LFxuICBkaXN0aW5jdFVudGlsQ2hhbmdlZCxcbiAgZmlsdGVyLFxuICBtYXAsXG4gIG1hcFRvLFxuICBzaGFyZVJlcGxheSxcbiAgdGFwLFxuICB3aXRoTGF0ZXN0RnJvbSxcbn0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgZGVlcE1lcmdlIH0gZnJvbSAnLi4vLi4vY29uZmlnL3V0aWxzL2RlZXAtbWVyZ2UnO1xuaW1wb3J0IHsgUHJvZHVjdCB9IGZyb20gJy4uLy4uL21vZGVsL3Byb2R1Y3QubW9kZWwnO1xuaW1wb3J0IHsgTG9hZGluZ1Njb3Blc1NlcnZpY2UgfSBmcm9tICcuLi8uLi9vY2Mvc2VydmljZXMvbG9hZGluZy1zY29wZXMuc2VydmljZSc7XG5pbXBvcnQgeyB3aXRoZHJhd09uIH0gZnJvbSAnLi4vLi4vdXRpbC93aXRoZHJhdy1vbic7XG5pbXBvcnQgeyBQcm9kdWN0QWN0aW9ucyB9IGZyb20gJy4uL3N0b3JlL2FjdGlvbnMvaW5kZXgnO1xuaW1wb3J0IHsgU3RhdGVXaXRoUHJvZHVjdCB9IGZyb20gJy4uL3N0b3JlL3Byb2R1Y3Qtc3RhdGUnO1xuaW1wb3J0IHsgUHJvZHVjdFNlbGVjdG9ycyB9IGZyb20gJy4uL3N0b3JlL3NlbGVjdG9ycy9pbmRleCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBQcm9kdWN0TG9hZGluZ1NlcnZpY2Uge1xuICBwcm90ZWN0ZWQgcHJvZHVjdHM6IHtcbiAgICBbY29kZTogc3RyaW5nXTogeyBbc2NvcGU6IHN0cmluZ106IE9ic2VydmFibGU8UHJvZHVjdD4gfTtcbiAgfSA9IHt9O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBzdG9yZTogU3RvcmU8U3RhdGVXaXRoUHJvZHVjdD4sXG4gICAgcHJvdGVjdGVkIGxvYWRpbmdTY29wZXM6IExvYWRpbmdTY29wZXNTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBhY3Rpb25zJDogQWN0aW9ucyxcbiAgICBASW5qZWN0KFBMQVRGT1JNX0lEKSBwcm90ZWN0ZWQgcGxhdGZvcm1JZDogYW55XG4gICkge31cblxuICBnZXQocHJvZHVjdENvZGU6IHN0cmluZywgc2NvcGVzOiBzdHJpbmdbXSk6IE9ic2VydmFibGU8UHJvZHVjdD4ge1xuICAgIHNjb3BlcyA9IHRoaXMubG9hZGluZ1Njb3Blcy5leHBhbmQoJ3Byb2R1Y3QnLCBzY29wZXMpO1xuXG4gICAgdGhpcy5pbml0UHJvZHVjdFNjb3Blcyhwcm9kdWN0Q29kZSwgc2NvcGVzKTtcblxuICAgIGlmIChzY29wZXMubGVuZ3RoID4gMSkge1xuICAgICAgcmV0dXJuIGNvbWJpbmVMYXRlc3QoXG4gICAgICAgIHNjb3Blcy5tYXAoc2NvcGUgPT4gdGhpcy5wcm9kdWN0c1twcm9kdWN0Q29kZV1bc2NvcGVdKVxuICAgICAgKS5waXBlKFxuICAgICAgICBhdWRpdFRpbWUoMCksXG4gICAgICAgIG1hcChwcm9kdWN0UGFydHMgPT5cbiAgICAgICAgICBwcm9kdWN0UGFydHMuZXZlcnkoQm9vbGVhbilcbiAgICAgICAgICAgID8gZGVlcE1lcmdlKHt9LCAuLi5wcm9kdWN0UGFydHMpXG4gICAgICAgICAgICA6IHVuZGVmaW5lZFxuICAgICAgICApLFxuICAgICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5wcm9kdWN0c1twcm9kdWN0Q29kZV1bc2NvcGVzWzBdXTtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgaW5pdFByb2R1Y3RTY29wZXMocHJvZHVjdENvZGU6IHN0cmluZywgc2NvcGVzOiBzdHJpbmdbXSk6IHZvaWQge1xuICAgIGlmICghdGhpcy5wcm9kdWN0c1twcm9kdWN0Q29kZV0pIHtcbiAgICAgIHRoaXMucHJvZHVjdHNbcHJvZHVjdENvZGVdID0ge307XG4gICAgfVxuXG4gICAgZm9yIChjb25zdCBzY29wZSBvZiBzY29wZXMpIHtcbiAgICAgIGlmICghdGhpcy5wcm9kdWN0c1twcm9kdWN0Q29kZV1bc2NvcGVdKSB7XG4gICAgICAgIHRoaXMucHJvZHVjdHNbcHJvZHVjdENvZGVdW3Njb3BlXSA9IHRoaXMuZ2V0UHJvZHVjdEZvclNjb3BlKFxuICAgICAgICAgIHByb2R1Y3RDb2RlLFxuICAgICAgICAgIHNjb3BlXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgb2JzZXJ2YWJsZSBmb3IgcHJvdmlkaW5nIHNwZWNpZmllZCBwcm9kdWN0IGRhdGEgZm9yIHRoZSBzY29wZVxuICAgKlxuICAgKiBAcGFyYW0gcHJvZHVjdENvZGVcbiAgICogQHBhcmFtIHNjb3BlXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0UHJvZHVjdEZvclNjb3BlKFxuICAgIHByb2R1Y3RDb2RlOiBzdHJpbmcsXG4gICAgc2NvcGU6IHN0cmluZ1xuICApOiBPYnNlcnZhYmxlPFByb2R1Y3Q+IHtcbiAgICBjb25zdCBzaG91bGRMb2FkJCA9IHRoaXMuc3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChcbiAgICAgICAgUHJvZHVjdFNlbGVjdG9ycy5nZXRTZWxlY3RlZFByb2R1Y3RTdGF0ZUZhY3RvcnkocHJvZHVjdENvZGUsIHNjb3BlKVxuICAgICAgKSxcbiAgICAgIG1hcChcbiAgICAgICAgcHJvZHVjdFN0YXRlID0+XG4gICAgICAgICAgIXByb2R1Y3RTdGF0ZS5sb2FkaW5nICYmICFwcm9kdWN0U3RhdGUuc3VjY2VzcyAmJiAhcHJvZHVjdFN0YXRlLmVycm9yXG4gICAgICApLFxuICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKSxcbiAgICAgIGZpbHRlcih4ID0+IHgpXG4gICAgKTtcblxuICAgIGNvbnN0IGlzTG9hZGluZyQgPSB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoXG4gICAgICAgIFByb2R1Y3RTZWxlY3RvcnMuZ2V0U2VsZWN0ZWRQcm9kdWN0TG9hZGluZ0ZhY3RvcnkocHJvZHVjdENvZGUsIHNjb3BlKVxuICAgICAgKVxuICAgICk7XG5cbiAgICBjb25zdCBwcm9kdWN0TG9hZExvZ2ljJCA9IG1lcmdlKFxuICAgICAgc2hvdWxkTG9hZCQsXG4gICAgICAuLi50aGlzLmdldFByb2R1Y3RSZWxvYWRUcmlnZ2Vycyhwcm9kdWN0Q29kZSwgc2NvcGUpXG4gICAgKS5waXBlKFxuICAgICAgZGVib3VuY2VUaW1lKDApLFxuICAgICAgd2l0aExhdGVzdEZyb20oaXNMb2FkaW5nJCksXG4gICAgICB0YXAoKFssIGlzTG9hZGluZ10pID0+IHtcbiAgICAgICAgaWYgKCFpc0xvYWRpbmcpIHtcbiAgICAgICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKFxuICAgICAgICAgICAgbmV3IFByb2R1Y3RBY3Rpb25zLkxvYWRQcm9kdWN0KHByb2R1Y3RDb2RlLCBzY29wZSlcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICk7XG5cbiAgICBjb25zdCBwcm9kdWN0RGF0YSQgPSB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoUHJvZHVjdFNlbGVjdG9ycy5nZXRTZWxlY3RlZFByb2R1Y3RGYWN0b3J5KHByb2R1Y3RDb2RlLCBzY29wZSkpXG4gICAgKTtcblxuICAgIHJldHVybiB1c2luZygoKSA9PiBwcm9kdWN0TG9hZExvZ2ljJC5zdWJzY3JpYmUoKSwgKCkgPT4gcHJvZHVjdERhdGEkKS5waXBlKFxuICAgICAgc2hhcmVSZXBsYXkoeyBidWZmZXJTaXplOiAxLCByZWZDb3VudDogdHJ1ZSB9KVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyByZWxvYWQgdHJpZ2dlcnMgZm9yIHByb2R1Y3QgcGVyIHNjb3BlXG4gICAqXG4gICAqIEBwYXJhbSBwcm9kdWN0Q29kZVxuICAgKiBAcGFyYW0gc2NvcGVcbiAgICovXG4gIHByb3RlY3RlZCBnZXRQcm9kdWN0UmVsb2FkVHJpZ2dlcnMoXG4gICAgcHJvZHVjdENvZGU6IHN0cmluZyxcbiAgICBzY29wZTogc3RyaW5nXG4gICk6IE9ic2VydmFibGU8Ym9vbGVhbj5bXSB7XG4gICAgY29uc3QgdHJpZ2dlcnMgPSBbXTtcblxuICAgIC8vIG1heCBhZ2UgdHJpZ2dlciBhZGRcbiAgICBjb25zdCBtYXhBZ2UgPSB0aGlzLmxvYWRpbmdTY29wZXMuZ2V0TWF4QWdlKCdwcm9kdWN0Jywgc2NvcGUpO1xuICAgIGlmIChtYXhBZ2UgJiYgaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xuICAgICAgLy8gd2Ugd2FudCB0byBncmFiIGxvYWQgcHJvZHVjdCBzdWNjZXNzIGFuZCBsb2FkIHByb2R1Y3QgZmFpbCBmb3IgdGhpcyBwcm9kdWN0IGFuZCBzY29wZVxuICAgICAgY29uc3QgbG9hZEZpbmlzaCQgPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgICAgIGZpbHRlcihcbiAgICAgICAgICAoXG4gICAgICAgICAgICBhY3Rpb246XG4gICAgICAgICAgICAgIHwgUHJvZHVjdEFjdGlvbnMuTG9hZFByb2R1Y3RTdWNjZXNzXG4gICAgICAgICAgICAgIHwgUHJvZHVjdEFjdGlvbnMuTG9hZFByb2R1Y3RGYWlsXG4gICAgICAgICAgKSA9PlxuICAgICAgICAgICAgKGFjdGlvbi50eXBlID09PSBQcm9kdWN0QWN0aW9ucy5MT0FEX1BST0RVQ1RfU1VDQ0VTUyB8fFxuICAgICAgICAgICAgICBhY3Rpb24udHlwZSA9PT0gUHJvZHVjdEFjdGlvbnMuTE9BRF9QUk9EVUNUX0ZBSUwpICYmXG4gICAgICAgICAgICBhY3Rpb24ubWV0YS5lbnRpdHlJZCA9PT0gcHJvZHVjdENvZGUgJiZcbiAgICAgICAgICAgIGFjdGlvbi5tZXRhLnNjb3BlID09PSBzY29wZVxuICAgICAgICApXG4gICAgICApO1xuXG4gICAgICBjb25zdCBsb2FkU3RhcnQkID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgICAgICBvZlR5cGUoUHJvZHVjdEFjdGlvbnMuTE9BRF9QUk9EVUNUKSxcbiAgICAgICAgZmlsdGVyKFxuICAgICAgICAgIChhY3Rpb246IFByb2R1Y3RBY3Rpb25zLkxvYWRQcm9kdWN0KSA9PlxuICAgICAgICAgICAgYWN0aW9uLnBheWxvYWQgPT09IHByb2R1Y3RDb2RlICYmIGFjdGlvbi5tZXRhLnNjb3BlID09PSBzY29wZVxuICAgICAgICApXG4gICAgICApO1xuXG4gICAgICB0cmlnZ2Vycy5wdXNoKHRoaXMuZ2V0TWF4QWdlVHJpZ2dlcihsb2FkU3RhcnQkLCBsb2FkRmluaXNoJCwgbWF4QWdlKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRyaWdnZXJzO1xuICB9XG5cbiAgLyoqXG4gICAqIEdlbmVyaWMgbWV0aG9kIHRoYXQgcmV0dXJucyBzdHJlYW0gdHJpZ2dlcmluZyByZWxvYWQgYnkgbWF4QWdlXG4gICAqXG4gICAqIENvdWxkIGJlIHJlZmFjdG9yZWQgdG8gc2VwYXJhdGUgc2VydmljZSBpbiBmdXR1cmUgdG8gdXNlIGluIG90aGVyXG4gICAqIG1heCBhZ2UgcmVsb2FkIGltcGxlbWVudGF0aW9uc1xuICAgKlxuICAgKiBAcGFyYW0gbG9hZFN0YXJ0JCBTdHJlYW0gdGhhdCBlbWl0cyBvbiBsb2FkIHN0YXJ0XG4gICAqIEBwYXJhbSBsb2FkRmluaXNoJCBTdHJlYW0gdGhhdCBlbWl0cyBvbiBsb2FkIGZpbmlzaFxuICAgKiBAcGFyYW0gbWF4QWdlIG1heCBhZ2VcbiAgICovXG4gIHByaXZhdGUgZ2V0TWF4QWdlVHJpZ2dlcihcbiAgICBsb2FkU3RhcnQkOiBPYnNlcnZhYmxlPGFueT4sXG4gICAgbG9hZEZpbmlzaCQ6IE9ic2VydmFibGU8YW55PixcbiAgICBtYXhBZ2U6IG51bWJlcixcbiAgICBzY2hlZHVsZXI/OiBTY2hlZHVsZXJMaWtlXG4gICk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIGxldCB0aW1lc3RhbXAgPSAwO1xuXG4gICAgY29uc3Qgbm93ID0gKCkgPT4gKHNjaGVkdWxlciA/IHNjaGVkdWxlci5ub3coKSA6IERhdGUubm93KCkpO1xuXG4gICAgY29uc3QgdGltZXN0YW1wJCA9IGxvYWRGaW5pc2gkLnBpcGUodGFwKCgpID0+ICh0aW1lc3RhbXAgPSBub3coKSkpKTtcblxuICAgIGNvbnN0IHNob3VsZFJlbG9hZCQ6IE9ic2VydmFibGU8Ym9vbGVhbj4gPSBkZWZlcigoKSA9PiB7XG4gICAgICBjb25zdCBhZ2UgPSBub3coKSAtIHRpbWVzdGFtcDtcblxuICAgICAgY29uc3QgdGltZXN0YW1wUmVmcmVzaCQgPSB0aW1lc3RhbXAkLnBpcGUoXG4gICAgICAgIGRlbGF5KG1heEFnZSwgc2NoZWR1bGVyKSxcbiAgICAgICAgbWFwVG8odHJ1ZSksXG4gICAgICAgIHdpdGhkcmF3T24obG9hZFN0YXJ0JClcbiAgICAgICk7XG5cbiAgICAgIGlmIChhZ2UgPiBtYXhBZ2UpIHtcbiAgICAgICAgLy8gd2Ugc2hvdWxkIGVtaXQgZmlyc3QgdmFsdWUgaW1tZWRpYXRlbHlcbiAgICAgICAgcmV0dXJuIG1lcmdlKG9mKHRydWUpLCB0aW1lc3RhbXBSZWZyZXNoJCk7XG4gICAgICB9IGVsc2UgaWYgKGFnZSA9PT0gMCkge1xuICAgICAgICAvLyBlZGdlIGNhc2UsIHdlIHNob3VsZCBlbWl0IG1heCBhZ2UgdGltZW91dCBhZnRlciBuZXh0IGxvYWQgc3VjY2Vzc1xuICAgICAgICAvLyBjb3VsZCBoYXBwZW4gd2l0aCBhcnRpZmljaWFsIHNjaGVkdWxlcnNcbiAgICAgICAgcmV0dXJuIHRpbWVzdGFtcFJlZnJlc2gkO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gd2Ugc2hvdWxkIGVtaXQgZmlyc3QgdmFsdWUgd2hlbiBhZ2Ugd2lsbCBleHBpcmVcbiAgICAgICAgcmV0dXJuIG1lcmdlKFxuICAgICAgICAgIG9mKHRydWUpLnBpcGUoZGVsYXkobWF4QWdlIC0gYWdlLCBzY2hlZHVsZXIpKSxcbiAgICAgICAgICB0aW1lc3RhbXBSZWZyZXNoJFxuICAgICAgICApO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHNob3VsZFJlbG9hZCQ7XG4gIH1cbn1cbiJdfQ==