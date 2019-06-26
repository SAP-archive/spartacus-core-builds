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
import { SiteContextActions } from '../actions/index';
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
        this.loadCurrencies$ = this.actions$.pipe(ofType(SiteContextActions.LOAD_CURRENCIES), exhaustMap((/**
         * @return {?}
         */
        () => {
            return this.siteConnector.getCurrencies().pipe(map((/**
             * @param {?} currencies
             * @return {?}
             */
            currencies => new SiteContextActions.LoadCurrenciesSuccess(currencies))), catchError((/**
             * @param {?} error
             * @return {?}
             */
            error => of(new SiteContextActions.LoadCurrenciesFail(makeErrorSerializable(error))))));
        })));
        this.activateCurrency$ = this.actions$.pipe(ofType(SiteContextActions.SET_ACTIVE_CURRENCY), tap((/**
         * @param {?} action
         * @return {?}
         */
        (action) => {
            if (this.winRef.sessionStorage) {
                this.winRef.sessionStorage.setItem('currency', action.payload);
            }
        })), map((/**
         * @return {?}
         */
        () => new SiteContextActions.CurrencyChange())));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VycmVuY2llcy5lZmZlY3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvc2l0ZS1jb250ZXh0L3N0b3JlL2VmZmVjdHMvY3VycmVuY2llcy5lZmZlY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4RCxPQUFPLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDMUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUNoRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUd0RCxNQUFNLE9BQU8saUJBQWlCOzs7Ozs7SUFvQzVCLFlBQ1UsUUFBaUIsRUFDakIsYUFBNEIsRUFDNUIsTUFBaUI7UUFGakIsYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUNqQixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QixXQUFNLEdBQU4sTUFBTSxDQUFXO1FBckMzQixvQkFBZSxHQUdYLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUNwQixNQUFNLENBQUMsa0JBQWtCLENBQUMsZUFBZSxDQUFDLEVBQzFDLFVBQVU7OztRQUFDLEdBQUcsRUFBRTtZQUNkLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxJQUFJLENBQzVDLEdBQUc7Ozs7WUFDRCxVQUFVLENBQUMsRUFBRSxDQUFDLElBQUksa0JBQWtCLENBQUMscUJBQXFCLENBQUMsVUFBVSxDQUFDLEVBQ3ZFLEVBQ0QsVUFBVTs7OztZQUFDLEtBQUssQ0FBQyxFQUFFLENBQ2pCLEVBQUUsQ0FDQSxJQUFJLGtCQUFrQixDQUFDLGtCQUFrQixDQUN2QyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FDN0IsQ0FDRixFQUNGLENBQ0YsQ0FBQztRQUNKLENBQUMsRUFBQyxDQUNILENBQUM7UUFHRixzQkFBaUIsR0FFYixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDcEIsTUFBTSxDQUFDLGtCQUFrQixDQUFDLG1CQUFtQixDQUFDLEVBQzlDLEdBQUc7Ozs7UUFBQyxDQUFDLE1BQTRDLEVBQUUsRUFBRTtZQUNuRCxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFO2dCQUM5QixJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUNoRTtRQUNILENBQUMsRUFBQyxFQUNGLEdBQUc7OztRQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksa0JBQWtCLENBQUMsY0FBYyxFQUFFLEVBQUMsQ0FDbkQsQ0FBQztJQU1DLENBQUM7OztZQXpDTCxVQUFVOzs7O1lBUkYsT0FBTztZQUtQLGFBQWE7WUFEYixTQUFTOztBQU9oQjtJQURDLE1BQU0sRUFBRTtzQ0FDUSxVQUFVOzBEQW1CekI7QUFHRjtJQURDLE1BQU0sRUFBRTtzQ0FDVSxVQUFVOzREQVUzQjs7O0lBakNGLDRDQW9CRTs7SUFFRiw4Q0FXRTs7Ozs7SUFHQSxxQ0FBeUI7Ozs7O0lBQ3pCLDBDQUFvQzs7Ozs7SUFDcEMsbUNBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0LCBvZlR5cGUgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBjYXRjaEVycm9yLCBleGhhdXN0TWFwLCBtYXAsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IG1ha2VFcnJvclNlcmlhbGl6YWJsZSB9IGZyb20gJy4uLy4uLy4uL3V0aWwvc2VyaWFsaXphdGlvbi11dGlscyc7XG5pbXBvcnQgeyBXaW5kb3dSZWYgfSBmcm9tICcuLi8uLi8uLi93aW5kb3cvd2luZG93LXJlZic7XG5pbXBvcnQgeyBTaXRlQ29ubmVjdG9yIH0gZnJvbSAnLi4vLi4vY29ubmVjdG9ycy9zaXRlLmNvbm5lY3Rvcic7XG5pbXBvcnQgeyBTaXRlQ29udGV4dEFjdGlvbnMgfSBmcm9tICcuLi9hY3Rpb25zL2luZGV4JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEN1cnJlbmNpZXNFZmZlY3RzIHtcbiAgQEVmZmVjdCgpXG4gIGxvYWRDdXJyZW5jaWVzJDogT2JzZXJ2YWJsZTxcbiAgICB8IFNpdGVDb250ZXh0QWN0aW9ucy5Mb2FkQ3VycmVuY2llc1N1Y2Nlc3NcbiAgICB8IFNpdGVDb250ZXh0QWN0aW9ucy5Mb2FkQ3VycmVuY2llc0ZhaWxcbiAgPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoU2l0ZUNvbnRleHRBY3Rpb25zLkxPQURfQ1VSUkVOQ0lFUyksXG4gICAgZXhoYXVzdE1hcCgoKSA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5zaXRlQ29ubmVjdG9yLmdldEN1cnJlbmNpZXMoKS5waXBlKFxuICAgICAgICBtYXAoXG4gICAgICAgICAgY3VycmVuY2llcyA9PiBuZXcgU2l0ZUNvbnRleHRBY3Rpb25zLkxvYWRDdXJyZW5jaWVzU3VjY2VzcyhjdXJyZW5jaWVzKVxuICAgICAgICApLFxuICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+XG4gICAgICAgICAgb2YoXG4gICAgICAgICAgICBuZXcgU2l0ZUNvbnRleHRBY3Rpb25zLkxvYWRDdXJyZW5jaWVzRmFpbChcbiAgICAgICAgICAgICAgbWFrZUVycm9yU2VyaWFsaXphYmxlKGVycm9yKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICB9KVxuICApO1xuXG4gIEBFZmZlY3QoKVxuICBhY3RpdmF0ZUN1cnJlbmN5JDogT2JzZXJ2YWJsZTxcbiAgICBTaXRlQ29udGV4dEFjdGlvbnMuQ3VycmVuY3lDaGFuZ2VcbiAgPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoU2l0ZUNvbnRleHRBY3Rpb25zLlNFVF9BQ1RJVkVfQ1VSUkVOQ1kpLFxuICAgIHRhcCgoYWN0aW9uOiBTaXRlQ29udGV4dEFjdGlvbnMuU2V0QWN0aXZlQ3VycmVuY3kpID0+IHtcbiAgICAgIGlmICh0aGlzLndpblJlZi5zZXNzaW9uU3RvcmFnZSkge1xuICAgICAgICB0aGlzLndpblJlZi5zZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdjdXJyZW5jeScsIGFjdGlvbi5wYXlsb2FkKTtcbiAgICAgIH1cbiAgICB9KSxcbiAgICBtYXAoKCkgPT4gbmV3IFNpdGVDb250ZXh0QWN0aW9ucy5DdXJyZW5jeUNoYW5nZSgpKVxuICApO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnMsXG4gICAgcHJpdmF0ZSBzaXRlQ29ubmVjdG9yOiBTaXRlQ29ubmVjdG9yLFxuICAgIHByaXZhdGUgd2luUmVmOiBXaW5kb3dSZWZcbiAgKSB7fVxufVxuIl19