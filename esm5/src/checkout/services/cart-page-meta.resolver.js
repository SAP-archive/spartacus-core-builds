/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { combineLatest, of } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';
import { CartService } from '../../cart/facade/cart.service';
import { CmsService } from '../../cms/facade/cms.service';
import { PageRobotsMeta } from '../../cms/model/page.model';
import { PageMetaResolver } from '../../cms/page/page-meta.resolver';
import { PageType } from '../../model/cms.model';
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
        return this.cms.getCurrentPage().pipe(filter(function (page) { return page !== undefined; }), switchMap(function (page) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1wYWdlLW1ldGEucmVzb2x2ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY2hlY2tvdXQvc2VydmljZXMvY2FydC1wYWdlLW1ldGEucmVzb2x2ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxhQUFhLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3JELE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUM3RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDMUQsT0FBTyxFQUFrQixjQUFjLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUM1RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUtyRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7Ozs7QUFFakQ7SUFHMEMsZ0RBQWdCO0lBRXhELDhCQUFzQixXQUF3QixFQUFZLEdBQWU7UUFBekUsWUFDRSxpQkFBTyxTQUdSO1FBSnFCLGlCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQVksU0FBRyxHQUFILEdBQUcsQ0FBWTtRQUV2RSxLQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQyxZQUFZLENBQUM7UUFDdEMsS0FBSSxDQUFDLFlBQVksR0FBRyxrQkFBa0IsQ0FBQzs7SUFDekMsQ0FBQzs7OztJQUVELHNDQUFPOzs7SUFBUDtRQUFBLGlCQVFDO1FBUEMsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxDQUFDLElBQUksQ0FDbkMsTUFBTSxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsSUFBSSxLQUFLLFNBQVMsRUFBbEIsQ0FBa0IsQ0FBQyxFQUNsQyxTQUFTLENBQUMsVUFBQSxJQUFJO1lBQ1osT0FBQSxhQUFhLENBQUMsQ0FBQyxLQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDO1FBQTlELENBQThELENBQy9ELEVBQ0QsR0FBRyxDQUFDLFVBQUMsRUFBZTtnQkFBZiwwQkFBZSxFQUFkLGFBQUssRUFBRSxjQUFNO1lBQU0sT0FBQSxDQUFDLEVBQUUsS0FBSyxPQUFBLEVBQUUsTUFBTSxRQUFBLEVBQUUsQ0FBQztRQUFuQixDQUFtQixDQUFDLENBQzlDLENBQUM7SUFDSixDQUFDOzs7OztJQUVELDJDQUFZOzs7O0lBQVosVUFBYSxJQUFVO1FBQ3JCLE9BQU8sSUFBSSxDQUFDLFdBQVc7YUFDcEIsU0FBUyxFQUFFO2FBQ1gsSUFBSSxDQUNILEdBQUcsQ0FBQyxVQUFBLElBQUk7WUFDTixPQUFBLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBSSxJQUFJLENBQUMsS0FBSyxVQUFLLElBQUksQ0FBQyxJQUFJLE1BQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUs7UUFBL0QsQ0FBK0QsQ0FDaEUsQ0FDRixDQUFDO0lBQ04sQ0FBQzs7OztJQUVELDRDQUFhOzs7SUFBYjtRQUNFLE9BQU8sRUFBRSxDQUFDLENBQUMsY0FBYyxDQUFDLFFBQVEsRUFBRSxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUMvRCxDQUFDOztnQkFqQ0YsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkFaUSxXQUFXO2dCQUNYLFVBQVU7OzsrQkFKbkI7Q0ErQ0MsQUFsQ0QsQ0FHMEMsZ0JBQWdCLEdBK0J6RDtTQS9CWSxvQkFBb0I7Ozs7OztJQUVuQiwyQ0FBa0M7Ozs7O0lBQUUsbUNBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgY29tYmluZUxhdGVzdCwgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgbWFwLCBzd2l0Y2hNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBDYXJ0U2VydmljZSB9IGZyb20gJy4uLy4uL2NhcnQvZmFjYWRlL2NhcnQuc2VydmljZSc7XG5pbXBvcnQgeyBDbXNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vY21zL2ZhY2FkZS9jbXMuc2VydmljZSc7XG5pbXBvcnQgeyBQYWdlLCBQYWdlTWV0YSwgUGFnZVJvYm90c01ldGEgfSBmcm9tICcuLi8uLi9jbXMvbW9kZWwvcGFnZS5tb2RlbCc7XG5pbXBvcnQgeyBQYWdlTWV0YVJlc29sdmVyIH0gZnJvbSAnLi4vLi4vY21zL3BhZ2UvcGFnZS1tZXRhLnJlc29sdmVyJztcbmltcG9ydCB7XG4gIFBhZ2VSb2JvdHNSZXNvbHZlcixcbiAgUGFnZVRpdGxlUmVzb2x2ZXIsXG59IGZyb20gJy4uLy4uL2Ntcy9wYWdlL3BhZ2UucmVzb2x2ZXJzJztcbmltcG9ydCB7IFBhZ2VUeXBlIH0gZnJvbSAnLi4vLi4vbW9kZWwvY21zLm1vZGVsJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIENhcnRQYWdlTWV0YVJlc29sdmVyIGV4dGVuZHMgUGFnZU1ldGFSZXNvbHZlclxuICBpbXBsZW1lbnRzIFBhZ2VUaXRsZVJlc29sdmVyLCBQYWdlUm9ib3RzUmVzb2x2ZXIge1xuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgY2FydFNlcnZpY2U6IENhcnRTZXJ2aWNlLCBwcm90ZWN0ZWQgY21zOiBDbXNTZXJ2aWNlKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnBhZ2VUeXBlID0gUGFnZVR5cGUuQ09OVEVOVF9QQUdFO1xuICAgIHRoaXMucGFnZVRlbXBsYXRlID0gJ0NhcnRQYWdlVGVtcGxhdGUnO1xuICB9XG5cbiAgcmVzb2x2ZSgpOiBPYnNlcnZhYmxlPFBhZ2VNZXRhPiB7XG4gICAgcmV0dXJuIHRoaXMuY21zLmdldEN1cnJlbnRQYWdlKCkucGlwZShcbiAgICAgIGZpbHRlcihwYWdlID0+IHBhZ2UgIT09IHVuZGVmaW5lZCksXG4gICAgICBzd2l0Y2hNYXAocGFnZSA9PlxuICAgICAgICBjb21iaW5lTGF0ZXN0KFt0aGlzLnJlc29sdmVUaXRsZShwYWdlKSwgdGhpcy5yZXNvbHZlUm9ib3RzKCldKVxuICAgICAgKSxcbiAgICAgIG1hcCgoW3RpdGxlLCByb2JvdHNdKSA9PiAoeyB0aXRsZSwgcm9ib3RzIH0pKVxuICAgICk7XG4gIH1cblxuICByZXNvbHZlVGl0bGUocGFnZTogUGFnZSk6IE9ic2VydmFibGU8c3RyaW5nPiB7XG4gICAgcmV0dXJuIHRoaXMuY2FydFNlcnZpY2VcbiAgICAgIC5nZXRBY3RpdmUoKVxuICAgICAgLnBpcGUoXG4gICAgICAgIG1hcChjYXJ0ID0+XG4gICAgICAgICAgY2FydCAmJiBjYXJ0LmNvZGUgPyBgJHtwYWdlLnRpdGxlfSAoJHtjYXJ0LmNvZGV9KWAgOiBwYWdlLnRpdGxlXG4gICAgICAgIClcbiAgICAgICk7XG4gIH1cblxuICByZXNvbHZlUm9ib3RzKCk6IE9ic2VydmFibGU8UGFnZVJvYm90c01ldGFbXT4ge1xuICAgIHJldHVybiBvZihbUGFnZVJvYm90c01ldGEuTk9GT0xMT1csIFBhZ2VSb2JvdHNNZXRhLk5PSU5ERVhdKTtcbiAgfVxufVxuIl19