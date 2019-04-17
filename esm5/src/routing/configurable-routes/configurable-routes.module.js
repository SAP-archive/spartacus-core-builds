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
import { RouteRecognizerService } from './url-translation/route-recognizer.service';
import { UrlTranslationService } from './url-translation/url-translation.service';
/**
 * @param {?} service
 * @return {?}
 */
export function initConfigurableRoutes(service) {
    /** @type {?} */
    var result = function () { return service.init(); };
    return result;
}
var ConfigurableRoutesModule = /** @class */ (function () {
    function ConfigurableRoutesModule() {
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
                        RouteRecognizerService,
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
    return ConfigurableRoutesModule;
}());
export { ConfigurableRoutesModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlndXJhYmxlLXJvdXRlcy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvcm91dGluZy9jb25maWd1cmFibGUtcm91dGVzL2NvbmZpZ3VyYWJsZS1yb3V0ZXMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxlQUFlLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUQsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDMUUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDNUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUMvRSxPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUM5RixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUMxRSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUNwRixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQzs7Ozs7QUFFbEYsTUFBTSxVQUFVLHNCQUFzQixDQUNwQyxPQUFrQzs7UUFFNUIsTUFBTSxHQUFHLGNBQU0sT0FBQSxPQUFPLENBQUMsSUFBSSxFQUFFLEVBQWQsQ0FBYztJQUNuQyxPQUFPLE1BQU0sQ0FBQztBQUNoQixDQUFDO0FBRUQ7SUFBQTtJQXNCdUMsQ0FBQzs7Z0JBdEJ2QyxRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osWUFBWSxDQUFDLFVBQVUsQ0FBQywrQkFBK0IsQ0FBQztxQkFDekQ7b0JBQ0QsWUFBWSxFQUFFLEVBQUU7b0JBQ2hCLE9BQU8sRUFBRSxFQUFFO29CQUNYLFNBQVMsRUFBRTt3QkFDVCx5QkFBeUI7d0JBQ3pCLGtCQUFrQjt3QkFDbEIscUJBQXFCO3dCQUNyQixzQkFBc0I7d0JBQ3RCLGlCQUFpQjt3QkFDakI7NEJBQ0UsT0FBTyxFQUFFLGVBQWU7NEJBQ3hCLFVBQVUsRUFBRSxzQkFBc0I7NEJBQ2xDLElBQUksRUFBRSxDQUFDLHlCQUF5QixDQUFDOzRCQUNqQyxLQUFLLEVBQUUsSUFBSTt5QkFDWjt3QkFDRCxFQUFFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFO3FCQUMzRDtpQkFDRjs7SUFDc0MsK0JBQUM7Q0FBQSxBQXRCeEMsSUFzQndDO1NBQTNCLHdCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSwgQVBQX0lOSVRJQUxJWkVSIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb25maWd1cmFibGVSb3V0ZXNTZXJ2aWNlIH0gZnJvbSAnLi9jb25maWd1cmFibGUtcm91dGVzLnNlcnZpY2UnO1xuaW1wb3J0IHsgUm91dGVzQ29uZmlnTG9hZGVyIH0gZnJvbSAnLi9yb3V0ZXMtY29uZmlnLWxvYWRlcic7XG5pbXBvcnQgeyBDb25maWdNb2R1bGUsIENvbmZpZyB9IGZyb20gJy4uLy4uL2NvbmZpZy9jb25maWcubW9kdWxlJztcbmltcG9ydCB7IENvbmZpZ3VyYWJsZVJvdXRlc0NvbmZpZyB9IGZyb20gJy4vY29uZmlnL2NvbmZpZ3VyYWJsZS1yb3V0ZXMtY29uZmlnJztcbmltcG9ydCB7IGRlZmF1bHRDb25maWd1cmFibGVSb3V0ZXNDb25maWcgfSBmcm9tICcuL2NvbmZpZy9kZWZhdWx0LWNvbmZpZ3VyYWJsZS1yb3V0ZXMtY29uZmlnJztcbmltcG9ydCB7IFVybFBhcnNpbmdTZXJ2aWNlIH0gZnJvbSAnLi91cmwtdHJhbnNsYXRpb24vdXJsLXBhcnNpbmcuc2VydmljZSc7XG5pbXBvcnQgeyBSb3V0ZVJlY29nbml6ZXJTZXJ2aWNlIH0gZnJvbSAnLi91cmwtdHJhbnNsYXRpb24vcm91dGUtcmVjb2duaXplci5zZXJ2aWNlJztcbmltcG9ydCB7IFVybFRyYW5zbGF0aW9uU2VydmljZSB9IGZyb20gJy4vdXJsLXRyYW5zbGF0aW9uL3VybC10cmFuc2xhdGlvbi5zZXJ2aWNlJztcblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRDb25maWd1cmFibGVSb3V0ZXMoXG4gIHNlcnZpY2U6IENvbmZpZ3VyYWJsZVJvdXRlc1NlcnZpY2Vcbik6ICgpID0+IFByb21pc2U8dm9pZD4ge1xuICBjb25zdCByZXN1bHQgPSAoKSA9PiBzZXJ2aWNlLmluaXQoKTsgLy8gd29ya2Fyb3VuZCBmb3IgQU9UIGNvbXBpbGF0aW9uIChzZWUgaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzUxOTc3MTE1KVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIENvbmZpZ01vZHVsZS53aXRoQ29uZmlnKGRlZmF1bHRDb25maWd1cmFibGVSb3V0ZXNDb25maWcpLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtdLFxuICBleHBvcnRzOiBbXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgQ29uZmlndXJhYmxlUm91dGVzU2VydmljZSxcbiAgICBSb3V0ZXNDb25maWdMb2FkZXIsXG4gICAgVXJsVHJhbnNsYXRpb25TZXJ2aWNlLFxuICAgIFJvdXRlUmVjb2duaXplclNlcnZpY2UsXG4gICAgVXJsUGFyc2luZ1NlcnZpY2UsXG4gICAge1xuICAgICAgcHJvdmlkZTogQVBQX0lOSVRJQUxJWkVSLFxuICAgICAgdXNlRmFjdG9yeTogaW5pdENvbmZpZ3VyYWJsZVJvdXRlcyxcbiAgICAgIGRlcHM6IFtDb25maWd1cmFibGVSb3V0ZXNTZXJ2aWNlXSxcbiAgICAgIG11bHRpOiB0cnVlLFxuICAgIH0sXG4gICAgeyBwcm92aWRlOiBDb25maWd1cmFibGVSb3V0ZXNDb25maWcsIHVzZUV4aXN0aW5nOiBDb25maWcgfSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgQ29uZmlndXJhYmxlUm91dGVzTW9kdWxlIHt9XG4iXX0=