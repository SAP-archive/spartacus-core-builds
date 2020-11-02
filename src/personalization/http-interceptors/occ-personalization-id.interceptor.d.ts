import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OccEndpointsService } from '../../occ/services/occ-endpoints.service';
import { PersonalizationConfig } from '../config/personalization-config';
import { WindowRef } from '../../window/window-ref';
export declare class OccPersonalizationIdInterceptor implements HttpInterceptor {
    private config;
    private occEndpoints;
    private winRef;
    private platform;
    private personalizationId;
    private requestHeader;
    private enabled;
    constructor(config: PersonalizationConfig, occEndpoints: OccEndpointsService, winRef: WindowRef, platform: any);
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>;
}
