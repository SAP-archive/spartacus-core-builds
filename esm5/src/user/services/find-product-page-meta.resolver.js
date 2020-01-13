/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { of, combineLatest } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';
import { PageMetaResolver, } from '../../cms/page';
import { TranslationService } from '../../i18n/translation.service';
import { PageType } from '../../model/cms.model';
import { RoutingService } from '../../routing/facade/routing.service';
import { ProductSearchService } from '../../product/facade/product-search.service';
import { AuthService } from '../../auth/facade/auth.service';
import * as i0 from "@angular/core";
import * as i1 from "../../routing/facade/routing.service";
import * as i2 from "../../product/facade/product-search.service";
import * as i3 from "../../i18n/translation.service";
import * as i4 from "../../auth/facade/auth.service";
var FindProductPageMetaResolver = /** @class */ (function (_super) {
    tslib_1.__extends(FindProductPageMetaResolver, _super);
    function FindProductPageMetaResolver(routingService, productSearchService, translation, authService) {
        var _this = _super.call(this) || this;
        _this.routingService = routingService;
        _this.productSearchService = productSearchService;
        _this.translation = translation;
        _this.authService = authService;
        _this.totalAndCode$ = combineLatest([
            _this.productSearchService.getResults().pipe(filter((/**
             * @param {?} data
             * @return {?}
             */
            function (data) { return !!(data && data.pagination); })), map((/**
             * @param {?} results
             * @return {?}
             */
            function (results) { return results.pagination.totalResults; }))),
            _this.routingService.getRouterState().pipe(map((/**
             * @param {?} state
             * @return {?}
             */
            function (state) { return state.state.queryParams['couponcode']; })), filter(Boolean)),
        ]);
        _this.pageType = PageType.CONTENT_PAGE;
        _this.pageTemplate = 'SearchResultsListPageTemplate';
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
    FindProductPageMetaResolver.prototype.resolve = /**
     * @deprecated since version 1.3
     *
     * The resolve method is no longer preferred and will be removed with release 2.0.
     * The caller `PageMetaService` service is improved to expect all individual resolvers
     * instead, so that the code is easier extensible.
     * @return {?}
     */
    function () {
        return combineLatest([this.resolveTitle(), this.resolveBreadcrumbs()]).pipe(map((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = tslib_1.__read(_a, 2), title = _b[0], breadcrumbs = _b[1];
            return ({
                title: title,
                breadcrumbs: breadcrumbs,
            });
        })));
    };
    /**
     * @return {?}
     */
    FindProductPageMetaResolver.prototype.resolveBreadcrumbs = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var breadcrumbs = [{ label: 'Home', link: '/' }];
        this.authService.isUserLoggedIn().subscribe((/**
         * @param {?} login
         * @return {?}
         */
        function (login) {
            if (login)
                breadcrumbs.push({ label: 'My Coupons', link: '/my-account/coupons' });
        }));
        return of(breadcrumbs);
    };
    /**
     * @return {?}
     */
    FindProductPageMetaResolver.prototype.resolveTitle = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return this.totalAndCode$.pipe(switchMap((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = tslib_1.__read(_a, 2), total = _b[0], code = _b[1];
            return _this.translation.translate('pageMetaResolver.search.findProductTitle', {
                count: total,
                coupon: code,
            });
        })));
    };
    /**
     * @param {?} page
     * @return {?}
     */
    FindProductPageMetaResolver.prototype.getScore = /**
     * @param {?} page
     * @return {?}
     */
    function (page) {
        /** @type {?} */
        var score = 0;
        if (this.pageType) {
            score += page.type === this.pageType ? 1 : -1;
        }
        if (this.pageTemplate) {
            score += page.template === this.pageTemplate ? 1 : -1;
        }
        this.routingService
            .getRouterState()
            .pipe(map((/**
         * @param {?} state
         * @return {?}
         */
        function (state) {
            return state.state.queryParams;
        })), filter(Boolean))
            .subscribe((/**
         * @param {?} queryParams
         * @return {?}
         */
        function (queryParams) {
            if (queryParams) {
                score += queryParams['couponcode'] ? 1 : -1;
            }
        }))
            .unsubscribe();
        return score;
    };
    FindProductPageMetaResolver.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    FindProductPageMetaResolver.ctorParameters = function () { return [
        { type: RoutingService },
        { type: ProductSearchService },
        { type: TranslationService },
        { type: AuthService }
    ]; };
    /** @nocollapse */ FindProductPageMetaResolver.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function FindProductPageMetaResolver_Factory() { return new FindProductPageMetaResolver(i0.ɵɵinject(i1.RoutingService), i0.ɵɵinject(i2.ProductSearchService), i0.ɵɵinject(i3.TranslationService), i0.ɵɵinject(i4.AuthService)); }, token: FindProductPageMetaResolver, providedIn: "root" });
    return FindProductPageMetaResolver;
}(PageMetaResolver));
export { FindProductPageMetaResolver };
if (false) {
    /** @type {?} */
    FindProductPageMetaResolver.prototype.totalAndCode$;
    /**
     * @type {?}
     * @protected
     */
    FindProductPageMetaResolver.prototype.routingService;
    /**
     * @type {?}
     * @protected
     */
    FindProductPageMetaResolver.prototype.productSearchService;
    /**
     * @type {?}
     * @protected
     */
    FindProductPageMetaResolver.prototype.translation;
    /**
     * @type {?}
     * @protected
     */
    FindProductPageMetaResolver.prototype.authService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmluZC1wcm9kdWN0LXBhZ2UtbWV0YS5yZXNvbHZlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy91c2VyL3NlcnZpY2VzL2ZpbmQtcHJvZHVjdC1wYWdlLW1ldGEucmVzb2x2ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBYyxFQUFFLEVBQUUsYUFBYSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3JELE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3hELE9BQU8sRUFDTCxnQkFBZ0IsR0FHakIsTUFBTSxnQkFBZ0IsQ0FBQztBQUV4QixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNwRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDakQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQ25GLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQzs7Ozs7O0FBRTdEO0lBR2lELHVEQUFnQjtJQWEvRCxxQ0FDWSxjQUE4QixFQUM5QixvQkFBMEMsRUFDMUMsV0FBK0IsRUFDL0IsV0FBd0I7UUFKcEMsWUFNRSxpQkFBTyxTQUdSO1FBUlcsb0JBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLDBCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFDMUMsaUJBQVcsR0FBWCxXQUFXLENBQW9CO1FBQy9CLGlCQUFXLEdBQVgsV0FBVyxDQUFhO1FBZnBDLG1CQUFhLEdBQThCLGFBQWEsQ0FBQztZQUN2RCxLQUFJLENBQUMsb0JBQW9CLENBQUMsVUFBVSxFQUFFLENBQUMsSUFBSSxD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V0FBVyxDQUFDO1FBQ2pDLENBQUMsRUFBQyxFQUNGLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FDaEI7YUFDQSxTQUFTOzs7O1FBQUMsVUFBQyxXQUFnQjtZQUMxQixJQUFJLFdBQVcsRUFBRTtnQkFDZixLQUFLLElBQUksV0FBVyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQzdDO1FBQ0gsQ0FBQyxFQUFDO2FBQ0QsV0FBVyxFQUFFLENBQUM7UUFDakIsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDOztnQkF2RkYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkFOUSxjQUFjO2dCQUNkLG9CQUFvQjtnQkFIcEIsa0JBQWtCO2dCQUlsQixXQUFXOzs7c0NBYnBCO0NBdUdDLEFBeEZELENBR2lELGdCQUFnQixHQXFGaEU7U0FyRlksMkJBQTJCOzs7SUFFdEMsb0RBU0c7Ozs7O0lBR0QscURBQXdDOzs7OztJQUN4QywyREFBb0Q7Ozs7O0lBQ3BELGtEQUF5Qzs7Ozs7SUFDekMsa0RBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YsIGNvbWJpbmVMYXRlc3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgbWFwLCBzd2l0Y2hNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQge1xuICBQYWdlTWV0YVJlc29sdmVyLFxuICBQYWdlVGl0bGVSZXNvbHZlcixcbiAgUGFnZUJyZWFkY3J1bWJSZXNvbHZlcixcbn0gZnJvbSAnLi4vLi4vY21zL3BhZ2UnO1xuaW1wb3J0IHsgUGFnZU1ldGEsIFBhZ2UgfSBmcm9tICcuLi8uLi9jbXMvbW9kZWwvcGFnZS5tb2RlbCc7XG5pbXBvcnQgeyBUcmFuc2xhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi9pMThuL3RyYW5zbGF0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgUGFnZVR5cGUgfSBmcm9tICcuLi8uLi9tb2RlbC9jbXMubW9kZWwnO1xuaW1wb3J0IHsgUm91dGluZ1NlcnZpY2UgfSBmcm9tICcuLi8uLi9yb3V0aW5nL2ZhY2FkZS9yb3V0aW5nLnNlcnZpY2UnO1xuaW1wb3J0IHsgUHJvZHVjdFNlYXJjaFNlcnZpY2UgfSBmcm9tICcuLi8uLi9wcm9kdWN0L2ZhY2FkZS9wcm9kdWN0LXNlYXJjaC5zZXJ2aWNlJztcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vYXV0aC9mYWNhZGUvYXV0aC5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIEZpbmRQcm9kdWN0UGFnZU1ldGFSZXNvbHZlciBleHRlbmRzIFBhZ2VNZXRhUmVzb2x2ZXJcbiAgaW1wbGVtZW50cyBQYWdlVGl0bGVSZXNvbHZlciwgUGFnZUJyZWFkY3J1bWJSZXNvbHZlciB7XG4gIHRvdGFsQW5kQ29kZSQ6IE9ic2VydmFibGU8W251bWJlciwgYW55XT4gPSBjb21iaW5lTGF0ZXN0KFtcbiAgICB0aGlzLnByb2R1Y3RTZWFyY2hTZXJ2aWNlLmdldFJlc3VsdHMoKS5waXBlKFxuICAgICAgZmlsdGVyKGRhdGEgPT4gISEoZGF0YSAmJiBkYXRhLnBhZ2luYXRpb24pKSxcbiAgICAgIG1hcChyZXN1bHRzID0+IHJlc3VsdHMucGFnaW5hdGlvbi50b3RhbFJlc3VsdHMpXG4gICAgKSxcbiAgICB0aGlzLnJvdXRpbmdTZXJ2aWNlLmdldFJvdXRlclN0YXRlKCkucGlwZShcbiAgICAgIG1hcChzdGF0ZSA9PiBzdGF0ZS5zdGF0ZS5xdWVyeVBhcmFtc1snY291cG9uY29kZSddKSxcbiAgICAgIGZpbHRlcihCb29sZWFuKVxuICAgICksXG4gIF0pO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCByb3V0aW5nU2VydmljZTogUm91dGluZ1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHByb2R1Y3RTZWFyY2hTZXJ2aWNlOiBQcm9kdWN0U2VhcmNoU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgdHJhbnNsYXRpb246IFRyYW5zbGF0aW9uU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlXG4gICkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5wYWdlVHlwZSA9IFBhZ2VUeXBlLkNPTlRFTlRfUEFHRTtcbiAgICB0aGlzLnBhZ2VUZW1wbGF0ZSA9ICdTZWFyY2hSZXN1bHRzTGlzdFBhZ2VUZW1wbGF0ZSc7XG4gIH1cblxuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgc2luY2UgdmVyc2lvbiAxLjNcbiAgICpcbiAgICogVGhlIHJlc29sdmUgbWV0aG9kIGlzIG5vIGxvbmdlciBwcmVmZXJyZWQgYW5kIHdpbGwgYmUgcmVtb3ZlZCB3aXRoIHJlbGVhc2UgMi4wLlxuICAgKiBUaGUgY2FsbGVyIGBQYWdlTWV0YVNlcnZpY2VgIHNlcnZpY2UgaXMgaW1wcm92ZWQgdG8gZXhwZWN0IGFsbCBpbmRpdmlkdWFsIHJlc29sdmVyc1xuICAgKiBpbnN0ZWFkLCBzbyB0aGF0IHRoZSBjb2RlIGlzIGVhc2llciBleHRlbnNpYmxlLlxuICAgKi9cbiAgcmVzb2x2ZSgpOiBPYnNlcnZhYmxlPFBhZ2VNZXRhPiB7XG4gICAgcmV0dXJuIGNvbWJpbmVMYXRlc3QoW3RoaXMucmVzb2x2ZVRpdGxlKCksIHRoaXMucmVzb2x2ZUJyZWFkY3J1bWJzKCldKS5waXBlKFxuICAgICAgbWFwKChbdGl0bGUsIGJyZWFkY3J1bWJzXTogW3N0cmluZywgYW55W11dKSA9PiAoe1xuICAgICAgICB0aXRsZSxcbiAgICAgICAgYnJlYWRjcnVtYnMsXG4gICAgICB9KSlcbiAgICApO1xuICB9XG5cbiAgcmVzb2x2ZUJyZWFkY3J1bWJzKCk6IE9ic2VydmFibGU8YW55W10+IHtcbiAgICBjb25zdCBicmVhZGNydW1icyA9IFt7IGxhYmVsOiAnSG9tZScsIGxpbms6ICcvJyB9XTtcbiAgICB0aGlzLmF1dGhTZXJ2aWNlLmlzVXNlckxvZ2dlZEluKCkuc3Vic2NyaWJlKGxvZ2luID0+IHtcbiAgICAgIGlmIChsb2dpbilcbiAgICAgICAgYnJlYWRjcnVtYnMucHVzaCh7IGxhYmVsOiAnTXkgQ291cG9ucycsIGxpbms6ICcvbXktYWNjb3VudC9jb3Vwb25zJyB9KTtcbiAgICB9KTtcblxuICAgIHJldHVybiBvZihicmVhZGNydW1icyk7XG4gIH1cblxuICByZXNvbHZlVGl0bGUoKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gdGhpcy50b3RhbEFuZENvZGUkLnBpcGUoXG4gICAgICBzd2l0Y2hNYXAoKFt0b3RhbCwgY29kZV06IFtudW1iZXIsIHN0cmluZ10pID0+XG4gICAgICAgIHRoaXMudHJhbnNsYXRpb24udHJhbnNsYXRlKCdwYWdlTWV0YVJlc29sdmVyLnNlYXJjaC5maW5kUHJvZHVjdFRpdGxlJywge1xuICAgICAgICAgIGNvdW50OiB0b3RhbCxcbiAgICAgICAgICBjb3Vwb246IGNvZGUsXG4gICAgICAgIH0pXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIGdldFNjb3JlKHBhZ2U6IFBhZ2UpOiBudW1iZXIge1xuICAgIGxldCBzY29yZSA9IDA7XG4gICAgaWYgKHRoaXMucGFnZVR5cGUpIHtcbiAgICAgIHNjb3JlICs9IHBhZ2UudHlwZSA9PT0gdGhpcy5wYWdlVHlwZSA/IDEgOiAtMTtcbiAgICB9XG4gICAgaWYgKHRoaXMucGFnZVRlbXBsYXRlKSB7XG4gICAgICBzY29yZSArPSBwYWdlLnRlbXBsYXRlID09PSB0aGlzLnBhZ2VUZW1wbGF0ZSA/IDEgOiAtMTtcbiAgICB9XG4gICAgdGhpcy5yb3V0aW5nU2VydmljZVxuICAgICAgLmdldFJvdXRlclN0YXRlKClcbiAgICAgIC5waXBlKFxuICAgICAgICBtYXAoc3RhdGUgPT4ge1xuICAgICAgICAgIHJldHVybiBzdGF0ZS5zdGF0ZS5xdWVyeVBhcmFtcztcbiAgICAgICAgfSksXG4gICAgICAgIGZpbHRlcihCb29sZWFuKVxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZSgocXVlcnlQYXJhbXM6IGFueSkgPT4ge1xuICAgICAgICBpZiAocXVlcnlQYXJhbXMpIHtcbiAgICAgICAgICBzY29yZSArPSBxdWVyeVBhcmFtc1snY291cG9uY29kZSddID8gMSA6IC0xO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLnVuc3Vic2NyaWJlKCk7XG4gICAgcmV0dXJuIHNjb3JlO1xuICB9XG59XG4iXX0=