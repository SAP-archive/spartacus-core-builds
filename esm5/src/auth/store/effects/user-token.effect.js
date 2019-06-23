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
import { makeErrorSerializable } from '../../../util/serialization-utils';
import { Login } from '../actions/login-logout.action';
import { UserAuthenticationTokenService } from './../../services/user-authentication/user-authentication-token.service';
import * as fromActions from './../actions/user-token.action';
var UserTokenEffects = /** @class */ (function () {
    function UserTokenEffects(actions$, userTokenService) {
        var _this = this;
        this.actions$ = actions$;
        this.userTokenService = userTokenService;
        this.loadUserToken$ = this.actions$.pipe(ofType(fromActions.LOAD_USER_TOKEN), map((/**
         * @param {?} action
         * @return {?}
         */
        function (action) { return action.payload; })), mergeMap((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var userId = _a.userId, password = _a.password;
            return _this.userTokenService.loadToken(userId, password).pipe(map((/**
             * @param {?} token
             * @return {?}
             */
            function (token) {
                /** @type {?} */
                var date = new Date();
                date.setSeconds(date.getSeconds() + token.expires_in);
                token.expiration_time = date.toJSON();
                token.userId = USERID_CURRENT;
                return new fromActions.LoadUserTokenSuccess(token);
            })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                return of(new fromActions.LoadUserTokenFail(makeErrorSerializable(error)));
            })));
        })));
        this.login$ = this.actions$.pipe(ofType(fromActions.LOAD_USER_TOKEN_SUCCESS), map((/**
         * @return {?}
         */
        function () { return new Login(); })));
        this.refreshUserToken$ = this.actions$.pipe(ofType(fromActions.REFRESH_USER_TOKEN), map((/**
         * @param {?} action
         * @return {?}
         */
        function (action) { return action.payload; })), switchMap((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var refreshToken = _a.refreshToken;
            return _this.userTokenService.refreshToken(refreshToken).pipe(map((/**
             * @param {?} token
             * @return {?}
             */
            function (token) {
                /** @type {?} */
                var date = new Date();
                date.setSeconds(date.getSeconds() + token.expires_in);
                token.expiration_time = date.toJSON();
                token.userId = USERID_CURRENT;
                return new fromActions.RefreshUserTokenSuccess(token);
            }), catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) { return of(new fromActions.RefreshUserTokenFail(makeErrorSerializable(error))); }))));
        })));
    }
    UserTokenEffects.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    UserTokenEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: UserAuthenticationTokenService }
    ]; };
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
    return UserTokenEffects;
}());
export { UserTokenEffects };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci10b2tlbi5lZmZlY3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvYXV0aC9zdG9yZS9lZmZlY3RzL3VzZXItdG9rZW4uZWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3RFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNsRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUUxRSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFFdkQsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sd0VBQXdFLENBQUM7QUFDeEgsT0FBTyxLQUFLLFdBQVcsTUFBTSxnQ0FBZ0MsQ0FBQztBQUU5RDtJQTZDRSwwQkFDVSxRQUFpQixFQUNqQixnQkFBZ0Q7UUFGMUQsaUJBR0k7UUFGTSxhQUFRLEdBQVIsUUFBUSxDQUFTO1FBQ2pCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBZ0M7UUE1QzFELG1CQUFjLEdBQWdDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUM5RCxNQUFNLENBQUMsV0FBVyxDQUFDLGVBQWUsQ0FBQyxFQUNuQyxHQUFHOzs7O1FBQUMsVUFBQyxNQUFpQyxJQUFLLE9BQUEsTUFBTSxDQUFDLE9BQU8sRUFBZCxDQUFjLEVBQUMsRUFDMUQsUUFBUTs7OztRQUFDLFVBQUMsRUFBb0I7Z0JBQWxCLGtCQUFNLEVBQUUsc0JBQVE7WUFDMUIsT0FBQSxLQUFJLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQ3BELEdBQUc7Ozs7WUFBQyxVQUFDLEtBQWdCOztvQkFDYixJQUFJLEdBQUcsSUFBSSxJQUFJLEVBQUU7Z0JBQ3ZCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxHQUFHLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQztnQkFDdEQsS0FBSyxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7Z0JBQ3RDLEtBQUssQ0FBQyxNQUFNLEdBQUcsY0FBYyxDQUFDO2dCQUM5QixPQUFPLElBQUksV0FBVyxDQUFDLG9CQUFvQixDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3JELENBQUMsRUFBQyxFQUNGLFVBQVU7Ozs7WUFBQyxVQUFBLEtBQUs7Z0JBQ2QsT0FBQSxFQUFFLENBQUMsSUFBSSxXQUFXLENBQUMsaUJBQWlCLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUFuRSxDQUFtRSxFQUNwRSxDQUNGO1FBWEQsQ0FXQyxFQUNGLENBQ0YsQ0FBQztRQUdGLFdBQU0sR0FBc0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQzVDLE1BQU0sQ0FBQyxXQUFXLENBQUMsdUJBQXVCLENBQUMsRUFDM0MsR0FBRzs7O1FBQUMsY0FBTSxPQUFBLElBQUksS0FBSyxFQUFFLEVBQVgsQ0FBVyxFQUFDLENBQ3ZCLENBQUM7UUFHRixzQkFBaUIsR0FBZ0MsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ2pFLE1BQU0sQ0FBQyxXQUFXLENBQUMsa0JBQWtCLENBQUMsRUFDdEMsR0FBRzs7OztRQUFDLFVBQUMsTUFBb0MsSUFBSyxPQUFBLE1BQU0sQ0FBQyxPQUFPLEVBQWQsQ0FBYyxFQUFDLEVBQzdELFNBQVM7Ozs7UUFBQyxVQUFDLEVBQWdCO2dCQUFkLDhCQUFZO1lBQ3ZCLE9BQU8sS0FBSSxDQUFDLGdCQUFnQixDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsQ0FBQyxJQUFJLENBQzFELEdBQUc7Ozs7WUFBQyxVQUFDLEtBQWdCOztvQkFDYixJQUFJLEdBQUcsSUFBSSxJQUFJLEVBQUU7Z0JBQ3ZCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxHQUFHLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQztnQkFDdEQsS0FBSyxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7Z0JBQ3RDLEtBQUssQ0FBQyxNQUFNLEdBQUcsY0FBYyxDQUFDO2dCQUM5QixPQUFPLElBQUksV0FBVyxDQUFDLHVCQUF1QixDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3hELENBQUMsR0FBRSxVQUFVOzs7O1lBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxFQUFFLENBQUMsSUFBSSxXQUFXLENBQUMsb0JBQW9CLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUF0RSxDQUFzRSxFQUFDLENBQUMsQ0FDaEcsQ0FBQztRQUNKLENBQUMsRUFBQyxDQUNILENBQUM7SUFLQyxDQUFDOztnQkFoREwsVUFBVTs7OztnQkFYRixPQUFPO2dCQVFQLDhCQUE4Qjs7SUFNckM7UUFEQyxNQUFNLEVBQUU7MENBQ08sVUFBVTs0REFpQnhCO0lBR0Y7UUFEQyxNQUFNLEVBQUU7MENBQ0QsVUFBVTtvREFHaEI7SUFHRjtRQURDLE1BQU0sRUFBRTswQ0FDVSxVQUFVOytEQWMzQjtJQU1KLHVCQUFDO0NBQUEsQUFqREQsSUFpREM7U0FoRFksZ0JBQWdCOzs7SUFDM0IsMENBa0JFOztJQUVGLGtDQUlFOztJQUVGLDZDQWVFOzs7OztJQUdBLG9DQUF5Qjs7Ozs7SUFDekIsNENBQXdEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0LCBvZlR5cGUgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBjYXRjaEVycm9yLCBtYXAsIG1lcmdlTWFwLCBzd2l0Y2hNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBVU0VSSURfQ1VSUkVOVCB9IGZyb20gJy4uLy4uLy4uL29jYy91dGlscy9vY2MtY29uc3RhbnRzJztcbmltcG9ydCB7IG1ha2VFcnJvclNlcmlhbGl6YWJsZSB9IGZyb20gJy4uLy4uLy4uL3V0aWwvc2VyaWFsaXphdGlvbi11dGlscyc7XG5pbXBvcnQgeyBVc2VyVG9rZW4gfSBmcm9tICcuLi8uLi9tb2RlbHMvdG9rZW4tdHlwZXMubW9kZWwnO1xuaW1wb3J0IHsgTG9naW4gfSBmcm9tICcuLi9hY3Rpb25zL2xvZ2luLWxvZ291dC5hY3Rpb24nO1xuaW1wb3J0IHsgVXNlclRva2VuQWN0aW9uIH0gZnJvbSAnLi4vYWN0aW9ucy91c2VyLXRva2VuLmFjdGlvbic7XG5pbXBvcnQgeyBVc2VyQXV0aGVudGljYXRpb25Ub2tlblNlcnZpY2UgfSBmcm9tICcuLy4uLy4uL3NlcnZpY2VzL3VzZXItYXV0aGVudGljYXRpb24vdXNlci1hdXRoZW50aWNhdGlvbi10b2tlbi5zZXJ2aWNlJztcbmltcG9ydCAqIGFzIGZyb21BY3Rpb25zIGZyb20gJy4vLi4vYWN0aW9ucy91c2VyLXRva2VuLmFjdGlvbic7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBVc2VyVG9rZW5FZmZlY3RzIHtcbiAgQEVmZmVjdCgpXG4gIGxvYWRVc2VyVG9rZW4kOiBPYnNlcnZhYmxlPFVzZXJUb2tlbkFjdGlvbj4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKGZyb21BY3Rpb25zLkxPQURfVVNFUl9UT0tFTiksXG4gICAgbWFwKChhY3Rpb246IGZyb21BY3Rpb25zLkxvYWRVc2VyVG9rZW4pID0+IGFjdGlvbi5wYXlsb2FkKSxcbiAgICBtZXJnZU1hcCgoeyB1c2VySWQsIHBhc3N3b3JkIH0pID0+XG4gICAgICB0aGlzLnVzZXJUb2tlblNlcnZpY2UubG9hZFRva2VuKHVzZXJJZCwgcGFzc3dvcmQpLnBpcGUoXG4gICAgICAgIG1hcCgodG9rZW46IFVzZXJUb2tlbikgPT4ge1xuICAgICAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICAgIGRhdGUuc2V0U2Vjb25kcyhkYXRlLmdldFNlY29uZHMoKSArIHRva2VuLmV4cGlyZXNfaW4pO1xuICAgICAgICAgIHRva2VuLmV4cGlyYXRpb25fdGltZSA9IGRhdGUudG9KU09OKCk7XG4gICAgICAgICAgdG9rZW4udXNlcklkID0gVVNFUklEX0NVUlJFTlQ7XG4gICAgICAgICAgcmV0dXJuIG5ldyBmcm9tQWN0aW9ucy5Mb2FkVXNlclRva2VuU3VjY2Vzcyh0b2tlbik7XG4gICAgICAgIH0pLFxuICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+XG4gICAgICAgICAgb2YobmV3IGZyb21BY3Rpb25zLkxvYWRVc2VyVG9rZW5GYWlsKG1ha2VFcnJvclNlcmlhbGl6YWJsZShlcnJvcikpKVxuICAgICAgICApXG4gICAgICApXG4gICAgKVxuICApO1xuXG4gIEBFZmZlY3QoKVxuICBsb2dpbiQ6IE9ic2VydmFibGU8TG9naW4+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShmcm9tQWN0aW9ucy5MT0FEX1VTRVJfVE9LRU5fU1VDQ0VTUyksXG4gICAgbWFwKCgpID0+IG5ldyBMb2dpbigpKVxuICApO1xuXG4gIEBFZmZlY3QoKVxuICByZWZyZXNoVXNlclRva2VuJDogT2JzZXJ2YWJsZTxVc2VyVG9rZW5BY3Rpb24+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShmcm9tQWN0aW9ucy5SRUZSRVNIX1VTRVJfVE9LRU4pLFxuICAgIG1hcCgoYWN0aW9uOiBmcm9tQWN0aW9ucy5SZWZyZXNoVXNlclRva2VuKSA9PiBhY3Rpb24ucGF5bG9hZCksXG4gICAgc3dpdGNoTWFwKCh7IHJlZnJlc2hUb2tlbiB9KSA9PiB7XG4gICAgICByZXR1cm4gdGhpcy51c2VyVG9rZW5TZXJ2aWNlLnJlZnJlc2hUb2tlbihyZWZyZXNoVG9rZW4pLnBpcGUoXG4gICAgICAgIG1hcCgodG9rZW46IFVzZXJUb2tlbikgPT4ge1xuICAgICAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICAgIGRhdGUuc2V0U2Vjb25kcyhkYXRlLmdldFNlY29uZHMoKSArIHRva2VuLmV4cGlyZXNfaW4pO1xuICAgICAgICAgIHRva2VuLmV4cGlyYXRpb25fdGltZSA9IGRhdGUudG9KU09OKCk7XG4gICAgICAgICAgdG9rZW4udXNlcklkID0gVVNFUklEX0NVUlJFTlQ7XG4gICAgICAgICAgcmV0dXJuIG5ldyBmcm9tQWN0aW9ucy5SZWZyZXNoVXNlclRva2VuU3VjY2Vzcyh0b2tlbik7XG4gICAgICAgIH0sIGNhdGNoRXJyb3IoZXJyb3IgPT4gb2YobmV3IGZyb21BY3Rpb25zLlJlZnJlc2hVc2VyVG9rZW5GYWlsKG1ha2VFcnJvclNlcmlhbGl6YWJsZShlcnJvcikpKSkpXG4gICAgICApO1xuICAgIH0pXG4gICk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9ucyxcbiAgICBwcml2YXRlIHVzZXJUb2tlblNlcnZpY2U6IFVzZXJBdXRoZW50aWNhdGlvblRva2VuU2VydmljZVxuICApIHt9XG59XG4iXX0=