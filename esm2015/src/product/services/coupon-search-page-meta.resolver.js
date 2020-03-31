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
        this.total$ = this.productSearchService.getResults().pipe(filter((data) => !!(data === null || data === void 0 ? void 0 : data.pagination)), map((results) => results.pagination.totalResults));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY291cG9uLXNlYXJjaC1wYWdlLW1ldGEucmVzb2x2ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvcHJvZHVjdC9zZXJ2aWNlcy9jb3Vwb24tc2VhcmNoLXBhZ2UtbWV0YS5yZXNvbHZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDakQsT0FBTyxFQUFFLGFBQWEsRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUNqRCxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFFN0QsT0FBTyxFQUVMLGdCQUFnQixHQUVqQixNQUFNLGdCQUFnQixDQUFDO0FBQ3hCLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUNuRixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5RUFBeUUsQ0FBQzs7Ozs7OztBQUU5Rzs7Ozs7O0dBTUc7QUFJSCxJQUFhLHdCQUF3QixHQUFyQyxNQUFhLHdCQUF5QixTQUFRLGdCQUFnQjtJQVM1RCxZQUNZLG9CQUEwQyxFQUMxQyxXQUErQixFQUMvQixXQUF3QixFQUN4QixLQUFxQixFQUNyQixtQkFBd0M7UUFFbEQsS0FBSyxFQUFFLENBQUM7UUFORSx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBQzFDLGdCQUFXLEdBQVgsV0FBVyxDQUFvQjtRQUMvQixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQix3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO1FBWjFDLFdBQU0sR0FFWixJQUFJLENBQUMsb0JBQW9CLENBQUMsVUFBVSxFQUFFLENBQUMsSUFBSSxDQUM3QyxNQUFNLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBQyxJQUFJLGFBQUosSUFBSSx1QkFBSixJQUFJLENBQUUsVUFBVSxDQUFBLENBQUMsRUFDcEMsR0FBRyxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxDQUNsRCxDQUFDO1FBVUEsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUMsWUFBWSxDQUFDO1FBQ3RDLElBQUksQ0FBQyxZQUFZLEdBQUcsK0JBQStCLENBQUM7SUFDdEQsQ0FBQztJQUVELGtCQUFrQjtRQUNoQixPQUFPLGFBQWEsQ0FBQztZQUNuQixJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUM7WUFDekMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMscUJBQXFCLENBQUM7WUFDakQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxjQUFjLEVBQUU7U0FDbEMsQ0FBQyxDQUFDLElBQUksQ0FDTCxHQUFHLENBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBRSxXQUFXLEVBQUUsVUFBVSxDQUE0QixFQUFFLEVBQUU7WUFDdEUsTUFBTSxXQUFXLEdBQUcsRUFBRSxDQUFDO1lBQ3ZCLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO1lBQ2xELElBQUksVUFBVSxFQUFFO2dCQUNkLFdBQVcsQ0FBQyxJQUFJLENBQUM7b0JBQ2YsS0FBSyxFQUFFLFdBQVc7b0JBQ2xCLElBQUksRUFBRSxJQUFJLENBQUMsbUJBQW1CLENBQUMsU0FBUyxDQUFDO3dCQUN2QyxPQUFPLEVBQUUsU0FBUztxQkFDbkIsQ0FBQztpQkFDSCxDQUFDLENBQUM7YUFDSjtZQUNELE9BQU8sV0FBVyxDQUFDO1FBQ3JCLENBQUMsQ0FBQyxDQUNILENBQUM7SUFDSixDQUFDO0lBRUQsWUFBWTtRQUNWLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQ3JCLFNBQVMsQ0FBQyxDQUFDLEtBQWEsRUFBRSxFQUFFLENBQzFCLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLDBDQUEwQyxFQUFFO1lBQ3JFLEtBQUssRUFBRSxLQUFLO1lBQ1osTUFBTSxFQUFFLElBQUksQ0FBQyxVQUFVO1NBQ3hCLENBQUMsQ0FDSCxDQUNGLENBQUM7SUFDSixDQUFDO0lBRUQsUUFBUSxDQUFDLElBQVU7UUFDakIsT0FBTyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzNELENBQUM7SUFFRCxJQUFjLFVBQVU7O1FBQ3RCLG1CQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSwwQ0FBRSxXQUFXLDBDQUFFLFVBQVUsQ0FBQztJQUN0RCxDQUFDO0NBQ0YsQ0FBQTs7WUFuRG1DLG9CQUFvQjtZQUM3QixrQkFBa0I7WUFDbEIsV0FBVztZQUNqQixjQUFjO1lBQ0EsbUJBQW1COzs7QUFkekMsd0JBQXdCO0lBSHBDLFVBQVUsQ0FBQztRQUNWLFVBQVUsRUFBRSxNQUFNO0tBQ25CLENBQUM7R0FDVyx3QkFBd0IsQ0E2RHBDO1NBN0RZLHdCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IGNvbWJpbmVMYXRlc3QsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgbWFwLCBzd2l0Y2hNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4uLy4uL2F1dGgvZmFjYWRlL2F1dGguc2VydmljZSc7XG5pbXBvcnQgeyBCcmVhZGNydW1iTWV0YSwgUGFnZSB9IGZyb20gJy4uLy4uL2Ntcy9tb2RlbC9wYWdlLm1vZGVsJztcbmltcG9ydCB7XG4gIFBhZ2VCcmVhZGNydW1iUmVzb2x2ZXIsXG4gIFBhZ2VNZXRhUmVzb2x2ZXIsXG4gIFBhZ2VUaXRsZVJlc29sdmVyLFxufSBmcm9tICcuLi8uLi9jbXMvcGFnZSc7XG5pbXBvcnQgeyBUcmFuc2xhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi9pMThuL3RyYW5zbGF0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgUGFnZVR5cGUgfSBmcm9tICcuLi8uLi9tb2RlbC9jbXMubW9kZWwnO1xuaW1wb3J0IHsgUHJvZHVjdFNlYXJjaFNlcnZpY2UgfSBmcm9tICcuLi8uLi9wcm9kdWN0L2ZhY2FkZS9wcm9kdWN0LXNlYXJjaC5zZXJ2aWNlJztcbmltcG9ydCB7IFNlbWFudGljUGF0aFNlcnZpY2UgfSBmcm9tICcuLi8uLi9yb3V0aW5nL2NvbmZpZ3VyYWJsZS1yb3V0ZXMvdXJsLXRyYW5zbGF0aW9uL3NlbWFudGljLXBhdGguc2VydmljZSc7XG5cbi8qKlxuICogUmVzb2x2ZXMgcGFnZSBtZXRhIGRhdGEgZm9yIHRoZSBzZWFyY2ggcmVzdWx0IHBhZ2UsIGluIGNhc2UgaXQncyB1c2VkXG4gKiB0byBxdWVyeSBjb3Vwb25zLiBUaGlzIGlzIGRvbmUgYnkgYWRkaW5nIGEgYGNvdXBvbmNvZGVgIHF1ZXJ5IHBhcmFtZXRlclxuICogdG8gdGhlIHNlYXJjaCBwYWdlIHJvdXRlLlxuICpcbiAqIFRoZSBwYWdlIHJlc29sdmVzIGFuIGFsdGVybmF0aXZlIHBhZ2UgdGl0bGUgYW5kIGJyZWFkY3J1bWIuXG4gKi9cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBDb3Vwb25TZWFyY2hQYWdlUmVzb2x2ZXIgZXh0ZW5kcyBQYWdlTWV0YVJlc29sdmVyXG4gIGltcGxlbWVudHMgUGFnZVRpdGxlUmVzb2x2ZXIsIFBhZ2VCcmVhZGNydW1iUmVzb2x2ZXIge1xuICBwcm90ZWN0ZWQgdG90YWwkOiBPYnNlcnZhYmxlPFxuICAgIG51bWJlclxuICA+ID0gdGhpcy5wcm9kdWN0U2VhcmNoU2VydmljZS5nZXRSZXN1bHRzKCkucGlwZShcbiAgICBmaWx0ZXIoKGRhdGEpID0+ICEhZGF0YT8ucGFnaW5hdGlvbiksXG4gICAgbWFwKChyZXN1bHRzKSA9PiByZXN1bHRzLnBhZ2luYXRpb24udG90YWxSZXN1bHRzKVxuICApO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBwcm9kdWN0U2VhcmNoU2VydmljZTogUHJvZHVjdFNlYXJjaFNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHRyYW5zbGF0aW9uOiBUcmFuc2xhdGlvblNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgIHByb3RlY3RlZCBzZW1hbnRpY1BhdGhTZXJ2aWNlOiBTZW1hbnRpY1BhdGhTZXJ2aWNlXG4gICkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5wYWdlVHlwZSA9IFBhZ2VUeXBlLkNPTlRFTlRfUEFHRTtcbiAgICB0aGlzLnBhZ2VUZW1wbGF0ZSA9ICdTZWFyY2hSZXN1bHRzTGlzdFBhZ2VUZW1wbGF0ZSc7XG4gIH1cblxuICByZXNvbHZlQnJlYWRjcnVtYnMoKTogT2JzZXJ2YWJsZTxCcmVhZGNydW1iTWV0YVtdPiB7XG4gICAgcmV0dXJuIGNvbWJpbmVMYXRlc3QoW1xuICAgICAgdGhpcy50cmFuc2xhdGlvbi50cmFuc2xhdGUoJ2NvbW1vbi5ob21lJyksXG4gICAgICB0aGlzLnRyYW5zbGF0aW9uLnRyYW5zbGF0ZSgnbXlDb3Vwb25zLm15Q291cG9ucycpLFxuICAgICAgdGhpcy5hdXRoU2VydmljZS5pc1VzZXJMb2dnZWRJbigpLFxuICAgIF0pLnBpcGUoXG4gICAgICBtYXAoKFtob21lTGFiZWwsIGNvdXBvbkxhYmVsLCBpc0xvZ2dlZEluXTogW3N0cmluZywgc3RyaW5nLCBib29sZWFuXSkgPT4ge1xuICAgICAgICBjb25zdCBicmVhZGNydW1icyA9IFtdO1xuICAgICAgICBicmVhZGNydW1icy5wdXNoKHsgbGFiZWw6IGhvbWVMYWJlbCwgbGluazogJy8nIH0pO1xuICAgICAgICBpZiAoaXNMb2dnZWRJbikge1xuICAgICAgICAgIGJyZWFkY3J1bWJzLnB1c2goe1xuICAgICAgICAgICAgbGFiZWw6IGNvdXBvbkxhYmVsLFxuICAgICAgICAgICAgbGluazogdGhpcy5zZW1hbnRpY1BhdGhTZXJ2aWNlLnRyYW5zZm9ybSh7XG4gICAgICAgICAgICAgIGN4Um91dGU6ICdjb3Vwb25zJyxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBicmVhZGNydW1icztcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIHJlc29sdmVUaXRsZSgpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xuICAgIHJldHVybiB0aGlzLnRvdGFsJC5waXBlKFxuICAgICAgc3dpdGNoTWFwKCh0b3RhbDogbnVtYmVyKSA9PlxuICAgICAgICB0aGlzLnRyYW5zbGF0aW9uLnRyYW5zbGF0ZSgncGFnZU1ldGFSZXNvbHZlci5zZWFyY2guZmluZFByb2R1Y3RUaXRsZScsIHtcbiAgICAgICAgICBjb3VudDogdG90YWwsXG4gICAgICAgICAgY291cG9uOiB0aGlzLmNvdXBvbkNvZGUsXG4gICAgICAgIH0pXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIGdldFNjb3JlKHBhZ2U6IFBhZ2UpOiBudW1iZXIge1xuICAgIHJldHVybiBzdXBlci5nZXRTY29yZShwYWdlKSArICh0aGlzLmNvdXBvbkNvZGUgPyAxIDogLTEpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGdldCBjb3Vwb25Db2RlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMucm91dGUuc25hcHNob3Q/LnF1ZXJ5UGFyYW1zPy5jb3Vwb25jb2RlO1xuICB9XG59XG4iXX0=