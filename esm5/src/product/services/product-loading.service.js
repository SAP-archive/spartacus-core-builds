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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1sb2FkaW5nLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvcHJvZHVjdC9zZXJ2aWNlcy9wcm9kdWN0LWxvYWRpbmcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDcEQsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2hFLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2hELE9BQU8sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzVDLE9BQU8sRUFDTCxhQUFhLEVBQ2IsS0FBSyxFQUNMLEtBQUssRUFFTCxFQUFFLEVBRUYsS0FBSyxHQUNOLE1BQU0sTUFBTSxDQUFDO0FBQ2QsT0FBTyxFQUNMLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUNMLG9CQUFvQixFQUNwQixNQUFNLEVBQ04sR0FBRyxFQUNILEtBQUssRUFDTCxXQUFXLEVBQ1gsR0FBRyxFQUNILGNBQWMsR0FDZixNQUFNLGdCQUFnQixDQUFDO0FBQ3hCLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUUxRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUNqRixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRXhELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDOzs7OztBQUs1RDtJQUtFLCtCQUNZLEtBQThCLEVBQzlCLGFBQW1DLEVBQ25DLFFBQWlCLEVBQ0ksVUFBZTtRQUhwQyxVQUFLLEdBQUwsS0FBSyxDQUF5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QU0sQ0FBQyxXQUFXLENBQUMsQ0FBQTtPQVRYLHFCQUFxQixDQXFNakM7Z0NBek9EO0NBeU9DLEFBck1ELElBcU1DO1NBck1ZLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGlzUGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgUExBVEZPUk1fSUQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGlvbnMsIG9mVHlwZSB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuaW1wb3J0IHsgc2VsZWN0LCBTdG9yZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7XG4gIGNvbWJpbmVMYXRlc3QsXG4gIGRlZmVyLFxuICBtZXJnZSxcbiAgT2JzZXJ2YWJsZSxcbiAgb2YsXG4gIFNjaGVkdWxlckxpa2UsXG4gIHVzaW5nLFxufSBmcm9tICdyeGpzJztcbmltcG9ydCB7XG4gIGF1ZGl0VGltZSxcbiAgZGVib3VuY2VUaW1lLFxuICBkZWxheSxcbiAgZGlzdGluY3RVbnRpbENoYW5nZWQsXG4gIGZpbHRlcixcbiAgbWFwLFxuICBtYXBUbyxcbiAgc2hhcmVSZXBsYXksXG4gIHRhcCxcbiAgd2l0aExhdGVzdEZyb20sXG59IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IGRlZXBNZXJnZSB9IGZyb20gJy4uLy4uL2NvbmZpZy91dGlscy9kZWVwLW1lcmdlJztcbmltcG9ydCB7IFByb2R1Y3QgfSBmcm9tICcuLi8uLi9tb2RlbC9wcm9kdWN0Lm1vZGVsJztcbmltcG9ydCB7IExvYWRpbmdTY29wZXNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vb2NjL3NlcnZpY2VzL2xvYWRpbmctc2NvcGVzLnNlcnZpY2UnO1xuaW1wb3J0IHsgd2l0aGRyYXdPbiB9IGZyb20gJy4uLy4uL3V0aWwvd2l0aGRyYXctb24nO1xuaW1wb3J0IHsgUHJvZHVjdEFjdGlvbnMgfSBmcm9tICcuLi9zdG9yZS9hY3Rpb25zL2luZGV4JztcbmltcG9ydCB7IFN0YXRlV2l0aFByb2R1Y3QgfSBmcm9tICcuLi9zdG9yZS9wcm9kdWN0LXN0YXRlJztcbmltcG9ydCB7IFByb2R1Y3RTZWxlY3RvcnMgfSBmcm9tICcuLi9zdG9yZS9zZWxlY3RvcnMvaW5kZXgnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgUHJvZHVjdExvYWRpbmdTZXJ2aWNlIHtcbiAgcHJvdGVjdGVkIHByb2R1Y3RzOiB7XG4gICAgW2NvZGU6IHN0cmluZ106IHsgW3Njb3BlOiBzdHJpbmddOiBPYnNlcnZhYmxlPFByb2R1Y3Q+IH07XG4gIH0gPSB7fTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgc3RvcmU6IFN0b3JlPFN0YXRlV2l0aFByb2R1Y3Q+LFxuICAgIHByb3RlY3RlZCBsb2FkaW5nU2NvcGVzOiBMb2FkaW5nU2NvcGVzU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgYWN0aW9ucyQ6IEFjdGlvbnMsXG4gICAgQEluamVjdChQTEFURk9STV9JRCkgcHJvdGVjdGVkIHBsYXRmb3JtSWQ6IGFueVxuICApIHt9XG5cbiAgZ2V0KHByb2R1Y3RDb2RlOiBzdHJpbmcsIHNjb3Blczogc3RyaW5nW10pOiBPYnNlcnZhYmxlPFByb2R1Y3Q+IHtcbiAgICBzY29wZXMgPSB0aGlzLmxvYWRpbmdTY29wZXMuZXhwYW5kKCdwcm9kdWN0Jywgc2NvcGVzKTtcblxuICAgIHRoaXMuaW5pdFByb2R1Y3RTY29wZXMocHJvZHVjdENvZGUsIHNjb3Blcyk7XG4gICAgcmV0dXJuIHRoaXMucHJvZHVjdHNbcHJvZHVjdENvZGVdW3RoaXMuZ2V0U2NvcGVzSW5kZXgoc2NvcGVzKV07XG4gIH1cblxuICBwcm90ZWN0ZWQgaW5pdFByb2R1Y3RTY29wZXMocHJvZHVjdENvZGU6IHN0cmluZywgc2NvcGVzOiBzdHJpbmdbXSk6IHZvaWQge1xuICAgIGlmICghdGhpcy5wcm9kdWN0c1twcm9kdWN0Q29kZV0pIHtcbiAgICAgIHRoaXMucHJvZHVjdHNbcHJvZHVjdENvZGVdID0ge307XG4gICAgfVxuXG4gICAgZm9yIChjb25zdCBzY29wZSBvZiBzY29wZXMpIHtcbiAgICAgIGlmICghdGhpcy5wcm9kdWN0c1twcm9kdWN0Q29kZV1bc2NvcGVdKSB7XG4gICAgICAgIHRoaXMucHJvZHVjdHNbcHJvZHVjdENvZGVdW3Njb3BlXSA9IHRoaXMuZ2V0UHJvZHVjdEZvclNjb3BlKFxuICAgICAgICAgIHByb2R1Y3RDb2RlLFxuICAgICAgICAgIHNjb3BlXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHNjb3Blcy5sZW5ndGggPiAxKSB7XG4gICAgICB0aGlzLnByb2R1Y3RzW3Byb2R1Y3RDb2RlXVt0aGlzLmdldFNjb3Blc0luZGV4KHNjb3BlcyldID0gY29tYmluZUxhdGVzdChcbiAgICAgICAgc2NvcGVzLm1hcChzY29wZSA9PiB0aGlzLnByb2R1Y3RzW3Byb2R1Y3RDb2RlXVtzY29wZV0pXG4gICAgICApLnBpcGUoXG4gICAgICAgIGF1ZGl0VGltZSgwKSxcbiAgICAgICAgbWFwKHByb2R1Y3RQYXJ0cyA9PlxuICAgICAgICAgIHByb2R1Y3RQYXJ0cy5ldmVyeShCb29sZWFuKVxuICAgICAgICAgICAgPyBkZWVwTWVyZ2Uoe30sIC4uLnByb2R1Y3RQYXJ0cylcbiAgICAgICAgICAgIDogdW5kZWZpbmVkXG4gICAgICAgICksXG4gICAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKClcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIGdldFNjb3Blc0luZGV4KHNjb3Blczogc3RyaW5nW10pOiBzdHJpbmcge1xuICAgIHJldHVybiBzY29wZXMuam9pbignybUnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIG9ic2VydmFibGUgZm9yIHByb3ZpZGluZyBzcGVjaWZpZWQgcHJvZHVjdCBkYXRhIGZvciB0aGUgc2NvcGVcbiAgICpcbiAgICogQHBhcmFtIHByb2R1Y3RDb2RlXG4gICAqIEBwYXJhbSBzY29wZVxuICAgKi9cbiAgcHJvdGVjdGVkIGdldFByb2R1Y3RGb3JTY29wZShcbiAgICBwcm9kdWN0Q29kZTogc3RyaW5nLFxuICAgIHNjb3BlOiBzdHJpbmdcbiAgKTogT2JzZXJ2YWJsZTxQcm9kdWN0PiB7XG4gICAgY29uc3Qgc2hvdWxkTG9hZCQgPSB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoXG4gICAgICAgIFByb2R1Y3RTZWxlY3RvcnMuZ2V0U2VsZWN0ZWRQcm9kdWN0U3RhdGVGYWN0b3J5KHByb2R1Y3RDb2RlLCBzY29wZSlcbiAgICAgICksXG4gICAgICBtYXAoXG4gICAgICAgIHByb2R1Y3RTdGF0ZSA9PlxuICAgICAgICAgICFwcm9kdWN0U3RhdGUubG9hZGluZyAmJiAhcHJvZHVjdFN0YXRlLnN1Y2Nlc3MgJiYgIXByb2R1Y3RTdGF0ZS5lcnJvclxuICAgICAgKSxcbiAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCksXG4gICAgICBmaWx0ZXIoeCA9PiB4KVxuICAgICk7XG5cbiAgICBjb25zdCBpc0xvYWRpbmckID0gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KFxuICAgICAgICBQcm9kdWN0U2VsZWN0b3JzLmdldFNlbGVjdGVkUHJvZHVjdExvYWRpbmdGYWN0b3J5KHByb2R1Y3RDb2RlLCBzY29wZSlcbiAgICAgIClcbiAgICApO1xuXG4gICAgY29uc3QgcHJvZHVjdExvYWRMb2dpYyQgPSBtZXJnZShcbiAgICAgIHNob3VsZExvYWQkLFxuICAgICAgLi4udGhpcy5nZXRQcm9kdWN0UmVsb2FkVHJpZ2dlcnMocHJvZHVjdENvZGUsIHNjb3BlKVxuICAgICkucGlwZShcbiAgICAgIGRlYm91bmNlVGltZSgwKSxcbiAgICAgIHdpdGhMYXRlc3RGcm9tKGlzTG9hZGluZyQpLFxuICAgICAgdGFwKChbLCBpc0xvYWRpbmddKSA9PiB7XG4gICAgICAgIGlmICghaXNMb2FkaW5nKSB7XG4gICAgICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcbiAgICAgICAgICAgIG5ldyBQcm9kdWN0QWN0aW9ucy5Mb2FkUHJvZHVjdChwcm9kdWN0Q29kZSwgc2NvcGUpXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICApO1xuXG4gICAgY29uc3QgcHJvZHVjdERhdGEkID0gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KFByb2R1Y3RTZWxlY3RvcnMuZ2V0U2VsZWN0ZWRQcm9kdWN0RmFjdG9yeShwcm9kdWN0Q29kZSwgc2NvcGUpKVxuICAgICk7XG5cbiAgICByZXR1cm4gdXNpbmcoKCkgPT4gcHJvZHVjdExvYWRMb2dpYyQuc3Vic2NyaWJlKCksICgpID0+IHByb2R1Y3REYXRhJCkucGlwZShcbiAgICAgIHNoYXJlUmVwbGF5KHsgYnVmZmVyU2l6ZTogMSwgcmVmQ291bnQ6IHRydWUgfSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgcmVsb2FkIHRyaWdnZXJzIGZvciBwcm9kdWN0IHBlciBzY29wZVxuICAgKlxuICAgKiBAcGFyYW0gcHJvZHVjdENvZGVcbiAgICogQHBhcmFtIHNjb3BlXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0UHJvZHVjdFJlbG9hZFRyaWdnZXJzKFxuICAgIHByb2R1Y3RDb2RlOiBzdHJpbmcsXG4gICAgc2NvcGU6IHN0cmluZ1xuICApOiBPYnNlcnZhYmxlPGJvb2xlYW4+W10ge1xuICAgIGNvbnN0IHRyaWdnZXJzID0gW107XG5cbiAgICAvLyBtYXggYWdlIHRyaWdnZXIgYWRkXG4gICAgY29uc3QgbWF4QWdlID0gdGhpcy5sb2FkaW5nU2NvcGVzLmdldE1heEFnZSgncHJvZHVjdCcsIHNjb3BlKTtcbiAgICBpZiAobWF4QWdlICYmIGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkpIHtcbiAgICAgIC8vIHdlIHdhbnQgdG8gZ3JhYiBsb2FkIHByb2R1Y3Qgc3VjY2VzcyBhbmQgbG9hZCBwcm9kdWN0IGZhaWwgZm9yIHRoaXMgcHJvZHVjdCBhbmQgc2NvcGVcbiAgICAgIGNvbnN0IGxvYWRGaW5pc2gkID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgICAgICBmaWx0ZXIoXG4gICAgICAgICAgKFxuICAgICAgICAgICAgYWN0aW9uOlxuICAgICAgICAgICAgICB8IFByb2R1Y3RBY3Rpb25zLkxvYWRQcm9kdWN0U3VjY2Vzc1xuICAgICAgICAgICAgICB8IFByb2R1Y3RBY3Rpb25zLkxvYWRQcm9kdWN0RmFpbFxuICAgICAgICAgICkgPT5cbiAgICAgICAgICAgIChhY3Rpb24udHlwZSA9PT0gUHJvZHVjdEFjdGlvbnMuTE9BRF9QUk9EVUNUX1NVQ0NFU1MgfHxcbiAgICAgICAgICAgICAgYWN0aW9uLnR5cGUgPT09IFByb2R1Y3RBY3Rpb25zLkxPQURfUFJPRFVDVF9GQUlMKSAmJlxuICAgICAgICAgICAgYWN0aW9uLm1ldGEuZW50aXR5SWQgPT09IHByb2R1Y3RDb2RlICYmXG4gICAgICAgICAgICBhY3Rpb24ubWV0YS5zY29wZSA9PT0gc2NvcGVcbiAgICAgICAgKVxuICAgICAgKTtcblxuICAgICAgY29uc3QgbG9hZFN0YXJ0JCA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICAgICAgb2ZUeXBlKFByb2R1Y3RBY3Rpb25zLkxPQURfUFJPRFVDVCksXG4gICAgICAgIGZpbHRlcihcbiAgICAgICAgICAoYWN0aW9uOiBQcm9kdWN0QWN0aW9ucy5Mb2FkUHJvZHVjdCkgPT5cbiAgICAgICAgICAgIGFjdGlvbi5wYXlsb2FkID09PSBwcm9kdWN0Q29kZSAmJiBhY3Rpb24ubWV0YS5zY29wZSA9PT0gc2NvcGVcbiAgICAgICAgKVxuICAgICAgKTtcblxuICAgICAgdHJpZ2dlcnMucHVzaCh0aGlzLmdldE1heEFnZVRyaWdnZXIobG9hZFN0YXJ0JCwgbG9hZEZpbmlzaCQsIG1heEFnZSkpO1xuICAgIH1cblxuICAgIHJldHVybiB0cmlnZ2VycztcbiAgfVxuXG4gIC8qKlxuICAgKiBHZW5lcmljIG1ldGhvZCB0aGF0IHJldHVybnMgc3RyZWFtIHRyaWdnZXJpbmcgcmVsb2FkIGJ5IG1heEFnZVxuICAgKlxuICAgKiBDb3VsZCBiZSByZWZhY3RvcmVkIHRvIHNlcGFyYXRlIHNlcnZpY2UgaW4gZnV0dXJlIHRvIHVzZSBpbiBvdGhlclxuICAgKiBtYXggYWdlIHJlbG9hZCBpbXBsZW1lbnRhdGlvbnNcbiAgICpcbiAgICogQHBhcmFtIGxvYWRTdGFydCQgU3RyZWFtIHRoYXQgZW1pdHMgb24gbG9hZCBzdGFydFxuICAgKiBAcGFyYW0gbG9hZEZpbmlzaCQgU3RyZWFtIHRoYXQgZW1pdHMgb24gbG9hZCBmaW5pc2hcbiAgICogQHBhcmFtIG1heEFnZSBtYXggYWdlXG4gICAqL1xuICBwcml2YXRlIGdldE1heEFnZVRyaWdnZXIoXG4gICAgbG9hZFN0YXJ0JDogT2JzZXJ2YWJsZTxhbnk+LFxuICAgIGxvYWRGaW5pc2gkOiBPYnNlcnZhYmxlPGFueT4sXG4gICAgbWF4QWdlOiBudW1iZXIsXG4gICAgc2NoZWR1bGVyPzogU2NoZWR1bGVyTGlrZVxuICApOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICBsZXQgdGltZXN0YW1wID0gMDtcblxuICAgIGNvbnN0IG5vdyA9ICgpID0+IChzY2hlZHVsZXIgPyBzY2hlZHVsZXIubm93KCkgOiBEYXRlLm5vdygpKTtcblxuICAgIGNvbnN0IHRpbWVzdGFtcCQgPSBsb2FkRmluaXNoJC5waXBlKHRhcCgoKSA9PiAodGltZXN0YW1wID0gbm93KCkpKSk7XG5cbiAgICBjb25zdCBzaG91bGRSZWxvYWQkOiBPYnNlcnZhYmxlPGJvb2xlYW4+ID0gZGVmZXIoKCkgPT4ge1xuICAgICAgY29uc3QgYWdlID0gbm93KCkgLSB0aW1lc3RhbXA7XG5cbiAgICAgIGNvbnN0IHRpbWVzdGFtcFJlZnJlc2gkID0gdGltZXN0YW1wJC5waXBlKFxuICAgICAgICBkZWxheShtYXhBZ2UsIHNjaGVkdWxlciksXG4gICAgICAgIG1hcFRvKHRydWUpLFxuICAgICAgICB3aXRoZHJhd09uKGxvYWRTdGFydCQpXG4gICAgICApO1xuXG4gICAgICBpZiAoYWdlID4gbWF4QWdlKSB7XG4gICAgICAgIC8vIHdlIHNob3VsZCBlbWl0IGZpcnN0IHZhbHVlIGltbWVkaWF0ZWx5XG4gICAgICAgIHJldHVybiBtZXJnZShvZih0cnVlKSwgdGltZXN0YW1wUmVmcmVzaCQpO1xuICAgICAgfSBlbHNlIGlmIChhZ2UgPT09IDApIHtcbiAgICAgICAgLy8gZWRnZSBjYXNlLCB3ZSBzaG91bGQgZW1pdCBtYXggYWdlIHRpbWVvdXQgYWZ0ZXIgbmV4dCBsb2FkIHN1Y2Nlc3NcbiAgICAgICAgLy8gY291bGQgaGFwcGVuIHdpdGggYXJ0aWZpY2lhbCBzY2hlZHVsZXJzXG4gICAgICAgIHJldHVybiB0aW1lc3RhbXBSZWZyZXNoJDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIHdlIHNob3VsZCBlbWl0IGZpcnN0IHZhbHVlIHdoZW4gYWdlIHdpbGwgZXhwaXJlXG4gICAgICAgIHJldHVybiBtZXJnZShcbiAgICAgICAgICBvZih0cnVlKS5waXBlKGRlbGF5KG1heEFnZSAtIGFnZSwgc2NoZWR1bGVyKSksXG4gICAgICAgICAgdGltZXN0YW1wUmVmcmVzaCRcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBzaG91bGRSZWxvYWQkO1xuICB9XG59XG4iXX0=