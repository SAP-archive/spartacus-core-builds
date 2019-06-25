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
export class OpenIdTokenEffect {
    /**
     * @param {?} actions$
     * @param {?} openIdTokenService
     * @param {?} config
     */
    constructor(actions$, openIdTokenService, config) {
        this.actions$ = actions$;
        this.openIdTokenService = openIdTokenService;
        this.config = config;
        this.triggerOpenIdTokenLoading$ = iif((/**
         * @return {?}
         */
        () => this.config.authentication && this.config.authentication.kyma_enabled), this.actions$.pipe(ofType(AuthActions.LOAD_USER_TOKEN_SUCCESS), withLatestFrom(this.actions$.pipe(ofType(AuthActions.LOAD_USER_TOKEN))), map((/**
         * @param {?} __0
         * @return {?}
         */
        ([, loginAction]) => new fromActions.LoadOpenIdToken({
            username: loginAction.payload.userId,
            password: loginAction.payload.password,
        })))));
        this.loadOpenIdToken$ = this.actions$.pipe(ofType(fromActions.LOAD_OPEN_ID_TOKEN), map((/**
         * @param {?} action
         * @return {?}
         */
        (action) => action.payload)), exhaustMap((/**
         * @param {?} payload
         * @return {?}
         */
        payload => this.openIdTokenService
            .loadOpenIdAuthenticationToken(payload.username, payload.password)
            .pipe(map((/**
         * @param {?} token
         * @return {?}
         */
        token => new fromActions.LoadOpenIdTokenSuccess(token))), catchError((/**
         * @param {?} error
         * @return {?}
         */
        error => of(new fromActions.LoadOpenIdTokenFail(makeErrorSerializable(error)))))))));
    }
}
OpenIdTokenEffect.decorators = [
    { type: Injectable }
];
/** @nocollapse */
OpenIdTokenEffect.ctorParameters = () => [
    { type: Actions },
    { type: OpenIdAuthenticationTokenService },
    { type: KymaConfig }
];
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Observable)
], OpenIdTokenEffect.prototype, "triggerOpenIdTokenLoading$", void 0);
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Observable)
], OpenIdTokenEffect.prototype, "loadOpenIdToken$", void 0);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3Blbi1pZC10b2tlbi5lZmZlY3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMva3ltYS9zdG9yZS9lZmZlY3RzL29wZW4taWQtdG9rZW4uZWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEQsT0FBTyxFQUFFLEdBQUcsRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLEdBQUcsRUFBRSxjQUFjLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3RSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDaEUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDMUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBQ3RHLE9BQU8sS0FBSyxXQUFXLE1BQU0saUNBQWlDLENBQUM7QUFHL0QsTUFBTSxPQUFPLGlCQUFpQjs7Ozs7O0lBOEM1QixZQUNVLFFBQWlCLEVBQ2pCLGtCQUFvRCxFQUNwRCxNQUFrQjtRQUZsQixhQUFRLEdBQVIsUUFBUSxDQUFTO1FBQ2pCLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBa0M7UUFDcEQsV0FBTSxHQUFOLE1BQU0sQ0FBWTtRQS9DNUIsK0JBQTBCLEdBQTRDLEdBQUc7OztRQUl2RSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxZQUFZLEdBQzNFLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUNoQixNQUFNLENBQ0osV0FBVyxDQUFDLHVCQUF1QixDQUNwQyxFQUNELGNBQWMsQ0FDWixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDaEIsTUFBTSxDQUE0QixXQUFXLENBQUMsZUFBZSxDQUFDLENBQy9ELENBQ0YsRUFDRCxHQUFHOzs7O1FBQ0QsQ0FBQyxDQUFDLEVBQUUsV0FBVyxDQUFDLEVBQUUsRUFBRSxDQUNsQixJQUFJLFdBQVcsQ0FBQyxlQUFlLENBQUM7WUFDOUIsUUFBUSxFQUFFLFdBQVcsQ0FBQyxPQUFPLENBQUMsTUFBTTtZQUNwQyxRQUFRLEVBQUUsV0FBVyxDQUFDLE9BQU8sQ0FBQyxRQUFRO1NBQ3ZDLENBQUMsRUFDTCxDQUNGLENBQ0YsQ0FBQztRQUdGLHFCQUFnQixHQUVaLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUNwQixNQUFNLENBQUMsV0FBVyxDQUFDLGtCQUFrQixDQUFDLEVBQ3RDLEdBQUc7Ozs7UUFBQyxDQUFDLE1BQW1DLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUMsRUFDNUQsVUFBVTs7OztRQUFDLE9BQU8sQ0FBQyxFQUFFLENBQ25CLElBQUksQ0FBQyxrQkFBa0I7YUFDcEIsNkJBQTZCLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsUUFBUSxDQUFDO2FBQ2pFLElBQUksQ0FDSCxHQUFHOzs7O1FBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxJQUFJLFdBQVcsQ0FBQyxzQkFBc0IsQ0FBQyxLQUFLLENBQUMsRUFBQyxFQUMzRCxVQUFVOzs7O1FBQUMsS0FBSyxDQUFDLEVBQUUsQ0FDakIsRUFBRSxDQUNBLElBQUksV0FBVyxDQUFDLG1CQUFtQixDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQ2xFLEVBQ0YsQ0FDRixFQUNKLENBQ0YsQ0FBQztJQU1DLENBQUM7OztZQW5ETCxVQUFVOzs7O1lBVEYsT0FBTztZQU1QLGdDQUFnQztZQURoQyxVQUFVOztBQU9qQjtJQURDLE1BQU0sRUFBRTtzQ0FDbUIsVUFBVTtxRUFzQnBDO0FBR0Y7SUFEQyxNQUFNLEVBQUU7c0NBQ1MsVUFBVTsyREFpQjFCOzs7SUEzQ0YsdURBdUJFOztJQUVGLDZDQWtCRTs7Ozs7SUFHQSxxQ0FBeUI7Ozs7O0lBQ3pCLCtDQUE0RDs7Ozs7SUFDNUQsbUNBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0LCBvZlR5cGUgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcbmltcG9ydCB7IGlpZiwgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGNhdGNoRXJyb3IsIGV4aGF1c3RNYXAsIG1hcCwgd2l0aExhdGVzdEZyb20gfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBBdXRoQWN0aW9ucyB9IGZyb20gJy4uLy4uLy4uL2F1dGgvc3RvcmUvYWN0aW9ucy9pbmRleCc7XG5pbXBvcnQgeyBtYWtlRXJyb3JTZXJpYWxpemFibGUgfSBmcm9tICcuLi8uLi8uLi91dGlsL3NlcmlhbGl6YXRpb24tdXRpbHMnO1xuaW1wb3J0IHsgS3ltYUNvbmZpZyB9IGZyb20gJy4uLy4uL2NvbmZpZy9reW1hLWNvbmZpZyc7XG5pbXBvcnQgeyBPcGVuSWRBdXRoZW50aWNhdGlvblRva2VuU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL29wZW4taWQtdG9rZW4vb3Blbi1pZC10b2tlbi5zZXJ2aWNlJztcbmltcG9ydCAqIGFzIGZyb21BY3Rpb25zIGZyb20gJy4uL2FjdGlvbnMvb3Blbi1pZC10b2tlbi5hY3Rpb24nO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgT3BlbklkVG9rZW5FZmZlY3Qge1xuICBARWZmZWN0KClcbiAgdHJpZ2dlck9wZW5JZFRva2VuTG9hZGluZyQ6IE9ic2VydmFibGU8ZnJvbUFjdGlvbnMuTG9hZE9wZW5JZFRva2VuPiA9IGlpZjxcbiAgICBmcm9tQWN0aW9ucy5Mb2FkT3BlbklkVG9rZW4sXG4gICAgZnJvbUFjdGlvbnMuTG9hZE9wZW5JZFRva2VuXG4gID4oXG4gICAgKCkgPT4gdGhpcy5jb25maWcuYXV0aGVudGljYXRpb24gJiYgdGhpcy5jb25maWcuYXV0aGVudGljYXRpb24ua3ltYV9lbmFibGVkLFxuICAgIHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICAgIG9mVHlwZTxmcm9tQWN0aW9ucy5Mb2FkT3BlbklkVG9rZW5TdWNjZXNzPihcbiAgICAgICAgQXV0aEFjdGlvbnMuTE9BRF9VU0VSX1RPS0VOX1NVQ0NFU1NcbiAgICAgICksXG4gICAgICB3aXRoTGF0ZXN0RnJvbShcbiAgICAgICAgdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgICAgICAgIG9mVHlwZTxBdXRoQWN0aW9ucy5Mb2FkVXNlclRva2VuPihBdXRoQWN0aW9ucy5MT0FEX1VTRVJfVE9LRU4pXG4gICAgICAgIClcbiAgICAgICksXG4gICAgICBtYXAoXG4gICAgICAgIChbLCBsb2dpbkFjdGlvbl0pID0+XG4gICAgICAgICAgbmV3IGZyb21BY3Rpb25zLkxvYWRPcGVuSWRUb2tlbih7XG4gICAgICAgICAgICB1c2VybmFtZTogbG9naW5BY3Rpb24ucGF5bG9hZC51c2VySWQsXG4gICAgICAgICAgICBwYXNzd29yZDogbG9naW5BY3Rpb24ucGF5bG9hZC5wYXNzd29yZCxcbiAgICAgICAgICB9KVxuICAgICAgKVxuICAgIClcbiAgKTtcblxuICBARWZmZWN0KClcbiAgbG9hZE9wZW5JZFRva2VuJDogT2JzZXJ2YWJsZTxcbiAgICBmcm9tQWN0aW9ucy5PcGVuSWRUb2tlbkFjdGlvbnNcbiAgPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoZnJvbUFjdGlvbnMuTE9BRF9PUEVOX0lEX1RPS0VOKSxcbiAgICBtYXAoKGFjdGlvbjogZnJvbUFjdGlvbnMuTG9hZE9wZW5JZFRva2VuKSA9PiBhY3Rpb24ucGF5bG9hZCksXG4gICAgZXhoYXVzdE1hcChwYXlsb2FkID0+XG4gICAgICB0aGlzLm9wZW5JZFRva2VuU2VydmljZVxuICAgICAgICAubG9hZE9wZW5JZEF1dGhlbnRpY2F0aW9uVG9rZW4ocGF5bG9hZC51c2VybmFtZSwgcGF5bG9hZC5wYXNzd29yZClcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgbWFwKHRva2VuID0+IG5ldyBmcm9tQWN0aW9ucy5Mb2FkT3BlbklkVG9rZW5TdWNjZXNzKHRva2VuKSksXG4gICAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PlxuICAgICAgICAgICAgb2YoXG4gICAgICAgICAgICAgIG5ldyBmcm9tQWN0aW9ucy5Mb2FkT3BlbklkVG9rZW5GYWlsKG1ha2VFcnJvclNlcmlhbGl6YWJsZShlcnJvcikpXG4gICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgKVxuICApO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnMsXG4gICAgcHJpdmF0ZSBvcGVuSWRUb2tlblNlcnZpY2U6IE9wZW5JZEF1dGhlbnRpY2F0aW9uVG9rZW5TZXJ2aWNlLFxuICAgIHByaXZhdGUgY29uZmlnOiBLeW1hQ29uZmlnXG4gICkge31cbn1cbiJdfQ==