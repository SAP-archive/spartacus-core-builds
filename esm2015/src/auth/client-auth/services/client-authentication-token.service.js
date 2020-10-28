import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthConfigService } from '../../user-auth/services/auth-config.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "../../user-auth/services/auth-config.service";
/**
 * Responsible for requesting from OAuth server `ClientToken` for a particular
 * auth client.
 */
export class ClientAuthenticationTokenService {
    constructor(http, authConfigService) {
        this.http = http;
        this.authConfigService = authConfigService;
    }
    /**
     * Loads token with client authentication flow.
     *
     * @returns observable with ClientToken
     */
    loadClientAuthenticationToken() {
        const url = this.authConfigService.getTokenEndpoint();
        const params = new HttpParams()
            .set('client_id', encodeURIComponent(this.authConfigService.getClientId()))
            .set('client_secret', encodeURIComponent(this.authConfigService.getClientSecret()))
            .set('grant_type', 'client_credentials');
        const headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
        });
        return this.http.post(url, params, { headers });
    }
}
ClientAuthenticationTokenService.ɵprov = i0.ɵɵdefineInjectable({ factory: function ClientAuthenticationTokenService_Factory() { return new ClientAuthenticationTokenService(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.AuthConfigService)); }, token: ClientAuthenticationTokenService, providedIn: "root" });
ClientAuthenticationTokenService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
ClientAuthenticationTokenService.ctorParameters = () => [
    { type: HttpClient },
    { type: AuthConfigService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50LWF1dGhlbnRpY2F0aW9uLXRva2VuLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JlL3NyYy9hdXRoL2NsaWVudC1hdXRoL3NlcnZpY2VzL2NsaWVudC1hdXRoZW50aWNhdGlvbi10b2tlbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQzNFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sOENBQThDLENBQUM7Ozs7QUFHakY7OztHQUdHO0FBSUgsTUFBTSxPQUFPLGdDQUFnQztJQUMzQyxZQUNZLElBQWdCLEVBQ2hCLGlCQUFvQztRQURwQyxTQUFJLEdBQUosSUFBSSxDQUFZO1FBQ2hCLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7SUFDN0MsQ0FBQztJQUVKOzs7O09BSUc7SUFDSCw2QkFBNkI7UUFDM0IsTUFBTSxHQUFHLEdBQVcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFDOUQsTUFBTSxNQUFNLEdBQUcsSUFBSSxVQUFVLEVBQUU7YUFDNUIsR0FBRyxDQUNGLFdBQVcsRUFDWCxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FDekQ7YUFDQSxHQUFHLENBQ0YsZUFBZSxFQUNmLGtCQUFrQixDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxlQUFlLEVBQUUsQ0FBQyxDQUM3RDthQUNBLEdBQUcsQ0FBQyxZQUFZLEVBQUUsb0JBQW9CLENBQUMsQ0FBQztRQUUzQyxNQUFNLE9BQU8sR0FBRyxJQUFJLFdBQVcsQ0FBQztZQUM5QixjQUFjLEVBQUUsbUNBQW1DO1NBQ3BELENBQUMsQ0FBQztRQUNILE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQWMsR0FBRyxFQUFFLE1BQU0sRUFBRSxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUM7SUFDL0QsQ0FBQzs7OztZQS9CRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7OztZQVpRLFVBQVU7WUFHVixpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycywgSHR0cFBhcmFtcyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEF1dGhDb25maWdTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vdXNlci1hdXRoL3NlcnZpY2VzL2F1dGgtY29uZmlnLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ2xpZW50VG9rZW4gfSBmcm9tICcuLi9tb2RlbHMvY2xpZW50LXRva2VuLm1vZGVsJztcblxuLyoqXG4gKiBSZXNwb25zaWJsZSBmb3IgcmVxdWVzdGluZyBmcm9tIE9BdXRoIHNlcnZlciBgQ2xpZW50VG9rZW5gIGZvciBhIHBhcnRpY3VsYXJcbiAqIGF1dGggY2xpZW50LlxuICovXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgQ2xpZW50QXV0aGVudGljYXRpb25Ub2tlblNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgaHR0cDogSHR0cENsaWVudCxcbiAgICBwcm90ZWN0ZWQgYXV0aENvbmZpZ1NlcnZpY2U6IEF1dGhDb25maWdTZXJ2aWNlXG4gICkge31cblxuICAvKipcbiAgICogTG9hZHMgdG9rZW4gd2l0aCBjbGllbnQgYXV0aGVudGljYXRpb24gZmxvdy5cbiAgICpcbiAgICogQHJldHVybnMgb2JzZXJ2YWJsZSB3aXRoIENsaWVudFRva2VuXG4gICAqL1xuICBsb2FkQ2xpZW50QXV0aGVudGljYXRpb25Ub2tlbigpOiBPYnNlcnZhYmxlPENsaWVudFRva2VuPiB7XG4gICAgY29uc3QgdXJsOiBzdHJpbmcgPSB0aGlzLmF1dGhDb25maWdTZXJ2aWNlLmdldFRva2VuRW5kcG9pbnQoKTtcbiAgICBjb25zdCBwYXJhbXMgPSBuZXcgSHR0cFBhcmFtcygpXG4gICAgICAuc2V0KFxuICAgICAgICAnY2xpZW50X2lkJyxcbiAgICAgICAgZW5jb2RlVVJJQ29tcG9uZW50KHRoaXMuYXV0aENvbmZpZ1NlcnZpY2UuZ2V0Q2xpZW50SWQoKSlcbiAgICAgIClcbiAgICAgIC5zZXQoXG4gICAgICAgICdjbGllbnRfc2VjcmV0JyxcbiAgICAgICAgZW5jb2RlVVJJQ29tcG9uZW50KHRoaXMuYXV0aENvbmZpZ1NlcnZpY2UuZ2V0Q2xpZW50U2VjcmV0KCkpXG4gICAgICApXG4gICAgICAuc2V0KCdncmFudF90eXBlJywgJ2NsaWVudF9jcmVkZW50aWFscycpO1xuXG4gICAgY29uc3QgaGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcsXG4gICAgfSk7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0PENsaWVudFRva2VuPih1cmwsIHBhcmFtcywgeyBoZWFkZXJzIH0pO1xuICB9XG59XG4iXX0=