/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2l0ZS1jb250ZXh0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9zaXRlLWNvbnRleHQvc2l0ZS1jb250ZXh0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBdUIsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDL0QsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDckYsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQzlFLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3ZGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ2pFLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQzVFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQ3ZGLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDOztBQUczRTtJQUFBO0lBb0JBLENBQUM7Ozs7SUFaUSx5QkFBTzs7O0lBQWQ7UUFDRSxPQUFPO1lBQ0wsUUFBUSxFQUFFLGlCQUFpQjtZQUMzQixTQUFTO2dCQUNQLHlCQUF5QjtlQUN0Qix1QkFBdUIsRUFDdkIsMEJBQTBCO2dCQUM3QixFQUFFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFO2dCQUNuRCxzQkFBc0IsQ0FBQyx1QkFBdUIsQ0FBQztjQUNoRDtTQUNGLENBQUM7SUFDSixDQUFDOztnQkFuQkYsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxZQUFZLENBQUMsaUJBQWlCLENBQUMsK0JBQStCLENBQUM7d0JBQy9ELFdBQVc7d0JBQ1gsc0JBQXNCO3FCQUN2QjtpQkFDRjs7SUFjRCx3QkFBQztDQUFBLEFBcEJELElBb0JDO1NBYlksaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbmZpZywgQ29uZmlnTW9kdWxlIH0gZnJvbSAnLi4vY29uZmlnL2NvbmZpZy5tb2R1bGUnO1xuaW1wb3J0IHsgcHJvdmlkZUNvbmZpZ1ZhbGlkYXRvciB9IGZyb20gJy4uL2NvbmZpZy9jb25maWctdmFsaWRhdG9yL2NvbmZpZy12YWxpZGF0b3InO1xuaW1wb3J0IHsgU3RhdGVNb2R1bGUgfSBmcm9tICcuLi9zdGF0ZS9pbmRleCc7XG5pbXBvcnQgeyBiYXNlU2l0ZUNvbmZpZ1ZhbGlkYXRvciB9IGZyb20gJy4vY29uZmlnL2Jhc2Utc2l0ZS1jb25maWctdmFsaWRhdG9yJztcbmltcG9ydCB7IGRlZmF1bHRTaXRlQ29udGV4dENvbmZpZ0ZhY3RvcnkgfSBmcm9tICcuL2NvbmZpZy9kZWZhdWx0LXNpdGUtY29udGV4dC1jb25maWcnO1xuaW1wb3J0IHsgU2l0ZUNvbnRleHRDb25maWcgfSBmcm9tICcuL2NvbmZpZy9zaXRlLWNvbnRleHQtY29uZmlnJztcbmltcG9ydCB7IGNvbnRleHRTZXJ2aWNlTWFwUHJvdmlkZXIgfSBmcm9tICcuL3Byb3ZpZGVycy9jb250ZXh0LXNlcnZpY2UtbWFwJztcbmltcG9ydCB7IGNvbnRleHRTZXJ2aWNlUHJvdmlkZXJzIH0gZnJvbSAnLi9wcm92aWRlcnMvY29udGV4dC1zZXJ2aWNlLXByb3ZpZGVycyc7XG5pbXBvcnQgeyBzaXRlQ29udGV4dFBhcmFtc1Byb3ZpZGVycyB9IGZyb20gJy4vcHJvdmlkZXJzL3NpdGUtY29udGV4dC1wYXJhbXMtcHJvdmlkZXJzJztcbmltcG9ydCB7IFNpdGVDb250ZXh0U3RvcmVNb2R1bGUgfSBmcm9tICcuL3N0b3JlL3NpdGUtY29udGV4dC1zdG9yZS5tb2R1bGUnO1xuXG4vLyBAZHluYW1pY1xuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbmZpZ01vZHVsZS53aXRoQ29uZmlnRmFjdG9yeShkZWZhdWx0U2l0ZUNvbnRleHRDb25maWdGYWN0b3J5KSxcbiAgICBTdGF0ZU1vZHVsZSxcbiAgICBTaXRlQ29udGV4dFN0b3JlTW9kdWxlLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBTaXRlQ29udGV4dE1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnM8U2l0ZUNvbnRleHRNb2R1bGU+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IFNpdGVDb250ZXh0TW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIGNvbnRleHRTZXJ2aWNlTWFwUHJvdmlkZXIsXG4gICAgICAgIC4uLmNvbnRleHRTZXJ2aWNlUHJvdmlkZXJzLFxuICAgICAgICAuLi5zaXRlQ29udGV4dFBhcmFtc1Byb3ZpZGVycyxcbiAgICAgICAgeyBwcm92aWRlOiBTaXRlQ29udGV4dENvbmZpZywgdXNlRXhpc3Rpbmc6IENvbmZpZyB9LFxuICAgICAgICBwcm92aWRlQ29uZmlnVmFsaWRhdG9yKGJhc2VTaXRlQ29uZmlnVmFsaWRhdG9yKSxcbiAgICAgIF0sXG4gICAgfTtcbiAgfVxufVxuIl19