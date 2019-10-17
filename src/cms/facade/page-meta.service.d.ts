import { Observable } from 'rxjs';
import { FeatureConfigService } from '../../features-config';
import { Page, PageMeta } from '../model/page.model';
import { PageMetaResolver } from '../page/page-meta.resolver';
import { CmsService } from './cms.service';
export declare class PageMetaService {
    protected resolvers: PageMetaResolver[];
    protected cms: CmsService;
    protected featureConfigService?: FeatureConfigService;
    constructor(resolvers: PageMetaResolver[], cms: CmsService, featureConfigService?: FeatureConfigService);
    /**
     * The list of resolver interfaces will be evaluated for the pageResolvers.
     *
     * TOOD: optimize browser vs SSR resolvers; image, robots and description
     *       aren't needed during browsing.
     * TODO: we can make the list of resolver types configurable
     */
    resolverMethods: {
        title: string;
        heading: string;
        description: string;
        breadcrumbs: string;
        image: string;
        robots: string;
    };
    getMeta(): Observable<PageMeta>;
    /**
     * If a pageResolver has implemented a resolver interface, the resolved data
     * is merged into the `PageMeta` object.
     * @param metaResolver
     */
    private resolve;
    /**
     * return the resolver with the best match
     * resovers can by default match on PageType and page template
     * but custom match comparisors can be implemented.
     */
    protected getMetaResolver(page: Page): PageMetaResolver;
}
