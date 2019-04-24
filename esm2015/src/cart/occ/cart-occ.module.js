/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { OccModule } from '../../occ/occ.module';
import { CartAdapter } from '../connectors/cart/cart.adapter';
import { OccCartAdapter } from './occ-cart.adapter';
import { CartDeliveryAdapter } from '../connectors/delivery/cart-delivery.adapter';
import { OccCartDeliveryAdapter } from './occ-cart-delivery.adapter';
import { CartEntryAdapter } from '../connectors/entry/cart-entry.adapter';
import { OccCartEntryAdapter } from './occ-cart-entry.adapter';
import { CartPaymentAdapter } from '../connectors/payment/cart-payment.adapter';
import { OccCartPaymentAdapter } from './occ-cart-payment.adapter';
export class CartOccModule {
}
CartOccModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, HttpClientModule, OccModule],
                providers: [
                    {
                        provide: CartAdapter,
                        useClass: OccCartAdapter,
                    },
                    {
                        provide: CartDeliveryAdapter,
                        useClass: OccCartDeliveryAdapter,
                    },
                    {
                        provide: CartEntryAdapter,
                        useClass: OccCartEntryAdapter,
                    },
                    {
                        provide: CartPaymentAdapter,
                        useClass: OccCartPaymentAdapter,
                    },
                ],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1vY2MubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2NhcnQvb2NjL2NhcnQtb2NjLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDeEQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUM5RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDcEQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDbkYsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDckUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDMUUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDL0QsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDaEYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUF1Qm5FLE1BQU0sT0FBTyxhQUFhOzs7WUFyQnpCLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsZ0JBQWdCLEVBQUUsU0FBUyxDQUFDO2dCQUNwRCxTQUFTLEVBQUU7b0JBQ1Q7d0JBQ0UsT0FBTyxFQUFFLFdBQVc7d0JBQ3BCLFFBQVEsRUFBRSxjQUFjO3FCQUN6QjtvQkFDRDt3QkFDRSxPQUFPLEVBQUUsbUJBQW1CO3dCQUM1QixRQUFRLEVBQUUsc0JBQXNCO3FCQUNqQztvQkFDRDt3QkFDRSxPQUFPLEVBQUUsZ0JBQWdCO3dCQUN6QixRQUFRLEVBQUUsbUJBQW1CO3FCQUM5QjtvQkFDRDt3QkFDRSxPQUFPLEVBQUUsa0JBQWtCO3dCQUMzQixRQUFRLEVBQUUscUJBQXFCO3FCQUNoQztpQkFDRjthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgT2NjTW9kdWxlIH0gZnJvbSAnLi4vLi4vb2NjL29jYy5tb2R1bGUnO1xuaW1wb3J0IHsgQ2FydEFkYXB0ZXIgfSBmcm9tICcuLi9jb25uZWN0b3JzL2NhcnQvY2FydC5hZGFwdGVyJztcbmltcG9ydCB7IE9jY0NhcnRBZGFwdGVyIH0gZnJvbSAnLi9vY2MtY2FydC5hZGFwdGVyJztcbmltcG9ydCB7IENhcnREZWxpdmVyeUFkYXB0ZXIgfSBmcm9tICcuLi9jb25uZWN0b3JzL2RlbGl2ZXJ5L2NhcnQtZGVsaXZlcnkuYWRhcHRlcic7XG5pbXBvcnQgeyBPY2NDYXJ0RGVsaXZlcnlBZGFwdGVyIH0gZnJvbSAnLi9vY2MtY2FydC1kZWxpdmVyeS5hZGFwdGVyJztcbmltcG9ydCB7IENhcnRFbnRyeUFkYXB0ZXIgfSBmcm9tICcuLi9jb25uZWN0b3JzL2VudHJ5L2NhcnQtZW50cnkuYWRhcHRlcic7XG5pbXBvcnQgeyBPY2NDYXJ0RW50cnlBZGFwdGVyIH0gZnJvbSAnLi9vY2MtY2FydC1lbnRyeS5hZGFwdGVyJztcbmltcG9ydCB7IENhcnRQYXltZW50QWRhcHRlciB9IGZyb20gJy4uL2Nvbm5lY3RvcnMvcGF5bWVudC9jYXJ0LXBheW1lbnQuYWRhcHRlcic7XG5pbXBvcnQgeyBPY2NDYXJ0UGF5bWVudEFkYXB0ZXIgfSBmcm9tICcuL29jYy1jYXJ0LXBheW1lbnQuYWRhcHRlcic7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIEh0dHBDbGllbnRNb2R1bGUsIE9jY01vZHVsZV0sXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IENhcnRBZGFwdGVyLFxuICAgICAgdXNlQ2xhc3M6IE9jY0NhcnRBZGFwdGVyLFxuICAgIH0sXG4gICAge1xuICAgICAgcHJvdmlkZTogQ2FydERlbGl2ZXJ5QWRhcHRlcixcbiAgICAgIHVzZUNsYXNzOiBPY2NDYXJ0RGVsaXZlcnlBZGFwdGVyLFxuICAgIH0sXG4gICAge1xuICAgICAgcHJvdmlkZTogQ2FydEVudHJ5QWRhcHRlcixcbiAgICAgIHVzZUNsYXNzOiBPY2NDYXJ0RW50cnlBZGFwdGVyLFxuICAgIH0sXG4gICAge1xuICAgICAgcHJvdmlkZTogQ2FydFBheW1lbnRBZGFwdGVyLFxuICAgICAgdXNlQ2xhc3M6IE9jY0NhcnRQYXltZW50QWRhcHRlcixcbiAgICB9LFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBDYXJ0T2NjTW9kdWxlIHt9XG4iXX0=