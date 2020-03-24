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
}
