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
export class UserOccModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1vY2MubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3VzZXIvb2NjL3VzZXItb2NjLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFeEQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNoRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzVELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBVXZFLE1BQU0sT0FBTyxhQUFhOzs7WUFSekIsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxnQkFBZ0IsRUFBRSxTQUFTLENBQUM7Z0JBQ3BELFNBQVMsRUFBRTtvQkFDVCxjQUFjO29CQUNkLEVBQUUsT0FBTyxFQUFFLFlBQVksRUFBRSxRQUFRLEVBQUUsZUFBZSxFQUFFO29CQUNwRCxFQUFFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxRQUFRLEVBQUUsa0JBQWtCLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRTtpQkFDekU7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcblxuaW1wb3J0IHsgT2NjTW9kdWxlIH0gZnJvbSAnLi4vLi4vb2NjL29jYy5tb2R1bGUnO1xuaW1wb3J0IHsgT2NjVXNlclNlcnZpY2UgfSBmcm9tICcuL3VzZXIuc2VydmljZSc7XG5pbXBvcnQgeyBPcmRlckFkYXB0ZXIgfSBmcm9tICcuLi9jb25uZWN0b3JzL29yZGVyLmFkYXB0ZXInO1xuaW1wb3J0IHsgT2NjT3JkZXJBZGFwdGVyIH0gZnJvbSAnLi9vY2Mtb3JkZXIuYWRhcHRlcic7XG5pbXBvcnQgeyBPUkRFUl9OT1JNQUxJWkVSIH0gZnJvbSAnLi4vY29ubmVjdG9ycy9jb252ZXJ0ZXJzJztcbmltcG9ydCB7IE9jY09yZGVyTm9ybWFsaXplciB9IGZyb20gJy4vY29udmVydGVycy9vY2Mtb3JkZXItbm9ybWFsaXplcic7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIEh0dHBDbGllbnRNb2R1bGUsIE9jY01vZHVsZV0sXG4gIHByb3ZpZGVyczogW1xuICAgIE9jY1VzZXJTZXJ2aWNlLFxuICAgIHsgcHJvdmlkZTogT3JkZXJBZGFwdGVyLCB1c2VDbGFzczogT2NjT3JkZXJBZGFwdGVyIH0sXG4gICAgeyBwcm92aWRlOiBPUkRFUl9OT1JNQUxJWkVSLCB1c2VDbGFzczogT2NjT3JkZXJOb3JtYWxpemVyLCBtdWx0aTogdHJ1ZSB9LFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBVc2VyT2NjTW9kdWxlIHt9XG4iXX0=