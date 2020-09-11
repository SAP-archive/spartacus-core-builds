import { SiteContextConfig } from '../../site-context/config/site-context-config';
import { OccEndpoints } from '../occ-models/occ-endpoints.model';
import { LoadingScopes } from './loading-scopes-config';
import * as ɵngcc0 from '@angular/core';
export declare abstract class OccConfig extends SiteContextConfig {
    backend?: {
        occ?: {
            baseUrl?: string;
            prefix?: string;
            /**
             * Indicates whether or not cross-site Access-Control requests should be made
             * using credentials such as cookies, authorization headers or TLS client certificates
             */
            useWithCredentials?: boolean;
            endpoints?: OccEndpoints;
            legacy?: boolean;
        };
        media?: {
            /**
             * Media URLs are typically relative, so that the host can be configured.
             * Configurable media baseURLs are useful for SEO, multi-site,
             * switching environments, etc.
             */
            baseUrl?: string;
        };
        loadingScopes?: LoadingScopes;
    };
    static ɵfac: ɵngcc0.ɵɵFactoryDef<OccConfig, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLWNvbmZpZy5kLnRzIiwic291cmNlcyI6WyJvY2MtY29uZmlnLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7QUFHQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBdUJBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2l0ZUNvbnRleHRDb25maWcgfSBmcm9tICcuLi8uLi9zaXRlLWNvbnRleHQvY29uZmlnL3NpdGUtY29udGV4dC1jb25maWcnO1xuaW1wb3J0IHsgT2NjRW5kcG9pbnRzIH0gZnJvbSAnLi4vb2NjLW1vZGVscy9vY2MtZW5kcG9pbnRzLm1vZGVsJztcbmltcG9ydCB7IExvYWRpbmdTY29wZXMgfSBmcm9tICcuL2xvYWRpbmctc2NvcGVzLWNvbmZpZyc7XG5leHBvcnQgZGVjbGFyZSBhYnN0cmFjdCBjbGFzcyBPY2NDb25maWcgZXh0ZW5kcyBTaXRlQ29udGV4dENvbmZpZyB7XG4gICAgYmFja2VuZD86IHtcbiAgICAgICAgb2NjPzoge1xuICAgICAgICAgICAgYmFzZVVybD86IHN0cmluZztcbiAgICAgICAgICAgIHByZWZpeD86IHN0cmluZztcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogSW5kaWNhdGVzIHdoZXRoZXIgb3Igbm90IGNyb3NzLXNpdGUgQWNjZXNzLUNvbnRyb2wgcmVxdWVzdHMgc2hvdWxkIGJlIG1hZGVcbiAgICAgICAgICAgICAqIHVzaW5nIGNyZWRlbnRpYWxzIHN1Y2ggYXMgY29va2llcywgYXV0aG9yaXphdGlvbiBoZWFkZXJzIG9yIFRMUyBjbGllbnQgY2VydGlmaWNhdGVzXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHVzZVdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XG4gICAgICAgICAgICBlbmRwb2ludHM/OiBPY2NFbmRwb2ludHM7XG4gICAgICAgICAgICBsZWdhY3k/OiBib29sZWFuO1xuICAgICAgICB9O1xuICAgICAgICBtZWRpYT86IHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogTWVkaWEgVVJMcyBhcmUgdHlwaWNhbGx5IHJlbGF0aXZlLCBzbyB0aGF0IHRoZSBob3N0IGNhbiBiZSBjb25maWd1cmVkLlxuICAgICAgICAgICAgICogQ29uZmlndXJhYmxlIG1lZGlhIGJhc2VVUkxzIGFyZSB1c2VmdWwgZm9yIFNFTywgbXVsdGktc2l0ZSxcbiAgICAgICAgICAgICAqIHN3aXRjaGluZyBlbnZpcm9ubWVudHMsIGV0Yy5cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgYmFzZVVybD86IHN0cmluZztcbiAgICAgICAgfTtcbiAgICAgICAgbG9hZGluZ1Njb3Blcz86IExvYWRpbmdTY29wZXM7XG4gICAgfTtcbn1cbiJdfQ==