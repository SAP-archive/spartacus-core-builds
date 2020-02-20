import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { makeErrorSerializable } from '../../../util/serialization-utils';
import { CheckoutPaymentConnector } from '../../connectors/payment/checkout-payment.connector';
import { CheckoutActions } from '../actions/index';
var CardTypesEffects = /** @class */ (function () {
    function CardTypesEffects(actions$, checkoutPaymentConnector) {
        var _this = this;
        this.actions$ = actions$;
        this.checkoutPaymentConnector = checkoutPaymentConnector;
        this.loadCardTypes$ = this.actions$.pipe(ofType(CheckoutActions.LOAD_CARD_TYPES), switchMap(function () {
            return _this.checkoutPaymentConnector.getCardTypes().pipe(map(function (cardTypes) { return new CheckoutActions.LoadCardTypesSuccess(cardTypes); }), catchError(function (error) {
                return of(new CheckoutActions.LoadCardTypesFail(makeErrorSerializable(error)));
            }));
        }));
    }
    CardTypesEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: CheckoutPaymentConnector }
    ]; };
    __decorate([
        Effect()
    ], CardTypesEffects.prototype, "loadCardTypes$", void 0);
    CardTypesEffects = __decorate([
        Injectable()
    ], CardTypesEffects);
    return CardTypesEffects;
}());
export { CardTypesEffects };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC10eXBlcy5lZmZlY3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY2hlY2tvdXQvc3RvcmUvZWZmZWN0cy9jYXJkLXR5cGVzLmVmZmVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEQsT0FBTyxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsVUFBVSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM1RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUMxRSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxxREFBcUQsQ0FBQztBQUMvRixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFHbkQ7SUFrQkUsMEJBQ1UsUUFBaUIsRUFDakIsd0JBQWtEO1FBRjVELGlCQUdJO1FBRk0sYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUNqQiw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO1FBbEI1RCxtQkFBYyxHQUVWLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUNwQixNQUFNLENBQUMsZUFBZSxDQUFDLGVBQWUsQ0FBQyxFQUN2QyxTQUFTLENBQUM7WUFDUixPQUFPLEtBQUksQ0FBQyx3QkFBd0IsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxJQUFJLENBQ3RELEdBQUcsQ0FBQyxVQUFBLFNBQVMsSUFBSSxPQUFBLElBQUksZUFBZSxDQUFDLG9CQUFvQixDQUFDLFNBQVMsQ0FBQyxFQUFuRCxDQUFtRCxDQUFDLEVBQ3JFLFVBQVUsQ0FBQyxVQUFBLEtBQUs7Z0JBQ2QsT0FBQSxFQUFFLENBQ0EsSUFBSSxlQUFlLENBQUMsaUJBQWlCLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FDcEU7WUFGRCxDQUVDLENBQ0YsQ0FDRixDQUFDO1FBQ0osQ0FBQyxDQUFDLENBQ0gsQ0FBQztJQUtDLENBQUM7O2dCQUZnQixPQUFPO2dCQUNTLHdCQUF3Qjs7SUFsQjVEO1FBREMsTUFBTSxFQUFFOzREQWVQO0lBaEJTLGdCQUFnQjtRQUQ1QixVQUFVLEVBQUU7T0FDQSxnQkFBZ0IsQ0FzQjVCO0lBQUQsdUJBQUM7Q0FBQSxBQXRCRCxJQXNCQztTQXRCWSxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QsIG9mVHlwZSB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGNhdGNoRXJyb3IsIG1hcCwgc3dpdGNoTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgbWFrZUVycm9yU2VyaWFsaXphYmxlIH0gZnJvbSAnLi4vLi4vLi4vdXRpbC9zZXJpYWxpemF0aW9uLXV0aWxzJztcbmltcG9ydCB7IENoZWNrb3V0UGF5bWVudENvbm5lY3RvciB9IGZyb20gJy4uLy4uL2Nvbm5lY3RvcnMvcGF5bWVudC9jaGVja291dC1wYXltZW50LmNvbm5lY3Rvcic7XG5pbXBvcnQgeyBDaGVja291dEFjdGlvbnMgfSBmcm9tICcuLi9hY3Rpb25zL2luZGV4JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENhcmRUeXBlc0VmZmVjdHMge1xuICBARWZmZWN0KClcbiAgbG9hZENhcmRUeXBlcyQ6IE9ic2VydmFibGU8XG4gICAgQ2hlY2tvdXRBY3Rpb25zLkxvYWRDYXJkVHlwZXNTdWNjZXNzIHwgQ2hlY2tvdXRBY3Rpb25zLkxvYWRDYXJkVHlwZXNGYWlsXG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKENoZWNrb3V0QWN0aW9ucy5MT0FEX0NBUkRfVFlQRVMpLFxuICAgIHN3aXRjaE1hcCgoKSA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5jaGVja291dFBheW1lbnRDb25uZWN0b3IuZ2V0Q2FyZFR5cGVzKCkucGlwZShcbiAgICAgICAgbWFwKGNhcmRUeXBlcyA9PiBuZXcgQ2hlY2tvdXRBY3Rpb25zLkxvYWRDYXJkVHlwZXNTdWNjZXNzKGNhcmRUeXBlcykpLFxuICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+XG4gICAgICAgICAgb2YoXG4gICAgICAgICAgICBuZXcgQ2hlY2tvdXRBY3Rpb25zLkxvYWRDYXJkVHlwZXNGYWlsKG1ha2VFcnJvclNlcmlhbGl6YWJsZShlcnJvcikpXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICApO1xuICAgIH0pXG4gICk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9ucyxcbiAgICBwcml2YXRlIGNoZWNrb3V0UGF5bWVudENvbm5lY3RvcjogQ2hlY2tvdXRQYXltZW50Q29ubmVjdG9yXG4gICkge31cbn1cbiJdfQ==