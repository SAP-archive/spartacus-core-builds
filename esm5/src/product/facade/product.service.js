/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { combineLatest, queueScheduler } from 'rxjs';
import { auditTime, distinctUntilChanged, map, observeOn, shareReplay, tap, } from 'rxjs/operators';
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
        function (productState) { return productState.value; })), distinctUntilChanged(), shareReplay({ bufferSize: 1, refCount: true }));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3Byb2R1Y3QvZmFjYWRlL3Byb2R1Y3Quc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDNUMsT0FBTyxFQUFFLGFBQWEsRUFBYyxjQUFjLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDakUsT0FBTyxFQUNMLFNBQVMsRUFDVCxvQkFBb0IsRUFDcEIsR0FBRyxFQUNILFNBQVMsRUFDVCxXQUFXLEVBQ1gsR0FBRyxHQUNKLE1BQU0sZ0JBQWdCLENBQUM7QUFFeEIsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRXhELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzVELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQ2pGLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUUxRDtJQVlFLHdCQUNZLEtBQThCLEVBQzlCLGFBQW9DO1FBRHBDLFVBQUssR0FBTCxLQUFLLENBQXlCO1FBQzlCLGtCQUFhLEdBQWIsYUFBYSxDQUF1QjtRQUd4QyxhQUFRLEdBRVosRUFBRSxDQUFDO0lBSkosQ0FBQztJQU1KOzs7Ozs7Ozs7Ozs7T0FZRzs7Ozs7Ozs7Ozs7Ozs7O0lBQ0gsNEJBQUc7Ozs7Ozs7Ozs7Ozs7O0lBQUgsVUFDRSxXQUFtQixFQUNuQixNQUE4QjtRQUZoQyxpQkF5QkM7UUF2QkMsdUJBQUEsRUFBQSxXQUE4QjtRQUU5QixNQUFNLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUUzQixJQUFJLElBQUksQ0FBQyxhQUFhLEVB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S0FBSyxDQUFDLENBQ3RFLENBQ0YsQ0FBQztJQUNKLENBQUM7SUFFRDs7T0FFRzs7Ozs7OztJQUNILGtDQUFTOzs7Ozs7SUFBVCxVQUFVLFdBQW1CLEVBQUUsS0FBVTtRQUFWLHNCQUFBLEVBQUEsVUFBVTtRQUN2QyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUNwQixNQUFNLENBQ0osZ0JBQWdCLENBQUMsZ0NBQWdDLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxDQUN0RSxDQUNGLENBQUM7SUFDSixDQUFDO0lBRUQ7O09BRUc7Ozs7Ozs7SUFDSCxpQ0FBUTs7Ozs7O0lBQVIsVUFBUyxXQUFtQixFQUFFLEtBQVU7UUFBVixzQkFBQSxFQUFBLFVBQVU7UUFDdEMsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FDcEIsTUFBTSxDQUNKLGdCQUFnQixDQUFDLDhCQUE4QixDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsQ0FDcEUsQ0FDRixDQUFDO0lBQ0osQ0FBQztJQUVEOzs7O09BSUc7Ozs7Ozs7OztJQUNILCtCQUFNOzs7Ozs7OztJQUFOLFVBQU8sV0FBbUIsRUFBRSxLQUFVO1FBQVYsc0JBQUEsRUFBQSxVQUFVO1FBQ3BDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksY0FBYyxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUMxRSxDQUFDOztnQkFuSkYsVUFBVTs7OztnQkFqQk0sS0FBSztnQkFjYixvQkFBb0I7O0lBdUo3QixxQkFBQztDQUFBLEFBcEpELElBb0pDO1NBbkpZLGNBQWM7Ozs7OztJQWdCekIsa0NBRU87Ozs7O0lBTkwsK0JBQXdDOzs7OztJQUN4Qyx1Q0FBOEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBzZWxlY3QsIFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgY29tYmluZUxhdGVzdCwgT2JzZXJ2YWJsZSwgcXVldWVTY2hlZHVsZXIgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7XG4gIGF1ZGl0VGltZSxcbiAgZGlzdGluY3RVbnRpbENoYW5nZWQsXG4gIG1hcCxcbiAgb2JzZXJ2ZU9uLFxuICBzaGFyZVJlcGxheSxcbiAgdGFwLFxufSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBQcm9kdWN0IH0gZnJvbSAnLi4vLi4vbW9kZWwvcHJvZHVjdC5tb2RlbCc7XG5pbXBvcnQgeyBQcm9kdWN0QWN0aW9ucyB9IGZyb20gJy4uL3N0b3JlL2FjdGlvbnMvaW5kZXgnO1xuaW1wb3J0IHsgU3RhdGVXaXRoUHJvZHVjdCB9IGZyb20gJy4uL3N0b3JlL3Byb2R1Y3Qtc3RhdGUnO1xuaW1wb3J0IHsgUHJvZHVjdFNlbGVjdG9ycyB9IGZyb20gJy4uL3N0b3JlL3NlbGVjdG9ycy9pbmRleCc7XG5pbXBvcnQgeyBMb2FkaW5nU2NvcGVzU2VydmljZSB9IGZyb20gJy4uLy4uL29jYy9zZXJ2aWNlcy9sb2FkaW5nLXNjb3Blcy5zZXJ2aWNlJztcbmltcG9ydCB7IGRlZXBNZXJnZSB9IGZyb20gJy4uLy4uL2NvbmZpZy91dGlscy9kZWVwLW1lcmdlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFByb2R1Y3RTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgc3RvcmU6IFN0b3JlPFN0YXRlV2l0aFByb2R1Y3Q+LFxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTp1bmlmaWVkLXNpZ25hdHVyZXNcbiAgICBsb2FkaW5nU2NvcGVzOiBMb2FkaW5nU2NvcGVzU2VydmljZVxuICApO1xuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgc2luY2UgMS40XG4gICAqL1xuICBjb25zdHJ1Y3RvcihzdG9yZTogU3RvcmU8U3RhdGVXaXRoUHJvZHVjdD4pO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBzdG9yZTogU3RvcmU8U3RhdGVXaXRoUHJvZHVjdD4sXG4gICAgcHJvdGVjdGVkIGxvYWRpbmdTY29wZXM/OiBMb2FkaW5nU2NvcGVzU2VydmljZVxuICApIHt9XG5cbiAgcHJpdmF0ZSBwcm9kdWN0czoge1xuICAgIFtjb2RlOiBzdHJpbmddOiB7IFtzY29wZTogc3RyaW5nXTogT2JzZXJ2YWJsZTxQcm9kdWN0PiB9O1xuICB9ID0ge307XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHByb2R1Y3Qgb2JzZXJ2YWJsZS4gVGhlIHByb2R1Y3Qgd2lsbCBiZSBsb2FkZWRcbiAgICogd2hlbmV2ZXIgdGhlcmUncyBubyB2YWx1ZSBvYnNlcnZlZC5cbiAgICpcbiAgICogVGhlIHVuZGVybHlpbmcgcHJvZHVjdCBsb2FkZXIgZW5zdXJlcyB0aGF0IHRoZSBwcm9kdWN0IGlzXG4gICAqIG9ubHkgbG9hZGVkIG9uY2UsIGV2ZW4gaW4gY2FzZSBvZiBwYXJhbGxlbCBvYnNlcnZlcnMuXG4gICAqXG4gICAqIFlvdSBzaG91bGQgcHJvdmlkZSBwcm9kdWN0IGRhdGEgc2NvcGUgeW91IGFyZSBpbnRlcmVzdGVkIGluIHRvIG5vdCBsb2FkIGFsbFxuICAgKiB0aGUgZGF0YSBpZiBub3QgbmVlZGVkLiBZb3UgY2FuIHByb3ZpZGUgbW9yZSB0aGFuIG9uZSBzY29wZS5cbiAgICpcbiAgICogQHBhcmFtIHByb2R1Y3RDb2RlIFByb2R1Y3QgY29kZSB0byBsb2FkXG4gICAqIEBwYXJhbSBzY29wZXMgU2NvcGUgb3Igc2NvcGVzIG9mIHRoZSBwcm9kdWN0IGRhdGFcbiAgICovXG4gIGdldChcbiAgICBwcm9kdWN0Q29kZTogc3RyaW5nLFxuICAgIHNjb3Blczogc3RyaW5nW10gfCBzdHJpbmcgPSAnJ1xuICApOiBPYnNlcnZhYmxlPFByb2R1Y3Q+IHtcbiAgICBzY29wZXMgPSBbXS5jb25jYXQoc2NvcGVzKTtcblxuICAgIGlmICh0aGlzLmxvYWRpbmdTY29wZXMpIHtcbiAgICAgIHNjb3BlcyA9IHRoaXMubG9hZGluZ1Njb3Blcy5leHBhbmQoJ3Byb2R1Y3QnLCBzY29wZXMpO1xuICAgIH1cblxuICAgIHRoaXMuaW5pdFByb2R1Y3RTY29wZXMocHJvZHVjdENvZGUsIHNjb3Blcyk7XG5cbiAgICBpZiAoc2NvcGVzLmxlbmd0aCA+IDEpIHtcbiAgICAgIHJldHVybiBjb21iaW5lTGF0ZXN0KFxuICAgICAgICBzY29wZXMubWFwKHNjb3BlID0+IHRoaXMucHJvZHVjdHNbcHJvZHVjdENvZGVdW3Njb3BlXSlcbiAgICAgICkucGlwZShcbiAgICAgICAgYXVkaXRUaW1lKDApLFxuICAgICAgICBtYXAoXG4gICAgICAgICAgcHJvZHVjdFBhcnRzID0+XG4gICAgICAgICAgICBwcm9kdWN0UGFydHMuZmluZChCb29sZWFuKSAmJiBkZWVwTWVyZ2Uoe30sIC4uLnByb2R1Y3RQYXJ0cylcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMucHJvZHVjdHNbcHJvZHVjdENvZGVdW3Njb3Blc1swXV07XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBpbml0UHJvZHVjdFNjb3Blcyhwcm9kdWN0Q29kZTogc3RyaW5nLCBzY29wZXM6IHN0cmluZ1tdKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLnByb2R1Y3RzW3Byb2R1Y3RDb2RlXSkge1xuICAgICAgdGhpcy5wcm9kdWN0c1twcm9kdWN0Q29kZV0gPSB7fTtcbiAgICB9XG5cbiAgICBmb3IgKGNvbnN0IHNjb3BlIG9mIHNjb3Blcykge1xuICAgICAgaWYgKCF0aGlzLnByb2R1Y3RzW3Byb2R1Y3RDb2RlXVtzY29wZV0pIHtcbiAgICAgICAgdGhpcy5wcm9kdWN0c1twcm9kdWN0Q29kZV1bc2NvcGVdID0gdGhpcy5nZXRQcm9kdWN0Rm9yU2NvcGUoXG4gICAgICAgICAgcHJvZHVjdENvZGUsXG4gICAgICAgICAgc2NvcGVcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBvYnNlcnZhYmxlIGZvciBwcm92aWRpbmcgc3BlY2lmaWVkIHByb2R1Y3QgZGF0YSBmb3IgdGhlIHNjb3BlXG4gICAqXG4gICAqIEBwYXJhbSBwcm9kdWN0Q29kZVxuICAgKiBAcGFyYW0gc2NvcGVcbiAgICovXG4gIHByaXZhdGUgZ2V0UHJvZHVjdEZvclNjb3BlKFxuICAgIHByb2R1Y3RDb2RlOiBzdHJpbmcsXG4gICAgc2NvcGU6IHN0cmluZ1xuICApOiBPYnNlcnZhYmxlPFByb2R1Y3Q+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KFxuICAgICAgICBQcm9kdWN0U2VsZWN0b3JzLmdldFNlbGVjdGVkUHJvZHVjdFN0YXRlRmFjdG9yeShwcm9kdWN0Q29kZSwgc2NvcGUpXG4gICAgICApLFxuICAgICAgb2JzZXJ2ZU9uKHF1ZXVlU2NoZWR1bGVyKSxcbiAgICAgIHRhcChwcm9kdWN0U3RhdGUgPT4ge1xuICAgICAgICBjb25zdCBhdHRlbXB0ZWRMb2FkID1cbiAgICAgICAgICBwcm9kdWN0U3RhdGUubG9hZGluZyB8fCBwcm9kdWN0U3RhdGUuc3VjY2VzcyB8fCBwcm9kdWN0U3RhdGUuZXJyb3I7XG5cbiAgICAgICAgaWYgKCFhdHRlbXB0ZWRMb2FkKSB7XG4gICAgICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcbiAgICAgICAgICAgIG5ldyBQcm9kdWN0QWN0aW9ucy5Mb2FkUHJvZHVjdChwcm9kdWN0Q29kZSwgc2NvcGUpXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgICBtYXAocHJvZHVjdFN0YXRlID0+IHByb2R1Y3RTdGF0ZS52YWx1ZSksXG4gICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpLFxuICAgICAgc2hhcmVSZXBsYXkoeyBidWZmZXJTaXplOiAxLCByZWZDb3VudDogdHJ1ZSB9KVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBib29sZWFuIG9ic2VydmFibGUgZm9yIHByb2R1Y3QncyBsb2FkaW5nIHN0YXRlXG4gICAqL1xuICBpc0xvYWRpbmcocHJvZHVjdENvZGU6IHN0cmluZywgc2NvcGUgPSAnJyk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoXG4gICAgICAgIFByb2R1Y3RTZWxlY3RvcnMuZ2V0U2VsZWN0ZWRQcm9kdWN0TG9hZGluZ0ZhY3RvcnkocHJvZHVjdENvZGUsIHNjb3BlKVxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBib29sZWFuIG9ic2VydmFibGUgZm9yIHByb2R1Y3QncyBsb2FkIHN1Y2Nlc3Mgc3RhdGVcbiAgICovXG4gIGlzU3VjY2Vzcyhwcm9kdWN0Q29kZTogc3RyaW5nLCBzY29wZSA9ICcnKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChcbiAgICAgICAgUHJvZHVjdFNlbGVjdG9ycy5nZXRTZWxlY3RlZFByb2R1Y3RTdWNjZXNzRmFjdG9yeShwcm9kdWN0Q29kZSwgc2NvcGUpXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGJvb2xlYW4gb2JzZXJ2YWJsZSBmb3IgcHJvZHVjdCdzIGxvYWQgZXJyb3Igc3RhdGVcbiAgICovXG4gIGhhc0Vycm9yKHByb2R1Y3RDb2RlOiBzdHJpbmcsIHNjb3BlID0gJycpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KFxuICAgICAgICBQcm9kdWN0U2VsZWN0b3JzLmdldFNlbGVjdGVkUHJvZHVjdEVycm9yRmFjdG9yeShwcm9kdWN0Q29kZSwgc2NvcGUpXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWxvYWRzIHRoZSBwcm9kdWN0LiBUaGUgcHJvZHVjdCBpcyBsb2FkZWQgaW1wbGljZXRseVxuICAgKiB3aGVuZXZlciBzZWxlY3RlZCBieSB0aGUgYGdldGAsIGJ1dCBpbiBzb21lIGNhc2VzIGFuXG4gICAqIGV4cGxpY2l0IHJlbG9hZCBtaWdodCBiZSBuZWVkZWQuXG4gICAqL1xuICByZWxvYWQocHJvZHVjdENvZGU6IHN0cmluZywgc2NvcGUgPSAnJyk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IFByb2R1Y3RBY3Rpb25zLkxvYWRQcm9kdWN0KHByb2R1Y3RDb2RlLCBzY29wZSkpO1xuICB9XG59XG4iXX0=