/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1sb2FkaW5nLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvcHJvZHVjdC9zZXJ2aWNlcy9wcm9kdWN0LWxvYWRpbmcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoRSxPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUM1QyxPQUFPLEVBQ0wsYUFBYSxFQUNiLEtBQUssRUFDTCxLQUFLLEVBRUwsRUFBRSxFQUVGLEtBQUssR0FDTixNQUFNLE1BQU0sQ0FBQztBQUNkLE9BQU8sRUFDTCxTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFDTCxvQkFBb0IsRUFDcEIsTUFBTSxFQUNOLEdBQUcsRUFDSCxLQUFLLEVBQ0wsV0FBVyxFQUNYLEdBQUcsRUFDSCxjQUFjLEdBQ2YsTUFBTSxnQkFBZ0IsQ0FBQztBQUV4QixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFeEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDNUQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDakYsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQzFELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7Ozs7QUFFcEQ7SUFRRSwrQkFDWSxLQUE4QixFQUM5QixhQUFtQyxFQUNuQyxRQUFpQixFQUNJLFVBQWU7UUFIcEMsVUFBSyxHQUFMLEtBQUss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QUcsU0FBUzs7Z0JBRXZCLGlCQUFpQixHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQ3ZDLEtBQUssQ0FBQyxNQUFNLEVBQUUsU0FBUyxDQUFDLEVBQ3hCLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFDWCxVQUFVLENBQUMsVUFBVSxDQUFDLENBQ3ZCO1lBRUQsSUFBSSxHQUFHLEdBQUcsTUFBTSxFQUFFO2dCQUNoQix5Q0FBeUM7Z0JBQ3pDLE9BQU8sS0FBSyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO2FBQzNDO2lCQUFNLElBQUksR0FBRyxLQUFLLENBQUMsRUFBRTtnQkFDcEIsb0VBQW9FO2dCQUNwRSwwQ0FBMEM7Z0JBQzFDLE9BQU8saUJBQWlCLENBQUM7YUFDMUI7aUJBQU07Z0JBQ0wsa0RBQWtEO2dCQUNsRCxPQUFPLEtBQUssQ0FDVixFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsR0FBRyxFQUFFLFNBQVMsQ0FBQyxDQUFDLEVBQzdDLGlCQUFpQixDQUNsQixDQUFDO2FBQ0g7UUFDSCxDQUFDLEVBQUM7UUFFRixPQUFPLGFBQWEsQ0FBQztJQUN2QixDQUFDOztnQkFsTUYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkFsQ2dCLEtBQUs7Z0JBMEJiLG9CQUFvQjtnQkFHcEIsT0FBTztnREFlWCxNQUFNLFNBQUMsV0FBVzs7O2dDQTdDdkI7Q0FvT0MsQUFuTUQsSUFtTUM7U0FoTVkscUJBQXFCOzs7Ozs7SUFDaEMseUNBRU87Ozs7O0lBR0wsc0NBQXdDOzs7OztJQUN4Qyw4Q0FBNkM7Ozs7O0lBQzdDLHlDQUEyQjs7Ozs7SUFDM0IsMkNBQThDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBQTEFURk9STV9JRCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgc2VsZWN0LCBTdG9yZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7XG4gIGNvbWJpbmVMYXRlc3QsXG4gIGRlZmVyLFxuICBtZXJnZSxcbiAgT2JzZXJ2YWJsZSxcbiAgb2YsXG4gIFNjaGVkdWxlckxpa2UsXG4gIHVzaW5nLFxufSBmcm9tICdyeGpzJztcbmltcG9ydCB7XG4gIGF1ZGl0VGltZSxcbiAgZGVib3VuY2VUaW1lLFxuICBkZWxheSxcbiAgZGlzdGluY3RVbnRpbENoYW5nZWQsXG4gIGZpbHRlcixcbiAgbWFwLFxuICBtYXBUbyxcbiAgc2hhcmVSZXBsYXksXG4gIHRhcCxcbiAgd2l0aExhdGVzdEZyb20sXG59IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFByb2R1Y3QgfSBmcm9tICcuLi8uLi9tb2RlbC9wcm9kdWN0Lm1vZGVsJztcbmltcG9ydCB7IFByb2R1Y3RBY3Rpb25zIH0gZnJvbSAnLi4vc3RvcmUvYWN0aW9ucy9pbmRleCc7XG5pbXBvcnQgeyBTdGF0ZVdpdGhQcm9kdWN0IH0gZnJvbSAnLi4vc3RvcmUvcHJvZHVjdC1zdGF0ZSc7XG5pbXBvcnQgeyBQcm9kdWN0U2VsZWN0b3JzIH0gZnJvbSAnLi4vc3RvcmUvc2VsZWN0b3JzL2luZGV4JztcbmltcG9ydCB7IExvYWRpbmdTY29wZXNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vb2NjL3NlcnZpY2VzL2xvYWRpbmctc2NvcGVzLnNlcnZpY2UnO1xuaW1wb3J0IHsgZGVlcE1lcmdlIH0gZnJvbSAnLi4vLi4vY29uZmlnL3V0aWxzL2RlZXAtbWVyZ2UnO1xuaW1wb3J0IHsgd2l0aGRyYXdPbiB9IGZyb20gJy4uLy4uL3V0aWwvd2l0aGRyYXctb24nO1xuaW1wb3J0IHsgQWN0aW9ucywgb2ZUeXBlIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5pbXBvcnQgeyBpc1BsYXRmb3JtQnJvd3NlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBQcm9kdWN0TG9hZGluZ1NlcnZpY2Uge1xuICBwcm90ZWN0ZWQgcHJvZHVjdHM6IHtcbiAgICBbY29kZTogc3RyaW5nXTogeyBbc2NvcGU6IHN0cmluZ106IE9ic2VydmFibGU8UHJvZHVjdD4gfTtcbiAgfSA9IHt9O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBzdG9yZTogU3RvcmU8U3RhdGVXaXRoUHJvZHVjdD4sXG4gICAgcHJvdGVjdGVkIGxvYWRpbmdTY29wZXM6IExvYWRpbmdTY29wZXNTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBhY3Rpb25zJDogQWN0aW9ucyxcbiAgICBASW5qZWN0KFBMQVRGT1JNX0lEKSBwcm90ZWN0ZWQgcGxhdGZvcm1JZDogYW55XG4gICkge31cblxuICBnZXQocHJvZHVjdENvZGU6IHN0cmluZywgc2NvcGVzOiBzdHJpbmdbXSk6IE9ic2VydmFibGU8UHJvZHVjdD4ge1xuICAgIHNjb3BlcyA9IHRoaXMubG9hZGluZ1Njb3Blcy5leHBhbmQoJ3Byb2R1Y3QnLCBzY29wZXMpO1xuXG4gICAgdGhpcy5pbml0UHJvZHVjdFNjb3Blcyhwcm9kdWN0Q29kZSwgc2NvcGVzKTtcblxuICAgIGlmIChzY29wZXMubGVuZ3RoID4gMSkge1xuICAgICAgcmV0dXJuIGNvbWJpbmVMYXRlc3QoXG4gICAgICAgIHNjb3Blcy5tYXAoc2NvcGUgPT4gdGhpcy5wcm9kdWN0c1twcm9kdWN0Q29kZV1bc2NvcGVdKVxuICAgICAgKS5waXBlKFxuICAgICAgICBhdWRpdFRpbWUoMCksXG4gICAgICAgIG1hcChcbiAgICAgICAgICBwcm9kdWN0UGFydHMgPT5cbiAgICAgICAgICAgIHByb2R1Y3RQYXJ0cy5maW5kKEJvb2xlYW4pICYmIGRlZXBNZXJnZSh7fSwgLi4ucHJvZHVjdFBhcnRzKVxuICAgICAgICApXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5wcm9kdWN0c1twcm9kdWN0Q29kZV1bc2NvcGVzWzBdXTtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgaW5pdFByb2R1Y3RTY29wZXMocHJvZHVjdENvZGU6IHN0cmluZywgc2NvcGVzOiBzdHJpbmdbXSk6IHZvaWQge1xuICAgIGlmICghdGhpcy5wcm9kdWN0c1twcm9kdWN0Q29kZV0pIHtcbiAgICAgIHRoaXMucHJvZHVjdHNbcHJvZHVjdENvZGVdID0ge307XG4gICAgfVxuXG4gICAgZm9yIChjb25zdCBzY29wZSBvZiBzY29wZXMpIHtcbiAgICAgIGlmICghdGhpcy5wcm9kdWN0c1twcm9kdWN0Q29kZV1bc2NvcGVdKSB7XG4gICAgICAgIHRoaXMucHJvZHVjdHNbcHJvZHVjdENvZGVdW3Njb3BlXSA9IHRoaXMuZ2V0UHJvZHVjdEZvclNjb3BlKFxuICAgICAgICAgIHByb2R1Y3RDb2RlLFxuICAgICAgICAgIHNjb3BlXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgb2JzZXJ2YWJsZSBmb3IgcHJvdmlkaW5nIHNwZWNpZmllZCBwcm9kdWN0IGRhdGEgZm9yIHRoZSBzY29wZVxuICAgKlxuICAgKiBAcGFyYW0gcHJvZHVjdENvZGVcbiAgICogQHBhcmFtIHNjb3BlXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0UHJvZHVjdEZvclNjb3BlKFxuICAgIHByb2R1Y3RDb2RlOiBzdHJpbmcsXG4gICAgc2NvcGU6IHN0cmluZ1xuICApOiBPYnNlcnZhYmxlPFByb2R1Y3Q+IHtcbiAgICBjb25zdCBzaG91bGRMb2FkJCA9IHRoaXMuc3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChcbiAgICAgICAgUHJvZHVjdFNlbGVjdG9ycy5nZXRTZWxlY3RlZFByb2R1Y3RTdGF0ZUZhY3RvcnkocHJvZHVjdENvZGUsIHNjb3BlKVxuICAgICAgKSxcbiAgICAgIG1hcChcbiAgICAgICAgcHJvZHVjdFN0YXRlID0+XG4gICAgICAgICAgIXByb2R1Y3RTdGF0ZS5sb2FkaW5nICYmICFwcm9kdWN0U3RhdGUuc3VjY2VzcyAmJiAhcHJvZHVjdFN0YXRlLmVycm9yXG4gICAgICApLFxuICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKSxcbiAgICAgIGZpbHRlcih4ID0+IHgpXG4gICAgKTtcblxuICAgIGNvbnN0IGlzTG9hZGluZyQgPSB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoXG4gICAgICAgIFByb2R1Y3RTZWxlY3RvcnMuZ2V0U2VsZWN0ZWRQcm9kdWN0TG9hZGluZ0ZhY3RvcnkocHJvZHVjdENvZGUsIHNjb3BlKVxuICAgICAgKVxuICAgICk7XG5cbiAgICBjb25zdCBwcm9kdWN0TG9hZExvZ2ljJCA9IG1lcmdlKFxuICAgICAgc2hvdWxkTG9hZCQsXG4gICAgICAuLi50aGlzLmdldFByb2R1Y3RSZWxvYWRUcmlnZ2Vycyhwcm9kdWN0Q29kZSwgc2NvcGUpXG4gICAgKS5waXBlKFxuICAgICAgZGVib3VuY2VUaW1lKDApLFxuICAgICAgd2l0aExhdGVzdEZyb20oaXNMb2FkaW5nJCksXG4gICAgICB0YXAoKFssIGlzTG9hZGluZ10pID0+IHtcbiAgICAgICAgaWYgKCFpc0xvYWRpbmcpIHtcbiAgICAgICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKFxuICAgICAgICAgICAgbmV3IFByb2R1Y3RBY3Rpb25zLkxvYWRQcm9kdWN0KHByb2R1Y3RDb2RlLCBzY29wZSlcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICk7XG5cbiAgICBjb25zdCBwcm9kdWN0RGF0YSQgPSB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoUHJvZHVjdFNlbGVjdG9ycy5nZXRTZWxlY3RlZFByb2R1Y3RGYWN0b3J5KHByb2R1Y3RDb2RlLCBzY29wZSkpXG4gICAgKTtcblxuICAgIHJldHVybiB1c2luZygoKSA9PiBwcm9kdWN0TG9hZExvZ2ljJC5zdWJzY3JpYmUoKSwgKCkgPT4gcHJvZHVjdERhdGEkKS5waXBlKFxuICAgICAgc2hhcmVSZXBsYXkoeyBidWZmZXJTaXplOiAxLCByZWZDb3VudDogdHJ1ZSB9KVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyByZWxvYWQgdHJpZ2dlcnMgZm9yIHByb2R1Y3QgcGVyIHNjb3BlXG4gICAqXG4gICAqIEBwYXJhbSBwcm9kdWN0Q29kZVxuICAgKiBAcGFyYW0gc2NvcGVcbiAgICovXG4gIHByb3RlY3RlZCBnZXRQcm9kdWN0UmVsb2FkVHJpZ2dlcnMoXG4gICAgcHJvZHVjdENvZGU6IHN0cmluZyxcbiAgICBzY29wZTogc3RyaW5nXG4gICk6IE9ic2VydmFibGU8Ym9vbGVhbj5bXSB7XG4gICAgY29uc3QgdHJpZ2dlcnMgPSBbXTtcblxuICAgIC8vIG1heCBhZ2UgdHJpZ2dlciBhZGRcbiAgICBjb25zdCBtYXhBZ2UgPSB0aGlzLmxvYWRpbmdTY29wZXMuZ2V0TWF4QWdlKCdwcm9kdWN0Jywgc2NvcGUpO1xuICAgIGlmIChtYXhBZ2UgJiYgaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xuICAgICAgLy8gd2Ugd2FudCB0byBncmFiIGxvYWQgcHJvZHVjdCBzdWNjZXNzIGFuZCBsb2FkIHByb2R1Y3QgZmFpbCBmb3IgdGhpcyBwcm9kdWN0IGFuZCBzY29wZVxuICAgICAgY29uc3QgbG9hZEZpbmlzaCQgPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgICAgIGZpbHRlcihcbiAgICAgICAgICAoXG4gICAgICAgICAgICBhY3Rpb246XG4gICAgICAgICAgICAgIHwgUHJvZHVjdEFjdGlvbnMuTG9hZFByb2R1Y3RTdWNjZXNzXG4gICAgICAgICAgICAgIHwgUHJvZHVjdEFjdGlvbnMuTG9hZFByb2R1Y3RGYWlsXG4gICAgICAgICAgKSA9PlxuICAgICAgICAgICAgKGFjdGlvbi50eXBlID09PSBQcm9kdWN0QWN0aW9ucy5MT0FEX1BST0RVQ1RfU1VDQ0VTUyB8fFxuICAgICAgICAgICAgICBhY3Rpb24udHlwZSA9PT0gUHJvZHVjdEFjdGlvbnMuTE9BRF9QUk9EVUNUX0ZBSUwpICYmXG4gICAgICAgICAgICBhY3Rpb24ubWV0YS5lbnRpdHlJZCA9PT0gcHJvZHVjdENvZGUgJiZcbiAgICAgICAgICAgIGFjdGlvbi5tZXRhLnNjb3BlID09PSBzY29wZVxuICAgICAgICApXG4gICAgICApO1xuXG4gICAgICBjb25zdCBsb2FkU3RhcnQkID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgICAgICBvZlR5cGUoUHJvZHVjdEFjdGlvbnMuTE9BRF9QUk9EVUNUKSxcbiAgICAgICAgZmlsdGVyKFxuICAgICAgICAgIChhY3Rpb246IFByb2R1Y3RBY3Rpb25zLkxvYWRQcm9kdWN0KSA9PlxuICAgICAgICAgICAgYWN0aW9uLnBheWxvYWQgPT09IHByb2R1Y3RDb2RlICYmIGFjdGlvbi5tZXRhLnNjb3BlID09PSBzY29wZVxuICAgICAgICApXG4gICAgICApO1xuXG4gICAgICB0cmlnZ2Vycy5wdXNoKHRoaXMuZ2V0TWF4QWdlVHJpZ2dlcihsb2FkU3RhcnQkLCBsb2FkRmluaXNoJCwgbWF4QWdlKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRyaWdnZXJzO1xuICB9XG5cbiAgLyoqXG4gICAqIEdlbmVyaWMgbWV0aG9kIHRoYXQgcmV0dXJucyBzdHJlYW0gdHJpZ2dlcmluZyByZWxvYWQgYnkgbWF4QWdlXG4gICAqXG4gICAqIENvdWxkIGJlIHJlZmFjdG9yZWQgdG8gc2VwYXJhdGUgc2VydmljZSBpbiBmdXR1cmUgdG8gdXNlIGluIG90aGVyXG4gICAqIG1heCBhZ2UgcmVsb2FkIGltcGxlbWVudGF0aW9uc1xuICAgKlxuICAgKiBAcGFyYW0gbG9hZFN0YXJ0JCBTdHJlYW0gdGhhdCBlbWl0cyBvbiBsb2FkIHN0YXJ0XG4gICAqIEBwYXJhbSBsb2FkRmluaXNoJCBTdHJlYW0gdGhhdCBlbWl0cyBvbiBsb2FkIGZpbmlzaFxuICAgKiBAcGFyYW0gbWF4QWdlIG1heCBhZ2VcbiAgICovXG4gIHByaXZhdGUgZ2V0TWF4QWdlVHJpZ2dlcihcbiAgICBsb2FkU3RhcnQkOiBPYnNlcnZhYmxlPGFueT4sXG4gICAgbG9hZEZpbmlzaCQ6IE9ic2VydmFibGU8YW55PixcbiAgICBtYXhBZ2U6IG51bWJlcixcbiAgICBzY2hlZHVsZXI/OiBTY2hlZHVsZXJMaWtlXG4gICk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIGxldCB0aW1lc3RhbXAgPSAwO1xuXG4gICAgY29uc3Qgbm93ID0gKCkgPT4gKHNjaGVkdWxlciA/IHNjaGVkdWxlci5ub3coKSA6IERhdGUubm93KCkpO1xuXG4gICAgY29uc3QgdGltZXN0YW1wJCA9IGxvYWRGaW5pc2gkLnBpcGUodGFwKCgpID0+ICh0aW1lc3RhbXAgPSBub3coKSkpKTtcblxuICAgIGNvbnN0IHNob3VsZFJlbG9hZCQ6IE9ic2VydmFibGU8Ym9vbGVhbj4gPSBkZWZlcigoKSA9PiB7XG4gICAgICBjb25zdCBhZ2UgPSBub3coKSAtIHRpbWVzdGFtcDtcblxuICAgICAgY29uc3QgdGltZXN0YW1wUmVmcmVzaCQgPSB0aW1lc3RhbXAkLnBpcGUoXG4gICAgICAgIGRlbGF5KG1heEFnZSwgc2NoZWR1bGVyKSxcbiAgICAgICAgbWFwVG8odHJ1ZSksXG4gICAgICAgIHdpdGhkcmF3T24obG9hZFN0YXJ0JClcbiAgICAgICk7XG5cbiAgICAgIGlmIChhZ2UgPiBtYXhBZ2UpIHtcbiAgICAgICAgLy8gd2Ugc2hvdWxkIGVtaXQgZmlyc3QgdmFsdWUgaW1tZWRpYXRlbHlcbiAgICAgICAgcmV0dXJuIG1lcmdlKG9mKHRydWUpLCB0aW1lc3RhbXBSZWZyZXNoJCk7XG4gICAgICB9IGVsc2UgaWYgKGFnZSA9PT0gMCkge1xuICAgICAgICAvLyBlZGdlIGNhc2UsIHdlIHNob3VsZCBlbWl0IG1heCBhZ2UgdGltZW91dCBhZnRlciBuZXh0IGxvYWQgc3VjY2Vzc1xuICAgICAgICAvLyBjb3VsZCBoYXBwZW4gd2l0aCBhcnRpZmljaWFsIHNjaGVkdWxlcnNcbiAgICAgICAgcmV0dXJuIHRpbWVzdGFtcFJlZnJlc2gkO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gd2Ugc2hvdWxkIGVtaXQgZmlyc3QgdmFsdWUgd2hlbiBhZ2Ugd2lsbCBleHBpcmVcbiAgICAgICAgcmV0dXJuIG1lcmdlKFxuICAgICAgICAgIG9mKHRydWUpLnBpcGUoZGVsYXkobWF4QWdlIC0gYWdlLCBzY2hlZHVsZXIpKSxcbiAgICAgICAgICB0aW1lc3RhbXBSZWZyZXNoJFxuICAgICAgICApO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHNob3VsZFJlbG9hZCQ7XG4gIH1cbn1cbiJdfQ==