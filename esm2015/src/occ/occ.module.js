/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { provideConfigValidator } from '../config/utils/config-validator';
import { Config, provideConfig } from '../config/config.module';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9vY2Mvb2NjLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUF1QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDMUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxhQUFhLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDaEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDNUUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQzdELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBQ3ZGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBQ3ZGLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUNoRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDaEQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFhbkUsTUFBTSxPQUFPLFNBQVM7Ozs7SUFDcEIsTUFBTSxDQUFDLE9BQU87UUFDWixPQUFPO1lBQ0wsUUFBUSxFQUFFLFNBQVM7WUFDbkIsU0FBUyxFQUFFO2dCQUNULEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFO2dCQUMzQyxhQUFhLENBQUMsZ0JBQWdCLENBQUM7Z0JBQy9CLHNCQUFzQixDQUFDLGtCQUFrQixDQUFDO2FBQzNDO1NBQ0YsQ0FBQztJQUNKLENBQUM7OztZQXJCRixRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLFlBQVk7b0JBQ1osYUFBYTtvQkFDYixpQkFBaUI7b0JBQ2pCLGdCQUFnQjtvQkFDaEIsb0JBQW9CO29CQUNwQixvQkFBb0I7b0JBQ3BCLGFBQWE7aUJBQ2Q7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBwcm92aWRlQ29uZmlnVmFsaWRhdG9yIH0gZnJvbSAnLi4vY29uZmlnL3V0aWxzL2NvbmZpZy12YWxpZGF0b3InO1xuaW1wb3J0IHsgQ29uZmlnLCBwcm92aWRlQ29uZmlnIH0gZnJvbSAnLi4vY29uZmlnL2NvbmZpZy5tb2R1bGUnO1xuaW1wb3J0IHsgQ2FydE9jY01vZHVsZSB9IGZyb20gJy4vYWRhcHRlcnMvY2FydC9jYXJ0LW9jYy5tb2R1bGUnO1xuaW1wb3J0IHsgQ2hlY2tvdXRPY2NNb2R1bGUgfSBmcm9tICcuL2FkYXB0ZXJzL2NoZWNrb3V0L2NoZWNrb3V0LW9jYy5tb2R1bGUnO1xuaW1wb3J0IHsgQ21zT2NjTW9kdWxlIH0gZnJvbSAnLi9hZGFwdGVycy9jbXMvY21zLW9jYy5tb2R1bGUnO1xuaW1wb3J0IHsgUHJvZHVjdE9jY01vZHVsZSB9IGZyb20gJy4vYWRhcHRlcnMvcHJvZHVjdC9wcm9kdWN0LW9jYy5tb2R1bGUnO1xuaW1wb3J0IHsgU2l0ZUNvbnRleHRPY2NNb2R1bGUgfSBmcm9tICcuL2FkYXB0ZXJzL3NpdGUtY29udGV4dC9zaXRlLWNvbnRleHQtb2NjLm1vZHVsZSc7XG5pbXBvcnQgeyBTdG9yZUZpbmRlck9jY01vZHVsZSB9IGZyb20gJy4vYWRhcHRlcnMvc3RvcmUtZmluZGVyL3N0b3JlLWZpbmRlci1vY2MubW9kdWxlJztcbmltcG9ydCB7IFVzZXJPY2NNb2R1bGUgfSBmcm9tICcuL2FkYXB0ZXJzL3VzZXIvdXNlci1vY2MubW9kdWxlJztcbmltcG9ydCB7IGRlZmF1bHRPY2NDb25maWcgfSBmcm9tICcuL2NvbmZpZy9kZWZhdWx0LW9jYy1jb25maWcnO1xuaW1wb3J0IHsgT2NjQ29uZmlnIH0gZnJvbSAnLi9jb25maWcvb2NjLWNvbmZpZyc7XG5pbXBvcnQgeyBvY2NDb25maWdWYWxpZGF0b3IgfSBmcm9tICcuL2NvbmZpZy9vY2MtY29uZmlnLXZhbGlkYXRvcic7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDbXNPY2NNb2R1bGUsXG4gICAgQ2FydE9jY01vZHVsZSxcbiAgICBDaGVja291dE9jY01vZHVsZSxcbiAgICBQcm9kdWN0T2NjTW9kdWxlLFxuICAgIFNpdGVDb250ZXh0T2NjTW9kdWxlLFxuICAgIFN0b3JlRmluZGVyT2NjTW9kdWxlLFxuICAgIFVzZXJPY2NNb2R1bGUsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIE9jY01vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnM8T2NjTW9kdWxlPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBPY2NNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgeyBwcm92aWRlOiBPY2NDb25maWcsIHVzZUV4aXN0aW5nOiBDb25maWcgfSxcbiAgICAgICAgcHJvdmlkZUNvbmZpZyhkZWZhdWx0T2NjQ29uZmlnKSxcbiAgICAgICAgcHJvdmlkZUNvbmZpZ1ZhbGlkYXRvcihvY2NDb25maWdWYWxpZGF0b3IpLFxuICAgICAgXSxcbiAgICB9O1xuICB9XG59XG4iXX0=