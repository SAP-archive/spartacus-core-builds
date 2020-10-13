import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { KymaConfig } from '../../config/kyma-config';
import { OpenIdToken } from '../../models/kyma-token-types.model';
import * as ɵngcc0 from '@angular/core';
export declare class OpenIdAuthenticationTokenService {
    private config;
    private http;
    constructor(config: KymaConfig, http: HttpClient);
    loadOpenIdAuthenticationToken(username: string, password: string): Observable<OpenIdToken>;
    private getOAuthEndpoint;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<OpenIdAuthenticationTokenService, never>;
}

//# sourceMappingURL=open-id-token.service.d.ts.map