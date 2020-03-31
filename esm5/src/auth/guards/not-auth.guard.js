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
var NotAuthGuard = /** @class */ (function () {
    function NotAuthGuard(routingService, authService, authRedirectService) {
        this.routingService = routingService;
        this.authService = authService;
        this.authRedirectService = authRedirectService;
    }
    NotAuthGuard.prototype.canActivate = function () {
        var _this = this;
        this.authRedirectService.reportNotAuthGuard();
        // redirect, if user is already logged in:
        return this.authService.getUserToken().pipe(map(function (token) {
            if (token.access_token) {
                _this.routingService.go({ cxRoute: 'home' });
            }
            return !token.access_token;
        }));
    };
    NotAuthGuard.ctorParameters = function () { return [
        { type: RoutingService },
        { type: AuthService },
        { type: AuthRedirectService }
    ]; };
    NotAuthGuard.ɵprov = i0.ɵɵdefineInjectable({ factory: function NotAuthGuard_Factory() { return new NotAuthGuard(i0.ɵɵinject(i1.RoutingService), i0.ɵɵinject(i2.AuthService), i0.ɵɵinject(i3.AuthRedirectService)); }, token: NotAuthGuard, providedIn: "root" });
    NotAuthGuard = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], NotAuthGuard);
    return NotAuthGuard;
}());
export { NotAuthGuard };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90LWF1dGguZ3VhcmQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvYXV0aC9ndWFyZHMvbm90LWF1dGguZ3VhcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHM0MsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3JDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUN0RSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDckQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7Ozs7O0FBSzlEO0lBQ0Usc0JBQ1ksY0FBOEIsRUFDOUIsV0FBd0IsRUFDMUIsbUJBQXdDO1FBRnRDLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUMxQix3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO0lBQy9DLENBQUM7SUFFSixrQ0FBVyxHQUFYO1FBQUEsaUJBWUM7UUFYQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUU5QywwQ0FBMEM7UUFDMUMsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksRUFBRSxDQUFDLElBQUksQ0FDekMsR0FBRyxDQUFDLFVBQUMsS0FBSztZQUNSLElBQUksS0FBSyxDQUFDLFlBQVksRUFBRTtnQkFDdEIsS0FBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQzthQUM3QztZQUNELE9BQU8sQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDO1FBQzdCLENBQUMsQ0FBQyxDQUNILENBQUM7SUFDSixDQUFDOztnQkFqQjJCLGNBQWM7Z0JBQ2pCLFdBQVc7Z0JBQ0wsbUJBQW1COzs7SUFKdkMsWUFBWTtRQUh4QixVQUFVLENBQUM7WUFDVixVQUFVLEVBQUUsTUFBTTtTQUNuQixDQUFDO09BQ1csWUFBWSxDQW9CeEI7dUJBL0JEO0NBK0JDLEFBcEJELElBb0JDO1NBcEJZLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDYW5BY3RpdmF0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBSb3V0aW5nU2VydmljZSB9IGZyb20gJy4uLy4uL3JvdXRpbmcvZmFjYWRlL3JvdXRpbmcuc2VydmljZSc7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4uL2ZhY2FkZS9hdXRoLnNlcnZpY2UnO1xuaW1wb3J0IHsgQXV0aFJlZGlyZWN0U2VydmljZSB9IGZyb20gJy4vYXV0aC1yZWRpcmVjdC5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIE5vdEF1dGhHdWFyZCBpbXBsZW1lbnRzIENhbkFjdGl2YXRlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIHJvdXRpbmdTZXJ2aWNlOiBSb3V0aW5nU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLFxuICAgIHByaXZhdGUgYXV0aFJlZGlyZWN0U2VydmljZTogQXV0aFJlZGlyZWN0U2VydmljZVxuICApIHt9XG5cbiAgY2FuQWN0aXZhdGUoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgdGhpcy5hdXRoUmVkaXJlY3RTZXJ2aWNlLnJlcG9ydE5vdEF1dGhHdWFyZCgpO1xuXG4gICAgLy8gcmVkaXJlY3QsIGlmIHVzZXIgaXMgYWxyZWFkeSBsb2dnZWQgaW46XG4gICAgcmV0dXJuIHRoaXMuYXV0aFNlcnZpY2UuZ2V0VXNlclRva2VuKCkucGlwZShcbiAgICAgIG1hcCgodG9rZW4pID0+IHtcbiAgICAgICAgaWYgKHRva2VuLmFjY2Vzc190b2tlbikge1xuICAgICAgICAgIHRoaXMucm91dGluZ1NlcnZpY2UuZ28oeyBjeFJvdXRlOiAnaG9tZScgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICF0b2tlbi5hY2Nlc3NfdG9rZW47XG4gICAgICB9KVxuICAgICk7XG4gIH1cbn1cbiJdfQ==