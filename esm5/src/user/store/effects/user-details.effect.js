/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, concatMap, map, mergeMap } from 'rxjs/operators';
import { OccUserService } from '../../occ/index';
import * as fromUserDetailsAction from '../actions/user-details.action';
var UserDetailsEffects = /** @class */ (function () {
    function UserDetailsEffects(actions$, occUserService) {
        var _this = this;
        this.actions$ = actions$;
        this.occUserService = occUserService;
        this.loadUserDetails$ = this.actions$.pipe(ofType(fromUserDetailsAction.LOAD_USER_DETAILS), map(function (action) { return action.payload; }), mergeMap(function (userId) {
            return _this.occUserService.loadUser(userId).pipe(map(function (user) {
                return new fromUserDetailsAction.LoadUserDetailsSuccess(user);
            }), catchError(function (error) {
                return of(new fromUserDetailsAction.LoadUserDetailsFail(error));
            }));
        }));
        this.updateUserDetails$ = this.actions$.pipe(ofType(fromUserDetailsAction.UPDATE_USER_DETAILS), map(function (action) { return action.payload; }), concatMap(function (payload) {
            return _this.occUserService
                .updateUserDetails(payload.username, payload.userDetails)
                .pipe(map(function (_) {
                return new fromUserDetailsAction.UpdateUserDetailsSuccess(payload.userDetails);
            }), catchError(function (error) {
                return of(new fromUserDetailsAction.UpdateUserDetailsFail(error));
            }));
        }));
    }
    UserDetailsEffects.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    UserDetailsEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: OccUserService }
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
    UserDetailsEffects.prototype.occUserService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1kZXRhaWxzLmVmZmVjdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy91c2VyL3N0b3JlL2VmZmVjdHMvdXNlci1kZXRhaWxzLmVmZmVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hELE9BQU8sRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN0RSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDakQsT0FBTyxLQUFLLHFCQUFxQixNQUFNLGdDQUFnQyxDQUFDO0FBR3hFO0lBNENFLDRCQUNVLFFBQWlCLEVBQ2pCLGNBQThCO1FBRnhDLGlCQUdJO1FBRk0sYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUNqQixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUEzQ3hDLHFCQUFnQixHQUVaLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUNwQixNQUFNLENBQUMscUJBQXFCLENBQUMsaUJBQWlCLENBQUMsRUFDL0MsR0FBRyxDQUFDLFVBQUMsTUFBNkMsSUFBSyxPQUFBLE1BQU0sQ0FBQyxPQUFPLEVBQWQsQ0FBYyxDQUFDLEVBQ3RFLFFBQVEsQ0FBQyxVQUFBLE1BQU07WUFDYixPQUFPLEtBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FDOUMsR0FBRyxDQUFDLFVBQUMsSUFBVTtnQkFDYixPQUFPLElBQUkscUJBQXFCLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDaEUsQ0FBQyxDQUFDLEVBQ0YsVUFBVSxDQUFDLFVBQUEsS0FBSztnQkFDZCxPQUFBLEVBQUUsQ0FBQyxJQUFJLHFCQUFxQixDQUFDLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQXhELENBQXdELENBQ3pELENBQ0YsQ0FBQztRQUNKLENBQUMsQ0FBQyxDQUNILENBQUM7UUFHRix1QkFBa0IsR0FHZCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDcEIsTUFBTSxDQUFDLHFCQUFxQixDQUFDLG1CQUFtQixDQUFDLEVBQ2pELEdBQUcsQ0FBQyxVQUFDLE1BQStDLElBQUssT0FBQSxNQUFNLENBQUMsT0FBTyxFQUFkLENBQWMsQ0FBQyxFQUN4RSxTQUFTLENBQUMsVUFBQSxPQUFPO1lBQ2YsT0FBQSxLQUFJLENBQUMsY0FBYztpQkFDaEIsaUJBQWlCLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsV0FBVyxDQUFDO2lCQUN4RCxJQUFJLENBQ0gsR0FBRyxDQUNELFVBQUEsQ0FBQztnQkFDQyxPQUFBLElBQUkscUJBQXFCLENBQUMsd0JBQXdCLENBQ2hELE9BQU8sQ0FBQyxXQUFXLENBQ3BCO1lBRkQsQ0FFQyxDQUNKLEVBQ0QsVUFBVSxDQUFDLFVBQUEsS0FBSztnQkFDZCxPQUFBLEVBQUUsQ0FBQyxJQUFJLHFCQUFxQixDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQTFELENBQTBELENBQzNELENBQ0Y7UUFaSCxDQVlHLENBQ0osQ0FDRixDQUFDO0lBS0MsQ0FBQzs7Z0JBL0NMLFVBQVU7Ozs7Z0JBUEYsT0FBTztnQkFHUCxjQUFjOztJQU9yQjtRQURDLE1BQU0sRUFBRTswQ0FDUyxVQUFVO2dFQWUxQjtJQUdGO1FBREMsTUFBTSxFQUFFOzBDQUNXLFVBQVU7a0VBcUI1QjtJQU1KLHlCQUFDO0NBQUEsQUFoREQsSUFnREM7U0EvQ1ksa0JBQWtCOzs7SUFDN0IsOENBZ0JFOztJQUVGLGdEQXNCRTs7Ozs7SUFHQSxzQ0FBeUI7Ozs7O0lBQ3pCLDRDQUFzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCwgb2ZUeXBlIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgY2F0Y2hFcnJvciwgY29uY2F0TWFwLCBtYXAsIG1lcmdlTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgT2NjVXNlclNlcnZpY2UgfSBmcm9tICcuLi8uLi9vY2MvaW5kZXgnO1xuaW1wb3J0ICogYXMgZnJvbVVzZXJEZXRhaWxzQWN0aW9uIGZyb20gJy4uL2FjdGlvbnMvdXNlci1kZXRhaWxzLmFjdGlvbic7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvbWlzYy5tb2RlbCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBVc2VyRGV0YWlsc0VmZmVjdHMge1xuICBARWZmZWN0KClcbiAgbG9hZFVzZXJEZXRhaWxzJDogT2JzZXJ2YWJsZTxcbiAgICBmcm9tVXNlckRldGFpbHNBY3Rpb24uVXNlckRldGFpbHNBY3Rpb25cbiAgPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoZnJvbVVzZXJEZXRhaWxzQWN0aW9uLkxPQURfVVNFUl9ERVRBSUxTKSxcbiAgICBtYXAoKGFjdGlvbjogZnJvbVVzZXJEZXRhaWxzQWN0aW9uLkxvYWRVc2VyRGV0YWlscykgPT4gYWN0aW9uLnBheWxvYWQpLFxuICAgIG1lcmdlTWFwKHVzZXJJZCA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5vY2NVc2VyU2VydmljZS5sb2FkVXNlcih1c2VySWQpLnBpcGUoXG4gICAgICAgIG1hcCgodXNlcjogVXNlcikgPT4ge1xuICAgICAgICAgIHJldHVybiBuZXcgZnJvbVVzZXJEZXRhaWxzQWN0aW9uLkxvYWRVc2VyRGV0YWlsc1N1Y2Nlc3ModXNlcik7XG4gICAgICAgIH0pLFxuICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+XG4gICAgICAgICAgb2YobmV3IGZyb21Vc2VyRGV0YWlsc0FjdGlvbi5Mb2FkVXNlckRldGFpbHNGYWlsKGVycm9yKSlcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICB9KVxuICApO1xuXG4gIEBFZmZlY3QoKVxuICB1cGRhdGVVc2VyRGV0YWlscyQ6IE9ic2VydmFibGU8XG4gICAgfCBmcm9tVXNlckRldGFpbHNBY3Rpb24uVXBkYXRlVXNlckRldGFpbHNTdWNjZXNzXG4gICAgfCBmcm9tVXNlckRldGFpbHNBY3Rpb24uVXBkYXRlVXNlckRldGFpbHNGYWlsXG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKGZyb21Vc2VyRGV0YWlsc0FjdGlvbi5VUERBVEVfVVNFUl9ERVRBSUxTKSxcbiAgICBtYXAoKGFjdGlvbjogZnJvbVVzZXJEZXRhaWxzQWN0aW9uLlVwZGF0ZVVzZXJEZXRhaWxzKSA9PiBhY3Rpb24ucGF5bG9hZCksXG4gICAgY29uY2F0TWFwKHBheWxvYWQgPT5cbiAgICAgIHRoaXMub2NjVXNlclNlcnZpY2VcbiAgICAgICAgLnVwZGF0ZVVzZXJEZXRhaWxzKHBheWxvYWQudXNlcm5hbWUsIHBheWxvYWQudXNlckRldGFpbHMpXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIG1hcChcbiAgICAgICAgICAgIF8gPT5cbiAgICAgICAgICAgICAgbmV3IGZyb21Vc2VyRGV0YWlsc0FjdGlvbi5VcGRhdGVVc2VyRGV0YWlsc1N1Y2Nlc3MoXG4gICAgICAgICAgICAgICAgcGF5bG9hZC51c2VyRGV0YWlsc1xuICAgICAgICAgICAgICApXG4gICAgICAgICAgKSxcbiAgICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+XG4gICAgICAgICAgICBvZihuZXcgZnJvbVVzZXJEZXRhaWxzQWN0aW9uLlVwZGF0ZVVzZXJEZXRhaWxzRmFpbChlcnJvcikpXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgKVxuICApO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnMsXG4gICAgcHJpdmF0ZSBvY2NVc2VyU2VydmljZTogT2NjVXNlclNlcnZpY2VcbiAgKSB7fVxufVxuIl19