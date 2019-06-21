/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class UrlMatcherFactoryService {
    /**
     * @return {?}
     */
    getFalsyUrlMatcher() {
        return (/**
         * @return {?}
         */
        function falsyUrlMatcher() {
            return null;
        });
    }
    /**
     * @param {?} paths
     * @return {?}
     */
    getMultiplePathsUrlMatcher(paths) {
        /** @type {?} */
        const self = this;
        /** @type {?} */
        const matcher = (/**
         * @param {?} segments
         * @param {?} segmentGroup
         * @param {?} route
         * @return {?}
         */
        function multiplePathsUrlMatcher(segments, segmentGroup, route) {
            for (let i = 0; i < paths.length; i++) {
                /** @type {?} */
                const result = self.getPathUrlMatcher(paths[i])(segments, segmentGroup, route);
                if (result) {
                    return result;
                }
            }
            return null;
        });
        matcher.paths = paths; // property added for easier debugging of routes
        return matcher;
    }
    // Similar to Angular's defaultUrlMatcher. The difference is that `path` comes from function's argument, not from `route.path`
    /**
     * @private
     * @param {?=} path
     * @return {?}
     */
    getPathUrlMatcher(path = '') {
        return (/**
         * @param {?} segments
         * @param {?} segmentGroup
         * @param {?} route
         * @return {?}
         */
        (segments, segmentGroup, route) => {
            /** @type {?} */
            const parts = path.split('/');
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
            const posParams = {};
            // Check each config part against the actual URL
            for (let index = 0; index < parts.length; index++) {
                /** @type {?} */
                const part = parts[index];
                /** @type {?} */
                const segment = segments[index];
                /** @type {?} */
                const isParameter = part.startsWith(':');
                if (isParameter) {
                    posParams[part.substring(1)] = segment;
                }
                else if (part !== segment.path) {
                    // The actual URL part does not match the config, no match
                    return null;
                }
            }
            return { consumed: segments.slice(0, parts.length), posParams };
        });
    }
}
UrlMatcherFactoryService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */ UrlMatcherFactoryService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function UrlMatcherFactoryService_Factory() { return new UrlMatcherFactoryService(); }, token: UrlMatcherFactoryService, providedIn: "root" });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXJsLW1hdGNoZXItZmFjdG9yeS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3JvdXRpbmcvY29uZmlndXJhYmxlLXJvdXRlcy91cmwtbWF0Y2hlci1mYWN0b3J5LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQU9BLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBRzNDLE1BQU0sT0FBTyx3QkFBd0I7Ozs7SUFDbkMsa0JBQWtCO1FBQ2hCOzs7UUFBTyxTQUFTLGVBQWU7WUFDN0IsT0FBTyxJQUFJLENBQUM7UUFDZCxDQUFDLEVBQUM7SUFDSixDQUFDOzs7OztJQUVELDBCQUEwQixDQUFDLEtBQWU7O2NBQ2xDLElBQUksR0FBRyxJQUFJOztjQUVYLE9BQU87Ozs7OztRQUFHLFNBQVMsdUJBQXVCLENBQzlDLFFBQXNCLEVBQ3RCLFlBQTZCLEVBQzdCLEtBQVk7WUFFWixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTs7c0JBQy9CLE1BQU0sR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQzdDLFFBQVEsRUFDUixZQUFZLEVBQ1osS0FBSyxDQUNOO2dCQUNELElBQUksTUFBTSxFQUFFO29CQUNWLE9BQU8sTUFBTSxDQUFDO2lCQUNmO2FBQ0Y7WUFDRCxPQUFPLElBQUksQ0FBQztRQUNkLENBQUMsQ0FBQTtRQUNELE9BQU8sQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLENBQUMsZ0RBQWdEO1FBQ3ZFLE9BQU8sT0FBTyxDQUFDO0lBQ2pCLENBQUM7Ozs7Ozs7SUFHTyxpQkFBaUIsQ0FBQyxPQUFlLEVBQUU7UUFDekM7Ozs7OztRQUFPLENBQ0wsUUFBc0IsRUFDdEIsWUFBNkIsRUFDN0IsS0FBWSxFQUNXLEVBQUU7O2tCQUNuQixLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7WUFFN0IsSUFBSSxLQUFLLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQyxNQUFNLEVBQUU7Z0JBQ2xDLHNEQUFzRDtnQkFDdEQsT0FBTyxJQUFJLENBQUM7YUFDYjtZQUVELElBQ0UsS0FBSyxDQUFDLFNBQVMsS0FBSyxNQUFNO2dCQUMxQixDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsSUFBSSxLQUFLLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsRUFDOUQ7Z0JBQ0EsNEZBQTRGO2dCQUM1RixPQUFPLElBQUksQ0FBQzthQUNiOztrQkFFSyxTQUFTLEdBQWtDLEVBQUU7WUFFbkQsZ0RBQWdEO1lBQ2hELEtBQUssSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFLEtBQUssR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxFQUFFOztzQkFDM0MsSUFBSSxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUM7O3NCQUNuQixPQUFPLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQzs7c0JBQ3pCLFdBQVcsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQztnQkFDeEMsSUFBSSxXQUFXLEVBQUU7b0JBQ2YsU0FBUyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxPQUFPLENBQUM7aUJBQ3hDO3FCQUFNLElBQUksSUFBSSxLQUFLLE9BQU8sQ0FBQyxJQUFJLEVBQUU7b0JBQ2hDLDBEQUEwRDtvQkFDMUQsT0FBTyxJQUFJLENBQUM7aUJBQ2I7YUFDRjtZQUVELE9BQU8sRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxFQUFFLFNBQVMsRUFBRSxDQUFDO1FBQ2xFLENBQUMsRUFBQztJQUNKLENBQUM7OztZQXZFRixVQUFVLFNBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgVXJsTWF0Y2hlcixcbiAgVXJsTWF0Y2hSZXN1bHQsXG4gIFVybFNlZ21lbnQsXG4gIFVybFNlZ21lbnRHcm91cCxcbiAgUm91dGUsXG59IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgVXJsTWF0Y2hlckZhY3RvcnlTZXJ2aWNlIHtcbiAgZ2V0RmFsc3lVcmxNYXRjaGVyKCk6IFVybE1hdGNoZXIge1xuICAgIHJldHVybiBmdW5jdGlvbiBmYWxzeVVybE1hdGNoZXIoKTogbnVsbCB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9O1xuICB9XG5cbiAgZ2V0TXVsdGlwbGVQYXRoc1VybE1hdGNoZXIocGF0aHM6IHN0cmluZ1tdKTogVXJsTWF0Y2hlciB7XG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XG5cbiAgICBjb25zdCBtYXRjaGVyID0gZnVuY3Rpb24gbXVsdGlwbGVQYXRoc1VybE1hdGNoZXIoXG4gICAgICBzZWdtZW50czogVXJsU2VnbWVudFtdLFxuICAgICAgc2VnbWVudEdyb3VwOiBVcmxTZWdtZW50R3JvdXAsXG4gICAgICByb3V0ZTogUm91dGVcbiAgICApOiBVcmxNYXRjaFJlc3VsdCB8IG51bGwge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXRocy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzZWxmLmdldFBhdGhVcmxNYXRjaGVyKHBhdGhzW2ldKShcbiAgICAgICAgICBzZWdtZW50cyxcbiAgICAgICAgICBzZWdtZW50R3JvdXAsXG4gICAgICAgICAgcm91dGVcbiAgICAgICAgKTtcbiAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH07XG4gICAgbWF0Y2hlci5wYXRocyA9IHBhdGhzOyAvLyBwcm9wZXJ0eSBhZGRlZCBmb3IgZWFzaWVyIGRlYnVnZ2luZyBvZiByb3V0ZXNcbiAgICByZXR1cm4gbWF0Y2hlcjtcbiAgfVxuXG4gIC8vIFNpbWlsYXIgdG8gQW5ndWxhcidzIGRlZmF1bHRVcmxNYXRjaGVyLiBUaGUgZGlmZmVyZW5jZSBpcyB0aGF0IGBwYXRoYCBjb21lcyBmcm9tIGZ1bmN0aW9uJ3MgYXJndW1lbnQsIG5vdCBmcm9tIGByb3V0ZS5wYXRoYFxuICBwcml2YXRlIGdldFBhdGhVcmxNYXRjaGVyKHBhdGg6IHN0cmluZyA9ICcnKTogVXJsTWF0Y2hlciB7XG4gICAgcmV0dXJuIChcbiAgICAgIHNlZ21lbnRzOiBVcmxTZWdtZW50W10sXG4gICAgICBzZWdtZW50R3JvdXA6IFVybFNlZ21lbnRHcm91cCxcbiAgICAgIHJvdXRlOiBSb3V0ZVxuICAgICk6IFVybE1hdGNoUmVzdWx0IHwgbnVsbCA9PiB7XG4gICAgICBjb25zdCBwYXJ0cyA9IHBhdGguc3BsaXQoJy8nKTtcblxuICAgICAgaWYgKHBhcnRzLmxlbmd0aCA+IHNlZ21lbnRzLmxlbmd0aCkge1xuICAgICAgICAvLyBUaGUgYWN0dWFsIFVSTCBpcyBzaG9ydGVyIHRoYW4gdGhlIGNvbmZpZywgbm8gbWF0Y2hcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG5cbiAgICAgIGlmIChcbiAgICAgICAgcm91dGUucGF0aE1hdGNoID09PSAnZnVsbCcgJiZcbiAgICAgICAgKHNlZ21lbnRHcm91cC5oYXNDaGlsZHJlbigpIHx8IHBhcnRzLmxlbmd0aCA8IHNlZ21lbnRzLmxlbmd0aClcbiAgICAgICkge1xuICAgICAgICAvLyBUaGUgY29uZmlnIGlzIGxvbmdlciB0aGFuIHRoZSBhY3R1YWwgVVJMIGJ1dCB3ZSBhcmUgbG9va2luZyBmb3IgYSBmdWxsIG1hdGNoLCByZXR1cm4gbnVsbFxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cblxuICAgICAgY29uc3QgcG9zUGFyYW1zOiB7IFtrZXk6IHN0cmluZ106IFVybFNlZ21lbnQgfSA9IHt9O1xuXG4gICAgICAvLyBDaGVjayBlYWNoIGNvbmZpZyBwYXJ0IGFnYWluc3QgdGhlIGFjdHVhbCBVUkxcbiAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBwYXJ0cy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgY29uc3QgcGFydCA9IHBhcnRzW2luZGV4XTtcbiAgICAgICAgY29uc3Qgc2VnbWVudCA9IHNlZ21lbnRzW2luZGV4XTtcbiAgICAgICAgY29uc3QgaXNQYXJhbWV0ZXIgPSBwYXJ0LnN0YXJ0c1dpdGgoJzonKTtcbiAgICAgICAgaWYgKGlzUGFyYW1ldGVyKSB7XG4gICAgICAgICAgcG9zUGFyYW1zW3BhcnQuc3Vic3RyaW5nKDEpXSA9IHNlZ21lbnQ7XG4gICAgICAgIH0gZWxzZSBpZiAocGFydCAhPT0gc2VnbWVudC5wYXRoKSB7XG4gICAgICAgICAgLy8gVGhlIGFjdHVhbCBVUkwgcGFydCBkb2VzIG5vdCBtYXRjaCB0aGUgY29uZmlnLCBubyBtYXRjaFxuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7IGNvbnN1bWVkOiBzZWdtZW50cy5zbGljZSgwLCBwYXJ0cy5sZW5ndGgpLCBwb3NQYXJhbXMgfTtcbiAgICB9O1xuICB9XG59XG4iXX0=