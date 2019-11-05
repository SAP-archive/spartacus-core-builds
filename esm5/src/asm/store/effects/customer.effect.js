/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { makeErrorSerializable } from '../../../util/serialization-utils';
import { AsmConnector } from '../../connectors/asm.connector';
import { AsmActions } from '../actions/index';
var CustomerEffects = /** @class */ (function () {
    function CustomerEffects(actions$, asmConnector) {
        var _this = this;
        this.actions$ = actions$;
        this.asmConnector = asmConnector;
        this.customerSearch$ = this.actions$.pipe(ofType(AsmActions.CUSTOMER_SEARCH), map((/**
         * @param {?} action
         * @return {?}
         */
        function (action) { return action.payload; })), switchMap((/**
         * @param {?} options
         * @return {?}
         */
        function (options) {
            return _this.asmConnector.customerSearch(options).pipe(map((/**
             * @param {?} customerSearchResults
             * @return {?}
             */
            function (customerSearchResults) {
                return new AsmActions.CustomerSearchSuccess(customerSearchResults);
            })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                return of(new AsmActions.CustomerSearchFail(makeErrorSerializable(error)));
            })));
        })));
    }
    CustomerEffects.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    CustomerEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: AsmConnector }
    ]; };
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Observable)
    ], CustomerEffects.prototype, "customerSearch$", void 0);
    return CustomerEffects;
}());
export { CustomerEffects };
if (false) {
    /** @type {?} */
    CustomerEffects.prototype.customerSearch$;
    /**
     * @type {?}
     * @private
     */
    CustomerEffects.prototype.actions$;
    /**
     * @type {?}
     * @private
     */
    CustomerEffects.prototype.asmConnector;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tZXIuZWZmZWN0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2FzbS9zdG9yZS9lZmZlY3RzL2N1c3RvbWVyLmVmZmVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hELE9BQU8sRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzVELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUU5RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFFOUM7SUFrQkUseUJBQW9CLFFBQWlCLEVBQVUsWUFBMEI7UUFBekUsaUJBQTZFO1FBQXpELGFBQVEsR0FBUixRQUFRLENBQVM7UUFBVSxpQkFBWSxHQUFaLFlBQVksQ0FBYztRQWZ6RSxvQkFBZSxHQUEwQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDekUsTUFBTSxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUMsRUFDbEMsR0FBRzs7OztRQUFDLFVBQUMsTUFBaUMsSUFBSyxPQUFBLE1BQU0sQ0FBQyxPQUFPLEVBQWQsQ0FBYyxFQUFDLEVBQzFELFNBQVM7Ozs7UUFBQyxVQUFBLE9BQU87WUFDZixPQUFBLEtBQUksQ0FBQyxZQUFZLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FDNUMsR0FBRzs7OztZQUFDLFVBQUMscUJBQXlDO2dCQUM1QyxPQUFPLElBQUksVUFBVSxDQUFDLHFCQUFxQixDQUFDLHFCQUFxQixDQUFDLENBQUM7WUFDckUsQ0FBQyxFQUFDLEVBQ0YsVUFBVTs7OztZQUFDLFVBQUEsS0FBSztnQkFDZCxPQUFBLEVBQUUsQ0FBQyxJQUFJLFVBQVUsQ0FBQyxrQkFBa0IsQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQW5FLENBQW1FLEVBQ3BFLENBQ0Y7UUFQRCxDQU9DLEVBQ0YsQ0FDRixDQUFDO0lBRTBFLENBQUM7O2dCQWxCOUUsVUFBVTs7OztnQkFSRixPQUFPO2dCQUlQLFlBQVk7O0lBT25CO1FBREMsTUFBTSxFQUFFOzBDQUNRLFVBQVU7NERBYXpCO0lBR0osc0JBQUM7Q0FBQSxBQW5CRCxJQW1CQztTQWxCWSxlQUFlOzs7SUFDMUIsMENBY0U7Ozs7O0lBRVUsbUNBQXlCOzs7OztJQUFFLHVDQUFrQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCwgb2ZUeXBlIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgY2F0Y2hFcnJvciwgbWFwLCBzd2l0Y2hNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBtYWtlRXJyb3JTZXJpYWxpemFibGUgfSBmcm9tICcuLi8uLi8uLi91dGlsL3NlcmlhbGl6YXRpb24tdXRpbHMnO1xuaW1wb3J0IHsgQXNtQ29ubmVjdG9yIH0gZnJvbSAnLi4vLi4vY29ubmVjdG9ycy9hc20uY29ubmVjdG9yJztcbmltcG9ydCB7IEN1c3RvbWVyU2VhcmNoUGFnZSB9IGZyb20gJy4uLy4uL21vZGVscy9hc20ubW9kZWxzJztcbmltcG9ydCB7IEFzbUFjdGlvbnMgfSBmcm9tICcuLi9hY3Rpb25zL2luZGV4JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEN1c3RvbWVyRWZmZWN0cyB7XG4gIEBFZmZlY3QoKVxuICBjdXN0b21lclNlYXJjaCQ6IE9ic2VydmFibGU8QXNtQWN0aW9ucy5DdXN0b21lckFjdGlvbj4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKEFzbUFjdGlvbnMuQ1VTVE9NRVJfU0VBUkNIKSxcbiAgICBtYXAoKGFjdGlvbjogQXNtQWN0aW9ucy5DdXN0b21lclNlYXJjaCkgPT4gYWN0aW9uLnBheWxvYWQpLFxuICAgIHN3aXRjaE1hcChvcHRpb25zID0+XG4gICAgICB0aGlzLmFzbUNvbm5lY3Rvci5jdXN0b21lclNlYXJjaChvcHRpb25zKS5waXBlKFxuICAgICAgICBtYXAoKGN1c3RvbWVyU2VhcmNoUmVzdWx0czogQ3VzdG9tZXJTZWFyY2hQYWdlKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBBc21BY3Rpb25zLkN1c3RvbWVyU2VhcmNoU3VjY2VzcyhjdXN0b21lclNlYXJjaFJlc3VsdHMpO1xuICAgICAgICB9KSxcbiAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PlxuICAgICAgICAgIG9mKG5ldyBBc21BY3Rpb25zLkN1c3RvbWVyU2VhcmNoRmFpbChtYWtlRXJyb3JTZXJpYWxpemFibGUoZXJyb3IpKSlcbiAgICAgICAgKVxuICAgICAgKVxuICAgIClcbiAgKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zLCBwcml2YXRlIGFzbUNvbm5lY3RvcjogQXNtQ29ubmVjdG9yKSB7fVxufVxuIl19