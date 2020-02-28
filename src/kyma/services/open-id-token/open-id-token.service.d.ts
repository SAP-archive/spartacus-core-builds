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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<OpenIdAuthenticationTokenService>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<OpenIdAuthenticationTokenService>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3Blbi1pZC10b2tlbi5zZXJ2aWNlLmQudHMiLCJzb3VyY2VzIjpbIm9wZW4taWQtdG9rZW4uc2VydmljZS5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7OztBQUlBOzs7Ozs7OztBQU1BOyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBLeW1hQ29uZmlnIH0gZnJvbSAnLi4vLi4vY29uZmlnL2t5bWEtY29uZmlnJztcbmltcG9ydCB7IE9wZW5JZFRva2VuIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2t5bWEtdG9rZW4tdHlwZXMubW9kZWwnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgT3BlbklkQXV0aGVudGljYXRpb25Ub2tlblNlcnZpY2Uge1xuICAgIHByaXZhdGUgY29uZmlnO1xuICAgIHByaXZhdGUgaHR0cDtcbiAgICBjb25zdHJ1Y3Rvcihjb25maWc6IEt5bWFDb25maWcsIGh0dHA6IEh0dHBDbGllbnQpO1xuICAgIGxvYWRPcGVuSWRBdXRoZW50aWNhdGlvblRva2VuKHVzZXJuYW1lOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPE9wZW5JZFRva2VuPjtcbiAgICBwcml2YXRlIGdldE9BdXRoRW5kcG9pbnQ7XG59XG4iXX0=