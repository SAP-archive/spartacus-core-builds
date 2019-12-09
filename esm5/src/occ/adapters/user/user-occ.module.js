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
import { UserNotificationPreferenceAdapter } from '../../../user/connectors/notification-preference/user-notification-preference.adapter';
import { OccUserNotificationPreferenceAdapter } from './occ-user-notification-preference.adapter';
import { OccUserInterestsAdapter } from './occ-user-interests.adapter';
import { UserInterestsAdapter } from '../../../user/connectors/interests/user-interests.adapter';
import { OccUserInterestsNormalizer } from './converters/occ-user-interests-normalizer';
import { PRODUCT_INTERESTS_NORMALIZER } from '../../../user/connectors/interests/converters';
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
                    ],
                },] }
    ];
    return UserOccModule;
}());
export { UserOccModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1vY2MubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL29jYy9hZGFwdGVycy91c2VyL3VzZXItb2NjLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0sNEVBQTRFLENBQUM7QUFDOUgsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQzdELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHVEQUF1RCxDQUFDO0FBQzNGLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHVEQUF1RCxDQUFDO0FBQzNGLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBQ3JGLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHVEQUF1RCxDQUFDO0FBQzNGLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUN6RSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNqRSxPQUFPLEVBQUUsbUNBQW1DLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUNoRyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNuRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNuRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMvRCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNuRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDcEQsT0FBTyxFQUFFLGlDQUFpQyxFQUFFLE1BQU0sdUZBQXVGLENBQUM7QUFDMUksT0FBTyxFQUFFLG9DQUFvQyxFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDbEcsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDdkUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMkRBQTJELENBQUM7QUFDakcsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDeEYsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFFN0Y7SUFBQTtJQStCNEIsQ0FBQzs7Z0JBL0I1QixRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osZ0JBQWdCO3dCQUNoQixZQUFZLENBQUMsVUFBVSxDQUFDLG9CQUFvQixDQUFDO3FCQUM5QztvQkFDRCxTQUFTLEVBQUU7d0JBQ1QsRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBRSxjQUFjLEVBQUU7d0JBQ2xELEVBQUUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLFFBQVEsRUFBRSxxQkFBcUIsRUFBRTt3QkFDaEUsRUFBRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsUUFBUSxFQUFFLHFCQUFxQixFQUFFO3dCQUNoRTs0QkFDRSxPQUFPLEVBQUUsZ0NBQWdDOzRCQUN6QyxRQUFRLEVBQUUsbUNBQW1DO3lCQUM5Qzt3QkFDRDs0QkFDRSxPQUFPLEVBQUUsa0JBQWtCOzRCQUMzQixRQUFRLEVBQUUscUJBQXFCO3lCQUNoQzt3QkFDRCxFQUFFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxRQUFRLEVBQUUsbUJBQW1CLEVBQUU7d0JBQzVEOzRCQUNFLE9BQU8sRUFBRSxpQ0FBaUM7NEJBQzFDLFFBQVEsRUFBRSxvQ0FBb0M7eUJBQy9DO3dCQUNELEVBQUUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLFFBQVEsRUFBRSx1QkFBdUIsRUFBRTt3QkFDcEU7NEJBQ0UsT0FBTyxFQUFFLDRCQUE0Qjs0QkFDckMsV0FBVyxFQUFFLDBCQUEwQjs0QkFDdkMsS0FBSyxFQUFFLElBQUk7eUJBQ1o7cUJBQ0Y7aUJBQ0Y7O0lBQzJCLG9CQUFDO0NBQUEsQUEvQjdCLElBK0I2QjtTQUFoQixhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQW5vbnltb3VzQ29uc2VudFRlbXBsYXRlc0FkYXB0ZXIgfSBmcm9tICcuLi8uLi8uLi9hbm9ueW1vdXMtY29uc2VudHMvY29ubmVjdG9ycy9hbm9ueW1vdXMtY29uc2VudC10ZW1wbGF0ZXMuYWRhcHRlcic7XG5pbXBvcnQgeyBDb25maWdNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi9jb25maWcvY29uZmlnLm1vZHVsZSc7XG5pbXBvcnQgeyBVc2VyQWRkcmVzc0FkYXB0ZXIgfSBmcm9tICcuLi8uLi8uLi91c2VyL2Nvbm5lY3RvcnMvYWRkcmVzcy91c2VyLWFkZHJlc3MuYWRhcHRlcic7XG5pbXBvcnQgeyBVc2VyQ29uc2VudEFkYXB0ZXIgfSBmcm9tICcuLi8uLi8uLi91c2VyL2Nvbm5lY3RvcnMvY29uc2VudC91c2VyLWNvbnNlbnQuYWRhcHRlcic7XG5pbXBvcnQgeyBVc2VyT3JkZXJBZGFwdGVyIH0gZnJvbSAnLi4vLi4vLi4vdXNlci9jb25uZWN0b3JzL29yZGVyL3VzZXItb3JkZXIuYWRhcHRlcic7XG5pbXBvcnQgeyBVc2VyUGF5bWVudEFkYXB0ZXIgfSBmcm9tICcuLi8uLi8uLi91c2VyL2Nvbm5lY3RvcnMvcGF5bWVudC91c2VyLXBheW1lbnQuYWRhcHRlcic7XG5pbXBvcnQgeyBVc2VyQWRhcHRlciB9IGZyb20gJy4uLy4uLy4uL3VzZXIvY29ubmVjdG9ycy91c2VyL3VzZXIuYWRhcHRlcic7XG5pbXBvcnQgeyBkZWZhdWx0T2NjVXNlckNvbmZpZyB9IGZyb20gJy4vZGVmYXVsdC1vY2MtdXNlci1jb25maWcnO1xuaW1wb3J0IHsgT2NjQW5vbnltb3VzQ29uc2VudFRlbXBsYXRlc0FkYXB0ZXIgfSBmcm9tICcuL29jYy1hbm9ueW1vdXMtY29uc2VudC10ZW1wbGF0ZXMuYWRhcHRlcic7XG5pbXBvcnQgeyBPY2NVc2VyQWRkcmVzc0FkYXB0ZXIgfSBmcm9tICcuL29jYy11c2VyLWFkZHJlc3MuYWRhcHRlcic7XG5pbXBvcnQgeyBPY2NVc2VyQ29uc2VudEFkYXB0ZXIgfSBmcm9tICcuL29jYy11c2VyLWNvbnNlbnQuYWRhcHRlcic7XG5pbXBvcnQgeyBPY2NVc2VyT3JkZXJBZGFwdGVyIH0gZnJvbSAnLi9vY2MtdXNlci1vcmRlci5hZGFwdGVyJztcbmltcG9ydCB7IE9jY1VzZXJQYXltZW50QWRhcHRlciB9IGZyb20gJy4vb2NjLXVzZXItcGF5bWVudC5hZGFwdGVyJztcbmltcG9ydCB7IE9jY1VzZXJBZGFwdGVyIH0gZnJvbSAnLi9vY2MtdXNlci5hZGFwdGVyJztcbmltcG9ydCB7IFVzZXJOb3RpZmljYXRpb25QcmVmZXJlbmNlQWRhcHRlciB9IGZyb20gJy4uLy4uLy4uL3VzZXIvY29ubmVjdG9ycy9ub3RpZmljYXRpb24tcHJlZmVyZW5jZS91c2VyLW5vdGlmaWNhdGlvbi1wcmVmZXJlbmNlLmFkYXB0ZXInO1xuaW1wb3J0IHsgT2NjVXNlck5vdGlmaWNhdGlvblByZWZlcmVuY2VBZGFwdGVyIH0gZnJvbSAnLi9vY2MtdXNlci1ub3RpZmljYXRpb24tcHJlZmVyZW5jZS5hZGFwdGVyJztcbmltcG9ydCB7IE9jY1VzZXJJbnRlcmVzdHNBZGFwdGVyIH0gZnJvbSAnLi9vY2MtdXNlci1pbnRlcmVzdHMuYWRhcHRlcic7XG5pbXBvcnQgeyBVc2VySW50ZXJlc3RzQWRhcHRlciB9IGZyb20gJy4uLy4uLy4uL3VzZXIvY29ubmVjdG9ycy9pbnRlcmVzdHMvdXNlci1pbnRlcmVzdHMuYWRhcHRlcic7XG5pbXBvcnQgeyBPY2NVc2VySW50ZXJlc3RzTm9ybWFsaXplciB9IGZyb20gJy4vY29udmVydGVycy9vY2MtdXNlci1pbnRlcmVzdHMtbm9ybWFsaXplcic7XG5pbXBvcnQgeyBQUk9EVUNUX0lOVEVSRVNUU19OT1JNQUxJWkVSIH0gZnJvbSAnLi4vLi4vLi4vdXNlci9jb25uZWN0b3JzL2ludGVyZXN0cy9jb252ZXJ0ZXJzJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBIdHRwQ2xpZW50TW9kdWxlLFxuICAgIENvbmZpZ01vZHVsZS53aXRoQ29uZmlnKGRlZmF1bHRPY2NVc2VyQ29uZmlnKSxcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgeyBwcm92aWRlOiBVc2VyQWRhcHRlciwgdXNlQ2xhc3M6IE9jY1VzZXJBZGFwdGVyIH0sXG4gICAgeyBwcm92aWRlOiBVc2VyQWRkcmVzc0FkYXB0ZXIsIHVzZUNsYXNzOiBPY2NVc2VyQWRkcmVzc0FkYXB0ZXIgfSxcbiAgICB7IHByb3ZpZGU6IFVzZXJDb25zZW50QWRhcHRlciwgdXNlQ2xhc3M6IE9jY1VzZXJDb25zZW50QWRhcHRlciB9LFxuICAgIHtcbiAgICAgIHByb3ZpZGU6IEFub255bW91c0NvbnNlbnRUZW1wbGF0ZXNBZGFwdGVyLFxuICAgICAgdXNlQ2xhc3M6IE9jY0Fub255bW91c0NvbnNlbnRUZW1wbGF0ZXNBZGFwdGVyLFxuICAgIH0sXG4gICAge1xuICAgICAgcHJvdmlkZTogVXNlclBheW1lbnRBZGFwdGVyLFxuICAgICAgdXNlQ2xhc3M6IE9jY1VzZXJQYXltZW50QWRhcHRlcixcbiAgICB9LFxuICAgIHsgcHJvdmlkZTogVXNlck9yZGVyQWRhcHRlciwgdXNlQ2xhc3M6IE9jY1VzZXJPcmRlckFkYXB0ZXIgfSxcbiAgICB7XG4gICAgICBwcm92aWRlOiBVc2VyTm90aWZpY2F0aW9uUHJlZmVyZW5jZUFkYXB0ZXIsXG4gICAgICB1c2VDbGFzczogT2NjVXNlck5vdGlmaWNhdGlvblByZWZlcmVuY2VBZGFwdGVyLFxuICAgIH0sXG4gICAgeyBwcm92aWRlOiBVc2VySW50ZXJlc3RzQWRhcHRlciwgdXNlQ2xhc3M6IE9jY1VzZXJJbnRlcmVzdHNBZGFwdGVyIH0sXG4gICAge1xuICAgICAgcHJvdmlkZTogUFJPRFVDVF9JTlRFUkVTVFNfTk9STUFMSVpFUixcbiAgICAgIHVzZUV4aXN0aW5nOiBPY2NVc2VySW50ZXJlc3RzTm9ybWFsaXplcixcbiAgICAgIG11bHRpOiB0cnVlLFxuICAgIH0sXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIFVzZXJPY2NNb2R1bGUge31cbiJdfQ==