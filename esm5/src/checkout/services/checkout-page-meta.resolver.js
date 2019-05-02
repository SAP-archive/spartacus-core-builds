/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { combineLatest, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { CartService } from '../../cart/facade/cart.service';
import { PageRobotsMeta } from '../../cms/model/page.model';
import { PageMetaResolver } from '../../cms/page/page-meta.resolver';
import { PageType } from '../../occ/occ-models/occ.models';
import * as i0 from "@angular/core";
import * as i1 from "../../cart/facade/cart.service";
var CheckoutPageMetaResolver = /** @class */ (function (_super) {
    tslib_1.__extends(CheckoutPageMetaResolver, _super);
    function CheckoutPageMetaResolver(cartService) {
        var _this = _super.call(this) || this;
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
        { type: CartService }
    ]; };
    /** @nocollapse */ CheckoutPageMetaResolver.ngInjectableDef = i0.defineInjectable({ factory: function CheckoutPageMetaResolver_Factory() { return new CheckoutPageMetaResolver(i0.inject(i1.CartService)); }, token: CheckoutPageMetaResolver, providedIn: "root" });
    return CheckoutPageMetaResolver;
}(PageMetaResolver));
export { CheckoutPageMetaResolver };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    CheckoutPageMetaResolver.prototype.cartService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQtcGFnZS1tZXRhLnJlc29sdmVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2NoZWNrb3V0L3NlcnZpY2VzL2NoZWNrb3V0LXBhZ2UtbWV0YS5yZXNvbHZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGFBQWEsRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDckQsT0FBTyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNoRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFFN0QsT0FBTyxFQUFZLGNBQWMsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3RFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBS3JFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQzs7O0FBRTNEO0lBRzhDLG9EQUFnQjtJQUU1RCxrQ0FBc0IsV0FBd0I7UUFBOUMsWUFDRSxpQkFBTyxTQUdSO1FBSnFCLGlCQUFXLEdBQVgsV0FBVyxDQUFhO1FBRTVDLEtBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDLFlBQVksQ0FBQztRQUN0QyxLQUFJLENBQUMsWUFBWSxHQUFHLHNDQUFzQyxDQUFDOztJQUM3RCxDQUFDOzs7O0lBRUQsMENBQU87OztJQUFQO1FBQUEsaUJBT0M7UUFOQyxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFLENBQUMsSUFBSSxDQUN0QyxTQUFTLENBQUMsVUFBQSxJQUFJO1lBQ1osT0FBQSxhQUFhLENBQUMsQ0FBQyxLQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDO1FBQTlELENBQThELENBQy9ELEVBQ0QsR0FBRyxDQUFDLFVBQUMsRUFBZTtnQkFBZiwwQkFBZSxFQUFkLGFBQUssRUFBRSxjQUFNO1lBQU0sT0FBQSxDQUFDLEVBQUUsS0FBSyxPQUFBLEVBQUUsTUFBTSxRQUFBLEVBQUUsQ0FBQztRQUFuQixDQUFtQixDQUFDLENBQzlDLENBQUM7SUFDSixDQUFDOzs7OztJQUVELCtDQUFZOzs7O0lBQVosVUFBYSxJQUFZO1FBQ3ZCLE9BQU8sRUFBRSxDQUFDLGNBQVksSUFBSSxDQUFDLFVBQVUsV0FBUSxDQUFDLENBQUM7SUFDakQsQ0FBQzs7OztJQUVELGdEQUFhOzs7SUFBYjtRQUNFLE9BQU8sRUFBRSxDQUFDLENBQUMsY0FBYyxDQUFDLFFBQVEsRUFBRSxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUMvRCxDQUFDOztnQkExQkYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkFaUSxXQUFXOzs7bUNBSHBCO0NBd0NDLEFBM0JELENBRzhDLGdCQUFnQixHQXdCN0Q7U0F4Qlksd0JBQXdCOzs7Ozs7SUFFdkIsK0NBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgY29tYmluZUxhdGVzdCwgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCwgc3dpdGNoTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQ2FydFNlcnZpY2UgfSBmcm9tICcuLi8uLi9jYXJ0L2ZhY2FkZS9jYXJ0LnNlcnZpY2UnO1xuaW1wb3J0IHsgVUlDYXJ0IH0gZnJvbSAnLi4vLi4vY2FydC9tb2RlbCc7XG5pbXBvcnQgeyBQYWdlTWV0YSwgUGFnZVJvYm90c01ldGEgfSBmcm9tICcuLi8uLi9jbXMvbW9kZWwvcGFnZS5tb2RlbCc7XG5pbXBvcnQgeyBQYWdlTWV0YVJlc29sdmVyIH0gZnJvbSAnLi4vLi4vY21zL3BhZ2UvcGFnZS1tZXRhLnJlc29sdmVyJztcbmltcG9ydCB7XG4gIFBhZ2VSb2JvdHNSZXNvbHZlcixcbiAgUGFnZVRpdGxlUmVzb2x2ZXIsXG59IGZyb20gJy4uLy4uL2Ntcy9wYWdlL3BhZ2UucmVzb2x2ZXJzJztcbmltcG9ydCB7IFBhZ2VUeXBlIH0gZnJvbSAnLi4vLi4vb2NjL29jYy1tb2RlbHMvb2NjLm1vZGVscyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBDaGVja291dFBhZ2VNZXRhUmVzb2x2ZXIgZXh0ZW5kcyBQYWdlTWV0YVJlc29sdmVyXG4gIGltcGxlbWVudHMgUGFnZVRpdGxlUmVzb2x2ZXIsIFBhZ2VSb2JvdHNSZXNvbHZlciB7XG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBjYXJ0U2VydmljZTogQ2FydFNlcnZpY2UpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMucGFnZVR5cGUgPSBQYWdlVHlwZS5DT05URU5UX1BBR0U7XG4gICAgdGhpcy5wYWdlVGVtcGxhdGUgPSAnTXVsdGlTdGVwQ2hlY2tvdXRTdW1tYXJ5UGFnZVRlbXBsYXRlJztcbiAgfVxuXG4gIHJlc29sdmUoKTogT2JzZXJ2YWJsZTxQYWdlTWV0YT4ge1xuICAgIHJldHVybiB0aGlzLmNhcnRTZXJ2aWNlLmdldEFjdGl2ZSgpLnBpcGUoXG4gICAgICBzd2l0Y2hNYXAoY2FydCA9PlxuICAgICAgICBjb21iaW5lTGF0ZXN0KFt0aGlzLnJlc29sdmVUaXRsZShjYXJ0KSwgdGhpcy5yZXNvbHZlUm9ib3RzKCldKVxuICAgICAgKSxcbiAgICAgIG1hcCgoW3RpdGxlLCByb2JvdHNdKSA9PiAoeyB0aXRsZSwgcm9ib3RzIH0pKVxuICAgICk7XG4gIH1cblxuICByZXNvbHZlVGl0bGUoY2FydDogVUlDYXJ0KTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gb2YoYENoZWNrb3V0ICR7Y2FydC50b3RhbEl0ZW1zfSBpdGVtc2ApO1xuICB9XG5cbiAgcmVzb2x2ZVJvYm90cygpOiBPYnNlcnZhYmxlPFBhZ2VSb2JvdHNNZXRhW10+IHtcbiAgICByZXR1cm4gb2YoW1BhZ2VSb2JvdHNNZXRhLk5PRk9MTE9XLCBQYWdlUm9ib3RzTWV0YS5OT0lOREVYXSk7XG4gIH1cbn1cbiJdfQ==