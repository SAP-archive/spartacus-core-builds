import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { GlobService } from '../../util/glob.service';
import * as i0 from "@angular/core";
import * as i1 from "../../util/glob.service";
let UrlMatcherFactoryService = class UrlMatcherFactoryService {
    constructor(globService) {
        this.globService = globService;
    }
    /**
     * Returns a matcher that is always fails
     */
    getFalsyUrlMatcher() {
        return function falsyUrlMatcher() {
            return null;
        };
    }
    /**
     * Returns a matcher for given list of paths
     */
    getMultiplePathsUrlMatcher(paths) {
        const self = this;
        const matcher = function multiplePathsUrlMatcher(segments, segmentGroup, route) {
            for (let i = 0; i < paths.length; i++) {
                const result = self.getPathUrlMatcher(paths[i])(segments, segmentGroup, route);
                if (result) {
                    return result;
                }
            }
            return null;
        };
        matcher.paths = paths; // property added for easier debugging of routes
        return matcher;
    }
    /**
     * Similar to Angular's defaultUrlMatcher. Differences:
     * - the `path` comes from function's argument, not from `route.path`
     * - the empty path `''` is handled here, but in Angular is handled one level higher in the match() function
     */
    getPathUrlMatcher(path = '') {
        return (segments, segmentGroup, route) => {
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
    }
    /**
     * Returns URL matcher that accepts almost everything (like `**` route), but not paths accepted by the given matcher
     */
    getOppositeUrlMatcher(originalMatcher) {
        const matcher = function oppositeUrlMatcher(segments, group, route) {
            return originalMatcher(segments, group, route)
                ? null
                : { consumed: segments, posParams: {} };
        };
        matcher.originalMatcher = originalMatcher; // property added for easier debugging of routes
        return matcher;
    }
    /**
     * Returns URL matcher for the given list of glob-like patterns. Each pattern must start with `/` or `!/`.
     */
    getGlobUrlMatcher(globPatterns) {
        const globValidator = this.globService.getValidator(globPatterns);
        const matcher = function globUrlMatcher(segments) {
            const fullPath = `/${segments.map(s => s.path).join('/')}`;
            return globValidator(fullPath)
                ? { consumed: segments, posParams: {} }
                : null;
        };
        matcher.globPatterns = globPatterns; // property added for easier debugging of routes
        return matcher;
    }
};
UrlMatcherFactoryService.ctorParameters = () => [
    { type: GlobService }
];
UrlMatcherFactoryService.ɵprov = i0.ɵɵdefineInjectable({ factory: function UrlMatcherFactoryService_Factory() { return new UrlMatcherFactoryService(i0.ɵɵinject(i1.GlobService)); }, token: UrlMatcherFactoryService, providedIn: "root" });
UrlMatcherFactoryService = __decorate([
    Injectable({ providedIn: 'root' })
], UrlMatcherFactoryService);
export { UrlMatcherFactoryService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXJsLW1hdGNoZXItZmFjdG9yeS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3JvdXRpbmcvc2VydmljZXMvdXJsLW1hdGNoZXItZmFjdG9yeS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBUTNDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7O0FBR3RELElBQWEsd0JBQXdCLEdBQXJDLE1BQWEsd0JBQXdCO0lBQ25DLFlBQXNCLFdBQXdCO1FBQXhCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO0lBQUcsQ0FBQztJQUVsRDs7T0FFRztJQUNILGtCQUFrQjtRQUNoQixPQUFPLFNBQVMsZUFBZTtZQUM3QixPQUFPLElBQUksQ0FBQztRQUNkLENBQUMsQ0FBQztJQUNKLENBQUM7SUFFRDs7T0FFRztJQUNILDBCQUEwQixDQUFDLEtBQWU7UUFDeEMsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBRWxCLE1BQU0sT0FBTyxHQUFHLFNBQVMsdUJBQXVCLENBQzlDLFFBQXNCLEVBQ3RCLFlBQTZCLEVBQzdCLEtBQVk7WUFFWixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDckMsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUM3QyxRQUFRLEVBQ1IsWUFBWSxFQUNaLEtBQUssQ0FDTixDQUFDO2dCQUNGLElBQUksTUFBTSxFQUFFO29CQUNWLE9BQU8sTUFBTSxDQUFDO2lCQUNmO2FBQ0Y7WUFDRCxPQUFPLElBQUksQ0FBQztRQUNkLENBQUMsQ0FBQztRQUNGLE9BQU8sQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLENBQUMsZ0RB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Q0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUM7WUFFM0QsT0FBTyxhQUFhLENBQUMsUUFBUSxDQUFDO2dCQUM1QixDQUFDLENBQUMsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUU7Z0JBQ3ZDLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDWCxDQUFDLENBQUM7UUFDRixPQUFPLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQyxDQUFDLGdEQUFnRDtRQUNyRixPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFDO0NBQ0YsQ0FBQTs7WUEzSW9DLFdBQVc7OztBQURuQyx3QkFBd0I7SUFEcEMsVUFBVSxDQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxDQUFDO0dBQ3RCLHdCQUF3QixDQTRJcEM7U0E1SVksd0JBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgUm91dGUsXG4gIFVybE1hdGNoZXIsXG4gIFVybE1hdGNoUmVzdWx0LFxuICBVcmxTZWdtZW50LFxuICBVcmxTZWdtZW50R3JvdXAsXG59IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBHbG9iU2VydmljZSB9IGZyb20gJy4uLy4uL3V0aWwvZ2xvYi5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBVcmxNYXRjaGVyRmFjdG9yeVNlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgZ2xvYlNlcnZpY2U6IEdsb2JTZXJ2aWNlKSB7fVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgbWF0Y2hlciB0aGF0IGlzIGFsd2F5cyBmYWlsc1xuICAgKi9cbiAgZ2V0RmFsc3lVcmxNYXRjaGVyKCk6IFVybE1hdGNoZXIge1xuICAgIHJldHVybiBmdW5jdGlvbiBmYWxzeVVybE1hdGNoZXIoKTogbnVsbCB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBtYXRjaGVyIGZvciBnaXZlbiBsaXN0IG9mIHBhdGhzXG4gICAqL1xuICBnZXRNdWx0aXBsZVBhdGhzVXJsTWF0Y2hlcihwYXRoczogc3RyaW5nW10pOiBVcmxNYXRjaGVyIHtcbiAgICBjb25zdCBzZWxmID0gdGhpcztcblxuICAgIGNvbnN0IG1hdGNoZXIgPSBmdW5jdGlvbiBtdWx0aXBsZVBhdGhzVXJsTWF0Y2hlcihcbiAgICAgIHNlZ21lbnRzOiBVcmxTZWdtZW50W10sXG4gICAgICBzZWdtZW50R3JvdXA6IFVybFNlZ21lbnRHcm91cCxcbiAgICAgIHJvdXRlOiBSb3V0ZVxuICAgICk6IFVybE1hdGNoUmVzdWx0IHwgbnVsbCB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhdGhzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHNlbGYuZ2V0UGF0aFVybE1hdGNoZXIocGF0aHNbaV0pKFxuICAgICAgICAgIHNlZ21lbnRzLFxuICAgICAgICAgIHNlZ21lbnRHcm91cCxcbiAgICAgICAgICByb3V0ZVxuICAgICAgICApO1xuICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfTtcbiAgICBtYXRjaGVyLnBhdGhzID0gcGF0aHM7IC8vIHByb3BlcnR5IGFkZGVkIGZvciBlYXNpZXIgZGVidWdnaW5nIG9mIHJvdXRlc1xuICAgIHJldHVybiBtYXRjaGVyO1xuICB9XG5cbiAgLyoqXG4gICAqIFNpbWlsYXIgdG8gQW5ndWxhcidzIGRlZmF1bHRVcmxNYXRjaGVyLiBEaWZmZXJlbmNlczpcbiAgICogLSB0aGUgYHBhdGhgIGNvbWVzIGZyb20gZnVuY3Rpb24ncyBhcmd1bWVudCwgbm90IGZyb20gYHJvdXRlLnBhdGhgXG4gICAqIC0gdGhlIGVtcHR5IHBhdGggYCcnYCBpcyBoYW5kbGVkIGhlcmUsIGJ1dCBpbiBBbmd1bGFyIGlzIGhhbmRsZWQgb25lIGxldmVsIGhpZ2hlciBpbiB0aGUgbWF0Y2goKSBmdW5jdGlvblxuICAgKi9cbiAgcHJvdGVjdGVkIGdldFBhdGhVcmxNYXRjaGVyKHBhdGg6IHN0cmluZyA9ICcnKTogVXJsTWF0Y2hlciB7XG4gICAgcmV0dXJuIChcbiAgICAgIHNlZ21lbnRzOiBVcmxTZWdtZW50W10sXG4gICAgICBzZWdtZW50R3JvdXA6IFVybFNlZ21lbnRHcm91cCxcbiAgICAgIHJvdXRlOiBSb3V0ZVxuICAgICk6IFVybE1hdGNoUmVzdWx0IHwgbnVsbCA9PiB7XG4gICAgICAvKipcbiAgICAgICAqIEBsaWNlbnNlXG4gICAgICAgKiBUaGUgTUlUIExpY2Vuc2VcbiAgICAgICAqIENvcHlyaWdodCAoYykgMjAxMC0yMDE5IEdvb2dsZSBMTEMuIGh0dHA6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAgICAgICAqXG4gICAgICAgKiBTZWU6XG4gICAgICAgKiAtIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvYmxvYi82ZjVmNDgxZmRhZTAzZjFkOGRiMzYyODRiNjRjN2I4MmQ5NTE5ZDg1L3BhY2thZ2VzL3JvdXRlci9zcmMvc2hhcmVkLnRzI0wxMjFcbiAgICAgICAqL1xuXG4gICAgICAvLyB1c2UgZnVuY3Rpb24ncyBhcmd1bWVudCwgbm90IHRoZSBgcm91dGUucGF0aGBcbiAgICAgIGlmIChwYXRoID09PSAnJykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgcm91dGUucGF0aE1hdGNoID09PSAnZnVsbCcgJiZcbiAgICAgICAgICAoc2VnbWVudEdyb3VwLmhhc0NoaWxkcmVuKCkgfHwgc2VnbWVudHMubGVuZ3RoID4gMClcbiAgICAgICAgKSB7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgY29uc3VtZWQ6IFtdLCBwb3NQYXJhbXM6IHt9IH07XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHBhcnRzID0gcGF0aC5zcGxpdCgnLycpOyAvLyB1c2UgZnVuY3Rpb24ncyBhcmd1bWVudCwgbm90IHRoZSBgcm91dGUucGF0aGBcblxuICAgICAgaWYgKHBhcnRzLmxlbmd0aCA+IHNlZ21lbnRzLmxlbmd0aCkge1xuICAgICAgICAvLyBUaGUgYWN0dWFsIFVSTCBpcyBzaG9ydGVyIHRoYW4gdGhlIGNvbmZpZywgbm8gbWF0Y2hcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG5cbiAgICAgIGlmIChcbiAgICAgICAgcm91dGUucGF0aE1hdGNoID09PSAnZnVsbCcgJiZcbiAgICAgICAgKHNlZ21lbnRHcm91cC5oYXNDaGlsZHJlbigpIHx8IHBhcnRzLmxlbmd0aCA8IHNlZ21lbnRzLmxlbmd0aClcbiAgICAgICkge1xuICAgICAgICAvLyBUaGUgY29uZmlnIGlzIGxvbmdlciB0aGFuIHRoZSBhY3R1YWwgVVJMIGJ1dCB3ZSBhcmUgbG9va2luZyBmb3IgYSBmdWxsIG1hdGNoLCByZXR1cm4gbnVsbFxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cblxuICAgICAgY29uc3QgcG9zUGFyYW1zOiB7IFtrZXk6IHN0cmluZ106IFVybFNlZ21lbnQgfSA9IHt9O1xuXG4gICAgICAvLyBDaGVjayBlYWNoIGNvbmZpZyBwYXJ0IGFnYWluc3QgdGhlIGFjdHVhbCBVUkxcbiAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBwYXJ0cy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgY29uc3QgcGFydCA9IHBhcnRzW2luZGV4XTtcbiAgICAgICAgY29uc3Qgc2VnbWVudCA9IHNlZ21lbnRzW2luZGV4XTtcbiAgICAgICAgY29uc3QgaXNQYXJhbWV0ZXIgPSBwYXJ0LnN0YXJ0c1dpdGgoJzonKTtcbiAgICAgICAgaWYgKGlzUGFyYW1ldGVyKSB7XG4gICAgICAgICAgcG9zUGFyYW1zW3BhcnQuc3Vic3RyaW5nKDEpXSA9IHNlZ21lbnQ7XG4gICAgICAgIH0gZWxzZSBpZiAocGFydCAhPT0gc2VnbWVudC5wYXRoKSB7XG4gICAgICAgICAgLy8gVGhlIGFjdHVhbCBVUkwgcGFydCBkb2VzIG5vdCBtYXRjaCB0aGUgY29uZmlnLCBubyBtYXRjaFxuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7IGNvbnN1bWVkOiBzZWdtZW50cy5zbGljZSgwLCBwYXJ0cy5sZW5ndGgpLCBwb3NQYXJhbXMgfTtcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgVVJMIG1hdGNoZXIgdGhhdCBhY2NlcHRzIGFsbW9zdCBldmVyeXRoaW5nIChsaWtlIGAqKmAgcm91dGUpLCBidXQgbm90IHBhdGhzIGFjY2VwdGVkIGJ5IHRoZSBnaXZlbiBtYXRjaGVyXG4gICAqL1xuICBnZXRPcHBvc2l0ZVVybE1hdGNoZXIob3JpZ2luYWxNYXRjaGVyOiBVcmxNYXRjaGVyKTogVXJsTWF0Y2hlciB7XG4gICAgY29uc3QgbWF0Y2hlciA9IGZ1bmN0aW9uIG9wcG9zaXRlVXJsTWF0Y2hlcihcbiAgICAgIHNlZ21lbnRzOiBVcmxTZWdtZW50W10sXG4gICAgICBncm91cDogVXJsU2VnbWVudEdyb3VwLFxuICAgICAgcm91dGU6IFJvdXRlXG4gICAgKSB7XG4gICAgICByZXR1cm4gb3JpZ2luYWxNYXRjaGVyKHNlZ21lbnRzLCBncm91cCwgcm91dGUpXG4gICAgICAgID8gbnVsbFxuICAgICAgICA6IHsgY29uc3VtZWQ6IHNlZ21lbnRzLCBwb3NQYXJhbXM6IHt9IH07XG4gICAgfTtcbiAgICBtYXRjaGVyLm9yaWdpbmFsTWF0Y2hlciA9IG9yaWdpbmFsTWF0Y2hlcjsgLy8gcHJvcGVydHkgYWRkZWQgZm9yIGVhc2llciBkZWJ1Z2dpbmcgb2Ygcm91dGVzXG5cbiAgICByZXR1cm4gbWF0Y2hlcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIFVSTCBtYXRjaGVyIGZvciB0aGUgZ2l2ZW4gbGlzdCBvZiBnbG9iLWxpa2UgcGF0dGVybnMuIEVhY2ggcGF0dGVybiBtdXN0IHN0YXJ0IHdpdGggYC9gIG9yIGAhL2AuXG4gICAqL1xuICBnZXRHbG9iVXJsTWF0Y2hlcihnbG9iUGF0dGVybnM6IHN0cmluZ1tdKTogVXJsTWF0Y2hlciB7XG4gICAgY29uc3QgZ2xvYlZhbGlkYXRvciA9IHRoaXMuZ2xvYlNlcnZpY2UuZ2V0VmFsaWRhdG9yKGdsb2JQYXR0ZXJucyk7XG5cbiAgICBjb25zdCBtYXRjaGVyID0gZnVuY3Rpb24gZ2xvYlVybE1hdGNoZXIoXG4gICAgICBzZWdtZW50czogVXJsU2VnbWVudFtdXG4gICAgKTogVXJsTWF0Y2hSZXN1bHQgfCBudWxsIHtcbiAgICAgIGNvbnN0IGZ1bGxQYXRoID0gYC8ke3NlZ21lbnRzLm1hcChzID0+IHMucGF0aCkuam9pbignLycpfWA7XG5cbiAgICAgIHJldHVybiBnbG9iVmFsaWRhdG9yKGZ1bGxQYXRoKVxuICAgICAgICA/IHsgY29uc3VtZWQ6IHNlZ21lbnRzLCBwb3NQYXJhbXM6IHt9IH1cbiAgICAgICAgOiBudWxsO1xuICAgIH07XG4gICAgbWF0Y2hlci5nbG9iUGF0dGVybnMgPSBnbG9iUGF0dGVybnM7IC8vIHByb3BlcnR5IGFkZGVkIGZvciBlYXNpZXIgZGVidWdnaW5nIG9mIHJvdXRlc1xuICAgIHJldHVybiBtYXRjaGVyO1xuICB9XG59XG4iXX0=