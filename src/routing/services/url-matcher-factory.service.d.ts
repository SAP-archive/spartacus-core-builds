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

//# sourceMappingURL=url-matcher-factory.service.d.ts.map