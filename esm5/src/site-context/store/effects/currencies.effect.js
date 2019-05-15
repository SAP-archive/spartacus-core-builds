/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { map, catchError, exhaustMap, tap } from 'rxjs/operators';
import * as actions from '../actions/currencies.action';
import { WindowRef } from '../../../window/window-ref';
import { SiteConnector } from '../../connectors/site.connector';
var CurrenciesEffects = /** @class */ (function () {
    function CurrenciesEffects(actions$, siteConnector, winRef) {
        var _this = this;
        this.actions$ = actions$;
        this.siteConnector = siteConnector;
        this.winRef = winRef;
        this.loadCurrencies$ = this.actions$.pipe(ofType(actions.LOAD_CURRENCIES), exhaustMap(function () {
            return _this.siteConnector.getCurrencies().pipe(map(function (currencies) { return new actions.LoadCurrenciesSuccess(currencies); }), catchError(function (error) { return of(new actions.LoadCurrenciesFail(error)); }));
        }));
        this.activateCurrency$ = this.actions$.pipe(ofType(actions.SET_ACTIVE_CURRENCY), tap(function (action) {
            if (_this.winRef.sessionStorage) {
                _this.winRef.sessionStorage.setItem('currency', action.payload);
            }
        }), map(function () { return new actions.CurrencyChange(); }));
    }
    CurrenciesEffects.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    CurrenciesEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: SiteConnector },
        { type: WindowRef }
    ]; };
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Observable)
    ], CurrenciesEffects.prototype, "loadCurrencies$", void 0);
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Observable)
    ], CurrenciesEffects.prototype, "activateCurrency$", void 0);
    return CurrenciesEffects;
}());
export { CurrenciesEffects };
if (false) {
    /** @type {?} */
    CurrenciesEffects.prototype.loadCurrencies$;
    /** @type {?} */
    CurrenciesEffects.prototype.activateCurrency$;
    /**
     * @type {?}
     * @private
     */
    CurrenciesEffects.prototype.actions$;
    /**
     * @type {?}
     * @private
     */
    CurrenciesEffects.prototype.siteConnector;
    /**
     * @type {?}
     * @private
     */
    CurrenciesEffects.prototype.winRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VycmVuY2llcy5lZmZlY3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvc2l0ZS1jb250ZXh0L3N0b3JlL2VmZmVjdHMvY3VycmVuY2llcy5lZmZlY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4RCxPQUFPLEVBQUUsR0FBRyxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFbEUsT0FBTyxLQUFLLE9BQU8sTUFBTSw4QkFBOEIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBRWhFO0lBd0JFLDJCQUNVLFFBQWlCLEVBQ2pCLGFBQTRCLEVBQzVCLE1BQWlCO1FBSDNCLGlCQUlJO1FBSE0sYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUNqQixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QixXQUFNLEdBQU4sTUFBTSxDQUFXO1FBeEIzQixvQkFBZSxHQUFvQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDbkQsTUFBTSxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsRUFDL0IsVUFBVSxDQUFDO1lBQ1QsT0FBTyxLQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsRUFBRSxDQUFDLElBQUksQ0FDNUMsR0FBRyxDQUFDLFVBQUEsVUFBVSxJQUFJLE9BQUEsSUFBSSxPQUFPLENBQUMscUJBQXFCLENBQUMsVUFBVSxDQUFDLEVBQTdDLENBQTZDLENBQUMsRUFDaEUsVUFBVSxDQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsRUFBRSxDQUFDLElBQUksT0FBTyxDQUFDLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQXpDLENBQXlDLENBQUMsQ0FDL0QsQ0FBQztRQUNKLENBQUMsQ0FBQyxDQUNILENBQUM7UUFHRixzQkFBaUIsR0FBb0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ3JELE1BQU0sQ0FBQyxPQUFPLENBQUMsbUJBQW1CLENBQUMsRUFDbkMsR0FBRyxDQUFDLFVBQUMsTUFBaUM7WUFDcEMsSUFBSSxLQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRTtnQkFDOUIsS0FBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDaEU7UUFDSCxDQUFDLENBQUMsRUFDRixHQUFHLENBQUMsY0FBTSxPQUFBLElBQUksT0FBTyxDQUFDLGNBQWMsRUFBRSxFQUE1QixDQUE0QixDQUFDLENBQ3hDLENBQUM7SUFNQyxDQUFDOztnQkE1QkwsVUFBVTs7OztnQkFQTSxPQUFPO2dCQUtmLGFBQWE7Z0JBRGIsU0FBUzs7SUFNaEI7UUFEQyxNQUFNLEVBQUU7MENBQ1EsVUFBVTs4REFRekI7SUFHRjtRQURDLE1BQU0sRUFBRTswQ0FDVSxVQUFVO2dFQVEzQjtJQU9KLHdCQUFDO0NBQUEsQUE3QkQsSUE2QkM7U0E1QlksaUJBQWlCOzs7SUFDNUIsNENBU0U7O0lBRUYsOENBU0U7Ozs7O0lBR0EscUNBQXlCOzs7OztJQUN6QiwwQ0FBb0M7Ozs7O0lBQ3BDLG1DQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEVmZmVjdCwgQWN0aW9ucywgb2ZUeXBlIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5pbXBvcnQgeyBtYXAsIGNhdGNoRXJyb3IsIGV4aGF1c3RNYXAsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0ICogYXMgYWN0aW9ucyBmcm9tICcuLi9hY3Rpb25zL2N1cnJlbmNpZXMuYWN0aW9uJztcbmltcG9ydCB7IFdpbmRvd1JlZiB9IGZyb20gJy4uLy4uLy4uL3dpbmRvdy93aW5kb3ctcmVmJztcbmltcG9ydCB7IFNpdGVDb25uZWN0b3IgfSBmcm9tICcuLi8uLi9jb25uZWN0b3JzL3NpdGUuY29ubmVjdG9yJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEN1cnJlbmNpZXNFZmZlY3RzIHtcbiAgQEVmZmVjdCgpXG4gIGxvYWRDdXJyZW5jaWVzJDogT2JzZXJ2YWJsZTxhbnk+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShhY3Rpb25zLkxPQURfQ1VSUkVOQ0lFUyksXG4gICAgZXhoYXVzdE1hcCgoKSA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5zaXRlQ29ubmVjdG9yLmdldEN1cnJlbmNpZXMoKS5waXBlKFxuICAgICAgICBtYXAoY3VycmVuY2llcyA9PiBuZXcgYWN0aW9ucy5Mb2FkQ3VycmVuY2llc1N1Y2Nlc3MoY3VycmVuY2llcykpLFxuICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+IG9mKG5ldyBhY3Rpb25zLkxvYWRDdXJyZW5jaWVzRmFpbChlcnJvcikpKVxuICAgICAgKTtcbiAgICB9KVxuICApO1xuXG4gIEBFZmZlY3QoKVxuICBhY3RpdmF0ZUN1cnJlbmN5JDogT2JzZXJ2YWJsZTxhbnk+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShhY3Rpb25zLlNFVF9BQ1RJVkVfQ1VSUkVOQ1kpLFxuICAgIHRhcCgoYWN0aW9uOiBhY3Rpb25zLlNldEFjdGl2ZUN1cnJlbmN5KSA9PiB7XG4gICAgICBpZiAodGhpcy53aW5SZWYuc2Vzc2lvblN0b3JhZ2UpIHtcbiAgICAgICAgdGhpcy53aW5SZWYuc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnY3VycmVuY3knLCBhY3Rpb24ucGF5bG9hZCk7XG4gICAgICB9XG4gICAgfSksXG4gICAgbWFwKCgpID0+IG5ldyBhY3Rpb25zLkN1cnJlbmN5Q2hhbmdlKCkpXG4gICk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9ucyxcbiAgICBwcml2YXRlIHNpdGVDb25uZWN0b3I6IFNpdGVDb25uZWN0b3IsXG4gICAgcHJpdmF0ZSB3aW5SZWY6IFdpbmRvd1JlZlxuICApIHt9XG59XG4iXX0=