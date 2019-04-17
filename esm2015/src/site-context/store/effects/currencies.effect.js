/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { map, catchError, exhaustMap, tap } from 'rxjs/operators';
import { OccSiteService } from '../../occ/occ-site.service';
import * as actions from '../actions/currencies.action';
import { WindowRef } from '../../../window/window-ref';
export class CurrenciesEffects {
    /**
     * @param {?} actions$
     * @param {?} occSiteService
     * @param {?} winRef
     */
    constructor(actions$, occSiteService, winRef) {
        this.actions$ = actions$;
        this.occSiteService = occSiteService;
        this.winRef = winRef;
        this.loadCurrencies$ = this.actions$.pipe(ofType(actions.LOAD_CURRENCIES), exhaustMap(() => {
            return this.occSiteService.loadCurrencies().pipe(map(data => new actions.LoadCurrenciesSuccess(data.currencies)), catchError(error => of(new actions.LoadCurrenciesFail(error))));
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
    { type: OccSiteService },
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
    CurrenciesEffects.prototype.occSiteService;
    /**
     * @type {?}
     * @private
     */
    CurrenciesEffects.prototype.winRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VycmVuY2llcy5lZmZlY3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvc2l0ZS1jb250ZXh0L3N0b3JlL2VmZmVjdHMvY3VycmVuY2llcy5lZmZlY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4RCxPQUFPLEVBQUUsR0FBRyxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFbEUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQzVELE9BQU8sS0FBSyxPQUFPLE1BQU0sOEJBQThCLENBQUM7QUFDeEQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBR3ZELE1BQU0sT0FBTyxpQkFBaUI7Ozs7OztJQXVCNUIsWUFDVSxRQUFpQixFQUNqQixjQUE4QixFQUM5QixNQUFpQjtRQUZqQixhQUFRLEdBQVIsUUFBUSxDQUFTO1FBQ2pCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixXQUFNLEdBQU4sTUFBTSxDQUFXO1FBeEIzQixvQkFBZSxHQUFvQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDbkQsTUFBTSxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsRUFDL0IsVUFBVSxDQUFDLEdBQUcsRUFBRTtZQUNkLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxJQUFJLENBQzlDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksT0FBTyxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUMvRCxVQUFVLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxPQUFPLENBQUMsa0JBQWtCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUMvRCxDQUFDO1FBQ0osQ0FBQyxDQUFDLENBQ0gsQ0FBQztRQUdGLHNCQUFpQixHQUFvQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDckQsTUFBTSxDQUFDLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxFQUNuQyxHQUFHLENBQUMsQ0FBQyxNQUFpQyxFQUFFLEVBQUU7WUFDeEMsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRTtnQkFDOUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDaEU7UUFDSCxDQUFDLENBQUMsRUFDRixHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxPQUFPLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FDeEMsQ0FBQztJQU1DLENBQUM7OztZQTVCTCxVQUFVOzs7O1lBUE0sT0FBTztZQUdmLGNBQWM7WUFFZCxTQUFTOztBQUtoQjtJQURDLE1BQU0sRUFBRTtzQ0FDUSxVQUFVOzBEQVF6QjtBQUdGO0lBREMsTUFBTSxFQUFFO3NDQUNVLFVBQVU7NERBUTNCOzs7SUFwQkYsNENBU0U7O0lBRUYsOENBU0U7Ozs7O0lBR0EscUNBQXlCOzs7OztJQUN6QiwyQ0FBc0M7Ozs7O0lBQ3RDLG1DQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEVmZmVjdCwgQWN0aW9ucywgb2ZUeXBlIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5pbXBvcnQgeyBtYXAsIGNhdGNoRXJyb3IsIGV4aGF1c3RNYXAsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgT2NjU2l0ZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9vY2Mvb2NjLXNpdGUuc2VydmljZSc7XG5pbXBvcnQgKiBhcyBhY3Rpb25zIGZyb20gJy4uL2FjdGlvbnMvY3VycmVuY2llcy5hY3Rpb24nO1xuaW1wb3J0IHsgV2luZG93UmVmIH0gZnJvbSAnLi4vLi4vLi4vd2luZG93L3dpbmRvdy1yZWYnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ3VycmVuY2llc0VmZmVjdHMge1xuICBARWZmZWN0KClcbiAgbG9hZEN1cnJlbmNpZXMkOiBPYnNlcnZhYmxlPGFueT4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKGFjdGlvbnMuTE9BRF9DVVJSRU5DSUVTKSxcbiAgICBleGhhdXN0TWFwKCgpID0+IHtcbiAgICAgIHJldHVybiB0aGlzLm9jY1NpdGVTZXJ2aWNlLmxvYWRDdXJyZW5jaWVzKCkucGlwZShcbiAgICAgICAgbWFwKGRhdGEgPT4gbmV3IGFjdGlvbnMuTG9hZEN1cnJlbmNpZXNTdWNjZXNzKGRhdGEuY3VycmVuY2llcykpLFxuICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+IG9mKG5ldyBhY3Rpb25zLkxvYWRDdXJyZW5jaWVzRmFpbChlcnJvcikpKVxuICAgICAgKTtcbiAgICB9KVxuICApO1xuXG4gIEBFZmZlY3QoKVxuICBhY3RpdmF0ZUN1cnJlbmN5JDogT2JzZXJ2YWJsZTxhbnk+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShhY3Rpb25zLlNFVF9BQ1RJVkVfQ1VSUkVOQ1kpLFxuICAgIHRhcCgoYWN0aW9uOiBhY3Rpb25zLlNldEFjdGl2ZUN1cnJlbmN5KSA9PiB7XG4gICAgICBpZiAodGhpcy53aW5SZWYuc2Vzc2lvblN0b3JhZ2UpIHtcbiAgICAgICAgdGhpcy53aW5SZWYuc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnY3VycmVuY3knLCBhY3Rpb24ucGF5bG9hZCk7XG4gICAgICB9XG4gICAgfSksXG4gICAgbWFwKCgpID0+IG5ldyBhY3Rpb25zLkN1cnJlbmN5Q2hhbmdlKCkpXG4gICk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9ucyxcbiAgICBwcml2YXRlIG9jY1NpdGVTZXJ2aWNlOiBPY2NTaXRlU2VydmljZSxcbiAgICBwcml2YXRlIHdpblJlZjogV2luZG93UmVmXG4gICkge31cbn1cbiJdfQ==