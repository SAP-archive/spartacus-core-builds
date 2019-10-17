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
import * as i0 from "@angular/core";
import * as i1 from "../../routing/facade/routing.service";
import * as i2 from "../facade/product.service";
import * as i3 from "../../i18n/translation.service";
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
     */
    constructor(routingService, productService, translation) {
        super();
        this.routingService = routingService;
        this.productService = productService;
        this.translation = translation;
        // resuable observable for product data based on the current page
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
        code => this.productService.get(code))), filter(Boolean));
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
            for (const { name, code, url } of p.categories) {
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
    { type: TranslationService }
];
/** @nocollapse */ ProductPageMetaResolver.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function ProductPageMetaResolver_Factory() { return new ProductPageMetaResolver(i0.ɵɵinject(i1.RoutingService), i0.ɵɵinject(i2.ProductService), i0.ɵɵinject(i3.TranslationService)); }, token: ProductPageMetaResolver, providedIn: "root" });
if (false) {
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1wYWdlLW1ldGEucmVzb2x2ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvcHJvZHVjdC9zZXJ2aWNlcy9wcm9kdWN0LXBhZ2UtbWV0YS5yZXNvbHZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsYUFBYSxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNyRCxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV4RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQVFyRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNwRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFakQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQzs7Ozs7Ozs7Ozs7O0FBWTNELE1BQU0sT0FBTyx1QkFBd0IsU0FBUSxnQkFBZ0I7Ozs7OztJQWUzRCxZQUNZLGNBQThCLEVBQzlCLGNBQThCLEVBQzlCLFdBQStCO1FBRXpDLEtBQUssRUFBRSxDQUFDO1FBSkUsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixnQkFBVyxHQUFYLFdBQVcsQ0FBb0I7O1FBVm5DLGFBQVEsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLGNBQWMsRUFBRSxDQUFDLElBQUksQ0FDMUQsR0FBRzs7OztRQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLEVBQUMsRUFDL0MsTUFB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Q0FLRTs7Ozs7SUFHQSxpREFBd0M7Ozs7O0lBQ3hDLGlEQUF3Qzs7Ozs7SUFDeEMsOENBQXlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgY29tYmluZUxhdGVzdCwgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgbWFwLCBzd2l0Y2hNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBQYWdlTWV0YSB9IGZyb20gJy4uLy4uL2Ntcy9tb2RlbC9wYWdlLm1vZGVsJztcbmltcG9ydCB7IFBhZ2VNZXRhUmVzb2x2ZXIgfSBmcm9tICcuLi8uLi9jbXMvcGFnZS9wYWdlLW1ldGEucmVzb2x2ZXInO1xuaW1wb3J0IHtcbiAgUGFnZUJyZWFkY3J1bWJSZXNvbHZlcixcbiAgUGFnZURlc2NyaXB0aW9uUmVzb2x2ZXIsXG4gIFBhZ2VIZWFkaW5nUmVzb2x2ZXIsXG4gIFBhZ2VJbWFnZVJlc29sdmVyLFxuICBQYWdlVGl0bGVSZXNvbHZlcixcbn0gZnJvbSAnLi4vLi4vY21zL3BhZ2UvcGFnZS5yZXNvbHZlcnMnO1xuaW1wb3J0IHsgVHJhbnNsYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vaTE4bi90cmFuc2xhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IFBhZ2VUeXBlIH0gZnJvbSAnLi4vLi4vbW9kZWwvY21zLm1vZGVsJztcbmltcG9ydCB7IFByb2R1Y3QgfSBmcm9tICcuLi8uLi9tb2RlbC9wcm9kdWN0Lm1vZGVsJztcbmltcG9ydCB7IFJvdXRpbmdTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vcm91dGluZy9mYWNhZGUvcm91dGluZy5zZXJ2aWNlJztcbmltcG9ydCB7IFByb2R1Y3RTZXJ2aWNlIH0gZnJvbSAnLi4vZmFjYWRlL3Byb2R1Y3Quc2VydmljZSc7XG5cbi8qKlxuICogUmVzb2x2ZXMgdGhlIHBhZ2UgZGF0YSBmb3IgdGhlIFByb2R1Y3QgRGV0YWlsIFBhZ2VcbiAqIGJhc2VkIG9uIHRoZSBgUGFnZVR5cGUuUFJPRFVDVF9QQUdFYC5cbiAqXG4gKiBUaGUgcGFnZSB0aXRsZSwgaGVhZGluZywgZGVzY3JpcHRpb24sIGJyZWFkY3J1bWJzIGFuZFxuICogZmlyc3QgR0FMTEVSWSBpbWFnZSBhcmUgcmVzb2x2ZWQgaWYgYXZhaWxhYmxlIGluIHRoZSBkYXRhLlxuICovXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgUHJvZHVjdFBhZ2VNZXRhUmVzb2x2ZXIgZXh0ZW5kcyBQYWdlTWV0YVJlc29sdmVyXG4gIGltcGxlbWVudHNcbiAgICBQYWdlSGVhZGluZ1Jlc29sdmVyLFxuICAgIFBhZ2VUaXRsZVJlc29sdmVyLFxuICAgIFBhZ2VEZXNjcmlwdGlvblJlc29sdmVyLFxuICAgIFBhZ2VCcmVhZGNydW1iUmVzb2x2ZXIsXG4gICAgUGFnZUltYWdlUmVzb2x2ZXIge1xuICAvLyByZXN1YWJsZSBvYnNlcnZhYmxlIGZvciBwcm9kdWN0IGRhdGEgYmFzZWQgb24gdGhlIGN1cnJlbnQgcGFnZVxuICBwcml2YXRlIHByb2R1Y3QkID0gdGhpcy5yb3V0aW5nU2VydmljZS5nZXRSb3V0ZXJTdGF0ZSgpLnBpcGUoXG4gICAgbWFwKHN0YXRlID0+IHN0YXRlLnN0YXRlLnBhcmFtc1sncHJvZHVjdENvZGUnXSksXG4gICAgZmlsdGVyKGNvZGUgPT4gISFjb2RlKSxcbiAgICBzd2l0Y2hNYXAoY29kZSA9PiB0aGlzLnByb2R1Y3RTZXJ2aWNlLmdldChjb2RlKSksXG4gICAgZmlsdGVyKEJvb2xlYW4pXG4gICk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIHJvdXRpbmdTZXJ2aWNlOiBSb3V0aW5nU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgcHJvZHVjdFNlcnZpY2U6IFByb2R1Y3RTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCB0cmFuc2xhdGlvbjogVHJhbnNsYXRpb25TZXJ2aWNlXG4gICkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5wYWdlVHlwZSA9IFBhZ2VUeXBlLlBST0RVQ1RfUEFHRTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCBzaW5jZSB2ZXJzaW9uIDEuM1xuICAgKlxuICAgKiBUaGUgcmVzb2x2ZSBtZXRob2QgaXMgbm8gbG9uZ2VyIHByZWZlcnJlZCBhbmQgd2lsbCBiZSByZW1vdmVkIHdpdGggcmVsZWFzZSAyLjAuXG4gICAqIFRoZSBjYWxsZXIgYFBhZ2VNZXRhU2VydmljZWAgc2VydmljZSBpcyBpbXByb3ZlZCB0byBleHBlY3QgYWxsIGluZGl2aWR1YWwgcmVzb2x2ZXJzXG4gICAqIGluc3RlYWQsIHNvIHRoYXQgdGhlIGNvZGUgaXMgZWFzaWVyIGV4dGVuc2libGUuXG4gICAqL1xuICByZXNvbHZlKCk6IE9ic2VydmFibGU8UGFnZU1ldGE+IHwgYW55IHtcbiAgICByZXR1cm4gdGhpcy5wcm9kdWN0JC5waXBlKFxuICAgICAgc3dpdGNoTWFwKChwOiBQcm9kdWN0KSA9PlxuICAgICAgICBjb21iaW5lTGF0ZXN0KFtcbiAgICAgICAgICB0aGlzLnJlc29sdmVIZWFkaW5nKHApLFxuICAgICAgICAgIHRoaXMucmVzb2x2ZVRpdGxlKHApLFxuICAgICAgICAgIHRoaXMucmVzb2x2ZURlc2NyaXB0aW9uKHApLFxuICAgICAgICAgIHRoaXMucmVzb2x2ZUJyZWFkY3J1bWJMYWJlbCgpLnBpcGUoXG4gICAgICAgICAgICBzd2l0Y2hNYXAobGFiZWwgPT4gdGhpcy5yZXNvbHZlQnJlYWRjcnVtYnMocCwgbGFiZWwpKVxuICAgICAgICAgICksXG4gICAgICAgICAgdGhpcy5yZXNvbHZlSW1hZ2UocCksXG4gICAgICAgIF0pXG4gICAgICApLFxuICAgICAgbWFwKFxuICAgICAgICAoW2hlYWRpbmcsIHRpdGxlLCBkZXNjcmlwdGlvbiwgYnJlYWRjcnVtYnMsIGltYWdlXTogW1xuICAgICAgICAgIHN0cmluZyxcbiAgICAgICAgICBzdHJpbmcsXG4gICAgICAgICAgc3RyaW5nLFxuICAgICAgICAgIGFueVtdLFxuICAgICAgICAgIHN0cmluZ1xuICAgICAgICBdKSA9PiAoe1xuICAgICAgICAgIGhlYWRpbmcsXG4gICAgICAgICAgdGl0bGUsXG4gICAgICAgICAgZGVzY3JpcHRpb24sXG4gICAgICAgICAgYnJlYWRjcnVtYnMsXG4gICAgICAgICAgaW1hZ2UsXG4gICAgICAgIH0pXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIHJlc29sdmVIZWFkaW5nKCk6IE9ic2VydmFibGU8c3RyaW5nPjtcbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIHNpbmNlIHZlcnNpb24gMS4zXG4gICAqIFdpdGggMi4wLCB0aGUgYXJndW1lbnQocykgd2lsbCBiZSByZW1vdmVkIGFuZCB0aGUgcmV0dXJuIHR5cGUgd2lsbCBjaGFuZ2UuIFVzZSBgcmVzb2x2ZUhlYWRpbmcoKWAgaW5zdGVhZFxuICAgKi9cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiB1bmlmaWVkLXNpZ25hdHVyZXNcbiAgcmVzb2x2ZUhlYWRpbmcocHJvZHVjdDogUHJvZHVjdCk6IE9ic2VydmFibGU8c3RyaW5nPjtcbiAgcmVzb2x2ZUhlYWRpbmcocHJvZHVjdD86IFByb2R1Y3QpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xuICAgIGNvbnN0IHByb2R1Y3QkID0gcHJvZHVjdCA/IG9mKHByb2R1Y3QpIDogdGhpcy5wcm9kdWN0JDtcbiAgICByZXR1cm4gcHJvZHVjdCQucGlwZShcbiAgICAgIHN3aXRjaE1hcCgocDogUHJvZHVjdCkgPT5cbiAgICAgICAgdGhpcy50cmFuc2xhdGlvbi50cmFuc2xhdGUoJ3BhZ2VNZXRhUmVzb2x2ZXIucHJvZHVjdC5oZWFkaW5nJywge1xuICAgICAgICAgIGhlYWRpbmc6IHAubmFtZSxcbiAgICAgICAgfSlcbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgcmVzb2x2ZVRpdGxlKCk6IE9ic2VydmFibGU8c3RyaW5nPjtcbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIHNpbmNlIHZlcnNpb24gMS4zXG4gICAqIFdpdGggMi4wLCB0aGUgYXJndW1lbnQocykgd2lsbCBiZSByZW1vdmVkIGFuZCB0aGUgcmV0dXJuIHR5cGUgd2lsbCBjaGFuZ2UuIFVzZSBgcmVzb2x2ZVRpdGxlKClgIGluc3RlYWRcbiAgICovXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogdW5pZmllZC1zaWduYXR1cmVzXG4gIHJlc29sdmVUaXRsZShwcm9kdWN0OiBQcm9kdWN0KTogT2JzZXJ2YWJsZTxzdHJpbmc+O1xuICByZXNvbHZlVGl0bGUocHJvZHVjdD86IFByb2R1Y3QpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xuICAgIGNvbnN0IHByb2R1Y3QkID0gcHJvZHVjdCA/IG9mKHByb2R1Y3QpIDogdGhpcy5wcm9kdWN0JDtcbiAgICByZXR1cm4gcHJvZHVjdCQucGlwZShcbiAgICAgIHN3aXRjaE1hcCgocDogUHJvZHVjdCkgPT4ge1xuICAgICAgICBsZXQgdGl0bGUgPSBwLm5hbWU7XG4gICAgICAgIHRpdGxlICs9IHRoaXMucmVzb2x2ZUZpcnN0Q2F0ZWdvcnkocCk7XG4gICAgICAgIHRpdGxlICs9IHRoaXMucmVzb2x2ZU1hbnVmYWN0dXJlcihwKTtcbiAgICAgICAgcmV0dXJuIHRoaXMudHJhbnNsYXRpb24udHJhbnNsYXRlKCdwYWdlTWV0YVJlc29sdmVyLnByb2R1Y3QudGl0bGUnLCB7XG4gICAgICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgICB9KTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIHJlc29sdmVEZXNjcmlwdGlvbigpOiBPYnNlcnZhYmxlPHN0cmluZz47XG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCBzaW5jZSB2ZXJzaW9uIDEuM1xuICAgKiBXaXRoIDIuMCwgdGhlIGFyZ3VtZW50KHMpIHdpbGwgYmUgcmVtb3ZlZCBhbmQgdGhlIHJldHVybiB0eXBlIHdpbGwgY2hhbmdlLiBVc2UgYHJlc29sdmVEZXNjcmlwdGlvbigpYCBpbnN0ZWFkXG4gICAqL1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IHVuaWZpZWQtc2lnbmF0dXJlc1xuICByZXNvbHZlRGVzY3JpcHRpb24ocHJvZHVjdDogUHJvZHVjdCk6IE9ic2VydmFibGU8c3RyaW5nPjtcbiAgcmVzb2x2ZURlc2NyaXB0aW9uKHByb2R1Y3Q/OiBQcm9kdWN0KTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcbiAgICBjb25zdCBwcm9kdWN0JDogT2JzZXJ2YWJsZTxQcm9kdWN0PiA9IHByb2R1Y3QgPyBvZihwcm9kdWN0KSA6IHRoaXMucHJvZHVjdCQ7XG4gICAgcmV0dXJuIHByb2R1Y3QkLnBpcGUoXG4gICAgICBzd2l0Y2hNYXAoKHA6IFByb2R1Y3QpID0+XG4gICAgICAgIHRoaXMudHJhbnNsYXRpb24udHJhbnNsYXRlKCdwYWdlTWV0YVJlc29sdmVyLnByb2R1Y3QuZGVzY3JpcHRpb24nLCB7XG4gICAgICAgICAgZGVzY3JpcHRpb246IHAuc3VtbWFyeSxcbiAgICAgICAgfSlcbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIHNpbmNlIHZlcnNpb24gMS4zXG4gICAqIFRoaXMgbWV0aG9kIHdpbGwgYmUgcmVtb3ZlZCB3aXRoIHdpdGggMi4wXG4gICAqL1xuICByZXNvbHZlQnJlYWRjcnVtYkxhYmVsKCk6IE9ic2VydmFibGU8c3RyaW5nPiB7XG4gICAgcmV0dXJuIHRoaXMudHJhbnNsYXRpb24udHJhbnNsYXRlKCdjb21tb24uaG9tZScpO1xuICB9XG5cbiAgcmVzb2x2ZUJyZWFkY3J1bWJzKCk6IE9ic2VydmFibGU8YW55W10+O1xuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgc2luY2UgdmVyc2lvbiAxLjNcbiAgICogV2l0aCAyLjAsIHRoZSBhcmd1bWVudChzKSB3aWxsIGJlIHJlbW92ZWQgYW5kIHRoZSByZXR1cm4gdHlwZSB3aWxsIGNoYW5nZS4gVXNlIGByZXNvbHZlQnJlYWRjcnVtYnMoKWAgaW5zdGVhZFxuICAgKi9cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiB1bmlmaWVkLXNpZ25hdHVyZXNcbiAgcmVzb2x2ZUJyZWFkY3J1bWJzKFxuICAgIHByb2R1Y3Q6IFByb2R1Y3QsXG4gICAgYnJlYWRjcnVtYkxhYmVsOiBzdHJpbmdcbiAgKTogT2JzZXJ2YWJsZTxhbnlbXT47XG4gIHJlc29sdmVCcmVhZGNydW1icyhcbiAgICBwcm9kdWN0PzogUHJvZHVjdCxcbiAgICBicmVhZGNydW1iTGFiZWw/OiBzdHJpbmdcbiAgKTogT2JzZXJ2YWJsZTxhbnlbXT4ge1xuICAgIGNvbnN0IHNvdXJjZXMgPVxuICAgICAgcHJvZHVjdCAmJiBicmVhZGNydW1iTGFiZWxcbiAgICAgICAgPyBbb2YocHJvZHVjdCksIG9mKGJyZWFkY3J1bWJMYWJlbCldXG4gICAgICAgIDogW3RoaXMucHJvZHVjdCQucGlwZSgpLCB0aGlzLnRyYW5zbGF0aW9uLnRyYW5zbGF0ZSgnY29tbW9uLmhvbWUnKV07XG5cbiAgICByZXR1cm4gY29tYmluZUxhdGVzdChzb3VyY2VzKS5waXBlKFxuICAgICAgbWFwKChbcCwgbGFiZWxdOiBbUHJvZHVjdCwgc3RyaW5nXSkgPT4ge1xuICAgICAgICBjb25zdCBicmVhZGNydW1icyA9IFtdO1xuICAgICAgICBicmVhZGNydW1icy5wdXNoKHsgbGFiZWw6IGxhYmVsLCBsaW5rOiAnLycgfSk7XG4gICAgICAgIGZvciAoY29uc3QgeyBuYW1lLCBjb2RlLCB1cmwgfSBvZiBwLmNhdGVnb3JpZXMpIHtcbiAgICAgICAgICBicmVhZGNydW1icy5wdXNoKHtcbiAgICAgICAgICAgIGxhYmVsOiBuYW1lIHx8IGNvZGUsXG4gICAgICAgICAgICBsaW5rOiB1cmwsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGJyZWFkY3J1bWJzO1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgcmVzb2x2ZUltYWdlKCk6IE9ic2VydmFibGU8c3RyaW5nPjtcbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIHNpbmNlIHZlcnNpb24gMS4zXG4gICAqIFdpdGggMi4wLCB0aGUgYXJndW1lbnQocykgd2lsbCBiZSByZW1vdmVkIGFuZCB0aGUgcmV0dXJuIHR5cGUgd2lsbCBjaGFuZ2UuIFVzZSBgcmVzb2x2ZUltYWdlKClgIGluc3RlYWRcbiAgICovXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogdW5pZmllZC1zaWduYXR1cmVzXG4gIHJlc29sdmVJbWFnZShwcm9kdWN0OiBQcm9kdWN0KTogT2JzZXJ2YWJsZTxzdHJpbmc+O1xuICByZXNvbHZlSW1hZ2UocHJvZHVjdD86IFByb2R1Y3QpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xuICAgIGNvbnN0IHByb2R1Y3QkOiBPYnNlcnZhYmxlPFByb2R1Y3Q+ID0gcHJvZHVjdCA/IG9mKHByb2R1Y3QpIDogdGhpcy5wcm9kdWN0JDtcbiAgICByZXR1cm4gcHJvZHVjdCQucGlwZShcbiAgICAgIG1hcCgocDogUHJvZHVjdCkgPT5cbiAgICAgICAgcC5pbWFnZXMgJiZcbiAgICAgICAgcC5pbWFnZXMuUFJJTUFSWSAmJlxuICAgICAgICAoPGFueT5wLmltYWdlcy5QUklNQVJZKS56b29tICYmXG4gICAgICAgICg8YW55PnAuaW1hZ2VzLlBSSU1BUlkpLnpvb20udXJsXG4gICAgICAgICAgPyAoPGFueT5wLmltYWdlcy5QUklNQVJZKS56b29tLnVybFxuICAgICAgICAgIDogbnVsbFxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIHJlc29sdmVGaXJzdENhdGVnb3J5KHByb2R1Y3Q6IFByb2R1Y3QpOiBzdHJpbmcge1xuICAgIGxldCBmaXJzdENhdGVnb3J5O1xuICAgIGlmIChwcm9kdWN0LmNhdGVnb3JpZXMgJiYgcHJvZHVjdC5jYXRlZ29yaWVzLmxlbmd0aCA+IDApIHtcbiAgICAgIGZpcnN0Q2F0ZWdvcnkgPSBwcm9kdWN0LmNhdGVnb3JpZXNbMF07XG4gICAgfVxuICAgIHJldHVybiBmaXJzdENhdGVnb3J5XG4gICAgICA/IGAgfCAke2ZpcnN0Q2F0ZWdvcnkubmFtZSB8fCBmaXJzdENhdGVnb3J5LmNvZGV9YFxuICAgICAgOiAnJztcbiAgfVxuXG4gIHByaXZhdGUgcmVzb2x2ZU1hbnVmYWN0dXJlcihwcm9kdWN0OiBQcm9kdWN0KTogc3RyaW5nIHtcbiAgICByZXR1cm4gcHJvZHVjdC5tYW51ZmFjdHVyZXIgPyBgIHwgJHtwcm9kdWN0Lm1hbnVmYWN0dXJlcn1gIDogJyc7XG4gIH1cbn1cbiJdfQ==