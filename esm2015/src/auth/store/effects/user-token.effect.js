/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, exhaustMap, map, mergeMap } from 'rxjs/operators';
import { OCC_USER_ID_CURRENT } from '../../../occ/utils/occ-constants';
import { makeErrorSerializable } from '../../../util/serialization-utils';
import { UserAuthenticationTokenService } from '../../services/user-authentication/user-authentication-token.service';
import { AuthActions } from '../actions/index';
export class UserTokenEffects {
    /**
     * @param {?} actions$
     * @param {?} userTokenService
     */
    constructor(actions$, userTokenService) {
        this.actions$ = actions$;
        this.userTokenService = userTokenService;
        this.loadUserToken$ = this.actions$.pipe(ofType(AuthActions.LOAD_USER_TOKEN), map((/**
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
            token.userId = OCC_USER_ID_CURRENT;
            return new AuthActions.LoadUserTokenSuccess(token);
        })), catchError((/**
         * @param {?} error
         * @return {?}
         */
        error => of(new AuthActions.LoadUserTokenFail(makeErrorSerializable(error)))))))));
        this.login$ = this.actions$.pipe(ofType(AuthActions.LOAD_USER_TOKEN_SUCCESS), map((/**
         * @return {?}
         */
        () => new AuthActions.Login())));
        this.refreshUserToken$ = this.actions$.pipe(ofType(AuthActions.REFRESH_USER_TOKEN), map((/**
         * @param {?} action
         * @return {?}
         */
        (action) => action.payload)), exhaustMap((/**
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
                return new AuthActions.RefreshUserTokenSuccess(token);
            }), catchError((/**
             * @param {?} error
             * @return {?}
             */
            error => of(new AuthActions.RefreshUserTokenFail(makeErrorSerializable(error)))))));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci10b2tlbi5lZmZlY3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvYXV0aC9zdG9yZS9lZmZlY3RzL3VzZXItdG9rZW4uZWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBRTFFLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLHNFQUFzRSxDQUFDO0FBQ3RILE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUcvQyxNQUFNLE9BQU8sZ0JBQWdCOzs7OztJQTZDM0IsWUFDVSxRQUFpQixFQUNqQixnQkFBZ0Q7UUFEaEQsYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUNqQixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWdDO1FBN0MxRCxtQkFBYyxHQUE0QyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDMUUsTUFBTSxDQUFDLFdBQVcsQ0FBQyxlQUFlLENBQUMsRUFDbkMsR0FBRzs7OztRQUFDLENBQUMsTUFBaUMsRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBQyxFQUMxRCxRQUFROzs7O1FBQUMsQ0FBQyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFLENBQ2hDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FDcEQsR0FBRzs7OztRQUFDLENBQUMsS0FBZ0IsRUFBRSxFQUFFOztrQkFDakIsSUFBSSxHQUFHLElBQUksSUFBSSxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxHQUFHLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUN0RCxLQUFLLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUN0QyxLQUFLLENBQUMsTUFBTSxHQUFHLG1CQUFtQixDQUFDO1lBQ25DLE9BQU8sSUFBSSxXQUFXLENBQUMsb0JBQW9CLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDckQsQ0FBQyxFQUFDLEVBQ0YsVUFBVTs7OztRQUFDLEtBQUssQ0FBQyxFQUFFLENBQ2pCLEVBQUUsQ0FBQyxJQUFJLFdBQVcsQ0FBQyxpQkFBaUIsQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQ3BFLENBQ0YsRUFDRixDQUNGLENBQUM7UUFHRixXQUFNLEdBQWtDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUN4RCxNQUFNLENBQUMsV0FBVyxDQUFDLHVCQUF1QixDQUFDLEVBQzNDLEdBQUc7OztRQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksV0FBVyxDQUFDLEtBQUssRUFBRSxFQUFDLENBQ25DLENBQUM7UUFHRixzQkFBaUIsR0FFYixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDcEIsTUFBTSxDQUFDLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQyxFQUN0QyxHQUFHOzs7O1FBQUMsQ0FBQyxNQUFvQyxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFDLEVBQzdELFVBQVU7Ozs7UUFBQyxDQUFDLEVBQUUsWUFBWSxFQUFFLEVBQUUsRUFBRTtZQUM5QixPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLENBQUMsSUFBSSxDQUMxRCxHQUFHOzs7O1lBQUMsQ0FBQyxLQUFnQixFQUFFLEVBQUU7O3NCQUNqQixJQUFJLEdBQUcsSUFBSSxJQUFJLEVBQUU7Z0JBQ3ZCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxHQUFHLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQztnQkFDdEQsS0FBSyxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7Z0JBQ3RDLE9BQU8sSUFBSSxXQUFXLENBQUMsdUJBQXVCLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDeEQsQ0FBQyxHQUFFLFVBQVU7Ozs7WUFBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLFdBQVcsQ0FBQyxvQkFBb0IsQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUNoRyxDQUFDO1FBQ0osQ0FBQyxFQUFDLENBQ0gsQ0FBQztJQUtDLENBQUM7OztZQWpETCxVQUFVOzs7O1lBVEYsT0FBTztZQU1QLDhCQUE4Qjs7QUFNckM7SUFEQyxNQUFNLEVBQUU7c0NBQ08sVUFBVTt3REFpQnhCO0FBR0Y7SUFEQyxNQUFNLEVBQUU7c0NBQ0QsVUFBVTtnREFHaEI7QUFHRjtJQURDLE1BQU0sRUFBRTtzQ0FDVSxVQUFVOzJEQWUzQjs7O0lBMUNGLDBDQWtCRTs7SUFFRixrQ0FJRTs7SUFFRiw2Q0FnQkU7Ozs7O0lBR0Esb0NBQXlCOzs7OztJQUN6Qiw0Q0FBd0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QsIG9mVHlwZSB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGNhdGNoRXJyb3IsIGV4aGF1c3RNYXAsIG1hcCwgbWVyZ2VNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBPQ0NfVVNFUl9JRF9DVVJSRU5UIH0gZnJvbSAnLi4vLi4vLi4vb2NjL3V0aWxzL29jYy1jb25zdGFudHMnO1xuaW1wb3J0IHsgbWFrZUVycm9yU2VyaWFsaXphYmxlIH0gZnJvbSAnLi4vLi4vLi4vdXRpbC9zZXJpYWxpemF0aW9uLXV0aWxzJztcbmltcG9ydCB7IFVzZXJUb2tlbiB9IGZyb20gJy4uLy4uL21vZGVscy90b2tlbi10eXBlcy5tb2RlbCc7XG5pbXBvcnQgeyBVc2VyQXV0aGVudGljYXRpb25Ub2tlblNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy91c2VyLWF1dGhlbnRpY2F0aW9uL3VzZXItYXV0aGVudGljYXRpb24tdG9rZW4uc2VydmljZSc7XG5pbXBvcnQgeyBBdXRoQWN0aW9ucyB9IGZyb20gJy4uL2FjdGlvbnMvaW5kZXgnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVXNlclRva2VuRWZmZWN0cyB7XG4gIEBFZmZlY3QoKVxuICBsb2FkVXNlclRva2VuJDogT2JzZXJ2YWJsZTxBdXRoQWN0aW9ucy5Vc2VyVG9rZW5BY3Rpb24+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShBdXRoQWN0aW9ucy5MT0FEX1VTRVJfVE9LRU4pLFxuICAgIG1hcCgoYWN0aW9uOiBBdXRoQWN0aW9ucy5Mb2FkVXNlclRva2VuKSA9PiBhY3Rpb24ucGF5bG9hZCksXG4gICAgbWVyZ2VNYXAoKHsgdXNlcklkLCBwYXNzd29yZCB9KSA9PlxuICAgICAgdGhpcy51c2VyVG9rZW5TZXJ2aWNlLmxvYWRUb2tlbih1c2VySWQsIHBhc3N3b3JkKS5waXBlKFxuICAgICAgICBtYXAoKHRva2VuOiBVc2VyVG9rZW4pID0+IHtcbiAgICAgICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoKTtcbiAgICAgICAgICBkYXRlLnNldFNlY29uZHMoZGF0ZS5nZXRTZWNvbmRzKCkgKyB0b2tlbi5leHBpcmVzX2luKTtcbiAgICAgICAgICB0b2tlbi5leHBpcmF0aW9uX3RpbWUgPSBkYXRlLnRvSlNPTigpO1xuICAgICAgICAgIHRva2VuLnVzZXJJZCA9IE9DQ19VU0VSX0lEX0NVUlJFTlQ7XG4gICAgICAgICAgcmV0dXJuIG5ldyBBdXRoQWN0aW9ucy5Mb2FkVXNlclRva2VuU3VjY2Vzcyh0b2tlbik7XG4gICAgICAgIH0pLFxuICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+XG4gICAgICAgICAgb2YobmV3IEF1dGhBY3Rpb25zLkxvYWRVc2VyVG9rZW5GYWlsKG1ha2VFcnJvclNlcmlhbGl6YWJsZShlcnJvcikpKVxuICAgICAgICApXG4gICAgICApXG4gICAgKVxuICApO1xuXG4gIEBFZmZlY3QoKVxuICBsb2dpbiQ6IE9ic2VydmFibGU8QXV0aEFjdGlvbnMuTG9naW4+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShBdXRoQWN0aW9ucy5MT0FEX1VTRVJfVE9LRU5fU1VDQ0VTUyksXG4gICAgbWFwKCgpID0+IG5ldyBBdXRoQWN0aW9ucy5Mb2dpbigpKVxuICApO1xuXG4gIEBFZmZlY3QoKVxuICByZWZyZXNoVXNlclRva2VuJDogT2JzZXJ2YWJsZTxcbiAgICBBdXRoQWN0aW9ucy5Vc2VyVG9rZW5BY3Rpb25cbiAgPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoQXV0aEFjdGlvbnMuUkVGUkVTSF9VU0VSX1RPS0VOKSxcbiAgICBtYXAoKGFjdGlvbjogQXV0aEFjdGlvbnMuUmVmcmVzaFVzZXJUb2tlbikgPT4gYWN0aW9uLnBheWxvYWQpLFxuICAgIGV4aGF1c3RNYXAoKHsgcmVmcmVzaFRva2VuIH0pID0+IHtcbiAgICAgIHJldHVybiB0aGlzLnVzZXJUb2tlblNlcnZpY2UucmVmcmVzaFRva2VuKHJlZnJlc2hUb2tlbikucGlwZShcbiAgICAgICAgbWFwKCh0b2tlbjogVXNlclRva2VuKSA9PiB7XG4gICAgICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgICAgICAgZGF0ZS5zZXRTZWNvbmRzKGRhdGUuZ2V0U2Vjb25kcygpICsgdG9rZW4uZXhwaXJlc19pbik7XG4gICAgICAgICAgdG9rZW4uZXhwaXJhdGlvbl90aW1lID0gZGF0ZS50b0pTT04oKTtcbiAgICAgICAgICByZXR1cm4gbmV3IEF1dGhBY3Rpb25zLlJlZnJlc2hVc2VyVG9rZW5TdWNjZXNzKHRva2VuKTtcbiAgICAgICAgfSwgY2F0Y2hFcnJvcihlcnJvciA9PiBvZihuZXcgQXV0aEFjdGlvbnMuUmVmcmVzaFVzZXJUb2tlbkZhaWwobWFrZUVycm9yU2VyaWFsaXphYmxlKGVycm9yKSkpKSlcbiAgICAgICk7XG4gICAgfSlcbiAgKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zLFxuICAgIHByaXZhdGUgdXNlclRva2VuU2VydmljZTogVXNlckF1dGhlbnRpY2F0aW9uVG9rZW5TZXJ2aWNlXG4gICkge31cbn1cbiJdfQ==