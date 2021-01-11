import { Observable } from 'rxjs';
import { PageRobotsMeta } from '../../cms/model/page.model';
import { BasePageMetaResolver } from '../../cms/page/base-page-meta.resolver';
import { PageMetaResolver } from '../../cms/page/page-meta.resolver';
import { PageRobotsResolver, PageTitleResolver } from '../../cms/page/page.resolvers';
import { TranslationService } from '../../i18n/translation.service';
import { RoutingService } from '../../routing/facade/routing.service';
import { ProductSearchService } from '../facade/product-search.service';
/**
 * Resolves the page data for the Search Result Page based on the
 * `PageType.CATEGORY_PAGE` and the `SearchResultsListPageTemplate` template.
 *
 * Only the page title is resolved in the standard implementation.
 */
export declare class SearchPageMetaResolver extends PageMetaResolver implements PageMetaResolver, PageTitleResolver, PageRobotsResolver {
    protected routingService: RoutingService;
    protected productSearchService: ProductSearchService;
    protected translation: TranslationService;
    protected basePageMetaResolver?: BasePageMetaResolver;
    protected total$: Observable<number>;
    protected query$: Observable<string>;
    /**
     * @deprecated since 3.1 we'll use the `BasePageMetaResolver` going forward
     */
    constructor(routingService: RoutingService, productSearchService: ProductSearchService, translation: TranslationService);
    constructor(routingService: RoutingService, productSearchService: ProductSearchService, translation: TranslationService, basePageMetaResolver?: BasePageMetaResolver);
    resolveTitle(): Observable<string>;
    /**
     * @override
     * This is added in 3.1 and will be ignored if the `BasePageMetaResolver` is not
     * available.
     */
    resolveRobots(): Observable<PageRobotsMeta[]>;
}
