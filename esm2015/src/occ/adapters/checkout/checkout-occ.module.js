import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CheckoutAdapter } from '../../../checkout/connectors/checkout/checkout.adapter';
import { ORDER_NORMALIZER } from '../../../checkout/connectors/checkout/converters';
import { CheckoutCostCenterAdapter } from '../../../checkout/connectors/cost-center/checkout-cost-center.adapter';
import { CheckoutDeliveryAdapter } from '../../../checkout/connectors/delivery/checkout-delivery.adapter';
import { CheckoutReplenishmentOrderAdapter, REPLENISHMENT_ORDER_FORM_SERIALIZER, REPLENISHMENT_ORDER_NORMALIZER, } from '../../../checkout/connectors/index';
import { PaymentTypeAdapter } from '../../../checkout/connectors/payment-type/payment-type.adapter';
import { CheckoutPaymentAdapter } from '../../../checkout/connectors/payment/checkout-payment.adapter';
import { provideDefaultConfig } from '../../../config/config-providers';
import { OccOrderNormalizer, OccReplenishmentOrderFormSerializer, OccReplenishmentOrderNormalizer, } from './converters/index';
import { defaultOccCheckoutConfig } from './default-occ-checkout-config';
import { OccCheckoutCostCenterAdapter } from './occ-checkout-cost-center.adapter';
import { OccCheckoutDeliveryAdapter } from './occ-checkout-delivery.adapter';
import { OccCheckoutPaymentTypeAdapter } from './occ-checkout-payment-type.adapter';
import { OccCheckoutPaymentAdapter } from './occ-checkout-payment.adapter';
import { OccCheckoutReplenishmentOrderAdapter } from './occ-checkout-replenishment-order.adapter';
import { OccCheckoutAdapter } from './occ-checkout.adapter';
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
                    {
                        provide: CheckoutReplenishmentOrderAdapter,
                        useClass: OccCheckoutReplenishmentOrderAdapter,
                    },
                    {
                        provide: REPLENISHMENT_ORDER_NORMALIZER,
                        useExisting: OccReplenishmentOrderNormalizer,
                        multi: true,
                    },
                    {
                        provide: REPLENISHMENT_ORDER_FORM_SERIALIZER,
                        useExisting: OccReplenishmentOrderFormSerializer,
                        multi: true,
                    },
                ],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQtb2NjLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmUvc3JjL29jYy9hZGFwdGVycy9jaGVja291dC9jaGVja291dC1vY2MubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx3REFBd0QsQ0FBQztBQUN6RixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUNwRixPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSx1RUFBdUUsQ0FBQztBQUNsSCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxpRUFBaUUsQ0FBQztBQUMxRyxPQUFPLEVBQ0wsaUNBQWlDLEVBQ2pDLG1DQUFtQyxFQUNuQyw4QkFBOEIsR0FDL0IsTUFBTSxvQ0FBb0MsQ0FBQztBQUM1QyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxnRUFBZ0UsQ0FBQztBQUNwRyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwrREFBK0QsQ0FBQztBQUN2RyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUN4RSxPQUFPLEVBQ0wsa0JBQWtCLEVBQ2xCLG1DQUFtQyxFQUNuQywrQkFBK0IsR0FDaEMsTUFBTSxvQkFBb0IsQ0FBQztBQUM1QixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUN6RSxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUNsRixPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUM3RSxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUNwRixPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUMzRSxPQUFPLEVBQUUsb0NBQW9DLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUNsRyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQTJDNUQsTUFBTSxPQUFPLGlCQUFpQjs7O1lBekM3QixRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLGdCQUFnQixDQUFDO2dCQUN6QyxTQUFTLEVBQUU7b0JBQ1Qsb0JBQW9CLENBQUMsd0JBQXdCLENBQUM7b0JBQzlDO3dCQUNFLE9BQU8sRUFBRSxlQUFlO3dCQUN4QixRQUFRLEVBQUUsa0JBQWtCO3FCQUM3QjtvQkFDRCxFQUFFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxXQUFXLEVBQUUsa0JBQWtCLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRTtvQkFDM0U7d0JBQ0UsT0FBTyxFQUFFLHVCQUF1Qjt3QkFDaEMsUUFBUSxFQUFFLDBCQUEwQjtxQkFDckM7b0JBQ0Q7d0JBQ0UsT0FBTyxFQUFFLHNCQUFzQjt3QkFDL0IsUUFBUSxFQUFFLHlCQUF5QjtxQkFDcEM7b0JBQ0Q7d0JBQ0UsT0FBTyxFQUFFLGtCQUFrQjt3QkFDM0IsUUFBUSxFQUFFLDZCQUE2QjtxQkFDeEM7b0JBQ0Q7d0JBQ0UsT0FBTyxFQUFFLHlCQUF5Qjt3QkFDbEMsUUFBUSxFQUFFLDRCQUE0QjtxQkFDdkM7b0JBQ0Q7d0JBQ0UsT0FBTyxFQUFFLGlDQUFpQzt3QkFDMUMsUUFBUSxFQUFFLG9DQUFvQztxQkFDL0M7b0JBQ0Q7d0JBQ0UsT0FBTyxFQUFFLDhCQUE4Qjt3QkFDdkMsV0FBVyxFQUFFLCtCQUErQjt3QkFDNUMsS0FBSyxFQUFFLElBQUk7cUJBQ1o7b0JBQ0Q7d0JBQ0UsT0FBTyxFQUFFLG1DQUFtQzt3QkFDNUMsV0FBVyxFQUFFLG1DQUFtQzt3QkFDaEQsS0FBSyxFQUFFLElBQUk7cUJBQ1o7aUJBQ0Y7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENoZWNrb3V0QWRhcHRlciB9IGZyb20gJy4uLy4uLy4uL2NoZWNrb3V0L2Nvbm5lY3RvcnMvY2hlY2tvdXQvY2hlY2tvdXQuYWRhcHRlcic7XG5pbXBvcnQgeyBPUkRFUl9OT1JNQUxJWkVSIH0gZnJvbSAnLi4vLi4vLi4vY2hlY2tvdXQvY29ubmVjdG9ycy9jaGVja291dC9jb252ZXJ0ZXJzJztcbmltcG9ydCB7IENoZWNrb3V0Q29zdENlbnRlckFkYXB0ZXIgfSBmcm9tICcuLi8uLi8uLi9jaGVja291dC9jb25uZWN0b3JzL2Nvc3QtY2VudGVyL2NoZWNrb3V0LWNvc3QtY2VudGVyLmFkYXB0ZXInO1xuaW1wb3J0IHsgQ2hlY2tvdXREZWxpdmVyeUFkYXB0ZXIgfSBmcm9tICcuLi8uLi8uLi9jaGVja291dC9jb25uZWN0b3JzL2RlbGl2ZXJ5L2NoZWNrb3V0LWRlbGl2ZXJ5LmFkYXB0ZXInO1xuaW1wb3J0IHtcbiAgQ2hlY2tvdXRSZXBsZW5pc2htZW50T3JkZXJBZGFwdGVyLFxuICBSRVBMRU5JU0hNRU5UX09SREVSX0ZPUk1fU0VSSUFMSVpFUixcbiAgUkVQTEVOSVNITUVOVF9PUkRFUl9OT1JNQUxJWkVSLFxufSBmcm9tICcuLi8uLi8uLi9jaGVja291dC9jb25uZWN0b3JzL2luZGV4JztcbmltcG9ydCB7IFBheW1lbnRUeXBlQWRhcHRlciB9IGZyb20gJy4uLy4uLy4uL2NoZWNrb3V0L2Nvbm5lY3RvcnMvcGF5bWVudC10eXBlL3BheW1lbnQtdHlwZS5hZGFwdGVyJztcbmltcG9ydCB7IENoZWNrb3V0UGF5bWVudEFkYXB0ZXIgfSBmcm9tICcuLi8uLi8uLi9jaGVja291dC9jb25uZWN0b3JzL3BheW1lbnQvY2hlY2tvdXQtcGF5bWVudC5hZGFwdGVyJztcbmltcG9ydCB7IHByb3ZpZGVEZWZhdWx0Q29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vY29uZmlnL2NvbmZpZy1wcm92aWRlcnMnO1xuaW1wb3J0IHtcbiAgT2NjT3JkZXJOb3JtYWxpemVyLFxuICBPY2NSZXBsZW5pc2htZW50T3JkZXJGb3JtU2VyaWFsaXplcixcbiAgT2NjUmVwbGVuaXNobWVudE9yZGVyTm9ybWFsaXplcixcbn0gZnJvbSAnLi9jb252ZXJ0ZXJzL2luZGV4JztcbmltcG9ydCB7IGRlZmF1bHRPY2NDaGVja291dENvbmZpZyB9IGZyb20gJy4vZGVmYXVsdC1vY2MtY2hlY2tvdXQtY29uZmlnJztcbmltcG9ydCB7IE9jY0NoZWNrb3V0Q29zdENlbnRlckFkYXB0ZXIgfSBmcm9tICcuL29jYy1jaGVja291dC1jb3N0LWNlbnRlci5hZGFwdGVyJztcbmltcG9ydCB7IE9jY0NoZWNrb3V0RGVsaXZlcnlBZGFwdGVyIH0gZnJvbSAnLi9vY2MtY2hlY2tvdXQtZGVsaXZlcnkuYWRhcHRlcic7XG5pbXBvcnQgeyBPY2NDaGVja291dFBheW1lbnRUeXBlQWRhcHRlciB9IGZyb20gJy4vb2NjLWNoZWNrb3V0LXBheW1lbnQtdHlwZS5hZGFwdGVyJztcbmltcG9ydCB7IE9jY0NoZWNrb3V0UGF5bWVudEFkYXB0ZXIgfSBmcm9tICcuL29jYy1jaGVja291dC1wYXltZW50LmFkYXB0ZXInO1xuaW1wb3J0IHsgT2NjQ2hlY2tvdXRSZXBsZW5pc2htZW50T3JkZXJBZGFwdGVyIH0gZnJvbSAnLi9vY2MtY2hlY2tvdXQtcmVwbGVuaXNobWVudC1vcmRlci5hZGFwdGVyJztcbmltcG9ydCB7IE9jY0NoZWNrb3V0QWRhcHRlciB9IGZyb20gJy4vb2NjLWNoZWNrb3V0LmFkYXB0ZXInO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBIdHRwQ2xpZW50TW9kdWxlXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgcHJvdmlkZURlZmF1bHRDb25maWcoZGVmYXVsdE9jY0NoZWNrb3V0Q29uZmlnKSxcbiAgICB7XG4gICAgICBwcm92aWRlOiBDaGVja291dEFkYXB0ZXIsXG4gICAgICB1c2VDbGFzczogT2NjQ2hlY2tvdXRBZGFwdGVyLFxuICAgIH0sXG4gICAgeyBwcm92aWRlOiBPUkRFUl9OT1JNQUxJWkVSLCB1c2VFeGlzdGluZzogT2NjT3JkZXJOb3JtYWxpemVyLCBtdWx0aTogdHJ1ZSB9LFxuICAgIHtcbiAgICAgIHByb3ZpZGU6IENoZWNrb3V0RGVsaXZlcnlBZGFwdGVyLFxuICAgICAgdXNlQ2xhc3M6IE9jY0NoZWNrb3V0RGVsaXZlcnlBZGFwdGVyLFxuICAgIH0sXG4gICAge1xuICAgICAgcHJvdmlkZTogQ2hlY2tvdXRQYXltZW50QWRhcHRlcixcbiAgICAgIHVzZUNsYXNzOiBPY2NDaGVja291dFBheW1lbnRBZGFwdGVyLFxuICAgIH0sXG4gICAge1xuICAgICAgcHJvdmlkZTogUGF5bWVudFR5cGVBZGFwdGVyLFxuICAgICAgdXNlQ2xhc3M6IE9jY0NoZWNrb3V0UGF5bWVudFR5cGVBZGFwdGVyLFxuICAgIH0sXG4gICAge1xuICAgICAgcHJvdmlkZTogQ2hlY2tvdXRDb3N0Q2VudGVyQWRhcHRlcixcbiAgICAgIHVzZUNsYXNzOiBPY2NDaGVja291dENvc3RDZW50ZXJBZGFwdGVyLFxuICAgIH0sXG4gICAge1xuICAgICAgcHJvdmlkZTogQ2hlY2tvdXRSZXBsZW5pc2htZW50T3JkZXJBZGFwdGVyLFxuICAgICAgdXNlQ2xhc3M6IE9jY0NoZWNrb3V0UmVwbGVuaXNobWVudE9yZGVyQWRhcHRlcixcbiAgICB9LFxuICAgIHtcbiAgICAgIHByb3ZpZGU6IFJFUExFTklTSE1FTlRfT1JERVJfTk9STUFMSVpFUixcbiAgICAgIHVzZUV4aXN0aW5nOiBPY2NSZXBsZW5pc2htZW50T3JkZXJOb3JtYWxpemVyLFxuICAgICAgbXVsdGk6IHRydWUsXG4gICAgfSxcbiAgICB7XG4gICAgICBwcm92aWRlOiBSRVBMRU5JU0hNRU5UX09SREVSX0ZPUk1fU0VSSUFMSVpFUixcbiAgICAgIHVzZUV4aXN0aW5nOiBPY2NSZXBsZW5pc2htZW50T3JkZXJGb3JtU2VyaWFsaXplcixcbiAgICAgIG11bHRpOiB0cnVlLFxuICAgIH0sXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIENoZWNrb3V0T2NjTW9kdWxlIHt9XG4iXX0=