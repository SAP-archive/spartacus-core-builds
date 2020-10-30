import { Observable } from 'rxjs';
import { TranslationService } from '../../i18n/translation.service';
import { CmsService } from '../facade/cms.service';
import { BreadcrumbMeta, Page } from '../model/page.model';
import { PageMetaResolver } from './page-meta.resolver';
import { PageBreadcrumbResolver, PageTitleResolver } from './page.resolvers';
import { RoutingPageMetaResolver } from './routing/routing-page-meta.resolver';
/**
 * Resolves the page data for all Content Pages based on the `PageType.CONTENT_PAGE`.
 * More specific resolvers for content pages can be implemented by making them more
 * specific, for example by using the page template (see `CartPageMetaResolver`).
 *
 * The page title, and breadcrumbs are resolved in this implementation only.
 */
import * as ɵngcc0 from '@angular/core';
export declare class ContentPageMetaResolver extends PageMetaResolver implements PageTitleResolver, PageBreadcrumbResolver {
    protected cms: CmsService;
    protected translation: TranslationService;
    protected routingPageMetaResolver: RoutingPageMetaResolver;
    /** helper to provide access to the current CMS page */
    protected cms$: Observable<Page>;
    /**
     * Breadcrumb for the home page.
     */
    protected homeBreadcrumb$: Observable<BreadcrumbMeta[]>;
    /**
     * All the resolved breadcrumbs (including those from Angular child routes).
     */
    private breadcrumbs$;
    constructor(cms: CmsService, translation: TranslationService, routingPageMetaResolver: RoutingPageMetaResolver);
    /**
     * Resolves the page title for the ContentPage by taking the title
     * from the backend data.
     */
    resolveTitle(): Observable<string>;
    /**
     * Resolves a single breadcrumb item to the home page for each `ContentPage`.
     * The home page label is resolved from the translation service.
     */
    resolveBreadcrumbs(): Observable<BreadcrumbMeta[]>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ContentPageMetaResolver, never>;
}

//# sourceMappingURL=content-page-meta.resolver.d.ts.map