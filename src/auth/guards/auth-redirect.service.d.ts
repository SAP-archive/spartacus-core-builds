import { Router } from '@angular/router';
import { RoutingService } from '../../routing/facade/routing.service';
import * as ɵngcc0 from '@angular/core';
export declare class AuthRedirectService {
    private routing;
    private router;
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
    constructor(routing: RoutingService, router: Router);
    private redirectUrl;
    private ignoredUrls;
    private lastAuthGuardNavigation;
    redirect(): void;
    reportAuthGuard(): void;
    reportNotAuthGuard(): void;
    private getCurrentNavigation;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<AuthRedirectService, never>;
}

//# sourceMappingURL=auth-redirect.service.d.ts.map