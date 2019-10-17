import { Observable } from 'rxjs';
import { PageType } from '../../model/cms.model';
import { Page, PageMeta } from '../model/page.model';
export declare abstract class PageMetaResolver {
    pageType: PageType;
    pageTemplate: string;
    /**
     * The resolve method is no longer preferred and will be removed with release 2.0.
     * The caller `PageMetaService` service is improved to expect all individual resolvers
     * instead, so that the code is easier extensible.
     *
     * @deprecated since version 1.3
     */
    abstract resolve(): Observable<PageMeta>;
    getScore(page: Page): number;
}
