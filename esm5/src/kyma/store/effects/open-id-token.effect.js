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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3Blbi1pZC10b2tlbi5lZmZlY3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMva3ltYS9zdG9yZS9lZmZlY3RzL29wZW4taWQtdG9rZW4uZWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEQsT0FBTyxFQUFFLEdBQUcsRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLEdBQUcsRUFBRSxjQUFjLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3RSxPQUFPLEVBRUwsZUFBZSxFQUNmLHVCQUF1QixHQUN4QixNQUFNLG1DQUFtQyxDQUFDO0FBQzNDLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUN0RyxPQUFPLEtBQUssV0FBVyxNQUFNLGlDQUFpQyxDQUFDO0FBRS9EO0lBMkNFLDJCQUNVLFFBQWlCLEVBQ2pCLGtCQUFvRCxFQUNwRCxNQUFrQjtRQUg1QixpQkFJSTtRQUhNLGFBQVEsR0FBUixRQUFRLENBQVM7UUFDakIsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFrQztRQUNwRCxXQUFNLEdBQU4sTUFBTSxDQUFZO1FBM0M1QiwrQkFBMEIsR0FBNEMsR0FBRzs7O1FBSXZFLGNBQU0sT0FBQSxLQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsSUFBSSxLQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxZQUFZLEVBQXJFLENBQXFFLEdBQzNFLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUNoQixNQUFNLENBQXFDLHVCQUF1QixDQUFDLEVBQ25FLGNBQWMsQ0FDWixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQWdCLGVBQWUsQ0FBQyxDQUFDLENBQzNELEVBQ0QsR0FBRzs7OztRQUNELFVBQUMsRUFBZTtnQkFBZiwwQkFBZSxFQUFaLG1CQUFXO1lBQ2IsT0FBQSxJQUFJLFdBQVcsQ0FBQyxlQUFlLENBQUM7Z0JBQzlCLFFBQVEsRUFBRSxXQUFXLENBQUMsT0FBTyxDQUFDLE1BQU07Z0JBQ3BDLFFBQVEsRUFBRSxXQUFXLENBQUMsT0FBTyxDQUFDLFFBQVE7YUFDdkMsQ0FBQztRQUhGLENBR0UsRUFDTCxDQUNGLENBQ0YsQ0FBQztRQUdGLHFCQUFnQixHQUVaLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUNwQixNQUFNLENBQUMsV0FBVyxDQUFDLGtCQUFrQixDQUFDLEVBQ3RDLEdBQUc7Ozs7UUFBQyxVQUFDLE1BQW1DLElBQUssT0FBQSxNQUFNLENBQUMsT0FBTyxFQUFkLENBQWMsRUFBQyxFQUM1RCxVQUFVOzs7O1FBQUMsVUFBQSxPQUFPO1lBQ2hCLE9BQUEsS0FBSSxDQUFDLGtCQUFrQjtpQkFDcEIsNkJBQTZCLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsUUFBUSxDQUFDO2lCQUNqRSxJQUFJLENBQ0gsR0FBRzs7OztZQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsSUFBSSxXQUFXLENBQUMsc0JBQXNCLENBQUMsS0FBSyxDQUFDLEVBQTdDLENBQTZDLEVBQUMsRUFDM0QsVUFBVTs7OztZQUFDLFVBQUEsS0FBSztnQkFDZCxPQUFBLEVBQUUsQ0FDQSxJQUFJLFdBQVcsQ0FBQyxtQkFBbUIsQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUNsRTtZQUZELENBRUMsRUFDRixDQUNGO1FBVEgsQ0FTRyxFQUNKLENBQ0YsQ0FBQztJQU1DLENBQUM7O2dCQS9DTCxVQUFVOzs7O2dCQWJGLE9BQU87Z0JBVVAsZ0NBQWdDO2dCQURoQyxVQUFVOztJQU9qQjtRQURDLE1BQU0sRUFBRTswQ0FDbUIsVUFBVTt5RUFrQnBDO0lBR0Y7UUFEQyxNQUFNLEVBQUU7MENBQ1MsVUFBVTsrREFpQjFCO0lBT0osd0JBQUM7Q0FBQSxBQWhERCxJQWdEQztTQS9DWSxpQkFBaUI7OztJQUM1Qix1REFtQkU7O0lBRUYsNkNBa0JFOzs7OztJQUdBLHFDQUF5Qjs7Ozs7SUFDekIsK0NBQTREOzs7OztJQUM1RCxtQ0FBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QsIG9mVHlwZSB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuaW1wb3J0IHsgaWlmLCBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgY2F0Y2hFcnJvciwgZXhoYXVzdE1hcCwgbWFwLCB3aXRoTGF0ZXN0RnJvbSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7XG4gIExvYWRVc2VyVG9rZW4sXG4gIExPQURfVVNFUl9UT0tFTixcbiAgTE9BRF9VU0VSX1RPS0VOX1NVQ0NFU1MsXG59IGZyb20gJy4uLy4uLy4uL2F1dGgvc3RvcmUvYWN0aW9ucy9pbmRleCc7XG5pbXBvcnQgeyBtYWtlRXJyb3JTZXJpYWxpemFibGUgfSBmcm9tICcuLi8uLi8uLi91dGlsL3NlcmlhbGl6YXRpb24tdXRpbHMnO1xuaW1wb3J0IHsgS3ltYUNvbmZpZyB9IGZyb20gJy4uLy4uL2NvbmZpZy9reW1hLWNvbmZpZyc7XG5pbXBvcnQgeyBPcGVuSWRBdXRoZW50aWNhdGlvblRva2VuU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL29wZW4taWQtdG9rZW4vb3Blbi1pZC10b2tlbi5zZXJ2aWNlJztcbmltcG9ydCAqIGFzIGZyb21BY3Rpb25zIGZyb20gJy4uL2FjdGlvbnMvb3Blbi1pZC10b2tlbi5hY3Rpb24nO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgT3BlbklkVG9rZW5FZmZlY3Qge1xuICBARWZmZWN0KClcbiAgdHJpZ2dlck9wZW5JZFRva2VuTG9hZGluZyQ6IE9ic2VydmFibGU8ZnJvbUFjdGlvbnMuTG9hZE9wZW5JZFRva2VuPiA9IGlpZjxcbiAgICBmcm9tQWN0aW9ucy5Mb2FkT3BlbklkVG9rZW4sXG4gICAgZnJvbUFjdGlvbnMuTG9hZE9wZW5JZFRva2VuXG4gID4oXG4gICAgKCkgPT4gdGhpcy5jb25maWcuYXV0aGVudGljYXRpb24gJiYgdGhpcy5jb25maWcuYXV0aGVudGljYXRpb24ua3ltYV9lbmFibGVkLFxuICAgIHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICAgIG9mVHlwZTxmcm9tQWN0aW9ucy5Mb2FkT3BlbklkVG9rZW5TdWNjZXNzPihMT0FEX1VTRVJfVE9LRU5fU1VDQ0VTUyksXG4gICAgICB3aXRoTGF0ZXN0RnJvbShcbiAgICAgICAgdGhpcy5hY3Rpb25zJC5waXBlKG9mVHlwZTxMb2FkVXNlclRva2VuPihMT0FEX1VTRVJfVE9LRU4pKVxuICAgICAgKSxcbiAgICAgIG1hcChcbiAgICAgICAgKFssIGxvZ2luQWN0aW9uXSkgPT5cbiAgICAgICAgICBuZXcgZnJvbUFjdGlvbnMuTG9hZE9wZW5JZFRva2VuKHtcbiAgICAgICAgICAgIHVzZXJuYW1lOiBsb2dpbkFjdGlvbi5wYXlsb2FkLnVzZXJJZCxcbiAgICAgICAgICAgIHBhc3N3b3JkOiBsb2dpbkFjdGlvbi5wYXlsb2FkLnBhc3N3b3JkLFxuICAgICAgICAgIH0pXG4gICAgICApXG4gICAgKVxuICApO1xuXG4gIEBFZmZlY3QoKVxuICBsb2FkT3BlbklkVG9rZW4kOiBPYnNlcnZhYmxlPFxuICAgIGZyb21BY3Rpb25zLk9wZW5JZFRva2VuQWN0aW9uc1xuICA+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShmcm9tQWN0aW9ucy5MT0FEX09QRU5fSURfVE9LRU4pLFxuICAgIG1hcCgoYWN0aW9uOiBmcm9tQWN0aW9ucy5Mb2FkT3BlbklkVG9rZW4pID0+IGFjdGlvbi5wYXlsb2FkKSxcbiAgICBleGhhdXN0TWFwKHBheWxvYWQgPT5cbiAgICAgIHRoaXMub3BlbklkVG9rZW5TZXJ2aWNlXG4gICAgICAgIC5sb2FkT3BlbklkQXV0aGVudGljYXRpb25Ub2tlbihwYXlsb2FkLnVzZXJuYW1lLCBwYXlsb2FkLnBhc3N3b3JkKVxuICAgICAgICAucGlwZShcbiAgICAgICAgICBtYXAodG9rZW4gPT4gbmV3IGZyb21BY3Rpb25zLkxvYWRPcGVuSWRUb2tlblN1Y2Nlc3ModG9rZW4pKSxcbiAgICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+XG4gICAgICAgICAgICBvZihcbiAgICAgICAgICAgICAgbmV3IGZyb21BY3Rpb25zLkxvYWRPcGVuSWRUb2tlbkZhaWwobWFrZUVycm9yU2VyaWFsaXphYmxlKGVycm9yKSlcbiAgICAgICAgICAgIClcbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICApXG4gICk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9ucyxcbiAgICBwcml2YXRlIG9wZW5JZFRva2VuU2VydmljZTogT3BlbklkQXV0aGVudGljYXRpb25Ub2tlblNlcnZpY2UsXG4gICAgcHJpdmF0ZSBjb25maWc6IEt5bWFDb25maWdcbiAgKSB7fVxufVxuIl19