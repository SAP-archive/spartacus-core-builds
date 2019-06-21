/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        return (/**
         * @return {?}
         */
        function falsyUrlMatcher() {
            return null;
        });
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
        var matcher = (/**
         * @param {?} segments
         * @param {?} segmentGroup
         * @param {?} route
         * @return {?}
         */
        function multiplePathsUrlMatcher(segments, segmentGroup, route) {
            for (var i = 0; i < paths.length; i++) {
                /** @type {?} */
                var result = self.getPathUrlMatcher(paths[i])(segments, segmentGroup, route);
                if (result) {
                    return result;
                }
            }
            return null;
        });
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
        return (/**
         * @param {?} segments
         * @param {?} segmentGroup
         * @param {?} route
         * @return {?}
         */
        function (segments, segmentGroup, route) {
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
        });
    };
    UrlMatcherFactoryService.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */ UrlMatcherFactoryService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function UrlMatcherFactoryService_Factory() { return new UrlMatcherFactoryService(); }, token: UrlMatcherFactoryService, providedIn: "root" });
    return UrlMatcherFactoryService;
}());
export { UrlMatcherFactoryService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXJsLW1hdGNoZXItZmFjdG9yeS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3JvdXRpbmcvY29uZmlndXJhYmxlLXJvdXRlcy91cmwtbWF0Y2hlci1mYWN0b3J5LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQU9BLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBRTNDO0lBQUE7S0F3RUM7Ozs7SUF0RUMscURBQWtCOzs7SUFBbEI7UUFDRTs7O1FBQU8sU0FBUyxlQUFlO1lBQzdCLE9BQU8sSUFBSSxDQUFDO1FBQ2QsQ0FBQyxFQUFDO0lBQ0osQ0FBQzs7Ozs7SUFFRCw2REFBMEI7Ozs7SUFBMUIsVUFBMkIsS0FBZTs7WUFDbEMsSUFBSSxHQUFHLElBQUk7O1lBRVgsT0FBTzs7Ozs7O1FBQUcsU0FBUyx1QkFBdUIsQ0FDOUMsUUFBc0IsRUFDdEIsWUFBNkIsRUFDN0IsS0FBWTtZQUVaLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFOztvQkFDL0IsTUFBTSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FDN0MsUUFBUSxFQUNSLFlBQVksRUFDWixLQUFLLENBQ047Z0JBQ0QsSUFBSSxNQUFNLEVBQUU7b0JBQ1YsT0FBTyxNQUFNLENBQUM7aUJBQ2Y7YUFDRjtZQUNELE9BQU8sSUFBSSxDQUFDO1FBQ2QsQ0FBQyxDQUFBO1FBQ0QsT0FBTyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsQ0FBQyxnREFBZ0Q7UUFDdkUsT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQztJQUVELDhIQUE4SDs7Ozs7OztJQUN0SCxvREFBaUI7Ozs7Ozs7SUFBekIsVUFBMEIsSUFBaUI7UUFBakIscUJBQUEsRUFBQSxTQUFpQjtRQUN6Qzs7Ozs7O1FBQU8sVUFDTCxRQUFzQixFQUN0QixZQUE2QixFQUM3QixLQUFZOztnQkFFTixLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7WUFFN0IsSUFBSSxLQUFLLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQyxNQUFNLEVBQUU7Z0JBQ2xDLHNEQUFzRDtnQkFDdEQsT0FBTyxJQUFJLENBQUM7YUFDYjtZQUVELElBQ0UsS0FBSyxDQUFDLFNBQVMsS0FBSyxNQUFNO2dCQUMxQixDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsSUFBSSxLQUFLLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsRUFDOUQ7Z0JBQ0EsNEZBQTRGO2dCQUM1RixPQUFPLElBQUksQ0FBQzthQUNiOztnQkFFSyxTQUFTLEdBQWtDLEVBQUU7WUFFbkQsZ0RBQWdEO1lBQ2hELEtBQUssSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFLEtBQUssR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxFQUFFOztvQkFDM0MsSUFBSSxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUM7O29CQUNuQixPQUFPLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQzs7b0JBQ3pCLFdBQVcsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQztnQkFDeEMsSUFBSSxXQUFXLEVBQUU7b0JBQ2YsU0FBUyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxPQUFPLENBQUM7aUJBQ3hDO3FCQUFNLElBQUksSUFBSSxLQUFLLE9BQU8sQ0FBQyxJQUFJLEVBQUU7b0JBQ2hDLDBEQUEwRDtvQkFDMUQsT0FBTyxJQUFJLENBQUM7aUJBQ2I7YUFDRjtZQUVELE9BQU8sRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxFQUFFLFNBQVMsV0FBQSxFQUFFLENBQUM7UUFDbEUsQ0FBQyxFQUFDO0lBQ0osQ0FBQzs7Z0JBdkVGLFVBQVUsU0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7OzttQ0FUbEM7Q0FpRkMsQUF4RUQsSUF3RUM7U0F2RVksd0JBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgVXJsTWF0Y2hlcixcbiAgVXJsTWF0Y2hSZXN1bHQsXG4gIFVybFNlZ21lbnQsXG4gIFVybFNlZ21lbnRHcm91cCxcbiAgUm91dGUsXG59IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgVXJsTWF0Y2hlckZhY3RvcnlTZXJ2aWNlIHtcbiAgZ2V0RmFsc3lVcmxNYXRjaGVyKCk6IFVybE1hdGNoZXIge1xuICAgIHJldHVybiBmdW5jdGlvbiBmYWxzeVVybE1hdGNoZXIoKTogbnVsbCB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9O1xuICB9XG5cbiAgZ2V0TXVsdGlwbGVQYXRoc1VybE1hdGNoZXIocGF0aHM6IHN0cmluZ1tdKTogVXJsTWF0Y2hlciB7XG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XG5cbiAgICBjb25zdCBtYXRjaGVyID0gZnVuY3Rpb24gbXVsdGlwbGVQYXRoc1VybE1hdGNoZXIoXG4gICAgICBzZWdtZW50czogVXJsU2VnbWVudFtdLFxuICAgICAgc2VnbWVudEdyb3VwOiBVcmxTZWdtZW50R3JvdXAsXG4gICAgICByb3V0ZTogUm91dGVcbiAgICApOiBVcmxNYXRjaFJlc3VsdCB8IG51bGwge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXRocy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzZWxmLmdldFBhdGhVcmxNYXRjaGVyKHBhdGhzW2ldKShcbiAgICAgICAgICBzZWdtZW50cyxcbiAgICAgICAgICBzZWdtZW50R3JvdXAsXG4gICAgICAgICAgcm91dGVcbiAgICAgICAgKTtcbiAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH07XG4gICAgbWF0Y2hlci5wYXRocyA9IHBhdGhzOyAvLyBwcm9wZXJ0eSBhZGRlZCBmb3IgZWFzaWVyIGRlYnVnZ2luZyBvZiByb3V0ZXNcbiAgICByZXR1cm4gbWF0Y2hlcjtcbiAgfVxuXG4gIC8vIFNpbWlsYXIgdG8gQW5ndWxhcidzIGRlZmF1bHRVcmxNYXRjaGVyLiBUaGUgZGlmZmVyZW5jZSBpcyB0aGF0IGBwYXRoYCBjb21lcyBmcm9tIGZ1bmN0aW9uJ3MgYXJndW1lbnQsIG5vdCBmcm9tIGByb3V0ZS5wYXRoYFxuICBwcml2YXRlIGdldFBhdGhVcmxNYXRjaGVyKHBhdGg6IHN0cmluZyA9ICcnKTogVXJsTWF0Y2hlciB7XG4gICAgcmV0dXJuIChcbiAgICAgIHNlZ21lbnRzOiBVcmxTZWdtZW50W10sXG4gICAgICBzZWdtZW50R3JvdXA6IFVybFNlZ21lbnRHcm91cCxcbiAgICAgIHJvdXRlOiBSb3V0ZVxuICAgICk6IFVybE1hdGNoUmVzdWx0IHwgbnVsbCA9PiB7XG4gICAgICBjb25zdCBwYXJ0cyA9IHBhdGguc3BsaXQoJy8nKTtcblxuICAgICAgaWYgKHBhcnRzLmxlbmd0aCA+IHNlZ21lbnRzLmxlbmd0aCkge1xuICAgICAgICAvLyBUaGUgYWN0dWFsIFVSTCBpcyBzaG9ydGVyIHRoYW4gdGhlIGNvbmZpZywgbm8gbWF0Y2hcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG5cbiAgICAgIGlmIChcbiAgICAgICAgcm91dGUucGF0aE1hdGNoID09PSAnZnVsbCcgJiZcbiAgICAgICAgKHNlZ21lbnRHcm91cC5oYXNDaGlsZHJlbigpIHx8IHBhcnRzLmxlbmd0aCA8IHNlZ21lbnRzLmxlbmd0aClcbiAgICAgICkge1xuICAgICAgICAvLyBUaGUgY29uZmlnIGlzIGxvbmdlciB0aGFuIHRoZSBhY3R1YWwgVVJMIGJ1dCB3ZSBhcmUgbG9va2luZyBmb3IgYSBmdWxsIG1hdGNoLCByZXR1cm4gbnVsbFxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cblxuICAgICAgY29uc3QgcG9zUGFyYW1zOiB7IFtrZXk6IHN0cmluZ106IFVybFNlZ21lbnQgfSA9IHt9O1xuXG4gICAgICAvLyBDaGVjayBlYWNoIGNvbmZpZyBwYXJ0IGFnYWluc3QgdGhlIGFjdHVhbCBVUkxcbiAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBwYXJ0cy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgY29uc3QgcGFydCA9IHBhcnRzW2luZGV4XTtcbiAgICAgICAgY29uc3Qgc2VnbWVudCA9IHNlZ21lbnRzW2luZGV4XTtcbiAgICAgICAgY29uc3QgaXNQYXJhbWV0ZXIgPSBwYXJ0LnN0YXJ0c1dpdGgoJzonKTtcbiAgICAgICAgaWYgKGlzUGFyYW1ldGVyKSB7XG4gICAgICAgICAgcG9zUGFyYW1zW3BhcnQuc3Vic3RyaW5nKDEpXSA9IHNlZ21lbnQ7XG4gICAgICAgIH0gZWxzZSBpZiAocGFydCAhPT0gc2VnbWVudC5wYXRoKSB7XG4gICAgICAgICAgLy8gVGhlIGFjdHVhbCBVUkwgcGFydCBkb2VzIG5vdCBtYXRjaCB0aGUgY29uZmlnLCBubyBtYXRjaFxuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7IGNvbnN1bWVkOiBzZWdtZW50cy5zbGljZSgwLCBwYXJ0cy5sZW5ndGgpLCBwb3NQYXJhbXMgfTtcbiAgICB9O1xuICB9XG59XG4iXX0=