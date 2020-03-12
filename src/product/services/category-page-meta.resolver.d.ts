import { Observable } from 'rxjs';
import { CmsService } from '../../cms/facade/cms.service';
import { PageMeta } from '../../cms/model/page.model';
import { PageMetaResolver } from '../../cms/page/page-meta.resolver';
import { PageBreadcrumbResolver, PageTitleResolver } from '../../cms/page/page.resolvers';
import { TranslationService } from '../../i18n/translation.service';
import { ProductSearchPage } from '../../model/product-search.model';
import { RoutingService } from '../../routing/facade/routing.service';
import { ProductSearchService } from '../facade/product-search.service';
/**
 * Resolves the page data for the Product Listing Page
 * based on the `PageType.CATEGORY_PAGE`.
 *
 * The page title, and breadcrumbs are resolved in this implementation only.
 */
import * as ɵngcc0 from '@angular/core';
export declare class CategoryPageMetaResolver extends PageMetaResolver implements PageTitleResolver, PageBreadcrumbResolver {
    protected routingService: RoutingService;
    protected productSearchService: ProductSearchService;
    protected cms: CmsService;
    protected translation: TranslationService;
    private searchPage$;
    constructor(routingService: RoutingService, productSearchService: ProductSearchService, cms: CmsService, translation: TranslationService);
    /**
     * @deprecated since version 1.3
     *
     * The resolve method is no longer preferred and will be removed with release 2.0.
     * The caller `PageMetaService` service is improved to expect all individual resolvers
     * instead, so that the code is easier extensible.
     */
    resolve(): Observable<PageMeta> | any;
    resolveTitle(): Observable<string>;
    /**
     * @deprecated since version 1.3
     * With 2.0, the argument(s) will be removed and the return type will change. Use `resolveTitle()` instead
     */
    resolveTitle(searchPage: ProductSearchPage): Observable<string>;
    /**
     * @deprecated since version 1.3
     * This method will removed with with 2.0
     */
    resolveBreadcrumbLabel(): Observable<string>;
    resolveBreadcrumbs(): Observable<any[]>;
    /**
     * @deprecated since version 1.3
     * With 2.0, the argument(s) will be removed and the return type will change. Use `resolveTitle()` instead
     */
    resolveBreadcrumbs(searchPage: ProductSearchPage, breadcrumbLabel: string): Observable<any[]>;
    private resolveBreadcrumbData;
    private hasProductListComponent;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CategoryPageMetaResolver>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0ZWdvcnktcGFnZS1tZXRhLnJlc29sdmVyLmQudHMiLCJzb3VyY2VzIjpbImNhdGVnb3J5LXBhZ2UtbWV0YS5yZXNvbHZlci5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7O0FBZUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0NBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQ21zU2VydmljZSB9IGZyb20gJy4uLy4uL2Ntcy9mYWNhZGUvY21zLnNlcnZpY2UnO1xuaW1wb3J0IHsgUGFnZU1ldGEgfSBmcm9tICcuLi8uLi9jbXMvbW9kZWwvcGFnZS5tb2RlbCc7XG5pbXBvcnQgeyBQYWdlTWV0YVJlc29sdmVyIH0gZnJvbSAnLi4vLi4vY21zL3BhZ2UvcGFnZS1tZXRhLnJlc29sdmVyJztcbmltcG9ydCB7IFBhZ2VCcmVhZGNydW1iUmVzb2x2ZXIsIFBhZ2VUaXRsZVJlc29sdmVyIH0gZnJvbSAnLi4vLi4vY21zL3BhZ2UvcGFnZS5yZXNvbHZlcnMnO1xuaW1wb3J0IHsgVHJhbnNsYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vaTE4bi90cmFuc2xhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IFByb2R1Y3RTZWFyY2hQYWdlIH0gZnJvbSAnLi4vLi4vbW9kZWwvcHJvZHVjdC1zZWFyY2gubW9kZWwnO1xuaW1wb3J0IHsgUm91dGluZ1NlcnZpY2UgfSBmcm9tICcuLi8uLi9yb3V0aW5nL2ZhY2FkZS9yb3V0aW5nLnNlcnZpY2UnO1xuaW1wb3J0IHsgUHJvZHVjdFNlYXJjaFNlcnZpY2UgfSBmcm9tICcuLi9mYWNhZGUvcHJvZHVjdC1zZWFyY2guc2VydmljZSc7XG4vKipcbiAqIFJlc29sdmVzIHRoZSBwYWdlIGRhdGEgZm9yIHRoZSBQcm9kdWN0IExpc3RpbmcgUGFnZVxuICogYmFzZWQgb24gdGhlIGBQYWdlVHlwZS5DQVRFR09SWV9QQUdFYC5cbiAqXG4gKiBUaGUgcGFnZSB0aXRsZSwgYW5kIGJyZWFkY3J1bWJzIGFyZSByZXNvbHZlZCBpbiB0aGlzIGltcGxlbWVudGF0aW9uIG9ubHkuXG4gKi9cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIENhdGVnb3J5UGFnZU1ldGFSZXNvbHZlciBleHRlbmRzIFBhZ2VNZXRhUmVzb2x2ZXIgaW1wbGVtZW50cyBQYWdlVGl0bGVSZXNvbHZlciwgUGFnZUJyZWFkY3J1bWJSZXNvbHZlciB7XG4gICAgcHJvdGVjdGVkIHJvdXRpbmdTZXJ2aWNlOiBSb3V0aW5nU2VydmljZTtcbiAgICBwcm90ZWN0ZWQgcHJvZHVjdFNlYXJjaFNlcnZpY2U6IFByb2R1Y3RTZWFyY2hTZXJ2aWNlO1xuICAgIHByb3RlY3RlZCBjbXM6IENtc1NlcnZpY2U7XG4gICAgcHJvdGVjdGVkIHRyYW5zbGF0aW9uOiBUcmFuc2xhdGlvblNlcnZpY2U7XG4gICAgcHJpdmF0ZSBzZWFyY2hQYWdlJDtcbiAgICBjb25zdHJ1Y3Rvcihyb3V0aW5nU2VydmljZTogUm91dGluZ1NlcnZpY2UsIHByb2R1Y3RTZWFyY2hTZXJ2aWNlOiBQcm9kdWN0U2VhcmNoU2VydmljZSwgY21zOiBDbXNTZXJ2aWNlLCB0cmFuc2xhdGlvbjogVHJhbnNsYXRpb25TZXJ2aWNlKTtcbiAgICAvKipcbiAgICAgKiBAZGVwcmVjYXRlZCBzaW5jZSB2ZXJzaW9uIDEuM1xuICAgICAqXG4gICAgICogVGhlIHJlc29sdmUgbWV0aG9kIGlzIG5vIGxvbmdlciBwcmVmZXJyZWQgYW5kIHdpbGwgYmUgcmVtb3ZlZCB3aXRoIHJlbGVhc2UgMi4wLlxuICAgICAqIFRoZSBjYWxsZXIgYFBhZ2VNZXRhU2VydmljZWAgc2VydmljZSBpcyBpbXByb3ZlZCB0byBleHBlY3QgYWxsIGluZGl2aWR1YWwgcmVzb2x2ZXJzXG4gICAgICogaW5zdGVhZCwgc28gdGhhdCB0aGUgY29kZSBpcyBlYXNpZXIgZXh0ZW5zaWJsZS5cbiAgICAgKi9cbiAgICByZXNvbHZlKCk6IE9ic2VydmFibGU8UGFnZU1ldGE+IHwgYW55O1xuICAgIHJlc29sdmVUaXRsZSgpOiBPYnNlcnZhYmxlPHN0cmluZz47XG4gICAgLyoqXG4gICAgICogQGRlcHJlY2F0ZWQgc2luY2UgdmVyc2lvbiAxLjNcbiAgICAgKiBXaXRoIDIuMCwgdGhlIGFyZ3VtZW50KHMpIHdpbGwgYmUgcmVtb3ZlZCBhbmQgdGhlIHJldHVybiB0eXBlIHdpbGwgY2hhbmdlLiBVc2UgYHJlc29sdmVUaXRsZSgpYCBpbnN0ZWFkXG4gICAgICovXG4gICAgcmVzb2x2ZVRpdGxlKHNlYXJjaFBhZ2U6IFByb2R1Y3RTZWFyY2hQYWdlKTogT2JzZXJ2YWJsZTxzdHJpbmc+O1xuICAgIC8qKlxuICAgICAqIEBkZXByZWNhdGVkIHNpbmNlIHZlcnNpb24gMS4zXG4gICAgICogVGhpcyBtZXRob2Qgd2lsbCByZW1vdmVkIHdpdGggd2l0aCAyLjBcbiAgICAgKi9cbiAgICByZXNvbHZlQnJlYWRjcnVtYkxhYmVsKCk6IE9ic2VydmFibGU8c3RyaW5nPjtcbiAgICByZXNvbHZlQnJlYWRjcnVtYnMoKTogT2JzZXJ2YWJsZTxhbnlbXT47XG4gICAgLyoqXG4gICAgICogQGRlcHJlY2F0ZWQgc2luY2UgdmVyc2lvbiAxLjNcbiAgICAgKiBXaXRoIDIuMCwgdGhlIGFyZ3VtZW50KHMpIHdpbGwgYmUgcmVtb3ZlZCBhbmQgdGhlIHJldHVybiB0eXBlIHdpbGwgY2hhbmdlLiBVc2UgYHJlc29sdmVUaXRsZSgpYCBpbnN0ZWFkXG4gICAgICovXG4gICAgcmVzb2x2ZUJyZWFkY3J1bWJzKHNlYXJjaFBhZ2U6IFByb2R1Y3RTZWFyY2hQYWdlLCBicmVhZGNydW1iTGFiZWw6IHN0cmluZyk6IE9ic2VydmFibGU8YW55W10+O1xuICAgIHByaXZhdGUgcmVzb2x2ZUJyZWFkY3J1bWJEYXRhO1xuICAgIHByaXZhdGUgaGFzUHJvZHVjdExpc3RDb21wb25lbnQ7XG59XG4iXX0=