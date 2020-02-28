import { __decorate } from "tslib";
import { Injectable, isDevMode } from '@angular/core';
import { GlobService } from '../../util/glob.service';
import * as i0 from "@angular/core";
import * as i1 from "../../util/glob.service";
let UrlMatcherService = class UrlMatcherService {
    constructor(globService) {
        this.globService = globService;
    }
    /**
     * Returns a matcher that is always fails
     */
    getFalsy() {
        return function falsyUrlMatcher() {
            return null;
        };
    }
    /**
     * Returns a matcher for given list of paths
     */
    getFromPaths(paths) {
        const matchers = paths.map(path => this.getFromPath(path));
        const matcher = this.getCombined(matchers);
        if (isDevMode()) {
            matcher['_paths'] = paths; // property added for easier debugging of routes
        }
        return matcher;
    }
    /**
     * Returns a matcher that combines the given matchers
     * */
    getCombined(matchers) {
        const matcher = function combinedUrlMatchers(segments, segmentGroup, route) {
            for (let i = 0; i < matchers.length; i++) {
                const result = matchers[i](segments, segmentGroup, route);
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
    }
    /**
     * Similar to Angular's defaultUrlMatcher. Differences:
     * - the `path` comes from function's argument, not from `route.path`
     * - the empty path `''` is handled here, but in Angular is handled one level higher in the match() function
     */
    getFromPath(path = '') {
        const matcher = function pathUrlMatcher(segments, segmentGroup, route) {
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
            const parts = path.split('/'); // use function's argument, not the `route.path`
            if (parts.length > segments.length) {
                // The actual URL is shorter than the config, no match
                return null;
            }
            if (route.pathMatch === 'full' &&
                (segmentGroup.hasChildren() || parts.length < segments.length)) {
                // The config is longer than the actual URL but we are looking for a full match, return null
                return null;
            }
            const posParams = {};
            // Check each config part against the actual URL
            for (let index = 0; index < parts.length; index++) {
                const part = parts[index];
                const segment = segments[index];
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
        };
        if (isDevMode()) {
            matcher['_path'] = path; // property added for easier debugging of routes
        }
        return matcher;
    }
    /**
     * Returns URL matcher that accepts almost everything (like `**` route), but not paths accepted by the given matcher
     */
    getOpposite(originalMatcher) {
        const matcher = function oppositeUrlMatcher(segments, group, route) {
            return originalMatcher(segments, group, route)
                ? null
                : { consumed: segments, posParams: {} };
        };
        if (isDevMode()) {
            matcher['_originalMatcher'] = originalMatcher; // property added for easier debugging of routes
        }
        return matcher;
    }
    /**
     * Returns URL matcher for the given list of glob-like patterns. Each pattern must start with `/` or `!/`.
     */
    getFromGlob(globPatterns) {
        const globValidator = this.globService.getValidator(globPatterns);
        const matcher = function globUrlMatcher(segments) {
            const fullPath = `/${segments.map(s => s.path).join('/')}`;
            return globValidator(fullPath)
                ? { consumed: segments, posParams: {} }
                : null;
        };
        if (isDevMode()) {
            matcher['_globPatterns'] = globPatterns; // property added for easier debugging of routes
        }
        return matcher;
    }
};
UrlMatcherService.ctorParameters = () => [
    { type: GlobService }
];
UrlMatcherService.ɵprov = i0.ɵɵdefineInjectable({ factory: function UrlMatcherService_Factory() { return new UrlMatcherService(i0.ɵɵinject(i1.GlobService)); }, token: UrlMatcherService, providedIn: "root" });
UrlMatcherService = __decorate([
    Injectable({ providedIn: 'root' })
], UrlMatcherService);
export { UrlMatcherService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXJsLW1hdGNoZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9yb3V0aW5nL3NlcnZpY2VzL3VybC1tYXRjaGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBUXRELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7O0FBR3RELElBQWEsaUJBQWlCLEdBQTlCLE1BQWEsaUJBQWlCO0lBQzVCLFlBQXNCLFdBQXdCO1FBQXhCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO0lBQUcsQ0FBQztJQUVsRDs7T0FFRztJQUNILFFBQVE7UUFDTixPQUFPLFNBQVMsZUFBZTtZQUM3QixPQUFPLElBQUksQ0FBQztRQUNkLENBQUMsQ0FBQztJQUNKLENBQUM7SUFFRDs7T0FFRztJQUNILFlBQVksQ0FBQyxLQUFlO1FBQzFCLE1BQU0sUUFBUSxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDM0QsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUMzQyxJQUFJLFNBQVMsRUFBRSxFQUFFO1lBQ2YsT0FBTyxDQUFDLFFBQVEsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLGdEQUFnRDtTQUM1RTtRQUNELE9BQU8sT0FBTyxDQUFDO0lBQ2pCLENBQUM7SUFFRDs7U0FFSztJQUNMLFdBQVcsQ0FBQyxRQUFzQjtRQUNoQyxNQUFNLE9BQU8sR0FBRyxTQUFTLG1CQUFtQixDQUMxQyxRQUFzQixFQUN0QixZQUE2QixFQUM3QixLQUFZO1lBRVosS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxNQUFN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SW5qZWN0YWJsZSwgaXNEZXZNb2RlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBSb3V0ZSxcbiAgVXJsTWF0Y2hlcixcbiAgVXJsTWF0Y2hSZXN1bHQsXG4gIFVybFNlZ21lbnQsXG4gIFVybFNlZ21lbnRHcm91cCxcbn0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEdsb2JTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vdXRpbC9nbG9iLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIFVybE1hdGNoZXJTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIGdsb2JTZXJ2aWNlOiBHbG9iU2VydmljZSkge31cblxuICAvKipcbiAgICogUmV0dXJucyBhIG1hdGNoZXIgdGhhdCBpcyBhbHdheXMgZmFpbHNcbiAgICovXG4gIGdldEZhbHN5KCk6IFVybE1hdGNoZXIge1xuICAgIHJldHVybiBmdW5jdGlvbiBmYWxzeVVybE1hdGNoZXIoKTogbnVsbCB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBtYXRjaGVyIGZvciBnaXZlbiBsaXN0IG9mIHBhdGhzXG4gICAqL1xuICBnZXRGcm9tUGF0aHMocGF0aHM6IHN0cmluZ1tdKTogVXJsTWF0Y2hlciB7XG4gICAgY29uc3QgbWF0Y2hlcnMgPSBwYXRocy5tYXAocGF0aCA9PiB0aGlzLmdldEZyb21QYXRoKHBhdGgpKTtcbiAgICBjb25zdCBtYXRjaGVyID0gdGhpcy5nZXRDb21iaW5lZChtYXRjaGVycyk7XG4gICAgaWYgKGlzRGV2TW9kZSgpKSB7XG4gICAgICBtYXRjaGVyWydfcGF0aHMnXSA9IHBhdGhzOyAvLyBwcm9wZXJ0eSBhZGRlZCBmb3IgZWFzaWVyIGRlYnVnZ2luZyBvZiByb3V0ZXNcbiAgICB9XG4gICAgcmV0dXJuIG1hdGNoZXI7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIG1hdGNoZXIgdGhhdCBjb21iaW5lcyB0aGUgZ2l2ZW4gbWF0Y2hlcnNcbiAgICogKi9cbiAgZ2V0Q29tYmluZWQobWF0Y2hlcnM6IFVybE1hdGNoZXJbXSk6IFVybE1hdGNoZXIge1xuICAgIGNvbnN0IG1hdGNoZXIgPSBmdW5jdGlvbiBjb21iaW5lZFVybE1hdGNoZXJzKFxuICAgICAgc2VnbWVudHM6IFVybFNlZ21lbnRbXSxcbiAgICAgIHNlZ21lbnRHcm91cDogVXJsU2VnbWVudEdyb3VwLFxuICAgICAgcm91dGU6IFJvdXRlXG4gICAgKTogVXJsTWF0Y2hSZXN1bHQgfCBudWxsIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWF0Y2hlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbWF0Y2hlcnNbaV0oc2VnbWVudHMsIHNlZ21lbnRHcm91cCwgcm91dGUpO1xuICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfTtcbiAgICBpZiAoaXNEZXZNb2RlKCkpIHtcbiAgICAgIG1hdGNoZXJbJ19tYXRjaGVycyddID0gbWF0Y2hlcnM7IC8vIHByb3BlcnR5IGFkZGVkIGZvciBlYXNpZXIgZGVidWdnaW5nIG9mIHJvdXRlc1xuICAgIH1cbiAgICByZXR1cm4gbWF0Y2hlcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTaW1pbGFyIHRvIEFuZ3VsYXIncyBkZWZhdWx0VXJsTWF0Y2hlci4gRGlmZmVyZW5jZXM6XG4gICAqIC0gdGhlIGBwYXRoYCBjb21lcyBmcm9tIGZ1bmN0aW9uJ3MgYXJndW1lbnQsIG5vdCBmcm9tIGByb3V0ZS5wYXRoYFxuICAgKiAtIHRoZSBlbXB0eSBwYXRoIGAnJ2AgaXMgaGFuZGxlZCBoZXJlLCBidXQgaW4gQW5ndWxhciBpcyBoYW5kbGVkIG9uZSBsZXZlbCBoaWdoZXIgaW4gdGhlIG1hdGNoKCkgZnVuY3Rpb25cbiAgICovXG4gIHByb3RlY3RlZCBnZXRGcm9tUGF0aChwYXRoOiBzdHJpbmcgPSAnJyk6IFVybE1hdGNoZXIge1xuICAgIGNvbnN0IG1hdGNoZXIgPSBmdW5jdGlvbiBwYXRoVXJsTWF0Y2hlcihcbiAgICAgIHNlZ21lbnRzOiBVcmxTZWdtZW50W10sXG4gICAgICBzZWdtZW50R3JvdXA6IFVybFNlZ21lbnRHcm91cCxcbiAgICAgIHJvdXRlOiBSb3V0ZVxuICAgICk6IFVybE1hdGNoUmVzdWx0IHwgbnVsbCB7XG4gICAgICAvKipcbiAgICAgICAqIEBsaWNlbnNlXG4gICAgICAgKiBUaGUgTUlUIExpY2Vuc2VcbiAgICAgICAqIENvcHlyaWdodCAoYykgMjAxMC0yMDE5IEdvb2dsZSBMTEMuIGh0dHA6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAgICAgICAqXG4gICAgICAgKiBTZWU6XG4gICAgICAgKiAtIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvYmxvYi82ZjVmNDgxZmRhZTAzZjFkOGRiMzYyODRiNjRjN2I4MmQ5NTE5ZDg1L3BhY2thZ2VzL3JvdXRlci9zcmMvc2hhcmVkLnRzI0wxMjFcbiAgICAgICAqL1xuXG4gICAgICAvLyB1c2UgZnVuY3Rpb24ncyBhcmd1bWVudCwgbm90IHRoZSBgcm91dGUucGF0aGBcbiAgICAgIGlmIChwYXRoID09PSAnJykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgcm91dGUucGF0aE1hdGNoID09PSAnZnVsbCcgJiZcbiAgICAgICAgICAoc2VnbWVudEdyb3VwLmhhc0NoaWxkcmVuKCkgfHwgc2VnbWVudHMubGVuZ3RoID4gMClcbiAgICAgICAgKSB7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgY29uc3VtZWQ6IFtdLCBwb3NQYXJhbXM6IHt9IH07XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHBhcnRzID0gcGF0aC5zcGxpdCgnLycpOyAvLyB1c2UgZnVuY3Rpb24ncyBhcmd1bWVudCwgbm90IHRoZSBgcm91dGUucGF0aGBcblxuICAgICAgaWYgKHBhcnRzLmxlbmd0aCA+IHNlZ21lbnRzLmxlbmd0aCkge1xuICAgICAgICAvLyBUaGUgYWN0dWFsIFVSTCBpcyBzaG9ydGVyIHRoYW4gdGhlIGNvbmZpZywgbm8gbWF0Y2hcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG5cbiAgICAgIGlmIChcbiAgICAgICAgcm91dGUucGF0aE1hdGNoID09PSAnZnVsbCcgJiZcbiAgICAgICAgKHNlZ21lbnRHcm91cC5oYXNDaGlsZHJlbigpIHx8IHBhcnRzLmxlbmd0aCA8IHNlZ21lbnRzLmxlbmd0aClcbiAgICAgICkge1xuICAgICAgICAvLyBUaGUgY29uZmlnIGlzIGxvbmdlciB0aGFuIHRoZSBhY3R1YWwgVVJMIGJ1dCB3ZSBhcmUgbG9va2luZyBmb3IgYSBmdWxsIG1hdGNoLCByZXR1cm4gbnVsbFxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cblxuICAgICAgY29uc3QgcG9zUGFyYW1zOiB7IFtrZXk6IHN0cmluZ106IFVybFNlZ21lbnQgfSA9IHt9O1xuXG4gICAgICAvLyBDaGVjayBlYWNoIGNvbmZpZyBwYXJ0IGFnYWluc3QgdGhlIGFjdHVhbCBVUkxcbiAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBwYXJ0cy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgY29uc3QgcGFydCA9IHBhcnRzW2luZGV4XTtcbiAgICAgICAgY29uc3Qgc2VnbWVudCA9IHNlZ21lbnRzW2luZGV4XTtcbiAgICAgICAgY29uc3QgaXNQYXJhbWV0ZXIgPSBwYXJ0LnN0YXJ0c1dpdGgoJzonKTtcbiAgICAgICAgaWYgKGlzUGFyYW1ldGVyKSB7XG4gICAgICAgICAgcG9zUGFyYW1zW3BhcnQuc3Vic3RyaW5nKDEpXSA9IHNlZ21lbnQ7XG4gICAgICAgIH0gZWxzZSBpZiAocGFydCAhPT0gc2VnbWVudC5wYXRoKSB7XG4gICAgICAgICAgLy8gVGhlIGFjdHVhbCBVUkwgcGFydCBkb2VzIG5vdCBtYXRjaCB0aGUgY29uZmlnLCBubyBtYXRjaFxuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7IGNvbnN1bWVkOiBzZWdtZW50cy5zbGljZSgwLCBwYXJ0cy5sZW5ndGgpLCBwb3NQYXJhbXMgfTtcbiAgICB9O1xuICAgIGlmIChpc0Rldk1vZGUoKSkge1xuICAgICAgbWF0Y2hlclsnX3BhdGgnXSA9IHBhdGg7IC8vIHByb3BlcnR5IGFkZGVkIGZvciBlYXNpZXIgZGVidWdnaW5nIG9mIHJvdXRlc1xuICAgIH1cbiAgICByZXR1cm4gbWF0Y2hlcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIFVSTCBtYXRjaGVyIHRoYXQgYWNjZXB0cyBhbG1vc3QgZXZlcnl0aGluZyAobGlrZSBgKipgIHJvdXRlKSwgYnV0IG5vdCBwYXRocyBhY2NlcHRlZCBieSB0aGUgZ2l2ZW4gbWF0Y2hlclxuICAgKi9cbiAgZ2V0T3Bwb3NpdGUob3JpZ2luYWxNYXRjaGVyOiBVcmxNYXRjaGVyKTogVXJsTWF0Y2hlciB7XG4gICAgY29uc3QgbWF0Y2hlciA9IGZ1bmN0aW9uIG9wcG9zaXRlVXJsTWF0Y2hlcihcbiAgICAgIHNlZ21lbnRzOiBVcmxTZWdtZW50W10sXG4gICAgICBncm91cDogVXJsU2VnbWVudEdyb3VwLFxuICAgICAgcm91dGU6IFJvdXRlXG4gICAgKSB7XG4gICAgICByZXR1cm4gb3JpZ2luYWxNYXRjaGVyKHNlZ21lbnRzLCBncm91cCwgcm91dGUpXG4gICAgICAgID8gbnVsbFxuICAgICAgICA6IHsgY29uc3VtZWQ6IHNlZ21lbnRzLCBwb3NQYXJhbXM6IHt9IH07XG4gICAgfTtcbiAgICBpZiAoaXNEZXZNb2RlKCkpIHtcbiAgICAgIG1hdGNoZXJbJ19vcmlnaW5hbE1hdGNoZXInXSA9IG9yaWdpbmFsTWF0Y2hlcjsgLy8gcHJvcGVydHkgYWRkZWQgZm9yIGVhc2llciBkZWJ1Z2dpbmcgb2Ygcm91dGVzXG4gICAgfVxuICAgIHJldHVybiBtYXRjaGVyO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgVVJMIG1hdGNoZXIgZm9yIHRoZSBnaXZlbiBsaXN0IG9mIGdsb2ItbGlrZSBwYXR0ZXJucy4gRWFjaCBwYXR0ZXJuIG11c3Qgc3RhcnQgd2l0aCBgL2Agb3IgYCEvYC5cbiAgICovXG4gIGdldEZyb21HbG9iKGdsb2JQYXR0ZXJuczogc3RyaW5nW10pOiBVcmxNYXRjaGVyIHtcbiAgICBjb25zdCBnbG9iVmFsaWRhdG9yID0gdGhpcy5nbG9iU2VydmljZS5nZXRWYWxpZGF0b3IoZ2xvYlBhdHRlcm5zKTtcblxuICAgIGNvbnN0IG1hdGNoZXIgPSBmdW5jdGlvbiBnbG9iVXJsTWF0Y2hlcihcbiAgICAgIHNlZ21lbnRzOiBVcmxTZWdtZW50W11cbiAgICApOiBVcmxNYXRjaFJlc3VsdCB8IG51bGwge1xuICAgICAgY29uc3QgZnVsbFBhdGggPSBgLyR7c2VnbWVudHMubWFwKHMgPT4gcy5wYXRoKS5qb2luKCcvJyl9YDtcblxuICAgICAgcmV0dXJuIGdsb2JWYWxpZGF0b3IoZnVsbFBhdGgpXG4gICAgICAgID8geyBjb25zdW1lZDogc2VnbWVudHMsIHBvc1BhcmFtczoge30gfVxuICAgICAgICA6IG51bGw7XG4gICAgfTtcbiAgICBpZiAoaXNEZXZNb2RlKCkpIHtcbiAgICAgIG1hdGNoZXJbJ19nbG9iUGF0dGVybnMnXSA9IGdsb2JQYXR0ZXJuczsgLy8gcHJvcGVydHkgYWRkZWQgZm9yIGVhc2llciBkZWJ1Z2dpbmcgb2Ygcm91dGVzXG4gICAgfVxuICAgIHJldHVybiBtYXRjaGVyO1xuICB9XG59XG4iXX0=