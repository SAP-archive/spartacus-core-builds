import { HttpRequest, HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../../facade/auth.service';
import { ClientToken } from '../../models/token-types.model';
import * as ɵngcc0 from '@angular/core';
export declare class ClientErrorHandlingService {
    protected authService: AuthService;
    constructor(authService: AuthService);
    handleExpiredClientToken(request: HttpRequest<any>, next: HttpHandler): Observable<any>;
    protected createNewRequestWithNewToken(request: HttpRequest<any>, token: ClientToken): HttpRequest<any>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ClientErrorHandlingService, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50LWVycm9yLWhhbmRsaW5nLnNlcnZpY2UuZC50cyIsInNvdXJjZXMiOlsiY2xpZW50LWVycm9yLWhhbmRsaW5nLnNlcnZpY2UuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7QUFJQTs7Ozs7O0FBS0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwUmVxdWVzdCwgSHR0cEhhbmRsZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4uLy4uL2ZhY2FkZS9hdXRoLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ2xpZW50VG9rZW4gfSBmcm9tICcuLi8uLi9tb2RlbHMvdG9rZW4tdHlwZXMubW9kZWwnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgQ2xpZW50RXJyb3JIYW5kbGluZ1NlcnZpY2Uge1xuICAgIHByb3RlY3RlZCBhdXRoU2VydmljZTogQXV0aFNlcnZpY2U7XG4gICAgY29uc3RydWN0b3IoYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlKTtcbiAgICBoYW5kbGVFeHBpcmVkQ2xpZW50VG9rZW4ocmVxdWVzdDogSHR0cFJlcXVlc3Q8YW55PiwgbmV4dDogSHR0cEhhbmRsZXIpOiBPYnNlcnZhYmxlPGFueT47XG4gICAgcHJvdGVjdGVkIGNyZWF0ZU5ld1JlcXVlc3RXaXRoTmV3VG9rZW4ocmVxdWVzdDogSHR0cFJlcXVlc3Q8YW55PiwgdG9rZW46IENsaWVudFRva2VuKTogSHR0cFJlcXVlc3Q8YW55Pjtcbn1cbiJdfQ==