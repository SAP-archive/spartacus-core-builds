import { Injectable } from '@angular/core';
import { filter, switchMap, take, tap } from 'rxjs/operators';
import { RoutingService } from '../../../routing/facade/routing.service';
import { AuthService } from '../../facade/auth.service';
import * as i0 from "@angular/core";
import * as i1 from "../../facade/auth.service";
import * as i2 from "../../../routing/facade/routing.service";
export class UserErrorHandlingService {
    constructor(authService, routingService) {
        this.authService = authService;
        this.routingService = routingService;
    }
    handleExpiredUserToken(request, next) {
        return this.handleExpiredToken().pipe(switchMap((token) => {
            return next.handle(this.createNewRequestWithNewToken(request, token));
        }));
    }
    handleExpiredRefreshToken() {
        // Logout user
        this.authService.logout();
    }
    handleExpiredToken() {
        let oldToken;
        return this.authService.getUserToken().pipe(tap((token) => {
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
        }), filter((token) => oldToken.access_token !== token.access_token), take(1));
    }
    createNewRequestWithNewToken(request, token) {
        request = request.clone({
            setHeaders: {
                Authorization: `${token.token_type} ${token.access_token}`,
            },
        });
        return request;
    }
}
UserErrorHandlingService.ɵprov = i0.ɵɵdefineInjectable({ factory: function UserErrorHandlingService_Factory() { return new UserErrorHandlingService(i0.ɵɵinject(i1.AuthService), i0.ɵɵinject(i2.RoutingService)); }, token: UserErrorHandlingService, providedIn: "root" });
UserErrorHandlingService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
UserErrorHandlingService.ctorParameters = () => [
    { type: AuthService },
    { type: RoutingService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1lcnJvci1oYW5kbGluZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZS9zcmMvYXV0aC9zZXJ2aWNlcy91c2VyLWVycm9yL3VzZXItZXJyb3ItaGFuZGxpbmcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM5RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDekUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDJCQUEyQixDQUFDOzs7O0FBTXhELE1BQU0sT0FBTyx3QkFBd0I7SUFDbkMsWUFDWSxXQUF3QixFQUN4QixjQUE4QjtRQUQ5QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7SUFDdkMsQ0FBQztJQUVHLHNCQUFzQixDQUMzQixPQUF5QixFQUN6QixJQUFpQjtRQUVqQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDLElBQUksQ0FDbkMsU0FBUyxDQUFDLENBQUMsS0FBZ0IsRUFBRSxFQUFFO1lBQzdCLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsNEJBQTRCLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDeEUsQ0FBQyxDQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7SUFFTSx5QkFBeUI7UUFDOUIsY0FBYztRQUNkLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDNUIsQ0FBQztJQUVTLGtCQUFrQjtRQUMxQixJQUFJLFFBQW1CLENBQUM7UUFDeEIsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksRUFBRSxDQUFDLElBQUksQ0FDekMsR0FBRyxDQUFDLENBQUMsS0FBZ0IsRUFBRSxFQUFFO1lBQ3ZCLElBQUksS0FBSyxDQUFDLFlBQVksSUFBSSxLQUFLLENBQUMsYUFBYSxJQUFJLENBQUMsUUFBUSxFQUFFO2dCQUMxRCxJQUFJLENBQUMsV0FBVyxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQzFDO2lCQUFNLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsRUFBRTtnQkFDdEQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQzthQUM5QztpQkFBTSxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsRUFBRTtnQkFDL0IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQztnQkFDMUIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQzthQUM5QztZQUNELFFBQVEsR0FBRyxRQUFRLElBQUksS0FBSyxDQUFDO1FBQy9CLENBQUMsQ0FBQyxFQUNGLE1BQU0sQ0FDSixDQUFDLEtBQWdCLEVBQUUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxZQUFZLEtBQUssS0FBSyxDQUFDLFlBQVksQ0FDbkUsRUFDRCxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQ1IsQ0FBQztJQUNKLENBQUM7SUFFUyw0QkFBNEIsQ0FDcEMsT0FBeUIsRUFDekIsS0FBZ0I7UUFFaEIsT0FBTyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUM7WUFDdEIsVUFBVSxFQUFFO2dCQUNWLGFBQWEsRUFBRSxHQUFHLEtBQUssQ0FBQyxVQUFVLElBQUksS0FBSyxDQUFDLFlBQVksRUFBRTthQUMzRDtTQUNGLENBQUMsQ0FBQztRQUNILE9BQU8sT0FBTyxDQUFDO0lBQ2pCLENBQUM7Ozs7WUF4REYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7WUFMUSxXQUFXO1lBRFgsY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBFdmVudCwgSHR0cEhhbmRsZXIsIEh0dHBSZXF1ZXN0IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCBzd2l0Y2hNYXAsIHRha2UsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFJvdXRpbmdTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vcm91dGluZy9mYWNhZGUvcm91dGluZy5zZXJ2aWNlJztcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vZmFjYWRlL2F1dGguc2VydmljZSc7XG5pbXBvcnQgeyBVc2VyVG9rZW4gfSBmcm9tICcuLi8uLi9tb2RlbHMvdG9rZW4tdHlwZXMubW9kZWwnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgVXNlckVycm9ySGFuZGxpbmdTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgcm91dGluZ1NlcnZpY2U6IFJvdXRpbmdTZXJ2aWNlXG4gICkge31cblxuICBwdWJsaWMgaGFuZGxlRXhwaXJlZFVzZXJUb2tlbihcbiAgICByZXF1ZXN0OiBIdHRwUmVxdWVzdDxhbnk+LFxuICAgIG5leHQ6IEh0dHBIYW5kbGVyXG4gICk6IE9ic2VydmFibGU8SHR0cEV2ZW50PFVzZXJUb2tlbj4+IHtcbiAgICByZXR1cm4gdGhpcy5oYW5kbGVFeHBpcmVkVG9rZW4oKS5waXBlKFxuICAgICAgc3dpdGNoTWFwKCh0b2tlbjogVXNlclRva2VuKSA9PiB7XG4gICAgICAgIHJldHVybiBuZXh0LmhhbmRsZSh0aGlzLmNyZWF0ZU5ld1JlcXVlc3RXaXRoTmV3VG9rZW4ocmVxdWVzdCwgdG9rZW4pKTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIHB1YmxpYyBoYW5kbGVFeHBpcmVkUmVmcmVzaFRva2VuKCk6IHZvaWQge1xuICAgIC8vIExvZ291dCB1c2VyXG4gICAgdGhpcy5hdXRoU2VydmljZS5sb2dvdXQoKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBoYW5kbGVFeHBpcmVkVG9rZW4oKTogT2JzZXJ2YWJsZTxVc2VyVG9rZW4+IHtcbiAgICBsZXQgb2xkVG9rZW46IFVzZXJUb2tlbjtcbiAgICByZXR1cm4gdGhpcy5hdXRoU2VydmljZS5nZXRVc2VyVG9rZW4oKS5waXBlKFxuICAgICAgdGFwKCh0b2tlbjogVXNlclRva2VuKSA9PiB7XG4gICAgICAgIGlmICh0b2tlbi5hY2Nlc3NfdG9rZW4gJiYgdG9rZW4ucmVmcmVzaF90b2tlbiAmJiAhb2xkVG9rZW4pIHtcbiAgICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLnJlZnJlc2hVc2VyVG9rZW4odG9rZW4pO1xuICAgICAgICB9IGVsc2UgaWYgKCF0b2tlbi5hY2Nlc3NfdG9rZW4gJiYgIXRva2VuLnJlZnJlc2hfdG9rZW4pIHtcbiAgICAgICAgICB0aGlzLnJvdXRpbmdTZXJ2aWNlLmdvKHsgY3hSb3V0ZTogJ2xvZ2luJyB9KTtcbiAgICAgICAgfSBlbHNlIGlmICghdG9rZW4ucmVmcmVzaF90b2tlbikge1xuICAgICAgICAgIHRoaXMuYXV0aFNlcnZpY2UubG9nb3V0KCk7XG4gICAgICAgICAgdGhpcy5yb3V0aW5nU2VydmljZS5nbyh7IGN4Um91dGU6ICdsb2dpbicgfSk7XG4gICAgICAgIH1cbiAgICAgICAgb2xkVG9rZW4gPSBvbGRUb2tlbiB8fCB0b2tlbjtcbiAgICAgIH0pLFxuICAgICAgZmlsdGVyKFxuICAgICAgICAodG9rZW46IFVzZXJUb2tlbikgPT4gb2xkVG9rZW4uYWNjZXNzX3Rva2VuICE9PSB0b2tlbi5hY2Nlc3NfdG9rZW5cbiAgICAgICksXG4gICAgICB0YWtlKDEpXG4gICAgKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBjcmVhdGVOZXdSZXF1ZXN0V2l0aE5ld1Rva2VuKFxuICAgIHJlcXVlc3Q6IEh0dHBSZXF1ZXN0PGFueT4sXG4gICAgdG9rZW46IFVzZXJUb2tlblxuICApOiBIdHRwUmVxdWVzdDxhbnk+IHtcbiAgICByZXF1ZXN0ID0gcmVxdWVzdC5jbG9uZSh7XG4gICAgICBzZXRIZWFkZXJzOiB7XG4gICAgICAgIEF1dGhvcml6YXRpb246IGAke3Rva2VuLnRva2VuX3R5cGV9ICR7dG9rZW4uYWNjZXNzX3Rva2VufWAsXG4gICAgICB9LFxuICAgIH0pO1xuICAgIHJldHVybiByZXF1ZXN0O1xuICB9XG59XG4iXX0=