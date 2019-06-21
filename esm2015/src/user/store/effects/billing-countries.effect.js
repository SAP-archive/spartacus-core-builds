/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import * as fromAction from '../actions/billing-countries.action';
import { SiteConnector } from '../../../site-context/connectors/site.connector';
import { CountryType } from '../../../model/address.model';
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
            error => of(new fromAction.LoadBillingCountriesFail(error)))));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmlsbGluZy1jb3VudHJpZXMuZWZmZWN0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3VzZXIvc3RvcmUvZWZmZWN0cy9iaWxsaW5nLWNvdW50cmllcy5lZmZlY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV4RCxPQUFPLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsVUFBVSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU1RCxPQUFPLEtBQUssVUFBVSxNQUFNLHFDQUFxQyxDQUFDO0FBQ2xFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUNoRixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFHM0QsTUFBTSxPQUFPLHNCQUFzQjs7Ozs7SUFjakMsWUFDVSxRQUFpQixFQUNqQixhQUE0QjtRQUQ1QixhQUFRLEdBQVIsUUFBUSxDQUFTO1FBQ2pCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBZHRDLDBCQUFxQixHQUVqQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDcEIsTUFBTSxDQUFDLFVBQVUsQ0FBQyxzQkFBc0IsQ0FBQyxFQUN6QyxTQUFTOzs7UUFBQyxHQUFHLEVBQUU7WUFDYixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQzlELEdBQUc7Ozs7WUFBQyxTQUFTLENBQUMsRUFBRSxDQUFDLElBQUksVUFBVSxDQUFDLDJCQUEyQixDQUFDLFNBQVMsQ0FBQyxFQUFDLEVBQ3ZFLFVBQVU7Ozs7WUFBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLFVBQVUsQ0FBQyx3QkFBd0IsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFDLENBQ3hFLENBQUM7UUFDSixDQUFDLEVBQUMsQ0FDSCxDQUFDO0lBS0MsQ0FBQzs7O1lBbEJMLFVBQVU7Ozs7WUFURixPQUFPO1lBTVAsYUFBYTs7QUFNcEI7SUFEQyxNQUFNLEVBQUU7c0NBQ2MsVUFBVTtxRUFVL0I7OztJQVhGLHVEQVdFOzs7OztJQUdBLDBDQUF5Qjs7Ozs7SUFDekIsK0NBQW9DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QsIG9mVHlwZSB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgY2F0Y2hFcnJvciwgbWFwLCBzd2l0Y2hNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCAqIGFzIGZyb21BY3Rpb24gZnJvbSAnLi4vYWN0aW9ucy9iaWxsaW5nLWNvdW50cmllcy5hY3Rpb24nO1xuaW1wb3J0IHsgU2l0ZUNvbm5lY3RvciB9IGZyb20gJy4uLy4uLy4uL3NpdGUtY29udGV4dC9jb25uZWN0b3JzL3NpdGUuY29ubmVjdG9yJztcbmltcG9ydCB7IENvdW50cnlUeXBlIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvYWRkcmVzcy5tb2RlbCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBCaWxsaW5nQ291bnRyaWVzRWZmZWN0IHtcbiAgQEVmZmVjdCgpXG4gIGxvYWRCaWxsaW5nQ291bnRyaWVzJDogT2JzZXJ2YWJsZTxcbiAgICBmcm9tQWN0aW9uLkJpbGxpbmdDb3VudHJpZXNBY3Rpb25cbiAgPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoZnJvbUFjdGlvbi5MT0FEX0JJTExJTkdfQ09VTlRSSUVTKSxcbiAgICBzd2l0Y2hNYXAoKCkgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuc2l0ZUNvbm5lY3Rvci5nZXRDb3VudHJpZXMoQ291bnRyeVR5cGUuQklMTElORykucGlwZShcbiAgICAgICAgbWFwKGNvdW50cmllcyA9PiBuZXcgZnJvbUFjdGlvbi5Mb2FkQmlsbGluZ0NvdW50cmllc1N1Y2Nlc3MoY291bnRyaWVzKSksXG4gICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT4gb2YobmV3IGZyb21BY3Rpb24uTG9hZEJpbGxpbmdDb3VudHJpZXNGYWlsKGVycm9yKSkpXG4gICAgICApO1xuICAgIH0pXG4gICk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9ucyxcbiAgICBwcml2YXRlIHNpdGVDb25uZWN0b3I6IFNpdGVDb25uZWN0b3JcbiAgKSB7fVxufVxuIl19