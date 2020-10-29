import { Observable } from 'rxjs';
import { PageMetaResolver } from '../../cms';
import { TranslationService } from '../../i18n/translation.service';
import { RoutingService } from '../../routing/facade/routing.service';
import { ProductSearchService } from '../facade/product-search.service';
/**
 * Resolves the page data for the Search Result Page based on the
 * `PageType.CATEGORY_PAGE` and the `SearchResultsListPageTemplate` template.
 *
 * Only the page title is resolved in the standard implemenation.
 */
import * as ɵngcc0 from '@angular/core';
export declare class SearchPageMetaResolver extends PageMetaResolver implements PageMetaResolver {
    protected routingService: RoutingService;
    protected productSearchService: ProductSearchService;
    protected translation: TranslationService;
    protected total$: Observable<number>;
    protected query$: Observable<string>;
    constructor(routingService: RoutingService, productSearchService: ProductSearchService, translation: TranslationService);
    resolveTitle(): Observable<string>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<SearchPageMetaResolver, never>;
}

//# sourceMappingURL=search-page-meta.resolver.d.ts.map