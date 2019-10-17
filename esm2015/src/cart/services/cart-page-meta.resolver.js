/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { combineLatest, of } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';
import { CmsService } from '../../cms/facade/cms.service';
import { PageRobotsMeta } from '../../cms/model/page.model';
import { PageMetaResolver } from '../../cms/page/page-meta.resolver';
import { PageType } from '../../model/cms.model';
import * as i0 from "@angular/core";
import * as i1 from "../../cms/facade/cms.service";
/**
 * Resolves the page data for all Content Pages based on the `PageType.CONTENT_PAGE`
 * and the `CartPageTemplate`. If the cart page matches this template, the more generic
 * `ContentPageMetaResolver` is overriden by this resolver.
 *
 * The page title and robots are resolved in this implementation only.
 */
export class CartPageMetaResolver extends PageMetaResolver {
    /**
     * @param {?} cms
     */
    constructor(cms) {
        super();
        this.cms = cms;
        this.cms$ = this.cms
            .getCurrentPage()
            .pipe(filter((/**
         * @param {?} page
         * @return {?}
         */
        page => !!page)));
        this.pageType = PageType.CONTENT_PAGE;
        this.pageTemplate = 'CartPageTemplate';
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
        return this.cms$.pipe(switchMap((/**
         * @param {?} page
         * @return {?}
         */
        page => combineLatest([this.resolveTitle(page), this.resolveRobots()]))), map((/**
         * @param {?} __0
         * @return {?}
         */
        ([title, robots]) => ({ title, robots }))));
    }
    /**
     * @param {?=} page
     * @return {?}
     */
    resolveTitle(page) {
        return page ? of(page.title) : this.cms$.pipe(map((/**
         * @param {?} p
         * @return {?}
         */
        p => p.title)));
    }
    /**
     * @return {?}
     */
    resolveRobots() {
        return of([PageRobotsMeta.NOFOLLOW, PageRobotsMeta.NOINDEX]);
    }
}
CartPageMetaResolver.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
CartPageMetaResolver.ctorParameters = () => [
    { type: CmsService }
];
/** @nocollapse */ CartPageMetaResolver.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function CartPageMetaResolver_Factory() { return new CartPageMetaResolver(i0.ɵɵinject(i1.CmsService)); }, token: CartPageMetaResolver, providedIn: "root" });
if (false) {
    /** @type {?} */
    CartPageMetaResolver.prototype.cms$;
    /**
     * @type {?}
     * @protected
     */
    CartPageMetaResolver.prototype.cms;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1wYWdlLW1ldGEucmVzb2x2ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY2FydC9zZXJ2aWNlcy9jYXJ0LXBhZ2UtbWV0YS5yZXNvbHZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsYUFBYSxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNyRCxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDMUQsT0FBTyxFQUFrQixjQUFjLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUM1RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUtyRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7Ozs7Ozs7Ozs7QUFZakQsTUFBTSxPQUFPLG9CQUFxQixTQUFRLGdCQUFnQjs7OztJQU14RCxZQUFzQixHQUFlO1FBQ25DLEtBQUssRUFBRSxDQUFDO1FBRFksUUFBRyxHQUFILEdBQUcsQ0FBWTtRQUpyQyxTQUFJLEdBQXFCLElBQUksQ0FBQyxHQUFHO2FBQzlCLGNBQWMsRUFBRTthQUNoQixJQUFJLENBQUMsTUFBTTs7OztRQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBQyxDQUFDLENBQUM7UUFJOUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUMsWUFBWSxDQUFDO1FBQ3RDLElBQUksQ0FBQyxZQUFZLEdBQUcsa0JBQWtCLENBQUM7SUFDekMsQ0FBQzs7Ozs7Ozs7O0lBU0QsT0FBTztRQUNMLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQ25CLFNBQVM7Ozs7UUFBQyxJQUFJLENBQUMsRUFBRSxDQUNmLGFBQWEsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsRUFDL0QsRUFDRCxHQUFHOzs7O1FBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxNQUFNLENBQWtCLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBQyxDQUMvRCxDQUFDO0lBQ0osQ0FBQzs7Ozs7SUFTRCxZQUFZLENBQUMsSUFBVztRQUN0QixPQUFPLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRzs7OztRQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBQyxDQUFDLENBQUM7SUFDbkUsQ0FBQzs7OztJQUVELGFBQWE7UUFDWCxPQUFPLEVBQUUsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxRQUFRLEVBQUUsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDL0QsQ0FBQzs7O1lBNUNGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQWxCUSxVQUFVOzs7OztJQXFCakIsb0NBRWdDOzs7OztJQUVwQixtQ0FBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBjb21iaW5lTGF0ZXN0LCBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCBtYXAsIHN3aXRjaE1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IENtc1NlcnZpY2UgfSBmcm9tICcuLi8uLi9jbXMvZmFjYWRlL2Ntcy5zZXJ2aWNlJztcbmltcG9ydCB7IFBhZ2UsIFBhZ2VNZXRhLCBQYWdlUm9ib3RzTWV0YSB9IGZyb20gJy4uLy4uL2Ntcy9tb2RlbC9wYWdlLm1vZGVsJztcbmltcG9ydCB7IFBhZ2VNZXRhUmVzb2x2ZXIgfSBmcm9tICcuLi8uLi9jbXMvcGFnZS9wYWdlLW1ldGEucmVzb2x2ZXInO1xuaW1wb3J0IHtcbiAgUGFnZVJvYm90c1Jlc29sdmVyLFxuICBQYWdlVGl0bGVSZXNvbHZlcixcbn0gZnJvbSAnLi4vLi4vY21zL3BhZ2UvcGFnZS5yZXNvbHZlcnMnO1xuaW1wb3J0IHsgUGFnZVR5cGUgfSBmcm9tICcuLi8uLi9tb2RlbC9jbXMubW9kZWwnO1xuXG4vKipcbiAqIFJlc29sdmVzIHRoZSBwYWdlIGRhdGEgZm9yIGFsbCBDb250ZW50IFBhZ2VzIGJhc2VkIG9uIHRoZSBgUGFnZVR5cGUuQ09OVEVOVF9QQUdFYFxuICogYW5kIHRoZSBgQ2FydFBhZ2VUZW1wbGF0ZWAuIElmIHRoZSBjYXJ0IHBhZ2UgbWF0Y2hlcyB0aGlzIHRlbXBsYXRlLCB0aGUgbW9yZSBnZW5lcmljXG4gKiBgQ29udGVudFBhZ2VNZXRhUmVzb2x2ZXJgIGlzIG92ZXJyaWRlbiBieSB0aGlzIHJlc29sdmVyLlxuICpcbiAqIFRoZSBwYWdlIHRpdGxlIGFuZCByb2JvdHMgYXJlIHJlc29sdmVkIGluIHRoaXMgaW1wbGVtZW50YXRpb24gb25seS5cbiAqL1xuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIENhcnRQYWdlTWV0YVJlc29sdmVyIGV4dGVuZHMgUGFnZU1ldGFSZXNvbHZlclxuICBpbXBsZW1lbnRzIFBhZ2VUaXRsZVJlc29sdmVyLCBQYWdlUm9ib3RzUmVzb2x2ZXIge1xuICBjbXMkOiBPYnNlcnZhYmxlPFBhZ2U+ID0gdGhpcy5jbXNcbiAgICAuZ2V0Q3VycmVudFBhZ2UoKVxuICAgIC5waXBlKGZpbHRlcihwYWdlID0+ICEhcGFnZSkpO1xuXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBjbXM6IENtc1NlcnZpY2UpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMucGFnZVR5cGUgPSBQYWdlVHlwZS5DT05URU5UX1BBR0U7XG4gICAgdGhpcy5wYWdlVGVtcGxhdGUgPSAnQ2FydFBhZ2VUZW1wbGF0ZSc7XG4gIH1cblxuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgc2luY2UgdmVyc2lvbiAxLjNcbiAgICpcbiAgICogVGhlIHJlc29sdmUgbWV0aG9kIGlzIG5vIGxvbmdlciBwcmVmZXJyZWQgYW5kIHdpbGwgYmUgcmVtb3ZlZCB3aXRoIHJlbGVhc2UgMi4wLlxuICAgKiBUaGUgY2FsbGVyIGBQYWdlTWV0YVNlcnZpY2VgIHNlcnZpY2UgaXMgaW1wcm92ZWQgdG8gZXhwZWN0IGFsbCBpbmRpdmlkdWFsIHJlc29sdmVyc1xuICAgKiBpbnN0ZWFkLCBzbyB0aGF0IHRoZSBjb2RlIGlzIGVhc2llciBleHRlbnNpYmxlLlxuICAgKi9cbiAgcmVzb2x2ZSgpOiBPYnNlcnZhYmxlPFBhZ2VNZXRhPiB8IGFueSB7XG4gICAgcmV0dXJuIHRoaXMuY21zJC5waXBlKFxuICAgICAgc3dpdGNoTWFwKHBhZ2UgPT5cbiAgICAgICAgY29tYmluZUxhdGVzdChbdGhpcy5yZXNvbHZlVGl0bGUocGFnZSksIHRoaXMucmVzb2x2ZVJvYm90cygpXSlcbiAgICAgICksXG4gICAgICBtYXAoKFt0aXRsZSwgcm9ib3RzXTogW3N0cmluZywgYW55W11dKSA9PiAoeyB0aXRsZSwgcm9ib3RzIH0pKVxuICAgICk7XG4gIH1cblxuICByZXNvbHZlVGl0bGUoKTogT2JzZXJ2YWJsZTxzdHJpbmc+O1xuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgc2luY2UgdmVyc2lvbiAxLjNcbiAgICogV2l0aCAyLjAsIHRoZSBhcmd1bWVudChzKSB3aWxsIGJlIHJlbW92ZWQgYW5kIHRoZSByZXR1cm4gdHlwZSB3aWxsIGNoYW5nZS4gVXNlIGByZXNvbHZlVGl0bGUoKWAgaW5zdGVhZFxuICAgKi9cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiB1bmlmaWVkLXNpZ25hdHVyZXNcbiAgcmVzb2x2ZVRpdGxlKHBhZ2U6IFBhZ2UpOiBPYnNlcnZhYmxlPHN0cmluZz47XG4gIHJlc29sdmVUaXRsZShwYWdlPzogUGFnZSk6IE9ic2VydmFibGU8c3RyaW5nPiB7XG4gICAgcmV0dXJuIHBhZ2UgPyBvZihwYWdlLnRpdGxlKSA6IHRoaXMuY21zJC5waXBlKG1hcChwID0+IHAudGl0bGUpKTtcbiAgfVxuXG4gIHJlc29sdmVSb2JvdHMoKTogT2JzZXJ2YWJsZTxQYWdlUm9ib3RzTWV0YVtdPiB7XG4gICAgcmV0dXJuIG9mKFtQYWdlUm9ib3RzTWV0YS5OT0ZPTExPVywgUGFnZVJvYm90c01ldGEuTk9JTkRFWF0pO1xuICB9XG59XG4iXX0=