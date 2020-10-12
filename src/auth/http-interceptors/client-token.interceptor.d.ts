import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../facade/auth.service';
import { OccEndpointsService } from '../../occ/services/occ-endpoints.service';
import * as ɵngcc0 from '@angular/core';
export declare class ClientTokenInterceptor implements HttpInterceptor {
    private authService;
    private occEndpoints;
    constructor(authService: AuthService, occEndpoints: OccEndpointsService);
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>;
    private getClientToken;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ClientTokenInterceptor, never>;
}

//# sourceMappingURL=client-token.interceptor.d.ts.map