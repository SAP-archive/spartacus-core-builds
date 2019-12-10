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
        this.revokeUserToken$ = this.actions$.pipe(ofType(AuthActions.REVOKE_USER_TOKEN), map((/**
         * @param {?} action
         * @return {?}
         */
        (action) => {
            return action.payload;
        })), mergeMap((/**
         * @param {?} userToken
         * @return {?}
         */
        (userToken) => {
            return this.userTokenService.revoke(userToken).pipe(map((/**
             * @return {?}
             */
            () => new AuthActions.RevokeUserTokenSuccess(userToken))), catchError((/**
             * @param {?} error
             * @return {?}
             */
            error => of(new AuthActions.RevokeUserTokenFail(error)))));
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
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Observable)
], UserTokenEffects.prototype, "revokeUserToken$", void 0);
if (false) {
    /** @type {?} */
    UserTokenEffects.prototype.loadUserToken$;
    /** @type {?} */
    UserTokenEffects.prototype.login$;
    /** @type {?} */
    UserTokenEffects.prototype.refreshUserToken$;
    /** @type {?} */
    UserTokenEffects.prototype.revokeUserToken$;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci10b2tlbi5lZmZlY3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvYXV0aC9zdG9yZS9lZmZlY3RzL3VzZXItdG9rZW4uZWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBRTFFLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLHNFQUFzRSxDQUFDO0FBQ3RILE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUcvQyxNQUFNLE9BQU8sZ0JBQWdCOzs7OztJQTZEM0IsWUFDVSxRQUFpQixFQUNqQixnQkFBZ0Q7UUFEaEQsYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUNqQixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWdDO1FBN0QxRCxtQkFBYyxHQUE0QyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDMUUsTUFBTSxDQUFDLFdBQVcsQ0FBQyxlQUFlLENBQUMsRUFDbkMsR0FBRzs7OztRQUFDLENBQUMsTUFBaUMsRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBQyxFQUMxRCxRQUFROzs7O1FBQUMsQ0FBQyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFLENBQ2hDLElBQUks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QUFDO0lBS0MsQ0FBQzs7O1lBakVMLFVBQVU7Ozs7WUFURixPQUFPO1lBTVAsOEJBQThCOztBQU1yQztJQURDLE1BQU0sRUFBRTtzQ0FDTyxVQUFVO3dEQWlCeEI7QUFHRjtJQURDLE1BQU0sRUFBRTtzQ0FDRCxVQUFVO2dEQUdoQjtBQUdGO0lBREMsTUFBTSxFQUFFO3NDQUNVLFVBQVU7MkRBZTNCO0FBR0Y7SUFEQyxNQUFNLEVBQUU7c0NBQ1MsVUFBVTswREFhMUI7OztJQTFERiwwQ0FrQkU7O0lBRUYsa0NBSUU7O0lBRUYsNkNBZ0JFOztJQUVGLDRDQWNFOzs7OztJQUdBLG9DQUF5Qjs7Ozs7SUFDekIsNENBQXdEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0LCBvZlR5cGUgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBjYXRjaEVycm9yLCBleGhhdXN0TWFwLCBtYXAsIG1lcmdlTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgT0NDX1VTRVJfSURfQ1VSUkVOVCB9IGZyb20gJy4uLy4uLy4uL29jYy91dGlscy9vY2MtY29uc3RhbnRzJztcbmltcG9ydCB7IG1ha2VFcnJvclNlcmlhbGl6YWJsZSB9IGZyb20gJy4uLy4uLy4uL3V0aWwvc2VyaWFsaXphdGlvbi11dGlscyc7XG5pbXBvcnQgeyBVc2VyVG9rZW4gfSBmcm9tICcuLi8uLi9tb2RlbHMvdG9rZW4tdHlwZXMubW9kZWwnO1xuaW1wb3J0IHsgVXNlckF1dGhlbnRpY2F0aW9uVG9rZW5TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvdXNlci1hdXRoZW50aWNhdGlvbi91c2VyLWF1dGhlbnRpY2F0aW9uLXRva2VuLnNlcnZpY2UnO1xuaW1wb3J0IHsgQXV0aEFjdGlvbnMgfSBmcm9tICcuLi9hY3Rpb25zL2luZGV4JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFVzZXJUb2tlbkVmZmVjdHMge1xuICBARWZmZWN0KClcbiAgbG9hZFVzZXJUb2tlbiQ6IE9ic2VydmFibGU8QXV0aEFjdGlvbnMuVXNlclRva2VuQWN0aW9uPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoQXV0aEFjdGlvbnMuTE9BRF9VU0VSX1RPS0VOKSxcbiAgICBtYXAoKGFjdGlvbjogQXV0aEFjdGlvbnMuTG9hZFVzZXJUb2tlbikgPT4gYWN0aW9uLnBheWxvYWQpLFxuICAgIG1lcmdlTWFwKCh7IHVzZXJJZCwgcGFzc3dvcmQgfSkgPT5cbiAgICAgIHRoaXMudXNlclRva2VuU2VydmljZS5sb2FkVG9rZW4odXNlcklkLCBwYXNzd29yZCkucGlwZShcbiAgICAgICAgbWFwKCh0b2tlbjogVXNlclRva2VuKSA9PiB7XG4gICAgICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgICAgICAgZGF0ZS5zZXRTZWNvbmRzKGRhdGUuZ2V0U2Vjb25kcygpICsgdG9rZW4uZXhwaXJlc19pbik7XG4gICAgICAgICAgdG9rZW4uZXhwaXJhdGlvbl90aW1lID0gZGF0ZS50b0pTT04oKTtcbiAgICAgICAgICB0b2tlbi51c2VySWQgPSBPQ0NfVVNFUl9JRF9DVVJSRU5UO1xuICAgICAgICAgIHJldHVybiBuZXcgQXV0aEFjdGlvbnMuTG9hZFVzZXJUb2tlblN1Y2Nlc3ModG9rZW4pO1xuICAgICAgICB9KSxcbiAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PlxuICAgICAgICAgIG9mKG5ldyBBdXRoQWN0aW9ucy5Mb2FkVXNlclRva2VuRmFpbChtYWtlRXJyb3JTZXJpYWxpemFibGUoZXJyb3IpKSlcbiAgICAgICAgKVxuICAgICAgKVxuICAgIClcbiAgKTtcblxuICBARWZmZWN0KClcbiAgbG9naW4kOiBPYnNlcnZhYmxlPEF1dGhBY3Rpb25zLkxvZ2luPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoQXV0aEFjdGlvbnMuTE9BRF9VU0VSX1RPS0VOX1NVQ0NFU1MpLFxuICAgIG1hcCgoKSA9PiBuZXcgQXV0aEFjdGlvbnMuTG9naW4oKSlcbiAgKTtcblxuICBARWZmZWN0KClcbiAgcmVmcmVzaFVzZXJUb2tlbiQ6IE9ic2VydmFibGU8XG4gICAgQXV0aEFjdGlvbnMuVXNlclRva2VuQWN0aW9uXG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKEF1dGhBY3Rpb25zLlJFRlJFU0hfVVNFUl9UT0tFTiksXG4gICAgbWFwKChhY3Rpb246IEF1dGhBY3Rpb25zLlJlZnJlc2hVc2VyVG9rZW4pID0+IGFjdGlvbi5wYXlsb2FkKSxcbiAgICBleGhhdXN0TWFwKCh7IHJlZnJlc2hUb2tlbiB9KSA9PiB7XG4gICAgICByZXR1cm4gdGhpcy51c2VyVG9rZW5TZXJ2aWNlLnJlZnJlc2hUb2tlbihyZWZyZXNoVG9rZW4pLnBpcGUoXG4gICAgICAgIG1hcCgodG9rZW46IFVzZXJUb2tlbikgPT4ge1xuICAgICAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICAgIGRhdGUuc2V0U2Vjb25kcyhkYXRlLmdldFNlY29uZHMoKSArIHRva2VuLmV4cGlyZXNfaW4pO1xuICAgICAgICAgIHRva2VuLmV4cGlyYXRpb25fdGltZSA9IGRhdGUudG9KU09OKCk7XG4gICAgICAgICAgcmV0dXJuIG5ldyBBdXRoQWN0aW9ucy5SZWZyZXNoVXNlclRva2VuU3VjY2Vzcyh0b2tlbik7XG4gICAgICAgIH0sIGNhdGNoRXJyb3IoZXJyb3IgPT4gb2YobmV3IEF1dGhBY3Rpb25zLlJlZnJlc2hVc2VyVG9rZW5GYWlsKG1ha2VFcnJvclNlcmlhbGl6YWJsZShlcnJvcikpKSkpXG4gICAgICApO1xuICAgIH0pXG4gICk7XG5cbiAgQEVmZmVjdCgpXG4gIHJldm9rZVVzZXJUb2tlbiQ6IE9ic2VydmFibGU8XG4gICAgQXV0aEFjdGlvbnMuVXNlclRva2VuQWN0aW9uXG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKEF1dGhBY3Rpb25zLlJFVk9LRV9VU0VSX1RPS0VOKSxcbiAgICBtYXAoKGFjdGlvbjogQXV0aEFjdGlvbnMuUmV2b2tlVXNlclRva2VuKSA9PiB7XG4gICAgICByZXR1cm4gYWN0aW9uLnBheWxvYWQ7XG4gICAgfSksXG4gICAgbWVyZ2VNYXAoKHVzZXJUb2tlbjogVXNlclRva2VuKSA9PiB7XG4gICAgICByZXR1cm4gdGhpcy51c2VyVG9rZW5TZXJ2aWNlLnJldm9rZSh1c2VyVG9rZW4pLnBpcGUoXG4gICAgICAgIG1hcCgoKSA9PiBuZXcgQXV0aEFjdGlvbnMuUmV2b2tlVXNlclRva2VuU3VjY2Vzcyh1c2VyVG9rZW4pKSxcbiAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PiBvZihuZXcgQXV0aEFjdGlvbnMuUmV2b2tlVXNlclRva2VuRmFpbChlcnJvcikpKVxuICAgICAgKTtcbiAgICB9KVxuICApO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnMsXG4gICAgcHJpdmF0ZSB1c2VyVG9rZW5TZXJ2aWNlOiBVc2VyQXV0aGVudGljYXRpb25Ub2tlblNlcnZpY2VcbiAgKSB7fVxufVxuIl19