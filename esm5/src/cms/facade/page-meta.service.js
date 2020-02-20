import { __decorate, __param, __read, __spread } from "tslib";
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
    PageMetaService.prototype.getMeta = function () {
        var _this = this;
        return this.cms.getCurrentPage().pipe(filter(Boolean), switchMap(function (page) {
            var metaResolver = _this.getMetaResolver(page);
            if (metaResolver) {
                return _this.resolve(metaResolver);
            }
            else {
                // we do not have a page resolver
                return of(null);
            }
        }));
    };
    /**
     * If a pageResolver has implemented a resolver interface, the resolved data
     * is merged into the `PageMeta` object.
     * @param metaResolver
     */
    PageMetaService.prototype.resolve = function (metaResolver) {
        var _this = this;
        if (metaResolver.resolve &&
            (!this.featureConfigService || !this.featureConfigService.isLevel('1.3'))) {
            return metaResolver.resolve();
        }
        else {
            // resolve individual resolvers to make the extension mechanism more flexible
            var resolveMethods = Object.keys(this.resolverMethods)
                .filter(function (key) { return metaResolver[_this.resolverMethods[key]]; })
                .map(function (key) {
                return metaResolver[_this.resolverMethods[key]]().pipe(map(function (data) {
                    var _a;
                    return (_a = {},
                        _a[key] = data,
                        _a);
                }));
            });
            return combineLatest(resolveMethods).pipe(map(function (data) { return Object.assign.apply(Object, __spread([{}], data)); }));
        }
    };
    /**
     * return the resolver with the best match
     * resovers can by default match on PageType and page template
     * but custom match comparisors can be implemented.
     */
    PageMetaService.prototype.getMetaResolver = function (page) {
        var matchingResolvers = this.resolvers.filter(function (resolver) { return resolver.getScore(page) > 0; });
        matchingResolvers.sort(function (a, b) {
            return b.getScore(page) - a.getScore(page);
        });
        return matchingResolvers[0];
    };
    PageMetaService.ctorParameters = function () { return [
        { type: Array, decorators: [{ type: Optional }, { type: Inject, args: [PageMetaResolver,] }] },
        { type: CmsService },
        { type: FeatureConfigService }
    ]; };
    PageMetaService.ɵprov = i0.ɵɵdefineInjectable({ factory: function PageMetaService_Factory() { return new PageMetaService(i0.ɵɵinject(i1.PageMetaResolver, 8), i0.ɵɵinject(i2.CmsService), i0.ɵɵinject(i3.FeatureConfigService)); }, token: PageMetaService, providedIn: "root" });
    PageMetaService = __decorate([
        Injectable({
            providedIn: 'root',
        }),
        __param(0, Optional()),
        __param(0, Inject(PageMetaResolver))
    ], PageMetaService);
    return PageMetaService;
}());
export { PageMetaService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1tZXRhLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY21zL2ZhY2FkZS9wYWdlLW1ldGEuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBRSxhQUFhLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3JELE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHVEQUF1RCxDQUFDO0FBRTdGLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQzlELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7O0FBSzNDO0lBQ0UseUJBR1ksU0FBNkIsRUFDN0IsR0FBZSxFQUNmLG9CQUEyQztRQUYzQyxjQUFTLEdBQVQsU0FBUyxDQUFvQjtRQUM3QixRQUFHLEdBQUgsR0FBRyxDQUFZO1FBQ2YseUJBQW9CLEdBQXBCLG9CQUFvQixDQUF1QjtRQUl2RDs7Ozs7O1dBTUc7UUFDSCxvQkFBZSxHQUFHO1lBQ2hCLEtBQUssRUFBRSxjQUFjO1lBQ3JCLE9BQU8sRUFBRSxnQkFBZ0I7WUFDekIsV0FBVyxFQUFFLG9CQUFvQjtZQUNqQyxXQUFXLEVBQUUsb0JBQW9CO1lBQ2pDLEtBQUssRUFBRSxjQUFjO1lBQ3JCLE1BQU0sRUFBRSxlQUFlO1NBQ3hCLENBQUM7UUFoQkEsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxJQUFJLEVBQUUsQ0FBQztJQUN4QyxDQUFDO0lBaUJELGlDQUFPLEdBQVA7UUFBQSxpQkFhQztRQVpDLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxJQUFJLENBQ25DLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFDZixTQUFTLENBQUMsVUFBQyxJQUFVO1lBQ25CLElBQU0sWUFBWSxHQUFHLEtBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDaEQsSUFBSSxZQUFZLEVBQUU7Z0JBQ2hCLE9BQU8sS0FBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQzthQUNuQztpQkFBTTtnQkFDTCxpQ0FBaUM7Z0JBQ2pDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ2pCO1FBQ0gsQ0FBQyxDQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7SUFFRDs7OztPQUlHO0lBQ0ssaUNBQU8sR0FBZixVQUFnQixZQUFZO1FBQTVCLGlCQXNCQztRQXJCQyxJQUNFLFlBQVksQ0FBQyxPQUFPO1lBQ3BCLENBQUMsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLElBQUksQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQ3pFO1lBQ0EsT0FBTyxZQUFZLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDL0I7YUFBTTtZQUNMLDZFQUE2RTtZQUM3RSxJQUFNLGNBQWMsR0FBVSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUM7aUJBQzVELE1BQU0sQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLFlBQVksQ0FBQyxLQUFJLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQXZDLENBQXVDLENBQUM7aUJBQ3RELEdBQUcsQ0FBQyxVQUFBLEdBQUc7Z0JBQ04sT0FBQSxZQUFZLENBQUMsS0FBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUM1QyxHQUFHLENBQUMsVUFBQSxJQUFJOztvQkFBSSxPQUFBO3dCQUNWLEdBQUMsR0FBRyxJQUFHLElBQUk7MkJBQ1g7Z0JBRlUsQ0FFVixDQUFDLENBQ0o7WUFKRCxDQUlDLENBQ0YsQ0FBQztZQUVKLE9BQU8sYUFBYSxDQUFDLGNBQWMsQ0FBQyxDQUFDLElBQUksQ0FDdkMsR0FBRyxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsTUFBTSxDQUFDLE1BQU0sT0FBYixNQUFNLFlBQVEsRUFBRSxHQUFLLElBQUksSUFBekIsQ0FBMEIsQ0FBQyxDQUN4QyxDQUFDO1NBQ0g7SUFDSCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNPLHlDQUFlLEdBQXpCLFVBQTBCLElBQVU7UUFDbEMsSUFBTSxpQkFBaUIsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FDN0MsVUFBQSxRQUFRLElBQUksT0FBQSxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBM0IsQ0FBMkIsQ0FDeEMsQ0FBQztRQUNGLGlCQUFpQixDQUFDLElBQUksQ0FBQyxVQUFTLENBQUMsRUFBRSxDQUFDO1lBQ2xDLE9BQU8sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzdDLENBQUMsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM5QixDQUFDOzs0Q0FqRkUsUUFBUSxZQUNSLE1BQU0sU0FBQyxnQkFBZ0I7Z0JBRVQsVUFBVTtnQkFDUSxvQkFBb0I7OztJQU41QyxlQUFlO1FBSDNCLFVBQVUsQ0FBQztZQUNWLFVBQVUsRUFBRSxNQUFNO1NBQ25CLENBQUM7UUFHRyxXQUFBLFFBQVEsRUFBRSxDQUFBO1FBQ1YsV0FBQSxNQUFNLENBQUMsZ0JBQWdCLENBQUMsQ0FBQTtPQUhoQixlQUFlLENBb0YzQjswQkEvRkQ7Q0ErRkMsQUFwRkQsSUFvRkM7U0FwRlksZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGNvbWJpbmVMYXRlc3QsIE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIG1hcCwgc3dpdGNoTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgRmVhdHVyZUNvbmZpZ1NlcnZpY2UgfSBmcm9tICcuLi8uLi9mZWF0dXJlcy1jb25maWcvc2VydmljZXMvZmVhdHVyZS1jb25maWcuc2VydmljZSc7XG5pbXBvcnQgeyBQYWdlLCBQYWdlTWV0YSB9IGZyb20gJy4uL21vZGVsL3BhZ2UubW9kZWwnO1xuaW1wb3J0IHsgUGFnZU1ldGFSZXNvbHZlciB9IGZyb20gJy4uL3BhZ2UvcGFnZS1tZXRhLnJlc29sdmVyJztcbmltcG9ydCB7IENtc1NlcnZpY2UgfSBmcm9tICcuL2Ntcy5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIFBhZ2VNZXRhU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIEBPcHRpb25hbCgpXG4gICAgQEluamVjdChQYWdlTWV0YVJlc29sdmVyKVxuICAgIHByb3RlY3RlZCByZXNvbHZlcnM6IFBhZ2VNZXRhUmVzb2x2ZXJbXSxcbiAgICBwcm90ZWN0ZWQgY21zOiBDbXNTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBmZWF0dXJlQ29uZmlnU2VydmljZT86IEZlYXR1cmVDb25maWdTZXJ2aWNlXG4gICkge1xuICAgIHRoaXMucmVzb2x2ZXJzID0gdGhpcy5yZXNvbHZlcnMgfHwgW107XG4gIH1cbiAgLyoqXG4gICAqIFRoZSBsaXN0IG9mIHJlc29sdmVyIGludGVyZmFjZXMgd2lsbCBiZSBldmFsdWF0ZWQgZm9yIHRoZSBwYWdlUmVzb2x2ZXJzLlxuICAgKlxuICAgKiBUT09EOiBvcHRpbWl6ZSBicm93c2VyIHZzIFNTUiByZXNvbHZlcnM7IGltYWdlLCByb2JvdHMgYW5kIGRlc2NyaXB0aW9uXG4gICAqICAgICAgIGFyZW4ndCBuZWVkZWQgZHVyaW5nIGJyb3dzaW5nLlxuICAgKiBUT0RPOiB3ZSBjYW4gbWFrZSB0aGUgbGlzdCBvZiByZXNvbHZlciB0eXBlcyBjb25maWd1cmFibGVcbiAgICovXG4gIHJlc29sdmVyTWV0aG9kcyA9IHtcbiAgICB0aXRsZTogJ3Jlc29sdmVUaXRsZScsXG4gICAgaGVhZGluZzogJ3Jlc29sdmVIZWFkaW5nJyxcbiAgICBkZXNjcmlwdGlvbjogJ3Jlc29sdmVEZXNjcmlwdGlvbicsXG4gICAgYnJlYWRjcnVtYnM6ICdyZXNvbHZlQnJlYWRjcnVtYnMnLFxuICAgIGltYWdlOiAncmVzb2x2ZUltYWdlJyxcbiAgICByb2JvdHM6ICdyZXNvbHZlUm9ib3RzJyxcbiAgfTtcblxuICBnZXRNZXRhKCk6IE9ic2VydmFibGU8UGFnZU1ldGE+IHtcbiAgICByZXR1cm4gdGhpcy5jbXMuZ2V0Q3VycmVudFBhZ2UoKS5waXBlKFxuICAgICAgZmlsdGVyKEJvb2xlYW4pLFxuICAgICAgc3dpdGNoTWFwKChwYWdlOiBQYWdlKSA9PiB7XG4gICAgICAgIGNvbnN0IG1ldGFSZXNvbHZlciA9IHRoaXMuZ2V0TWV0YVJlc29sdmVyKHBhZ2UpO1xuICAgICAgICBpZiAobWV0YVJlc29sdmVyKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMucmVzb2x2ZShtZXRhUmVzb2x2ZXIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIHdlIGRvIG5vdCBoYXZlIGEgcGFnZSByZXNvbHZlclxuICAgICAgICAgIHJldHVybiBvZihudWxsKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIElmIGEgcGFnZVJlc29sdmVyIGhhcyBpbXBsZW1lbnRlZCBhIHJlc29sdmVyIGludGVyZmFjZSwgdGhlIHJlc29sdmVkIGRhdGFcbiAgICogaXMgbWVyZ2VkIGludG8gdGhlIGBQYWdlTWV0YWAgb2JqZWN0LlxuICAgKiBAcGFyYW0gbWV0YVJlc29sdmVyXG4gICAqL1xuICBwcml2YXRlIHJlc29sdmUobWV0YVJlc29sdmVyKTogT2JzZXJ2YWJsZTxQYWdlTWV0YT4ge1xuICAgIGlmIChcbiAgICAgIG1ldGFSZXNvbHZlci5yZXNvbHZlICYmXG4gICAgICAoIXRoaXMuZmVhdHVyZUNvbmZpZ1NlcnZpY2UgfHwgIXRoaXMuZmVhdHVyZUNvbmZpZ1NlcnZpY2UuaXNMZXZlbCgnMS4zJykpXG4gICAgKSB7XG4gICAgICByZXR1cm4gbWV0YVJlc29sdmVyLnJlc29sdmUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gcmVzb2x2ZSBpbmRpdmlkdWFsIHJlc29sdmVycyB0byBtYWtlIHRoZSBleHRlbnNpb24gbWVjaGFuaXNtIG1vcmUgZmxleGlibGVcbiAgICAgIGNvbnN0IHJlc29sdmVNZXRob2RzOiBhbnlbXSA9IE9iamVjdC5rZXlzKHRoaXMucmVzb2x2ZXJNZXRob2RzKVxuICAgICAgICAuZmlsdGVyKGtleSA9PiBtZXRhUmVzb2x2ZXJbdGhpcy5yZXNvbHZlck1ldGhvZHNba2V5XV0pXG4gICAgICAgIC5tYXAoa2V5ID0+XG4gICAgICAgICAgbWV0YVJlc29sdmVyW3RoaXMucmVzb2x2ZXJNZXRob2RzW2tleV1dKCkucGlwZShcbiAgICAgICAgICAgIG1hcChkYXRhID0+ICh7XG4gICAgICAgICAgICAgIFtrZXldOiBkYXRhLFxuICAgICAgICAgICAgfSkpXG4gICAgICAgICAgKVxuICAgICAgICApO1xuXG4gICAgICByZXR1cm4gY29tYmluZUxhdGVzdChyZXNvbHZlTWV0aG9kcykucGlwZShcbiAgICAgICAgbWFwKGRhdGEgPT4gT2JqZWN0LmFzc2lnbih7fSwgLi4uZGF0YSkpXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiByZXR1cm4gdGhlIHJlc29sdmVyIHdpdGggdGhlIGJlc3QgbWF0Y2hcbiAgICogcmVzb3ZlcnMgY2FuIGJ5IGRlZmF1bHQgbWF0Y2ggb24gUGFnZVR5cGUgYW5kIHBhZ2UgdGVtcGxhdGVcbiAgICogYnV0IGN1c3RvbSBtYXRjaCBjb21wYXJpc29ycyBjYW4gYmUgaW1wbGVtZW50ZWQuXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0TWV0YVJlc29sdmVyKHBhZ2U6IFBhZ2UpOiBQYWdlTWV0YVJlc29sdmVyIHtcbiAgICBjb25zdCBtYXRjaGluZ1Jlc29sdmVycyA9IHRoaXMucmVzb2x2ZXJzLmZpbHRlcihcbiAgICAgIHJlc29sdmVyID0+IHJlc29sdmVyLmdldFNjb3JlKHBhZ2UpID4gMFxuICAgICk7XG4gICAgbWF0Y2hpbmdSZXNvbHZlcnMuc29ydChmdW5jdGlvbihhLCBiKSB7XG4gICAgICByZXR1cm4gYi5nZXRTY29yZShwYWdlKSAtIGEuZ2V0U2NvcmUocGFnZSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIG1hdGNoaW5nUmVzb2x2ZXJzWzBdO1xuICB9XG59XG4iXX0=