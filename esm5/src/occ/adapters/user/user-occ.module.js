/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { UserOrderAdapter } from '../../../user/connectors/order/user-order.adapter';
import { OccUserOrderAdapter } from './occ-user-order.adapter';
import { UserAddressAdapter } from '../../../user/connectors/address/user-address.adapter';
import { OccUserAddressAdapter } from './occ-user-address.adapter';
import { UserAdapter } from '../../../user/connectors/user/user.adapter';
import { OccUserAdapter } from './occ-user.adapter';
import { UserPaymentAdapter } from '../../../user/connectors/payment/user-payment.adapter';
import { OccUserPaymentAdapter } from './occ-user-payment.adapter';
import { OccUserConsentAdapter } from './occ-user-consent.adapter';
import { UserConsentAdapter } from '../../../user/connectors/consent/user-consent.adapter';
var UserOccModule = /** @class */ (function () {
    function UserOccModule() {
    }
    UserOccModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, HttpClientModule],
                    providers: [
                        { provide: UserAdapter, useClass: OccUserAdapter },
                        { provide: UserAddressAdapter, useClass: OccUserAddressAdapter },
                        { provide: UserConsentAdapter, useClass: OccUserConsentAdapter },
                        {
                            provide: UserPaymentAdapter,
                            useClass: OccUserPaymentAdapter,
                        },
                        { provide: UserOrderAdapter, useClass: OccUserOrderAdapter },
                    ],
                },] }
    ];
    return UserOccModule;
}());
export { UserOccModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1vY2MubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL29jYy9hZGFwdGVycy91c2VyL3VzZXItb2NjLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFeEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFDckYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDL0QsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sdURBQXVELENBQUM7QUFDM0YsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDbkUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNwRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx1REFBdUQsQ0FBQztBQUMzRixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNuRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNuRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx1REFBdUQsQ0FBQztBQUUzRjtJQUFBO0lBYTRCLENBQUM7O2dCQWI1QixRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLGdCQUFnQixDQUFDO29CQUN6QyxTQUFTLEVBQUU7d0JBQ1QsRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBRSxjQUFjLEVBQUU7d0JBQ2xELEVBQUUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLFFBQVEsRUFBRSxxQkFBcUIsRUFBRTt3QkFDaEUsRUFBRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsUUFBUSxFQUFFLHFCQUFxQixFQUFFO3dCQUNoRTs0QkFDRSxPQUFPLEVBQUUsa0JBQWtCOzRCQUMzQixRQUFRLEVBQUUscUJBQXFCO3lCQUNoQzt3QkFDRCxFQUFFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxRQUFRLEVBQUUsbUJBQW1CLEVBQUU7cUJBQzdEO2lCQUNGOztJQUMyQixvQkFBQztDQUFBLEFBYjdCLElBYTZCO1NBQWhCLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5cbmltcG9ydCB7IFVzZXJPcmRlckFkYXB0ZXIgfSBmcm9tICcuLi8uLi8uLi91c2VyL2Nvbm5lY3RvcnMvb3JkZXIvdXNlci1vcmRlci5hZGFwdGVyJztcbmltcG9ydCB7IE9jY1VzZXJPcmRlckFkYXB0ZXIgfSBmcm9tICcuL29jYy11c2VyLW9yZGVyLmFkYXB0ZXInO1xuaW1wb3J0IHsgVXNlckFkZHJlc3NBZGFwdGVyIH0gZnJvbSAnLi4vLi4vLi4vdXNlci9jb25uZWN0b3JzL2FkZHJlc3MvdXNlci1hZGRyZXNzLmFkYXB0ZXInO1xuaW1wb3J0IHsgT2NjVXNlckFkZHJlc3NBZGFwdGVyIH0gZnJvbSAnLi9vY2MtdXNlci1hZGRyZXNzLmFkYXB0ZXInO1xuaW1wb3J0IHsgVXNlckFkYXB0ZXIgfSBmcm9tICcuLi8uLi8uLi91c2VyL2Nvbm5lY3RvcnMvdXNlci91c2VyLmFkYXB0ZXInO1xuaW1wb3J0IHsgT2NjVXNlckFkYXB0ZXIgfSBmcm9tICcuL29jYy11c2VyLmFkYXB0ZXInO1xuaW1wb3J0IHsgVXNlclBheW1lbnRBZGFwdGVyIH0gZnJvbSAnLi4vLi4vLi4vdXNlci9jb25uZWN0b3JzL3BheW1lbnQvdXNlci1wYXltZW50LmFkYXB0ZXInO1xuaW1wb3J0IHsgT2NjVXNlclBheW1lbnRBZGFwdGVyIH0gZnJvbSAnLi9vY2MtdXNlci1wYXltZW50LmFkYXB0ZXInO1xuaW1wb3J0IHsgT2NjVXNlckNvbnNlbnRBZGFwdGVyIH0gZnJvbSAnLi9vY2MtdXNlci1jb25zZW50LmFkYXB0ZXInO1xuaW1wb3J0IHsgVXNlckNvbnNlbnRBZGFwdGVyIH0gZnJvbSAnLi4vLi4vLi4vdXNlci9jb25uZWN0b3JzL2NvbnNlbnQvdXNlci1jb25zZW50LmFkYXB0ZXInO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBIdHRwQ2xpZW50TW9kdWxlXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgeyBwcm92aWRlOiBVc2VyQWRhcHRlciwgdXNlQ2xhc3M6IE9jY1VzZXJBZGFwdGVyIH0sXG4gICAgeyBwcm92aWRlOiBVc2VyQWRkcmVzc0FkYXB0ZXIsIHVzZUNsYXNzOiBPY2NVc2VyQWRkcmVzc0FkYXB0ZXIgfSxcbiAgICB7IHByb3ZpZGU6IFVzZXJDb25zZW50QWRhcHRlciwgdXNlQ2xhc3M6IE9jY1VzZXJDb25zZW50QWRhcHRlciB9LFxuICAgIHtcbiAgICAgIHByb3ZpZGU6IFVzZXJQYXltZW50QWRhcHRlcixcbiAgICAgIHVzZUNsYXNzOiBPY2NVc2VyUGF5bWVudEFkYXB0ZXIsXG4gICAgfSxcbiAgICB7IHByb3ZpZGU6IFVzZXJPcmRlckFkYXB0ZXIsIHVzZUNsYXNzOiBPY2NVc2VyT3JkZXJBZGFwdGVyIH0sXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIFVzZXJPY2NNb2R1bGUge31cbiJdfQ==