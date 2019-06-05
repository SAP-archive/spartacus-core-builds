/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2l0ZS1jb250ZXh0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9zaXRlLWNvbnRleHQvc2l0ZS1jb250ZXh0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUF1QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDdkYsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDakUsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDNUUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDaEYsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDdkYsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7O0FBVTNFLE1BQU0sT0FBTyxpQkFBaUI7Ozs7SUFDNUIsTUFBTSxDQUFDLE9BQU87UUFDWixPQUFPO1lBQ0wsUUFBUSxFQUFFLGlCQUFpQjtZQUMzQixTQUFTLEVBQUU7Z0JBQ1QseUJBQXlCO2dCQUN6QixHQUFHLHVCQUF1QjtnQkFDMUIsR0FBRywwQkFBMEI7Z0JBQzdCLEVBQUUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUU7YUFDcEQ7U0FDRixDQUFDO0lBQ0osQ0FBQzs7O1lBbEJGLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsWUFBWSxDQUFDLGlCQUFpQixDQUFDLCtCQUErQixDQUFDO29CQUMvRCxXQUFXO29CQUNYLHNCQUFzQjtpQkFDdkI7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb25maWcsIENvbmZpZ01vZHVsZSB9IGZyb20gJy4uL2NvbmZpZy9jb25maWcubW9kdWxlJztcbmltcG9ydCB7IFN0YXRlTW9kdWxlIH0gZnJvbSAnLi4vc3RhdGUvaW5kZXgnO1xuaW1wb3J0IHsgZGVmYXVsdFNpdGVDb250ZXh0Q29uZmlnRmFjdG9yeSB9IGZyb20gJy4vY29uZmlnL2RlZmF1bHQtc2l0ZS1jb250ZXh0LWNvbmZpZyc7XG5pbXBvcnQgeyBTaXRlQ29udGV4dENvbmZpZyB9IGZyb20gJy4vY29uZmlnL3NpdGUtY29udGV4dC1jb25maWcnO1xuaW1wb3J0IHsgY29udGV4dFNlcnZpY2VNYXBQcm92aWRlciB9IGZyb20gJy4vcHJvdmlkZXJzL2NvbnRleHQtc2VydmljZS1tYXAnO1xuaW1wb3J0IHsgY29udGV4dFNlcnZpY2VQcm92aWRlcnMgfSBmcm9tICcuL3Byb3ZpZGVycy9jb250ZXh0LXNlcnZpY2UtcHJvdmlkZXJzJztcbmltcG9ydCB7IHNpdGVDb250ZXh0UGFyYW1zUHJvdmlkZXJzIH0gZnJvbSAnLi9wcm92aWRlcnMvc2l0ZS1jb250ZXh0LXBhcmFtcy1wcm92aWRlcnMnO1xuaW1wb3J0IHsgU2l0ZUNvbnRleHRTdG9yZU1vZHVsZSB9IGZyb20gJy4vc3RvcmUvc2l0ZS1jb250ZXh0LXN0b3JlLm1vZHVsZSc7XG5cbi8vIEBkeW5hbWljXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29uZmlnTW9kdWxlLndpdGhDb25maWdGYWN0b3J5KGRlZmF1bHRTaXRlQ29udGV4dENvbmZpZ0ZhY3RvcnkpLFxuICAgIFN0YXRlTW9kdWxlLFxuICAgIFNpdGVDb250ZXh0U3RvcmVNb2R1bGUsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIFNpdGVDb250ZXh0TW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBTaXRlQ29udGV4dE1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICBjb250ZXh0U2VydmljZU1hcFByb3ZpZGVyLFxuICAgICAgICAuLi5jb250ZXh0U2VydmljZVByb3ZpZGVycyxcbiAgICAgICAgLi4uc2l0ZUNvbnRleHRQYXJhbXNQcm92aWRlcnMsXG4gICAgICAgIHsgcHJvdmlkZTogU2l0ZUNvbnRleHRDb25maWcsIHVzZUV4aXN0aW5nOiBDb25maWcgfSxcbiAgICAgIF0sXG4gICAgfTtcbiAgfVxufVxuIl19