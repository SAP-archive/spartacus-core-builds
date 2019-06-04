/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { combineLatest, of } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';
import { CmsService } from '../../cms/facade/cms.service';
import { PageMetaResolver } from '../../cms/page/page-meta.resolver';
import { TranslationService } from '../../i18n';
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
        return this.cms.getCurrentPage().pipe(filter(Boolean), switchMap(page => {
            // only the existence of a plp component tells us if products
            // are rendered or if this is an ordinary content page
            if (this.hasProductListComponent(page)) {
                return this.productSearchService.getResults().pipe(filter(data => data.breadcrumbs && data.breadcrumbs.length > 0), switchMap(data => combineLatest([
                    this.resolveTitle(data),
                    this.resolveBreadcrumbLabel().pipe(switchMap(label => this.resolveBreadcrumbs(data, label))),
                ])), map(([title, breadcrumbs]) => ({ title, breadcrumbs })));
            }
            else {
                return of({
                    title: page.title || page.name,
                });
            }
        }));
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
        return !!Object.keys(page.slots).find(key => !!page.slots[key].components.find(comp => comp.typeCode === 'CMSProductListComponent'));
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
/** @nocollapse */ CategoryPageMetaResolver.ngInjectableDef = i0.defineInjectable({ factory: function CategoryPageMetaResolver_Factory() { return new CategoryPageMetaResolver(i0.inject(i1.RoutingService), i0.inject(i2.ProductSearchService), i0.inject(i3.CmsService), i0.inject(i4.TranslationService)); }, token: CategoryPageMetaResolver, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0ZWdvcnktcGFnZS1tZXRhLnJlc29sdmVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3Byb2R1Y3Qvc2VydmljZXMvY2F0ZWdvcnktcGFnZS1tZXRhLnJlc29sdmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxhQUFhLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3JELE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUUxRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUVyRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFDaEQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRWpELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUN0RSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQzs7Ozs7O0FBS3hFLE1BQU0sT0FBTyx3QkFBeUIsU0FBUSxnQkFBZ0I7Ozs7Ozs7SUFFNUQsWUFDWSxjQUE4QixFQUM5QixvQkFBMEMsRUFDMUMsR0FBZSxFQUNmLFdBQStCO1FBRXpDLEtBQUssRUFBRSxDQUFDO1FBTEUsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFDMUMsUUFBRyxHQUFILEdBQUcsQ0FBWTtRQUNmLGdCQUFXLEdBQVgsV0FBVyxDQUFvQjtRQUd6QyxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUM7SUFDekMsQ0FBQzs7OztJQUVELE9BQU87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QyxFQUFFLENBQ0osQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsVUFBVSxDQUFDLElBQUksQ0FDL0IsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxLQUFLLHlCQUF5QixDQUNwRCxDQUNKLENBQUM7SUFDSixDQUFDOzs7WUFyRkYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7O1lBTFEsY0FBYztZQUNkLG9CQUFvQjtZQVJwQixVQUFVO1lBSVYsa0JBQWtCOzs7Ozs7OztJQVl2QixrREFBd0M7Ozs7O0lBQ3hDLHdEQUFvRDs7Ozs7SUFDcEQsdUNBQXlCOzs7OztJQUN6QiwrQ0FBeUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBjb21iaW5lTGF0ZXN0LCBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCBtYXAsIHN3aXRjaE1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IENtc1NlcnZpY2UgfSBmcm9tICcuLi8uLi9jbXMvZmFjYWRlL2Ntcy5zZXJ2aWNlJztcbmltcG9ydCB7IFBhZ2UsIFBhZ2VNZXRhIH0gZnJvbSAnLi4vLi4vY21zL21vZGVsL3BhZ2UubW9kZWwnO1xuaW1wb3J0IHsgUGFnZU1ldGFSZXNvbHZlciB9IGZyb20gJy4uLy4uL2Ntcy9wYWdlL3BhZ2UtbWV0YS5yZXNvbHZlcic7XG5pbXBvcnQgeyBQYWdlVGl0bGVSZXNvbHZlciB9IGZyb20gJy4uLy4uL2Ntcy9wYWdlL3BhZ2UucmVzb2x2ZXJzJztcbmltcG9ydCB7IFRyYW5zbGF0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uL2kxOG4nO1xuaW1wb3J0IHsgUGFnZVR5cGUgfSBmcm9tICcuLi8uLi9tb2RlbC9jbXMubW9kZWwnO1xuaW1wb3J0IHsgUHJvZHVjdFNlYXJjaFBhZ2UgfSBmcm9tICcuLi8uLi9tb2RlbC9wcm9kdWN0LXNlYXJjaC5tb2RlbCc7XG5pbXBvcnQgeyBSb3V0aW5nU2VydmljZSB9IGZyb20gJy4uLy4uL3JvdXRpbmcvZmFjYWRlL3JvdXRpbmcuc2VydmljZSc7XG5pbXBvcnQgeyBQcm9kdWN0U2VhcmNoU2VydmljZSB9IGZyb20gJy4uL2ZhY2FkZS9wcm9kdWN0LXNlYXJjaC5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIENhdGVnb3J5UGFnZU1ldGFSZXNvbHZlciBleHRlbmRzIFBhZ2VNZXRhUmVzb2x2ZXJcbiAgaW1wbGVtZW50cyBQYWdlVGl0bGVSZXNvbHZlciB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCByb3V0aW5nU2VydmljZTogUm91dGluZ1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHByb2R1Y3RTZWFyY2hTZXJ2aWNlOiBQcm9kdWN0U2VhcmNoU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgY21zOiBDbXNTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCB0cmFuc2xhdGlvbjogVHJhbnNsYXRpb25TZXJ2aWNlXG4gICkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5wYWdlVHlwZSA9IFBhZ2VUeXBlLkNBVEVHT1JZX1BBR0U7XG4gIH1cblxuICByZXNvbHZlKCk6IE9ic2VydmFibGU8UGFnZU1ldGE+IHtcbiAgICByZXR1cm4gdGhpcy5jbXMuZ2V0Q3VycmVudFBhZ2UoKS5waXBlKFxuICAgICAgZmlsdGVyKEJvb2xlYW4pLFxuICAgICAgc3dpdGNoTWFwKHBhZ2UgPT4ge1xuICAgICAgICAvLyBvbmx5IHRoZSBleGlzdGVuY2Ugb2YgYSBwbHAgY29tcG9uZW50IHRlbGxzIHVzIGlmIHByb2R1Y3RzXG4gICAgICAgIC8vIGFyZSByZW5kZXJlZCBvciBpZiB0aGlzIGlzIGFuIG9yZGluYXJ5IGNvbnRlbnQgcGFnZVxuICAgICAgICBpZiAodGhpcy5oYXNQcm9kdWN0TGlzdENvbXBvbmVudChwYWdlKSkge1xuICAgICAgICAgIHJldHVybiB0aGlzLnByb2R1Y3RTZWFyY2hTZXJ2aWNlLmdldFJlc3VsdHMoKS5waXBlKFxuICAgICAgICAgICAgZmlsdGVyKGRhdGEgPT4gZGF0YS5icmVhZGNydW1icyAmJiBkYXRhLmJyZWFkY3J1bWJzLmxlbmd0aCA+IDApLFxuICAgICAgICAgICAgc3dpdGNoTWFwKGRhdGEgPT5cbiAgICAgICAgICAgICAgY29tYmluZUxhdGVzdChbXG4gICAgICAgICAgICAgICAgdGhpcy5yZXNvbHZlVGl0bGUoZGF0YSksXG4gICAgICAgICAgICAgICAgdGhpcy5yZXNvbHZlQnJlYWRjcnVtYkxhYmVsKCkucGlwZShcbiAgICAgICAgICAgICAgICAgIHN3aXRjaE1hcChsYWJlbCA9PiB0aGlzLnJlc29sdmVCcmVhZGNydW1icyhkYXRhLCBsYWJlbCkpXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBtYXAoKFt0aXRsZSwgYnJlYWRjcnVtYnNdKSA9PiAoeyB0aXRsZSwgYnJlYWRjcnVtYnMgfSkpXG4gICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gb2Yoe1xuICAgICAgICAgICAgdGl0bGU6IHBhZ2UudGl0bGUgfHwgcGFnZS5uYW1lLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICByZXNvbHZlVGl0bGUoZGF0YTogUHJvZHVjdFNlYXJjaFBhZ2UpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xuICAgIHJldHVybiB0aGlzLnRyYW5zbGF0aW9uLnRyYW5zbGF0ZSgncGFnZU1ldGFSZXNvbHZlci5jYXRlZ29yeS50aXRsZScsIHtcbiAgICAgIGNvdW50OiBkYXRhLnBhZ2luYXRpb24udG90YWxSZXN1bHRzLFxuICAgICAgcXVlcnk6IGRhdGEuYnJlYWRjcnVtYnNbMF0uZmFjZXRWYWx1ZU5hbWUsXG4gICAgfSk7XG4gIH1cblxuICByZXNvbHZlQnJlYWRjcnVtYkxhYmVsKCk6IE9ic2VydmFibGU8c3RyaW5nPiB7XG4gICAgcmV0dXJuIHRoaXMudHJhbnNsYXRpb24udHJhbnNsYXRlKCdjb21tb24uaG9tZScpO1xuICB9XG5cbiAgcmVzb2x2ZUJyZWFkY3J1bWJzKFxuICAgIGRhdGE6IFByb2R1Y3RTZWFyY2hQYWdlLFxuICAgIGJyZWFkY3J1bWJMYWJlbDogc3RyaW5nXG4gICk6IE9ic2VydmFibGU8YW55W10+IHtcbiAgICBjb25zdCBicmVhZGNydW1icyA9IFtdO1xuICAgIGJyZWFkY3J1bWJzLnB1c2goeyBsYWJlbDogYnJlYWRjcnVtYkxhYmVsLCBsaW5rOiAnLycgfSk7XG4gICAgZm9yIChjb25zdCBiciBvZiBkYXRhLmJyZWFkY3J1bWJzKSB7XG4gICAgICBpZiAoYnIuZmFjZXRDb2RlID09PSAnY2F0ZWdvcnknKSB7XG4gICAgICAgIGJyZWFkY3J1bWJzLnB1c2goe1xuICAgICAgICAgIGxhYmVsOiBici5mYWNldFZhbHVlTmFtZSxcbiAgICAgICAgICBsaW5rOiBgL2MvJHtici5mYWNldFZhbHVlQ29kZX1gLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGlmIChici5mYWNldENvZGUgPT09ICdicmFuZCcpIHtcbiAgICAgICAgYnJlYWRjcnVtYnMucHVzaCh7XG4gICAgICAgICAgbGFiZWw6IGJyLmZhY2V0VmFsdWVOYW1lLFxuICAgICAgICAgIGxpbms6IGAvQnJhbmRzLyR7YnIuZmFjZXRWYWx1ZU5hbWV9L2MvJHtici5mYWNldFZhbHVlQ29kZX1gLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG9mKGJyZWFkY3J1bWJzKTtcbiAgfVxuXG4gIHByaXZhdGUgaGFzUHJvZHVjdExpc3RDb21wb25lbnQocGFnZTogUGFnZSk6IGJvb2xlYW4ge1xuICAgIC8vIFByb2R1Y3RMaXN0Q29tcG9uZW50XG4gICAgcmV0dXJuICEhT2JqZWN0LmtleXMocGFnZS5zbG90cykuZmluZChcbiAgICAgIGtleSA9PlxuICAgICAgICAhIXBhZ2Uuc2xvdHNba2V5XS5jb21wb25lbnRzLmZpbmQoXG4gICAgICAgICAgY29tcCA9PiBjb21wLnR5cGVDb2RlID09PSAnQ01TUHJvZHVjdExpc3RDb21wb25lbnQnXG4gICAgICAgIClcbiAgICApO1xuICB9XG59XG4iXX0=