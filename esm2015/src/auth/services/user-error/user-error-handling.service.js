/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { filter, switchMap, take, tap } from 'rxjs/operators';
import { RoutingService } from '../../../routing/facade/routing.service';
import { AuthService } from '../../facade/auth.service';
export class UserErrorHandlingService {
    /**
     * @param {?} authService
     * @param {?} routingService
     */
    constructor(authService, routingService) {
        this.authService = authService;
        this.routingService = routingService;
    }
    /**
     * @param {?} request
     * @param {?} next
     * @return {?}
     */
    handleExpiredUserToken(request, next) {
        return this.handleExpiredToken().pipe(switchMap((/**
         * @param {?} token
         * @return {?}
         */
        (token) => {
            return next.handle(this.createNewRequestWithNewToken(request, token));
        })));
    }
    /**
     * @return {?}
     */
    handleExpiredRefreshToken() {
        // Logout user
        this.authService.logout();
    }
    /**
     * @protected
     * @return {?}
     */
    handleExpiredToken() {
        /** @type {?} */
        let oldToken;
        return this.authService.getUserToken().pipe(tap((/**
         * @param {?} token
         * @return {?}
         */
        (token) => {
            if (token.access_token && token.refresh_token && !oldToken) {
                this.authService.refreshUserToken(token);
            }
            else if (!token.access_token && !token.refresh_token) {
                this.routingService.go({ cxRoute: 'login' });
            }
            else if (!token.refresh_token) {
                this.authService.logout();
                this.routingService.go({ cxRoute: 'login' });
            }
            oldToken = oldToken || token;
        })), filter((/**
         * @param {?} token
         * @return {?}
         */
        (token) => oldToken.access_token !== token.access_token)), take(1));
    }
    /**
     * @protected
     * @param {?} request
     * @param {?} token
     * @return {?}
     */
    createNewRequestWithNewToken(request, token) {
        request = request.clone({
            setHeaders: {
                Authorization: `${token.token_type} ${token.access_token}`,
            },
        });
        return request;
    }
}
UserErrorHandlingService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
UserErrorHandlingService.ctorParameters = () => [
    { type: AuthService },
    { type: RoutingService }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1lcnJvci1oYW5kbGluZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2F1dGgvc2VydmljZXMvdXNlci1lcnJvci91c2VyLWVycm9yLWhhbmRsaW5nLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzlELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUN6RSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFJeEQsTUFBTSxPQUFPLHdCQUF3Qjs7Ozs7SUFDbkMsWUFDWSxXQUF3QixFQUN4QixjQUE4QjtRQUQ5QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7SUFDdkMsQ0FBQzs7Ozs7O0lBRUcsc0JBQXNCLENBQzNCLE9BQXlCLEVBQ3pCLElBQWlCO1FBRWpCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUMsSUFBSSxDQUNuQyxTQUFTOzs7O1FBQUMsQ0FBQyxLQUFnQixFQUFFLEVBQUU7WUFDN0IsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUN4RSxDQUFDLEVBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQzs7OztJQUVNLHlCQUF5QjtRQUM5QixjQUFjO1FBQ2QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUM1QixDQUFDOzs7OztJQUVTLGtCQUFrQjs7WUFDdEIsUUFBbUI7UUFDdkIsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksRUFBRSxDQUFDLElBQUksQ0FDekMsR0FBRzs7OztRQUFDLENBQUMsS0FBZ0IsRUFBRSxFQUFFO1lBQ3ZCLElBQUksS0FBSyxDQUFDLFlBQVksSUFBSSxLQUFLLENBQUMsYUFBYSxJQUFJLENBQUMsUUFBUSxFQUFFO2dCQUMxRCxJQUFJLENBQUMsV0FBVyxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQzFDO2lCQUFNLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsRUFBRTtnQkFDdEQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQzthQUM5QztpQkFBTSxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsRUFBRTtnQkFDL0IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQztnQkFDMUIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQzthQUM5QztZQUNELFFBQVEsR0FBRyxRQUFRLElBQUksS0FBSyxDQUFDO1FBQy9CLENBQUMsRUFBQyxFQUNGLE1BQU07Ozs7UUFDSixDQUFDLEtBQWdCLEVBQUUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxZQUFZLEtBQUssS0FBSyxDQUFDLFlBQVksRUFDbkUsRUFDRCxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQ1IsQ0FBQztJQUNKLENBQUM7Ozs7Ozs7SUFFUyw0QkFBNEIsQ0FDcEMsT0FBeUIsRUFDekIsS0FBZ0I7UUFFaEIsT0FBTyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUM7WUFDdEIsVUFBVSxFQUFFO2dCQUNWLGFBQWEsRUFBRSxHQUFHLEtBQUssQ0FBQyxVQUFVLElBQUksS0FBSyxDQUFDLFlBQVksRUFBRTthQUMzRDtTQUNGLENBQUMsQ0FBQztRQUNILE9BQU8sT0FBTyxDQUFDO0lBQ2pCLENBQUM7OztZQXRERixVQUFVOzs7O1lBSEYsV0FBVztZQURYLGNBQWM7Ozs7Ozs7SUFPbkIsK0NBQWtDOzs7OztJQUNsQyxrREFBd0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwRXZlbnQsIEh0dHBIYW5kbGVyLCBIdHRwUmVxdWVzdCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgc3dpdGNoTWFwLCB0YWtlLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBSb3V0aW5nU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3JvdXRpbmcvZmFjYWRlL3JvdXRpbmcuc2VydmljZSc7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4uLy4uL2ZhY2FkZS9hdXRoLnNlcnZpY2UnO1xuaW1wb3J0IHsgVXNlclRva2VuIH0gZnJvbSAnLi4vLi4vbW9kZWxzL3Rva2VuLXR5cGVzLm1vZGVsJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFVzZXJFcnJvckhhbmRsaW5nU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHJvdXRpbmdTZXJ2aWNlOiBSb3V0aW5nU2VydmljZVxuICApIHt9XG5cbiAgcHVibGljIGhhbmRsZUV4cGlyZWRVc2VyVG9rZW4oXG4gICAgcmVxdWVzdDogSHR0cFJlcXVlc3Q8YW55PixcbiAgICBuZXh0OiBIdHRwSGFuZGxlclxuICApOiBPYnNlcnZhYmxlPEh0dHBFdmVudDxVc2VyVG9rZW4+PiB7XG4gICAgcmV0dXJuIHRoaXMuaGFuZGxlRXhwaXJlZFRva2VuKCkucGlwZShcbiAgICAgIHN3aXRjaE1hcCgodG9rZW46IFVzZXJUb2tlbikgPT4ge1xuICAgICAgICByZXR1cm4gbmV4dC5oYW5kbGUodGhpcy5jcmVhdGVOZXdSZXF1ZXN0V2l0aE5ld1Rva2VuKHJlcXVlc3QsIHRva2VuKSk7XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBwdWJsaWMgaGFuZGxlRXhwaXJlZFJlZnJlc2hUb2tlbigpOiB2b2lkIHtcbiAgICAvLyBMb2dvdXQgdXNlclxuICAgIHRoaXMuYXV0aFNlcnZpY2UubG9nb3V0KCk7XG4gIH1cblxuICBwcm90ZWN0ZWQgaGFuZGxlRXhwaXJlZFRva2VuKCk6IE9ic2VydmFibGU8VXNlclRva2VuPiB7XG4gICAgbGV0IG9sZFRva2VuOiBVc2VyVG9rZW47XG4gICAgcmV0dXJuIHRoaXMuYXV0aFNlcnZpY2UuZ2V0VXNlclRva2VuKCkucGlwZShcbiAgICAgIHRhcCgodG9rZW46IFVzZXJUb2tlbikgPT4ge1xuICAgICAgICBpZiAodG9rZW4uYWNjZXNzX3Rva2VuICYmIHRva2VuLnJlZnJlc2hfdG9rZW4gJiYgIW9sZFRva2VuKSB7XG4gICAgICAgICAgdGhpcy5hdXRoU2VydmljZS5yZWZyZXNoVXNlclRva2VuKHRva2VuKTtcbiAgICAgICAgfSBlbHNlIGlmICghdG9rZW4uYWNjZXNzX3Rva2VuICYmICF0b2tlbi5yZWZyZXNoX3Rva2VuKSB7XG4gICAgICAgICAgdGhpcy5yb3V0aW5nU2VydmljZS5nbyh7IGN4Um91dGU6ICdsb2dpbicgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAoIXRva2VuLnJlZnJlc2hfdG9rZW4pIHtcbiAgICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLmxvZ291dCgpO1xuICAgICAgICAgIHRoaXMucm91dGluZ1NlcnZpY2UuZ28oeyBjeFJvdXRlOiAnbG9naW4nIH0pO1xuICAgICAgICB9XG4gICAgICAgIG9sZFRva2VuID0gb2xkVG9rZW4gfHwgdG9rZW47XG4gICAgICB9KSxcbiAgICAgIGZpbHRlcihcbiAgICAgICAgKHRva2VuOiBVc2VyVG9rZW4pID0+IG9sZFRva2VuLmFjY2Vzc190b2tlbiAhPT0gdG9rZW4uYWNjZXNzX3Rva2VuXG4gICAgICApLFxuICAgICAgdGFrZSgxKVxuICAgICk7XG4gIH1cblxuICBwcm90ZWN0ZWQgY3JlYXRlTmV3UmVxdWVzdFdpdGhOZXdUb2tlbihcbiAgICByZXF1ZXN0OiBIdHRwUmVxdWVzdDxhbnk+LFxuICAgIHRva2VuOiBVc2VyVG9rZW5cbiAgKTogSHR0cFJlcXVlc3Q8YW55PiB7XG4gICAgcmVxdWVzdCA9IHJlcXVlc3QuY2xvbmUoe1xuICAgICAgc2V0SGVhZGVyczoge1xuICAgICAgICBBdXRob3JpemF0aW9uOiBgJHt0b2tlbi50b2tlbl90eXBlfSAke3Rva2VuLmFjY2Vzc190b2tlbn1gLFxuICAgICAgfSxcbiAgICB9KTtcbiAgICByZXR1cm4gcmVxdWVzdDtcbiAgfVxufVxuIl19