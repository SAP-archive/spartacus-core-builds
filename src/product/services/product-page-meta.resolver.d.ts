import { Observable } from 'rxjs';
import { BreadcrumbMeta, PageRobotsMeta } from '../../cms/model/page.model';
import { PageMetaResolver } from '../../cms/page/page-meta.resolver';
import { PageBreadcrumbResolver, PageDescriptionResolver, PageHeadingResolver, PageImageResolver, PageRobotsResolver, PageTitleResolver } from '../../cms/page/page.resolvers';
import { TranslationService } from '../../i18n/translation.service';
import { Product } from '../../model/product.model';
import { RoutingService } from '../../routing/facade/routing.service';
import { ProductService } from '../facade/product.service';
/**
 * Resolves the page data for the Product Detail Page
 * based on the `PageType.PRODUCT_PAGE`.
 *
 * The page title, heading, description, breadcrumbs and
 * first GALLERY image are resolved if available in the data.
 */
import * as ɵngcc0 from '@angular/core';
export declare class ProductPageMetaResolver extends PageMetaResolver implements PageHeadingResolver, PageTitleResolver, PageDescriptionResolver, PageBreadcrumbResolver, PageImageResolver, PageRobotsResolver {
    protected routingService: RoutingService;
    protected productService: ProductService;
    protected translation: TranslationService;
    protected product$: Observable<unknown>;
    constructor(routingService: RoutingService, productService: ProductService, translation: TranslationService);
    /**
     * Resolves the page heading for the Product Detail Page.
     * The page heading is used in the UI (`<h1>`), where as the page
     * title is used by the browser and crawlers.
     */
    resolveHeading(): Observable<string>;
    /**
     * Resolves the page title for the Product Detail Page. The page title
     * is resolved with the product name, the first category and the manufactorer.
     * The page title used by the browser (history, tabs) and crawlers.
     */
    resolveTitle(): Observable<string>;
    /**
     * Resolves the page description for the Product Detail Page. The description
     * is based on the `product.summary`.
     */
    resolveDescription(): Observable<string>;
    /**
     * Resolves breadcrumbs for the Product Detail Page. The breadcrumbs are driven by
     * a static home page crum and a crumb for each category.
     */
    resolveBreadcrumbs(): Observable<BreadcrumbMeta[]>;
    /**
     * Resolves the main page image for the Product Detail Page. The product image
     * is based on the PRIMARY product image. The zoom format is used by default.
     */
    resolveImage(): Observable<string>;
    protected resolveFirstCategory(product: Product): string;
    protected resolveManufacturer(product: Product): string;
    /**
     * Resolves the robot information for the Product Detail Page. The
     * robot instruction defaults to FOLLOW and INDEX for all product pages,
     * regardless of whether they're purchasable or not.
     */
    resolveRobots(): Observable<PageRobotsMeta[]>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ProductPageMetaResolver>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1wYWdlLW1ldGEucmVzb2x2ZXIuZC50cyIsInNvdXJjZXMiOlsicHJvZHVjdC1wYWdlLW1ldGEucmVzb2x2ZXIuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7OztBQWVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5Q0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBCcmVhZGNydW1iTWV0YSwgUGFnZVJvYm90c01ldGEgfSBmcm9tICcuLi8uLi9jbXMvbW9kZWwvcGFnZS5tb2RlbCc7XG5pbXBvcnQgeyBQYWdlTWV0YVJlc29sdmVyIH0gZnJvbSAnLi4vLi4vY21zL3BhZ2UvcGFnZS1tZXRhLnJlc29sdmVyJztcbmltcG9ydCB7IFBhZ2VCcmVhZGNydW1iUmVzb2x2ZXIsIFBhZ2VEZXNjcmlwdGlvblJlc29sdmVyLCBQYWdlSGVhZGluZ1Jlc29sdmVyLCBQYWdlSW1hZ2VSZXNvbHZlciwgUGFnZVJvYm90c1Jlc29sdmVyLCBQYWdlVGl0bGVSZXNvbHZlciB9IGZyb20gJy4uLy4uL2Ntcy9wYWdlL3BhZ2UucmVzb2x2ZXJzJztcbmltcG9ydCB7IFRyYW5zbGF0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uL2kxOG4vdHJhbnNsYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBQcm9kdWN0IH0gZnJvbSAnLi4vLi4vbW9kZWwvcHJvZHVjdC5tb2RlbCc7XG5pbXBvcnQgeyBSb3V0aW5nU2VydmljZSB9IGZyb20gJy4uLy4uL3JvdXRpbmcvZmFjYWRlL3JvdXRpbmcuc2VydmljZSc7XG5pbXBvcnQgeyBQcm9kdWN0U2VydmljZSB9IGZyb20gJy4uL2ZhY2FkZS9wcm9kdWN0LnNlcnZpY2UnO1xuLyoqXG4gKiBSZXNvbHZlcyB0aGUgcGFnZSBkYXRhIGZvciB0aGUgUHJvZHVjdCBEZXRhaWwgUGFnZVxuICogYmFzZWQgb24gdGhlIGBQYWdlVHlwZS5QUk9EVUNUX1BBR0VgLlxuICpcbiAqIFRoZSBwYWdlIHRpdGxlLCBoZWFkaW5nLCBkZXNjcmlwdGlvbiwgYnJlYWRjcnVtYnMgYW5kXG4gKiBmaXJzdCBHQUxMRVJZIGltYWdlIGFyZSByZXNvbHZlZCBpZiBhdmFpbGFibGUgaW4gdGhlIGRhdGEuXG4gKi9cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIFByb2R1Y3RQYWdlTWV0YVJlc29sdmVyIGV4dGVuZHMgUGFnZU1ldGFSZXNvbHZlciBpbXBsZW1lbnRzIFBhZ2VIZWFkaW5nUmVzb2x2ZXIsIFBhZ2VUaXRsZVJlc29sdmVyLCBQYWdlRGVzY3JpcHRpb25SZXNvbHZlciwgUGFnZUJyZWFkY3J1bWJSZXNvbHZlciwgUGFnZUltYWdlUmVzb2x2ZXIsIFBhZ2VSb2JvdHNSZXNvbHZlciB7XG4gICAgcHJvdGVjdGVkIHJvdXRpbmdTZXJ2aWNlOiBSb3V0aW5nU2VydmljZTtcbiAgICBwcm90ZWN0ZWQgcHJvZHVjdFNlcnZpY2U6IFByb2R1Y3RTZXJ2aWNlO1xuICAgIHByb3RlY3RlZCB0cmFuc2xhdGlvbjogVHJhbnNsYXRpb25TZXJ2aWNlO1xuICAgIHByb3RlY3RlZCBwcm9kdWN0JDogT2JzZXJ2YWJsZTx1bmtub3duPjtcbiAgICBjb25zdHJ1Y3Rvcihyb3V0aW5nU2VydmljZTogUm91dGluZ1NlcnZpY2UsIHByb2R1Y3RTZXJ2aWNlOiBQcm9kdWN0U2VydmljZSwgdHJhbnNsYXRpb246IFRyYW5zbGF0aW9uU2VydmljZSk7XG4gICAgLyoqXG4gICAgICogUmVzb2x2ZXMgdGhlIHBhZ2UgaGVhZGluZyBmb3IgdGhlIFByb2R1Y3QgRGV0YWlsIFBhZ2UuXG4gICAgICogVGhlIHBhZ2UgaGVhZGluZyBpcyB1c2VkIGluIHRoZSBVSSAoYDxoMT5gKSwgd2hlcmUgYXMgdGhlIHBhZ2VcbiAgICAgKiB0aXRsZSBpcyB1c2VkIGJ5IHRoZSBicm93c2VyIGFuZCBjcmF3bGVycy5cbiAgICAgKi9cbiAgICByZXNvbHZlSGVhZGluZygpOiBPYnNlcnZhYmxlPHN0cmluZz47XG4gICAgLyoqXG4gICAgICogUmVzb2x2ZXMgdGhlIHBhZ2UgdGl0bGUgZm9yIHRoZSBQcm9kdWN0IERldGFpbCBQYWdlLiBUaGUgcGFnZSB0aXRsZVxuICAgICAqIGlzIHJlc29sdmVkIHdpdGggdGhlIHByb2R1Y3QgbmFtZSwgdGhlIGZpcnN0IGNhdGVnb3J5IGFuZCB0aGUgbWFudWZhY3RvcmVyLlxuICAgICAqIFRoZSBwYWdlIHRpdGxlIHVzZWQgYnkgdGhlIGJyb3dzZXIgKGhpc3RvcnksIHRhYnMpIGFuZCBjcmF3bGVycy5cbiAgICAgKi9cbiAgICByZXNvbHZlVGl0bGUoKTogT2JzZXJ2YWJsZTxzdHJpbmc+O1xuICAgIC8qKlxuICAgICAqIFJlc29sdmVzIHRoZSBwYWdlIGRlc2NyaXB0aW9uIGZvciB0aGUgUHJvZHVjdCBEZXRhaWwgUGFnZS4gVGhlIGRlc2NyaXB0aW9uXG4gICAgICogaXMgYmFzZWQgb24gdGhlIGBwcm9kdWN0LnN1bW1hcnlgLlxuICAgICAqL1xuICAgIHJlc29sdmVEZXNjcmlwdGlvbigpOiBPYnNlcnZhYmxlPHN0cmluZz47XG4gICAgLyoqXG4gICAgICogUmVzb2x2ZXMgYnJlYWRjcnVtYnMgZm9yIHRoZSBQcm9kdWN0IERldGFpbCBQYWdlLiBUaGUgYnJlYWRjcnVtYnMgYXJlIGRyaXZlbiBieVxuICAgICAqIGEgc3RhdGljIGhvbWUgcGFnZSBjcnVtIGFuZCBhIGNydW1iIGZvciBlYWNoIGNhdGVnb3J5LlxuICAgICAqL1xuICAgIHJlc29sdmVCcmVhZGNydW1icygpOiBPYnNlcnZhYmxlPEJyZWFkY3J1bWJNZXRhW10+O1xuICAgIC8qKlxuICAgICAqIFJlc29sdmVzIHRoZSBtYWluIHBhZ2UgaW1hZ2UgZm9yIHRoZSBQcm9kdWN0IERldGFpbCBQYWdlLiBUaGUgcHJvZHVjdCBpbWFnZVxuICAgICAqIGlzIGJhc2VkIG9uIHRoZSBQUklNQVJZIHByb2R1Y3QgaW1hZ2UuIFRoZSB6b29tIGZvcm1hdCBpcyB1c2VkIGJ5IGRlZmF1bHQuXG4gICAgICovXG4gICAgcmVzb2x2ZUltYWdlKCk6IE9ic2VydmFibGU8c3RyaW5nPjtcbiAgICBwcm90ZWN0ZWQgcmVzb2x2ZUZpcnN0Q2F0ZWdvcnkocHJvZHVjdDogUHJvZHVjdCk6IHN0cmluZztcbiAgICBwcm90ZWN0ZWQgcmVzb2x2ZU1hbnVmYWN0dXJlcihwcm9kdWN0OiBQcm9kdWN0KTogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIFJlc29sdmVzIHRoZSByb2JvdCBpbmZvcm1hdGlvbiBmb3IgdGhlIFByb2R1Y3QgRGV0YWlsIFBhZ2UuIFRoZVxuICAgICAqIHJvYm90IGluc3RydWN0aW9uIGRlZmF1bHRzIHRvIEZPTExPVyBhbmQgSU5ERVggZm9yIGFsbCBwcm9kdWN0IHBhZ2VzLFxuICAgICAqIHJlZ2FyZGxlc3Mgb2Ygd2hldGhlciB0aGV5J3JlIHB1cmNoYXNhYmxlIG9yIG5vdC5cbiAgICAgKi9cbiAgICByZXNvbHZlUm9ib3RzKCk6IE9ic2VydmFibGU8UGFnZVJvYm90c01ldGFbXT47XG59XG4iXX0=