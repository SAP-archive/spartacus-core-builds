/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { RoutingService } from '../../routing/facade/routing.service';
import { AuthService } from '../facade/auth.service';
import * as i0 from "@angular/core";
import * as i1 from "../../routing/facade/routing.service";
import * as i2 from "../facade/auth.service";
var NotAuthGuard = /** @class */ (function () {
    function NotAuthGuard(routingService, authService) {
        this.routingService = routingService;
        this.authService = authService;
    }
    /**
     * @return {?}
     */
    NotAuthGuard.prototype.canActivate = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return this.authService.getUserToken().pipe(map(function (token) {
            if (token.access_token) {
                _this.routingService.go({ route: 'home' });
            }
            return !token.access_token;
        }));
    };
    NotAuthGuard.GUARD_NAME = 'NotAuthGuard';
    NotAuthGuard.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    NotAuthGuard.ctorParameters = function () { return [
        { type: RoutingService },
        { type: AuthService }
    ]; };
    /** @nocollapse */ NotAuthGuard.ngInjectableDef = i0.defineInjectable({ factory: function NotAuthGuard_Factory() { return new NotAuthGuard(i0.inject(i1.RoutingService), i0.inject(i2.AuthService)); }, token: NotAuthGuard, providedIn: "root" });
    return NotAuthGuard;
}());
export { NotAuthGuard };
if (false) {
    /** @type {?} */
    NotAuthGuard.GUARD_NAME;
    /**
     * @type {?}
     * @private
     */
    NotAuthGuard.prototype.routingService;
    /**
     * @type {?}
     * @private
     */
    NotAuthGuard.prototype.authService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90LWF1dGguZ3VhcmQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvYXV0aC9ndWFyZHMvbm90LWF1dGguZ3VhcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHM0MsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3JDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUN0RSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7Ozs7QUFFckQ7SUFNRSxzQkFDVSxjQUE4QixFQUM5QixXQUF3QjtRQUR4QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7SUFDL0IsQ0FBQzs7OztJQUVKLGtDQUFXOzs7SUFBWDtRQUFBLGlCQVNDO1FBUkMsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksRUFBRSxDQUFDLElBQUksQ0FDekMsR0FBRyxDQUFDLFVBQUEsS0FBSztZQUNQLElBQUksS0FBSyxDQUFDLFlBQVksRUFBRTtnQkFDdEIsS0FBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQzthQUMzQztZQUNELE9BQU8sQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDO1FBQzdCLENBQUMsQ0FBQyxDQUNILENBQUM7SUFDSixDQUFDO0lBaEJNLHVCQUFVLEdBQUcsY0FBYyxDQUFDOztnQkFKcEMsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkFMUSxjQUFjO2dCQUNkLFdBQVc7Ozt1QkFMcEI7Q0E0QkMsQUFyQkQsSUFxQkM7U0FsQlksWUFBWTs7O0lBQ3ZCLHdCQUFtQzs7Ozs7SUFHakMsc0NBQXNDOzs7OztJQUN0QyxtQ0FBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDYW5BY3RpdmF0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBSb3V0aW5nU2VydmljZSB9IGZyb20gJy4uLy4uL3JvdXRpbmcvZmFjYWRlL3JvdXRpbmcuc2VydmljZSc7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4uL2ZhY2FkZS9hdXRoLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgTm90QXV0aEd1YXJkIGltcGxlbWVudHMgQ2FuQWN0aXZhdGUge1xuICBzdGF0aWMgR1VBUkRfTkFNRSA9ICdOb3RBdXRoR3VhcmQnO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcm91dGluZ1NlcnZpY2U6IFJvdXRpbmdTZXJ2aWNlLFxuICAgIHByaXZhdGUgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlXG4gICkge31cblxuICBjYW5BY3RpdmF0ZSgpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5hdXRoU2VydmljZS5nZXRVc2VyVG9rZW4oKS5waXBlKFxuICAgICAgbWFwKHRva2VuID0+IHtcbiAgICAgICAgaWYgKHRva2VuLmFjY2Vzc190b2tlbikge1xuICAgICAgICAgIHRoaXMucm91dGluZ1NlcnZpY2UuZ28oeyByb3V0ZTogJ2hvbWUnIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAhdG9rZW4uYWNjZXNzX3Rva2VuO1xuICAgICAgfSlcbiAgICApO1xuICB9XG59XG4iXX0=