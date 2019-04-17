import { Observable } from 'rxjs';
import { PageType } from '../../occ';
import { Page, PageMeta } from '../model/page.model';
export declare abstract class PageMetaResolver {
    pageType: PageType;
    pageTemplate: string;
    abstract resolve(): Observable<PageMeta>;
    getScore(page: Page): number;
}
