import { Observable } from 'rxjs';
import { RoutingService } from '../../routing/facade/routing.service';
import { CmsService } from '../../cms/facade/cms.service';
import { Page, PageMeta } from '../../cms/model/page.model';
import { PageMetaResolver } from '../../cms/page/page-meta.resolver';
import { ProductSearchService } from '../facade/product-search.service';
import { PageTitleResolver } from '../../cms/page/page.resolvers';
import { UIProductSearchPage } from '../model/product-search-page';
export declare class CategoryPageMetaResolver extends PageMetaResolver implements PageTitleResolver {
    protected routingService: RoutingService;
    protected productSearchService: ProductSearchService;
    protected cms: CmsService;
    constructor(routingService: RoutingService, productSearchService: ProductSearchService, cms: CmsService);
    resolve(): Observable<PageMeta>;
    resolveTitle(data: UIProductSearchPage): string;
    protected hasProductListComponent(page: Page): boolean;
}
