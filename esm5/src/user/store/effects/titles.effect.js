/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import * as fromAction from '../actions/titles.action';
import { UserAccountConnector } from '../../connectors/account/user-account.connector';
var TitlesEffects = /** @class */ (function () {
    function TitlesEffects(actions$, userAccountConnector) {
        var _this = this;
        this.actions$ = actions$;
        this.userAccountConnector = userAccountConnector;
        this.loadTitles$ = this.actions$.pipe(ofType(fromAction.LOAD_TITLES), switchMap(function () {
            return _this.userAccountConnector.getTitles().pipe(map(function (titles) {
                /** @type {?} */
                var sortedTitles = _this.sortTitles(titles);
                return new fromAction.LoadTitlesSuccess(sortedTitles);
            }), catchError(function (error) { return of(new fromAction.LoadTitlesFail(error)); }));
        }));
    }
    /**
     * @private
     * @param {?} titles
     * @return {?}
     */
    TitlesEffects.prototype.sortTitles = /**
     * @private
     * @param {?} titles
     * @return {?}
     */
    function (titles) {
        /** @type {?} */
        var drTitle = { code: 'dr', name: 'Dr.' };
        /** @type {?} */
        var revTitle = { code: 'rev', name: 'Rev.' };
        /** @type {?} */
        var filteredTitles = titles.filter(function (t) { return t.code !== 'dr' && t.code !== 'rev'; });
        /** @type {?} */
        var sortedTitles = tslib_1.__spread(filteredTitles, [drTitle, revTitle]);
        return sortedTitles;
    };
    TitlesEffects.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    TitlesEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: UserAccountConnector }
    ]; };
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Observable)
    ], TitlesEffects.prototype, "loadTitles$", void 0);
    return TitlesEffects;
}());
export { TitlesEffects };
if (false) {
    /** @type {?} */
    TitlesEffects.prototype.loadTitles$;
    /**
     * @type {?}
     * @private
     */
    TitlesEffects.prototype.actions$;
    /**
     * @type {?}
     * @private
     */
    TitlesEffects.prototype.userAccountConnector;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGl0bGVzLmVmZmVjdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy91c2VyL3N0b3JlL2VmZmVjdHMvdGl0bGVzLmVmZmVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hELE9BQU8sRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzVELE9BQU8sS0FBSyxVQUFVLE1BQU0sMEJBQTBCLENBQUM7QUFFdkQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0saURBQWlELENBQUM7QUFFdkY7SUEyQkUsdUJBQ1UsUUFBaUIsRUFDakIsb0JBQTBDO1FBRnBELGlCQUdJO1FBRk0sYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUNqQix5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBMUJwRCxnQkFBVyxHQUF3QyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDbkUsTUFBTSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsRUFDOUIsU0FBUyxDQUFDO1lBQ1IsT0FBTyxLQUFJLENBQUMsb0JBQW9CLENBQUMsU0FBUyxFQUFFLENBQUMsSUFBSSxDQUMvQyxHQUFHLENBQUMsVUFBQSxNQUFNOztvQkFDRixZQUFZLEdBQUcsS0FBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUM7Z0JBQzVDLE9BQU8sSUFBSSxVQUFVLENBQUMsaUJBQWlCLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDeEQsQ0FBQyxDQUFDLEVBQ0YsVUFBVSxDQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsRUFBRSxDQUFDLElBQUksVUFBVSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUF4QyxDQUF3QyxDQUFDLENBQzlELENBQUM7UUFDSixDQUFDLENBQUMsQ0FDSCxDQUFDO0lBZ0JDLENBQUM7Ozs7OztJQWRJLGtDQUFVOzs7OztJQUFsQixVQUFtQixNQUFlOztZQUMxQixPQUFPLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUU7O1lBQ3JDLFFBQVEsR0FBRyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRTs7WUFFeEMsY0FBYyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQ2xDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLElBQUksS0FBSyxJQUFJLElBQUksQ0FBQyxDQUFDLElBQUksS0FBSyxLQUFLLEVBQW5DLENBQW1DLENBQ3pDOztZQUNLLFlBQVksb0JBQU8sY0FBYyxHQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUM7UUFDM0QsT0FBTyxZQUFZLENBQUM7SUFDdEIsQ0FBQzs7Z0JBekJGLFVBQVU7Ozs7Z0JBUEYsT0FBTztnQkFLUCxvQkFBb0I7O0lBSzNCO1FBREMsTUFBTSxFQUFFOzBDQUNJLFVBQVU7c0RBV3JCO0lBaUJKLG9CQUFDO0NBQUEsQUEvQkQsSUErQkM7U0E5QlksYUFBYTs7O0lBQ3hCLG9DQVlFOzs7OztJQWNBLGlDQUF5Qjs7Ozs7SUFDekIsNkNBQWtEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0LCBvZlR5cGUgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBjYXRjaEVycm9yLCBtYXAsIHN3aXRjaE1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCAqIGFzIGZyb21BY3Rpb24gZnJvbSAnLi4vYWN0aW9ucy90aXRsZXMuYWN0aW9uJztcbmltcG9ydCB7IFRpdGxlIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvbWlzYy5tb2RlbCc7XG5pbXBvcnQgeyBVc2VyQWNjb3VudENvbm5lY3RvciB9IGZyb20gJy4uLy4uL2Nvbm5lY3RvcnMvYWNjb3VudC91c2VyLWFjY291bnQuY29ubmVjdG9yJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFRpdGxlc0VmZmVjdHMge1xuICBARWZmZWN0KClcbiAgbG9hZFRpdGxlcyQ6IE9ic2VydmFibGU8ZnJvbUFjdGlvbi5UaXRsZXNBY3Rpb24+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShmcm9tQWN0aW9uLkxPQURfVElUTEVTKSxcbiAgICBzd2l0Y2hNYXAoKCkgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMudXNlckFjY291bnRDb25uZWN0b3IuZ2V0VGl0bGVzKCkucGlwZShcbiAgICAgICAgbWFwKHRpdGxlcyA9PiB7XG4gICAgICAgICAgY29uc3Qgc29ydGVkVGl0bGVzID0gdGhpcy5zb3J0VGl0bGVzKHRpdGxlcyk7XG4gICAgICAgICAgcmV0dXJuIG5ldyBmcm9tQWN0aW9uLkxvYWRUaXRsZXNTdWNjZXNzKHNvcnRlZFRpdGxlcyk7XG4gICAgICAgIH0pLFxuICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+IG9mKG5ldyBmcm9tQWN0aW9uLkxvYWRUaXRsZXNGYWlsKGVycm9yKSkpXG4gICAgICApO1xuICAgIH0pXG4gICk7XG5cbiAgcHJpdmF0ZSBzb3J0VGl0bGVzKHRpdGxlczogVGl0bGVbXSkge1xuICAgIGNvbnN0IGRyVGl0bGUgPSB7IGNvZGU6ICdkcicsIG5hbWU6ICdEci4nIH07XG4gICAgY29uc3QgcmV2VGl0bGUgPSB7IGNvZGU6ICdyZXYnLCBuYW1lOiAnUmV2LicgfTtcblxuICAgIGNvbnN0IGZpbHRlcmVkVGl0bGVzID0gdGl0bGVzLmZpbHRlcihcbiAgICAgIHQgPT4gdC5jb2RlICE9PSAnZHInICYmIHQuY29kZSAhPT0gJ3JldidcbiAgICApO1xuICAgIGNvbnN0IHNvcnRlZFRpdGxlcyA9IFsuLi5maWx0ZXJlZFRpdGxlcywgZHJUaXRsZSwgcmV2VGl0bGVdO1xuICAgIHJldHVybiBzb3J0ZWRUaXRsZXM7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zLFxuICAgIHByaXZhdGUgdXNlckFjY291bnRDb25uZWN0b3I6IFVzZXJBY2NvdW50Q29ubmVjdG9yXG4gICkge31cbn1cbiJdfQ==