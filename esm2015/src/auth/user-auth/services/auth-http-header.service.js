import { Injectable } from '@angular/core';
import { filter, switchMap, take, tap } from 'rxjs/operators';
import { GlobalMessageService } from '../../../global-message/facade/global-message.service';
import { GlobalMessageType } from '../../../global-message/models/global-message.model';
import { OccEndpointsService } from '../../../occ/services/occ-endpoints.service';
import { RoutingService } from '../../../routing/facade/routing.service';
import { AuthService } from '../facade/auth.service';
import { AuthStorageService } from './auth-storage.service';
import { OAuthLibWrapperService } from './oauth-lib-wrapper.service';
import * as i0 from "@angular/core";
import * as i1 from "../facade/auth.service";
import * as i2 from "./auth-storage.service";
import * as i3 from "./oauth-lib-wrapper.service";
import * as i4 from "../../../routing/facade/routing.service";
import * as i5 from "../../../occ/services/occ-endpoints.service";
import * as i6 from "../../../global-message/facade/global-message.service";
/**
 * Extendable service for `AuthInterceptor`.
 */
export class AuthHttpHeaderService {
    constructor(authService, authStorageService, oAuthLibWrapperService, routingService, occEndpoints, globalMessageService) {
        this.authService = authService;
        this.authStorageService = authStorageService;
        this.oAuthLibWrapperService = oAuthLibWrapperService;
        this.routingService = routingService;
        this.occEndpoints = occEndpoints;
        this.globalMessageService = globalMessageService;
    }
    /**
     * Checks if request should be handled by this service (if it's OCC call).
     */
    shouldCatchError(request) {
        return this.isOccUrl(request.url);
    }
    /**
     * Adds `Authorization` header for OCC calls.
     */
    alterRequest(request) {
        const hasAuthorizationHeader = !!this.getAuthorizationHeader(request);
        const isOccUrl = this.isOccUrl(request.url);
        if (!hasAuthorizationHeader && isOccUrl) {
            return request.clone({
                setHeaders: Object.assign({}, this.createAuthorizationHeader()),
            });
        }
        return request;
    }
    isOccUrl(url) {
        return url.includes(this.occEndpoints.getBaseEndpoint());
    }
    getAuthorizationHeader(request) {
        const rawValue = request.headers.get('Authorization');
        return rawValue;
    }
    createAuthorizationHeader() {
        let token;
        this.authStorageService
            .getToken()
            .subscribe((tok) => (token = tok))
            .unsubscribe();
        if (token === null || token === void 0 ? void 0 : token.access_token) {
            return {
                Authorization: `${token.token_type || 'Bearer'} ${token.access_token}`,
            };
        }
        return {};
    }
    /**
     * Refreshes access_token and then retries the call with the new token.
     */
    handleExpiredAccessToken(request, next) {
        return this.handleExpiredToken().pipe(switchMap((token) => {
            return next.handle(this.createNewRequestWithNewToken(request, token));
        }));
    }
    /**
     * Logout user, redirected to login page and informs about expired session.
     */
    handleExpiredRefreshToken() {
        // Logout user
        // TODO(#9638): Use logout route when it will support passing redirect url
        this.authService.coreLogout();
        this.routingService.go({ cxRoute: 'login' });
        this.globalMessageService.add({
            key: 'httpHandlers.sessionExpired',
        }, GlobalMessageType.MSG_TYPE_ERROR);
    }
    /**
     * Attempts to refresh token if possible.
     * If it is not possible calls `handleExpiredRefreshToken`.
     *
     * @return observable which omits new access_token. (Warn: might never emit!).
     */
    handleExpiredToken() {
        const stream = this.authStorageService.getToken();
        let oldToken;
        return stream.pipe(tap((token) => {
            if (token.access_token && token.refresh_token && !oldToken) {
                this.oAuthLibWrapperService.refreshToken();
            }
            else if (!token.refresh_token) {
                this.handleExpiredRefreshToken();
            }
            oldToken = oldToken || token;
        }), filter((token) => oldToken.access_token !== token.access_token), take(1));
    }
    createNewRequestWithNewToken(request, token) {
        request = request.clone({
            setHeaders: {
                Authorization: `${token.token_type || 'Bearer'} ${token.access_token}`,
            },
        });
        return request;
    }
}
AuthHttpHeaderService.ɵprov = i0.ɵɵdefineInjectable({ factory: function AuthHttpHeaderService_Factory() { return new AuthHttpHeaderService(i0.ɵɵinject(i1.AuthService), i0.ɵɵinject(i2.AuthStorageService), i0.ɵɵinject(i3.OAuthLibWrapperService), i0.ɵɵinject(i4.RoutingService), i0.ɵɵinject(i5.OccEndpointsService), i0.ɵɵinject(i6.GlobalMessageService)); }, token: AuthHttpHeaderService, providedIn: "root" });
AuthHttpHeaderService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
AuthHttpHeaderService.ctorParameters = () => [
    { type: AuthService },
    { type: AuthStorageService },
    { type: OAuthLibWrapperService },
    { type: RoutingService },
    { type: OccEndpointsService },
    { type: GlobalMessageService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC1odHRwLWhlYWRlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZS9zcmMvYXV0aC91c2VyLWF1dGgvc2VydmljZXMvYXV0aC1odHRwLWhlYWRlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzlELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHVEQUF1RCxDQUFDO0FBQzdGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBQ3hGLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUN6RSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFckQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDNUQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7Ozs7Ozs7O0FBRXJFOztHQUVHO0FBSUgsTUFBTSxPQUFPLHFCQUFxQjtJQUNoQyxZQUNZLFdBQXdCLEVBQ3hCLGtCQUFzQyxFQUN0QyxzQkFBOEMsRUFDOUMsY0FBOEIsRUFDOUIsWUFBaUMsRUFDakMsb0JBQTBDO1FBTDFDLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUFDdEMsMkJBQXNCLEdBQXRCLHNCQUFzQixDQUF3QjtRQUM5QyxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsaUJBQVksR0FBWixZQUFZLENBQXFCO1FBQ2pDLHlCQUFvQixH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QixDQUFDLFlBQVksRUFBRSxDQUFDO2FBQzVDO2lCQUFNLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxFQUFFO2dCQUMvQixJQUFJLENBQUMseUJBQXlCLEVBQUUsQ0FBQzthQUNsQztZQUNELFFBQVEsR0FBRyxRQUFRLElBQUksS0FBSyxDQUFDO1FBQy9CLENBQUMsQ0FBQyxFQUNGLE1BQU0sQ0FDSixDQUFDLEtBQWdCLEVBQUUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxZQUFZLEtBQUssS0FBSyxDQUFDLFlBQVksQ0FDbkUsRUFDRCxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQ1IsQ0FBQztJQUNKLENBQUM7SUFFUyw0QkFBNEIsQ0FDcEMsT0FBeUIsRUFDekIsS0FBZ0I7UUFFaEIsT0FBTyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUM7WUFDdEIsVUFBVSxFQUFFO2dCQUNWLGFBQWEsRUFBRSxHQUFHLEtBQUssQ0FBQyxVQUFVLElBQUksUUFBUSxJQUFJLEtBQUssQ0FBQyxZQUFZLEVBQUU7YUFDdkU7U0FDRixDQUFDLENBQUM7UUFDSCxPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFDOzs7O1lBN0hGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7O1lBVlEsV0FBVztZQUVYLGtCQUFrQjtZQUNsQixzQkFBc0I7WUFKdEIsY0FBYztZQURkLG1CQUFtQjtZQUZuQixvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwRXZlbnQsIEh0dHBIYW5kbGVyLCBIdHRwUmVxdWVzdCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgc3dpdGNoTWFwLCB0YWtlLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBHbG9iYWxNZXNzYWdlU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2dsb2JhbC1tZXNzYWdlL2ZhY2FkZS9nbG9iYWwtbWVzc2FnZS5zZXJ2aWNlJztcbmltcG9ydCB7IEdsb2JhbE1lc3NhZ2VUeXBlIH0gZnJvbSAnLi4vLi4vLi4vZ2xvYmFsLW1lc3NhZ2UvbW9kZWxzL2dsb2JhbC1tZXNzYWdlLm1vZGVsJztcbmltcG9ydCB7IE9jY0VuZHBvaW50c1NlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9vY2Mvc2VydmljZXMvb2NjLWVuZHBvaW50cy5zZXJ2aWNlJztcbmltcG9ydCB7IFJvdXRpbmdTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vcm91dGluZy9mYWNhZGUvcm91dGluZy5zZXJ2aWNlJztcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi4vZmFjYWRlL2F1dGguc2VydmljZSc7XG5pbXBvcnQgeyBBdXRoVG9rZW4gfSBmcm9tICcuLi9tb2RlbHMvYXV0aC10b2tlbi5tb2RlbCc7XG5pbXBvcnQgeyBBdXRoU3RvcmFnZVNlcnZpY2UgfSBmcm9tICcuL2F1dGgtc3RvcmFnZS5zZXJ2aWNlJztcbmltcG9ydCB7IE9BdXRoTGliV3JhcHBlclNlcnZpY2UgfSBmcm9tICcuL29hdXRoLWxpYi13cmFwcGVyLnNlcnZpY2UnO1xuXG4vKipcbiAqIEV4dGVuZGFibGUgc2VydmljZSBmb3IgYEF1dGhJbnRlcmNlcHRvcmAuXG4gKi9cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBBdXRoSHR0cEhlYWRlclNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBhdXRoU3RvcmFnZVNlcnZpY2U6IEF1dGhTdG9yYWdlU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgb0F1dGhMaWJXcmFwcGVyU2VydmljZTogT0F1dGhMaWJXcmFwcGVyU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgcm91dGluZ1NlcnZpY2U6IFJvdXRpbmdTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBvY2NFbmRwb2ludHM6IE9jY0VuZHBvaW50c1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGdsb2JhbE1lc3NhZ2VTZXJ2aWNlOiBHbG9iYWxNZXNzYWdlU2VydmljZVxuICApIHt9XG5cbiAgLyoqXG4gICAqIENoZWNrcyBpZiByZXF1ZXN0IHNob3VsZCBiZSBoYW5kbGVkIGJ5IHRoaXMgc2VydmljZSAoaWYgaXQncyBPQ0MgY2FsbCkuXG4gICAqL1xuICBwdWJsaWMgc2hvdWxkQ2F0Y2hFcnJvcihyZXF1ZXN0OiBIdHRwUmVxdWVzdDxhbnk+KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuaXNPY2NVcmwocmVxdWVzdC51cmwpO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgYEF1dGhvcml6YXRpb25gIGhlYWRlciBmb3IgT0NDIGNhbGxzLlxuICAgKi9cbiAgcHVibGljIGFsdGVyUmVxdWVzdChyZXF1ZXN0OiBIdHRwUmVxdWVzdDxhbnk+KTogSHR0cFJlcXVlc3Q8YW55PiB7XG4gICAgY29uc3QgaGFzQXV0aG9yaXphdGlvbkhlYWRlciA9ICEhdGhpcy5nZXRBdXRob3JpemF0aW9uSGVhZGVyKHJlcXVlc3QpO1xuICAgIGNvbnN0IGlzT2NjVXJsID0gdGhpcy5pc09jY1VybChyZXF1ZXN0LnVybCk7XG4gICAgaWYgKCFoYXNBdXRob3JpemF0aW9uSGVhZGVyICYmIGlzT2NjVXJsKSB7XG4gICAgICByZXR1cm4gcmVxdWVzdC5jbG9uZSh7XG4gICAgICAgIHNldEhlYWRlcnM6IHtcbiAgICAgICAgICAuLi50aGlzLmNyZWF0ZUF1dGhvcml6YXRpb25IZWFkZXIoKSxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gcmVxdWVzdDtcbiAgfVxuXG4gIHByb3RlY3RlZCBpc09jY1VybCh1cmw6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB1cmwuaW5jbHVkZXModGhpcy5vY2NFbmRwb2ludHMuZ2V0QmFzZUVuZHBvaW50KCkpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGdldEF1dGhvcml6YXRpb25IZWFkZXIocmVxdWVzdDogSHR0cFJlcXVlc3Q8YW55Pik6IHN0cmluZyB7XG4gICAgY29uc3QgcmF3VmFsdWUgPSByZXF1ZXN0LmhlYWRlcnMuZ2V0KCdBdXRob3JpemF0aW9uJyk7XG4gICAgcmV0dXJuIHJhd1ZhbHVlO1xuICB9XG5cbiAgcHJvdGVjdGVkIGNyZWF0ZUF1dGhvcml6YXRpb25IZWFkZXIoKTogeyBBdXRob3JpemF0aW9uPzogc3RyaW5nIH0ge1xuICAgIGxldCB0b2tlbjtcbiAgICB0aGlzLmF1dGhTdG9yYWdlU2VydmljZVxuICAgICAgLmdldFRva2VuKClcbiAgICAgIC5zdWJzY3JpYmUoKHRvaykgPT4gKHRva2VuID0gdG9rKSlcbiAgICAgIC51bnN1YnNjcmliZSgpO1xuXG4gICAgaWYgKHRva2VuPy5hY2Nlc3NfdG9rZW4pIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIEF1dGhvcml6YXRpb246IGAke3Rva2VuLnRva2VuX3R5cGUgfHwgJ0JlYXJlcid9ICR7dG9rZW4uYWNjZXNzX3Rva2VufWAsXG4gICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4ge307XG4gIH1cblxuICAvKipcbiAgICogUmVmcmVzaGVzIGFjY2Vzc190b2tlbiBhbmQgdGhlbiByZXRyaWVzIHRoZSBjYWxsIHdpdGggdGhlIG5ldyB0b2tlbi5cbiAgICovXG4gIHB1YmxpYyBoYW5kbGVFeHBpcmVkQWNjZXNzVG9rZW4oXG4gICAgcmVxdWVzdDogSHR0cFJlcXVlc3Q8YW55PixcbiAgICBuZXh0OiBIdHRwSGFuZGxlclxuICApOiBPYnNlcnZhYmxlPEh0dHBFdmVudDxBdXRoVG9rZW4+PiB7XG4gICAgcmV0dXJuIHRoaXMuaGFuZGxlRXhwaXJlZFRva2VuKCkucGlwZShcbiAgICAgIHN3aXRjaE1hcCgodG9rZW46IEF1dGhUb2tlbikgPT4ge1xuICAgICAgICByZXR1cm4gbmV4dC5oYW5kbGUodGhpcy5jcmVhdGVOZXdSZXF1ZXN0V2l0aE5ld1Rva2VuKHJlcXVlc3QsIHRva2VuKSk7XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogTG9nb3V0IHVzZXIsIHJlZGlyZWN0ZWQgdG8gbG9naW4gcGFnZSBhbmQgaW5mb3JtcyBhYm91dCBleHBpcmVkIHNlc3Npb24uXG4gICAqL1xuICBwdWJsaWMgaGFuZGxlRXhwaXJlZFJlZnJlc2hUb2tlbigpOiB2b2lkIHtcbiAgICAvLyBMb2dvdXQgdXNlclxuICAgIC8vIFRPRE8oIzk2MzgpOiBVc2UgbG9nb3V0IHJvdXRlIHdoZW4gaXQgd2lsbCBzdXBwb3J0IHBhc3NpbmcgcmVkaXJlY3QgdXJsXG4gICAgdGhpcy5hdXRoU2VydmljZS5jb3JlTG9nb3V0KCk7XG4gICAgdGhpcy5yb3V0aW5nU2VydmljZS5nbyh7IGN4Um91dGU6ICdsb2dpbicgfSk7XG4gICAgdGhpcy5nbG9iYWxNZXNzYWdlU2VydmljZS5hZGQoXG4gICAgICB7XG4gICAgICAgIGtleTogJ2h0dHBIYW5kbGVycy5zZXNzaW9uRXhwaXJlZCcsXG4gICAgICB9LFxuICAgICAgR2xvYmFsTWVzc2FnZVR5cGUuTVNHX1RZUEVfRVJST1JcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIEF0dGVtcHRzIHRvIHJlZnJlc2ggdG9rZW4gaWYgcG9zc2libGUuXG4gICAqIElmIGl0IGlzIG5vdCBwb3NzaWJsZSBjYWxscyBgaGFuZGxlRXhwaXJlZFJlZnJlc2hUb2tlbmAuXG4gICAqXG4gICAqIEByZXR1cm4gb2JzZXJ2YWJsZSB3aGljaCBvbWl0cyBuZXcgYWNjZXNzX3Rva2VuLiAoV2FybjogbWlnaHQgbmV2ZXIgZW1pdCEpLlxuICAgKi9cbiAgcHJvdGVjdGVkIGhhbmRsZUV4cGlyZWRUb2tlbigpOiBPYnNlcnZhYmxlPEF1dGhUb2tlbj4ge1xuICAgIGNvbnN0IHN0cmVhbSA9IHRoaXMuYXV0aFN0b3JhZ2VTZXJ2aWNlLmdldFRva2VuKCk7XG4gICAgbGV0IG9sZFRva2VuOiBBdXRoVG9rZW47XG4gICAgcmV0dXJuIHN0cmVhbS5waXBlKFxuICAgICAgdGFwKCh0b2tlbjogQXV0aFRva2VuKSA9PiB7XG4gICAgICAgIGlmICh0b2tlbi5hY2Nlc3NfdG9rZW4gJiYgdG9rZW4ucmVmcmVzaF90b2tlbiAmJiAhb2xkVG9rZW4pIHtcbiAgICAgICAgICB0aGlzLm9BdXRoTGliV3JhcHBlclNlcnZpY2UucmVmcmVzaFRva2VuKCk7XG4gICAgICAgIH0gZWxzZSBpZiAoIXRva2VuLnJlZnJlc2hfdG9rZW4pIHtcbiAgICAgICAgICB0aGlzLmhhbmRsZUV4cGlyZWRSZWZyZXNoVG9rZW4oKTtcbiAgICAgICAgfVxuICAgICAgICBvbGRUb2tlbiA9IG9sZFRva2VuIHx8IHRva2VuO1xuICAgICAgfSksXG4gICAgICBmaWx0ZXIoXG4gICAgICAgICh0b2tlbjogQXV0aFRva2VuKSA9PiBvbGRUb2tlbi5hY2Nlc3NfdG9rZW4gIT09IHRva2VuLmFjY2Vzc190b2tlblxuICAgICAgKSxcbiAgICAgIHRha2UoMSlcbiAgICApO1xuICB9XG5cbiAgcHJvdGVjdGVkIGNyZWF0ZU5ld1JlcXVlc3RXaXRoTmV3VG9rZW4oXG4gICAgcmVxdWVzdDogSHR0cFJlcXVlc3Q8YW55PixcbiAgICB0b2tlbjogQXV0aFRva2VuXG4gICk6IEh0dHBSZXF1ZXN0PGFueT4ge1xuICAgIHJlcXVlc3QgPSByZXF1ZXN0LmNsb25lKHtcbiAgICAgIHNldEhlYWRlcnM6IHtcbiAgICAgICAgQXV0aG9yaXphdGlvbjogYCR7dG9rZW4udG9rZW5fdHlwZSB8fCAnQmVhcmVyJ30gJHt0b2tlbi5hY2Nlc3NfdG9rZW59YCxcbiAgICAgIH0sXG4gICAgfSk7XG4gICAgcmV0dXJuIHJlcXVlc3Q7XG4gIH1cbn1cbiJdfQ==