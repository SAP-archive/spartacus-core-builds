import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OccEndpointsService } from '../../../occ/services/occ-endpoints.service';
import { AuthConfig } from '../../config/auth-config';
import { ClientToken } from '../../models/token-types.model';
import * as ɵngcc0 from '@angular/core';
export declare class ClientAuthenticationTokenService {
    protected config: AuthConfig;
    protected http: HttpClient;
    protected occEndpointsService?: OccEndpointsService;
    constructor(config: AuthConfig, http: HttpClient, occEndpointsService: OccEndpointsService);
    /**
     * @deprecated since version 1.1
     * Use constructor(http: HttpClient, config: AuthConfig, occEndpointsService: OccEndpointsService) instead
     */
    constructor(config: AuthConfig, http: HttpClient);
    loadClientAuthenticationToken(): Observable<ClientToken>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ClientAuthenticationTokenService>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<ClientAuthenticationTokenService>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50LWF1dGhlbnRpY2F0aW9uLXRva2VuLnNlcnZpY2UuZC50cyIsInNvdXJjZXMiOlsiY2xpZW50LWF1dGhlbnRpY2F0aW9uLXRva2VuLnNlcnZpY2UuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBS0E7Ozs7Ozs7Ozs7Ozs7QUFXQTsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgT2NjRW5kcG9pbnRzU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL29jYy9zZXJ2aWNlcy9vY2MtZW5kcG9pbnRzLnNlcnZpY2UnO1xuaW1wb3J0IHsgQXV0aENvbmZpZyB9IGZyb20gJy4uLy4uL2NvbmZpZy9hdXRoLWNvbmZpZyc7XG5pbXBvcnQgeyBDbGllbnRUb2tlbiB9IGZyb20gJy4uLy4uL21vZGVscy90b2tlbi10eXBlcy5tb2RlbCc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBDbGllbnRBdXRoZW50aWNhdGlvblRva2VuU2VydmljZSB7XG4gICAgcHJvdGVjdGVkIGNvbmZpZzogQXV0aENvbmZpZztcbiAgICBwcm90ZWN0ZWQgaHR0cDogSHR0cENsaWVudDtcbiAgICBwcm90ZWN0ZWQgb2NjRW5kcG9pbnRzU2VydmljZT86IE9jY0VuZHBvaW50c1NlcnZpY2U7XG4gICAgY29uc3RydWN0b3IoY29uZmlnOiBBdXRoQ29uZmlnLCBodHRwOiBIdHRwQ2xpZW50LCBvY2NFbmRwb2ludHNTZXJ2aWNlOiBPY2NFbmRwb2ludHNTZXJ2aWNlKTtcbiAgICAvKipcbiAgICAgKiBAZGVwcmVjYXRlZCBzaW5jZSB2ZXJzaW9uIDEuMVxuICAgICAqIFVzZSBjb25zdHJ1Y3RvcihodHRwOiBIdHRwQ2xpZW50LCBjb25maWc6IEF1dGhDb25maWcsIG9jY0VuZHBvaW50c1NlcnZpY2U6IE9jY0VuZHBvaW50c1NlcnZpY2UpIGluc3RlYWRcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcihjb25maWc6IEF1dGhDb25maWcsIGh0dHA6IEh0dHBDbGllbnQpO1xuICAgIGxvYWRDbGllbnRBdXRoZW50aWNhdGlvblRva2VuKCk6IE9ic2VydmFibGU8Q2xpZW50VG9rZW4+O1xufVxuIl19