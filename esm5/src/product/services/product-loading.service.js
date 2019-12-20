/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
            /** @type {?} */
            var loadSuccess$ = this.actions$.pipe(ofType(ProductActions.LOAD_PRODUCT_SUCCESS), filter((/**
             * @param {?} action
             * @return {?}
             */
            function (action) {
                return action.payload.code === productCode && action.meta.scope === scope;
            })));
            /** @type {?} */
            var loadStart$ = this.actions$.pipe(ofType(ProductActions.LOAD_PRODUCT), filter((/**
             * @param {?} action
             * @return {?}
             */
            function (action) {
                return action.payload === productCode && action.meta.scope === scope;
            })));
            triggers.push(this.getMaxAgeTrigger(loadStart$, loadSuccess$, maxAge));
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
     * @param loadSuccess$ Stream that emits on load success
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
     * @param {?} loadSuccess$ Stream that emits on load success
     * @param {?} maxAge max age
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
     * @param {?} loadSuccess$ Stream that emits on load success
     * @param {?} maxAge max age
     * @return {?}
     */
    function (loadStart$, loadSuccess$, maxAge) {
        /** @type {?} */
        var timestamp = 0;
        /** @type {?} */
        var timestamp$ = loadSuccess$.pipe(tap((/**
         * @return {?}
         */
        function () { return (timestamp = Date.now()); })));
        /** @type {?} */
        var shouldReload$ = defer((/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var age = Date.now() - timestamp;
            /** @type {?} */
            var timestampRefresh$ = timestamp$.pipe(delay(maxAge), mapTo(true), withdrawOn(loadStart$));
            if (age > maxAge) {
                return merge(of(true), timestampRefresh$);
            }
            else {
                return merge(of(true).pipe(delay(maxAge - age)), timestampRefresh$);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1sb2FkaW5nLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvcHJvZHVjdC9zZXJ2aWNlcy9wcm9kdWN0LWxvYWRpbmcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoRSxPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUM1QyxPQUFPLEVBQUUsYUFBYSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQWMsRUFBRSxFQUFFLEtBQUssRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMxRSxPQUFPLEVBQ0wsU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBQ0wsb0JBQW9CLEVBQ3BCLE1BQU0sRUFDTixHQUFHLEVBQ0gsS0FBSyxFQUNMLFdBQVcsRUFDWCxHQUFHLEVBQ0gsY0FBYyxHQUNmLE1BQU0sZ0JBQWdCLENBQUM7QUFFeEIsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRXhELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzVELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQ2pGLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUMxRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7Ozs7O0FBRXBEO0lBUUUsK0JBQ1ksS0FBOEIsRUFDOUIsYUFBbUMsRUFDbkMsUUFBaUIsRUFDSSxVQUFlO1FBSHBDLFVBQUssR0FBTCxLQUFLLENBQXlCO1FBQzlCLGtCQUFhLEdBQWIsYUFBYSxDQUFzQjtRQUNuQyxhQUFRLEdBQVIsUUFBUSxDQUFTO1FBQ0ksZUFBVSxHQUFWLFVBQVUsQ0FBSztRQVJ0QyxhQUFRLEdBRWQsRUFBRSxDQUFDO0lBT0osQ0FBQzs7Ozs7O0lBRUosbUNBQUc7Ozs7O0lBQUgsVUFBSSxXQUFtQixFQUFFLE1BQWdCO1FBQXpDLGlCQWtCQztRQWpCQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBRXRELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFFNUMsSUFBSSxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUNyQixPQUFPLGFBQWEsQ0FDbEIsTUFBTSxDQUFDLEdBQUc7Ozs7WUFBQyxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQWpDLENBQWlDLEVBQUMsQ0FDdkQsQ0FBQyxJQUFJLENBQ0osU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUNaLEdBQUc7Ozs7WUFDRCxVQUFBLFlBQVk7Z0JBQ1YsT0FBQSxZQUFZLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLFNBQVMsaUNBQUMsRUFBRSxHQUFLLFlBQVksRUFBQztZQUE1RCxDQUE0RCxFQUMvRCxDQUNGLENBQUM7U0FDSDthQUFNO1lBQ0wsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQzlDO0lBQ0gsQ0FBQzs7Ozs7OztJQUVTLGlEQUFpQjs7Ozs7O0lBQTNCLFVBQTRCLFdBQW1CLEVBQUUsTUFBZ0I7O1FBQy9ELElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxFQUFFO1lBQy9CLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLEdBQUcsRUFBRSxDQUFDO1NBQ2pDOztZQUVELEtBQW9CLElBQUEsV0FBQSxpQkFBQSxNQUFNLENBQUEsOEJBQUEsa0RBQUU7Z0JBQXZCLElBQU0sS0FBSyxtQkFBQTtnQkFDZCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRTtvQkFDdEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQ3pELFdBQVcsRUFDWCxLQUFLLENBQ04sQ0FBQztpQkFDSDthQUNGOzs7Ozs7Ozs7SUFDSCxDQUFDO0lBRUQ7Ozs7O09BS0c7Ozs7Ozs7OztJQUNPLGtEQUFrQjs7Ozs7Ozs7SUFBNUIsVUFDRSxXQUFtQixFQUNuQixLQUFhO1FBRmYsaUJBNENDOztZQXhDTyxXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQ2pDLE1BQU0sQ0FDSixnQkFBZ0IsQ0FBQyw4QkFBOEIsQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLENBQ3BFLEVBQ0QsR0FBRzs7OztRQUNELFVBQUEsWUFBWTtZQUNWLE9BQUEsQ0FBQyxZQUFZLENBQUMsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLO1FBQXJFLENBQXFFLEVBQ3hFLEVBQ0Qsb0JBQW9CLEVBQUUsRUFDdEIsTUFBTTs7OztRQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxFQUFELENBQUMsRUFBQyxDQUNmOztZQUVLLFVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FDaEMsTUFBTSxDQUNKLGdCQUFnQixDQUFDLGdDQUFnQyxDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsQ0FDdEUsQ0FDRjs7WUFFSyxpQkFBaUIsR0FBRyxLQUFLLGlDQUM3QixXQUFXLEdBQ1IsSUFBSSxDQUFDLHdCQUF3QixDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsR0FDcEQsSUFBSSxDQUNKLFlBQVksQ0FBQyxDQUFDLENBQUMsRUFDZixjQUFjLENBQUMsVUFBVSxDQUFDLEVBQzFCLEdBQUc7Ozs7UUFBQyxVQUFDLEVBQWE7Z0JBQWIsMEJBQWEsRUFBVixpQkFBUztZQUNmLElBQUksQ0FBQyxTQUFTLEVBQUU7Z0JBQ2QsS0FBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQ2pCLElBQUksY0FBYyxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLENBQ25ELENBQUM7YUFDSDtRQUNILENBQUMsRUFBQyxDQUNIOztZQUVLLFlBQVksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FDbEMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLHlCQUF5QixDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUN2RTtRQUVELE9BQU8sS0FBSzs7O1FBQUMsY0FBTSxPQUFBLGlCQUFpQixDQUFDLFNBQVMsRUFBRSxFQUE3QixDQUE2Qjs7O1FBQUUsY0FBTSxPQUFBLFlBQVksRUFBWixDQUFZLEVBQUMsQ0FBQyxJQUFJLENBQ3hFLFdBQVcsQ0FBQyxFQUFFLFVBQVUsRUFBRSxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDLENBQy9DLENBQUM7SUFDSixDQUFDO0lBRUQ7Ozs7O09BS0c7Ozs7Ozs7OztJQUNPLHdEQUF3Qjs7Ozs7Ozs7SUFBbEMsVUFDRSxXQUFtQixFQUNuQixLQUFhOztZQUVQLFFBQVEsR0FBRyxFQUFFOzs7WUFHYixNQUFNLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQztRQUM3RCxJQUFJLE1BQU0sSUFBSSxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUU7O2dCQUMxQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ3JDLE1BQU0sQ0FBQyxjQUFjLENBQUMsb0JBQW9CLENBQUMsRUFDM0MsTUFBTTs7OztZQUNKLFVBQUMsTUFBeUM7Z0JBQ3hDLE9BQUEsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEtBQUssV0FBVyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxLQUFLLEtBQUs7WUFBbEUsQ0FBa0UsRUFDckUsQ0FDRjs7Z0JBRUssVUFBVSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUNuQyxNQUFNLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxFQUNuQyxNQUFNOzs7O1lBQ0osVUFBQyxNQUFrQztnQkFDakMsT0FBQSxNQUFNLENBQUMsT0FBTyxLQUFLLFdBQVcsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssS0FBSyxLQUFLO1lBQTdELENBQTZELEVBQ2hFLENBQ0Y7WUFFRCxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLEVBQUUsWUFBWSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUM7U0FDeEU7UUFFRCxPQUFPLFFBQVEsQ0FBQztJQUNsQixDQUFDO0lBRUQ7Ozs7Ozs7OztPQVNHOzs7Ozs7Ozs7Ozs7O0lBQ0ssZ0RBQWdCOzs7Ozs7Ozs7Ozs7SUFBeEIsVUFDRSxVQUEyQixFQUMzQixZQUE2QixFQUM3QixNQUFjOztZQUVWLFNBQVMsR0FBRyxDQUFDOztZQUVYLFVBQVUsR0FBRyxZQUFZLENBQUMsSUFBSSxDQUFDLEdBQUc7OztRQUFDLGNBQU0sT0FBQSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBeEIsQ0FBd0IsRUFBQyxDQUFDOztZQUVuRSxhQUFhLEdBQXdCLEtBQUs7OztRQUFDOztnQkFDekMsR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxTQUFTOztnQkFFNUIsaUJBQWlCLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FDdkMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxFQUNiLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFDWCxVQUFVLENBQUMsVUFBVSxDQUFDLENBQ3ZCO1lBRUQsSUFBSSxHQUFHLEdBQUcsTUFBTSxFQUFFO2dCQUNoQixPQUFPLEtBQUssQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsaUJBQWlCLENBQUMsQ0FBQzthQUMzQztpQkFBTTtnQkFDTCxPQUFPLEtBQUssQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDLENBQUMsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO2FBQ3JFO1FBQ0gsQ0FBQyxFQUFDO1FBRUYsT0FBTyxhQUFhLENBQUM7SUFDdkIsQ0FBQzs7Z0JBL0tGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBMUJnQixLQUFLO2dCQWtCYixvQkFBb0I7Z0JBR3BCLE9BQU87Z0RBZVgsTUFBTSxTQUFDLFdBQVc7OztnQ0FyQ3ZCO0NBeU1DLEFBaExELElBZ0xDO1NBN0tZLHFCQUFxQjs7Ozs7O0lBQ2hDLHlDQUVPOzs7OztJQUdMLHNDQUF3Qzs7Ozs7SUFDeEMsOENBQTZDOzs7OztJQUM3Qyx5Q0FBMkI7Ozs7O0lBQzNCLDJDQUE4QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgUExBVEZPUk1fSUQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHNlbGVjdCwgU3RvcmUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBjb21iaW5lTGF0ZXN0LCBkZWZlciwgbWVyZ2UsIE9ic2VydmFibGUsIG9mLCB1c2luZyB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtcbiAgYXVkaXRUaW1lLFxuICBkZWJvdW5jZVRpbWUsXG4gIGRlbGF5LFxuICBkaXN0aW5jdFVudGlsQ2hhbmdlZCxcbiAgZmlsdGVyLFxuICBtYXAsXG4gIG1hcFRvLFxuICBzaGFyZVJlcGxheSxcbiAgdGFwLFxuICB3aXRoTGF0ZXN0RnJvbSxcbn0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgUHJvZHVjdCB9IGZyb20gJy4uLy4uL21vZGVsL3Byb2R1Y3QubW9kZWwnO1xuaW1wb3J0IHsgUHJvZHVjdEFjdGlvbnMgfSBmcm9tICcuLi9zdG9yZS9hY3Rpb25zL2luZGV4JztcbmltcG9ydCB7IFN0YXRlV2l0aFByb2R1Y3QgfSBmcm9tICcuLi9zdG9yZS9wcm9kdWN0LXN0YXRlJztcbmltcG9ydCB7IFByb2R1Y3RTZWxlY3RvcnMgfSBmcm9tICcuLi9zdG9yZS9zZWxlY3RvcnMvaW5kZXgnO1xuaW1wb3J0IHsgTG9hZGluZ1Njb3Blc1NlcnZpY2UgfSBmcm9tICcuLi8uLi9vY2Mvc2VydmljZXMvbG9hZGluZy1zY29wZXMuc2VydmljZSc7XG5pbXBvcnQgeyBkZWVwTWVyZ2UgfSBmcm9tICcuLi8uLi9jb25maWcvdXRpbHMvZGVlcC1tZXJnZSc7XG5pbXBvcnQgeyB3aXRoZHJhd09uIH0gZnJvbSAnLi4vLi4vdXRpbC93aXRoZHJhdy1vbic7XG5pbXBvcnQgeyBBY3Rpb25zLCBvZlR5cGUgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcbmltcG9ydCB7IGlzUGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIFByb2R1Y3RMb2FkaW5nU2VydmljZSB7XG4gIHByb3RlY3RlZCBwcm9kdWN0czoge1xuICAgIFtjb2RlOiBzdHJpbmddOiB7IFtzY29wZTogc3RyaW5nXTogT2JzZXJ2YWJsZTxQcm9kdWN0PiB9O1xuICB9ID0ge307XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIHN0b3JlOiBTdG9yZTxTdGF0ZVdpdGhQcm9kdWN0PixcbiAgICBwcm90ZWN0ZWQgbG9hZGluZ1Njb3BlczogTG9hZGluZ1Njb3Blc1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGFjdGlvbnMkOiBBY3Rpb25zLFxuICAgIEBJbmplY3QoUExBVEZPUk1fSUQpIHByb3RlY3RlZCBwbGF0Zm9ybUlkOiBhbnlcbiAgKSB7fVxuXG4gIGdldChwcm9kdWN0Q29kZTogc3RyaW5nLCBzY29wZXM6IHN0cmluZ1tdKTogT2JzZXJ2YWJsZTxQcm9kdWN0PiB7XG4gICAgc2NvcGVzID0gdGhpcy5sb2FkaW5nU2NvcGVzLmV4cGFuZCgncHJvZHVjdCcsIHNjb3Blcyk7XG5cbiAgICB0aGlzLmluaXRQcm9kdWN0U2NvcGVzKHByb2R1Y3RDb2RlLCBzY29wZXMpO1xuXG4gICAgaWYgKHNjb3Blcy5sZW5ndGggPiAxKSB7XG4gICAgICByZXR1cm4gY29tYmluZUxhdGVzdChcbiAgICAgICAgc2NvcGVzLm1hcChzY29wZSA9PiB0aGlzLnByb2R1Y3RzW3Byb2R1Y3RDb2RlXVtzY29wZV0pXG4gICAgICApLnBpcGUoXG4gICAgICAgIGF1ZGl0VGltZSgwKSxcbiAgICAgICAgbWFwKFxuICAgICAgICAgIHByb2R1Y3RQYXJ0cyA9PlxuICAgICAgICAgICAgcHJvZHVjdFBhcnRzLmZpbmQoQm9vbGVhbikgJiYgZGVlcE1lcmdlKHt9LCAuLi5wcm9kdWN0UGFydHMpXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLnByb2R1Y3RzW3Byb2R1Y3RDb2RlXVtzY29wZXNbMF1dO1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCBpbml0UHJvZHVjdFNjb3Blcyhwcm9kdWN0Q29kZTogc3RyaW5nLCBzY29wZXM6IHN0cmluZ1tdKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLnByb2R1Y3RzW3Byb2R1Y3RDb2RlXSkge1xuICAgICAgdGhpcy5wcm9kdWN0c1twcm9kdWN0Q29kZV0gPSB7fTtcbiAgICB9XG5cbiAgICBmb3IgKGNvbnN0IHNjb3BlIG9mIHNjb3Blcykge1xuICAgICAgaWYgKCF0aGlzLnByb2R1Y3RzW3Byb2R1Y3RDb2RlXVtzY29wZV0pIHtcbiAgICAgICAgdGhpcy5wcm9kdWN0c1twcm9kdWN0Q29kZV1bc2NvcGVdID0gdGhpcy5nZXRQcm9kdWN0Rm9yU2NvcGUoXG4gICAgICAgICAgcHJvZHVjdENvZGUsXG4gICAgICAgICAgc2NvcGVcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBvYnNlcnZhYmxlIGZvciBwcm92aWRpbmcgc3BlY2lmaWVkIHByb2R1Y3QgZGF0YSBmb3IgdGhlIHNjb3BlXG4gICAqXG4gICAqIEBwYXJhbSBwcm9kdWN0Q29kZVxuICAgKiBAcGFyYW0gc2NvcGVcbiAgICovXG4gIHByb3RlY3RlZCBnZXRQcm9kdWN0Rm9yU2NvcGUoXG4gICAgcHJvZHVjdENvZGU6IHN0cmluZyxcbiAgICBzY29wZTogc3RyaW5nXG4gICk6IE9ic2VydmFibGU8UHJvZHVjdD4ge1xuICAgIGNvbnN0IHNob3VsZExvYWQkID0gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KFxuICAgICAgICBQcm9kdWN0U2VsZWN0b3JzLmdldFNlbGVjdGVkUHJvZHVjdFN0YXRlRmFjdG9yeShwcm9kdWN0Q29kZSwgc2NvcGUpXG4gICAgICApLFxuICAgICAgbWFwKFxuICAgICAgICBwcm9kdWN0U3RhdGUgPT5cbiAgICAgICAgICAhcHJvZHVjdFN0YXRlLmxvYWRpbmcgJiYgIXByb2R1Y3RTdGF0ZS5zdWNjZXNzICYmICFwcm9kdWN0U3RhdGUuZXJyb3JcbiAgICAgICksXG4gICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpLFxuICAgICAgZmlsdGVyKHggPT4geClcbiAgICApO1xuXG4gICAgY29uc3QgaXNMb2FkaW5nJCA9IHRoaXMuc3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChcbiAgICAgICAgUHJvZHVjdFNlbGVjdG9ycy5nZXRTZWxlY3RlZFByb2R1Y3RMb2FkaW5nRmFjdG9yeShwcm9kdWN0Q29kZSwgc2NvcGUpXG4gICAgICApXG4gICAgKTtcblxuICAgIGNvbnN0IHByb2R1Y3RMb2FkTG9naWMkID0gbWVyZ2UoXG4gICAgICBzaG91bGRMb2FkJCxcbiAgICAgIC4uLnRoaXMuZ2V0UHJvZHVjdFJlbG9hZFRyaWdnZXJzKHByb2R1Y3RDb2RlLCBzY29wZSlcbiAgICApLnBpcGUoXG4gICAgICBkZWJvdW5jZVRpbWUoMCksXG4gICAgICB3aXRoTGF0ZXN0RnJvbShpc0xvYWRpbmckKSxcbiAgICAgIHRhcCgoWywgaXNMb2FkaW5nXSkgPT4ge1xuICAgICAgICBpZiAoIWlzTG9hZGluZykge1xuICAgICAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXG4gICAgICAgICAgICBuZXcgUHJvZHVjdEFjdGlvbnMuTG9hZFByb2R1Y3QocHJvZHVjdENvZGUsIHNjb3BlKVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgKTtcblxuICAgIGNvbnN0IHByb2R1Y3REYXRhJCA9IHRoaXMuc3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChQcm9kdWN0U2VsZWN0b3JzLmdldFNlbGVjdGVkUHJvZHVjdEZhY3RvcnkocHJvZHVjdENvZGUsIHNjb3BlKSlcbiAgICApO1xuXG4gICAgcmV0dXJuIHVzaW5nKCgpID0+IHByb2R1Y3RMb2FkTG9naWMkLnN1YnNjcmliZSgpLCAoKSA9PiBwcm9kdWN0RGF0YSQpLnBpcGUoXG4gICAgICBzaGFyZVJlcGxheSh7IGJ1ZmZlclNpemU6IDEsIHJlZkNvdW50OiB0cnVlIH0pXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHJlbG9hZCB0cmlnZ2VycyBmb3IgcHJvZHVjdCBwZXIgc2NvcGVcbiAgICpcbiAgICogQHBhcmFtIHByb2R1Y3RDb2RlXG4gICAqIEBwYXJhbSBzY29wZVxuICAgKi9cbiAgcHJvdGVjdGVkIGdldFByb2R1Y3RSZWxvYWRUcmlnZ2VycyhcbiAgICBwcm9kdWN0Q29kZTogc3RyaW5nLFxuICAgIHNjb3BlOiBzdHJpbmdcbiAgKTogT2JzZXJ2YWJsZTxib29sZWFuPltdIHtcbiAgICBjb25zdCB0cmlnZ2VycyA9IFtdO1xuXG4gICAgLy8gbWF4IGFnZSB0cmlnZ2VyIGFkZFxuICAgIGNvbnN0IG1heEFnZSA9IHRoaXMubG9hZGluZ1Njb3Blcy5nZXRNYXhBZ2UoJ3Byb2R1Y3QnLCBzY29wZSk7XG4gICAgaWYgKG1heEFnZSAmJiBpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpKSB7XG4gICAgICBjb25zdCBsb2FkU3VjY2VzcyQgPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgICAgIG9mVHlwZShQcm9kdWN0QWN0aW9ucy5MT0FEX1BST0RVQ1RfU1VDQ0VTUyksXG4gICAgICAgIGZpbHRlcihcbiAgICAgICAgICAoYWN0aW9uOiBQcm9kdWN0QWN0aW9ucy5Mb2FkUHJvZHVjdFN1Y2Nlc3MpID0+XG4gICAgICAgICAgICBhY3Rpb24ucGF5bG9hZC5jb2RlID09PSBwcm9kdWN0Q29kZSAmJiBhY3Rpb24ubWV0YS5zY29wZSA9PT0gc2NvcGVcbiAgICAgICAgKVxuICAgICAgKTtcblxuICAgICAgY29uc3QgbG9hZFN0YXJ0JCA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICAgICAgb2ZUeXBlKFByb2R1Y3RBY3Rpb25zLkxPQURfUFJPRFVDVCksXG4gICAgICAgIGZpbHRlcihcbiAgICAgICAgICAoYWN0aW9uOiBQcm9kdWN0QWN0aW9ucy5Mb2FkUHJvZHVjdCkgPT5cbiAgICAgICAgICAgIGFjdGlvbi5wYXlsb2FkID09PSBwcm9kdWN0Q29kZSAmJiBhY3Rpb24ubWV0YS5zY29wZSA9PT0gc2NvcGVcbiAgICAgICAgKVxuICAgICAgKTtcblxuICAgICAgdHJpZ2dlcnMucHVzaCh0aGlzLmdldE1heEFnZVRyaWdnZXIobG9hZFN0YXJ0JCwgbG9hZFN1Y2Nlc3MkLCBtYXhBZ2UpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJpZ2dlcnM7XG4gIH1cblxuICAvKipcbiAgICogR2VuZXJpYyBtZXRob2QgdGhhdCByZXR1cm5zIHN0cmVhbSB0cmlnZ2VyaW5nIHJlbG9hZCBieSBtYXhBZ2VcbiAgICpcbiAgICogQ291bGQgYmUgcmVmYWN0b3JlZCB0byBzZXBhcmF0ZSBzZXJ2aWNlIGluIGZ1dHVyZSB0byB1c2UgaW4gb3RoZXJcbiAgICogbWF4IGFnZSByZWxvYWQgaW1wbGVtZW50YXRpb25zXG4gICAqXG4gICAqIEBwYXJhbSBsb2FkU3RhcnQkIFN0cmVhbSB0aGF0IGVtaXRzIG9uIGxvYWQgc3RhcnRcbiAgICogQHBhcmFtIGxvYWRTdWNjZXNzJCBTdHJlYW0gdGhhdCBlbWl0cyBvbiBsb2FkIHN1Y2Nlc3NcbiAgICogQHBhcmFtIG1heEFnZSBtYXggYWdlXG4gICAqL1xuICBwcml2YXRlIGdldE1heEFnZVRyaWdnZXIoXG4gICAgbG9hZFN0YXJ0JDogT2JzZXJ2YWJsZTxhbnk+LFxuICAgIGxvYWRTdWNjZXNzJDogT2JzZXJ2YWJsZTxhbnk+LFxuICAgIG1heEFnZTogbnVtYmVyXG4gICk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIGxldCB0aW1lc3RhbXAgPSAwO1xuXG4gICAgY29uc3QgdGltZXN0YW1wJCA9IGxvYWRTdWNjZXNzJC5waXBlKHRhcCgoKSA9PiAodGltZXN0YW1wID0gRGF0ZS5ub3coKSkpKTtcblxuICAgIGNvbnN0IHNob3VsZFJlbG9hZCQ6IE9ic2VydmFibGU8Ym9vbGVhbj4gPSBkZWZlcigoKSA9PiB7XG4gICAgICBjb25zdCBhZ2UgPSBEYXRlLm5vdygpIC0gdGltZXN0YW1wO1xuXG4gICAgICBjb25zdCB0aW1lc3RhbXBSZWZyZXNoJCA9IHRpbWVzdGFtcCQucGlwZShcbiAgICAgICAgZGVsYXkobWF4QWdlKSxcbiAgICAgICAgbWFwVG8odHJ1ZSksXG4gICAgICAgIHdpdGhkcmF3T24obG9hZFN0YXJ0JClcbiAgICAgICk7XG5cbiAgICAgIGlmIChhZ2UgPiBtYXhBZ2UpIHtcbiAgICAgICAgcmV0dXJuIG1lcmdlKG9mKHRydWUpLCB0aW1lc3RhbXBSZWZyZXNoJCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbWVyZ2Uob2YodHJ1ZSkucGlwZShkZWxheShtYXhBZ2UgLSBhZ2UpKSwgdGltZXN0YW1wUmVmcmVzaCQpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHNob3VsZFJlbG9hZCQ7XG4gIH1cbn1cbiJdfQ==