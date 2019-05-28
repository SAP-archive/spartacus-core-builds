/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { RoutingService } from '../../routing/facade/routing.service';
import { Router } from '@angular/router';
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
        const { url, initialUrl, navigationId } = this.getCurrentNavigation();
        this.ignoredUrls.add(url);
        // Don't save redirect url if you've already come from page with NotAuthGuard (i.e. user has come from login to register)
        if (!this.ignoredUrls.has(initialUrl)) {
            // We compare the navigation id to find out if the url cancelled by AuthGuard (i.e. my-account) is more recent
            // than the last opened page
            if (!this.lastAuthGuardNavigation ||
                this.lastAuthGuardNavigation.navigationId < navigationId - 1) {
                this.redirectUrl = initialUrl;
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
        return {
            navigationId: navigation.id,
            url,
            initialUrl,
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
/** @nocollapse */ AuthRedirectService.ngInjectableDef = i0.defineInjectable({ factory: function AuthRedirectService_Factory() { return new AuthRedirectService(i0.inject(i1.RoutingService), i0.inject(i2.Router)); }, token: AuthRedirectService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC1yZWRpcmVjdC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2F1dGgvZ3VhcmRzL2F1dGgtcmVkaXJlY3Quc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDdEUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDOzs7O0FBS3pDLE1BQU0sT0FBTyxtQkFBbUI7Ozs7Ozs7Ozs7Ozs7OztJQWE5QixZQUFvQixPQUF1QixFQUFVLE1BQWM7UUFBL0MsWUFBTyxHQUFQLE9BQU8sQ0FBZ0I7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBRzNELGdCQUFXLEdBQUcsSUFBSSxHQUFHLEVBQVUsQ0FBQztJQUg4QixDQUFDOzs7O0lBU3ZFLFFBQVE7UUFDTixJQUFJLElBQUksQ0FBQyxXQUFXLEtBQUssU0FBUyxFQUFFO1lBQ2xDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ3RCO2FBQU07WUFDTCxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDeEM7UUFDRCxJQUFJLENBQUMsV0FBVyxHQUFHLFNBQVMsQ0FBQztRQUM3QixJQUFJLENBQUMsdUJBQXVCLEdBQUcsU0FBUyxDQUFDO0lBQzNDLENBQUM7Ozs7SUFFRCxlQUFlO2NBQ1AsRUFBRSxHQUFHLEVBQUUsWUFBWSxFQUFFLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixFQUFFO1FBQ3pELElBQUksQ0FBQyx1QkFBdUIsR0FBRyxFQUFFLEdBQUcsRUFBRSxZQUFZLEVBQUUsQ0FBQztRQUNyRCxJQUFJLENBQUMsV0FBVyxHQUFHLEdBQUcsQ0FBQztJQUN6QixDQUFDOzs7O0lBRUQsa0JBQWtCO2NBQ1YsRUFBRSxHQUFHLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxHQUFHLElBQUksQ0FBQyxvQkFBb0IsRUFBRTtRQUVyRSxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUUxQix5SEFBeUg7UUFDekgsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQ3JDLDhHQUE4RztZQUM5Ryw0QkFBNEI7WUFDNUIsSUFDRSxDQUFDLElBQUksQ0FBQyx1QkFBdUI7Z0JBQzdCLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxZQUFZLEdBQUcsWUFBWSxHQUFHLENBQUMsRUFDNUQ7Z0JBQ0EsSUFBSSxDQUFDLFdBQVcsR0FBRyxVQUFVLENBQUM7Z0JBQzlCLElBQUksQ0FBQyx1QkFBdUIsR0FBRyxTQUFTLENBQUM7YUFDMUM7U0FDRjtJQUNILENBQUM7Ozs7O0lBRU8sb0JBQW9COztjQUtwQixVQUFVLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHOztjQUM1QixVQUFVLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxvQkFBb0IsRUFBRTs7Y0FDL0MsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUM7UUFDekQsT0FBTztZQUNMLFlBQVksRUFBRSxVQUFVLENBQUMsRUFBRTtZQUMzQixHQUFHO1lBQ0gsVUFBVTtTQUNYLENBQUM7SUFDSixDQUFDOzs7WUF6RUYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7O1lBTFEsY0FBYztZQUNkLE1BQU07Ozs7Ozs7O0lBb0JiLDBDQUE0Qjs7Ozs7SUFDNUIsMENBQXdDOzs7OztJQUN4QyxzREFHRTs7Ozs7SUFQVSxzQ0FBK0I7Ozs7O0lBQUUscUNBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBSb3V0aW5nU2VydmljZSB9IGZyb20gJy4uLy4uL3JvdXRpbmcvZmFjYWRlL3JvdXRpbmcuc2VydmljZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgQXV0aFJlZGlyZWN0U2VydmljZSB7XG4gIC8qKlxuICAgKiBUaGlzIHNlcnZpY2UgaXMgcmVzcG9uc2libGUgZm9yIHJlZGlyZWN0aW5nIHRvIHRoZSBsYXN0IHBhZ2UgYmVmb3JlIGF1dGhvcml6YXRpb24uIFwiVGhlIGxhc3QgcGFnZVwiIGNhbiBiZTpcbiAgICogMS4gSnVzdCB0aGUgcHJldmlvdXNseSBvcGVuZWQgcGFnZTsgb3JcbiAgICogMi4gVGhlIHBhZ2UgdGhhdCB3ZSBqdXN0IHRyaWVkIHRvIG9wZW4sIGJ1dCBBdXRoR3VhcmQgY2FuY2VsbGVkIGl0XG4gICAqXG4gICAqIEZvciBleGFtcGxlOlxuICAgKiAxLiBUaGUgdXNlciBvcGVucyB0aGUgcHJvZHVjdCBwYWdlLCB0aGVuIGNsaWNrcyAvbG9naW4gbGluayBhbmQgc2lnbnMgaW5cbiAgICogICAgLT4gVGhlbiB3ZSBzaG91bGQgcmVkaXJlY3QgdG8gdGhlIHByb2R1Y3QgcGFnZTsgb3JcbiAgICogMi4gVGhlIHVzZXIgb3BlbnMgdGhlIHByb2R1Y3QgcGFnZSwgdGhlbiBoZSBjbGlja3MgL215LWFjY291bnQgbGluayxcbiAgICogICAgYnV0IGlzIGF1dG9tYXRpY2FsbHkgcmVkaXJlY3RlZCB0byB0aGUgbG9naW4gcGFnZSBieSB0aGUgQXV0aEd1YXJkLCBhbmQgaGUgc2lnbnMgaW5cbiAgICogICAgLT4gVGhlbiB3ZSBzaG91bGQgcmVkaXJlY3QgdG8gdGhlIG15LWFjY291bnQgcGFnZSwgbm90IHRoZSBwcm9kdWN0IHBhZ2VcbiAgICovXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGluZzogUm91dGluZ1NlcnZpY2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHt9XG5cbiAgcHJpdmF0ZSByZWRpcmVjdFVybDogc3RyaW5nO1xuICBwcml2YXRlIGlnbm9yZWRVcmxzID0gbmV3IFNldDxzdHJpbmc+KCk7XG4gIHByaXZhdGUgbGFzdEF1dGhHdWFyZE5hdmlnYXRpb246IHtcbiAgICB1cmw6IHN0cmluZztcbiAgICBuYXZpZ2F0aW9uSWQ6IG51bWJlcjtcbiAgfTtcblxuICByZWRpcmVjdCgpIHtcbiAgICBpZiAodGhpcy5yZWRpcmVjdFVybCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLnJvdXRpbmcuZ28oJy8nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yb3V0aW5nLmdvQnlVcmwodGhpcy5yZWRpcmVjdFVybCk7XG4gICAgfVxuICAgIHRoaXMucmVkaXJlY3RVcmwgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5sYXN0QXV0aEd1YXJkTmF2aWdhdGlvbiA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHJlcG9ydEF1dGhHdWFyZCgpIHtcbiAgICBjb25zdCB7IHVybCwgbmF2aWdhdGlvbklkIH0gPSB0aGlzLmdldEN1cnJlbnROYXZpZ2F0aW9uKCk7XG4gICAgdGhpcy5sYXN0QXV0aEd1YXJkTmF2aWdhdGlvbiA9IHsgdXJsLCBuYXZpZ2F0aW9uSWQgfTtcbiAgICB0aGlzLnJlZGlyZWN0VXJsID0gdXJsO1xuICB9XG5cbiAgcmVwb3J0Tm90QXV0aEd1YXJkKCkge1xuICAgIGNvbnN0IHsgdXJsLCBpbml0aWFsVXJsLCBuYXZpZ2F0aW9uSWQgfSA9IHRoaXMuZ2V0Q3VycmVudE5hdmlnYXRpb24oKTtcblxuICAgIHRoaXMuaWdub3JlZFVybHMuYWRkKHVybCk7XG5cbiAgICAvLyBEb24ndCBzYXZlIHJlZGlyZWN0IHVybCBpZiB5b3UndmUgYWxyZWFkeSBjb21lIGZyb20gcGFnZSB3aXRoIE5vdEF1dGhHdWFyZCAoaS5lLiB1c2VyIGhhcyBjb21lIGZyb20gbG9naW4gdG8gcmVnaXN0ZXIpXG4gICAgaWYgKCF0aGlzLmlnbm9yZWRVcmxzLmhhcyhpbml0aWFsVXJsKSkge1xuICAgICAgLy8gV2UgY29tcGFyZSB0aGUgbmF2aWdhdGlvbiBpZCB0byBmaW5kIG91dCBpZiB0aGUgdXJsIGNhbmNlbGxlZCBieSBBdXRoR3VhcmQgKGkuZS4gbXktYWNjb3VudCkgaXMgbW9yZSByZWNlbnRcbiAgICAgIC8vIHRoYW4gdGhlIGxhc3Qgb3BlbmVkIHBhZ2VcbiAgICAgIGlmIChcbiAgICAgICAgIXRoaXMubGFzdEF1dGhHdWFyZE5hdmlnYXRpb24gfHxcbiAgICAgICAgdGhpcy5sYXN0QXV0aEd1YXJkTmF2aWdhdGlvbi5uYXZpZ2F0aW9uSWQgPCBuYXZpZ2F0aW9uSWQgLSAxXG4gICAgICApIHtcbiAgICAgICAgdGhpcy5yZWRpcmVjdFVybCA9IGluaXRpYWxVcmw7XG4gICAgICAgIHRoaXMubGFzdEF1dGhHdWFyZE5hdmlnYXRpb24gPSB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRDdXJyZW50TmF2aWdhdGlvbigpOiB7XG4gICAgbmF2aWdhdGlvbklkOiBudW1iZXI7XG4gICAgdXJsOiBzdHJpbmc7XG4gICAgaW5pdGlhbFVybDogc3RyaW5nO1xuICB9IHtcbiAgICBjb25zdCBpbml0aWFsVXJsID0gdGhpcy5yb3V0ZXIudXJsO1xuICAgIGNvbnN0IG5hdmlnYXRpb24gPSB0aGlzLnJvdXRlci5nZXRDdXJyZW50TmF2aWdhdGlvbigpO1xuICAgIGNvbnN0IHVybCA9IHRoaXMucm91dGVyLnNlcmlhbGl6ZVVybChuYXZpZ2F0aW9uLmZpbmFsVXJsKTtcbiAgICByZXR1cm4ge1xuICAgICAgbmF2aWdhdGlvbklkOiBuYXZpZ2F0aW9uLmlkLFxuICAgICAgdXJsLFxuICAgICAgaW5pdGlhbFVybCxcbiAgICB9O1xuICB9XG59XG4iXX0=