import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { KymaConfig } from '../../config/kyma-config';
import { OpenIdToken } from '../../models/kyma-token-types.model';
export declare class OpenIdAuthenticationTokenService {
    private config;
    private http;
    constructor(config: KymaConfig, http: HttpClient);
    loadOpenIdAuthenticationToken(username: string, password: string): Observable<OpenIdToken>;
    private getOAuthEndpoint;
}
