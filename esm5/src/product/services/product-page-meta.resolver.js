/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { combineLatest, of } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';
import { PageRobotsMeta } from '../../cms/model/page.model';
import { PageMetaResolver } from '../../cms/page/page-meta.resolver';
import { FeatureConfigService } from '../../features-config/services/feature-config.service';
import { TranslationService } from '../../i18n/translation.service';
import { PageType } from '../../model/cms.model';
import { RoutingService } from '../../routing/facade/routing.service';
import { ProductService } from '../facade/product.service';
import { ProductScope } from '../model/product-scope';
import * as i0 from "@angular/core";
import * as i1 from "../../routing/facade/routing.service";
import * as i2 from "../facade/product.service";
import * as i3 from "../../i18n/translation.service";
import * as i4 from "../../features-config/services/feature-config.service";
/**
 * Resolves the page data for the Product Detail Page
 * based on the `PageType.PRODUCT_PAGE`.
 *
 * The page title, heading, description, breadcrumbs and
 * first GALLERY image are resolved if available in the data.
 */
var ProductPageMetaResolver = /** @class */ (function (_super) {
    tslib_1.__extends(ProductPageMetaResolver, _super);
    function ProductPageMetaResolver(routingService, productService, translation, features) {
        var _this = _super.call(this) || this;
        _this.routingService = routingService;
        _this.productService = productService;
        _this.translation = translation;
        _this.features = features;
        _this.PRODUCT_SCOPE = _this.features && _this.features.isLevel('1.4') ? ProductScope.DETAILS : '';
        // reusable observable for product data based on the current page
        _this.product$ = _this.routingService.getRouterState().pipe(map((/**
         * @param {?} state
         * @return {?}
         */
        function (state) { return state.state.params['productCode']; })), filter((/**
         * @param {?} code
         * @return {?}
         */
        function (code) { return !!code; })), switchMap((/**
         * @param {?} code
         * @return {?}
         */
        function (code) { return _this.productService.get(code, _this.PRODUCT_SCOPE); })), filter(Boolean));
        _this.pageType = PageType.PRODUCT_PAGE;
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
    ProductPageMetaResolver.prototype.resolve = /**
     * @deprecated since version 1.3
     *
     * The resolve method is no longer preferred and will be removed with release 2.0.
     * The caller `PageMetaService` service is improved to expect all individual resolvers
     * instead, so that the code is easier extensible.
     * @return {?}
     */
    function () {
        var _this = this;
        return this.product$.pipe(switchMap((/**
         * @param {?} p
         * @return {?}
         */
        function (p) {
            return combineLatest([
                _this.resolveHeading(p),
                _this.resolveTitle(p),
                _this.resolveDescription(p),
                _this.resolveBreadcrumbLabel().pipe(switchMap((/**
                 * @param {?} label
                 * @return {?}
                 */
                function (label) { return _this.resolveBreadcrumbs(p, label); }))),
                _this.resolveImage(p),
                _this.resolveRobots(p),
            ]);
        })), map((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = tslib_1.__read(_a, 6), heading = _b[0], title = _b[1], description = _b[2], breadcrumbs = _b[3], image = _b[4], robots = _b[5];
            return ({
                heading: heading,
                title: title,
                description: description,
                breadcrumbs: breadcrumbs,
                image: image,
                robots: robots,
            });
        })));
    };
    /**
     * @param {?=} product
     * @return {?}
     */
    ProductPageMetaResolver.prototype.resolveHeading = /**
     * @param {?=} product
     * @return {?}
     */
    function (product) {
        var _this = this;
        /** @type {?} */
        var product$ = product ? of(product) : this.product$;
        return product$.pipe(switchMap((/**
         * @param {?} p
         * @return {?}
         */
        function (p) {
            return _this.translation.translate('pageMetaResolver.product.heading', {
                heading: p.name,
            });
        })));
    };
    /**
     * @param {?=} product
     * @return {?}
     */
    ProductPageMetaResolver.prototype.resolveTitle = /**
     * @param {?=} product
     * @return {?}
     */
    function (product) {
        var _this = this;
        /** @type {?} */
        var product$ = product ? of(product) : this.product$;
        return product$.pipe(switchMap((/**
         * @param {?} p
         * @return {?}
         */
        function (p) {
            /** @type {?} */
            var title = p.name;
            title += _this.resolveFirstCategory(p);
            title += _this.resolveManufacturer(p);
            return _this.translation.translate('pageMetaResolver.product.title', {
                title: title,
            });
        })));
    };
    /**
     * @param {?=} product
     * @return {?}
     */
    ProductPageMetaResolver.prototype.resolveDescription = /**
     * @param {?=} product
     * @return {?}
     */
    function (product) {
        var _this = this;
        /** @type {?} */
        var product$ = product ? of(product) : this.product$;
        return product$.pipe(switchMap((/**
         * @param {?} p
         * @return {?}
         */
        function (p) {
            return _this.translation.translate('pageMetaResolver.product.description', {
                description: p.summary,
            });
        })));
    };
    /**
     * @deprecated since version 1.3
     * This method will be removed with with 2.0
     */
    /**
     * @deprecated since version 1.3
     * This method will be removed with with 2.0
     * @return {?}
     */
    ProductPageMetaResolver.prototype.resolveBreadcrumbLabel = /**
     * @deprecated since version 1.3
     * This method will be removed with with 2.0
     * @return {?}
     */
    function () {
        return this.translation.translate('common.home');
    };
    /**
     * @param {?=} product
     * @param {?=} breadcrumbLabel
     * @return {?}
     */
    ProductPageMetaResolver.prototype.resolveBreadcrumbs = /**
     * @param {?=} product
     * @param {?=} breadcrumbLabel
     * @return {?}
     */
    function (product, breadcrumbLabel) {
        /** @type {?} */
        var sources = product && breadcrumbLabel
            ? [of(product), of(breadcrumbLabel)]
            : [this.product$.pipe(), this.translation.translate('common.home')];
        return combineLatest(sources).pipe(map((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var e_1, _b;
            var _c = tslib_1.__read(_a, 2), p = _c[0], label = _c[1];
            /** @type {?} */
            var breadcrumbs = [];
            breadcrumbs.push({ label: label, link: '/' });
            try {
                for (var _d = tslib_1.__values(p.categories || []), _e = _d.next(); !_e.done; _e = _d.next()) {
                    var _f = _e.value, name_1 = _f.name, code = _f.code, url = _f.url;
                    breadcrumbs.push({
                        label: name_1 || code,
                        link: url,
                    });
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_e && !_e.done && (_b = _d.return)) _b.call(_d);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return breadcrumbs;
        })));
    };
    /**
     * @param {?=} product
     * @return {?}
     */
    ProductPageMetaResolver.prototype.resolveImage = /**
     * @param {?=} product
     * @return {?}
     */
    function (product) {
        /** @type {?} */
        var product$ = product ? of(product) : this.product$;
        return product$.pipe(map((/**
         * @param {?} p
         * @return {?}
         */
        function (p) {
            return p.images &&
                p.images.PRIMARY &&
                ((/** @type {?} */ (p.images.PRIMARY))).zoom &&
                ((/** @type {?} */ (p.images.PRIMARY))).zoom.url
                ? ((/** @type {?} */ (p.images.PRIMARY))).zoom.url
                : null;
        })));
    };
    /**
     * @private
     * @param {?} product
     * @return {?}
     */
    ProductPageMetaResolver.prototype.resolveFirstCategory = /**
     * @private
     * @param {?} product
     * @return {?}
     */
    function (product) {
        /** @type {?} */
        var firstCategory;
        if (product.categories && product.categories.length > 0) {
            firstCategory = product.categories[0];
        }
        return firstCategory
            ? " | " + (firstCategory.name || firstCategory.code)
            : '';
    };
    /**
     * @private
     * @param {?} product
     * @return {?}
     */
    ProductPageMetaResolver.prototype.resolveManufacturer = /**
     * @private
     * @param {?} product
     * @return {?}
     */
    function (product) {
        return product.manufacturer ? " | " + product.manufacturer : '';
    };
    /**
     * @param {?=} product
     * @return {?}
     */
    ProductPageMetaResolver.prototype.resolveRobots = /**
     * @param {?=} product
     * @return {?}
     */
    function (product) {
        /** @type {?} */
        var product$ = product ? of(product) : this.product$;
        return product$.pipe(switchMap((/**
         * @param {?} p
         * @return {?}
         */
        function (p) {
            if (!p.purchasable) {
                return of([PageRobotsMeta.FOLLOW, PageRobotsMeta.NOINDEX]);
            }
            else {
                return of([PageRobotsMeta.FOLLOW, PageRobotsMeta.INDEX]);
            }
        })));
    };
    ProductPageMetaResolver.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    ProductPageMetaResolver.ctorParameters = function () { return [
        { type: RoutingService },
        { type: ProductService },
        { type: TranslationService },
        { type: FeatureConfigService }
    ]; };
    /** @nocollapse */ ProductPageMetaResolver.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function ProductPageMetaResolver_Factory() { return new ProductPageMetaResolver(i0.ɵɵinject(i1.RoutingService), i0.ɵɵinject(i2.ProductService), i0.ɵɵinject(i3.TranslationService), i0.ɵɵinject(i4.FeatureConfigService)); }, token: ProductPageMetaResolver, providedIn: "root" });
    return ProductPageMetaResolver;
}(PageMetaResolver));
export { ProductPageMetaResolver };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    ProductPageMetaResolver.prototype.PRODUCT_SCOPE;
    /**
     * @type {?}
     * @private
     */
    ProductPageMetaResolver.prototype.product$;
    /**
     * @type {?}
     * @protected
     */
    ProductPageMetaResolver.prototype.routingService;
    /**
     * @type {?}
     * @protected
     */
    ProductPageMetaResolver.prototype.productService;
    /**
     * @type {?}
     * @protected
     */
    ProductPageMetaResolver.prototype.translation;
    /**
     * @type {?}
     * @protected
     */
    ProductPageMetaResolver.prototype.features;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1wYWdlLW1ldGEucmVzb2x2ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvcHJvZHVjdC9zZXJ2aWNlcy9wcm9kdWN0LXBhZ2UtbWV0YS5yZXNvbHZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGFBQWEsRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDckQsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEQsT0FBTyxFQUFZLGNBQWMsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3RFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBUXJFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHVEQUF1RCxDQUFDO0FBQzdGLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUVqRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDdEUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzNELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7Ozs7Ozs7Ozs7OztBQVN0RDtJQUc2QyxtREFBZ0I7SUFtQzNELGlDQUNZLGNBQThCLEVBQzlCLGNBQThCLEVBQzlCLFdBQStCLEVBQy9CLFFBQStCO1FBSjNDLFlBTUUsaUJBQU8sU0FFUjtRQVBXLG9CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixvQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsaUJBQVcsR0FBWCxXQUFXLENBQW9CO1FBQy9CLGNBQVEsR0FBUixRQUFRLENB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O2FBQzVEO2lCQUFNO2dCQUNMLE9BQU8sRUFBRSxDQUFDLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQzthQUMxRDtRQUNILENBQUMsRUFBQyxDQUNILENBQUM7SUFDSixDQUFDOztnQkFqUEYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkFiUSxjQUFjO2dCQUNkLGNBQWM7Z0JBSmQsa0JBQWtCO2dCQURsQixvQkFBb0I7OztrQ0FaN0I7Q0E2UUMsQUFsUEQsQ0FHNkMsZ0JBQWdCLEdBK081RDtTQS9PWSx1QkFBdUI7Ozs7OztJQU9sQyxnREFDNEU7Ozs7O0lBRzVFLDJDQUtFOzs7OztJQW9CQSxpREFBd0M7Ozs7O0lBQ3hDLGlEQUF3Qzs7Ozs7SUFDeEMsOENBQXlDOzs7OztJQUN6QywyQ0FBeUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBjb21iaW5lTGF0ZXN0LCBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCBtYXAsIHN3aXRjaE1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFBhZ2VNZXRhLCBQYWdlUm9ib3RzTWV0YSB9IGZyb20gJy4uLy4uL2Ntcy9tb2RlbC9wYWdlLm1vZGVsJztcbmltcG9ydCB7IFBhZ2VNZXRhUmVzb2x2ZXIgfSBmcm9tICcuLi8uLi9jbXMvcGFnZS9wYWdlLW1ldGEucmVzb2x2ZXInO1xuaW1wb3J0IHtcbiAgUGFnZUJyZWFkY3J1bWJSZXNvbHZlcixcbiAgUGFnZURlc2NyaXB0aW9uUmVzb2x2ZXIsXG4gIFBhZ2VIZWFkaW5nUmVzb2x2ZXIsXG4gIFBhZ2VJbWFnZVJlc29sdmVyLFxuICBQYWdlVGl0bGVSZXNvbHZlcixcbn0gZnJvbSAnLi4vLi4vY21zL3BhZ2UvcGFnZS5yZXNvbHZlcnMnO1xuaW1wb3J0IHsgRmVhdHVyZUNvbmZpZ1NlcnZpY2UgfSBmcm9tICcuLi8uLi9mZWF0dXJlcy1jb25maWcvc2VydmljZXMvZmVhdHVyZS1jb25maWcuc2VydmljZSc7XG5pbXBvcnQgeyBUcmFuc2xhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi9pMThuL3RyYW5zbGF0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgUGFnZVR5cGUgfSBmcm9tICcuLi8uLi9tb2RlbC9jbXMubW9kZWwnO1xuaW1wb3J0IHsgUHJvZHVjdCB9IGZyb20gJy4uLy4uL21vZGVsL3Byb2R1Y3QubW9kZWwnO1xuaW1wb3J0IHsgUm91dGluZ1NlcnZpY2UgfSBmcm9tICcuLi8uLi9yb3V0aW5nL2ZhY2FkZS9yb3V0aW5nLnNlcnZpY2UnO1xuaW1wb3J0IHsgUHJvZHVjdFNlcnZpY2UgfSBmcm9tICcuLi9mYWNhZGUvcHJvZHVjdC5zZXJ2aWNlJztcbmltcG9ydCB7IFByb2R1Y3RTY29wZSB9IGZyb20gJy4uL21vZGVsL3Byb2R1Y3Qtc2NvcGUnO1xuXG4vKipcbiAqIFJlc29sdmVzIHRoZSBwYWdlIGRhdGEgZm9yIHRoZSBQcm9kdWN0IERldGFpbCBQYWdlXG4gKiBiYXNlZCBvbiB0aGUgYFBhZ2VUeXBlLlBST0RVQ1RfUEFHRWAuXG4gKlxuICogVGhlIHBhZ2UgdGl0bGUsIGhlYWRpbmcsIGRlc2NyaXB0aW9uLCBicmVhZGNydW1icyBhbmRcbiAqIGZpcnN0IEdBTExFUlkgaW1hZ2UgYXJlIHJlc29sdmVkIGlmIGF2YWlsYWJsZSBpbiB0aGUgZGF0YS5cbiAqL1xuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIFByb2R1Y3RQYWdlTWV0YVJlc29sdmVyIGV4dGVuZHMgUGFnZU1ldGFSZXNvbHZlclxuICBpbXBsZW1lbnRzXG4gICAgUGFnZUhlYWRpbmdSZXNvbHZlcixcbiAgICBQYWdlVGl0bGVSZXNvbHZlcixcbiAgICBQYWdlRGVzY3JpcHRpb25SZXNvbHZlcixcbiAgICBQYWdlQnJlYWRjcnVtYlJlc29sdmVyLFxuICAgIFBhZ2VJbWFnZVJlc29sdmVyIHtcbiAgcHJvdGVjdGVkIHJlYWRvbmx5IFBST0RVQ1RfU0NPUEUgPVxuICAgIHRoaXMuZmVhdHVyZXMgJiYgdGhpcy5mZWF0dXJlcy5pc0xldmVsKCcxLjQnKSA/IFByb2R1Y3RTY29wZS5ERVRBSUxTIDogJyc7XG5cbiAgLy8gcmV1c2FibGUgb2JzZXJ2YWJsZSBmb3IgcHJvZHVjdCBkYXRhIGJhc2VkIG9uIHRoZSBjdXJyZW50IHBhZ2VcbiAgcHJpdmF0ZSBwcm9kdWN0JCA9IHRoaXMucm91dGluZ1NlcnZpY2UuZ2V0Um91dGVyU3RhdGUoKS5waXBlKFxuICAgIG1hcChzdGF0ZSA9PiBzdGF0ZS5zdGF0ZS5wYXJhbXNbJ3Byb2R1Y3RDb2RlJ10pLFxuICAgIGZpbHRlcihjb2RlID0+ICEhY29kZSksXG4gICAgc3dpdGNoTWFwKGNvZGUgPT4gdGhpcy5wcm9kdWN0U2VydmljZS5nZXQoY29kZSwgdGhpcy5QUk9EVUNUX1NDT1BFKSksXG4gICAgZmlsdGVyKEJvb2xlYW4pXG4gICk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcm91dGluZ1NlcnZpY2U6IFJvdXRpbmdTZXJ2aWNlLFxuICAgIHByb2R1Y3RTZXJ2aWNlOiBQcm9kdWN0U2VydmljZSxcbiAgICB0cmFuc2xhdGlvbjogVHJhbnNsYXRpb25TZXJ2aWNlLFxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogdW5pZmllZC1zaWduYXR1cmVzXG4gICAgZmVhdHVyZXM6IEZlYXR1cmVDb25maWdTZXJ2aWNlXG4gICk7XG5cbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIHNpbmNlIDEuNFxuICAgKi9cbiAgY29uc3RydWN0b3IoXG4gICAgcm91dGluZ1NlcnZpY2U6IFJvdXRpbmdTZXJ2aWNlLFxuICAgIHByb2R1Y3RTZXJ2aWNlOiBQcm9kdWN0U2VydmljZSxcbiAgICB0cmFuc2xhdGlvbjogVHJhbnNsYXRpb25TZXJ2aWNlXG4gICk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIHJvdXRpbmdTZXJ2aWNlOiBSb3V0aW5nU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgcHJvZHVjdFNlcnZpY2U6IFByb2R1Y3RTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCB0cmFuc2xhdGlvbjogVHJhbnNsYXRpb25TZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBmZWF0dXJlcz86IEZlYXR1cmVDb25maWdTZXJ2aWNlXG4gICkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5wYWdlVHlwZSA9IFBhZ2VUeXBlLlBST0RVQ1RfUEFHRTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCBzaW5jZSB2ZXJzaW9uIDEuM1xuICAgKlxuICAgKiBUaGUgcmVzb2x2ZSBtZXRob2QgaXMgbm8gbG9uZ2VyIHByZWZlcnJlZCBhbmQgd2lsbCBiZSByZW1vdmVkIHdpdGggcmVsZWFzZSAyLjAuXG4gICAqIFRoZSBjYWxsZXIgYFBhZ2VNZXRhU2VydmljZWAgc2VydmljZSBpcyBpbXByb3ZlZCB0byBleHBlY3QgYWxsIGluZGl2aWR1YWwgcmVzb2x2ZXJzXG4gICAqIGluc3RlYWQsIHNvIHRoYXQgdGhlIGNvZGUgaXMgZWFzaWVyIGV4dGVuc2libGUuXG4gICAqL1xuICByZXNvbHZlKCk6IE9ic2VydmFibGU8UGFnZU1ldGE+IHwgYW55IHtcbiAgICByZXR1cm4gdGhpcy5wcm9kdWN0JC5waXBlKFxuICAgICAgc3dpdGNoTWFwKChwOiBQcm9kdWN0KSA9PlxuICAgICAgICBjb21iaW5lTGF0ZXN0KFtcbiAgICAgICAgICB0aGlzLnJlc29sdmVIZWFkaW5nKHApLFxuICAgICAgICAgIHRoaXMucmVzb2x2ZVRpdGxlKHApLFxuICAgICAgICAgIHRoaXMucmVzb2x2ZURlc2NyaXB0aW9uKHApLFxuICAgICAgICAgIHRoaXMucmVzb2x2ZUJyZWFkY3J1bWJMYWJlbCgpLnBpcGUoXG4gICAgICAgICAgICBzd2l0Y2hNYXAobGFiZWwgPT4gdGhpcy5yZXNvbHZlQnJlYWRjcnVtYnMocCwgbGFiZWwpKVxuICAgICAgICAgICksXG4gICAgICAgICAgdGhpcy5yZXNvbHZlSW1hZ2UocCksXG4gICAgICAgICAgdGhpcy5yZXNvbHZlUm9ib3RzKHApLFxuICAgICAgICBdKVxuICAgICAgKSxcbiAgICAgIG1hcChcbiAgICAgICAgKFtoZWFkaW5nLCB0aXRsZSwgZGVzY3JpcHRpb24sIGJyZWFkY3J1bWJzLCBpbWFnZSwgcm9ib3RzXTogW1xuICAgICAgICAgIHN0cmluZyxcbiAgICAgICAgICBzdHJpbmcsXG4gICAgICAgICAgc3RyaW5nLFxuICAgICAgICAgIGFueVtdLFxuICAgICAgICAgIHN0cmluZyxcbiAgICAgICAgICBzdHJpbmdbXVxuICAgICAgICBdKSA9PiAoe1xuICAgICAgICAgIGhlYWRpbmcsXG4gICAgICAgICAgdGl0bGUsXG4gICAgICAgICAgZGVzY3JpcHRpb24sXG4gICAgICAgICAgYnJlYWRjcnVtYnMsXG4gICAgICAgICAgaW1hZ2UsXG4gICAgICAgICAgcm9ib3RzLFxuICAgICAgICB9KVxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICByZXNvbHZlSGVhZGluZygpOiBPYnNlcnZhYmxlPHN0cmluZz47XG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCBzaW5jZSB2ZXJzaW9uIDEuM1xuICAgKiBXaXRoIDIuMCwgdGhlIGFyZ3VtZW50KHMpIHdpbGwgYmUgcmVtb3ZlZCBhbmQgdGhlIHJldHVybiB0eXBlIHdpbGwgY2hhbmdlLiBVc2UgYHJlc29sdmVIZWFkaW5nKClgIGluc3RlYWRcbiAgICovXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogdW5pZmllZC1zaWduYXR1cmVzXG4gIHJlc29sdmVIZWFkaW5nKHByb2R1Y3Q6IFByb2R1Y3QpOiBPYnNlcnZhYmxlPHN0cmluZz47XG4gIHJlc29sdmVIZWFkaW5nKHByb2R1Y3Q/OiBQcm9kdWN0KTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcbiAgICBjb25zdCBwcm9kdWN0JCA9IHByb2R1Y3QgPyBvZihwcm9kdWN0KSA6IHRoaXMucHJvZHVjdCQ7XG4gICAgcmV0dXJuIHByb2R1Y3QkLnBpcGUoXG4gICAgICBzd2l0Y2hNYXAoKHA6IFByb2R1Y3QpID0+XG4gICAgICAgIHRoaXMudHJhbnNsYXRpb24udHJhbnNsYXRlKCdwYWdlTWV0YVJlc29sdmVyLnByb2R1Y3QuaGVhZGluZycsIHtcbiAgICAgICAgICBoZWFkaW5nOiBwLm5hbWUsXG4gICAgICAgIH0pXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIHJlc29sdmVUaXRsZSgpOiBPYnNlcnZhYmxlPHN0cmluZz47XG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCBzaW5jZSB2ZXJzaW9uIDEuM1xuICAgKiBXaXRoIDIuMCwgdGhlIGFyZ3VtZW50KHMpIHdpbGwgYmUgcmVtb3ZlZCBhbmQgdGhlIHJldHVybiB0eXBlIHdpbGwgY2hhbmdlLiBVc2UgYHJlc29sdmVUaXRsZSgpYCBpbnN0ZWFkXG4gICAqL1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IHVuaWZpZWQtc2lnbmF0dXJlc1xuICByZXNvbHZlVGl0bGUocHJvZHVjdDogUHJvZHVjdCk6IE9ic2VydmFibGU8c3RyaW5nPjtcbiAgcmVzb2x2ZVRpdGxlKHByb2R1Y3Q/OiBQcm9kdWN0KTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcbiAgICBjb25zdCBwcm9kdWN0JCA9IHByb2R1Y3QgPyBvZihwcm9kdWN0KSA6IHRoaXMucHJvZHVjdCQ7XG4gICAgcmV0dXJuIHByb2R1Y3QkLnBpcGUoXG4gICAgICBzd2l0Y2hNYXAoKHA6IFByb2R1Y3QpID0+IHtcbiAgICAgICAgbGV0IHRpdGxlID0gcC5uYW1lO1xuICAgICAgICB0aXRsZSArPSB0aGlzLnJlc29sdmVGaXJzdENhdGVnb3J5KHApO1xuICAgICAgICB0aXRsZSArPSB0aGlzLnJlc29sdmVNYW51ZmFjdHVyZXIocCk7XG4gICAgICAgIHJldHVybiB0aGlzLnRyYW5zbGF0aW9uLnRyYW5zbGF0ZSgncGFnZU1ldGFSZXNvbHZlci5wcm9kdWN0LnRpdGxlJywge1xuICAgICAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgICAgfSk7XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICByZXNvbHZlRGVzY3JpcHRpb24oKTogT2JzZXJ2YWJsZTxzdHJpbmc+O1xuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgc2luY2UgdmVyc2lvbiAxLjNcbiAgICogV2l0aCAyLjAsIHRoZSBhcmd1bWVudChzKSB3aWxsIGJlIHJlbW92ZWQgYW5kIHRoZSByZXR1cm4gdHlwZSB3aWxsIGNoYW5nZS4gVXNlIGByZXNvbHZlRGVzY3JpcHRpb24oKWAgaW5zdGVhZFxuICAgKi9cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiB1bmlmaWVkLXNpZ25hdHVyZXNcbiAgcmVzb2x2ZURlc2NyaXB0aW9uKHByb2R1Y3Q6IFByb2R1Y3QpOiBPYnNlcnZhYmxlPHN0cmluZz47XG4gIHJlc29sdmVEZXNjcmlwdGlvbihwcm9kdWN0PzogUHJvZHVjdCk6IE9ic2VydmFibGU8c3RyaW5nPiB7XG4gICAgY29uc3QgcHJvZHVjdCQ6IE9ic2VydmFibGU8UHJvZHVjdD4gPSBwcm9kdWN0ID8gb2YocHJvZHVjdCkgOiB0aGlzLnByb2R1Y3QkO1xuICAgIHJldHVybiBwcm9kdWN0JC5waXBlKFxuICAgICAgc3dpdGNoTWFwKChwOiBQcm9kdWN0KSA9PlxuICAgICAgICB0aGlzLnRyYW5zbGF0aW9uLnRyYW5zbGF0ZSgncGFnZU1ldGFSZXNvbHZlci5wcm9kdWN0LmRlc2NyaXB0aW9uJywge1xuICAgICAgICAgIGRlc2NyaXB0aW9uOiBwLnN1bW1hcnksXG4gICAgICAgIH0pXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCBzaW5jZSB2ZXJzaW9uIDEuM1xuICAgKiBUaGlzIG1ldGhvZCB3aWxsIGJlIHJlbW92ZWQgd2l0aCB3aXRoIDIuMFxuICAgKi9cbiAgcmVzb2x2ZUJyZWFkY3J1bWJMYWJlbCgpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xuICAgIHJldHVybiB0aGlzLnRyYW5zbGF0aW9uLnRyYW5zbGF0ZSgnY29tbW9uLmhvbWUnKTtcbiAgfVxuXG4gIHJlc29sdmVCcmVhZGNydW1icygpOiBPYnNlcnZhYmxlPGFueVtdPjtcbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIHNpbmNlIHZlcnNpb24gMS4zXG4gICAqIFdpdGggMi4wLCB0aGUgYXJndW1lbnQocykgd2lsbCBiZSByZW1vdmVkIGFuZCB0aGUgcmV0dXJuIHR5cGUgd2lsbCBjaGFuZ2UuIFVzZSBgcmVzb2x2ZUJyZWFkY3J1bWJzKClgIGluc3RlYWRcbiAgICovXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogdW5pZmllZC1zaWduYXR1cmVzXG4gIHJlc29sdmVCcmVhZGNydW1icyhcbiAgICBwcm9kdWN0OiBQcm9kdWN0LFxuICAgIGJyZWFkY3J1bWJMYWJlbDogc3RyaW5nXG4gICk6IE9ic2VydmFibGU8YW55W10+O1xuICByZXNvbHZlQnJlYWRjcnVtYnMoXG4gICAgcHJvZHVjdD86IFByb2R1Y3QsXG4gICAgYnJlYWRjcnVtYkxhYmVsPzogc3RyaW5nXG4gICk6IE9ic2VydmFibGU8YW55W10+IHtcbiAgICBjb25zdCBzb3VyY2VzID1cbiAgICAgIHByb2R1Y3QgJiYgYnJlYWRjcnVtYkxhYmVsXG4gICAgICAgID8gW29mKHByb2R1Y3QpLCBvZihicmVhZGNydW1iTGFiZWwpXVxuICAgICAgICA6IFt0aGlzLnByb2R1Y3QkLnBpcGUoKSwgdGhpcy50cmFuc2xhdGlvbi50cmFuc2xhdGUoJ2NvbW1vbi5ob21lJyldO1xuXG4gICAgcmV0dXJuIGNvbWJpbmVMYXRlc3Qoc291cmNlcykucGlwZShcbiAgICAgIG1hcCgoW3AsIGxhYmVsXTogW1Byb2R1Y3QsIHN0cmluZ10pID0+IHtcbiAgICAgICAgY29uc3QgYnJlYWRjcnVtYnMgPSBbXTtcbiAgICAgICAgYnJlYWRjcnVtYnMucHVzaCh7IGxhYmVsOiBsYWJlbCwgbGluazogJy8nIH0pO1xuICAgICAgICBmb3IgKGNvbnN0IHsgbmFtZSwgY29kZSwgdXJsIH0gb2YgcC5jYXRlZ29yaWVzIHx8IFtdKSB7XG4gICAgICAgICAgYnJlYWRjcnVtYnMucHVzaCh7XG4gICAgICAgICAgICBsYWJlbDogbmFtZSB8fCBjb2RlLFxuICAgICAgICAgICAgbGluazogdXJsLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBicmVhZGNydW1icztcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIHJlc29sdmVJbWFnZSgpOiBPYnNlcnZhYmxlPHN0cmluZz47XG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCBzaW5jZSB2ZXJzaW9uIDEuM1xuICAgKiBXaXRoIDIuMCwgdGhlIGFyZ3VtZW50KHMpIHdpbGwgYmUgcmVtb3ZlZCBhbmQgdGhlIHJldHVybiB0eXBlIHdpbGwgY2hhbmdlLiBVc2UgYHJlc29sdmVJbWFnZSgpYCBpbnN0ZWFkXG4gICAqL1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IHVuaWZpZWQtc2lnbmF0dXJlc1xuICByZXNvbHZlSW1hZ2UocHJvZHVjdDogUHJvZHVjdCk6IE9ic2VydmFibGU8c3RyaW5nPjtcbiAgcmVzb2x2ZUltYWdlKHByb2R1Y3Q/OiBQcm9kdWN0KTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcbiAgICBjb25zdCBwcm9kdWN0JDogT2JzZXJ2YWJsZTxQcm9kdWN0PiA9IHByb2R1Y3QgPyBvZihwcm9kdWN0KSA6IHRoaXMucHJvZHVjdCQ7XG4gICAgcmV0dXJuIHByb2R1Y3QkLnBpcGUoXG4gICAgICBtYXAoKHA6IFByb2R1Y3QpID0+XG4gICAgICAgIHAuaW1hZ2VzICYmXG4gICAgICAgIHAuaW1hZ2VzLlBSSU1BUlkgJiZcbiAgICAgICAgKDxhbnk+cC5pbWFnZXMuUFJJTUFSWSkuem9vbSAmJlxuICAgICAgICAoPGFueT5wLmltYWdlcy5QUklNQVJZKS56b29tLnVybFxuICAgICAgICAgID8gKDxhbnk+cC5pbWFnZXMuUFJJTUFSWSkuem9vbS51cmxcbiAgICAgICAgICA6IG51bGxcbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSByZXNvbHZlRmlyc3RDYXRlZ29yeShwcm9kdWN0OiBQcm9kdWN0KTogc3RyaW5nIHtcbiAgICBsZXQgZmlyc3RDYXRlZ29yeTtcbiAgICBpZiAocHJvZHVjdC5jYXRlZ29yaWVzICYmIHByb2R1Y3QuY2F0ZWdvcmllcy5sZW5ndGggPiAwKSB7XG4gICAgICBmaXJzdENhdGVnb3J5ID0gcHJvZHVjdC5jYXRlZ29yaWVzWzBdO1xuICAgIH1cbiAgICByZXR1cm4gZmlyc3RDYXRlZ29yeVxuICAgICAgPyBgIHwgJHtmaXJzdENhdGVnb3J5Lm5hbWUgfHwgZmlyc3RDYXRlZ29yeS5jb2RlfWBcbiAgICAgIDogJyc7XG4gIH1cblxuICBwcml2YXRlIHJlc29sdmVNYW51ZmFjdHVyZXIocHJvZHVjdDogUHJvZHVjdCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHByb2R1Y3QubWFudWZhY3R1cmVyID8gYCB8ICR7cHJvZHVjdC5tYW51ZmFjdHVyZXJ9YCA6ICcnO1xuICB9XG5cbiAgcmVzb2x2ZVJvYm90cygpOiBPYnNlcnZhYmxlPFBhZ2VSb2JvdHNNZXRhW10+O1xuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgc2luY2UgdmVyc2lvbiAxLjNcbiAgICogV2l0aCAyLjAsIHRoZSBhcmd1bWVudChzKSB3aWxsIGJlIHJlbW92ZWQgYW5kIHRoZSByZXR1cm4gdHlwZSB3aWxsIGNoYW5nZS4gVXNlIGByZXNvbHZlUm9ib3RzKClgIGluc3RlYWRcbiAgICovXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogdW5pZmllZC1zaWduYXR1cmVzXG4gIHJlc29sdmVSb2JvdHMocHJvZHVjdDogUHJvZHVjdCk6IE9ic2VydmFibGU8UGFnZVJvYm90c01ldGFbXT47XG4gIHJlc29sdmVSb2JvdHMocHJvZHVjdD86IFByb2R1Y3QpOiBPYnNlcnZhYmxlPFBhZ2VSb2JvdHNNZXRhW10+IHtcbiAgICBjb25zdCBwcm9kdWN0JCA9IHByb2R1Y3QgPyBvZihwcm9kdWN0KSA6IHRoaXMucHJvZHVjdCQ7XG4gICAgcmV0dXJuIHByb2R1Y3QkLnBpcGUoXG4gICAgICBzd2l0Y2hNYXAoKHA6IFByb2R1Y3QpID0+IHtcbiAgICAgICAgaWYgKCFwLnB1cmNoYXNhYmxlKSB7XG4gICAgICAgICAgcmV0dXJuIG9mKFtQYWdlUm9ib3RzTWV0YS5GT0xMT1csIFBhZ2VSb2JvdHNNZXRhLk5PSU5ERVhdKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gb2YoW1BhZ2VSb2JvdHNNZXRhLkZPTExPVywgUGFnZVJvYm90c01ldGEuSU5ERVhdKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICApO1xuICB9XG59XG4iXX0=