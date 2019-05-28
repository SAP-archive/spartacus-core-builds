/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
    /**
     * @return {?}
     */
    NotAuthGuard.prototype.canActivate = /**
     * @return {?}
     */
    function () {
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
    NotAuthGuard.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    NotAuthGuard.ctorParameters = function () { return [
        { type: RoutingService },
        { type: AuthService },
        { type: AuthRedirectService }
    ]; };
    /** @nocollapse */ NotAuthGuard.ngInjectableDef = i0.defineInjectable({ factory: function NotAuthGuard_Factory() { return new NotAuthGuard(i0.inject(i1.RoutingService), i0.inject(i2.AuthService), i0.inject(i3.AuthRedirectService)); }, token: NotAuthGuard, providedIn: "root" });
    return NotAuthGuard;
}());
export { NotAuthGuard };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    NotAuthGuard.prototype.routingService;
    /**
     * @type {?}
     * @protected
     */
    NotAuthGuard.prototype.authService;
    /**
     * @type {?}
     * @private
     */
    NotAuthGuard.prototype.authRedirectService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90LWF1dGguZ3VhcmQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvYXV0aC9ndWFyZHMvbm90LWF1dGguZ3VhcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHM0MsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3JDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUN0RSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDckQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7Ozs7O0FBRTlEO0lBSUUsc0JBQ1ksY0FBOEIsRUFDOUIsV0FBd0IsRUFDMUIsbUJBQXdDO1FBRnRDLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUMxQix3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO0lBQy9DLENBQUM7Ozs7SUFFSixrQ0FBVzs7O0lBQVg7UUFBQSxpQkFZQztRQVhDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBRTlDLDBDQUEwQztRQUMxQyxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxFQUFFLENBQUMsSUFBSSxDQUN6QyxHQUFHLENBQUMsVUFBQSxLQUFLO1lBQ1AsSUFBSSxLQUFLLENBQUMsWUFBWSxFQUFFO2dCQUN0QixLQUFJLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO2FBQzdDO1lBQ0QsT0FBTyxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUM7UUFDN0IsQ0FBQyxDQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7O2dCQXRCRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O2dCQU5RLGNBQWM7Z0JBQ2QsV0FBVztnQkFDWCxtQkFBbUI7Ozt1QkFONUI7Q0ErQkMsQUF2QkQsSUF1QkM7U0FwQlksWUFBWTs7Ozs7O0lBRXJCLHNDQUF3Qzs7Ozs7SUFDeEMsbUNBQWtDOzs7OztJQUNsQywyQ0FBZ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDYW5BY3RpdmF0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBSb3V0aW5nU2VydmljZSB9IGZyb20gJy4uLy4uL3JvdXRpbmcvZmFjYWRlL3JvdXRpbmcuc2VydmljZSc7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4uL2ZhY2FkZS9hdXRoLnNlcnZpY2UnO1xuaW1wb3J0IHsgQXV0aFJlZGlyZWN0U2VydmljZSB9IGZyb20gJy4vYXV0aC1yZWRpcmVjdC5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIE5vdEF1dGhHdWFyZCBpbXBsZW1lbnRzIENhbkFjdGl2YXRlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIHJvdXRpbmdTZXJ2aWNlOiBSb3V0aW5nU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLFxuICAgIHByaXZhdGUgYXV0aFJlZGlyZWN0U2VydmljZTogQXV0aFJlZGlyZWN0U2VydmljZVxuICApIHt9XG5cbiAgY2FuQWN0aXZhdGUoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgdGhpcy5hdXRoUmVkaXJlY3RTZXJ2aWNlLnJlcG9ydE5vdEF1dGhHdWFyZCgpO1xuXG4gICAgLy8gcmVkaXJlY3QsIGlmIHVzZXIgaXMgYWxyZWFkeSBsb2dnZWQgaW46XG4gICAgcmV0dXJuIHRoaXMuYXV0aFNlcnZpY2UuZ2V0VXNlclRva2VuKCkucGlwZShcbiAgICAgIG1hcCh0b2tlbiA9PiB7XG4gICAgICAgIGlmICh0b2tlbi5hY2Nlc3NfdG9rZW4pIHtcbiAgICAgICAgICB0aGlzLnJvdXRpbmdTZXJ2aWNlLmdvKHsgY3hSb3V0ZTogJ2hvbWUnIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAhdG9rZW4uYWNjZXNzX3Rva2VuO1xuICAgICAgfSlcbiAgICApO1xuICB9XG59XG4iXX0=