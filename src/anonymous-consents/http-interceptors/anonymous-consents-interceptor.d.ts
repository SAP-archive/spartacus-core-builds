import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../../auth/index';
import { OccEndpointsService } from '../../occ/index';
import { AnonymousConsentsConfig } from '../config/anonymous-consents-config';
import { AnonymousConsentsService } from '../facade/anonymous-consents.service';
import * as ɵngcc0 from '@angular/core';
export declare const ANONYMOUS_CONSENTS_HEADER = "X-Anonymous-Consents";
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5vbnltb3VzLWNvbnNlbnRzLWludGVyY2VwdG9yLmQudHMiLCJzb3VyY2VzIjpbImFub255bW91cy1jb25zZW50cy1pbnRlcmNlcHRvci5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBTUE7Ozs7Ozs7Ozs7Ozs7QUFZQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBFdmVudCwgSHR0cEhhbmRsZXIsIEh0dHBJbnRlcmNlcHRvciwgSHR0cFJlcXVlc3QgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4uLy4uL2F1dGgvaW5kZXgnO1xuaW1wb3J0IHsgT2NjRW5kcG9pbnRzU2VydmljZSB9IGZyb20gJy4uLy4uL29jYy9pbmRleCc7XG5pbXBvcnQgeyBBbm9ueW1vdXNDb25zZW50c0NvbmZpZyB9IGZyb20gJy4uL2NvbmZpZy9hbm9ueW1vdXMtY29uc2VudHMtY29uZmlnJztcbmltcG9ydCB7IEFub255bW91c0NvbnNlbnRzU2VydmljZSB9IGZyb20gJy4uL2ZhY2FkZS9hbm9ueW1vdXMtY29uc2VudHMuc2VydmljZSc7XG5leHBvcnQgZGVjbGFyZSBjb25zdCBBTk9OWU1PVVNfQ09OU0VOVFNfSEVBREVSID0gXCJYLUFub255bW91cy1Db25zZW50c1wiO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgQW5vbnltb3VzQ29uc2VudHNJbnRlcmNlcHRvciBpbXBsZW1lbnRzIEh0dHBJbnRlcmNlcHRvciB7XG4gICAgcHJpdmF0ZSBhbm9ueW1vdXNDb25zZW50c1NlcnZpY2U7XG4gICAgcHJpdmF0ZSBhdXRoU2VydmljZTtcbiAgICBwcml2YXRlIG9jY0VuZHBvaW50cztcbiAgICBwcml2YXRlIGNvbmZpZztcbiAgICBjb25zdHJ1Y3Rvcihhbm9ueW1vdXNDb25zZW50c1NlcnZpY2U6IEFub255bW91c0NvbnNlbnRzU2VydmljZSwgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLCBvY2NFbmRwb2ludHM6IE9jY0VuZHBvaW50c1NlcnZpY2UsIGNvbmZpZzogQW5vbnltb3VzQ29uc2VudHNDb25maWcpO1xuICAgIGludGVyY2VwdChyZXF1ZXN0OiBIdHRwUmVxdWVzdDxhbnk+LCBuZXh0OiBIdHRwSGFuZGxlcik6IE9ic2VydmFibGU8SHR0cEV2ZW50PGFueT4+O1xuICAgIHByaXZhdGUgaGFuZGxlUmVzcG9uc2U7XG4gICAgcHJpdmF0ZSBoYW5kbGVSZXF1ZXN0O1xuICAgIHByaXZhdGUgaXNPY2NVcmw7XG4gICAgcHJpdmF0ZSBnaXZlUmVxdWlyZWRDb25zZW50cztcbn1cbiJdfQ==