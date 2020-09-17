import { Observable } from 'rxjs';
import { TranslationService } from '../../i18n/translation.service';
import { CmsService } from '../facade/cms.service';
import { BreadcrumbMeta, Page } from '../model/page.model';
import { PageMetaResolver } from './page-meta.resolver';
import { PageBreadcrumbResolver, PageTitleResolver } from './page.resolvers';
/**
 * Resolves the page data for all Content Pages based on the `PageType.CONTENT_PAGE`.
 * More specific resolvers for content pages can be implemented by making them more
 * specific, for example by using the page template (see `CartPageMetaResolver`).
 *
 * The page title, and breadcrumbs are resolved in this implementation only.
 */
export declare class ContentPageMetaResolver extends PageMetaResolver implements PageTitleResolver, PageBreadcrumbResolver {
    protected cms: CmsService;
    protected translation: TranslationService;
    /** helper to provie access to the current CMS page */
    protected cms$: Observable<Page>;
    constructor(cms: CmsService, translation: TranslationService);
    /**
     * Resolves the page title for the ContentPage by taking the title
     * from the backend data.
     */
    resolveTitle(): Observable<string>;
    /**
     * Resolves a single breacrumb item to the home page for each `ContentPage`.
     * The home page label is resolved from the translation service.
     */
    resolveBreadcrumbs(): Observable<BreadcrumbMeta[]>;
}
