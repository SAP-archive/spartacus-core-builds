import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SmartEditService } from '../services/smart-edit.service';
import * as ɵngcc0 from '@angular/core';
export declare class CmsTicketInterceptor implements HttpInterceptor {
    private service;
    constructor(service: SmartEditService);
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CmsTicketInterceptor, never>;
}

//# sourceMappingURL=cms-ticket.interceptor.d.ts.map