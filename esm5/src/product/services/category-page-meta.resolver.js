/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { combineLatest, of } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';
import { CmsService } from '../../cms/facade/cms.service';
import { PageMetaResolver } from '../../cms/page/page-meta.resolver';
import { TranslationService } from '../../i18n/translation.service';
import { PageType } from '../../model/cms.model';
import { RoutingService } from '../../routing/facade/routing.service';
import { ProductSearchService } from '../facade/product-search.service';
import * as i0 from "@angular/core";
import * as i1 from "../../routing/facade/routing.service";
import * as i2 from "../facade/product-search.service";
import * as i3 from "../../cms/facade/cms.service";
import * as i4 from "../../i18n/translation.service";
/**
 * Resolves the page data for the Product Listing Page
 * based on the `PageType.CATEGORY_PAGE`.
 *
 * The page title, and breadcrumbs are resolved in this implementation only.
 */
var CategoryPageMetaResolver = /** @class */ (function (_super) {
    tslib_1.__extends(CategoryPageMetaResolver, _super);
    function CategoryPageMetaResolver(routingService, productSearchService, cms, translation) {
        var _this = _super.call(this) || this;
        _this.routingService = routingService;
        _this.productSearchService = productSearchService;
        _this.cms = cms;
        _this.translation = translation;
        // reusable observable for search page data
        _this.searchPage$ = _this.cms.getCurrentPage().pipe(filter(Boolean), switchMap((/**
         * @param {?} page
         * @return {?}
         */
        function (page) {
            // only the existence of a plp component tells us if products
            // are rendered or if this is an ordinary content page
            return _this.hasProductListComponent(page)
                ? _this.productSearchService.getResults().pipe(filter(Boolean))
                : of(page);
        })));
        _this.pageType = PageType.CATEGORY_PAGE;
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
    CategoryPageMetaResolver.prototype.resolve = /**
     * @deprecated since version 1.3
     *
     * The resolve method is no longer preferred and will be removed with release 2.0.
     * The caller `PageMetaService` service is improved to expect all individual resolvers
     * instead, so that the code is easier extensible.
     * @return {?}
     */
    function () {
        var _this = this;
        return this.cms.getCurrentPage().pipe(filter(Boolean), switchMap((/**
         * @param {?} page
         * @return {?}
         */
        function (page) {
            // only the existence of a plp component tells us if products
            // are rendered or if this is an ordinary content page
            if (_this.hasProductListComponent(page)) {
                return _this.productSearchService.getResults().pipe(filter((/**
                 * @param {?} data
                 * @return {?}
                 */
                function (data) { return data.breadcrumbs && data.breadcrumbs.length > 0; })), switchMap((/**
                 * @param {?} data
                 * @return {?}
                 */
                function (data) {
                    return combineLatest([
                        _this.resolveTitle(data),
                        _this.resolveBreadcrumbLabel().pipe(switchMap((/**
                         * @param {?} label
                         * @return {?}
                         */
                        function (label) { return _this.resolveBreadcrumbs(data, label); }))),
                    ]);
                })), map((/**
                 * @param {?} __0
                 * @return {?}
                 */
                function (_a) {
                    var _b = tslib_1.__read(_a, 2), title = _b[0], breadcrumbs = _b[1];
                    return ({ title: title, breadcrumbs: breadcrumbs });
                })));
            }
            else {
                return of({
                    title: page.title || page.name,
                });
            }
        })));
    };
    /**
     * @param {?=} searchPage
     * @return {?}
     */
    CategoryPageMetaResolver.prototype.resolveTitle = /**
     * @param {?=} searchPage
     * @return {?}
     */
    function (searchPage) {
        var _this = this;
        /** @type {?} */
        var searchPage$ = searchPage ? of(searchPage) : this.searchPage$;
        return searchPage$.pipe(filter((/**
         * @param {?} page
         * @return {?}
         */
        function (page) { return !!page.pagination; })), switchMap((/**
         * @param {?} p
         * @return {?}
         */
        function (p) {
            return _this.translation.translate('pageMetaResolver.category.title', {
                count: ((/** @type {?} */ (p))).pagination.totalResults,
                query: ((/** @type {?} */ (p))).breadcrumbs[0].facetValueName,
            });
        })));
    };
    /**
     * @deprecated since version 1.3
     * This method will removed with with 2.0
     */
    /**
     * @deprecated since version 1.3
     * This method will removed with with 2.0
     * @return {?}
     */
    CategoryPageMetaResolver.prototype.resolveBreadcrumbLabel = /**
     * @deprecated since version 1.3
     * This method will removed with with 2.0
     * @return {?}
     */
    function () {
        return this.translation.translate('common.home');
    };
    /**
     * @param {?=} searchPage
     * @param {?=} breadcrumbLabel
     * @return {?}
     */
    CategoryPageMetaResolver.prototype.resolveBreadcrumbs = /**
     * @param {?=} searchPage
     * @param {?=} breadcrumbLabel
     * @return {?}
     */
    function (searchPage, breadcrumbLabel) {
        var _this = this;
        /** @type {?} */
        var sources = searchPage && breadcrumbLabel
            ? [of(searchPage), of(breadcrumbLabel)]
            : [this.searchPage$.pipe(), this.translation.translate('common.home')];
        return combineLatest(sources).pipe(map((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = tslib_1.__read(_a, 2), p = _b[0], label = _b[1];
            return p.breadcrumbs
                ? _this.resolveBreadcrumbData((/** @type {?} */ (p)), label)
                : null;
        })));
    };
    /**
     * @private
     * @param {?} page
     * @param {?} label
     * @return {?}
     */
    CategoryPageMetaResolver.prototype.resolveBreadcrumbData = /**
     * @private
     * @param {?} page
     * @param {?} label
     * @return {?}
     */
    function (page, label) {
        var e_1, _a;
        /** @type {?} */
        var breadcrumbs = [];
        breadcrumbs.push({ label: label, link: '/' });
        try {
            for (var _b = tslib_1.__values(page.breadcrumbs), _c = _b.next(); !_c.done; _c = _b.next()) {
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
        return breadcrumbs;
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
        return !!Object.keys(page.slots).find((/**
         * @param {?} key
         * @return {?}
         */
        function (key) {
            return !!page.slots[key].components.find((/**
             * @param {?} comp
             * @return {?}
             */
            function (comp) {
                return comp.typeCode === 'CMSProductListComponent' ||
                    comp.typeCode === 'ProductGridComponent';
            }));
        }));
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
    /** @nocollapse */ CategoryPageMetaResolver.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function CategoryPageMetaResolver_Factory() { return new CategoryPageMetaResolver(i0.ɵɵinject(i1.RoutingService), i0.ɵɵinject(i2.ProductSearchService), i0.ɵɵinject(i3.CmsService), i0.ɵɵinject(i4.TranslationService)); }, token: CategoryPageMetaResolver, providedIn: "root" });
    return CategoryPageMetaResolver;
}(PageMetaResolver));
export { CategoryPageMetaResolver };
if (false) {
    /**
     * @type {?}
     * @private
     */
    CategoryPageMetaResolver.prototype.searchPage$;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0ZWdvcnktcGFnZS1tZXRhLnJlc29sdmVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3Byb2R1Y3Qvc2VydmljZXMvY2F0ZWdvcnktcGFnZS1tZXRhLnJlc29sdmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsYUFBYSxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNyRCxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFFMUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFLckUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDcEUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRWpELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUN0RSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQzs7Ozs7Ozs7Ozs7O0FBUXhFO0lBRzhDLG9EQUFnQjtJQWdCNUQsa0NBQ1ksY0FBOEIsRUFDOUIsb0JBQTBDLEVBQzFDLEdBQWUsRUFDZixXQUErQjtRQUozQyxZQU1FLGlCQUFPLFNBRVI7UUFQVyxvQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsMEJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQUMxQyxTQUFHLEdBQUgsR0FBRyxDQUFZO1FBQ2YsaUJBQVcsR0FBWCxXQUFXLENBQW9COztRQWpCbkMsaUJBQVcsR0FFZixLQUFJLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxDQUFDLElBQUksQ0FDaEMsTUFBTSxDQUFDLE9BQU8s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dXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGNvbWJpbmVMYXRlc3QsIE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIG1hcCwgc3dpdGNoTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQ21zU2VydmljZSB9IGZyb20gJy4uLy4uL2Ntcy9mYWNhZGUvY21zLnNlcnZpY2UnO1xuaW1wb3J0IHsgUGFnZSwgUGFnZU1ldGEgfSBmcm9tICcuLi8uLi9jbXMvbW9kZWwvcGFnZS5tb2RlbCc7XG5pbXBvcnQgeyBQYWdlTWV0YVJlc29sdmVyIH0gZnJvbSAnLi4vLi4vY21zL3BhZ2UvcGFnZS1tZXRhLnJlc29sdmVyJztcbmltcG9ydCB7XG4gIFBhZ2VCcmVhZGNydW1iUmVzb2x2ZXIsXG4gIFBhZ2VUaXRsZVJlc29sdmVyLFxufSBmcm9tICcuLi8uLi9jbXMvcGFnZS9wYWdlLnJlc29sdmVycyc7XG5pbXBvcnQgeyBUcmFuc2xhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi9pMThuL3RyYW5zbGF0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgUGFnZVR5cGUgfSBmcm9tICcuLi8uLi9tb2RlbC9jbXMubW9kZWwnO1xuaW1wb3J0IHsgUHJvZHVjdFNlYXJjaFBhZ2UgfSBmcm9tICcuLi8uLi9tb2RlbC9wcm9kdWN0LXNlYXJjaC5tb2RlbCc7XG5pbXBvcnQgeyBSb3V0aW5nU2VydmljZSB9IGZyb20gJy4uLy4uL3JvdXRpbmcvZmFjYWRlL3JvdXRpbmcuc2VydmljZSc7XG5pbXBvcnQgeyBQcm9kdWN0U2VhcmNoU2VydmljZSB9IGZyb20gJy4uL2ZhY2FkZS9wcm9kdWN0LXNlYXJjaC5zZXJ2aWNlJztcblxuLyoqXG4gKiBSZXNvbHZlcyB0aGUgcGFnZSBkYXRhIGZvciB0aGUgUHJvZHVjdCBMaXN0aW5nIFBhZ2VcbiAqIGJhc2VkIG9uIHRoZSBgUGFnZVR5cGUuQ0FURUdPUllfUEFHRWAuXG4gKlxuICogVGhlIHBhZ2UgdGl0bGUsIGFuZCBicmVhZGNydW1icyBhcmUgcmVzb2x2ZWQgaW4gdGhpcyBpbXBsZW1lbnRhdGlvbiBvbmx5LlxuICovXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgQ2F0ZWdvcnlQYWdlTWV0YVJlc29sdmVyIGV4dGVuZHMgUGFnZU1ldGFSZXNvbHZlclxuICBpbXBsZW1lbnRzIFBhZ2VUaXRsZVJlc29sdmVyLCBQYWdlQnJlYWRjcnVtYlJlc29sdmVyIHtcbiAgLy8gcmV1c2FibGUgb2JzZXJ2YWJsZSBmb3Igc2VhcmNoIHBhZ2UgZGF0YVxuICBwcml2YXRlIHNlYXJjaFBhZ2UkOiBPYnNlcnZhYmxlPFxuICAgIFByb2R1Y3RTZWFyY2hQYWdlIHwgUGFnZVxuICA+ID0gdGhpcy5jbXMuZ2V0Q3VycmVudFBhZ2UoKS5waXBlKFxuICAgIGZpbHRlcihCb29sZWFuKSxcbiAgICBzd2l0Y2hNYXAoKHBhZ2U6IFBhZ2UpID0+XG4gICAgICAvLyBvbmx5IHRoZSBleGlzdGVuY2Ugb2YgYSBwbHAgY29tcG9uZW50IHRlbGxzIHVzIGlmIHByb2R1Y3RzXG4gICAgICAvLyBhcmUgcmVuZGVyZWQgb3IgaWYgdGhpcyBpcyBhbiBvcmRpbmFyeSBjb250ZW50IHBhZ2VcbiAgICAgIHRoaXMuaGFzUHJvZHVjdExpc3RDb21wb25lbnQocGFnZSlcbiAgICAgICAgPyB0aGlzLnByb2R1Y3RTZWFyY2hTZXJ2aWNlLmdldFJlc3VsdHMoKS5waXBlKGZpbHRlcihCb29sZWFuKSlcbiAgICAgICAgOiBvZihwYWdlKVxuICAgIClcbiAgKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgcm91dGluZ1NlcnZpY2U6IFJvdXRpbmdTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBwcm9kdWN0U2VhcmNoU2VydmljZTogUHJvZHVjdFNlYXJjaFNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGNtczogQ21zU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgdHJhbnNsYXRpb246IFRyYW5zbGF0aW9uU2VydmljZVxuICApIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMucGFnZVR5cGUgPSBQYWdlVHlwZS5DQVRFR09SWV9QQUdFO1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIHNpbmNlIHZlcnNpb24gMS4zXG4gICAqXG4gICAqIFRoZSByZXNvbHZlIG1ldGhvZCBpcyBubyBsb25nZXIgcHJlZmVycmVkIGFuZCB3aWxsIGJlIHJlbW92ZWQgd2l0aCByZWxlYXNlIDIuMC5cbiAgICogVGhlIGNhbGxlciBgUGFnZU1ldGFTZXJ2aWNlYCBzZXJ2aWNlIGlzIGltcHJvdmVkIHRvIGV4cGVjdCBhbGwgaW5kaXZpZHVhbCByZXNvbHZlcnNcbiAgICogaW5zdGVhZCwgc28gdGhhdCB0aGUgY29kZSBpcyBlYXNpZXIgZXh0ZW5zaWJsZS5cbiAgICovXG4gIHJlc29sdmUoKTogT2JzZXJ2YWJsZTxQYWdlTWV0YT4gfCBhbnkge1xuICAgIHJldHVybiB0aGlzLmNtcy5nZXRDdXJyZW50UGFnZSgpLnBpcGUoXG4gICAgICBmaWx0ZXIoQm9vbGVhbiksXG4gICAgICBzd2l0Y2hNYXAoKHBhZ2U6IFBhZ2UpID0+IHtcbiAgICAgICAgLy8gb25seSB0aGUgZXhpc3RlbmNlIG9mIGEgcGxwIGNvbXBvbmVudCB0ZWxscyB1cyBpZiBwcm9kdWN0c1xuICAgICAgICAvLyBhcmUgcmVuZGVyZWQgb3IgaWYgdGhpcyBpcyBhbiBvcmRpbmFyeSBjb250ZW50IHBhZ2VcbiAgICAgICAgaWYgKHRoaXMuaGFzUHJvZHVjdExpc3RDb21wb25lbnQocGFnZSkpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5wcm9kdWN0U2VhcmNoU2VydmljZS5nZXRSZXN1bHRzKCkucGlwZShcbiAgICAgICAgICAgIGZpbHRlcihkYXRhID0+IGRhdGEuYnJlYWRjcnVtYnMgJiYgZGF0YS5icmVhZGNydW1icy5sZW5ndGggPiAwKSxcbiAgICAgICAgICAgIHN3aXRjaE1hcChkYXRhID0+XG4gICAgICAgICAgICAgIGNvbWJpbmVMYXRlc3QoW1xuICAgICAgICAgICAgICAgIHRoaXMucmVzb2x2ZVRpdGxlKGRhdGEpLFxuICAgICAgICAgICAgICAgIHRoaXMucmVzb2x2ZUJyZWFkY3J1bWJMYWJlbCgpLnBpcGUoXG4gICAgICAgICAgICAgICAgICBzd2l0Y2hNYXAobGFiZWwgPT4gdGhpcy5yZXNvbHZlQnJlYWRjcnVtYnMoZGF0YSwgbGFiZWwpKVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgbWFwKChbdGl0bGUsIGJyZWFkY3J1bWJzXSkgPT4gKHsgdGl0bGUsIGJyZWFkY3J1bWJzIH0pKVxuICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIG9mKHtcbiAgICAgICAgICAgIHRpdGxlOiBwYWdlLnRpdGxlIHx8IHBhZ2UubmFtZSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICApO1xuICB9XG4gIHJlc29sdmVUaXRsZSgpOiBPYnNlcnZhYmxlPHN0cmluZz47XG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCBzaW5jZSB2ZXJzaW9uIDEuM1xuICAgKiBXaXRoIDIuMCwgdGhlIGFyZ3VtZW50KHMpIHdpbGwgYmUgcmVtb3ZlZCBhbmQgdGhlIHJldHVybiB0eXBlIHdpbGwgY2hhbmdlLiBVc2UgYHJlc29sdmVUaXRsZSgpYCBpbnN0ZWFkXG4gICAqL1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IHVuaWZpZWQtc2lnbmF0dXJlc1xuICByZXNvbHZlVGl0bGUoc2VhcmNoUGFnZTogUHJvZHVjdFNlYXJjaFBhZ2UpOiBPYnNlcnZhYmxlPHN0cmluZz47XG4gIHJlc29sdmVUaXRsZShzZWFyY2hQYWdlPzogUHJvZHVjdFNlYXJjaFBhZ2UpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xuICAgIGNvbnN0IHNlYXJjaFBhZ2UkID0gc2VhcmNoUGFnZSA/IG9mKHNlYXJjaFBhZ2UpIDogdGhpcy5zZWFyY2hQYWdlJDtcblxuICAgIHJldHVybiBzZWFyY2hQYWdlJC5waXBlKFxuICAgICAgZmlsdGVyKChwYWdlOiBQcm9kdWN0U2VhcmNoUGFnZSkgPT4gISFwYWdlLnBhZ2luYXRpb24pLFxuICAgICAgc3dpdGNoTWFwKHAgPT5cbiAgICAgICAgdGhpcy50cmFuc2xhdGlvbi50cmFuc2xhdGUoJ3BhZ2VNZXRhUmVzb2x2ZXIuY2F0ZWdvcnkudGl0bGUnLCB7XG4gICAgICAgICAgY291bnQ6ICg8UHJvZHVjdFNlYXJjaFBhZ2U+cCkucGFnaW5hdGlvbi50b3RhbFJlc3VsdHMsXG4gICAgICAgICAgcXVlcnk6ICg8UHJvZHVjdFNlYXJjaFBhZ2U+cCkuYnJlYWRjcnVtYnNbMF0uZmFjZXRWYWx1ZU5hbWUsXG4gICAgICAgIH0pXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCBzaW5jZSB2ZXJzaW9uIDEuM1xuICAgKiBUaGlzIG1ldGhvZCB3aWxsIHJlbW92ZWQgd2l0aCB3aXRoIDIuMFxuICAgKi9cbiAgcmVzb2x2ZUJyZWFkY3J1bWJMYWJlbCgpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xuICAgIHJldHVybiB0aGlzLnRyYW5zbGF0aW9uLnRyYW5zbGF0ZSgnY29tbW9uLmhvbWUnKTtcbiAgfVxuXG4gIHJlc29sdmVCcmVhZGNydW1icygpOiBPYnNlcnZhYmxlPGFueVtdPjtcbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIHNpbmNlIHZlcnNpb24gMS4zXG4gICAqIFdpdGggMi4wLCB0aGUgYXJndW1lbnQocykgd2lsbCBiZSByZW1vdmVkIGFuZCB0aGUgcmV0dXJuIHR5cGUgd2lsbCBjaGFuZ2UuIFVzZSBgcmVzb2x2ZVRpdGxlKClgIGluc3RlYWRcbiAgICovXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogdW5pZmllZC1zaWduYXR1cmVzXG4gIHJlc29sdmVCcmVhZGNydW1icyhcbiAgICBzZWFyY2hQYWdlOiBQcm9kdWN0U2VhcmNoUGFnZSxcbiAgICBicmVhZGNydW1iTGFiZWw6IHN0cmluZ1xuICApOiBPYnNlcnZhYmxlPGFueVtdPjtcbiAgcmVzb2x2ZUJyZWFkY3J1bWJzKFxuICAgIHNlYXJjaFBhZ2U/OiBQcm9kdWN0U2VhcmNoUGFnZSxcbiAgICBicmVhZGNydW1iTGFiZWw/OiBzdHJpbmdcbiAgKTogT2JzZXJ2YWJsZTxhbnlbXT4ge1xuICAgIGNvbnN0IHNvdXJjZXMgPVxuICAgICAgc2VhcmNoUGFnZSAmJiBicmVhZGNydW1iTGFiZWxcbiAgICAgICAgPyBbb2Yoc2VhcmNoUGFnZSksIG9mKGJyZWFkY3J1bWJMYWJlbCldXG4gICAgICAgIDogW3RoaXMuc2VhcmNoUGFnZSQucGlwZSgpLCB0aGlzLnRyYW5zbGF0aW9uLnRyYW5zbGF0ZSgnY29tbW9uLmhvbWUnKV07XG5cbiAgICByZXR1cm4gY29tYmluZUxhdGVzdChzb3VyY2VzKS5waXBlKFxuICAgICAgbWFwKChbcCwgbGFiZWxdOiBbUHJvZHVjdFNlYXJjaFBhZ2UsIHN0cmluZ10pID0+XG4gICAgICAgIHAuYnJlYWRjcnVtYnNcbiAgICAgICAgICA/IHRoaXMucmVzb2x2ZUJyZWFkY3J1bWJEYXRhKDxQcm9kdWN0U2VhcmNoUGFnZT5wLCBsYWJlbClcbiAgICAgICAgICA6IG51bGxcbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSByZXNvbHZlQnJlYWRjcnVtYkRhdGEocGFnZTogUHJvZHVjdFNlYXJjaFBhZ2UsIGxhYmVsOiBzdHJpbmcpOiBhbnlbXSB7XG4gICAgY29uc3QgYnJlYWRjcnVtYnMgPSBbXTtcbiAgICBicmVhZGNydW1icy5wdXNoKHsgbGFiZWw6IGxhYmVsLCBsaW5rOiAnLycgfSk7XG5cbiAgICBmb3IgKGNvbnN0IGJyIG9mIHBhZ2UuYnJlYWRjcnVtYnMpIHtcbiAgICAgIGlmIChici5mYWNldENvZGUgPT09ICdjYXRlZ29yeScpIHtcbiAgICAgICAgYnJlYWRjcnVtYnMucHVzaCh7XG4gICAgICAgICAgbGFiZWw6IGJyLmZhY2V0VmFsdWVOYW1lLFxuICAgICAgICAgIGxpbms6IGAvYy8ke2JyLmZhY2V0VmFsdWVDb2RlfWAsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgaWYgKGJyLmZhY2V0Q29kZSA9PT0gJ2JyYW5kJykge1xuICAgICAgICBicmVhZGNydW1icy5wdXNoKHtcbiAgICAgICAgICBsYWJlbDogYnIuZmFjZXRWYWx1ZU5hbWUsXG4gICAgICAgICAgbGluazogYC9CcmFuZHMvJHtici5mYWNldFZhbHVlTmFtZX0vYy8ke2JyLmZhY2V0VmFsdWVDb2RlfWAsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYnJlYWRjcnVtYnM7XG4gIH1cblxuICBwcml2YXRlIGhhc1Byb2R1Y3RMaXN0Q29tcG9uZW50KHBhZ2U6IFBhZ2UpOiBib29sZWFuIHtcbiAgICByZXR1cm4gISFPYmplY3Qua2V5cyhwYWdlLnNsb3RzKS5maW5kKFxuICAgICAga2V5ID0+XG4gICAgICAgICEhcGFnZS5zbG90c1trZXldLmNvbXBvbmVudHMuZmluZChcbiAgICAgICAgICBjb21wID0+XG4gICAgICAgICAgICBjb21wLnR5cGVDb2RlID09PSAnQ01TUHJvZHVjdExpc3RDb21wb25lbnQnIHx8XG4gICAgICAgICAgICBjb21wLnR5cGVDb2RlID09PSAnUHJvZHVjdEdyaWRDb21wb25lbnQnXG4gICAgICAgIClcbiAgICApO1xuICB9XG59XG4iXX0=