import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../../auth/index';
import { OccEndpointsService } from '../../occ/index';
import { AnonymousConsentsConfig } from '../config/anonymous-consents-config';
import { AnonymousConsentsService } from '../facade/anonymous-consents.service';
import * as ɵngcc0 from '@angular/core';
export declare class AnonymousConsentsInterceptor implements HttpInterceptor {
    private anonymousConsentsService;
    private authService;
    private occEndpoints;
    private config;
    constructor(anonymousConsentsService: AnonymousConsentsService, authService: AuthService, occEndpoints: OccEndpointsService, config: AnonymousConsentsConfig);
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>;
    private handleResponse;
    private handleRequest;
    private isOccUrl;
    private giveRequiredConsents;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<AnonymousConsentsInterceptor, never>;
}

//# sourceMappingURL=anonymous-consents-interceptor.d.ts.map