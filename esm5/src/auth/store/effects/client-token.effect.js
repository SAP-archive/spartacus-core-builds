/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import { makeErrorSerializable } from '../../../util/serialization-utils';
import { ClientAuthenticationTokenService } from '../../services/client-authentication/client-authentication-token.service';
import { AuthActions } from '../actions/index';
var ClientTokenEffect = /** @class */ (function () {
    function ClientTokenEffect(actions$, clientAuthenticationTokenService) {
        var _this = this;
        this.actions$ = actions$;
        this.clientAuthenticationTokenService = clientAuthenticationTokenService;
        this.loadClientToken$ = this.actions$.pipe(ofType(AuthActions.LOAD_CLIENT_TOKEN), exhaustMap((/**
         * @return {?}
         */
        function () {
            return _this.clientAuthenticationTokenService
                .loadClientAuthenticationToken()
                .pipe(map((/**
             * @param {?} token
             * @return {?}
             */
            function (token) {
                return new AuthActions.LoadClientTokenSuccess(token);
            })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                return of(new AuthActions.LoadClientTokenFail(makeErrorSerializable(error)));
            })));
        })));
    }
    ClientTokenEffect.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    ClientTokenEffect.ctorParameters = function () { return [
        { type: Actions },
        { type: ClientAuthenticationTokenService }
    ]; };
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Observable)
    ], ClientTokenEffect.prototype, "loadClientToken$", void 0);
    return ClientTokenEffect;
}());
export { ClientTokenEffect };
if (false) {
    /** @type {?} */
    ClientTokenEffect.prototype.loadClientToken$;
    /**
     * @type {?}
     * @private
     */
    ClientTokenEffect.prototype.actions$;
    /**
     * @type {?}
     * @private
     */
    ClientTokenEffect.prototype.clientAuthenticationTokenService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50LXRva2VuLmVmZmVjdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9hdXRoL3N0b3JlL2VmZmVjdHMvY2xpZW50LXRva2VuLmVmZmVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hELE9BQU8sRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBRTFFLE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLDBFQUEwRSxDQUFDO0FBQzVILE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUUvQztJQXVCRSwyQkFDVSxRQUFpQixFQUNqQixnQ0FBa0U7UUFGNUUsaUJBR0k7UUFGTSxhQUFRLEdBQVIsUUFBUSxDQUFTO1FBQ2pCLHFDQUFnQyxHQUFoQyxnQ0FBZ0MsQ0FBa0M7UUF0QjVFLHFCQUFnQixHQUVaLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUNwQixNQUFNLENBQUMsV0FBVyxDQUFDLGlCQUFpQixDQUFDLEVBQ3JDLFVBQVU7OztRQUFDO1lBQ1QsT0FBTyxLQUFJLENBQUMsZ0NBQWdDO2lCQUN6Qyw2QkFBNkIsRUFBRTtpQkFDL0IsSUFBSSxDQUNILEdBQUc7Ozs7WUFBQyxVQUFDLEtBQWtCO2dCQUNyQixPQUFPLElBQUksV0FBVyxDQUFDLHNCQUFzQixDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3ZELENBQUMsRUFBQyxFQUNGLFVBQVU7Ozs7WUFBQyxVQUFBLEtBQUs7Z0JBQ2QsT0FBQSxFQUFFLENBQ0EsSUFBSSxXQUFXLENBQUMsbUJBQW1CLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FDbEU7WUFGRCxDQUVDLEVBQ0YsQ0FDRixDQUFDO1FBQ04sQ0FBQyxFQUFDLENBQ0gsQ0FBQztJQUtDLENBQUM7O2dCQTFCTCxVQUFVOzs7O2dCQVJGLE9BQU87Z0JBS1AsZ0NBQWdDOztJQU12QztRQURDLE1BQU0sRUFBRTswQ0FDUyxVQUFVOytEQWtCMUI7SUFNSix3QkFBQztDQUFBLEFBM0JELElBMkJDO1NBMUJZLGlCQUFpQjs7O0lBQzVCLDZDQW1CRTs7Ozs7SUFHQSxxQ0FBeUI7Ozs7O0lBQ3pCLDZEQUEwRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCwgb2ZUeXBlIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgY2F0Y2hFcnJvciwgZXhoYXVzdE1hcCwgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgbWFrZUVycm9yU2VyaWFsaXphYmxlIH0gZnJvbSAnLi4vLi4vLi4vdXRpbC9zZXJpYWxpemF0aW9uLXV0aWxzJztcbmltcG9ydCB7IENsaWVudFRva2VuIH0gZnJvbSAnLi4vLi4vbW9kZWxzL3Rva2VuLXR5cGVzLm1vZGVsJztcbmltcG9ydCB7IENsaWVudEF1dGhlbnRpY2F0aW9uVG9rZW5TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvY2xpZW50LWF1dGhlbnRpY2F0aW9uL2NsaWVudC1hdXRoZW50aWNhdGlvbi10b2tlbi5zZXJ2aWNlJztcbmltcG9ydCB7IEF1dGhBY3Rpb25zIH0gZnJvbSAnLi4vYWN0aW9ucy9pbmRleCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDbGllbnRUb2tlbkVmZmVjdCB7XG4gIEBFZmZlY3QoKVxuICBsb2FkQ2xpZW50VG9rZW4kOiBPYnNlcnZhYmxlPFxuICAgIEF1dGhBY3Rpb25zLkNsaWVudFRva2VuQWN0aW9uXG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKEF1dGhBY3Rpb25zLkxPQURfQ0xJRU5UX1RPS0VOKSxcbiAgICBleGhhdXN0TWFwKCgpID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmNsaWVudEF1dGhlbnRpY2F0aW9uVG9rZW5TZXJ2aWNlXG4gICAgICAgIC5sb2FkQ2xpZW50QXV0aGVudGljYXRpb25Ub2tlbigpXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIG1hcCgodG9rZW46IENsaWVudFRva2VuKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IEF1dGhBY3Rpb25zLkxvYWRDbGllbnRUb2tlblN1Y2Nlc3ModG9rZW4pO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT5cbiAgICAgICAgICAgIG9mKFxuICAgICAgICAgICAgICBuZXcgQXV0aEFjdGlvbnMuTG9hZENsaWVudFRva2VuRmFpbChtYWtlRXJyb3JTZXJpYWxpemFibGUoZXJyb3IpKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICB9KVxuICApO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnMsXG4gICAgcHJpdmF0ZSBjbGllbnRBdXRoZW50aWNhdGlvblRva2VuU2VydmljZTogQ2xpZW50QXV0aGVudGljYXRpb25Ub2tlblNlcnZpY2VcbiAgKSB7fVxufVxuIl19