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
        error => of(new fromActions.LoadUserTokenFail(error))))))));
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
            error => of(new fromActions.RefreshUserTokenFail(error))))));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci10b2tlbi5lZmZlY3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvYXV0aC9zdG9yZS9lZmZlY3RzL3VzZXItdG9rZW4uZWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3RFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUVsRSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFFdkQsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sd0VBQXdFLENBQUM7QUFDeEgsT0FBTyxLQUFLLFdBQVcsTUFBTSxnQ0FBZ0MsQ0FBQztBQUc5RCxNQUFNLE9BQU8sZ0JBQWdCOzs7OztJQTBDM0IsWUFDVSxRQUFpQixFQUNqQixnQkFBZ0Q7UUFEaEQsYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUNqQixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWdDO1FBMUMxRCxtQkFBYyxHQUFnQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDOUQsTUFBTSxDQUFDLFdBQVcsQ0FBQyxlQUFlLENBQUMsRUFDbkMsR0FBRzs7OztRQUFDLENBQUMsTUFBaUMsRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBQyxFQUMxRCxRQUFROzs7O1FBQUMsQ0FBQyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFLENBQ2hDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FDcEQsR0FBRzs7OztRQUFDLENBQUMsS0FBZ0IsRUFBRSxFQUFFOztrQkFDakIsSUFBSSxHQUFHLElBQUksSUFBSSxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxHQUFHLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUN0RCxLQUFLLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUN0QyxLQUFLLENBQUMsTUFBTSxHQUFHLGNBQWMsQ0FBQztZQUM5QixPQUFPLElBQUksV0FBVyxDQUFDLG9CQUFvQixDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3JELENBQUMsRUFBQyxFQUNGLFVBQVU7Ozs7UUFBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLFdBQVcsQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFDLENBQ2xFLEVBQ0YsQ0FDRixDQUFDO1FBR0YsV0FBTSxHQUFzQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDNUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyx1QkFBdUIsQ0FBQyxFQUMzQyxHQUFHOzs7UUFBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLEtBQUssRUFBRSxFQUFDLENBQ3ZCLENBQUM7UUFHRixzQkFBaUIsR0FBZ0MsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ2pFLE1BQU0sQ0FBQyxXQUFXLENBQUMsa0JBQWtCLENBQUMsRUFDdEMsR0FBRzs7OztRQUFDLENBQUMsTUFBb0MsRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBQyxFQUM3RCxTQUFTOzs7O1FBQUMsQ0FBQyxFQUFFLFlBQVksRUFBRSxFQUFFLEVBQUU7WUFDN0IsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxDQUFDLElBQUksQ0FDMUQsR0FBRzs7OztZQUFDLENBQUMsS0FBZ0IsRUFBRSxFQUFFOztzQkFDakIsSUFBSSxHQUFHLElBQUksSUFBSSxFQUFFO2dCQUN2QixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsR0FBRyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUM7Z0JBQ3RELEtBQUssQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO2dCQUN0QyxLQUFLLENBQUMsTUFBTSxHQUFHLGNBQWMsQ0FBQztnQkFDOUIsT0FBTyxJQUFJLFdBQVcsQ0FBQyx1QkFBdUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN4RCxDQUFDLEdBQUUsVUFBVTs7OztZQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksV0FBVyxDQUFDLG9CQUFvQixDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUN6RSxDQUFDO1FBQ0osQ0FBQyxFQUFDLENBQ0gsQ0FBQztJQUtDLENBQUM7OztZQTlDTCxVQUFVOzs7O1lBVkYsT0FBTztZQU9QLDhCQUE4Qjs7QUFNckM7SUFEQyxNQUFNLEVBQUU7c0NBQ08sVUFBVTt3REFleEI7QUFHRjtJQURDLE1BQU0sRUFBRTtzQ0FDRCxVQUFVO2dEQUdoQjtBQUdGO0lBREMsTUFBTSxFQUFFO3NDQUNVLFVBQVU7MkRBYzNCOzs7SUF2Q0YsMENBZ0JFOztJQUVGLGtDQUlFOztJQUVGLDZDQWVFOzs7OztJQUdBLG9DQUF5Qjs7Ozs7SUFDekIsNENBQXdEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0LCBvZlR5cGUgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBjYXRjaEVycm9yLCBtYXAsIG1lcmdlTWFwLCBzd2l0Y2hNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBVU0VSSURfQ1VSUkVOVCB9IGZyb20gJy4uLy4uLy4uL29jYy91dGlscy9vY2MtY29uc3RhbnRzJztcbmltcG9ydCB7IFVzZXJUb2tlbiB9IGZyb20gJy4uLy4uL21vZGVscy90b2tlbi10eXBlcy5tb2RlbCc7XG5pbXBvcnQgeyBMb2dpbiB9IGZyb20gJy4uL2FjdGlvbnMvbG9naW4tbG9nb3V0LmFjdGlvbic7XG5pbXBvcnQgeyBVc2VyVG9rZW5BY3Rpb24gfSBmcm9tICcuLi9hY3Rpb25zL3VzZXItdG9rZW4uYWN0aW9uJztcbmltcG9ydCB7IFVzZXJBdXRoZW50aWNhdGlvblRva2VuU2VydmljZSB9IGZyb20gJy4vLi4vLi4vc2VydmljZXMvdXNlci1hdXRoZW50aWNhdGlvbi91c2VyLWF1dGhlbnRpY2F0aW9uLXRva2VuLnNlcnZpY2UnO1xuaW1wb3J0ICogYXMgZnJvbUFjdGlvbnMgZnJvbSAnLi8uLi9hY3Rpb25zL3VzZXItdG9rZW4uYWN0aW9uJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFVzZXJUb2tlbkVmZmVjdHMge1xuICBARWZmZWN0KClcbiAgbG9hZFVzZXJUb2tlbiQ6IE9ic2VydmFibGU8VXNlclRva2VuQWN0aW9uPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoZnJvbUFjdGlvbnMuTE9BRF9VU0VSX1RPS0VOKSxcbiAgICBtYXAoKGFjdGlvbjogZnJvbUFjdGlvbnMuTG9hZFVzZXJUb2tlbikgPT4gYWN0aW9uLnBheWxvYWQpLFxuICAgIG1lcmdlTWFwKCh7IHVzZXJJZCwgcGFzc3dvcmQgfSkgPT5cbiAgICAgIHRoaXMudXNlclRva2VuU2VydmljZS5sb2FkVG9rZW4odXNlcklkLCBwYXNzd29yZCkucGlwZShcbiAgICAgICAgbWFwKCh0b2tlbjogVXNlclRva2VuKSA9PiB7XG4gICAgICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgICAgICAgZGF0ZS5zZXRTZWNvbmRzKGRhdGUuZ2V0U2Vjb25kcygpICsgdG9rZW4uZXhwaXJlc19pbik7XG4gICAgICAgICAgdG9rZW4uZXhwaXJhdGlvbl90aW1lID0gZGF0ZS50b0pTT04oKTtcbiAgICAgICAgICB0b2tlbi51c2VySWQgPSBVU0VSSURfQ1VSUkVOVDtcbiAgICAgICAgICByZXR1cm4gbmV3IGZyb21BY3Rpb25zLkxvYWRVc2VyVG9rZW5TdWNjZXNzKHRva2VuKTtcbiAgICAgICAgfSksXG4gICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT4gb2YobmV3IGZyb21BY3Rpb25zLkxvYWRVc2VyVG9rZW5GYWlsKGVycm9yKSkpXG4gICAgICApXG4gICAgKVxuICApO1xuXG4gIEBFZmZlY3QoKVxuICBsb2dpbiQ6IE9ic2VydmFibGU8TG9naW4+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShmcm9tQWN0aW9ucy5MT0FEX1VTRVJfVE9LRU5fU1VDQ0VTUyksXG4gICAgbWFwKCgpID0+IG5ldyBMb2dpbigpKVxuICApO1xuXG4gIEBFZmZlY3QoKVxuICByZWZyZXNoVXNlclRva2VuJDogT2JzZXJ2YWJsZTxVc2VyVG9rZW5BY3Rpb24+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShmcm9tQWN0aW9ucy5SRUZSRVNIX1VTRVJfVE9LRU4pLFxuICAgIG1hcCgoYWN0aW9uOiBmcm9tQWN0aW9ucy5SZWZyZXNoVXNlclRva2VuKSA9PiBhY3Rpb24ucGF5bG9hZCksXG4gICAgc3dpdGNoTWFwKCh7IHJlZnJlc2hUb2tlbiB9KSA9PiB7XG4gICAgICByZXR1cm4gdGhpcy51c2VyVG9rZW5TZXJ2aWNlLnJlZnJlc2hUb2tlbihyZWZyZXNoVG9rZW4pLnBpcGUoXG4gICAgICAgIG1hcCgodG9rZW46IFVzZXJUb2tlbikgPT4ge1xuICAgICAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICAgIGRhdGUuc2V0U2Vjb25kcyhkYXRlLmdldFNlY29uZHMoKSArIHRva2VuLmV4cGlyZXNfaW4pO1xuICAgICAgICAgIHRva2VuLmV4cGlyYXRpb25fdGltZSA9IGRhdGUudG9KU09OKCk7XG4gICAgICAgICAgdG9rZW4udXNlcklkID0gVVNFUklEX0NVUlJFTlQ7XG4gICAgICAgICAgcmV0dXJuIG5ldyBmcm9tQWN0aW9ucy5SZWZyZXNoVXNlclRva2VuU3VjY2Vzcyh0b2tlbik7XG4gICAgICAgIH0sIGNhdGNoRXJyb3IoZXJyb3IgPT4gb2YobmV3IGZyb21BY3Rpb25zLlJlZnJlc2hVc2VyVG9rZW5GYWlsKGVycm9yKSkpKVxuICAgICAgKTtcbiAgICB9KVxuICApO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnMsXG4gICAgcHJpdmF0ZSB1c2VyVG9rZW5TZXJ2aWNlOiBVc2VyQXV0aGVudGljYXRpb25Ub2tlblNlcnZpY2VcbiAgKSB7fVxufVxuIl19