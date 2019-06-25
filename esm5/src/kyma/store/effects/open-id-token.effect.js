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
import * as fromActions from '../actions/open-id-token.action';
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
            return new fromActions.LoadOpenIdToken({
                username: loginAction.payload.userId,
                password: loginAction.payload.password,
            });
        }))));
        this.loadOpenIdToken$ = this.actions$.pipe(ofType(fromActions.LOAD_OPEN_ID_TOKEN), map((/**
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
            function (token) { return new fromActions.LoadOpenIdTokenSuccess(token); })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                return of(new fromActions.LoadOpenIdTokenFail(makeErrorSerializable(error)));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3Blbi1pZC10b2tlbi5lZmZlY3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMva3ltYS9zdG9yZS9lZmZlY3RzL29wZW4taWQtdG9rZW4uZWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEQsT0FBTyxFQUFFLEdBQUcsRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLEdBQUcsRUFBRSxjQUFjLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3RSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDaEUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDMUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBQ3RHLE9BQU8sS0FBSyxXQUFXLE1BQU0saUNBQWlDLENBQUM7QUFFL0Q7SUErQ0UsMkJBQ1UsUUFBaUIsRUFDakIsa0JBQW9ELEVBQ3BELE1BQWtCO1FBSDVCLGlCQUlJO1FBSE0sYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUNqQix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQWtDO1FBQ3BELFdBQU0sR0FBTixNQUFNLENBQVk7UUEvQzVCLCtCQUEwQixHQUE0QyxHQUFHOzs7UUFJdkUsY0FBTSxPQUFBLEtBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxJQUFJLEtBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLFlBQVksRUFBckUsQ0FBcUUsR0FDM0UsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ2hCLE1BQU0sQ0FDSixXQUFXLENBQUMsdUJBQXVCLENBQ3BDLEVBQ0QsY0FBYyxDQUNaLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUNoQixNQUFNLENBQTRCLFdBQVcsQ0FBQyxlQUFlLENBQUMsQ0FDL0QsQ0FDRixFQUNELEdBQUc7Ozs7UUFDRCxVQUFDLEVBQWU7Z0JBQWYsMEJBQWUsRUFBWixtQkFBVztZQUNiLE9BQUEsSUFBSSxXQUFXLENBQUMsZUFBZSxDQUFDO2dCQUM5QixRQUFRLEVBQUUsV0FBVyxDQUFDLE9BQU8sQ0FBQyxNQUFNO2dCQUNwQyxRQUFRLEVBQUUsV0FBVyxDQUFDLE9BQU8sQ0FBQyxRQUFRO2FBQ3ZDLENBQUM7UUFIRixDQUdFLEVBQ0wsQ0FDRixDQUNGLENBQUM7UUFHRixxQkFBZ0IsR0FFWixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDcEIsTUFBTSxDQUFDLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQyxFQUN0QyxHQUFHOzs7O1FBQUMsVUFBQyxNQUFtQyxJQUFLLE9BQUEsTUFBTSxDQUFDLE9BQU8sRUFBZCxDQUFjLEVBQUMsRUFDNUQsVUFBVTs7OztRQUFDLFVBQUEsT0FBTztZQUNoQixPQUFBLEtBQUksQ0FBQyxrQkFBa0I7aUJBQ3BCLDZCQUE2QixDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLFFBQVEsQ0FBQztpQkFDakUsSUFBSSxDQUNILEdBQUc7Ozs7WUFBQyxVQUFBLEtBQUssSUFBSSxPQUFBLElBQUksV0FBVyxDQUFDLHNCQUFzQixDQUFDLEtBQUssQ0FBQyxFQUE3QyxDQUE2QyxFQUFDLEVBQzNELFVBQVU7Ozs7WUFBQyxVQUFBLEtBQUs7Z0JBQ2QsT0FBQSxFQUFFLENBQ0EsSUFBSSxXQUFXLENBQUMsbUJBQW1CLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FDbEU7WUFGRCxDQUVDLEVBQ0YsQ0FDRjtRQVRILENBU0csRUFDSixDQUNGLENBQUM7SUFNQyxDQUFDOztnQkFuREwsVUFBVTs7OztnQkFURixPQUFPO2dCQU1QLGdDQUFnQztnQkFEaEMsVUFBVTs7SUFPakI7UUFEQyxNQUFNLEVBQUU7MENBQ21CLFVBQVU7eUVBc0JwQztJQUdGO1FBREMsTUFBTSxFQUFFOzBDQUNTLFVBQVU7K0RBaUIxQjtJQU9KLHdCQUFDO0NBQUEsQUFwREQsSUFvREM7U0FuRFksaUJBQWlCOzs7SUFDNUIsdURBdUJFOztJQUVGLDZDQWtCRTs7Ozs7SUFHQSxxQ0FBeUI7Ozs7O0lBQ3pCLCtDQUE0RDs7Ozs7SUFDNUQsbUNBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0LCBvZlR5cGUgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcbmltcG9ydCB7IGlpZiwgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGNhdGNoRXJyb3IsIGV4aGF1c3RNYXAsIG1hcCwgd2l0aExhdGVzdEZyb20gfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBBdXRoQWN0aW9ucyB9IGZyb20gJy4uLy4uLy4uL2F1dGgvc3RvcmUvYWN0aW9ucy9pbmRleCc7XG5pbXBvcnQgeyBtYWtlRXJyb3JTZXJpYWxpemFibGUgfSBmcm9tICcuLi8uLi8uLi91dGlsL3NlcmlhbGl6YXRpb24tdXRpbHMnO1xuaW1wb3J0IHsgS3ltYUNvbmZpZyB9IGZyb20gJy4uLy4uL2NvbmZpZy9reW1hLWNvbmZpZyc7XG5pbXBvcnQgeyBPcGVuSWRBdXRoZW50aWNhdGlvblRva2VuU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL29wZW4taWQtdG9rZW4vb3Blbi1pZC10b2tlbi5zZXJ2aWNlJztcbmltcG9ydCAqIGFzIGZyb21BY3Rpb25zIGZyb20gJy4uL2FjdGlvbnMvb3Blbi1pZC10b2tlbi5hY3Rpb24nO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgT3BlbklkVG9rZW5FZmZlY3Qge1xuICBARWZmZWN0KClcbiAgdHJpZ2dlck9wZW5JZFRva2VuTG9hZGluZyQ6IE9ic2VydmFibGU8ZnJvbUFjdGlvbnMuTG9hZE9wZW5JZFRva2VuPiA9IGlpZjxcbiAgICBmcm9tQWN0aW9ucy5Mb2FkT3BlbklkVG9rZW4sXG4gICAgZnJvbUFjdGlvbnMuTG9hZE9wZW5JZFRva2VuXG4gID4oXG4gICAgKCkgPT4gdGhpcy5jb25maWcuYXV0aGVudGljYXRpb24gJiYgdGhpcy5jb25maWcuYXV0aGVudGljYXRpb24ua3ltYV9lbmFibGVkLFxuICAgIHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICAgIG9mVHlwZTxmcm9tQWN0aW9ucy5Mb2FkT3BlbklkVG9rZW5TdWNjZXNzPihcbiAgICAgICAgQXV0aEFjdGlvbnMuTE9BRF9VU0VSX1RPS0VOX1NVQ0NFU1NcbiAgICAgICksXG4gICAgICB3aXRoTGF0ZXN0RnJvbShcbiAgICAgICAgdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgICAgICAgIG9mVHlwZTxBdXRoQWN0aW9ucy5Mb2FkVXNlclRva2VuPihBdXRoQWN0aW9ucy5MT0FEX1VTRVJfVE9LRU4pXG4gICAgICAgIClcbiAgICAgICksXG4gICAgICBtYXAoXG4gICAgICAgIChbLCBsb2dpbkFjdGlvbl0pID0+XG4gICAgICAgICAgbmV3IGZyb21BY3Rpb25zLkxvYWRPcGVuSWRUb2tlbih7XG4gICAgICAgICAgICB1c2VybmFtZTogbG9naW5BY3Rpb24ucGF5bG9hZC51c2VySWQsXG4gICAgICAgICAgICBwYXNzd29yZDogbG9naW5BY3Rpb24ucGF5bG9hZC5wYXNzd29yZCxcbiAgICAgICAgICB9KVxuICAgICAgKVxuICAgIClcbiAgKTtcblxuICBARWZmZWN0KClcbiAgbG9hZE9wZW5JZFRva2VuJDogT2JzZXJ2YWJsZTxcbiAgICBmcm9tQWN0aW9ucy5PcGVuSWRUb2tlbkFjdGlvbnNcbiAgPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoZnJvbUFjdGlvbnMuTE9BRF9PUEVOX0lEX1RPS0VOKSxcbiAgICBtYXAoKGFjdGlvbjogZnJvbUFjdGlvbnMuTG9hZE9wZW5JZFRva2VuKSA9PiBhY3Rpb24ucGF5bG9hZCksXG4gICAgZXhoYXVzdE1hcChwYXlsb2FkID0+XG4gICAgICB0aGlzLm9wZW5JZFRva2VuU2VydmljZVxuICAgICAgICAubG9hZE9wZW5JZEF1dGhlbnRpY2F0aW9uVG9rZW4ocGF5bG9hZC51c2VybmFtZSwgcGF5bG9hZC5wYXNzd29yZClcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgbWFwKHRva2VuID0+IG5ldyBmcm9tQWN0aW9ucy5Mb2FkT3BlbklkVG9rZW5TdWNjZXNzKHRva2VuKSksXG4gICAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PlxuICAgICAgICAgICAgb2YoXG4gICAgICAgICAgICAgIG5ldyBmcm9tQWN0aW9ucy5Mb2FkT3BlbklkVG9rZW5GYWlsKG1ha2VFcnJvclNlcmlhbGl6YWJsZShlcnJvcikpXG4gICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgKVxuICApO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnMsXG4gICAgcHJpdmF0ZSBvcGVuSWRUb2tlblNlcnZpY2U6IE9wZW5JZEF1dGhlbnRpY2F0aW9uVG9rZW5TZXJ2aWNlLFxuICAgIHByaXZhdGUgY29uZmlnOiBLeW1hQ29uZmlnXG4gICkge31cbn1cbiJdfQ==