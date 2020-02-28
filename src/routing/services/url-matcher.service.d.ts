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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXJsLW1hdGNoZXIuc2VydmljZS5kLnRzIiwic291cmNlcyI6WyJ1cmwtbWF0Y2hlci5zZXJ2aWNlLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE2QkE7Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVXJsTWF0Y2hlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBHbG9iU2VydmljZSB9IGZyb20gJy4uLy4uL3V0aWwvZ2xvYi5zZXJ2aWNlJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIFVybE1hdGNoZXJTZXJ2aWNlIHtcbiAgICBwcm90ZWN0ZWQgZ2xvYlNlcnZpY2U6IEdsb2JTZXJ2aWNlO1xuICAgIGNvbnN0cnVjdG9yKGdsb2JTZXJ2aWNlOiBHbG9iU2VydmljZSk7XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIG1hdGNoZXIgdGhhdCBpcyBhbHdheXMgZmFpbHNcbiAgICAgKi9cbiAgICBnZXRGYWxzeSgpOiBVcmxNYXRjaGVyO1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSBtYXRjaGVyIGZvciBnaXZlbiBsaXN0IG9mIHBhdGhzXG4gICAgICovXG4gICAgZ2V0RnJvbVBhdGhzKHBhdGhzOiBzdHJpbmdbXSk6IFVybE1hdGNoZXI7XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIG1hdGNoZXIgdGhhdCBjb21iaW5lcyB0aGUgZ2l2ZW4gbWF0Y2hlcnNcbiAgICAgKiAqL1xuICAgIGdldENvbWJpbmVkKG1hdGNoZXJzOiBVcmxNYXRjaGVyW10pOiBVcmxNYXRjaGVyO1xuICAgIC8qKlxuICAgICAqIFNpbWlsYXIgdG8gQW5ndWxhcidzIGRlZmF1bHRVcmxNYXRjaGVyLiBEaWZmZXJlbmNlczpcbiAgICAgKiAtIHRoZSBgcGF0aGAgY29tZXMgZnJvbSBmdW5jdGlvbidzIGFyZ3VtZW50LCBub3QgZnJvbSBgcm91dGUucGF0aGBcbiAgICAgKiAtIHRoZSBlbXB0eSBwYXRoIGAnJ2AgaXMgaGFuZGxlZCBoZXJlLCBidXQgaW4gQW5ndWxhciBpcyBoYW5kbGVkIG9uZSBsZXZlbCBoaWdoZXIgaW4gdGhlIG1hdGNoKCkgZnVuY3Rpb25cbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgZ2V0RnJvbVBhdGgocGF0aD86IHN0cmluZyk6IFVybE1hdGNoZXI7XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBVUkwgbWF0Y2hlciB0aGF0IGFjY2VwdHMgYWxtb3N0IGV2ZXJ5dGhpbmcgKGxpa2UgYCoqYCByb3V0ZSksIGJ1dCBub3QgcGF0aHMgYWNjZXB0ZWQgYnkgdGhlIGdpdmVuIG1hdGNoZXJcbiAgICAgKi9cbiAgICBnZXRPcHBvc2l0ZShvcmlnaW5hbE1hdGNoZXI6IFVybE1hdGNoZXIpOiBVcmxNYXRjaGVyO1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgVVJMIG1hdGNoZXIgZm9yIHRoZSBnaXZlbiBsaXN0IG9mIGdsb2ItbGlrZSBwYXR0ZXJucy4gRWFjaCBwYXR0ZXJuIG11c3Qgc3RhcnQgd2l0aCBgL2Agb3IgYCEvYC5cbiAgICAgKi9cbiAgICBnZXRGcm9tR2xvYihnbG9iUGF0dGVybnM6IHN0cmluZ1tdKTogVXJsTWF0Y2hlcjtcbn1cbiJdfQ==