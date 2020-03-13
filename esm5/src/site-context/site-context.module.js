import { __decorate, __read, __spread } from "tslib";
import { NgModule } from '@angular/core';
import { Config, provideDefaultConfigFactory } from '../config/config.module';
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
                provideDefaultConfigFactory(defaultSiteContextConfigFactory),
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
            imports: [StateModule, SiteContextStoreModule],
        })
    ], SiteContextModule);
    return SiteContextModule;
}());
export { SiteContextModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2l0ZS1jb250ZXh0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9zaXRlLWNvbnRleHQvc2l0ZS1jb250ZXh0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUF1QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLE1BQU0sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzlFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQ3JGLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUM5RSxPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUN2RixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNqRSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUM1RSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUNoRixPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUN2RixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUUzRSxXQUFXO0FBSVg7SUFBQTtJQWNBLENBQUM7MEJBZFksaUJBQWlCO0lBQ3JCLHlCQUFPLEdBQWQ7UUFDRSxPQUFPO1lBQ0wsUUFBUSxFQUFFLG1CQUFpQjtZQUMzQixTQUFTO2dCQUNQLDJCQUEyQixDQUFDLCtCQUErQixDQUFDO2dCQUM1RCx5QkFBeUI7ZUFDdEIsdUJBQXVCLEVBQ3ZCLDBCQUEwQjtnQkFDN0IsRUFBRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRTtnQkFDbkQsc0JBQXNCLENBQUMsdUJBQXVCLENBQUM7Y0FDaEQ7U0FDRixDQUFDO0lBQ0osQ0FBQzs7SUFiVSxpQkFBaUI7UUFIN0IsUUFBUSxDQUFDO1lBQ1IsT0FBTyxFQUFFLENBQUMsV0FBVyxFQUFFLHNCQUFzQixDQUFDO1NBQy9DLENBQUM7T0FDVyxpQkFBaUIsQ0FjN0I7SUFBRCx3QkFBQztDQUFBLEFBZEQsSUFjQztTQWRZLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb25maWcsIHByb3ZpZGVEZWZhdWx0Q29uZmlnRmFjdG9yeSB9IGZyb20gJy4uL2NvbmZpZy9jb25maWcubW9kdWxlJztcbmltcG9ydCB7IHByb3ZpZGVDb25maWdWYWxpZGF0b3IgfSBmcm9tICcuLi9jb25maWcvY29uZmlnLXZhbGlkYXRvci9jb25maWctdmFsaWRhdG9yJztcbmltcG9ydCB7IFN0YXRlTW9kdWxlIH0gZnJvbSAnLi4vc3RhdGUvaW5kZXgnO1xuaW1wb3J0IHsgYmFzZVNpdGVDb25maWdWYWxpZGF0b3IgfSBmcm9tICcuL2NvbmZpZy9iYXNlLXNpdGUtY29uZmlnLXZhbGlkYXRvcic7XG5pbXBvcnQgeyBkZWZhdWx0U2l0ZUNvbnRleHRDb25maWdGYWN0b3J5IH0gZnJvbSAnLi9jb25maWcvZGVmYXVsdC1zaXRlLWNvbnRleHQtY29uZmlnJztcbmltcG9ydCB7IFNpdGVDb250ZXh0Q29uZmlnIH0gZnJvbSAnLi9jb25maWcvc2l0ZS1jb250ZXh0LWNvbmZpZyc7XG5pbXBvcnQgeyBjb250ZXh0U2VydmljZU1hcFByb3ZpZGVyIH0gZnJvbSAnLi9wcm92aWRlcnMvY29udGV4dC1zZXJ2aWNlLW1hcCc7XG5pbXBvcnQgeyBjb250ZXh0U2VydmljZVByb3ZpZGVycyB9IGZyb20gJy4vcHJvdmlkZXJzL2NvbnRleHQtc2VydmljZS1wcm92aWRlcnMnO1xuaW1wb3J0IHsgc2l0ZUNvbnRleHRQYXJhbXNQcm92aWRlcnMgfSBmcm9tICcuL3Byb3ZpZGVycy9zaXRlLWNvbnRleHQtcGFyYW1zLXByb3ZpZGVycyc7XG5pbXBvcnQgeyBTaXRlQ29udGV4dFN0b3JlTW9kdWxlIH0gZnJvbSAnLi9zdG9yZS9zaXRlLWNvbnRleHQtc3RvcmUubW9kdWxlJztcblxuLy8gQGR5bmFtaWNcbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtTdGF0ZU1vZHVsZSwgU2l0ZUNvbnRleHRTdG9yZU1vZHVsZV0sXG59KVxuZXhwb3J0IGNsYXNzIFNpdGVDb250ZXh0TW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVyczxTaXRlQ29udGV4dE1vZHVsZT4ge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogU2l0ZUNvbnRleHRNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgcHJvdmlkZURlZmF1bHRDb25maWdGYWN0b3J5KGRlZmF1bHRTaXRlQ29udGV4dENvbmZpZ0ZhY3RvcnkpLFxuICAgICAgICBjb250ZXh0U2VydmljZU1hcFByb3ZpZGVyLFxuICAgICAgICAuLi5jb250ZXh0U2VydmljZVByb3ZpZGVycyxcbiAgICAgICAgLi4uc2l0ZUNvbnRleHRQYXJhbXNQcm92aWRlcnMsXG4gICAgICAgIHsgcHJvdmlkZTogU2l0ZUNvbnRleHRDb25maWcsIHVzZUV4aXN0aW5nOiBDb25maWcgfSxcbiAgICAgICAgcHJvdmlkZUNvbmZpZ1ZhbGlkYXRvcihiYXNlU2l0ZUNvbmZpZ1ZhbGlkYXRvciksXG4gICAgICBdLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==