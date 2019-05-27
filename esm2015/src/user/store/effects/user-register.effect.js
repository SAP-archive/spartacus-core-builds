/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';
import * as fromActions from '../actions/user-register.action';
import { LoadUserToken, Logout } from '../../../auth/index';
import { UserAccountConnector } from '../../connectors/account/user-account.connector';
export class UserRegisterEffects {
    /**
     * @param {?} actions$
     * @param {?} userAccountConnector
     */
    constructor(actions$, userAccountConnector) {
        this.actions$ = actions$;
        this.userAccountConnector = userAccountConnector;
        this.registerUser$ = this.actions$.pipe(ofType(fromActions.REGISTER_USER), map((action) => action.payload), mergeMap((user) => {
            return this.userAccountConnector.register(user).pipe(switchMap(_result => [
                new LoadUserToken({
                    userId: user.uid,
                    password: user.password,
                }),
                new fromActions.RegisterUserSuccess(),
            ]), catchError(error => of(new fromActions.RegisterUserFail(error))));
        }));
        this.removeUser$ = this.actions$.pipe(ofType(fromActions.REMOVE_USER), map((action) => action.payload), mergeMap((userId) => {
            return this.userAccountConnector.remove(userId).pipe(switchMap(_result => [
                new fromActions.RemoveUserSuccess(),
                new Logout(),
            ]), catchError(error => of(new fromActions.RemoveUserFail(error))));
        }));
    }
}
UserRegisterEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
UserRegisterEffects.ctorParameters = () => [
    { type: Actions },
    { type: UserAccountConnector }
];
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Observable)
], UserRegisterEffects.prototype, "registerUser$", void 0);
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Observable)
], UserRegisterEffects.prototype, "removeUser$", void 0);
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
    UserRegisterEffects.prototype.userAccountConnector;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1yZWdpc3Rlci5lZmZlY3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvdXNlci9zdG9yZS9lZmZlY3RzL3VzZXItcmVnaXN0ZXIuZWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFeEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXRFLE9BQU8sS0FBSyxXQUFXLE1BQU0saUNBQWlDLENBQUM7QUFDL0QsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUl2RixNQUFNLE9BQU8sbUJBQW1COzs7OztJQXNDOUIsWUFDVSxRQUFpQixFQUNqQixvQkFBMEM7UUFEMUMsYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUNqQix5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBdENwRCxrQkFBYSxHQUVULElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUNwQixNQUFNLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxFQUNqQyxHQUFHLENBQUMsQ0FBQyxNQUFnQyxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQ3pELFFBQVEsQ0FBQyxDQUFDLElBQWdCLEVBQUUsRUFBRTtZQUM1QixPQUFPLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUNsRCxTQUFTLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztnQkFDbkIsSUFBSSxhQUFhLENBQUM7b0JBQ2hCLE1BQU0sRUFBRSxJQUFJLENBQUMsR0FBRztvQkFDaEIsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO2lCQUN4QixDQUFDO2dCQUNGLElBQUksV0FBVyxDQUFDLG1CQUFtQixFQUFFO2FBQ3RDLENBQUMsRUFDRixVQUFVLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxXQUFXLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUNqRSxDQUFDO1FBQ0osQ0FBQyxDQUFDLENBQ0gsQ0FBQztRQUdGLGdCQUFXLEdBRVAsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ3BCLE1BQU0sQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLEVBQy9CLEdBQUcsQ0FBQyxDQUFDLE1BQThCLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFDdkQsUUFBUSxDQUFDLENBQUMsTUFBYyxFQUFFLEVBQUU7WUFDMUIsT0FBTyxJQUFJLENBQUMsb0JBQW9CLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FDbEQsU0FBUyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7Z0JBQ25CLElBQUksV0FBVyxDQUFDLGlCQUFpQixFQUFFO2dCQUNuQyxJQUFJLE1BQU0sRUFBRTthQUNiLENBQUMsRUFDRixVQUFVLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxXQUFXLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FDL0QsQ0FBQztRQUNKLENBQUMsQ0FBQyxDQUNILENBQUM7SUFLQyxDQUFDOzs7WUExQ0wsVUFBVTs7OztZQVZGLE9BQU87WUFPUCxvQkFBb0I7O0FBTTNCO0lBREMsTUFBTSxFQUFFO3NDQUNNLFVBQVU7MERBaUJ2QjtBQUdGO0lBREMsTUFBTSxFQUFFO3NDQUNJLFVBQVU7d0RBY3JCOzs7SUFuQ0YsNENBa0JFOztJQUVGLDBDQWVFOzs7OztJQUdBLHVDQUF5Qjs7Ozs7SUFDekIsbURBQWtEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QsIG9mVHlwZSB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgY2F0Y2hFcnJvciwgbWFwLCBtZXJnZU1hcCwgc3dpdGNoTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgKiBhcyBmcm9tQWN0aW9ucyBmcm9tICcuLi9hY3Rpb25zL3VzZXItcmVnaXN0ZXIuYWN0aW9uJztcbmltcG9ydCB7IExvYWRVc2VyVG9rZW4sIExvZ291dCB9IGZyb20gJy4uLy4uLy4uL2F1dGgvaW5kZXgnO1xuaW1wb3J0IHsgVXNlckFjY291bnRDb25uZWN0b3IgfSBmcm9tICcuLi8uLi9jb25uZWN0b3JzL2FjY291bnQvdXNlci1hY2NvdW50LmNvbm5lY3Rvcic7XG5pbXBvcnQgeyBVc2VyU2lnblVwIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvbWlzYy5tb2RlbCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBVc2VyUmVnaXN0ZXJFZmZlY3RzIHtcbiAgQEVmZmVjdCgpXG4gIHJlZ2lzdGVyVXNlciQ6IE9ic2VydmFibGU8XG4gICAgZnJvbUFjdGlvbnMuVXNlclJlZ2lzdGVyT3JSZW1vdmVBY3Rpb24gfCBMb2FkVXNlclRva2VuXG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKGZyb21BY3Rpb25zLlJFR0lTVEVSX1VTRVIpLFxuICAgIG1hcCgoYWN0aW9uOiBmcm9tQWN0aW9ucy5SZWdpc3RlclVzZXIpID0+IGFjdGlvbi5wYXlsb2FkKSxcbiAgICBtZXJnZU1hcCgodXNlcjogVXNlclNpZ25VcCkgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMudXNlckFjY291bnRDb25uZWN0b3IucmVnaXN0ZXIodXNlcikucGlwZShcbiAgICAgICAgc3dpdGNoTWFwKF9yZXN1bHQgPT4gW1xuICAgICAgICAgIG5ldyBMb2FkVXNlclRva2VuKHtcbiAgICAgICAgICAgIHVzZXJJZDogdXNlci51aWQsXG4gICAgICAgICAgICBwYXNzd29yZDogdXNlci5wYXNzd29yZCxcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBuZXcgZnJvbUFjdGlvbnMuUmVnaXN0ZXJVc2VyU3VjY2VzcygpLFxuICAgICAgICBdKSxcbiAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PiBvZihuZXcgZnJvbUFjdGlvbnMuUmVnaXN0ZXJVc2VyRmFpbChlcnJvcikpKVxuICAgICAgKTtcbiAgICB9KVxuICApO1xuXG4gIEBFZmZlY3QoKVxuICByZW1vdmVVc2VyJDogT2JzZXJ2YWJsZTxcbiAgICBmcm9tQWN0aW9ucy5Vc2VyUmVnaXN0ZXJPclJlbW92ZUFjdGlvbiB8IExvZ291dFxuICA+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShmcm9tQWN0aW9ucy5SRU1PVkVfVVNFUiksXG4gICAgbWFwKChhY3Rpb246IGZyb21BY3Rpb25zLlJlbW92ZVVzZXIpID0+IGFjdGlvbi5wYXlsb2FkKSxcbiAgICBtZXJnZU1hcCgodXNlcklkOiBzdHJpbmcpID0+IHtcbiAgICAgIHJldHVybiB0aGlzLnVzZXJBY2NvdW50Q29ubmVjdG9yLnJlbW92ZSh1c2VySWQpLnBpcGUoXG4gICAgICAgIHN3aXRjaE1hcChfcmVzdWx0ID0+IFtcbiAgICAgICAgICBuZXcgZnJvbUFjdGlvbnMuUmVtb3ZlVXNlclN1Y2Nlc3MoKSxcbiAgICAgICAgICBuZXcgTG9nb3V0KCksXG4gICAgICAgIF0pLFxuICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+IG9mKG5ldyBmcm9tQWN0aW9ucy5SZW1vdmVVc2VyRmFpbChlcnJvcikpKVxuICAgICAgKTtcbiAgICB9KVxuICApO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnMsXG4gICAgcHJpdmF0ZSB1c2VyQWNjb3VudENvbm5lY3RvcjogVXNlckFjY291bnRDb25uZWN0b3JcbiAgKSB7fVxufVxuIl19