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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlndXJhYmxlLXJvdXRlcy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvcm91dGluZy9jb25maWd1cmFibGUtcm91dGVzL2NvbmZpZ3VyYWJsZS1yb3V0ZXMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxlQUFlLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUQsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDMUUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDNUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUMvRSxPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUM5RixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUMxRSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUNwRixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQzs7Ozs7QUFFbEYsTUFBTSxVQUFVLHNCQUFzQixDQUNwQyxPQUFrQzs7VUFFNUIsTUFBTSxHQUFHLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUU7SUFDbkMsT0FBTyxNQUFNLENBQUM7QUFDaEIsQ0FBQztBQXdCRCxNQUFNLE9BQU8sd0JBQXdCOzs7WUF0QnBDLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWixZQUFZLENBQUMsVUFBVSxDQUFDLCtCQUErQixDQUFDO2lCQUN6RDtnQkFDRCxZQUFZLEVBQUUsRUFBRTtnQkFDaEIsT0FBTyxFQUFFLEVBQUU7Z0JBQ1gsU0FBUyxFQUFFO29CQUNULHlCQUF5QjtvQkFDekIsa0JBQWtCO29CQUNsQixxQkFBcUI7b0JBQ3JCLHNCQUFzQjtvQkFDdEIsaUJBQWlCO29CQUNqQjt3QkFDRSxPQUFPLEVBQUUsZUFBZTt3QkFDeEIsVUFBVSxFQUFFLHNCQUFzQjt3QkFDbEMsSUFBSSxFQUFFLENBQUMseUJBQXlCLENBQUM7d0JBQ2pDLEtBQUssRUFBRSxJQUFJO3FCQUNaO29CQUNELEVBQUUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUU7aUJBQzNEO2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUsIEFQUF9JTklUSUFMSVpFUiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29uZmlndXJhYmxlUm91dGVzU2VydmljZSB9IGZyb20gJy4vY29uZmlndXJhYmxlLXJvdXRlcy5zZXJ2aWNlJztcbmltcG9ydCB7IFJvdXRlc0NvbmZpZ0xvYWRlciB9IGZyb20gJy4vcm91dGVzLWNvbmZpZy1sb2FkZXInO1xuaW1wb3J0IHsgQ29uZmlnTW9kdWxlLCBDb25maWcgfSBmcm9tICcuLi8uLi9jb25maWcvY29uZmlnLm1vZHVsZSc7XG5pbXBvcnQgeyBDb25maWd1cmFibGVSb3V0ZXNDb25maWcgfSBmcm9tICcuL2NvbmZpZy9jb25maWd1cmFibGUtcm91dGVzLWNvbmZpZyc7XG5pbXBvcnQgeyBkZWZhdWx0Q29uZmlndXJhYmxlUm91dGVzQ29uZmlnIH0gZnJvbSAnLi9jb25maWcvZGVmYXVsdC1jb25maWd1cmFibGUtcm91dGVzLWNvbmZpZyc7XG5pbXBvcnQgeyBVcmxQYXJzaW5nU2VydmljZSB9IGZyb20gJy4vdXJsLXRyYW5zbGF0aW9uL3VybC1wYXJzaW5nLnNlcnZpY2UnO1xuaW1wb3J0IHsgUm91dGVSZWNvZ25pemVyU2VydmljZSB9IGZyb20gJy4vdXJsLXRyYW5zbGF0aW9uL3JvdXRlLXJlY29nbml6ZXIuc2VydmljZSc7XG5pbXBvcnQgeyBVcmxUcmFuc2xhdGlvblNlcnZpY2UgfSBmcm9tICcuL3VybC10cmFuc2xhdGlvbi91cmwtdHJhbnNsYXRpb24uc2VydmljZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0Q29uZmlndXJhYmxlUm91dGVzKFxuICBzZXJ2aWNlOiBDb25maWd1cmFibGVSb3V0ZXNTZXJ2aWNlXG4pOiAoKSA9PiBQcm9taXNlPHZvaWQ+IHtcbiAgY29uc3QgcmVzdWx0ID0gKCkgPT4gc2VydmljZS5pbml0KCk7IC8vIHdvcmthcm91bmQgZm9yIEFPVCBjb21waWxhdGlvbiAoc2VlIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS81MTk3NzExNSlcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBDb25maWdNb2R1bGUud2l0aENvbmZpZyhkZWZhdWx0Q29uZmlndXJhYmxlUm91dGVzQ29uZmlnKSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXSxcbiAgZXhwb3J0czogW10sXG4gIHByb3ZpZGVyczogW1xuICAgIENvbmZpZ3VyYWJsZVJvdXRlc1NlcnZpY2UsXG4gICAgUm91dGVzQ29uZmlnTG9hZGVyLFxuICAgIFVybFRyYW5zbGF0aW9uU2VydmljZSxcbiAgICBSb3V0ZVJlY29nbml6ZXJTZXJ2aWNlLFxuICAgIFVybFBhcnNpbmdTZXJ2aWNlLFxuICAgIHtcbiAgICAgIHByb3ZpZGU6IEFQUF9JTklUSUFMSVpFUixcbiAgICAgIHVzZUZhY3Rvcnk6IGluaXRDb25maWd1cmFibGVSb3V0ZXMsXG4gICAgICBkZXBzOiBbQ29uZmlndXJhYmxlUm91dGVzU2VydmljZV0sXG4gICAgICBtdWx0aTogdHJ1ZSxcbiAgICB9LFxuICAgIHsgcHJvdmlkZTogQ29uZmlndXJhYmxlUm91dGVzQ29uZmlnLCB1c2VFeGlzdGluZzogQ29uZmlnIH0sXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIENvbmZpZ3VyYWJsZVJvdXRlc01vZHVsZSB7fVxuIl19