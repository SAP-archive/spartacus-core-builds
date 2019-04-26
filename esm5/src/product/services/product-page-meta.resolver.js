/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { of, combineLatest } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';
import { PageMetaResolver } from '../../cms/page/page-meta.resolver';
import { PageType } from '../../occ/occ-models/occ.models';
import { RoutingService } from '../../routing/facade/routing.service';
import { ProductService } from '../facade/product.service';
import * as i0 from "@angular/core";
import * as i1 from "../../routing/facade/routing.service";
import * as i2 from "../facade/product.service";
var ProductPageMetaResolver = /** @class */ (function (_super) {
    tslib_1.__extends(ProductPageMetaResolver, _super);
    function ProductPageMetaResolver(routingService, productService) {
        var _this = _super.call(this) || this;
        _this.routingService = routingService;
        _this.productService = productService;
        _this.pageType = PageType.PRODUCT_PAGE;
        return _this;
    }
    /**
     * @return {?}
     */
    ProductPageMetaResolver.prototype.resolve = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return this.routingService.getRouterState().pipe(map(function (state) { return state.state.params['productCode']; }), filter(Boolean), switchMap(function (code) { return _this.productService.get(code); }), filter(Boolean), switchMap(function (p) {
            return combineLatest([
                _this.resolveHeading(p),
                _this.resolveTitle(p),
                _this.resolveDescription(p),
                _this.resolveImage(p),
            ]);
        }), map(function (_a) {
            var _b = tslib_1.__read(_a, 4), heading = _b[0], title = _b[1], description = _b[2], image = _b[3];
            return ({
                heading: heading,
                title: title,
                description: description,
                image: image,
            });
        }));
    };
    /**
     * @param {?} product
     * @return {?}
     */
    ProductPageMetaResolver.prototype.resolveHeading = /**
     * @param {?} product
     * @return {?}
     */
    function (product) {
        return of(product.name);
    };
    /**
     * @param {?} product
     * @return {?}
     */
    ProductPageMetaResolver.prototype.resolveTitle = /**
     * @param {?} product
     * @return {?}
     */
    function (product) {
        /** @type {?} */
        var title = product.name;
        title += this.resolveFirstCategory(product);
        title += this.resolveManufacturer(product);
        return of(title);
    };
    /**
     * @param {?} product
     * @return {?}
     */
    ProductPageMetaResolver.prototype.resolveDescription = /**
     * @param {?} product
     * @return {?}
     */
    function (product) {
        return of(product.summary);
    };
    /**
     * @param {?} product
     * @return {?}
     */
    ProductPageMetaResolver.prototype.resolveImage = /**
     * @param {?} product
     * @return {?}
     */
    function (product) {
        /** @type {?} */
        var result;
        if (product.images &&
            product.images.PRIMARY &&
            product.images.PRIMARY.zoom &&
            product.images.PRIMARY.zoom.url) {
            result = product.images.PRIMARY.zoom.url;
        }
        return of(result);
    };
    /**
     * @private
     * @param {?} product
     * @return {?}
     */
    ProductPageMetaResolver.prototype.resolveFirstCategory = /**
     * @private
     * @param {?} product
     * @return {?}
     */
    function (product) {
        /** @type {?} */
        var firstCategory;
        if (product.categories && product.categories.length > 0) {
            firstCategory = product.categories[0];
        }
        return firstCategory
            ? " | " + (firstCategory.name || firstCategory.code)
            : '';
    };
    /**
     * @private
     * @param {?} product
     * @return {?}
     */
    ProductPageMetaResolver.prototype.resolveManufacturer = /**
     * @private
     * @param {?} product
     * @return {?}
     */
    function (product) {
        return product.manufacturer ? " | " + product.manufacturer : '';
    };
    ProductPageMetaResolver.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    ProductPageMetaResolver.ctorParameters = function () { return [
        { type: RoutingService },
        { type: ProductService }
    ]; };
    /** @nocollapse */ ProductPageMetaResolver.ngInjectableDef = i0.defineInjectable({ factory: function ProductPageMetaResolver_Factory() { return new ProductPageMetaResolver(i0.inject(i1.RoutingService), i0.inject(i2.ProductService)); }, token: ProductPageMetaResolver, providedIn: "root" });
    return ProductPageMetaResolver;
}(PageMetaResolver));
export { ProductPageMetaResolver };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    ProductPageMetaResolver.prototype.routingService;
    /**
     * @type {?}
     * @protected
     */
    ProductPageMetaResolver.prototype.productService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1wYWdlLW1ldGEucmVzb2x2ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvcHJvZHVjdC9zZXJ2aWNlcy9wcm9kdWN0LXBhZ2UtbWV0YS5yZXNvbHZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFjLEVBQUUsRUFBRSxhQUFhLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDckQsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFeEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFPckUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQzNELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUN0RSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7Ozs7QUFHM0Q7SUFHNkMsbURBQWdCO0lBTTNELGlDQUNZLGNBQThCLEVBQzlCLGNBQThCO1FBRjFDLFlBSUUsaUJBQU8sU0FFUjtRQUxXLG9CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixvQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFHeEMsS0FBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUMsWUFBWSxDQUFDOztJQUN4QyxDQUFDOzs7O0lBRUQseUNBQU87OztJQUFQO1FBQUEsaUJBcUJDO1FBcEJDLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxJQUFJLENBQzlDLEdBQUcsQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxFQUFqQyxDQUFpQyxDQUFDLEVBQy9DLE1BQU0sQ0FBQyxPQUFPLENBQUMs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QStFNUQ7U0EvRVksdUJBQXVCOzs7Ozs7SUFPaEMsaURBQXdDOzs7OztJQUN4QyxpREFBd0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiwgY29tYmluZUxhdGVzdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCBtYXAsIHN3aXRjaE1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFBhZ2VNZXRhIH0gZnJvbSAnLi4vLi4vY21zL21vZGVsL3BhZ2UubW9kZWwnO1xuaW1wb3J0IHsgUGFnZU1ldGFSZXNvbHZlciB9IGZyb20gJy4uLy4uL2Ntcy9wYWdlL3BhZ2UtbWV0YS5yZXNvbHZlcic7XG5pbXBvcnQge1xuICBQYWdlRGVzY3JpcHRpb25SZXNvbHZlcixcbiAgUGFnZUhlYWRpbmdSZXNvbHZlcixcbiAgUGFnZUltYWdlUmVzb2x2ZXIsXG4gIFBhZ2VUaXRsZVJlc29sdmVyLFxufSBmcm9tICcuLi8uLi9jbXMvcGFnZS9wYWdlLnJlc29sdmVycyc7XG5pbXBvcnQgeyBQYWdlVHlwZSB9IGZyb20gJy4uLy4uL29jYy9vY2MtbW9kZWxzL29jYy5tb2RlbHMnO1xuaW1wb3J0IHsgUm91dGluZ1NlcnZpY2UgfSBmcm9tICcuLi8uLi9yb3V0aW5nL2ZhY2FkZS9yb3V0aW5nLnNlcnZpY2UnO1xuaW1wb3J0IHsgUHJvZHVjdFNlcnZpY2UgfSBmcm9tICcuLi9mYWNhZGUvcHJvZHVjdC5zZXJ2aWNlJztcbmltcG9ydCB7IFVJUHJvZHVjdCB9IGZyb20gJy4uL21vZGVsL3Byb2R1Y3QnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgUHJvZHVjdFBhZ2VNZXRhUmVzb2x2ZXIgZXh0ZW5kcyBQYWdlTWV0YVJlc29sdmVyXG4gIGltcGxlbWVudHNcbiAgICBQYWdlSGVhZGluZ1Jlc29sdmVyLFxuICAgIFBhZ2VUaXRsZVJlc29sdmVyLFxuICAgIFBhZ2VEZXNjcmlwdGlvblJlc29sdmVyLFxuICAgIFBhZ2VJbWFnZVJlc29sdmVyIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIHJvdXRpbmdTZXJ2aWNlOiBSb3V0aW5nU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgcHJvZHVjdFNlcnZpY2U6IFByb2R1Y3RTZXJ2aWNlXG4gICkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5wYWdlVHlwZSA9IFBhZ2VUeXBlLlBST0RVQ1RfUEFHRTtcbiAgfVxuXG4gIHJlc29sdmUoKTogT2JzZXJ2YWJsZTxQYWdlTWV0YT4ge1xuICAgIHJldHVybiB0aGlzLnJvdXRpbmdTZXJ2aWNlLmdldFJvdXRlclN0YXRlKCkucGlwZShcbiAgICAgIG1hcChzdGF0ZSA9PiBzdGF0ZS5zdGF0ZS5wYXJhbXNbJ3Byb2R1Y3RDb2RlJ10pLFxuICAgICAgZmlsdGVyKEJvb2xlYW4pLFxuICAgICAgc3dpdGNoTWFwKGNvZGUgPT4gdGhpcy5wcm9kdWN0U2VydmljZS5nZXQoY29kZSkpLFxuICAgICAgZmlsdGVyKEJvb2xlYW4pLFxuICAgICAgc3dpdGNoTWFwKChwOiBVSVByb2R1Y3QpID0+XG4gICAgICAgIGNvbWJpbmVMYXRlc3QoW1xuICAgICAgICAgIHRoaXMucmVzb2x2ZUhlYWRpbmcocCksXG4gICAgICAgICAgdGhpcy5yZXNvbHZlVGl0bGUocCksXG4gICAgICAgICAgdGhpcy5yZXNvbHZlRGVzY3JpcHRpb24ocCksXG4gICAgICAgICAgdGhpcy5yZXNvbHZlSW1hZ2UocCksXG4gICAgICAgIF0pXG4gICAgICApLFxuICAgICAgbWFwKChbaGVhZGluZywgdGl0bGUsIGRlc2NyaXB0aW9uLCBpbWFnZV0pID0+ICh7XG4gICAgICAgIGhlYWRpbmcsXG4gICAgICAgIHRpdGxlLFxuICAgICAgICBkZXNjcmlwdGlvbixcbiAgICAgICAgaW1hZ2UsXG4gICAgICB9KSlcbiAgICApO1xuICB9XG5cbiAgcmVzb2x2ZUhlYWRpbmcocHJvZHVjdDogVUlQcm9kdWN0KTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gb2YocHJvZHVjdC5uYW1lKTtcbiAgfVxuXG4gIHJlc29sdmVUaXRsZShwcm9kdWN0OiBVSVByb2R1Y3QpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xuICAgIGxldCB0aXRsZSA9IHByb2R1Y3QubmFtZTtcbiAgICB0aXRsZSArPSB0aGlzLnJlc29sdmVGaXJzdENhdGVnb3J5KHByb2R1Y3QpO1xuICAgIHRpdGxlICs9IHRoaXMucmVzb2x2ZU1hbnVmYWN0dXJlcihwcm9kdWN0KTtcblxuICAgIHJldHVybiBvZih0aXRsZSk7XG4gIH1cblxuICByZXNvbHZlRGVzY3JpcHRpb24ocHJvZHVjdDogVUlQcm9kdWN0KTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gb2YocHJvZHVjdC5zdW1tYXJ5KTtcbiAgfVxuXG4gIHJlc29sdmVJbWFnZShwcm9kdWN0OiBhbnkpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xuICAgIGxldCByZXN1bHQ7XG4gICAgaWYgKFxuICAgICAgcHJvZHVjdC5pbWFnZXMgJiZcbiAgICAgIHByb2R1Y3QuaW1hZ2VzLlBSSU1BUlkgJiZcbiAgICAgIHByb2R1Y3QuaW1hZ2VzLlBSSU1BUlkuem9vbSAmJlxuICAgICAgcHJvZHVjdC5pbWFnZXMuUFJJTUFSWS56b29tLnVybFxuICAgICkge1xuICAgICAgcmVzdWx0ID0gcHJvZHVjdC5pbWFnZXMuUFJJTUFSWS56b29tLnVybDtcbiAgICB9XG4gICAgcmV0dXJuIG9mKHJlc3VsdCk7XG4gIH1cblxuICBwcml2YXRlIHJlc29sdmVGaXJzdENhdGVnb3J5KHByb2R1Y3Q6IFVJUHJvZHVjdCk6IHN0cmluZyB7XG4gICAgbGV0IGZpcnN0Q2F0ZWdvcnk7XG4gICAgaWYgKHByb2R1Y3QuY2F0ZWdvcmllcyAmJiBwcm9kdWN0LmNhdGVnb3JpZXMubGVuZ3RoID4gMCkge1xuICAgICAgZmlyc3RDYXRlZ29yeSA9IHByb2R1Y3QuY2F0ZWdvcmllc1swXTtcbiAgICB9XG4gICAgcmV0dXJuIGZpcnN0Q2F0ZWdvcnlcbiAgICAgID8gYCB8ICR7Zmlyc3RDYXRlZ29yeS5uYW1lIHx8IGZpcnN0Q2F0ZWdvcnkuY29kZX1gXG4gICAgICA6ICcnO1xuICB9XG5cbiAgcHJpdmF0ZSByZXNvbHZlTWFudWZhY3R1cmVyKHByb2R1Y3Q6IFVJUHJvZHVjdCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHByb2R1Y3QubWFudWZhY3R1cmVyID8gYCB8ICR7cHJvZHVjdC5tYW51ZmFjdHVyZXJ9YCA6ICcnO1xuICB9XG59XG4iXX0=