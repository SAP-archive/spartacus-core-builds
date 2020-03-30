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
        _this.total$ = _this.productSearchService.getResults().pipe(filter(function (data) { return !!(data === null || data === void 0 ? void 0 : data.pagination); }), map(function (results) { return results.pagination.totalResults; }));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY291cG9uLXNlYXJjaC1wYWdlLW1ldGEucmVzb2x2ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvcHJvZHVjdC9zZXJ2aWNlcy9jb3Vwb24tc2VhcmNoLXBhZ2UtbWV0YS5yZXNvbHZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDakQsT0FBTyxFQUFFLGFBQWEsRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUNqRCxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFFN0QsT0FBTyxFQUVMLGdCQUFnQixHQUVqQixNQUFNLGdCQUFnQixDQUFDO0FBQ3hCLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUNuRixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5RUFBeUUsQ0FBQzs7Ozs7OztBQUU5Rzs7Ozs7O0dBTUc7QUFJSDtJQUE4Qyw0Q0FBZ0I7SUFTNUQsa0NBQ1ksb0JBQTBDLEVBQzFDLFdBQStCLEVBQy9CLFdBQXdCLEVBQ3hCLEtBQXFCLEVBQ3JCLG1CQUF3QztRQUxwRCxZQU9FLGlCQUFPLFNBR1I7UUFUVywwQkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBQzFDLGlCQUFXLEdBQVgsV0FBVyxDQUFvQjtRQUMvQixpQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixXQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQix5QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO1FBWjFDLFlBQU0sR0FFWixLQUFJLENBQUMsb0JBQW9CLENBQUMsVUFBVSxFQUFFLENBQUMsSUFBSSxDQUM3QyxNQUFNLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxDQUFDLEVBQUMsSUFBSSxhQUFKLElBQUksdUJBQUosSUFBSSxDQUFFLFVBQVUsQ0FBQSxFQUFsQixDQUFrQixDQUFDLEVBQ2xDLEdBQUcsQ0FBQyxVQUFBLE9BQU8sSUFBSSxPQUFBLE9BQU8sQ0FBQyxVQUFVLENBQUMsWUFBWSxFQUEvQixDQUErQixDQUFDLENBQ2hELENBQUM7UUFVQSxLQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQyxZQUFZLENBQUM7UUFDdEMsS0FBSSxDQUFDLFlBQVksR0FBRywrQkFBK0IsQ0FBQzs7SUFDdEQsQ0FBQztJQUVELHFEQUFrQixHQUFsQjtRQUFBLGlCQW9CQztRQW5CQyxPQUFPLGFBQWEsQ0FBQztZQUNuQixJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUM7WUFDekMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMscUJBQXFCLENBQUM7WUFDakQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxjQUFjLEVBQUU7U0FDbEMsQ0FBQyxDQUFDLElBQUksQ0FDTCxHQUFHLENBQUMsVUFBQyxFQUErRDtnQkFBL0Qsa0JBQStELEVBQTlELGlCQUFTLEVBQUUsbUJBQVcsRUFBRSxrQkFBVTtZQUN0QyxJQUFNLFdBQVcsR0FBRyxFQUFFLENBQUM7WUFDdkIsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7WUFDbEQsSUFBSSxVQUFVLEVBQUU7Z0JBQ2QsV0FBVyxDQUFDLElBQUksQ0FBQztvQkFDZixLQUFLLEVBQUUsV0FBVztvQkFDbEIsSUFBSSxFQUFFLEtBQUksQ0FBQyxtQkFBbUIsQ0FBQyxTQUFTLENBQUM7d0JBQ3ZDLE9BQU8sRUFBRSxTQUFTO3FCQUNuQixDQUFDO2lCQUNILENBQUMsQ0FBQzthQUNKO1lBQ0QsT0FBTyxXQUFXLENBQUM7UUFDckIsQ0FBQyxDQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7SUFFRCwrQ0FBWSxHQUFaO1FBQUEsaUJBU0M7UUFSQyxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUNyQixTQUFTLENBQUMsVUFBQyxLQUFhO1lBQ3RCLE9BQUEsS0FBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsMENBQTBDLEVBQUU7Z0JBQ3JFLEtBQUssRUFBRSxLQUFLO2dCQUNaLE1BQU0sRUFBRSxLQUFJLENBQUMsVUFBVTthQUN4QixDQUFDO1FBSEYsQ0FHRSxDQUNILENBQ0YsQ0FBQztJQUNKLENBQUM7SUFFRCwyQ0FBUSxHQUFSLFVBQVMsSUFBVTtRQUNqQixPQUFPLGlCQUFNLFFBQVEsWUFBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMzRCxDQUFDO0lBRUQsc0JBQWMsZ0RBQVU7YUFBeEI7O1lBQ0UsbUJBQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLDBDQUFFLFdBQVcsMENBQUUsVUFBVSxDQUFDO1FBQ3RELENBQUM7OztPQUFBOztnQkFsRGlDLG9CQUFvQjtnQkFDN0Isa0JBQWtCO2dCQUNsQixXQUFXO2dCQUNqQixjQUFjO2dCQUNBLG1CQUFtQjs7O0lBZHpDLHdCQUF3QjtRQUhwQyxVQUFVLENBQUM7WUFDVixVQUFVLEVBQUUsTUFBTTtTQUNuQixDQUFDO09BQ1csd0JBQXdCLENBNkRwQzttQ0F2RkQ7Q0F1RkMsQUE3REQsQ0FBOEMsZ0JBQWdCLEdBNkQ3RDtTQTdEWSx3QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBjb21iaW5lTGF0ZXN0LCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIG1hcCwgc3dpdGNoTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuLi8uLi9hdXRoL2ZhY2FkZS9hdXRoLnNlcnZpY2UnO1xuaW1wb3J0IHsgQnJlYWRjcnVtYk1ldGEsIFBhZ2UgfSBmcm9tICcuLi8uLi9jbXMvbW9kZWwvcGFnZS5tb2RlbCc7XG5pbXBvcnQge1xuICBQYWdlQnJlYWRjcnVtYlJlc29sdmVyLFxuICBQYWdlTWV0YVJlc29sdmVyLFxuICBQYWdlVGl0bGVSZXNvbHZlcixcbn0gZnJvbSAnLi4vLi4vY21zL3BhZ2UnO1xuaW1wb3J0IHsgVHJhbnNsYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vaTE4bi90cmFuc2xhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IFBhZ2VUeXBlIH0gZnJvbSAnLi4vLi4vbW9kZWwvY21zLm1vZGVsJztcbmltcG9ydCB7IFByb2R1Y3RTZWFyY2hTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vcHJvZHVjdC9mYWNhZGUvcHJvZHVjdC1zZWFyY2guc2VydmljZSc7XG5pbXBvcnQgeyBTZW1hbnRpY1BhdGhTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vcm91dGluZy9jb25maWd1cmFibGUtcm91dGVzL3VybC10cmFuc2xhdGlvbi9zZW1hbnRpYy1wYXRoLnNlcnZpY2UnO1xuXG4vKipcbiAqIFJlc29sdmVzIHBhZ2UgbWV0YSBkYXRhIGZvciB0aGUgc2VhcmNoIHJlc3VsdCBwYWdlLCBpbiBjYXNlIGl0J3MgdXNlZFxuICogdG8gcXVlcnkgY291cG9ucy4gVGhpcyBpcyBkb25lIGJ5IGFkZGluZyBhIGBjb3Vwb25jb2RlYCBxdWVyeSBwYXJhbWV0ZXJcbiAqIHRvIHRoZSBzZWFyY2ggcGFnZSByb3V0ZS5cbiAqXG4gKiBUaGUgcGFnZSByZXNvbHZlcyBhbiBhbHRlcm5hdGl2ZSBwYWdlIHRpdGxlIGFuZCBicmVhZGNydW1iLlxuICovXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgQ291cG9uU2VhcmNoUGFnZVJlc29sdmVyIGV4dGVuZHMgUGFnZU1ldGFSZXNvbHZlclxuICBpbXBsZW1lbnRzIFBhZ2VUaXRsZVJlc29sdmVyLCBQYWdlQnJlYWRjcnVtYlJlc29sdmVyIHtcbiAgcHJvdGVjdGVkIHRvdGFsJDogT2JzZXJ2YWJsZTxcbiAgICBudW1iZXJcbiAgPiA9IHRoaXMucHJvZHVjdFNlYXJjaFNlcnZpY2UuZ2V0UmVzdWx0cygpLnBpcGUoXG4gICAgZmlsdGVyKGRhdGEgPT4gISFkYXRhPy5wYWdpbmF0aW9uKSxcbiAgICBtYXAocmVzdWx0cyA9PiByZXN1bHRzLnBhZ2luYXRpb24udG90YWxSZXN1bHRzKVxuICApO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBwcm9kdWN0U2VhcmNoU2VydmljZTogUHJvZHVjdFNlYXJjaFNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHRyYW5zbGF0aW9uOiBUcmFuc2xhdGlvblNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgIHByb3RlY3RlZCBzZW1hbnRpY1BhdGhTZXJ2aWNlOiBTZW1hbnRpY1BhdGhTZXJ2aWNlXG4gICkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5wYWdlVHlwZSA9IFBhZ2VUeXBlLkNPTlRFTlRfUEFHRTtcbiAgICB0aGlzLnBhZ2VUZW1wbGF0ZSA9ICdTZWFyY2hSZXN1bHRzTGlzdFBhZ2VUZW1wbGF0ZSc7XG4gIH1cblxuICByZXNvbHZlQnJlYWRjcnVtYnMoKTogT2JzZXJ2YWJsZTxCcmVhZGNydW1iTWV0YVtdPiB7XG4gICAgcmV0dXJuIGNvbWJpbmVMYXRlc3QoW1xuICAgICAgdGhpcy50cmFuc2xhdGlvbi50cmFuc2xhdGUoJ2NvbW1vbi5ob21lJyksXG4gICAgICB0aGlzLnRyYW5zbGF0aW9uLnRyYW5zbGF0ZSgnbXlDb3Vwb25zLm15Q291cG9ucycpLFxuICAgICAgdGhpcy5hdXRoU2VydmljZS5pc1VzZXJMb2dnZWRJbigpLFxuICAgIF0pLnBpcGUoXG4gICAgICBtYXAoKFtob21lTGFiZWwsIGNvdXBvbkxhYmVsLCBpc0xvZ2dlZEluXTogW3N0cmluZywgc3RyaW5nLCBib29sZWFuXSkgPT4ge1xuICAgICAgICBjb25zdCBicmVhZGNydW1icyA9IFtdO1xuICAgICAgICBicmVhZGNydW1icy5wdXNoKHsgbGFiZWw6IGhvbWVMYWJlbCwgbGluazogJy8nIH0pO1xuICAgICAgICBpZiAoaXNMb2dnZWRJbikge1xuICAgICAgICAgIGJyZWFkY3J1bWJzLnB1c2goe1xuICAgICAgICAgICAgbGFiZWw6IGNvdXBvbkxhYmVsLFxuICAgICAgICAgICAgbGluazogdGhpcy5zZW1hbnRpY1BhdGhTZXJ2aWNlLnRyYW5zZm9ybSh7XG4gICAgICAgICAgICAgIGN4Um91dGU6ICdjb3Vwb25zJyxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBicmVhZGNydW1icztcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIHJlc29sdmVUaXRsZSgpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xuICAgIHJldHVybiB0aGlzLnRvdGFsJC5waXBlKFxuICAgICAgc3dpdGNoTWFwKCh0b3RhbDogbnVtYmVyKSA9PlxuICAgICAgICB0aGlzLnRyYW5zbGF0aW9uLnRyYW5zbGF0ZSgncGFnZU1ldGFSZXNvbHZlci5zZWFyY2guZmluZFByb2R1Y3RUaXRsZScsIHtcbiAgICAgICAgICBjb3VudDogdG90YWwsXG4gICAgICAgICAgY291cG9uOiB0aGlzLmNvdXBvbkNvZGUsXG4gICAgICAgIH0pXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIGdldFNjb3JlKHBhZ2U6IFBhZ2UpOiBudW1iZXIge1xuICAgIHJldHVybiBzdXBlci5nZXRTY29yZShwYWdlKSArICh0aGlzLmNvdXBvbkNvZGUgPyAxIDogLTEpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGdldCBjb3Vwb25Db2RlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMucm91dGUuc25hcHNob3Q/LnF1ZXJ5UGFyYW1zPy5jb3Vwb25jb2RlO1xuICB9XG59XG4iXX0=