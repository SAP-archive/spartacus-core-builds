/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { CountryType } from '../../../model/address.model';
import { SiteConnector } from '../../../site-context/connectors/site.connector';
import { makeErrorSerializable } from '../../../util/serialization-utils';
import * as fromAction from '../actions/billing-countries.action';
export class BillingCountriesEffect {
    /**
     * @param {?} actions$
     * @param {?} siteConnector
     */
    constructor(actions$, siteConnector) {
        this.actions$ = actions$;
        this.siteConnector = siteConnector;
        this.loadBillingCountries$ = this.actions$.pipe(ofType(fromAction.LOAD_BILLING_COUNTRIES), switchMap((/**
         * @return {?}
         */
        () => {
            return this.siteConnector.getCountries(CountryType.BILLING).pipe(map((/**
             * @param {?} countries
             * @return {?}
             */
            countries => new fromAction.LoadBillingCountriesSuccess(countries))), catchError((/**
             * @param {?} error
             * @return {?}
             */
            error => of(new fromAction.LoadBillingCountriesFail(makeErrorSerializable(error))))));
        })));
    }
}
BillingCountriesEffect.decorators = [
    { type: Injectable }
];
/** @nocollapse */
BillingCountriesEffect.ctorParameters = () => [
    { type: Actions },
    { type: SiteConnector }
];
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Observable)
], BillingCountriesEffect.prototype, "loadBillingCountries$", void 0);
if (false) {
    /** @type {?} */
    BillingCountriesEffect.prototype.loadBillingCountries$;
    /**
     * @type {?}
     * @private
     */
    BillingCountriesEffect.prototype.actions$;
    /**
     * @type {?}
     * @private
     */
    BillingCountriesEffect.prototype.siteConnector;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmlsbGluZy1jb3VudHJpZXMuZWZmZWN0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3VzZXIvc3RvcmUvZWZmZWN0cy9iaWxsaW5nLWNvdW50cmllcy5lZmZlY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4RCxPQUFPLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsVUFBVSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM1RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQzFFLE9BQU8sS0FBSyxVQUFVLE1BQU0scUNBQXFDLENBQUM7QUFHbEUsTUFBTSxPQUFPLHNCQUFzQjs7Ozs7SUFvQmpDLFlBQ1UsUUFBaUIsRUFDakIsYUFBNEI7UUFENUIsYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUNqQixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQXBCdEMsMEJBQXFCLEdBRWpCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUNwQixNQUFNLENBQUMsVUFBVSxDQUFDLHNCQUFzQixDQUFDLEVBQ3pDLFNBQVM7OztRQUFDLEdBQUcsRUFBRTtZQUNiLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FDOUQsR0FBRzs7OztZQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsSUFBSSxVQUFVLENBQUMsMkJBQTJCLENBQUMsU0FBUyxDQUFDLEVBQUMsRUFDdkUsVUFBVTs7OztZQUFDLEtBQUssQ0FBQyxFQUFFLENBQ2pCLEVBQUUsQ0FDQSxJQUFJLFVBQVUsQ0FBQyx3QkFBd0IsQ0FDckMscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQzdCLENBQ0YsRUFDRixDQUNGLENBQUM7UUFDSixDQUFDLEVBQUMsQ0FDSCxDQUFDO0lBS0MsQ0FBQzs7O1lBeEJMLFVBQVU7Ozs7WUFSRixPQUFPO1lBSVAsYUFBYTs7QUFPcEI7SUFEQyxNQUFNLEVBQUU7c0NBQ2MsVUFBVTtxRUFnQi9COzs7SUFqQkYsdURBaUJFOzs7OztJQUdBLDBDQUF5Qjs7Ozs7SUFDekIsK0NBQW9DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0LCBvZlR5cGUgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBjYXRjaEVycm9yLCBtYXAsIHN3aXRjaE1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IENvdW50cnlUeXBlIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvYWRkcmVzcy5tb2RlbCc7XG5pbXBvcnQgeyBTaXRlQ29ubmVjdG9yIH0gZnJvbSAnLi4vLi4vLi4vc2l0ZS1jb250ZXh0L2Nvbm5lY3RvcnMvc2l0ZS5jb25uZWN0b3InO1xuaW1wb3J0IHsgbWFrZUVycm9yU2VyaWFsaXphYmxlIH0gZnJvbSAnLi4vLi4vLi4vdXRpbC9zZXJpYWxpemF0aW9uLXV0aWxzJztcbmltcG9ydCAqIGFzIGZyb21BY3Rpb24gZnJvbSAnLi4vYWN0aW9ucy9iaWxsaW5nLWNvdW50cmllcy5hY3Rpb24nO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQmlsbGluZ0NvdW50cmllc0VmZmVjdCB7XG4gIEBFZmZlY3QoKVxuICBsb2FkQmlsbGluZ0NvdW50cmllcyQ6IE9ic2VydmFibGU8XG4gICAgZnJvbUFjdGlvbi5CaWxsaW5nQ291bnRyaWVzQWN0aW9uXG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKGZyb21BY3Rpb24uTE9BRF9CSUxMSU5HX0NPVU5UUklFUyksXG4gICAgc3dpdGNoTWFwKCgpID0+IHtcbiAgICAgIHJldHVybiB0aGlzLnNpdGVDb25uZWN0b3IuZ2V0Q291bnRyaWVzKENvdW50cnlUeXBlLkJJTExJTkcpLnBpcGUoXG4gICAgICAgIG1hcChjb3VudHJpZXMgPT4gbmV3IGZyb21BY3Rpb24uTG9hZEJpbGxpbmdDb3VudHJpZXNTdWNjZXNzKGNvdW50cmllcykpLFxuICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+XG4gICAgICAgICAgb2YoXG4gICAgICAgICAgICBuZXcgZnJvbUFjdGlvbi5Mb2FkQmlsbGluZ0NvdW50cmllc0ZhaWwoXG4gICAgICAgICAgICAgIG1ha2VFcnJvclNlcmlhbGl6YWJsZShlcnJvcilcbiAgICAgICAgICAgIClcbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgfSlcbiAgKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zLFxuICAgIHByaXZhdGUgc2l0ZUNvbm5lY3RvcjogU2l0ZUNvbm5lY3RvclxuICApIHt9XG59XG4iXX0=