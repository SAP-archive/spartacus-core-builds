/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
        this.PRODUCT_SCOPE = this.features && this.features.isLevel('1.4') ? 'details' : '';
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
        ]))), map((/**
         * @param {?} __0
         * @return {?}
         */
        ([heading, title, description, breadcrumbs, image]) => ({
            heading,
            title,
            description,
            breadcrumbs,
            image,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1wYWdlLW1ldGEucmVzb2x2ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvcHJvZHVjdC9zZXJ2aWNlcy9wcm9kdWN0LXBhZ2UtbWV0YS5yZXNvbHZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsYUFBYSxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNyRCxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV4RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQVFyRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNwRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFakQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx1REFBdUQsQ0FBQzs7Ozs7Ozs7Ozs7OztBQVk3RixNQUFNLE9BQU8sdUJBQXdCLFNBQVEsZ0JBQWdCOzs7Ozs7O0lBa0IzRCxZQUNZLGNBQThCLEVBQzlCLGNBQThCLEVBQzlCLFdBQStCLEVBQy9CLFFBQStCO1FBRXpDLEtBQUssRUFBRSxDQUFDO1FBTEUsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixnQkFBVyxHQUFYLFdBQVcsQ0FBb0I7UUFDL0IsYUFBUSxHQUFSLFFBQVEsQ0FBdUI7UUFmeEIsa0JBQWEsR0FDOUIsSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8s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Q0FBQztJQUNULENBQUM7Ozs7OztJQUVPLG1CQUFtQixDQUFDLE9BQWdCO1FBQzFDLE9BQU8sT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsTUFBTSxPQUFPLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUNsRSxDQUFDOzs7WUF6TUYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7O1lBYlEsY0FBYztZQUNkLGNBQWM7WUFKZCxrQkFBa0I7WUFLbEIsb0JBQW9COzs7Ozs7OztJQW1CM0IsZ0RBQ2lFOzs7OztJQUdqRSwyQ0FLRTs7Ozs7SUFHQSxpREFBd0M7Ozs7O0lBQ3hDLGlEQUF3Qzs7Ozs7SUFDeEMsOENBQXlDOzs7OztJQUN6QywyQ0FBeUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBjb21iaW5lTGF0ZXN0LCBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCBtYXAsIHN3aXRjaE1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFBhZ2VNZXRhIH0gZnJvbSAnLi4vLi4vY21zL21vZGVsL3BhZ2UubW9kZWwnO1xuaW1wb3J0IHsgUGFnZU1ldGFSZXNvbHZlciB9IGZyb20gJy4uLy4uL2Ntcy9wYWdlL3BhZ2UtbWV0YS5yZXNvbHZlcic7XG5pbXBvcnQge1xuICBQYWdlQnJlYWRjcnVtYlJlc29sdmVyLFxuICBQYWdlRGVzY3JpcHRpb25SZXNvbHZlcixcbiAgUGFnZUhlYWRpbmdSZXNvbHZlcixcbiAgUGFnZUltYWdlUmVzb2x2ZXIsXG4gIFBhZ2VUaXRsZVJlc29sdmVyLFxufSBmcm9tICcuLi8uLi9jbXMvcGFnZS9wYWdlLnJlc29sdmVycyc7XG5pbXBvcnQgeyBUcmFuc2xhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi9pMThuL3RyYW5zbGF0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgUGFnZVR5cGUgfSBmcm9tICcuLi8uLi9tb2RlbC9jbXMubW9kZWwnO1xuaW1wb3J0IHsgUHJvZHVjdCB9IGZyb20gJy4uLy4uL21vZGVsL3Byb2R1Y3QubW9kZWwnO1xuaW1wb3J0IHsgUm91dGluZ1NlcnZpY2UgfSBmcm9tICcuLi8uLi9yb3V0aW5nL2ZhY2FkZS9yb3V0aW5nLnNlcnZpY2UnO1xuaW1wb3J0IHsgUHJvZHVjdFNlcnZpY2UgfSBmcm9tICcuLi9mYWNhZGUvcHJvZHVjdC5zZXJ2aWNlJztcbmltcG9ydCB7IEZlYXR1cmVDb25maWdTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vZmVhdHVyZXMtY29uZmlnL3NlcnZpY2VzL2ZlYXR1cmUtY29uZmlnLnNlcnZpY2UnO1xuXG4vKipcbiAqIFJlc29sdmVzIHRoZSBwYWdlIGRhdGEgZm9yIHRoZSBQcm9kdWN0IERldGFpbCBQYWdlXG4gKiBiYXNlZCBvbiB0aGUgYFBhZ2VUeXBlLlBST0RVQ1RfUEFHRWAuXG4gKlxuICogVGhlIHBhZ2UgdGl0bGUsIGhlYWRpbmcsIGRlc2NyaXB0aW9uLCBicmVhZGNydW1icyBhbmRcbiAqIGZpcnN0IEdBTExFUlkgaW1hZ2UgYXJlIHJlc29sdmVkIGlmIGF2YWlsYWJsZSBpbiB0aGUgZGF0YS5cbiAqL1xuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIFByb2R1Y3RQYWdlTWV0YVJlc29sdmVyIGV4dGVuZHMgUGFnZU1ldGFSZXNvbHZlclxuICBpbXBsZW1lbnRzXG4gICAgUGFnZUhlYWRpbmdSZXNvbHZlcixcbiAgICBQYWdlVGl0bGVSZXNvbHZlcixcbiAgICBQYWdlRGVzY3JpcHRpb25SZXNvbHZlcixcbiAgICBQYWdlQnJlYWRjcnVtYlJlc29sdmVyLFxuICAgIFBhZ2VJbWFnZVJlc29sdmVyIHtcbiAgcHJvdGVjdGVkIHJlYWRvbmx5IFBST0RVQ1RfU0NPUEUgPVxuICAgIHRoaXMuZmVhdHVyZXMgJiYgdGhpcy5mZWF0dXJlcy5pc0xldmVsKCcxLjQnKSA/ICdkZXRhaWxzJyA6ICcnO1xuXG4gIC8vIHJldXNhYmxlIG9ic2VydmFibGUgZm9yIHByb2R1Y3QgZGF0YSBiYXNlZCBvbiB0aGUgY3VycmVudCBwYWdlXG4gIHByaXZhdGUgcHJvZHVjdCQgPSB0aGlzLnJvdXRpbmdTZXJ2aWNlLmdldFJvdXRlclN0YXRlKCkucGlwZShcbiAgICBtYXAoc3RhdGUgPT4gc3RhdGUuc3RhdGUucGFyYW1zWydwcm9kdWN0Q29kZSddKSxcbiAgICBmaWx0ZXIoY29kZSA9PiAhIWNvZGUpLFxuICAgIHN3aXRjaE1hcChjb2RlID0+IHRoaXMucHJvZHVjdFNlcnZpY2UuZ2V0KGNvZGUsIHRoaXMuUFJPRFVDVF9TQ09QRSkpLFxuICAgIGZpbHRlcihCb29sZWFuKVxuICApO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCByb3V0aW5nU2VydmljZTogUm91dGluZ1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHByb2R1Y3RTZXJ2aWNlOiBQcm9kdWN0U2VydmljZSxcbiAgICBwcm90ZWN0ZWQgdHJhbnNsYXRpb246IFRyYW5zbGF0aW9uU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgZmVhdHVyZXM/OiBGZWF0dXJlQ29uZmlnU2VydmljZVxuICApIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMucGFnZVR5cGUgPSBQYWdlVHlwZS5QUk9EVUNUX1BBR0U7XG4gIH1cblxuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgc2luY2UgdmVyc2lvbiAxLjNcbiAgICpcbiAgICogVGhlIHJlc29sdmUgbWV0aG9kIGlzIG5vIGxvbmdlciBwcmVmZXJyZWQgYW5kIHdpbGwgYmUgcmVtb3ZlZCB3aXRoIHJlbGVhc2UgMi4wLlxuICAgKiBUaGUgY2FsbGVyIGBQYWdlTWV0YVNlcnZpY2VgIHNlcnZpY2UgaXMgaW1wcm92ZWQgdG8gZXhwZWN0IGFsbCBpbmRpdmlkdWFsIHJlc29sdmVyc1xuICAgKiBpbnN0ZWFkLCBzbyB0aGF0IHRoZSBjb2RlIGlzIGVhc2llciBleHRlbnNpYmxlLlxuICAgKi9cbiAgcmVzb2x2ZSgpOiBPYnNlcnZhYmxlPFBhZ2VNZXRhPiB8IGFueSB7XG4gICAgcmV0dXJuIHRoaXMucHJvZHVjdCQucGlwZShcbiAgICAgIHN3aXRjaE1hcCgocDogUHJvZHVjdCkgPT5cbiAgICAgICAgY29tYmluZUxhdGVzdChbXG4gICAgICAgICAgdGhpcy5yZXNvbHZlSGVhZGluZyhwKSxcbiAgICAgICAgICB0aGlzLnJlc29sdmVUaXRsZShwKSxcbiAgICAgICAgICB0aGlzLnJlc29sdmVEZXNjcmlwdGlvbihwKSxcbiAgICAgICAgICB0aGlzLnJlc29sdmVCcmVhZGNydW1iTGFiZWwoKS5waXBlKFxuICAgICAgICAgICAgc3dpdGNoTWFwKGxhYmVsID0+IHRoaXMucmVzb2x2ZUJyZWFkY3J1bWJzKHAsIGxhYmVsKSlcbiAgICAgICAgICApLFxuICAgICAgICAgIHRoaXMucmVzb2x2ZUltYWdlKHApLFxuICAgICAgICBdKVxuICAgICAgKSxcbiAgICAgIG1hcChcbiAgICAgICAgKFtoZWFkaW5nLCB0aXRsZSwgZGVzY3JpcHRpb24sIGJyZWFkY3J1bWJzLCBpbWFnZV06IFtcbiAgICAgICAgICBzdHJpbmcsXG4gICAgICAgICAgc3RyaW5nLFxuICAgICAgICAgIHN0cmluZyxcbiAgICAgICAgICBhbnlbXSxcbiAgICAgICAgICBzdHJpbmdcbiAgICAgICAgXSkgPT4gKHtcbiAgICAgICAgICBoZWFkaW5nLFxuICAgICAgICAgIHRpdGxlLFxuICAgICAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgICAgIGJyZWFkY3J1bWJzLFxuICAgICAgICAgIGltYWdlLFxuICAgICAgICB9KVxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICByZXNvbHZlSGVhZGluZygpOiBPYnNlcnZhYmxlPHN0cmluZz47XG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCBzaW5jZSB2ZXJzaW9uIDEuM1xuICAgKiBXaXRoIDIuMCwgdGhlIGFyZ3VtZW50KHMpIHdpbGwgYmUgcmVtb3ZlZCBhbmQgdGhlIHJldHVybiB0eXBlIHdpbGwgY2hhbmdlLiBVc2UgYHJlc29sdmVIZWFkaW5nKClgIGluc3RlYWRcbiAgICovXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogdW5pZmllZC1zaWduYXR1cmVzXG4gIHJlc29sdmVIZWFkaW5nKHByb2R1Y3Q6IFByb2R1Y3QpOiBPYnNlcnZhYmxlPHN0cmluZz47XG4gIHJlc29sdmVIZWFkaW5nKHByb2R1Y3Q/OiBQcm9kdWN0KTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcbiAgICBjb25zdCBwcm9kdWN0JCA9IHByb2R1Y3QgPyBvZihwcm9kdWN0KSA6IHRoaXMucHJvZHVjdCQ7XG4gICAgcmV0dXJuIHByb2R1Y3QkLnBpcGUoXG4gICAgICBzd2l0Y2hNYXAoKHA6IFByb2R1Y3QpID0+XG4gICAgICAgIHRoaXMudHJhbnNsYXRpb24udHJhbnNsYXRlKCdwYWdlTWV0YVJlc29sdmVyLnByb2R1Y3QuaGVhZGluZycsIHtcbiAgICAgICAgICBoZWFkaW5nOiBwLm5hbWUsXG4gICAgICAgIH0pXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIHJlc29sdmVUaXRsZSgpOiBPYnNlcnZhYmxlPHN0cmluZz47XG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCBzaW5jZSB2ZXJzaW9uIDEuM1xuICAgKiBXaXRoIDIuMCwgdGhlIGFyZ3VtZW50KHMpIHdpbGwgYmUgcmVtb3ZlZCBhbmQgdGhlIHJldHVybiB0eXBlIHdpbGwgY2hhbmdlLiBVc2UgYHJlc29sdmVUaXRsZSgpYCBpbnN0ZWFkXG4gICAqL1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IHVuaWZpZWQtc2lnbmF0dXJlc1xuICByZXNvbHZlVGl0bGUocHJvZHVjdDogUHJvZHVjdCk6IE9ic2VydmFibGU8c3RyaW5nPjtcbiAgcmVzb2x2ZVRpdGxlKHByb2R1Y3Q/OiBQcm9kdWN0KTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcbiAgICBjb25zdCBwcm9kdWN0JCA9IHByb2R1Y3QgPyBvZihwcm9kdWN0KSA6IHRoaXMucHJvZHVjdCQ7XG4gICAgcmV0dXJuIHByb2R1Y3QkLnBpcGUoXG4gICAgICBzd2l0Y2hNYXAoKHA6IFByb2R1Y3QpID0+IHtcbiAgICAgICAgbGV0IHRpdGxlID0gcC5uYW1lO1xuICAgICAgICB0aXRsZSArPSB0aGlzLnJlc29sdmVGaXJzdENhdGVnb3J5KHApO1xuICAgICAgICB0aXRsZSArPSB0aGlzLnJlc29sdmVNYW51ZmFjdHVyZXIocCk7XG4gICAgICAgIHJldHVybiB0aGlzLnRyYW5zbGF0aW9uLnRyYW5zbGF0ZSgncGFnZU1ldGFSZXNvbHZlci5wcm9kdWN0LnRpdGxlJywge1xuICAgICAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgICAgfSk7XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICByZXNvbHZlRGVzY3JpcHRpb24oKTogT2JzZXJ2YWJsZTxzdHJpbmc+O1xuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgc2luY2UgdmVyc2lvbiAxLjNcbiAgICogV2l0aCAyLjAsIHRoZSBhcmd1bWVudChzKSB3aWxsIGJlIHJlbW92ZWQgYW5kIHRoZSByZXR1cm4gdHlwZSB3aWxsIGNoYW5nZS4gVXNlIGByZXNvbHZlRGVzY3JpcHRpb24oKWAgaW5zdGVhZFxuICAgKi9cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiB1bmlmaWVkLXNpZ25hdHVyZXNcbiAgcmVzb2x2ZURlc2NyaXB0aW9uKHByb2R1Y3Q6IFByb2R1Y3QpOiBPYnNlcnZhYmxlPHN0cmluZz47XG4gIHJlc29sdmVEZXNjcmlwdGlvbihwcm9kdWN0PzogUHJvZHVjdCk6IE9ic2VydmFibGU8c3RyaW5nPiB7XG4gICAgY29uc3QgcHJvZHVjdCQ6IE9ic2VydmFibGU8UHJvZHVjdD4gPSBwcm9kdWN0ID8gb2YocHJvZHVjdCkgOiB0aGlzLnByb2R1Y3QkO1xuICAgIHJldHVybiBwcm9kdWN0JC5waXBlKFxuICAgICAgc3dpdGNoTWFwKChwOiBQcm9kdWN0KSA9PlxuICAgICAgICB0aGlzLnRyYW5zbGF0aW9uLnRyYW5zbGF0ZSgncGFnZU1ldGFSZXNvbHZlci5wcm9kdWN0LmRlc2NyaXB0aW9uJywge1xuICAgICAgICAgIGRlc2NyaXB0aW9uOiBwLnN1bW1hcnksXG4gICAgICAgIH0pXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCBzaW5jZSB2ZXJzaW9uIDEuM1xuICAgKiBUaGlzIG1ldGhvZCB3aWxsIGJlIHJlbW92ZWQgd2l0aCB3aXRoIDIuMFxuICAgKi9cbiAgcmVzb2x2ZUJyZWFkY3J1bWJMYWJlbCgpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xuICAgIHJldHVybiB0aGlzLnRyYW5zbGF0aW9uLnRyYW5zbGF0ZSgnY29tbW9uLmhvbWUnKTtcbiAgfVxuXG4gIHJlc29sdmVCcmVhZGNydW1icygpOiBPYnNlcnZhYmxlPGFueVtdPjtcbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIHNpbmNlIHZlcnNpb24gMS4zXG4gICAqIFdpdGggMi4wLCB0aGUgYXJndW1lbnQocykgd2lsbCBiZSByZW1vdmVkIGFuZCB0aGUgcmV0dXJuIHR5cGUgd2lsbCBjaGFuZ2UuIFVzZSBgcmVzb2x2ZUJyZWFkY3J1bWJzKClgIGluc3RlYWRcbiAgICovXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogdW5pZmllZC1zaWduYXR1cmVzXG4gIHJlc29sdmVCcmVhZGNydW1icyhcbiAgICBwcm9kdWN0OiBQcm9kdWN0LFxuICAgIGJyZWFkY3J1bWJMYWJlbDogc3RyaW5nXG4gICk6IE9ic2VydmFibGU8YW55W10+O1xuICByZXNvbHZlQnJlYWRjcnVtYnMoXG4gICAgcHJvZHVjdD86IFByb2R1Y3QsXG4gICAgYnJlYWRjcnVtYkxhYmVsPzogc3RyaW5nXG4gICk6IE9ic2VydmFibGU8YW55W10+IHtcbiAgICBjb25zdCBzb3VyY2VzID1cbiAgICAgIHByb2R1Y3QgJiYgYnJlYWRjcnVtYkxhYmVsXG4gICAgICAgID8gW29mKHByb2R1Y3QpLCBvZihicmVhZGNydW1iTGFiZWwpXVxuICAgICAgICA6IFt0aGlzLnByb2R1Y3QkLnBpcGUoKSwgdGhpcy50cmFuc2xhdGlvbi50cmFuc2xhdGUoJ2NvbW1vbi5ob21lJyldO1xuXG4gICAgcmV0dXJuIGNvbWJpbmVMYXRlc3Qoc291cmNlcykucGlwZShcbiAgICAgIG1hcCgoW3AsIGxhYmVsXTogW1Byb2R1Y3QsIHN0cmluZ10pID0+IHtcbiAgICAgICAgY29uc3QgYnJlYWRjcnVtYnMgPSBbXTtcbiAgICAgICAgYnJlYWRjcnVtYnMucHVzaCh7IGxhYmVsOiBsYWJlbCwgbGluazogJy8nIH0pO1xuICAgICAgICBmb3IgKGNvbnN0IHsgbmFtZSwgY29kZSwgdXJsIH0gb2YgcC5jYXRlZ29yaWVzIHx8IFtdKSB7XG4gICAgICAgICAgYnJlYWRjcnVtYnMucHVzaCh7XG4gICAgICAgICAgICBsYWJlbDogbmFtZSB8fCBjb2RlLFxuICAgICAgICAgICAgbGluazogdXJsLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBicmVhZGNydW1icztcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIHJlc29sdmVJbWFnZSgpOiBPYnNlcnZhYmxlPHN0cmluZz47XG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCBzaW5jZSB2ZXJzaW9uIDEuM1xuICAgKiBXaXRoIDIuMCwgdGhlIGFyZ3VtZW50KHMpIHdpbGwgYmUgcmVtb3ZlZCBhbmQgdGhlIHJldHVybiB0eXBlIHdpbGwgY2hhbmdlLiBVc2UgYHJlc29sdmVJbWFnZSgpYCBpbnN0ZWFkXG4gICAqL1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IHVuaWZpZWQtc2lnbmF0dXJlc1xuICByZXNvbHZlSW1hZ2UocHJvZHVjdDogUHJvZHVjdCk6IE9ic2VydmFibGU8c3RyaW5nPjtcbiAgcmVzb2x2ZUltYWdlKHByb2R1Y3Q/OiBQcm9kdWN0KTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcbiAgICBjb25zdCBwcm9kdWN0JDogT2JzZXJ2YWJsZTxQcm9kdWN0PiA9IHByb2R1Y3QgPyBvZihwcm9kdWN0KSA6IHRoaXMucHJvZHVjdCQ7XG4gICAgcmV0dXJuIHByb2R1Y3QkLnBpcGUoXG4gICAgICBtYXAoKHA6IFByb2R1Y3QpID0+XG4gICAgICAgIHAuaW1hZ2VzICYmXG4gICAgICAgIHAuaW1hZ2VzLlBSSU1BUlkgJiZcbiAgICAgICAgKDxhbnk+cC5pbWFnZXMuUFJJTUFSWSkuem9vbSAmJlxuICAgICAgICAoPGFueT5wLmltYWdlcy5QUklNQVJZKS56b29tLnVybFxuICAgICAgICAgID8gKDxhbnk+cC5pbWFnZXMuUFJJTUFSWSkuem9vbS51cmxcbiAgICAgICAgICA6IG51bGxcbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSByZXNvbHZlRmlyc3RDYXRlZ29yeShwcm9kdWN0OiBQcm9kdWN0KTogc3RyaW5nIHtcbiAgICBsZXQgZmlyc3RDYXRlZ29yeTtcbiAgICBpZiAocHJvZHVjdC5jYXRlZ29yaWVzICYmIHByb2R1Y3QuY2F0ZWdvcmllcy5sZW5ndGggPiAwKSB7XG4gICAgICBmaXJzdENhdGVnb3J5ID0gcHJvZHVjdC5jYXRlZ29yaWVzWzBdO1xuICAgIH1cbiAgICByZXR1cm4gZmlyc3RDYXRlZ29yeVxuICAgICAgPyBgIHwgJHtmaXJzdENhdGVnb3J5Lm5hbWUgfHwgZmlyc3RDYXRlZ29yeS5jb2RlfWBcbiAgICAgIDogJyc7XG4gIH1cblxuICBwcml2YXRlIHJlc29sdmVNYW51ZmFjdHVyZXIocHJvZHVjdDogUHJvZHVjdCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHByb2R1Y3QubWFudWZhY3R1cmVyID8gYCB8ICR7cHJvZHVjdC5tYW51ZmFjdHVyZXJ9YCA6ICcnO1xuICB9XG59XG4iXX0=