import { HttpInterceptor, HttpHandler, HttpEvent, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../facade/auth.service';
import { UserToken } from '../../auth/models/token-types.model';
import { OccEndpointsService } from '../../occ/services/occ-endpoints.service';
export declare class UserTokenInterceptor implements HttpInterceptor {
    private authService;
    private occEndpoints;
    userToken: UserToken;
    constructor(authService: AuthService, occEndpoints: OccEndpointsService);
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>;
    private isOccUrl;
}
