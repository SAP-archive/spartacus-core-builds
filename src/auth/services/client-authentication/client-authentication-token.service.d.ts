import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OccEndpointsService } from '../../../occ/services/occ-endpoints.service';
import { AuthConfig } from '../../config/auth-config';
import { ClientToken } from '../../models/token-types.model';
import * as ɵngcc0 from '@angular/core';
export declare class ClientAuthenticationTokenService {
    protected config: AuthConfig;
    protected http: HttpClient;
    protected occEndpointsService?: OccEndpointsService;
    constructor(config: AuthConfig, http: HttpClient, occEndpointsService: OccEndpointsService);
    /**
     * @deprecated since version 1.1
     * Use constructor(http: HttpClient, config: AuthConfig, occEndpointsService: OccEndpointsService) instead
     */
    constructor(config: AuthConfig, http: HttpClient);
    loadClientAuthenticationToken(): Observable<ClientToken>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ClientAuthenticationTokenService>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<ClientAuthenticationTokenService>;
}

//# sourceMappingURL=client-authentication-token.service.d.ts.map