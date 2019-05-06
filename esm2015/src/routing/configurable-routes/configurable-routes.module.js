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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlndXJhYmxlLXJvdXRlcy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvcm91dGluZy9jb25maWd1cmFibGUtcm91dGVzL2NvbmZpZ3VyYWJsZS1yb3V0ZXMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxlQUFlLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUQsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDMUUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDeEQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0saUNBQWlDLENBQUM7Ozs7O0FBRXZFLE1BQU0sVUFBVSxzQkFBc0IsQ0FDcEMsT0FBa0M7O1VBRTVCLE1BQU0sR0FBRyxHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFO0lBQ25DLE9BQU8sTUFBTSxDQUFDO0FBQ2hCLENBQUM7QUFnQkQsTUFBTSxPQUFPLHdCQUF3Qjs7O1lBZHBDLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsWUFBWSxDQUFDLFVBQVUsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO2dCQUN0RSxZQUFZLEVBQUUsRUFBRTtnQkFDaEIsT0FBTyxFQUFFLEVBQUU7Z0JBQ1gsU0FBUyxFQUFFO29CQUNUO3dCQUNFLE9BQU8sRUFBRSxlQUFlO3dCQUN4QixVQUFVLEVBQUUsc0JBQXNCO3dCQUNsQyxJQUFJLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQzt3QkFDakMsS0FBSyxFQUFFLElBQUk7cUJBQ1o7b0JBQ0QsRUFBRSxPQUFPLEVBQUUsYUFBYSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUU7aUJBQ2hEO2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUsIEFQUF9JTklUSUFMSVpFUiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29uZmlndXJhYmxlUm91dGVzU2VydmljZSB9IGZyb20gJy4vY29uZmlndXJhYmxlLXJvdXRlcy5zZXJ2aWNlJztcbmltcG9ydCB7IENvbmZpZ01vZHVsZSwgQ29uZmlnIH0gZnJvbSAnLi4vLi4vY29uZmlnL2NvbmZpZy5tb2R1bGUnO1xuaW1wb3J0IHsgUm91dGluZ0NvbmZpZyB9IGZyb20gJy4vY29uZmlnL3JvdXRpbmctY29uZmlnJztcbmltcG9ydCB7IGRlZmF1bHRSb3V0aW5nQ29uZmlnIH0gZnJvbSAnLi9jb25maWcvZGVmYXVsdC1yb3V0aW5nLWNvbmZpZyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0Q29uZmlndXJhYmxlUm91dGVzKFxuICBzZXJ2aWNlOiBDb25maWd1cmFibGVSb3V0ZXNTZXJ2aWNlXG4pOiAoKSA9PiB2b2lkIHtcbiAgY29uc3QgcmVzdWx0ID0gKCkgPT4gc2VydmljZS5pbml0KCk7IC8vIHdvcmthcm91bmQgZm9yIEFPVCBjb21waWxhdGlvbiAoc2VlIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS81MTk3NzExNSlcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgQ29uZmlnTW9kdWxlLndpdGhDb25maWcoZGVmYXVsdFJvdXRpbmdDb25maWcpXSxcbiAgZGVjbGFyYXRpb25zOiBbXSxcbiAgZXhwb3J0czogW10sXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IEFQUF9JTklUSUFMSVpFUixcbiAgICAgIHVzZUZhY3Rvcnk6IGluaXRDb25maWd1cmFibGVSb3V0ZXMsXG4gICAgICBkZXBzOiBbQ29uZmlndXJhYmxlUm91dGVzU2VydmljZV0sXG4gICAgICBtdWx0aTogdHJ1ZSxcbiAgICB9LFxuICAgIHsgcHJvdmlkZTogUm91dGluZ0NvbmZpZywgdXNlRXhpc3Rpbmc6IENvbmZpZyB9LFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBDb25maWd1cmFibGVSb3V0ZXNNb2R1bGUge31cbiJdfQ==