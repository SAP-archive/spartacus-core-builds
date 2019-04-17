/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { SiteContextOccModule } from './occ/site-context-occ.module';
import { SiteContextStoreModule } from './store/site-context-store.module';
import { StateModule } from '../state/index';
import { Config, ConfigModule } from '../config/config.module';
import { defaultSiteContextConfigFactory } from './config/default-site-context-config';
import { SiteContextConfig } from './config/site-context-config';
import { contextServiceMapProvider } from './providers/context-service-map';
import { contextServiceProviders } from './providers/context-service-providers';
import { siteContextParamsProviders } from './providers/site-context-params-providers';
import { interceptors } from './occ/index';
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
            providers: tslib_1.__spread(interceptors),
        };
    };
    SiteContextModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        ConfigModule.withConfigFactory(defaultSiteContextConfigFactory),
                        StateModule,
                        SiteContextOccModule,
                        SiteContextStoreModule,
                    ],
                    providers: tslib_1.__spread([
                        contextServiceMapProvider
                    ], contextServiceProviders, siteContextParamsProviders, [
                        { provide: SiteContextConfig, useExisting: Config },
                    ]),
                },] }
    ];
    return SiteContextModule;
}());
export { SiteContextModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2l0ZS1jb250ZXh0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9zaXRlLWNvbnRleHQvc2l0ZS1jb250ZXh0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBdUIsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ3JFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQy9ELE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3ZGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ2pFLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQzVFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQ3ZGLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxhQUFhLENBQUM7O0FBRzNDO0lBQUE7SUFxQkEsQ0FBQzs7OztJQU5RLHlCQUFPOzs7SUFBZDtRQUNFLE9BQU87WUFDTCxRQUFRLEVBQUUsaUJBQWlCO1lBQzNCLFNBQVMsbUJBQU0sWUFBWSxDQUFDO1NBQzdCLENBQUM7SUFDSixDQUFDOztnQkFwQkYsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxZQUFZLENBQUMsaUJBQWlCLENBQUMsK0JBQStCLENBQUM7d0JBQy9ELFdBQVc7d0JBQ1gsb0JBQW9CO3dCQUNwQixzQkFBc0I7cUJBQ3ZCO29CQUNELFNBQVM7d0JBQ1AseUJBQXlCO3VCQUN0Qix1QkFBdUIsRUFDdkIsMEJBQTBCO3dCQUM3QixFQUFFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFO3NCQUNwRDtpQkFDRjs7SUFRRCx3QkFBQztDQUFBLEFBckJELElBcUJDO1NBUFksaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNpdGVDb250ZXh0T2NjTW9kdWxlIH0gZnJvbSAnLi9vY2Mvc2l0ZS1jb250ZXh0LW9jYy5tb2R1bGUnO1xuaW1wb3J0IHsgU2l0ZUNvbnRleHRTdG9yZU1vZHVsZSB9IGZyb20gJy4vc3RvcmUvc2l0ZS1jb250ZXh0LXN0b3JlLm1vZHVsZSc7XG5pbXBvcnQgeyBTdGF0ZU1vZHVsZSB9IGZyb20gJy4uL3N0YXRlL2luZGV4JztcbmltcG9ydCB7IENvbmZpZywgQ29uZmlnTW9kdWxlIH0gZnJvbSAnLi4vY29uZmlnL2NvbmZpZy5tb2R1bGUnO1xuaW1wb3J0IHsgZGVmYXVsdFNpdGVDb250ZXh0Q29uZmlnRmFjdG9yeSB9IGZyb20gJy4vY29uZmlnL2RlZmF1bHQtc2l0ZS1jb250ZXh0LWNvbmZpZyc7XG5pbXBvcnQgeyBTaXRlQ29udGV4dENvbmZpZyB9IGZyb20gJy4vY29uZmlnL3NpdGUtY29udGV4dC1jb25maWcnO1xuaW1wb3J0IHsgY29udGV4dFNlcnZpY2VNYXBQcm92aWRlciB9IGZyb20gJy4vcHJvdmlkZXJzL2NvbnRleHQtc2VydmljZS1tYXAnO1xuaW1wb3J0IHsgY29udGV4dFNlcnZpY2VQcm92aWRlcnMgfSBmcm9tICcuL3Byb3ZpZGVycy9jb250ZXh0LXNlcnZpY2UtcHJvdmlkZXJzJztcbmltcG9ydCB7IHNpdGVDb250ZXh0UGFyYW1zUHJvdmlkZXJzIH0gZnJvbSAnLi9wcm92aWRlcnMvc2l0ZS1jb250ZXh0LXBhcmFtcy1wcm92aWRlcnMnO1xuaW1wb3J0IHsgaW50ZXJjZXB0b3JzIH0gZnJvbSAnLi9vY2MvaW5kZXgnO1xuXG4vLyBAZHluYW1pY1xuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbmZpZ01vZHVsZS53aXRoQ29uZmlnRmFjdG9yeShkZWZhdWx0U2l0ZUNvbnRleHRDb25maWdGYWN0b3J5KSxcbiAgICBTdGF0ZU1vZHVsZSxcbiAgICBTaXRlQ29udGV4dE9jY01vZHVsZSxcbiAgICBTaXRlQ29udGV4dFN0b3JlTW9kdWxlLFxuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICBjb250ZXh0U2VydmljZU1hcFByb3ZpZGVyLFxuICAgIC4uLmNvbnRleHRTZXJ2aWNlUHJvdmlkZXJzLFxuICAgIC4uLnNpdGVDb250ZXh0UGFyYW1zUHJvdmlkZXJzLFxuICAgIHsgcHJvdmlkZTogU2l0ZUNvbnRleHRDb25maWcsIHVzZUV4aXN0aW5nOiBDb25maWcgfSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgU2l0ZUNvbnRleHRNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IFNpdGVDb250ZXh0TW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbLi4uaW50ZXJjZXB0b3JzXSxcbiAgICB9O1xuICB9XG59XG4iXX0=