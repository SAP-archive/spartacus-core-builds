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
var UpdateEmailEffects = /** @class */ (function () {
    function UpdateEmailEffects(actions$, occUserService) {
        var _this = this;
        this.actions$ = actions$;
        this.occUserService = occUserService;
        this.updateEmail$ = this.actions$.pipe(ofType(fromUpdateEmailAction.UPDATE_EMAIL), map(function (action) { return action.payload; }), concatMap(function (payload) {
            return _this.occUserService
                .updateEmail(payload.uid, payload.password, payload.newUid)
                .pipe(map(function () {
                return new fromUpdateEmailAction.UpdateEmailSuccessAction(payload.newUid);
            }), catchError(function (error) {
                return of(new fromUpdateEmailAction.UpdateEmailErrorAction(error));
            }));
        }));
    }
    UpdateEmailEffects.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    UpdateEmailEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: OccUserService }
    ]; };
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Observable)
    ], UpdateEmailEffects.prototype, "updateEmail$", void 0);
    return UpdateEmailEffects;
}());
export { UpdateEmailEffects };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlLWVtYWlsLmVmZmVjdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy91c2VyL3N0b3JlL2VmZmVjdHMvdXBkYXRlLWVtYWlsLmVmZmVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hELE9BQU8sRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzVELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNqRCxPQUFPLEtBQUsscUJBQXFCLE1BQU0sZ0NBQWdDLENBQUM7QUFFeEU7SUFFRSw0QkFDVSxRQUFpQixFQUNqQixjQUE4QjtRQUZ4QyxpQkFHSTtRQUZNLGFBQVEsR0FBUixRQUFRLENBQVM7UUFDakIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBSXhDLGlCQUFZLEdBR1IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ3BCLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxZQUFZLENBQUMsRUFDMUMsR0FBRyxDQUFDLFVBQUMsTUFBK0MsSUFBSyxPQUFBLE1BQU0sQ0FBQyxPQUFPLEVBQWQsQ0FBYyxDQUFDLEVBQ3hFLFNBQVMsQ0FBQyxVQUFBLE9BQU87WUFDZixPQUFBLEtBQUksQ0FBQyxjQUFjO2lCQUNoQixXQUFXLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxPQUFPLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxNQUFNLENBQUM7aUJBQzFELElBQUksQ0FDSCxHQUFHLENBQ0Q7Z0JBQ0UsT0FBQSxJQUFJLHFCQUFxQixDQUFDLHdCQUF3QixDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7WUFBbEUsQ0FBa0UsQ0FDckUsRUFDRCxVQUFVLENBQUMsVUFBQSxLQUFLO2dCQUNkLE9BQUEsRUFBRSxDQUFDLElBQUkscUJBQXFCLENBQUMsc0JBQXNCLENBQUMsS0FBSyxDQUFDLENBQUM7WUFBM0QsQ0FBMkQsQ0FDNUQsQ0FDRjtRQVZILENBVUcsQ0FDSixDQUNGLENBQUM7SUF0QkMsQ0FBQzs7Z0JBTEwsVUFBVTs7OztnQkFORixPQUFPO2dCQUdQLGNBQWM7O0lBV3JCO1FBREMsTUFBTSxFQUFFOzBDQUNLLFVBQVU7NERBbUJ0QjtJQUNKLHlCQUFDO0NBQUEsQUE1QkQsSUE0QkM7U0EzQlksa0JBQWtCOzs7SUFNN0IsMENBb0JFOzs7OztJQXhCQSxzQ0FBeUI7Ozs7O0lBQ3pCLDRDQUFzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCwgb2ZUeXBlIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgY2F0Y2hFcnJvciwgY29uY2F0TWFwLCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBPY2NVc2VyU2VydmljZSB9IGZyb20gJy4uLy4uL29jYy9pbmRleCc7XG5pbXBvcnQgKiBhcyBmcm9tVXBkYXRlRW1haWxBY3Rpb24gZnJvbSAnLi4vYWN0aW9ucy91cGRhdGUtZW1haWwuYWN0aW9uJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFVwZGF0ZUVtYWlsRWZmZWN0cyB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnMsXG4gICAgcHJpdmF0ZSBvY2NVc2VyU2VydmljZTogT2NjVXNlclNlcnZpY2VcbiAgKSB7fVxuXG4gIEBFZmZlY3QoKVxuICB1cGRhdGVFbWFpbCQ6IE9ic2VydmFibGU8XG4gICAgfCBmcm9tVXBkYXRlRW1haWxBY3Rpb24uVXBkYXRlRW1haWxTdWNjZXNzQWN0aW9uXG4gICAgfCBmcm9tVXBkYXRlRW1haWxBY3Rpb24uVXBkYXRlRW1haWxFcnJvckFjdGlvblxuICA+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShmcm9tVXBkYXRlRW1haWxBY3Rpb24uVVBEQVRFX0VNQUlMKSxcbiAgICBtYXAoKGFjdGlvbjogZnJvbVVwZGF0ZUVtYWlsQWN0aW9uLlVwZGF0ZUVtYWlsQWN0aW9uKSA9PiBhY3Rpb24ucGF5bG9hZCksXG4gICAgY29uY2F0TWFwKHBheWxvYWQgPT5cbiAgICAgIHRoaXMub2NjVXNlclNlcnZpY2VcbiAgICAgICAgLnVwZGF0ZUVtYWlsKHBheWxvYWQudWlkLCBwYXlsb2FkLnBhc3N3b3JkLCBwYXlsb2FkLm5ld1VpZClcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgbWFwKFxuICAgICAgICAgICAgKCkgPT5cbiAgICAgICAgICAgICAgbmV3IGZyb21VcGRhdGVFbWFpbEFjdGlvbi5VcGRhdGVFbWFpbFN1Y2Nlc3NBY3Rpb24ocGF5bG9hZC5uZXdVaWQpXG4gICAgICAgICAgKSxcbiAgICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+XG4gICAgICAgICAgICBvZihuZXcgZnJvbVVwZGF0ZUVtYWlsQWN0aW9uLlVwZGF0ZUVtYWlsRXJyb3JBY3Rpb24oZXJyb3IpKVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgIClcbiAgKTtcbn1cbiJdfQ==