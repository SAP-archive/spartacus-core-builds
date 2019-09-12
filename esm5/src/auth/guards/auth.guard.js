/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { RoutingService } from '../../routing/facade/routing.service';
import { AuthService } from '../facade/auth.service';
import { AuthRedirectService } from './auth-redirect.service';
import * as i0 from "@angular/core";
import * as i1 from "../../routing/facade/routing.service";
import * as i2 from "../facade/auth.service";
import * as i3 from "./auth-redirect.service";
import * as i4 from "@angular/router";
var AuthGuard = /** @class */ (function () {
    function AuthGuard(routingService, authService, authRedirectService, router) {
        this.routingService = routingService;
        this.authService = authService;
        this.authRedirectService = authRedirectService;
        this.router = router;
    }
    /**
     * @return {?}
     */
    AuthGuard.prototype.canActivate = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return this.authService.getUserToken().pipe(map((/**
         * @param {?} token
         * @return {?}
         */
        function (token) {
            if (!token.access_token) {
                _this.routingService.go({ cxRoute: 'login' });
                _this.authRedirectService.reportAuthGuard();
            }
            return !!token.access_token;
        })));
    };
    AuthGuard.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    AuthGuard.ctorParameters = function () { return [
        { type: RoutingService },
        { type: AuthService },
        { type: AuthRedirectService },
        { type: Router }
    ]; };
    /** @nocollapse */ AuthGuard.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function AuthGuard_Factory() { return new AuthGuard(i0.ɵɵinject(i1.RoutingService), i0.ɵɵinject(i2.AuthService), i0.ɵɵinject(i3.AuthRedirectService), i0.ɵɵinject(i4.Router)); }, token: AuthGuard, providedIn: "root" });
    return AuthGuard;
}());
export { AuthGuard };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    AuthGuard.prototype.routingService;
    /**
     * @type {?}
     * @protected
     */
    AuthGuard.prototype.authService;
    /**
     * @type {?}
     * @protected
     */
    AuthGuard.prototype.authRedirectService;
    /**
     * @type {?}
     * @protected
     */
    AuthGuard.prototype.router;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5ndWFyZC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9hdXRoL2d1YXJkcy9hdXRoLmd1YXJkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBZSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUV0RCxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFckMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUVyRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7Ozs7O0FBRTlEO0lBSUUsbUJBQ1ksY0FBOEIsRUFDOUIsV0FBd0IsRUFDeEIsbUJBQXdDLEVBQ3hDLE1BQWM7UUFIZCxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtRQUN4QyxXQUFNLEdBQU4sTUFBTSxDQUFRO0lBQ3ZCLENBQUM7Ozs7SUFFSiwrQkFBVzs7O0lBQVg7UUFBQSxpQkFVQztRQVRDLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxJQUFJLENBQ3pDLEdBQUc7Ozs7UUFBQyxVQUFDLEtBQWdCO1lBQ25CLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxFQUFFO2dCQUN2QixLQUFJLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDO2dCQUM3QyxLQUFJLENBQUMsbUJBQW1CLENBQUMsZUFBZSxFQUFFLENBQUM7YUFDNUM7WUFDRCxPQUFPLENBQUMsQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDO1FBQzlCLENBQUMsRUFBQyxDQUNILENBQUM7SUFDSixDQUFDOztnQkFyQkYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkFQUSxjQUFjO2dCQUNkLFdBQVc7Z0JBRVgsbUJBQW1CO2dCQVBOLE1BQU07OztvQkFENUI7Q0FnQ0MsQUF0QkQsSUFzQkM7U0FuQlksU0FBUzs7Ozs7O0lBRWxCLG1DQUF3Qzs7Ozs7SUFDeEMsZ0NBQWtDOzs7OztJQUNsQyx3Q0FBa0Q7Ozs7O0lBQ2xELDJCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENhbkFjdGl2YXRlLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBSb3V0aW5nU2VydmljZSB9IGZyb20gJy4uLy4uL3JvdXRpbmcvZmFjYWRlL3JvdXRpbmcuc2VydmljZSc7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4uL2ZhY2FkZS9hdXRoLnNlcnZpY2UnO1xuaW1wb3J0IHsgVXNlclRva2VuIH0gZnJvbSAnLi4vbW9kZWxzL3Rva2VuLXR5cGVzLm1vZGVsJztcbmltcG9ydCB7IEF1dGhSZWRpcmVjdFNlcnZpY2UgfSBmcm9tICcuL2F1dGgtcmVkaXJlY3Quc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBBdXRoR3VhcmQgaW1wbGVtZW50cyBDYW5BY3RpdmF0ZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCByb3V0aW5nU2VydmljZTogUm91dGluZ1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgYXV0aFJlZGlyZWN0U2VydmljZTogQXV0aFJlZGlyZWN0U2VydmljZSxcbiAgICBwcm90ZWN0ZWQgcm91dGVyOiBSb3V0ZXJcbiAgKSB7fVxuXG4gIGNhbkFjdGl2YXRlKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLmF1dGhTZXJ2aWNlLmdldFVzZXJUb2tlbigpLnBpcGUoXG4gICAgICBtYXAoKHRva2VuOiBVc2VyVG9rZW4pID0+IHtcbiAgICAgICAgaWYgKCF0b2tlbi5hY2Nlc3NfdG9rZW4pIHtcbiAgICAgICAgICB0aGlzLnJvdXRpbmdTZXJ2aWNlLmdvKHsgY3hSb3V0ZTogJ2xvZ2luJyB9KTtcbiAgICAgICAgICB0aGlzLmF1dGhSZWRpcmVjdFNlcnZpY2UucmVwb3J0QXV0aEd1YXJkKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICEhdG9rZW4uYWNjZXNzX3Rva2VuO1xuICAgICAgfSlcbiAgICApO1xuICB9XG59XG4iXX0=