/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        ([, loginAction]) => new KymaActions.LoadOpenIdToken({
            username: loginAction.payload.userId,
            password: loginAction.payload.password,
        })))));
        this.loadOpenIdToken$ = this.actions$.pipe(ofType(KymaActions.LOAD_OPEN_ID_TOKEN), map((/**
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
        token => new KymaActions.LoadOpenIdTokenSuccess(token))), catchError((/**
         * @param {?} error
         * @return {?}
         */
        error => of(new KymaActions.LoadOpenIdTokenFail(makeErrorSerializable(error)))))))));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3Blbi1pZC10b2tlbi5lZmZlY3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMva3ltYS9zdG9yZS9lZmZlY3RzL29wZW4taWQtdG9rZW4uZWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEQsT0FBTyxFQUFFLEdBQUcsRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLEdBQUcsRUFBRSxjQUFjLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3RSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDaEUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDMUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBQ3RHLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUcvQyxNQUFNLE9BQU8saUJBQWlCOzs7Ozs7SUE4QzVCLFlBQ1UsUUFBaUIsRUFDakIsa0JBQW9ELEVBQ3BELE1BQWtCO1FBRmxCLGFBQVEsR0FBUixRQUFRLENBQVM7UUFDakIsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFrQztRQUNwRCxXQUFNLEdBQU4sTUFBTSxDQUFZO1FBL0M1QiwrQkFBMEIsR0FBNEMsR0FBRzs7O1FBSXZFLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLFlBQVksR0FDM0UsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ2hCLE1BQU0sQ0FDSixXQUFXLENBQUMsdUJBQXVCLENBQ3BDLEVBQ0QsY0FBYyxDQUNaLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUNoQixNQUFNLENBQTRCLFdBQVcsQ0FBQyxlQUFlLENBQUMsQ0FDL0QsQ0FDRixFQUNELEdBQUc7Ozs7UUFDRCxDQUFDLENBQUMsRUFBRSxXQUFXLENBQUMsRUFBRSxFQUFFLENBQ2xCLElBQUksV0FBVyxDQUFDLGVBQWUsQ0FBQztZQUM5QixRQUFRLEVBQUUsV0FBVyxDQUFDLE9BQU8sQ0FBQyxNQUFNO1lBQ3BDLFFBQVEsRUFBRSxXQUFXLENBQUMsT0FBTyxDQUFDLFFBQVE7U0FDdkMsQ0FBQyxFQUNMLENBQ0YsQ0FDRixDQUFDO1FBR0YscUJBQWdCLEdBRVosSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ3BCLE1BQU0sQ0FBQyxXQUFXLENBQUMsa0JBQWtCLENBQUMsRUFDdEMsR0FBRzs7OztRQUFDLENBQUMsTUFBbUMsRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBQyxFQUM1RCxVQUFVOzs7O1FBQUMsT0FBTyxDQUFDLEVBQUUsQ0FDbkIsSUFBSSxDQUFDLGtCQUFrQjthQUNwQiw2QkFBNkIsQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxRQUFRLENBQUM7YUFDakUsSUFBSSxDQUNILEdBQUc7Ozs7UUFBQyxLQUFLLENBQUMsRUFBRSxDQUFDLElBQUksV0FBVyxDQUFDLHNCQUFzQixDQUFDLEtBQUssQ0FBQyxFQUFDLEVBQzNELFVBQVU7Ozs7UUFBQyxLQUFLLENBQUMsRUFBRSxDQUNqQixFQUFFLENBQ0EsSUFBSSxXQUFXLENBQUMsbUJBQW1CLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FDbEUsRUFDRixDQUNGLEVBQ0osQ0FDRixDQUFDO0lBTUMsQ0FBQzs7O1lBbkRMLFVBQVU7Ozs7WUFURixPQUFPO1lBTVAsZ0NBQWdDO1lBRGhDLFVBQVU7O0FBT2pCO0lBREMsTUFBTSxFQUFFO3NDQUNtQixVQUFVO3FFQXNCcEM7QUFHRjtJQURDLE1BQU0sRUFBRTtzQ0FDUyxVQUFVOzJEQWlCMUI7OztJQTNDRix1REF1QkU7O0lBRUYsNkNBa0JFOzs7OztJQUdBLHFDQUF5Qjs7Ozs7SUFDekIsK0NBQTREOzs7OztJQUM1RCxtQ0FBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QsIG9mVHlwZSB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuaW1wb3J0IHsgaWlmLCBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgY2F0Y2hFcnJvciwgZXhoYXVzdE1hcCwgbWFwLCB3aXRoTGF0ZXN0RnJvbSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEF1dGhBY3Rpb25zIH0gZnJvbSAnLi4vLi4vLi4vYXV0aC9zdG9yZS9hY3Rpb25zL2luZGV4JztcbmltcG9ydCB7IG1ha2VFcnJvclNlcmlhbGl6YWJsZSB9IGZyb20gJy4uLy4uLy4uL3V0aWwvc2VyaWFsaXphdGlvbi11dGlscyc7XG5pbXBvcnQgeyBLeW1hQ29uZmlnIH0gZnJvbSAnLi4vLi4vY29uZmlnL2t5bWEtY29uZmlnJztcbmltcG9ydCB7IE9wZW5JZEF1dGhlbnRpY2F0aW9uVG9rZW5TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvb3Blbi1pZC10b2tlbi9vcGVuLWlkLXRva2VuLnNlcnZpY2UnO1xuaW1wb3J0IHsgS3ltYUFjdGlvbnMgfSBmcm9tICcuLi9hY3Rpb25zL2luZGV4JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE9wZW5JZFRva2VuRWZmZWN0IHtcbiAgQEVmZmVjdCgpXG4gIHRyaWdnZXJPcGVuSWRUb2tlbkxvYWRpbmckOiBPYnNlcnZhYmxlPEt5bWFBY3Rpb25zLkxvYWRPcGVuSWRUb2tlbj4gPSBpaWY8XG4gICAgS3ltYUFjdGlvbnMuTG9hZE9wZW5JZFRva2VuLFxuICAgIEt5bWFBY3Rpb25zLkxvYWRPcGVuSWRUb2tlblxuICA+KFxuICAgICgpID0+IHRoaXMuY29uZmlnLmF1dGhlbnRpY2F0aW9uICYmIHRoaXMuY29uZmlnLmF1dGhlbnRpY2F0aW9uLmt5bWFfZW5hYmxlZCxcbiAgICB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgICBvZlR5cGU8S3ltYUFjdGlvbnMuTG9hZE9wZW5JZFRva2VuU3VjY2Vzcz4oXG4gICAgICAgIEF1dGhBY3Rpb25zLkxPQURfVVNFUl9UT0tFTl9TVUNDRVNTXG4gICAgICApLFxuICAgICAgd2l0aExhdGVzdEZyb20oXG4gICAgICAgIHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICAgICAgICBvZlR5cGU8QXV0aEFjdGlvbnMuTG9hZFVzZXJUb2tlbj4oQXV0aEFjdGlvbnMuTE9BRF9VU0VSX1RPS0VOKVxuICAgICAgICApXG4gICAgICApLFxuICAgICAgbWFwKFxuICAgICAgICAoWywgbG9naW5BY3Rpb25dKSA9PlxuICAgICAgICAgIG5ldyBLeW1hQWN0aW9ucy5Mb2FkT3BlbklkVG9rZW4oe1xuICAgICAgICAgICAgdXNlcm5hbWU6IGxvZ2luQWN0aW9uLnBheWxvYWQudXNlcklkLFxuICAgICAgICAgICAgcGFzc3dvcmQ6IGxvZ2luQWN0aW9uLnBheWxvYWQucGFzc3dvcmQsXG4gICAgICAgICAgfSlcbiAgICAgIClcbiAgICApXG4gICk7XG5cbiAgQEVmZmVjdCgpXG4gIGxvYWRPcGVuSWRUb2tlbiQ6IE9ic2VydmFibGU8XG4gICAgS3ltYUFjdGlvbnMuT3BlbklkVG9rZW5BY3Rpb25zXG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKEt5bWFBY3Rpb25zLkxPQURfT1BFTl9JRF9UT0tFTiksXG4gICAgbWFwKChhY3Rpb246IEt5bWFBY3Rpb25zLkxvYWRPcGVuSWRUb2tlbikgPT4gYWN0aW9uLnBheWxvYWQpLFxuICAgIGV4aGF1c3RNYXAocGF5bG9hZCA9PlxuICAgICAgdGhpcy5vcGVuSWRUb2tlblNlcnZpY2VcbiAgICAgICAgLmxvYWRPcGVuSWRBdXRoZW50aWNhdGlvblRva2VuKHBheWxvYWQudXNlcm5hbWUsIHBheWxvYWQucGFzc3dvcmQpXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIG1hcCh0b2tlbiA9PiBuZXcgS3ltYUFjdGlvbnMuTG9hZE9wZW5JZFRva2VuU3VjY2Vzcyh0b2tlbikpLFxuICAgICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT5cbiAgICAgICAgICAgIG9mKFxuICAgICAgICAgICAgICBuZXcgS3ltYUFjdGlvbnMuTG9hZE9wZW5JZFRva2VuRmFpbChtYWtlRXJyb3JTZXJpYWxpemFibGUoZXJyb3IpKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgIClcbiAgKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zLFxuICAgIHByaXZhdGUgb3BlbklkVG9rZW5TZXJ2aWNlOiBPcGVuSWRBdXRoZW50aWNhdGlvblRva2VuU2VydmljZSxcbiAgICBwcml2YXRlIGNvbmZpZzogS3ltYUNvbmZpZ1xuICApIHt9XG59XG4iXX0=