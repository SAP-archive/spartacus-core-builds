/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { combineLatest, of } from 'rxjs';
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
            this.resolveBreadcrumbs(p),
            this.resolveImage(p),
        ])), map(([heading, title, description, breadcrumbs, image]) => ({
            heading,
            title,
            description,
            breadcrumbs,
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
    resolveBreadcrumbs(product) {
        /** @type {?} */
        const breadcrumbs = [];
        breadcrumbs.push({ label: 'Home', link: '/' });
        for (const c of product.categories) {
            breadcrumbs.push({
                label: c.name || c.code,
                link: '/c/' + c.code,
            });
        }
        return of(breadcrumbs);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1wYWdlLW1ldGEucmVzb2x2ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvcHJvZHVjdC9zZXJ2aWNlcy9wcm9kdWN0LXBhZ2UtbWV0YS5yZXNvbHZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsYUFBYSxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNyRCxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV4RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQVFyRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDM0QsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQzs7OztBQU0zRCxNQUFNLE9BQU8sdUJBQXdCLFNBQVEsZ0JBQWdCOzs7OztJQU8zRCxZQUNZLGNBQThCLEVBQzlCLGNBQThCO1FBRXhDLEtBQUssRUFBRSxDQUFDO1FBSEUsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUd4QyxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQyxZQUFZLENBQUM7SUFDeEMsQ0FBQzs7OztJQUVELE9BQU87UUFDTCxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsY0FBYyxFQUFFLENBQUMsSUFBSSxDQUM5QyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQyxFQUMvQyxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQ2YsU0FBUyxDQUFDLElB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QUksRUFBRTtZQUNsRCxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQ1QsQ0FBQzs7Ozs7O0lBRU8sbUJBQW1CLENBQUMsT0FBa0I7UUFDNUMsT0FBTyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxNQUFNLE9BQU8sQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQ2xFLENBQUM7OztZQWhHRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7WUFOUSxjQUFjO1lBQ2QsY0FBYzs7Ozs7Ozs7SUFjbkIsaURBQXdDOzs7OztJQUN4QyxpREFBd0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBjb21iaW5lTGF0ZXN0LCBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCBtYXAsIHN3aXRjaE1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFBhZ2VNZXRhIH0gZnJvbSAnLi4vLi4vY21zL21vZGVsL3BhZ2UubW9kZWwnO1xuaW1wb3J0IHsgUGFnZU1ldGFSZXNvbHZlciB9IGZyb20gJy4uLy4uL2Ntcy9wYWdlL3BhZ2UtbWV0YS5yZXNvbHZlcic7XG5pbXBvcnQge1xuICBQYWdlQnJlYWRjcnVtYlJlc29sdmVyLFxuICBQYWdlRGVzY3JpcHRpb25SZXNvbHZlcixcbiAgUGFnZUhlYWRpbmdSZXNvbHZlcixcbiAgUGFnZUltYWdlUmVzb2x2ZXIsXG4gIFBhZ2VUaXRsZVJlc29sdmVyLFxufSBmcm9tICcuLi8uLi9jbXMvcGFnZS9wYWdlLnJlc29sdmVycyc7XG5pbXBvcnQgeyBQYWdlVHlwZSB9IGZyb20gJy4uLy4uL29jYy9vY2MtbW9kZWxzL29jYy5tb2RlbHMnO1xuaW1wb3J0IHsgUm91dGluZ1NlcnZpY2UgfSBmcm9tICcuLi8uLi9yb3V0aW5nL2ZhY2FkZS9yb3V0aW5nLnNlcnZpY2UnO1xuaW1wb3J0IHsgUHJvZHVjdFNlcnZpY2UgfSBmcm9tICcuLi9mYWNhZGUvcHJvZHVjdC5zZXJ2aWNlJztcbmltcG9ydCB7IFVJUHJvZHVjdCB9IGZyb20gJy4uL21vZGVsL3Byb2R1Y3QnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgUHJvZHVjdFBhZ2VNZXRhUmVzb2x2ZXIgZXh0ZW5kcyBQYWdlTWV0YVJlc29sdmVyXG4gIGltcGxlbWVudHNcbiAgICBQYWdlSGVhZGluZ1Jlc29sdmVyLFxuICAgIFBhZ2VUaXRsZVJlc29sdmVyLFxuICAgIFBhZ2VEZXNjcmlwdGlvblJlc29sdmVyLFxuICAgIFBhZ2VCcmVhZGNydW1iUmVzb2x2ZXIsXG4gICAgUGFnZUltYWdlUmVzb2x2ZXIge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgcm91dGluZ1NlcnZpY2U6IFJvdXRpbmdTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBwcm9kdWN0U2VydmljZTogUHJvZHVjdFNlcnZpY2VcbiAgKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnBhZ2VUeXBlID0gUGFnZVR5cGUuUFJPRFVDVF9QQUdFO1xuICB9XG5cbiAgcmVzb2x2ZSgpOiBPYnNlcnZhYmxlPFBhZ2VNZXRhPiB7XG4gICAgcmV0dXJuIHRoaXMucm91dGluZ1NlcnZpY2UuZ2V0Um91dGVyU3RhdGUoKS5waXBlKFxuICAgICAgbWFwKHN0YXRlID0+IHN0YXRlLnN0YXRlLnBhcmFtc1sncHJvZHVjdENvZGUnXSksXG4gICAgICBmaWx0ZXIoQm9vbGVhbiksXG4gICAgICBzd2l0Y2hNYXAoY29kZSA9PiB0aGlzLnByb2R1Y3RTZXJ2aWNlLmdldChjb2RlKSksXG4gICAgICBmaWx0ZXIoQm9vbGVhbiksXG4gICAgICBzd2l0Y2hNYXAoKHA6IFVJUHJvZHVjdCkgPT5cbiAgICAgICAgY29tYmluZUxhdGVzdChbXG4gICAgICAgICAgdGhpcy5yZXNvbHZlSGVhZGluZyhwKSxcbiAgICAgICAgICB0aGlzLnJlc29sdmVUaXRsZShwKSxcbiAgICAgICAgICB0aGlzLnJlc29sdmVEZXNjcmlwdGlvbihwKSxcbiAgICAgICAgICB0aGlzLnJlc29sdmVCcmVhZGNydW1icyhwKSxcbiAgICAgICAgICB0aGlzLnJlc29sdmVJbWFnZShwKSxcbiAgICAgICAgXSlcbiAgICAgICksXG4gICAgICBtYXAoKFtoZWFkaW5nLCB0aXRsZSwgZGVzY3JpcHRpb24sIGJyZWFkY3J1bWJzLCBpbWFnZV0pID0+ICh7XG4gICAgICAgIGhlYWRpbmcsXG4gICAgICAgIHRpdGxlLFxuICAgICAgICBkZXNjcmlwdGlvbixcbiAgICAgICAgYnJlYWRjcnVtYnMsXG4gICAgICAgIGltYWdlLFxuICAgICAgfSkpXG4gICAgKTtcbiAgfVxuXG4gIHJlc29sdmVIZWFkaW5nKHByb2R1Y3Q6IFVJUHJvZHVjdCk6IE9ic2VydmFibGU8c3RyaW5nPiB7XG4gICAgcmV0dXJuIG9mKHByb2R1Y3QubmFtZSk7XG4gIH1cblxuICByZXNvbHZlVGl0bGUocHJvZHVjdDogVUlQcm9kdWN0KTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcbiAgICBsZXQgdGl0bGUgPSBwcm9kdWN0Lm5hbWU7XG4gICAgdGl0bGUgKz0gdGhpcy5yZXNvbHZlRmlyc3RDYXRlZ29yeShwcm9kdWN0KTtcbiAgICB0aXRsZSArPSB0aGlzLnJlc29sdmVNYW51ZmFjdHVyZXIocHJvZHVjdCk7XG5cbiAgICByZXR1cm4gb2YodGl0bGUpO1xuICB9XG5cbiAgcmVzb2x2ZURlc2NyaXB0aW9uKHByb2R1Y3Q6IFVJUHJvZHVjdCk6IE9ic2VydmFibGU8c3RyaW5nPiB7XG4gICAgcmV0dXJuIG9mKHByb2R1Y3Quc3VtbWFyeSk7XG4gIH1cblxuICByZXNvbHZlQnJlYWRjcnVtYnMocHJvZHVjdDogVUlQcm9kdWN0KTogT2JzZXJ2YWJsZTxhbnlbXT4ge1xuICAgIGNvbnN0IGJyZWFkY3J1bWJzID0gW107XG4gICAgYnJlYWRjcnVtYnMucHVzaCh7IGxhYmVsOiAnSG9tZScsIGxpbms6ICcvJyB9KTtcbiAgICBmb3IgKGNvbnN0IGMgb2YgcHJvZHVjdC5jYXRlZ29yaWVzKSB7XG4gICAgICBicmVhZGNydW1icy5wdXNoKHtcbiAgICAgICAgbGFiZWw6IGMubmFtZSB8fCBjLmNvZGUsXG4gICAgICAgIGxpbms6ICcvYy8nICsgYy5jb2RlLFxuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBvZihicmVhZGNydW1icyk7XG4gIH1cblxuICByZXNvbHZlSW1hZ2UocHJvZHVjdDogYW55KTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcbiAgICBsZXQgcmVzdWx0O1xuICAgIGlmIChcbiAgICAgIHByb2R1Y3QuaW1hZ2VzICYmXG4gICAgICBwcm9kdWN0LmltYWdlcy5QUklNQVJZICYmXG4gICAgICBwcm9kdWN0LmltYWdlcy5QUklNQVJZLnpvb20gJiZcbiAgICAgIHByb2R1Y3QuaW1hZ2VzLlBSSU1BUlkuem9vbS51cmxcbiAgICApIHtcbiAgICAgIHJlc3VsdCA9IHByb2R1Y3QuaW1hZ2VzLlBSSU1BUlkuem9vbS51cmw7XG4gICAgfVxuICAgIHJldHVybiBvZihyZXN1bHQpO1xuICB9XG5cbiAgcHJpdmF0ZSByZXNvbHZlRmlyc3RDYXRlZ29yeShwcm9kdWN0OiBVSVByb2R1Y3QpOiBzdHJpbmcge1xuICAgIGxldCBmaXJzdENhdGVnb3J5O1xuICAgIGlmIChwcm9kdWN0LmNhdGVnb3JpZXMgJiYgcHJvZHVjdC5jYXRlZ29yaWVzLmxlbmd0aCA+IDApIHtcbiAgICAgIGZpcnN0Q2F0ZWdvcnkgPSBwcm9kdWN0LmNhdGVnb3JpZXNbMF07XG4gICAgfVxuICAgIHJldHVybiBmaXJzdENhdGVnb3J5XG4gICAgICA/IGAgfCAke2ZpcnN0Q2F0ZWdvcnkubmFtZSB8fCBmaXJzdENhdGVnb3J5LmNvZGV9YFxuICAgICAgOiAnJztcbiAgfVxuXG4gIHByaXZhdGUgcmVzb2x2ZU1hbnVmYWN0dXJlcihwcm9kdWN0OiBVSVByb2R1Y3QpOiBzdHJpbmcge1xuICAgIHJldHVybiBwcm9kdWN0Lm1hbnVmYWN0dXJlciA/IGAgfCAke3Byb2R1Y3QubWFudWZhY3R1cmVyfWAgOiAnJztcbiAgfVxufVxuIl19