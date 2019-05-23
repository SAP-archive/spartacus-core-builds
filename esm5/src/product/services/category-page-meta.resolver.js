/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { combineLatest, of } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';
import { CmsService } from '../../cms/facade/cms.service';
import { PageMetaResolver } from '../../cms/page/page-meta.resolver';
import { TranslationService } from '../../i18n';
import { PageType } from '../../model/cms.model';
import { RoutingService } from '../../routing/facade/routing.service';
import { ProductSearchService } from '../facade/product-search.service';
import { Injectable } from '@angular/core';
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
                        _this.resolveBreadcrumbs(data),
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
     * @param {?} data
     * @return {?}
     */
    CategoryPageMetaResolver.prototype.resolveBreadcrumbs = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        var e_1, _a;
        /** @type {?} */
        var breadcrumbs = [];
        breadcrumbs.push({ label: 'Home', link: '/' });
        try {
            for (var _b = tslib_1.__values(data.breadcrumbs), _c = _b.next(); !_c.done; _c = _b.next()) {
                var br = _c.value;
                breadcrumbs.push({
                    label: br.facetValueName,
                    link: '/c/' + br.facetValueCode,
                });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0ZWdvcnktcGFnZS1tZXRhLnJlc29sdmVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3Byb2R1Y3Qvc2VydmljZXMvY2F0ZWdvcnktcGFnZS1tZXRhLnJlc29sdmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLGFBQWEsRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDckQsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBRTFELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBRXJFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLFlBQVksQ0FBQztBQUNoRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFakQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7OztBQUUzQztJQUc4QyxvREFBZ0I7SUFFNUQsa0NBQ1ksY0FBOEIsRUFDOUIsb0JBQTBDLEVBQzFDLEdBQWUsRUFDZixXQUErQjtRQUozQyxZQU1FLGlCQUFPLFNBRVI7UUFQVyxvQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsMEJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQUMxQyxTQUFHLEdBQUgsR0FBRyxDQUFZO1FBQ2YsaUJBQVcsR0FBWCxXQUFXLENBQW9CO1FBR3pDLEtBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQzs7SUFDekMsQ0FBQzs7OztJQUVELDBDQUFPOzs7SUFBUDtRQUFBLGlCQXdC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O0NBa0ZDLEFBckVELENBRzhDLGdCQUFnQixHQWtFN0Q7U0FsRVksd0JBQXdCOzs7Ozs7SUFHakMsa0RBQXdDOzs7OztJQUN4Qyx3REFBb0Q7Ozs7O0lBQ3BELHVDQUF5Qjs7Ozs7SUFDekIsK0NBQXlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29tYmluZUxhdGVzdCwgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgbWFwLCBzd2l0Y2hNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBDbXNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vY21zL2ZhY2FkZS9jbXMuc2VydmljZSc7XG5pbXBvcnQgeyBQYWdlLCBQYWdlTWV0YSB9IGZyb20gJy4uLy4uL2Ntcy9tb2RlbC9wYWdlLm1vZGVsJztcbmltcG9ydCB7IFBhZ2VNZXRhUmVzb2x2ZXIgfSBmcm9tICcuLi8uLi9jbXMvcGFnZS9wYWdlLW1ldGEucmVzb2x2ZXInO1xuaW1wb3J0IHsgUGFnZVRpdGxlUmVzb2x2ZXIgfSBmcm9tICcuLi8uLi9jbXMvcGFnZS9wYWdlLnJlc29sdmVycyc7XG5pbXBvcnQgeyBUcmFuc2xhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi9pMThuJztcbmltcG9ydCB7IFBhZ2VUeXBlIH0gZnJvbSAnLi4vLi4vbW9kZWwvY21zLm1vZGVsJztcbmltcG9ydCB7IFByb2R1Y3RTZWFyY2hQYWdlIH0gZnJvbSAnLi4vLi4vbW9kZWwvcHJvZHVjdC1zZWFyY2gubW9kZWwnO1xuaW1wb3J0IHsgUm91dGluZ1NlcnZpY2UgfSBmcm9tICcuLi8uLi9yb3V0aW5nL2ZhY2FkZS9yb3V0aW5nLnNlcnZpY2UnO1xuaW1wb3J0IHsgUHJvZHVjdFNlYXJjaFNlcnZpY2UgfSBmcm9tICcuLi9mYWNhZGUvcHJvZHVjdC1zZWFyY2guc2VydmljZSc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBDYXRlZ29yeVBhZ2VNZXRhUmVzb2x2ZXIgZXh0ZW5kcyBQYWdlTWV0YVJlc29sdmVyXG4gIGltcGxlbWVudHMgUGFnZVRpdGxlUmVzb2x2ZXIge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgcm91dGluZ1NlcnZpY2U6IFJvdXRpbmdTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBwcm9kdWN0U2VhcmNoU2VydmljZTogUHJvZHVjdFNlYXJjaFNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGNtczogQ21zU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgdHJhbnNsYXRpb246IFRyYW5zbGF0aW9uU2VydmljZVxuICApIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMucGFnZVR5cGUgPSBQYWdlVHlwZS5DQVRFR09SWV9QQUdFO1xuICB9XG5cbiAgcmVzb2x2ZSgpOiBPYnNlcnZhYmxlPFBhZ2VNZXRhPiB7XG4gICAgcmV0dXJuIHRoaXMuY21zLmdldEN1cnJlbnRQYWdlKCkucGlwZShcbiAgICAgIGZpbHRlcihCb29sZWFuKSxcbiAgICAgIHN3aXRjaE1hcChwYWdlID0+IHtcbiAgICAgICAgLy8gb25seSB0aGUgZXhpc3RlbmNlIG9mIGEgcGxwIGNvbXBvbmVudCB0ZWxscyB1cyBpZiBwcm9kdWN0c1xuICAgICAgICAvLyBhcmUgcmVuZGVyZWQgb3IgaWYgdGhpcyBpcyBhbiBvcmRpbmFyeSBjb250ZW50IHBhZ2VcbiAgICAgICAgaWYgKHRoaXMuaGFzUHJvZHVjdExpc3RDb21wb25lbnQocGFnZSkpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5wcm9kdWN0U2VhcmNoU2VydmljZS5nZXRSZXN1bHRzKCkucGlwZShcbiAgICAgICAgICAgIGZpbHRlcihkYXRhID0+IGRhdGEuYnJlYWRjcnVtYnMgJiYgZGF0YS5icmVhZGNydW1icy5sZW5ndGggPiAwKSxcbiAgICAgICAgICAgIHN3aXRjaE1hcChkYXRhID0+XG4gICAgICAgICAgICAgIGNvbWJpbmVMYXRlc3QoW1xuICAgICAgICAgICAgICAgIHRoaXMucmVzb2x2ZVRpdGxlKGRhdGEpLFxuICAgICAgICAgICAgICAgIHRoaXMucmVzb2x2ZUJyZWFkY3J1bWJzKGRhdGEpLFxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIG1hcCgoW3RpdGxlLCBicmVhZGNydW1ic10pID0+ICh7IHRpdGxlLCBicmVhZGNydW1icyB9KSlcbiAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBvZih7XG4gICAgICAgICAgICB0aXRsZTogcGFnZS50aXRsZSB8fCBwYWdlLm5hbWUsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIHJlc29sdmVUaXRsZShkYXRhOiBQcm9kdWN0U2VhcmNoUGFnZSk6IE9ic2VydmFibGU8c3RyaW5nPiB7XG4gICAgcmV0dXJuIHRoaXMudHJhbnNsYXRpb24udHJhbnNsYXRlKCdwYWdlTWV0YVJlc29sdmVyLmNhdGVnb3J5LnRpdGxlJywge1xuICAgICAgY291bnQ6IGRhdGEucGFnaW5hdGlvbi50b3RhbFJlc3VsdHMsXG4gICAgICBxdWVyeTogZGF0YS5icmVhZGNydW1ic1swXS5mYWNldFZhbHVlTmFtZSxcbiAgICB9KTtcbiAgfVxuXG4gIHJlc29sdmVCcmVhZGNydW1icyhkYXRhOiBQcm9kdWN0U2VhcmNoUGFnZSk6IE9ic2VydmFibGU8YW55W10+IHtcbiAgICBjb25zdCBicmVhZGNydW1icyA9IFtdO1xuICAgIGJyZWFkY3J1bWJzLnB1c2goeyBsYWJlbDogJ0hvbWUnLCBsaW5rOiAnLycgfSk7XG4gICAgZm9yIChjb25zdCBiciBvZiBkYXRhLmJyZWFkY3J1bWJzKSB7XG4gICAgICBicmVhZGNydW1icy5wdXNoKHtcbiAgICAgICAgbGFiZWw6IGJyLmZhY2V0VmFsdWVOYW1lLFxuICAgICAgICBsaW5rOiAnL2MvJyArIGJyLmZhY2V0VmFsdWVDb2RlLFxuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBvZihicmVhZGNydW1icyk7XG4gIH1cblxuICBwcml2YXRlIGhhc1Byb2R1Y3RMaXN0Q29tcG9uZW50KHBhZ2U6IFBhZ2UpOiBib29sZWFuIHtcbiAgICAvLyBQcm9kdWN0TGlzdENvbXBvbmVudFxuICAgIHJldHVybiAhIU9iamVjdC5rZXlzKHBhZ2Uuc2xvdHMpLmZpbmQoXG4gICAgICBrZXkgPT5cbiAgICAgICAgISFwYWdlLnNsb3RzW2tleV0uY29tcG9uZW50cy5maW5kKFxuICAgICAgICAgIGNvbXAgPT4gY29tcC50eXBlQ29kZSA9PT0gJ0NNU1Byb2R1Y3RMaXN0Q29tcG9uZW50J1xuICAgICAgICApXG4gICAgKTtcbiAgfVxufVxuIl19