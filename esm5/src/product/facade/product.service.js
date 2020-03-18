import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { ProductActions } from '../store/actions/index';
import { ProductSelectors } from '../store/selectors/index';
import { ProductLoadingService } from '../services/product-loading.service';
var ProductService = /** @class */ (function () {
    function ProductService(store, productLoading) {
        this.store = store;
        this.productLoading = productLoading;
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
    ProductService.prototype.get = function (productCode, scopes) {
        if (scopes === void 0) { scopes = ''; }
        return this.productLoading.get(productCode, [].concat(scopes));
    };
    /**
     * Returns boolean observable for product's loading state
     */
    ProductService.prototype.isLoading = function (productCode, scope) {
        if (scope === void 0) { scope = ''; }
        return this.store.pipe(select(ProductSelectors.getSelectedProductLoadingFactory(productCode, scope)));
    };
    /**
     * Returns boolean observable for product's load success state
     */
    ProductService.prototype.isSuccess = function (productCode, scope) {
        if (scope === void 0) { scope = ''; }
        return this.store.pipe(select(ProductSelectors.getSelectedProductSuccessFactory(productCode, scope)));
    };
    /**
     * Returns boolean observable for product's load error state
     */
    ProductService.prototype.hasError = function (productCode, scope) {
        if (scope === void 0) { scope = ''; }
        return this.store.pipe(select(ProductSelectors.getSelectedProductErrorFactory(productCode, scope)));
    };
    /**
     * Reloads the product. The product is loaded implicetly
     * whenever selected by the `get`, but in some cases an
     * explicit reload might be needed.
     */
    ProductService.prototype.reload = function (productCode, scope) {
        if (scope === void 0) { scope = ''; }
        this.store.dispatch(new ProductActions.LoadProduct(productCode, scope));
    };
    ProductService.ctorParameters = function () { return [
        { type: Store },
        { type: ProductLoadingService }
    ]; };
    ProductService = __decorate([
        Injectable()
    ], ProductService);
    return ProductService;
}());
export { ProductService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3Byb2R1Y3QvZmFjYWRlL3Byb2R1Y3Quc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUc1QyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFeEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDNUQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFJNUU7SUFDRSx3QkFDWSxLQUE4QixFQUM5QixjQUFxQztRQURyQyxVQUFLLEdBQUwsS0FBSyxDQUF5QjtRQUM5QixtQkFBYyxHQUFkLGNBQWMsQ0FBdUI7SUFDOUMsQ0FBQztJQUVKOzs7Ozs7Ozs7Ozs7T0FZRztJQUNILDRCQUFHLEdBQUgsVUFDRSxXQUFtQixFQUNuQixNQUE4RDtRQUE5RCx1QkFBQSxFQUFBLFdBQThEO1FBRTlELE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUNqRSxDQUFDO0lBRUQ7O09BRUc7SUFDSCxrQ0FBUyxHQUFULFVBQ0UsV0FBbUIsRUFDbkIsS0FBaUM7UUFBakMsc0JBQUEsRUFBQSxVQUFpQztRQUVqQyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUNwQixNQUFNLENBQ0osZ0JBQWdCLENBQUMsZ0NBQWdDLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxDQUN0RSxDQUNGLENBQUM7SUFDSixDQUFDO0lBRUQ7O09BRUc7SUFDSCxrQ0FBUyxHQUFULFVBQ0UsV0FBbUIsRUFDbkIsS0FBaUM7UUFBakMsc0JBQUEsRUFBQSxVQUFpQztRQUVqQyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUNwQixNQUFNLENBQ0osZ0JBQWdCLENBQUMsZ0NBQWdDLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxDQUN0RSxDQUNGLENBQUM7SUFDSixDQUFDO0lBRUQ7O09BRUc7SUFDSCxpQ0FBUSxHQUFSLFVBQ0UsV0FBbUIsRUFDbkIsS0FBaUM7UUFBakMsc0JBQUEsRUFBQSxVQUFpQztRQUVqQyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUNwQixNQUFNLENBQ0osZ0JBQWdCLENBQUMsOEJBQThCLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxDQUNwRSxDQUNGLENBQUM7SUFDSixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILCtCQUFNLEdBQU4sVUFBTyxXQUFtQixFQUFFLEtBQWlDO1FBQWpDLHNCQUFBLEVBQUEsVUFBaUM7UUFDM0QsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxjQUFjLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQzFFLENBQUM7O2dCQXpFa0IsS0FBSztnQkFDSSxxQkFBcUI7O0lBSHRDLGNBQWM7UUFEMUIsVUFBVSxFQUFFO09BQ0EsY0FBYyxDQTRFMUI7SUFBRCxxQkFBQztDQUFBLEFBNUVELElBNEVDO1NBNUVZLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBzZWxlY3QsIFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgUHJvZHVjdCB9IGZyb20gJy4uLy4uL21vZGVsL3Byb2R1Y3QubW9kZWwnO1xuaW1wb3J0IHsgUHJvZHVjdEFjdGlvbnMgfSBmcm9tICcuLi9zdG9yZS9hY3Rpb25zL2luZGV4JztcbmltcG9ydCB7IFN0YXRlV2l0aFByb2R1Y3QgfSBmcm9tICcuLi9zdG9yZS9wcm9kdWN0LXN0YXRlJztcbmltcG9ydCB7IFByb2R1Y3RTZWxlY3RvcnMgfSBmcm9tICcuLi9zdG9yZS9zZWxlY3RvcnMvaW5kZXgnO1xuaW1wb3J0IHsgUHJvZHVjdExvYWRpbmdTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvcHJvZHVjdC1sb2FkaW5nLnNlcnZpY2UnO1xuaW1wb3J0IHsgUHJvZHVjdFNjb3BlIH0gZnJvbSAnLi4vbW9kZWwvcHJvZHVjdC1zY29wZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBQcm9kdWN0U2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBzdG9yZTogU3RvcmU8U3RhdGVXaXRoUHJvZHVjdD4sXG4gICAgcHJvdGVjdGVkIHByb2R1Y3RMb2FkaW5nOiBQcm9kdWN0TG9hZGluZ1NlcnZpY2VcbiAgKSB7fVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBwcm9kdWN0IG9ic2VydmFibGUuIFRoZSBwcm9kdWN0IHdpbGwgYmUgbG9hZGVkXG4gICAqIHdoZW5ldmVyIHRoZXJlJ3Mgbm8gdmFsdWUgb2JzZXJ2ZWQuXG4gICAqXG4gICAqIFRoZSB1bmRlcmx5aW5nIHByb2R1Y3QgbG9hZGVyIGVuc3VyZXMgdGhhdCB0aGUgcHJvZHVjdCBpc1xuICAgKiBvbmx5IGxvYWRlZCBvbmNlLCBldmVuIGluIGNhc2Ugb2YgcGFyYWxsZWwgb2JzZXJ2ZXJzLlxuICAgKlxuICAgKiBZb3Ugc2hvdWxkIHByb3ZpZGUgcHJvZHVjdCBkYXRhIHNjb3BlIHlvdSBhcmUgaW50ZXJlc3RlZCBpbiB0byBub3QgbG9hZCBhbGxcbiAgICogdGhlIGRhdGEgaWYgbm90IG5lZWRlZC4gWW91IGNhbiBwcm92aWRlIG1vcmUgdGhhbiBvbmUgc2NvcGUuXG4gICAqXG4gICAqIEBwYXJhbSBwcm9kdWN0Q29kZSBQcm9kdWN0IGNvZGUgdG8gbG9hZFxuICAgKiBAcGFyYW0gc2NvcGVzIFNjb3BlIG9yIHNjb3BlcyBvZiB0aGUgcHJvZHVjdCBkYXRhXG4gICAqL1xuICBnZXQoXG4gICAgcHJvZHVjdENvZGU6IHN0cmluZyxcbiAgICBzY29wZXM6IChQcm9kdWN0U2NvcGUgfCBzdHJpbmcpW10gfCBQcm9kdWN0U2NvcGUgfCBzdHJpbmcgPSAnJ1xuICApOiBPYnNlcnZhYmxlPFByb2R1Y3Q+IHtcbiAgICByZXR1cm4gdGhpcy5wcm9kdWN0TG9hZGluZy5nZXQocHJvZHVjdENvZGUsIFtdLmNvbmNhdChzY29wZXMpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGJvb2xlYW4gb2JzZXJ2YWJsZSBmb3IgcHJvZHVjdCdzIGxvYWRpbmcgc3RhdGVcbiAgICovXG4gIGlzTG9hZGluZyhcbiAgICBwcm9kdWN0Q29kZTogc3RyaW5nLFxuICAgIHNjb3BlOiBQcm9kdWN0U2NvcGUgfCBzdHJpbmcgPSAnJ1xuICApOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KFxuICAgICAgICBQcm9kdWN0U2VsZWN0b3JzLmdldFNlbGVjdGVkUHJvZHVjdExvYWRpbmdGYWN0b3J5KHByb2R1Y3RDb2RlLCBzY29wZSlcbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYm9vbGVhbiBvYnNlcnZhYmxlIGZvciBwcm9kdWN0J3MgbG9hZCBzdWNjZXNzIHN0YXRlXG4gICAqL1xuICBpc1N1Y2Nlc3MoXG4gICAgcHJvZHVjdENvZGU6IHN0cmluZyxcbiAgICBzY29wZTogUHJvZHVjdFNjb3BlIHwgc3RyaW5nID0gJydcbiAgKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChcbiAgICAgICAgUHJvZHVjdFNlbGVjdG9ycy5nZXRTZWxlY3RlZFByb2R1Y3RTdWNjZXNzRmFjdG9yeShwcm9kdWN0Q29kZSwgc2NvcGUpXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGJvb2xlYW4gb2JzZXJ2YWJsZSBmb3IgcHJvZHVjdCdzIGxvYWQgZXJyb3Igc3RhdGVcbiAgICovXG4gIGhhc0Vycm9yKFxuICAgIHByb2R1Y3RDb2RlOiBzdHJpbmcsXG4gICAgc2NvcGU6IFByb2R1Y3RTY29wZSB8IHN0cmluZyA9ICcnXG4gICk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoXG4gICAgICAgIFByb2R1Y3RTZWxlY3RvcnMuZ2V0U2VsZWN0ZWRQcm9kdWN0RXJyb3JGYWN0b3J5KHByb2R1Y3RDb2RlLCBzY29wZSlcbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbG9hZHMgdGhlIHByb2R1Y3QuIFRoZSBwcm9kdWN0IGlzIGxvYWRlZCBpbXBsaWNldGx5XG4gICAqIHdoZW5ldmVyIHNlbGVjdGVkIGJ5IHRoZSBgZ2V0YCwgYnV0IGluIHNvbWUgY2FzZXMgYW5cbiAgICogZXhwbGljaXQgcmVsb2FkIG1pZ2h0IGJlIG5lZWRlZC5cbiAgICovXG4gIHJlbG9hZChwcm9kdWN0Q29kZTogc3RyaW5nLCBzY29wZTogUHJvZHVjdFNjb3BlIHwgc3RyaW5nID0gJycpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBQcm9kdWN0QWN0aW9ucy5Mb2FkUHJvZHVjdChwcm9kdWN0Q29kZSwgc2NvcGUpKTtcbiAgfVxufVxuIl19