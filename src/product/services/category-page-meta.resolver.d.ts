import { Observable } from 'rxjs';
import { RoutingService } from '../../routing/facade/routing.service';
import { CmsService } from '../../cms/facade/cms.service';
import { Page, PageMeta } from '../../cms/model/page.model';
import { ProductSearchPage } from '../../occ/occ-models/occ.models';
import { PageMetaResolver } from '../../cms/page/page-meta.resolver';
import { ProductSearchService } from '../facade/product-search.service';
import { PageTitleResolver } from '../../cms/page/page.resolvers';
export declare class CategoryPageMetaResolver extends PageMetaResolver implements PageTitleResolver {
    protected routingService: RoutingService;
    protected productSearchService: ProductSearchService;
    protected cms: CmsService;
    constructor(routingService: RoutingService, productSearchService: ProductSearchService, cms: CmsService);
    resolve(): Observable<PageMeta>;
    resolveTitle(data: ProductSearchPage): string;
    protected hasProductListComponent(page: Page): boolean;
}
