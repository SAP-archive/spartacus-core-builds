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
var UserTokenInterceptor = /** @class */ (function () {
    function UserTokenInterceptor(authService, occEndpoints) {
        this.authService = authService;
        this.occEndpoints = occEndpoints;
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
        var _this = this;
        return this.authService.getUserToken().pipe(take(1), switchMap((/**
         * @param {?} token
         * @return {?}
         */
        function (token) {
            if (token &&
                _this.isOccUrl(request.url) &&
                !request.headers.get('Authorization')) {
                request = request.clone({
                    setHeaders: {
                        Authorization: token.token_type + " " + token.access_token,
                    },
                });
            }
            return next.handle(request);
        })));
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
        return url.includes(this.occEndpoints.getBaseEndpoint());
    };
    UserTokenInterceptor.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    UserTokenInterceptor.ctorParameters = function () { return [
        { type: AuthService },
        { type: OccEndpointsService }
    ]; };
    /** @nocollapse */ UserTokenInterceptor.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function UserTokenInterceptor_Factory() { return new UserTokenInterceptor(i0.ɵɵinject(i1.AuthService), i0.ɵɵinject(i2.OccEndpointsService)); }, token: UserTokenInterceptor, providedIn: "root" });
    return UserTokenInterceptor;
}());
export { UserTokenInterceptor };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci10b2tlbi5pbnRlcmNlcHRvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9hdXRoL2h0dHAtaW50ZXJjZXB0b3JzL3VzZXItdG9rZW4uaW50ZXJjZXB0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQU1BLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUMvRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7Ozs7QUFFckQ7SUFFRSw4QkFDVSxXQUF3QixFQUN4QixZQUFpQztRQURqQyxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixpQkFBWSxHQUFaLFlBQVksQ0FBcUI7SUFDeEMsQ0FBQzs7Ozs7O0lBRUosd0NBQVM7Ozs7O0lBQVQsVUFDRSxPQUF5QixFQUN6QixJQUFpQjtRQUZuQixpQkFzQkM7UUFsQkMsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksRUFBRSxDQUFDLElBQUksQ0FDekMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUNQLFNBQVM7Ozs7UUFBQyxVQUFBLEtBQUs7WUFDYixJQUNFLEtBQUs7Z0JBQ0wsS0FBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDO2dCQUMxQixDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxFQUNyQztnQkFDQSxPQUFPLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQztvQkFDdEIsVUFBVSxFQUFFO3dCQUNWLGFBQWEsRUFBSyxLQUFLLENBQUMsVUFBVSxTQUFJLEtBQUssQ0FBQyxZQUFjO3FCQUMzRDtpQkFDRixDQUFDLENBQUM7YUFDSjtZQUVELE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM5QixDQUFDLEVBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQzs7Ozs7O0lBRU8sdUNBQVE7Ozs7O0lBQWhCLFVBQWlCLEdBQVc7UUFDMUIsT0FBTyxHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FBQztJQUMzRCxDQUFDOztnQkFqQ0YsVUFBVSxTQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRTs7OztnQkFGekIsV0FBVztnQkFEWCxtQkFBbUI7OzsrQkFUNUI7Q0E4Q0MsQUFsQ0QsSUFrQ0M7U0FqQ1ksb0JBQW9COzs7Ozs7SUFFN0IsMkNBQWdDOzs7OztJQUNoQyw0Q0FBeUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBIdHRwRXZlbnQsXG4gIEh0dHBIYW5kbGVyLFxuICBIdHRwSW50ZXJjZXB0b3IsXG4gIEh0dHBSZXF1ZXN0LFxufSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBzd2l0Y2hNYXAsIHRha2UgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBPY2NFbmRwb2ludHNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vb2NjL3NlcnZpY2VzL29jYy1lbmRwb2ludHMuc2VydmljZSc7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4uL2ZhY2FkZS9hdXRoLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIFVzZXJUb2tlbkludGVyY2VwdG9yIGltcGxlbWVudHMgSHR0cEludGVyY2VwdG9yIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBvY2NFbmRwb2ludHM6IE9jY0VuZHBvaW50c1NlcnZpY2VcbiAgKSB7fVxuXG4gIGludGVyY2VwdChcbiAgICByZXF1ZXN0OiBIdHRwUmVxdWVzdDxhbnk+LFxuICAgIG5leHQ6IEh0dHBIYW5kbGVyXG4gICk6IE9ic2VydmFibGU8SHR0cEV2ZW50PGFueT4+IHtcbiAgICByZXR1cm4gdGhpcy5hdXRoU2VydmljZS5nZXRVc2VyVG9rZW4oKS5waXBlKFxuICAgICAgdGFrZSgxKSxcbiAgICAgIHN3aXRjaE1hcCh0b2tlbiA9PiB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICB0b2tlbiAmJlxuICAgICAgICAgIHRoaXMuaXNPY2NVcmwocmVxdWVzdC51cmwpICYmXG4gICAgICAgICAgIXJlcXVlc3QuaGVhZGVycy5nZXQoJ0F1dGhvcml6YXRpb24nKVxuICAgICAgICApIHtcbiAgICAgICAgICByZXF1ZXN0ID0gcmVxdWVzdC5jbG9uZSh7XG4gICAgICAgICAgICBzZXRIZWFkZXJzOiB7XG4gICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGAke3Rva2VuLnRva2VuX3R5cGV9ICR7dG9rZW4uYWNjZXNzX3Rva2VufWAsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5leHQuaGFuZGxlKHJlcXVlc3QpO1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBpc09jY1VybCh1cmw6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB1cmwuaW5jbHVkZXModGhpcy5vY2NFbmRwb2ludHMuZ2V0QmFzZUVuZHBvaW50KCkpO1xuICB9XG59XG4iXX0=