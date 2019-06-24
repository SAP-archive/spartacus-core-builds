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
        () => this.config.authentication && this.config.authentication.kyma_enabled), this.actions$.pipe(ofType(LOAD_USER_TOKEN_SUCCESS), withLatestFrom(this.actions$.pipe(ofType(LOAD_USER_TOKEN))), map((/**
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3Blbi1pZC10b2tlbi5lZmZlY3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMva3ltYS9zdG9yZS9lZmZlY3RzL29wZW4taWQtdG9rZW4uZWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEQsT0FBTyxFQUFFLEdBQUcsRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLEdBQUcsRUFBRSxjQUFjLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3RSxPQUFPLEVBRUwsZUFBZSxFQUNmLHVCQUF1QixHQUN4QixNQUFNLG1DQUFtQyxDQUFDO0FBQzNDLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUN0RyxPQUFPLEtBQUssV0FBVyxNQUFNLGlDQUFpQyxDQUFDO0FBRy9ELE1BQU0sT0FBTyxpQkFBaUI7Ozs7OztJQTBDNUIsWUFDVSxRQUFpQixFQUNqQixrQkFBb0QsRUFDcEQsTUFBa0I7UUFGbEIsYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUNqQix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQWtDO1FBQ3BELFdBQU0sR0FBTixNQUFNLENBQVk7UUEzQzVCLCtCQUEwQixHQUE0QyxHQUFHOzs7UUFJdkUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsWUFBWSxHQUMzRSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDaEIsTUFBTSxDQUFxQyx1QkFBdUIsQ0FBQyxFQUNuRSxjQUFjLENBQ1osSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFnQixlQUFlLENBQUMsQ0FBQyxDQUMzRCxFQUNELEdBQUc7Ozs7UUFDRCxDQUFDLENBQUMsRUFBRSxXQUFXLENBQUMsRUFBRSxFQUFFLENBQ2xCLElBQUksV0FBVyxDQUFDLGVBQWUsQ0FBQztZQUM5QixRQUFRLEVBQUUsV0FBVyxDQUFDLE9BQU8sQ0FBQyxNQUFNO1lBQ3BDLFFBQVEsRUFBRSxXQUFXLENBQUMsT0FBTyxDQUFDLFFBQVE7U0FDdkMsQ0FBQyxFQUNMLENBQ0YsQ0FDRixDQUFDO1FBR0YscUJBQWdCLEdBRVosSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ3BCLE1BQU0sQ0FBQyxXQUFXLENBQUMsa0JBQWtCLENBQUMsRUFDdEMsR0FBRzs7OztRQUFDLENBQUMsTUFBbUMsRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBQyxFQUM1RCxVQUFVOzs7O1FBQUMsT0FBTyxDQUFDLEVBQUUsQ0FDbkIsSUFBSSxDQUFDLGtCQUFrQjthQUNwQiw2QkFBNkIsQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxRQUFRLENBQUM7YUFDakUsSUFBSSxDQUNILEdBQUc7Ozs7UUFBQyxLQUFLLENBQUMsRUFBRSxDQUFDLElBQUksV0FBVyxDQUFDLHNCQUFzQixDQUFDLEtBQUssQ0FBQyxFQUFDLEVBQzNELFVBQVU7Ozs7UUFBQyxLQUFLLENBQUMsRUFBRSxDQUNqQixFQUFFLENBQ0EsSUFBSSxXQUFXLENBQUMsbUJBQW1CLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FDbEUsRUFDRixDQUNGLEVBQ0osQ0FDRixDQUFDO0lBTUMsQ0FBQzs7O1lBL0NMLFVBQVU7Ozs7WUFiRixPQUFPO1lBVVAsZ0NBQWdDO1lBRGhDLFVBQVU7O0FBT2pCO0lBREMsTUFBTSxFQUFFO3NDQUNtQixVQUFVO3FFQWtCcEM7QUFHRjtJQURDLE1BQU0sRUFBRTtzQ0FDUyxVQUFVOzJEQWlCMUI7OztJQXZDRix1REFtQkU7O0lBRUYsNkNBa0JFOzs7OztJQUdBLHFDQUF5Qjs7Ozs7SUFDekIsK0NBQTREOzs7OztJQUM1RCxtQ0FBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QsIG9mVHlwZSB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuaW1wb3J0IHsgaWlmLCBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgY2F0Y2hFcnJvciwgZXhoYXVzdE1hcCwgbWFwLCB3aXRoTGF0ZXN0RnJvbSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7XG4gIExvYWRVc2VyVG9rZW4sXG4gIExPQURfVVNFUl9UT0tFTixcbiAgTE9BRF9VU0VSX1RPS0VOX1NVQ0NFU1MsXG59IGZyb20gJy4uLy4uLy4uL2F1dGgvc3RvcmUvYWN0aW9ucy9pbmRleCc7XG5pbXBvcnQgeyBtYWtlRXJyb3JTZXJpYWxpemFibGUgfSBmcm9tICcuLi8uLi8uLi91dGlsL3NlcmlhbGl6YXRpb24tdXRpbHMnO1xuaW1wb3J0IHsgS3ltYUNvbmZpZyB9IGZyb20gJy4uLy4uL2NvbmZpZy9reW1hLWNvbmZpZyc7XG5pbXBvcnQgeyBPcGVuSWRBdXRoZW50aWNhdGlvblRva2VuU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL29wZW4taWQtdG9rZW4vb3Blbi1pZC10b2tlbi5zZXJ2aWNlJztcbmltcG9ydCAqIGFzIGZyb21BY3Rpb25zIGZyb20gJy4uL2FjdGlvbnMvb3Blbi1pZC10b2tlbi5hY3Rpb24nO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgT3BlbklkVG9rZW5FZmZlY3Qge1xuICBARWZmZWN0KClcbiAgdHJpZ2dlck9wZW5JZFRva2VuTG9hZGluZyQ6IE9ic2VydmFibGU8ZnJvbUFjdGlvbnMuTG9hZE9wZW5JZFRva2VuPiA9IGlpZjxcbiAgICBmcm9tQWN0aW9ucy5Mb2FkT3BlbklkVG9rZW4sXG4gICAgZnJvbUFjdGlvbnMuTG9hZE9wZW5JZFRva2VuXG4gID4oXG4gICAgKCkgPT4gdGhpcy5jb25maWcuYXV0aGVudGljYXRpb24gJiYgdGhpcy5jb25maWcuYXV0aGVudGljYXRpb24ua3ltYV9lbmFibGVkLFxuICAgIHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICAgIG9mVHlwZTxmcm9tQWN0aW9ucy5Mb2FkT3BlbklkVG9rZW5TdWNjZXNzPihMT0FEX1VTRVJfVE9LRU5fU1VDQ0VTUyksXG4gICAgICB3aXRoTGF0ZXN0RnJvbShcbiAgICAgICAgdGhpcy5hY3Rpb25zJC5waXBlKG9mVHlwZTxMb2FkVXNlclRva2VuPihMT0FEX1VTRVJfVE9LRU4pKVxuICAgICAgKSxcbiAgICAgIG1hcChcbiAgICAgICAgKFssIGxvZ2luQWN0aW9uXSkgPT5cbiAgICAgICAgICBuZXcgZnJvbUFjdGlvbnMuTG9hZE9wZW5JZFRva2VuKHtcbiAgICAgICAgICAgIHVzZXJuYW1lOiBsb2dpbkFjdGlvbi5wYXlsb2FkLnVzZXJJZCxcbiAgICAgICAgICAgIHBhc3N3b3JkOiBsb2dpbkFjdGlvbi5wYXlsb2FkLnBhc3N3b3JkLFxuICAgICAgICAgIH0pXG4gICAgICApXG4gICAgKVxuICApO1xuXG4gIEBFZmZlY3QoKVxuICBsb2FkT3BlbklkVG9rZW4kOiBPYnNlcnZhYmxlPFxuICAgIGZyb21BY3Rpb25zLk9wZW5JZFRva2VuQWN0aW9uc1xuICA+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShmcm9tQWN0aW9ucy5MT0FEX09QRU5fSURfVE9LRU4pLFxuICAgIG1hcCgoYWN0aW9uOiBmcm9tQWN0aW9ucy5Mb2FkT3BlbklkVG9rZW4pID0+IGFjdGlvbi5wYXlsb2FkKSxcbiAgICBleGhhdXN0TWFwKHBheWxvYWQgPT5cbiAgICAgIHRoaXMub3BlbklkVG9rZW5TZXJ2aWNlXG4gICAgICAgIC5sb2FkT3BlbklkQXV0aGVudGljYXRpb25Ub2tlbihwYXlsb2FkLnVzZXJuYW1lLCBwYXlsb2FkLnBhc3N3b3JkKVxuICAgICAgICAucGlwZShcbiAgICAgICAgICBtYXAodG9rZW4gPT4gbmV3IGZyb21BY3Rpb25zLkxvYWRPcGVuSWRUb2tlblN1Y2Nlc3ModG9rZW4pKSxcbiAgICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+XG4gICAgICAgICAgICBvZihcbiAgICAgICAgICAgICAgbmV3IGZyb21BY3Rpb25zLkxvYWRPcGVuSWRUb2tlbkZhaWwobWFrZUVycm9yU2VyaWFsaXphYmxlKGVycm9yKSlcbiAgICAgICAgICAgIClcbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICApXG4gICk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9ucyxcbiAgICBwcml2YXRlIG9wZW5JZFRva2VuU2VydmljZTogT3BlbklkQXV0aGVudGljYXRpb25Ub2tlblNlcnZpY2UsXG4gICAgcHJpdmF0ZSBjb25maWc6IEt5bWFDb25maWdcbiAgKSB7fVxufVxuIl19