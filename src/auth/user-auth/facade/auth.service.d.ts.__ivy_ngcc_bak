import { Observable } from 'rxjs';
import { BasicAuthService } from '../services/basic-auth.service';
/**
 * Auth facade on BasicAuthService and AsmAuthService.
 * This service should be used in components, other core features.
 */
export declare class AuthService {
    protected basicAuthService: BasicAuthService;
    constructor(basicAuthService: BasicAuthService);
    /**
     * Check params in url and if there is an code/token then try to login with those.
     */
    checkOAuthParamsInUrl(): void;
    /**
     * Initialize Implicit/Authorization Code flow by redirecting to OAuth server.
     */
    loginWithRedirect(): boolean;
    /**
     * Loads a new user token with Resource Owner Password Flow.
     * @param userId
     * @param password
     */
    authorize(userId: string, password: string): void;
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
