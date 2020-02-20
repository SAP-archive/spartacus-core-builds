import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OccEndpointsService } from '../../occ/services/occ-endpoints.service';
import { PersonalizationConfig } from '../config/personalization-config';
import { WindowRef } from '../../window/window-ref';
import * as ɵngcc0 from '@angular/core';
export declare class OccPersonalizationTimeInterceptor implements HttpInterceptor {
    private config;
    private occEndpoints;
    private winRef;
    private platform;
    private timestamp;
    private requestHeader;
    private enabled;
    constructor(config: PersonalizationConfig, occEndpoints: OccEndpointsService, winRef: WindowRef, platform: any);
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<OccPersonalizationTimeInterceptor>;
}

//# sourceMappingURL=occ-personalization-time.interceptor.d.ts.map