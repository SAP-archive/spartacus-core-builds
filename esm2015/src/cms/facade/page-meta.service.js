/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Inject } from '@angular/core';
import { of } from 'rxjs';
import { switchMap, filter } from 'rxjs/operators';
import { CmsService } from './cms.service';
import { PageMetaResolver } from '../page/page-meta.resolver';
import * as i0 from "@angular/core";
import * as i1 from "../page/page-meta.resolver";
import * as i2 from "./cms.service";
export class PageMetaService {
    /**
     * @param {?} resolvers
     * @param {?} cms
     */
    constructor(resolvers, cms) {
        this.resolvers = resolvers;
        this.cms = cms;
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
                return metaResolver.resolve();
            }
            else {
                // we do not have a page resolver
                return of(null);
            }
        })));
    }
    /**
     * return the title resolver with the best match
     * title resovers can by default match on PageType and page template
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
    { type: Array, decorators: [{ type: Inject, args: [PageMetaResolver,] }] },
    { type: CmsService }
];
/** @nocollapse */ PageMetaService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function PageMetaService_Factory() { return new PageMetaService(i0.ɵɵinject(i1.PageMetaResolver), i0.ɵɵinject(i2.CmsService)); }, token: PageMetaService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1tZXRhLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY21zL2ZhY2FkZS9wYWdlLW1ldGEuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRW5ELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7Ozs7QUFLOUQsTUFBTSxPQUFPLGVBQWU7Ozs7O0lBQzFCLFlBQ3NDLFNBQTZCLEVBQ3ZELEdBQWU7UUFEVyxjQUFTLEdBQVQsU0FBUyxDQUFvQjtRQUN2RCxRQUFHLEdBQUgsR0FBRyxDQUFZO0lBQ3hCLENBQUM7Ozs7SUFFSixPQUFPO1FBQ0wsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxDQUFDLElBQUksQ0FDbkMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUNmLFNBQVM7Ozs7UUFBQyxDQUFDLElBQVUsRUFBRSxFQUFFOztrQkFDakIsWUFBWSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDO1lBQy9DLElBQUksWUFBWSxFQUFFO2dCQUNoQixPQUFPLFlBQVksQ0FBQyxPQUFPLEVBQUUsQ0FBQzthQUMvQjtpQkFBTTtnQkFDTCxpQ0FBaUM7Z0JBQ2pDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ2pCO1FBQ0gsQ0FBQyxFQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7Ozs7Ozs7OztJQU9TLGVBQWUsQ0FBQyxJQUFVOztjQUM1QixpQkFBaUIsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU07Ozs7UUFDN0MsUUFBUSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFDeEM7UUFDRCxpQkFBaUIsQ0FBQyxJQUFJOzs7OztRQUFDLFVBQVMsQ0FBQyxFQUFFLENBQUM7WUFDbEMsT0FBTyxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDN0MsQ0FBQyxFQUFDLENBQUM7UUFDSCxPQUFPLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzlCLENBQUM7OztZQXJDRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7d0NBR0ksTUFBTSxTQUFDLGdCQUFnQjtZQVJuQixVQUFVOzs7Ozs7OztJQVFmLG9DQUFpRTs7Ozs7SUFDakUsOEJBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgc3dpdGNoTWFwLCBmaWx0ZXIgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBQYWdlLCBQYWdlTWV0YSB9IGZyb20gJy4uL21vZGVsL3BhZ2UubW9kZWwnO1xuaW1wb3J0IHsgQ21zU2VydmljZSB9IGZyb20gJy4vY21zLnNlcnZpY2UnO1xuaW1wb3J0IHsgUGFnZU1ldGFSZXNvbHZlciB9IGZyb20gJy4uL3BhZ2UvcGFnZS1tZXRhLnJlc29sdmVyJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIFBhZ2VNZXRhU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoUGFnZU1ldGFSZXNvbHZlcikgcHJvdGVjdGVkIHJlc29sdmVyczogUGFnZU1ldGFSZXNvbHZlcltdLFxuICAgIHByb3RlY3RlZCBjbXM6IENtc1NlcnZpY2VcbiAgKSB7fVxuXG4gIGdldE1ldGEoKTogT2JzZXJ2YWJsZTxQYWdlTWV0YT4ge1xuICAgIHJldHVybiB0aGlzLmNtcy5nZXRDdXJyZW50UGFnZSgpLnBpcGUoXG4gICAgICBmaWx0ZXIoQm9vbGVhbiksXG4gICAgICBzd2l0Y2hNYXAoKHBhZ2U6IFBhZ2UpID0+IHtcbiAgICAgICAgY29uc3QgbWV0YVJlc29sdmVyID0gdGhpcy5nZXRNZXRhUmVzb2x2ZXIocGFnZSk7XG4gICAgICAgIGlmIChtZXRhUmVzb2x2ZXIpIHtcbiAgICAgICAgICByZXR1cm4gbWV0YVJlc29sdmVyLnJlc29sdmUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyB3ZSBkbyBub3QgaGF2ZSBhIHBhZ2UgcmVzb2x2ZXJcbiAgICAgICAgICByZXR1cm4gb2YobnVsbCk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiByZXR1cm4gdGhlIHRpdGxlIHJlc29sdmVyIHdpdGggdGhlIGJlc3QgbWF0Y2hcbiAgICogdGl0bGUgcmVzb3ZlcnMgY2FuIGJ5IGRlZmF1bHQgbWF0Y2ggb24gUGFnZVR5cGUgYW5kIHBhZ2UgdGVtcGxhdGVcbiAgICogYnV0IGN1c3RvbSBtYXRjaCBjb21wYXJpc29ycyBjYW4gYmUgaW1wbGVtZW50ZWQuXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0TWV0YVJlc29sdmVyKHBhZ2U6IFBhZ2UpIHtcbiAgICBjb25zdCBtYXRjaGluZ1Jlc29sdmVycyA9IHRoaXMucmVzb2x2ZXJzLmZpbHRlcihcbiAgICAgIHJlc29sdmVyID0+IHJlc29sdmVyLmdldFNjb3JlKHBhZ2UpID4gMFxuICAgICk7XG4gICAgbWF0Y2hpbmdSZXNvbHZlcnMuc29ydChmdW5jdGlvbihhLCBiKSB7XG4gICAgICByZXR1cm4gYi5nZXRTY29yZShwYWdlKSAtIGEuZ2V0U2NvcmUocGFnZSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIG1hdGNoaW5nUmVzb2x2ZXJzWzBdO1xuICB9XG59XG4iXX0=