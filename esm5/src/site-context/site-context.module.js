import { __decorate, __read, __spread } from "tslib";
import { NgModule } from '@angular/core';
import { provideDefaultConfigFactory } from '../config/config.module';
import { provideConfigValidator } from '../config/config-validator/config-validator';
import { StateModule } from '../state/index';
import { baseSiteConfigValidator } from './config/base-site-config-validator';
import { defaultSiteContextConfigFactory } from './config/default-site-context-config';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2l0ZS1jb250ZXh0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9zaXRlLWNvbnRleHQvc2l0ZS1jb250ZXh0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUF1QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDdEUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDckYsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQzlFLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3ZGLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQzVFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQ3ZGLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBRTNFLFdBQVc7QUFJWDtJQUFBO0lBYUEsQ0FBQzswQkFiWSxpQkFBaUI7SUFDckIseUJBQU8sR0FBZDtRQUNFLE9BQU87WUFDTCxRQUFRLEVBQUUsbUJBQWlCO1lBQzNCLFNBQVM7Z0JBQ1AsMkJBQTJCLENBQUMsK0JBQStCLENBQUM7Z0JBQzVELHlCQUF5QjtlQUN0Qix1QkFBdUIsRUFDdkIsMEJBQTBCO2dCQUM3QixzQkFBc0IsQ0FBQyx1QkFBdUIsQ0FBQztjQUNoRDtTQUNGLENBQUM7SUFDSixDQUFDOztJQVpVLGlCQUFpQjtRQUg3QixRQUFRLENBQUM7WUFDUixPQUFPLEVBQUUsQ0FBQyxXQUFXLEVBQUUsc0JBQXNCLENBQUM7U0FDL0MsQ0FBQztPQUNXLGlCQUFpQixDQWE3QjtJQUFELHdCQUFDO0NBQUEsQUFiRCxJQWFDO1NBYlksaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHByb3ZpZGVEZWZhdWx0Q29uZmlnRmFjdG9yeSB9IGZyb20gJy4uL2NvbmZpZy9jb25maWcubW9kdWxlJztcbmltcG9ydCB7IHByb3ZpZGVDb25maWdWYWxpZGF0b3IgfSBmcm9tICcuLi9jb25maWcvY29uZmlnLXZhbGlkYXRvci9jb25maWctdmFsaWRhdG9yJztcbmltcG9ydCB7IFN0YXRlTW9kdWxlIH0gZnJvbSAnLi4vc3RhdGUvaW5kZXgnO1xuaW1wb3J0IHsgYmFzZVNpdGVDb25maWdWYWxpZGF0b3IgfSBmcm9tICcuL2NvbmZpZy9iYXNlLXNpdGUtY29uZmlnLXZhbGlkYXRvcic7XG5pbXBvcnQgeyBkZWZhdWx0U2l0ZUNvbnRleHRDb25maWdGYWN0b3J5IH0gZnJvbSAnLi9jb25maWcvZGVmYXVsdC1zaXRlLWNvbnRleHQtY29uZmlnJztcbmltcG9ydCB7IGNvbnRleHRTZXJ2aWNlTWFwUHJvdmlkZXIgfSBmcm9tICcuL3Byb3ZpZGVycy9jb250ZXh0LXNlcnZpY2UtbWFwJztcbmltcG9ydCB7IGNvbnRleHRTZXJ2aWNlUHJvdmlkZXJzIH0gZnJvbSAnLi9wcm92aWRlcnMvY29udGV4dC1zZXJ2aWNlLXByb3ZpZGVycyc7XG5pbXBvcnQgeyBzaXRlQ29udGV4dFBhcmFtc1Byb3ZpZGVycyB9IGZyb20gJy4vcHJvdmlkZXJzL3NpdGUtY29udGV4dC1wYXJhbXMtcHJvdmlkZXJzJztcbmltcG9ydCB7IFNpdGVDb250ZXh0U3RvcmVNb2R1bGUgfSBmcm9tICcuL3N0b3JlL3NpdGUtY29udGV4dC1zdG9yZS5tb2R1bGUnO1xuXG4vLyBAZHluYW1pY1xuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1N0YXRlTW9kdWxlLCBTaXRlQ29udGV4dFN0b3JlTW9kdWxlXSxcbn0pXG5leHBvcnQgY2xhc3MgU2l0ZUNvbnRleHRNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzPFNpdGVDb250ZXh0TW9kdWxlPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBTaXRlQ29udGV4dE1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICBwcm92aWRlRGVmYXVsdENvbmZpZ0ZhY3RvcnkoZGVmYXVsdFNpdGVDb250ZXh0Q29uZmlnRmFjdG9yeSksXG4gICAgICAgIGNvbnRleHRTZXJ2aWNlTWFwUHJvdmlkZXIsXG4gICAgICAgIC4uLmNvbnRleHRTZXJ2aWNlUHJvdmlkZXJzLFxuICAgICAgICAuLi5zaXRlQ29udGV4dFBhcmFtc1Byb3ZpZGVycyxcbiAgICAgICAgcHJvdmlkZUNvbmZpZ1ZhbGlkYXRvcihiYXNlU2l0ZUNvbmZpZ1ZhbGlkYXRvciksXG4gICAgICBdLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==