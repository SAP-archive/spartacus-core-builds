/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { OccModule } from '../../occ/occ.module';
import { OccUserService } from './user.service';
import { OrderAdapter } from '../connectors/order.adapter';
import { OccOrderAdapter } from './occ-order.adapter';
import { ORDER_NORMALIZER } from '../connectors/converters';
import { OccOrderNormalizer } from './converters/occ-order-normalizer';
var UserOccModule = /** @class */ (function () {
    function UserOccModule() {
    }
    UserOccModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, HttpClientModule, OccModule],
                    providers: [
                        OccUserService,
                        { provide: OrderAdapter, useClass: OccOrderAdapter },
                        { provide: ORDER_NORMALIZER, useClass: OccOrderNormalizer, multi: true },
                    ],
                },] }
    ];
    return UserOccModule;
}());
export { UserOccModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1vY2MubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3VzZXIvb2NjL3VzZXItb2NjLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFeEQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNoRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzVELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBRXZFO0lBQUE7SUFRNEIsQ0FBQzs7Z0JBUjVCLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsZ0JBQWdCLEVBQUUsU0FBUyxDQUFDO29CQUNwRCxTQUFTLEVBQUU7d0JBQ1QsY0FBYzt3QkFDZCxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsUUFBUSxFQUFFLGVBQWUsRUFBRTt3QkFDcEQsRUFBRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsUUFBUSxFQUFFLGtCQUFrQixFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUU7cUJBQ3pFO2lCQUNGOztJQUMyQixvQkFBQztDQUFBLEFBUjdCLElBUTZCO1NBQWhCLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5cbmltcG9ydCB7IE9jY01vZHVsZSB9IGZyb20gJy4uLy4uL29jYy9vY2MubW9kdWxlJztcbmltcG9ydCB7IE9jY1VzZXJTZXJ2aWNlIH0gZnJvbSAnLi91c2VyLnNlcnZpY2UnO1xuaW1wb3J0IHsgT3JkZXJBZGFwdGVyIH0gZnJvbSAnLi4vY29ubmVjdG9ycy9vcmRlci5hZGFwdGVyJztcbmltcG9ydCB7IE9jY09yZGVyQWRhcHRlciB9IGZyb20gJy4vb2NjLW9yZGVyLmFkYXB0ZXInO1xuaW1wb3J0IHsgT1JERVJfTk9STUFMSVpFUiB9IGZyb20gJy4uL2Nvbm5lY3RvcnMvY29udmVydGVycyc7XG5pbXBvcnQgeyBPY2NPcmRlck5vcm1hbGl6ZXIgfSBmcm9tICcuL2NvbnZlcnRlcnMvb2NjLW9yZGVyLW5vcm1hbGl6ZXInO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBIdHRwQ2xpZW50TW9kdWxlLCBPY2NNb2R1bGVdLFxuICBwcm92aWRlcnM6IFtcbiAgICBPY2NVc2VyU2VydmljZSxcbiAgICB7IHByb3ZpZGU6IE9yZGVyQWRhcHRlciwgdXNlQ2xhc3M6IE9jY09yZGVyQWRhcHRlciB9LFxuICAgIHsgcHJvdmlkZTogT1JERVJfTk9STUFMSVpFUiwgdXNlQ2xhc3M6IE9jY09yZGVyTm9ybWFsaXplciwgbXVsdGk6IHRydWUgfSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgVXNlck9jY01vZHVsZSB7fVxuIl19