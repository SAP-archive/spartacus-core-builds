/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { iif, Observable, of } from 'rxjs';
import { catchError, exhaustMap, map, withLatestFrom } from 'rxjs/operators';
import { AuthActions } from '../../../auth/store/actions/index';
import { makeErrorSerializable } from '../../../util/serialization-utils';
import { KymaConfig } from '../../config/kyma-config';
import { OpenIdAuthenticationTokenService } from '../../services/open-id-token/open-id-token.service';
import { KymaActions } from '../actions/index';
var OpenIdTokenEffect = /** @class */ (function () {
    function OpenIdTokenEffect(actions$, openIdTokenService, config) {
        var _this = this;
        this.actions$ = actions$;
        this.openIdTokenService = openIdTokenService;
        this.config = config;
        this.triggerOpenIdTokenLoading$ = iif((/**
         * @return {?}
         */
        function () { return _this.config.authentication && _this.config.authentication.kyma_enabled; }), this.actions$.pipe(ofType(AuthActions.LOAD_USER_TOKEN_SUCCESS), withLatestFrom(this.actions$.pipe(ofType(AuthActions.LOAD_USER_TOKEN))), map((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = tslib_1.__read(_a, 2), loginAction = _b[1];
            return new KymaActions.LoadOpenIdToken({
                username: loginAction.payload.userId,
                password: loginAction.payload.password,
            });
        }))));
        this.loadOpenIdToken$ = this.actions$.pipe(ofType(KymaActions.LOAD_OPEN_ID_TOKEN), map((/**
         * @param {?} action
         * @return {?}
         */
        function (action) { return action.payload; })), exhaustMap((/**
         * @param {?} payload
         * @return {?}
         */
        function (payload) {
            return _this.openIdTokenService
                .loadOpenIdAuthenticationToken(payload.username, payload.password)
                .pipe(map((/**
             * @param {?} token
             * @return {?}
             */
            function (token) { return new KymaActions.LoadOpenIdTokenSuccess(token); })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                return of(new KymaActions.LoadOpenIdTokenFail(makeErrorSerializable(error)));
            })));
        })));
    }
    OpenIdTokenEffect.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    OpenIdTokenEffect.ctorParameters = function () { return [
        { type: Actions },
        { type: OpenIdAuthenticationTokenService },
        { type: KymaConfig }
    ]; };
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Observable)
    ], OpenIdTokenEffect.prototype, "triggerOpenIdTokenLoading$", void 0);
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Observable)
    ], OpenIdTokenEffect.prototype, "loadOpenIdToken$", void 0);
    return OpenIdTokenEffect;
}());
export { OpenIdTokenEffect };
if (false) {
    /** @type {?} */
    OpenIdTokenEffect.prototype.triggerOpenIdTokenLoading$;
    /** @type {?} */
    OpenIdTokenEffect.prototype.loadOpenIdToken$;
    /**
     * @type {?}
     * @private
     */
    OpenIdTokenEffect.prototype.actions$;
    /**
     * @type {?}
     * @private
     */
    OpenIdTokenEffect.prototype.openIdTokenService;
    /**
     * @type {?}
     * @private
     */
    OpenIdTokenEffect.prototype.config;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3Blbi1pZC10b2tlbi5lZmZlY3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMva3ltYS9zdG9yZS9lZmZlY3RzL29wZW4taWQtdG9rZW4uZWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEQsT0FBTyxFQUFFLEdBQUcsRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLEdBQUcsRUFBRSxjQUFjLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3RSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDaEUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDMUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBQ3RHLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUUvQztJQStDRSwyQkFDVSxRQUFpQixFQUNqQixrQkFBb0QsRUFDcEQsTUFBa0I7UUFINUIsaUJBSUk7UUFITSxhQUFRLEdBQVIsUUFBUSxDQUFTO1FBQ2pCLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBa0M7UUFDcEQsV0FBTSxHQUFOLE1BQU0sQ0FBWTtRQS9DNUIsK0JBQTBCLEdBQTRDLEdBQUc7OztRQUl2RSxjQUFNLE9BQUEsS0FBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLElBQUksS0FBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsWUFBWSxFQUFyRSxDQUFxRSxHQUMzRSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDaEIsTUFBTSxDQUNKLFdBQVcsQ0FBQyx1QkFBdUIsQ0FDcEMsRUFDRCxjQUFjLENBQ1osSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ2hCLE1BQU0sQ0FBNEIsV0FBVyxDQUFDLGVBQWUsQ0FBQyxDQUMvRCxDQUNGLEVBQ0QsR0FBRzs7OztRQUNELFVBQUMsRUFBZTtnQkFBZiwwQkFBZSxFQUFaLG1CQUFXO1lBQ2IsT0FBQSxJQUFJLFdBQVcsQ0FBQyxlQUFlLENBQUM7Z0JBQzlCLFFBQVEsRUFBRSxXQUFXLENBQUMsT0FBTyxDQUFDLE1BQU07Z0JBQ3BDLFFBQVEsRUFBRSxXQUFXLENBQUMsT0FBTyxDQUFDLFFBQVE7YUFDdkMsQ0FBQztRQUhGLENBR0UsRUFDTCxDQUNGLENBQ0YsQ0FBQztRQUdGLHFCQUFnQixHQUVaLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUNwQixNQUFNLENBQUMsV0FBVyxDQUFDLGtCQUFrQixDQUFDLEVBQ3RDLEdBQUc7Ozs7UUFBQyxVQUFDLE1BQW1DLElBQUssT0FBQSxNQUFNLENBQUMsT0FBTyxFQUFkLENBQWMsRUFBQyxFQUM1RCxVQUFVOzs7O1FBQUMsVUFBQSxPQUFPO1lBQ2hCLE9BQUEsS0FBSSxDQUFDLGtCQUFrQjtpQkFDcEIsNkJBQTZCLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsUUFBUSxDQUFDO2lCQUNqRSxJQUFJLENBQ0gsR0FBRzs7OztZQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsSUFBSSxXQUFXLENBQUMsc0JBQXNCLENBQUMsS0FBSyxDQUFDLEVBQTdDLENBQTZDLEVBQUMsRUFDM0QsVUFBVTs7OztZQUFDLFVBQUEsS0FBSztnQkFDZCxPQUFBLEVBQUUsQ0FDQSxJQUFJLFdBQVcsQ0FBQyxtQkFBbUIsQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUNsRTtZQUZELENBRUMsRUFDRixDQUNGO1FBVEgsQ0FTRyxFQUNKLENBQ0YsQ0FBQztJQU1DLENBQUM7O2dCQW5ETCxVQUFVOzs7O2dCQVRGLE9BQU87Z0JBTVAsZ0NBQWdDO2dCQURoQyxVQUFVOztJQU9qQjtRQURDLE1BQU0sRUFBRTswQ0FDbUIsVUFBVTt5RUFzQnBDO0lBR0Y7UUFEQyxNQUFNLEVBQUU7MENBQ1MsVUFBVTsrREFpQjFCO0lBT0osd0JBQUM7Q0FBQSxBQXBERCxJQW9EQztTQW5EWSxpQkFBaUI7OztJQUM1Qix1REF1QkU7O0lBRUYsNkNBa0JFOzs7OztJQUdBLHFDQUF5Qjs7Ozs7SUFDekIsK0NBQTREOzs7OztJQUM1RCxtQ0FBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QsIG9mVHlwZSB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuaW1wb3J0IHsgaWlmLCBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgY2F0Y2hFcnJvciwgZXhoYXVzdE1hcCwgbWFwLCB3aXRoTGF0ZXN0RnJvbSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEF1dGhBY3Rpb25zIH0gZnJvbSAnLi4vLi4vLi4vYXV0aC9zdG9yZS9hY3Rpb25zL2luZGV4JztcbmltcG9ydCB7IG1ha2VFcnJvclNlcmlhbGl6YWJsZSB9IGZyb20gJy4uLy4uLy4uL3V0aWwvc2VyaWFsaXphdGlvbi11dGlscyc7XG5pbXBvcnQgeyBLeW1hQ29uZmlnIH0gZnJvbSAnLi4vLi4vY29uZmlnL2t5bWEtY29uZmlnJztcbmltcG9ydCB7IE9wZW5JZEF1dGhlbnRpY2F0aW9uVG9rZW5TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvb3Blbi1pZC10b2tlbi9vcGVuLWlkLXRva2VuLnNlcnZpY2UnO1xuaW1wb3J0IHsgS3ltYUFjdGlvbnMgfSBmcm9tICcuLi9hY3Rpb25zL2luZGV4JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE9wZW5JZFRva2VuRWZmZWN0IHtcbiAgQEVmZmVjdCgpXG4gIHRyaWdnZXJPcGVuSWRUb2tlbkxvYWRpbmckOiBPYnNlcnZhYmxlPEt5bWFBY3Rpb25zLkxvYWRPcGVuSWRUb2tlbj4gPSBpaWY8XG4gICAgS3ltYUFjdGlvbnMuTG9hZE9wZW5JZFRva2VuLFxuICAgIEt5bWFBY3Rpb25zLkxvYWRPcGVuSWRUb2tlblxuICA+KFxuICAgICgpID0+IHRoaXMuY29uZmlnLmF1dGhlbnRpY2F0aW9uICYmIHRoaXMuY29uZmlnLmF1dGhlbnRpY2F0aW9uLmt5bWFfZW5hYmxlZCxcbiAgICB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgICBvZlR5cGU8S3ltYUFjdGlvbnMuTG9hZE9wZW5JZFRva2VuU3VjY2Vzcz4oXG4gICAgICAgIEF1dGhBY3Rpb25zLkxPQURfVVNFUl9UT0tFTl9TVUNDRVNTXG4gICAgICApLFxuICAgICAgd2l0aExhdGVzdEZyb20oXG4gICAgICAgIHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICAgICAgICBvZlR5cGU8QXV0aEFjdGlvbnMuTG9hZFVzZXJUb2tlbj4oQXV0aEFjdGlvbnMuTE9BRF9VU0VSX1RPS0VOKVxuICAgICAgICApXG4gICAgICApLFxuICAgICAgbWFwKFxuICAgICAgICAoWywgbG9naW5BY3Rpb25dKSA9PlxuICAgICAgICAgIG5ldyBLeW1hQWN0aW9ucy5Mb2FkT3BlbklkVG9rZW4oe1xuICAgICAgICAgICAgdXNlcm5hbWU6IGxvZ2luQWN0aW9uLnBheWxvYWQudXNlcklkLFxuICAgICAgICAgICAgcGFzc3dvcmQ6IGxvZ2luQWN0aW9uLnBheWxvYWQucGFzc3dvcmQsXG4gICAgICAgICAgfSlcbiAgICAgIClcbiAgICApXG4gICk7XG5cbiAgQEVmZmVjdCgpXG4gIGxvYWRPcGVuSWRUb2tlbiQ6IE9ic2VydmFibGU8XG4gICAgS3ltYUFjdGlvbnMuT3BlbklkVG9rZW5BY3Rpb25zXG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKEt5bWFBY3Rpb25zLkxPQURfT1BFTl9JRF9UT0tFTiksXG4gICAgbWFwKChhY3Rpb246IEt5bWFBY3Rpb25zLkxvYWRPcGVuSWRUb2tlbikgPT4gYWN0aW9uLnBheWxvYWQpLFxuICAgIGV4aGF1c3RNYXAocGF5bG9hZCA9PlxuICAgICAgdGhpcy5vcGVuSWRUb2tlblNlcnZpY2VcbiAgICAgICAgLmxvYWRPcGVuSWRBdXRoZW50aWNhdGlvblRva2VuKHBheWxvYWQudXNlcm5hbWUsIHBheWxvYWQucGFzc3dvcmQpXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIG1hcCh0b2tlbiA9PiBuZXcgS3ltYUFjdGlvbnMuTG9hZE9wZW5JZFRva2VuU3VjY2Vzcyh0b2tlbikpLFxuICAgICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT5cbiAgICAgICAgICAgIG9mKFxuICAgICAgICAgICAgICBuZXcgS3ltYUFjdGlvbnMuTG9hZE9wZW5JZFRva2VuRmFpbChtYWtlRXJyb3JTZXJpYWxpemFibGUoZXJyb3IpKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgIClcbiAgKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zLFxuICAgIHByaXZhdGUgb3BlbklkVG9rZW5TZXJ2aWNlOiBPcGVuSWRBdXRoZW50aWNhdGlvblRva2VuU2VydmljZSxcbiAgICBwcml2YXRlIGNvbmZpZzogS3ltYUNvbmZpZ1xuICApIHt9XG59XG4iXX0=