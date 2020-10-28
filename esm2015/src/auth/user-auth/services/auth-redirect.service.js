import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { RoutingService } from '../../../routing/facade/routing.service';
import { AuthRedirectStorageService } from './auth-redirect-storage.service';
import * as i0 from "@angular/core";
import * as i1 from "../../../routing/facade/routing.service";
import * as i2 from "@angular/router";
import * as i3 from "./auth-redirect-storage.service";
/**
 * Responsible for saving last accessed page (or attempted) before login and for redirecting to that page after login.
 */
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
    constructor(routing, router, authRedirectStorageService) {
        this.routing = routing;
        this.router = router;
        this.authRedirectStorageService = authRedirectStorageService;
        this.ignoredUrls = new Set();
    }
    /**
     * Redirect to saved url (homepage if nothing is saved).
     */
    redirect() {
        this.authRedirectStorageService
            .getRedirectUrl()
            .pipe(take(1))
            .subscribe((redirectUrl) => {
            if (redirectUrl === undefined) {
                this.routing.go('/');
            }
            else {
                this.routing.goByUrl(redirectUrl);
            }
            this.authRedirectStorageService.setRedirectUrl(undefined);
            this.lastAuthGuardNavigation = undefined;
        });
    }
    /**
     * Saves url of a page that user wanted to access, but wasn't yet logged in.
     */
    reportAuthGuard() {
        const { url, navigationId } = this.getCurrentNavigation();
        this.lastAuthGuardNavigation = { url, navigationId };
        this.authRedirectStorageService.setRedirectUrl(url);
    }
    /**
     * Saves url of a page that was accessed before entering a page only for not auth users.
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
                this.authRedirectStorageService.setRedirectUrl(initialUrl);
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
AuthRedirectService.ɵprov = i0.ɵɵdefineInjectable({ factory: function AuthRedirectService_Factory() { return new AuthRedirectService(i0.ɵɵinject(i1.RoutingService), i0.ɵɵinject(i2.Router), i0.ɵɵinject(i3.AuthRedirectStorageService)); }, token: AuthRedirectService, providedIn: "root" });
AuthRedirectService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
AuthRedirectService.ctorParameters = () => [
    { type: RoutingService },
    { type: Router },
    { type: AuthRedirectStorageService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC1yZWRpcmVjdC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZS9zcmMvYXV0aC91c2VyLWF1dGgvc2VydmljZXMvYXV0aC1yZWRpcmVjdC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pDLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN0QyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDekUsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0saUNBQWlDLENBQUM7Ozs7O0FBRTdFOztHQUVHO0FBSUgsTUFBTSxPQUFPLG1CQUFtQjtJQUM5Qjs7Ozs7Ozs7Ozs7T0FXRztJQUNILFlBQ1ksT0FBdUIsRUFDdkIsTUFBYyxFQUNkLDBCQUFzRDtRQUZ0RCxZQUFPLEdBQVAsT0FBTyxDQUFnQjtRQUN2QixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsK0JBQTBCLEdBQTFCLDBCQUEwQixDQUE0QjtRQUcxRCxnQkFBVyxHQUFHLElBQUksR0FBRyxFQUFVLENBQUM7SUFGckMsQ0FBQztJQVFKOztPQUVHO0lBQ0gsUUFBUTtRQUNOLElBQUksQ0FBQywwQkFBMEI7YUFDNUIsY0FBYyxFQUFFO2FBQ2hCLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDYixTQUFTLENBQUMsQ0FBQyxXQUFXLEVBQUUsRUFBRTtZQUN6QixJQUFJLFdBQVcsS0FBSyxTQUFTLEVBQUU7Z0JBQzdCLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQ3RCO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO2FBQ25DO1lBQ0QsSUFBSSxDQUFDLDBCQUEwQixDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUUxRCxJQUFJLENBQUMsdUJBQXVCLEdBQUcsU0FBUyxDQUFDO1FBQzNDLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVEOztPQUVHO0lBQ0gsZUFBZTtRQUNiLE1BQU0sRUFBRSxHQUFHLEVBQUUsWUFBWSxFQUFFLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7UUFDMUQsSUFBSSxDQUFDLHVCQUF1QixHQUFHLEVBQUUsR0FBRyxFQUFFLFlBQVksRUFBRSxDQUFDO1FBQ3JELElBQUksQ0FBQywwQkFBMEIsQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDdEQsQ0FBQztJQUVEOztPQUVHO0lBQ0gsa0JBQWtCO1FBQ2hCLE1BQU0sRUFBRSxHQUFHLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxHQUFHLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO1FBRXRFLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRTFCLHlIQUF5SDtRQUN6SCxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFDckMsOEdBQThHO1lBQzlHLDRCQUE0QjtZQUM1QixJQUNFLENBQUMsSUFBSSxDQUFDLHVCQUF1QjtnQkFDN0IsSUFBSSxDQUFDLHVCQUF1QixDQUFDLFlBQVksR0FBRyxZQUFZLEdBQUcsQ0FBQyxFQUM1RDtnQkFDQSxJQUFJLENBQUMsMEJBQTBCLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDO2dCQUUzRCxJQUFJLENBQUMsdUJBQXVCLEdBQUcsU0FBUyxDQUFDO2FBQzFDO1NBQ0Y7SUFDSCxDQUFDO0lBRU8sb0JBQW9CO1FBSzFCLE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDO1FBQ25DLE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztRQUN0RCxNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDMUQsT0FBTztZQUNMLFlBQVksRUFBRSxVQUFVLENBQUMsRUFBRTtZQUMzQixHQUFHO1lBQ0gsVUFBVTtTQUNYLENBQUM7SUFDSixDQUFDOzs7O1lBNUZGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7O1lBUlEsY0FBYztZQUZkLE1BQU07WUFHTiwwQkFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgdGFrZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFJvdXRpbmdTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vcm91dGluZy9mYWNhZGUvcm91dGluZy5zZXJ2aWNlJztcbmltcG9ydCB7IEF1dGhSZWRpcmVjdFN0b3JhZ2VTZXJ2aWNlIH0gZnJvbSAnLi9hdXRoLXJlZGlyZWN0LXN0b3JhZ2Uuc2VydmljZSc7XG5cbi8qKlxuICogUmVzcG9uc2libGUgZm9yIHNhdmluZyBsYXN0IGFjY2Vzc2VkIHBhZ2UgKG9yIGF0dGVtcHRlZCkgYmVmb3JlIGxvZ2luIGFuZCBmb3IgcmVkaXJlY3RpbmcgdG8gdGhhdCBwYWdlIGFmdGVyIGxvZ2luLlxuICovXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgQXV0aFJlZGlyZWN0U2VydmljZSB7XG4gIC8qKlxuICAgKiBUaGlzIHNlcnZpY2UgaXMgcmVzcG9uc2libGUgZm9yIHJlZGlyZWN0aW5nIHRvIHRoZSBsYXN0IHBhZ2UgYmVmb3JlIGF1dGhvcml6YXRpb24uIFwiVGhlIGxhc3QgcGFnZVwiIGNhbiBiZTpcbiAgICogMS4gSnVzdCB0aGUgcHJldmlvdXNseSBvcGVuZWQgcGFnZTsgb3JcbiAgICogMi4gVGhlIHBhZ2UgdGhhdCB3ZSBqdXN0IHRyaWVkIHRvIG9wZW4sIGJ1dCBBdXRoR3VhcmQgY2FuY2VsbGVkIGl0XG4gICAqXG4gICAqIEZvciBleGFtcGxlOlxuICAgKiAxLiBUaGUgdXNlciBvcGVucyB0aGUgcHJvZHVjdCBwYWdlLCB0aGVuIGNsaWNrcyAvbG9naW4gbGluayBhbmQgc2lnbnMgaW5cbiAgICogICAgLT4gVGhlbiB3ZSBzaG91bGQgcmVkaXJlY3QgdG8gdGhlIHByb2R1Y3QgcGFnZTsgb3JcbiAgICogMi4gVGhlIHVzZXIgb3BlbnMgdGhlIHByb2R1Y3QgcGFnZSwgdGhlbiBoZSBjbGlja3MgL215LWFjY291bnQgbGluayxcbiAgICogICAgYnV0IGlzIGF1dG9tYXRpY2FsbHkgcmVkaXJlY3RlZCB0byB0aGUgbG9naW4gcGFnZSBieSB0aGUgQXV0aEd1YXJkLCBhbmQgaGUgc2lnbnMgaW5cbiAgICogICAgLT4gVGhlbiB3ZSBzaG91bGQgcmVkaXJlY3QgdG8gdGhlIG15LWFjY291bnQgcGFnZSwgbm90IHRoZSBwcm9kdWN0IHBhZ2VcbiAgICovXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCByb3V0aW5nOiBSb3V0aW5nU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgcm91dGVyOiBSb3V0ZXIsXG4gICAgcHJvdGVjdGVkIGF1dGhSZWRpcmVjdFN0b3JhZ2VTZXJ2aWNlOiBBdXRoUmVkaXJlY3RTdG9yYWdlU2VydmljZVxuICApIHt9XG5cbiAgcHJpdmF0ZSBpZ25vcmVkVXJscyA9IG5ldyBTZXQ8c3RyaW5nPigpO1xuICBwcml2YXRlIGxhc3RBdXRoR3VhcmROYXZpZ2F0aW9uOiB7XG4gICAgdXJsOiBzdHJpbmc7XG4gICAgbmF2aWdhdGlvbklkOiBudW1iZXI7XG4gIH07XG5cbiAgLyoqXG4gICAqIFJlZGlyZWN0IHRvIHNhdmVkIHVybCAoaG9tZXBhZ2UgaWYgbm90aGluZyBpcyBzYXZlZCkuXG4gICAqL1xuICByZWRpcmVjdCgpIHtcbiAgICB0aGlzLmF1dGhSZWRpcmVjdFN0b3JhZ2VTZXJ2aWNlXG4gICAgICAuZ2V0UmVkaXJlY3RVcmwoKVxuICAgICAgLnBpcGUodGFrZSgxKSlcbiAgICAgIC5zdWJzY3JpYmUoKHJlZGlyZWN0VXJsKSA9PiB7XG4gICAgICAgIGlmIChyZWRpcmVjdFVybCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5yb3V0aW5nLmdvKCcvJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5yb3V0aW5nLmdvQnlVcmwocmVkaXJlY3RVcmwpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYXV0aFJlZGlyZWN0U3RvcmFnZVNlcnZpY2Uuc2V0UmVkaXJlY3RVcmwodW5kZWZpbmVkKTtcblxuICAgICAgICB0aGlzLmxhc3RBdXRoR3VhcmROYXZpZ2F0aW9uID0gdW5kZWZpbmVkO1xuICAgICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogU2F2ZXMgdXJsIG9mIGEgcGFnZSB0aGF0IHVzZXIgd2FudGVkIHRvIGFjY2VzcywgYnV0IHdhc24ndCB5ZXQgbG9nZ2VkIGluLlxuICAgKi9cbiAgcmVwb3J0QXV0aEd1YXJkKCkge1xuICAgIGNvbnN0IHsgdXJsLCBuYXZpZ2F0aW9uSWQgfSA9IHRoaXMuZ2V0Q3VycmVudE5hdmlnYXRpb24oKTtcbiAgICB0aGlzLmxhc3RBdXRoR3VhcmROYXZpZ2F0aW9uID0geyB1cmwsIG5hdmlnYXRpb25JZCB9O1xuICAgIHRoaXMuYXV0aFJlZGlyZWN0U3RvcmFnZVNlcnZpY2Uuc2V0UmVkaXJlY3RVcmwodXJsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTYXZlcyB1cmwgb2YgYSBwYWdlIHRoYXQgd2FzIGFjY2Vzc2VkIGJlZm9yZSBlbnRlcmluZyBhIHBhZ2Ugb25seSBmb3Igbm90IGF1dGggdXNlcnMuXG4gICAqL1xuICByZXBvcnROb3RBdXRoR3VhcmQoKSB7XG4gICAgY29uc3QgeyB1cmwsIGluaXRpYWxVcmwsIG5hdmlnYXRpb25JZCB9ID0gdGhpcy5nZXRDdXJyZW50TmF2aWdhdGlvbigpO1xuXG4gICAgdGhpcy5pZ25vcmVkVXJscy5hZGQodXJsKTtcblxuICAgIC8vIERvbid0IHNhdmUgcmVkaXJlY3QgdXJsIGlmIHlvdSd2ZSBhbHJlYWR5IGNvbWUgZnJvbSBwYWdlIHdpdGggTm90QXV0aEd1YXJkIChpLmUuIHVzZXIgaGFzIGNvbWUgZnJvbSBsb2dpbiB0byByZWdpc3RlcilcbiAgICBpZiAoIXRoaXMuaWdub3JlZFVybHMuaGFzKGluaXRpYWxVcmwpKSB7XG4gICAgICAvLyBXZSBjb21wYXJlIHRoZSBuYXZpZ2F0aW9uIGlkIHRvIGZpbmQgb3V0IGlmIHRoZSB1cmwgY2FuY2VsbGVkIGJ5IEF1dGhHdWFyZCAoaS5lLiBteS1hY2NvdW50KSBpcyBtb3JlIHJlY2VudFxuICAgICAgLy8gdGhhbiB0aGUgbGFzdCBvcGVuZWQgcGFnZVxuICAgICAgaWYgKFxuICAgICAgICAhdGhpcy5sYXN0QXV0aEd1YXJkTmF2aWdhdGlvbiB8fFxuICAgICAgICB0aGlzLmxhc3RBdXRoR3VhcmROYXZpZ2F0aW9uLm5hdmlnYXRpb25JZCA8IG5hdmlnYXRpb25JZCAtIDFcbiAgICAgICkge1xuICAgICAgICB0aGlzLmF1dGhSZWRpcmVjdFN0b3JhZ2VTZXJ2aWNlLnNldFJlZGlyZWN0VXJsKGluaXRpYWxVcmwpO1xuXG4gICAgICAgIHRoaXMubGFzdEF1dGhHdWFyZE5hdmlnYXRpb24gPSB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRDdXJyZW50TmF2aWdhdGlvbigpOiB7XG4gICAgbmF2aWdhdGlvbklkOiBudW1iZXI7XG4gICAgdXJsOiBzdHJpbmc7XG4gICAgaW5pdGlhbFVybDogc3RyaW5nO1xuICB9IHtcbiAgICBjb25zdCBpbml0aWFsVXJsID0gdGhpcy5yb3V0ZXIudXJsO1xuICAgIGNvbnN0IG5hdmlnYXRpb24gPSB0aGlzLnJvdXRlci5nZXRDdXJyZW50TmF2aWdhdGlvbigpO1xuICAgIGNvbnN0IHVybCA9IHRoaXMucm91dGVyLnNlcmlhbGl6ZVVybChuYXZpZ2F0aW9uLmZpbmFsVXJsKTtcbiAgICByZXR1cm4ge1xuICAgICAgbmF2aWdhdGlvbklkOiBuYXZpZ2F0aW9uLmlkLFxuICAgICAgdXJsLFxuICAgICAgaW5pdGlhbFVybCxcbiAgICB9O1xuICB9XG59XG4iXX0=