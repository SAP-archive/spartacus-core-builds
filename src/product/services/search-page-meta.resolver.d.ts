import { Observable } from 'rxjs';
import { RoutingService } from '../../routing/facade/routing.service';
import { ProductSearchService } from '../facade/product-search.service';
import { PageMetaResolver } from '../../cms/page/page-meta.resolver';
import { PageMeta } from '../../cms/model/page.model';
export declare class SearchPageMetaResolver extends PageMetaResolver implements PageMetaResolver {
    protected routingService: RoutingService;
    protected productSearchService: ProductSearchService;
    constructor(routingService: RoutingService, productSearchService: ProductSearchService);
    resolve(): Observable<PageMeta>;
    resolveTitle(total: number, part: string): string;
}
