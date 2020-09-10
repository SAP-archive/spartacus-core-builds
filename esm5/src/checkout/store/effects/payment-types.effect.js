import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';
import { CartActions } from '../../../cart/store/actions/index';
import { makeErrorSerializable } from '../../../util/serialization-utils';
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
                return of(new CheckoutActions.LoadPaymentTypesFail(makeErrorSerializable(error)));
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
                return of(new CheckoutActions.SetPaymentTypeFail(makeErrorSerializable(error)));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5bWVudC10eXBlcy5lZmZlY3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY2hlY2tvdXQvc3RvcmUvZWZmZWN0cy9wYXltZW50LXR5cGVzLmVmZmVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEQsT0FBTyxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsVUFBVSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDdEUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ2hFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBQzVGLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUduRDtJQWdFRSw2QkFDVSxRQUFpQixFQUNqQixvQkFBMEM7UUFGcEQsaUJBR0k7UUFGTSxhQUFRLEdBQVIsUUFBUSxDQUFTO1FBQ2pCLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFoRXBELHNCQUFpQixHQUdiLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUNwQixNQUFNLENBQUMsZUFBZSxDQUFDLGtCQUFrQixDQUFDLEVBQzFDLFNBQVMsQ0FBQztZQUNSLE9BQU8sS0FBSSxDQUFDLG9CQUFvQixDQUFDLGVBQWUsRUFBRSxDQUFDLElBQUksQ0FDckQsR0FBRyxDQUNELFVBQUMsWUFBWTtnQkFDWCxPQUFBLElBQUksZUFBZSxDQUFDLHVCQUF1QixDQUFDLFlBQVksQ0FBQztZQUF6RCxDQUF5RCxDQUM1RCxFQUNELFVBQVUsQ0FBQyxVQUFDLEtBQUs7Z0JBQ2YsT0FBQSxFQUFFLENBQ0EsSUFBSSxlQUFlLENBQUMsb0JBQW9CLENBQ3RDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUM3QixDQUNGO1lBSkQsQ0FJQyxDQUNGLENBQ0YsQ0FBQztRQUNKLENBQUMsQ0FBQyxDQUNILENBQUM7UUFHRixvQkFBZSxHQUtYLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUNwQixNQUFNLENBQUMsZUFBZSxDQUFDLGdCQUFnQixDQUFDLEVBQ3hDLEdBQUcsQ0FBQyxVQUFDLE1BQXNDLElBQUssT0FBQSxNQUFNLENBQUMsT0FBTyxFQUFkLENBQWMsQ0FBQyxFQUMvRCxTQUFTLENBQUMsVUFBQyxPQUFPO1lBQ2hCLE9BQU8sS0FBSSxDQUFDLG9CQUFvQjtpQkFDN0IsY0FBYyxDQUNiLE9BQU8sQ0FBQyxNQUFNLEVBQ2QsT0FBTyxDQUFDLE1BQU0sRUFDZCxPQUFPLENBQUMsUUFBUSxFQUNoQixPQUFPLENBQUMsUUFBUSxDQUNqQjtpQkFDQSxJQUFJLENBQ0gsUUFBUSxDQUFDLFVBQUMsSUFBSTtnQkFDWixPQUFPO29CQUNMLElBQUksV0FBVyxDQUFDLGVBQWUsQ0FBQzt3QkFDOUIsSUFBSSxFQUFFLElBQUk7d0JBQ1YsTUFBTSxFQUFFLE9BQU8sQ0FBQyxNQUFNO3dCQUN0QixNQUFNLEVBQUUsT0FBTyxDQUFDLE1BQU07cUJBQ3ZCLENBQUM7b0JBQ0YsSUFBSSxlQUFlLENBQUMsaUJBQWlCLEVBQUU7b0JBQ3ZDLElBQUksZUFBZSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQztpQkFDaEQsQ0FBQztZQUNKLENBQUMsQ0FBQyxFQUNGLFVBQVUsQ0FBQyxVQUFDLEtBQUs7Z0JBQ2YsT0FBQSxFQUFFLENBQ0EsSUFBSSxlQUFlLENBQUMsa0JBQWtCLENBQ3BDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUM3QixDQUNGO1lBSkQsQ0FJQyxDQUNGLENBQ0YsQ0FBQztRQUNOLENBQUMsQ0FBQyxDQUNILENBQUM7SUFLQyxDQUFDOztnQkFGZ0IsT0FBTztnQkFDSyxvQkFBb0I7O0lBaEVwRDtRQURDLE1BQU0sRUFBRTtrRUFxQlA7SUFHRjtRQURDLE1BQU0sRUFBRTtnRUFzQ1A7SUE5RFMsbUJBQW1CO1FBRC9CLFVBQVUsRUFBRTtPQUNBLG1CQUFtQixDQW9FL0I7SUFBRCwwQkFBQztDQUFBLEFBcEVELElBb0VDO1NBcEVZLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCwgb2ZUeXBlIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgY2F0Y2hFcnJvciwgbWFwLCBtZXJnZU1hcCwgc3dpdGNoTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQ2FydEFjdGlvbnMgfSBmcm9tICcuLi8uLi8uLi9jYXJ0L3N0b3JlL2FjdGlvbnMvaW5kZXgnO1xuaW1wb3J0IHsgbWFrZUVycm9yU2VyaWFsaXphYmxlIH0gZnJvbSAnLi4vLi4vLi4vdXRpbC9zZXJpYWxpemF0aW9uLXV0aWxzJztcbmltcG9ydCB7IFBheW1lbnRUeXBlQ29ubmVjdG9yIH0gZnJvbSAnLi4vLi4vY29ubmVjdG9ycy9wYXltZW50LXR5cGUvcGF5bWVudC10eXBlLmNvbm5lY3Rvcic7XG5pbXBvcnQgeyBDaGVja291dEFjdGlvbnMgfSBmcm9tICcuLi9hY3Rpb25zL2luZGV4JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFBheW1lbnRUeXBlc0VmZmVjdHMge1xuICBARWZmZWN0KClcbiAgbG9hZFBheW1lbnRUeXBlcyQ6IE9ic2VydmFibGU8XG4gICAgfCBDaGVja291dEFjdGlvbnMuTG9hZFBheW1lbnRUeXBlc1N1Y2Nlc3NcbiAgICB8IENoZWNrb3V0QWN0aW9ucy5Mb2FkUGF5bWVudFR5cGVzRmFpbFxuICA+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShDaGVja291dEFjdGlvbnMuTE9BRF9QQVlNRU5UX1RZUEVTKSxcbiAgICBzd2l0Y2hNYXAoKCkgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMucGF5bWVudFR5cGVDb25uZWN0b3IuZ2V0UGF5bWVudFR5cGVzKCkucGlwZShcbiAgICAgICAgbWFwKFxuICAgICAgICAgIChwYXltZW50VHlwZXMpID0+XG4gICAgICAgICAgICBuZXcgQ2hlY2tvdXRBY3Rpb25zLkxvYWRQYXltZW50VHlwZXNTdWNjZXNzKHBheW1lbnRUeXBlcylcbiAgICAgICAgKSxcbiAgICAgICAgY2F0Y2hFcnJvcigoZXJyb3IpID0+XG4gICAgICAgICAgb2YoXG4gICAgICAgICAgICBuZXcgQ2hlY2tvdXRBY3Rpb25zLkxvYWRQYXltZW50VHlwZXNGYWlsKFxuICAgICAgICAgICAgICBtYWtlRXJyb3JTZXJpYWxpemFibGUoZXJyb3IpXG4gICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICApO1xuICAgIH0pXG4gICk7XG5cbiAgQEVmZmVjdCgpXG4gIHNldFBheW1lbnRUeXBlJDogT2JzZXJ2YWJsZTxcbiAgICB8IENoZWNrb3V0QWN0aW9ucy5TZXRQYXltZW50VHlwZVN1Y2Nlc3NcbiAgICB8IENoZWNrb3V0QWN0aW9ucy5TZXRQYXltZW50VHlwZUZhaWxcbiAgICB8IENhcnRBY3Rpb25zLkxvYWRDYXJ0U3VjY2Vzc1xuICAgIHwgQ2hlY2tvdXRBY3Rpb25zLkNsZWFyQ2hlY2tvdXREYXRhXG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKENoZWNrb3V0QWN0aW9ucy5TRVRfUEFZTUVOVF9UWVBFKSxcbiAgICBtYXAoKGFjdGlvbjogQ2hlY2tvdXRBY3Rpb25zLlNldFBheW1lbnRUeXBlKSA9PiBhY3Rpb24ucGF5bG9hZCksXG4gICAgc3dpdGNoTWFwKChwYXlsb2FkKSA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5wYXltZW50VHlwZUNvbm5lY3RvclxuICAgICAgICAuc2V0UGF5bWVudFR5cGUoXG4gICAgICAgICAgcGF5bG9hZC51c2VySWQsXG4gICAgICAgICAgcGF5bG9hZC5jYXJ0SWQsXG4gICAgICAgICAgcGF5bG9hZC50eXBlQ29kZSxcbiAgICAgICAgICBwYXlsb2FkLnBvTnVtYmVyXG4gICAgICAgIClcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgbWVyZ2VNYXAoKGRhdGEpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgIG5ldyBDYXJ0QWN0aW9ucy5Mb2FkQ2FydFN1Y2Nlc3Moe1xuICAgICAgICAgICAgICAgIGNhcnQ6IGRhdGEsXG4gICAgICAgICAgICAgICAgdXNlcklkOiBwYXlsb2FkLnVzZXJJZCxcbiAgICAgICAgICAgICAgICBjYXJ0SWQ6IHBheWxvYWQuY2FydElkLFxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgbmV3IENoZWNrb3V0QWN0aW9ucy5DbGVhckNoZWNrb3V0RGF0YSgpLFxuICAgICAgICAgICAgICBuZXcgQ2hlY2tvdXRBY3Rpb25zLlNldFBheW1lbnRUeXBlU3VjY2VzcyhkYXRhKSxcbiAgICAgICAgICAgIF07XG4gICAgICAgICAgfSksXG4gICAgICAgICAgY2F0Y2hFcnJvcigoZXJyb3IpID0+XG4gICAgICAgICAgICBvZihcbiAgICAgICAgICAgICAgbmV3IENoZWNrb3V0QWN0aW9ucy5TZXRQYXltZW50VHlwZUZhaWwoXG4gICAgICAgICAgICAgICAgbWFrZUVycm9yU2VyaWFsaXphYmxlKGVycm9yKVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgICApO1xuICAgIH0pXG4gICk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9ucyxcbiAgICBwcml2YXRlIHBheW1lbnRUeXBlQ29ubmVjdG9yOiBQYXltZW50VHlwZUNvbm5lY3RvclxuICApIHt9XG59XG4iXX0=