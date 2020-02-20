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
var CheckoutOccModule = /** @class */ (function () {
    function CheckoutOccModule() {
    }
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
    return CheckoutOccModule;
}());
export { CheckoutOccModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQtb2NjLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9vY2MvYWRhcHRlcnMvY2hlY2tvdXQvY2hlY2tvdXQtb2NjLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDeEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBQ3pGLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzVELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBQ3BGLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGlFQUFpRSxDQUFDO0FBQzFHLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLCtEQUErRCxDQUFDO0FBQ3ZHLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBb0IzRTtJQUFBO0lBQWdDLENBQUM7SUFBcEIsaUJBQWlCO1FBbEI3QixRQUFRLENBQUM7WUFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsZ0JBQWdCLENBQUM7WUFDekMsU0FBUyxFQUFFO2dCQUNUO29CQUNFLE9BQU8sRUFBRSxlQUFlO29CQUN4QixRQUFRLEVBQUUsa0JBQWtCO2lCQUM3QjtnQkFDRCxFQUFFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxXQUFXLEVBQUUsa0JBQWtCLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRTtnQkFDM0U7b0JBQ0UsT0FBTyxFQUFFLHVCQUF1QjtvQkFDaEMsUUFBUSxFQUFFLDBCQUEwQjtpQkFDckM7Z0JBQ0Q7b0JBQ0UsT0FBTyxFQUFFLHNCQUFzQjtvQkFDL0IsUUFBUSxFQUFFLHlCQUF5QjtpQkFDcEM7YUFDRjtTQUNGLENBQUM7T0FDVyxpQkFBaUIsQ0FBRztJQUFELHdCQUFDO0NBQUEsQUFBakMsSUFBaUM7U0FBcEIsaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgQ2hlY2tvdXRBZGFwdGVyIH0gZnJvbSAnLi4vLi4vLi4vY2hlY2tvdXQvY29ubmVjdG9ycy9jaGVja291dC9jaGVja291dC5hZGFwdGVyJztcbmltcG9ydCB7IE9jY0NoZWNrb3V0QWRhcHRlciB9IGZyb20gJy4vb2NjLWNoZWNrb3V0LmFkYXB0ZXInO1xuaW1wb3J0IHsgT2NjT3JkZXJOb3JtYWxpemVyIH0gZnJvbSAnLi9jb252ZXJ0ZXJzL29jYy1vcmRlci1ub3JtYWxpemVyJztcbmltcG9ydCB7IE9SREVSX05PUk1BTElaRVIgfSBmcm9tICcuLi8uLi8uLi9jaGVja291dC9jb25uZWN0b3JzL2NoZWNrb3V0L2NvbnZlcnRlcnMnO1xuaW1wb3J0IHsgQ2hlY2tvdXREZWxpdmVyeUFkYXB0ZXIgfSBmcm9tICcuLi8uLi8uLi9jaGVja291dC9jb25uZWN0b3JzL2RlbGl2ZXJ5L2NoZWNrb3V0LWRlbGl2ZXJ5LmFkYXB0ZXInO1xuaW1wb3J0IHsgT2NjQ2hlY2tvdXREZWxpdmVyeUFkYXB0ZXIgfSBmcm9tICcuL29jYy1jaGVja291dC1kZWxpdmVyeS5hZGFwdGVyJztcbmltcG9ydCB7IENoZWNrb3V0UGF5bWVudEFkYXB0ZXIgfSBmcm9tICcuLi8uLi8uLi9jaGVja291dC9jb25uZWN0b3JzL3BheW1lbnQvY2hlY2tvdXQtcGF5bWVudC5hZGFwdGVyJztcbmltcG9ydCB7IE9jY0NoZWNrb3V0UGF5bWVudEFkYXB0ZXIgfSBmcm9tICcuL29jYy1jaGVja291dC1wYXltZW50LmFkYXB0ZXInO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBIdHRwQ2xpZW50TW9kdWxlXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogQ2hlY2tvdXRBZGFwdGVyLFxuICAgICAgdXNlQ2xhc3M6IE9jY0NoZWNrb3V0QWRhcHRlcixcbiAgICB9LFxuICAgIHsgcHJvdmlkZTogT1JERVJfTk9STUFMSVpFUiwgdXNlRXhpc3Rpbmc6IE9jY09yZGVyTm9ybWFsaXplciwgbXVsdGk6IHRydWUgfSxcbiAgICB7XG4gICAgICBwcm92aWRlOiBDaGVja291dERlbGl2ZXJ5QWRhcHRlcixcbiAgICAgIHVzZUNsYXNzOiBPY2NDaGVja291dERlbGl2ZXJ5QWRhcHRlcixcbiAgICB9LFxuICAgIHtcbiAgICAgIHByb3ZpZGU6IENoZWNrb3V0UGF5bWVudEFkYXB0ZXIsXG4gICAgICB1c2VDbGFzczogT2NjQ2hlY2tvdXRQYXltZW50QWRhcHRlcixcbiAgICB9LFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBDaGVja291dE9jY01vZHVsZSB7fVxuIl19