import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { UserAddressConnector } from '../../../user/connectors/address/user-address.connector';
import { makeErrorSerializable } from '../../../util/serialization-utils';
import { CheckoutActions } from '../actions/index';
var AddressVerificationEffect = /** @class */ (function () {
    function AddressVerificationEffect(actions$, userAddressConnector) {
        var _this = this;
        this.actions$ = actions$;
        this.userAddressConnector = userAddressConnector;
        this.verifyAddress$ = this.actions$.pipe(ofType(CheckoutActions.VERIFY_ADDRESS), map(function (action) { return action.payload; }), mergeMap(function (payload) {
            return _this.userAddressConnector.verify(payload.userId, payload.address).pipe(map(function (data) { return new CheckoutActions.VerifyAddressSuccess(data); }), catchError(function (error) {
                return of(new CheckoutActions.VerifyAddressFail(makeErrorSerializable(error)));
            }));
        }));
    }
    AddressVerificationEffect.ctorParameters = function () { return [
        { type: Actions },
        { type: UserAddressConnector }
    ]; };
    __decorate([
        Effect()
    ], AddressVerificationEffect.prototype, "verifyAddress$", void 0);
    AddressVerificationEffect = __decorate([
        Injectable()
    ], AddressVerificationEffect);
    return AddressVerificationEffect;
}());
export { AddressVerificationEffect };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkcmVzcy12ZXJpZmljYXRpb24uZWZmZWN0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2NoZWNrb3V0L3N0b3JlL2VmZmVjdHMvYWRkcmVzcy12ZXJpZmljYXRpb24uZWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4RCxPQUFPLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHlEQUF5RCxDQUFDO0FBQy9GLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUduRDtJQW1CRSxtQ0FDVSxRQUFpQixFQUNqQixvQkFBMEM7UUFGcEQsaUJBR0k7UUFGTSxhQUFRLEdBQVIsUUFBUSxDQUFTO1FBQ2pCLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFuQnBELG1CQUFjLEdBRVYsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ3BCLE1BQU0sQ0FBZ0MsZUFBZSxDQUFDLGNBQWMsQ0FBQyxFQUNyRSxHQUFHLENBQUMsVUFBQyxNQUFNLElBQUssT0FBQSxNQUFNLENBQUMsT0FBTyxFQUFkLENBQWMsQ0FBQyxFQUMvQixRQUFRLENBQUMsVUFBQyxPQUFPO1lBQ2YsT0FBQSxLQUFJLENBQUMsb0JBQW9CLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FDcEUsR0FBRyxDQUFDLFVBQUMsSUFBSSxJQUFLLE9BQUEsSUFBSSxlQUFlLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLEVBQTlDLENBQThDLENBQUMsRUFDN0QsVUFBVSxDQUFDLFVBQUMsS0FBSztnQkFDZixPQUFBLEVBQUUsQ0FDQSxJQUFJLGVBQWUsQ0FBQyxpQkFBaUIsQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUNwRTtZQUZELENBRUMsQ0FDRixDQUNGO1FBUEQsQ0FPQyxDQUNGLENBQ0YsQ0FBQztJQUtDLENBQUM7O2dCQUZnQixPQUFPO2dCQUNLLG9CQUFvQjs7SUFuQnBEO1FBREMsTUFBTSxFQUFFO3FFQWdCUDtJQWpCUyx5QkFBeUI7UUFEckMsVUFBVSxFQUFFO09BQ0EseUJBQXlCLENBdUJyQztJQUFELGdDQUFDO0NBQUEsQUF2QkQsSUF1QkM7U0F2QlkseUJBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0LCBvZlR5cGUgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBjYXRjaEVycm9yLCBtYXAsIG1lcmdlTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgVXNlckFkZHJlc3NDb25uZWN0b3IgfSBmcm9tICcuLi8uLi8uLi91c2VyL2Nvbm5lY3RvcnMvYWRkcmVzcy91c2VyLWFkZHJlc3MuY29ubmVjdG9yJztcbmltcG9ydCB7IG1ha2VFcnJvclNlcmlhbGl6YWJsZSB9IGZyb20gJy4uLy4uLy4uL3V0aWwvc2VyaWFsaXphdGlvbi11dGlscyc7XG5pbXBvcnQgeyBDaGVja291dEFjdGlvbnMgfSBmcm9tICcuLi9hY3Rpb25zL2luZGV4JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEFkZHJlc3NWZXJpZmljYXRpb25FZmZlY3Qge1xuICBARWZmZWN0KClcbiAgdmVyaWZ5QWRkcmVzcyQ6IE9ic2VydmFibGU8XG4gICAgQ2hlY2tvdXRBY3Rpb25zLlZlcmlmeUFkZHJlc3NTdWNjZXNzIHwgQ2hlY2tvdXRBY3Rpb25zLlZlcmlmeUFkZHJlc3NGYWlsXG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlPENoZWNrb3V0QWN0aW9ucy5WZXJpZnlBZGRyZXNzPihDaGVja291dEFjdGlvbnMuVkVSSUZZX0FERFJFU1MpLFxuICAgIG1hcCgoYWN0aW9uKSA9PiBhY3Rpb24ucGF5bG9hZCksXG4gICAgbWVyZ2VNYXAoKHBheWxvYWQpID0+XG4gICAgICB0aGlzLnVzZXJBZGRyZXNzQ29ubmVjdG9yLnZlcmlmeShwYXlsb2FkLnVzZXJJZCwgcGF5bG9hZC5hZGRyZXNzKS5waXBlKFxuICAgICAgICBtYXAoKGRhdGEpID0+IG5ldyBDaGVja291dEFjdGlvbnMuVmVyaWZ5QWRkcmVzc1N1Y2Nlc3MoZGF0YSkpLFxuICAgICAgICBjYXRjaEVycm9yKChlcnJvcikgPT5cbiAgICAgICAgICBvZihcbiAgICAgICAgICAgIG5ldyBDaGVja291dEFjdGlvbnMuVmVyaWZ5QWRkcmVzc0ZhaWwobWFrZUVycm9yU2VyaWFsaXphYmxlKGVycm9yKSlcbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgIClcbiAgICApXG4gICk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9ucyxcbiAgICBwcml2YXRlIHVzZXJBZGRyZXNzQ29ubmVjdG9yOiBVc2VyQWRkcmVzc0Nvbm5lY3RvclxuICApIHt9XG59XG4iXX0=