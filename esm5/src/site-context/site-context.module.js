/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
var SiteContextModule = /** @class */ (function () {
    function SiteContextModule() {
    }
    /**
     * @return {?}
     */
    SiteContextModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: SiteContextModule,
            providers: tslib_1.__spread([
                contextServiceMapProvider
            ], contextServiceProviders, siteContextParamsProviders, [
                { provide: SiteContextConfig, useExisting: Config },
                provideConfigValidator(baseSiteConfigValidator),
            ]),
        };
    };
    SiteContextModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        ConfigModule.withConfigFactory(defaultSiteContextConfigFactory),
                        StateModule,
                        SiteContextStoreModule,
                    ],
                },] }
    ];
    return SiteContextModule;
}());
export { SiteContextModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2l0ZS1jb250ZXh0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9zaXRlLWNvbnRleHQvc2l0ZS1jb250ZXh0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBdUIsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDL0QsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3ZGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ2pFLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQzVFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQ3ZGLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDOztBQUc5RTtJQUFBO0lBb0JBLENBQUM7Ozs7SUFaUSx5QkFBTzs7O0lBQWQ7UUFDRSxPQUFPO1lBQ0wsUUFBUSxFQUFFLGlCQUFpQjtZQUMzQixTQUFTO2dCQUNQLHlCQUF5QjtlQUN0Qix1QkFBdUIsRUFDdkIsMEJBQTBCO2dCQUM3QixFQUFFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFO2dCQUNuRCxzQkFBc0IsQ0FBQyx1QkFBdUIsQ0FBQztjQUNoRDtTQUNGLENBQUM7SUFDSixDQUFDOztnQkFuQkYsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxZQUFZLENBQUMsaUJBQWlCLENBQUMsK0JBQStCLENBQUM7d0JBQy9ELFdBQVc7d0JBQ1gsc0JBQXNCO3FCQUN2QjtpQkFDRjs7SUFjRCx3QkFBQztDQUFBLEFBcEJELElBb0JDO1NBYlksaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbmZpZywgQ29uZmlnTW9kdWxlIH0gZnJvbSAnLi4vY29uZmlnL2NvbmZpZy5tb2R1bGUnO1xuaW1wb3J0IHsgU3RhdGVNb2R1bGUgfSBmcm9tICcuLi9zdGF0ZS9pbmRleCc7XG5pbXBvcnQgeyBkZWZhdWx0U2l0ZUNvbnRleHRDb25maWdGYWN0b3J5IH0gZnJvbSAnLi9jb25maWcvZGVmYXVsdC1zaXRlLWNvbnRleHQtY29uZmlnJztcbmltcG9ydCB7IFNpdGVDb250ZXh0Q29uZmlnIH0gZnJvbSAnLi9jb25maWcvc2l0ZS1jb250ZXh0LWNvbmZpZyc7XG5pbXBvcnQgeyBjb250ZXh0U2VydmljZU1hcFByb3ZpZGVyIH0gZnJvbSAnLi9wcm92aWRlcnMvY29udGV4dC1zZXJ2aWNlLW1hcCc7XG5pbXBvcnQgeyBjb250ZXh0U2VydmljZVByb3ZpZGVycyB9IGZyb20gJy4vcHJvdmlkZXJzL2NvbnRleHQtc2VydmljZS1wcm92aWRlcnMnO1xuaW1wb3J0IHsgc2l0ZUNvbnRleHRQYXJhbXNQcm92aWRlcnMgfSBmcm9tICcuL3Byb3ZpZGVycy9zaXRlLWNvbnRleHQtcGFyYW1zLXByb3ZpZGVycyc7XG5pbXBvcnQgeyBTaXRlQ29udGV4dFN0b3JlTW9kdWxlIH0gZnJvbSAnLi9zdG9yZS9zaXRlLWNvbnRleHQtc3RvcmUubW9kdWxlJztcbmltcG9ydCB7IHByb3ZpZGVDb25maWdWYWxpZGF0b3IgfSBmcm9tICcuLi9jb25maWcvdXRpbHMvY29uZmlnLXZhbGlkYXRvcic7XG5pbXBvcnQgeyBiYXNlU2l0ZUNvbmZpZ1ZhbGlkYXRvciB9IGZyb20gJy4vY29uZmlnL2Jhc2Utc2l0ZS1jb25maWctdmFsaWRhdG9yJztcblxuLy8gQGR5bmFtaWNcbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb25maWdNb2R1bGUud2l0aENvbmZpZ0ZhY3RvcnkoZGVmYXVsdFNpdGVDb250ZXh0Q29uZmlnRmFjdG9yeSksXG4gICAgU3RhdGVNb2R1bGUsXG4gICAgU2l0ZUNvbnRleHRTdG9yZU1vZHVsZSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgU2l0ZUNvbnRleHRNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzPFNpdGVDb250ZXh0TW9kdWxlPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBTaXRlQ29udGV4dE1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICBjb250ZXh0U2VydmljZU1hcFByb3ZpZGVyLFxuICAgICAgICAuLi5jb250ZXh0U2VydmljZVByb3ZpZGVycyxcbiAgICAgICAgLi4uc2l0ZUNvbnRleHRQYXJhbXNQcm92aWRlcnMsXG4gICAgICAgIHsgcHJvdmlkZTogU2l0ZUNvbnRleHRDb25maWcsIHVzZUV4aXN0aW5nOiBDb25maWcgfSxcbiAgICAgICAgcHJvdmlkZUNvbmZpZ1ZhbGlkYXRvcihiYXNlU2l0ZUNvbmZpZ1ZhbGlkYXRvciksXG4gICAgICBdLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==