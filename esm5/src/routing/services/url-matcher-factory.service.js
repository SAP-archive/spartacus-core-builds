import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { GlobService } from '../../util/glob.service';
import * as i0 from "@angular/core";
import * as i1 from "../../util/glob.service";
var UrlMatcherFactoryService = /** @class */ (function () {
    function UrlMatcherFactoryService(globService) {
        this.globService = globService;
    }
    /**
     * Returns a matcher that is always fails
     */
    UrlMatcherFactoryService.prototype.getFalsyUrlMatcher = function () {
        return function falsyUrlMatcher() {
            return null;
        };
    };
    /**
     * Returns a matcher for given list of paths
     */
    UrlMatcherFactoryService.prototype.getMultiplePathsUrlMatcher = function (paths) {
        var self = this;
        var matcher = function multiplePathsUrlMatcher(segments, segmentGroup, route) {
            for (var i = 0; i < paths.length; i++) {
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
    /**
     * Similar to Angular's defaultUrlMatcher. Differences:
     * - the `path` comes from function's argument, not from `route.path`
     * - the empty path `''` is handled here, but in Angular is handled one level higher in the match() function
     */
    UrlMatcherFactoryService.prototype.getPathUrlMatcher = function (path) {
        if (path === void 0) { path = ''; }
        return function (segments, segmentGroup, route) {
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
    };
    /**
     * Returns URL matcher that accepts almost everything (like `**` route), but not paths accepted by the given matcher
     */
    UrlMatcherFactoryService.prototype.getOppositeUrlMatcher = function (originalMatcher) {
        var matcher = function oppositeUrlMatcher(segments, group, route) {
            return originalMatcher(segments, group, route)
                ? null
                : { consumed: segments, posParams: {} };
        };
        matcher.originalMatcher = originalMatcher; // property added for easier debugging of routes
        return matcher;
    };
    /**
     * Returns URL matcher for the given list of glob-like patterns. Each pattern must start with `/` or `!/`.
     */
    UrlMatcherFactoryService.prototype.getGlobUrlMatcher = function (globPatterns) {
        var globValidator = this.globService.getValidator(globPatterns);
        var matcher = function globUrlMatcher(segments) {
            var fullPath = "/" + segments.map(function (s) { return s.path; }).join('/');
            return globValidator(fullPath)
                ? { consumed: segments, posParams: {} }
                : null;
        };
        matcher.globPatterns = globPatterns; // property added for easier debugging of routes
        return matcher;
    };
    UrlMatcherFactoryService.ctorParameters = function () { return [
        { type: GlobService }
    ]; };
    UrlMatcherFactoryService.ɵprov = i0.ɵɵdefineInjectable({ factory: function UrlMatcherFactoryService_Factory() { return new UrlMatcherFactoryService(i0.ɵɵinject(i1.GlobService)); }, token: UrlMatcherFactoryService, providedIn: "root" });
    UrlMatcherFactoryService = __decorate([
        Injectable({ providedIn: 'root' })
    ], UrlMatcherFactoryService);
    return UrlMatcherFactoryService;
}());
export { UrlMatcherFactoryService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXJsLW1hdGNoZXItZmFjdG9yeS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3JvdXRpbmcvc2VydmljZXMvdXJsLW1hdGNoZXItZmFjdG9yeS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBUTNDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7O0FBR3REO0lBQ0Usa0NBQXNCLFdBQXdCO1FBQXhCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO0lBQUcsQ0FBQztJQUVsRDs7T0FFRztJQUNILHFEQUFrQixHQUFsQjtRQUNFLE9BQU8sU0FBUyxlQUFlO1lBQzdCLE9BQU8sSUFBSSxDQUFDO1FBQ2QsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUVEOztPQUVHO0lBQ0gsNkRBQTBCLEdBQTFCLFVBQTJCLEtBQWU7UUFDeEMsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBRWxCLElBQU0sT0FBTyxHQUFHLFNBQVMsdUJBQXVCLENBQzlDLFFBQXNCLEVBQ3RCLFlBQTZCLEVBQzdCLEtBQVk7WUFFWixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDckMsSUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUM3QyxRQUFRLEVBQ1IsWUFBWSxFQUNaLEtBQUssQ0FDTixDQUFDO2dCQUNGLElBQUksTUFBTSxFQUFFO29CQUNWLE9BQU8sTUFBTSxDQUFDO2lCQUNmO2FBQ0Y7WUFDRCxPQUFPLElBQUksQ0FBQztRQUNkLENBQUMsQ0FBQztRQUNGLE9BQU8sQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLENBQUMsZ0RBQWdEO1FBQ3ZFLE9BQU8sT0FB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LEdBQUcsTUFBSSxRQUFRLENBQUMsR0FBRyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLElBQUksRUFBTixDQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFHLENBQUM7WUFFM0QsT0FBTyxhQUFhLENBQUMsUUFBUSxDQUFDO2dCQUM1QixDQUFDLENBQUMsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUU7Z0JBQ3ZDLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDWCxDQUFDLENBQUM7UUFDRixPQUFPLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQyxDQUFDLGdEQUFnRDtRQUNyRixPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFDOztnQkExSWtDLFdBQVc7OztJQURuQyx3QkFBd0I7UUFEcEMsVUFBVSxDQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxDQUFDO09BQ3RCLHdCQUF3QixDQTRJcEM7bUNBdkpEO0NBdUpDLEFBNUlELElBNElDO1NBNUlZLHdCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIFJvdXRlLFxuICBVcmxNYXRjaGVyLFxuICBVcmxNYXRjaFJlc3VsdCxcbiAgVXJsU2VnbWVudCxcbiAgVXJsU2VnbWVudEdyb3VwLFxufSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgR2xvYlNlcnZpY2UgfSBmcm9tICcuLi8uLi91dGlsL2dsb2Iuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgVXJsTWF0Y2hlckZhY3RvcnlTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIGdsb2JTZXJ2aWNlOiBHbG9iU2VydmljZSkge31cblxuICAvKipcbiAgICogUmV0dXJucyBhIG1hdGNoZXIgdGhhdCBpcyBhbHdheXMgZmFpbHNcbiAgICovXG4gIGdldEZhbHN5VXJsTWF0Y2hlcigpOiBVcmxNYXRjaGVyIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gZmFsc3lVcmxNYXRjaGVyKCk6IG51bGwge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgbWF0Y2hlciBmb3IgZ2l2ZW4gbGlzdCBvZiBwYXRoc1xuICAgKi9cbiAgZ2V0TXVsdGlwbGVQYXRoc1VybE1hdGNoZXIocGF0aHM6IHN0cmluZ1tdKTogVXJsTWF0Y2hlciB7XG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XG5cbiAgICBjb25zdCBtYXRjaGVyID0gZnVuY3Rpb24gbXVsdGlwbGVQYXRoc1VybE1hdGNoZXIoXG4gICAgICBzZWdtZW50czogVXJsU2VnbWVudFtdLFxuICAgICAgc2VnbWVudEdyb3VwOiBVcmxTZWdtZW50R3JvdXAsXG4gICAgICByb3V0ZTogUm91dGVcbiAgICApOiBVcmxNYXRjaFJlc3VsdCB8IG51bGwge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXRocy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzZWxmLmdldFBhdGhVcmxNYXRjaGVyKHBhdGhzW2ldKShcbiAgICAgICAgICBzZWdtZW50cyxcbiAgICAgICAgICBzZWdtZW50R3JvdXAsXG4gICAgICAgICAgcm91dGVcbiAgICAgICAgKTtcbiAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH07XG4gICAgbWF0Y2hlci5wYXRocyA9IHBhdGhzOyAvLyBwcm9wZXJ0eSBhZGRlZCBmb3IgZWFzaWVyIGRlYnVnZ2luZyBvZiByb3V0ZXNcbiAgICByZXR1cm4gbWF0Y2hlcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTaW1pbGFyIHRvIEFuZ3VsYXIncyBkZWZhdWx0VXJsTWF0Y2hlci4gRGlmZmVyZW5jZXM6XG4gICAqIC0gdGhlIGBwYXRoYCBjb21lcyBmcm9tIGZ1bmN0aW9uJ3MgYXJndW1lbnQsIG5vdCBmcm9tIGByb3V0ZS5wYXRoYFxuICAgKiAtIHRoZSBlbXB0eSBwYXRoIGAnJ2AgaXMgaGFuZGxlZCBoZXJlLCBidXQgaW4gQW5ndWxhciBpcyBoYW5kbGVkIG9uZSBsZXZlbCBoaWdoZXIgaW4gdGhlIG1hdGNoKCkgZnVuY3Rpb25cbiAgICovXG4gIHByb3RlY3RlZCBnZXRQYXRoVXJsTWF0Y2hlcihwYXRoOiBzdHJpbmcgPSAnJyk6IFVybE1hdGNoZXIge1xuICAgIHJldHVybiAoXG4gICAgICBzZWdtZW50czogVXJsU2VnbWVudFtdLFxuICAgICAgc2VnbWVudEdyb3VwOiBVcmxTZWdtZW50R3JvdXAsXG4gICAgICByb3V0ZTogUm91dGVcbiAgICApOiBVcmxNYXRjaFJlc3VsdCB8IG51bGwgPT4ge1xuICAgICAgLyoqXG4gICAgICAgKiBAbGljZW5zZVxuICAgICAgICogVGhlIE1JVCBMaWNlbnNlXG4gICAgICAgKiBDb3B5cmlnaHQgKGMpIDIwMTAtMjAxOSBHb29nbGUgTExDLiBodHRwOi8vYW5ndWxhci5pby9saWNlbnNlXG4gICAgICAgKlxuICAgICAgICogU2VlOlxuICAgICAgICogLSBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2Jsb2IvNmY1ZjQ4MWZkYWUwM2YxZDhkYjM2Mjg0YjY0YzdiODJkOTUxOWQ4NS9wYWNrYWdlcy9yb3V0ZXIvc3JjL3NoYXJlZC50cyNMMTIxXG4gICAgICAgKi9cblxuICAgICAgLy8gdXNlIGZ1bmN0aW9uJ3MgYXJndW1lbnQsIG5vdCB0aGUgYHJvdXRlLnBhdGhgXG4gICAgICBpZiAocGF0aCA9PT0gJycpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHJvdXRlLnBhdGhNYXRjaCA9PT0gJ2Z1bGwnICYmXG4gICAgICAgICAgKHNlZ21lbnRHcm91cC5oYXNDaGlsZHJlbigpIHx8IHNlZ21lbnRzLmxlbmd0aCA+IDApXG4gICAgICAgICkge1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IGNvbnN1bWVkOiBbXSwgcG9zUGFyYW1zOiB7fSB9O1xuICAgICAgfVxuXG4gICAgICBjb25zdCBwYXJ0cyA9IHBhdGguc3BsaXQoJy8nKTsgLy8gdXNlIGZ1bmN0aW9uJ3MgYXJndW1lbnQsIG5vdCB0aGUgYHJvdXRlLnBhdGhgXG5cbiAgICAgIGlmIChwYXJ0cy5sZW5ndGggPiBzZWdtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgLy8gVGhlIGFjdHVhbCBVUkwgaXMgc2hvcnRlciB0aGFuIHRoZSBjb25maWcsIG5vIG1hdGNoXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuXG4gICAgICBpZiAoXG4gICAgICAgIHJvdXRlLnBhdGhNYXRjaCA9PT0gJ2Z1bGwnICYmXG4gICAgICAgIChzZWdtZW50R3JvdXAuaGFzQ2hpbGRyZW4oKSB8fCBwYXJ0cy5sZW5ndGggPCBzZWdtZW50cy5sZW5ndGgpXG4gICAgICApIHtcbiAgICAgICAgLy8gVGhlIGNvbmZpZyBpcyBsb25nZXIgdGhhbiB0aGUgYWN0dWFsIFVSTCBidXQgd2UgYXJlIGxvb2tpbmcgZm9yIGEgZnVsbCBtYXRjaCwgcmV0dXJuIG51bGxcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHBvc1BhcmFtczogeyBba2V5OiBzdHJpbmddOiBVcmxTZWdtZW50IH0gPSB7fTtcblxuICAgICAgLy8gQ2hlY2sgZWFjaCBjb25maWcgcGFydCBhZ2FpbnN0IHRoZSBhY3R1YWwgVVJMXG4gICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgcGFydHMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgIGNvbnN0IHBhcnQgPSBwYXJ0c1tpbmRleF07XG4gICAgICAgIGNvbnN0IHNlZ21lbnQgPSBzZWdtZW50c1tpbmRleF07XG4gICAgICAgIGNvbnN0IGlzUGFyYW1ldGVyID0gcGFydC5zdGFydHNXaXRoKCc6Jyk7XG4gICAgICAgIGlmIChpc1BhcmFtZXRlcikge1xuICAgICAgICAgIHBvc1BhcmFtc1twYXJ0LnN1YnN0cmluZygxKV0gPSBzZWdtZW50O1xuICAgICAgICB9IGVsc2UgaWYgKHBhcnQgIT09IHNlZ21lbnQucGF0aCkge1xuICAgICAgICAgIC8vIFRoZSBhY3R1YWwgVVJMIHBhcnQgZG9lcyBub3QgbWF0Y2ggdGhlIGNvbmZpZywgbm8gbWF0Y2hcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4geyBjb25zdW1lZDogc2VnbWVudHMuc2xpY2UoMCwgcGFydHMubGVuZ3RoKSwgcG9zUGFyYW1zIH07XG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIFVSTCBtYXRjaGVyIHRoYXQgYWNjZXB0cyBhbG1vc3QgZXZlcnl0aGluZyAobGlrZSBgKipgIHJvdXRlKSwgYnV0IG5vdCBwYXRocyBhY2NlcHRlZCBieSB0aGUgZ2l2ZW4gbWF0Y2hlclxuICAgKi9cbiAgZ2V0T3Bwb3NpdGVVcmxNYXRjaGVyKG9yaWdpbmFsTWF0Y2hlcjogVXJsTWF0Y2hlcik6IFVybE1hdGNoZXIge1xuICAgIGNvbnN0IG1hdGNoZXIgPSBmdW5jdGlvbiBvcHBvc2l0ZVVybE1hdGNoZXIoXG4gICAgICBzZWdtZW50czogVXJsU2VnbWVudFtdLFxuICAgICAgZ3JvdXA6IFVybFNlZ21lbnRHcm91cCxcbiAgICAgIHJvdXRlOiBSb3V0ZVxuICAgICkge1xuICAgICAgcmV0dXJuIG9yaWdpbmFsTWF0Y2hlcihzZWdtZW50cywgZ3JvdXAsIHJvdXRlKVxuICAgICAgICA/IG51bGxcbiAgICAgICAgOiB7IGNvbnN1bWVkOiBzZWdtZW50cywgcG9zUGFyYW1zOiB7fSB9O1xuICAgIH07XG4gICAgbWF0Y2hlci5vcmlnaW5hbE1hdGNoZXIgPSBvcmlnaW5hbE1hdGNoZXI7IC8vIHByb3BlcnR5IGFkZGVkIGZvciBlYXNpZXIgZGVidWdnaW5nIG9mIHJvdXRlc1xuXG4gICAgcmV0dXJuIG1hdGNoZXI7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBVUkwgbWF0Y2hlciBmb3IgdGhlIGdpdmVuIGxpc3Qgb2YgZ2xvYi1saWtlIHBhdHRlcm5zLiBFYWNoIHBhdHRlcm4gbXVzdCBzdGFydCB3aXRoIGAvYCBvciBgIS9gLlxuICAgKi9cbiAgZ2V0R2xvYlVybE1hdGNoZXIoZ2xvYlBhdHRlcm5zOiBzdHJpbmdbXSk6IFVybE1hdGNoZXIge1xuICAgIGNvbnN0IGdsb2JWYWxpZGF0b3IgPSB0aGlzLmdsb2JTZXJ2aWNlLmdldFZhbGlkYXRvcihnbG9iUGF0dGVybnMpO1xuXG4gICAgY29uc3QgbWF0Y2hlciA9IGZ1bmN0aW9uIGdsb2JVcmxNYXRjaGVyKFxuICAgICAgc2VnbWVudHM6IFVybFNlZ21lbnRbXVxuICAgICk6IFVybE1hdGNoUmVzdWx0IHwgbnVsbCB7XG4gICAgICBjb25zdCBmdWxsUGF0aCA9IGAvJHtzZWdtZW50cy5tYXAocyA9PiBzLnBhdGgpLmpvaW4oJy8nKX1gO1xuXG4gICAgICByZXR1cm4gZ2xvYlZhbGlkYXRvcihmdWxsUGF0aClcbiAgICAgICAgPyB7IGNvbnN1bWVkOiBzZWdtZW50cywgcG9zUGFyYW1zOiB7fSB9XG4gICAgICAgIDogbnVsbDtcbiAgICB9O1xuICAgIG1hdGNoZXIuZ2xvYlBhdHRlcm5zID0gZ2xvYlBhdHRlcm5zOyAvLyBwcm9wZXJ0eSBhZGRlZCBmb3IgZWFzaWVyIGRlYnVnZ2luZyBvZiByb3V0ZXNcbiAgICByZXR1cm4gbWF0Y2hlcjtcbiAgfVxufVxuIl19