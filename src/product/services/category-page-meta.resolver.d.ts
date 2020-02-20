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

//# sourceMappingURL=category-page-meta.resolver.d.ts.map