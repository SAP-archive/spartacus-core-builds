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
export class CurrenciesEffects {
    /**
     * @param {?} actions$
     * @param {?} siteConnector
     * @param {?} winRef
     */
    constructor(actions$, siteConnector, winRef) {
        this.actions$ = actions$;
        this.siteConnector = siteConnector;
        this.winRef = winRef;
        this.loadCurrencies$ = this.actions$.pipe(ofType(actions.LOAD_CURRENCIES), exhaustMap(() => {
            return this.siteConnector.getCurrencies().pipe(map(currencies => new actions.LoadCurrenciesSuccess(currencies)), catchError(error => of(new actions.LoadCurrenciesFail(error))));
        }));
        this.activateCurrency$ = this.actions$.pipe(ofType(actions.SET_ACTIVE_CURRENCY), tap((action) => {
            if (this.winRef.sessionStorage) {
                this.winRef.sessionStorage.setItem('currency', action.payload);
            }
        }), map(() => new actions.CurrencyChange()));
    }
}
CurrenciesEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
CurrenciesEffects.ctorParameters = () => [
    { type: Actions },
    { type: SiteConnector },
    { type: WindowRef }
];
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Observable)
], CurrenciesEffects.prototype, "loadCurrencies$", void 0);
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Observable)
], CurrenciesEffects.prototype, "activateCurrency$", void 0);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VycmVuY2llcy5lZmZlY3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvc2l0ZS1jb250ZXh0L3N0b3JlL2VmZmVjdHMvY3VycmVuY2llcy5lZmZlY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4RCxPQUFPLEVBQUUsR0FBRyxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFbEUsT0FBTyxLQUFLLE9BQU8sTUFBTSw4QkFBOEIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBR2hFLE1BQU0sT0FBTyxpQkFBaUI7Ozs7OztJQXVCNUIsWUFDVSxRQUFpQixFQUNqQixhQUE0QixFQUM1QixNQUFpQjtRQUZqQixhQUFRLEdBQVIsUUFBUSxDQUFTO1FBQ2pCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQzVCLFdBQU0sR0FBTixNQUFNLENBQVc7UUF4QjNCLG9CQUFlLEdBQW9CLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUNuRCxNQUFNLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxFQUMvQixVQUFVLENBQUMsR0FBRyxFQUFFO1lBQ2QsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsRUFBRSxDQUFDLElBQUksQ0FDNUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsSUFBSSxPQUFPLENBQUMscUJBQXFCLENBQUMsVUFBVSxDQUFDLENBQUMsRUFDaEUsVUFBVSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksT0FBTyxDQUFDLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FDL0QsQ0FBQztRQUNKLENBQUMsQ0FBQyxDQUNILENBQUM7UUFHRixzQkFBaUIsR0FBb0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ3JELE1BQU0sQ0FBQyxPQUFPLENBQUMsbUJBQW1CLENBQUMsRUFDbkMsR0FBRyxDQUFDLENBQUMsTUFBaUMsRUFBRSxFQUFFO1lBQ3hDLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUU7Z0JBQzlCLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQ2hFO1FBQ0gsQ0FBQyxDQUFDLEVBQ0YsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksT0FBTyxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQ3hDLENBQUM7SUFNQyxDQUFDOzs7WUE1QkwsVUFBVTs7OztZQVBNLE9BQU87WUFLZixhQUFhO1lBRGIsU0FBUzs7QUFNaEI7SUFEQyxNQUFNLEVBQUU7c0NBQ1EsVUFBVTswREFRekI7QUFHRjtJQURDLE1BQU0sRUFBRTtzQ0FDVSxVQUFVOzREQVEzQjs7O0lBcEJGLDRDQVNFOztJQUVGLDhDQVNFOzs7OztJQUdBLHFDQUF5Qjs7Ozs7SUFDekIsMENBQW9DOzs7OztJQUNwQyxtQ0FBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBFZmZlY3QsIEFjdGlvbnMsIG9mVHlwZSB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuaW1wb3J0IHsgbWFwLCBjYXRjaEVycm9yLCBleGhhdXN0TWFwLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCAqIGFzIGFjdGlvbnMgZnJvbSAnLi4vYWN0aW9ucy9jdXJyZW5jaWVzLmFjdGlvbic7XG5pbXBvcnQgeyBXaW5kb3dSZWYgfSBmcm9tICcuLi8uLi8uLi93aW5kb3cvd2luZG93LXJlZic7XG5pbXBvcnQgeyBTaXRlQ29ubmVjdG9yIH0gZnJvbSAnLi4vLi4vY29ubmVjdG9ycy9zaXRlLmNvbm5lY3Rvcic7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDdXJyZW5jaWVzRWZmZWN0cyB7XG4gIEBFZmZlY3QoKVxuICBsb2FkQ3VycmVuY2llcyQ6IE9ic2VydmFibGU8YW55PiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoYWN0aW9ucy5MT0FEX0NVUlJFTkNJRVMpLFxuICAgIGV4aGF1c3RNYXAoKCkgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuc2l0ZUNvbm5lY3Rvci5nZXRDdXJyZW5jaWVzKCkucGlwZShcbiAgICAgICAgbWFwKGN1cnJlbmNpZXMgPT4gbmV3IGFjdGlvbnMuTG9hZEN1cnJlbmNpZXNTdWNjZXNzKGN1cnJlbmNpZXMpKSxcbiAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PiBvZihuZXcgYWN0aW9ucy5Mb2FkQ3VycmVuY2llc0ZhaWwoZXJyb3IpKSlcbiAgICAgICk7XG4gICAgfSlcbiAgKTtcblxuICBARWZmZWN0KClcbiAgYWN0aXZhdGVDdXJyZW5jeSQ6IE9ic2VydmFibGU8YW55PiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoYWN0aW9ucy5TRVRfQUNUSVZFX0NVUlJFTkNZKSxcbiAgICB0YXAoKGFjdGlvbjogYWN0aW9ucy5TZXRBY3RpdmVDdXJyZW5jeSkgPT4ge1xuICAgICAgaWYgKHRoaXMud2luUmVmLnNlc3Npb25TdG9yYWdlKSB7XG4gICAgICAgIHRoaXMud2luUmVmLnNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ2N1cnJlbmN5JywgYWN0aW9uLnBheWxvYWQpO1xuICAgICAgfVxuICAgIH0pLFxuICAgIG1hcCgoKSA9PiBuZXcgYWN0aW9ucy5DdXJyZW5jeUNoYW5nZSgpKVxuICApO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnMsXG4gICAgcHJpdmF0ZSBzaXRlQ29ubmVjdG9yOiBTaXRlQ29ubmVjdG9yLFxuICAgIHByaXZhdGUgd2luUmVmOiBXaW5kb3dSZWZcbiAgKSB7fVxufVxuIl19