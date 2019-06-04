/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { combineLatest, of } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';
import { CmsService } from '../../cms/facade/cms.service';
import { PageMetaResolver } from '../../cms/page/page-meta.resolver';
import { TranslationService } from '../../i18n';
import { PageType } from '../../model/cms.model';
import { RoutingService } from '../../routing/facade/routing.service';
import { ProductSearchService } from '../facade/product-search.service';
import * as i0 from "@angular/core";
import * as i1 from "../../routing/facade/routing.service";
import * as i2 from "../facade/product-search.service";
import * as i3 from "../../cms/facade/cms.service";
import * as i4 from "../../i18n/translation.service";
var CategoryPageMetaResolver = /** @class */ (function (_super) {
    tslib_1.__extends(CategoryPageMetaResolver, _super);
    function CategoryPageMetaResolver(routingService, productSearchService, cms, translation) {
        var _this = _super.call(this) || this;
        _this.routingService = routingService;
        _this.productSearchService = productSearchService;
        _this.cms = cms;
        _this.translation = translation;
        _this.pageType = PageType.CATEGORY_PAGE;
        return _this;
    }
    /**
     * @return {?}
     */
    CategoryPageMetaResolver.prototype.resolve = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return this.cms.getCurrentPage().pipe(filter(Boolean), switchMap(function (page) {
            // only the existence of a plp component tells us if products
            // are rendered or if this is an ordinary content page
            if (_this.hasProductListComponent(page)) {
                return _this.productSearchService.getResults().pipe(filter(function (data) { return data.breadcrumbs && data.breadcrumbs.length > 0; }), switchMap(function (data) {
                    return combineLatest([
                        _this.resolveTitle(data),
                        _this.resolveBreadcrumbLabel().pipe(switchMap(function (label) { return _this.resolveBreadcrumbs(data, label); })),
                    ]);
                }), map(function (_a) {
                    var _b = tslib_1.__read(_a, 2), title = _b[0], breadcrumbs = _b[1];
                    return ({ title: title, breadcrumbs: breadcrumbs });
                }));
            }
            else {
                return of({
                    title: page.title || page.name,
                });
            }
        }));
    };
    /**
     * @param {?} data
     * @return {?}
     */
    CategoryPageMetaResolver.prototype.resolveTitle = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        return this.translation.translate('pageMetaResolver.category.title', {
            count: data.pagination.totalResults,
            query: data.breadcrumbs[0].facetValueName,
        });
    };
    /**
     * @return {?}
     */
    CategoryPageMetaResolver.prototype.resolveBreadcrumbLabel = /**
     * @return {?}
     */
    function () {
        return this.translation.translate('common.home');
    };
    /**
     * @param {?} data
     * @param {?} breadcrumbLabel
     * @return {?}
     */
    CategoryPageMetaResolver.prototype.resolveBreadcrumbs = /**
     * @param {?} data
     * @param {?} breadcrumbLabel
     * @return {?}
     */
    function (data, breadcrumbLabel) {
        var e_1, _a;
        /** @type {?} */
        var breadcrumbs = [];
        breadcrumbs.push({ label: breadcrumbLabel, link: '/' });
        try {
            for (var _b = tslib_1.__values(data.breadcrumbs), _c = _b.next(); !_c.done; _c = _b.next()) {
                var br = _c.value;
                if (br.facetCode === 'category') {
                    breadcrumbs.push({
                        label: br.facetValueName,
                        link: "/c/" + br.facetValueCode,
                    });
                }
                if (br.facetCode === 'brand') {
                    breadcrumbs.push({
                        label: br.facetValueName,
                        link: "/Brands/" + br.facetValueName + "/c/" + br.facetValueCode,
                    });
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return of(breadcrumbs);
    };
    /**
     * @private
     * @param {?} page
     * @return {?}
     */
    CategoryPageMetaResolver.prototype.hasProductListComponent = /**
     * @private
     * @param {?} page
     * @return {?}
     */
    function (page) {
        // ProductListComponent
        return !!Object.keys(page.slots).find(function (key) {
            return !!page.slots[key].components.find(function (comp) { return comp.typeCode === 'CMSProductListComponent'; });
        });
    };
    CategoryPageMetaResolver.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    CategoryPageMetaResolver.ctorParameters = function () { return [
        { type: RoutingService },
        { type: ProductSearchService },
        { type: CmsService },
        { type: TranslationService }
    ]; };
    /** @nocollapse */ CategoryPageMetaResolver.ngInjectableDef = i0.defineInjectable({ factory: function CategoryPageMetaResolver_Factory() { return new CategoryPageMetaResolver(i0.inject(i1.RoutingService), i0.inject(i2.ProductSearchService), i0.inject(i3.CmsService), i0.inject(i4.TranslationService)); }, token: CategoryPageMetaResolver, providedIn: "root" });
    return CategoryPageMetaResolver;
}(PageMetaResolver));
export { CategoryPageMetaResolver };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    CategoryPageMetaResolver.prototype.routingService;
    /**
     * @type {?}
     * @protected
     */
    CategoryPageMetaResolver.prototype.productSearchService;
    /**
     * @type {?}
     * @protected
     */
    CategoryPageMetaResolver.prototype.cms;
    /**
     * @type {?}
     * @protected
     */
    CategoryPageMetaResolver.prototype.translation;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0ZWdvcnktcGFnZS1tZXRhLnJlc29sdmVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3Byb2R1Y3Qvc2VydmljZXMvY2F0ZWdvcnktcGFnZS1tZXRhLnJlc29sdmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsYUFBYSxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNyRCxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFFMUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFFckUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQ2hELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUVqRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDdEUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7Ozs7OztBQUV4RTtJQUc4QyxvREFBZ0I7SUFFNUQsa0NBQ1ksY0FBOEIsRUFDOUIsb0JBQTBDLEVBQzFDLEdBQWUsRUFDZixXQUErQjtRQUozQyxZQU1FLGlCQUFPLFNBRVI7UUFQVyxvQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsMEJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQUMxQyxTQUFHLEdBQUgsR0FBRyxDQUFZO1FBQ2YsaUJBQVcsR0FBWCxXQUFXLENBQW9CO1FBR3pDLEtBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQzs7SUFDekMsQ0FBQzs7OztJQUVELDBDQUFPOzs7SUFBUDtRQUFBLGlCQTBCQztRQXpCQyxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLENBQUMsSUFBSSxDQUNuQyxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQ2YsU0FBUyxDQUFDLFVBQUEsSUFBSTtZQUNaLDZEQUE2RDtZQUM3RCxzREFBc0Q7WUFDdEQsSUFBSSxLQUFJLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ3RDLE9BQU8sS0FBSSxDQUFDLG9CQUFvQixDQUFDLFVBQVUsRUFBRSxDQUFDLElBQUksQ0FDaEQsTUFBTSxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsSUFBSSxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQS9DLENBQStDLENBQUMsRUFDL0QsU0FBUyxDQUFDLFVBQUEsSUFBSTtvQkFDWixPQUFBLGFBQWEsQ0FBQzt3QkFDWixLQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQzt3QkFDdkIsS0FBSSxDQUFDLHNCQUFzQixFQUFFLENBQUMsSUFBSSxDQUNoQyxTQUFTLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxFQUFwQyxDQUFvQyxDQUFDLENBQ3pEO3FCQUNGLENBQUM7Z0JBTEYsQ0FLRSxDQUNILEVBQ0QsR0FBRyxDQUFDLFVBQUMsRUFBb0I7d0JBQXBCLDBCQUFvQixFQUFuQixhQUFLLEVBQUUsbUJBQVc7b0JBQU0sT0FBQSxDQUFDLEVBQUUsS0FBSyxPQUFBLEVBQUUsV0FBVyxhQUFBLEVBQUUsQ0FBQztnQkFBeEIsQ0FBd0IsQ0FBQyxDQUN4RCxDQUFDO2FBQ0g7aUJBQU07Z0JBQ0wsT0FBTyxFQUFFLENBQUM7b0JBQ1IsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLElBQUk7aUJBQy9CLENBQUMsQ0FBQzthQUNKO1FBQ0gsQ0FBQyxDQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7Ozs7O0lBRUQsK0NBQVk7Ozs7SUFBWixVQUFhLElBQXVCO1FBQ2xDLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsaUNBQWlDLEVBQUU7WUFDbkUsS0FBSyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWTtZQUNuQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFjO1NBQzFDLENBQUMsQ0FBQztJQUNMLENBQUM7Ozs7SUFFRCx5REFBc0I7OztJQUF0QjtRQUNFLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDbkQsQ0FBQzs7Ozs7O0lBRUQscURBQWtCOzs7OztJQUFsQixVQUNFLElBQXVCLEVBQ3ZCLGVBQXVCOzs7WUFFakIsV0FBVyxHQUFHLEVBQUU7UUFDdEIsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssRUFBRSxlQUFlLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7O1lBQ3hELEtBQWlCLElBQUEsS0FBQSxpQkFBQSxJQUFJLENBQUMsV0FBVyxDQUFBLGdCQUFBLDRCQUFFO2dCQUE5QixJQUFNLEVBQUUsV0FBQTtnQkFDWCxJQUFJLEVBQUUsQ0FBQyxTQUFTLEtBQUssVUFBVSxFQUFFO29CQUMvQixXQUFXLENBQUMsSUFBSSxDQUFDO3dCQUNmLEtBQUssRUFBRSxFQUFFLENBQUMsY0FBYzt3QkFDeEIsSUFBSSxFQUFFLFFBQU0sRUFBRSxDQUFDLGNBQWdCO3FCQUNoQyxDQUFDLENBQUM7aUJBQ0o7Z0JBQ0QsSUFBSSxFQUFFLENBQUMsU0FBUyxLQUFLLE9BQU8sRUFBRTtvQkFDNUIsV0FBVyxDQUFDLElBQUksQ0FBQzt3QkFDZixLQUFLLEVBQUUsRUFBRSxDQUFDLGNBQWM7d0JBQ3hCLElBQUksRUFBRSxhQUFXLEVBQUUsQ0FBQyxjQUFjLFdBQU0sRUFBRSxDQUFDLGNBQWdCO3FCQUM1RCxDQUFDLENBQUM7aUJBQ0o7YUFDRjs7Ozs7Ozs7O1FBQ0QsT0FBTyxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDekIsQ0FBQzs7Ozs7O0lBRU8sMERBQXVCOzs7OztJQUEvQixVQUFnQyxJQUFVO1FBQ3hDLHVCQUF1QjtRQUN2QixPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQ25DLFVBQUEsR0FBRztZQUNELE9BQUEsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsVUFBVSxDQUFDLElBQUksQ0FDL0IsVUFBQSxJQUFJLElBQUksT0FBQSxJQUFJLENBQUMsUUFBUSxLQUFLLHlCQUF5QixFQUEzQyxDQUEyQyxDQUNwRDtRQUZELENBRUMsQ0FDSixDQUFDO0lBQ0osQ0FBQzs7Z0JBckZGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBTFEsY0FBYztnQkFDZCxvQkFBb0I7Z0JBUnBCLFVBQVU7Z0JBSVYsa0JBQWtCOzs7bUNBUDNCO0NBbUdDLEFBdEZELENBRzhDLGdCQUFnQixHQW1GN0Q7U0FuRlksd0JBQXdCOzs7Ozs7SUFHakMsa0RBQXdDOzs7OztJQUN4Qyx3REFBb0Q7Ozs7O0lBQ3BELHVDQUF5Qjs7Ozs7SUFDekIsK0NBQXlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgY29tYmluZUxhdGVzdCwgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgbWFwLCBzd2l0Y2hNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBDbXNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vY21zL2ZhY2FkZS9jbXMuc2VydmljZSc7XG5pbXBvcnQgeyBQYWdlLCBQYWdlTWV0YSB9IGZyb20gJy4uLy4uL2Ntcy9tb2RlbC9wYWdlLm1vZGVsJztcbmltcG9ydCB7IFBhZ2VNZXRhUmVzb2x2ZXIgfSBmcm9tICcuLi8uLi9jbXMvcGFnZS9wYWdlLW1ldGEucmVzb2x2ZXInO1xuaW1wb3J0IHsgUGFnZVRpdGxlUmVzb2x2ZXIgfSBmcm9tICcuLi8uLi9jbXMvcGFnZS9wYWdlLnJlc29sdmVycyc7XG5pbXBvcnQgeyBUcmFuc2xhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi9pMThuJztcbmltcG9ydCB7IFBhZ2VUeXBlIH0gZnJvbSAnLi4vLi4vbW9kZWwvY21zLm1vZGVsJztcbmltcG9ydCB7IFByb2R1Y3RTZWFyY2hQYWdlIH0gZnJvbSAnLi4vLi4vbW9kZWwvcHJvZHVjdC1zZWFyY2gubW9kZWwnO1xuaW1wb3J0IHsgUm91dGluZ1NlcnZpY2UgfSBmcm9tICcuLi8uLi9yb3V0aW5nL2ZhY2FkZS9yb3V0aW5nLnNlcnZpY2UnO1xuaW1wb3J0IHsgUHJvZHVjdFNlYXJjaFNlcnZpY2UgfSBmcm9tICcuLi9mYWNhZGUvcHJvZHVjdC1zZWFyY2guc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBDYXRlZ29yeVBhZ2VNZXRhUmVzb2x2ZXIgZXh0ZW5kcyBQYWdlTWV0YVJlc29sdmVyXG4gIGltcGxlbWVudHMgUGFnZVRpdGxlUmVzb2x2ZXIge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgcm91dGluZ1NlcnZpY2U6IFJvdXRpbmdTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBwcm9kdWN0U2VhcmNoU2VydmljZTogUHJvZHVjdFNlYXJjaFNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGNtczogQ21zU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgdHJhbnNsYXRpb246IFRyYW5zbGF0aW9uU2VydmljZVxuICApIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMucGFnZVR5cGUgPSBQYWdlVHlwZS5DQVRFR09SWV9QQUdFO1xuICB9XG5cbiAgcmVzb2x2ZSgpOiBPYnNlcnZhYmxlPFBhZ2VNZXRhPiB7XG4gICAgcmV0dXJuIHRoaXMuY21zLmdldEN1cnJlbnRQYWdlKCkucGlwZShcbiAgICAgIGZpbHRlcihCb29sZWFuKSxcbiAgICAgIHN3aXRjaE1hcChwYWdlID0+IHtcbiAgICAgICAgLy8gb25seSB0aGUgZXhpc3RlbmNlIG9mIGEgcGxwIGNvbXBvbmVudCB0ZWxscyB1cyBpZiBwcm9kdWN0c1xuICAgICAgICAvLyBhcmUgcmVuZGVyZWQgb3IgaWYgdGhpcyBpcyBhbiBvcmRpbmFyeSBjb250ZW50IHBhZ2VcbiAgICAgICAgaWYgKHRoaXMuaGFzUHJvZHVjdExpc3RDb21wb25lbnQocGFnZSkpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5wcm9kdWN0U2VhcmNoU2VydmljZS5nZXRSZXN1bHRzKCkucGlwZShcbiAgICAgICAgICAgIGZpbHRlcihkYXRhID0+IGRhdGEuYnJlYWRjcnVtYnMgJiYgZGF0YS5icmVhZGNydW1icy5sZW5ndGggPiAwKSxcbiAgICAgICAgICAgIHN3aXRjaE1hcChkYXRhID0+XG4gICAgICAgICAgICAgIGNvbWJpbmVMYXRlc3QoW1xuICAgICAgICAgICAgICAgIHRoaXMucmVzb2x2ZVRpdGxlKGRhdGEpLFxuICAgICAgICAgICAgICAgIHRoaXMucmVzb2x2ZUJyZWFkY3J1bWJMYWJlbCgpLnBpcGUoXG4gICAgICAgICAgICAgICAgICBzd2l0Y2hNYXAobGFiZWwgPT4gdGhpcy5yZXNvbHZlQnJlYWRjcnVtYnMoZGF0YSwgbGFiZWwpKVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgbWFwKChbdGl0bGUsIGJyZWFkY3J1bWJzXSkgPT4gKHsgdGl0bGUsIGJyZWFkY3J1bWJzIH0pKVxuICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIG9mKHtcbiAgICAgICAgICAgIHRpdGxlOiBwYWdlLnRpdGxlIHx8IHBhZ2UubmFtZSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgcmVzb2x2ZVRpdGxlKGRhdGE6IFByb2R1Y3RTZWFyY2hQYWdlKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gdGhpcy50cmFuc2xhdGlvbi50cmFuc2xhdGUoJ3BhZ2VNZXRhUmVzb2x2ZXIuY2F0ZWdvcnkudGl0bGUnLCB7XG4gICAgICBjb3VudDogZGF0YS5wYWdpbmF0aW9uLnRvdGFsUmVzdWx0cyxcbiAgICAgIHF1ZXJ5OiBkYXRhLmJyZWFkY3J1bWJzWzBdLmZhY2V0VmFsdWVOYW1lLFxuICAgIH0pO1xuICB9XG5cbiAgcmVzb2x2ZUJyZWFkY3J1bWJMYWJlbCgpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xuICAgIHJldHVybiB0aGlzLnRyYW5zbGF0aW9uLnRyYW5zbGF0ZSgnY29tbW9uLmhvbWUnKTtcbiAgfVxuXG4gIHJlc29sdmVCcmVhZGNydW1icyhcbiAgICBkYXRhOiBQcm9kdWN0U2VhcmNoUGFnZSxcbiAgICBicmVhZGNydW1iTGFiZWw6IHN0cmluZ1xuICApOiBPYnNlcnZhYmxlPGFueVtdPiB7XG4gICAgY29uc3QgYnJlYWRjcnVtYnMgPSBbXTtcbiAgICBicmVhZGNydW1icy5wdXNoKHsgbGFiZWw6IGJyZWFkY3J1bWJMYWJlbCwgbGluazogJy8nIH0pO1xuICAgIGZvciAoY29uc3QgYnIgb2YgZGF0YS5icmVhZGNydW1icykge1xuICAgICAgaWYgKGJyLmZhY2V0Q29kZSA9PT0gJ2NhdGVnb3J5Jykge1xuICAgICAgICBicmVhZGNydW1icy5wdXNoKHtcbiAgICAgICAgICBsYWJlbDogYnIuZmFjZXRWYWx1ZU5hbWUsXG4gICAgICAgICAgbGluazogYC9jLyR7YnIuZmFjZXRWYWx1ZUNvZGV9YCxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBpZiAoYnIuZmFjZXRDb2RlID09PSAnYnJhbmQnKSB7XG4gICAgICAgIGJyZWFkY3J1bWJzLnB1c2goe1xuICAgICAgICAgIGxhYmVsOiBici5mYWNldFZhbHVlTmFtZSxcbiAgICAgICAgICBsaW5rOiBgL0JyYW5kcy8ke2JyLmZhY2V0VmFsdWVOYW1lfS9jLyR7YnIuZmFjZXRWYWx1ZUNvZGV9YCxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBvZihicmVhZGNydW1icyk7XG4gIH1cblxuICBwcml2YXRlIGhhc1Byb2R1Y3RMaXN0Q29tcG9uZW50KHBhZ2U6IFBhZ2UpOiBib29sZWFuIHtcbiAgICAvLyBQcm9kdWN0TGlzdENvbXBvbmVudFxuICAgIHJldHVybiAhIU9iamVjdC5rZXlzKHBhZ2Uuc2xvdHMpLmZpbmQoXG4gICAgICBrZXkgPT5cbiAgICAgICAgISFwYWdlLnNsb3RzW2tleV0uY29tcG9uZW50cy5maW5kKFxuICAgICAgICAgIGNvbXAgPT4gY29tcC50eXBlQ29kZSA9PT0gJ0NNU1Byb2R1Y3RMaXN0Q29tcG9uZW50J1xuICAgICAgICApXG4gICAgKTtcbiAgfVxufVxuIl19