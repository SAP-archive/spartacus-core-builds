import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AnonymousConsentTemplatesAdapter } from '../../../anonymous-consents/connectors/anonymous-consent-templates.adapter';
import { ConfigModule } from '../../../config/config.module';
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
var UserOccModule = /** @class */ (function () {
    function UserOccModule() {
    }
    UserOccModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                HttpClientModule,
                ConfigModule.withConfig(defaultOccUserConfig),
            ],
            providers: [
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
    return UserOccModule;
}());
export { UserOccModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1vY2MubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL29jYy9hZGFwdGVycy91c2VyL3VzZXItb2NjLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0sNEVBQTRFLENBQUM7QUFDOUgsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQzdELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHVEQUF1RCxDQUFDO0FBQzNGLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHVEQUF1RCxDQUFDO0FBQzNGLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBQ3JGLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHVEQUF1RCxDQUFDO0FBQzNGLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUN6RSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNqRSxPQUFPLEVBQUUsbUNBQW1DLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUNoRyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNuRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNuRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMvRCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNuRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDcEQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sa0VBQWtFLENBQUM7QUFDekcsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDL0UsT0FBTyxFQUFFLGlDQUFpQyxFQUFFLE1BQU0sdUZBQXVGLENBQUM7QUFDMUksT0FBTyxFQUFFLG9DQUFvQyxFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDbEcsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDdkUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMkRBQTJELENBQUM7QUFDakcsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDeEYsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDN0YsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDNUYsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUF1Q2hFO0lBQUE7SUFBNEIsQ0FBQztJQUFoQixhQUFhO1FBckN6QixRQUFRLENBQUM7WUFDUixPQUFPLEVBQUU7Z0JBQ1AsWUFBWTtnQkFDWixnQkFBZ0I7Z0JBQ2hCLFlBQVksQ0FBQyxVQUFVLENBQUMsb0JBQW9CLENBQUM7YUFDOUM7WUFDRCxTQUFTLEVBQUU7Z0JBQ1QsRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBRSxjQUFjLEVBQUU7Z0JBQ2xELEVBQUUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLFFBQVEsRUFBRSxxQkFBcUIsRUFBRTtnQkFDaEUsRUFBRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsUUFBUSxFQUFFLHFCQUFxQixFQUFFO2dCQUNoRTtvQkFDRSxPQUFPLEVBQUUsZ0NBQWdDO29CQUN6QyxRQUFRLEVBQUUsbUNBQW1DO2lCQUM5QztnQkFDRDtvQkFDRSxPQUFPLEVBQUUsa0JBQWtCO29CQUMzQixRQUFRLEVBQUUscUJBQXFCO2lCQUNoQztnQkFDRCxFQUFFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxRQUFRLEVBQUUsbUJBQW1CLEVBQUU7Z0JBQzVELEVBQUUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLFFBQVEsRUFBRSx3QkFBd0IsRUFBRTtnQkFDdEU7b0JBQ0UsT0FBTyxFQUFFLGlDQUFpQztvQkFDMUMsUUFBUSxFQUFFLG9DQUFvQztpQkFDL0M7Z0JBQ0QsRUFBRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsUUFBUSxFQUFFLHVCQUF1QixFQUFFO2dCQUNwRTtvQkFDRSxPQUFPLEVBQUUsNEJBQTRCO29CQUNyQyxXQUFXLEVBQUUsMEJBQTBCO29CQUN2QyxLQUFLLEVBQUUsSUFBSTtpQkFDWjtnQkFDRDtvQkFDRSxPQUFPLEVBQUUsK0JBQStCO29CQUN4QyxXQUFXLEVBQUUsMEJBQTBCO29CQUN2QyxLQUFLLEVBQUUsSUFBSTtpQkFDWjthQUNGO1NBQ0YsQ0FBQztPQUNXLGFBQWEsQ0FBRztJQUFELG9CQUFDO0NBQUEsQUFBN0IsSUFBNkI7U0FBaEIsYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFub255bW91c0NvbnNlbnRUZW1wbGF0ZXNBZGFwdGVyIH0gZnJvbSAnLi4vLi4vLi4vYW5vbnltb3VzLWNvbnNlbnRzL2Nvbm5lY3RvcnMvYW5vbnltb3VzLWNvbnNlbnQtdGVtcGxhdGVzLmFkYXB0ZXInO1xuaW1wb3J0IHsgQ29uZmlnTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vY29uZmlnL2NvbmZpZy5tb2R1bGUnO1xuaW1wb3J0IHsgVXNlckFkZHJlc3NBZGFwdGVyIH0gZnJvbSAnLi4vLi4vLi4vdXNlci9jb25uZWN0b3JzL2FkZHJlc3MvdXNlci1hZGRyZXNzLmFkYXB0ZXInO1xuaW1wb3J0IHsgVXNlckNvbnNlbnRBZGFwdGVyIH0gZnJvbSAnLi4vLi4vLi4vdXNlci9jb25uZWN0b3JzL2NvbnNlbnQvdXNlci1jb25zZW50LmFkYXB0ZXInO1xuaW1wb3J0IHsgVXNlck9yZGVyQWRhcHRlciB9IGZyb20gJy4uLy4uLy4uL3VzZXIvY29ubmVjdG9ycy9vcmRlci91c2VyLW9yZGVyLmFkYXB0ZXInO1xuaW1wb3J0IHsgVXNlclBheW1lbnRBZGFwdGVyIH0gZnJvbSAnLi4vLi4vLi4vdXNlci9jb25uZWN0b3JzL3BheW1lbnQvdXNlci1wYXltZW50LmFkYXB0ZXInO1xuaW1wb3J0IHsgVXNlckFkYXB0ZXIgfSBmcm9tICcuLi8uLi8uLi91c2VyL2Nvbm5lY3RvcnMvdXNlci91c2VyLmFkYXB0ZXInO1xuaW1wb3J0IHsgZGVmYXVsdE9jY1VzZXJDb25maWcgfSBmcm9tICcuL2RlZmF1bHQtb2NjLXVzZXItY29uZmlnJztcbmltcG9ydCB7IE9jY0Fub255bW91c0NvbnNlbnRUZW1wbGF0ZXNBZGFwdGVyIH0gZnJvbSAnLi9vY2MtYW5vbnltb3VzLWNvbnNlbnQtdGVtcGxhdGVzLmFkYXB0ZXInO1xuaW1wb3J0IHsgT2NjVXNlckFkZHJlc3NBZGFwdGVyIH0gZnJvbSAnLi9vY2MtdXNlci1hZGRyZXNzLmFkYXB0ZXInO1xuaW1wb3J0IHsgT2NjVXNlckNvbnNlbnRBZGFwdGVyIH0gZnJvbSAnLi9vY2MtdXNlci1jb25zZW50LmFkYXB0ZXInO1xuaW1wb3J0IHsgT2NjVXNlck9yZGVyQWRhcHRlciB9IGZyb20gJy4vb2NjLXVzZXItb3JkZXIuYWRhcHRlcic7XG5pbXBvcnQgeyBPY2NVc2VyUGF5bWVudEFkYXB0ZXIgfSBmcm9tICcuL29jYy11c2VyLXBheW1lbnQuYWRhcHRlcic7XG5pbXBvcnQgeyBPY2NVc2VyQWRhcHRlciB9IGZyb20gJy4vb2NjLXVzZXIuYWRhcHRlcic7XG5pbXBvcnQgeyBDdXN0b21lckNvdXBvbkFkYXB0ZXIgfSBmcm9tICcuLi8uLi8uLi91c2VyL2Nvbm5lY3RvcnMvY3VzdG9tZXItY291cG9uL2N1c3RvbWVyLWNvdXBvbi5hZGFwdGVyJztcbmltcG9ydCB7IE9jY0N1c3RvbWVyQ291cG9uQWRhcHRlciB9IGZyb20gJy4uL3VzZXIvb2NjLWN1c3RvbWVyLWNvdXBvbi5hZGFwdGVyJztcbmltcG9ydCB7IFVzZXJOb3RpZmljYXRpb25QcmVmZXJlbmNlQWRhcHRlciB9IGZyb20gJy4uLy4uLy4uL3VzZXIvY29ubmVjdG9ycy9ub3RpZmljYXRpb24tcHJlZmVyZW5jZS91c2VyLW5vdGlmaWNhdGlvbi1wcmVmZXJlbmNlLmFkYXB0ZXInO1xuaW1wb3J0IHsgT2NjVXNlck5vdGlmaWNhdGlvblByZWZlcmVuY2VBZGFwdGVyIH0gZnJvbSAnLi9vY2MtdXNlci1ub3RpZmljYXRpb24tcHJlZmVyZW5jZS5hZGFwdGVyJztcbmltcG9ydCB7IE9jY1VzZXJJbnRlcmVzdHNBZGFwdGVyIH0gZnJvbSAnLi9vY2MtdXNlci1pbnRlcmVzdHMuYWRhcHRlcic7XG5pbXBvcnQgeyBVc2VySW50ZXJlc3RzQWRhcHRlciB9IGZyb20gJy4uLy4uLy4uL3VzZXIvY29ubmVjdG9ycy9pbnRlcmVzdHMvdXNlci1pbnRlcmVzdHMuYWRhcHRlcic7XG5pbXBvcnQgeyBPY2NVc2VySW50ZXJlc3RzTm9ybWFsaXplciB9IGZyb20gJy4vY29udmVydGVycy9vY2MtdXNlci1pbnRlcmVzdHMtbm9ybWFsaXplcic7XG5pbXBvcnQgeyBQUk9EVUNUX0lOVEVSRVNUU19OT1JNQUxJWkVSIH0gZnJvbSAnLi4vLi4vLi4vdXNlci9jb25uZWN0b3JzL2ludGVyZXN0cy9jb252ZXJ0ZXJzJztcbmltcG9ydCB7IE9SREVSX1JFVFVSTl9SRVFVRVNUX05PUk1BTElaRVIgfSBmcm9tICcuLi8uLi8uLi91c2VyL2Nvbm5lY3RvcnMvb3JkZXIvY29udmVydGVycyc7XG5pbXBvcnQgeyBPY2NSZXR1cm5SZXF1ZXN0Tm9ybWFsaXplciB9IGZyb20gJy4vY29udmVydGVycy9pbmRleCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgSHR0cENsaWVudE1vZHVsZSxcbiAgICBDb25maWdNb2R1bGUud2l0aENvbmZpZyhkZWZhdWx0T2NjVXNlckNvbmZpZyksXG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIHsgcHJvdmlkZTogVXNlckFkYXB0ZXIsIHVzZUNsYXNzOiBPY2NVc2VyQWRhcHRlciB9LFxuICAgIHsgcHJvdmlkZTogVXNlckFkZHJlc3NBZGFwdGVyLCB1c2VDbGFzczogT2NjVXNlckFkZHJlc3NBZGFwdGVyIH0sXG4gICAgeyBwcm92aWRlOiBVc2VyQ29uc2VudEFkYXB0ZXIsIHVzZUNsYXNzOiBPY2NVc2VyQ29uc2VudEFkYXB0ZXIgfSxcbiAgICB7XG4gICAgICBwcm92aWRlOiBBbm9ueW1vdXNDb25zZW50VGVtcGxhdGVzQWRhcHRlcixcbiAgICAgIHVzZUNsYXNzOiBPY2NBbm9ueW1vdXNDb25zZW50VGVtcGxhdGVzQWRhcHRlcixcbiAgICB9LFxuICAgIHtcbiAgICAgIHByb3ZpZGU6IFVzZXJQYXltZW50QWRhcHRlcixcbiAgICAgIHVzZUNsYXNzOiBPY2NVc2VyUGF5bWVudEFkYXB0ZXIsXG4gICAgfSxcbiAgICB7IHByb3ZpZGU6IFVzZXJPcmRlckFkYXB0ZXIsIHVzZUNsYXNzOiBPY2NVc2VyT3JkZXJBZGFwdGVyIH0sXG4gICAgeyBwcm92aWRlOiBDdXN0b21lckNvdXBvbkFkYXB0ZXIsIHVzZUNsYXNzOiBPY2NDdXN0b21lckNvdXBvbkFkYXB0ZXIgfSxcbiAgICB7XG4gICAgICBwcm92aWRlOiBVc2VyTm90aWZpY2F0aW9uUHJlZmVyZW5jZUFkYXB0ZXIsXG4gICAgICB1c2VDbGFzczogT2NjVXNlck5vdGlmaWNhdGlvblByZWZlcmVuY2VBZGFwdGVyLFxuICAgIH0sXG4gICAgeyBwcm92aWRlOiBVc2VySW50ZXJlc3RzQWRhcHRlciwgdXNlQ2xhc3M6IE9jY1VzZXJJbnRlcmVzdHNBZGFwdGVyIH0sXG4gICAge1xuICAgICAgcHJvdmlkZTogUFJPRFVDVF9JTlRFUkVTVFNfTk9STUFMSVpFUixcbiAgICAgIHVzZUV4aXN0aW5nOiBPY2NVc2VySW50ZXJlc3RzTm9ybWFsaXplcixcbiAgICAgIG11bHRpOiB0cnVlLFxuICAgIH0sXG4gICAge1xuICAgICAgcHJvdmlkZTogT1JERVJfUkVUVVJOX1JFUVVFU1RfTk9STUFMSVpFUixcbiAgICAgIHVzZUV4aXN0aW5nOiBPY2NSZXR1cm5SZXF1ZXN0Tm9ybWFsaXplcixcbiAgICAgIG11bHRpOiB0cnVlLFxuICAgIH0sXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIFVzZXJPY2NNb2R1bGUge31cbiJdfQ==