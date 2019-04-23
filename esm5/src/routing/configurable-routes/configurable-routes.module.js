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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlndXJhYmxlLXJvdXRlcy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvcm91dGluZy9jb25maWd1cmFibGUtcm91dGVzL2NvbmZpZ3VyYWJsZS1yb3V0ZXMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxlQUFlLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUQsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDMUUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDNUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUMvRSxPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUM5RixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUMxRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQzs7Ozs7QUFFbEYsTUFBTSxVQUFVLHNCQUFzQixDQUNwQyxPQUFrQzs7UUFFNUIsTUFBTSxHQUFHLGNBQU0sT0FBQSxPQUFPLENBQUMsSUFBSSxFQUFFLEVBQWQsQ0FBYztJQUNuQyxPQUFPLE1BQU0sQ0FBQztBQUNoQixDQUFDO0FBRUQ7SUFBQTtJQXFCdUMsQ0FBQzs7Z0JBckJ2QyxRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osWUFBWSxDQUFDLFVBQVUsQ0FBQywrQkFBK0IsQ0FBQztxQkFDekQ7b0JBQ0QsWUFBWSxFQUFFLEVBQUU7b0JBQ2hCLE9BQU8sRUFBRSxFQUFFO29CQUNYLFNBQVMsRUFBRTt3QkFDVCx5QkFBeUI7d0JBQ3pCLGtCQUFrQjt3QkFDbEIscUJBQXFCO3dCQUNyQixpQkFBaUI7d0JBQ2pCOzRCQUNFLE9BQU8sRUFBRSxlQUFlOzRCQUN4QixVQUFVLEVBQUUsc0JBQXNCOzRCQUNsQyxJQUFJLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQzs0QkFDakMsS0FBSyxFQUFFLElBQUk7eUJBQ1o7d0JBQ0QsRUFBRSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRTtxQkFDM0Q7aUJBQ0Y7O0lBQ3NDLCtCQUFDO0NBQUEsQUFyQnhDLElBcUJ3QztTQUEzQix3QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUsIEFQUF9JTklUSUFMSVpFUiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29uZmlndXJhYmxlUm91dGVzU2VydmljZSB9IGZyb20gJy4vY29uZmlndXJhYmxlLXJvdXRlcy5zZXJ2aWNlJztcbmltcG9ydCB7IFJvdXRlc0NvbmZpZ0xvYWRlciB9IGZyb20gJy4vcm91dGVzLWNvbmZpZy1sb2FkZXInO1xuaW1wb3J0IHsgQ29uZmlnTW9kdWxlLCBDb25maWcgfSBmcm9tICcuLi8uLi9jb25maWcvY29uZmlnLm1vZHVsZSc7XG5pbXBvcnQgeyBDb25maWd1cmFibGVSb3V0ZXNDb25maWcgfSBmcm9tICcuL2NvbmZpZy9jb25maWd1cmFibGUtcm91dGVzLWNvbmZpZyc7XG5pbXBvcnQgeyBkZWZhdWx0Q29uZmlndXJhYmxlUm91dGVzQ29uZmlnIH0gZnJvbSAnLi9jb25maWcvZGVmYXVsdC1jb25maWd1cmFibGUtcm91dGVzLWNvbmZpZyc7XG5pbXBvcnQgeyBVcmxQYXJzaW5nU2VydmljZSB9IGZyb20gJy4vdXJsLXRyYW5zbGF0aW9uL3VybC1wYXJzaW5nLnNlcnZpY2UnO1xuaW1wb3J0IHsgVXJsVHJhbnNsYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi91cmwtdHJhbnNsYXRpb24vdXJsLXRyYW5zbGF0aW9uLnNlcnZpY2UnO1xuXG5leHBvcnQgZnVuY3Rpb24gaW5pdENvbmZpZ3VyYWJsZVJvdXRlcyhcbiAgc2VydmljZTogQ29uZmlndXJhYmxlUm91dGVzU2VydmljZVxuKTogKCkgPT4gUHJvbWlzZTx2b2lkPiB7XG4gIGNvbnN0IHJlc3VsdCA9ICgpID0+IHNlcnZpY2UuaW5pdCgpOyAvLyB3b3JrYXJvdW5kIGZvciBBT1QgY29tcGlsYXRpb24gKHNlZSBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNTE5NzcxMTUpXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgQ29uZmlnTW9kdWxlLndpdGhDb25maWcoZGVmYXVsdENvbmZpZ3VyYWJsZVJvdXRlc0NvbmZpZyksXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW10sXG4gIGV4cG9ydHM6IFtdLFxuICBwcm92aWRlcnM6IFtcbiAgICBDb25maWd1cmFibGVSb3V0ZXNTZXJ2aWNlLFxuICAgIFJvdXRlc0NvbmZpZ0xvYWRlcixcbiAgICBVcmxUcmFuc2xhdGlvblNlcnZpY2UsXG4gICAgVXJsUGFyc2luZ1NlcnZpY2UsXG4gICAge1xuICAgICAgcHJvdmlkZTogQVBQX0lOSVRJQUxJWkVSLFxuICAgICAgdXNlRmFjdG9yeTogaW5pdENvbmZpZ3VyYWJsZVJvdXRlcyxcbiAgICAgIGRlcHM6IFtDb25maWd1cmFibGVSb3V0ZXNTZXJ2aWNlXSxcbiAgICAgIG11bHRpOiB0cnVlLFxuICAgIH0sXG4gICAgeyBwcm92aWRlOiBDb25maWd1cmFibGVSb3V0ZXNDb25maWcsIHVzZUV4aXN0aW5nOiBDb25maWcgfSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgQ29uZmlndXJhYmxlUm91dGVzTW9kdWxlIHt9XG4iXX0=