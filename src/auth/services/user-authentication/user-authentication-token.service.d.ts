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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1hdXRoZW50aWNhdGlvbi10b2tlbi5zZXJ2aWNlLmQudHMiLCJzb3VyY2VzIjpbInVzZXItYXV0aGVudGljYXRpb24tdG9rZW4uc2VydmljZS5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFLQTs7Ozs7Ozs7Ozs7Ozs7O0FBYUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgT2NjRW5kcG9pbnRzU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL29jYy9zZXJ2aWNlcy9vY2MtZW5kcG9pbnRzLnNlcnZpY2UnO1xuaW1wb3J0IHsgQXV0aENvbmZpZyB9IGZyb20gJy4uLy4uL2NvbmZpZy9hdXRoLWNvbmZpZyc7XG5pbXBvcnQgeyBVc2VyVG9rZW4gfSBmcm9tICcuLi8uLi9tb2RlbHMvdG9rZW4tdHlwZXMubW9kZWwnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgVXNlckF1dGhlbnRpY2F0aW9uVG9rZW5TZXJ2aWNlIHtcbiAgICBwcm90ZWN0ZWQgaHR0cDogSHR0cENsaWVudDtcbiAgICBwcm90ZWN0ZWQgY29uZmlnOiBBdXRoQ29uZmlnO1xuICAgIHByb3RlY3RlZCBvY2NFbmRwb2ludHNTZXJ2aWNlPzogT2NjRW5kcG9pbnRzU2VydmljZTtcbiAgICBjb25zdHJ1Y3RvcihodHRwOiBIdHRwQ2xpZW50LCBjb25maWc6IEF1dGhDb25maWcsIG9jY0VuZHBvaW50c1NlcnZpY2U6IE9jY0VuZHBvaW50c1NlcnZpY2UpO1xuICAgIC8qKlxuICAgICAqIEBkZXByZWNhdGVkIHNpbmNlIHZlcnNpb24gMS4xXG4gICAgICogVXNlIGNvbnN0cnVjdG9yKGh0dHA6IEh0dHBDbGllbnQsIGNvbmZpZzogQXV0aENvbmZpZywgb2NjRW5kcG9pbnRzU2VydmljZTogT2NjRW5kcG9pbnRzU2VydmljZSkgaW5zdGVhZFxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGh0dHA6IEh0dHBDbGllbnQsIGNvbmZpZzogQXV0aENvbmZpZyk7XG4gICAgbG9hZFRva2VuKHVzZXJJZDogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxVc2VyVG9rZW4+O1xuICAgIHJlZnJlc2hUb2tlbihyZWZyZXNoVG9rZW46IHN0cmluZyk6IE9ic2VydmFibGU8VXNlclRva2VuPjtcbiAgICByZXZva2UodXNlclRva2VuOiBVc2VyVG9rZW4pOiBPYnNlcnZhYmxlPHt9Pjtcbn1cbiJdfQ==