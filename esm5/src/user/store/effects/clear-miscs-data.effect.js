/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        this.clearMiscsData$ = this.actions$.pipe(ofType(LANGUAGE_CHANGE, CURRENCY_CHANGE), map((/**
         * @return {?}
         */
        function () {
            return new ClearMiscsData();
        })));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xlYXItbWlzY3MtZGF0YS5lZmZlY3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvdXNlci9zdG9yZS9lZmZlY3RzL2NsZWFyLW1pc2NzLWRhdGEuZWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHeEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNsQyxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFckMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx1REFBdUQsQ0FBQztBQUN4RixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFFdkY7SUFVRSw4QkFBb0IsUUFBaUI7UUFBakIsYUFBUSxHQUFSLFFBQVEsQ0FBUztRQVByQyxvQkFBZSxHQUF1QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDdEQsTUFBTSxDQUFDLGVBQWUsRUFBRSxlQUFlLENBQUMsRUFDeEMsR0FBRzs7O1FBQUM7WUFDRixPQUFPLElBQUksY0FBYyxFQUFFLENBQUM7UUFDOUIsQ0FBQyxFQUFDLENBQ0gsQ0FBQztJQUVzQyxDQUFDOztnQkFWMUMsVUFBVTs7OztnQkFWRixPQUFPOztJQWFkO1FBREMsTUFBTSxFQUFFOzBDQUNRLFVBQVU7aUVBS3pCO0lBR0osMkJBQUM7Q0FBQSxBQVhELElBV0M7U0FWWSxvQkFBb0I7OztJQUMvQiwrQ0FNRTs7Ozs7SUFFVSx3Q0FBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCwgb2ZUeXBlIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5pbXBvcnQgeyBBY3Rpb24gfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5cbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgQ2xlYXJNaXNjc0RhdGEgfSBmcm9tICcuLi9hY3Rpb25zL2luZGV4JztcbmltcG9ydCB7IENVUlJFTkNZX0NIQU5HRSB9IGZyb20gJy4uLy4uLy4uL3NpdGUtY29udGV4dC9zdG9yZS9hY3Rpb25zL2N1cnJlbmNpZXMuYWN0aW9uJztcbmltcG9ydCB7IExBTkdVQUdFX0NIQU5HRSB9IGZyb20gJy4uLy4uLy4uL3NpdGUtY29udGV4dC9zdG9yZS9hY3Rpb25zL2xhbmd1YWdlcy5hY3Rpb24nO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ2xlYXJNaXNjc0RhdGFFZmZlY3Qge1xuICBARWZmZWN0KClcbiAgY2xlYXJNaXNjc0RhdGEkOiBPYnNlcnZhYmxlPEFjdGlvbj4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKExBTkdVQUdFX0NIQU5HRSwgQ1VSUkVOQ1lfQ0hBTkdFKSxcbiAgICBtYXAoKCkgPT4ge1xuICAgICAgcmV0dXJuIG5ldyBDbGVhck1pc2NzRGF0YSgpO1xuICAgIH0pXG4gICk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9ucykge31cbn1cbiJdfQ==