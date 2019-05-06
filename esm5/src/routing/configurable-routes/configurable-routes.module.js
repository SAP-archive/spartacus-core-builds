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
                    declarations: [],
                    exports: [],
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlndXJhYmxlLXJvdXRlcy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvcm91dGluZy9jb25maWd1cmFibGUtcm91dGVzL2NvbmZpZ3VyYWJsZS1yb3V0ZXMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxlQUFlLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUQsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDMUUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDeEQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0saUNBQWlDLENBQUM7Ozs7O0FBRXZFLE1BQU0sVUFBVSxzQkFBc0IsQ0FDcEMsT0FBa0M7O1FBRTVCLE1BQU0sR0FBRyxjQUFNLE9BQUEsT0FBTyxDQUFDLElBQUksRUFBRSxFQUFkLENBQWM7SUFDbkMsT0FBTyxNQUFNLENBQUM7QUFDaEIsQ0FBQztBQUVEO0lBQUE7SUFjdUMsQ0FBQzs7Z0JBZHZDLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsWUFBWSxDQUFDLFVBQVUsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO29CQUN0RSxZQUFZLEVBQUUsRUFBRTtvQkFDaEIsT0FBTyxFQUFFLEVBQUU7b0JBQ1gsU0FBUyxFQUFFO3dCQUNUOzRCQUNFLE9BQU8sRUFBRSxlQUFlOzRCQUN4QixVQUFVLEVBQUUsc0JBQXNCOzRCQUNsQyxJQUFJLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQzs0QkFDakMsS0FBSyxFQUFFLElBQUk7eUJBQ1o7d0JBQ0QsRUFBRSxPQUFPLEVBQUUsYUFBYSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUU7cUJBQ2hEO2lCQUNGOztJQUNzQywrQkFBQztDQUFBLEFBZHhDLElBY3dDO1NBQTNCLHdCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSwgQVBQX0lOSVRJQUxJWkVSIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb25maWd1cmFibGVSb3V0ZXNTZXJ2aWNlIH0gZnJvbSAnLi9jb25maWd1cmFibGUtcm91dGVzLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ29uZmlnTW9kdWxlLCBDb25maWcgfSBmcm9tICcuLi8uLi9jb25maWcvY29uZmlnLm1vZHVsZSc7XG5pbXBvcnQgeyBSb3V0aW5nQ29uZmlnIH0gZnJvbSAnLi9jb25maWcvcm91dGluZy1jb25maWcnO1xuaW1wb3J0IHsgZGVmYXVsdFJvdXRpbmdDb25maWcgfSBmcm9tICcuL2NvbmZpZy9kZWZhdWx0LXJvdXRpbmctY29uZmlnJztcblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRDb25maWd1cmFibGVSb3V0ZXMoXG4gIHNlcnZpY2U6IENvbmZpZ3VyYWJsZVJvdXRlc1NlcnZpY2Vcbik6ICgpID0+IHZvaWQge1xuICBjb25zdCByZXN1bHQgPSAoKSA9PiBzZXJ2aWNlLmluaXQoKTsgLy8gd29ya2Fyb3VuZCBmb3IgQU9UIGNvbXBpbGF0aW9uIChzZWUgaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzUxOTc3MTE1KVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBDb25maWdNb2R1bGUud2l0aENvbmZpZyhkZWZhdWx0Um91dGluZ0NvbmZpZyldLFxuICBkZWNsYXJhdGlvbnM6IFtdLFxuICBleHBvcnRzOiBbXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogQVBQX0lOSVRJQUxJWkVSLFxuICAgICAgdXNlRmFjdG9yeTogaW5pdENvbmZpZ3VyYWJsZVJvdXRlcyxcbiAgICAgIGRlcHM6IFtDb25maWd1cmFibGVSb3V0ZXNTZXJ2aWNlXSxcbiAgICAgIG11bHRpOiB0cnVlLFxuICAgIH0sXG4gICAgeyBwcm92aWRlOiBSb3V0aW5nQ29uZmlnLCB1c2VFeGlzdGluZzogQ29uZmlnIH0sXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIENvbmZpZ3VyYWJsZVJvdXRlc01vZHVsZSB7fVxuIl19