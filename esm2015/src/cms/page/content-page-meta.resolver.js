/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { combineLatest, of } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';
import { PageType } from '../../occ/occ-models/occ.models';
import { CmsService } from '../facade/cms.service';
import { PageMetaResolver } from './page-meta.resolver';
import * as i0 from "@angular/core";
import * as i1 from "../facade/cms.service";
export class ContentPageMetaResolver extends PageMetaResolver {
    /**
     * @param {?} cms
     */
    constructor(cms) {
        super();
        this.cms = cms;
        this.pageType = PageType.CONTENT_PAGE;
    }
    /**
     * @return {?}
     */
    resolve() {
        return this.cms.getCurrentPage().pipe(filter(Boolean), switchMap(page => combineLatest([this.resolveTitle(page), this.resolveBreadcrumbs(page)])), map(([title, breadcrumbs]) => ({ title, breadcrumbs })));
    }
    /**
     * @param {?} page
     * @return {?}
     */
    resolveTitle(page) {
        return of(page.title);
    }
    /**
     * @param {?} _page
     * @return {?}
     */
    resolveBreadcrumbs(_page) {
        // as long as we do not have CMSX-8689 in place
        // we need specific resolvers for nested pages
        return of([{ label: 'Home', link: '/' }]);
    }
}
ContentPageMetaResolver.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
ContentPageMetaResolver.ctorParameters = () => [
    { type: CmsService }
];
/** @nocollapse */ ContentPageMetaResolver.ngInjectableDef = i0.defineInjectable({ factory: function ContentPageMetaResolver_Factory() { return new ContentPageMetaResolver(i0.inject(i1.CmsService)); }, token: ContentPageMetaResolver, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @protected
     */
    ContentPageMetaResolver.prototype.cms;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudC1wYWdlLW1ldGEucmVzb2x2ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY21zL3BhZ2UvY29udGVudC1wYWdlLW1ldGEucmVzb2x2ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGFBQWEsRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDckQsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQzNELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUVuRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7O0FBTXhELE1BQU0sT0FBTyx1QkFBd0IsU0FBUSxnQkFBZ0I7Ozs7SUFFM0QsWUFBc0IsR0FBZTtRQUNuQyxLQUFLLEVBQUUsQ0FBQztRQURZLFFBQUcsR0FBSCxHQUFHLENBQVk7UUFFbkMsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUMsWUFBWSxDQUFDO0lBQ3hDLENBQUM7Ozs7SUFFRCxPQUFPO1FBQ0wsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxDQUFDLElBQUksQ0FDbkMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUNmLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUNmLGFBQWEsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FDeEUsRUFDRCxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxXQUFXLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQ3hELENBQUM7SUFDSixDQUFDOzs7OztJQUVELFlBQVksQ0FBQyxJQUFVO1FBQ3JCLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN4QixDQUFDOzs7OztJQUVELGtCQUFrQixDQUFDLEtBQVc7UUFDNUIsK0NBQStDO1FBQy9DLDhDQUE4QztRQUM5QyxPQUFPLEVBQUUsQ0FBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzVDLENBQUM7OztZQTVCRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7WUFQUSxVQUFVOzs7Ozs7OztJQVVMLHNDQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGNvbWJpbmVMYXRlc3QsIE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIG1hcCwgc3dpdGNoTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgUGFnZVR5cGUgfSBmcm9tICcuLi8uLi9vY2Mvb2NjLW1vZGVscy9vY2MubW9kZWxzJztcbmltcG9ydCB7IENtc1NlcnZpY2UgfSBmcm9tICcuLi9mYWNhZGUvY21zLnNlcnZpY2UnO1xuaW1wb3J0IHsgUGFnZSwgUGFnZU1ldGEgfSBmcm9tICcuLi9tb2RlbC9wYWdlLm1vZGVsJztcbmltcG9ydCB7IFBhZ2VNZXRhUmVzb2x2ZXIgfSBmcm9tICcuL3BhZ2UtbWV0YS5yZXNvbHZlcic7XG5pbXBvcnQgeyBQYWdlQnJlYWRjcnVtYlJlc29sdmVyLCBQYWdlVGl0bGVSZXNvbHZlciB9IGZyb20gJy4vcGFnZS5yZXNvbHZlcnMnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgQ29udGVudFBhZ2VNZXRhUmVzb2x2ZXIgZXh0ZW5kcyBQYWdlTWV0YVJlc29sdmVyXG4gIGltcGxlbWVudHMgUGFnZVRpdGxlUmVzb2x2ZXIsIFBhZ2VCcmVhZGNydW1iUmVzb2x2ZXIge1xuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgY21zOiBDbXNTZXJ2aWNlKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnBhZ2VUeXBlID0gUGFnZVR5cGUuQ09OVEVOVF9QQUdFO1xuICB9XG5cbiAgcmVzb2x2ZSgpOiBPYnNlcnZhYmxlPFBhZ2VNZXRhPiB7XG4gICAgcmV0dXJuIHRoaXMuY21zLmdldEN1cnJlbnRQYWdlKCkucGlwZShcbiAgICAgIGZpbHRlcihCb29sZWFuKSxcbiAgICAgIHN3aXRjaE1hcChwYWdlID0+XG4gICAgICAgIGNvbWJpbmVMYXRlc3QoW3RoaXMucmVzb2x2ZVRpdGxlKHBhZ2UpLCB0aGlzLnJlc29sdmVCcmVhZGNydW1icyhwYWdlKV0pXG4gICAgICApLFxuICAgICAgbWFwKChbdGl0bGUsIGJyZWFkY3J1bWJzXSkgPT4gKHsgdGl0bGUsIGJyZWFkY3J1bWJzIH0pKVxuICAgICk7XG4gIH1cblxuICByZXNvbHZlVGl0bGUocGFnZTogUGFnZSk6IE9ic2VydmFibGU8c3RyaW5nPiB7XG4gICAgcmV0dXJuIG9mKHBhZ2UudGl0bGUpO1xuICB9XG5cbiAgcmVzb2x2ZUJyZWFkY3J1bWJzKF9wYWdlOiBQYWdlKTogT2JzZXJ2YWJsZTxhbnlbXT4ge1xuICAgIC8vIGFzIGxvbmcgYXMgd2UgZG8gbm90IGhhdmUgQ01TWC04Njg5IGluIHBsYWNlXG4gICAgLy8gd2UgbmVlZCBzcGVjaWZpYyByZXNvbHZlcnMgZm9yIG5lc3RlZCBwYWdlc1xuICAgIHJldHVybiBvZihbeyBsYWJlbDogJ0hvbWUnLCBsaW5rOiAnLycgfV0pO1xuICB9XG59XG4iXX0=