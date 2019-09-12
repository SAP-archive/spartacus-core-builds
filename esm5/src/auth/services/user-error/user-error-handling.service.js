/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { filter, switchMap, take, tap } from 'rxjs/operators';
import { RoutingService } from '../../../routing/facade/routing.service';
import { AuthService } from '../../facade/auth.service';
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
        return this.handleExpiredToken().pipe(switchMap((/**
         * @param {?} token
         * @return {?}
         */
        function (token) {
            return next.handle(_this.createNewRequestWithNewToken(request, token));
        })));
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
        return this.authService.getUserToken().pipe(tap((/**
         * @param {?} token
         * @return {?}
         */
        function (token) {
            if (token.access_token && token.refresh_token && !oldToken) {
                _this.authService.refreshUserToken(token);
            }
            else if (!token.access_token && !token.refresh_token) {
                _this.routingService.go({ cxRoute: 'login' });
            }
            else if (!token.refresh_token) {
                _this.authService.logout();
                _this.routingService.go({ cxRoute: 'login' });
            }
            oldToken = oldToken || token;
        })), filter((/**
         * @param {?} token
         * @return {?}
         */
        function (token) { return oldToken.access_token !== token.access_token; })), take(1));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1lcnJvci1oYW5kbGluZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2F1dGgvc2VydmljZXMvdXNlci1lcnJvci91c2VyLWVycm9yLWhhbmRsaW5nLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzlELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUN6RSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFHeEQ7SUFFRSxrQ0FDWSxXQUF3QixFQUN4QixjQUE4QjtRQUQ5QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7SUFDdkMsQ0FBQzs7Ozs7O0lBRUcseURBQXNCOzs7OztJQUE3QixVQUNFLE9BQXlCLEVBQ3pCLElBQWlCO1FBRm5CLGlCQVNDO1FBTEMsT0FBTyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxJQUFJLENBQ25DLFNBQVM7Ozs7UUFBQyxVQUFDLEtBQWdCO1lBQ3pCLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFJLENBQUMsNEJBQTRCLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDeEUsQ0FBQyxFQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7Ozs7SUFFTSw0REFBeUI7OztJQUFoQztRQUNFLGNBQWM7UUFDZCxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQzVCLENBQUM7Ozs7O0lBRVMscURBQWtCOzs7O0lBQTVCO1FBQUEsaUJBbUJDOztZQWxCSyxRQUFtQjtRQUN2QixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxFQUFFLENBQUMsSUFBSSxDQUN6QyxHQUFHOzs7O1FBQUMsVUFBQyxLQUFnQjtZQUNuQixJQUFJLEtBQUssQ0FBQyxZQUFZLElBQUksS0FBSyxDQUFDLGFBQWEsSUFBSSxDQUFDLFFBQVEsRUFBRTtnQkFDMUQsS0FBSSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUMxQztpQkFBTSxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLEVBQUU7Z0JBQ3RELEtBQUksQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUM7YUFDOUM7aUJBQU0sSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLEVBQUU7Z0JBQy9CLEtBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLENBQUM7Z0JBQzFCLEtBQUksQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUM7YUFDOUM7WUFDRCxRQUFRLEdBQUcsUUFBUSxJQUFJLEtBQUssQ0FBQztRQUMvQixDQUFDLEVBQUMsRUFDRixNQUFNOzs7O1FBQ0osVUFBQyxLQUFnQixJQUFLLE9BQUEsUUFBUSxDQUFDLFlBQVksS0FBSyxLQUFLLENBQUMsWUFBWSxFQUE1QyxDQUE0QyxFQUNuRSxFQUNELElBQUksQ0FBQyxDQUFDLENBQUMsQ0FDUixDQUFDO0lBQ0osQ0FBQzs7Ozs7OztJQUVTLCtEQUE0Qjs7Ozs7O0lBQXRDLFVBQ0UsT0FBeUIsRUFDekIsS0FBZ0I7UUFFaEIsT0FBTyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUM7WUFDdEIsVUFBVSxFQUFFO2dCQUNWLGFBQWEsRUFBSyxLQUFLLENBQUMsVUFBVSxTQUFJLEtBQUssQ0FBQyxZQUFjO2FBQzNEO1NBQ0YsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQzs7Z0JBdERGLFVBQVU7Ozs7Z0JBSEYsV0FBVztnQkFEWCxjQUFjOztJQTJEdkIsK0JBQUM7Q0FBQSxBQXZERCxJQXVEQztTQXREWSx3QkFBd0I7Ozs7OztJQUVqQywrQ0FBa0M7Ozs7O0lBQ2xDLGtEQUF3QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBFdmVudCwgSHR0cEhhbmRsZXIsIEh0dHBSZXF1ZXN0IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCBzd2l0Y2hNYXAsIHRha2UsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFJvdXRpbmdTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vcm91dGluZy9mYWNhZGUvcm91dGluZy5zZXJ2aWNlJztcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vZmFjYWRlL2F1dGguc2VydmljZSc7XG5pbXBvcnQgeyBVc2VyVG9rZW4gfSBmcm9tICcuLi8uLi9tb2RlbHMvdG9rZW4tdHlwZXMubW9kZWwnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVXNlckVycm9ySGFuZGxpbmdTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgcm91dGluZ1NlcnZpY2U6IFJvdXRpbmdTZXJ2aWNlXG4gICkge31cblxuICBwdWJsaWMgaGFuZGxlRXhwaXJlZFVzZXJUb2tlbihcbiAgICByZXF1ZXN0OiBIdHRwUmVxdWVzdDxhbnk+LFxuICAgIG5leHQ6IEh0dHBIYW5kbGVyXG4gICk6IE9ic2VydmFibGU8SHR0cEV2ZW50PFVzZXJUb2tlbj4+IHtcbiAgICByZXR1cm4gdGhpcy5oYW5kbGVFeHBpcmVkVG9rZW4oKS5waXBlKFxuICAgICAgc3dpdGNoTWFwKCh0b2tlbjogVXNlclRva2VuKSA9PiB7XG4gICAgICAgIHJldHVybiBuZXh0LmhhbmRsZSh0aGlzLmNyZWF0ZU5ld1JlcXVlc3RXaXRoTmV3VG9rZW4ocmVxdWVzdCwgdG9rZW4pKTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIHB1YmxpYyBoYW5kbGVFeHBpcmVkUmVmcmVzaFRva2VuKCk6IHZvaWQge1xuICAgIC8vIExvZ291dCB1c2VyXG4gICAgdGhpcy5hdXRoU2VydmljZS5sb2dvdXQoKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBoYW5kbGVFeHBpcmVkVG9rZW4oKTogT2JzZXJ2YWJsZTxVc2VyVG9rZW4+IHtcbiAgICBsZXQgb2xkVG9rZW46IFVzZXJUb2tlbjtcbiAgICByZXR1cm4gdGhpcy5hdXRoU2VydmljZS5nZXRVc2VyVG9rZW4oKS5waXBlKFxuICAgICAgdGFwKCh0b2tlbjogVXNlclRva2VuKSA9PiB7XG4gICAgICAgIGlmICh0b2tlbi5hY2Nlc3NfdG9rZW4gJiYgdG9rZW4ucmVmcmVzaF90b2tlbiAmJiAhb2xkVG9rZW4pIHtcbiAgICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLnJlZnJlc2hVc2VyVG9rZW4odG9rZW4pO1xuICAgICAgICB9IGVsc2UgaWYgKCF0b2tlbi5hY2Nlc3NfdG9rZW4gJiYgIXRva2VuLnJlZnJlc2hfdG9rZW4pIHtcbiAgICAgICAgICB0aGlzLnJvdXRpbmdTZXJ2aWNlLmdvKHsgY3hSb3V0ZTogJ2xvZ2luJyB9KTtcbiAgICAgICAgfSBlbHNlIGlmICghdG9rZW4ucmVmcmVzaF90b2tlbikge1xuICAgICAgICAgIHRoaXMuYXV0aFNlcnZpY2UubG9nb3V0KCk7XG4gICAgICAgICAgdGhpcy5yb3V0aW5nU2VydmljZS5nbyh7IGN4Um91dGU6ICdsb2dpbicgfSk7XG4gICAgICAgIH1cbiAgICAgICAgb2xkVG9rZW4gPSBvbGRUb2tlbiB8fCB0b2tlbjtcbiAgICAgIH0pLFxuICAgICAgZmlsdGVyKFxuICAgICAgICAodG9rZW46IFVzZXJUb2tlbikgPT4gb2xkVG9rZW4uYWNjZXNzX3Rva2VuICE9PSB0b2tlbi5hY2Nlc3NfdG9rZW5cbiAgICAgICksXG4gICAgICB0YWtlKDEpXG4gICAgKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBjcmVhdGVOZXdSZXF1ZXN0V2l0aE5ld1Rva2VuKFxuICAgIHJlcXVlc3Q6IEh0dHBSZXF1ZXN0PGFueT4sXG4gICAgdG9rZW46IFVzZXJUb2tlblxuICApOiBIdHRwUmVxdWVzdDxhbnk+IHtcbiAgICByZXF1ZXN0ID0gcmVxdWVzdC5jbG9uZSh7XG4gICAgICBzZXRIZWFkZXJzOiB7XG4gICAgICAgIEF1dGhvcml6YXRpb246IGAke3Rva2VuLnRva2VuX3R5cGV9ICR7dG9rZW4uYWNjZXNzX3Rva2VufWAsXG4gICAgICB9LFxuICAgIH0pO1xuICAgIHJldHVybiByZXF1ZXN0O1xuICB9XG59XG4iXX0=