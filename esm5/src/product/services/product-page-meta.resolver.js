/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { combineLatest, of } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';
import { PageMetaResolver } from '../../cms/page/page-meta.resolver';
import { TranslationService } from '../../i18n/translation.service';
import { PageType } from '../../model/cms.model';
import { RoutingService } from '../../routing/facade/routing.service';
import { ProductService } from '../facade/product.service';
import { FeatureConfigService } from '../../features-config/services/feature-config.service';
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
        _this.PRODUCT_SCOPE = _this.features && _this.features.isLevel('1.4') ? 'details' : '';
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
            ]);
        })), map((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = tslib_1.__read(_a, 5), heading = _b[0], title = _b[1], description = _b[2], breadcrumbs = _b[3], image = _b[4];
            return ({
                heading: heading,
                title: title,
                description: description,
                breadcrumbs: breadcrumbs,
                image: image,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1wYWdlLW1ldGEucmVzb2x2ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvcHJvZHVjdC9zZXJ2aWNlcy9wcm9kdWN0LXBhZ2UtbWV0YS5yZXNvbHZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGFBQWEsRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDckQsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFeEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFRckUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDcEUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRWpELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUN0RSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDM0QsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sdURBQXVELENBQUM7Ozs7Ozs7Ozs7Ozs7QUFTN0Y7SUFHNkMsbURBQWdCO0lBa0IzRCxpQ0FDWSxjQUE4QixFQUM5QixjQUE4QixFQUM5QixXQUErQixFQUMvQixRQUErQjtRQUozQyxZQU1FLGlCQUFPLFNBRVI7UUFQVyxvQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsb0JBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLGlCQUFXLEdBQVgsV0FBVyxDQUFvQjtRQUMvQixjQUFRLEdBQVIsUUFBUSxDQUF1QjtRQWZ4QixtQkFBYSxHQUM5QixLQUFJLENBQUMsUUFBUSxJQUFJLEtBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFD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QUNULENBQ0YsQ0FBQztJQUNKLENBQUM7Ozs7OztJQUVPLHNEQUFvQjs7Ozs7SUFBNUIsVUFBNkIsT0FBZ0I7O1lBQ3ZDLGFBQWE7UUFDakIsSUFBSSxPQUFPLENBQUMsVUFBVSxJQUFJLE9BQU8sQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUN2RCxhQUFhLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUN2QztRQUNELE9BQU8sYUFBYTtZQUNsQixDQUFDLENBQUMsU0FBTSxhQUFhLENBQUMsSUFBSSxJQUFJLGFBQWEsQ0FBQyxJQUFJLENBQUU7WUFDbEQsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUNULENBQUM7Ozs7OztJQUVPLHFEQUFtQjs7Ozs7SUFBM0IsVUFBNEIsT0FBZ0I7UUFDMUMsT0FBTyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxRQUFNLE9BQU8sQ0FBQyxZQUFjLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUNsRSxDQUFDOztnQkF6TUYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkFiUSxjQUFjO2dCQUNkLGNBQWM7Z0JBSmQsa0JBQWtCO2dCQUtsQixvQkFBb0I7OztrQ0FqQjdCO0NBb09DLEFBMU1ELENBRzZDLGdCQUFnQixHQXVNNUQ7U0F2TVksdUJBQXVCOzs7Ozs7SUFPbEMsZ0RBQ2lFOzs7OztJQUdqRSwyQ0FLRTs7Ozs7SUFHQSxpREFBd0M7Ozs7O0lBQ3hDLGlEQUF3Qzs7Ozs7SUFDeEMsOENBQXlDOzs7OztJQUN6QywyQ0FBeUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBjb21iaW5lTGF0ZXN0LCBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCBtYXAsIHN3aXRjaE1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFBhZ2VNZXRhIH0gZnJvbSAnLi4vLi4vY21zL21vZGVsL3BhZ2UubW9kZWwnO1xuaW1wb3J0IHsgUGFnZU1ldGFSZXNvbHZlciB9IGZyb20gJy4uLy4uL2Ntcy9wYWdlL3BhZ2UtbWV0YS5yZXNvbHZlcic7XG5pbXBvcnQge1xuICBQYWdlQnJlYWRjcnVtYlJlc29sdmVyLFxuICBQYWdlRGVzY3JpcHRpb25SZXNvbHZlcixcbiAgUGFnZUhlYWRpbmdSZXNvbHZlcixcbiAgUGFnZUltYWdlUmVzb2x2ZXIsXG4gIFBhZ2VUaXRsZVJlc29sdmVyLFxufSBmcm9tICcuLi8uLi9jbXMvcGFnZS9wYWdlLnJlc29sdmVycyc7XG5pbXBvcnQgeyBUcmFuc2xhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi9pMThuL3RyYW5zbGF0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgUGFnZVR5cGUgfSBmcm9tICcuLi8uLi9tb2RlbC9jbXMubW9kZWwnO1xuaW1wb3J0IHsgUHJvZHVjdCB9IGZyb20gJy4uLy4uL21vZGVsL3Byb2R1Y3QubW9kZWwnO1xuaW1wb3J0IHsgUm91dGluZ1NlcnZpY2UgfSBmcm9tICcuLi8uLi9yb3V0aW5nL2ZhY2FkZS9yb3V0aW5nLnNlcnZpY2UnO1xuaW1wb3J0IHsgUHJvZHVjdFNlcnZpY2UgfSBmcm9tICcuLi9mYWNhZGUvcHJvZHVjdC5zZXJ2aWNlJztcbmltcG9ydCB7IEZlYXR1cmVDb25maWdTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vZmVhdHVyZXMtY29uZmlnL3NlcnZpY2VzL2ZlYXR1cmUtY29uZmlnLnNlcnZpY2UnO1xuXG4vKipcbiAqIFJlc29sdmVzIHRoZSBwYWdlIGRhdGEgZm9yIHRoZSBQcm9kdWN0IERldGFpbCBQYWdlXG4gKiBiYXNlZCBvbiB0aGUgYFBhZ2VUeXBlLlBST0RVQ1RfUEFHRWAuXG4gKlxuICogVGhlIHBhZ2UgdGl0bGUsIGhlYWRpbmcsIGRlc2NyaXB0aW9uLCBicmVhZGNydW1icyBhbmRcbiAqIGZpcnN0IEdBTExFUlkgaW1hZ2UgYXJlIHJlc29sdmVkIGlmIGF2YWlsYWJsZSBpbiB0aGUgZGF0YS5cbiAqL1xuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIFByb2R1Y3RQYWdlTWV0YVJlc29sdmVyIGV4dGVuZHMgUGFnZU1ldGFSZXNvbHZlclxuICBpbXBsZW1lbnRzXG4gICAgUGFnZUhlYWRpbmdSZXNvbHZlcixcbiAgICBQYWdlVGl0bGVSZXNvbHZlcixcbiAgICBQYWdlRGVzY3JpcHRpb25SZXNvbHZlcixcbiAgICBQYWdlQnJlYWRjcnVtYlJlc29sdmVyLFxuICAgIFBhZ2VJbWFnZVJlc29sdmVyIHtcbiAgcHJvdGVjdGVkIHJlYWRvbmx5IFBST0RVQ1RfU0NPUEUgPVxuICAgIHRoaXMuZmVhdHVyZXMgJiYgdGhpcy5mZWF0dXJlcy5pc0xldmVsKCcxLjQnKSA/ICdkZXRhaWxzJyA6ICcnO1xuXG4gIC8vIHJldXNhYmxlIG9ic2VydmFibGUgZm9yIHByb2R1Y3QgZGF0YSBiYXNlZCBvbiB0aGUgY3VycmVudCBwYWdlXG4gIHByaXZhdGUgcHJvZHVjdCQgPSB0aGlzLnJvdXRpbmdTZXJ2aWNlLmdldFJvdXRlclN0YXRlKCkucGlwZShcbiAgICBtYXAoc3RhdGUgPT4gc3RhdGUuc3RhdGUucGFyYW1zWydwcm9kdWN0Q29kZSddKSxcbiAgICBmaWx0ZXIoY29kZSA9PiAhIWNvZGUpLFxuICAgIHN3aXRjaE1hcChjb2RlID0+IHRoaXMucHJvZHVjdFNlcnZpY2UuZ2V0KGNvZGUsIHRoaXMuUFJPRFVDVF9TQ09QRSkpLFxuICAgIGZpbHRlcihCb29sZWFuKVxuICApO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCByb3V0aW5nU2VydmljZTogUm91dGluZ1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHByb2R1Y3RTZXJ2aWNlOiBQcm9kdWN0U2VydmljZSxcbiAgICBwcm90ZWN0ZWQgdHJhbnNsYXRpb246IFRyYW5zbGF0aW9uU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgZmVhdHVyZXM/OiBGZWF0dXJlQ29uZmlnU2VydmljZVxuICApIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMucGFnZVR5cGUgPSBQYWdlVHlwZS5QUk9EVUNUX1BBR0U7XG4gIH1cblxuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgc2luY2UgdmVyc2lvbiAxLjNcbiAgICpcbiAgICogVGhlIHJlc29sdmUgbWV0aG9kIGlzIG5vIGxvbmdlciBwcmVmZXJyZWQgYW5kIHdpbGwgYmUgcmVtb3ZlZCB3aXRoIHJlbGVhc2UgMi4wLlxuICAgKiBUaGUgY2FsbGVyIGBQYWdlTWV0YVNlcnZpY2VgIHNlcnZpY2UgaXMgaW1wcm92ZWQgdG8gZXhwZWN0IGFsbCBpbmRpdmlkdWFsIHJlc29sdmVyc1xuICAgKiBpbnN0ZWFkLCBzbyB0aGF0IHRoZSBjb2RlIGlzIGVhc2llciBleHRlbnNpYmxlLlxuICAgKi9cbiAgcmVzb2x2ZSgpOiBPYnNlcnZhYmxlPFBhZ2VNZXRhPiB8IGFueSB7XG4gICAgcmV0dXJuIHRoaXMucHJvZHVjdCQucGlwZShcbiAgICAgIHN3aXRjaE1hcCgocDogUHJvZHVjdCkgPT5cbiAgICAgICAgY29tYmluZUxhdGVzdChbXG4gICAgICAgICAgdGhpcy5yZXNvbHZlSGVhZGluZyhwKSxcbiAgICAgICAgICB0aGlzLnJlc29sdmVUaXRsZShwKSxcbiAgICAgICAgICB0aGlzLnJlc29sdmVEZXNjcmlwdGlvbihwKSxcbiAgICAgICAgICB0aGlzLnJlc29sdmVCcmVhZGNydW1iTGFiZWwoKS5waXBlKFxuICAgICAgICAgICAgc3dpdGNoTWFwKGxhYmVsID0+IHRoaXMucmVzb2x2ZUJyZWFkY3J1bWJzKHAsIGxhYmVsKSlcbiAgICAgICAgICApLFxuICAgICAgICAgIHRoaXMucmVzb2x2ZUltYWdlKHApLFxuICAgICAgICBdKVxuICAgICAgKSxcbiAgICAgIG1hcChcbiAgICAgICAgKFtoZWFkaW5nLCB0aXRsZSwgZGVzY3JpcHRpb24sIGJyZWFkY3J1bWJzLCBpbWFnZV06IFtcbiAgICAgICAgICBzdHJpbmcsXG4gICAgICAgICAgc3RyaW5nLFxuICAgICAgICAgIHN0cmluZyxcbiAgICAgICAgICBhbnlbXSxcbiAgICAgICAgICBzdHJpbmdcbiAgICAgICAgXSkgPT4gKHtcbiAgICAgICAgICBoZWFkaW5nLFxuICAgICAgICAgIHRpdGxlLFxuICAgICAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgICAgIGJyZWFkY3J1bWJzLFxuICAgICAgICAgIGltYWdlLFxuICAgICAgICB9KVxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICByZXNvbHZlSGVhZGluZygpOiBPYnNlcnZhYmxlPHN0cmluZz47XG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCBzaW5jZSB2ZXJzaW9uIDEuM1xuICAgKiBXaXRoIDIuMCwgdGhlIGFyZ3VtZW50KHMpIHdpbGwgYmUgcmVtb3ZlZCBhbmQgdGhlIHJldHVybiB0eXBlIHdpbGwgY2hhbmdlLiBVc2UgYHJlc29sdmVIZWFkaW5nKClgIGluc3RlYWRcbiAgICovXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogdW5pZmllZC1zaWduYXR1cmVzXG4gIHJlc29sdmVIZWFkaW5nKHByb2R1Y3Q6IFByb2R1Y3QpOiBPYnNlcnZhYmxlPHN0cmluZz47XG4gIHJlc29sdmVIZWFkaW5nKHByb2R1Y3Q/OiBQcm9kdWN0KTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcbiAgICBjb25zdCBwcm9kdWN0JCA9IHByb2R1Y3QgPyBvZihwcm9kdWN0KSA6IHRoaXMucHJvZHVjdCQ7XG4gICAgcmV0dXJuIHByb2R1Y3QkLnBpcGUoXG4gICAgICBzd2l0Y2hNYXAoKHA6IFByb2R1Y3QpID0+XG4gICAgICAgIHRoaXMudHJhbnNsYXRpb24udHJhbnNsYXRlKCdwYWdlTWV0YVJlc29sdmVyLnByb2R1Y3QuaGVhZGluZycsIHtcbiAgICAgICAgICBoZWFkaW5nOiBwLm5hbWUsXG4gICAgICAgIH0pXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIHJlc29sdmVUaXRsZSgpOiBPYnNlcnZhYmxlPHN0cmluZz47XG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCBzaW5jZSB2ZXJzaW9uIDEuM1xuICAgKiBXaXRoIDIuMCwgdGhlIGFyZ3VtZW50KHMpIHdpbGwgYmUgcmVtb3ZlZCBhbmQgdGhlIHJldHVybiB0eXBlIHdpbGwgY2hhbmdlLiBVc2UgYHJlc29sdmVUaXRsZSgpYCBpbnN0ZWFkXG4gICAqL1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IHVuaWZpZWQtc2lnbmF0dXJlc1xuICByZXNvbHZlVGl0bGUocHJvZHVjdDogUHJvZHVjdCk6IE9ic2VydmFibGU8c3RyaW5nPjtcbiAgcmVzb2x2ZVRpdGxlKHByb2R1Y3Q/OiBQcm9kdWN0KTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcbiAgICBjb25zdCBwcm9kdWN0JCA9IHByb2R1Y3QgPyBvZihwcm9kdWN0KSA6IHRoaXMucHJvZHVjdCQ7XG4gICAgcmV0dXJuIHByb2R1Y3QkLnBpcGUoXG4gICAgICBzd2l0Y2hNYXAoKHA6IFByb2R1Y3QpID0+IHtcbiAgICAgICAgbGV0IHRpdGxlID0gcC5uYW1lO1xuICAgICAgICB0aXRsZSArPSB0aGlzLnJlc29sdmVGaXJzdENhdGVnb3J5KHApO1xuICAgICAgICB0aXRsZSArPSB0aGlzLnJlc29sdmVNYW51ZmFjdHVyZXIocCk7XG4gICAgICAgIHJldHVybiB0aGlzLnRyYW5zbGF0aW9uLnRyYW5zbGF0ZSgncGFnZU1ldGFSZXNvbHZlci5wcm9kdWN0LnRpdGxlJywge1xuICAgICAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgICAgfSk7XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICByZXNvbHZlRGVzY3JpcHRpb24oKTogT2JzZXJ2YWJsZTxzdHJpbmc+O1xuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgc2luY2UgdmVyc2lvbiAxLjNcbiAgICogV2l0aCAyLjAsIHRoZSBhcmd1bWVudChzKSB3aWxsIGJlIHJlbW92ZWQgYW5kIHRoZSByZXR1cm4gdHlwZSB3aWxsIGNoYW5nZS4gVXNlIGByZXNvbHZlRGVzY3JpcHRpb24oKWAgaW5zdGVhZFxuICAgKi9cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiB1bmlmaWVkLXNpZ25hdHVyZXNcbiAgcmVzb2x2ZURlc2NyaXB0aW9uKHByb2R1Y3Q6IFByb2R1Y3QpOiBPYnNlcnZhYmxlPHN0cmluZz47XG4gIHJlc29sdmVEZXNjcmlwdGlvbihwcm9kdWN0PzogUHJvZHVjdCk6IE9ic2VydmFibGU8c3RyaW5nPiB7XG4gICAgY29uc3QgcHJvZHVjdCQ6IE9ic2VydmFibGU8UHJvZHVjdD4gPSBwcm9kdWN0ID8gb2YocHJvZHVjdCkgOiB0aGlzLnByb2R1Y3QkO1xuICAgIHJldHVybiBwcm9kdWN0JC5waXBlKFxuICAgICAgc3dpdGNoTWFwKChwOiBQcm9kdWN0KSA9PlxuICAgICAgICB0aGlzLnRyYW5zbGF0aW9uLnRyYW5zbGF0ZSgncGFnZU1ldGFSZXNvbHZlci5wcm9kdWN0LmRlc2NyaXB0aW9uJywge1xuICAgICAgICAgIGRlc2NyaXB0aW9uOiBwLnN1bW1hcnksXG4gICAgICAgIH0pXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCBzaW5jZSB2ZXJzaW9uIDEuM1xuICAgKiBUaGlzIG1ldGhvZCB3aWxsIGJlIHJlbW92ZWQgd2l0aCB3aXRoIDIuMFxuICAgKi9cbiAgcmVzb2x2ZUJyZWFkY3J1bWJMYWJlbCgpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xuICAgIHJldHVybiB0aGlzLnRyYW5zbGF0aW9uLnRyYW5zbGF0ZSgnY29tbW9uLmhvbWUnKTtcbiAgfVxuXG4gIHJlc29sdmVCcmVhZGNydW1icygpOiBPYnNlcnZhYmxlPGFueVtdPjtcbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIHNpbmNlIHZlcnNpb24gMS4zXG4gICAqIFdpdGggMi4wLCB0aGUgYXJndW1lbnQocykgd2lsbCBiZSByZW1vdmVkIGFuZCB0aGUgcmV0dXJuIHR5cGUgd2lsbCBjaGFuZ2UuIFVzZSBgcmVzb2x2ZUJyZWFkY3J1bWJzKClgIGluc3RlYWRcbiAgICovXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogdW5pZmllZC1zaWduYXR1cmVzXG4gIHJlc29sdmVCcmVhZGNydW1icyhcbiAgICBwcm9kdWN0OiBQcm9kdWN0LFxuICAgIGJyZWFkY3J1bWJMYWJlbDogc3RyaW5nXG4gICk6IE9ic2VydmFibGU8YW55W10+O1xuICByZXNvbHZlQnJlYWRjcnVtYnMoXG4gICAgcHJvZHVjdD86IFByb2R1Y3QsXG4gICAgYnJlYWRjcnVtYkxhYmVsPzogc3RyaW5nXG4gICk6IE9ic2VydmFibGU8YW55W10+IHtcbiAgICBjb25zdCBzb3VyY2VzID1cbiAgICAgIHByb2R1Y3QgJiYgYnJlYWRjcnVtYkxhYmVsXG4gICAgICAgID8gW29mKHByb2R1Y3QpLCBvZihicmVhZGNydW1iTGFiZWwpXVxuICAgICAgICA6IFt0aGlzLnByb2R1Y3QkLnBpcGUoKSwgdGhpcy50cmFuc2xhdGlvbi50cmFuc2xhdGUoJ2NvbW1vbi5ob21lJyldO1xuXG4gICAgcmV0dXJuIGNvbWJpbmVMYXRlc3Qoc291cmNlcykucGlwZShcbiAgICAgIG1hcCgoW3AsIGxhYmVsXTogW1Byb2R1Y3QsIHN0cmluZ10pID0+IHtcbiAgICAgICAgY29uc3QgYnJlYWRjcnVtYnMgPSBbXTtcbiAgICAgICAgYnJlYWRjcnVtYnMucHVzaCh7IGxhYmVsOiBsYWJlbCwgbGluazogJy8nIH0pO1xuICAgICAgICBmb3IgKGNvbnN0IHsgbmFtZSwgY29kZSwgdXJsIH0gb2YgcC5jYXRlZ29yaWVzIHx8IFtdKSB7XG4gICAgICAgICAgYnJlYWRjcnVtYnMucHVzaCh7XG4gICAgICAgICAgICBsYWJlbDogbmFtZSB8fCBjb2RlLFxuICAgICAgICAgICAgbGluazogdXJsLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBicmVhZGNydW1icztcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIHJlc29sdmVJbWFnZSgpOiBPYnNlcnZhYmxlPHN0cmluZz47XG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCBzaW5jZSB2ZXJzaW9uIDEuM1xuICAgKiBXaXRoIDIuMCwgdGhlIGFyZ3VtZW50KHMpIHdpbGwgYmUgcmVtb3ZlZCBhbmQgdGhlIHJldHVybiB0eXBlIHdpbGwgY2hhbmdlLiBVc2UgYHJlc29sdmVJbWFnZSgpYCBpbnN0ZWFkXG4gICAqL1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IHVuaWZpZWQtc2lnbmF0dXJlc1xuICByZXNvbHZlSW1hZ2UocHJvZHVjdDogUHJvZHVjdCk6IE9ic2VydmFibGU8c3RyaW5nPjtcbiAgcmVzb2x2ZUltYWdlKHByb2R1Y3Q/OiBQcm9kdWN0KTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcbiAgICBjb25zdCBwcm9kdWN0JDogT2JzZXJ2YWJsZTxQcm9kdWN0PiA9IHByb2R1Y3QgPyBvZihwcm9kdWN0KSA6IHRoaXMucHJvZHVjdCQ7XG4gICAgcmV0dXJuIHByb2R1Y3QkLnBpcGUoXG4gICAgICBtYXAoKHA6IFByb2R1Y3QpID0+XG4gICAgICAgIHAuaW1hZ2VzICYmXG4gICAgICAgIHAuaW1hZ2VzLlBSSU1BUlkgJiZcbiAgICAgICAgKDxhbnk+cC5pbWFnZXMuUFJJTUFSWSkuem9vbSAmJlxuICAgICAgICAoPGFueT5wLmltYWdlcy5QUklNQVJZKS56b29tLnVybFxuICAgICAgICAgID8gKDxhbnk+cC5pbWFnZXMuUFJJTUFSWSkuem9vbS51cmxcbiAgICAgICAgICA6IG51bGxcbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSByZXNvbHZlRmlyc3RDYXRlZ29yeShwcm9kdWN0OiBQcm9kdWN0KTogc3RyaW5nIHtcbiAgICBsZXQgZmlyc3RDYXRlZ29yeTtcbiAgICBpZiAocHJvZHVjdC5jYXRlZ29yaWVzICYmIHByb2R1Y3QuY2F0ZWdvcmllcy5sZW5ndGggPiAwKSB7XG4gICAgICBmaXJzdENhdGVnb3J5ID0gcHJvZHVjdC5jYXRlZ29yaWVzWzBdO1xuICAgIH1cbiAgICByZXR1cm4gZmlyc3RDYXRlZ29yeVxuICAgICAgPyBgIHwgJHtmaXJzdENhdGVnb3J5Lm5hbWUgfHwgZmlyc3RDYXRlZ29yeS5jb2RlfWBcbiAgICAgIDogJyc7XG4gIH1cblxuICBwcml2YXRlIHJlc29sdmVNYW51ZmFjdHVyZXIocHJvZHVjdDogUHJvZHVjdCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHByb2R1Y3QubWFudWZhY3R1cmVyID8gYCB8ICR7cHJvZHVjdC5tYW51ZmFjdHVyZXJ9YCA6ICcnO1xuICB9XG59XG4iXX0=