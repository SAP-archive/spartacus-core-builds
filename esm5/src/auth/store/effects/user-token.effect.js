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
import { UserAuthenticationTokenService } from '../../services/user-authentication/user-authentication-token.service';
import { AuthActions } from '../actions/index';
var UserTokenEffects = /** @class */ (function () {
    function UserTokenEffects(actions$, userTokenService) {
        var _this = this;
        this.actions$ = actions$;
        this.userTokenService = userTokenService;
        this.loadUserToken$ = this.actions$.pipe(ofType(AuthActions.LOAD_USER_TOKEN), map((/**
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
                return new AuthActions.LoadUserTokenSuccess(token);
            })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                return of(new AuthActions.LoadUserTokenFail(makeErrorSerializable(error)));
            })));
        })));
        this.login$ = this.actions$.pipe(ofType(AuthActions.LOAD_USER_TOKEN_SUCCESS), map((/**
         * @return {?}
         */
        function () { return new AuthActions.Login(); })));
        this.refreshUserToken$ = this.actions$.pipe(ofType(AuthActions.REFRESH_USER_TOKEN), map((/**
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
                return new AuthActions.RefreshUserTokenSuccess(token);
            }), catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) { return of(new AuthActions.RefreshUserTokenFail(makeErrorSerializable(error))); }))));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci10b2tlbi5lZmZlY3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvYXV0aC9zdG9yZS9lZmZlY3RzL3VzZXItdG9rZW4uZWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3RFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNsRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUUxRSxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSxzRUFBc0UsQ0FBQztBQUN0SCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFFL0M7SUErQ0UsMEJBQ1UsUUFBaUIsRUFDakIsZ0JBQWdEO1FBRjFELGlCQUdJO1FBRk0sYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUNqQixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWdDO1FBOUMxRCxtQkFBYyxHQUE0QyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDMUUsTUFBTSxDQUFDLFdBQVcsQ0FBQyxlQUFlLENBQUMsRUFDbkMsR0FBRzs7OztRQUFDLFVBQUMsTUFBaUMsSUFBSyxPQUFBLE1BQU0sQ0FBQyxPQUFPLEVBQWQsQ0FBYyxFQUFDLEVBQzFELFFBQVE7Ozs7UUFBQyxVQUFDLEVBQW9CO2dCQUFsQixrQkFBTSxFQUFFLHNCQUFRO1lBQzFCLE9BQUEsS0FBSSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUNwRCxHQUFHOzs7O1lBQUMsVUFBQyxLQUFnQjs7b0JBQ2IsSUFBSSxHQUFHLElBQUksSUFBSSxFQUFFO2dCQUN2QixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsR0FBRyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUM7Z0JBQ3RELEtBQUssQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO2dCQUN0QyxLQUFLLENBQUMsTUFBTSxHQUFHLGNBQWMsQ0FBQztnQkFDOUIsT0FBTyxJQUFJLFdBQVcsQ0FBQyxvQkFBb0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNyRCxDQUFDLEVBQUMsRUFDRixVQUFVOzs7O1lBQUMsVUFBQSxLQUFLO2dCQUNkLE9BQUEsRUFBRSxDQUFDLElBQUksV0FBVyxDQUFDLGlCQUFpQixDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFBbkUsQ0FBbUUsRUFDcEUsQ0FDRjtRQVhELENBV0MsRUFDRixDQUNGLENBQUM7UUFHRixXQUFNLEdBQWtDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUN4RCxNQUFNLENBQUMsV0FBVyxDQUFDLHVCQUF1QixDQUFDLEVBQzNDLEdBQUc7OztRQUFDLGNBQU0sT0FBQSxJQUFJLFdBQVcsQ0FBQyxLQUFLLEVBQUUsRUFBdkIsQ0FBdUIsRUFBQyxDQUNuQyxDQUFDO1FBR0Ysc0JBQWlCLEdBRWIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ3BCLE1BQU0sQ0FBQyxXQUFXLENBQUMsa0JBQWtCLENBQUMsRUFDdEMsR0FBRzs7OztRQUFDLFVBQUMsTUFBb0MsSUFBSyxPQUFBLE1BQU0sQ0FBQyxPQUFPLEVBQWQsQ0FBYyxFQUFDLEVBQzdELFNBQVM7Ozs7UUFBQyxVQUFDLEVBQWdCO2dCQUFkLDhCQUFZO1lBQ3ZCLE9BQU8sS0FBSSxDQUFDLGdCQUFnQixDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsQ0FBQyxJQUFJLENBQzFELEdBQUc7Ozs7WUFBQyxVQUFDLEtBQWdCOztvQkFDYixJQUFJLEdBQUcsSUFBSSxJQUFJLEVBQUU7Z0JBQ3ZCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxHQUFHLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQztnQkFDdEQsS0FBSyxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7Z0JBQ3RDLEtBQUssQ0FBQyxNQUFNLEdBQUcsY0FBYyxDQUFDO2dCQUM5QixPQUFPLElBQUksV0FBVyxDQUFDLHVCQUF1QixDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3hELENBQUMsR0FBRSxVQUFVOzs7O1lBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxFQUFFLENBQUMsSUFBSSxXQUFXLENBQUMsb0JBQW9CLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUF0RSxDQUFzRSxFQUFDLENBQUMsQ0FDaEcsQ0FBQztRQUNKLENBQUMsRUFBQyxDQUNILENBQUM7SUFLQyxDQUFDOztnQkFsREwsVUFBVTs7OztnQkFURixPQUFPO2dCQU1QLDhCQUE4Qjs7SUFNckM7UUFEQyxNQUFNLEVBQUU7MENBQ08sVUFBVTs0REFpQnhCO0lBR0Y7UUFEQyxNQUFNLEVBQUU7MENBQ0QsVUFBVTtvREFHaEI7SUFHRjtRQURDLE1BQU0sRUFBRTswQ0FDVSxVQUFVOytEQWdCM0I7SUFNSix1QkFBQztDQUFBLEFBbkRELElBbURDO1NBbERZLGdCQUFnQjs7O0lBQzNCLDBDQWtCRTs7SUFFRixrQ0FJRTs7SUFFRiw2Q0FpQkU7Ozs7O0lBR0Esb0NBQXlCOzs7OztJQUN6Qiw0Q0FBd0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QsIG9mVHlwZSB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGNhdGNoRXJyb3IsIG1hcCwgbWVyZ2VNYXAsIHN3aXRjaE1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFVTRVJJRF9DVVJSRU5UIH0gZnJvbSAnLi4vLi4vLi4vb2NjL3V0aWxzL29jYy1jb25zdGFudHMnO1xuaW1wb3J0IHsgbWFrZUVycm9yU2VyaWFsaXphYmxlIH0gZnJvbSAnLi4vLi4vLi4vdXRpbC9zZXJpYWxpemF0aW9uLXV0aWxzJztcbmltcG9ydCB7IFVzZXJUb2tlbiB9IGZyb20gJy4uLy4uL21vZGVscy90b2tlbi10eXBlcy5tb2RlbCc7XG5pbXBvcnQgeyBVc2VyQXV0aGVudGljYXRpb25Ub2tlblNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy91c2VyLWF1dGhlbnRpY2F0aW9uL3VzZXItYXV0aGVudGljYXRpb24tdG9rZW4uc2VydmljZSc7XG5pbXBvcnQgeyBBdXRoQWN0aW9ucyB9IGZyb20gJy4uL2FjdGlvbnMvaW5kZXgnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVXNlclRva2VuRWZmZWN0cyB7XG4gIEBFZmZlY3QoKVxuICBsb2FkVXNlclRva2VuJDogT2JzZXJ2YWJsZTxBdXRoQWN0aW9ucy5Vc2VyVG9rZW5BY3Rpb24+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShBdXRoQWN0aW9ucy5MT0FEX1VTRVJfVE9LRU4pLFxuICAgIG1hcCgoYWN0aW9uOiBBdXRoQWN0aW9ucy5Mb2FkVXNlclRva2VuKSA9PiBhY3Rpb24ucGF5bG9hZCksXG4gICAgbWVyZ2VNYXAoKHsgdXNlcklkLCBwYXNzd29yZCB9KSA9PlxuICAgICAgdGhpcy51c2VyVG9rZW5TZXJ2aWNlLmxvYWRUb2tlbih1c2VySWQsIHBhc3N3b3JkKS5waXBlKFxuICAgICAgICBtYXAoKHRva2VuOiBVc2VyVG9rZW4pID0+IHtcbiAgICAgICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoKTtcbiAgICAgICAgICBkYXRlLnNldFNlY29uZHMoZGF0ZS5nZXRTZWNvbmRzKCkgKyB0b2tlbi5leHBpcmVzX2luKTtcbiAgICAgICAgICB0b2tlbi5leHBpcmF0aW9uX3RpbWUgPSBkYXRlLnRvSlNPTigpO1xuICAgICAgICAgIHRva2VuLnVzZXJJZCA9IFVTRVJJRF9DVVJSRU5UO1xuICAgICAgICAgIHJldHVybiBuZXcgQXV0aEFjdGlvbnMuTG9hZFVzZXJUb2tlblN1Y2Nlc3ModG9rZW4pO1xuICAgICAgICB9KSxcbiAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PlxuICAgICAgICAgIG9mKG5ldyBBdXRoQWN0aW9ucy5Mb2FkVXNlclRva2VuRmFpbChtYWtlRXJyb3JTZXJpYWxpemFibGUoZXJyb3IpKSlcbiAgICAgICAgKVxuICAgICAgKVxuICAgIClcbiAgKTtcblxuICBARWZmZWN0KClcbiAgbG9naW4kOiBPYnNlcnZhYmxlPEF1dGhBY3Rpb25zLkxvZ2luPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoQXV0aEFjdGlvbnMuTE9BRF9VU0VSX1RPS0VOX1NVQ0NFU1MpLFxuICAgIG1hcCgoKSA9PiBuZXcgQXV0aEFjdGlvbnMuTG9naW4oKSlcbiAgKTtcblxuICBARWZmZWN0KClcbiAgcmVmcmVzaFVzZXJUb2tlbiQ6IE9ic2VydmFibGU8XG4gICAgQXV0aEFjdGlvbnMuVXNlclRva2VuQWN0aW9uXG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKEF1dGhBY3Rpb25zLlJFRlJFU0hfVVNFUl9UT0tFTiksXG4gICAgbWFwKChhY3Rpb246IEF1dGhBY3Rpb25zLlJlZnJlc2hVc2VyVG9rZW4pID0+IGFjdGlvbi5wYXlsb2FkKSxcbiAgICBzd2l0Y2hNYXAoKHsgcmVmcmVzaFRva2VuIH0pID0+IHtcbiAgICAgIHJldHVybiB0aGlzLnVzZXJUb2tlblNlcnZpY2UucmVmcmVzaFRva2VuKHJlZnJlc2hUb2tlbikucGlwZShcbiAgICAgICAgbWFwKCh0b2tlbjogVXNlclRva2VuKSA9PiB7XG4gICAgICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgICAgICAgZGF0ZS5zZXRTZWNvbmRzKGRhdGUuZ2V0U2Vjb25kcygpICsgdG9rZW4uZXhwaXJlc19pbik7XG4gICAgICAgICAgdG9rZW4uZXhwaXJhdGlvbl90aW1lID0gZGF0ZS50b0pTT04oKTtcbiAgICAgICAgICB0b2tlbi51c2VySWQgPSBVU0VSSURfQ1VSUkVOVDtcbiAgICAgICAgICByZXR1cm4gbmV3IEF1dGhBY3Rpb25zLlJlZnJlc2hVc2VyVG9rZW5TdWNjZXNzKHRva2VuKTtcbiAgICAgICAgfSwgY2F0Y2hFcnJvcihlcnJvciA9PiBvZihuZXcgQXV0aEFjdGlvbnMuUmVmcmVzaFVzZXJUb2tlbkZhaWwobWFrZUVycm9yU2VyaWFsaXphYmxlKGVycm9yKSkpKSlcbiAgICAgICk7XG4gICAgfSlcbiAgKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zLFxuICAgIHByaXZhdGUgdXNlclRva2VuU2VydmljZTogVXNlckF1dGhlbnRpY2F0aW9uVG9rZW5TZXJ2aWNlXG4gICkge31cbn1cbiJdfQ==