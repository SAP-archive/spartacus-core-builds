import { Observable } from 'rxjs';
import { Page, PageMeta } from '../model/page.model';
import { PageType } from '../../model/cms.model';
export declare abstract class PageMetaResolver {
    pageType: PageType;
    pageTemplate: string;
    abstract resolve(): Observable<PageMeta>;
    getScore(page: Page): number;
}
