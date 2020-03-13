import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AnonymousConsentTemplatesAdapter } from '../../../anonymous-consents/connectors/anonymous-consent-templates.adapter';
import { provideDefaultConfig } from '../../../config/config.module';
import { UserAddressAdapter } from '../../../user/connectors/address/user-address.adapter';
import { UserConsentAdapter } from '../../../user/connectors/consent/user-consent.adapter';
import { UserOrderAdapter } from '../../../user/connectors/order/user-order.adapter';
import { UserPaymentAdapter } from '../../../user/connectors/payment/user-payment.adapter';
import { UserAdapter } from '../../../user/connectors/user/user.adapter';
import { defaultOccUserConfig } from './default-occ-user-config';
import { OccAnonymousConsentTemplatesAdapter } from './occ-anonymous-consent-templates.adapter';
import { OccUserAddressAdapter } from './occ-user-address.adapter';
import { OccUserConsentAdapter } from './occ-user-consent.adapter';
import { OccUserOrderAdapter } from './occ-user-order.adapter';
import { OccUserPaymentAdapter } from './occ-user-payment.adapter';
import { OccUserAdapter } from './occ-user.adapter';
import { CustomerCouponAdapter } from '../../../user/connectors/customer-coupon/customer-coupon.adapter';
import { OccCustomerCouponAdapter } from '../user/occ-customer-coupon.adapter';
import { UserNotificationPreferenceAdapter } from '../../../user/connectors/notification-preference/user-notification-preference.adapter';
import { OccUserNotificationPreferenceAdapter } from './occ-user-notification-preference.adapter';
import { OccUserInterestsAdapter } from './occ-user-interests.adapter';
import { UserInterestsAdapter } from '../../../user/connectors/interests/user-interests.adapter';
import { OccUserInterestsNormalizer } from './converters/occ-user-interests-normalizer';
import { PRODUCT_INTERESTS_NORMALIZER } from '../../../user/connectors/interests/converters';
import { ORDER_RETURN_REQUEST_NORMALIZER } from '../../../user/connectors/order/converters';
import { OccReturnRequestNormalizer } from './converters/index';
let UserOccModule = class UserOccModule {
};
UserOccModule = __decorate([
    NgModule({
        imports: [CommonModule, HttpClientModule],
        providers: [
            provideDefaultConfig(defaultOccUserConfig),
            { provide: UserAdapter, useClass: OccUserAdapter },
            { provide: UserAddressAdapter, useClass: OccUserAddressAdapter },
            { provide: UserConsentAdapter, useClass: OccUserConsentAdapter },
            {
                provide: AnonymousConsentTemplatesAdapter,
                useClass: OccAnonymousConsentTemplatesAdapter,
            },
            {
                provide: UserPaymentAdapter,
                useClass: OccUserPaymentAdapter,
            },
            { provide: UserOrderAdapter, useClass: OccUserOrderAdapter },
            { provide: CustomerCouponAdapter, useClass: OccCustomerCouponAdapter },
            {
                provide: UserNotificationPreferenceAdapter,
                useClass: OccUserNotificationPreferenceAdapter,
            },
            { provide: UserInterestsAdapter, useClass: OccUserInterestsAdapter },
            {
                provide: PRODUCT_INTERESTS_NORMALIZER,
                useExisting: OccUserInterestsNormalizer,
                multi: true,
            },
            {
                provide: ORDER_RETURN_REQUEST_NORMALIZER,
                useExisting: OccReturnRequestNormalizer,
                multi: true,
            },
        ],
    })
], UserOccModule);
export { UserOccModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1vY2MubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL29jYy9hZGFwdGVycy91c2VyL3VzZXItb2NjLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0sNEVBQTRFLENBQUM7QUFDOUgsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDckUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sdURBQXVELENBQUM7QUFDM0YsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sdURBQXVELENBQUM7QUFDM0YsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFDckYsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sdURBQXVELENBQUM7QUFDM0YsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxtQ0FBbUMsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQ2hHLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ25FLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ25FLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQy9ELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ25FLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNwRCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxrRUFBa0UsQ0FBQztBQUN6RyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUMvRSxPQUFPLEVBQUUsaUNBQWlDLEVBQUUsTUFBTSx1RkFBdUYsQ0FBQztBQUMxSSxPQUFPLEVBQUUsb0NBQW9DLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUNsRyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUN2RSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwyREFBMkQsQ0FBQztBQUNqRyxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUN4RixPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUM3RixPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUM1RixPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQW9DaEUsSUFBYSxhQUFhLEdBQTFCLE1BQWEsYUFBYTtDQUFHLENBQUE7QUFBaEIsYUFBYTtJQWxDekIsUUFBUSxDQUFDO1FBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLGdCQUFnQixDQUFDO1FBQ3pDLFNBQVMsRUFBRTtZQUNULG9CQUFvQixDQUFDLG9CQUFvQixDQUFDO1lBQzFDLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxRQUFRLEVBQUUsY0FBYyxFQUFFO1lBQ2xELEVBQUUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLFFBQVEsRUFBRSxxQkFBcUIsRUFBRTtZQUNoRSxFQUFFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxRQUFRLEVBQUUscUJBQXFCLEVBQUU7WUFDaEU7Z0JBQ0UsT0FBTyxFQUFFLGdDQUFnQztnQkFDekMsUUFBUSxFQUFFLG1DQUFtQzthQUM5QztZQUNEO2dCQUNFLE9BQU8sRUFBRSxrQkFBa0I7Z0JBQzNCLFFBQVEsRUFBRSxxQkFBcUI7YUFDaEM7WUFDRCxFQUFFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxRQUFRLEVBQUUsbUJBQW1CLEVBQUU7WUFDNUQsRUFBRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsUUFBUSxFQUFFLHdCQUF3QixFQUFFO1lBQ3RFO2dCQUNFLE9BQU8sRUFBRSxpQ0FBaUM7Z0JBQzFDLFFBQVEsRUFBRSxvQ0FBb0M7YUFDL0M7WUFDRCxFQUFFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxRQUFRLEVBQUUsdUJBQXVCLEVBQUU7WUFDcEU7Z0JBQ0UsT0FBTyxFQUFFLDRCQUE0QjtnQkFDckMsV0FBVyxFQUFFLDBCQUEwQjtnQkFDdkMsS0FBSyxFQUFFLElBQUk7YUFDWjtZQUNEO2dCQUNFLE9BQU8sRUFBRSwrQkFBK0I7Z0JBQ3hDLFdBQVcsRUFBRSwwQkFBMEI7Z0JBQ3ZDLEtBQUssRUFBRSxJQUFJO2FBQ1o7U0FDRjtLQUNGLENBQUM7R0FDVyxhQUFhLENBQUc7U0FBaEIsYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFub255bW91c0NvbnNlbnRUZW1wbGF0ZXNBZGFwdGVyIH0gZnJvbSAnLi4vLi4vLi4vYW5vbnltb3VzLWNvbnNlbnRzL2Nvbm5lY3RvcnMvYW5vbnltb3VzLWNvbnNlbnQtdGVtcGxhdGVzLmFkYXB0ZXInO1xuaW1wb3J0IHsgcHJvdmlkZURlZmF1bHRDb25maWcgfSBmcm9tICcuLi8uLi8uLi9jb25maWcvY29uZmlnLm1vZHVsZSc7XG5pbXBvcnQgeyBVc2VyQWRkcmVzc0FkYXB0ZXIgfSBmcm9tICcuLi8uLi8uLi91c2VyL2Nvbm5lY3RvcnMvYWRkcmVzcy91c2VyLWFkZHJlc3MuYWRhcHRlcic7XG5pbXBvcnQgeyBVc2VyQ29uc2VudEFkYXB0ZXIgfSBmcm9tICcuLi8uLi8uLi91c2VyL2Nvbm5lY3RvcnMvY29uc2VudC91c2VyLWNvbnNlbnQuYWRhcHRlcic7XG5pbXBvcnQgeyBVc2VyT3JkZXJBZGFwdGVyIH0gZnJvbSAnLi4vLi4vLi4vdXNlci9jb25uZWN0b3JzL29yZGVyL3VzZXItb3JkZXIuYWRhcHRlcic7XG5pbXBvcnQgeyBVc2VyUGF5bWVudEFkYXB0ZXIgfSBmcm9tICcuLi8uLi8uLi91c2VyL2Nvbm5lY3RvcnMvcGF5bWVudC91c2VyLXBheW1lbnQuYWRhcHRlcic7XG5pbXBvcnQgeyBVc2VyQWRhcHRlciB9IGZyb20gJy4uLy4uLy4uL3VzZXIvY29ubmVjdG9ycy91c2VyL3VzZXIuYWRhcHRlcic7XG5pbXBvcnQgeyBkZWZhdWx0T2NjVXNlckNvbmZpZyB9IGZyb20gJy4vZGVmYXVsdC1vY2MtdXNlci1jb25maWcnO1xuaW1wb3J0IHsgT2NjQW5vbnltb3VzQ29uc2VudFRlbXBsYXRlc0FkYXB0ZXIgfSBmcm9tICcuL29jYy1hbm9ueW1vdXMtY29uc2VudC10ZW1wbGF0ZXMuYWRhcHRlcic7XG5pbXBvcnQgeyBPY2NVc2VyQWRkcmVzc0FkYXB0ZXIgfSBmcm9tICcuL29jYy11c2VyLWFkZHJlc3MuYWRhcHRlcic7XG5pbXBvcnQgeyBPY2NVc2VyQ29uc2VudEFkYXB0ZXIgfSBmcm9tICcuL29jYy11c2VyLWNvbnNlbnQuYWRhcHRlcic7XG5pbXBvcnQgeyBPY2NVc2VyT3JkZXJBZGFwdGVyIH0gZnJvbSAnLi9vY2MtdXNlci1vcmRlci5hZGFwdGVyJztcbmltcG9ydCB7IE9jY1VzZXJQYXltZW50QWRhcHRlciB9IGZyb20gJy4vb2NjLXVzZXItcGF5bWVudC5hZGFwdGVyJztcbmltcG9ydCB7IE9jY1VzZXJBZGFwdGVyIH0gZnJvbSAnLi9vY2MtdXNlci5hZGFwdGVyJztcbmltcG9ydCB7IEN1c3RvbWVyQ291cG9uQWRhcHRlciB9IGZyb20gJy4uLy4uLy4uL3VzZXIvY29ubmVjdG9ycy9jdXN0b21lci1jb3Vwb24vY3VzdG9tZXItY291cG9uLmFkYXB0ZXInO1xuaW1wb3J0IHsgT2NjQ3VzdG9tZXJDb3Vwb25BZGFwdGVyIH0gZnJvbSAnLi4vdXNlci9vY2MtY3VzdG9tZXItY291cG9uLmFkYXB0ZXInO1xuaW1wb3J0IHsgVXNlck5vdGlmaWNhdGlvblByZWZlcmVuY2VBZGFwdGVyIH0gZnJvbSAnLi4vLi4vLi4vdXNlci9jb25uZWN0b3JzL25vdGlmaWNhdGlvbi1wcmVmZXJlbmNlL3VzZXItbm90aWZpY2F0aW9uLXByZWZlcmVuY2UuYWRhcHRlcic7XG5pbXBvcnQgeyBPY2NVc2VyTm90aWZpY2F0aW9uUHJlZmVyZW5jZUFkYXB0ZXIgfSBmcm9tICcuL29jYy11c2VyLW5vdGlmaWNhdGlvbi1wcmVmZXJlbmNlLmFkYXB0ZXInO1xuaW1wb3J0IHsgT2NjVXNlckludGVyZXN0c0FkYXB0ZXIgfSBmcm9tICcuL29jYy11c2VyLWludGVyZXN0cy5hZGFwdGVyJztcbmltcG9ydCB7IFVzZXJJbnRlcmVzdHNBZGFwdGVyIH0gZnJvbSAnLi4vLi4vLi4vdXNlci9jb25uZWN0b3JzL2ludGVyZXN0cy91c2VyLWludGVyZXN0cy5hZGFwdGVyJztcbmltcG9ydCB7IE9jY1VzZXJJbnRlcmVzdHNOb3JtYWxpemVyIH0gZnJvbSAnLi9jb252ZXJ0ZXJzL29jYy11c2VyLWludGVyZXN0cy1ub3JtYWxpemVyJztcbmltcG9ydCB7IFBST0RVQ1RfSU5URVJFU1RTX05PUk1BTElaRVIgfSBmcm9tICcuLi8uLi8uLi91c2VyL2Nvbm5lY3RvcnMvaW50ZXJlc3RzL2NvbnZlcnRlcnMnO1xuaW1wb3J0IHsgT1JERVJfUkVUVVJOX1JFUVVFU1RfTk9STUFMSVpFUiB9IGZyb20gJy4uLy4uLy4uL3VzZXIvY29ubmVjdG9ycy9vcmRlci9jb252ZXJ0ZXJzJztcbmltcG9ydCB7IE9jY1JldHVyblJlcXVlc3ROb3JtYWxpemVyIH0gZnJvbSAnLi9jb252ZXJ0ZXJzL2luZGV4JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgSHR0cENsaWVudE1vZHVsZV0sXG4gIHByb3ZpZGVyczogW1xuICAgIHByb3ZpZGVEZWZhdWx0Q29uZmlnKGRlZmF1bHRPY2NVc2VyQ29uZmlnKSxcbiAgICB7IHByb3ZpZGU6IFVzZXJBZGFwdGVyLCB1c2VDbGFzczogT2NjVXNlckFkYXB0ZXIgfSxcbiAgICB7IHByb3ZpZGU6IFVzZXJBZGRyZXNzQWRhcHRlciwgdXNlQ2xhc3M6IE9jY1VzZXJBZGRyZXNzQWRhcHRlciB9LFxuICAgIHsgcHJvdmlkZTogVXNlckNvbnNlbnRBZGFwdGVyLCB1c2VDbGFzczogT2NjVXNlckNvbnNlbnRBZGFwdGVyIH0sXG4gICAge1xuICAgICAgcHJvdmlkZTogQW5vbnltb3VzQ29uc2VudFRlbXBsYXRlc0FkYXB0ZXIsXG4gICAgICB1c2VDbGFzczogT2NjQW5vbnltb3VzQ29uc2VudFRlbXBsYXRlc0FkYXB0ZXIsXG4gICAgfSxcbiAgICB7XG4gICAgICBwcm92aWRlOiBVc2VyUGF5bWVudEFkYXB0ZXIsXG4gICAgICB1c2VDbGFzczogT2NjVXNlclBheW1lbnRBZGFwdGVyLFxuICAgIH0sXG4gICAgeyBwcm92aWRlOiBVc2VyT3JkZXJBZGFwdGVyLCB1c2VDbGFzczogT2NjVXNlck9yZGVyQWRhcHRlciB9LFxuICAgIHsgcHJvdmlkZTogQ3VzdG9tZXJDb3Vwb25BZGFwdGVyLCB1c2VDbGFzczogT2NjQ3VzdG9tZXJDb3Vwb25BZGFwdGVyIH0sXG4gICAge1xuICAgICAgcHJvdmlkZTogVXNlck5vdGlmaWNhdGlvblByZWZlcmVuY2VBZGFwdGVyLFxuICAgICAgdXNlQ2xhc3M6IE9jY1VzZXJOb3RpZmljYXRpb25QcmVmZXJlbmNlQWRhcHRlcixcbiAgICB9LFxuICAgIHsgcHJvdmlkZTogVXNlckludGVyZXN0c0FkYXB0ZXIsIHVzZUNsYXNzOiBPY2NVc2VySW50ZXJlc3RzQWRhcHRlciB9LFxuICAgIHtcbiAgICAgIHByb3ZpZGU6IFBST0RVQ1RfSU5URVJFU1RTX05PUk1BTElaRVIsXG4gICAgICB1c2VFeGlzdGluZzogT2NjVXNlckludGVyZXN0c05vcm1hbGl6ZXIsXG4gICAgICBtdWx0aTogdHJ1ZSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHByb3ZpZGU6IE9SREVSX1JFVFVSTl9SRVFVRVNUX05PUk1BTElaRVIsXG4gICAgICB1c2VFeGlzdGluZzogT2NjUmV0dXJuUmVxdWVzdE5vcm1hbGl6ZXIsXG4gICAgICBtdWx0aTogdHJ1ZSxcbiAgICB9LFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBVc2VyT2NjTW9kdWxlIHt9XG4iXX0=