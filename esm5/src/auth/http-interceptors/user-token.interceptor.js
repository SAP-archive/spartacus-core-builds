/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { AuthService } from '../facade/auth.service';
import { OccEndpointsService } from '../../occ/services/occ-endpoints.service';
var UserTokenInterceptor = /** @class */ (function () {
    function UserTokenInterceptor(authService, occEndpoints) {
        var _this = this;
        this.authService = authService;
        this.occEndpoints = occEndpoints;
        this.authService.getUserToken().subscribe(function (token) {
            _this.userToken = token;
        });
    }
    /**
     * @param {?} request
     * @param {?} next
     * @return {?}
     */
    UserTokenInterceptor.prototype.intercept = /**
     * @param {?} request
     * @param {?} next
     * @return {?}
     */
    function (request, next) {
        if (this.userToken &&
            this.isOccUrl(request.url) &&
            !request.headers.get('Authorization')) {
            request = request.clone({
                setHeaders: {
                    Authorization: this.userToken.token_type + " " + this.userToken.access_token,
                },
            });
        }
        return next.handle(request);
    };
    /**
     * @private
     * @param {?} url
     * @return {?}
     */
    UserTokenInterceptor.prototype.isOccUrl = /**
     * @private
     * @param {?} url
     * @return {?}
     */
    function (url) {
        return url.indexOf(this.occEndpoints.getBaseEndpoint()) > -1;
    };
    UserTokenInterceptor.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    UserTokenInterceptor.ctorParameters = function () { return [
        { type: AuthService },
        { type: OccEndpointsService }
    ]; };
    return UserTokenInterceptor;
}());
export { UserTokenInterceptor };
if (false) {
    /** @type {?} */
    UserTokenInterceptor.prototype.userToken;
    /**
     * @type {?}
     * @private
     */
    UserTokenInterceptor.prototype.authService;
    /**
     * @type {?}
     * @private
     */
    UserTokenInterceptor.prototype.occEndpoints;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci10b2tlbi5pbnRlcmNlcHRvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9hdXRoL2h0dHAtaW50ZXJjZXB0b3JzL3VzZXItdG9rZW4uaW50ZXJjZXB0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFVM0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRXJELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBRS9FO0lBSUUsOEJBQ1UsV0FBd0IsRUFDeEIsWUFBaUM7UUFGM0MsaUJBT0M7UUFOUyxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixpQkFBWSxHQUFaLFlBQVksQ0FBcUI7UUFFekMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxTQUFTLENBQUMsVUFBQyxLQUFnQjtZQUN6RCxLQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUN6QixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7Ozs7OztJQUVELHdDQUFTOzs7OztJQUFULFVBQ0UsT0FBeUIsRUFDekIsSUFBaUI7UUFFakIsSUFDRSxJQUFJLENBQUMsU0FBUztZQUNkLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQztZQUMxQixDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxFQUNyQztZQUNBLE9BQU8sR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDO2dCQUN0QixVQUFVLEVBQUU7b0JBQ1YsYUFBYSxFQUFLLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxTQUN6QyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQ2Y7aUJBQ0g7YUFDRixDQUFDLENBQUM7U0FDSjtRQUVELE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM5QixDQUFDOzs7Ozs7SUFFTyx1Q0FBUTs7Ozs7SUFBaEIsVUFBaUIsR0FBVztRQUMxQixPQUFPLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxlQUFlLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQy9ELENBQUM7O2dCQXBDRixVQUFVOzs7O2dCQUpGLFdBQVc7Z0JBRVgsbUJBQW1COztJQXVDNUIsMkJBQUM7Q0FBQSxBQXJDRCxJQXFDQztTQXBDWSxvQkFBb0I7OztJQUMvQix5Q0FBcUI7Ozs7O0lBR25CLDJDQUFnQzs7Ozs7SUFDaEMsNENBQXlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgSHR0cEludGVyY2VwdG9yLFxuICBIdHRwSGFuZGxlcixcbiAgSHR0cEV2ZW50LFxuICBIdHRwUmVxdWVzdCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi4vZmFjYWRlL2F1dGguc2VydmljZSc7XG5pbXBvcnQgeyBVc2VyVG9rZW4gfSBmcm9tICcuLi8uLi9hdXRoL21vZGVscy90b2tlbi10eXBlcy5tb2RlbCc7XG5pbXBvcnQgeyBPY2NFbmRwb2ludHNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vb2NjL3NlcnZpY2VzL29jYy1lbmRwb2ludHMuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBVc2VyVG9rZW5JbnRlcmNlcHRvciBpbXBsZW1lbnRzIEh0dHBJbnRlcmNlcHRvciB7XG4gIHVzZXJUb2tlbjogVXNlclRva2VuO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLFxuICAgIHByaXZhdGUgb2NjRW5kcG9pbnRzOiBPY2NFbmRwb2ludHNTZXJ2aWNlXG4gICkge1xuICAgIHRoaXMuYXV0aFNlcnZpY2UuZ2V0VXNlclRva2VuKCkuc3Vic2NyaWJlKCh0b2tlbjogVXNlclRva2VuKSA9PiB7XG4gICAgICB0aGlzLnVzZXJUb2tlbiA9IHRva2VuO1xuICAgIH0pO1xuICB9XG5cbiAgaW50ZXJjZXB0KFxuICAgIHJlcXVlc3Q6IEh0dHBSZXF1ZXN0PGFueT4sXG4gICAgbmV4dDogSHR0cEhhbmRsZXJcbiAgKTogT2JzZXJ2YWJsZTxIdHRwRXZlbnQ8YW55Pj4ge1xuICAgIGlmIChcbiAgICAgIHRoaXMudXNlclRva2VuICYmXG4gICAgICB0aGlzLmlzT2NjVXJsKHJlcXVlc3QudXJsKSAmJlxuICAgICAgIXJlcXVlc3QuaGVhZGVycy5nZXQoJ0F1dGhvcml6YXRpb24nKVxuICAgICkge1xuICAgICAgcmVxdWVzdCA9IHJlcXVlc3QuY2xvbmUoe1xuICAgICAgICBzZXRIZWFkZXJzOiB7XG4gICAgICAgICAgQXV0aG9yaXphdGlvbjogYCR7dGhpcy51c2VyVG9rZW4udG9rZW5fdHlwZX0gJHtcbiAgICAgICAgICAgIHRoaXMudXNlclRva2VuLmFjY2Vzc190b2tlblxuICAgICAgICAgIH1gLFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5leHQuaGFuZGxlKHJlcXVlc3QpO1xuICB9XG5cbiAgcHJpdmF0ZSBpc09jY1VybCh1cmw6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB1cmwuaW5kZXhPZih0aGlzLm9jY0VuZHBvaW50cy5nZXRCYXNlRW5kcG9pbnQoKSkgPiAtMTtcbiAgfVxufVxuIl19