/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { tap, filter, take, switchMap } from 'rxjs/operators';
import { AuthService } from '../../facade/auth.service';
import { RoutingService } from '../../../routing/facade/routing.service';
var UserErrorHandlingService = /** @class */ (function () {
    function UserErrorHandlingService(authService, routingService) {
        this.authService = authService;
        this.routingService = routingService;
    }
    /**
     * @param {?} request
     * @param {?} next
     * @return {?}
     */
    UserErrorHandlingService.prototype.handleExpiredUserToken = /**
     * @param {?} request
     * @param {?} next
     * @return {?}
     */
    function (request, next) {
        var _this = this;
        return this.handleExpiredToken().pipe(switchMap(function (token) {
            return next.handle(_this.createNewRequestWithNewToken(request, token));
        }));
    };
    /**
     * @return {?}
     */
    UserErrorHandlingService.prototype.handleExpiredRefreshToken = /**
     * @return {?}
     */
    function () {
        // Logout user
        this.authService.logout();
    };
    /**
     * @protected
     * @return {?}
     */
    UserErrorHandlingService.prototype.handleExpiredToken = /**
     * @protected
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var oldToken;
        return this.authService.getUserToken().pipe(tap(function (token) {
            if (token.access_token && token.refresh_token && !oldToken) {
                _this.authService.refreshUserToken(token);
            }
            else if (!token.access_token && !token.refresh_token) {
                _this.routingService.go({ cxRoute: 'login' });
            }
            oldToken = oldToken || token;
        }), filter(function (token) { return oldToken.access_token !== token.access_token; }), take(1));
    };
    /**
     * @protected
     * @param {?} request
     * @param {?} token
     * @return {?}
     */
    UserErrorHandlingService.prototype.createNewRequestWithNewToken = /**
     * @protected
     * @param {?} request
     * @param {?} token
     * @return {?}
     */
    function (request, token) {
        request = request.clone({
            setHeaders: {
                Authorization: token.token_type + " " + token.access_token,
            },
        });
        return request;
    };
    UserErrorHandlingService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    UserErrorHandlingService.ctorParameters = function () { return [
        { type: AuthService },
        { type: RoutingService }
    ]; };
    return UserErrorHandlingService;
}());
export { UserErrorHandlingService };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    UserErrorHandlingService.prototype.authService;
    /**
     * @type {?}
     * @protected
     */
    UserErrorHandlingService.prototype.routingService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1lcnJvci1oYW5kbGluZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2F1dGgvc2VydmljZXMvdXNlci1lcnJvci91c2VyLWVycm9yLWhhbmRsaW5nLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFJM0MsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTlELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUV4RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFFekU7SUFFRSxrQ0FDWSxXQUF3QixFQUN4QixjQUE4QjtRQUQ5QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7SUFDdkMsQ0FBQzs7Ozs7O0lBRUcseURBQXNCOzs7OztJQUE3QixVQUNFLE9BQXlCLEVBQ3pCLElBQWlCO1FBRm5CLGlCQVNDO1FBTEMsT0FBTyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxJQUFJLENBQ25DLFNBQVMsQ0FBQyxVQUFDLEtBQWdCO1lBQ3pCLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFJLENBQUMsNEJBQTRCLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDeEUsQ0FBQyxDQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7Ozs7SUFFTSw0REFBeUI7OztJQUFoQztRQUNFLGNBQWM7UUFDZCxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQzVCLENBQUM7Ozs7O0lBRVMscURBQWtCOzs7O0lBQTVCO1FBQUEsaUJBZ0JDOztZQWZLLFFBQW1CO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxJQUFJLENBQ3pDLEdBQUcsQ0FBQyxVQUFDLEtBQWdCO1lBQ25CLElBQUksS0FBSyxDQUFDLFlBQVksSUFBSSxLQUFLLENBQUMsYUFBYSxJQUFJLENBQUMsUUFBUSxFQUFFO2dCQUMxRCxLQUFJLENBQUMsV0FBVyxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQzFDO2lCQUFNLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsRUFBRTtnQkFDdEQsS0FBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQzthQUM5QztZQUNELFFBQVEsR0FBRyxRQUFRLElBQUksS0FBSyxDQUFDO1FBQy9CLENBQUMsQ0FBQyxFQUNGLE1BQU0sQ0FDSixVQUFDLEtBQWdCLElBQUssT0FBQSxRQUFRLENBQUMsWUFBWSxLQUFLLEtBQUssQ0FBQyxZQUFZLEVBQTVDLENBQTRDLENBQ25FLEVBQ0QsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUNSLENBQUM7SUFDSixDQUFDOzs7Ozs7O0lBRVMsK0RBQTRCOzs7Ozs7SUFBdEMsVUFDRSxPQUF5QixFQUN6QixLQUFnQjtRQUVoQixPQUFPLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQztZQUN0QixVQUFVLEVBQUU7Z0JBQ1YsYUFBYSxFQUFLLEtBQUssQ0FBQyxVQUFVLFNBQUksS0FBSyxDQUFDLFlBQWM7YUFDM0Q7U0FDRixDQUFDLENBQUM7UUFDSCxPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFDOztnQkFuREYsVUFBVTs7OztnQkFKRixXQUFXO2dCQUVYLGNBQWM7O0lBc0R2QiwrQkFBQztDQUFBLEFBcERELElBb0RDO1NBbkRZLHdCQUF3Qjs7Ozs7O0lBRWpDLCtDQUFrQzs7Ozs7SUFDbEMsa0RBQXdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cFJlcXVlc3QsIEh0dHBIYW5kbGVyLCBIdHRwRXZlbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5cbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRhcCwgZmlsdGVyLCB0YWtlLCBzd2l0Y2hNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vZmFjYWRlL2F1dGguc2VydmljZSc7XG5pbXBvcnQgeyBVc2VyVG9rZW4gfSBmcm9tICcuLi8uLi9tb2RlbHMvdG9rZW4tdHlwZXMubW9kZWwnO1xuaW1wb3J0IHsgUm91dGluZ1NlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9yb3V0aW5nL2ZhY2FkZS9yb3V0aW5nLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVXNlckVycm9ySGFuZGxpbmdTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgcm91dGluZ1NlcnZpY2U6IFJvdXRpbmdTZXJ2aWNlXG4gICkge31cblxuICBwdWJsaWMgaGFuZGxlRXhwaXJlZFVzZXJUb2tlbihcbiAgICByZXF1ZXN0OiBIdHRwUmVxdWVzdDxhbnk+LFxuICAgIG5leHQ6IEh0dHBIYW5kbGVyXG4gICk6IE9ic2VydmFibGU8SHR0cEV2ZW50PFVzZXJUb2tlbj4+IHtcbiAgICByZXR1cm4gdGhpcy5oYW5kbGVFeHBpcmVkVG9rZW4oKS5waXBlKFxuICAgICAgc3dpdGNoTWFwKCh0b2tlbjogVXNlclRva2VuKSA9PiB7XG4gICAgICAgIHJldHVybiBuZXh0LmhhbmRsZSh0aGlzLmNyZWF0ZU5ld1JlcXVlc3RXaXRoTmV3VG9rZW4ocmVxdWVzdCwgdG9rZW4pKTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIHB1YmxpYyBoYW5kbGVFeHBpcmVkUmVmcmVzaFRva2VuKCk6IHZvaWQge1xuICAgIC8vIExvZ291dCB1c2VyXG4gICAgdGhpcy5hdXRoU2VydmljZS5sb2dvdXQoKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBoYW5kbGVFeHBpcmVkVG9rZW4oKTogT2JzZXJ2YWJsZTxVc2VyVG9rZW4+IHtcbiAgICBsZXQgb2xkVG9rZW46IFVzZXJUb2tlbjtcbiAgICByZXR1cm4gdGhpcy5hdXRoU2VydmljZS5nZXRVc2VyVG9rZW4oKS5waXBlKFxuICAgICAgdGFwKCh0b2tlbjogVXNlclRva2VuKSA9PiB7XG4gICAgICAgIGlmICh0b2tlbi5hY2Nlc3NfdG9rZW4gJiYgdG9rZW4ucmVmcmVzaF90b2tlbiAmJiAhb2xkVG9rZW4pIHtcbiAgICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLnJlZnJlc2hVc2VyVG9rZW4odG9rZW4pO1xuICAgICAgICB9IGVsc2UgaWYgKCF0b2tlbi5hY2Nlc3NfdG9rZW4gJiYgIXRva2VuLnJlZnJlc2hfdG9rZW4pIHtcbiAgICAgICAgICB0aGlzLnJvdXRpbmdTZXJ2aWNlLmdvKHsgY3hSb3V0ZTogJ2xvZ2luJyB9KTtcbiAgICAgICAgfVxuICAgICAgICBvbGRUb2tlbiA9IG9sZFRva2VuIHx8IHRva2VuO1xuICAgICAgfSksXG4gICAgICBmaWx0ZXIoXG4gICAgICAgICh0b2tlbjogVXNlclRva2VuKSA9PiBvbGRUb2tlbi5hY2Nlc3NfdG9rZW4gIT09IHRva2VuLmFjY2Vzc190b2tlblxuICAgICAgKSxcbiAgICAgIHRha2UoMSlcbiAgICApO1xuICB9XG5cbiAgcHJvdGVjdGVkIGNyZWF0ZU5ld1JlcXVlc3RXaXRoTmV3VG9rZW4oXG4gICAgcmVxdWVzdDogSHR0cFJlcXVlc3Q8YW55PixcbiAgICB0b2tlbjogVXNlclRva2VuXG4gICk6IEh0dHBSZXF1ZXN0PGFueT4ge1xuICAgIHJlcXVlc3QgPSByZXF1ZXN0LmNsb25lKHtcbiAgICAgIHNldEhlYWRlcnM6IHtcbiAgICAgICAgQXV0aG9yaXphdGlvbjogYCR7dG9rZW4udG9rZW5fdHlwZX0gJHt0b2tlbi5hY2Nlc3NfdG9rZW59YCxcbiAgICAgIH0sXG4gICAgfSk7XG4gICAgcmV0dXJuIHJlcXVlc3Q7XG4gIH1cbn1cbiJdfQ==