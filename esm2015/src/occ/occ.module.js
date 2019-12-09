/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { Config, provideConfig } from '../config/config.module';
import { provideConfigValidator } from '../config/utils/config-validator';
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
export class OccModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: OccModule,
            providers: [
                { provide: OccConfig, useExisting: Config },
                provideConfig(defaultOccConfig),
                provideConfigValidator(occConfigValidator),
            ],
        };
    }
}
OccModule.decorators = [
    { type: NgModule, args: [{
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
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9vY2Mvb2NjLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUF1QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLE1BQU0sRUFBRSxhQUFhLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUMxRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDN0QsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ2hFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQzVFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUM3RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUN6RSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUN2RixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUN2RixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDaEUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDakYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDL0QsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBZW5FLE1BQU0sT0FBTyxTQUFTOzs7O0lBQ3BCLE1BQU0sQ0FBQyxPQUFPO1FBQ1osT0FBTztZQUNMLFFBQVEsRUFBRSxTQUFTO1lBQ25CLFNBQVMsRUFBRTtnQkFDVCxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRTtnQkFDM0MsYUFBYSxDQUFDLGdCQUFnQixDQUFDO2dCQUMvQixzQkFBc0IsQ0FBQyxrQkFBa0IsQ0FBQzthQUMzQztTQUNGLENBQUM7SUFDSixDQUFDOzs7WUF2QkYsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLFlBQVk7b0JBQ1osYUFBYTtvQkFDYixpQkFBaUI7b0JBQ2pCLGdCQUFnQjtvQkFDaEIsb0JBQW9CO29CQUNwQixvQkFBb0I7b0JBQ3BCLGFBQWE7b0JBQ2IscUJBQXFCLENBQUMsT0FBTyxFQUFFO2lCQUNoQzthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbmZpZywgcHJvdmlkZUNvbmZpZyB9IGZyb20gJy4uL2NvbmZpZy9jb25maWcubW9kdWxlJztcbmltcG9ydCB7IHByb3ZpZGVDb25maWdWYWxpZGF0b3IgfSBmcm9tICcuLi9jb25maWcvdXRpbHMvY29uZmlnLXZhbGlkYXRvcic7XG5pbXBvcnQgeyBBc21PY2NNb2R1bGUgfSBmcm9tICcuL2FkYXB0ZXJzL2FzbS9hc20tb2NjLm1vZHVsZSc7XG5pbXBvcnQgeyBDYXJ0T2NjTW9kdWxlIH0gZnJvbSAnLi9hZGFwdGVycy9jYXJ0L2NhcnQtb2NjLm1vZHVsZSc7XG5pbXBvcnQgeyBDaGVja291dE9jY01vZHVsZSB9IGZyb20gJy4vYWRhcHRlcnMvY2hlY2tvdXQvY2hlY2tvdXQtb2NjLm1vZHVsZSc7XG5pbXBvcnQgeyBDbXNPY2NNb2R1bGUgfSBmcm9tICcuL2FkYXB0ZXJzL2Ntcy9jbXMtb2NjLm1vZHVsZSc7XG5pbXBvcnQgeyBQcm9kdWN0T2NjTW9kdWxlIH0gZnJvbSAnLi9hZGFwdGVycy9wcm9kdWN0L3Byb2R1Y3Qtb2NjLm1vZHVsZSc7XG5pbXBvcnQgeyBTaXRlQ29udGV4dE9jY01vZHVsZSB9IGZyb20gJy4vYWRhcHRlcnMvc2l0ZS1jb250ZXh0L3NpdGUtY29udGV4dC1vY2MubW9kdWxlJztcbmltcG9ydCB7IFN0b3JlRmluZGVyT2NjTW9kdWxlIH0gZnJvbSAnLi9hZGFwdGVycy9zdG9yZS1maW5kZXIvc3RvcmUtZmluZGVyLW9jYy5tb2R1bGUnO1xuaW1wb3J0IHsgVXNlck9jY01vZHVsZSB9IGZyb20gJy4vYWRhcHRlcnMvdXNlci91c2VyLW9jYy5tb2R1bGUnO1xuaW1wb3J0IHsgT2NjQ29uZmlnTG9hZGVyTW9kdWxlIH0gZnJvbSAnLi9jb25maWctbG9hZGVyL29jYy1jb25maWctbG9hZGVyLm1vZHVsZSc7XG5pbXBvcnQgeyBkZWZhdWx0T2NjQ29uZmlnIH0gZnJvbSAnLi9jb25maWcvZGVmYXVsdC1vY2MtY29uZmlnJztcbmltcG9ydCB7IE9jY0NvbmZpZyB9IGZyb20gJy4vY29uZmlnL29jYy1jb25maWcnO1xuaW1wb3J0IHsgb2NjQ29uZmlnVmFsaWRhdG9yIH0gZnJvbSAnLi9jb25maWcvb2NjLWNvbmZpZy12YWxpZGF0b3InO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQXNtT2NjTW9kdWxlLFxuICAgIENtc09jY01vZHVsZSxcbiAgICBDYXJ0T2NjTW9kdWxlLFxuICAgIENoZWNrb3V0T2NjTW9kdWxlLFxuICAgIFByb2R1Y3RPY2NNb2R1bGUsXG4gICAgU2l0ZUNvbnRleHRPY2NNb2R1bGUsXG4gICAgU3RvcmVGaW5kZXJPY2NNb2R1bGUsXG4gICAgVXNlck9jY01vZHVsZSxcbiAgICBPY2NDb25maWdMb2FkZXJNb2R1bGUuZm9yUm9vdCgpLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBPY2NNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzPE9jY01vZHVsZT4ge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogT2NjTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHsgcHJvdmlkZTogT2NjQ29uZmlnLCB1c2VFeGlzdGluZzogQ29uZmlnIH0sXG4gICAgICAgIHByb3ZpZGVDb25maWcoZGVmYXVsdE9jY0NvbmZpZyksXG4gICAgICAgIHByb3ZpZGVDb25maWdWYWxpZGF0b3Iob2NjQ29uZmlnVmFsaWRhdG9yKSxcbiAgICAgIF0sXG4gICAgfTtcbiAgfVxufVxuIl19