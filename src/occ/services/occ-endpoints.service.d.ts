import { BaseSiteService } from '../../site-context/facade/base-site.service';
import { OccConfig } from '../config/occ-config';
import * as ɵngcc0 from '@angular/core';
export declare class OccEndpointsService {
    private config;
    private baseSiteService;
    private activeBaseSite;
    private readonly SCOPE_SUFFIX;
    constructor(config: OccConfig, baseSiteService: BaseSiteService);
    /**
     * Returns and endpoint starting from the OCC baseUrl (no baseSite)
     * @param endpoint Endpoint suffix
     */
    getRawEndpoint(endpoint: string): string;
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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<OccEndpointsService>;
}

//# sourceMappingURL=occ-endpoints.service.d.ts.map