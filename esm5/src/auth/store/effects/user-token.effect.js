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
                token.userId = OCC_USER_ID_CURRENT;
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
        function (action) { return action.payload; })), exhaustMap((/**
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci10b2tlbi5lZmZlY3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvYXV0aC9zdG9yZS9lZmZlY3RzL3VzZXItdG9rZW4uZWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBRTFFLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLHNFQUFzRSxDQUFDO0FBQ3RILE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUUvQztJQThDRSwwQkFDVSxRQUFpQixFQUNqQixnQkFBZ0Q7UUFGMUQsaUJBR0k7UUFGTSxhQUFRLEdBQVIsUUFBUSxDQUFTO1FBQ2pCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBZ0M7UUE3QzFELG1CQUFjLEdBQTRDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUMxRSxNQUFNLENBQUMsV0FBVyxDQUFDLGVBQWUsQ0FBQyxFQUNuQyxHQUFHOzs7O1FBQUMsVUFBQyxNQUFpQyxJQUFLLE9BQUEsTUFBTSxDQUFDLE9BQU8sRUFBZCxDQUFjLEVBQUMsRUFDMUQsUUFBUTs7OztRQUFDLFVBQUMsRUFBb0I7Z0JBQWxCLGtCQUFNLEVBQUUsc0JBQVE7WUFDMUIsT0FBQSxLQUFJLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQ3BELEdBQUc7Ozs7WUFBQyxVQUFDLEtBQWdCOztvQkFDYixJQUFJLEdBQUcsSUFBSSxJQUFJLEVBQUU7Z0JBQ3ZCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxHQUFHLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQztnQkFDdEQsS0FBSyxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7Z0JBQ3RDLEtBQUssQ0FBQyxNQUFNLEdBQUcsbUJBQW1CLENBQUM7Z0JBQ25DLE9BQU8sSUFBSSxXQUFXLENBQUMsb0JBQW9CLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDckQsQ0FBQyxFQUFDLEVBQ0YsVUFBVTs7OztZQUFDLFVBQUEsS0FBSztnQkFDZCxPQUFBLEVBQUUsQ0FBQyxJQUFJLFdBQVcsQ0FBQyxpQkFBaUIsQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQW5FLENBQW1FLEVBQ3BFLENBQ0Y7UUFYRCxDQVdDLEVBQ0YsQ0FDRixDQUFDO1FBR0YsV0FBTSxHQUFrQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDeEQsTUFBTSxDQUFDLFdBQVcsQ0FBQyx1QkFBdUIsQ0FBQyxFQUMzQyxHQUFHOzs7UUFBQyxjQUFNLE9BQUEsSUFBSSxXQUFXLENBQUMsS0FBSyxFQUFFLEVBQXZCLENBQXVCLEVBQUMsQ0FDbkMsQ0FBQztRQUdGLHNCQUFpQixHQUViLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUNwQixNQUFNLENBQUMsV0FBVyxDQUFDLGtCQUFrQixDQUFDLEVBQ3RDLEdBQUc7Ozs7UUFBQyxVQUFDLE1BQW9DLElBQUssT0FBQSxNQUFNLENBQUMsT0FBTyxFQUFkLENBQWMsRUFBQyxFQUM3RCxVQUFVOzs7O1FBQUMsVUFBQyxFQUFnQjtnQkFBZCw4QkFBWTtZQUN4QixPQUFPLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLENBQUMsSUFBSSxDQUMxRCxHQUFHOzs7O1lBQUMsVUFBQyxLQUFnQjs7b0JBQ2IsSUFBSSxHQUFHLElBQUksSUFBSSxFQUFFO2dCQUN2QixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsR0FBRyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUM7Z0JBQ3RELEtBQUssQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO2dCQUN0QyxPQUFPLElBQUksV0FBVyxDQUFDLHVCQUF1QixDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3hELENBQUMsR0FBRSxVQUFVOzs7O1lBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxFQUFFLENBQUMsSUFBSSxXQUFXLENBQUMsb0JBQW9CLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUF0RSxDQUFzRSxFQUFDLENBQUMsQ0FDaEcsQ0FBQztRQUNKLENBQUMsRUFBQyxDQUNILENBQUM7SUFLQyxDQUFDOztnQkFqREwsVUFBVTs7OztnQkFURixPQUFPO2dCQU1QLDhCQUE4Qjs7SUFNckM7UUFEQyxNQUFNLEVBQUU7MENBQ08sVUFBVTs0REFpQnhCO0lBR0Y7UUFEQyxNQUFNLEVBQUU7MENBQ0QsVUFBVTtvREFHaEI7SUFHRjtRQURDLE1BQU0sRUFBRTswQ0FDVSxVQUFVOytEQWUzQjtJQU1KLHVCQUFDO0NBQUEsQUFsREQsSUFrREM7U0FqRFksZ0JBQWdCOzs7SUFDM0IsMENBa0JFOztJQUVGLGtDQUlFOztJQUVGLDZDQWdCRTs7Ozs7SUFHQSxvQ0FBeUI7Ozs7O0lBQ3pCLDRDQUF3RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCwgb2ZUeXBlIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgY2F0Y2hFcnJvciwgZXhoYXVzdE1hcCwgbWFwLCBtZXJnZU1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IE9DQ19VU0VSX0lEX0NVUlJFTlQgfSBmcm9tICcuLi8uLi8uLi9vY2MvdXRpbHMvb2NjLWNvbnN0YW50cyc7XG5pbXBvcnQgeyBtYWtlRXJyb3JTZXJpYWxpemFibGUgfSBmcm9tICcuLi8uLi8uLi91dGlsL3NlcmlhbGl6YXRpb24tdXRpbHMnO1xuaW1wb3J0IHsgVXNlclRva2VuIH0gZnJvbSAnLi4vLi4vbW9kZWxzL3Rva2VuLXR5cGVzLm1vZGVsJztcbmltcG9ydCB7IFVzZXJBdXRoZW50aWNhdGlvblRva2VuU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3VzZXItYXV0aGVudGljYXRpb24vdXNlci1hdXRoZW50aWNhdGlvbi10b2tlbi5zZXJ2aWNlJztcbmltcG9ydCB7IEF1dGhBY3Rpb25zIH0gZnJvbSAnLi4vYWN0aW9ucy9pbmRleCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBVc2VyVG9rZW5FZmZlY3RzIHtcbiAgQEVmZmVjdCgpXG4gIGxvYWRVc2VyVG9rZW4kOiBPYnNlcnZhYmxlPEF1dGhBY3Rpb25zLlVzZXJUb2tlbkFjdGlvbj4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKEF1dGhBY3Rpb25zLkxPQURfVVNFUl9UT0tFTiksXG4gICAgbWFwKChhY3Rpb246IEF1dGhBY3Rpb25zLkxvYWRVc2VyVG9rZW4pID0+IGFjdGlvbi5wYXlsb2FkKSxcbiAgICBtZXJnZU1hcCgoeyB1c2VySWQsIHBhc3N3b3JkIH0pID0+XG4gICAgICB0aGlzLnVzZXJUb2tlblNlcnZpY2UubG9hZFRva2VuKHVzZXJJZCwgcGFzc3dvcmQpLnBpcGUoXG4gICAgICAgIG1hcCgodG9rZW46IFVzZXJUb2tlbikgPT4ge1xuICAgICAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICAgIGRhdGUuc2V0U2Vjb25kcyhkYXRlLmdldFNlY29uZHMoKSArIHRva2VuLmV4cGlyZXNfaW4pO1xuICAgICAgICAgIHRva2VuLmV4cGlyYXRpb25fdGltZSA9IGRhdGUudG9KU09OKCk7XG4gICAgICAgICAgdG9rZW4udXNlcklkID0gT0NDX1VTRVJfSURfQ1VSUkVOVDtcbiAgICAgICAgICByZXR1cm4gbmV3IEF1dGhBY3Rpb25zLkxvYWRVc2VyVG9rZW5TdWNjZXNzKHRva2VuKTtcbiAgICAgICAgfSksXG4gICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT5cbiAgICAgICAgICBvZihuZXcgQXV0aEFjdGlvbnMuTG9hZFVzZXJUb2tlbkZhaWwobWFrZUVycm9yU2VyaWFsaXphYmxlKGVycm9yKSkpXG4gICAgICAgIClcbiAgICAgIClcbiAgICApXG4gICk7XG5cbiAgQEVmZmVjdCgpXG4gIGxvZ2luJDogT2JzZXJ2YWJsZTxBdXRoQWN0aW9ucy5Mb2dpbj4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKEF1dGhBY3Rpb25zLkxPQURfVVNFUl9UT0tFTl9TVUNDRVNTKSxcbiAgICBtYXAoKCkgPT4gbmV3IEF1dGhBY3Rpb25zLkxvZ2luKCkpXG4gICk7XG5cbiAgQEVmZmVjdCgpXG4gIHJlZnJlc2hVc2VyVG9rZW4kOiBPYnNlcnZhYmxlPFxuICAgIEF1dGhBY3Rpb25zLlVzZXJUb2tlbkFjdGlvblxuICA+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShBdXRoQWN0aW9ucy5SRUZSRVNIX1VTRVJfVE9LRU4pLFxuICAgIG1hcCgoYWN0aW9uOiBBdXRoQWN0aW9ucy5SZWZyZXNoVXNlclRva2VuKSA9PiBhY3Rpb24ucGF5bG9hZCksXG4gICAgZXhoYXVzdE1hcCgoeyByZWZyZXNoVG9rZW4gfSkgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMudXNlclRva2VuU2VydmljZS5yZWZyZXNoVG9rZW4ocmVmcmVzaFRva2VuKS5waXBlKFxuICAgICAgICBtYXAoKHRva2VuOiBVc2VyVG9rZW4pID0+IHtcbiAgICAgICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoKTtcbiAgICAgICAgICBkYXRlLnNldFNlY29uZHMoZGF0ZS5nZXRTZWNvbmRzKCkgKyB0b2tlbi5leHBpcmVzX2luKTtcbiAgICAgICAgICB0b2tlbi5leHBpcmF0aW9uX3RpbWUgPSBkYXRlLnRvSlNPTigpO1xuICAgICAgICAgIHJldHVybiBuZXcgQXV0aEFjdGlvbnMuUmVmcmVzaFVzZXJUb2tlblN1Y2Nlc3ModG9rZW4pO1xuICAgICAgICB9LCBjYXRjaEVycm9yKGVycm9yID0+IG9mKG5ldyBBdXRoQWN0aW9ucy5SZWZyZXNoVXNlclRva2VuRmFpbChtYWtlRXJyb3JTZXJpYWxpemFibGUoZXJyb3IpKSkpKVxuICAgICAgKTtcbiAgICB9KVxuICApO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnMsXG4gICAgcHJpdmF0ZSB1c2VyVG9rZW5TZXJ2aWNlOiBVc2VyQXV0aGVudGljYXRpb25Ub2tlblNlcnZpY2VcbiAgKSB7fVxufVxuIl19