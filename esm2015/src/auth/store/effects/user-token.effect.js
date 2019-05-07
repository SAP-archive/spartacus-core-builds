/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as fromActions from './../actions/user-token.action';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';
import { UserAuthenticationTokenService } from './../../services/user-authentication/user-authentication-token.service';
import { Login } from '../actions/login-logout.action';
export class UserTokenEffects {
    /**
     * @param {?} actions$
     * @param {?} userTokenService
     */
    constructor(actions$, userTokenService) {
        this.actions$ = actions$;
        this.userTokenService = userTokenService;
        this.loadUserToken$ = this.actions$.pipe(ofType(fromActions.LOAD_USER_TOKEN), map((action) => action.payload), mergeMap(({ userId, password }) => {
            return this.userTokenService.loadToken(userId, password).pipe(map((token) => {
                /** @type {?} */
                const date = new Date();
                date.setSeconds(date.getSeconds() + token.expires_in);
                token.userId = userId;
                token.expiration_time = date;
                return new fromActions.LoadUserTokenSuccess(token);
            }), catchError(error => of(new fromActions.LoadUserTokenFail(error))));
        }));
        this.login$ = this.actions$.pipe(ofType(fromActions.LOAD_USER_TOKEN_SUCCESS), map(() => new Login()));
        this.refreshUserToken$ = this.actions$.pipe(ofType(fromActions.REFRESH_USER_TOKEN), map((action) => action.payload), switchMap(({ userId, refreshToken }) => {
            return this.userTokenService.refreshToken(refreshToken).pipe(map((token) => {
                token.userId = userId;
                /** @type {?} */
                const date = new Date();
                date.setSeconds(date.getSeconds() + token.expires_in);
                token.userId = userId;
                token.expiration_time = date;
                return new fromActions.RefreshUserTokenSuccess(token);
            }, catchError(error => of(new fromActions.RefreshUserTokenFail(error)))));
        }));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci10b2tlbi5lZmZlY3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvYXV0aC9zdG9yZS9lZmZlY3RzL3VzZXItdG9rZW4uZWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEQsT0FBTyxLQUFLLFdBQVcsTUFBTSxnQ0FBZ0MsQ0FBQztBQUM5RCxPQUFPLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsVUFBVSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHdEUsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sd0VBQXdFLENBQUM7QUFHeEgsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBR3ZELE1BQU0sT0FBTyxnQkFBZ0I7Ozs7O0lBMkMzQixZQUNVLFFBQWlCLEVBQ2pCLGdCQUFnRDtRQURoRCxhQUFRLEdBQVIsUUFBUSxDQUFTO1FBQ2pCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBZ0M7UUEzQzFELG1CQUFjLEdBQWdDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUM5RCxNQUFNLENBQUMsV0FBVyxDQUFDLGVBQWUsQ0FBQyxFQUNuQyxHQUFHLENBQUMsQ0FBQyxNQUFpQyxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQzFELFFBQVEsQ0FBQyxDQUFDLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUU7WUFDaEMsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQzNELEdBQUcsQ0FBQyxDQUFDLEtBQWdCLEVBQUUsRUFBRTs7c0JBQ2pCLElBQUksR0FBRyxJQUFJLElBQUksRUFBRTtnQkFDdkIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLEdBQUcsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDO2dCQUN0RCxLQUFLLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztnQkFDdEIsS0FBSyxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7Z0JBQzdCLE9BQU8sSUFBSSxXQUFXLENBQUMsb0JBQW9CLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDckQsQ0FBQyxDQUFDLEVBQ0YsVUFBVSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksV0FBVyxDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FDbEUsQ0FBQztRQUNKLENBQUMsQ0FBQyxDQUNILENBQUM7UUFHRixXQUFNLEdBQXNCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUM1QyxNQUFNLENBQUMsV0FBVyxDQUFDLHVCQUF1QixDQUFDLEVBQzNDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLEtBQUssRUFBRSxDQUFDLENBQ3ZCLENBQUM7UUFHRixzQkFBaUIsR0FBZ0MsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ2pFLE1BQU0sQ0FBQyxXQUFXLENBQUMsa0JBQWtCLENBQUMsRUFDdEMsR0FBRyxDQUFDLENBQUMsTUFBb0MsRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUM3RCxTQUFTLENBQUMsQ0FBQyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsRUFBRSxFQUFFO1lBQ3JDLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsQ0FBQyxJQUFJLENBQzFELEdBQUcsQ0FBQyxDQUFDLEtBQWdCLEVBQUUsRUFBRTtnQkFDdkIsS0FBSyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7O3NCQUNoQixJQUFJLEdBQUcsSUFBSSxJQUFJLEVBQUU7Z0JBQ3ZCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxHQUFHLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQztnQkFDdEQsS0FBSyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7Z0JBQ3RCLEtBQUssQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO2dCQUM3QixPQUFPLElBQUksV0FBVyxDQUFDLHVCQUF1QixDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3hELENBQUMsRUFBRSxVQUFVLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxXQUFXLENBQUMsb0JBQW9CLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQ3pFLENBQUM7UUFDSixDQUFDLENBQUMsQ0FDSCxDQUFDO0lBS0MsQ0FBQzs7O1lBL0NMLFVBQVU7Ozs7WUFYRixPQUFPO1lBTVAsOEJBQThCOztBQVFyQztJQURDLE1BQU0sRUFBRTtzQ0FDTyxVQUFVO3dEQWV4QjtBQUdGO0lBREMsTUFBTSxFQUFFO3NDQUNELFVBQVU7Z0RBR2hCO0FBR0Y7SUFEQyxNQUFNLEVBQUU7c0NBQ1UsVUFBVTsyREFlM0I7OztJQXhDRiwwQ0FnQkU7O0lBRUYsa0NBSUU7O0lBRUYsNkNBZ0JFOzs7OztJQUdBLG9DQUF5Qjs7Ozs7SUFDekIsNENBQXdEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QsIG9mVHlwZSB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuaW1wb3J0ICogYXMgZnJvbUFjdGlvbnMgZnJvbSAnLi8uLi9hY3Rpb25zL3VzZXItdG9rZW4uYWN0aW9uJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBjYXRjaEVycm9yLCBtYXAsIG1lcmdlTWFwLCBzd2l0Y2hNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IFVzZXJUb2tlbiB9IGZyb20gJy4uLy4uL21vZGVscy90b2tlbi10eXBlcy5tb2RlbCc7XG5pbXBvcnQgeyBVc2VyQXV0aGVudGljYXRpb25Ub2tlblNlcnZpY2UgfSBmcm9tICcuLy4uLy4uL3NlcnZpY2VzL3VzZXItYXV0aGVudGljYXRpb24vdXNlci1hdXRoZW50aWNhdGlvbi10b2tlbi5zZXJ2aWNlJztcblxuaW1wb3J0IHsgVXNlclRva2VuQWN0aW9uIH0gZnJvbSAnLi4vYWN0aW9ucy91c2VyLXRva2VuLmFjdGlvbic7XG5pbXBvcnQgeyBMb2dpbiB9IGZyb20gJy4uL2FjdGlvbnMvbG9naW4tbG9nb3V0LmFjdGlvbic7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBVc2VyVG9rZW5FZmZlY3RzIHtcbiAgQEVmZmVjdCgpXG4gIGxvYWRVc2VyVG9rZW4kOiBPYnNlcnZhYmxlPFVzZXJUb2tlbkFjdGlvbj4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKGZyb21BY3Rpb25zLkxPQURfVVNFUl9UT0tFTiksXG4gICAgbWFwKChhY3Rpb246IGZyb21BY3Rpb25zLkxvYWRVc2VyVG9rZW4pID0+IGFjdGlvbi5wYXlsb2FkKSxcbiAgICBtZXJnZU1hcCgoeyB1c2VySWQsIHBhc3N3b3JkIH0pID0+IHtcbiAgICAgIHJldHVybiB0aGlzLnVzZXJUb2tlblNlcnZpY2UubG9hZFRva2VuKHVzZXJJZCwgcGFzc3dvcmQpLnBpcGUoXG4gICAgICAgIG1hcCgodG9rZW46IFVzZXJUb2tlbikgPT4ge1xuICAgICAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICAgIGRhdGUuc2V0U2Vjb25kcyhkYXRlLmdldFNlY29uZHMoKSArIHRva2VuLmV4cGlyZXNfaW4pO1xuICAgICAgICAgIHRva2VuLnVzZXJJZCA9IHVzZXJJZDtcbiAgICAgICAgICB0b2tlbi5leHBpcmF0aW9uX3RpbWUgPSBkYXRlO1xuICAgICAgICAgIHJldHVybiBuZXcgZnJvbUFjdGlvbnMuTG9hZFVzZXJUb2tlblN1Y2Nlc3ModG9rZW4pO1xuICAgICAgICB9KSxcbiAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PiBvZihuZXcgZnJvbUFjdGlvbnMuTG9hZFVzZXJUb2tlbkZhaWwoZXJyb3IpKSlcbiAgICAgICk7XG4gICAgfSlcbiAgKTtcblxuICBARWZmZWN0KClcbiAgbG9naW4kOiBPYnNlcnZhYmxlPExvZ2luPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoZnJvbUFjdGlvbnMuTE9BRF9VU0VSX1RPS0VOX1NVQ0NFU1MpLFxuICAgIG1hcCgoKSA9PiBuZXcgTG9naW4oKSlcbiAgKTtcblxuICBARWZmZWN0KClcbiAgcmVmcmVzaFVzZXJUb2tlbiQ6IE9ic2VydmFibGU8VXNlclRva2VuQWN0aW9uPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoZnJvbUFjdGlvbnMuUkVGUkVTSF9VU0VSX1RPS0VOKSxcbiAgICBtYXAoKGFjdGlvbjogZnJvbUFjdGlvbnMuUmVmcmVzaFVzZXJUb2tlbikgPT4gYWN0aW9uLnBheWxvYWQpLFxuICAgIHN3aXRjaE1hcCgoeyB1c2VySWQsIHJlZnJlc2hUb2tlbiB9KSA9PiB7XG4gICAgICByZXR1cm4gdGhpcy51c2VyVG9rZW5TZXJ2aWNlLnJlZnJlc2hUb2tlbihyZWZyZXNoVG9rZW4pLnBpcGUoXG4gICAgICAgIG1hcCgodG9rZW46IFVzZXJUb2tlbikgPT4ge1xuICAgICAgICAgIHRva2VuLnVzZXJJZCA9IHVzZXJJZDtcbiAgICAgICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoKTtcbiAgICAgICAgICBkYXRlLnNldFNlY29uZHMoZGF0ZS5nZXRTZWNvbmRzKCkgKyB0b2tlbi5leHBpcmVzX2luKTtcbiAgICAgICAgICB0b2tlbi51c2VySWQgPSB1c2VySWQ7XG4gICAgICAgICAgdG9rZW4uZXhwaXJhdGlvbl90aW1lID0gZGF0ZTtcbiAgICAgICAgICByZXR1cm4gbmV3IGZyb21BY3Rpb25zLlJlZnJlc2hVc2VyVG9rZW5TdWNjZXNzKHRva2VuKTtcbiAgICAgICAgfSwgY2F0Y2hFcnJvcihlcnJvciA9PiBvZihuZXcgZnJvbUFjdGlvbnMuUmVmcmVzaFVzZXJUb2tlbkZhaWwoZXJyb3IpKSkpXG4gICAgICApO1xuICAgIH0pXG4gICk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9ucyxcbiAgICBwcml2YXRlIHVzZXJUb2tlblNlcnZpY2U6IFVzZXJBdXRoZW50aWNhdGlvblRva2VuU2VydmljZVxuICApIHt9XG59XG4iXX0=