/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1wYWdlLW1ldGEucmVzb2x2ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvcHJvZHVjdC9zZXJ2aWNlcy9wcm9kdWN0LXBhZ2UtbWV0YS5yZXNvbHZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFeEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFPckUsT0FBTyxFQUFFLFFBQVEsRUFBVyxNQUFNLGlDQUFpQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUN0RSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7Ozs7QUFFM0Q7SUFHNkMsbURBQWdCO0lBTTNELGlDQUNZLGNBQThCLEVBQzlCLGNBQThCO1FBRjFDLFlBSUUsaUJBQU8sU0FFUjtRQUxXLG9CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixvQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFHeEMsS0FBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUMsWUFBWSxDQUFDOztJQUN4QyxDQUFDOzs7O0lBRUQseUNBQU87OztJQUFQO1FBQUEsaUJBa0JDO1FBakJDLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxJQUFJLENBQzlDLEdBQUcsQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxFQUFqQyxDQUFpQyxDQUFDLEVBQy9DLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFDZixTQUFTLENBQUMsVUFBQSxJQUFJO1lBQ1osT0FBQSxLQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQ2hDLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFDZixHQUFHLENBQUMsVUFBQyxDQUFVO2dCQUNiLE9BQU8sbUJBQVU7b0JBQ2YsT0FBTyxFQUFFLEtBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO29CQUMvQixLQUFLLEVBQUUsS0FBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7b0JBQzNCLFdBQVcsRUFBRSxLQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDO29CQUN2QyxLQUFLLEVBQUUsS0FBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7aUJBQzVCLEVBQUEsQ0FBQztZQUNKLENBQUMsQ0FBQyxDQUNIO1FBVkQsQ0FVQyxDQUNGLENBQ0YsQ0FBQztJQUNKLENBQUM7Ozs7O0lBRUQsZ0RBQWM7Ozs7SUFBZCxVQUFlLE9BQWdCO1FBQzdCLE9BQU8sT0FBTyxDQUFDLElBQUksQ0FBQztJQUN0QixDQUFDOzs7OztJQUVELDhDQUFZOzs7O0lBQVosVUFBYSxPQUFnQjs7WUFDdkIsS0FBSyxHQUFHLE9BQU8sQ0FBQyxJQUFJO1FBQ3hCLEtBQUssSUFBSSxJQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDNUMsS0FBSyxJQUFJLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUUzQyxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7Ozs7O0lBRUQsb0RBQWtCOzs7O0lBQWxCLFVBQW1CLE9BQWdCO1FBQ2pDLE9BQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQztJQUN6QixDQUFDOzs7OztJQUVELDhDQUFZOzs7O0lBQVosVUFBYSxPQUFZO1FBQ3ZCLElBQ0UsT0FBTyxDQUFDLE1BQU07WUFDZCxPQUFPLENBQUMsTUFBTSxDQUFDLE9BQU87WUFDdEIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSTtZQUMzQixPQUFPLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUMvQjtZQUNBLE9BQU8sT0FBTyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztTQUN4QztJQUNILENBQUM7Ozs7OztJQUVPLHNEQUFvQjs7Ozs7SUFBNUIsVUFBNkIsT0FBZ0I7O1lBQ3ZDLGFBQWE7UUFDakIsSUFBSSxPQUFPLENBQUMsVUFBVSxJQUFJLE9BQU8sQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUN2RCxhQUFhLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUN2QztRQUNELE9BQU8sYUFBYTtZQUNsQixDQUFDLENBQUMsU0FBTSxhQUFhLENBQUMsSUFBSSxJQUFJLGFBQWEsQ0FBQyxJQUFJLENBQUU7WUFDbEQsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUNULENBQUM7Ozs7OztJQUVPLHFEQUFtQjs7Ozs7SUFBM0IsVUFBNEIsT0FBZ0I7UUFDMUMsT0FBTyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxRQUFNLE9BQU8sQ0FBQyxZQUFjLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUNsRSxDQUFDOztnQkE1RUYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkFMUSxjQUFjO2dCQUNkLGNBQWM7OztrQ0FidkI7Q0E0RkMsQUE3RUQsQ0FHNkMsZ0JBQWdCLEdBMEU1RDtTQTFFWSx1QkFBdUI7Ozs7OztJQU9oQyxpREFBd0M7Ozs7O0lBQ3hDLGlEQUF3QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgbWFwLCBzd2l0Y2hNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBQYWdlTWV0YSB9IGZyb20gJy4uLy4uL2Ntcy9tb2RlbC9wYWdlLm1vZGVsJztcbmltcG9ydCB7IFBhZ2VNZXRhUmVzb2x2ZXIgfSBmcm9tICcuLi8uLi9jbXMvcGFnZS9wYWdlLW1ldGEucmVzb2x2ZXInO1xuaW1wb3J0IHtcbiAgUGFnZURlc2NyaXB0aW9uUmVzb2x2ZXIsXG4gIFBhZ2VIZWFkaW5nUmVzb2x2ZXIsXG4gIFBhZ2VJbWFnZVJlc29sdmVyLFxuICBQYWdlVGl0bGVSZXNvbHZlcixcbn0gZnJvbSAnLi4vLi4vY21zL3BhZ2UvcGFnZS5yZXNvbHZlcnMnO1xuaW1wb3J0IHsgUGFnZVR5cGUsIFByb2R1Y3QgfSBmcm9tICcuLi8uLi9vY2Mvb2NjLW1vZGVscy9vY2MubW9kZWxzJztcbmltcG9ydCB7IFJvdXRpbmdTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vcm91dGluZy9mYWNhZGUvcm91dGluZy5zZXJ2aWNlJztcbmltcG9ydCB7IFByb2R1Y3RTZXJ2aWNlIH0gZnJvbSAnLi4vZmFjYWRlL3Byb2R1Y3Quc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBQcm9kdWN0UGFnZU1ldGFSZXNvbHZlciBleHRlbmRzIFBhZ2VNZXRhUmVzb2x2ZXJcbiAgaW1wbGVtZW50c1xuICAgIFBhZ2VIZWFkaW5nUmVzb2x2ZXIsXG4gICAgUGFnZVRpdGxlUmVzb2x2ZXIsXG4gICAgUGFnZURlc2NyaXB0aW9uUmVzb2x2ZXIsXG4gICAgUGFnZUltYWdlUmVzb2x2ZXIge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgcm91dGluZ1NlcnZpY2U6IFJvdXRpbmdTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBwcm9kdWN0U2VydmljZTogUHJvZHVjdFNlcnZpY2VcbiAgKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnBhZ2VUeXBlID0gUGFnZVR5cGUuUFJPRFVDVF9QQUdFO1xuICB9XG5cbiAgcmVzb2x2ZSgpOiBPYnNlcnZhYmxlPFBhZ2VNZXRhPiB7XG4gICAgcmV0dXJuIHRoaXMucm91dGluZ1NlcnZpY2UuZ2V0Um91dGVyU3RhdGUoKS5waXBlKFxuICAgICAgbWFwKHN0YXRlID0+IHN0YXRlLnN0YXRlLnBhcmFtc1sncHJvZHVjdENvZGUnXSksXG4gICAgICBmaWx0ZXIoQm9vbGVhbiksXG4gICAgICBzd2l0Y2hNYXAoY29kZSA9PlxuICAgICAgICB0aGlzLnByb2R1Y3RTZXJ2aWNlLmdldChjb2RlKS5waXBlKFxuICAgICAgICAgIGZpbHRlcihCb29sZWFuKSxcbiAgICAgICAgICBtYXAoKHA6IFByb2R1Y3QpID0+IHtcbiAgICAgICAgICAgIHJldHVybiA8UGFnZU1ldGE+e1xuICAgICAgICAgICAgICBoZWFkaW5nOiB0aGlzLnJlc29sdmVIZWFkaW5nKHApLFxuICAgICAgICAgICAgICB0aXRsZTogdGhpcy5yZXNvbHZlVGl0bGUocCksXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLnJlc29sdmVEZXNjcmlwdGlvbihwKSxcbiAgICAgICAgICAgICAgaW1hZ2U6IHRoaXMucmVzb2x2ZUltYWdlKHApLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIHJlc29sdmVIZWFkaW5nKHByb2R1Y3Q6IFByb2R1Y3QpOiBzdHJpbmcge1xuICAgIHJldHVybiBwcm9kdWN0Lm5hbWU7XG4gIH1cblxuICByZXNvbHZlVGl0bGUocHJvZHVjdDogUHJvZHVjdCk6IHN0cmluZyB7XG4gICAgbGV0IHRpdGxlID0gcHJvZHVjdC5uYW1lO1xuICAgIHRpdGxlICs9IHRoaXMucmVzb2x2ZUZpcnN0Q2F0ZWdvcnkocHJvZHVjdCk7XG4gICAgdGl0bGUgKz0gdGhpcy5yZXNvbHZlTWFudWZhY3RvcmVyKHByb2R1Y3QpO1xuXG4gICAgcmV0dXJuIHRpdGxlO1xuICB9XG5cbiAgcmVzb2x2ZURlc2NyaXB0aW9uKHByb2R1Y3Q6IFByb2R1Y3QpOiBzdHJpbmcge1xuICAgIHJldHVybiBwcm9kdWN0LnN1bW1hcnk7XG4gIH1cblxuICByZXNvbHZlSW1hZ2UocHJvZHVjdDogYW55KTogc3RyaW5nIHtcbiAgICBpZiAoXG4gICAgICBwcm9kdWN0LmltYWdlcyAmJlxuICAgICAgcHJvZHVjdC5pbWFnZXMuUFJJTUFSWSAmJlxuICAgICAgcHJvZHVjdC5pbWFnZXMuUFJJTUFSWS56b29tICYmXG4gICAgICBwcm9kdWN0LmltYWdlcy5QUklNQVJZLnpvb20udXJsXG4gICAgKSB7XG4gICAgICByZXR1cm4gcHJvZHVjdC5pbWFnZXMuUFJJTUFSWS56b29tLnVybDtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHJlc29sdmVGaXJzdENhdGVnb3J5KHByb2R1Y3Q6IFByb2R1Y3QpOiBzdHJpbmcge1xuICAgIGxldCBmaXJzdENhdGVnb3J5O1xuICAgIGlmIChwcm9kdWN0LmNhdGVnb3JpZXMgJiYgcHJvZHVjdC5jYXRlZ29yaWVzLmxlbmd0aCA+IDApIHtcbiAgICAgIGZpcnN0Q2F0ZWdvcnkgPSBwcm9kdWN0LmNhdGVnb3JpZXNbMF07XG4gICAgfVxuICAgIHJldHVybiBmaXJzdENhdGVnb3J5XG4gICAgICA/IGAgfCAke2ZpcnN0Q2F0ZWdvcnkubmFtZSB8fCBmaXJzdENhdGVnb3J5LmNvZGV9YFxuICAgICAgOiAnJztcbiAgfVxuXG4gIHByaXZhdGUgcmVzb2x2ZU1hbnVmYWN0b3Jlcihwcm9kdWN0OiBQcm9kdWN0KTogc3RyaW5nIHtcbiAgICByZXR1cm4gcHJvZHVjdC5tYW51ZmFjdHVyZXIgPyBgIHwgJHtwcm9kdWN0Lm1hbnVmYWN0dXJlcn1gIDogJyc7XG4gIH1cbn1cbiJdfQ==