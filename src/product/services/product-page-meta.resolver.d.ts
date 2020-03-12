import { Observable } from 'rxjs';
import { PageMeta, PageRobotsMeta } from '../../cms/model/page.model';
import { PageMetaResolver } from '../../cms/page/page-meta.resolver';
import { PageBreadcrumbResolver, PageDescriptionResolver, PageHeadingResolver, PageImageResolver, PageTitleResolver } from '../../cms/page/page.resolvers';
import { FeatureConfigService } from '../../features-config/services/feature-config.service';
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
export declare class ProductPageMetaResolver extends PageMetaResolver implements PageHeadingResolver, PageTitleResolver, PageDescriptionResolver, PageBreadcrumbResolver, PageImageResolver {
    protected routingService: RoutingService;
    protected productService: ProductService;
    protected translation: TranslationService;
    protected features?: FeatureConfigService;
    protected readonly PRODUCT_SCOPE: string;
    private product$;
    constructor(routingService: RoutingService, productService: ProductService, translation: TranslationService, features: FeatureConfigService);
    /**
     * @deprecated since 1.4
     */
    constructor(routingService: RoutingService, productService: ProductService, translation: TranslationService);
    /**
     * @deprecated since version 1.3
     *
     * The resolve method is no longer preferred and will be removed with release 2.0.
     * The caller `PageMetaService` service is improved to expect all individual resolvers
     * instead, so that the code is easier extensible.
     */
    resolve(): Observable<PageMeta> | any;
    resolveHeading(): Observable<string>;
    /**
     * @deprecated since version 1.3
     * With 2.0, the argument(s) will be removed and the return type will change. Use `resolveHeading()` instead
     */
    resolveHeading(product: Product): Observable<string>;
    resolveTitle(): Observable<string>;
    /**
     * @deprecated since version 1.3
     * With 2.0, the argument(s) will be removed and the return type will change. Use `resolveTitle()` instead
     */
    resolveTitle(product: Product): Observable<string>;
    resolveDescription(): Observable<string>;
    /**
     * @deprecated since version 1.3
     * With 2.0, the argument(s) will be removed and the return type will change. Use `resolveDescription()` instead
     */
    resolveDescription(product: Product): Observable<string>;
    /**
     * @deprecated since version 1.3
     * This method will be removed with with 2.0
     */
    resolveBreadcrumbLabel(): Observable<string>;
    resolveBreadcrumbs(): Observable<any[]>;
    /**
     * @deprecated since version 1.3
     * With 2.0, the argument(s) will be removed and the return type will change. Use `resolveBreadcrumbs()` instead
     */
    resolveBreadcrumbs(product: Product, breadcrumbLabel: string): Observable<any[]>;
    resolveImage(): Observable<string>;
    /**
     * @deprecated since version 1.3
     * With 2.0, the argument(s) will be removed and the return type will change. Use `resolveImage()` instead
     */
    resolveImage(product: Product): Observable<string>;
    private resolveFirstCategory;
    private resolveManufacturer;
    resolveRobots(): Observable<PageRobotsMeta[]>;
    /**
     * @deprecated since version 1.3
     * With 2.0, the argument(s) will be removed and the return type will change. Use `resolveRobots()` instead
     */
    resolveRobots(product: Product): Observable<PageRobotsMeta[]>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ProductPageMetaResolver>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1wYWdlLW1ldGEucmVzb2x2ZXIuZC50cyIsInNvdXJjZXMiOlsicHJvZHVjdC1wYWdlLW1ldGEucmVzb2x2ZXIuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUErREEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBQYWdlTWV0YSwgUGFnZVJvYm90c01ldGEgfSBmcm9tICcuLi8uLi9jbXMvbW9kZWwvcGFnZS5tb2RlbCc7XG5pbXBvcnQgeyBQYWdlTWV0YVJlc29sdmVyIH0gZnJvbSAnLi4vLi4vY21zL3BhZ2UvcGFnZS1tZXRhLnJlc29sdmVyJztcbmltcG9ydCB7IFBhZ2VCcmVhZGNydW1iUmVzb2x2ZXIsIFBhZ2VEZXNjcmlwdGlvblJlc29sdmVyLCBQYWdlSGVhZGluZ1Jlc29sdmVyLCBQYWdlSW1hZ2VSZXNvbHZlciwgUGFnZVRpdGxlUmVzb2x2ZXIgfSBmcm9tICcuLi8uLi9jbXMvcGFnZS9wYWdlLnJlc29sdmVycyc7XG5pbXBvcnQgeyBGZWF0dXJlQ29uZmlnU2VydmljZSB9IGZyb20gJy4uLy4uL2ZlYXR1cmVzLWNvbmZpZy9zZXJ2aWNlcy9mZWF0dXJlLWNvbmZpZy5zZXJ2aWNlJztcbmltcG9ydCB7IFRyYW5zbGF0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uL2kxOG4vdHJhbnNsYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBQcm9kdWN0IH0gZnJvbSAnLi4vLi4vbW9kZWwvcHJvZHVjdC5tb2RlbCc7XG5pbXBvcnQgeyBSb3V0aW5nU2VydmljZSB9IGZyb20gJy4uLy4uL3JvdXRpbmcvZmFjYWRlL3JvdXRpbmcuc2VydmljZSc7XG5pbXBvcnQgeyBQcm9kdWN0U2VydmljZSB9IGZyb20gJy4uL2ZhY2FkZS9wcm9kdWN0LnNlcnZpY2UnO1xuLyoqXG4gKiBSZXNvbHZlcyB0aGUgcGFnZSBkYXRhIGZvciB0aGUgUHJvZHVjdCBEZXRhaWwgUGFnZVxuICogYmFzZWQgb24gdGhlIGBQYWdlVHlwZS5QUk9EVUNUX1BBR0VgLlxuICpcbiAqIFRoZSBwYWdlIHRpdGxlLCBoZWFkaW5nLCBkZXNjcmlwdGlvbiwgYnJlYWRjcnVtYnMgYW5kXG4gKiBmaXJzdCBHQUxMRVJZIGltYWdlIGFyZSByZXNvbHZlZCBpZiBhdmFpbGFibGUgaW4gdGhlIGRhdGEuXG4gKi9cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIFByb2R1Y3RQYWdlTWV0YVJlc29sdmVyIGV4dGVuZHMgUGFnZU1ldGFSZXNvbHZlciBpbXBsZW1lbnRzIFBhZ2VIZWFkaW5nUmVzb2x2ZXIsIFBhZ2VUaXRsZVJlc29sdmVyLCBQYWdlRGVzY3JpcHRpb25SZXNvbHZlciwgUGFnZUJyZWFkY3J1bWJSZXNvbHZlciwgUGFnZUltYWdlUmVzb2x2ZXIge1xuICAgIHByb3RlY3RlZCByb3V0aW5nU2VydmljZTogUm91dGluZ1NlcnZpY2U7XG4gICAgcHJvdGVjdGVkIHByb2R1Y3RTZXJ2aWNlOiBQcm9kdWN0U2VydmljZTtcbiAgICBwcm90ZWN0ZWQgdHJhbnNsYXRpb246IFRyYW5zbGF0aW9uU2VydmljZTtcbiAgICBwcm90ZWN0ZWQgZmVhdHVyZXM/OiBGZWF0dXJlQ29uZmlnU2VydmljZTtcbiAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgUFJPRFVDVF9TQ09QRTogc3RyaW5nO1xuICAgIHByaXZhdGUgcHJvZHVjdCQ7XG4gICAgY29uc3RydWN0b3Iocm91dGluZ1NlcnZpY2U6IFJvdXRpbmdTZXJ2aWNlLCBwcm9kdWN0U2VydmljZTogUHJvZHVjdFNlcnZpY2UsIHRyYW5zbGF0aW9uOiBUcmFuc2xhdGlvblNlcnZpY2UsIGZlYXR1cmVzOiBGZWF0dXJlQ29uZmlnU2VydmljZSk7XG4gICAgLyoqXG4gICAgICogQGRlcHJlY2F0ZWQgc2luY2UgMS40XG4gICAgICovXG4gICAgY29uc3RydWN0b3Iocm91dGluZ1NlcnZpY2U6IFJvdXRpbmdTZXJ2aWNlLCBwcm9kdWN0U2VydmljZTogUHJvZHVjdFNlcnZpY2UsIHRyYW5zbGF0aW9uOiBUcmFuc2xhdGlvblNlcnZpY2UpO1xuICAgIC8qKlxuICAgICAqIEBkZXByZWNhdGVkIHNpbmNlIHZlcnNpb24gMS4zXG4gICAgICpcbiAgICAgKiBUaGUgcmVzb2x2ZSBtZXRob2QgaXMgbm8gbG9uZ2VyIHByZWZlcnJlZCBhbmQgd2lsbCBiZSByZW1vdmVkIHdpdGggcmVsZWFzZSAyLjAuXG4gICAgICogVGhlIGNhbGxlciBgUGFnZU1ldGFTZXJ2aWNlYCBzZXJ2aWNlIGlzIGltcHJvdmVkIHRvIGV4cGVjdCBhbGwgaW5kaXZpZHVhbCByZXNvbHZlcnNcbiAgICAgKiBpbnN0ZWFkLCBzbyB0aGF0IHRoZSBjb2RlIGlzIGVhc2llciBleHRlbnNpYmxlLlxuICAgICAqL1xuICAgIHJlc29sdmUoKTogT2JzZXJ2YWJsZTxQYWdlTWV0YT4gfCBhbnk7XG4gICAgcmVzb2x2ZUhlYWRpbmcoKTogT2JzZXJ2YWJsZTxzdHJpbmc+O1xuICAgIC8qKlxuICAgICAqIEBkZXByZWNhdGVkIHNpbmNlIHZlcnNpb24gMS4zXG4gICAgICogV2l0aCAyLjAsIHRoZSBhcmd1bWVudChzKSB3aWxsIGJlIHJlbW92ZWQgYW5kIHRoZSByZXR1cm4gdHlwZSB3aWxsIGNoYW5nZS4gVXNlIGByZXNvbHZlSGVhZGluZygpYCBpbnN0ZWFkXG4gICAgICovXG4gICAgcmVzb2x2ZUhlYWRpbmcocHJvZHVjdDogUHJvZHVjdCk6IE9ic2VydmFibGU8c3RyaW5nPjtcbiAgICByZXNvbHZlVGl0bGUoKTogT2JzZXJ2YWJsZTxzdHJpbmc+O1xuICAgIC8qKlxuICAgICAqIEBkZXByZWNhdGVkIHNpbmNlIHZlcnNpb24gMS4zXG4gICAgICogV2l0aCAyLjAsIHRoZSBhcmd1bWVudChzKSB3aWxsIGJlIHJlbW92ZWQgYW5kIHRoZSByZXR1cm4gdHlwZSB3aWxsIGNoYW5nZS4gVXNlIGByZXNvbHZlVGl0bGUoKWAgaW5zdGVhZFxuICAgICAqL1xuICAgIHJlc29sdmVUaXRsZShwcm9kdWN0OiBQcm9kdWN0KTogT2JzZXJ2YWJsZTxzdHJpbmc+O1xuICAgIHJlc29sdmVEZXNjcmlwdGlvbigpOiBPYnNlcnZhYmxlPHN0cmluZz47XG4gICAgLyoqXG4gICAgICogQGRlcHJlY2F0ZWQgc2luY2UgdmVyc2lvbiAxLjNcbiAgICAgKiBXaXRoIDIuMCwgdGhlIGFyZ3VtZW50KHMpIHdpbGwgYmUgcmVtb3ZlZCBhbmQgdGhlIHJldHVybiB0eXBlIHdpbGwgY2hhbmdlLiBVc2UgYHJlc29sdmVEZXNjcmlwdGlvbigpYCBpbnN0ZWFkXG4gICAgICovXG4gICAgcmVzb2x2ZURlc2NyaXB0aW9uKHByb2R1Y3Q6IFByb2R1Y3QpOiBPYnNlcnZhYmxlPHN0cmluZz47XG4gICAgLyoqXG4gICAgICogQGRlcHJlY2F0ZWQgc2luY2UgdmVyc2lvbiAxLjNcbiAgICAgKiBUaGlzIG1ldGhvZCB3aWxsIGJlIHJlbW92ZWQgd2l0aCB3aXRoIDIuMFxuICAgICAqL1xuICAgIHJlc29sdmVCcmVhZGNydW1iTGFiZWwoKTogT2JzZXJ2YWJsZTxzdHJpbmc+O1xuICAgIHJlc29sdmVCcmVhZGNydW1icygpOiBPYnNlcnZhYmxlPGFueVtdPjtcbiAgICAvKipcbiAgICAgKiBAZGVwcmVjYXRlZCBzaW5jZSB2ZXJzaW9uIDEuM1xuICAgICAqIFdpdGggMi4wLCB0aGUgYXJndW1lbnQocykgd2lsbCBiZSByZW1vdmVkIGFuZCB0aGUgcmV0dXJuIHR5cGUgd2lsbCBjaGFuZ2UuIFVzZSBgcmVzb2x2ZUJyZWFkY3J1bWJzKClgIGluc3RlYWRcbiAgICAgKi9cbiAgICByZXNvbHZlQnJlYWRjcnVtYnMocHJvZHVjdDogUHJvZHVjdCwgYnJlYWRjcnVtYkxhYmVsOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueVtdPjtcbiAgICByZXNvbHZlSW1hZ2UoKTogT2JzZXJ2YWJsZTxzdHJpbmc+O1xuICAgIC8qKlxuICAgICAqIEBkZXByZWNhdGVkIHNpbmNlIHZlcnNpb24gMS4zXG4gICAgICogV2l0aCAyLjAsIHRoZSBhcmd1bWVudChzKSB3aWxsIGJlIHJlbW92ZWQgYW5kIHRoZSByZXR1cm4gdHlwZSB3aWxsIGNoYW5nZS4gVXNlIGByZXNvbHZlSW1hZ2UoKWAgaW5zdGVhZFxuICAgICAqL1xuICAgIHJlc29sdmVJbWFnZShwcm9kdWN0OiBQcm9kdWN0KTogT2JzZXJ2YWJsZTxzdHJpbmc+O1xuICAgIHByaXZhdGUgcmVzb2x2ZUZpcnN0Q2F0ZWdvcnk7XG4gICAgcHJpdmF0ZSByZXNvbHZlTWFudWZhY3R1cmVyO1xuICAgIHJlc29sdmVSb2JvdHMoKTogT2JzZXJ2YWJsZTxQYWdlUm9ib3RzTWV0YVtdPjtcbiAgICAvKipcbiAgICAgKiBAZGVwcmVjYXRlZCBzaW5jZSB2ZXJzaW9uIDEuM1xuICAgICAqIFdpdGggMi4wLCB0aGUgYXJndW1lbnQocykgd2lsbCBiZSByZW1vdmVkIGFuZCB0aGUgcmV0dXJuIHR5cGUgd2lsbCBjaGFuZ2UuIFVzZSBgcmVzb2x2ZVJvYm90cygpYCBpbnN0ZWFkXG4gICAgICovXG4gICAgcmVzb2x2ZVJvYm90cyhwcm9kdWN0OiBQcm9kdWN0KTogT2JzZXJ2YWJsZTxQYWdlUm9ib3RzTWV0YVtdPjtcbn1cbiJdfQ==