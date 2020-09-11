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
var UserOccModule = /** @class */ (function () {
    function UserOccModule() {
    }
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
    return UserOccModule;
}());
export { UserOccModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1vY2MubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL29jYy9hZGFwdGVycy91c2VyL3VzZXItb2NjLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0sNEVBQTRFLENBQUM7QUFDOUgsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFDakcsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDckUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sdURBQXVELENBQUM7QUFDM0YsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sdURBQXVELENBQUM7QUFDM0YsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sK0RBQStELENBQUM7QUFDdEcsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sa0VBQWtFLENBQUM7QUFDekcsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDN0YsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMkRBQTJELENBQUM7QUFDakcsT0FBTyxFQUFFLGlDQUFpQyxFQUFFLE1BQU0sdUZBQXVGLENBQUM7QUFDMUksT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDNUYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFDckYsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sdURBQXVELENBQUM7QUFDM0YsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQy9FLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQ3hGLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQ3hGLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQ3hGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxtQ0FBbUMsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQ2hHLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ25FLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ25FLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxvQ0FBb0MsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQ2xHLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQy9ELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ25FLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQTBDcEQ7SUFBQTtJQUE0QixDQUFDO0lBQWhCLGFBQWE7UUF4Q3pCLFFBQVEsQ0FBQztZQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxnQkFBZ0IsQ0FBQztZQUN6QyxTQUFTLEVBQUU7Z0JBQ1Qsb0JBQW9CLENBQUMsb0JBQW9CLENBQUM7Z0JBQzFDLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxRQUFRLEVBQUUsY0FBYyxFQUFFO2dCQUNsRCxFQUFFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxRQUFRLEVBQUUscUJBQXFCLEVBQUU7Z0JBQ2hFLEVBQUUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLFFBQVEsRUFBRSxxQkFBcUIsRUFBRTtnQkFDaEU7b0JBQ0UsT0FBTyxFQUFFLGdDQUFnQztvQkFDekMsUUFBUSxFQUFFLG1DQUFtQztpQkFDOUM7Z0JBQ0Q7b0JBQ0UsT0FBTyxFQUFFLGtCQUFrQjtvQkFDM0IsUUFBUSxFQUFFLHFCQUFxQjtpQkFDaEM7Z0JBQ0QsRUFBRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsUUFBUSxFQUFFLG1CQUFtQixFQUFFO2dCQUM1RCxFQUFFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxRQUFRLEVBQUUsd0JBQXdCLEVBQUU7Z0JBQ3RFO29CQUNFLE9BQU8sRUFBRSxpQ0FBaUM7b0JBQzFDLFFBQVEsRUFBRSxvQ0FBb0M7aUJBQy9DO2dCQUNELEVBQUUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLFFBQVEsRUFBRSx1QkFBdUIsRUFBRTtnQkFDcEUsRUFBRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsUUFBUSxFQUFFLHdCQUF3QixFQUFFO2dCQUN0RTtvQkFDRSxPQUFPLEVBQUUsNEJBQTRCO29CQUNyQyxXQUFXLEVBQUUsMEJBQTBCO29CQUN2QyxLQUFLLEVBQUUsSUFBSTtpQkFDWjtnQkFDRDtvQkFDRSxPQUFPLEVBQUUsK0JBQStCO29CQUN4QyxXQUFXLEVBQUUsMEJBQTBCO29CQUN2QyxLQUFLLEVBQUUsSUFBSTtpQkFDWjtnQkFDRDtvQkFDRSxPQUFPLEVBQUUsNEJBQTRCO29CQUNyQyxXQUFXLEVBQUUsMEJBQTBCO29CQUN2QyxLQUFLLEVBQUUsSUFBSTtpQkFDWjthQUNGO1NBQ0YsQ0FBQztPQUNXLGFBQWEsQ0FBRztJQUFELG9CQUFDO0NBQUEsQUFBN0IsSUFBNkI7U0FBaEIsYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFub255bW91c0NvbnNlbnRUZW1wbGF0ZXNBZGFwdGVyIH0gZnJvbSAnLi4vLi4vLi4vYW5vbnltb3VzLWNvbnNlbnRzL2Nvbm5lY3RvcnMvYW5vbnltb3VzLWNvbnNlbnQtdGVtcGxhdGVzLmFkYXB0ZXInO1xuaW1wb3J0IHsgQU5PTllNT1VTX0NPTlNFTlRfTk9STUFMSVpFUiB9IGZyb20gJy4uLy4uLy4uL2Fub255bW91cy1jb25zZW50cy9jb25uZWN0b3JzL2NvbnZlcnRlcnMnO1xuaW1wb3J0IHsgcHJvdmlkZURlZmF1bHRDb25maWcgfSBmcm9tICcuLi8uLi8uLi9jb25maWcvY29uZmlnLm1vZHVsZSc7XG5pbXBvcnQgeyBVc2VyQWRkcmVzc0FkYXB0ZXIgfSBmcm9tICcuLi8uLi8uLi91c2VyL2Nvbm5lY3RvcnMvYWRkcmVzcy91c2VyLWFkZHJlc3MuYWRhcHRlcic7XG5pbXBvcnQgeyBVc2VyQ29uc2VudEFkYXB0ZXIgfSBmcm9tICcuLi8uLi8uLi91c2VyL2Nvbm5lY3RvcnMvY29uc2VudC91c2VyLWNvbnNlbnQuYWRhcHRlcic7XG5pbXBvcnQgeyBVc2VyQ29zdENlbnRlckFkYXB0ZXIgfSBmcm9tICcuLi8uLi8uLi91c2VyL2Nvbm5lY3RvcnMvY29zdC1jZW50ZXIvdXNlci1jb3N0LWNlbnRlci5hZGFwdGVyJztcbmltcG9ydCB7IEN1c3RvbWVyQ291cG9uQWRhcHRlciB9IGZyb20gJy4uLy4uLy4uL3VzZXIvY29ubmVjdG9ycy9jdXN0b21lci1jb3Vwb24vY3VzdG9tZXItY291cG9uLmFkYXB0ZXInO1xuaW1wb3J0IHsgUFJPRFVDVF9JTlRFUkVTVFNfTk9STUFMSVpFUiB9IGZyb20gJy4uLy4uLy4uL3VzZXIvY29ubmVjdG9ycy9pbnRlcmVzdHMvY29udmVydGVycyc7XG5pbXBvcnQgeyBVc2VySW50ZXJlc3RzQWRhcHRlciB9IGZyb20gJy4uLy4uLy4uL3VzZXIvY29ubmVjdG9ycy9pbnRlcmVzdHMvdXNlci1pbnRlcmVzdHMuYWRhcHRlcic7XG5pbXBvcnQgeyBVc2VyTm90aWZpY2F0aW9uUHJlZmVyZW5jZUFkYXB0ZXIgfSBmcm9tICcuLi8uLi8uLi91c2VyL2Nvbm5lY3RvcnMvbm90aWZpY2F0aW9uLXByZWZlcmVuY2UvdXNlci1ub3RpZmljYXRpb24tcHJlZmVyZW5jZS5hZGFwdGVyJztcbmltcG9ydCB7IE9SREVSX1JFVFVSTl9SRVFVRVNUX05PUk1BTElaRVIgfSBmcm9tICcuLi8uLi8uLi91c2VyL2Nvbm5lY3RvcnMvb3JkZXIvY29udmVydGVycyc7XG5pbXBvcnQgeyBVc2VyT3JkZXJBZGFwdGVyIH0gZnJvbSAnLi4vLi4vLi4vdXNlci9jb25uZWN0b3JzL29yZGVyL3VzZXItb3JkZXIuYWRhcHRlcic7XG5pbXBvcnQgeyBVc2VyUGF5bWVudEFkYXB0ZXIgfSBmcm9tICcuLi8uLi8uLi91c2VyL2Nvbm5lY3RvcnMvcGF5bWVudC91c2VyLXBheW1lbnQuYWRhcHRlcic7XG5pbXBvcnQgeyBVc2VyQWRhcHRlciB9IGZyb20gJy4uLy4uLy4uL3VzZXIvY29ubmVjdG9ycy91c2VyL3VzZXIuYWRhcHRlcic7XG5pbXBvcnQgeyBPY2NDdXN0b21lckNvdXBvbkFkYXB0ZXIgfSBmcm9tICcuLi91c2VyL29jYy1jdXN0b21lci1jb3Vwb24uYWRhcHRlcic7XG5pbXBvcnQgeyBBbm9ueW1vdXNDb25zZW50Tm9ybWFsaXplciB9IGZyb20gJy4vY29udmVydGVycy9hbm9ueW1vdXMtY29uc2VudHMtbm9ybWFsaXplcic7XG5pbXBvcnQgeyBPY2NSZXR1cm5SZXF1ZXN0Tm9ybWFsaXplciB9IGZyb20gJy4vY29udmVydGVycy9vY2MtcmV0dXJuLXJlcXVlc3Qtbm9ybWFsaXplcic7XG5pbXBvcnQgeyBPY2NVc2VySW50ZXJlc3RzTm9ybWFsaXplciB9IGZyb20gJy4vY29udmVydGVycy9vY2MtdXNlci1pbnRlcmVzdHMtbm9ybWFsaXplcic7XG5pbXBvcnQgeyBkZWZhdWx0T2NjVXNlckNvbmZpZyB9IGZyb20gJy4vZGVmYXVsdC1vY2MtdXNlci1jb25maWcnO1xuaW1wb3J0IHsgT2NjQW5vbnltb3VzQ29uc2VudFRlbXBsYXRlc0FkYXB0ZXIgfSBmcm9tICcuL29jYy1hbm9ueW1vdXMtY29uc2VudC10ZW1wbGF0ZXMuYWRhcHRlcic7XG5pbXBvcnQgeyBPY2NVc2VyQWRkcmVzc0FkYXB0ZXIgfSBmcm9tICcuL29jYy11c2VyLWFkZHJlc3MuYWRhcHRlcic7XG5pbXBvcnQgeyBPY2NVc2VyQ29uc2VudEFkYXB0ZXIgfSBmcm9tICcuL29jYy11c2VyLWNvbnNlbnQuYWRhcHRlcic7XG5pbXBvcnQgeyBPY2NVc2VyQ29zdENlbnRlckFkYXB0ZXIgfSBmcm9tICcuL29jYy11c2VyLWNvc3QtY2VudGVycy5hZGFwdGVyJztcbmltcG9ydCB7IE9jY1VzZXJJbnRlcmVzdHNBZGFwdGVyIH0gZnJvbSAnLi9vY2MtdXNlci1pbnRlcmVzdHMuYWRhcHRlcic7XG5pbXBvcnQgeyBPY2NVc2VyTm90aWZpY2F0aW9uUHJlZmVyZW5jZUFkYXB0ZXIgfSBmcm9tICcuL29jYy11c2VyLW5vdGlmaWNhdGlvbi1wcmVmZXJlbmNlLmFkYXB0ZXInO1xuaW1wb3J0IHsgT2NjVXNlck9yZGVyQWRhcHRlciB9IGZyb20gJy4vb2NjLXVzZXItb3JkZXIuYWRhcHRlcic7XG5pbXBvcnQgeyBPY2NVc2VyUGF5bWVudEFkYXB0ZXIgfSBmcm9tICcuL29jYy11c2VyLXBheW1lbnQuYWRhcHRlcic7XG5pbXBvcnQgeyBPY2NVc2VyQWRhcHRlciB9IGZyb20gJy4vb2NjLXVzZXIuYWRhcHRlcic7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIEh0dHBDbGllbnRNb2R1bGVdLFxuICBwcm92aWRlcnM6IFtcbiAgICBwcm92aWRlRGVmYXVsdENvbmZpZyhkZWZhdWx0T2NjVXNlckNvbmZpZyksXG4gICAgeyBwcm92aWRlOiBVc2VyQWRhcHRlciwgdXNlQ2xhc3M6IE9jY1VzZXJBZGFwdGVyIH0sXG4gICAgeyBwcm92aWRlOiBVc2VyQWRkcmVzc0FkYXB0ZXIsIHVzZUNsYXNzOiBPY2NVc2VyQWRkcmVzc0FkYXB0ZXIgfSxcbiAgICB7IHByb3ZpZGU6IFVzZXJDb25zZW50QWRhcHRlciwgdXNlQ2xhc3M6IE9jY1VzZXJDb25zZW50QWRhcHRlciB9LFxuICAgIHtcbiAgICAgIHByb3ZpZGU6IEFub255bW91c0NvbnNlbnRUZW1wbGF0ZXNBZGFwdGVyLFxuICAgICAgdXNlQ2xhc3M6IE9jY0Fub255bW91c0NvbnNlbnRUZW1wbGF0ZXNBZGFwdGVyLFxuICAgIH0sXG4gICAge1xuICAgICAgcHJvdmlkZTogVXNlclBheW1lbnRBZGFwdGVyLFxuICAgICAgdXNlQ2xhc3M6IE9jY1VzZXJQYXltZW50QWRhcHRlcixcbiAgICB9LFxuICAgIHsgcHJvdmlkZTogVXNlck9yZGVyQWRhcHRlciwgdXNlQ2xhc3M6IE9jY1VzZXJPcmRlckFkYXB0ZXIgfSxcbiAgICB7IHByb3ZpZGU6IEN1c3RvbWVyQ291cG9uQWRhcHRlciwgdXNlQ2xhc3M6IE9jY0N1c3RvbWVyQ291cG9uQWRhcHRlciB9LFxuICAgIHtcbiAgICAgIHByb3ZpZGU6IFVzZXJOb3RpZmljYXRpb25QcmVmZXJlbmNlQWRhcHRlcixcbiAgICAgIHVzZUNsYXNzOiBPY2NVc2VyTm90aWZpY2F0aW9uUHJlZmVyZW5jZUFkYXB0ZXIsXG4gICAgfSxcbiAgICB7IHByb3ZpZGU6IFVzZXJJbnRlcmVzdHNBZGFwdGVyLCB1c2VDbGFzczogT2NjVXNlckludGVyZXN0c0FkYXB0ZXIgfSxcbiAgICB7IHByb3ZpZGU6IFVzZXJDb3N0Q2VudGVyQWRhcHRlciwgdXNlQ2xhc3M6IE9jY1VzZXJDb3N0Q2VudGVyQWRhcHRlciB9LFxuICAgIHtcbiAgICAgIHByb3ZpZGU6IFBST0RVQ1RfSU5URVJFU1RTX05PUk1BTElaRVIsXG4gICAgICB1c2VFeGlzdGluZzogT2NjVXNlckludGVyZXN0c05vcm1hbGl6ZXIsXG4gICAgICBtdWx0aTogdHJ1ZSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHByb3ZpZGU6IE9SREVSX1JFVFVSTl9SRVFVRVNUX05PUk1BTElaRVIsXG4gICAgICB1c2VFeGlzdGluZzogT2NjUmV0dXJuUmVxdWVzdE5vcm1hbGl6ZXIsXG4gICAgICBtdWx0aTogdHJ1ZSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHByb3ZpZGU6IEFOT05ZTU9VU19DT05TRU5UX05PUk1BTElaRVIsXG4gICAgICB1c2VFeGlzdGluZzogQW5vbnltb3VzQ29uc2VudE5vcm1hbGl6ZXIsXG4gICAgICBtdWx0aTogdHJ1ZSxcbiAgICB9LFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBVc2VyT2NjTW9kdWxlIHt9XG4iXX0=