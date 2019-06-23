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
export class AddressVerificationEffect {
    /**
     * @param {?} actions$
     * @param {?} userAddressConnector
     */
    constructor(actions$, userAddressConnector) {
        this.actions$ = actions$;
        this.userAddressConnector = userAddressConnector;
        this.verifyAddress$ = this.actions$.pipe(ofType(fromAction.VERIFY_ADDRESS), map((/**
         * @param {?} action
         * @return {?}
         */
        action => action.payload)), mergeMap((/**
         * @param {?} payload
         * @return {?}
         */
        payload => this.userAddressConnector.verify(payload.userId, payload.address).pipe(map((/**
         * @param {?} data
         * @return {?}
         */
        data => new fromAction.VerifyAddressSuccess(data))), catchError((/**
         * @param {?} error
         * @return {?}
         */
        error => of(new fromAction.VerifyAddressFail(makeErrorSerializable(error)))))))));
    }
}
AddressVerificationEffect.decorators = [
    { type: Injectable }
];
/** @nocollapse */
AddressVerificationEffect.ctorParameters = () => [
    { type: Actions },
    { type: UserAddressConnector }
];
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Observable)
], AddressVerificationEffect.prototype, "verifyAddress$", void 0);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkcmVzcy12ZXJpZmljYXRpb24uZWZmZWN0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2NoZWNrb3V0L3N0b3JlL2VmZmVjdHMvYWRkcmVzcy12ZXJpZmljYXRpb24uZWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0QsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0seURBQXlELENBQUM7QUFDL0YsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDMUUsT0FBTyxLQUFLLFVBQVUsTUFBTSx3Q0FBd0MsQ0FBQztBQUdyRSxNQUFNLE9BQU8seUJBQXlCOzs7OztJQWlCcEMsWUFDVSxRQUFpQixFQUNqQixvQkFBMEM7UUFEMUMsYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUNqQix5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBakJwRCxtQkFBYyxHQUVWLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUNwQixNQUFNLENBQTJCLFVBQVUsQ0FBQyxjQUFjLENBQUMsRUFDM0QsR0FBRzs7OztRQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBQyxFQUM3QixRQUFROzs7O1FBQUMsT0FBTyxDQUFDLEVBQUUsQ0FDakIsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQ3BFLEdBQUc7Ozs7UUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksVUFBVSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxFQUFDLEVBQ3RELFVBQVU7Ozs7UUFBQyxLQUFLLENBQUMsRUFBRSxDQUNqQixFQUFFLENBQUMsSUFBSSxVQUFVLENBQUMsaUJBQWlCLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUNuRSxDQUNGLEVBQ0YsQ0FDRixDQUFDO0lBS0MsQ0FBQzs7O1lBckJMLFVBQVU7Ozs7WUFQRixPQUFPO1lBR1Asb0JBQW9COztBQU8zQjtJQURDLE1BQU0sRUFBRTtzQ0FDTyxVQUFVO2lFQWF4Qjs7O0lBZEYsbURBY0U7Ozs7O0lBR0EsNkNBQXlCOzs7OztJQUN6Qix5REFBa0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QsIG9mVHlwZSB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGNhdGNoRXJyb3IsIG1hcCwgbWVyZ2VNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBVc2VyQWRkcmVzc0Nvbm5lY3RvciB9IGZyb20gJy4uLy4uLy4uL3VzZXIvY29ubmVjdG9ycy9hZGRyZXNzL3VzZXItYWRkcmVzcy5jb25uZWN0b3InO1xuaW1wb3J0IHsgbWFrZUVycm9yU2VyaWFsaXphYmxlIH0gZnJvbSAnLi4vLi4vLi4vdXRpbC9zZXJpYWxpemF0aW9uLXV0aWxzJztcbmltcG9ydCAqIGFzIGZyb21BY3Rpb24gZnJvbSAnLi4vYWN0aW9ucy9hZGRyZXNzLXZlcmlmaWNhdGlvbi5hY3Rpb24nO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQWRkcmVzc1ZlcmlmaWNhdGlvbkVmZmVjdCB7XG4gIEBFZmZlY3QoKVxuICB2ZXJpZnlBZGRyZXNzJDogT2JzZXJ2YWJsZTxcbiAgICBmcm9tQWN0aW9uLlZlcmlmeUFkZHJlc3NTdWNjZXNzIHwgZnJvbUFjdGlvbi5WZXJpZnlBZGRyZXNzRmFpbFxuICA+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZTxmcm9tQWN0aW9uLlZlcmlmeUFkZHJlc3M+KGZyb21BY3Rpb24uVkVSSUZZX0FERFJFU1MpLFxuICAgIG1hcChhY3Rpb24gPT4gYWN0aW9uLnBheWxvYWQpLFxuICAgIG1lcmdlTWFwKHBheWxvYWQgPT5cbiAgICAgIHRoaXMudXNlckFkZHJlc3NDb25uZWN0b3IudmVyaWZ5KHBheWxvYWQudXNlcklkLCBwYXlsb2FkLmFkZHJlc3MpLnBpcGUoXG4gICAgICAgIG1hcChkYXRhID0+IG5ldyBmcm9tQWN0aW9uLlZlcmlmeUFkZHJlc3NTdWNjZXNzKGRhdGEpKSxcbiAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PlxuICAgICAgICAgIG9mKG5ldyBmcm9tQWN0aW9uLlZlcmlmeUFkZHJlc3NGYWlsKG1ha2VFcnJvclNlcmlhbGl6YWJsZShlcnJvcikpKVxuICAgICAgICApXG4gICAgICApXG4gICAgKVxuICApO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnMsXG4gICAgcHJpdmF0ZSB1c2VyQWRkcmVzc0Nvbm5lY3RvcjogVXNlckFkZHJlc3NDb25uZWN0b3JcbiAgKSB7fVxufVxuIl19