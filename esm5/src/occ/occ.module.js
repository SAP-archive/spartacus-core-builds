import { __decorate } from "tslib";
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { provideConfigValidator } from '../config/config-validator/config-validator';
import { Config, provideDefaultConfig } from '../config/config.module';
import { AsmOccModule } from './adapters/asm/asm-occ.module';
import { CartOccModule } from './adapters/cart/cart-occ.module';
import { CheckoutOccModule } from './adapters/checkout/checkout-occ.module';
import { CmsOccModule } from './adapters/cms/cms-occ.module';
import { ProductOccModule } from './adapters/product/product-occ.module';
import { SiteContextOccModule } from './adapters/site-context/site-context-occ.module';
import { StoreFinderOccModule } from './adapters/store-finder/store-finder-occ.module';
import { UserOccModule } from './adapters/user/user-occ.module';
import { OccConfigLoaderModule } from './config-loader/occ-config-loader.module';
import { defaultOccConfig } from './config/default-occ-config';
import { OccConfig } from './config/occ-config';
import { occConfigValidator } from './config/occ-config-validator';
import { WithCredentialsInterceptor } from './interceptors/with-credentials-interceptor';
var OccModule = /** @class */ (function () {
    function OccModule() {
    }
    OccModule_1 = OccModule;
    OccModule.forRoot = function () {
        return {
            ngModule: OccModule_1,
            providers: [
                {
                    provide: HTTP_INTERCEPTORS,
                    useExisting: WithCredentialsInterceptor,
                    multi: true,
                },
                { provide: OccConfig, useExisting: Config },
                provideDefaultConfig(defaultOccConfig),
                provideConfigValidator(occConfigValidator),
            ],
        };
    };
    var OccModule_1;
    OccModule = OccModule_1 = __decorate([
        NgModule({
            imports: [
                AsmOccModule,
                CmsOccModule,
                CartOccModule,
                CheckoutOccModule,
                ProductOccModule,
                SiteContextOccModule,
                StoreFinderOccModule,
                UserOccModule,
                OccConfigLoaderModule.forRoot(),
            ],
        })
    ], OccModule);
    return OccModule;
}());
export { OccModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9vY2Mvb2NjLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDekQsT0FBTyxFQUF1QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDckYsT0FBTyxFQUFFLE1BQU0sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUM3RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDaEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDNUUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQzdELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBQ3ZGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBQ3ZGLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUNoRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUNqRixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDaEQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDbkUsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFlekY7SUFBQTtJQWdCQSxDQUFDO2tCQWhCWSxTQUFTO0lBQ2IsaUJBQU8sR0FBZDtRQUNFLE9BQU87WUFDTCxRQUFRLEVBQUUsV0FBUztZQUNuQixTQUFTLEVBQUU7Z0JBQ1Q7b0JBQ0UsT0FBTyxFQUFFLGlCQUFpQjtvQkFDMUIsV0FBVyxFQUFFLDBCQUEwQjtvQkFDdkMsS0FBSyxFQUFFLElBQUk7aUJBQ1o7Z0JBQ0QsRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUU7Z0JBQzNDLG9CQUFvQixDQUFDLGdCQUFnQixDQUFDO2dCQUN0QyxzQkFBc0IsQ0FBQyxrQkFBa0IsQ0FBQzthQUMzQztTQUNGLENBQUM7SUFDSixDQUFDOztJQWZVLFNBQVM7UUFickIsUUFBUSxDQUFDO1lBQ1IsT0FBTyxFQUFFO2dCQUNQLFlBQVk7Z0JBQ1osWUFBWTtnQkFDWixhQUFhO2dCQUNiLGlCQUFpQjtnQkFDakIsZ0JBQWdCO2dCQUNoQixvQkFBb0I7Z0JBQ3BCLG9CQUFvQjtnQkFDcEIsYUFBYTtnQkFDYixxQkFBcUIsQ0FBQyxPQUFPLEVBQUU7YUFDaEM7U0FDRixDQUFDO09BQ1csU0FBUyxDQWdCckI7SUFBRCxnQkFBQztDQUFBLEFBaEJELElBZ0JDO1NBaEJZLFNBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIVFRQX0lOVEVSQ0VQVE9SUyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBwcm92aWRlQ29uZmlnVmFsaWRhdG9yIH0gZnJvbSAnLi4vY29uZmlnL2NvbmZpZy12YWxpZGF0b3IvY29uZmlnLXZhbGlkYXRvcic7XG5pbXBvcnQgeyBDb25maWcsIHByb3ZpZGVEZWZhdWx0Q29uZmlnIH0gZnJvbSAnLi4vY29uZmlnL2NvbmZpZy5tb2R1bGUnO1xuaW1wb3J0IHsgQXNtT2NjTW9kdWxlIH0gZnJvbSAnLi9hZGFwdGVycy9hc20vYXNtLW9jYy5tb2R1bGUnO1xuaW1wb3J0IHsgQ2FydE9jY01vZHVsZSB9IGZyb20gJy4vYWRhcHRlcnMvY2FydC9jYXJ0LW9jYy5tb2R1bGUnO1xuaW1wb3J0IHsgQ2hlY2tvdXRPY2NNb2R1bGUgfSBmcm9tICcuL2FkYXB0ZXJzL2NoZWNrb3V0L2NoZWNrb3V0LW9jYy5tb2R1bGUnO1xuaW1wb3J0IHsgQ21zT2NjTW9kdWxlIH0gZnJvbSAnLi9hZGFwdGVycy9jbXMvY21zLW9jYy5tb2R1bGUnO1xuaW1wb3J0IHsgUHJvZHVjdE9jY01vZHVsZSB9IGZyb20gJy4vYWRhcHRlcnMvcHJvZHVjdC9wcm9kdWN0LW9jYy5tb2R1bGUnO1xuaW1wb3J0IHsgU2l0ZUNvbnRleHRPY2NNb2R1bGUgfSBmcm9tICcuL2FkYXB0ZXJzL3NpdGUtY29udGV4dC9zaXRlLWNvbnRleHQtb2NjLm1vZHVsZSc7XG5pbXBvcnQgeyBTdG9yZUZpbmRlck9jY01vZHVsZSB9IGZyb20gJy4vYWRhcHRlcnMvc3RvcmUtZmluZGVyL3N0b3JlLWZpbmRlci1vY2MubW9kdWxlJztcbmltcG9ydCB7IFVzZXJPY2NNb2R1bGUgfSBmcm9tICcuL2FkYXB0ZXJzL3VzZXIvdXNlci1vY2MubW9kdWxlJztcbmltcG9ydCB7IE9jY0NvbmZpZ0xvYWRlck1vZHVsZSB9IGZyb20gJy4vY29uZmlnLWxvYWRlci9vY2MtY29uZmlnLWxvYWRlci5tb2R1bGUnO1xuaW1wb3J0IHsgZGVmYXVsdE9jY0NvbmZpZyB9IGZyb20gJy4vY29uZmlnL2RlZmF1bHQtb2NjLWNvbmZpZyc7XG5pbXBvcnQgeyBPY2NDb25maWcgfSBmcm9tICcuL2NvbmZpZy9vY2MtY29uZmlnJztcbmltcG9ydCB7IG9jY0NvbmZpZ1ZhbGlkYXRvciB9IGZyb20gJy4vY29uZmlnL29jYy1jb25maWctdmFsaWRhdG9yJztcbmltcG9ydCB7IFdpdGhDcmVkZW50aWFsc0ludGVyY2VwdG9yIH0gZnJvbSAnLi9pbnRlcmNlcHRvcnMvd2l0aC1jcmVkZW50aWFscy1pbnRlcmNlcHRvcic7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBBc21PY2NNb2R1bGUsXG4gICAgQ21zT2NjTW9kdWxlLFxuICAgIENhcnRPY2NNb2R1bGUsXG4gICAgQ2hlY2tvdXRPY2NNb2R1bGUsXG4gICAgUHJvZHVjdE9jY01vZHVsZSxcbiAgICBTaXRlQ29udGV4dE9jY01vZHVsZSxcbiAgICBTdG9yZUZpbmRlck9jY01vZHVsZSxcbiAgICBVc2VyT2NjTW9kdWxlLFxuICAgIE9jY0NvbmZpZ0xvYWRlck1vZHVsZS5mb3JSb290KCksXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIE9jY01vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnM8T2NjTW9kdWxlPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBPY2NNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6IEhUVFBfSU5URVJDRVBUT1JTLFxuICAgICAgICAgIHVzZUV4aXN0aW5nOiBXaXRoQ3JlZGVudGlhbHNJbnRlcmNlcHRvcixcbiAgICAgICAgICBtdWx0aTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAgeyBwcm92aWRlOiBPY2NDb25maWcsIHVzZUV4aXN0aW5nOiBDb25maWcgfSxcbiAgICAgICAgcHJvdmlkZURlZmF1bHRDb25maWcoZGVmYXVsdE9jY0NvbmZpZyksXG4gICAgICAgIHByb3ZpZGVDb25maWdWYWxpZGF0b3Iob2NjQ29uZmlnVmFsaWRhdG9yKSxcbiAgICAgIF0sXG4gICAgfTtcbiAgfVxufVxuIl19