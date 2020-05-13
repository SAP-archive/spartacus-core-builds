import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { filter, switchMap, take, tap } from 'rxjs/operators';
import { RoutingService } from '../../../routing/facade/routing.service';
import { AuthService } from '../../facade/auth.service';
import * as i0 from "@angular/core";
import * as i1 from "../../facade/auth.service";
import * as i2 from "../../../routing/facade/routing.service";
var UserErrorHandlingService = /** @class */ (function () {
    function UserErrorHandlingService(authService, routingService) {
        this.authService = authService;
        this.routingService = routingService;
    }
    UserErrorHandlingService.prototype.handleExpiredUserToken = function (request, next) {
        var _this = this;
        return this.handleExpiredToken().pipe(switchMap(function (token) {
            return next.handle(_this.createNewRequestWithNewToken(request, token));
        }));
    };
    UserErrorHandlingService.prototype.handleExpiredRefreshToken = function () {
        // Logout user
        this.authService.logout();
    };
    UserErrorHandlingService.prototype.handleExpiredToken = function () {
        var _this = this;
        var oldToken;
        return this.authService.getUserToken().pipe(tap(function (token) {
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
        }), filter(function (token) { return oldToken.access_token !== token.access_token; }), take(1));
    };
    UserErrorHandlingService.prototype.createNewRequestWithNewToken = function (request, token) {
        request = request.clone({
            setHeaders: {
                Authorization: token.token_type + " " + token.access_token,
            },
        });
        return request;
    };
    UserErrorHandlingService.ctorParameters = function () { return [
        { type: AuthService },
        { type: RoutingService }
    ]; };
    UserErrorHandlingService.ɵprov = i0.ɵɵdefineInjectable({ factory: function UserErrorHandlingService_Factory() { return new UserErrorHandlingService(i0.ɵɵinject(i1.AuthService), i0.ɵɵinject(i2.RoutingService)); }, token: UserErrorHandlingService, providedIn: "root" });
    UserErrorHandlingService = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], UserErrorHandlingService);
    return UserErrorHandlingService;
}());
export { UserErrorHandlingService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1lcnJvci1oYW5kbGluZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2F1dGgvc2VydmljZXMvdXNlci1lcnJvci91c2VyLWVycm9yLWhhbmRsaW5nLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzlELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUN6RSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7Ozs7QUFNeEQ7SUFDRSxrQ0FDWSxXQUF3QixFQUN4QixjQUE4QjtRQUQ5QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7SUFDdkMsQ0FBQztJQUVHLHlEQUFzQixHQUE3QixVQUNFLE9BQXlCLEVBQ3pCLElBQWlCO1FBRm5CLGlCQVNDO1FBTEMsT0FBTyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxJQUFJLENBQ25DLFNBQVMsQ0FBQyxVQUFDLEtBQWdCO1lBQ3pCLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFJLENBQUMsNEJBQTRCLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDeEUsQ0FBQyxDQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7SUFFTSw0REFBeUIsR0FBaEM7UUFDRSxjQUFjO1FBQ2QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBRVMscURBQWtCLEdBQTVCO1FBQUEsaUJBbUJDO1FBbEJDLElBQUksUUFBbUIsQ0FBQztRQUN4QixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxFQUFFLENBQUMsSUFBSSxDQUN6QyxHQUFHLENBQUMsVUFBQyxLQUFnQjtZQUNuQixJQUFJLEtBQUssQ0FBQyxZQUFZLElBQUksS0FBSyxDQUFDLGFBQWEsSUFBSSxDQUFDLFFBQVEsRUFBRTtnQkFDMUQsS0FBSSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUMxQztpQkFBTSxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLEVBQUU7Z0JBQ3RELEtBQUksQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUM7YUFDOUM7aUJBQU0sSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLEVBQUU7Z0JBQy9CLEtBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLENBQUM7Z0JBQzFCLEtBQUksQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUM7YUFDOUM7WUFDRCxRQUFRLEdBQUcsUUFBUSxJQUFJLEtBQUssQ0FBQztRQUMvQixDQUFDLENBQUMsRUFDRixNQUFNLENBQ0osVUFBQyxLQUFnQixJQUFLLE9BQUEsUUFBUSxDQUFDLFlBQVksS0FBSyxLQUFLLENBQUMsWUFBWSxFQUE1QyxDQUE0QyxDQUNuRSxFQUNELElBQUksQ0FBQyxDQUFDLENBQUMsQ0FDUixDQUFDO0lBQ0osQ0FBQztJQUVTLCtEQUE0QixHQUF0QyxVQUNFLE9BQXlCLEVBQ3pCLEtBQWdCO1FBRWhCLE9BQU8sR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDO1lBQ3RCLFVBQVUsRUFBRTtnQkFDVixhQUFhLEVBQUssS0FBSyxDQUFDLFVBQVUsU0FBSSxLQUFLLENBQUMsWUFBYzthQUMzRDtTQUNGLENBQUMsQ0FBQztRQUNILE9BQU8sT0FBTyxDQUFDO0lBQ2pCLENBQUM7O2dCQW5Ed0IsV0FBVztnQkFDUixjQUFjOzs7SUFIL0Isd0JBQXdCO1FBSHBDLFVBQVUsQ0FBQztZQUNWLFVBQVUsRUFBRSxNQUFNO1NBQ25CLENBQUM7T0FDVyx3QkFBd0IsQ0FzRHBDO21DQWpFRDtDQWlFQyxBQXRERCxJQXNEQztTQXREWSx3QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwRXZlbnQsIEh0dHBIYW5kbGVyLCBIdHRwUmVxdWVzdCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgc3dpdGNoTWFwLCB0YWtlLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBSb3V0aW5nU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3JvdXRpbmcvZmFjYWRlL3JvdXRpbmcuc2VydmljZSc7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4uLy4uL2ZhY2FkZS9hdXRoLnNlcnZpY2UnO1xuaW1wb3J0IHsgVXNlclRva2VuIH0gZnJvbSAnLi4vLi4vbW9kZWxzL3Rva2VuLXR5cGVzLm1vZGVsJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIFVzZXJFcnJvckhhbmRsaW5nU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHJvdXRpbmdTZXJ2aWNlOiBSb3V0aW5nU2VydmljZVxuICApIHt9XG5cbiAgcHVibGljIGhhbmRsZUV4cGlyZWRVc2VyVG9rZW4oXG4gICAgcmVxdWVzdDogSHR0cFJlcXVlc3Q8YW55PixcbiAgICBuZXh0OiBIdHRwSGFuZGxlclxuICApOiBPYnNlcnZhYmxlPEh0dHBFdmVudDxVc2VyVG9rZW4+PiB7XG4gICAgcmV0dXJuIHRoaXMuaGFuZGxlRXhwaXJlZFRva2VuKCkucGlwZShcbiAgICAgIHN3aXRjaE1hcCgodG9rZW46IFVzZXJUb2tlbikgPT4ge1xuICAgICAgICByZXR1cm4gbmV4dC5oYW5kbGUodGhpcy5jcmVhdGVOZXdSZXF1ZXN0V2l0aE5ld1Rva2VuKHJlcXVlc3QsIHRva2VuKSk7XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBwdWJsaWMgaGFuZGxlRXhwaXJlZFJlZnJlc2hUb2tlbigpOiB2b2lkIHtcbiAgICAvLyBMb2dvdXQgdXNlclxuICAgIHRoaXMuYXV0aFNlcnZpY2UubG9nb3V0KCk7XG4gIH1cblxuICBwcm90ZWN0ZWQgaGFuZGxlRXhwaXJlZFRva2VuKCk6IE9ic2VydmFibGU8VXNlclRva2VuPiB7XG4gICAgbGV0IG9sZFRva2VuOiBVc2VyVG9rZW47XG4gICAgcmV0dXJuIHRoaXMuYXV0aFNlcnZpY2UuZ2V0VXNlclRva2VuKCkucGlwZShcbiAgICAgIHRhcCgodG9rZW46IFVzZXJUb2tlbikgPT4ge1xuICAgICAgICBpZiAodG9rZW4uYWNjZXNzX3Rva2VuICYmIHRva2VuLnJlZnJlc2hfdG9rZW4gJiYgIW9sZFRva2VuKSB7XG4gICAgICAgICAgdGhpcy5hdXRoU2VydmljZS5yZWZyZXNoVXNlclRva2VuKHRva2VuKTtcbiAgICAgICAgfSBlbHNlIGlmICghdG9rZW4uYWNjZXNzX3Rva2VuICYmICF0b2tlbi5yZWZyZXNoX3Rva2VuKSB7XG4gICAgICAgICAgdGhpcy5yb3V0aW5nU2VydmljZS5nbyh7IGN4Um91dGU6ICdsb2dpbicgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAoIXRva2VuLnJlZnJlc2hfdG9rZW4pIHtcbiAgICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLmxvZ291dCgpO1xuICAgICAgICAgIHRoaXMucm91dGluZ1NlcnZpY2UuZ28oeyBjeFJvdXRlOiAnbG9naW4nIH0pO1xuICAgICAgICB9XG4gICAgICAgIG9sZFRva2VuID0gb2xkVG9rZW4gfHwgdG9rZW47XG4gICAgICB9KSxcbiAgICAgIGZpbHRlcihcbiAgICAgICAgKHRva2VuOiBVc2VyVG9rZW4pID0+IG9sZFRva2VuLmFjY2Vzc190b2tlbiAhPT0gdG9rZW4uYWNjZXNzX3Rva2VuXG4gICAgICApLFxuICAgICAgdGFrZSgxKVxuICAgICk7XG4gIH1cblxuICBwcm90ZWN0ZWQgY3JlYXRlTmV3UmVxdWVzdFdpdGhOZXdUb2tlbihcbiAgICByZXF1ZXN0OiBIdHRwUmVxdWVzdDxhbnk+LFxuICAgIHRva2VuOiBVc2VyVG9rZW5cbiAgKTogSHR0cFJlcXVlc3Q8YW55PiB7XG4gICAgcmVxdWVzdCA9IHJlcXVlc3QuY2xvbmUoe1xuICAgICAgc2V0SGVhZGVyczoge1xuICAgICAgICBBdXRob3JpemF0aW9uOiBgJHt0b2tlbi50b2tlbl90eXBlfSAke3Rva2VuLmFjY2Vzc190b2tlbn1gLFxuICAgICAgfSxcbiAgICB9KTtcbiAgICByZXR1cm4gcmVxdWVzdDtcbiAgfVxufVxuIl19