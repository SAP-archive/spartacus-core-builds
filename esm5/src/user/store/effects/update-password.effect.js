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
import * as fromActions from '../actions/update-password.action';
var UpdatePasswordEffects = /** @class */ (function () {
    function UpdatePasswordEffects(actions$, occUserService) {
        var _this = this;
        this.actions$ = actions$;
        this.occUserService = occUserService;
        this.updatePassword$ = this.actions$.pipe(ofType(fromActions.UPDATE_PASSWORD), map(function (action) { return action.payload; }), concatMap(function (payload) {
            return _this.occUserService
                .updatePassword(payload.userId, payload.oldPassword, payload.newPassword)
                .pipe(map(function (_) { return new fromActions.UpdatePasswordSuccess(); }), catchError(function (error) { return of(new fromActions.UpdatePasswordFail(error)); }));
        }));
    }
    UpdatePasswordEffects.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    UpdatePasswordEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: OccUserService }
    ]; };
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Observable)
    ], UpdatePasswordEffects.prototype, "updatePassword$", void 0);
    return UpdatePasswordEffects;
}());
export { UpdatePasswordEffects };
if (false) {
    /** @type {?} */
    UpdatePasswordEffects.prototype.updatePassword$;
    /**
     * @type {?}
     * @private
     */
    UpdatePasswordEffects.prototype.actions$;
    /**
     * @type {?}
     * @private
     */
    UpdatePasswordEffects.prototype.occUserService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlLXBhc3N3b3JkLmVmZmVjdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy91c2VyL3N0b3JlL2VmZmVjdHMvdXBkYXRlLXBhc3N3b3JkLmVmZmVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hELE9BQU8sRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzVELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNqRCxPQUFPLEtBQUssV0FBVyxNQUFNLG1DQUFtQyxDQUFDO0FBRWpFO0lBRUUsK0JBQ1UsUUFBaUIsRUFDakIsY0FBOEI7UUFGeEMsaUJBR0k7UUFGTSxhQUFRLEdBQVIsUUFBUSxDQUFTO1FBQ2pCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUl4QyxvQkFBZSxHQUVYLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUNwQixNQUFNLENBQUMsV0FBVyxDQUFDLGVBQWUsQ0FBQyxFQUNuQyxHQUFHLENBQUMsVUFBQyxNQUFrQyxJQUFLLE9BQUEsTUFBTSxDQUFDLE9BQU8sRUFBZCxDQUFjLENBQUMsRUFDM0QsU0FBUyxDQUFDLFVBQUEsT0FBTztZQUNmLE9BQUEsS0FBSSxDQUFDLGNBQWM7aUJBQ2hCLGNBQWMsQ0FDYixPQUFPLENBQUMsTUFBTSxFQUNkLE9BQU8sQ0FBQyxXQUFXLEVBQ25CLE9BQU8sQ0FBQyxXQUFXLENBQ3BCO2lCQUNBLElBQUksQ0FDSCxHQUFHLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxJQUFJLFdBQVcsQ0FBQyxxQkFBcUIsRUFBRSxFQUF2QyxDQUF1QyxDQUFDLEVBQ2pELFVBQVUsQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLEVBQUUsQ0FBQyxJQUFJLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUE3QyxDQUE2QyxDQUFDLENBQ25FO1FBVEgsQ0FTRyxDQUNKLENBQ0YsQ0FBQztJQXBCQyxDQUFDOztnQkFMTCxVQUFVOzs7O2dCQU5GLE9BQU87Z0JBR1AsY0FBYzs7SUFXckI7UUFEQyxNQUFNLEVBQUU7MENBQ1EsVUFBVTtrRUFpQnpCO0lBQ0osNEJBQUM7Q0FBQSxBQTFCRCxJQTBCQztTQXpCWSxxQkFBcUI7OztJQU1oQyxnREFrQkU7Ozs7O0lBdEJBLHlDQUF5Qjs7Ozs7SUFDekIsK0NBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0LCBvZlR5cGUgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBjYXRjaEVycm9yLCBjb25jYXRNYXAsIG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IE9jY1VzZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vb2NjL2luZGV4JztcbmltcG9ydCAqIGFzIGZyb21BY3Rpb25zIGZyb20gJy4uL2FjdGlvbnMvdXBkYXRlLXBhc3N3b3JkLmFjdGlvbic7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBVcGRhdGVQYXNzd29yZEVmZmVjdHMge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zLFxuICAgIHByaXZhdGUgb2NjVXNlclNlcnZpY2U6IE9jY1VzZXJTZXJ2aWNlXG4gICkge31cblxuICBARWZmZWN0KClcbiAgdXBkYXRlUGFzc3dvcmQkOiBPYnNlcnZhYmxlPFxuICAgIGZyb21BY3Rpb25zLlVwZGF0ZVBhc3N3b3JkU3VjY2VzcyB8IGZyb21BY3Rpb25zLlVwZGF0ZVBhc3N3b3JkRmFpbFxuICA+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShmcm9tQWN0aW9ucy5VUERBVEVfUEFTU1dPUkQpLFxuICAgIG1hcCgoYWN0aW9uOiBmcm9tQWN0aW9ucy5VcGRhdGVQYXNzd29yZCkgPT4gYWN0aW9uLnBheWxvYWQpLFxuICAgIGNvbmNhdE1hcChwYXlsb2FkID0+XG4gICAgICB0aGlzLm9jY1VzZXJTZXJ2aWNlXG4gICAgICAgIC51cGRhdGVQYXNzd29yZChcbiAgICAgICAgICBwYXlsb2FkLnVzZXJJZCxcbiAgICAgICAgICBwYXlsb2FkLm9sZFBhc3N3b3JkLFxuICAgICAgICAgIHBheWxvYWQubmV3UGFzc3dvcmRcbiAgICAgICAgKVxuICAgICAgICAucGlwZShcbiAgICAgICAgICBtYXAoXyA9PiBuZXcgZnJvbUFjdGlvbnMuVXBkYXRlUGFzc3dvcmRTdWNjZXNzKCkpLFxuICAgICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT4gb2YobmV3IGZyb21BY3Rpb25zLlVwZGF0ZVBhc3N3b3JkRmFpbChlcnJvcikpKVxuICAgICAgICApXG4gICAgKVxuICApO1xufVxuIl19