import { Observable } from 'rxjs';
import { CmsService } from '../facade/cms.service';
import { PageMetaResolver } from './page-meta.resolver';
import { PageMeta, Page } from '../model/page.model';
import { PageTitleResolver } from './page.resolvers';
export declare class ContentPageMetaResolver extends PageMetaResolver implements PageTitleResolver {
    protected cms: CmsService;
    constructor(cms: CmsService);
    resolve(): Observable<PageMeta>;
    resolveTitle(page: Page): Observable<string>;
}
