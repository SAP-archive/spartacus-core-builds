import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { combineLatest, of } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';
import { PageRobotsMeta } from '../../cms/model/page.model';
import { PageMetaResolver } from '../../cms/page/page-meta.resolver';
import { TranslationService } from '../../i18n/translation.service';
import { PageType } from '../../model/cms.model';
import { RoutingService } from '../../routing/facade/routing.service';
import { ProductService } from '../facade/product.service';
import { ProductScope } from '../model/product-scope';
import * as i0 from "@angular/core";
import * as i1 from "../../routing/facade/routing.service";
import * as i2 from "../facade/product.service";
import * as i3 from "../../i18n/translation.service";
/**
 * Resolves the page data for the Product Detail Page
 * based on the `PageType.PRODUCT_PAGE`.
 *
 * The page title, heading, description, breadcrumbs and
 * first GALLERY image are resolved if available in the data.
 */
let ProductPageMetaResolver = class ProductPageMetaResolver extends PageMetaResolver {
    constructor(routingService, productService, translation) {
        super();
        this.routingService = routingService;
        this.productService = productService;
        this.translation = translation;
        // reusable observable for product data based on the current page
        this.product$ = this.routingService.getRouterState().pipe(map(state => state.state.params['productCode']), filter(code => !!code), switchMap(code => this.productService.get(code, ProductScope.DETAILS)), filter(Boolean));
        this.pageType = PageType.PRODUCT_PAGE;
    }
    /**
     * Resolves the page heading for the Product Detail Page.
     * The page heading is used in the UI (`<h1>`), where as the page
     * title is used by the browser and crawlers.
     */
    resolveHeading() {
        return this.product$.pipe(switchMap((p) => this.translation.translate('pageMetaResolver.product.heading', {
            heading: p.name,
        })));
    }
    /**
     * Resolves the page title for the Product Detail Page. The page title
     * is resolved with the product name, the first category and the manufactorer.
     * The page title used by the browser (history, tabs) and crawlers.
     */
    resolveTitle() {
        return this.product$.pipe(switchMap((p) => {
            let title = p.name;
            title += this.resolveFirstCategory(p);
            title += this.resolveManufacturer(p);
            return this.translation.translate('pageMetaResolver.product.title', {
                title: title,
            });
        }));
    }
    /**
     * Resolves the page description for the Product Detail Page. The description
     * is based on the `product.summary`.
     */
    resolveDescription() {
        return this.product$.pipe(switchMap((p) => this.translation.translate('pageMetaResolver.product.description', {
            description: p.summary,
        })));
    }
    /**
     * Resolves breadcrumbs for the Product Detail Page. The breadcrumbs are driven by
     * a static home page crum and a crumb for each category.
     */
    resolveBreadcrumbs() {
        return combineLatest([
            this.product$.pipe(),
            this.translation.translate('common.home'),
        ]).pipe(map(([p, label]) => {
            const breadcrumbs = [];
            breadcrumbs.push({ label: label, link: '/' });
            for (const { name, code, url } of p.categories || []) {
                breadcrumbs.push({
                    label: name || code,
                    link: url,
                });
            }
            return breadcrumbs;
        }));
    }
    /**
     * Resolves the main page image for the Product Detail Page. The product image
     * is based on the PRIMARY product image. The zoom format is used by default.
     */
    resolveImage() {
        return this.product$.pipe(map((p) => {
            var _a, _b;
            return ((_b = ((_a = p.images) === null || _a === void 0 ? void 0 : _a.PRIMARY).zoom) === null || _b === void 0 ? void 0 : _b.url) ? p.images.PRIMARY.zoom.url
                : null;
        }));
    }
    resolveFirstCategory(product) {
        var _a;
        let firstCategory;
        if (((_a = product.categories) === null || _a === void 0 ? void 0 : _a.length) > 0) {
            firstCategory = product.categories[0];
        }
        return firstCategory
            ? ` | ${firstCategory.name || firstCategory.code}`
            : '';
    }
    resolveManufacturer(product) {
        return product.manufacturer ? ` | ${product.manufacturer}` : '';
    }
    /**
     * Resolves the robot information for the Product Detail Page. The
     * robot instruction defaults to FOLLOW and INDEX for all product pages,
     * regardless of whether they're purchasable or not.
     */
    resolveRobots() {
        return of([PageRobotsMeta.FOLLOW, PageRobotsMeta.INDEX]);
    }
};
ProductPageMetaResolver.ctorParameters = () => [
    { type: RoutingService },
    { type: ProductService },
    { type: TranslationService }
];
ProductPageMetaResolver.ɵprov = i0.ɵɵdefineInjectable({ factory: function ProductPageMetaResolver_Factory() { return new ProductPageMetaResolver(i0.ɵɵinject(i1.RoutingService), i0.ɵɵinject(i2.ProductService), i0.ɵɵinject(i3.TranslationService)); }, token: ProductPageMetaResolver, providedIn: "root" });
ProductPageMetaResolver = __decorate([
    Injectable({
        providedIn: 'root',
    })
], ProductPageMetaResolver);
export { ProductPageMetaResolver };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1wYWdlLW1ldGEucmVzb2x2ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvcHJvZHVjdC9zZXJ2aWNlcy9wcm9kdWN0LXBhZ2UtbWV0YS5yZXNvbHZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsYUFBYSxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNyRCxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4RCxPQUFPLEVBQWtCLGNBQWMsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQzVFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBU3JFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUVqRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDdEUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzNELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7Ozs7QUFFdEQ7Ozs7OztHQU1HO0FBSUgsSUFBYSx1QkFBdUIsR0FBcEMsTUFBYSx1QkFBd0IsU0FBUSxnQkFBZ0I7SUFnQjNELFlBQ1ksY0FBOEIsRUFDOUIsY0FBOEIsRUFDOUIsV0FBK0I7UUFFekMsS0FBSyxFQUFFLENBQUM7UUFKRSxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLGdCQUFXLEdBQVgsV0FBVyxDQUFvQjtRQVgzQyxpRUFBaUU7UUFDdkQsYUFBUSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMs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b3J0IHsgY29tYmluZUxhdGVzdCwgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgbWFwLCBzd2l0Y2hNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBCcmVhZGNydW1iTWV0YSwgUGFnZVJvYm90c01ldGEgfSBmcm9tICcuLi8uLi9jbXMvbW9kZWwvcGFnZS5tb2RlbCc7XG5pbXBvcnQgeyBQYWdlTWV0YVJlc29sdmVyIH0gZnJvbSAnLi4vLi4vY21zL3BhZ2UvcGFnZS1tZXRhLnJlc29sdmVyJztcbmltcG9ydCB7XG4gIFBhZ2VCcmVhZGNydW1iUmVzb2x2ZXIsXG4gIFBhZ2VEZXNjcmlwdGlvblJlc29sdmVyLFxuICBQYWdlSGVhZGluZ1Jlc29sdmVyLFxuICBQYWdlSW1hZ2VSZXNvbHZlcixcbiAgUGFnZVJvYm90c1Jlc29sdmVyLFxuICBQYWdlVGl0bGVSZXNvbHZlcixcbn0gZnJvbSAnLi4vLi4vY21zL3BhZ2UvcGFnZS5yZXNvbHZlcnMnO1xuaW1wb3J0IHsgVHJhbnNsYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vaTE4bi90cmFuc2xhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IFBhZ2VUeXBlIH0gZnJvbSAnLi4vLi4vbW9kZWwvY21zLm1vZGVsJztcbmltcG9ydCB7IFByb2R1Y3QgfSBmcm9tICcuLi8uLi9tb2RlbC9wcm9kdWN0Lm1vZGVsJztcbmltcG9ydCB7IFJvdXRpbmdTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vcm91dGluZy9mYWNhZGUvcm91dGluZy5zZXJ2aWNlJztcbmltcG9ydCB7IFByb2R1Y3RTZXJ2aWNlIH0gZnJvbSAnLi4vZmFjYWRlL3Byb2R1Y3Quc2VydmljZSc7XG5pbXBvcnQgeyBQcm9kdWN0U2NvcGUgfSBmcm9tICcuLi9tb2RlbC9wcm9kdWN0LXNjb3BlJztcblxuLyoqXG4gKiBSZXNvbHZlcyB0aGUgcGFnZSBkYXRhIGZvciB0aGUgUHJvZHVjdCBEZXRhaWwgUGFnZVxuICogYmFzZWQgb24gdGhlIGBQYWdlVHlwZS5QUk9EVUNUX1BBR0VgLlxuICpcbiAqIFRoZSBwYWdlIHRpdGxlLCBoZWFkaW5nLCBkZXNjcmlwdGlvbiwgYnJlYWRjcnVtYnMgYW5kXG4gKiBmaXJzdCBHQUxMRVJZIGltYWdlIGFyZSByZXNvbHZlZCBpZiBhdmFpbGFibGUgaW4gdGhlIGRhdGEuXG4gKi9cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBQcm9kdWN0UGFnZU1ldGFSZXNvbHZlciBleHRlbmRzIFBhZ2VNZXRhUmVzb2x2ZXJcbiAgaW1wbGVtZW50c1xuICAgIFBhZ2VIZWFkaW5nUmVzb2x2ZXIsXG4gICAgUGFnZVRpdGxlUmVzb2x2ZXIsXG4gICAgUGFnZURlc2NyaXB0aW9uUmVzb2x2ZXIsXG4gICAgUGFnZUJyZWFkY3J1bWJSZXNvbHZlcixcbiAgICBQYWdlSW1hZ2VSZXNvbHZlcixcbiAgICBQYWdlUm9ib3RzUmVzb2x2ZXIge1xuICAvLyByZXVzYWJsZSBvYnNlcnZhYmxlIGZvciBwcm9kdWN0IGRhdGEgYmFzZWQgb24gdGhlIGN1cnJlbnQgcGFnZVxuICBwcm90ZWN0ZWQgcHJvZHVjdCQgPSB0aGlzLnJvdXRpbmdTZXJ2aWNlLmdldFJvdXRlclN0YXRlKCkucGlwZShcbiAgICBtYXAoc3RhdGUgPT4gc3RhdGUuc3RhdGUucGFyYW1zWydwcm9kdWN0Q29kZSddKSxcbiAgICBmaWx0ZXIoY29kZSA9PiAhIWNvZGUpLFxuICAgIHN3aXRjaE1hcChjb2RlID0+IHRoaXMucHJvZHVjdFNlcnZpY2UuZ2V0KGNvZGUsIFByb2R1Y3RTY29wZS5ERVRBSUxTKSksXG4gICAgZmlsdGVyKEJvb2xlYW4pXG4gICk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIHJvdXRpbmdTZXJ2aWNlOiBSb3V0aW5nU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgcHJvZHVjdFNlcnZpY2U6IFByb2R1Y3RTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCB0cmFuc2xhdGlvbjogVHJhbnNsYXRpb25TZXJ2aWNlXG4gICkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5wYWdlVHlwZSA9IFBhZ2VUeXBlLlBST0RVQ1RfUEFHRTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXNvbHZlcyB0aGUgcGFnZSBoZWFkaW5nIGZvciB0aGUgUHJvZHVjdCBEZXRhaWwgUGFnZS5cbiAgICogVGhlIHBhZ2UgaGVhZGluZyBpcyB1c2VkIGluIHRoZSBVSSAoYDxoMT5gKSwgd2hlcmUgYXMgdGhlIHBhZ2VcbiAgICogdGl0bGUgaXMgdXNlZCBieSB0aGUgYnJvd3NlciBhbmQgY3Jhd2xlcnMuXG4gICAqL1xuICByZXNvbHZlSGVhZGluZygpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xuICAgIHJldHVybiB0aGlzLnByb2R1Y3QkLnBpcGUoXG4gICAgICBzd2l0Y2hNYXAoKHA6IFByb2R1Y3QpID0+XG4gICAgICAgIHRoaXMudHJhbnNsYXRpb24udHJhbnNsYXRlKCdwYWdlTWV0YVJlc29sdmVyLnByb2R1Y3QuaGVhZGluZycsIHtcbiAgICAgICAgICBoZWFkaW5nOiBwLm5hbWUsXG4gICAgICAgIH0pXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXNvbHZlcyB0aGUgcGFnZSB0aXRsZSBmb3IgdGhlIFByb2R1Y3QgRGV0YWlsIFBhZ2UuIFRoZSBwYWdlIHRpdGxlXG4gICAqIGlzIHJlc29sdmVkIHdpdGggdGhlIHByb2R1Y3QgbmFtZSwgdGhlIGZpcnN0IGNhdGVnb3J5IGFuZCB0aGUgbWFudWZhY3RvcmVyLlxuICAgKiBUaGUgcGFnZSB0aXRsZSB1c2VkIGJ5IHRoZSBicm93c2VyIChoaXN0b3J5LCB0YWJzKSBhbmQgY3Jhd2xlcnMuXG4gICAqL1xuICByZXNvbHZlVGl0bGUoKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gdGhpcy5wcm9kdWN0JC5waXBlKFxuICAgICAgc3dpdGNoTWFwKChwOiBQcm9kdWN0KSA9PiB7XG4gICAgICAgIGxldCB0aXRsZSA9IHAubmFtZTtcbiAgICAgICAgdGl0bGUgKz0gdGhpcy5yZXNvbHZlRmlyc3RDYXRlZ29yeShwKTtcbiAgICAgICAgdGl0bGUgKz0gdGhpcy5yZXNvbHZlTWFudWZhY3R1cmVyKHApO1xuICAgICAgICByZXR1cm4gdGhpcy50cmFuc2xhdGlvbi50cmFuc2xhdGUoJ3BhZ2VNZXRhUmVzb2x2ZXIucHJvZHVjdC50aXRsZScsIHtcbiAgICAgICAgICB0aXRsZTogdGl0bGUsXG4gICAgICAgIH0pO1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlc29sdmVzIHRoZSBwYWdlIGRlc2NyaXB0aW9uIGZvciB0aGUgUHJvZHVjdCBEZXRhaWwgUGFnZS4gVGhlIGRlc2NyaXB0aW9uXG4gICAqIGlzIGJhc2VkIG9uIHRoZSBgcHJvZHVjdC5zdW1tYXJ5YC5cbiAgICovXG4gIHJlc29sdmVEZXNjcmlwdGlvbigpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xuICAgIHJldHVybiB0aGlzLnByb2R1Y3QkLnBpcGUoXG4gICAgICBzd2l0Y2hNYXAoKHA6IFByb2R1Y3QpID0+XG4gICAgICAgIHRoaXMudHJhbnNsYXRpb24udHJhbnNsYXRlKCdwYWdlTWV0YVJlc29sdmVyLnByb2R1Y3QuZGVzY3JpcHRpb24nLCB7XG4gICAgICAgICAgZGVzY3JpcHRpb246IHAuc3VtbWFyeSxcbiAgICAgICAgfSlcbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlc29sdmVzIGJyZWFkY3J1bWJzIGZvciB0aGUgUHJvZHVjdCBEZXRhaWwgUGFnZS4gVGhlIGJyZWFkY3J1bWJzIGFyZSBkcml2ZW4gYnlcbiAgICogYSBzdGF0aWMgaG9tZSBwYWdlIGNydW0gYW5kIGEgY3J1bWIgZm9yIGVhY2ggY2F0ZWdvcnkuXG4gICAqL1xuICByZXNvbHZlQnJlYWRjcnVtYnMoKTogT2JzZXJ2YWJsZTxCcmVhZGNydW1iTWV0YVtdPiB7XG4gICAgcmV0dXJuIGNvbWJpbmVMYXRlc3QoW1xuICAgICAgdGhpcy5wcm9kdWN0JC5waXBlKCksXG4gICAgICB0aGlzLnRyYW5zbGF0aW9uLnRyYW5zbGF0ZSgnY29tbW9uLmhvbWUnKSxcbiAgICBdKS5waXBlKFxuICAgICAgbWFwKChbcCwgbGFiZWxdOiBbUHJvZHVjdCwgc3RyaW5nXSkgPT4ge1xuICAgICAgICBjb25zdCBicmVhZGNydW1icyA9IFtdO1xuICAgICAgICBicmVhZGNydW1icy5wdXNoKHsgbGFiZWw6IGxhYmVsLCBsaW5rOiAnLycgfSk7XG4gICAgICAgIGZvciAoY29uc3QgeyBuYW1lLCBjb2RlLCB1cmwgfSBvZiBwLmNhdGVnb3JpZXMgfHwgW10pIHtcbiAgICAgICAgICBicmVhZGNydW1icy5wdXNoKHtcbiAgICAgICAgICAgIGxhYmVsOiBuYW1lIHx8IGNvZGUsXG4gICAgICAgICAgICBsaW5rOiB1cmwsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGJyZWFkY3J1bWJzO1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlc29sdmVzIHRoZSBtYWluIHBhZ2UgaW1hZ2UgZm9yIHRoZSBQcm9kdWN0IERldGFpbCBQYWdlLiBUaGUgcHJvZHVjdCBpbWFnZVxuICAgKiBpcyBiYXNlZCBvbiB0aGUgUFJJTUFSWSBwcm9kdWN0IGltYWdlLiBUaGUgem9vbSBmb3JtYXQgaXMgdXNlZCBieSBkZWZhdWx0LlxuICAgKi9cbiAgcmVzb2x2ZUltYWdlKCk6IE9ic2VydmFibGU8c3RyaW5nPiB7XG4gICAgcmV0dXJuIHRoaXMucHJvZHVjdCQucGlwZShcbiAgICAgIG1hcCgocDogUHJvZHVjdCkgPT5cbiAgICAgICAgKDxhbnk+cC5pbWFnZXM/LlBSSU1BUlkpLnpvb20/LnVybFxuICAgICAgICAgID8gKDxhbnk+cC5pbWFnZXMuUFJJTUFSWSkuem9vbS51cmxcbiAgICAgICAgICA6IG51bGxcbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgcHJvdGVjdGVkIHJlc29sdmVGaXJzdENhdGVnb3J5KHByb2R1Y3Q6IFByb2R1Y3QpOiBzdHJpbmcge1xuICAgIGxldCBmaXJzdENhdGVnb3J5O1xuICAgIGlmIChwcm9kdWN0LmNhdGVnb3JpZXM/Lmxlbmd0aCA+IDApIHtcbiAgICAgIGZpcnN0Q2F0ZWdvcnkgPSBwcm9kdWN0LmNhdGVnb3JpZXNbMF07XG4gICAgfVxuICAgIHJldHVybiBmaXJzdENhdGVnb3J5XG4gICAgICA/IGAgfCAke2ZpcnN0Q2F0ZWdvcnkubmFtZSB8fCBmaXJzdENhdGVnb3J5LmNvZGV9YFxuICAgICAgOiAnJztcbiAgfVxuXG4gIHByb3RlY3RlZCByZXNvbHZlTWFudWZhY3R1cmVyKHByb2R1Y3Q6IFByb2R1Y3QpOiBzdHJpbmcge1xuICAgIHJldHVybiBwcm9kdWN0Lm1hbnVmYWN0dXJlciA/IGAgfCAke3Byb2R1Y3QubWFudWZhY3R1cmVyfWAgOiAnJztcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXNvbHZlcyB0aGUgcm9ib3QgaW5mb3JtYXRpb24gZm9yIHRoZSBQcm9kdWN0IERldGFpbCBQYWdlLiBUaGVcbiAgICogcm9ib3QgaW5zdHJ1Y3Rpb24gZGVmYXVsdHMgdG8gRk9MTE9XIGFuZCBJTkRFWCBmb3IgYWxsIHByb2R1Y3QgcGFnZXMsXG4gICAqIHJlZ2FyZGxlc3Mgb2Ygd2hldGhlciB0aGV5J3JlIHB1cmNoYXNhYmxlIG9yIG5vdC5cbiAgICovXG4gIHJlc29sdmVSb2JvdHMoKTogT2JzZXJ2YWJsZTxQYWdlUm9ib3RzTWV0YVtdPiB7XG4gICAgcmV0dXJuIG9mKFtQYWdlUm9ib3RzTWV0YS5GT0xMT1csIFBhZ2VSb2JvdHNNZXRhLklOREVYXSk7XG4gIH1cbn1cbiJdfQ==