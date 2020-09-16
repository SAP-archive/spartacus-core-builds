import { __decorate } from "tslib";
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
let CheckoutOccModule = class CheckoutOccModule {
};
CheckoutOccModule = __decorate([
    NgModule({
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
    })
], CheckoutOccModule);
export { CheckoutOccModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQtb2NjLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9vY2MvYWRhcHRlcnMvY2hlY2tvdXQvY2hlY2tvdXQtb2NjLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDeEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBQ3pGLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzVELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBQ3BGLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGlFQUFpRSxDQUFDO0FBQzFHLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLCtEQUErRCxDQUFDO0FBQ3ZHLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGdFQUFnRSxDQUFDO0FBQ3BHLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQ3BGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ3pFLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLHVFQUF1RSxDQUFDO0FBQ2xILE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBNkJsRixJQUFhLGlCQUFpQixHQUE5QixNQUFhLGlCQUFpQjtDQUFHLENBQUE7QUFBcEIsaUJBQWlCO0lBM0I3QixRQUFRLENBQUM7UUFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsZ0JBQWdCLENBQUM7UUFDekMsU0FBUyxFQUFFO1lBQ1Qsb0JBQW9CLENBQUMsd0JBQXdCLENBQUM7WUFDOUM7Z0JBQ0UsT0FBTyxFQUFFLGVBQWU7Z0JBQ3hCLFFBQVEsRUFBRSxrQkFBa0I7YUFDN0I7WUFDRCxFQUFFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxXQUFXLEVBQUUsa0JBQWtCLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRTtZQUMzRTtnQkFDRSxPQUFPLEVBQUUsdUJBQXVCO2dCQUNoQyxRQUFRLEVBQUUsMEJBQTBCO2FBQ3JDO1lBQ0Q7Z0JBQ0UsT0FBTyxFQUFFLHNCQUFzQjtnQkFDL0IsUUFBUSxFQUFFLHlCQUF5QjthQUNwQztZQUNEO2dCQUNFLE9BQU8sRUFBRSxrQkFBa0I7Z0JBQzNCLFFBQVEsRUFBRSw2QkFBNkI7YUFDeEM7WUFDRDtnQkFDRSxPQUFPLEVBQUUseUJBQXlCO2dCQUNsQyxRQUFRLEVBQUUsNEJBQTRCO2FBQ3ZDO1NBQ0Y7S0FDRixDQUFDO0dBQ1csaUJBQWlCLENBQUc7U0FBcEIsaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgQ2hlY2tvdXRBZGFwdGVyIH0gZnJvbSAnLi4vLi4vLi4vY2hlY2tvdXQvY29ubmVjdG9ycy9jaGVja291dC9jaGVja291dC5hZGFwdGVyJztcbmltcG9ydCB7IE9jY0NoZWNrb3V0QWRhcHRlciB9IGZyb20gJy4vb2NjLWNoZWNrb3V0LmFkYXB0ZXInO1xuaW1wb3J0IHsgT2NjT3JkZXJOb3JtYWxpemVyIH0gZnJvbSAnLi9jb252ZXJ0ZXJzL29jYy1vcmRlci1ub3JtYWxpemVyJztcbmltcG9ydCB7IE9SREVSX05PUk1BTElaRVIgfSBmcm9tICcuLi8uLi8uLi9jaGVja291dC9jb25uZWN0b3JzL2NoZWNrb3V0L2NvbnZlcnRlcnMnO1xuaW1wb3J0IHsgQ2hlY2tvdXREZWxpdmVyeUFkYXB0ZXIgfSBmcm9tICcuLi8uLi8uLi9jaGVja291dC9jb25uZWN0b3JzL2RlbGl2ZXJ5L2NoZWNrb3V0LWRlbGl2ZXJ5LmFkYXB0ZXInO1xuaW1wb3J0IHsgT2NjQ2hlY2tvdXREZWxpdmVyeUFkYXB0ZXIgfSBmcm9tICcuL29jYy1jaGVja291dC1kZWxpdmVyeS5hZGFwdGVyJztcbmltcG9ydCB7IENoZWNrb3V0UGF5bWVudEFkYXB0ZXIgfSBmcm9tICcuLi8uLi8uLi9jaGVja291dC9jb25uZWN0b3JzL3BheW1lbnQvY2hlY2tvdXQtcGF5bWVudC5hZGFwdGVyJztcbmltcG9ydCB7IE9jY0NoZWNrb3V0UGF5bWVudEFkYXB0ZXIgfSBmcm9tICcuL29jYy1jaGVja291dC1wYXltZW50LmFkYXB0ZXInO1xuaW1wb3J0IHsgUGF5bWVudFR5cGVBZGFwdGVyIH0gZnJvbSAnLi4vLi4vLi4vY2hlY2tvdXQvY29ubmVjdG9ycy9wYXltZW50LXR5cGUvcGF5bWVudC10eXBlLmFkYXB0ZXInO1xuaW1wb3J0IHsgT2NjQ2hlY2tvdXRQYXltZW50VHlwZUFkYXB0ZXIgfSBmcm9tICcuL29jYy1jaGVja291dC1wYXltZW50LXR5cGUuYWRhcHRlcic7XG5pbXBvcnQgeyBwcm92aWRlRGVmYXVsdENvbmZpZyB9IGZyb20gJy4uLy4uLy4uL2NvbmZpZy9jb25maWctcHJvdmlkZXJzJztcbmltcG9ydCB7IGRlZmF1bHRPY2NDaGVja291dENvbmZpZyB9IGZyb20gJy4vZGVmYXVsdC1vY2MtY2hlY2tvdXQtY29uZmlnJztcbmltcG9ydCB7IENoZWNrb3V0Q29zdENlbnRlckFkYXB0ZXIgfSBmcm9tICcuLi8uLi8uLi9jaGVja291dC9jb25uZWN0b3JzL2Nvc3QtY2VudGVyL2NoZWNrb3V0LWNvc3QtY2VudGVyLmFkYXB0ZXInO1xuaW1wb3J0IHsgT2NjQ2hlY2tvdXRDb3N0Q2VudGVyQWRhcHRlciB9IGZyb20gJy4vb2NjLWNoZWNrb3V0LWNvc3QtY2VudGVyLmFkYXB0ZXInO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBIdHRwQ2xpZW50TW9kdWxlXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgcHJvdmlkZURlZmF1bHRDb25maWcoZGVmYXVsdE9jY0NoZWNrb3V0Q29uZmlnKSxcbiAgICB7XG4gICAgICBwcm92aWRlOiBDaGVja291dEFkYXB0ZXIsXG4gICAgICB1c2VDbGFzczogT2NjQ2hlY2tvdXRBZGFwdGVyLFxuICAgIH0sXG4gICAgeyBwcm92aWRlOiBPUkRFUl9OT1JNQUxJWkVSLCB1c2VFeGlzdGluZzogT2NjT3JkZXJOb3JtYWxpemVyLCBtdWx0aTogdHJ1ZSB9LFxuICAgIHtcbiAgICAgIHByb3ZpZGU6IENoZWNrb3V0RGVsaXZlcnlBZGFwdGVyLFxuICAgICAgdXNlQ2xhc3M6IE9jY0NoZWNrb3V0RGVsaXZlcnlBZGFwdGVyLFxuICAgIH0sXG4gICAge1xuICAgICAgcHJvdmlkZTogQ2hlY2tvdXRQYXltZW50QWRhcHRlcixcbiAgICAgIHVzZUNsYXNzOiBPY2NDaGVja291dFBheW1lbnRBZGFwdGVyLFxuICAgIH0sXG4gICAge1xuICAgICAgcHJvdmlkZTogUGF5bWVudFR5cGVBZGFwdGVyLFxuICAgICAgdXNlQ2xhc3M6IE9jY0NoZWNrb3V0UGF5bWVudFR5cGVBZGFwdGVyLFxuICAgIH0sXG4gICAge1xuICAgICAgcHJvdmlkZTogQ2hlY2tvdXRDb3N0Q2VudGVyQWRhcHRlcixcbiAgICAgIHVzZUNsYXNzOiBPY2NDaGVja291dENvc3RDZW50ZXJBZGFwdGVyLFxuICAgIH0sXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIENoZWNrb3V0T2NjTW9kdWxlIHt9XG4iXX0=