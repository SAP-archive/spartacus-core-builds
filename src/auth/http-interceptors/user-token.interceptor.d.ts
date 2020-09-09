import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OccEndpointsService } from '../../occ/services/occ-endpoints.service';
import { AuthService } from '../facade/auth.service';
export declare class UserTokenInterceptor implements HttpInterceptor {
    private authService;
    private occEndpoints;
    constructor(authService: AuthService, occEndpoints: OccEndpointsService);
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>;
    private isOccUrl;
}
