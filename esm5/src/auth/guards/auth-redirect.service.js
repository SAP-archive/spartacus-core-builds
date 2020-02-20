import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { RoutingService } from '../../routing/facade/routing.service';
import * as i0 from "@angular/core";
import * as i1 from "../../routing/facade/routing.service";
import * as i2 from "@angular/router";
var AuthRedirectService = /** @class */ (function () {
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
    function AuthRedirectService(routing, router) {
        this.routing = routing;
        this.router = router;
        this.ignoredUrls = new Set();
    }
    AuthRedirectService.prototype.redirect = function () {
        if (this.redirectUrl === undefined) {
            this.routing.go('/');
        }
        else {
            this.routing.goByUrl(this.redirectUrl);
        }
        this.redirectUrl = undefined;
        this.lastAuthGuardNavigation = undefined;
    };
    AuthRedirectService.prototype.reportAuthGuard = function () {
        var _a = this.getCurrentNavigation(), url = _a.url, navigationId = _a.navigationId;
        this.lastAuthGuardNavigation = { url: url, navigationId: navigationId };
        this.redirectUrl = url;
    };
    AuthRedirectService.prototype.reportNotAuthGuard = function () {
        var _a = this.getCurrentNavigation(), url = _a.url, initialUrl = _a.initialUrl, navigationId = _a.navigationId;
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
    };
    AuthRedirectService.prototype.getCurrentNavigation = function () {
        var initialUrl = this.router.url;
        var navigation = this.router.getCurrentNavigation();
        var url = this.router.serializeUrl(navigation.finalUrl);
        return {
            navigationId: navigation.id,
            url: url,
            initialUrl: initialUrl,
        };
    };
    AuthRedirectService.ctorParameters = function () { return [
        { type: RoutingService },
        { type: Router }
    ]; };
    AuthRedirectService.ɵprov = i0.ɵɵdefineInjectable({ factory: function AuthRedirectService_Factory() { return new AuthRedirectService(i0.ɵɵinject(i1.RoutingService), i0.ɵɵinject(i2.Router)); }, token: AuthRedirectService, providedIn: "root" });
    AuthRedirectService = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], AuthRedirectService);
    return AuthRedirectService;
}());
export { AuthRedirectService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC1yZWRpcmVjdC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2F1dGgvZ3VhcmRzL2F1dGgtcmVkaXJlY3Quc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDekMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHNDQUFzQyxDQUFDOzs7O0FBS3RFO0lBQ0U7Ozs7Ozs7Ozs7O09BV0c7SUFDSCw2QkFBb0IsT0FBdUIsRUFBVSxNQUFjO1FBQS9DLFlBQU8sR0FBUCxPQUFPLENBQWdCO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUczRCxnQkFBVyxHQUFHLElBQUksR0FBRyxFQUFVLENBQUM7SUFIOEIsQ0FBQztJQVN2RSxzQ0FBUSxHQUFSO1FBQ0UsSUFBSSxJQUFJLENBQUMsV0FBVyxLQUFLLFNBQVMsRUFBRTtZQUNsQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUN0QjthQUFNO1lBQ0wsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQ3hDO1FBQ0QsSUFBSSxDQUFDLFdBQVcsR0FBRyxTQUFTLENBQUM7UUFDN0IsSUFBSSxDQUFDLHVCQUF1QixHQUFHLFNBQVMsQ0FBQztJQUMzQyxDQUFDO0lBRUQsNkNBQWUsR0FBZjtRQUNRLElBQUEsZ0NBQW1ELEVBQWpELFlBQUcsRUFBRSw4QkFBNEMsQ0FBQztRQUMxRCxJQUFJLENBQUMsdUJBQXVCLEdBQUcsRUFBRSxHQUFHLEtBQUEsRUFBRSxZQUFZLGNBQUEsRUFBRSxDQUFDO1FBQ3JELElBQUksQ0FBQyxXQUFXLEdBQUcsR0FBRyxDQUFDO0lBQ3pCLENBQUM7SUFFRCxnREFBa0IsR0FBbEI7UUFDUSxJQUFBLGdDQUErRCxFQUE3RCxZQUFHLEVBQUUsMEJBQVUsRUFBRSw4QkFBNEMsQ0FBQztRQUV0RSxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUUxQix5SEFBeUg7UUFDekgsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQ3JDLDhHQUE4RztZQUM5Ryw0QkFBNEI7WUFDNUIsSUFDRSxDQUFDLElBQUksQ0FBQyx1QkFBdUI7Z0JBQzdCLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxZQUFZLEdBQUcsWUFBWSxHQUFHLENBQUMsRUFDNUQ7Z0JBQ0EsSUFBSSxDQUFDLFdBQVcsR0FBRyxVQUFVLENBQUM7Z0JBQzlCLElBQUksQ0FBQyx1QkFBdUIsR0FBRyxTQUFTLENBQUM7YUFDMUM7U0FDRjtJQUNILENBQUM7SUFFTyxrREFBb0IsR0FBNUI7UUFLRSxJQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQztRQUNuQyxJQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLG9CQUFvQixFQUFFLENBQUM7UUFDdEQsSUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzFELE9BQU87WUFDTCxZQUFZLEVBQUUsVUFBVSxDQUFDLEVBQUU7WUFDM0IsR0FBRyxLQUFBO1lBQ0gsVUFBVSxZQUFBO1NBQ1gsQ0FBQztJQUNKLENBQUM7O2dCQXpENEIsY0FBYztnQkFBa0IsTUFBTTs7O0lBYnhELG1CQUFtQjtRQUgvQixVQUFVLENBQUM7WUFDVixVQUFVLEVBQUUsTUFBTTtTQUNuQixDQUFDO09BQ1csbUJBQW1CLENBdUUvQjs4QkE5RUQ7Q0E4RUMsQUF2RUQsSUF1RUM7U0F2RVksbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFJvdXRpbmdTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vcm91dGluZy9mYWNhZGUvcm91dGluZy5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIEF1dGhSZWRpcmVjdFNlcnZpY2Uge1xuICAvKipcbiAgICogVGhpcyBzZXJ2aWNlIGlzIHJlc3BvbnNpYmxlIGZvciByZWRpcmVjdGluZyB0byB0aGUgbGFzdCBwYWdlIGJlZm9yZSBhdXRob3JpemF0aW9uLiBcIlRoZSBsYXN0IHBhZ2VcIiBjYW4gYmU6XG4gICAqIDEuIEp1c3QgdGhlIHByZXZpb3VzbHkgb3BlbmVkIHBhZ2U7IG9yXG4gICAqIDIuIFRoZSBwYWdlIHRoYXQgd2UganVzdCB0cmllZCB0byBvcGVuLCBidXQgQXV0aEd1YXJkIGNhbmNlbGxlZCBpdFxuICAgKlxuICAgKiBGb3IgZXhhbXBsZTpcbiAgICogMS4gVGhlIHVzZXIgb3BlbnMgdGhlIHByb2R1Y3QgcGFnZSwgdGhlbiBjbGlja3MgL2xvZ2luIGxpbmsgYW5kIHNpZ25zIGluXG4gICAqICAgIC0+IFRoZW4gd2Ugc2hvdWxkIHJlZGlyZWN0IHRvIHRoZSBwcm9kdWN0IHBhZ2U7IG9yXG4gICAqIDIuIFRoZSB1c2VyIG9wZW5zIHRoZSBwcm9kdWN0IHBhZ2UsIHRoZW4gaGUgY2xpY2tzIC9teS1hY2NvdW50IGxpbmssXG4gICAqICAgIGJ1dCBpcyBhdXRvbWF0aWNhbGx5IHJlZGlyZWN0ZWQgdG8gdGhlIGxvZ2luIHBhZ2UgYnkgdGhlIEF1dGhHdWFyZCwgYW5kIGhlIHNpZ25zIGluXG4gICAqICAgIC0+IFRoZW4gd2Ugc2hvdWxkIHJlZGlyZWN0IHRvIHRoZSBteS1hY2NvdW50IHBhZ2UsIG5vdCB0aGUgcHJvZHVjdCBwYWdlXG4gICAqL1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRpbmc6IFJvdXRpbmdTZXJ2aWNlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7fVxuXG4gIHByaXZhdGUgcmVkaXJlY3RVcmw6IHN0cmluZztcbiAgcHJpdmF0ZSBpZ25vcmVkVXJscyA9IG5ldyBTZXQ8c3RyaW5nPigpO1xuICBwcml2YXRlIGxhc3RBdXRoR3VhcmROYXZpZ2F0aW9uOiB7XG4gICAgdXJsOiBzdHJpbmc7XG4gICAgbmF2aWdhdGlvbklkOiBudW1iZXI7XG4gIH07XG5cbiAgcmVkaXJlY3QoKSB7XG4gICAgaWYgKHRoaXMucmVkaXJlY3RVcmwgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5yb3V0aW5nLmdvKCcvJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucm91dGluZy5nb0J5VXJsKHRoaXMucmVkaXJlY3RVcmwpO1xuICAgIH1cbiAgICB0aGlzLnJlZGlyZWN0VXJsID0gdW5kZWZpbmVkO1xuICAgIHRoaXMubGFzdEF1dGhHdWFyZE5hdmlnYXRpb24gPSB1bmRlZmluZWQ7XG4gIH1cblxuICByZXBvcnRBdXRoR3VhcmQoKSB7XG4gICAgY29uc3QgeyB1cmwsIG5hdmlnYXRpb25JZCB9ID0gdGhpcy5nZXRDdXJyZW50TmF2aWdhdGlvbigpO1xuICAgIHRoaXMubGFzdEF1dGhHdWFyZE5hdmlnYXRpb24gPSB7IHVybCwgbmF2aWdhdGlvbklkIH07XG4gICAgdGhpcy5yZWRpcmVjdFVybCA9IHVybDtcbiAgfVxuXG4gIHJlcG9ydE5vdEF1dGhHdWFyZCgpIHtcbiAgICBjb25zdCB7IHVybCwgaW5pdGlhbFVybCwgbmF2aWdhdGlvbklkIH0gPSB0aGlzLmdldEN1cnJlbnROYXZpZ2F0aW9uKCk7XG5cbiAgICB0aGlzLmlnbm9yZWRVcmxzLmFkZCh1cmwpO1xuXG4gICAgLy8gRG9uJ3Qgc2F2ZSByZWRpcmVjdCB1cmwgaWYgeW91J3ZlIGFscmVhZHkgY29tZSBmcm9tIHBhZ2Ugd2l0aCBOb3RBdXRoR3VhcmQgKGkuZS4gdXNlciBoYXMgY29tZSBmcm9tIGxvZ2luIHRvIHJlZ2lzdGVyKVxuICAgIGlmICghdGhpcy5pZ25vcmVkVXJscy5oYXMoaW5pdGlhbFVybCkpIHtcbiAgICAgIC8vIFdlIGNvbXBhcmUgdGhlIG5hdmlnYXRpb24gaWQgdG8gZmluZCBvdXQgaWYgdGhlIHVybCBjYW5jZWxsZWQgYnkgQXV0aEd1YXJkIChpLmUuIG15LWFjY291bnQpIGlzIG1vcmUgcmVjZW50XG4gICAgICAvLyB0aGFuIHRoZSBsYXN0IG9wZW5lZCBwYWdlXG4gICAgICBpZiAoXG4gICAgICAgICF0aGlzLmxhc3RBdXRoR3VhcmROYXZpZ2F0aW9uIHx8XG4gICAgICAgIHRoaXMubGFzdEF1dGhHdWFyZE5hdmlnYXRpb24ubmF2aWdhdGlvbklkIDwgbmF2aWdhdGlvbklkIC0gMVxuICAgICAgKSB7XG4gICAgICAgIHRoaXMucmVkaXJlY3RVcmwgPSBpbml0aWFsVXJsO1xuICAgICAgICB0aGlzLmxhc3RBdXRoR3VhcmROYXZpZ2F0aW9uID0gdW5kZWZpbmVkO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZ2V0Q3VycmVudE5hdmlnYXRpb24oKToge1xuICAgIG5hdmlnYXRpb25JZDogbnVtYmVyO1xuICAgIHVybDogc3RyaW5nO1xuICAgIGluaXRpYWxVcmw6IHN0cmluZztcbiAgfSB7XG4gICAgY29uc3QgaW5pdGlhbFVybCA9IHRoaXMucm91dGVyLnVybDtcbiAgICBjb25zdCBuYXZpZ2F0aW9uID0gdGhpcy5yb3V0ZXIuZ2V0Q3VycmVudE5hdmlnYXRpb24oKTtcbiAgICBjb25zdCB1cmwgPSB0aGlzLnJvdXRlci5zZXJpYWxpemVVcmwobmF2aWdhdGlvbi5maW5hbFVybCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5hdmlnYXRpb25JZDogbmF2aWdhdGlvbi5pZCxcbiAgICAgIHVybCxcbiAgICAgIGluaXRpYWxVcmwsXG4gICAgfTtcbiAgfVxufVxuIl19