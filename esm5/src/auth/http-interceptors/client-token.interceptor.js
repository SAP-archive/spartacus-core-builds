/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { switchMap, take } from 'rxjs/operators';
import { AuthService } from '../facade/auth.service';
import { USE_CLIENT_TOKEN, InterceptorUtil, } from '../../occ/utils/interceptor-util';
import { OccEndpointsService } from '../../occ/services/occ-endpoints.service';
var ClientTokenInterceptor = /** @class */ (function () {
    function ClientTokenInterceptor(authService, occEndpoints) {
        this.authService = authService;
        this.occEndpoints = occEndpoints;
    }
    /**
     * @param {?} request
     * @param {?} next
     * @return {?}
     */
    ClientTokenInterceptor.prototype.intercept = /**
     * @param {?} request
     * @param {?} next
     * @return {?}
     */
    function (request, next) {
        var _this = this;
        return this.getClientToken(request).pipe(take(1), switchMap(function (token) {
            if (token &&
                request.url.indexOf(_this.occEndpoints.getBaseEndpoint()) > -1) {
                request = request.clone({
                    setHeaders: {
                        Authorization: token.token_type + " " + token.access_token,
                    },
                });
            }
            return next.handle(request);
        }));
    };
    /**
     * @private
     * @param {?} request
     * @return {?}
     */
    ClientTokenInterceptor.prototype.getClientToken = /**
     * @private
     * @param {?} request
     * @return {?}
     */
    function (request) {
        if (InterceptorUtil.getInterceptorParam(USE_CLIENT_TOKEN, request.headers)) {
            return this.authService.getClientToken();
        }
        return of(null);
    };
    ClientTokenInterceptor.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    ClientTokenInterceptor.ctorParameters = function () { return [
        { type: AuthService },
        { type: OccEndpointsService }
    ]; };
    return ClientTokenInterceptor;
}());
export { ClientTokenInterceptor };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ClientTokenInterceptor.prototype.authService;
    /**
     * @type {?}
     * @private
     */
    ClientTokenInterceptor.prototype.occEndpoints;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50LXRva2VuLmludGVyY2VwdG9yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2F1dGgvaHR0cC1pbnRlcmNlcHRvcnMvY2xpZW50LXRva2VuLmludGVyY2VwdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBUTNDLE9BQU8sRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVqRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDckQsT0FBTyxFQUNMLGdCQUFnQixFQUNoQixlQUFlLEdBQ2hCLE1BQU0sa0NBQWtDLENBQUM7QUFFMUMsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFFL0U7SUFFRSxnQ0FDVSxXQUF3QixFQUN4QixZQUFpQztRQURqQyxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixpQkFBWSxHQUFaLFlBQVksQ0FBcUI7SUFDeEMsQ0FBQzs7Ozs7O0lBRUosMENBQVM7Ozs7O0lBQVQsVUFDRSxPQUF5QixFQUN6QixJQUFpQjtRQUZuQixpQkFvQkM7UUFoQkMsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FDdEMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUNQLFNBQVMsQ0FBQyxVQUFDLEtBQWtCO1lBQzNCLElBQ0UsS0FBSztnQkFDTCxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxLQUFJLENBQUMsWUFBWSxDQUFDLGVBQWUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQzdEO2dCQUNBLE9BQU8sR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDO29CQUN0QixVQUFVLEVBQUU7d0JBQ1YsYUFBYSxFQUFLLEtBQUssQ0FBQyxVQUFVLFNBQUksS0FBSyxDQUFDLFlBQWM7cUJBQzNEO2lCQUNGLENBQUMsQ0FBQzthQUNKO1lBQ0QsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzlCLENBQUMsQ0FBQyxDQUNILENBQUM7SUFDSixDQUFDOzs7Ozs7SUFFTywrQ0FBYzs7Ozs7SUFBdEIsVUFBdUIsT0FBeUI7UUFDOUMsSUFDRSxlQUFlLENBQUMsbUJBQW1CLENBQUMsZ0JBQWdCLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUN0RTtZQUNBLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxjQUFjLEVBQUUsQ0FBQztTQUMxQztRQUNELE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2xCLENBQUM7O2dCQXBDRixVQUFVOzs7O2dCQVJGLFdBQVc7Z0JBTVgsbUJBQW1COztJQXVDNUIsNkJBQUM7Q0FBQSxBQXJDRCxJQXFDQztTQXBDWSxzQkFBc0I7Ozs7OztJQUUvQiw2Q0FBZ0M7Ozs7O0lBQ2hDLDhDQUF5QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIEh0dHBJbnRlcmNlcHRvcixcbiAgSHR0cFJlcXVlc3QsXG4gIEh0dHBIYW5kbGVyLFxuICBIdHRwRXZlbnQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcblxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHN3aXRjaE1hcCwgdGFrZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuLi9mYWNhZGUvYXV0aC5zZXJ2aWNlJztcbmltcG9ydCB7XG4gIFVTRV9DTElFTlRfVE9LRU4sXG4gIEludGVyY2VwdG9yVXRpbCxcbn0gZnJvbSAnLi4vLi4vb2NjL3V0aWxzL2ludGVyY2VwdG9yLXV0aWwnO1xuaW1wb3J0IHsgQ2xpZW50VG9rZW4gfSBmcm9tICcuLi9tb2RlbHMvdG9rZW4tdHlwZXMubW9kZWwnO1xuaW1wb3J0IHsgT2NjRW5kcG9pbnRzU2VydmljZSB9IGZyb20gJy4uLy4uL29jYy9zZXJ2aWNlcy9vY2MtZW5kcG9pbnRzLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ2xpZW50VG9rZW5JbnRlcmNlcHRvciBpbXBsZW1lbnRzIEh0dHBJbnRlcmNlcHRvciB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLFxuICAgIHByaXZhdGUgb2NjRW5kcG9pbnRzOiBPY2NFbmRwb2ludHNTZXJ2aWNlXG4gICkge31cblxuICBpbnRlcmNlcHQoXG4gICAgcmVxdWVzdDogSHR0cFJlcXVlc3Q8YW55PixcbiAgICBuZXh0OiBIdHRwSGFuZGxlclxuICApOiBPYnNlcnZhYmxlPEh0dHBFdmVudDxhbnk+PiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Q2xpZW50VG9rZW4ocmVxdWVzdCkucGlwZShcbiAgICAgIHRha2UoMSksXG4gICAgICBzd2l0Y2hNYXAoKHRva2VuOiBDbGllbnRUb2tlbikgPT4ge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgdG9rZW4gJiZcbiAgICAgICAgICByZXF1ZXN0LnVybC5pbmRleE9mKHRoaXMub2NjRW5kcG9pbnRzLmdldEJhc2VFbmRwb2ludCgpKSA+IC0xXG4gICAgICAgICkge1xuICAgICAgICAgIHJlcXVlc3QgPSByZXF1ZXN0LmNsb25lKHtcbiAgICAgICAgICAgIHNldEhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYCR7dG9rZW4udG9rZW5fdHlwZX0gJHt0b2tlbi5hY2Nlc3NfdG9rZW59YCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5leHQuaGFuZGxlKHJlcXVlc3QpO1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRDbGllbnRUb2tlbihyZXF1ZXN0OiBIdHRwUmVxdWVzdDxhbnk+KTogT2JzZXJ2YWJsZTxDbGllbnRUb2tlbj4ge1xuICAgIGlmIChcbiAgICAgIEludGVyY2VwdG9yVXRpbC5nZXRJbnRlcmNlcHRvclBhcmFtKFVTRV9DTElFTlRfVE9LRU4sIHJlcXVlc3QuaGVhZGVycylcbiAgICApIHtcbiAgICAgIHJldHVybiB0aGlzLmF1dGhTZXJ2aWNlLmdldENsaWVudFRva2VuKCk7XG4gICAgfVxuICAgIHJldHVybiBvZihudWxsKTtcbiAgfVxufVxuIl19