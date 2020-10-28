import { Injectable } from '@angular/core';
import { take } from 'rxjs/operators';
import { AuthService } from '../../auth/user-auth/facade/auth.service';
import { AuthHeaderService } from '../../auth/user-auth/services/auth-header.service';
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
 * Overrides `AuthHeaderService` to handle asm calls as well (not only OCC)
 * in cases of normal user session and on customer emulation.
 */
export class AsmAuthHeaderService extends AuthHeaderService {
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
AsmAuthHeaderService.ɵprov = i0.ɵɵdefineInjectable({ factory: function AsmAuthHeaderService_Factory() { return new AsmAuthHeaderService(i0.ɵɵinject(i1.AuthService), i0.ɵɵinject(i2.AuthStorageService), i0.ɵɵinject(i3.CsAgentAuthService), i0.ɵɵinject(i4.OAuthLibWrapperService), i0.ɵɵinject(i5.RoutingService), i0.ɵɵinject(i6.GlobalMessageService), i0.ɵɵinject(i7.OccEndpointsService)); }, token: AsmAuthHeaderService, providedIn: "root" });
AsmAuthHeaderService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
AsmAuthHeaderService.ctorParameters = () => [
    { type: AuthService },
    { type: AuthStorageService },
    { type: CsAgentAuthService },
    { type: OAuthLibWrapperService },
    { type: RoutingService },
    { type: GlobalMessageService },
    { type: OccEndpointsService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNtLWF1dGguaGVhZGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JlL3NyYy9hc20vc2VydmljZXMvYXNtLWF1dGguaGVhZGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDdEMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBQ3RGLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBQ3hGLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHlEQUF5RCxDQUFDO0FBQ2pHLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBQzFGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBQ3JGLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQy9FLE9BQU8sRUFDTCxlQUFlLEVBQ2YsZ0NBQWdDLEdBQ2pDLE1BQU0sa0NBQWtDLENBQUM7QUFDMUMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDOzs7Ozs7Ozs7QUFFcEU7OztHQUdHO0FBSUgsTUFBTSxPQUFPLG9CQUFxQixTQUFRLGlCQUFpQjtJQUN6RCxZQUNZLFdBQXdCLEVBQ3hCLGtCQUFzQyxFQUN0QyxrQkFBc0MsRUFDdEMsc0JBQThDLEVBQzlDLGNBQThCLEVBQzlCLG9CQUEwQyxFQUMxQyxtQkFBd0M7UUFFbEQsS0FBSyxDQUNILFdBQVcsRUFDWCxrQkFBa0IsRUFDbEIsc0JBQXNCLEVBQ3RCLGNBQWMsRUFDZCxtQkFBbUIsRUFDbkIsb0JBQW9CLENBQ3JCLENBQUM7UUFmUSxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4Qix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBQ3RDLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUFDdEMsMkJBQXNCLEdBQXRCLHNCQUFzQixDQUF3QjtRQUM5QyxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQUMxQyx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO0lBVXBELENBQUM7SUFFRDs7OztPQUlHO0lBQ0ksZ0JBQWdCLENBQUMsT0FBeUI7UUFDL0MsT0FBTyxDQUNMLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsSUFBSSxJQUFJLENBQUMscUJBQXFCLENBQUMsT0FBTyxDQUFDLENBQ3ZFLENBQUM7SUFDSixDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSSxZQUFZLENBQUMsT0FBeUI7UUFDM0MsTUFBTSxzQkFBc0IsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3RFLE1BQU0sZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRTdELElBQUksR0FBRyxHQUFHLEtBQUssQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFdEMsSUFBSSxDQUFDLHNCQUFzQixJQUFJLGdCQUFnQixFQUFFO1lBQy9DLEdBQUcsR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDO2dCQUNsQixVQUFVLG9CQUNMLElBQUksQ0FBQyx5QkFBeUIsRUFBRSxDQUNwQzthQUNGLENBQUMsQ0FBQztZQUNILE9BQU8sZUFBZSxDQUFDLFlBQVksQ0FDakMsZ0NBQWdDLEVBQ2hDLEdBQUcsQ0FDSixDQUFDO1NBQ0g7UUFDRCxPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7SUFFUyxxQkFBcUIsQ0FBQyxPQUF5QjtRQUN2RCxNQUFNLHlCQUF5QixHQUFHLGVBQWUsQ0FBQyxtQkFBbUIsQ0FDbkUsZ0NBQWdDLEVBQ2hDLE9BQU8sQ0FBQyxPQUFPLENBQ2hCLENBQUM7UUFDRixPQUFPLE9BQU8sQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNJLHlCQUF5QjtRQUM5QixJQUFJLENBQUMsa0JBQWtCO2FBQ3BCLDhCQUE4QixFQUFFO2FBQ2hDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDYixTQUFTLENBQUMsQ0FBQyxlQUFlLEVBQUUsRUFBRTtZQUM3QixJQUFJLGVBQWUsRUFBRTtnQkFDbkIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLDBCQUEwQixFQUFFLENBQUM7Z0JBQ3JELElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxHQUFHLENBQzNCO29CQUNFLEdBQUcsRUFBRSx5QkFBeUI7aUJBQy9CLEVBQ0QsaUJBQWlCLENBQUMsY0FBYyxDQUNqQyxDQUFDO2FBQ0g7aUJBQU07Z0JBQ0wsS0FBSyxDQUFDLHlCQUF5QixFQUFFLENBQUM7YUFDbkM7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7Ozs7WUEzRkYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7WUFwQlEsV0FBVztZQUVYLGtCQUFrQjtZQVVsQixrQkFBa0I7WUFUbEIsc0JBQXNCO1lBUXRCLGNBQWM7WUFQZCxvQkFBb0I7WUFFcEIsbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cFJlcXVlc3QgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyB0YWtlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuLi8uLi9hdXRoL3VzZXItYXV0aC9mYWNhZGUvYXV0aC5zZXJ2aWNlJztcbmltcG9ydCB7IEF1dGhIZWFkZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vYXV0aC91c2VyLWF1dGgvc2VydmljZXMvYXV0aC1oZWFkZXIuc2VydmljZSc7XG5pbXBvcnQgeyBBdXRoU3RvcmFnZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9hdXRoL3VzZXItYXV0aC9zZXJ2aWNlcy9hdXRoLXN0b3JhZ2Uuc2VydmljZSc7XG5pbXBvcnQgeyBPQXV0aExpYldyYXBwZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vYXV0aC91c2VyLWF1dGgvc2VydmljZXMvb2F1dGgtbGliLXdyYXBwZXIuc2VydmljZSc7XG5pbXBvcnQgeyBHbG9iYWxNZXNzYWdlU2VydmljZSB9IGZyb20gJy4uLy4uL2dsb2JhbC1tZXNzYWdlL2ZhY2FkZS9nbG9iYWwtbWVzc2FnZS5zZXJ2aWNlJztcbmltcG9ydCB7IEdsb2JhbE1lc3NhZ2VUeXBlIH0gZnJvbSAnLi4vLi4vZ2xvYmFsLW1lc3NhZ2UvbW9kZWxzL2dsb2JhbC1tZXNzYWdlLm1vZGVsJztcbmltcG9ydCB7IE9jY0VuZHBvaW50c1NlcnZpY2UgfSBmcm9tICcuLi8uLi9vY2Mvc2VydmljZXMvb2NjLWVuZHBvaW50cy5zZXJ2aWNlJztcbmltcG9ydCB7XG4gIEludGVyY2VwdG9yVXRpbCxcbiAgVVNFX0NVU1RPTUVSX1NVUFBPUlRfQUdFTlRfVE9LRU4sXG59IGZyb20gJy4uLy4uL29jYy91dGlscy9pbnRlcmNlcHRvci11dGlsJztcbmltcG9ydCB7IFJvdXRpbmdTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vcm91dGluZy9mYWNhZGUvcm91dGluZy5zZXJ2aWNlJztcbmltcG9ydCB7IENzQWdlbnRBdXRoU2VydmljZSB9IGZyb20gJy4uL2ZhY2FkZS9jc2FnZW50LWF1dGguc2VydmljZSc7XG5cbi8qKlxuICogT3ZlcnJpZGVzIGBBdXRoSGVhZGVyU2VydmljZWAgdG8gaGFuZGxlIGFzbSBjYWxscyBhcyB3ZWxsIChub3Qgb25seSBPQ0MpXG4gKiBpbiBjYXNlcyBvZiBub3JtYWwgdXNlciBzZXNzaW9uIGFuZCBvbiBjdXN0b21lciBlbXVsYXRpb24uXG4gKi9cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBBc21BdXRoSGVhZGVyU2VydmljZSBleHRlbmRzIEF1dGhIZWFkZXJTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgYXV0aFN0b3JhZ2VTZXJ2aWNlOiBBdXRoU3RvcmFnZVNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGNzQWdlbnRBdXRoU2VydmljZTogQ3NBZ2VudEF1dGhTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBvQXV0aExpYldyYXBwZXJTZXJ2aWNlOiBPQXV0aExpYldyYXBwZXJTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCByb3V0aW5nU2VydmljZTogUm91dGluZ1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGdsb2JhbE1lc3NhZ2VTZXJ2aWNlOiBHbG9iYWxNZXNzYWdlU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgb2NjRW5kcG9pbnRzU2VydmljZTogT2NjRW5kcG9pbnRzU2VydmljZVxuICApIHtcbiAgICBzdXBlcihcbiAgICAgIGF1dGhTZXJ2aWNlLFxuICAgICAgYXV0aFN0b3JhZ2VTZXJ2aWNlLFxuICAgICAgb0F1dGhMaWJXcmFwcGVyU2VydmljZSxcbiAgICAgIHJvdXRpbmdTZXJ2aWNlLFxuICAgICAgb2NjRW5kcG9pbnRzU2VydmljZSxcbiAgICAgIGdsb2JhbE1lc3NhZ2VTZXJ2aWNlXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAb3ZlcnJpZGVcbiAgICpcbiAgICogQ2hlY2tzIGlmIHBhcnRpY3VsYXIgcmVxdWVzdCBzaG91bGQgYmUgaGFuZGxlZCBieSB0aGlzIHNlcnZpY2UuXG4gICAqL1xuICBwdWJsaWMgc2hvdWxkQ2F0Y2hFcnJvcihyZXF1ZXN0OiBIdHRwUmVxdWVzdDxhbnk+KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIChcbiAgICAgIHN1cGVyLnNob3VsZENhdGNoRXJyb3IocmVxdWVzdCkgfHwgdGhpcy5pc0NTQWdlbnRUb2tlblJlcXVlc3QocmVxdWVzdClcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIEBvdmVycmlkZVxuICAgKlxuICAgKiBBZGRzIGBBdXRob3JpemF0aW9uYCBoZWFkZXIgdG8gb2NjIGFuZCBDUyBhZ2VudCByZXF1ZXN0cy5cbiAgICogRm9yIENTIGFnZW50IHJlcXVlc3RzIGFsc28gcmVtb3ZlcyB0aGUgYGN4LXVzZS1jc2FnZW50LXRva2VuYCBoZWFkZXIgKHRvIGF2b2lkIHByb2JsZW1zIHdpdGggQ09SUykuXG4gICAqL1xuICBwdWJsaWMgYWx0ZXJSZXF1ZXN0KHJlcXVlc3Q6IEh0dHBSZXF1ZXN0PGFueT4pOiBIdHRwUmVxdWVzdDxhbnk+IHtcbiAgICBjb25zdCBoYXNBdXRob3JpemF0aW9uSGVhZGVyID0gISF0aGlzLmdldEF1dGhvcml6YXRpb25IZWFkZXIocmVxdWVzdCk7XG4gICAgY29uc3QgaXNDU0FnZW50UmVxdWVzdCA9IHRoaXMuaXNDU0FnZW50VG9rZW5SZXF1ZXN0KHJlcXVlc3QpO1xuXG4gICAgbGV0IHJlcSA9IHN1cGVyLmFsdGVyUmVxdWVzdChyZXF1ZXN0KTtcblxuICAgIGlmICghaGFzQXV0aG9yaXphdGlvbkhlYWRlciAmJiBpc0NTQWdlbnRSZXF1ZXN0KSB7XG4gICAgICByZXEgPSByZXF1ZXN0LmNsb25lKHtcbiAgICAgICAgc2V0SGVhZGVyczoge1xuICAgICAgICAgIC4uLnRoaXMuY3JlYXRlQXV0aG9yaXphdGlvbkhlYWRlcigpLFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgICByZXR1cm4gSW50ZXJjZXB0b3JVdGlsLnJlbW92ZUhlYWRlcihcbiAgICAgICAgVVNFX0NVU1RPTUVSX1NVUFBPUlRfQUdFTlRfVE9LRU4sXG4gICAgICAgIHJlcVxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlcTtcbiAgfVxuXG4gIHByb3RlY3RlZCBpc0NTQWdlbnRUb2tlblJlcXVlc3QocmVxdWVzdDogSHR0cFJlcXVlc3Q8YW55Pik6IGJvb2xlYW4ge1xuICAgIGNvbnN0IGlzUmVxdWVzdFdpdGhDU0FnZW50VG9rZW4gPSBJbnRlcmNlcHRvclV0aWwuZ2V0SW50ZXJjZXB0b3JQYXJhbShcbiAgICAgIFVTRV9DVVNUT01FUl9TVVBQT1JUX0FHRU5UX1RPS0VOLFxuICAgICAgcmVxdWVzdC5oZWFkZXJzXG4gICAgKTtcbiAgICByZXR1cm4gQm9vbGVhbihpc1JlcXVlc3RXaXRoQ1NBZ2VudFRva2VuKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAb3ZlcnJpZGVcbiAgICpcbiAgICogT24gYmFja2VuZCBlcnJvcnMgaW5kaWNhdGluZyBleHBpcmVkIGByZWZyZXNoX3Rva2VuYCB3ZSBuZWVkIHRvIGxvZ291dFxuICAgKiBjdXJyZW50bHkgbG9nZ2VkIGluIHVzZXIgYW5kIENTIGFnZW50LlxuICAgKi9cbiAgcHVibGljIGhhbmRsZUV4cGlyZWRSZWZyZXNoVG9rZW4oKTogdm9pZCB7XG4gICAgdGhpcy5jc0FnZW50QXV0aFNlcnZpY2VcbiAgICAgIC5pc0N1c3RvbWVyU3VwcG9ydEFnZW50TG9nZ2VkSW4oKVxuICAgICAgLnBpcGUodGFrZSgxKSlcbiAgICAgIC5zdWJzY3JpYmUoKGNzQWdlbnRMb2dnZWRJbikgPT4ge1xuICAgICAgICBpZiAoY3NBZ2VudExvZ2dlZEluKSB7XG4gICAgICAgICAgdGhpcy5jc0FnZW50QXV0aFNlcnZpY2UubG9nb3V0Q3VzdG9tZXJTdXBwb3J0QWdlbnQoKTtcbiAgICAgICAgICB0aGlzLmdsb2JhbE1lc3NhZ2VTZXJ2aWNlLmFkZChcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAga2V5OiAnYXNtLmNzYWdlbnRUb2tlbkV4cGlyZWQnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIEdsb2JhbE1lc3NhZ2VUeXBlLk1TR19UWVBFX0VSUk9SXG4gICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzdXBlci5oYW5kbGVFeHBpcmVkUmVmcmVzaFRva2VuKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9XG59XG4iXX0=