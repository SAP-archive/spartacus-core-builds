import { Observable } from 'rxjs';
import { CmsService } from '../../cms/facade/cms.service';
import { BreadcrumbMeta, Page } from '../../cms/model/page.model';
import { PageMetaResolver } from '../../cms/page/page-meta.resolver';
import { PageBreadcrumbResolver, PageTitleResolver } from '../../cms/page/page.resolvers';
import { TranslationService } from '../../i18n/translation.service';
import { ProductSearchPage } from '../../model/product-search.model';
import { ProductSearchService } from '../facade/product-search.service';
/**
 * Resolves the page data for the Product Listing Page.
 *
 * The page title, and breadcrumbs are resolved in this implementation only.
 */
import * as ɵngcc0 from '@angular/core';
export declare class CategoryPageMetaResolver extends PageMetaResolver implements PageTitleResolver, PageBreadcrumbResolver {
    protected productSearchService: ProductSearchService;
    protected cms: CmsService;
    protected translation: TranslationService;
    protected searchPage$: Observable<ProductSearchPage | Page>;
    constructor(productSearchService: ProductSearchService, cms: CmsService, translation: TranslationService);
    resolveTitle(): Observable<string>;
    resolveBreadcrumbs(): Observable<BreadcrumbMeta[]>;
    protected resolveBreadcrumbData(page: ProductSearchPage, label: string): BreadcrumbMeta[];
    protected hasProductListComponent(page: Page): boolean;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CategoryPageMetaResolver>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0ZWdvcnktcGFnZS1tZXRhLnJlc29sdmVyLmQudHMiLCJzb3VyY2VzIjpbImNhdGVnb3J5LXBhZ2UtbWV0YS5yZXNvbHZlci5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7OztBQWFBOzs7Ozs7Ozs7OztBQVVBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQ21zU2VydmljZSB9IGZyb20gJy4uLy4uL2Ntcy9mYWNhZGUvY21zLnNlcnZpY2UnO1xuaW1wb3J0IHsgQnJlYWRjcnVtYk1ldGEsIFBhZ2UgfSBmcm9tICcuLi8uLi9jbXMvbW9kZWwvcGFnZS5tb2RlbCc7XG5pbXBvcnQgeyBQYWdlTWV0YVJlc29sdmVyIH0gZnJvbSAnLi4vLi4vY21zL3BhZ2UvcGFnZS1tZXRhLnJlc29sdmVyJztcbmltcG9ydCB7IFBhZ2VCcmVhZGNydW1iUmVzb2x2ZXIsIFBhZ2VUaXRsZVJlc29sdmVyIH0gZnJvbSAnLi4vLi4vY21zL3BhZ2UvcGFnZS5yZXNvbHZlcnMnO1xuaW1wb3J0IHsgVHJhbnNsYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vaTE4bi90cmFuc2xhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IFByb2R1Y3RTZWFyY2hQYWdlIH0gZnJvbSAnLi4vLi4vbW9kZWwvcHJvZHVjdC1zZWFyY2gubW9kZWwnO1xuaW1wb3J0IHsgUHJvZHVjdFNlYXJjaFNlcnZpY2UgfSBmcm9tICcuLi9mYWNhZGUvcHJvZHVjdC1zZWFyY2guc2VydmljZSc7XG4vKipcbiAqIFJlc29sdmVzIHRoZSBwYWdlIGRhdGEgZm9yIHRoZSBQcm9kdWN0IExpc3RpbmcgUGFnZS5cbiAqXG4gKiBUaGUgcGFnZSB0aXRsZSwgYW5kIGJyZWFkY3J1bWJzIGFyZSByZXNvbHZlZCBpbiB0aGlzIGltcGxlbWVudGF0aW9uIG9ubHkuXG4gKi9cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIENhdGVnb3J5UGFnZU1ldGFSZXNvbHZlciBleHRlbmRzIFBhZ2VNZXRhUmVzb2x2ZXIgaW1wbGVtZW50cyBQYWdlVGl0bGVSZXNvbHZlciwgUGFnZUJyZWFkY3J1bWJSZXNvbHZlciB7XG4gICAgcHJvdGVjdGVkIHByb2R1Y3RTZWFyY2hTZXJ2aWNlOiBQcm9kdWN0U2VhcmNoU2VydmljZTtcbiAgICBwcm90ZWN0ZWQgY21zOiBDbXNTZXJ2aWNlO1xuICAgIHByb3RlY3RlZCB0cmFuc2xhdGlvbjogVHJhbnNsYXRpb25TZXJ2aWNlO1xuICAgIHByb3RlY3RlZCBzZWFyY2hQYWdlJDogT2JzZXJ2YWJsZTxQcm9kdWN0U2VhcmNoUGFnZSB8IFBhZ2U+O1xuICAgIGNvbnN0cnVjdG9yKHByb2R1Y3RTZWFyY2hTZXJ2aWNlOiBQcm9kdWN0U2VhcmNoU2VydmljZSwgY21zOiBDbXNTZXJ2aWNlLCB0cmFuc2xhdGlvbjogVHJhbnNsYXRpb25TZXJ2aWNlKTtcbiAgICByZXNvbHZlVGl0bGUoKTogT2JzZXJ2YWJsZTxzdHJpbmc+O1xuICAgIHJlc29sdmVCcmVhZGNydW1icygpOiBPYnNlcnZhYmxlPEJyZWFkY3J1bWJNZXRhW10+O1xuICAgIHByb3RlY3RlZCByZXNvbHZlQnJlYWRjcnVtYkRhdGEocGFnZTogUHJvZHVjdFNlYXJjaFBhZ2UsIGxhYmVsOiBzdHJpbmcpOiBCcmVhZGNydW1iTWV0YVtdO1xuICAgIHByb3RlY3RlZCBoYXNQcm9kdWN0TGlzdENvbXBvbmVudChwYWdlOiBQYWdlKTogYm9vbGVhbjtcbn1cbiJdfQ==