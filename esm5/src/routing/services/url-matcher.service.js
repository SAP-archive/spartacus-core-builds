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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXJsLW1hdGNoZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9yb3V0aW5nL3NlcnZpY2VzL3VybC1tYXRjaGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBUXRELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7O0FBR3REO0lBQ0UsMkJBQXNCLFdBQXdCO1FBQXhCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO0lBQUcsQ0FBQztJQUVsRDs7T0FFRztJQUNILG9DQUFRLEdBQVI7UUFDRSxPQUFPLFNBQVMsZUFBZTtZQUM3QixPQUFPLElBQUksQ0FBQztRQUNkLENBQUMsQ0FBQztJQUNKLENBQUM7SUFFRDs7T0FFRztJQUNILHdDQUFZLEdBQVosVUFBYSxLQUFlO1FBQTVCLGlCQU9DO1FBTkMsSUFBTSxRQUFRLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxVQUFDLElBQUksSUFBSyxPQUFBLEtBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQXRCLENBQXNCLENBQUMsQ0FBQztRQUM3RCxJQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzNDLElBQUksU0FBUyxFQUFFLEVBQUU7WUFDZixPQUFPLENBQUMsUUFBUSxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsZ0RBQWdEO1NBQzVFO1FBQ0QsT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQztJQUVEOztTQUVLO0lBQ0wsdUNBQVcsR0FBWCxVQUFZLFFBQXNCO1FBQ2hDLElBQU0sT0FBTyxHQUFHLFNBQVMsbUJBQW1CLENBQzFDLFFBQXNCLEVBQ3RCLFlBQTZCLEVBQzdCLEtBQVk7WUFFWixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsUUFB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QixDQTJKN0I7NEJBdEtEO0NBc0tDLEFBM0pELElBMkpDO1NBM0pZLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIGlzRGV2TW9kZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgUm91dGUsXG4gIFVybE1hdGNoZXIsXG4gIFVybE1hdGNoUmVzdWx0LFxuICBVcmxTZWdtZW50LFxuICBVcmxTZWdtZW50R3JvdXAsXG59IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBHbG9iU2VydmljZSB9IGZyb20gJy4uLy4uL3V0aWwvZ2xvYi5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBVcmxNYXRjaGVyU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBnbG9iU2VydmljZTogR2xvYlNlcnZpY2UpIHt9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBtYXRjaGVyIHRoYXQgaXMgYWx3YXlzIGZhaWxzXG4gICAqL1xuICBnZXRGYWxzeSgpOiBVcmxNYXRjaGVyIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gZmFsc3lVcmxNYXRjaGVyKCk6IG51bGwge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgbWF0Y2hlciBmb3IgZ2l2ZW4gbGlzdCBvZiBwYXRoc1xuICAgKi9cbiAgZ2V0RnJvbVBhdGhzKHBhdGhzOiBzdHJpbmdbXSk6IFVybE1hdGNoZXIge1xuICAgIGNvbnN0IG1hdGNoZXJzID0gcGF0aHMubWFwKChwYXRoKSA9PiB0aGlzLmdldEZyb21QYXRoKHBhdGgpKTtcbiAgICBjb25zdCBtYXRjaGVyID0gdGhpcy5nZXRDb21iaW5lZChtYXRjaGVycyk7XG4gICAgaWYgKGlzRGV2TW9kZSgpKSB7XG4gICAgICBtYXRjaGVyWydfcGF0aHMnXSA9IHBhdGhzOyAvLyBwcm9wZXJ0eSBhZGRlZCBmb3IgZWFzaWVyIGRlYnVnZ2luZyBvZiByb3V0ZXNcbiAgICB9XG4gICAgcmV0dXJuIG1hdGNoZXI7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIG1hdGNoZXIgdGhhdCBjb21iaW5lcyB0aGUgZ2l2ZW4gbWF0Y2hlcnNcbiAgICogKi9cbiAgZ2V0Q29tYmluZWQobWF0Y2hlcnM6IFVybE1hdGNoZXJbXSk6IFVybE1hdGNoZXIge1xuICAgIGNvbnN0IG1hdGNoZXIgPSBmdW5jdGlvbiBjb21iaW5lZFVybE1hdGNoZXJzKFxuICAgICAgc2VnbWVudHM6IFVybFNlZ21lbnRbXSxcbiAgICAgIHNlZ21lbnRHcm91cDogVXJsU2VnbWVudEdyb3VwLFxuICAgICAgcm91dGU6IFJvdXRlXG4gICAgKTogVXJsTWF0Y2hSZXN1bHQgfCBudWxsIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWF0Y2hlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbWF0Y2hlcnNbaV0oc2VnbWVudHMsIHNlZ21lbnRHcm91cCwgcm91dGUpO1xuICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfTtcbiAgICBpZiAoaXNEZXZNb2RlKCkpIHtcbiAgICAgIG1hdGNoZXJbJ19tYXRjaGVycyddID0gbWF0Y2hlcnM7IC8vIHByb3BlcnR5IGFkZGVkIGZvciBlYXNpZXIgZGVidWdnaW5nIG9mIHJvdXRlc1xuICAgIH1cbiAgICByZXR1cm4gbWF0Y2hlcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTaW1pbGFyIHRvIEFuZ3VsYXIncyBkZWZhdWx0VXJsTWF0Y2hlci4gRGlmZmVyZW5jZXM6XG4gICAqIC0gdGhlIGBwYXRoYCBjb21lcyBmcm9tIGZ1bmN0aW9uJ3MgYXJndW1lbnQsIG5vdCBmcm9tIGByb3V0ZS5wYXRoYFxuICAgKiAtIHRoZSBlbXB0eSBwYXRoIGAnJ2AgaXMgaGFuZGxlZCBoZXJlLCBidXQgaW4gQW5ndWxhciBpcyBoYW5kbGVkIG9uZSBsZXZlbCBoaWdoZXIgaW4gdGhlIG1hdGNoKCkgZnVuY3Rpb25cbiAgICovXG4gIHByb3RlY3RlZCBnZXRGcm9tUGF0aChwYXRoOiBzdHJpbmcgPSAnJyk6IFVybE1hdGNoZXIge1xuICAgIGNvbnN0IG1hdGNoZXIgPSBmdW5jdGlvbiBwYXRoVXJsTWF0Y2hlcihcbiAgICAgIHNlZ21lbnRzOiBVcmxTZWdtZW50W10sXG4gICAgICBzZWdtZW50R3JvdXA6IFVybFNlZ21lbnRHcm91cCxcbiAgICAgIHJvdXRlOiBSb3V0ZVxuICAgICk6IFVybE1hdGNoUmVzdWx0IHwgbnVsbCB7XG4gICAgICAvKipcbiAgICAgICAqIEBsaWNlbnNlXG4gICAgICAgKiBUaGUgTUlUIExpY2Vuc2VcbiAgICAgICAqIENvcHlyaWdodCAoYykgMjAxMC0yMDE5IEdvb2dsZSBMTEMuIGh0dHA6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAgICAgICAqXG4gICAgICAgKiBTZWU6XG4gICAgICAgKiAtIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvYmxvYi82ZjVmNDgxZmRhZTAzZjFkOGRiMzYyODRiNjRjN2I4MmQ5NTE5ZDg1L3BhY2thZ2VzL3JvdXRlci9zcmMvc2hhcmVkLnRzI0wxMjFcbiAgICAgICAqL1xuXG4gICAgICAvLyB1c2UgZnVuY3Rpb24ncyBhcmd1bWVudCwgbm90IHRoZSBgcm91dGUucGF0aGBcbiAgICAgIGlmIChwYXRoID09PSAnJykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgcm91dGUucGF0aE1hdGNoID09PSAnZnVsbCcgJiZcbiAgICAgICAgICAoc2VnbWVudEdyb3VwLmhhc0NoaWxkcmVuKCkgfHwgc2VnbWVudHMubGVuZ3RoID4gMClcbiAgICAgICAgKSB7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgY29uc3VtZWQ6IFtdLCBwb3NQYXJhbXM6IHt9IH07XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHBhcnRzID0gcGF0aC5zcGxpdCgnLycpOyAvLyB1c2UgZnVuY3Rpb24ncyBhcmd1bWVudCwgbm90IHRoZSBgcm91dGUucGF0aGBcblxuICAgICAgaWYgKHBhcnRzLmxlbmd0aCA+IHNlZ21lbnRzLmxlbmd0aCkge1xuICAgICAgICAvLyBUaGUgYWN0dWFsIFVSTCBpcyBzaG9ydGVyIHRoYW4gdGhlIGNvbmZpZywgbm8gbWF0Y2hcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG5cbiAgICAgIGlmIChcbiAgICAgICAgcm91dGUucGF0aE1hdGNoID09PSAnZnVsbCcgJiZcbiAgICAgICAgKHNlZ21lbnRHcm91cC5oYXNDaGlsZHJlbigpIHx8IHBhcnRzLmxlbmd0aCA8IHNlZ21lbnRzLmxlbmd0aClcbiAgICAgICkge1xuICAgICAgICAvLyBUaGUgY29uZmlnIGlzIGxvbmdlciB0aGFuIHRoZSBhY3R1YWwgVVJMIGJ1dCB3ZSBhcmUgbG9va2luZyBmb3IgYSBmdWxsIG1hdGNoLCByZXR1cm4gbnVsbFxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cblxuICAgICAgY29uc3QgcG9zUGFyYW1zOiB7IFtrZXk6IHN0cmluZ106IFVybFNlZ21lbnQgfSA9IHt9O1xuXG4gICAgICAvLyBDaGVjayBlYWNoIGNvbmZpZyBwYXJ0IGFnYWluc3QgdGhlIGFjdHVhbCBVUkxcbiAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBwYXJ0cy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgY29uc3QgcGFydCA9IHBhcnRzW2luZGV4XTtcbiAgICAgICAgY29uc3Qgc2VnbWVudCA9IHNlZ21lbnRzW2luZGV4XTtcbiAgICAgICAgY29uc3QgaXNQYXJhbWV0ZXIgPSBwYXJ0LnN0YXJ0c1dpdGgoJzonKTtcbiAgICAgICAgaWYgKGlzUGFyYW1ldGVyKSB7XG4gICAgICAgICAgcG9zUGFyYW1zW3BhcnQuc3Vic3RyaW5nKDEpXSA9IHNlZ21lbnQ7XG4gICAgICAgIH0gZWxzZSBpZiAocGFydCAhPT0gc2VnbWVudC5wYXRoKSB7XG4gICAgICAgICAgLy8gVGhlIGFjdHVhbCBVUkwgcGFydCBkb2VzIG5vdCBtYXRjaCB0aGUgY29uZmlnLCBubyBtYXRjaFxuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7IGNvbnN1bWVkOiBzZWdtZW50cy5zbGljZSgwLCBwYXJ0cy5sZW5ndGgpLCBwb3NQYXJhbXMgfTtcbiAgICB9O1xuICAgIGlmIChpc0Rldk1vZGUoKSkge1xuICAgICAgbWF0Y2hlclsnX3BhdGgnXSA9IHBhdGg7IC8vIHByb3BlcnR5IGFkZGVkIGZvciBlYXNpZXIgZGVidWdnaW5nIG9mIHJvdXRlc1xuICAgIH1cbiAgICByZXR1cm4gbWF0Y2hlcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIFVSTCBtYXRjaGVyIHRoYXQgYWNjZXB0cyBhbG1vc3QgZXZlcnl0aGluZyAobGlrZSBgKipgIHJvdXRlKSwgYnV0IG5vdCBwYXRocyBhY2NlcHRlZCBieSB0aGUgZ2l2ZW4gbWF0Y2hlclxuICAgKi9cbiAgZ2V0T3Bwb3NpdGUob3JpZ2luYWxNYXRjaGVyOiBVcmxNYXRjaGVyKTogVXJsTWF0Y2hlciB7XG4gICAgY29uc3QgbWF0Y2hlciA9IGZ1bmN0aW9uIG9wcG9zaXRlVXJsTWF0Y2hlcihcbiAgICAgIHNlZ21lbnRzOiBVcmxTZWdtZW50W10sXG4gICAgICBncm91cDogVXJsU2VnbWVudEdyb3VwLFxuICAgICAgcm91dGU6IFJvdXRlXG4gICAgKSB7XG4gICAgICByZXR1cm4gb3JpZ2luYWxNYXRjaGVyKHNlZ21lbnRzLCBncm91cCwgcm91dGUpXG4gICAgICAgID8gbnVsbFxuICAgICAgICA6IHsgY29uc3VtZWQ6IHNlZ21lbnRzLCBwb3NQYXJhbXM6IHt9IH07XG4gICAgfTtcbiAgICBpZiAoaXNEZXZNb2RlKCkpIHtcbiAgICAgIG1hdGNoZXJbJ19vcmlnaW5hbE1hdGNoZXInXSA9IG9yaWdpbmFsTWF0Y2hlcjsgLy8gcHJvcGVydHkgYWRkZWQgZm9yIGVhc2llciBkZWJ1Z2dpbmcgb2Ygcm91dGVzXG4gICAgfVxuICAgIHJldHVybiBtYXRjaGVyO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgVVJMIG1hdGNoZXIgZm9yIHRoZSBnaXZlbiBsaXN0IG9mIGdsb2ItbGlrZSBwYXR0ZXJucy4gRWFjaCBwYXR0ZXJuIG11c3Qgc3RhcnQgd2l0aCBgL2Agb3IgYCEvYC5cbiAgICovXG4gIGdldEZyb21HbG9iKGdsb2JQYXR0ZXJuczogc3RyaW5nW10pOiBVcmxNYXRjaGVyIHtcbiAgICBjb25zdCBnbG9iVmFsaWRhdG9yID0gdGhpcy5nbG9iU2VydmljZS5nZXRWYWxpZGF0b3IoZ2xvYlBhdHRlcm5zKTtcblxuICAgIGNvbnN0IG1hdGNoZXIgPSBmdW5jdGlvbiBnbG9iVXJsTWF0Y2hlcihcbiAgICAgIHNlZ21lbnRzOiBVcmxTZWdtZW50W11cbiAgICApOiBVcmxNYXRjaFJlc3VsdCB8IG51bGwge1xuICAgICAgY29uc3QgZnVsbFBhdGggPSBgLyR7c2VnbWVudHMubWFwKChzKSA9PiBzLnBhdGgpLmpvaW4oJy8nKX1gO1xuXG4gICAgICByZXR1cm4gZ2xvYlZhbGlkYXRvcihmdWxsUGF0aClcbiAgICAgICAgPyB7IGNvbnN1bWVkOiBzZWdtZW50cywgcG9zUGFyYW1zOiB7fSB9XG4gICAgICAgIDogbnVsbDtcbiAgICB9O1xuICAgIGlmIChpc0Rldk1vZGUoKSkge1xuICAgICAgbWF0Y2hlclsnX2dsb2JQYXR0ZXJucyddID0gZ2xvYlBhdHRlcm5zOyAvLyBwcm9wZXJ0eSBhZGRlZCBmb3IgZWFzaWVyIGRlYnVnZ2luZyBvZiByb3V0ZXNcbiAgICB9XG4gICAgcmV0dXJuIG1hdGNoZXI7XG4gIH1cbn1cbiJdfQ==