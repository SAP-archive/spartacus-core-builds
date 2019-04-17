/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ProductLoaderService } from './product.service';
import { ProductSearchLoaderService } from './product-search.service';
import { OccModule } from '../../occ/occ.module';
import { defaultOccProductConfig } from '../config/product-config';
import { ConfigModule } from '../../config/index';
import { ProductReviewsLoaderService } from './product-reviews.service';
export class ProductOccModule {
}
ProductOccModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    HttpClientModule,
                    OccModule,
                    ConfigModule.withConfig(defaultOccProductConfig),
                ],
                providers: [
                    ProductLoaderService,
                    ProductSearchLoaderService,
                    ProductReviewsLoaderService,
                ],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1vY2MubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3Byb2R1Y3Qvb2NjL3Byb2R1Y3Qtb2NjLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFeEQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDekQsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDdEUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2pELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ25FLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQWV4RSxNQUFNLE9BQU8sZ0JBQWdCOzs7WUFiNUIsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLGdCQUFnQjtvQkFDaEIsU0FBUztvQkFDVCxZQUFZLENBQUMsVUFBVSxDQUFDLHVCQUF1QixDQUFDO2lCQUNqRDtnQkFDRCxTQUFTLEVBQUU7b0JBQ1Qsb0JBQW9CO29CQUNwQiwwQkFBMEI7b0JBQzFCLDJCQUEyQjtpQkFDNUI7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcblxuaW1wb3J0IHsgUHJvZHVjdExvYWRlclNlcnZpY2UgfSBmcm9tICcuL3Byb2R1Y3Quc2VydmljZSc7XG5pbXBvcnQgeyBQcm9kdWN0U2VhcmNoTG9hZGVyU2VydmljZSB9IGZyb20gJy4vcHJvZHVjdC1zZWFyY2guc2VydmljZSc7XG5pbXBvcnQgeyBPY2NNb2R1bGUgfSBmcm9tICcuLi8uLi9vY2Mvb2NjLm1vZHVsZSc7XG5pbXBvcnQgeyBkZWZhdWx0T2NjUHJvZHVjdENvbmZpZyB9IGZyb20gJy4uL2NvbmZpZy9wcm9kdWN0LWNvbmZpZyc7XG5pbXBvcnQgeyBDb25maWdNb2R1bGUgfSBmcm9tICcuLi8uLi9jb25maWcvaW5kZXgnO1xuaW1wb3J0IHsgUHJvZHVjdFJldmlld3NMb2FkZXJTZXJ2aWNlIH0gZnJvbSAnLi9wcm9kdWN0LXJldmlld3Muc2VydmljZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgSHR0cENsaWVudE1vZHVsZSxcbiAgICBPY2NNb2R1bGUsXG4gICAgQ29uZmlnTW9kdWxlLndpdGhDb25maWcoZGVmYXVsdE9jY1Byb2R1Y3RDb25maWcpLFxuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICBQcm9kdWN0TG9hZGVyU2VydmljZSxcbiAgICBQcm9kdWN0U2VhcmNoTG9hZGVyU2VydmljZSxcbiAgICBQcm9kdWN0UmV2aWV3c0xvYWRlclNlcnZpY2UsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIFByb2R1Y3RPY2NNb2R1bGUge31cbiJdfQ==