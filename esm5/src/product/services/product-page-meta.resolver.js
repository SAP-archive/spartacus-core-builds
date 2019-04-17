/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { map, filter, switchMap } from 'rxjs/operators';
import { RoutingService } from '../../routing/facade/routing.service';
import { ProductService } from '../facade/product.service';
import { PageType } from '../../occ/occ-models/occ.models';
import { PageMetaResolver } from '../../cms/page/page-meta.resolver';
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
        return this.routingService.getRouterState().pipe(map(function (state) { return state.state.params['productCode']; }), filter(Boolean), switchMap(function (code) {
            return _this.productService.get(code).pipe(filter(Boolean), map(function (p) {
                return (/** @type {?} */ ({
                    heading: _this.resolveHeading(p),
                    title: _this.resolveTitle(p),
                    description: _this.resolveDescription(p),
                    image: _this.resolveImage(p),
                }));
            }));
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
        return product.name;
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
        title += this.resolveManufactorer(product);
        return title;
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
        return product.summary;
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
        if (product.images &&
            product.images.PRIMARY &&
            product.images.PRIMARY.zoom &&
            product.images.PRIMARY.zoom.url) {
            return product.images.PRIMARY.zoom.url;
        }
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
        return product.categories && product.categories.length > 0
            ? " | " + product.categories[0].code
            : '';
    };
    /**
     * @private
     * @param {?} product
     * @return {?}
     */
    ProductPageMetaResolver.prototype.resolveManufactorer = /**
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1wYWdlLW1ldGEucmVzb2x2ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvcHJvZHVjdC9zZXJ2aWNlcy9wcm9kdWN0LXBhZ2UtbWV0YS5yZXNvbHZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsUUFBUSxFQUFXLE1BQU0saUNBQWlDLENBQUM7QUFDcEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7Ozs7QUFTckU7SUFHNkMsbURBQWdCO0lBTTNELGlDQUNZLGNBQThCLEVBQzlCLGNBQThCO1FBRjFDLFlBSUUsaUJBQU8sU0FFUjtRQUxXLG9CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixvQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFHeEMsS0FBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUMsWUFBWSxDQUFDOztJQUN4QyxDQUFDOzs7O0lBRUQseUNBQU87OztJQUFQO1FBQUEsaUJBa0JDO1FBakJDLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxJQUFJLENBQzlDLEdBQUcsQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxFQUFqQyxDQUFpQyxDQUFDLEVBQy9DLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFDZixTQUFTLENBQUMsVUFBQSxJQUFJO1lBQ1osT0FBQSxLQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQ2hDLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFDZixHQUFHLENBQUMsVUFBQyxDQUFVO2dCQUNiLE9BQU8sbUJBQVU7b0JBQ2YsT0FBTyxFQUFFLEtBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO29CQUMvQixLQUFLLEVBQUUsS0FBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7b0JBQzNCLFdBQVcsRUFBRSxLQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDO29CQUN2QyxLQUFLLEVBQUUsS0FBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7aUJBQzVCLEVBQUEsQ0FBQztZQUNKLENBQUMsQ0FBQyxDQUNIO1FBVkQsQ0FVQyxDQUNGLENBQ0YsQ0FBQztJQUNKLENBQUM7Ozs7O0lBRUQsZ0RBQWM7Ozs7SUFBZCxVQUFlLE9BQWdCO1FBQzdCLE9BQU8sT0FBTyxDQUFDLElBQUksQ0FBQztJQUN0QixDQUFDOzs7OztJQUVELDhDQUFZOzs7O0lBQVosVUFBYSxPQUFnQjs7WUFDdkIsS0FBSyxHQUFHLE9BQU8sQ0FBQyxJQUFJO1FBQ3hCLEtBQUssSUFBSSxJQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDNUMsS0FBSyxJQUFJLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUUzQyxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7Ozs7O0lBRUQsb0RBQWtCOzs7O0lBQWxCLFVBQW1CLE9BQWdCO1FBQ2pDLE9BQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQztJQUN6QixDQUFDOzs7OztJQUVELDhDQUFZOzs7O0lBQVosVUFBYSxPQUFZO1FBQ3ZCLElBQ0UsT0FBTyxDQUFDLE1BQU07WUFDZCxPQUFPLENBQUMsTUFBTSxDQUFDLE9BQU87WUFDdEIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSTtZQUMzQixPQUFPLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUMvQjtZQUNBLE9BQU8sT0FBTyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztTQUN4QztJQUNILENBQUM7Ozs7OztJQUVPLHNEQUFvQjs7Ozs7SUFBNUIsVUFBNkIsT0FBZ0I7UUFDM0MsT0FBTyxPQUFPLENBQUMsVUFBVSxJQUFJLE9BQU8sQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLENBQUM7WUFDeEQsQ0FBQyxDQUFDLFFBQU0sT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFNO1lBQ3BDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDVCxDQUFDOzs7Ozs7SUFFTyxxREFBbUI7Ozs7O0lBQTNCLFVBQTRCLE9BQWdCO1FBQzFDLE9BQU8sT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsUUFBTSxPQUFPLENBQUMsWUFBYyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDbEUsQ0FBQzs7Z0JBeEVGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBZFEsY0FBYztnQkFDZCxjQUFjOzs7a0NBSnZCO0NBd0ZDLEFBekVELENBRzZDLGdCQUFnQixHQXNFNUQ7U0F0RVksdUJBQXVCOzs7Ozs7SUFPaEMsaURBQXdDOzs7OztJQUN4QyxpREFBd0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAsIGZpbHRlciwgc3dpdGNoTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgUm91dGluZ1NlcnZpY2UgfSBmcm9tICcuLi8uLi9yb3V0aW5nL2ZhY2FkZS9yb3V0aW5nLnNlcnZpY2UnO1xuaW1wb3J0IHsgUHJvZHVjdFNlcnZpY2UgfSBmcm9tICcuLi9mYWNhZGUvcHJvZHVjdC5zZXJ2aWNlJztcbmltcG9ydCB7IFBhZ2VUeXBlLCBQcm9kdWN0IH0gZnJvbSAnLi4vLi4vb2NjL29jYy1tb2RlbHMvb2NjLm1vZGVscyc7XG5pbXBvcnQgeyBQYWdlTWV0YVJlc29sdmVyIH0gZnJvbSAnLi4vLi4vY21zL3BhZ2UvcGFnZS1tZXRhLnJlc29sdmVyJztcbmltcG9ydCB7IFBhZ2VNZXRhIH0gZnJvbSAnLi4vLi4vY21zL21vZGVsL3BhZ2UubW9kZWwnO1xuaW1wb3J0IHtcbiAgUGFnZVRpdGxlUmVzb2x2ZXIsXG4gIFBhZ2VEZXNjcmlwdGlvblJlc29sdmVyLFxuICBQYWdlSGVhZGluZ1Jlc29sdmVyLFxuICBQYWdlSW1hZ2VSZXNvbHZlcixcbn0gZnJvbSAnLi4vLi4vY21zL3BhZ2UvcGFnZS5yZXNvbHZlcnMnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgUHJvZHVjdFBhZ2VNZXRhUmVzb2x2ZXIgZXh0ZW5kcyBQYWdlTWV0YVJlc29sdmVyXG4gIGltcGxlbWVudHNcbiAgICBQYWdlSGVhZGluZ1Jlc29sdmVyLFxuICAgIFBhZ2VUaXRsZVJlc29sdmVyLFxuICAgIFBhZ2VEZXNjcmlwdGlvblJlc29sdmVyLFxuICAgIFBhZ2VJbWFnZVJlc29sdmVyIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIHJvdXRpbmdTZXJ2aWNlOiBSb3V0aW5nU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgcHJvZHVjdFNlcnZpY2U6IFByb2R1Y3RTZXJ2aWNlXG4gICkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5wYWdlVHlwZSA9IFBhZ2VUeXBlLlBST0RVQ1RfUEFHRTtcbiAgfVxuXG4gIHJlc29sdmUoKTogT2JzZXJ2YWJsZTxQYWdlTWV0YT4ge1xuICAgIHJldHVybiB0aGlzLnJvdXRpbmdTZXJ2aWNlLmdldFJvdXRlclN0YXRlKCkucGlwZShcbiAgICAgIG1hcChzdGF0ZSA9PiBzdGF0ZS5zdGF0ZS5wYXJhbXNbJ3Byb2R1Y3RDb2RlJ10pLFxuICAgICAgZmlsdGVyKEJvb2xlYW4pLFxuICAgICAgc3dpdGNoTWFwKGNvZGUgPT5cbiAgICAgICAgdGhpcy5wcm9kdWN0U2VydmljZS5nZXQoY29kZSkucGlwZShcbiAgICAgICAgICBmaWx0ZXIoQm9vbGVhbiksXG4gICAgICAgICAgbWFwKChwOiBQcm9kdWN0KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gPFBhZ2VNZXRhPntcbiAgICAgICAgICAgICAgaGVhZGluZzogdGhpcy5yZXNvbHZlSGVhZGluZyhwKSxcbiAgICAgICAgICAgICAgdGl0bGU6IHRoaXMucmVzb2x2ZVRpdGxlKHApLFxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogdGhpcy5yZXNvbHZlRGVzY3JpcHRpb24ocCksXG4gICAgICAgICAgICAgIGltYWdlOiB0aGlzLnJlc29sdmVJbWFnZShwKSxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICByZXNvbHZlSGVhZGluZyhwcm9kdWN0OiBQcm9kdWN0KTogc3RyaW5nIHtcbiAgICByZXR1cm4gcHJvZHVjdC5uYW1lO1xuICB9XG5cbiAgcmVzb2x2ZVRpdGxlKHByb2R1Y3Q6IFByb2R1Y3QpOiBzdHJpbmcge1xuICAgIGxldCB0aXRsZSA9IHByb2R1Y3QubmFtZTtcbiAgICB0aXRsZSArPSB0aGlzLnJlc29sdmVGaXJzdENhdGVnb3J5KHByb2R1Y3QpO1xuICAgIHRpdGxlICs9IHRoaXMucmVzb2x2ZU1hbnVmYWN0b3Jlcihwcm9kdWN0KTtcblxuICAgIHJldHVybiB0aXRsZTtcbiAgfVxuXG4gIHJlc29sdmVEZXNjcmlwdGlvbihwcm9kdWN0OiBQcm9kdWN0KTogc3RyaW5nIHtcbiAgICByZXR1cm4gcHJvZHVjdC5zdW1tYXJ5O1xuICB9XG5cbiAgcmVzb2x2ZUltYWdlKHByb2R1Y3Q6IGFueSk6IHN0cmluZyB7XG4gICAgaWYgKFxuICAgICAgcHJvZHVjdC5pbWFnZXMgJiZcbiAgICAgIHByb2R1Y3QuaW1hZ2VzLlBSSU1BUlkgJiZcbiAgICAgIHByb2R1Y3QuaW1hZ2VzLlBSSU1BUlkuem9vbSAmJlxuICAgICAgcHJvZHVjdC5pbWFnZXMuUFJJTUFSWS56b29tLnVybFxuICAgICkge1xuICAgICAgcmV0dXJuIHByb2R1Y3QuaW1hZ2VzLlBSSU1BUlkuem9vbS51cmw7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSByZXNvbHZlRmlyc3RDYXRlZ29yeShwcm9kdWN0OiBQcm9kdWN0KTogc3RyaW5nIHtcbiAgICByZXR1cm4gcHJvZHVjdC5jYXRlZ29yaWVzICYmIHByb2R1Y3QuY2F0ZWdvcmllcy5sZW5ndGggPiAwXG4gICAgICA/IGAgfCAke3Byb2R1Y3QuY2F0ZWdvcmllc1swXS5jb2RlfWBcbiAgICAgIDogJyc7XG4gIH1cblxuICBwcml2YXRlIHJlc29sdmVNYW51ZmFjdG9yZXIocHJvZHVjdDogUHJvZHVjdCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHByb2R1Y3QubWFudWZhY3R1cmVyID8gYCB8ICR7cHJvZHVjdC5tYW51ZmFjdHVyZXJ9YCA6ICcnO1xuICB9XG59XG4iXX0=