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
        return this.cms.getCurrentPage().pipe(filter(Boolean), switchMap((page) => {
            /** @type {?} */
            const metaResolver = this.getMetaResolver(page);
            if (metaResolver) {
                return metaResolver.resolve();
            }
            else {
                // we do not have a page resolver
                return of(null);
            }
        }));
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
        const matchingResolvers = this.resolvers.filter(resolver => resolver.getScore(page) > 0);
        matchingResolvers.sort(function (a, b) {
            return b.getScore(page) - a.getScore(page);
        });
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
/** @nocollapse */ PageMetaService.ngInjectableDef = i0.defineInjectable({ factory: function PageMetaService_Factory() { return new PageMetaService(i0.inject(i1.PageMetaResolver), i0.inject(i2.CmsService)); }, token: PageMetaService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1tZXRhLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY21zL2ZhY2FkZS9wYWdlLW1ldGEuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRW5ELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7Ozs7QUFLOUQsTUFBTSxPQUFPLGVBQWU7Ozs7O0lBQzFCLFlBQ3NDLFNBQTZCLEVBQ3ZELEdBQWU7UUFEVyxjQUFTLEdBQVQsU0FBUyxDQUFvQjtRQUN2RCxRQUFHLEdBQUgsR0FBRyxDQUFZO0lBQ3hCLENBQUM7Ozs7SUFFSixPQUFPO1FBQ0wsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxDQUFDLElBQUksQ0FDbkMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUNmLFNBQVMsQ0FBQyxDQUFDLElBQVUsRUFBRSxFQUFFOztrQkFDakIsWUFBWSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDO1lBQy9DLElBQUksWUFBWSxFQUFFO2dCQUNoQixPQUFPLFlBQVksQ0FBQyxPQUFPLEVBQUUsQ0FBQzthQUMvQjtpQkFBTTtnQkFDTCxpQ0FBaUM7Z0JBQ2pDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ2pCO1FBQ0gsQ0FBQyxDQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7Ozs7Ozs7OztJQU9TLGVBQWUsQ0FBQyxJQUFVOztjQUM1QixpQkFBaUIsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FDN0MsUUFBUSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FDeEM7UUFDRCxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsVUFBUyxDQUFDLEVBQUUsQ0FBQztZQUNsQyxPQUFPLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM3QyxDQUFDLENBQUMsQ0FBQztRQUNILE9BQU8saUJBQWlCLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDOUIsQ0FBQzs7O1lBckNGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7Ozt3Q0FHSSxNQUFNLFNBQUMsZ0JBQWdCO1lBUm5CLFVBQVU7Ozs7Ozs7O0lBUWYsb0NBQWlFOzs7OztJQUNqRSw4QkFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBzd2l0Y2hNYXAsIGZpbHRlciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFBhZ2UsIFBhZ2VNZXRhIH0gZnJvbSAnLi4vbW9kZWwvcGFnZS5tb2RlbCc7XG5pbXBvcnQgeyBDbXNTZXJ2aWNlIH0gZnJvbSAnLi9jbXMuc2VydmljZSc7XG5pbXBvcnQgeyBQYWdlTWV0YVJlc29sdmVyIH0gZnJvbSAnLi4vcGFnZS9wYWdlLW1ldGEucmVzb2x2ZXInO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgUGFnZU1ldGFTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgQEluamVjdChQYWdlTWV0YVJlc29sdmVyKSBwcm90ZWN0ZWQgcmVzb2x2ZXJzOiBQYWdlTWV0YVJlc29sdmVyW10sXG4gICAgcHJvdGVjdGVkIGNtczogQ21zU2VydmljZVxuICApIHt9XG5cbiAgZ2V0TWV0YSgpOiBPYnNlcnZhYmxlPFBhZ2VNZXRhPiB7XG4gICAgcmV0dXJuIHRoaXMuY21zLmdldEN1cnJlbnRQYWdlKCkucGlwZShcbiAgICAgIGZpbHRlcihCb29sZWFuKSxcbiAgICAgIHN3aXRjaE1hcCgocGFnZTogUGFnZSkgPT4ge1xuICAgICAgICBjb25zdCBtZXRhUmVzb2x2ZXIgPSB0aGlzLmdldE1ldGFSZXNvbHZlcihwYWdlKTtcbiAgICAgICAgaWYgKG1ldGFSZXNvbHZlcikge1xuICAgICAgICAgIHJldHVybiBtZXRhUmVzb2x2ZXIucmVzb2x2ZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIHdlIGRvIG5vdCBoYXZlIGEgcGFnZSByZXNvbHZlclxuICAgICAgICAgIHJldHVybiBvZihudWxsKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIHJldHVybiB0aGUgdGl0bGUgcmVzb2x2ZXIgd2l0aCB0aGUgYmVzdCBtYXRjaFxuICAgKiB0aXRsZSByZXNvdmVycyBjYW4gYnkgZGVmYXVsdCBtYXRjaCBvbiBQYWdlVHlwZSBhbmQgcGFnZSB0ZW1wbGF0ZVxuICAgKiBidXQgY3VzdG9tIG1hdGNoIGNvbXBhcmlzb3JzIGNhbiBiZSBpbXBsZW1lbnRlZC5cbiAgICovXG4gIHByb3RlY3RlZCBnZXRNZXRhUmVzb2x2ZXIocGFnZTogUGFnZSkge1xuICAgIGNvbnN0IG1hdGNoaW5nUmVzb2x2ZXJzID0gdGhpcy5yZXNvbHZlcnMuZmlsdGVyKFxuICAgICAgcmVzb2x2ZXIgPT4gcmVzb2x2ZXIuZ2V0U2NvcmUocGFnZSkgPiAwXG4gICAgKTtcbiAgICBtYXRjaGluZ1Jlc29sdmVycy5zb3J0KGZ1bmN0aW9uKGEsIGIpIHtcbiAgICAgIHJldHVybiBiLmdldFNjb3JlKHBhZ2UpIC0gYS5nZXRTY29yZShwYWdlKTtcbiAgICB9KTtcbiAgICByZXR1cm4gbWF0Y2hpbmdSZXNvbHZlcnNbMF07XG4gIH1cbn1cbiJdfQ==