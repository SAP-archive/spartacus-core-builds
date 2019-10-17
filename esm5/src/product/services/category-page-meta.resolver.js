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
            function (comp) { return comp.typeCode === 'CMSProductListComponent'; }));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0ZWdvcnktcGFnZS1tZXRhLnJlc29sdmVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3Byb2R1Y3Qvc2VydmljZXMvY2F0ZWdvcnktcGFnZS1tZXRhLnJlc29sdmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsYUFBYSxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNyRCxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFFMUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFLckUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDcEUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRWpELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUN0RSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQzs7Ozs7Ozs7Ozs7O0FBUXhFO0lBRzhDLG9EQUFnQjtJQWdCNUQsa0NBQ1ksY0FBOEIsRUFDOUIsb0JBQTBDLEVBQzFDLEdBQWUsRUFDZixXQUErQjtRQUozQyxZQU1FLGlCQUFPLFNBRVI7UUFQVyxvQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsMEJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQUMxQyxTQUFHLEdBQUgsR0FBRyxDQUFZO1FBQ2YsaUJBQVcsR0FBWCxXQUFXLENBQW9COztRQWpCbkMsaUJBQVcsR0FFZixLQUFJLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxDQUFDLElBQUksQ0FDaEMsTUFBTSxDQUFDLE9BQU8s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IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBjb21iaW5lTGF0ZXN0LCBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCBtYXAsIHN3aXRjaE1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IENtc1NlcnZpY2UgfSBmcm9tICcuLi8uLi9jbXMvZmFjYWRlL2Ntcy5zZXJ2aWNlJztcbmltcG9ydCB7IFBhZ2UsIFBhZ2VNZXRhIH0gZnJvbSAnLi4vLi4vY21zL21vZGVsL3BhZ2UubW9kZWwnO1xuaW1wb3J0IHsgUGFnZU1ldGFSZXNvbHZlciB9IGZyb20gJy4uLy4uL2Ntcy9wYWdlL3BhZ2UtbWV0YS5yZXNvbHZlcic7XG5pbXBvcnQge1xuICBQYWdlQnJlYWRjcnVtYlJlc29sdmVyLFxuICBQYWdlVGl0bGVSZXNvbHZlcixcbn0gZnJvbSAnLi4vLi4vY21zL3BhZ2UvcGFnZS5yZXNvbHZlcnMnO1xuaW1wb3J0IHsgVHJhbnNsYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vaTE4bi90cmFuc2xhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IFBhZ2VUeXBlIH0gZnJvbSAnLi4vLi4vbW9kZWwvY21zLm1vZGVsJztcbmltcG9ydCB7IFByb2R1Y3RTZWFyY2hQYWdlIH0gZnJvbSAnLi4vLi4vbW9kZWwvcHJvZHVjdC1zZWFyY2gubW9kZWwnO1xuaW1wb3J0IHsgUm91dGluZ1NlcnZpY2UgfSBmcm9tICcuLi8uLi9yb3V0aW5nL2ZhY2FkZS9yb3V0aW5nLnNlcnZpY2UnO1xuaW1wb3J0IHsgUHJvZHVjdFNlYXJjaFNlcnZpY2UgfSBmcm9tICcuLi9mYWNhZGUvcHJvZHVjdC1zZWFyY2guc2VydmljZSc7XG5cbi8qKlxuICogUmVzb2x2ZXMgdGhlIHBhZ2UgZGF0YSBmb3IgdGhlIFByb2R1Y3QgTGlzdGluZyBQYWdlXG4gKiBiYXNlZCBvbiB0aGUgYFBhZ2VUeXBlLkNBVEVHT1JZX1BBR0VgLlxuICpcbiAqIFRoZSBwYWdlIHRpdGxlLCBhbmQgYnJlYWRjcnVtYnMgYXJlIHJlc29sdmVkIGluIHRoaXMgaW1wbGVtZW50YXRpb24gb25seS5cbiAqL1xuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIENhdGVnb3J5UGFnZU1ldGFSZXNvbHZlciBleHRlbmRzIFBhZ2VNZXRhUmVzb2x2ZXJcbiAgaW1wbGVtZW50cyBQYWdlVGl0bGVSZXNvbHZlciwgUGFnZUJyZWFkY3J1bWJSZXNvbHZlciB7XG4gIC8vIHJldXNhYmxlIG9ic2VydmFibGUgZm9yIHNlYXJjaCBwYWdlIGRhdGFcbiAgcHJpdmF0ZSBzZWFyY2hQYWdlJDogT2JzZXJ2YWJsZTxcbiAgICBQcm9kdWN0U2VhcmNoUGFnZSB8IFBhZ2VcbiAgPiA9IHRoaXMuY21zLmdldEN1cnJlbnRQYWdlKCkucGlwZShcbiAgICBmaWx0ZXIoQm9vbGVhbiksXG4gICAgc3dpdGNoTWFwKChwYWdlOiBQYWdlKSA9PlxuICAgICAgLy8gb25seSB0aGUgZXhpc3RlbmNlIG9mIGEgcGxwIGNvbXBvbmVudCB0ZWxscyB1cyBpZiBwcm9kdWN0c1xuICAgICAgLy8gYXJlIHJlbmRlcmVkIG9yIGlmIHRoaXMgaXMgYW4gb3JkaW5hcnkgY29udGVudCBwYWdlXG4gICAgICB0aGlzLmhhc1Byb2R1Y3RMaXN0Q29tcG9uZW50KHBhZ2UpXG4gICAgICAgID8gdGhpcy5wcm9kdWN0U2VhcmNoU2VydmljZS5nZXRSZXN1bHRzKCkucGlwZShmaWx0ZXIoQm9vbGVhbikpXG4gICAgICAgIDogb2YocGFnZSlcbiAgICApXG4gICk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIHJvdXRpbmdTZXJ2aWNlOiBSb3V0aW5nU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgcHJvZHVjdFNlYXJjaFNlcnZpY2U6IFByb2R1Y3RTZWFyY2hTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBjbXM6IENtc1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHRyYW5zbGF0aW9uOiBUcmFuc2xhdGlvblNlcnZpY2VcbiAgKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnBhZ2VUeXBlID0gUGFnZVR5cGUuQ0FURUdPUllfUEFHRTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCBzaW5jZSB2ZXJzaW9uIDEuM1xuICAgKlxuICAgKiBUaGUgcmVzb2x2ZSBtZXRob2QgaXMgbm8gbG9uZ2VyIHByZWZlcnJlZCBhbmQgd2lsbCBiZSByZW1vdmVkIHdpdGggcmVsZWFzZSAyLjAuXG4gICAqIFRoZSBjYWxsZXIgYFBhZ2VNZXRhU2VydmljZWAgc2VydmljZSBpcyBpbXByb3ZlZCB0byBleHBlY3QgYWxsIGluZGl2aWR1YWwgcmVzb2x2ZXJzXG4gICAqIGluc3RlYWQsIHNvIHRoYXQgdGhlIGNvZGUgaXMgZWFzaWVyIGV4dGVuc2libGUuXG4gICAqL1xuICByZXNvbHZlKCk6IE9ic2VydmFibGU8UGFnZU1ldGE+IHwgYW55IHtcbiAgICByZXR1cm4gdGhpcy5jbXMuZ2V0Q3VycmVudFBhZ2UoKS5waXBlKFxuICAgICAgZmlsdGVyKEJvb2xlYW4pLFxuICAgICAgc3dpdGNoTWFwKChwYWdlOiBQYWdlKSA9PiB7XG4gICAgICAgIC8vIG9ubHkgdGhlIGV4aXN0ZW5jZSBvZiBhIHBscCBjb21wb25lbnQgdGVsbHMgdXMgaWYgcHJvZHVjdHNcbiAgICAgICAgLy8gYXJlIHJlbmRlcmVkIG9yIGlmIHRoaXMgaXMgYW4gb3JkaW5hcnkgY29udGVudCBwYWdlXG4gICAgICAgIGlmICh0aGlzLmhhc1Byb2R1Y3RMaXN0Q29tcG9uZW50KHBhZ2UpKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMucHJvZHVjdFNlYXJjaFNlcnZpY2UuZ2V0UmVzdWx0cygpLnBpcGUoXG4gICAgICAgICAgICBmaWx0ZXIoZGF0YSA9PiBkYXRhLmJyZWFkY3J1bWJzICYmIGRhdGEuYnJlYWRjcnVtYnMubGVuZ3RoID4gMCksXG4gICAgICAgICAgICBzd2l0Y2hNYXAoZGF0YSA9PlxuICAgICAgICAgICAgICBjb21iaW5lTGF0ZXN0KFtcbiAgICAgICAgICAgICAgICB0aGlzLnJlc29sdmVUaXRsZShkYXRhKSxcbiAgICAgICAgICAgICAgICB0aGlzLnJlc29sdmVCcmVhZGNydW1iTGFiZWwoKS5waXBlKFxuICAgICAgICAgICAgICAgICAgc3dpdGNoTWFwKGxhYmVsID0+IHRoaXMucmVzb2x2ZUJyZWFkY3J1bWJzKGRhdGEsIGxhYmVsKSlcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIG1hcCgoW3RpdGxlLCBicmVhZGNydW1ic10pID0+ICh7IHRpdGxlLCBicmVhZGNydW1icyB9KSlcbiAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBvZih7XG4gICAgICAgICAgICB0aXRsZTogcGFnZS50aXRsZSB8fCBwYWdlLm5hbWUsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuICByZXNvbHZlVGl0bGUoKTogT2JzZXJ2YWJsZTxzdHJpbmc+O1xuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgc2luY2UgdmVyc2lvbiAxLjNcbiAgICogV2l0aCAyLjAsIHRoZSBhcmd1bWVudChzKSB3aWxsIGJlIHJlbW92ZWQgYW5kIHRoZSByZXR1cm4gdHlwZSB3aWxsIGNoYW5nZS4gVXNlIGByZXNvbHZlVGl0bGUoKWAgaW5zdGVhZFxuICAgKi9cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiB1bmlmaWVkLXNpZ25hdHVyZXNcbiAgcmVzb2x2ZVRpdGxlKHNlYXJjaFBhZ2U6IFByb2R1Y3RTZWFyY2hQYWdlKTogT2JzZXJ2YWJsZTxzdHJpbmc+O1xuICByZXNvbHZlVGl0bGUoc2VhcmNoUGFnZT86IFByb2R1Y3RTZWFyY2hQYWdlKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcbiAgICBjb25zdCBzZWFyY2hQYWdlJCA9IHNlYXJjaFBhZ2UgPyBvZihzZWFyY2hQYWdlKSA6IHRoaXMuc2VhcmNoUGFnZSQ7XG5cbiAgICByZXR1cm4gc2VhcmNoUGFnZSQucGlwZShcbiAgICAgIGZpbHRlcigocGFnZTogUHJvZHVjdFNlYXJjaFBhZ2UpID0+ICEhcGFnZS5wYWdpbmF0aW9uKSxcbiAgICAgIHN3aXRjaE1hcChwID0+XG4gICAgICAgIHRoaXMudHJhbnNsYXRpb24udHJhbnNsYXRlKCdwYWdlTWV0YVJlc29sdmVyLmNhdGVnb3J5LnRpdGxlJywge1xuICAgICAgICAgIGNvdW50OiAoPFByb2R1Y3RTZWFyY2hQYWdlPnApLnBhZ2luYXRpb24udG90YWxSZXN1bHRzLFxuICAgICAgICAgIHF1ZXJ5OiAoPFByb2R1Y3RTZWFyY2hQYWdlPnApLmJyZWFkY3J1bWJzWzBdLmZhY2V0VmFsdWVOYW1lLFxuICAgICAgICB9KVxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgc2luY2UgdmVyc2lvbiAxLjNcbiAgICogVGhpcyBtZXRob2Qgd2lsbCByZW1vdmVkIHdpdGggd2l0aCAyLjBcbiAgICovXG4gIHJlc29sdmVCcmVhZGNydW1iTGFiZWwoKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gdGhpcy50cmFuc2xhdGlvbi50cmFuc2xhdGUoJ2NvbW1vbi5ob21lJyk7XG4gIH1cblxuICByZXNvbHZlQnJlYWRjcnVtYnMoKTogT2JzZXJ2YWJsZTxhbnlbXT47XG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCBzaW5jZSB2ZXJzaW9uIDEuM1xuICAgKiBXaXRoIDIuMCwgdGhlIGFyZ3VtZW50KHMpIHdpbGwgYmUgcmVtb3ZlZCBhbmQgdGhlIHJldHVybiB0eXBlIHdpbGwgY2hhbmdlLiBVc2UgYHJlc29sdmVUaXRsZSgpYCBpbnN0ZWFkXG4gICAqL1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IHVuaWZpZWQtc2lnbmF0dXJlc1xuICByZXNvbHZlQnJlYWRjcnVtYnMoXG4gICAgc2VhcmNoUGFnZTogUHJvZHVjdFNlYXJjaFBhZ2UsXG4gICAgYnJlYWRjcnVtYkxhYmVsOiBzdHJpbmdcbiAgKTogT2JzZXJ2YWJsZTxhbnlbXT47XG4gIHJlc29sdmVCcmVhZGNydW1icyhcbiAgICBzZWFyY2hQYWdlPzogUHJvZHVjdFNlYXJjaFBhZ2UsXG4gICAgYnJlYWRjcnVtYkxhYmVsPzogc3RyaW5nXG4gICk6IE9ic2VydmFibGU8YW55W10+IHtcbiAgICBjb25zdCBzb3VyY2VzID1cbiAgICAgIHNlYXJjaFBhZ2UgJiYgYnJlYWRjcnVtYkxhYmVsXG4gICAgICAgID8gW29mKHNlYXJjaFBhZ2UpLCBvZihicmVhZGNydW1iTGFiZWwpXVxuICAgICAgICA6IFt0aGlzLnNlYXJjaFBhZ2UkLnBpcGUoKSwgdGhpcy50cmFuc2xhdGlvbi50cmFuc2xhdGUoJ2NvbW1vbi5ob21lJyldO1xuXG4gICAgcmV0dXJuIGNvbWJpbmVMYXRlc3Qoc291cmNlcykucGlwZShcbiAgICAgIG1hcCgoW3AsIGxhYmVsXTogW1Byb2R1Y3RTZWFyY2hQYWdlLCBzdHJpbmddKSA9PlxuICAgICAgICBwLmJyZWFkY3J1bWJzXG4gICAgICAgICAgPyB0aGlzLnJlc29sdmVCcmVhZGNydW1iRGF0YSg8UHJvZHVjdFNlYXJjaFBhZ2U+cCwgbGFiZWwpXG4gICAgICAgICAgOiBudWxsXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgcmVzb2x2ZUJyZWFkY3J1bWJEYXRhKHBhZ2U6IFByb2R1Y3RTZWFyY2hQYWdlLCBsYWJlbDogc3RyaW5nKTogYW55W10ge1xuICAgIGNvbnN0IGJyZWFkY3J1bWJzID0gW107XG4gICAgYnJlYWRjcnVtYnMucHVzaCh7IGxhYmVsOiBsYWJlbCwgbGluazogJy8nIH0pO1xuXG4gICAgZm9yIChjb25zdCBiciBvZiBwYWdlLmJyZWFkY3J1bWJzKSB7XG4gICAgICBpZiAoYnIuZmFjZXRDb2RlID09PSAnY2F0ZWdvcnknKSB7XG4gICAgICAgIGJyZWFkY3J1bWJzLnB1c2goe1xuICAgICAgICAgIGxhYmVsOiBici5mYWNldFZhbHVlTmFtZSxcbiAgICAgICAgICBsaW5rOiBgL2MvJHtici5mYWNldFZhbHVlQ29kZX1gLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGlmIChici5mYWNldENvZGUgPT09ICdicmFuZCcpIHtcbiAgICAgICAgYnJlYWRjcnVtYnMucHVzaCh7XG4gICAgICAgICAgbGFiZWw6IGJyLmZhY2V0VmFsdWVOYW1lLFxuICAgICAgICAgIGxpbms6IGAvQnJhbmRzLyR7YnIuZmFjZXRWYWx1ZU5hbWV9L2MvJHtici5mYWNldFZhbHVlQ29kZX1gLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGJyZWFkY3J1bWJzO1xuICB9XG5cbiAgcHJpdmF0ZSBoYXNQcm9kdWN0TGlzdENvbXBvbmVudChwYWdlOiBQYWdlKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICEhT2JqZWN0LmtleXMocGFnZS5zbG90cykuZmluZChcbiAgICAgIGtleSA9PlxuICAgICAgICAhIXBhZ2Uuc2xvdHNba2V5XS5jb21wb25lbnRzLmZpbmQoXG4gICAgICAgICAgY29tcCA9PiBjb21wLnR5cGVDb2RlID09PSAnQ01TUHJvZHVjdExpc3RDb21wb25lbnQnXG4gICAgICAgIClcbiAgICApO1xuICB9XG59XG4iXX0=