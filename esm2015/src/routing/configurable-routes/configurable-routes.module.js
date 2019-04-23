/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { ConfigurableRoutesService } from './configurable-routes.service';
import { RoutesConfigLoader } from './routes-config-loader';
import { ConfigModule, Config } from '../../config/config.module';
import { ConfigurableRoutesConfig } from './config/configurable-routes-config';
import { defaultConfigurableRoutesConfig } from './config/default-configurable-routes-config';
import { UrlParsingService } from './url-translation/url-parsing.service';
import { UrlTranslationService } from './url-translation/url-translation.service';
/**
 * @param {?} service
 * @return {?}
 */
export function initConfigurableRoutes(service) {
    /** @type {?} */
    const result = () => service.init();
    return result;
}
export class ConfigurableRoutesModule {
}
ConfigurableRoutesModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    ConfigModule.withConfig(defaultConfigurableRoutesConfig),
                ],
                declarations: [],
                exports: [],
                providers: [
                    ConfigurableRoutesService,
                    RoutesConfigLoader,
                    UrlTranslationService,
                    UrlParsingService,
                    {
                        provide: APP_INITIALIZER,
                        useFactory: initConfigurableRoutes,
                        deps: [ConfigurableRoutesService],
                        multi: true,
                    },
                    { provide: ConfigurableRoutesConfig, useExisting: Config },
                ],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlndXJhYmxlLXJvdXRlcy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvcm91dGluZy9jb25maWd1cmFibGUtcm91dGVzL2NvbmZpZ3VyYWJsZS1yb3V0ZXMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxlQUFlLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUQsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDMUUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDNUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUMvRSxPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUM5RixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUMxRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQzs7Ozs7QUFFbEYsTUFBTSxVQUFVLHNCQUFzQixDQUNwQyxPQUFrQzs7VUFFNUIsTUFBTSxHQUFHLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUU7SUFDbkMsT0FBTyxNQUFNLENBQUM7QUFDaEIsQ0FBQztBQXVCRCxNQUFNLE9BQU8sd0JBQXdCOzs7WUFyQnBDLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWixZQUFZLENBQUMsVUFBVSxDQUFDLCtCQUErQixDQUFDO2lCQUN6RDtnQkFDRCxZQUFZLEVBQUUsRUFBRTtnQkFDaEIsT0FBTyxFQUFFLEVBQUU7Z0JBQ1gsU0FBUyxFQUFFO29CQUNULHlCQUF5QjtvQkFDekIsa0JBQWtCO29CQUNsQixxQkFBcUI7b0JBQ3JCLGlCQUFpQjtvQkFDakI7d0JBQ0UsT0FBTyxFQUFFLGVBQWU7d0JBQ3hCLFVBQVUsRUFBRSxzQkFBc0I7d0JBQ2xDLElBQUksRUFBRSxDQUFDLHlCQUF5QixDQUFDO3dCQUNqQyxLQUFLLEVBQUUsSUFBSTtxQkFDWjtvQkFDRCxFQUFFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFO2lCQUMzRDthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlLCBBUFBfSU5JVElBTElaRVIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbmZpZ3VyYWJsZVJvdXRlc1NlcnZpY2UgfSBmcm9tICcuL2NvbmZpZ3VyYWJsZS1yb3V0ZXMuc2VydmljZSc7XG5pbXBvcnQgeyBSb3V0ZXNDb25maWdMb2FkZXIgfSBmcm9tICcuL3JvdXRlcy1jb25maWctbG9hZGVyJztcbmltcG9ydCB7IENvbmZpZ01vZHVsZSwgQ29uZmlnIH0gZnJvbSAnLi4vLi4vY29uZmlnL2NvbmZpZy5tb2R1bGUnO1xuaW1wb3J0IHsgQ29uZmlndXJhYmxlUm91dGVzQ29uZmlnIH0gZnJvbSAnLi9jb25maWcvY29uZmlndXJhYmxlLXJvdXRlcy1jb25maWcnO1xuaW1wb3J0IHsgZGVmYXVsdENvbmZpZ3VyYWJsZVJvdXRlc0NvbmZpZyB9IGZyb20gJy4vY29uZmlnL2RlZmF1bHQtY29uZmlndXJhYmxlLXJvdXRlcy1jb25maWcnO1xuaW1wb3J0IHsgVXJsUGFyc2luZ1NlcnZpY2UgfSBmcm9tICcuL3VybC10cmFuc2xhdGlvbi91cmwtcGFyc2luZy5zZXJ2aWNlJztcbmltcG9ydCB7IFVybFRyYW5zbGF0aW9uU2VydmljZSB9IGZyb20gJy4vdXJsLXRyYW5zbGF0aW9uL3VybC10cmFuc2xhdGlvbi5zZXJ2aWNlJztcblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRDb25maWd1cmFibGVSb3V0ZXMoXG4gIHNlcnZpY2U6IENvbmZpZ3VyYWJsZVJvdXRlc1NlcnZpY2Vcbik6ICgpID0+IFByb21pc2U8dm9pZD4ge1xuICBjb25zdCByZXN1bHQgPSAoKSA9PiBzZXJ2aWNlLmluaXQoKTsgLy8gd29ya2Fyb3VuZCBmb3IgQU9UIGNvbXBpbGF0aW9uIChzZWUgaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzUxOTc3MTE1KVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIENvbmZpZ01vZHVsZS53aXRoQ29uZmlnKGRlZmF1bHRDb25maWd1cmFibGVSb3V0ZXNDb25maWcpLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtdLFxuICBleHBvcnRzOiBbXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgQ29uZmlndXJhYmxlUm91dGVzU2VydmljZSxcbiAgICBSb3V0ZXNDb25maWdMb2FkZXIsXG4gICAgVXJsVHJhbnNsYXRpb25TZXJ2aWNlLFxuICAgIFVybFBhcnNpbmdTZXJ2aWNlLFxuICAgIHtcbiAgICAgIHByb3ZpZGU6IEFQUF9JTklUSUFMSVpFUixcbiAgICAgIHVzZUZhY3Rvcnk6IGluaXRDb25maWd1cmFibGVSb3V0ZXMsXG4gICAgICBkZXBzOiBbQ29uZmlndXJhYmxlUm91dGVzU2VydmljZV0sXG4gICAgICBtdWx0aTogdHJ1ZSxcbiAgICB9LFxuICAgIHsgcHJvdmlkZTogQ29uZmlndXJhYmxlUm91dGVzQ29uZmlnLCB1c2VFeGlzdGluZzogQ29uZmlnIH0sXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIENvbmZpZ3VyYWJsZVJvdXRlc01vZHVsZSB7fVxuIl19