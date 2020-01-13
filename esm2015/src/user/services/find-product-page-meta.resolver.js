/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
export class FindProductPageMetaResolver extends PageMetaResolver {
    /**
     * @param {?} routingService
     * @param {?} productSearchService
     * @param {?} translation
     * @param {?} authService
     */
    constructor(routingService, productSearchService, translation, authService) {
        super();
        this.routingService = routingService;
        this.productSearchService = productSearchService;
        this.translation = translation;
        this.authService = authService;
        this.totalAndCode$ = combineLatest([
            this.productSearchService.getResults().pipe(filter((/**
             * @param {?} data
             * @return {?}
             */
            data => !!(data && data.pagination))), map((/**
             * @param {?} results
             * @return {?}
             */
            results => results.pagination.totalResults))),
            this.routingService.getRouterState().pipe(map((/**
             * @param {?} state
             * @return {?}
             */
            state => state.state.queryParams['couponcode'])), filter(Boolean)),
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
     * @return {?}
     */
    resolve() {
        return combineLatest([this.resolveTitle(), this.resolveBreadcrumbs()]).pipe(map((/**
         * @param {?} __0
         * @return {?}
         */
        ([title, breadcrumbs]) => ({
            title,
            breadcrumbs,
        }))));
    }
    /**
     * @return {?}
     */
    resolveBreadcrumbs() {
        /** @type {?} */
        const breadcrumbs = [{ label: 'Home', link: '/' }];
        this.authService.isUserLoggedIn().subscribe((/**
         * @param {?} login
         * @return {?}
         */
        login => {
            if (login)
                breadcrumbs.push({ label: 'My Coupons', link: '/my-account/coupons' });
        }));
        return of(breadcrumbs);
    }
    /**
     * @return {?}
     */
    resolveTitle() {
        return this.totalAndCode$.pipe(switchMap((/**
         * @param {?} __0
         * @return {?}
         */
        ([total, code]) => this.translation.translate('pageMetaResolver.search.findProductTitle', {
            count: total,
            coupon: code,
        }))));
    }
    /**
     * @param {?} page
     * @return {?}
     */
    getScore(page) {
        /** @type {?} */
        let score = 0;
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
        state => {
            return state.state.queryParams;
        })), filter(Boolean))
            .subscribe((/**
         * @param {?} queryParams
         * @return {?}
         */
        (queryParams) => {
            if (queryParams) {
                score += queryParams['couponcode'] ? 1 : -1;
            }
        }))
            .unsubscribe();
        return score;
    }
}
FindProductPageMetaResolver.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
FindProductPageMetaResolver.ctorParameters = () => [
    { type: RoutingService },
    { type: ProductSearchService },
    { type: TranslationService },
    { type: AuthService }
];
/** @nocollapse */ FindProductPageMetaResolver.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function FindProductPageMetaResolver_Factory() { return new FindProductPageMetaResolver(i0.ɵɵinject(i1.RoutingService), i0.ɵɵinject(i2.ProductSearchService), i0.ɵɵinject(i3.TranslationService), i0.ɵɵinject(i4.AuthService)); }, token: FindProductPageMetaResolver, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmluZC1wcm9kdWN0LXBhZ2UtbWV0YS5yZXNvbHZlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy91c2VyL3NlcnZpY2VzL2ZpbmQtcHJvZHVjdC1wYWdlLW1ldGEucmVzb2x2ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFjLEVBQUUsRUFBRSxhQUFhLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDckQsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEQsT0FBTyxFQUNMLGdCQUFnQixHQUdqQixNQUFNLGdCQUFnQixDQUFDO0FBRXhCLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDdEUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDbkYsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdDQUFnQyxDQUFDOzs7Ozs7QUFLN0QsTUFBTSxPQUFPLDJCQUE0QixTQUFRLGdCQUFnQjs7Ozs7OztJQWEvRCxZQUNZLGNBQThCLEVBQzlCLG9CQUEwQyxFQUMxQyxXQUErQixFQUMvQixXQUF3QjtRQUVsQyxLQUFLLEVBQUUsQ0FBQztRQUxFLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5Qix5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBQzFDLGdCQUFXLEdBQVgsV0FBVyxDQUFvQjtRQUMvQixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQWZwQyxrQkFBYSxHQUE4QixhQUFhLENBQUM7WUFDdkQsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFVB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QUksV0FBVyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQzdDO1FBQ0gsQ0FBQyxFQUFDO2FBQ0QsV0FBVyxFQUFFLENBQUM7UUFDakIsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDOzs7WUF2RkYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7O1lBTlEsY0FBYztZQUNkLG9CQUFvQjtZQUhwQixrQkFBa0I7WUFJbEIsV0FBVzs7Ozs7SUFPbEIsb0RBU0c7Ozs7O0lBR0QscURBQXdDOzs7OztJQUN4QywyREFBb0Q7Ozs7O0lBQ3BELGtEQUF5Qzs7Ozs7SUFDekMsa0RBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YsIGNvbWJpbmVMYXRlc3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgbWFwLCBzd2l0Y2hNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQge1xuICBQYWdlTWV0YVJlc29sdmVyLFxuICBQYWdlVGl0bGVSZXNvbHZlcixcbiAgUGFnZUJyZWFkY3J1bWJSZXNvbHZlcixcbn0gZnJvbSAnLi4vLi4vY21zL3BhZ2UnO1xuaW1wb3J0IHsgUGFnZU1ldGEsIFBhZ2UgfSBmcm9tICcuLi8uLi9jbXMvbW9kZWwvcGFnZS5tb2RlbCc7XG5pbXBvcnQgeyBUcmFuc2xhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi9pMThuL3RyYW5zbGF0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgUGFnZVR5cGUgfSBmcm9tICcuLi8uLi9tb2RlbC9jbXMubW9kZWwnO1xuaW1wb3J0IHsgUm91dGluZ1NlcnZpY2UgfSBmcm9tICcuLi8uLi9yb3V0aW5nL2ZhY2FkZS9yb3V0aW5nLnNlcnZpY2UnO1xuaW1wb3J0IHsgUHJvZHVjdFNlYXJjaFNlcnZpY2UgfSBmcm9tICcuLi8uLi9wcm9kdWN0L2ZhY2FkZS9wcm9kdWN0LXNlYXJjaC5zZXJ2aWNlJztcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vYXV0aC9mYWNhZGUvYXV0aC5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIEZpbmRQcm9kdWN0UGFnZU1ldGFSZXNvbHZlciBleHRlbmRzIFBhZ2VNZXRhUmVzb2x2ZXJcbiAgaW1wbGVtZW50cyBQYWdlVGl0bGVSZXNvbHZlciwgUGFnZUJyZWFkY3J1bWJSZXNvbHZlciB7XG4gIHRvdGFsQW5kQ29kZSQ6IE9ic2VydmFibGU8W251bWJlciwgYW55XT4gPSBjb21iaW5lTGF0ZXN0KFtcbiAgICB0aGlzLnByb2R1Y3RTZWFyY2hTZXJ2aWNlLmdldFJlc3VsdHMoKS5waXBlKFxuICAgICAgZmlsdGVyKGRhdGEgPT4gISEoZGF0YSAmJiBkYXRhLnBhZ2luYXRpb24pKSxcbiAgICAgIG1hcChyZXN1bHRzID0+IHJlc3VsdHMucGFnaW5hdGlvbi50b3RhbFJlc3VsdHMpXG4gICAgKSxcbiAgICB0aGlzLnJvdXRpbmdTZXJ2aWNlLmdldFJvdXRlclN0YXRlKCkucGlwZShcbiAgICAgIG1hcChzdGF0ZSA9PiBzdGF0ZS5zdGF0ZS5xdWVyeVBhcmFtc1snY291cG9uY29kZSddKSxcbiAgICAgIGZpbHRlcihCb29sZWFuKVxuICAgICksXG4gIF0pO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCByb3V0aW5nU2VydmljZTogUm91dGluZ1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHByb2R1Y3RTZWFyY2hTZXJ2aWNlOiBQcm9kdWN0U2VhcmNoU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgdHJhbnNsYXRpb246IFRyYW5zbGF0aW9uU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlXG4gICkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5wYWdlVHlwZSA9IFBhZ2VUeXBlLkNPTlRFTlRfUEFHRTtcbiAgICB0aGlzLnBhZ2VUZW1wbGF0ZSA9ICdTZWFyY2hSZXN1bHRzTGlzdFBhZ2VUZW1wbGF0ZSc7XG4gIH1cblxuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgc2luY2UgdmVyc2lvbiAxLjNcbiAgICpcbiAgICogVGhlIHJlc29sdmUgbWV0aG9kIGlzIG5vIGxvbmdlciBwcmVmZXJyZWQgYW5kIHdpbGwgYmUgcmVtb3ZlZCB3aXRoIHJlbGVhc2UgMi4wLlxuICAgKiBUaGUgY2FsbGVyIGBQYWdlTWV0YVNlcnZpY2VgIHNlcnZpY2UgaXMgaW1wcm92ZWQgdG8gZXhwZWN0IGFsbCBpbmRpdmlkdWFsIHJlc29sdmVyc1xuICAgKiBpbnN0ZWFkLCBzbyB0aGF0IHRoZSBjb2RlIGlzIGVhc2llciBleHRlbnNpYmxlLlxuICAgKi9cbiAgcmVzb2x2ZSgpOiBPYnNlcnZhYmxlPFBhZ2VNZXRhPiB7XG4gICAgcmV0dXJuIGNvbWJpbmVMYXRlc3QoW3RoaXMucmVzb2x2ZVRpdGxlKCksIHRoaXMucmVzb2x2ZUJyZWFkY3J1bWJzKCldKS5waXBlKFxuICAgICAgbWFwKChbdGl0bGUsIGJyZWFkY3J1bWJzXTogW3N0cmluZywgYW55W11dKSA9PiAoe1xuICAgICAgICB0aXRsZSxcbiAgICAgICAgYnJlYWRjcnVtYnMsXG4gICAgICB9KSlcbiAgICApO1xuICB9XG5cbiAgcmVzb2x2ZUJyZWFkY3J1bWJzKCk6IE9ic2VydmFibGU8YW55W10+IHtcbiAgICBjb25zdCBicmVhZGNydW1icyA9IFt7IGxhYmVsOiAnSG9tZScsIGxpbms6ICcvJyB9XTtcbiAgICB0aGlzLmF1dGhTZXJ2aWNlLmlzVXNlckxvZ2dlZEluKCkuc3Vic2NyaWJlKGxvZ2luID0+IHtcbiAgICAgIGlmIChsb2dpbilcbiAgICAgICAgYnJlYWRjcnVtYnMucHVzaCh7IGxhYmVsOiAnTXkgQ291cG9ucycsIGxpbms6ICcvbXktYWNjb3VudC9jb3Vwb25zJyB9KTtcbiAgICB9KTtcblxuICAgIHJldHVybiBvZihicmVhZGNydW1icyk7XG4gIH1cblxuICByZXNvbHZlVGl0bGUoKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gdGhpcy50b3RhbEFuZENvZGUkLnBpcGUoXG4gICAgICBzd2l0Y2hNYXAoKFt0b3RhbCwgY29kZV06IFtudW1iZXIsIHN0cmluZ10pID0+XG4gICAgICAgIHRoaXMudHJhbnNsYXRpb24udHJhbnNsYXRlKCdwYWdlTWV0YVJlc29sdmVyLnNlYXJjaC5maW5kUHJvZHVjdFRpdGxlJywge1xuICAgICAgICAgIGNvdW50OiB0b3RhbCxcbiAgICAgICAgICBjb3Vwb246IGNvZGUsXG4gICAgICAgIH0pXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIGdldFNjb3JlKHBhZ2U6IFBhZ2UpOiBudW1iZXIge1xuICAgIGxldCBzY29yZSA9IDA7XG4gICAgaWYgKHRoaXMucGFnZVR5cGUpIHtcbiAgICAgIHNjb3JlICs9IHBhZ2UudHlwZSA9PT0gdGhpcy5wYWdlVHlwZSA/IDEgOiAtMTtcbiAgICB9XG4gICAgaWYgKHRoaXMucGFnZVRlbXBsYXRlKSB7XG4gICAgICBzY29yZSArPSBwYWdlLnRlbXBsYXRlID09PSB0aGlzLnBhZ2VUZW1wbGF0ZSA/IDEgOiAtMTtcbiAgICB9XG4gICAgdGhpcy5yb3V0aW5nU2VydmljZVxuICAgICAgLmdldFJvdXRlclN0YXRlKClcbiAgICAgIC5waXBlKFxuICAgICAgICBtYXAoc3RhdGUgPT4ge1xuICAgICAgICAgIHJldHVybiBzdGF0ZS5zdGF0ZS5xdWVyeVBhcmFtcztcbiAgICAgICAgfSksXG4gICAgICAgIGZpbHRlcihCb29sZWFuKVxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZSgocXVlcnlQYXJhbXM6IGFueSkgPT4ge1xuICAgICAgICBpZiAocXVlcnlQYXJhbXMpIHtcbiAgICAgICAgICBzY29yZSArPSBxdWVyeVBhcmFtc1snY291cG9uY29kZSddID8gMSA6IC0xO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLnVuc3Vic2NyaWJlKCk7XG4gICAgcmV0dXJuIHNjb3JlO1xuICB9XG59XG4iXX0=