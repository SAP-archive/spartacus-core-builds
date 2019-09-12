/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { switchMap, take } from 'rxjs/operators';
import { AuthService } from '../../facade/auth.service';
export class ClientErrorHandlingService {
    /**
     * @param {?} authService
     */
    constructor(authService) {
        this.authService = authService;
    }
    /**
     * @param {?} request
     * @param {?} next
     * @return {?}
     */
    handleExpiredClientToken(request, next) {
        return this.authService.refreshClientToken().pipe(take(1), switchMap((/**
         * @param {?} token
         * @return {?}
         */
        (token) => {
            return next.handle(this.createNewRequestWithNewToken(request, token));
        })));
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
ClientErrorHandlingService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ClientErrorHandlingService.ctorParameters = () => [
    { type: AuthService }
];
if (false) {
    /**
     * @type {?}
     * @protected
     */
    ClientErrorHandlingService.prototype.authService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50LWVycm9yLWhhbmRsaW5nLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvYXV0aC9zZXJ2aWNlcy9jbGllbnQtZXJyb3IvY2xpZW50LWVycm9yLWhhbmRsaW5nLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFJM0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVqRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFJeEQsTUFBTSxPQUFPLDBCQUEwQjs7OztJQUNyQyxZQUFzQixXQUF3QjtRQUF4QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtJQUFHLENBQUM7Ozs7OztJQUUzQyx3QkFBd0IsQ0FDN0IsT0FBeUIsRUFDekIsSUFBaUI7UUFFakIsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLGtCQUFrQixFQUFFLENBQUMsSUFBSSxDQUMvQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQ1AsU0FBUzs7OztRQUFDLENBQUMsS0FBa0IsRUFBRSxFQUFFO1lBQy9CLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsNEJBQTRCLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDeEUsQ0FBQyxFQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7Ozs7Ozs7SUFFUyw0QkFBNEIsQ0FDcEMsT0FBeUIsRUFDekIsS0FBa0I7UUFFbEIsT0FBTyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUM7WUFDdEIsVUFBVSxFQUFFO2dCQUNWLGFBQWEsRUFBRSxHQUFHLEtBQUssQ0FBQyxVQUFVLElBQUksS0FBSyxDQUFDLFlBQVksRUFBRTthQUMzRDtTQUNGLENBQUMsQ0FBQztRQUNILE9BQU8sT0FBTyxDQUFDO0lBQ2pCLENBQUM7OztZQTFCRixVQUFVOzs7O1lBSEYsV0FBVzs7Ozs7OztJQUtOLGlEQUFrQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBSZXF1ZXN0LCBIdHRwSGFuZGxlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcblxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgc3dpdGNoTWFwLCB0YWtlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4uLy4uL2ZhY2FkZS9hdXRoLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ2xpZW50VG9rZW4gfSBmcm9tICcuLi8uLi9tb2RlbHMvdG9rZW4tdHlwZXMubW9kZWwnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ2xpZW50RXJyb3JIYW5kbGluZ1NlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlKSB7fVxuXG4gIHB1YmxpYyBoYW5kbGVFeHBpcmVkQ2xpZW50VG9rZW4oXG4gICAgcmVxdWVzdDogSHR0cFJlcXVlc3Q8YW55PixcbiAgICBuZXh0OiBIdHRwSGFuZGxlclxuICApOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLmF1dGhTZXJ2aWNlLnJlZnJlc2hDbGllbnRUb2tlbigpLnBpcGUoXG4gICAgICB0YWtlKDEpLFxuICAgICAgc3dpdGNoTWFwKCh0b2tlbjogQ2xpZW50VG9rZW4pID0+IHtcbiAgICAgICAgcmV0dXJuIG5leHQuaGFuZGxlKHRoaXMuY3JlYXRlTmV3UmVxdWVzdFdpdGhOZXdUb2tlbihyZXF1ZXN0LCB0b2tlbikpO1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgcHJvdGVjdGVkIGNyZWF0ZU5ld1JlcXVlc3RXaXRoTmV3VG9rZW4oXG4gICAgcmVxdWVzdDogSHR0cFJlcXVlc3Q8YW55PixcbiAgICB0b2tlbjogQ2xpZW50VG9rZW5cbiAgKTogSHR0cFJlcXVlc3Q8YW55PiB7XG4gICAgcmVxdWVzdCA9IHJlcXVlc3QuY2xvbmUoe1xuICAgICAgc2V0SGVhZGVyczoge1xuICAgICAgICBBdXRob3JpemF0aW9uOiBgJHt0b2tlbi50b2tlbl90eXBlfSAke3Rva2VuLmFjY2Vzc190b2tlbn1gLFxuICAgICAgfSxcbiAgICB9KTtcbiAgICByZXR1cm4gcmVxdWVzdDtcbiAgfVxufVxuIl19