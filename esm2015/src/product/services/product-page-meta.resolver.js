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
        this.pageType = PageType.PRODUCT_PAGE;
    }
    /**
     * @return {?}
     */
    resolve() {
        return this.routingService.getRouterState().pipe(map((/**
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
        code => this.productService.get(code))), filter(Boolean), switchMap((/**
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
     * @param {?} product
     * @return {?}
     */
    resolveHeading(product) {
        return this.translation.translate('pageMetaResolver.product.heading', {
            heading: product.name,
        });
    }
    /**
     * @param {?} product
     * @return {?}
     */
    resolveTitle(product) {
        /** @type {?} */
        let title = product.name;
        title += this.resolveFirstCategory(product);
        title += this.resolveManufacturer(product);
        return this.translation.translate('pageMetaResolver.product.title', {
            title: title,
        });
    }
    /**
     * @param {?} product
     * @return {?}
     */
    resolveDescription(product) {
        return this.translation.translate('pageMetaResolver.product.description', {
            description: product.summary,
        });
    }
    /**
     * @return {?}
     */
    resolveBreadcrumbLabel() {
        return this.translation.translate('common.home');
    }
    /**
     * @param {?} product
     * @param {?} breadcrumbLabel
     * @return {?}
     */
    resolveBreadcrumbs(product, breadcrumbLabel) {
        /** @type {?} */
        const breadcrumbs = [];
        breadcrumbs.push({ label: breadcrumbLabel, link: '/' });
        for (const { name, code, url } of product.categories) {
            breadcrumbs.push({
                label: name || code,
                link: url,
            });
        }
        return of(breadcrumbs);
    }
    /**
     * @param {?} product
     * @return {?}
     */
    resolveImage(product) {
        /** @type {?} */
        let result;
        if (product.images &&
            product.images.PRIMARY &&
            product.images.PRIMARY.zoom &&
            product.images.PRIMARY.zoom.url) {
            result = product.images.PRIMARY.zoom.url;
        }
        return of(result);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1wYWdlLW1ldGEucmVzb2x2ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvcHJvZHVjdC9zZXJ2aWNlcy9wcm9kdWN0LXBhZ2UtbWV0YS5yZXNvbHZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsYUFBYSxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNyRCxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV4RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQVFyRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNwRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFakQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQzs7Ozs7QUFLM0QsTUFBTSxPQUFPLHVCQUF3QixTQUFRLGdCQUFnQjs7Ozs7O0lBTzNELFlBQ1ksY0FBOEIsRUFDOUIsY0FBOEIsRUFDOUIsV0FBK0I7UUFFekMsS0FBSyxFQUFFLENBQUM7UUFKRSxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLGdCQUFXLEdBQVgsV0FBVyxDQUFvQjtRQUd6QyxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQyxZQUFZLENBQUM7SUFDeEMsQ0FBQzs7OztJQUVELE9BQU87UUFDTCxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsY0FBYyxFQUFFLENBQUMsSUFBSSxDQUM5QyxHQUFHOzs7O1FBQUMsS0FBSyxDQUFDLEVBQUUsQ0FB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LE1BQU0sQ0FBQyxPQUFPO1lBQ3RCLE9BQU8sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUk7WUFDM0IsT0FBTyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFDL0I7WUFDQSxNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztTQUMxQztRQUNELE9BQU8sRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3BCLENBQUM7Ozs7OztJQUVPLG9CQUFvQixDQUFDLE9BQWdCOztZQUN2QyxhQUFhO1FBQ2pCLElBQUksT0FBTyxDQUFDLFVBQVUsSUFBSSxPQUFPLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDdkQsYUFBYSxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDdkM7UUFDRCxPQUFPLGFBQWE7WUFDbEIsQ0FBQyxDQUFDLE1BQU0sYUFBYSxDQUFDLElBQUksSUFBSSxhQUFhLENBQUMsSUFBSSxFQUFFO1lBQ2xELENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDVCxDQUFDOzs7Ozs7SUFFTyxtQkFBbUIsQ0FBQyxPQUFnQjtRQUMxQyxPQUFPLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLE1BQU0sT0FBTyxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDbEUsQ0FBQzs7O1lBaEhGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQUxRLGNBQWM7WUFDZCxjQUFjO1lBSmQsa0JBQWtCOzs7Ozs7OztJQWlCdkIsaURBQXdDOzs7OztJQUN4QyxpREFBd0M7Ozs7O0lBQ3hDLDhDQUF5QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGNvbWJpbmVMYXRlc3QsIE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIG1hcCwgc3dpdGNoTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgUGFnZU1ldGEgfSBmcm9tICcuLi8uLi9jbXMvbW9kZWwvcGFnZS5tb2RlbCc7XG5pbXBvcnQgeyBQYWdlTWV0YVJlc29sdmVyIH0gZnJvbSAnLi4vLi4vY21zL3BhZ2UvcGFnZS1tZXRhLnJlc29sdmVyJztcbmltcG9ydCB7XG4gIFBhZ2VCcmVhZGNydW1iUmVzb2x2ZXIsXG4gIFBhZ2VEZXNjcmlwdGlvblJlc29sdmVyLFxuICBQYWdlSGVhZGluZ1Jlc29sdmVyLFxuICBQYWdlSW1hZ2VSZXNvbHZlcixcbiAgUGFnZVRpdGxlUmVzb2x2ZXIsXG59IGZyb20gJy4uLy4uL2Ntcy9wYWdlL3BhZ2UucmVzb2x2ZXJzJztcbmltcG9ydCB7IFRyYW5zbGF0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uL2kxOG4vdHJhbnNsYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBQYWdlVHlwZSB9IGZyb20gJy4uLy4uL21vZGVsL2Ntcy5tb2RlbCc7XG5pbXBvcnQgeyBQcm9kdWN0IH0gZnJvbSAnLi4vLi4vbW9kZWwvcHJvZHVjdC5tb2RlbCc7XG5pbXBvcnQgeyBSb3V0aW5nU2VydmljZSB9IGZyb20gJy4uLy4uL3JvdXRpbmcvZmFjYWRlL3JvdXRpbmcuc2VydmljZSc7XG5pbXBvcnQgeyBQcm9kdWN0U2VydmljZSB9IGZyb20gJy4uL2ZhY2FkZS9wcm9kdWN0LnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgUHJvZHVjdFBhZ2VNZXRhUmVzb2x2ZXIgZXh0ZW5kcyBQYWdlTWV0YVJlc29sdmVyXG4gIGltcGxlbWVudHNcbiAgICBQYWdlSGVhZGluZ1Jlc29sdmVyLFxuICAgIFBhZ2VUaXRsZVJlc29sdmVyLFxuICAgIFBhZ2VEZXNjcmlwdGlvblJlc29sdmVyLFxuICAgIFBhZ2VCcmVhZGNydW1iUmVzb2x2ZXIsXG4gICAgUGFnZUltYWdlUmVzb2x2ZXIge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgcm91dGluZ1NlcnZpY2U6IFJvdXRpbmdTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBwcm9kdWN0U2VydmljZTogUHJvZHVjdFNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHRyYW5zbGF0aW9uOiBUcmFuc2xhdGlvblNlcnZpY2VcbiAgKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnBhZ2VUeXBlID0gUGFnZVR5cGUuUFJPRFVDVF9QQUdFO1xuICB9XG5cbiAgcmVzb2x2ZSgpOiBPYnNlcnZhYmxlPFBhZ2VNZXRhPiB7XG4gICAgcmV0dXJuIHRoaXMucm91dGluZ1NlcnZpY2UuZ2V0Um91dGVyU3RhdGUoKS5waXBlKFxuICAgICAgbWFwKHN0YXRlID0+IHN0YXRlLnN0YXRlLnBhcmFtc1sncHJvZHVjdENvZGUnXSksXG4gICAgICBmaWx0ZXIoY29kZSA9PiAhIWNvZGUpLFxuICAgICAgc3dpdGNoTWFwKGNvZGUgPT4gdGhpcy5wcm9kdWN0U2VydmljZS5nZXQoY29kZSkpLFxuICAgICAgZmlsdGVyKEJvb2xlYW4pLFxuICAgICAgc3dpdGNoTWFwKChwOiBQcm9kdWN0KSA9PlxuICAgICAgICBjb21iaW5lTGF0ZXN0KFtcbiAgICAgICAgICB0aGlzLnJlc29sdmVIZWFkaW5nKHApLFxuICAgICAgICAgIHRoaXMucmVzb2x2ZVRpdGxlKHApLFxuICAgICAgICAgIHRoaXMucmVzb2x2ZURlc2NyaXB0aW9uKHApLFxuICAgICAgICAgIHRoaXMucmVzb2x2ZUJyZWFkY3J1bWJMYWJlbCgpLnBpcGUoXG4gICAgICAgICAgICBzd2l0Y2hNYXAobGFiZWwgPT4gdGhpcy5yZXNvbHZlQnJlYWRjcnVtYnMocCwgbGFiZWwpKVxuICAgICAgICAgICksXG4gICAgICAgICAgdGhpcy5yZXNvbHZlSW1hZ2UocCksXG4gICAgICAgIF0pXG4gICAgICApLFxuICAgICAgbWFwKChbaGVhZGluZywgdGl0bGUsIGRlc2NyaXB0aW9uLCBicmVhZGNydW1icywgaW1hZ2VdKSA9PiAoe1xuICAgICAgICBoZWFkaW5nLFxuICAgICAgICB0aXRsZSxcbiAgICAgICAgZGVzY3JpcHRpb24sXG4gICAgICAgIGJyZWFkY3J1bWJzLFxuICAgICAgICBpbWFnZSxcbiAgICAgIH0pKVxuICAgICk7XG4gIH1cblxuICByZXNvbHZlSGVhZGluZyhwcm9kdWN0OiBQcm9kdWN0KTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gdGhpcy50cmFuc2xhdGlvbi50cmFuc2xhdGUoJ3BhZ2VNZXRhUmVzb2x2ZXIucHJvZHVjdC5oZWFkaW5nJywge1xuICAgICAgaGVhZGluZzogcHJvZHVjdC5uYW1lLFxuICAgIH0pO1xuICB9XG5cbiAgcmVzb2x2ZVRpdGxlKHByb2R1Y3Q6IFByb2R1Y3QpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xuICAgIGxldCB0aXRsZSA9IHByb2R1Y3QubmFtZTtcbiAgICB0aXRsZSArPSB0aGlzLnJlc29sdmVGaXJzdENhdGVnb3J5KHByb2R1Y3QpO1xuICAgIHRpdGxlICs9IHRoaXMucmVzb2x2ZU1hbnVmYWN0dXJlcihwcm9kdWN0KTtcblxuICAgIHJldHVybiB0aGlzLnRyYW5zbGF0aW9uLnRyYW5zbGF0ZSgncGFnZU1ldGFSZXNvbHZlci5wcm9kdWN0LnRpdGxlJywge1xuICAgICAgdGl0bGU6IHRpdGxlLFxuICAgIH0pO1xuICB9XG5cbiAgcmVzb2x2ZURlc2NyaXB0aW9uKHByb2R1Y3Q6IFByb2R1Y3QpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xuICAgIHJldHVybiB0aGlzLnRyYW5zbGF0aW9uLnRyYW5zbGF0ZSgncGFnZU1ldGFSZXNvbHZlci5wcm9kdWN0LmRlc2NyaXB0aW9uJywge1xuICAgICAgZGVzY3JpcHRpb246IHByb2R1Y3Quc3VtbWFyeSxcbiAgICB9KTtcbiAgfVxuXG4gIHJlc29sdmVCcmVhZGNydW1iTGFiZWwoKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gdGhpcy50cmFuc2xhdGlvbi50cmFuc2xhdGUoJ2NvbW1vbi5ob21lJyk7XG4gIH1cblxuICByZXNvbHZlQnJlYWRjcnVtYnMoXG4gICAgcHJvZHVjdDogUHJvZHVjdCxcbiAgICBicmVhZGNydW1iTGFiZWw6IHN0cmluZ1xuICApOiBPYnNlcnZhYmxlPGFueVtdPiB7XG4gICAgY29uc3QgYnJlYWRjcnVtYnMgPSBbXTtcbiAgICBicmVhZGNydW1icy5wdXNoKHsgbGFiZWw6IGJyZWFkY3J1bWJMYWJlbCwgbGluazogJy8nIH0pO1xuICAgIGZvciAoY29uc3QgeyBuYW1lLCBjb2RlLCB1cmwgfSBvZiBwcm9kdWN0LmNhdGVnb3JpZXMpIHtcbiAgICAgIGJyZWFkY3J1bWJzLnB1c2goe1xuICAgICAgICBsYWJlbDogbmFtZSB8fCBjb2RlLFxuICAgICAgICBsaW5rOiB1cmwsXG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIG9mKGJyZWFkY3J1bWJzKTtcbiAgfVxuXG4gIHJlc29sdmVJbWFnZShwcm9kdWN0OiBhbnkpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xuICAgIGxldCByZXN1bHQ7XG4gICAgaWYgKFxuICAgICAgcHJvZHVjdC5pbWFnZXMgJiZcbiAgICAgIHByb2R1Y3QuaW1hZ2VzLlBSSU1BUlkgJiZcbiAgICAgIHByb2R1Y3QuaW1hZ2VzLlBSSU1BUlkuem9vbSAmJlxuICAgICAgcHJvZHVjdC5pbWFnZXMuUFJJTUFSWS56b29tLnVybFxuICAgICkge1xuICAgICAgcmVzdWx0ID0gcHJvZHVjdC5pbWFnZXMuUFJJTUFSWS56b29tLnVybDtcbiAgICB9XG4gICAgcmV0dXJuIG9mKHJlc3VsdCk7XG4gIH1cblxuICBwcml2YXRlIHJlc29sdmVGaXJzdENhdGVnb3J5KHByb2R1Y3Q6IFByb2R1Y3QpOiBzdHJpbmcge1xuICAgIGxldCBmaXJzdENhdGVnb3J5O1xuICAgIGlmIChwcm9kdWN0LmNhdGVnb3JpZXMgJiYgcHJvZHVjdC5jYXRlZ29yaWVzLmxlbmd0aCA+IDApIHtcbiAgICAgIGZpcnN0Q2F0ZWdvcnkgPSBwcm9kdWN0LmNhdGVnb3JpZXNbMF07XG4gICAgfVxuICAgIHJldHVybiBmaXJzdENhdGVnb3J5XG4gICAgICA/IGAgfCAke2ZpcnN0Q2F0ZWdvcnkubmFtZSB8fCBmaXJzdENhdGVnb3J5LmNvZGV9YFxuICAgICAgOiAnJztcbiAgfVxuXG4gIHByaXZhdGUgcmVzb2x2ZU1hbnVmYWN0dXJlcihwcm9kdWN0OiBQcm9kdWN0KTogc3RyaW5nIHtcbiAgICByZXR1cm4gcHJvZHVjdC5tYW51ZmFjdHVyZXIgPyBgIHwgJHtwcm9kdWN0Lm1hbnVmYWN0dXJlcn1gIDogJyc7XG4gIH1cbn1cbiJdfQ==