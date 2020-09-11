import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AnonymousConsentTemplatesAdapter } from '../../../anonymous-consents/connectors/anonymous-consent-templates.adapter';
import { ANONYMOUS_CONSENT_NORMALIZER } from '../../../anonymous-consents/connectors/converters';
import { provideDefaultConfig } from '../../../config/config.module';
import { UserAddressAdapter } from '../../../user/connectors/address/user-address.adapter';
import { UserConsentAdapter } from '../../../user/connectors/consent/user-consent.adapter';
import { UserCostCenterAdapter } from '../../../user/connectors/cost-center/user-cost-center.adapter';
import { CustomerCouponAdapter } from '../../../user/connectors/customer-coupon/customer-coupon.adapter';
import { PRODUCT_INTERESTS_NORMALIZER } from '../../../user/connectors/interests/converters';
import { UserInterestsAdapter } from '../../../user/connectors/interests/user-interests.adapter';
import { UserNotificationPreferenceAdapter } from '../../../user/connectors/notification-preference/user-notification-preference.adapter';
import { ORDER_RETURN_REQUEST_NORMALIZER } from '../../../user/connectors/order/converters';
import { UserOrderAdapter } from '../../../user/connectors/order/user-order.adapter';
import { UserPaymentAdapter } from '../../../user/connectors/payment/user-payment.adapter';
import { UserAdapter } from '../../../user/connectors/user/user.adapter';
import { OccCustomerCouponAdapter } from '../user/occ-customer-coupon.adapter';
import { AnonymousConsentNormalizer } from './converters/anonymous-consents-normalizer';
import { OccReturnRequestNormalizer } from './converters/occ-return-request-normalizer';
import { OccUserInterestsNormalizer } from './converters/occ-user-interests-normalizer';
import { defaultOccUserConfig } from './default-occ-user-config';
import { OccAnonymousConsentTemplatesAdapter } from './occ-anonymous-consent-templates.adapter';
import { OccUserAddressAdapter } from './occ-user-address.adapter';
import { OccUserConsentAdapter } from './occ-user-consent.adapter';
import { OccUserCostCenterAdapter } from './occ-user-cost-centers.adapter';
import { OccUserInterestsAdapter } from './occ-user-interests.adapter';
import { OccUserNotificationPreferenceAdapter } from './occ-user-notification-preference.adapter';
import { OccUserOrderAdapter } from './occ-user-order.adapter';
import { OccUserPaymentAdapter } from './occ-user-payment.adapter';
import { OccUserAdapter } from './occ-user.adapter';
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
            { provide: UserCostCenterAdapter, useClass: OccUserCostCenterAdapter },
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
            {
                provide: ANONYMOUS_CONSENT_NORMALIZER,
                useExisting: AnonymousConsentNormalizer,
                multi: true,
            },
        ],
    })
], UserOccModule);
export { UserOccModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1vY2MubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL29jYy9hZGFwdGVycy91c2VyL3VzZXItb2NjLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0sNEVBQTRFLENBQUM7QUFDOUgsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFDakcsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDckUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sdURBQXVELENBQUM7QUFDM0YsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sdURBQXVELENBQUM7QUFDM0YsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sK0RBQStELENBQUM7QUFDdEcsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sa0VBQWtFLENBQUM7QUFDekcsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDN0YsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMkRBQTJELENBQUM7QUFDakcsT0FBTyxFQUFFLGlDQUFpQyxFQUFFLE1BQU0sdUZBQXVGLENBQUM7QUFDMUksT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDNUYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFDckYsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sdURBQXVELENBQUM7QUFDM0YsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQy9FLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQ3hGLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQ3hGLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQ3hGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxtQ0FBbUMsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQ2hHLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ25FLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ25FLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxvQ0FBb0MsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQ2xHLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQy9ELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ25FLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQTBDcEQsSUFBYSxhQUFhLEdBQTFCLE1BQWEsYUFBYTtDQUFHLENBQUE7QUFBaEIsYUFBYTtJQXhDekIsUUFBUSxDQUFDO1FBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLGdCQUFnQixDQUFDO1FBQ3pDLFNBQVMsRUFBRTtZQUNULG9CQUFvQixDQUFDLG9CQUFvQixDQUFDO1lBQzFDLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxRQUFRLEVBQUUsY0FBYyxFQUFFO1lBQ2xELEVBQUUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLFFBQVEsRUFBRSxxQkFBcUIsRUFBRTtZQUNoRSxFQUFFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxRQUFRLEVBQUUscUJBQXFCLEVBQUU7WUFDaEU7Z0JBQ0UsT0FBTyxFQUFFLGdDQUFnQztnQkFDekMsUUFBUSxFQUFFLG1DQUFtQzthQUM5QztZQUNEO2dCQUNFLE9BQU8sRUFBRSxrQkFBa0I7Z0JBQzNCLFFBQVEsRUFBRSxxQkFBcUI7YUFDaEM7WUFDRCxFQUFFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxRQUFRLEVBQUUsbUJBQW1CLEVBQUU7WUFDNUQsRUFBRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsUUFBUSxFQUFFLHdCQUF3QixFQUFFO1lBQ3RFO2dCQUNFLE9BQU8sRUFBRSxpQ0FBaUM7Z0JBQzFDLFFBQVEsRUFBRSxvQ0FBb0M7YUFDL0M7WUFDRCxFQUFFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxRQUFRLEVBQUUsdUJBQXVCLEVBQUU7WUFDcEUsRUFBRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsUUFBUSxFQUFFLHdCQUF3QixFQUFFO1lBQ3RFO2dCQUNFLE9BQU8sRUFBRSw0QkFBNEI7Z0JBQ3JDLFdBQVcsRUFBRSwwQkFBMEI7Z0JBQ3ZDLEtBQUssRUFBRSxJQUFJO2FBQ1o7WUFDRDtnQkFDRSxPQUFPLEVBQUUsK0JBQStCO2dCQUN4QyxXQUFXLEVBQUUsMEJBQTBCO2dCQUN2QyxLQUFLLEVBQUUsSUFBSTthQUNaO1lBQ0Q7Z0JBQ0UsT0FBTyxFQUFFLDRCQUE0QjtnQkFDckMsV0FBVyxFQUFFLDBCQUEwQjtnQkFDdkMsS0FBSyxFQUFFLElBQUk7YUFDWjtTQUNGO0tBQ0YsQ0FBQztHQUNXLGFBQWEsQ0FBRztTQUFoQixhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQW5vbnltb3VzQ29uc2VudFRlbXBsYXRlc0FkYXB0ZXIgfSBmcm9tICcuLi8uLi8uLi9hbm9ueW1vdXMtY29uc2VudHMvY29ubmVjdG9ycy9hbm9ueW1vdXMtY29uc2VudC10ZW1wbGF0ZXMuYWRhcHRlcic7XG5pbXBvcnQgeyBBTk9OWU1PVVNfQ09OU0VOVF9OT1JNQUxJWkVSIH0gZnJvbSAnLi4vLi4vLi4vYW5vbnltb3VzLWNvbnNlbnRzL2Nvbm5lY3RvcnMvY29udmVydGVycyc7XG5pbXBvcnQgeyBwcm92aWRlRGVmYXVsdENvbmZpZyB9IGZyb20gJy4uLy4uLy4uL2NvbmZpZy9jb25maWcubW9kdWxlJztcbmltcG9ydCB7IFVzZXJBZGRyZXNzQWRhcHRlciB9IGZyb20gJy4uLy4uLy4uL3VzZXIvY29ubmVjdG9ycy9hZGRyZXNzL3VzZXItYWRkcmVzcy5hZGFwdGVyJztcbmltcG9ydCB7IFVzZXJDb25zZW50QWRhcHRlciB9IGZyb20gJy4uLy4uLy4uL3VzZXIvY29ubmVjdG9ycy9jb25zZW50L3VzZXItY29uc2VudC5hZGFwdGVyJztcbmltcG9ydCB7IFVzZXJDb3N0Q2VudGVyQWRhcHRlciB9IGZyb20gJy4uLy4uLy4uL3VzZXIvY29ubmVjdG9ycy9jb3N0LWNlbnRlci91c2VyLWNvc3QtY2VudGVyLmFkYXB0ZXInO1xuaW1wb3J0IHsgQ3VzdG9tZXJDb3Vwb25BZGFwdGVyIH0gZnJvbSAnLi4vLi4vLi4vdXNlci9jb25uZWN0b3JzL2N1c3RvbWVyLWNvdXBvbi9jdXN0b21lci1jb3Vwb24uYWRhcHRlcic7XG5pbXBvcnQgeyBQUk9EVUNUX0lOVEVSRVNUU19OT1JNQUxJWkVSIH0gZnJvbSAnLi4vLi4vLi4vdXNlci9jb25uZWN0b3JzL2ludGVyZXN0cy9jb252ZXJ0ZXJzJztcbmltcG9ydCB7IFVzZXJJbnRlcmVzdHNBZGFwdGVyIH0gZnJvbSAnLi4vLi4vLi4vdXNlci9jb25uZWN0b3JzL2ludGVyZXN0cy91c2VyLWludGVyZXN0cy5hZGFwdGVyJztcbmltcG9ydCB7IFVzZXJOb3RpZmljYXRpb25QcmVmZXJlbmNlQWRhcHRlciB9IGZyb20gJy4uLy4uLy4uL3VzZXIvY29ubmVjdG9ycy9ub3RpZmljYXRpb24tcHJlZmVyZW5jZS91c2VyLW5vdGlmaWNhdGlvbi1wcmVmZXJlbmNlLmFkYXB0ZXInO1xuaW1wb3J0IHsgT1JERVJfUkVUVVJOX1JFUVVFU1RfTk9STUFMSVpFUiB9IGZyb20gJy4uLy4uLy4uL3VzZXIvY29ubmVjdG9ycy9vcmRlci9jb252ZXJ0ZXJzJztcbmltcG9ydCB7IFVzZXJPcmRlckFkYXB0ZXIgfSBmcm9tICcuLi8uLi8uLi91c2VyL2Nvbm5lY3RvcnMvb3JkZXIvdXNlci1vcmRlci5hZGFwdGVyJztcbmltcG9ydCB7IFVzZXJQYXltZW50QWRhcHRlciB9IGZyb20gJy4uLy4uLy4uL3VzZXIvY29ubmVjdG9ycy9wYXltZW50L3VzZXItcGF5bWVudC5hZGFwdGVyJztcbmltcG9ydCB7IFVzZXJBZGFwdGVyIH0gZnJvbSAnLi4vLi4vLi4vdXNlci9jb25uZWN0b3JzL3VzZXIvdXNlci5hZGFwdGVyJztcbmltcG9ydCB7IE9jY0N1c3RvbWVyQ291cG9uQWRhcHRlciB9IGZyb20gJy4uL3VzZXIvb2NjLWN1c3RvbWVyLWNvdXBvbi5hZGFwdGVyJztcbmltcG9ydCB7IEFub255bW91c0NvbnNlbnROb3JtYWxpemVyIH0gZnJvbSAnLi9jb252ZXJ0ZXJzL2Fub255bW91cy1jb25zZW50cy1ub3JtYWxpemVyJztcbmltcG9ydCB7IE9jY1JldHVyblJlcXVlc3ROb3JtYWxpemVyIH0gZnJvbSAnLi9jb252ZXJ0ZXJzL29jYy1yZXR1cm4tcmVxdWVzdC1ub3JtYWxpemVyJztcbmltcG9ydCB7IE9jY1VzZXJJbnRlcmVzdHNOb3JtYWxpemVyIH0gZnJvbSAnLi9jb252ZXJ0ZXJzL29jYy11c2VyLWludGVyZXN0cy1ub3JtYWxpemVyJztcbmltcG9ydCB7IGRlZmF1bHRPY2NVc2VyQ29uZmlnIH0gZnJvbSAnLi9kZWZhdWx0LW9jYy11c2VyLWNvbmZpZyc7XG5pbXBvcnQgeyBPY2NBbm9ueW1vdXNDb25zZW50VGVtcGxhdGVzQWRhcHRlciB9IGZyb20gJy4vb2NjLWFub255bW91cy1jb25zZW50LXRlbXBsYXRlcy5hZGFwdGVyJztcbmltcG9ydCB7IE9jY1VzZXJBZGRyZXNzQWRhcHRlciB9IGZyb20gJy4vb2NjLXVzZXItYWRkcmVzcy5hZGFwdGVyJztcbmltcG9ydCB7IE9jY1VzZXJDb25zZW50QWRhcHRlciB9IGZyb20gJy4vb2NjLXVzZXItY29uc2VudC5hZGFwdGVyJztcbmltcG9ydCB7IE9jY1VzZXJDb3N0Q2VudGVyQWRhcHRlciB9IGZyb20gJy4vb2NjLXVzZXItY29zdC1jZW50ZXJzLmFkYXB0ZXInO1xuaW1wb3J0IHsgT2NjVXNlckludGVyZXN0c0FkYXB0ZXIgfSBmcm9tICcuL29jYy11c2VyLWludGVyZXN0cy5hZGFwdGVyJztcbmltcG9ydCB7IE9jY1VzZXJOb3RpZmljYXRpb25QcmVmZXJlbmNlQWRhcHRlciB9IGZyb20gJy4vb2NjLXVzZXItbm90aWZpY2F0aW9uLXByZWZlcmVuY2UuYWRhcHRlcic7XG5pbXBvcnQgeyBPY2NVc2VyT3JkZXJBZGFwdGVyIH0gZnJvbSAnLi9vY2MtdXNlci1vcmRlci5hZGFwdGVyJztcbmltcG9ydCB7IE9jY1VzZXJQYXltZW50QWRhcHRlciB9IGZyb20gJy4vb2NjLXVzZXItcGF5bWVudC5hZGFwdGVyJztcbmltcG9ydCB7IE9jY1VzZXJBZGFwdGVyIH0gZnJvbSAnLi9vY2MtdXNlci5hZGFwdGVyJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgSHR0cENsaWVudE1vZHVsZV0sXG4gIHByb3ZpZGVyczogW1xuICAgIHByb3ZpZGVEZWZhdWx0Q29uZmlnKGRlZmF1bHRPY2NVc2VyQ29uZmlnKSxcbiAgICB7IHByb3ZpZGU6IFVzZXJBZGFwdGVyLCB1c2VDbGFzczogT2NjVXNlckFkYXB0ZXIgfSxcbiAgICB7IHByb3ZpZGU6IFVzZXJBZGRyZXNzQWRhcHRlciwgdXNlQ2xhc3M6IE9jY1VzZXJBZGRyZXNzQWRhcHRlciB9LFxuICAgIHsgcHJvdmlkZTogVXNlckNvbnNlbnRBZGFwdGVyLCB1c2VDbGFzczogT2NjVXNlckNvbnNlbnRBZGFwdGVyIH0sXG4gICAge1xuICAgICAgcHJvdmlkZTogQW5vbnltb3VzQ29uc2VudFRlbXBsYXRlc0FkYXB0ZXIsXG4gICAgICB1c2VDbGFzczogT2NjQW5vbnltb3VzQ29uc2VudFRlbXBsYXRlc0FkYXB0ZXIsXG4gICAgfSxcbiAgICB7XG4gICAgICBwcm92aWRlOiBVc2VyUGF5bWVudEFkYXB0ZXIsXG4gICAgICB1c2VDbGFzczogT2NjVXNlclBheW1lbnRBZGFwdGVyLFxuICAgIH0sXG4gICAgeyBwcm92aWRlOiBVc2VyT3JkZXJBZGFwdGVyLCB1c2VDbGFzczogT2NjVXNlck9yZGVyQWRhcHRlciB9LFxuICAgIHsgcHJvdmlkZTogQ3VzdG9tZXJDb3Vwb25BZGFwdGVyLCB1c2VDbGFzczogT2NjQ3VzdG9tZXJDb3Vwb25BZGFwdGVyIH0sXG4gICAge1xuICAgICAgcHJvdmlkZTogVXNlck5vdGlmaWNhdGlvblByZWZlcmVuY2VBZGFwdGVyLFxuICAgICAgdXNlQ2xhc3M6IE9jY1VzZXJOb3RpZmljYXRpb25QcmVmZXJlbmNlQWRhcHRlcixcbiAgICB9LFxuICAgIHsgcHJvdmlkZTogVXNlckludGVyZXN0c0FkYXB0ZXIsIHVzZUNsYXNzOiBPY2NVc2VySW50ZXJlc3RzQWRhcHRlciB9LFxuICAgIHsgcHJvdmlkZTogVXNlckNvc3RDZW50ZXJBZGFwdGVyLCB1c2VDbGFzczogT2NjVXNlckNvc3RDZW50ZXJBZGFwdGVyIH0sXG4gICAge1xuICAgICAgcHJvdmlkZTogUFJPRFVDVF9JTlRFUkVTVFNfTk9STUFMSVpFUixcbiAgICAgIHVzZUV4aXN0aW5nOiBPY2NVc2VySW50ZXJlc3RzTm9ybWFsaXplcixcbiAgICAgIG11bHRpOiB0cnVlLFxuICAgIH0sXG4gICAge1xuICAgICAgcHJvdmlkZTogT1JERVJfUkVUVVJOX1JFUVVFU1RfTk9STUFMSVpFUixcbiAgICAgIHVzZUV4aXN0aW5nOiBPY2NSZXR1cm5SZXF1ZXN0Tm9ybWFsaXplcixcbiAgICAgIG11bHRpOiB0cnVlLFxuICAgIH0sXG4gICAge1xuICAgICAgcHJvdmlkZTogQU5PTllNT1VTX0NPTlNFTlRfTk9STUFMSVpFUixcbiAgICAgIHVzZUV4aXN0aW5nOiBBbm9ueW1vdXNDb25zZW50Tm9ybWFsaXplcixcbiAgICAgIG11bHRpOiB0cnVlLFxuICAgIH0sXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIFVzZXJPY2NNb2R1bGUge31cbiJdfQ==