/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, concatMap, map, mergeMap } from 'rxjs/operators';
import { makeErrorSerializable } from '../../../util/serialization-utils';
import { UserConnector } from '../../connectors/user/user.connector';
import * as fromUserDetailsAction from '../actions/user-details.action';
var UserDetailsEffects = /** @class */ (function () {
    function UserDetailsEffects(actions$, userConnector) {
        var _this = this;
        this.actions$ = actions$;
        this.userConnector = userConnector;
        this.loadUserDetails$ = this.actions$.pipe(ofType(fromUserDetailsAction.LOAD_USER_DETAILS), map((/**
         * @param {?} action
         * @return {?}
         */
        function (action) { return action.payload; })), mergeMap((/**
         * @param {?} userId
         * @return {?}
         */
        function (userId) {
            return _this.userConnector.get(userId).pipe(map((/**
             * @param {?} user
             * @return {?}
             */
            function (user) {
                return new fromUserDetailsAction.LoadUserDetailsSuccess(user);
            })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                return of(new fromUserDetailsAction.LoadUserDetailsFail(makeErrorSerializable(error)));
            })));
        })));
        this.updateUserDetails$ = this.actions$.pipe(ofType(fromUserDetailsAction.UPDATE_USER_DETAILS), map((/**
         * @param {?} action
         * @return {?}
         */
        function (action) { return action.payload; })), concatMap((/**
         * @param {?} payload
         * @return {?}
         */
        function (payload) {
            return _this.userConnector.update(payload.username, payload.userDetails).pipe(map((/**
             * @param {?} _
             * @return {?}
             */
            function (_) {
                return new fromUserDetailsAction.UpdateUserDetailsSuccess(payload.userDetails);
            })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                return of(new fromUserDetailsAction.UpdateUserDetailsFail(makeErrorSerializable(error)));
            })));
        })));
    }
    UserDetailsEffects.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    UserDetailsEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: UserConnector }
    ]; };
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Observable)
    ], UserDetailsEffects.prototype, "loadUserDetails$", void 0);
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Observable)
    ], UserDetailsEffects.prototype, "updateUserDetails$", void 0);
    return UserDetailsEffects;
}());
export { UserDetailsEffects };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1kZXRhaWxzLmVmZmVjdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy91c2VyL3N0b3JlL2VmZmVjdHMvdXNlci1kZXRhaWxzLmVmZmVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hELE9BQU8sRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV0RSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUMxRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDckUsT0FBTyxLQUFLLHFCQUFxQixNQUFNLGdDQUFnQyxDQUFDO0FBRXhFO0lBa0RFLDRCQUNVLFFBQWlCLEVBQ2pCLGFBQTRCO1FBRnRDLGlCQUdJO1FBRk0sYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUNqQixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQWpEdEMscUJBQWdCLEdBRVosSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ3BCLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxpQkFBaUIsQ0FBQyxFQUMvQyxHQUFHOzs7O1FBQUMsVUFBQyxNQUE2QyxJQUFLLE9BQUEsTUFBTSxDQUFDLE9BQU8sRUFBZCxDQUFjLEVBQUMsRUFDdEUsUUFBUTs7OztRQUFDLFVBQUEsTUFBTTtZQUNiLE9BQU8sS0FBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUN4QyxHQUFHOzs7O1lBQUMsVUFBQyxJQUFVO2dCQUNiLE9BQU8sSUFBSSxxQkFBcUIsQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNoRSxDQUFDLEVBQUMsRUFDRixVQUFVOzs7O1lBQUMsVUFBQSxLQUFLO2dCQUNkLE9BQUEsRUFBRSxDQUNBLElBQUkscUJBQXFCLENBQUMsbUJBQW1CLENBQzNDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUM3QixDQUNGO1lBSkQsQ0FJQyxFQUNGLENBQ0YsQ0FBQztRQUNKLENBQUMsRUFBQyxDQUNILENBQUM7UUFHRix1QkFBa0IsR0FHZCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDcEIsTUFBTSxDQUFDLHFCQUFxQixDQUFDLG1CQUFtQixDQUFDLEVBQ2pELEdBQUc7Ozs7UUFBQyxVQUFDLE1BQStDLElBQUssT0FBQSxNQUFNLENBQUMsT0FBTyxFQUFkLENBQWMsRUFBQyxFQUN4RSxTQUFTOzs7O1FBQUMsVUFBQSxPQUFPO1lBQ2YsT0FBQSxLQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQ25FLEdBQUc7Ozs7WUFDRCxVQUFBLENBQUM7Z0JBQ0MsT0FBQSxJQUFJLHFCQUFxQixDQUFDLHdCQUF3QixDQUNoRCxPQUFPLENBQUMsV0FBVyxDQUNwQjtZQUZELENBRUMsRUFDSixFQUNELFVBQVU7Ozs7WUFBQyxVQUFBLEtBQUs7Z0JBQ2QsT0FBQSxFQUFFLENBQ0EsSUFBSSxxQkFBcUIsQ0FBQyxxQkFBcUIsQ0FDN0MscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQzdCLENBQ0Y7WUFKRCxDQUlDLEVBQ0YsQ0FDRjtRQWRELENBY0MsRUFDRixDQUNGLENBQUM7SUFLQyxDQUFDOztnQkFyREwsVUFBVTs7OztnQkFSRixPQUFPO2dCQUtQLGFBQWE7O0lBTXBCO1FBREMsTUFBTSxFQUFFOzBDQUNTLFVBQVU7Z0VBbUIxQjtJQUdGO1FBREMsTUFBTSxFQUFFOzBDQUNXLFVBQVU7a0VBdUI1QjtJQU1KLHlCQUFDO0NBQUEsQUF0REQsSUFzREM7U0FyRFksa0JBQWtCOzs7SUFDN0IsOENBb0JFOztJQUVGLGdEQXdCRTs7Ozs7SUFHQSxzQ0FBeUI7Ozs7O0lBQ3pCLDJDQUFvQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCwgb2ZUeXBlIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgY2F0Y2hFcnJvciwgY29uY2F0TWFwLCBtYXAsIG1lcmdlTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4uLy4uLy4uL21vZGVsL21pc2MubW9kZWwnO1xuaW1wb3J0IHsgbWFrZUVycm9yU2VyaWFsaXphYmxlIH0gZnJvbSAnLi4vLi4vLi4vdXRpbC9zZXJpYWxpemF0aW9uLXV0aWxzJztcbmltcG9ydCB7IFVzZXJDb25uZWN0b3IgfSBmcm9tICcuLi8uLi9jb25uZWN0b3JzL3VzZXIvdXNlci5jb25uZWN0b3InO1xuaW1wb3J0ICogYXMgZnJvbVVzZXJEZXRhaWxzQWN0aW9uIGZyb20gJy4uL2FjdGlvbnMvdXNlci1kZXRhaWxzLmFjdGlvbic7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBVc2VyRGV0YWlsc0VmZmVjdHMge1xuICBARWZmZWN0KClcbiAgbG9hZFVzZXJEZXRhaWxzJDogT2JzZXJ2YWJsZTxcbiAgICBmcm9tVXNlckRldGFpbHNBY3Rpb24uVXNlckRldGFpbHNBY3Rpb25cbiAgPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoZnJvbVVzZXJEZXRhaWxzQWN0aW9uLkxPQURfVVNFUl9ERVRBSUxTKSxcbiAgICBtYXAoKGFjdGlvbjogZnJvbVVzZXJEZXRhaWxzQWN0aW9uLkxvYWRVc2VyRGV0YWlscykgPT4gYWN0aW9uLnBheWxvYWQpLFxuICAgIG1lcmdlTWFwKHVzZXJJZCA9PiB7XG4gICAgICByZXR1cm4gdGhpcy51c2VyQ29ubmVjdG9yLmdldCh1c2VySWQpLnBpcGUoXG4gICAgICAgIG1hcCgodXNlcjogVXNlcikgPT4ge1xuICAgICAgICAgIHJldHVybiBuZXcgZnJvbVVzZXJEZXRhaWxzQWN0aW9uLkxvYWRVc2VyRGV0YWlsc1N1Y2Nlc3ModXNlcik7XG4gICAgICAgIH0pLFxuICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+XG4gICAgICAgICAgb2YoXG4gICAgICAgICAgICBuZXcgZnJvbVVzZXJEZXRhaWxzQWN0aW9uLkxvYWRVc2VyRGV0YWlsc0ZhaWwoXG4gICAgICAgICAgICAgIG1ha2VFcnJvclNlcmlhbGl6YWJsZShlcnJvcilcbiAgICAgICAgICAgIClcbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgfSlcbiAgKTtcblxuICBARWZmZWN0KClcbiAgdXBkYXRlVXNlckRldGFpbHMkOiBPYnNlcnZhYmxlPFxuICAgIHwgZnJvbVVzZXJEZXRhaWxzQWN0aW9uLlVwZGF0ZVVzZXJEZXRhaWxzU3VjY2Vzc1xuICAgIHwgZnJvbVVzZXJEZXRhaWxzQWN0aW9uLlVwZGF0ZVVzZXJEZXRhaWxzRmFpbFxuICA+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShmcm9tVXNlckRldGFpbHNBY3Rpb24uVVBEQVRFX1VTRVJfREVUQUlMUyksXG4gICAgbWFwKChhY3Rpb246IGZyb21Vc2VyRGV0YWlsc0FjdGlvbi5VcGRhdGVVc2VyRGV0YWlscykgPT4gYWN0aW9uLnBheWxvYWQpLFxuICAgIGNvbmNhdE1hcChwYXlsb2FkID0+XG4gICAgICB0aGlzLnVzZXJDb25uZWN0b3IudXBkYXRlKHBheWxvYWQudXNlcm5hbWUsIHBheWxvYWQudXNlckRldGFpbHMpLnBpcGUoXG4gICAgICAgIG1hcChcbiAgICAgICAgICBfID0+XG4gICAgICAgICAgICBuZXcgZnJvbVVzZXJEZXRhaWxzQWN0aW9uLlVwZGF0ZVVzZXJEZXRhaWxzU3VjY2VzcyhcbiAgICAgICAgICAgICAgcGF5bG9hZC51c2VyRGV0YWlsc1xuICAgICAgICAgICAgKVxuICAgICAgICApLFxuICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+XG4gICAgICAgICAgb2YoXG4gICAgICAgICAgICBuZXcgZnJvbVVzZXJEZXRhaWxzQWN0aW9uLlVwZGF0ZVVzZXJEZXRhaWxzRmFpbChcbiAgICAgICAgICAgICAgbWFrZUVycm9yU2VyaWFsaXphYmxlKGVycm9yKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgKVxuICAgIClcbiAgKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zLFxuICAgIHByaXZhdGUgdXNlckNvbm5lY3RvcjogVXNlckNvbm5lY3RvclxuICApIHt9XG59XG4iXX0=