/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';
import { LoadUserToken, Logout } from '../../../auth/index';
import { UserConnector } from '../../connectors/user/user.connector';
import * as fromActions from '../actions/user-register.action';
var UserRegisterEffects = /** @class */ (function () {
    function UserRegisterEffects(actions$, userConnector) {
        var _this = this;
        this.actions$ = actions$;
        this.userConnector = userConnector;
        this.registerUser$ = this.actions$.pipe(ofType(fromActions.REGISTER_USER), map(function (action) { return action.payload; }), mergeMap(function (user) {
            return _this.userConnector.register(user).pipe(switchMap(function (_result) { return [
                new LoadUserToken({
                    userId: user.uid,
                    password: user.password,
                }),
                new fromActions.RegisterUserSuccess(),
            ]; }), catchError(function (error) { return of(new fromActions.RegisterUserFail(error)); }));
        }));
        this.removeUser$ = this.actions$.pipe(ofType(fromActions.REMOVE_USER), map(function (action) { return action.payload; }), mergeMap(function (userId) {
            return _this.userConnector.remove(userId).pipe(switchMap(function (_result) { return [
                new fromActions.RemoveUserSuccess(),
                new Logout(),
            ]; }), catchError(function (error) { return of(new fromActions.RemoveUserFail(error)); }));
        }));
    }
    UserRegisterEffects.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    UserRegisterEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: UserConnector }
    ]; };
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Observable)
    ], UserRegisterEffects.prototype, "registerUser$", void 0);
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Observable)
    ], UserRegisterEffects.prototype, "removeUser$", void 0);
    return UserRegisterEffects;
}());
export { UserRegisterEffects };
if (false) {
    /** @type {?} */
    UserRegisterEffects.prototype.registerUser$;
    /** @type {?} */
    UserRegisterEffects.prototype.removeUser$;
    /**
     * @type {?}
     * @private
     */
    UserRegisterEffects.prototype.actions$;
    /**
     * @type {?}
     * @private
     */
    UserRegisterEffects.prototype.userConnector;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1yZWdpc3Rlci5lZmZlY3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvdXNlci9zdG9yZS9lZmZlY3RzL3VzZXItcmVnaXN0ZXIuZWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3RFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFNUQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3JFLE9BQU8sS0FBSyxXQUFXLE1BQU0saUNBQWlDLENBQUM7QUFFL0Q7SUF1Q0UsNkJBQ1UsUUFBaUIsRUFDakIsYUFBNEI7UUFGdEMsaUJBR0k7UUFGTSxhQUFRLEdBQVIsUUFBUSxDQUFTO1FBQ2pCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBdEN0QyxrQkFBYSxHQUVULElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUNwQixNQUFNLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxFQUNqQyxHQUFHLENBQUMsVUFBQyxNQUFnQyxJQUFLLE9BQUEsTUFBTSxDQUFDLE9BQU8sRUFBZCxDQUFjLENBQUMsRUFDekQsUUFBUSxDQUFDLFVBQUMsSUFBZ0I7WUFDeEIsT0FBQSxLQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQ3BDLFNBQVMsQ0FBQyxVQUFBLE9BQU8sSUFBSSxPQUFBO2dCQUNuQixJQUFJLGFBQWEsQ0FBQztvQkFDaEIsTUFBTSxFQUFFLElBQUksQ0FBQyxHQUFHO29CQUNoQixRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7aUJBQ3hCLENBQUM7Z0JBQ0YsSUFBSSxXQUFXLENBQUMsbUJBQW1CLEVBQUU7YUFDdEMsRUFOb0IsQ0FNcEIsQ0FBQyxFQUNGLFVBQVUsQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLEVBQUUsQ0FBQyxJQUFJLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUEzQyxDQUEyQyxDQUFDLENBQ2pFO1FBVEQsQ0FTQyxDQUNGLENBQ0YsQ0FBQztRQUdGLGdCQUFXLEdBRVAsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ3BCLE1BQU0sQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLEVBQy9CLEdBQUcsQ0FBQyxVQUFDLE1BQThCLElBQUssT0FBQSxNQUFNLENBQUMsT0FBTyxFQUFkLENBQWMsQ0FBQyxFQUN2RCxRQUFRLENBQUMsVUFBQyxNQUFjO1lBQ3RCLE9BQU8sS0FBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUMzQyxTQUFTLENBQUMsVUFBQSxPQUFPLElBQUksT0FBQTtnQkFDbkIsSUFBSSxXQUFXLENBQUMsaUJBQWlCLEVBQUU7Z0JBQ25DLElBQUksTUFBTSxFQUFFO2FBQ2IsRUFIb0IsQ0FHcEIsQ0FBQyxFQUNGLFVBQVUsQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLEVBQUUsQ0FBQyxJQUFJLFdBQVcsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBekMsQ0FBeUMsQ0FBQyxDQUMvRCxDQUFDO1FBQ0osQ0FBQyxDQUFDLENBQ0gsQ0FBQztJQUtDLENBQUM7O2dCQTFDTCxVQUFVOzs7O2dCQVJGLE9BQU87Z0JBS1AsYUFBYTs7SUFNcEI7UUFEQyxNQUFNLEVBQUU7MENBQ00sVUFBVTs4REFpQnZCO0lBR0Y7UUFEQyxNQUFNLEVBQUU7MENBQ0ksVUFBVTs0REFjckI7SUFNSiwwQkFBQztDQUFBLEFBM0NELElBMkNDO1NBMUNZLG1CQUFtQjs7O0lBQzlCLDRDQWtCRTs7SUFFRiwwQ0FlRTs7Ozs7SUFHQSx1Q0FBeUI7Ozs7O0lBQ3pCLDRDQUFvQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCwgb2ZUeXBlIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgY2F0Y2hFcnJvciwgbWFwLCBtZXJnZU1hcCwgc3dpdGNoTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgTG9hZFVzZXJUb2tlbiwgTG9nb3V0IH0gZnJvbSAnLi4vLi4vLi4vYXV0aC9pbmRleCc7XG5pbXBvcnQgeyBVc2VyU2lnblVwIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvbWlzYy5tb2RlbCc7XG5pbXBvcnQgeyBVc2VyQ29ubmVjdG9yIH0gZnJvbSAnLi4vLi4vY29ubmVjdG9ycy91c2VyL3VzZXIuY29ubmVjdG9yJztcbmltcG9ydCAqIGFzIGZyb21BY3Rpb25zIGZyb20gJy4uL2FjdGlvbnMvdXNlci1yZWdpc3Rlci5hY3Rpb24nO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVXNlclJlZ2lzdGVyRWZmZWN0cyB7XG4gIEBFZmZlY3QoKVxuICByZWdpc3RlclVzZXIkOiBPYnNlcnZhYmxlPFxuICAgIGZyb21BY3Rpb25zLlVzZXJSZWdpc3Rlck9yUmVtb3ZlQWN0aW9uIHwgTG9hZFVzZXJUb2tlblxuICA+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShmcm9tQWN0aW9ucy5SRUdJU1RFUl9VU0VSKSxcbiAgICBtYXAoKGFjdGlvbjogZnJvbUFjdGlvbnMuUmVnaXN0ZXJVc2VyKSA9PiBhY3Rpb24ucGF5bG9hZCksXG4gICAgbWVyZ2VNYXAoKHVzZXI6IFVzZXJTaWduVXApID0+XG4gICAgICB0aGlzLnVzZXJDb25uZWN0b3IucmVnaXN0ZXIodXNlcikucGlwZShcbiAgICAgICAgc3dpdGNoTWFwKF9yZXN1bHQgPT4gW1xuICAgICAgICAgIG5ldyBMb2FkVXNlclRva2VuKHtcbiAgICAgICAgICAgIHVzZXJJZDogdXNlci51aWQsXG4gICAgICAgICAgICBwYXNzd29yZDogdXNlci5wYXNzd29yZCxcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBuZXcgZnJvbUFjdGlvbnMuUmVnaXN0ZXJVc2VyU3VjY2VzcygpLFxuICAgICAgICBdKSxcbiAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PiBvZihuZXcgZnJvbUFjdGlvbnMuUmVnaXN0ZXJVc2VyRmFpbChlcnJvcikpKVxuICAgICAgKVxuICAgIClcbiAgKTtcblxuICBARWZmZWN0KClcbiAgcmVtb3ZlVXNlciQ6IE9ic2VydmFibGU8XG4gICAgZnJvbUFjdGlvbnMuVXNlclJlZ2lzdGVyT3JSZW1vdmVBY3Rpb24gfCBMb2dvdXRcbiAgPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoZnJvbUFjdGlvbnMuUkVNT1ZFX1VTRVIpLFxuICAgIG1hcCgoYWN0aW9uOiBmcm9tQWN0aW9ucy5SZW1vdmVVc2VyKSA9PiBhY3Rpb24ucGF5bG9hZCksXG4gICAgbWVyZ2VNYXAoKHVzZXJJZDogc3RyaW5nKSA9PiB7XG4gICAgICByZXR1cm4gdGhpcy51c2VyQ29ubmVjdG9yLnJlbW92ZSh1c2VySWQpLnBpcGUoXG4gICAgICAgIHN3aXRjaE1hcChfcmVzdWx0ID0+IFtcbiAgICAgICAgICBuZXcgZnJvbUFjdGlvbnMuUmVtb3ZlVXNlclN1Y2Nlc3MoKSxcbiAgICAgICAgICBuZXcgTG9nb3V0KCksXG4gICAgICAgIF0pLFxuICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+IG9mKG5ldyBmcm9tQWN0aW9ucy5SZW1vdmVVc2VyRmFpbChlcnJvcikpKVxuICAgICAgKTtcbiAgICB9KVxuICApO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnMsXG4gICAgcHJpdmF0ZSB1c2VyQ29ubmVjdG9yOiBVc2VyQ29ubmVjdG9yXG4gICkge31cbn1cbiJdfQ==