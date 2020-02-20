var RoutingModule_1;
import { __decorate } from "tslib";
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { RouterStateSerializer, StoreRouterConnectingModule, } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { Config } from '../config/config.module';
import { RoutingConfig } from './configurable-routes/config/routing-config';
import { ConfigurableRoutesService } from './configurable-routes/configurable-routes.service';
import { effects } from './store/effects/index';
import { CustomSerializer, reducerProvider, reducerToken, } from './store/reducers/router.reducer';
import { ROUTING_FEATURE } from './store/routing-state';
export function initConfigurableRoutes(service) {
    const result = () => service.init(); // workaround for AOT compilation (see https://stackoverflow.com/a/51977115)
    return result;
}
let RoutingModule = RoutingModule_1 = class RoutingModule {
    static forRoot() {
        return {
            ngModule: RoutingModule_1,
            providers: [
                reducerProvider,
                {
                    provide: RouterStateSerializer,
                    useClass: CustomSerializer,
                },
                {
                    provide: APP_INITIALIZER,
                    useFactory: initConfigurableRoutes,
                    deps: [ConfigurableRoutesService],
                    multi: true,
                },
                { provide: RoutingConfig, useExisting: Config },
            ],
        };
    }
};
RoutingModule = RoutingModule_1 = __decorate([
    NgModule({
        imports: [
            StoreModule.forFeature(ROUTING_FEATURE, reducerToken),
            EffectsModule.forFeature(effects),
            StoreRouterConnectingModule.forRoot({
                routerState: 1 /* Minimal */,
                stateKey: ROUTING_FEATURE,
            }),
        ],
    })
], RoutingModule);
export { RoutingModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGluZy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvcm91dGluZy9yb3V0aW5nLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE9BQU8sRUFBRSxlQUFlLEVBQXVCLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlDLE9BQU8sRUFFTCxxQkFBcUIsRUFDckIsMkJBQTJCLEdBQzVCLE1BQU0sb0JBQW9CLENBQUM7QUFDNUIsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUMxQyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDakQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQzVFLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBQzlGLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNoRCxPQUFPLEVBQ0wsZ0JBQWdCLEVBQ2hCLGVBQWUsRUFDZixZQUFZLEdBQ2IsTUFBTSxpQ0FBaUMsQ0FBQztBQUN6QyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFeEQsTUFBTSxVQUFVLHNCQUFzQixDQUNwQyxPQUFrQztJQUVsQyxNQUFNLE1BQU0sR0FBRyxHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyw0RUFBNEU7SUFDakgsT0FBTyxNQUFNLENBQUM7QUFDaEIsQ0FBQztBQVlELElBQWEsYUFBYSxxQkFBMUIsTUFBYSxhQUFhO0lBQ3hCLE1BQU0sQ0FBQyxPQUFPO1FBQ1osT0FBTztZQUNMLFFBQVEsRUFBRSxlQUFhO1lBQ3ZCLFNBQVMsRUFBRTtnQkFDVCxlQUFlO2dCQUNmO29CQUNFLE9BQU8sRUFBRSxxQkFBcUI7b0JBQzlCLFFBQVEsRUFBRSxnQkFBZ0I7aUJBQzNCO2dCQUNEO29CQUNFLE9BQU8sRUFBRSxlQUFlO29CQUN4QixVQUFVLEVBQUUsc0JBQXNCO29CQUNsQyxJQUFJLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQztvQkFDakMsS0FBSyxFQUFFLElBQUk7aUJBQ1o7Z0JBQ0QsRUFBRSxPQUFPLEVBQUUsYUFBYSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUU7YUFDaEQ7U0FDRixDQUFDO0lBQ0osQ0FBQztDQUNGLENBQUE7QUFwQlksYUFBYTtJQVZ6QixRQUFRLENBQUM7UUFDUixPQUFPLEVBQUU7WUFDUCxXQUFXLENBQUMsVUFBVSxDQUFDLGVBQWUsRUFBRSxZQUFZLENBQUM7WUFDckQsYUFBYSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUM7WUFDakMsMkJBQTJCLENBQUMsT0FBTyxDQUFDO2dCQUNsQyxXQUFXLGlCQUFxQjtnQkFDaEMsUUFBUSxFQUFFLGVBQWU7YUFDMUIsQ0FBQztTQUNIO0tBQ0YsQ0FBQztHQUNXLGFBQWEsQ0FvQnpCO1NBcEJZLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBUFBfSU5JVElBTElaRVIsIE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBFZmZlY3RzTW9kdWxlIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5pbXBvcnQge1xuICBSb3V0ZXJTdGF0ZSxcbiAgUm91dGVyU3RhdGVTZXJpYWxpemVyLFxuICBTdG9yZVJvdXRlckNvbm5lY3RpbmdNb2R1bGUsXG59IGZyb20gJ0BuZ3J4L3JvdXRlci1zdG9yZSc7XG5pbXBvcnQgeyBTdG9yZU1vZHVsZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gJy4uL2NvbmZpZy9jb25maWcubW9kdWxlJztcbmltcG9ydCB7IFJvdXRpbmdDb25maWcgfSBmcm9tICcuL2NvbmZpZ3VyYWJsZS1yb3V0ZXMvY29uZmlnL3JvdXRpbmctY29uZmlnJztcbmltcG9ydCB7IENvbmZpZ3VyYWJsZVJvdXRlc1NlcnZpY2UgfSBmcm9tICcuL2NvbmZpZ3VyYWJsZS1yb3V0ZXMvY29uZmlndXJhYmxlLXJvdXRlcy5zZXJ2aWNlJztcbmltcG9ydCB7IGVmZmVjdHMgfSBmcm9tICcuL3N0b3JlL2VmZmVjdHMvaW5kZXgnO1xuaW1wb3J0IHtcbiAgQ3VzdG9tU2VyaWFsaXplcixcbiAgcmVkdWNlclByb3ZpZGVyLFxuICByZWR1Y2VyVG9rZW4sXG59IGZyb20gJy4vc3RvcmUvcmVkdWNlcnMvcm91dGVyLnJlZHVjZXInO1xuaW1wb3J0IHsgUk9VVElOR19GRUFUVVJFIH0gZnJvbSAnLi9zdG9yZS9yb3V0aW5nLXN0YXRlJztcblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRDb25maWd1cmFibGVSb3V0ZXMoXG4gIHNlcnZpY2U6IENvbmZpZ3VyYWJsZVJvdXRlc1NlcnZpY2Vcbik6ICgpID0+IHZvaWQge1xuICBjb25zdCByZXN1bHQgPSAoKSA9PiBzZXJ2aWNlLmluaXQoKTsgLy8gd29ya2Fyb3VuZCBmb3IgQU9UIGNvbXBpbGF0aW9uIChzZWUgaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzUxOTc3MTE1KVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgU3RvcmVNb2R1bGUuZm9yRmVhdHVyZShST1VUSU5HX0ZFQVRVUkUsIHJlZHVjZXJUb2tlbiksXG4gICAgRWZmZWN0c01vZHVsZS5mb3JGZWF0dXJlKGVmZmVjdHMpLFxuICAgIFN0b3JlUm91dGVyQ29ubmVjdGluZ01vZHVsZS5mb3JSb290KHtcbiAgICAgIHJvdXRlclN0YXRlOiBSb3V0ZXJTdGF0ZS5NaW5pbWFsLFxuICAgICAgc3RhdGVLZXk6IFJPVVRJTkdfRkVBVFVSRSwgLy8gbmFtZSBvZiByZWR1Y2VyIGtleVxuICAgIH0pLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBSb3V0aW5nTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVyczxSb3V0aW5nTW9kdWxlPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBSb3V0aW5nTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHJlZHVjZXJQcm92aWRlcixcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6IFJvdXRlclN0YXRlU2VyaWFsaXplcixcbiAgICAgICAgICB1c2VDbGFzczogQ3VzdG9tU2VyaWFsaXplcixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6IEFQUF9JTklUSUFMSVpFUixcbiAgICAgICAgICB1c2VGYWN0b3J5OiBpbml0Q29uZmlndXJhYmxlUm91dGVzLFxuICAgICAgICAgIGRlcHM6IFtDb25maWd1cmFibGVSb3V0ZXNTZXJ2aWNlXSxcbiAgICAgICAgICBtdWx0aTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAgeyBwcm92aWRlOiBSb3V0aW5nQ29uZmlnLCB1c2VFeGlzdGluZzogQ29uZmlnIH0sXG4gICAgICBdLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==