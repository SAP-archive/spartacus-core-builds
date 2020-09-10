var OccModule_1;
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
            OrganizationOccModule,
        ],
    })
], OccModule);
export { OccModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9vY2Mvb2NjLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3pELE9BQU8sRUFBdUIsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQ3JGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQy9ELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUM3RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDaEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDNUUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQzdELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBQ3ZGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBQ3ZGLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUNoRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUNqRixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUN4RixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUNuRSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQWdCekYsSUFBYSxTQUFTLGlCQUF0QixNQUFhLFNBQVM7SUFDcEIsTUFBTSxDQUFDLE9BQU87UUFDWixPQUFPO1lBQ0wsUUFBUSxFQUFFLFdBQVM7WUFDbkIsU0FBUyxFQUFFO2dCQUNUO29CQUNFLE9BQU8sRUFBRSxpQkFBaUI7b0JBQzFCLFdBQVcsRUFBRSwwQkFBMEI7b0JBQ3ZDLEtBQUssRUFBRSxJQUFJO2lCQUNaO2dCQUNELG9CQUFvQixDQUFDLGdCQUFnQixDQUFDO2dCQUN0QyxzQkFBc0IsQ0FBQyxrQkFBa0IsQ0FBQzthQUMzQztTQUNGLENBQUM7SUFDSixDQUFDO0NBQ0YsQ0FBQTtBQWZZLFNBQVM7SUFkckIsUUFBUSxDQUFDO1FBQ1IsT0FBTyxFQUFFO1lBQ1AsWUFBWTtZQUNaLFlBQVk7WUFDWixhQUFhO1lBQ2IsaUJBQWlCO1lBQ2pCLGdCQUFnQjtZQUNoQixvQkFBb0I7WUFDcEIsb0JBQW9CO1lBQ3BCLGFBQWE7WUFDYixxQkFBcUIsQ0FBQyxPQUFPLEVBQUU7WUFDL0IscUJBQXFCO1NBQ3RCO0tBQ0YsQ0FBQztHQUNXLFNBQVMsQ0FlckI7U0FmWSxTQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSFRUUF9JTlRFUkNFUFRPUlMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgcHJvdmlkZUNvbmZpZ1ZhbGlkYXRvciB9IGZyb20gJy4uL2NvbmZpZy9jb25maWctdmFsaWRhdG9yL2NvbmZpZy12YWxpZGF0b3InO1xuaW1wb3J0IHsgcHJvdmlkZURlZmF1bHRDb25maWcgfSBmcm9tICcuLi9jb25maWcvY29uZmlnLm1vZHVsZSc7XG5pbXBvcnQgeyBBc21PY2NNb2R1bGUgfSBmcm9tICcuL2FkYXB0ZXJzL2FzbS9hc20tb2NjLm1vZHVsZSc7XG5pbXBvcnQgeyBDYXJ0T2NjTW9kdWxlIH0gZnJvbSAnLi9hZGFwdGVycy9jYXJ0L2NhcnQtb2NjLm1vZHVsZSc7XG5pbXBvcnQgeyBDaGVja291dE9jY01vZHVsZSB9IGZyb20gJy4vYWRhcHRlcnMvY2hlY2tvdXQvY2hlY2tvdXQtb2NjLm1vZHVsZSc7XG5pbXBvcnQgeyBDbXNPY2NNb2R1bGUgfSBmcm9tICcuL2FkYXB0ZXJzL2Ntcy9jbXMtb2NjLm1vZHVsZSc7XG5pbXBvcnQgeyBQcm9kdWN0T2NjTW9kdWxlIH0gZnJvbSAnLi9hZGFwdGVycy9wcm9kdWN0L3Byb2R1Y3Qtb2NjLm1vZHVsZSc7XG5pbXBvcnQgeyBTaXRlQ29udGV4dE9jY01vZHVsZSB9IGZyb20gJy4vYWRhcHRlcnMvc2l0ZS1jb250ZXh0L3NpdGUtY29udGV4dC1vY2MubW9kdWxlJztcbmltcG9ydCB7IFN0b3JlRmluZGVyT2NjTW9kdWxlIH0gZnJvbSAnLi9hZGFwdGVycy9zdG9yZS1maW5kZXIvc3RvcmUtZmluZGVyLW9jYy5tb2R1bGUnO1xuaW1wb3J0IHsgVXNlck9jY01vZHVsZSB9IGZyb20gJy4vYWRhcHRlcnMvdXNlci91c2VyLW9jYy5tb2R1bGUnO1xuaW1wb3J0IHsgT2NjQ29uZmlnTG9hZGVyTW9kdWxlIH0gZnJvbSAnLi9jb25maWctbG9hZGVyL29jYy1jb25maWctbG9hZGVyLm1vZHVsZSc7XG5pbXBvcnQgeyBPcmdhbml6YXRpb25PY2NNb2R1bGUgfSBmcm9tICcuL2FkYXB0ZXJzL29yZ2FuaXphdGlvbi9vcmdhbml6YXRpb24tb2NjLm1vZHVsZSc7XG5pbXBvcnQgeyBkZWZhdWx0T2NjQ29uZmlnIH0gZnJvbSAnLi9jb25maWcvZGVmYXVsdC1vY2MtY29uZmlnJztcbmltcG9ydCB7IG9jY0NvbmZpZ1ZhbGlkYXRvciB9IGZyb20gJy4vY29uZmlnL29jYy1jb25maWctdmFsaWRhdG9yJztcbmltcG9ydCB7IFdpdGhDcmVkZW50aWFsc0ludGVyY2VwdG9yIH0gZnJvbSAnLi9pbnRlcmNlcHRvcnMvd2l0aC1jcmVkZW50aWFscy5pbnRlcmNlcHRvcic7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBBc21PY2NNb2R1bGUsXG4gICAgQ21zT2NjTW9kdWxlLFxuICAgIENhcnRPY2NNb2R1bGUsXG4gICAgQ2hlY2tvdXRPY2NNb2R1bGUsXG4gICAgUHJvZHVjdE9jY01vZHVsZSxcbiAgICBTaXRlQ29udGV4dE9jY01vZHVsZSxcbiAgICBTdG9yZUZpbmRlck9jY01vZHVsZSxcbiAgICBVc2VyT2NjTW9kdWxlLFxuICAgIE9jY0NvbmZpZ0xvYWRlck1vZHVsZS5mb3JSb290KCksXG4gICAgT3JnYW5pemF0aW9uT2NjTW9kdWxlLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBPY2NNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzPE9jY01vZHVsZT4ge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogT2NjTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBwcm92aWRlOiBIVFRQX0lOVEVSQ0VQVE9SUyxcbiAgICAgICAgICB1c2VFeGlzdGluZzogV2l0aENyZWRlbnRpYWxzSW50ZXJjZXB0b3IsXG4gICAgICAgICAgbXVsdGk6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIHByb3ZpZGVEZWZhdWx0Q29uZmlnKGRlZmF1bHRPY2NDb25maWcpLFxuICAgICAgICBwcm92aWRlQ29uZmlnVmFsaWRhdG9yKG9jY0NvbmZpZ1ZhbGlkYXRvciksXG4gICAgICBdLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==