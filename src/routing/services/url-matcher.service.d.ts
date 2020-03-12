import { UrlMatcher } from '@angular/router';
import { GlobService } from '../../util/glob.service';
import * as ɵngcc0 from '@angular/core';
export declare class UrlMatcherService {
    protected globService: GlobService;
    constructor(globService: GlobService);
    /**
     * Returns a matcher that is always fails
     */
    getFalsy(): UrlMatcher;
    /**
     * Returns a matcher for given list of paths
     */
    getFromPaths(paths: string[]): UrlMatcher;
    /**
     * Returns a matcher that combines the given matchers
     * */
    getCombined(matchers: UrlMatcher[]): UrlMatcher;
    /**
     * Similar to Angular's defaultUrlMatcher. Differences:
     * - the `path` comes from function's argument, not from `route.path`
     * - the empty path `''` is handled here, but in Angular is handled one level higher in the match() function
     */
    protected getFromPath(path?: string): UrlMatcher;
    /**
     * Returns URL matcher that accepts almost everything (like `**` route), but not paths accepted by the given matcher
     */
    getOpposite(originalMatcher: UrlMatcher): UrlMatcher;
    /**
     * Returns URL matcher for the given list of glob-like patterns. Each pattern must start with `/` or `!/`.
     */
    getFromGlob(globPatterns: string[]): UrlMatcher;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<UrlMatcherService>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXJsLW1hdGNoZXIuc2VydmljZS5kLnRzIiwic291cmNlcyI6WyJ1cmwtbWF0Y2hlci5zZXJ2aWNlLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE2QkEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBVcmxNYXRjaGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEdsb2JTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vdXRpbC9nbG9iLnNlcnZpY2UnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgVXJsTWF0Y2hlclNlcnZpY2Uge1xuICAgIHByb3RlY3RlZCBnbG9iU2VydmljZTogR2xvYlNlcnZpY2U7XG4gICAgY29uc3RydWN0b3IoZ2xvYlNlcnZpY2U6IEdsb2JTZXJ2aWNlKTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgbWF0Y2hlciB0aGF0IGlzIGFsd2F5cyBmYWlsc1xuICAgICAqL1xuICAgIGdldEZhbHN5KCk6IFVybE1hdGNoZXI7XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIG1hdGNoZXIgZm9yIGdpdmVuIGxpc3Qgb2YgcGF0aHNcbiAgICAgKi9cbiAgICBnZXRGcm9tUGF0aHMocGF0aHM6IHN0cmluZ1tdKTogVXJsTWF0Y2hlcjtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgbWF0Y2hlciB0aGF0IGNvbWJpbmVzIHRoZSBnaXZlbiBtYXRjaGVyc1xuICAgICAqICovXG4gICAgZ2V0Q29tYmluZWQobWF0Y2hlcnM6IFVybE1hdGNoZXJbXSk6IFVybE1hdGNoZXI7XG4gICAgLyoqXG4gICAgICogU2ltaWxhciB0byBBbmd1bGFyJ3MgZGVmYXVsdFVybE1hdGNoZXIuIERpZmZlcmVuY2VzOlxuICAgICAqIC0gdGhlIGBwYXRoYCBjb21lcyBmcm9tIGZ1bmN0aW9uJ3MgYXJndW1lbnQsIG5vdCBmcm9tIGByb3V0ZS5wYXRoYFxuICAgICAqIC0gdGhlIGVtcHR5IHBhdGggYCcnYCBpcyBoYW5kbGVkIGhlcmUsIGJ1dCBpbiBBbmd1bGFyIGlzIGhhbmRsZWQgb25lIGxldmVsIGhpZ2hlciBpbiB0aGUgbWF0Y2goKSBmdW5jdGlvblxuICAgICAqL1xuICAgIHByb3RlY3RlZCBnZXRGcm9tUGF0aChwYXRoPzogc3RyaW5nKTogVXJsTWF0Y2hlcjtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIFVSTCBtYXRjaGVyIHRoYXQgYWNjZXB0cyBhbG1vc3QgZXZlcnl0aGluZyAobGlrZSBgKipgIHJvdXRlKSwgYnV0IG5vdCBwYXRocyBhY2NlcHRlZCBieSB0aGUgZ2l2ZW4gbWF0Y2hlclxuICAgICAqL1xuICAgIGdldE9wcG9zaXRlKG9yaWdpbmFsTWF0Y2hlcjogVXJsTWF0Y2hlcik6IFVybE1hdGNoZXI7XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBVUkwgbWF0Y2hlciBmb3IgdGhlIGdpdmVuIGxpc3Qgb2YgZ2xvYi1saWtlIHBhdHRlcm5zLiBFYWNoIHBhdHRlcm4gbXVzdCBzdGFydCB3aXRoIGAvYCBvciBgIS9gLlxuICAgICAqL1xuICAgIGdldEZyb21HbG9iKGdsb2JQYXR0ZXJuczogc3RyaW5nW10pOiBVcmxNYXRjaGVyO1xufVxuIl19