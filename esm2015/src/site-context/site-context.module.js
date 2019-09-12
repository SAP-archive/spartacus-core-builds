/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { Config, ConfigModule } from '../config/config.module';
import { StateModule } from '../state/index';
import { defaultSiteContextConfigFactory } from './config/default-site-context-config';
import { SiteContextConfig } from './config/site-context-config';
import { contextServiceMapProvider } from './providers/context-service-map';
import { contextServiceProviders } from './providers/context-service-providers';
import { siteContextParamsProviders } from './providers/site-context-params-providers';
import { SiteContextStoreModule } from './store/site-context-store.module';
import { provideConfigValidator } from '../config/utils/config-validator';
import { baseSiteConfigValidator } from './config/base-site-config-validator';
// @dynamic
export class SiteContextModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: SiteContextModule,
            providers: [
                contextServiceMapProvider,
                ...contextServiceProviders,
                ...siteContextParamsProviders,
                { provide: SiteContextConfig, useExisting: Config },
                provideConfigValidator(baseSiteConfigValidator),
            ],
        };
    }
}
SiteContextModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    ConfigModule.withConfigFactory(defaultSiteContextConfigFactory),
                    StateModule,
                    SiteContextStoreModule,
                ],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2l0ZS1jb250ZXh0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9zaXRlLWNvbnRleHQvc2l0ZS1jb250ZXh0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUF1QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDdkYsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDakUsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDNUUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDaEYsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDdkYsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDM0UsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDMUUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0scUNBQXFDLENBQUM7O0FBVTlFLE1BQU0sT0FBTyxpQkFBaUI7Ozs7SUFDNUIsTUFBTSxDQUFDLE9BQU87UUFDWixPQUFPO1lBQ0wsUUFBUSxFQUFFLGlCQUFpQjtZQUMzQixTQUFTLEVBQUU7Z0JBQ1QseUJBQXlCO2dCQUN6QixHQUFHLHVCQUF1QjtnQkFDMUIsR0FBRywwQkFBMEI7Z0JBQzdCLEVBQUUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUU7Z0JBQ25ELHNCQUFzQixDQUFDLHVCQUF1QixDQUFDO2FBQ2hEO1NBQ0YsQ0FBQztJQUNKLENBQUM7OztZQW5CRixRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLFlBQVksQ0FBQyxpQkFBaUIsQ0FBQywrQkFBK0IsQ0FBQztvQkFDL0QsV0FBVztvQkFDWCxzQkFBc0I7aUJBQ3ZCO2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29uZmlnLCBDb25maWdNb2R1bGUgfSBmcm9tICcuLi9jb25maWcvY29uZmlnLm1vZHVsZSc7XG5pbXBvcnQgeyBTdGF0ZU1vZHVsZSB9IGZyb20gJy4uL3N0YXRlL2luZGV4JztcbmltcG9ydCB7IGRlZmF1bHRTaXRlQ29udGV4dENvbmZpZ0ZhY3RvcnkgfSBmcm9tICcuL2NvbmZpZy9kZWZhdWx0LXNpdGUtY29udGV4dC1jb25maWcnO1xuaW1wb3J0IHsgU2l0ZUNvbnRleHRDb25maWcgfSBmcm9tICcuL2NvbmZpZy9zaXRlLWNvbnRleHQtY29uZmlnJztcbmltcG9ydCB7IGNvbnRleHRTZXJ2aWNlTWFwUHJvdmlkZXIgfSBmcm9tICcuL3Byb3ZpZGVycy9jb250ZXh0LXNlcnZpY2UtbWFwJztcbmltcG9ydCB7IGNvbnRleHRTZXJ2aWNlUHJvdmlkZXJzIH0gZnJvbSAnLi9wcm92aWRlcnMvY29udGV4dC1zZXJ2aWNlLXByb3ZpZGVycyc7XG5pbXBvcnQgeyBzaXRlQ29udGV4dFBhcmFtc1Byb3ZpZGVycyB9IGZyb20gJy4vcHJvdmlkZXJzL3NpdGUtY29udGV4dC1wYXJhbXMtcHJvdmlkZXJzJztcbmltcG9ydCB7IFNpdGVDb250ZXh0U3RvcmVNb2R1bGUgfSBmcm9tICcuL3N0b3JlL3NpdGUtY29udGV4dC1zdG9yZS5tb2R1bGUnO1xuaW1wb3J0IHsgcHJvdmlkZUNvbmZpZ1ZhbGlkYXRvciB9IGZyb20gJy4uL2NvbmZpZy91dGlscy9jb25maWctdmFsaWRhdG9yJztcbmltcG9ydCB7IGJhc2VTaXRlQ29uZmlnVmFsaWRhdG9yIH0gZnJvbSAnLi9jb25maWcvYmFzZS1zaXRlLWNvbmZpZy12YWxpZGF0b3InO1xuXG4vLyBAZHluYW1pY1xuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbmZpZ01vZHVsZS53aXRoQ29uZmlnRmFjdG9yeShkZWZhdWx0U2l0ZUNvbnRleHRDb25maWdGYWN0b3J5KSxcbiAgICBTdGF0ZU1vZHVsZSxcbiAgICBTaXRlQ29udGV4dFN0b3JlTW9kdWxlLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBTaXRlQ29udGV4dE1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnM8U2l0ZUNvbnRleHRNb2R1bGU+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IFNpdGVDb250ZXh0TW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIGNvbnRleHRTZXJ2aWNlTWFwUHJvdmlkZXIsXG4gICAgICAgIC4uLmNvbnRleHRTZXJ2aWNlUHJvdmlkZXJzLFxuICAgICAgICAuLi5zaXRlQ29udGV4dFBhcmFtc1Byb3ZpZGVycyxcbiAgICAgICAgeyBwcm92aWRlOiBTaXRlQ29udGV4dENvbmZpZywgdXNlRXhpc3Rpbmc6IENvbmZpZyB9LFxuICAgICAgICBwcm92aWRlQ29uZmlnVmFsaWRhdG9yKGJhc2VTaXRlQ29uZmlnVmFsaWRhdG9yKSxcbiAgICAgIF0sXG4gICAgfTtcbiAgfVxufVxuIl19