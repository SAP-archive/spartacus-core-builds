import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OccEndpointsService } from '../../occ/services/occ-endpoints.service';
import { AuthService } from '../facade/auth.service';
import * as ɵngcc0 from '@angular/core';
export declare class UserTokenInterceptor implements HttpInterceptor {
    private authService;
    private occEndpoints;
    constructor(authService: AuthService, occEndpoints: OccEndpointsService);
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>;
    private isOccUrl;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<UserTokenInterceptor>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci10b2tlbi5pbnRlcmNlcHRvci5kLnRzIiwic291cmNlcyI6WyJ1c2VyLXRva2VuLmludGVyY2VwdG9yLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O0FBSUE7Ozs7Ozs7QUFNQTsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwRXZlbnQsIEh0dHBIYW5kbGVyLCBIdHRwSW50ZXJjZXB0b3IsIEh0dHBSZXF1ZXN0IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgT2NjRW5kcG9pbnRzU2VydmljZSB9IGZyb20gJy4uLy4uL29jYy9zZXJ2aWNlcy9vY2MtZW5kcG9pbnRzLnNlcnZpY2UnO1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuLi9mYWNhZGUvYXV0aC5zZXJ2aWNlJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIFVzZXJUb2tlbkludGVyY2VwdG9yIGltcGxlbWVudHMgSHR0cEludGVyY2VwdG9yIHtcbiAgICBwcml2YXRlIGF1dGhTZXJ2aWNlO1xuICAgIHByaXZhdGUgb2NjRW5kcG9pbnRzO1xuICAgIGNvbnN0cnVjdG9yKGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSwgb2NjRW5kcG9pbnRzOiBPY2NFbmRwb2ludHNTZXJ2aWNlKTtcbiAgICBpbnRlcmNlcHQocmVxdWVzdDogSHR0cFJlcXVlc3Q8YW55PiwgbmV4dDogSHR0cEhhbmRsZXIpOiBPYnNlcnZhYmxlPEh0dHBFdmVudDxhbnk+PjtcbiAgICBwcml2YXRlIGlzT2NjVXJsO1xufVxuIl19