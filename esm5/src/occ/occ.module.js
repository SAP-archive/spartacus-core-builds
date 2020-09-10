import { __decorate } from "tslib";
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { provideConfigValidator } from '../config/config-validator/config-validator';
import { provideDefaultConfig } from '../config/config.module';
import { AsmOccModule } from './adapters/asm/asm-occ.module';
import { CartOccModule } from './adapters/cart/cart-occ.module';
import { CheckoutOccModule } from './adapters/checkout/checkout-occ.module';
import { CmsOccModule } from './adapters/cms/cms-occ.module';
import { ProductOccModule } from './adapters/product/product-occ.module';
import { SiteContextOccModule } from './adapters/site-context/site-context-occ.module';
import { StoreFinderOccModule } from './adapters/store-finder/store-finder-occ.module';
import { UserOccModule } from './adapters/user/user-occ.module';
import { OccConfigLoaderModule } from './config-loader/occ-config-loader.module';
import { OrganizationOccModule } from './adapters/organization/organization-occ.module';
import { defaultOccConfig } from './config/default-occ-config';
import { occConfigValidator } from './config/occ-config-validator';
import { WithCredentialsInterceptor } from './interceptors/with-credentials.interceptor';
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
                OrganizationOccModule,
            ],
        })
    ], OccModule);
    return OccModule;
}());
export { OccModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9vY2Mvb2NjLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDekQsT0FBTyxFQUF1QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDckYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDL0QsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQzdELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUNoRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUM1RSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDN0QsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDekUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0saURBQWlELENBQUM7QUFDdkYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0saURBQWlELENBQUM7QUFDdkYsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ2hFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQ2pGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBQ3hGLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQy9ELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ25FLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBZ0J6RjtJQUFBO0lBZUEsQ0FBQztrQkFmWSxTQUFTO0lBQ2IsaUJBQU8sR0FBZDtRQUNFLE9BQU87WUFDTCxRQUFRLEVBQUUsV0FBUztZQUNuQixTQUFTLEVBQUU7Z0JBQ1Q7b0JBQ0UsT0FBTyxFQUFFLGlCQUFpQjtvQkFDMUIsV0FBVyxFQUFFLDBCQUEwQjtvQkFDdkMsS0FBSyxFQUFFLElBQUk7aUJBQ1o7Z0JBQ0Qsb0JBQW9CLENBQUMsZ0JBQWdCLENBQUM7Z0JBQ3RDLHNCQUFzQixDQUFDLGtCQUFrQixDQUFDO2FBQzNDO1NBQ0YsQ0FBQztJQUNKLENBQUM7O0lBZFUsU0FBUztRQWRyQixRQUFRLENBQUM7WUFDUixPQUFPLEVBQUU7Z0JBQ1AsWUFBWTtnQkFDWixZQUFZO2dCQUNaLGFBQWE7Z0JBQ2IsaUJBQWlCO2dCQUNqQixnQkFBZ0I7Z0JBQ2hCLG9CQUFvQjtnQkFDcEIsb0JBQW9CO2dCQUNwQixhQUFhO2dCQUNiLHFCQUFxQixDQUFDLE9BQU8sRUFBRTtnQkFDL0IscUJBQXFCO2FBQ3RCO1NBQ0YsQ0FBQztPQUNXLFNBQVMsQ0FlckI7SUFBRCxnQkFBQztDQUFBLEFBZkQsSUFlQztTQWZZLFNBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIVFRQX0lOVEVSQ0VQVE9SUyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBwcm92aWRlQ29uZmlnVmFsaWRhdG9yIH0gZnJvbSAnLi4vY29uZmlnL2NvbmZpZy12YWxpZGF0b3IvY29uZmlnLXZhbGlkYXRvcic7XG5pbXBvcnQgeyBwcm92aWRlRGVmYXVsdENvbmZpZyB9IGZyb20gJy4uL2NvbmZpZy9jb25maWcubW9kdWxlJztcbmltcG9ydCB7IEFzbU9jY01vZHVsZSB9IGZyb20gJy4vYWRhcHRlcnMvYXNtL2FzbS1vY2MubW9kdWxlJztcbmltcG9ydCB7IENhcnRPY2NNb2R1bGUgfSBmcm9tICcuL2FkYXB0ZXJzL2NhcnQvY2FydC1vY2MubW9kdWxlJztcbmltcG9ydCB7IENoZWNrb3V0T2NjTW9kdWxlIH0gZnJvbSAnLi9hZGFwdGVycy9jaGVja291dC9jaGVja291dC1vY2MubW9kdWxlJztcbmltcG9ydCB7IENtc09jY01vZHVsZSB9IGZyb20gJy4vYWRhcHRlcnMvY21zL2Ntcy1vY2MubW9kdWxlJztcbmltcG9ydCB7IFByb2R1Y3RPY2NNb2R1bGUgfSBmcm9tICcuL2FkYXB0ZXJzL3Byb2R1Y3QvcHJvZHVjdC1vY2MubW9kdWxlJztcbmltcG9ydCB7IFNpdGVDb250ZXh0T2NjTW9kdWxlIH0gZnJvbSAnLi9hZGFwdGVycy9zaXRlLWNvbnRleHQvc2l0ZS1jb250ZXh0LW9jYy5tb2R1bGUnO1xuaW1wb3J0IHsgU3RvcmVGaW5kZXJPY2NNb2R1bGUgfSBmcm9tICcuL2FkYXB0ZXJzL3N0b3JlLWZpbmRlci9zdG9yZS1maW5kZXItb2NjLm1vZHVsZSc7XG5pbXBvcnQgeyBVc2VyT2NjTW9kdWxlIH0gZnJvbSAnLi9hZGFwdGVycy91c2VyL3VzZXItb2NjLm1vZHVsZSc7XG5pbXBvcnQgeyBPY2NDb25maWdMb2FkZXJNb2R1bGUgfSBmcm9tICcuL2NvbmZpZy1sb2FkZXIvb2NjLWNvbmZpZy1sb2FkZXIubW9kdWxlJztcbmltcG9ydCB7IE9yZ2FuaXphdGlvbk9jY01vZHVsZSB9IGZyb20gJy4vYWRhcHRlcnMvb3JnYW5pemF0aW9uL29yZ2FuaXphdGlvbi1vY2MubW9kdWxlJztcbmltcG9ydCB7IGRlZmF1bHRPY2NDb25maWcgfSBmcm9tICcuL2NvbmZpZy9kZWZhdWx0LW9jYy1jb25maWcnO1xuaW1wb3J0IHsgb2NjQ29uZmlnVmFsaWRhdG9yIH0gZnJvbSAnLi9jb25maWcvb2NjLWNvbmZpZy12YWxpZGF0b3InO1xuaW1wb3J0IHsgV2l0aENyZWRlbnRpYWxzSW50ZXJjZXB0b3IgfSBmcm9tICcuL2ludGVyY2VwdG9ycy93aXRoLWNyZWRlbnRpYWxzLmludGVyY2VwdG9yJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIEFzbU9jY01vZHVsZSxcbiAgICBDbXNPY2NNb2R1bGUsXG4gICAgQ2FydE9jY01vZHVsZSxcbiAgICBDaGVja291dE9jY01vZHVsZSxcbiAgICBQcm9kdWN0T2NjTW9kdWxlLFxuICAgIFNpdGVDb250ZXh0T2NjTW9kdWxlLFxuICAgIFN0b3JlRmluZGVyT2NjTW9kdWxlLFxuICAgIFVzZXJPY2NNb2R1bGUsXG4gICAgT2NjQ29uZmlnTG9hZGVyTW9kdWxlLmZvclJvb3QoKSxcbiAgICBPcmdhbml6YXRpb25PY2NNb2R1bGUsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIE9jY01vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnM8T2NjTW9kdWxlPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBPY2NNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6IEhUVFBfSU5URVJDRVBUT1JTLFxuICAgICAgICAgIHVzZUV4aXN0aW5nOiBXaXRoQ3JlZGVudGlhbHNJbnRlcmNlcHRvcixcbiAgICAgICAgICBtdWx0aTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAgcHJvdmlkZURlZmF1bHRDb25maWcoZGVmYXVsdE9jY0NvbmZpZyksXG4gICAgICAgIHByb3ZpZGVDb25maWdWYWxpZGF0b3Iob2NjQ29uZmlnVmFsaWRhdG9yKSxcbiAgICAgIF0sXG4gICAgfTtcbiAgfVxufVxuIl19