import { __decorate, __extends } from "tslib";
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ActiveCartService } from '../../cart';
import { PageRobotsMeta } from '../../cms/model/page.model';
import { PageMetaResolver } from '../../cms/page/page-meta.resolver';
import { TranslationService } from '../../i18n/translation.service';
import { PageType } from '../../model/cms.model';
import * as i0 from "@angular/core";
import * as i1 from "../../i18n/translation.service";
import * as i2 from "../../cart/facade/active-cart.service";
/**
 * Resolves the page data for all Content Pages based on the `PageType.CONTENT_PAGE`
 * and the `MultiStepCheckoutSummaryPageTemplate`. If the checkout page matches this template,
 * the more generic `ContentPageMetaResolver` is overriden by this resolver.
 *
 * The page title and robots are resolved in this implementation only.
 */
var CheckoutPageMetaResolver = /** @class */ (function (_super) {
    __extends(CheckoutPageMetaResolver, _super);
    function CheckoutPageMetaResolver(translation, activeCartService) {
        var _this = _super.call(this) || this;
        _this.translation = translation;
        _this.activeCartService = activeCartService;
        _this.cart$ = _this.activeCartService.getActive();
        _this.pageType = PageType.CONTENT_PAGE;
        _this.pageTemplate = 'MultiStepCheckoutSummaryPageTemplate';
        return _this;
    }
    CheckoutPageMetaResolver.prototype.resolveTitle = function () {
        var _this = this;
        return this.cart$.pipe(switchMap(function (c) {
            return _this.translation.translate('pageMetaResolver.checkout.title', {
                count: c.totalItems,
            });
        }));
    };
    CheckoutPageMetaResolver.prototype.resolveRobots = function () {
        return of([PageRobotsMeta.NOFOLLOW, PageRobotsMeta.NOINDEX]);
    };
    CheckoutPageMetaResolver.ctorParameters = function () { return [
        { type: TranslationService },
        { type: ActiveCartService }
    ]; };
    CheckoutPageMetaResolver.ɵprov = i0.ɵɵdefineInjectable({ factory: function CheckoutPageMetaResolver_Factory() { return new CheckoutPageMetaResolver(i0.ɵɵinject(i1.TranslationService), i0.ɵɵinject(i2.ActiveCartService)); }, token: CheckoutPageMetaResolver, providedIn: "root" });
    CheckoutPageMetaResolver = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], CheckoutPageMetaResolver);
    return CheckoutPageMetaResolver;
}(PageMetaResolver));
export { CheckoutPageMetaResolver };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQtcGFnZS1tZXRhLnJlc29sdmVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2NoZWNrb3V0L3NlcnZpY2VzL2NoZWNrb3V0LXBhZ2UtbWV0YS5yZXNvbHZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFDL0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQzVELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBS3JFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7OztBQUVqRDs7Ozs7O0dBTUc7QUFJSDtJQUE4Qyw0Q0FBZ0I7SUFJNUQsa0NBQ1ksV0FBK0IsRUFDL0IsaUJBQW9DO1FBRmhELFlBSUUsaUJBQU8sU0FHUjtRQU5XLGlCQUFXLEdBQVgsV0FBVyxDQUFvQjtRQUMvQix1QkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBSnRDLFdBQUssR0FBRyxLQUFJLENBQUMsaUJBQWlCLENBQUMsU0FBUyxFQUFFLENBQUM7UUFPbkQsS0FBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUMsWUFBWSxDQUFDO1FBQ3RDLEtBQUksQ0FBQyxZQUFZLEdBQUcsc0NBQXNDLENBQUM7O0lBQzdELENBQUM7SUFFRCwrQ0FBWSxHQUFaO1FBQUEsaUJBUUM7UUFQQyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUNwQixTQUFTLENBQUMsVUFBQSxDQUFDO1lBQ1QsT0FBQSxLQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxpQ0FBaUMsRUFBRTtnQkFDNUQsS0FBSyxFQUFFLENBQUMsQ0FBQyxVQUFVO2FBQ3BCLENBQUM7UUFGRixDQUVFLENBQ0gsQ0FDRixDQUFDO0lBQ0osQ0FBQztJQUVELGdEQUFhLEdBQWI7UUFDRSxPQUFPLEVBQUUsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxRQUFRLEVBQUUsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDL0QsQ0FBQzs7Z0JBcEJ3QixrQkFBa0I7Z0JBQ1osaUJBQWlCOzs7SUFOckMsd0JBQXdCO1FBSHBDLFVBQVUsQ0FBQztZQUNWLFVBQVUsRUFBRSxNQUFNO1NBQ25CLENBQUM7T0FDVyx3QkFBd0IsQ0EwQnBDO21DQWpERDtDQWlEQyxBQTFCRCxDQUE4QyxnQkFBZ0IsR0EwQjdEO1NBMUJZLHdCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBzd2l0Y2hNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBBY3RpdmVDYXJ0U2VydmljZSB9IGZyb20gJy4uLy4uL2NhcnQnO1xuaW1wb3J0IHsgUGFnZVJvYm90c01ldGEgfSBmcm9tICcuLi8uLi9jbXMvbW9kZWwvcGFnZS5tb2RlbCc7XG5pbXBvcnQgeyBQYWdlTWV0YVJlc29sdmVyIH0gZnJvbSAnLi4vLi4vY21zL3BhZ2UvcGFnZS1tZXRhLnJlc29sdmVyJztcbmltcG9ydCB7XG4gIFBhZ2VSb2JvdHNSZXNvbHZlcixcbiAgUGFnZVRpdGxlUmVzb2x2ZXIsXG59IGZyb20gJy4uLy4uL2Ntcy9wYWdlL3BhZ2UucmVzb2x2ZXJzJztcbmltcG9ydCB7IFRyYW5zbGF0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uL2kxOG4vdHJhbnNsYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBQYWdlVHlwZSB9IGZyb20gJy4uLy4uL21vZGVsL2Ntcy5tb2RlbCc7XG5cbi8qKlxuICogUmVzb2x2ZXMgdGhlIHBhZ2UgZGF0YSBmb3IgYWxsIENvbnRlbnQgUGFnZXMgYmFzZWQgb24gdGhlIGBQYWdlVHlwZS5DT05URU5UX1BBR0VgXG4gKiBhbmQgdGhlIGBNdWx0aVN0ZXBDaGVja291dFN1bW1hcnlQYWdlVGVtcGxhdGVgLiBJZiB0aGUgY2hlY2tvdXQgcGFnZSBtYXRjaGVzIHRoaXMgdGVtcGxhdGUsXG4gKiB0aGUgbW9yZSBnZW5lcmljIGBDb250ZW50UGFnZU1ldGFSZXNvbHZlcmAgaXMgb3ZlcnJpZGVuIGJ5IHRoaXMgcmVzb2x2ZXIuXG4gKlxuICogVGhlIHBhZ2UgdGl0bGUgYW5kIHJvYm90cyBhcmUgcmVzb2x2ZWQgaW4gdGhpcyBpbXBsZW1lbnRhdGlvbiBvbmx5LlxuICovXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgQ2hlY2tvdXRQYWdlTWV0YVJlc29sdmVyIGV4dGVuZHMgUGFnZU1ldGFSZXNvbHZlclxuICBpbXBsZW1lbnRzIFBhZ2VUaXRsZVJlc29sdmVyLCBQYWdlUm9ib3RzUmVzb2x2ZXIge1xuICBwcm90ZWN0ZWQgY2FydCQgPSB0aGlzLmFjdGl2ZUNhcnRTZXJ2aWNlLmdldEFjdGl2ZSgpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCB0cmFuc2xhdGlvbjogVHJhbnNsYXRpb25TZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBhY3RpdmVDYXJ0U2VydmljZTogQWN0aXZlQ2FydFNlcnZpY2VcbiAgKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnBhZ2VUeXBlID0gUGFnZVR5cGUuQ09OVEVOVF9QQUdFO1xuICAgIHRoaXMucGFnZVRlbXBsYXRlID0gJ011bHRpU3RlcENoZWNrb3V0U3VtbWFyeVBhZ2VUZW1wbGF0ZSc7XG4gIH1cblxuICByZXNvbHZlVGl0bGUoKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gdGhpcy5jYXJ0JC5waXBlKFxuICAgICAgc3dpdGNoTWFwKGMgPT5cbiAgICAgICAgdGhpcy50cmFuc2xhdGlvbi50cmFuc2xhdGUoJ3BhZ2VNZXRhUmVzb2x2ZXIuY2hlY2tvdXQudGl0bGUnLCB7XG4gICAgICAgICAgY291bnQ6IGMudG90YWxJdGVtcyxcbiAgICAgICAgfSlcbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgcmVzb2x2ZVJvYm90cygpOiBPYnNlcnZhYmxlPFBhZ2VSb2JvdHNNZXRhW10+IHtcbiAgICByZXR1cm4gb2YoW1BhZ2VSb2JvdHNNZXRhLk5PRk9MTE9XLCBQYWdlUm9ib3RzTWV0YS5OT0lOREVYXSk7XG4gIH1cbn1cbiJdfQ==