import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { Config, provideDefaultConfig } from '../config/config.module';
import { provideConfigValidator } from '../config/config-validator/config-validator';
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
var OccModule = /** @class */ (function () {
    function OccModule() {
    }
    OccModule_1 = OccModule;
    OccModule.forRoot = function () {
        return {
            ngModule: OccModule_1,
            providers: [
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9vY2Mvb2NjLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUF1QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLE1BQU0sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQ3JGLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUM3RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDaEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDNUUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQzdELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBQ3ZGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBQ3ZGLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUNoRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUNqRixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDaEQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFlbkU7SUFBQTtJQVdBLENBQUM7a0JBWFksU0FBUztJQUNiLGlCQUFPLEdBQWQ7UUFDRSxPQUFPO1lBQ0wsUUFBUSxFQUFFLFdBQVM7WUFDbkIsU0FBUyxFQUFFO2dCQUNULEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFO2dCQUMzQyxvQkFBb0IsQ0FBQyxnQkFBZ0IsQ0FBQztnQkFDdEMsc0JBQXNCLENBQUMsa0JBQWtCLENBQUM7YUFDM0M7U0FDRixDQUFDO0lBQ0osQ0FBQzs7SUFWVSxTQUFTO1FBYnJCLFFBQVEsQ0FBQztZQUNSLE9BQU8sRUFBRTtnQkFDUCxZQUFZO2dCQUNaLFlBQVk7Z0JBQ1osYUFBYTtnQkFDYixpQkFBaUI7Z0JBQ2pCLGdCQUFnQjtnQkFDaEIsb0JBQW9CO2dCQUNwQixvQkFBb0I7Z0JBQ3BCLGFBQWE7Z0JBQ2IscUJBQXFCLENBQUMsT0FBTyxFQUFFO2FBQ2hDO1NBQ0YsQ0FBQztPQUNXLFNBQVMsQ0FXckI7SUFBRCxnQkFBQztDQUFBLEFBWEQsSUFXQztTQVhZLFNBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29uZmlnLCBwcm92aWRlRGVmYXVsdENvbmZpZyB9IGZyb20gJy4uL2NvbmZpZy9jb25maWcubW9kdWxlJztcbmltcG9ydCB7IHByb3ZpZGVDb25maWdWYWxpZGF0b3IgfSBmcm9tICcuLi9jb25maWcvY29uZmlnLXZhbGlkYXRvci9jb25maWctdmFsaWRhdG9yJztcbmltcG9ydCB7IEFzbU9jY01vZHVsZSB9IGZyb20gJy4vYWRhcHRlcnMvYXNtL2FzbS1vY2MubW9kdWxlJztcbmltcG9ydCB7IENhcnRPY2NNb2R1bGUgfSBmcm9tICcuL2FkYXB0ZXJzL2NhcnQvY2FydC1vY2MubW9kdWxlJztcbmltcG9ydCB7IENoZWNrb3V0T2NjTW9kdWxlIH0gZnJvbSAnLi9hZGFwdGVycy9jaGVja291dC9jaGVja291dC1vY2MubW9kdWxlJztcbmltcG9ydCB7IENtc09jY01vZHVsZSB9IGZyb20gJy4vYWRhcHRlcnMvY21zL2Ntcy1vY2MubW9kdWxlJztcbmltcG9ydCB7IFByb2R1Y3RPY2NNb2R1bGUgfSBmcm9tICcuL2FkYXB0ZXJzL3Byb2R1Y3QvcHJvZHVjdC1vY2MubW9kdWxlJztcbmltcG9ydCB7IFNpdGVDb250ZXh0T2NjTW9kdWxlIH0gZnJvbSAnLi9hZGFwdGVycy9zaXRlLWNvbnRleHQvc2l0ZS1jb250ZXh0LW9jYy5tb2R1bGUnO1xuaW1wb3J0IHsgU3RvcmVGaW5kZXJPY2NNb2R1bGUgfSBmcm9tICcuL2FkYXB0ZXJzL3N0b3JlLWZpbmRlci9zdG9yZS1maW5kZXItb2NjLm1vZHVsZSc7XG5pbXBvcnQgeyBVc2VyT2NjTW9kdWxlIH0gZnJvbSAnLi9hZGFwdGVycy91c2VyL3VzZXItb2NjLm1vZHVsZSc7XG5pbXBvcnQgeyBPY2NDb25maWdMb2FkZXJNb2R1bGUgfSBmcm9tICcuL2NvbmZpZy1sb2FkZXIvb2NjLWNvbmZpZy1sb2FkZXIubW9kdWxlJztcbmltcG9ydCB7IGRlZmF1bHRPY2NDb25maWcgfSBmcm9tICcuL2NvbmZpZy9kZWZhdWx0LW9jYy1jb25maWcnO1xuaW1wb3J0IHsgT2NjQ29uZmlnIH0gZnJvbSAnLi9jb25maWcvb2NjLWNvbmZpZyc7XG5pbXBvcnQgeyBvY2NDb25maWdWYWxpZGF0b3IgfSBmcm9tICcuL2NvbmZpZy9vY2MtY29uZmlnLXZhbGlkYXRvcic7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBBc21PY2NNb2R1bGUsXG4gICAgQ21zT2NjTW9kdWxlLFxuICAgIENhcnRPY2NNb2R1bGUsXG4gICAgQ2hlY2tvdXRPY2NNb2R1bGUsXG4gICAgUHJvZHVjdE9jY01vZHVsZSxcbiAgICBTaXRlQ29udGV4dE9jY01vZHVsZSxcbiAgICBTdG9yZUZpbmRlck9jY01vZHVsZSxcbiAgICBVc2VyT2NjTW9kdWxlLFxuICAgIE9jY0NvbmZpZ0xvYWRlck1vZHVsZS5mb3JSb290KCksXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIE9jY01vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnM8T2NjTW9kdWxlPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBPY2NNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgeyBwcm92aWRlOiBPY2NDb25maWcsIHVzZUV4aXN0aW5nOiBDb25maWcgfSxcbiAgICAgICAgcHJvdmlkZURlZmF1bHRDb25maWcoZGVmYXVsdE9jY0NvbmZpZyksXG4gICAgICAgIHByb3ZpZGVDb25maWdWYWxpZGF0b3Iob2NjQ29uZmlnVmFsaWRhdG9yKSxcbiAgICAgIF0sXG4gICAgfTtcbiAgfVxufVxuIl19