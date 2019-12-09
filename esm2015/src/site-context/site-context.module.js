/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { Config, ConfigModule } from '../config/config.module';
import { provideConfigValidator } from '../config/config-validator/config-validator';
import { StateModule } from '../state/index';
import { baseSiteConfigValidator } from './config/base-site-config-validator';
import { defaultSiteContextConfigFactory } from './config/default-site-context-config';
import { SiteContextConfig } from './config/site-context-config';
import { contextServiceMapProvider } from './providers/context-service-map';
import { contextServiceProviders } from './providers/context-service-providers';
import { siteContextParamsProviders } from './providers/site-context-params-providers';
import { SiteContextStoreModule } from './store/site-context-store.module';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2l0ZS1jb250ZXh0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9zaXRlLWNvbnRleHQvc2l0ZS1jb250ZXh0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUF1QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUNyRixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDOUUsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDdkYsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDakUsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDNUUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDaEYsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDdkYsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7O0FBVTNFLE1BQU0sT0FBTyxpQkFBaUI7Ozs7SUFDNUIsTUFBTSxDQUFDLE9BQU87UUFDWixPQUFPO1lBQ0wsUUFBUSxFQUFFLGlCQUFpQjtZQUMzQixTQUFTLEVBQUU7Z0JBQ1QseUJBQXlCO2dCQUN6QixHQUFHLHVCQUF1QjtnQkFDMUIsR0FBRywwQkFBMEI7Z0JBQzdCLEVBQUUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUU7Z0JBQ25ELHNCQUFzQixDQUFDLHVCQUF1QixDQUFDO2FBQ2hEO1NBQ0YsQ0FBQztJQUNKLENBQUM7OztZQW5CRixRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLFlBQVksQ0FBQyxpQkFBaUIsQ0FBQywrQkFBK0IsQ0FBQztvQkFDL0QsV0FBVztvQkFDWCxzQkFBc0I7aUJBQ3ZCO2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29uZmlnLCBDb25maWdNb2R1bGUgfSBmcm9tICcuLi9jb25maWcvY29uZmlnLm1vZHVsZSc7XG5pbXBvcnQgeyBwcm92aWRlQ29uZmlnVmFsaWRhdG9yIH0gZnJvbSAnLi4vY29uZmlnL2NvbmZpZy12YWxpZGF0b3IvY29uZmlnLXZhbGlkYXRvcic7XG5pbXBvcnQgeyBTdGF0ZU1vZHVsZSB9IGZyb20gJy4uL3N0YXRlL2luZGV4JztcbmltcG9ydCB7IGJhc2VTaXRlQ29uZmlnVmFsaWRhdG9yIH0gZnJvbSAnLi9jb25maWcvYmFzZS1zaXRlLWNvbmZpZy12YWxpZGF0b3InO1xuaW1wb3J0IHsgZGVmYXVsdFNpdGVDb250ZXh0Q29uZmlnRmFjdG9yeSB9IGZyb20gJy4vY29uZmlnL2RlZmF1bHQtc2l0ZS1jb250ZXh0LWNvbmZpZyc7XG5pbXBvcnQgeyBTaXRlQ29udGV4dENvbmZpZyB9IGZyb20gJy4vY29uZmlnL3NpdGUtY29udGV4dC1jb25maWcnO1xuaW1wb3J0IHsgY29udGV4dFNlcnZpY2VNYXBQcm92aWRlciB9IGZyb20gJy4vcHJvdmlkZXJzL2NvbnRleHQtc2VydmljZS1tYXAnO1xuaW1wb3J0IHsgY29udGV4dFNlcnZpY2VQcm92aWRlcnMgfSBmcm9tICcuL3Byb3ZpZGVycy9jb250ZXh0LXNlcnZpY2UtcHJvdmlkZXJzJztcbmltcG9ydCB7IHNpdGVDb250ZXh0UGFyYW1zUHJvdmlkZXJzIH0gZnJvbSAnLi9wcm92aWRlcnMvc2l0ZS1jb250ZXh0LXBhcmFtcy1wcm92aWRlcnMnO1xuaW1wb3J0IHsgU2l0ZUNvbnRleHRTdG9yZU1vZHVsZSB9IGZyb20gJy4vc3RvcmUvc2l0ZS1jb250ZXh0LXN0b3JlLm1vZHVsZSc7XG5cbi8vIEBkeW5hbWljXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29uZmlnTW9kdWxlLndpdGhDb25maWdGYWN0b3J5KGRlZmF1bHRTaXRlQ29udGV4dENvbmZpZ0ZhY3RvcnkpLFxuICAgIFN0YXRlTW9kdWxlLFxuICAgIFNpdGVDb250ZXh0U3RvcmVNb2R1bGUsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIFNpdGVDb250ZXh0TW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVyczxTaXRlQ29udGV4dE1vZHVsZT4ge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogU2l0ZUNvbnRleHRNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgY29udGV4dFNlcnZpY2VNYXBQcm92aWRlcixcbiAgICAgICAgLi4uY29udGV4dFNlcnZpY2VQcm92aWRlcnMsXG4gICAgICAgIC4uLnNpdGVDb250ZXh0UGFyYW1zUHJvdmlkZXJzLFxuICAgICAgICB7IHByb3ZpZGU6IFNpdGVDb250ZXh0Q29uZmlnLCB1c2VFeGlzdGluZzogQ29uZmlnIH0sXG4gICAgICAgIHByb3ZpZGVDb25maWdWYWxpZGF0b3IoYmFzZVNpdGVDb25maWdWYWxpZGF0b3IpLFxuICAgICAgXSxcbiAgICB9O1xuICB9XG59XG4iXX0=