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
     * @private
     * @return {?}
     */
    UserErrorHandlingService.prototype.handleExpiredToken = /**
     * @private
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
                _this.routingService.go({ route: 'login' });
            }
            oldToken = oldToken || token;
        }), filter(function (token) { return oldToken.access_token !== token.access_token; }), take(1));
    };
    /**
     * @private
     * @param {?} request
     * @param {?} token
     * @return {?}
     */
    UserErrorHandlingService.prototype.createNewRequestWithNewToken = /**
     * @private
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
     * @private
     */
    UserErrorHandlingService.prototype.authService;
    /**
     * @type {?}
     * @private
     */
    UserErrorHandlingService.prototype.routingService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1lcnJvci1oYW5kbGluZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2F1dGgvc2VydmljZXMvdXNlci1lcnJvci91c2VyLWVycm9yLWhhbmRsaW5nLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFJM0MsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTlELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUV4RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFFekU7SUFFRSxrQ0FDVSxXQUF3QixFQUN4QixjQUE4QjtRQUQ5QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7SUFDckMsQ0FBQzs7Ozs7O0lBRUcseURBQXNCOzs7OztJQUE3QixVQUNFLE9BQXlCLEVBQ3pCLElBQWlCO1FBRm5CLGlCQVNDO1FBTEMsT0FBTyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxJQUFJLENBQ25DLFNBQVMsQ0FBQyxVQUFDLEtBQWdCO1lBQ3pCLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFJLENBQUMsNEJBQTRCLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDeEUsQ0FBQyxDQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7Ozs7SUFFTSw0REFBeUI7OztJQUFoQztRQUNFLGNBQWM7UUFDZCxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQzVCLENBQUM7Ozs7O0lBRU8scURBQWtCOzs7O0lBQTFCO1FBQUEsaUJBZ0JDOztZQWZLLFFBQW1CO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxJQUFJLENBQ3pDLEdBQUcsQ0FBQyxVQUFDLEtBQWdCO1lBQ25CLElBQUksS0FBSyxDQUFDLFlBQVksSUFBSSxLQUFLLENBQUMsYUFBYSxJQUFJLENBQUMsUUFBUSxFQUFFO2dCQUMxRCxLQUFJLENBQUMsV0FBVyxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQzFDO2lCQUFNLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsRUFBRTtnQkFDdEQsS0FBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQzthQUM1QztZQUNELFFBQVEsR0FBRyxRQUFRLElBQUksS0FBSyxDQUFDO1FBQy9CLENBQUMsQ0FBQyxFQUNGLE1BQU0sQ0FDSixVQUFDLEtBQWdCLElBQUssT0FBQSxRQUFRLENBQUMsWUFBWSxLQUFLLEtBQUssQ0FBQyxZQUFZLEVBQTVDLENBQTRDLENBQ25FLEVBQ0QsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUNSLENBQUM7SUFDSixDQUFDOzs7Ozs7O0lBRU8sK0RBQTRCOzs7Ozs7SUFBcEMsVUFDRSxPQUF5QixFQUN6QixLQUFnQjtRQUVoQixPQUFPLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQztZQUN0QixVQUFVLEVBQUU7Z0JBQ1YsYUFBYSxFQUFLLEtBQUssQ0FBQyxVQUFVLFNBQUksS0FBSyxDQUFDLFlBQWM7YUFDM0Q7U0FDRixDQUFDLENBQUM7UUFDSCxPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFDOztnQkFuREYsVUFBVTs7OztnQkFKRixXQUFXO2dCQUVYLGNBQWM7O0lBc0R2QiwrQkFBQztDQUFBLEFBcERELElBb0RDO1NBbkRZLHdCQUF3Qjs7Ozs7O0lBRWpDLCtDQUFnQzs7Ozs7SUFDaEMsa0RBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cFJlcXVlc3QsIEh0dHBIYW5kbGVyLCBIdHRwRXZlbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5cbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRhcCwgZmlsdGVyLCB0YWtlLCBzd2l0Y2hNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vZmFjYWRlL2F1dGguc2VydmljZSc7XG5pbXBvcnQgeyBVc2VyVG9rZW4gfSBmcm9tICcuLi8uLi9tb2RlbHMvdG9rZW4tdHlwZXMubW9kZWwnO1xuaW1wb3J0IHsgUm91dGluZ1NlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9yb3V0aW5nL2ZhY2FkZS9yb3V0aW5nLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVXNlckVycm9ySGFuZGxpbmdTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UsXG4gICAgcHJpdmF0ZSByb3V0aW5nU2VydmljZTogUm91dGluZ1NlcnZpY2VcbiAgKSB7fVxuXG4gIHB1YmxpYyBoYW5kbGVFeHBpcmVkVXNlclRva2VuKFxuICAgIHJlcXVlc3Q6IEh0dHBSZXF1ZXN0PGFueT4sXG4gICAgbmV4dDogSHR0cEhhbmRsZXJcbiAgKTogT2JzZXJ2YWJsZTxIdHRwRXZlbnQ8VXNlclRva2VuPj4ge1xuICAgIHJldHVybiB0aGlzLmhhbmRsZUV4cGlyZWRUb2tlbigpLnBpcGUoXG4gICAgICBzd2l0Y2hNYXAoKHRva2VuOiBVc2VyVG9rZW4pID0+IHtcbiAgICAgICAgcmV0dXJuIG5leHQuaGFuZGxlKHRoaXMuY3JlYXRlTmV3UmVxdWVzdFdpdGhOZXdUb2tlbihyZXF1ZXN0LCB0b2tlbikpO1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgcHVibGljIGhhbmRsZUV4cGlyZWRSZWZyZXNoVG9rZW4oKTogdm9pZCB7XG4gICAgLy8gTG9nb3V0IHVzZXJcbiAgICB0aGlzLmF1dGhTZXJ2aWNlLmxvZ291dCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVFeHBpcmVkVG9rZW4oKTogT2JzZXJ2YWJsZTxVc2VyVG9rZW4+IHtcbiAgICBsZXQgb2xkVG9rZW46IFVzZXJUb2tlbjtcbiAgICByZXR1cm4gdGhpcy5hdXRoU2VydmljZS5nZXRVc2VyVG9rZW4oKS5waXBlKFxuICAgICAgdGFwKCh0b2tlbjogVXNlclRva2VuKSA9PiB7XG4gICAgICAgIGlmICh0b2tlbi5hY2Nlc3NfdG9rZW4gJiYgdG9rZW4ucmVmcmVzaF90b2tlbiAmJiAhb2xkVG9rZW4pIHtcbiAgICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLnJlZnJlc2hVc2VyVG9rZW4odG9rZW4pO1xuICAgICAgICB9IGVsc2UgaWYgKCF0b2tlbi5hY2Nlc3NfdG9rZW4gJiYgIXRva2VuLnJlZnJlc2hfdG9rZW4pIHtcbiAgICAgICAgICB0aGlzLnJvdXRpbmdTZXJ2aWNlLmdvKHsgcm91dGU6ICdsb2dpbicgfSk7XG4gICAgICAgIH1cbiAgICAgICAgb2xkVG9rZW4gPSBvbGRUb2tlbiB8fCB0b2tlbjtcbiAgICAgIH0pLFxuICAgICAgZmlsdGVyKFxuICAgICAgICAodG9rZW46IFVzZXJUb2tlbikgPT4gb2xkVG9rZW4uYWNjZXNzX3Rva2VuICE9PSB0b2tlbi5hY2Nlc3NfdG9rZW5cbiAgICAgICksXG4gICAgICB0YWtlKDEpXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlTmV3UmVxdWVzdFdpdGhOZXdUb2tlbihcbiAgICByZXF1ZXN0OiBIdHRwUmVxdWVzdDxhbnk+LFxuICAgIHRva2VuOiBVc2VyVG9rZW5cbiAgKTogSHR0cFJlcXVlc3Q8YW55PiB7XG4gICAgcmVxdWVzdCA9IHJlcXVlc3QuY2xvbmUoe1xuICAgICAgc2V0SGVhZGVyczoge1xuICAgICAgICBBdXRob3JpemF0aW9uOiBgJHt0b2tlbi50b2tlbl90eXBlfSAke3Rva2VuLmFjY2Vzc190b2tlbn1gLFxuICAgICAgfSxcbiAgICB9KTtcbiAgICByZXR1cm4gcmVxdWVzdDtcbiAgfVxufVxuIl19