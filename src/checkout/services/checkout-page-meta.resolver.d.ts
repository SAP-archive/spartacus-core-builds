import { Observable } from 'rxjs';
import { ActiveCartService } from '../../cart/facade/active-cart.service';
import { PageRobotsMeta } from '../../cms/model/page.model';
import { BasePageMetaResolver } from '../../cms/page/base-page-meta.resolver';
import { PageMetaResolver } from '../../cms/page/page-meta.resolver';
import { PageRobotsResolver, PageTitleResolver } from '../../cms/page/page.resolvers';
import { TranslationService } from '../../i18n/translation.service';
/**
 * Resolves the page data for all Content Pages based on the `PageType.CONTENT_PAGE`
 * and the `MultiStepCheckoutSummaryPageTemplate`. If the checkout page matches this template,
 * the more generic `ContentPageMetaResolver` is overridden by this resolver.
 *
 * The page title and robots are resolved in this implementation only.
 */
import * as ɵngcc0 from '@angular/core';
export declare class CheckoutPageMetaResolver extends PageMetaResolver implements PageTitleResolver, PageRobotsResolver {
    protected translation: TranslationService;
    protected activeCartService: ActiveCartService;
    protected basePageMetaResolver?: BasePageMetaResolver;
    protected cart$: Observable<import("../../model").Cart>;
    /**
     * @deprecated since 3.1, we'll use the BasePageMetaResolver in future versions
     */
    constructor(translation: TranslationService, activeCartService: ActiveCartService);
    constructor(translation: TranslationService, activeCartService: ActiveCartService, basePageMetaResolver?: BasePageMetaResolver);
    /**
     * Resolves the page title from the translation `pageMetaResolver.checkout.title`
     */
    resolveTitle(): Observable<string>;
    /**
     * @Override Returns robots for the checkout pages, which default to NOINDEX/NOFOLLOW.
     */
    resolveRobots(): Observable<PageRobotsMeta[]>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CheckoutPageMetaResolver, [null, null, { optional: true; }]>;
}

//# sourceMappingURL=checkout-page-meta.resolver.d.ts.map