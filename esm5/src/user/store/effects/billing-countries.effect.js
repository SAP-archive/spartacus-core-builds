/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import * as fromAction from '../actions/billing-countries.action';
import { SiteConnector } from '../../../site-context/connectors/site.connector';
import { CountryType } from '../../../model/address.model';
var BillingCountriesEffect = /** @class */ (function () {
    function BillingCountriesEffect(actions$, siteConnector) {
        var _this = this;
        this.actions$ = actions$;
        this.siteConnector = siteConnector;
        this.loadBillingCountries$ = this.actions$.pipe(ofType(fromAction.LOAD_BILLING_COUNTRIES), switchMap(function () {
            return _this.siteConnector.getCountries(CountryType.BILLING).pipe(map(function (countries) { return new fromAction.LoadBillingCountriesSuccess(countries); }), catchError(function (error) { return of(new fromAction.LoadBillingCountriesFail(error)); }));
        }));
    }
    BillingCountriesEffect.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    BillingCountriesEffect.ctorParameters = function () { return [
        { type: Actions },
        { type: SiteConnector }
    ]; };
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Observable)
    ], BillingCountriesEffect.prototype, "loadBillingCountries$", void 0);
    return BillingCountriesEffect;
}());
export { BillingCountriesEffect };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmlsbGluZy1jb3VudHJpZXMuZWZmZWN0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3VzZXIvc3RvcmUvZWZmZWN0cy9iaWxsaW5nLWNvdW50cmllcy5lZmZlY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV4RCxPQUFPLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsVUFBVSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU1RCxPQUFPLEtBQUssVUFBVSxNQUFNLHFDQUFxQyxDQUFDO0FBQ2xFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUNoRixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFFM0Q7SUFlRSxnQ0FDVSxRQUFpQixFQUNqQixhQUE0QjtRQUZ0QyxpQkFHSTtRQUZNLGFBQVEsR0FBUixRQUFRLENBQVM7UUFDakIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFkdEMsMEJBQXFCLEdBRWpCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUNwQixNQUFNLENBQUMsVUFBVSxDQUFDLHNCQUFzQixDQUFDLEVBQ3pDLFNBQVMsQ0FBQztZQUNSLE9BQU8sS0FBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FDOUQsR0FBRyxDQUFDLFVBQUEsU0FBUyxJQUFJLE9BQUEsSUFBSSxVQUFVLENBQUMsMkJBQTJCLENBQUMsU0FBUyxDQUFDLEVBQXJELENBQXFELENBQUMsRUFDdkUsVUFBVSxDQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsRUFBRSxDQUFDLElBQUksVUFBVSxDQUFDLHdCQUF3QixDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQWxELENBQWtELENBQUMsQ0FDeEUsQ0FBQztRQUNKLENBQUMsQ0FBQyxDQUNILENBQUM7SUFLQyxDQUFDOztnQkFsQkwsVUFBVTs7OztnQkFURixPQUFPO2dCQU1QLGFBQWE7O0lBTXBCO1FBREMsTUFBTSxFQUFFOzBDQUNjLFVBQVU7eUVBVS9CO0lBTUosNkJBQUM7Q0FBQSxBQW5CRCxJQW1CQztTQWxCWSxzQkFBc0I7OztJQUNqQyx1REFXRTs7Ozs7SUFHQSwwQ0FBeUI7Ozs7O0lBQ3pCLCtDQUFvQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0LCBvZlR5cGUgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcblxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGNhdGNoRXJyb3IsIG1hcCwgc3dpdGNoTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgKiBhcyBmcm9tQWN0aW9uIGZyb20gJy4uL2FjdGlvbnMvYmlsbGluZy1jb3VudHJpZXMuYWN0aW9uJztcbmltcG9ydCB7IFNpdGVDb25uZWN0b3IgfSBmcm9tICcuLi8uLi8uLi9zaXRlLWNvbnRleHQvY29ubmVjdG9ycy9zaXRlLmNvbm5lY3Rvcic7XG5pbXBvcnQgeyBDb3VudHJ5VHlwZSB9IGZyb20gJy4uLy4uLy4uL21vZGVsL2FkZHJlc3MubW9kZWwnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQmlsbGluZ0NvdW50cmllc0VmZmVjdCB7XG4gIEBFZmZlY3QoKVxuICBsb2FkQmlsbGluZ0NvdW50cmllcyQ6IE9ic2VydmFibGU8XG4gICAgZnJvbUFjdGlvbi5CaWxsaW5nQ291bnRyaWVzQWN0aW9uXG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKGZyb21BY3Rpb24uTE9BRF9CSUxMSU5HX0NPVU5UUklFUyksXG4gICAgc3dpdGNoTWFwKCgpID0+IHtcbiAgICAgIHJldHVybiB0aGlzLnNpdGVDb25uZWN0b3IuZ2V0Q291bnRyaWVzKENvdW50cnlUeXBlLkJJTExJTkcpLnBpcGUoXG4gICAgICAgIG1hcChjb3VudHJpZXMgPT4gbmV3IGZyb21BY3Rpb24uTG9hZEJpbGxpbmdDb3VudHJpZXNTdWNjZXNzKGNvdW50cmllcykpLFxuICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+IG9mKG5ldyBmcm9tQWN0aW9uLkxvYWRCaWxsaW5nQ291bnRyaWVzRmFpbChlcnJvcikpKVxuICAgICAgKTtcbiAgICB9KVxuICApO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnMsXG4gICAgcHJpdmF0ZSBzaXRlQ29ubmVjdG9yOiBTaXRlQ29ubmVjdG9yXG4gICkge31cbn1cbiJdfQ==