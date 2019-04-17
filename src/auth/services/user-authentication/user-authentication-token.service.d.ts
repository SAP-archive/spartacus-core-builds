import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthConfig } from '../../config/auth-config';
import { UserToken } from '../../models/token-types.model';
export declare class UserAuthenticationTokenService {
    private http;
    private config;
    constructor(http: HttpClient, config: AuthConfig);
    loadToken(userId: string, password: string): Observable<UserToken>;
    refreshToken(refreshToken: string): Observable<UserToken>;
    protected getOAuthEndpoint(): string;
}
