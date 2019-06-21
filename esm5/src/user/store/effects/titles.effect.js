/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { makeHttpErrorSerializable } from '../../../util/serialization-utils';
import { UserConnector } from '../../connectors/user/user.connector';
import * as fromAction from '../actions/titles.action';
var TitlesEffects = /** @class */ (function () {
    function TitlesEffects(actions$, userAccountConnector) {
        var _this = this;
        this.actions$ = actions$;
        this.userAccountConnector = userAccountConnector;
        this.loadTitles$ = this.actions$.pipe(ofType(fromAction.LOAD_TITLES), switchMap((/**
         * @return {?}
         */
        function () {
            return _this.userAccountConnector.getTitles().pipe(map((/**
             * @param {?} titles
             * @return {?}
             */
            function (titles) {
                /** @type {?} */
                var sortedTitles = _this.sortTitles(titles);
                return new fromAction.LoadTitlesSuccess(sortedTitles);
            })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                return of(new fromAction.LoadTitlesFail(makeHttpErrorSerializable(error)));
            })));
        })));
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
        var filteredTitles = titles.filter((/**
         * @param {?} t
         * @return {?}
         */
        function (t) { return t.code !== 'dr' && t.code !== 'rev'; }));
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
        { type: UserConnector }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGl0bGVzLmVmZmVjdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy91c2VyL3N0b3JlL2VmZmVjdHMvdGl0bGVzLmVmZmVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hELE9BQU8sRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTVELE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQzlFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUNyRSxPQUFPLEtBQUssVUFBVSxNQUFNLDBCQUEwQixDQUFDO0FBRXZEO0lBNkJFLHVCQUNVLFFBQWlCLEVBQ2pCLG9CQUFtQztRQUY3QyxpQkFHSTtRQUZNLGFBQVEsR0FBUixRQUFRLENBQVM7UUFDakIseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFlO1FBNUI3QyxnQkFBVyxHQUF3QyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDbkUsTUFBTSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsRUFDOUIsU0FBUzs7O1FBQUM7WUFDUixPQUFPLEtBQUksQ0FBQyxvQkFBb0IsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxJQUFJLENBQy9DLEdBQUc7Ozs7WUFBQyxVQUFBLE1BQU07O29CQUNGLFlBQVksR0FBRyxLQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQztnQkFDNUMsT0FBTyxJQUFJLFVBQVUsQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUN4RCxDQUFDLEVBQUMsRUFDRixVQUFVOzs7O1lBQUMsVUFBQSxLQUFLO2dCQUNkLE9BQUEsRUFBRSxDQUFDLElBQUksVUFBVSxDQUFDLGNBQWMsQ0FBQyx5QkFBeUIsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQW5FLENBQW1FLEVBQ3BFLENBQ0YsQ0FBQztRQUNKLENBQUMsRUFBQyxDQUNILENBQUM7SUFnQkMsQ0FBQzs7Ozs7O0lBZEksa0NBQVU7Ozs7O0lBQWxCLFVBQW1CLE1BQWU7O1lBQzFCLE9BQU8sR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRTs7WUFDckMsUUFBUSxHQUFHLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFOztZQUV4QyxjQUFjLEdBQUcsTUFBTSxDQUFDLE1BQU07Ozs7UUFDbEMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsSUFBSSxLQUFLLElBQUksSUFBSSxDQUFDLENBQUMsSUFBSSxLQUFLLEtBQUssRUFBbkMsQ0FBbUMsRUFDekM7O1lBQ0ssWUFBWSxvQkFBTyxjQUFjLEdBQUUsT0FBTyxFQUFFLFFBQVEsRUFBQztRQUMzRCxPQUFPLFlBQVksQ0FBQztJQUN0QixDQUFDOztnQkEzQkYsVUFBVTs7OztnQkFSRixPQUFPO2dCQUtQLGFBQWE7O0lBTXBCO1FBREMsTUFBTSxFQUFFOzBDQUNJLFVBQVU7c0RBYXJCO0lBaUJKLG9CQUFDO0NBQUEsQUFqQ0QsSUFpQ0M7U0FoQ1ksYUFBYTs7O0lBQ3hCLG9DQWNFOzs7OztJQWNBLGlDQUF5Qjs7Ozs7SUFDekIsNkNBQTJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0LCBvZlR5cGUgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBjYXRjaEVycm9yLCBtYXAsIHN3aXRjaE1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFRpdGxlIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvbWlzYy5tb2RlbCc7XG5pbXBvcnQgeyBtYWtlSHR0cEVycm9yU2VyaWFsaXphYmxlIH0gZnJvbSAnLi4vLi4vLi4vdXRpbC9zZXJpYWxpemF0aW9uLXV0aWxzJztcbmltcG9ydCB7IFVzZXJDb25uZWN0b3IgfSBmcm9tICcuLi8uLi9jb25uZWN0b3JzL3VzZXIvdXNlci5jb25uZWN0b3InO1xuaW1wb3J0ICogYXMgZnJvbUFjdGlvbiBmcm9tICcuLi9hY3Rpb25zL3RpdGxlcy5hY3Rpb24nO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVGl0bGVzRWZmZWN0cyB7XG4gIEBFZmZlY3QoKVxuICBsb2FkVGl0bGVzJDogT2JzZXJ2YWJsZTxmcm9tQWN0aW9uLlRpdGxlc0FjdGlvbj4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKGZyb21BY3Rpb24uTE9BRF9USVRMRVMpLFxuICAgIHN3aXRjaE1hcCgoKSA9PiB7XG4gICAgICByZXR1cm4gdGhpcy51c2VyQWNjb3VudENvbm5lY3Rvci5nZXRUaXRsZXMoKS5waXBlKFxuICAgICAgICBtYXAodGl0bGVzID0+IHtcbiAgICAgICAgICBjb25zdCBzb3J0ZWRUaXRsZXMgPSB0aGlzLnNvcnRUaXRsZXModGl0bGVzKTtcbiAgICAgICAgICByZXR1cm4gbmV3IGZyb21BY3Rpb24uTG9hZFRpdGxlc1N1Y2Nlc3Moc29ydGVkVGl0bGVzKTtcbiAgICAgICAgfSksXG4gICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT5cbiAgICAgICAgICBvZihuZXcgZnJvbUFjdGlvbi5Mb2FkVGl0bGVzRmFpbChtYWtlSHR0cEVycm9yU2VyaWFsaXphYmxlKGVycm9yKSkpXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgfSlcbiAgKTtcblxuICBwcml2YXRlIHNvcnRUaXRsZXModGl0bGVzOiBUaXRsZVtdKSB7XG4gICAgY29uc3QgZHJUaXRsZSA9IHsgY29kZTogJ2RyJywgbmFtZTogJ0RyLicgfTtcbiAgICBjb25zdCByZXZUaXRsZSA9IHsgY29kZTogJ3JldicsIG5hbWU6ICdSZXYuJyB9O1xuXG4gICAgY29uc3QgZmlsdGVyZWRUaXRsZXMgPSB0aXRsZXMuZmlsdGVyKFxuICAgICAgdCA9PiB0LmNvZGUgIT09ICdkcicgJiYgdC5jb2RlICE9PSAncmV2J1xuICAgICk7XG4gICAgY29uc3Qgc29ydGVkVGl0bGVzID0gWy4uLmZpbHRlcmVkVGl0bGVzLCBkclRpdGxlLCByZXZUaXRsZV07XG4gICAgcmV0dXJuIHNvcnRlZFRpdGxlcztcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnMsXG4gICAgcHJpdmF0ZSB1c2VyQWNjb3VudENvbm5lY3RvcjogVXNlckNvbm5lY3RvclxuICApIHt9XG59XG4iXX0=