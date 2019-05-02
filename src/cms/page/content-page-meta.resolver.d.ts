import { Observable } from 'rxjs';
import { CmsService } from '../facade/cms.service';
import { Page, PageMeta } from '../model/page.model';
import { PageMetaResolver } from './page-meta.resolver';
import { PageBreadcrumbResolver, PageTitleResolver } from './page.resolvers';
export declare class ContentPageMetaResolver extends PageMetaResolver implements PageTitleResolver, PageBreadcrumbResolver {
    protected cms: CmsService;
    constructor(cms: CmsService);
    resolve(): Observable<PageMeta>;
    resolveTitle(page: Page): Observable<string>;
    resolveBreadcrumbs(_page: Page): Observable<any[]>;
}
