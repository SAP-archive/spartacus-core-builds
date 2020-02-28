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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<AuthRedirectService>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC1yZWRpcmVjdC5zZXJ2aWNlLmQudHMiLCJzb3VyY2VzIjpbImF1dGgtcmVkaXJlY3Quc2VydmljZS5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBdUJBOyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBSb3V0aW5nU2VydmljZSB9IGZyb20gJy4uLy4uL3JvdXRpbmcvZmFjYWRlL3JvdXRpbmcuc2VydmljZSc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBBdXRoUmVkaXJlY3RTZXJ2aWNlIHtcbiAgICBwcml2YXRlIHJvdXRpbmc7XG4gICAgcHJpdmF0ZSByb3V0ZXI7XG4gICAgLyoqXG4gICAgICogVGhpcyBzZXJ2aWNlIGlzIHJlc3BvbnNpYmxlIGZvciByZWRpcmVjdGluZyB0byB0aGUgbGFzdCBwYWdlIGJlZm9yZSBhdXRob3JpemF0aW9uLiBcIlRoZSBsYXN0IHBhZ2VcIiBjYW4gYmU6XG4gICAgICogMS4gSnVzdCB0aGUgcHJldmlvdXNseSBvcGVuZWQgcGFnZTsgb3JcbiAgICAgKiAyLiBUaGUgcGFnZSB0aGF0IHdlIGp1c3QgdHJpZWQgdG8gb3BlbiwgYnV0IEF1dGhHdWFyZCBjYW5jZWxsZWQgaXRcbiAgICAgKlxuICAgICAqIEZvciBleGFtcGxlOlxuICAgICAqIDEuIFRoZSB1c2VyIG9wZW5zIHRoZSBwcm9kdWN0IHBhZ2UsIHRoZW4gY2xpY2tzIC9sb2dpbiBsaW5rIGFuZCBzaWducyBpblxuICAgICAqICAgIC0+IFRoZW4gd2Ugc2hvdWxkIHJlZGlyZWN0IHRvIHRoZSBwcm9kdWN0IHBhZ2U7IG9yXG4gICAgICogMi4gVGhlIHVzZXIgb3BlbnMgdGhlIHByb2R1Y3QgcGFnZSwgdGhlbiBoZSBjbGlja3MgL215LWFjY291bnQgbGluayxcbiAgICAgKiAgICBidXQgaXMgYXV0b21hdGljYWxseSByZWRpcmVjdGVkIHRvIHRoZSBsb2dpbiBwYWdlIGJ5IHRoZSBBdXRoR3VhcmQsIGFuZCBoZSBzaWducyBpblxuICAgICAqICAgIC0+IFRoZW4gd2Ugc2hvdWxkIHJlZGlyZWN0IHRvIHRoZSBteS1hY2NvdW50IHBhZ2UsIG5vdCB0aGUgcHJvZHVjdCBwYWdlXG4gICAgICovXG4gICAgY29uc3RydWN0b3Iocm91dGluZzogUm91dGluZ1NlcnZpY2UsIHJvdXRlcjogUm91dGVyKTtcbiAgICBwcml2YXRlIHJlZGlyZWN0VXJsO1xuICAgIHByaXZhdGUgaWdub3JlZFVybHM7XG4gICAgcHJpdmF0ZSBsYXN0QXV0aEd1YXJkTmF2aWdhdGlvbjtcbiAgICByZWRpcmVjdCgpOiB2b2lkO1xuICAgIHJlcG9ydEF1dGhHdWFyZCgpOiB2b2lkO1xuICAgIHJlcG9ydE5vdEF1dGhHdWFyZCgpOiB2b2lkO1xuICAgIHByaXZhdGUgZ2V0Q3VycmVudE5hdmlnYXRpb247XG59XG4iXX0=