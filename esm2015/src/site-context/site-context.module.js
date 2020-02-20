var SiteContextModule_1;
import { __decorate } from "tslib";
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
let SiteContextModule = SiteContextModule_1 = class SiteContextModule {
    static forRoot() {
        return {
            ngModule: SiteContextModule_1,
            providers: [
                contextServiceMapProvider,
                ...contextServiceProviders,
                ...siteContextParamsProviders,
                { provide: SiteContextConfig, useExisting: Config },
                provideConfigValidator(baseSiteConfigValidator),
            ],
        };
    }
};
SiteContextModule = SiteContextModule_1 = __decorate([
    NgModule({
        imports: [
            ConfigModule.withConfigFactory(defaultSiteContextConfigFactory),
            StateModule,
            SiteContextStoreModule,
        ],
    })
], SiteContextModule);
export { SiteContextModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2l0ZS1jb250ZXh0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9zaXRlLWNvbnRleHQvc2l0ZS1jb250ZXh0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE9BQU8sRUFBdUIsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDL0QsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDckYsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQzlFLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3ZGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ2pFLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQzVFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQ3ZGLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBRTNFLFdBQVc7QUFRWCxJQUFhLGlCQUFpQix5QkFBOUIsTUFBYSxpQkFBaUI7SUFDNUIsTUFBTSxDQUFDLE9BQU87UUFDWixPQUFPO1lBQ0wsUUFBUSxFQUFFLG1CQUFpQjtZQUMzQixTQUFTLEVBQUU7Z0JBQ1QseUJBQXlCO2dCQUN6QixHQUFHLHVCQUF1QjtnQkFDMUIsR0FBRywwQkFBMEI7Z0JBQzdCLEVBQUUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUU7Z0JBQ25ELHNCQUFzQixDQUFDLHVCQUF1QixDQUFDO2FBQ2hEO1NBQ0YsQ0FBQztJQUNKLENBQUM7Q0FDRixDQUFBO0FBYlksaUJBQWlCO0lBUDdCLFFBQVEsQ0FBQztRQUNSLE9BQU8sRUFBRTtZQUNQLFlBQVksQ0FBQyxpQkFBaUIsQ0FBQywrQkFBK0IsQ0FBQztZQUMvRCxXQUFXO1lBQ1gsc0JBQXNCO1NBQ3ZCO0tBQ0YsQ0FBQztHQUNXLGlCQUFpQixDQWE3QjtTQWJZLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb25maWcsIENvbmZpZ01vZHVsZSB9IGZyb20gJy4uL2NvbmZpZy9jb25maWcubW9kdWxlJztcbmltcG9ydCB7IHByb3ZpZGVDb25maWdWYWxpZGF0b3IgfSBmcm9tICcuLi9jb25maWcvY29uZmlnLXZhbGlkYXRvci9jb25maWctdmFsaWRhdG9yJztcbmltcG9ydCB7IFN0YXRlTW9kdWxlIH0gZnJvbSAnLi4vc3RhdGUvaW5kZXgnO1xuaW1wb3J0IHsgYmFzZVNpdGVDb25maWdWYWxpZGF0b3IgfSBmcm9tICcuL2NvbmZpZy9iYXNlLXNpdGUtY29uZmlnLXZhbGlkYXRvcic7XG5pbXBvcnQgeyBkZWZhdWx0U2l0ZUNvbnRleHRDb25maWdGYWN0b3J5IH0gZnJvbSAnLi9jb25maWcvZGVmYXVsdC1zaXRlLWNvbnRleHQtY29uZmlnJztcbmltcG9ydCB7IFNpdGVDb250ZXh0Q29uZmlnIH0gZnJvbSAnLi9jb25maWcvc2l0ZS1jb250ZXh0LWNvbmZpZyc7XG5pbXBvcnQgeyBjb250ZXh0U2VydmljZU1hcFByb3ZpZGVyIH0gZnJvbSAnLi9wcm92aWRlcnMvY29udGV4dC1zZXJ2aWNlLW1hcCc7XG5pbXBvcnQgeyBjb250ZXh0U2VydmljZVByb3ZpZGVycyB9IGZyb20gJy4vcHJvdmlkZXJzL2NvbnRleHQtc2VydmljZS1wcm92aWRlcnMnO1xuaW1wb3J0IHsgc2l0ZUNvbnRleHRQYXJhbXNQcm92aWRlcnMgfSBmcm9tICcuL3Byb3ZpZGVycy9zaXRlLWNvbnRleHQtcGFyYW1zLXByb3ZpZGVycyc7XG5pbXBvcnQgeyBTaXRlQ29udGV4dFN0b3JlTW9kdWxlIH0gZnJvbSAnLi9zdG9yZS9zaXRlLWNvbnRleHQtc3RvcmUubW9kdWxlJztcblxuLy8gQGR5bmFtaWNcbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb25maWdNb2R1bGUud2l0aENvbmZpZ0ZhY3RvcnkoZGVmYXVsdFNpdGVDb250ZXh0Q29uZmlnRmFjdG9yeSksXG4gICAgU3RhdGVNb2R1bGUsXG4gICAgU2l0ZUNvbnRleHRTdG9yZU1vZHVsZSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgU2l0ZUNvbnRleHRNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzPFNpdGVDb250ZXh0TW9kdWxlPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBTaXRlQ29udGV4dE1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICBjb250ZXh0U2VydmljZU1hcFByb3ZpZGVyLFxuICAgICAgICAuLi5jb250ZXh0U2VydmljZVByb3ZpZGVycyxcbiAgICAgICAgLi4uc2l0ZUNvbnRleHRQYXJhbXNQcm92aWRlcnMsXG4gICAgICAgIHsgcHJvdmlkZTogU2l0ZUNvbnRleHRDb25maWcsIHVzZUV4aXN0aW5nOiBDb25maWcgfSxcbiAgICAgICAgcHJvdmlkZUNvbmZpZ1ZhbGlkYXRvcihiYXNlU2l0ZUNvbmZpZ1ZhbGlkYXRvciksXG4gICAgICBdLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==