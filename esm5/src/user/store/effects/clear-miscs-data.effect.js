/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ClearMiscsData } from '../actions/index';
import { CURRENCY_CHANGE } from '../../../site-context/store/actions/currencies.action';
import { LANGUAGE_CHANGE } from '../../../site-context/store/actions/languages.action';
var ClearMiscsDataEffect = /** @class */ (function () {
    function ClearMiscsDataEffect(actions$) {
        this.actions$ = actions$;
        this.clearMiscsData$ = this.actions$.pipe(ofType(LANGUAGE_CHANGE, CURRENCY_CHANGE), map(function () {
            return new ClearMiscsData();
        }));
    }
    ClearMiscsDataEffect.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    ClearMiscsDataEffect.ctorParameters = function () { return [
        { type: Actions }
    ]; };
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Observable)
    ], ClearMiscsDataEffect.prototype, "clearMiscsData$", void 0);
    return ClearMiscsDataEffect;
}());
export { ClearMiscsDataEffect };
if (false) {
    /** @type {?} */
    ClearMiscsDataEffect.prototype.clearMiscsData$;
    /**
     * @type {?}
     * @private
     */
    ClearMiscsDataEffect.prototype.actions$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xlYXItbWlzY3MtZGF0YS5lZmZlY3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvdXNlci9zdG9yZS9lZmZlY3RzL2NsZWFyLW1pc2NzLWRhdGEuZWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHeEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNsQyxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFckMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx1REFBdUQsQ0FBQztBQUN4RixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFFdkY7SUFVRSw4QkFBb0IsUUFBaUI7UUFBakIsYUFBUSxHQUFSLFFBQVEsQ0FBUztRQVByQyxvQkFBZSxHQUF1QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDdEQsTUFBTSxDQUFDLGVBQWUsRUFBRSxlQUFlLENBQUMsRUFDeEMsR0FBRyxDQUFDO1lBQ0YsT0FBTyxJQUFJLGNBQWMsRUFBRSxDQUFDO1FBQzlCLENBQUMsQ0FBQyxDQUNILENBQUM7SUFFc0MsQ0FBQzs7Z0JBVjFDLFVBQVU7Ozs7Z0JBVkYsT0FBTzs7SUFhZDtRQURDLE1BQU0sRUFBRTswQ0FDUSxVQUFVO2lFQUt6QjtJQUdKLDJCQUFDO0NBQUEsQUFYRCxJQVdDO1NBVlksb0JBQW9COzs7SUFDL0IsK0NBTUU7Ozs7O0lBRVUsd0NBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QsIG9mVHlwZSB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IENsZWFyTWlzY3NEYXRhIH0gZnJvbSAnLi4vYWN0aW9ucy9pbmRleCc7XG5pbXBvcnQgeyBDVVJSRU5DWV9DSEFOR0UgfSBmcm9tICcuLi8uLi8uLi9zaXRlLWNvbnRleHQvc3RvcmUvYWN0aW9ucy9jdXJyZW5jaWVzLmFjdGlvbic7XG5pbXBvcnQgeyBMQU5HVUFHRV9DSEFOR0UgfSBmcm9tICcuLi8uLi8uLi9zaXRlLWNvbnRleHQvc3RvcmUvYWN0aW9ucy9sYW5ndWFnZXMuYWN0aW9uJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENsZWFyTWlzY3NEYXRhRWZmZWN0IHtcbiAgQEVmZmVjdCgpXG4gIGNsZWFyTWlzY3NEYXRhJDogT2JzZXJ2YWJsZTxBY3Rpb24+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShMQU5HVUFHRV9DSEFOR0UsIENVUlJFTkNZX0NIQU5HRSksXG4gICAgbWFwKCgpID0+IHtcbiAgICAgIHJldHVybiBuZXcgQ2xlYXJNaXNjc0RhdGEoKTtcbiAgICB9KVxuICApO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnMpIHt9XG59XG4iXX0=