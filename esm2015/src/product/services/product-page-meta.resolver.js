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
export class ProductPageMetaResolver extends PageMetaResolver {
    constructor(routingService, productService, translation) {
        super();
        this.routingService = routingService;
        this.productService = productService;
        this.translation = translation;
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
    { type: TranslationService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1wYWdlLW1ldGEucmVzb2x2ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JlL3NyYy9wcm9kdWN0L3NlcnZpY2VzL3Byb2R1Y3QtcGFnZS1tZXRhLnJlc29sdmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGFBQWEsRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDckQsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEQsT0FBTyxFQUFrQixjQUFjLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUM1RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQVNyRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNwRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFakQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7Ozs7O0FBRXREOzs7Ozs7R0FNRztBQUlILE1BQU0sT0FBTyx1QkFDWCxTQUFRLGdCQUFnQjtJQWdCeEIsWUFDWSxjQUE4QixFQUM5QixjQUE4QixFQUM5QixXQUErQjtRQUV6QyxLQUFLLEVBQUUsQ0FBQztRQUpFLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsZ0JBQVcsR0FBWCxXQUFXLENBQW9CO1FBWDNDLGlFQUFpRTtRQUN2RCxhQUFRLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxJQUFJLENBQzVELEdBQUcsQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUMsRUFDakQsTUFBTSxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQ3hCLFNBQVMsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUN4RSxNQUFNLENBQUMsT0FBTyxDQUFDLENBQ2hCLENBQUM7UUFRQSxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQyxZQUFZLENBQUM7SUFDeEMsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxjQUFjO1FBQ1osT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDdkIsU0FBUyxDQUFDLENBQUMsQ0FBVSxFQUFFLEVBQUUsQ0FDdkIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsa0NBQWtDLEVBQUU7WUFDN0QsT0FBTyxFQUFFLENBQUMsQ0FBQyxJQUFJO1NBQ2hCLENBQUMsQ0FDSCxDQUNGLENBQUM7SUFDSixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILFlBQVk7UUFDVixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUN2QixTQUFTLENBQUMsQ0FBQyxDQUFVLEVBQUUsRUFBRTtZQUN2QixJQUFJLEtBQUssR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ25CLEtBQUssSUFBSSxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdEMsS0FBSyxJQUFJLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNyQyxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLGdDQUFnQyxFQUFFO2dCQUNsRSxLQUFLLEVBQUUsS0FBSzthQUNiLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUNILENBQUM7SUFDSixDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsa0JBQWtCO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ3ZCLFNBQVMsQ0FBQyxDQUFDLENBQVUsRUFBRSxFQUFFLENBQ3ZCLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLHNDQUFzQyxFQUFFO1lBQ2pFLFdBQVcsRUFBRSxDQUFDLENBQUMsT0FBTztTQUN2QixDQUFDLENBQ0gsQ0FDRixDQUFDO0lBQ0osQ0FBQztJQUVEOzs7T0FHRztJQUNILGtCQUFrQjtRQUNoQixPQUFPLGFBQWEsQ0FBQztZQUNuQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRTtZQUNwQixJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUM7U0FDMUMsQ0FBQyxDQUFDLElBQUksQ0FDTCxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQW9CLEVBQUUsRUFBRTtZQUNwQyxNQUFNLFdBQVcsR0FBRyxFQUFFLENBQUM7WUFDdkIsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7WUFDOUMsS0FBSyxNQUFNLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUMsVUFBVSxJQUFJLEVBQUUsRUFBRTtnQkFDcEQsV0FBVyxDQUFDLElBQUksQ0FBQztvQkFDZixLQUFLLEVBQUUsSUFBSSxJQUFJLElBQUk7b0JBQ25CLElBQUksRUFBRSxHQUFHO2lCQUNWLENBQUMsQ0FBQzthQUNKO1lBQ0QsT0FBTyxXQUFXLENBQUM7UUFDckIsQ0FBQyxDQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7SUFFRDs7O09BR0c7SUFDSCxZQUFZO1FBQ1YsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDdkIsR0FBRyxDQUFDLENBQUMsQ0FBVSxFQUFFLEVBQUU7O1lBQ2pCLE9BQUEsYUFBQyxNQUFLLENBQUMsQ0FBQyxNQUFNLDBDQUFFLE9BQVEsMENBQUUsSUFBSSwwQ0FBRSxHQUFHLEVBQ2pDLENBQUMsQ0FBTyxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQVEsQ0FBQyxJQUFJLENBQUMsR0FBRztnQkFDbEMsQ0FBQyxDQUFDLElBQUksQ0FBQTtTQUFBLENBQ1QsQ0FDRixDQUFDO0lBQ0osQ0FBQztJQUVTLG9CQUFvQixDQUFDLE9BQWdCOztRQUM3QyxJQUFJLGFBQWEsQ0FBQztRQUNsQixJQUFJLE9BQUEsT0FBTyxDQUFDLFVBQVUsMENBQUUsTUFBTSxJQUFHLENBQUMsRUFBRTtZQUNsQyxhQUFhLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUN2QztRQUNELE9BQU8sYUFBYTtZQUNsQixDQUFDLENBQUMsTUFBTSxhQUFhLENBQUMsSUFBSSxJQUFJLGFBQWEsQ0FBQyxJQUFJLEVBQUU7WUFDbEQsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUNULENBQUM7SUFFUyxtQkFBbUIsQ0FBQyxPQUFnQjtRQUM1QyxPQUFPLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLE1BQU0sT0FBTyxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDbEUsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxhQUFhO1FBQ1gsT0FBTyxFQUFFLENBQUMsQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQzNELENBQUM7Ozs7WUF0SUYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7WUFiUSxjQUFjO1lBQ2QsY0FBYztZQUpkLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGNvbWJpbmVMYXRlc3QsIE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIG1hcCwgc3dpdGNoTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQnJlYWRjcnVtYk1ldGEsIFBhZ2VSb2JvdHNNZXRhIH0gZnJvbSAnLi4vLi4vY21zL21vZGVsL3BhZ2UubW9kZWwnO1xuaW1wb3J0IHsgUGFnZU1ldGFSZXNvbHZlciB9IGZyb20gJy4uLy4uL2Ntcy9wYWdlL3BhZ2UtbWV0YS5yZXNvbHZlcic7XG5pbXBvcnQge1xuICBQYWdlQnJlYWRjcnVtYlJlc29sdmVyLFxuICBQYWdlRGVzY3JpcHRpb25SZXNvbHZlcixcbiAgUGFnZUhlYWRpbmdSZXNvbHZlcixcbiAgUGFnZUltYWdlUmVzb2x2ZXIsXG4gIFBhZ2VSb2JvdHNSZXNvbHZlcixcbiAgUGFnZVRpdGxlUmVzb2x2ZXIsXG59IGZyb20gJy4uLy4uL2Ntcy9wYWdlL3BhZ2UucmVzb2x2ZXJzJztcbmltcG9ydCB7IFRyYW5zbGF0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uL2kxOG4vdHJhbnNsYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBQYWdlVHlwZSB9IGZyb20gJy4uLy4uL21vZGVsL2Ntcy5tb2RlbCc7XG5pbXBvcnQgeyBQcm9kdWN0IH0gZnJvbSAnLi4vLi4vbW9kZWwvcHJvZHVjdC5tb2RlbCc7XG5pbXBvcnQgeyBSb3V0aW5nU2VydmljZSB9IGZyb20gJy4uLy4uL3JvdXRpbmcvZmFjYWRlL3JvdXRpbmcuc2VydmljZSc7XG5pbXBvcnQgeyBQcm9kdWN0U2VydmljZSB9IGZyb20gJy4uL2ZhY2FkZS9wcm9kdWN0LnNlcnZpY2UnO1xuaW1wb3J0IHsgUHJvZHVjdFNjb3BlIH0gZnJvbSAnLi4vbW9kZWwvcHJvZHVjdC1zY29wZSc7XG5cbi8qKlxuICogUmVzb2x2ZXMgdGhlIHBhZ2UgZGF0YSBmb3IgdGhlIFByb2R1Y3QgRGV0YWlsIFBhZ2VcbiAqIGJhc2VkIG9uIHRoZSBgUGFnZVR5cGUuUFJPRFVDVF9QQUdFYC5cbiAqXG4gKiBUaGUgcGFnZSB0aXRsZSwgaGVhZGluZywgZGVzY3JpcHRpb24sIGJyZWFkY3J1bWJzIGFuZFxuICogZmlyc3QgR0FMTEVSWSBpbWFnZSBhcmUgcmVzb2x2ZWQgaWYgYXZhaWxhYmxlIGluIHRoZSBkYXRhLlxuICovXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgUHJvZHVjdFBhZ2VNZXRhUmVzb2x2ZXJcbiAgZXh0ZW5kcyBQYWdlTWV0YVJlc29sdmVyXG4gIGltcGxlbWVudHNcbiAgICBQYWdlSGVhZGluZ1Jlc29sdmVyLFxuICAgIFBhZ2VUaXRsZVJlc29sdmVyLFxuICAgIFBhZ2VEZXNjcmlwdGlvblJlc29sdmVyLFxuICAgIFBhZ2VCcmVhZGNydW1iUmVzb2x2ZXIsXG4gICAgUGFnZUltYWdlUmVzb2x2ZXIsXG4gICAgUGFnZVJvYm90c1Jlc29sdmVyIHtcbiAgLy8gcmV1c2FibGUgb2JzZXJ2YWJsZSBmb3IgcHJvZHVjdCBkYXRhIGJhc2VkIG9uIHRoZSBjdXJyZW50IHBhZ2VcbiAgcHJvdGVjdGVkIHByb2R1Y3QkID0gdGhpcy5yb3V0aW5nU2VydmljZS5nZXRSb3V0ZXJTdGF0ZSgpLnBpcGUoXG4gICAgbWFwKChzdGF0ZSkgPT4gc3RhdGUuc3RhdGUucGFyYW1zWydwcm9kdWN0Q29kZSddKSxcbiAgICBmaWx0ZXIoKGNvZGUpID0+ICEhY29kZSksXG4gICAgc3dpdGNoTWFwKChjb2RlKSA9PiB0aGlzLnByb2R1Y3RTZXJ2aWNlLmdldChjb2RlLCBQcm9kdWN0U2NvcGUuREVUQUlMUykpLFxuICAgIGZpbHRlcihCb29sZWFuKVxuICApO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCByb3V0aW5nU2VydmljZTogUm91dGluZ1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHByb2R1Y3RTZXJ2aWNlOiBQcm9kdWN0U2VydmljZSxcbiAgICBwcm90ZWN0ZWQgdHJhbnNsYXRpb246IFRyYW5zbGF0aW9uU2VydmljZVxuICApIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMucGFnZVR5cGUgPSBQYWdlVHlwZS5QUk9EVUNUX1BBR0U7XG4gIH1cblxuICAvKipcbiAgICogUmVzb2x2ZXMgdGhlIHBhZ2UgaGVhZGluZyBmb3IgdGhlIFByb2R1Y3QgRGV0YWlsIFBhZ2UuXG4gICAqIFRoZSBwYWdlIGhlYWRpbmcgaXMgdXNlZCBpbiB0aGUgVUkgKGA8aDE+YCksIHdoZXJlIGFzIHRoZSBwYWdlXG4gICAqIHRpdGxlIGlzIHVzZWQgYnkgdGhlIGJyb3dzZXIgYW5kIGNyYXdsZXJzLlxuICAgKi9cbiAgcmVzb2x2ZUhlYWRpbmcoKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gdGhpcy5wcm9kdWN0JC5waXBlKFxuICAgICAgc3dpdGNoTWFwKChwOiBQcm9kdWN0KSA9PlxuICAgICAgICB0aGlzLnRyYW5zbGF0aW9uLnRyYW5zbGF0ZSgncGFnZU1ldGFSZXNvbHZlci5wcm9kdWN0LmhlYWRpbmcnLCB7XG4gICAgICAgICAgaGVhZGluZzogcC5uYW1lLFxuICAgICAgICB9KVxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmVzb2x2ZXMgdGhlIHBhZ2UgdGl0bGUgZm9yIHRoZSBQcm9kdWN0IERldGFpbCBQYWdlLiBUaGUgcGFnZSB0aXRsZVxuICAgKiBpcyByZXNvbHZlZCB3aXRoIHRoZSBwcm9kdWN0IG5hbWUsIHRoZSBmaXJzdCBjYXRlZ29yeSBhbmQgdGhlIG1hbnVmYWN0b3Jlci5cbiAgICogVGhlIHBhZ2UgdGl0bGUgdXNlZCBieSB0aGUgYnJvd3NlciAoaGlzdG9yeSwgdGFicykgYW5kIGNyYXdsZXJzLlxuICAgKi9cbiAgcmVzb2x2ZVRpdGxlKCk6IE9ic2VydmFibGU8c3RyaW5nPiB7XG4gICAgcmV0dXJuIHRoaXMucHJvZHVjdCQucGlwZShcbiAgICAgIHN3aXRjaE1hcCgocDogUHJvZHVjdCkgPT4ge1xuICAgICAgICBsZXQgdGl0bGUgPSBwLm5hbWU7XG4gICAgICAgIHRpdGxlICs9IHRoaXMucmVzb2x2ZUZpcnN0Q2F0ZWdvcnkocCk7XG4gICAgICAgIHRpdGxlICs9IHRoaXMucmVzb2x2ZU1hbnVmYWN0dXJlcihwKTtcbiAgICAgICAgcmV0dXJuIHRoaXMudHJhbnNsYXRpb24udHJhbnNsYXRlKCdwYWdlTWV0YVJlc29sdmVyLnByb2R1Y3QudGl0bGUnLCB7XG4gICAgICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgICB9KTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXNvbHZlcyB0aGUgcGFnZSBkZXNjcmlwdGlvbiBmb3IgdGhlIFByb2R1Y3QgRGV0YWlsIFBhZ2UuIFRoZSBkZXNjcmlwdGlvblxuICAgKiBpcyBiYXNlZCBvbiB0aGUgYHByb2R1Y3Quc3VtbWFyeWAuXG4gICAqL1xuICByZXNvbHZlRGVzY3JpcHRpb24oKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gdGhpcy5wcm9kdWN0JC5waXBlKFxuICAgICAgc3dpdGNoTWFwKChwOiBQcm9kdWN0KSA9PlxuICAgICAgICB0aGlzLnRyYW5zbGF0aW9uLnRyYW5zbGF0ZSgncGFnZU1ldGFSZXNvbHZlci5wcm9kdWN0LmRlc2NyaXB0aW9uJywge1xuICAgICAgICAgIGRlc2NyaXB0aW9uOiBwLnN1bW1hcnksXG4gICAgICAgIH0pXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXNvbHZlcyBicmVhZGNydW1icyBmb3IgdGhlIFByb2R1Y3QgRGV0YWlsIFBhZ2UuIFRoZSBicmVhZGNydW1icyBhcmUgZHJpdmVuIGJ5XG4gICAqIGEgc3RhdGljIGhvbWUgcGFnZSBjcnVtIGFuZCBhIGNydW1iIGZvciBlYWNoIGNhdGVnb3J5LlxuICAgKi9cbiAgcmVzb2x2ZUJyZWFkY3J1bWJzKCk6IE9ic2VydmFibGU8QnJlYWRjcnVtYk1ldGFbXT4ge1xuICAgIHJldHVybiBjb21iaW5lTGF0ZXN0KFtcbiAgICAgIHRoaXMucHJvZHVjdCQucGlwZSgpLFxuICAgICAgdGhpcy50cmFuc2xhdGlvbi50cmFuc2xhdGUoJ2NvbW1vbi5ob21lJyksXG4gICAgXSkucGlwZShcbiAgICAgIG1hcCgoW3AsIGxhYmVsXTogW1Byb2R1Y3QsIHN0cmluZ10pID0+IHtcbiAgICAgICAgY29uc3QgYnJlYWRjcnVtYnMgPSBbXTtcbiAgICAgICAgYnJlYWRjcnVtYnMucHVzaCh7IGxhYmVsOiBsYWJlbCwgbGluazogJy8nIH0pO1xuICAgICAgICBmb3IgKGNvbnN0IHsgbmFtZSwgY29kZSwgdXJsIH0gb2YgcC5jYXRlZ29yaWVzIHx8IFtdKSB7XG4gICAgICAgICAgYnJlYWRjcnVtYnMucHVzaCh7XG4gICAgICAgICAgICBsYWJlbDogbmFtZSB8fCBjb2RlLFxuICAgICAgICAgICAgbGluazogdXJsLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBicmVhZGNydW1icztcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXNvbHZlcyB0aGUgbWFpbiBwYWdlIGltYWdlIGZvciB0aGUgUHJvZHVjdCBEZXRhaWwgUGFnZS4gVGhlIHByb2R1Y3QgaW1hZ2VcbiAgICogaXMgYmFzZWQgb24gdGhlIFBSSU1BUlkgcHJvZHVjdCBpbWFnZS4gVGhlIHpvb20gZm9ybWF0IGlzIHVzZWQgYnkgZGVmYXVsdC5cbiAgICovXG4gIHJlc29sdmVJbWFnZSgpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xuICAgIHJldHVybiB0aGlzLnByb2R1Y3QkLnBpcGUoXG4gICAgICBtYXAoKHA6IFByb2R1Y3QpID0+XG4gICAgICAgICg8YW55PnAuaW1hZ2VzPy5QUklNQVJZKT8uem9vbT8udXJsXG4gICAgICAgICAgPyAoPGFueT5wLmltYWdlcy5QUklNQVJZKS56b29tLnVybFxuICAgICAgICAgIDogbnVsbFxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICBwcm90ZWN0ZWQgcmVzb2x2ZUZpcnN0Q2F0ZWdvcnkocHJvZHVjdDogUHJvZHVjdCk6IHN0cmluZyB7XG4gICAgbGV0IGZpcnN0Q2F0ZWdvcnk7XG4gICAgaWYgKHByb2R1Y3QuY2F0ZWdvcmllcz8ubGVuZ3RoID4gMCkge1xuICAgICAgZmlyc3RDYXRlZ29yeSA9IHByb2R1Y3QuY2F0ZWdvcmllc1swXTtcbiAgICB9XG4gICAgcmV0dXJuIGZpcnN0Q2F0ZWdvcnlcbiAgICAgID8gYCB8ICR7Zmlyc3RDYXRlZ29yeS5uYW1lIHx8IGZpcnN0Q2F0ZWdvcnkuY29kZX1gXG4gICAgICA6ICcnO1xuICB9XG5cbiAgcHJvdGVjdGVkIHJlc29sdmVNYW51ZmFjdHVyZXIocHJvZHVjdDogUHJvZHVjdCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHByb2R1Y3QubWFudWZhY3R1cmVyID8gYCB8ICR7cHJvZHVjdC5tYW51ZmFjdHVyZXJ9YCA6ICcnO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlc29sdmVzIHRoZSByb2JvdCBpbmZvcm1hdGlvbiBmb3IgdGhlIFByb2R1Y3QgRGV0YWlsIFBhZ2UuIFRoZVxuICAgKiByb2JvdCBpbnN0cnVjdGlvbiBkZWZhdWx0cyB0byBGT0xMT1cgYW5kIElOREVYIGZvciBhbGwgcHJvZHVjdCBwYWdlcyxcbiAgICogcmVnYXJkbGVzcyBvZiB3aGV0aGVyIHRoZXkncmUgcHVyY2hhc2FibGUgb3Igbm90LlxuICAgKi9cbiAgcmVzb2x2ZVJvYm90cygpOiBPYnNlcnZhYmxlPFBhZ2VSb2JvdHNNZXRhW10+IHtcbiAgICByZXR1cm4gb2YoW1BhZ2VSb2JvdHNNZXRhLkZPTExPVywgUGFnZVJvYm90c01ldGEuSU5ERVhdKTtcbiAgfVxufVxuIl19