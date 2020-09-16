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
     */
    constructor(routing, router) {
        this.routing = routing;
        this.router = router;
        this.ignoredUrls = new Set();
    }
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
    reportAuthGuard() {
        const { url, navigationId } = this.getCurrentNavigation();
        this.lastAuthGuardNavigation = { url, navigationId };
        this.redirectUrl = url;
    }
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
    getCurrentNavigation() {
        const initialUrl = this.router.url;
        const navigation = this.router.getCurrentNavigation();
        const url = this.router.serializeUrl(navigation.finalUrl);
        return {
            navigationId: navigation.id,
            url,
            initialUrl,
        };
    }
}
AuthRedirectService.ɵprov = i0.ɵɵdefineInjectable({ factory: function AuthRedirectService_Factory() { return new AuthRedirectService(i0.ɵɵinject(i1.RoutingService), i0.ɵɵinject(i2.Router)); }, token: AuthRedirectService, providedIn: "root" });
AuthRedirectService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
AuthRedirectService.ctorParameters = () => [
    { type: RoutingService },
    { type: Router }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC1yZWRpcmVjdC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZS9zcmMvYXV0aC9ndWFyZHMvYXV0aC1yZWRpcmVjdC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQzs7OztBQUt0RSxNQUFNLE9BQU8sbUJBQW1CO0lBQzlCOzs7Ozs7Ozs7OztPQVdHO0lBQ0gsWUFBb0IsT0FBdUIsRUFBVSxNQUFjO1FBQS9DLFlBQU8sR0FBUCxPQUFPLENBQWdCO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUczRCxnQkFBVyxHQUFHLElBQUksR0FBRyxFQUFVLENBQUM7SUFIOEIsQ0FBQztJQVN2RSxRQUFRO1FBQ04sSUFBSSxJQUFJLENBQUMsV0FBVyxLQUFLLFNBQVMsRUFBRTtZQUNsQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUN0QjthQUFNO1lBQ0wsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQ3hDO1FBQ0QsSUFBSSxDQUFDLFdBQVcsR0FBRyxTQUFTLENBQUM7UUFDN0IsSUFBSSxDQUFDLHVCQUF1QixHQUFHLFNBQVMsQ0FBQztJQUMzQyxDQUFDO0lBRUQsZUFBZTtRQUNiLE1BQU0sRUFBRSxHQUFHLEVBQUUsWUFBWSxFQUFFLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7UUFDMUQsSUFBSSxDQUFDLHVCQUF1QixHQUFHLEVBQUUsR0FBRyxFQUFFLFlBQVksRUFBRSxDQUFDO1FBQ3JELElBQUksQ0FBQyxXQUFXLEdBQUcsR0FBRyxDQUFDO0lBQ3pCLENBQUM7SUFFRCxrQkFBa0I7UUFDaEIsTUFBTSxFQUFFLEdBQUcsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7UUFFdEUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFMUIseUhBQXlIO1FBQ3pILElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsRUFBRTtZQUNyQyw4R0FBOEc7WUFDOUcsNEJBQTRCO1lBQzVCLElBQ0UsQ0FBQyxJQUFJLENBQUMsdUJBQXVCO2dCQUM3QixJQUFJLENBQUMsdUJBQXVCLENBQUMsWUFBWSxHQUFHLFlBQVksR0FBRyxDQUFDLEVBQzVEO2dCQUNBLElBQUksQ0FBQyxXQUFXLEdBQUcsVUFBVSxDQUFDO2dCQUM5QixJQUFJLENBQUMsdUJBQXVCLEdBQUcsU0FBUyxDQUFDO2FBQzFDO1NBQ0Y7SUFDSCxDQUFDO0lBRU8sb0JBQW9CO1FBSzFCLE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDO1FBQ25DLE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztRQUN0RCxNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDMUQsT0FBTztZQUNMLFlBQVksRUFBRSxVQUFVLENBQUMsRUFBRTtZQUMzQixHQUFHO1lBQ0gsVUFBVTtTQUNYLENBQUM7SUFDSixDQUFDOzs7O1lBekVGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7O1lBSlEsY0FBYztZQURkLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgUm91dGluZ1NlcnZpY2UgfSBmcm9tICcuLi8uLi9yb3V0aW5nL2ZhY2FkZS9yb3V0aW5nLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgQXV0aFJlZGlyZWN0U2VydmljZSB7XG4gIC8qKlxuICAgKiBUaGlzIHNlcnZpY2UgaXMgcmVzcG9uc2libGUgZm9yIHJlZGlyZWN0aW5nIHRvIHRoZSBsYXN0IHBhZ2UgYmVmb3JlIGF1dGhvcml6YXRpb24uIFwiVGhlIGxhc3QgcGFnZVwiIGNhbiBiZTpcbiAgICogMS4gSnVzdCB0aGUgcHJldmlvdXNseSBvcGVuZWQgcGFnZTsgb3JcbiAgICogMi4gVGhlIHBhZ2UgdGhhdCB3ZSBqdXN0IHRyaWVkIHRvIG9wZW4sIGJ1dCBBdXRoR3VhcmQgY2FuY2VsbGVkIGl0XG4gICAqXG4gICAqIEZvciBleGFtcGxlOlxuICAgKiAxLiBUaGUgdXNlciBvcGVucyB0aGUgcHJvZHVjdCBwYWdlLCB0aGVuIGNsaWNrcyAvbG9naW4gbGluayBhbmQgc2lnbnMgaW5cbiAgICogICAgLT4gVGhlbiB3ZSBzaG91bGQgcmVkaXJlY3QgdG8gdGhlIHByb2R1Y3QgcGFnZTsgb3JcbiAgICogMi4gVGhlIHVzZXIgb3BlbnMgdGhlIHByb2R1Y3QgcGFnZSwgdGhlbiBoZSBjbGlja3MgL215LWFjY291bnQgbGluayxcbiAgICogICAgYnV0IGlzIGF1dG9tYXRpY2FsbHkgcmVkaXJlY3RlZCB0byB0aGUgbG9naW4gcGFnZSBieSB0aGUgQXV0aEd1YXJkLCBhbmQgaGUgc2lnbnMgaW5cbiAgICogICAgLT4gVGhlbiB3ZSBzaG91bGQgcmVkaXJlY3QgdG8gdGhlIG15LWFjY291bnQgcGFnZSwgbm90IHRoZSBwcm9kdWN0IHBhZ2VcbiAgICovXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGluZzogUm91dGluZ1NlcnZpY2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHt9XG5cbiAgcHJpdmF0ZSByZWRpcmVjdFVybDogc3RyaW5nO1xuICBwcml2YXRlIGlnbm9yZWRVcmxzID0gbmV3IFNldDxzdHJpbmc+KCk7XG4gIHByaXZhdGUgbGFzdEF1dGhHdWFyZE5hdmlnYXRpb246IHtcbiAgICB1cmw6IHN0cmluZztcbiAgICBuYXZpZ2F0aW9uSWQ6IG51bWJlcjtcbiAgfTtcblxuICByZWRpcmVjdCgpIHtcbiAgICBpZiAodGhpcy5yZWRpcmVjdFVybCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLnJvdXRpbmcuZ28oJy8nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yb3V0aW5nLmdvQnlVcmwodGhpcy5yZWRpcmVjdFVybCk7XG4gICAgfVxuICAgIHRoaXMucmVkaXJlY3RVcmwgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5sYXN0QXV0aEd1YXJkTmF2aWdhdGlvbiA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHJlcG9ydEF1dGhHdWFyZCgpIHtcbiAgICBjb25zdCB7IHVybCwgbmF2aWdhdGlvbklkIH0gPSB0aGlzLmdldEN1cnJlbnROYXZpZ2F0aW9uKCk7XG4gICAgdGhpcy5sYXN0QXV0aEd1YXJkTmF2aWdhdGlvbiA9IHsgdXJsLCBuYXZpZ2F0aW9uSWQgfTtcbiAgICB0aGlzLnJlZGlyZWN0VXJsID0gdXJsO1xuICB9XG5cbiAgcmVwb3J0Tm90QXV0aEd1YXJkKCkge1xuICAgIGNvbnN0IHsgdXJsLCBpbml0aWFsVXJsLCBuYXZpZ2F0aW9uSWQgfSA9IHRoaXMuZ2V0Q3VycmVudE5hdmlnYXRpb24oKTtcblxuICAgIHRoaXMuaWdub3JlZFVybHMuYWRkKHVybCk7XG5cbiAgICAvLyBEb24ndCBzYXZlIHJlZGlyZWN0IHVybCBpZiB5b3UndmUgYWxyZWFkeSBjb21lIGZyb20gcGFnZSB3aXRoIE5vdEF1dGhHdWFyZCAoaS5lLiB1c2VyIGhhcyBjb21lIGZyb20gbG9naW4gdG8gcmVnaXN0ZXIpXG4gICAgaWYgKCF0aGlzLmlnbm9yZWRVcmxzLmhhcyhpbml0aWFsVXJsKSkge1xuICAgICAgLy8gV2UgY29tcGFyZSB0aGUgbmF2aWdhdGlvbiBpZCB0byBmaW5kIG91dCBpZiB0aGUgdXJsIGNhbmNlbGxlZCBieSBBdXRoR3VhcmQgKGkuZS4gbXktYWNjb3VudCkgaXMgbW9yZSByZWNlbnRcbiAgICAgIC8vIHRoYW4gdGhlIGxhc3Qgb3BlbmVkIHBhZ2VcbiAgICAgIGlmIChcbiAgICAgICAgIXRoaXMubGFzdEF1dGhHdWFyZE5hdmlnYXRpb24gfHxcbiAgICAgICAgdGhpcy5sYXN0QXV0aEd1YXJkTmF2aWdhdGlvbi5uYXZpZ2F0aW9uSWQgPCBuYXZpZ2F0aW9uSWQgLSAxXG4gICAgICApIHtcbiAgICAgICAgdGhpcy5yZWRpcmVjdFVybCA9IGluaXRpYWxVcmw7XG4gICAgICAgIHRoaXMubGFzdEF1dGhHdWFyZE5hdmlnYXRpb24gPSB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRDdXJyZW50TmF2aWdhdGlvbigpOiB7XG4gICAgbmF2aWdhdGlvbklkOiBudW1iZXI7XG4gICAgdXJsOiBzdHJpbmc7XG4gICAgaW5pdGlhbFVybDogc3RyaW5nO1xuICB9IHtcbiAgICBjb25zdCBpbml0aWFsVXJsID0gdGhpcy5yb3V0ZXIudXJsO1xuICAgIGNvbnN0IG5hdmlnYXRpb24gPSB0aGlzLnJvdXRlci5nZXRDdXJyZW50TmF2aWdhdGlvbigpO1xuICAgIGNvbnN0IHVybCA9IHRoaXMucm91dGVyLnNlcmlhbGl6ZVVybChuYXZpZ2F0aW9uLmZpbmFsVXJsKTtcbiAgICByZXR1cm4ge1xuICAgICAgbmF2aWdhdGlvbklkOiBuYXZpZ2F0aW9uLmlkLFxuICAgICAgdXJsLFxuICAgICAgaW5pdGlhbFVybCxcbiAgICB9O1xuICB9XG59XG4iXX0=