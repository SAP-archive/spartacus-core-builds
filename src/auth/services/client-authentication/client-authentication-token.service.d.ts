import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthConfig } from '../../config/auth-config';
import { ClientToken } from '../../models/token-types.model';
export declare class ClientAuthenticationTokenService {
    private config;
    private http;
    constructor(config: AuthConfig, http: HttpClient);
    loadClientAuthenticationToken(): Observable<ClientToken>;
    private getOAuthEndpoint;
}
