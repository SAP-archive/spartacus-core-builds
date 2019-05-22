/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { OrderAdapter } from '../../../user/connectors/order/order.adapter';
import { OccOrderAdapter } from './occ-order.adapter';
import { ORDER_NORMALIZER } from '../../../user/connectors/order/converters';
import { OccOrderNormalizer } from './converters/occ-order-normalizer';
import { UserDetailsAdapter } from '../../../user/connectors/details/user-details.adapter';
import { OccUserDetailsAdapter } from './occ-user-details.adapter';
import { UserAddressAdapter } from '../../../user/connectors/address/user-address.adapter';
import { OccUserAddressAdapter } from './occ-user-address.adapter';
import { UserAccountAdapter } from '../../../user/connectors/account/user-account.adapter';
import { OccUserAccountAdapter } from './occ-user-account.adapter';
import { UserPaymentAdapter } from '../../../user/connectors/payment/user-payment.adapter';
import { OccUserPaymentAdapter } from './occ-user-payment.adapter';
export class UserOccModule {
}
UserOccModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, HttpClientModule],
                providers: [
                    { provide: UserDetailsAdapter, useClass: OccUserDetailsAdapter },
                    { provide: UserAddressAdapter, useClass: OccUserAddressAdapter },
                    { provide: UserAccountAdapter, useClass: OccUserAccountAdapter },
                    {
                        provide: UserPaymentAdapter,
                        useClass: OccUserPaymentAdapter,
                    },
                    { provide: OrderAdapter, useClass: OccOrderAdapter },
                    { provide: ORDER_NORMALIZER, useClass: OccOrderNormalizer, multi: true },
                ],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1vY2MubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL29jYy9hZGFwdGVycy91c2VyL3VzZXItb2NjLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFeEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBQzVFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUM3RSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUN2RSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx1REFBdUQsQ0FBQztBQUMzRixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNuRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx1REFBdUQsQ0FBQztBQUMzRixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNuRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx1REFBdUQsQ0FBQztBQUMzRixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNuRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx1REFBdUQsQ0FBQztBQUMzRixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQWdCbkUsTUFBTSxPQUFPLGFBQWE7OztZQWR6QixRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLGdCQUFnQixDQUFDO2dCQUN6QyxTQUFTLEVBQUU7b0JBQ1QsRUFBRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsUUFBUSxFQUFFLHFCQUFxQixFQUFFO29CQUNoRSxFQUFFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxRQUFRLEVBQUUscUJBQXFCLEVBQUU7b0JBQ2hFLEVBQUUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLFFBQVEsRUFBRSxxQkFBcUIsRUFBRTtvQkFDaEU7d0JBQ0UsT0FBTyxFQUFFLGtCQUFrQjt3QkFDM0IsUUFBUSxFQUFFLHFCQUFxQjtxQkFDaEM7b0JBQ0QsRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFFLFFBQVEsRUFBRSxlQUFlLEVBQUU7b0JBQ3BELEVBQUUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLFFBQVEsRUFBRSxrQkFBa0IsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFO2lCQUN6RTthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuXG5pbXBvcnQgeyBPcmRlckFkYXB0ZXIgfSBmcm9tICcuLi8uLi8uLi91c2VyL2Nvbm5lY3RvcnMvb3JkZXIvb3JkZXIuYWRhcHRlcic7XG5pbXBvcnQgeyBPY2NPcmRlckFkYXB0ZXIgfSBmcm9tICcuL29jYy1vcmRlci5hZGFwdGVyJztcbmltcG9ydCB7IE9SREVSX05PUk1BTElaRVIgfSBmcm9tICcuLi8uLi8uLi91c2VyL2Nvbm5lY3RvcnMvb3JkZXIvY29udmVydGVycyc7XG5pbXBvcnQgeyBPY2NPcmRlck5vcm1hbGl6ZXIgfSBmcm9tICcuL2NvbnZlcnRlcnMvb2NjLW9yZGVyLW5vcm1hbGl6ZXInO1xuaW1wb3J0IHsgVXNlckRldGFpbHNBZGFwdGVyIH0gZnJvbSAnLi4vLi4vLi4vdXNlci9jb25uZWN0b3JzL2RldGFpbHMvdXNlci1kZXRhaWxzLmFkYXB0ZXInO1xuaW1wb3J0IHsgT2NjVXNlckRldGFpbHNBZGFwdGVyIH0gZnJvbSAnLi9vY2MtdXNlci1kZXRhaWxzLmFkYXB0ZXInO1xuaW1wb3J0IHsgVXNlckFkZHJlc3NBZGFwdGVyIH0gZnJvbSAnLi4vLi4vLi4vdXNlci9jb25uZWN0b3JzL2FkZHJlc3MvdXNlci1hZGRyZXNzLmFkYXB0ZXInO1xuaW1wb3J0IHsgT2NjVXNlckFkZHJlc3NBZGFwdGVyIH0gZnJvbSAnLi9vY2MtdXNlci1hZGRyZXNzLmFkYXB0ZXInO1xuaW1wb3J0IHsgVXNlckFjY291bnRBZGFwdGVyIH0gZnJvbSAnLi4vLi4vLi4vdXNlci9jb25uZWN0b3JzL2FjY291bnQvdXNlci1hY2NvdW50LmFkYXB0ZXInO1xuaW1wb3J0IHsgT2NjVXNlckFjY291bnRBZGFwdGVyIH0gZnJvbSAnLi9vY2MtdXNlci1hY2NvdW50LmFkYXB0ZXInO1xuaW1wb3J0IHsgVXNlclBheW1lbnRBZGFwdGVyIH0gZnJvbSAnLi4vLi4vLi4vdXNlci9jb25uZWN0b3JzL3BheW1lbnQvdXNlci1wYXltZW50LmFkYXB0ZXInO1xuaW1wb3J0IHsgT2NjVXNlclBheW1lbnRBZGFwdGVyIH0gZnJvbSAnLi9vY2MtdXNlci1wYXltZW50LmFkYXB0ZXInO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBIdHRwQ2xpZW50TW9kdWxlXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgeyBwcm92aWRlOiBVc2VyRGV0YWlsc0FkYXB0ZXIsIHVzZUNsYXNzOiBPY2NVc2VyRGV0YWlsc0FkYXB0ZXIgfSxcbiAgICB7IHByb3ZpZGU6IFVzZXJBZGRyZXNzQWRhcHRlciwgdXNlQ2xhc3M6IE9jY1VzZXJBZGRyZXNzQWRhcHRlciB9LFxuICAgIHsgcHJvdmlkZTogVXNlckFjY291bnRBZGFwdGVyLCB1c2VDbGFzczogT2NjVXNlckFjY291bnRBZGFwdGVyIH0sXG4gICAge1xuICAgICAgcHJvdmlkZTogVXNlclBheW1lbnRBZGFwdGVyLFxuICAgICAgdXNlQ2xhc3M6IE9jY1VzZXJQYXltZW50QWRhcHRlcixcbiAgICB9LFxuICAgIHsgcHJvdmlkZTogT3JkZXJBZGFwdGVyLCB1c2VDbGFzczogT2NjT3JkZXJBZGFwdGVyIH0sXG4gICAgeyBwcm92aWRlOiBPUkRFUl9OT1JNQUxJWkVSLCB1c2VDbGFzczogT2NjT3JkZXJOb3JtYWxpemVyLCBtdWx0aTogdHJ1ZSB9LFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBVc2VyT2NjTW9kdWxlIHt9XG4iXX0=