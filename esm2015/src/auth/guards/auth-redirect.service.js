/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { RoutingService } from '../../routing/facade/routing.service';
import * as i0 from "@angular/core";
import * as i1 from "../../routing/facade/routing.service";
import * as i2 from "@angular/router";
export class AuthRedirectService {
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
     * @param {?} routing
     * @param {?} router
     */
    constructor(routing, router) {
        this.routing = routing;
        this.router = router;
        this.ignoredUrls = new Set();
    }
    /**
     * @return {?}
     */
    redirect() {
        if (this.redirectUrl === undefined) {
            this.routing.go('/');
        }
        else {
            this.routing.goByUrl(this.redirectUrl);
        }
        this.redirectUrl = undefined;
        this.lastAuthGuardNavigation = undefined;
    }
    /**
     * @return {?}
     */
    reportAuthGuard() {
        const { url, navigationId } = this.getCurrentNavigation();
        this.lastAuthGuardNavigation = { url, navigationId };
        this.redirectUrl = url;
    }
    /**
     * @return {?}
     */
    reportNotAuthGuard() {
        const { url, initialUrl, navigationId, state, } = this.getCurrentNavigation();
        this.ignoredUrls.add(url);
        // Don't save redirect url if you've already come from page with NotAuthGuard (i.e. user has come from login to register)
        if (!this.ignoredUrls.has(initialUrl)) {
            // We compare the navigation id to find out if the url cancelled by AuthGuard (i.e. my-account) is more recent
            // than the last opened page
            if (!this.lastAuthGuardNavigation ||
                this.lastAuthGuardNavigation.navigationId < navigationId - 1) {
                this.redirectUrl = state ? state.redirectUrl : initialUrl;
                this.lastAuthGuardNavigation = undefined;
            }
        }
    }
    /**
     * @private
     * @return {?}
     */
    getCurrentNavigation() {
        /** @type {?} */
        const initialUrl = this.router.url;
        /** @type {?} */
        const navigation = this.router.getCurrentNavigation();
        /** @type {?} */
        const url = this.router.serializeUrl(navigation.finalUrl);
        /** @type {?} */
        const state = navigation.extras.state ? navigation.extras.state : undefined;
        return {
            navigationId: navigation.id,
            url,
            initialUrl,
            state,
        };
    }
}
AuthRedirectService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
AuthRedirectService.ctorParameters = () => [
    { type: RoutingService },
    { type: Router }
];
/** @nocollapse */ AuthRedirectService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function AuthRedirectService_Factory() { return new AuthRedirectService(i0.ɵɵinject(i1.RoutingService), i0.ɵɵinject(i2.Router)); }, token: AuthRedirectService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    AuthRedirectService.prototype.redirectUrl;
    /**
     * @type {?}
     * @private
     */
    AuthRedirectService.prototype.ignoredUrls;
    /**
     * @type {?}
     * @private
     */
    AuthRedirectService.prototype.lastAuthGuardNavigation;
    /**
     * @type {?}
     * @private
     */
    AuthRedirectService.prototype.routing;
    /**
     * @type {?}
     * @private
     */
    AuthRedirectService.prototype.router;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC1yZWRpcmVjdC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2F1dGgvZ3VhcmRzL2F1dGgtcmVkaXJlY3Quc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDekMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHNDQUFzQyxDQUFDOzs7O0FBS3RFLE1BQU0sT0FBTyxtQkFBbUI7Ozs7Ozs7Ozs7Ozs7OztJQWE5QixZQUFvQixPQUF1QixFQUFVLE1BQWM7UUFBL0MsWUFBTyxHQUFQLE9BQU8sQ0FBZ0I7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBRzNELGdCQUFXLEdBQUcsSUFBSSxHQUFHLEVBQVUsQ0FBQztJQUg4QixDQUFDOzs7O0lBU3ZFLFFBQVE7UUFDTixJQUFJLElBQUksQ0FBQyxXQUFXLEtBQUssU0FBUyxFQUFFO1lBQ2xDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ3RCO2FBQU07WUFDTCxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDeEM7UUFDRCxJQUFJLENBQUMsV0FBVyxHQUFHLFNBQVMsQ0FBQztRQUM3QixJQUFJLENBQUMsdUJBQXVCLEdBQUcsU0FBUyxDQUFDO0lBQzNDLENBQUM7Ozs7SUFFRCxlQUFlO2NBQ1AsRUFBRSxHQUFHLEVBQUUsWUFBWSxFQUFFLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixFQUFFO1FBQ3pELElBQUksQ0FBQyx1QkFBdUIsR0FBRyxFQUFFLEdBQUcsRUFBRSxZQUFZLEVBQUUsQ0FBQztRQUNyRCxJQUFJLENBQUMsV0FBVyxHQUFHLEdBQUcsQ0FBQztJQUN6QixDQUFDOzs7O0lBRUQsa0JBQWtCO2NBQ1YsRUFDSixHQUFHLEVBQ0gsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEdBQ04sR0FBRyxJQUFJLENBQUMsb0JBQW9CLEVBQUU7UUFFL0IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFMUIseUhBQXlIO1FBQ3pILElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsRUFBRTtZQUNyQyw4R0FBOEc7WUFDOUcsNEJBQTRCO1lBQzVCLElBQ0UsQ0FBQyxJQUFJLENBQUMsdUJBQXVCO2dCQUM3QixJQUFJLENBQUMsdUJBQXVCLENBQUMsWUFBWSxHQUFHLFlBQVksR0FBRyxDQUFDLEVBQzVEO2dCQUNBLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUM7Z0JBQzFELElBQUksQ0FBQyx1QkFBdUIsR0FBRyxTQUFTLENBQUM7YUFDMUM7U0FDRjtJQUNILENBQUM7Ozs7O0lBRU8sb0JBQW9COztjQU1wQixVQUFVLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHOztjQUM1QixVQUFVLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxvQkFBb0IsRUFBRTs7Y0FDL0MsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUM7O2NBRW5ELEtBQUssR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLFNBQVM7UUFFM0UsT0FBTztZQUNMLFlBQVksRUFBRSxVQUFVLENBQUMsRUFBRTtZQUMzQixHQUFHO1lBQ0gsVUFBVTtZQUNWLEtBQUs7U0FDTixDQUFDO0lBQ0osQ0FBQzs7O1lBbkZGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQUpRLGNBQWM7WUFEZCxNQUFNOzs7Ozs7OztJQXFCYiwwQ0FBNEI7Ozs7O0lBQzVCLDBDQUF3Qzs7Ozs7SUFDeEMsc0RBR0U7Ozs7O0lBUFUsc0NBQStCOzs7OztJQUFFLHFDQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBSb3V0aW5nU2VydmljZSB9IGZyb20gJy4uLy4uL3JvdXRpbmcvZmFjYWRlL3JvdXRpbmcuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBBdXRoUmVkaXJlY3RTZXJ2aWNlIHtcbiAgLyoqXG4gICAqIFRoaXMgc2VydmljZSBpcyByZXNwb25zaWJsZSBmb3IgcmVkaXJlY3RpbmcgdG8gdGhlIGxhc3QgcGFnZSBiZWZvcmUgYXV0aG9yaXphdGlvbi4gXCJUaGUgbGFzdCBwYWdlXCIgY2FuIGJlOlxuICAgKiAxLiBKdXN0IHRoZSBwcmV2aW91c2x5IG9wZW5lZCBwYWdlOyBvclxuICAgKiAyLiBUaGUgcGFnZSB0aGF0IHdlIGp1c3QgdHJpZWQgdG8gb3BlbiwgYnV0IEF1dGhHdWFyZCBjYW5jZWxsZWQgaXRcbiAgICpcbiAgICogRm9yIGV4YW1wbGU6XG4gICAqIDEuIFRoZSB1c2VyIG9wZW5zIHRoZSBwcm9kdWN0IHBhZ2UsIHRoZW4gY2xpY2tzIC9sb2dpbiBsaW5rIGFuZCBzaWducyBpblxuICAgKiAgICAtPiBUaGVuIHdlIHNob3VsZCByZWRpcmVjdCB0byB0aGUgcHJvZHVjdCBwYWdlOyBvclxuICAgKiAyLiBUaGUgdXNlciBvcGVucyB0aGUgcHJvZHVjdCBwYWdlLCB0aGVuIGhlIGNsaWNrcyAvbXktYWNjb3VudCBsaW5rLFxuICAgKiAgICBidXQgaXMgYXV0b21hdGljYWxseSByZWRpcmVjdGVkIHRvIHRoZSBsb2dpbiBwYWdlIGJ5IHRoZSBBdXRoR3VhcmQsIGFuZCBoZSBzaWducyBpblxuICAgKiAgICAtPiBUaGVuIHdlIHNob3VsZCByZWRpcmVjdCB0byB0aGUgbXktYWNjb3VudCBwYWdlLCBub3QgdGhlIHByb2R1Y3QgcGFnZVxuICAgKi9cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0aW5nOiBSb3V0aW5nU2VydmljZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge31cblxuICBwcml2YXRlIHJlZGlyZWN0VXJsOiBzdHJpbmc7XG4gIHByaXZhdGUgaWdub3JlZFVybHMgPSBuZXcgU2V0PHN0cmluZz4oKTtcbiAgcHJpdmF0ZSBsYXN0QXV0aEd1YXJkTmF2aWdhdGlvbjoge1xuICAgIHVybDogc3RyaW5nO1xuICAgIG5hdmlnYXRpb25JZDogbnVtYmVyO1xuICB9O1xuXG4gIHJlZGlyZWN0KCkge1xuICAgIGlmICh0aGlzLnJlZGlyZWN0VXJsID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMucm91dGluZy5nbygnLycpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJvdXRpbmcuZ29CeVVybCh0aGlzLnJlZGlyZWN0VXJsKTtcbiAgICB9XG4gICAgdGhpcy5yZWRpcmVjdFVybCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmxhc3RBdXRoR3VhcmROYXZpZ2F0aW9uID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgcmVwb3J0QXV0aEd1YXJkKCkge1xuICAgIGNvbnN0IHsgdXJsLCBuYXZpZ2F0aW9uSWQgfSA9IHRoaXMuZ2V0Q3VycmVudE5hdmlnYXRpb24oKTtcbiAgICB0aGlzLmxhc3RBdXRoR3VhcmROYXZpZ2F0aW9uID0geyB1cmwsIG5hdmlnYXRpb25JZCB9O1xuICAgIHRoaXMucmVkaXJlY3RVcmwgPSB1cmw7XG4gIH1cblxuICByZXBvcnROb3RBdXRoR3VhcmQoKSB7XG4gICAgY29uc3Qge1xuICAgICAgdXJsLFxuICAgICAgaW5pdGlhbFVybCxcbiAgICAgIG5hdmlnYXRpb25JZCxcbiAgICAgIHN0YXRlLFxuICAgIH0gPSB0aGlzLmdldEN1cnJlbnROYXZpZ2F0aW9uKCk7XG5cbiAgICB0aGlzLmlnbm9yZWRVcmxzLmFkZCh1cmwpO1xuXG4gICAgLy8gRG9uJ3Qgc2F2ZSByZWRpcmVjdCB1cmwgaWYgeW91J3ZlIGFscmVhZHkgY29tZSBmcm9tIHBhZ2Ugd2l0aCBOb3RBdXRoR3VhcmQgKGkuZS4gdXNlciBoYXMgY29tZSBmcm9tIGxvZ2luIHRvIHJlZ2lzdGVyKVxuICAgIGlmICghdGhpcy5pZ25vcmVkVXJscy5oYXMoaW5pdGlhbFVybCkpIHtcbiAgICAgIC8vIFdlIGNvbXBhcmUgdGhlIG5hdmlnYXRpb24gaWQgdG8gZmluZCBvdXQgaWYgdGhlIHVybCBjYW5jZWxsZWQgYnkgQXV0aEd1YXJkIChpLmUuIG15LWFjY291bnQpIGlzIG1vcmUgcmVjZW50XG4gICAgICAvLyB0aGFuIHRoZSBsYXN0IG9wZW5lZCBwYWdlXG4gICAgICBpZiAoXG4gICAgICAgICF0aGlzLmxhc3RBdXRoR3VhcmROYXZpZ2F0aW9uIHx8XG4gICAgICAgIHRoaXMubGFzdEF1dGhHdWFyZE5hdmlnYXRpb24ubmF2aWdhdGlvbklkIDwgbmF2aWdhdGlvbklkIC0gMVxuICAgICAgKSB7XG4gICAgICAgIHRoaXMucmVkaXJlY3RVcmwgPSBzdGF0ZSA/IHN0YXRlLnJlZGlyZWN0VXJsIDogaW5pdGlhbFVybDtcbiAgICAgICAgdGhpcy5sYXN0QXV0aEd1YXJkTmF2aWdhdGlvbiA9IHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGdldEN1cnJlbnROYXZpZ2F0aW9uKCk6IHtcbiAgICBuYXZpZ2F0aW9uSWQ6IG51bWJlcjtcbiAgICB1cmw6IHN0cmluZztcbiAgICBpbml0aWFsVXJsOiBzdHJpbmc7XG4gICAgc3RhdGU6IGFueTtcbiAgfSB7XG4gICAgY29uc3QgaW5pdGlhbFVybCA9IHRoaXMucm91dGVyLnVybDtcbiAgICBjb25zdCBuYXZpZ2F0aW9uID0gdGhpcy5yb3V0ZXIuZ2V0Q3VycmVudE5hdmlnYXRpb24oKTtcbiAgICBjb25zdCB1cmwgPSB0aGlzLnJvdXRlci5zZXJpYWxpemVVcmwobmF2aWdhdGlvbi5maW5hbFVybCk7XG5cbiAgICBjb25zdCBzdGF0ZSA9IG5hdmlnYXRpb24uZXh0cmFzLnN0YXRlID8gbmF2aWdhdGlvbi5leHRyYXMuc3RhdGUgOiB1bmRlZmluZWQ7XG5cbiAgICByZXR1cm4ge1xuICAgICAgbmF2aWdhdGlvbklkOiBuYXZpZ2F0aW9uLmlkLFxuICAgICAgdXJsLFxuICAgICAgaW5pdGlhbFVybCxcbiAgICAgIHN0YXRlLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==