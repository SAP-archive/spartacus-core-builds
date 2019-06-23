/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';
import { LoadUserToken, Logout } from '../../../auth/index';
import { makeErrorSerializable } from '../../../util/serialization-utils';
import { UserConnector } from '../../connectors/user/user.connector';
import * as fromActions from '../actions/user-register.action';
export class UserRegisterEffects {
    /**
     * @param {?} actions$
     * @param {?} userConnector
     */
    constructor(actions$, userConnector) {
        this.actions$ = actions$;
        this.userConnector = userConnector;
        this.registerUser$ = this.actions$.pipe(ofType(fromActions.REGISTER_USER), map((/**
         * @param {?} action
         * @return {?}
         */
        (action) => action.payload)), mergeMap((/**
         * @param {?} user
         * @return {?}
         */
        (user) => this.userConnector.register(user).pipe(switchMap((/**
         * @param {?} _result
         * @return {?}
         */
        _result => [
            new LoadUserToken({
                userId: user.uid,
                password: user.password,
            }),
            new fromActions.RegisterUserSuccess(),
        ])), catchError((/**
         * @param {?} error
         * @return {?}
         */
        error => of(new fromActions.RegisterUserFail(makeErrorSerializable(error)))))))));
        this.removeUser$ = this.actions$.pipe(ofType(fromActions.REMOVE_USER), map((/**
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
                new fromActions.RemoveUserSuccess(),
                new Logout(),
            ])), catchError((/**
             * @param {?} error
             * @return {?}
             */
            error => of(new fromActions.RemoveUserFail(makeErrorSerializable(error))))));
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
    UserRegisterEffects.prototype.userConnector;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1yZWdpc3Rlci5lZmZlY3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvdXNlci9zdG9yZS9lZmZlY3RzL3VzZXItcmVnaXN0ZXIuZWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3RFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFNUQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDMUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3JFLE9BQU8sS0FBSyxXQUFXLE1BQU0saUNBQWlDLENBQUM7QUFHL0QsTUFBTSxPQUFPLG1CQUFtQjs7Ozs7SUEwQzlCLFlBQ1UsUUFBaUIsRUFDakIsYUFBNEI7UUFENUIsYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUNqQixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQTFDdEMsa0JBQWEsR0FFVCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDcEIsTUFBTSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsRUFDakMsR0FBRzs7OztRQUFDLENBQUMsTUFBZ0MsRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBQyxFQUN6RCxRQUFROzs7O1FBQUMsQ0FBQyxJQUFnQixFQUFFLEVBQUUsQ0FDNUIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUNwQyxTQUFTOzs7O1FBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztZQUNuQixJQUFJLGFBQWEsQ0FBQztnQkFDaEIsTUFBTSxFQUFFLElBQUksQ0FBQyxHQUFHO2dCQUNoQixRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7YUFDeEIsQ0FBQztZQUNGLElBQUksV0FBVyxDQUFDLG1CQUFtQixFQUFFO1NBQ3RDLEVBQUMsRUFDRixVQUFVOzs7O1FBQUMsS0FBSyxDQUFDLEVBQUUsQ0FDakIsRUFBRSxDQUFDLElBQUksV0FBVyxDQUFDLGdCQUFnQixDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFDbkUsQ0FDRixFQUNGLENBQ0YsQ0FBQztRQUdGLGdCQUFXLEdBRVAsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ3BCLE1BQU0sQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLEVBQy9CLEdBQUc7Ozs7UUFBQyxDQUFDLE1BQThCLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUMsRUFDdkQsUUFBUTs7OztRQUFDLENBQUMsTUFBYyxFQUFFLEVBQUU7WUFDMUIsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQzNDLFNBQVM7Ozs7WUFBQyxPQUFPLENBQUMsRUFBRSxDQUFDO2dCQUNuQixJQUFJLFdBQVcsQ0FBQyxpQkFBaUIsRUFBRTtnQkFDbkMsSUFBSSxNQUFNLEVBQUU7YUFDYixFQUFDLEVBQ0YsVUFBVTs7OztZQUFDLEtBQUssQ0FBQyxFQUFFLENBQ2pCLEVBQUUsQ0FBQyxJQUFJLFdBQVcsQ0FBQyxjQUFjLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUNqRSxDQUNGLENBQUM7UUFDSixDQUFDLEVBQUMsQ0FDSCxDQUFDO0lBS0MsQ0FBQzs7O1lBOUNMLFVBQVU7Ozs7WUFURixPQUFPO1lBTVAsYUFBYTs7QUFNcEI7SUFEQyxNQUFNLEVBQUU7c0NBQ00sVUFBVTswREFtQnZCO0FBR0Y7SUFEQyxNQUFNLEVBQUU7c0NBQ0ksVUFBVTt3REFnQnJCOzs7SUF2Q0YsNENBb0JFOztJQUVGLDBDQWlCRTs7Ozs7SUFHQSx1Q0FBeUI7Ozs7O0lBQ3pCLDRDQUFvQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCwgb2ZUeXBlIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgY2F0Y2hFcnJvciwgbWFwLCBtZXJnZU1hcCwgc3dpdGNoTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgTG9hZFVzZXJUb2tlbiwgTG9nb3V0IH0gZnJvbSAnLi4vLi4vLi4vYXV0aC9pbmRleCc7XG5pbXBvcnQgeyBVc2VyU2lnblVwIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvbWlzYy5tb2RlbCc7XG5pbXBvcnQgeyBtYWtlRXJyb3JTZXJpYWxpemFibGUgfSBmcm9tICcuLi8uLi8uLi91dGlsL3NlcmlhbGl6YXRpb24tdXRpbHMnO1xuaW1wb3J0IHsgVXNlckNvbm5lY3RvciB9IGZyb20gJy4uLy4uL2Nvbm5lY3RvcnMvdXNlci91c2VyLmNvbm5lY3Rvcic7XG5pbXBvcnQgKiBhcyBmcm9tQWN0aW9ucyBmcm9tICcuLi9hY3Rpb25zL3VzZXItcmVnaXN0ZXIuYWN0aW9uJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFVzZXJSZWdpc3RlckVmZmVjdHMge1xuICBARWZmZWN0KClcbiAgcmVnaXN0ZXJVc2VyJDogT2JzZXJ2YWJsZTxcbiAgICBmcm9tQWN0aW9ucy5Vc2VyUmVnaXN0ZXJPclJlbW92ZUFjdGlvbiB8IExvYWRVc2VyVG9rZW5cbiAgPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoZnJvbUFjdGlvbnMuUkVHSVNURVJfVVNFUiksXG4gICAgbWFwKChhY3Rpb246IGZyb21BY3Rpb25zLlJlZ2lzdGVyVXNlcikgPT4gYWN0aW9uLnBheWxvYWQpLFxuICAgIG1lcmdlTWFwKCh1c2VyOiBVc2VyU2lnblVwKSA9PlxuICAgICAgdGhpcy51c2VyQ29ubmVjdG9yLnJlZ2lzdGVyKHVzZXIpLnBpcGUoXG4gICAgICAgIHN3aXRjaE1hcChfcmVzdWx0ID0+IFtcbiAgICAgICAgICBuZXcgTG9hZFVzZXJUb2tlbih7XG4gICAgICAgICAgICB1c2VySWQ6IHVzZXIudWlkLFxuICAgICAgICAgICAgcGFzc3dvcmQ6IHVzZXIucGFzc3dvcmQsXG4gICAgICAgICAgfSksXG4gICAgICAgICAgbmV3IGZyb21BY3Rpb25zLlJlZ2lzdGVyVXNlclN1Y2Nlc3MoKSxcbiAgICAgICAgXSksXG4gICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT5cbiAgICAgICAgICBvZihuZXcgZnJvbUFjdGlvbnMuUmVnaXN0ZXJVc2VyRmFpbChtYWtlRXJyb3JTZXJpYWxpemFibGUoZXJyb3IpKSlcbiAgICAgICAgKVxuICAgICAgKVxuICAgIClcbiAgKTtcblxuICBARWZmZWN0KClcbiAgcmVtb3ZlVXNlciQ6IE9ic2VydmFibGU8XG4gICAgZnJvbUFjdGlvbnMuVXNlclJlZ2lzdGVyT3JSZW1vdmVBY3Rpb24gfCBMb2dvdXRcbiAgPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoZnJvbUFjdGlvbnMuUkVNT1ZFX1VTRVIpLFxuICAgIG1hcCgoYWN0aW9uOiBmcm9tQWN0aW9ucy5SZW1vdmVVc2VyKSA9PiBhY3Rpb24ucGF5bG9hZCksXG4gICAgbWVyZ2VNYXAoKHVzZXJJZDogc3RyaW5nKSA9PiB7XG4gICAgICByZXR1cm4gdGhpcy51c2VyQ29ubmVjdG9yLnJlbW92ZSh1c2VySWQpLnBpcGUoXG4gICAgICAgIHN3aXRjaE1hcChfcmVzdWx0ID0+IFtcbiAgICAgICAgICBuZXcgZnJvbUFjdGlvbnMuUmVtb3ZlVXNlclN1Y2Nlc3MoKSxcbiAgICAgICAgICBuZXcgTG9nb3V0KCksXG4gICAgICAgIF0pLFxuICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+XG4gICAgICAgICAgb2YobmV3IGZyb21BY3Rpb25zLlJlbW92ZVVzZXJGYWlsKG1ha2VFcnJvclNlcmlhbGl6YWJsZShlcnJvcikpKVxuICAgICAgICApXG4gICAgICApO1xuICAgIH0pXG4gICk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9ucyxcbiAgICBwcml2YXRlIHVzZXJDb25uZWN0b3I6IFVzZXJDb25uZWN0b3JcbiAgKSB7fVxufVxuIl19