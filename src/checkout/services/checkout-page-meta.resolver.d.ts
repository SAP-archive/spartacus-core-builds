import { Observable } from 'rxjs';
import { ActiveCartService } from '../../cart/facade/active-cart.service';
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
    protected translation: TranslationService;
    protected activeCartService: ActiveCartService;
    private cart$;
    constructor(translation: TranslationService, activeCartService: ActiveCartService);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQtcGFnZS1tZXRhLnJlc29sdmVyLmQudHMiLCJzb3VyY2VzIjpbImNoZWNrb3V0LXBhZ2UtbWV0YS5yZXNvbHZlci5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7QUFjQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0JBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQWN0aXZlQ2FydFNlcnZpY2UgfSBmcm9tICcuLi8uLi9jYXJ0L2ZhY2FkZS9hY3RpdmUtY2FydC5zZXJ2aWNlJztcbmltcG9ydCB7IFBhZ2VNZXRhLCBQYWdlUm9ib3RzTWV0YSB9IGZyb20gJy4uLy4uL2Ntcy9tb2RlbC9wYWdlLm1vZGVsJztcbmltcG9ydCB7IFBhZ2VNZXRhUmVzb2x2ZXIgfSBmcm9tICcuLi8uLi9jbXMvcGFnZS9wYWdlLW1ldGEucmVzb2x2ZXInO1xuaW1wb3J0IHsgUGFnZVJvYm90c1Jlc29sdmVyLCBQYWdlVGl0bGVSZXNvbHZlciB9IGZyb20gJy4uLy4uL2Ntcy9wYWdlL3BhZ2UucmVzb2x2ZXJzJztcbmltcG9ydCB7IFRyYW5zbGF0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uL2kxOG4vdHJhbnNsYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBDYXJ0IH0gZnJvbSAnLi4vLi4vbW9kZWwvY2FydC5tb2RlbCc7XG4vKipcbiAqIFJlc29sdmVzIHRoZSBwYWdlIGRhdGEgZm9yIGFsbCBDb250ZW50IFBhZ2VzIGJhc2VkIG9uIHRoZSBgUGFnZVR5cGUuQ09OVEVOVF9QQUdFYFxuICogYW5kIHRoZSBgTXVsdGlTdGVwQ2hlY2tvdXRTdW1tYXJ5UGFnZVRlbXBsYXRlYC4gSWYgdGhlIGNoZWNrb3V0IHBhZ2UgbWF0Y2hlcyB0aGlzIHRlbXBsYXRlLFxuICogdGhlIG1vcmUgZ2VuZXJpYyBgQ29udGVudFBhZ2VNZXRhUmVzb2x2ZXJgIGlzIG92ZXJyaWRlbiBieSB0aGlzIHJlc29sdmVyLlxuICpcbiAqIFRoZSBwYWdlIHRpdGxlIGFuZCByb2JvdHMgYXJlIHJlc29sdmVkIGluIHRoaXMgaW1wbGVtZW50YXRpb24gb25seS5cbiAqL1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgQ2hlY2tvdXRQYWdlTWV0YVJlc29sdmVyIGV4dGVuZHMgUGFnZU1ldGFSZXNvbHZlciBpbXBsZW1lbnRzIFBhZ2VUaXRsZVJlc29sdmVyLCBQYWdlUm9ib3RzUmVzb2x2ZXIge1xuICAgIHByb3RlY3RlZCB0cmFuc2xhdGlvbjogVHJhbnNsYXRpb25TZXJ2aWNlO1xuICAgIHByb3RlY3RlZCBhY3RpdmVDYXJ0U2VydmljZTogQWN0aXZlQ2FydFNlcnZpY2U7XG4gICAgcHJpdmF0ZSBjYXJ0JDtcbiAgICBjb25zdHJ1Y3Rvcih0cmFuc2xhdGlvbjogVHJhbnNsYXRpb25TZXJ2aWNlLCBhY3RpdmVDYXJ0U2VydmljZTogQWN0aXZlQ2FydFNlcnZpY2UpO1xuICAgIC8qKlxuICAgICAqIEBkZXByZWNhdGVkIHNpbmNlIHZlcnNpb24gMS4zXG4gICAgICpcbiAgICAgKiBUaGUgcmVzb2x2ZSBtZXRob2QgaXMgbm8gbG9uZ2VyIHByZWZlcnJlZCBhbmQgd2lsbCBiZSByZW1vdmVkIHdpdGggcmVsZWFzZSAyLjAuXG4gICAgICogVGhlIGNhbGxlciBgUGFnZU1ldGFTZXJ2aWNlYCBzZXJ2aWNlIGlzIGltcHJvdmVkIHRvIGV4cGVjdCBhbGwgaW5kaXZpZHVhbCByZXNvbHZlcnNcbiAgICAgKiBpbnN0ZWFkLCBzbyB0aGF0IHRoZSBjb2RlIGlzIGVhc2llciBleHRlbnNpYmxlLlxuICAgICAqL1xuICAgIHJlc29sdmUoKTogT2JzZXJ2YWJsZTxQYWdlTWV0YT4gfCBhbnk7XG4gICAgcmVzb2x2ZVRpdGxlKCk6IE9ic2VydmFibGU8c3RyaW5nPjtcbiAgICAvKipcbiAgICAgKiBAZGVwcmVjYXRlZCBzaW5jZSB2ZXJzaW9uIDEuM1xuICAgICAqIFdpdGggMi4wLCB0aGUgYXJndW1lbnQocykgd2lsbCBiZSByZW1vdmVkIGFuZCB0aGUgcmV0dXJuIHR5cGUgd2lsbCBjaGFuZ2UuIFVzZSBgcmVzb2x2ZVRpdGxlKClgIGluc3RlYWRcbiAgICAgKi9cbiAgICByZXNvbHZlVGl0bGUoY2FydDogQ2FydCk6IE9ic2VydmFibGU8c3RyaW5nPjtcbiAgICByZXNvbHZlUm9ib3RzKCk6IE9ic2VydmFibGU8UGFnZVJvYm90c01ldGFbXT47XG59XG4iXX0=