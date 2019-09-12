/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Inject, Injectable, Optional } from '@angular/core';
import { of } from 'rxjs';
import { filter, switchMap } from 'rxjs/operators';
import { PageMetaResolver } from '../page/page-meta.resolver';
import { CmsService } from './cms.service';
import * as i0 from "@angular/core";
import * as i1 from "../page/page-meta.resolver";
import * as i2 from "./cms.service";
var PageMetaService = /** @class */ (function () {
    function PageMetaService(resolvers, cms) {
        this.resolvers = resolvers;
        this.cms = cms;
        this.resolvers = this.resolvers || [];
    }
    /**
     * @return {?}
     */
    PageMetaService.prototype.getMeta = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return this.cms.getCurrentPage().pipe(filter(Boolean), switchMap((/**
         * @param {?} page
         * @return {?}
         */
        function (page) {
            /** @type {?} */
            var metaResolver = _this.getMetaResolver(page);
            if (metaResolver) {
                return metaResolver.resolve();
            }
            else {
                // we do not have a page resolver
                return of(null);
            }
        })));
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
        var matchingResolvers = this.resolvers.filter((/**
         * @param {?} resolver
         * @return {?}
         */
        function (resolver) { return resolver.getScore(page) > 0; }));
        matchingResolvers.sort((/**
         * @param {?} a
         * @param {?} b
         * @return {?}
         */
        function (a, b) {
            return b.getScore(page) - a.getScore(page);
        }));
        return matchingResolvers[0];
    };
    PageMetaService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    PageMetaService.ctorParameters = function () { return [
        { type: Array, decorators: [{ type: Optional }, { type: Inject, args: [PageMetaResolver,] }] },
        { type: CmsService }
    ]; };
    /** @nocollapse */ PageMetaService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function PageMetaService_Factory() { return new PageMetaService(i0.ɵɵinject(i1.PageMetaResolver, 8), i0.ɵɵinject(i2.CmsService)); }, token: PageMetaService, providedIn: "root" });
    return PageMetaService;
}());
export { PageMetaService };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    PageMetaService.prototype.resolvers;
    /**
     * @type {?}
     * @protected
     */
    PageMetaService.prototype.cms;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1tZXRhLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY21zL2ZhY2FkZS9wYWdlLW1ldGEuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVuRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7O0FBRTNDO0lBSUUseUJBR1ksU0FBNkIsRUFDN0IsR0FBZTtRQURmLGNBQVMsR0FBVCxTQUFTLENBQW9CO1FBQzdCLFFBQUcsR0FBSCxHQUFHLENBQVk7UUFFekIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxJQUFJLEVBQUUsQ0FBQztJQUN4QyxDQUFDOzs7O0lBRUQsaUNBQU87OztJQUFQO1FBQUEsaUJBYUM7UUFaQyxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLENBQUMsSUFBSSxDQUNuQyxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQ2YsU0FBUzs7OztRQUFDLFVBQUMsSUFBVTs7Z0JBQ2IsWUFBWSxHQUFHLEtBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDO1lBQy9DLElBQUksWUFBWSxFQUFFO2dCQUNoQixPQUFPLFlBQVksQ0FBQyxPQUFPLEVBQUUsQ0FBQzthQUMvQjtpQkFBTTtnQkFDTCxpQ0FBaUM7Z0JBQ2pDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ2pCO1FBQ0gsQ0FBQyxFQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7SUFFRDs7OztPQUlHOzs7Ozs7Ozs7SUFDTyx5Q0FBZTs7Ozs7Ozs7SUFBekIsVUFBMEIsSUFBVTs7WUFDNUIsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNOzs7O1FBQzdDLFVBQUEsUUFBUSxJQUFJLE9BQUEsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQTNCLENBQTJCLEVBQ3hDO1FBQ0QsaUJBQWlCLENBQUMsSUFBSTs7Ozs7UUFBQyxVQUFTLENBQUMsRUFBRSxDQUFDO1lBQ2xDLE9BQU8sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzdDLENBQUMsRUFBQyxDQUFDO1FBQ0gsT0FBTyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM5QixDQUFDOztnQkF6Q0YsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7Ozs0Q0FHSSxRQUFRLFlBQ1IsTUFBTSxTQUFDLGdCQUFnQjtnQkFSbkIsVUFBVTs7OzBCQUxuQjtDQWlEQyxBQTFDRCxJQTBDQztTQXZDWSxlQUFlOzs7Ozs7SUFFeEIsb0NBRXVDOzs7OztJQUN2Qyw4QkFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCBzd2l0Y2hNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBQYWdlLCBQYWdlTWV0YSB9IGZyb20gJy4uL21vZGVsL3BhZ2UubW9kZWwnO1xuaW1wb3J0IHsgUGFnZU1ldGFSZXNvbHZlciB9IGZyb20gJy4uL3BhZ2UvcGFnZS1tZXRhLnJlc29sdmVyJztcbmltcG9ydCB7IENtc1NlcnZpY2UgfSBmcm9tICcuL2Ntcy5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIFBhZ2VNZXRhU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIEBPcHRpb25hbCgpXG4gICAgQEluamVjdChQYWdlTWV0YVJlc29sdmVyKVxuICAgIHByb3RlY3RlZCByZXNvbHZlcnM6IFBhZ2VNZXRhUmVzb2x2ZXJbXSxcbiAgICBwcm90ZWN0ZWQgY21zOiBDbXNTZXJ2aWNlXG4gICkge1xuICAgIHRoaXMucmVzb2x2ZXJzID0gdGhpcy5yZXNvbHZlcnMgfHwgW107XG4gIH1cblxuICBnZXRNZXRhKCk6IE9ic2VydmFibGU8UGFnZU1ldGE+IHtcbiAgICByZXR1cm4gdGhpcy5jbXMuZ2V0Q3VycmVudFBhZ2UoKS5waXBlKFxuICAgICAgZmlsdGVyKEJvb2xlYW4pLFxuICAgICAgc3dpdGNoTWFwKChwYWdlOiBQYWdlKSA9PiB7XG4gICAgICAgIGNvbnN0IG1ldGFSZXNvbHZlciA9IHRoaXMuZ2V0TWV0YVJlc29sdmVyKHBhZ2UpO1xuICAgICAgICBpZiAobWV0YVJlc29sdmVyKSB7XG4gICAgICAgICAgcmV0dXJuIG1ldGFSZXNvbHZlci5yZXNvbHZlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gd2UgZG8gbm90IGhhdmUgYSBwYWdlIHJlc29sdmVyXG4gICAgICAgICAgcmV0dXJuIG9mKG51bGwpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogcmV0dXJuIHRoZSB0aXRsZSByZXNvbHZlciB3aXRoIHRoZSBiZXN0IG1hdGNoXG4gICAqIHRpdGxlIHJlc292ZXJzIGNhbiBieSBkZWZhdWx0IG1hdGNoIG9uIFBhZ2VUeXBlIGFuZCBwYWdlIHRlbXBsYXRlXG4gICAqIGJ1dCBjdXN0b20gbWF0Y2ggY29tcGFyaXNvcnMgY2FuIGJlIGltcGxlbWVudGVkLlxuICAgKi9cbiAgcHJvdGVjdGVkIGdldE1ldGFSZXNvbHZlcihwYWdlOiBQYWdlKTogUGFnZU1ldGFSZXNvbHZlciB7XG4gICAgY29uc3QgbWF0Y2hpbmdSZXNvbHZlcnMgPSB0aGlzLnJlc29sdmVycy5maWx0ZXIoXG4gICAgICByZXNvbHZlciA9PiByZXNvbHZlci5nZXRTY29yZShwYWdlKSA+IDBcbiAgICApO1xuICAgIG1hdGNoaW5nUmVzb2x2ZXJzLnNvcnQoZnVuY3Rpb24oYSwgYikge1xuICAgICAgcmV0dXJuIGIuZ2V0U2NvcmUocGFnZSkgLSBhLmdldFNjb3JlKHBhZ2UpO1xuICAgIH0pO1xuICAgIHJldHVybiBtYXRjaGluZ1Jlc29sdmVyc1swXTtcbiAgfVxufVxuIl19