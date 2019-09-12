/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
export class CategoryPageMetaResolver extends PageMetaResolver {
    /**
     * @param {?} routingService
     * @param {?} productSearchService
     * @param {?} cms
     * @param {?} translation
     */
    constructor(routingService, productSearchService, cms, translation) {
        super();
        this.routingService = routingService;
        this.productSearchService = productSearchService;
        this.cms = cms;
        this.translation = translation;
        this.pageType = PageType.CATEGORY_PAGE;
    }
    /**
     * @return {?}
     */
    resolve() {
        return this.cms.getCurrentPage().pipe(filter(Boolean), switchMap((/**
         * @param {?} page
         * @return {?}
         */
        (page) => {
            // only the existence of a plp component tells us if products
            // are rendered or if this is an ordinary content page
            if (this.hasProductListComponent(page)) {
                return this.productSearchService.getResults().pipe(filter((/**
                 * @param {?} data
                 * @return {?}
                 */
                data => data.breadcrumbs && data.breadcrumbs.length > 0)), switchMap((/**
                 * @param {?} data
                 * @return {?}
                 */
                data => combineLatest([
                    this.resolveTitle(data),
                    this.resolveBreadcrumbLabel().pipe(switchMap((/**
                     * @param {?} label
                     * @return {?}
                     */
                    label => this.resolveBreadcrumbs(data, label)))),
                ]))), map((/**
                 * @param {?} __0
                 * @return {?}
                 */
                ([title, breadcrumbs]) => ({ title, breadcrumbs }))));
            }
            else {
                return of({
                    title: page.title || page.name,
                });
            }
        })));
    }
    /**
     * @param {?} data
     * @return {?}
     */
    resolveTitle(data) {
        return this.translation.translate('pageMetaResolver.category.title', {
            count: data.pagination.totalResults,
            query: data.breadcrumbs[0].facetValueName,
        });
    }
    /**
     * @return {?}
     */
    resolveBreadcrumbLabel() {
        return this.translation.translate('common.home');
    }
    /**
     * @param {?} data
     * @param {?} breadcrumbLabel
     * @return {?}
     */
    resolveBreadcrumbs(data, breadcrumbLabel) {
        /** @type {?} */
        const breadcrumbs = [];
        breadcrumbs.push({ label: breadcrumbLabel, link: '/' });
        for (const br of data.breadcrumbs) {
            if (br.facetCode === 'category') {
                breadcrumbs.push({
                    label: br.facetValueName,
                    link: `/c/${br.facetValueCode}`,
                });
            }
            if (br.facetCode === 'brand') {
                breadcrumbs.push({
                    label: br.facetValueName,
                    link: `/Brands/${br.facetValueName}/c/${br.facetValueCode}`,
                });
            }
        }
        return of(breadcrumbs);
    }
    /**
     * @private
     * @param {?} page
     * @return {?}
     */
    hasProductListComponent(page) {
        // ProductListComponent
        return !!Object.keys(page.slots).find((/**
         * @param {?} key
         * @return {?}
         */
        key => !!page.slots[key].components.find((/**
         * @param {?} comp
         * @return {?}
         */
        comp => comp.typeCode === 'CMSProductListComponent'))));
    }
}
CategoryPageMetaResolver.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
CategoryPageMetaResolver.ctorParameters = () => [
    { type: RoutingService },
    { type: ProductSearchService },
    { type: CmsService },
    { type: TranslationService }
];
/** @nocollapse */ CategoryPageMetaResolver.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function CategoryPageMetaResolver_Factory() { return new CategoryPageMetaResolver(i0.ɵɵinject(i1.RoutingService), i0.ɵɵinject(i2.ProductSearchService), i0.ɵɵinject(i3.CmsService), i0.ɵɵinject(i4.TranslationService)); }, token: CategoryPageMetaResolver, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0ZWdvcnktcGFnZS1tZXRhLnJlc29sdmVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3Byb2R1Y3Qvc2VydmljZXMvY2F0ZWdvcnktcGFnZS1tZXRhLnJlc29sdmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxhQUFhLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3JELE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUUxRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUVyRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNwRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFakQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGtDQUFrQyxDQUFDOzs7Ozs7QUFLeEUsTUFBTSxPQUFPLHdCQUF5QixTQUFRLGdCQUFnQjs7Ozs7OztJQUU1RCxZQUNZLGNBQThCLEVBQzlCLG9CQUEwQyxFQUMxQyxHQUFlLEVBQ2YsV0FBK0I7UUFFekMsS0FBSyxFQUFFLENBQUM7UUFMRSxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQUMxQyxRQUFHLEdBQUgsR0FBRyxDQUFZO1FBQ2YsZ0JBQVcsR0FBWCxXQUFXLENBQW9CO1FBR3pDLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQztJQUN6QyxDQUFDOzs7O0lBRUQsT0FB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QUMsQ0FBQyxJQUFJOzs7O1FBQ25DLEdBQUcsQ0FBQyxFQUFFLENBQ0osQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsVUFBVSxDQUFDLElBQUk7Ozs7UUFDL0IsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxLQUFLLHlCQUF5QixFQUNwRCxFQUNKLENBQUM7SUFDSixDQUFDOzs7WUFyRkYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7O1lBTFEsY0FBYztZQUNkLG9CQUFvQjtZQVJwQixVQUFVO1lBSVYsa0JBQWtCOzs7Ozs7OztJQVl2QixrREFBd0M7Ozs7O0lBQ3hDLHdEQUFvRDs7Ozs7SUFDcEQsdUNBQXlCOzs7OztJQUN6QiwrQ0FBeUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBjb21iaW5lTGF0ZXN0LCBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCBtYXAsIHN3aXRjaE1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IENtc1NlcnZpY2UgfSBmcm9tICcuLi8uLi9jbXMvZmFjYWRlL2Ntcy5zZXJ2aWNlJztcbmltcG9ydCB7IFBhZ2UsIFBhZ2VNZXRhIH0gZnJvbSAnLi4vLi4vY21zL21vZGVsL3BhZ2UubW9kZWwnO1xuaW1wb3J0IHsgUGFnZU1ldGFSZXNvbHZlciB9IGZyb20gJy4uLy4uL2Ntcy9wYWdlL3BhZ2UtbWV0YS5yZXNvbHZlcic7XG5pbXBvcnQgeyBQYWdlVGl0bGVSZXNvbHZlciB9IGZyb20gJy4uLy4uL2Ntcy9wYWdlL3BhZ2UucmVzb2x2ZXJzJztcbmltcG9ydCB7IFRyYW5zbGF0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uL2kxOG4vdHJhbnNsYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBQYWdlVHlwZSB9IGZyb20gJy4uLy4uL21vZGVsL2Ntcy5tb2RlbCc7XG5pbXBvcnQgeyBQcm9kdWN0U2VhcmNoUGFnZSB9IGZyb20gJy4uLy4uL21vZGVsL3Byb2R1Y3Qtc2VhcmNoLm1vZGVsJztcbmltcG9ydCB7IFJvdXRpbmdTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vcm91dGluZy9mYWNhZGUvcm91dGluZy5zZXJ2aWNlJztcbmltcG9ydCB7IFByb2R1Y3RTZWFyY2hTZXJ2aWNlIH0gZnJvbSAnLi4vZmFjYWRlL3Byb2R1Y3Qtc2VhcmNoLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgQ2F0ZWdvcnlQYWdlTWV0YVJlc29sdmVyIGV4dGVuZHMgUGFnZU1ldGFSZXNvbHZlclxuICBpbXBsZW1lbnRzIFBhZ2VUaXRsZVJlc29sdmVyIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIHJvdXRpbmdTZXJ2aWNlOiBSb3V0aW5nU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgcHJvZHVjdFNlYXJjaFNlcnZpY2U6IFByb2R1Y3RTZWFyY2hTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBjbXM6IENtc1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHRyYW5zbGF0aW9uOiBUcmFuc2xhdGlvblNlcnZpY2VcbiAgKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnBhZ2VUeXBlID0gUGFnZVR5cGUuQ0FURUdPUllfUEFHRTtcbiAgfVxuXG4gIHJlc29sdmUoKTogT2JzZXJ2YWJsZTxQYWdlTWV0YT4ge1xuICAgIHJldHVybiB0aGlzLmNtcy5nZXRDdXJyZW50UGFnZSgpLnBpcGUoXG4gICAgICBmaWx0ZXIoQm9vbGVhbiksXG4gICAgICBzd2l0Y2hNYXAoKHBhZ2U6IFBhZ2UpID0+IHtcbiAgICAgICAgLy8gb25seSB0aGUgZXhpc3RlbmNlIG9mIGEgcGxwIGNvbXBvbmVudCB0ZWxscyB1cyBpZiBwcm9kdWN0c1xuICAgICAgICAvLyBhcmUgcmVuZGVyZWQgb3IgaWYgdGhpcyBpcyBhbiBvcmRpbmFyeSBjb250ZW50IHBhZ2VcbiAgICAgICAgaWYgKHRoaXMuaGFzUHJvZHVjdExpc3RDb21wb25lbnQocGFnZSkpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5wcm9kdWN0U2VhcmNoU2VydmljZS5nZXRSZXN1bHRzKCkucGlwZShcbiAgICAgICAgICAgIGZpbHRlcihkYXRhID0+IGRhdGEuYnJlYWRjcnVtYnMgJiYgZGF0YS5icmVhZGNydW1icy5sZW5ndGggPiAwKSxcbiAgICAgICAgICAgIHN3aXRjaE1hcChkYXRhID0+XG4gICAgICAgICAgICAgIGNvbWJpbmVMYXRlc3QoW1xuICAgICAgICAgICAgICAgIHRoaXMucmVzb2x2ZVRpdGxlKGRhdGEpLFxuICAgICAgICAgICAgICAgIHRoaXMucmVzb2x2ZUJyZWFkY3J1bWJMYWJlbCgpLnBpcGUoXG4gICAgICAgICAgICAgICAgICBzd2l0Y2hNYXAobGFiZWwgPT4gdGhpcy5yZXNvbHZlQnJlYWRjcnVtYnMoZGF0YSwgbGFiZWwpKVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgbWFwKChbdGl0bGUsIGJyZWFkY3J1bWJzXSkgPT4gKHsgdGl0bGUsIGJyZWFkY3J1bWJzIH0pKVxuICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIG9mKHtcbiAgICAgICAgICAgIHRpdGxlOiBwYWdlLnRpdGxlIHx8IHBhZ2UubmFtZSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgcmVzb2x2ZVRpdGxlKGRhdGE6IFByb2R1Y3RTZWFyY2hQYWdlKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gdGhpcy50cmFuc2xhdGlvbi50cmFuc2xhdGUoJ3BhZ2VNZXRhUmVzb2x2ZXIuY2F0ZWdvcnkudGl0bGUnLCB7XG4gICAgICBjb3VudDogZGF0YS5wYWdpbmF0aW9uLnRvdGFsUmVzdWx0cyxcbiAgICAgIHF1ZXJ5OiBkYXRhLmJyZWFkY3J1bWJzWzBdLmZhY2V0VmFsdWVOYW1lLFxuICAgIH0pO1xuICB9XG5cbiAgcmVzb2x2ZUJyZWFkY3J1bWJMYWJlbCgpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xuICAgIHJldHVybiB0aGlzLnRyYW5zbGF0aW9uLnRyYW5zbGF0ZSgnY29tbW9uLmhvbWUnKTtcbiAgfVxuXG4gIHJlc29sdmVCcmVhZGNydW1icyhcbiAgICBkYXRhOiBQcm9kdWN0U2VhcmNoUGFnZSxcbiAgICBicmVhZGNydW1iTGFiZWw6IHN0cmluZ1xuICApOiBPYnNlcnZhYmxlPGFueVtdPiB7XG4gICAgY29uc3QgYnJlYWRjcnVtYnMgPSBbXTtcbiAgICBicmVhZGNydW1icy5wdXNoKHsgbGFiZWw6IGJyZWFkY3J1bWJMYWJlbCwgbGluazogJy8nIH0pO1xuICAgIGZvciAoY29uc3QgYnIgb2YgZGF0YS5icmVhZGNydW1icykge1xuICAgICAgaWYgKGJyLmZhY2V0Q29kZSA9PT0gJ2NhdGVnb3J5Jykge1xuICAgICAgICBicmVhZGNydW1icy5wdXNoKHtcbiAgICAgICAgICBsYWJlbDogYnIuZmFjZXRWYWx1ZU5hbWUsXG4gICAgICAgICAgbGluazogYC9jLyR7YnIuZmFjZXRWYWx1ZUNvZGV9YCxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBpZiAoYnIuZmFjZXRDb2RlID09PSAnYnJhbmQnKSB7XG4gICAgICAgIGJyZWFkY3J1bWJzLnB1c2goe1xuICAgICAgICAgIGxhYmVsOiBici5mYWNldFZhbHVlTmFtZSxcbiAgICAgICAgICBsaW5rOiBgL0JyYW5kcy8ke2JyLmZhY2V0VmFsdWVOYW1lfS9jLyR7YnIuZmFjZXRWYWx1ZUNvZGV9YCxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBvZihicmVhZGNydW1icyk7XG4gIH1cblxuICBwcml2YXRlIGhhc1Byb2R1Y3RMaXN0Q29tcG9uZW50KHBhZ2U6IFBhZ2UpOiBib29sZWFuIHtcbiAgICAvLyBQcm9kdWN0TGlzdENvbXBvbmVudFxuICAgIHJldHVybiAhIU9iamVjdC5rZXlzKHBhZ2Uuc2xvdHMpLmZpbmQoXG4gICAgICBrZXkgPT5cbiAgICAgICAgISFwYWdlLnNsb3RzW2tleV0uY29tcG9uZW50cy5maW5kKFxuICAgICAgICAgIGNvbXAgPT4gY29tcC50eXBlQ29kZSA9PT0gJ0NNU1Byb2R1Y3RMaXN0Q29tcG9uZW50J1xuICAgICAgICApXG4gICAgKTtcbiAgfVxufVxuIl19