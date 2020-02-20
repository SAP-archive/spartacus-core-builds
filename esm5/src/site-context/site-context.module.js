import { __decorate, __read, __spread } from "tslib";
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
var SiteContextModule = /** @class */ (function () {
    function SiteContextModule() {
    }
    SiteContextModule_1 = SiteContextModule;
    SiteContextModule.forRoot = function () {
        return {
            ngModule: SiteContextModule_1,
            providers: __spread([
                contextServiceMapProvider
            ], contextServiceProviders, siteContextParamsProviders, [
                { provide: SiteContextConfig, useExisting: Config },
                provideConfigValidator(baseSiteConfigValidator),
            ]),
        };
    };
    var SiteContextModule_1;
    SiteContextModule = SiteContextModule_1 = __decorate([
        NgModule({
            imports: [
                ConfigModule.withConfigFactory(defaultSiteContextConfigFactory),
                StateModule,
                SiteContextStoreModule,
            ],
        })
    ], SiteContextModule);
    return SiteContextModule;
}());
export { SiteContextModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2l0ZS1jb250ZXh0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9zaXRlLWNvbnRleHQvc2l0ZS1jb250ZXh0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUF1QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUNyRixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDOUUsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDdkYsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDakUsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDNUUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDaEYsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDdkYsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFFM0UsV0FBVztBQVFYO0lBQUE7SUFhQSxDQUFDOzBCQWJZLGlCQUFpQjtJQUNyQix5QkFBTyxHQUFkO1FBQ0UsT0FBTztZQUNMLFFBQVEsRUFBRSxtQkFBaUI7WUFDM0IsU0FBUztnQkFDUCx5QkFBeUI7ZUFDdEIsdUJBQXVCLEVBQ3ZCLDBCQUEwQjtnQkFDN0IsRUFBRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRTtnQkFDbkQsc0JBQXNCLENBQUMsdUJBQXVCLENBQUM7Y0FDaEQ7U0FDRixDQUFDO0lBQ0osQ0FBQzs7SUFaVSxpQkFBaUI7UUFQN0IsUUFBUSxDQUFDO1lBQ1IsT0FBTyxFQUFFO2dCQUNQLFlBQVksQ0FBQyxpQkFBaUIsQ0FBQywrQkFBK0IsQ0FBQztnQkFDL0QsV0FBVztnQkFDWCxzQkFBc0I7YUFDdkI7U0FDRixDQUFDO09BQ1csaUJBQWlCLENBYTdCO0lBQUQsd0JBQUM7Q0FBQSxBQWJELElBYUM7U0FiWSxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29uZmlnLCBDb25maWdNb2R1bGUgfSBmcm9tICcuLi9jb25maWcvY29uZmlnLm1vZHVsZSc7XG5pbXBvcnQgeyBwcm92aWRlQ29uZmlnVmFsaWRhdG9yIH0gZnJvbSAnLi4vY29uZmlnL2NvbmZpZy12YWxpZGF0b3IvY29uZmlnLXZhbGlkYXRvcic7XG5pbXBvcnQgeyBTdGF0ZU1vZHVsZSB9IGZyb20gJy4uL3N0YXRlL2luZGV4JztcbmltcG9ydCB7IGJhc2VTaXRlQ29uZmlnVmFsaWRhdG9yIH0gZnJvbSAnLi9jb25maWcvYmFzZS1zaXRlLWNvbmZpZy12YWxpZGF0b3InO1xuaW1wb3J0IHsgZGVmYXVsdFNpdGVDb250ZXh0Q29uZmlnRmFjdG9yeSB9IGZyb20gJy4vY29uZmlnL2RlZmF1bHQtc2l0ZS1jb250ZXh0LWNvbmZpZyc7XG5pbXBvcnQgeyBTaXRlQ29udGV4dENvbmZpZyB9IGZyb20gJy4vY29uZmlnL3NpdGUtY29udGV4dC1jb25maWcnO1xuaW1wb3J0IHsgY29udGV4dFNlcnZpY2VNYXBQcm92aWRlciB9IGZyb20gJy4vcHJvdmlkZXJzL2NvbnRleHQtc2VydmljZS1tYXAnO1xuaW1wb3J0IHsgY29udGV4dFNlcnZpY2VQcm92aWRlcnMgfSBmcm9tICcuL3Byb3ZpZGVycy9jb250ZXh0LXNlcnZpY2UtcHJvdmlkZXJzJztcbmltcG9ydCB7IHNpdGVDb250ZXh0UGFyYW1zUHJvdmlkZXJzIH0gZnJvbSAnLi9wcm92aWRlcnMvc2l0ZS1jb250ZXh0LXBhcmFtcy1wcm92aWRlcnMnO1xuaW1wb3J0IHsgU2l0ZUNvbnRleHRTdG9yZU1vZHVsZSB9IGZyb20gJy4vc3RvcmUvc2l0ZS1jb250ZXh0LXN0b3JlLm1vZHVsZSc7XG5cbi8vIEBkeW5hbWljXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29uZmlnTW9kdWxlLndpdGhDb25maWdGYWN0b3J5KGRlZmF1bHRTaXRlQ29udGV4dENvbmZpZ0ZhY3RvcnkpLFxuICAgIFN0YXRlTW9kdWxlLFxuICAgIFNpdGVDb250ZXh0U3RvcmVNb2R1bGUsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIFNpdGVDb250ZXh0TW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVyczxTaXRlQ29udGV4dE1vZHVsZT4ge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogU2l0ZUNvbnRleHRNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgY29udGV4dFNlcnZpY2VNYXBQcm92aWRlcixcbiAgICAgICAgLi4uY29udGV4dFNlcnZpY2VQcm92aWRlcnMsXG4gICAgICAgIC4uLnNpdGVDb250ZXh0UGFyYW1zUHJvdmlkZXJzLFxuICAgICAgICB7IHByb3ZpZGU6IFNpdGVDb250ZXh0Q29uZmlnLCB1c2VFeGlzdGluZzogQ29uZmlnIH0sXG4gICAgICAgIHByb3ZpZGVDb25maWdWYWxpZGF0b3IoYmFzZVNpdGVDb25maWdWYWxpZGF0b3IpLFxuICAgICAgXSxcbiAgICB9O1xuICB9XG59XG4iXX0=