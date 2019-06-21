/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';
import { USERID_CURRENT } from '../../../occ/utils/occ-constants';
import { makeHttpErrorSerializable } from '../../../util/serialization-utils';
import { Login } from '../actions/login-logout.action';
import { UserAuthenticationTokenService } from './../../services/user-authentication/user-authentication-token.service';
import * as fromActions from './../actions/user-token.action';
export class UserTokenEffects {
    /**
     * @param {?} actions$
     * @param {?} userTokenService
     */
    constructor(actions$, userTokenService) {
        this.actions$ = actions$;
        this.userTokenService = userTokenService;
        this.loadUserToken$ = this.actions$.pipe(ofType(fromActions.LOAD_USER_TOKEN), map((/**
         * @param {?} action
         * @return {?}
         */
        (action) => action.payload)), mergeMap((/**
         * @param {?} __0
         * @return {?}
         */
        ({ userId, password }) => this.userTokenService.loadToken(userId, password).pipe(map((/**
         * @param {?} token
         * @return {?}
         */
        (token) => {
            /** @type {?} */
            const date = new Date();
            date.setSeconds(date.getSeconds() + token.expires_in);
            token.expiration_time = date.toJSON();
            token.userId = USERID_CURRENT;
            return new fromActions.LoadUserTokenSuccess(token);
        })), catchError((/**
         * @param {?} error
         * @return {?}
         */
        error => of(new fromActions.LoadUserTokenFail(makeHttpErrorSerializable(error)))))))));
        this.login$ = this.actions$.pipe(ofType(fromActions.LOAD_USER_TOKEN_SUCCESS), map((/**
         * @return {?}
         */
        () => new Login())));
        this.refreshUserToken$ = this.actions$.pipe(ofType(fromActions.REFRESH_USER_TOKEN), map((/**
         * @param {?} action
         * @return {?}
         */
        (action) => action.payload)), switchMap((/**
         * @param {?} __0
         * @return {?}
         */
        ({ refreshToken }) => {
            return this.userTokenService.refreshToken(refreshToken).pipe(map((/**
             * @param {?} token
             * @return {?}
             */
            (token) => {
                /** @type {?} */
                const date = new Date();
                date.setSeconds(date.getSeconds() + token.expires_in);
                token.expiration_time = date.toJSON();
                token.userId = USERID_CURRENT;
                return new fromActions.RefreshUserTokenSuccess(token);
            }), catchError((/**
             * @param {?} error
             * @return {?}
             */
            error => of(new fromActions.RefreshUserTokenFail(makeHttpErrorSerializable(error)))))));
        })));
    }
}
UserTokenEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
UserTokenEffects.ctorParameters = () => [
    { type: Actions },
    { type: UserAuthenticationTokenService }
];
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Observable)
], UserTokenEffects.prototype, "loadUserToken$", void 0);
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Observable)
], UserTokenEffects.prototype, "login$", void 0);
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Observable)
], UserTokenEffects.prototype, "refreshUserToken$", void 0);
if (false) {
    /** @type {?} */
    UserTokenEffects.prototype.loadUserToken$;
    /** @type {?} */
    UserTokenEffects.prototype.login$;
    /** @type {?} */
    UserTokenEffects.prototype.refreshUserToken$;
    /**
     * @type {?}
     * @private
     */
    UserTokenEffects.prototype.actions$;
    /**
     * @type {?}
     * @private
     */
    UserTokenEffects.prototype.userTokenService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci10b2tlbi5lZmZlY3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvYXV0aC9zdG9yZS9lZmZlY3RzL3VzZXItdG9rZW4uZWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3RFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNsRSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUU5RSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFFdkQsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sd0VBQXdFLENBQUM7QUFDeEgsT0FBTyxLQUFLLFdBQVcsTUFBTSxnQ0FBZ0MsQ0FBQztBQUc5RCxNQUFNLE9BQU8sZ0JBQWdCOzs7OztJQThDM0IsWUFDVSxRQUFpQixFQUNqQixnQkFBZ0Q7UUFEaEQsYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUNqQixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWdDO1FBOUMxRCxtQkFBYyxHQUFnQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDOUQsTUFBTSxDQUFDLFdBQVcsQ0FBQyxlQUFlLENBQUMsRUFDbkMsR0FBRzs7OztRQUFDLENBQUMsTUFBaUMsRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBQyxFQUMxRCxRQUFROzs7O1FBQUMsQ0FBQyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFLENBQ2hDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FDcEQsR0FBRzs7OztRQUFDLENBQUMsS0FBZ0IsRUFBRSxFQUFFOztrQkFDakIsSUFBSSxHQUFHLElBQUksSUFBSSxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxHQUFHLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUN0RCxLQUFLLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUN0QyxLQUFLLENBQUMsTUFBTSxHQUFHLGNBQWMsQ0FBQztZQUM5QixPQUFPLElBQUksV0FBVyxDQUFDLG9CQUFvQixDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3JELENBQUMsRUFBQyxFQUNGLFVBQVU7Ozs7UUFBQyxLQUFLLENBQUMsRUFBRSxDQUNqQixFQUFFLENBQ0EsSUFBSSxXQUFXLENBQUMsaUJBQWlCLENBQUMseUJBQXlCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FDcEUsRUFDRixDQUNGLEVBQ0YsQ0FDRixDQUFDO1FBR0YsV0FBTSxHQUFzQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDNUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyx1QkFBdUIsQ0FBQyxFQUMzQyxHQUFHOzs7UUFBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLEtBQUssRUFBRSxFQUFDLENBQ3ZCLENBQUM7UUFHRixzQkFBaUIsR0FBZ0MsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ2pFLE1BQU0sQ0FBQyxXQUFXLENBQUMsa0JBQWtCLENBQUMsRUFDdEMsR0FBRzs7OztRQUFDLENBQUMsTUFBb0MsRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBQyxFQUM3RCxTQUFTOzs7O1FBQUMsQ0FBQyxFQUFFLFlBQVksRUFBRSxFQUFFLEVBQUU7WUFDN0IsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxDQUFDLElBQUksQ0FDMUQsR0FBRzs7OztZQUFDLENBQUMsS0FBZ0IsRUFBRSxFQUFFOztzQkFDakIsSUFBSSxHQUFHLElBQUksSUFBSSxFQUFFO2dCQUN2QixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsR0FBRyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUM7Z0JBQ3RELEtBQUssQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO2dCQUN0QyxLQUFLLENBQUMsTUFBTSxHQUFHLGNBQWMsQ0FBQztnQkFDOUIsT0FBTyxJQUFJLFdBQVcsQ0FBQyx1QkFBdUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN4RCxDQUFDLEdBQUUsVUFBVTs7OztZQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksV0FBVyxDQUFDLG9CQUFvQixDQUFDLHlCQUF5QixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQ3BHLENBQUM7UUFDSixDQUFDLEVBQUMsQ0FDSCxDQUFDO0lBS0MsQ0FBQzs7O1lBbERMLFVBQVU7Ozs7WUFYRixPQUFPO1lBUVAsOEJBQThCOztBQU1yQztJQURDLE1BQU0sRUFBRTtzQ0FDTyxVQUFVO3dEQW1CeEI7QUFHRjtJQURDLE1BQU0sRUFBRTtzQ0FDRCxVQUFVO2dEQUdoQjtBQUdGO0lBREMsTUFBTSxFQUFFO3NDQUNVLFVBQVU7MkRBYzNCOzs7SUEzQ0YsMENBb0JFOztJQUVGLGtDQUlFOztJQUVGLDZDQWVFOzs7OztJQUdBLG9DQUF5Qjs7Ozs7SUFDekIsNENBQXdEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0LCBvZlR5cGUgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBjYXRjaEVycm9yLCBtYXAsIG1lcmdlTWFwLCBzd2l0Y2hNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBVU0VSSURfQ1VSUkVOVCB9IGZyb20gJy4uLy4uLy4uL29jYy91dGlscy9vY2MtY29uc3RhbnRzJztcbmltcG9ydCB7IG1ha2VIdHRwRXJyb3JTZXJpYWxpemFibGUgfSBmcm9tICcuLi8uLi8uLi91dGlsL3NlcmlhbGl6YXRpb24tdXRpbHMnO1xuaW1wb3J0IHsgVXNlclRva2VuIH0gZnJvbSAnLi4vLi4vbW9kZWxzL3Rva2VuLXR5cGVzLm1vZGVsJztcbmltcG9ydCB7IExvZ2luIH0gZnJvbSAnLi4vYWN0aW9ucy9sb2dpbi1sb2dvdXQuYWN0aW9uJztcbmltcG9ydCB7IFVzZXJUb2tlbkFjdGlvbiB9IGZyb20gJy4uL2FjdGlvbnMvdXNlci10b2tlbi5hY3Rpb24nO1xuaW1wb3J0IHsgVXNlckF1dGhlbnRpY2F0aW9uVG9rZW5TZXJ2aWNlIH0gZnJvbSAnLi8uLi8uLi9zZXJ2aWNlcy91c2VyLWF1dGhlbnRpY2F0aW9uL3VzZXItYXV0aGVudGljYXRpb24tdG9rZW4uc2VydmljZSc7XG5pbXBvcnQgKiBhcyBmcm9tQWN0aW9ucyBmcm9tICcuLy4uL2FjdGlvbnMvdXNlci10b2tlbi5hY3Rpb24nO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVXNlclRva2VuRWZmZWN0cyB7XG4gIEBFZmZlY3QoKVxuICBsb2FkVXNlclRva2VuJDogT2JzZXJ2YWJsZTxVc2VyVG9rZW5BY3Rpb24+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShmcm9tQWN0aW9ucy5MT0FEX1VTRVJfVE9LRU4pLFxuICAgIG1hcCgoYWN0aW9uOiBmcm9tQWN0aW9ucy5Mb2FkVXNlclRva2VuKSA9PiBhY3Rpb24ucGF5bG9hZCksXG4gICAgbWVyZ2VNYXAoKHsgdXNlcklkLCBwYXNzd29yZCB9KSA9PlxuICAgICAgdGhpcy51c2VyVG9rZW5TZXJ2aWNlLmxvYWRUb2tlbih1c2VySWQsIHBhc3N3b3JkKS5waXBlKFxuICAgICAgICBtYXAoKHRva2VuOiBVc2VyVG9rZW4pID0+IHtcbiAgICAgICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoKTtcbiAgICAgICAgICBkYXRlLnNldFNlY29uZHMoZGF0ZS5nZXRTZWNvbmRzKCkgKyB0b2tlbi5leHBpcmVzX2luKTtcbiAgICAgICAgICB0b2tlbi5leHBpcmF0aW9uX3RpbWUgPSBkYXRlLnRvSlNPTigpO1xuICAgICAgICAgIHRva2VuLnVzZXJJZCA9IFVTRVJJRF9DVVJSRU5UO1xuICAgICAgICAgIHJldHVybiBuZXcgZnJvbUFjdGlvbnMuTG9hZFVzZXJUb2tlblN1Y2Nlc3ModG9rZW4pO1xuICAgICAgICB9KSxcbiAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PlxuICAgICAgICAgIG9mKFxuICAgICAgICAgICAgbmV3IGZyb21BY3Rpb25zLkxvYWRVc2VyVG9rZW5GYWlsKG1ha2VIdHRwRXJyb3JTZXJpYWxpemFibGUoZXJyb3IpKVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgKVxuICAgIClcbiAgKTtcblxuICBARWZmZWN0KClcbiAgbG9naW4kOiBPYnNlcnZhYmxlPExvZ2luPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoZnJvbUFjdGlvbnMuTE9BRF9VU0VSX1RPS0VOX1NVQ0NFU1MpLFxuICAgIG1hcCgoKSA9PiBuZXcgTG9naW4oKSlcbiAgKTtcblxuICBARWZmZWN0KClcbiAgcmVmcmVzaFVzZXJUb2tlbiQ6IE9ic2VydmFibGU8VXNlclRva2VuQWN0aW9uPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoZnJvbUFjdGlvbnMuUkVGUkVTSF9VU0VSX1RPS0VOKSxcbiAgICBtYXAoKGFjdGlvbjogZnJvbUFjdGlvbnMuUmVmcmVzaFVzZXJUb2tlbikgPT4gYWN0aW9uLnBheWxvYWQpLFxuICAgIHN3aXRjaE1hcCgoeyByZWZyZXNoVG9rZW4gfSkgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMudXNlclRva2VuU2VydmljZS5yZWZyZXNoVG9rZW4ocmVmcmVzaFRva2VuKS5waXBlKFxuICAgICAgICBtYXAoKHRva2VuOiBVc2VyVG9rZW4pID0+IHtcbiAgICAgICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoKTtcbiAgICAgICAgICBkYXRlLnNldFNlY29uZHMoZGF0ZS5nZXRTZWNvbmRzKCkgKyB0b2tlbi5leHBpcmVzX2luKTtcbiAgICAgICAgICB0b2tlbi5leHBpcmF0aW9uX3RpbWUgPSBkYXRlLnRvSlNPTigpO1xuICAgICAgICAgIHRva2VuLnVzZXJJZCA9IFVTRVJJRF9DVVJSRU5UO1xuICAgICAgICAgIHJldHVybiBuZXcgZnJvbUFjdGlvbnMuUmVmcmVzaFVzZXJUb2tlblN1Y2Nlc3ModG9rZW4pO1xuICAgICAgICB9LCBjYXRjaEVycm9yKGVycm9yID0+IG9mKG5ldyBmcm9tQWN0aW9ucy5SZWZyZXNoVXNlclRva2VuRmFpbChtYWtlSHR0cEVycm9yU2VyaWFsaXphYmxlKGVycm9yKSkpKSlcbiAgICAgICk7XG4gICAgfSlcbiAgKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zLFxuICAgIHByaXZhdGUgdXNlclRva2VuU2VydmljZTogVXNlckF1dGhlbnRpY2F0aW9uVG9rZW5TZXJ2aWNlXG4gICkge31cbn1cbiJdfQ==