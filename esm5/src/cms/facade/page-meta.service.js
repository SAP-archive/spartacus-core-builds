/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Inject, Injectable, Optional } from '@angular/core';
import { combineLatest, of } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';
import { FeatureConfigService } from '../../features-config';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1tZXRhLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY21zL2ZhY2FkZS9wYWdlLW1ldGEuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBQUUsYUFBYSxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNyRCxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUU3RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7OztBQUUzQztJQUlFLHlCQUdZLFNBQTZCLEVBQzdCLEdBQWUsRUFDZixvQkFBMkM7UUFGM0MsY0FBUyxHQUFULFNBQVMsQ0FBb0I7UUFDN0IsUUFBRyxHQUFILEdBQUcsQ0FBWTtRQUNmLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBdUI7Ozs7Ozs7O1FBV3ZELG9CQUFlLEdBQUc7WUFDaEIsS0FBSyxFQUFFLGNBQWM7WUFDckIsT0FBTyxFQUFFLGdCQUFnQjtZQUN6QixXQUFXLEVBQUUsb0JBQW9CO1lBQ2pDLFdBQVcsRUFBRSxvQkFBb0I7WUFDakMsS0FBSyxFQUFFLGNBQWM7WUFDckIsTUFBTSxFQUFFLGVBQWU7U0FDeEIsQ0FBQztRQWhCQSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLElBQUksRUFBRSxDQUFDO0lBQ3hDLENBQUM7Ozs7SUFpQkQsaUNBQU87OztJQUFQO1FBQUEsaUJBYUM7UUFaQyxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLENBQUMsSUFBSSxDQUNuQyxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQ2YsU0FBUzs7OztRQUFDLFVBQUMsSUFBVTs7Z0JBQ2IsWUFBWSxHQUFHLEtBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDO1lBQy9DLElBQUksWUFBWSxFQUFFO2dCQUNoQixPQUFPLEtBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUM7YUFDbkM7aUJBQU07Z0JBQ0wsaUNBQWlDO2dCQUNqQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUNqQjtRQUNILENBQUMsRUFBQyxDQUNILENBQUM7SUFDSixDQUFDO0lBRUQ7Ozs7T0FJRzs7Ozs7Ozs7SUFDSyxpQ0FBTzs7Ozs7OztJQUFmLFVBQWdCLFlBQVk7UUFBNUIsaUJBc0JDO1FBckJDLElBQ0UsWUFBWSxDQUFDLE9BQU87WUFDcEIsQ0FBQyxDQUFDLElBQUksQ0FBQyxvQkFBb0IsSUFBSSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsRUFDekU7WUFDQSxPQUFPLFlBQVksQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUMvQjthQUFNOzs7Z0JBRUMsY0FBYyxHQUFVLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQztpQkFDNUQsTUFBTTs7OztZQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsWUFBWSxDQUFDLEtBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBdkMsQ0FBdUMsRUFBQztpQkFDdEQsR0FBRzs7OztZQUFDLFVBQUEsR0FBRztnQkFDTixPQUFBLFlBQVksQ0FBQyxLQUFJLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQzVDLEdBQUc7Ozs7Z0JBQUMsVUFBQSxJQUFJOztvQkFBSSxPQUFBO3dCQUNWLEdBQUMsR0FBRyxJQUFHLElBQUk7MkJBQ1g7Z0JBRlUsQ0FFVixFQUFDLENBQ0o7WUFKRCxDQUlDLEVBQ0Y7WUFFSCxPQUFPLGFBQWEsQ0FBQyxjQUFjLENBQUMsQ0FBQyxJQUFJLENBQ3ZDLEdBQUc7Ozs7WUFBQyxVQUFBLElBQUksSUFBSSxPQUFBLE1BQU0sQ0FBQyxNQUFNLE9BQWIsTUFBTSxvQkFBUSxFQUFFLEdBQUssSUFBSSxJQUF6QixDQUEwQixFQUFDLENBQ3hDLENBQUM7U0FDSDtJQUNILENBQUM7SUFFRDs7OztPQUlHOzs7Ozs7Ozs7SUFDTyx5Q0FBZTs7Ozs7Ozs7SUFBekIsVUFBMEIsSUFBVTs7WUFDNUIsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNOzs7O1FBQzdDLFVBQUEsUUFBUSxJQUFJLE9BQUEsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQTNCLENBQTJCLEVBQ3hDO1FBQ0QsaUJBQWlCLENBQUMsSUFBSTs7Ozs7UUFBQyxVQUFTLENBQUMsRUFBRSxDQUFDO1lBQ2xDLE9BQU8sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzdDLENBQUMsRUFBQyxDQUFDO1FBQ0gsT0FBTyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM5QixDQUFDOztnQkF0RkYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7Ozs0Q0FHSSxRQUFRLFlBQ1IsTUFBTSxTQUFDLGdCQUFnQjtnQkFSbkIsVUFBVTtnQkFIVixvQkFBb0I7OzswQkFIN0I7Q0ErRkMsQUF2RkQsSUF1RkM7U0FwRlksZUFBZTs7Ozs7Ozs7OztJQWlCMUIsMENBT0U7Ozs7O0lBdEJBLG9DQUV1Qzs7Ozs7SUFDdkMsOEJBQXlCOzs7OztJQUN6QiwrQ0FBcUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBjb21iaW5lTGF0ZXN0LCBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCBtYXAsIHN3aXRjaE1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEZlYXR1cmVDb25maWdTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vZmVhdHVyZXMtY29uZmlnJztcbmltcG9ydCB7IFBhZ2UsIFBhZ2VNZXRhIH0gZnJvbSAnLi4vbW9kZWwvcGFnZS5tb2RlbCc7XG5pbXBvcnQgeyBQYWdlTWV0YVJlc29sdmVyIH0gZnJvbSAnLi4vcGFnZS9wYWdlLW1ldGEucmVzb2x2ZXInO1xuaW1wb3J0IHsgQ21zU2VydmljZSB9IGZyb20gJy4vY21zLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgUGFnZU1ldGFTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgQE9wdGlvbmFsKClcbiAgICBASW5qZWN0KFBhZ2VNZXRhUmVzb2x2ZXIpXG4gICAgcHJvdGVjdGVkIHJlc29sdmVyczogUGFnZU1ldGFSZXNvbHZlcltdLFxuICAgIHByb3RlY3RlZCBjbXM6IENtc1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGZlYXR1cmVDb25maWdTZXJ2aWNlPzogRmVhdHVyZUNvbmZpZ1NlcnZpY2VcbiAgKSB7XG4gICAgdGhpcy5yZXNvbHZlcnMgPSB0aGlzLnJlc29sdmVycyB8fCBbXTtcbiAgfVxuICAvKipcbiAgICogVGhlIGxpc3Qgb2YgcmVzb2x2ZXIgaW50ZXJmYWNlcyB3aWxsIGJlIGV2YWx1YXRlZCBmb3IgdGhlIHBhZ2VSZXNvbHZlcnMuXG4gICAqXG4gICAqIFRPT0Q6IG9wdGltaXplIGJyb3dzZXIgdnMgU1NSIHJlc29sdmVyczsgaW1hZ2UsIHJvYm90cyBhbmQgZGVzY3JpcHRpb25cbiAgICogICAgICAgYXJlbid0IG5lZWRlZCBkdXJpbmcgYnJvd3NpbmcuXG4gICAqIFRPRE86IHdlIGNhbiBtYWtlIHRoZSBsaXN0IG9mIHJlc29sdmVyIHR5cGVzIGNvbmZpZ3VyYWJsZVxuICAgKi9cbiAgcmVzb2x2ZXJNZXRob2RzID0ge1xuICAgIHRpdGxlOiAncmVzb2x2ZVRpdGxlJyxcbiAgICBoZWFkaW5nOiAncmVzb2x2ZUhlYWRpbmcnLFxuICAgIGRlc2NyaXB0aW9uOiAncmVzb2x2ZURlc2NyaXB0aW9uJyxcbiAgICBicmVhZGNydW1iczogJ3Jlc29sdmVCcmVhZGNydW1icycsXG4gICAgaW1hZ2U6ICdyZXNvbHZlSW1hZ2UnLFxuICAgIHJvYm90czogJ3Jlc29sdmVSb2JvdHMnLFxuICB9O1xuXG4gIGdldE1ldGEoKTogT2JzZXJ2YWJsZTxQYWdlTWV0YT4ge1xuICAgIHJldHVybiB0aGlzLmNtcy5nZXRDdXJyZW50UGFnZSgpLnBpcGUoXG4gICAgICBmaWx0ZXIoQm9vbGVhbiksXG4gICAgICBzd2l0Y2hNYXAoKHBhZ2U6IFBhZ2UpID0+IHtcbiAgICAgICAgY29uc3QgbWV0YVJlc29sdmVyID0gdGhpcy5nZXRNZXRhUmVzb2x2ZXIocGFnZSk7XG4gICAgICAgIGlmIChtZXRhUmVzb2x2ZXIpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5yZXNvbHZlKG1ldGFSZXNvbHZlcik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gd2UgZG8gbm90IGhhdmUgYSBwYWdlIHJlc29sdmVyXG4gICAgICAgICAgcmV0dXJuIG9mKG51bGwpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogSWYgYSBwYWdlUmVzb2x2ZXIgaGFzIGltcGxlbWVudGVkIGEgcmVzb2x2ZXIgaW50ZXJmYWNlLCB0aGUgcmVzb2x2ZWQgZGF0YVxuICAgKiBpcyBtZXJnZWQgaW50byB0aGUgYFBhZ2VNZXRhYCBvYmplY3QuXG4gICAqIEBwYXJhbSBtZXRhUmVzb2x2ZXJcbiAgICovXG4gIHByaXZhdGUgcmVzb2x2ZShtZXRhUmVzb2x2ZXIpOiBPYnNlcnZhYmxlPFBhZ2VNZXRhPiB7XG4gICAgaWYgKFxuICAgICAgbWV0YVJlc29sdmVyLnJlc29sdmUgJiZcbiAgICAgICghdGhpcy5mZWF0dXJlQ29uZmlnU2VydmljZSB8fCAhdGhpcy5mZWF0dXJlQ29uZmlnU2VydmljZS5pc0xldmVsKCcxLjMnKSlcbiAgICApIHtcbiAgICAgIHJldHVybiBtZXRhUmVzb2x2ZXIucmVzb2x2ZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyByZXNvbHZlIGluZGl2aWR1YWwgcmVzb2x2ZXJzIHRvIG1ha2UgdGhlIGV4dGVuc2lvbiBtZWNoYW5pc20gbW9yZSBmbGV4aWJsZVxuICAgICAgY29uc3QgcmVzb2x2ZU1ldGhvZHM6IGFueVtdID0gT2JqZWN0LmtleXModGhpcy5yZXNvbHZlck1ldGhvZHMpXG4gICAgICAgIC5maWx0ZXIoa2V5ID0+IG1ldGFSZXNvbHZlclt0aGlzLnJlc29sdmVyTWV0aG9kc1trZXldXSlcbiAgICAgICAgLm1hcChrZXkgPT5cbiAgICAgICAgICBtZXRhUmVzb2x2ZXJbdGhpcy5yZXNvbHZlck1ldGhvZHNba2V5XV0oKS5waXBlKFxuICAgICAgICAgICAgbWFwKGRhdGEgPT4gKHtcbiAgICAgICAgICAgICAgW2tleV06IGRhdGEsXG4gICAgICAgICAgICB9KSlcbiAgICAgICAgICApXG4gICAgICAgICk7XG5cbiAgICAgIHJldHVybiBjb21iaW5lTGF0ZXN0KHJlc29sdmVNZXRob2RzKS5waXBlKFxuICAgICAgICBtYXAoZGF0YSA9PiBPYmplY3QuYXNzaWduKHt9LCAuLi5kYXRhKSlcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIHJldHVybiB0aGUgcmVzb2x2ZXIgd2l0aCB0aGUgYmVzdCBtYXRjaFxuICAgKiByZXNvdmVycyBjYW4gYnkgZGVmYXVsdCBtYXRjaCBvbiBQYWdlVHlwZSBhbmQgcGFnZSB0ZW1wbGF0ZVxuICAgKiBidXQgY3VzdG9tIG1hdGNoIGNvbXBhcmlzb3JzIGNhbiBiZSBpbXBsZW1lbnRlZC5cbiAgICovXG4gIHByb3RlY3RlZCBnZXRNZXRhUmVzb2x2ZXIocGFnZTogUGFnZSk6IFBhZ2VNZXRhUmVzb2x2ZXIge1xuICAgIGNvbnN0IG1hdGNoaW5nUmVzb2x2ZXJzID0gdGhpcy5yZXNvbHZlcnMuZmlsdGVyKFxuICAgICAgcmVzb2x2ZXIgPT4gcmVzb2x2ZXIuZ2V0U2NvcmUocGFnZSkgPiAwXG4gICAgKTtcbiAgICBtYXRjaGluZ1Jlc29sdmVycy5zb3J0KGZ1bmN0aW9uKGEsIGIpIHtcbiAgICAgIHJldHVybiBiLmdldFNjb3JlKHBhZ2UpIC0gYS5nZXRTY29yZShwYWdlKTtcbiAgICB9KTtcbiAgICByZXR1cm4gbWF0Y2hpbmdSZXNvbHZlcnNbMF07XG4gIH1cbn1cbiJdfQ==