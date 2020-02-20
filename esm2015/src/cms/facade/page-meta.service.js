import { __decorate, __param } from "tslib";
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
let PageMetaService = class PageMetaService {
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
    getMeta() {
        return this.cms.getCurrentPage().pipe(filter(Boolean), switchMap((page) => {
            const metaResolver = this.getMetaResolver(page);
            if (metaResolver) {
                return this.resolve(metaResolver);
            }
            else {
                // we do not have a page resolver
                return of(null);
            }
        }));
    }
    /**
     * If a pageResolver has implemented a resolver interface, the resolved data
     * is merged into the `PageMeta` object.
     * @param metaResolver
     */
    resolve(metaResolver) {
        if (metaResolver.resolve &&
            (!this.featureConfigService || !this.featureConfigService.isLevel('1.3'))) {
            return metaResolver.resolve();
        }
        else {
            // resolve individual resolvers to make the extension mechanism more flexible
            const resolveMethods = Object.keys(this.resolverMethods)
                .filter(key => metaResolver[this.resolverMethods[key]])
                .map(key => metaResolver[this.resolverMethods[key]]().pipe(map(data => ({
                [key]: data,
            }))));
            return combineLatest(resolveMethods).pipe(map(data => Object.assign({}, ...data)));
        }
    }
    /**
     * return the resolver with the best match
     * resovers can by default match on PageType and page template
     * but custom match comparisors can be implemented.
     */
    getMetaResolver(page) {
        const matchingResolvers = this.resolvers.filter(resolver => resolver.getScore(page) > 0);
        matchingResolvers.sort(function (a, b) {
            return b.getScore(page) - a.getScore(page);
        });
        return matchingResolvers[0];
    }
};
PageMetaService.ctorParameters = () => [
    { type: Array, decorators: [{ type: Optional }, { type: Inject, args: [PageMetaResolver,] }] },
    { type: CmsService },
    { type: FeatureConfigService }
];
PageMetaService.ɵprov = i0.ɵɵdefineInjectable({ factory: function PageMetaService_Factory() { return new PageMetaService(i0.ɵɵinject(i1.PageMetaResolver, 8), i0.ɵɵinject(i2.CmsService), i0.ɵɵinject(i3.FeatureConfigService)); }, token: PageMetaService, providedIn: "root" });
PageMetaService = __decorate([
    Injectable({
        providedIn: 'root',
    }),
    __param(0, Optional()),
    __param(0, Inject(PageMetaResolver))
], PageMetaService);
export { PageMetaService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1tZXRhLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY21zL2ZhY2FkZS9wYWdlLW1ldGEuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBRSxhQUFhLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3JELE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHVEQUF1RCxDQUFDO0FBRTdGLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQzlELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7O0FBSzNDLElBQWEsZUFBZSxHQUE1QixNQUFhLGVBQWU7SUFDMUIsWUFHWSxTQUE2QixFQUM3QixHQUFlLEVBQ2Ysb0JBQTJDO1FBRjNDLGNBQVMsR0FBVCxTQUFTLENBQW9CO1FBQzdCLFFBQUcsR0FBSCxHQUFHLENBQVk7UUFDZix5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXVCO1FBSXZEOzs7Ozs7V0FNRztRQUNILG9CQUFlLEdBQUc7WUFDaEIsS0FBSyxFQUFFLGNBQWM7WUFDckIsT0FBTyxFQUFFLGdCQUFnQjtZQUN6QixXQUFXLEVBQUUsb0JBQW9CO1lBQ2pDLFdBQVcsRUFBRSxvQkFBb0I7WUFDakMsS0FBSyxFQUFFLGNBQWM7WUFDckIsTUFBTSxFQUFFLGVBQWU7U0FDeEIsQ0FBQztRQWhCQSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLElBQUksRUFBRSxDQUFDO0lBQ3hDLENBQUM7SUFpQkQsT0FBTztRQUNMLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxJQUFJLENBQ25DLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFDZixTQUFTLENBQUMsQ0FBQyxJQUFVLEVBQUUsRUFBRTtZQUN2QixNQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2hELElBQUksWUFBWSxFQUFFO2dCQUNoQixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUM7YUFDbkM7aUJBQU07Z0JBQ0wsaUNBQWlDO2dCQUNqQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUNqQjtRQUNILENBQUMsQ0FBQyxDQUNILENBQUM7SUFDSixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNLLE9BQU8sQ0FBQyxZQUFZO1FBQzFCLElBQ0UsWUFBWSxDQUFDLE9BQU87WUFDcEIsQ0FBQyxDQUFDLElBQUksQ0FBQyxvQkFBb0IsSUFBSSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsRUFDekU7WUFDQSxPQUFPLFlBQVksQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUMvQjthQUFNO1lBQ0wsNkVBQTZFO1lBQzdFLE1BQU0sY0FBYyxHQUFVLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQztpQkFDNUQsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztpQkFDdEQsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQ1QsWUFBWSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FDNUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDWCxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUk7YUFDWixDQUFDLENBQUMsQ0FDSixDQUNGLENBQUM7WUFFSixPQUFPLGFBQWEsQ0FBQyxjQUFjLENBQUMsQ0FBQyxJQUFJLENBQ3ZDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FDeEMsQ0FBQztTQUNIO0lBQ0gsQ0FBQztJQUVEOzs7O09BSUc7SUFDTyxlQUFlLENBQUMsSUFBVTtRQUNsQyxNQUFNLGlCQUFpQixHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUM3QyxRQUFRLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUN4QyxDQUFDO1FBQ0YsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFVBQVMsQ0FBQyxFQUFFLENBQUM7WUFDbEMsT0FBTyxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDN0MsQ0FBQyxDQUFDLENBQUM7UUFDSCxPQUFPLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzlCLENBQUM7Q0FDRixDQUFBOzt3Q0FsRkksUUFBUSxZQUNSLE1BQU0sU0FBQyxnQkFBZ0I7WUFFVCxVQUFVO1lBQ1Esb0JBQW9COzs7QUFONUMsZUFBZTtJQUgzQixVQUFVLENBQUM7UUFDVixVQUFVLEVBQUUsTUFBTTtLQUNuQixDQUFDO0lBR0csV0FBQSxRQUFRLEVBQUUsQ0FBQTtJQUNWLFdBQUEsTUFBTSxDQUFDLGdCQUFnQixDQUFDLENBQUE7R0FIaEIsZUFBZSxDQW9GM0I7U0FwRlksZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGNvbWJpbmVMYXRlc3QsIE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIG1hcCwgc3dpdGNoTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgRmVhdHVyZUNvbmZpZ1NlcnZpY2UgfSBmcm9tICcuLi8uLi9mZWF0dXJlcy1jb25maWcvc2VydmljZXMvZmVhdHVyZS1jb25maWcuc2VydmljZSc7XG5pbXBvcnQgeyBQYWdlLCBQYWdlTWV0YSB9IGZyb20gJy4uL21vZGVsL3BhZ2UubW9kZWwnO1xuaW1wb3J0IHsgUGFnZU1ldGFSZXNvbHZlciB9IGZyb20gJy4uL3BhZ2UvcGFnZS1tZXRhLnJlc29sdmVyJztcbmltcG9ydCB7IENtc1NlcnZpY2UgfSBmcm9tICcuL2Ntcy5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIFBhZ2VNZXRhU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIEBPcHRpb25hbCgpXG4gICAgQEluamVjdChQYWdlTWV0YVJlc29sdmVyKVxuICAgIHByb3RlY3RlZCByZXNvbHZlcnM6IFBhZ2VNZXRhUmVzb2x2ZXJbXSxcbiAgICBwcm90ZWN0ZWQgY21zOiBDbXNTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBmZWF0dXJlQ29uZmlnU2VydmljZT86IEZlYXR1cmVDb25maWdTZXJ2aWNlXG4gICkge1xuICAgIHRoaXMucmVzb2x2ZXJzID0gdGhpcy5yZXNvbHZlcnMgfHwgW107XG4gIH1cbiAgLyoqXG4gICAqIFRoZSBsaXN0IG9mIHJlc29sdmVyIGludGVyZmFjZXMgd2lsbCBiZSBldmFsdWF0ZWQgZm9yIHRoZSBwYWdlUmVzb2x2ZXJzLlxuICAgKlxuICAgKiBUT09EOiBvcHRpbWl6ZSBicm93c2VyIHZzIFNTUiByZXNvbHZlcnM7IGltYWdlLCByb2JvdHMgYW5kIGRlc2NyaXB0aW9uXG4gICAqICAgICAgIGFyZW4ndCBuZWVkZWQgZHVyaW5nIGJyb3dzaW5nLlxuICAgKiBUT0RPOiB3ZSBjYW4gbWFrZSB0aGUgbGlzdCBvZiByZXNvbHZlciB0eXBlcyBjb25maWd1cmFibGVcbiAgICovXG4gIHJlc29sdmVyTWV0aG9kcyA9IHtcbiAgICB0aXRsZTogJ3Jlc29sdmVUaXRsZScsXG4gICAgaGVhZGluZzogJ3Jlc29sdmVIZWFkaW5nJyxcbiAgICBkZXNjcmlwdGlvbjogJ3Jlc29sdmVEZXNjcmlwdGlvbicsXG4gICAgYnJlYWRjcnVtYnM6ICdyZXNvbHZlQnJlYWRjcnVtYnMnLFxuICAgIGltYWdlOiAncmVzb2x2ZUltYWdlJyxcbiAgICByb2JvdHM6ICdyZXNvbHZlUm9ib3RzJyxcbiAgfTtcblxuICBnZXRNZXRhKCk6IE9ic2VydmFibGU8UGFnZU1ldGE+IHtcbiAgICByZXR1cm4gdGhpcy5jbXMuZ2V0Q3VycmVudFBhZ2UoKS5waXBlKFxuICAgICAgZmlsdGVyKEJvb2xlYW4pLFxuICAgICAgc3dpdGNoTWFwKChwYWdlOiBQYWdlKSA9PiB7XG4gICAgICAgIGNvbnN0IG1ldGFSZXNvbHZlciA9IHRoaXMuZ2V0TWV0YVJlc29sdmVyKHBhZ2UpO1xuICAgICAgICBpZiAobWV0YVJlc29sdmVyKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMucmVzb2x2ZShtZXRhUmVzb2x2ZXIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIHdlIGRvIG5vdCBoYXZlIGEgcGFnZSByZXNvbHZlclxuICAgICAgICAgIHJldHVybiBvZihudWxsKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIElmIGEgcGFnZVJlc29sdmVyIGhhcyBpbXBsZW1lbnRlZCBhIHJlc29sdmVyIGludGVyZmFjZSwgdGhlIHJlc29sdmVkIGRhdGFcbiAgICogaXMgbWVyZ2VkIGludG8gdGhlIGBQYWdlTWV0YWAgb2JqZWN0LlxuICAgKiBAcGFyYW0gbWV0YVJlc29sdmVyXG4gICAqL1xuICBwcml2YXRlIHJlc29sdmUobWV0YVJlc29sdmVyKTogT2JzZXJ2YWJsZTxQYWdlTWV0YT4ge1xuICAgIGlmIChcbiAgICAgIG1ldGFSZXNvbHZlci5yZXNvbHZlICYmXG4gICAgICAoIXRoaXMuZmVhdHVyZUNvbmZpZ1NlcnZpY2UgfHwgIXRoaXMuZmVhdHVyZUNvbmZpZ1NlcnZpY2UuaXNMZXZlbCgnMS4zJykpXG4gICAgKSB7XG4gICAgICByZXR1cm4gbWV0YVJlc29sdmVyLnJlc29sdmUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gcmVzb2x2ZSBpbmRpdmlkdWFsIHJlc29sdmVycyB0byBtYWtlIHRoZSBleHRlbnNpb24gbWVjaGFuaXNtIG1vcmUgZmxleGlibGVcbiAgICAgIGNvbnN0IHJlc29sdmVNZXRob2RzOiBhbnlbXSA9IE9iamVjdC5rZXlzKHRoaXMucmVzb2x2ZXJNZXRob2RzKVxuICAgICAgICAuZmlsdGVyKGtleSA9PiBtZXRhUmVzb2x2ZXJbdGhpcy5yZXNvbHZlck1ldGhvZHNba2V5XV0pXG4gICAgICAgIC5tYXAoa2V5ID0+XG4gICAgICAgICAgbWV0YVJlc29sdmVyW3RoaXMucmVzb2x2ZXJNZXRob2RzW2tleV1dKCkucGlwZShcbiAgICAgICAgICAgIG1hcChkYXRhID0+ICh7XG4gICAgICAgICAgICAgIFtrZXldOiBkYXRhLFxuICAgICAgICAgICAgfSkpXG4gICAgICAgICAgKVxuICAgICAgICApO1xuXG4gICAgICByZXR1cm4gY29tYmluZUxhdGVzdChyZXNvbHZlTWV0aG9kcykucGlwZShcbiAgICAgICAgbWFwKGRhdGEgPT4gT2JqZWN0LmFzc2lnbih7fSwgLi4uZGF0YSkpXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiByZXR1cm4gdGhlIHJlc29sdmVyIHdpdGggdGhlIGJlc3QgbWF0Y2hcbiAgICogcmVzb3ZlcnMgY2FuIGJ5IGRlZmF1bHQgbWF0Y2ggb24gUGFnZVR5cGUgYW5kIHBhZ2UgdGVtcGxhdGVcbiAgICogYnV0IGN1c3RvbSBtYXRjaCBjb21wYXJpc29ycyBjYW4gYmUgaW1wbGVtZW50ZWQuXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0TWV0YVJlc29sdmVyKHBhZ2U6IFBhZ2UpOiBQYWdlTWV0YVJlc29sdmVyIHtcbiAgICBjb25zdCBtYXRjaGluZ1Jlc29sdmVycyA9IHRoaXMucmVzb2x2ZXJzLmZpbHRlcihcbiAgICAgIHJlc29sdmVyID0+IHJlc29sdmVyLmdldFNjb3JlKHBhZ2UpID4gMFxuICAgICk7XG4gICAgbWF0Y2hpbmdSZXNvbHZlcnMuc29ydChmdW5jdGlvbihhLCBiKSB7XG4gICAgICByZXR1cm4gYi5nZXRTY29yZShwYWdlKSAtIGEuZ2V0U2NvcmUocGFnZSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIG1hdGNoaW5nUmVzb2x2ZXJzWzBdO1xuICB9XG59XG4iXX0=