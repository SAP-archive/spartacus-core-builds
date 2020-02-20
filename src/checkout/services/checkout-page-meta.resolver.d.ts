import { Observable } from 'rxjs';
import { CartService } from '../../cart/facade/cart.service';
import { PageMeta, PageRobotsMeta } from '../../cms/model/page.model';
import { PageMetaResolver } from '../../cms/page/page-meta.resolver';
import { PageRobotsResolver, PageTitleResolver } from '../../cms/page/page.resolvers';
import { TranslationService } from '../../i18n/translation.service';
import { Cart } from '../../model/cart.model';
/**
 * Resolves the page data for all Content Pages based on the `PageType.CONTENT_PAGE`
 * and the `MultiStepCheckoutSummaryPageTemplate`. If the checkout page matches this template,
 * the more generic `ContentPageMetaResolver` is overriden by this resolver.
 *
 * The page title and robots are resolved in this implementation only.
 */
import * as ɵngcc0 from '@angular/core';
export declare class CheckoutPageMetaResolver extends PageMetaResolver implements PageTitleResolver, PageRobotsResolver {
    protected cartService: CartService;
    protected translation: TranslationService;
    private cart$;
    constructor(cartService: CartService, translation: TranslationService);
    /**
     * @deprecated since version 1.3
     *
     * The resolve method is no longer preferred and will be removed with release 2.0.
     * The caller `PageMetaService` service is improved to expect all individual resolvers
     * instead, so that the code is easier extensible.
     */
    resolve(): Observable<PageMeta> | any;
    resolveTitle(): Observable<string>;
    /**
     * @deprecated since version 1.3
     * With 2.0, the argument(s) will be removed and the return type will change. Use `resolveTitle()` instead
     */
    resolveTitle(cart: Cart): Observable<string>;
    resolveRobots(): Observable<PageRobotsMeta[]>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CheckoutPageMetaResolver>;
}

//# sourceMappingURL=checkout-page-meta.resolver.d.ts.map