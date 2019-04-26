import { UrlMatcher } from '@angular/router';
export declare class UrlMatcherFactoryService {
    getFalsyUrlMatcher(): UrlMatcher;
    getMultiplePathsUrlMatcher(paths: string[]): UrlMatcher;
    private getPathUrlMatcher;
}
