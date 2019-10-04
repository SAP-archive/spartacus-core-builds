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
                ],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9vY2Mvb2NjLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUF1QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLE1BQU0sRUFBRSxhQUFhLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUMxRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDN0QsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ2hFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQzVFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUM3RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUN6RSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUN2RixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUN2RixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDaEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDL0QsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBY25FLE1BQU0sT0FBTyxTQUFTOzs7O0lBQ3BCLE1BQU0sQ0FBQyxPQUFPO1FBQ1osT0FBTztZQUNMLFFBQVEsRUFBRSxTQUFTO1lBQ25CLFNBQVMsRUFBRTtnQkFDVCxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRTtnQkFDM0MsYUFBYSxDQUFDLGdCQUFnQixDQUFDO2dCQUMvQixzQkFBc0IsQ0FBQyxrQkFBa0IsQ0FBQzthQUMzQztTQUNGLENBQUM7SUFDSixDQUFDOzs7WUF0QkYsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLFlBQVk7b0JBQ1osYUFBYTtvQkFDYixpQkFBaUI7b0JBQ2pCLGdCQUFnQjtvQkFDaEIsb0JBQW9CO29CQUNwQixvQkFBb0I7b0JBQ3BCLGFBQWE7aUJBQ2Q7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb25maWcsIHByb3ZpZGVDb25maWcgfSBmcm9tICcuLi9jb25maWcvY29uZmlnLm1vZHVsZSc7XG5pbXBvcnQgeyBwcm92aWRlQ29uZmlnVmFsaWRhdG9yIH0gZnJvbSAnLi4vY29uZmlnL3V0aWxzL2NvbmZpZy12YWxpZGF0b3InO1xuaW1wb3J0IHsgQXNtT2NjTW9kdWxlIH0gZnJvbSAnLi9hZGFwdGVycy9hc20vYXNtLW9jYy5tb2R1bGUnO1xuaW1wb3J0IHsgQ2FydE9jY01vZHVsZSB9IGZyb20gJy4vYWRhcHRlcnMvY2FydC9jYXJ0LW9jYy5tb2R1bGUnO1xuaW1wb3J0IHsgQ2hlY2tvdXRPY2NNb2R1bGUgfSBmcm9tICcuL2FkYXB0ZXJzL2NoZWNrb3V0L2NoZWNrb3V0LW9jYy5tb2R1bGUnO1xuaW1wb3J0IHsgQ21zT2NjTW9kdWxlIH0gZnJvbSAnLi9hZGFwdGVycy9jbXMvY21zLW9jYy5tb2R1bGUnO1xuaW1wb3J0IHsgUHJvZHVjdE9jY01vZHVsZSB9IGZyb20gJy4vYWRhcHRlcnMvcHJvZHVjdC9wcm9kdWN0LW9jYy5tb2R1bGUnO1xuaW1wb3J0IHsgU2l0ZUNvbnRleHRPY2NNb2R1bGUgfSBmcm9tICcuL2FkYXB0ZXJzL3NpdGUtY29udGV4dC9zaXRlLWNvbnRleHQtb2NjLm1vZHVsZSc7XG5pbXBvcnQgeyBTdG9yZUZpbmRlck9jY01vZHVsZSB9IGZyb20gJy4vYWRhcHRlcnMvc3RvcmUtZmluZGVyL3N0b3JlLWZpbmRlci1vY2MubW9kdWxlJztcbmltcG9ydCB7IFVzZXJPY2NNb2R1bGUgfSBmcm9tICcuL2FkYXB0ZXJzL3VzZXIvdXNlci1vY2MubW9kdWxlJztcbmltcG9ydCB7IGRlZmF1bHRPY2NDb25maWcgfSBmcm9tICcuL2NvbmZpZy9kZWZhdWx0LW9jYy1jb25maWcnO1xuaW1wb3J0IHsgT2NjQ29uZmlnIH0gZnJvbSAnLi9jb25maWcvb2NjLWNvbmZpZyc7XG5pbXBvcnQgeyBvY2NDb25maWdWYWxpZGF0b3IgfSBmcm9tICcuL2NvbmZpZy9vY2MtY29uZmlnLXZhbGlkYXRvcic7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBBc21PY2NNb2R1bGUsXG4gICAgQ21zT2NjTW9kdWxlLFxuICAgIENhcnRPY2NNb2R1bGUsXG4gICAgQ2hlY2tvdXRPY2NNb2R1bGUsXG4gICAgUHJvZHVjdE9jY01vZHVsZSxcbiAgICBTaXRlQ29udGV4dE9jY01vZHVsZSxcbiAgICBTdG9yZUZpbmRlck9jY01vZHVsZSxcbiAgICBVc2VyT2NjTW9kdWxlLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBPY2NNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzPE9jY01vZHVsZT4ge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogT2NjTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHsgcHJvdmlkZTogT2NjQ29uZmlnLCB1c2VFeGlzdGluZzogQ29uZmlnIH0sXG4gICAgICAgIHByb3ZpZGVDb25maWcoZGVmYXVsdE9jY0NvbmZpZyksXG4gICAgICAgIHByb3ZpZGVDb25maWdWYWxpZGF0b3Iob2NjQ29uZmlnVmFsaWRhdG9yKSxcbiAgICAgIF0sXG4gICAgfTtcbiAgfVxufVxuIl19