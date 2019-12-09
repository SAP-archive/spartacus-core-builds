/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { combineLatest, queueScheduler } from 'rxjs';
import { auditTime, map, observeOn, shareReplay, tap } from 'rxjs/operators';
import { ProductActions } from '../store/actions/index';
import { ProductSelectors } from '../store/selectors/index';
import { LoadingScopesService } from '../../occ/services/loading-scopes.service';
import { deepMerge } from '../../config/utils/deep-merge';
var ProductService = /** @class */ (function () {
    function ProductService(store, loadingScopes) {
        this.store = store;
        this.loadingScopes = loadingScopes;
        this.products = {};
    }
    /**
     * Returns the product observable. The product will be loaded
     * whenever there's no value observed.
     *
     * The underlying product loader ensures that the product is
     * only loaded once, even in case of parallel observers.
     *
     * You should provide product data scope you are interested in to not load all
     * the data if not needed. You can provide more than one scope.
     *
     * @param productCode Product code to load
     * @param scopes Scope or scopes of the product data
     */
    /**
     * Returns the product observable. The product will be loaded
     * whenever there's no value observed.
     *
     * The underlying product loader ensures that the product is
     * only loaded once, even in case of parallel observers.
     *
     * You should provide product data scope you are interested in to not load all
     * the data if not needed. You can provide more than one scope.
     *
     * @param {?} productCode Product code to load
     * @param {?=} scopes Scope or scopes of the product data
     * @return {?}
     */
    ProductService.prototype.get = /**
     * Returns the product observable. The product will be loaded
     * whenever there's no value observed.
     *
     * The underlying product loader ensures that the product is
     * only loaded once, even in case of parallel observers.
     *
     * You should provide product data scope you are interested in to not load all
     * the data if not needed. You can provide more than one scope.
     *
     * @param {?} productCode Product code to load
     * @param {?=} scopes Scope or scopes of the product data
     * @return {?}
     */
    function (productCode, scopes) {
        var _this = this;
        if (scopes === void 0) { scopes = ''; }
        scopes = [].concat(scopes);
        if (this.loadingScopes) {
            scopes = this.loadingScopes.expand('product', scopes);
        }
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
     * @private
     * @param {?} productCode
     * @param {?} scopes
     * @return {?}
     */
    ProductService.prototype.initProductScopes = /**
     * @private
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
     * @private
     * @param {?} productCode
     * @param {?} scope
     * @return {?}
     */
    ProductService.prototype.getProductForScope = /**
     * Creates observable for providing specified product data for the scope
     *
     * @private
     * @param {?} productCode
     * @param {?} scope
     * @return {?}
     */
    function (productCode, scope) {
        var _this = this;
        return this.store.pipe(select(ProductSelectors.getSelectedProductStateFactory(productCode, scope)), observeOn(queueScheduler), tap((/**
         * @param {?} productState
         * @return {?}
         */
        function (productState) {
            /** @type {?} */
            var attemptedLoad = productState.loading || productState.success || productState.error;
            if (!attemptedLoad) {
                _this.store.dispatch(new ProductActions.LoadProduct(productCode, scope));
            }
        })), map((/**
         * @param {?} productState
         * @return {?}
         */
        function (productState) { return productState.value; })), shareReplay({ bufferSize: 1, refCount: true }));
    };
    /**
     * Returns boolean observable for product's loading state
     */
    /**
     * Returns boolean observable for product's loading state
     * @param {?} productCode
     * @param {?=} scope
     * @return {?}
     */
    ProductService.prototype.isLoading = /**
     * Returns boolean observable for product's loading state
     * @param {?} productCode
     * @param {?=} scope
     * @return {?}
     */
    function (productCode, scope) {
        if (scope === void 0) { scope = ''; }
        return this.store.pipe(select(ProductSelectors.getSelectedProductLoadingFactory(productCode, scope)));
    };
    /**
     * Returns boolean observable for product's load success state
     */
    /**
     * Returns boolean observable for product's load success state
     * @param {?} productCode
     * @param {?=} scope
     * @return {?}
     */
    ProductService.prototype.isSuccess = /**
     * Returns boolean observable for product's load success state
     * @param {?} productCode
     * @param {?=} scope
     * @return {?}
     */
    function (productCode, scope) {
        if (scope === void 0) { scope = ''; }
        return this.store.pipe(select(ProductSelectors.getSelectedProductSuccessFactory(productCode, scope)));
    };
    /**
     * Returns boolean observable for product's load error state
     */
    /**
     * Returns boolean observable for product's load error state
     * @param {?} productCode
     * @param {?=} scope
     * @return {?}
     */
    ProductService.prototype.hasError = /**
     * Returns boolean observable for product's load error state
     * @param {?} productCode
     * @param {?=} scope
     * @return {?}
     */
    function (productCode, scope) {
        if (scope === void 0) { scope = ''; }
        return this.store.pipe(select(ProductSelectors.getSelectedProductErrorFactory(productCode, scope)));
    };
    /**
     * Reloads the product. The product is loaded implicetly
     * whenever selected by the `get`, but in some cases an
     * explicit reload might be needed.
     */
    /**
     * Reloads the product. The product is loaded implicetly
     * whenever selected by the `get`, but in some cases an
     * explicit reload might be needed.
     * @param {?} productCode
     * @param {?=} scope
     * @return {?}
     */
    ProductService.prototype.reload = /**
     * Reloads the product. The product is loaded implicetly
     * whenever selected by the `get`, but in some cases an
     * explicit reload might be needed.
     * @param {?} productCode
     * @param {?=} scope
     * @return {?}
     */
    function (productCode, scope) {
        if (scope === void 0) { scope = ''; }
        this.store.dispatch(new ProductActions.LoadProduct(productCode, scope));
    };
    ProductService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    ProductService.ctorParameters = function () { return [
        { type: Store },
        { type: LoadingScopesService }
    ]; };
    return ProductService;
}());
export { ProductService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ProductService.prototype.products;
    /**
     * @type {?}
     * @protected
     */
    ProductService.prototype.store;
    /**
     * @type {?}
     * @protected
     */
    ProductService.prototype.loadingScopes;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3Byb2R1Y3QvZmFjYWRlL3Byb2R1Y3Quc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDNUMsT0FBTyxFQUFFLGFBQWEsRUFBYyxjQUFjLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDakUsT0FBTyxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU3RSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFeEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDNUQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDakYsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBRTFEO0lBWUUsd0JBQ1ksS0FBOEIsRUFDOUIsYUFBb0M7UUFEcEMsVUFBSyxHQUFMLEtBQUssQ0FBeUI7UUFDOUIsa0JBQWEsR0FBYixhQUFhLENBQXVCO1FBR3hDLGFBQVEsR0FFWixFQUFFLENBQUM7SUFKSixDQUFDO0lBTUo7Ozs7Ozs7Ozs7OztPQVlHOzs7Ozs7Ozs7Ozs7Ozs7SUFDSCw0QkFBRzs7Ozs7Ozs7Ozs7Ozs7SUFBSCxVQUNFLFdBQW1CLEVBQ25CLE1BQThCO1FBRmhDLGlCQXlCQztRQXZCQyx1QkFBQSxFQUFBLFdBQThCO1FBRTlCLE1BQU0sR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRTNCLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUN0QixNQUFNLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1NBQ3ZEO1FBRUQsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFdBQVcsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUU1QyxJQUFJLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ3JCLE9BQU8sYUFBYSxDQUNsQixNQUFNLENBQUMsR0FBRzs7OztZQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBakMsQ0FBaUMsRUFBQyxDQUN2RCxDQUFDLElBQUksQ0FDSixTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQ1osR0FBRzs7OztZQUNELFVBQUEsWUFBWTtnQkFDVixPQUFBLFlBQVksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksU0FBUyxpQ0FBQyxFQUFFLEdBQUssWUFBWSxFQUFDO1lBQTVELENBQTRELEVBQy9ELENBQ0YsQ0FBQztTQUNIO2FBQU07WUFDTCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDOUM7SUFDSCxDQUFDOzs7Ozs7O0lBRU8sMENBQWlCOzs7Ozs7SUFBekIsVUFBMEIsV0FBbUIsRUFBRSxNQUFnQjs7UUFDN0QsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLEVBQUU7WUFDL0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsR0FBRyxFQUFFLENBQUM7U0FDakM7O1lBRUQsS0FBb0IsSUFBQSxXQUFBLGlCQUFBLE1BQU0sQ0FBQSw4QkFBQSxrREFBRTtnQkFBdkIsSUFBTSxLQUFLLG1CQUFBO2dCQUNkLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFO29CQUN0QyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FDekQsV0FBVyxFQUNYLEtBQUssQ0FDTixDQUFDO2lCQUNIO2FBQ0Y7Ozs7Ozs7OztJQUNILENBQUM7SUFFRDs7Ozs7T0FLRzs7Ozs7Ozs7O0lBQ0ssMkNBQWtCOzs7Ozs7OztJQUExQixVQUNFLFdBQW1CLEVBQ25CLEtBQWE7UUFGZixpQkFzQkM7UUFsQkMsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FDcEIsTUFBTSxDQUNKLGdCQUFnQixDQUFDLDhCQUE4QixDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsQ0FDcEUsRUFDRCxTQUFTLENBQUMsY0FBYyxDQUFDLEVBQ3pCLEdBQUc7Ozs7UUFBQyxVQUFBLFlBQVk7O2dCQUNSLGFBQWEsR0FDakIsWUFBWSxDQUFDLE9BQU8sSUFBSSxZQUFZLENBQUMsT0FBTyxJQUFJLFlBQVksQ0FBQyxLQUFLO1lBRXBFLElBQUksQ0FBQyxhQUFhLEVBQUU7Z0JBQ2xCLEtBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUNqQixJQUFJLGNBQWMsQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxDQUNuRCxDQUFDO2FBQ0g7UUFDSCxDQUFDLEVBQUMsRUFDRixHQUFHOzs7O1FBQUMsVUFBQSxZQUFZLElBQUksT0FBQSxZQUFZLENBQUMsS0FBSyxFQUFsQixDQUFrQixFQUFDLEVBQ3ZDLFdBQVcsQ0FBQyxFQUFFLFVBQVUsRUFBRSxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDLENBQy9DLENBQUM7SUFDSixDQUFDO0lBRUQ7O09BRUc7Ozs7Ozs7SUFDSCxrQ0FBUzs7Ozs7O0lBQVQsVUFBVSxXQUFtQixFQUFFLEtBQVU7UUFBVixzQkFBQSxFQUFBLFVBQVU7UUFDdkMsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FDcEIsTUFBTSxDQUNKLGdCQUFnQixDQUFDLGdDQUFnQyxDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsQ0FDdEUsQ0FDRixDQUFDO0lBQ0osQ0FBQztJQUVEOztPQUVHOzs7Ozs7O0lBQ0gsa0NBQVM7Ozs7OztJQUFULFVBQVUsV0FBbUIsRUFBRSxLQUFVO1FBQVYsc0JBQUEsRUFBQSxVQUFVO1FBQ3ZDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQ3BCLE1BQU0sQ0FDSixnQkFBZ0IsQ0FBQyxnQ0FBZ0MsQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLENBQ3RFLENBQ0YsQ0FBQztJQUNKLENBQUM7SUFFRDs7T0FFRzs7Ozs7OztJQUNILGlDQUFROzs7Ozs7SUFBUixVQUFTLFdBQW1CLEVBQUUsS0FBVTtRQUFWLHNCQUFBLEVBQUEsVUFBVTtRQUN0QyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUNwQixNQUFNLENBQ0osZ0JBQWdCLENBQUMsOEJBQThCLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxDQUNwRSxDQUNGLENBQUM7SUFDSixDQUFDO0lBRUQ7Ozs7T0FJRzs7Ozs7Ozs7O0lBQ0gsK0JBQU07Ozs7Ozs7O0lBQU4sVUFBTyxXQUFtQixFQUFFLEtBQVU7UUFBVixzQkFBQSxFQUFBLFVBQVU7UUFDcEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxjQUFjLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQzFFLENBQUM7O2dCQWxKRixVQUFVOzs7O2dCQVZNLEtBQUs7Z0JBT2Isb0JBQW9COztJQXNKN0IscUJBQUM7Q0FBQSxBQW5KRCxJQW1KQztTQWxKWSxjQUFjOzs7Ozs7SUFnQnpCLGtDQUVPOzs7OztJQU5MLCtCQUF3Qzs7Ozs7SUFDeEMsdUNBQThDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgc2VsZWN0LCBTdG9yZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IGNvbWJpbmVMYXRlc3QsIE9ic2VydmFibGUsIHF1ZXVlU2NoZWR1bGVyIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBhdWRpdFRpbWUsIG1hcCwgb2JzZXJ2ZU9uLCBzaGFyZVJlcGxheSwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgUHJvZHVjdCB9IGZyb20gJy4uLy4uL21vZGVsL3Byb2R1Y3QubW9kZWwnO1xuaW1wb3J0IHsgUHJvZHVjdEFjdGlvbnMgfSBmcm9tICcuLi9zdG9yZS9hY3Rpb25zL2luZGV4JztcbmltcG9ydCB7IFN0YXRlV2l0aFByb2R1Y3QgfSBmcm9tICcuLi9zdG9yZS9wcm9kdWN0LXN0YXRlJztcbmltcG9ydCB7IFByb2R1Y3RTZWxlY3RvcnMgfSBmcm9tICcuLi9zdG9yZS9zZWxlY3RvcnMvaW5kZXgnO1xuaW1wb3J0IHsgTG9hZGluZ1Njb3Blc1NlcnZpY2UgfSBmcm9tICcuLi8uLi9vY2Mvc2VydmljZXMvbG9hZGluZy1zY29wZXMuc2VydmljZSc7XG5pbXBvcnQgeyBkZWVwTWVyZ2UgfSBmcm9tICcuLi8uLi9jb25maWcvdXRpbHMvZGVlcC1tZXJnZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBQcm9kdWN0U2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHN0b3JlOiBTdG9yZTxTdGF0ZVdpdGhQcm9kdWN0PixcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6dW5pZmllZC1zaWduYXR1cmVzXG4gICAgbG9hZGluZ1Njb3BlczogTG9hZGluZ1Njb3Blc1NlcnZpY2VcbiAgKTtcbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIHNpbmNlIDEuNFxuICAgKi9cbiAgY29uc3RydWN0b3Ioc3RvcmU6IFN0b3JlPFN0YXRlV2l0aFByb2R1Y3Q+KTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgc3RvcmU6IFN0b3JlPFN0YXRlV2l0aFByb2R1Y3Q+LFxuICAgIHByb3RlY3RlZCBsb2FkaW5nU2NvcGVzPzogTG9hZGluZ1Njb3Blc1NlcnZpY2VcbiAgKSB7fVxuXG4gIHByaXZhdGUgcHJvZHVjdHM6IHtcbiAgICBbY29kZTogc3RyaW5nXTogeyBbc2NvcGU6IHN0cmluZ106IE9ic2VydmFibGU8UHJvZHVjdD4gfTtcbiAgfSA9IHt9O1xuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBwcm9kdWN0IG9ic2VydmFibGUuIFRoZSBwcm9kdWN0IHdpbGwgYmUgbG9hZGVkXG4gICAqIHdoZW5ldmVyIHRoZXJlJ3Mgbm8gdmFsdWUgb2JzZXJ2ZWQuXG4gICAqXG4gICAqIFRoZSB1bmRlcmx5aW5nIHByb2R1Y3QgbG9hZGVyIGVuc3VyZXMgdGhhdCB0aGUgcHJvZHVjdCBpc1xuICAgKiBvbmx5IGxvYWRlZCBvbmNlLCBldmVuIGluIGNhc2Ugb2YgcGFyYWxsZWwgb2JzZXJ2ZXJzLlxuICAgKlxuICAgKiBZb3Ugc2hvdWxkIHByb3ZpZGUgcHJvZHVjdCBkYXRhIHNjb3BlIHlvdSBhcmUgaW50ZXJlc3RlZCBpbiB0byBub3QgbG9hZCBhbGxcbiAgICogdGhlIGRhdGEgaWYgbm90IG5lZWRlZC4gWW91IGNhbiBwcm92aWRlIG1vcmUgdGhhbiBvbmUgc2NvcGUuXG4gICAqXG4gICAqIEBwYXJhbSBwcm9kdWN0Q29kZSBQcm9kdWN0IGNvZGUgdG8gbG9hZFxuICAgKiBAcGFyYW0gc2NvcGVzIFNjb3BlIG9yIHNjb3BlcyBvZiB0aGUgcHJvZHVjdCBkYXRhXG4gICAqL1xuICBnZXQoXG4gICAgcHJvZHVjdENvZGU6IHN0cmluZyxcbiAgICBzY29wZXM6IHN0cmluZ1tdIHwgc3RyaW5nID0gJydcbiAgKTogT2JzZXJ2YWJsZTxQcm9kdWN0PiB7XG4gICAgc2NvcGVzID0gW10uY29uY2F0KHNjb3Blcyk7XG5cbiAgICBpZiAodGhpcy5sb2FkaW5nU2NvcGVzKSB7XG4gICAgICBzY29wZXMgPSB0aGlzLmxvYWRpbmdTY29wZXMuZXhwYW5kKCdwcm9kdWN0Jywgc2NvcGVzKTtcbiAgICB9XG5cbiAgICB0aGlzLmluaXRQcm9kdWN0U2NvcGVzKHByb2R1Y3RDb2RlLCBzY29wZXMpO1xuXG4gICAgaWYgKHNjb3Blcy5sZW5ndGggPiAxKSB7XG4gICAgICByZXR1cm4gY29tYmluZUxhdGVzdChcbiAgICAgICAgc2NvcGVzLm1hcChzY29wZSA9PiB0aGlzLnByb2R1Y3RzW3Byb2R1Y3RDb2RlXVtzY29wZV0pXG4gICAgICApLnBpcGUoXG4gICAgICAgIGF1ZGl0VGltZSgwKSxcbiAgICAgICAgbWFwKFxuICAgICAgICAgIHByb2R1Y3RQYXJ0cyA9PlxuICAgICAgICAgICAgcHJvZHVjdFBhcnRzLmZpbmQoQm9vbGVhbikgJiYgZGVlcE1lcmdlKHt9LCAuLi5wcm9kdWN0UGFydHMpXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLnByb2R1Y3RzW3Byb2R1Y3RDb2RlXVtzY29wZXNbMF1dO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgaW5pdFByb2R1Y3RTY29wZXMocHJvZHVjdENvZGU6IHN0cmluZywgc2NvcGVzOiBzdHJpbmdbXSk6IHZvaWQge1xuICAgIGlmICghdGhpcy5wcm9kdWN0c1twcm9kdWN0Q29kZV0pIHtcbiAgICAgIHRoaXMucHJvZHVjdHNbcHJvZHVjdENvZGVdID0ge307XG4gICAgfVxuXG4gICAgZm9yIChjb25zdCBzY29wZSBvZiBzY29wZXMpIHtcbiAgICAgIGlmICghdGhpcy5wcm9kdWN0c1twcm9kdWN0Q29kZV1bc2NvcGVdKSB7XG4gICAgICAgIHRoaXMucHJvZHVjdHNbcHJvZHVjdENvZGVdW3Njb3BlXSA9IHRoaXMuZ2V0UHJvZHVjdEZvclNjb3BlKFxuICAgICAgICAgIHByb2R1Y3RDb2RlLFxuICAgICAgICAgIHNjb3BlXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgb2JzZXJ2YWJsZSBmb3IgcHJvdmlkaW5nIHNwZWNpZmllZCBwcm9kdWN0IGRhdGEgZm9yIHRoZSBzY29wZVxuICAgKlxuICAgKiBAcGFyYW0gcHJvZHVjdENvZGVcbiAgICogQHBhcmFtIHNjb3BlXG4gICAqL1xuICBwcml2YXRlIGdldFByb2R1Y3RGb3JTY29wZShcbiAgICBwcm9kdWN0Q29kZTogc3RyaW5nLFxuICAgIHNjb3BlOiBzdHJpbmdcbiAgKTogT2JzZXJ2YWJsZTxQcm9kdWN0PiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChcbiAgICAgICAgUHJvZHVjdFNlbGVjdG9ycy5nZXRTZWxlY3RlZFByb2R1Y3RTdGF0ZUZhY3RvcnkocHJvZHVjdENvZGUsIHNjb3BlKVxuICAgICAgKSxcbiAgICAgIG9ic2VydmVPbihxdWV1ZVNjaGVkdWxlciksXG4gICAgICB0YXAocHJvZHVjdFN0YXRlID0+IHtcbiAgICAgICAgY29uc3QgYXR0ZW1wdGVkTG9hZCA9XG4gICAgICAgICAgcHJvZHVjdFN0YXRlLmxvYWRpbmcgfHwgcHJvZHVjdFN0YXRlLnN1Y2Nlc3MgfHwgcHJvZHVjdFN0YXRlLmVycm9yO1xuXG4gICAgICAgIGlmICghYXR0ZW1wdGVkTG9hZCkge1xuICAgICAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXG4gICAgICAgICAgICBuZXcgUHJvZHVjdEFjdGlvbnMuTG9hZFByb2R1Y3QocHJvZHVjdENvZGUsIHNjb3BlKVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH0pLFxuICAgICAgbWFwKHByb2R1Y3RTdGF0ZSA9PiBwcm9kdWN0U3RhdGUudmFsdWUpLFxuICAgICAgc2hhcmVSZXBsYXkoeyBidWZmZXJTaXplOiAxLCByZWZDb3VudDogdHJ1ZSB9KVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBib29sZWFuIG9ic2VydmFibGUgZm9yIHByb2R1Y3QncyBsb2FkaW5nIHN0YXRlXG4gICAqL1xuICBpc0xvYWRpbmcocHJvZHVjdENvZGU6IHN0cmluZywgc2NvcGUgPSAnJyk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoXG4gICAgICAgIFByb2R1Y3RTZWxlY3RvcnMuZ2V0U2VsZWN0ZWRQcm9kdWN0TG9hZGluZ0ZhY3RvcnkocHJvZHVjdENvZGUsIHNjb3BlKVxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBib29sZWFuIG9ic2VydmFibGUgZm9yIHByb2R1Y3QncyBsb2FkIHN1Y2Nlc3Mgc3RhdGVcbiAgICovXG4gIGlzU3VjY2Vzcyhwcm9kdWN0Q29kZTogc3RyaW5nLCBzY29wZSA9ICcnKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChcbiAgICAgICAgUHJvZHVjdFNlbGVjdG9ycy5nZXRTZWxlY3RlZFByb2R1Y3RTdWNjZXNzRmFjdG9yeShwcm9kdWN0Q29kZSwgc2NvcGUpXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGJvb2xlYW4gb2JzZXJ2YWJsZSBmb3IgcHJvZHVjdCdzIGxvYWQgZXJyb3Igc3RhdGVcbiAgICovXG4gIGhhc0Vycm9yKHByb2R1Y3RDb2RlOiBzdHJpbmcsIHNjb3BlID0gJycpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KFxuICAgICAgICBQcm9kdWN0U2VsZWN0b3JzLmdldFNlbGVjdGVkUHJvZHVjdEVycm9yRmFjdG9yeShwcm9kdWN0Q29kZSwgc2NvcGUpXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWxvYWRzIHRoZSBwcm9kdWN0LiBUaGUgcHJvZHVjdCBpcyBsb2FkZWQgaW1wbGljZXRseVxuICAgKiB3aGVuZXZlciBzZWxlY3RlZCBieSB0aGUgYGdldGAsIGJ1dCBpbiBzb21lIGNhc2VzIGFuXG4gICAqIGV4cGxpY2l0IHJlbG9hZCBtaWdodCBiZSBuZWVkZWQuXG4gICAqL1xuICByZWxvYWQocHJvZHVjdENvZGU6IHN0cmluZywgc2NvcGUgPSAnJyk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IFByb2R1Y3RBY3Rpb25zLkxvYWRQcm9kdWN0KHByb2R1Y3RDb2RlLCBzY29wZSkpO1xuICB9XG59XG4iXX0=