/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { combineLatest, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { CartService } from '../../cart/facade/cart.service';
import { PageRobotsMeta } from '../../cms/model/page.model';
import { PageMetaResolver } from '../../cms/page/page-meta.resolver';
import { TranslationService } from '../../i18n/translation.service';
import { PageType } from '../../model/cms.model';
import * as i0 from "@angular/core";
import * as i1 from "../../cart/facade/cart.service";
import * as i2 from "../../i18n/translation.service";
/**
 * Resolves the page data for all Content Pages based on the `PageType.CONTENT_PAGE`
 * and the `MultiStepCheckoutSummaryPageTemplate`. If the checkout page matches this template,
 * the more generic `ContentPageMetaResolver` is overriden by this resolver.
 *
 * The page title and robots are resolved in this implementation only.
 */
var CheckoutPageMetaResolver = /** @class */ (function (_super) {
    tslib_1.__extends(CheckoutPageMetaResolver, _super);
    function CheckoutPageMetaResolver(cartService, translation) {
        var _this = _super.call(this) || this;
        _this.cartService = cartService;
        _this.translation = translation;
        _this.cart$ = _this.cartService.getActive();
        _this.pageType = PageType.CONTENT_PAGE;
        _this.pageTemplate = 'MultiStepCheckoutSummaryPageTemplate';
        return _this;
    }
    /**
     * @deprecated since version 1.3
     *
     * The resolve method is no longer preferred and will be removed with release 2.0.
     * The caller `PageMetaService` service is improved to expect all individual resolvers
     * instead, so that the code is easier extensible.
     */
    /**
     * @deprecated since version 1.3
     *
     * The resolve method is no longer preferred and will be removed with release 2.0.
     * The caller `PageMetaService` service is improved to expect all individual resolvers
     * instead, so that the code is easier extensible.
     * @return {?}
     */
    CheckoutPageMetaResolver.prototype.resolve = /**
     * @deprecated since version 1.3
     *
     * The resolve method is no longer preferred and will be removed with release 2.0.
     * The caller `PageMetaService` service is improved to expect all individual resolvers
     * instead, so that the code is easier extensible.
     * @return {?}
     */
    function () {
        var _this = this;
        return this.cart$.pipe(switchMap((/**
         * @param {?} cart
         * @return {?}
         */
        function (cart) {
            return combineLatest([_this.resolveTitle(cart), _this.resolveRobots()]);
        })), map((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = tslib_1.__read(_a, 2), title = _b[0], robots = _b[1];
            return ({ title: title, robots: robots });
        })));
    };
    /**
     * @param {?=} cart
     * @return {?}
     */
    CheckoutPageMetaResolver.prototype.resolveTitle = /**
     * @param {?=} cart
     * @return {?}
     */
    function (cart) {
        var _this = this;
        /** @type {?} */
        var cart$ = cart ? of(cart) : this.cart$;
        return cart$.pipe(switchMap((/**
         * @param {?} c
         * @return {?}
         */
        function (c) {
            return _this.translation.translate('pageMetaResolver.checkout.title', {
                count: c.totalItems,
            });
        })));
    };
    /**
     * @return {?}
     */
    CheckoutPageMetaResolver.prototype.resolveRobots = /**
     * @return {?}
     */
    function () {
        return of([PageRobotsMeta.NOFOLLOW, PageRobotsMeta.NOINDEX]);
    };
    CheckoutPageMetaResolver.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    CheckoutPageMetaResolver.ctorParameters = function () { return [
        { type: CartService },
        { type: TranslationService }
    ]; };
    /** @nocollapse */ CheckoutPageMetaResolver.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function CheckoutPageMetaResolver_Factory() { return new CheckoutPageMetaResolver(i0.ɵɵinject(i1.CartService), i0.ɵɵinject(i2.TranslationService)); }, token: CheckoutPageMetaResolver, providedIn: "root" });
    return CheckoutPageMetaResolver;
}(PageMetaResolver));
export { CheckoutPageMetaResolver };
if (false) {
    /**
     * @type {?}
     * @private
     */
    CheckoutPageMetaResolver.prototype.cart$;
    /**
     * @type {?}
     * @protected
     */
    CheckoutPageMetaResolver.prototype.cartService;
    /**
     * @type {?}
     * @protected
     */
    CheckoutPageMetaResolver.prototype.translation;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQtcGFnZS1tZXRhLnJlc29sdmVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2NoZWNrb3V0L3NlcnZpY2VzL2NoZWNrb3V0LXBhZ2UtbWV0YS5yZXNvbHZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGFBQWEsRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDckQsT0FBTyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNoRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDN0QsT0FBTyxFQUFZLGNBQWMsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3RFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBS3JFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBRXBFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7Ozs7Ozs7Ozs7QUFTakQ7SUFHOEMsb0RBQWdCO0lBSTVELGtDQUNZLFdBQXdCLEVBQ3hCLFdBQStCO1FBRjNDLFlBSUUsaUJBQU8sU0FHUjtRQU5XLGlCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLGlCQUFXLEdBQVgsV0FBVyxDQUFvQjtRQUpuQyxXQUFLLEdBQUcsS0FBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQU8zQyxLQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQyxZQUFZLENBQUM7UUFDdEMsS0FBSSxDQUFDLFlBQVksR0FBRyxzQ0FBc0MsQ0FBQzs7SUFDN0QsQ0FBQztJQUVEOzs7Ozs7T0FNRzs7Ozs7Ozs7O0lBQ0gsMENBQU87Ozs7Ozs7O0lBQVA7UUFBQSxpQkFPQztRQU5DLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQ3BCLFNBQVM7Ozs7UUFBQyxVQUFBLElBQUk7WUFDWixPQUFBLGFBQWEsQ0FBQyxDQUFDLEtBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUM7UUFBOUQsQ0FBOEQsRUFDL0QsRUFDRCxHQUFHOzs7O1FBQUMsVUFBQyxFQUFlO2dCQUFmLDBCQUFlLEVBQWQsYUFBSyxFQUFFLGNBQU07WUFBTSxPQUFBLENBQUMsRUFBRSxLQUFLLE9BQUEsRUFBRSxNQUFNLFFBQUEsRUFBRSxDQUFDO1FBQW5CLENBQW1CLEVBQUMsQ0FDOUMsQ0FBQztJQUNKLENBQUM7Ozs7O0lBU0QsK0NBQVk7Ozs7SUFBWixVQUFhLElBQVc7UUFBeEIsaUJBU0M7O1lBUk8sS0FBSyxHQUFxQixJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUs7UUFDNUQsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUNmLFNBQVM7Ozs7UUFBQyxVQUFBLENBQUM7WUFDVCxPQUFBLEtBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLGlDQUFpQyxFQUFFO2dCQUM1RCxLQUFLLEVBQUUsQ0FBQyxDQUFDLFVBQVU7YUFDcEIsQ0FBQztRQUZGLENBRUUsRUFDSCxDQUNGLENBQUM7SUFDSixDQUFDOzs7O0lBRUQsZ0RBQWE7OztJQUFiO1FBQ0UsT0FBTyxFQUFFLENBQUMsQ0FBQyxjQUFjLENBQUMsUUFBUSxFQUFFLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQy9ELENBQUM7O2dCQXBERixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O2dCQXBCUSxXQUFXO2dCQU9YLGtCQUFrQjs7O21DQVYzQjtDQTBFQyxBQXJERCxDQUc4QyxnQkFBZ0IsR0FrRDdEO1NBbERZLHdCQUF3Qjs7Ozs7O0lBRW5DLHlDQUE2Qzs7Ozs7SUFHM0MsK0NBQWtDOzs7OztJQUNsQywrQ0FBeUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBjb21iaW5lTGF0ZXN0LCBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCBzd2l0Y2hNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBDYXJ0U2VydmljZSB9IGZyb20gJy4uLy4uL2NhcnQvZmFjYWRlL2NhcnQuc2VydmljZSc7XG5pbXBvcnQgeyBQYWdlTWV0YSwgUGFnZVJvYm90c01ldGEgfSBmcm9tICcuLi8uLi9jbXMvbW9kZWwvcGFnZS5tb2RlbCc7XG5pbXBvcnQgeyBQYWdlTWV0YVJlc29sdmVyIH0gZnJvbSAnLi4vLi4vY21zL3BhZ2UvcGFnZS1tZXRhLnJlc29sdmVyJztcbmltcG9ydCB7XG4gIFBhZ2VSb2JvdHNSZXNvbHZlcixcbiAgUGFnZVRpdGxlUmVzb2x2ZXIsXG59IGZyb20gJy4uLy4uL2Ntcy9wYWdlL3BhZ2UucmVzb2x2ZXJzJztcbmltcG9ydCB7IFRyYW5zbGF0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uL2kxOG4vdHJhbnNsYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBDYXJ0IH0gZnJvbSAnLi4vLi4vbW9kZWwvY2FydC5tb2RlbCc7XG5pbXBvcnQgeyBQYWdlVHlwZSB9IGZyb20gJy4uLy4uL21vZGVsL2Ntcy5tb2RlbCc7XG5cbi8qKlxuICogUmVzb2x2ZXMgdGhlIHBhZ2UgZGF0YSBmb3IgYWxsIENvbnRlbnQgUGFnZXMgYmFzZWQgb24gdGhlIGBQYWdlVHlwZS5DT05URU5UX1BBR0VgXG4gKiBhbmQgdGhlIGBNdWx0aVN0ZXBDaGVja291dFN1bW1hcnlQYWdlVGVtcGxhdGVgLiBJZiB0aGUgY2hlY2tvdXQgcGFnZSBtYXRjaGVzIHRoaXMgdGVtcGxhdGUsXG4gKiB0aGUgbW9yZSBnZW5lcmljIGBDb250ZW50UGFnZU1ldGFSZXNvbHZlcmAgaXMgb3ZlcnJpZGVuIGJ5IHRoaXMgcmVzb2x2ZXIuXG4gKlxuICogVGhlIHBhZ2UgdGl0bGUgYW5kIHJvYm90cyBhcmUgcmVzb2x2ZWQgaW4gdGhpcyBpbXBsZW1lbnRhdGlvbiBvbmx5LlxuICovXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgQ2hlY2tvdXRQYWdlTWV0YVJlc29sdmVyIGV4dGVuZHMgUGFnZU1ldGFSZXNvbHZlclxuICBpbXBsZW1lbnRzIFBhZ2VUaXRsZVJlc29sdmVyLCBQYWdlUm9ib3RzUmVzb2x2ZXIge1xuICBwcml2YXRlIGNhcnQkID0gdGhpcy5jYXJ0U2VydmljZS5nZXRBY3RpdmUoKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgY2FydFNlcnZpY2U6IENhcnRTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCB0cmFuc2xhdGlvbjogVHJhbnNsYXRpb25TZXJ2aWNlXG4gICkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5wYWdlVHlwZSA9IFBhZ2VUeXBlLkNPTlRFTlRfUEFHRTtcbiAgICB0aGlzLnBhZ2VUZW1wbGF0ZSA9ICdNdWx0aVN0ZXBDaGVja291dFN1bW1hcnlQYWdlVGVtcGxhdGUnO1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIHNpbmNlIHZlcnNpb24gMS4zXG4gICAqXG4gICAqIFRoZSByZXNvbHZlIG1ldGhvZCBpcyBubyBsb25nZXIgcHJlZmVycmVkIGFuZCB3aWxsIGJlIHJlbW92ZWQgd2l0aCByZWxlYXNlIDIuMC5cbiAgICogVGhlIGNhbGxlciBgUGFnZU1ldGFTZXJ2aWNlYCBzZXJ2aWNlIGlzIGltcHJvdmVkIHRvIGV4cGVjdCBhbGwgaW5kaXZpZHVhbCByZXNvbHZlcnNcbiAgICogaW5zdGVhZCwgc28gdGhhdCB0aGUgY29kZSBpcyBlYXNpZXIgZXh0ZW5zaWJsZS5cbiAgICovXG4gIHJlc29sdmUoKTogT2JzZXJ2YWJsZTxQYWdlTWV0YT4gfCBhbnkge1xuICAgIHJldHVybiB0aGlzLmNhcnQkLnBpcGUoXG4gICAgICBzd2l0Y2hNYXAoY2FydCA9PlxuICAgICAgICBjb21iaW5lTGF0ZXN0KFt0aGlzLnJlc29sdmVUaXRsZShjYXJ0KSwgdGhpcy5yZXNvbHZlUm9ib3RzKCldKVxuICAgICAgKSxcbiAgICAgIG1hcCgoW3RpdGxlLCByb2JvdHNdKSA9PiAoeyB0aXRsZSwgcm9ib3RzIH0pKVxuICAgICk7XG4gIH1cblxuICByZXNvbHZlVGl0bGUoKTogT2JzZXJ2YWJsZTxzdHJpbmc+O1xuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgc2luY2UgdmVyc2lvbiAxLjNcbiAgICogV2l0aCAyLjAsIHRoZSBhcmd1bWVudChzKSB3aWxsIGJlIHJlbW92ZWQgYW5kIHRoZSByZXR1cm4gdHlwZSB3aWxsIGNoYW5nZS4gVXNlIGByZXNvbHZlVGl0bGUoKWAgaW5zdGVhZFxuICAgKi9cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiB1bmlmaWVkLXNpZ25hdHVyZXNcbiAgcmVzb2x2ZVRpdGxlKGNhcnQ6IENhcnQpOiBPYnNlcnZhYmxlPHN0cmluZz47XG4gIHJlc29sdmVUaXRsZShjYXJ0PzogQ2FydCk6IE9ic2VydmFibGU8c3RyaW5nPiB7XG4gICAgY29uc3QgY2FydCQ6IE9ic2VydmFibGU8Q2FydD4gPSBjYXJ0ID8gb2YoY2FydCkgOiB0aGlzLmNhcnQkO1xuICAgIHJldHVybiBjYXJ0JC5waXBlKFxuICAgICAgc3dpdGNoTWFwKGMgPT5cbiAgICAgICAgdGhpcy50cmFuc2xhdGlvbi50cmFuc2xhdGUoJ3BhZ2VNZXRhUmVzb2x2ZXIuY2hlY2tvdXQudGl0bGUnLCB7XG4gICAgICAgICAgY291bnQ6IGMudG90YWxJdGVtcyxcbiAgICAgICAgfSlcbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgcmVzb2x2ZVJvYm90cygpOiBPYnNlcnZhYmxlPFBhZ2VSb2JvdHNNZXRhW10+IHtcbiAgICByZXR1cm4gb2YoW1BhZ2VSb2JvdHNNZXRhLk5PRk9MTE9XLCBQYWdlUm9ib3RzTWV0YS5OT0lOREVYXSk7XG4gIH1cbn1cbiJdfQ==