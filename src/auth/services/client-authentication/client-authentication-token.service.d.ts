import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OccEndpointsService } from '../../../occ/services/occ-endpoints.service';
import { AuthConfig } from '../../config/auth-config';
import { ClientToken } from '../../models/token-types.model';
import * as ɵngcc0 from '@angular/core';
export declare class ClientAuthenticationTokenService {
    protected config: AuthConfig;
    protected http: HttpClient;
    protected occEndpointsService: OccEndpointsService;
    constructor(config: AuthConfig, http: HttpClient, occEndpointsService: OccEndpointsService);
    loadClientAuthenticationToken(): Observable<ClientToken>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ClientAuthenticationTokenService, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<ClientAuthenticationTokenService>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50LWF1dGhlbnRpY2F0aW9uLXRva2VuLnNlcnZpY2UuZC50cyIsInNvdXJjZXMiOlsiY2xpZW50LWF1dGhlbnRpY2F0aW9uLXRva2VuLnNlcnZpY2UuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBS0E7Ozs7Ozs7O0FBTUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgT2NjRW5kcG9pbnRzU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL29jYy9zZXJ2aWNlcy9vY2MtZW5kcG9pbnRzLnNlcnZpY2UnO1xuaW1wb3J0IHsgQXV0aENvbmZpZyB9IGZyb20gJy4uLy4uL2NvbmZpZy9hdXRoLWNvbmZpZyc7XG5pbXBvcnQgeyBDbGllbnRUb2tlbiB9IGZyb20gJy4uLy4uL21vZGVscy90b2tlbi10eXBlcy5tb2RlbCc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBDbGllbnRBdXRoZW50aWNhdGlvblRva2VuU2VydmljZSB7XG4gICAgcHJvdGVjdGVkIGNvbmZpZzogQXV0aENvbmZpZztcbiAgICBwcm90ZWN0ZWQgaHR0cDogSHR0cENsaWVudDtcbiAgICBwcm90ZWN0ZWQgb2NjRW5kcG9pbnRzU2VydmljZTogT2NjRW5kcG9pbnRzU2VydmljZTtcbiAgICBjb25zdHJ1Y3Rvcihjb25maWc6IEF1dGhDb25maWcsIGh0dHA6IEh0dHBDbGllbnQsIG9jY0VuZHBvaW50c1NlcnZpY2U6IE9jY0VuZHBvaW50c1NlcnZpY2UpO1xuICAgIGxvYWRDbGllbnRBdXRoZW50aWNhdGlvblRva2VuKCk6IE9ic2VydmFibGU8Q2xpZW50VG9rZW4+O1xufVxuIl19