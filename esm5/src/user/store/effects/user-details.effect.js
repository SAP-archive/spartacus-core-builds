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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1kZXRhaWxzLmVmZmVjdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy91c2VyL3N0b3JlL2VmZmVjdHMvdXNlci1kZXRhaWxzLmVmZmVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hELE9BQU8sRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV0RSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDakQsT0FBTyxLQUFLLHFCQUFxQixNQUFNLGdDQUFnQyxDQUFDO0FBRXhFO0lBNENFLDRCQUNVLFFBQWlCLEVBQ2pCLGNBQThCO1FBRnhDLGlCQUdJO1FBRk0sYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUNqQixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUEzQ3hDLHFCQUFnQixHQUVaLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUNwQixNQUFNLENBQUMscUJBQXFCLENBQUMsaUJBQWlCLENBQUMsRUFDL0MsR0FBRyxDQUFDLFVBQUMsTUFBNkMsSUFBSyxPQUFBLE1BQU0sQ0FBQyxPQUFPLEVBQWQsQ0FBYyxDQUFDLEVBQ3RFLFFBQVEsQ0FBQyxVQUFBLE1BQU07WUFDYixPQUFPLEtBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FDOUMsR0FBRyxDQUFDLFVBQUMsSUFBVTtnQkFDYixPQUFPLElBQUkscUJBQXFCLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDaEUsQ0FBQyxDQUFDLEVBQ0YsVUFBVSxDQUFDLFVBQUEsS0FBSztnQkFDZCxPQUFBLEVBQUUsQ0FBQyxJQUFJLHFCQUFxQixDQUFDLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQXhELENBQXdELENBQ3pELENBQ0YsQ0FBQztRQUNKLENBQUMsQ0FBQyxDQUNILENBQUM7UUFHRix1QkFBa0IsR0FHZCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDcEIsTUFBTSxDQUFDLHFCQUFxQixDQUFDLG1CQUFtQixDQUFDLEVBQ2pELEdBQUcsQ0FBQyxVQUFDLE1BQStDLElBQUssT0FBQSxNQUFNLENBQUMsT0FBTyxFQUFkLENBQWMsQ0FBQyxFQUN4RSxTQUFTLENBQUMsVUFBQSxPQUFPO1lBQ2YsT0FBQSxLQUFJLENBQUMsY0FBYztpQkFDaEIsaUJBQWlCLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsV0FBVyxDQUFDO2lCQUN4RCxJQUFJLENBQ0gsR0FBRyxDQUNELFVBQUEsQ0FBQztnQkFDQyxPQUFBLElBQUkscUJBQXFCLENBQUMsd0JBQXdCLENBQ2hELE9BQU8sQ0FBQyxXQUFXLENBQ3BCO1lBRkQsQ0FFQyxDQUNKLEVBQ0QsVUFBVSxDQUFDLFVBQUEsS0FBSztnQkFDZCxPQUFBLEVBQUUsQ0FBQyxJQUFJLHFCQUFxQixDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQTFELENBQTBELENBQzNELENBQ0Y7UUFaSCxDQVlHLENBQ0osQ0FDRixDQUFDO0lBS0MsQ0FBQzs7Z0JBL0NMLFVBQVU7Ozs7Z0JBUEYsT0FBTztnQkFJUCxjQUFjOztJQU1yQjtRQURDLE1BQU0sRUFBRTswQ0FDUyxVQUFVO2dFQWUxQjtJQUdGO1FBREMsTUFBTSxFQUFFOzBDQUNXLFVBQVU7a0VBcUI1QjtJQU1KLHlCQUFDO0NBQUEsQUFoREQsSUFnREM7U0EvQ1ksa0JBQWtCOzs7SUFDN0IsOENBZ0JFOztJQUVGLGdEQXNCRTs7Ozs7SUFHQSxzQ0FBeUI7Ozs7O0lBQ3pCLDRDQUFzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCwgb2ZUeXBlIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgY2F0Y2hFcnJvciwgY29uY2F0TWFwLCBtYXAsIG1lcmdlTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4uLy4uLy4uL29jYy9vY2MtbW9kZWxzL2luZGV4JztcbmltcG9ydCB7IE9jY1VzZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vb2NjL2luZGV4JztcbmltcG9ydCAqIGFzIGZyb21Vc2VyRGV0YWlsc0FjdGlvbiBmcm9tICcuLi9hY3Rpb25zL3VzZXItZGV0YWlscy5hY3Rpb24nO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVXNlckRldGFpbHNFZmZlY3RzIHtcbiAgQEVmZmVjdCgpXG4gIGxvYWRVc2VyRGV0YWlscyQ6IE9ic2VydmFibGU8XG4gICAgZnJvbVVzZXJEZXRhaWxzQWN0aW9uLlVzZXJEZXRhaWxzQWN0aW9uXG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKGZyb21Vc2VyRGV0YWlsc0FjdGlvbi5MT0FEX1VTRVJfREVUQUlMUyksXG4gICAgbWFwKChhY3Rpb246IGZyb21Vc2VyRGV0YWlsc0FjdGlvbi5Mb2FkVXNlckRldGFpbHMpID0+IGFjdGlvbi5wYXlsb2FkKSxcbiAgICBtZXJnZU1hcCh1c2VySWQgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMub2NjVXNlclNlcnZpY2UubG9hZFVzZXIodXNlcklkKS5waXBlKFxuICAgICAgICBtYXAoKHVzZXI6IFVzZXIpID0+IHtcbiAgICAgICAgICByZXR1cm4gbmV3IGZyb21Vc2VyRGV0YWlsc0FjdGlvbi5Mb2FkVXNlckRldGFpbHNTdWNjZXNzKHVzZXIpO1xuICAgICAgICB9KSxcbiAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PlxuICAgICAgICAgIG9mKG5ldyBmcm9tVXNlckRldGFpbHNBY3Rpb24uTG9hZFVzZXJEZXRhaWxzRmFpbChlcnJvcikpXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgfSlcbiAgKTtcblxuICBARWZmZWN0KClcbiAgdXBkYXRlVXNlckRldGFpbHMkOiBPYnNlcnZhYmxlPFxuICAgIHwgZnJvbVVzZXJEZXRhaWxzQWN0aW9uLlVwZGF0ZVVzZXJEZXRhaWxzU3VjY2Vzc1xuICAgIHwgZnJvbVVzZXJEZXRhaWxzQWN0aW9uLlVwZGF0ZVVzZXJEZXRhaWxzRmFpbFxuICA+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShmcm9tVXNlckRldGFpbHNBY3Rpb24uVVBEQVRFX1VTRVJfREVUQUlMUyksXG4gICAgbWFwKChhY3Rpb246IGZyb21Vc2VyRGV0YWlsc0FjdGlvbi5VcGRhdGVVc2VyRGV0YWlscykgPT4gYWN0aW9uLnBheWxvYWQpLFxuICAgIGNvbmNhdE1hcChwYXlsb2FkID0+XG4gICAgICB0aGlzLm9jY1VzZXJTZXJ2aWNlXG4gICAgICAgIC51cGRhdGVVc2VyRGV0YWlscyhwYXlsb2FkLnVzZXJuYW1lLCBwYXlsb2FkLnVzZXJEZXRhaWxzKVxuICAgICAgICAucGlwZShcbiAgICAgICAgICBtYXAoXG4gICAgICAgICAgICBfID0+XG4gICAgICAgICAgICAgIG5ldyBmcm9tVXNlckRldGFpbHNBY3Rpb24uVXBkYXRlVXNlckRldGFpbHNTdWNjZXNzKFxuICAgICAgICAgICAgICAgIHBheWxvYWQudXNlckRldGFpbHNcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICksXG4gICAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PlxuICAgICAgICAgICAgb2YobmV3IGZyb21Vc2VyRGV0YWlsc0FjdGlvbi5VcGRhdGVVc2VyRGV0YWlsc0ZhaWwoZXJyb3IpKVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgIClcbiAgKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zLFxuICAgIHByaXZhdGUgb2NjVXNlclNlcnZpY2U6IE9jY1VzZXJTZXJ2aWNlXG4gICkge31cbn1cbiJdfQ==