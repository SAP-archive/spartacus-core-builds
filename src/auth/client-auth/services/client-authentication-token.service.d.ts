import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthConfigService } from '../../user-auth/services/auth-config.service';
import { ClientToken } from '../models/client-token.model';
/**
 * Responsible for requesting from OAuth server `ClientToken` for a particular
 * auth client.
 */
export declare class ClientAuthenticationTokenService {
    protected http: HttpClient;
    protected authConfigService: AuthConfigService;
    constructor(http: HttpClient, authConfigService: AuthConfigService);
    /**
     * Loads token with client authentication flow.
     *
     * @returns observable with ClientToken
     */
    loadClientAuthenticationToken(): Observable<ClientToken>;
}
