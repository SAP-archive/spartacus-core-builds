import { HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GlobalMessageService } from '../../../global-message/facade/global-message.service';
import { OccEndpointsService } from '../../../occ/services/occ-endpoints.service';
import { RoutingService } from '../../../routing/facade/routing.service';
import { AuthService } from '../facade/auth.service';
import { AuthToken } from '../models/auth-token.model';
import { AuthStorageService } from './auth-storage.service';
import { OAuthLibWrapperService } from './oauth-lib-wrapper.service';
/**
 * Extendable service for `AuthInterceptor`.
 */
import * as ɵngcc0 from '@angular/core';
export declare class AuthHeaderService {
    protected authService: AuthService;
    protected authStorageService: AuthStorageService;
    protected oAuthLibWrapperService: OAuthLibWrapperService;
    protected routingService: RoutingService;
    protected occEndpoints: OccEndpointsService;
    protected globalMessageService: GlobalMessageService;
    constructor(authService: AuthService, authStorageService: AuthStorageService, oAuthLibWrapperService: OAuthLibWrapperService, routingService: RoutingService, occEndpoints: OccEndpointsService, globalMessageService: GlobalMessageService);
    /**
     * Checks if request should be handled by this service (if it's OCC call).
     */
    shouldCatchError(request: HttpRequest<any>): boolean;
    /**
     * Adds `Authorization` header for OCC calls.
     */
    alterRequest(request: HttpRequest<any>): HttpRequest<any>;
    protected isOccUrl(url: string): boolean;
    protected getAuthorizationHeader(request: HttpRequest<any>): string;
    protected createAuthorizationHeader(): {
        Authorization?: string;
    };
    /**
     * Refreshes access_token and then retries the call with the new token.
     */
    handleExpiredAccessToken(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<AuthToken>>;
    /**
     * Logout user, redirected to login page and informs about expired session.
     */
    handleExpiredRefreshToken(): void;
    /**
     * Attempts to refresh token if possible.
     * If it is not possible calls `handleExpiredRefreshToken`.
     *
     * @return observable which omits new access_token. (Warn: might never emit!).
     */
    protected handleExpiredToken(): Observable<AuthToken>;
    protected createNewRequestWithNewToken(request: HttpRequest<any>, token: AuthToken): HttpRequest<any>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<AuthHeaderService, never>;
}

//# sourceMappingURL=auth-header.service.d.ts.map