import { Observable } from 'rxjs';
import { PageMetaResolver } from '../../cms';
import { PageMeta } from '../../cms/model/page.model';
import { TranslationService } from '../../i18n/translation.service';
import { RoutingService } from '../../routing/facade/routing.service';
import { ProductSearchService } from '../facade/product-search.service';
/**
 * Resolves the page data for the Search Result Page based on the
 * `PageType.CATEGORY_PAGE` and the `SearchResultsListPageTemplate` template.
 *
 * Only the page title is resolved in the implemenation.
 */
import * as ɵngcc0 from '@angular/core';
export declare class SearchPageMetaResolver extends PageMetaResolver implements PageMetaResolver {
    protected routingService: RoutingService;
    protected productSearchService: ProductSearchService;
    protected translation: TranslationService;
    total$: Observable<number>;
    query$: Observable<string>;
    constructor(routingService: RoutingService, productSearchService: ProductSearchService, translation: TranslationService);
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
    resolveTitle(total: number, query: string): Observable<string>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<SearchPageMetaResolver>;
}

//# sourceMappingURL=search-page-meta.resolver.d.ts.map