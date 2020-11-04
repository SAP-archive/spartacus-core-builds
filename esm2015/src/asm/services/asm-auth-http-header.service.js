import { Injectable } from '@angular/core';
import { take } from 'rxjs/operators';
import { AuthService } from '../../auth/user-auth/facade/auth.service';
import { AuthHttpHeaderService } from '../../auth/user-auth/services/auth-http-header.service';
import { AuthStorageService } from '../../auth/user-auth/services/auth-storage.service';
import { OAuthLibWrapperService } from '../../auth/user-auth/services/oauth-lib-wrapper.service';
import { GlobalMessageService } from '../../global-message/facade/global-message.service';
import { GlobalMessageType } from '../../global-message/models/global-message.model';
import { OccEndpointsService } from '../../occ/services/occ-endpoints.service';
import { InterceptorUtil, USE_CUSTOMER_SUPPORT_AGENT_TOKEN, } from '../../occ/utils/interceptor-util';
import { RoutingService } from '../../routing/facade/routing.service';
import { CsAgentAuthService } from '../facade/csagent-auth.service';
import * as i0 from "@angular/core";
import * as i1 from "../../auth/user-auth/facade/auth.service";
import * as i2 from "../../auth/user-auth/services/auth-storage.service";
import * as i3 from "../facade/csagent-auth.service";
import * as i4 from "../../auth/user-auth/services/oauth-lib-wrapper.service";
import * as i5 from "../../routing/facade/routing.service";
import * as i6 from "../../global-message/facade/global-message.service";
import * as i7 from "../../occ/services/occ-endpoints.service";
/**
 * Overrides `AuthHttpHeaderService` to handle asm calls as well (not only OCC)
 * in cases of normal user session and on customer emulation.
 */
export class AsmAuthHttpHeaderService extends AuthHttpHeaderService {
    constructor(authService, authStorageService, csAgentAuthService, oAuthLibWrapperService, routingService, globalMessageService, occEndpointsService) {
        super(authService, authStorageService, oAuthLibWrapperService, routingService, occEndpointsService, globalMessageService);
        this.authService = authService;
        this.authStorageService = authStorageService;
        this.csAgentAuthService = csAgentAuthService;
        this.oAuthLibWrapperService = oAuthLibWrapperService;
        this.routingService = routingService;
        this.globalMessageService = globalMessageService;
        this.occEndpointsService = occEndpointsService;
    }
    /**
     * @override
     *
     * Checks if particular request should be handled by this service.
     */
    shouldCatchError(request) {
        return (super.shouldCatchError(request) || this.isCSAgentTokenRequest(request));
    }
    /**
     * @override
     *
     * Adds `Authorization` header to occ and CS agent requests.
     * For CS agent requests also removes the `cx-use-csagent-token` header (to avoid problems with CORS).
     */
    alterRequest(request) {
        const hasAuthorizationHeader = !!this.getAuthorizationHeader(request);
        const isCSAgentRequest = this.isCSAgentTokenRequest(request);
        let req = super.alterRequest(request);
        if (!hasAuthorizationHeader && isCSAgentRequest) {
            req = request.clone({
                setHeaders: Object.assign({}, this.createAuthorizationHeader()),
            });
            return InterceptorUtil.removeHeader(USE_CUSTOMER_SUPPORT_AGENT_TOKEN, req);
        }
        return req;
    }
    isCSAgentTokenRequest(request) {
        const isRequestWithCSAgentToken = InterceptorUtil.getInterceptorParam(USE_CUSTOMER_SUPPORT_AGENT_TOKEN, request.headers);
        return Boolean(isRequestWithCSAgentToken);
    }
    /**
     * @override
     *
     * On backend errors indicating expired `refresh_token` we need to logout
     * currently logged in user and CS agent.
     */
    handleExpiredRefreshToken() {
        this.csAgentAuthService
            .isCustomerSupportAgentLoggedIn()
            .pipe(take(1))
            .subscribe((csAgentLoggedIn) => {
            if (csAgentLoggedIn) {
                this.csAgentAuthService.logoutCustomerSupportAgent();
                this.globalMessageService.add({
                    key: 'asm.csagentTokenExpired',
                }, GlobalMessageType.MSG_TYPE_ERROR);
            }
            else {
                super.handleExpiredRefreshToken();
            }
        });
    }
}
AsmAuthHttpHeaderService.ɵprov = i0.ɵɵdefineInjectable({ factory: function AsmAuthHttpHeaderService_Factory() { return new AsmAuthHttpHeaderService(i0.ɵɵinject(i1.AuthService), i0.ɵɵinject(i2.AuthStorageService), i0.ɵɵinject(i3.CsAgentAuthService), i0.ɵɵinject(i4.OAuthLibWrapperService), i0.ɵɵinject(i5.RoutingService), i0.ɵɵinject(i6.GlobalMessageService), i0.ɵɵinject(i7.OccEndpointsService)); }, token: AsmAuthHttpHeaderService, providedIn: "root" });
AsmAuthHttpHeaderService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
AsmAuthHttpHeaderService.ctorParameters = () => [
    { type: AuthService },
    { type: AuthStorageService },
    { type: CsAgentAuthService },
    { type: OAuthLibWrapperService },
    { type: RoutingService },
    { type: GlobalMessageService },
    { type: OccEndpointsService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNtLWF1dGgtaHR0cC1oZWFkZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmUvc3JjL2FzbS9zZXJ2aWNlcy9hc20tYXV0aC1odHRwLWhlYWRlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3RDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUN2RSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx3REFBd0QsQ0FBQztBQUMvRixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUN4RixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSx5REFBeUQsQ0FBQztBQUNqRyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUMxRixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUNyRixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUMvRSxPQUFPLEVBQ0wsZUFBZSxFQUNmLGdDQUFnQyxHQUNqQyxNQUFNLGtDQUFrQyxDQUFDO0FBQzFDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUN0RSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQzs7Ozs7Ozs7O0FBRXBFOzs7R0FHRztBQUlILE1BQU0sT0FBTyx3QkFBeUIsU0FBUSxxQkFBcUI7SUFDakUsWUFDWSxXQUF3QixFQUN4QixrQkFBc0MsRUFDdEMsa0JBQXNDLEVBQ3RDLHNCQUE4QyxFQUM5QyxjQUE4QixFQUM5QixvQkFBMEMsRUFDMUMsbUJBQXdDO1FBRWxELEtBQUssQ0FDSCxXQUFXLEVBQ1gsa0JBQWtCLEVBQ2xCLHNCQUFzQixFQUN0QixjQUFjLEVBQ2QsbUJBQW1CLEVBQ25CLG9CQUFvQixDQUNyQixDQUFDO1FBZlEsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQUN0Qyx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBQ3RDLDJCQUFzQixHQUF0QixzQkFBc0IsQ0FBd0I7UUFDOUMsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFDMUMsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtJQVVwRCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLGdCQUFnQixDQUFDLE9BQXlCO1FBQy9DLE9BQU8sQ0FDTCxLQUFLLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLElBQUksSUFBSSxDQUFDLHFCQUFxQixDQUFDLE9BQU8sQ0FBQyxDQUN2RSxDQUFDO0lBQ0osQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0ksWUFBWSxDQUFDLE9BQXlCO1FBQzNDLE1BQU0sc0JBQXNCLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN0RSxNQUFNLGdCQUFnQixHQUFHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUU3RCxJQUFJLEdBQUcsR0FBRyxLQUFLLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRXRDLElBQUksQ0FBQyxzQkFBc0IsSUFBSSxnQkFBZ0IsRUFBRTtZQUMvQyxHQUFHLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQztnQkFDbEIsVUFBVSxvQkFDTCxJQUFJLENBQUMseUJBQXlCLEVBQUUsQ0FDcEM7YUFDRixDQUFDLENBQUM7WUFDSCxPQUFPLGVBQWUsQ0FBQyxZQUFZLENBQ2pDLGdDQUFnQyxFQUNoQyxHQUFHLENBQ0osQ0FBQztTQUNIO1FBQ0QsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDO0lBRVMscUJBQXFCLENBQUMsT0FBeUI7UUFDdkQsTUFBTSx5QkFBeUIsR0FBRyxlQUFlLENBQUMsbUJBQW1CLENBQ25FLGdDQUFnQyxFQUNoQyxPQUFPLENBQUMsT0FBTyxDQUNoQixDQUFDO1FBQ0YsT0FBTyxPQUFPLENBQUMseUJBQXlCLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSSx5QkFBeUI7UUFDOUIsSUFBSSxDQUFDLGtCQUFrQjthQUNwQiw4QkFBOEIsRUFBRTthQUNoQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ2IsU0FBUyxDQUFDLENBQUMsZUFBZSxFQUFFLEVBQUU7WUFDN0IsSUFBSSxlQUFlLEVBQUU7Z0JBQ25CLElBQUksQ0FBQyxrQkFBa0IsQ0FBQywwQkFBMEIsRUFBRSxDQUFDO2dCQUNyRCxJQUFJLENBQUMsb0JBQW9CLENBQUMsR0FBRyxDQUMzQjtvQkFDRSxHQUFHLEVBQUUseUJBQXlCO2lCQUMvQixFQUNELGlCQUFpQixDQUFDLGNBQWMsQ0FDakMsQ0FBQzthQUNIO2lCQUFNO2dCQUNMLEtBQUssQ0FBQyx5QkFBeUIsRUFBRSxDQUFDO2FBQ25DO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDOzs7O1lBM0ZGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7O1lBcEJRLFdBQVc7WUFFWCxrQkFBa0I7WUFVbEIsa0JBQWtCO1lBVGxCLHNCQUFzQjtZQVF0QixjQUFjO1lBUGQsb0JBQW9CO1lBRXBCLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBSZXF1ZXN0IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgdGFrZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vYXV0aC91c2VyLWF1dGgvZmFjYWRlL2F1dGguc2VydmljZSc7XG5pbXBvcnQgeyBBdXRoSHR0cEhlYWRlclNlcnZpY2UgfSBmcm9tICcuLi8uLi9hdXRoL3VzZXItYXV0aC9zZXJ2aWNlcy9hdXRoLWh0dHAtaGVhZGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgQXV0aFN0b3JhZ2VTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vYXV0aC91c2VyLWF1dGgvc2VydmljZXMvYXV0aC1zdG9yYWdlLnNlcnZpY2UnO1xuaW1wb3J0IHsgT0F1dGhMaWJXcmFwcGVyU2VydmljZSB9IGZyb20gJy4uLy4uL2F1dGgvdXNlci1hdXRoL3NlcnZpY2VzL29hdXRoLWxpYi13cmFwcGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgR2xvYmFsTWVzc2FnZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9nbG9iYWwtbWVzc2FnZS9mYWNhZGUvZ2xvYmFsLW1lc3NhZ2Uuc2VydmljZSc7XG5pbXBvcnQgeyBHbG9iYWxNZXNzYWdlVHlwZSB9IGZyb20gJy4uLy4uL2dsb2JhbC1tZXNzYWdlL21vZGVscy9nbG9iYWwtbWVzc2FnZS5tb2RlbCc7XG5pbXBvcnQgeyBPY2NFbmRwb2ludHNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vb2NjL3NlcnZpY2VzL29jYy1lbmRwb2ludHMuc2VydmljZSc7XG5pbXBvcnQge1xuICBJbnRlcmNlcHRvclV0aWwsXG4gIFVTRV9DVVNUT01FUl9TVVBQT1JUX0FHRU5UX1RPS0VOLFxufSBmcm9tICcuLi8uLi9vY2MvdXRpbHMvaW50ZXJjZXB0b3ItdXRpbCc7XG5pbXBvcnQgeyBSb3V0aW5nU2VydmljZSB9IGZyb20gJy4uLy4uL3JvdXRpbmcvZmFjYWRlL3JvdXRpbmcuc2VydmljZSc7XG5pbXBvcnQgeyBDc0FnZW50QXV0aFNlcnZpY2UgfSBmcm9tICcuLi9mYWNhZGUvY3NhZ2VudC1hdXRoLnNlcnZpY2UnO1xuXG4vKipcbiAqIE92ZXJyaWRlcyBgQXV0aEh0dHBIZWFkZXJTZXJ2aWNlYCB0byBoYW5kbGUgYXNtIGNhbGxzIGFzIHdlbGwgKG5vdCBvbmx5IE9DQylcbiAqIGluIGNhc2VzIG9mIG5vcm1hbCB1c2VyIHNlc3Npb24gYW5kIG9uIGN1c3RvbWVyIGVtdWxhdGlvbi5cbiAqL1xuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIEFzbUF1dGhIdHRwSGVhZGVyU2VydmljZSBleHRlbmRzIEF1dGhIdHRwSGVhZGVyU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGF1dGhTdG9yYWdlU2VydmljZTogQXV0aFN0b3JhZ2VTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBjc0FnZW50QXV0aFNlcnZpY2U6IENzQWdlbnRBdXRoU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgb0F1dGhMaWJXcmFwcGVyU2VydmljZTogT0F1dGhMaWJXcmFwcGVyU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgcm91dGluZ1NlcnZpY2U6IFJvdXRpbmdTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBnbG9iYWxNZXNzYWdlU2VydmljZTogR2xvYmFsTWVzc2FnZVNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIG9jY0VuZHBvaW50c1NlcnZpY2U6IE9jY0VuZHBvaW50c1NlcnZpY2VcbiAgKSB7XG4gICAgc3VwZXIoXG4gICAgICBhdXRoU2VydmljZSxcbiAgICAgIGF1dGhTdG9yYWdlU2VydmljZSxcbiAgICAgIG9BdXRoTGliV3JhcHBlclNlcnZpY2UsXG4gICAgICByb3V0aW5nU2VydmljZSxcbiAgICAgIG9jY0VuZHBvaW50c1NlcnZpY2UsXG4gICAgICBnbG9iYWxNZXNzYWdlU2VydmljZVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogQG92ZXJyaWRlXG4gICAqXG4gICAqIENoZWNrcyBpZiBwYXJ0aWN1bGFyIHJlcXVlc3Qgc2hvdWxkIGJlIGhhbmRsZWQgYnkgdGhpcyBzZXJ2aWNlLlxuICAgKi9cbiAgcHVibGljIHNob3VsZENhdGNoRXJyb3IocmVxdWVzdDogSHR0cFJlcXVlc3Q8YW55Pik6IGJvb2xlYW4ge1xuICAgIHJldHVybiAoXG4gICAgICBzdXBlci5zaG91bGRDYXRjaEVycm9yKHJlcXVlc3QpIHx8IHRoaXMuaXNDU0FnZW50VG9rZW5SZXF1ZXN0KHJlcXVlc3QpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAb3ZlcnJpZGVcbiAgICpcbiAgICogQWRkcyBgQXV0aG9yaXphdGlvbmAgaGVhZGVyIHRvIG9jYyBhbmQgQ1MgYWdlbnQgcmVxdWVzdHMuXG4gICAqIEZvciBDUyBhZ2VudCByZXF1ZXN0cyBhbHNvIHJlbW92ZXMgdGhlIGBjeC11c2UtY3NhZ2VudC10b2tlbmAgaGVhZGVyICh0byBhdm9pZCBwcm9ibGVtcyB3aXRoIENPUlMpLlxuICAgKi9cbiAgcHVibGljIGFsdGVyUmVxdWVzdChyZXF1ZXN0OiBIdHRwUmVxdWVzdDxhbnk+KTogSHR0cFJlcXVlc3Q8YW55PiB7XG4gICAgY29uc3QgaGFzQXV0aG9yaXphdGlvbkhlYWRlciA9ICEhdGhpcy5nZXRBdXRob3JpemF0aW9uSGVhZGVyKHJlcXVlc3QpO1xuICAgIGNvbnN0IGlzQ1NBZ2VudFJlcXVlc3QgPSB0aGlzLmlzQ1NBZ2VudFRva2VuUmVxdWVzdChyZXF1ZXN0KTtcblxuICAgIGxldCByZXEgPSBzdXBlci5hbHRlclJlcXVlc3QocmVxdWVzdCk7XG5cbiAgICBpZiAoIWhhc0F1dGhvcml6YXRpb25IZWFkZXIgJiYgaXNDU0FnZW50UmVxdWVzdCkge1xuICAgICAgcmVxID0gcmVxdWVzdC5jbG9uZSh7XG4gICAgICAgIHNldEhlYWRlcnM6IHtcbiAgICAgICAgICAuLi50aGlzLmNyZWF0ZUF1dGhvcml6YXRpb25IZWFkZXIoKSxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIEludGVyY2VwdG9yVXRpbC5yZW1vdmVIZWFkZXIoXG4gICAgICAgIFVTRV9DVVNUT01FUl9TVVBQT1JUX0FHRU5UX1RPS0VOLFxuICAgICAgICByZXFcbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiByZXE7XG4gIH1cblxuICBwcm90ZWN0ZWQgaXNDU0FnZW50VG9rZW5SZXF1ZXN0KHJlcXVlc3Q6IEh0dHBSZXF1ZXN0PGFueT4pOiBib29sZWFuIHtcbiAgICBjb25zdCBpc1JlcXVlc3RXaXRoQ1NBZ2VudFRva2VuID0gSW50ZXJjZXB0b3JVdGlsLmdldEludGVyY2VwdG9yUGFyYW0oXG4gICAgICBVU0VfQ1VTVE9NRVJfU1VQUE9SVF9BR0VOVF9UT0tFTixcbiAgICAgIHJlcXVlc3QuaGVhZGVyc1xuICAgICk7XG4gICAgcmV0dXJuIEJvb2xlYW4oaXNSZXF1ZXN0V2l0aENTQWdlbnRUb2tlbik7XG4gIH1cblxuICAvKipcbiAgICogQG92ZXJyaWRlXG4gICAqXG4gICAqIE9uIGJhY2tlbmQgZXJyb3JzIGluZGljYXRpbmcgZXhwaXJlZCBgcmVmcmVzaF90b2tlbmAgd2UgbmVlZCB0byBsb2dvdXRcbiAgICogY3VycmVudGx5IGxvZ2dlZCBpbiB1c2VyIGFuZCBDUyBhZ2VudC5cbiAgICovXG4gIHB1YmxpYyBoYW5kbGVFeHBpcmVkUmVmcmVzaFRva2VuKCk6IHZvaWQge1xuICAgIHRoaXMuY3NBZ2VudEF1dGhTZXJ2aWNlXG4gICAgICAuaXNDdXN0b21lclN1cHBvcnRBZ2VudExvZ2dlZEluKClcbiAgICAgIC5waXBlKHRha2UoMSkpXG4gICAgICAuc3Vic2NyaWJlKChjc0FnZW50TG9nZ2VkSW4pID0+IHtcbiAgICAgICAgaWYgKGNzQWdlbnRMb2dnZWRJbikge1xuICAgICAgICAgIHRoaXMuY3NBZ2VudEF1dGhTZXJ2aWNlLmxvZ291dEN1c3RvbWVyU3VwcG9ydEFnZW50KCk7XG4gICAgICAgICAgdGhpcy5nbG9iYWxNZXNzYWdlU2VydmljZS5hZGQoXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGtleTogJ2FzbS5jc2FnZW50VG9rZW5FeHBpcmVkJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBHbG9iYWxNZXNzYWdlVHlwZS5NU0dfVFlQRV9FUlJPUlxuICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc3VwZXIuaGFuZGxlRXhwaXJlZFJlZnJlc2hUb2tlbigpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgfVxufVxuIl19