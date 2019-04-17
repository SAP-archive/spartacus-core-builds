/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Inject } from '@angular/core';
import { of } from 'rxjs';
import { switchMap, filter } from 'rxjs/operators';
import { CmsService } from './cms.service';
import { PageMetaResolver } from '../page/page-meta.resolver';
import * as i0 from "@angular/core";
import * as i1 from "../page/page-meta.resolver";
import * as i2 from "./cms.service";
var PageMetaService = /** @class */ (function () {
    function PageMetaService(resolvers, cms) {
        this.resolvers = resolvers;
        this.cms = cms;
    }
    /**
     * @return {?}
     */
    PageMetaService.prototype.getMeta = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return this.cms.getCurrentPage().pipe(filter(Boolean), switchMap(function (page) {
            /** @type {?} */
            var metaResolver = _this.getMetaResolver(page);
            if (metaResolver) {
                return metaResolver.resolve();
            }
            else {
                // we do not have a page resolver
                return of(null);
            }
        }));
    };
    /**
     * return the title resolver with the best match
     * title resovers can by default match on PageType and page template
     * but custom match comparisors can be implemented.
     */
    /**
     * return the title resolver with the best match
     * title resovers can by default match on PageType and page template
     * but custom match comparisors can be implemented.
     * @protected
     * @param {?} page
     * @return {?}
     */
    PageMetaService.prototype.getMetaResolver = /**
     * return the title resolver with the best match
     * title resovers can by default match on PageType and page template
     * but custom match comparisors can be implemented.
     * @protected
     * @param {?} page
     * @return {?}
     */
    function (page) {
        /** @type {?} */
        var matchingResolvers = this.resolvers.filter(function (resolver) { return resolver.getScore(page) > 0; });
        matchingResolvers.sort(function (a, b) {
            return b.getScore(page) - a.getScore(page);
        });
        return matchingResolvers[0];
    };
    PageMetaService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    PageMetaService.ctorParameters = function () { return [
        { type: Array, decorators: [{ type: Inject, args: [PageMetaResolver,] }] },
        { type: CmsService }
    ]; };
    /** @nocollapse */ PageMetaService.ngInjectableDef = i0.defineInjectable({ factory: function PageMetaService_Factory() { return new PageMetaService(i0.inject(i1.PageMetaResolver), i0.inject(i2.CmsService)); }, token: PageMetaService, providedIn: "root" });
    return PageMetaService;
}());
export { PageMetaService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    PageMetaService.prototype.resolvers;
    /**
     * @type {?}
     * @protected
     */
    PageMetaService.prototype.cms;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1tZXRhLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY21zL2ZhY2FkZS9wYWdlLW1ldGEuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRW5ELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7Ozs7QUFFOUQ7SUFJRSx5QkFDb0MsU0FBNkIsRUFDckQsR0FBZTtRQURTLGNBQVMsR0FBVCxTQUFTLENBQW9CO1FBQ3JELFFBQUcsR0FBSCxHQUFHLENBQVk7SUFDeEIsQ0FBQzs7OztJQUVKLGlDQUFPOzs7SUFBUDtRQUFBLGlCQWFDO1FBWkMsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxDQUFDLElBQUksQ0FDbkMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUNmLFNBQVMsQ0FBQyxVQUFDLElBQVU7O2dCQUNiLFlBQVksR0FBRyxLQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQztZQUMvQyxJQUFJLFlBQVksRUFBRTtnQkFDaEIsT0FBTyxZQUFZLENBQUMsT0FBTyxFQUFFLENBQUM7YUFDL0I7aUJBQU07Z0JBQ0wsaUNBQWlDO2dCQUNqQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUNqQjtRQUNILENBQUMsQ0FBQyxDQUNILENBQUM7SUFDSixDQUFDO0lBRUQ7Ozs7T0FJRzs7Ozs7Ozs7O0lBQ08seUNBQWU7Ozs7Ozs7O0lBQXpCLFVBQTBCLElBQVU7O1lBQzVCLGlCQUFpQixHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUM3QyxVQUFBLFFBQVEsSUFBSSxPQUFBLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUEzQixDQUEyQixDQUN4QztRQUNELGlCQUFpQixDQUFDLElBQUksQ0FBQyxVQUFTLENBQUMsRUFBRSxDQUFDO1lBQ2xDLE9BQU8sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzdDLENBQUMsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM5QixDQUFDOztnQkFyQ0YsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7Ozs0Q0FHSSxNQUFNLFNBQUMsZ0JBQWdCO2dCQVJuQixVQUFVOzs7MEJBSm5CO0NBNkNDLEFBdENELElBc0NDO1NBbkNZLGVBQWU7Ozs7OztJQUV4QixvQ0FBK0Q7Ozs7O0lBQy9ELDhCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHN3aXRjaE1hcCwgZmlsdGVyIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgUGFnZSwgUGFnZU1ldGEgfSBmcm9tICcuLi9tb2RlbC9wYWdlLm1vZGVsJztcbmltcG9ydCB7IENtc1NlcnZpY2UgfSBmcm9tICcuL2Ntcy5zZXJ2aWNlJztcbmltcG9ydCB7IFBhZ2VNZXRhUmVzb2x2ZXIgfSBmcm9tICcuLi9wYWdlL3BhZ2UtbWV0YS5yZXNvbHZlcic7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBQYWdlTWV0YVNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KFBhZ2VNZXRhUmVzb2x2ZXIpIHByaXZhdGUgcmVzb2x2ZXJzOiBQYWdlTWV0YVJlc29sdmVyW10sXG4gICAgcHJvdGVjdGVkIGNtczogQ21zU2VydmljZVxuICApIHt9XG5cbiAgZ2V0TWV0YSgpOiBPYnNlcnZhYmxlPFBhZ2VNZXRhPiB7XG4gICAgcmV0dXJuIHRoaXMuY21zLmdldEN1cnJlbnRQYWdlKCkucGlwZShcbiAgICAgIGZpbHRlcihCb29sZWFuKSxcbiAgICAgIHN3aXRjaE1hcCgocGFnZTogUGFnZSkgPT4ge1xuICAgICAgICBjb25zdCBtZXRhUmVzb2x2ZXIgPSB0aGlzLmdldE1ldGFSZXNvbHZlcihwYWdlKTtcbiAgICAgICAgaWYgKG1ldGFSZXNvbHZlcikge1xuICAgICAgICAgIHJldHVybiBtZXRhUmVzb2x2ZXIucmVzb2x2ZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIHdlIGRvIG5vdCBoYXZlIGEgcGFnZSByZXNvbHZlclxuICAgICAgICAgIHJldHVybiBvZihudWxsKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIHJldHVybiB0aGUgdGl0bGUgcmVzb2x2ZXIgd2l0aCB0aGUgYmVzdCBtYXRjaFxuICAgKiB0aXRsZSByZXNvdmVycyBjYW4gYnkgZGVmYXVsdCBtYXRjaCBvbiBQYWdlVHlwZSBhbmQgcGFnZSB0ZW1wbGF0ZVxuICAgKiBidXQgY3VzdG9tIG1hdGNoIGNvbXBhcmlzb3JzIGNhbiBiZSBpbXBsZW1lbnRlZC5cbiAgICovXG4gIHByb3RlY3RlZCBnZXRNZXRhUmVzb2x2ZXIocGFnZTogUGFnZSkge1xuICAgIGNvbnN0IG1hdGNoaW5nUmVzb2x2ZXJzID0gdGhpcy5yZXNvbHZlcnMuZmlsdGVyKFxuICAgICAgcmVzb2x2ZXIgPT4gcmVzb2x2ZXIuZ2V0U2NvcmUocGFnZSkgPiAwXG4gICAgKTtcbiAgICBtYXRjaGluZ1Jlc29sdmVycy5zb3J0KGZ1bmN0aW9uKGEsIGIpIHtcbiAgICAgIHJldHVybiBiLmdldFNjb3JlKHBhZ2UpIC0gYS5nZXRTY29yZShwYWdlKTtcbiAgICB9KTtcbiAgICByZXR1cm4gbWF0Y2hpbmdSZXNvbHZlcnNbMF07XG4gIH1cbn1cbiJdfQ==