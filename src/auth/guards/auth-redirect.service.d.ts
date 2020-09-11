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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC1yZWRpcmVjdC5zZXJ2aWNlLmQudHMiLCJzb3VyY2VzIjpbImF1dGgtcmVkaXJlY3Quc2VydmljZS5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBdUJBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFJvdXRpbmdTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vcm91dGluZy9mYWNhZGUvcm91dGluZy5zZXJ2aWNlJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIEF1dGhSZWRpcmVjdFNlcnZpY2Uge1xuICAgIHByaXZhdGUgcm91dGluZztcbiAgICBwcml2YXRlIHJvdXRlcjtcbiAgICAvKipcbiAgICAgKiBUaGlzIHNlcnZpY2UgaXMgcmVzcG9uc2libGUgZm9yIHJlZGlyZWN0aW5nIHRvIHRoZSBsYXN0IHBhZ2UgYmVmb3JlIGF1dGhvcml6YXRpb24uIFwiVGhlIGxhc3QgcGFnZVwiIGNhbiBiZTpcbiAgICAgKiAxLiBKdXN0IHRoZSBwcmV2aW91c2x5IG9wZW5lZCBwYWdlOyBvclxuICAgICAqIDIuIFRoZSBwYWdlIHRoYXQgd2UganVzdCB0cmllZCB0byBvcGVuLCBidXQgQXV0aEd1YXJkIGNhbmNlbGxlZCBpdFxuICAgICAqXG4gICAgICogRm9yIGV4YW1wbGU6XG4gICAgICogMS4gVGhlIHVzZXIgb3BlbnMgdGhlIHByb2R1Y3QgcGFnZSwgdGhlbiBjbGlja3MgL2xvZ2luIGxpbmsgYW5kIHNpZ25zIGluXG4gICAgICogICAgLT4gVGhlbiB3ZSBzaG91bGQgcmVkaXJlY3QgdG8gdGhlIHByb2R1Y3QgcGFnZTsgb3JcbiAgICAgKiAyLiBUaGUgdXNlciBvcGVucyB0aGUgcHJvZHVjdCBwYWdlLCB0aGVuIGhlIGNsaWNrcyAvbXktYWNjb3VudCBsaW5rLFxuICAgICAqICAgIGJ1dCBpcyBhdXRvbWF0aWNhbGx5IHJlZGlyZWN0ZWQgdG8gdGhlIGxvZ2luIHBhZ2UgYnkgdGhlIEF1dGhHdWFyZCwgYW5kIGhlIHNpZ25zIGluXG4gICAgICogICAgLT4gVGhlbiB3ZSBzaG91bGQgcmVkaXJlY3QgdG8gdGhlIG15LWFjY291bnQgcGFnZSwgbm90IHRoZSBwcm9kdWN0IHBhZ2VcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcihyb3V0aW5nOiBSb3V0aW5nU2VydmljZSwgcm91dGVyOiBSb3V0ZXIpO1xuICAgIHByaXZhdGUgcmVkaXJlY3RVcmw7XG4gICAgcHJpdmF0ZSBpZ25vcmVkVXJscztcbiAgICBwcml2YXRlIGxhc3RBdXRoR3VhcmROYXZpZ2F0aW9uO1xuICAgIHJlZGlyZWN0KCk6IHZvaWQ7XG4gICAgcmVwb3J0QXV0aEd1YXJkKCk6IHZvaWQ7XG4gICAgcmVwb3J0Tm90QXV0aEd1YXJkKCk6IHZvaWQ7XG4gICAgcHJpdmF0ZSBnZXRDdXJyZW50TmF2aWdhdGlvbjtcbn1cbiJdfQ==