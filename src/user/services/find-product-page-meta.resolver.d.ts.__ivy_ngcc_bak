import { Observable } from 'rxjs';
import { PageMetaResolver, PageTitleResolver, PageBreadcrumbResolver } from '../../cms/page';
import { PageMeta, Page } from '../../cms/model/page.model';
import { TranslationService } from '../../i18n/translation.service';
import { RoutingService } from '../../routing/facade/routing.service';
import { ProductSearchService } from '../../product/facade/product-search.service';
import { AuthService } from '../../auth/facade/auth.service';
export declare class FindProductPageMetaResolver extends PageMetaResolver implements PageTitleResolver, PageBreadcrumbResolver {
    protected routingService: RoutingService;
    protected productSearchService: ProductSearchService;
    protected translation: TranslationService;
    protected authService: AuthService;
    totalAndCode$: Observable<[number, any]>;
    constructor(routingService: RoutingService, productSearchService: ProductSearchService, translation: TranslationService, authService: AuthService);
    /**
     * @deprecated since version 1.3
     *
     * The resolve method is no longer preferred and will be removed with release 2.0.
     * The caller `PageMetaService` service is improved to expect all individual resolvers
     * instead, so that the code is easier extensible.
     */
    resolve(): Observable<PageMeta>;
    resolveBreadcrumbs(): Observable<any[]>;
    resolveTitle(): Observable<string>;
    getScore(page: Page): number;
}
