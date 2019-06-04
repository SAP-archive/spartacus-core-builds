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
export class ClearMiscsDataEffect {
    /**
     * @param {?} actions$
     */
    constructor(actions$) {
        this.actions$ = actions$;
        this.clearMiscsData$ = this.actions$.pipe(ofType(LANGUAGE_CHANGE, CURRENCY_CHANGE), map(() => {
            return new ClearMiscsData();
        }));
    }
}
ClearMiscsDataEffect.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ClearMiscsDataEffect.ctorParameters = () => [
    { type: Actions }
];
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Observable)
], ClearMiscsDataEffect.prototype, "clearMiscsData$", void 0);
if (false) {
    /** @type {?} */
    ClearMiscsDataEffect.prototype.clearMiscsData$;
    /**
     * @type {?}
     * @private
     */
    ClearMiscsDataEffect.prototype.actions$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xlYXItbWlzY3MtZGF0YS5lZmZlY3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvdXNlci9zdG9yZS9lZmZlY3RzL2NsZWFyLW1pc2NzLWRhdGEuZWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHeEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNsQyxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFckMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx1REFBdUQsQ0FBQztBQUN4RixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFHdkYsTUFBTSxPQUFPLG9CQUFvQjs7OztJQVMvQixZQUFvQixRQUFpQjtRQUFqQixhQUFRLEdBQVIsUUFBUSxDQUFTO1FBUHJDLG9CQUFlLEdBQXVCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUN0RCxNQUFNLENBQUMsZUFBZSxFQUFFLGVBQWUsQ0FBQyxFQUN4QyxHQUFHLENBQUMsR0FBRyxFQUFFO1lBQ1AsT0FBTyxJQUFJLGNBQWMsRUFBRSxDQUFDO1FBQzlCLENBQUMsQ0FBQyxDQUNILENBQUM7SUFFc0MsQ0FBQzs7O1lBVjFDLFVBQVU7Ozs7WUFWRixPQUFPOztBQWFkO0lBREMsTUFBTSxFQUFFO3NDQUNRLFVBQVU7NkRBS3pCOzs7SUFORiwrQ0FNRTs7Ozs7SUFFVSx3Q0FBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCwgb2ZUeXBlIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5pbXBvcnQgeyBBY3Rpb24gfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5cbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgQ2xlYXJNaXNjc0RhdGEgfSBmcm9tICcuLi9hY3Rpb25zL2luZGV4JztcbmltcG9ydCB7IENVUlJFTkNZX0NIQU5HRSB9IGZyb20gJy4uLy4uLy4uL3NpdGUtY29udGV4dC9zdG9yZS9hY3Rpb25zL2N1cnJlbmNpZXMuYWN0aW9uJztcbmltcG9ydCB7IExBTkdVQUdFX0NIQU5HRSB9IGZyb20gJy4uLy4uLy4uL3NpdGUtY29udGV4dC9zdG9yZS9hY3Rpb25zL2xhbmd1YWdlcy5hY3Rpb24nO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ2xlYXJNaXNjc0RhdGFFZmZlY3Qge1xuICBARWZmZWN0KClcbiAgY2xlYXJNaXNjc0RhdGEkOiBPYnNlcnZhYmxlPEFjdGlvbj4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKExBTkdVQUdFX0NIQU5HRSwgQ1VSUkVOQ1lfQ0hBTkdFKSxcbiAgICBtYXAoKCkgPT4ge1xuICAgICAgcmV0dXJuIG5ldyBDbGVhck1pc2NzRGF0YSgpO1xuICAgIH0pXG4gICk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9ucykge31cbn1cbiJdfQ==