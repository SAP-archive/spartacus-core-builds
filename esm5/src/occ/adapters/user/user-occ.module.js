/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
    UserOccModule.decorators = [
        { type: NgModule, args: [{
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
                },] }
    ];
    return UserOccModule;
}());
export { UserOccModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1vY2MubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL29jYy9hZGFwdGVycy91c2VyL3VzZXItb2NjLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0sNEVBQTRFLENBQUM7QUFDOUgsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQzdELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHVEQUF1RCxDQUFDO0FBQzNGLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHVEQUF1RCxDQUFDO0FBQzNGLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBQ3JGLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHVEQUF1RCxDQUFDO0FBQzNGLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUN6RSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNqRSxPQUFPLEVBQUUsbUNBQW1DLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUNoRyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNuRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNuRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMvRCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNuRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDcEQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sa0VBQWtFLENBQUM7QUFDekcsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDL0UsT0FBTyxFQUFFLGlDQUFpQyxFQUFFLE1BQU0sdUZBQXVGLENBQUM7QUFDMUksT0FBTyxFQUFFLG9DQUFvQyxFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDbEcsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDdkUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMkRBQTJELENBQUM7QUFDakcsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDeEYsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDN0YsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDNUYsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFaEU7SUFBQTtJQXFDNEIsQ0FBQzs7Z0JBckM1QixRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osZ0JBQWdCO3dCQUNoQixZQUFZLENBQUMsVUFBVSxDQUFDLG9CQUFvQixDQUFDO3FCQUM5QztvQkFDRCxTQUFTLEVBQUU7d0JBQ1QsRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBRSxjQUFjLEVBQUU7d0JBQ2xELEVBQUUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLFFBQVEsRUFBRSxxQkFBcUIsRUFBRTt3QkFDaEUsRUFBRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsUUFBUSxFQUFFLHFCQUFxQixFQUFFO3dCQUNoRTs0QkFDRSxPQUFPLEVBQUUsZ0NBQWdDOzRCQUN6QyxRQUFRLEVBQUUsbUNBQW1DO3lCQUM5Qzt3QkFDRDs0QkFDRSxPQUFPLEVBQUUsa0JBQWtCOzRCQUMzQixRQUFRLEVBQUUscUJBQXFCO3lCQUNoQzt3QkFDRCxFQUFFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxRQUFRLEVBQUUsbUJBQW1CLEVBQUU7d0JBQzVELEVBQUUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLFFBQVEsRUFBRSx3QkFBd0IsRUFBRTt3QkFDdEU7NEJBQ0UsT0FBTyxFQUFFLGlDQUFpQzs0QkFDMUMsUUFBUSxFQUFFLG9DQUFvQzt5QkFDL0M7d0JBQ0QsRUFBRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsUUFBUSxFQUFFLHVCQUF1QixFQUFFO3dCQUNwRTs0QkFDRSxPQUFPLEVBQUUsNEJBQTRCOzRCQUNyQyxXQUFXLEVBQUUsMEJBQTBCOzRCQUN2QyxLQUFLLEVBQUUsSUFBSTt5QkFDWjt3QkFDRDs0QkFDRSxPQUFPLEVBQUUsK0JBQStCOzRCQUN4QyxXQUFXLEVBQUUsMEJBQTBCOzRCQUN2QyxLQUFLLEVBQUUsSUFBSTt5QkFDWjtxQkFDRjtpQkFDRjs7SUFDMkIsb0JBQUM7Q0FBQSxBQXJDN0IsSUFxQzZCO1NBQWhCLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBbm9ueW1vdXNDb25zZW50VGVtcGxhdGVzQWRhcHRlciB9IGZyb20gJy4uLy4uLy4uL2Fub255bW91cy1jb25zZW50cy9jb25uZWN0b3JzL2Fub255bW91cy1jb25zZW50LXRlbXBsYXRlcy5hZGFwdGVyJztcbmltcG9ydCB7IENvbmZpZ01vZHVsZSB9IGZyb20gJy4uLy4uLy4uL2NvbmZpZy9jb25maWcubW9kdWxlJztcbmltcG9ydCB7IFVzZXJBZGRyZXNzQWRhcHRlciB9IGZyb20gJy4uLy4uLy4uL3VzZXIvY29ubmVjdG9ycy9hZGRyZXNzL3VzZXItYWRkcmVzcy5hZGFwdGVyJztcbmltcG9ydCB7IFVzZXJDb25zZW50QWRhcHRlciB9IGZyb20gJy4uLy4uLy4uL3VzZXIvY29ubmVjdG9ycy9jb25zZW50L3VzZXItY29uc2VudC5hZGFwdGVyJztcbmltcG9ydCB7IFVzZXJPcmRlckFkYXB0ZXIgfSBmcm9tICcuLi8uLi8uLi91c2VyL2Nvbm5lY3RvcnMvb3JkZXIvdXNlci1vcmRlci5hZGFwdGVyJztcbmltcG9ydCB7IFVzZXJQYXltZW50QWRhcHRlciB9IGZyb20gJy4uLy4uLy4uL3VzZXIvY29ubmVjdG9ycy9wYXltZW50L3VzZXItcGF5bWVudC5hZGFwdGVyJztcbmltcG9ydCB7IFVzZXJBZGFwdGVyIH0gZnJvbSAnLi4vLi4vLi4vdXNlci9jb25uZWN0b3JzL3VzZXIvdXNlci5hZGFwdGVyJztcbmltcG9ydCB7IGRlZmF1bHRPY2NVc2VyQ29uZmlnIH0gZnJvbSAnLi9kZWZhdWx0LW9jYy11c2VyLWNvbmZpZyc7XG5pbXBvcnQgeyBPY2NBbm9ueW1vdXNDb25zZW50VGVtcGxhdGVzQWRhcHRlciB9IGZyb20gJy4vb2NjLWFub255bW91cy1jb25zZW50LXRlbXBsYXRlcy5hZGFwdGVyJztcbmltcG9ydCB7IE9jY1VzZXJBZGRyZXNzQWRhcHRlciB9IGZyb20gJy4vb2NjLXVzZXItYWRkcmVzcy5hZGFwdGVyJztcbmltcG9ydCB7IE9jY1VzZXJDb25zZW50QWRhcHRlciB9IGZyb20gJy4vb2NjLXVzZXItY29uc2VudC5hZGFwdGVyJztcbmltcG9ydCB7IE9jY1VzZXJPcmRlckFkYXB0ZXIgfSBmcm9tICcuL29jYy11c2VyLW9yZGVyLmFkYXB0ZXInO1xuaW1wb3J0IHsgT2NjVXNlclBheW1lbnRBZGFwdGVyIH0gZnJvbSAnLi9vY2MtdXNlci1wYXltZW50LmFkYXB0ZXInO1xuaW1wb3J0IHsgT2NjVXNlckFkYXB0ZXIgfSBmcm9tICcuL29jYy11c2VyLmFkYXB0ZXInO1xuaW1wb3J0IHsgQ3VzdG9tZXJDb3Vwb25BZGFwdGVyIH0gZnJvbSAnLi4vLi4vLi4vdXNlci9jb25uZWN0b3JzL2N1c3RvbWVyLWNvdXBvbi9jdXN0b21lci1jb3Vwb24uYWRhcHRlcic7XG5pbXBvcnQgeyBPY2NDdXN0b21lckNvdXBvbkFkYXB0ZXIgfSBmcm9tICcuLi91c2VyL29jYy1jdXN0b21lci1jb3Vwb24uYWRhcHRlcic7XG5pbXBvcnQgeyBVc2VyTm90aWZpY2F0aW9uUHJlZmVyZW5jZUFkYXB0ZXIgfSBmcm9tICcuLi8uLi8uLi91c2VyL2Nvbm5lY3RvcnMvbm90aWZpY2F0aW9uLXByZWZlcmVuY2UvdXNlci1ub3RpZmljYXRpb24tcHJlZmVyZW5jZS5hZGFwdGVyJztcbmltcG9ydCB7IE9jY1VzZXJOb3RpZmljYXRpb25QcmVmZXJlbmNlQWRhcHRlciB9IGZyb20gJy4vb2NjLXVzZXItbm90aWZpY2F0aW9uLXByZWZlcmVuY2UuYWRhcHRlcic7XG5pbXBvcnQgeyBPY2NVc2VySW50ZXJlc3RzQWRhcHRlciB9IGZyb20gJy4vb2NjLXVzZXItaW50ZXJlc3RzLmFkYXB0ZXInO1xuaW1wb3J0IHsgVXNlckludGVyZXN0c0FkYXB0ZXIgfSBmcm9tICcuLi8uLi8uLi91c2VyL2Nvbm5lY3RvcnMvaW50ZXJlc3RzL3VzZXItaW50ZXJlc3RzLmFkYXB0ZXInO1xuaW1wb3J0IHsgT2NjVXNlckludGVyZXN0c05vcm1hbGl6ZXIgfSBmcm9tICcuL2NvbnZlcnRlcnMvb2NjLXVzZXItaW50ZXJlc3RzLW5vcm1hbGl6ZXInO1xuaW1wb3J0IHsgUFJPRFVDVF9JTlRFUkVTVFNfTk9STUFMSVpFUiB9IGZyb20gJy4uLy4uLy4uL3VzZXIvY29ubmVjdG9ycy9pbnRlcmVzdHMvY29udmVydGVycyc7XG5pbXBvcnQgeyBPUkRFUl9SRVRVUk5fUkVRVUVTVF9OT1JNQUxJWkVSIH0gZnJvbSAnLi4vLi4vLi4vdXNlci9jb25uZWN0b3JzL29yZGVyL2NvbnZlcnRlcnMnO1xuaW1wb3J0IHsgT2NjUmV0dXJuUmVxdWVzdE5vcm1hbGl6ZXIgfSBmcm9tICcuL2NvbnZlcnRlcnMvaW5kZXgnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEh0dHBDbGllbnRNb2R1bGUsXG4gICAgQ29uZmlnTW9kdWxlLndpdGhDb25maWcoZGVmYXVsdE9jY1VzZXJDb25maWcpLFxuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICB7IHByb3ZpZGU6IFVzZXJBZGFwdGVyLCB1c2VDbGFzczogT2NjVXNlckFkYXB0ZXIgfSxcbiAgICB7IHByb3ZpZGU6IFVzZXJBZGRyZXNzQWRhcHRlciwgdXNlQ2xhc3M6IE9jY1VzZXJBZGRyZXNzQWRhcHRlciB9LFxuICAgIHsgcHJvdmlkZTogVXNlckNvbnNlbnRBZGFwdGVyLCB1c2VDbGFzczogT2NjVXNlckNvbnNlbnRBZGFwdGVyIH0sXG4gICAge1xuICAgICAgcHJvdmlkZTogQW5vbnltb3VzQ29uc2VudFRlbXBsYXRlc0FkYXB0ZXIsXG4gICAgICB1c2VDbGFzczogT2NjQW5vbnltb3VzQ29uc2VudFRlbXBsYXRlc0FkYXB0ZXIsXG4gICAgfSxcbiAgICB7XG4gICAgICBwcm92aWRlOiBVc2VyUGF5bWVudEFkYXB0ZXIsXG4gICAgICB1c2VDbGFzczogT2NjVXNlclBheW1lbnRBZGFwdGVyLFxuICAgIH0sXG4gICAgeyBwcm92aWRlOiBVc2VyT3JkZXJBZGFwdGVyLCB1c2VDbGFzczogT2NjVXNlck9yZGVyQWRhcHRlciB9LFxuICAgIHsgcHJvdmlkZTogQ3VzdG9tZXJDb3Vwb25BZGFwdGVyLCB1c2VDbGFzczogT2NjQ3VzdG9tZXJDb3Vwb25BZGFwdGVyIH0sXG4gICAge1xuICAgICAgcHJvdmlkZTogVXNlck5vdGlmaWNhdGlvblByZWZlcmVuY2VBZGFwdGVyLFxuICAgICAgdXNlQ2xhc3M6IE9jY1VzZXJOb3RpZmljYXRpb25QcmVmZXJlbmNlQWRhcHRlcixcbiAgICB9LFxuICAgIHsgcHJvdmlkZTogVXNlckludGVyZXN0c0FkYXB0ZXIsIHVzZUNsYXNzOiBPY2NVc2VySW50ZXJlc3RzQWRhcHRlciB9LFxuICAgIHtcbiAgICAgIHByb3ZpZGU6IFBST0RVQ1RfSU5URVJFU1RTX05PUk1BTElaRVIsXG4gICAgICB1c2VFeGlzdGluZzogT2NjVXNlckludGVyZXN0c05vcm1hbGl6ZXIsXG4gICAgICBtdWx0aTogdHJ1ZSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHByb3ZpZGU6IE9SREVSX1JFVFVSTl9SRVFVRVNUX05PUk1BTElaRVIsXG4gICAgICB1c2VFeGlzdGluZzogT2NjUmV0dXJuUmVxdWVzdE5vcm1hbGl6ZXIsXG4gICAgICBtdWx0aTogdHJ1ZSxcbiAgICB9LFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBVc2VyT2NjTW9kdWxlIHt9XG4iXX0=