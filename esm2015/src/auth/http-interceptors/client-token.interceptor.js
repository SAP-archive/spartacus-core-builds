/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { switchMap, take } from 'rxjs/operators';
import { AuthService } from '../facade/auth.service';
import { USE_CLIENT_TOKEN, InterceptorUtil, } from '../../occ/utils/interceptor-util';
import { OccEndpointsService } from '../../occ/services/occ-endpoints.service';
export class ClientTokenInterceptor {
    /**
     * @param {?} authService
     * @param {?} occEndpoints
     */
    constructor(authService, occEndpoints) {
        this.authService = authService;
        this.occEndpoints = occEndpoints;
    }
    /**
     * @param {?} request
     * @param {?} next
     * @return {?}
     */
    intercept(request, next) {
        return this.getClientToken(request).pipe(take(1), switchMap((/**
         * @param {?} token
         * @return {?}
         */
        (token) => {
            if (token &&
                request.url.includes(this.occEndpoints.getBaseEndpoint())) {
                request = request.clone({
                    setHeaders: {
                        Authorization: `${token.token_type} ${token.access_token}`,
                    },
                });
            }
            return next.handle(request);
        })));
    }
    /**
     * @private
     * @param {?} request
     * @return {?}
     */
    getClientToken(request) {
        if (InterceptorUtil.getInterceptorParam(USE_CLIENT_TOKEN, request.headers)) {
            return this.authService.getClientToken();
        }
        return of(null);
    }
}
ClientTokenInterceptor.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ClientTokenInterceptor.ctorParameters = () => [
    { type: AuthService },
    { type: OccEndpointsService }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50LXRva2VuLmludGVyY2VwdG9yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2F1dGgvaHR0cC1pbnRlcmNlcHRvcnMvY2xpZW50LXRva2VuLmludGVyY2VwdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBUTNDLE9BQU8sRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVqRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDckQsT0FBTyxFQUNMLGdCQUFnQixFQUNoQixlQUFlLEdBQ2hCLE1BQU0sa0NBQWtDLENBQUM7QUFFMUMsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFHL0UsTUFBTSxPQUFPLHNCQUFzQjs7Ozs7SUFDakMsWUFDVSxXQUF3QixFQUN4QixZQUFpQztRQURqQyxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixpQkFBWSxHQUFaLFlBQVksQ0FBcUI7SUFDeEMsQ0FBQzs7Ozs7O0lBRUosU0FBUyxDQUNQLE9BQXlCLEVBQ3pCLElBQWlCO1FBRWpCLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQ3RDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFDUCxTQUFTOzs7O1FBQUMsQ0FBQyxLQUFrQixFQUFFLEVBQUU7WUFDL0IsSUFDRSxLQUFLO2dCQUNMLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsZUFBZSxFQUFFLENBQUMsRUFDekQ7Z0JBQ0EsT0FBTyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUM7b0JBQ3RCLFVBQVUsRUFBRTt3QkFDVixhQUFhLEVBQUUsR0FBRyxLQUFLLENBQUMsVUFBVSxJQUFJLEtBQUssQ0FBQyxZQUFZLEVBQUU7cUJBQzNEO2lCQUNGLENBQUMsQ0FBQzthQUNKO1lBQ0QsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzlCLENBQUMsRUFBQyxDQUNILENBQUM7SUFDSixDQUFDOzs7Ozs7SUFFTyxjQUFjLENBQUMsT0FBeUI7UUFDOUMsSUFDRSxlQUFlLENBQUMsbUJBQW1CLENBQUMsZ0JBQWdCLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUN0RTtZQUNBLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxjQUFjLEVBQUUsQ0FBQztTQUMxQztRQUNELE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2xCLENBQUM7OztZQXBDRixVQUFVOzs7O1lBUkYsV0FBVztZQU1YLG1CQUFtQjs7Ozs7OztJQUt4Qiw2Q0FBZ0M7Ozs7O0lBQ2hDLDhDQUF5QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIEh0dHBJbnRlcmNlcHRvcixcbiAgSHR0cFJlcXVlc3QsXG4gIEh0dHBIYW5kbGVyLFxuICBIdHRwRXZlbnQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcblxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHN3aXRjaE1hcCwgdGFrZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuLi9mYWNhZGUvYXV0aC5zZXJ2aWNlJztcbmltcG9ydCB7XG4gIFVTRV9DTElFTlRfVE9LRU4sXG4gIEludGVyY2VwdG9yVXRpbCxcbn0gZnJvbSAnLi4vLi4vb2NjL3V0aWxzL2ludGVyY2VwdG9yLXV0aWwnO1xuaW1wb3J0IHsgQ2xpZW50VG9rZW4gfSBmcm9tICcuLi9tb2RlbHMvdG9rZW4tdHlwZXMubW9kZWwnO1xuaW1wb3J0IHsgT2NjRW5kcG9pbnRzU2VydmljZSB9IGZyb20gJy4uLy4uL29jYy9zZXJ2aWNlcy9vY2MtZW5kcG9pbnRzLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ2xpZW50VG9rZW5JbnRlcmNlcHRvciBpbXBsZW1lbnRzIEh0dHBJbnRlcmNlcHRvciB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLFxuICAgIHByaXZhdGUgb2NjRW5kcG9pbnRzOiBPY2NFbmRwb2ludHNTZXJ2aWNlXG4gICkge31cblxuICBpbnRlcmNlcHQoXG4gICAgcmVxdWVzdDogSHR0cFJlcXVlc3Q8YW55PixcbiAgICBuZXh0OiBIdHRwSGFuZGxlclxuICApOiBPYnNlcnZhYmxlPEh0dHBFdmVudDxhbnk+PiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Q2xpZW50VG9rZW4ocmVxdWVzdCkucGlwZShcbiAgICAgIHRha2UoMSksXG4gICAgICBzd2l0Y2hNYXAoKHRva2VuOiBDbGllbnRUb2tlbikgPT4ge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgdG9rZW4gJiZcbiAgICAgICAgICByZXF1ZXN0LnVybC5pbmNsdWRlcyh0aGlzLm9jY0VuZHBvaW50cy5nZXRCYXNlRW5kcG9pbnQoKSlcbiAgICAgICAgKSB7XG4gICAgICAgICAgcmVxdWVzdCA9IHJlcXVlc3QuY2xvbmUoe1xuICAgICAgICAgICAgc2V0SGVhZGVyczoge1xuICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgJHt0b2tlbi50b2tlbl90eXBlfSAke3Rva2VuLmFjY2Vzc190b2tlbn1gLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV4dC5oYW5kbGUocmVxdWVzdCk7XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGdldENsaWVudFRva2VuKHJlcXVlc3Q6IEh0dHBSZXF1ZXN0PGFueT4pOiBPYnNlcnZhYmxlPENsaWVudFRva2VuPiB7XG4gICAgaWYgKFxuICAgICAgSW50ZXJjZXB0b3JVdGlsLmdldEludGVyY2VwdG9yUGFyYW0oVVNFX0NMSUVOVF9UT0tFTiwgcmVxdWVzdC5oZWFkZXJzKVxuICAgICkge1xuICAgICAgcmV0dXJuIHRoaXMuYXV0aFNlcnZpY2UuZ2V0Q2xpZW50VG9rZW4oKTtcbiAgICB9XG4gICAgcmV0dXJuIG9mKG51bGwpO1xuICB9XG59XG4iXX0=