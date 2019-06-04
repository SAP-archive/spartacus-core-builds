/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { iif, Observable, of } from 'rxjs';
import { catchError, exhaustMap, map, withLatestFrom } from 'rxjs/operators';
import { LOAD_USER_TOKEN, LOAD_USER_TOKEN_SUCCESS, } from '../../../auth/store/actions/index';
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
        function () { return _this.config.authentication && _this.config.authentication.kyma_enabled; }), this.actions$.pipe(ofType(LOAD_USER_TOKEN_SUCCESS), withLatestFrom(this.actions$.pipe(ofType(LOAD_USER_TOKEN))), map((/**
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
            function (error) { return of(new fromActions.LoadOpenIdTokenFail(error)); })));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3Blbi1pZC10b2tlbi5lZmZlY3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMva3ltYS9zdG9yZS9lZmZlY3RzL29wZW4taWQtdG9rZW4uZWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEQsT0FBTyxFQUFFLEdBQUcsRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLEdBQUcsRUFBRSxjQUFjLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3RSxPQUFPLEVBRUwsZUFBZSxFQUNmLHVCQUF1QixHQUN4QixNQUFNLG1DQUFtQyxDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUN0RyxPQUFPLEtBQUssV0FBVyxNQUFNLGlDQUFpQyxDQUFDO0FBRS9EO0lBdUNFLDJCQUNVLFFBQWlCLEVBQ2pCLGtCQUFvRCxFQUNwRCxNQUFrQjtRQUg1QixpQkFJSTtRQUhNLGFBQVEsR0FBUixRQUFRLENBQVM7UUFDakIsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFrQztRQUNwRCxXQUFNLEdBQU4sTUFBTSxDQUFZO1FBdkM1QiwrQkFBMEIsR0FBNEMsR0FBRzs7O1FBSXZFLGNBQU0sT0FBQSxLQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsSUFBSSxLQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxZQUFZLEVBQXJFLENBQXFFLEdBQzNFLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUNoQixNQUFNLENBQXFDLHVCQUF1QixDQUFDLEVBQ25FLGNBQWMsQ0FDWixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQWdCLGVBQWUsQ0FBQyxDQUFDLENBQzNELEVBQ0QsR0FBRzs7OztRQUNELFVBQUMsRUFBZTtnQkFBZiwwQkFBZSxFQUFaLG1CQUFXO1lBQ2IsT0FBQSxJQUFJLFdBQVcsQ0FBQyxlQUFlLENBQUM7Z0JBQzlCLFFBQVEsRUFBRSxXQUFXLENBQUMsT0FBTyxDQUFDLE1BQU07Z0JBQ3BDLFFBQVEsRUFBRSxXQUFXLENBQUMsT0FBTyxDQUFDLFFBQVE7YUFDdkMsQ0FBQztRQUhGLENBR0UsRUFDTCxDQUNGLENBQ0YsQ0FBQztRQUdGLHFCQUFnQixHQUVaLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUNwQixNQUFNLENBQUMsV0FBVyxDQUFDLGtCQUFrQixDQUFDLEVBQ3RDLEdBQUc7Ozs7UUFBQyxVQUFDLE1BQW1DLElBQUssT0FBQSxNQUFNLENBQUMsT0FBTyxFQUFkLENBQWMsRUFBQyxFQUM1RCxVQUFVOzs7O1FBQUMsVUFBQSxPQUFPO1lBQ2hCLE9BQU8sS0FBSSxDQUFDLGtCQUFrQjtpQkFDM0IsNkJBQTZCLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsUUFBUSxDQUFDO2lCQUNqRSxJQUFJLENBQ0gsR0FBRzs7OztZQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsSUFBSSxXQUFXLENBQUMsc0JBQXNCLENBQUMsS0FBSyxDQUFDLEVBQTdDLENBQTZDLEVBQUMsRUFDM0QsVUFBVTs7OztZQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsRUFBRSxDQUFDLElBQUksV0FBVyxDQUFDLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQTlDLENBQThDLEVBQUMsQ0FDcEUsQ0FBQztRQUNOLENBQUMsRUFBQyxDQUNILENBQUM7SUFNQyxDQUFDOztnQkEzQ0wsVUFBVTs7OztnQkFaRixPQUFPO2dCQVNQLGdDQUFnQztnQkFEaEMsVUFBVTs7SUFPakI7UUFEQyxNQUFNLEVBQUU7MENBQ21CLFVBQVU7eUVBa0JwQztJQUdGO1FBREMsTUFBTSxFQUFFOzBDQUNTLFVBQVU7K0RBYTFCO0lBT0osd0JBQUM7Q0FBQSxBQTVDRCxJQTRDQztTQTNDWSxpQkFBaUI7OztJQUM1Qix1REFtQkU7O0lBRUYsNkNBY0U7Ozs7O0lBR0EscUNBQXlCOzs7OztJQUN6QiwrQ0FBNEQ7Ozs7O0lBQzVELG1DQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCwgb2ZUeXBlIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5pbXBvcnQgeyBpaWYsIE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBjYXRjaEVycm9yLCBleGhhdXN0TWFwLCBtYXAsIHdpdGhMYXRlc3RGcm9tIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHtcbiAgTG9hZFVzZXJUb2tlbixcbiAgTE9BRF9VU0VSX1RPS0VOLFxuICBMT0FEX1VTRVJfVE9LRU5fU1VDQ0VTUyxcbn0gZnJvbSAnLi4vLi4vLi4vYXV0aC9zdG9yZS9hY3Rpb25zL2luZGV4JztcbmltcG9ydCB7IEt5bWFDb25maWcgfSBmcm9tICcuLi8uLi9jb25maWcva3ltYS1jb25maWcnO1xuaW1wb3J0IHsgT3BlbklkQXV0aGVudGljYXRpb25Ub2tlblNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9vcGVuLWlkLXRva2VuL29wZW4taWQtdG9rZW4uc2VydmljZSc7XG5pbXBvcnQgKiBhcyBmcm9tQWN0aW9ucyBmcm9tICcuLi9hY3Rpb25zL29wZW4taWQtdG9rZW4uYWN0aW9uJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE9wZW5JZFRva2VuRWZmZWN0IHtcbiAgQEVmZmVjdCgpXG4gIHRyaWdnZXJPcGVuSWRUb2tlbkxvYWRpbmckOiBPYnNlcnZhYmxlPGZyb21BY3Rpb25zLkxvYWRPcGVuSWRUb2tlbj4gPSBpaWY8XG4gICAgZnJvbUFjdGlvbnMuTG9hZE9wZW5JZFRva2VuLFxuICAgIGZyb21BY3Rpb25zLkxvYWRPcGVuSWRUb2tlblxuICA+KFxuICAgICgpID0+IHRoaXMuY29uZmlnLmF1dGhlbnRpY2F0aW9uICYmIHRoaXMuY29uZmlnLmF1dGhlbnRpY2F0aW9uLmt5bWFfZW5hYmxlZCxcbiAgICB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgICBvZlR5cGU8ZnJvbUFjdGlvbnMuTG9hZE9wZW5JZFRva2VuU3VjY2Vzcz4oTE9BRF9VU0VSX1RPS0VOX1NVQ0NFU1MpLFxuICAgICAgd2l0aExhdGVzdEZyb20oXG4gICAgICAgIHRoaXMuYWN0aW9ucyQucGlwZShvZlR5cGU8TG9hZFVzZXJUb2tlbj4oTE9BRF9VU0VSX1RPS0VOKSlcbiAgICAgICksXG4gICAgICBtYXAoXG4gICAgICAgIChbLCBsb2dpbkFjdGlvbl0pID0+XG4gICAgICAgICAgbmV3IGZyb21BY3Rpb25zLkxvYWRPcGVuSWRUb2tlbih7XG4gICAgICAgICAgICB1c2VybmFtZTogbG9naW5BY3Rpb24ucGF5bG9hZC51c2VySWQsXG4gICAgICAgICAgICBwYXNzd29yZDogbG9naW5BY3Rpb24ucGF5bG9hZC5wYXNzd29yZCxcbiAgICAgICAgICB9KVxuICAgICAgKVxuICAgIClcbiAgKTtcblxuICBARWZmZWN0KClcbiAgbG9hZE9wZW5JZFRva2VuJDogT2JzZXJ2YWJsZTxcbiAgICBmcm9tQWN0aW9ucy5PcGVuSWRUb2tlbkFjdGlvbnNcbiAgPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoZnJvbUFjdGlvbnMuTE9BRF9PUEVOX0lEX1RPS0VOKSxcbiAgICBtYXAoKGFjdGlvbjogZnJvbUFjdGlvbnMuTG9hZE9wZW5JZFRva2VuKSA9PiBhY3Rpb24ucGF5bG9hZCksXG4gICAgZXhoYXVzdE1hcChwYXlsb2FkID0+IHtcbiAgICAgIHJldHVybiB0aGlzLm9wZW5JZFRva2VuU2VydmljZVxuICAgICAgICAubG9hZE9wZW5JZEF1dGhlbnRpY2F0aW9uVG9rZW4ocGF5bG9hZC51c2VybmFtZSwgcGF5bG9hZC5wYXNzd29yZClcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgbWFwKHRva2VuID0+IG5ldyBmcm9tQWN0aW9ucy5Mb2FkT3BlbklkVG9rZW5TdWNjZXNzKHRva2VuKSksXG4gICAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PiBvZihuZXcgZnJvbUFjdGlvbnMuTG9hZE9wZW5JZFRva2VuRmFpbChlcnJvcikpKVxuICAgICAgICApO1xuICAgIH0pXG4gICk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9ucyxcbiAgICBwcml2YXRlIG9wZW5JZFRva2VuU2VydmljZTogT3BlbklkQXV0aGVudGljYXRpb25Ub2tlblNlcnZpY2UsXG4gICAgcHJpdmF0ZSBjb25maWc6IEt5bWFDb25maWdcbiAgKSB7fVxufVxuIl19