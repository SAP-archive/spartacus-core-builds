/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { of, combineLatest } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { RoutingService } from '../../routing/facade/routing.service';
import { PageType } from '../../occ/occ-models/occ.models';
import { CartService } from '../../cart/facade/cart.service';
import { PageMetaResolver } from '../../cms/page/page-meta.resolver';
import { PageRobotsMeta } from '../../cms/model/page.model';
import * as i0 from "@angular/core";
import * as i1 from "../../routing/facade/routing.service";
import * as i2 from "../../cart/facade/cart.service";
var CheckoutPageMetaResolver = /** @class */ (function (_super) {
    tslib_1.__extends(CheckoutPageMetaResolver, _super);
    function CheckoutPageMetaResolver(routingService, cartService) {
        var _this = _super.call(this) || this;
        _this.routingService = routingService;
        _this.cartService = cartService;
        _this.pageType = PageType.CONTENT_PAGE;
        _this.pageTemplate = 'MultiStepCheckoutSummaryPageTemplate';
        return _this;
    }
    /**
     * @return {?}
     */
    CheckoutPageMetaResolver.prototype.resolve = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return this.cartService.getActive().pipe(switchMap(function (cart) {
            return combineLatest([_this.resolveTitle(cart), _this.resolveRobots()]);
        }), map(function (_a) {
            var _b = tslib_1.__read(_a, 2), title = _b[0], robots = _b[1];
            return ({ title: title, robots: robots });
        }));
    };
    /**
     * @param {?} cart
     * @return {?}
     */
    CheckoutPageMetaResolver.prototype.resolveTitle = /**
     * @param {?} cart
     * @return {?}
     */
    function (cart) {
        return of("Checkout " + cart.totalItems + " items");
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
        { type: RoutingService },
        { type: CartService }
    ]; };
    /** @nocollapse */ CheckoutPageMetaResolver.ngInjectableDef = i0.defineInjectable({ factory: function CheckoutPageMetaResolver_Factory() { return new CheckoutPageMetaResolver(i0.inject(i1.RoutingService), i0.inject(i2.CartService)); }, token: CheckoutPageMetaResolver, providedIn: "root" });
    return CheckoutPageMetaResolver;
}(PageMetaResolver));
export { CheckoutPageMetaResolver };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    CheckoutPageMetaResolver.prototype.routingService;
    /**
     * @type {?}
     * @protected
     */
    CheckoutPageMetaResolver.prototype.cartService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQtcGFnZS1tZXRhLnJlc29sdmVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2NoZWNrb3V0L3NlcnZpY2VzL2NoZWNrb3V0LXBhZ2UtbWV0YS5yZXNvbHZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFjLEVBQUUsRUFBRSxhQUFhLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDckQsT0FBTyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNoRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDdEUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQzNELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUM3RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUtyRSxPQUFPLEVBQVksY0FBYyxFQUFFLE1BQU0sNEJBQTRCLENBQUM7Ozs7QUFHdEU7SUFHOEMsb0RBQWdCO0lBRTVELGtDQUNZLGNBQThCLEVBQzlCLFdBQXdCO1FBRnBDLFlBSUUsaUJBQU8sU0FHUjtRQU5XLG9CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixpQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUdsQyxLQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQyxZQUFZLENBQUM7UUFDdEMsS0FBSSxDQUFDLFlBQVksR0FBRyxzQ0FBc0MsQ0FBQzs7SUFDN0QsQ0FBQzs7OztJQUVELDBDQUFPOzs7SUFBUDtRQUFBLGlCQU9DO1FBTkMsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFBRSxDQUFDLElBQUksQ0FDdEMsU0FBUyxDQUFDLFVBQUEsSUFBSTtZQUNaLE9BQUEsYUFBYSxDQUFDLENBQUMsS0FBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQztRQUE5RCxDQUE4RCxDQUMvRCxFQUNELEdBQUcsQ0FBQyxVQUFDLEVBQWU7Z0JBQWYsMEJBQWUsRUFBZCxhQUFLLEVBQUUsY0FBTTtZQUFNLE9BQUEsQ0FBQyxFQUFFLEtBQUssT0FBQSxFQUFFLE1BQU0sUUFBQSxFQUFFLENBQUM7UUFBbkIsQ0FBbUIsQ0FBQyxDQUM5QyxDQUFDO0lBQ0osQ0FBQzs7Ozs7SUFFRCwrQ0FBWTs7OztJQUFaLFVBQWEsSUFBWTtRQUN2QixPQUFPLEVBQUUsQ0FBQyxjQUFZLElBQUksQ0FBQyxVQUFVLFdBQVEsQ0FBQyxDQUFDO0lBQ2pELENBQUM7Ozs7SUFFRCxnREFBYTs7O0lBQWI7UUFDRSxPQUFPLEVBQUUsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxRQUFRLEVBQUUsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDL0QsQ0FBQzs7Z0JBN0JGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBYlEsY0FBYztnQkFFZCxXQUFXOzs7bUNBTHBCO0NBNENDLEFBOUJELENBRzhDLGdCQUFnQixHQTJCN0Q7U0EzQlksd0JBQXdCOzs7Ozs7SUFHakMsa0RBQXdDOzs7OztJQUN4QywrQ0FBa0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiwgY29tYmluZUxhdGVzdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCBzd2l0Y2hNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBSb3V0aW5nU2VydmljZSB9IGZyb20gJy4uLy4uL3JvdXRpbmcvZmFjYWRlL3JvdXRpbmcuc2VydmljZSc7XG5pbXBvcnQgeyBQYWdlVHlwZSB9IGZyb20gJy4uLy4uL29jYy9vY2MtbW9kZWxzL29jYy5tb2RlbHMnO1xuaW1wb3J0IHsgQ2FydFNlcnZpY2UgfSBmcm9tICcuLi8uLi9jYXJ0L2ZhY2FkZS9jYXJ0LnNlcnZpY2UnO1xuaW1wb3J0IHsgUGFnZU1ldGFSZXNvbHZlciB9IGZyb20gJy4uLy4uL2Ntcy9wYWdlL3BhZ2UtbWV0YS5yZXNvbHZlcic7XG5pbXBvcnQge1xuICBQYWdlUm9ib3RzUmVzb2x2ZXIsXG4gIFBhZ2VUaXRsZVJlc29sdmVyLFxufSBmcm9tICcuLi8uLi9jbXMvcGFnZS9wYWdlLnJlc29sdmVycyc7XG5pbXBvcnQgeyBQYWdlTWV0YSwgUGFnZVJvYm90c01ldGEgfSBmcm9tICcuLi8uLi9jbXMvbW9kZWwvcGFnZS5tb2RlbCc7XG5pbXBvcnQgeyBVSUNhcnQgfSBmcm9tICcuLi8uLi9jYXJ0L21vZGVsJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIENoZWNrb3V0UGFnZU1ldGFSZXNvbHZlciBleHRlbmRzIFBhZ2VNZXRhUmVzb2x2ZXJcbiAgaW1wbGVtZW50cyBQYWdlVGl0bGVSZXNvbHZlciwgUGFnZVJvYm90c1Jlc29sdmVyIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIHJvdXRpbmdTZXJ2aWNlOiBSb3V0aW5nU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgY2FydFNlcnZpY2U6IENhcnRTZXJ2aWNlXG4gICkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5wYWdlVHlwZSA9IFBhZ2VUeXBlLkNPTlRFTlRfUEFHRTtcbiAgICB0aGlzLnBhZ2VUZW1wbGF0ZSA9ICdNdWx0aVN0ZXBDaGVja291dFN1bW1hcnlQYWdlVGVtcGxhdGUnO1xuICB9XG5cbiAgcmVzb2x2ZSgpOiBPYnNlcnZhYmxlPFBhZ2VNZXRhPiB7XG4gICAgcmV0dXJuIHRoaXMuY2FydFNlcnZpY2UuZ2V0QWN0aXZlKCkucGlwZShcbiAgICAgIHN3aXRjaE1hcChjYXJ0ID0+XG4gICAgICAgIGNvbWJpbmVMYXRlc3QoW3RoaXMucmVzb2x2ZVRpdGxlKGNhcnQpLCB0aGlzLnJlc29sdmVSb2JvdHMoKV0pXG4gICAgICApLFxuICAgICAgbWFwKChbdGl0bGUsIHJvYm90c10pID0+ICh7IHRpdGxlLCByb2JvdHMgfSkpXG4gICAgKTtcbiAgfVxuXG4gIHJlc29sdmVUaXRsZShjYXJ0OiBVSUNhcnQpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xuICAgIHJldHVybiBvZihgQ2hlY2tvdXQgJHtjYXJ0LnRvdGFsSXRlbXN9IGl0ZW1zYCk7XG4gIH1cblxuICByZXNvbHZlUm9ib3RzKCk6IE9ic2VydmFibGU8UGFnZVJvYm90c01ldGFbXT4ge1xuICAgIHJldHVybiBvZihbUGFnZVJvYm90c01ldGEuTk9GT0xMT1csIFBhZ2VSb2JvdHNNZXRhLk5PSU5ERVhdKTtcbiAgfVxufVxuIl19