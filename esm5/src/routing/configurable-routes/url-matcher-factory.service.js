/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
var UrlMatcherFactoryService = /** @class */ (function () {
    function UrlMatcherFactoryService() {
    }
    /**
     * @return {?}
     */
    UrlMatcherFactoryService.prototype.getFalsyUrlMatcher = /**
     * @return {?}
     */
    function () {
        return function falsyUrlMatcher() {
            return null;
        };
    };
    /**
     * @param {?} paths
     * @return {?}
     */
    UrlMatcherFactoryService.prototype.getMultiplePathsUrlMatcher = /**
     * @param {?} paths
     * @return {?}
     */
    function (paths) {
        /** @type {?} */
        var self = this;
        /** @type {?} */
        var matcher = function multiplePathsUrlMatcher(segments, segmentGroup, route) {
            for (var i = 0; i < paths.length; i++) {
                /** @type {?} */
                var result = self.getPathUrlMatcher(paths[i])(segments, segmentGroup, route);
                if (result) {
                    return result;
                }
            }
            return null;
        };
        matcher.paths = paths; // property added for easier debugging of routes
        return matcher;
    };
    // Similar to Angular's defaultUrlMatcher. The difference is that `path` comes from function's argument, not from `route.path`
    // Similar to Angular's defaultUrlMatcher. The difference is that `path` comes from function's argument, not from `route.path`
    /**
     * @private
     * @param {?=} path
     * @return {?}
     */
    UrlMatcherFactoryService.prototype.getPathUrlMatcher = 
    // Similar to Angular's defaultUrlMatcher. The difference is that `path` comes from function's argument, not from `route.path`
    /**
     * @private
     * @param {?=} path
     * @return {?}
     */
    function (path) {
        if (path === void 0) { path = ''; }
        return function (segments, segmentGroup, route) {
            /** @type {?} */
            var parts = path.split('/');
            if (parts.length > segments.length) {
                // The actual URL is shorter than the config, no match
                return null;
            }
            if (route.pathMatch === 'full' &&
                (segmentGroup.hasChildren() || parts.length < segments.length)) {
                // The config is longer than the actual URL but we are looking for a full match, return null
                return null;
            }
            /** @type {?} */
            var posParams = {};
            // Check each config part against the actual URL
            for (var index = 0; index < parts.length; index++) {
                /** @type {?} */
                var part = parts[index];
                /** @type {?} */
                var segment = segments[index];
                /** @type {?} */
                var isParameter = part.startsWith(':');
                if (isParameter) {
                    posParams[part.substring(1)] = segment;
                }
                else if (part !== segment.path) {
                    // The actual URL part does not match the config, no match
                    return null;
                }
            }
            return { consumed: segments.slice(0, parts.length), posParams: posParams };
        };
    };
    UrlMatcherFactoryService.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */ UrlMatcherFactoryService.ngInjectableDef = i0.defineInjectable({ factory: function UrlMatcherFactoryService_Factory() { return new UrlMatcherFactoryService(); }, token: UrlMatcherFactoryService, providedIn: "root" });
    return UrlMatcherFactoryService;
}());
export { UrlMatcherFactoryService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXJsLW1hdGNoZXItZmFjdG9yeS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3JvdXRpbmcvY29uZmlndXJhYmxlLXJvdXRlcy91cmwtbWF0Y2hlci1mYWN0b3J5LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQU9BLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBRTNDO0lBQUE7S0F3RUM7Ozs7SUF0RUMscURBQWtCOzs7SUFBbEI7UUFDRSxPQUFPLFNBQVMsZUFBZTtZQUM3QixPQUFPLElBQUksQ0FBQztRQUNkLENBQUMsQ0FBQztJQUNKLENBQUM7Ozs7O0lBRUQsNkRBQTBCOzs7O0lBQTFCLFVBQTJCLEtBQWU7O1lBQ2xDLElBQUksR0FBRyxJQUFJOztZQUVYLE9BQU8sR0FBRyxTQUFTLHVCQUF1QixDQUM5QyxRQUFzQixFQUN0QixZQUE2QixFQUM3QixLQUFZO1lBRVosS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7O29CQUMvQixNQUFNLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUM3QyxRQUFRLEVBQ1IsWUFBWSxFQUNaLEtBQUssQ0FDTjtnQkFDRCxJQUFJLE1BQU0sRUFBRTtvQkFDVixPQUFPLE1BQU0sQ0FBQztpQkFDZjthQUNGO1lBQ0QsT0FBTyxJQUFJLENBQUM7UUFDZCxDQUFDO1FBQ0QsT0FBTyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsQ0FBQyxnREFBZ0Q7UUFDdkUsT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQztJQUVELDhIQUE4SDs7Ozs7OztJQUN0SCxvREFBaUI7Ozs7Ozs7SUFBekIsVUFBMEIsSUFBaUI7UUFBakIscUJBQUEsRUFBQSxTQUFpQjtRQUN6QyxPQUFPLFVBQ0wsUUFBc0IsRUFDdEIsWUFBNkIsRUFDN0IsS0FBWTs7Z0JBRU4sS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO1lBRTdCLElBQUksS0FBSyxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUMsTUFBTSxFQUFFO2dCQUNsQyxzREFBc0Q7Z0JBQ3RELE9BQU8sSUFBSSxDQUFDO2FBQ2I7WUFFRCxJQUNFLEtBQUssQ0FBQyxTQUFTLEtBQUssTUFBTTtnQkFDMUIsQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLElBQUksS0FBSyxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLEVBQzlEO2dCQUNBLDRGQUE0RjtnQkFDNUYsT0FBTyxJQUFJLENBQUM7YUFDYjs7Z0JBRUssU0FBUyxHQUFrQyxFQUFFO1lBRW5ELGdEQUFnRDtZQUNoRCxLQUFLLElBQUksS0FBSyxHQUFHLENBQUMsRUFBRSxLQUFLLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsRUFBRTs7b0JBQzNDLElBQUksR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDOztvQkFDbkIsT0FBTyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUM7O29CQUN6QixXQUFXLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUM7Z0JBQ3hDLElBQUksV0FBVyxFQUFFO29CQUNmLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsT0FBTyxDQUFDO2lCQUN4QztxQkFBTSxJQUFJLElBQUksS0FBSyxPQUFPLENBQUMsSUFBSSxFQUFFO29CQUNoQywwREFBMEQ7b0JBQzFELE9BQU8sSUFBSSxDQUFDO2lCQUNiO2FBQ0Y7WUFFRCxPQUFPLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsRUFBRSxTQUFTLFdBQUEsRUFBRSxDQUFDO1FBQ2xFLENBQUMsQ0FBQztJQUNKLENBQUM7O2dCQXZFRixVQUFVLFNBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFOzs7bUNBVGxDO0NBaUZDLEFBeEVELElBd0VDO1NBdkVZLHdCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIFVybE1hdGNoZXIsXG4gIFVybE1hdGNoUmVzdWx0LFxuICBVcmxTZWdtZW50LFxuICBVcmxTZWdtZW50R3JvdXAsXG4gIFJvdXRlLFxufSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIFVybE1hdGNoZXJGYWN0b3J5U2VydmljZSB7XG4gIGdldEZhbHN5VXJsTWF0Y2hlcigpOiBVcmxNYXRjaGVyIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gZmFsc3lVcmxNYXRjaGVyKCk6IG51bGwge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfTtcbiAgfVxuXG4gIGdldE11bHRpcGxlUGF0aHNVcmxNYXRjaGVyKHBhdGhzOiBzdHJpbmdbXSk6IFVybE1hdGNoZXIge1xuICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuXG4gICAgY29uc3QgbWF0Y2hlciA9IGZ1bmN0aW9uIG11bHRpcGxlUGF0aHNVcmxNYXRjaGVyKFxuICAgICAgc2VnbWVudHM6IFVybFNlZ21lbnRbXSxcbiAgICAgIHNlZ21lbnRHcm91cDogVXJsU2VnbWVudEdyb3VwLFxuICAgICAgcm91dGU6IFJvdXRlXG4gICAgKTogVXJsTWF0Y2hSZXN1bHQgfCBudWxsIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGF0aHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc2VsZi5nZXRQYXRoVXJsTWF0Y2hlcihwYXRoc1tpXSkoXG4gICAgICAgICAgc2VnbWVudHMsXG4gICAgICAgICAgc2VnbWVudEdyb3VwLFxuICAgICAgICAgIHJvdXRlXG4gICAgICAgICk7XG4gICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9O1xuICAgIG1hdGNoZXIucGF0aHMgPSBwYXRoczsgLy8gcHJvcGVydHkgYWRkZWQgZm9yIGVhc2llciBkZWJ1Z2dpbmcgb2Ygcm91dGVzXG4gICAgcmV0dXJuIG1hdGNoZXI7XG4gIH1cblxuICAvLyBTaW1pbGFyIHRvIEFuZ3VsYXIncyBkZWZhdWx0VXJsTWF0Y2hlci4gVGhlIGRpZmZlcmVuY2UgaXMgdGhhdCBgcGF0aGAgY29tZXMgZnJvbSBmdW5jdGlvbidzIGFyZ3VtZW50LCBub3QgZnJvbSBgcm91dGUucGF0aGBcbiAgcHJpdmF0ZSBnZXRQYXRoVXJsTWF0Y2hlcihwYXRoOiBzdHJpbmcgPSAnJyk6IFVybE1hdGNoZXIge1xuICAgIHJldHVybiAoXG4gICAgICBzZWdtZW50czogVXJsU2VnbWVudFtdLFxuICAgICAgc2VnbWVudEdyb3VwOiBVcmxTZWdtZW50R3JvdXAsXG4gICAgICByb3V0ZTogUm91dGVcbiAgICApOiBVcmxNYXRjaFJlc3VsdCB8IG51bGwgPT4ge1xuICAgICAgY29uc3QgcGFydHMgPSBwYXRoLnNwbGl0KCcvJyk7XG5cbiAgICAgIGlmIChwYXJ0cy5sZW5ndGggPiBzZWdtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgLy8gVGhlIGFjdHVhbCBVUkwgaXMgc2hvcnRlciB0aGFuIHRoZSBjb25maWcsIG5vIG1hdGNoXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuXG4gICAgICBpZiAoXG4gICAgICAgIHJvdXRlLnBhdGhNYXRjaCA9PT0gJ2Z1bGwnICYmXG4gICAgICAgIChzZWdtZW50R3JvdXAuaGFzQ2hpbGRyZW4oKSB8fCBwYXJ0cy5sZW5ndGggPCBzZWdtZW50cy5sZW5ndGgpXG4gICAgICApIHtcbiAgICAgICAgLy8gVGhlIGNvbmZpZyBpcyBsb25nZXIgdGhhbiB0aGUgYWN0dWFsIFVSTCBidXQgd2UgYXJlIGxvb2tpbmcgZm9yIGEgZnVsbCBtYXRjaCwgcmV0dXJuIG51bGxcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHBvc1BhcmFtczogeyBba2V5OiBzdHJpbmddOiBVcmxTZWdtZW50IH0gPSB7fTtcblxuICAgICAgLy8gQ2hlY2sgZWFjaCBjb25maWcgcGFydCBhZ2FpbnN0IHRoZSBhY3R1YWwgVVJMXG4gICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgcGFydHMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgIGNvbnN0IHBhcnQgPSBwYXJ0c1tpbmRleF07XG4gICAgICAgIGNvbnN0IHNlZ21lbnQgPSBzZWdtZW50c1tpbmRleF07XG4gICAgICAgIGNvbnN0IGlzUGFyYW1ldGVyID0gcGFydC5zdGFydHNXaXRoKCc6Jyk7XG4gICAgICAgIGlmIChpc1BhcmFtZXRlcikge1xuICAgICAgICAgIHBvc1BhcmFtc1twYXJ0LnN1YnN0cmluZygxKV0gPSBzZWdtZW50O1xuICAgICAgICB9IGVsc2UgaWYgKHBhcnQgIT09IHNlZ21lbnQucGF0aCkge1xuICAgICAgICAgIC8vIFRoZSBhY3R1YWwgVVJMIHBhcnQgZG9lcyBub3QgbWF0Y2ggdGhlIGNvbmZpZywgbm8gbWF0Y2hcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4geyBjb25zdW1lZDogc2VnbWVudHMuc2xpY2UoMCwgcGFydHMubGVuZ3RoKSwgcG9zUGFyYW1zIH07XG4gICAgfTtcbiAgfVxufVxuIl19