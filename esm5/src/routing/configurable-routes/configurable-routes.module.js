/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { ConfigurableRoutesService } from './configurable-routes.service';
import { ConfigModule, Config } from '../../config/config.module';
import { RoutingConfig } from './config/routing-config';
import { defaultRoutingConfig } from './config/default-routing-config';
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
                    imports: [CommonModule, ConfigModule.withConfig(defaultRoutingConfig)],
                    providers: [
                        {
                            provide: APP_INITIALIZER,
                            useFactory: initConfigurableRoutes,
                            deps: [ConfigurableRoutesService],
                            multi: true,
                        },
                        { provide: RoutingConfig, useExisting: Config },
                    ],
                },] }
    ];
    return ConfigurableRoutesModule;
}());
export { ConfigurableRoutesModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlndXJhYmxlLXJvdXRlcy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvcm91dGluZy9jb25maWd1cmFibGUtcm91dGVzL2NvbmZpZ3VyYWJsZS1yb3V0ZXMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxlQUFlLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUQsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDMUUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDeEQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0saUNBQWlDLENBQUM7Ozs7O0FBRXZFLE1BQU0sVUFBVSxzQkFBc0IsQ0FDcEMsT0FBa0M7O1FBRTVCLE1BQU0sR0FBRyxjQUFNLE9BQUEsT0FBTyxDQUFDLElBQUksRUFBRSxFQUFkLENBQWM7SUFDbkMsT0FBTyxNQUFNLENBQUM7QUFDaEIsQ0FBQztBQUVEO0lBQUE7SUFZdUMsQ0FBQzs7Z0JBWnZDLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsWUFBWSxDQUFDLFVBQVUsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO29CQUN0RSxTQUFTLEVBQUU7d0JBQ1Q7NEJBQ0UsT0FBTyxFQUFFLGVBQWU7NEJBQ3hCLFVBQVUsRUFBRSxzQkFBc0I7NEJBQ2xDLElBQUksRUFBRSxDQUFDLHlCQUF5QixDQUFDOzRCQUNqQyxLQUFLLEVBQUUsSUFBSTt5QkFDWjt3QkFDRCxFQUFFLE9BQU8sRUFBRSxhQUFhLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRTtxQkFDaEQ7aUJBQ0Y7O0lBQ3NDLCtCQUFDO0NBQUEsQUFaeEMsSUFZd0M7U0FBM0Isd0JBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlLCBBUFBfSU5JVElBTElaRVIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbmZpZ3VyYWJsZVJvdXRlc1NlcnZpY2UgfSBmcm9tICcuL2NvbmZpZ3VyYWJsZS1yb3V0ZXMuc2VydmljZSc7XG5pbXBvcnQgeyBDb25maWdNb2R1bGUsIENvbmZpZyB9IGZyb20gJy4uLy4uL2NvbmZpZy9jb25maWcubW9kdWxlJztcbmltcG9ydCB7IFJvdXRpbmdDb25maWcgfSBmcm9tICcuL2NvbmZpZy9yb3V0aW5nLWNvbmZpZyc7XG5pbXBvcnQgeyBkZWZhdWx0Um91dGluZ0NvbmZpZyB9IGZyb20gJy4vY29uZmlnL2RlZmF1bHQtcm91dGluZy1jb25maWcnO1xuXG5leHBvcnQgZnVuY3Rpb24gaW5pdENvbmZpZ3VyYWJsZVJvdXRlcyhcbiAgc2VydmljZTogQ29uZmlndXJhYmxlUm91dGVzU2VydmljZVxuKTogKCkgPT4gdm9pZCB7XG4gIGNvbnN0IHJlc3VsdCA9ICgpID0+IHNlcnZpY2UuaW5pdCgpOyAvLyB3b3JrYXJvdW5kIGZvciBBT1QgY29tcGlsYXRpb24gKHNlZSBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNTE5NzcxMTUpXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIENvbmZpZ01vZHVsZS53aXRoQ29uZmlnKGRlZmF1bHRSb3V0aW5nQ29uZmlnKV0sXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IEFQUF9JTklUSUFMSVpFUixcbiAgICAgIHVzZUZhY3Rvcnk6IGluaXRDb25maWd1cmFibGVSb3V0ZXMsXG4gICAgICBkZXBzOiBbQ29uZmlndXJhYmxlUm91dGVzU2VydmljZV0sXG4gICAgICBtdWx0aTogdHJ1ZSxcbiAgICB9LFxuICAgIHsgcHJvdmlkZTogUm91dGluZ0NvbmZpZywgdXNlRXhpc3Rpbmc6IENvbmZpZyB9LFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBDb25maWd1cmFibGVSb3V0ZXNNb2R1bGUge31cbiJdfQ==