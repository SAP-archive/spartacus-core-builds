import { Injectable, Optional } from '@angular/core';
import { combineLatest, of } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';
import { PageRobotsMeta } from '../../cms/model/page.model';
import { BasePageMetaResolver } from '../../cms/page/base-page-meta.resolver';
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
export class ProductPageMetaResolver extends PageMetaResolver {
    constructor(routingService, productService, translation, basePageMetaResolver) {
        super();
        this.routingService = routingService;
        this.productService = productService;
        this.translation = translation;
        this.basePageMetaResolver = basePageMetaResolver;
        // reusable observable for product data based on the current page
        this.product$ = this.routingService.getRouterState().pipe(map((state) => state.state.params['productCode']), filter((code) => !!code), switchMap((code) => this.productService.get(code, ProductScope.DETAILS)), filter(Boolean));
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
     * is resolved with the product name, the first category and the manufacturer.
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
     * a static home page crumb and a crumb for each category.
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
            var _a, _b, _c;
            return ((_c = (_b = (_a = p.images) === null || _a === void 0 ? void 0 : _a.PRIMARY) === null || _b === void 0 ? void 0 : _b.zoom) === null || _c === void 0 ? void 0 : _c.url) ? p.images.PRIMARY.zoom.url
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
    // TODO(#10467): resolve robots from `BasePageMetaResolver` instead
    resolveRobots() {
        return of([PageRobotsMeta.FOLLOW, PageRobotsMeta.INDEX]);
    }
}
ProductPageMetaResolver.ɵprov = i0.ɵɵdefineInjectable({ factory: function ProductPageMetaResolver_Factory() { return new ProductPageMetaResolver(i0.ɵɵinject(i1.RoutingService), i0.ɵɵinject(i2.ProductService), i0.ɵɵinject(i3.TranslationService)); }, token: ProductPageMetaResolver, providedIn: "root" });
ProductPageMetaResolver.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
ProductPageMetaResolver.ctorParameters = () => [
    { type: RoutingService },
    { type: ProductService },
    { type: TranslationService },
    { type: BasePageMetaResolver, decorators: [{ type: Optional }] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1wYWdlLW1ldGEucmVzb2x2ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JlL3NyYy9wcm9kdWN0L3NlcnZpY2VzL3Byb2R1Y3QtcGFnZS1tZXRhLnJlc29sdmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3JELE9BQU8sRUFBRSxhQUFhLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3JELE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3hELE9BQU8sRUFBa0IsY0FBYyxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDNUUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDOUUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFTckUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDcEUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRWpELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUN0RSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDM0QsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHdCQUF3QixDQUFDOzs7OztBQUV0RDs7Ozs7O0dBTUc7QUFJSCxNQUFNLE9BQU8sdUJBQ1gsU0FBUSxnQkFBZ0I7SUFnQ3hCLFlBQ1ksY0FBOEIsRUFDOUIsY0FBOEIsRUFDOUIsV0FBK0IsRUFDbkIsb0JBQTJDO1FBRWpFLEtBQUssRUFBRSxDQUFDO1FBTEUsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixnQkFBVyxH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LHVCQWdFeEIsUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBjb21iaW5lTGF0ZXN0LCBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCBtYXAsIHN3aXRjaE1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEJyZWFkY3J1bWJNZXRhLCBQYWdlUm9ib3RzTWV0YSB9IGZyb20gJy4uLy4uL2Ntcy9tb2RlbC9wYWdlLm1vZGVsJztcbmltcG9ydCB7IEJhc2VQYWdlTWV0YVJlc29sdmVyIH0gZnJvbSAnLi4vLi4vY21zL3BhZ2UvYmFzZS1wYWdlLW1ldGEucmVzb2x2ZXInO1xuaW1wb3J0IHsgUGFnZU1ldGFSZXNvbHZlciB9IGZyb20gJy4uLy4uL2Ntcy9wYWdlL3BhZ2UtbWV0YS5yZXNvbHZlcic7XG5pbXBvcnQge1xuICBQYWdlQnJlYWRjcnVtYlJlc29sdmVyLFxuICBQYWdlRGVzY3JpcHRpb25SZXNvbHZlcixcbiAgUGFnZUhlYWRpbmdSZXNvbHZlcixcbiAgUGFnZUltYWdlUmVzb2x2ZXIsXG4gIFBhZ2VSb2JvdHNSZXNvbHZlcixcbiAgUGFnZVRpdGxlUmVzb2x2ZXIsXG59IGZyb20gJy4uLy4uL2Ntcy9wYWdlL3BhZ2UucmVzb2x2ZXJzJztcbmltcG9ydCB7IFRyYW5zbGF0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uL2kxOG4vdHJhbnNsYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBQYWdlVHlwZSB9IGZyb20gJy4uLy4uL21vZGVsL2Ntcy5tb2RlbCc7XG5pbXBvcnQgeyBQcm9kdWN0IH0gZnJvbSAnLi4vLi4vbW9kZWwvcHJvZHVjdC5tb2RlbCc7XG5pbXBvcnQgeyBSb3V0aW5nU2VydmljZSB9IGZyb20gJy4uLy4uL3JvdXRpbmcvZmFjYWRlL3JvdXRpbmcuc2VydmljZSc7XG5pbXBvcnQgeyBQcm9kdWN0U2VydmljZSB9IGZyb20gJy4uL2ZhY2FkZS9wcm9kdWN0LnNlcnZpY2UnO1xuaW1wb3J0IHsgUHJvZHVjdFNjb3BlIH0gZnJvbSAnLi4vbW9kZWwvcHJvZHVjdC1zY29wZSc7XG5cbi8qKlxuICogUmVzb2x2ZXMgdGhlIHBhZ2UgZGF0YSBmb3IgdGhlIFByb2R1Y3QgRGV0YWlsIFBhZ2VcbiAqIGJhc2VkIG9uIHRoZSBgUGFnZVR5cGUuUFJPRFVDVF9QQUdFYC5cbiAqXG4gKiBUaGUgcGFnZSB0aXRsZSwgaGVhZGluZywgZGVzY3JpcHRpb24sIGJyZWFkY3J1bWJzIGFuZFxuICogZmlyc3QgR0FMTEVSWSBpbWFnZSBhcmUgcmVzb2x2ZWQgaWYgYXZhaWxhYmxlIGluIHRoZSBkYXRhLlxuICovXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgUHJvZHVjdFBhZ2VNZXRhUmVzb2x2ZXJcbiAgZXh0ZW5kcyBQYWdlTWV0YVJlc29sdmVyXG4gIGltcGxlbWVudHNcbiAgICBQYWdlSGVhZGluZ1Jlc29sdmVyLFxuICAgIFBhZ2VUaXRsZVJlc29sdmVyLFxuICAgIFBhZ2VEZXNjcmlwdGlvblJlc29sdmVyLFxuICAgIFBhZ2VCcmVhZGNydW1iUmVzb2x2ZXIsXG4gICAgUGFnZUltYWdlUmVzb2x2ZXIsXG4gICAgUGFnZVJvYm90c1Jlc29sdmVyIHtcbiAgLy8gcmV1c2FibGUgb2JzZXJ2YWJsZSBmb3IgcHJvZHVjdCBkYXRhIGJhc2VkIG9uIHRoZSBjdXJyZW50IHBhZ2VcbiAgcHJvdGVjdGVkIHByb2R1Y3QkID0gdGhpcy5yb3V0aW5nU2VydmljZS5nZXRSb3V0ZXJTdGF0ZSgpLnBpcGUoXG4gICAgbWFwKChzdGF0ZSkgPT4gc3RhdGUuc3RhdGUucGFyYW1zWydwcm9kdWN0Q29kZSddKSxcbiAgICBmaWx0ZXIoKGNvZGUpID0+ICEhY29kZSksXG4gICAgc3dpdGNoTWFwKChjb2RlKSA9PiB0aGlzLnByb2R1Y3RTZXJ2aWNlLmdldChjb2RlLCBQcm9kdWN0U2NvcGUuREVUQUlMUykpLFxuICAgIGZpbHRlcihCb29sZWFuKVxuICApO1xuXG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCBzaW5jZSAzLjEsIHdlJ2xsIHVzZSB0aGUgQmFzZVBhZ2VNZXRhUmVzb2x2ZXIgaW4gZnV0dXJlIHZlcnNpb25zXG4gICAqL1xuICAvLyBUT0RPKCMxMDQ2Nyk6IFJlbW92ZSBkZXByZWNhdGVkIGNvbnN0cnVjdG9yc1xuICBjb25zdHJ1Y3RvcihcbiAgICByb3V0aW5nU2VydmljZTogUm91dGluZ1NlcnZpY2UsXG4gICAgcHJvZHVjdFNlcnZpY2U6IFByb2R1Y3RTZXJ2aWNlLFxuICAgIHRyYW5zbGF0aW9uOiBUcmFuc2xhdGlvblNlcnZpY2VcbiAgKTtcbiAgY29uc3RydWN0b3IoXG4gICAgcm91dGluZ1NlcnZpY2U6IFJvdXRpbmdTZXJ2aWNlLFxuICAgIHByb2R1Y3RTZXJ2aWNlOiBQcm9kdWN0U2VydmljZSxcbiAgICB0cmFuc2xhdGlvbjogVHJhbnNsYXRpb25TZXJ2aWNlLFxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogdW5pZmllZC1zaWduYXR1cmVzXG4gICAgYmFzZVBhZ2VNZXRhUmVzb2x2ZXI/OiBCYXNlUGFnZU1ldGFSZXNvbHZlclxuICApO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgcm91dGluZ1NlcnZpY2U6IFJvdXRpbmdTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBwcm9kdWN0U2VydmljZTogUHJvZHVjdFNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHRyYW5zbGF0aW9uOiBUcmFuc2xhdGlvblNlcnZpY2UsXG4gICAgQE9wdGlvbmFsKCkgcHJvdGVjdGVkIGJhc2VQYWdlTWV0YVJlc29sdmVyPzogQmFzZVBhZ2VNZXRhUmVzb2x2ZXJcbiAgKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnBhZ2VUeXBlID0gUGFnZVR5cGUuUFJPRFVDVF9QQUdFO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlc29sdmVzIHRoZSBwYWdlIGhlYWRpbmcgZm9yIHRoZSBQcm9kdWN0IERldGFpbCBQYWdlLlxuICAgKiBUaGUgcGFnZSBoZWFkaW5nIGlzIHVzZWQgaW4gdGhlIFVJIChgPGgxPmApLCB3aGVyZSBhcyB0aGUgcGFnZVxuICAgKiB0aXRsZSBpcyB1c2VkIGJ5IHRoZSBicm93c2VyIGFuZCBjcmF3bGVycy5cbiAgICovXG4gIHJlc29sdmVIZWFkaW5nKCk6IE9ic2VydmFibGU8c3RyaW5nPiB7XG4gICAgcmV0dXJuIHRoaXMucHJvZHVjdCQucGlwZShcbiAgICAgIHN3aXRjaE1hcCgocDogUHJvZHVjdCkgPT5cbiAgICAgICAgdGhpcy50cmFuc2xhdGlvbi50cmFuc2xhdGUoJ3BhZ2VNZXRhUmVzb2x2ZXIucHJvZHVjdC5oZWFkaW5nJywge1xuICAgICAgICAgIGhlYWRpbmc6IHAubmFtZSxcbiAgICAgICAgfSlcbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlc29sdmVzIHRoZSBwYWdlIHRpdGxlIGZvciB0aGUgUHJvZHVjdCBEZXRhaWwgUGFnZS4gVGhlIHBhZ2UgdGl0bGVcbiAgICogaXMgcmVzb2x2ZWQgd2l0aCB0aGUgcHJvZHVjdCBuYW1lLCB0aGUgZmlyc3QgY2F0ZWdvcnkgYW5kIHRoZSBtYW51ZmFjdHVyZXIuXG4gICAqIFRoZSBwYWdlIHRpdGxlIHVzZWQgYnkgdGhlIGJyb3dzZXIgKGhpc3RvcnksIHRhYnMpIGFuZCBjcmF3bGVycy5cbiAgICovXG4gIHJlc29sdmVUaXRsZSgpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xuICAgIHJldHVybiB0aGlzLnByb2R1Y3QkLnBpcGUoXG4gICAgICBzd2l0Y2hNYXAoKHA6IFByb2R1Y3QpID0+IHtcbiAgICAgICAgbGV0IHRpdGxlID0gcC5uYW1lO1xuICAgICAgICB0aXRsZSArPSB0aGlzLnJlc29sdmVGaXJzdENhdGVnb3J5KHApO1xuICAgICAgICB0aXRsZSArPSB0aGlzLnJlc29sdmVNYW51ZmFjdHVyZXIocCk7XG4gICAgICAgIHJldHVybiB0aGlzLnRyYW5zbGF0aW9uLnRyYW5zbGF0ZSgncGFnZU1ldGFSZXNvbHZlci5wcm9kdWN0LnRpdGxlJywge1xuICAgICAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgICAgfSk7XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmVzb2x2ZXMgdGhlIHBhZ2UgZGVzY3JpcHRpb24gZm9yIHRoZSBQcm9kdWN0IERldGFpbCBQYWdlLiBUaGUgZGVzY3JpcHRpb25cbiAgICogaXMgYmFzZWQgb24gdGhlIGBwcm9kdWN0LnN1bW1hcnlgLlxuICAgKi9cbiAgcmVzb2x2ZURlc2NyaXB0aW9uKCk6IE9ic2VydmFibGU8c3RyaW5nPiB7XG4gICAgcmV0dXJuIHRoaXMucHJvZHVjdCQucGlwZShcbiAgICAgIHN3aXRjaE1hcCgocDogUHJvZHVjdCkgPT5cbiAgICAgICAgdGhpcy50cmFuc2xhdGlvbi50cmFuc2xhdGUoJ3BhZ2VNZXRhUmVzb2x2ZXIucHJvZHVjdC5kZXNjcmlwdGlvbicsIHtcbiAgICAgICAgICBkZXNjcmlwdGlvbjogcC5zdW1tYXJ5LFxuICAgICAgICB9KVxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmVzb2x2ZXMgYnJlYWRjcnVtYnMgZm9yIHRoZSBQcm9kdWN0IERldGFpbCBQYWdlLiBUaGUgYnJlYWRjcnVtYnMgYXJlIGRyaXZlbiBieVxuICAgKiBhIHN0YXRpYyBob21lIHBhZ2UgY3J1bWIgYW5kIGEgY3J1bWIgZm9yIGVhY2ggY2F0ZWdvcnkuXG4gICAqL1xuICByZXNvbHZlQnJlYWRjcnVtYnMoKTogT2JzZXJ2YWJsZTxCcmVhZGNydW1iTWV0YVtdPiB7XG4gICAgcmV0dXJuIGNvbWJpbmVMYXRlc3QoW1xuICAgICAgdGhpcy5wcm9kdWN0JC5waXBlKCksXG4gICAgICB0aGlzLnRyYW5zbGF0aW9uLnRyYW5zbGF0ZSgnY29tbW9uLmhvbWUnKSxcbiAgICBdKS5waXBlKFxuICAgICAgbWFwKChbcCwgbGFiZWxdOiBbUHJvZHVjdCwgc3RyaW5nXSkgPT4ge1xuICAgICAgICBjb25zdCBicmVhZGNydW1icyA9IFtdO1xuICAgICAgICBicmVhZGNydW1icy5wdXNoKHsgbGFiZWw6IGxhYmVsLCBsaW5rOiAnLycgfSk7XG4gICAgICAgIGZvciAoY29uc3QgeyBuYW1lLCBjb2RlLCB1cmwgfSBvZiBwLmNhdGVnb3JpZXMgfHwgW10pIHtcbiAgICAgICAgICBicmVhZGNydW1icy5wdXNoKHtcbiAgICAgICAgICAgIGxhYmVsOiBuYW1lIHx8IGNvZGUsXG4gICAgICAgICAgICBsaW5rOiB1cmwsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGJyZWFkY3J1bWJzO1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlc29sdmVzIHRoZSBtYWluIHBhZ2UgaW1hZ2UgZm9yIHRoZSBQcm9kdWN0IERldGFpbCBQYWdlLiBUaGUgcHJvZHVjdCBpbWFnZVxuICAgKiBpcyBiYXNlZCBvbiB0aGUgUFJJTUFSWSBwcm9kdWN0IGltYWdlLiBUaGUgem9vbSBmb3JtYXQgaXMgdXNlZCBieSBkZWZhdWx0LlxuICAgKi9cbiAgcmVzb2x2ZUltYWdlKCk6IE9ic2VydmFibGU8c3RyaW5nPiB7XG4gICAgcmV0dXJuIHRoaXMucHJvZHVjdCQucGlwZShcbiAgICAgIG1hcCgocDogUHJvZHVjdCkgPT5cbiAgICAgICAgKDxhbnk+cC5pbWFnZXM/LlBSSU1BUlkpPy56b29tPy51cmxcbiAgICAgICAgICA/ICg8YW55PnAuaW1hZ2VzLlBSSU1BUlkpLnpvb20udXJsXG4gICAgICAgICAgOiBudWxsXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIHByb3RlY3RlZCByZXNvbHZlRmlyc3RDYXRlZ29yeShwcm9kdWN0OiBQcm9kdWN0KTogc3RyaW5nIHtcbiAgICBsZXQgZmlyc3RDYXRlZ29yeTtcbiAgICBpZiAocHJvZHVjdC5jYXRlZ29yaWVzPy5sZW5ndGggPiAwKSB7XG4gICAgICBmaXJzdENhdGVnb3J5ID0gcHJvZHVjdC5jYXRlZ29yaWVzWzBdO1xuICAgIH1cbiAgICByZXR1cm4gZmlyc3RDYXRlZ29yeVxuICAgICAgPyBgIHwgJHtmaXJzdENhdGVnb3J5Lm5hbWUgfHwgZmlyc3RDYXRlZ29yeS5jb2RlfWBcbiAgICAgIDogJyc7XG4gIH1cblxuICBwcm90ZWN0ZWQgcmVzb2x2ZU1hbnVmYWN0dXJlcihwcm9kdWN0OiBQcm9kdWN0KTogc3RyaW5nIHtcbiAgICByZXR1cm4gcHJvZHVjdC5tYW51ZmFjdHVyZXIgPyBgIHwgJHtwcm9kdWN0Lm1hbnVmYWN0dXJlcn1gIDogJyc7XG4gIH1cblxuICAvKipcbiAgICogUmVzb2x2ZXMgdGhlIHJvYm90IGluZm9ybWF0aW9uIGZvciB0aGUgUHJvZHVjdCBEZXRhaWwgUGFnZS4gVGhlXG4gICAqIHJvYm90IGluc3RydWN0aW9uIGRlZmF1bHRzIHRvIEZPTExPVyBhbmQgSU5ERVggZm9yIGFsbCBwcm9kdWN0IHBhZ2VzLFxuICAgKiByZWdhcmRsZXNzIG9mIHdoZXRoZXIgdGhleSdyZSBwdXJjaGFzYWJsZSBvciBub3QuXG4gICAqL1xuICAvLyBUT0RPKCMxMDQ2Nyk6IHJlc29sdmUgcm9ib3RzIGZyb20gYEJhc2VQYWdlTWV0YVJlc29sdmVyYCBpbnN0ZWFkXG4gIHJlc29sdmVSb2JvdHMoKTogT2JzZXJ2YWJsZTxQYWdlUm9ib3RzTWV0YVtdPiB7XG4gICAgcmV0dXJuIG9mKFtQYWdlUm9ib3RzTWV0YS5GT0xMT1csIFBhZ2VSb2JvdHNNZXRhLklOREVYXSk7XG4gIH1cbn1cbiJdfQ==