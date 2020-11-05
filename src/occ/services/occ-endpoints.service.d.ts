import { BaseSiteService } from '../../site-context/facade/base-site.service';
import { OccConfig } from '../config/occ-config';
import * as ɵngcc0 from '@angular/core';
export declare class OccEndpointsService {
    private config;
    private baseSiteService;
    private _activeBaseSite;
    private get activeBaseSite();
    constructor(config: OccConfig, baseSiteService: BaseSiteService);
    /**
     * Returns an endpoint starting from the OCC baseUrl (no baseSite)
     * @param endpoint Endpoint suffix
     */
    getRawEndpoint(endpoint: string): string;
    /**
     * Returns an endpoint starting from the OCC prefix (no baseSite), i.e. /occ/v2/{endpoint}
     * Most OCC endpoints are related to a baseSite context and are therefor prefixed
     * with the baseSite. The `/basesites` endpoint does not relate to a specific baseSite
     * as it will load all baseSites.
     *
     * @param endpoint Endpoint suffix
     */
    getOccEndpoint(endpoint: string): string;
    /**
     * Returns base OCC endpoint (baseUrl + prefix + baseSite)
     */
    getBaseEndpoint(): string;
    /**
     * Returns an OCC endpoint including baseUrl and baseSite
     * @param endpoint Endpoint suffix
     */
    getEndpoint(endpoint: string): string;
    /**
     * Returns a fully qualified OCC Url (including baseUrl and baseSite)
     * @param endpoint Name of the OCC endpoint key config
     * @param urlParams  URL parameters
     * @param queryParams Query parameters
     * @param scope
     */
    getUrl(endpoint: string, urlParams?: object, queryParams?: object, scope?: string): string;
    private getEndpointForScope;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<OccEndpointsService, [null, { optional: true; }]>;
}

//# sourceMappingURL=occ-endpoints.service.d.ts.map