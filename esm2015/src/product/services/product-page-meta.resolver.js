/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
        return this.routingService.getRouterState().pipe(map(state => state.state.params['productCode']), filter(Boolean), switchMap(code => this.productService.get(code)), filter(Boolean), switchMap((p) => combineLatest([
            this.resolveHeading(p),
            this.resolveTitle(p),
            this.resolveDescription(p),
            this.resolveImage(p),
        ])), map(([heading, title, description, image]) => ({
            heading,
            title,
            description,
            image,
        })));
    }
    /**
     * @param {?} product
     * @return {?}
     */
    resolveHeading(product) {
        return of(product.name);
    }
    /**
     * @param {?} product
     * @return {?}
     */
    resolveTitle(product) {
        /** @type {?} */
        let title = product.name;
        title += this.resolveFirstCategory(product);
        title += this.resolveManufacturer(product);
        return of(title);
    }
    /**
     * @param {?} product
     * @return {?}
     */
    resolveDescription(product) {
        return of(product.summary);
    }
    /**
     * @param {?} product
     * @return {?}
     */
    resolveImage(product) {
        /** @type {?} */
        let result;
        if (product.images &&
            product.images.PRIMARY &&
            product.images.PRIMARY.zoom &&
            product.images.PRIMARY.zoom.url) {
            result = product.images.PRIMARY.zoom.url;
        }
        return of(result);
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
    resolveManufacturer(product) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1wYWdlLW1ldGEucmVzb2x2ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvcHJvZHVjdC9zZXJ2aWNlcy9wcm9kdWN0LXBhZ2UtbWV0YS5yZXNvbHZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQWMsRUFBRSxFQUFFLGFBQWEsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNyRCxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV4RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQU9yRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDM0QsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQzs7OztBQU0zRCxNQUFNLE9BQU8sdUJBQXdCLFNBQVEsZ0JBQWdCOzs7OztJQU0zRCxZQUNZLGNBQThCLEVBQzlCLGNBQThCO1FBRXhDLEtBQUssRUFBRSxDQUFDO1FBSEUsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUd4QyxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQyxZQUFZLENBQUM7SUFDeEMsQ0FBQzs7OztJQUVELE9BQU87UUFDTCxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsY0FBYyxFQUFFLENBQUMsSUFBSSxDQUM5QyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQyxFQUMvQyxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQ2YsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsRUFDaEQsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUNmLFNBQVMsQ0FBQyxDQUFDLENBQVksRUFBRSxFQUFFLENBQ3pCLGFBQWEsQ0FBQztZQUNaLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO1lBQ3RCLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO1lBQ3BCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUM7WUFDMUIsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7U0FDckIsQ0FBQyxDQUNILEVBQ0QsR0FBRyxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxLQUFLLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUM3QyxPQUFPO1lBQ1AsS0FBSztZQUNMLFdBQVc7WUFDWCxLQUFLO1NBQ04sQ0FBQyxDQUFDLENBQ0osQ0FBQztJQUNKLENBQUM7Ozs7O0lBRUQsY0FBYyxDQUFDLE9BQWtCO1FBQy9CLE9BQU8sRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQixDQUFDOzs7OztJQUVELFlBQVksQ0FBQyxPQUFrQjs7WUFDekIsS0FBSyxHQUFHLE9BQU8sQ0FBQyxJQUFJO1FBQ3hCLEtBQUssSUFBSSxJQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDNUMsS0FBSyxJQUFJLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUUzQyxPQUFPLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNuQixDQUFDOzs7OztJQUVELGtCQUFrQixDQUFDLE9BQWtCO1FBQ25DLE9BQU8sRUFBRSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM3QixDQUFDOzs7OztJQUVELFlBQVksQ0FBQyxPQUFZOztZQUNuQixNQUFNO1FBQ1YsSUFDRSxPQUFPLENBQUMsTUFBTTtZQUNkLE9BQU8sQ0FBQyxNQUFNLENBQUMsT0FBTztZQUN0QixPQUFPLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJO1lBQzNCLE9BQU8sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQy9CO1lBQ0EsTUFBTSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7U0FDMUM7UUFDRCxPQUFPLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNwQixDQUFDOzs7Ozs7SUFFTyxvQkFBb0IsQ0FBQyxPQUFrQjs7WUFDekMsYUFBYTtRQUNqQixJQUFJLE9BQU8sQ0FBQyxVQUFVLElBQUksT0FBTyxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ3ZELGFBQWEsR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3ZDO1FBQ0QsT0FBTyxhQUFhO1lBQ2xCLENBQUMsQ0FBQyxNQUFNLGFBQWEsQ0FBQyxJQUFJLElBQUksYUFBYSxDQUFDLElBQUksRUFBRTtZQUNsRCxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQ1QsQ0FBQzs7Ozs7O0lBRU8sbUJBQW1CLENBQUMsT0FBa0I7UUFDNUMsT0FBTyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxNQUFNLE9BQU8sQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQ2xFLENBQUM7OztZQWpGRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7WUFOUSxjQUFjO1lBQ2QsY0FBYzs7Ozs7Ozs7SUFhbkIsaURBQXdDOzs7OztJQUN4QyxpREFBd0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiwgY29tYmluZUxhdGVzdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCBtYXAsIHN3aXRjaE1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFBhZ2VNZXRhIH0gZnJvbSAnLi4vLi4vY21zL21vZGVsL3BhZ2UubW9kZWwnO1xuaW1wb3J0IHsgUGFnZU1ldGFSZXNvbHZlciB9IGZyb20gJy4uLy4uL2Ntcy9wYWdlL3BhZ2UtbWV0YS5yZXNvbHZlcic7XG5pbXBvcnQge1xuICBQYWdlRGVzY3JpcHRpb25SZXNvbHZlcixcbiAgUGFnZUhlYWRpbmdSZXNvbHZlcixcbiAgUGFnZUltYWdlUmVzb2x2ZXIsXG4gIFBhZ2VUaXRsZVJlc29sdmVyLFxufSBmcm9tICcuLi8uLi9jbXMvcGFnZS9wYWdlLnJlc29sdmVycyc7XG5pbXBvcnQgeyBQYWdlVHlwZSB9IGZyb20gJy4uLy4uL29jYy9vY2MtbW9kZWxzL29jYy5tb2RlbHMnO1xuaW1wb3J0IHsgUm91dGluZ1NlcnZpY2UgfSBmcm9tICcuLi8uLi9yb3V0aW5nL2ZhY2FkZS9yb3V0aW5nLnNlcnZpY2UnO1xuaW1wb3J0IHsgUHJvZHVjdFNlcnZpY2UgfSBmcm9tICcuLi9mYWNhZGUvcHJvZHVjdC5zZXJ2aWNlJztcbmltcG9ydCB7IFVJUHJvZHVjdCB9IGZyb20gJy4uL21vZGVsL3Byb2R1Y3QnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgUHJvZHVjdFBhZ2VNZXRhUmVzb2x2ZXIgZXh0ZW5kcyBQYWdlTWV0YVJlc29sdmVyXG4gIGltcGxlbWVudHNcbiAgICBQYWdlSGVhZGluZ1Jlc29sdmVyLFxuICAgIFBhZ2VUaXRsZVJlc29sdmVyLFxuICAgIFBhZ2VEZXNjcmlwdGlvblJlc29sdmVyLFxuICAgIFBhZ2VJbWFnZVJlc29sdmVyIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIHJvdXRpbmdTZXJ2aWNlOiBSb3V0aW5nU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgcHJvZHVjdFNlcnZpY2U6IFByb2R1Y3RTZXJ2aWNlXG4gICkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5wYWdlVHlwZSA9IFBhZ2VUeXBlLlBST0RVQ1RfUEFHRTtcbiAgfVxuXG4gIHJlc29sdmUoKTogT2JzZXJ2YWJsZTxQYWdlTWV0YT4ge1xuICAgIHJldHVybiB0aGlzLnJvdXRpbmdTZXJ2aWNlLmdldFJvdXRlclN0YXRlKCkucGlwZShcbiAgICAgIG1hcChzdGF0ZSA9PiBzdGF0ZS5zdGF0ZS5wYXJhbXNbJ3Byb2R1Y3RDb2RlJ10pLFxuICAgICAgZmlsdGVyKEJvb2xlYW4pLFxuICAgICAgc3dpdGNoTWFwKGNvZGUgPT4gdGhpcy5wcm9kdWN0U2VydmljZS5nZXQoY29kZSkpLFxuICAgICAgZmlsdGVyKEJvb2xlYW4pLFxuICAgICAgc3dpdGNoTWFwKChwOiBVSVByb2R1Y3QpID0+XG4gICAgICAgIGNvbWJpbmVMYXRlc3QoW1xuICAgICAgICAgIHRoaXMucmVzb2x2ZUhlYWRpbmcocCksXG4gICAgICAgICAgdGhpcy5yZXNvbHZlVGl0bGUocCksXG4gICAgICAgICAgdGhpcy5yZXNvbHZlRGVzY3JpcHRpb24ocCksXG4gICAgICAgICAgdGhpcy5yZXNvbHZlSW1hZ2UocCksXG4gICAgICAgIF0pXG4gICAgICApLFxuICAgICAgbWFwKChbaGVhZGluZywgdGl0bGUsIGRlc2NyaXB0aW9uLCBpbWFnZV0pID0+ICh7XG4gICAgICAgIGhlYWRpbmcsXG4gICAgICAgIHRpdGxlLFxuICAgICAgICBkZXNjcmlwdGlvbixcbiAgICAgICAgaW1hZ2UsXG4gICAgICB9KSlcbiAgICApO1xuICB9XG5cbiAgcmVzb2x2ZUhlYWRpbmcocHJvZHVjdDogVUlQcm9kdWN0KTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gb2YocHJvZHVjdC5uYW1lKTtcbiAgfVxuXG4gIHJlc29sdmVUaXRsZShwcm9kdWN0OiBVSVByb2R1Y3QpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xuICAgIGxldCB0aXRsZSA9IHByb2R1Y3QubmFtZTtcbiAgICB0aXRsZSArPSB0aGlzLnJlc29sdmVGaXJzdENhdGVnb3J5KHByb2R1Y3QpO1xuICAgIHRpdGxlICs9IHRoaXMucmVzb2x2ZU1hbnVmYWN0dXJlcihwcm9kdWN0KTtcblxuICAgIHJldHVybiBvZih0aXRsZSk7XG4gIH1cblxuICByZXNvbHZlRGVzY3JpcHRpb24ocHJvZHVjdDogVUlQcm9kdWN0KTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gb2YocHJvZHVjdC5zdW1tYXJ5KTtcbiAgfVxuXG4gIHJlc29sdmVJbWFnZShwcm9kdWN0OiBhbnkpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xuICAgIGxldCByZXN1bHQ7XG4gICAgaWYgKFxuICAgICAgcHJvZHVjdC5pbWFnZXMgJiZcbiAgICAgIHByb2R1Y3QuaW1hZ2VzLlBSSU1BUlkgJiZcbiAgICAgIHByb2R1Y3QuaW1hZ2VzLlBSSU1BUlkuem9vbSAmJlxuICAgICAgcHJvZHVjdC5pbWFnZXMuUFJJTUFSWS56b29tLnVybFxuICAgICkge1xuICAgICAgcmVzdWx0ID0gcHJvZHVjdC5pbWFnZXMuUFJJTUFSWS56b29tLnVybDtcbiAgICB9XG4gICAgcmV0dXJuIG9mKHJlc3VsdCk7XG4gIH1cblxuICBwcml2YXRlIHJlc29sdmVGaXJzdENhdGVnb3J5KHByb2R1Y3Q6IFVJUHJvZHVjdCk6IHN0cmluZyB7XG4gICAgbGV0IGZpcnN0Q2F0ZWdvcnk7XG4gICAgaWYgKHByb2R1Y3QuY2F0ZWdvcmllcyAmJiBwcm9kdWN0LmNhdGVnb3JpZXMubGVuZ3RoID4gMCkge1xuICAgICAgZmlyc3RDYXRlZ29yeSA9IHByb2R1Y3QuY2F0ZWdvcmllc1swXTtcbiAgICB9XG4gICAgcmV0dXJuIGZpcnN0Q2F0ZWdvcnlcbiAgICAgID8gYCB8ICR7Zmlyc3RDYXRlZ29yeS5uYW1lIHx8IGZpcnN0Q2F0ZWdvcnkuY29kZX1gXG4gICAgICA6ICcnO1xuICB9XG5cbiAgcHJpdmF0ZSByZXNvbHZlTWFudWZhY3R1cmVyKHByb2R1Y3Q6IFVJUHJvZHVjdCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHByb2R1Y3QubWFudWZhY3R1cmVyID8gYCB8ICR7cHJvZHVjdC5tYW51ZmFjdHVyZXJ9YCA6ICcnO1xuICB9XG59XG4iXX0=