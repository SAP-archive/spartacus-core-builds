/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { combineLatest, of } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';
import { CmsService } from '../../cms/facade/cms.service';
import { PageRobotsMeta } from '../../cms/model/page.model';
import { PageMetaResolver } from '../../cms/page/page-meta.resolver';
import { PageType } from '../../model/cms.model';
import * as i0 from "@angular/core";
import * as i1 from "../../cms/facade/cms.service";
var CartPageMetaResolver = /** @class */ (function (_super) {
    tslib_1.__extends(CartPageMetaResolver, _super);
    function CartPageMetaResolver(cms) {
        var _this = _super.call(this) || this;
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
        return this.cms.getCurrentPage().pipe(filter((/**
         * @param {?} page
         * @return {?}
         */
        function (page) { return page !== undefined; })), switchMap((/**
         * @param {?} page
         * @return {?}
         */
        function (page) {
            return combineLatest([_this.resolveTitle(page), _this.resolveRobots()]);
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
     * @param {?} page
     * @return {?}
     */
    CartPageMetaResolver.prototype.resolveTitle = /**
     * @param {?} page
     * @return {?}
     */
    function (page) {
        return of(page.title);
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
        { type: CmsService }
    ]; };
    /** @nocollapse */ CartPageMetaResolver.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function CartPageMetaResolver_Factory() { return new CartPageMetaResolver(i0.ɵɵinject(i1.CmsService)); }, token: CartPageMetaResolver, providedIn: "root" });
    return CartPageMetaResolver;
}(PageMetaResolver));
export { CartPageMetaResolver };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    CartPageMetaResolver.prototype.cms;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1wYWdlLW1ldGEucmVzb2x2ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY2FydC9zZXJ2aWNlcy9jYXJ0LXBhZ2UtbWV0YS5yZXNvbHZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGFBQWEsRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDckQsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQzFELE9BQU8sRUFBa0IsY0FBYyxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDNUUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFLckUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDOzs7QUFFakQ7SUFHMEMsZ0RBQWdCO0lBRXhELDhCQUFzQixHQUFlO1FBQXJDLFlBQ0UsaUJBQU8sU0FHUjtRQUpxQixTQUFHLEdBQUgsR0FBRyxDQUFZO1FBRW5DLEtBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDLFlBQVksQ0FBQztRQUN0QyxLQUFJLENBQUMsWUFBWSxHQUFHLGtCQUFrQixDQUFDOztJQUN6QyxDQUFDOzs7O0lBRUQsc0NBQU87OztJQUFQO1FBQUEsaUJBUUM7UUFQQyxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLENBQUMsSUFBSSxDQUNuQyxNQUFNOzs7O1FBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxJQUFJLEtBQUssU0FBUyxFQUFsQixDQUFrQixFQUFDLEVBQ2xDLFNBQVM7Ozs7UUFBQyxVQUFBLElBQUk7WUFDWixPQUFBLGFBQWEsQ0FBQyxDQUFDLEtBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUM7UUFBOUQsQ0FBOEQsRUFDL0QsRUFDRCxHQUFHOzs7O1FBQUMsVUFBQyxFQUFlO2dCQUFmLDBCQUFlLEVBQWQsYUFBSyxFQUFFLGNBQU07WUFBTSxPQUFBLENBQUMsRUFBRSxLQUFLLE9BQUEsRUFBRSxNQUFNLFFBQUEsRUFBRSxDQUFDO1FBQW5CLENBQW1CLEVBQUMsQ0FDOUMsQ0FBQztJQUNKLENBQUM7Ozs7O0lBRUQsMkNBQVk7Ozs7SUFBWixVQUFhLElBQVU7UUFDckIsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3hCLENBQUM7Ozs7SUFFRCw0Q0FBYTs7O0lBQWI7UUFDRSxPQUFPLEVBQUUsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxRQUFRLEVBQUUsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDL0QsQ0FBQzs7Z0JBM0JGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBWFEsVUFBVTs7OytCQUhuQjtDQXdDQyxBQTVCRCxDQUcwQyxnQkFBZ0IsR0F5QnpEO1NBekJZLG9CQUFvQjs7Ozs7O0lBRW5CLG1DQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGNvbWJpbmVMYXRlc3QsIE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIG1hcCwgc3dpdGNoTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQ21zU2VydmljZSB9IGZyb20gJy4uLy4uL2Ntcy9mYWNhZGUvY21zLnNlcnZpY2UnO1xuaW1wb3J0IHsgUGFnZSwgUGFnZU1ldGEsIFBhZ2VSb2JvdHNNZXRhIH0gZnJvbSAnLi4vLi4vY21zL21vZGVsL3BhZ2UubW9kZWwnO1xuaW1wb3J0IHsgUGFnZU1ldGFSZXNvbHZlciB9IGZyb20gJy4uLy4uL2Ntcy9wYWdlL3BhZ2UtbWV0YS5yZXNvbHZlcic7XG5pbXBvcnQge1xuICBQYWdlUm9ib3RzUmVzb2x2ZXIsXG4gIFBhZ2VUaXRsZVJlc29sdmVyLFxufSBmcm9tICcuLi8uLi9jbXMvcGFnZS9wYWdlLnJlc29sdmVycyc7XG5pbXBvcnQgeyBQYWdlVHlwZSB9IGZyb20gJy4uLy4uL21vZGVsL2Ntcy5tb2RlbCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBDYXJ0UGFnZU1ldGFSZXNvbHZlciBleHRlbmRzIFBhZ2VNZXRhUmVzb2x2ZXJcbiAgaW1wbGVtZW50cyBQYWdlVGl0bGVSZXNvbHZlciwgUGFnZVJvYm90c1Jlc29sdmVyIHtcbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIGNtczogQ21zU2VydmljZSkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5wYWdlVHlwZSA9IFBhZ2VUeXBlLkNPTlRFTlRfUEFHRTtcbiAgICB0aGlzLnBhZ2VUZW1wbGF0ZSA9ICdDYXJ0UGFnZVRlbXBsYXRlJztcbiAgfVxuXG4gIHJlc29sdmUoKTogT2JzZXJ2YWJsZTxQYWdlTWV0YT4ge1xuICAgIHJldHVybiB0aGlzLmNtcy5nZXRDdXJyZW50UGFnZSgpLnBpcGUoXG4gICAgICBmaWx0ZXIocGFnZSA9PiBwYWdlICE9PSB1bmRlZmluZWQpLFxuICAgICAgc3dpdGNoTWFwKHBhZ2UgPT5cbiAgICAgICAgY29tYmluZUxhdGVzdChbdGhpcy5yZXNvbHZlVGl0bGUocGFnZSksIHRoaXMucmVzb2x2ZVJvYm90cygpXSlcbiAgICAgICksXG4gICAgICBtYXAoKFt0aXRsZSwgcm9ib3RzXSkgPT4gKHsgdGl0bGUsIHJvYm90cyB9KSlcbiAgICApO1xuICB9XG5cbiAgcmVzb2x2ZVRpdGxlKHBhZ2U6IFBhZ2UpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xuICAgIHJldHVybiBvZihwYWdlLnRpdGxlKTtcbiAgfVxuXG4gIHJlc29sdmVSb2JvdHMoKTogT2JzZXJ2YWJsZTxQYWdlUm9ib3RzTWV0YVtdPiB7XG4gICAgcmV0dXJuIG9mKFtQYWdlUm9ib3RzTWV0YS5OT0ZPTExPVywgUGFnZVJvYm90c01ldGEuTk9JTkRFWF0pO1xuICB9XG59XG4iXX0=