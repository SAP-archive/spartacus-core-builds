/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, exhaustMap, map, tap } from 'rxjs/operators';
import { makeErrorSerializable } from '../../../util/serialization-utils';
import { WindowRef } from '../../../window/window-ref';
import { SiteConnector } from '../../connectors/site.connector';
import * as actions from '../actions/currencies.action';
var CurrenciesEffects = /** @class */ (function () {
    function CurrenciesEffects(actions$, siteConnector, winRef) {
        var _this = this;
        this.actions$ = actions$;
        this.siteConnector = siteConnector;
        this.winRef = winRef;
        this.loadCurrencies$ = this.actions$.pipe(ofType(actions.LOAD_CURRENCIES), exhaustMap((/**
         * @return {?}
         */
        function () {
            return _this.siteConnector.getCurrencies().pipe(map((/**
             * @param {?} currencies
             * @return {?}
             */
            function (currencies) { return new actions.LoadCurrenciesSuccess(currencies); })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                return of(new actions.LoadCurrenciesFail(makeErrorSerializable(error)));
            })));
        })));
        this.activateCurrency$ = this.actions$.pipe(ofType(actions.SET_ACTIVE_CURRENCY), tap((/**
         * @param {?} action
         * @return {?}
         */
        function (action) {
            if (_this.winRef.sessionStorage) {
                _this.winRef.sessionStorage.setItem('currency', action.payload);
            }
        })), map((/**
         * @return {?}
         */
        function () { return new actions.CurrencyChange(); })));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VycmVuY2llcy5lZmZlY3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvc2l0ZS1jb250ZXh0L3N0b3JlL2VmZmVjdHMvY3VycmVuY2llcy5lZmZlY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4RCxPQUFPLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDMUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUNoRSxPQUFPLEtBQUssT0FBTyxNQUFNLDhCQUE4QixDQUFDO0FBRXhEO0lBNEJFLDJCQUNVLFFBQWlCLEVBQ2pCLGFBQTRCLEVBQzVCLE1BQWlCO1FBSDNCLGlCQUlJO1FBSE0sYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUNqQixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QixXQUFNLEdBQU4sTUFBTSxDQUFXO1FBNUIzQixvQkFBZSxHQUVYLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUNwQixNQUFNLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxFQUMvQixVQUFVOzs7UUFBQztZQUNULE9BQU8sS0FBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxJQUFJLENBQzVDLEdBQUc7Ozs7WUFBQyxVQUFBLFVBQVUsSUFBSSxPQUFBLElBQUksT0FBTyxDQUFDLHFCQUFxQixDQUFDLFVBQVUsQ0FBQyxFQUE3QyxDQUE2QyxFQUFDLEVBQ2hFLFVBQVU7Ozs7WUFBQyxVQUFBLEtBQUs7Z0JBQ2QsT0FBQSxFQUFFLENBQUMsSUFBSSxPQUFPLENBQUMsa0JBQWtCLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUFoRSxDQUFnRSxFQUNqRSxDQUNGLENBQUM7UUFDSixDQUFDLEVBQUMsQ0FDSCxDQUFDO1FBR0Ysc0JBQWlCLEdBQXVDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUN4RSxNQUFNLENBQUMsT0FBTyxDQUFDLG1CQUFtQixDQUFDLEVBQ25DLEdBQUc7Ozs7UUFBQyxVQUFDLE1BQWlDO1lBQ3BDLElBQUksS0FBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUU7Z0JBQzlCLEtBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQ2hFO1FBQ0gsQ0FBQyxFQUFDLEVBQ0YsR0FBRzs7O1FBQUMsY0FBTSxPQUFBLElBQUksT0FBTyxDQUFDLGNBQWMsRUFBRSxFQUE1QixDQUE0QixFQUFDLENBQ3hDLENBQUM7SUFNQyxDQUFDOztnQkFoQ0wsVUFBVTs7OztnQkFSRixPQUFPO2dCQUtQLGFBQWE7Z0JBRGIsU0FBUzs7SUFPaEI7UUFEQyxNQUFNLEVBQUU7MENBQ1EsVUFBVTs4REFZekI7SUFHRjtRQURDLE1BQU0sRUFBRTswQ0FDVSxVQUFVO2dFQVEzQjtJQU9KLHdCQUFDO0NBQUEsQUFqQ0QsSUFpQ0M7U0FoQ1ksaUJBQWlCOzs7SUFDNUIsNENBYUU7O0lBRUYsOENBU0U7Ozs7O0lBR0EscUNBQXlCOzs7OztJQUN6QiwwQ0FBb0M7Ozs7O0lBQ3BDLG1DQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCwgb2ZUeXBlIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgY2F0Y2hFcnJvciwgZXhoYXVzdE1hcCwgbWFwLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBtYWtlRXJyb3JTZXJpYWxpemFibGUgfSBmcm9tICcuLi8uLi8uLi91dGlsL3NlcmlhbGl6YXRpb24tdXRpbHMnO1xuaW1wb3J0IHsgV2luZG93UmVmIH0gZnJvbSAnLi4vLi4vLi4vd2luZG93L3dpbmRvdy1yZWYnO1xuaW1wb3J0IHsgU2l0ZUNvbm5lY3RvciB9IGZyb20gJy4uLy4uL2Nvbm5lY3RvcnMvc2l0ZS5jb25uZWN0b3InO1xuaW1wb3J0ICogYXMgYWN0aW9ucyBmcm9tICcuLi9hY3Rpb25zL2N1cnJlbmNpZXMuYWN0aW9uJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEN1cnJlbmNpZXNFZmZlY3RzIHtcbiAgQEVmZmVjdCgpXG4gIGxvYWRDdXJyZW5jaWVzJDogT2JzZXJ2YWJsZTxcbiAgICBhY3Rpb25zLkxvYWRDdXJyZW5jaWVzU3VjY2VzcyB8IGFjdGlvbnMuTG9hZEN1cnJlbmNpZXNGYWlsXG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKGFjdGlvbnMuTE9BRF9DVVJSRU5DSUVTKSxcbiAgICBleGhhdXN0TWFwKCgpID0+IHtcbiAgICAgIHJldHVybiB0aGlzLnNpdGVDb25uZWN0b3IuZ2V0Q3VycmVuY2llcygpLnBpcGUoXG4gICAgICAgIG1hcChjdXJyZW5jaWVzID0+IG5ldyBhY3Rpb25zLkxvYWRDdXJyZW5jaWVzU3VjY2VzcyhjdXJyZW5jaWVzKSksXG4gICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT5cbiAgICAgICAgICBvZihuZXcgYWN0aW9ucy5Mb2FkQ3VycmVuY2llc0ZhaWwobWFrZUVycm9yU2VyaWFsaXphYmxlKGVycm9yKSkpXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgfSlcbiAgKTtcblxuICBARWZmZWN0KClcbiAgYWN0aXZhdGVDdXJyZW5jeSQ6IE9ic2VydmFibGU8YWN0aW9ucy5DdXJyZW5jeUNoYW5nZT4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKGFjdGlvbnMuU0VUX0FDVElWRV9DVVJSRU5DWSksXG4gICAgdGFwKChhY3Rpb246IGFjdGlvbnMuU2V0QWN0aXZlQ3VycmVuY3kpID0+IHtcbiAgICAgIGlmICh0aGlzLndpblJlZi5zZXNzaW9uU3RvcmFnZSkge1xuICAgICAgICB0aGlzLndpblJlZi5zZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdjdXJyZW5jeScsIGFjdGlvbi5wYXlsb2FkKTtcbiAgICAgIH1cbiAgICB9KSxcbiAgICBtYXAoKCkgPT4gbmV3IGFjdGlvbnMuQ3VycmVuY3lDaGFuZ2UoKSlcbiAgKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zLFxuICAgIHByaXZhdGUgc2l0ZUNvbm5lY3RvcjogU2l0ZUNvbm5lY3RvcixcbiAgICBwcml2YXRlIHdpblJlZjogV2luZG93UmVmXG4gICkge31cbn1cbiJdfQ==