/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { ConfigurableRoutesService } from './configurable-routes.service';
import { Config } from '../../config/config.module';
import { RoutingConfig } from './config/routing-config';
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
                    imports: [CommonModule],
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlndXJhYmxlLXJvdXRlcy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvcm91dGluZy9jb25maWd1cmFibGUtcm91dGVzL2NvbmZpZ3VyYWJsZS1yb3V0ZXMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxlQUFlLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUQsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDMUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3BELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7Ozs7QUFFeEQsTUFBTSxVQUFVLHNCQUFzQixDQUNwQyxPQUFrQzs7UUFFNUIsTUFBTSxHQUFHLGNBQU0sT0FBQSxPQUFPLENBQUMsSUFBSSxFQUFFLEVBQWQsQ0FBYztJQUNuQyxPQUFPLE1BQU0sQ0FBQztBQUNoQixDQUFDO0FBRUQ7SUFBQTtJQVl1QyxDQUFDOztnQkFadkMsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQztvQkFDdkIsU0FBUyxFQUFFO3dCQUNUOzRCQUNFLE9BQU8sRUFBRSxlQUFlOzRCQUN4QixVQUFVLEVBQUUsc0JBQXNCOzRCQUNsQyxJQUFJLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQzs0QkFDakMsS0FBSyxFQUFFLElBQUk7eUJBQ1o7d0JBQ0QsRUFBRSxPQUFPLEVBQUUsYUFBYSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUU7cUJBQ2hEO2lCQUNGOztJQUNzQywrQkFBQztDQUFBLEFBWnhDLElBWXdDO1NBQTNCLHdCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSwgQVBQX0lOSVRJQUxJWkVSIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb25maWd1cmFibGVSb3V0ZXNTZXJ2aWNlIH0gZnJvbSAnLi9jb25maWd1cmFibGUtcm91dGVzLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSAnLi4vLi4vY29uZmlnL2NvbmZpZy5tb2R1bGUnO1xuaW1wb3J0IHsgUm91dGluZ0NvbmZpZyB9IGZyb20gJy4vY29uZmlnL3JvdXRpbmctY29uZmlnJztcblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRDb25maWd1cmFibGVSb3V0ZXMoXG4gIHNlcnZpY2U6IENvbmZpZ3VyYWJsZVJvdXRlc1NlcnZpY2Vcbik6ICgpID0+IHZvaWQge1xuICBjb25zdCByZXN1bHQgPSAoKSA9PiBzZXJ2aWNlLmluaXQoKTsgLy8gd29ya2Fyb3VuZCBmb3IgQU9UIGNvbXBpbGF0aW9uIChzZWUgaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzUxOTc3MTE1KVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogQVBQX0lOSVRJQUxJWkVSLFxuICAgICAgdXNlRmFjdG9yeTogaW5pdENvbmZpZ3VyYWJsZVJvdXRlcyxcbiAgICAgIGRlcHM6IFtDb25maWd1cmFibGVSb3V0ZXNTZXJ2aWNlXSxcbiAgICAgIG11bHRpOiB0cnVlLFxuICAgIH0sXG4gICAgeyBwcm92aWRlOiBSb3V0aW5nQ29uZmlnLCB1c2VFeGlzdGluZzogQ29uZmlnIH0sXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIENvbmZpZ3VyYWJsZVJvdXRlc01vZHVsZSB7fVxuIl19