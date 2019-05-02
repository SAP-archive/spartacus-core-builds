/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { combineLatest, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { CartService } from '../../cart/facade/cart.service';
import { CmsService } from '../../cms';
import { PageRobotsMeta } from '../../cms/model/page.model';
import { PageMetaResolver } from '../../cms/page/page-meta.resolver';
import { PageType } from '../../occ/occ-models/occ.models';
import * as i0 from "@angular/core";
import * as i1 from "../../cart/facade/cart.service";
import * as i2 from "../../cms/facade/cms.service";
var CartPageMetaResolver = /** @class */ (function (_super) {
    tslib_1.__extends(CartPageMetaResolver, _super);
    function CartPageMetaResolver(cartService, cms) {
        var _this = _super.call(this) || this;
        _this.cartService = cartService;
        _this.cms = cms;
        _this.pageType = PageType.CONTENT_PAGE;
        _this.pageTemplate = 'CartPageTemplate';
        return _this;
    }
    /**
     * @return {?}
     */
    CartPageMetaResolver.prototype.resolve = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return this.cms.getCurrentPage().pipe(switchMap(function (page) {
            return combineLatest([_this.resolveTitle(page), _this.resolveRobots()]);
        }), map(function (_a) {
            var _b = tslib_1.__read(_a, 2), title = _b[0], robots = _b[1];
            return ({ title: title, robots: robots });
        }));
    };
    /**
     * @param {?} page
     * @return {?}
     */
    CartPageMetaResolver.prototype.resolveTitle = /**
     * @param {?} page
     * @return {?}
     */
    function (page) {
        return this.cartService
            .getActive()
            .pipe(map(function (cart) {
            return cart && cart.code ? page.title + " (" + cart.code + ")" : page.title;
        }));
    };
    /**
     * @return {?}
     */
    CartPageMetaResolver.prototype.resolveRobots = /**
     * @return {?}
     */
    function () {
        return of([PageRobotsMeta.NOFOLLOW, PageRobotsMeta.NOINDEX]);
    };
    CartPageMetaResolver.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    CartPageMetaResolver.ctorParameters = function () { return [
        { type: CartService },
        { type: CmsService }
    ]; };
    /** @nocollapse */ CartPageMetaResolver.ngInjectableDef = i0.defineInjectable({ factory: function CartPageMetaResolver_Factory() { return new CartPageMetaResolver(i0.inject(i1.CartService), i0.inject(i2.CmsService)); }, token: CartPageMetaResolver, providedIn: "root" });
    return CartPageMetaResolver;
}(PageMetaResolver));
export { CartPageMetaResolver };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    CartPageMetaResolver.prototype.cartService;
    /**
     * @type {?}
     * @protected
     */
    CartPageMetaResolver.prototype.cms;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1wYWdlLW1ldGEucmVzb2x2ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY2hlY2tvdXQvc2VydmljZXMvY2FydC1wYWdlLW1ldGEucmVzb2x2ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxhQUFhLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3JELE9BQU8sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDaEQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzdELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDdkMsT0FBTyxFQUFrQixjQUFjLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUM1RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUtyRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUNBQWlDLENBQUM7Ozs7QUFFM0Q7SUFHMEMsZ0RBQWdCO0lBRXhELDhCQUFzQixXQUF3QixFQUFZLEdBQWU7UUFBekUsWUFDRSxpQkFBTyxTQUdSO1FBSnFCLGlCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQVksU0FBRyxHQUFILEdBQUcsQ0FBWTtRQUV2RSxLQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQyxZQUFZLENBQUM7UUFDdEMsS0FBSSxDQUFDLFlBQVksR0FBRyxrQkFBa0IsQ0FBQzs7SUFDekMsQ0FBQzs7OztJQUVELHNDQUFPOzs7SUFBUDtRQUFBLGlCQU9DO1FBTkMsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxDQUFDLElBQUksQ0FDbkMsU0FBUyxDQUFDLFVBQUEsSUFBSTtZQUNaLE9BQUEsYUFBYSxDQUFDLENBQUMsS0FBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQztRQUE5RCxDQUE4RCxDQUMvRCxFQUNELEdBQUcsQ0FBQyxVQUFDLEVBQWU7Z0JBQWYsMEJBQWUsRUFBZCxhQUFLLEVBQUUsY0FBTTtZQUFNLE9BQUEsQ0FBQyxFQUFFLEtBQUssT0FBQSxFQUFFLE1BQU0sUUFBQSxFQUFFLENBQUM7UUFBbkIsQ0FBbUIsQ0FBQyxDQUM5QyxDQUFDO0lBQ0osQ0FBQzs7Ozs7SUFFRCwyQ0FBWTs7OztJQUFaLFVBQWEsSUFBVTtRQUNyQixPQUFPLElBQUksQ0FBQyxXQUFXO2FBQ3BCLFNBQVMsRUFBRTthQUNYLElBQUksQ0FDSCxHQUFHLENBQUMsVUFBQSxJQUFJO1lBQ04sT0FBQSxJQUFJLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUksSUFBSSxDQUFDLEtBQUssVUFBSyxJQUFJLENBQUMsSUFBSSxNQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLO1FBQS9ELENBQStELENBQ2hFLENBQ0YsQ0FBQztJQUNOLENBQUM7Ozs7SUFFRCw0Q0FBYTs7O0lBQWI7UUFDRSxPQUFPLEVBQUUsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxRQUFRLEVBQUUsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDL0QsQ0FBQzs7Z0JBaENGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBWlEsV0FBVztnQkFDWCxVQUFVOzs7K0JBSm5CO0NBOENDLEFBakNELENBRzBDLGdCQUFnQixHQThCekQ7U0E5Qlksb0JBQW9COzs7Ozs7SUFFbkIsMkNBQWtDOzs7OztJQUFFLG1DQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGNvbWJpbmVMYXRlc3QsIE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAsIHN3aXRjaE1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IENhcnRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vY2FydC9mYWNhZGUvY2FydC5zZXJ2aWNlJztcbmltcG9ydCB7IENtc1NlcnZpY2UgfSBmcm9tICcuLi8uLi9jbXMnO1xuaW1wb3J0IHsgUGFnZSwgUGFnZU1ldGEsIFBhZ2VSb2JvdHNNZXRhIH0gZnJvbSAnLi4vLi4vY21zL21vZGVsL3BhZ2UubW9kZWwnO1xuaW1wb3J0IHsgUGFnZU1ldGFSZXNvbHZlciB9IGZyb20gJy4uLy4uL2Ntcy9wYWdlL3BhZ2UtbWV0YS5yZXNvbHZlcic7XG5pbXBvcnQge1xuICBQYWdlUm9ib3RzUmVzb2x2ZXIsXG4gIFBhZ2VUaXRsZVJlc29sdmVyLFxufSBmcm9tICcuLi8uLi9jbXMvcGFnZS9wYWdlLnJlc29sdmVycyc7XG5pbXBvcnQgeyBQYWdlVHlwZSB9IGZyb20gJy4uLy4uL29jYy9vY2MtbW9kZWxzL29jYy5tb2RlbHMnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgQ2FydFBhZ2VNZXRhUmVzb2x2ZXIgZXh0ZW5kcyBQYWdlTWV0YVJlc29sdmVyXG4gIGltcGxlbWVudHMgUGFnZVRpdGxlUmVzb2x2ZXIsIFBhZ2VSb2JvdHNSZXNvbHZlciB7XG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBjYXJ0U2VydmljZTogQ2FydFNlcnZpY2UsIHByb3RlY3RlZCBjbXM6IENtc1NlcnZpY2UpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMucGFnZVR5cGUgPSBQYWdlVHlwZS5DT05URU5UX1BBR0U7XG4gICAgdGhpcy5wYWdlVGVtcGxhdGUgPSAnQ2FydFBhZ2VUZW1wbGF0ZSc7XG4gIH1cblxuICByZXNvbHZlKCk6IE9ic2VydmFibGU8UGFnZU1ldGE+IHtcbiAgICByZXR1cm4gdGhpcy5jbXMuZ2V0Q3VycmVudFBhZ2UoKS5waXBlKFxuICAgICAgc3dpdGNoTWFwKHBhZ2UgPT5cbiAgICAgICAgY29tYmluZUxhdGVzdChbdGhpcy5yZXNvbHZlVGl0bGUocGFnZSksIHRoaXMucmVzb2x2ZVJvYm90cygpXSlcbiAgICAgICksXG4gICAgICBtYXAoKFt0aXRsZSwgcm9ib3RzXSkgPT4gKHsgdGl0bGUsIHJvYm90cyB9KSlcbiAgICApO1xuICB9XG5cbiAgcmVzb2x2ZVRpdGxlKHBhZ2U6IFBhZ2UpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xuICAgIHJldHVybiB0aGlzLmNhcnRTZXJ2aWNlXG4gICAgICAuZ2V0QWN0aXZlKClcbiAgICAgIC5waXBlKFxuICAgICAgICBtYXAoY2FydCA9PlxuICAgICAgICAgIGNhcnQgJiYgY2FydC5jb2RlID8gYCR7cGFnZS50aXRsZX0gKCR7Y2FydC5jb2RlfSlgIDogcGFnZS50aXRsZVxuICAgICAgICApXG4gICAgICApO1xuICB9XG5cbiAgcmVzb2x2ZVJvYm90cygpOiBPYnNlcnZhYmxlPFBhZ2VSb2JvdHNNZXRhW10+IHtcbiAgICByZXR1cm4gb2YoW1BhZ2VSb2JvdHNNZXRhLk5PRk9MTE9XLCBQYWdlUm9ib3RzTWV0YS5OT0lOREVYXSk7XG4gIH1cbn1cbiJdfQ==