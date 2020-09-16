import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CheckoutAdapter } from '../../../checkout/connectors/checkout/checkout.adapter';
import { OccCheckoutAdapter } from './occ-checkout.adapter';
import { OccOrderNormalizer } from './converters/occ-order-normalizer';
import { ORDER_NORMALIZER } from '../../../checkout/connectors/checkout/converters';
import { CheckoutDeliveryAdapter } from '../../../checkout/connectors/delivery/checkout-delivery.adapter';
import { OccCheckoutDeliveryAdapter } from './occ-checkout-delivery.adapter';
import { CheckoutPaymentAdapter } from '../../../checkout/connectors/payment/checkout-payment.adapter';
import { OccCheckoutPaymentAdapter } from './occ-checkout-payment.adapter';
import { PaymentTypeAdapter } from '../../../checkout/connectors/payment-type/payment-type.adapter';
import { OccCheckoutPaymentTypeAdapter } from './occ-checkout-payment-type.adapter';
import { provideDefaultConfig } from '../../../config/config-providers';
import { defaultOccCheckoutConfig } from './default-occ-checkout-config';
import { CheckoutCostCenterAdapter } from '../../../checkout/connectors/cost-center/checkout-cost-center.adapter';
import { OccCheckoutCostCenterAdapter } from './occ-checkout-cost-center.adapter';
export class CheckoutOccModule {
}
CheckoutOccModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, HttpClientModule],
                providers: [
                    provideDefaultConfig(defaultOccCheckoutConfig),
                    {
                        provide: CheckoutAdapter,
                        useClass: OccCheckoutAdapter,
                    },
                    { provide: ORDER_NORMALIZER, useExisting: OccOrderNormalizer, multi: true },
                    {
                        provide: CheckoutDeliveryAdapter,
                        useClass: OccCheckoutDeliveryAdapter,
                    },
                    {
                        provide: CheckoutPaymentAdapter,
                        useClass: OccCheckoutPaymentAdapter,
                    },
                    {
                        provide: PaymentTypeAdapter,
                        useClass: OccCheckoutPaymentTypeAdapter,
                    },
                    {
                        provide: CheckoutCostCenterAdapter,
                        useClass: OccCheckoutCostCenterAdapter,
                    },
                ],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQtb2NjLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmUvc3JjL29jYy9hZGFwdGVycy9jaGVja291dC9jaGVja291dC1vY2MubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx3REFBd0QsQ0FBQztBQUN6RixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUM1RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUN2RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUNwRixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxpRUFBaUUsQ0FBQztBQUMxRyxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUM3RSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwrREFBK0QsQ0FBQztBQUN2RyxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUMzRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxnRUFBZ0UsQ0FBQztBQUNwRyxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUNwRixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUN4RSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUN6RSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSx1RUFBdUUsQ0FBQztBQUNsSCxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQTZCbEYsTUFBTSxPQUFPLGlCQUFpQjs7O1lBM0I3QixRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLGdCQUFnQixDQUFDO2dCQUN6QyxTQUFTLEVBQUU7b0JBQ1Qsb0JBQW9CLENBQUMsd0JBQXdCLENBQUM7b0JBQzlDO3dCQUNFLE9BQU8sRUFBRSxlQUFlO3dCQUN4QixRQUFRLEVBQUUsa0JBQWtCO3FCQUM3QjtvQkFDRCxFQUFFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxXQUFXLEVBQUUsa0JBQWtCLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRTtvQkFDM0U7d0JBQ0UsT0FBTyxFQUFFLHVCQUF1Qjt3QkFDaEMsUUFBUSxFQUFFLDBCQUEwQjtxQkFDckM7b0JBQ0Q7d0JBQ0UsT0FBTyxFQUFFLHNCQUFzQjt3QkFDL0IsUUFBUSxFQUFFLHlCQUF5QjtxQkFDcEM7b0JBQ0Q7d0JBQ0UsT0FBTyxFQUFFLGtCQUFrQjt3QkFDM0IsUUFBUSxFQUFFLDZCQUE2QjtxQkFDeEM7b0JBQ0Q7d0JBQ0UsT0FBTyxFQUFFLHlCQUF5Qjt3QkFDbEMsUUFBUSxFQUFFLDRCQUE0QjtxQkFDdkM7aUJBQ0Y7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IENoZWNrb3V0QWRhcHRlciB9IGZyb20gJy4uLy4uLy4uL2NoZWNrb3V0L2Nvbm5lY3RvcnMvY2hlY2tvdXQvY2hlY2tvdXQuYWRhcHRlcic7XG5pbXBvcnQgeyBPY2NDaGVja291dEFkYXB0ZXIgfSBmcm9tICcuL29jYy1jaGVja291dC5hZGFwdGVyJztcbmltcG9ydCB7IE9jY09yZGVyTm9ybWFsaXplciB9IGZyb20gJy4vY29udmVydGVycy9vY2Mtb3JkZXItbm9ybWFsaXplcic7XG5pbXBvcnQgeyBPUkRFUl9OT1JNQUxJWkVSIH0gZnJvbSAnLi4vLi4vLi4vY2hlY2tvdXQvY29ubmVjdG9ycy9jaGVja291dC9jb252ZXJ0ZXJzJztcbmltcG9ydCB7IENoZWNrb3V0RGVsaXZlcnlBZGFwdGVyIH0gZnJvbSAnLi4vLi4vLi4vY2hlY2tvdXQvY29ubmVjdG9ycy9kZWxpdmVyeS9jaGVja291dC1kZWxpdmVyeS5hZGFwdGVyJztcbmltcG9ydCB7IE9jY0NoZWNrb3V0RGVsaXZlcnlBZGFwdGVyIH0gZnJvbSAnLi9vY2MtY2hlY2tvdXQtZGVsaXZlcnkuYWRhcHRlcic7XG5pbXBvcnQgeyBDaGVja291dFBheW1lbnRBZGFwdGVyIH0gZnJvbSAnLi4vLi4vLi4vY2hlY2tvdXQvY29ubmVjdG9ycy9wYXltZW50L2NoZWNrb3V0LXBheW1lbnQuYWRhcHRlcic7XG5pbXBvcnQgeyBPY2NDaGVja291dFBheW1lbnRBZGFwdGVyIH0gZnJvbSAnLi9vY2MtY2hlY2tvdXQtcGF5bWVudC5hZGFwdGVyJztcbmltcG9ydCB7IFBheW1lbnRUeXBlQWRhcHRlciB9IGZyb20gJy4uLy4uLy4uL2NoZWNrb3V0L2Nvbm5lY3RvcnMvcGF5bWVudC10eXBlL3BheW1lbnQtdHlwZS5hZGFwdGVyJztcbmltcG9ydCB7IE9jY0NoZWNrb3V0UGF5bWVudFR5cGVBZGFwdGVyIH0gZnJvbSAnLi9vY2MtY2hlY2tvdXQtcGF5bWVudC10eXBlLmFkYXB0ZXInO1xuaW1wb3J0IHsgcHJvdmlkZURlZmF1bHRDb25maWcgfSBmcm9tICcuLi8uLi8uLi9jb25maWcvY29uZmlnLXByb3ZpZGVycyc7XG5pbXBvcnQgeyBkZWZhdWx0T2NjQ2hlY2tvdXRDb25maWcgfSBmcm9tICcuL2RlZmF1bHQtb2NjLWNoZWNrb3V0LWNvbmZpZyc7XG5pbXBvcnQgeyBDaGVja291dENvc3RDZW50ZXJBZGFwdGVyIH0gZnJvbSAnLi4vLi4vLi4vY2hlY2tvdXQvY29ubmVjdG9ycy9jb3N0LWNlbnRlci9jaGVja291dC1jb3N0LWNlbnRlci5hZGFwdGVyJztcbmltcG9ydCB7IE9jY0NoZWNrb3V0Q29zdENlbnRlckFkYXB0ZXIgfSBmcm9tICcuL29jYy1jaGVja291dC1jb3N0LWNlbnRlci5hZGFwdGVyJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgSHR0cENsaWVudE1vZHVsZV0sXG4gIHByb3ZpZGVyczogW1xuICAgIHByb3ZpZGVEZWZhdWx0Q29uZmlnKGRlZmF1bHRPY2NDaGVja291dENvbmZpZyksXG4gICAge1xuICAgICAgcHJvdmlkZTogQ2hlY2tvdXRBZGFwdGVyLFxuICAgICAgdXNlQ2xhc3M6IE9jY0NoZWNrb3V0QWRhcHRlcixcbiAgICB9LFxuICAgIHsgcHJvdmlkZTogT1JERVJfTk9STUFMSVpFUiwgdXNlRXhpc3Rpbmc6IE9jY09yZGVyTm9ybWFsaXplciwgbXVsdGk6IHRydWUgfSxcbiAgICB7XG4gICAgICBwcm92aWRlOiBDaGVja291dERlbGl2ZXJ5QWRhcHRlcixcbiAgICAgIHVzZUNsYXNzOiBPY2NDaGVja291dERlbGl2ZXJ5QWRhcHRlcixcbiAgICB9LFxuICAgIHtcbiAgICAgIHByb3ZpZGU6IENoZWNrb3V0UGF5bWVudEFkYXB0ZXIsXG4gICAgICB1c2VDbGFzczogT2NjQ2hlY2tvdXRQYXltZW50QWRhcHRlcixcbiAgICB9LFxuICAgIHtcbiAgICAgIHByb3ZpZGU6IFBheW1lbnRUeXBlQWRhcHRlcixcbiAgICAgIHVzZUNsYXNzOiBPY2NDaGVja291dFBheW1lbnRUeXBlQWRhcHRlcixcbiAgICB9LFxuICAgIHtcbiAgICAgIHByb3ZpZGU6IENoZWNrb3V0Q29zdENlbnRlckFkYXB0ZXIsXG4gICAgICB1c2VDbGFzczogT2NjQ2hlY2tvdXRDb3N0Q2VudGVyQWRhcHRlcixcbiAgICB9LFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBDaGVja291dE9jY01vZHVsZSB7fVxuIl19