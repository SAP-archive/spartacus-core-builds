import { Observable } from 'rxjs';
import { CmsService } from '../facade/cms.service';
import { Page, PageMeta } from '../model/page.model';
import { PageMetaResolver } from './page-meta.resolver';
import { PageBreadcrumbResolver, PageTitleResolver } from './page.resolvers';
import { TranslationService } from '../../i18n/translation.service';
export declare class ContentPageMetaResolver extends PageMetaResolver implements PageTitleResolver, PageBreadcrumbResolver {
    protected cms: CmsService;
    protected translation: TranslationService;
    constructor(cms: CmsService, translation: TranslationService);
    resolve(): Observable<PageMeta>;
    resolveTitle(page: Page): Observable<string>;
    resolveBreadcrumbLabel(): Observable<string>;
    resolveBreadcrumbs(_page: Page, breadcrumbLabel: string): Observable<any[]>;
}
