/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
export class CheckoutPageMetaResolver extends PageMetaResolver {
    /**
     * @param {?} routingService
     * @param {?} cartService
     */
    constructor(routingService, cartService) {
        super();
        this.routingService = routingService;
        this.cartService = cartService;
        this.pageType = PageType.CONTENT_PAGE;
        this.pageTemplate = 'MultiStepCheckoutSummaryPageTemplate';
    }
    /**
     * @return {?}
     */
    resolve() {
        return this.cartService.getActive().pipe(switchMap(cart => combineLatest([this.resolveTitle(cart), this.resolveRobots()])), map(([title, robots]) => ({ title, robots })));
    }
    /**
     * @param {?} cart
     * @return {?}
     */
    resolveTitle(cart) {
        return of(`Checkout ${cart.totalItems} items`);
    }
    /**
     * @return {?}
     */
    resolveRobots() {
        return of([PageRobotsMeta.NOFOLLOW, PageRobotsMeta.NOINDEX]);
    }
}
CheckoutPageMetaResolver.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
CheckoutPageMetaResolver.ctorParameters = () => [
    { type: RoutingService },
    { type: CartService }
];
/** @nocollapse */ CheckoutPageMetaResolver.ngInjectableDef = i0.defineInjectable({ factory: function CheckoutPageMetaResolver_Factory() { return new CheckoutPageMetaResolver(i0.inject(i1.RoutingService), i0.inject(i2.CartService)); }, token: CheckoutPageMetaResolver, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQtcGFnZS1tZXRhLnJlc29sdmVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2NoZWNrb3V0L3NlcnZpY2VzL2NoZWNrb3V0LXBhZ2UtbWV0YS5yZXNvbHZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQWMsRUFBRSxFQUFFLGFBQWEsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNyRCxPQUFPLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUN0RSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDM0QsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzdELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBS3JFLE9BQU8sRUFBWSxjQUFjLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQzs7OztBQU10RSxNQUFNLE9BQU8sd0JBQXlCLFNBQVEsZ0JBQWdCOzs7OztJQUU1RCxZQUNZLGNBQThCLEVBQzlCLFdBQXdCO1FBRWxDLEtBQUssRUFBRSxDQUFDO1FBSEUsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBR2xDLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDLFlBQVksQ0FBQztRQUN0QyxJQUFJLENBQUMsWUFBWSxHQUFHLHNDQUFzQyxDQUFDO0lBQzdELENBQUM7Ozs7SUFFRCxPQUFPO1FBQ0wsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFBRSxDQUFDLElBQUksQ0FDdEMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQ2YsYUFBYSxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQyxDQUMvRCxFQUNELEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FDOUMsQ0FBQztJQUNKLENBQUM7Ozs7O0lBRUQsWUFBWSxDQUFDLElBQVk7UUFDdkIsT0FBTyxFQUFFLENBQUMsWUFBWSxJQUFJLENBQUMsVUFBVSxRQUFRLENBQUMsQ0FBQztJQUNqRCxDQUFDOzs7O0lBRUQsYUFBYTtRQUNYLE9BQU8sRUFBRSxDQUFDLENBQUMsY0FBYyxDQUFDLFFBQVEsRUFBRSxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUMvRCxDQUFDOzs7WUE3QkYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7O1lBYlEsY0FBYztZQUVkLFdBQVc7Ozs7Ozs7O0lBZWhCLGtEQUF3Qzs7Ozs7SUFDeEMsK0NBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YsIGNvbWJpbmVMYXRlc3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCwgc3dpdGNoTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgUm91dGluZ1NlcnZpY2UgfSBmcm9tICcuLi8uLi9yb3V0aW5nL2ZhY2FkZS9yb3V0aW5nLnNlcnZpY2UnO1xuaW1wb3J0IHsgUGFnZVR5cGUgfSBmcm9tICcuLi8uLi9vY2Mvb2NjLW1vZGVscy9vY2MubW9kZWxzJztcbmltcG9ydCB7IENhcnRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vY2FydC9mYWNhZGUvY2FydC5zZXJ2aWNlJztcbmltcG9ydCB7IFBhZ2VNZXRhUmVzb2x2ZXIgfSBmcm9tICcuLi8uLi9jbXMvcGFnZS9wYWdlLW1ldGEucmVzb2x2ZXInO1xuaW1wb3J0IHtcbiAgUGFnZVJvYm90c1Jlc29sdmVyLFxuICBQYWdlVGl0bGVSZXNvbHZlcixcbn0gZnJvbSAnLi4vLi4vY21zL3BhZ2UvcGFnZS5yZXNvbHZlcnMnO1xuaW1wb3J0IHsgUGFnZU1ldGEsIFBhZ2VSb2JvdHNNZXRhIH0gZnJvbSAnLi4vLi4vY21zL21vZGVsL3BhZ2UubW9kZWwnO1xuaW1wb3J0IHsgVUlDYXJ0IH0gZnJvbSAnLi4vLi4vY2FydC9tb2RlbCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBDaGVja291dFBhZ2VNZXRhUmVzb2x2ZXIgZXh0ZW5kcyBQYWdlTWV0YVJlc29sdmVyXG4gIGltcGxlbWVudHMgUGFnZVRpdGxlUmVzb2x2ZXIsIFBhZ2VSb2JvdHNSZXNvbHZlciB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCByb3V0aW5nU2VydmljZTogUm91dGluZ1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGNhcnRTZXJ2aWNlOiBDYXJ0U2VydmljZVxuICApIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMucGFnZVR5cGUgPSBQYWdlVHlwZS5DT05URU5UX1BBR0U7XG4gICAgdGhpcy5wYWdlVGVtcGxhdGUgPSAnTXVsdGlTdGVwQ2hlY2tvdXRTdW1tYXJ5UGFnZVRlbXBsYXRlJztcbiAgfVxuXG4gIHJlc29sdmUoKTogT2JzZXJ2YWJsZTxQYWdlTWV0YT4ge1xuICAgIHJldHVybiB0aGlzLmNhcnRTZXJ2aWNlLmdldEFjdGl2ZSgpLnBpcGUoXG4gICAgICBzd2l0Y2hNYXAoY2FydCA9PlxuICAgICAgICBjb21iaW5lTGF0ZXN0KFt0aGlzLnJlc29sdmVUaXRsZShjYXJ0KSwgdGhpcy5yZXNvbHZlUm9ib3RzKCldKVxuICAgICAgKSxcbiAgICAgIG1hcCgoW3RpdGxlLCByb2JvdHNdKSA9PiAoeyB0aXRsZSwgcm9ib3RzIH0pKVxuICAgICk7XG4gIH1cblxuICByZXNvbHZlVGl0bGUoY2FydDogVUlDYXJ0KTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gb2YoYENoZWNrb3V0ICR7Y2FydC50b3RhbEl0ZW1zfSBpdGVtc2ApO1xuICB9XG5cbiAgcmVzb2x2ZVJvYm90cygpOiBPYnNlcnZhYmxlPFBhZ2VSb2JvdHNNZXRhW10+IHtcbiAgICByZXR1cm4gb2YoW1BhZ2VSb2JvdHNNZXRhLk5PRk9MTE9XLCBQYWdlUm9ib3RzTWV0YS5OT0lOREVYXSk7XG4gIH1cbn1cbiJdfQ==