import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OccEndpointsService } from '../../../occ/services/occ-endpoints.service';
import { AuthConfig } from '../../config/auth-config';
import { UserToken } from '../../models/token-types.model';
import * as ɵngcc0 from '@angular/core';
export declare class UserAuthenticationTokenService {
    protected http: HttpClient;
    protected config: AuthConfig;
    protected occEndpointsService?: OccEndpointsService;
    constructor(http: HttpClient, config: AuthConfig, occEndpointsService: OccEndpointsService);
    /**
     * @deprecated since version 1.1
     * Use constructor(http: HttpClient, config: AuthConfig, occEndpointsService: OccEndpointsService) instead
     */
    constructor(http: HttpClient, config: AuthConfig);
    loadToken(userId: string, password: string): Observable<UserToken>;
    refreshToken(refreshToken: string): Observable<UserToken>;
    revoke(userToken: UserToken): Observable<{}>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<UserAuthenticationTokenService>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<UserAuthenticationTokenService>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1hdXRoZW50aWNhdGlvbi10b2tlbi5zZXJ2aWNlLmQudHMiLCJzb3VyY2VzIjpbInVzZXItYXV0aGVudGljYXRpb24tdG9rZW4uc2VydmljZS5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFLQTs7Ozs7Ozs7Ozs7Ozs7O0FBYUE7Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IE9jY0VuZHBvaW50c1NlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9vY2Mvc2VydmljZXMvb2NjLWVuZHBvaW50cy5zZXJ2aWNlJztcbmltcG9ydCB7IEF1dGhDb25maWcgfSBmcm9tICcuLi8uLi9jb25maWcvYXV0aC1jb25maWcnO1xuaW1wb3J0IHsgVXNlclRva2VuIH0gZnJvbSAnLi4vLi4vbW9kZWxzL3Rva2VuLXR5cGVzLm1vZGVsJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIFVzZXJBdXRoZW50aWNhdGlvblRva2VuU2VydmljZSB7XG4gICAgcHJvdGVjdGVkIGh0dHA6IEh0dHBDbGllbnQ7XG4gICAgcHJvdGVjdGVkIGNvbmZpZzogQXV0aENvbmZpZztcbiAgICBwcm90ZWN0ZWQgb2NjRW5kcG9pbnRzU2VydmljZT86IE9jY0VuZHBvaW50c1NlcnZpY2U7XG4gICAgY29uc3RydWN0b3IoaHR0cDogSHR0cENsaWVudCwgY29uZmlnOiBBdXRoQ29uZmlnLCBvY2NFbmRwb2ludHNTZXJ2aWNlOiBPY2NFbmRwb2ludHNTZXJ2aWNlKTtcbiAgICAvKipcbiAgICAgKiBAZGVwcmVjYXRlZCBzaW5jZSB2ZXJzaW9uIDEuMVxuICAgICAqIFVzZSBjb25zdHJ1Y3RvcihodHRwOiBIdHRwQ2xpZW50LCBjb25maWc6IEF1dGhDb25maWcsIG9jY0VuZHBvaW50c1NlcnZpY2U6IE9jY0VuZHBvaW50c1NlcnZpY2UpIGluc3RlYWRcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihodHRwOiBIdHRwQ2xpZW50LCBjb25maWc6IEF1dGhDb25maWcpO1xuICAgIGxvYWRUb2tlbih1c2VySWQ6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZyk6IE9ic2VydmFibGU8VXNlclRva2VuPjtcbiAgICByZWZyZXNoVG9rZW4ocmVmcmVzaFRva2VuOiBzdHJpbmcpOiBPYnNlcnZhYmxlPFVzZXJUb2tlbj47XG4gICAgcmV2b2tlKHVzZXJUb2tlbjogVXNlclRva2VuKTogT2JzZXJ2YWJsZTx7fT47XG59XG4iXX0=