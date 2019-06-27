import { Observable } from 'rxjs';
import { Page, PageMeta } from '../model/page.model';
import { PageMetaResolver } from '../page/page-meta.resolver';
import { CmsService } from './cms.service';
export declare class PageMetaService {
    protected resolvers: PageMetaResolver[];
    protected cms: CmsService;
    constructor(resolvers: PageMetaResolver[], cms: CmsService);
    getMeta(): Observable<PageMeta>;
    /**
     * return the title resolver with the best match
     * title resovers can by default match on PageType and page template
     * but custom match comparisors can be implemented.
     */
    protected getMetaResolver(page: Page): PageMetaResolver;
}
