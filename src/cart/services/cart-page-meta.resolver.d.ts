import { Observable } from 'rxjs';
import { CmsService } from '../../cms/facade/cms.service';
import { Page, PageRobotsMeta } from '../../cms/model/page.model';
import { BasePageMetaResolver } from '../../cms/page/base-page-meta.resolver';
import { PageMetaResolver } from '../../cms/page/page-meta.resolver';
import { PageRobotsResolver, PageTitleResolver } from '../../cms/page/page.resolvers';
/**
 * Resolves the page metadata for the Cart page (Using the `PageType.CONTENT_PAGE`
 * and the `CartPageTemplate`). If the cart page matches this template, the more
 * generic `ContentPageMetaResolver` is overridden by this resolver.
 *
 * The page title and robots are resolved in this implementation only.
 *
 * @deprecated since 3.1, in future versions we'll drop this service as the logic
 * is no longer specific since we introduce backend driven robots.
 */
export declare class CartPageMetaResolver extends PageMetaResolver implements PageTitleResolver, PageRobotsResolver {
    protected cms: CmsService;
    protected basePageMetaResolver?: BasePageMetaResolver;
    /**
     * @deprecated since 3.1, we'll use the BasePageMetaResolver in future versions and
     * drop the CmsService from the constructor as it will no longer be used.
     */
    constructor(cms: CmsService);
    constructor(cms: CmsService, basePageMetaResolver?: BasePageMetaResolver);
    /**
     * @deprecated since 3.1, we'll use the BasePageMetaResolver to resolve the page title
     */
    protected cms$: Observable<Page>;
    resolveTitle(): Observable<string>;
    /**
     * @Override Returns robots for the cart pages, which default to NOINDEX/NOFOLLOW.
     */
    resolveRobots(): Observable<PageRobotsMeta[]>;
}
