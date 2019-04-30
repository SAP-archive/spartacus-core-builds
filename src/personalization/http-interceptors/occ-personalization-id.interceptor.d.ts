import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OccEndpointsService } from '../../occ/services/occ-endpoints.service';
import { PersonalizationConfig } from '../config/personalization-config';
import { WindowRef } from '../../window/window-ref';
export declare class OccPersonalizationIdInterceptor implements HttpInterceptor {
    private config;
    private occEndpoints;
    private winRef;
    private personalizationId;
    private requestHeader;
    constructor(config: PersonalizationConfig, occEndpoints: OccEndpointsService, winRef: WindowRef);
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>;
}
