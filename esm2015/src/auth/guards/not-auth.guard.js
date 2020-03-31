import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { RoutingService } from '../../routing/facade/routing.service';
import { AuthService } from '../facade/auth.service';
import { AuthRedirectService } from './auth-redirect.service';
import * as i0 from "@angular/core";
import * as i1 from "../../routing/facade/routing.service";
import * as i2 from "../facade/auth.service";
import * as i3 from "./auth-redirect.service";
let NotAuthGuard = class NotAuthGuard {
    constructor(routingService, authService, authRedirectService) {
        this.routingService = routingService;
        this.authService = authService;
        this.authRedirectService = authRedirectService;
    }
    canActivate() {
        this.authRedirectService.reportNotAuthGuard();
        // redirect, if user is already logged in:
        return this.authService.getUserToken().pipe(map((token) => {
            if (token.access_token) {
                this.routingService.go({ cxRoute: 'home' });
            }
            return !token.access_token;
        }));
    }
};
NotAuthGuard.ctorParameters = () => [
    { type: RoutingService },
    { type: AuthService },
    { type: AuthRedirectService }
];
NotAuthGuard.ɵprov = i0.ɵɵdefineInjectable({ factory: function NotAuthGuard_Factory() { return new NotAuthGuard(i0.ɵɵinject(i1.RoutingService), i0.ɵɵinject(i2.AuthService), i0.ɵɵinject(i3.AuthRedirectService)); }, token: NotAuthGuard, providedIn: "root" });
NotAuthGuard = __decorate([
    Injectable({
        providedIn: 'root',
    })
], NotAuthGuard);
export { NotAuthGuard };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90LWF1dGguZ3VhcmQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvYXV0aC9ndWFyZHMvbm90LWF1dGguZ3VhcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHM0MsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3JDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUN0RSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDckQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7Ozs7O0FBSzlELElBQWEsWUFBWSxHQUF6QixNQUFhLFlBQVk7SUFDdkIsWUFDWSxjQUE4QixFQUM5QixXQUF3QixFQUMxQixtQkFBd0M7UUFGdEMsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQzFCLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7SUFDL0MsQ0FBQztJQUVKLFdBQVc7UUFDVCxJQUFJLENBQUMsbUJBQW1CLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUU5QywwQ0FBMEM7UUFDMUMsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksRUFBRSxDQUFDLElBQUksQ0FDekMsR0FBRyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUU7WUFDWixJQUFJLEtBQUssQ0FBQyxZQUFZLEVBQUU7Z0JBQ3RCLElBQUksQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7YUFDN0M7WUFDRCxPQUFPLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQztRQUM3QixDQUFDLENBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQztDQUNGLENBQUE7O1lBbEI2QixjQUFjO1lBQ2pCLFdBQVc7WUFDTCxtQkFBbUI7OztBQUp2QyxZQUFZO0lBSHhCLFVBQVUsQ0FBQztRQUNWLFVBQVUsRUFBRSxNQUFNO0tBQ25CLENBQUM7R0FDVyxZQUFZLENBb0J4QjtTQXBCWSxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2FuQWN0aXZhdGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgUm91dGluZ1NlcnZpY2UgfSBmcm9tICcuLi8uLi9yb3V0aW5nL2ZhY2FkZS9yb3V0aW5nLnNlcnZpY2UnO1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuLi9mYWNhZGUvYXV0aC5zZXJ2aWNlJztcbmltcG9ydCB7IEF1dGhSZWRpcmVjdFNlcnZpY2UgfSBmcm9tICcuL2F1dGgtcmVkaXJlY3Quc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBOb3RBdXRoR3VhcmQgaW1wbGVtZW50cyBDYW5BY3RpdmF0ZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCByb3V0aW5nU2VydmljZTogUm91dGluZ1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSxcbiAgICBwcml2YXRlIGF1dGhSZWRpcmVjdFNlcnZpY2U6IEF1dGhSZWRpcmVjdFNlcnZpY2VcbiAgKSB7fVxuXG4gIGNhbkFjdGl2YXRlKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHRoaXMuYXV0aFJlZGlyZWN0U2VydmljZS5yZXBvcnROb3RBdXRoR3VhcmQoKTtcblxuICAgIC8vIHJlZGlyZWN0LCBpZiB1c2VyIGlzIGFscmVhZHkgbG9nZ2VkIGluOlxuICAgIHJldHVybiB0aGlzLmF1dGhTZXJ2aWNlLmdldFVzZXJUb2tlbigpLnBpcGUoXG4gICAgICBtYXAoKHRva2VuKSA9PiB7XG4gICAgICAgIGlmICh0b2tlbi5hY2Nlc3NfdG9rZW4pIHtcbiAgICAgICAgICB0aGlzLnJvdXRpbmdTZXJ2aWNlLmdvKHsgY3hSb3V0ZTogJ2hvbWUnIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAhdG9rZW4uYWNjZXNzX3Rva2VuO1xuICAgICAgfSlcbiAgICApO1xuICB9XG59XG4iXX0=