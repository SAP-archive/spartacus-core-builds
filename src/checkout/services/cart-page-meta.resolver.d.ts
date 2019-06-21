import { Observable } from 'rxjs';
import { CmsService } from '../../cms/facade/cms.service';
import { Page, PageMeta, PageRobotsMeta } from '../../cms/model/page.model';
import { PageMetaResolver } from '../../cms/page/page-meta.resolver';
import { PageRobotsResolver, PageTitleResolver } from '../../cms/page/page.resolvers';
export declare class CartPageMetaResolver extends PageMetaResolver implements PageTitleResolver, PageRobotsResolver {
    protected cms: CmsService;
    constructor(cms: CmsService);
    resolve(): Observable<PageMeta>;
    resolveTitle(page: Page): Observable<string>;
    resolveRobots(): Observable<PageRobotsMeta[]>;
}
