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
                return productParts.find(Boolean) && deepMerge.apply(void 0, tslib_1.__spread([{}], productParts));
            })));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1sb2FkaW5nLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvcHJvZHVjdC9zZXJ2aWNlcy9wcm9kdWN0LWxvYWRpbmcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoRCxPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUM1QyxPQUFPLEVBQ0wsYUFBYSxFQUNiLEtBQUssRUFDTCxLQUFLLEVBRUwsRUFBRSxFQUVGLEtBQUssR0FDTixNQUFNLE1BQU0sQ0FBQztBQUNkLE9BQU8sRUFDTCxTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFDTCxvQkFBb0IsRUFDcEIsTUFBTSxFQUNOLEdBQUcsRUFDSCxLQUFLLEVBQ0wsV0FBVyxFQUNYLEdBQUcsRUFDSCxjQUFjLEdBQ2YsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4QixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFFMUQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDakYsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUV4RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQzs7Ozs7QUFFNUQ7SUFRRSwrQkFDWSxLQUE4QixFQUM5QixhQUFtQyxFQUNuQyxRQUFpQixFQUNJLFVBQWU7UUFIcEMsVUFBSyxHQUFMLEtBQUssQ0FBeUI7UUFDOUIsa0JBQWEsR0FBYixhQUFhLENBQXNCO1FBQ25DLGFBQVEsR0FBUixRQUFRLENBQVM7UUFDSSxlQUFVLEdBQVYsVUFBVSxDQUFLO1FBUnRDLGFBQVEsR0FFZCxFQUFFLENBQUM7SUFPSixDQUFDOzs7Ozs7SUFFSixtQ0FBRzs7Ozs7SUFBSCxVQUFJLFdBQW1CLEVBQUUsTUFBZ0I7UUFBekMsaUJBa0JDO1FBakJDLE1BQU0sR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFFdEQsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFdBQVcsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUU1QyxJQUFJLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ3JCLE9BQU8sYUFBYSxDQUNsQixNQUFNLENBQUMsR0FBRzs7OztZQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBakMsQ0FBaUMsRUFBQyxDQUN2RCxDQUFDLElBQUksQ0FDSixTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQ1osR0FBRzs7OztZQUNELFVBQUEsWUFBWTtnQkFDVixPQUFBLFlBQVksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksU0FBUyxpQ0FBQyxFQUFFLEdBQUssWUFBWSxFQUFDO1lBQTVELENBQTRELEVBQy9ELENBQ0YsQ0FBQztTQUNIO2FBQU07WUFDTCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDOUM7SUFDSCxDQUFDOzs7Ozs7O0lBRVMsaURBQWlCOzs7Ozs7SUFBM0IsVUFBNEIsV0FBbUIsRUFBRSxNQUFnQjs7UUFDL0QsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLEVBQUU7WUFDL0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsR0FBRyxFQUFFLENBQUM7U0FDakM7O1lBRUQsS0FBb0IsSUFBQSxXQUFBLGlCQUFBLE1BQU0sQ0FBQSw4QkFBQSxrREFBRTtnQkFBdkIsSUFBTSxLQUFLLG1CQUFBO2dCQUNkLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFO29CQUN0QyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FDekQsV0FBVyxFQUNYLEtBQUssQ0FDTixDQUFDO2lCQUNIO2FBQ0Y7Ozs7Ozs7OztJQUNILENBQUM7SUFFRDs7Ozs7T0FLRzs7Ozs7Ozs7O0lBQ08sa0RBQWtCOzs7Ozs7OztJQUE1QixVQUNFLFdBQW1CLEVBQ25CLEtBQWE7UUFGZixpQkE0Q0M7O1lBeENPLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FDakMsTUFBTSxDQUNKLGdCQUFnQixDQUFDLDhCQUE4QixDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsQ0FDcEUsRUFDRCxHQUFHOzs7O1FBQ0QsVUFBQSxZQUFZO1lBQ1YsT0FBQSxDQUFDLFlBQVksQ0FBQyxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUs7UUFBckUsQ0FBcUUsRUFDeEUsRUFDRCxvQkFBb0IsRUFBRSxFQUN0QixNQUFNOzs7O1FBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLEVBQUQsQ0FBQyxFQUFDLENBQ2Y7O1lBRUssVUFBVSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUNoQyxNQUFNLENBQ0osZ0JBQWdCLENBQUMsZ0NBQWdDLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxDQUN0RSxDQUNGOztZQUVLLGlCQUFpQixHQUFHLEtBQUssaUNBQzdCLFdBQVcsR0FDUixJQUFJLENBQUMsd0JBQXdCLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxHQUNwRCxJQUFJLENBQ0osWUFBWSxDQUFDLENBQUMsQ0FBQyxFQUNmLGNBQWMsQ0FBQyxVQUFVLENBQUMsRUFDMUIsR0FBRzs7OztRQUFDLFVBQUMsRUFBYTtnQkFBYiwwQkFBYSxFQUFWLGlCQUFTO1lBQ2YsSUFBSSxDQUFDLFNBQVMsRUFBRTtnQkFDZCxLQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FDakIsSUFBSSxjQUFjLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsQ0FDbkQsQ0FBQzthQUNIO1FBQ0gsQ0FBQyxFQUFDLENBQ0g7O1lBRUssWUFBWSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUNsQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMseUJBQXlCLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQ3ZFO1FBRUQsT0FBTyxLQUFLOzs7UUFBQyxjQUFNLE9BQUEsaUJBQWlCLENBQUMsU0FBUyxFQUFFLEVBQTdCLENBQTZCOzs7UUFBRSxjQUFNLE9BQUEsWUFBWSxFQUFaLENBQVksRUFBQyxDQUFDLElBQUksQ0FDeEUsV0FBVyxDQUFDLEVBQUUsVUFBVSxFQUFFLENBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FDL0MsQ0FBQztJQUNKLENBQUM7SUFFRDs7Ozs7T0FLRzs7Ozs7Ozs7O0lBQ08sd0RBQXdCOzs7Ozs7OztJQUFsQyxVQUNFLFdBQW1CLEVBQ25CLEtBQWE7O1lBRVAsUUFBUSxHQUFHLEVBQUU7OztZQUdiLE1BQU0sR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDO1FBQzdELElBQUksTUFBTSxJQUFJLGlCQUFpQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRTs7O2dCQUUxQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ3BDLE1BQU07Ozs7WUFDSixVQUNFLE1BRWtDO2dCQUVsQyxPQUFBLENBQUMsTUFBTSxDQUFDLElBQUksS0FBSyxjQUFjLENBQUMsb0JBQW9CO29CQUNsRCxNQUFNLENBQUMsSUFBSSxLQUFLLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQztvQkFDbkQsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLEtBQUssV0FBVztvQkFDcEMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLEtBQUssS0FBSztZQUgzQixDQUcyQixFQUM5QixDQUNGOztnQkFFSyxVQUFVLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ25DLE1BQU0sQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLEVBQ25DLE1BQU07Ozs7WUFDSixVQUFDLE1BQWtDO2dCQUNqQyxPQUFBLE1BQU0sQ0FBQyxPQUFPLEtBQUssV0FBVyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxLQUFLLEtBQUs7WUFBN0QsQ0FBNkQsRUFDaEUsQ0FDRjtZQUVELFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsRUFBRSxXQUFXLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQztTQUN2RTtRQUVELE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7SUFFRDs7Ozs7Ozs7O09BU0c7Ozs7Ozs7Ozs7Ozs7O0lBQ0ssZ0RBQWdCOzs7Ozs7Ozs7Ozs7O0lBQXhCLFVBQ0UsVUFBMkIsRUFDM0IsV0FBNEIsRUFDNUIsTUFBYyxFQUNkLFNBQXlCOztZQUVyQixTQUFTLEdBQUcsQ0FBQzs7WUFFWCxHQUFHOzs7UUFBRyxjQUFNLE9BQUEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQTFDLENBQTBDLENBQUE7O1lBRXRELFVBQVUsR0FBRyxXQUFXLENBQUMsSUFBSSxDQUFDLEdBQUc7OztRQUFDLGNBQU0sT0FBQSxDQUFDLFNBQVMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxFQUFuQixDQUFtQixFQUFDLENBQUM7O1lBRTdELGFBQWEsR0FBd0IsS0FBSzs7O1FBQUM7O2dCQUN6QyxHQUFHLEdBQUcsR0FBRyxFQUFFLEdBQUcsU0FBUzs7Z0JBRXZCLGlCQUFpQixHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQ3ZDLEtBQUssQ0FBQyxNQUFNLEVBQUUsU0FBUyxDQUFDLEVBQ3hCLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFDWCxVQUFVLENBQUMsVUFBVSxDQUFDLENBQ3ZCO1lBRUQsSUFBSSxHQUFHLEdBQUcsTUFBTSxFQUFFO2dCQUNoQix5Q0FBeUM7Z0JBQ3pDLE9BQU8sS0FBSyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO2FBQzNDO2lCQUFNLElBQUksR0FBRyxLQUFLLENBQUMsRUFBRTtnQkFDcEIsb0VBQW9FO2dCQUNwRSwwQ0FBMEM7Z0JBQzFDLE9BQU8saUJBQWlCLENBQUM7YUFDMUI7aUJBQU07Z0JBQ0wsa0RBQWtEO2dCQUNsRCxPQUFPLEtBQUssQ0FDVixFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsR0FBRyxFQUFFLFNBQVMsQ0FBQyxDQUFDLEVBQzdDLGlCQUFpQixDQUNsQixDQUFDO2FBQ0g7UUFDSCxDQUFDLEVBQUM7UUFFRixPQUFPLGFBQWEsQ0FBQztJQUN2QixDQUFDOztnQkFsTUYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkFoQ2dCLEtBQUs7Z0JBd0JiLG9CQUFvQjtnQkF6QnBCLE9BQU87Z0RBMkNYLE1BQU0sU0FBQyxXQUFXOzs7Z0NBN0N2QjtDQW9PQyxBQW5NRCxJQW1NQztTQWhNWSxxQkFBcUI7Ozs7OztJQUNoQyx5Q0FFTzs7Ozs7SUFHTCxzQ0FBd0M7Ozs7O0lBQ3hDLDhDQUE2Qzs7Ozs7SUFDN0MseUNBQTJCOzs7OztJQUMzQiwyQ0FBOEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpc1BsYXRmb3JtQnJvd3NlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIFBMQVRGT1JNX0lEIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3Rpb25zLCBvZlR5cGUgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcbmltcG9ydCB7IHNlbGVjdCwgU3RvcmUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQge1xuICBjb21iaW5lTGF0ZXN0LFxuICBkZWZlcixcbiAgbWVyZ2UsXG4gIE9ic2VydmFibGUsXG4gIG9mLFxuICBTY2hlZHVsZXJMaWtlLFxuICB1c2luZyxcbn0gZnJvbSAncnhqcyc7XG5pbXBvcnQge1xuICBhdWRpdFRpbWUsXG4gIGRlYm91bmNlVGltZSxcbiAgZGVsYXksXG4gIGRpc3RpbmN0VW50aWxDaGFuZ2VkLFxuICBmaWx0ZXIsXG4gIG1hcCxcbiAgbWFwVG8sXG4gIHNoYXJlUmVwbGF5LFxuICB0YXAsXG4gIHdpdGhMYXRlc3RGcm9tLFxufSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBkZWVwTWVyZ2UgfSBmcm9tICcuLi8uLi9jb25maWcvdXRpbHMvZGVlcC1tZXJnZSc7XG5pbXBvcnQgeyBQcm9kdWN0IH0gZnJvbSAnLi4vLi4vbW9kZWwvcHJvZHVjdC5tb2RlbCc7XG5pbXBvcnQgeyBMb2FkaW5nU2NvcGVzU2VydmljZSB9IGZyb20gJy4uLy4uL29jYy9zZXJ2aWNlcy9sb2FkaW5nLXNjb3Blcy5zZXJ2aWNlJztcbmltcG9ydCB7IHdpdGhkcmF3T24gfSBmcm9tICcuLi8uLi91dGlsL3dpdGhkcmF3LW9uJztcbmltcG9ydCB7IFByb2R1Y3RBY3Rpb25zIH0gZnJvbSAnLi4vc3RvcmUvYWN0aW9ucy9pbmRleCc7XG5pbXBvcnQgeyBTdGF0ZVdpdGhQcm9kdWN0IH0gZnJvbSAnLi4vc3RvcmUvcHJvZHVjdC1zdGF0ZSc7XG5pbXBvcnQgeyBQcm9kdWN0U2VsZWN0b3JzIH0gZnJvbSAnLi4vc3RvcmUvc2VsZWN0b3JzL2luZGV4JztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIFByb2R1Y3RMb2FkaW5nU2VydmljZSB7XG4gIHByb3RlY3RlZCBwcm9kdWN0czoge1xuICAgIFtjb2RlOiBzdHJpbmddOiB7IFtzY29wZTogc3RyaW5nXTogT2JzZXJ2YWJsZTxQcm9kdWN0PiB9O1xuICB9ID0ge307XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIHN0b3JlOiBTdG9yZTxTdGF0ZVdpdGhQcm9kdWN0PixcbiAgICBwcm90ZWN0ZWQgbG9hZGluZ1Njb3BlczogTG9hZGluZ1Njb3Blc1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGFjdGlvbnMkOiBBY3Rpb25zLFxuICAgIEBJbmplY3QoUExBVEZPUk1fSUQpIHByb3RlY3RlZCBwbGF0Zm9ybUlkOiBhbnlcbiAgKSB7fVxuXG4gIGdldChwcm9kdWN0Q29kZTogc3RyaW5nLCBzY29wZXM6IHN0cmluZ1tdKTogT2JzZXJ2YWJsZTxQcm9kdWN0PiB7XG4gICAgc2NvcGVzID0gdGhpcy5sb2FkaW5nU2NvcGVzLmV4cGFuZCgncHJvZHVjdCcsIHNjb3Blcyk7XG5cbiAgICB0aGlzLmluaXRQcm9kdWN0U2NvcGVzKHByb2R1Y3RDb2RlLCBzY29wZXMpO1xuXG4gICAgaWYgKHNjb3Blcy5sZW5ndGggPiAxKSB7XG4gICAgICByZXR1cm4gY29tYmluZUxhdGVzdChcbiAgICAgICAgc2NvcGVzLm1hcChzY29wZSA9PiB0aGlzLnByb2R1Y3RzW3Byb2R1Y3RDb2RlXVtzY29wZV0pXG4gICAgICApLnBpcGUoXG4gICAgICAgIGF1ZGl0VGltZSgwKSxcbiAgICAgICAgbWFwKFxuICAgICAgICAgIHByb2R1Y3RQYXJ0cyA9PlxuICAgICAgICAgICAgcHJvZHVjdFBhcnRzLmZpbmQoQm9vbGVhbikgJiYgZGVlcE1lcmdlKHt9LCAuLi5wcm9kdWN0UGFydHMpXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLnByb2R1Y3RzW3Byb2R1Y3RDb2RlXVtzY29wZXNbMF1dO1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCBpbml0UHJvZHVjdFNjb3Blcyhwcm9kdWN0Q29kZTogc3RyaW5nLCBzY29wZXM6IHN0cmluZ1tdKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLnByb2R1Y3RzW3Byb2R1Y3RDb2RlXSkge1xuICAgICAgdGhpcy5wcm9kdWN0c1twcm9kdWN0Q29kZV0gPSB7fTtcbiAgICB9XG5cbiAgICBmb3IgKGNvbnN0IHNjb3BlIG9mIHNjb3Blcykge1xuICAgICAgaWYgKCF0aGlzLnByb2R1Y3RzW3Byb2R1Y3RDb2RlXVtzY29wZV0pIHtcbiAgICAgICAgdGhpcy5wcm9kdWN0c1twcm9kdWN0Q29kZV1bc2NvcGVdID0gdGhpcy5nZXRQcm9kdWN0Rm9yU2NvcGUoXG4gICAgICAgICAgcHJvZHVjdENvZGUsXG4gICAgICAgICAgc2NvcGVcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBvYnNlcnZhYmxlIGZvciBwcm92aWRpbmcgc3BlY2lmaWVkIHByb2R1Y3QgZGF0YSBmb3IgdGhlIHNjb3BlXG4gICAqXG4gICAqIEBwYXJhbSBwcm9kdWN0Q29kZVxuICAgKiBAcGFyYW0gc2NvcGVcbiAgICovXG4gIHByb3RlY3RlZCBnZXRQcm9kdWN0Rm9yU2NvcGUoXG4gICAgcHJvZHVjdENvZGU6IHN0cmluZyxcbiAgICBzY29wZTogc3RyaW5nXG4gICk6IE9ic2VydmFibGU8UHJvZHVjdD4ge1xuICAgIGNvbnN0IHNob3VsZExvYWQkID0gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KFxuICAgICAgICBQcm9kdWN0U2VsZWN0b3JzLmdldFNlbGVjdGVkUHJvZHVjdFN0YXRlRmFjdG9yeShwcm9kdWN0Q29kZSwgc2NvcGUpXG4gICAgICApLFxuICAgICAgbWFwKFxuICAgICAgICBwcm9kdWN0U3RhdGUgPT5cbiAgICAgICAgICAhcHJvZHVjdFN0YXRlLmxvYWRpbmcgJiYgIXByb2R1Y3RTdGF0ZS5zdWNjZXNzICYmICFwcm9kdWN0U3RhdGUuZXJyb3JcbiAgICAgICksXG4gICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpLFxuICAgICAgZmlsdGVyKHggPT4geClcbiAgICApO1xuXG4gICAgY29uc3QgaXNMb2FkaW5nJCA9IHRoaXMuc3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChcbiAgICAgICAgUHJvZHVjdFNlbGVjdG9ycy5nZXRTZWxlY3RlZFByb2R1Y3RMb2FkaW5nRmFjdG9yeShwcm9kdWN0Q29kZSwgc2NvcGUpXG4gICAgICApXG4gICAgKTtcblxuICAgIGNvbnN0IHByb2R1Y3RMb2FkTG9naWMkID0gbWVyZ2UoXG4gICAgICBzaG91bGRMb2FkJCxcbiAgICAgIC4uLnRoaXMuZ2V0UHJvZHVjdFJlbG9hZFRyaWdnZXJzKHByb2R1Y3RDb2RlLCBzY29wZSlcbiAgICApLnBpcGUoXG4gICAgICBkZWJvdW5jZVRpbWUoMCksXG4gICAgICB3aXRoTGF0ZXN0RnJvbShpc0xvYWRpbmckKSxcbiAgICAgIHRhcCgoWywgaXNMb2FkaW5nXSkgPT4ge1xuICAgICAgICBpZiAoIWlzTG9hZGluZykge1xuICAgICAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXG4gICAgICAgICAgICBuZXcgUHJvZHVjdEFjdGlvbnMuTG9hZFByb2R1Y3QocHJvZHVjdENvZGUsIHNjb3BlKVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgKTtcblxuICAgIGNvbnN0IHByb2R1Y3REYXRhJCA9IHRoaXMuc3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChQcm9kdWN0U2VsZWN0b3JzLmdldFNlbGVjdGVkUHJvZHVjdEZhY3RvcnkocHJvZHVjdENvZGUsIHNjb3BlKSlcbiAgICApO1xuXG4gICAgcmV0dXJuIHVzaW5nKCgpID0+IHByb2R1Y3RMb2FkTG9naWMkLnN1YnNjcmliZSgpLCAoKSA9PiBwcm9kdWN0RGF0YSQpLnBpcGUoXG4gICAgICBzaGFyZVJlcGxheSh7IGJ1ZmZlclNpemU6IDEsIHJlZkNvdW50OiB0cnVlIH0pXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHJlbG9hZCB0cmlnZ2VycyBmb3IgcHJvZHVjdCBwZXIgc2NvcGVcbiAgICpcbiAgICogQHBhcmFtIHByb2R1Y3RDb2RlXG4gICAqIEBwYXJhbSBzY29wZVxuICAgKi9cbiAgcHJvdGVjdGVkIGdldFByb2R1Y3RSZWxvYWRUcmlnZ2VycyhcbiAgICBwcm9kdWN0Q29kZTogc3RyaW5nLFxuICAgIHNjb3BlOiBzdHJpbmdcbiAgKTogT2JzZXJ2YWJsZTxib29sZWFuPltdIHtcbiAgICBjb25zdCB0cmlnZ2VycyA9IFtdO1xuXG4gICAgLy8gbWF4IGFnZSB0cmlnZ2VyIGFkZFxuICAgIGNvbnN0IG1heEFnZSA9IHRoaXMubG9hZGluZ1Njb3Blcy5nZXRNYXhBZ2UoJ3Byb2R1Y3QnLCBzY29wZSk7XG4gICAgaWYgKG1heEFnZSAmJiBpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpKSB7XG4gICAgICAvLyB3ZSB3YW50IHRvIGdyYWIgbG9hZCBwcm9kdWN0IHN1Y2Nlc3MgYW5kIGxvYWQgcHJvZHVjdCBmYWlsIGZvciB0aGlzIHByb2R1Y3QgYW5kIHNjb3BlXG4gICAgICBjb25zdCBsb2FkRmluaXNoJCA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICAgICAgZmlsdGVyKFxuICAgICAgICAgIChcbiAgICAgICAgICAgIGFjdGlvbjpcbiAgICAgICAgICAgICAgfCBQcm9kdWN0QWN0aW9ucy5Mb2FkUHJvZHVjdFN1Y2Nlc3NcbiAgICAgICAgICAgICAgfCBQcm9kdWN0QWN0aW9ucy5Mb2FkUHJvZHVjdEZhaWxcbiAgICAgICAgICApID0+XG4gICAgICAgICAgICAoYWN0aW9uLnR5cGUgPT09IFByb2R1Y3RBY3Rpb25zLkxPQURfUFJPRFVDVF9TVUNDRVNTIHx8XG4gICAgICAgICAgICAgIGFjdGlvbi50eXBlID09PSBQcm9kdWN0QWN0aW9ucy5MT0FEX1BST0RVQ1RfRkFJTCkgJiZcbiAgICAgICAgICAgIGFjdGlvbi5tZXRhLmVudGl0eUlkID09PSBwcm9kdWN0Q29kZSAmJlxuICAgICAgICAgICAgYWN0aW9uLm1ldGEuc2NvcGUgPT09IHNjb3BlXG4gICAgICAgIClcbiAgICAgICk7XG5cbiAgICAgIGNvbnN0IGxvYWRTdGFydCQgPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgICAgIG9mVHlwZShQcm9kdWN0QWN0aW9ucy5MT0FEX1BST0RVQ1QpLFxuICAgICAgICBmaWx0ZXIoXG4gICAgICAgICAgKGFjdGlvbjogUHJvZHVjdEFjdGlvbnMuTG9hZFByb2R1Y3QpID0+XG4gICAgICAgICAgICBhY3Rpb24ucGF5bG9hZCA9PT0gcHJvZHVjdENvZGUgJiYgYWN0aW9uLm1ldGEuc2NvcGUgPT09IHNjb3BlXG4gICAgICAgIClcbiAgICAgICk7XG5cbiAgICAgIHRyaWdnZXJzLnB1c2godGhpcy5nZXRNYXhBZ2VUcmlnZ2VyKGxvYWRTdGFydCQsIGxvYWRGaW5pc2gkLCBtYXhBZ2UpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJpZ2dlcnM7XG4gIH1cblxuICAvKipcbiAgICogR2VuZXJpYyBtZXRob2QgdGhhdCByZXR1cm5zIHN0cmVhbSB0cmlnZ2VyaW5nIHJlbG9hZCBieSBtYXhBZ2VcbiAgICpcbiAgICogQ291bGQgYmUgcmVmYWN0b3JlZCB0byBzZXBhcmF0ZSBzZXJ2aWNlIGluIGZ1dHVyZSB0byB1c2UgaW4gb3RoZXJcbiAgICogbWF4IGFnZSByZWxvYWQgaW1wbGVtZW50YXRpb25zXG4gICAqXG4gICAqIEBwYXJhbSBsb2FkU3RhcnQkIFN0cmVhbSB0aGF0IGVtaXRzIG9uIGxvYWQgc3RhcnRcbiAgICogQHBhcmFtIGxvYWRGaW5pc2gkIFN0cmVhbSB0aGF0IGVtaXRzIG9uIGxvYWQgZmluaXNoXG4gICAqIEBwYXJhbSBtYXhBZ2UgbWF4IGFnZVxuICAgKi9cbiAgcHJpdmF0ZSBnZXRNYXhBZ2VUcmlnZ2VyKFxuICAgIGxvYWRTdGFydCQ6IE9ic2VydmFibGU8YW55PixcbiAgICBsb2FkRmluaXNoJDogT2JzZXJ2YWJsZTxhbnk+LFxuICAgIG1heEFnZTogbnVtYmVyLFxuICAgIHNjaGVkdWxlcj86IFNjaGVkdWxlckxpa2VcbiAgKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgbGV0IHRpbWVzdGFtcCA9IDA7XG5cbiAgICBjb25zdCBub3cgPSAoKSA9PiAoc2NoZWR1bGVyID8gc2NoZWR1bGVyLm5vdygpIDogRGF0ZS5ub3coKSk7XG5cbiAgICBjb25zdCB0aW1lc3RhbXAkID0gbG9hZEZpbmlzaCQucGlwZSh0YXAoKCkgPT4gKHRpbWVzdGFtcCA9IG5vdygpKSkpO1xuXG4gICAgY29uc3Qgc2hvdWxkUmVsb2FkJDogT2JzZXJ2YWJsZTxib29sZWFuPiA9IGRlZmVyKCgpID0+IHtcbiAgICAgIGNvbnN0IGFnZSA9IG5vdygpIC0gdGltZXN0YW1wO1xuXG4gICAgICBjb25zdCB0aW1lc3RhbXBSZWZyZXNoJCA9IHRpbWVzdGFtcCQucGlwZShcbiAgICAgICAgZGVsYXkobWF4QWdlLCBzY2hlZHVsZXIpLFxuICAgICAgICBtYXBUbyh0cnVlKSxcbiAgICAgICAgd2l0aGRyYXdPbihsb2FkU3RhcnQkKVxuICAgICAgKTtcblxuICAgICAgaWYgKGFnZSA+IG1heEFnZSkge1xuICAgICAgICAvLyB3ZSBzaG91bGQgZW1pdCBmaXJzdCB2YWx1ZSBpbW1lZGlhdGVseVxuICAgICAgICByZXR1cm4gbWVyZ2Uob2YodHJ1ZSksIHRpbWVzdGFtcFJlZnJlc2gkKTtcbiAgICAgIH0gZWxzZSBpZiAoYWdlID09PSAwKSB7XG4gICAgICAgIC8vIGVkZ2UgY2FzZSwgd2Ugc2hvdWxkIGVtaXQgbWF4IGFnZSB0aW1lb3V0IGFmdGVyIG5leHQgbG9hZCBzdWNjZXNzXG4gICAgICAgIC8vIGNvdWxkIGhhcHBlbiB3aXRoIGFydGlmaWNpYWwgc2NoZWR1bGVyc1xuICAgICAgICByZXR1cm4gdGltZXN0YW1wUmVmcmVzaCQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyB3ZSBzaG91bGQgZW1pdCBmaXJzdCB2YWx1ZSB3aGVuIGFnZSB3aWxsIGV4cGlyZVxuICAgICAgICByZXR1cm4gbWVyZ2UoXG4gICAgICAgICAgb2YodHJ1ZSkucGlwZShkZWxheShtYXhBZ2UgLSBhZ2UsIHNjaGVkdWxlcikpLFxuICAgICAgICAgIHRpbWVzdGFtcFJlZnJlc2gkXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gc2hvdWxkUmVsb2FkJDtcbiAgfVxufVxuIl19