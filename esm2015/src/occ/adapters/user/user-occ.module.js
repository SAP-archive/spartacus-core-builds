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
export class UserOccModule {
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
                ],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1vY2MubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL29jYy9hZGFwdGVycy91c2VyL3VzZXItb2NjLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0sNEVBQTRFLENBQUM7QUFDOUgsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQzdELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHVEQUF1RCxDQUFDO0FBQzNGLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHVEQUF1RCxDQUFDO0FBQzNGLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBQ3JGLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHVEQUF1RCxDQUFDO0FBQzNGLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUN6RSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNqRSxPQUFPLEVBQUUsbUNBQW1DLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUNoRyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNuRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNuRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMvRCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNuRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUF1QnBELE1BQU0sT0FBTyxhQUFhOzs7WUFyQnpCLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWixnQkFBZ0I7b0JBQ2hCLFlBQVksQ0FBQyxVQUFVLENBQUMsb0JBQW9CLENBQUM7aUJBQzlDO2dCQUNELFNBQVMsRUFBRTtvQkFDVCxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsUUFBUSxFQUFFLGNBQWMsRUFBRTtvQkFDbEQsRUFBRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsUUFBUSxFQUFFLHFCQUFxQixFQUFFO29CQUNoRSxFQUFFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxRQUFRLEVBQUUscUJBQXFCLEVBQUU7b0JBQ2hFO3dCQUNFLE9BQU8sRUFBRSxnQ0FBZ0M7d0JBQ3pDLFFBQVEsRUFBRSxtQ0FBbUM7cUJBQzlDO29CQUNEO3dCQUNFLE9BQU8sRUFBRSxrQkFBa0I7d0JBQzNCLFFBQVEsRUFBRSxxQkFBcUI7cUJBQ2hDO29CQUNELEVBQUUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLFFBQVEsRUFBRSxtQkFBbUIsRUFBRTtpQkFDN0Q7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFub255bW91c0NvbnNlbnRUZW1wbGF0ZXNBZGFwdGVyIH0gZnJvbSAnLi4vLi4vLi4vYW5vbnltb3VzLWNvbnNlbnRzL2Nvbm5lY3RvcnMvYW5vbnltb3VzLWNvbnNlbnQtdGVtcGxhdGVzLmFkYXB0ZXInO1xuaW1wb3J0IHsgQ29uZmlnTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vY29uZmlnL2NvbmZpZy5tb2R1bGUnO1xuaW1wb3J0IHsgVXNlckFkZHJlc3NBZGFwdGVyIH0gZnJvbSAnLi4vLi4vLi4vdXNlci9jb25uZWN0b3JzL2FkZHJlc3MvdXNlci1hZGRyZXNzLmFkYXB0ZXInO1xuaW1wb3J0IHsgVXNlckNvbnNlbnRBZGFwdGVyIH0gZnJvbSAnLi4vLi4vLi4vdXNlci9jb25uZWN0b3JzL2NvbnNlbnQvdXNlci1jb25zZW50LmFkYXB0ZXInO1xuaW1wb3J0IHsgVXNlck9yZGVyQWRhcHRlciB9IGZyb20gJy4uLy4uLy4uL3VzZXIvY29ubmVjdG9ycy9vcmRlci91c2VyLW9yZGVyLmFkYXB0ZXInO1xuaW1wb3J0IHsgVXNlclBheW1lbnRBZGFwdGVyIH0gZnJvbSAnLi4vLi4vLi4vdXNlci9jb25uZWN0b3JzL3BheW1lbnQvdXNlci1wYXltZW50LmFkYXB0ZXInO1xuaW1wb3J0IHsgVXNlckFkYXB0ZXIgfSBmcm9tICcuLi8uLi8uLi91c2VyL2Nvbm5lY3RvcnMvdXNlci91c2VyLmFkYXB0ZXInO1xuaW1wb3J0IHsgZGVmYXVsdE9jY1VzZXJDb25maWcgfSBmcm9tICcuL2RlZmF1bHQtb2NjLXVzZXItY29uZmlnJztcbmltcG9ydCB7IE9jY0Fub255bW91c0NvbnNlbnRUZW1wbGF0ZXNBZGFwdGVyIH0gZnJvbSAnLi9vY2MtYW5vbnltb3VzLWNvbnNlbnQtdGVtcGxhdGVzLmFkYXB0ZXInO1xuaW1wb3J0IHsgT2NjVXNlckFkZHJlc3NBZGFwdGVyIH0gZnJvbSAnLi9vY2MtdXNlci1hZGRyZXNzLmFkYXB0ZXInO1xuaW1wb3J0IHsgT2NjVXNlckNvbnNlbnRBZGFwdGVyIH0gZnJvbSAnLi9vY2MtdXNlci1jb25zZW50LmFkYXB0ZXInO1xuaW1wb3J0IHsgT2NjVXNlck9yZGVyQWRhcHRlciB9IGZyb20gJy4vb2NjLXVzZXItb3JkZXIuYWRhcHRlcic7XG5pbXBvcnQgeyBPY2NVc2VyUGF5bWVudEFkYXB0ZXIgfSBmcm9tICcuL29jYy11c2VyLXBheW1lbnQuYWRhcHRlcic7XG5pbXBvcnQgeyBPY2NVc2VyQWRhcHRlciB9IGZyb20gJy4vb2NjLXVzZXIuYWRhcHRlcic7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgSHR0cENsaWVudE1vZHVsZSxcbiAgICBDb25maWdNb2R1bGUud2l0aENvbmZpZyhkZWZhdWx0T2NjVXNlckNvbmZpZyksXG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIHsgcHJvdmlkZTogVXNlckFkYXB0ZXIsIHVzZUNsYXNzOiBPY2NVc2VyQWRhcHRlciB9LFxuICAgIHsgcHJvdmlkZTogVXNlckFkZHJlc3NBZGFwdGVyLCB1c2VDbGFzczogT2NjVXNlckFkZHJlc3NBZGFwdGVyIH0sXG4gICAgeyBwcm92aWRlOiBVc2VyQ29uc2VudEFkYXB0ZXIsIHVzZUNsYXNzOiBPY2NVc2VyQ29uc2VudEFkYXB0ZXIgfSxcbiAgICB7XG4gICAgICBwcm92aWRlOiBBbm9ueW1vdXNDb25zZW50VGVtcGxhdGVzQWRhcHRlcixcbiAgICAgIHVzZUNsYXNzOiBPY2NBbm9ueW1vdXNDb25zZW50VGVtcGxhdGVzQWRhcHRlcixcbiAgICB9LFxuICAgIHtcbiAgICAgIHByb3ZpZGU6IFVzZXJQYXltZW50QWRhcHRlcixcbiAgICAgIHVzZUNsYXNzOiBPY2NVc2VyUGF5bWVudEFkYXB0ZXIsXG4gICAgfSxcbiAgICB7IHByb3ZpZGU6IFVzZXJPcmRlckFkYXB0ZXIsIHVzZUNsYXNzOiBPY2NVc2VyT3JkZXJBZGFwdGVyIH0sXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIFVzZXJPY2NNb2R1bGUge31cbiJdfQ==