/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, concatMap, map, mergeMap } from 'rxjs/operators';
import { makeErrorSerializable } from '../../../util/serialization-utils';
import { UserConnector } from '../../connectors/user/user.connector';
import { UserActions } from '../actions/index';
export class UserDetailsEffects {
    /**
     * @param {?} actions$
     * @param {?} userConnector
     */
    constructor(actions$, userConnector) {
        this.actions$ = actions$;
        this.userConnector = userConnector;
        this.loadUserDetails$ = this.actions$.pipe(ofType(UserActions.LOAD_USER_DETAILS), map((/**
         * @param {?} action
         * @return {?}
         */
        (action) => action.payload)), mergeMap((/**
         * @param {?} userId
         * @return {?}
         */
        userId => {
            return this.userConnector.get(userId).pipe(map((/**
             * @param {?} user
             * @return {?}
             */
            (user) => {
                return new UserActions.LoadUserDetailsSuccess(user);
            })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            error => of(new UserActions.LoadUserDetailsFail(makeErrorSerializable(error))))));
        })));
        this.updateUserDetails$ = this.actions$.pipe(ofType(UserActions.UPDATE_USER_DETAILS), map((/**
         * @param {?} action
         * @return {?}
         */
        (action) => action.payload)), concatMap((/**
         * @param {?} payload
         * @return {?}
         */
        payload => this.userConnector.update(payload.username, payload.userDetails).pipe(map((/**
         * @param {?} _
         * @return {?}
         */
        _ => new UserActions.UpdateUserDetailsSuccess(payload.userDetails))), catchError((/**
         * @param {?} error
         * @return {?}
         */
        error => of(new UserActions.UpdateUserDetailsFail(makeErrorSerializable(error)))))))));
    }
}
UserDetailsEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
UserDetailsEffects.ctorParameters = () => [
    { type: Actions },
    { type: UserConnector }
];
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Observable)
], UserDetailsEffects.prototype, "loadUserDetails$", void 0);
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Observable)
], UserDetailsEffects.prototype, "updateUserDetails$", void 0);
if (false) {
    /** @type {?} */
    UserDetailsEffects.prototype.loadUserDetails$;
    /** @type {?} */
    UserDetailsEffects.prototype.updateUserDetails$;
    /**
     * @type {?}
     * @private
     */
    UserDetailsEffects.prototype.actions$;
    /**
     * @type {?}
     * @private
     */
    UserDetailsEffects.prototype.userConnector;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1kZXRhaWxzLmVmZmVjdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy91c2VyL3N0b3JlL2VmZmVjdHMvdXNlci1kZXRhaWxzLmVmZmVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hELE9BQU8sRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV0RSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUMxRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDckUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRy9DLE1BQU0sT0FBTyxrQkFBa0I7Ozs7O0lBcUM3QixZQUNVLFFBQWlCLEVBQ2pCLGFBQTRCO1FBRDVCLGFBQVEsR0FBUixRQUFRLENBQVM7UUFDakIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFyQ3RDLHFCQUFnQixHQUVaLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUNwQixNQUFNLENBQUMsV0FBVyxDQUFDLGlCQUFpQixDQUFDLEVBQ3JDLEdBQUc7Ozs7UUFBQyxDQUFDLE1BQW1DLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUMsRUFDNUQsUUFBUTs7OztRQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQ2hCLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUN4QyxHQUFHOzs7O1lBQUMsQ0FBQyxJQUFVLEVBQUUsRUFBRTtnQkFDakIsT0FBTyxJQUFJLFdBQVcsQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN0RCxDQUFDLEVBQUMsRUFDRixVQUFVOzs7O1lBQUMsS0FBSyxDQUFDLEVBQUUsQ0FDakIsRUFBRSxDQUFDLElBQUksV0FBVyxDQUFDLG1CQUFtQixDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFDdEUsQ0FDRixDQUFDO1FBQ0osQ0FBQyxFQUFDLENBQ0gsQ0FBQztRQUdGLHVCQUFrQixHQUVkLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUNwQixNQUFNLENBQUMsV0FBVyxDQUFDLG1CQUFtQixDQUFDLEVBQ3ZDLEdBQUc7Ozs7UUFBQyxDQUFDLE1BQXFDLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUMsRUFDOUQsU0FBUzs7OztRQUFDLE9BQU8sQ0FBQyxFQUFFLENBQ2xCLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FDbkUsR0FBRzs7OztRQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxXQUFXLENBQUMsd0JBQXdCLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxFQUFDLEVBQ3ZFLFVBQVU7Ozs7UUFBQyxLQUFLLENBQUMsRUFBRSxDQUNqQixFQUFFLENBQ0EsSUFBSSxXQUFXLENBQUMscUJBQXFCLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FDcEUsRUFDRixDQUNGLEVBQ0YsQ0FDRixDQUFDO0lBS0MsQ0FBQzs7O1lBekNMLFVBQVU7Ozs7WUFSRixPQUFPO1lBS1AsYUFBYTs7QUFNcEI7SUFEQyxNQUFNLEVBQUU7c0NBQ1MsVUFBVTs0REFlMUI7QUFHRjtJQURDLE1BQU0sRUFBRTtzQ0FDVyxVQUFVOzhEQWU1Qjs7O0lBbENGLDhDQWdCRTs7SUFFRixnREFnQkU7Ozs7O0lBR0Esc0NBQXlCOzs7OztJQUN6QiwyQ0FBb0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QsIG9mVHlwZSB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGNhdGNoRXJyb3IsIGNvbmNhdE1hcCwgbWFwLCBtZXJnZU1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9taXNjLm1vZGVsJztcbmltcG9ydCB7IG1ha2VFcnJvclNlcmlhbGl6YWJsZSB9IGZyb20gJy4uLy4uLy4uL3V0aWwvc2VyaWFsaXphdGlvbi11dGlscyc7XG5pbXBvcnQgeyBVc2VyQ29ubmVjdG9yIH0gZnJvbSAnLi4vLi4vY29ubmVjdG9ycy91c2VyL3VzZXIuY29ubmVjdG9yJztcbmltcG9ydCB7IFVzZXJBY3Rpb25zIH0gZnJvbSAnLi4vYWN0aW9ucy9pbmRleCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBVc2VyRGV0YWlsc0VmZmVjdHMge1xuICBARWZmZWN0KClcbiAgbG9hZFVzZXJEZXRhaWxzJDogT2JzZXJ2YWJsZTxcbiAgICBVc2VyQWN0aW9ucy5Vc2VyRGV0YWlsc0FjdGlvblxuICA+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShVc2VyQWN0aW9ucy5MT0FEX1VTRVJfREVUQUlMUyksXG4gICAgbWFwKChhY3Rpb246IFVzZXJBY3Rpb25zLkxvYWRVc2VyRGV0YWlscykgPT4gYWN0aW9uLnBheWxvYWQpLFxuICAgIG1lcmdlTWFwKHVzZXJJZCA9PiB7XG4gICAgICByZXR1cm4gdGhpcy51c2VyQ29ubmVjdG9yLmdldCh1c2VySWQpLnBpcGUoXG4gICAgICAgIG1hcCgodXNlcjogVXNlcikgPT4ge1xuICAgICAgICAgIHJldHVybiBuZXcgVXNlckFjdGlvbnMuTG9hZFVzZXJEZXRhaWxzU3VjY2Vzcyh1c2VyKTtcbiAgICAgICAgfSksXG4gICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT5cbiAgICAgICAgICBvZihuZXcgVXNlckFjdGlvbnMuTG9hZFVzZXJEZXRhaWxzRmFpbChtYWtlRXJyb3JTZXJpYWxpemFibGUoZXJyb3IpKSlcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICB9KVxuICApO1xuXG4gIEBFZmZlY3QoKVxuICB1cGRhdGVVc2VyRGV0YWlscyQ6IE9ic2VydmFibGU8XG4gICAgVXNlckFjdGlvbnMuVXBkYXRlVXNlckRldGFpbHNTdWNjZXNzIHwgVXNlckFjdGlvbnMuVXBkYXRlVXNlckRldGFpbHNGYWlsXG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKFVzZXJBY3Rpb25zLlVQREFURV9VU0VSX0RFVEFJTFMpLFxuICAgIG1hcCgoYWN0aW9uOiBVc2VyQWN0aW9ucy5VcGRhdGVVc2VyRGV0YWlscykgPT4gYWN0aW9uLnBheWxvYWQpLFxuICAgIGNvbmNhdE1hcChwYXlsb2FkID0+XG4gICAgICB0aGlzLnVzZXJDb25uZWN0b3IudXBkYXRlKHBheWxvYWQudXNlcm5hbWUsIHBheWxvYWQudXNlckRldGFpbHMpLnBpcGUoXG4gICAgICAgIG1hcChfID0+IG5ldyBVc2VyQWN0aW9ucy5VcGRhdGVVc2VyRGV0YWlsc1N1Y2Nlc3MocGF5bG9hZC51c2VyRGV0YWlscykpLFxuICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+XG4gICAgICAgICAgb2YoXG4gICAgICAgICAgICBuZXcgVXNlckFjdGlvbnMuVXBkYXRlVXNlckRldGFpbHNGYWlsKG1ha2VFcnJvclNlcmlhbGl6YWJsZShlcnJvcikpXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICApXG4gICAgKVxuICApO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnMsXG4gICAgcHJpdmF0ZSB1c2VyQ29ubmVjdG9yOiBVc2VyQ29ubmVjdG9yXG4gICkge31cbn1cbiJdfQ==