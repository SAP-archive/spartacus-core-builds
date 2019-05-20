/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import * as fromAction from '../actions/delivery-countries.action';
import { UserPaymentConnector } from '../../connectors/payment/user-payment.connector';
var DeliveryCountriesEffects = /** @class */ (function () {
    function DeliveryCountriesEffects(actions$, userPaymentConnector) {
        var _this = this;
        this.actions$ = actions$;
        this.userPaymentConnector = userPaymentConnector;
        this.loadDeliveryCountries$ = this.actions$.pipe(ofType(fromAction.LOAD_DELIVERY_COUNTRIES), switchMap(function () {
            return _this.userPaymentConnector.getDeliveryCountries().pipe(map(function (countries) { return new fromAction.LoadDeliveryCountriesSuccess(countries); }), catchError(function (error) { return of(new fromAction.LoadDeliveryCountriesFail(error)); }));
        }));
    }
    DeliveryCountriesEffects.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    DeliveryCountriesEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: UserPaymentConnector }
    ]; };
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Observable)
    ], DeliveryCountriesEffects.prototype, "loadDeliveryCountries$", void 0);
    return DeliveryCountriesEffects;
}());
export { DeliveryCountriesEffects };
if (false) {
    /** @type {?} */
    DeliveryCountriesEffects.prototype.loadDeliveryCountries$;
    /**
     * @type {?}
     * @private
     */
    DeliveryCountriesEffects.prototype.actions$;
    /**
     * @type {?}
     * @private
     */
    DeliveryCountriesEffects.prototype.userPaymentConnector;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVsaXZlcnktY291bnRyaWVzLmVmZmVjdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy91c2VyL3N0b3JlL2VmZmVjdHMvZGVsaXZlcnktY291bnRyaWVzLmVmZmVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXhELE9BQU8sRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTVELE9BQU8sS0FBSyxVQUFVLE1BQU0sc0NBQXNDLENBQUM7QUFDbkUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0saURBQWlELENBQUM7QUFFdkY7SUFpQkUsa0NBQ1UsUUFBaUIsRUFDakIsb0JBQTBDO1FBRnBELGlCQUdJO1FBRk0sYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUNqQix5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBaEJwRCwyQkFBc0IsR0FFbEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ3BCLE1BQU0sQ0FBQyxVQUFVLENBQUMsdUJBQXVCLENBQUMsRUFDMUMsU0FBUyxDQUFDO1lBQ1IsT0FBTyxLQUFJLENBQUMsb0JBQW9CLENBQUMsb0JBQW9CLEVBQUUsQ0FBQyxJQUFJLENBQzFELEdBQUcsQ0FDRCxVQUFBLFNBQVMsSUFBSSxPQUFBLElBQUksVUFBVSxDQUFDLDRCQUE0QixDQUFDLFNBQVMsQ0FBQyxFQUF0RCxDQUFzRCxDQUNwRSxFQUNELFVBQVUsQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLEVBQUUsQ0FBQyxJQUFJLFVBQVUsQ0FBQyx5QkFBeUIsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFuRCxDQUFtRCxDQUFDLENBQ3pFLENBQUM7UUFDSixDQUFDLENBQUMsQ0FDSCxDQUFDO0lBS0MsQ0FBQzs7Z0JBcEJMLFVBQVU7Ozs7Z0JBUkYsT0FBTztnQkFNUCxvQkFBb0I7O0lBSzNCO1FBREMsTUFBTSxFQUFFOzBDQUNlLFVBQVU7NEVBWWhDO0lBTUosK0JBQUM7Q0FBQSxBQXJCRCxJQXFCQztTQXBCWSx3QkFBd0I7OztJQUNuQywwREFhRTs7Ozs7SUFHQSw0Q0FBeUI7Ozs7O0lBQ3pCLHdEQUFrRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0LCBvZlR5cGUgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcblxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGNhdGNoRXJyb3IsIG1hcCwgc3dpdGNoTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgKiBhcyBmcm9tQWN0aW9uIGZyb20gJy4uL2FjdGlvbnMvZGVsaXZlcnktY291bnRyaWVzLmFjdGlvbic7XG5pbXBvcnQgeyBVc2VyUGF5bWVudENvbm5lY3RvciB9IGZyb20gJy4uLy4uL2Nvbm5lY3RvcnMvcGF5bWVudC91c2VyLXBheW1lbnQuY29ubmVjdG9yJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIERlbGl2ZXJ5Q291bnRyaWVzRWZmZWN0cyB7XG4gIEBFZmZlY3QoKVxuICBsb2FkRGVsaXZlcnlDb3VudHJpZXMkOiBPYnNlcnZhYmxlPFxuICAgIGZyb21BY3Rpb24uRGVsaXZlcnlDb3VudHJpZXNBY3Rpb25cbiAgPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoZnJvbUFjdGlvbi5MT0FEX0RFTElWRVJZX0NPVU5UUklFUyksXG4gICAgc3dpdGNoTWFwKCgpID0+IHtcbiAgICAgIHJldHVybiB0aGlzLnVzZXJQYXltZW50Q29ubmVjdG9yLmdldERlbGl2ZXJ5Q291bnRyaWVzKCkucGlwZShcbiAgICAgICAgbWFwKFxuICAgICAgICAgIGNvdW50cmllcyA9PiBuZXcgZnJvbUFjdGlvbi5Mb2FkRGVsaXZlcnlDb3VudHJpZXNTdWNjZXNzKGNvdW50cmllcylcbiAgICAgICAgKSxcbiAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PiBvZihuZXcgZnJvbUFjdGlvbi5Mb2FkRGVsaXZlcnlDb3VudHJpZXNGYWlsKGVycm9yKSkpXG4gICAgICApO1xuICAgIH0pXG4gICk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9ucyxcbiAgICBwcml2YXRlIHVzZXJQYXltZW50Q29ubmVjdG9yOiBVc2VyUGF5bWVudENvbm5lY3RvclxuICApIHt9XG59XG4iXX0=