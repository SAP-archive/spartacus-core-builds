/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Inject, Injectable, Optional } from '@angular/core';
import { combineLatest, of } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';
import { FeatureConfigService } from '../../features-config/services/feature-config.service';
import { PageMetaResolver } from '../page/page-meta.resolver';
import { CmsService } from './cms.service';
import * as i0 from "@angular/core";
import * as i1 from "../page/page-meta.resolver";
import * as i2 from "./cms.service";
import * as i3 from "../../features-config/services/feature-config.service";
var PageMetaService = /** @class */ (function () {
    function PageMetaService(resolvers, cms, featureConfigService) {
        this.resolvers = resolvers;
        this.cms = cms;
        this.featureConfigService = featureConfigService;
        /**
         * The list of resolver interfaces will be evaluated for the pageResolvers.
         *
         * TOOD: optimize browser vs SSR resolvers; image, robots and description
         *       aren't needed during browsing.
         * TODO: we can make the list of resolver types configurable
         */
        this.resolverMethods = {
            title: 'resolveTitle',
            heading: 'resolveHeading',
            description: 'resolveDescription',
            breadcrumbs: 'resolveBreadcrumbs',
            image: 'resolveImage',
            robots: 'resolveRobots',
        };
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
                return _this.resolve(metaResolver);
            }
            else {
                // we do not have a page resolver
                return of(null);
            }
        })));
    };
    /**
     * If a pageResolver has implemented a resolver interface, the resolved data
     * is merged into the `PageMeta` object.
     * @param metaResolver
     */
    /**
     * If a pageResolver has implemented a resolver interface, the resolved data
     * is merged into the `PageMeta` object.
     * @private
     * @param {?} metaResolver
     * @return {?}
     */
    PageMetaService.prototype.resolve = /**
     * If a pageResolver has implemented a resolver interface, the resolved data
     * is merged into the `PageMeta` object.
     * @private
     * @param {?} metaResolver
     * @return {?}
     */
    function (metaResolver) {
        var _this = this;
        if (metaResolver.resolve &&
            (!this.featureConfigService || !this.featureConfigService.isLevel('1.3'))) {
            return metaResolver.resolve();
        }
        else {
            // resolve individual resolvers to make the extension mechanism more flexible
            /** @type {?} */
            var resolveMethods = Object.keys(this.resolverMethods)
                .filter((/**
             * @param {?} key
             * @return {?}
             */
            function (key) { return metaResolver[_this.resolverMethods[key]]; }))
                .map((/**
             * @param {?} key
             * @return {?}
             */
            function (key) {
                return metaResolver[_this.resolverMethods[key]]().pipe(map((/**
                 * @param {?} data
                 * @return {?}
                 */
                function (data) {
                    var _a;
                    return (_a = {},
                        _a[key] = data,
                        _a);
                })));
            }));
            return combineLatest(resolveMethods).pipe(map((/**
             * @param {?} data
             * @return {?}
             */
            function (data) { return Object.assign.apply(Object, tslib_1.__spread([{}], data)); })));
        }
    };
    /**
     * return the resolver with the best match
     * resovers can by default match on PageType and page template
     * but custom match comparisors can be implemented.
     */
    /**
     * return the resolver with the best match
     * resovers can by default match on PageType and page template
     * but custom match comparisors can be implemented.
     * @protected
     * @param {?} page
     * @return {?}
     */
    PageMetaService.prototype.getMetaResolver = /**
     * return the resolver with the best match
     * resovers can by default match on PageType and page template
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
        { type: CmsService },
        { type: FeatureConfigService }
    ]; };
    /** @nocollapse */ PageMetaService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function PageMetaService_Factory() { return new PageMetaService(i0.ɵɵinject(i1.PageMetaResolver, 8), i0.ɵɵinject(i2.CmsService), i0.ɵɵinject(i3.FeatureConfigService)); }, token: PageMetaService, providedIn: "root" });
    return PageMetaService;
}());
export { PageMetaService };
if (false) {
    /**
     * The list of resolver interfaces will be evaluated for the pageResolvers.
     *
     * TOOD: optimize browser vs SSR resolvers; image, robots and description
     *       aren't needed during browsing.
     * TODO: we can make the list of resolver types configurable
     * @type {?}
     */
    PageMetaService.prototype.resolverMethods;
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
    /**
     * @type {?}
     * @protected
     */
    PageMetaService.prototype.featureConfigService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1tZXRhLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY21zL2ZhY2FkZS9wYWdlLW1ldGEuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBQUUsYUFBYSxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNyRCxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx1REFBdUQsQ0FBQztBQUU3RixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7OztBQUUzQztJQUlFLHlCQUdZLFNBQTZCLEVBQzdCLEdBQWUsRUFDZixvQkFBMkM7UUFGM0MsY0FBUyxHQUFULFNBQVMsQ0FBb0I7UUFDN0IsUUFBRyxHQUFILEdBQUcsQ0FBWTtRQUNmLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBdUI7Ozs7Ozs7O1FBV3ZELG9CQUFlLEdBQUc7WUFDaEIsS0FBSyxFQUFFLGNBQWM7WUFDckIsT0FBTyxFQUFFLGdCQUFnQjtZQUN6QixXQUFXLEVBQUUsb0JBQW9CO1lBQ2pDLFdBQVcsRUFBRSxvQkFBb0I7WUFDakMsS0FBSyxFQUFFLGNBQWM7WUFDckIsTUFBTSxFQUFFLGVBQWU7U0FDeEIsQ0FBQztRQWhCQSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLElBQUksRUFBRSxDQUFDO0lBQ3hDLENBQUM7Ozs7SUFpQkQsaUNBQU87OztJQUFQO1FBQUEsaUJBYUM7UUFaQyxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLENBQUMsSUFBSSxDQUNuQyxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQ2YsU0FBUzs7OztRQUFDLFVBQUMsSUFBVTs7Z0JBQ2IsWUFBWSxHQUFHLEtBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDO1lBQy9DLElBQUksWUFBWSxFQUFFO2dCQUNoQixPQUFPLEtBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUM7YUFDbkM7aUJBQU07Z0JBQ0wsaUNBQWlDO2dCQUNqQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUNqQjtRQUNILENBQUMsRUFBQyxDQUNILENBQUM7SUFDSixDQUFDO0lBRUQ7Ozs7T0FJRzs7Ozs7Ozs7SUFDSyxpQ0FBTzs7Ozs7OztJQUFmLFVBQWdCLFlBQVk7UUFBNUIsaUJBc0JDO1FBckJDLElBQ0UsWUFBWSxDQUFDLE9BQU87WUFDcEIsQ0FBQyxDQUFDLElBQUksQ0FBQyxvQkFBb0IsSUFBSSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsRUFDekU7WUFDQSxPQUFPLFlBQVksQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUMvQjthQUFNOzs7Z0JBRUMsY0FBYyxHQUFVLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQztpQkFDNUQsTUFBTTs7OztZQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsWUFBWSxDQUFDLEtBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBdkMsQ0FBdUMsRUFBQztpQkFDdEQsR0FBRzs7OztZQUFDLFVBQUEsR0FBRztnQkFDTixPQUFBLFlBQVksQ0FBQyxLQUFJLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQzVDLEdBQUc7Ozs7Z0JBQUMsVUFBQSxJQUFJOztvQkFBSSxPQUFBO3dCQUNWLEdBQUMsR0FBRyxJQUFHLElBQUk7MkJBQ1g7Z0JBRlUsQ0FFVixFQUFDLENBQ0o7WUFKRCxDQUlDLEVBQ0Y7WUFFSCxPQUFPLGFBQWEsQ0FBQyxjQUFjLENBQUMsQ0FBQyxJQUFJLENBQ3ZDLEdBQUc7Ozs7WUFBQyxVQUFBLElBQUksSUFBSSxPQUFBLE1BQU0sQ0FBQyxNQUFNLE9BQWIsTUFBTSxvQkFBUSxFQUFFLEdBQUssSUFBSSxJQUF6QixDQUEwQixFQUFDLENBQ3hDLENBQUM7U0FDSDtJQUNILENBQUM7SUFFRDs7OztPQUlHOzs7Ozs7Ozs7SUFDTyx5Q0FBZTs7Ozs7Ozs7SUFBekIsVUFBMEIsSUFBVTs7WUFDNUIsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNOzs7O1FBQzdDLFVBQUEsUUFBUSxJQUFJLE9BQUEsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQTNCLENBQTJCLEVBQ3hDO1FBQ0QsaUJBQWlCLENBQUMsSUFBSTs7Ozs7UUFBQyxVQUFTLENBQUMsRUFBRSxDQUFDO1lBQ2xDLE9BQU8sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzdDLENBQUMsRUFBQyxDQUFDO1FBQ0gsT0FBTyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM5QixDQUFDOztnQkF0RkYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7Ozs0Q0FHSSxRQUFRLFlBQ1IsTUFBTSxTQUFDLGdCQUFnQjtnQkFSbkIsVUFBVTtnQkFIVixvQkFBb0I7OzswQkFIN0I7Q0ErRkMsQUF2RkQsSUF1RkM7U0FwRlksZUFBZTs7Ozs7Ozs7OztJQWlCMUIsMENBT0U7Ozs7O0lBdEJBLG9DQUV1Qzs7Ozs7SUFDdkMsOEJBQXlCOzs7OztJQUN6QiwrQ0FBcUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBjb21iaW5lTGF0ZXN0LCBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCBtYXAsIHN3aXRjaE1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEZlYXR1cmVDb25maWdTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vZmVhdHVyZXMtY29uZmlnL3NlcnZpY2VzL2ZlYXR1cmUtY29uZmlnLnNlcnZpY2UnO1xuaW1wb3J0IHsgUGFnZSwgUGFnZU1ldGEgfSBmcm9tICcuLi9tb2RlbC9wYWdlLm1vZGVsJztcbmltcG9ydCB7IFBhZ2VNZXRhUmVzb2x2ZXIgfSBmcm9tICcuLi9wYWdlL3BhZ2UtbWV0YS5yZXNvbHZlcic7XG5pbXBvcnQgeyBDbXNTZXJ2aWNlIH0gZnJvbSAnLi9jbXMuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBQYWdlTWV0YVNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBAT3B0aW9uYWwoKVxuICAgIEBJbmplY3QoUGFnZU1ldGFSZXNvbHZlcilcbiAgICBwcm90ZWN0ZWQgcmVzb2x2ZXJzOiBQYWdlTWV0YVJlc29sdmVyW10sXG4gICAgcHJvdGVjdGVkIGNtczogQ21zU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgZmVhdHVyZUNvbmZpZ1NlcnZpY2U/OiBGZWF0dXJlQ29uZmlnU2VydmljZVxuICApIHtcbiAgICB0aGlzLnJlc29sdmVycyA9IHRoaXMucmVzb2x2ZXJzIHx8IFtdO1xuICB9XG4gIC8qKlxuICAgKiBUaGUgbGlzdCBvZiByZXNvbHZlciBpbnRlcmZhY2VzIHdpbGwgYmUgZXZhbHVhdGVkIGZvciB0aGUgcGFnZVJlc29sdmVycy5cbiAgICpcbiAgICogVE9PRDogb3B0aW1pemUgYnJvd3NlciB2cyBTU1IgcmVzb2x2ZXJzOyBpbWFnZSwgcm9ib3RzIGFuZCBkZXNjcmlwdGlvblxuICAgKiAgICAgICBhcmVuJ3QgbmVlZGVkIGR1cmluZyBicm93c2luZy5cbiAgICogVE9ETzogd2UgY2FuIG1ha2UgdGhlIGxpc3Qgb2YgcmVzb2x2ZXIgdHlwZXMgY29uZmlndXJhYmxlXG4gICAqL1xuICByZXNvbHZlck1ldGhvZHMgPSB7XG4gICAgdGl0bGU6ICdyZXNvbHZlVGl0bGUnLFxuICAgIGhlYWRpbmc6ICdyZXNvbHZlSGVhZGluZycsXG4gICAgZGVzY3JpcHRpb246ICdyZXNvbHZlRGVzY3JpcHRpb24nLFxuICAgIGJyZWFkY3J1bWJzOiAncmVzb2x2ZUJyZWFkY3J1bWJzJyxcbiAgICBpbWFnZTogJ3Jlc29sdmVJbWFnZScsXG4gICAgcm9ib3RzOiAncmVzb2x2ZVJvYm90cycsXG4gIH07XG5cbiAgZ2V0TWV0YSgpOiBPYnNlcnZhYmxlPFBhZ2VNZXRhPiB7XG4gICAgcmV0dXJuIHRoaXMuY21zLmdldEN1cnJlbnRQYWdlKCkucGlwZShcbiAgICAgIGZpbHRlcihCb29sZWFuKSxcbiAgICAgIHN3aXRjaE1hcCgocGFnZTogUGFnZSkgPT4ge1xuICAgICAgICBjb25zdCBtZXRhUmVzb2x2ZXIgPSB0aGlzLmdldE1ldGFSZXNvbHZlcihwYWdlKTtcbiAgICAgICAgaWYgKG1ldGFSZXNvbHZlcikge1xuICAgICAgICAgIHJldHVybiB0aGlzLnJlc29sdmUobWV0YVJlc29sdmVyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyB3ZSBkbyBub3QgaGF2ZSBhIHBhZ2UgcmVzb2x2ZXJcbiAgICAgICAgICByZXR1cm4gb2YobnVsbCk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJZiBhIHBhZ2VSZXNvbHZlciBoYXMgaW1wbGVtZW50ZWQgYSByZXNvbHZlciBpbnRlcmZhY2UsIHRoZSByZXNvbHZlZCBkYXRhXG4gICAqIGlzIG1lcmdlZCBpbnRvIHRoZSBgUGFnZU1ldGFgIG9iamVjdC5cbiAgICogQHBhcmFtIG1ldGFSZXNvbHZlclxuICAgKi9cbiAgcHJpdmF0ZSByZXNvbHZlKG1ldGFSZXNvbHZlcik6IE9ic2VydmFibGU8UGFnZU1ldGE+IHtcbiAgICBpZiAoXG4gICAgICBtZXRhUmVzb2x2ZXIucmVzb2x2ZSAmJlxuICAgICAgKCF0aGlzLmZlYXR1cmVDb25maWdTZXJ2aWNlIHx8ICF0aGlzLmZlYXR1cmVDb25maWdTZXJ2aWNlLmlzTGV2ZWwoJzEuMycpKVxuICAgICkge1xuICAgICAgcmV0dXJuIG1ldGFSZXNvbHZlci5yZXNvbHZlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIHJlc29sdmUgaW5kaXZpZHVhbCByZXNvbHZlcnMgdG8gbWFrZSB0aGUgZXh0ZW5zaW9uIG1lY2hhbmlzbSBtb3JlIGZsZXhpYmxlXG4gICAgICBjb25zdCByZXNvbHZlTWV0aG9kczogYW55W10gPSBPYmplY3Qua2V5cyh0aGlzLnJlc29sdmVyTWV0aG9kcylcbiAgICAgICAgLmZpbHRlcihrZXkgPT4gbWV0YVJlc29sdmVyW3RoaXMucmVzb2x2ZXJNZXRob2RzW2tleV1dKVxuICAgICAgICAubWFwKGtleSA9PlxuICAgICAgICAgIG1ldGFSZXNvbHZlclt0aGlzLnJlc29sdmVyTWV0aG9kc1trZXldXSgpLnBpcGUoXG4gICAgICAgICAgICBtYXAoZGF0YSA9PiAoe1xuICAgICAgICAgICAgICBba2V5XTogZGF0YSxcbiAgICAgICAgICAgIH0pKVxuICAgICAgICAgIClcbiAgICAgICAgKTtcblxuICAgICAgcmV0dXJuIGNvbWJpbmVMYXRlc3QocmVzb2x2ZU1ldGhvZHMpLnBpcGUoXG4gICAgICAgIG1hcChkYXRhID0+IE9iamVjdC5hc3NpZ24oe30sIC4uLmRhdGEpKVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogcmV0dXJuIHRoZSByZXNvbHZlciB3aXRoIHRoZSBiZXN0IG1hdGNoXG4gICAqIHJlc292ZXJzIGNhbiBieSBkZWZhdWx0IG1hdGNoIG9uIFBhZ2VUeXBlIGFuZCBwYWdlIHRlbXBsYXRlXG4gICAqIGJ1dCBjdXN0b20gbWF0Y2ggY29tcGFyaXNvcnMgY2FuIGJlIGltcGxlbWVudGVkLlxuICAgKi9cbiAgcHJvdGVjdGVkIGdldE1ldGFSZXNvbHZlcihwYWdlOiBQYWdlKTogUGFnZU1ldGFSZXNvbHZlciB7XG4gICAgY29uc3QgbWF0Y2hpbmdSZXNvbHZlcnMgPSB0aGlzLnJlc29sdmVycy5maWx0ZXIoXG4gICAgICByZXNvbHZlciA9PiByZXNvbHZlci5nZXRTY29yZShwYWdlKSA+IDBcbiAgICApO1xuICAgIG1hdGNoaW5nUmVzb2x2ZXJzLnNvcnQoZnVuY3Rpb24oYSwgYikge1xuICAgICAgcmV0dXJuIGIuZ2V0U2NvcmUocGFnZSkgLSBhLmdldFNjb3JlKHBhZ2UpO1xuICAgIH0pO1xuICAgIHJldHVybiBtYXRjaGluZ1Jlc29sdmVyc1swXTtcbiAgfVxufVxuIl19