import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OccEndpointsService } from '../../../occ/services/occ-endpoints.service';
import { AuthConfig } from '../../config/auth-config';
import { UserToken } from '../../models/token-types.model';
import * as ɵngcc0 from '@angular/core';
export declare class UserAuthenticationTokenService {
    protected http: HttpClient;
    protected config: AuthConfig;
    protected occEndpointsService: OccEndpointsService;
    constructor(http: HttpClient, config: AuthConfig, occEndpointsService: OccEndpointsService);
    loadToken(userId: string, password: string): Observable<UserToken>;
    refreshToken(refreshToken: string): Observable<UserToken>;
    revoke(userToken: UserToken): Observable<{}>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<UserAuthenticationTokenService, never>;
}

//# sourceMappingURL=user-authentication-token.service.d.ts.map