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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3Blbi1pZC10b2tlbi5zZXJ2aWNlLmQudHMiLCJzb3VyY2VzIjpbIm9wZW4taWQtdG9rZW4uc2VydmljZS5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7OztBQUlBOzs7Ozs7O0FBTUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgS3ltYUNvbmZpZyB9IGZyb20gJy4uLy4uL2NvbmZpZy9reW1hLWNvbmZpZyc7XG5pbXBvcnQgeyBPcGVuSWRUb2tlbiB9IGZyb20gJy4uLy4uL21vZGVscy9reW1hLXRva2VuLXR5cGVzLm1vZGVsJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIE9wZW5JZEF1dGhlbnRpY2F0aW9uVG9rZW5TZXJ2aWNlIHtcbiAgICBwcml2YXRlIGNvbmZpZztcbiAgICBwcml2YXRlIGh0dHA7XG4gICAgY29uc3RydWN0b3IoY29uZmlnOiBLeW1hQ29uZmlnLCBodHRwOiBIdHRwQ2xpZW50KTtcbiAgICBsb2FkT3BlbklkQXV0aGVudGljYXRpb25Ub2tlbih1c2VybmFtZTogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxPcGVuSWRUb2tlbj47XG4gICAgcHJpdmF0ZSBnZXRPQXV0aEVuZHBvaW50O1xufVxuIl19