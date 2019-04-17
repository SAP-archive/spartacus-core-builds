import { HttpRequest, HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../../facade/auth.service';
export declare class ClientErrorHandlingService {
    private authService;
    constructor(authService: AuthService);
    handleExpiredClientToken(request: HttpRequest<any>, next: HttpHandler): Observable<any>;
    private createNewRequestWithNewToken;
}
