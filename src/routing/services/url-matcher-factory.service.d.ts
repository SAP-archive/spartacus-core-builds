import { UrlMatcher } from '@angular/router';
import { GlobService } from '../../util/glob.service';
import * as ɵngcc0 from '@angular/core';
export declare class UrlMatcherFactoryService {
    protected globService: GlobService;
    constructor(globService: GlobService);
    /**
     * Returns a matcher that is always fails
     */
    getFalsyUrlMatcher(): UrlMatcher;
    /**
     * Returns a matcher for given list of paths
     */
    getMultiplePathsUrlMatcher(paths: string[]): UrlMatcher;
    /**
     * Similar to Angular's defaultUrlMatcher. Differences:
     * - the `path` comes from function's argument, not from `route.path`
     * - the empty path `''` is handled here, but in Angular is handled one level higher in the match() function
     */
    protected getPathUrlMatcher(path?: string): UrlMatcher;
    /**
     * Returns URL matcher that accepts almost everything (like `**` route), but not paths accepted by the given matcher
     */
    getOppositeUrlMatcher(originalMatcher: UrlMatcher): UrlMatcher;
    /**
     * Returns URL matcher for the given list of glob-like patterns. Each pattern must start with `/` or `!/`.
     */
    getGlobUrlMatcher(globPatterns: string[]): UrlMatcher;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<UrlMatcherFactoryService>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXJsLW1hdGNoZXItZmFjdG9yeS5zZXJ2aWNlLmQudHMiLCJzb3VyY2VzIjpbInVybC1tYXRjaGVyLWZhY3Rvcnkuc2VydmljZS5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5QkE7Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVXJsTWF0Y2hlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBHbG9iU2VydmljZSB9IGZyb20gJy4uLy4uL3V0aWwvZ2xvYi5zZXJ2aWNlJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIFVybE1hdGNoZXJGYWN0b3J5U2VydmljZSB7XG4gICAgcHJvdGVjdGVkIGdsb2JTZXJ2aWNlOiBHbG9iU2VydmljZTtcbiAgICBjb25zdHJ1Y3RvcihnbG9iU2VydmljZTogR2xvYlNlcnZpY2UpO1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSBtYXRjaGVyIHRoYXQgaXMgYWx3YXlzIGZhaWxzXG4gICAgICovXG4gICAgZ2V0RmFsc3lVcmxNYXRjaGVyKCk6IFVybE1hdGNoZXI7XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIG1hdGNoZXIgZm9yIGdpdmVuIGxpc3Qgb2YgcGF0aHNcbiAgICAgKi9cbiAgICBnZXRNdWx0aXBsZVBhdGhzVXJsTWF0Y2hlcihwYXRoczogc3RyaW5nW10pOiBVcmxNYXRjaGVyO1xuICAgIC8qKlxuICAgICAqIFNpbWlsYXIgdG8gQW5ndWxhcidzIGRlZmF1bHRVcmxNYXRjaGVyLiBEaWZmZXJlbmNlczpcbiAgICAgKiAtIHRoZSBgcGF0aGAgY29tZXMgZnJvbSBmdW5jdGlvbidzIGFyZ3VtZW50LCBub3QgZnJvbSBgcm91dGUucGF0aGBcbiAgICAgKiAtIHRoZSBlbXB0eSBwYXRoIGAnJ2AgaXMgaGFuZGxlZCBoZXJlLCBidXQgaW4gQW5ndWxhciBpcyBoYW5kbGVkIG9uZSBsZXZlbCBoaWdoZXIgaW4gdGhlIG1hdGNoKCkgZnVuY3Rpb25cbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgZ2V0UGF0aFVybE1hdGNoZXIocGF0aD86IHN0cmluZyk6IFVybE1hdGNoZXI7XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBVUkwgbWF0Y2hlciB0aGF0IGFjY2VwdHMgYWxtb3N0IGV2ZXJ5dGhpbmcgKGxpa2UgYCoqYCByb3V0ZSksIGJ1dCBub3QgcGF0aHMgYWNjZXB0ZWQgYnkgdGhlIGdpdmVuIG1hdGNoZXJcbiAgICAgKi9cbiAgICBnZXRPcHBvc2l0ZVVybE1hdGNoZXIob3JpZ2luYWxNYXRjaGVyOiBVcmxNYXRjaGVyKTogVXJsTWF0Y2hlcjtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIFVSTCBtYXRjaGVyIGZvciB0aGUgZ2l2ZW4gbGlzdCBvZiBnbG9iLWxpa2UgcGF0dGVybnMuIEVhY2ggcGF0dGVybiBtdXN0IHN0YXJ0IHdpdGggYC9gIG9yIGAhL2AuXG4gICAgICovXG4gICAgZ2V0R2xvYlVybE1hdGNoZXIoZ2xvYlBhdHRlcm5zOiBzdHJpbmdbXSk6IFVybE1hdGNoZXI7XG59XG4iXX0=