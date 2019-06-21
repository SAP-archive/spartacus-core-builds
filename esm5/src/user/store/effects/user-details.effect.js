/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, concatMap, map, mergeMap } from 'rxjs/operators';
import { makeHttpErrorSerializable } from '../../../util/serialization-utils';
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
                return of(new fromUserDetailsAction.LoadUserDetailsFail(makeHttpErrorSerializable(error)));
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
                return of(new fromUserDetailsAction.UpdateUserDetailsFail(makeHttpErrorSerializable(error)));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1kZXRhaWxzLmVmZmVjdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy91c2VyL3N0b3JlL2VmZmVjdHMvdXNlci1kZXRhaWxzLmVmZmVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hELE9BQU8sRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV0RSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUM5RSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDckUsT0FBTyxLQUFLLHFCQUFxQixNQUFNLGdDQUFnQyxDQUFDO0FBRXhFO0lBa0RFLDRCQUNVLFFBQWlCLEVBQ2pCLGFBQTRCO1FBRnRDLGlCQUdJO1FBRk0sYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUNqQixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQWpEdEMscUJBQWdCLEdBRVosSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ3BCLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxpQkFBaUIsQ0FBQyxFQUMvQyxHQUFHOzs7O1FBQUMsVUFBQyxNQUE2QyxJQUFLLE9BQUEsTUFBTSxDQUFDLE9BQU8sRUFBZCxDQUFjLEVBQUMsRUFDdEUsUUFBUTs7OztRQUFDLFVBQUEsTUFBTTtZQUNiLE9BQU8sS0FBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUN4QyxHQUFHOzs7O1lBQUMsVUFBQyxJQUFVO2dCQUNiLE9BQU8sSUFBSSxxQkFBcUIsQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNoRSxDQUFDLEVBQUMsRUFDRixVQUFVOzs7O1lBQUMsVUFBQSxLQUFLO2dCQUNkLE9BQUEsRUFBRSxDQUNBLElBQUkscUJBQXFCLENBQUMsbUJBQW1CLENBQzNDLHlCQUF5QixDQUFDLEtBQUssQ0FBQyxDQUNqQyxDQUNGO1lBSkQsQ0FJQyxFQUNGLENBQ0YsQ0FBQztRQUNKLENBQUMsRUFBQyxDQUNILENBQUM7UUFHRix1QkFBa0IsR0FHZCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDcEIsTUFBTSxDQUFDLHFCQUFxQixDQUFDLG1CQUFtQixDQUFDLEVBQ2pELEdBQUc7Ozs7UUFBQyxVQUFDLE1BQStDLElBQUssT0FBQSxNQUFNLENBQUMsT0FBTyxFQUFkLENBQWMsRUFBQyxFQUN4RSxTQUFTOzs7O1FBQUMsVUFBQSxPQUFPO1lBQ2YsT0FBQSxLQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQ25FLEdBQUc7Ozs7WUFDRCxVQUFBLENBQUM7Z0JBQ0MsT0FBQSxJQUFJLHFCQUFxQixDQUFDLHdCQUF3QixDQUNoRCxPQUFPLENBQUMsV0FBVyxDQUNwQjtZQUZELENBRUMsRUFDSixFQUNELFVBQVU7Ozs7WUFBQyxVQUFBLEtBQUs7Z0JBQ2QsT0FBQSxFQUFFLENBQ0EsSUFBSSxxQkFBcUIsQ0FBQyxxQkFBcUIsQ0FDN0MseUJBQXlCLENBQUMsS0FBSyxDQUFDLENBQ2pDLENBQ0Y7WUFKRCxDQUlDLEVBQ0YsQ0FDRjtRQWRELENBY0MsRUFDRixDQUNGLENBQUM7SUFLQyxDQUFDOztnQkFyREwsVUFBVTs7OztnQkFSRixPQUFPO2dCQUtQLGFBQWE7O0lBTXBCO1FBREMsTUFBTSxFQUFFOzBDQUNTLFVBQVU7Z0VBbUIxQjtJQUdGO1FBREMsTUFBTSxFQUFFOzBDQUNXLFVBQVU7a0VBdUI1QjtJQU1KLHlCQUFDO0NBQUEsQUF0REQsSUFzREM7U0FyRFksa0JBQWtCOzs7SUFDN0IsOENBb0JFOztJQUVGLGdEQXdCRTs7Ozs7SUFHQSxzQ0FBeUI7Ozs7O0lBQ3pCLDJDQUFvQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCwgb2ZUeXBlIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgY2F0Y2hFcnJvciwgY29uY2F0TWFwLCBtYXAsIG1lcmdlTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4uLy4uLy4uL21vZGVsL21pc2MubW9kZWwnO1xuaW1wb3J0IHsgbWFrZUh0dHBFcnJvclNlcmlhbGl6YWJsZSB9IGZyb20gJy4uLy4uLy4uL3V0aWwvc2VyaWFsaXphdGlvbi11dGlscyc7XG5pbXBvcnQgeyBVc2VyQ29ubmVjdG9yIH0gZnJvbSAnLi4vLi4vY29ubmVjdG9ycy91c2VyL3VzZXIuY29ubmVjdG9yJztcbmltcG9ydCAqIGFzIGZyb21Vc2VyRGV0YWlsc0FjdGlvbiBmcm9tICcuLi9hY3Rpb25zL3VzZXItZGV0YWlscy5hY3Rpb24nO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVXNlckRldGFpbHNFZmZlY3RzIHtcbiAgQEVmZmVjdCgpXG4gIGxvYWRVc2VyRGV0YWlscyQ6IE9ic2VydmFibGU8XG4gICAgZnJvbVVzZXJEZXRhaWxzQWN0aW9uLlVzZXJEZXRhaWxzQWN0aW9uXG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKGZyb21Vc2VyRGV0YWlsc0FjdGlvbi5MT0FEX1VTRVJfREVUQUlMUyksXG4gICAgbWFwKChhY3Rpb246IGZyb21Vc2VyRGV0YWlsc0FjdGlvbi5Mb2FkVXNlckRldGFpbHMpID0+IGFjdGlvbi5wYXlsb2FkKSxcbiAgICBtZXJnZU1hcCh1c2VySWQgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMudXNlckNvbm5lY3Rvci5nZXQodXNlcklkKS5waXBlKFxuICAgICAgICBtYXAoKHVzZXI6IFVzZXIpID0+IHtcbiAgICAgICAgICByZXR1cm4gbmV3IGZyb21Vc2VyRGV0YWlsc0FjdGlvbi5Mb2FkVXNlckRldGFpbHNTdWNjZXNzKHVzZXIpO1xuICAgICAgICB9KSxcbiAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PlxuICAgICAgICAgIG9mKFxuICAgICAgICAgICAgbmV3IGZyb21Vc2VyRGV0YWlsc0FjdGlvbi5Mb2FkVXNlckRldGFpbHNGYWlsKFxuICAgICAgICAgICAgICBtYWtlSHR0cEVycm9yU2VyaWFsaXphYmxlKGVycm9yKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICB9KVxuICApO1xuXG4gIEBFZmZlY3QoKVxuICB1cGRhdGVVc2VyRGV0YWlscyQ6IE9ic2VydmFibGU8XG4gICAgfCBmcm9tVXNlckRldGFpbHNBY3Rpb24uVXBkYXRlVXNlckRldGFpbHNTdWNjZXNzXG4gICAgfCBmcm9tVXNlckRldGFpbHNBY3Rpb24uVXBkYXRlVXNlckRldGFpbHNGYWlsXG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKGZyb21Vc2VyRGV0YWlsc0FjdGlvbi5VUERBVEVfVVNFUl9ERVRBSUxTKSxcbiAgICBtYXAoKGFjdGlvbjogZnJvbVVzZXJEZXRhaWxzQWN0aW9uLlVwZGF0ZVVzZXJEZXRhaWxzKSA9PiBhY3Rpb24ucGF5bG9hZCksXG4gICAgY29uY2F0TWFwKHBheWxvYWQgPT5cbiAgICAgIHRoaXMudXNlckNvbm5lY3Rvci51cGRhdGUocGF5bG9hZC51c2VybmFtZSwgcGF5bG9hZC51c2VyRGV0YWlscykucGlwZShcbiAgICAgICAgbWFwKFxuICAgICAgICAgIF8gPT5cbiAgICAgICAgICAgIG5ldyBmcm9tVXNlckRldGFpbHNBY3Rpb24uVXBkYXRlVXNlckRldGFpbHNTdWNjZXNzKFxuICAgICAgICAgICAgICBwYXlsb2FkLnVzZXJEZXRhaWxzXG4gICAgICAgICAgICApXG4gICAgICAgICksXG4gICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT5cbiAgICAgICAgICBvZihcbiAgICAgICAgICAgIG5ldyBmcm9tVXNlckRldGFpbHNBY3Rpb24uVXBkYXRlVXNlckRldGFpbHNGYWlsKFxuICAgICAgICAgICAgICBtYWtlSHR0cEVycm9yU2VyaWFsaXphYmxlKGVycm9yKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgKVxuICAgIClcbiAgKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zLFxuICAgIHByaXZhdGUgdXNlckNvbm5lY3RvcjogVXNlckNvbm5lY3RvclxuICApIHt9XG59XG4iXX0=