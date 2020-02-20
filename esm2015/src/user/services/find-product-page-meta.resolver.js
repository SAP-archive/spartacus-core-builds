import { __decorate } from "tslib";
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
let FindProductPageMetaResolver = class FindProductPageMetaResolver extends PageMetaResolver {
    constructor(routingService, productSearchService, translation, authService) {
        super();
        this.routingService = routingService;
        this.productSearchService = productSearchService;
        this.translation = translation;
        this.authService = authService;
        this.totalAndCode$ = combineLatest([
            this.productSearchService.getResults().pipe(filter(data => !!(data && data.pagination)), map(results => results.pagination.totalResults)),
            this.routingService.getRouterState().pipe(map(state => state.state.queryParams['couponcode']), filter(Boolean)),
        ]);
        this.pageType = PageType.CONTENT_PAGE;
        this.pageTemplate = 'SearchResultsListPageTemplate';
    }
    /**
     * @deprecated since version 1.3
     *
     * The resolve method is no longer preferred and will be removed with release 2.0.
     * The caller `PageMetaService` service is improved to expect all individual resolvers
     * instead, so that the code is easier extensible.
     */
    resolve() {
        return combineLatest([this.resolveTitle(), this.resolveBreadcrumbs()]).pipe(map(([title, breadcrumbs]) => ({
            title,
            breadcrumbs,
        })));
    }
    resolveBreadcrumbs() {
        const breadcrumbs = [{ label: 'Home', link: '/' }];
        this.authService.isUserLoggedIn().subscribe(login => {
            if (login)
                breadcrumbs.push({ label: 'My Coupons', link: '/my-account/coupons' });
        });
        return of(breadcrumbs);
    }
    resolveTitle() {
        return this.totalAndCode$.pipe(switchMap(([total, code]) => this.translation.translate('pageMetaResolver.search.findProductTitle', {
            count: total,
            coupon: code,
        })));
    }
    getScore(page) {
        let score = 0;
        if (this.pageType) {
            score += page.type === this.pageType ? 1 : -1;
        }
        if (this.pageTemplate) {
            score += page.template === this.pageTemplate ? 1 : -1;
        }
        this.routingService
            .getRouterState()
            .pipe(map(state => {
            return state.state.queryParams;
        }), filter(Boolean))
            .subscribe((queryParams) => {
            if (queryParams) {
                score += queryParams['couponcode'] ? 1 : -1;
            }
        })
            .unsubscribe();
        return score;
    }
};
FindProductPageMetaResolver.ctorParameters = () => [
    { type: RoutingService },
    { type: ProductSearchService },
    { type: TranslationService },
    { type: AuthService }
];
FindProductPageMetaResolver.ɵprov = i0.ɵɵdefineInjectable({ factory: function FindProductPageMetaResolver_Factory() { return new FindProductPageMetaResolver(i0.ɵɵinject(i1.RoutingService), i0.ɵɵinject(i2.ProductSearchService), i0.ɵɵinject(i3.TranslationService), i0.ɵɵinject(i4.AuthService)); }, token: FindProductPageMetaResolver, providedIn: "root" });
FindProductPageMetaResolver = __decorate([
    Injectable({
        providedIn: 'root',
    })
], FindProductPageMetaResolver);
export { FindProductPageMetaResolver };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmluZC1wcm9kdWN0LXBhZ2UtbWV0YS5yZXNvbHZlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy91c2VyL3NlcnZpY2VzL2ZpbmQtcHJvZHVjdC1wYWdlLW1ldGEucmVzb2x2ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFjLEVBQUUsRUFBRSxhQUFhLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDckQsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEQsT0FBTyxFQUNMLGdCQUFnQixHQUdqQixNQUFNLGdCQUFnQixDQUFDO0FBRXhCLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDdEUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDbkYsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdDQUFnQyxDQUFDOzs7Ozs7QUFLN0QsSUFBYSwyQkFBMkIsR0FBeEMsTUFBYSwyQkFBNEIsU0FBUSxnQkFBZ0I7SUFhL0QsWUFDWSxjQUE4QixFQUM5QixvQkFBMEMsRUFDMUMsV0FBK0IsRUFDL0IsV0FBd0I7UUFFbEMsS0FBSyxFQUFFLENBQUM7UUFMRSxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQUMxQyxnQkFBVyxHQUFYLFdBQVcsQ0FBb0I7UUFDL0IsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFmcEMsa0JBQWEsR0FBOEIsYUFBYSxDQUFDO1lBQ3ZELElBQUksQ0FBQyxvQkFBb0IsQ0FB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V0FBVyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQzdDO1FBQ0gsQ0FBQyxDQUFDO2FBQ0QsV0FBVyxFQUFFLENBQUM7UUFDakIsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0NBQ0YsQ0FBQTs7WUF2RTZCLGNBQWM7WUFDUixvQkFBb0I7WUFDN0Isa0JBQWtCO1lBQ2xCLFdBQVc7OztBQWpCekIsMkJBQTJCO0lBSHZDLFVBQVUsQ0FBQztRQUNWLFVBQVUsRUFBRSxNQUFNO0tBQ25CLENBQUM7R0FDVywyQkFBMkIsQ0FxRnZDO1NBckZZLDJCQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mLCBjb21iaW5lTGF0ZXN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIG1hcCwgc3dpdGNoTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHtcbiAgUGFnZU1ldGFSZXNvbHZlcixcbiAgUGFnZVRpdGxlUmVzb2x2ZXIsXG4gIFBhZ2VCcmVhZGNydW1iUmVzb2x2ZXIsXG59IGZyb20gJy4uLy4uL2Ntcy9wYWdlJztcbmltcG9ydCB7IFBhZ2VNZXRhLCBQYWdlIH0gZnJvbSAnLi4vLi4vY21zL21vZGVsL3BhZ2UubW9kZWwnO1xuaW1wb3J0IHsgVHJhbnNsYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vaTE4bi90cmFuc2xhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IFBhZ2VUeXBlIH0gZnJvbSAnLi4vLi4vbW9kZWwvY21zLm1vZGVsJztcbmltcG9ydCB7IFJvdXRpbmdTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vcm91dGluZy9mYWNhZGUvcm91dGluZy5zZXJ2aWNlJztcbmltcG9ydCB7IFByb2R1Y3RTZWFyY2hTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vcHJvZHVjdC9mYWNhZGUvcHJvZHVjdC1zZWFyY2guc2VydmljZSc7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4uLy4uL2F1dGgvZmFjYWRlL2F1dGguc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBGaW5kUHJvZHVjdFBhZ2VNZXRhUmVzb2x2ZXIgZXh0ZW5kcyBQYWdlTWV0YVJlc29sdmVyXG4gIGltcGxlbWVudHMgUGFnZVRpdGxlUmVzb2x2ZXIsIFBhZ2VCcmVhZGNydW1iUmVzb2x2ZXIge1xuICB0b3RhbEFuZENvZGUkOiBPYnNlcnZhYmxlPFtudW1iZXIsIGFueV0+ID0gY29tYmluZUxhdGVzdChbXG4gICAgdGhpcy5wcm9kdWN0U2VhcmNoU2VydmljZS5nZXRSZXN1bHRzKCkucGlwZShcbiAgICAgIGZpbHRlcihkYXRhID0+ICEhKGRhdGEgJiYgZGF0YS5wYWdpbmF0aW9uKSksXG4gICAgICBtYXAocmVzdWx0cyA9PiByZXN1bHRzLnBhZ2luYXRpb24udG90YWxSZXN1bHRzKVxuICAgICksXG4gICAgdGhpcy5yb3V0aW5nU2VydmljZS5nZXRSb3V0ZXJTdGF0ZSgpLnBpcGUoXG4gICAgICBtYXAoc3RhdGUgPT4gc3RhdGUuc3RhdGUucXVlcnlQYXJhbXNbJ2NvdXBvbmNvZGUnXSksXG4gICAgICBmaWx0ZXIoQm9vbGVhbilcbiAgICApLFxuICBdKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgcm91dGluZ1NlcnZpY2U6IFJvdXRpbmdTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBwcm9kdWN0U2VhcmNoU2VydmljZTogUHJvZHVjdFNlYXJjaFNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHRyYW5zbGF0aW9uOiBUcmFuc2xhdGlvblNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZVxuICApIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMucGFnZVR5cGUgPSBQYWdlVHlwZS5DT05URU5UX1BBR0U7XG4gICAgdGhpcy5wYWdlVGVtcGxhdGUgPSAnU2VhcmNoUmVzdWx0c0xpc3RQYWdlVGVtcGxhdGUnO1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIHNpbmNlIHZlcnNpb24gMS4zXG4gICAqXG4gICAqIFRoZSByZXNvbHZlIG1ldGhvZCBpcyBubyBsb25nZXIgcHJlZmVycmVkIGFuZCB3aWxsIGJlIHJlbW92ZWQgd2l0aCByZWxlYXNlIDIuMC5cbiAgICogVGhlIGNhbGxlciBgUGFnZU1ldGFTZXJ2aWNlYCBzZXJ2aWNlIGlzIGltcHJvdmVkIHRvIGV4cGVjdCBhbGwgaW5kaXZpZHVhbCByZXNvbHZlcnNcbiAgICogaW5zdGVhZCwgc28gdGhhdCB0aGUgY29kZSBpcyBlYXNpZXIgZXh0ZW5zaWJsZS5cbiAgICovXG4gIHJlc29sdmUoKTogT2JzZXJ2YWJsZTxQYWdlTWV0YT4ge1xuICAgIHJldHVybiBjb21iaW5lTGF0ZXN0KFt0aGlzLnJlc29sdmVUaXRsZSgpLCB0aGlzLnJlc29sdmVCcmVhZGNydW1icygpXSkucGlwZShcbiAgICAgIG1hcCgoW3RpdGxlLCBicmVhZGNydW1ic106IFtzdHJpbmcsIGFueVtdXSkgPT4gKHtcbiAgICAgICAgdGl0bGUsXG4gICAgICAgIGJyZWFkY3J1bWJzLFxuICAgICAgfSkpXG4gICAgKTtcbiAgfVxuXG4gIHJlc29sdmVCcmVhZGNydW1icygpOiBPYnNlcnZhYmxlPGFueVtdPiB7XG4gICAgY29uc3QgYnJlYWRjcnVtYnMgPSBbeyBsYWJlbDogJ0hvbWUnLCBsaW5rOiAnLycgfV07XG4gICAgdGhpcy5hdXRoU2VydmljZS5pc1VzZXJMb2dnZWRJbigpLnN1YnNjcmliZShsb2dpbiA9PiB7XG4gICAgICBpZiAobG9naW4pXG4gICAgICAgIGJyZWFkY3J1bWJzLnB1c2goeyBsYWJlbDogJ015IENvdXBvbnMnLCBsaW5rOiAnL215LWFjY291bnQvY291cG9ucycgfSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gb2YoYnJlYWRjcnVtYnMpO1xuICB9XG5cbiAgcmVzb2x2ZVRpdGxlKCk6IE9ic2VydmFibGU8c3RyaW5nPiB7XG4gICAgcmV0dXJuIHRoaXMudG90YWxBbmRDb2RlJC5waXBlKFxuICAgICAgc3dpdGNoTWFwKChbdG90YWwsIGNvZGVdOiBbbnVtYmVyLCBzdHJpbmddKSA9PlxuICAgICAgICB0aGlzLnRyYW5zbGF0aW9uLnRyYW5zbGF0ZSgncGFnZU1ldGFSZXNvbHZlci5zZWFyY2guZmluZFByb2R1Y3RUaXRsZScsIHtcbiAgICAgICAgICBjb3VudDogdG90YWwsXG4gICAgICAgICAgY291cG9uOiBjb2RlLFxuICAgICAgICB9KVxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICBnZXRTY29yZShwYWdlOiBQYWdlKTogbnVtYmVyIHtcbiAgICBsZXQgc2NvcmUgPSAwO1xuICAgIGlmICh0aGlzLnBhZ2VUeXBlKSB7XG4gICAgICBzY29yZSArPSBwYWdlLnR5cGUgPT09IHRoaXMucGFnZVR5cGUgPyAxIDogLTE7XG4gICAgfVxuICAgIGlmICh0aGlzLnBhZ2VUZW1wbGF0ZSkge1xuICAgICAgc2NvcmUgKz0gcGFnZS50ZW1wbGF0ZSA9PT0gdGhpcy5wYWdlVGVtcGxhdGUgPyAxIDogLTE7XG4gICAgfVxuICAgIHRoaXMucm91dGluZ1NlcnZpY2VcbiAgICAgIC5nZXRSb3V0ZXJTdGF0ZSgpXG4gICAgICAucGlwZShcbiAgICAgICAgbWFwKHN0YXRlID0+IHtcbiAgICAgICAgICByZXR1cm4gc3RhdGUuc3RhdGUucXVlcnlQYXJhbXM7XG4gICAgICAgIH0pLFxuICAgICAgICBmaWx0ZXIoQm9vbGVhbilcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoKHF1ZXJ5UGFyYW1zOiBhbnkpID0+IHtcbiAgICAgICAgaWYgKHF1ZXJ5UGFyYW1zKSB7XG4gICAgICAgICAgc2NvcmUgKz0gcXVlcnlQYXJhbXNbJ2NvdXBvbmNvZGUnXSA/IDEgOiAtMTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC51bnN1YnNjcmliZSgpO1xuICAgIHJldHVybiBzY29yZTtcbiAgfVxufVxuIl19