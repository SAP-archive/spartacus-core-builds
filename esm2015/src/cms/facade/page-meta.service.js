/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
export class PageMetaService {
    /**
     * @param {?} resolvers
     * @param {?} cms
     * @param {?=} featureConfigService
     */
    constructor(resolvers, cms, featureConfigService) {
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
    getMeta() {
        return this.cms.getCurrentPage().pipe(filter(Boolean), switchMap((/**
         * @param {?} page
         * @return {?}
         */
        (page) => {
            /** @type {?} */
            const metaResolver = this.getMetaResolver(page);
            if (metaResolver) {
                return this.resolve(metaResolver);
            }
            else {
                // we do not have a page resolver
                return of(null);
            }
        })));
    }
    /**
     * If a pageResolver has implemented a resolver interface, the resolved data
     * is merged into the `PageMeta` object.
     * @private
     * @param {?} metaResolver
     * @return {?}
     */
    resolve(metaResolver) {
        if (metaResolver.resolve &&
            (!this.featureConfigService || !this.featureConfigService.isLevel('1.3'))) {
            return metaResolver.resolve();
        }
        else {
            // resolve individual resolvers to make the extension mechanism more flexible
            /** @type {?} */
            const resolveMethods = Object.keys(this.resolverMethods)
                .filter((/**
             * @param {?} key
             * @return {?}
             */
            key => metaResolver[this.resolverMethods[key]]))
                .map((/**
             * @param {?} key
             * @return {?}
             */
            key => metaResolver[this.resolverMethods[key]]().pipe(map((/**
             * @param {?} data
             * @return {?}
             */
            data => ({
                [key]: data,
            }))))));
            return combineLatest(resolveMethods).pipe(map((/**
             * @param {?} data
             * @return {?}
             */
            data => Object.assign({}, ...data))));
        }
    }
    /**
     * return the resolver with the best match
     * resovers can by default match on PageType and page template
     * but custom match comparisors can be implemented.
     * @protected
     * @param {?} page
     * @return {?}
     */
    getMetaResolver(page) {
        /** @type {?} */
        const matchingResolvers = this.resolvers.filter((/**
         * @param {?} resolver
         * @return {?}
         */
        resolver => resolver.getScore(page) > 0));
        matchingResolvers.sort((/**
         * @param {?} a
         * @param {?} b
         * @return {?}
         */
        function (a, b) {
            return b.getScore(page) - a.getScore(page);
        }));
        return matchingResolvers[0];
    }
}
PageMetaService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
PageMetaService.ctorParameters = () => [
    { type: Array, decorators: [{ type: Optional }, { type: Inject, args: [PageMetaResolver,] }] },
    { type: CmsService },
    { type: FeatureConfigService }
];
/** @nocollapse */ PageMetaService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function PageMetaService_Factory() { return new PageMetaService(i0.ɵɵinject(i1.PageMetaResolver, 8), i0.ɵɵinject(i2.CmsService), i0.ɵɵinject(i3.FeatureConfigService)); }, token: PageMetaService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1tZXRhLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY21zL2ZhY2FkZS9wYWdlLW1ldGEuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBRSxhQUFhLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3JELE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHVEQUF1RCxDQUFDO0FBRTdGLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQzlELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7O0FBSzNDLE1BQU0sT0FBTyxlQUFlOzs7Ozs7SUFDMUIsWUFHWSxTQUE2QixFQUM3QixHQUFlLEVBQ2Ysb0JBQTJDO1FBRjNDLGNBQVMsR0FBVCxTQUFTLENBQW9CO1FBQzdCLFFBQUcsR0FBSCxHQUFHLENBQVk7UUFDZix5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXVCOzs7Ozs7OztRQVd2RCxvQkFBZSxHQUFHO1lBQ2hCLEtBQUssRUFBRSxjQUFjO1lBQ3JCLE9BQU8sRUFBRSxnQkFBZ0I7WUFDekIsV0FBVyxFQUFFLG9CQUFvQjtZQUNqQyxXQUFXLEVBQUUsb0JBQW9CO1lBQ2pDLEtBQUssRUFBRSxjQUFjO1lBQ3JCLE1BQU0sRUFBRSxlQUFlO1NBQ3hCLENBQUM7UUFoQkEsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxJQUFJLEVBQUUsQ0FBQztJQUN4QyxDQUFDOzs7O0lBaUJELE9BQU87UUFDTCxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLENBQUMsSUFBSSxDQUNuQyxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQ2YsU0FBUzs7OztRQUFDLENBQUMsSUFBVSxFQUFFLEVBQUU7O2tCQUNqQixZQUFZLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUM7WUFDL0MsSUFBSSxZQUFZLEVBQUU7Z0JBQ2hCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQzthQUNuQztpQkFBTTtnQkFDTCxpQ0FBaUM7Z0JBQ2pDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ2pCO1FBQ0gsQ0FBQyxFQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7Ozs7Ozs7O0lBT08sT0FBTyxDQUFDLFlBQVk7UUFDMUIsSUFDRSxZQUFZLENBQUMsT0FBTztZQUNwQixDQUFDLENBQUMsSUFBSSxDQUFDLG9CQUFvQixJQUFJLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUN6RTtZQUNBLE9BQU8sWUFBWSxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQy9CO2FBQU07OztrQkFFQyxjQUFjLEdBQVUsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDO2lCQUM1RCxNQUFNOzs7O1lBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFDO2lCQUN0RCxHQUFHOzs7O1lBQUMsR0FBRyxDQUFDLEVBQUUsQ0FDVCxZQUFZLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUM1QyxHQUFHOzs7O1lBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUNYLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSTthQUNaLENBQUMsRUFBQyxDQUNKLEVBQ0Y7WUFFSCxPQUFPLGFBQWEsQ0FBQyxjQUFjLENBQUMsQ0FBQyxJQUFJLENBQ3ZDLEdBQUc7Ozs7WUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLEdBQUcsSUFBSSxDQUFDLEVBQUMsQ0FDeEMsQ0FBQztTQUNIO0lBQ0gsQ0FBQzs7Ozs7Ozs7O0lBT1MsZUFBZSxDQUFDLElBQVU7O2NBQzVCLGlCQUFpQixHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTTs7OztRQUM3QyxRQUFRLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUN4QztRQUNELGlCQUFpQixDQUFDLElBQUk7Ozs7O1FBQUMsVUFBUyxDQUFDLEVBQUUsQ0FBQztZQUNsQyxPQUFPLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM3QyxDQUFDLEVBQUMsQ0FBQztRQUNILE9BQU8saUJBQWlCLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDOUIsQ0FBQzs7O1lBdEZGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7Ozt3Q0FHSSxRQUFRLFlBQ1IsTUFBTSxTQUFDLGdCQUFnQjtZQVJuQixVQUFVO1lBSFYsb0JBQW9COzs7Ozs7Ozs7Ozs7SUF5QjNCLDBDQU9FOzs7OztJQXRCQSxvQ0FFdUM7Ozs7O0lBQ3ZDLDhCQUF5Qjs7Ozs7SUFDekIsK0NBQXFEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgY29tYmluZUxhdGVzdCwgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgbWFwLCBzd2l0Y2hNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBGZWF0dXJlQ29uZmlnU2VydmljZSB9IGZyb20gJy4uLy4uL2ZlYXR1cmVzLWNvbmZpZy9zZXJ2aWNlcy9mZWF0dXJlLWNvbmZpZy5zZXJ2aWNlJztcbmltcG9ydCB7IFBhZ2UsIFBhZ2VNZXRhIH0gZnJvbSAnLi4vbW9kZWwvcGFnZS5tb2RlbCc7XG5pbXBvcnQgeyBQYWdlTWV0YVJlc29sdmVyIH0gZnJvbSAnLi4vcGFnZS9wYWdlLW1ldGEucmVzb2x2ZXInO1xuaW1wb3J0IHsgQ21zU2VydmljZSB9IGZyb20gJy4vY21zLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgUGFnZU1ldGFTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgQE9wdGlvbmFsKClcbiAgICBASW5qZWN0KFBhZ2VNZXRhUmVzb2x2ZXIpXG4gICAgcHJvdGVjdGVkIHJlc29sdmVyczogUGFnZU1ldGFSZXNvbHZlcltdLFxuICAgIHByb3RlY3RlZCBjbXM6IENtc1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGZlYXR1cmVDb25maWdTZXJ2aWNlPzogRmVhdHVyZUNvbmZpZ1NlcnZpY2VcbiAgKSB7XG4gICAgdGhpcy5yZXNvbHZlcnMgPSB0aGlzLnJlc29sdmVycyB8fCBbXTtcbiAgfVxuICAvKipcbiAgICogVGhlIGxpc3Qgb2YgcmVzb2x2ZXIgaW50ZXJmYWNlcyB3aWxsIGJlIGV2YWx1YXRlZCBmb3IgdGhlIHBhZ2VSZXNvbHZlcnMuXG4gICAqXG4gICAqIFRPT0Q6IG9wdGltaXplIGJyb3dzZXIgdnMgU1NSIHJlc29sdmVyczsgaW1hZ2UsIHJvYm90cyBhbmQgZGVzY3JpcHRpb25cbiAgICogICAgICAgYXJlbid0IG5lZWRlZCBkdXJpbmcgYnJvd3NpbmcuXG4gICAqIFRPRE86IHdlIGNhbiBtYWtlIHRoZSBsaXN0IG9mIHJlc29sdmVyIHR5cGVzIGNvbmZpZ3VyYWJsZVxuICAgKi9cbiAgcmVzb2x2ZXJNZXRob2RzID0ge1xuICAgIHRpdGxlOiAncmVzb2x2ZVRpdGxlJyxcbiAgICBoZWFkaW5nOiAncmVzb2x2ZUhlYWRpbmcnLFxuICAgIGRlc2NyaXB0aW9uOiAncmVzb2x2ZURlc2NyaXB0aW9uJyxcbiAgICBicmVhZGNydW1iczogJ3Jlc29sdmVCcmVhZGNydW1icycsXG4gICAgaW1hZ2U6ICdyZXNvbHZlSW1hZ2UnLFxuICAgIHJvYm90czogJ3Jlc29sdmVSb2JvdHMnLFxuICB9O1xuXG4gIGdldE1ldGEoKTogT2JzZXJ2YWJsZTxQYWdlTWV0YT4ge1xuICAgIHJldHVybiB0aGlzLmNtcy5nZXRDdXJyZW50UGFnZSgpLnBpcGUoXG4gICAgICBmaWx0ZXIoQm9vbGVhbiksXG4gICAgICBzd2l0Y2hNYXAoKHBhZ2U6IFBhZ2UpID0+IHtcbiAgICAgICAgY29uc3QgbWV0YVJlc29sdmVyID0gdGhpcy5nZXRNZXRhUmVzb2x2ZXIocGFnZSk7XG4gICAgICAgIGlmIChtZXRhUmVzb2x2ZXIpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5yZXNvbHZlKG1ldGFSZXNvbHZlcik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gd2UgZG8gbm90IGhhdmUgYSBwYWdlIHJlc29sdmVyXG4gICAgICAgICAgcmV0dXJuIG9mKG51bGwpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogSWYgYSBwYWdlUmVzb2x2ZXIgaGFzIGltcGxlbWVudGVkIGEgcmVzb2x2ZXIgaW50ZXJmYWNlLCB0aGUgcmVzb2x2ZWQgZGF0YVxuICAgKiBpcyBtZXJnZWQgaW50byB0aGUgYFBhZ2VNZXRhYCBvYmplY3QuXG4gICAqIEBwYXJhbSBtZXRhUmVzb2x2ZXJcbiAgICovXG4gIHByaXZhdGUgcmVzb2x2ZShtZXRhUmVzb2x2ZXIpOiBPYnNlcnZhYmxlPFBhZ2VNZXRhPiB7XG4gICAgaWYgKFxuICAgICAgbWV0YVJlc29sdmVyLnJlc29sdmUgJiZcbiAgICAgICghdGhpcy5mZWF0dXJlQ29uZmlnU2VydmljZSB8fCAhdGhpcy5mZWF0dXJlQ29uZmlnU2VydmljZS5pc0xldmVsKCcxLjMnKSlcbiAgICApIHtcbiAgICAgIHJldHVybiBtZXRhUmVzb2x2ZXIucmVzb2x2ZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyByZXNvbHZlIGluZGl2aWR1YWwgcmVzb2x2ZXJzIHRvIG1ha2UgdGhlIGV4dGVuc2lvbiBtZWNoYW5pc20gbW9yZSBmbGV4aWJsZVxuICAgICAgY29uc3QgcmVzb2x2ZU1ldGhvZHM6IGFueVtdID0gT2JqZWN0LmtleXModGhpcy5yZXNvbHZlck1ldGhvZHMpXG4gICAgICAgIC5maWx0ZXIoa2V5ID0+IG1ldGFSZXNvbHZlclt0aGlzLnJlc29sdmVyTWV0aG9kc1trZXldXSlcbiAgICAgICAgLm1hcChrZXkgPT5cbiAgICAgICAgICBtZXRhUmVzb2x2ZXJbdGhpcy5yZXNvbHZlck1ldGhvZHNba2V5XV0oKS5waXBlKFxuICAgICAgICAgICAgbWFwKGRhdGEgPT4gKHtcbiAgICAgICAgICAgICAgW2tleV06IGRhdGEsXG4gICAgICAgICAgICB9KSlcbiAgICAgICAgICApXG4gICAgICAgICk7XG5cbiAgICAgIHJldHVybiBjb21iaW5lTGF0ZXN0KHJlc29sdmVNZXRob2RzKS5waXBlKFxuICAgICAgICBtYXAoZGF0YSA9PiBPYmplY3QuYXNzaWduKHt9LCAuLi5kYXRhKSlcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIHJldHVybiB0aGUgcmVzb2x2ZXIgd2l0aCB0aGUgYmVzdCBtYXRjaFxuICAgKiByZXNvdmVycyBjYW4gYnkgZGVmYXVsdCBtYXRjaCBvbiBQYWdlVHlwZSBhbmQgcGFnZSB0ZW1wbGF0ZVxuICAgKiBidXQgY3VzdG9tIG1hdGNoIGNvbXBhcmlzb3JzIGNhbiBiZSBpbXBsZW1lbnRlZC5cbiAgICovXG4gIHByb3RlY3RlZCBnZXRNZXRhUmVzb2x2ZXIocGFnZTogUGFnZSk6IFBhZ2VNZXRhUmVzb2x2ZXIge1xuICAgIGNvbnN0IG1hdGNoaW5nUmVzb2x2ZXJzID0gdGhpcy5yZXNvbHZlcnMuZmlsdGVyKFxuICAgICAgcmVzb2x2ZXIgPT4gcmVzb2x2ZXIuZ2V0U2NvcmUocGFnZSkgPiAwXG4gICAgKTtcbiAgICBtYXRjaGluZ1Jlc29sdmVycy5zb3J0KGZ1bmN0aW9uKGEsIGIpIHtcbiAgICAgIHJldHVybiBiLmdldFNjb3JlKHBhZ2UpIC0gYS5nZXRTY29yZShwYWdlKTtcbiAgICB9KTtcbiAgICByZXR1cm4gbWF0Y2hpbmdSZXNvbHZlcnNbMF07XG4gIH1cbn1cbiJdfQ==