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
    const result = () => service.init();
    return result;
}
export class ConfigurableRoutesModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlndXJhYmxlLXJvdXRlcy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvcm91dGluZy9jb25maWd1cmFibGUtcm91dGVzL2NvbmZpZ3VyYWJsZS1yb3V0ZXMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxlQUFlLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUQsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDMUUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDeEQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0saUNBQWlDLENBQUM7Ozs7O0FBRXZFLE1BQU0sVUFBVSxzQkFBc0IsQ0FDcEMsT0FBa0M7O1VBRTVCLE1BQU0sR0FBRyxHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFO0lBQ25DLE9BQU8sTUFBTSxDQUFDO0FBQ2hCLENBQUM7QUFjRCxNQUFNLE9BQU8sd0JBQXdCOzs7WUFacEMsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxZQUFZLENBQUMsVUFBVSxDQUFDLG9CQUFvQixDQUFDLENBQUM7Z0JBQ3RFLFNBQVMsRUFBRTtvQkFDVDt3QkFDRSxPQUFPLEVBQUUsZUFBZTt3QkFDeEIsVUFBVSxFQUFFLHNCQUFzQjt3QkFDbEMsSUFBSSxFQUFFLENBQUMseUJBQXlCLENBQUM7d0JBQ2pDLEtBQUssRUFBRSxJQUFJO3FCQUNaO29CQUNELEVBQUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFO2lCQUNoRDthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlLCBBUFBfSU5JVElBTElaRVIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbmZpZ3VyYWJsZVJvdXRlc1NlcnZpY2UgfSBmcm9tICcuL2NvbmZpZ3VyYWJsZS1yb3V0ZXMuc2VydmljZSc7XG5pbXBvcnQgeyBDb25maWdNb2R1bGUsIENvbmZpZyB9IGZyb20gJy4uLy4uL2NvbmZpZy9jb25maWcubW9kdWxlJztcbmltcG9ydCB7IFJvdXRpbmdDb25maWcgfSBmcm9tICcuL2NvbmZpZy9yb3V0aW5nLWNvbmZpZyc7XG5pbXBvcnQgeyBkZWZhdWx0Um91dGluZ0NvbmZpZyB9IGZyb20gJy4vY29uZmlnL2RlZmF1bHQtcm91dGluZy1jb25maWcnO1xuXG5leHBvcnQgZnVuY3Rpb24gaW5pdENvbmZpZ3VyYWJsZVJvdXRlcyhcbiAgc2VydmljZTogQ29uZmlndXJhYmxlUm91dGVzU2VydmljZVxuKTogKCkgPT4gdm9pZCB7XG4gIGNvbnN0IHJlc3VsdCA9ICgpID0+IHNlcnZpY2UuaW5pdCgpOyAvLyB3b3JrYXJvdW5kIGZvciBBT1QgY29tcGlsYXRpb24gKHNlZSBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNTE5NzcxMTUpXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIENvbmZpZ01vZHVsZS53aXRoQ29uZmlnKGRlZmF1bHRSb3V0aW5nQ29uZmlnKV0sXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IEFQUF9JTklUSUFMSVpFUixcbiAgICAgIHVzZUZhY3Rvcnk6IGluaXRDb25maWd1cmFibGVSb3V0ZXMsXG4gICAgICBkZXBzOiBbQ29uZmlndXJhYmxlUm91dGVzU2VydmljZV0sXG4gICAgICBtdWx0aTogdHJ1ZSxcbiAgICB9LFxuICAgIHsgcHJvdmlkZTogUm91dGluZ0NvbmZpZywgdXNlRXhpc3Rpbmc6IENvbmZpZyB9LFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBDb25maWd1cmFibGVSb3V0ZXNNb2R1bGUge31cbiJdfQ==