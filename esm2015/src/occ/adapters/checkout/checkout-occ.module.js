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
let CheckoutOccModule = class CheckoutOccModule {
};
CheckoutOccModule = __decorate([
    NgModule({
        imports: [CommonModule, HttpClientModule],
        providers: [
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
        ],
    })
], CheckoutOccModule);
export { CheckoutOccModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQtb2NjLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9vY2MvYWRhcHRlcnMvY2hlY2tvdXQvY2hlY2tvdXQtb2NjLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDeEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBQ3pGLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzVELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBQ3BGLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGlFQUFpRSxDQUFDO0FBQzFHLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLCtEQUErRCxDQUFDO0FBQ3ZHLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBb0IzRSxJQUFhLGlCQUFpQixHQUE5QixNQUFhLGlCQUFpQjtDQUFHLENBQUE7QUFBcEIsaUJBQWlCO0lBbEI3QixRQUFRLENBQUM7UUFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsZ0JBQWdCLENBQUM7UUFDekMsU0FBUyxFQUFFO1lBQ1Q7Z0JBQ0UsT0FBTyxFQUFFLGVBQWU7Z0JBQ3hCLFFBQVEsRUFBRSxrQkFBa0I7YUFDN0I7WUFDRCxFQUFFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxXQUFXLEVBQUUsa0JBQWtCLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRTtZQUMzRTtnQkFDRSxPQUFPLEVBQUUsdUJBQXVCO2dCQUNoQyxRQUFRLEVBQUUsMEJBQTBCO2FBQ3JDO1lBQ0Q7Z0JBQ0UsT0FBTyxFQUFFLHNCQUFzQjtnQkFDL0IsUUFBUSxFQUFFLHlCQUF5QjthQUNwQztTQUNGO0tBQ0YsQ0FBQztHQUNXLGlCQUFpQixDQUFHO1NBQXBCLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IENoZWNrb3V0QWRhcHRlciB9IGZyb20gJy4uLy4uLy4uL2NoZWNrb3V0L2Nvbm5lY3RvcnMvY2hlY2tvdXQvY2hlY2tvdXQuYWRhcHRlcic7XG5pbXBvcnQgeyBPY2NDaGVja291dEFkYXB0ZXIgfSBmcm9tICcuL29jYy1jaGVja291dC5hZGFwdGVyJztcbmltcG9ydCB7IE9jY09yZGVyTm9ybWFsaXplciB9IGZyb20gJy4vY29udmVydGVycy9vY2Mtb3JkZXItbm9ybWFsaXplcic7XG5pbXBvcnQgeyBPUkRFUl9OT1JNQUxJWkVSIH0gZnJvbSAnLi4vLi4vLi4vY2hlY2tvdXQvY29ubmVjdG9ycy9jaGVja291dC9jb252ZXJ0ZXJzJztcbmltcG9ydCB7IENoZWNrb3V0RGVsaXZlcnlBZGFwdGVyIH0gZnJvbSAnLi4vLi4vLi4vY2hlY2tvdXQvY29ubmVjdG9ycy9kZWxpdmVyeS9jaGVja291dC1kZWxpdmVyeS5hZGFwdGVyJztcbmltcG9ydCB7IE9jY0NoZWNrb3V0RGVsaXZlcnlBZGFwdGVyIH0gZnJvbSAnLi9vY2MtY2hlY2tvdXQtZGVsaXZlcnkuYWRhcHRlcic7XG5pbXBvcnQgeyBDaGVja291dFBheW1lbnRBZGFwdGVyIH0gZnJvbSAnLi4vLi4vLi4vY2hlY2tvdXQvY29ubmVjdG9ycy9wYXltZW50L2NoZWNrb3V0LXBheW1lbnQuYWRhcHRlcic7XG5pbXBvcnQgeyBPY2NDaGVja291dFBheW1lbnRBZGFwdGVyIH0gZnJvbSAnLi9vY2MtY2hlY2tvdXQtcGF5bWVudC5hZGFwdGVyJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgSHR0cENsaWVudE1vZHVsZV0sXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IENoZWNrb3V0QWRhcHRlcixcbiAgICAgIHVzZUNsYXNzOiBPY2NDaGVja291dEFkYXB0ZXIsXG4gICAgfSxcbiAgICB7IHByb3ZpZGU6IE9SREVSX05PUk1BTElaRVIsIHVzZUV4aXN0aW5nOiBPY2NPcmRlck5vcm1hbGl6ZXIsIG11bHRpOiB0cnVlIH0sXG4gICAge1xuICAgICAgcHJvdmlkZTogQ2hlY2tvdXREZWxpdmVyeUFkYXB0ZXIsXG4gICAgICB1c2VDbGFzczogT2NjQ2hlY2tvdXREZWxpdmVyeUFkYXB0ZXIsXG4gICAgfSxcbiAgICB7XG4gICAgICBwcm92aWRlOiBDaGVja291dFBheW1lbnRBZGFwdGVyLFxuICAgICAgdXNlQ2xhc3M6IE9jY0NoZWNrb3V0UGF5bWVudEFkYXB0ZXIsXG4gICAgfSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgQ2hlY2tvdXRPY2NNb2R1bGUge31cbiJdfQ==