import { Observable } from 'rxjs';
import { CmsService } from '../../cms/facade/cms.service';
import { BreadcrumbMeta, Page, PageRobotsMeta } from '../../cms/model/page.model';
import { BasePageMetaResolver } from '../../cms/page/base-page-meta.resolver';
import { PageMetaResolver } from '../../cms/page/page-meta.resolver';
import { PageBreadcrumbResolver, PageRobotsResolver, PageTitleResolver } from '../../cms/page/page.resolvers';
import { TranslationService } from '../../i18n/translation.service';
import { ProductSearchPage } from '../../model/product-search.model';
import { ProductSearchService } from '../facade/product-search.service';
/**
 * Resolves the page data for the Product Listing Page.
 *
 * The page title, and breadcrumbs are resolved in this implementation only.
 */
import * as ɵngcc0 from '@angular/core';
export declare class CategoryPageMetaResolver extends PageMetaResolver implements PageTitleResolver, PageBreadcrumbResolver, PageRobotsResolver {
    protected productSearchService: ProductSearchService;
    protected cms: CmsService;
    protected translation: TranslationService;
    protected basePageMetaResolver?: BasePageMetaResolver;
    protected searchPage$: Observable<ProductSearchPage | Page>;
    /**
     * @deprecated since 3.1, we'll use the BasePageMetaResolver in future versions
     */
    constructor(productSearchService: ProductSearchService, cmsService: CmsService, translation: TranslationService);
    constructor(productSearchService: ProductSearchService, cmsService: CmsService, translation: TranslationService, basePageMetaResolver?: BasePageMetaResolver);
    resolveTitle(): Observable<string>;
    resolveBreadcrumbs(): Observable<BreadcrumbMeta[]>;
    protected resolveBreadcrumbData(page: ProductSearchPage, label: string): BreadcrumbMeta[];
    protected hasProductListComponent(page: Page): boolean;
    /**
     * @override
     * This is added in 3.1 and will be ignored if the `BasePageMetaResolver` is not
     * available.
     */
    resolveRobots(): Observable<PageRobotsMeta[]>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CategoryPageMetaResolver, [null, null, null, { optional: true; }]>;
}

//# sourceMappingURL=category-page-meta.resolver.d.ts.map