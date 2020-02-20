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

//# sourceMappingURL=client-error-handling.service.d.ts.map