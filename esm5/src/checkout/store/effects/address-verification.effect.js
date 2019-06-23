/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { UserAddressConnector } from '../../../user/connectors/address/user-address.connector';
import { makeErrorSerializable } from '../../../util/serialization-utils';
import * as fromAction from '../actions/address-verification.action';
var AddressVerificationEffect = /** @class */ (function () {
    function AddressVerificationEffect(actions$, userAddressConnector) {
        var _this = this;
        this.actions$ = actions$;
        this.userAddressConnector = userAddressConnector;
        this.verifyAddress$ = this.actions$.pipe(ofType(fromAction.VERIFY_ADDRESS), map((/**
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
            function (data) { return new fromAction.VerifyAddressSuccess(data); })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                return of(new fromAction.VerifyAddressFail(makeErrorSerializable(error)));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkcmVzcy12ZXJpZmljYXRpb24uZWZmZWN0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2NoZWNrb3V0L3N0b3JlL2VmZmVjdHMvYWRkcmVzcy12ZXJpZmljYXRpb24uZWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0QsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0seURBQXlELENBQUM7QUFDL0YsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDMUUsT0FBTyxLQUFLLFVBQVUsTUFBTSx3Q0FBd0MsQ0FBQztBQUVyRTtJQWtCRSxtQ0FDVSxRQUFpQixFQUNqQixvQkFBMEM7UUFGcEQsaUJBR0k7UUFGTSxhQUFRLEdBQVIsUUFBUSxDQUFTO1FBQ2pCLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFqQnBELG1CQUFjLEdBRVYsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ3BCLE1BQU0sQ0FBMkIsVUFBVSxDQUFDLGNBQWMsQ0FBQyxFQUMzRCxHQUFHOzs7O1FBQUMsVUFBQSxNQUFNLElBQUksT0FBQSxNQUFNLENBQUMsT0FBTyxFQUFkLENBQWMsRUFBQyxFQUM3QixRQUFROzs7O1FBQUMsVUFBQSxPQUFPO1lBQ2QsT0FBQSxLQUFJLENBQUMsb0JBQW9CLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FDcEUsR0FBRzs7OztZQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsSUFBSSxVQUFVLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLEVBQXpDLENBQXlDLEVBQUMsRUFDdEQsVUFBVTs7OztZQUFDLFVBQUEsS0FBSztnQkFDZCxPQUFBLEVBQUUsQ0FBQyxJQUFJLFVBQVUsQ0FBQyxpQkFBaUIsQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQWxFLENBQWtFLEVBQ25FLENBQ0Y7UUFMRCxDQUtDLEVBQ0YsQ0FDRixDQUFDO0lBS0MsQ0FBQzs7Z0JBckJMLFVBQVU7Ozs7Z0JBUEYsT0FBTztnQkFHUCxvQkFBb0I7O0lBTzNCO1FBREMsTUFBTSxFQUFFOzBDQUNPLFVBQVU7cUVBYXhCO0lBTUosZ0NBQUM7Q0FBQSxBQXRCRCxJQXNCQztTQXJCWSx5QkFBeUI7OztJQUNwQyxtREFjRTs7Ozs7SUFHQSw2Q0FBeUI7Ozs7O0lBQ3pCLHlEQUFrRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCwgb2ZUeXBlIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgY2F0Y2hFcnJvciwgbWFwLCBtZXJnZU1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFVzZXJBZGRyZXNzQ29ubmVjdG9yIH0gZnJvbSAnLi4vLi4vLi4vdXNlci9jb25uZWN0b3JzL2FkZHJlc3MvdXNlci1hZGRyZXNzLmNvbm5lY3Rvcic7XG5pbXBvcnQgeyBtYWtlRXJyb3JTZXJpYWxpemFibGUgfSBmcm9tICcuLi8uLi8uLi91dGlsL3NlcmlhbGl6YXRpb24tdXRpbHMnO1xuaW1wb3J0ICogYXMgZnJvbUFjdGlvbiBmcm9tICcuLi9hY3Rpb25zL2FkZHJlc3MtdmVyaWZpY2F0aW9uLmFjdGlvbic7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBZGRyZXNzVmVyaWZpY2F0aW9uRWZmZWN0IHtcbiAgQEVmZmVjdCgpXG4gIHZlcmlmeUFkZHJlc3MkOiBPYnNlcnZhYmxlPFxuICAgIGZyb21BY3Rpb24uVmVyaWZ5QWRkcmVzc1N1Y2Nlc3MgfCBmcm9tQWN0aW9uLlZlcmlmeUFkZHJlc3NGYWlsXG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlPGZyb21BY3Rpb24uVmVyaWZ5QWRkcmVzcz4oZnJvbUFjdGlvbi5WRVJJRllfQUREUkVTUyksXG4gICAgbWFwKGFjdGlvbiA9PiBhY3Rpb24ucGF5bG9hZCksXG4gICAgbWVyZ2VNYXAocGF5bG9hZCA9PlxuICAgICAgdGhpcy51c2VyQWRkcmVzc0Nvbm5lY3Rvci52ZXJpZnkocGF5bG9hZC51c2VySWQsIHBheWxvYWQuYWRkcmVzcykucGlwZShcbiAgICAgICAgbWFwKGRhdGEgPT4gbmV3IGZyb21BY3Rpb24uVmVyaWZ5QWRkcmVzc1N1Y2Nlc3MoZGF0YSkpLFxuICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+XG4gICAgICAgICAgb2YobmV3IGZyb21BY3Rpb24uVmVyaWZ5QWRkcmVzc0ZhaWwobWFrZUVycm9yU2VyaWFsaXphYmxlKGVycm9yKSkpXG4gICAgICAgIClcbiAgICAgIClcbiAgICApXG4gICk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9ucyxcbiAgICBwcml2YXRlIHVzZXJBZGRyZXNzQ29ubmVjdG9yOiBVc2VyQWRkcmVzc0Nvbm5lY3RvclxuICApIHt9XG59XG4iXX0=