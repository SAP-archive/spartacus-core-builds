import { __decorate, __param, __read, __spread, __values } from "tslib";
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
    ProductLoadingService.prototype.get = function (productCode, scopes) {
        scopes = this.loadingScopes.expand('product', scopes);
        this.initProductScopes(productCode, scopes);
        return this.products[productCode][this.getScopesIndex(scopes)];
    };
    ProductLoadingService.prototype.initProductScopes = function (productCode, scopes) {
        var e_1, _a;
        var _this = this;
        if (!this.products[productCode]) {
            this.products[productCode] = {};
        }
        try {
            for (var scopes_1 = __values(scopes), scopes_1_1 = scopes_1.next(); !scopes_1_1.done; scopes_1_1 = scopes_1.next()) {
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
        if (scopes.length > 1) {
            this.products[productCode][this.getScopesIndex(scopes)] = combineLatest(scopes.map(function (scope) { return _this.products[productCode][scope]; })).pipe(auditTime(0), map(function (productParts) {
                return productParts.every(Boolean)
                    ? deepMerge.apply(void 0, __spread([{}], productParts)) : undefined;
            }), distinctUntilChanged());
        }
    };
    ProductLoadingService.prototype.getScopesIndex = function (scopes) {
        return scopes.join('ɵ');
    };
    /**
     * Creates observable for providing specified product data for the scope
     *
     * @param productCode
     * @param scope
     */
    ProductLoadingService.prototype.getProductForScope = function (productCode, scope) {
        var _this = this;
        var shouldLoad$ = this.store.pipe(select(ProductSelectors.getSelectedProductStateFactory(productCode, scope)), map(function (productState) {
            return !productState.loading && !productState.success && !productState.error;
        }), distinctUntilChanged(), filter(function (x) { return x; }));
        var isLoading$ = this.store.pipe(select(ProductSelectors.getSelectedProductLoadingFactory(productCode, scope)));
        var productLoadLogic$ = merge.apply(void 0, __spread([shouldLoad$], this.getProductReloadTriggers(productCode, scope))).pipe(debounceTime(0), withLatestFrom(isLoading$), tap(function (_a) {
            var _b = __read(_a, 2), isLoading = _b[1];
            if (!isLoading) {
                _this.store.dispatch(new ProductActions.LoadProduct(productCode, scope));
            }
        }));
        var productData$ = this.store.pipe(select(ProductSelectors.getSelectedProductFactory(productCode, scope)));
        return using(function () { return productLoadLogic$.subscribe(); }, function () { return productData$; }).pipe(shareReplay({ bufferSize: 1, refCount: true }));
    };
    /**
     * Returns reload triggers for product per scope
     *
     * @param productCode
     * @param scope
     */
    ProductLoadingService.prototype.getProductReloadTriggers = function (productCode, scope) {
        var triggers = [];
        // max age trigger add
        var maxAge = this.loadingScopes.getMaxAge('product', scope);
        if (maxAge && isPlatformBrowser(this.platformId)) {
            // we want to grab load product success and load product fail for this product and scope
            var loadFinish$ = this.actions$.pipe(filter(function (action) {
                return (action.type === ProductActions.LOAD_PRODUCT_SUCCESS ||
                    action.type === ProductActions.LOAD_PRODUCT_FAIL) &&
                    action.meta.entityId === productCode &&
                    action.meta.scope === scope;
            }));
            var loadStart$ = this.actions$.pipe(ofType(ProductActions.LOAD_PRODUCT), filter(function (action) {
                return action.payload === productCode && action.meta.scope === scope;
            }));
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
    ProductLoadingService.prototype.getMaxAgeTrigger = function (loadStart$, loadFinish$, maxAge, scheduler) {
        var timestamp = 0;
        var now = function () { return (scheduler ? scheduler.now() : Date.now()); };
        var timestamp$ = loadFinish$.pipe(tap(function () { return (timestamp = now()); }));
        var shouldReload$ = defer(function () {
            var age = now() - timestamp;
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
        });
        return shouldReload$;
    };
    ProductLoadingService.ctorParameters = function () { return [
        { type: Store },
        { type: LoadingScopesService },
        { type: Actions },
        { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
    ]; };
    ProductLoadingService.ɵprov = i0.ɵɵdefineInjectable({ factory: function ProductLoadingService_Factory() { return new ProductLoadingService(i0.ɵɵinject(i1.Store), i0.ɵɵinject(i2.LoadingScopesService), i0.ɵɵinject(i3.Actions), i0.ɵɵinject(i0.PLATFORM_ID)); }, token: ProductLoadingService, providedIn: "root" });
    ProductLoadingService = __decorate([
        Injectable({
            providedIn: 'root',
        }),
        __param(3, Inject(PLATFORM_ID))
    ], ProductLoadingService);
    return ProductLoadingService;
}());
export { ProductLoadingService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1sb2FkaW5nLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvcHJvZHVjdC9zZXJ2aWNlcy9wcm9kdWN0LWxvYWRpbmcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDcEQsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2hFLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2hELE9BQU8sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzVDLE9BQU8sRUFDTCxhQUFhLEVBQ2IsS0FBSyxFQUNMLEtBQUssRUFFTCxFQUFFLEVBRUYsS0FBSyxHQUNOLE1BQU0sTUFBTSxDQUFDO0FBQ2QsT0FBTyxFQUNMLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUNMLG9CQUFvQixFQUNwQixNQUFNLEVBQ04sR0FBRyxFQUNILEtBQUssRUFDTCxXQUFXLEVBQ1gsR0FBRyxFQUNILGNBQWMsR0FDZixNQUFNLGdCQUFnQixDQUFDO0FBQ3hCLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUUxRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUNqRixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRXhELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDOzs7OztBQUs1RDtJQUtFLCtCQUNZLEtBQThCLEVBQzlCLGFBQW1DLEVBQ25DLFFBQWlCLEVBQ0ksVUFBZTtRQUhwQyxVQUFLLEdBQUwsS0FBSyxDQUF5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QUFNLENBQUMsV0FBVyxDQUFDLENBQUE7T0FUWCxxQkFBcUIsQ0FzTWpDO2dDQTFPRDtDQTBPQyxBQXRNRCxJQXNNQztTQXRNWSxxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpc1BsYXRmb3JtQnJvd3NlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIFBMQVRGT1JNX0lEIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3Rpb25zLCBvZlR5cGUgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcbmltcG9ydCB7IHNlbGVjdCwgU3RvcmUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQge1xuICBjb21iaW5lTGF0ZXN0LFxuICBkZWZlcixcbiAgbWVyZ2UsXG4gIE9ic2VydmFibGUsXG4gIG9mLFxuICBTY2hlZHVsZXJMaWtlLFxuICB1c2luZyxcbn0gZnJvbSAncnhqcyc7XG5pbXBvcnQge1xuICBhdWRpdFRpbWUsXG4gIGRlYm91bmNlVGltZSxcbiAgZGVsYXksXG4gIGRpc3RpbmN0VW50aWxDaGFuZ2VkLFxuICBmaWx0ZXIsXG4gIG1hcCxcbiAgbWFwVG8sXG4gIHNoYXJlUmVwbGF5LFxuICB0YXAsXG4gIHdpdGhMYXRlc3RGcm9tLFxufSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBkZWVwTWVyZ2UgfSBmcm9tICcuLi8uLi9jb25maWcvdXRpbHMvZGVlcC1tZXJnZSc7XG5pbXBvcnQgeyBQcm9kdWN0IH0gZnJvbSAnLi4vLi4vbW9kZWwvcHJvZHVjdC5tb2RlbCc7XG5pbXBvcnQgeyBMb2FkaW5nU2NvcGVzU2VydmljZSB9IGZyb20gJy4uLy4uL29jYy9zZXJ2aWNlcy9sb2FkaW5nLXNjb3Blcy5zZXJ2aWNlJztcbmltcG9ydCB7IHdpdGhkcmF3T24gfSBmcm9tICcuLi8uLi91dGlsL3dpdGhkcmF3LW9uJztcbmltcG9ydCB7IFByb2R1Y3RBY3Rpb25zIH0gZnJvbSAnLi4vc3RvcmUvYWN0aW9ucy9pbmRleCc7XG5pbXBvcnQgeyBTdGF0ZVdpdGhQcm9kdWN0IH0gZnJvbSAnLi4vc3RvcmUvcHJvZHVjdC1zdGF0ZSc7XG5pbXBvcnQgeyBQcm9kdWN0U2VsZWN0b3JzIH0gZnJvbSAnLi4vc3RvcmUvc2VsZWN0b3JzL2luZGV4JztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIFByb2R1Y3RMb2FkaW5nU2VydmljZSB7XG4gIHByb3RlY3RlZCBwcm9kdWN0czoge1xuICAgIFtjb2RlOiBzdHJpbmddOiB7IFtzY29wZTogc3RyaW5nXTogT2JzZXJ2YWJsZTxQcm9kdWN0PiB9O1xuICB9ID0ge307XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIHN0b3JlOiBTdG9yZTxTdGF0ZVdpdGhQcm9kdWN0PixcbiAgICBwcm90ZWN0ZWQgbG9hZGluZ1Njb3BlczogTG9hZGluZ1Njb3Blc1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGFjdGlvbnMkOiBBY3Rpb25zLFxuICAgIEBJbmplY3QoUExBVEZPUk1fSUQpIHByb3RlY3RlZCBwbGF0Zm9ybUlkOiBhbnlcbiAgKSB7fVxuXG4gIGdldChwcm9kdWN0Q29kZTogc3RyaW5nLCBzY29wZXM6IHN0cmluZ1tdKTogT2JzZXJ2YWJsZTxQcm9kdWN0PiB7XG4gICAgc2NvcGVzID0gdGhpcy5sb2FkaW5nU2NvcGVzLmV4cGFuZCgncHJvZHVjdCcsIHNjb3Blcyk7XG5cbiAgICB0aGlzLmluaXRQcm9kdWN0U2NvcGVzKHByb2R1Y3RDb2RlLCBzY29wZXMpO1xuICAgIHJldHVybiB0aGlzLnByb2R1Y3RzW3Byb2R1Y3RDb2RlXVt0aGlzLmdldFNjb3Blc0luZGV4KHNjb3BlcyldO1xuICB9XG5cbiAgcHJvdGVjdGVkIGluaXRQcm9kdWN0U2NvcGVzKHByb2R1Y3RDb2RlOiBzdHJpbmcsIHNjb3Blczogc3RyaW5nW10pOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMucHJvZHVjdHNbcHJvZHVjdENvZGVdKSB7XG4gICAgICB0aGlzLnByb2R1Y3RzW3Byb2R1Y3RDb2RlXSA9IHt9O1xuICAgIH1cblxuICAgIGZvciAoY29uc3Qgc2NvcGUgb2Ygc2NvcGVzKSB7XG4gICAgICBpZiAoIXRoaXMucHJvZHVjdHNbcHJvZHVjdENvZGVdW3Njb3BlXSkge1xuICAgICAgICB0aGlzLnByb2R1Y3RzW3Byb2R1Y3RDb2RlXVtzY29wZV0gPSB0aGlzLmdldFByb2R1Y3RGb3JTY29wZShcbiAgICAgICAgICBwcm9kdWN0Q29kZSxcbiAgICAgICAgICBzY29wZVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzY29wZXMubGVuZ3RoID4gMSkge1xuICAgICAgdGhpcy5wcm9kdWN0c1twcm9kdWN0Q29kZV1bdGhpcy5nZXRTY29wZXNJbmRleChzY29wZXMpXSA9IGNvbWJpbmVMYXRlc3QoXG4gICAgICAgIHNjb3Blcy5tYXAoc2NvcGUgPT4gdGhpcy5wcm9kdWN0c1twcm9kdWN0Q29kZV1bc2NvcGVdKVxuICAgICAgKS5waXBlKFxuICAgICAgICBhdWRpdFRpbWUoMCksXG4gICAgICAgIG1hcChwcm9kdWN0UGFydHMgPT5cbiAgICAgICAgICBwcm9kdWN0UGFydHMuZXZlcnkoQm9vbGVhbilcbiAgICAgICAgICAgID8gZGVlcE1lcmdlKHt9LCAuLi5wcm9kdWN0UGFydHMpXG4gICAgICAgICAgICA6IHVuZGVmaW5lZFxuICAgICAgICApLFxuICAgICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCBnZXRTY29wZXNJbmRleChzY29wZXM6IHN0cmluZ1tdKTogc3RyaW5nIHtcbiAgICByZXR1cm4gc2NvcGVzLmpvaW4oJ8m1Jyk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBvYnNlcnZhYmxlIGZvciBwcm92aWRpbmcgc3BlY2lmaWVkIHByb2R1Y3QgZGF0YSBmb3IgdGhlIHNjb3BlXG4gICAqXG4gICAqIEBwYXJhbSBwcm9kdWN0Q29kZVxuICAgKiBAcGFyYW0gc2NvcGVcbiAgICovXG4gIHByb3RlY3RlZCBnZXRQcm9kdWN0Rm9yU2NvcGUoXG4gICAgcHJvZHVjdENvZGU6IHN0cmluZyxcbiAgICBzY29wZTogc3RyaW5nXG4gICk6IE9ic2VydmFibGU8UHJvZHVjdD4ge1xuICAgIGNvbnN0IHNob3VsZExvYWQkID0gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KFxuICAgICAgICBQcm9kdWN0U2VsZWN0b3JzLmdldFNlbGVjdGVkUHJvZHVjdFN0YXRlRmFjdG9yeShwcm9kdWN0Q29kZSwgc2NvcGUpXG4gICAgICApLFxuICAgICAgbWFwKFxuICAgICAgICBwcm9kdWN0U3RhdGUgPT5cbiAgICAgICAgICAhcHJvZHVjdFN0YXRlLmxvYWRpbmcgJiYgIXByb2R1Y3RTdGF0ZS5zdWNjZXNzICYmICFwcm9kdWN0U3RhdGUuZXJyb3JcbiAgICAgICksXG4gICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpLFxuICAgICAgZmlsdGVyKHggPT4geClcbiAgICApO1xuXG4gICAgY29uc3QgaXNMb2FkaW5nJCA9IHRoaXMuc3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChcbiAgICAgICAgUHJvZHVjdFNlbGVjdG9ycy5nZXRTZWxlY3RlZFByb2R1Y3RMb2FkaW5nRmFjdG9yeShwcm9kdWN0Q29kZSwgc2NvcGUpXG4gICAgICApXG4gICAgKTtcblxuICAgIGNvbnN0IHByb2R1Y3RMb2FkTG9naWMkID0gbWVyZ2UoXG4gICAgICBzaG91bGRMb2FkJCxcbiAgICAgIC4uLnRoaXMuZ2V0UHJvZHVjdFJlbG9hZFRyaWdnZXJzKHByb2R1Y3RDb2RlLCBzY29wZSlcbiAgICApLnBpcGUoXG4gICAgICBkZWJvdW5jZVRpbWUoMCksXG4gICAgICB3aXRoTGF0ZXN0RnJvbShpc0xvYWRpbmckKSxcbiAgICAgIHRhcCgoWywgaXNMb2FkaW5nXSkgPT4ge1xuICAgICAgICBpZiAoIWlzTG9hZGluZykge1xuICAgICAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXG4gICAgICAgICAgICBuZXcgUHJvZHVjdEFjdGlvbnMuTG9hZFByb2R1Y3QocHJvZHVjdENvZGUsIHNjb3BlKVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgKTtcblxuICAgIGNvbnN0IHByb2R1Y3REYXRhJCA9IHRoaXMuc3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChQcm9kdWN0U2VsZWN0b3JzLmdldFNlbGVjdGVkUHJvZHVjdEZhY3RvcnkocHJvZHVjdENvZGUsIHNjb3BlKSlcbiAgICApO1xuXG4gICAgcmV0dXJuIHVzaW5nKFxuICAgICAgKCkgPT4gcHJvZHVjdExvYWRMb2dpYyQuc3Vic2NyaWJlKCksXG4gICAgICAoKSA9PiBwcm9kdWN0RGF0YSRcbiAgICApLnBpcGUoc2hhcmVSZXBsYXkoeyBidWZmZXJTaXplOiAxLCByZWZDb3VudDogdHJ1ZSB9KSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyByZWxvYWQgdHJpZ2dlcnMgZm9yIHByb2R1Y3QgcGVyIHNjb3BlXG4gICAqXG4gICAqIEBwYXJhbSBwcm9kdWN0Q29kZVxuICAgKiBAcGFyYW0gc2NvcGVcbiAgICovXG4gIHByb3RlY3RlZCBnZXRQcm9kdWN0UmVsb2FkVHJpZ2dlcnMoXG4gICAgcHJvZHVjdENvZGU6IHN0cmluZyxcbiAgICBzY29wZTogc3RyaW5nXG4gICk6IE9ic2VydmFibGU8Ym9vbGVhbj5bXSB7XG4gICAgY29uc3QgdHJpZ2dlcnMgPSBbXTtcblxuICAgIC8vIG1heCBhZ2UgdHJpZ2dlciBhZGRcbiAgICBjb25zdCBtYXhBZ2UgPSB0aGlzLmxvYWRpbmdTY29wZXMuZ2V0TWF4QWdlKCdwcm9kdWN0Jywgc2NvcGUpO1xuICAgIGlmIChtYXhBZ2UgJiYgaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xuICAgICAgLy8gd2Ugd2FudCB0byBncmFiIGxvYWQgcHJvZHVjdCBzdWNjZXNzIGFuZCBsb2FkIHByb2R1Y3QgZmFpbCBmb3IgdGhpcyBwcm9kdWN0IGFuZCBzY29wZVxuICAgICAgY29uc3QgbG9hZEZpbmlzaCQgPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgICAgIGZpbHRlcihcbiAgICAgICAgICAoXG4gICAgICAgICAgICBhY3Rpb246XG4gICAgICAgICAgICAgIHwgUHJvZHVjdEFjdGlvbnMuTG9hZFByb2R1Y3RTdWNjZXNzXG4gICAgICAgICAgICAgIHwgUHJvZHVjdEFjdGlvbnMuTG9hZFByb2R1Y3RGYWlsXG4gICAgICAgICAgKSA9PlxuICAgICAgICAgICAgKGFjdGlvbi50eXBlID09PSBQcm9kdWN0QWN0aW9ucy5MT0FEX1BST0RVQ1RfU1VDQ0VTUyB8fFxuICAgICAgICAgICAgICBhY3Rpb24udHlwZSA9PT0gUHJvZHVjdEFjdGlvbnMuTE9BRF9QUk9EVUNUX0ZBSUwpICYmXG4gICAgICAgICAgICBhY3Rpb24ubWV0YS5lbnRpdHlJZCA9PT0gcHJvZHVjdENvZGUgJiZcbiAgICAgICAgICAgIGFjdGlvbi5tZXRhLnNjb3BlID09PSBzY29wZVxuICAgICAgICApXG4gICAgICApO1xuXG4gICAgICBjb25zdCBsb2FkU3RhcnQkID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgICAgICBvZlR5cGUoUHJvZHVjdEFjdGlvbnMuTE9BRF9QUk9EVUNUKSxcbiAgICAgICAgZmlsdGVyKFxuICAgICAgICAgIChhY3Rpb246IFByb2R1Y3RBY3Rpb25zLkxvYWRQcm9kdWN0KSA9PlxuICAgICAgICAgICAgYWN0aW9uLnBheWxvYWQgPT09IHByb2R1Y3RDb2RlICYmIGFjdGlvbi5tZXRhLnNjb3BlID09PSBzY29wZVxuICAgICAgICApXG4gICAgICApO1xuXG4gICAgICB0cmlnZ2Vycy5wdXNoKHRoaXMuZ2V0TWF4QWdlVHJpZ2dlcihsb2FkU3RhcnQkLCBsb2FkRmluaXNoJCwgbWF4QWdlKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRyaWdnZXJzO1xuICB9XG5cbiAgLyoqXG4gICAqIEdlbmVyaWMgbWV0aG9kIHRoYXQgcmV0dXJucyBzdHJlYW0gdHJpZ2dlcmluZyByZWxvYWQgYnkgbWF4QWdlXG4gICAqXG4gICAqIENvdWxkIGJlIHJlZmFjdG9yZWQgdG8gc2VwYXJhdGUgc2VydmljZSBpbiBmdXR1cmUgdG8gdXNlIGluIG90aGVyXG4gICAqIG1heCBhZ2UgcmVsb2FkIGltcGxlbWVudGF0aW9uc1xuICAgKlxuICAgKiBAcGFyYW0gbG9hZFN0YXJ0JCBTdHJlYW0gdGhhdCBlbWl0cyBvbiBsb2FkIHN0YXJ0XG4gICAqIEBwYXJhbSBsb2FkRmluaXNoJCBTdHJlYW0gdGhhdCBlbWl0cyBvbiBsb2FkIGZpbmlzaFxuICAgKiBAcGFyYW0gbWF4QWdlIG1heCBhZ2VcbiAgICovXG4gIHByaXZhdGUgZ2V0TWF4QWdlVHJpZ2dlcihcbiAgICBsb2FkU3RhcnQkOiBPYnNlcnZhYmxlPGFueT4sXG4gICAgbG9hZEZpbmlzaCQ6IE9ic2VydmFibGU8YW55PixcbiAgICBtYXhBZ2U6IG51bWJlcixcbiAgICBzY2hlZHVsZXI/OiBTY2hlZHVsZXJMaWtlXG4gICk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIGxldCB0aW1lc3RhbXAgPSAwO1xuXG4gICAgY29uc3Qgbm93ID0gKCkgPT4gKHNjaGVkdWxlciA/IHNjaGVkdWxlci5ub3coKSA6IERhdGUubm93KCkpO1xuXG4gICAgY29uc3QgdGltZXN0YW1wJCA9IGxvYWRGaW5pc2gkLnBpcGUodGFwKCgpID0+ICh0aW1lc3RhbXAgPSBub3coKSkpKTtcblxuICAgIGNvbnN0IHNob3VsZFJlbG9hZCQ6IE9ic2VydmFibGU8Ym9vbGVhbj4gPSBkZWZlcigoKSA9PiB7XG4gICAgICBjb25zdCBhZ2UgPSBub3coKSAtIHRpbWVzdGFtcDtcblxuICAgICAgY29uc3QgdGltZXN0YW1wUmVmcmVzaCQgPSB0aW1lc3RhbXAkLnBpcGUoXG4gICAgICAgIGRlbGF5KG1heEFnZSwgc2NoZWR1bGVyKSxcbiAgICAgICAgbWFwVG8odHJ1ZSksXG4gICAgICAgIHdpdGhkcmF3T24obG9hZFN0YXJ0JClcbiAgICAgICk7XG5cbiAgICAgIGlmIChhZ2UgPiBtYXhBZ2UpIHtcbiAgICAgICAgLy8gd2Ugc2hvdWxkIGVtaXQgZmlyc3QgdmFsdWUgaW1tZWRpYXRlbHlcbiAgICAgICAgcmV0dXJuIG1lcmdlKG9mKHRydWUpLCB0aW1lc3RhbXBSZWZyZXNoJCk7XG4gICAgICB9IGVsc2UgaWYgKGFnZSA9PT0gMCkge1xuICAgICAgICAvLyBlZGdlIGNhc2UsIHdlIHNob3VsZCBlbWl0IG1heCBhZ2UgdGltZW91dCBhZnRlciBuZXh0IGxvYWQgc3VjY2Vzc1xuICAgICAgICAvLyBjb3VsZCBoYXBwZW4gd2l0aCBhcnRpZmljaWFsIHNjaGVkdWxlcnNcbiAgICAgICAgcmV0dXJuIHRpbWVzdGFtcFJlZnJlc2gkO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gd2Ugc2hvdWxkIGVtaXQgZmlyc3QgdmFsdWUgd2hlbiBhZ2Ugd2lsbCBleHBpcmVcbiAgICAgICAgcmV0dXJuIG1lcmdlKFxuICAgICAgICAgIG9mKHRydWUpLnBpcGUoZGVsYXkobWF4QWdlIC0gYWdlLCBzY2hlZHVsZXIpKSxcbiAgICAgICAgICB0aW1lc3RhbXBSZWZyZXNoJFxuICAgICAgICApO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHNob3VsZFJlbG9hZCQ7XG4gIH1cbn1cbiJdfQ==