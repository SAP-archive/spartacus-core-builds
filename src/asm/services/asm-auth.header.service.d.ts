import { HttpRequest } from '@angular/common/http';
import { AuthService } from '../../auth/user-auth/facade/auth.service';
import { AuthHeaderService } from '../../auth/user-auth/services/auth-header.service';
import { AuthStorageService } from '../../auth/user-auth/services/auth-storage.service';
import { OAuthLibWrapperService } from '../../auth/user-auth/services/oauth-lib-wrapper.service';
import { GlobalMessageService } from '../../global-message/facade/global-message.service';
import { OccEndpointsService } from '../../occ/services/occ-endpoints.service';
import { RoutingService } from '../../routing/facade/routing.service';
import { CsAgentAuthService } from '../facade/csagent-auth.service';
/**
 * Overrides `AuthHeaderService` to handle asm calls as well (not only OCC)
 * in cases of normal user session and on customer emulation.
 */
export declare class AsmAuthHeaderService extends AuthHeaderService {
    protected authService: AuthService;
    protected authStorageService: AuthStorageService;
    protected csAgentAuthService: CsAgentAuthService;
    protected oAuthLibWrapperService: OAuthLibWrapperService;
    protected routingService: RoutingService;
    protected globalMessageService: GlobalMessageService;
    protected occEndpointsService: OccEndpointsService;
    constructor(authService: AuthService, authStorageService: AuthStorageService, csAgentAuthService: CsAgentAuthService, oAuthLibWrapperService: OAuthLibWrapperService, routingService: RoutingService, globalMessageService: GlobalMessageService, occEndpointsService: OccEndpointsService);
    /**
     * @override
     *
     * Checks if particular request should be handled by this service.
     */
    shouldCatchError(request: HttpRequest<any>): boolean;
    /**
     * @override
     *
     * Adds `Authorization` header to occ and CS agent requests.
     * For CS agent requests also removes the `cx-use-csagent-token` header (to avoid problems with CORS).
     */
    alterRequest(request: HttpRequest<any>): HttpRequest<any>;
    protected isCSAgentTokenRequest(request: HttpRequest<any>): boolean;
    /**
     * @override
     *
     * On backend errors indicating expired `refresh_token` we need to logout
     * currently logged in user and CS agent.
     */
    handleExpiredRefreshToken(): void;
}
