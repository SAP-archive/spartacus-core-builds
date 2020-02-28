import { __decorate } from "tslib";
import { Injectable, isDevMode } from '@angular/core';
import { GlobService } from '../../util/glob.service';
import * as i0 from "@angular/core";
import * as i1 from "../../util/glob.service";
var UrlMatcherService = /** @class */ (function () {
    function UrlMatcherService(globService) {
        this.globService = globService;
    }
    /**
     * Returns a matcher that is always fails
     */
    UrlMatcherService.prototype.getFalsy = function () {
        return function falsyUrlMatcher() {
            return null;
        };
    };
    /**
     * Returns a matcher for given list of paths
     */
    UrlMatcherService.prototype.getFromPaths = function (paths) {
        var _this = this;
        var matchers = paths.map(function (path) { return _this.getFromPath(path); });
        var matcher = this.getCombined(matchers);
        if (isDevMode()) {
            matcher['_paths'] = paths; // property added for easier debugging of routes
        }
        return matcher;
    };
    /**
     * Returns a matcher that combines the given matchers
     * */
    UrlMatcherService.prototype.getCombined = function (matchers) {
        var matcher = function combinedUrlMatchers(segments, segmentGroup, route) {
            for (var i = 0; i < matchers.length; i++) {
                var result = matchers[i](segments, segmentGroup, route);
                if (result) {
                    return result;
                }
            }
            return null;
        };
        if (isDevMode()) {
            matcher['_matchers'] = matchers; // property added for easier debugging of routes
        }
        return matcher;
    };
    /**
     * Similar to Angular's defaultUrlMatcher. Differences:
     * - the `path` comes from function's argument, not from `route.path`
     * - the empty path `''` is handled here, but in Angular is handled one level higher in the match() function
     */
    UrlMatcherService.prototype.getFromPath = function (path) {
        if (path === void 0) { path = ''; }
        var matcher = function pathUrlMatcher(segments, segmentGroup, route) {
            /**
             * @license
             * The MIT License
             * Copyright (c) 2010-2019 Google LLC. http://angular.io/license
             *
             * See:
             * - https://github.com/angular/angular/blob/6f5f481fdae03f1d8db36284b64c7b82d9519d85/packages/router/src/shared.ts#L121
             */
            // use function's argument, not the `route.path`
            if (path === '') {
                if (route.pathMatch === 'full' &&
                    (segmentGroup.hasChildren() || segments.length > 0)) {
                    return null;
                }
                return { consumed: [], posParams: {} };
            }
            var parts = path.split('/'); // use function's argument, not the `route.path`
            if (parts.length > segments.length) {
                // The actual URL is shorter than the config, no match
                return null;
            }
            if (route.pathMatch === 'full' &&
                (segmentGroup.hasChildren() || parts.length < segments.length)) {
                // The config is longer than the actual URL but we are looking for a full match, return null
                return null;
            }
            var posParams = {};
            // Check each config part against the actual URL
            for (var index = 0; index < parts.length; index++) {
                var part = parts[index];
                var segment = segments[index];
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
        if (isDevMode()) {
            matcher['_path'] = path; // property added for easier debugging of routes
        }
        return matcher;
    };
    /**
     * Returns URL matcher that accepts almost everything (like `**` route), but not paths accepted by the given matcher
     */
    UrlMatcherService.prototype.getOpposite = function (originalMatcher) {
        var matcher = function oppositeUrlMatcher(segments, group, route) {
            return originalMatcher(segments, group, route)
                ? null
                : { consumed: segments, posParams: {} };
        };
        if (isDevMode()) {
            matcher['_originalMatcher'] = originalMatcher; // property added for easier debugging of routes
        }
        return matcher;
    };
    /**
     * Returns URL matcher for the given list of glob-like patterns. Each pattern must start with `/` or `!/`.
     */
    UrlMatcherService.prototype.getFromGlob = function (globPatterns) {
        var globValidator = this.globService.getValidator(globPatterns);
        var matcher = function globUrlMatcher(segments) {
            var fullPath = "/" + segments.map(function (s) { return s.path; }).join('/');
            return globValidator(fullPath)
                ? { consumed: segments, posParams: {} }
                : null;
        };
        if (isDevMode()) {
            matcher['_globPatterns'] = globPatterns; // property added for easier debugging of routes
        }
        return matcher;
    };
    UrlMatcherService.ctorParameters = function () { return [
        { type: GlobService }
    ]; };
    UrlMatcherService.ɵprov = i0.ɵɵdefineInjectable({ factory: function UrlMatcherService_Factory() { return new UrlMatcherService(i0.ɵɵinject(i1.GlobService)); }, token: UrlMatcherService, providedIn: "root" });
    UrlMatcherService = __decorate([
        Injectable({ providedIn: 'root' })
    ], UrlMatcherService);
    return UrlMatcherService;
}());
export { UrlMatcherService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXJsLW1hdGNoZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9yb3V0aW5nL3NlcnZpY2VzL3VybC1tYXRjaGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBUXRELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7O0FBR3REO0lBQ0UsMkJBQXNCLFdBQXdCO1FBQXhCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO0lBQUcsQ0FBQztJQUVsRDs7T0FFRztJQUNILG9DQUFRLEdBQVI7UUFDRSxPQUFPLFNBQVMsZUFBZTtZQUM3QixPQUFPLElBQUksQ0FBQztRQUNkLENBQUMsQ0FBQztJQUNKLENBQUM7SUFFRDs7T0FFRztJQUNILHdDQUFZLEdBQVosVUFBYSxLQUFlO1FBQTVCLGlCQU9DO1FBTkMsSUFBTSxRQUFRLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLEtBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQXRCLENBQXNCLENBQUMsQ0FBQztRQUMzRCxJQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzNDLElBQUksU0FBUyxFQUFFLEVBQUU7WUFDZixPQUFPLENBQUMsUUFBUSxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsZ0RBQWdEO1NBQzVFO1FBQ0QsT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQztJQUVEOztTQUVLO0lBQ0wsdUNBQVcsR0FBWCxVQUFZLFFBQXNCO1FBQ2hDLElBQU0sT0FBTyxHQUFHLFNBQVMsbUJBQW1CLENBQzFDLFFBQXNCLEVBQ3RCLFlBQTZCLEVBQzdCLEtBQVk7WUFFWixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsUUFB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QixDQTJKN0I7NEJBdEtEO0NBc0tDLEFBM0pELElBMkpDO1NBM0pZLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIGlzRGV2TW9kZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgUm91dGUsXG4gIFVybE1hdGNoZXIsXG4gIFVybE1hdGNoUmVzdWx0LFxuICBVcmxTZWdtZW50LFxuICBVcmxTZWdtZW50R3JvdXAsXG59IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBHbG9iU2VydmljZSB9IGZyb20gJy4uLy4uL3V0aWwvZ2xvYi5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBVcmxNYXRjaGVyU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBnbG9iU2VydmljZTogR2xvYlNlcnZpY2UpIHt9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBtYXRjaGVyIHRoYXQgaXMgYWx3YXlzIGZhaWxzXG4gICAqL1xuICBnZXRGYWxzeSgpOiBVcmxNYXRjaGVyIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gZmFsc3lVcmxNYXRjaGVyKCk6IG51bGwge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgbWF0Y2hlciBmb3IgZ2l2ZW4gbGlzdCBvZiBwYXRoc1xuICAgKi9cbiAgZ2V0RnJvbVBhdGhzKHBhdGhzOiBzdHJpbmdbXSk6IFVybE1hdGNoZXIge1xuICAgIGNvbnN0IG1hdGNoZXJzID0gcGF0aHMubWFwKHBhdGggPT4gdGhpcy5nZXRGcm9tUGF0aChwYXRoKSk7XG4gICAgY29uc3QgbWF0Y2hlciA9IHRoaXMuZ2V0Q29tYmluZWQobWF0Y2hlcnMpO1xuICAgIGlmIChpc0Rldk1vZGUoKSkge1xuICAgICAgbWF0Y2hlclsnX3BhdGhzJ10gPSBwYXRoczsgLy8gcHJvcGVydHkgYWRkZWQgZm9yIGVhc2llciBkZWJ1Z2dpbmcgb2Ygcm91dGVzXG4gICAgfVxuICAgIHJldHVybiBtYXRjaGVyO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBtYXRjaGVyIHRoYXQgY29tYmluZXMgdGhlIGdpdmVuIG1hdGNoZXJzXG4gICAqICovXG4gIGdldENvbWJpbmVkKG1hdGNoZXJzOiBVcmxNYXRjaGVyW10pOiBVcmxNYXRjaGVyIHtcbiAgICBjb25zdCBtYXRjaGVyID0gZnVuY3Rpb24gY29tYmluZWRVcmxNYXRjaGVycyhcbiAgICAgIHNlZ21lbnRzOiBVcmxTZWdtZW50W10sXG4gICAgICBzZWdtZW50R3JvdXA6IFVybFNlZ21lbnRHcm91cCxcbiAgICAgIHJvdXRlOiBSb3V0ZVxuICAgICk6IFVybE1hdGNoUmVzdWx0IHwgbnVsbCB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1hdGNoZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG1hdGNoZXJzW2ldKHNlZ21lbnRzLCBzZWdtZW50R3JvdXAsIHJvdXRlKTtcbiAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH07XG4gICAgaWYgKGlzRGV2TW9kZSgpKSB7XG4gICAgICBtYXRjaGVyWydfbWF0Y2hlcnMnXSA9IG1hdGNoZXJzOyAvLyBwcm9wZXJ0eSBhZGRlZCBmb3IgZWFzaWVyIGRlYnVnZ2luZyBvZiByb3V0ZXNcbiAgICB9XG4gICAgcmV0dXJuIG1hdGNoZXI7XG4gIH1cblxuICAvKipcbiAgICogU2ltaWxhciB0byBBbmd1bGFyJ3MgZGVmYXVsdFVybE1hdGNoZXIuIERpZmZlcmVuY2VzOlxuICAgKiAtIHRoZSBgcGF0aGAgY29tZXMgZnJvbSBmdW5jdGlvbidzIGFyZ3VtZW50LCBub3QgZnJvbSBgcm91dGUucGF0aGBcbiAgICogLSB0aGUgZW1wdHkgcGF0aCBgJydgIGlzIGhhbmRsZWQgaGVyZSwgYnV0IGluIEFuZ3VsYXIgaXMgaGFuZGxlZCBvbmUgbGV2ZWwgaGlnaGVyIGluIHRoZSBtYXRjaCgpIGZ1bmN0aW9uXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0RnJvbVBhdGgocGF0aDogc3RyaW5nID0gJycpOiBVcmxNYXRjaGVyIHtcbiAgICBjb25zdCBtYXRjaGVyID0gZnVuY3Rpb24gcGF0aFVybE1hdGNoZXIoXG4gICAgICBzZWdtZW50czogVXJsU2VnbWVudFtdLFxuICAgICAgc2VnbWVudEdyb3VwOiBVcmxTZWdtZW50R3JvdXAsXG4gICAgICByb3V0ZTogUm91dGVcbiAgICApOiBVcmxNYXRjaFJlc3VsdCB8IG51bGwge1xuICAgICAgLyoqXG4gICAgICAgKiBAbGljZW5zZVxuICAgICAgICogVGhlIE1JVCBMaWNlbnNlXG4gICAgICAgKiBDb3B5cmlnaHQgKGMpIDIwMTAtMjAxOSBHb29nbGUgTExDLiBodHRwOi8vYW5ndWxhci5pby9saWNlbnNlXG4gICAgICAgKlxuICAgICAgICogU2VlOlxuICAgICAgICogLSBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2Jsb2IvNmY1ZjQ4MWZkYWUwM2YxZDhkYjM2Mjg0YjY0YzdiODJkOTUxOWQ4NS9wYWNrYWdlcy9yb3V0ZXIvc3JjL3NoYXJlZC50cyNMMTIxXG4gICAgICAgKi9cblxuICAgICAgLy8gdXNlIGZ1bmN0aW9uJ3MgYXJndW1lbnQsIG5vdCB0aGUgYHJvdXRlLnBhdGhgXG4gICAgICBpZiAocGF0aCA9PT0gJycpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHJvdXRlLnBhdGhNYXRjaCA9PT0gJ2Z1bGwnICYmXG4gICAgICAgICAgKHNlZ21lbnRHcm91cC5oYXNDaGlsZHJlbigpIHx8IHNlZ21lbnRzLmxlbmd0aCA+IDApXG4gICAgICAgICkge1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IGNvbnN1bWVkOiBbXSwgcG9zUGFyYW1zOiB7fSB9O1xuICAgICAgfVxuXG4gICAgICBjb25zdCBwYXJ0cyA9IHBhdGguc3BsaXQoJy8nKTsgLy8gdXNlIGZ1bmN0aW9uJ3MgYXJndW1lbnQsIG5vdCB0aGUgYHJvdXRlLnBhdGhgXG5cbiAgICAgIGlmIChwYXJ0cy5sZW5ndGggPiBzZWdtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgLy8gVGhlIGFjdHVhbCBVUkwgaXMgc2hvcnRlciB0aGFuIHRoZSBjb25maWcsIG5vIG1hdGNoXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuXG4gICAgICBpZiAoXG4gICAgICAgIHJvdXRlLnBhdGhNYXRjaCA9PT0gJ2Z1bGwnICYmXG4gICAgICAgIChzZWdtZW50R3JvdXAuaGFzQ2hpbGRyZW4oKSB8fCBwYXJ0cy5sZW5ndGggPCBzZWdtZW50cy5sZW5ndGgpXG4gICAgICApIHtcbiAgICAgICAgLy8gVGhlIGNvbmZpZyBpcyBsb25nZXIgdGhhbiB0aGUgYWN0dWFsIFVSTCBidXQgd2UgYXJlIGxvb2tpbmcgZm9yIGEgZnVsbCBtYXRjaCwgcmV0dXJuIG51bGxcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHBvc1BhcmFtczogeyBba2V5OiBzdHJpbmddOiBVcmxTZWdtZW50IH0gPSB7fTtcblxuICAgICAgLy8gQ2hlY2sgZWFjaCBjb25maWcgcGFydCBhZ2FpbnN0IHRoZSBhY3R1YWwgVVJMXG4gICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgcGFydHMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgIGNvbnN0IHBhcnQgPSBwYXJ0c1tpbmRleF07XG4gICAgICAgIGNvbnN0IHNlZ21lbnQgPSBzZWdtZW50c1tpbmRleF07XG4gICAgICAgIGNvbnN0IGlzUGFyYW1ldGVyID0gcGFydC5zdGFydHNXaXRoKCc6Jyk7XG4gICAgICAgIGlmIChpc1BhcmFtZXRlcikge1xuICAgICAgICAgIHBvc1BhcmFtc1twYXJ0LnN1YnN0cmluZygxKV0gPSBzZWdtZW50O1xuICAgICAgICB9IGVsc2UgaWYgKHBhcnQgIT09IHNlZ21lbnQucGF0aCkge1xuICAgICAgICAgIC8vIFRoZSBhY3R1YWwgVVJMIHBhcnQgZG9lcyBub3QgbWF0Y2ggdGhlIGNvbmZpZywgbm8gbWF0Y2hcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4geyBjb25zdW1lZDogc2VnbWVudHMuc2xpY2UoMCwgcGFydHMubGVuZ3RoKSwgcG9zUGFyYW1zIH07XG4gICAgfTtcbiAgICBpZiAoaXNEZXZNb2RlKCkpIHtcbiAgICAgIG1hdGNoZXJbJ19wYXRoJ10gPSBwYXRoOyAvLyBwcm9wZXJ0eSBhZGRlZCBmb3IgZWFzaWVyIGRlYnVnZ2luZyBvZiByb3V0ZXNcbiAgICB9XG4gICAgcmV0dXJuIG1hdGNoZXI7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBVUkwgbWF0Y2hlciB0aGF0IGFjY2VwdHMgYWxtb3N0IGV2ZXJ5dGhpbmcgKGxpa2UgYCoqYCByb3V0ZSksIGJ1dCBub3QgcGF0aHMgYWNjZXB0ZWQgYnkgdGhlIGdpdmVuIG1hdGNoZXJcbiAgICovXG4gIGdldE9wcG9zaXRlKG9yaWdpbmFsTWF0Y2hlcjogVXJsTWF0Y2hlcik6IFVybE1hdGNoZXIge1xuICAgIGNvbnN0IG1hdGNoZXIgPSBmdW5jdGlvbiBvcHBvc2l0ZVVybE1hdGNoZXIoXG4gICAgICBzZWdtZW50czogVXJsU2VnbWVudFtdLFxuICAgICAgZ3JvdXA6IFVybFNlZ21lbnRHcm91cCxcbiAgICAgIHJvdXRlOiBSb3V0ZVxuICAgICkge1xuICAgICAgcmV0dXJuIG9yaWdpbmFsTWF0Y2hlcihzZWdtZW50cywgZ3JvdXAsIHJvdXRlKVxuICAgICAgICA/IG51bGxcbiAgICAgICAgOiB7IGNvbnN1bWVkOiBzZWdtZW50cywgcG9zUGFyYW1zOiB7fSB9O1xuICAgIH07XG4gICAgaWYgKGlzRGV2TW9kZSgpKSB7XG4gICAgICBtYXRjaGVyWydfb3JpZ2luYWxNYXRjaGVyJ10gPSBvcmlnaW5hbE1hdGNoZXI7IC8vIHByb3BlcnR5IGFkZGVkIGZvciBlYXNpZXIgZGVidWdnaW5nIG9mIHJvdXRlc1xuICAgIH1cbiAgICByZXR1cm4gbWF0Y2hlcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIFVSTCBtYXRjaGVyIGZvciB0aGUgZ2l2ZW4gbGlzdCBvZiBnbG9iLWxpa2UgcGF0dGVybnMuIEVhY2ggcGF0dGVybiBtdXN0IHN0YXJ0IHdpdGggYC9gIG9yIGAhL2AuXG4gICAqL1xuICBnZXRGcm9tR2xvYihnbG9iUGF0dGVybnM6IHN0cmluZ1tdKTogVXJsTWF0Y2hlciB7XG4gICAgY29uc3QgZ2xvYlZhbGlkYXRvciA9IHRoaXMuZ2xvYlNlcnZpY2UuZ2V0VmFsaWRhdG9yKGdsb2JQYXR0ZXJucyk7XG5cbiAgICBjb25zdCBtYXRjaGVyID0gZnVuY3Rpb24gZ2xvYlVybE1hdGNoZXIoXG4gICAgICBzZWdtZW50czogVXJsU2VnbWVudFtdXG4gICAgKTogVXJsTWF0Y2hSZXN1bHQgfCBudWxsIHtcbiAgICAgIGNvbnN0IGZ1bGxQYXRoID0gYC8ke3NlZ21lbnRzLm1hcChzID0+IHMucGF0aCkuam9pbignLycpfWA7XG5cbiAgICAgIHJldHVybiBnbG9iVmFsaWRhdG9yKGZ1bGxQYXRoKVxuICAgICAgICA/IHsgY29uc3VtZWQ6IHNlZ21lbnRzLCBwb3NQYXJhbXM6IHt9IH1cbiAgICAgICAgOiBudWxsO1xuICAgIH07XG4gICAgaWYgKGlzRGV2TW9kZSgpKSB7XG4gICAgICBtYXRjaGVyWydfZ2xvYlBhdHRlcm5zJ10gPSBnbG9iUGF0dGVybnM7IC8vIHByb3BlcnR5IGFkZGVkIGZvciBlYXNpZXIgZGVidWdnaW5nIG9mIHJvdXRlc1xuICAgIH1cbiAgICByZXR1cm4gbWF0Y2hlcjtcbiAgfVxufVxuIl19