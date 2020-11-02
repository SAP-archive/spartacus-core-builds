import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { RoutingService } from '../../../routing/facade/routing.service';
import { StateWithClientAuth } from '../../client-auth/store/client-auth-state';
import { UserIdService } from '../facade/user-id.service';
import { AuthRedirectService } from './auth-redirect.service';
import { AuthStorageService } from './auth-storage.service';
import { OAuthLibWrapperService } from './oauth-lib-wrapper.service';
/**
 * Auth service for normal user authentication.
 * Use to check auth status, login/logout with different OAuth flows.
 */
export declare class BasicAuthService {
    protected store: Store<StateWithClientAuth>;
    protected userIdService: UserIdService;
    protected oAuthLibWrapperService: OAuthLibWrapperService;
    protected authStorageService: AuthStorageService;
    protected authRedirectService: AuthRedirectService;
    protected routingService: RoutingService;
    constructor(store: Store<StateWithClientAuth>, userIdService: UserIdService, oAuthLibWrapperService: OAuthLibWrapperService, authStorageService: AuthStorageService, authRedirectService: AuthRedirectService, routingService: RoutingService);
    /**
     * Check params in url and if there is an code/token then try to login with those.
     */
    checkOAuthParamsInUrl(): Promise<void>;
    /**
     * Initialize Implicit/Authorization Code flow by redirecting to OAuth server.
     */
    loginWithRedirect(): boolean;
    /**
     * Loads a new user token with Resource Owner Password Flow.
     * @param userId
     * @param password
     */
    authorize(userId: string, password: string): Promise<void>;
    /**
     * Logout a storefront customer.
     */
    logout(): Promise<any>;
    /**
     * Returns `true` if the user is logged in; and `false` if the user is anonymous.
     */
    isUserLoggedIn(): Observable<boolean>;
    /**
     * Initialize logout procedure by redirecting to the `logout` endpoint.
     */
    initLogout(): void;
}
