var OccModule_1;
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
import { WithCredentialsInterceptor } from './interceptors/with-credentials.interceptor';
let OccModule = OccModule_1 = class OccModule {
    static forRoot() {
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
    }
};
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
export { OccModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9vY2Mvb2NjLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3pELE9BQU8sRUFBdUIsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQ3JGLE9BQU8sRUFBRSxNQUFNLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDN0QsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ2hFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQzVFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUM3RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUN6RSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUN2RixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUN2RixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDaEUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDakYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDL0QsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ25FLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBZXpGLElBQWEsU0FBUyxpQkFBdEIsTUFBYSxTQUFTO0lBQ3BCLE1BQU0sQ0FBQyxPQUFPO1FBQ1osT0FBTztZQUNMLFFBQVEsRUFBRSxXQUFTO1lBQ25CLFNBQVMsRUFBRTtnQkFDVDtvQkFDRSxPQUFPLEVBQUUsaUJBQWlCO29CQUMxQixXQUFXLEVBQUUsMEJBQTBCO29CQUN2QyxLQUFLLEVBQUUsSUFBSTtpQkFDWjtnQkFDRCxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRTtnQkFDM0Msb0JBQW9CLENBQUMsZ0JBQWdCLENBQUM7Z0JBQ3RDLHNCQUFzQixDQUFDLGtCQUFrQixDQUFDO2FBQzNDO1NBQ0YsQ0FBQztJQUNKLENBQUM7Q0FDRixDQUFBO0FBaEJZLFNBQVM7SUFickIsUUFBUSxDQUFDO1FBQ1IsT0FBTyxFQUFFO1lBQ1AsWUFBWTtZQUNaLFlBQVk7WUFDWixhQUFhO1lBQ2IsaUJBQWlCO1lBQ2pCLGdCQUFnQjtZQUNoQixvQkFBb0I7WUFDcEIsb0JBQW9CO1lBQ3BCLGFBQWE7WUFDYixxQkFBcUIsQ0FBQyxPQUFPLEVBQUU7U0FDaEM7S0FDRixDQUFDO0dBQ1csU0FBUyxDQWdCckI7U0FoQlksU0FBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEhUVFBfSU5URVJDRVBUT1JTIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHByb3ZpZGVDb25maWdWYWxpZGF0b3IgfSBmcm9tICcuLi9jb25maWcvY29uZmlnLXZhbGlkYXRvci9jb25maWctdmFsaWRhdG9yJztcbmltcG9ydCB7IENvbmZpZywgcHJvdmlkZURlZmF1bHRDb25maWcgfSBmcm9tICcuLi9jb25maWcvY29uZmlnLm1vZHVsZSc7XG5pbXBvcnQgeyBBc21PY2NNb2R1bGUgfSBmcm9tICcuL2FkYXB0ZXJzL2FzbS9hc20tb2NjLm1vZHVsZSc7XG5pbXBvcnQgeyBDYXJ0T2NjTW9kdWxlIH0gZnJvbSAnLi9hZGFwdGVycy9jYXJ0L2NhcnQtb2NjLm1vZHVsZSc7XG5pbXBvcnQgeyBDaGVja291dE9jY01vZHVsZSB9IGZyb20gJy4vYWRhcHRlcnMvY2hlY2tvdXQvY2hlY2tvdXQtb2NjLm1vZHVsZSc7XG5pbXBvcnQgeyBDbXNPY2NNb2R1bGUgfSBmcm9tICcuL2FkYXB0ZXJzL2Ntcy9jbXMtb2NjLm1vZHVsZSc7XG5pbXBvcnQgeyBQcm9kdWN0T2NjTW9kdWxlIH0gZnJvbSAnLi9hZGFwdGVycy9wcm9kdWN0L3Byb2R1Y3Qtb2NjLm1vZHVsZSc7XG5pbXBvcnQgeyBTaXRlQ29udGV4dE9jY01vZHVsZSB9IGZyb20gJy4vYWRhcHRlcnMvc2l0ZS1jb250ZXh0L3NpdGUtY29udGV4dC1vY2MubW9kdWxlJztcbmltcG9ydCB7IFN0b3JlRmluZGVyT2NjTW9kdWxlIH0gZnJvbSAnLi9hZGFwdGVycy9zdG9yZS1maW5kZXIvc3RvcmUtZmluZGVyLW9jYy5tb2R1bGUnO1xuaW1wb3J0IHsgVXNlck9jY01vZHVsZSB9IGZyb20gJy4vYWRhcHRlcnMvdXNlci91c2VyLW9jYy5tb2R1bGUnO1xuaW1wb3J0IHsgT2NjQ29uZmlnTG9hZGVyTW9kdWxlIH0gZnJvbSAnLi9jb25maWctbG9hZGVyL29jYy1jb25maWctbG9hZGVyLm1vZHVsZSc7XG5pbXBvcnQgeyBkZWZhdWx0T2NjQ29uZmlnIH0gZnJvbSAnLi9jb25maWcvZGVmYXVsdC1vY2MtY29uZmlnJztcbmltcG9ydCB7IE9jY0NvbmZpZyB9IGZyb20gJy4vY29uZmlnL29jYy1jb25maWcnO1xuaW1wb3J0IHsgb2NjQ29uZmlnVmFsaWRhdG9yIH0gZnJvbSAnLi9jb25maWcvb2NjLWNvbmZpZy12YWxpZGF0b3InO1xuaW1wb3J0IHsgV2l0aENyZWRlbnRpYWxzSW50ZXJjZXB0b3IgfSBmcm9tICcuL2ludGVyY2VwdG9ycy93aXRoLWNyZWRlbnRpYWxzLmludGVyY2VwdG9yJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIEFzbU9jY01vZHVsZSxcbiAgICBDbXNPY2NNb2R1bGUsXG4gICAgQ2FydE9jY01vZHVsZSxcbiAgICBDaGVja291dE9jY01vZHVsZSxcbiAgICBQcm9kdWN0T2NjTW9kdWxlLFxuICAgIFNpdGVDb250ZXh0T2NjTW9kdWxlLFxuICAgIFN0b3JlRmluZGVyT2NjTW9kdWxlLFxuICAgIFVzZXJPY2NNb2R1bGUsXG4gICAgT2NjQ29uZmlnTG9hZGVyTW9kdWxlLmZvclJvb3QoKSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgT2NjTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVyczxPY2NNb2R1bGU+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IE9jY01vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7XG4gICAgICAgICAgcHJvdmlkZTogSFRUUF9JTlRFUkNFUFRPUlMsXG4gICAgICAgICAgdXNlRXhpc3Rpbmc6IFdpdGhDcmVkZW50aWFsc0ludGVyY2VwdG9yLFxuICAgICAgICAgIG11bHRpOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICB7IHByb3ZpZGU6IE9jY0NvbmZpZywgdXNlRXhpc3Rpbmc6IENvbmZpZyB9LFxuICAgICAgICBwcm92aWRlRGVmYXVsdENvbmZpZyhkZWZhdWx0T2NjQ29uZmlnKSxcbiAgICAgICAgcHJvdmlkZUNvbmZpZ1ZhbGlkYXRvcihvY2NDb25maWdWYWxpZGF0b3IpLFxuICAgICAgXSxcbiAgICB9O1xuICB9XG59XG4iXX0=