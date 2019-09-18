/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';
import { AuthActions } from '../../../auth/store/actions/index';
import { makeErrorSerializable } from '../../../util/serialization-utils';
import { UserConnector } from '../../connectors/user/user.connector';
import { UserActions } from '../actions/index';
export class UserRegisterEffects {
    /**
     * @param {?} actions$
     * @param {?} userConnector
     */
    constructor(actions$, userConnector) {
        this.actions$ = actions$;
        this.userConnector = userConnector;
        this.registerUser$ = this.actions$.pipe(ofType(UserActions.REGISTER_USER), map((/**
         * @param {?} action
         * @return {?}
         */
        (action) => action.payload)), mergeMap((/**
         * @param {?} user
         * @return {?}
         */
        (user) => this.userConnector.register(user).pipe(map((/**
         * @return {?}
         */
        () => new UserActions.RegisterUserSuccess())), catchError((/**
         * @param {?} error
         * @return {?}
         */
        error => of(new UserActions.RegisterUserFail(makeErrorSerializable(error)))))))));
        this.registerGuest$ = this.actions$.pipe(ofType(UserActions.REGISTER_GUEST), map((/**
         * @param {?} action
         * @return {?}
         */
        (action) => action.payload)), mergeMap((/**
         * @param {?} __0
         * @return {?}
         */
        ({ guid, password }) => this.userConnector.registerGuest(guid, password).pipe(switchMap((/**
         * @param {?} user
         * @return {?}
         */
        user => [
            new AuthActions.LoadUserToken({
                userId: user.uid,
                password: password,
            }),
            new UserActions.RegisterGuestSuccess(),
        ])), catchError((/**
         * @param {?} error
         * @return {?}
         */
        error => of(new UserActions.RegisterGuestFail(makeErrorSerializable(error)))))))));
        this.removeUser$ = this.actions$.pipe(ofType(UserActions.REMOVE_USER), map((/**
         * @param {?} action
         * @return {?}
         */
        (action) => action.payload)), mergeMap((/**
         * @param {?} userId
         * @return {?}
         */
        (userId) => {
            return this.userConnector.remove(userId).pipe(switchMap((/**
             * @param {?} _result
             * @return {?}
             */
            _result => [
                new UserActions.RemoveUserSuccess(),
                new AuthActions.Logout(),
            ])), catchError((/**
             * @param {?} error
             * @return {?}
             */
            error => of(new UserActions.RemoveUserFail(makeErrorSerializable(error))))));
        })));
    }
}
UserRegisterEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
UserRegisterEffects.ctorParameters = () => [
    { type: Actions },
    { type: UserConnector }
];
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Observable)
], UserRegisterEffects.prototype, "registerUser$", void 0);
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Observable)
], UserRegisterEffects.prototype, "registerGuest$", void 0);
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Observable)
], UserRegisterEffects.prototype, "removeUser$", void 0);
if (false) {
    /** @type {?} */
    UserRegisterEffects.prototype.registerUser$;
    /** @type {?} */
    UserRegisterEffects.prototype.registerGuest$;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1yZWdpc3Rlci5lZmZlY3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvdXNlci9zdG9yZS9lZmZlY3RzL3VzZXItcmVnaXN0ZXIuZWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3RFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUVoRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUMxRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDckUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRy9DLE1BQU0sT0FBTyxtQkFBbUI7Ozs7O0lBMEQ5QixZQUNVLFFBQWlCLEVBQ2pCLGFBQTRCO1FBRDVCLGFBQVEsR0FBUixRQUFRLENBQVM7UUFDakIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUExRHRDLGtCQUFhLEdBRVQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ3BCLE1BQU0sQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLEVBQ2pDLEdBQUc7Ozs7UUFBQyxDQUFDLE1BQWdDLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUMsRUFDekQsUUFBUTs7OztRQUFDLENBQUMsSUFBZ0IsRUFBRSxFQUFFLENBQzVCLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FDcEMsR0FBRzs7O1FBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxXQUFXLENBQUMsbUJBQW1CLEVBQUUsRUFBQyxFQUNoRCxVQUFVOzs7O1FBQUMsS0FBSyxDQUFDLEVBQUUsQ0FDakIsRUFBRSxDQUFDLElBQUksV0FBVyxDQUFDLGdCQUFnQixDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFDbkUsQ0FDRixFQUNGLENBQ0YsQ0FBQztRQUdGLG1CQUFjLEdBRVYsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ3BCLE1BQU0sQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLEVBQ2xDLEdBQUc7Ozs7UUFBQyxDQUFDLE1BQWlDLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUMsRUFDMUQsUUFBUTs7OztRQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSxDQUM5QixJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUNuRCxTQUFTOzs7O1FBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztZQUNoQixJQUFJLFdBQVcsQ0FBQyxhQUFhLENBQUM7Z0JBQzVCLE1BQU0sRUFBRSxJQUFJLENBQUMsR0FBRztnQkFDaEIsUUFBUSxFQUFFLFFBQVE7YUFDbkIsQ0FBQztZQUNGLElBQUksV0FBVyxDQUFDLG9CQUFvQixFQUFFO1NBQ3ZDLEVBQUMsRUFDRixVQUFVOzs7O1FBQUMsS0FBSyxDQUFDLEVBQUUsQ0FDakIsRUFBRSxDQUFDLElBQUksV0FBVyxDQUFDLGlCQUFpQixDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFDcEUsQ0FDRixFQUNGLENBQ0YsQ0FBQztRQUdGLGdCQUFXLEdBRVAsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ3BCLE1BQU0sQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLEVBQy9CLEdBQUc7Ozs7UUFBQyxDQUFDLE1BQThCLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUMsRUFDdkQsUUFBUTs7OztRQUFDLENBQUMsTUFBYyxFQUFFLEVBQUU7WUFDMUIsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQzNDLFNBQVM7Ozs7WUFBQyxPQUFPLENBQUMsRUFBRSxDQUFDO2dCQUNuQixJQUFJLFdBQVcsQ0FBQyxpQkFBaUIsRUFBRTtnQkFDbkMsSUFBSSxXQUFXLENBQUMsTUFBTSxFQUFFO2FBQ3pCLEVBQUMsRUFDRixVQUFVOzs7O1lBQUMsS0FBSyxDQUFDLEVBQUUsQ0FDakIsRUFBRSxDQUFDLElBQUksV0FBVyxDQUFDLGNBQWMsQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQ2pFLENBQ0YsQ0FBQztRQUNKLENBQUMsRUFBQyxDQUNILENBQUM7SUFLQyxDQUFDOzs7WUE5REwsVUFBVTs7OztZQVRGLE9BQU87WUFNUCxhQUFhOztBQU1wQjtJQURDLE1BQU0sRUFBRTtzQ0FDTSxVQUFVOzBEQWF2QjtBQUdGO0lBREMsTUFBTSxFQUFFO3NDQUNPLFVBQVU7MkRBbUJ4QjtBQUdGO0lBREMsTUFBTSxFQUFFO3NDQUNJLFVBQVU7d0RBZ0JyQjs7O0lBdkRGLDRDQWNFOztJQUVGLDZDQW9CRTs7SUFFRiwwQ0FpQkU7Ozs7O0lBR0EsdUNBQXlCOzs7OztJQUN6Qiw0Q0FBb0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QsIG9mVHlwZSB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGNhdGNoRXJyb3IsIG1hcCwgbWVyZ2VNYXAsIHN3aXRjaE1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEF1dGhBY3Rpb25zIH0gZnJvbSAnLi4vLi4vLi4vYXV0aC9zdG9yZS9hY3Rpb25zL2luZGV4JztcbmltcG9ydCB7IFVzZXJTaWduVXAgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9taXNjLm1vZGVsJztcbmltcG9ydCB7IG1ha2VFcnJvclNlcmlhbGl6YWJsZSB9IGZyb20gJy4uLy4uLy4uL3V0aWwvc2VyaWFsaXphdGlvbi11dGlscyc7XG5pbXBvcnQgeyBVc2VyQ29ubmVjdG9yIH0gZnJvbSAnLi4vLi4vY29ubmVjdG9ycy91c2VyL3VzZXIuY29ubmVjdG9yJztcbmltcG9ydCB7IFVzZXJBY3Rpb25zIH0gZnJvbSAnLi4vYWN0aW9ucy9pbmRleCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBVc2VyUmVnaXN0ZXJFZmZlY3RzIHtcbiAgQEVmZmVjdCgpXG4gIHJlZ2lzdGVyVXNlciQ6IE9ic2VydmFibGU8XG4gICAgVXNlckFjdGlvbnMuVXNlclJlZ2lzdGVyT3JSZW1vdmVBY3Rpb25cbiAgPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoVXNlckFjdGlvbnMuUkVHSVNURVJfVVNFUiksXG4gICAgbWFwKChhY3Rpb246IFVzZXJBY3Rpb25zLlJlZ2lzdGVyVXNlcikgPT4gYWN0aW9uLnBheWxvYWQpLFxuICAgIG1lcmdlTWFwKCh1c2VyOiBVc2VyU2lnblVwKSA9PlxuICAgICAgdGhpcy51c2VyQ29ubmVjdG9yLnJlZ2lzdGVyKHVzZXIpLnBpcGUoXG4gICAgICAgIG1hcCgoKSA9PiBuZXcgVXNlckFjdGlvbnMuUmVnaXN0ZXJVc2VyU3VjY2VzcygpKSxcbiAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PlxuICAgICAgICAgIG9mKG5ldyBVc2VyQWN0aW9ucy5SZWdpc3RlclVzZXJGYWlsKG1ha2VFcnJvclNlcmlhbGl6YWJsZShlcnJvcikpKVxuICAgICAgICApXG4gICAgICApXG4gICAgKVxuICApO1xuXG4gIEBFZmZlY3QoKVxuICByZWdpc3Rlckd1ZXN0JDogT2JzZXJ2YWJsZTxcbiAgICBVc2VyQWN0aW9ucy5Vc2VyUmVnaXN0ZXJPclJlbW92ZUFjdGlvbiB8IEF1dGhBY3Rpb25zLkxvYWRVc2VyVG9rZW5cbiAgPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoVXNlckFjdGlvbnMuUkVHSVNURVJfR1VFU1QpLFxuICAgIG1hcCgoYWN0aW9uOiBVc2VyQWN0aW9ucy5SZWdpc3Rlckd1ZXN0KSA9PiBhY3Rpb24ucGF5bG9hZCksXG4gICAgbWVyZ2VNYXAoKHsgZ3VpZCwgcGFzc3dvcmQgfSkgPT5cbiAgICAgIHRoaXMudXNlckNvbm5lY3Rvci5yZWdpc3Rlckd1ZXN0KGd1aWQsIHBhc3N3b3JkKS5waXBlKFxuICAgICAgICBzd2l0Y2hNYXAodXNlciA9PiBbXG4gICAgICAgICAgbmV3IEF1dGhBY3Rpb25zLkxvYWRVc2VyVG9rZW4oe1xuICAgICAgICAgICAgdXNlcklkOiB1c2VyLnVpZCxcbiAgICAgICAgICAgIHBhc3N3b3JkOiBwYXNzd29yZCxcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBuZXcgVXNlckFjdGlvbnMuUmVnaXN0ZXJHdWVzdFN1Y2Nlc3MoKSxcbiAgICAgICAgXSksXG4gICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT5cbiAgICAgICAgICBvZihuZXcgVXNlckFjdGlvbnMuUmVnaXN0ZXJHdWVzdEZhaWwobWFrZUVycm9yU2VyaWFsaXphYmxlKGVycm9yKSkpXG4gICAgICAgIClcbiAgICAgIClcbiAgICApXG4gICk7XG5cbiAgQEVmZmVjdCgpXG4gIHJlbW92ZVVzZXIkOiBPYnNlcnZhYmxlPFxuICAgIFVzZXJBY3Rpb25zLlVzZXJSZWdpc3Rlck9yUmVtb3ZlQWN0aW9uIHwgQXV0aEFjdGlvbnMuTG9nb3V0XG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKFVzZXJBY3Rpb25zLlJFTU9WRV9VU0VSKSxcbiAgICBtYXAoKGFjdGlvbjogVXNlckFjdGlvbnMuUmVtb3ZlVXNlcikgPT4gYWN0aW9uLnBheWxvYWQpLFxuICAgIG1lcmdlTWFwKCh1c2VySWQ6IHN0cmluZykgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMudXNlckNvbm5lY3Rvci5yZW1vdmUodXNlcklkKS5waXBlKFxuICAgICAgICBzd2l0Y2hNYXAoX3Jlc3VsdCA9PiBbXG4gICAgICAgICAgbmV3IFVzZXJBY3Rpb25zLlJlbW92ZVVzZXJTdWNjZXNzKCksXG4gICAgICAgICAgbmV3IEF1dGhBY3Rpb25zLkxvZ291dCgpLFxuICAgICAgICBdKSxcbiAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PlxuICAgICAgICAgIG9mKG5ldyBVc2VyQWN0aW9ucy5SZW1vdmVVc2VyRmFpbChtYWtlRXJyb3JTZXJpYWxpemFibGUoZXJyb3IpKSlcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICB9KVxuICApO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnMsXG4gICAgcHJpdmF0ZSB1c2VyQ29ubmVjdG9yOiBVc2VyQ29ubmVjdG9yXG4gICkge31cbn1cbiJdfQ==