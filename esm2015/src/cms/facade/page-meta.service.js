/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1tZXRhLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY21zL2ZhY2FkZS9wYWdlLW1ldGEuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBRSxhQUFhLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3JELE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRTdELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQzlELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7O0FBSzNDLE1BQU0sT0FBTyxlQUFlOzs7Ozs7SUFDMUIsWUFHWSxTQUE2QixFQUM3QixHQUFlLEVBQ2Ysb0JBQTJDO1FBRjNDLGNBQVMsR0FBVCxTQUFTLENBQW9CO1FBQzdCLFFBQUcsR0FBSCxHQUFHLENBQVk7UUFDZix5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXVCOzs7Ozs7OztRQVd2RCxvQkFBZSxHQUFHO1lBQ2hCLEtBQUssRUFBRSxjQUFjO1lBQ3JCLE9BQU8sRUFBRSxnQkFBZ0I7WUFDekIsV0FBVyxFQUFFLG9CQUFvQjtZQUNqQyxXQUFXLEVBQUUsb0JBQW9CO1lBQ2pDLEtBQUssRUFBRSxjQUFjO1lBQ3JCLE1BQU0sRUFBRSxlQUFlO1NBQ3hCLENBQUM7UUFoQkEsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxJQUFJLEVBQUUsQ0FBQztJQUN4QyxDQUFDOzs7O0lBaUJELE9BQU87UUFDTCxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLENBQUMsSUFBSSxDQUNuQyxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQ2YsU0FBUzs7OztRQUFDLENBQUMsSUFBVSxFQUFFLEVBQUU7O2tCQUNqQixZQUFZLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUM7WUFDL0MsSUFBSSxZQUFZLEVBQUU7Z0JBQ2hCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQzthQUNuQztpQkFBTTtnQkFDTCxpQ0FBaUM7Z0JBQ2pDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ2pCO1FBQ0gsQ0FBQyxFQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7Ozs7Ozs7O0lBT08sT0FBTyxDQUFDLFlBQVk7UUFDMUIsSUFDRSxZQUFZLENBQUMsT0FBTztZQUNwQixDQUFDLENBQUMsSUFBSSxDQUFDLG9CQUFvQixJQUFJLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUN6RTtZQUNBLE9BQU8sWUFBWSxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQy9CO2FBQU07OztrQkFFQyxjQUFjLEdBQVUsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDO2lCQUM1RCxNQUFNOzs7O1lBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFDO2lCQUN0RCxHQUFHOzs7O1lBQUMsR0FBRyxDQUFDLEVBQUUsQ0FDVCxZQUFZLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUM1QyxHQUFHOzs7O1lBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUNYLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSTthQUNaLENBQUMsRUFBQyxDQUNKLEVBQ0Y7WUFFSCxPQUFPLGFBQWEsQ0FBQyxjQUFjLENBQUMsQ0FBQyxJQUFJLENBQ3ZDLEdBQUc7Ozs7WUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLEdBQUcsSUFBSSxDQUFDLEVBQUMsQ0FDeEMsQ0FBQztTQUNIO0lBQ0gsQ0FBQzs7Ozs7Ozs7O0lBT1MsZUFBZSxDQUFDLElBQVU7O2NBQzVCLGlCQUFpQixHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTTs7OztRQUM3QyxRQUFRLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUN4QztRQUNELGlCQUFpQixDQUFDLElBQUk7Ozs7O1FBQUMsVUFBUyxDQUFDLEVBQUUsQ0FBQztZQUNsQyxPQUFPLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM3QyxDQUFDLEVBQUMsQ0FBQztRQUNILE9BQU8saUJBQWlCLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDOUIsQ0FBQzs7O1lBdEZGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7Ozt3Q0FHSSxRQUFRLFlBQ1IsTUFBTSxTQUFDLGdCQUFnQjtZQVJuQixVQUFVO1lBSFYsb0JBQW9COzs7Ozs7Ozs7Ozs7SUF5QjNCLDBDQU9FOzs7OztJQXRCQSxvQ0FFdUM7Ozs7O0lBQ3ZDLDhCQUF5Qjs7Ozs7SUFDekIsK0NBQXFEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgY29tYmluZUxhdGVzdCwgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgbWFwLCBzd2l0Y2hNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBGZWF0dXJlQ29uZmlnU2VydmljZSB9IGZyb20gJy4uLy4uL2ZlYXR1cmVzLWNvbmZpZyc7XG5pbXBvcnQgeyBQYWdlLCBQYWdlTWV0YSB9IGZyb20gJy4uL21vZGVsL3BhZ2UubW9kZWwnO1xuaW1wb3J0IHsgUGFnZU1ldGFSZXNvbHZlciB9IGZyb20gJy4uL3BhZ2UvcGFnZS1tZXRhLnJlc29sdmVyJztcbmltcG9ydCB7IENtc1NlcnZpY2UgfSBmcm9tICcuL2Ntcy5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIFBhZ2VNZXRhU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIEBPcHRpb25hbCgpXG4gICAgQEluamVjdChQYWdlTWV0YVJlc29sdmVyKVxuICAgIHByb3RlY3RlZCByZXNvbHZlcnM6IFBhZ2VNZXRhUmVzb2x2ZXJbXSxcbiAgICBwcm90ZWN0ZWQgY21zOiBDbXNTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBmZWF0dXJlQ29uZmlnU2VydmljZT86IEZlYXR1cmVDb25maWdTZXJ2aWNlXG4gICkge1xuICAgIHRoaXMucmVzb2x2ZXJzID0gdGhpcy5yZXNvbHZlcnMgfHwgW107XG4gIH1cbiAgLyoqXG4gICAqIFRoZSBsaXN0IG9mIHJlc29sdmVyIGludGVyZmFjZXMgd2lsbCBiZSBldmFsdWF0ZWQgZm9yIHRoZSBwYWdlUmVzb2x2ZXJzLlxuICAgKlxuICAgKiBUT09EOiBvcHRpbWl6ZSBicm93c2VyIHZzIFNTUiByZXNvbHZlcnM7IGltYWdlLCByb2JvdHMgYW5kIGRlc2NyaXB0aW9uXG4gICAqICAgICAgIGFyZW4ndCBuZWVkZWQgZHVyaW5nIGJyb3dzaW5nLlxuICAgKiBUT0RPOiB3ZSBjYW4gbWFrZSB0aGUgbGlzdCBvZiByZXNvbHZlciB0eXBlcyBjb25maWd1cmFibGVcbiAgICovXG4gIHJlc29sdmVyTWV0aG9kcyA9IHtcbiAgICB0aXRsZTogJ3Jlc29sdmVUaXRsZScsXG4gICAgaGVhZGluZzogJ3Jlc29sdmVIZWFkaW5nJyxcbiAgICBkZXNjcmlwdGlvbjogJ3Jlc29sdmVEZXNjcmlwdGlvbicsXG4gICAgYnJlYWRjcnVtYnM6ICdyZXNvbHZlQnJlYWRjcnVtYnMnLFxuICAgIGltYWdlOiAncmVzb2x2ZUltYWdlJyxcbiAgICByb2JvdHM6ICdyZXNvbHZlUm9ib3RzJyxcbiAgfTtcblxuICBnZXRNZXRhKCk6IE9ic2VydmFibGU8UGFnZU1ldGE+IHtcbiAgICByZXR1cm4gdGhpcy5jbXMuZ2V0Q3VycmVudFBhZ2UoKS5waXBlKFxuICAgICAgZmlsdGVyKEJvb2xlYW4pLFxuICAgICAgc3dpdGNoTWFwKChwYWdlOiBQYWdlKSA9PiB7XG4gICAgICAgIGNvbnN0IG1ldGFSZXNvbHZlciA9IHRoaXMuZ2V0TWV0YVJlc29sdmVyKHBhZ2UpO1xuICAgICAgICBpZiAobWV0YVJlc29sdmVyKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMucmVzb2x2ZShtZXRhUmVzb2x2ZXIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIHdlIGRvIG5vdCBoYXZlIGEgcGFnZSByZXNvbHZlclxuICAgICAgICAgIHJldHVybiBvZihudWxsKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIElmIGEgcGFnZVJlc29sdmVyIGhhcyBpbXBsZW1lbnRlZCBhIHJlc29sdmVyIGludGVyZmFjZSwgdGhlIHJlc29sdmVkIGRhdGFcbiAgICogaXMgbWVyZ2VkIGludG8gdGhlIGBQYWdlTWV0YWAgb2JqZWN0LlxuICAgKiBAcGFyYW0gbWV0YVJlc29sdmVyXG4gICAqL1xuICBwcml2YXRlIHJlc29sdmUobWV0YVJlc29sdmVyKTogT2JzZXJ2YWJsZTxQYWdlTWV0YT4ge1xuICAgIGlmIChcbiAgICAgIG1ldGFSZXNvbHZlci5yZXNvbHZlICYmXG4gICAgICAoIXRoaXMuZmVhdHVyZUNvbmZpZ1NlcnZpY2UgfHwgIXRoaXMuZmVhdHVyZUNvbmZpZ1NlcnZpY2UuaXNMZXZlbCgnMS4zJykpXG4gICAgKSB7XG4gICAgICByZXR1cm4gbWV0YVJlc29sdmVyLnJlc29sdmUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gcmVzb2x2ZSBpbmRpdmlkdWFsIHJlc29sdmVycyB0byBtYWtlIHRoZSBleHRlbnNpb24gbWVjaGFuaXNtIG1vcmUgZmxleGlibGVcbiAgICAgIGNvbnN0IHJlc29sdmVNZXRob2RzOiBhbnlbXSA9IE9iamVjdC5rZXlzKHRoaXMucmVzb2x2ZXJNZXRob2RzKVxuICAgICAgICAuZmlsdGVyKGtleSA9PiBtZXRhUmVzb2x2ZXJbdGhpcy5yZXNvbHZlck1ldGhvZHNba2V5XV0pXG4gICAgICAgIC5tYXAoa2V5ID0+XG4gICAgICAgICAgbWV0YVJlc29sdmVyW3RoaXMucmVzb2x2ZXJNZXRob2RzW2tleV1dKCkucGlwZShcbiAgICAgICAgICAgIG1hcChkYXRhID0+ICh7XG4gICAgICAgICAgICAgIFtrZXldOiBkYXRhLFxuICAgICAgICAgICAgfSkpXG4gICAgICAgICAgKVxuICAgICAgICApO1xuXG4gICAgICByZXR1cm4gY29tYmluZUxhdGVzdChyZXNvbHZlTWV0aG9kcykucGlwZShcbiAgICAgICAgbWFwKGRhdGEgPT4gT2JqZWN0LmFzc2lnbih7fSwgLi4uZGF0YSkpXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiByZXR1cm4gdGhlIHJlc29sdmVyIHdpdGggdGhlIGJlc3QgbWF0Y2hcbiAgICogcmVzb3ZlcnMgY2FuIGJ5IGRlZmF1bHQgbWF0Y2ggb24gUGFnZVR5cGUgYW5kIHBhZ2UgdGVtcGxhdGVcbiAgICogYnV0IGN1c3RvbSBtYXRjaCBjb21wYXJpc29ycyBjYW4gYmUgaW1wbGVtZW50ZWQuXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0TWV0YVJlc29sdmVyKHBhZ2U6IFBhZ2UpOiBQYWdlTWV0YVJlc29sdmVyIHtcbiAgICBjb25zdCBtYXRjaGluZ1Jlc29sdmVycyA9IHRoaXMucmVzb2x2ZXJzLmZpbHRlcihcbiAgICAgIHJlc29sdmVyID0+IHJlc29sdmVyLmdldFNjb3JlKHBhZ2UpID4gMFxuICAgICk7XG4gICAgbWF0Y2hpbmdSZXNvbHZlcnMuc29ydChmdW5jdGlvbihhLCBiKSB7XG4gICAgICByZXR1cm4gYi5nZXRTY29yZShwYWdlKSAtIGEuZ2V0U2NvcmUocGFnZSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIG1hdGNoaW5nUmVzb2x2ZXJzWzBdO1xuICB9XG59XG4iXX0=