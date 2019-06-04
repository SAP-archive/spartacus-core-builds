import { Observable } from 'rxjs';
import { PageMetaResolver } from '../../cms';
import { PageMeta } from '../../cms/model/page.model';
import { TranslationService } from '../../i18n/translation.service';
import { RoutingService } from '../../routing/facade/routing.service';
import { ProductSearchService } from '../facade/product-search.service';
export declare class SearchPageMetaResolver extends PageMetaResolver implements PageMetaResolver {
    protected routingService: RoutingService;
    protected productSearchService: ProductSearchService;
    protected translation: TranslationService;
    constructor(routingService: RoutingService, productSearchService: ProductSearchService, translation: TranslationService);
    resolve(): Observable<PageMeta>;
    resolveTitle(total: number, query: string): Observable<string>;
}
