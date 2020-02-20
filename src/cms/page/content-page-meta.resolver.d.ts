import { Observable } from 'rxjs';
import { TranslationService } from '../../i18n/translation.service';
import { CmsService } from '../facade/cms.service';
import { Page, PageMeta } from '../model/page.model';
import { PageMetaResolver } from './page-meta.resolver';
import { PageBreadcrumbResolver, PageTitleResolver } from './page.resolvers';
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
    private cms$;
    constructor(cms: CmsService, translation: TranslationService);
    /**
     * @deprecated since version 1.3
     *
     * The resolve method is no longer preferred and will be removed with release 2.0.
     * The caller `PageMetaService` service is improved to expect all individual resolvers
     * instead, so that the code is easier extensible.
     */
    resolve(): Observable<PageMeta> | any;
    resolveTitle(): Observable<string>;
    /**
     * @deprecated since version 1.3
     * With 2.0, the argument(s) will be removed and the return type will change. Use `resolveTitle()` instead
     */
    resolveTitle(page: Page): Observable<string>;
    /**
     * @deprecated since version 1.3
     * This method will removed with with 2.0
     */
    resolveBreadcrumbLabel(): Observable<string>;
    resolveBreadcrumbs(): Observable<any[]>;
    /**
     * @deprecated since version 1.3
     * With 2.0, the argument(s) will be removed and the return type will change. Use `resolveBreadcrumbs()` instead
     */
    resolveBreadcrumbs(_page: Page, breadcrumbLabel: string): Observable<any[]>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ContentPageMetaResolver>;
}

//# sourceMappingURL=content-page-meta.resolver.d.ts.map