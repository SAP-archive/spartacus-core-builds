/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OccEndpointsService } from '../../../occ/services/occ-endpoints.service';
import { AuthConfig } from '../../config/auth-config';
var ClientAuthenticationTokenService = /** @class */ (function () {
    function ClientAuthenticationTokenService(config, http, occEndpointsService) {
        this.config = config;
        this.http = http;
        this.occEndpointsService = occEndpointsService;
    }
    /**
     * @return {?}
     */
    ClientAuthenticationTokenService.prototype.loadClientAuthenticationToken = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var url = this.occEndpointsService.getRawEndpoint('login');
        /** @type {?} */
        var params = new HttpParams()
            .set('client_id', encodeURIComponent(this.config.authentication.client_id))
            .set('client_secret', encodeURIComponent(this.config.authentication.client_secret))
            .set('grant_type', 'client_credentials');
        /** @type {?} */
        var headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
        });
        return this.http.post(url, params, { headers: headers });
    };
    ClientAuthenticationTokenService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    ClientAuthenticationTokenService.ctorParameters = function () { return [
        { type: AuthConfig },
        { type: HttpClient },
        { type: OccEndpointsService }
    ]; };
    return ClientAuthenticationTokenService;
}());
export { ClientAuthenticationTokenService };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    ClientAuthenticationTokenService.prototype.config;
    /**
     * @type {?}
     * @protected
     */
    ClientAuthenticationTokenService.prototype.http;
    /**
     * @type {?}
     * @protected
     */
    ClientAuthenticationTokenService.prototype.occEndpointsService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50LWF1dGhlbnRpY2F0aW9uLXRva2VuLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvYXV0aC9zZXJ2aWNlcy9jbGllbnQtYXV0aGVudGljYXRpb24vY2xpZW50LWF1dGhlbnRpY2F0aW9uLXRva2VuLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQzNFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDbEYsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBR3REO0lBY0UsMENBQ1ksTUFBa0IsRUFDbEIsSUFBZ0IsRUFDaEIsbUJBQXlDO1FBRnpDLFdBQU0sR0FBTixNQUFNLENBQVk7UUFDbEIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUNoQix3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXNCO0lBQ2xELENBQUM7Ozs7SUFFSix3RUFBNkI7OztJQUE3Qjs7WUFDUSxHQUFHLEdBQVcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUM7O1lBQzlELE1BQU0sR0FBRyxJQUFJLFVBQVUsRUFBRTthQUM1QixHQUFHLENBQ0YsV0FBVyxFQUNYLGtCQUFrQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUN6RDthQUNBLEdBQUcsQ0FDRixlQUFlLEVBQ2Ysa0JBQWtCLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLENBQzdEO2FBQ0EsR0FBRyxDQUFDLFlBQVksRUFBRSxvQkFBb0IsQ0FBQzs7WUFFcEMsT0FBTyxHQUFHLElBQUksV0FBVyxDQUFDO1lBQzlCLGNBQWMsRUFBRSxtQ0FBbUM7U0FDcEQsQ0FBQztRQUNGLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQWMsR0FBRyxFQUFFLE1BQU0sRUFBRSxFQUFFLE9BQU8sU0FBQSxFQUFFLENBQUMsQ0FBQztJQUMvRCxDQUFDOztnQkFyQ0YsVUFBVTs7OztnQkFIRixVQUFVO2dCQUpWLFVBQVU7Z0JBR1YsbUJBQW1COztJQTBDNUIsdUNBQUM7Q0FBQSxBQXRDRCxJQXNDQztTQXJDWSxnQ0FBZ0M7Ozs7OztJQWN6QyxrREFBNEI7Ozs7O0lBQzVCLGdEQUEwQjs7Ozs7SUFDMUIsK0RBQW1EIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMsIEh0dHBQYXJhbXMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBPY2NFbmRwb2ludHNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vb2NjL3NlcnZpY2VzL29jYy1lbmRwb2ludHMuc2VydmljZSc7XG5pbXBvcnQgeyBBdXRoQ29uZmlnIH0gZnJvbSAnLi4vLi4vY29uZmlnL2F1dGgtY29uZmlnJztcbmltcG9ydCB7IENsaWVudFRva2VuIH0gZnJvbSAnLi4vLi4vbW9kZWxzL3Rva2VuLXR5cGVzLm1vZGVsJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENsaWVudEF1dGhlbnRpY2F0aW9uVG9rZW5TZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgY29uZmlnOiBBdXRoQ29uZmlnLFxuICAgIGh0dHA6IEh0dHBDbGllbnQsXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnVuaWZpZWQtc2lnbmF0dXJlc1xuICAgIG9jY0VuZHBvaW50c1NlcnZpY2U6IE9jY0VuZHBvaW50c1NlcnZpY2VcbiAgKTtcblxuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgc2luY2UgdmVyc2lvbiAxLjFcbiAgICogVXNlIGNvbnN0cnVjdG9yKGh0dHA6IEh0dHBDbGllbnQsIGNvbmZpZzogQXV0aENvbmZpZywgb2NjRW5kcG9pbnRzU2VydmljZTogT2NjRW5kcG9pbnRzU2VydmljZSkgaW5zdGVhZFxuICAgKi9cbiAgY29uc3RydWN0b3IoY29uZmlnOiBBdXRoQ29uZmlnLCBodHRwOiBIdHRwQ2xpZW50KTtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGNvbmZpZzogQXV0aENvbmZpZyxcbiAgICBwcm90ZWN0ZWQgaHR0cDogSHR0cENsaWVudCxcbiAgICBwcm90ZWN0ZWQgb2NjRW5kcG9pbnRzU2VydmljZT86IE9jY0VuZHBvaW50c1NlcnZpY2VcbiAgKSB7fVxuXG4gIGxvYWRDbGllbnRBdXRoZW50aWNhdGlvblRva2VuKCk6IE9ic2VydmFibGU8Q2xpZW50VG9rZW4+IHtcbiAgICBjb25zdCB1cmw6IHN0cmluZyA9IHRoaXMub2NjRW5kcG9pbnRzU2VydmljZS5nZXRSYXdFbmRwb2ludCgnbG9naW4nKTtcbiAgICBjb25zdCBwYXJhbXMgPSBuZXcgSHR0cFBhcmFtcygpXG4gICAgICAuc2V0KFxuICAgICAgICAnY2xpZW50X2lkJyxcbiAgICAgICAgZW5jb2RlVVJJQ29tcG9uZW50KHRoaXMuY29uZmlnLmF1dGhlbnRpY2F0aW9uLmNsaWVudF9pZClcbiAgICAgIClcbiAgICAgIC5zZXQoXG4gICAgICAgICdjbGllbnRfc2VjcmV0JyxcbiAgICAgICAgZW5jb2RlVVJJQ29tcG9uZW50KHRoaXMuY29uZmlnLmF1dGhlbnRpY2F0aW9uLmNsaWVudF9zZWNyZXQpXG4gICAgICApXG4gICAgICAuc2V0KCdncmFudF90eXBlJywgJ2NsaWVudF9jcmVkZW50aWFscycpO1xuXG4gICAgY29uc3QgaGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcsXG4gICAgfSk7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0PENsaWVudFRva2VuPih1cmwsIHBhcmFtcywgeyBoZWFkZXJzIH0pO1xuICB9XG59XG4iXX0=