import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { filter, switchMap, take, tap } from 'rxjs/operators';
import { RoutingService } from '../../../routing/facade/routing.service';
import { AuthService } from '../../facade/auth.service';
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
    UserErrorHandlingService = __decorate([
        Injectable()
    ], UserErrorHandlingService);
    return UserErrorHandlingService;
}());
export { UserErrorHandlingService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1lcnJvci1oYW5kbGluZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2F1dGgvc2VydmljZXMvdXNlci1lcnJvci91c2VyLWVycm9yLWhhbmRsaW5nLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzlELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUN6RSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFJeEQ7SUFDRSxrQ0FDWSxXQUF3QixFQUN4QixjQUE4QjtRQUQ5QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7SUFDdkMsQ0FBQztJQUVHLHlEQUFzQixHQUE3QixVQUNFLE9BQXlCLEVBQ3pCLElBQWlCO1FBRm5CLGlCQVNDO1FBTEMsT0FBTyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxJQUFJLENBQ25DLFNBQVMsQ0FBQyxVQUFDLEtBQWdCO1lBQ3pCLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFJLENBQUMsNEJBQTRCLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDeEUsQ0FBQyxDQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7SUFFTSw0REFBeUIsR0FBaEM7UUFDRSxjQUFjO1FBQ2QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBRVMscURBQWtCLEdBQTVCO1FBQUEsaUJBbUJDO1FBbEJDLElBQUksUUFBbUIsQ0FBQztRQUN4QixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxFQUFFLENBQUMsSUFBSSxDQUN6QyxHQUFHLENBQUMsVUFBQyxLQUFnQjtZQUNuQixJQUFJLEtBQUssQ0FBQyxZQUFZLElBQUksS0FBSyxDQUFDLGFBQWEsSUFBSSxDQUFDLFFBQVEsRUFBRTtnQkFDMUQsS0FBSSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUMxQztpQkFBTSxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLEVBQUU7Z0JBQ3RELEtBQUksQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUM7YUFDOUM7aUJBQU0sSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLEVBQUU7Z0JBQy9CLEtBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLENBQUM7Z0JBQzFCLEtBQUksQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUM7YUFDOUM7WUFDRCxRQUFRLEdBQUcsUUFBUSxJQUFJLEtBQUssQ0FBQztRQUMvQixDQUFDLENBQUMsRUFDRixNQUFNLENBQ0osVUFBQyxLQUFnQixJQUFLLE9BQUEsUUFBUSxDQUFDLFlBQVksS0FBSyxLQUFLLENBQUMsWUFBWSxFQUE1QyxDQUE0QyxDQUNuRSxFQUNELElBQUksQ0FBQyxDQUFDLENBQUMsQ0FDUixDQUFDO0lBQ0osQ0FBQztJQUVTLCtEQUE0QixHQUF0QyxVQUNFLE9BQXlCLEVBQ3pCLEtBQWdCO1FBRWhCLE9BQU8sR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDO1lBQ3RCLFVBQVUsRUFBRTtnQkFDVixhQUFhLEVBQUssS0FBSyxDQUFDLFVBQVUsU0FBSSxLQUFLLENBQUMsWUFBYzthQUMzRDtTQUNGLENBQUMsQ0FBQztRQUNILE9BQU8sT0FBTyxDQUFDO0lBQ2pCLENBQUM7O2dCQW5Ed0IsV0FBVztnQkFDUixjQUFjOztJQUgvQix3QkFBd0I7UUFEcEMsVUFBVSxFQUFFO09BQ0Esd0JBQXdCLENBc0RwQztJQUFELCtCQUFDO0NBQUEsQUF0REQsSUFzREM7U0F0RFksd0JBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cEV2ZW50LCBIdHRwSGFuZGxlciwgSHR0cFJlcXVlc3QgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIHN3aXRjaE1hcCwgdGFrZSwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgUm91dGluZ1NlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9yb3V0aW5nL2ZhY2FkZS9yb3V0aW5nLnNlcnZpY2UnO1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuLi8uLi9mYWNhZGUvYXV0aC5zZXJ2aWNlJztcbmltcG9ydCB7IFVzZXJUb2tlbiB9IGZyb20gJy4uLy4uL21vZGVscy90b2tlbi10eXBlcy5tb2RlbCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBVc2VyRXJyb3JIYW5kbGluZ1NlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCByb3V0aW5nU2VydmljZTogUm91dGluZ1NlcnZpY2VcbiAgKSB7fVxuXG4gIHB1YmxpYyBoYW5kbGVFeHBpcmVkVXNlclRva2VuKFxuICAgIHJlcXVlc3Q6IEh0dHBSZXF1ZXN0PGFueT4sXG4gICAgbmV4dDogSHR0cEhhbmRsZXJcbiAgKTogT2JzZXJ2YWJsZTxIdHRwRXZlbnQ8VXNlclRva2VuPj4ge1xuICAgIHJldHVybiB0aGlzLmhhbmRsZUV4cGlyZWRUb2tlbigpLnBpcGUoXG4gICAgICBzd2l0Y2hNYXAoKHRva2VuOiBVc2VyVG9rZW4pID0+IHtcbiAgICAgICAgcmV0dXJuIG5leHQuaGFuZGxlKHRoaXMuY3JlYXRlTmV3UmVxdWVzdFdpdGhOZXdUb2tlbihyZXF1ZXN0LCB0b2tlbikpO1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgcHVibGljIGhhbmRsZUV4cGlyZWRSZWZyZXNoVG9rZW4oKTogdm9pZCB7XG4gICAgLy8gTG9nb3V0IHVzZXJcbiAgICB0aGlzLmF1dGhTZXJ2aWNlLmxvZ291dCgpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGhhbmRsZUV4cGlyZWRUb2tlbigpOiBPYnNlcnZhYmxlPFVzZXJUb2tlbj4ge1xuICAgIGxldCBvbGRUb2tlbjogVXNlclRva2VuO1xuICAgIHJldHVybiB0aGlzLmF1dGhTZXJ2aWNlLmdldFVzZXJUb2tlbigpLnBpcGUoXG4gICAgICB0YXAoKHRva2VuOiBVc2VyVG9rZW4pID0+IHtcbiAgICAgICAgaWYgKHRva2VuLmFjY2Vzc190b2tlbiAmJiB0b2tlbi5yZWZyZXNoX3Rva2VuICYmICFvbGRUb2tlbikge1xuICAgICAgICAgIHRoaXMuYXV0aFNlcnZpY2UucmVmcmVzaFVzZXJUb2tlbih0b2tlbik7XG4gICAgICAgIH0gZWxzZSBpZiAoIXRva2VuLmFjY2Vzc190b2tlbiAmJiAhdG9rZW4ucmVmcmVzaF90b2tlbikge1xuICAgICAgICAgIHRoaXMucm91dGluZ1NlcnZpY2UuZ28oeyBjeFJvdXRlOiAnbG9naW4nIH0pO1xuICAgICAgICB9IGVsc2UgaWYgKCF0b2tlbi5yZWZyZXNoX3Rva2VuKSB7XG4gICAgICAgICAgdGhpcy5hdXRoU2VydmljZS5sb2dvdXQoKTtcbiAgICAgICAgICB0aGlzLnJvdXRpbmdTZXJ2aWNlLmdvKHsgY3hSb3V0ZTogJ2xvZ2luJyB9KTtcbiAgICAgICAgfVxuICAgICAgICBvbGRUb2tlbiA9IG9sZFRva2VuIHx8IHRva2VuO1xuICAgICAgfSksXG4gICAgICBmaWx0ZXIoXG4gICAgICAgICh0b2tlbjogVXNlclRva2VuKSA9PiBvbGRUb2tlbi5hY2Nlc3NfdG9rZW4gIT09IHRva2VuLmFjY2Vzc190b2tlblxuICAgICAgKSxcbiAgICAgIHRha2UoMSlcbiAgICApO1xuICB9XG5cbiAgcHJvdGVjdGVkIGNyZWF0ZU5ld1JlcXVlc3RXaXRoTmV3VG9rZW4oXG4gICAgcmVxdWVzdDogSHR0cFJlcXVlc3Q8YW55PixcbiAgICB0b2tlbjogVXNlclRva2VuXG4gICk6IEh0dHBSZXF1ZXN0PGFueT4ge1xuICAgIHJlcXVlc3QgPSByZXF1ZXN0LmNsb25lKHtcbiAgICAgIHNldEhlYWRlcnM6IHtcbiAgICAgICAgQXV0aG9yaXphdGlvbjogYCR7dG9rZW4udG9rZW5fdHlwZX0gJHt0b2tlbi5hY2Nlc3NfdG9rZW59YCxcbiAgICAgIH0sXG4gICAgfSk7XG4gICAgcmV0dXJuIHJlcXVlc3Q7XG4gIH1cbn1cbiJdfQ==