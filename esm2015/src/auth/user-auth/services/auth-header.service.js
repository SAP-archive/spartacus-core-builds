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
export class AuthHeaderService {
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
        this.authService.logout();
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
AuthHeaderService.ɵprov = i0.ɵɵdefineInjectable({ factory: function AuthHeaderService_Factory() { return new AuthHeaderService(i0.ɵɵinject(i1.AuthService), i0.ɵɵinject(i2.AuthStorageService), i0.ɵɵinject(i3.OAuthLibWrapperService), i0.ɵɵinject(i4.RoutingService), i0.ɵɵinject(i5.OccEndpointsService), i0.ɵɵinject(i6.GlobalMessageService)); }, token: AuthHeaderService, providedIn: "root" });
AuthHeaderService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
AuthHeaderService.ctorParameters = () => [
    { type: AuthService },
    { type: AuthStorageService },
    { type: OAuthLibWrapperService },
    { type: RoutingService },
    { type: OccEndpointsService },
    { type: GlobalMessageService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC1oZWFkZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmUvc3JjL2F1dGgvdXNlci1hdXRoL3NlcnZpY2VzL2F1dGgtaGVhZGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDOUQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sdURBQXVELENBQUM7QUFDN0YsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0scURBQXFELENBQUM7QUFDeEYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDbEYsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUVyRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUM1RCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQzs7Ozs7Ozs7QUFFckU7O0dBRUc7QUFJSCxNQUFNLE9BQU8saUJBQWlCO0lBQzVCLFlBQ1ksV0FBd0IsRUFDeEIsa0JBQXNDLEVBQ3RDLHNCQUE4QyxFQUM5QyxjQUE4QixFQUM5QixZQUFpQyxFQUNqQyxvQkFBMEM7UUFMMUMsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQUN0QywyQkFBc0IsR0FBdEIsc0JBQXNCLENBQXdCO1FBQzlDLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixpQkFBWSxHQUFaLFlBQVksQ0FBcUI7UUFDakMseUJBQW9CLEdBQXBCLG9CQUFv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QUM1QztpQkFBTSxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsRUFBRTtnQkFDL0IsSUFBSSxDQUFDLHlCQUF5QixFQUFFLENBQUM7YUFDbEM7WUFDRCxRQUFRLEdBQUcsUUFBUSxJQUFJLEtBQUssQ0FBQztRQUMvQixDQUFDLENBQUMsRUFDRixNQUFNLENBQ0osQ0FBQyxLQUFnQixFQUFFLEVBQUUsQ0FBQyxRQUFRLENBQUMsWUFBWSxLQUFLLEtBQUssQ0FBQyxZQUFZLENBQ25FLEVBQ0QsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUNSLENBQUM7SUFDSixDQUFDO0lBRVMsNEJBQTRCLENBQ3BDLE9BQXlCLEVBQ3pCLEtBQWdCO1FBRWhCLE9BQU8sR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDO1lBQ3RCLFVBQVUsRUFBRTtnQkFDVixhQUFhLEVBQUUsR0FBRyxLQUFLLENBQUMsVUFBVSxJQUFJLFFBQVEsSUFBSSxLQUFLLENBQUMsWUFBWSxFQUFFO2FBQ3ZFO1NBQ0YsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQzs7OztZQTVIRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7OztZQVZRLFdBQVc7WUFFWCxrQkFBa0I7WUFDbEIsc0JBQXNCO1lBSnRCLGNBQWM7WUFEZCxtQkFBbUI7WUFGbkIsb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cEV2ZW50LCBIdHRwSGFuZGxlciwgSHR0cFJlcXVlc3QgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIHN3aXRjaE1hcCwgdGFrZSwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgR2xvYmFsTWVzc2FnZVNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9nbG9iYWwtbWVzc2FnZS9mYWNhZGUvZ2xvYmFsLW1lc3NhZ2Uuc2VydmljZSc7XG5pbXBvcnQgeyBHbG9iYWxNZXNzYWdlVHlwZSB9IGZyb20gJy4uLy4uLy4uL2dsb2JhbC1tZXNzYWdlL21vZGVscy9nbG9iYWwtbWVzc2FnZS5tb2RlbCc7XG5pbXBvcnQgeyBPY2NFbmRwb2ludHNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vb2NjL3NlcnZpY2VzL29jYy1lbmRwb2ludHMuc2VydmljZSc7XG5pbXBvcnQgeyBSb3V0aW5nU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3JvdXRpbmcvZmFjYWRlL3JvdXRpbmcuc2VydmljZSc7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4uL2ZhY2FkZS9hdXRoLnNlcnZpY2UnO1xuaW1wb3J0IHsgQXV0aFRva2VuIH0gZnJvbSAnLi4vbW9kZWxzL2F1dGgtdG9rZW4ubW9kZWwnO1xuaW1wb3J0IHsgQXV0aFN0b3JhZ2VTZXJ2aWNlIH0gZnJvbSAnLi9hdXRoLXN0b3JhZ2Uuc2VydmljZSc7XG5pbXBvcnQgeyBPQXV0aExpYldyYXBwZXJTZXJ2aWNlIH0gZnJvbSAnLi9vYXV0aC1saWItd3JhcHBlci5zZXJ2aWNlJztcblxuLyoqXG4gKiBFeHRlbmRhYmxlIHNlcnZpY2UgZm9yIGBBdXRoSW50ZXJjZXB0b3JgLlxuICovXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgQXV0aEhlYWRlclNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBhdXRoU3RvcmFnZVNlcnZpY2U6IEF1dGhTdG9yYWdlU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgb0F1dGhMaWJXcmFwcGVyU2VydmljZTogT0F1dGhMaWJXcmFwcGVyU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgcm91dGluZ1NlcnZpY2U6IFJvdXRpbmdTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBvY2NFbmRwb2ludHM6IE9jY0VuZHBvaW50c1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGdsb2JhbE1lc3NhZ2VTZXJ2aWNlOiBHbG9iYWxNZXNzYWdlU2VydmljZVxuICApIHt9XG5cbiAgLyoqXG4gICAqIENoZWNrcyBpZiByZXF1ZXN0IHNob3VsZCBiZSBoYW5kbGVkIGJ5IHRoaXMgc2VydmljZSAoaWYgaXQncyBPQ0MgY2FsbCkuXG4gICAqL1xuICBwdWJsaWMgc2hvdWxkQ2F0Y2hFcnJvcihyZXF1ZXN0OiBIdHRwUmVxdWVzdDxhbnk+KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuaXNPY2NVcmwocmVxdWVzdC51cmwpO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgYEF1dGhvcml6YXRpb25gIGhlYWRlciBmb3IgT0NDIGNhbGxzLlxuICAgKi9cbiAgcHVibGljIGFsdGVyUmVxdWVzdChyZXF1ZXN0OiBIdHRwUmVxdWVzdDxhbnk+KTogSHR0cFJlcXVlc3Q8YW55PiB7XG4gICAgY29uc3QgaGFzQXV0aG9yaXphdGlvbkhlYWRlciA9ICEhdGhpcy5nZXRBdXRob3JpemF0aW9uSGVhZGVyKHJlcXVlc3QpO1xuICAgIGNvbnN0IGlzT2NjVXJsID0gdGhpcy5pc09jY1VybChyZXF1ZXN0LnVybCk7XG4gICAgaWYgKCFoYXNBdXRob3JpemF0aW9uSGVhZGVyICYmIGlzT2NjVXJsKSB7XG4gICAgICByZXR1cm4gcmVxdWVzdC5jbG9uZSh7XG4gICAgICAgIHNldEhlYWRlcnM6IHtcbiAgICAgICAgICAuLi50aGlzLmNyZWF0ZUF1dGhvcml6YXRpb25IZWFkZXIoKSxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gcmVxdWVzdDtcbiAgfVxuXG4gIHByb3RlY3RlZCBpc09jY1VybCh1cmw6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB1cmwuaW5jbHVkZXModGhpcy5vY2NFbmRwb2ludHMuZ2V0QmFzZUVuZHBvaW50KCkpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGdldEF1dGhvcml6YXRpb25IZWFkZXIocmVxdWVzdDogSHR0cFJlcXVlc3Q8YW55Pik6IHN0cmluZyB7XG4gICAgY29uc3QgcmF3VmFsdWUgPSByZXF1ZXN0LmhlYWRlcnMuZ2V0KCdBdXRob3JpemF0aW9uJyk7XG4gICAgcmV0dXJuIHJhd1ZhbHVlO1xuICB9XG5cbiAgcHJvdGVjdGVkIGNyZWF0ZUF1dGhvcml6YXRpb25IZWFkZXIoKTogeyBBdXRob3JpemF0aW9uPzogc3RyaW5nIH0ge1xuICAgIGxldCB0b2tlbjtcbiAgICB0aGlzLmF1dGhTdG9yYWdlU2VydmljZVxuICAgICAgLmdldFRva2VuKClcbiAgICAgIC5zdWJzY3JpYmUoKHRvaykgPT4gKHRva2VuID0gdG9rKSlcbiAgICAgIC51bnN1YnNjcmliZSgpO1xuXG4gICAgaWYgKHRva2VuPy5hY2Nlc3NfdG9rZW4pIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIEF1dGhvcml6YXRpb246IGAke3Rva2VuLnRva2VuX3R5cGUgfHwgJ0JlYXJlcid9ICR7dG9rZW4uYWNjZXNzX3Rva2VufWAsXG4gICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4ge307XG4gIH1cblxuICAvKipcbiAgICogUmVmcmVzaGVzIGFjY2Vzc190b2tlbiBhbmQgdGhlbiByZXRyaWVzIHRoZSBjYWxsIHdpdGggdGhlIG5ldyB0b2tlbi5cbiAgICovXG4gIHB1YmxpYyBoYW5kbGVFeHBpcmVkQWNjZXNzVG9rZW4oXG4gICAgcmVxdWVzdDogSHR0cFJlcXVlc3Q8YW55PixcbiAgICBuZXh0OiBIdHRwSGFuZGxlclxuICApOiBPYnNlcnZhYmxlPEh0dHBFdmVudDxBdXRoVG9rZW4+PiB7XG4gICAgcmV0dXJuIHRoaXMuaGFuZGxlRXhwaXJlZFRva2VuKCkucGlwZShcbiAgICAgIHN3aXRjaE1hcCgodG9rZW46IEF1dGhUb2tlbikgPT4ge1xuICAgICAgICByZXR1cm4gbmV4dC5oYW5kbGUodGhpcy5jcmVhdGVOZXdSZXF1ZXN0V2l0aE5ld1Rva2VuKHJlcXVlc3QsIHRva2VuKSk7XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogTG9nb3V0IHVzZXIsIHJlZGlyZWN0ZWQgdG8gbG9naW4gcGFnZSBhbmQgaW5mb3JtcyBhYm91dCBleHBpcmVkIHNlc3Npb24uXG4gICAqL1xuICBwdWJsaWMgaGFuZGxlRXhwaXJlZFJlZnJlc2hUb2tlbigpOiB2b2lkIHtcbiAgICAvLyBMb2dvdXQgdXNlclxuICAgIHRoaXMuYXV0aFNlcnZpY2UubG9nb3V0KCk7XG4gICAgdGhpcy5yb3V0aW5nU2VydmljZS5nbyh7IGN4Um91dGU6ICdsb2dpbicgfSk7XG4gICAgdGhpcy5nbG9iYWxNZXNzYWdlU2VydmljZS5hZGQoXG4gICAgICB7XG4gICAgICAgIGtleTogJ2h0dHBIYW5kbGVycy5zZXNzaW9uRXhwaXJlZCcsXG4gICAgICB9LFxuICAgICAgR2xvYmFsTWVzc2FnZVR5cGUuTVNHX1RZUEVfRVJST1JcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIEF0dGVtcHRzIHRvIHJlZnJlc2ggdG9rZW4gaWYgcG9zc2libGUuXG4gICAqIElmIGl0IGlzIG5vdCBwb3NzaWJsZSBjYWxscyBgaGFuZGxlRXhwaXJlZFJlZnJlc2hUb2tlbmAuXG4gICAqXG4gICAqIEByZXR1cm4gb2JzZXJ2YWJsZSB3aGljaCBvbWl0cyBuZXcgYWNjZXNzX3Rva2VuLiAoV2FybjogbWlnaHQgbmV2ZXIgZW1pdCEpLlxuICAgKi9cbiAgcHJvdGVjdGVkIGhhbmRsZUV4cGlyZWRUb2tlbigpOiBPYnNlcnZhYmxlPEF1dGhUb2tlbj4ge1xuICAgIGNvbnN0IHN0cmVhbSA9IHRoaXMuYXV0aFN0b3JhZ2VTZXJ2aWNlLmdldFRva2VuKCk7XG4gICAgbGV0IG9sZFRva2VuOiBBdXRoVG9rZW47XG4gICAgcmV0dXJuIHN0cmVhbS5waXBlKFxuICAgICAgdGFwKCh0b2tlbjogQXV0aFRva2VuKSA9PiB7XG4gICAgICAgIGlmICh0b2tlbi5hY2Nlc3NfdG9rZW4gJiYgdG9rZW4ucmVmcmVzaF90b2tlbiAmJiAhb2xkVG9rZW4pIHtcbiAgICAgICAgICB0aGlzLm9BdXRoTGliV3JhcHBlclNlcnZpY2UucmVmcmVzaFRva2VuKCk7XG4gICAgICAgIH0gZWxzZSBpZiAoIXRva2VuLnJlZnJlc2hfdG9rZW4pIHtcbiAgICAgICAgICB0aGlzLmhhbmRsZUV4cGlyZWRSZWZyZXNoVG9rZW4oKTtcbiAgICAgICAgfVxuICAgICAgICBvbGRUb2tlbiA9IG9sZFRva2VuIHx8IHRva2VuO1xuICAgICAgfSksXG4gICAgICBmaWx0ZXIoXG4gICAgICAgICh0b2tlbjogQXV0aFRva2VuKSA9PiBvbGRUb2tlbi5hY2Nlc3NfdG9rZW4gIT09IHRva2VuLmFjY2Vzc190b2tlblxuICAgICAgKSxcbiAgICAgIHRha2UoMSlcbiAgICApO1xuICB9XG5cbiAgcHJvdGVjdGVkIGNyZWF0ZU5ld1JlcXVlc3RXaXRoTmV3VG9rZW4oXG4gICAgcmVxdWVzdDogSHR0cFJlcXVlc3Q8YW55PixcbiAgICB0b2tlbjogQXV0aFRva2VuXG4gICk6IEh0dHBSZXF1ZXN0PGFueT4ge1xuICAgIHJlcXVlc3QgPSByZXF1ZXN0LmNsb25lKHtcbiAgICAgIHNldEhlYWRlcnM6IHtcbiAgICAgICAgQXV0aG9yaXphdGlvbjogYCR7dG9rZW4udG9rZW5fdHlwZSB8fCAnQmVhcmVyJ30gJHt0b2tlbi5hY2Nlc3NfdG9rZW59YCxcbiAgICAgIH0sXG4gICAgfSk7XG4gICAgcmV0dXJuIHJlcXVlc3Q7XG4gIH1cbn1cbiJdfQ==