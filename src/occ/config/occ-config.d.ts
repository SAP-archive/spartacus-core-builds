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

//# sourceMappingURL=occ-config.d.ts.map