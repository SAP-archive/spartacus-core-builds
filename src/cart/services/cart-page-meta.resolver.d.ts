import { Observable } from 'rxjs';
import { CmsService } from '../../cms/facade/cms.service';
import { Page, PageRobotsMeta } from '../../cms/model/page.model';
import { PageMetaResolver } from '../../cms/page/page-meta.resolver';
import { PageRobotsResolver, PageTitleResolver } from '../../cms/page/page.resolvers';
/**
 * Resolves the page metadata for the Cart page (Using the `PageType.CONTENT_PAGE`
 * and the `CartPageTemplate`). If the cart page matches this template, the more
 * generic `ContentPageMetaResolver` is overriden by this resolver.
 *
 * The page title and robots are resolved in this implementation only.
 */
export declare class CartPageMetaResolver extends PageMetaResolver implements PageTitleResolver, PageRobotsResolver {
    protected cms: CmsService;
    protected cms$: Observable<Page>;
    constructor(cms: CmsService);
    /**
     * Resolves the page title, which is driven by the backend.
     */
    resolveTitle(): Observable<string>;
    /**
     * Returns robots for the cart pages, which default to NOINDEX and NOFOLLOW.
     */
    resolveRobots(): Observable<PageRobotsMeta[]>;
}
