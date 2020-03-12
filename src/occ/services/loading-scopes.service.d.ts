import { OccConfig } from '../config/occ-config';
import * as ɵngcc0 from '@angular/core';
export declare class LoadingScopesService {
    protected config: OccConfig;
    constructor(config: OccConfig);
    /**
     * Aims to expand scopes based on loading scopes config.
     *
     * I.e. if 'details' scope includes 'list' scope by configuration, it'll return ['details', 'list']
     *
     * If scope data overlaps with each other, the data should be merged in the order of scopes provided,
     * i.e. the last scope is merged last, overwriting parts of the data already provided by preceding scope.
     * It should apply also to implicit scopes (that are included by configuration).
     *
     * @param model
     * @param scopes
     */
    expand(model: string, scopes: string[]): string[];
    /**
     * Return maxAge for product scope in milliseconds
     *
     * @param model
     * @param scope
     */
    getMaxAge(model: string, scope: string): number;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<LoadingScopesService>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGluZy1zY29wZXMuc2VydmljZS5kLnRzIiwic291cmNlcyI6WyJsb2FkaW5nLXNjb3Blcy5zZXJ2aWNlLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXVCQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9jY0NvbmZpZyB9IGZyb20gJy4uL2NvbmZpZy9vY2MtY29uZmlnJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIExvYWRpbmdTY29wZXNTZXJ2aWNlIHtcbiAgICBwcm90ZWN0ZWQgY29uZmlnOiBPY2NDb25maWc7XG4gICAgY29uc3RydWN0b3IoY29uZmlnOiBPY2NDb25maWcpO1xuICAgIC8qKlxuICAgICAqIEFpbXMgdG8gZXhwYW5kIHNjb3BlcyBiYXNlZCBvbiBsb2FkaW5nIHNjb3BlcyBjb25maWcuXG4gICAgICpcbiAgICAgKiBJLmUuIGlmICdkZXRhaWxzJyBzY29wZSBpbmNsdWRlcyAnbGlzdCcgc2NvcGUgYnkgY29uZmlndXJhdGlvbiwgaXQnbGwgcmV0dXJuIFsnZGV0YWlscycsICdsaXN0J11cbiAgICAgKlxuICAgICAqIElmIHNjb3BlIGRhdGEgb3ZlcmxhcHMgd2l0aCBlYWNoIG90aGVyLCB0aGUgZGF0YSBzaG91bGQgYmUgbWVyZ2VkIGluIHRoZSBvcmRlciBvZiBzY29wZXMgcHJvdmlkZWQsXG4gICAgICogaS5lLiB0aGUgbGFzdCBzY29wZSBpcyBtZXJnZWQgbGFzdCwgb3ZlcndyaXRpbmcgcGFydHMgb2YgdGhlIGRhdGEgYWxyZWFkeSBwcm92aWRlZCBieSBwcmVjZWRpbmcgc2NvcGUuXG4gICAgICogSXQgc2hvdWxkIGFwcGx5IGFsc28gdG8gaW1wbGljaXQgc2NvcGVzICh0aGF0IGFyZSBpbmNsdWRlZCBieSBjb25maWd1cmF0aW9uKS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBtb2RlbFxuICAgICAqIEBwYXJhbSBzY29wZXNcbiAgICAgKi9cbiAgICBleHBhbmQobW9kZWw6IHN0cmluZywgc2NvcGVzOiBzdHJpbmdbXSk6IHN0cmluZ1tdO1xuICAgIC8qKlxuICAgICAqIFJldHVybiBtYXhBZ2UgZm9yIHByb2R1Y3Qgc2NvcGUgaW4gbWlsbGlzZWNvbmRzXG4gICAgICpcbiAgICAgKiBAcGFyYW0gbW9kZWxcbiAgICAgKiBAcGFyYW0gc2NvcGVcbiAgICAgKi9cbiAgICBnZXRNYXhBZ2UobW9kZWw6IHN0cmluZywgc2NvcGU6IHN0cmluZyk6IG51bWJlcjtcbn1cbiJdfQ==