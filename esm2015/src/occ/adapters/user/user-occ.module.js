import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AnonymousConsentTemplatesAdapter } from '../../../anonymous-consents/connectors/anonymous-consent-templates.adapter';
import { ANONYMOUS_CONSENT_NORMALIZER } from '../../../anonymous-consents/connectors/converters';
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
import { provideDefaultConfig } from '../../../config/config-providers';
export class UserOccModule {
}
UserOccModule.decorators = [
    { type: NgModule, args: [{
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
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1vY2MubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZS9zcmMvb2NjL2FkYXB0ZXJzL3VzZXIvdXNlci1vY2MubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLDRFQUE0RSxDQUFDO0FBQzlILE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBQ2pHLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHVEQUF1RCxDQUFDO0FBQzNGLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHVEQUF1RCxDQUFDO0FBQzNGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLCtEQUErRCxDQUFDO0FBQ3RHLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGtFQUFrRSxDQUFDO0FBQ3pHLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQzdGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDJEQUEyRCxDQUFDO0FBQ2pHLE9BQU8sRUFBRSxpQ0FBaUMsRUFBRSxNQUFNLHVGQUF1RixDQUFDO0FBQzFJLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQzVGLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBQ3JGLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHVEQUF1RCxDQUFDO0FBQzNGLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUN6RSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUMvRSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUN4RixPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUN4RixPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUN4RixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNqRSxPQUFPLEVBQUUsbUNBQW1DLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUNoRyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNuRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNuRSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUMzRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUN2RSxPQUFPLEVBQUUsb0NBQW9DLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUNsRyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMvRCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNuRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDcEQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUEwQ3hFLE1BQU0sT0FBTyxhQUFhOzs7WUF4Q3pCLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsZ0JBQWdCLENBQUM7Z0JBQ3pDLFNBQVMsRUFBRTtvQkFDVCxvQkFBb0IsQ0FBQyxvQkFBb0IsQ0FBQztvQkFDMUMsRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBRSxjQUFjLEVBQUU7b0JBQ2xELEVBQUUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLFFBQVEsRUFBRSxxQkFBcUIsRUFBRTtvQkFDaEUsRUFBRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsUUFBUSxFQUFFLHFCQUFxQixFQUFFO29CQUNoRTt3QkFDRSxPQUFPLEVBQUUsZ0NBQWdDO3dCQUN6QyxRQUFRLEVBQUUsbUNBQW1DO3FCQUM5QztvQkFDRDt3QkFDRSxPQUFPLEVBQUUsa0JBQWtCO3dCQUMzQixRQUFRLEVBQUUscUJBQXFCO3FCQUNoQztvQkFDRCxFQUFFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxRQUFRLEVBQUUsbUJBQW1CLEVBQUU7b0JBQzVELEVBQUUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLFFBQVEsRUFBRSx3QkFBd0IsRUFBRTtvQkFDdEU7d0JBQ0UsT0FBTyxFQUFFLGlDQUFpQzt3QkFDMUMsUUFBUSxFQUFFLG9DQUFvQztxQkFDL0M7b0JBQ0QsRUFBRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsUUFBUSxFQUFFLHVCQUF1QixFQUFFO29CQUNwRSxFQUFFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxRQUFRLEVBQUUsd0JBQXdCLEVBQUU7b0JBQ3RFO3dCQUNFLE9BQU8sRUFBRSw0QkFBNEI7d0JBQ3JDLFdBQVcsRUFBRSwwQkFBMEI7d0JBQ3ZDLEtBQUssRUFBRSxJQUFJO3FCQUNaO29CQUNEO3dCQUNFLE9BQU8sRUFBRSwrQkFBK0I7d0JBQ3hDLFdBQVcsRUFBRSwwQkFBMEI7d0JBQ3ZDLEtBQUssRUFBRSxJQUFJO3FCQUNaO29CQUNEO3dCQUNFLE9BQU8sRUFBRSw0QkFBNEI7d0JBQ3JDLFdBQVcsRUFBRSwwQkFBMEI7d0JBQ3ZDLEtBQUssRUFBRSxJQUFJO3FCQUNaO2lCQUNGO2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBbm9ueW1vdXNDb25zZW50VGVtcGxhdGVzQWRhcHRlciB9IGZyb20gJy4uLy4uLy4uL2Fub255bW91cy1jb25zZW50cy9jb25uZWN0b3JzL2Fub255bW91cy1jb25zZW50LXRlbXBsYXRlcy5hZGFwdGVyJztcbmltcG9ydCB7IEFOT05ZTU9VU19DT05TRU5UX05PUk1BTElaRVIgfSBmcm9tICcuLi8uLi8uLi9hbm9ueW1vdXMtY29uc2VudHMvY29ubmVjdG9ycy9jb252ZXJ0ZXJzJztcbmltcG9ydCB7IFVzZXJBZGRyZXNzQWRhcHRlciB9IGZyb20gJy4uLy4uLy4uL3VzZXIvY29ubmVjdG9ycy9hZGRyZXNzL3VzZXItYWRkcmVzcy5hZGFwdGVyJztcbmltcG9ydCB7IFVzZXJDb25zZW50QWRhcHRlciB9IGZyb20gJy4uLy4uLy4uL3VzZXIvY29ubmVjdG9ycy9jb25zZW50L3VzZXItY29uc2VudC5hZGFwdGVyJztcbmltcG9ydCB7IFVzZXJDb3N0Q2VudGVyQWRhcHRlciB9IGZyb20gJy4uLy4uLy4uL3VzZXIvY29ubmVjdG9ycy9jb3N0LWNlbnRlci91c2VyLWNvc3QtY2VudGVyLmFkYXB0ZXInO1xuaW1wb3J0IHsgQ3VzdG9tZXJDb3Vwb25BZGFwdGVyIH0gZnJvbSAnLi4vLi4vLi4vdXNlci9jb25uZWN0b3JzL2N1c3RvbWVyLWNvdXBvbi9jdXN0b21lci1jb3Vwb24uYWRhcHRlcic7XG5pbXBvcnQgeyBQUk9EVUNUX0lOVEVSRVNUU19OT1JNQUxJWkVSIH0gZnJvbSAnLi4vLi4vLi4vdXNlci9jb25uZWN0b3JzL2ludGVyZXN0cy9jb252ZXJ0ZXJzJztcbmltcG9ydCB7IFVzZXJJbnRlcmVzdHNBZGFwdGVyIH0gZnJvbSAnLi4vLi4vLi4vdXNlci9jb25uZWN0b3JzL2ludGVyZXN0cy91c2VyLWludGVyZXN0cy5hZGFwdGVyJztcbmltcG9ydCB7IFVzZXJOb3RpZmljYXRpb25QcmVmZXJlbmNlQWRhcHRlciB9IGZyb20gJy4uLy4uLy4uL3VzZXIvY29ubmVjdG9ycy9ub3RpZmljYXRpb24tcHJlZmVyZW5jZS91c2VyLW5vdGlmaWNhdGlvbi1wcmVmZXJlbmNlLmFkYXB0ZXInO1xuaW1wb3J0IHsgT1JERVJfUkVUVVJOX1JFUVVFU1RfTk9STUFMSVpFUiB9IGZyb20gJy4uLy4uLy4uL3VzZXIvY29ubmVjdG9ycy9vcmRlci9jb252ZXJ0ZXJzJztcbmltcG9ydCB7IFVzZXJPcmRlckFkYXB0ZXIgfSBmcm9tICcuLi8uLi8uLi91c2VyL2Nvbm5lY3RvcnMvb3JkZXIvdXNlci1vcmRlci5hZGFwdGVyJztcbmltcG9ydCB7IFVzZXJQYXltZW50QWRhcHRlciB9IGZyb20gJy4uLy4uLy4uL3VzZXIvY29ubmVjdG9ycy9wYXltZW50L3VzZXItcGF5bWVudC5hZGFwdGVyJztcbmltcG9ydCB7IFVzZXJBZGFwdGVyIH0gZnJvbSAnLi4vLi4vLi4vdXNlci9jb25uZWN0b3JzL3VzZXIvdXNlci5hZGFwdGVyJztcbmltcG9ydCB7IE9jY0N1c3RvbWVyQ291cG9uQWRhcHRlciB9IGZyb20gJy4uL3VzZXIvb2NjLWN1c3RvbWVyLWNvdXBvbi5hZGFwdGVyJztcbmltcG9ydCB7IEFub255bW91c0NvbnNlbnROb3JtYWxpemVyIH0gZnJvbSAnLi9jb252ZXJ0ZXJzL2Fub255bW91cy1jb25zZW50cy1ub3JtYWxpemVyJztcbmltcG9ydCB7IE9jY1JldHVyblJlcXVlc3ROb3JtYWxpemVyIH0gZnJvbSAnLi9jb252ZXJ0ZXJzL29jYy1yZXR1cm4tcmVxdWVzdC1ub3JtYWxpemVyJztcbmltcG9ydCB7IE9jY1VzZXJJbnRlcmVzdHNOb3JtYWxpemVyIH0gZnJvbSAnLi9jb252ZXJ0ZXJzL29jYy11c2VyLWludGVyZXN0cy1ub3JtYWxpemVyJztcbmltcG9ydCB7IGRlZmF1bHRPY2NVc2VyQ29uZmlnIH0gZnJvbSAnLi9kZWZhdWx0LW9jYy11c2VyLWNvbmZpZyc7XG5pbXBvcnQgeyBPY2NBbm9ueW1vdXNDb25zZW50VGVtcGxhdGVzQWRhcHRlciB9IGZyb20gJy4vb2NjLWFub255bW91cy1jb25zZW50LXRlbXBsYXRlcy5hZGFwdGVyJztcbmltcG9ydCB7IE9jY1VzZXJBZGRyZXNzQWRhcHRlciB9IGZyb20gJy4vb2NjLXVzZXItYWRkcmVzcy5hZGFwdGVyJztcbmltcG9ydCB7IE9jY1VzZXJDb25zZW50QWRhcHRlciB9IGZyb20gJy4vb2NjLXVzZXItY29uc2VudC5hZGFwdGVyJztcbmltcG9ydCB7IE9jY1VzZXJDb3N0Q2VudGVyQWRhcHRlciB9IGZyb20gJy4vb2NjLXVzZXItY29zdC1jZW50ZXJzLmFkYXB0ZXInO1xuaW1wb3J0IHsgT2NjVXNlckludGVyZXN0c0FkYXB0ZXIgfSBmcm9tICcuL29jYy11c2VyLWludGVyZXN0cy5hZGFwdGVyJztcbmltcG9ydCB7IE9jY1VzZXJOb3RpZmljYXRpb25QcmVmZXJlbmNlQWRhcHRlciB9IGZyb20gJy4vb2NjLXVzZXItbm90aWZpY2F0aW9uLXByZWZlcmVuY2UuYWRhcHRlcic7XG5pbXBvcnQgeyBPY2NVc2VyT3JkZXJBZGFwdGVyIH0gZnJvbSAnLi9vY2MtdXNlci1vcmRlci5hZGFwdGVyJztcbmltcG9ydCB7IE9jY1VzZXJQYXltZW50QWRhcHRlciB9IGZyb20gJy4vb2NjLXVzZXItcGF5bWVudC5hZGFwdGVyJztcbmltcG9ydCB7IE9jY1VzZXJBZGFwdGVyIH0gZnJvbSAnLi9vY2MtdXNlci5hZGFwdGVyJztcbmltcG9ydCB7IHByb3ZpZGVEZWZhdWx0Q29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vY29uZmlnL2NvbmZpZy1wcm92aWRlcnMnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBIdHRwQ2xpZW50TW9kdWxlXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgcHJvdmlkZURlZmF1bHRDb25maWcoZGVmYXVsdE9jY1VzZXJDb25maWcpLFxuICAgIHsgcHJvdmlkZTogVXNlckFkYXB0ZXIsIHVzZUNsYXNzOiBPY2NVc2VyQWRhcHRlciB9LFxuICAgIHsgcHJvdmlkZTogVXNlckFkZHJlc3NBZGFwdGVyLCB1c2VDbGFzczogT2NjVXNlckFkZHJlc3NBZGFwdGVyIH0sXG4gICAgeyBwcm92aWRlOiBVc2VyQ29uc2VudEFkYXB0ZXIsIHVzZUNsYXNzOiBPY2NVc2VyQ29uc2VudEFkYXB0ZXIgfSxcbiAgICB7XG4gICAgICBwcm92aWRlOiBBbm9ueW1vdXNDb25zZW50VGVtcGxhdGVzQWRhcHRlcixcbiAgICAgIHVzZUNsYXNzOiBPY2NBbm9ueW1vdXNDb25zZW50VGVtcGxhdGVzQWRhcHRlcixcbiAgICB9LFxuICAgIHtcbiAgICAgIHByb3ZpZGU6IFVzZXJQYXltZW50QWRhcHRlcixcbiAgICAgIHVzZUNsYXNzOiBPY2NVc2VyUGF5bWVudEFkYXB0ZXIsXG4gICAgfSxcbiAgICB7IHByb3ZpZGU6IFVzZXJPcmRlckFkYXB0ZXIsIHVzZUNsYXNzOiBPY2NVc2VyT3JkZXJBZGFwdGVyIH0sXG4gICAgeyBwcm92aWRlOiBDdXN0b21lckNvdXBvbkFkYXB0ZXIsIHVzZUNsYXNzOiBPY2NDdXN0b21lckNvdXBvbkFkYXB0ZXIgfSxcbiAgICB7XG4gICAgICBwcm92aWRlOiBVc2VyTm90aWZpY2F0aW9uUHJlZmVyZW5jZUFkYXB0ZXIsXG4gICAgICB1c2VDbGFzczogT2NjVXNlck5vdGlmaWNhdGlvblByZWZlcmVuY2VBZGFwdGVyLFxuICAgIH0sXG4gICAgeyBwcm92aWRlOiBVc2VySW50ZXJlc3RzQWRhcHRlciwgdXNlQ2xhc3M6IE9jY1VzZXJJbnRlcmVzdHNBZGFwdGVyIH0sXG4gICAgeyBwcm92aWRlOiBVc2VyQ29zdENlbnRlckFkYXB0ZXIsIHVzZUNsYXNzOiBPY2NVc2VyQ29zdENlbnRlckFkYXB0ZXIgfSxcbiAgICB7XG4gICAgICBwcm92aWRlOiBQUk9EVUNUX0lOVEVSRVNUU19OT1JNQUxJWkVSLFxuICAgICAgdXNlRXhpc3Rpbmc6IE9jY1VzZXJJbnRlcmVzdHNOb3JtYWxpemVyLFxuICAgICAgbXVsdGk6IHRydWUsXG4gICAgfSxcbiAgICB7XG4gICAgICBwcm92aWRlOiBPUkRFUl9SRVRVUk5fUkVRVUVTVF9OT1JNQUxJWkVSLFxuICAgICAgdXNlRXhpc3Rpbmc6IE9jY1JldHVyblJlcXVlc3ROb3JtYWxpemVyLFxuICAgICAgbXVsdGk6IHRydWUsXG4gICAgfSxcbiAgICB7XG4gICAgICBwcm92aWRlOiBBTk9OWU1PVVNfQ09OU0VOVF9OT1JNQUxJWkVSLFxuICAgICAgdXNlRXhpc3Rpbmc6IEFub255bW91c0NvbnNlbnROb3JtYWxpemVyLFxuICAgICAgbXVsdGk6IHRydWUsXG4gICAgfSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgVXNlck9jY01vZHVsZSB7fVxuIl19