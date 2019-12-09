/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { switchMap, take } from 'rxjs/operators';
import { OccEndpointsService } from '../../occ/services/occ-endpoints.service';
import { AuthService } from '../facade/auth.service';
import * as i0 from "@angular/core";
import * as i1 from "../facade/auth.service";
import * as i2 from "../../occ/services/occ-endpoints.service";
export class UserTokenInterceptor {
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
        return this.authService.getUserToken().pipe(take(1), switchMap((/**
         * @param {?} token
         * @return {?}
         */
        token => {
            if (token &&
                this.isOccUrl(request.url) &&
                !request.headers.get('Authorization')) {
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
     * @param {?} url
     * @return {?}
     */
    isOccUrl(url) {
        return url.includes(this.occEndpoints.getBaseEndpoint());
    }
}
UserTokenInterceptor.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
UserTokenInterceptor.ctorParameters = () => [
    { type: AuthService },
    { type: OccEndpointsService }
];
/** @nocollapse */ UserTokenInterceptor.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function UserTokenInterceptor_Factory() { return new UserTokenInterceptor(i0.ɵɵinject(i1.AuthService), i0.ɵɵinject(i2.OccEndpointsService)); }, token: UserTokenInterceptor, providedIn: "root" });
if (false) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci10b2tlbi5pbnRlcmNlcHRvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9hdXRoL2h0dHAtaW50ZXJjZXB0b3JzL3VzZXItdG9rZW4uaW50ZXJjZXB0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQU1BLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUMvRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7Ozs7QUFHckQsTUFBTSxPQUFPLG9CQUFvQjs7Ozs7SUFDL0IsWUFDVSxXQUF3QixFQUN4QixZQUFpQztRQURqQyxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixpQkFBWSxHQUFaLFlBQVksQ0FBcUI7SUFDeEMsQ0FBQzs7Ozs7O0lBRUosU0FBUyxDQUNQLE9BQXlCLEVBQ3pCLElBQWlCO1FBRWpCLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxJQUFJLENBQ3pDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFDUCxTQUFTOzs7O1FBQUMsS0FBSyxDQUFDLEVBQUU7WUFDaEIsSUFDRSxLQUFLO2dCQUNMLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQztnQkFDMUIsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsRUFDckM7Z0JBQ0EsT0FBTyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUM7b0JBQ3RCLFVBQVUsRUFBRTt3QkFDVixhQUFhLEVBQUUsR0FBRyxLQUFLLENBQUMsVUFBVSxJQUFJLEtBQUssQ0FBQyxZQUFZLEVBQUU7cUJBQzNEO2lCQUNGLENBQUMsQ0FBQzthQUNKO1lBRUQsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzlCLENBQUMsRUFBQyxDQUNILENBQUM7SUFDSixDQUFDOzs7Ozs7SUFFTyxRQUFRLENBQUMsR0FBVztRQUMxQixPQUFPLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxlQUFlLEVBQUUsQ0FBQyxDQUFDO0lBQzNELENBQUM7OztZQWpDRixVQUFVLFNBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFOzs7O1lBRnpCLFdBQVc7WUFEWCxtQkFBbUI7Ozs7Ozs7O0lBTXhCLDJDQUFnQzs7Ozs7SUFDaEMsNENBQXlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgSHR0cEV2ZW50LFxuICBIdHRwSGFuZGxlcixcbiAgSHR0cEludGVyY2VwdG9yLFxuICBIdHRwUmVxdWVzdCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgc3dpdGNoTWFwLCB0YWtlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgT2NjRW5kcG9pbnRzU2VydmljZSB9IGZyb20gJy4uLy4uL29jYy9zZXJ2aWNlcy9vY2MtZW5kcG9pbnRzLnNlcnZpY2UnO1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuLi9mYWNhZGUvYXV0aC5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBVc2VyVG9rZW5JbnRlcmNlcHRvciBpbXBsZW1lbnRzIEh0dHBJbnRlcmNlcHRvciB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLFxuICAgIHByaXZhdGUgb2NjRW5kcG9pbnRzOiBPY2NFbmRwb2ludHNTZXJ2aWNlXG4gICkge31cblxuICBpbnRlcmNlcHQoXG4gICAgcmVxdWVzdDogSHR0cFJlcXVlc3Q8YW55PixcbiAgICBuZXh0OiBIdHRwSGFuZGxlclxuICApOiBPYnNlcnZhYmxlPEh0dHBFdmVudDxhbnk+PiB7XG4gICAgcmV0dXJuIHRoaXMuYXV0aFNlcnZpY2UuZ2V0VXNlclRva2VuKCkucGlwZShcbiAgICAgIHRha2UoMSksXG4gICAgICBzd2l0Y2hNYXAodG9rZW4gPT4ge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgdG9rZW4gJiZcbiAgICAgICAgICB0aGlzLmlzT2NjVXJsKHJlcXVlc3QudXJsKSAmJlxuICAgICAgICAgICFyZXF1ZXN0LmhlYWRlcnMuZ2V0KCdBdXRob3JpemF0aW9uJylcbiAgICAgICAgKSB7XG4gICAgICAgICAgcmVxdWVzdCA9IHJlcXVlc3QuY2xvbmUoe1xuICAgICAgICAgICAgc2V0SGVhZGVyczoge1xuICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgJHt0b2tlbi50b2tlbl90eXBlfSAke3Rva2VuLmFjY2Vzc190b2tlbn1gLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBuZXh0LmhhbmRsZShyZXF1ZXN0KTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgaXNPY2NVcmwodXJsOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdXJsLmluY2x1ZGVzKHRoaXMub2NjRW5kcG9pbnRzLmdldEJhc2VFbmRwb2ludCgpKTtcbiAgfVxufVxuIl19