/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
var OccModule = /** @class */ (function () {
    function OccModule() {
    }
    /**
     * @return {?}
     */
    OccModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: OccModule,
            providers: [
                { provide: OccConfig, useExisting: Config },
                provideConfig(defaultOccConfig),
                provideConfigValidator(occConfigValidator),
            ],
        };
    };
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
    return OccModule;
}());
export { OccModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9vY2Mvb2NjLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUF1QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLE1BQU0sRUFBRSxhQUFhLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUNyRixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDN0QsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ2hFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQzVFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUM3RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUN6RSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUN2RixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUN2RixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDaEUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDakYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDL0QsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBRW5FO0lBQUE7SUF3QkEsQ0FBQzs7OztJQVZRLGlCQUFPOzs7SUFBZDtRQUNFLE9BQU87WUFDTCxRQUFRLEVBQUUsU0FBUztZQUNuQixTQUFTLEVBQUU7Z0JBQ1QsRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUU7Z0JBQzNDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQztnQkFDL0Isc0JBQXNCLENBQUMsa0JBQWtCLENBQUM7YUFDM0M7U0FDRixDQUFDO0lBQ0osQ0FBQzs7Z0JBdkJGLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixZQUFZO3dCQUNaLGFBQWE7d0JBQ2IsaUJBQWlCO3dCQUNqQixnQkFBZ0I7d0JBQ2hCLG9CQUFvQjt3QkFDcEIsb0JBQW9CO3dCQUNwQixhQUFhO3dCQUNiLHFCQUFxQixDQUFDLE9BQU8sRUFBRTtxQkFDaEM7aUJBQ0Y7O0lBWUQsZ0JBQUM7Q0FBQSxBQXhCRCxJQXdCQztTQVhZLFNBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29uZmlnLCBwcm92aWRlQ29uZmlnIH0gZnJvbSAnLi4vY29uZmlnL2NvbmZpZy5tb2R1bGUnO1xuaW1wb3J0IHsgcHJvdmlkZUNvbmZpZ1ZhbGlkYXRvciB9IGZyb20gJy4uL2NvbmZpZy9jb25maWctdmFsaWRhdG9yL2NvbmZpZy12YWxpZGF0b3InO1xuaW1wb3J0IHsgQXNtT2NjTW9kdWxlIH0gZnJvbSAnLi9hZGFwdGVycy9hc20vYXNtLW9jYy5tb2R1bGUnO1xuaW1wb3J0IHsgQ2FydE9jY01vZHVsZSB9IGZyb20gJy4vYWRhcHRlcnMvY2FydC9jYXJ0LW9jYy5tb2R1bGUnO1xuaW1wb3J0IHsgQ2hlY2tvdXRPY2NNb2R1bGUgfSBmcm9tICcuL2FkYXB0ZXJzL2NoZWNrb3V0L2NoZWNrb3V0LW9jYy5tb2R1bGUnO1xuaW1wb3J0IHsgQ21zT2NjTW9kdWxlIH0gZnJvbSAnLi9hZGFwdGVycy9jbXMvY21zLW9jYy5tb2R1bGUnO1xuaW1wb3J0IHsgUHJvZHVjdE9jY01vZHVsZSB9IGZyb20gJy4vYWRhcHRlcnMvcHJvZHVjdC9wcm9kdWN0LW9jYy5tb2R1bGUnO1xuaW1wb3J0IHsgU2l0ZUNvbnRleHRPY2NNb2R1bGUgfSBmcm9tICcuL2FkYXB0ZXJzL3NpdGUtY29udGV4dC9zaXRlLWNvbnRleHQtb2NjLm1vZHVsZSc7XG5pbXBvcnQgeyBTdG9yZUZpbmRlck9jY01vZHVsZSB9IGZyb20gJy4vYWRhcHRlcnMvc3RvcmUtZmluZGVyL3N0b3JlLWZpbmRlci1vY2MubW9kdWxlJztcbmltcG9ydCB7IFVzZXJPY2NNb2R1bGUgfSBmcm9tICcuL2FkYXB0ZXJzL3VzZXIvdXNlci1vY2MubW9kdWxlJztcbmltcG9ydCB7IE9jY0NvbmZpZ0xvYWRlck1vZHVsZSB9IGZyb20gJy4vY29uZmlnLWxvYWRlci9vY2MtY29uZmlnLWxvYWRlci5tb2R1bGUnO1xuaW1wb3J0IHsgZGVmYXVsdE9jY0NvbmZpZyB9IGZyb20gJy4vY29uZmlnL2RlZmF1bHQtb2NjLWNvbmZpZyc7XG5pbXBvcnQgeyBPY2NDb25maWcgfSBmcm9tICcuL2NvbmZpZy9vY2MtY29uZmlnJztcbmltcG9ydCB7IG9jY0NvbmZpZ1ZhbGlkYXRvciB9IGZyb20gJy4vY29uZmlnL29jYy1jb25maWctdmFsaWRhdG9yJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIEFzbU9jY01vZHVsZSxcbiAgICBDbXNPY2NNb2R1bGUsXG4gICAgQ2FydE9jY01vZHVsZSxcbiAgICBDaGVja291dE9jY01vZHVsZSxcbiAgICBQcm9kdWN0T2NjTW9kdWxlLFxuICAgIFNpdGVDb250ZXh0T2NjTW9kdWxlLFxuICAgIFN0b3JlRmluZGVyT2NjTW9kdWxlLFxuICAgIFVzZXJPY2NNb2R1bGUsXG4gICAgT2NjQ29uZmlnTG9hZGVyTW9kdWxlLmZvclJvb3QoKSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgT2NjTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVyczxPY2NNb2R1bGU+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IE9jY01vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7IHByb3ZpZGU6IE9jY0NvbmZpZywgdXNlRXhpc3Rpbmc6IENvbmZpZyB9LFxuICAgICAgICBwcm92aWRlQ29uZmlnKGRlZmF1bHRPY2NDb25maWcpLFxuICAgICAgICBwcm92aWRlQ29uZmlnVmFsaWRhdG9yKG9jY0NvbmZpZ1ZhbGlkYXRvciksXG4gICAgICBdLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==