/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { UserAddressConnector } from '../../../user/connectors/address/user-address.connector';
import { makeErrorSerializable } from '../../../util/serialization-utils';
import { CheckoutActions } from '../actions/index';
var AddressVerificationEffect = /** @class */ (function () {
    function AddressVerificationEffect(actions$, userAddressConnector) {
        var _this = this;
        this.actions$ = actions$;
        this.userAddressConnector = userAddressConnector;
        this.verifyAddress$ = this.actions$.pipe(ofType(CheckoutActions.VERIFY_ADDRESS), map((/**
         * @param {?} action
         * @return {?}
         */
        function (action) { return action.payload; })), mergeMap((/**
         * @param {?} payload
         * @return {?}
         */
        function (payload) {
            return _this.userAddressConnector.verify(payload.userId, payload.address).pipe(map((/**
             * @param {?} data
             * @return {?}
             */
            function (data) { return new CheckoutActions.VerifyAddressSuccess(data); })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                return of(new CheckoutActions.VerifyAddressFail(makeErrorSerializable(error)));
            })));
        })));
    }
    AddressVerificationEffect.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    AddressVerificationEffect.ctorParameters = function () { return [
        { type: Actions },
        { type: UserAddressConnector }
    ]; };
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Observable)
    ], AddressVerificationEffect.prototype, "verifyAddress$", void 0);
    return AddressVerificationEffect;
}());
export { AddressVerificationEffect };
if (false) {
    /** @type {?} */
    AddressVerificationEffect.prototype.verifyAddress$;
    /**
     * @type {?}
     * @private
     */
    AddressVerificationEffect.prototype.actions$;
    /**
     * @type {?}
     * @private
     */
    AddressVerificationEffect.prototype.userAddressConnector;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkcmVzcy12ZXJpZmljYXRpb24uZWZmZWN0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2NoZWNrb3V0L3N0b3JlL2VmZmVjdHMvYWRkcmVzcy12ZXJpZmljYXRpb24uZWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0QsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0seURBQXlELENBQUM7QUFDL0YsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDMUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRW5EO0lBb0JFLG1DQUNVLFFBQWlCLEVBQ2pCLG9CQUEwQztRQUZwRCxpQkFHSTtRQUZNLGFBQVEsR0FBUixRQUFRLENBQVM7UUFDakIseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQW5CcEQsbUJBQWMsR0FFVixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDcEIsTUFBTSxDQUFnQyxlQUFlLENBQUMsY0FBYyxDQUFDLEVBQ3JFLEdBQUc7Ozs7UUFBQyxVQUFBLE1BQU0sSUFBSSxPQUFBLE1BQU0sQ0FBQyxPQUFPLEVBQWQsQ0FBYyxFQUFDLEVBQzdCLFFBQVE7Ozs7UUFBQyxVQUFBLE9BQU87WUFDZCxPQUFBLEtBQUksQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUNwRSxHQUFHOzs7O1lBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxJQUFJLGVBQWUsQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsRUFBOUMsQ0FBOEMsRUFBQyxFQUMzRCxVQUFVOzs7O1lBQUMsVUFBQSxLQUFLO2dCQUNkLE9BQUEsRUFBRSxDQUNBLElBQUksZUFBZSxDQUFDLGlCQUFpQixDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQ3BFO1lBRkQsQ0FFQyxFQUNGLENBQ0Y7UUFQRCxDQU9DLEVBQ0YsQ0FDRixDQUFDO0lBS0MsQ0FBQzs7Z0JBdkJMLFVBQVU7Ozs7Z0JBUEYsT0FBTztnQkFHUCxvQkFBb0I7O0lBTzNCO1FBREMsTUFBTSxFQUFFOzBDQUNPLFVBQVU7cUVBZXhCO0lBTUosZ0NBQUM7Q0FBQSxBQXhCRCxJQXdCQztTQXZCWSx5QkFBeUI7OztJQUNwQyxtREFnQkU7Ozs7O0lBR0EsNkNBQXlCOzs7OztJQUN6Qix5REFBa0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QsIG9mVHlwZSB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGNhdGNoRXJyb3IsIG1hcCwgbWVyZ2VNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBVc2VyQWRkcmVzc0Nvbm5lY3RvciB9IGZyb20gJy4uLy4uLy4uL3VzZXIvY29ubmVjdG9ycy9hZGRyZXNzL3VzZXItYWRkcmVzcy5jb25uZWN0b3InO1xuaW1wb3J0IHsgbWFrZUVycm9yU2VyaWFsaXphYmxlIH0gZnJvbSAnLi4vLi4vLi4vdXRpbC9zZXJpYWxpemF0aW9uLXV0aWxzJztcbmltcG9ydCB7IENoZWNrb3V0QWN0aW9ucyB9IGZyb20gJy4uL2FjdGlvbnMvaW5kZXgnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQWRkcmVzc1ZlcmlmaWNhdGlvbkVmZmVjdCB7XG4gIEBFZmZlY3QoKVxuICB2ZXJpZnlBZGRyZXNzJDogT2JzZXJ2YWJsZTxcbiAgICBDaGVja291dEFjdGlvbnMuVmVyaWZ5QWRkcmVzc1N1Y2Nlc3MgfCBDaGVja291dEFjdGlvbnMuVmVyaWZ5QWRkcmVzc0ZhaWxcbiAgPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGU8Q2hlY2tvdXRBY3Rpb25zLlZlcmlmeUFkZHJlc3M+KENoZWNrb3V0QWN0aW9ucy5WRVJJRllfQUREUkVTUyksXG4gICAgbWFwKGFjdGlvbiA9PiBhY3Rpb24ucGF5bG9hZCksXG4gICAgbWVyZ2VNYXAocGF5bG9hZCA9PlxuICAgICAgdGhpcy51c2VyQWRkcmVzc0Nvbm5lY3Rvci52ZXJpZnkocGF5bG9hZC51c2VySWQsIHBheWxvYWQuYWRkcmVzcykucGlwZShcbiAgICAgICAgbWFwKGRhdGEgPT4gbmV3IENoZWNrb3V0QWN0aW9ucy5WZXJpZnlBZGRyZXNzU3VjY2VzcyhkYXRhKSksXG4gICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT5cbiAgICAgICAgICBvZihcbiAgICAgICAgICAgIG5ldyBDaGVja291dEFjdGlvbnMuVmVyaWZ5QWRkcmVzc0ZhaWwobWFrZUVycm9yU2VyaWFsaXphYmxlKGVycm9yKSlcbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgIClcbiAgICApXG4gICk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9ucyxcbiAgICBwcml2YXRlIHVzZXJBZGRyZXNzQ29ubmVjdG9yOiBVc2VyQWRkcmVzc0Nvbm5lY3RvclxuICApIHt9XG59XG4iXX0=