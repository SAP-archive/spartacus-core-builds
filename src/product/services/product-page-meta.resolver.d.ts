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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1wYWdlLW1ldGEucmVzb2x2ZXIuZC50cyIsInNvdXJjZXMiOlsicHJvZHVjdC1wYWdlLW1ldGEucmVzb2x2ZXIuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUErREE7Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgUGFnZU1ldGEsIFBhZ2VSb2JvdHNNZXRhIH0gZnJvbSAnLi4vLi4vY21zL21vZGVsL3BhZ2UubW9kZWwnO1xuaW1wb3J0IHsgUGFnZU1ldGFSZXNvbHZlciB9IGZyb20gJy4uLy4uL2Ntcy9wYWdlL3BhZ2UtbWV0YS5yZXNvbHZlcic7XG5pbXBvcnQgeyBQYWdlQnJlYWRjcnVtYlJlc29sdmVyLCBQYWdlRGVzY3JpcHRpb25SZXNvbHZlciwgUGFnZUhlYWRpbmdSZXNvbHZlciwgUGFnZUltYWdlUmVzb2x2ZXIsIFBhZ2VUaXRsZVJlc29sdmVyIH0gZnJvbSAnLi4vLi4vY21zL3BhZ2UvcGFnZS5yZXNvbHZlcnMnO1xuaW1wb3J0IHsgRmVhdHVyZUNvbmZpZ1NlcnZpY2UgfSBmcm9tICcuLi8uLi9mZWF0dXJlcy1jb25maWcvc2VydmljZXMvZmVhdHVyZS1jb25maWcuc2VydmljZSc7XG5pbXBvcnQgeyBUcmFuc2xhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi9pMThuL3RyYW5zbGF0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgUHJvZHVjdCB9IGZyb20gJy4uLy4uL21vZGVsL3Byb2R1Y3QubW9kZWwnO1xuaW1wb3J0IHsgUm91dGluZ1NlcnZpY2UgfSBmcm9tICcuLi8uLi9yb3V0aW5nL2ZhY2FkZS9yb3V0aW5nLnNlcnZpY2UnO1xuaW1wb3J0IHsgUHJvZHVjdFNlcnZpY2UgfSBmcm9tICcuLi9mYWNhZGUvcHJvZHVjdC5zZXJ2aWNlJztcbi8qKlxuICogUmVzb2x2ZXMgdGhlIHBhZ2UgZGF0YSBmb3IgdGhlIFByb2R1Y3QgRGV0YWlsIFBhZ2VcbiAqIGJhc2VkIG9uIHRoZSBgUGFnZVR5cGUuUFJPRFVDVF9QQUdFYC5cbiAqXG4gKiBUaGUgcGFnZSB0aXRsZSwgaGVhZGluZywgZGVzY3JpcHRpb24sIGJyZWFkY3J1bWJzIGFuZFxuICogZmlyc3QgR0FMTEVSWSBpbWFnZSBhcmUgcmVzb2x2ZWQgaWYgYXZhaWxhYmxlIGluIHRoZSBkYXRhLlxuICovXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBQcm9kdWN0UGFnZU1ldGFSZXNvbHZlciBleHRlbmRzIFBhZ2VNZXRhUmVzb2x2ZXIgaW1wbGVtZW50cyBQYWdlSGVhZGluZ1Jlc29sdmVyLCBQYWdlVGl0bGVSZXNvbHZlciwgUGFnZURlc2NyaXB0aW9uUmVzb2x2ZXIsIFBhZ2VCcmVhZGNydW1iUmVzb2x2ZXIsIFBhZ2VJbWFnZVJlc29sdmVyIHtcbiAgICBwcm90ZWN0ZWQgcm91dGluZ1NlcnZpY2U6IFJvdXRpbmdTZXJ2aWNlO1xuICAgIHByb3RlY3RlZCBwcm9kdWN0U2VydmljZTogUHJvZHVjdFNlcnZpY2U7XG4gICAgcHJvdGVjdGVkIHRyYW5zbGF0aW9uOiBUcmFuc2xhdGlvblNlcnZpY2U7XG4gICAgcHJvdGVjdGVkIGZlYXR1cmVzPzogRmVhdHVyZUNvbmZpZ1NlcnZpY2U7XG4gICAgcHJvdGVjdGVkIHJlYWRvbmx5IFBST0RVQ1RfU0NPUEU6IHN0cmluZztcbiAgICBwcml2YXRlIHByb2R1Y3QkO1xuICAgIGNvbnN0cnVjdG9yKHJvdXRpbmdTZXJ2aWNlOiBSb3V0aW5nU2VydmljZSwgcHJvZHVjdFNlcnZpY2U6IFByb2R1Y3RTZXJ2aWNlLCB0cmFuc2xhdGlvbjogVHJhbnNsYXRpb25TZXJ2aWNlLCBmZWF0dXJlczogRmVhdHVyZUNvbmZpZ1NlcnZpY2UpO1xuICAgIC8qKlxuICAgICAqIEBkZXByZWNhdGVkIHNpbmNlIDEuNFxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHJvdXRpbmdTZXJ2aWNlOiBSb3V0aW5nU2VydmljZSwgcHJvZHVjdFNlcnZpY2U6IFByb2R1Y3RTZXJ2aWNlLCB0cmFuc2xhdGlvbjogVHJhbnNsYXRpb25TZXJ2aWNlKTtcbiAgICAvKipcbiAgICAgKiBAZGVwcmVjYXRlZCBzaW5jZSB2ZXJzaW9uIDEuM1xuICAgICAqXG4gICAgICogVGhlIHJlc29sdmUgbWV0aG9kIGlzIG5vIGxvbmdlciBwcmVmZXJyZWQgYW5kIHdpbGwgYmUgcmVtb3ZlZCB3aXRoIHJlbGVhc2UgMi4wLlxuICAgICAqIFRoZSBjYWxsZXIgYFBhZ2VNZXRhU2VydmljZWAgc2VydmljZSBpcyBpbXByb3ZlZCB0byBleHBlY3QgYWxsIGluZGl2aWR1YWwgcmVzb2x2ZXJzXG4gICAgICogaW5zdGVhZCwgc28gdGhhdCB0aGUgY29kZSBpcyBlYXNpZXIgZXh0ZW5zaWJsZS5cbiAgICAgKi9cbiAgICByZXNvbHZlKCk6IE9ic2VydmFibGU8UGFnZU1ldGE+IHwgYW55O1xuICAgIHJlc29sdmVIZWFkaW5nKCk6IE9ic2VydmFibGU8c3RyaW5nPjtcbiAgICAvKipcbiAgICAgKiBAZGVwcmVjYXRlZCBzaW5jZSB2ZXJzaW9uIDEuM1xuICAgICAqIFdpdGggMi4wLCB0aGUgYXJndW1lbnQocykgd2lsbCBiZSByZW1vdmVkIGFuZCB0aGUgcmV0dXJuIHR5cGUgd2lsbCBjaGFuZ2UuIFVzZSBgcmVzb2x2ZUhlYWRpbmcoKWAgaW5zdGVhZFxuICAgICAqL1xuICAgIHJlc29sdmVIZWFkaW5nKHByb2R1Y3Q6IFByb2R1Y3QpOiBPYnNlcnZhYmxlPHN0cmluZz47XG4gICAgcmVzb2x2ZVRpdGxlKCk6IE9ic2VydmFibGU8c3RyaW5nPjtcbiAgICAvKipcbiAgICAgKiBAZGVwcmVjYXRlZCBzaW5jZSB2ZXJzaW9uIDEuM1xuICAgICAqIFdpdGggMi4wLCB0aGUgYXJndW1lbnQocykgd2lsbCBiZSByZW1vdmVkIGFuZCB0aGUgcmV0dXJuIHR5cGUgd2lsbCBjaGFuZ2UuIFVzZSBgcmVzb2x2ZVRpdGxlKClgIGluc3RlYWRcbiAgICAgKi9cbiAgICByZXNvbHZlVGl0bGUocHJvZHVjdDogUHJvZHVjdCk6IE9ic2VydmFibGU8c3RyaW5nPjtcbiAgICByZXNvbHZlRGVzY3JpcHRpb24oKTogT2JzZXJ2YWJsZTxzdHJpbmc+O1xuICAgIC8qKlxuICAgICAqIEBkZXByZWNhdGVkIHNpbmNlIHZlcnNpb24gMS4zXG4gICAgICogV2l0aCAyLjAsIHRoZSBhcmd1bWVudChzKSB3aWxsIGJlIHJlbW92ZWQgYW5kIHRoZSByZXR1cm4gdHlwZSB3aWxsIGNoYW5nZS4gVXNlIGByZXNvbHZlRGVzY3JpcHRpb24oKWAgaW5zdGVhZFxuICAgICAqL1xuICAgIHJlc29sdmVEZXNjcmlwdGlvbihwcm9kdWN0OiBQcm9kdWN0KTogT2JzZXJ2YWJsZTxzdHJpbmc+O1xuICAgIC8qKlxuICAgICAqIEBkZXByZWNhdGVkIHNpbmNlIHZlcnNpb24gMS4zXG4gICAgICogVGhpcyBtZXRob2Qgd2lsbCBiZSByZW1vdmVkIHdpdGggd2l0aCAyLjBcbiAgICAgKi9cbiAgICByZXNvbHZlQnJlYWRjcnVtYkxhYmVsKCk6IE9ic2VydmFibGU8c3RyaW5nPjtcbiAgICByZXNvbHZlQnJlYWRjcnVtYnMoKTogT2JzZXJ2YWJsZTxhbnlbXT47XG4gICAgLyoqXG4gICAgICogQGRlcHJlY2F0ZWQgc2luY2UgdmVyc2lvbiAxLjNcbiAgICAgKiBXaXRoIDIuMCwgdGhlIGFyZ3VtZW50KHMpIHdpbGwgYmUgcmVtb3ZlZCBhbmQgdGhlIHJldHVybiB0eXBlIHdpbGwgY2hhbmdlLiBVc2UgYHJlc29sdmVCcmVhZGNydW1icygpYCBpbnN0ZWFkXG4gICAgICovXG4gICAgcmVzb2x2ZUJyZWFkY3J1bWJzKHByb2R1Y3Q6IFByb2R1Y3QsIGJyZWFkY3J1bWJMYWJlbDogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnlbXT47XG4gICAgcmVzb2x2ZUltYWdlKCk6IE9ic2VydmFibGU8c3RyaW5nPjtcbiAgICAvKipcbiAgICAgKiBAZGVwcmVjYXRlZCBzaW5jZSB2ZXJzaW9uIDEuM1xuICAgICAqIFdpdGggMi4wLCB0aGUgYXJndW1lbnQocykgd2lsbCBiZSByZW1vdmVkIGFuZCB0aGUgcmV0dXJuIHR5cGUgd2lsbCBjaGFuZ2UuIFVzZSBgcmVzb2x2ZUltYWdlKClgIGluc3RlYWRcbiAgICAgKi9cbiAgICByZXNvbHZlSW1hZ2UocHJvZHVjdDogUHJvZHVjdCk6IE9ic2VydmFibGU8c3RyaW5nPjtcbiAgICBwcml2YXRlIHJlc29sdmVGaXJzdENhdGVnb3J5O1xuICAgIHByaXZhdGUgcmVzb2x2ZU1hbnVmYWN0dXJlcjtcbiAgICByZXNvbHZlUm9ib3RzKCk6IE9ic2VydmFibGU8UGFnZVJvYm90c01ldGFbXT47XG4gICAgLyoqXG4gICAgICogQGRlcHJlY2F0ZWQgc2luY2UgdmVyc2lvbiAxLjNcbiAgICAgKiBXaXRoIDIuMCwgdGhlIGFyZ3VtZW50KHMpIHdpbGwgYmUgcmVtb3ZlZCBhbmQgdGhlIHJldHVybiB0eXBlIHdpbGwgY2hhbmdlLiBVc2UgYHJlc29sdmVSb2JvdHMoKWAgaW5zdGVhZFxuICAgICAqL1xuICAgIHJlc29sdmVSb2JvdHMocHJvZHVjdDogUHJvZHVjdCk6IE9ic2VydmFibGU8UGFnZVJvYm90c01ldGFbXT47XG59XG4iXX0=