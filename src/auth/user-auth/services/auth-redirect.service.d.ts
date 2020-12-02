import { Router } from '@angular/router';
import { RoutingService } from '../../../routing/facade/routing.service';
import { AuthRedirectStorageService } from './auth-redirect-storage.service';
/**
 * Responsible for saving last accessed page (or attempted) before login and for redirecting to that page after login.
 */
export declare class AuthRedirectService {
    protected routing: RoutingService;
    protected router: Router;
    protected authRedirectStorageService: AuthRedirectStorageService;
    /**
     * This service is responsible for redirecting to the last page before authorization. "The last page" can be:
     * 1. Just the previously opened page; or
     * 2. The page that we just tried to open, but AuthGuard cancelled it
     *
     * For example:
     * 1. The user opens the product page, then clicks /login link and signs in
     *    -> Then we should redirect to the product page; or
     * 2. The user opens the product page, then he clicks /my-account link,
     *    but is automatically redirected to the login page by the AuthGuard, and he signs in
     *    -> Then we should redirect to the my-account page, not the product page
     */
    constructor(routing: RoutingService, router: Router, authRedirectStorageService: AuthRedirectStorageService);
    private ignoredUrls;
    private lastAuthGuardNavigation;
    /**
     * Redirect to saved url (homepage if nothing is saved).
     */
    redirect(): void;
    /**
     * Saves url of a page that user wanted to access, but wasn't yet logged in.
     */
    reportAuthGuard(): void;
    /**
     * Saves url of a page that was accessed before entering a page only for not auth users.
     */
    reportNotAuthGuard(): void;
    private getCurrentNavigation;
}
