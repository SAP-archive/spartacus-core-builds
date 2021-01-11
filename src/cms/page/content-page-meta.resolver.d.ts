import { Observable } from 'rxjs';
import { TranslationService } from '../../i18n/translation.service';
import { CmsService } from '../facade/cms.service';
import { BreadcrumbMeta, Page, PageRobotsMeta } from '../model/page.model';
import { BasePageMetaResolver } from './base-page-meta.resolver';
import { PageMetaResolver } from './page-meta.resolver';
import { PageBreadcrumbResolver, PageRobotsResolver, PageTitleResolver } from './page.resolvers';
import { RoutingPageMetaResolver } from './routing/routing-page-meta.resolver';
/**
 * Resolves the page data for all Content Pages based on the `PageType.CONTENT_PAGE`.
 * More specific resolvers for content pages can be implemented by making them more
 * specific, for example by using the page template (see `CartPageMetaResolver`).
 *
 * The page title, and breadcrumbs are resolved in this implementation only.
 */
export declare class ContentPageMetaResolver extends PageMetaResolver implements PageTitleResolver, PageBreadcrumbResolver, PageRobotsResolver {
    protected cmsService: CmsService;
    protected translation: TranslationService;
    protected routingPageMetaResolver: RoutingPageMetaResolver;
    protected basePageMetaResolver?: BasePageMetaResolver;
    /**
     * @deprecated since 3.1, we'll use the BasePageMetaResolver in future versions.
     */
    constructor(cmsService: CmsService, translation: TranslationService, routingPageMetaResolver: RoutingPageMetaResolver, basePageMetaResolver?: BasePageMetaResolver);
    /**
     * Breadcrumb for the home page.
     *
     * @deprecated since 3.1, as we resolve the homeBreadcrumb$ from the `BasePageMetaResolver`
     */
    protected homeBreadcrumb$: Observable<BreadcrumbMeta[]>;
    /**
     * All the resolved breadcrumbs (including those from Angular child routes).
     *
     * @deprecated since 3.1, as we resolve the breadcrumbs$ from the `BasePageMetaResolver`
     */
    protected breadcrumbs$: Observable<BreadcrumbMeta[]>;
    /**
     * Helper to provide access to the current CMS page
     *
     * @deprecated since 3.1, as we resolve the cms page data from the `BasePageMetaResolver`
     */
    protected cms$: Observable<Page>;
    /**
     * @deprecated since 3.1, we'll start using the `BasePageMetaResolver` to resolve
     * the page title
     */
    protected title$: Observable<string>;
    resolveTitle(): Observable<string>;
    /**
     * @override
     * Resolves a single breadcrumb item to the home page for each `ContentPage`.
     * The home page label is resolved from the translation service.
     */
    resolveBreadcrumbs(): Observable<BreadcrumbMeta[]>;
    /**
     * @override
     * This is added in 3.1 and will be ignored if the `BasePageMetaResolver` is not
     * available.
     */
    resolveRobots(): Observable<PageRobotsMeta[]>;
}
