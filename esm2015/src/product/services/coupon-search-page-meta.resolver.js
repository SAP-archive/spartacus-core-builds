import { __decorate } from "tslib";
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
let CouponSearchPageResolver = class CouponSearchPageResolver extends PageMetaResolver {
    constructor(productSearchService, translation, authService, route, semanticPathService) {
        super();
        this.productSearchService = productSearchService;
        this.translation = translation;
        this.authService = authService;
        this.route = route;
        this.semanticPathService = semanticPathService;
        this.total$ = this.productSearchService.getResults().pipe(filter(data => { var _a; return !!((_a = data) === null || _a === void 0 ? void 0 : _a.pagination); }), map(results => results.pagination.totalResults));
        this.pageType = PageType.CONTENT_PAGE;
        this.pageTemplate = 'SearchResultsListPageTemplate';
    }
    resolveBreadcrumbs() {
        return combineLatest([
            this.translation.translate('common.home'),
            this.translation.translate('myCoupons.myCoupons'),
            this.authService.isUserLoggedIn(),
        ]).pipe(map(([homeLabel, couponLabel, isLoggedIn]) => {
            const breadcrumbs = [];
            breadcrumbs.push({ label: homeLabel, link: '/' });
            if (isLoggedIn) {
                breadcrumbs.push({
                    label: couponLabel,
                    link: this.semanticPathService.transform({
                        cxRoute: 'coupons',
                    }),
                });
            }
            return breadcrumbs;
        }));
    }
    resolveTitle() {
        return this.total$.pipe(switchMap((total) => this.translation.translate('pageMetaResolver.search.findProductTitle', {
            count: total,
            coupon: this.couponCode,
        })));
    }
    getScore(page) {
        return super.getScore(page) + (this.couponCode ? 1 : -1);
    }
    get couponCode() {
        var _a, _b;
        return (_b = (_a = this.route.snapshot) === null || _a === void 0 ? void 0 : _a.queryParams) === null || _b === void 0 ? void 0 : _b.couponcode;
    }
};
CouponSearchPageResolver.ctorParameters = () => [
    { type: ProductSearchService },
    { type: TranslationService },
    { type: AuthService },
    { type: ActivatedRoute },
    { type: SemanticPathService }
];
CouponSearchPageResolver.ɵprov = i0.ɵɵdefineInjectable({ factory: function CouponSearchPageResolver_Factory() { return new CouponSearchPageResolver(i0.ɵɵinject(i1.ProductSearchService), i0.ɵɵinject(i2.TranslationService), i0.ɵɵinject(i3.AuthService), i0.ɵɵinject(i4.ActivatedRoute), i0.ɵɵinject(i5.SemanticPathService)); }, token: CouponSearchPageResolver, providedIn: "root" });
CouponSearchPageResolver = __decorate([
    Injectable({
        providedIn: 'root',
    })
], CouponSearchPageResolver);
export { CouponSearchPageResolver };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY291cG9uLXNlYXJjaC1wYWdlLW1ldGEucmVzb2x2ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvcHJvZHVjdC9zZXJ2aWNlcy9jb3Vwb24tc2VhcmNoLXBhZ2UtbWV0YS5yZXNvbHZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDakQsT0FBTyxFQUFFLGFBQWEsRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUNqRCxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFFN0QsT0FBTyxFQUVMLGdCQUFnQixHQUVqQixNQUFNLGdCQUFnQixDQUFDO0FBQ3hCLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUNuRixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5RUFBeUUsQ0FBQzs7Ozs7OztBQUU5Rzs7Ozs7O0dBTUc7QUFJSCxJQUFhLHdCQUF3QixHQUFyQyxNQUFhLHdCQUF5QixTQUFRLGdCQUFnQjtJQVM1RCxZQUNZLG9CQUEwQyxFQUMxQyxXQUErQixFQUMvQixXQUF3QixFQUN4QixLQUFxQixFQUNyQixtQkFBd0M7UUFFbEQsS0FBSyxFQUFFLENBQUM7UUFORSx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBQzFDLGdCQUFXLEdBQVgsV0FBVyxDQUFvQjtRQUMvQixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQix3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO1FBWjFDLFdBQU0sR0FFWixJQUFJLENBQUMsb0JBQW9CLENBQUMsVUFBVSxFQUFFLENBQUMsSUFBSSxDQUM3QyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsV0FBQyxPQUFBLENBQUMsUUFBQyxJQUFJLDBDQUFFLFVBQVUsQ0FBQSxDQUFBLEVBQUEsQ0FBQyxFQUNsQyxHQUFHLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxDQUNoRCxDQUFDO1FBVUEsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUMsWUFBWSxDQUFDO1FBQ3RDLElBQUksQ0FBQyxZQUFZLEdBQUcsK0JBQStCLENBQUM7SUFDdEQsQ0FBQztJQUVELGtCQUFrQjtRQUNoQixPQUFPLGFBQWEsQ0FBQztZQUNuQixJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUM7WUFDekMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMscUJBQXFCLENBQUM7WUFDakQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxjQUFjLEVBQUU7U0FDbEMsQ0FBQyxDQUFDLElBQUksQ0FDTCxHQUFHLENBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBRSxXQUFXLEVBQUUsVUFBVSxDQUE0QixFQUFFLEVBQUU7WUFDdEUsTUFBTSxXQUFXLEdBQUcsRUFBRSxDQUFDO1lBQ3ZCLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO1lBQ2xELElBQUksVUFBVSxFQUFFO2dCQUNkLFdBQVcsQ0FBQyxJQUFJLENBQUM7b0JBQ2YsS0FBSyxFQUFFLFdBQVc7b0JBQ2xCLElBQUksRUFBRSxJQUFJLENBQUMsbUJBQW1CLENBQUMsU0FBUyxDQUFDO3dCQUN2QyxPQUFPLEVBQUUsU0FBUztxQkFDbkIsQ0FBQztpQkFDSCxDQUFDLENBQUM7YUFDSjtZQUNELE9BQU8sV0FBVyxDQUFDO1FBQ3JCLENBQUMsQ0FBQyxDQUNILENBQUM7SUFDSixDQUFDO0lBRUQsWUFBWTtRQUNWLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQ3JCLFNBQVMsQ0FBQyxDQUFDLEtBQWEsRUFBRSxFQUFFLENBQzFCLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLDBDQUEwQyxFQUFFO1lBQ3JFLEtBQUssRUFBRSxLQUFLO1lBQ1osTUFBTSxFQUFFLElBQUksQ0FBQyxVQUFVO1NBQ3hCLENBQUMsQ0FDSCxDQUNGLENBQUM7SUFDSixDQUFDO0lBRUQsUUFBUSxDQUFDLElBQVU7UUFDakIsT0FBTyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzNELENBQUM7SUFFRCxJQUFjLFVBQVU7O1FBQ3RCLG1CQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSwwQ0FBRSxXQUFXLDBDQUFFLFVBQVUsQ0FBQztJQUN0RCxDQUFDO0NBQ0YsQ0FBQTs7WUFuRG1DLG9CQUFvQjtZQUM3QixrQkFBa0I7WUFDbEIsV0FBVztZQUNqQixjQUFjO1lBQ0EsbUJBQW1COzs7QUFkekMsd0JBQXdCO0lBSHBDLFVBQVUsQ0FBQztRQUNWLFVBQVUsRUFBRSxNQUFNO0tBQ25CLENBQUM7R0FDVyx3QkFBd0IsQ0E2RHBDO1NBN0RZLHdCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IGNvbWJpbmVMYXRlc3QsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgbWFwLCBzd2l0Y2hNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4uLy4uL2F1dGgvZmFjYWRlL2F1dGguc2VydmljZSc7XG5pbXBvcnQgeyBCcmVhZGNydW1iTWV0YSwgUGFnZSB9IGZyb20gJy4uLy4uL2Ntcy9tb2RlbC9wYWdlLm1vZGVsJztcbmltcG9ydCB7XG4gIFBhZ2VCcmVhZGNydW1iUmVzb2x2ZXIsXG4gIFBhZ2VNZXRhUmVzb2x2ZXIsXG4gIFBhZ2VUaXRsZVJlc29sdmVyLFxufSBmcm9tICcuLi8uLi9jbXMvcGFnZSc7XG5pbXBvcnQgeyBUcmFuc2xhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi9pMThuL3RyYW5zbGF0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgUGFnZVR5cGUgfSBmcm9tICcuLi8uLi9tb2RlbC9jbXMubW9kZWwnO1xuaW1wb3J0IHsgUHJvZHVjdFNlYXJjaFNlcnZpY2UgfSBmcm9tICcuLi8uLi9wcm9kdWN0L2ZhY2FkZS9wcm9kdWN0LXNlYXJjaC5zZXJ2aWNlJztcbmltcG9ydCB7IFNlbWFudGljUGF0aFNlcnZpY2UgfSBmcm9tICcuLi8uLi9yb3V0aW5nL2NvbmZpZ3VyYWJsZS1yb3V0ZXMvdXJsLXRyYW5zbGF0aW9uL3NlbWFudGljLXBhdGguc2VydmljZSc7XG5cbi8qKlxuICogUmVzb2x2ZXMgcGFnZSBtZXRhIGRhdGEgZm9yIHRoZSBzZWFyY2ggcmVzdWx0IHBhZ2UsIGluIGNhc2UgaXQncyB1c2VkXG4gKiB0byBxdWVyeSBjb3Vwb25zLiBUaGlzIGlzIGRvbmUgYnkgYWRkaW5nIGEgYGNvdXBvbmNvZGVgIHF1ZXJ5IHBhcmFtZXRlclxuICogdG8gdGhlIHNlYXJjaCBwYWdlIHJvdXRlLlxuICpcbiAqIFRoZSBwYWdlIHJlc29sdmVzIGFuIGFsdGVybmF0aXZlIHBhZ2UgdGl0bGUgYW5kIGJyZWFkY3J1bWIuXG4gKi9cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBDb3Vwb25TZWFyY2hQYWdlUmVzb2x2ZXIgZXh0ZW5kcyBQYWdlTWV0YVJlc29sdmVyXG4gIGltcGxlbWVudHMgUGFnZVRpdGxlUmVzb2x2ZXIsIFBhZ2VCcmVhZGNydW1iUmVzb2x2ZXIge1xuICBwcm90ZWN0ZWQgdG90YWwkOiBPYnNlcnZhYmxlPFxuICAgIG51bWJlclxuICA+ID0gdGhpcy5wcm9kdWN0U2VhcmNoU2VydmljZS5nZXRSZXN1bHRzKCkucGlwZShcbiAgICBmaWx0ZXIoZGF0YSA9PiAhIWRhdGE/LnBhZ2luYXRpb24pLFxuICAgIG1hcChyZXN1bHRzID0+IHJlc3VsdHMucGFnaW5hdGlvbi50b3RhbFJlc3VsdHMpXG4gICk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIHByb2R1Y3RTZWFyY2hTZXJ2aWNlOiBQcm9kdWN0U2VhcmNoU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgdHJhbnNsYXRpb246IFRyYW5zbGF0aW9uU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCByb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgcHJvdGVjdGVkIHNlbWFudGljUGF0aFNlcnZpY2U6IFNlbWFudGljUGF0aFNlcnZpY2VcbiAgKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnBhZ2VUeXBlID0gUGFnZVR5cGUuQ09OVEVOVF9QQUdFO1xuICAgIHRoaXMucGFnZVRlbXBsYXRlID0gJ1NlYXJjaFJlc3VsdHNMaXN0UGFnZVRlbXBsYXRlJztcbiAgfVxuXG4gIHJlc29sdmVCcmVhZGNydW1icygpOiBPYnNlcnZhYmxlPEJyZWFkY3J1bWJNZXRhW10+IHtcbiAgICByZXR1cm4gY29tYmluZUxhdGVzdChbXG4gICAgICB0aGlzLnRyYW5zbGF0aW9uLnRyYW5zbGF0ZSgnY29tbW9uLmhvbWUnKSxcbiAgICAgIHRoaXMudHJhbnNsYXRpb24udHJhbnNsYXRlKCdteUNvdXBvbnMubXlDb3Vwb25zJyksXG4gICAgICB0aGlzLmF1dGhTZXJ2aWNlLmlzVXNlckxvZ2dlZEluKCksXG4gICAgXSkucGlwZShcbiAgICAgIG1hcCgoW2hvbWVMYWJlbCwgY291cG9uTGFiZWwsIGlzTG9nZ2VkSW5dOiBbc3RyaW5nLCBzdHJpbmcsIGJvb2xlYW5dKSA9PiB7XG4gICAgICAgIGNvbnN0IGJyZWFkY3J1bWJzID0gW107XG4gICAgICAgIGJyZWFkY3J1bWJzLnB1c2goeyBsYWJlbDogaG9tZUxhYmVsLCBsaW5rOiAnLycgfSk7XG4gICAgICAgIGlmIChpc0xvZ2dlZEluKSB7XG4gICAgICAgICAgYnJlYWRjcnVtYnMucHVzaCh7XG4gICAgICAgICAgICBsYWJlbDogY291cG9uTGFiZWwsXG4gICAgICAgICAgICBsaW5rOiB0aGlzLnNlbWFudGljUGF0aFNlcnZpY2UudHJhbnNmb3JtKHtcbiAgICAgICAgICAgICAgY3hSb3V0ZTogJ2NvdXBvbnMnLFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGJyZWFkY3J1bWJzO1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgcmVzb2x2ZVRpdGxlKCk6IE9ic2VydmFibGU8c3RyaW5nPiB7XG4gICAgcmV0dXJuIHRoaXMudG90YWwkLnBpcGUoXG4gICAgICBzd2l0Y2hNYXAoKHRvdGFsOiBudW1iZXIpID0+XG4gICAgICAgIHRoaXMudHJhbnNsYXRpb24udHJhbnNsYXRlKCdwYWdlTWV0YVJlc29sdmVyLnNlYXJjaC5maW5kUHJvZHVjdFRpdGxlJywge1xuICAgICAgICAgIGNvdW50OiB0b3RhbCxcbiAgICAgICAgICBjb3Vwb246IHRoaXMuY291cG9uQ29kZSxcbiAgICAgICAgfSlcbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgZ2V0U2NvcmUocGFnZTogUGFnZSk6IG51bWJlciB7XG4gICAgcmV0dXJuIHN1cGVyLmdldFNjb3JlKHBhZ2UpICsgKHRoaXMuY291cG9uQ29kZSA/IDEgOiAtMSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0IGNvdXBvbkNvZGUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5yb3V0ZS5zbmFwc2hvdD8ucXVlcnlQYXJhbXM/LmNvdXBvbmNvZGU7XG4gIH1cbn1cbiJdfQ==