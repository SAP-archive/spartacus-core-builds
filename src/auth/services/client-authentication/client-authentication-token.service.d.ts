import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OccEndpointsService } from '../../../occ/services/occ-endpoints.service';
import { AuthConfig } from '../../config/auth-config';
import { ClientToken } from '../../models/token-types.model';
export declare class ClientAuthenticationTokenService {
    protected config: AuthConfig;
    protected http: HttpClient;
    protected occEndpointsService: OccEndpointsService;
    constructor(config: AuthConfig, http: HttpClient, occEndpointsService: OccEndpointsService);
    loadClientAuthenticationToken(): Observable<ClientToken>;
}
