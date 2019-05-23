import { Observable } from 'rxjs';
import { CartService } from '../../cart/facade/cart.service';
import { CmsService } from '../../cms/facade/cms.service';
import { Page, PageMeta, PageRobotsMeta } from '../../cms/model/page.model';
import { PageMetaResolver } from '../../cms/page/page-meta.resolver';
import { PageRobotsResolver, PageTitleResolver } from '../../cms/page/page.resolvers';
import { TranslationService } from '../../i18n/translation.service';
export declare class CartPageMetaResolver extends PageMetaResolver implements PageTitleResolver, PageRobotsResolver {
    protected cartService: CartService;
    protected cms: CmsService;
    protected translation: TranslationService;
    constructor(cartService: CartService, cms: CmsService, translation: TranslationService);
    resolve(): Observable<PageMeta>;
    resolveTitle(page: Page): Observable<string>;
    resolveRobots(): Observable<PageRobotsMeta[]>;
}
