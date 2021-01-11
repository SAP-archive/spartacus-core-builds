import { Observable } from 'rxjs';
import { TranslationService } from '../../i18n/translation.service';
import { CmsService } from '../facade/cms.service';
import { BreadcrumbMeta, Page, PageRobotsMeta } from '../model/page.model';
import { PageBreadcrumbResolver, PageRobotsResolver, PageTitleResolver } from './page.resolvers';
import { RoutingPageMetaResolver } from './routing/routing-page-meta.resolver';
import * as ɵngcc0 from '@angular/core';
export declare class BasePageMetaResolver implements PageTitleResolver, PageBreadcrumbResolver, PageRobotsResolver {
    protected cmsService: CmsService;
    protected translation: TranslationService;
    protected routingPageMetaResolver: RoutingPageMetaResolver;
    constructor(cmsService: CmsService, translation: TranslationService, routingPageMetaResolver: RoutingPageMetaResolver);
    /**
     * Helper to provide access to the current CMS page
     */
    protected page$: Observable<Page>;
    protected title$: Observable<string>;
    protected robots$: Observable<PageRobotsMeta[]>;
    /**
     * Breadcrumb for the home page.
     */
    protected homeBreadcrumb$: Observable<BreadcrumbMeta[]>;
    /**
     * All the resolved breadcrumbs (including those from Angular child routes).
     */
    protected breadcrumb$: Observable<BreadcrumbMeta[]>;
    resolveTitle(): Observable<string>;
    resolveBreadcrumbs(): Observable<BreadcrumbMeta[]>;
    resolveRobots(): Observable<PageRobotsMeta[]>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<BasePageMetaResolver, never>;
}

//# sourceMappingURL=base-page-meta.resolver.d.ts.map