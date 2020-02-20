var OccModule_1;
import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { Config, provideConfig } from '../config/config.module';
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
let OccModule = OccModule_1 = class OccModule {
    static forRoot() {
        return {
            ngModule: OccModule_1,
            providers: [
                { provide: OccConfig, useExisting: Config },
                provideConfig(defaultOccConfig),
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9vY2Mvb2NjLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE9BQU8sRUFBdUIsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxNQUFNLEVBQUUsYUFBYSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDaEUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDckYsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQzdELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUNoRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUM1RSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDN0QsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDekUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0saURBQWlELENBQUM7QUFDdkYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0saURBQWlELENBQUM7QUFDdkYsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ2hFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQ2pGLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQy9ELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNoRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQWVuRSxJQUFhLFNBQVMsaUJBQXRCLE1BQWEsU0FBUztJQUNwQixNQUFNLENBQUMsT0FBTztRQUNaLE9BQU87WUFDTCxRQUFRLEVBQUUsV0FBUztZQUNuQixTQUFTLEVBQUU7Z0JBQ1QsRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUU7Z0JBQzNDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQztnQkFDL0Isc0JBQXNCLENBQUMsa0JBQWtCLENBQUM7YUFDM0M7U0FDRixDQUFDO0lBQ0osQ0FBQztDQUNGLENBQUE7QUFYWSxTQUFTO0lBYnJCLFFBQVEsQ0FBQztRQUNSLE9BQU8sRUFBRTtZQUNQLFlBQVk7WUFDWixZQUFZO1lBQ1osYUFBYTtZQUNiLGlCQUFpQjtZQUNqQixnQkFBZ0I7WUFDaEIsb0JBQW9CO1lBQ3BCLG9CQUFvQjtZQUNwQixhQUFhO1lBQ2IscUJBQXFCLENBQUMsT0FBTyxFQUFFO1NBQ2hDO0tBQ0YsQ0FBQztHQUNXLFNBQVMsQ0FXckI7U0FYWSxTQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbmZpZywgcHJvdmlkZUNvbmZpZyB9IGZyb20gJy4uL2NvbmZpZy9jb25maWcubW9kdWxlJztcbmltcG9ydCB7IHByb3ZpZGVDb25maWdWYWxpZGF0b3IgfSBmcm9tICcuLi9jb25maWcvY29uZmlnLXZhbGlkYXRvci9jb25maWctdmFsaWRhdG9yJztcbmltcG9ydCB7IEFzbU9jY01vZHVsZSB9IGZyb20gJy4vYWRhcHRlcnMvYXNtL2FzbS1vY2MubW9kdWxlJztcbmltcG9ydCB7IENhcnRPY2NNb2R1bGUgfSBmcm9tICcuL2FkYXB0ZXJzL2NhcnQvY2FydC1vY2MubW9kdWxlJztcbmltcG9ydCB7IENoZWNrb3V0T2NjTW9kdWxlIH0gZnJvbSAnLi9hZGFwdGVycy9jaGVja291dC9jaGVja291dC1vY2MubW9kdWxlJztcbmltcG9ydCB7IENtc09jY01vZHVsZSB9IGZyb20gJy4vYWRhcHRlcnMvY21zL2Ntcy1vY2MubW9kdWxlJztcbmltcG9ydCB7IFByb2R1Y3RPY2NNb2R1bGUgfSBmcm9tICcuL2FkYXB0ZXJzL3Byb2R1Y3QvcHJvZHVjdC1vY2MubW9kdWxlJztcbmltcG9ydCB7IFNpdGVDb250ZXh0T2NjTW9kdWxlIH0gZnJvbSAnLi9hZGFwdGVycy9zaXRlLWNvbnRleHQvc2l0ZS1jb250ZXh0LW9jYy5tb2R1bGUnO1xuaW1wb3J0IHsgU3RvcmVGaW5kZXJPY2NNb2R1bGUgfSBmcm9tICcuL2FkYXB0ZXJzL3N0b3JlLWZpbmRlci9zdG9yZS1maW5kZXItb2NjLm1vZHVsZSc7XG5pbXBvcnQgeyBVc2VyT2NjTW9kdWxlIH0gZnJvbSAnLi9hZGFwdGVycy91c2VyL3VzZXItb2NjLm1vZHVsZSc7XG5pbXBvcnQgeyBPY2NDb25maWdMb2FkZXJNb2R1bGUgfSBmcm9tICcuL2NvbmZpZy1sb2FkZXIvb2NjLWNvbmZpZy1sb2FkZXIubW9kdWxlJztcbmltcG9ydCB7IGRlZmF1bHRPY2NDb25maWcgfSBmcm9tICcuL2NvbmZpZy9kZWZhdWx0LW9jYy1jb25maWcnO1xuaW1wb3J0IHsgT2NjQ29uZmlnIH0gZnJvbSAnLi9jb25maWcvb2NjLWNvbmZpZyc7XG5pbXBvcnQgeyBvY2NDb25maWdWYWxpZGF0b3IgfSBmcm9tICcuL2NvbmZpZy9vY2MtY29uZmlnLXZhbGlkYXRvcic7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBBc21PY2NNb2R1bGUsXG4gICAgQ21zT2NjTW9kdWxlLFxuICAgIENhcnRPY2NNb2R1bGUsXG4gICAgQ2hlY2tvdXRPY2NNb2R1bGUsXG4gICAgUHJvZHVjdE9jY01vZHVsZSxcbiAgICBTaXRlQ29udGV4dE9jY01vZHVsZSxcbiAgICBTdG9yZUZpbmRlck9jY01vZHVsZSxcbiAgICBVc2VyT2NjTW9kdWxlLFxuICAgIE9jY0NvbmZpZ0xvYWRlck1vZHVsZS5mb3JSb290KCksXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIE9jY01vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnM8T2NjTW9kdWxlPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBPY2NNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgeyBwcm92aWRlOiBPY2NDb25maWcsIHVzZUV4aXN0aW5nOiBDb25maWcgfSxcbiAgICAgICAgcHJvdmlkZUNvbmZpZyhkZWZhdWx0T2NjQ29uZmlnKSxcbiAgICAgICAgcHJvdmlkZUNvbmZpZ1ZhbGlkYXRvcihvY2NDb25maWdWYWxpZGF0b3IpLFxuICAgICAgXSxcbiAgICB9O1xuICB9XG59XG4iXX0=