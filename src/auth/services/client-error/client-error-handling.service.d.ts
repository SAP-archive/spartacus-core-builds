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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ClientErrorHandlingService>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<ClientErrorHandlingService>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50LWVycm9yLWhhbmRsaW5nLnNlcnZpY2UuZC50cyIsInNvdXJjZXMiOlsiY2xpZW50LWVycm9yLWhhbmRsaW5nLnNlcnZpY2UuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7QUFJQTs7Ozs7OztBQUtBOyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBSZXF1ZXN0LCBIdHRwSGFuZGxlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vZmFjYWRlL2F1dGguc2VydmljZSc7XG5pbXBvcnQgeyBDbGllbnRUb2tlbiB9IGZyb20gJy4uLy4uL21vZGVscy90b2tlbi10eXBlcy5tb2RlbCc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBDbGllbnRFcnJvckhhbmRsaW5nU2VydmljZSB7XG4gICAgcHJvdGVjdGVkIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZTtcbiAgICBjb25zdHJ1Y3RvcihhdXRoU2VydmljZTogQXV0aFNlcnZpY2UpO1xuICAgIGhhbmRsZUV4cGlyZWRDbGllbnRUb2tlbihyZXF1ZXN0OiBIdHRwUmVxdWVzdDxhbnk+LCBuZXh0OiBIdHRwSGFuZGxlcik6IE9ic2VydmFibGU8YW55PjtcbiAgICBwcm90ZWN0ZWQgY3JlYXRlTmV3UmVxdWVzdFdpdGhOZXdUb2tlbihyZXF1ZXN0OiBIdHRwUmVxdWVzdDxhbnk+LCB0b2tlbjogQ2xpZW50VG9rZW4pOiBIdHRwUmVxdWVzdDxhbnk+O1xufVxuIl19