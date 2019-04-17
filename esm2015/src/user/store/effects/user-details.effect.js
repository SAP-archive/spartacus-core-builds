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
export class UserDetailsEffects {
    /**
     * @param {?} actions$
     * @param {?} occUserService
     */
    constructor(actions$, occUserService) {
        this.actions$ = actions$;
        this.occUserService = occUserService;
        this.loadUserDetails$ = this.actions$.pipe(ofType(fromUserDetailsAction.LOAD_USER_DETAILS), map((action) => action.payload), mergeMap(userId => {
            return this.occUserService.loadUser(userId).pipe(map((user) => {
                return new fromUserDetailsAction.LoadUserDetailsSuccess(user);
            }), catchError(error => of(new fromUserDetailsAction.LoadUserDetailsFail(error))));
        }));
        this.updateUserDetails$ = this.actions$.pipe(ofType(fromUserDetailsAction.UPDATE_USER_DETAILS), map((action) => action.payload), concatMap(payload => this.occUserService
            .updateUserDetails(payload.username, payload.userDetails)
            .pipe(map(_ => new fromUserDetailsAction.UpdateUserDetailsSuccess(payload.userDetails)), catchError(error => of(new fromUserDetailsAction.UpdateUserDetailsFail(error))))));
    }
}
UserDetailsEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
UserDetailsEffects.ctorParameters = () => [
    { type: Actions },
    { type: OccUserService }
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
    UserDetailsEffects.prototype.occUserService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1kZXRhaWxzLmVmZmVjdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy91c2VyL3N0b3JlL2VmZmVjdHMvdXNlci1kZXRhaWxzLmVmZmVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hELE9BQU8sRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV0RSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDakQsT0FBTyxLQUFLLHFCQUFxQixNQUFNLGdDQUFnQyxDQUFDO0FBR3hFLE1BQU0sT0FBTyxrQkFBa0I7Ozs7O0lBMkM3QixZQUNVLFFBQWlCLEVBQ2pCLGNBQThCO1FBRDlCLGFBQVEsR0FBUixRQUFRLENBQVM7UUFDakIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBM0N4QyxxQkFBZ0IsR0FFWixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDcEIsTUFBTSxDQUFDLHFCQUFxQixDQUFDLGlCQUFpQixDQUFDLEVBQy9DLEdBQUcsQ0FBQyxDQUFDLE1BQTZDLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFDdEUsUUFBUSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQ2hCLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUM5QyxHQUFHLENBQUMsQ0FBQyxJQUFVLEVBQUUsRUFBRTtnQkFDakIsT0FBTyxJQUFJLHFCQUFxQixDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2hFLENBQUMsQ0FBQyxFQUNGLFVBQVUsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUNqQixFQUFFLENBQUMsSUFBSSxxQkFBcUIsQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUN6RCxDQUNGLENBQUM7UUFDSixDQUFDLENBQUMsQ0FDSCxDQUFDO1FBR0YsdUJBQWtCLEdBR2QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ3BCLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxtQkFBbUIsQ0FBQyxFQUNqRCxHQUFHLENBQUMsQ0FBQyxNQUErQyxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQ3hFLFNBQVMsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUNsQixJQUFJLENBQUMsY0FBYzthQUNoQixpQkFBaUIsQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxXQUFXLENBQUM7YUFDeEQsSUFBSSxDQUNILEdBQUcsQ0FDRCxDQUFDLENBQUMsRUFBRSxDQUNGLElBQUkscUJBQXFCLENBQUMsd0JBQXdCLENBQ2hELE9BQU8sQ0FBQyxXQUFXLENBQ3BCLENBQ0osRUFDRCxVQUFVLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FDakIsRUFBRSxDQUFDLElBQUkscUJBQXFCLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FDM0QsQ0FDRixDQUNKLENBQ0YsQ0FBQztJQUtDLENBQUM7OztZQS9DTCxVQUFVOzs7O1lBUEYsT0FBTztZQUlQLGNBQWM7O0FBTXJCO0lBREMsTUFBTSxFQUFFO3NDQUNTLFVBQVU7NERBZTFCO0FBR0Y7SUFEQyxNQUFNLEVBQUU7c0NBQ1csVUFBVTs4REFxQjVCOzs7SUF4Q0YsOENBZ0JFOztJQUVGLGdEQXNCRTs7Ozs7SUFHQSxzQ0FBeUI7Ozs7O0lBQ3pCLDRDQUFzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCwgb2ZUeXBlIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgY2F0Y2hFcnJvciwgY29uY2F0TWFwLCBtYXAsIG1lcmdlTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4uLy4uLy4uL29jYy9vY2MtbW9kZWxzL2luZGV4JztcbmltcG9ydCB7IE9jY1VzZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vb2NjL2luZGV4JztcbmltcG9ydCAqIGFzIGZyb21Vc2VyRGV0YWlsc0FjdGlvbiBmcm9tICcuLi9hY3Rpb25zL3VzZXItZGV0YWlscy5hY3Rpb24nO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVXNlckRldGFpbHNFZmZlY3RzIHtcbiAgQEVmZmVjdCgpXG4gIGxvYWRVc2VyRGV0YWlscyQ6IE9ic2VydmFibGU8XG4gICAgZnJvbVVzZXJEZXRhaWxzQWN0aW9uLlVzZXJEZXRhaWxzQWN0aW9uXG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKGZyb21Vc2VyRGV0YWlsc0FjdGlvbi5MT0FEX1VTRVJfREVUQUlMUyksXG4gICAgbWFwKChhY3Rpb246IGZyb21Vc2VyRGV0YWlsc0FjdGlvbi5Mb2FkVXNlckRldGFpbHMpID0+IGFjdGlvbi5wYXlsb2FkKSxcbiAgICBtZXJnZU1hcCh1c2VySWQgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMub2NjVXNlclNlcnZpY2UubG9hZFVzZXIodXNlcklkKS5waXBlKFxuICAgICAgICBtYXAoKHVzZXI6IFVzZXIpID0+IHtcbiAgICAgICAgICByZXR1cm4gbmV3IGZyb21Vc2VyRGV0YWlsc0FjdGlvbi5Mb2FkVXNlckRldGFpbHNTdWNjZXNzKHVzZXIpO1xuICAgICAgICB9KSxcbiAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PlxuICAgICAgICAgIG9mKG5ldyBmcm9tVXNlckRldGFpbHNBY3Rpb24uTG9hZFVzZXJEZXRhaWxzRmFpbChlcnJvcikpXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgfSlcbiAgKTtcblxuICBARWZmZWN0KClcbiAgdXBkYXRlVXNlckRldGFpbHMkOiBPYnNlcnZhYmxlPFxuICAgIHwgZnJvbVVzZXJEZXRhaWxzQWN0aW9uLlVwZGF0ZVVzZXJEZXRhaWxzU3VjY2Vzc1xuICAgIHwgZnJvbVVzZXJEZXRhaWxzQWN0aW9uLlVwZGF0ZVVzZXJEZXRhaWxzRmFpbFxuICA+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShmcm9tVXNlckRldGFpbHNBY3Rpb24uVVBEQVRFX1VTRVJfREVUQUlMUyksXG4gICAgbWFwKChhY3Rpb246IGZyb21Vc2VyRGV0YWlsc0FjdGlvbi5VcGRhdGVVc2VyRGV0YWlscykgPT4gYWN0aW9uLnBheWxvYWQpLFxuICAgIGNvbmNhdE1hcChwYXlsb2FkID0+XG4gICAgICB0aGlzLm9jY1VzZXJTZXJ2aWNlXG4gICAgICAgIC51cGRhdGVVc2VyRGV0YWlscyhwYXlsb2FkLnVzZXJuYW1lLCBwYXlsb2FkLnVzZXJEZXRhaWxzKVxuICAgICAgICAucGlwZShcbiAgICAgICAgICBtYXAoXG4gICAgICAgICAgICBfID0+XG4gICAgICAgICAgICAgIG5ldyBmcm9tVXNlckRldGFpbHNBY3Rpb24uVXBkYXRlVXNlckRldGFpbHNTdWNjZXNzKFxuICAgICAgICAgICAgICAgIHBheWxvYWQudXNlckRldGFpbHNcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICksXG4gICAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PlxuICAgICAgICAgICAgb2YobmV3IGZyb21Vc2VyRGV0YWlsc0FjdGlvbi5VcGRhdGVVc2VyRGV0YWlsc0ZhaWwoZXJyb3IpKVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgIClcbiAgKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zLFxuICAgIHByaXZhdGUgb2NjVXNlclNlcnZpY2U6IE9jY1VzZXJTZXJ2aWNlXG4gICkge31cbn1cbiJdfQ==