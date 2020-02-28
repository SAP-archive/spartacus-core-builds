import { HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RoutingService } from '../../../routing/facade/routing.service';
import { AuthService } from '../../facade/auth.service';
import { UserToken } from '../../models/token-types.model';
import * as ɵngcc0 from '@angular/core';
export declare class UserErrorHandlingService {
    protected authService: AuthService;
    protected routingService: RoutingService;
    constructor(authService: AuthService, routingService: RoutingService);
    handleExpiredUserToken(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<UserToken>>;
    handleExpiredRefreshToken(): void;
    protected handleExpiredToken(): Observable<UserToken>;
    protected createNewRequestWithNewToken(request: HttpRequest<any>, token: UserToken): HttpRequest<any>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<UserErrorHandlingService>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<UserErrorHandlingService>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1lcnJvci1oYW5kbGluZy5zZXJ2aWNlLmQudHMiLCJzb3VyY2VzIjpbInVzZXItZXJyb3ItaGFuZGxpbmcuc2VydmljZS5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFLQTs7Ozs7Ozs7OztBQVFBOyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBFdmVudCwgSHR0cEhhbmRsZXIsIEh0dHBSZXF1ZXN0IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgUm91dGluZ1NlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9yb3V0aW5nL2ZhY2FkZS9yb3V0aW5nLnNlcnZpY2UnO1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuLi8uLi9mYWNhZGUvYXV0aC5zZXJ2aWNlJztcbmltcG9ydCB7IFVzZXJUb2tlbiB9IGZyb20gJy4uLy4uL21vZGVscy90b2tlbi10eXBlcy5tb2RlbCc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBVc2VyRXJyb3JIYW5kbGluZ1NlcnZpY2Uge1xuICAgIHByb3RlY3RlZCBhdXRoU2VydmljZTogQXV0aFNlcnZpY2U7XG4gICAgcHJvdGVjdGVkIHJvdXRpbmdTZXJ2aWNlOiBSb3V0aW5nU2VydmljZTtcbiAgICBjb25zdHJ1Y3RvcihhdXRoU2VydmljZTogQXV0aFNlcnZpY2UsIHJvdXRpbmdTZXJ2aWNlOiBSb3V0aW5nU2VydmljZSk7XG4gICAgaGFuZGxlRXhwaXJlZFVzZXJUb2tlbihyZXF1ZXN0OiBIdHRwUmVxdWVzdDxhbnk+LCBuZXh0OiBIdHRwSGFuZGxlcik6IE9ic2VydmFibGU8SHR0cEV2ZW50PFVzZXJUb2tlbj4+O1xuICAgIGhhbmRsZUV4cGlyZWRSZWZyZXNoVG9rZW4oKTogdm9pZDtcbiAgICBwcm90ZWN0ZWQgaGFuZGxlRXhwaXJlZFRva2VuKCk6IE9ic2VydmFibGU8VXNlclRva2VuPjtcbiAgICBwcm90ZWN0ZWQgY3JlYXRlTmV3UmVxdWVzdFdpdGhOZXdUb2tlbihyZXF1ZXN0OiBIdHRwUmVxdWVzdDxhbnk+LCB0b2tlbjogVXNlclRva2VuKTogSHR0cFJlcXVlc3Q8YW55Pjtcbn1cbiJdfQ==