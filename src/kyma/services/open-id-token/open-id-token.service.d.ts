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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3Blbi1pZC10b2tlbi5zZXJ2aWNlLmQudHMiLCJzb3VyY2VzIjpbIm9wZW4taWQtdG9rZW4uc2VydmljZS5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7OztBQUlBOzs7Ozs7OztBQU1BIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEt5bWFDb25maWcgfSBmcm9tICcuLi8uLi9jb25maWcva3ltYS1jb25maWcnO1xuaW1wb3J0IHsgT3BlbklkVG9rZW4gfSBmcm9tICcuLi8uLi9tb2RlbHMva3ltYS10b2tlbi10eXBlcy5tb2RlbCc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBPcGVuSWRBdXRoZW50aWNhdGlvblRva2VuU2VydmljZSB7XG4gICAgcHJpdmF0ZSBjb25maWc7XG4gICAgcHJpdmF0ZSBodHRwO1xuICAgIGNvbnN0cnVjdG9yKGNvbmZpZzogS3ltYUNvbmZpZywgaHR0cDogSHR0cENsaWVudCk7XG4gICAgbG9hZE9wZW5JZEF1dGhlbnRpY2F0aW9uVG9rZW4odXNlcm5hbWU6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZyk6IE9ic2VydmFibGU8T3BlbklkVG9rZW4+O1xuICAgIHByaXZhdGUgZ2V0T0F1dGhFbmRwb2ludDtcbn1cbiJdfQ==