/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { combineLatest, of } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';
import { PageRobotsMeta } from '../../cms/model/page.model';
import { PageMetaResolver } from '../../cms/page/page-meta.resolver';
import { TranslationService } from '../../i18n/translation.service';
import { PageType } from '../../model/cms.model';
import { RoutingService } from '../../routing/facade/routing.service';
import { ProductService } from '../facade/product.service';
import { FeatureConfigService } from '../../features-config/services/feature-config.service';
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
export class ProductPageMetaResolver extends PageMetaResolver {
    /**
     * @param {?} routingService
     * @param {?} productService
     * @param {?} translation
     * @param {?=} features
     */
    constructor(routingService, productService, translation, features) {
        super();
        this.routingService = routingService;
        this.productService = productService;
        this.translation = translation;
        this.features = features;
        this.PRODUCT_SCOPE = this.features && this.features.isLevel('1.4') ? ProductScope.DETAILS : '';
        // reusable observable for product data based on the current page
        this.product$ = this.routingService.getRouterState().pipe(map((/**
         * @param {?} state
         * @return {?}
         */
        state => state.state.params['productCode'])), filter((/**
         * @param {?} code
         * @return {?}
         */
        code => !!code)), switchMap((/**
         * @param {?} code
         * @return {?}
         */
        code => this.productService.get(code, this.PRODUCT_SCOPE))), filter(Boolean));
        this.pageType = PageType.PRODUCT_PAGE;
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
        return this.product$.pipe(switchMap((/**
         * @param {?} p
         * @return {?}
         */
        (p) => combineLatest([
            this.resolveHeading(p),
            this.resolveTitle(p),
            this.resolveDescription(p),
            this.resolveBreadcrumbLabel().pipe(switchMap((/**
             * @param {?} label
             * @return {?}
             */
            label => this.resolveBreadcrumbs(p, label)))),
            this.resolveImage(p),
            this.resolveRobots(p),
        ]))), map((/**
         * @param {?} __0
         * @return {?}
         */
        ([heading, title, description, breadcrumbs, image, robots]) => ({
            heading,
            title,
            description,
            breadcrumbs,
            image,
            robots,
        }))));
    }
    /**
     * @param {?=} product
     * @return {?}
     */
    resolveHeading(product) {
        /** @type {?} */
        const product$ = product ? of(product) : this.product$;
        return product$.pipe(switchMap((/**
         * @param {?} p
         * @return {?}
         */
        (p) => this.translation.translate('pageMetaResolver.product.heading', {
            heading: p.name,
        }))));
    }
    /**
     * @param {?=} product
     * @return {?}
     */
    resolveTitle(product) {
        /** @type {?} */
        const product$ = product ? of(product) : this.product$;
        return product$.pipe(switchMap((/**
         * @param {?} p
         * @return {?}
         */
        (p) => {
            /** @type {?} */
            let title = p.name;
            title += this.resolveFirstCategory(p);
            title += this.resolveManufacturer(p);
            return this.translation.translate('pageMetaResolver.product.title', {
                title: title,
            });
        })));
    }
    /**
     * @param {?=} product
     * @return {?}
     */
    resolveDescription(product) {
        /** @type {?} */
        const product$ = product ? of(product) : this.product$;
        return product$.pipe(switchMap((/**
         * @param {?} p
         * @return {?}
         */
        (p) => this.translation.translate('pageMetaResolver.product.description', {
            description: p.summary,
        }))));
    }
    /**
     * @deprecated since version 1.3
     * This method will be removed with with 2.0
     * @return {?}
     */
    resolveBreadcrumbLabel() {
        return this.translation.translate('common.home');
    }
    /**
     * @param {?=} product
     * @param {?=} breadcrumbLabel
     * @return {?}
     */
    resolveBreadcrumbs(product, breadcrumbLabel) {
        /** @type {?} */
        const sources = product && breadcrumbLabel
            ? [of(product), of(breadcrumbLabel)]
            : [this.product$.pipe(), this.translation.translate('common.home')];
        return combineLatest(sources).pipe(map((/**
         * @param {?} __0
         * @return {?}
         */
        ([p, label]) => {
            /** @type {?} */
            const breadcrumbs = [];
            breadcrumbs.push({ label: label, link: '/' });
            for (const { name, code, url } of p.categories || []) {
                breadcrumbs.push({
                    label: name || code,
                    link: url,
                });
            }
            return breadcrumbs;
        })));
    }
    /**
     * @param {?=} product
     * @return {?}
     */
    resolveImage(product) {
        /** @type {?} */
        const product$ = product ? of(product) : this.product$;
        return product$.pipe(map((/**
         * @param {?} p
         * @return {?}
         */
        (p) => p.images &&
            p.images.PRIMARY &&
            ((/** @type {?} */ (p.images.PRIMARY))).zoom &&
            ((/** @type {?} */ (p.images.PRIMARY))).zoom.url
            ? ((/** @type {?} */ (p.images.PRIMARY))).zoom.url
            : null)));
    }
    /**
     * @private
     * @param {?} product
     * @return {?}
     */
    resolveFirstCategory(product) {
        /** @type {?} */
        let firstCategory;
        if (product.categories && product.categories.length > 0) {
            firstCategory = product.categories[0];
        }
        return firstCategory
            ? ` | ${firstCategory.name || firstCategory.code}`
            : '';
    }
    /**
     * @private
     * @param {?} product
     * @return {?}
     */
    resolveManufacturer(product) {
        return product.manufacturer ? ` | ${product.manufacturer}` : '';
    }
    /**
     * @param {?=} product
     * @return {?}
     */
    resolveRobots(product) {
        /** @type {?} */
        const product$ = product ? of(product) : this.product$;
        return product$.pipe(switchMap((/**
         * @param {?} p
         * @return {?}
         */
        (p) => {
            if (!p.purchasable) {
                return of([PageRobotsMeta.FOLLOW, PageRobotsMeta.NOINDEX]);
            }
            else {
                return of([PageRobotsMeta.FOLLOW, PageRobotsMeta.INDEX]);
            }
        })));
    }
}
ProductPageMetaResolver.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
ProductPageMetaResolver.ctorParameters = () => [
    { type: RoutingService },
    { type: ProductService },
    { type: TranslationService },
    { type: FeatureConfigService }
];
/** @nocollapse */ ProductPageMetaResolver.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function ProductPageMetaResolver_Factory() { return new ProductPageMetaResolver(i0.ɵɵinject(i1.RoutingService), i0.ɵɵinject(i2.ProductService), i0.ɵɵinject(i3.TranslationService), i0.ɵɵinject(i4.FeatureConfigService)); }, token: ProductPageMetaResolver, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1wYWdlLW1ldGEucmVzb2x2ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvcHJvZHVjdC9zZXJ2aWNlcy9wcm9kdWN0LXBhZ2UtbWV0YS5yZXNvbHZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsYUFBYSxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNyRCxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4RCxPQUFPLEVBQVksY0FBYyxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDdEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFRckUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDcEUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRWpELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUN0RSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDM0QsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sdURBQXVELENBQUM7QUFDN0YsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHdCQUF3QixDQUFDOzs7Ozs7Ozs7Ozs7O0FBWXRELE1BQU0sT0FBTyx1QkFBd0IsU0FBUSxnQkFBZ0I7Ozs7Ozs7SUFrQjNELFlBQ1ksY0FBOEIsRUFDOUIsY0FBOEIsRUFDOUIsV0FBK0IsRUFDL0IsUUFBK0I7UUFFekMsS0FBSyxFQUFFLENBQUM7UUFMRSxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLGdCQUFXLEdBQVgsV0FBVyxDQUFvQjtRQUMv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SUFDekMsMkNBQXlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgY29tYmluZUxhdGVzdCwgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgbWFwLCBzd2l0Y2hNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBQYWdlTWV0YSwgUGFnZVJvYm90c01ldGEgfSBmcm9tICcuLi8uLi9jbXMvbW9kZWwvcGFnZS5tb2RlbCc7XG5pbXBvcnQgeyBQYWdlTWV0YVJlc29sdmVyIH0gZnJvbSAnLi4vLi4vY21zL3BhZ2UvcGFnZS1tZXRhLnJlc29sdmVyJztcbmltcG9ydCB7XG4gIFBhZ2VCcmVhZGNydW1iUmVzb2x2ZXIsXG4gIFBhZ2VEZXNjcmlwdGlvblJlc29sdmVyLFxuICBQYWdlSGVhZGluZ1Jlc29sdmVyLFxuICBQYWdlSW1hZ2VSZXNvbHZlcixcbiAgUGFnZVRpdGxlUmVzb2x2ZXIsXG59IGZyb20gJy4uLy4uL2Ntcy9wYWdlL3BhZ2UucmVzb2x2ZXJzJztcbmltcG9ydCB7IFRyYW5zbGF0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uL2kxOG4vdHJhbnNsYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBQYWdlVHlwZSB9IGZyb20gJy4uLy4uL21vZGVsL2Ntcy5tb2RlbCc7XG5pbXBvcnQgeyBQcm9kdWN0IH0gZnJvbSAnLi4vLi4vbW9kZWwvcHJvZHVjdC5tb2RlbCc7XG5pbXBvcnQgeyBSb3V0aW5nU2VydmljZSB9IGZyb20gJy4uLy4uL3JvdXRpbmcvZmFjYWRlL3JvdXRpbmcuc2VydmljZSc7XG5pbXBvcnQgeyBQcm9kdWN0U2VydmljZSB9IGZyb20gJy4uL2ZhY2FkZS9wcm9kdWN0LnNlcnZpY2UnO1xuaW1wb3J0IHsgRmVhdHVyZUNvbmZpZ1NlcnZpY2UgfSBmcm9tICcuLi8uLi9mZWF0dXJlcy1jb25maWcvc2VydmljZXMvZmVhdHVyZS1jb25maWcuc2VydmljZSc7XG5pbXBvcnQgeyBQcm9kdWN0U2NvcGUgfSBmcm9tICcuLi9tb2RlbC9wcm9kdWN0LXNjb3BlJztcblxuLyoqXG4gKiBSZXNvbHZlcyB0aGUgcGFnZSBkYXRhIGZvciB0aGUgUHJvZHVjdCBEZXRhaWwgUGFnZVxuICogYmFzZWQgb24gdGhlIGBQYWdlVHlwZS5QUk9EVUNUX1BBR0VgLlxuICpcbiAqIFRoZSBwYWdlIHRpdGxlLCBoZWFkaW5nLCBkZXNjcmlwdGlvbiwgYnJlYWRjcnVtYnMgYW5kXG4gKiBmaXJzdCBHQUxMRVJZIGltYWdlIGFyZSByZXNvbHZlZCBpZiBhdmFpbGFibGUgaW4gdGhlIGRhdGEuXG4gKi9cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBQcm9kdWN0UGFnZU1ldGFSZXNvbHZlciBleHRlbmRzIFBhZ2VNZXRhUmVzb2x2ZXJcbiAgaW1wbGVtZW50c1xuICAgIFBhZ2VIZWFkaW5nUmVzb2x2ZXIsXG4gICAgUGFnZVRpdGxlUmVzb2x2ZXIsXG4gICAgUGFnZURlc2NyaXB0aW9uUmVzb2x2ZXIsXG4gICAgUGFnZUJyZWFkY3J1bWJSZXNvbHZlcixcbiAgICBQYWdlSW1hZ2VSZXNvbHZlciB7XG4gIHByb3RlY3RlZCByZWFkb25seSBQUk9EVUNUX1NDT1BFID1cbiAgICB0aGlzLmZlYXR1cmVzICYmIHRoaXMuZmVhdHVyZXMuaXNMZXZlbCgnMS40JykgPyBQcm9kdWN0U2NvcGUuREVUQUlMUyA6ICcnO1xuXG4gIC8vIHJldXNhYmxlIG9ic2VydmFibGUgZm9yIHByb2R1Y3QgZGF0YSBiYXNlZCBvbiB0aGUgY3VycmVudCBwYWdlXG4gIHByaXZhdGUgcHJvZHVjdCQgPSB0aGlzLnJvdXRpbmdTZXJ2aWNlLmdldFJvdXRlclN0YXRlKCkucGlwZShcbiAgICBtYXAoc3RhdGUgPT4gc3RhdGUuc3RhdGUucGFyYW1zWydwcm9kdWN0Q29kZSddKSxcbiAgICBmaWx0ZXIoY29kZSA9PiAhIWNvZGUpLFxuICAgIHN3aXRjaE1hcChjb2RlID0+IHRoaXMucHJvZHVjdFNlcnZpY2UuZ2V0KGNvZGUsIHRoaXMuUFJPRFVDVF9TQ09QRSkpLFxuICAgIGZpbHRlcihCb29sZWFuKVxuICApO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCByb3V0aW5nU2VydmljZTogUm91dGluZ1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHByb2R1Y3RTZXJ2aWNlOiBQcm9kdWN0U2VydmljZSxcbiAgICBwcm90ZWN0ZWQgdHJhbnNsYXRpb246IFRyYW5zbGF0aW9uU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgZmVhdHVyZXM/OiBGZWF0dXJlQ29uZmlnU2VydmljZVxuICApIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMucGFnZVR5cGUgPSBQYWdlVHlwZS5QUk9EVUNUX1BBR0U7XG4gIH1cblxuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgc2luY2UgdmVyc2lvbiAxLjNcbiAgICpcbiAgICogVGhlIHJlc29sdmUgbWV0aG9kIGlzIG5vIGxvbmdlciBwcmVmZXJyZWQgYW5kIHdpbGwgYmUgcmVtb3ZlZCB3aXRoIHJlbGVhc2UgMi4wLlxuICAgKiBUaGUgY2FsbGVyIGBQYWdlTWV0YVNlcnZpY2VgIHNlcnZpY2UgaXMgaW1wcm92ZWQgdG8gZXhwZWN0IGFsbCBpbmRpdmlkdWFsIHJlc29sdmVyc1xuICAgKiBpbnN0ZWFkLCBzbyB0aGF0IHRoZSBjb2RlIGlzIGVhc2llciBleHRlbnNpYmxlLlxuICAgKi9cbiAgcmVzb2x2ZSgpOiBPYnNlcnZhYmxlPFBhZ2VNZXRhPiB8IGFueSB7XG4gICAgcmV0dXJuIHRoaXMucHJvZHVjdCQucGlwZShcbiAgICAgIHN3aXRjaE1hcCgocDogUHJvZHVjdCkgPT5cbiAgICAgICAgY29tYmluZUxhdGVzdChbXG4gICAgICAgICAgdGhpcy5yZXNvbHZlSGVhZGluZyhwKSxcbiAgICAgICAgICB0aGlzLnJlc29sdmVUaXRsZShwKSxcbiAgICAgICAgICB0aGlzLnJlc29sdmVEZXNjcmlwdGlvbihwKSxcbiAgICAgICAgICB0aGlzLnJlc29sdmVCcmVhZGNydW1iTGFiZWwoKS5waXBlKFxuICAgICAgICAgICAgc3dpdGNoTWFwKGxhYmVsID0+IHRoaXMucmVzb2x2ZUJyZWFkY3J1bWJzKHAsIGxhYmVsKSlcbiAgICAgICAgICApLFxuICAgICAgICAgIHRoaXMucmVzb2x2ZUltYWdlKHApLFxuICAgICAgICAgIHRoaXMucmVzb2x2ZVJvYm90cyhwKSxcbiAgICAgICAgXSlcbiAgICAgICksXG4gICAgICBtYXAoXG4gICAgICAgIChbaGVhZGluZywgdGl0bGUsIGRlc2NyaXB0aW9uLCBicmVhZGNydW1icywgaW1hZ2UsIHJvYm90c106IFtcbiAgICAgICAgICBzdHJpbmcsXG4gICAgICAgICAgc3RyaW5nLFxuICAgICAgICAgIHN0cmluZyxcbiAgICAgICAgICBhbnlbXSxcbiAgICAgICAgICBzdHJpbmcsXG4gICAgICAgICAgc3RyaW5nW11cbiAgICAgICAgXSkgPT4gKHtcbiAgICAgICAgICBoZWFkaW5nLFxuICAgICAgICAgIHRpdGxlLFxuICAgICAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgICAgIGJyZWFkY3J1bWJzLFxuICAgICAgICAgIGltYWdlLFxuICAgICAgICAgIHJvYm90cyxcbiAgICAgICAgfSlcbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgcmVzb2x2ZUhlYWRpbmcoKTogT2JzZXJ2YWJsZTxzdHJpbmc+O1xuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgc2luY2UgdmVyc2lvbiAxLjNcbiAgICogV2l0aCAyLjAsIHRoZSBhcmd1bWVudChzKSB3aWxsIGJlIHJlbW92ZWQgYW5kIHRoZSByZXR1cm4gdHlwZSB3aWxsIGNoYW5nZS4gVXNlIGByZXNvbHZlSGVhZGluZygpYCBpbnN0ZWFkXG4gICAqL1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IHVuaWZpZWQtc2lnbmF0dXJlc1xuICByZXNvbHZlSGVhZGluZyhwcm9kdWN0OiBQcm9kdWN0KTogT2JzZXJ2YWJsZTxzdHJpbmc+O1xuICByZXNvbHZlSGVhZGluZyhwcm9kdWN0PzogUHJvZHVjdCk6IE9ic2VydmFibGU8c3RyaW5nPiB7XG4gICAgY29uc3QgcHJvZHVjdCQgPSBwcm9kdWN0ID8gb2YocHJvZHVjdCkgOiB0aGlzLnByb2R1Y3QkO1xuICAgIHJldHVybiBwcm9kdWN0JC5waXBlKFxuICAgICAgc3dpdGNoTWFwKChwOiBQcm9kdWN0KSA9PlxuICAgICAgICB0aGlzLnRyYW5zbGF0aW9uLnRyYW5zbGF0ZSgncGFnZU1ldGFSZXNvbHZlci5wcm9kdWN0LmhlYWRpbmcnLCB7XG4gICAgICAgICAgaGVhZGluZzogcC5uYW1lLFxuICAgICAgICB9KVxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICByZXNvbHZlVGl0bGUoKTogT2JzZXJ2YWJsZTxzdHJpbmc+O1xuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgc2luY2UgdmVyc2lvbiAxLjNcbiAgICogV2l0aCAyLjAsIHRoZSBhcmd1bWVudChzKSB3aWxsIGJlIHJlbW92ZWQgYW5kIHRoZSByZXR1cm4gdHlwZSB3aWxsIGNoYW5nZS4gVXNlIGByZXNvbHZlVGl0bGUoKWAgaW5zdGVhZFxuICAgKi9cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiB1bmlmaWVkLXNpZ25hdHVyZXNcbiAgcmVzb2x2ZVRpdGxlKHByb2R1Y3Q6IFByb2R1Y3QpOiBPYnNlcnZhYmxlPHN0cmluZz47XG4gIHJlc29sdmVUaXRsZShwcm9kdWN0PzogUHJvZHVjdCk6IE9ic2VydmFibGU8c3RyaW5nPiB7XG4gICAgY29uc3QgcHJvZHVjdCQgPSBwcm9kdWN0ID8gb2YocHJvZHVjdCkgOiB0aGlzLnByb2R1Y3QkO1xuICAgIHJldHVybiBwcm9kdWN0JC5waXBlKFxuICAgICAgc3dpdGNoTWFwKChwOiBQcm9kdWN0KSA9PiB7XG4gICAgICAgIGxldCB0aXRsZSA9IHAubmFtZTtcbiAgICAgICAgdGl0bGUgKz0gdGhpcy5yZXNvbHZlRmlyc3RDYXRlZ29yeShwKTtcbiAgICAgICAgdGl0bGUgKz0gdGhpcy5yZXNvbHZlTWFudWZhY3R1cmVyKHApO1xuICAgICAgICByZXR1cm4gdGhpcy50cmFuc2xhdGlvbi50cmFuc2xhdGUoJ3BhZ2VNZXRhUmVzb2x2ZXIucHJvZHVjdC50aXRsZScsIHtcbiAgICAgICAgICB0aXRsZTogdGl0bGUsXG4gICAgICAgIH0pO1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgcmVzb2x2ZURlc2NyaXB0aW9uKCk6IE9ic2VydmFibGU8c3RyaW5nPjtcbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIHNpbmNlIHZlcnNpb24gMS4zXG4gICAqIFdpdGggMi4wLCB0aGUgYXJndW1lbnQocykgd2lsbCBiZSByZW1vdmVkIGFuZCB0aGUgcmV0dXJuIHR5cGUgd2lsbCBjaGFuZ2UuIFVzZSBgcmVzb2x2ZURlc2NyaXB0aW9uKClgIGluc3RlYWRcbiAgICovXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogdW5pZmllZC1zaWduYXR1cmVzXG4gIHJlc29sdmVEZXNjcmlwdGlvbihwcm9kdWN0OiBQcm9kdWN0KTogT2JzZXJ2YWJsZTxzdHJpbmc+O1xuICByZXNvbHZlRGVzY3JpcHRpb24ocHJvZHVjdD86IFByb2R1Y3QpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xuICAgIGNvbnN0IHByb2R1Y3QkOiBPYnNlcnZhYmxlPFByb2R1Y3Q+ID0gcHJvZHVjdCA/IG9mKHByb2R1Y3QpIDogdGhpcy5wcm9kdWN0JDtcbiAgICByZXR1cm4gcHJvZHVjdCQucGlwZShcbiAgICAgIHN3aXRjaE1hcCgocDogUHJvZHVjdCkgPT5cbiAgICAgICAgdGhpcy50cmFuc2xhdGlvbi50cmFuc2xhdGUoJ3BhZ2VNZXRhUmVzb2x2ZXIucHJvZHVjdC5kZXNjcmlwdGlvbicsIHtcbiAgICAgICAgICBkZXNjcmlwdGlvbjogcC5zdW1tYXJ5LFxuICAgICAgICB9KVxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgc2luY2UgdmVyc2lvbiAxLjNcbiAgICogVGhpcyBtZXRob2Qgd2lsbCBiZSByZW1vdmVkIHdpdGggd2l0aCAyLjBcbiAgICovXG4gIHJlc29sdmVCcmVhZGNydW1iTGFiZWwoKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gdGhpcy50cmFuc2xhdGlvbi50cmFuc2xhdGUoJ2NvbW1vbi5ob21lJyk7XG4gIH1cblxuICByZXNvbHZlQnJlYWRjcnVtYnMoKTogT2JzZXJ2YWJsZTxhbnlbXT47XG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCBzaW5jZSB2ZXJzaW9uIDEuM1xuICAgKiBXaXRoIDIuMCwgdGhlIGFyZ3VtZW50KHMpIHdpbGwgYmUgcmVtb3ZlZCBhbmQgdGhlIHJldHVybiB0eXBlIHdpbGwgY2hhbmdlLiBVc2UgYHJlc29sdmVCcmVhZGNydW1icygpYCBpbnN0ZWFkXG4gICAqL1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IHVuaWZpZWQtc2lnbmF0dXJlc1xuICByZXNvbHZlQnJlYWRjcnVtYnMoXG4gICAgcHJvZHVjdDogUHJvZHVjdCxcbiAgICBicmVhZGNydW1iTGFiZWw6IHN0cmluZ1xuICApOiBPYnNlcnZhYmxlPGFueVtdPjtcbiAgcmVzb2x2ZUJyZWFkY3J1bWJzKFxuICAgIHByb2R1Y3Q/OiBQcm9kdWN0LFxuICAgIGJyZWFkY3J1bWJMYWJlbD86IHN0cmluZ1xuICApOiBPYnNlcnZhYmxlPGFueVtdPiB7XG4gICAgY29uc3Qgc291cmNlcyA9XG4gICAgICBwcm9kdWN0ICYmIGJyZWFkY3J1bWJMYWJlbFxuICAgICAgICA/IFtvZihwcm9kdWN0KSwgb2YoYnJlYWRjcnVtYkxhYmVsKV1cbiAgICAgICAgOiBbdGhpcy5wcm9kdWN0JC5waXBlKCksIHRoaXMudHJhbnNsYXRpb24udHJhbnNsYXRlKCdjb21tb24uaG9tZScpXTtcblxuICAgIHJldHVybiBjb21iaW5lTGF0ZXN0KHNvdXJjZXMpLnBpcGUoXG4gICAgICBtYXAoKFtwLCBsYWJlbF06IFtQcm9kdWN0LCBzdHJpbmddKSA9PiB7XG4gICAgICAgIGNvbnN0IGJyZWFkY3J1bWJzID0gW107XG4gICAgICAgIGJyZWFkY3J1bWJzLnB1c2goeyBsYWJlbDogbGFiZWwsIGxpbms6ICcvJyB9KTtcbiAgICAgICAgZm9yIChjb25zdCB7IG5hbWUsIGNvZGUsIHVybCB9IG9mIHAuY2F0ZWdvcmllcyB8fCBbXSkge1xuICAgICAgICAgIGJyZWFkY3J1bWJzLnB1c2goe1xuICAgICAgICAgICAgbGFiZWw6IG5hbWUgfHwgY29kZSxcbiAgICAgICAgICAgIGxpbms6IHVybCxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYnJlYWRjcnVtYnM7XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICByZXNvbHZlSW1hZ2UoKTogT2JzZXJ2YWJsZTxzdHJpbmc+O1xuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgc2luY2UgdmVyc2lvbiAxLjNcbiAgICogV2l0aCAyLjAsIHRoZSBhcmd1bWVudChzKSB3aWxsIGJlIHJlbW92ZWQgYW5kIHRoZSByZXR1cm4gdHlwZSB3aWxsIGNoYW5nZS4gVXNlIGByZXNvbHZlSW1hZ2UoKWAgaW5zdGVhZFxuICAgKi9cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiB1bmlmaWVkLXNpZ25hdHVyZXNcbiAgcmVzb2x2ZUltYWdlKHByb2R1Y3Q6IFByb2R1Y3QpOiBPYnNlcnZhYmxlPHN0cmluZz47XG4gIHJlc29sdmVJbWFnZShwcm9kdWN0PzogUHJvZHVjdCk6IE9ic2VydmFibGU8c3RyaW5nPiB7XG4gICAgY29uc3QgcHJvZHVjdCQ6IE9ic2VydmFibGU8UHJvZHVjdD4gPSBwcm9kdWN0ID8gb2YocHJvZHVjdCkgOiB0aGlzLnByb2R1Y3QkO1xuICAgIHJldHVybiBwcm9kdWN0JC5waXBlKFxuICAgICAgbWFwKChwOiBQcm9kdWN0KSA9PlxuICAgICAgICBwLmltYWdlcyAmJlxuICAgICAgICBwLmltYWdlcy5QUklNQVJZICYmXG4gICAgICAgICg8YW55PnAuaW1hZ2VzLlBSSU1BUlkpLnpvb20gJiZcbiAgICAgICAgKDxhbnk+cC5pbWFnZXMuUFJJTUFSWSkuem9vbS51cmxcbiAgICAgICAgICA/ICg8YW55PnAuaW1hZ2VzLlBSSU1BUlkpLnpvb20udXJsXG4gICAgICAgICAgOiBudWxsXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgcmVzb2x2ZUZpcnN0Q2F0ZWdvcnkocHJvZHVjdDogUHJvZHVjdCk6IHN0cmluZyB7XG4gICAgbGV0IGZpcnN0Q2F0ZWdvcnk7XG4gICAgaWYgKHByb2R1Y3QuY2F0ZWdvcmllcyAmJiBwcm9kdWN0LmNhdGVnb3JpZXMubGVuZ3RoID4gMCkge1xuICAgICAgZmlyc3RDYXRlZ29yeSA9IHByb2R1Y3QuY2F0ZWdvcmllc1swXTtcbiAgICB9XG4gICAgcmV0dXJuIGZpcnN0Q2F0ZWdvcnlcbiAgICAgID8gYCB8ICR7Zmlyc3RDYXRlZ29yeS5uYW1lIHx8IGZpcnN0Q2F0ZWdvcnkuY29kZX1gXG4gICAgICA6ICcnO1xuICB9XG5cbiAgcHJpdmF0ZSByZXNvbHZlTWFudWZhY3R1cmVyKHByb2R1Y3Q6IFByb2R1Y3QpOiBzdHJpbmcge1xuICAgIHJldHVybiBwcm9kdWN0Lm1hbnVmYWN0dXJlciA/IGAgfCAke3Byb2R1Y3QubWFudWZhY3R1cmVyfWAgOiAnJztcbiAgfVxuXG4gIHJlc29sdmVSb2JvdHMoKTogT2JzZXJ2YWJsZTxQYWdlUm9ib3RzTWV0YVtdPjtcbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIHNpbmNlIHZlcnNpb24gMS4zXG4gICAqIFdpdGggMi4wLCB0aGUgYXJndW1lbnQocykgd2lsbCBiZSByZW1vdmVkIGFuZCB0aGUgcmV0dXJuIHR5cGUgd2lsbCBjaGFuZ2UuIFVzZSBgcmVzb2x2ZVJvYm90cygpYCBpbnN0ZWFkXG4gICAqL1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IHVuaWZpZWQtc2lnbmF0dXJlc1xuICByZXNvbHZlUm9ib3RzKHByb2R1Y3Q6IFByb2R1Y3QpOiBPYnNlcnZhYmxlPFBhZ2VSb2JvdHNNZXRhW10+O1xuICByZXNvbHZlUm9ib3RzKHByb2R1Y3Q/OiBQcm9kdWN0KTogT2JzZXJ2YWJsZTxQYWdlUm9ib3RzTWV0YVtdPiB7XG4gICAgY29uc3QgcHJvZHVjdCQgPSBwcm9kdWN0ID8gb2YocHJvZHVjdCkgOiB0aGlzLnByb2R1Y3QkO1xuICAgIHJldHVybiBwcm9kdWN0JC5waXBlKFxuICAgICAgc3dpdGNoTWFwKChwOiBQcm9kdWN0KSA9PiB7XG4gICAgICAgIGlmICghcC5wdXJjaGFzYWJsZSkge1xuICAgICAgICAgIHJldHVybiBvZihbUGFnZVJvYm90c01ldGEuRk9MTE9XLCBQYWdlUm9ib3RzTWV0YS5OT0lOREVYXSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIG9mKFtQYWdlUm9ib3RzTWV0YS5GT0xMT1csIFBhZ2VSb2JvdHNNZXRhLklOREVYXSk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgKTtcbiAgfVxufVxuIl19