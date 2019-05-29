import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthConfig } from '../../config/auth-config';
import { OpenIdToken } from '../../models/token-types.model';
export declare class OpenIdAuthenticationTokenService {
    private config;
    private http;
    constructor(config: AuthConfig, http: HttpClient);
    loadOpenIdAuthenticationToken(username: string, password: string): Observable<OpenIdToken>;
    private getOAuthEndpoint;
}
