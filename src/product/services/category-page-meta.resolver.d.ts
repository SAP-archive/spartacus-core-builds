import { Observable } from 'rxjs';
import { CmsService } from '../../cms/facade/cms.service';
import { PageMeta } from '../../cms/model/page.model';
import { PageMetaResolver } from '../../cms/page/page-meta.resolver';
import { PageTitleResolver } from '../../cms/page/page.resolvers';
import { RoutingService } from '../../routing/facade/routing.service';
import { ProductSearchService } from '../facade/product-search.service';
import { ProductSearchPage } from '../../model/product-search.model';
import { TranslationService } from '../../i18n/translation.service';
export declare class CategoryPageMetaResolver extends PageMetaResolver implements PageTitleResolver {
    protected routingService: RoutingService;
    protected productSearchService: ProductSearchService;
    protected cms: CmsService;
    protected translation: TranslationService;
    constructor(routingService: RoutingService, productSearchService: ProductSearchService, cms: CmsService, translation: TranslationService);
    resolve(): Observable<PageMeta>;
    resolveTitle(data: ProductSearchPage): Observable<string>;
    resolveBreadcrumbs(data: ProductSearchPage): Observable<any[]>;
    private hasProductListComponent;
}
