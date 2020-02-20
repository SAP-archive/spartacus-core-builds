import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { switchMap, take } from 'rxjs/operators';
import { AuthService } from '../../facade/auth.service';
var ClientErrorHandlingService = /** @class */ (function () {
    function ClientErrorHandlingService(authService) {
        this.authService = authService;
    }
    ClientErrorHandlingService.prototype.handleExpiredClientToken = function (request, next) {
        var _this = this;
        return this.authService.refreshClientToken().pipe(take(1), switchMap(function (token) {
            return next.handle(_this.createNewRequestWithNewToken(request, token));
        }));
    };
    ClientErrorHandlingService.prototype.createNewRequestWithNewToken = function (request, token) {
        request = request.clone({
            setHeaders: {
                Authorization: token.token_type + " " + token.access_token,
            },
        });
        return request;
    };
    ClientErrorHandlingService.ctorParameters = function () { return [
        { type: AuthService }
    ]; };
    ClientErrorHandlingService = __decorate([
        Injectable()
    ], ClientErrorHandlingService);
    return ClientErrorHandlingService;
}());
export { ClientErrorHandlingService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50LWVycm9yLWhhbmRsaW5nLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvYXV0aC9zZXJ2aWNlcy9jbGllbnQtZXJyb3IvY2xpZW50LWVycm9yLWhhbmRsaW5nLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFJM0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVqRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFJeEQ7SUFDRSxvQ0FBc0IsV0FBd0I7UUFBeEIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7SUFBRyxDQUFDO0lBRTNDLDZEQUF3QixHQUEvQixVQUNFLE9BQXlCLEVBQ3pCLElBQWlCO1FBRm5CLGlCQVVDO1FBTkMsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLGtCQUFrQixFQUFFLENBQUMsSUFBSSxDQUMvQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQ1AsU0FBUyxDQUFDLFVBQUMsS0FBa0I7WUFDM0IsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUksQ0FBQyw0QkFBNEIsQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUN4RSxDQUFDLENBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQztJQUVTLGlFQUE0QixHQUF0QyxVQUNFLE9BQXlCLEVBQ3pCLEtBQWtCO1FBRWxCLE9BQU8sR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDO1lBQ3RCLFVBQVUsRUFBRTtnQkFDVixhQUFhLEVBQUssS0FBSyxDQUFDLFVBQVUsU0FBSSxLQUFLLENBQUMsWUFBYzthQUMzRDtTQUNGLENBQUMsQ0FBQztRQUNILE9BQU8sT0FBTyxDQUFDO0lBQ2pCLENBQUM7O2dCQXhCa0MsV0FBVzs7SUFEbkMsMEJBQTBCO1FBRHRDLFVBQVUsRUFBRTtPQUNBLDBCQUEwQixDQTBCdEM7SUFBRCxpQ0FBQztDQUFBLEFBMUJELElBMEJDO1NBMUJZLDBCQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBSZXF1ZXN0LCBIdHRwSGFuZGxlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcblxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgc3dpdGNoTWFwLCB0YWtlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4uLy4uL2ZhY2FkZS9hdXRoLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ2xpZW50VG9rZW4gfSBmcm9tICcuLi8uLi9tb2RlbHMvdG9rZW4tdHlwZXMubW9kZWwnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ2xpZW50RXJyb3JIYW5kbGluZ1NlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlKSB7fVxuXG4gIHB1YmxpYyBoYW5kbGVFeHBpcmVkQ2xpZW50VG9rZW4oXG4gICAgcmVxdWVzdDogSHR0cFJlcXVlc3Q8YW55PixcbiAgICBuZXh0OiBIdHRwSGFuZGxlclxuICApOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLmF1dGhTZXJ2aWNlLnJlZnJlc2hDbGllbnRUb2tlbigpLnBpcGUoXG4gICAgICB0YWtlKDEpLFxuICAgICAgc3dpdGNoTWFwKCh0b2tlbjogQ2xpZW50VG9rZW4pID0+IHtcbiAgICAgICAgcmV0dXJuIG5leHQuaGFuZGxlKHRoaXMuY3JlYXRlTmV3UmVxdWVzdFdpdGhOZXdUb2tlbihyZXF1ZXN0LCB0b2tlbikpO1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgcHJvdGVjdGVkIGNyZWF0ZU5ld1JlcXVlc3RXaXRoTmV3VG9rZW4oXG4gICAgcmVxdWVzdDogSHR0cFJlcXVlc3Q8YW55PixcbiAgICB0b2tlbjogQ2xpZW50VG9rZW5cbiAgKTogSHR0cFJlcXVlc3Q8YW55PiB7XG4gICAgcmVxdWVzdCA9IHJlcXVlc3QuY2xvbmUoe1xuICAgICAgc2V0SGVhZGVyczoge1xuICAgICAgICBBdXRob3JpemF0aW9uOiBgJHt0b2tlbi50b2tlbl90eXBlfSAke3Rva2VuLmFjY2Vzc190b2tlbn1gLFxuICAgICAgfSxcbiAgICB9KTtcbiAgICByZXR1cm4gcmVxdWVzdDtcbiAgfVxufVxuIl19