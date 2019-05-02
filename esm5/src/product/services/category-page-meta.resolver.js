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
import { PageType } from '../../occ/occ-models/occ.models';
import { RoutingService } from '../../routing/facade/routing.service';
import { ProductSearchService } from '../facade/product-search.service';
import * as i0 from "@angular/core";
import * as i1 from "../../routing/facade/routing.service";
import * as i2 from "../facade/product-search.service";
import * as i3 from "../../cms/facade/cms.service";
var CategoryPageMetaResolver = /** @class */ (function (_super) {
    tslib_1.__extends(CategoryPageMetaResolver, _super);
    function CategoryPageMetaResolver(routingService, productSearchService, cms) {
        var _this = _super.call(this) || this;
        _this.routingService = routingService;
        _this.productSearchService = productSearchService;
        _this.cms = cms;
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
                return _this.productSearchService.getSearchResults().pipe(filter(function (data) { return data.breadcrumbs && data.breadcrumbs.length > 0; }), switchMap(function (data) {
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
        return of(data.pagination.totalResults + " results for " + data.breadcrumbs[0].facetValueName);
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
        { type: CmsService }
    ]; };
    /** @nocollapse */ CategoryPageMetaResolver.ngInjectableDef = i0.defineInjectable({ factory: function CategoryPageMetaResolver_Factory() { return new CategoryPageMetaResolver(i0.inject(i1.RoutingService), i0.inject(i2.ProductSearchService), i0.inject(i3.CmsService)); }, token: CategoryPageMetaResolver, providedIn: "root" });
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0ZWdvcnktcGFnZS1tZXRhLnJlc29sdmVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3Byb2R1Y3Qvc2VydmljZXMvY2F0ZWdvcnktcGFnZS1tZXRhLnJlc29sdmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsYUFBYSxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNyRCxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFFMUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFFckUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQzNELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUN0RSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQzs7Ozs7QUFHeEU7SUFHOEMsb0RBQWdCO0lBRTVELGtDQUNZLGNBQThCLEVBQzlCLG9CQUEwQyxFQUMxQyxHQUFlO1FBSDNCLFlBS0UsaUJBQU8sU0FFUjtRQU5XLG9CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QiwwQkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBQzFDLFNBQUcsR0FBSCxHQUFHLENBQVk7UUFHekIsS0FBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDOztJQUN6QyxDQUFDOzs7O0lBRUQsMENBQU87OztJQUFQO1FBQUEsaUJBd0JDO1FBdkJDLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxJQUFJLENBQ25DLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFD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Y29yZSc7XG5pbXBvcnQgeyBjb21iaW5lTGF0ZXN0LCBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCBtYXAsIHN3aXRjaE1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IENtc1NlcnZpY2UgfSBmcm9tICcuLi8uLi9jbXMvZmFjYWRlL2Ntcy5zZXJ2aWNlJztcbmltcG9ydCB7IFBhZ2UsIFBhZ2VNZXRhIH0gZnJvbSAnLi4vLi4vY21zL21vZGVsL3BhZ2UubW9kZWwnO1xuaW1wb3J0IHsgUGFnZU1ldGFSZXNvbHZlciB9IGZyb20gJy4uLy4uL2Ntcy9wYWdlL3BhZ2UtbWV0YS5yZXNvbHZlcic7XG5pbXBvcnQgeyBQYWdlVGl0bGVSZXNvbHZlciB9IGZyb20gJy4uLy4uL2Ntcy9wYWdlL3BhZ2UucmVzb2x2ZXJzJztcbmltcG9ydCB7IFBhZ2VUeXBlIH0gZnJvbSAnLi4vLi4vb2NjL29jYy1tb2RlbHMvb2NjLm1vZGVscyc7XG5pbXBvcnQgeyBSb3V0aW5nU2VydmljZSB9IGZyb20gJy4uLy4uL3JvdXRpbmcvZmFjYWRlL3JvdXRpbmcuc2VydmljZSc7XG5pbXBvcnQgeyBQcm9kdWN0U2VhcmNoU2VydmljZSB9IGZyb20gJy4uL2ZhY2FkZS9wcm9kdWN0LXNlYXJjaC5zZXJ2aWNlJztcbmltcG9ydCB7IFVJUHJvZHVjdFNlYXJjaFBhZ2UgfSBmcm9tICcuLi9tb2RlbC9wcm9kdWN0LXNlYXJjaC1wYWdlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIENhdGVnb3J5UGFnZU1ldGFSZXNvbHZlciBleHRlbmRzIFBhZ2VNZXRhUmVzb2x2ZXJcbiAgaW1wbGVtZW50cyBQYWdlVGl0bGVSZXNvbHZlciB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCByb3V0aW5nU2VydmljZTogUm91dGluZ1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHByb2R1Y3RTZWFyY2hTZXJ2aWNlOiBQcm9kdWN0U2VhcmNoU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgY21zOiBDbXNTZXJ2aWNlXG4gICkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5wYWdlVHlwZSA9IFBhZ2VUeXBlLkNBVEVHT1JZX1BBR0U7XG4gIH1cblxuICByZXNvbHZlKCk6IE9ic2VydmFibGU8UGFnZU1ldGE+IHtcbiAgICByZXR1cm4gdGhpcy5jbXMuZ2V0Q3VycmVudFBhZ2UoKS5waXBlKFxuICAgICAgZmlsdGVyKEJvb2xlYW4pLFxuICAgICAgc3dpdGNoTWFwKHBhZ2UgPT4ge1xuICAgICAgICAvLyBvbmx5IHRoZSBleGlzdGVuY2Ugb2YgYSBwbHAgY29tcG9uZW50IHRlbGxzIHVzIGlmIHByb2R1Y3RzXG4gICAgICAgIC8vIGFyZSByZW5kZXJlZCBvciBpZiB0aGlzIGlzIGFuIG9yZGluYXJ5IGNvbnRlbnQgcGFnZVxuICAgICAgICBpZiAodGhpcy5oYXNQcm9kdWN0TGlzdENvbXBvbmVudChwYWdlKSkge1xuICAgICAgICAgIHJldHVybiB0aGlzLnByb2R1Y3RTZWFyY2hTZXJ2aWNlLmdldFNlYXJjaFJlc3VsdHMoKS5waXBlKFxuICAgICAgICAgICAgZmlsdGVyKGRhdGEgPT4gZGF0YS5icmVhZGNydW1icyAmJiBkYXRhLmJyZWFkY3J1bWJzLmxlbmd0aCA+IDApLFxuICAgICAgICAgICAgc3dpdGNoTWFwKGRhdGEgPT5cbiAgICAgICAgICAgICAgY29tYmluZUxhdGVzdChbXG4gICAgICAgICAgICAgICAgdGhpcy5yZXNvbHZlVGl0bGUoZGF0YSksXG4gICAgICAgICAgICAgICAgdGhpcy5yZXNvbHZlQnJlYWRjcnVtYnMoZGF0YSksXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgbWFwKChbdGl0bGUsIGJyZWFkY3J1bWJzXSkgPT4gKHsgdGl0bGUsIGJyZWFkY3J1bWJzIH0pKVxuICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIG9mKHtcbiAgICAgICAgICAgIHRpdGxlOiBwYWdlLnRpdGxlIHx8IHBhZ2UubmFtZSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgcmVzb2x2ZVRpdGxlKGRhdGE6IFVJUHJvZHVjdFNlYXJjaFBhZ2UpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xuICAgIHJldHVybiBvZihcbiAgICAgIGAke2RhdGEucGFnaW5hdGlvbi50b3RhbFJlc3VsdHN9IHJlc3VsdHMgZm9yICR7XG4gICAgICAgIGRhdGEuYnJlYWRjcnVtYnNbMF0uZmFjZXRWYWx1ZU5hbWVcbiAgICAgIH1gXG4gICAgKTtcbiAgfVxuXG4gIHJlc29sdmVCcmVhZGNydW1icyhkYXRhOiBVSVByb2R1Y3RTZWFyY2hQYWdlKTogT2JzZXJ2YWJsZTxhbnlbXT4ge1xuICAgIGNvbnN0IGJyZWFkY3J1bWJzID0gW107XG4gICAgYnJlYWRjcnVtYnMucHVzaCh7IGxhYmVsOiAnSG9tZScsIGxpbms6ICcvJyB9KTtcbiAgICBmb3IgKGNvbnN0IGJyIG9mIGRhdGEuYnJlYWRjcnVtYnMpIHtcbiAgICAgIGJyZWFkY3J1bWJzLnB1c2goe1xuICAgICAgICBsYWJlbDogYnIuZmFjZXRWYWx1ZU5hbWUsXG4gICAgICAgIGxpbms6ICcvYy8nICsgYnIuZmFjZXRWYWx1ZUNvZGUsXG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIG9mKGJyZWFkY3J1bWJzKTtcbiAgfVxuXG4gIHByaXZhdGUgaGFzUHJvZHVjdExpc3RDb21wb25lbnQocGFnZTogUGFnZSk6IGJvb2xlYW4ge1xuICAgIC8vIFByb2R1Y3RMaXN0Q29tcG9uZW50XG4gICAgcmV0dXJuICEhT2JqZWN0LmtleXMocGFnZS5zbG90cykuZmluZChcbiAgICAgIGtleSA9PlxuICAgICAgICAhIXBhZ2Uuc2xvdHNba2V5XS5jb21wb25lbnRzLmZpbmQoXG4gICAgICAgICAgY29tcCA9PiBjb21wLnR5cGVDb2RlID09PSAnQ01TUHJvZHVjdExpc3RDb21wb25lbnQnXG4gICAgICAgIClcbiAgICApO1xuICB9XG59XG4iXX0=