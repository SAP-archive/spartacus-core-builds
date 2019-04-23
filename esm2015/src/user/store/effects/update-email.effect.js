/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, concatMap, map } from 'rxjs/operators';
import { OccUserService } from '../../occ/index';
import * as fromUpdateEmailAction from '../actions/update-email.action';
export class UpdateEmailEffects {
    /**
     * @param {?} actions$
     * @param {?} occUserService
     */
    constructor(actions$, occUserService) {
        this.actions$ = actions$;
        this.occUserService = occUserService;
        this.updateEmail$ = this.actions$.pipe(ofType(fromUpdateEmailAction.UPDATE_EMAIL), map((action) => action.payload), concatMap(payload => this.occUserService
            .updateEmail(payload.uid, payload.password, payload.newUid)
            .pipe(map(() => new fromUpdateEmailAction.UpdateEmailSuccessAction(payload.newUid)), catchError(error => of(new fromUpdateEmailAction.UpdateEmailErrorAction(error))))));
    }
}
UpdateEmailEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
UpdateEmailEffects.ctorParameters = () => [
    { type: Actions },
    { type: OccUserService }
];
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Observable)
], UpdateEmailEffects.prototype, "updateEmail$", void 0);
if (false) {
    /** @type {?} */
    UpdateEmailEffects.prototype.updateEmail$;
    /**
     * @type {?}
     * @private
     */
    UpdateEmailEffects.prototype.actions$;
    /**
     * @type {?}
     * @private
     */
    UpdateEmailEffects.prototype.occUserService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlLWVtYWlsLmVmZmVjdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy91c2VyL3N0b3JlL2VmZmVjdHMvdXBkYXRlLWVtYWlsLmVmZmVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hELE9BQU8sRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzVELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNqRCxPQUFPLEtBQUsscUJBQXFCLE1BQU0sZ0NBQWdDLENBQUM7QUFHeEUsTUFBTSxPQUFPLGtCQUFrQjs7Ozs7SUFDN0IsWUFDVSxRQUFpQixFQUNqQixjQUE4QjtRQUQ5QixhQUFRLEdBQVIsUUFBUSxDQUFTO1FBQ2pCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUl4QyxpQkFBWSxHQUdSLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUNwQixNQUFNLENBQUMscUJBQXFCLENBQUMsWUFBWSxDQUFDLEVBQzFDLEdBQUcsQ0FBQyxDQUFDLE1BQStDLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFDeEUsU0FBUyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQ2xCLElBQUksQ0FBQyxjQUFjO2FBQ2hCLFdBQVcsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLE9BQU8sQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLE1BQU0sQ0FBQzthQUMxRCxJQUFJLENBQ0gsR0FBRyxDQUNELEdBQUcsRUFBRSxDQUNILElBQUkscUJBQXFCLENBQUMsd0JBQXdCLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUNyRSxFQUNELFVBQVUsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUNqQixFQUFFLENBQUMsSUFBSSxxQkFBcUIsQ0FBQyxzQkFBc0IsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUM1RCxDQUNGLENBQ0osQ0FDRixDQUFDO0lBdEJDLENBQUM7OztZQUxMLFVBQVU7Ozs7WUFORixPQUFPO1lBR1AsY0FBYzs7QUFXckI7SUFEQyxNQUFNLEVBQUU7c0NBQ0ssVUFBVTt3REFtQnRCOzs7SUFwQkYsMENBb0JFOzs7OztJQXhCQSxzQ0FBeUI7Ozs7O0lBQ3pCLDRDQUFzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCwgb2ZUeXBlIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgY2F0Y2hFcnJvciwgY29uY2F0TWFwLCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBPY2NVc2VyU2VydmljZSB9IGZyb20gJy4uLy4uL29jYy9pbmRleCc7XG5pbXBvcnQgKiBhcyBmcm9tVXBkYXRlRW1haWxBY3Rpb24gZnJvbSAnLi4vYWN0aW9ucy91cGRhdGUtZW1haWwuYWN0aW9uJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFVwZGF0ZUVtYWlsRWZmZWN0cyB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnMsXG4gICAgcHJpdmF0ZSBvY2NVc2VyU2VydmljZTogT2NjVXNlclNlcnZpY2VcbiAgKSB7fVxuXG4gIEBFZmZlY3QoKVxuICB1cGRhdGVFbWFpbCQ6IE9ic2VydmFibGU8XG4gICAgfCBmcm9tVXBkYXRlRW1haWxBY3Rpb24uVXBkYXRlRW1haWxTdWNjZXNzQWN0aW9uXG4gICAgfCBmcm9tVXBkYXRlRW1haWxBY3Rpb24uVXBkYXRlRW1haWxFcnJvckFjdGlvblxuICA+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShmcm9tVXBkYXRlRW1haWxBY3Rpb24uVVBEQVRFX0VNQUlMKSxcbiAgICBtYXAoKGFjdGlvbjogZnJvbVVwZGF0ZUVtYWlsQWN0aW9uLlVwZGF0ZUVtYWlsQWN0aW9uKSA9PiBhY3Rpb24ucGF5bG9hZCksXG4gICAgY29uY2F0TWFwKHBheWxvYWQgPT5cbiAgICAgIHRoaXMub2NjVXNlclNlcnZpY2VcbiAgICAgICAgLnVwZGF0ZUVtYWlsKHBheWxvYWQudWlkLCBwYXlsb2FkLnBhc3N3b3JkLCBwYXlsb2FkLm5ld1VpZClcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgbWFwKFxuICAgICAgICAgICAgKCkgPT5cbiAgICAgICAgICAgICAgbmV3IGZyb21VcGRhdGVFbWFpbEFjdGlvbi5VcGRhdGVFbWFpbFN1Y2Nlc3NBY3Rpb24ocGF5bG9hZC5uZXdVaWQpXG4gICAgICAgICAgKSxcbiAgICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+XG4gICAgICAgICAgICBvZihuZXcgZnJvbVVwZGF0ZUVtYWlsQWN0aW9uLlVwZGF0ZUVtYWlsRXJyb3JBY3Rpb24oZXJyb3IpKVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgIClcbiAgKTtcbn1cbiJdfQ==