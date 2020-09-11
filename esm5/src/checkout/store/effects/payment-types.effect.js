import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';
import { CartActions } from '../../../cart/store/actions/index';
import { normalizeHttpError } from '../../../util/normalize-http-error';
import { PaymentTypeConnector } from '../../connectors/payment-type/payment-type.connector';
import { CheckoutActions } from '../actions/index';
var PaymentTypesEffects = /** @class */ (function () {
    function PaymentTypesEffects(actions$, paymentTypeConnector) {
        var _this = this;
        this.actions$ = actions$;
        this.paymentTypeConnector = paymentTypeConnector;
        this.loadPaymentTypes$ = this.actions$.pipe(ofType(CheckoutActions.LOAD_PAYMENT_TYPES), switchMap(function () {
            return _this.paymentTypeConnector.getPaymentTypes().pipe(map(function (paymentTypes) {
                return new CheckoutActions.LoadPaymentTypesSuccess(paymentTypes);
            }), catchError(function (error) {
                return of(new CheckoutActions.LoadPaymentTypesFail(normalizeHttpError(error)));
            }));
        }));
        this.setPaymentType$ = this.actions$.pipe(ofType(CheckoutActions.SET_PAYMENT_TYPE), map(function (action) { return action.payload; }), switchMap(function (payload) {
            return _this.paymentTypeConnector
                .setPaymentType(payload.userId, payload.cartId, payload.typeCode, payload.poNumber)
                .pipe(mergeMap(function (data) {
                return [
                    new CartActions.LoadCartSuccess({
                        cart: data,
                        userId: payload.userId,
                        cartId: payload.cartId,
                    }),
                    new CheckoutActions.ClearCheckoutData(),
                    new CheckoutActions.SetPaymentTypeSuccess(data),
                ];
            }), catchError(function (error) {
                return of(new CheckoutActions.SetPaymentTypeFail(normalizeHttpError(error)));
            }));
        }));
    }
    PaymentTypesEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: PaymentTypeConnector }
    ]; };
    __decorate([
        Effect()
    ], PaymentTypesEffects.prototype, "loadPaymentTypes$", void 0);
    __decorate([
        Effect()
    ], PaymentTypesEffects.prototype, "setPaymentType$", void 0);
    PaymentTypesEffects = __decorate([
        Injectable()
    ], PaymentTypesEffects);
    return PaymentTypesEffects;
}());
export { PaymentTypesEffects };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5bWVudC10eXBlcy5lZmZlY3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY2hlY2tvdXQvc3RvcmUvZWZmZWN0cy9wYXltZW50LXR5cGVzLmVmZmVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEQsT0FBTyxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsVUFBVSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDdEUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ2hFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBQzVGLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUduRDtJQTRERSw2QkFDVSxRQUFpQixFQUNqQixvQkFBMEM7UUFGcEQsaUJBR0k7UUFGTSxhQUFRLEdBQVIsUUFBUSxDQUFTO1FBQ2pCLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUE1RHBELHNCQUFpQixHQUdiLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUNwQixNQUFNLENBQUMsZUFBZSxDQUFDLGtCQUFrQixDQUFDLEVBQzFDLFNBQVMsQ0FBQztZQUNSLE9BQU8sS0FBSSxDQUFDLG9CQUFvQixDQUFDLGVBQWUsRUFBRSxDQUFDLElBQUksQ0FDckQsR0FBRyxDQUNELFVBQUMsWUFBWTtnQkFDWCxPQUFBLElBQUksZUFBZSxDQUFDLHVCQUF1QixDQUFDLFlBQVksQ0FBQztZQUF6RCxDQUF5RCxDQUM1RCxFQUNELFVBQVUsQ0FBQyxVQUFDLEtBQUs7Z0JBQ2YsT0FBQSxFQUFFLENBQ0EsSUFBSSxlQUFlLENBQUMsb0JBQW9CLENBQUMsa0JBQWtCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FDcEU7WUFGRCxDQUVDLENBQ0YsQ0FDRixDQUFDO1FBQ0osQ0FBQyxDQUFDLENBQ0gsQ0FBQztRQUdGLG9CQUFlLEdBS1gsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ3BCLE1BQU0sQ0FBQyxlQUFlLENBQUMsZ0JBQWdCLENBQUMsRUFDeEMsR0FBRyxDQUFDLFVBQUMsTUFBc0MsSUFBSyxPQUFBLE1BQU0sQ0FBQyxPQUFPLEVBQWQsQ0FBYyxDQUFDLEVBQy9ELFNBQVMsQ0FBQyxVQUFDLE9BQU87WUFDaEIsT0FBTyxLQUFJLENBQUMsb0JBQW9CO2lCQUM3QixjQUFjLENBQ2IsT0FBTyxDQUFDLE1BQU0sRUFDZCxPQUFPLENBQUMsTUFBTSxFQUNkLE9BQU8sQ0FBQyxRQUFRLEVBQ2hCLE9BQU8sQ0FBQyxRQUFRLENBQ2pCO2lCQUNBLElBQUksQ0FDSCxRQUFRLENBQUMsVUFBQyxJQUFJO2dCQUNaLE9BQU87b0JBQ0wsSUFBSSxXQUFXLENBQUMsZUFBZSxDQUFDO3dCQUM5QixJQUFJLEVBQUUsSUFBSTt3QkFDVixNQUFNLEVBQUUsT0FBTyxDQUFDLE1BQU07d0JBQ3RCLE1BQU0sRUFBRSxPQUFPLENBQUMsTUFBTTtxQkFDdkIsQ0FBQztvQkFDRixJQUFJLGVBQWUsQ0FBQyxpQkFBaUIsRUFBRTtvQkFDdkMsSUFBSSxlQUFlLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDO2lCQUNoRCxDQUFDO1lBQ0osQ0FBQyxDQUFDLEVBQ0YsVUFBVSxDQUFDLFVBQUMsS0FBSztnQkFDZixPQUFBLEVBQUUsQ0FDQSxJQUFJLGVBQWUsQ0FBQyxrQkFBa0IsQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUNsRTtZQUZELENBRUMsQ0FDRixDQUNGLENBQUM7UUFDTixDQUFDLENBQUMsQ0FDSCxDQUFDO0lBS0MsQ0FBQzs7Z0JBRmdCLE9BQU87Z0JBQ0ssb0JBQW9COztJQTVEcEQ7UUFEQyxNQUFNLEVBQUU7a0VBbUJQO0lBR0Y7UUFEQyxNQUFNLEVBQUU7Z0VBb0NQO0lBMURTLG1CQUFtQjtRQUQvQixVQUFVLEVBQUU7T0FDQSxtQkFBbUIsQ0FnRS9CO0lBQUQsMEJBQUM7Q0FBQSxBQWhFRCxJQWdFQztTQWhFWSxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QsIG9mVHlwZSB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGNhdGNoRXJyb3IsIG1hcCwgbWVyZ2VNYXAsIHN3aXRjaE1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IENhcnRBY3Rpb25zIH0gZnJvbSAnLi4vLi4vLi4vY2FydC9zdG9yZS9hY3Rpb25zL2luZGV4JztcbmltcG9ydCB7IG5vcm1hbGl6ZUh0dHBFcnJvciB9IGZyb20gJy4uLy4uLy4uL3V0aWwvbm9ybWFsaXplLWh0dHAtZXJyb3InO1xuaW1wb3J0IHsgUGF5bWVudFR5cGVDb25uZWN0b3IgfSBmcm9tICcuLi8uLi9jb25uZWN0b3JzL3BheW1lbnQtdHlwZS9wYXltZW50LXR5cGUuY29ubmVjdG9yJztcbmltcG9ydCB7IENoZWNrb3V0QWN0aW9ucyB9IGZyb20gJy4uL2FjdGlvbnMvaW5kZXgnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUGF5bWVudFR5cGVzRWZmZWN0cyB7XG4gIEBFZmZlY3QoKVxuICBsb2FkUGF5bWVudFR5cGVzJDogT2JzZXJ2YWJsZTxcbiAgICB8IENoZWNrb3V0QWN0aW9ucy5Mb2FkUGF5bWVudFR5cGVzU3VjY2Vzc1xuICAgIHwgQ2hlY2tvdXRBY3Rpb25zLkxvYWRQYXltZW50VHlwZXNGYWlsXG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKENoZWNrb3V0QWN0aW9ucy5MT0FEX1BBWU1FTlRfVFlQRVMpLFxuICAgIHN3aXRjaE1hcCgoKSA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5wYXltZW50VHlwZUNvbm5lY3Rvci5nZXRQYXltZW50VHlwZXMoKS5waXBlKFxuICAgICAgICBtYXAoXG4gICAgICAgICAgKHBheW1lbnRUeXBlcykgPT5cbiAgICAgICAgICAgIG5ldyBDaGVja291dEFjdGlvbnMuTG9hZFBheW1lbnRUeXBlc1N1Y2Nlc3MocGF5bWVudFR5cGVzKVxuICAgICAgICApLFxuICAgICAgICBjYXRjaEVycm9yKChlcnJvcikgPT5cbiAgICAgICAgICBvZihcbiAgICAgICAgICAgIG5ldyBDaGVja291dEFjdGlvbnMuTG9hZFBheW1lbnRUeXBlc0ZhaWwobm9ybWFsaXplSHR0cEVycm9yKGVycm9yKSlcbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgfSlcbiAgKTtcblxuICBARWZmZWN0KClcbiAgc2V0UGF5bWVudFR5cGUkOiBPYnNlcnZhYmxlPFxuICAgIHwgQ2hlY2tvdXRBY3Rpb25zLlNldFBheW1lbnRUeXBlU3VjY2Vzc1xuICAgIHwgQ2hlY2tvdXRBY3Rpb25zLlNldFBheW1lbnRUeXBlRmFpbFxuICAgIHwgQ2FydEFjdGlvbnMuTG9hZENhcnRTdWNjZXNzXG4gICAgfCBDaGVja291dEFjdGlvbnMuQ2xlYXJDaGVja291dERhdGFcbiAgPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoQ2hlY2tvdXRBY3Rpb25zLlNFVF9QQVlNRU5UX1RZUEUpLFxuICAgIG1hcCgoYWN0aW9uOiBDaGVja291dEFjdGlvbnMuU2V0UGF5bWVudFR5cGUpID0+IGFjdGlvbi5wYXlsb2FkKSxcbiAgICBzd2l0Y2hNYXAoKHBheWxvYWQpID0+IHtcbiAgICAgIHJldHVybiB0aGlzLnBheW1lbnRUeXBlQ29ubmVjdG9yXG4gICAgICAgIC5zZXRQYXltZW50VHlwZShcbiAgICAgICAgICBwYXlsb2FkLnVzZXJJZCxcbiAgICAgICAgICBwYXlsb2FkLmNhcnRJZCxcbiAgICAgICAgICBwYXlsb2FkLnR5cGVDb2RlLFxuICAgICAgICAgIHBheWxvYWQucG9OdW1iZXJcbiAgICAgICAgKVxuICAgICAgICAucGlwZShcbiAgICAgICAgICBtZXJnZU1hcCgoZGF0YSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgbmV3IENhcnRBY3Rpb25zLkxvYWRDYXJ0U3VjY2Vzcyh7XG4gICAgICAgICAgICAgICAgY2FydDogZGF0YSxcbiAgICAgICAgICAgICAgICB1c2VySWQ6IHBheWxvYWQudXNlcklkLFxuICAgICAgICAgICAgICAgIGNhcnRJZDogcGF5bG9hZC5jYXJ0SWQsXG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBuZXcgQ2hlY2tvdXRBY3Rpb25zLkNsZWFyQ2hlY2tvdXREYXRhKCksXG4gICAgICAgICAgICAgIG5ldyBDaGVja291dEFjdGlvbnMuU2V0UGF5bWVudFR5cGVTdWNjZXNzKGRhdGEpLFxuICAgICAgICAgICAgXTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBjYXRjaEVycm9yKChlcnJvcikgPT5cbiAgICAgICAgICAgIG9mKFxuICAgICAgICAgICAgICBuZXcgQ2hlY2tvdXRBY3Rpb25zLlNldFBheW1lbnRUeXBlRmFpbChub3JtYWxpemVIdHRwRXJyb3IoZXJyb3IpKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICB9KVxuICApO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnMsXG4gICAgcHJpdmF0ZSBwYXltZW50VHlwZUNvbm5lY3RvcjogUGF5bWVudFR5cGVDb25uZWN0b3JcbiAgKSB7fVxufVxuIl19