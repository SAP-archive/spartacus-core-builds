import { __decorate, __extends, __read } from "tslib";
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { combineLatest } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';
import { AuthService } from '../../auth/facade/auth.service';
import { PageMetaResolver, } from '../../cms/page';
import { TranslationService } from '../../i18n/translation.service';
import { PageType } from '../../model/cms.model';
import { ProductSearchService } from '../../product/facade/product-search.service';
import { SemanticPathService } from '../../routing/configurable-routes/url-translation/semantic-path.service';
import * as i0 from "@angular/core";
import * as i1 from "../facade/product-search.service";
import * as i2 from "../../i18n/translation.service";
import * as i3 from "../../auth/facade/auth.service";
import * as i4 from "@angular/router";
import * as i5 from "../../routing/configurable-routes/url-translation/semantic-path.service";
/**
 * Resolves page meta data for the search result page, in case it's used
 * to query coupons. This is done by adding a `couponcode` query parameter
 * to the search page route.
 *
 * The page resolves an alternative page title and breadcrumb.
 */
var CouponSearchPageResolver = /** @class */ (function (_super) {
    __extends(CouponSearchPageResolver, _super);
    function CouponSearchPageResolver(productSearchService, translation, authService, route, semanticPathService) {
        var _this = _super.call(this) || this;
        _this.productSearchService = productSearchService;
        _this.translation = translation;
        _this.authService = authService;
        _this.route = route;
        _this.semanticPathService = semanticPathService;
        _this.total$ = _this.productSearchService.getResults().pipe(filter(function (data) { var _a; return !!((_a = data) === null || _a === void 0 ? void 0 : _a.pagination); }), map(function (results) { return results.pagination.totalResults; }));
        _this.pageType = PageType.CONTENT_PAGE;
        _this.pageTemplate = 'SearchResultsListPageTemplate';
        return _this;
    }
    CouponSearchPageResolver.prototype.resolveBreadcrumbs = function () {
        var _this = this;
        return combineLatest([
            this.translation.translate('common.home'),
            this.translation.translate('myCoupons.myCoupons'),
            this.authService.isUserLoggedIn(),
        ]).pipe(map(function (_a) {
            var _b = __read(_a, 3), homeLabel = _b[0], couponLabel = _b[1], isLoggedIn = _b[2];
            var breadcrumbs = [];
            breadcrumbs.push({ label: homeLabel, link: '/' });
            if (isLoggedIn) {
                breadcrumbs.push({
                    label: couponLabel,
                    link: _this.semanticPathService.transform({
                        cxRoute: 'coupons',
                    }),
                });
            }
            return breadcrumbs;
        }));
    };
    CouponSearchPageResolver.prototype.resolveTitle = function () {
        var _this = this;
        return this.total$.pipe(switchMap(function (total) {
            return _this.translation.translate('pageMetaResolver.search.findProductTitle', {
                count: total,
                coupon: _this.couponCode,
            });
        }));
    };
    CouponSearchPageResolver.prototype.getScore = function (page) {
        return _super.prototype.getScore.call(this, page) + (this.couponCode ? 1 : -1);
    };
    Object.defineProperty(CouponSearchPageResolver.prototype, "couponCode", {
        get: function () {
            var _a, _b;
            return (_b = (_a = this.route.snapshot) === null || _a === void 0 ? void 0 : _a.queryParams) === null || _b === void 0 ? void 0 : _b.couponcode;
        },
        enumerable: true,
        configurable: true
    });
    CouponSearchPageResolver.ctorParameters = function () { return [
        { type: ProductSearchService },
        { type: TranslationService },
        { type: AuthService },
        { type: ActivatedRoute },
        { type: SemanticPathService }
    ]; };
    CouponSearchPageResolver.ɵprov = i0.ɵɵdefineInjectable({ factory: function CouponSearchPageResolver_Factory() { return new CouponSearchPageResolver(i0.ɵɵinject(i1.ProductSearchService), i0.ɵɵinject(i2.TranslationService), i0.ɵɵinject(i3.AuthService), i0.ɵɵinject(i4.ActivatedRoute), i0.ɵɵinject(i5.SemanticPathService)); }, token: CouponSearchPageResolver, providedIn: "root" });
    CouponSearchPageResolver = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], CouponSearchPageResolver);
    return CouponSearchPageResolver;
}(PageMetaResolver));
export { CouponSearchPageResolver };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY291cG9uLXNlYXJjaC1wYWdlLW1ldGEucmVzb2x2ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvcHJvZHVjdC9zZXJ2aWNlcy9jb3Vwb24tc2VhcmNoLXBhZ2UtbWV0YS5yZXNvbHZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDakQsT0FBTyxFQUFFLGFBQWEsRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUNqRCxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFFN0QsT0FBTyxFQUVMLGdCQUFnQixHQUVqQixNQUFNLGdCQUFnQixDQUFDO0FBQ3hCLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUNuRixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5RUFBeUUsQ0FBQzs7Ozs7OztBQUU5Rzs7Ozs7O0dBTUc7QUFJSDtJQUE4Qyw0Q0FBZ0I7SUFTNUQsa0NBQ1ksb0JBQTBDLEVBQzFDLFdBQStCLEVBQy9CLFdBQXdCLEVBQ3hCLEtBQXFCLEVBQ3JCLG1CQUF3QztRQUxwRCxZQU9FLGlCQUFPLFNBR1I7UUFUVywwQkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBQzFDLGlCQUFXLEdBQVgsV0FBVyxDQUFvQjtRQUMvQixpQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixXQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQix5QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO1FBWjFDLFlBQU0sR0FFWixLQUFJLENBQUMsb0JBQW9CLENBQUMsVUFBVSxFQUFFLENBQUMsSUFBSSxDQUM3QyxNQUFNLENBQUMsVUFBQSxJQUFJLFlBQUksT0FBQSxDQUFDLFFBQUMsSUFBSSwwQ0FBRSxVQUFVLENBQUEsQ0FBQSxFQUFBLENBQUMsRUFDbEMsR0FBRyxDQUFDLFVBQUEsT0FBTyxJQUFJLE9BQUEsT0FBTyxDQUFDLFVBQVUsQ0FBQyxZQUFZLEVBQS9CLENBQStCLENBQUMsQ0FDaEQsQ0FBQztRQVVBLEtBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDLFlBQVksQ0FBQztRQUN0QyxLQUFJLENBQUMsWUFBWSxHQUFHLCtCQUErQixDQUFDOztJQUN0RCxDQUFDO0lBRUQscURBQWtCLEdBQWxCO1FBQUEsaUJBb0JDO1FBbkJDLE9BQU8sYUFBYSxDQUFDO1lBQ25CLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQztZQUN6QyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxxQkFBcUIsQ0FBQztZQUNqRCxJQUFJLENBQUMsV0FBVyxDQUFDLGNBQWMsRUFBRTtTQUNsQyxDQUFDLENBQUMsSUFBSSxDQUNMLEdBQUcsQ0FBQyxVQUFDLEVBQStEO2dCQUEvRCxrQkFBK0QsRUFBOUQsaUJBQVMsRUFBRSxtQkFBVyxFQUFFLGtCQUFVO1lBQ3RDLElBQU0sV0FBVyxHQUFHLEVBQUUsQ0FBQztZQUN2QixXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztZQUNsRCxJQUFJLFVBQVUsRUFBRTtnQkFDZCxXQUFXLENBQUMsSUFBSSxDQUFDO29CQUNmLEtBQUssRUFBRSxXQUFXO29CQUNsQixJQUFJLEVBQUUsS0FBSSxDQUFDLG1CQUFtQixDQUFDLFNBQVMsQ0FBQzt3QkFDdkMsT0FBTyxFQUFFLFNBQVM7cUJBQ25CLENBQUM7aUJBQ0gsQ0FBQyxDQUFDO2FBQ0o7WUFDRCxPQUFPLFdBQVcsQ0FBQztRQUNyQixDQUFDLENBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQztJQUVELCtDQUFZLEdBQVo7UUFBQSxpQkFTQztRQVJDLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQ3JCLFNBQVMsQ0FBQyxVQUFDLEtBQWE7WUFDdEIsT0FBQSxLQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQywwQ0FBMEMsRUFBRTtnQkFDckUsS0FBSyxFQUFFLEtBQUs7Z0JBQ1osTUFBTSxFQUFFLEtBQUksQ0FBQyxVQUFVO2FBQ3hCLENBQUM7UUFIRixDQUdFLENBQ0gsQ0FDRixDQUFDO0lBQ0osQ0FBQztJQUVELDJDQUFRLEdBQVIsVUFBUyxJQUFVO1FBQ2pCLE9BQU8saUJBQU0sUUFBUSxZQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzNELENBQUM7SUFFRCxzQkFBYyxnREFBVTthQUF4Qjs7WUFDRSxtQkFBTyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsMENBQUUsV0FBVywwQ0FBRSxVQUFVLENBQUM7UUFDdEQsQ0FBQzs7O09BQUE7O2dCQWxEaUMsb0JBQW9CO2dCQUM3QixrQkFBa0I7Z0JBQ2xCLFdBQVc7Z0JBQ2pCLGNBQWM7Z0JBQ0EsbUJBQW1COzs7SUFkekMsd0JBQXdCO1FBSHBDLFVBQVUsQ0FBQztZQUNWLFVBQVUsRUFBRSxNQUFNO1NBQ25CLENBQUM7T0FDVyx3QkFBd0IsQ0E2RHBDO21DQXZGRDtDQXVGQyxBQTdERCxDQUE4QyxnQkFBZ0IsR0E2RDdEO1NBN0RZLHdCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IGNvbWJpbmVMYXRlc3QsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgbWFwLCBzd2l0Y2hNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4uLy4uL2F1dGgvZmFjYWRlL2F1dGguc2VydmljZSc7XG5pbXBvcnQgeyBCcmVhZGNydW1iTWV0YSwgUGFnZSB9IGZyb20gJy4uLy4uL2Ntcy9tb2RlbC9wYWdlLm1vZGVsJztcbmltcG9ydCB7XG4gIFBhZ2VCcmVhZGNydW1iUmVzb2x2ZXIsXG4gIFBhZ2VNZXRhUmVzb2x2ZXIsXG4gIFBhZ2VUaXRsZVJlc29sdmVyLFxufSBmcm9tICcuLi8uLi9jbXMvcGFnZSc7XG5pbXBvcnQgeyBUcmFuc2xhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi9pMThuL3RyYW5zbGF0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgUGFnZVR5cGUgfSBmcm9tICcuLi8uLi9tb2RlbC9jbXMubW9kZWwnO1xuaW1wb3J0IHsgUHJvZHVjdFNlYXJjaFNlcnZpY2UgfSBmcm9tICcuLi8uLi9wcm9kdWN0L2ZhY2FkZS9wcm9kdWN0LXNlYXJjaC5zZXJ2aWNlJztcbmltcG9ydCB7IFNlbWFudGljUGF0aFNlcnZpY2UgfSBmcm9tICcuLi8uLi9yb3V0aW5nL2NvbmZpZ3VyYWJsZS1yb3V0ZXMvdXJsLXRyYW5zbGF0aW9uL3NlbWFudGljLXBhdGguc2VydmljZSc7XG5cbi8qKlxuICogUmVzb2x2ZXMgcGFnZSBtZXRhIGRhdGEgZm9yIHRoZSBzZWFyY2ggcmVzdWx0IHBhZ2UsIGluIGNhc2UgaXQncyB1c2VkXG4gKiB0byBxdWVyeSBjb3Vwb25zLiBUaGlzIGlzIGRvbmUgYnkgYWRkaW5nIGEgYGNvdXBvbmNvZGVgIHF1ZXJ5IHBhcmFtZXRlclxuICogdG8gdGhlIHNlYXJjaCBwYWdlIHJvdXRlLlxuICpcbiAqIFRoZSBwYWdlIHJlc29sdmVzIGFuIGFsdGVybmF0aXZlIHBhZ2UgdGl0bGUgYW5kIGJyZWFkY3J1bWIuXG4gKi9cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBDb3Vwb25TZWFyY2hQYWdlUmVzb2x2ZXIgZXh0ZW5kcyBQYWdlTWV0YVJlc29sdmVyXG4gIGltcGxlbWVudHMgUGFnZVRpdGxlUmVzb2x2ZXIsIFBhZ2VCcmVhZGNydW1iUmVzb2x2ZXIge1xuICBwcm90ZWN0ZWQgdG90YWwkOiBPYnNlcnZhYmxlPFxuICAgIG51bWJlclxuICA+ID0gdGhpcy5wcm9kdWN0U2VhcmNoU2VydmljZS5nZXRSZXN1bHRzKCkucGlwZShcbiAgICBmaWx0ZXIoZGF0YSA9PiAhIWRhdGE/LnBhZ2luYXRpb24pLFxuICAgIG1hcChyZXN1bHRzID0+IHJlc3VsdHMucGFnaW5hdGlvbi50b3RhbFJlc3VsdHMpXG4gICk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIHByb2R1Y3RTZWFyY2hTZXJ2aWNlOiBQcm9kdWN0U2VhcmNoU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgdHJhbnNsYXRpb246IFRyYW5zbGF0aW9uU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCByb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgcHJvdGVjdGVkIHNlbWFudGljUGF0aFNlcnZpY2U6IFNlbWFudGljUGF0aFNlcnZpY2VcbiAgKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnBhZ2VUeXBlID0gUGFnZVR5cGUuQ09OVEVOVF9QQUdFO1xuICAgIHRoaXMucGFnZVRlbXBsYXRlID0gJ1NlYXJjaFJlc3VsdHNMaXN0UGFnZVRlbXBsYXRlJztcbiAgfVxuXG4gIHJlc29sdmVCcmVhZGNydW1icygpOiBPYnNlcnZhYmxlPEJyZWFkY3J1bWJNZXRhW10+IHtcbiAgICByZXR1cm4gY29tYmluZUxhdGVzdChbXG4gICAgICB0aGlzLnRyYW5zbGF0aW9uLnRyYW5zbGF0ZSgnY29tbW9uLmhvbWUnKSxcbiAgICAgIHRoaXMudHJhbnNsYXRpb24udHJhbnNsYXRlKCdteUNvdXBvbnMubXlDb3Vwb25zJyksXG4gICAgICB0aGlzLmF1dGhTZXJ2aWNlLmlzVXNlckxvZ2dlZEluKCksXG4gICAgXSkucGlwZShcbiAgICAgIG1hcCgoW2hvbWVMYWJlbCwgY291cG9uTGFiZWwsIGlzTG9nZ2VkSW5dOiBbc3RyaW5nLCBzdHJpbmcsIGJvb2xlYW5dKSA9PiB7XG4gICAgICAgIGNvbnN0IGJyZWFkY3J1bWJzID0gW107XG4gICAgICAgIGJyZWFkY3J1bWJzLnB1c2goeyBsYWJlbDogaG9tZUxhYmVsLCBsaW5rOiAnLycgfSk7XG4gICAgICAgIGlmIChpc0xvZ2dlZEluKSB7XG4gICAgICAgICAgYnJlYWRjcnVtYnMucHVzaCh7XG4gICAgICAgICAgICBsYWJlbDogY291cG9uTGFiZWwsXG4gICAgICAgICAgICBsaW5rOiB0aGlzLnNlbWFudGljUGF0aFNlcnZpY2UudHJhbnNmb3JtKHtcbiAgICAgICAgICAgICAgY3hSb3V0ZTogJ2NvdXBvbnMnLFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGJyZWFkY3J1bWJzO1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgcmVzb2x2ZVRpdGxlKCk6IE9ic2VydmFibGU8c3RyaW5nPiB7XG4gICAgcmV0dXJuIHRoaXMudG90YWwkLnBpcGUoXG4gICAgICBzd2l0Y2hNYXAoKHRvdGFsOiBudW1iZXIpID0+XG4gICAgICAgIHRoaXMudHJhbnNsYXRpb24udHJhbnNsYXRlKCdwYWdlTWV0YVJlc29sdmVyLnNlYXJjaC5maW5kUHJvZHVjdFRpdGxlJywge1xuICAgICAgICAgIGNvdW50OiB0b3RhbCxcbiAgICAgICAgICBjb3Vwb246IHRoaXMuY291cG9uQ29kZSxcbiAgICAgICAgfSlcbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgZ2V0U2NvcmUocGFnZTogUGFnZSk6IG51bWJlciB7XG4gICAgcmV0dXJuIHN1cGVyLmdldFNjb3JlKHBhZ2UpICsgKHRoaXMuY291cG9uQ29kZSA/IDEgOiAtMSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0IGNvdXBvbkNvZGUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5yb3V0ZS5zbmFwc2hvdD8ucXVlcnlQYXJhbXM/LmNvdXBvbmNvZGU7XG4gIH1cbn1cbiJdfQ==