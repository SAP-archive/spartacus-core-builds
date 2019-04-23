/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { filter, map, switchMap } from 'rxjs/operators';
import { PageMetaResolver } from '../../cms/page/page-meta.resolver';
import { PageType } from '../../occ/occ-models/occ.models';
import { RoutingService } from '../../routing/facade/routing.service';
import { ProductService } from '../facade/product.service';
import * as i0 from "@angular/core";
import * as i1 from "../../routing/facade/routing.service";
import * as i2 from "../facade/product.service";
export class ProductPageMetaResolver extends PageMetaResolver {
    /**
     * @param {?} routingService
     * @param {?} productService
     */
    constructor(routingService, productService) {
        super();
        this.routingService = routingService;
        this.productService = productService;
        this.pageType = PageType.PRODUCT_PAGE;
    }
    /**
     * @return {?}
     */
    resolve() {
        return this.routingService.getRouterState().pipe(map(state => state.state.params['productCode']), filter(Boolean), switchMap(code => this.productService.get(code).pipe(filter(Boolean), map((p) => {
            return (/** @type {?} */ ({
                heading: this.resolveHeading(p),
                title: this.resolveTitle(p),
                description: this.resolveDescription(p),
                image: this.resolveImage(p),
            }));
        }))));
    }
    /**
     * @param {?} product
     * @return {?}
     */
    resolveHeading(product) {
        return product.name;
    }
    /**
     * @param {?} product
     * @return {?}
     */
    resolveTitle(product) {
        /** @type {?} */
        let title = product.name;
        title += this.resolveFirstCategory(product);
        title += this.resolveManufactorer(product);
        return title;
    }
    /**
     * @param {?} product
     * @return {?}
     */
    resolveDescription(product) {
        return product.summary;
    }
    /**
     * @param {?} product
     * @return {?}
     */
    resolveImage(product) {
        if (product.images &&
            product.images.PRIMARY &&
            product.images.PRIMARY.zoom &&
            product.images.PRIMARY.zoom.url) {
            return product.images.PRIMARY.zoom.url;
        }
    }
    /**
     * @private
     * @param {?} product
     * @return {?}
     */
    resolveFirstCategory(product) {
        /** @type {?} */
        let firstCategory;
        if (product.categories && product.categories.length > 0) {
            firstCategory = product.categories[0];
        }
        return firstCategory
            ? ` | ${firstCategory.name || firstCategory.code}`
            : '';
    }
    /**
     * @private
     * @param {?} product
     * @return {?}
     */
    resolveManufactorer(product) {
        return product.manufacturer ? ` | ${product.manufacturer}` : '';
    }
}
ProductPageMetaResolver.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
ProductPageMetaResolver.ctorParameters = () => [
    { type: RoutingService },
    { type: ProductService }
];
/** @nocollapse */ ProductPageMetaResolver.ngInjectableDef = i0.defineInjectable({ factory: function ProductPageMetaResolver_Factory() { return new ProductPageMetaResolver(i0.inject(i1.RoutingService), i0.inject(i2.ProductService)); }, token: ProductPageMetaResolver, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1wYWdlLW1ldGEucmVzb2x2ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvcHJvZHVjdC9zZXJ2aWNlcy9wcm9kdWN0LXBhZ2UtbWV0YS5yZXNvbHZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV4RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQU9yRSxPQUFPLEVBQUUsUUFBUSxFQUFXLE1BQU0saUNBQWlDLENBQUM7QUFDcEUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQzs7OztBQUszRCxNQUFNLE9BQU8sdUJBQXdCLFNBQVEsZ0JBQWdCOzs7OztJQU0zRCxZQUNZLGNBQThCLEVBQzlCLGNBQThCO1FBRXhDLEtBQUssRUFBRSxDQUFDO1FBSEUsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUd4QyxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQyxZQUFZLENBQUM7SUFDeEMsQ0FBQzs7OztJQUVELE9BQU87UUFDTCxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsY0FBYyxFQUFFLENBQUMsSUFBSSxDQUM5QyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQyxFQUMvQyxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQ2YsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQ2YsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUNoQyxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQ2YsR0FBRyxDQUFDLENBQUMsQ0FBVSxFQUFFLEVBQUU7WUFDakIsT0FBTyxtQkFBVTtnQkFDZixPQUFPLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7Z0JBQy9CLEtBQUssRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztnQkFDM0IsV0FBVyxFQUFFLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUM7Z0JBQ3ZDLEtBQUssRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQzthQUM1QixFQUFBLENBQUM7UUFDSixDQUFDLENBQUMsQ0FDSCxDQUNGLENBQ0YsQ0FBQztJQUNKLENBQUM7Ozs7O0lBRUQsY0FBYyxDQUFDLE9BQWdCO1FBQzdCLE9BQU8sT0FBTyxDQUFDLElBQUksQ0FBQztJQUN0QixDQUFDOzs7OztJQUVELFlBQVksQ0FBQyxPQUFnQjs7WUFDdkIsS0FBSyxHQUFHLE9BQU8sQ0FBQyxJQUFJO1FBQ3hCLEtBQUssSUFBSSxJQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDNUMsS0FBSyxJQUFJLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUUzQyxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7Ozs7O0lBRUQsa0JBQWtCLENBQUMsT0FBZ0I7UUFDakMsT0FBTyxPQUFPLENBQUMsT0FBTyxDQUFDO0lBQ3pCLENBQUM7Ozs7O0lBRUQsWUFBWSxDQUFDLE9BQVk7UUFDdkIsSUFDRSxPQUFPLENBQUMsTUFBTTtZQUNkLE9BQU8sQ0FBQyxNQUFNLENBQUMsT0FBTztZQUN0QixPQUFPLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJO1lBQzNCLE9BQU8sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQy9CO1lBQ0EsT0FBTyxPQUFPLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO1NBQ3hDO0lBQ0gsQ0FBQzs7Ozs7O0lBRU8sb0JBQW9CLENBQUMsT0FBZ0I7O1lBQ3ZDLGFBQWE7UUFDakIsSUFBSSxPQUFPLENBQUMsVUFBVSxJQUFJLE9BQU8sQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUN2RCxhQUFhLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUN2QztRQUNELE9BQU8sYUFBYTtZQUNsQixDQUFDLENBQUMsTUFBTSxhQUFhLENBQUMsSUFBSSxJQUFJLGFBQWEsQ0FBQyxJQUFJLEVBQUU7WUFDbEQsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUNULENBQUM7Ozs7OztJQUVPLG1CQUFtQixDQUFDLE9BQWdCO1FBQzFDLE9BQU8sT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsTUFBTSxPQUFPLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUNsRSxDQUFDOzs7WUE1RUYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7O1lBTFEsY0FBYztZQUNkLGNBQWM7Ozs7Ozs7O0lBWW5CLGlEQUF3Qzs7Ozs7SUFDeEMsaURBQXdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCBtYXAsIHN3aXRjaE1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFBhZ2VNZXRhIH0gZnJvbSAnLi4vLi4vY21zL21vZGVsL3BhZ2UubW9kZWwnO1xuaW1wb3J0IHsgUGFnZU1ldGFSZXNvbHZlciB9IGZyb20gJy4uLy4uL2Ntcy9wYWdlL3BhZ2UtbWV0YS5yZXNvbHZlcic7XG5pbXBvcnQge1xuICBQYWdlRGVzY3JpcHRpb25SZXNvbHZlcixcbiAgUGFnZUhlYWRpbmdSZXNvbHZlcixcbiAgUGFnZUltYWdlUmVzb2x2ZXIsXG4gIFBhZ2VUaXRsZVJlc29sdmVyLFxufSBmcm9tICcuLi8uLi9jbXMvcGFnZS9wYWdlLnJlc29sdmVycyc7XG5pbXBvcnQgeyBQYWdlVHlwZSwgUHJvZHVjdCB9IGZyb20gJy4uLy4uL29jYy9vY2MtbW9kZWxzL29jYy5tb2RlbHMnO1xuaW1wb3J0IHsgUm91dGluZ1NlcnZpY2UgfSBmcm9tICcuLi8uLi9yb3V0aW5nL2ZhY2FkZS9yb3V0aW5nLnNlcnZpY2UnO1xuaW1wb3J0IHsgUHJvZHVjdFNlcnZpY2UgfSBmcm9tICcuLi9mYWNhZGUvcHJvZHVjdC5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIFByb2R1Y3RQYWdlTWV0YVJlc29sdmVyIGV4dGVuZHMgUGFnZU1ldGFSZXNvbHZlclxuICBpbXBsZW1lbnRzXG4gICAgUGFnZUhlYWRpbmdSZXNvbHZlcixcbiAgICBQYWdlVGl0bGVSZXNvbHZlcixcbiAgICBQYWdlRGVzY3JpcHRpb25SZXNvbHZlcixcbiAgICBQYWdlSW1hZ2VSZXNvbHZlciB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCByb3V0aW5nU2VydmljZTogUm91dGluZ1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHByb2R1Y3RTZXJ2aWNlOiBQcm9kdWN0U2VydmljZVxuICApIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMucGFnZVR5cGUgPSBQYWdlVHlwZS5QUk9EVUNUX1BBR0U7XG4gIH1cblxuICByZXNvbHZlKCk6IE9ic2VydmFibGU8UGFnZU1ldGE+IHtcbiAgICByZXR1cm4gdGhpcy5yb3V0aW5nU2VydmljZS5nZXRSb3V0ZXJTdGF0ZSgpLnBpcGUoXG4gICAgICBtYXAoc3RhdGUgPT4gc3RhdGUuc3RhdGUucGFyYW1zWydwcm9kdWN0Q29kZSddKSxcbiAgICAgIGZpbHRlcihCb29sZWFuKSxcbiAgICAgIHN3aXRjaE1hcChjb2RlID0+XG4gICAgICAgIHRoaXMucHJvZHVjdFNlcnZpY2UuZ2V0KGNvZGUpLnBpcGUoXG4gICAgICAgICAgZmlsdGVyKEJvb2xlYW4pLFxuICAgICAgICAgIG1hcCgocDogUHJvZHVjdCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIDxQYWdlTWV0YT57XG4gICAgICAgICAgICAgIGhlYWRpbmc6IHRoaXMucmVzb2x2ZUhlYWRpbmcocCksXG4gICAgICAgICAgICAgIHRpdGxlOiB0aGlzLnJlc29sdmVUaXRsZShwKSxcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb246IHRoaXMucmVzb2x2ZURlc2NyaXB0aW9uKHApLFxuICAgICAgICAgICAgICBpbWFnZTogdGhpcy5yZXNvbHZlSW1hZ2UocCksXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgcmVzb2x2ZUhlYWRpbmcocHJvZHVjdDogUHJvZHVjdCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHByb2R1Y3QubmFtZTtcbiAgfVxuXG4gIHJlc29sdmVUaXRsZShwcm9kdWN0OiBQcm9kdWN0KTogc3RyaW5nIHtcbiAgICBsZXQgdGl0bGUgPSBwcm9kdWN0Lm5hbWU7XG4gICAgdGl0bGUgKz0gdGhpcy5yZXNvbHZlRmlyc3RDYXRlZ29yeShwcm9kdWN0KTtcbiAgICB0aXRsZSArPSB0aGlzLnJlc29sdmVNYW51ZmFjdG9yZXIocHJvZHVjdCk7XG5cbiAgICByZXR1cm4gdGl0bGU7XG4gIH1cblxuICByZXNvbHZlRGVzY3JpcHRpb24ocHJvZHVjdDogUHJvZHVjdCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHByb2R1Y3Quc3VtbWFyeTtcbiAgfVxuXG4gIHJlc29sdmVJbWFnZShwcm9kdWN0OiBhbnkpOiBzdHJpbmcge1xuICAgIGlmIChcbiAgICAgIHByb2R1Y3QuaW1hZ2VzICYmXG4gICAgICBwcm9kdWN0LmltYWdlcy5QUklNQVJZICYmXG4gICAgICBwcm9kdWN0LmltYWdlcy5QUklNQVJZLnpvb20gJiZcbiAgICAgIHByb2R1Y3QuaW1hZ2VzLlBSSU1BUlkuem9vbS51cmxcbiAgICApIHtcbiAgICAgIHJldHVybiBwcm9kdWN0LmltYWdlcy5QUklNQVJZLnpvb20udXJsO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgcmVzb2x2ZUZpcnN0Q2F0ZWdvcnkocHJvZHVjdDogUHJvZHVjdCk6IHN0cmluZyB7XG4gICAgbGV0IGZpcnN0Q2F0ZWdvcnk7XG4gICAgaWYgKHByb2R1Y3QuY2F0ZWdvcmllcyAmJiBwcm9kdWN0LmNhdGVnb3JpZXMubGVuZ3RoID4gMCkge1xuICAgICAgZmlyc3RDYXRlZ29yeSA9IHByb2R1Y3QuY2F0ZWdvcmllc1swXTtcbiAgICB9XG4gICAgcmV0dXJuIGZpcnN0Q2F0ZWdvcnlcbiAgICAgID8gYCB8ICR7Zmlyc3RDYXRlZ29yeS5uYW1lIHx8IGZpcnN0Q2F0ZWdvcnkuY29kZX1gXG4gICAgICA6ICcnO1xuICB9XG5cbiAgcHJpdmF0ZSByZXNvbHZlTWFudWZhY3RvcmVyKHByb2R1Y3Q6IFByb2R1Y3QpOiBzdHJpbmcge1xuICAgIHJldHVybiBwcm9kdWN0Lm1hbnVmYWN0dXJlciA/IGAgfCAke3Byb2R1Y3QubWFudWZhY3R1cmVyfWAgOiAnJztcbiAgfVxufVxuIl19