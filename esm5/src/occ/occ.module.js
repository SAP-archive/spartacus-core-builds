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
                    ],
                },] }
    ];
    return OccModule;
}());
export { OccModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9vY2Mvb2NjLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUF1QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLE1BQU0sRUFBRSxhQUFhLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUMxRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDN0QsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ2hFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQzVFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUM3RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUN6RSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUN2RixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUN2RixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDaEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDL0QsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBRW5FO0lBQUE7SUF1QkEsQ0FBQzs7OztJQVZRLGlCQUFPOzs7SUFBZDtRQUNFLE9BQU87WUFDTCxRQUFRLEVBQUUsU0FBUztZQUNuQixTQUFTLEVBQUU7Z0JBQ1QsRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUU7Z0JBQzNDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQztnQkFDL0Isc0JBQXNCLENBQUMsa0JBQWtCLENBQUM7YUFDM0M7U0FDRixDQUFDO0lBQ0osQ0FBQzs7Z0JBdEJGLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixZQUFZO3dCQUNaLGFBQWE7d0JBQ2IsaUJBQWlCO3dCQUNqQixnQkFBZ0I7d0JBQ2hCLG9CQUFvQjt3QkFDcEIsb0JBQW9CO3dCQUNwQixhQUFhO3FCQUNkO2lCQUNGOztJQVlELGdCQUFDO0NBQUEsQUF2QkQsSUF1QkM7U0FYWSxTQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbmZpZywgcHJvdmlkZUNvbmZpZyB9IGZyb20gJy4uL2NvbmZpZy9jb25maWcubW9kdWxlJztcbmltcG9ydCB7IHByb3ZpZGVDb25maWdWYWxpZGF0b3IgfSBmcm9tICcuLi9jb25maWcvdXRpbHMvY29uZmlnLXZhbGlkYXRvcic7XG5pbXBvcnQgeyBBc21PY2NNb2R1bGUgfSBmcm9tICcuL2FkYXB0ZXJzL2FzbS9hc20tb2NjLm1vZHVsZSc7XG5pbXBvcnQgeyBDYXJ0T2NjTW9kdWxlIH0gZnJvbSAnLi9hZGFwdGVycy9jYXJ0L2NhcnQtb2NjLm1vZHVsZSc7XG5pbXBvcnQgeyBDaGVja291dE9jY01vZHVsZSB9IGZyb20gJy4vYWRhcHRlcnMvY2hlY2tvdXQvY2hlY2tvdXQtb2NjLm1vZHVsZSc7XG5pbXBvcnQgeyBDbXNPY2NNb2R1bGUgfSBmcm9tICcuL2FkYXB0ZXJzL2Ntcy9jbXMtb2NjLm1vZHVsZSc7XG5pbXBvcnQgeyBQcm9kdWN0T2NjTW9kdWxlIH0gZnJvbSAnLi9hZGFwdGVycy9wcm9kdWN0L3Byb2R1Y3Qtb2NjLm1vZHVsZSc7XG5pbXBvcnQgeyBTaXRlQ29udGV4dE9jY01vZHVsZSB9IGZyb20gJy4vYWRhcHRlcnMvc2l0ZS1jb250ZXh0L3NpdGUtY29udGV4dC1vY2MubW9kdWxlJztcbmltcG9ydCB7IFN0b3JlRmluZGVyT2NjTW9kdWxlIH0gZnJvbSAnLi9hZGFwdGVycy9zdG9yZS1maW5kZXIvc3RvcmUtZmluZGVyLW9jYy5tb2R1bGUnO1xuaW1wb3J0IHsgVXNlck9jY01vZHVsZSB9IGZyb20gJy4vYWRhcHRlcnMvdXNlci91c2VyLW9jYy5tb2R1bGUnO1xuaW1wb3J0IHsgZGVmYXVsdE9jY0NvbmZpZyB9IGZyb20gJy4vY29uZmlnL2RlZmF1bHQtb2NjLWNvbmZpZyc7XG5pbXBvcnQgeyBPY2NDb25maWcgfSBmcm9tICcuL2NvbmZpZy9vY2MtY29uZmlnJztcbmltcG9ydCB7IG9jY0NvbmZpZ1ZhbGlkYXRvciB9IGZyb20gJy4vY29uZmlnL29jYy1jb25maWctdmFsaWRhdG9yJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIEFzbU9jY01vZHVsZSxcbiAgICBDbXNPY2NNb2R1bGUsXG4gICAgQ2FydE9jY01vZHVsZSxcbiAgICBDaGVja291dE9jY01vZHVsZSxcbiAgICBQcm9kdWN0T2NjTW9kdWxlLFxuICAgIFNpdGVDb250ZXh0T2NjTW9kdWxlLFxuICAgIFN0b3JlRmluZGVyT2NjTW9kdWxlLFxuICAgIFVzZXJPY2NNb2R1bGUsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIE9jY01vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnM8T2NjTW9kdWxlPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBPY2NNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgeyBwcm92aWRlOiBPY2NDb25maWcsIHVzZUV4aXN0aW5nOiBDb25maWcgfSxcbiAgICAgICAgcHJvdmlkZUNvbmZpZyhkZWZhdWx0T2NjQ29uZmlnKSxcbiAgICAgICAgcHJvdmlkZUNvbmZpZ1ZhbGlkYXRvcihvY2NDb25maWdWYWxpZGF0b3IpLFxuICAgICAgXSxcbiAgICB9O1xuICB9XG59XG4iXX0=